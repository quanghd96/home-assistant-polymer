(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-users"],
  {
    /***/ "./node_modules/lit-html/directives/until.js":
      /*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
      /*! exports provided: until */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "until",
          function() {
            return until;
          }
        );
        /* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js"
        );
        /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"
        );
        /**
         * @license
         * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at
         * http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at
         * http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at
         * http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at
         * http://polymer.github.io/PATENTS.txt
         */

        var _state = new WeakMap(); // Effectively infinity, but a SMI.

        var _infinity = 0x7fffffff;
        /**
         * Renders one of a series of values, including Promises, to a Part.
         *
         * Values are rendered in priority order, with the first argument having the
         * highest priority and the last argument having the lowest priority. If a
         * value is a Promise, low-priority values will be rendered until it resolves.
         *
         * The priority of values can be used to create placeholder content for async
         * data. For example, a Promise with pending content can be the first,
         * highest-priority, argument, and a non_promise loading indicator template can
         * be used as the second, lower-priority, argument. The loading indicator will
         * render immediately, and the primary content will render when the Promise
         * resolves.
         *
         * Example:
         *
         *     const content = fetch('./content.txt').then(r => r.text());
         *     html`${until(content, html`<span>Loading...</span>`)}`
         */

        var until = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"]
        )(function() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return function(part) {
            var state = _state.get(part);

            if (state === undefined) {
              state = {
                lastRenderedIndex: _infinity,
                values: [],
              };

              _state.set(part, state);
            }

            var previousValues = state.values;
            var previousLength = previousValues.length;
            state.values = args;

            var _loop2 = function _loop2(i) {
              // If we've rendered a higher-priority value already, stop.
              if (i > state.lastRenderedIndex) {
                return "break";
              }

              var value = args[i]; // Render non-Promise values immediately

              if (
                Object(
                  _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]
                )(value) ||
                typeof value.then !== "function"
              ) {
                part.setValue(value);
                state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
                // synchronous value, we can stop processsing now.

                return "break";
              } // If this is a Promise we've already handled, skip it.

              if (i < previousLength && value === previousValues[i]) {
                return "continue";
              } // We have a Promise that we haven't seen before, so priorities may have
              // changed. Forget what we rendered before.

              state.lastRenderedIndex = _infinity;
              previousLength = 0;
              Promise.resolve(value).then(function(resolvedValue) {
                var index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
                // the value, so don't render it. Then, only render if the value is
                // higher-priority than what's already been rendered.

                if (index > -1 && index < state.lastRenderedIndex) {
                  state.lastRenderedIndex = index;
                  part.setValue(resolvedValue);
                  part.commit();
                }
              });
            };

            _loop: for (var i = 0; i < args.length; i++) {
              var _ret = _loop2(i);

              switch (_ret) {
                case "break":
                  break _loop;

                case "continue":
                  continue;
              }
            }
          };
        });

        /***/
      },

    /***/ "./src/components/ha-icon-next.ts":
      /*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
      /*! exports provided: HaIconNext */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIconNext",
          function() {
            return HaIconNext;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ha-icon */ "./src/components/ha-icon.ts"
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

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
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

        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        var HaIconNext =
          /*#__PURE__*/
          (function(_HaIcon) {
            _inherits(HaIconNext, _HaIcon);

            function HaIconNext() {
              _classCallCheck(this, HaIconNext);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaIconNext).apply(this, arguments)
              );
            }

            _createClass(HaIconNext, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  this.icon =
                    window.getComputedStyle(this).direction === "ltr"
                      ? "hass:chevron-right"
                      : "hass:chevron-left"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

                  _get(
                    _getPrototypeOf(HaIconNext.prototype),
                    "connectedCallback",
                    this
                  ).call(this);
                },
              },
            ]);

            return HaIconNext;
          })(_ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"]);
        customElements.define("ha-icon-next", HaIconNext);

        /***/
      },

    /***/ "./src/data/user.ts":
      /*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
      /*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_ADMIN",
          function() {
            return SYSTEM_GROUP_ID_ADMIN;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_USER",
          function() {
            return SYSTEM_GROUP_ID_USER;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SYSTEM_GROUP_ID_READ_ONLY",
          function() {
            return SYSTEM_GROUP_ID_READ_ONLY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchUsers",
          function() {
            return fetchUsers;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createUser",
          function() {
            return createUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateUser",
          function() {
            return updateUser;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteUser",
          function() {
            return deleteUser;
          }
        );
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        var SYSTEM_GROUP_ID_ADMIN = "system-admin";
        var SYSTEM_GROUP_ID_USER = "system-users";
        var SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
        var fetchUsers =
          /*#__PURE__*/
          (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(hass) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        return _context.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/list",
                          })
                        );

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );

            return function fetchUsers(_x) {
              return _ref.apply(this, arguments);
            };
          })();
        var createUser =
          /*#__PURE__*/
          (function() {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(hass, name) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        return _context2.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/create",
                            name: name,
                          })
                        );

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })
            );

            return function createUser(_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          })();
        var updateUser =
          /*#__PURE__*/
          (function() {
            var _ref3 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(hass, userId, params) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        return _context3.abrupt(
                          "return",
                          hass.callWS(
                            Object.assign({}, params, {
                              type: "config/auth/update",
                              user_id: userId,
                            })
                          )
                        );

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })
            );

            return function updateUser(_x4, _x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })();
        var deleteUser =
          /*#__PURE__*/
          (function() {
            var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(hass, userId) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        return _context4.abrupt(
                          "return",
                          hass.callWS({
                            type: "config/auth/delete",
                            user_id: userId,
                          })
                        );

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })
            );

            return function deleteUser(_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })();

        /***/
      },

    /***/ "./src/mixins/navigate-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/navigate */ "./src/common/navigate.ts"
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

        /*
         * @polymerMixin
         * @appliesMixin EventsMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_superClass) {
              _inherits(_class, _superClass);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(_class, [
                {
                  key: "navigate",
                  value: function navigate() {
                    for (
                      var _len = arguments.length,
                        args = new Array(_len),
                        _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    _common_navigate__WEBPACK_IMPORTED_MODULE_1__[
                      "navigate"
                    ].apply(void 0, [this].concat(args));
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/config/users/ha-config-user-picker.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/users/ha-config-user-picker.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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
            '\n      <style>\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 16px auto;\n          overflow: hidden;\n        }\n        a {\n          text-decoration: none;\n          color: var(--primary-text-color);\n        }\n      </style>\n\n      <hass-subpage header="[[localize(\'ui.panel.config.users.picker.title\')]]">\n        <ha-card>\n          <template is="dom-repeat" items="[[users]]" as="user">\n            <a href="[[_computeUrl(user)]]">\n              <paper-item>\n                <paper-item-body two-line>\n                  <div>[[_withDefault(user.name, \'Unnamed User\')]]</div>\n                  <div secondary="">\n                    [[_computeGroup(localize, user)]]\n                    <template is="dom-if" if="[[user.system_generated]]">\n                      - System Generated\n                    </template>\n                  </div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </a>\n          </template>\n        </ha-card>\n\n        <paper-fab\n          is-wide$="[[isWide]]"\n          icon="hass:plus"\n          title="[[localize(\'ui.panel.config.users.picker.add_user\')]]"\n          on-click="_addUser"\n          rtl$="[[rtl]]"\n        ></paper-fab>\n      </hass-subpage>\n    ',
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

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
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

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
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

        var registeredDialog = false;
        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin NavigateMixin
         * @appliesMixin EventsMixin
         */

        var HaUserPicker =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaUserPicker, _EventsMixin);

            function HaUserPicker() {
              _classCallCheck(this, HaUserPicker);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaUserPicker).apply(this, arguments)
              );
            }

            _createClass(
              HaUserPicker,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaUserPicker.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    if (!registeredDialog) {
                      registeredDialog = true;
                      this.fire("register-dialog", {
                        dialogShowEvent: "show-add-user",
                        dialogTag: "ha-dialog-add-user",
                        dialogImport: function dialogImport() {
                          return Promise.all(
                            /*! import() | ha-dialog-add-user */ [
                              __webpack_require__.e(
                                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                              ),
                              __webpack_require__.e(
                                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                              ),
                              __webpack_require__.e(
                                "vendors~ha-dialog-add-user"
                              ),
                              __webpack_require__.e("ha-dialog-add-user"),
                            ]
                          ).then(
                            __webpack_require__.bind(
                              null,
                              /*! ./ha-dialog-add-user */ "./src/panels/config/users/ha-dialog-add-user.js"
                            )
                          );
                        },
                      });
                    }
                  },
                },
                {
                  key: "_withDefault",
                  value: function _withDefault(value, defaultValue) {
                    return value || defaultValue;
                  },
                },
                {
                  key: "_computeUrl",
                  value: function _computeUrl(user) {
                    return "/config/users/".concat(user.id);
                  },
                },
                {
                  key: "_computeGroup",
                  value: function _computeGroup(localize, user) {
                    return localize("groups.".concat(user.group_ids[0]));
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__[
                        "computeRTL"
                      ]
                    )(hass);
                  },
                },
                {
                  key: "_addUser",
                  value: function _addUser() {
                    var _this = this;

                    this.fire("show-add-user", {
                      hass: this.hass,
                      dialogClosedCallback: (function() {
                        var _dialogClosedCallback = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(_ref) {
                            var userId;
                            return regeneratorRuntime.wrap(function _callee$(
                              _context
                            ) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    userId = _ref.userId;

                                    _this.fire("reload-users");

                                    if (userId)
                                      _this.navigate(
                                        "/config/users/".concat(userId)
                                      );

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            },
                            _callee);
                          })
                        );

                        function dialogClosedCallback(_x) {
                          return _dialogClosedCallback.apply(this, arguments);
                        }

                        return dialogClosedCallback;
                      })(),
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
                      users: Array,
                      rtl: {
                        type: Boolean,
                        reflectToAttribute: true,
                        computed: "_computeRTL(hass)",
                      },
                    };
                  },
                },
              ]
            );

            return HaUserPicker;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"]
            )(
              Object(
                _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
              )(
                Object(
                  _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"]
                )(
                  _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                    "PolymerElement"
                  ]
                )
              )
            )
          );

        customElements.define("ha-config-user-picker", HaUserPicker);

        /***/
      },

    /***/ "./src/panels/config/users/ha-config-users.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/users/ha-config-users.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _ha_config_user_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-config-user-picker */ "./src/panels/config/users/ha-config-user-picker.js"
        );
        /* harmony import */ var _ha_user_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-user-editor */ "./src/panels/config/users/ha-user-editor.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/user */ "./src/data/user.ts"
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
            '\n      <app-route\n        route="[[route]]"\n        pattern="/:user"\n        data="{{_routeData}}"\n      ></app-route>\n\n      <template is="dom-if" if=\'[[_equals(_routeData.user, "picker")]]\'>\n        <ha-config-user-picker\n          hass="[[hass]]"\n          users="[[_users]]"\n        ></ha-config-user-picker>\n      </template>\n      <template\n        is="dom-if"\n        if=\'[[!_equals(_routeData.user, "picker")]]\'\n        restamp\n      >\n        <ha-user-editor\n          hass="[[hass]]"\n          user="[[_computeUser(_users, _routeData.user)]]"\n        ></ha-user-editor>\n      </template>\n    ',
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

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
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

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
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

        /*
         * @appliesMixin NavigateMixin
         */

        var HaConfigUsers =
          /*#__PURE__*/
          (function(_NavigateMixin) {
            _inherits(HaConfigUsers, _NavigateMixin);

            function HaConfigUsers() {
              _classCallCheck(this, HaConfigUsers);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigUsers).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigUsers,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaConfigUsers.prototype),
                      "ready",
                      this
                    ).call(this);

                    this._loadData();

                    this.addEventListener("reload-users", function() {
                      return _this._loadData();
                    });
                  },
                },
                {
                  key: "_handlePickUser",
                  value: function _handlePickUser(ev) {
                    this._user = ev.detail.user;
                  },
                },
                {
                  key: "_checkRoute",
                  value: function _checkRoute(route) {
                    var _this2 = this;

                    // prevent list getting under toolbar
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__[
                        "fireEvent"
                      ]
                    )(this, "iron-resize");
                    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__[
                      "Debouncer"
                    ].debounce(
                      this._debouncer,
                      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__[
                        "timeOut"
                      ].after(0),
                      function() {
                        if (route.path === "") {
                          _this2.navigate(
                            "".concat(route.prefix, "/picker"),
                            true
                          );
                        }
                      }
                    );
                  },
                },
                {
                  key: "_computeUser",
                  value: function _computeUser(users, userId) {
                    return (
                      users &&
                      users.filter(function(u) {
                        return u.id === userId;
                      })[0]
                    );
                  },
                },
                {
                  key: "_equals",
                  value: function _equals(a, b) {
                    return a === b;
                  },
                },
                {
                  key: "_loadData",
                  value: (function() {
                    var _loadData2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Object(
                                    _data_user__WEBPACK_IMPORTED_MODULE_9__[
                                      "fetchUsers"
                                    ]
                                  )(this.hass);

                                case 2:
                                  this._users = _context.sent;

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function _loadData() {
                      return _loadData2.apply(this, arguments);
                    }

                    return _loadData;
                  })(),
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
                      route: {
                        type: Object,
                        observer: "_checkRoute",
                      },
                      _routeData: Object,
                      _user: {
                        type: Object,
                        value: null,
                      },
                      _users: {
                        type: Array,
                        value: null,
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigUsers;
          })(
            Object(
              _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-config-users", HaConfigUsers);

        /***/
      },

    /***/ "./src/panels/config/users/ha-user-editor.ts":
      /*!***************************************************!*\
  !*** ./src/panels/config/users/ha-user-editor.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/until */ "./node_modules/lit-html/directives/until.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
        );
        /* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../data/user */ "./src/data/user.ts"
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto 16px;\n        }\n        hass-subpage ha-card:first-of-type {\n          direction: ltr;\n        }\n        table {\n          width: 100%;\n        }\n        td {\n          vertical-align: top;\n        }\n        .user-experiment {\n          padding: 8px 0;\n        }\n      ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n                  Unable to remove system generated users.\n                ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                  <tr>\n                    <td colspan="2" class="user-experiment">\n                      The users group is a work in progress. The user will be\n                      unable to administer the instance via the UI. We\'re still\n                      auditing all management API endpoints to ensure that they\n                      correctly limit access to administrators.\n                    </td>\n                  </tr>\n                ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                      <option value=",
            ">\n                        ",
            "\n                      </option>\n                    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n      <hass-subpage\n        .header=",
            "\n      >\n        <ha-card .header=",
            '>\n          <table class="card-content">\n            <tr>\n              <td>ID</td>\n              <td>',
            "</td>\n            </tr>\n            <tr>\n              <td>Owner</td>\n              <td>",
            "</td>\n            </tr>\n            <tr>\n              <td>Group</td>\n              <td>\n                <select\n                  @change=",
            "\n                  .value=",
            "\n                >\n                  ",
            "\n                </select>\n              </td>\n            </tr>\n            ",
            "\n\n            <tr>\n              <td>Active</td>\n              <td>",
            "</td>\n            </tr>\n            <tr>\n              <td>System generated</td>\n              <td>",
            '</td>\n            </tr>\n          </table>\n\n          <div class="card-actions">\n            <mwc-button @click=',
            ">\n              ",
            '\n            </mwc-button>\n            <mwc-button\n              class="warning"\n              @click=',
            "\n              .disabled=",
            "\n            >\n              ",
            "\n            </mwc-button>\n            ",
            "\n          </div>\n        </ha-card>\n      </hass-subpage>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
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

        function _decorate(decorators, factory, superClass, mixins) {
          var api = _getDecoratorsApi();
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              api = mixins[i](api);
            }
          }
          var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
          }, superClass);
          var decorated = api.decorateClass(
            _coalesceClassElements(r.d.map(_createElementDescriptor)),
            decorators
          );
          api.initializeClassElements(r.F, decorated.elements);
          return api.runClassFinishers(r.F, decorated.finishers);
        }

        function _getDecoratorsApi() {
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
              var proto = F.prototype;
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  var placement = element.placement;
                  if (
                    element.kind === kind &&
                    (placement === "static" || placement === "prototype")
                  ) {
                    var receiver = placement === "static" ? F : proto;
                    this.defineClassElement(receiver, element);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function defineClassElement(receiver, element) {
              var descriptor = element.descriptor;
              if (element.kind === "field") {
                var initializer = element.initializer;
                descriptor = {
                  enumerable: descriptor.enumerable,
                  writable: descriptor.writable,
                  configurable: descriptor.configurable,
                  value:
                    initializer === void 0
                      ? void 0
                      : initializer.call(receiver),
                };
              }
              Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function decorateClass(elements, decorators) {
              var newElements = [];
              var finishers = [];
              var placements = { static: [], prototype: [], own: [] };
              elements.forEach(function(element) {
                this.addElementPlacement(element, placements);
              }, this);
              elements.forEach(function(element) {
                if (!_hasDecorators(element)) return newElements.push(element);
                var elementFinishersExtras = this.decorateElement(
                  element,
                  placements
                );
                newElements.push(elementFinishersExtras.element);
                newElements.push.apply(
                  newElements,
                  elementFinishersExtras.extras
                );
                finishers.push.apply(
                  finishers,
                  elementFinishersExtras.finishers
                );
              }, this);
              if (!decorators) {
                return { elements: newElements, finishers: finishers };
              }
              var result = this.decorateConstructor(newElements, decorators);
              finishers.push.apply(finishers, result.finishers);
              result.finishers = finishers;
              return result;
            },
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
              var extras = [];
              var finishers = [];
              for (
                var decorators = element.decorators, i = decorators.length - 1;
                i >= 0;
                i--
              ) {
                var keys = placements[element.placement];
                keys.splice(keys.indexOf(element.key), 1);
                var elementObject = this.fromElementDescriptor(element);
                var elementFinisherExtras = this.toElementFinisherExtras(
                  (0, decorators[i])(elementObject) || elementObject
                );
                element = elementFinisherExtras.element;
                this.addElementPlacement(element, placements);
                if (elementFinisherExtras.finisher) {
                  finishers.push(elementFinisherExtras.finisher);
                }
                var newExtras = elementFinisherExtras.extras;
                if (newExtras) {
                  for (var j = 0; j < newExtras.length; j++) {
                    this.addElementPlacement(newExtras[j], placements);
                  }
                  extras.push.apply(extras, newExtras);
                }
              }
              return { element: element, finishers: finishers, extras: extras };
            },
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
              var finishers = [];
              for (var i = decorators.length - 1; i >= 0; i--) {
                var obj = this.fromClassDescriptor(elements);
                var elementsAndFinisher = this.toClassDescriptor(
                  (0, decorators[i])(obj) || obj
                );
                if (elementsAndFinisher.finisher !== undefined) {
                  finishers.push(elementsAndFinisher.finisher);
                }
                if (elementsAndFinisher.elements !== undefined) {
                  elements = elementsAndFinisher.elements;
                  for (var j = 0; j < elements.length - 1; j++) {
                    for (var k = j + 1; k < elements.length; k++) {
                      if (
                        elements[j].key === elements[k].key &&
                        elements[j].placement === elements[k].placement
                      ) {
                        throw new TypeError(
                          "Duplicated element (" + elements[j].key + ")"
                        );
                      }
                    }
                  }
                }
              }
              return { elements: elements, finishers: finishers };
            },
            fromElementDescriptor: function fromElementDescriptor(element) {
              var obj = {
                kind: element.kind,
                key: element.key,
                placement: element.placement,
                descriptor: element.descriptor,
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              if (element.kind === "field")
                obj.initializer = element.initializer;
              return obj;
            },
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
              if (elementObjects === undefined) return;
              return _toArray(elementObjects).map(function(elementObject) {
                var element = this.toElementDescriptor(elementObject);
                this.disallowProperty(
                  elementObject,
                  "finisher",
                  "An element descriptor"
                );
                this.disallowProperty(
                  elementObject,
                  "extras",
                  "An element descriptor"
                );
                return element;
              }, this);
            },
            toElementDescriptor: function toElementDescriptor(elementObject) {
              var kind = String(elementObject.kind);
              if (kind !== "method" && kind !== "field") {
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or' +
                    ' "field", but a decorator created an element descriptor with' +
                    ' .kind "' +
                    kind +
                    '"'
                );
              }
              var key = _toPropertyKey(elementObject.key);
              var placement = String(elementObject.placement);
              if (
                placement !== "static" &&
                placement !== "prototype" &&
                placement !== "own"
              ) {
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static",' +
                    ' "prototype" or "own", but a decorator created an element descriptor' +
                    ' with .placement "' +
                    placement +
                    '"'
                );
              }
              var descriptor = elementObject.descriptor;
              this.disallowProperty(
                elementObject,
                "elements",
                "An element descriptor"
              );
              var element = {
                kind: kind,
                key: key,
                placement: placement,
                descriptor: Object.assign({}, descriptor),
              };
              if (kind !== "field") {
                this.disallowProperty(
                  elementObject,
                  "initializer",
                  "A method descriptor"
                );
              } else {
                this.disallowProperty(
                  descriptor,
                  "get",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "set",
                  "The property descriptor of a field descriptor"
                );
                this.disallowProperty(
                  descriptor,
                  "value",
                  "The property descriptor of a field descriptor"
                );
                element.initializer = elementObject.initializer;
              }
              return element;
            },
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
              var kind = String(obj.kind);
              if (kind !== "class") {
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator' +
                    ' created a class descriptor with .kind "' +
                    kind +
                    '"'
                );
              }
              this.disallowProperty(obj, "key", "A class descriptor");
              this.disallowProperty(obj, "placement", "A class descriptor");
              this.disallowProperty(obj, "descriptor", "A class descriptor");
              this.disallowProperty(obj, "initializer", "A class descriptor");
              this.disallowProperty(obj, "extras", "A class descriptor");
              var finisher = _optionalCallableProperty(obj, "finisher");
              var elements = this.toElementDescriptors(obj.elements);
              return { elements: elements, finisher: finisher };
            },
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
              for (var i = 0; i < finishers.length; i++) {
                var newConstructor = (0, finishers[i])(constructor);
                if (newConstructor !== undefined) {
                  if (typeof newConstructor !== "function") {
                    throw new TypeError("Finishers must return a constructor.");
                  }
                  constructor = newConstructor;
                }
              }
              return constructor;
            },
            disallowProperty: function disallowProperty(obj, name, objectType) {
              if (obj[name] !== undefined) {
                throw new TypeError(
                  objectType + " can't have a ." + name + " property."
                );
              }
            },
          };
          return api;
        }

        function _createElementDescriptor(def) {
          var key = _toPropertyKey(def.key);
          var descriptor;
          if (def.kind === "method") {
            descriptor = {
              value: def.value,
              writable: true,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "get") {
            descriptor = {
              get: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "set") {
            descriptor = {
              set: def.value,
              configurable: true,
              enumerable: false,
            };
          } else if (def.kind === "field") {
            descriptor = {
              configurable: true,
              writable: true,
              enumerable: true,
            };
          }
          var element = {
            kind: def.kind === "field" ? "field" : "method",
            key: key,
            placement: def.static
              ? "static"
              : def.kind === "field"
              ? "own"
              : "prototype",
            descriptor: descriptor,
          };
          if (def.decorators) element.decorators = def.decorators;
          if (def.kind === "field") element.initializer = def.value;
          return element;
        }

        function _coalesceGetterSetter(element, other) {
          if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
          } else {
            other.descriptor.set = element.descriptor.set;
          }
        }

        function _coalesceClassElements(elements) {
          var newElements = [];
          var isSameElement = function isSameElement(other) {
            return (
              other.kind === "method" &&
              other.key === element.key &&
              other.placement === element.placement
            );
          };
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;
            if (
              element.kind === "method" &&
              (other = newElements.find(isSameElement))
            ) {
              if (
                _isDataDescriptor(element.descriptor) ||
                _isDataDescriptor(other.descriptor)
              ) {
                if (_hasDecorators(element) || _hasDecorators(other)) {
                  throw new ReferenceError(
                    "Duplicated methods (" +
                      element.key +
                      ") can't be decorated."
                  );
                }
                other.descriptor = element.descriptor;
              } else {
                if (_hasDecorators(element)) {
                  if (_hasDecorators(other)) {
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for " +
                        "the same property (" +
                        element.key +
                        ")."
                    );
                  }
                  other.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other);
              }
            } else {
              newElements.push(element);
            }
          }
          return newElements;
        }

        function _hasDecorators(element) {
          return element.decorators && element.decorators.length;
        }

        function _isDataDescriptor(desc) {
          return (
            desc !== undefined &&
            !(desc.value === undefined && desc.writable === undefined)
          );
        }

        function _optionalCallableProperty(obj, name) {
          var value = obj[name];
          if (value !== undefined && typeof value !== "function") {
            throw new TypeError("Expected '" + name + "' to be a function");
          }
          return value;
        }

        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }

        function _toArray(arr) {
          return (
            _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        }

        function _iterableToArray(iter) {
          if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return Array.from(iter);
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        var GROUPS = [
          _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_USER"],
          _data_user__WEBPACK_IMPORTED_MODULE_8__["SYSTEM_GROUP_ID_ADMIN"],
        ];

        var HaUserEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-user-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            var HaUserEditor =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaUserEditor, _LitElement2);

                function HaUserEditor() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaUserEditor);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      HaUserEditor
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaUserEditor;
              })(_LitElement);

            return {
              F: HaUserEditor,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "user",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var hass = this.hass;
                    var user = this.user;

                    if (!hass || !user) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      hass.localize("ui.panel.config.users.editor.caption"),
                      this._name,
                      user.id,
                      user.is_owner,
                      this._handleGroupChange,
                      Object(
                        lit_html_directives_until__WEBPACK_IMPORTED_MODULE_1__[
                          "until"
                        ]
                      )(
                        this.updateComplete.then(function() {
                          return user.group_ids[0];
                        })
                      ),
                      GROUPS.map(function(groupId) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject3(), groupId, hass.localize("groups.".concat(groupId)));
                      }),
                      user.group_ids[0] ===
                        _data_user__WEBPACK_IMPORTED_MODULE_8__[
                          "SYSTEM_GROUP_ID_USER"
                        ]
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject4())
                        : "",
                      user.is_active,
                      user.system_generated,
                      this._handleRenameUser,
                      hass.localize("ui.panel.config.users.editor.rename_user"),
                      this._deleteUser,
                      user.system_generated,
                      hass.localize("ui.panel.config.users.editor.delete_user"),
                      user.system_generated
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5())
                        : ""
                    );
                  },
                },
                {
                  kind: "get",
                  key: "_name",
                  value: function _name() {
                    return this.user && (this.user.name || "Unnamed user");
                  },
                },
                {
                  kind: "method",
                  key: "_handleRenameUser",
                  value: (function() {
                    var _handleRenameUser2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        var newName;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  ev.currentTarget.blur();
                                  newName = prompt("New name?", this.user.name);

                                  if (
                                    !(
                                      newName === null ||
                                      newName === this.user.name
                                    )
                                  ) {
                                    _context.next = 4;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 4:
                                  _context.prev = 4;
                                  _context.next = 7;
                                  return Object(
                                    _data_user__WEBPACK_IMPORTED_MODULE_8__[
                                      "updateUser"
                                    ]
                                  )(this.hass, this.user.id, {
                                    name: newName,
                                  });

                                case 7:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                                      "fireEvent"
                                    ]
                                  )(this, "reload-users");
                                  _context.next = 13;
                                  break;

                                case 10:
                                  _context.prev = 10;
                                  _context.t0 = _context["catch"](4);
                                  alert(
                                    "User rename failed: ".concat(
                                      _context.t0.message
                                    )
                                  );

                                case 13:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[4, 10]]
                        );
                      })
                    );

                    function _handleRenameUser(_x) {
                      return _handleRenameUser2.apply(this, arguments);
                    }

                    return _handleRenameUser;
                  })(),
                },
                {
                  kind: "method",
                  key: "_handleGroupChange",
                  value: (function() {
                    var _handleGroupChange2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var selectEl, newGroup;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  selectEl = ev.currentTarget;
                                  newGroup = selectEl.value;
                                  _context2.prev = 2;
                                  _context2.next = 5;
                                  return Object(
                                    _data_user__WEBPACK_IMPORTED_MODULE_8__[
                                      "updateUser"
                                    ]
                                  )(this.hass, this.user.id, {
                                    group_ids: [newGroup],
                                  });

                                case 5:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                                      "fireEvent"
                                    ]
                                  )(this, "reload-users");
                                  _context2.next = 12;
                                  break;

                                case 8:
                                  _context2.prev = 8;
                                  _context2.t0 = _context2["catch"](2);
                                  alert(
                                    "Group update failed: ".concat(
                                      _context2.t0.message
                                    )
                                  );
                                  selectEl.value = this.user.group_ids[0];

                                case 12:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[2, 8]]
                        );
                      })
                    );

                    function _handleGroupChange(_x2) {
                      return _handleGroupChange2.apply(this, arguments);
                    }

                    return _handleGroupChange;
                  })(),
                },
                {
                  kind: "method",
                  key: "_deleteUser",
                  value: (function() {
                    var _deleteUser2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3(ev) {
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      "Are you sure you want to delete ".concat(
                                        this._name
                                      )
                                    )
                                  ) {
                                    _context3.next = 3;
                                    break;
                                  }

                                  ev.target.blur();
                                  return _context3.abrupt("return");

                                case 3:
                                  _context3.prev = 3;
                                  _context3.next = 6;
                                  return Object(
                                    _data_user__WEBPACK_IMPORTED_MODULE_8__[
                                      "deleteUser"
                                    ]
                                  )(this.hass, this.user.id);

                                case 6:
                                  _context3.next = 12;
                                  break;

                                case 8:
                                  _context3.prev = 8;
                                  _context3.t0 = _context3["catch"](3);
                                  alert(_context3.t0.code);
                                  return _context3.abrupt("return");

                                case 12:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                                      "fireEvent"
                                    ]
                                  )(this, "reload-users");
                                  Object(
                                    _common_navigate__WEBPACK_IMPORTED_MODULE_7__[
                                      "navigate"
                                    ]
                                  )(this, "/config/users");

                                case 14:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this,
                          [[3, 8]]
                        );
                      })
                    );

                    function _deleteUser(_x3) {
                      return _deleteUser2.apply(this, arguments);
                    }

                    return _deleteUser;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject6()
                      ),
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXVzZXJzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3VudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbmF2aWdhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvdXNlcnMvaGEtY29uZmlnLXVzZXItcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3VzZXJzL2hhLWNvbmZpZy11c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9oYS11c2VyLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7aXNQcmltaXRpdmV9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQge2RpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5pbnRlcmZhY2UgQXN5bmNTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGUgbGFzdCByZW5kZXJlZCBpbmRleCBvZiBhIGNhbGwgdG8gdW50aWwoKS4gQSB2YWx1ZSBvbmx5IHJlbmRlcnMgaWYgaXRzXG4gICAqIGluZGV4IGlzIGxlc3MgdGhhbiB0aGUgYGxhc3RSZW5kZXJlZEluZGV4YC5cbiAgICovXG4gIGxhc3RSZW5kZXJlZEluZGV4OiBudW1iZXI7XG5cbiAgdmFsdWVzOiB1bmtub3duW107XG59XG5cbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwPFBhcnQsIEFzeW5jU3RhdGU+KCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcblxuLyoqXG4gKiBSZW5kZXJzIG9uZSBvZiBhIHNlcmllcyBvZiB2YWx1ZXMsIGluY2x1ZGluZyBQcm9taXNlcywgdG8gYSBQYXJ0LlxuICpcbiAqIFZhbHVlcyBhcmUgcmVuZGVyZWQgaW4gcHJpb3JpdHkgb3JkZXIsIHdpdGggdGhlIGZpcnN0IGFyZ3VtZW50IGhhdmluZyB0aGVcbiAqIGhpZ2hlc3QgcHJpb3JpdHkgYW5kIHRoZSBsYXN0IGFyZ3VtZW50IGhhdmluZyB0aGUgbG93ZXN0IHByaW9yaXR5LiBJZiBhXG4gKiB2YWx1ZSBpcyBhIFByb21pc2UsIGxvdy1wcmlvcml0eSB2YWx1ZXMgd2lsbCBiZSByZW5kZXJlZCB1bnRpbCBpdCByZXNvbHZlcy5cbiAqXG4gKiBUaGUgcHJpb3JpdHkgb2YgdmFsdWVzIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciBhc3luY1xuICogZGF0YS4gRm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB3aXRoIHBlbmRpbmcgY29udGVudCBjYW4gYmUgdGhlIGZpcnN0LFxuICogaGlnaGVzdC1wcmlvcml0eSwgYXJndW1lbnQsIGFuZCBhIG5vbl9wcm9taXNlIGxvYWRpbmcgaW5kaWNhdG9yIHRlbXBsYXRlIGNhblxuICogYmUgdXNlZCBhcyB0aGUgc2Vjb25kLCBsb3dlci1wcmlvcml0eSwgYXJndW1lbnQuIFRoZSBsb2FkaW5nIGluZGljYXRvciB3aWxsXG4gKiByZW5kZXIgaW1tZWRpYXRlbHksIGFuZCB0aGUgcHJpbWFyeSBjb250ZW50IHdpbGwgcmVuZGVyIHdoZW4gdGhlIFByb21pc2VcbiAqIHJlc29sdmVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGNvbnRlbnQgPSBmZXRjaCgnLi9jb250ZW50LnR4dCcpLnRoZW4ociA9PiByLnRleHQoKSk7XG4gKiAgICAgaHRtbGAke3VudGlsKGNvbnRlbnQsIGh0bWxgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5gKX1gXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IGRpcmVjdGl2ZSgoLi4uYXJnczogdW5rbm93bltdKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBsZXQgc3RhdGUgPSBfc3RhdGUuZ2V0KHBhcnQpITtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICB2YWx1ZXM6IFtdLFxuICAgIH07XG4gICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gIGxldCBwcmV2aW91c0xlbmd0aCA9IHByZXZpb3VzVmFsdWVzLmxlbmd0aDtcbiAgc3RhdGUudmFsdWVzID0gYXJncztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJZiB3ZSd2ZSByZW5kZXJlZCBhIGhpZ2hlci1wcmlvcml0eSB2YWx1ZSBhbHJlYWR5LCBzdG9wLlxuICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcblxuICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgIHR5cGVvZiAodmFsdWUgYXMge3RoZW4/OiB1bmtub3dufSkudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc3Npbmcgbm93LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAvLyBjaGFuZ2VkLiBGb3JnZXQgd2hhdCB3ZSByZW5kZXJlZCBiZWZvcmUuXG4gICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgcHJldmlvdXNMZW5ndGggPSAwO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4vaGEtaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uTmV4dCBleHRlbmRzIEhhSWNvbiB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmljb24gPVxuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcblxuICAgIC8vIGNhbGxpbmcgc3VwZXIgYWZ0ZXIgc2V0dGluZyBpY29uIHRvIGhhdmUgaXQgY29uc2lzdGVudGx5IHNob3cgdGhlIGljb24gKG90aGVyd2lzZSBub3QgYWx3YXlzIHNob3duKVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfQURNSU4gPSBcInN5c3RlbS1hZG1pblwiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9VU0VSID0gXCJzeXN0ZW0tdXNlcnNcIjtcbmV4cG9ydCBjb25zdCBTWVNURU1fR1JPVVBfSURfUkVBRF9PTkxZID0gXCJzeXN0ZW0tcmVhZC1vbmx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfb3duZXI6IGJvb2xlYW47XG4gIGlzX2FjdGl2ZTogYm9vbGVhbjtcbiAgc3lzdGVtX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgZ3JvdXBfaWRzOiBzdHJpbmdbXTtcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxbXTtcbn1cblxuaW50ZXJmYWNlIFVwZGF0ZVVzZXJQYXJhbXMge1xuICBuYW1lPzogVXNlcltcIm5hbWVcIl07XG4gIGdyb3VwX2lkcz86IFVzZXJbXCJncm91cF9pZHNcIl07XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFVzZXJbXT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvbGlzdFwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgbmFtZTogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzx7IHVzZXI6IFVzZXIgfT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvY3JlYXRlXCIsXG4gICAgbmFtZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB1c2VySWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBVcGRhdGVVc2VyUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgLi4ucGFyYW1zLFxuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvdXBkYXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCwgdXNlcklkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHZvaWQ+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hdXRoL2RlbGV0ZVwiLFxuICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuLypcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIG5hdmlnYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFVc2VyUGlja2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oXG4gIE5hdmlnYXRlTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpXG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZmFiW3J0bF1baXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLnRpdGxlJyldXVwiPlxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3VzZXJzXV1cIiBhcz1cInVzZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJbW19jb21wdXRlVXJsKHVzZXIpXV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+W1tfd2l0aERlZmF1bHQodXNlci5uYW1lLCAnVW5uYW1lZCBVc2VyJyldXTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tfY29tcHV0ZUdyb3VwKGxvY2FsaXplLCB1c2VyKV1dXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t1c2VyLnN5c3RlbV9nZW5lcmF0ZWRdXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIC0gU3lzdGVtIEdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICA8cGFwZXItZmFiXG4gICAgICAgICAgaXMtd2lkZSQ9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5waWNrZXIuYWRkX3VzZXInKV1dXCJcbiAgICAgICAgICBvbi1jbGljaz1cIl9hZGRVc2VyXCJcbiAgICAgICAgICBydGwkPVwiW1tydGxdXVwiXG4gICAgICAgID48L3BhcGVyLWZhYj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHVzZXJzOiBBcnJheSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctYWRkLXVzZXJcIixcbiAgICAgICAgZGlhbG9nVGFnOiBcImhhLWRpYWxvZy1hZGQtdXNlclwiLFxuICAgICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGEtZGlhbG9nLWFkZC11c2VyXCIgKi8gXCIuL2hhLWRpYWxvZy1hZGQtdXNlclwiKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF93aXRoRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIHx8IGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIF9jb21wdXRlVXJsKHVzZXIpIHtcbiAgICByZXR1cm4gYC9jb25maWcvdXNlcnMvJHt1c2VyLmlkfWA7XG4gIH1cblxuICBfY29tcHV0ZUdyb3VwKGxvY2FsaXplLCB1c2VyKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBncm91cHMuJHt1c2VyLmdyb3VwX2lkc1swXX1gKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxuXG4gIF9hZGRVc2VyKCkge1xuICAgIHRoaXMuZmlyZShcInNob3ctYWRkLXVzZXJcIiwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcInJlbG9hZC11c2Vyc1wiKTtcbiAgICAgICAgaWYgKHVzZXJJZCkgdGhpcy5uYXZpZ2F0ZShgL2NvbmZpZy91c2Vycy8ke3VzZXJJZH1gKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXVzZXItcGlja2VyXCIsIEhhVXNlclBpY2tlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9oYS1jb25maWctdXNlci1waWNrZXJcIjtcbmltcG9ydCBcIi4vaGEtdXNlci1lZGl0b3JcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdVc2VycyBleHRlbmRzIE5hdmlnYXRlTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiLzp1c2VyXCJcbiAgICAgICAgZGF0YT1cInt7X3JvdXRlRGF0YX19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcm91dGVEYXRhLnVzZXIsIFwicGlja2VyXCIpXV0nPlxuICAgICAgICA8aGEtY29uZmlnLXVzZXItcGlja2VyXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICB1c2Vycz1cIltbX3VzZXJzXV1cIlxuICAgICAgICA+PC9oYS1jb25maWctdXNlci1waWNrZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgaWY9J1tbIV9lcXVhbHMoX3JvdXRlRGF0YS51c2VyLCBcInBpY2tlclwiKV1dJ1xuICAgICAgICByZXN0YW1wXG4gICAgICA+XG4gICAgICAgIDxoYS11c2VyLWVkaXRvclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgdXNlcj1cIltbX2NvbXB1dGVVc2VyKF91c2VycywgX3JvdXRlRGF0YS51c2VyKV1dXCJcbiAgICAgICAgPjwvaGEtdXNlci1lZGl0b3I+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJvdXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2NoZWNrUm91dGVcIixcbiAgICAgIH0sXG4gICAgICBfcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICBfdXNlcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIF91c2Vyczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX2xvYWREYXRhKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwicmVsb2FkLXVzZXJzXCIsICgpID0+IHRoaXMuX2xvYWREYXRhKCkpO1xuICB9XG5cbiAgX2hhbmRsZVBpY2tVc2VyKGV2KSB7XG4gICAgdGhpcy5fdXNlciA9IGV2LmRldGFpbC51c2VyO1xuICB9XG5cbiAgX2NoZWNrUm91dGUocm91dGUpIHtcbiAgICAvLyBwcmV2ZW50IGxpc3QgZ2V0dGluZyB1bmRlciB0b29sYmFyXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG5cbiAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICB0aW1lT3V0LmFmdGVyKDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAocm91dGUucGF0aCA9PT0gXCJcIikge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGUoYCR7cm91dGUucHJlZml4fS9waWNrZXJgLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVVzZXIodXNlcnMsIHVzZXJJZCkge1xuICAgIHJldHVybiB1c2VycyAmJiB1c2Vycy5maWx0ZXIoKHUpID0+IHUuaWQgPT09IHVzZXJJZClbMF07XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIGFzeW5jIF9sb2FkRGF0YSgpIHtcbiAgICB0aGlzLl91c2VycyA9IGF3YWl0IGZldGNoVXNlcnModGhpcy5oYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctdXNlcnNcIiwgSGFDb25maWdVc2Vycyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgdW50aWwgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy91bnRpbFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7XG4gIFVzZXIsXG4gIGRlbGV0ZVVzZXIsXG4gIHVwZGF0ZVVzZXIsXG4gIFNZU1RFTV9HUk9VUF9JRF9VU0VSLFxuICBTWVNURU1fR1JPVVBfSURfQURNSU4sXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3VzZXJcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtdXNlcnNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbmNvbnN0IEdST1VQUyA9IFtTWVNURU1fR1JPVVBfSURfVVNFUiwgU1lTVEVNX0dST1VQX0lEX0FETUlOXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS11c2VyLWVkaXRvclwiKVxuY2xhc3MgSGFVc2VyRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHVzZXI/OiBVc2VyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgaWYgKCFoYXNzIHx8ICF1c2VyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7aGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuY2FwdGlvblwiKX1cbiAgICAgID5cbiAgICAgICAgPGhhLWNhcmQgLmhlYWRlcj0ke3RoaXMuX25hbWV9PlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlkfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+T3duZXI8L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlzX293bmVyfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+R3JvdXA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZUdyb3VwQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dW50aWwoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB1c2VyLmdyb3VwX2lkc1swXSlcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHtHUk9VUFMubWFwKFxuICAgICAgICAgICAgICAgICAgICAoZ3JvdXBJZCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSR7Z3JvdXBJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoYGdyb3Vwcy4ke2dyb3VwSWR9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgJHt1c2VyLmdyb3VwX2lkc1swXSA9PT0gU1lTVEVNX0dST1VQX0lEX1VTRVJcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cInVzZXItZXhwZXJpbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZSB1c2VycyBncm91cCBpcyBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFRoZSB1c2VyIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICB1bmFibGUgdG8gYWRtaW5pc3RlciB0aGUgaW5zdGFuY2UgdmlhIHRoZSBVSS4gV2UncmUgc3RpbGxcbiAgICAgICAgICAgICAgICAgICAgICBhdWRpdGluZyBhbGwgbWFuYWdlbWVudCBBUEkgZW5kcG9pbnRzIHRvIGVuc3VyZSB0aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0bHkgbGltaXQgYWNjZXNzIHRvIGFkbWluaXN0cmF0b3JzLlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+QWN0aXZlPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5pc19hY3RpdmV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5TeXN0ZW0gZ2VuZXJhdGVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVSZW5hbWVVc2VyfT5cbiAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5yZW5hbWVfdXNlclwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZVVzZXJ9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3VzZXIuc3lzdGVtX2dlbmVyYXRlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5kZWxldGVfdXNlclwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIFVuYWJsZSB0byByZW1vdmUgc3lzdGVtIGdlbmVyYXRlZCB1c2Vycy5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXIgJiYgKHRoaXMudXNlci5uYW1lIHx8IFwiVW5uYW1lZCB1c2VyXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlUmVuYW1lVXNlcihldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoXCJOZXcgbmFtZT9cIiwgdGhpcy51c2VyIS5uYW1lKTtcbiAgICBpZiAobmV3TmFtZSA9PT0gbnVsbCB8fCBuZXdOYW1lID09PSB0aGlzLnVzZXIhLm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlVXNlcih0aGlzLmhhc3MhLCB0aGlzLnVzZXIhLmlkLCB7XG4gICAgICAgIG5hbWU6IG5ld05hbWUsXG4gICAgICB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInJlbG9hZC11c2Vyc1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBVc2VyIHJlbmFtZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlR3JvdXBDaGFuZ2UoZXYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZWxlY3RFbCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgY29uc3QgbmV3R3JvdXAgPSBzZWxlY3RFbC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlVXNlcih0aGlzLmhhc3MhLCB0aGlzLnVzZXIhLmlkLCB7XG4gICAgICAgIGdyb3VwX2lkczogW25ld0dyb3VwXSxcbiAgICAgIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYEdyb3VwIHVwZGF0ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICBzZWxlY3RFbC52YWx1ZSA9IHRoaXMudXNlciEuZ3JvdXBfaWRzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZVVzZXIoZXYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHt0aGlzLl9uYW1lfWApKSB7XG4gICAgICBldi50YXJnZXQuYmx1cigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlVXNlcih0aGlzLmhhc3MhLCB0aGlzLnVzZXIhLmlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5jb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy91c2Vyc1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGFzcy1zdWJwYWdlIGhhLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWV4cGVyaW1lbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXVzZXItZWRpdG9yXCI6IEhhVXNlckVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQUNBO0FBREE7QUFhQTtBQUNBO0FBREE7QUFBQTtBQWVBO0FBQ0E7QUFoQkE7QUFvQkE7QUFwQkE7QUF1Q0E7QUFDQTtBQXJEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFUQTtBQUNBO0FBREE7QUFBQTtBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFIQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsMGlCQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFGQTtBQU9BOzs7QUFwSEE7QUFDQTtBQThEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTs7OztBQS9FQTtBQUNBO0FBeUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQStDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWpGQTtBQUNBO0FBd0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBOzs7O0FBN0NBO0FBQ0E7QUFvRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0JBO0FBQUE7QUFJQTtBQUFBO0FBb0RBOzs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBREE7QUFDQTtBQVRBO0FBV0E7QUFYQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBS0E7QUFEQTtBQUNBO0FBTEE7QUFPQTtBQVBBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBMEJBOzs7QUF0S0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
