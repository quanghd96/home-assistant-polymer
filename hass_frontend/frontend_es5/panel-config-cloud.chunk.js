(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-cloud"],
  {
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

    /***/ "./src/components/buttons/ha-progress-button.js":
      /*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
            '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    ',
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

        var HaProgressButton =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaProgressButton, _PolymerElement);

            function HaProgressButton() {
              _classCallCheck(this, HaProgressButton);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaProgressButton).apply(this, arguments)
              );
            }

            _createClass(
              HaProgressButton,
              [
                {
                  key: "tempClass",
                  value: function tempClass(className) {
                    var classList = this.$.container.classList;
                    classList.add(className);
                    setTimeout(function() {
                      classList.remove(className);
                    }, 1000);
                  },
                },
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaProgressButton.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.addEventListener("click", function(ev) {
                      return _this.buttonTapped(ev);
                    });
                  },
                },
                {
                  key: "buttonTapped",
                  value: function buttonTapped(ev) {
                    if (this.progress) ev.stopPropagation();
                  },
                },
                {
                  key: "actionSuccess",
                  value: function actionSuccess() {
                    this.tempClass("success");
                  },
                },
                {
                  key: "actionError",
                  value: function actionError() {
                    this.tempClass("error");
                  },
                },
                {
                  key: "computeDisabled",
                  value: function computeDisabled(disabled, progress) {
                    return disabled || progress;
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
                      hass: {
                        type: Object,
                      },
                      progress: {
                        type: Boolean,
                        value: false,
                      },
                      disabled: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaProgressButton;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-progress-button", HaProgressButton);

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

    /***/ "./src/components/ha-icon.ts":
      /*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
      /*! exports provided: HaIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIcon",
          function() {
            return HaIcon;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
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

        var ironIconClass = customElements.get("iron-icon");
        var loaded = false;
        var HaIcon =
          /*#__PURE__*/
          (function(_ironIconClass) {
            _inherits(HaIcon, _ironIconClass);

            function HaIcon() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaIcon);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HaIcon)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this._iconsetName = void 0;
              return _this;
            }

            _createClass(HaIcon, [
              {
                key: "listen",
                value: function listen(node, eventName, methodName) {
                  _get(_getPrototypeOf(HaIcon.prototype), "listen", this).call(
                    this,
                    node,
                    eventName,
                    methodName
                  );

                  if (!loaded && this._iconsetName === "mdi") {
                    loaded = true;
                    __webpack_require__
                      .e(/*! import() | mdi-icons */ "mdi-icons")
                      .then(
                        __webpack_require__.bind(
                          null,
                          /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"
                        )
                      );
                  }
                },
              },
            ]);

            return HaIcon;
          })(ironIconClass);
        customElements.define("ha-icon", HaIcon);

        /***/
      },

    /***/ "./src/data/alexa.ts":
      /*!***************************!*\
  !*** ./src/data/alexa.ts ***!
  \***************************/
      /*! exports provided: fetchCloudAlexaEntities, syncCloudAlexaEntities */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCloudAlexaEntities",
          function() {
            return fetchCloudAlexaEntities;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "syncCloudAlexaEntities",
          function() {
            return syncCloudAlexaEntities;
          }
        );
        var fetchCloudAlexaEntities = function fetchCloudAlexaEntities(hass) {
          return hass.callWS({
            type: "cloud/alexa/entities",
          });
        };
        var syncCloudAlexaEntities = function syncCloudAlexaEntities(hass) {
          return hass.callWS({
            type: "cloud/alexa/sync",
          });
        };

        /***/
      },

    /***/ "./src/data/webhook.ts":
      /*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
      /*! exports provided: fetchWebhooks */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchWebhooks",
          function() {
            return fetchWebhooks;
          }
        );
        var fetchWebhooks = function fetchWebhooks(hass) {
          return hass.callWS({
            type: "webhook/list",
          });
        };

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

    /***/ "./src/panels/config/cloud/account/cloud-account.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-account.js ***!
  \**********************************************************/
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
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./cloud-webhooks */ "./src/panels/config/cloud/account/cloud-webhooks.ts"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./cloud-alexa-pref */ "./src/panels/config/cloud/account/cloud-alexa-pref.ts"
        );
        /* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./cloud-google-pref */ "./src/panels/config/cloud/account/cloud-google-pref.ts"
        );
        /* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./cloud-remote-pref */ "./src/panels/config/cloud/account/cloud-remote-pref.ts"
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
            '\n      <style include="iron-flex ha-style">\n        [slot="introduction"] {\n          margin: -1em 0;\n        }\n        [slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        .account-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        mwc-button {\n          align-self: center;\n        }\n        .soon {\n          font-style: italic;\n          margin-top: 24px;\n          text-align: center;\n        }\n        .nowrap {\n          white-space: nowrap;\n        }\n        .wrap {\n          white-space: normal;\n        }\n        .status {\n          text-transform: capitalize;\n          padding: 16px;\n        }\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <hass-subpage header="JAVIS Home Cloud">\n        <div class="content">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">JAVIS Home Cloud</span>\n            <div slot="introduction">\n              <p>\n                Thank you for being part of JAVIS Home Cloud. It\'s because of\n                people like you that we are able to make a great home automation\n                experience for everyone. Thank you!\n              </p>\n            </div>\n\n            <ha-card header="Nabu Casa Account">\n              <div class="account-row">\n                <paper-item-body two-line="">\n                  [[cloudStatus.email]]\n                  <div secondary class="wrap">\n                    [[_formatSubscription(_subscription)]]\n                  </div>\n                </paper-item-body>\n              </div>\n\n              <div class="account-row">\n                <paper-item-body> Cloud connection status </paper-item-body>\n                <div class="status">[[cloudStatus.cloud]]</div>\n              </div>\n\n              <div class="card-actions">\n                <a href="https://account.nabucasa.com" target="_blank"\n                  ><mwc-button>Manage Account</mwc-button></a\n                >\n                <mwc-button style="float: right" on-click="handleLogout"\n                  >Sign out</mwc-button\n                >\n              </div>\n            </ha-card>\n          </ha-config-section>\n\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">Integrations</span>\n            <div slot="introduction">\n              <p>\n                Integrations for JAVIS Home Cloud allow you to connect with\n                services in the cloud without having to expose your Home\n                Assistant instance publicly on the internet.\n              </p>\n              <p>\n                Check the website for\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >all available features</a\n                >.\n              </p>\n            </div>\n\n            <cloud-remote-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-remote-pref>\n\n            <cloud-alexa-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-alexa-pref>\n\n            <cloud-google-pref\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-google-pref>\n\n            <cloud-webhooks\n              hass="[[hass]]"\n              cloud-status="[[cloudStatus]]"\n            ></cloud-webhooks>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    ',
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

        var CloudAccount =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(CloudAccount, _EventsMixin);

            function CloudAccount() {
              _classCallCheck(this, CloudAccount);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(CloudAccount).apply(this, arguments)
              );
            }

            _createClass(
              CloudAccount,
              [
                {
                  key: "ready",
                  value: function ready() {
                    _get(
                      _getPrototypeOf(CloudAccount.prototype),
                      "ready",
                      this
                    ).call(this);

                    this._fetchSubscriptionInfo();
                  },
                },
                {
                  key: "_computeRemoteConnected",
                  value: function _computeRemoteConnected(connected) {
                    return connected ? "Connected" : "Not Connected";
                  },
                },
                {
                  key: "_fetchSubscriptionInfo",
                  value: (function() {
                    var _fetchSubscriptionInfo2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_14__[
                                      "fetchCloudSubscriptionInfo"
                                    ]
                                  )(this.hass);

                                case 2:
                                  this._subscription = _context.sent;

                                  if (
                                    this._subscription.provider &&
                                    this.cloudStatus &&
                                    this.cloudStatus.cloud !== "connected"
                                  ) {
                                    this.fire("ha-refresh-cloud-status");
                                  }

                                case 4:
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

                    function _fetchSubscriptionInfo() {
                      return _fetchSubscriptionInfo2.apply(this, arguments);
                    }

                    return _fetchSubscriptionInfo;
                  })(),
                },
                {
                  key: "handleLogout",
                  value: function handleLogout() {
                    var _this = this;

                    this.hass.callApi("post", "cloud/logout").then(function() {
                      return _this.fire("ha-refresh-cloud-status");
                    });
                  },
                },
                {
                  key: "_formatSubscription",
                  value: function _formatSubscription(subInfo) {
                    if (subInfo === null) {
                      return "Fetching subscription…";
                    }

                    var description = subInfo.human_description;

                    if (subInfo.plan_renewal_date) {
                      description = description.replace(
                        "{periodEnd}",
                        Object(
                          _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__[
                            "default"
                          ]
                        )(
                          new Date(subInfo.plan_renewal_date * 1000),
                          this.hass.language
                        )
                      );
                    }

                    return description;
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
                      isWide: Boolean,
                      cloudStatus: Object,
                      _subscription: {
                        type: Object,
                        value: null,
                      },
                    };
                  },
                },
              ]
            );

            return CloudAccount;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("cloud-account", CloudAccount);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-alexa-pref.ts":
      /*!*************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-alexa-pref.ts ***!
  \*************************************************************/
      /*! exports provided: CloudAlexaPref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudAlexaPref",
          function() {
            return CloudAlexaPref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/alexa */ "./src/data/alexa.ts"
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n      h3 {\n        margin-bottom: 0;\n      }\n      h3 + p {\n        margin-top: 0.5em;\n      }\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                <h3>Enable State Reporting</h3>\n                <p>\n                  If you enable state reporting, JAVIS Home will send\n                  <b>all</b> state changes of exposed entities to Amazon. This\n                  allows you to always see the latest states in the Alexa app\n                  and use the state changes to create routines.\n                </p>\n                <paper-toggle-button\n                  .checked=",
            "\n                  @change=",
            "\n                ></paper-toggle-button>\n              ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card header="Alexa">\n        <paper-toggle-button\n          .checked=',
            "\n          @change=",
            '\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Alexa integration for JAVIS Home Cloud you\'ll be able to\n          control all your JAVIS Home devices via any Alexa-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"\n                target="_blank"\n              >\n                Enable the JAVIS Home skill for Alexa\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/amazon_alexa/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires an Alexa-enabled device like the Amazon\n            Echo.</em\n          >\n          ',
            '\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
            " .disabled=",
            '>\n            Sync Entities\n          </mwc-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/alexa">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    ',
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

        // tslint:disable-next-line

        var CloudAlexaPref = _decorate(
          null,
          function(_initialize, _LitElement) {
            var CloudAlexaPref =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(CloudAlexaPref, _LitElement2);

                function CloudAlexaPref() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, CloudAlexaPref);

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
                      CloudAlexaPref
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return CloudAlexaPref;
              })(_LitElement);

            return {
              F: CloudAlexaPref,
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
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_syncing",
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.cloudStatus) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    var _prefs = this.cloudStatus.prefs,
                      alexa_enabled = _prefs.alexa_enabled,
                      alexa_report_state = _prefs.alexa_report_state;
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      alexa_enabled,
                      this._enabledToggleChanged,
                      alexa_enabled
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            alexa_report_state,
                            this._reportToggleChanged
                          )
                        : "",
                      this._handleSync,
                      this._syncing
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handleSync",
                  value: (function() {
                    var _handleSync2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._syncing = true;
                                  _context.prev = 1;
                                  _context.next = 4;
                                  return Object(
                                    _data_alexa__WEBPACK_IMPORTED_MODULE_6__[
                                      "syncCloudAlexaEntities"
                                    ]
                                  )(this.hass);

                                case 4:
                                  _context.next = 9;
                                  break;

                                case 6:
                                  _context.prev = 6;
                                  _context.t0 = _context["catch"](1);
                                  alert(
                                    "Failed to sync entities: ".concat(
                                      _context.t0.body.message
                                    )
                                  );

                                case 9:
                                  _context.prev = 9;
                                  this._syncing = false;
                                  return _context.finish(9);

                                case 12:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[1, 6, 9, 12]]
                        );
                      })
                    );

                    function _handleSync() {
                      return _handleSync2.apply(this, arguments);
                    }

                    return _handleSync;
                  })(),
                },
                {
                  kind: "method",
                  key: "_enabledToggleChanged",
                  value: (function() {
                    var _enabledToggleChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var toggle;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  toggle = ev.target;
                                  _context2.prev = 1;
                                  _context2.next = 4;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_5__[
                                      "updateCloudPref"
                                    ]
                                  )(this.hass, {
                                    alexa_enabled: toggle.checked,
                                  });

                                case 4:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                                      "fireEvent"
                                    ]
                                  )(this, "ha-refresh-cloud-status");
                                  _context2.next = 10;
                                  break;

                                case 7:
                                  _context2.prev = 7;
                                  _context2.t0 = _context2["catch"](1);
                                  toggle.checked = !toggle.checked;

                                case 10:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[1, 7]]
                        );
                      })
                    );

                    function _enabledToggleChanged(_x) {
                      return _enabledToggleChanged2.apply(this, arguments);
                    }

                    return _enabledToggleChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_reportToggleChanged",
                  value: (function() {
                    var _reportToggleChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3(ev) {
                        var toggle;
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  toggle = ev.target;
                                  _context3.prev = 1;
                                  _context3.next = 4;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_5__[
                                      "updateCloudPref"
                                    ]
                                  )(this.hass, {
                                    alexa_report_state: toggle.checked,
                                  });

                                case 4:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                                      "fireEvent"
                                    ]
                                  )(this, "ha-refresh-cloud-status");
                                  _context3.next = 11;
                                  break;

                                case 7:
                                  _context3.prev = 7;
                                  _context3.t0 = _context3["catch"](1);
                                  alert(
                                    "Unable to "
                                      .concat(
                                        toggle.checked ? "enable" : "disable",
                                        " report state. "
                                      )
                                      .concat(_context3.t0.message)
                                  );
                                  toggle.checked = !toggle.checked;

                                case 11:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this,
                          [[1, 7]]
                        );
                      })
                    );

                    function _reportToggleChanged(_x2) {
                      return _reportToggleChanged2.apply(this, arguments);
                    }

                    return _reportToggleChanged;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject4());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );
        customElements.define("cloud-alexa-pref", CloudAlexaPref);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-google-pref.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-google-pref.ts ***!
  \**************************************************************/
      /*! exports provided: CloudGooglePref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudGooglePref",
          function() {
            return CloudGooglePref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 16px;\n      }\n      paper-input {\n        width: 200px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="secure_devices">\n                  Please enter a pin to interact with security devices. Security\n                  devices are doors, garage doors and locks. You will be asked\n                  to say/enter this pin when interacting with such devices via\n                  Google Assistant.\n                  <paper-input\n                    label="Secure Devices Pin"\n                    id="google_secure_devices_pin"\n                    placeholder="Secure devices disabled"\n                    .value=',
            '\n                    @change="',
            '"\n                  ></paper-input>\n                </div>\n              ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card header="Google Assistant">\n        <paper-toggle-button\n          id="google_enabled"\n          .checked="',
            '"\n          @change="',
            '"\n        ></paper-toggle-button>\n        <div class="card-content">\n          With the Google Assistant integration for JAVIS Home Cloud you\'ll be\n          able to control all your JAVIS Home devices via any Google\n          Assistant-enabled device.\n          <ul>\n            <li>\n              <a\n                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"\n                target="_blank"\n              >\n                Activate the JAVIS Home skill for Google Assistant\n              </a>\n            </li>\n            <li>\n              <a\n                href="https://www.nabucasa.com/config/google_assistant/"\n                target="_blank"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires a Google Assistant-enabled device like\n            the Google Home or Android phone.</em\n          >\n          ',
            '\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button\n            .hass="',
            '"\n            .disabled="',
            '"\n            path="cloud/google_actions/sync"\n          >\n            Sync entities to Google\n          </ha-call-api-button>\n          <div class="spacer"></div>\n          <a href="/config/cloud/google-assistant">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    ',
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

        // tslint:disable-next-line

        var CloudGooglePref =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(CloudGooglePref, _LitElement);

            function CloudGooglePref() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, CloudGooglePref);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(
                  CloudGooglePref
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this.hass = void 0;
              _this.cloudStatus = void 0;
              return _this;
            }

            _createClass(
              CloudGooglePref,
              [
                {
                  key: "render",
                  value: function render() {
                    if (!this.cloudStatus) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    var _this$cloudStatus$pre = this.cloudStatus.prefs,
                      google_enabled = _this$cloudStatus$pre.google_enabled,
                      google_secure_devices_pin =
                        _this$cloudStatus$pre.google_secure_devices_pin;
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      google_enabled,
                      this._toggleChanged,
                      google_enabled
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            google_secure_devices_pin || "",
                            this._pinChanged
                          )
                        : "",
                      this.hass,
                      !google_enabled
                    );
                  },
                },
                {
                  key: "_toggleChanged",
                  value: (function() {
                    var _toggleChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        var toggle;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  toggle = ev.target;
                                  _context.prev = 1;
                                  _context.next = 4;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                                      "updateCloudPref"
                                    ]
                                  )(
                                    this.hass,
                                    _defineProperty(
                                      {},
                                      toggle.id,
                                      toggle.checked
                                    )
                                  );

                                case 4:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                                      "fireEvent"
                                    ]
                                  )(this, "ha-refresh-cloud-status");
                                  _context.next = 10;
                                  break;

                                case 7:
                                  _context.prev = 7;
                                  _context.t0 = _context["catch"](1);
                                  toggle.checked = !toggle.checked;

                                case 10:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[1, 7]]
                        );
                      })
                    );

                    function _toggleChanged(_x) {
                      return _toggleChanged2.apply(this, arguments);
                    }

                    return _toggleChanged;
                  })(),
                },
                {
                  key: "_pinChanged",
                  value: (function() {
                    var _pinChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var input;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  input = ev.target;
                                  _context2.prev = 1;
                                  _context2.next = 4;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                                      "updateCloudPref"
                                    ]
                                  )(
                                    this.hass,
                                    _defineProperty(
                                      {},
                                      input.id,
                                      input.value || null
                                    )
                                  );

                                case 4:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                                      "fireEvent"
                                    ]
                                  )(this, "ha-refresh-cloud-status");
                                  _context2.next = 11;
                                  break;

                                case 7:
                                  _context2.prev = 7;
                                  _context2.t0 = _context2["catch"](1);
                                  alert(
                                    "Unable to store pin: ".concat(
                                      _context2.t0.message
                                    )
                                  );
                                  input.value = this.cloudStatus.prefs.google_secure_devices_pin;

                                case 11:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[1, 7]]
                        );
                      })
                    );

                    function _pinChanged(_x2) {
                      return _pinChanged2.apply(this, arguments);
                    }

                    return _pinChanged;
                  })(),
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      cloudStatus: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject4());
                  },
                },
              ]
            );

            return CloudGooglePref;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
        customElements.define("cloud-google-pref", CloudGooglePref);

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-remote-pref.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-remote-pref.ts ***!
  \**************************************************************/
      /*! exports provided: CloudRemotePref */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudRemotePref",
          function() {
            return CloudRemotePref;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../dialog-cloud-certificate/show-dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts"
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    ",
          ]);

          _templateObject5 = function _templateObject5() {
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="spacer"></div>\n                <mwc-button @click=',
            ">\n                  Certificate Info\n                </mwc-button>\n              ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card header="Remote Control">\n        <paper-toggle-button\n          .checked="',
            '"\n          @change="',
            '"\n        ></paper-toggle-button>\n        <div class="card-content">\n          JAVIS Home Cloud provides a secure remote connection to your instance\n          while away from home. Your instance\n          ',
            ' available at\n          <a href="https://',
            '" target="_blank">\n            https://',
            '</a\n          >.\n        </div>\n        <div class="card-actions">\n          <a href="https://www.nabucasa.com/config/remote/" target="_blank">\n            <mwc-button>Learn how it works</mwc-button>\n          </a>\n          ',
            "\n        </div>\n      </ha-card>\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n        <ha-card header="Remote Control">\n          <div class="preparing">\n            Remote access is being prepared. We will notify you when it\'s ready.\n          </div>\n        </ha-card>\n      ',
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

        // tslint:disable-next-line

        var CloudRemotePref = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-remote-pref"
            ),
          ],
          function(_initialize, _LitElement) {
            var CloudRemotePref =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(CloudRemotePref, _LitElement2);

                function CloudRemotePref() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, CloudRemotePref);

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
                      CloudRemotePref
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return CloudRemotePref;
              })(_LitElement);

            return {
              F: CloudRemotePref,
              d: [
                {
                  kind: "field",
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "get",
                  static: true,
                  key: "properties",
                  value: function properties() {
                    return {
                      hass: {},
                      cloudStatus: {},
                    };
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.cloudStatus) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    var _this$cloudStatus = this.cloudStatus,
                      remote_connected = _this$cloudStatus.remote_connected,
                      remote_domain = _this$cloudStatus.remote_domain,
                      remote_certificate = _this$cloudStatus.remote_certificate;

                    if (!remote_certificate) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject2());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject3(),
                      remote_connected,
                      this._toggleChanged,
                      remote_connected ? "is" : "will be",
                      remote_domain,
                      remote_domain,
                      remote_certificate
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject4(), this._openCertInfo)
                        : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_openCertInfo",
                  value: function _openCertInfo() {
                    Object(
                      _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_7__[
                        "showCloudCertificateDialog"
                      ]
                    )(this, {
                      certificateInfo: this.cloudStatus.remote_certificate,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_toggleChanged",
                  value: (function() {
                    var _toggleChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        var toggle;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  toggle = ev.target;
                                  _context.prev = 1;

                                  if (!toggle.checked) {
                                    _context.next = 7;
                                    break;
                                  }

                                  _context.next = 5;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                                      "connectCloudRemote"
                                    ]
                                  )(this.hass);

                                case 5:
                                  _context.next = 9;
                                  break;

                                case 7:
                                  _context.next = 9;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_6__[
                                      "disconnectCloudRemote"
                                    ]
                                  )(this.hass);

                                case 9:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                                      "fireEvent"
                                    ]
                                  )(this, "ha-refresh-cloud-status");
                                  _context.next = 16;
                                  break;

                                case 12:
                                  _context.prev = 12;
                                  _context.t0 = _context["catch"](1);
                                  alert(_context.t0.message);
                                  toggle.checked = !toggle.checked;

                                case 16:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[1, 12]]
                        );
                      })
                    );

                    function _toggleChanged(_x) {
                      return _toggleChanged2.apply(this, arguments);
                    }

                    return _toggleChanged;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject5());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/config/cloud/account/cloud-webhooks.ts":
      /*!***********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-webhooks.ts ***!
  \***********************************************************/
      /*! exports provided: CloudWebhooks */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CloudWebhooks",
          function() {
            return CloudWebhooks;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../data/webhook */ "./src/data/webhook.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../dialog-manage-cloudhook/show-dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts"
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

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            "\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
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

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }

        function _iterableToArray(iter) {
          if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
          )
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
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

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            '\n                <paper-toggle-button\n                  @click="',
            '"\n                ></paper-toggle-button>\n              ',
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n                <mwc-button @click="',
            '">\n                  Manage\n                </mwc-button>\n              ',
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="progress">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n        <div class="webhook" .entry="',
            '">\n          <paper-item-body two-line>\n            <div>\n              ',
            "\n              ",
            "\n            </div>\n            <div secondary>",
            "</div>\n          </paper-item-body>\n          ",
            "\n        </div>\n      ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n        <div class="body-text">\n          Looks like you have no webhooks yet. Get started by configuring a\n          <a href="/config/integrations">webhook-based integration</a> or by\n          creating a <a href="/config/automation/new">webhook automation</a>.\n        </div>\n      ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n        <div class="body-text">Loading\u2026</div>\n      ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      ",
            '\n      <ha-card header="Webhooks">\n        <div class="card-content">\n          Anything that is configured to be triggered by a webhook can be given\n          a publicly accessible URL to allow you to send data back to Home\n          Assistant from anywhere, without exposing your instance to the\n          internet. ',
            '\n\n          <div class="footer">\n            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">\n              Learn more about creating webhook-powered automations.\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    ',
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

        var CloudWebhooks =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(CloudWebhooks, _LitElement);

            _createClass(CloudWebhooks, null, [
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: {},
                    cloudStatus: {},
                    _cloudHooks: {},
                    _localHooks: {},
                    _progress: {},
                  };
                },
              },
            ]);

            function CloudWebhooks() {
              var _this;

              _classCallCheck(this, CloudWebhooks);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(CloudWebhooks).call(this)
              );
              _this.hass = void 0;
              _this.cloudStatus = void 0;
              _this._cloudHooks = void 0;
              _this._localHooks = void 0;
              _this._progress = void 0;
              _this._progress = [];
              return _this;
            }

            _createClass(CloudWebhooks, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  _get(
                    _getPrototypeOf(CloudWebhooks.prototype),
                    "connectedCallback",
                    this
                  ).call(this);

                  this._fetchData();
                },
              },
              {
                key: "render",
                value: function render() {
                  return Object(
                    lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                  )(_templateObject(), this.renderStyle(), this._renderBody());
                },
              },
              {
                key: "updated",
                value: function updated(changedProps) {
                  _get(
                    _getPrototypeOf(CloudWebhooks.prototype),
                    "updated",
                    this
                  ).call(this, changedProps);

                  if (changedProps.has("cloudStatus") && this.cloudStatus) {
                    this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
                  }
                },
              },
              {
                key: "_renderBody",
                value: function _renderBody() {
                  var _this2 = this;

                  if (
                    !this.cloudStatus ||
                    !this._localHooks ||
                    !this._cloudHooks
                  ) {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject2());
                  }

                  if (this._localHooks.length === 0) {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject3());
                  }

                  return this._localHooks.map(function(entry) {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject4(), entry, entry.name, entry.domain === entry.name.toLowerCase() ? "" : " (".concat(entry.domain, ")"), entry.webhook_id, _this2._progress.includes(entry.webhook_id) ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5()) : _this2._cloudHooks[entry.webhook_id] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), _this2._handleManageButton) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), _this2._enableWebhook));
                  });
                },
              },
              {
                key: "_showDialog",
                value: function _showDialog(webhookId) {
                  var _this3 = this;

                  var webhook = this._localHooks.find(function(ent) {
                    return ent.webhook_id === webhookId;
                  });

                  var cloudhook = this._cloudHooks[webhookId];
                  Object(
                    _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_8__[
                      "showManageCloudhookDialog"
                    ]
                  )(this, {
                    webhook: webhook,
                    cloudhook: cloudhook,
                    disableHook: function disableHook() {
                      return _this3._disableWebhook(webhookId);
                    },
                  });
                },
              },
              {
                key: "_handleManageButton",
                value: function _handleManageButton(ev) {
                  var entry = ev.currentTarget.parentElement.entry;

                  this._showDialog(entry.webhook_id);
                },
              },
              {
                key: "_enableWebhook",
                value: (function() {
                  var _enableWebhook2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(ev) {
                      var entry, updatedWebhook;
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                entry = ev.currentTarget.parentElement.entry;
                                this._progress = [].concat(
                                  _toConsumableArray(this._progress),
                                  [entry.webhook_id]
                                );
                                _context.prev = 2;
                                _context.next = 5;
                                return Object(
                                  _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                                    "createCloudhook"
                                  ]
                                )(this.hass, entry.webhook_id);

                              case 5:
                                updatedWebhook = _context.sent;
                                _context.next = 12;
                                break;

                              case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](2);
                                alert(_context.t0.message);
                                return _context.abrupt("return");

                              case 12:
                                _context.prev = 12;
                                this._progress = this._progress.filter(function(
                                  wid
                                ) {
                                  return wid !== entry.webhook_id;
                                });
                                return _context.finish(12);

                              case 15:
                                this._cloudHooks = Object.assign(
                                  {},
                                  this._cloudHooks,
                                  _defineProperty(
                                    {},
                                    entry.webhook_id,
                                    updatedWebhook
                                  )
                                ); // Only open dialog if we're not also enabling others, otherwise it's confusing

                                if (this._progress.length === 0) {
                                  this._showDialog(entry.webhook_id);
                                }

                              case 17:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                        [[2, 8, 12, 15]]
                      );
                    })
                  );

                  function _enableWebhook(_x) {
                    return _enableWebhook2.apply(this, arguments);
                  }

                  return _enableWebhook;
                })(),
              },
              {
                key: "_disableWebhook",
                value: (function() {
                  var _disableWebhook2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(webhookId) {
                      var _ref, disabledHook, newHooks;

                      return regeneratorRuntime.wrap(
                        function _callee2$(_context2) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                this._progress = [].concat(
                                  _toConsumableArray(this._progress),
                                  [webhookId]
                                );
                                _context2.prev = 1;
                                _context2.next = 4;
                                return Object(
                                  _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                                    "deleteCloudhook"
                                  ]
                                )(this.hass, webhookId);

                              case 4:
                                _context2.next = 10;
                                break;

                              case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2["catch"](1);
                                alert(
                                  "Failed to disable webhook: ".concat(
                                    _context2.t0.message
                                  )
                                );
                                return _context2.abrupt("return");

                              case 10:
                                _context2.prev = 10;
                                this._progress = this._progress.filter(function(
                                  wid
                                ) {
                                  return wid !== webhookId;
                                });
                                return _context2.finish(10);

                              case 13:
                                // Remove cloud related parts from entry.
                                (_ref = this._cloudHooks),
                                  (disabledHook = _ref[webhookId]),
                                  (newHooks = _objectWithoutProperties(
                                    _ref,
                                    [webhookId].map(_toPropertyKey)
                                  ));
                                this._cloudHooks = newHooks;

                              case 15:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2,
                        this,
                        [[1, 6, 10, 13]]
                      );
                    })
                  );

                  function _disableWebhook(_x2) {
                    return _disableWebhook2.apply(this, arguments);
                  }

                  return _disableWebhook;
                })(),
              },
              {
                key: "_fetchData",
                value: (function() {
                  var _fetchData2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3() {
                      return regeneratorRuntime.wrap(
                        function _callee3$(_context3) {
                          while (1) {
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                if (
                                  !this.hass.config.components.includes(
                                    "webhook"
                                  )
                                ) {
                                  _context3.next = 6;
                                  break;
                                }

                                _context3.next = 3;
                                return Object(
                                  _data_webhook__WEBPACK_IMPORTED_MODULE_6__[
                                    "fetchWebhooks"
                                  ]
                                )(this.hass);

                              case 3:
                                _context3.t0 = _context3.sent;
                                _context3.next = 7;
                                break;

                              case 6:
                                _context3.t0 = [];

                              case 7:
                                this._localHooks = _context3.t0;

                              case 8:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        },
                        _callee3,
                        this
                      );
                    })
                  );

                  function _fetchData() {
                    return _fetchData2.apply(this, arguments);
                  }

                  return _fetchData;
                })(),
              },
              {
                key: "renderStyle",
                value: function renderStyle() {
                  return Object(
                    lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                  )(_templateObject8());
                },
              },
            ]);

            return CloudWebhooks;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
        customElements.define("cloud-webhooks", CloudWebhooks);

        /***/
      },

    /***/ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts":
      /*!*******************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts ***!
  \*******************************************************************************************/
      /*! exports provided: showCloudCertificateDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showCloudCertificateDialog",
          function() {
            return showCloudCertificateDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var showCloudCertificateDialog = function showCloudCertificateDialog(
          element,
          webhookDialogParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-cloud-certificate",
            dialogImport: function dialogImport() {
              return Promise.all(
                /*! import() | dialog-cloud-certificate */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("dialog-cloud-certificate"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts"
                )
              );
            },
            dialogParams: webhookDialogParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts":
      /*!*****************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts ***!
  \*****************************************************************************************/
      /*! exports provided: showManageCloudhookDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showManageCloudhookDialog",
          function() {
            return showManageCloudhookDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var showManageCloudhookDialog = function showManageCloudhookDialog(
          element,
          webhookDialogParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-manage-cloudhook",
            dialogImport: function dialogImport() {
              return Promise.all(
                /*! import() | cloud-webhook-manage-dialog */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("vendors~cloud-webhook-manage-dialog"),
                  __webpack_require__.e("cloud-webhook-manage-dialog"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts"
                )
              );
            },
            dialogParams: webhookDialogParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/cloud/ha-config-cloud.ts":
      /*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _account_cloud_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./account/cloud-account */ "./src/panels/config/cloud/account/cloud-account.js"
        );
        /* harmony import */ var _login_cloud_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./login/cloud-login */ "./src/panels/config/cloud/login/cloud-login.js"
        );
        /* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
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

        var LOGGED_IN_URLS = ["account", "google-assistant", "alexa"];
        var NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];

        var HaConfigCloud = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])(
              "ha-config-cloud"
            ),
          ],
          function(_initialize, _HassRouterPage) {
            var HaConfigCloud =
              /*#__PURE__*/
              (function(_HassRouterPage2) {
                _inherits(HaConfigCloud, _HassRouterPage2);

                function HaConfigCloud() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaConfigCloud);

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
                      HaConfigCloud
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaConfigCloud;
              })(_HassRouterPage);

            return {
              F: HaConfigCloud,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "route",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "cloudStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "routerOptions",
                  value: function value() {
                    var _this2 = this;

                    return {
                      defaultPage: "login",
                      showLoading: true,
                      initialLoad: function initialLoad() {
                        return _this2._cloudStatusLoaded;
                      },
                      // Guard the different pages based on if we're logged in.
                      beforeRender: function beforeRender(page) {
                        if (_this2.cloudStatus.logged_in) {
                          if (!LOGGED_IN_URLS.includes(page)) {
                            return "account";
                          }
                        } else {
                          if (!NOT_LOGGED_IN_URLS.includes(page)) {
                            return "login";
                          }
                        }

                        return undefined;
                      },
                      routes: {
                        login: {
                          tag: "cloud-login",
                        },
                        register: {
                          tag: "cloud-register",
                          load: function load() {
                            return __webpack_require__
                              .e(
                                /*! import() | cloud-register */ "cloud-register"
                              )
                              .then(
                                __webpack_require__.bind(
                                  null,
                                  /*! ./register/cloud-register */ "./src/panels/config/cloud/register/cloud-register.js"
                                )
                              );
                          },
                        },
                        "forgot-password": {
                          tag: "cloud-forgot-password",
                          load: function load() {
                            return __webpack_require__
                              .e(
                                /*! import() | cloud-forgot-password */ "cloud-forgot-password"
                              )
                              .then(
                                __webpack_require__.bind(
                                  null,
                                  /*! ./forgot-password/cloud-forgot-password */ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js"
                                )
                              );
                          },
                        },
                        account: {
                          tag: "cloud-account",
                        },
                        "google-assistant": {
                          tag: "cloud-google-assistant",
                          load: function load() {
                            return Promise.all(
                              /*! import() | cloud-google-assistant */ [
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "cloud-alexa~cloud-google-assistant~more-info-dialog~panel-kiosk~panel-states"
                                ),
                                __webpack_require__.e("cloud-google-assistant"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./google-assistant/cloud-google-assistant */ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts"
                              )
                            );
                          },
                        },
                        alexa: {
                          tag: "cloud-alexa",
                          load: function load() {
                            return Promise.all(
                              /*! import() | cloud-alexa */ [
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "cloud-alexa~cloud-google-assistant~more-info-dialog~panel-kiosk~panel-states"
                                ),
                                __webpack_require__.e("cloud-alexa"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./alexa/cloud-alexa */ "./src/panels/config/cloud/alexa/cloud-alexa.ts"
                              )
                            );
                          },
                        },
                      },
                    };
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "_flashMessage",
                  value: function value() {
                    return "";
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_3__["property"]
                    )(),
                  ],
                  key: "_loginEmail",
                  value: function value() {
                    return "";
                  },
                },
                {
                  kind: "field",
                  key: "_resolveCloudStatusLoaded",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_cloudStatusLoaded",
                  value: function value() {
                    var _this3 = this;

                    return new Promise(function(resolve) {
                      _this3._resolveCloudStatusLoaded = resolve;
                    });
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this4 = this;

                    _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("cloud-done", function(ev) {
                      _this4._flashMessage = ev.detail.flashMessage;
                      Object(
                        _common_navigate__WEBPACK_IMPORTED_MODULE_4__[
                          "navigate"
                        ]
                      )(_this4, "/config/cloud/login");
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (changedProps.has("cloudStatus")) {
                      var oldStatus = changedProps.get("cloudStatus");

                      if (oldStatus === undefined) {
                        this._resolveCloudStatusLoaded();
                      } else if (
                        oldStatus.logged_in !== this.cloudStatus.logged_in
                      ) {
                        Object(
                          _common_navigate__WEBPACK_IMPORTED_MODULE_4__[
                            "navigate"
                          ]
                        )(this, this.route.prefix, true);
                      }
                    }
                  },
                },
                {
                  kind: "method",
                  key: "createElement",
                  value: function createElement(tag) {
                    var _this5 = this;

                    var el = _get(
                      _getPrototypeOf(HaConfigCloud.prototype),
                      "createElement",
                      this
                    ).call(this, tag);

                    el.addEventListener("email-changed", function(ev) {
                      _this5._loginEmail = ev.detail.value;
                    });
                    el.addEventListener("flash-message-changed", function(ev) {
                      _this5._flashMessage = ev.detail.value;
                    });
                    return el;
                  },
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function updatePageEl(el) {
                    // We are not going to update if the current page if we are not logged in
                    // and the current page requires being logged in. Happens when we log out.
                    if (
                      this.cloudStatus &&
                      !this.cloudStatus.logged_in &&
                      LOGGED_IN_URLS.includes(this._currentPage)
                    ) {
                      return;
                    }

                    if ("setProperties" in el) {
                      // As long as we have Polymer pages
                      el.setProperties({
                        hass: this.hass,
                        email: this._loginEmail,
                        isWide: this.isWide,
                        cloudStatus: this.cloudStatus,
                        flashMessage: this._flashMessage,
                      });
                    } else {
                      el.hass = this.hass;
                      el.email = this._loginEmail;
                      el.isWide = this.isWide;
                      el.narrow = this.narrow;
                      el.cloudStatus = this.cloudStatus;
                      el.flashMessage = this._flashMessage;
                    }
                  },
                },
              ],
            };
          },
          _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_2__[
            "HassRouterPage"
          ]
        );

        /***/
      },

    /***/ "./src/panels/config/cloud/login/cloud-login.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/cloud/login/cloud-login.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        [slot="introduction"] {\n          margin: -1em 0;\n        }\n        [slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        ha-card {\n          overflow: hidden;\n        }\n        ha-card .card-header {\n          margin-bottom: -8px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        [hidden] {\n          display: none;\n        }\n        .flash-msg {\n          padding-right: 44px;\n        }\n        .flash-msg paper-icon-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <hass-subpage header="Cloud Login">\n        <div class="content">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">JAVIS Home Cloud</span>\n            <div slot="introduction">\n              <p>\n                JAVIS Home Cloud provides you with a secure remote connection to\n                your instance while away from home. It also allows you to\n                connect with cloud-only services: Amazon Alexa and Google\n                Assistant.\n              </p>\n              <p>\n                This service is run by our partner\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >Nabu&nbsp;Casa,&nbsp;Inc</a\n                >, a company founded by the founders of JAVIS Home and Hass.io.\n              </p>\n              <p>\n                JAVIS Home Cloud is a subscription service with a free one month\n                trial. No payment information necessary.\n              </p>\n              <p>\n                <a href="https://www.nabucasa.com" target="_blank"\n                  >Learn more about JAVIS Home Cloud</a\n                >\n              </p>\n            </div>\n\n            <ha-card hidden$="[[!flashMessage]]">\n              <div class="card-content flash-msg">\n                [[flashMessage]]\n                <paper-icon-button icon="hass:close" on-click="_dismissFlash"\n                  >Dismiss</paper-icon-button\n                >\n                <paper-ripple id="flashRipple" noink=""></paper-ripple>\n              </div>\n            </ha-card>\n\n            <ha-card header="Sign in">\n              <div class="card-content">\n                <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n                <paper-input\n                  label="Email"\n                  id="email"\n                  type="email"\n                  value="{{email}}"\n                  on-keydown="_keyDown"\n                  error-message="Invalid email"\n                ></paper-input>\n                <paper-input\n                  id="password"\n                  label="Password"\n                  value="{{_password}}"\n                  type="password"\n                  on-keydown="_keyDown"\n                  error-message="Passwords are at least 8 characters"\n                ></paper-input>\n              </div>\n              <div class="card-actions">\n                <ha-progress-button\n                  on-click="_handleLogin"\n                  progress="[[_requestInProgress]]"\n                  >Sign in</ha-progress-button\n                >\n                <button\n                  class="link"\n                  hidden="[[_requestInProgress]]"\n                  on-click="_handleForgotPassword"\n                >\n                  forgot password?\n                </button>\n              </div>\n            </ha-card>\n\n            <ha-card>\n              <paper-item on-click="_handleRegister">\n                <paper-item-body two-line="">\n                  Start your free 1 month trial\n                  <div secondary="">No payment information necessary</div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </ha-card>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    ',
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
         * @appliesMixin NavigateMixin
         * @appliesMixin EventsMixin
         */

        var CloudLogin =
          /*#__PURE__*/
          (function(_NavigateMixin) {
            _inherits(CloudLogin, _NavigateMixin);

            function CloudLogin() {
              _classCallCheck(this, CloudLogin);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(CloudLogin).apply(this, arguments)
              );
            }

            _createClass(
              CloudLogin,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(CloudLogin.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    if (this.flashMessage) {
                      // Wait for DOM to be drawn
                      requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                          return _this.$.flashRipple.simulatedRipple();
                        });
                      });
                    }
                  },
                },
                {
                  key: "_inputChanged",
                  value: function _inputChanged() {
                    this.$.email.invalid = false;
                    this.$.password.invalid = false;
                    this._error = false;
                  },
                },
                {
                  key: "_keyDown",
                  value: function _keyDown(ev) {
                    // validate on enter
                    if (ev.keyCode === 13) {
                      this._handleLogin();

                      ev.preventDefault();
                    }
                  },
                },
                {
                  key: "_handleLogin",
                  value: function _handleLogin() {
                    var _this2 = this;

                    var invalid = false;

                    if (!this.email || !this.email.includes("@")) {
                      this.$.email.invalid = true;
                      this.$.email.focus();
                      invalid = true;
                    }

                    if (this._password.length < 8) {
                      this.$.password.invalid = true;

                      if (!invalid) {
                        invalid = true;
                        this.$.password.focus();
                      }
                    }

                    if (invalid) return;
                    this._requestInProgress = true;
                    this.hass
                      .callApi("post", "cloud/login", {
                        email: this.email,
                        password: this._password,
                      })
                      .then(
                        function() {
                          _this2.fire("ha-refresh-cloud-status");

                          _this2.setProperties({
                            email: "",
                            _password: "",
                          });
                        },
                        function(err) {
                          // Do this before setProperties because changing it clears errors.
                          _this2._password = "";
                          var errCode = err && err.body && err.body.code;

                          if (errCode === "PasswordChangeRequired") {
                            alert(
                              "You need to change your password before logging in."
                            );

                            _this2.navigate("/config/cloud/forgot-password");

                            return;
                          }

                          var props = {
                            _requestInProgress: false,
                            _error:
                              err && err.body && err.body.message
                                ? err.body.message
                                : "Unknown error",
                          };

                          if (errCode === "UserNotConfirmed") {
                            props._error =
                              "You need to confirm your email before logging in.";
                          }

                          _this2.setProperties(props);

                          _this2.$.email.focus();
                        }
                      );
                  },
                },
                {
                  key: "_handleRegister",
                  value: function _handleRegister() {
                    this.flashMessage = "";
                    this.navigate("/config/cloud/register");
                  },
                },
                {
                  key: "_handleForgotPassword",
                  value: function _handleForgotPassword() {
                    this.flashMessage = "";
                    this.navigate("/config/cloud/forgot-password");
                  },
                },
                {
                  key: "_dismissFlash",
                  value: function _dismissFlash() {
                    var _this3 = this;

                    // give some time to let the ripple finish.
                    setTimeout(function() {
                      _this3.flashMessage = "";
                    }, 200);
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
                      isWide: Boolean,
                      email: {
                        type: String,
                        notify: true,
                      },
                      _password: {
                        type: String,
                        value: "",
                      },
                      _requestInProgress: {
                        type: Boolean,
                        value: false,
                      },
                      flashMessage: {
                        type: String,
                        notify: true,
                      },
                      _error: String,
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["_inputChanged(email, _password)"];
                  },
                },
              ]
            );

            return CloudLogin;
          })(
            Object(
              _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("cloud-login", CloudLogin);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNsb3VkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FsZXhhLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dlYmhvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLWFjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1hbGV4YS1wcmVmLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtZ29vZ2xlLXByZWYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1yZW1vdGUtcHJlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLXdlYmhvb2tzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9zaG93LWRpYWxvZy1tYW5hZ2UtY2xvdWRob29rLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9sb2dpbi9jbG91ZC1sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhUHJvZ3Jlc3NCdXR0b24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtZ3JlZW4tNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIG13Yy1idXR0b24ge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQ7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIGlkPVwiYnV0dG9uXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1twcm9ncmVzc11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCI+PC9wYXBlci1zcGlubmVyPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzTGlzdCA9IHRoaXMuJC5jb250YWluZXIuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLmJ1dHRvblRhcHBlZChldikpO1xuICB9XG5cbiAgYnV0dG9uVGFwcGVkKGV2KSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MpIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYWN0aW9uU3VjY2VzcygpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcInN1Y2Nlc3NcIik7XG4gIH1cblxuICBhY3Rpb25FcnJvcigpIHtcbiAgICB0aGlzLnRlbXBDbGFzcyhcImVycm9yXCIpO1xuICB9XG5cbiAgY29tcHV0ZURpc2FibGVkKGRpc2FibGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBkaXNhYmxlZCB8fCBwcm9ncmVzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wcm9ncmVzcy1idXR0b25cIiwgSGFQcm9ncmVzc0J1dHRvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG5cbiAgICAvLyBjYWxsaW5nIHN1cGVyIGFmdGVyIHNldHRpbmcgaWNvbiB0byBoYXZlIGl0IGNvbnNpc3RlbnRseSBzaG93IHRoZSBpY29uIChvdGhlcndpc2Ugbm90IGFsd2F5cyBzaG93bilcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGV4YUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBkaXNwbGF5X2NhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICBpbnRlcmZhY2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPEFsZXhhRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9hbGV4YS9lbnRpdGllc1wiIH0pO1xuXG5leHBvcnQgY29uc3Qgc3luY0Nsb3VkQWxleGFFbnRpdGllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiY2xvdWQvYWxleGEvc3luY1wiIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYmhvb2sge1xuICB3ZWJob29rX2lkOiBzdHJpbmc7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdlYmhvb2tzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBQcm9taXNlPFdlYmhvb2tbXT4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwid2ViaG9vay9saXN0XCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuLypcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIG5hdmlnYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi4vLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4vY2xvdWQtd2ViaG9va3NcIjtcblxuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IFwiLi9jbG91ZC1hbGV4YS1wcmVmXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLWdvb2dsZS1wcmVmXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLXJlbW90ZS1wcmVmXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRBY2NvdW50IGV4dGVuZHMgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIHtcbiAgICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvdW50LXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zb29uIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm5vd3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiSkFWSVMgSG9tZSBDbG91ZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkpBVklTIEhvbWUgQ2xvdWQ8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciBiZWluZyBwYXJ0IG9mIEpBVklTIEhvbWUgQ2xvdWQuIEl0J3MgYmVjYXVzZSBvZlxuICAgICAgICAgICAgICAgIHBlb3BsZSBsaWtlIHlvdSB0aGF0IHdlIGFyZSBhYmxlIHRvIG1ha2UgYSBncmVhdCBob21lIGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICBleHBlcmllbmNlIGZvciBldmVyeW9uZS4gVGhhbmsgeW91IVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiTmFidSBDYXNhIEFjY291bnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY291bnQtcm93XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgW1tjbG91ZFN0YXR1cy5lbWFpbF1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeSBjbGFzcz1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tfZm9ybWF0U3Vic2NyaXB0aW9uKF9zdWJzY3JpcHRpb24pXV1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PiBDbG91ZCBjb25uZWN0aW9uIHN0YXR1cyA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+W1tjbG91ZFN0YXR1cy5jbG91ZF1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hY2NvdW50Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+PG13Yy1idXR0b24+TWFuYWdlIEFjY291bnQ8L213Yy1idXR0b24+PC9hXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0XCIgb24tY2xpY2s9XCJoYW5kbGVMb2dvdXRcIlxuICAgICAgICAgICAgICAgICAgPlNpZ24gb3V0PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+SW50ZWdyYXRpb25zPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEludGVncmF0aW9ucyBmb3IgSkFWSVMgSG9tZSBDbG91ZCBhbGxvdyB5b3UgdG8gY29ubmVjdCB3aXRoXG4gICAgICAgICAgICAgICAgc2VydmljZXMgaW4gdGhlIGNsb3VkIHdpdGhvdXQgaGF2aW5nIHRvIGV4cG9zZSB5b3VyIEhvbWVcbiAgICAgICAgICAgICAgICBBc3Npc3RhbnQgaW5zdGFuY2UgcHVibGljbHkgb24gdGhlIGludGVybmV0LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIENoZWNrIHRoZSB3ZWJzaXRlIGZvclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPmFsbCBhdmFpbGFibGUgZmVhdHVyZXM8L2FcbiAgICAgICAgICAgICAgICA+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGNsb3VkLXJlbW90ZS1wcmVmXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC1yZW1vdGUtcHJlZj5cblxuICAgICAgICAgICAgPGNsb3VkLWFsZXhhLXByZWZcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLWFsZXhhLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC1nb29nbGUtcHJlZlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtZ29vZ2xlLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC13ZWJob29rc1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtd2ViaG9va3M+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBjbG91ZFN0YXR1czogT2JqZWN0LFxuICAgICAgX3N1YnNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9mZXRjaFN1YnNjcmlwdGlvbkluZm8oKTtcbiAgfVxuXG4gIF9jb21wdXRlUmVtb3RlQ29ubmVjdGVkKGNvbm5lY3RlZCkge1xuICAgIHJldHVybiBjb25uZWN0ZWQgPyBcIkNvbm5lY3RlZFwiIDogXCJOb3QgQ29ubmVjdGVkXCI7XG4gIH1cblxuICBhc3luYyBfZmV0Y2hTdWJzY3JpcHRpb25JbmZvKCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGF3YWl0IGZldGNoQ2xvdWRTdWJzY3JpcHRpb25JbmZvKHRoaXMuaGFzcyk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnByb3ZpZGVyICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmNsb3VkICE9PSBcImNvbm5lY3RlZFwiXG4gICAgKSB7XG4gICAgICB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dvdXQoKSB7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9sb2dvdXRcIilcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZmlyZShcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpKTtcbiAgfVxuXG4gIF9mb3JtYXRTdWJzY3JpcHRpb24oc3ViSW5mbykge1xuICAgIGlmIChzdWJJbmZvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJGZXRjaGluZyBzdWJzY3JpcHRpb27igKZcIjtcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBzdWJJbmZvLmh1bWFuX2Rlc2NyaXB0aW9uO1xuXG4gICAgaWYgKHN1YkluZm8ucGxhbl9yZW5ld2FsX2RhdGUpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24ucmVwbGFjZShcbiAgICAgICAgXCJ7cGVyaW9kRW5kfVwiLFxuICAgICAgICBmb3JtYXREYXRlVGltZShcbiAgICAgICAgICBuZXcgRGF0ZShzdWJJbmZvLnBsYW5fcmVuZXdhbF9kYXRlICogMTAwMCksXG4gICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLWFjY291bnRcIiwgQ2xvdWRBY2NvdW50KTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgc3luY0Nsb3VkQWxleGFFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2FsZXhhXCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEFsZXhhUHJlZiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N5bmNpbmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWxleGFfZW5hYmxlZCwgYWxleGFfcmVwb3J0X3N0YXRlIH0gPSB0aGlzLmNsb3VkU3RhdHVzIS5wcmVmcztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiQWxleGFcIj5cbiAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAuY2hlY2tlZD0ke2FsZXhhX2VuYWJsZWR9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2VuYWJsZWRUb2dnbGVDaGFuZ2VkfVxuICAgICAgICA+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgV2l0aCB0aGUgQWxleGEgaW50ZWdyYXRpb24gZm9yIEpBVklTIEhvbWUgQ2xvdWQgeW91J2xsIGJlIGFibGUgdG9cbiAgICAgICAgICBjb250cm9sIGFsbCB5b3VyIEpBVklTIEhvbWUgZGV2aWNlcyB2aWEgYW55IEFsZXhhLWVuYWJsZWQgZGV2aWNlLlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9za2lsbHMtc3RvcmUuYW1hem9uLmNvbS9kZWVwbGluay9kcC9CMDc3MkoxUUtCP2RldmljZVR5cGU9YXBwXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW5hYmxlIHRoZSBKQVZJUyBIb21lIHNraWxsIGZvciBBbGV4YVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL2FtYXpvbl9hbGV4YS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb25maWcgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGVtXG4gICAgICAgICAgICA+VGhpcyBpbnRlZ3JhdGlvbiByZXF1aXJlcyBhbiBBbGV4YS1lbmFibGVkIGRldmljZSBsaWtlIHRoZSBBbWF6b25cbiAgICAgICAgICAgIEVjaG8uPC9lbVxuICAgICAgICAgID5cbiAgICAgICAgICAke2FsZXhhX2VuYWJsZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aDM+RW5hYmxlIFN0YXRlIFJlcG9ydGluZzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBJZiB5b3UgZW5hYmxlIHN0YXRlIHJlcG9ydGluZywgSkFWSVMgSG9tZSB3aWxsIHNlbmRcbiAgICAgICAgICAgICAgICAgIDxiPmFsbDwvYj4gc3RhdGUgY2hhbmdlcyBvZiBleHBvc2VkIGVudGl0aWVzIHRvIEFtYXpvbi4gVGhpc1xuICAgICAgICAgICAgICAgICAgYWxsb3dzIHlvdSB0byBhbHdheXMgc2VlIHRoZSBsYXRlc3Qgc3RhdGVzIGluIHRoZSBBbGV4YSBhcHBcbiAgICAgICAgICAgICAgICAgIGFuZCB1c2UgdGhlIHN0YXRlIGNoYW5nZXMgdG8gY3JlYXRlIHJvdXRpbmVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHthbGV4YV9yZXBvcnRfc3RhdGV9XG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fcmVwb3J0VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICA+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5faGFuZGxlU3luY30gLmRpc2FibGVkPSR7dGhpcy5fc3luY2luZ30+XG4gICAgICAgICAgICBTeW5jIEVudGl0aWVzXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9jbG91ZC9hbGV4YVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24+TWFuYWdlIEVudGl0aWVzPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVN5bmMoKSB7XG4gICAgdGhpcy5fc3luY2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN5bmNDbG91ZEFsZXhhRW50aXRpZXModGhpcy5oYXNzISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIHN5bmMgZW50aXRpZXM6ICR7ZXJyLmJvZHkubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3luY2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZWRUb2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIFBhcGVyVG9nZ2xlQnV0dG9uRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHsgYWxleGFfZW5hYmxlZDogdG9nZ2xlLmNoZWNrZWQhIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZXBvcnRUb2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIFBhcGVyVG9nZ2xlQnV0dG9uRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHtcbiAgICAgICAgYWxleGFfcmVwb3J0X3N0YXRlOiB0b2dnbGUuY2hlY2tlZCEsXG4gICAgICB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGBVbmFibGUgdG8gJHt0b2dnbGUuY2hlY2tlZCA/IFwiZW5hYmxlXCIgOiBcImRpc2FibGVcIn0gcmVwb3J0IHN0YXRlLiAke1xuICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQgPiBwYXBlci10b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgaDMgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGEtcHJlZlwiOiBDbG91ZEFsZXhhUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1hbGV4YS1wcmVmXCIsIENsb3VkQWxleGFQcmVmKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b24vcGFwZXItdG9nZ2xlLWJ1dHRvblwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuZXhwb3J0IGNsYXNzIENsb3VkR29vZ2xlUHJlZiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBjbG91ZFN0YXR1czoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvdWRTdGF0dXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgZ29vZ2xlX2VuYWJsZWQsXG4gICAgICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluLFxuICAgIH0gPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJHb29nbGUgQXNzaXN0YW50XCI+XG4gICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgaWQ9XCJnb29nbGVfZW5hYmxlZFwiXG4gICAgICAgICAgLmNoZWNrZWQ9XCIke2dvb2dsZV9lbmFibGVkfVwiXG4gICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdG9nZ2xlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgV2l0aCB0aGUgR29vZ2xlIEFzc2lzdGFudCBpbnRlZ3JhdGlvbiBmb3IgSkFWSVMgSG9tZSBDbG91ZCB5b3UnbGwgYmVcbiAgICAgICAgICBhYmxlIHRvIGNvbnRyb2wgYWxsIHlvdXIgSkFWSVMgSG9tZSBkZXZpY2VzIHZpYSBhbnkgR29vZ2xlXG4gICAgICAgICAgQXNzaXN0YW50LWVuYWJsZWQgZGV2aWNlLlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hc3Npc3RhbnQuZ29vZ2xlLmNvbS9zZXJ2aWNlcy9hL3VpZC8wMDAwMDA5MWZkNWZiODc1P2hsPWVuLVVTXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWN0aXZhdGUgdGhlIEpBVklTIEhvbWUgc2tpbGwgZm9yIEdvb2dsZSBBc3Npc3RhbnRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tL2NvbmZpZy9nb29nbGVfYXNzaXN0YW50L1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvbmZpZyBkb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZW1cbiAgICAgICAgICAgID5UaGlzIGludGVncmF0aW9uIHJlcXVpcmVzIGEgR29vZ2xlIEFzc2lzdGFudC1lbmFibGVkIGRldmljZSBsaWtlXG4gICAgICAgICAgICB0aGUgR29vZ2xlIEhvbWUgb3IgQW5kcm9pZCBwaG9uZS48L2VtXG4gICAgICAgICAgPlxuICAgICAgICAgICR7Z29vZ2xlX2VuYWJsZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdXJlX2RldmljZXNcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHBpbiB0byBpbnRlcmFjdCB3aXRoIHNlY3VyaXR5IGRldmljZXMuIFNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICBkZXZpY2VzIGFyZSBkb29ycywgZ2FyYWdlIGRvb3JzIGFuZCBsb2Nrcy4gWW91IHdpbGwgYmUgYXNrZWRcbiAgICAgICAgICAgICAgICAgIHRvIHNheS9lbnRlciB0aGlzIHBpbiB3aGVuIGludGVyYWN0aW5nIHdpdGggc3VjaCBkZXZpY2VzIHZpYVxuICAgICAgICAgICAgICAgICAgR29vZ2xlIEFzc2lzdGFudC5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlY3VyZSBEZXZpY2VzIFBpblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VjdXJlIGRldmljZXMgZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtnb29nbGVfc2VjdXJlX2RldmljZXNfcGluIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3BpbkNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGhhLWNhbGwtYXBpLWJ1dHRvblxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmRpc2FibGVkPVwiJHshZ29vZ2xlX2VuYWJsZWR9XCJcbiAgICAgICAgICAgIHBhdGg9XCJjbG91ZC9nb29nbGVfYWN0aW9ucy9zeW5jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTeW5jIGVudGl0aWVzIHRvIEdvb2dsZVxuICAgICAgICAgIDwvaGEtY2FsbC1hcGktYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9jbG91ZC9nb29nbGUtYXNzaXN0YW50XCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbj5NYW5hZ2UgRW50aXRpZXM8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHRvZ2dsZSA9IGV2LnRhcmdldCBhcyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7IFt0b2dnbGUuaWRdOiB0b2dnbGUuY2hlY2tlZCEgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3BpbkNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlQ2xvdWRQcmVmKHRoaXMuaGFzcyEsIHtcbiAgICAgICAgW2lucHV0LmlkXTogaW5wdXQudmFsdWUgfHwgbnVsbCxcbiAgICAgIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgVW5hYmxlIHRvIHN0b3JlIHBpbjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5jbG91ZFN0YXR1cyEucHJlZnMuZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpbjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgaGEtY2FyZCA+IHBhcGVyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICBtYXJnaW46IC00cHggMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICBoYS1jYWxsLWFwaS1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuc2VjdXJlX2RldmljZXMge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1wcmVmXCI6IENsb3VkR29vZ2xlUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1nb29nbGUtcHJlZlwiLCBDbG91ZEdvb2dsZVByZWYpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlclRvZ2dsZUJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjb25uZWN0Q2xvdWRSZW1vdGUsXG4gIGRpc2Nvbm5lY3RDbG91ZFJlbW90ZSxcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLXJlbW90ZS1wcmVmXCIpXG5leHBvcnQgY2xhc3MgQ2xvdWRSZW1vdGVQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGNsb3VkU3RhdHVzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICByZW1vdGVfY29ubmVjdGVkLFxuICAgICAgcmVtb3RlX2RvbWFpbixcbiAgICAgIHJlbW90ZV9jZXJ0aWZpY2F0ZSxcbiAgICB9ID0gdGhpcy5jbG91ZFN0YXR1cztcblxuICAgIGlmICghcmVtb3RlX2NlcnRpZmljYXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiUmVtb3RlIENvbnRyb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlcGFyaW5nXCI+XG4gICAgICAgICAgICBSZW1vdGUgYWNjZXNzIGlzIGJlaW5nIHByZXBhcmVkLiBXZSB3aWxsIG5vdGlmeSB5b3Ugd2hlbiBpdCdzIHJlYWR5LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiUmVtb3RlIENvbnRyb2xcIj5cbiAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAuY2hlY2tlZD1cIiR7cmVtb3RlX2Nvbm5lY3RlZH1cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3RvZ2dsZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIEpBVklTIEhvbWUgQ2xvdWQgcHJvdmlkZXMgYSBzZWN1cmUgcmVtb3RlIGNvbm5lY3Rpb24gdG8geW91ciBpbnN0YW5jZVxuICAgICAgICAgIHdoaWxlIGF3YXkgZnJvbSBob21lLiBZb3VyIGluc3RhbmNlXG4gICAgICAgICAgJHtyZW1vdGVfY29ubmVjdGVkID8gXCJpc1wiIDogXCJ3aWxsIGJlXCJ9IGF2YWlsYWJsZSBhdFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovLyR7cmVtb3RlX2RvbWFpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIGh0dHBzOi8vJHtyZW1vdGVfZG9tYWlufTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvcmVtb3RlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24+TGVhcm4gaG93IGl0IHdvcmtzPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAke3JlbW90ZV9jZXJ0aWZpY2F0ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vcGVuQ2VydEluZm99PlxuICAgICAgICAgICAgICAgICAgQ2VydGlmaWNhdGUgSW5mb1xuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkNlcnRJbmZvKCkge1xuICAgIHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nKHRoaXMsIHtcbiAgICAgIGNlcnRpZmljYXRlSW5mbzogdGhpcy5jbG91ZFN0YXR1cyEucmVtb3RlX2NlcnRpZmljYXRlISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgUGFwZXJUb2dnbGVCdXR0b25FbGVtZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuICAgICAgICBhd2FpdCBjb25uZWN0Q2xvdWRSZW1vdGUodGhpcy5oYXNzISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBkaXNjb25uZWN0Q2xvdWRSZW1vdGUodGhpcy5oYXNzISk7XG4gICAgICB9XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5wcmVwYXJpbmcge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkID4gcGFwZXItdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogLTRweCAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC1yZW1vdGUtcHJlZlwiOiBDbG91ZFJlbW90ZVByZWY7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFdlYmhvb2tFcnJvciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgV2ViaG9vaywgZmV0Y2hXZWJob29rcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3dlYmhvb2tcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNsb3VkaG9vayxcbiAgZGVsZXRlQ2xvdWRob29rLFxuICBDbG91ZFdlYmhvb2ssXG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjtcblxuZXhwb3J0IGNsYXNzIENsb3VkV2ViaG9va3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBwcml2YXRlIF9jbG91ZEhvb2tzPzogeyBbd2ViaG9va0lkOiBzdHJpbmddOiBDbG91ZFdlYmhvb2sgfTtcbiAgcHJpdmF0ZSBfbG9jYWxIb29rcz86IFdlYmhvb2tbXTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3M6IHN0cmluZ1tdO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgY2xvdWRTdGF0dXM6IHt9LFxuICAgICAgX2Nsb3VkSG9va3M6IHt9LFxuICAgICAgX2xvY2FsSG9va3M6IHt9LFxuICAgICAgX3Byb2dyZXNzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wcm9ncmVzcyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnJlbmRlclN0eWxlKCl9XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJXZWJob29rc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgQW55dGhpbmcgdGhhdCBpcyBjb25maWd1cmVkIHRvIGJlIHRyaWdnZXJlZCBieSBhIHdlYmhvb2sgY2FuIGJlIGdpdmVuXG4gICAgICAgICAgYSBwdWJsaWNseSBhY2Nlc3NpYmxlIFVSTCB0byBhbGxvdyB5b3UgdG8gc2VuZCBkYXRhIGJhY2sgdG8gSG9tZVxuICAgICAgICAgIEFzc2lzdGFudCBmcm9tIGFueXdoZXJlLCB3aXRob3V0IGV4cG9zaW5nIHlvdXIgaW5zdGFuY2UgdG8gdGhlXG4gICAgICAgICAgaW50ZXJuZXQuICR7dGhpcy5fcmVuZGVyQm9keSgpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvd2ViaG9va3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBjcmVhdGluZyB3ZWJob29rLXBvd2VyZWQgYXV0b21hdGlvbnMuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikgJiYgdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgdGhpcy5fY2xvdWRIb29rcyA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnMuY2xvdWRob29rcyB8fCB7fTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJCb2R5KCkge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cyB8fCAhdGhpcy5fbG9jYWxIb29rcyB8fCAhdGhpcy5fY2xvdWRIb29rcykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LXRleHRcIj5Mb2FkaW5n4oCmPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sb2NhbEhvb2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LXRleHRcIj5cbiAgICAgICAgICBMb29rcyBsaWtlIHlvdSBoYXZlIG5vIHdlYmhvb2tzIHlldC4gR2V0IHN0YXJ0ZWQgYnkgY29uZmlndXJpbmcgYVxuICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9uc1wiPndlYmhvb2stYmFzZWQgaW50ZWdyYXRpb248L2E+IG9yIGJ5XG4gICAgICAgICAgY3JlYXRpbmcgYSA8YSBocmVmPVwiL2NvbmZpZy9hdXRvbWF0aW9uL25ld1wiPndlYmhvb2sgYXV0b21hdGlvbjwvYT4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbG9jYWxIb29rcy5tYXAoXG4gICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWJob29rXCIgLmVudHJ5PVwiJHtlbnRyeX1cIj5cbiAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgJHtlbnRyeS5uYW1lfVxuICAgICAgICAgICAgICAke2VudHJ5LmRvbWFpbiA9PT0gZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBgICgke2VudHJ5LmRvbWFpbn0pYH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+JHtlbnRyeS53ZWJob29rX2lkfTwvZGl2PlxuICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICR7dGhpcy5fcHJvZ3Jlc3MuaW5jbHVkZXMoZW50cnkud2ViaG9va19pZClcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogdGhpcy5fY2xvdWRIb29rcyFbZW50cnkud2ViaG9va19pZF1cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZU1hbmFnZUJ1dHRvbn1cIj5cbiAgICAgICAgICAgICAgICAgIE1hbmFnZVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2VuYWJsZVdlYmhvb2t9XCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd0RpYWxvZyh3ZWJob29rSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHdlYmhvb2sgPSB0aGlzLl9sb2NhbEhvb2tzIS5maW5kKFxuICAgICAgKGVudCkgPT4gZW50LndlYmhvb2tfaWQgPT09IHdlYmhvb2tJZFxuICAgICkhO1xuICAgIGNvbnN0IGNsb3VkaG9vayA9IHRoaXMuX2Nsb3VkSG9va3MhW3dlYmhvb2tJZF07XG4gICAgc2hvd01hbmFnZUNsb3VkaG9va0RpYWxvZyh0aGlzLCB7XG4gICAgICB3ZWJob29rLFxuICAgICAgY2xvdWRob29rLFxuICAgICAgZGlzYWJsZUhvb2s6ICgpID0+IHRoaXMuX2Rpc2FibGVXZWJob29rKHdlYmhvb2tJZCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYW5hZ2VCdXR0b24oZXY6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBlbnRyeSA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkucGFyZW50RWxlbWVudC5lbnRyeSBhcyBXZWJob29rO1xuICAgIHRoaXMuX3Nob3dEaWFsb2coZW50cnkud2ViaG9va19pZCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9lbmFibGVXZWJob29rKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnkgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnBhcmVudEVsZW1lbnQuZW50cnk7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbLi4udGhpcy5fcHJvZ3Jlc3MsIGVudHJ5LndlYmhvb2tfaWRdO1xuICAgIGxldCB1cGRhdGVkV2ViaG9vaztcblxuICAgIHRyeSB7XG4gICAgICB1cGRhdGVkV2ViaG9vayA9IGF3YWl0IGNyZWF0ZUNsb3VkaG9vayh0aGlzLmhhc3MhLCBlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KChlcnIgYXMgV2ViaG9va0Vycm9yKS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB0aGlzLl9wcm9ncmVzcy5maWx0ZXIoKHdpZCkgPT4gd2lkICE9PSBlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jbG91ZEhvb2tzID0ge1xuICAgICAgLi4udGhpcy5fY2xvdWRIb29rcyxcbiAgICAgIFtlbnRyeS53ZWJob29rX2lkXTogdXBkYXRlZFdlYmhvb2ssXG4gICAgfTtcblxuICAgIC8vIE9ubHkgb3BlbiBkaWFsb2cgaWYgd2UncmUgbm90IGFsc28gZW5hYmxpbmcgb3RoZXJzLCBvdGhlcndpc2UgaXQncyBjb25mdXNpbmdcbiAgICBpZiAodGhpcy5fcHJvZ3Jlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93RGlhbG9nKGVudHJ5LndlYmhvb2tfaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGVXZWJob29rKHdlYmhvb2tJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3MgPSBbLi4udGhpcy5fcHJvZ3Jlc3MsIHdlYmhvb2tJZF07XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZUNsb3VkaG9vayh0aGlzLmhhc3MhLCB3ZWJob29rSWQhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBGYWlsZWQgdG8gZGlzYWJsZSB3ZWJob29rOiAkeyhlcnIgYXMgV2ViaG9va0Vycm9yKS5tZXNzYWdlfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9wcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzLmZpbHRlcigod2lkKSA9PiB3aWQgIT09IHdlYmhvb2tJZCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGNsb3VkIHJlbGF0ZWQgcGFydHMgZnJvbSBlbnRyeS5cbiAgICBjb25zdCB7IFt3ZWJob29rSWRdOiBkaXNhYmxlZEhvb2ssIC4uLm5ld0hvb2tzIH0gPSB0aGlzLl9jbG91ZEhvb2tzITtcbiAgICB0aGlzLl9jbG91ZEhvb2tzID0gbmV3SG9va3M7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgdGhpcy5fbG9jYWxIb29rcyA9IHRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJ3ZWJob29rXCIpXG4gICAgICA/IGF3YWl0IGZldGNoV2ViaG9va3ModGhpcy5oYXNzISlcbiAgICAgIDogW107XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0eWxlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuYm9keS10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgfVxuICAgICAgICAud2ViaG9vayB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3Mge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHktdGV4dCBhLFxuICAgICAgICAuZm9vdGVyIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC13ZWJob29rc1wiOiBDbG91ZFdlYmhvb2tzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLXdlYmhvb2tzXCIsIENsb3VkV2ViaG9va3MpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ2VydGlmaWNhdGVJbmZvcm1hdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRDZXJ0aWZpY2F0ZVBhcmFtcyB7XG4gIGNlcnRpZmljYXRlSW5mbzogQ2VydGlmaWNhdGVJbmZvcm1hdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgd2ViaG9va0RpYWxvZ1BhcmFtczogQ2xvdWRDZXJ0aWZpY2F0ZVBhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCIgKi8gXCIuL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiKSxcbiAgICBkaWFsb2dQYXJhbXM6IHdlYmhvb2tEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFdlYmhvb2sgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS93ZWJob29rXCI7XG5pbXBvcnQgeyBDbG91ZFdlYmhvb2sgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYmhvb2tEaWFsb2dQYXJhbXMge1xuICB3ZWJob29rOiBXZWJob29rO1xuICBjbG91ZGhvb2s6IENsb3VkV2ViaG9vaztcbiAgZGlzYWJsZUhvb2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgd2ViaG9va0RpYWxvZ1BhcmFtczogV2ViaG9va0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC13ZWJob29rLW1hbmFnZS1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIiksXG4gICAgZGlhbG9nUGFyYW1zOiB3ZWJob29rRGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgXCIuL2FjY291bnQvY2xvdWQtYWNjb3VudFwiO1xuaW1wb3J0IFwiLi9sb2dpbi9jbG91ZC1sb2dpblwiO1xuaW1wb3J0IHtcbiAgSGFzc1JvdXRlclBhZ2UsXG4gIFJvdXRlck9wdGlvbnMsXG59IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgTE9HR0VEX0lOX1VSTFMgPSBbXCJhY2NvdW50XCIsIFwiZ29vZ2xlLWFzc2lzdGFudFwiLCBcImFsZXhhXCJdO1xuY29uc3QgTk9UX0xPR0dFRF9JTl9VUkxTID0gW1wibG9naW5cIiwgXCJyZWdpc3RlclwiLCBcImZvcmdvdC1wYXNzd29yZFwiXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctY2xvdWRcIilcbmNsYXNzIEhhQ29uZmlnQ2xvdWQgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzITogQ2xvdWRTdGF0dXM7XG5cbiAgcHJvdGVjdGVkIHJvdXRlck9wdGlvbnM6IFJvdXRlck9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdFBhZ2U6IFwibG9naW5cIixcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICBpbml0aWFsTG9hZDogKCkgPT4gdGhpcy5fY2xvdWRTdGF0dXNMb2FkZWQsXG4gICAgLy8gR3VhcmQgdGhlIGRpZmZlcmVudCBwYWdlcyBiYXNlZCBvbiBpZiB3ZSdyZSBsb2dnZWQgaW4uXG4gICAgYmVmb3JlUmVuZGVyOiAocGFnZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4pIHtcbiAgICAgICAgaWYgKCFMT0dHRURfSU5fVVJMUy5pbmNsdWRlcyhwYWdlKSkge1xuICAgICAgICAgIHJldHVybiBcImFjY291bnRcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFOT1RfTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXMocGFnZSkpIHtcbiAgICAgICAgICByZXR1cm4gXCJsb2dpblwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgcm91dGVzOiB7XG4gICAgICBsb2dpbjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtbG9naW5cIixcbiAgICAgIH0sXG4gICAgICByZWdpc3Rlcjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtcmVnaXN0ZXJcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1yZWdpc3RlclwiICovIFwiLi9yZWdpc3Rlci9jbG91ZC1yZWdpc3RlclwiKSxcbiAgICAgIH0sXG4gICAgICBcImZvcmdvdC1wYXNzd29yZFwiOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIiAqLyBcIi4vZm9yZ290LXBhc3N3b3JkL2Nsb3VkLWZvcmdvdC1wYXNzd29yZFwiKSxcbiAgICAgIH0sXG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1hY2NvdW50XCIsXG4gICAgICB9LFxuICAgICAgXCJnb29nbGUtYXNzaXN0YW50XCI6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIgKi8gXCIuL2dvb2dsZS1hc3Npc3RhbnQvY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiKSxcbiAgICAgIH0sXG4gICAgICBhbGV4YToge1xuICAgICAgICB0YWc6IFwiY2xvdWQtYWxleGFcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjbG91ZC1hbGV4YVwiICovIFwiLi9hbGV4YS9jbG91ZC1hbGV4YVwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mbGFzaE1lc3NhZ2UgPSBcIlwiO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2dpbkVtYWlsID0gXCJcIjtcbiAgcHJpdmF0ZSBfcmVzb2x2ZUNsb3VkU3RhdHVzTG9hZGVkITogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY2xvdWRTdGF0dXNMb2FkZWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHRoaXMuX3Jlc29sdmVDbG91ZFN0YXR1c0xvYWRlZCA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xvdWQtZG9uZVwiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX2ZsYXNoTWVzc2FnZSA9IChldiBhcyBhbnkpLmRldGFpbC5mbGFzaE1lc3NhZ2U7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvY2xvdWQvbG9naW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpKSB7XG4gICAgICBjb25zdCBvbGRTdGF0dXMgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiY2xvdWRTdGF0dXNcIikgYXNcbiAgICAgICAgfCBDbG91ZFN0YXR1c1xuICAgICAgICB8IHVuZGVmaW5lZDtcbiAgICAgIGlmIChvbGRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlQ2xvdWRTdGF0dXNMb2FkZWQoKTtcbiAgICAgIH0gZWxzZSBpZiAob2xkU3RhdHVzLmxvZ2dlZF9pbiAhPT0gdGhpcy5jbG91ZFN0YXR1cy5sb2dnZWRfaW4pIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgdGhpcy5yb3V0ZS5wcmVmaXgsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50KHRhZzogc3RyaW5nKSB7XG4gICAgY29uc3QgZWwgPSBzdXBlci5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImVtYWlsLWNoYW5nZWRcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9sb2dpbkVtYWlsID0gKGV2IGFzIFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikuZGV0YWlsLnZhbHVlO1xuICAgIH0pO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmbGFzaC1tZXNzYWdlLWNoYW5nZWRcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9mbGFzaE1lc3NhZ2UgPSAoZXYgYXMgUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KS5kZXRhaWwudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCkge1xuICAgIC8vIFdlIGFyZSBub3QgZ29pbmcgdG8gdXBkYXRlIGlmIHRoZSBjdXJyZW50IHBhZ2UgaWYgd2UgYXJlIG5vdCBsb2dnZWQgaW5cbiAgICAvLyBhbmQgdGhlIGN1cnJlbnQgcGFnZSByZXF1aXJlcyBiZWluZyBsb2dnZWQgaW4uIEhhcHBlbnMgd2hlbiB3ZSBsb2cgb3V0LlxuICAgIGlmIChcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMgJiZcbiAgICAgICF0aGlzLmNsb3VkU3RhdHVzLmxvZ2dlZF9pbiAmJlxuICAgICAgTE9HR0VEX0lOX1VSTFMuaW5jbHVkZXModGhpcy5fY3VycmVudFBhZ2UpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIGVsKSB7XG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGhhdmUgUG9seW1lciBwYWdlc1xuICAgICAgKGVsIGFzIFBvbHltZXJFbGVtZW50KS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICBlbWFpbDogdGhpcy5fbG9naW5FbWFpbCxcbiAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgY2xvdWRTdGF0dXM6IHRoaXMuY2xvdWRTdGF0dXMsXG4gICAgICAgIGZsYXNoTWVzc2FnZTogdGhpcy5fZmxhc2hNZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgICBlbC5lbWFpbCA9IHRoaXMuX2xvZ2luRW1haWw7XG4gICAgICBlbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgICAgZWwuY2xvdWRTdGF0dXMgPSB0aGlzLmNsb3VkU3RhdHVzO1xuICAgICAgZWwuZmxhc2hNZXNzYWdlID0gdGhpcy5fZmxhc2hNZXNzYWdlO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLWNsb3VkXCI6IEhhQ29uZmlnQ2xvdWQ7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcbi8qXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRMb2dpbiBleHRlbmRzIE5hdmlnYXRlTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0ge1xuICAgICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZsYXNoLW1zZyB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZmxhc2gtbXNnIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgcmlnaHQ6IDhweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJDbG91ZCBMb2dpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPkpBVklTIEhvbWUgQ2xvdWQ8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSkFWSVMgSG9tZSBDbG91ZCBwcm92aWRlcyB5b3Ugd2l0aCBhIHNlY3VyZSByZW1vdGUgY29ubmVjdGlvbiB0b1xuICAgICAgICAgICAgICAgIHlvdXIgaW5zdGFuY2Ugd2hpbGUgYXdheSBmcm9tIGhvbWUuIEl0IGFsc28gYWxsb3dzIHlvdSB0b1xuICAgICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBjbG91ZC1vbmx5IHNlcnZpY2VzOiBBbWF6b24gQWxleGEgYW5kIEdvb2dsZVxuICAgICAgICAgICAgICAgIEFzc2lzdGFudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUaGlzIHNlcnZpY2UgaXMgcnVuIGJ5IG91ciBwYXJ0bmVyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+TmFidSZuYnNwO0Nhc2EsJm5ic3A7SW5jPC9hXG4gICAgICAgICAgICAgICAgPiwgYSBjb21wYW55IGZvdW5kZWQgYnkgdGhlIGZvdW5kZXJzIG9mIEpBVklTIEhvbWUgYW5kIEhhc3MuaW8uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSkFWSVMgSG9tZSBDbG91ZCBpcyBhIHN1YnNjcmlwdGlvbiBzZXJ2aWNlIHdpdGggYSBmcmVlIG9uZSBtb250aFxuICAgICAgICAgICAgICAgIHRyaWFsLiBObyBwYXltZW50IGluZm9ybWF0aW9uIG5lY2Vzc2FyeS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgID5MZWFybiBtb3JlIGFib3V0IEpBVklTIEhvbWUgQ2xvdWQ8L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGEtY2FyZCBoaWRkZW4kPVwiW1shZmxhc2hNZXNzYWdlXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBmbGFzaC1tc2dcIj5cbiAgICAgICAgICAgICAgICBbW2ZsYXNoTWVzc2FnZV1dXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJoYXNzOmNsb3NlXCIgb24tY2xpY2s9XCJfZGlzbWlzc0ZsYXNoXCJcbiAgICAgICAgICAgICAgICAgID5EaXNtaXNzPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItcmlwcGxlIGlkPVwiZmxhc2hSaXBwbGVcIiBub2luaz1cIlwiPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiU2lnbiBpblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgaGlkZGVuJD1cIltbIV9lcnJvcl1dXCI+W1tfZXJyb3JdXTwvZGl2PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7ZW1haWx9fVwiXG4gICAgICAgICAgICAgICAgICBvbi1rZXlkb3duPVwiX2tleURvd25cIlxuICAgICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgZW1haWxcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tfcGFzc3dvcmR9fVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9rZXlEb3duXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJQYXNzd29yZHMgYXJlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlTG9naW5cIlxuICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9XCJbW19yZXF1ZXN0SW5Qcm9ncmVzc11dXCJcbiAgICAgICAgICAgICAgICAgID5TaWduIGluPC9oYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbj1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlRm9yZ290UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvbi1jbGljaz1cIl9oYW5kbGVSZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIFN0YXJ0IHlvdXIgZnJlZSAxIG1vbnRoIHRyaWFsXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPk5vIHBheW1lbnQgaW5mb3JtYXRpb24gbmVjZXNzYXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3Bhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBmbGFzaE1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfaW5wdXRDaGFuZ2VkKGVtYWlsLCBfcGFzc3dvcmQpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5mbGFzaE1lc3NhZ2UpIHtcbiAgICAgIC8vIFdhaXQgZm9yIERPTSB0byBiZSBkcmF3blxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLiQuZmxhc2hSaXBwbGUuc2ltdWxhdGVkUmlwcGxlKCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIF9pbnB1dENoYW5nZWQoKSB7XG4gICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Vycm9yID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVMb2dpbigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlTG9naW4oKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5lbWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcbiAgICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5lbWFpbC5mb2N1cygpO1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIHRoaXMuJC5wYXNzd29yZC5pbnZhbGlkID0gdHJ1ZTtcblxuICAgICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiQucGFzc3dvcmQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9sb2dpblwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBfcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAvLyBEbyB0aGlzIGJlZm9yZSBzZXRQcm9wZXJ0aWVzIGJlY2F1c2UgY2hhbmdpbmcgaXQgY2xlYXJzIGVycm9ycy5cbiAgICAgICAgICB0aGlzLl9wYXNzd29yZCA9IFwiXCI7XG5cbiAgICAgICAgICBjb25zdCBlcnJDb2RlID0gZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5LmNvZGU7XG4gICAgICAgICAgaWYgKGVyckNvZGUgPT09IFwiUGFzc3dvcmRDaGFuZ2VSZXF1aXJlZFwiKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBuZWVkIHRvIGNoYW5nZSB5b3VyIHBhc3N3b3JkIGJlZm9yZSBsb2dnaW5nIGluLlwiKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2Nsb3VkL2ZvcmdvdC1wYXNzd29yZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGVyckNvZGUgPT09IFwiVXNlck5vdENvbmZpcm1lZFwiKSB7XG4gICAgICAgICAgICBwcm9wcy5fZXJyb3IgPSBcIllvdSBuZWVkIHRvIGNvbmZpcm0geW91ciBlbWFpbCBiZWZvcmUgbG9nZ2luZyBpbi5cIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuICAgICAgICAgIHRoaXMuJC5lbWFpbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgX2hhbmRsZVJlZ2lzdGVyKCkge1xuICAgIHRoaXMuZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLm5hdmlnYXRlKFwiL2NvbmZpZy9jbG91ZC9yZWdpc3RlclwiKTtcbiAgfVxuXG4gIF9oYW5kbGVGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkXCIpO1xuICB9XG5cbiAgX2Rpc21pc3NGbGFzaCgpIHtcbiAgICAvLyBnaXZlIHNvbWUgdGltZSB0byBsZXQgdGhlIHJpcHBsZSBmaW5pc2guXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgfSwgMjAwKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1sb2dpblwiLCBDbG91ZExvZ2luKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFRQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBOUZBO0FBQ0E7QUE4Q0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTs7OztBQWxFQTtBQUNBO0FBaUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQVRBO0FBQ0E7QUFEQTtBQUFBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlLQUFBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFEQTtBQUFBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQW1JQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBREE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUtBO0FBQ0E7QUFtSEE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7Ozs7QUFqSUE7QUFDQTtBQWlMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVNQTtBQVFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBT0E7QUEwREE7QUF0RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF6RUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFJQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcEZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUtBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErR0E7QUEwQkE7QUF6SUE7QUFBQTtBQUFBO0FBa0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFVQTtBQWtFQTtBQXZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEZBO0FBMUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUE2RkE7QUE3RkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0ZBO0FBQ0E7QUFoR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvR0E7QUFwR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlHQTtBQXpHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUEyR0E7QUFDQTtBQUNBO0FBN0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFBQTtBQUFBO0FBaUhBO0FBOEJBO0FBL0lBO0FBQ0E7QUFEQTtBQUFBO0FBd0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUtBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQTZCQTtBQTdEQTtBQUFBO0FBQUE7QUFBQTtBQWdFQTtBQUNBO0FBREE7QUFHQTtBQW5FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBVEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0ZBO0FBdUJBO0FBN0dBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFmQTtBQUNBO0FBZ0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBR0E7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBNEJBO0FBaUJBO0FBN0NBO0FBQUE7QUFBQTtBQWdEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwREE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBK0JBO0FBdkdBO0FBQUE7QUFBQTtBQXlHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFuSEE7QUFBQTtBQUFBO0FBc0hBO0FBQ0E7QUFBQTtBQUNBO0FBeEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEySEE7QUFDQTtBQTVIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0lBO0FBaElBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWtJQTtBQWxJQTtBQUNBO0FBREE7QUFBQTtBQXFJQTtBQUFBO0FBQUE7QUFySUE7QUFDQTtBQURBO0FBd0lBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWpKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBb0pBO0FBcEpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3SkE7QUF4SkE7QUFDQTtBQURBO0FBQUE7QUEySkE7QUFBQTtBQUFBO0FBM0pBO0FBQ0E7QUFEQTtBQThKQTtBQTlKQTtBQWdLQTtBQUNBO0FBaktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFvS0E7QUFDQTtBQXJLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBd0JBO0FBbE1BO0FBQ0E7QUFEQTtBQUFBO0FBMk1BOzs7Ozs7Ozs7Ozs7QUNqT0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUFBLGdpQkFDQTtBQURBO0FBRUE7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUFBLGltQkFDQTtBQURBO0FBRUE7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBLDZOQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBLHVRQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBLDRaQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBLDBWQUNBO0FBREE7QUFGQTtBQXRCQTtBQWpCQTs7OztBQStDQTs7O0FBQUE7Ozs7QUFDQTs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBM0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQXFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTNRQTtBQUNBO0FBcUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFuQkE7QUFxQkE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQW5LQTtBQUNBO0FBOFFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
