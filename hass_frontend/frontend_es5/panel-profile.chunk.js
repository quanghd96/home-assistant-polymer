(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-profile"],
  {
    /***/ "./src/common/config/is_component_loaded.ts":
      /*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return isComponentLoaded;
          }
        );
        /** Return if a component is loaded. */
        function isComponentLoaded(hass, component) {
          return hass && hass.config.components.indexOf(component) !== -1;
        }

        /***/
      },

    /***/ "./src/common/datetime/format_date_time.ts":
      /*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleStringSupportsOptions() {
          try {
            new Date().toLocaleString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleStringSupportsOptions()
          ? function(dateObj, locales) {
              return dateObj.toLocaleString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              });
            }
          : function(dateObj) {
              return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "haDateTime"
              );
            };

        /***/
      },

    /***/ "./src/components/ha-paper-dropdown-menu.ts":
      /*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
      /*! exports provided: HaPaperDropdownClass */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperDropdownClass",
          function() {
            return HaPaperDropdownClass;
          }
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
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

        var paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

        var HaPaperDropdownClass =
          /*#__PURE__*/
          (function(_paperDropdownClass) {
            _inherits(HaPaperDropdownClass, _paperDropdownClass);

            function HaPaperDropdownClass() {
              _classCallCheck(this, HaPaperDropdownClass);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperDropdownClass).apply(this, arguments)
              );
            }

            _createClass(HaPaperDropdownClass, [
              {
                key: "ready",
                value: function ready() {
                  var _this = this;

                  _get(
                    _getPrototypeOf(HaPaperDropdownClass.prototype),
                    "ready",
                    this
                  ).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL

                  setTimeout(function() {
                    if (window.getComputedStyle(_this).direction === "rtl") {
                      _this.style.textAlign = "right";
                    }
                  }, 100);
                },
              },
            ]);

            return HaPaperDropdownClass;
          })(paperDropdownClass);
        customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

        /***/
      },

    /***/ "./src/components/ha-push-notifications-toggle.js":
      /*!********************************************************!*\
  !*** ./src/components/ha-push-notifications-toggle.js ***!
  \********************************************************/
      /*! exports provided: pushSupported */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "pushSupported",
          function() {
            return pushSupported;
          }
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _data_notify_html5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../data/notify_html5 */ "./src/data/notify_html5.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <paper-toggle-button\n        disabled="[[_compDisabled(disabled, loading)]]"\n        checked="{{pushChecked}}"\n        on-change="handlePushChange"\n      ></paper-toggle-button>\n    ',
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

        var pushSupported =
          "serviceWorker" in navigator &&
          "PushManager" in window &&
          (document.location.protocol === "https:" ||
            document.location.hostname === "localhost" ||
            document.location.hostname === "127.0.0.1");
        /*
         * @appliesMixin EventsMixin
         */

        var HaPushNotificationsToggle =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaPushNotificationsToggle, _EventsMixin);

            function HaPushNotificationsToggle() {
              _classCallCheck(this, HaPushNotificationsToggle);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPushNotificationsToggle).apply(
                  this,
                  arguments
                )
              );
            }

            _createClass(
              HaPushNotificationsToggle,
              [
                {
                  key: "connectedCallback",
                  value: (function() {
                    var _connectedCallback = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this = this;

                        var reg;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _get(
                                    _getPrototypeOf(
                                      HaPushNotificationsToggle.prototype
                                    ),
                                    "connectedCallback",
                                    this
                                  ).call(this);

                                  if (pushSupported) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 3:
                                  _context.prev = 3;
                                  _context.next = 6;
                                  return navigator.serviceWorker.ready;

                                case 6:
                                  reg = _context.sent;

                                  if (reg.pushManager) {
                                    _context.next = 9;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 9:
                                  reg.pushManager
                                    .getSubscription()
                                    .then(function(subscription) {
                                      _this.loading = false;
                                      _this.pushChecked = !!subscription;
                                    });
                                  _context.next = 14;
                                  break;

                                case 12:
                                  _context.prev = 12;
                                  _context.t0 = _context["catch"](3);

                                case 14:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[3, 12]]
                        );
                      })
                    );

                    function connectedCallback() {
                      return _connectedCallback.apply(this, arguments);
                    }

                    return connectedCallback;
                  })(),
                },
                {
                  key: "handlePushChange",
                  value: function handlePushChange(event) {
                    // Somehow this is triggered on Safari on page load causing
                    // it to get into a loop and crash the page.
                    if (!pushSupported) return;

                    if (event.target.checked) {
                      this.subscribePushNotifications();
                    } else {
                      this.unsubscribePushNotifications();
                    }
                  },
                },
                {
                  key: "subscribePushNotifications",
                  value: (function() {
                    var _subscribePushNotifications = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var reg,
                          sub,
                          browserName,
                          name,
                          applicationServerKey,
                          message;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  _context2.next = 2;
                                  return navigator.serviceWorker.ready;

                                case 2:
                                  reg = _context2.sent;
                                  _context2.prev = 3;

                                  if (
                                    navigator.userAgent
                                      .toLowerCase()
                                      .indexOf("firefox") > -1
                                  ) {
                                    browserName = "firefox";
                                  } else {
                                    browserName = "chrome";
                                  }

                                  name = prompt(
                                    "What should this device be called ?"
                                  );

                                  if (!(name == null)) {
                                    _context2.next = 9;
                                    break;
                                  }

                                  this.pushChecked = false;
                                  return _context2.abrupt("return");

                                case 9:
                                  _context2.prev = 9;
                                  _context2.next = 12;
                                  return Object(
                                    _data_notify_html5__WEBPACK_IMPORTED_MODULE_3__[
                                      "getAppKey"
                                    ]
                                  )(this.hass);

                                case 12:
                                  applicationServerKey = _context2.sent;
                                  _context2.next = 18;
                                  break;

                                case 15:
                                  _context2.prev = 15;
                                  _context2.t0 = _context2["catch"](9);
                                  applicationServerKey = null;

                                case 18:
                                  if (!applicationServerKey) {
                                    _context2.next = 24;
                                    break;
                                  }

                                  _context2.next = 21;
                                  return reg.pushManager.subscribe({
                                    userVisibleOnly: true,
                                    applicationServerKey: applicationServerKey,
                                  });

                                case 21:
                                  sub = _context2.sent;
                                  _context2.next = 27;
                                  break;

                                case 24:
                                  _context2.next = 26;
                                  return reg.pushManager.subscribe({
                                    userVisibleOnly: true,
                                  });

                                case 26:
                                  sub = _context2.sent;

                                case 27:
                                  _context2.next = 29;
                                  return this.hass.callApi(
                                    "POST",
                                    "notify.html5",
                                    {
                                      subscription: sub,
                                      browser: browserName,
                                      name: name,
                                    }
                                  );

                                case 29:
                                  _context2.next = 40;
                                  break;

                                case 31:
                                  _context2.prev = 31;
                                  _context2.t1 = _context2["catch"](3);
                                  message =
                                    _context2.t1.message ||
                                    "Notification registration failed.";

                                  if (!sub) {
                                    _context2.next = 37;
                                    break;
                                  }

                                  _context2.next = 37;
                                  return sub.unsubscribe();

                                case 37:
                                  // eslint-disable-next-line
                                  console.error(_context2.t1);
                                  this.fire("hass-notification", {
                                    message: message,
                                  });
                                  this.pushChecked = false;

                                case 40:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[3, 31], [9, 15]]
                        );
                      })
                    );

                    function subscribePushNotifications() {
                      return _subscribePushNotifications.apply(this, arguments);
                    }

                    return subscribePushNotifications;
                  })(),
                },
                {
                  key: "unsubscribePushNotifications",
                  value: (function() {
                    var _unsubscribePushNotifications = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var reg, sub, message;
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  _context3.next = 2;
                                  return navigator.serviceWorker.ready;

                                case 2:
                                  reg = _context3.sent;
                                  _context3.prev = 3;
                                  _context3.next = 6;
                                  return reg.pushManager.getSubscription();

                                case 6:
                                  sub = _context3.sent;

                                  if (sub) {
                                    _context3.next = 9;
                                    break;
                                  }

                                  return _context3.abrupt("return");

                                case 9:
                                  _context3.next = 11;
                                  return this.hass.callApi(
                                    "DELETE",
                                    "notify.html5",
                                    {
                                      subscription: sub,
                                    }
                                  );

                                case 11:
                                  _context3.next = 13;
                                  return sub.unsubscribe();

                                case 13:
                                  _context3.next = 21;
                                  break;

                                case 15:
                                  _context3.prev = 15;
                                  _context3.t0 = _context3["catch"](3);
                                  message =
                                    _context3.t0.message ||
                                    "Failed unsubscribing for push notifications."; // eslint-disable-next-line

                                  console.error(
                                    "Error in unsub push",
                                    _context3.t0
                                  );
                                  this.fire("hass-notification", {
                                    message: message,
                                  });
                                  this.pushChecked = true;

                                case 21:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this,
                          [[3, 15]]
                        );
                      })
                    );

                    function unsubscribePushNotifications() {
                      return _unsubscribePushNotifications.apply(
                        this,
                        arguments
                      );
                    }

                    return unsubscribePushNotifications;
                  })(),
                },
                {
                  key: "_compDisabled",
                  value: function _compDisabled(disabled, loading) {
                    return disabled || loading;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {
                        type: Object,
                        value: null,
                      },
                      disabled: {
                        type: Boolean,
                        value: false,
                      },
                      pushChecked: {
                        type: Boolean,
                        value:
                          "Notification" in window &&
                          Notification.permission === "granted",
                      },
                      loading: {
                        type: Boolean,
                        value: true,
                      },
                    };
                  },
                },
              ]
            );

            return HaPushNotificationsToggle;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "ha-push-notifications-toggle",
          HaPushNotificationsToggle
        );

        /***/
      },

    /***/ "./src/data/notify_html5.ts":
      /*!**********************************!*\
  !*** ./src/data/notify_html5.ts ***!
  \**********************************/
      /*! exports provided: getAppKey */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAppKey",
          function() {
            return getAppKey;
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

        function urlBase64ToUint8Array(base64String) {
          var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
          var base64 = (base64String + padding)
            .replace(/-/g, "+")
            .replace(/_/g, "/");
          var rawData = window.atob(base64);
          var outputArray = new Uint8Array(rawData.length);

          for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
          }

          return outputArray;
        }

        var getAppKey =
          /*#__PURE__*/
          (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(hass) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2;
                        return hass.callWS({
                          type: "notify/html5/appkey",
                        });

                      case 2:
                        res = _context.sent;
                        return _context.abrupt(
                          "return",
                          res ? urlBase64ToUint8Array(res) : null
                        );

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );

            return function getAppKey(_x) {
              return _ref.apply(this, arguments);
            };
          })();

        /***/
      },

    /***/ "./src/mixins/events-mixin.js":
      /*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
      /*! exports provided: EventsMixin */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EventsMixin",
          function() {
            return EventsMixin;
          }
        );
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        // Polymer legacy event helpers used courtesy of the Polymer project.
        //
        // Copyright (c) 2017 The Polymer Authors. All rights reserved.
        //
        // Redistribution and use in source and binary forms, with or without
        // modification, are permitted provided that the following conditions are
        // met:
        //
        //    * Redistributions of source code must retain the above copyright
        // notice, this list of conditions and the following disclaimer.
        //    * Redistributions in binary form must reproduce the above
        // copyright notice, this list of conditions and the following disclaimer
        // in the documentation and/or other materials provided with the
        // distribution.
        //    * Neither the name of Google Inc. nor the names of its
        // contributors may be used to endorse or promote products derived from
        // this software without specific prior written permission.
        //
        // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
        // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
        // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
        // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
        // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
        // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
        // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

        /* @polymerMixin */

        var EventsMixin = Object(
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
                  key: "fire",

                  /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
                  value: function fire(type, detail, options) {
                    options = options || {};
                    return Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                        "fireEvent"
                      ]
                    )(options.node || this, type, detail, options);
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/mixins/localize-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
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

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
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

              _createClass(
                _class,
                [
                  {
                    key: "__computeLocalize",
                    value: function __computeLocalize(localize) {
                      return localize;
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function get() {
                      return {
                        hass: Object,

                        /**
                         * Translates a string to the current `language`. Any parameters to the
                         * string should be passed in order, as follows:
                         * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
                         */
                        localize: {
                          type: Function,
                          computed: "__computeLocalize(hass.localize)",
                        },
                      };
                    },
                  },
                ]
              );

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/profile/ha-advanced-mode-card.ts":
      /*!*****************************************************!*\
  !*** ./src/panels/profile/ha-advanced-mode-card.ts ***!
  \*****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../data/frontend */ "./src/data/frontend.ts"
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n      .card-header {\n        display: flex;\n      }\n      .title {\n        flex: 1;\n      }\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card>\n        <div class="card-header">\n          <div class="title">Advanced mode</div>\n          <paper-toggle-button\n            .checked=',
            "\n            .disabled=",
            "\n            @change=",
            '\n          ></paper-toggle-button>\n        </div>\n        <div class="card-content">\n          JAVIS Home hides advanced features and options by default. You can\n          make these features accessible by checking this toggle. This is a\n          user-specific setting and does not impact other users using Home\n          Assistant.\n        </div>\n      </ha-card>\n    ',
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

        var AdvancedModeCard = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-advanced-mode-card"
            ),
          ],
          function(_initialize, _LitElement) {
            var AdvancedModeCard =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(AdvancedModeCard, _LitElement2);

                function AdvancedModeCard() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, AdvancedModeCard);

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
                      AdvancedModeCard
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return AdvancedModeCard;
              })(_LitElement);

            return {
              F: AdvancedModeCard,
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
                  key: "coreUserData",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.coreUserData && this.coreUserData.showAdvanced,
                      this.coreUserData === undefined,
                      this._advancedToggled
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_advancedToggled",
                  value: (function() {
                    var _advancedToggled2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  Object(
                                    _data_frontend__WEBPACK_IMPORTED_MODULE_2__[
                                      "getOptimisticFrontendUserDataCollection"
                                    ]
                                  )(this.hass.connection, "core").save({
                                    showAdvanced: ev.currentTarget.checked,
                                  });

                                case 1:
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

                    function _advancedToggled(_x) {
                      return _advancedToggled2.apply(this, arguments);
                    }

                    return _advancedToggled;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject2());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/profile/ha-change-password-card.js":
      /*!*******************************************************!*\
  !*** ./src/panels/profile/ha-change-password-card.js ***!
  \*******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
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
            '\n      <style include="ha-style">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        .currentPassword {\n          margin-top: -4px;\n        }\n      </style>\n      <div>\n        <ha-card\n          header="[[localize(\'ui.panel.profile.change_password.header\')]]"\n        >\n          <div class="card-content">\n            <template is="dom-if" if="[[_errorMsg]]">\n              <div class="error">[[_errorMsg]]</div>\n            </template>\n            <template is="dom-if" if="[[_statusMsg]]">\n              <div class="status">[[_statusMsg]]</div>\n            </template>\n            <paper-input\n              class="currentPassword"\n              label="[[localize(\'ui.panel.profile.change_password.current_password\')]]"\n              type="password"\n              value="{{_currentPassword}}"\n              required\n              auto-validate\n              error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n            ></paper-input>\n            <template is="dom-if" if="[[_currentPassword]]">\n              <paper-input\n                label="[[localize(\'ui.panel.profile.change_password.new_password\')]]"\n                type="password"\n                value="{{_password1}}"\n                required\n                auto-validate\n                error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n              ></paper-input>\n              <paper-input\n                label="[[localize(\'ui.panel.profile.change_password.confirm_new_password\')]]"\n                type="password"\n                value="{{_password2}}"\n                required\n                auto-validate\n                error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n              ></paper-input>\n            </template>\n          </div>\n          <div class="card-actions">\n            <template is="dom-if" if="[[_loading]]">\n              <div><paper-spinner active></paper-spinner></div>\n            </template>\n            <template is="dom-if" if="[[!_loading]]">\n              <mwc-button on-click="_changePassword"\n                >[[localize(\'ui.panel.profile.change_password.submit\')]]</mwc-button\n              >\n            </template>\n          </div>\n        </ha-card>\n      </div>\n    ',
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
         * @appliesMixin LocalizeMixin
         */

        var HaChangePasswordCard =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaChangePasswordCard, _LocalizeMixin);

            function HaChangePasswordCard() {
              _classCallCheck(this, HaChangePasswordCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaChangePasswordCard).apply(this, arguments)
              );
            }

            _createClass(
              HaChangePasswordCard,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaChangePasswordCard.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.addEventListener("keypress", function(ev) {
                      _this._statusMsg = null;

                      if (ev.keyCode === 13) {
                        _this._changePassword();
                      }
                    });
                  },
                },
                {
                  key: "_changePassword",
                  value: (function() {
                    var _changePassword2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._statusMsg = null;

                                  if (
                                    !(
                                      !this._currentPassword ||
                                      !this._password1 ||
                                      !this._password2
                                    )
                                  ) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 3:
                                  if (!(this._password1 !== this._password2)) {
                                    _context.next = 6;
                                    break;
                                  }

                                  this._errorMsg =
                                    "New password confirmation doesn't match";
                                  return _context.abrupt("return");

                                case 6:
                                  if (
                                    !(this._currentPassword === this._password1)
                                  ) {
                                    _context.next = 9;
                                    break;
                                  }

                                  this._errorMsg =
                                    "New password must be different than current password";
                                  return _context.abrupt("return");

                                case 9:
                                  this._loading = true;
                                  this._errorMsg = null;
                                  _context.prev = 11;
                                  _context.next = 14;
                                  return this.hass.callWS({
                                    type:
                                      "config/auth_provider/homeassistant/change_password",
                                    current_password: this._currentPassword,
                                    new_password: this._password1,
                                  });

                                case 14:
                                  this.setProperties({
                                    _statusMsg: "Password changed successfully",
                                    _currentPassword: null,
                                    _password1: null,
                                    _password2: null,
                                  });
                                  _context.next = 20;
                                  break;

                                case 17:
                                  _context.prev = 17;
                                  _context.t0 = _context["catch"](11);
                                  this._errorMsg = _context.t0.message;

                                case 20:
                                  this._loading = false;

                                case 21:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[11, 17]]
                        );
                      })
                    );

                    function _changePassword() {
                      return _changePassword2.apply(this, arguments);
                    }

                    return _changePassword;
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
                      _loading: {
                        type: Boolean,
                        value: false,
                      },
                      // Error message when can't talk to server etc
                      _statusMsg: String,
                      _errorMsg: String,
                      _currentPassword: String,
                      _password1: String,
                      _password2: String,
                    };
                  },
                },
              ]
            );

            return HaChangePasswordCard;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-change-password-card", HaChangePasswordCard);

        /***/
      },

    /***/ "./src/panels/profile/ha-long-lived-access-tokens-card.js":
      /*!****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-tokens-card.js ***!
  \****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js"
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
            '\n      <style include="ha-style">\n        .card-content {\n          margin: -1em 0;\n        }\n        a {\n          color: var(--primary-color);\n        }\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n      </style>\n      <ha-card\n        header="[[localize(\'ui.panel.profile.long_lived_access_tokens.header\')]]"\n      >\n        <div class="card-content">\n          <p>\n            [[localize(\'ui.panel.profile.long_lived_access_tokens.description\')]]\n            <a\n              href="https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests"\n              target="_blank"\n            >\n              [[localize(\'ui.panel.profile.long_lived_access_tokens.learn_auth_requests\')]]\n            </a>\n          </p>\n          <template is="dom-if" if="[[!_tokens.length]]">\n            <p>\n              [[localize(\'ui.panel.profile.long_lived_access_tokens.empty_state\')]]\n            </p>\n          </template>\n        </div>\n        <template is="dom-repeat" items="[[_tokens]]">\n          <ha-settings-row two-line>\n            <span slot="heading">[[item.client_name]]</span>\n            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>\n            <paper-icon-button\n              icon="hass:delete"\n              on-click="_handleDelete"\n            ></paper-icon-button>\n          </ha-settings-row>\n        </template>\n        <div class="card-actions">\n          <mwc-button on-click="_handleCreate">\n            [[localize(\'ui.panel.profile.long_lived_access_tokens.create\')]]\n          </mwc-button>\n        </div>\n      </ha-card>\n    ',
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
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var HaLongLivedTokens =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaLongLivedTokens, _LocalizeMixin);

            function HaLongLivedTokens() {
              _classCallCheck(this, HaLongLivedTokens);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaLongLivedTokens).apply(this, arguments)
              );
            }

            _createClass(
              HaLongLivedTokens,
              [
                {
                  key: "_computeTokens",
                  value: function _computeTokens(refreshTokens) {
                    return refreshTokens
                      .filter(function(tkn) {
                        return tkn.type === "long_lived_access_token";
                      })
                      .reverse();
                  },
                },
                {
                  key: "_formatTitle",
                  value: function _formatTitle(name) {
                    return this.localize(
                      "ui.panel.profile.long_lived_access_tokens.token_title",
                      "name",
                      name
                    );
                  },
                },
                {
                  key: "_formatCreatedAt",
                  value: function _formatCreatedAt(created) {
                    return this.localize(
                      "ui.panel.profile.long_lived_access_tokens.created_at",
                      "date",
                      Object(
                        _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(new Date(created), this.hass.language)
                    );
                  },
                },
                {
                  key: "_handleCreate",
                  value: (function() {
                    var _handleCreate2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var name, token;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  name = prompt(
                                    this.localize(
                                      "ui.panel.profile.long_lived_access_tokens.prompt_name"
                                    )
                                  );

                                  if (name) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 3:
                                  _context.prev = 3;
                                  _context.next = 6;
                                  return this.hass.callWS({
                                    type: "auth/long_lived_access_token",
                                    lifespan: 3650,
                                    client_name: name,
                                  });

                                case 6:
                                  token = _context.sent;
                                  prompt(
                                    this.localize(
                                      "ui.panel.profile.long_lived_access_tokens.prompt_copy_token"
                                    ),
                                    token
                                  );
                                  this.fire("hass-refresh-tokens");
                                  _context.next = 15;
                                  break;

                                case 11:
                                  _context.prev = 11;
                                  _context.t0 = _context["catch"](3);
                                  // eslint-disable-next-line
                                  console.error(_context.t0);
                                  alert(
                                    this.localize(
                                      "ui.panel.profile.long_lived_access_tokens.create_failed"
                                    )
                                  );

                                case 15:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[3, 11]]
                        );
                      })
                    );

                    function _handleCreate() {
                      return _handleCreate2.apply(this, arguments);
                    }

                    return _handleCreate;
                  })(),
                },
                {
                  key: "_handleDelete",
                  value: (function() {
                    var _handleDelete2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      this.localize(
                                        "ui.panel.profile.long_lived_access_tokens.confirm_delete",
                                        "name",
                                        ev.model.item.client_name
                                      )
                                    )
                                  ) {
                                    _context2.next = 2;
                                    break;
                                  }

                                  return _context2.abrupt("return");

                                case 2:
                                  _context2.prev = 2;
                                  _context2.next = 5;
                                  return this.hass.callWS({
                                    type: "auth/delete_refresh_token",
                                    refresh_token_id: ev.model.item.id,
                                  });

                                case 5:
                                  this.fire("hass-refresh-tokens");
                                  _context2.next = 12;
                                  break;

                                case 8:
                                  _context2.prev = 8;
                                  _context2.t0 = _context2["catch"](2);
                                  // eslint-disable-next-line
                                  console.error(_context2.t0);
                                  alert(
                                    this.localize(
                                      "ui.panel.profile.long_lived_access_tokens.delete_failed"
                                    )
                                  );

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

                    function _handleDelete(_x) {
                      return _handleDelete2.apply(this, arguments);
                    }

                    return _handleDelete;
                  })(),
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
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
                      refreshTokens: Array,
                      _tokens: {
                        type: Array,
                        computed: "_computeTokens(refreshTokens)",
                      },
                    };
                  },
                },
              ]
            );

            return HaLongLivedTokens;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define(
          "ha-long-lived-access-tokens-card",
          HaLongLivedTokens
        );

        /***/
      },

    /***/ "./src/panels/profile/ha-mfa-modules-card.js":
      /*!***************************************************!*\
  !*** ./src/panels/profile/ha-mfa-modules-card.js ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex ha-style">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        mwc-button {\n          margin-right: -0.57em;\n        }\n      </style>\n      <ha-card header="[[localize(\'ui.panel.profile.mfa.header\')]]">\n        <template is="dom-repeat" items="[[mfaModules]]" as="module">\n          <paper-item>\n            <paper-item-body two-line="">\n              <div>[[module.name]]</div>\n              <div secondary="">[[module.id]]</div>\n            </paper-item-body>\n            <template is="dom-if" if="[[module.enabled]]">\n              <mwc-button on-click="_disable"\n                >[[localize(\'ui.panel.profile.mfa.disable\')]]</mwc-button\n              >\n            </template>\n            <template is="dom-if" if="[[!module.enabled]]">\n              <mwc-button on-click="_enable"\n                >[[localize(\'ui.panel.profile.mfa.enable\')]]</mwc-button\n              >\n            </template>\n          </paper-item>\n        </template>\n      </ha-card>\n    ',
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
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var HaMfaModulesCard =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaMfaModulesCard, _EventsMixin);

            function HaMfaModulesCard() {
              _classCallCheck(this, HaMfaModulesCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaMfaModulesCard).apply(this, arguments)
              );
            }

            _createClass(
              HaMfaModulesCard,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaMfaModulesCard.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    if (!registeredDialog) {
                      registeredDialog = true;
                      this.fire("register-dialog", {
                        dialogShowEvent: "show-mfa-module-setup-flow",
                        dialogTag: "ha-mfa-module-setup-flow",
                        dialogImport: function dialogImport() {
                          return Promise.all(
                            /*! import() | ha-mfa-module-setup-flow */ [
                              __webpack_require__.e(8),
                              __webpack_require__.e(
                                "vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"
                              ),
                              __webpack_require__.e(
                                "dialog-config-flow~ha-mfa-module-setup-flow"
                              ),
                              __webpack_require__.e("ha-mfa-module-setup-flow"),
                            ]
                          ).then(
                            __webpack_require__.bind(
                              null,
                              /*! ./ha-mfa-module-setup-flow */ "./src/panels/profile/ha-mfa-module-setup-flow.js"
                            )
                          );
                        },
                      });
                    }
                  },
                },
                {
                  key: "_enable",
                  value: function _enable(ev) {
                    var _this = this;

                    this.fire("show-mfa-module-setup-flow", {
                      hass: this.hass,
                      mfaModuleId: ev.model.module.id,
                      dialogClosedCallback: function dialogClosedCallback() {
                        return _this._refreshCurrentUser();
                      },
                    });
                  },
                },
                {
                  key: "_disable",
                  value: function _disable(ev) {
                    var _this2 = this;

                    if (
                      !confirm(
                        this.localize(
                          "ui.panel.profile.mfa.confirm_disable",
                          "name",
                          ev.model.module.name
                        )
                      )
                    ) {
                      return;
                    }

                    var mfaModuleId = ev.model.module.id;
                    this.hass
                      .callWS({
                        type: "auth/depose_mfa",
                        mfa_module_id: mfaModuleId,
                      })
                      .then(function() {
                        _this2._refreshCurrentUser();
                      });
                  },
                },
                {
                  key: "_refreshCurrentUser",
                  value: function _refreshCurrentUser() {
                    this.fire("hass-refresh-current-user");
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
                      _loading: {
                        type: Boolean,
                        value: false,
                      },
                      // Error message when can't talk to server etc
                      _statusMsg: String,
                      _errorMsg: String,
                      mfaModules: Array,
                    };
                  },
                },
              ]
            );

            return HaMfaModulesCard;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-mfa-modules-card", HaMfaModulesCard);

        /***/
      },

    /***/ "./src/panels/profile/ha-panel-profile.js":
      /*!************************************************!*\
  !*** ./src/panels/profile/ha-panel-profile.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js"
        );
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../data/frontend */ "./src/data/frontend.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _ha_change_password_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./ha-change-password-card */ "./src/panels/profile/ha-change-password-card.js"
        );
        /* harmony import */ var _ha_mfa_modules_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./ha-mfa-modules-card */ "./src/panels/profile/ha-mfa-modules-card.js"
        );
        /* harmony import */ var _ha_advanced_mode_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./ha-advanced-mode-card */ "./src/panels/profile/ha-advanced-mode-card.ts"
        );
        /* harmony import */ var _ha_refresh_tokens_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./ha-refresh-tokens-card */ "./src/panels/profile/ha-refresh-tokens-card.js"
        );
        /* harmony import */ var _ha_long_lived_access_tokens_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./ha-long-lived-access-tokens-card */ "./src/panels/profile/ha-long-lived-access-tokens-card.js"
        );
        /* harmony import */ var _ha_pick_language_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./ha-pick-language-row */ "./src/panels/profile/ha-pick-language-row.js"
        );
        /* harmony import */ var _ha_pick_theme_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./ha-pick-theme-row */ "./src/panels/profile/ha-pick-theme-row.js"
        );
        /* harmony import */ var _ha_push_notifications_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./ha-push-notifications-row */ "./src/panels/profile/ha-push-notifications-row.js"
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
            '\n      <style include="ha-style">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .content > * {\n          display: block;\n          margin: 24px 0;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.profile\')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class="content">\n          <ha-card header="[[hass.user.name]]">\n            <div class="card-content">\n              [[localize(\'ui.panel.profile.current_user\', \'fullName\',\n              hass.user.name)]]\n              <template is="dom-if" if="[[hass.user.is_owner]]"\n                >[[localize(\'ui.panel.profile.is_owner\')]]</template\n              >\n            </div>\n\n            <hello-world hass="[[hass]]"></hello-world>\n\n            <ha-pick-language-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-pick-language-row>\n            <ha-pick-theme-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-pick-theme-row>\n            <ha-push-notifications-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-push-notifications-row>\n\n            <div class="card-actions">\n              <mwc-button class="warning" on-click="_handleLogOut"\n                >[[localize(\'ui.panel.profile.logout\')]]</mwc-button\n              >\n            </div>\n          </ha-card>\n\n          <template is="dom-if" if="[[_canChangePassword(hass.user)]]">\n            <ha-change-password-card hass="[[hass]]"></ha-change-password-card>\n          </template>\n\n          <ha-mfa-modules-card\n            hass="[[hass]]"\n            mfa-modules="[[hass.user.mfa_modules]]"\n          ></ha-mfa-modules-card>\n\n          <template is="dom-if" if="[[_isAdmin(hass.user)]]">\n            <ha-advanced-mode-card\n              hass="[[hass]]"\n              core-user-data="[[_coreUserData]]"\n            ></ha-advanced-mode-card>\n          </template>\n\n          <ha-refresh-tokens-card\n            hass="[[hass]]"\n            refresh-tokens="[[_refreshTokens]]"\n            on-hass-refresh-tokens="_refreshRefreshTokens"\n          ></ha-refresh-tokens-card>\n\n          <ha-long-lived-access-tokens-card\n            hass="[[hass]]"\n            refresh-tokens="[[_refreshTokens]]"\n            on-hass-refresh-tokens="_refreshRefreshTokens"\n          ></ha-long-lived-access-tokens-card>\n        </div>\n      </app-header-layout>\n    ',
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
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var HaPanelProfile =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaPanelProfile, _EventsMixin);

            function HaPanelProfile() {
              _classCallCheck(this, HaPanelProfile);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPanelProfile).apply(this, arguments)
              );
            }

            _createClass(
              HaPanelProfile,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaPanelProfile.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._refreshRefreshTokens();

                    this._unsubCoreData = Object(
                      _data_frontend__WEBPACK_IMPORTED_MODULE_11__[
                        "getOptimisticFrontendUserDataCollection"
                      ]
                    )(this.hass.connection, "core").subscribe(function(
                      coreUserData
                    ) {
                      _this._coreUserData = coreUserData;
                    });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaPanelProfile.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubCoreData) {
                      this._unsubCoreData();

                      this._unsubCoreData = undefined;
                    }
                  },
                },
                {
                  key: "_refreshRefreshTokens",
                  value: (function() {
                    var _refreshRefreshTokens2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return this.hass.callWS({
                                    type: "auth/refresh_tokens",
                                  });

                                case 2:
                                  this._refreshTokens = _context.sent;

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

                    function _refreshRefreshTokens() {
                      return _refreshRefreshTokens2.apply(this, arguments);
                    }

                    return _refreshRefreshTokens;
                  })(),
                },
                {
                  key: "_handleLogOut",
                  value: function _handleLogOut() {
                    this.fire("hass-logout");
                  },
                },
                {
                  key: "_canChangePassword",
                  value: function _canChangePassword(user) {
                    return user.credentials.some(function(cred) {
                      return cred.auth_provider_type === "homeassistant";
                    });
                  },
                },
                {
                  key: "_isAdmin",
                  value: function _isAdmin(user) {
                    return user.is_admin;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
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
                      narrow: Boolean,
                      _refreshTokens: Array,
                      _coreUserData: Object,
                    };
                  },
                },
              ]
            );

            return HaPanelProfile;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-panel-profile", HaPanelProfile);

        /***/
      },

    /***/ "./src/panels/profile/ha-pick-language-row.js":
      /*!****************************************************!*\
  !*** ./src/panels/profile/ha-pick-language-row.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js"
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
            '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          direction: ltr;\n        }\n        paper-item[is-rtl] {\n          direction: rtl;\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.language.header\')]]</span\n        >\n        <span slot="description">\n          <a\n            href="https://developers.home-assistant.io/docs/en/internationalization_translation.html"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.language.link_promo\')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label="[[localize(\'ui.panel.profile.language.dropdown_label\')]]"\n          dynamic-align=""\n        >\n          <paper-listbox\n            slot="dropdown-content"\n            attr-for-selected="language-tag"\n            selected="{{languageSelection}}"\n          >\n            <template is="dom-repeat" items="[[languages]]">\n              <paper-item language-tag$="[[item.key]]" is-rtl$="[[item.isRTL]]">\n                [[item.nativeName]]\n              </paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    ',
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
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        var HaPickLanguageRow =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaPickLanguageRow, _LocalizeMixin);

            function HaPickLanguageRow() {
              _classCallCheck(this, HaPickLanguageRow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPickLanguageRow).apply(this, arguments)
              );
            }

            _createClass(
              HaPickLanguageRow,
              [
                {
                  key: "computeLanguages",
                  value: function computeLanguages(hass) {
                    if (!hass || !hass.translationMetadata) {
                      return [];
                    }

                    var translations = hass.translationMetadata.translations;
                    return Object.keys(translations).map(function(key) {
                      return Object.assign(
                        {
                          key: key,
                        },
                        translations[key]
                      );
                    });
                  },
                },
                {
                  key: "setLanguageSelection",
                  value: function setLanguageSelection(language) {
                    this.languageSelection = language;
                  },
                },
                {
                  key: "languageSelectionChanged",
                  value: function languageSelectionChanged(newVal) {
                    // Only fire event if language was changed. This prevents select updates when
                    // responding to hass changes.
                    if (newVal !== this.hass.language) {
                      this.fire("hass-language-select", {
                        language: newVal,
                      });
                    }
                  },
                },
                {
                  key: "ready",
                  value: function ready() {
                    _get(
                      _getPrototypeOf(HaPickLanguageRow.prototype),
                      "ready",
                      this
                    ).call(this);

                    if (this.hass && this.hass.language) {
                      this.setLanguageSelection(this.hass.language);
                    }
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
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
                      narrow: Boolean,
                      languageSelection: {
                        type: String,
                        observer: "languageSelectionChanged",
                      },
                      languages: {
                        type: Array,
                        computed: "computeLanguages(hass)",
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["setLanguageSelection(language)"];
                  },
                },
              ]
            );

            return HaPickLanguageRow;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-pick-language-row", HaPickLanguageRow);

        /***/
      },

    /***/ "./src/panels/profile/ha-pick-theme-row.js":
      /*!*************************************************!*\
  !*** ./src/panels/profile/ha-pick-theme-row.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.themes.header\')]]</span\n        >\n        <span slot="description">\n          <template is="dom-if" if="[[!_hasThemes]]">\n            [[localize(\'ui.panel.profile.themes.error_no_theme\')]]\n          </template>\n          <a\n            href="https://www.home-assistant.io/components/frontend/#defining-themes"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.themes.link_promo\')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label="[[localize(\'ui.panel.profile.themes.dropdown_label\')]]"\n          dynamic-align\n          disabled="[[!_hasThemes]]"\n        >\n          <paper-listbox slot="dropdown-content" selected="{{selectedTheme}}">\n            <template is="dom-repeat" items="[[themes]]" as="theme">\n              <paper-item>[[theme]]</paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    ',
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
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        var HaPickThemeRow =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaPickThemeRow, _LocalizeMixin);

            function HaPickThemeRow() {
              _classCallCheck(this, HaPickThemeRow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPickThemeRow).apply(this, arguments)
              );
            }

            _createClass(
              HaPickThemeRow,
              [
                {
                  key: "_compHasThemes",
                  value: function _compHasThemes(hass) {
                    return (
                      hass.themes &&
                      hass.themes.themes &&
                      Object.keys(hass.themes.themes).length
                    );
                  },
                },
                {
                  key: "ready",
                  value: function ready() {
                    _get(
                      _getPrototypeOf(HaPickThemeRow.prototype),
                      "ready",
                      this
                    ).call(this);

                    if (
                      this.hass.selectedTheme &&
                      this.themes.indexOf(this.hass.selectedTheme) > 0
                    ) {
                      this.selectedTheme = this.themes.indexOf(
                        this.hass.selectedTheme
                      );
                    } else if (!this.hass.selectedTheme) {
                      this.selectedTheme = 0;
                    }
                  },
                },
                {
                  key: "_computeThemes",
                  value: function _computeThemes(hass) {
                    if (!hass) return [];
                    return ["Backend-selected", "default"].concat(
                      Object.keys(hass.themes.themes).sort()
                    );
                  },
                },
                {
                  key: "selectionChanged",
                  value: function selectionChanged(hass, selection) {
                    if (selection > 0 && selection < this.themes.length) {
                      if (hass.selectedTheme !== this.themes[selection]) {
                        this.fire("settheme", this.themes[selection]);
                      }
                    } else if (selection === 0 && hass.selectedTheme !== "") {
                      this.fire("settheme", "");
                    }
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
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
                      narrow: Boolean,
                      _hasThemes: {
                        type: Boolean,
                        computed: "_compHasThemes(hass)",
                      },
                      themes: {
                        type: Array,
                        computed: "_computeThemes(hass)",
                      },
                      selectedTheme: {
                        type: Number,
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["selectionChanged(hass, selectedTheme)"];
                  },
                },
              ]
            );

            return HaPickThemeRow;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-pick-theme-row", HaPickThemeRow);

        /***/
      },

    /***/ "./src/panels/profile/ha-push-notifications-row.js":
      /*!*********************************************************!*\
  !*** ./src/panels/profile/ha-push-notifications-row.js ***!
  \*********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_label_iron_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-label/iron-label */ "./node_modules/@polymer/iron-label/iron-label.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/ha-push-notifications-toggle */ "./src/components/ha-push-notifications-toggle.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js"
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
            '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.push_notifications.header\')]]</span\n        >\n        <span slot="description">\n          [[_description(_platformLoaded, _pushSupported)]]\n          <a\n            href="https://www.home-assistant.io/components/notify.html5/"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.push_notifications.link_promo\')]]</a\n          >\n        </span>\n        <ha-push-notifications-toggle\n          hass="[[hass]]"\n          disabled="[[_error]]"\n        ></ha-push-notifications-toggle>\n      </ha-settings-row>\n    ',
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

        /*
         * @appliesMixin LocalizeMixin
         */

        var HaPushNotificationsRow =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaPushNotificationsRow, _LocalizeMixin);

            function HaPushNotificationsRow() {
              _classCallCheck(this, HaPushNotificationsRow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPushNotificationsRow).apply(this, arguments)
              );
            }

            _createClass(
              HaPushNotificationsRow,
              [
                {
                  key: "_compPlatformLoaded",
                  value: function _compPlatformLoaded(hass) {
                    return Object(
                      _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__[
                        "default"
                      ]
                    )(hass, "notify.html5");
                  },
                },
                {
                  key: "_compError",
                  value: function _compError(platformLoaded, pushSupported_) {
                    return !platformLoaded || !pushSupported_;
                  },
                },
                {
                  key: "_description",
                  value: function _description(platformLoaded, pushSupported_) {
                    var key;

                    if (!pushSupported_) {
                      key = "error_use_https";
                    } else if (!platformLoaded) {
                      key = "error_load_platform";
                    } else {
                      key = "description";
                    }

                    return this.localize(
                      "ui.panel.profile.push_notifications.".concat(key)
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
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
                      narrow: Boolean,
                      _platformLoaded: {
                        type: Boolean,
                        computed: "_compPlatformLoaded(hass)",
                      },
                      _pushSupported: {
                        type: Boolean,
                        value:
                          _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__[
                            "pushSupported"
                          ],
                      },
                      _error: {
                        type: Boolean,
                        computed: "_compError(_platformLoaded, _pushSupported)",
                      },
                    };
                  },
                },
              ]
            );

            return HaPushNotificationsRow;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "ha-push-notifications-row",
          HaPushNotificationsRow
        );

        /***/
      },

    /***/ "./src/panels/profile/ha-refresh-tokens-card.js":
      /*!******************************************************!*\
  !*** ./src/panels/profile/ha-refresh-tokens-card.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js"
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
            '\n      <style>\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n        paper-icon-button[disabled] {\n          color: var(--disabled-text-color);\n        }\n      </style>\n      <ha-card header="[[localize(\'ui.panel.profile.refresh_tokens.header\')]]">\n        <div class="card-content">\n          [[localize(\'ui.panel.profile.refresh_tokens.description\')]]\n        </div>\n        <template is="dom-repeat" items="[[_computeTokens(refreshTokens)]]">\n          <ha-settings-row three-line>\n            <span slot="heading">[[_formatTitle(item.client_id)]]</span>\n            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>\n            <div slot="description">[[_formatLastUsed(item)]]</div>\n            <div>\n              <template is="dom-if" if="[[item.is_current]]">\n                <paper-tooltip position="left"\n                  >[[localize(\'ui.panel.profile.refresh_tokens.current_token_tooltip\')]]</paper-tooltip\n                >\n              </template>\n              <paper-icon-button\n                icon="hass:delete"\n                on-click="_handleDelete"\n                disabled="[[item.is_current]]"\n              ></paper-icon-button>\n            </div>\n          </ha-settings-row>\n        </template>\n      </ha-card>\n    ',
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
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var HaRefreshTokens =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaRefreshTokens, _LocalizeMixin);

            function HaRefreshTokens() {
              _classCallCheck(this, HaRefreshTokens);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaRefreshTokens).apply(this, arguments)
              );
            }

            _createClass(
              HaRefreshTokens,
              [
                {
                  key: "_computeTokens",
                  value: function _computeTokens(refreshTokens) {
                    return refreshTokens
                      .filter(function(tkn) {
                        return tkn.type === "normal";
                      })
                      .reverse();
                  },
                },
                {
                  key: "_formatTitle",
                  value: function _formatTitle(clientId) {
                    return this.localize(
                      "ui.panel.profile.refresh_tokens.token_title",
                      "clientId",
                      clientId
                    );
                  },
                },
                {
                  key: "_formatCreatedAt",
                  value: function _formatCreatedAt(created) {
                    return this.localize(
                      "ui.panel.profile.refresh_tokens.created_at",
                      "date",
                      Object(
                        _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ]
                      )(new Date(created), this.hass.language)
                    );
                  },
                },
                {
                  key: "_formatLastUsed",
                  value: function _formatLastUsed(item) {
                    return item.last_used_at
                      ? this.localize(
                          "ui.panel.profile.refresh_tokens.last_used",
                          "date",
                          Object(
                            _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__[
                              "default"
                            ]
                          )(new Date(item.last_used_at), this.hass.language),
                          "location",
                          item.last_used_ip
                        )
                      : this.localize(
                          "ui.panel.profile.refresh_tokens.not_used"
                        );
                  },
                },
                {
                  key: "_handleDelete",
                  value: (function() {
                    var _handleDelete2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      this.localize(
                                        "ui.panel.profile.refresh_tokens.confirm_delete",
                                        "name",
                                        ev.model.item.client_id
                                      )
                                    )
                                  ) {
                                    _context.next = 2;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 2:
                                  _context.prev = 2;
                                  _context.next = 5;
                                  return this.hass.callWS({
                                    type: "auth/delete_refresh_token",
                                    refresh_token_id: ev.model.item.id,
                                  });

                                case 5:
                                  this.fire("hass-refresh-tokens");
                                  _context.next = 12;
                                  break;

                                case 8:
                                  _context.prev = 8;
                                  _context.t0 = _context["catch"](2);
                                  // eslint-disable-next-line
                                  console.error(_context.t0);
                                  alert(
                                    this.localize(
                                      "ui.panel.profile.refresh_tokens.delete_failed"
                                    )
                                  );

                                case 12:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[2, 8]]
                        );
                      })
                    );

                    function _handleDelete(_x) {
                      return _handleDelete2.apply(this, arguments);
                    }

                    return _handleDelete;
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
                      refreshTokens: Array,
                    };
                  },
                },
              ]
            );

            return HaRefreshTokens;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-refresh-tokens-card", HaRefreshTokens);

        /***/
      },

    /***/ "./src/panels/profile/ha-settings-row.js":
      /*!***********************************************!*\
  !*** ./src/panels/profile/ha-settings-row.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
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
            '\n      <style>\n        :host {\n          display: flex;\n          padding: 0 16px;\n          align-content: normal;\n          align-self: auto;\n          align-items: center;\n        }\n        :host([narrow]) {\n          align-items: normal;\n          flex-direction: column;\n          border-top: 1px solid var(--divider-color);\n          padding-bottom: 8px;\n        }\n        paper-item-body {\n          padding-right: 16px;\n        }\n      </style>\n      <paper-item-body two-line$="[[!threeLine]]" three-line$="[[threeLine]]">\n        <slot name="heading"></slot>\n        <div secondary><slot name="description"></slot></div>\n      </paper-item-body>\n      <slot></slot>\n    ',
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

        var HaSettingsRow =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaSettingsRow, _PolymerElement);

            function HaSettingsRow() {
              _classCallCheck(this, HaSettingsRow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaSettingsRow).apply(this, arguments)
              );
            }

            _createClass(HaSettingsRow, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                      "html"
                    ]
                  )(_templateObject());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    narrow: {
                      type: Boolean,
                      reflectToAttribute: true,
                    },
                    threeLine: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            return HaSettingsRow;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-settings-row", HaSettingsRow);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtcHJvZmlsZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9ub3RpZnlfaHRtbDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtYWR2YW5jZWQtbW9kZS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1jaGFuZ2UtcGFzc3dvcmQtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLW1mYS1tb2R1bGVzLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBhbmVsLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBpY2stbGFuZ3VhZ2Utcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1waWNrLXRoZW1lLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcmVmcmVzaC10b2tlbnMtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtc2V0dGluZ3Mtcm93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIFJldHVybiBpZiBhIGNvbXBvbmVudCBpcyBsb2FkZWQuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NvbXBvbmVudExvYWRlZChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29tcG9uZW50OiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFzcyAmJiBoYXNzLmNvbmZpZy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTE7XG59XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0QXBwS2V5IH0gZnJvbSBcIi4uL2RhdGEvbm90aWZ5X2h0bWw1XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuZXhwb3J0IGNvbnN0IHB1c2hTdXBwb3J0ZWQgPVxuICBcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IgJiZcbiAgXCJQdXNoTWFuYWdlclwiIGluIHdpbmRvdyAmJlxuICAoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgfHxcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIiB8fFxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcIjEyNy4wLjAuMVwiKTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFQdXNoTm90aWZpY2F0aW9uc1RvZ2dsZSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICBkaXNhYmxlZD1cIltbX2NvbXBEaXNhYmxlZChkaXNhYmxlZCwgbG9hZGluZyldXVwiXG4gICAgICAgIGNoZWNrZWQ9XCJ7e3B1c2hDaGVja2VkfX1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJoYW5kbGVQdXNoQ2hhbmdlXCJcbiAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogeyB0eXBlOiBPYmplY3QsIHZhbHVlOiBudWxsIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcHVzaENoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cgJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiLFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwdXNoU3VwcG9ydGVkKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgICBpZiAoIXJlZy5wdXNoTWFuYWdlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hDaGVja2VkID0gISFzdWJzY3JpcHRpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IHNldCBsb2FkaW5nIHRvIGBmYWxzZWAgc28gd2UgcmVtYWluIGRpc2FibGVkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHVzaENoYW5nZShldmVudCkge1xuICAgIC8vIFNvbWVob3cgdGhpcyBpcyB0cmlnZ2VyZWQgb24gU2FmYXJpIG9uIHBhZ2UgbG9hZCBjYXVzaW5nXG4gICAgLy8gaXQgdG8gZ2V0IGludG8gYSBsb29wIGFuZCBjcmFzaCB0aGUgcGFnZS5cbiAgICBpZiAoIXB1c2hTdXBwb3J0ZWQpIHJldHVybjtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICBsZXQgc3ViO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBicm93c2VyTmFtZTtcbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIikgPiAtMSkge1xuICAgICAgICBicm93c2VyTmFtZSA9IFwiZmlyZWZveFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJvd3Nlck5hbWUgPSBcImNocm9tZVwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiV2hhdCBzaG91bGQgdGhpcyBkZXZpY2UgYmUgY2FsbGVkID9cIik7XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHVzaENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG4gICAgICB0cnkge1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleSA9IGF3YWl0IGdldEFwcEtleSh0aGlzLmhhc3MpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwbGljYXRpb25TZXJ2ZXJLZXkpIHtcbiAgICAgICAgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YiA9IGF3YWl0IHJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoeyB1c2VyVmlzaWJsZU9ubHk6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcIm5vdGlmeS5odG1sNVwiLCB7XG4gICAgICAgIHN1YnNjcmlwdGlvbjogc3ViLFxuICAgICAgICBicm93c2VyOiBicm93c2VyTmFtZSxcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5tZXNzYWdlIHx8IFwiTm90aWZpY2F0aW9uIHJlZ2lzdHJhdGlvbiBmYWlsZWQuXCI7XG4gICAgICBpZiAoc3ViKSB7XG4gICAgICAgIGF3YWl0IHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgdGhpcy5maXJlKFwiaGFzcy1ub3RpZmljYXRpb25cIiwgeyBtZXNzYWdlIH0pO1xuICAgICAgdGhpcy5wdXNoQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICBpZiAoIXN1YikgcmV0dXJuO1xuXG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBcIm5vdGlmeS5odG1sNVwiLCB7IHN1YnNjcmlwdGlvbjogc3ViIH0pO1xuICAgICAgYXdhaXQgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgZXJyLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdW5zdWJzY3JpYmluZyBmb3IgcHVzaCBub3RpZmljYXRpb25zLlwiO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bnN1YiBwdXNoXCIsIGVycik7XG5cbiAgICAgIHRoaXMuZmlyZShcImhhc3Mtbm90aWZpY2F0aW9uXCIsIHsgbWVzc2FnZSB9KTtcbiAgICAgIHRoaXMucHVzaENoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wRGlzYWJsZWQoZGlzYWJsZWQsIGxvYWRpbmcpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgbG9hZGluZztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZVwiLFxuICBIYVB1c2hOb3RpZmljYXRpb25zVG9nZ2xlXG4pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIGNvbnN0IHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xuICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZykucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG5cbiAgY29uc3QgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFwcEtleSA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGhhc3MuY2FsbFdTPHN0cmluZz4oe1xuICAgIHR5cGU6IFwibm90aWZ5L2h0bWw1L2FwcGtleVwiLFxuICB9KTtcbiAgcmV0dXJuIHJlcyA/IHVybEJhc2U2NFRvVWludDhBcnJheShyZXMpIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDb3JlRnJvbnRlbmRVc2VyRGF0YSxcbiAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiKVxuY2xhc3MgQWR2YW5jZWRNb2RlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb3JlVXNlckRhdGE/OiBDb3JlRnJvbnRlbmRVc2VyRGF0YTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QWR2YW5jZWQgbW9kZTwvZGl2PlxuICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuY29yZVVzZXJEYXRhICYmIHRoaXMuY29yZVVzZXJEYXRhLnNob3dBZHZhbmNlZH1cbiAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuY29yZVVzZXJEYXRhID09PSB1bmRlZmluZWR9XG4gICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYWR2YW5jZWRUb2dnbGVkfVxuICAgICAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgSkFWSVMgSG9tZSBoaWRlcyBhZHZhbmNlZCBmZWF0dXJlcyBhbmQgb3B0aW9ucyBieSBkZWZhdWx0LiBZb3UgY2FuXG4gICAgICAgICAgbWFrZSB0aGVzZSBmZWF0dXJlcyBhY2Nlc3NpYmxlIGJ5IGNoZWNraW5nIHRoaXMgdG9nZ2xlLiBUaGlzIGlzIGFcbiAgICAgICAgICB1c2VyLXNwZWNpZmljIHNldHRpbmcgYW5kIGRvZXMgbm90IGltcGFjdCBvdGhlciB1c2VycyB1c2luZyBIb21lXG4gICAgICAgICAgQXNzaXN0YW50LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWR2YW5jZWRUb2dnbGVkKGV2KSB7XG4gICAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uKHRoaXMuaGFzcy5jb25uZWN0aW9uLCBcImNvcmVcIikuc2F2ZSh7XG4gICAgICBzaG93QWR2YW5jZWQ6IGV2LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiOiBBZHZhbmNlZE1vZGVDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDaGFuZ2VQYXNzd29yZENhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yLFxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50UGFzc3dvcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmhlYWRlcicpXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcnJvck1zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3N0YXR1c01zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIj5bW19zdGF0dXNNc2ddXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnJlbnRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuY3VycmVudF9wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnRQYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZVxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jdXJyZW50UGFzc3dvcmRdXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLm5ld19wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19wYXNzd29yZDF9fVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmVycm9yX3JlcXVpcmVkJyldXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmNvbmZpcm1fbmV3X3Bhc3N3b3JkJyldXVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkMn19XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXY+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY2hhbmdlUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmNoYW5nZV9wYXNzd29yZC5zdWJtaXQnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX3N0YXR1c01zZzogU3RyaW5nLFxuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9jdXJyZW50UGFzc3dvcmQ6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDE6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDI6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX3N0YXR1c01zZyA9IG51bGw7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlUGFzc3dvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9jaGFuZ2VQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zdGF0dXNNc2cgPSBudWxsO1xuICAgIGlmICghdGhpcy5fY3VycmVudFBhc3N3b3JkIHx8ICF0aGlzLl9wYXNzd29yZDEgfHwgIXRoaXMuX3Bhc3N3b3JkMikgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkMSAhPT0gdGhpcy5fcGFzc3dvcmQyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2Vzbid0IG1hdGNoXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQxKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIG11c3QgYmUgZGlmZmVyZW50IHRoYW4gY3VycmVudCBwYXNzd29yZFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJjb25maWcvYXV0aF9wcm92aWRlci9ob21lYXNzaXN0YW50L2NoYW5nZV9wYXNzd29yZFwiLFxuICAgICAgICBjdXJyZW50X3Bhc3N3b3JkOiB0aGlzLl9jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgIG5ld19wYXNzd29yZDogdGhpcy5fcGFzc3dvcmQxLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9zdGF0dXNNc2c6IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgX2N1cnJlbnRQYXNzd29yZDogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMTogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMjogbnVsbCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIubWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2hhbmdlLXBhc3N3b3JkLWNhcmRcIiwgSGFDaGFuZ2VQYXNzd29yZENhcmQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUxvbmdMaXZlZFRva2VucyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5oZWFkZXInKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuZGVzY3JpcHRpb24nKV1dXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvZW4vYXV0aF9hcGkuaHRtbCNtYWtpbmctYXV0aGVudGljYXRlZC1yZXF1ZXN0c1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmxlYXJuX2F1dGhfcmVxdWVzdHMnKV1dXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Rva2Vucy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmVtcHR5X3N0YXRlJyldXVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW190b2tlbnNdXVwiPlxuICAgICAgICAgIDxoYS1zZXR0aW5ncy1yb3cgdHdvLWxpbmU+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGluZ1wiPltbaXRlbS5jbGllbnRfbmFtZV1dPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5bW19mb3JtYXRDcmVhdGVkQXQoaXRlbS5jcmVhdGVkX2F0KV1dPC9kaXY+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlRGVsZXRlXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvaGEtc2V0dGluZ3Mtcm93PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfaGFuZGxlQ3JlYXRlXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5jcmVhdGUnKV1dXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByZWZyZXNoVG9rZW5zOiBBcnJheSxcbiAgICAgIF90b2tlbnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZVRva2VucyhyZWZyZXNoVG9rZW5zKSB7XG4gICAgcmV0dXJuIHJlZnJlc2hUb2tlbnNcbiAgICAgIC5maWx0ZXIoKHRrbikgPT4gdGtuLnR5cGUgPT09IFwibG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5cIilcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBfZm9ybWF0VGl0bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy50b2tlbl90aXRsZVwiLFxuICAgICAgXCJuYW1lXCIsXG4gICAgICBuYW1lXG4gICAgKTtcbiAgfVxuXG4gIF9mb3JtYXRDcmVhdGVkQXQoY3JlYXRlZCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5jcmVhdGVkX2F0XCIsXG4gICAgICBcImRhdGVcIixcbiAgICAgIGZvcm1hdERhdGVUaW1lKG5ldyBEYXRlKGNyZWF0ZWQpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIF9oYW5kbGVDcmVhdGUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcbiAgICAgIHRoaXMubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5wcm9tcHRfbmFtZVwiKVxuICAgICk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9sb25nX2xpdmVkX2FjY2Vzc190b2tlblwiLFxuICAgICAgICBsaWZlc3BhbjogMzY1MCxcbiAgICAgICAgY2xpZW50X25hbWU6IG5hbWUsXG4gICAgICB9KTtcbiAgICAgIHByb21wdChcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnByb21wdF9jb3B5X3Rva2VuXCJcbiAgICAgICAgKSxcbiAgICAgICAgdG9rZW5cbiAgICAgICk7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLXJlZnJlc2gtdG9rZW5zXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBhbGVydChcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmNyZWF0ZV9mYWlsZWRcIilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2hhbmRsZURlbGV0ZShldikge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuY29uZmlybV9kZWxldGVcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBldi5tb2RlbC5pdGVtLmNsaWVudF9uYW1lXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImF1dGgvZGVsZXRlX3JlZnJlc2hfdG9rZW5cIixcbiAgICAgICAgcmVmcmVzaF90b2tlbl9pZDogZXYubW9kZWwuaXRlbS5pZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1yZWZyZXNoLXRva2Vuc1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgYWxlcnQoXG4gICAgICAgIHRoaXMubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5kZWxldGVfZmFpbGVkXCIpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sb25nLWxpdmVkLWFjY2Vzcy10b2tlbnMtY2FyZFwiLCBIYUxvbmdMaXZlZFRva2Vucyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhTWZhTW9kdWxlc0NhcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3IsXG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmEuaGVhZGVyJyldXVwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW21mYU1vZHVsZXNdXVwiIGFzPVwibW9kdWxlXCI+XG4gICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXY+W1ttb2R1bGUubmFtZV1dPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PVwiXCI+W1ttb2R1bGUuaWRdXTwvZGl2PlxuICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbbW9kdWxlLmVuYWJsZWRdXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9kaXNhYmxlXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmEuZGlzYWJsZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shbW9kdWxlLmVuYWJsZWRdXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9lbmFibGVcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYS5lbmFibGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX3N0YXR1c01zZzogU3RyaW5nLFxuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIG1mYU1vZHVsZXM6IEFycmF5LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyZShcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LW1mYS1tb2R1bGUtc2V0dXAtZmxvd1wiLFxuICAgICAgICBkaWFsb2dUYWc6IFwiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsXG4gICAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJoYS1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIiAqLyBcIi4vaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2VuYWJsZShldikge1xuICAgIHRoaXMuZmlyZShcInNob3ctbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsIHtcbiAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgIG1mYU1vZHVsZUlkOiBldi5tb2RlbC5tb2R1bGUuaWQsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gdGhpcy5fcmVmcmVzaEN1cnJlbnRVc2VyKCksXG4gICAgfSk7XG4gIH1cblxuICBfZGlzYWJsZShldikge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucHJvZmlsZS5tZmEuY29uZmlybV9kaXNhYmxlXCIsXG4gICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgZXYubW9kZWwubW9kdWxlLm5hbWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1mYU1vZHVsZUlkID0gZXYubW9kZWwubW9kdWxlLmlkO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL2RlcG9zZV9tZmFcIixcbiAgICAgICAgbWZhX21vZHVsZV9pZDogbWZhTW9kdWxlSWQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoQ3VycmVudFVzZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3JlZnJlc2hDdXJyZW50VXNlcigpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLXJlZnJlc2gtY3VycmVudC11c2VyXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLW1mYS1tb2R1bGVzLWNhcmRcIiwgSGFNZmFNb2R1bGVzQ2FyZCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCB7IGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbiB9IGZyb20gXCIuLi8uLi9kYXRhL2Zyb250ZW5kXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9oYS1jaGFuZ2UtcGFzc3dvcmQtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1tZmEtbW9kdWxlcy1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWFkdmFuY2VkLW1vZGUtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1yZWZyZXNoLXRva2Vucy1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWxvbmctbGl2ZWQtYWNjZXNzLXRva2Vucy1jYXJkXCI7XG5cbmltcG9ydCBcIi4vaGEtcGljay1sYW5ndWFnZS1yb3dcIjtcbmltcG9ydCBcIi4vaGEtcGljay10aGVtZS1yb3dcIjtcbmltcG9ydCBcIi4vaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxQcm9maWxlIGV4dGVuZHMgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLnByb2ZpbGUnKV1dPC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1toYXNzLnVzZXIubmFtZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY3VycmVudF91c2VyJywgJ2Z1bGxOYW1lJyxcbiAgICAgICAgICAgICAgaGFzcy51c2VyLm5hbWUpXV1cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc3MudXNlci5pc19vd25lcl1dXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5pc19vd25lcicpXV08L3RlbXBsYXRlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGVsbG8td29ybGQgaGFzcz1cIltbaGFzc11dXCI+PC9oZWxsby13b3JsZD5cblxuICAgICAgICAgICAgPGhhLXBpY2stbGFuZ3VhZ2Utcm93XG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgPjwvaGEtcGljay1sYW5ndWFnZS1yb3c+XG4gICAgICAgICAgICA8aGEtcGljay10aGVtZS1yb3dcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICA+PC9oYS1waWNrLXRoZW1lLXJvdz5cbiAgICAgICAgICAgIDxoYS1wdXNoLW5vdGlmaWNhdGlvbnMtcm93XG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgPjwvaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvdz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBjbGFzcz1cIndhcm5pbmdcIiBvbi1jbGljaz1cIl9oYW5kbGVMb2dPdXRcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxvZ291dCcpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jYW5DaGFuZ2VQYXNzd29yZChoYXNzLnVzZXIpXV1cIj5cbiAgICAgICAgICAgIDxoYS1jaGFuZ2UtcGFzc3dvcmQtY2FyZCBoYXNzPVwiW1toYXNzXV1cIj48L2hhLWNoYW5nZS1wYXNzd29yZC1jYXJkPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8aGEtbWZhLW1vZHVsZXMtY2FyZFxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIG1mYS1tb2R1bGVzPVwiW1toYXNzLnVzZXIubWZhX21vZHVsZXNdXVwiXG4gICAgICAgICAgPjwvaGEtbWZhLW1vZHVsZXMtY2FyZD5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNBZG1pbihoYXNzLnVzZXIpXV1cIj5cbiAgICAgICAgICAgIDxoYS1hZHZhbmNlZC1tb2RlLWNhcmRcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY29yZS11c2VyLWRhdGE9XCJbW19jb3JlVXNlckRhdGFdXVwiXG4gICAgICAgICAgICA+PC9oYS1hZHZhbmNlZC1tb2RlLWNhcmQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDxoYS1yZWZyZXNoLXRva2Vucy1jYXJkXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgcmVmcmVzaC10b2tlbnM9XCJbW19yZWZyZXNoVG9rZW5zXV1cIlxuICAgICAgICAgICAgb24taGFzcy1yZWZyZXNoLXRva2Vucz1cIl9yZWZyZXNoUmVmcmVzaFRva2Vuc1wiXG4gICAgICAgICAgPjwvaGEtcmVmcmVzaC10b2tlbnMtY2FyZD5cblxuICAgICAgICAgIDxoYS1sb25nLWxpdmVkLWFjY2Vzcy10b2tlbnMtY2FyZFxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHJlZnJlc2gtdG9rZW5zPVwiW1tfcmVmcmVzaFRva2Vuc11dXCJcbiAgICAgICAgICAgIG9uLWhhc3MtcmVmcmVzaC10b2tlbnM9XCJfcmVmcmVzaFJlZnJlc2hUb2tlbnNcIlxuICAgICAgICAgID48L2hhLWxvbmctbGl2ZWQtYWNjZXNzLXRva2Vucy1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuICAgICAgX3JlZnJlc2hUb2tlbnM6IEFycmF5LFxuICAgICAgX2NvcmVVc2VyRGF0YTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3JlZnJlc2hSZWZyZXNoVG9rZW5zKCk7XG4gICAgdGhpcy5fdW5zdWJDb3JlRGF0YSA9IGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbihcbiAgICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uLFxuICAgICAgXCJjb3JlXCJcbiAgICApLnN1YnNjcmliZSgoY29yZVVzZXJEYXRhKSA9PiB7XG4gICAgICB0aGlzLl9jb3JlVXNlckRhdGEgPSBjb3JlVXNlckRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkNvcmVEYXRhKSB7XG4gICAgICB0aGlzLl91bnN1YkNvcmVEYXRhKCk7XG4gICAgICB0aGlzLl91bnN1YkNvcmVEYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoUmVmcmVzaFRva2VucygpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW5zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICB0eXBlOiBcImF1dGgvcmVmcmVzaF90b2tlbnNcIixcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVMb2dPdXQoKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1sb2dvdXRcIik7XG4gIH1cblxuICBfY2FuQ2hhbmdlUGFzc3dvcmQodXNlcikge1xuICAgIHJldHVybiB1c2VyLmNyZWRlbnRpYWxzLnNvbWUoXG4gICAgICAoY3JlZCkgPT4gY3JlZC5hdXRoX3Byb3ZpZGVyX3R5cGUgPT09IFwiaG9tZWFzc2lzdGFudFwiXG4gICAgKTtcbiAgfVxuXG4gIF9pc0FkbWluKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5pc19hZG1pbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1wcm9maWxlXCIsIEhhUGFuZWxQcm9maWxlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhUGlja0xhbmd1YWdlUm93IGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW1baXMtcnRsXSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IG5hcnJvdz1cIltbbmFycm93XV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxhbmd1YWdlLmhlYWRlcicpXV08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5ob21lLWFzc2lzdGFudC5pby9kb2NzL2VuL2ludGVybmF0aW9uYWxpemF0aW9uX3RyYW5zbGF0aW9uLmh0bWxcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxhbmd1YWdlLmxpbmtfcHJvbW8nKV1dPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxhbmd1YWdlLmRyb3Bkb3duX2xhYmVsJyldXVwiXG4gICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJsYW5ndWFnZS10YWdcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e2xhbmd1YWdlU2VsZWN0aW9ufX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbGFuZ3VhZ2VzXV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gbGFuZ3VhZ2UtdGFnJD1cIltbaXRlbS5rZXldXVwiIGlzLXJ0bCQ9XCJbW2l0ZW0uaXNSVExdXVwiPlxuICAgICAgICAgICAgICAgIFtbaXRlbS5uYXRpdmVOYW1lXV1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgIDwvaGEtc2V0dGluZ3Mtcm93PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIGxhbmd1YWdlU2VsZWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwibGFuZ3VhZ2VTZWxlY3Rpb25DaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgbGFuZ3VhZ2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlTGFuZ3VhZ2VzKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wic2V0TGFuZ3VhZ2VTZWxlY3Rpb24obGFuZ3VhZ2UpXCJdO1xuICB9XG5cbiAgY29tcHV0ZUxhbmd1YWdlcyhoYXNzKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFoYXNzLnRyYW5zbGF0aW9uTWV0YWRhdGEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gaGFzcy50cmFuc2xhdGlvbk1ldGFkYXRhLnRyYW5zbGF0aW9ucztcbiAgICByZXR1cm4gT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5tYXAoKGtleSkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIC4uLnRyYW5zbGF0aW9uc1trZXldLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNldExhbmd1YWdlU2VsZWN0aW9uKGxhbmd1YWdlKSB7XG4gICAgdGhpcy5sYW5ndWFnZVNlbGVjdGlvbiA9IGxhbmd1YWdlO1xuICB9XG5cbiAgbGFuZ3VhZ2VTZWxlY3Rpb25DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIC8vIE9ubHkgZmlyZSBldmVudCBpZiBsYW5ndWFnZSB3YXMgY2hhbmdlZC4gVGhpcyBwcmV2ZW50cyBzZWxlY3QgdXBkYXRlcyB3aGVuXG4gICAgLy8gcmVzcG9uZGluZyB0byBoYXNzIGNoYW5nZXMuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5oYXNzLmxhbmd1YWdlKSB7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLWxhbmd1YWdlLXNlbGVjdFwiLCB7IGxhbmd1YWdlOiBuZXdWYWwgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICBpZiAodGhpcy5oYXNzICYmIHRoaXMuaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5zZXRMYW5ndWFnZVNlbGVjdGlvbih0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1waWNrLWxhbmd1YWdlLXJvd1wiLCBIYVBpY2tMYW5ndWFnZVJvdyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVBpY2tUaGVtZVJvdyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1zZXR0aW5ncy1yb3cgbmFycm93PVwiW1tuYXJyb3ddXVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGluZ1wiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmhlYWRlcicpXV08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9oYXNUaGVtZXNdXVwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS50aGVtZXMuZXJyb3Jfbm9fdGhlbWUnKV1dXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2NvbXBvbmVudHMvZnJvbnRlbmQvI2RlZmluaW5nLXRoZW1lc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmxpbmtfcHJvbW8nKV1dPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnRoZW1lcy5kcm9wZG93bl9sYWJlbCcpXV1cIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICBkaXNhYmxlZD1cIltbIV9oYXNUaGVtZXNdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tzZWxlY3RlZFRoZW1lfX1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdGhlbWVzXV1cIiBhcz1cInRoZW1lXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbdGhlbWVdXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBfaGFzVGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wSGFzVGhlbWVzKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgdGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRoZW1lcyhoYXNzKVwiLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkVGhlbWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInNlbGVjdGlvbkNoYW5nZWQoaGFzcywgc2VsZWN0ZWRUaGVtZSlcIl07XG4gIH1cblxuICBfY29tcEhhc1RoZW1lcyhoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhhc3MudGhlbWVzICYmXG4gICAgICBoYXNzLnRoZW1lcy50aGVtZXMgJiZcbiAgICAgIE9iamVjdC5rZXlzKGhhc3MudGhlbWVzLnRoZW1lcykubGVuZ3RoXG4gICAgKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUgJiZcbiAgICAgIHRoaXMudGhlbWVzLmluZGV4T2YodGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhpcy50aGVtZXMuaW5kZXhPZih0aGlzLmhhc3Muc2VsZWN0ZWRUaGVtZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUaGVtZXMoaGFzcykge1xuICAgIGlmICghaGFzcykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBbXCJCYWNrZW5kLXNlbGVjdGVkXCIsIFwiZGVmYXVsdFwiXS5jb25jYXQoXG4gICAgICBPYmplY3Qua2V5cyhoYXNzLnRoZW1lcy50aGVtZXMpLnNvcnQoKVxuICAgICk7XG4gIH1cblxuICBzZWxlY3Rpb25DaGFuZ2VkKGhhc3MsIHNlbGVjdGlvbikge1xuICAgIGlmIChzZWxlY3Rpb24gPiAwICYmIHNlbGVjdGlvbiA8IHRoaXMudGhlbWVzLmxlbmd0aCkge1xuICAgICAgaWYgKGhhc3Muc2VsZWN0ZWRUaGVtZSAhPT0gdGhpcy50aGVtZXNbc2VsZWN0aW9uXSkge1xuICAgICAgICB0aGlzLmZpcmUoXCJzZXR0aGVtZVwiLCB0aGlzLnRoZW1lc1tzZWxlY3Rpb25dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbiA9PT0gMCAmJiBoYXNzLnNlbGVjdGVkVGhlbWUgIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZmlyZShcInNldHRoZW1lXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1waWNrLXRoZW1lLXJvd1wiLCBIYVBpY2tUaGVtZVJvdyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1sYWJlbC9pcm9uLWxhYmVsXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaXNDb21wb25lbnRMb2FkZWQgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IHsgcHVzaFN1cHBvcnRlZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLXB1c2gtbm90aWZpY2F0aW9ucy10b2dnbGVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUHVzaE5vdGlmaWNhdGlvbnNSb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1zZXR0aW5ncy1yb3cgbmFycm93PVwiW1tuYXJyb3ddXVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGluZ1wiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucHVzaF9ub3RpZmljYXRpb25zLmhlYWRlcicpXV08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBzbG90PVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBbW19kZXNjcmlwdGlvbihfcGxhdGZvcm1Mb2FkZWQsIF9wdXNoU3VwcG9ydGVkKV1dXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9jb21wb25lbnRzL25vdGlmeS5odG1sNS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnB1c2hfbm90aWZpY2F0aW9ucy5saW5rX3Byb21vJyldXTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW19lcnJvcl1dXCJcbiAgICAgICAgPjwvaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZT5cbiAgICAgIDwvaGEtc2V0dGluZ3Mtcm93PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIF9wbGF0Zm9ybUxvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcFBsYXRmb3JtTG9hZGVkKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgX3B1c2hTdXBwb3J0ZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHB1c2hTdXBwb3J0ZWQsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wRXJyb3IoX3BsYXRmb3JtTG9hZGVkLCBfcHVzaFN1cHBvcnRlZClcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wUGxhdGZvcm1Mb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcIm5vdGlmeS5odG1sNVwiKTtcbiAgfVxuXG4gIF9jb21wRXJyb3IocGxhdGZvcm1Mb2FkZWQsIHB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgcmV0dXJuICFwbGF0Zm9ybUxvYWRlZCB8fCAhcHVzaFN1cHBvcnRlZF87XG4gIH1cblxuICBfZGVzY3JpcHRpb24ocGxhdGZvcm1Mb2FkZWQsIHB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgbGV0IGtleTtcbiAgICBpZiAoIXB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgICBrZXkgPSBcImVycm9yX3VzZV9odHRwc1wiO1xuICAgIH0gZWxzZSBpZiAoIXBsYXRmb3JtTG9hZGVkKSB7XG4gICAgICBrZXkgPSBcImVycm9yX2xvYWRfcGxhdGZvcm1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShgdWkucGFuZWwucHJvZmlsZS5wdXNoX25vdGlmaWNhdGlvbnMuJHtrZXl9YCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvd1wiLCBIYVB1c2hOb3RpZmljYXRpb25zUm93KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5cbmltcG9ydCBcIi4vaGEtc2V0dGluZ3Mtcm93XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWZyZXNoVG9rZW5zIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5oZWFkZXInKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmRlc2NyaXB0aW9uJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfY29tcHV0ZVRva2VucyhyZWZyZXNoVG9rZW5zKV1dXCI+XG4gICAgICAgICAgPGhhLXNldHRpbmdzLXJvdyB0aHJlZS1saW5lPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIj5bW19mb3JtYXRUaXRsZShpdGVtLmNsaWVudF9pZCldXTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+W1tfZm9ybWF0Q3JlYXRlZEF0KGl0ZW0uY3JlYXRlZF9hdCldXTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5bW19mb3JtYXRMYXN0VXNlZChpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaXRlbS5pc19jdXJyZW50XV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuY3VycmVudF90b2tlbl90b29sdGlwJyldXTwvcGFwZXItdG9vbHRpcFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVEZWxldGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLmlzX2N1cnJlbnRdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgcmVmcmVzaFRva2VuczogQXJyYXksXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpIHtcbiAgICByZXR1cm4gcmVmcmVzaFRva2Vucy5maWx0ZXIoKHRrbikgPT4gdGtuLnR5cGUgPT09IFwibm9ybWFsXCIpLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9mb3JtYXRUaXRsZShjbGllbnRJZCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLnRva2VuX3RpdGxlXCIsXG4gICAgICBcImNsaWVudElkXCIsXG4gICAgICBjbGllbnRJZFxuICAgICk7XG4gIH1cblxuICBfZm9ybWF0Q3JlYXRlZEF0KGNyZWF0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5jcmVhdGVkX2F0XCIsXG4gICAgICBcImRhdGVcIixcbiAgICAgIGZvcm1hdERhdGVUaW1lKG5ldyBEYXRlKGNyZWF0ZWQpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIF9mb3JtYXRMYXN0VXNlZChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubGFzdF91c2VkX2F0XG4gICAgICA/IHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmxhc3RfdXNlZFwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIGZvcm1hdERhdGVUaW1lKG5ldyBEYXRlKGl0ZW0ubGFzdF91c2VkX2F0KSwgdGhpcy5oYXNzLmxhbmd1YWdlKSxcbiAgICAgICAgICBcImxvY2F0aW9uXCIsXG4gICAgICAgICAgaXRlbS5sYXN0X3VzZWRfaXBcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5ub3RfdXNlZFwiKTtcbiAgfVxuXG4gIGFzeW5jIF9oYW5kbGVEZWxldGUoZXYpIHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuY29uZmlybV9kZWxldGVcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBldi5tb2RlbC5pdGVtLmNsaWVudF9pZFxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL2RlbGV0ZV9yZWZyZXNoX3Rva2VuXCIsXG4gICAgICAgIHJlZnJlc2hfdG9rZW5faWQ6IGV2Lm1vZGVsLml0ZW0uaWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC10b2tlbnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGFsZXJ0KHRoaXMubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmRlbGV0ZV9mYWlsZWRcIikpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWZyZXNoLXRva2Vucy1jYXJkXCIsIEhhUmVmcmVzaFRva2Vucyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVNldHRpbmdzUm93IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbbmFycm93XSkge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtLWJvZHkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lJD1cIltbIXRocmVlTGluZV1dXCIgdGhyZWUtbGluZSQ9XCJbW3RocmVlTGluZV1dXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWFkaW5nXCI+PC9zbG90PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT48c2xvdCBuYW1lPVwiZGVzY3JpcHRpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRocmVlTGluZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2V0dGluZ3Mtcm93XCIsIEhhU2V0dGluZ3NSb3cpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBUUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUlBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBT0E7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBREE7QUFDQTtBQUFBOzs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFEQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUNBOzs7Ozs7QUFNQTtBQUNBOztBQURBOzs7Ozs7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTs7QUFEQTs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFEQTs7O0FBR0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7QUF6SUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWdCQTs7OztBQTVCQTtBQUNBO0FBNElBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBU0E7QUFFQTtBQUNBO0FBS0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBa0JBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBUUE7OztBQXhDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUE0RkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBOzs7Ozs7OztBQUVBOzs7OztBQUNBOzs7O0FBSUE7Ozs7O0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7O0FBT0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXhJQTtBQUNBO0FBcUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBOzs7O0FBMUZBO0FBQ0E7QUEySUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBK0RBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7O0FBREE7QUFLQTtBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOztBQUdBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcklBO0FBQ0E7QUFnREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBN0RBO0FBQ0E7QUEySUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZ2VBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTNHQTtBQUNBO0FBc0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBWkE7QUFjQTs7OztBQXpEQTtBQUNBO0FBOEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEwR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE5SUE7QUFDQTtBQTZGQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7OztBQXhHQTtBQUNBO0FBaUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBM0ZBO0FBQ0E7QUF5Q0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTlEQTtBQUNBO0FBOEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBN0ZBO0FBQ0E7QUFpQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVhBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXpEQTtBQUNBO0FBZ0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFoRUE7QUFDQTtBQXdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWdCQTs7OztBQTdDQTtBQUNBO0FBbUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQTZDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQVNBOzs7Ozs7QUFFQTs7Ozs7QUFFQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBR0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsR0E7QUFDQTtBQWtDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBM0NBO0FBQ0E7QUFzR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUF5QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTs7OztBQXhDQTtBQUNBO0FBMENBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
