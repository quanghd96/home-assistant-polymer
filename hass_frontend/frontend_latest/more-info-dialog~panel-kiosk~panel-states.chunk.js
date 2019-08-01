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

        /*
         * @appliesMixin EventsMixin
         */

        class HaHistoryGraphCard extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        paper-card:not([dialog]) .content {
          padding: 0 16px 16px;
        }
        paper-card[dialog] {
          padding-top: 16px;
          background-color: transparent;
        }
        paper-card {
          width: 100%;
          /* prevent new stacking context, chart tooltip needs to overflow */
          position: static;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 20px 16px 12px;
          @apply --paper-font-common-nowrap;
        }
        paper-card[dialog] .header {
          display: none;
        }
      </style>
      <ha-state-history-data
        hass="[[hass]]"
        filter-type="recent-entity"
        entity-id="[[computeHistoryEntities(stateObj)]]"
        data="{{stateHistory}}"
        is-loading="{{stateHistoryLoading}}"
        cache-config="[[cacheConfig]]"
      ></ha-state-history-data>
      <paper-card
        dialog$="[[inDialog]]"
        on-click="cardTapped"
        elevation="[[computeElevation(inDialog)]]"
      >
        <div class="header">[[computeTitle(stateObj)]]</div>
        <div class="content">
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[stateHistoryLoading]]"
            up-to-now
            no-single
          >
          </state-history-charts>
        </div>
      </paper-card>
    `;
          }

          static get properties() {
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
          }

          stateObjObserver(stateObj) {
            if (!stateObj) return;

            if (
              this.cacheConfig.cacheKey !== stateObj.entity_id ||
              this.cacheConfig.refresh !== (stateObj.attributes.refresh || 0) ||
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
          }

          computeTitle(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(stateObj);
          }

          computeContentClass(inDialog) {
            return inDialog ? "" : "content";
          }

          computeHistoryEntities(stateObj) {
            return stateObj.attributes.entity_id;
          }

          computeElevation(inDialog) {
            return inDialog ? 0 : 1;
          }

          cardTapped(ev) {
            const mq = window.matchMedia(
              "(min-width: 610px) and (min-height: 550px)"
            );

            if (mq.matches) {
              ev.stopPropagation();
              this.fire("hass-more-info", {
                entityId: this.stateObj.entity_id,
              });
            }
          }
        }

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
          const rootEl = root;
          let customEl;

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
            Object.keys(attributes).forEach((key) => {
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
            .map((attribute) =>
              attribute in stateObj.attributes ? "has-" + attribute : ""
            )
            .filter((attr) => attr !== "")
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
          const services = hass.services[domain];

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
          const domain = Object(
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

          const domain = Object(
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
          const domain = Object(
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

    /***/ "./src/components/entity/state-info.js":
      /*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
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
        /* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
          }

          static get styleTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
          }

          static get stateBadgeTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
          }

          static get infoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: () => false,
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "computeRTL(hass)",
              },
            };
          }

          computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(stateObj);
          }

          computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("state-info", StateInfo);

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

        const STATES_INTERCEPTABLE = {
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

        class HaVacuumState extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              _interceptable: {
                type: Boolean,
                computed:
                  "_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)",
              },
            };
          }

          _computeInterceptable(state, supportedFeatures) {
            return state in STATES_INTERCEPTABLE && supportedFeatures !== 0;
          }

          _computeLabel(state, interceptable) {
            return interceptable
              ? this.localize(
                  `ui.card.vacuum.actions.${STATES_INTERCEPTABLE[state].action}`
                )
              : this.localize(`state.vacuum.${state}`);
          }

          _callService(ev) {
            ev.stopPropagation();
            const stateObj = this.stateObj;
            const service = STATES_INTERCEPTABLE[stateObj.state].service;
            this.hass.callService("vacuum", service, {
              entity_id: stateObj.entity_id,
            });
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaWaterHeaterState extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj.state)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
            };
          }

          computeTarget(hass, stateObj) {
            if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

            if (
              stateObj.attributes.target_temp_low != null &&
              stateObj.attributes.target_temp_high != null
            ) {
              return `${stateObj.attributes.target_temp_low} - ${
                stateObj.attributes.target_temp_high
              } ${hass.config.unit_system.temperature}`;
            }

            if (stateObj.attributes.temperature != null) {
              return `${stateObj.attributes.temperature} ${
                hass.config.unit_system.temperature
              }`;
            }

            return "";
          }

          _localizeState(state) {
            return this.localize(`state.water_heater.${state}`) || state;
          }
        }

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

        class StateCardClimate extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardConfigurator extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj.state)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }

          _localizeState(state) {
            return this.localize(`state.configurator.${state}`);
          }
        }

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

        class StateCardContent extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
          "PolymerElement"
        ] {
          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }

          static get observers() {
            return ["inputChanged(hass, inDialog, stateObj)"];
          }

          inputChanged(hass, inDialog, stateObj) {
            let stateCard;
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
          }
        }

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

        class StateCardCover extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="horizontal layout">
          <ha-cover-controls
            hidden$="[[entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-controls>
          <ha-cover-tilt-controls
            hidden$="[[!entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-tilt-controls>
        </div>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          computeEntityObj(hass, stateObj) {
            var entity = new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ](hass, stateObj);
            return entity;
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardDisplay extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-justified;
          @apply --layout-baseline;
        }

        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          max-width: 40%;
          flex: 0 0 auto;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      </style>

      ${this.stateInfoTemplate}
      <div class$="[[computeClassNames(stateObj)]]">
        [[computeStateDisplay(localize, stateObj, language)]]
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          computeStateDisplay(localize, stateObj, language) {
            return Object(
              _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(localize, stateObj, language);
          }

          computeClassNames(stateObj) {
            const classes = [
              "state",
              Object(
                _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_6__[
                  "default"
                ]
              )(stateObj, ["unit_of_measurement"]),
            ];
            return classes.join(" ");
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__[
                "computeRTL"
              ]
            )(hass);
          }
        }

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

        class StateCardInputNumber extends Object(
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
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        paper-input {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin=""
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <paper-input
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </paper-input>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          ready() {
            super.ready();

            if (typeof ResizeObserver === "function") {
              const ro = new ResizeObserver((entries) => {
                entries.forEach(() => {
                  this.hiddenState();
                });
              });
              ro.observe(this.$.input_number_card);
            } else {
              this.addEventListener("iron-resize", this.hiddenState);
            }
          }

          static get properties() {
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
          }

          hiddenState() {
            if (this.mode !== "slider") return;
            const sliderwidth = this.$.slider.offsetWidth;

            if (sliderwidth < 100) {
              this.$.sliderstate.hidden = true;
            } else if (sliderwidth >= 145) {
              this.$.sliderstate.hidden = false;
            }
          }

          stateObjectChanged(newVal) {
            const prevMode = this.mode;
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
          }

          selectedValueChanged() {
            if (this.value === Number(this.stateObj.state)) {
              return;
            }

            this.hass.callService("input_number", "set_value", {
              value: this.value,
              entity_id: this.stateObj.entity_id,
            });
          }

          stopPropagation(ev) {
            ev.stopPropagation();
          }
        }

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
          _getDecoratorsApi = function() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(O, elements) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function(F, elements) {
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
            defineClassElement: function(receiver, element) {
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
            decorateClass: function(elements, decorators) {
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
            addElementPlacement: function(element, placements, silent) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function(element, placements) {
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
            decorateConstructor: function(elements, decorators) {
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
            fromElementDescriptor: function(element) {
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
            toElementDescriptors: function(elementObjects) {
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
            toElementDescriptor: function(elementObject) {
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
            toElementFinisherExtras: function(elementObject) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function(obj) {
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
            runClassFinishers: function(constructor, finishers) {
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
            disallowProperty: function(obj, name, objectType) {
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
          var isSameElement = function(other) {
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
          return typeof key === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (typeof input !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
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

        let StateCardInputSelect = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "state-card-input_select"
            ),
          ],
          function(_initialize, _LitElement) {
            class StateCardInputSelect extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

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
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <paper-dropdown-menu-light
        .label=${Object(
          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
            "default"
          ]
        )(this.stateObj)}
        .value="${this.stateObj.state}"
        @iron-select=${this._selectedOptionChanged}
        @click=${
          _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__[
            "stopPropagation"
          ]
        }
      >
        <paper-listbox slot="dropdown-content">
          ${this.stateObj.attributes.options.map(
            (option) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item>${option}</paper-item>
            `
          )}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `;
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
                  value: async function _selectedOptionChanged(ev) {
                    const option = ev.detail.item.innerText.trim();

                    if (option === this.stateObj.state) {
                      return;
                    }

                    await Object(
                      _data_input_select__WEBPACK_IMPORTED_MODULE_6__[
                        "setInputSelectOption"
                      ]
                    )(this.hass, this.stateObj.entity_id, option);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      paper-dropdown-menu-light {
        display: block;
        margin-left: 53px;
      }

      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
    `;
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

        class StateCardInputText extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        paper-input {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <paper-input
          no-label-float=""
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="{{value}}"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </paper-input>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          stateObjectChanged(newVal) {
            this.value = newVal.state;
          }

          selectedValueChanged() {
            if (this.value === this.stateObj.state) {
              return;
            }

            this.hass.callService("input_text", "set_value", {
              value: this.value,
              entity_id: this.stateObj.entity_id,
            });
          }

          stopPropagation(ev) {
            ev.stopPropagation();
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardLock extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          _stateObjChanged(newVal) {
            if (newVal) {
              this.isLocked = newVal.state === "locked";
            }
          }

          _callService(ev) {
            ev.stopPropagation();
            const service = ev.target.dataset.service;
            const data = {
              entity_id: this.stateObj.entity_id,
            };
            this.hass.callService("lock", service, data);
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardMediaPlayer extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          text-transform: capitalize;
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          computePlayerObj(hass, stateObj) {
            return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__[
              "default"
            ](hass, stateObj);
          }

          computePrimaryText(localize, playerObj) {
            return (
              playerObj.primaryTitle ||
              localize(`state.media_player.${playerObj.stateObj.state}`) ||
              localize(`state.default.${playerObj.stateObj.state}`) ||
              playerObj.stateObj.state
            );
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardScene extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }

          activateScene(ev) {
            ev.stopPropagation();
            this.hass.callService("scene", "turn_on", {
              entity_id: this.stateObj.entity_id,
            });
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class StateCardScript extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }

        ha-entity-toggle {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <template is="dom-if" if="[[stateObj.attributes.can_cancel]]">
          <ha-entity-toggle
            state-obj="[[stateObj]]"
            hass="[[hass]]"
          ></ha-entity-toggle>
        </template>
        <template is="dom-if" if="[[!stateObj.attributes.can_cancel]]">
          <mwc-button on-click="fireScript"
            >[[localize('ui.card.script.execute')]]</mwc-button
          >
        </template>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }

          fireScript(ev) {
            ev.stopPropagation();
            this.hass.callService("script", "turn_on", {
              entity_id: this.stateObj.entity_id,
            });
          }
        }

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

        class StateCardTimer extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_secondsToDuration(timeRemaining)]]</div>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
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
          }

          connectedCallback() {
            super.connectedCallback();
            this.startInterval(this.stateObj);
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            this.clearInterval();
          }

          stateObjChanged(stateObj) {
            this.startInterval(stateObj);
          }

          clearInterval() {
            if (this._updateRemaining) {
              clearInterval(this._updateRemaining);
              this._updateRemaining = null;
            }
          }

          startInterval(stateObj) {
            this.clearInterval();
            this.calculateRemaining(stateObj);

            if (stateObj.state === "active") {
              this._updateRemaining = setInterval(
                () => this.calculateRemaining(this.stateObj),
                1000
              );
            }
          }

          calculateRemaining(stateObj) {
            this.timeRemaining = Object(
              _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(stateObj);
          }

          _secondsToDuration(time) {
            return Object(
              _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(time);
          }
        }

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

        class StateCardToggle extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }
        }

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

        class StateCardVacuum extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }
        }

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

        class StateCardWaterHeater extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `;
          }

          static get stateInfoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }
        }

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

        class StateCardWeblink extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          display: block;
        }
        .name {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          color: var(--primary-color);

          text-transform: capitalize;
          line-height: 40px;
          margin-left: 16px;
        }
      </style>

      ${this.stateBadgeTemplate}
      <a href$="[[stateObj.state]]" target="_blank" class="name" id="link"
        >[[_computeStateName(stateObj)]]</a
      >
    `;
          }

          static get stateBadgeTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
          }

          static get properties() {
            return {
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: false,
              },
            };
          }

          ready() {
            super.ready();
            this.addEventListener("click", (ev) => this.onTap(ev));
          }

          _computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ]
            )(stateObj);
          }

          onTap(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            window.open(this.stateObj.state, "_blank");
          }
        }

        customElements.define("state-card-weblink", StateCardWeblink);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtaGlzdG9yeV9ncmFwaC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS12YWN1dW0tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY2xpbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1pbnB1dF90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLW1lZGlhX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXNjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC12YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13YXRlcl9oZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC13ZWJsaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNhcmQvcGFwZXItY2FyZFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0c1wiO1xuaW1wb3J0IFwiLi4vZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGFcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhSGlzdG9yeUdyYXBoQ2FyZCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWNhcmQ6bm90KFtkaWFsb2ddKSAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItY2FyZFtkaWFsb2ddIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiBwcmV2ZW50IG5ldyBzdGFja2luZyBjb250ZXh0LCBjaGFydCB0b29sdGlwIG5lZWRzIHRvIG92ZXJmbG93ICovXG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTZweCAxMnB4O1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jYXJkW2RpYWxvZ10gLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgZmlsdGVyLXR5cGU9XCJyZWNlbnQtZW50aXR5XCJcbiAgICAgICAgZW50aXR5LWlkPVwiW1tjb21wdXRlSGlzdG9yeUVudGl0aWVzKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgZGF0YT1cInt7c3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICBpcy1sb2FkaW5nPVwie3tzdGF0ZUhpc3RvcnlMb2FkaW5nfX1cIlxuICAgICAgICBjYWNoZS1jb25maWc9XCJbW2NhY2hlQ29uZmlnXV1cIlxuICAgICAgPjwvaGEtc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgPHBhcGVyLWNhcmRcbiAgICAgICAgZGlhbG9nJD1cIltbaW5EaWFsb2ddXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiY2FyZFRhcHBlZFwiXG4gICAgICAgIGVsZXZhdGlvbj1cIltbY29tcHV0ZUVsZXZhdGlvbihpbkRpYWxvZyldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5bW2NvbXB1dGVUaXRsZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tzdGF0ZUhpc3RvcnlMb2FkaW5nXV1cIlxuICAgICAgICAgICAgdXAtdG8tbm93XG4gICAgICAgICAgICBuby1zaW5nbGVcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iak9ic2VydmVyXCIsXG4gICAgICB9LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgc3RhdGVIaXN0b3J5TG9hZGluZzogQm9vbGVhbixcbiAgICAgIGNhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiAwLFxuICAgICAgICAgIGNhY2hlS2V5OiBudWxsLFxuICAgICAgICAgIGhvdXJzVG9TaG93OiAyNCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqT2JzZXJ2ZXIoc3RhdGVPYmopIHtcbiAgICBpZiAoIXN0YXRlT2JqKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZy5jYWNoZUtleSAhPT0gc3RhdGVPYmouZW50aXR5X2lkIHx8XG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLnJlZnJlc2ggIT09IChzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlZnJlc2ggfHwgMCkgfHxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcuaG91cnNUb1Nob3cgIT09IChzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXJzX3RvX3Nob3cgfHwgMjQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNhY2hlQ29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICByZWZyZXNoOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlZnJlc2ggfHwgMCxcbiAgICAgICAgICBjYWNoZUtleTogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgICAgIGhvdXJzVG9TaG93OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXJzX3RvX3Nob3cgfHwgMjQsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzcyhpbkRpYWxvZykge1xuICAgIHJldHVybiBpbkRpYWxvZyA/IFwiXCIgOiBcImNvbnRlbnRcIjtcbiAgfVxuXG4gIGNvbXB1dGVIaXN0b3J5RW50aXRpZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQ7XG4gIH1cblxuICBjb21wdXRlRWxldmF0aW9uKGluRGlhbG9nKSB7XG4gICAgcmV0dXJuIGluRGlhbG9nID8gMCA6IDE7XG4gIH1cblxuICBjYXJkVGFwcGVkKGV2KSB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDYxMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDU1MHB4KVwiKTtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWhpc3RvcnlfZ3JhcGgtY2FyZFwiLCBIYUhpc3RvcnlHcmFwaENhcmQpO1xuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXR0cmlidXRlQ2xhc3NOYW1lcyhcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGF0dHJpYnV0ZXM6IHN0cmluZ1tdXG4pOiBzdHJpbmcge1xuICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICAubWFwKChhdHRyaWJ1dGUpID0+XG4gICAgICBhdHRyaWJ1dGUgaW4gc3RhdGVPYmouYXR0cmlidXRlcyA/IFwiaGFzLVwiICsgYXR0cmlidXRlIDogXCJcIlxuICAgIClcbiAgICAuZmlsdGVyKChhdHRyKSA9PiBhdHRyICE9PSBcIlwiKVxuICAgIC5qb2luKFwiIFwiKTtcbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRvbWFpbjogc3RyaW5nKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICByZXR1cm4gXCJsb2NrXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgcmV0dXJuIFwib3Blbl9jb3ZlclwiIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiBcInR1cm5fb25cIiBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gXCIuL2Nhbl90b2dnbGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvblwiIHx8IHN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gXCIuL2Nhbl90b2dnbGVfc3RhdGVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBET01BSU5TX0hJREVfTU9SRV9JTkZPLCBET01BSU5TX1dJVEhfTU9SRV9JTkZPIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqOiBIYXNzRW50aXR5KSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKERPTUFJTlNfSElERV9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBcImhpZGRlblwiO1xuICB9XG4gIHJldHVybiBcImRlZmF1bHRcIjtcbn1cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2hhLXJlbGF0aXZlLXRpbWVcIjtcbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jbGFzcyBTdGF0ZUluZm8gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZX0gJHt0aGlzLnN0YXRlQmFkZ2VUZW1wbGF0ZX0gJHt0aGlzLmluZm9UZW1wbGF0ZX1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgc3RhdGUtYmFkZ2Uge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lW2luLWRpYWxvZ10sXG4gICAgICAgIDpob3N0KFtzZWNvbmRhcnktbGluZV0pIC5uYW1lIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWFnbyxcbiAgICAgICAgLmV4dHJhLWluZm8sXG4gICAgICAgIC5leHRyYS1pbmZvID4gKiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVCYWRnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIiBpbi1kaWFsb2ckPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgW1tjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYWdvXCI+XG4gICAgICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkYXRldGltZT1cIltbc3RhdGVPYmoubGFzdF9jaGFuZ2VkXV1cIlxuICAgICAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj48c2xvdD4gPC9zbG90PjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiAoKSA9PiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaW5mb1wiLCBTdGF0ZUluZm8pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY29uc3QgU1RBVEVTX0lOVEVSQ0VQVEFCTEUgPSB7XG4gIGNsZWFuaW5nOiB7XG4gICAgYWN0aW9uOiBcInJldHVybl90b19iYXNlXCIsXG4gICAgc2VydmljZTogXCJyZXR1cm5fdG9fYmFzZVwiLFxuICB9LFxuICBkb2NrZWQ6IHtcbiAgICBhY3Rpb246IFwic3RhcnRfY2xlYW5pbmdcIixcbiAgICBzZXJ2aWNlOiBcInN0YXJ0XCIsXG4gIH0sXG4gIGlkbGU6IHtcbiAgICBhY3Rpb246IFwic3RhcnRfY2xlYW5pbmdcIixcbiAgICBzZXJ2aWNlOiBcInN0YXJ0XCIsXG4gIH0sXG4gIG9mZjoge1xuICAgIGFjdGlvbjogXCJ0dXJuX29uXCIsXG4gICAgc2VydmljZTogXCJ0dXJuX29uXCIsXG4gIH0sXG4gIG9uOiB7XG4gICAgYWN0aW9uOiBcInR1cm5fb2ZmXCIsXG4gICAgc2VydmljZTogXCJ0dXJuX29mZlwiLFxuICB9LFxuICBwYXVzZWQ6IHtcbiAgICBhY3Rpb246IFwicmVzdW1lX2NsZWFuaW5nXCIsXG4gICAgc2VydmljZTogXCJzdGFydFwiLFxuICB9LFxufTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVZhY3V1bVN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiIGRpc2FibGVkPVwiW1shX2ludGVyY2VwdGFibGVdXVwiXG4gICAgICAgID5bW19jb21wdXRlTGFiZWwoc3RhdGVPYmouc3RhdGUsIF9pbnRlcmNlcHRhYmxlKV1dPC9td2MtYnV0dG9uXG4gICAgICA+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIF9pbnRlcmNlcHRhYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOlxuICAgICAgICAgIFwiX2NvbXB1dGVJbnRlcmNlcHRhYmxlKHN0YXRlT2JqLnN0YXRlLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlSW50ZXJjZXB0YWJsZShzdGF0ZSwgc3VwcG9ydGVkRmVhdHVyZXMpIHtcbiAgICByZXR1cm4gc3RhdGUgaW4gU1RBVEVTX0lOVEVSQ0VQVEFCTEUgJiYgc3VwcG9ydGVkRmVhdHVyZXMgIT09IDA7XG4gIH1cblxuICBfY29tcHV0ZUxhYmVsKHN0YXRlLCBpbnRlcmNlcHRhYmxlKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdGFibGVcbiAgICAgID8gdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBgdWkuY2FyZC52YWN1dW0uYWN0aW9ucy4ke1NUQVRFU19JTlRFUkNFUFRBQkxFW3N0YXRlXS5hY3Rpb259YFxuICAgICAgICApXG4gICAgICA6IHRoaXMubG9jYWxpemUoYHN0YXRlLnZhY3V1bS4ke3N0YXRlfWApO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuICAgIGNvbnN0IHNlcnZpY2UgPSBTVEFURVNfSU5URVJDRVBUQUJMRVtzdGF0ZU9iai5zdGF0ZV0uc2VydmljZTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgc2VydmljZSwgeyBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdmFjdXVtLXN0YXRlXCIsIEhhVmFjdXVtU3RhdGUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhV2F0ZXJIZWF0ZXJTdGF0ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0ZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPiBbW19sb2NhbGl6ZVN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dIDwvc3Bhbj5cbiAgICAgICAgW1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLmN1cnJlbnRseScpXV06IFtbY3VycmVudFN0YXR1c11dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgLy8gV2UncmUgdXNpbmcgXCIhPSBudWxsXCIgb24gcHVycG9zZSBzbyB0aGF0IHdlIG1hdGNoIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkLlxuICAgIGlmIChcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9IC0gJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICB9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7XG4gICAgICAgIGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlXG4gICAgICB9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoYHN0YXRlLndhdGVyX2hlYXRlci4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13YXRlcl9oZWF0ZXItc3RhdGVcIiwgSGFXYXRlckhlYXRlclN0YXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGVcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ2xpbWF0ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2xpbWF0ZS1zdGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtY2xpbWF0ZS1zdGF0ZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgPjwvaGEtY2xpbWF0ZS1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jbGltYXRlXCIsIFN0YXRlQ2FyZENsaW1hdGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRDb25maWd1cmF0b3IgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxtd2MtYnV0dG9uIGhpZGRlbiQ9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgICAgID5bW19sb2NhbGl6ZVN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIHByZSBsb2FkIHRoZSBpbWFnZSBzbyB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkIHRoZSBwcm9wZXIgc2l6ZSAtLT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uX2ltYWdlXV1cIj5cbiAgICAgICAgPGltZyBoaWRkZW49XCJcIiBzcmM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb25faW1hZ2VdXVwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoYHN0YXRlLmNvbmZpZ3VyYXRvci4ke3N0YXRlfWApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWNvbmZpZ3VyYXRvclwiLCBTdGF0ZUNhcmRDb25maWd1cmF0b3IpO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWNsaW1hdGVcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jb25maWd1cmF0b3JcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jb3ZlclwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWRpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF9udW1iZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF9zZWxlY3RcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF90ZXh0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtbG9ja1wiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLW1lZGlhX3BsYXllclwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXNjZW5lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtc2NyaXB0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdGltZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC10b2dnbGVcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC12YWN1dW1cIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC13YXRlcl9oZWF0ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC13ZWJsaW5rXCI7XG5cbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZVwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRDb250ZW50IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iailcIl07XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgbGV0IHN0YXRlQ2FyZDtcbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzKSByZXR1cm47XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMgJiYgXCJjdXN0b21fdWlfc3RhdGVfY2FyZFwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHN0YXRlQ2FyZCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VzdG9tX3VpX3N0YXRlX2NhcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlQ2FyZCA9IFwic3RhdGUtY2FyZC1cIiArIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopO1xuICAgIH1cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIodGhpcywgc3RhdGVDYXJkLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgIGhhc3M6IGhhc3MsXG4gICAgICBzdGF0ZU9iajogc3RhdGVPYmosXG4gICAgICBpbkRpYWxvZzogaW5EaWFsb2csXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtY29udGVudFwiLCBTdGF0ZUNhcmRDb250ZW50KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNvdmVyLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNvdmVyLXRpbHQtY29udHJvbHNcIjtcbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRDb3ZlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1jb3Zlci1jb250cm9sc1xuICAgICAgICAgICAgaGlkZGVuJD1cIltbZW50aXR5T2JqLmlzVGlsdE9ubHldXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICA+PC9oYS1jb3Zlci1jb250cm9scz5cbiAgICAgICAgICA8aGEtY292ZXItdGlsdC1jb250cm9sc1xuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWVudGl0eU9iai5pc1RpbHRPbmx5XV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgPjwvaGEtY292ZXItdGlsdC1jb250cm9scz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICB2YXIgZW50aXR5ID0gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWNvdmVyXCIsIFN0YXRlQ2FyZENvdmVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVEaXNwbGF5IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuaW1wb3J0IGF0dHJpYnV0ZUNsYXNzTmFtZXMgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkRGlzcGxheSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5zdGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUuaGFzLXVuaXRfb2ZfbWVhc3VyZW1lbnQge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICBbW2NvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlT2JqLCBsYW5ndWFnZSldXVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZU9iaiwgbGFuZ3VhZ2UpIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGVPYmosIGxhbmd1YWdlKTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgIFwic3RhdGVcIixcbiAgICAgIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIl0pLFxuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtZGlzcGxheVwiLCBTdGF0ZUNhcmREaXNwbGF5KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3JcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtc2xpZGVyXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZElucHV0TnVtYmVyIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gIFtJcm9uUmVzaXphYmxlQmVoYXZpb3JdLFxuICBQb2x5bWVyRWxlbWVudFxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtc2xpZGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG5cbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuc2xpZGVyc3RhdGUge1xuICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zbGlkZXJbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiIGlkPVwiaW5wdXRfbnVtYmVyX2NhcmRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtc2xpZGVyXG4gICAgICAgICAgbWluPVwiW1ttaW5dXVwiXG4gICAgICAgICAgbWF4PVwiW1ttYXhdXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICAgIHN0ZXA9XCJbW3N0ZXBdXVwiXG4gICAgICAgICAgaGlkZGVuPVwiW1toaWRkZW5zbGlkZXJdXVwiXG4gICAgICAgICAgcGluPVwiXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIGlkPVwic2xpZGVyXCJcbiAgICAgICAgICBpZ25vcmUtYmFyLXRvdWNoPVwiXCJcbiAgICAgICAgPlxuICAgICAgICA8L2hhLXNsaWRlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJcIlxuICAgICAgICAgIHBhdHRlcm49XCJbMC05XSsoW1xcXFwuXVswLTldKyk/XCJcbiAgICAgICAgICBzdGVwPVwiW1tzdGVwXV1cIlxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJzZWxlY3RlZFZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzdG9wUHJvcGFnYXRpb25cIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuYm94XV1cIlxuICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiIGhpZGRlbj1cIltbaGlkZGVuYm94XV1cIj5cbiAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudF1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJzbGlkZXJzdGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJzdGF0ZSBzbGlkZXJzdGF0ZVwiXG4gICAgICAgICAgaGlkZGVuPVwiW1toaWRkZW5zbGlkZXJdXVwiXG4gICAgICAgID5cbiAgICAgICAgICBbW3ZhbHVlXV0gW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRdXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZGVuU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJvLm9ic2VydmUodGhpcy4kLmlucHV0X251bWJlcl9jYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5oaWRkZW5TdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBoaWRkZW5ib3g6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgaGlkZGVuc2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqZWN0Q2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICB9LFxuICAgICAgc3RlcDogTnVtYmVyLFxuICAgICAgdmFsdWU6IE51bWJlcixcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgaGlkZGVuU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gXCJzbGlkZXJcIikgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlcndpZHRoID0gdGhpcy4kLnNsaWRlci5vZmZzZXRXaWR0aDtcbiAgICBpZiAoc2xpZGVyd2lkdGggPCAxMDApIHtcbiAgICAgIHRoaXMuJC5zbGlkZXJzdGF0ZS5oaWRkZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc2xpZGVyd2lkdGggPj0gMTQ1KSB7XG4gICAgICB0aGlzLiQuc2xpZGVyc3RhdGUuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGVPYmplY3RDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGNvbnN0IHByZXZNb2RlID0gdGhpcy5tb2RlO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBtaW46IE51bWJlcihuZXdWYWwuYXR0cmlidXRlcy5taW4pLFxuICAgICAgbWF4OiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMubWF4KSxcbiAgICAgIHN0ZXA6IE51bWJlcihuZXdWYWwuYXR0cmlidXRlcy5zdGVwKSxcbiAgICAgIHZhbHVlOiBOdW1iZXIobmV3VmFsLnN0YXRlKSxcbiAgICAgIG1vZGU6IFN0cmluZyhuZXdWYWwuYXR0cmlidXRlcy5tb2RlKSxcbiAgICAgIG1heGxlbmd0aDogU3RyaW5nKG5ld1ZhbC5hdHRyaWJ1dGVzLm1heCkubGVuZ3RoLFxuICAgICAgaGlkZGVuYm94OiBuZXdWYWwuYXR0cmlidXRlcy5tb2RlICE9PSBcImJveFwiLFxuICAgICAgaGlkZGVuc2xpZGVyOiBuZXdWYWwuYXR0cmlidXRlcy5tb2RlICE9PSBcInNsaWRlclwiLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IFwic2xpZGVyXCIgJiYgcHJldk1vZGUgIT09IFwic2xpZGVyXCIpIHtcbiAgICAgIHRoaXMuaGlkZGVuU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RlZFZhbHVlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gTnVtYmVyKHRoaXMuc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImlucHV0X251bWJlclwiLCBcInNldF92YWx1ZVwiLCB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWlucHV0X251bWJlclwiLCBTdGF0ZUNhcmRJbnB1dE51bWJlcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJdGVtRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIElucHV0U2VsZWN0RW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzZXRJbnB1dFNlbGVjdE9wdGlvbiB9IGZyb20gXCIuLi9kYXRhL2lucHV0LXNlbGVjdFwiO1xuaW1wb3J0IHsgUG9seW1lcklyb25TZWxlY3RFdmVudCB9IGZyb20gXCIuLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBzdG9wUHJvcGFnYXRpb24gfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RhdGUtY2FyZC1pbnB1dF9zZWxlY3RcIilcbmNsYXNzIFN0YXRlQ2FyZElucHV0U2VsZWN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqITogSW5wdXRTZWxlY3RFbnRpdHk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlIC5zdGF0ZU9iaj0ke3RoaXMuc3RhdGVPYmp9Pjwvc3RhdGUtYmFkZ2U+XG4gICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAubGFiZWw9JHtjb21wdXRlU3RhdGVOYW1lKHRoaXMuc3RhdGVPYmopfVxuICAgICAgICAudmFsdWU9XCIke3RoaXMuc3RhdGVPYmouc3RhdGV9XCJcbiAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fc2VsZWN0ZWRPcHRpb25DaGFuZ2VkfVxuICAgICAgICBAY2xpY2s9JHtzdG9wUHJvcGFnYXRpb259XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3B0aW9ucy5tYXAoXG4gICAgICAgICAgICAob3B0aW9uKSA9PiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke29wdGlvbn08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBhZnRlciByZW5kZXJpbmcgdGhlIGl0ZW1zIG9yIGVsc2UgaXQgd29uJ3Qgd29yayBpbiBGaXJlZm94XG4gICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJwYXBlci1saXN0Ym94XCJcbiAgICApIS5zZWxlY3RlZCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5vcHRpb25zLmluZGV4T2YodGhpcy5zdGF0ZU9iai5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zZWxlY3RlZE9wdGlvbkNoYW5nZWQoXG4gICAgZXY6IFBvbHltZXJJcm9uU2VsZWN0RXZlbnQ8UGFwZXJJdGVtRWxlbWVudD5cbiAgKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZXYuZGV0YWlsLml0ZW0uaW5uZXJUZXh0LnRyaW0oKTtcbiAgICBpZiAob3B0aW9uID09PSB0aGlzLnN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHNldElucHV0U2VsZWN0T3B0aW9uKHRoaXMuaGFzcywgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsIG9wdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS1iYWRnZSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1M3B4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0YXRlLWNhcmQtaW5wdXRfc2VsZWN0XCI6IFN0YXRlQ2FyZElucHV0U2VsZWN0O1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuY2xhc3MgU3RhdGVDYXJkSW5wdXRUZXh0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBtaW5sZW5ndGg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluXV1cIlxuICAgICAgICAgIG1heGxlbmd0aD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tYXhdXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMucGF0dGVybl1dXCJcbiAgICAgICAgICBwYXR0ZXJuPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnBhdHRlcm5dXVwiXG4gICAgICAgICAgdHlwZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tb2RlXV1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cInNlbGVjdGVkVmFsdWVDaGFuZ2VkXCJcbiAgICAgICAgICBvbi1jbGljaz1cInN0b3BQcm9wYWdhdGlvblwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIoZW1wdHkgdmFsdWUpXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmplY3RDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXR0ZXJuOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iamVjdENoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbC5zdGF0ZTtcbiAgfVxuXG4gIHNlbGVjdGVkVmFsdWVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB0aGlzLnN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImlucHV0X3RleHRcIiwgXCJzZXRfdmFsdWVcIiwge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1pbnB1dF90ZXh0XCIsIFN0YXRlQ2FyZElucHV0VGV4dCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZExvY2sgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgIGRhdGEtc2VydmljZT1cInVubG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWlzTG9ja2VkXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLmxvY2sudW5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgIGRhdGEtc2VydmljZT1cImxvY2tcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2lzTG9ja2VkXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLmxvY2subG9jaycpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNMb2NrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIF9zdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IG5ld1ZhbC5zdGF0ZSA9PT0gXCJsb2NrZWRcIjtcbiAgICB9XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzZXJ2aWNlID0gZXYudGFyZ2V0LmRhdGFzZXQuc2VydmljZTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxvY2tcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtbG9ja1wiLCBTdGF0ZUNhcmRMb2NrKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgSGFzc01lZGlhUGxheWVyRW50aXR5IGZyb20gXCIuLi91dGlsL2hhc3MtbWVkaWEtcGxheWVyLW1vZGVsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkTWVkaWFQbGF5ZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tdGV4dCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4tdGV4dFt0YWtlLWhlaWdodF0ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZGFyeS10ZXh0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRleHRcIiB0YWtlLWhlaWdodCQ9XCJbWyFwbGF5ZXJPYmouc2Vjb25kYXJ5VGl0bGVdXVwiPlxuICAgICAgICAgICAgW1tjb21wdXRlUHJpbWFyeVRleHQobG9jYWxpemUsIHBsYXllck9iaildXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnktdGV4dFwiPltbcGxheWVyT2JqLnNlY29uZGFyeVRpdGxlXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcGxheWVyT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUHJpbWFyeVRleHQobG9jYWxpemUsIHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmoucHJpbWFyeVRpdGxlIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUubWVkaWFfcGxheWVyLiR7cGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1tZWRpYV9wbGF5ZXJcIiwgU3RhdGVDYXJkTWVkaWFQbGF5ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkU2NlbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiYWN0aXZhdGVTY2VuZVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQuc2NlbmUuYWN0aXZhdGUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFjdGl2YXRlU2NlbmUoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJzY2VuZVwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1zY2VuZVwiLCBTdGF0ZUNhcmRTY2VuZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFNjcmlwdCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5jYW5fY2FuY2VsXV1cIj5cbiAgICAgICAgICA8aGEtZW50aXR5LXRvZ2dsZVxuICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgPjwvaGEtZW50aXR5LXRvZ2dsZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLmNhbl9jYW5jZWxdXVwiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiZmlyZVNjcmlwdFwiXG4gICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5zY3JpcHQuZXhlY3V0ZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBmaXJlU2NyaXB0KGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwic2NyaXB0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXNjcmlwdFwiLCBTdGF0ZUNhcmRTY3JpcHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuaW1wb3J0IHRpbWVyVGltZVJlbWFpbmluZyBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZ1wiO1xuaW1wb3J0IHNlY29uZHNUb0R1cmF0aW9uIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvblwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRUaW1lciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG5cbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPltbX3NlY29uZHNUb0R1cmF0aW9uKHRpbWVSZW1haW5pbmcpXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB0aW1lUmVtYWluaW5nOiBOdW1iZXIsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmopIHtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICB9XG5cbiAgY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5fdXBkYXRlUmVtYWluaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3VwZGF0ZVJlbWFpbmluZyk7XG4gICAgICB0aGlzLl91cGRhdGVSZW1haW5pbmcgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZyhzdGF0ZU9iaik7XG5cbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHNldEludGVydmFsKFxuICAgICAgICAoKSA9PiB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZyh0aGlzLnN0YXRlT2JqKSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmopIHtcbiAgICB0aGlzLnRpbWVSZW1haW5pbmcgPSB0aW1lclRpbWVSZW1haW5pbmcoc3RhdGVPYmopO1xuICB9XG5cbiAgX3NlY29uZHNUb0R1cmF0aW9uKHRpbWUpIHtcbiAgICByZXR1cm4gc2Vjb25kc1RvRHVyYXRpb24odGltZSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtdGltZXJcIiwgU3RhdGVDYXJkVGltZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuY2xhc3MgU3RhdGVDYXJkVG9nZ2xlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtZW50aXR5LXRvZ2dsZVxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgPjwvaGEtZW50aXR5LXRvZ2dsZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC10b2dnbGVcIiwgU3RhdGVDYXJkVG9nZ2xlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXZhY3V1bS1zdGF0ZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRWYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxoYS12YWN1dW0tc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLXZhY3V1bS1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC12YWN1dW1cIiwgU3RhdGVDYXJkVmFjdXVtKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXdhdGVyX2hlYXRlci1zdGF0ZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRXYXRlckhlYXRlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLXN0YXRlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxoYS13YXRlcl9oZWF0ZXItc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLXdhdGVyX2hlYXRlci1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC13YXRlcl9oZWF0ZXJcIiwgU3RhdGVDYXJkV2F0ZXJIZWF0ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIFN0YXRlQ2FyZFdlYmxpbmsgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgICR7dGhpcy5zdGF0ZUJhZGdlVGVtcGxhdGV9XG4gICAgICA8YSBocmVmJD1cIltbc3RhdGVPYmouc3RhdGVdXVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmFtZVwiIGlkPVwibGlua1wiXG4gICAgICAgID5bW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dPC9hXG4gICAgICA+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVCYWRnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB0aGlzLm9uVGFwKGV2KSk7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIG9uVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLnN0YXRlT2JqLnN0YXRlLCBcIl9ibGFua1wiKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC13ZWJsaW5rXCIsIFN0YXRlQ2FyZFdlYmxpbmspO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVpBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF4SEE7QUFDQTtBQXdIQTs7Ozs7Ozs7Ozs7O0FDdElBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFHQTtBQUNBO0FBMkdBOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFyQkE7QUEyQkE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFuREE7QUFDQTtBQW1EQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQUNBO0FBb0VBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7O0FBZkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUE5Q0E7QUFDQTtBQThDQTs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFYQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQTlCQTtBQUNBO0FBOEJBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7OztBQVRBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekRBO0FBQ0E7QUF5REE7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTs7OztBQXBDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQUNBO0FBc0ZBOzs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUJBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQWhDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNLQTtBQUNBO0FBNEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFGQTs7O0FBVEE7QUFpQkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0JBOzs7QUEvREE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7QUFUQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRUE7QUFDQTtBQTRFQTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7O0FBWEE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXJFQTtBQUNBO0FBcUVBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTs7Ozs7Ozs7QUEvQkE7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFqRkE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7O0FBWEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWhEQTtBQUNBO0FBZ0RBOzs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7O0FBZkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQTVEQTtBQUNBO0FBNERBOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7O0FBZEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2RkE7QUFDQTtBQXVGQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7QUFWQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQXpDQTtBQUNBO0FBeUNBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7OztBQUpBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFuQ0E7QUFDQTtBQW1DQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7OztBQWZBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBOUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7OztBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQUNBO0FBdURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
