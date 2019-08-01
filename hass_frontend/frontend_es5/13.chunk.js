(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [13],
  {
    /***/ "./node_modules/@polymer/app-storage/app-storage-behavior.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-storage/app-storage-behavior.js ***!
  \*******************************************************************/
      /*! exports provided: AppStorageBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppStorageBehavior",
          function() {
            return AppStorageBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var SPLICES_RX = /\.splices$/;
        var LENGTH_RX = /\.length$/;
        var NUMBER_RX = /\.?#?([0-9]+)$/;
        /**
         * AppStorageBehavior is an abstract behavior that makes it easy to
         * synchronize in-memory data and a persistent storage system, such as
         * the browser's IndexedDB, or a remote database like Firebase.
         *
         * For examples of how to use this behavior to write your own app storage
         * elements see `<app-localstorage-document>` here, or check out
         * [polymerfire](https://github.com/Firebase/polymerfire) and
         * [app-pouchdb](https://github.com/PolymerElements/app-pouchdb).
         *
         * @polymerBehavior
         */

        var AppStorageBehavior = {
          properties: {
            /**
             * The data to synchronize.
             */
            data: {
              type: Object,
              notify: true,
              value: function value() {
                return this.zeroValue;
              },
            },

            /**
             * If this is true transactions will happen one after the other,
             * never in parallel.
             *
             * Specifically, no transaction will begin until every previously
             * enqueued transaction by this element has completed.
             *
             * If it is false, new transactions will be executed as they are
             * received.
             */
            sequentialTransactions: {
              type: Boolean,
              value: false,
            },

            /**
             * When true, will perform detailed logging.
             */
            log: {
              type: Boolean,
              value: false,
            },
          },
          observers: ["__dataChanged(data.*)"],
          created: function created() {
            this.__initialized = false;
            this.__syncingToMemory = false;
            this.__initializingStoredValue = null;
            this.__transactionQueueAdvances = Promise.resolve();
          },
          ready: function ready() {
            this._initializeStoredValue();
          },

          /**
           * Override this getter to return true if the value has never been
           * persisted to storage.
           *
           * @return {boolean}
           */
          get isNew() {
            return true;
          },

          /**
           * A promise that will resolve once all queued transactions
           * have completed.
           *
           * This field is updated as new transactions are enqueued, so it will
           * only wait for transactions which were enqueued when the field
           * was accessed.
           *
           * This promise never rejects.
           *
           * @return {Promise}
           */
          get transactionsComplete() {
            return this.__transactionQueueAdvances;
          },

          /**
           * Override this getter to define the default value to use when
           * there's no data stored.
           *
           * @return {*}
           */
          get zeroValue() {
            return undefined;
          },

          /**
           * Override this method.
           *
           * If the data value represented by this storage instance is new, this
           * method generates an attempt to write the value to storage.
           *
           *
           * @param {*} args
           * @return {Promise} a Promise that settles only once the write has.
           */
          saveValue: function saveValue(args) {
            return Promise.resolve();
          },

          /**
           * Optional. Override this method to clear out the mapping of this
           * storage object and a logical location within storage.
           *
           * If this method is supported, after it's called, isNew() should be
           * true.
           */
          reset: function reset() {},

          /**
           * Remove the data from storage.
           *
           * @return {Promise} A promise that settles once the destruction is
           *   complete.
           */
          destroy: function destroy() {
            this.data = this.zeroValue;
            return this.saveValue();
          },

          /**
           * Perform the initial sync between storage and memory. This method
           * is called automatically while the element is being initialized.
           * Implementations may override it.
           *
           * If an implementation intends to call this method, it should instead
           * call _initializeStoredValue, which provides reentrancy protection.
           *
           * @return {Promise} A promise that settles once this process is
           *     complete.
           */
          initializeStoredValue: function initializeStoredValue() {
            if (this.isNew) {
              return Promise.resolve();
            } // If this is not a "new" model, then we should attempt
            // to read an initial value from storage:

            return this._getStoredValue("data").then(
              function(data) {
                this._log("Got stored value!", data, this.data);

                if (data == null) {
                  return this._setStoredValue(
                    "data",
                    this.data || this.zeroValue
                  );
                } else {
                  this.syncToMemory(function() {
                    this.set("data", data);
                  });
                }
              }.bind(this)
            );
          },

          /**
           * Override this method to implement reading a value from storage.
           *
           *
           * @param {string} storagePath The path (through storage) of the value to
           *   create, relative to the root of storage associated with this instance.
           * @return {Promise} A promise that resolves with the canonical value stored
           *   at the provided path when the transaction has completed. _If there is no
           *   such value at the provided path through storage, then the promise will
           *   resolve to `undefined`._ The promise will be rejected if the transaction
           *   fails for any reason.
           */
          getStoredValue: function getStoredValue(storagePath) {
            return Promise.resolve();
          },

          /**
           * Override this method to implement creating and updating
           * stored values.
           *
           *
           * @param {string} storagePath The path of the value to update, relative
           *   to the root storage path configured for this instance.
           * @param {*} value The updated in-memory value to apply to the stored value
           *   at the provided path.
           * @return {Promise} A promise that resolves with the canonical value stored
           *   at the provided path when the transaction has completed. The promise
           *   will be rejected if the transaction fails for any reason.
           */
          setStoredValue: function setStoredValue(storagePath, value) {
            return Promise.resolve(value);
          },

          /**
           * Maps a Polymer databinding path to the corresponding path in the
           * storage system. Override to define a custom mapping.
           *
           * The inverse of storagePathToMemoryPath.
           *
           * @param {string} path An in-memory path through a storage object.
           * @return {string} The provided path mapped to the equivalent location in
           *   storage. This mapped version of the path is suitable for use with the
           *   CRUD operations on both memory and storage.
           */
          memoryPathToStoragePath: function memoryPathToStoragePath(path) {
            return path;
          },

          /**
           * Maps a storage path to the corresponding Polymer databinding path.
           * Override to define a custom mapping.
           *
           * The inverse of memoryPathToStoragePath.
           *
           * @param {string} path The storage path through a storage object.
           * @return {string} The provided path through storage mapped to the
           *   equivalent Polymer path through the in-memory representation of storage.
           */
          storagePathToMemoryPath: function storagePathToMemoryPath(path) {
            return path;
          },

          /**
           * Enables performing transformations on the in-memory representation of
           * storage without activating observers that will cause those
           * transformations to be re-applied to the storage backend. This is useful
           * for preventing redundant (or cyclical) application of transformations.
           *
           * @param {Function} operation A function that will perform the desired
           *   transformation. It will be called synchronously, when it is safe to
           *   apply the transformation.
           */
          syncToMemory: function syncToMemory(operation) {
            if (this.__syncingToMemory) {
              return;
            }

            this._group("Sync to memory.");

            this.__syncingToMemory = true;
            operation.call(this);
            this.__syncingToMemory = false;

            this._groupEnd("Sync to memory.");
          },

          /**
           * A convenience method. Returns true iff value is null, undefined,
           * an empty array, or an object with no keys.
           */
          valueIsEmpty: function valueIsEmpty(value) {
            if (Array.isArray(value)) {
              return value.length === 0;
            } else if (Object.prototype.isPrototypeOf(value)) {
              return Object.keys(value).length === 0;
            } else {
              return value == null;
            }
          },

          /**
           * Like `getStoredValue` but called with a Polymer path rather than
           * a storage path.
           *
           * @param {string} path The Polymer path to get.
           * @return {Promise} A Promise of the value stored at that path.
           */
          _getStoredValue: function _getStoredValue(path) {
            return this.getStoredValue(this.memoryPathToStoragePath(path));
          },

          /**
           * Like `setStoredValue` but called with a Polymer path rather than
           * a storage path.
           *
           * @param {string} path The Polymer path to update.
           * @param {*} value The updated in-memory value to apply to the stored value
           *   at the provided path.
           * @return {Promise} A promise that resolves with the canonical value stored
           *   at the provided path when the transaction has completed. The promise
           *   will be rejected if the transaction fails for any reason.
           */
          _setStoredValue: function _setStoredValue(path, value) {
            return this.setStoredValue(
              this.memoryPathToStoragePath(path),
              value
            );
          },

          /**
           * Enqueues the given function in the transaction queue.
           *
           * The transaction queue allows for optional parallelism/sequentiality
           * via the `sequentialTransactions` boolean property, as well as giving
           * the user a convenient way to wait for all pending transactions to
           * finish.
           *
           * The given function may be called immediately or after an arbitrary
           * delay. Its `this` context will be bound to the element.
           *
           * If the transaction performs any asynchronous operations it must
           * return a promise.
           *
           * @param {Function} transaction A function implementing the transaction.
           * @return {Promise} A promise that resolves once the transaction has
           *   finished. This promise will never reject.
           */
          _enqueueTransaction: function _enqueueTransaction(transaction) {
            if (this.sequentialTransactions) {
              transaction = transaction.bind(this);
            } else {
              var result = transaction.call(this);

              transaction = function transaction() {
                return result;
              };
            }

            return (this.__transactionQueueAdvances = this.__transactionQueueAdvances
              .then(transaction)
              .catch(
                function(error) {
                  this._error("Error performing queued transaction.", error);
                }.bind(this)
              ));
          },

          /**
           * A wrapper around `console.log`.
           */
          _log: function _log() {
            if (this.log) {
              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              console.log.apply(console, args);
            }
          },

          /**
           * A wrapper around `console.error`.
           */
          _error: function _error() {
            if (this.log) {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2),
                  _key2 = 0;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2] = arguments[_key2];
              }

              console.error.apply(console, args);
            }
          },

          /**
           * A wrapper around `console.group`.
           */
          _group: function _group() {
            if (this.log) {
              for (
                var _len3 = arguments.length,
                  args = new Array(_len3),
                  _key3 = 0;
                _key3 < _len3;
                _key3++
              ) {
                args[_key3] = arguments[_key3];
              }

              console.group.apply(console, args);
            }
          },

          /**
           * A wrapper around `console.groupEnd`.
           */
          _groupEnd: function _groupEnd() {
            if (this.log) {
              for (
                var _len4 = arguments.length,
                  args = new Array(_len4),
                  _key4 = 0;
                _key4 < _len4;
                _key4++
              ) {
                args[_key4] = arguments[_key4];
              }

              console.groupEnd.apply(console, args);
            }
          },

          /**
           * A reentrancy-save wrapper around `this.initializeStoredValue`.
           * Prefer calling this method over that one.
           *
           * @return {Promise} The result of calling `initializeStoredValue`,
           *   or `undefined` if called while initializing.
           */
          _initializeStoredValue: function _initializeStoredValue() {
            if (this.__initializingStoredValue) {
              return;
            }

            this._group("Initializing stored value.");

            var initializingStoredValue = (this.__initializingStoredValue = this.initializeStoredValue()
              .then(
                function() {
                  this.__initialized = true;
                  this.__initializingStoredValue = null;

                  this._groupEnd("Initializing stored value.");
                }.bind(this)
              )
              .catch(
                function(e) {
                  this.__initializingStoredValue = null;

                  this._groupEnd("Initializing stored value.");
                }.bind(this)
              ));
            return this._enqueueTransaction(function() {
              return initializingStoredValue;
            });
          },
          __dataChanged: function __dataChanged(change) {
            if (
              this.isNew ||
              this.__syncingToMemory ||
              !this.__initialized ||
              this.__pathCanBeIgnored(change.path)
            ) {
              return;
            }

            var path = this.__normalizeMemoryPath(change.path);

            var value = change.value;
            var indexSplices = value && value.indexSplices;

            this._enqueueTransaction(function() {
              this._log("Setting", path + ":", indexSplices || value);

              if (indexSplices && this.__pathIsSplices(path)) {
                path = this.__parentPath(path);
                value = this.get(path);
              }

              return this._setStoredValue(path, value);
            });
          },
          __normalizeMemoryPath: function __normalizeMemoryPath(path) {
            var parts = path.split(".");
            var parentPath = [];
            var currentPath = [];
            var normalizedPath = [];
            var index;

            for (var i = 0; i < parts.length; ++i) {
              currentPath.push(parts[i]);

              if (/^#/.test(parts[i])) {
                normalizedPath.push(
                  this.get(parentPath).indexOf(this.get(currentPath))
                );
              } else {
                normalizedPath.push(parts[i]);
              }

              parentPath.push(parts[i]);
            }

            return normalizedPath.join(".");
          },
          __parentPath: function __parentPath(path) {
            var parentPath = path.split(".");
            return parentPath.slice(0, parentPath.length - 1).join(".");
          },
          __pathCanBeIgnored: function __pathCanBeIgnored(path) {
            return (
              LENGTH_RX.test(path) &&
              Array.isArray(this.get(this.__parentPath(path)))
            );
          },
          __pathIsSplices: function __pathIsSplices(path) {
            return (
              SPLICES_RX.test(path) &&
              Array.isArray(this.get(this.__parentPath(path)))
            );
          },
          __pathRefersToArray: function __pathRefersToArray(path) {
            return (
              (SPLICES_RX.test(path) || LENGTH_RX.test(path)) &&
              Array.isArray(this.get(this.__parentPath(path)))
            );
          },
          __pathTailToIndex: function __pathTailToIndex(path) {
            var tail = path.split(".").pop();
            return window.parseInt(tail.replace(NUMBER_RX, "$1"), 10);
          },
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG52YXIgU1BMSUNFU19SWCA9IC9cXC5zcGxpY2VzJC87XG52YXIgTEVOR1RIX1JYID0gL1xcLmxlbmd0aCQvO1xudmFyIE5VTUJFUl9SWCA9IC9cXC4/Iz8oWzAtOV0rKSQvO1xuXG4vKipcbiAqIEFwcFN0b3JhZ2VCZWhhdmlvciBpcyBhbiBhYnN0cmFjdCBiZWhhdmlvciB0aGF0IG1ha2VzIGl0IGVhc3kgdG9cbiAqIHN5bmNocm9uaXplIGluLW1lbW9yeSBkYXRhIGFuZCBhIHBlcnNpc3RlbnQgc3RvcmFnZSBzeXN0ZW0sIHN1Y2ggYXNcbiAqIHRoZSBicm93c2VyJ3MgSW5kZXhlZERCLCBvciBhIHJlbW90ZSBkYXRhYmFzZSBsaWtlIEZpcmViYXNlLlxuICpcbiAqIEZvciBleGFtcGxlcyBvZiBob3cgdG8gdXNlIHRoaXMgYmVoYXZpb3IgdG8gd3JpdGUgeW91ciBvd24gYXBwIHN0b3JhZ2VcbiAqIGVsZW1lbnRzIHNlZSBgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+YCBoZXJlLCBvciBjaGVjayBvdXRcbiAqIFtwb2x5bWVyZmlyZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZpcmViYXNlL3BvbHltZXJmaXJlKSBhbmRcbiAqIFthcHAtcG91Y2hkYl0oaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9hcHAtcG91Y2hkYikuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgQXBwU3RvcmFnZUJlaGF2aW9yID0ge1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgdG8gc3luY2hyb25pemUuXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy56ZXJvVmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgdHJ1ZSB0cmFuc2FjdGlvbnMgd2lsbCBoYXBwZW4gb25lIGFmdGVyIHRoZSBvdGhlcixcbiAgICAgKiBuZXZlciBpbiBwYXJhbGxlbC5cbiAgICAgKlxuICAgICAqIFNwZWNpZmljYWxseSwgbm8gdHJhbnNhY3Rpb24gd2lsbCBiZWdpbiB1bnRpbCBldmVyeSBwcmV2aW91c2x5XG4gICAgICogZW5xdWV1ZWQgdHJhbnNhY3Rpb24gYnkgdGhpcyBlbGVtZW50IGhhcyBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBJZiBpdCBpcyBmYWxzZSwgbmV3IHRyYW5zYWN0aW9ucyB3aWxsIGJlIGV4ZWN1dGVkIGFzIHRoZXkgYXJlXG4gICAgICogcmVjZWl2ZWQuXG4gICAgICovXG4gICAgc2VxdWVudGlhbFRyYW5zYWN0aW9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHdpbGwgcGVyZm9ybSBkZXRhaWxlZCBsb2dnaW5nLlxuICAgICAqL1xuICAgIGxvZzoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX19kYXRhQ2hhbmdlZChkYXRhLiopJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSA9IGZhbHNlO1xuICAgIHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcyA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RvcmVkVmFsdWUoKTtcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBnZXR0ZXIgdG8gcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIGhhcyBuZXZlciBiZWVuXG4gICAqIHBlcnNpc3RlZCB0byBzdG9yYWdlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzTmV3KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb25jZSBhbGwgcXVldWVkIHRyYW5zYWN0aW9uc1xuICAgKiBoYXZlIGNvbXBsZXRlZC5cbiAgICpcbiAgICogVGhpcyBmaWVsZCBpcyB1cGRhdGVkIGFzIG5ldyB0cmFuc2FjdGlvbnMgYXJlIGVucXVldWVkLCBzbyBpdCB3aWxsXG4gICAqIG9ubHkgd2FpdCBmb3IgdHJhbnNhY3Rpb25zIHdoaWNoIHdlcmUgZW5xdWV1ZWQgd2hlbiB0aGUgZmllbGRcbiAgICogd2FzIGFjY2Vzc2VkLlxuICAgKlxuICAgKiBUaGlzIHByb21pc2UgbmV2ZXIgcmVqZWN0cy5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGdldCB0cmFuc2FjdGlvbnNDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcztcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBnZXR0ZXIgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZSB3aGVuXG4gICAqIHRoZXJlJ3Mgbm8gZGF0YSBzdG9yZWQuXG4gICAqXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQgemVyb1ZhbHVlKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBJZiB0aGUgZGF0YSB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGlzIHN0b3JhZ2UgaW5zdGFuY2UgaXMgbmV3LCB0aGlzXG4gICAqIG1ldGhvZCBnZW5lcmF0ZXMgYW4gYXR0ZW1wdCB0byB3cml0ZSB0aGUgdmFsdWUgdG8gc3RvcmFnZS5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHsqfSBhcmdzXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IGEgUHJvbWlzZSB0aGF0IHNldHRsZXMgb25seSBvbmNlIHRoZSB3cml0ZSBoYXMuXG4gICAqL1xuICBzYXZlVmFsdWU6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsLiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjbGVhciBvdXQgdGhlIG1hcHBpbmcgb2YgdGhpc1xuICAgKiBzdG9yYWdlIG9iamVjdCBhbmQgYSBsb2dpY2FsIGxvY2F0aW9uIHdpdGhpbiBzdG9yYWdlLlxuICAgKlxuICAgKiBJZiB0aGlzIG1ldGhvZCBpcyBzdXBwb3J0ZWQsIGFmdGVyIGl0J3MgY2FsbGVkLCBpc05ldygpIHNob3VsZCBiZVxuICAgKiB0cnVlLlxuICAgKi9cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGF0YSBmcm9tIHN0b3JhZ2UuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHNldHRsZXMgb25jZSB0aGUgZGVzdHJ1Y3Rpb24gaXNcbiAgICogICBjb21wbGV0ZS5cbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuemVyb1ZhbHVlO1xuICAgIHJldHVybiB0aGlzLnNhdmVWYWx1ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHRoZSBpbml0aWFsIHN5bmMgYmV0d2VlbiBzdG9yYWdlIGFuZCBtZW1vcnkuIFRoaXMgbWV0aG9kXG4gICAqIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgKiBJbXBsZW1lbnRhdGlvbnMgbWF5IG92ZXJyaWRlIGl0LlxuICAgKlxuICAgKiBJZiBhbiBpbXBsZW1lbnRhdGlvbiBpbnRlbmRzIHRvIGNhbGwgdGhpcyBtZXRob2QsIGl0IHNob3VsZCBpbnN0ZWFkXG4gICAqIGNhbGwgX2luaXRpYWxpemVTdG9yZWRWYWx1ZSwgd2hpY2ggcHJvdmlkZXMgcmVlbnRyYW5jeSBwcm90ZWN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCBzZXR0bGVzIG9uY2UgdGhpcyBwcm9jZXNzIGlzXG4gICAqICAgICBjb21wbGV0ZS5cbiAgICovXG4gIGluaXRpYWxpemVTdG9yZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIFwibmV3XCIgbW9kZWwsIHRoZW4gd2Ugc2hvdWxkIGF0dGVtcHRcbiAgICAvLyB0byByZWFkIGFuIGluaXRpYWwgdmFsdWUgZnJvbSBzdG9yYWdlOlxuICAgIHJldHVybiB0aGlzLl9nZXRTdG9yZWRWYWx1ZSgnZGF0YScpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5fbG9nKCdHb3Qgc3RvcmVkIHZhbHVlIScsIGRhdGEsIHRoaXMuZGF0YSk7XG4gICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXRTdG9yZWRWYWx1ZSgnZGF0YScsIHRoaXMuZGF0YSB8fCB0aGlzLnplcm9WYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLnNldCgnZGF0YScsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbXBsZW1lbnQgcmVhZGluZyBhIHZhbHVlIGZyb20gc3RvcmFnZS5cbiAgICpcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VQYXRoIFRoZSBwYXRoICh0aHJvdWdoIHN0b3JhZ2UpIG9mIHRoZSB2YWx1ZSB0b1xuICAgKiAgIGNyZWF0ZSwgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgb2Ygc3RvcmFnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY2Fub25pY2FsIHZhbHVlIHN0b3JlZFxuICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoIHdoZW4gdGhlIHRyYW5zYWN0aW9uIGhhcyBjb21wbGV0ZWQuIF9JZiB0aGVyZSBpcyBub1xuICAgKiAgIHN1Y2ggdmFsdWUgYXQgdGhlIHByb3ZpZGVkIHBhdGggdGhyb3VnaCBzdG9yYWdlLCB0aGVuIHRoZSBwcm9taXNlIHdpbGxcbiAgICogICByZXNvbHZlIHRvIGB1bmRlZmluZWRgLl8gVGhlIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCBpZiB0aGUgdHJhbnNhY3Rpb25cbiAgICogICBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAgICovXG4gIGdldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihzdG9yYWdlUGF0aCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW1wbGVtZW50IGNyZWF0aW5nIGFuZCB1cGRhdGluZ1xuICAgKiBzdG9yZWQgdmFsdWVzLlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZVBhdGggVGhlIHBhdGggb2YgdGhlIHZhbHVlIHRvIHVwZGF0ZSwgcmVsYXRpdmVcbiAgICogICB0byB0aGUgcm9vdCBzdG9yYWdlIHBhdGggY29uZmlndXJlZCBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdXBkYXRlZCBpbi1tZW1vcnkgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIHN0b3JlZCB2YWx1ZVxuICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjYW5vbmljYWwgdmFsdWUgc3RvcmVkXG4gICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGggd2hlbiB0aGUgdHJhbnNhY3Rpb24gaGFzIGNvbXBsZXRlZC4gVGhlIHByb21pc2VcbiAgICogICB3aWxsIGJlIHJlamVjdGVkIGlmIHRoZSB0cmFuc2FjdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAgICovXG4gIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihzdG9yYWdlUGF0aCwgdmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogTWFwcyBhIFBvbHltZXIgZGF0YWJpbmRpbmcgcGF0aCB0byB0aGUgY29ycmVzcG9uZGluZyBwYXRoIGluIHRoZVxuICAgKiBzdG9yYWdlIHN5c3RlbS4gT3ZlcnJpZGUgdG8gZGVmaW5lIGEgY3VzdG9tIG1hcHBpbmcuXG4gICAqXG4gICAqIFRoZSBpbnZlcnNlIG9mIHN0b3JhZ2VQYXRoVG9NZW1vcnlQYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBBbiBpbi1tZW1vcnkgcGF0aCB0aHJvdWdoIGEgc3RvcmFnZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHByb3ZpZGVkIHBhdGggbWFwcGVkIHRvIHRoZSBlcXVpdmFsZW50IGxvY2F0aW9uIGluXG4gICAqICAgc3RvcmFnZS4gVGhpcyBtYXBwZWQgdmVyc2lvbiBvZiB0aGUgcGF0aCBpcyBzdWl0YWJsZSBmb3IgdXNlIHdpdGggdGhlXG4gICAqICAgQ1JVRCBvcGVyYXRpb25zIG9uIGJvdGggbWVtb3J5IGFuZCBzdG9yYWdlLlxuICAgKi9cbiAgbWVtb3J5UGF0aFRvU3RvcmFnZVBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfSxcblxuICAvKipcbiAgICogTWFwcyBhIHN0b3JhZ2UgcGF0aCB0byB0aGUgY29ycmVzcG9uZGluZyBQb2x5bWVyIGRhdGFiaW5kaW5nIHBhdGguXG4gICAqIE92ZXJyaWRlIHRvIGRlZmluZSBhIGN1c3RvbSBtYXBwaW5nLlxuICAgKlxuICAgKiBUaGUgaW52ZXJzZSBvZiBtZW1vcnlQYXRoVG9TdG9yYWdlUGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHN0b3JhZ2UgcGF0aCB0aHJvdWdoIGEgc3RvcmFnZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHByb3ZpZGVkIHBhdGggdGhyb3VnaCBzdG9yYWdlIG1hcHBlZCB0byB0aGVcbiAgICogICBlcXVpdmFsZW50IFBvbHltZXIgcGF0aCB0aHJvdWdoIHRoZSBpbi1tZW1vcnkgcmVwcmVzZW50YXRpb24gb2Ygc3RvcmFnZS5cbiAgICovXG4gIHN0b3JhZ2VQYXRoVG9NZW1vcnlQYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgcGVyZm9ybWluZyB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbiBvZlxuICAgKiBzdG9yYWdlIHdpdGhvdXQgYWN0aXZhdGluZyBvYnNlcnZlcnMgdGhhdCB3aWxsIGNhdXNlIHRob3NlXG4gICAqIHRyYW5zZm9ybWF0aW9ucyB0byBiZSByZS1hcHBsaWVkIHRvIHRoZSBzdG9yYWdlIGJhY2tlbmQuIFRoaXMgaXMgdXNlZnVsXG4gICAqIGZvciBwcmV2ZW50aW5nIHJlZHVuZGFudCAob3IgY3ljbGljYWwpIGFwcGxpY2F0aW9uIG9mIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3BlcmF0aW9uIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHBlcmZvcm0gdGhlIGRlc2lyZWRcbiAgICogICB0cmFuc2Zvcm1hdGlvbi4gSXQgd2lsbCBiZSBjYWxsZWQgc3luY2hyb25vdXNseSwgd2hlbiBpdCBpcyBzYWZlIHRvXG4gICAqICAgYXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uLlxuICAgKi9cbiAgc3luY1RvTWVtb3J5OiBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgICBpZiAodGhpcy5fX3N5bmNpbmdUb01lbW9yeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2dyb3VwKCdTeW5jIHRvIG1lbW9yeS4nKTtcblxuICAgIHRoaXMuX19zeW5jaW5nVG9NZW1vcnkgPSB0cnVlO1xuICAgIG9wZXJhdGlvbi5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX19zeW5jaW5nVG9NZW1vcnkgPSBmYWxzZTtcblxuICAgIHRoaXMuX2dyb3VwRW5kKCdTeW5jIHRvIG1lbW9yeS4nKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBtZXRob2QuIFJldHVybnMgdHJ1ZSBpZmYgdmFsdWUgaXMgbnVsbCwgdW5kZWZpbmVkLFxuICAgKiBhbiBlbXB0eSBhcnJheSwgb3IgYW4gb2JqZWN0IHdpdGggbm8ga2V5cy5cbiAgICovXG4gIHZhbHVlSXNFbXB0eTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodmFsdWUpKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlID09IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWtlIGBnZXRTdG9yZWRWYWx1ZWAgYnV0IGNhbGxlZCB3aXRoIGEgUG9seW1lciBwYXRoIHJhdGhlciB0aGFuXG4gICAqIGEgc3RvcmFnZSBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgUG9seW1lciBwYXRoIHRvIGdldC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBQcm9taXNlIG9mIHRoZSB2YWx1ZSBzdG9yZWQgYXQgdGhhdCBwYXRoLlxuICAgKi9cbiAgX2dldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVkVmFsdWUodGhpcy5tZW1vcnlQYXRoVG9TdG9yYWdlUGF0aChwYXRoKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpa2UgYHNldFN0b3JlZFZhbHVlYCBidXQgY2FsbGVkIHdpdGggYSBQb2x5bWVyIHBhdGggcmF0aGVyIHRoYW5cbiAgICogYSBzdG9yYWdlIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBQb2x5bWVyIHBhdGggdG8gdXBkYXRlLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB1cGRhdGVkIGluLW1lbW9yeSB2YWx1ZSB0byBhcHBseSB0byB0aGUgc3RvcmVkIHZhbHVlXG4gICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGguXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNhbm9uaWNhbCB2YWx1ZSBzdG9yZWRcbiAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aCB3aGVuIHRoZSB0cmFuc2FjdGlvbiBoYXMgY29tcGxldGVkLiBUaGUgcHJvbWlzZVxuICAgKiAgIHdpbGwgYmUgcmVqZWN0ZWQgaWYgdGhlIHRyYW5zYWN0aW9uIGZhaWxzIGZvciBhbnkgcmVhc29uLlxuICAgKi9cbiAgX3NldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnNldFN0b3JlZFZhbHVlKHRoaXMubWVtb3J5UGF0aFRvU3RvcmFnZVBhdGgocGF0aCksIHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogRW5xdWV1ZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGluIHRoZSB0cmFuc2FjdGlvbiBxdWV1ZS5cbiAgICpcbiAgICogVGhlIHRyYW5zYWN0aW9uIHF1ZXVlIGFsbG93cyBmb3Igb3B0aW9uYWwgcGFyYWxsZWxpc20vc2VxdWVudGlhbGl0eVxuICAgKiB2aWEgdGhlIGBzZXF1ZW50aWFsVHJhbnNhY3Rpb25zYCBib29sZWFuIHByb3BlcnR5LCBhcyB3ZWxsIGFzIGdpdmluZ1xuICAgKiB0aGUgdXNlciBhIGNvbnZlbmllbnQgd2F5IHRvIHdhaXQgZm9yIGFsbCBwZW5kaW5nIHRyYW5zYWN0aW9ucyB0b1xuICAgKiBmaW5pc2guXG4gICAqXG4gICAqIFRoZSBnaXZlbiBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGltbWVkaWF0ZWx5IG9yIGFmdGVyIGFuIGFyYml0cmFyeVxuICAgKiBkZWxheS4gSXRzIGB0aGlzYCBjb250ZXh0IHdpbGwgYmUgYm91bmQgdG8gdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIElmIHRoZSB0cmFuc2FjdGlvbiBwZXJmb3JtcyBhbnkgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMgaXQgbXVzdFxuICAgKiByZXR1cm4gYSBwcm9taXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2FjdGlvbiBBIGZ1bmN0aW9uIGltcGxlbWVudGluZyB0aGUgdHJhbnNhY3Rpb24uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIHRyYW5zYWN0aW9uIGhhc1xuICAgKiAgIGZpbmlzaGVkLiBUaGlzIHByb21pc2Ugd2lsbCBuZXZlciByZWplY3QuXG4gICAqL1xuICBfZW5xdWV1ZVRyYW5zYWN0aW9uOiBmdW5jdGlvbih0cmFuc2FjdGlvbikge1xuICAgIGlmICh0aGlzLnNlcXVlbnRpYWxUcmFuc2FjdGlvbnMpIHtcbiAgICAgIHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb24uYmluZCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyYW5zYWN0aW9uLmNhbGwodGhpcyk7XG4gICAgICB0cmFuc2FjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX3RyYW5zYWN0aW9uUXVldWVBZHZhbmNlcyA9XG4gICAgICAgICAgICAgICB0aGlzLl9fdHJhbnNhY3Rpb25RdWV1ZUFkdmFuY2VzLnRoZW4odHJhbnNhY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcignRXJyb3IgcGVyZm9ybWluZyBxdWV1ZWQgdHJhbnNhY3Rpb24uJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlciBhcm91bmQgYGNvbnNvbGUubG9nYC5cbiAgICovXG4gIF9sb2c6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCBgY29uc29sZS5lcnJvcmAuXG4gICAqL1xuICBfZXJyb3I6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmdyb3VwYC5cbiAgICovXG4gIF9ncm91cDogZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgY29uc29sZS5ncm91cC5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlciBhcm91bmQgYGNvbnNvbGUuZ3JvdXBFbmRgLlxuICAgKi9cbiAgX2dyb3VwRW5kOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICBjb25zb2xlLmdyb3VwRW5kLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSByZWVudHJhbmN5LXNhdmUgd3JhcHBlciBhcm91bmQgYHRoaXMuaW5pdGlhbGl6ZVN0b3JlZFZhbHVlYC5cbiAgICogUHJlZmVyIGNhbGxpbmcgdGhpcyBtZXRob2Qgb3ZlciB0aGF0IG9uZS5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gVGhlIHJlc3VsdCBvZiBjYWxsaW5nIGBpbml0aWFsaXplU3RvcmVkVmFsdWVgLFxuICAgKiAgIG9yIGB1bmRlZmluZWRgIGlmIGNhbGxlZCB3aGlsZSBpbml0aWFsaXppbmcuXG4gICAqL1xuICBfaW5pdGlhbGl6ZVN0b3JlZFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZ3JvdXAoJ0luaXRpYWxpemluZyBzdG9yZWQgdmFsdWUuJyk7XG5cbiAgICB2YXIgaW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPSB0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPVxuICAgICAgICB0aGlzLmluaXRpYWxpemVTdG9yZWRWYWx1ZSgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBFbmQoJ0luaXRpYWxpemluZyBzdG9yZWQgdmFsdWUuJyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLl9ncm91cEVuZCgnSW5pdGlhbGl6aW5nIHN0b3JlZCB2YWx1ZS4nKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZW5xdWV1ZVRyYW5zYWN0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGluaXRpYWxpemluZ1N0b3JlZFZhbHVlO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fZGF0YUNoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgIGlmICh0aGlzLmlzTmV3IHx8IHRoaXMuX19zeW5jaW5nVG9NZW1vcnkgfHwgIXRoaXMuX19pbml0aWFsaXplZCB8fFxuICAgICAgICB0aGlzLl9fcGF0aENhbkJlSWdub3JlZChjaGFuZ2UucGF0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IHRoaXMuX19ub3JtYWxpemVNZW1vcnlQYXRoKGNoYW5nZS5wYXRoKTtcbiAgICB2YXIgdmFsdWUgPSBjaGFuZ2UudmFsdWU7XG4gICAgdmFyIGluZGV4U3BsaWNlcyA9IHZhbHVlICYmIHZhbHVlLmluZGV4U3BsaWNlcztcblxuICAgIHRoaXMuX2VucXVldWVUcmFuc2FjdGlvbihmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2xvZygnU2V0dGluZycsIHBhdGggKyAnOicsIGluZGV4U3BsaWNlcyB8fCB2YWx1ZSk7XG5cbiAgICAgIGlmIChpbmRleFNwbGljZXMgJiYgdGhpcy5fX3BhdGhJc1NwbGljZXMocGF0aCkpIHtcbiAgICAgICAgcGF0aCA9IHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpO1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KHBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fc2V0U3RvcmVkVmFsdWUocGF0aCwgdmFsdWUpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fbm9ybWFsaXplTWVtb3J5UGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICB2YXIgcGFyZW50UGF0aCA9IFtdO1xuICAgIHZhciBjdXJyZW50UGF0aCA9IFtdO1xuICAgIHZhciBub3JtYWxpemVkUGF0aCA9IFtdO1xuICAgIHZhciBpbmRleDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGN1cnJlbnRQYXRoLnB1c2gocGFydHNbaV0pO1xuICAgICAgaWYgKC9eIy8udGVzdChwYXJ0c1tpXSkpIHtcbiAgICAgICAgbm9ybWFsaXplZFBhdGgucHVzaChcbiAgICAgICAgICAgIHRoaXMuZ2V0KHBhcmVudFBhdGgpLmluZGV4T2YodGhpcy5nZXQoY3VycmVudFBhdGgpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkUGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudFBhdGgucHVzaChwYXJ0c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRQYXRoLmpvaW4oJy4nKTtcbiAgfSxcblxuICBfX3BhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgcGFyZW50UGF0aCA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICByZXR1cm4gcGFyZW50UGF0aC5zbGljZSgwLCBwYXJlbnRQYXRoLmxlbmd0aCAtIDEpLmpvaW4oJy4nKTtcbiAgfSxcblxuICBfX3BhdGhDYW5CZUlnbm9yZWQ6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gTEVOR1RIX1JYLnRlc3QocGF0aCkgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmdldCh0aGlzLl9fcGFyZW50UGF0aChwYXRoKSkpO1xuICB9LFxuXG4gIF9fcGF0aElzU3BsaWNlczogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBTUExJQ0VTX1JYLnRlc3QocGF0aCkgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmdldCh0aGlzLl9fcGFyZW50UGF0aChwYXRoKSkpO1xuICB9LFxuXG4gIF9fcGF0aFJlZmVyc1RvQXJyYXk6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gKFNQTElDRVNfUlgudGVzdChwYXRoKSB8fCBMRU5HVEhfUlgudGVzdChwYXRoKSkgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmdldCh0aGlzLl9fcGFyZW50UGF0aChwYXRoKSkpO1xuICB9LFxuXG4gIF9fcGF0aFRhaWxUb0luZGV4OiBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIHRhaWwgPSBwYXRoLnNwbGl0KCcuJykucG9wKCk7XG4gICAgcmV0dXJuIHdpbmRvdy5wYXJzZUludCh0YWlsLnJlcGxhY2UoTlVNQkVSX1JYLCAnJDEnKSwgMTApO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBM0JBO0FBOEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdGJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
