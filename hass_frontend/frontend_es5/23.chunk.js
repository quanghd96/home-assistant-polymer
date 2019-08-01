(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [23],
  {
    /***/ "./src/panels/developer-tools/mqtt/developer-tools-mqtt.js":
      /*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/mqtt/developer-tools-mqtt.js ***!
  \*****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="ha-style">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 24px 0 32px;\n          max-width: 600px;\n          margin: 0 auto;\n          direction: ltr;\n        }\n\n        mwc-button {\n          background-color: white;\n        }\n      </style>\n\n      <app-localstorage-document key="panel-dev-mqtt-topic" data="{{topic}}">\n      </app-localstorage-document>\n      <app-localstorage-document\n        key="panel-dev-mqtt-payload"\n        data="{{payload}}"\n      >\n      </app-localstorage-document>\n\n      <div class="content">\n        <ha-card header="Publish a packet">\n          <div class="card-content">\n            <paper-input label="topic" value="{{topic}}"></paper-input>\n\n            <paper-textarea\n              always-float-label\n              label="Payload (template allowed)"\n              value="{{payload}}"\n            ></paper-textarea>\n          </div>\n          <div class="card-actions">\n            <mwc-button on-click="_publish">Publish</mwc-button>\n          </div>\n        </ha-card>\n      </div>\n    ',
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        var HaPanelDevMqtt =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaPanelDevMqtt, _PolymerElement);

            function HaPanelDevMqtt() {
              _classCallCheck(this, HaPanelDevMqtt);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPanelDevMqtt).apply(this, arguments)
              );
            }

            _createClass(
              HaPanelDevMqtt,
              [
                {
                  key: "_publish",
                  value: function _publish() {
                    this.hass.callService("mqtt", "publish", {
                      topic: this.topic,
                      payload_template: this.payload,
                    });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      topic: String,
                      payload: String,
                    };
                  },
                },
              ]
            );

            return HaPanelDevMqtt;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
              "PolymerElement"
            ]
          );

        customElements.define("developer-tools-mqtt", HaPanelDevMqtt);

        /***/
      },

    /***/ "./src/util/app-localstorage-document.js":
      /*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* Forked because it contained an import.meta which webpack doesn't support. */

        /* eslint-disable */

        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        /**
         * app-localstorage-document synchronizes storage between an in-memory
         * value and a location in the browser's localStorage system.
         *
         * localStorage is a simple and widely supported storage API that provides both
         * permanent and session-based storage options. Using app-localstorage-document
         * you can easily integrate localStorage into your app via normal Polymer
         * databinding.
         *
         * app-localstorage-document is the reference implementation of an element
         * that uses `AppStorageBehavior`. Reading its code is a good way to get
         * started writing your own storage element.
         *
         * Example use:
         *
         *     <paper-input value="{{search}}"></paper-input>
         *     <app-localstorage-document key="search" data="{{search}}">
         *     </app-localstorage-document>
         *
         * app-localstorage-document automatically synchronizes changes to the
         * same key across multiple tabs.
         *
         * Only supports storing JSON-serializable values.
         */

        Object(
          _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__[
            "Polymer"
          ]
        )({
          is: "app-localstorage-document",
          behaviors: [
            _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__[
              "AppStorageBehavior"
            ],
          ],
          properties: {
            /**
             * Defines the logical location to store the data.
             *
             * @type{String}
             */
            key: {
              type: String,
              notify: true,
            },

            /**
             * If true, the data will automatically be cleared from storage when
             * the page session ends (i.e. when the user has navigated away from
             * the page).
             */
            sessionOnly: {
              type: Boolean,
              value: false,
            },

            /**
             * Either `window.localStorage` or `window.sessionStorage`, depending on
             * `this.sessionOnly`.
             */
            storage: {
              type: Object,
              computed: "__computeStorage(sessionOnly)",
            },
          },
          observers: ["__storageSourceChanged(storage, key)"],
          attached: function attached() {
            this.listen(window, "storage", "__onStorage");
            this.listen(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },
          detached: function detached() {
            this.unlisten(window, "storage", "__onStorage");
            this.unlisten(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },

          get isNew() {
            return !this.key;
          },

          /**
           * Stores a value at the given key, and if successful, updates this.key.
           *
           * @param {*} key The new key to use.
           * @return {Promise}
           */
          saveValue: function saveValue(key) {
            try {
              this.__setStorageValue(
                /*{@type if (key ty){String}}*/
                key,
                this.data
              );
            } catch (e) {
              return Promise.reject(e);
            }

            this.key =
              /** @type {String} */
              key;
            return Promise.resolve();
          },
          reset: function reset() {
            this.key = null;
            this.data = this.zeroValue;
          },
          destroy: function destroy() {
            try {
              this.storage.removeItem(this.key);
              this.reset();
            } catch (e) {
              return Promise.reject(e);
            }

            return Promise.resolve();
          },
          getStoredValue: function getStoredValue(path) {
            var value;

            if (this.key != null) {
              try {
                value = this.__parseValueFromStorage();

                if (value != null) {
                  value = this.get(path, {
                    data: value,
                  });
                } else {
                  value = undefined;
                }
              } catch (e) {
                return Promise.reject(e);
              }
            }

            return Promise.resolve(value);
          },
          setStoredValue: function setStoredValue(path, value) {
            if (this.key != null) {
              try {
                this.__setStorageValue(this.key, this.data);
              } catch (e) {
                return Promise.reject(e);
              }

              this.fire("app-local-storage-changed", this, {
                node: window.top,
              });
            }

            return Promise.resolve(value);
          },
          __computeStorage: function __computeStorage(sessionOnly) {
            return sessionOnly ? window.sessionStorage : window.localStorage;
          },
          __storageSourceChanged: function __storageSourceChanged(
            storage,
            key
          ) {
            this._initializeStoredValue();
          },
          __onStorage: function __onStorage(event) {
            if (event.key !== this.key || event.storageArea !== this.storage) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", this.__parseValueFromStorage());
            });
          },
          __onAppLocalStorageChanged: function __onAppLocalStorageChanged(
            event
          ) {
            if (
              event.detail === this ||
              event.detail.key !== this.key ||
              event.detail.storage !== this.storage
            ) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", event.detail.data);
            });
          },
          __parseValueFromStorage: function __parseValueFromStorage() {
            try {
              return JSON.parse(this.storage.getItem(this.key));
            } catch (e) {
              console.error("Failed to parse value from storage for", this.key);
            }
          },
          __setStorageValue: function __setStorageValue(key, value) {
            if (typeof value === "undefined") value = null;
            this.storage.setItem(key, JSON.stringify(value));
          },
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9tcXR0L2RldmVsb3Blci10b29scy1tcXR0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiO1xuXG5jbGFzcyBIYVBhbmVsRGV2TXF0dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjRweCAwIDMycHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBrZXk9XCJwYW5lbC1kZXYtbXF0dC10b3BpY1wiIGRhdGE9XCJ7e3RvcGljfX1cIj5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICAgIGtleT1cInBhbmVsLWRldi1tcXR0LXBheWxvYWRcIlxuICAgICAgICBkYXRhPVwie3twYXlsb2FkfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJQdWJsaXNoIGEgcGFja2V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG9waWNcIiB2YWx1ZT1cInt7dG9waWN9fVwiPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWxcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXlsb2FkICh0ZW1wbGF0ZSBhbGxvd2VkKVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3twYXlsb2FkfX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfcHVibGlzaFwiPlB1Ymxpc2g8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHRvcGljOiBTdHJpbmcsXG4gICAgICBwYXlsb2FkOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9wdWJsaXNoKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIm1xdHRcIiwgXCJwdWJsaXNoXCIsIHtcbiAgICAgIHRvcGljOiB0aGlzLnRvcGljLFxuICAgICAgcGF5bG9hZF90ZW1wbGF0ZTogdGhpcy5wYXlsb2FkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1tcXR0XCIsIEhhUGFuZWxEZXZNcXR0KTtcbiIsIi8qIEZvcmtlZCBiZWNhdXNlIGl0IGNvbnRhaW5lZCBhbiBpbXBvcnQubWV0YSB3aGljaCB3ZWJwYWNrIGRvZXNuJ3Qgc3VwcG9ydC4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHsgQXBwU3RvcmFnZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2FwcC1zdG9yYWdlL2FwcC1zdG9yYWdlLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBQb2x5bWVyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5XCI7XG5cbi8qKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBzeW5jaHJvbml6ZXMgc3RvcmFnZSBiZXR3ZWVuIGFuIGluLW1lbW9yeVxuICogdmFsdWUgYW5kIGEgbG9jYXRpb24gaW4gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2Ugc3lzdGVtLlxuICpcbiAqIGxvY2FsU3RvcmFnZSBpcyBhIHNpbXBsZSBhbmQgd2lkZWx5IHN1cHBvcnRlZCBzdG9yYWdlIEFQSSB0aGF0IHByb3ZpZGVzIGJvdGhcbiAqIHBlcm1hbmVudCBhbmQgc2Vzc2lvbi1iYXNlZCBzdG9yYWdlIG9wdGlvbnMuIFVzaW5nIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAqIHlvdSBjYW4gZWFzaWx5IGludGVncmF0ZSBsb2NhbFN0b3JhZ2UgaW50byB5b3VyIGFwcCB2aWEgbm9ybWFsIFBvbHltZXJcbiAqIGRhdGFiaW5kaW5nLlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgaXMgdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlbGVtZW50XG4gKiB0aGF0IHVzZXMgYEFwcFN0b3JhZ2VCZWhhdmlvcmAuIFJlYWRpbmcgaXRzIGNvZGUgaXMgYSBnb29kIHdheSB0byBnZXRcbiAqIHN0YXJ0ZWQgd3JpdGluZyB5b3VyIG93biBzdG9yYWdlIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZSB1c2U6XG4gKlxuICogICAgIDxwYXBlci1pbnB1dCB2YWx1ZT1cInt7c2VhcmNofX1cIj48L3BhcGVyLWlucHV0PlxuICogICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGtleT1cInNlYXJjaFwiIGRhdGE9XCJ7e3NlYXJjaH19XCI+XG4gKiAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZXMgY2hhbmdlcyB0byB0aGVcbiAqIHNhbWUga2V5IGFjcm9zcyBtdWx0aXBsZSB0YWJzLlxuICpcbiAqIE9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZXMuXG4gKi9cblBvbHltZXIoe1xuICBpczogXCJhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCIsXG4gIGJlaGF2aW9yczogW0FwcFN0b3JhZ2VCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAdHlwZXtTdHJpbmd9XG4gICAgICovXG4gICAga2V5OiB7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZGF0YSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2xlYXJlZCBmcm9tIHN0b3JhZ2Ugd2hlblxuICAgICAqIHRoZSBwYWdlIHNlc3Npb24gZW5kcyAoaS5lLiB3aGVuIHRoZSB1c2VyIGhhcyBuYXZpZ2F0ZWQgYXdheSBmcm9tXG4gICAgICogdGhlIHBhZ2UpLlxuICAgICAqL1xuICAgIHNlc3Npb25Pbmx5OiB7IHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSB9LFxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBvciBgd2luZG93LnNlc3Npb25TdG9yYWdlYCwgZGVwZW5kaW5nIG9uXG4gICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxuICAgICAqL1xuICAgIHN0b3JhZ2U6IHsgdHlwZTogT2JqZWN0LCBjb21wdXRlZDogXCJfX2NvbXB1dGVTdG9yYWdlKHNlc3Npb25Pbmx5KVwiIH0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXCJfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkKHN0b3JhZ2UsIGtleSlcIl0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy5saXN0ZW4oXG4gICAgICB3aW5kb3cudG9wLFxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcbiAgICApO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy51bmxpc3RlbihcbiAgICAgIHdpbmRvdy50b3AsXG4gICAgICBcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIixcbiAgICAgIFwiX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWRcIlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0IGlzTmV3KCkge1xuICAgIHJldHVybiAhdGhpcy5rZXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXksIGFuZCBpZiBzdWNjZXNzZnVsLCB1cGRhdGVzIHRoaXMua2V5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGtleSBUaGUgbmV3IGtleSB0byB1c2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBzYXZlVmFsdWU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKC8qe0B0eXBlIGlmIChrZXkgdHkpe1N0cmluZ319Ki8ga2V5LCB0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuemVyb1ZhbHVlO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXQocGF0aCwgeyBkYXRhOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMua2V5ICE9IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX19zZXRTdG9yYWdlVmFsdWUodGhpcy5rZXksIHRoaXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maXJlKFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLCB0aGlzLCB7IG5vZGU6IHdpbmRvdy50b3AgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgX19jb21wdXRlU3RvcmFnZTogZnVuY3Rpb24oc2Vzc2lvbk9ubHkpIHtcbiAgICByZXR1cm4gc2Vzc2lvbk9ubHkgPyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgOiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9LFxuXG4gIF9fc3RvcmFnZVNvdXJjZUNoYW5nZWQ6IGZ1bmN0aW9uKHN0b3JhZ2UsIGtleSkge1xuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xuICB9LFxuXG4gIF9fb25TdG9yYWdlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IHRoaXMua2V5IHx8IGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCkpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gdGhpcyB8fFxuICAgICAgZXZlbnQuZGV0YWlsLmtleSAhPT0gdGhpcy5rZXkgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5zdG9yYWdlICE9PSB0aGlzLnN0b3JhZ2VcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldChcImRhdGFcIiwgZXZlbnQuZGV0YWlsLmRhdGEpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGZyb20gc3RvcmFnZSBmb3JcIiwgdGhpcy5rZXkpO1xuICAgIH1cbiAgfSxcblxuICBfX3NldFN0b3JhZ2VWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBeURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBN0RBO0FBQ0E7QUE2Q0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7O0FBdkRBO0FBQ0E7QUFnRUE7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
