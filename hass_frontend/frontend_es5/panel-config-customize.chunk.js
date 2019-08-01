(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-customize"],
  {
    /***/ "./src/common/entity/compute_object_id.ts":
      /*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeObjectId;
          }
        );
        /** Compute the object ID of a state. */
        function computeObjectId(entityId) {
          return entityId.substr(entityId.indexOf(".") + 1);
        }

        /***/
      },

    /***/ "./src/common/entity/compute_state_domain.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeStateDomain;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );

        function computeStateDomain(stateObj) {
          return Object(
            _compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj.entity_id);
        }

        /***/
      },

    /***/ "./src/common/entity/compute_state_name.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          stateObj
        ) {
          return stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";
        };

        /***/
      },

    /***/ "./src/common/entity/states_sort_by_name.ts":
      /*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return sortStatesByName;
          }
        );
        /* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /**
         * Sort function to help sort states by name
         *
         * Usage:
         *   const states = [state1, state2]
         *   states.sort(statesSortByName);
         */

        function sortStatesByName(entityA, entityB) {
          var nameA = Object(
            _compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(entityA);
          var nameB = Object(
            _compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(entityB);

          if (nameA < nameB) {
            return -1;
          }

          if (nameA > nameB) {
            return 1;
          }

          return 0;
        }

        /***/
      },

    /***/ "./src/panels/config/customize/ha-config-customize.js":
      /*!************************************************************!*\
  !*** ./src/panels/config/customize/ha-config-customize.js ***!
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
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _ha_entity_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../ha-entity-config */ "./src/panels/config/ha-entity-config.js"
        );
        /* harmony import */ var _ha_form_customize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./ha-form-customize */ "./src/panels/config/customize/ha-form-customize.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="ha-style"></style>\n\n      <app-header-layout has-scrolling-region="">\n        <app-header slot="header" fixed="">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click="_backTapped"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title="">\n              [[localize(\'ui.panel.config.customize.caption\')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <div class$="[[computeClasses(isWide)]]">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">\n              [[localize(\'ui.panel.config.customize.picker.header\')]]\n            </span>\n            <span slot="introduction">\n              [[localize(\'ui.panel.config.customize.picker.introduction\')]]\n            </span>\n            <ha-entity-config\n              hass="[[hass]]"\n              label="Entity"\n              entities="[[entities]]"\n              config="[[entityConfig]]"\n            >\n            </ha-entity-config>\n          </ha-config-section>\n        </div>\n      </app-header-layout>\n    ',
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

        var HaConfigCustomize =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaConfigCustomize, _LocalizeMixin);

            function HaConfigCustomize() {
              _classCallCheck(this, HaConfigCustomize);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigCustomize).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigCustomize,
              [
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    return isWide ? "content" : "content narrow";
                  },
                },
                {
                  key: "_backTapped",
                  value: function _backTapped() {
                    history.back();
                  },
                },
                {
                  key: "computeEntities",
                  value: function computeEntities(hass) {
                    return Object.keys(hass.states)
                      .map(function(key) {
                        return hass.states[key];
                      })
                      .sort(
                        _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__[
                          "default"
                        ]
                      );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
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
                      entities: {
                        type: Array,
                        computed: "computeEntities(hass)",
                      },
                      entityConfig: {
                        type: Object,
                        value: {
                          component: "ha-form-customize",
                          computeSelectCaption: function computeSelectCaption(
                            stateObj
                          ) {
                            return (
                              Object(
                                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__[
                                  "default"
                                ]
                              )(stateObj) +
                              " (" +
                              Object(
                                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__[
                                  "default"
                                ]
                              )(stateObj) +
                              ")"
                            );
                          },
                        },
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigCustomize;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-config-customize", HaConfigCustomize);

        /***/
      },

    /***/ "./src/panels/config/customize/ha-customize-attribute.js":
      /*!***************************************************************!*\
  !*** ./src/panels/config/customize/ha-customize-attribute.js ***!
  \***************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js"
        );
        /* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../ha-form-style */ "./src/panels/config/ha-form-style.js"
        );
        /* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _ha_form_style__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _types_ha_customize_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./types/ha-customize-array */ "./src/panels/config/customize/types/ha-customize-array.js"
        );
        /* harmony import */ var _types_ha_customize_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./types/ha-customize-boolean */ "./src/panels/config/customize/types/ha-customize-boolean.js"
        );
        /* harmony import */ var _types_ha_customize_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./types/ha-customize-icon */ "./src/panels/config/customize/types/ha-customize-icon.js"
        );
        /* harmony import */ var _types_ha_customize_key_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./types/ha-customize-key-value */ "./src/panels/config/customize/types/ha-customize-key-value.js"
        );
        /* harmony import */ var _types_ha_customize_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./types/ha-customize-string */ "./src/panels/config/customize/types/ha-customize-string.js"
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
            '\n      <style include="ha-form-style">\n        :host {\n          display: block;\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .button {\n          position: absolute;\n          margin-top: -20px;\n          top: 50%;\n          right: 0;\n        }\n      </style>\n      <div id="wrapper" class="form-group"></div>\n      <paper-icon-button\n        class="button"\n        icon="[[getIcon(item.secondary)]]"\n        on-click="tapButton"\n      ></paper-icon-button>\n    ',
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

        var HaCustomizeAttribute =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCustomizeAttribute, _PolymerElement);

            function HaCustomizeAttribute() {
              _classCallCheck(this, HaCustomizeAttribute);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeAttribute).apply(this, arguments)
              );
            }

            _createClass(
              HaCustomizeAttribute,
              [
                {
                  key: "tapButton",
                  value: function tapButton() {
                    if (this.item.secondary) {
                      this.item = Object.assign({}, this.item, {
                        secondary: false,
                      });
                    } else {
                      this.item = Object.assign({}, this.item, {
                        closed: true,
                      });
                    }
                  },
                },
                {
                  key: "getIcon",
                  value: function getIcon(secondary) {
                    return secondary ? "hass:pencil" : "hass:close";
                  },
                },
                {
                  key: "itemObserver",
                  value: function itemObserver(item) {
                    var _this = this;

                    var wrapper = this.$.wrapper;
                    var tag = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ].TYPE_TO_TAG[item.type].toUpperCase();
                    var child;

                    if (
                      wrapper.lastChild &&
                      wrapper.lastChild.tagName === tag
                    ) {
                      child = wrapper.lastChild;
                    } else {
                      if (wrapper.lastChild) {
                        wrapper.removeChild(wrapper.lastChild);
                      } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
                      // become a defined Custom Element. Polymer does that in some later pass.

                      this.$.child = child = document.createElement(
                        tag.toLowerCase()
                      );
                      child.className = "form-control";
                      child.addEventListener("item-changed", function() {
                        _this.item = Object.assign({}, child.item);
                      });
                    }

                    child.setProperties({
                      item: this.item,
                    });

                    if (child.parentNode === null) {
                      wrapper.appendChild(child);
                    }
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
                      item: {
                        type: Object,
                        notify: true,
                        observer: "itemObserver",
                      },
                    };
                  },
                },
              ]
            );

            return HaCustomizeAttribute;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-customize-attribute", HaCustomizeAttribute);

        /***/
      },

    /***/ "./src/panels/config/customize/ha-form-customize-attributes.js":
      /*!*********************************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize-attributes.js ***!
  \*********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/mixins/mutable-data */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_customize_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ha-customize-attribute */ "./src/panels/config/customize/ha-customize-attribute.js"
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
            '\n      <style>\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <template is="dom-repeat" items="{{attributes}}" mutable-data="">\n        <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">\n        </ha-customize-attribute>\n      </template>\n    ',
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

        var HaFormCustomizeAttributes =
          /*#__PURE__*/
          (function(_MutableData) {
            _inherits(HaFormCustomizeAttributes, _MutableData);

            function HaFormCustomizeAttributes() {
              _classCallCheck(this, HaFormCustomizeAttributes);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaFormCustomizeAttributes).apply(
                  this,
                  arguments
                )
              );
            }

            _createClass(HaFormCustomizeAttributes, null, [
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
                    attributes: {
                      type: Array,
                      notify: true,
                    },
                  };
                },
              },
            ]);

            return HaFormCustomizeAttributes;
          })(
            Object(
              _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__[
                "MutableData"
              ]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "ha-form-customize-attributes",
          HaFormCustomizeAttributes
        );

        /***/
      },

    /***/ "./src/panels/config/customize/ha-form-customize.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js"
        );
        /* harmony import */ var _ha_form_customize_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-form-customize-attributes */ "./src/panels/config/customize/ha-form-customize-attributes.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
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
            '\n      <style include="iron-flex ha-style ha-form-style">\n        .warning {\n          color: red;\n        }\n\n        .attributes-text {\n          padding-left: 20px;\n        }\n      </style>\n      <template\n        is="dom-if"\n        if="[[computeShowWarning(localConfig, globalConfig)]]"\n      >\n        <div class="warning">\n          It seems that your configuration.yaml doesn\'t properly include\n          customize.yaml<br />\n          Changes made here won\'t affect your configuration.\n        </div>\n      </template>\n      <template is="dom-if" if="[[hasLocalAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes are already set in customize.yaml<br />\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{localAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasGlobalAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes are customized from outside of\n          customize.yaml<br />\n          Possibly via a domain, a glob or a different include.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{globalAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasExistingAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes of the entity are set programatically.<br />\n          You can override them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{existingAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasNewAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes weren\'t set. Set them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{newAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <div class="form-group">\n        <paper-dropdown-menu\n          label="Pick an attribute to override"\n          class="flex"\n          dynamic-align=""\n        >\n          <paper-listbox\n            slot="dropdown-content"\n            selected="{{selectedNewAttribute}}"\n          >\n            <template\n              is="dom-repeat"\n              items="[[newAttributesOptions]]"\n              as="option"\n            >\n              <paper-item>[[option]]</paper-item>\n            </template>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    ',
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

        var HaFormCustomize =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaFormCustomize, _PolymerElement);

            function HaFormCustomize() {
              _classCallCheck(this, HaFormCustomize);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaFormCustomize).apply(this, arguments)
              );
            }

            _createClass(
              HaFormCustomize,
              [
                {
                  key: "_initOpenObject",
                  value: function _initOpenObject(
                    key,
                    value,
                    secondary,
                    config
                  ) {
                    return Object.assign(
                      {
                        attribute: key,
                        value: value,
                        closed: false,
                        domain: Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__[
                            "default"
                          ]
                        )(this.entity),
                        secondary: secondary,
                        description: key,
                      },
                      config
                    );
                  },
                },
                {
                  key: "loadEntity",
                  value: function loadEntity(entity) {
                    var _this = this;

                    this.entity = entity;
                    return this.hass
                      .callApi(
                        "GET",
                        "config/customize/config/" + entity.entity_id
                      )
                      .then(function(data) {
                        _this.localConfig = data.local;
                        _this.globalConfig = data.global;
                        _this.newAttributes = [];
                      });
                  },
                },
                {
                  key: "saveEntity",
                  value: function saveEntity() {
                    var data = {};
                    var attrs = this.localAttributes.concat(
                      this.globalAttributes,
                      this.existingAttributes,
                      this.newAttributes
                    );
                    attrs.forEach(function(attr) {
                      if (
                        attr.closed ||
                        attr.secondary ||
                        !attr.attribute ||
                        !attr.value
                      )
                        return;
                      var value =
                        attr.type === "json"
                          ? JSON.parse(attr.value)
                          : attr.value;
                      if (!value) return;
                      data[attr.attribute] = value;
                    });
                    var objectId = this.entity.entity_id;
                    return this.hass.callApi(
                      "POST",
                      "config/customize/config/" + objectId,
                      data
                    );
                  },
                },
                {
                  key: "_computeSingleAttribute",
                  value: function _computeSingleAttribute(
                    key,
                    value,
                    secondary
                  ) {
                    var config = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                      "default"
                    ].LOGIC_STATE_ATTRIBUTES[key] || {
                      type:
                        _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ].UNKNOWN_TYPE,
                    };
                    return this._initOpenObject(
                      key,
                      config.type === "json" ? JSON.stringify(value) : value,
                      secondary,
                      config
                    );
                  },
                },
                {
                  key: "_computeAttributes",
                  value: function _computeAttributes(config, keys, secondary) {
                    var _this2 = this;

                    return keys.map(function(key) {
                      return _this2._computeSingleAttribute(
                        key,
                        config[key],
                        secondary
                      );
                    });
                  },
                },
                {
                  key: "computeLocalAttributes",
                  value: function computeLocalAttributes(localConfig) {
                    if (!localConfig) return [];
                    var localKeys = Object.keys(localConfig);

                    var result = this._computeAttributes(
                      localConfig,
                      localKeys,
                      false
                    );

                    return result;
                  },
                },
                {
                  key: "computeGlobalAttributes",
                  value: function computeGlobalAttributes(
                    localConfig,
                    globalConfig
                  ) {
                    if (!localConfig || !globalConfig) return [];
                    var localKeys = Object.keys(localConfig);
                    var globalKeys = Object.keys(globalConfig).filter(function(
                      key
                    ) {
                      return !localKeys.includes(key);
                    });
                    return this._computeAttributes(
                      globalConfig,
                      globalKeys,
                      true
                    );
                  },
                },
                {
                  key: "computeExistingAttributes",
                  value: function computeExistingAttributes(
                    localConfig,
                    globalConfig,
                    entity
                  ) {
                    if (!localConfig || !globalConfig || !entity) return [];
                    var localKeys = Object.keys(localConfig);
                    var globalKeys = Object.keys(globalConfig);
                    var entityKeys = Object.keys(entity.attributes).filter(
                      function(key) {
                        return (
                          !localKeys.includes(key) && !globalKeys.includes(key)
                        );
                      }
                    );
                    return this._computeAttributes(
                      entity.attributes,
                      entityKeys,
                      true
                    );
                  },
                },
                {
                  key: "computeShowWarning",
                  value: function computeShowWarning(
                    localConfig,
                    globalConfig
                  ) {
                    if (!localConfig || !globalConfig) return false;
                    return Object.keys(localConfig).some(function(key) {
                      return (
                        JSON.stringify(globalConfig[key]) !==
                        JSON.stringify(localConfig[key])
                      );
                    });
                  },
                },
                {
                  key: "filterFromAttributes",
                  value: function filterFromAttributes(attributes) {
                    return function(key) {
                      return (
                        !attributes ||
                        attributes.every(function(attr) {
                          return attr.attribute !== key || attr.closed;
                        })
                      );
                    };
                  },
                },
                {
                  key: "getNewAttributesOptions",
                  value: function getNewAttributesOptions(
                    localAttributes,
                    globalAttributes,
                    existingAttributes,
                    newAttributes
                  ) {
                    var _this3 = this;

                    var knownKeys = Object.keys(
                      _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ].LOGIC_STATE_ATTRIBUTES
                    )
                      .filter(function(key) {
                        var conf =
                          _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                            "default"
                          ].LOGIC_STATE_ATTRIBUTES[key];
                        return (
                          conf &&
                          (!conf.domains ||
                            !_this3.entity ||
                            conf.domains.includes(
                              Object(
                                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__[
                                  "default"
                                ]
                              )(_this3.entity)
                            ))
                        );
                      })
                      .filter(this.filterFromAttributes(localAttributes))
                      .filter(this.filterFromAttributes(globalAttributes))
                      .filter(this.filterFromAttributes(existingAttributes))
                      .filter(this.filterFromAttributes(newAttributes));
                    return knownKeys.sort().concat("Other");
                  },
                },
                {
                  key: "selectedNewAttributeObserver",
                  value: function selectedNewAttributeObserver(selected) {
                    if (selected < 0) return;
                    var option = this.newAttributesOptions[selected];

                    if (selected === this.newAttributesOptions.length - 1) {
                      // The "Other" option.
                      var _attr = this._initOpenObject(
                        "",
                        "",
                        false,
                        /* secondary */
                        {
                          type:
                            _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                              "default"
                            ].ADD_TYPE,
                        }
                      );

                      this.push("newAttributes", _attr);
                      this.selectedNewAttribute = -1;
                      return;
                    }

                    var result = this.localAttributes.findIndex(function(attr) {
                      return attr.attribute === option;
                    });

                    if (result >= 0) {
                      this.set("localAttributes." + result + ".closed", false);
                      this.selectedNewAttribute = -1;
                      return;
                    }

                    result = this.globalAttributes.findIndex(function(attr) {
                      return attr.attribute === option;
                    });

                    if (result >= 0) {
                      this.set("globalAttributes." + result + ".closed", false);
                      this.selectedNewAttribute = -1;
                      return;
                    }

                    result = this.existingAttributes.findIndex(function(attr) {
                      return attr.attribute === option;
                    });

                    if (result >= 0) {
                      this.set(
                        "existingAttributes." + result + ".closed",
                        false
                      );
                      this.selectedNewAttribute = -1;
                      return;
                    }

                    result = this.newAttributes.findIndex(function(attr) {
                      return attr.attribute === option;
                    });

                    if (result >= 0) {
                      this.set("newAttributes." + result + ".closed", false);
                      this.selectedNewAttribute = -1;
                      return;
                    }

                    var attr = this._computeSingleAttribute(
                      option,
                      "",
                      false
                      /* secondary */
                    );

                    this.push("newAttributes", attr);
                    this.selectedNewAttribute = -1;
                  },
                },
                {
                  key: "attributesObserver",
                  value: function attributesObserver() {
                    this.hasLocalAttributes =
                      this.localAttributes &&
                      this.localAttributes.some(function(attr) {
                        return !attr.closed;
                      });
                    this.hasGlobalAttributes =
                      this.globalAttributes &&
                      this.globalAttributes.some(function(attr) {
                        return !attr.closed;
                      });
                    this.hasExistingAttributes =
                      this.existingAttributes &&
                      this.existingAttributes.some(function(attr) {
                        return !attr.closed;
                      });
                    this.hasNewAttributes =
                      this.newAttributes &&
                      this.newAttributes.some(function(attr) {
                        return !attr.closed;
                      });
                    this.newAttributesOptions = this.getNewAttributesOptions(
                      this.localAttributes,
                      this.globalAttributes,
                      this.existingAttributes,
                      this.newAttributes
                    );
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
                      hass: {
                        type: Object,
                      },
                      entity: Object,
                      localAttributes: {
                        type: Array,
                        computed: "computeLocalAttributes(localConfig)",
                      },
                      hasLocalAttributes: Boolean,
                      globalAttributes: {
                        type: Array,
                        computed:
                          "computeGlobalAttributes(localConfig, globalConfig)",
                      },
                      hasGlobalAttributes: Boolean,
                      existingAttributes: {
                        type: Array,
                        computed:
                          "computeExistingAttributes(localConfig, globalConfig, entity)",
                      },
                      hasExistingAttributes: Boolean,
                      newAttributes: {
                        type: Array,
                        value: [],
                      },
                      hasNewAttributes: Boolean,
                      newAttributesOptions: Array,
                      selectedNewAttribute: {
                        type: Number,
                        value: -1,
                        observer: "selectedNewAttributeObserver",
                      },
                      localConfig: Object,
                      globalConfig: Object,
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return [
                      "attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)",
                    ];
                  },
                },
              ]
            );

            return HaFormCustomize;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-form-customize", HaFormCustomize);

        /***/
      },

    /***/ "./src/panels/config/customize/types/ha-customize-array.js":
      /*!*****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-array.js ***!
  \*****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style>\n        paper-dropdown-menu {\n          margin: -9px 0;\n        }\n      </style>\n      <paper-dropdown-menu\n        label="[[item.description]]"\n        disabled="[[item.secondary]]"\n        selected-item-label="{{item.value}}"\n        dynamic-align=""\n      >\n        <paper-listbox\n          slot="dropdown-content"\n          selected="[[computeSelected(item)]]"\n        >\n          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">\n            <paper-item>[[option]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    ',
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
         * @appliesMixin EventsMixin
         */

        var HaCustomizeArray =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaCustomizeArray, _EventsMixin);

            function HaCustomizeArray() {
              _classCallCheck(this, HaCustomizeArray);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeArray).apply(this, arguments)
              );
            }

            _createClass(
              HaCustomizeArray,
              [
                {
                  key: "getOptions",
                  value: function getOptions(item) {
                    var domain = item.domain || "*";
                    var options = item.options[domain] || item.options["*"];

                    if (!options) {
                      this.item.type = "string";
                      this.fire("item-changed");
                      return [];
                    }

                    return options.sort();
                  },
                },
                {
                  key: "computeSelected",
                  value: function computeSelected(item) {
                    var options = this.getOptions(item);
                    return options.indexOf(item.value);
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
                      item: {
                        type: Object,
                        notifies: true,
                      },
                    };
                  },
                },
              ]
            );

            return HaCustomizeArray;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-customize-array", HaCustomizeArray);

        /***/
      },

    /***/ "./src/panels/config/customize/types/ha-customize-boolean.js":
      /*!*******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-boolean.js ***!
  \*******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
            '\n      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">\n        [[item.description]]\n      </paper-checkbox>\n    ',
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

        var HaCustomizeBoolean =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCustomizeBoolean, _PolymerElement);

            function HaCustomizeBoolean() {
              _classCallCheck(this, HaCustomizeBoolean);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeBoolean).apply(this, arguments)
              );
            }

            _createClass(HaCustomizeBoolean, null, [
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
                    item: {
                      type: Object,
                      notifies: true,
                    },
                  };
                },
              },
            ]);

            return HaCustomizeBoolean;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-customize-boolean", HaCustomizeBoolean);

        /***/
      },

    /***/ "./src/panels/config/customize/types/ha-customize-icon.js":
      /*!****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-icon.js ***!
  \****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
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
            '\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        .icon-image {\n          border: 1px solid grey;\n          padding: 8px;\n          margin-right: 20px;\n          margin-top: 10px;\n        }\n      </style>\n      <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="icon"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
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

        var HaCustomizeIcon =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCustomizeIcon, _PolymerElement);

            function HaCustomizeIcon() {
              _classCallCheck(this, HaCustomizeIcon);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeIcon).apply(this, arguments)
              );
            }

            _createClass(HaCustomizeIcon, null, [
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
                    item: {
                      type: Object,
                      notifies: true,
                    },
                  };
                },
              },
            ]);

            return HaCustomizeIcon;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-customize-icon", HaCustomizeIcon);

        /***/
      },

    /***/ "./src/panels/config/customize/types/ha-customize-key-value.js":
      /*!*********************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-key-value.js ***!
  \*********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
            '\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        paper-input {\n          @apply --layout-flex;\n        }\n        .key {\n          padding-right: 20px;\n        }\n      </style>\n      <paper-input\n        disabled="[[item.secondary]]"\n        class="key"\n        label="Attribute name"\n        value="{{item.attribute}}"\n      >\n      </paper-input>\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="Attribute value"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
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

        var HaCustomizeKeyValue =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCustomizeKeyValue, _PolymerElement);

            function HaCustomizeKeyValue() {
              _classCallCheck(this, HaCustomizeKeyValue);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeKeyValue).apply(this, arguments)
              );
            }

            _createClass(HaCustomizeKeyValue, null, [
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
                    item: {
                      type: Object,
                      notifies: true,
                    },
                  };
                },
              },
            ]);

            return HaCustomizeKeyValue;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-customize-key-value", HaCustomizeKeyValue);

        /***/
      },

    /***/ "./src/panels/config/customize/types/ha-customize-string.js":
      /*!******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-string.js ***!
  \******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
            '\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="[[getLabel(item)]]"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
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

        var HaCustomizeString =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCustomizeString, _PolymerElement);

            function HaCustomizeString() {
              _classCallCheck(this, HaCustomizeString);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCustomizeString).apply(this, arguments)
              );
            }

            _createClass(
              HaCustomizeString,
              [
                {
                  key: "getLabel",
                  value: function getLabel(item) {
                    return (
                      item.description +
                      (item.type === "json" ? " (JSON formatted)" : "")
                    );
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
                      item: {
                        type: Object,
                        notifies: true,
                      },
                    };
                  },
                },
              ]
            );

            return HaCustomizeString;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-customize-string", HaCustomizeString);

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

    /***/ "./src/panels/config/ha-entity-config.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/ha-entity-config.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
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
            '\n      <style include="iron-flex ha-style">\n        ha-card {\n          direction: ltr;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          padding-bottom: 24px;\n        }\n\n        .form-placeholder {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 96px;\n        }\n\n        [hidden]: {\n          display: none;\n        }\n\n        .card-actions {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n      </style>\n      <ha-card>\n        <div class="card-content">\n          <div class="device-picker">\n            <paper-dropdown-menu\n              label="[[label]]"\n              class="flex"\n              disabled="[[!entities.length]]"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                selected="{{selectedEntity}}"\n              >\n                <template is="dom-repeat" items="[[entities]]" as="state">\n                  <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class="form-container">\n            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">\n              <div class="form-placeholder">\n                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">\n                  No entities found! :-(\n                </template>\n\n                <template is="dom-if" if="[[computeShowSpinner(formState)]]">\n                  <paper-spinner active="" alt="[[formState]]"></paper-spinner>\n                  [[formState]]\n                </template>\n              </div>\n            </template>\n\n            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>\n          </div>\n        </div>\n        <div class="card-actions">\n          <mwc-button\n            on-click="saveEntity"\n            disabled="[[computeShowPlaceholder(formState)]]"\n            >SAVE</mwc-button\n          >\n          <template is="dom-if" if="[[allowDelete]]">\n            <mwc-button\n              class="warning"\n              on-click="deleteEntity"\n              disabled="[[computeShowPlaceholder(formState)]]"\n              >DELETE</mwc-button\n            >\n          </template>\n        </div>\n      </ha-card>\n    ',
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

        var HaEntityConfig =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaEntityConfig, _PolymerElement);

            function HaEntityConfig() {
              _classCallCheck(this, HaEntityConfig);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaEntityConfig).apply(this, arguments)
              );
            }

            _createClass(
              HaEntityConfig,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaEntityConfig.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this.formEl = document.createElement(this.config.component);
                    this.formEl.hass = this.hass;
                    this.$.form.appendChild(this.formEl);
                    this.entityChanged(this.selectedEntity);
                  },
                },
                {
                  key: "computeSelectCaption",
                  value: function computeSelectCaption(stateObj) {
                    return this.config.computeSelectCaption
                      ? this.config.computeSelectCaption(stateObj)
                      : Object(
                          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                            "default"
                          ]
                        )(stateObj);
                  },
                },
                {
                  key: "computeShowNoDevices",
                  value: function computeShowNoDevices(formState) {
                    return formState === "no-devices";
                  },
                },
                {
                  key: "computeShowSpinner",
                  value: function computeShowSpinner(formState) {
                    return formState === "loading" || formState === "saving";
                  },
                },
                {
                  key: "computeShowPlaceholder",
                  value: function computeShowPlaceholder(formState) {
                    return formState !== "editing";
                  },
                },
                {
                  key: "computeShowForm",
                  value: function computeShowForm(formState) {
                    return formState === "editing";
                  },
                },
                {
                  key: "hassChanged",
                  value: function hassChanged(hass) {
                    if (this.formEl) {
                      this.formEl.hass = hass;
                    }
                  },
                },
                {
                  key: "entitiesChanged",
                  value: function entitiesChanged(entities, oldEntities) {
                    if (entities.length === 0) {
                      this.formState = "no-devices";
                      return;
                    }

                    if (!oldEntities) {
                      this.selectedEntity = 0;
                      return;
                    }

                    var oldEntityId =
                      oldEntities[this.selectedEntity].entity_id;
                    var newIndex = entities.findIndex(function(ent) {
                      return ent.entity_id === oldEntityId;
                    });

                    if (newIndex === -1) {
                      this.selectedEntity = 0;
                    } else if (newIndex !== this.selectedEntity) {
                      // Entity moved index
                      this.selectedEntity = newIndex;
                    }
                  },
                },
                {
                  key: "entityChanged",
                  value: function entityChanged(index) {
                    if (!this.entities || !this.formEl) return;
                    var entity = this.entities[index];
                    if (!entity) return;
                    this.formState = "loading";
                    var el = this;
                    this.formEl.loadEntity(entity).then(function() {
                      el.formState = "editing";
                    });
                  },
                },
                {
                  key: "saveEntity",
                  value: function saveEntity() {
                    this.formState = "saving";
                    var el = this;
                    this.formEl.saveEntity().then(function() {
                      el.formState = "editing";
                    });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
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
                        observer: "hassChanged",
                      },
                      label: {
                        type: String,
                        value: "Device",
                      },
                      entities: {
                        type: Array,
                        observer: "entitiesChanged",
                      },
                      allowDelete: {
                        type: Boolean,
                        value: false,
                      },
                      selectedEntity: {
                        type: Number,
                        value: -1,
                        observer: "entityChanged",
                      },
                      formState: {
                        type: String,
                        // no-devices, loading, saving, editing
                        value: "no-devices",
                      },
                      config: {
                        type: Object,
                      },
                    };
                  },
                },
              ]
            );

            return HaEntityConfig;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-entity-config", HaEntityConfig);

        /***/
      },

    /***/ "./src/panels/config/ha-form-style.js":
      /*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        var documentContainer = document.createElement("template");
        documentContainer.setAttribute("style", "display: none;");
        documentContainer.innerHTML =
          '<dom-module id="ha-form-style">\n  <template>\n    <style>\n      .form-group {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        padding: 8px 16px;\n      }\n\n      .form-group label {\n        @apply --layout-flex-2;\n      }\n\n      .form-group .form-control {\n        @apply --layout-flex;\n      }\n\n      .form-group.vertical {\n        @apply --layout-vertical;\n        @apply --layout-start;\n      }\n\n      paper-dropdown-menu.form-control {\n        margin: -9px 0;\n      }\n    </style>\n  </template>\n</dom-module>';
        document.head.appendChild(documentContainer.content);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWN1c3RvbWl6ZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS9oYS1jb25maWctY3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS9oYS1jdXN0b21pemUtYXR0cmlidXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS9oYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS9oYS1mb3JtLWN1c3RvbWl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLWFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1rZXktdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtZW50aXR5LWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1mb3JtLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCIvKipcbiAqIFNvcnQgZnVuY3Rpb24gdG8gaGVscCBzb3J0IHN0YXRlcyBieSBuYW1lXG4gKlxuICogVXNhZ2U6XG4gKiAgIGNvbnN0IHN0YXRlcyA9IFtzdGF0ZTEsIHN0YXRlMl1cbiAqICAgc3RhdGVzLnNvcnQoc3RhdGVzU29ydEJ5TmFtZSk7XG4gKi9cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydFN0YXRlc0J5TmFtZShcbiAgZW50aXR5QTogSGFzc0VudGl0eSxcbiAgZW50aXR5QjogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IG5hbWVBID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlBKTtcbiAgY29uc3QgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vaGEtZW50aXR5LWNvbmZpZ1wiO1xuaW1wb3J0IFwiLi9oYS1mb3JtLWN1c3RvbWl6ZVwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBzb3J0QnlOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N0YXRlc19zb3J0X2J5X25hbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbWl6ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb249XCJcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPVwiXCI+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJfYmFja1RhcHBlZFwiXG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUuY2FwdGlvbicpXV1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUucGlja2VyLmhlYWRlcicpXV1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmN1c3RvbWl6ZS5waWNrZXIuaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGhhLWVudGl0eS1jb25maWdcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRpdHlcIlxuICAgICAgICAgICAgICBlbnRpdGllcz1cIltbZW50aXRpZXNdXVwiXG4gICAgICAgICAgICAgIGNvbmZpZz1cIltbZW50aXR5Q29uZmlnXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9oYS1lbnRpdHktY29uZmlnPlxuICAgICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXRpZXMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBcImhhLWZvcm0tY3VzdG9taXplXCIsXG4gICAgICAgICAgY29tcHV0ZVNlbGVjdENhcHRpb246IChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopICtcbiAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICtcbiAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG5cbiAgX2JhY2tUYXBwZWQoKSB7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBjb21wdXRlRW50aXRpZXMoaGFzcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcylcbiAgICAgIC5tYXAoKGtleSkgPT4gaGFzcy5zdGF0ZXNba2V5XSlcbiAgICAgIC5zb3J0KHNvcnRCeU5hbWUpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctY3VzdG9taXplXCIsIEhhQ29uZmlnQ3VzdG9taXplKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaGFzc0F0dHJpYnV0ZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWxcIjtcbmltcG9ydCBcIi4uL2hhLWZvcm0tc3R5bGVcIjtcbmltcG9ydCBcIi4vdHlwZXMvaGEtY3VzdG9taXplLWFycmF5XCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1ib29sZWFuXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1pY29uXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1rZXktdmFsdWVcIjtcbmltcG9ydCBcIi4vdHlwZXMvaGEtY3VzdG9taXplLXN0cmluZ1wiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZUF0dHJpYnV0ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtZm9ybS1zdHlsZVwiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiZm9ybS1ncm91cFwiPjwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgaWNvbj1cIltbZ2V0SWNvbihpdGVtLnNlY29uZGFyeSldXVwiXG4gICAgICAgIG9uLWNsaWNrPVwidGFwQnV0dG9uXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiBcIml0ZW1PYnNlcnZlclwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGFwQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLml0ZW0uc2Vjb25kYXJ5KSB7XG4gICAgICB0aGlzLml0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW0sIHsgc2Vjb25kYXJ5OiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtLCB7IGNsb3NlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRJY29uKHNlY29uZGFyeSkge1xuICAgIHJldHVybiBzZWNvbmRhcnkgPyBcImhhc3M6cGVuY2lsXCIgOiBcImhhc3M6Y2xvc2VcIjtcbiAgfVxuXG4gIGl0ZW1PYnNlcnZlcihpdGVtKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJC53cmFwcGVyO1xuICAgIGNvbnN0IHRhZyA9IGhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHW2l0ZW0udHlwZV0udG9VcHBlckNhc2UoKTtcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHdyYXBwZXIubGFzdENoaWxkICYmIHdyYXBwZXIubGFzdENoaWxkLnRhZ05hbWUgPT09IHRhZykge1xuICAgICAgY2hpbGQgPSB3cmFwcGVyLmxhc3RDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHdyYXBwZXIubGFzdENoaWxkKSB7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgICB0aGlzLiQuY2hpbGQgPSBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcbiAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJpdGVtLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLml0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBjaGlsZC5pdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjaGlsZC5zZXRQcm9wZXJ0aWVzKHsgaXRlbTogdGhpcy5pdGVtIH0pO1xuICAgIGlmIChjaGlsZC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1hdHRyaWJ1dGVcIiwgSGFDdXN0b21pemVBdHRyaWJ1dGUpO1xuIiwiaW1wb3J0IHsgTXV0YWJsZURhdGEgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL211dGFibGUtZGF0YVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jdXN0b21pemUtYXR0cmlidXRlXCI7XG5cbmNsYXNzIEhhRm9ybUN1c3RvbWl6ZUF0dHJpYnV0ZXMgZXh0ZW5kcyBNdXRhYmxlRGF0YShQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cInt7YXR0cmlidXRlc319XCIgbXV0YWJsZS1kYXRhPVwiXCI+XG4gICAgICAgIDxoYS1jdXN0b21pemUtYXR0cmlidXRlIGl0ZW09XCJ7e2l0ZW19fVwiIGhpZGRlbiQ9XCJbW2l0ZW0uY2xvc2VkXV1cIj5cbiAgICAgICAgPC9oYS1jdXN0b21pemUtYXR0cmlidXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXCIsXG4gIEhhRm9ybUN1c3RvbWl6ZUF0dHJpYnV0ZXNcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaGFzc0F0dHJpYnV0ZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWxcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1wiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIEhhRm9ybUN1c3RvbWl6ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlIGhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgLndhcm5pbmcge1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcy10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBpZj1cIltbY29tcHV0ZVNob3dXYXJuaW5nKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2FybmluZ1wiPlxuICAgICAgICAgIEl0IHNlZW1zIHRoYXQgeW91ciBjb25maWd1cmF0aW9uLnlhbWwgZG9lc24ndCBwcm9wZXJseSBpbmNsdWRlXG4gICAgICAgICAgY3VzdG9taXplLnlhbWw8YnIgLz5cbiAgICAgICAgICBDaGFuZ2VzIG1hZGUgaGVyZSB3b24ndCBhZmZlY3QgeW91ciBjb25maWd1cmF0aW9uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTG9jYWxBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIGFyZSBhbHJlYWR5IHNldCBpbiBjdXN0b21pemUueWFtbDxiciAvPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2xvY2FsQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzR2xvYmFsQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBhcmUgY3VzdG9taXplZCBmcm9tIG91dHNpZGUgb2ZcbiAgICAgICAgICBjdXN0b21pemUueWFtbDxiciAvPlxuICAgICAgICAgIFBvc3NpYmx5IHZpYSBhIGRvbWFpbiwgYSBnbG9iIG9yIGEgZGlmZmVyZW50IGluY2x1ZGUuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXG4gICAgICAgICAgYXR0cmlidXRlcz1cInt7Z2xvYmFsQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzRXhpc3RpbmdBdHRyaWJ1dGVzXV1cIj5cbiAgICAgICAgPGg0IGNsYXNzPVwiYXR0cmlidXRlcy10ZXh0XCI+XG4gICAgICAgICAgVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIG9mIHRoZSBlbnRpdHkgYXJlIHNldCBwcm9ncmFtYXRpY2FsbHkuPGJyIC8+XG4gICAgICAgICAgWW91IGNhbiBvdmVycmlkZSB0aGVtIGlmIHlvdSBsaWtlLlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2V4aXN0aW5nQXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGFzTmV3QXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyB3ZXJlbid0IHNldC4gU2V0IHRoZW0gaWYgeW91IGxpa2UuXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoYS1mb3JtLWN1c3RvbWl6ZS1hdHRyaWJ1dGVzXG4gICAgICAgICAgYXR0cmlidXRlcz1cInt7bmV3QXR0cmlidXRlc319XCJcbiAgICAgICAgPjwvaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlcz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIGxhYmVsPVwiUGljayBhbiBhdHRyaWJ1dGUgdG8gb3ZlcnJpZGVcIlxuICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkTmV3QXR0cmlidXRlfX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICBpdGVtcz1cIltbbmV3QXR0cmlidXRlc09wdGlvbnNdXVwiXG4gICAgICAgICAgICAgIGFzPVwib3B0aW9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tvcHRpb25dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eTogT2JqZWN0LFxuXG4gICAgICBsb2NhbEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpXCIsXG4gICAgICB9LFxuICAgICAgaGFzTG9jYWxBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBnbG9iYWxBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlR2xvYmFsQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKVwiLFxuICAgICAgfSxcbiAgICAgIGhhc0dsb2JhbEF0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIGV4aXN0aW5nQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJjb21wdXRlRXhpc3RpbmdBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcsIGVudGl0eSlcIixcbiAgICAgIH0sXG4gICAgICBoYXNFeGlzdGluZ0F0dHJpYnV0ZXM6IEJvb2xlYW4sXG5cbiAgICAgIG5ld0F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG4gICAgICBoYXNOZXdBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBuZXdBdHRyaWJ1dGVzT3B0aW9uczogQXJyYXksXG4gICAgICBzZWxlY3RlZE5ld0F0dHJpYnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VsZWN0ZWROZXdBdHRyaWJ1dGVPYnNlcnZlclwiLFxuICAgICAgfSxcblxuICAgICAgbG9jYWxDb25maWc6IE9iamVjdCxcbiAgICAgIGdsb2JhbENvbmZpZzogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJhdHRyaWJ1dGVzT2JzZXJ2ZXIobG9jYWxBdHRyaWJ1dGVzLiosIGdsb2JhbEF0dHJpYnV0ZXMuKiwgZXhpc3RpbmdBdHRyaWJ1dGVzLiosIG5ld0F0dHJpYnV0ZXMuKilcIixcbiAgICBdO1xuICB9XG5cbiAgX2luaXRPcGVuT2JqZWN0KGtleSwgdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGF0dHJpYnV0ZToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNsb3NlZDogZmFsc2UsXG4gICAgICAgIGRvbWFpbjogY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSxcbiAgICAgICAgc2Vjb25kYXJ5OiBzZWNvbmRhcnksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBrZXksXG4gICAgICB9LFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRFbnRpdHkoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgcmV0dXJuIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJHRVRcIiwgXCJjb25maWcvY3VzdG9taXplL2NvbmZpZy9cIiArIGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmxvY2FsQ29uZmlnID0gZGF0YS5sb2NhbDtcbiAgICAgICAgdGhpcy5nbG9iYWxDb25maWcgPSBkYXRhLmdsb2JhbDtcbiAgICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzID0gW107XG4gICAgICB9KTtcbiAgfVxuXG4gIHNhdmVFbnRpdHkoKSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5sb2NhbEF0dHJpYnV0ZXMuY29uY2F0KFxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMsXG4gICAgICB0aGlzLm5ld0F0dHJpYnV0ZXNcbiAgICApO1xuICAgIGF0dHJzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGlmIChhdHRyLmNsb3NlZCB8fCBhdHRyLnNlY29uZGFyeSB8fCAhYXR0ci5hdHRyaWJ1dGUgfHwgIWF0dHIudmFsdWUpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci50eXBlID09PSBcImpzb25cIiA/IEpTT04ucGFyc2UoYXR0ci52YWx1ZSkgOiBhdHRyLnZhbHVlO1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgZGF0YVthdHRyLmF0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9iamVjdElkID0gdGhpcy5lbnRpdHkuZW50aXR5X2lkO1xuICAgIHJldHVybiB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgXCJjb25maWcvY3VzdG9taXplL2NvbmZpZy9cIiArIG9iamVjdElkLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICBjb25zdCBjb25maWcgPSBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV0gfHwge1xuICAgICAgdHlwZTogaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuX2luaXRPcGVuT2JqZWN0KFxuICAgICAga2V5LFxuICAgICAgY29uZmlnLnR5cGUgPT09IFwianNvblwiID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsXG4gICAgICBzZWNvbmRhcnksXG4gICAgICBjb25maWdcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGVzKGNvbmZpZywga2V5cywgc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+XG4gICAgICB0aGlzLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKGtleSwgY29uZmlnW2tleV0sIHNlY29uZGFyeSlcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUxvY2FsQXR0cmlidXRlcyhsb2NhbENvbmZpZykge1xuICAgIGlmICghbG9jYWxDb25maWcpIHJldHVybiBbXTtcbiAgICBjb25zdCBsb2NhbEtleXMgPSBPYmplY3Qua2V5cyhsb2NhbENvbmZpZyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZXMobG9jYWxDb25maWcsIGxvY2FsS2V5cywgZmFsc2UpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb21wdXRlR2xvYmFsQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKSB7XG4gICAgaWYgKCFsb2NhbENvbmZpZyB8fCAhZ2xvYmFsQ29uZmlnKSByZXR1cm4gW107XG4gICAgY29uc3QgbG9jYWxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxDb25maWcpO1xuICAgIGNvbnN0IGdsb2JhbEtleXMgPSBPYmplY3Qua2V5cyhnbG9iYWxDb25maWcpLmZpbHRlcihcbiAgICAgIChrZXkpID0+ICFsb2NhbEtleXMuaW5jbHVkZXMoa2V5KVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGVzKGdsb2JhbENvbmZpZywgZ2xvYmFsS2V5cywgdHJ1ZSk7XG4gIH1cblxuICBjb21wdXRlRXhpc3RpbmdBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcsIGVudGl0eSkge1xuICAgIGlmICghbG9jYWxDb25maWcgfHwgIWdsb2JhbENvbmZpZyB8fCAhZW50aXR5KSByZXR1cm4gW107XG4gICAgY29uc3QgbG9jYWxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxDb25maWcpO1xuICAgIGNvbnN0IGdsb2JhbEtleXMgPSBPYmplY3Qua2V5cyhnbG9iYWxDb25maWcpO1xuICAgIGNvbnN0IGVudGl0eUtleXMgPSBPYmplY3Qua2V5cyhlbnRpdHkuYXR0cmlidXRlcykuZmlsdGVyKFxuICAgICAgKGtleSkgPT4gIWxvY2FsS2V5cy5pbmNsdWRlcyhrZXkpICYmICFnbG9iYWxLZXlzLmluY2x1ZGVzKGtleSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlQXR0cmlidXRlcyhlbnRpdHkuYXR0cmlidXRlcywgZW50aXR5S2V5cywgdHJ1ZSk7XG4gIH1cblxuICBjb21wdXRlU2hvd1dhcm5pbmcobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZykge1xuICAgIGlmICghbG9jYWxDb25maWcgfHwgIWdsb2JhbENvbmZpZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbENvbmZpZykuc29tZShcbiAgICAgIChrZXkpID0+XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGdsb2JhbENvbmZpZ1trZXldKSAhPT0gSlNPTi5zdHJpbmdpZnkobG9jYWxDb25maWdba2V5XSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyRnJvbUF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgIHJldHVybiAoa2V5KSA9PlxuICAgICAgIWF0dHJpYnV0ZXMgfHxcbiAgICAgIGF0dHJpYnV0ZXMuZXZlcnkoKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlICE9PSBrZXkgfHwgYXR0ci5jbG9zZWQpO1xuICB9XG5cbiAgZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgbG9jYWxBdHRyaWJ1dGVzLFxuICAgIGdsb2JhbEF0dHJpYnV0ZXMsXG4gICAgZXhpc3RpbmdBdHRyaWJ1dGVzLFxuICAgIG5ld0F0dHJpYnV0ZXNcbiAgKSB7XG4gICAgY29uc3Qga25vd25LZXlzID0gT2JqZWN0LmtleXMoaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBjb25mID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbmYgJiZcbiAgICAgICAgICAoIWNvbmYuZG9tYWlucyB8fFxuICAgICAgICAgICAgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICBjb25mLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgcmV0dXJuIGtub3duS2V5cy5zb3J0KCkuY29uY2F0KFwiT3RoZXJcIik7XG4gIH1cblxuICBzZWxlY3RlZE5ld0F0dHJpYnV0ZU9ic2VydmVyKHNlbGVjdGVkKSB7XG4gICAgaWYgKHNlbGVjdGVkIDwgMCkgcmV0dXJuO1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnNbc2VsZWN0ZWRdO1xuICAgIGlmIChzZWxlY3RlZCA9PT0gdGhpcy5uZXdBdHRyaWJ1dGVzT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBUaGUgXCJPdGhlclwiIG9wdGlvbi5cbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9pbml0T3Blbk9iamVjdChcIlwiLCBcIlwiLCBmYWxzZSAvKiBzZWNvbmRhcnkgKi8sIHtcbiAgICAgICAgdHlwZTogaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaChcIm5ld0F0dHJpYnV0ZXNcIiwgYXR0cik7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSB0aGlzLmxvY2FsQXR0cmlidXRlcy5maW5kSW5kZXgoXG4gICAgICAoYXR0cikgPT4gYXR0ci5hdHRyaWJ1dGUgPT09IG9wdGlvblxuICAgICk7XG4gICAgaWYgKHJlc3VsdCA+PSAwKSB7XG4gICAgICB0aGlzLnNldChcImxvY2FsQXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc3VsdCA9IHRoaXMuZ2xvYmFsQXR0cmlidXRlcy5maW5kSW5kZXgoXG4gICAgICAoYXR0cikgPT4gYXR0ci5hdHRyaWJ1dGUgPT09IG9wdGlvblxuICAgICk7XG4gICAgaWYgKHJlc3VsdCA+PSAwKSB7XG4gICAgICB0aGlzLnNldChcImdsb2JhbEF0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcy5maW5kSW5kZXgoXG4gICAgICAoYXR0cikgPT4gYXR0ci5hdHRyaWJ1dGUgPT09IG9wdGlvblxuICAgICk7XG4gICAgaWYgKHJlc3VsdCA+PSAwKSB7XG4gICAgICB0aGlzLnNldChcImV4aXN0aW5nQXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc3VsdCA9IHRoaXMubmV3QXR0cmlidXRlcy5maW5kSW5kZXgoKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb24pO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJuZXdBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoXG4gICAgICBvcHRpb24sXG4gICAgICBcIlwiLFxuICAgICAgZmFsc2UgLyogc2Vjb25kYXJ5ICovXG4gICAgKTtcbiAgICB0aGlzLnB1c2goXCJuZXdBdHRyaWJ1dGVzXCIsIGF0dHIpO1xuICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgfVxuXG4gIGF0dHJpYnV0ZXNPYnNlcnZlcigpIHtcbiAgICB0aGlzLmhhc0xvY2FsQXR0cmlidXRlcyA9XG4gICAgICB0aGlzLmxvY2FsQXR0cmlidXRlcyAmJiB0aGlzLmxvY2FsQXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMuaGFzR2xvYmFsQXR0cmlidXRlcyA9XG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMgJiZcbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMuaGFzRXhpc3RpbmdBdHRyaWJ1dGVzID1cbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzICYmXG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMuaGFzTmV3QXR0cmlidXRlcyA9XG4gICAgICB0aGlzLm5ld0F0dHJpYnV0ZXMgJiYgdGhpcy5uZXdBdHRyaWJ1dGVzLnNvbWUoKGF0dHIpID0+ICFhdHRyLmNsb3NlZCk7XG4gICAgdGhpcy5uZXdBdHRyaWJ1dGVzT3B0aW9ucyA9IHRoaXMuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICB0aGlzLmxvY2FsQXR0cmlidXRlcyxcbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyxcbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZm9ybS1jdXN0b21pemVcIiwgSGFGb3JtQ3VzdG9taXplKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDdXN0b21pemVBcnJheSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1hcmdpbjogLTlweCAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgbGFiZWw9XCJbW2l0ZW0uZGVzY3JpcHRpb25dXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgc2VsZWN0ZWQtaXRlbS1sYWJlbD1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIHNlbGVjdGVkPVwiW1tjb21wdXRlU2VsZWN0ZWQoaXRlbSldXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2dldE9wdGlvbnMoaXRlbSldXVwiIGFzPVwib3B0aW9uXCI+XG4gICAgICAgICAgICA8cGFwZXItaXRlbT5bW29wdGlvbl1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBnZXRPcHRpb25zKGl0ZW0pIHtcbiAgICBjb25zdCBkb21haW4gPSBpdGVtLmRvbWFpbiB8fCBcIipcIjtcbiAgICBjb25zdCBvcHRpb25zID0gaXRlbS5vcHRpb25zW2RvbWFpbl0gfHwgaXRlbS5vcHRpb25zW1wiKlwiXTtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaXRlbS50eXBlID0gXCJzdHJpbmdcIjtcbiAgICAgIHRoaXMuZmlyZShcIml0ZW0tY2hhbmdlZFwiKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMuc29ydCgpO1xuICB9XG5cbiAgY29tcHV0ZVNlbGVjdGVkKGl0ZW0pIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKGl0ZW0pO1xuICAgIHJldHVybiBvcHRpb25zLmluZGV4T2YoaXRlbS52YWx1ZSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1hcnJheVwiLCBIYUN1c3RvbWl6ZUFycmF5KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZUJvb2xlYW4gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItY2hlY2tib3ggZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIiBjaGVja2VkPVwie3tpdGVtLnZhbHVlfX1cIj5cbiAgICAgICAgW1tpdGVtLmRlc2NyaXB0aW9uXV1cbiAgICAgIDwvcGFwZXItY2hlY2tib3g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLCBIYUN1c3RvbWl6ZUJvb2xlYW4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplSWNvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLWltYWdlIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJpY29uLWltYWdlXCIgaWNvbj1cIltbaXRlbS52YWx1ZV1dXCI+PC9pcm9uLWljb24+XG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBsYWJlbD1cImljb25cIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUtaWNvblwiLCBIYUN1c3RvbWl6ZUljb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplS2V5VmFsdWUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmtleSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIGNsYXNzPVwia2V5XCJcbiAgICAgICAgbGFiZWw9XCJBdHRyaWJ1dGUgbmFtZVwiXG4gICAgICAgIHZhbHVlPVwie3tpdGVtLmF0dHJpYnV0ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBsYWJlbD1cIkF0dHJpYnV0ZSB2YWx1ZVwiXG4gICAgICAgIHZhbHVlPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWN1c3RvbWl6ZS1rZXktdmFsdWVcIiwgSGFDdXN0b21pemVLZXlWYWx1ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVTdHJpbmcgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBsYWJlbD1cIltbZ2V0TGFiZWwoaXRlbSldXVwiXG4gICAgICAgIHZhbHVlPVwie3tpdGVtLnZhbHVlfX1cIlxuICAgICAgPlxuICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZpZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBnZXRMYWJlbChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uZGVzY3JpcHRpb24gKyAoaXRlbS50eXBlID09PSBcImpzb25cIiA/IFwiIChKU09OIGZvcm1hdHRlZClcIiA6IFwiXCIpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsIEhhQ3VzdG9taXplU3RyaW5nKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIEhhRW50aXR5Q29uZmlnIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogOTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dOiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXRpZXMubGVuZ3RoXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWRFbnRpdHl9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2VudGl0aWVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93Tm9EZXZpY2VzKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgICAgTm8gZW50aXRpZXMgZm91bmQhIDotKFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZVNob3dTcGlubmVyKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCIgYWx0PVwiW1tmb3JtU3RhdGVdXVwiPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIFtbZm9ybVN0YXRlXV1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIWNvbXB1dGVTaG93Rm9ybShmb3JtU3RhdGUpXV1cIiBpZD1cImZvcm1cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJzYXZlRW50aXR5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSldXVwiXG4gICAgICAgICAgICA+U0FWRTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbYWxsb3dEZWxldGVdXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJkZWxldGVFbnRpdHlcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpXV1cIlxuICAgICAgICAgICAgICA+REVMRVRFPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBsYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIkRldmljZVwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiBcImVudGl0aWVzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYWxsb3dEZWxldGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRFbnRpdHk6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcImVudGl0eUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZvcm1TdGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIC8vIG5vLWRldmljZXMsIGxvYWRpbmcsIHNhdmluZywgZWRpdGluZ1xuICAgICAgICB2YWx1ZTogXCJuby1kZXZpY2VzXCIsXG4gICAgICB9LFxuXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmZvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5jb25maWcuY29tcG9uZW50KTtcbiAgICB0aGlzLmZvcm1FbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgIHRoaXMuJC5mb3JtLmFwcGVuZENoaWxkKHRoaXMuZm9ybUVsKTtcbiAgICB0aGlzLmVudGl0eUNoYW5nZWQodGhpcy5zZWxlY3RlZEVudGl0eSk7XG4gIH1cblxuICBjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb21wdXRlU2VsZWN0Q2FwdGlvblxuICAgICAgPyB0aGlzLmNvbmZpZy5jb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZU9iailcbiAgICAgIDogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcIm5vLWRldmljZXNcIjtcbiAgfVxuXG4gIGNvbXB1dGVTaG93U3Bpbm5lcihmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcImxvYWRpbmdcIiB8fCBmb3JtU3RhdGUgPT09IFwic2F2aW5nXCI7XG4gIH1cblxuICBjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSkge1xuICAgIHJldHVybiBmb3JtU3RhdGUgIT09IFwiZWRpdGluZ1wiO1xuICB9XG5cbiAgY29tcHV0ZVNob3dGb3JtKGZvcm1TdGF0ZSkge1xuICAgIHJldHVybiBmb3JtU3RhdGUgPT09IFwiZWRpdGluZ1wiO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQoaGFzcykge1xuICAgIGlmICh0aGlzLmZvcm1FbCkge1xuICAgICAgdGhpcy5mb3JtRWwuaGFzcyA9IGhhc3M7XG4gICAgfVxuICB9XG5cbiAgZW50aXRpZXNDaGFuZ2VkKGVudGl0aWVzLCBvbGRFbnRpdGllcykge1xuICAgIGlmIChlbnRpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZm9ybVN0YXRlID0gXCJuby1kZXZpY2VzXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghb2xkRW50aXRpZXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvbGRFbnRpdHlJZCA9IG9sZEVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZDtcblxuICAgIHZhciBuZXdJbmRleCA9IGVudGl0aWVzLmZpbmRJbmRleChmdW5jdGlvbihlbnQpIHtcbiAgICAgIHJldHVybiBlbnQuZW50aXR5X2lkID09PSBvbGRFbnRpdHlJZDtcbiAgICB9KTtcblxuICAgIGlmIChuZXdJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggIT09IHRoaXMuc2VsZWN0ZWRFbnRpdHkpIHtcbiAgICAgIC8vIEVudGl0eSBtb3ZlZCBpbmRleFxuICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG5ld0luZGV4O1xuICAgIH1cbiAgfVxuXG4gIGVudGl0eUNoYW5nZWQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMgfHwgIXRoaXMuZm9ybUVsKSByZXR1cm47XG4gICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaW5kZXhdO1xuICAgIGlmICghZW50aXR5KSByZXR1cm47XG5cbiAgICB0aGlzLmZvcm1TdGF0ZSA9IFwibG9hZGluZ1wiO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtRWwubG9hZEVudGl0eShlbnRpdHkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVFbnRpdHkoKSB7XG4gICAgdGhpcy5mb3JtU3RhdGUgPSBcInNhdmluZ1wiO1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdGhpcy5mb3JtRWwuc2F2ZUVudGl0eSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBlbC5mb3JtU3RhdGUgPSBcImVkaXRpbmdcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktY29uZmlnXCIsIEhhRW50aXR5Q29uZmlnKTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwiaGEtZm9ybS1zdHlsZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtMjtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cC52ZXJ0aWNhbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LmZvcm0tY29udHJvbCB7XG4gICAgICAgIG1hcmdpbjogLTlweCAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBekVBO0FBQ0E7QUFrQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBRkE7QUFUQTtBQXFCQTs7OztBQTVEQTtBQUNBO0FBMkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQXJFQTtBQUNBO0FBc0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7Ozs7QUFsQ0E7QUFDQTtBQXVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOzs7O0FBdEJBO0FBQ0E7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1JQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFGQTtBQUdBOzs7QUFHQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7OztBQXZVQTtBQUNBO0FBNEVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQXhDQTtBQTBDQTs7O0FBRUE7QUFDQTtBQUdBOzs7O0FBaklBO0FBQ0E7QUF5VUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoREE7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQWpDQTtBQUNBO0FBa0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7Ozs7QUFoQkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQW9CQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQS9CQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBMEJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOzs7O0FBckNBO0FBQ0E7QUFzQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7OztBQXRCQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7Ozs7QUFuQkE7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBeEZBO0FBQ0E7QUEwREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7Ozs7QUE3RUE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTJIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF4TUE7QUFDQTtBQStFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFqQ0E7QUFxQ0E7Ozs7QUF6SEE7QUFDQTtBQTJNQTs7Ozs7Ozs7Ozs7QUN2TkE7QUFDQTtBQUVBO0FBNkJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
