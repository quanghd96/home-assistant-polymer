(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["more-info-dialog~panel-kiosk~panel-states"],
  {
    /***/ "./src/cards/ha-history_graph-card.js":
      /*!********************************************!*\
  !*** ./src/cards/ha-history_graph-card.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-card/paper-card */ "./node_modules/@polymer/paper-card/paper-card.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/state-history-charts */ "./src/components/state-history-charts.js"
        );
        /* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../data/ha-state-history-data */ "./src/data/ha-state-history-data.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
            '\n      <style>\n        paper-card:not([dialog]) .content {\n          padding: 0 16px 16px;\n        }\n        paper-card[dialog] {\n          padding-top: 16px;\n          background-color: transparent;\n        }\n        paper-card {\n          width: 100%;\n          /* prevent new stacking context, chart tooltip needs to overflow */\n          position: static;\n        }\n        .header {\n          @apply --paper-font-headline;\n          line-height: 40px;\n          color: var(--primary-text-color);\n          padding: 20px 16px 12px;\n          @apply --paper-font-common-nowrap;\n        }\n        paper-card[dialog] .header {\n          display: none;\n        }\n      </style>\n      <ha-state-history-data\n        hass="[[hass]]"\n        filter-type="recent-entity"\n        entity-id="[[computeHistoryEntities(stateObj)]]"\n        data="{{stateHistory}}"\n        is-loading="{{stateHistoryLoading}}"\n        cache-config="[[cacheConfig]]"\n      ></ha-state-history-data>\n      <paper-card\n        dialog$="[[inDialog]]"\n        on-click="cardTapped"\n        elevation="[[computeElevation(inDialog)]]"\n      >\n        <div class="header">[[computeTitle(stateObj)]]</div>\n        <div class="content">\n          <state-history-charts\n            hass="[[hass]]"\n            history-data="[[stateHistory]]"\n            is-loading-data="[[stateHistoryLoading]]"\n            up-to-now\n            no-single\n          >\n          </state-history-charts>\n        </div>\n      </paper-card>\n    ',
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

        var HaHistoryGraphCard =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaHistoryGraphCard, _EventsMixin);

            function HaHistoryGraphCard() {
              _classCallCheck(this, HaHistoryGraphCard);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaHistoryGraphCard).apply(this, arguments)
              );
            }

            _createClass(
              HaHistoryGraphCard,
              [
                {
                  key: "stateObjObserver",
                  value: function stateObjObserver(stateObj) {
                    if (!stateObj) return;

                    if (
                      this.cacheConfig.cacheKey !== stateObj.entity_id ||
                      this.cacheConfig.refresh !==
                        (stateObj.attributes.refresh || 0) ||
                      this.cacheConfig.hoursToShow !==
                        (stateObj.attributes.hours_to_show || 24)
                    ) {
                      this.cacheConfig = Object.assign(
                        {},
                        {
                          refresh: stateObj.attributes.refresh || 0,
                          cacheKey: stateObj.entity_id,
                          hoursToShow: stateObj.attributes.hours_to_show || 24,
                        }
                      );
                    }
                  },
                },
                {
                  key: "computeTitle",
                  value: function computeTitle(stateObj) {
                    return Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "computeContentClass",
                  value: function computeContentClass(inDialog) {
                    return inDialog ? "" : "content";
                  },
                },
                {
                  key: "computeHistoryEntities",
                  value: function computeHistoryEntities(stateObj) {
                    return stateObj.attributes.entity_id;
                  },
                },
                {
                  key: "computeElevation",
                  value: function computeElevation(inDialog) {
                    return inDialog ? 0 : 1;
                  },
                },
                {
                  key: "cardTapped",
                  value: function cardTapped(ev) {
                    var mq = window.matchMedia(
                      "(min-width: 610px) and (min-height: 550px)"
                    );

                    if (mq.matches) {
                      ev.stopPropagation();
                      this.fire("hass-more-info", {
                        entityId: this.stateObj.entity_id,
                      });
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
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "stateObjObserver",
                      },
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      stateHistory: Object,
                      stateHistoryLoading: Boolean,
                      cacheConfig: {
                        type: Object,
                        value: {
                          refresh: 0,
                          cacheKey: null,
                          hoursToShow: 24,
                        },
                      },
                    };
                  },
                },
              ]
            );

            return HaHistoryGraphCard;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-history_graph-card", HaHistoryGraphCard);

        /***/
      },

    /***/ "./src/common/dom/dynamic_content_updater.ts":
      /*!***************************************************!*\
  !*** ./src/common/dom/dynamic_content_updater.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return dynamicContentUpdater;
          }
        );
        /**
         * Update root's child element to be newElementTag replacing another existing child if any.
         * Copy attributes into the child element.
         */
        function dynamicContentUpdater(root, newElementTag, attributes) {
          var rootEl = root;
          var customEl;

          if (rootEl.lastChild && rootEl.lastChild.tagName === newElementTag) {
            customEl = rootEl.lastChild;
          } else {
            if (rootEl.lastChild) {
              rootEl.removeChild(rootEl.lastChild);
            } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
            // become a defined Custom Element. Polymer does that in some later pass.

            customEl = document.createElement(newElementTag.toLowerCase());
          }

          if (customEl.setProperties) {
            customEl.setProperties(attributes);
          } else {
            // If custom element definition wasn't loaded yet - setProperties would be
            // missing, but no harm in setting attributes one-by-one then.
            Object.keys(attributes).forEach(function(key) {
              customEl[key] = attributes[key];
            });
          }

          if (customEl.parentNode === null) {
            rootEl.appendChild(customEl);
          }
        }

        /***/
      },

    /***/ "./src/common/entity/attribute_class_names.ts":
      /*!****************************************************!*\
  !*** ./src/common/entity/attribute_class_names.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return attributeClassNames;
          }
        );
        function attributeClassNames(stateObj, attributes) {
          if (!stateObj) {
            return "";
          }

          return attributes
            .map(function(attribute) {
              return attribute in stateObj.attributes ? "has-" + attribute : "";
            })
            .filter(function(attr) {
              return attr !== "";
            })
            .join(" ");
        }

        /***/
      },

    /***/ "./src/common/entity/can_toggle_domain.ts":
      /*!************************************************!*\
  !*** ./src/common/entity/can_toggle_domain.ts ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return canToggleDomain;
          }
        );
        function canToggleDomain(hass, domain) {
          var services = hass.services[domain];

          if (!services) {
            return false;
          }

          if (domain === "lock") {
            return "lock" in services;
          }

          if (domain === "cover") {
            return "open_cover" in services;
          }

          return "turn_on" in services;
        }

        /***/
      },

    /***/ "./src/common/entity/can_toggle_state.ts":
      /*!***********************************************!*\
  !*** ./src/common/entity/can_toggle_state.ts ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return canToggleState;
          }
        );
        /* harmony import */ var _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./can_toggle_domain */ "./src/common/entity/can_toggle_domain.ts"
        );
        /* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./supports-feature */ "./src/common/entity/supports-feature.ts"
        );

        function canToggleState(hass, stateObj) {
          var domain = Object(
            _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"]
          )(stateObj);

          if (domain === "group") {
            return stateObj.state === "on" || stateObj.state === "off";
          }

          if (domain === "climate") {
            return Object(
              _supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"]
            )(stateObj, 4096);
          }

          return Object(
            _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(hass, domain);
        }

        /***/
      },

    /***/ "./src/common/entity/state_card_type.ts":
      /*!**********************************************!*\
  !*** ./src/common/entity/state_card_type.ts ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return stateCardType;
          }
        );
        /* harmony import */ var _can_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./can_toggle_state */ "./src/common/entity/can_toggle_state.ts"
        );
        /* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );

        function stateCardType(hass, stateObj) {
          if (stateObj.state === "unavailable") {
            return "display";
          }

          var domain = Object(
            _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"]
          )(stateObj);

          if (
            _const__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(
              domain
            )
          ) {
            return domain;
          }

          if (
            Object(_can_toggle_state__WEBPACK_IMPORTED_MODULE_0__["default"])(
              hass,
              stateObj
            ) &&
            stateObj.attributes.control !== "hidden"
          ) {
            return "toggle";
          }

          return "display";
        }

        /***/
      },

    /***/ "./src/common/entity/state_more_info_type.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/state_more_info_type.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return stateMoreInfoType;
          }
        );
        /* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );

        function stateMoreInfoType(stateObj) {
          var domain = Object(
            _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj);

          if (
            _const__WEBPACK_IMPORTED_MODULE_1__[
              "DOMAINS_WITH_MORE_INFO"
            ].includes(domain)
          ) {
            return domain;
          }

          if (
            _const__WEBPACK_IMPORTED_MODULE_1__[
              "DOMAINS_HIDE_MORE_INFO"
            ].includes(domain)
          ) {
            return "hidden";
          }

          return "default";
        }

        /***/
      },

    /***/ "./src/components/ha-vacuum-state.js":
      /*!*******************************************!*\
  !*** ./src/components/ha-vacuum-state.js ***!
  \*******************************************/
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
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n        mwc-button[disabled] {\n          background-color: transparent;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"\n        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button\n      >\n    ',
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

        var STATES_INTERCEPTABLE = {
          cleaning: {
            action: "return_to_base",
            service: "return_to_base",
          },
          docked: {
            action: "start_cleaning",
            service: "start",
          },
          idle: {
            action: "start_cleaning",
            service: "start",
          },
          off: {
            action: "turn_on",
            service: "turn_on",
          },
          on: {
            action: "turn_off",
            service: "turn_off",
          },
          paused: {
            action: "resume_cleaning",
            service: "start",
          },
        };
        /*
         * @appliesMixin LocalizeMixin
         */

        var HaVacuumState =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaVacuumState, _LocalizeMixin);

            function HaVacuumState() {
              _classCallCheck(this, HaVacuumState);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaVacuumState).apply(this, arguments)
              );
            }

            _createClass(
              HaVacuumState,
              [
                {
                  key: "_computeInterceptable",
                  value: function _computeInterceptable(
                    state,
                    supportedFeatures
                  ) {
                    return (
                      state in STATES_INTERCEPTABLE && supportedFeatures !== 0
                    );
                  },
                },
                {
                  key: "_computeLabel",
                  value: function _computeLabel(state, interceptable) {
                    return interceptable
                      ? this.localize(
                          "ui.card.vacuum.actions.".concat(
                            STATES_INTERCEPTABLE[state].action
                          )
                        )
                      : this.localize("state.vacuum.".concat(state));
                  },
                },
                {
                  key: "_callService",
                  value: function _callService(ev) {
                    ev.stopPropagation();
                    var stateObj = this.stateObj;
                    var service = STATES_INTERCEPTABLE[stateObj.state].service;
                    this.hass.callService("vacuum", service, {
                      entity_id: stateObj.entity_id,
                    });
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
                      hass: Object,
                      stateObj: Object,
                      _interceptable: {
                        type: Boolean,
                        computed:
                          "_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)",
                      },
                    };
                  },
                },
              ]
            );

            return HaVacuumState;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-vacuum-state", HaVacuumState);

        /***/
      },

    /***/ "./src/components/ha-water_heater-state.js":
      /*!*************************************************!*\
  !*** ./src/components/ha-water_heater-state.js ***!
  \*************************************************/
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
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n      </style>\n\n      <div class="target">\n        <span class="state-label"> [[_localizeState(stateObj.state)]] </span>\n        [[computeTarget(hass, stateObj)]]\n      </div>\n\n      <template is="dom-if" if="[[currentStatus]]">\n        <div class="current">\n          [[localize(\'ui.card.water_heater.currently\')]]: [[currentStatus]]\n        </div>\n      </template>\n    ',
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

        var HaWaterHeaterState =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaWaterHeaterState, _LocalizeMixin);

            function HaWaterHeaterState() {
              _classCallCheck(this, HaWaterHeaterState);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaWaterHeaterState).apply(this, arguments)
              );
            }

            _createClass(
              HaWaterHeaterState,
              [
                {
                  key: "computeTarget",
                  value: function computeTarget(hass, stateObj) {
                    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

                    if (
                      stateObj.attributes.target_temp_low != null &&
                      stateObj.attributes.target_temp_high != null
                    ) {
                      return ""
                        .concat(stateObj.attributes.target_temp_low, " - ")
                        .concat(stateObj.attributes.target_temp_high, " ")
                        .concat(hass.config.unit_system.temperature);
                    }

                    if (stateObj.attributes.temperature != null) {
                      return ""
                        .concat(stateObj.attributes.temperature, " ")
                        .concat(hass.config.unit_system.temperature);
                    }

                    return "";
                  },
                },
                {
                  key: "_localizeState",
                  value: function _localizeState(state) {
                    return (
                      this.localize("state.water_heater.".concat(state)) ||
                      state
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
                      hass: Object,
                      stateObj: Object,
                    };
                  },
                },
              ]
            );

            return HaWaterHeaterState;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-water_heater-state", HaWaterHeaterState);

        /***/
      },

    /***/ "./src/state-summary/state-card-climate.js":
      /*!*************************************************!*\
  !*** ./src/state-summary/state-card-climate.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-climate-state */ "./src/components/ha-climate-state.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-climate-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <ha-climate-state\n          hass="[[hass]]"\n          state-obj="[[stateObj]]"\n        ></ha-climate-state>\n      </div>\n    ',
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

        var StateCardClimate =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardClimate, _PolymerElement);

            function StateCardClimate() {
              _classCallCheck(this, StateCardClimate);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardClimate).apply(this, arguments)
              );
            }

            _createClass(StateCardClimate, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject(), this.stateInfoTemplate);
                },
              },
              {
                key: "stateInfoTemplate",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject2());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: Object,
                    inDialog: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            return StateCardClimate;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-climate", StateCardClimate);

        /***/
      },

    /***/ "./src/state-summary/state-card-configurator.js":
      /*!******************************************************!*\
  !*** ./src/state-summary/state-card-configurator.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <mwc-button hidden$="[[inDialog]]"\n          >[[_localizeState(stateObj.state)]]</mwc-button\n        >\n      </div>\n\n      <!-- pre load the image so the dialog is rendered the proper size -->\n      <template is="dom-if" if="[[stateObj.attributes.description_image]]">\n        <img hidden="" src="[[stateObj.attributes.description_image]]" />\n      </template>\n    ',
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

        var StateCardConfigurator =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardConfigurator, _LocalizeMixin);

            function StateCardConfigurator() {
              _classCallCheck(this, StateCardConfigurator);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardConfigurator).apply(this, arguments)
              );
            }

            _createClass(
              StateCardConfigurator,
              [
                {
                  key: "_localizeState",
                  value: function _localizeState(state) {
                    return this.localize("state.configurator.".concat(state));
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return StateCardConfigurator;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-configurator", StateCardConfigurator);

        /***/
      },

    /***/ "./src/state-summary/state-card-content.js":
      /*!*************************************************!*\
  !*** ./src/state-summary/state-card-content.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _state_card_climate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./state-card-climate */ "./src/state-summary/state-card-climate.js"
        );
        /* harmony import */ var _state_card_configurator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./state-card-configurator */ "./src/state-summary/state-card-configurator.js"
        );
        /* harmony import */ var _state_card_cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./state-card-cover */ "./src/state-summary/state-card-cover.js"
        );
        /* harmony import */ var _state_card_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./state-card-display */ "./src/state-summary/state-card-display.js"
        );
        /* harmony import */ var _state_card_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./state-card-input_number */ "./src/state-summary/state-card-input_number.js"
        );
        /* harmony import */ var _state_card_input_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./state-card-input_select */ "./src/state-summary/state-card-input_select.ts"
        );
        /* harmony import */ var _state_card_input_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./state-card-input_text */ "./src/state-summary/state-card-input_text.js"
        );
        /* harmony import */ var _state_card_lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./state-card-lock */ "./src/state-summary/state-card-lock.js"
        );
        /* harmony import */ var _state_card_media_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./state-card-media_player */ "./src/state-summary/state-card-media_player.js"
        );
        /* harmony import */ var _state_card_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./state-card-scene */ "./src/state-summary/state-card-scene.js"
        );
        /* harmony import */ var _state_card_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./state-card-script */ "./src/state-summary/state-card-script.js"
        );
        /* harmony import */ var _state_card_timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./state-card-timer */ "./src/state-summary/state-card-timer.js"
        );
        /* harmony import */ var _state_card_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./state-card-toggle */ "./src/state-summary/state-card-toggle.js"
        );
        /* harmony import */ var _state_card_vacuum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./state-card-vacuum */ "./src/state-summary/state-card-vacuum.js"
        );
        /* harmony import */ var _state_card_water_heater__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./state-card-water_heater */ "./src/state-summary/state-card-water_heater.js"
        );
        /* harmony import */ var _state_card_weblink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./state-card-weblink */ "./src/state-summary/state-card-weblink.js"
        );
        /* harmony import */ var _common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../common/entity/state_card_type */ "./src/common/entity/state_card_type.ts"
        );
        /* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts"
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

        var StateCardContent =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardContent, _PolymerElement);

            function StateCardContent() {
              _classCallCheck(this, StateCardContent);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardContent).apply(this, arguments)
              );
            }

            _createClass(
              StateCardContent,
              [
                {
                  key: "inputChanged",
                  value: function inputChanged(hass, inDialog, stateObj) {
                    var stateCard;
                    if (!stateObj || !hass) return;

                    if (
                      stateObj.attributes &&
                      "custom_ui_state_card" in stateObj.attributes
                    ) {
                      stateCard = stateObj.attributes.custom_ui_state_card;
                    } else {
                      stateCard =
                        "state-card-" +
                        Object(
                          _common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__[
                            "default"
                          ]
                        )(hass, stateObj);
                    }

                    Object(
                      _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__[
                        "default"
                      ]
                    )(this, stateCard.toUpperCase(), {
                      hass: hass,
                      stateObj: stateObj,
                      inDialog: inDialog,
                    });
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["inputChanged(hass, inDialog, stateObj)"];
                  },
                },
              ]
            );

            return StateCardContent;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-content", StateCardContent);

        /***/
      },

    /***/ "./src/state-summary/state-card-cover.js":
      /*!***********************************************!*\
  !*** ./src/state-summary/state-card-cover.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-cover-controls */ "./src/components/ha-cover-controls.js"
        );
        /* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js"
        );
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../util/cover-model */ "./src/util/cover-model.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <div class="horizontal layout">\n          <ha-cover-controls\n            hidden$="[[entityObj.isTiltOnly]]"\n            hass="[[hass]]"\n            state-obj="[[stateObj]]"\n          ></ha-cover-controls>\n          <ha-cover-tilt-controls\n            hidden$="[[!entityObj.isTiltOnly]]"\n            hass="[[hass]]"\n            state-obj="[[stateObj]]"\n          ></ha-cover-tilt-controls>\n        </div>\n      </div>\n    ',
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

        var StateCardCover =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardCover, _PolymerElement);

            function StateCardCover() {
              _classCallCheck(this, StateCardCover);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardCover).apply(this, arguments)
              );
            }

            _createClass(
              StateCardCover,
              [
                {
                  key: "computeEntityObj",
                  value: function computeEntityObj(hass, stateObj) {
                    var entity = new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ](hass, stateObj);
                    return entity;
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      entityObj: {
                        type: Object,
                        computed: "computeEntityObj(hass, stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return StateCardCover;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-cover", StateCardCover);

        /***/
      },

    /***/ "./src/state-summary/state-card-display.js":
      /*!*************************************************!*\
  !*** ./src/state-summary/state-card-display.js ***!
  \*************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts"
        );
        /* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <style>\n        :host {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n          @apply --layout-baseline;\n        }\n\n        :host([rtl]) {\n          direction: rtl;\n          text-align: right;\n        }\n\n        state-info {\n          flex: 1 1 auto;\n          min-width: 0;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          max-width: 40%;\n          flex: 0 0 auto;\n        }\n        :host([rtl]) .state {\n          margin-right: 16px;\n          margin-left: 0;\n          text-align: left;\n        }\n\n        .state.has-unit_of_measurement {\n          white-space: nowrap;\n        }\n      </style>\n\n      ",
            '\n      <div class$="[[computeClassNames(stateObj)]]">\n        [[computeStateDisplay(localize, stateObj, language)]]\n      </div>\n    ',
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

        var StateCardDisplay =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardDisplay, _LocalizeMixin);

            function StateCardDisplay() {
              _classCallCheck(this, StateCardDisplay);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardDisplay).apply(this, arguments)
              );
            }

            _createClass(
              StateCardDisplay,
              [
                {
                  key: "computeStateDisplay",
                  value: function computeStateDisplay(
                    localize,
                    stateObj,
                    language
                  ) {
                    return Object(
                      _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ]
                    )(localize, stateObj, language);
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    var classes = [
                      "state",
                      Object(
                        _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ]
                      )(stateObj, ["unit_of_measurement"]),
                    ];
                    return classes.join(" ");
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__[
                        "computeRTL"
                      ]
                    )(hass);
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
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

            return StateCardDisplay;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-display", StateCardDisplay);

        /***/
      },

    /***/ "./src/state-summary/state-card-input_number.js":
      /*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_number.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../components/ha-slider */ "./src/components/ha-slider.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral(
            [
              '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class="horizontal justified layout" id="input_number_card">\n        ',
              '\n        <ha-slider\n          min="[[min]]"\n          max="[[max]]"\n          value="{{value}}"\n          step="[[step]]"\n          hidden="[[hiddenslider]]"\n          pin=""\n          on-change="selectedValueChanged"\n          on-click="stopPropagation"\n          id="slider"\n          ignore-bar-touch=""\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=""\n          auto-validate=""\n          pattern="[0-9]+([\\.][0-9]+)?"\n          step="[[step]]"\n          min="[[min]]"\n          max="[[max]]"\n          value="{{value}}"\n          type="number"\n          on-change="selectedValueChanged"\n          on-click="stopPropagation"\n          hidden="[[hiddenbox]]"\n        >\n        </paper-input>\n        <div class="state" hidden="[[hiddenbox]]">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id="sliderstate"\n          class="state sliderstate"\n          hidden="[[hiddenslider]]"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    ',
            ],
            [
              '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class="horizontal justified layout" id="input_number_card">\n        ',
              '\n        <ha-slider\n          min="[[min]]"\n          max="[[max]]"\n          value="{{value}}"\n          step="[[step]]"\n          hidden="[[hiddenslider]]"\n          pin=""\n          on-change="selectedValueChanged"\n          on-click="stopPropagation"\n          id="slider"\n          ignore-bar-touch=""\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=""\n          auto-validate=""\n          pattern="[0-9]+([\\\\.][0-9]+)?"\n          step="[[step]]"\n          min="[[min]]"\n          max="[[max]]"\n          value="{{value}}"\n          type="number"\n          on-change="selectedValueChanged"\n          on-click="stopPropagation"\n          hidden="[[hiddenbox]]"\n        >\n        </paper-input>\n        <div class="state" hidden="[[hiddenbox]]">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id="sliderstate"\n          class="state sliderstate"\n          hidden="[[hiddenslider]]"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    ',
            ]
          );

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

        var StateCardInputNumber =
          /*#__PURE__*/
          (function(_mixinBehaviors) {
            _inherits(StateCardInputNumber, _mixinBehaviors);

            function StateCardInputNumber() {
              _classCallCheck(this, StateCardInputNumber);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardInputNumber).apply(this, arguments)
              );
            }

            _createClass(
              StateCardInputNumber,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(StateCardInputNumber.prototype),
                      "ready",
                      this
                    ).call(this);

                    if (typeof ResizeObserver === "function") {
                      var ro = new ResizeObserver(function(entries) {
                        entries.forEach(function() {
                          _this.hiddenState();
                        });
                      });
                      ro.observe(this.$.input_number_card);
                    } else {
                      this.addEventListener("iron-resize", this.hiddenState);
                    }
                  },
                },
                {
                  key: "hiddenState",
                  value: function hiddenState() {
                    if (this.mode !== "slider") return;
                    var sliderwidth = this.$.slider.offsetWidth;

                    if (sliderwidth < 100) {
                      this.$.sliderstate.hidden = true;
                    } else if (sliderwidth >= 145) {
                      this.$.sliderstate.hidden = false;
                    }
                  },
                },
                {
                  key: "stateObjectChanged",
                  value: function stateObjectChanged(newVal) {
                    var prevMode = this.mode;
                    this.setProperties({
                      min: Number(newVal.attributes.min),
                      max: Number(newVal.attributes.max),
                      step: Number(newVal.attributes.step),
                      value: Number(newVal.state),
                      mode: String(newVal.attributes.mode),
                      maxlength: String(newVal.attributes.max).length,
                      hiddenbox: newVal.attributes.mode !== "box",
                      hiddenslider: newVal.attributes.mode !== "slider",
                    });

                    if (this.mode === "slider" && prevMode !== "slider") {
                      this.hiddenState();
                    }
                  },
                },
                {
                  key: "selectedValueChanged",
                  value: function selectedValueChanged() {
                    if (this.value === Number(this.stateObj.state)) {
                      return;
                    }

                    this.hass.callService("input_number", "set_value", {
                      value: this.value,
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "stopPropagation",
                  value: function stopPropagation(ev) {
                    ev.stopPropagation();
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      hiddenbox: {
                        type: Boolean,
                        value: true,
                      },
                      hiddenslider: {
                        type: Boolean,
                        value: true,
                      },
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      stateObj: {
                        type: Object,
                        observer: "stateObjectChanged",
                      },
                      min: {
                        type: Number,
                        value: 0,
                      },
                      max: {
                        type: Number,
                        value: 100,
                      },
                      maxlength: {
                        type: Number,
                        value: 3,
                      },
                      step: Number,
                      value: Number,
                      mode: String,
                    };
                  },
                },
              ]
            );

            return StateCardInputNumber;
          })(
            Object(
              _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__[
                "mixinBehaviors"
              ]
            )(
              [
                _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__[
                  "IronResizableBehavior"
                ],
              ],
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-input_number", StateCardInputNumber);

        /***/
      },

    /***/ "./src/state-summary/state-card-input_select.ts":
      /*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_select.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../data/input-select */ "./src/data/input-select.ts"
        );
        /* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts"
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
            "\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n              <paper-item>",
            "</paper-item>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <state-badge .stateObj=",
            "></state-badge>\n      <paper-dropdown-menu-light\n        .label=",
            '\n        .value="',
            '"\n        @iron-select=',
            "\n        @click=",
            '\n      >\n        <paper-listbox slot="dropdown-content">\n          ',
            "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    ",
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

        // tslint:disable-next-line: no-duplicate-imports

        var StateCardInputSelect = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "state-card-input_select"
            ),
          ],
          function(_initialize, _LitElement) {
            var StateCardInputSelect =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StateCardInputSelect, _LitElement2);

                function StateCardInputSelect() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StateCardInputSelect);

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
                      StateCardInputSelect
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StateCardInputSelect;
              })(_LitElement);

            return {
              F: StateCardInputSelect,
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
                  key: "stateObj",
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
                      this.stateObj,
                      Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(this.stateObj),
                      this.stateObj.state,
                      this._selectedOptionChanged,
                      _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__[
                        "stopPropagation"
                      ],
                      this.stateObj.attributes.options.map(function(option) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject2(), option);
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(StateCardInputSelect.prototype),
                      "updated",
                      this
                    ).call(this, changedProps); // Update selected after rendering the items or else it won't work in Firefox

                    this.shadowRoot.querySelector(
                      "paper-listbox"
                    ).selected = this.stateObj.attributes.options.indexOf(
                      this.stateObj.state
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_selectedOptionChanged",
                  value: (function() {
                    var _selectedOptionChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        var option;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  option = ev.detail.item.innerText.trim();

                                  if (!(option === this.stateObj.state)) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 3:
                                  _context.next = 5;
                                  return Object(
                                    _data_input_select__WEBPACK_IMPORTED_MODULE_6__[
                                      "setInputSelectOption"
                                    ]
                                  )(this.hass, this.stateObj.entity_id, option);

                                case 5:
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

                    function _selectedOptionChanged(_x) {
                      return _selectedOptionChanged2.apply(this, arguments);
                    }

                    return _selectedOptionChanged;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject3());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/state-summary/state-card-input_text.js":
      /*!****************************************************!*\
  !*** ./src/state-summary/state-card-input_text.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
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
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        paper-input {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <paper-input\n          no-label-float=""\n          minlength="[[stateObj.attributes.min]]"\n          maxlength="[[stateObj.attributes.max]]"\n          value="{{value}}"\n          auto-validate="[[stateObj.attributes.pattern]]"\n          pattern="[[stateObj.attributes.pattern]]"\n          type="[[stateObj.attributes.mode]]"\n          on-change="selectedValueChanged"\n          on-click="stopPropagation"\n          placeholder="(empty value)"\n        >\n        </paper-input>\n      </div>\n    ',
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

        var StateCardInputText =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardInputText, _PolymerElement);

            function StateCardInputText() {
              _classCallCheck(this, StateCardInputText);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardInputText).apply(this, arguments)
              );
            }

            _createClass(
              StateCardInputText,
              [
                {
                  key: "stateObjectChanged",
                  value: function stateObjectChanged(newVal) {
                    this.value = newVal.state;
                  },
                },
                {
                  key: "selectedValueChanged",
                  value: function selectedValueChanged() {
                    if (this.value === this.stateObj.state) {
                      return;
                    }

                    this.hass.callService("input_text", "set_value", {
                      value: this.value,
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "stopPropagation",
                  value: function stopPropagation(ev) {
                    ev.stopPropagation();
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      stateObj: {
                        type: Object,
                        observer: "stateObjectChanged",
                      },
                      pattern: String,
                      value: String,
                    };
                  },
                },
              ]
            );

            return StateCardInputText;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-input_text", StateCardInputText);

        /***/
      },

    /***/ "./src/state-summary/state-card-lock.js":
      /*!**********************************************!*\
  !*** ./src/state-summary/state-card-lock.js ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <mwc-button\n          on-click="_callService"\n          data-service="unlock"\n          hidden$="[[!isLocked]]"\n          >[[localize(\'ui.card.lock.unlock\')]]</mwc-button\n        >\n        <mwc-button\n          on-click="_callService"\n          data-service="lock"\n          hidden$="[[isLocked]]"\n          >[[localize(\'ui.card.lock.lock\')]]</mwc-button\n        >\n      </div>\n    ',
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

        var StateCardLock =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardLock, _LocalizeMixin);

            function StateCardLock() {
              _classCallCheck(this, StateCardLock);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardLock).apply(this, arguments)
              );
            }

            _createClass(
              StateCardLock,
              [
                {
                  key: "_stateObjChanged",
                  value: function _stateObjChanged(newVal) {
                    if (newVal) {
                      this.isLocked = newVal.state === "locked";
                    }
                  },
                },
                {
                  key: "_callService",
                  value: function _callService(ev) {
                    ev.stopPropagation();
                    var service = ev.target.dataset.service;
                    var data = {
                      entity_id: this.stateObj.entity_id,
                    };
                    this.hass.callService("lock", service, data);
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "_stateObjChanged",
                      },
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      isLocked: Boolean,
                    };
                  },
                },
              ]
            );

            return StateCardLock;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-lock", StateCardLock);

        /***/
      },

    /***/ "./src/state-summary/state-card-media_player.js":
      /*!******************************************************!*\
  !*** ./src/state-summary/state-card-media_player.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n\n        .state {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          margin-left: 16px;\n          text-align: right;\n        }\n\n        .main-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--primary-text-color);\n          text-transform: capitalize;\n        }\n\n        .main-text[take-height] {\n          line-height: 40px;\n        }\n\n        .secondary-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <div class="state">\n          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">\n            [[computePrimaryText(localize, playerObj)]]\n          </div>\n          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>\n        </div>\n      </div>\n    ',
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

        var StateCardMediaPlayer =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardMediaPlayer, _LocalizeMixin);

            function StateCardMediaPlayer() {
              _classCallCheck(this, StateCardMediaPlayer);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardMediaPlayer).apply(this, arguments)
              );
            }

            _createClass(
              StateCardMediaPlayer,
              [
                {
                  key: "computePlayerObj",
                  value: function computePlayerObj(hass, stateObj) {
                    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "computePrimaryText",
                  value: function computePrimaryText(localize, playerObj) {
                    return (
                      playerObj.primaryTitle ||
                      localize(
                        "state.media_player.".concat(playerObj.stateObj.state)
                      ) ||
                      localize(
                        "state.default.".concat(playerObj.stateObj.state)
                      ) ||
                      playerObj.stateObj.state
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      playerObj: {
                        type: Object,
                        computed: "computePlayerObj(hass, stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return StateCardMediaPlayer;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-media_player", StateCardMediaPlayer);

        /***/
      },

    /***/ "./src/state-summary/state-card-scene.js":
      /*!***********************************************!*\
  !*** ./src/state-summary/state-card-scene.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            "\n        <mwc-button on-click=\"activateScene\"\n          >[[localize('ui.card.scene.activate')]]</mwc-button\n        >\n      </div>\n    ",
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

        var StateCardScene =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardScene, _LocalizeMixin);

            function StateCardScene() {
              _classCallCheck(this, StateCardScene);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardScene).apply(this, arguments)
              );
            }

            _createClass(
              StateCardScene,
              [
                {
                  key: "activateScene",
                  value: function activateScene(ev) {
                    ev.stopPropagation();
                    this.hass.callService("scene", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                    });
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return StateCardScene;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-scene", StateCardScene);

        /***/
      },

    /***/ "./src/state-summary/state-card-script.js":
      /*!************************************************!*\
  !*** ./src/state-summary/state-card-script.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n\n        ha-entity-toggle {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <template is="dom-if" if="[[stateObj.attributes.can_cancel]]">\n          <ha-entity-toggle\n            state-obj="[[stateObj]]"\n            hass="[[hass]]"\n          ></ha-entity-toggle>\n        </template>\n        <template is="dom-if" if="[[!stateObj.attributes.can_cancel]]">\n          <mwc-button on-click="fireScript"\n            >[[localize(\'ui.card.script.execute\')]]</mwc-button\n          >\n        </template>\n      </div>\n    ',
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

        var StateCardScript =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateCardScript, _LocalizeMixin);

            function StateCardScript() {
              _classCallCheck(this, StateCardScript);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardScript).apply(this, arguments)
              );
            }

            _createClass(
              StateCardScript,
              [
                {
                  key: "fireScript",
                  value: function fireScript(ev) {
                    ev.stopPropagation();
                    this.hass.callService("script", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                    });
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return StateCardScript;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-card-script", StateCardScript);

        /***/
      },

    /***/ "./src/state-summary/state-card-timer.js":
      /*!***********************************************!*\
  !*** ./src/state-summary/state-card-timer.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts"
        );
        /* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <div class="state">[[_secondsToDuration(timeRemaining)]]</div>\n      </div>\n    ',
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

        var StateCardTimer =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardTimer, _PolymerElement);

            function StateCardTimer() {
              _classCallCheck(this, StateCardTimer);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardTimer).apply(this, arguments)
              );
            }

            _createClass(
              StateCardTimer,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(StateCardTimer.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this.startInterval(this.stateObj);
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(StateCardTimer.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this.clearInterval();
                  },
                },
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(stateObj) {
                    this.startInterval(stateObj);
                  },
                },
                {
                  key: "clearInterval",
                  value: (function(_clearInterval) {
                    function clearInterval() {
                      return _clearInterval.apply(this, arguments);
                    }

                    clearInterval.toString = function() {
                      return _clearInterval.toString();
                    };

                    return clearInterval;
                  })(function() {
                    if (this._updateRemaining) {
                      clearInterval(this._updateRemaining);
                      this._updateRemaining = null;
                    }
                  }),
                },
                {
                  key: "startInterval",
                  value: function startInterval(stateObj) {
                    var _this = this;

                    this.clearInterval();
                    this.calculateRemaining(stateObj);

                    if (stateObj.state === "active") {
                      this._updateRemaining = setInterval(function() {
                        return _this.calculateRemaining(_this.stateObj);
                      }, 1000);
                    }
                  },
                },
                {
                  key: "calculateRemaining",
                  value: function calculateRemaining(stateObj) {
                    this.timeRemaining = Object(
                      _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "_secondsToDuration",
                  value: function _secondsToDuration(time) {
                    return Object(
                      _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ]
                    )(time);
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
                    )(_templateObject(), this.stateInfoTemplate);
                  },
                },
                {
                  key: "stateInfoTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      timeRemaining: Number,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return StateCardTimer;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-timer", StateCardTimer);

        /***/
      },

    /***/ "./src/state-summary/state-card-toggle.js":
      /*!************************************************!*\
  !*** ./src/state-summary/state-card-toggle.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        ha-entity-toggle {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <ha-entity-toggle\n          state-obj="[[stateObj]]"\n          hass="[[hass]]"\n        ></ha-entity-toggle>\n      </div>\n    ',
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

        var StateCardToggle =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardToggle, _PolymerElement);

            function StateCardToggle() {
              _classCallCheck(this, StateCardToggle);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardToggle).apply(this, arguments)
              );
            }

            _createClass(StateCardToggle, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject(), this.stateInfoTemplate);
                },
              },
              {
                key: "stateInfoTemplate",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject2());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: Object,
                    inDialog: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            return StateCardToggle;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-toggle", StateCardToggle);

        /***/
      },

    /***/ "./src/state-summary/state-card-vacuum.js":
      /*!************************************************!*\
  !*** ./src/state-summary/state-card-vacuum.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _components_ha_vacuum_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-vacuum-state */ "./src/components/ha-vacuum-state.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <ha-vacuum-state\n          hass="[[hass]]"\n          state-obj="[[stateObj]]"\n        ></ha-vacuum-state>\n      </div>\n    ',
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

        var StateCardVacuum =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardVacuum, _PolymerElement);

            function StateCardVacuum() {
              _classCallCheck(this, StateCardVacuum);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardVacuum).apply(this, arguments)
              );
            }

            _createClass(StateCardVacuum, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject(), this.stateInfoTemplate);
                },
              },
              {
                key: "stateInfoTemplate",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject2());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: Object,
                    inDialog: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            return StateCardVacuum;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-vacuum", StateCardVacuum);

        /***/
      },

    /***/ "./src/state-summary/state-card-water_heater.js":
      /*!******************************************************!*\
  !*** ./src/state-summary/state-card-water_heater.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _components_ha_water_heater_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/ha-water_heater-state */ "./src/components/ha-water_heater-state.js"
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
            '\n      <state-info\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog="[[inDialog]]"\n      ></state-info>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-water_heater-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        ',
            '\n        <ha-water_heater-state\n          hass="[[hass]]"\n          state-obj="[[stateObj]]"\n        ></ha-water_heater-state>\n      </div>\n    ',
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

        var StateCardWaterHeater =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardWaterHeater, _PolymerElement);

            function StateCardWaterHeater() {
              _classCallCheck(this, StateCardWaterHeater);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardWaterHeater).apply(this, arguments)
              );
            }

            _createClass(StateCardWaterHeater, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject(), this.stateInfoTemplate);
                },
              },
              {
                key: "stateInfoTemplate",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject2());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: Object,
                    inDialog: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            return StateCardWaterHeater;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-water_heater", StateCardWaterHeater);

        /***/
      },

    /***/ "./src/state-summary/state-card-weblink.js":
      /*!*************************************************!*\
  !*** ./src/state-summary/state-card-weblink.js ***!
  \*************************************************/
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
        /* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
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
            '\n      <state-badge state-obj="[[stateObj]]"></state-badge>\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <style>\n        :host {\n          display: block;\n        }\n        .name {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          color: var(--primary-color);\n\n          text-transform: capitalize;\n          line-height: 40px;\n          margin-left: 16px;\n        }\n      </style>\n\n      ",
            '\n      <a href$="[[stateObj.state]]" target="_blank" class="name" id="link"\n        >[[_computeStateName(stateObj)]]</a\n      >\n    ',
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

        var StateCardWeblink =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(StateCardWeblink, _PolymerElement);

            function StateCardWeblink() {
              _classCallCheck(this, StateCardWeblink);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateCardWeblink).apply(this, arguments)
              );
            }

            _createClass(
              StateCardWeblink,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(StateCardWeblink.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.addEventListener("click", function(ev) {
                      return _this.onTap(ev);
                    });
                  },
                },
                {
                  key: "_computeStateName",
                  value: function _computeStateName(stateObj) {
                    return Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "onTap",
                  value: function onTap(ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    window.open(this.stateObj.state, "_blank");
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
                    )(_templateObject(), this.stateBadgeTemplate);
                  },
                },
                {
                  key: "stateBadgeTemplate",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]
                    )(_templateObject2());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      stateObj: Object,
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return StateCardWeblink;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("state-card-weblink", StateCardWeblink);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtaGlzdG9yeV9ncmFwaC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS12YWN1dW0tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY2xpbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLW1lZGlhX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXNjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC12YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13YXRlcl9oZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13ZWJsaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNhcmQvcGFwZXItY2FyZFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiO1xuaW1wb3J0IFwiLi4vZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGFcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhSGlzdG9yeUdyYXBoQ2FyZCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWNhcmQ6bm90KFtkaWFsb2ddKSAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2FyZFtkaWFsb2ddIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBwcmV2ZW50IG5ldyBzdGFja2luZyBjb250ZXh0LCBjaGFydCB0b29sdGlwIG5lZWRzIHRvIG92ZXJmbG93ICovXG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTZweCAxMnB4O1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jYXJkW2RpYWxvZ10gLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgZmlsdGVyLXR5cGU9XCJyZWNlbnQtZW50aXR5XCJcbiAgICAgICAgZW50aXR5LWlkPVwiW1tjb21wdXRlSGlzdG9yeUVudGl0aWVzKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgZGF0YT1cInt7c3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICBpcy1sb2FkaW5nPVwie3tzdGF0ZUhpc3RvcnlMb2FkaW5nfX1cIlxuICAgICAgICBjYWNoZS1jb25maWc9XCJbW2NhY2hlQ29uZmlnXV1cIlxuICAgICAgPjwvaGEtc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgPHBhcGVyLWNhcmRcbiAgICAgICAgZGlhbG9nJD1cIltbaW5EaWFsb2ddXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiY2FyZFRhcHBlZFwiXG4gICAgICAgIGVsZXZhdGlvbj1cIltbY29tcHV0ZUVsZXZhdGlvbihpbkRpYWxvZyldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5bW2NvbXB1dGVUaXRsZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tzdGF0ZUhpc3RvcnlMb2FkaW5nXV1cIlxuICAgICAgICAgICAgdXAtdG8tbm93XG4gICAgICAgICAgICBuby1zaW5nbGVcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iak9ic2VydmVyXCIsXG4gICAgICB9LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgc3RhdGVIaXN0b3J5TG9hZGluZzogQm9vbGVhbixcbiAgICAgIGNhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiAwLFxuICAgICAgICAgIGNhY2hlS2V5OiBudWxsLFxuICAgICAgICAgIGhvdXJzVG9TaG93OiAyNCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqT2JzZXJ2ZXIoc3RhdGVPYmopIHtcbiAgICBpZiAoIXN0YXRlT2JqKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZy5jYWNoZUtleSAhPT0gc3RhdGVPYmouZW50aXR5X2lkIHx8XG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLnJlZnJlc2ggIT09IChzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlZnJlc2ggfHwgMCkgfHxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcuaG91cnNUb1Nob3cgIT09IChzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXJzX3RvX3Nob3cgfHwgMjQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNhY2hlQ29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICByZWZyZXNoOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlZnJlc2ggfHwgMCxcbiAgICAgICAgICBjYWNoZUtleTogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgICAgIGhvdXJzVG9TaG93OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXJzX3RvX3Nob3cgfHwgMjQsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzcyhpbkRpYWxvZykge1xuICAgIHJldHVybiBpbkRpYWxvZyA/IFwiXCIgOiBcImNvbnRlbnRcIjtcbiAgfVxuXG4gIGNvbXB1dGVIaXN0b3J5RW50aXRpZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQ7XG4gIH1cblxuICBjb21wdXRlRWxldmF0aW9uKGluRGlhbG9nKSB7XG4gICAgcmV0dXJuIGluRGlhbG9nID8gMCA6IDE7XG4gIH1cblxuICBjYXJkVGFwcGVkKGV2KSB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDYxMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDU1MHB4KVwiKTtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWhpc3RvcnlfZ3JhcGgtY2FyZFwiLCBIYUhpc3RvcnlHcmFwaENhcmQpO1xuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0cmlidXRlQ2xhc3NOYW1lcyhcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGF0dHJpYnV0ZXM6IHN0cmluZ1tdXG4pOiBzdHJpbmcge1xuICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICAubWFwKChhdHRyaWJ1dGUpID0+XG4gICAgICBhdHRyaWJ1dGUgaW4gc3RhdGVPYmouYXR0cmlidXRlcyA/IFwiaGFzLVwiICsgYXR0cmlidXRlIDogXCJcIlxuICAgIClcbiAgICAuZmlsdGVyKChhdHRyKSA9PiBhdHRyICE9PSBcIlwiKVxuICAgIC5qb2luKFwiIFwiKTtcbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRvbWFpbjogc3RyaW5nKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICByZXR1cm4gXCJsb2NrXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgcmV0dXJuIFwib3Blbl9jb3ZlclwiIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiBcInR1cm5fb25cIiBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gXCIuL2Nhbl90b2dnbGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvblwiIHx8IHN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gXCIuL2Nhbl90b2dnbGVfc3RhdGVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBET01BSU5TX0hJREVfTU9SRV9JTkZPLCBET01BSU5TX1dJVEhfTU9SRV9JTkZPIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqOiBIYXNzRW50aXR5KSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKERPTUFJTlNfSElERV9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBcImhpZGRlblwiO1xuICB9XG4gIHJldHVybiBcImRlZmF1bHRcIjtcbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNvbnN0IFNUQVRFU19JTlRFUkNFUFRBQkxFID0ge1xuICBjbGVhbmluZzoge1xuICAgIGFjdGlvbjogXCJyZXR1cm5fdG9fYmFzZVwiLFxuICAgIHNlcnZpY2U6IFwicmV0dXJuX3RvX2Jhc2VcIixcbiAgfSxcbiAgZG9ja2VkOiB7XG4gICAgYWN0aW9uOiBcInN0YXJ0X2NsZWFuaW5nXCIsXG4gICAgc2VydmljZTogXCJzdGFydFwiLFxuICB9LFxuICBpZGxlOiB7XG4gICAgYWN0aW9uOiBcInN0YXJ0X2NsZWFuaW5nXCIsXG4gICAgc2VydmljZTogXCJzdGFydFwiLFxuICB9LFxuICBvZmY6IHtcbiAgICBhY3Rpb246IFwidHVybl9vblwiLFxuICAgIHNlcnZpY2U6IFwidHVybl9vblwiLFxuICB9LFxuICBvbjoge1xuICAgIGFjdGlvbjogXCJ0dXJuX29mZlwiLFxuICAgIHNlcnZpY2U6IFwidHVybl9vZmZcIixcbiAgfSxcbiAgcGF1c2VkOiB7XG4gICAgYWN0aW9uOiBcInJlc3VtZV9jbGVhbmluZ1wiLFxuICAgIHNlcnZpY2U6IFwic3RhcnRcIixcbiAgfSxcbn07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFWYWN1dW1TdGF0ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIiBkaXNhYmxlZD1cIltbIV9pbnRlcmNlcHRhYmxlXV1cIlxuICAgICAgICA+W1tfY29tcHV0ZUxhYmVsKHN0YXRlT2JqLnN0YXRlLCBfaW50ZXJjZXB0YWJsZSldXTwvbXdjLWJ1dHRvblxuICAgICAgPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBfaW50ZXJjZXB0YWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcIl9jb21wdXRlSW50ZXJjZXB0YWJsZShzdGF0ZU9iai5zdGF0ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZUludGVyY2VwdGFibGUoc3RhdGUsIHN1cHBvcnRlZEZlYXR1cmVzKSB7XG4gICAgcmV0dXJuIHN0YXRlIGluIFNUQVRFU19JTlRFUkNFUFRBQkxFICYmIHN1cHBvcnRlZEZlYXR1cmVzICE9PSAwO1xuICB9XG5cbiAgX2NvbXB1dGVMYWJlbChzdGF0ZSwgaW50ZXJjZXB0YWJsZSkge1xuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlXG4gICAgICA/IHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgYHVpLmNhcmQudmFjdXVtLmFjdGlvbnMuJHtTVEFURVNfSU5URVJDRVBUQUJMRVtzdGF0ZV0uYWN0aW9ufWBcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmxvY2FsaXplKGBzdGF0ZS52YWN1dW0uJHtzdGF0ZX1gKTtcbiAgfVxuXG4gIF9jYWxsU2VydmljZShldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5zdGF0ZU9iajtcbiAgICBjb25zdCBzZXJ2aWNlID0gU1RBVEVTX0lOVEVSQ0VQVEFCTEVbc3RhdGVPYmouc3RhdGVdLnNlcnZpY2U7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwidmFjdXVtXCIsIHNlcnZpY2UsIHsgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXZhY3V1bS1zdGF0ZVwiLCBIYVZhY3V1bVN0YXRlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVdhdGVySGVhdGVyU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YXJnZXQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGFyZ2V0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGUtbGFiZWxcIj4gW1tfbG9jYWxpemVTdGF0ZShzdGF0ZU9iai5zdGF0ZSldXSA8L3NwYW4+XG4gICAgICAgIFtbY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaildXVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjdXJyZW50U3RhdHVzXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndhdGVyX2hlYXRlci5jdXJyZW50bHknKV1dOiBbW2N1cnJlbnRTdGF0dXNdXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIC8vIFdlJ3JlIHVzaW5nIFwiIT0gbnVsbFwiIG9uIHB1cnBvc2Ugc28gdGhhdCB3ZSBtYXRjaCBib3RoIG51bGwgYW5kIHVuZGVmaW5lZC5cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyAhPSBudWxsICYmXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fSAtICR7XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaFxuICAgICAgfSAke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlfSAke1xuICAgICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZVxuICAgICAgfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKGBzdGF0ZS53YXRlcl9oZWF0ZXIuJHtzdGF0ZX1gKSB8fCBzdGF0ZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtd2F0ZXJfaGVhdGVyLXN0YXRlXCIsIEhhV2F0ZXJIZWF0ZXJTdGF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jbGltYXRlLXN0YXRlXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZENsaW1hdGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNsaW1hdGUtc3RhdGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLWNsaW1hdGUtc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLWNsaW1hdGUtc3RhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtY2xpbWF0ZVwiLCBTdGF0ZUNhcmRDbGltYXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ29uZmlndXJhdG9yIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvbiBoaWRkZW4kPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgICAgICA+W1tfbG9jYWxpemVTdGF0ZShzdGF0ZU9iai5zdGF0ZSldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBwcmUgbG9hZCB0aGUgaW1hZ2Ugc28gdGhlIGRpYWxvZyBpcyByZW5kZXJlZCB0aGUgcHJvcGVyIHNpemUgLS0+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5kZXNjcmlwdGlvbl9pbWFnZV1dXCI+XG4gICAgICAgIDxpbWcgaGlkZGVuPVwiXCIgc3JjPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uX2ltYWdlXV1cIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKGBzdGF0ZS5jb25maWd1cmF0b3IuJHtzdGF0ZX1gKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jb25maWd1cmF0b3JcIiwgU3RhdGVDYXJkQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jbGltYXRlXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtY292ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1kaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfbnVtYmVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfc2VsZWN0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtaW5wdXRfdGV4dFwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWxvY2tcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1zY2VuZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXRpbWVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdG9nZ2xlXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdmFjdXVtXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtd2F0ZXJfaGVhdGVyXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtd2VibGlua1wiO1xuXG5pbXBvcnQgc3RhdGVDYXJkVHlwZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGVcIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ29udGVudCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopXCJdO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGxldCBzdGF0ZUNhcmQ7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcykgcmV0dXJuO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwiY3VzdG9tX3VpX3N0YXRlX2NhcmRcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzKSB7XG4gICAgICBzdGF0ZUNhcmQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1c3RvbV91aV9zdGF0ZV9jYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZUNhcmQgPSBcInN0YXRlLWNhcmQtXCIgKyBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKHRoaXMsIHN0YXRlQ2FyZC50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICBoYXNzOiBoYXNzLFxuICAgICAgc3RhdGVPYmo6IHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2c6IGluRGlhbG9nLFxuICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWNvbnRlbnRcIiwgU3RhdGVDYXJkQ29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzXCI7XG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ292ZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBsYXlvdXRcIj5cbiAgICAgICAgICA8aGEtY292ZXItY29udHJvbHNcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2VudGl0eU9iai5pc1RpbHRPbmx5XV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgPjwvaGEtY292ZXItY29udHJvbHM+XG4gICAgICAgICAgPGhhLWNvdmVyLXRpbHQtY29udHJvbHNcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgID48L2hhLWNvdmVyLXRpbHQtY29udHJvbHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdmFyIGVudGl0eSA9IG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jb3ZlclwiLCBTdGF0ZUNhcmRDb3Zlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlRGlzcGxheSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCBhdHRyaWJ1dGVDbGFzc05hbWVzIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZERpc3BsYXkgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1iYXNlbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS1pbmZvIHtcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuc3RhdGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLmhhcy11bml0X29mX21lYXN1cmVtZW50IHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgW1tjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZU9iaiwgbGFuZ3VhZ2UpXV1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGVPYmosIGxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlT2JqLCBsYW5ndWFnZSk7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICBcInN0YXRlXCIsXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJ1bml0X29mX21lYXN1cmVtZW50XCJdKSxcbiAgICBdO1xuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWRpc3BsYXlcIiwgU3RhdGVDYXJkRGlzcGxheSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgSXJvblJlc2l6YWJsZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXNsaWRlclwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRJbnB1dE51bWJlciBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSxcbiAgUG9seW1lckVsZW1lbnRcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLXNsaWRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlcnN0YXRlIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc2xpZGVyW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIiBpZD1cImlucHV0X251bWJlcl9jYXJkXCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLXNsaWRlclxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICBzdGVwPVwiW1tzdGVwXV1cIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuc2xpZGVyXV1cIlxuICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgb24tY2hhbmdlPVwic2VsZWN0ZWRWYWx1ZUNoYW5nZWRcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICBpZD1cInNsaWRlclwiXG4gICAgICAgICAgaWdub3JlLWJhci10b3VjaD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgPC9oYS1zbGlkZXI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiXCJcbiAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXFxcLl1bMC05XSspP1wiXG4gICAgICAgICAgc3RlcD1cIltbc3RlcF1dXCJcbiAgICAgICAgICBtaW49XCJbW21pbl1dXCJcbiAgICAgICAgICBtYXg9XCJbW21heF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgb24tY2hhbmdlPVwic2VsZWN0ZWRWYWx1ZUNoYW5nZWRcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICBoaWRkZW49XCJbW2hpZGRlbmJveF1dXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIiBoaWRkZW49XCJbW2hpZGRlbmJveF1dXCI+XG4gICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRdXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwic2xpZGVyc3RhdGVcIlxuICAgICAgICAgIGNsYXNzPVwic3RhdGUgc2xpZGVyc3RhdGVcIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuc2xpZGVyXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgW1t2YWx1ZV1dIFtbc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50XV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGRlblN0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByby5vYnNlcnZlKHRoaXMuJC5pbnB1dF9udW1iZXJfY2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuaGlkZGVuU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaGlkZGVuYm94OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGhpZGRlbnNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iamVjdENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IE51bWJlcixcbiAgICAgIHZhbHVlOiBOdW1iZXIsXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIGhpZGRlblN0YXRlKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09IFwic2xpZGVyXCIpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXJ3aWR0aCA9IHRoaXMuJC5zbGlkZXIub2Zmc2V0V2lkdGg7XG4gICAgaWYgKHNsaWRlcndpZHRoIDwgMTAwKSB7XG4gICAgICB0aGlzLiQuc2xpZGVyc3RhdGUuaGlkZGVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNsaWRlcndpZHRoID49IDE0NSkge1xuICAgICAgdGhpcy4kLnNsaWRlcnN0YXRlLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqZWN0Q2hhbmdlZChuZXdWYWwpIHtcbiAgICBjb25zdCBwcmV2TW9kZSA9IHRoaXMubW9kZTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbWluOiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMubWluKSxcbiAgICAgIG1heDogTnVtYmVyKG5ld1ZhbC5hdHRyaWJ1dGVzLm1heCksXG4gICAgICBzdGVwOiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMuc3RlcCksXG4gICAgICB2YWx1ZTogTnVtYmVyKG5ld1ZhbC5zdGF0ZSksXG4gICAgICBtb2RlOiBTdHJpbmcobmV3VmFsLmF0dHJpYnV0ZXMubW9kZSksXG4gICAgICBtYXhsZW5ndGg6IFN0cmluZyhuZXdWYWwuYXR0cmlidXRlcy5tYXgpLmxlbmd0aCxcbiAgICAgIGhpZGRlbmJveDogbmV3VmFsLmF0dHJpYnV0ZXMubW9kZSAhPT0gXCJib3hcIixcbiAgICAgIGhpZGRlbnNsaWRlcjogbmV3VmFsLmF0dHJpYnV0ZXMubW9kZSAhPT0gXCJzbGlkZXJcIixcbiAgICB9KTtcbiAgICBpZiAodGhpcy5tb2RlID09PSBcInNsaWRlclwiICYmIHByZXZNb2RlICE9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLmhpZGRlblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IE51bWJlcih0aGlzLnN0YXRlT2JqLnN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF9udW1iZXJcIiwgXCJzZXRfdmFsdWVcIiwge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1pbnB1dF9udW1iZXJcIiwgU3RhdGVDYXJkSW5wdXROdW1iZXIpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IFBhcGVySXRlbUVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBJbnB1dFNlbGVjdEVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc2V0SW5wdXRTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vZGF0YS9pbnB1dC1zZWxlY3RcIjtcbmltcG9ydCB7IFBvbHltZXJJcm9uU2VsZWN0RXZlbnQgfSBmcm9tIFwiLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgc3RvcFByb3BhZ2F0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0YXRlLWNhcmQtaW5wdXRfc2VsZWN0XCIpXG5jbGFzcyBTdGF0ZUNhcmRJbnB1dFNlbGVjdCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaiE6IElucHV0U2VsZWN0RW50aXR5O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSAuc3RhdGVPYmo9JHt0aGlzLnN0YXRlT2JqfT48L3N0YXRlLWJhZGdlPlxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbiAgICAgICAgLmxhYmVsPSR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX1cbiAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnN0YXRlT2JqLnN0YXRlfVwiXG4gICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX3NlbGVjdGVkT3B0aW9uQ2hhbmdlZH1cbiAgICAgICAgQGNsaWNrPSR7c3RvcFByb3BhZ2F0aW9ufVxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wdGlvbnMubWFwKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHtvcHRpb259PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgcmVuZGVyaW5nIHRoZSBpdGVtcyBvciBlbHNlIGl0IHdvbid0IHdvcmsgaW4gRmlyZWZveFxuICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcbiAgICAgIFwicGFwZXItbGlzdGJveFwiXG4gICAgKSEuc2VsZWN0ZWQgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3B0aW9ucy5pbmRleE9mKHRoaXMuc3RhdGVPYmouc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2VsZWN0ZWRPcHRpb25DaGFuZ2VkKFxuICAgIGV2OiBQb2x5bWVySXJvblNlbGVjdEV2ZW50PFBhcGVySXRlbUVsZW1lbnQ+XG4gICkge1xuICAgIGNvbnN0IG9wdGlvbiA9IGV2LmRldGFpbC5pdGVtLmlubmVyVGV4dC50cmltKCk7XG4gICAgaWYgKG9wdGlvbiA9PT0gdGhpcy5zdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBzZXRJbnB1dFNlbGVjdE9wdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLCBvcHRpb24pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgc3RhdGUtYmFkZ2Uge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS1saWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogNTNweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGF0ZS1jYXJkLWlucHV0X3NlbGVjdFwiOiBTdGF0ZUNhcmRJbnB1dFNlbGVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZElucHV0VGV4dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl1dXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnBhdHRlcm5dXVwiXG4gICAgICAgICAgcGF0dGVybj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5wYXR0ZXJuXV1cIlxuICAgICAgICAgIHR5cGU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubW9kZV1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKGVtcHR5IHZhbHVlKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqZWN0Q2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGF0dGVybjogU3RyaW5nLFxuICAgICAgdmFsdWU6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGVPYmplY3RDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWwuc3RhdGU7XG4gIH1cblxuICBzZWxlY3RlZFZhbHVlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy5zdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF90ZXh0XCIsIFwic2V0X3ZhbHVlXCIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtaW5wdXRfdGV4dFwiLCBTdGF0ZUNhcmRJbnB1dFRleHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRMb2NrIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJ1bmxvY2tcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLnVubG9jaycpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJsb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfc3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzTG9ja2VkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBuZXdWYWwuc3RhdGUgPT09IFwibG9ja2VkXCI7XG4gICAgfVxuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5kYXRhc2V0LnNlcnZpY2U7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsb2NrXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWxvY2tcIiwgU3RhdGVDYXJkTG9jayk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZE1lZGlhUGxheWVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXRleHQge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLXRleHRbdGFrZS1oZWlnaHRdIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRhcnktdGV4dCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi10ZXh0XCIgdGFrZS1oZWlnaHQkPVwiW1shcGxheWVyT2JqLnNlY29uZGFyeVRpdGxlXV1cIj5cbiAgICAgICAgICAgIFtbY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5LXRleHRcIj5bW3BsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHBsYXllck9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLnByaW1hcnlUaXRsZSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLm1lZGlhX3BsYXllci4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLmRlZmF1bHQuJHtwbGF5ZXJPYmouc3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHBsYXllck9iai5zdGF0ZU9iai5zdGF0ZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtbWVkaWFfcGxheWVyXCIsIFN0YXRlQ2FyZE1lZGlhUGxheWVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFNjZW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImFjdGl2YXRlU2NlbmVcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLnNjZW5lLmFjdGl2YXRlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZVNjZW5lKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwic2NlbmVcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtc2NlbmVcIiwgU3RhdGVDYXJkU2NlbmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRTY3JpcHQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY2FuX2NhbmNlbF1dXCI+XG4gICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5jYW5fY2FuY2VsXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImZpcmVTY3JpcHRcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQuc2NyaXB0LmV4ZWN1dGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZmlyZVNjcmlwdChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInNjcmlwdFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1zY3JpcHRcIiwgU3RhdGVDYXJkU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCB0aW1lclRpbWVSZW1haW5pbmcgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmdcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcblxuY2xhc3MgU3RhdGVDYXJkVGltZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5bW19zZWNvbmRzVG9EdXJhdGlvbih0aW1lUmVtYWluaW5nKV1dPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdGltZVJlbWFpbmluZzogTnVtYmVyLFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqKSB7XG4gICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX3VwZGF0ZVJlbWFpbmluZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl91cGRhdGVSZW1haW5pbmcpO1xuICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzdGFydEludGVydmFsKHN0YXRlT2JqKSB7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmopO1xuXG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICB0aGlzLl91cGRhdGVSZW1haW5pbmcgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKCkgPT4gdGhpcy5jYWxjdWxhdGVSZW1haW5pbmcodGhpcy5zdGF0ZU9iaiksXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlUmVtYWluaW5nKHN0YXRlT2JqKSB7XG4gICAgdGhpcy50aW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIF9zZWNvbmRzVG9EdXJhdGlvbih0aW1lKSB7XG4gICAgcmV0dXJuIHNlY29uZHNUb0R1cmF0aW9uKHRpbWUpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXRpbWVyXCIsIFN0YXRlQ2FyZFRpbWVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFRvZ2dsZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1lbnRpdHktdG9nZ2xlIHtcbiAgICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtdG9nZ2xlXCIsIFN0YXRlQ2FyZFRvZ2dsZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS12YWN1dW0tc3RhdGVcIjtcblxuY2xhc3MgU3RhdGVDYXJkVmFjdXVtIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtdmFjdXVtLXN0YXRlXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICA+PC9oYS12YWN1dW0tc3RhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtdmFjdXVtXCIsIFN0YXRlQ2FyZFZhY3V1bSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS13YXRlcl9oZWF0ZXItc3RhdGVcIjtcblxuY2xhc3MgU3RhdGVDYXJkV2F0ZXJIZWF0ZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1zdGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLXN0YXRlXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICA+PC9oYS13YXRlcl9oZWF0ZXItc3RhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtd2F0ZXJfaGVhdGVyXCIsIFN0YXRlQ2FyZFdhdGVySGVhdGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRXZWJsaW5rIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfVxuICAgICAgPGEgaHJlZiQ9XCJbW3N0YXRlT2JqLnN0YXRlXV1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hbWVcIiBpZD1cImxpbmtcIlxuICAgICAgICA+W1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXTwvYVxuICAgICAgPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlQmFkZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L3N0YXRlLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5vblRhcChldikpO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBvblRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93Lm9wZW4odGhpcy5zdGF0ZU9iai5zdGF0ZSwgXCJfYmxhbmtcIik7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtd2VibGlua1wiLCBTdGF0ZUNhcmRXZWJsaW5rKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQXRIQTtBQUNBO0FBbURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFaQTtBQXFCQTs7OztBQTdFQTtBQUNBO0FBd0hBOzs7Ozs7Ozs7Ozs7QUN0SUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFyQkE7QUEyQkE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBakRBO0FBQ0E7QUFpQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBOzs7O0FBL0JBO0FBQ0E7QUFtREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFsRUE7QUFDQTtBQWtDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBM0NBO0FBQ0E7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBc0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBN0NBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUNBOzs7QUFoREE7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTdDQTtBQUNBO0FBa0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBZEE7QUFDQTtBQThCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdkRBO0FBQ0E7QUF3QkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTs7OztBQW5EQTtBQUNBO0FBeURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBdUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBcEZBO0FBQ0E7QUF5Q0E7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBOzs7O0FBckVBO0FBQ0E7QUFzRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBbUZBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXpLQTtBQUNBO0FBa0VBOzs7QUFFQTtBQUNBO0FBT0E7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQWhDQTtBQWtDQTs7OztBQXBJQTtBQUNBO0FBK0tBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBVUE7QUFBQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFvQkE7OztBQS9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXpFQTtBQUNBO0FBeUJBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7Ozs7QUF4REE7QUFDQTtBQTRFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFuRUE7QUFDQTtBQTBCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQVlBOzs7O0FBckRBO0FBQ0E7QUFxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQS9FQTtBQUNBO0FBd0NBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUFuRUE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQTlDQTtBQUNBO0FBaUJBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBeENBO0FBQ0E7QUFnREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUExREE7QUFDQTtBQTZCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQXBEQTtBQUNBO0FBNERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXJGQTtBQUNBO0FBa0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUE3Q0E7QUFDQTtBQXVGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFpQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7Ozs7QUF4Q0E7QUFDQTtBQXlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFXQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQWxDQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTdDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBckRBO0FBQ0E7QUFxQkE7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7O0FBdkNBO0FBQ0E7QUF1REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
