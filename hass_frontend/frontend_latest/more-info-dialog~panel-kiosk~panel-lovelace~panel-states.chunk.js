(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],
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

    /***/ "./src/common/datetime/duration_to_seconds.ts":
      /*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return durationToSeconds;
          }
        );
        function durationToSeconds(duration) {
          const parts = duration.split(":").map(Number);
          return parts[0] * 3600 + parts[1] * 60 + parts[2];
        }

        /***/
      },

    /***/ "./src/common/datetime/relative_time.ts":
      /*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return relativeTime;
          }
        );
        /**
         * Calculate a string representing a date object as relative time from now.
         *
         * Example output: 5 minutes ago, in 3 days.
         */
        const tests = [60, 60, 24, 7];
        const langKey = ["second", "minute", "hour", "day"];
        function relativeTime(dateObj, localize, options = {}) {
          const compareTime = options.compareTime || new Date();
          let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
          const tense = delta >= 0 ? "past" : "future";
          delta = Math.abs(delta);
          let timeDesc;

          for (let i = 0; i < tests.length; i++) {
            if (delta < tests[i]) {
              delta = Math.floor(delta);
              timeDesc = localize(
                `ui.components.relative_time.duration.${langKey[i]}`,
                "count",
                delta
              );
              break;
            }

            delta /= tests[i];
          }

          if (timeDesc === undefined) {
            delta = Math.floor(delta);
            timeDesc = localize(
              "ui.components.relative_time.duration.week",
              "count",
              delta
            );
          }

          return options.includeTense === false
            ? timeDesc
            : localize(
                `ui.components.relative_time.${tense}`,
                "time",
                timeDesc
              );
        }

        /***/
      },

    /***/ "./src/common/datetime/seconds_to_duration.ts":
      /*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return secondsToDuration;
          }
        );
        const leftPad = (num) => (num < 10 ? `0${num}` : num);

        function secondsToDuration(d) {
          const h = Math.floor(d / 3600);
          const m = Math.floor((d % 3600) / 60);
          const s = Math.floor((d % 3600) % 60);

          if (h > 0) {
            return `${h}:${leftPad(m)}:${leftPad(s)}`;
          }

          if (m > 0) {
            return `${m}:${leftPad(s)}`;
          }

          if (s > 0) {
            return "" + s;
          }

          return null;
        }

        /***/
      },

    /***/ "./src/common/dom/stop_propagation.ts":
      /*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
      /*! exports provided: stopPropagation */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stopPropagation",
          function() {
            return stopPropagation;
          }
        );
        const stopPropagation = (ev) => ev.stopPropagation();

        /***/
      },

    /***/ "./src/common/entity/supports-feature.ts":
      /*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
      /*! exports provided: supportsFeature */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsFeature",
          function() {
            return supportsFeature;
          }
        );
        const supportsFeature = (stateObj, feature) => {
          // tslint:disable-next-line:no-bitwise
          return (stateObj.attributes.supported_features & feature) !== 0;
        };

        /***/
      },

    /***/ "./src/common/entity/timer_time_remaining.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return timerTimeRemaining;
          }
        );
        /* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts"
        );

        function timerTimeRemaining(stateObj) {
          let timeRemaining = Object(
            _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ]
          )(stateObj.attributes.remaining);

          if (stateObj.state === "active") {
            const now = new Date().getTime();
            const madeActive = new Date(stateObj.last_changed).getTime();
            timeRemaining = Math.max(
              timeRemaining - (now - madeActive) / 1000,
              0
            );
          }

          return timeRemaining;
        }

        /***/
      },

    /***/ "./src/common/util/time-cache-function-promise.ts":
      /*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
      /*! exports provided: timeCachePromiseFunc */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timeCachePromiseFunc",
          function() {
            return timeCachePromiseFunc;
          }
        );
        const timeCachePromiseFunc = async (
          cacheKey,
          cacheTime,
          func,
          hass,
          entityId,
          ...args
        ) => {
          let cache = hass[cacheKey];

          if (!cache) {
            cache = hass[cacheKey] = {};
          }

          const lastResult = cache[entityId];

          if (lastResult) {
            return lastResult;
          }

          const result = func(hass, entityId, ...args);
          cache[entityId] = result;
          result.then(
            // When successful, set timer to clear cache
            () =>
              setTimeout(() => {
                cache[entityId] = undefined;
              }, cacheTime), // On failure, clear cache right away
            () => {
              cache[entityId] = undefined;
            }
          );
          return result;
        };

        /***/
      },

    /***/ "./src/components/ha-climate-state.js":
      /*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
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

        class HaClimateState extends Object(
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

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj.state)]]
            <template is="dom-if" if="[[stateObj.attributes.preset_mode]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              currentStatus: {
                type: String,
                computed: "computeCurrentStatus(hass, stateObj)",
              },
            };
          }

          computeCurrentStatus(hass, stateObj) {
            if (!hass || !stateObj) return null;

            if (stateObj.attributes.current_temperature != null) {
              return `${stateObj.attributes.current_temperature} ${
                hass.config.unit_system.temperature
              }`;
            }

            if (stateObj.attributes.current_humidity != null) {
              return `${stateObj.attributes.current_humidity} %`;
            }

            return null;
          }

          computeTarget(hass, stateObj) {
            if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

            if (
              stateObj.attributes.target_temp_low != null &&
              stateObj.attributes.target_temp_high != null
            ) {
              return `${stateObj.attributes.target_temp_low}-${
                stateObj.attributes.target_temp_high
              } ${hass.config.unit_system.temperature}`;
            }

            if (stateObj.attributes.temperature != null) {
              return `${stateObj.attributes.temperature} ${
                hass.config.unit_system.temperature
              }`;
            }

            if (
              stateObj.attributes.target_humidity_low != null &&
              stateObj.attributes.target_humidity_high != null
            ) {
              return `${stateObj.attributes.target_humidity_low}-${
                stateObj.attributes.target_humidity_high
              }%`;
            }

            if (stateObj.attributes.humidity != null) {
              return `${stateObj.attributes.humidity} %`;
            }

            return "";
          }

          _hasKnownState(state) {
            return state !== "unknown";
          }

          _localizeState(localize, state) {
            return localize(`state.climate.${state}`) || state;
          }

          _localizePreset(localize, preset) {
            return (
              localize(`state_attributes.climate.preset_mode.${preset}`) ||
              preset
            );
          }
        }

        customElements.define("ha-climate-state", HaClimateState);

        /***/
      },

    /***/ "./src/components/ha-cover-controls.js":
      /*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
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
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/cover-model */ "./src/util/cover-model.js"
        );

        class HaCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              stateObj: {
                type: Object,
              },
              entityObj: {
                type: Object,
                computed: "computeEntityObj(hass, stateObj)",
              },
            };
          }

          computeEntityObj(hass, stateObj) {
            return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ](hass, stateObj);
          }

          computeOpenDisabled(stateObj, entityObj) {
            var assumedState = stateObj.attributes.assumed_state === true;
            return (
              (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState
            );
          }

          computeClosedDisabled(stateObj, entityObj) {
            var assumedState = stateObj.attributes.assumed_state === true;
            return (
              (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState
            );
          }

          onOpenTap(ev) {
            ev.stopPropagation();
            this.entityObj.openCover();
          }

          onCloseTap(ev) {
            ev.stopPropagation();
            this.entityObj.closeCover();
          }

          onStopTap(ev) {
            ev.stopPropagation();
            this.entityObj.stopCover();
          }
        }

        customElements.define("ha-cover-controls", HaCoverControls);

        /***/
      },

    /***/ "./src/components/ha-cover-tilt-controls.js":
      /*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../util/cover-model */ "./src/util/cover-model.js"
        );

        class HaCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              stateObj: {
                type: Object,
              },
              entityObj: {
                type: Object,
                computed: "computeEntityObj(hass, stateObj)",
              },
            };
          }

          computeEntityObj(hass, stateObj) {
            return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ](hass, stateObj);
          }

          computeOpenDisabled(stateObj, entityObj) {
            var assumedState = stateObj.attributes.assumed_state === true;
            return entityObj.isFullyOpenTilt && !assumedState;
          }

          computeClosedDisabled(stateObj, entityObj) {
            var assumedState = stateObj.attributes.assumed_state === true;
            return entityObj.isFullyClosedTilt && !assumedState;
          }

          onOpenTiltTap(ev) {
            ev.stopPropagation();
            this.entityObj.openCoverTilt();
          }

          onCloseTiltTap(ev) {
            ev.stopPropagation();
            this.entityObj.closeCoverTilt();
          }

          onStopTiltTap(ev) {
            ev.stopPropagation();
            this.entityObj.stopCoverTilt();
          }
        }

        customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

        /***/
      },

    /***/ "./src/components/ha-markdown.js":
      /*!***************************************!*\
  !*** ./src/components/ha-markdown.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        let loaded = null;
        /**
         * White list allowed svg tag.
         * Only put in the tag used in QR code, can be extend in future.
         */

        const svgWhiteList = ["svg", "path"];
        /*
         * @appliesMixin EventsMixin
         */

        class HaMarkdown extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
            "PolymerElement"
          ]
        ) {
          static get properties() {
            return {
              content: {
                type: String,
                observer: "_render",
              },
              allowSvg: {
                type: Boolean,
                value: false,
              },
            };
          }

          connectedCallback() {
            super.connectedCallback(); // 0 = not loaded, 1 = success, 2 = error

            this._scriptLoaded = 0;
            this._renderScheduled = false;

            this._resize = () => this.fire("iron-resize");

            if (!loaded) {
              loaded = Promise.all(
                /*! import() | load_markdown */ [
                  __webpack_require__.e("vendors~load_markdown"),
                  __webpack_require__.e("load_markdown"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ../resources/load_markdown */ "./src/resources/load_markdown.js"
                )
              );
            }

            loaded
              .then(
                ({ marked, filterXSS }) => {
                  this.marked = marked;
                  this.filterXSS = filterXSS;
                  this._scriptLoaded = 1;
                },
                () => {
                  this._scriptLoaded = 2;
                }
              )
              .then(() => this._render());
          }

          _render() {
            if (this._scriptLoaded === 0 || this._renderScheduled) return;
            this._renderScheduled = true; // debounce it to next microtask.

            Promise.resolve().then(() => {
              this._renderScheduled = false;

              if (this._scriptLoaded === 1) {
                this.innerHTML = this.filterXSS(
                  this.marked(this.content, {
                    gfm: true,
                    tables: true,
                    breaks: true,
                  }),
                  {
                    onIgnoreTag: this.allowSvg
                      ? (tag, html) =>
                          svgWhiteList.indexOf(tag) >= 0 ? html : null
                      : null,
                  }
                );

                this._resize();

                const walker = document.createTreeWalker(
                  this,
                  1,
                  /* SHOW_ELEMENT */
                  null,
                  false
                );

                while (walker.nextNode()) {
                  const node = walker.currentNode; // Open external links in a new window

                  if (
                    node.tagName === "A" &&
                    node.host !== document.location.host
                  ) {
                    node.target = "_blank"; // Fire a resize event when images loaded to notify content resized
                  } else if (node.tagName === "IMG") {
                    node.addEventListener("load", this._resize);
                  }
                }
              } else if (this._scriptLoaded === 2) {
                this.innerText = this.content;
              }
            });
          }
        }

        customElements.define("ha-markdown", HaMarkdown);

        /***/
      },

    /***/ "./src/components/ha-relative-time.js":
      /*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaRelativeTime extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get properties() {
            return {
              hass: Object,
              datetime: {
                type: String,
                observer: "datetimeChanged",
              },
              datetimeObj: {
                type: Object,
                observer: "datetimeObjChanged",
              },
              parsedDateTime: Object,
            };
          }

          constructor() {
            super();
            this.updateRelative = this.updateRelative.bind(this);
          }

          connectedCallback() {
            super.connectedCallback(); // update every 60 seconds

            this.updateInterval = setInterval(this.updateRelative, 60000);
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            clearInterval(this.updateInterval);
          }

          datetimeChanged(newVal) {
            this.parsedDateTime = newVal ? new Date(newVal) : null;
            this.updateRelative();
          }

          datetimeObjChanged(newVal) {
            this.parsedDateTime = newVal;
            this.updateRelative();
          }

          updateRelative() {
            const root = Object(
              _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__[
                "dom"
              ]
            )(this);

            if (!this.parsedDateTime) {
              root.innerHTML = this.localize(
                "ui.components.relative_time.never"
              );
            } else {
              root.innerHTML = Object(
                _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ]
              )(this.parsedDateTime, this.localize);
            }
          }
        }

        customElements.define("ha-relative-time", HaRelativeTime);

        /***/
      },

    /***/ "./src/components/ha-slider.js":
      /*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js"
        );

        const PaperSliderClass = customElements.get("paper-slider");
        let subTemplate;

        class HaSlider extends PaperSliderClass {
          static get template() {
            if (!subTemplate) {
              subTemplate = PaperSliderClass.template.cloneNode(true);
              const superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

              superStyle.appendChild(
                document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }
        `)
              );
            }

            return subTemplate;
          }

          _calcStep(value) {
            if (!this.step) {
              return parseFloat(value);
            }

            const numSteps = Math.round((value - this.min) / this.step);
            const stepStr = this.step.toString();
            const stepPointAt = stepStr.indexOf(".");

            if (stepPointAt !== -1) {
              /**
               * For small values of this.step, if we calculate the step using
               * For non-integer values of this.step, if we calculate the step using
               * `Math.round(value / step) * step` we may hit a precision point issue
               * eg. 0.1 * 0.2 =  0.020000000000000004
               * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
               *
               * as a work around we can round with the decimal precision of `step`
               */
              const precision = 10 ** (stepStr.length - stepPointAt - 1);
              return (
                Math.round((numSteps * this.step + this.min) * precision) /
                precision
              );
            }

            return numSteps * this.step + this.min;
          }
        }

        customElements.define("ha-slider", HaSlider);

        /***/
      },

    /***/ "./src/data/auth.ts":
      /*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
      /*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hassUrl",
          function() {
            return hassUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSignedPath",
          function() {
            return getSignedPath;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchAuthProviders",
          function() {
            return fetchAuthProviders;
          }
        );
        const hassUrl = `${location.protocol}//${location.host}`;
        const getSignedPath = (hass, path) =>
          hass.callWS({
            type: "auth/sign_path",
            path,
          });
        const fetchAuthProviders = () =>
          fetch("/auth/providers", {
            credentials: "same-origin",
          });

        /***/
      },

    /***/ "./src/data/camera.ts":
      /*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
      /*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CAMERA_SUPPORT_ON_OFF",
          function() {
            return CAMERA_SUPPORT_ON_OFF;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CAMERA_SUPPORT_STREAM",
          function() {
            return CAMERA_SUPPORT_STREAM;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeMJPEGStreamUrl",
          function() {
            return computeMJPEGStreamUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnailUrlWithCache",
          function() {
            return fetchThumbnailUrlWithCache;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnailUrl",
          function() {
            return fetchThumbnailUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnail",
          function() {
            return fetchThumbnail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchStreamUrl",
          function() {
            return fetchStreamUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCameraPrefs",
          function() {
            return fetchCameraPrefs;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCameraPrefs",
          function() {
            return updateCameraPrefs;
          }
        );
        /* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts"
        );
        /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./auth */ "./src/data/auth.ts"
        );

        const CAMERA_SUPPORT_ON_OFF = 1;
        const CAMERA_SUPPORT_STREAM = 2;
        const computeMJPEGStreamUrl = (entity) =>
          `/api/camera_proxy_stream/${entity.entity_id}?token=${
            entity.attributes.access_token
          }`;
        const fetchThumbnailUrlWithCache = (hass, entityId) =>
          Object(
            _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__[
              "timeCachePromiseFunc"
            ]
          )("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
        const fetchThumbnailUrl = (hass, entityId) =>
          Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(
            hass,
            `/api/camera_proxy/${entityId}`
          ).then(({ path }) => path);
        const fetchThumbnail = (hass, entityId) => {
          // tslint:disable-next-line: no-console
          console.warn("This method has been deprecated.");
          return hass.callWS({
            type: "camera_thumbnail",
            entity_id: entityId,
          });
        };
        const fetchStreamUrl = (hass, entityId, format) => {
          const data = {
            type: "camera/stream",
            entity_id: entityId,
          };

          if (format) {
            // @ts-ignore
            data.format = format;
          }

          return hass.callWS(data);
        };
        const fetchCameraPrefs = (hass, entityId) =>
          hass.callWS({
            type: "camera/get_prefs",
            entity_id: entityId,
          });
        const updateCameraPrefs = (hass, entityId, prefs) =>
          hass.callWS(
            Object.assign(
              {
                type: "camera/update_prefs",
                entity_id: entityId,
              },
              prefs
            )
          );

        /***/
      },

    /***/ "./src/data/input-select.ts":
      /*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
      /*! exports provided: setInputSelectOption */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setInputSelectOption",
          function() {
            return setInputSelectOption;
          }
        );
        const setInputSelectOption = (hass, entity, option) =>
          hass.callService("input_select", "select_option", {
            option,
            entity_id: entity,
          });

        /***/
      },

    /***/ "./src/util/cover-model.js":
      /*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
      /*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return CoverEntity;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsOpen",
          function() {
            return supportsOpen;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsClose",
          function() {
            return supportsClose;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsSetPosition",
          function() {
            return supportsSetPosition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsStop",
          function() {
            return supportsStop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsOpenTilt",
          function() {
            return supportsOpenTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsCloseTilt",
          function() {
            return supportsCloseTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsStopTilt",
          function() {
            return supportsStopTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsSetTiltPosition",
          function() {
            return supportsSetTiltPosition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isTiltOnly",
          function() {
            return isTiltOnly;
          }
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );

        /* eslint-enable no-bitwise */

        class CoverEntity {
          constructor(hass, stateObj) {
            this.hass = hass;
            this.stateObj = stateObj;
            this._attr = stateObj.attributes;
            this._feat = this._attr.supported_features;
          }

          get isFullyOpen() {
            if (this._attr.current_position !== undefined) {
              return this._attr.current_position === 100;
            }

            return this.stateObj.state === "open";
          }

          get isFullyClosed() {
            if (this._attr.current_position !== undefined) {
              return this._attr.current_position === 0;
            }

            return this.stateObj.state === "closed";
          }

          get isFullyOpenTilt() {
            return this._attr.current_tilt_position === 100;
          }

          get isFullyClosedTilt() {
            return this._attr.current_tilt_position === 0;
          }

          get isOpening() {
            return this.stateObj.state === "opening";
          }

          get isClosing() {
            return this.stateObj.state === "closing";
          }

          get supportsOpen() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 1);
          }

          get supportsClose() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 2);
          }

          get supportsSetPosition() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 4);
          }

          get supportsStop() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 8);
          }

          get supportsOpenTilt() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 16);
          }

          get supportsCloseTilt() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 32);
          }

          get supportsStopTilt() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 64);
          }

          get supportsSetTiltPosition() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 128);
          }

          get isTiltOnly() {
            const supportsCover =
              this.supportsOpen || this.supportsClose || this.supportsStop;
            const supportsTilt =
              this.supportsOpenTilt ||
              this.supportsCloseTilt ||
              this.supportsStopTilt;
            return supportsTilt && !supportsCover;
          }

          openCover() {
            this.callService("open_cover");
          }

          closeCover() {
            this.callService("close_cover");
          }

          stopCover() {
            this.callService("stop_cover");
          }

          openCoverTilt() {
            this.callService("open_cover_tilt");
          }

          closeCoverTilt() {
            this.callService("close_cover_tilt");
          }

          stopCoverTilt() {
            this.callService("stop_cover_tilt");
          }

          setCoverPosition(position) {
            this.callService("set_cover_position", {
              position,
            });
          }

          setCoverTiltPosition(tiltPosition) {
            this.callService("set_cover_tilt_position", {
              tilt_position: tiltPosition,
            });
          } // helper method

          callService(service, data = {}) {
            data.entity_id = this.stateObj.entity_id;
            this.hass.callService("cover", service, data);
          }
        }
        const supportsOpen = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 1);
        const supportsClose = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 2);
        const supportsSetPosition = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 4);
        const supportsStop = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 8);
        const supportsOpenTilt = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 16);
        const supportsCloseTilt = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 32);
        const supportsStopTilt = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 64);
        const supportsSetTiltPosition = (stateObj) =>
          Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 128);
        function isTiltOnly(stateObj) {
          const supportsCover =
            supportsOpen(stateObj) ||
            supportsClose(stateObj) ||
            supportsStop(stateObj);
          const supportsTilt =
            supportsOpenTilt(stateObj) ||
            supportsCloseTilt(stateObj) ||
            supportsStopTilt(stateObj);
          return supportsTilt && !supportsCover;
        }

        /***/
      },

    /***/ "./src/util/hass-media-player-model.js":
      /*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return MediaPlayerEntity;
          }
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );

        class MediaPlayerEntity {
          constructor(hass, stateObj) {
            this.hass = hass;
            this.stateObj = stateObj;
            this._attr = stateObj.attributes;
            this._feat = this._attr.supported_features;
          }

          get isOff() {
            return this.stateObj.state === "off";
          }

          get isIdle() {
            return this.stateObj.state === "idle";
          }

          get isMuted() {
            return this._attr.is_volume_muted;
          }

          get isPaused() {
            return this.stateObj.state === "paused";
          }

          get isPlaying() {
            return this.stateObj.state === "playing";
          }

          get isMusic() {
            return this._attr.media_content_type === "music";
          }

          get isTVShow() {
            return this._attr.media_content_type === "tvshow";
          }

          get hasMediaControl() {
            return (
              ["playing", "paused", "unknown", "on"].indexOf(
                this.stateObj.state
              ) !== -1
            );
          }

          get volumeSliderValue() {
            return this._attr.volume_level * 100;
          }

          get showProgress() {
            return (
              (this.isPlaying || this.isPaused) &&
              "media_duration" in this.stateObj.attributes &&
              "media_position" in this.stateObj.attributes &&
              "media_position_updated_at" in this.stateObj.attributes
            );
          }

          get currentProgress() {
            var progress = this._attr.media_position;

            if (this.isPlaying) {
              progress +=
                (Date.now() -
                  new Date(this._attr.media_position_updated_at).getTime()) /
                1000.0;
            }

            return progress;
          }

          get supportsPause() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 1);
          }

          get supportsVolumeSet() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 4);
          }

          get supportsVolumeMute() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 8);
          }

          get supportsPreviousTrack() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 16);
          }

          get supportsNextTrack() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 32);
          }

          get supportsTurnOn() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 128);
          }

          get supportsTurnOff() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 256);
          }

          get supportsPlayMedia() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 512);
          }

          get supportsVolumeButtons() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 1024);
          }

          get supportsSelectSource() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 2048);
          }

          get supportsSelectSoundMode() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 65536);
          }

          get supportsPlay() {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                "supportsFeature"
              ]
            )(this.stateObj, 16384);
          }

          get primaryTitle() {
            return this._attr.media_title;
          }

          get secondaryTitle() {
            if (this.isMusic) {
              return this._attr.media_artist;
            }

            if (this.isTVShow) {
              var text = this._attr.media_series_title;

              if (this._attr.media_season) {
                text += " S" + this._attr.media_season;

                if (this._attr.media_episode) {
                  text += "E" + this._attr.media_episode;
                }
              }

              return text;
            }

            if (this._attr.app_name) {
              return this._attr.app_name;
            }

            return "";
          }

          get source() {
            return this._attr.source;
          }

          get sourceList() {
            return this._attr.source_list;
          }

          get soundMode() {
            return this._attr.sound_mode;
          }

          get soundModeList() {
            return this._attr.sound_mode_list;
          }

          mediaPlayPause() {
            this.callService("media_play_pause");
          }

          nextTrack() {
            this.callService("media_next_track");
          }

          playbackControl() {
            this.callService("media_play_pause");
          }

          previousTrack() {
            this.callService("media_previous_track");
          }

          setVolume(volume) {
            this.callService("volume_set", {
              volume_level: volume,
            });
          }

          togglePower() {
            if (this.isOff) {
              this.turnOn();
            } else {
              this.turnOff();
            }
          }

          turnOff() {
            this.callService("turn_off");
          }

          turnOn() {
            this.callService("turn_on");
          }

          volumeDown() {
            this.callService("volume_down");
          }

          volumeMute(mute) {
            if (!this.supportsVolumeMute) {
              throw new Error("Muting volume not supported");
            }

            this.callService("volume_mute", {
              is_volume_muted: mute,
            });
          }

          volumeUp() {
            this.callService("volume_up");
          }

          selectSource(source) {
            this.callService("select_source", {
              source,
            });
          }

          selectSoundMode(soundMode) {
            this.callService("select_sound_mode", {
              sound_mode: soundMode,
            });
          } // helper method

          callService(service, data = {}) {
            data.entity_id = this.stateObj.entity_id;
            this.hass.callService("media_player", service, data);
          }
        }

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3N0b3BfcHJvcGFnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY292ZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1tZWRpYS1wbGF5ZXItbW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR1cmF0aW9uVG9TZWNvbmRzKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgcmV0dXJuIHBhcnRzWzBdICogMzYwMCArIHBhcnRzWzFdICogNjAgKyBwYXJ0c1syXTtcbn1cbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiY29uc3QgbGVmdFBhZCA9IChudW06IG51bWJlcikgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vjb25kc1RvRHVyYXRpb24oZDogbnVtYmVyKSB7XG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKGQgLyAzNjAwKTtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAlIDYwKTtcblxuICBpZiAoaCA+IDApIHtcbiAgICByZXR1cm4gYCR7aH06JHtsZWZ0UGFkKG0pfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAobSA+IDApIHtcbiAgICByZXR1cm4gYCR7bX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKHMgPiAwKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVyVGltZVJlbWFpbmluZyhzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICBsZXQgdGltZVJlbWFpbmluZyA9IGR1cmF0aW9uVG9TZWNvbmRzKHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVtYWluaW5nKTtcblxuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBtYWRlQWN0aXZlID0gbmV3IERhdGUoc3RhdGVPYmoubGFzdF9jaGFuZ2VkKS5nZXRUaW1lKCk7XG4gICAgdGltZVJlbWFpbmluZyA9IE1hdGgubWF4KHRpbWVSZW1haW5pbmcgLSAobm93IC0gbWFkZUFjdGl2ZSkgLyAxMDAwLCAwKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lUmVtYWluaW5nO1xufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUmVzdWx0Q2FjaGU8VD4ge1xuICBbZW50aXR5SWQ6IHN0cmluZ106IFByb21pc2U8VD4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCB0aW1lQ2FjaGVQcm9taXNlRnVuYyA9IGFzeW5jIDxUPihcbiAgY2FjaGVLZXk6IHN0cmluZyxcbiAgY2FjaGVUaW1lOiBudW1iZXIsXG4gIGZ1bmM6IChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIGVudGl0eUlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogdW5rbm93bltdXG4gICkgPT4gUHJvbWlzZTxUPixcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgLi4uYXJnczogdW5rbm93bltdXG4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgbGV0IGNhY2hlOiBSZXN1bHRDYWNoZTxUPiB8IHVuZGVmaW5lZCA9IChoYXNzIGFzIGFueSlbY2FjaGVLZXldO1xuXG4gIGlmICghY2FjaGUpIHtcbiAgICBjYWNoZSA9IGhhc3NbY2FjaGVLZXldID0ge307XG4gIH1cblxuICBjb25zdCBsYXN0UmVzdWx0ID0gY2FjaGVbZW50aXR5SWRdO1xuXG4gIGlmIChsYXN0UmVzdWx0KSB7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmdW5jKGhhc3MsIGVudGl0eUlkLCAuLi5hcmdzKTtcbiAgY2FjaGVbZW50aXR5SWRdID0gcmVzdWx0O1xuXG4gIHJlc3VsdC50aGVuKFxuICAgIC8vIFdoZW4gc3VjY2Vzc2Z1bCwgc2V0IHRpbWVyIHRvIGNsZWFyIGNhY2hlXG4gICAgKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgICAgfSwgY2FjaGVUaW1lKSxcbiAgICAvLyBPbiBmYWlsdXJlLCBjbGVhciBjYWNoZSByaWdodCBhd2F5XG4gICAgKCkgPT4ge1xuICAgICAgY2FjaGUhW2VudGl0eUlkXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDbGltYXRlU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YXJnZXQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdGUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVuaXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhcmdldFwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2hhc0tub3duU3RhdGUoc3RhdGVPYmouc3RhdGUpXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRlLWxhYmVsXCI+XG4gICAgICAgICAgICBbW19sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iai5zdGF0ZSldXVxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGVdXVwiPlxuICAgICAgICAgICAgICAtIFtbX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlKV1dXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2NvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY3VycmVudFN0YXR1c11dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5jbGltYXRlLmN1cnJlbnRseScpXV06XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2N1cnJlbnRTdGF0dXNdXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGN1cnJlbnRTdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDdXJyZW50U3RhdHVzKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlfSAke1xuICAgICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZVxuICAgICAgfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eX0gJWA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIC8vIFdlJ3JlIHVzaW5nIFwiIT0gbnVsbFwiIG9uIHB1cnBvc2Ugc28gdGhhdCB3ZSBtYXRjaCBib3RoIG51bGwgYW5kIHVuZGVmaW5lZC5cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyAhPSBudWxsICYmXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fS0ke1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgIH0gJHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX0gJHtcbiAgICAgICAgaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVcbiAgICAgIH1gO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93fS0ke1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdoXG4gICAgICB9JWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlYDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIF9oYXNLbm93blN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBcInVua25vd25cIjtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUuY2xpbWF0ZS4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG5cbiAgX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBwcmVzZXQpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5wcmVzZXRfbW9kZS4ke3ByZXNldH1gKSB8fCBwcmVzZXQ7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNsaW1hdGUtc3RhdGVcIiwgSGFDbGltYXRlU3RhdGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyQ29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbkNsb3NlVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzQ2xvc2VdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIChlbnRpdHlPYmouaXNGdWxseU9wZW4gfHwgZW50aXR5T2JqLmlzT3BlbmluZykgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkIHx8IGVudGl0eU9iai5pc0Nsb3NpbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5vcGVuQ292ZXIoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyKCk7XG4gIH1cblxuICBvblN0b3BUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXIoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci1jb250cm9sc1wiLCBIYUNvdmVyQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgSGFDb3ZlclRpbHRDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgW2ludmlzaWJsZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LXRvcC1yaWdodFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiT3BlbiB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c09wZW5UaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGljb249XCJoYXNzOnN0b3BcIlxuICAgICAgICBvbi1jbGljaz1cIm9uU3RvcFRpbHRUYXBcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU3RvcFRpbHRdXVwiXG4gICAgICAgIHRpdGxlPVwiU3RvcCB0aWx0XCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LWJvdHRvbS1sZWZ0XCJcbiAgICAgICAgb24tY2xpY2s9XCJvbkNsb3NlVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgdGlsdFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZVRpbHRdXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5T3BlblRpbHQgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlDbG9zZWRUaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25DbG9zZVRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25TdG9wVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlclRpbHQoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci10aWx0LWNvbnRyb2xzXCIsIEhhQ292ZXJUaWx0Q29udHJvbHMpO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxubGV0IGxvYWRlZCA9IG51bGw7XG5cbi8qKlxuICogV2hpdGUgbGlzdCBhbGxvd2VkIHN2ZyB0YWcuXG4gKiBPbmx5IHB1dCBpbiB0aGUgdGFnIHVzZWQgaW4gUVIgY29kZSwgY2FuIGJlIGV4dGVuZCBpbiBmdXR1cmUuXG4gKi9cbmNvbnN0IHN2Z1doaXRlTGlzdCA9IFtcInN2Z1wiLCBcInBhdGhcIl07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhTWFya2Rvd24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJfcmVuZGVyXCIsXG4gICAgICB9LFxuICAgICAgYWxsb3dTdmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyAwID0gbm90IGxvYWRlZCwgMSA9IHN1Y2Nlc3MsIDIgPSBlcnJvclxuICAgIHRoaXMuX3NjcmlwdExvYWRlZCA9IDA7XG4gICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVzaXplID0gKCkgPT4gdGhpcy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG5cbiAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9hZF9tYXJrZG93blwiICovIFwiLi4vcmVzb3VyY2VzL2xvYWRfbWFya2Rvd25cIik7XG4gICAgfVxuICAgIGxvYWRlZFxuICAgICAgLnRoZW4oXG4gICAgICAgICh7IG1hcmtlZCwgZmlsdGVyWFNTIH0pID0+IHtcbiAgICAgICAgICB0aGlzLm1hcmtlZCA9IG1hcmtlZDtcbiAgICAgICAgICB0aGlzLmZpbHRlclhTUyA9IGZpbHRlclhTUztcbiAgICAgICAgICB0aGlzLl9zY3JpcHRMb2FkZWQgPSAxO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGVkID0gMjtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVuZGVyKCkpO1xuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICBpZiAodGhpcy5fc2NyaXB0TG9hZGVkID09PSAwIHx8IHRoaXMuX3JlbmRlclNjaGVkdWxlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gdHJ1ZTtcblxuICAgIC8vIGRlYm91bmNlIGl0IHRvIG5leHQgbWljcm90YXNrLlxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl9zY3JpcHRMb2FkZWQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0aGlzLmZpbHRlclhTUyhcbiAgICAgICAgICB0aGlzLm1hcmtlZCh0aGlzLmNvbnRlbnQsIHtcbiAgICAgICAgICAgIGdmbTogdHJ1ZSxcbiAgICAgICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbklnbm9yZVRhZzogdGhpcy5hbGxvd1N2Z1xuICAgICAgICAgICAgICA/ICh0YWcsIGh0bWwpID0+IChzdmdXaGl0ZUxpc3QuaW5kZXhPZih0YWcpID49IDAgPyBodG1sIDogbnVsbClcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fcmVzaXplKCk7XG5cbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIDEgLyogU0hPV19FTEVNRU5UICovLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuXG4gICAgICAgICAgLy8gT3BlbiBleHRlcm5hbCBsaW5rcyBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSBcIkFcIiAmJiBub2RlLmhvc3QgIT09IGRvY3VtZW50LmxvY2F0aW9uLmhvc3QpIHtcbiAgICAgICAgICAgIG5vZGUudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgICAgICAgICAgLy8gRmlyZSBhIHJlc2l6ZSBldmVudCB3aGVuIGltYWdlcyBsb2FkZWQgdG8gbm90aWZ5IGNvbnRlbnQgcmVzaXplZFxuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NjcmlwdExvYWRlZCA9PT0gMikge1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuY29udGVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1tYXJrZG93blwiLCBIYU1hcmtkb3duKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlbGF0aXZlLXRpbWVcIiwgSGFSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc2xpZGVyXCI7XG5cbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XG5sZXQgc3ViVGVtcGxhdGU7XG5cbmNsYXNzIEhhU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgaWYgKCFzdWJUZW1wbGF0ZSkge1xuICAgICAgc3ViVGVtcGxhdGUgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgY29uc3Qgc3VwZXJTdHlsZSA9IHN1YlRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpO1xuXG4gICAgICAvLyBhcHBlbmQgc3R5bGUgdG8gYWRkIG1pcnJvcmluZyBvZiBwaW4gaW4gUlRMXG4gICAgICBzdXBlclN0eWxlLmFwcGVuZENoaWxkKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgI3NsaWRlckNvbnRhaW5lci5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICBgKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YlRlbXBsYXRlO1xuICB9XG5cbiAgX2NhbGNTdGVwKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnN0ZXApIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1TdGVwcyA9IE1hdGgucm91bmQoKHZhbHVlIC0gdGhpcy5taW4pIC8gdGhpcy5zdGVwKTtcbiAgICBjb25zdCBzdGVwU3RyID0gdGhpcy5zdGVwLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc3RlcFBvaW50QXQgPSBzdGVwU3RyLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChzdGVwUG9pbnRBdCAhPT0gLTEpIHtcbiAgICAgIC8qKlxuICAgICAgICogRm9yIHNtYWxsIHZhbHVlcyBvZiB0aGlzLnN0ZXAsIGlmIHdlIGNhbGN1bGF0ZSB0aGUgc3RlcCB1c2luZ1xuICAgICAgICogRm9yIG5vbi1pbnRlZ2VyIHZhbHVlcyBvZiB0aGlzLnN0ZXAsIGlmIHdlIGNhbGN1bGF0ZSB0aGUgc3RlcCB1c2luZ1xuICAgICAgICogYE1hdGgucm91bmQodmFsdWUgLyBzdGVwKSAqIHN0ZXBgIHdlIG1heSBoaXQgYSBwcmVjaXNpb24gcG9pbnQgaXNzdWVcbiAgICAgICAqIGVnLiAwLjEgKiAwLjIgPSAgMC4wMjAwMDAwMDAwMDAwMDAwMDRcbiAgICAgICAqIGh0dHA6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTE5OTU3LTAxLzgwNi0zNTY4L25jZ19nb2xkYmVyZy5odG1sXG4gICAgICAgKlxuICAgICAgICogYXMgYSB3b3JrIGFyb3VuZCB3ZSBjYW4gcm91bmQgd2l0aCB0aGUgZGVjaW1hbCBwcmVjaXNpb24gb2YgYHN0ZXBgXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHByZWNpc2lvbiA9IDEwICoqIChzdGVwU3RyLmxlbmd0aCAtIHN0ZXBQb2ludEF0IC0gMSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBNYXRoLnJvdW5kKChudW1TdGVwcyAqIHRoaXMuc3RlcCArIHRoaXMubWluKSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW47XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNsaWRlclwiLCBIYVNsaWRlcik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRQYXRoIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaGFzc1VybCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fWA7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRQYXRoID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2lnbmVkUGF0aD4gPT4gaGFzcy5jYWxsV1MoeyB0eXBlOiBcImF1dGgvc2lnbl9wYXRoXCIsIHBhdGggfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhQcm92aWRlcnMgPSAoKSA9PlxuICBmZXRjaChcIi9hdXRoL3Byb3ZpZGVyc1wiLCB7XG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRpbWVDYWNoZVByb21pc2VGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL3RpbWUtY2FjaGUtZnVuY3Rpb24tcHJvbWlzZVwiO1xuaW1wb3J0IHsgZ2V0U2lnbmVkUGF0aCB9IGZyb20gXCIuL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IENBTUVSQV9TVVBQT1JUX09OX09GRiA9IDE7XG5leHBvcnQgY29uc3QgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNID0gMjtcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmVmZXJlbmNlcyB7XG4gIHByZWxvYWRfc3RyZWFtOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVRodW1ibmFpbCB7XG4gIGNvbnRlbnRfdHlwZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlTUpQRUdTdHJlYW1VcmwgPSAoZW50aXR5OiBDYW1lcmFFbnRpdHkpID0+XG4gIGAvYXBpL2NhbWVyYV9wcm94eV9zdHJlYW0vJHtlbnRpdHkuZW50aXR5X2lkfT90b2tlbj0ke1xuICAgIGVudGl0eS5hdHRyaWJ1dGVzLmFjY2Vzc190b2tlblxuICB9YDtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsVXJsV2l0aENhY2hlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+XG4gIHRpbWVDYWNoZVByb21pc2VGdW5jKFxuICAgIFwiX2NhbWVyYVRtYlVybFwiLFxuICAgIDkwMDAsXG4gICAgZmV0Y2hUaHVtYm5haWxVcmwsXG4gICAgaGFzcyxcbiAgICBlbnRpdHlJZFxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWxVcmwgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgZ2V0U2lnbmVkUGF0aChoYXNzLCBgL2FwaS9jYW1lcmFfcHJveHkvJHtlbnRpdHlJZH1gKS50aGVuKCh7IHBhdGggfSkgPT4gcGF0aCk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgcmV0dXJuIGhhc3MuY2FsbFdTPENhbWVyYVRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwiY2FtZXJhX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU3RyZWFtVXJsID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBmb3JtYXQ/OiBcImhsc1wiXG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0eXBlOiBcImNhbWVyYS9zdHJlYW1cIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9O1xuICBpZiAoZm9ybWF0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGRhdGEuZm9ybWF0ID0gZm9ybWF0O1xuICB9XG4gIHJldHVybiBoYXNzLmNhbGxXUzxTdHJlYW0+KGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2FtZXJhUHJlZnMgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8Q2FtZXJhUHJlZmVyZW5jZXM+KHtcbiAgICB0eXBlOiBcImNhbWVyYS9nZXRfcHJlZnNcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhbWVyYVByZWZzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBwcmVmczoge1xuICAgIHByZWxvYWRfc3RyZWFtPzogYm9vbGVhbjtcbiAgfVxuKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL3VwZGF0ZV9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4ucHJlZnMsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0SW5wdXRTZWxlY3RPcHRpb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eTogc3RyaW5nLFxuICBvcHRpb246IHN0cmluZ1xuKSA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfc2VsZWN0XCIsIFwic2VsZWN0X29wdGlvblwiLCB7XG4gICAgb3B0aW9uLFxuICAgIGVudGl0eV9pZDogZW50aXR5LFxuICB9KTtcbiIsImltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3ZlckVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLnN0YXRlT2JqID0gc3RhdGVPYmo7XG4gICAgdGhpcy5fYXR0ciA9IHN0YXRlT2JqLmF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fZmVhdCA9IHRoaXMuX2F0dHIuc3VwcG9ydGVkX2ZlYXR1cmVzO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlPcGVuKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvcGVuXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseUNsb3NlZCgpIHtcbiAgICBpZiAodGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gPT09IDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImNsb3NlZFwiO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlPcGVuVGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3RpbHRfcG9zaXRpb24gPT09IDEwMDtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkVGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3RpbHRfcG9zaXRpb24gPT09IDA7XG4gIH1cblxuICBnZXQgaXNPcGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5pbmdcIjtcbiAgfVxuXG4gIGdldCBpc0Nsb3NpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2luZ1wiO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzT3BlbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTdG9wKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0Nsb3NlVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDMyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3BUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTI4KTtcbiAgfVxuXG4gIGdldCBpc1RpbHRPbmx5KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzQ292ZXIgPVxuICAgICAgdGhpcy5zdXBwb3J0c09wZW4gfHwgdGhpcy5zdXBwb3J0c0Nsb3NlIHx8IHRoaXMuc3VwcG9ydHNTdG9wO1xuICAgIGNvbnN0IHN1cHBvcnRzVGlsdCA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlblRpbHQgfHwgdGhpcy5zdXBwb3J0c0Nsb3NlVGlsdCB8fCB0aGlzLnN1cHBvcnRzU3RvcFRpbHQ7XG4gICAgcmV0dXJuIHN1cHBvcnRzVGlsdCAmJiAhc3VwcG9ydHNDb3ZlcjtcbiAgfVxuXG4gIG9wZW5Db3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwib3Blbl9jb3ZlclwiKTtcbiAgfVxuXG4gIGNsb3NlQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcImNsb3NlX2NvdmVyXCIpO1xuICB9XG5cbiAgc3RvcENvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzdG9wX2NvdmVyXCIpO1xuICB9XG5cbiAgb3BlbkNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwib3Blbl9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcImNsb3NlX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBzdG9wQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzdG9wX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBzZXRDb3ZlclBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNldF9jb3Zlcl9wb3NpdGlvblwiLCB7IHBvc2l0aW9uIH0pO1xuICB9XG5cbiAgc2V0Q292ZXJUaWx0UG9zaXRpb24odGlsdFBvc2l0aW9uKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNldF9jb3Zlcl90aWx0X3Bvc2l0aW9uXCIsIHtcbiAgICAgIHRpbHRfcG9zaXRpb246IHRpbHRQb3NpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RcblxuICBjYWxsU2VydmljZShzZXJ2aWNlLCBkYXRhID0ge30pIHtcbiAgICBkYXRhLmVudGl0eV9pZCA9IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvdmVyXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW4gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMSk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Nsb3NlID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDIpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRQb3NpdGlvbiA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA0KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzT3BlblRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTYpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZVRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTdG9wVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA2NCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1NldFRpbHRQb3NpdGlvbiA9IChzdGF0ZU9iaikgPT5cbiAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaWx0T25seShzdGF0ZU9iaikge1xuICBjb25zdCBzdXBwb3J0c0NvdmVyID1cbiAgICBzdXBwb3J0c09wZW4oc3RhdGVPYmopIHx8IHN1cHBvcnRzQ2xvc2Uoc3RhdGVPYmopIHx8IHN1cHBvcnRzU3RvcChzdGF0ZU9iaik7XG4gIGNvbnN0IHN1cHBvcnRzVGlsdCA9XG4gICAgc3VwcG9ydHNPcGVuVGlsdChzdGF0ZU9iaikgfHxcbiAgICBzdXBwb3J0c0Nsb3NlVGlsdChzdGF0ZU9iaikgfHxcbiAgICBzdXBwb3J0c1N0b3BUaWx0KHN0YXRlT2JqKTtcbiAgcmV0dXJuIHN1cHBvcnRzVGlsdCAmJiAhc3VwcG9ydHNDb3Zlcjtcbn1cbiIsImltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFQbGF5ZXJFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHN0YXRlT2JqO1xuICAgIHRoaXMuX2F0dHIgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2ZlYXQgPSB0aGlzLl9hdHRyLnN1cHBvcnRlZF9mZWF0dXJlcztcbiAgfVxuXG4gIGdldCBpc09mZigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgfVxuXG4gIGdldCBpc0lkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiaWRsZVwiO1xuICB9XG5cbiAgZ2V0IGlzTXV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuaXNfdm9sdW1lX211dGVkO1xuICB9XG5cbiAgZ2V0IGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcInBhdXNlZFwiO1xuICB9XG5cbiAgZ2V0IGlzUGxheWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwbGF5aW5nXCI7XG4gIH1cblxuICBnZXQgaXNNdXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9jb250ZW50X3R5cGUgPT09IFwibXVzaWNcIjtcbiAgfVxuXG4gIGdldCBpc1RWU2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9jb250ZW50X3R5cGUgPT09IFwidHZzaG93XCI7XG4gIH1cblxuICBnZXQgaGFzTWVkaWFDb250cm9sKCkge1xuICAgIHJldHVybiAoXG4gICAgICBbXCJwbGF5aW5nXCIsIFwicGF1c2VkXCIsIFwidW5rbm93blwiLCBcIm9uXCJdLmluZGV4T2YodGhpcy5zdGF0ZU9iai5zdGF0ZSkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIGdldCB2b2x1bWVTbGlkZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci52b2x1bWVfbGV2ZWwgKiAxMDA7XG4gIH1cblxuICBnZXQgc2hvd1Byb2dyZXNzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1BsYXlpbmcgfHwgdGhpcy5pc1BhdXNlZCkgJiZcbiAgICAgIFwibWVkaWFfZHVyYXRpb25cIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgIFwibWVkaWFfcG9zaXRpb25cIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgIFwibWVkaWFfcG9zaXRpb25fdXBkYXRlZF9hdFwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlc1xuICAgICk7XG4gIH1cblxuICBnZXQgY3VycmVudFByb2dyZXNzKCkge1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX2F0dHIubWVkaWFfcG9zaXRpb247XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICBwcm9ncmVzcyArPVxuICAgICAgICAoRGF0ZS5ub3coKSAtXG4gICAgICAgICAgbmV3IERhdGUodGhpcy5fYXR0ci5tZWRpYV9wb3NpdGlvbl91cGRhdGVkX2F0KS5nZXRUaW1lKCkpIC9cbiAgICAgICAgMTAwMC4wO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQYXVzZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lU2V0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVNdXRlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQcmV2aW91c1RyYWNrKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzTmV4dFRyYWNrKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVHVybk9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTI4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1R1cm5PZmYoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyNTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGxheU1lZGlhKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNTEyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZUJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NlbGVjdFNvdXJjZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIwNDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2VsZWN0U291bmRNb2RlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNjU1MzYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGxheSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2Mzg0KTtcbiAgfVxuXG4gIGdldCBwcmltYXJ5VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfdGl0bGU7XG4gIH1cblxuICBnZXQgc2Vjb25kYXJ5VGl0bGUoKSB7XG4gICAgaWYgKHRoaXMuaXNNdXNpYykge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfYXJ0aXN0O1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1RWU2hvdykge1xuICAgICAgdmFyIHRleHQgPSB0aGlzLl9hdHRyLm1lZGlhX3Nlcmllc190aXRsZTtcblxuICAgICAgaWYgKHRoaXMuX2F0dHIubWVkaWFfc2Vhc29uKSB7XG4gICAgICAgIHRleHQgKz0gXCIgU1wiICsgdGhpcy5fYXR0ci5tZWRpYV9zZWFzb247XG5cbiAgICAgICAgaWYgKHRoaXMuX2F0dHIubWVkaWFfZXBpc29kZSkge1xuICAgICAgICAgIHRleHQgKz0gXCJFXCIgKyB0aGlzLl9hdHRyLm1lZGlhX2VwaXNvZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdHRyLmFwcF9uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5hcHBfbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdXJjZTtcbiAgfVxuXG4gIGdldCBzb3VyY2VMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdXJjZV9saXN0O1xuICB9XG5cbiAgZ2V0IHNvdW5kTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VuZF9tb2RlO1xuICB9XG5cbiAgZ2V0IHNvdW5kTW9kZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291bmRfbW9kZV9saXN0O1xuICB9XG5cbiAgbWVkaWFQbGF5UGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXlfcGF1c2VcIik7XG4gIH1cblxuICBuZXh0VHJhY2soKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX25leHRfdHJhY2tcIik7XG4gIH1cblxuICBwbGF5YmFja0NvbnRyb2woKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXlfcGF1c2VcIik7XG4gIH1cblxuICBwcmV2aW91c1RyYWNrKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wcmV2aW91c190cmFja1wiKTtcbiAgfVxuXG4gIHNldFZvbHVtZSh2b2x1bWUpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX3NldFwiLCB7IHZvbHVtZV9sZXZlbDogdm9sdW1lIH0pO1xuICB9XG5cbiAgdG9nZ2xlUG93ZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNPZmYpIHtcbiAgICAgIHRoaXMudHVybk9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybk9mZigpO1xuICAgIH1cbiAgfVxuXG4gIHR1cm5PZmYoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInR1cm5fb2ZmXCIpO1xuICB9XG5cbiAgdHVybk9uKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ0dXJuX29uXCIpO1xuICB9XG5cbiAgdm9sdW1lRG93bigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX2Rvd25cIik7XG4gIH1cblxuICB2b2x1bWVNdXRlKG11dGUpIHtcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNWb2x1bWVNdXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXRpbmcgdm9sdW1lIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfbXV0ZVwiLCB7IGlzX3ZvbHVtZV9tdXRlZDogbXV0ZSB9KTtcbiAgfVxuXG4gIHZvbHVtZVVwKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfdXBcIik7XG4gIH1cblxuICBzZWxlY3RTb3VyY2Uoc291cmNlKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNlbGVjdF9zb3VyY2VcIiwgeyBzb3VyY2UgfSk7XG4gIH1cblxuICBzZWxlY3RTb3VuZE1vZGUoc291bmRNb2RlKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNlbGVjdF9zb3VuZF9tb2RlXCIsIHsgc291bmRfbW9kZTogc291bmRNb2RlIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheWVyXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJIQTtBQUNBO0FBcUhBOzs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3RUE7QUFDQTtBQThFQTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5RUE7QUFDQTtBQStFQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQUlBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsOFBBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RkE7QUFDQTtBQXVGQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQXVEQTs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBS0E7QUFZQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBUUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0SEE7QUF3SEE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOU5BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
