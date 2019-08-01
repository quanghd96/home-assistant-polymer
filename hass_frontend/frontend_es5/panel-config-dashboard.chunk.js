(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-dashboard"],
  {
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

    /***/ "./src/panels/config/dashboard/ha-config-dashboard.js":
      /*!************************************************************!*\
  !*** ./src/panels/config/dashboard/ha-config-dashboard.js ***!
  \************************************************************/
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
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _ha_config_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./ha-config-navigation */ "./src/panels/config/dashboard/ha-config-navigation.ts"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
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
            '\n    <style include="iron-flex ha-style">\n      ha-card {\n        overflow: hidden;\n      }\n      .content {\n        padding-bottom: 32px;\n      }\n      ha-card a {\n        text-decoration: none;\n        color: var(--primary-text-color);\n      }\n      .promo-advanced {\n        text-align: center;\n        color: var(--secondary-text-color);\n      }\n      .promo-advanced a {\n        color: var(--secondary-text-color);\n      }\n    </style>\n\n    <app-header-layout has-scrolling-region="">\n      <app-header slot="header" fixed="">\n        <app-toolbar>\n          <ha-menu-button hass=\'[[hass]]\' narrow=\'[[narrow]]\'></ha-menu-button>\n          <div main-title="">[[localize(\'panel.config\')]]</div>\n        </app-toolbar>\n      </app-header>\n\n      <div class="content">\n        <ha-config-section is-wide="[[isWide]]">\n          <span slot="header">[[localize(\'ui.panel.config.header\')]]</span>\n          <span slot="introduction">[[localize(\'ui.panel.config.introduction\')]]</span>\n\n          <template is="dom-if" if="[[computeIsLoaded(hass, \'cloud\')]]">\n            <ha-card>\n              <a href=\'/config/cloud\' tabindex="-1">\n                <paper-item>\n                  <paper-item-body two-line="">\n                    [[localize(\'ui.panel.config.cloud.caption\')]]\n                    <template is="dom-if" if="[[cloudStatus.logged_in]]">\n                      <div secondary="">\n                        [[localize(\'ui.panel.config.cloud.description_login\', \'email\', cloudStatus.email)]]\n                      </div>\n                    </template>\n                    <template is="dom-if" if="[[!cloudStatus.logged_in]]">\n                      <div secondary="">\n                        [[localize(\'ui.panel.config.cloud.description_features\')]]\n                      </div>\n                    </template>\n                  </paper-item-body>\n                  <ha-icon-next></ha-icon-next>\n                </paper-item>\n              </ha-card>\n            </a>\n          </template>\n\n          <ha-card>\n            <a href=\'/config/integrations/dashboard\' tabindex="-1">\n              <paper-item>\n                <paper-item-body two-line>\n                  [[localize(\'ui.panel.config.integrations.caption\')]]\n                  <div secondary>\n                    [[localize(\'ui.panel.config.integrations.description\')]]\n                  </div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </a>\n\n            <a href=\'/config/users\' tabindex="-1">\n              <paper-item>\n                <paper-item-body two-line>\n                  [[localize(\'ui.panel.config.users.caption\')]]\n                  <div secondary>\n                    [[localize(\'ui.panel.config.users.description\')]]\n                  </div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </a>\n          </ha-card>\n\n          <ha-config-navigation\n            hass="[[hass]]"\n            show-advanced="[[showAdvanced]]"\n          ></ha-config-navigation>\n\n          <template is=\'dom-if\' if=\'[[!showAdvanced]]\'>\n            <div class=\'promo-advanced\'>\n              Missing config options? Enable advanced mode on <a href="/profile">your profile page.</a>\n            </div>\n          </template>\n        </ha-config-section>\n      </div>\n    </app-header-layout>\n',
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

        var HaConfigDashboard =
          /*#__PURE__*/
          (function(_NavigateMixin) {
            _inherits(HaConfigDashboard, _NavigateMixin);

            function HaConfigDashboard() {
              _classCallCheck(this, HaConfigDashboard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigDashboard).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigDashboard,
              [
                {
                  key: "computeIsLoaded",
                  value: function computeIsLoaded(hass, component) {
                    return Object(
                      _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__[
                        "default"
                      ]
                    )(hass, component);
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
                      isWide: Boolean,
                      cloudStatus: Object,
                      showAdvanced: Boolean,
                    };
                  },
                },
              ]
            );

            return HaConfigDashboard;
          })(
            Object(
              _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_15__["default"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-config-dashboard", HaConfigDashboard);

        /***/
      },

    /***/ "./src/panels/config/dashboard/ha-config-navigation.ts":
      /*!*************************************************************!*\
  !*** ./src/panels/config/dashboard/ha-config-navigation.ts ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        text-decoration: none;\n        color: var(--primary-text-color);\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                <a href=",
            '>\n                  <paper-item>\n                    <paper-item-body two-line="">\n                      ',
            "\n                      <div secondary>\n                        ",
            "\n                      </div>\n                    </paper-item-body>\n                    <ha-icon-next></ha-icon-next>\n                  </paper-item>\n                </a>\n              ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <ha-card>\n        ",
            "\n      </ha-card>\n    ",
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

        var PAGES = [
          {
            page: "core",
            core: true,
          },
          {
            page: "person",
          },
          {
            page: "entity_registry",
            core: true,
          },
          {
            page: "area_registry",
            core: true,
          },
          {
            page: "automation",
          },
          {
            page: "script",
          },
          {
            page: "zha",
          },
          {
            page: "zwave",
          },
          {
            page: "customize",
            core: true,
            advanced: true,
          },
        ];

        var HaConfigNavigation = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])(
              "ha-config-navigation"
            ),
          ],
          function(_initialize, _LitElement) {
            var HaConfigNavigation =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaConfigNavigation, _LitElement2);

                function HaConfigNavigation() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaConfigNavigation);

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
                      HaConfigNavigation
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaConfigNavigation;
              })(_LitElement);

            return {
              F: HaConfigNavigation,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_6__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_6__["property"]
                    )(),
                  ],
                  key: "showAdvanced",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]
                    )(
                      _templateObject(),
                      PAGES.map(function(_ref) {
                        var page = _ref.page,
                          core = _ref.core,
                          advanced = _ref.advanced;
                        return (core ||
                          Object(
                            _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__[
                              "default"
                            ]
                          )(_this2.hass, page)) &&
                          (!advanced || _this2.showAdvanced)
                          ? Object(
                              lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]
                            )(
                              _templateObject2(),
                              "/config/".concat(page),
                              _this2.hass.localize(
                                "ui.panel.config.".concat(page, ".caption")
                              ),
                              _this2.hass.localize(
                                "ui.panel.config.".concat(page, ".description")
                              )
                            )
                          : "";
                      })
                    );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]
                    )(_templateObject3());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/config/ha-config-section.js":
      /*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
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
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
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

        var HaConfigSection =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigSection, _PolymerElement);

            function HaConfigSection() {
              _classCallCheck(this, HaConfigSection);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigSection).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigSection,
              [
                {
                  key: "computeContentClasses",
                  value: function computeContentClasses(isWide) {
                    var classes = "content ";
                    return isWide ? classes : classes + "narrow";
                  },
                },
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    var classes = "together layout ";
                    return (
                      classes + (isWide ? "horizontal" : "vertical narrow")
                    );
                  },
                },
              ],
              [
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
                      hass: {
                        type: Object,
                      },
                      narrow: {
                        type: Boolean,
                      },
                      isWide: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigSection;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRhc2hib2FyZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kYXNoYm9hcmQvaGEtY29uZmlnLWRhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kYXNoYm9hcmQvaGEtY29uZmlnLW5hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaWNvbiA9XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuXG4gICAgLy8gY2FsbGluZyBzdXBlciBhZnRlciBzZXR0aW5nIGljb24gdG8gaGF2ZSBpdCBjb25zaXN0ZW50bHkgc2hvdyB0aGUgaWNvbiAob3RoZXJ3aXNlIG5vdCBhbHdheXMgc2hvd24pXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvbi1uZXh0XCI6IEhhSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvbi1uZXh0XCIsIEhhSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuLypcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIG5hdmlnYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuL2hhLWNvbmZpZy1uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdEYXNoYm9hcmQgZXh0ZW5kcyBOYXZpZ2F0ZU1peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICAucHJvbW8tYWR2YW5jZWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICAucHJvbW8tYWR2YW5jZWQgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj1cIlwiPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPVwiXCI+XG4gICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICA8aGEtbWVudS1idXR0b24gaGFzcz0nW1toYXNzXV0nIG5hcnJvdz0nW1tuYXJyb3ddXSc+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU9XCJcIj5bW2xvY2FsaXplKCdwYW5lbC5jb25maWcnKV1dPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaGVhZGVyJyldXTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludHJvZHVjdGlvbicpXV08L3NwYW4+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZUlzTG9hZGVkKGhhc3MsICdjbG91ZCcpXV1cIj5cbiAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICA8YSBocmVmPScvY29uZmlnL2Nsb3VkJyB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5jYXB0aW9uJyldXVxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2xvdWRTdGF0dXMubG9nZ2VkX2luXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmRlc2NyaXB0aW9uX2xvZ2luJywgJ2VtYWlsJywgY2xvdWRTdGF0dXMuZW1haWwpXV1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFjbG91ZFN0YXR1cy5sb2dnZWRfaW5dXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuZGVzY3JpcHRpb25fZmVhdHVyZXMnKV1dXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGEgaHJlZj0nL2NvbmZpZy9pbnRlZ3JhdGlvbnMvZGFzaGJvYXJkJyB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNhcHRpb24nKV1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgaHJlZj0nL2NvbmZpZy91c2VycycgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmNhcHRpb24nKV1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnVzZXJzLmRlc2NyaXB0aW9uJyldXVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPGhhLWljb24tbmV4dD48L2hhLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaGEtY2FyZD5cblxuICAgICAgICAgIDxoYS1jb25maWctbmF2aWdhdGlvblxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHNob3ctYWR2YW5jZWQ9XCJbW3Nob3dBZHZhbmNlZF1dXCJcbiAgICAgICAgICA+PC9oYS1jb25maWctbmF2aWdhdGlvbj5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shc2hvd0FkdmFuY2VkXV0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncHJvbW8tYWR2YW5jZWQnPlxuICAgICAgICAgICAgICBNaXNzaW5nIGNvbmZpZyBvcHRpb25zPyBFbmFibGUgYWR2YW5jZWQgbW9kZSBvbiA8YSBocmVmPVwiL3Byb2ZpbGVcIj55b3VyIHByb2ZpbGUgcGFnZS48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGNsb3VkU3RhdHVzOiBPYmplY3QsXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVJc0xvYWRlZChoYXNzLCBjb21wb25lbnQpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgY29tcG9uZW50KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctZGFzaGJvYXJkXCIsIEhhQ29uZmlnRGFzaGJvYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcblxuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IFBBR0VTOiBBcnJheTx7XG4gIHBhZ2U6IHN0cmluZztcbiAgY29yZT86IGJvb2xlYW47XG4gIGFkdmFuY2VkPzogYm9vbGVhbjtcbn0+ID0gW1xuICB7IHBhZ2U6IFwiY29yZVwiLCBjb3JlOiB0cnVlIH0sXG4gIHsgcGFnZTogXCJwZXJzb25cIiB9LFxuICB7IHBhZ2U6IFwiZW50aXR5X3JlZ2lzdHJ5XCIsIGNvcmU6IHRydWUgfSxcbiAgeyBwYWdlOiBcImFyZWFfcmVnaXN0cnlcIiwgY29yZTogdHJ1ZSB9LFxuICB7IHBhZ2U6IFwiYXV0b21hdGlvblwiIH0sXG4gIHsgcGFnZTogXCJzY3JpcHRcIiB9LFxuICB7IHBhZ2U6IFwiemhhXCIgfSxcbiAgeyBwYWdlOiBcInp3YXZlXCIgfSxcbiAgeyBwYWdlOiBcImN1c3RvbWl6ZVwiLCBjb3JlOiB0cnVlLCBhZHZhbmNlZDogdHJ1ZSB9LFxuXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctbmF2aWdhdGlvblwiKVxuY2xhc3MgSGFDb25maWdOYXZpZ2F0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICR7UEFHRVMubWFwKCh7IHBhZ2UsIGNvcmUsIGFkdmFuY2VkIH0pID0+XG4gICAgICAgICAgKGNvcmUgfHwgaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBwYWdlKSkgJiZcbiAgICAgICAgICAoIWFkdmFuY2VkIHx8IHRoaXMuc2hvd0FkdmFuY2VkKVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JHtgL2NvbmZpZy8ke3BhZ2V9YH0+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKGB1aS5wYW5lbC5jb25maWcuJHtwYWdlfS5jYXB0aW9uYCl9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmNvbmZpZy4ke3BhZ2V9LmRlc2NyaXB0aW9uYFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29uZmlnLW5hdmlnYXRpb25cIjogSGFDb25maWdOYXZpZ2F0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBVEE7QUFDQTtBQURBO0FBQUE7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBK0dBO0FBQ0E7QUFDQTs7O0FBaEhBO0FBQ0E7QUFpR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7OztBQTdHQTtBQUNBO0FBbUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTs7Ozs7QUFFQTtBQUNBO0FBTUE7OztBQXRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBeEZBO0FBQ0E7QUEwREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7Ozs7QUE3RUE7QUFDQTtBQTJGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
