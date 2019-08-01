(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-logbook"],
  {
    /***/ "./src/common/datetime/format_date.ts":
      /*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleDateStringSupportsOptions() {
          try {
            new Date().toLocaleDateString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleDateStringSupportsOptions()
          ? (dateObj, locales) =>
              dateObj.toLocaleDateString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "mediumDate"
              );

        /***/
      },

    /***/ "./src/common/datetime/format_time.ts":
      /*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleTimeStringSupportsOptions() {
          try {
            new Date().toLocaleTimeString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleTimeStringSupportsOptions()
          ? (dateObj, locales) =>
              dateObj.toLocaleTimeString(locales, {
                hour: "numeric",
                minute: "2-digit",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "shortTime"
              );

        /***/
      },

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

        /* harmony default export */ __webpack_exports__["default"] = (
          stateObj
        ) =>
          stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";

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
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        const ironIconClass = customElements.get("iron-icon");
        let loaded = false;
        class HaIcon extends ironIconClass {
          constructor(...args) {
            super(...args);
            this._iconsetName = void 0;
          }

          listen(node, eventName, methodName) {
            super.listen(node, eventName, methodName);

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
          }
        }
        customElements.define("ha-icon", HaIcon);

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

        const EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
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
              fire(type, detail, options) {
                options = options || {};
                return Object(
                  _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                    "fireEvent"
                  ]
                )(options.node || this, type, detail, options);
              }
            }
        );

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

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
              static get properties() {
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
              }

              __computeLocalize(localize) {
                return localize;
              }
            }
        );

        /***/
      },

    /***/ "./src/panels/logbook/ha-logbook-data.js":
      /*!***********************************************!*\
  !*** ./src/panels/logbook/ha-logbook-data.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );

        const DATA_CACHE = {};
        const ALL_ENTITIES = "*";

        class HaLogbookData extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
          "PolymerElement"
        ] {
          static get properties() {
            return {
              hass: {
                type: Object,
                observer: "hassChanged",
              },
              filterDate: {
                type: String,
                observer: "filterDataChanged",
              },
              filterPeriod: {
                type: Number,
                observer: "filterDataChanged",
              },
              filterEntity: {
                type: String,
                observer: "filterDataChanged",
              },
              isLoading: {
                type: Boolean,
                value: true,
                readOnly: true,
                notify: true,
              },
              entries: {
                type: Object,
                value: null,
                readOnly: true,
                notify: true,
              },
            };
          }

          hassChanged(newHass, oldHass) {
            if (!oldHass && this.filterDate) {
              this.updateData();
            }
          }

          filterDataChanged(newValue, oldValue) {
            if (oldValue !== undefined) {
              this.updateData();
            }
          }

          updateData() {
            if (!this.hass) return;

            this._setIsLoading(true);

            this.getDate(
              this.filterDate,
              this.filterPeriod,
              this.filterEntity
            ).then((logbookEntries) => {
              this._setEntries(logbookEntries);

              this._setIsLoading(false);
            });
          }

          getDate(date, period, entityId) {
            if (!entityId) entityId = ALL_ENTITIES;
            if (!DATA_CACHE[period]) DATA_CACHE[period] = [];
            if (!DATA_CACHE[period][date]) DATA_CACHE[period][date] = [];

            if (DATA_CACHE[period][date][entityId]) {
              return DATA_CACHE[period][date][entityId];
            }

            if (
              entityId !== ALL_ENTITIES &&
              DATA_CACHE[period][date][ALL_ENTITIES]
            ) {
              return DATA_CACHE[period][date][ALL_ENTITIES].then(function(
                entities
              ) {
                return entities.filter(function(entity) {
                  return entity.entity_id === entityId;
                });
              });
            }

            DATA_CACHE[period][date][entityId] = this._getFromServer(
              date,
              period,
              entityId
            );
            return DATA_CACHE[period][date][entityId];
          }

          _getFromServer(date, period, entityId) {
            let url = "logbook/" + date + "?period=" + period;

            if (entityId !== ALL_ENTITIES) {
              url += "&entity=" + entityId;
            }

            return this.hass.callApi("GET", url).then(
              function(logbookEntries) {
                logbookEntries.reverse();
                return logbookEntries;
              },
              function() {
                return null;
              }
            );
          }

          refreshLogbook() {
            DATA_CACHE[this.filterPeriod][this.filterDate] = [];
            this.updateData();
          }
        }

        customElements.define("ha-logbook-data", HaLogbookData);

        /***/
      },

    /***/ "./src/panels/logbook/ha-logbook.js":
      /*!******************************************!*\
  !*** ./src/panels/logbook/ha-logbook.js ***!
  \******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts"
        );
        /* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaLogbook extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        :host {
          display: block;
        }

        :host([rtl]) {
          direction: ltr;
        }

        .entry {
          @apply --paper-font-body1;
          line-height: 2em;
        }

        .time {
          width: 55px;
          font-size: 0.8em;
          color: var(--secondary-text-color);
        }

        :host([rtl]) .date {
          direction: rtl;
        }

        iron-icon {
          margin: 0 8px 0 16px;
          color: var(--primary-text-color);
        }

        .message {
          color: var(--primary-text-color);
        }

        a {
          color: var(--primary-color);
        }
      </style>

      <template is="dom-if" if="[[!entries.length]]">
        No logbook entries found.
      </template>

      <template is="dom-repeat" items="[[entries]]">
        <template is="dom-if" if="{{_needHeader(entries.*, index)}}">
          <h4 class="date">[[_formatDate(item.when)]]</h4>
        </template>

        <div class="horizontal layout entry">
          <div class="time">[[_formatTime(item.when)]]</div>
          <iron-icon icon="[[_computeIcon(item.domain)]]"></iron-icon>
          <div class="message" flex="">
            <template is="dom-if" if="[[!item.entity_id]]">
              <span class="name">[[item.name]]</span>
            </template>
            <template is="dom-if" if="[[item.entity_id]]">
              <a href="#" on-click="entityClicked" class="name"
                >[[item.name]]</a
              >
            </template>
            <span> </span> <span>[[item.message]]</span>
          </div>
        </div>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              entries: {
                type: Array,
                value: [],
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "_computeRTL(hass)",
              },
            };
          }

          _formatTime(date) {
            return Object(
              _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(new Date(date), this.hass.language);
          }

          _formatDate(date) {
            return Object(
              _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(new Date(date), this.hass.language);
          }

          _needHeader(change, index) {
            if (!index) return true;
            const current = this.get("when", change.base[index]);
            const previous = this.get("when", change.base[index - 1]);
            return (
              current &&
              previous &&
              new Date(current).toDateString() !==
                new Date(previous).toDateString()
            );
          }

          _computeIcon(domain) {
            return Object(
              _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_7__["default"]
            )(domain);
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__[
                "computeRTL"
              ]
            )(hass);
          }

          entityClicked(ev) {
            ev.preventDefault();
            this.fire("hass-more-info", {
              entityId: ev.model.item.entity_id,
            });
          }
        }

        customElements.define("ha-logbook", HaLogbook);

        /***/
      },

    /***/ "./src/panels/logbook/ha-panel-logbook.js":
      /*!************************************************!*\
  !*** ./src/panels/logbook/ha-panel-logbook.js ***!
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
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js"
        );
        /* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _ha_logbook_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./ha-logbook-data */ "./src/panels/logbook/ha-logbook-data.js"
        );
        /* harmony import */ var _ha_logbook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./ha-logbook */ "./src/panels/logbook/ha-logbook.js"
        );
        /* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaPanelLogbook extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
              "html"
            ]`
      <style include="ha-style">
        .content {
          padding: 0 16px 16px;
        }

        paper-spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .wrap {
          margin-bottom: 24px;
        }

        vaadin-date-picker {
          --vaadin-date-picker-clear-icon: {
            display: none;
          }
          max-width: 200px;
          margin-right: 16px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          --paper-input-container-label-floating: {
            padding-bottom: 10px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
        }

        paper-item {
          cursor: pointer;
        }

        ha-entity-picker {
          display: inline-block;
          width: 100%;
          max-width: 400px;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <ha-logbook-data
        hass="[[hass]]"
        is-loading="{{isLoading}}"
        entries="{{entries}}"
        filter-date="[[_computeFilterDate(_currentDate)]]"
        filter-period="[[_computeFilterDays(_periodIndex)]]"
        filter-entity="[[entityId]]"
      ></ha-logbook-data>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.logbook')]]</div>
            <paper-icon-button
              icon="hass:refresh"
              on-click="refreshLogbook"
              hidden$="[[isLoading]]"
            ></paper-icon-button>
          </app-toolbar>
        </app-header>

        <div class="content">
          <paper-spinner
            active="[[isLoading]]"
            hidden$="[[!isLoading]]"
            alt="[[localize('ui.common.loading')]]"
          ></paper-spinner>

          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.logbook.showing_entries')]]"
              disabled="[[isLoading]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.logbook.period')]]"
              disabled="[[isLoading]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_periodIndex}}"
              >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item
                >
              </paper-listbox>
            </paper-dropdown-menu>

            <ha-entity-picker
              hass="[[hass]]"
              value="{{_entityId}}"
              label="[[localize('ui.components.entity.entity-picker.entity')]]"
              disabled="[[isLoading]]"
              on-change="_entityPicked"
            ></ha-entity-picker>
          </div>

          <ha-logbook
            hass="[[hass]]"
            entries="[[entries]]"
            hidden$="[[isLoading]]"
          ></ha-logbook>
        </div>
      </app-header-layout>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              narrow: Boolean,
              // ISO8601 formatted date string
              _currentDate: {
                type: String,
                value: function() {
                  const value = new Date();
                  const today = new Date(
                    Date.UTC(
                      value.getFullYear(),
                      value.getMonth(),
                      value.getDate()
                    )
                  );
                  return today.toISOString().split("T")[0];
                },
              },
              _periodIndex: {
                type: Number,
                value: 0,
              },
              _entityId: {
                type: String,
                value: "",
              },
              entityId: {
                type: String,
                value: "",
                readOnly: true,
              },
              isLoading: {
                type: Boolean,
              },
              entries: {
                type: Array,
              },
              datePicker: {
                type: Object,
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "_computeRTL(hass)",
              },
            };
          }

          connectedCallback() {
            super.connectedCallback(); // We are unable to parse date because we use intl api to render date

            this.$.picker.set("i18n.parseDate", null);
            this.$.picker.set("i18n.formatDate", (date) =>
              Object(
                _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__[
                  "default"
                ]
              )(new Date(date.year, date.month, date.day), this.hass.language)
            );
          }

          _computeFilterDate(_currentDate) {
            if (!_currentDate) return undefined;

            var parts = _currentDate.split("-");

            parts[1] = parseInt(parts[1]) - 1;
            return new Date(parts[0], parts[1], parts[2]).toISOString();
          }

          _computeFilterDays(periodIndex) {
            switch (periodIndex) {
              case 1:
                return 3;

              case 2:
                return 7;

              default:
                return 1;
            }
          }

          _entityPicked(ev) {
            this._setEntityId(ev.target.value);
          }

          refreshLogbook() {
            this.shadowRoot.querySelector("ha-logbook-data").refreshLogbook();
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("ha-panel-logbook", HaPanelLogbook);

        /***/
      },

    /***/ "./src/resources/ha-date-picker-style.js":
      /*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        const documentContainer = document.createElement("template");
        documentContainer.setAttribute("style", "display: none;");
        documentContainer.innerHTML = `<dom-module id="ha-date-picker-vaadin-date-picker-styles" theme-for="vaadin-date-picker">
  <template>
    <style>
      :host([required]) [part~="clear-button"] {
        display: none;
      }

      [part~="toggle-button"] {
        color: var(--secondary-text-color);
        font-size: var(--paper-font-subhead_-_font-size);
        margin-right: 5px;
      }

      :host([opened]) [part~="toggle-button"] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0;
      }

      [part~="label"] {
        color: var(--paper-input-container-color, var(--secondary-text-color));
        font-family: var(--paper-font-caption_-_font-family);
        font-size: var(--paper-font-caption_-_font-size);
        font-weight: var(--paper-font-caption_-_font-weight);
        letter-spacing: var(--paper-font-caption_-_letter-spacing);
        line-height: var(--paper-font-caption_-_line-height);
      }
      :host([focused]) [part~="label"] {
          color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        padding-bottom: 1px;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        line-height: var(--paper-font-subhead_-_line-height);
      }

      :host([focused]) [part~="input-field"] {
        padding-bottom: 0;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      [part~="value"]:focus {
        outline: none;
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
        font-family: inherit;
        color: inherit;
        border: none;
        background: transparent;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      :host {
        background-color: var(--paper-card-background-color, var(--primary-background-color));
      }

      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--paper-grey-200);
      }

    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      :host([focused]) [part="date"][focused],
      [part="date"][selected] {
        background-color: var(--paper-grey-200);
      }
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>`;
        document.head.appendChild(documentContainer.content);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG9nYm9vay9oYS1sb2dib29rLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLWxvZ2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLXBhbmVsLWxvZ2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9oYS1kYXRlLXBpY2tlci1zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJtZWRpdW1EYXRlXCIpKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIikpO1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jb25zdCBEQVRBX0NBQ0hFID0ge307XG5jb25zdCBBTExfRU5USVRJRVMgPSBcIipcIjtcblxuY2xhc3MgSGFMb2dib29rRGF0YSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlckRhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJmaWx0ZXJEYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyUGVyaW9kOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZmlsdGVyRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlckVudGl0eToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImZpbHRlckRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBlbnRyaWVzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBoYXNzQ2hhbmdlZChuZXdIYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFvbGRIYXNzICYmIHRoaXMuZmlsdGVyRGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyRGF0YUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHJldHVybjtcblxuICAgIHRoaXMuX3NldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRoaXMuZ2V0RGF0ZSh0aGlzLmZpbHRlckRhdGUsIHRoaXMuZmlsdGVyUGVyaW9kLCB0aGlzLmZpbHRlckVudGl0eSkudGhlbihcbiAgICAgIChsb2dib29rRW50cmllcykgPT4ge1xuICAgICAgICB0aGlzLl9zZXRFbnRyaWVzKGxvZ2Jvb2tFbnRyaWVzKTtcbiAgICAgICAgdGhpcy5fc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0ZShkYXRlLCBwZXJpb2QsIGVudGl0eUlkKSB7XG4gICAgaWYgKCFlbnRpdHlJZCkgZW50aXR5SWQgPSBBTExfRU5USVRJRVM7XG5cbiAgICBpZiAoIURBVEFfQ0FDSEVbcGVyaW9kXSkgREFUQV9DQUNIRVtwZXJpb2RdID0gW107XG4gICAgaWYgKCFEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV0pIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXSA9IFtdO1xuXG4gICAgaWYgKERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtlbnRpdHlJZF0pIHtcbiAgICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdO1xuICAgIH1cblxuICAgIGlmIChlbnRpdHlJZCAhPT0gQUxMX0VOVElUSUVTICYmIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtBTExfRU5USVRJRVNdKSB7XG4gICAgICByZXR1cm4gREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW0FMTF9FTlRJVElFU10udGhlbihmdW5jdGlvbihlbnRpdGllcykge1xuICAgICAgICByZXR1cm4gZW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uKGVudGl0eSkge1xuICAgICAgICAgIHJldHVybiBlbnRpdHkuZW50aXR5X2lkID09PSBlbnRpdHlJZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdID0gdGhpcy5fZ2V0RnJvbVNlcnZlcihcbiAgICAgIGRhdGUsXG4gICAgICBwZXJpb2QsXG4gICAgICBlbnRpdHlJZFxuICAgICk7XG4gICAgcmV0dXJuIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtlbnRpdHlJZF07XG4gIH1cblxuICBfZ2V0RnJvbVNlcnZlcihkYXRlLCBwZXJpb2QsIGVudGl0eUlkKSB7XG4gICAgbGV0IHVybCA9IFwibG9nYm9vay9cIiArIGRhdGUgKyBcIj9wZXJpb2Q9XCIgKyBwZXJpb2Q7XG4gICAgaWYgKGVudGl0eUlkICE9PSBBTExfRU5USVRJRVMpIHtcbiAgICAgIHVybCArPSBcIiZlbnRpdHk9XCIgKyBlbnRpdHlJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oYXNzLmNhbGxBcGkoXCJHRVRcIiwgdXJsKS50aGVuKFxuICAgICAgZnVuY3Rpb24obG9nYm9va0VudHJpZXMpIHtcbiAgICAgICAgbG9nYm9va0VudHJpZXMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbG9nYm9va0VudHJpZXM7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoTG9nYm9vaygpIHtcbiAgICBEQVRBX0NBQ0hFW3RoaXMuZmlsdGVyUGVyaW9kXVt0aGlzLmZpbHRlckRhdGVdID0gW107XG4gICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbG9nYm9vay1kYXRhXCIsIEhhTG9nYm9va0RhdGEpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhTG9nYm9vayBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZW50cnkge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lIHtcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmRhdGUge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG5cbiAgICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDAgOHB4IDAgMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFlbnRyaWVzLmxlbmd0aF1dXCI+XG4gICAgICAgIE5vIGxvZ2Jvb2sgZW50cmllcyBmb3VuZC5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZW50cmllc11dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwie3tfbmVlZEhlYWRlcihlbnRyaWVzLiosIGluZGV4KX19XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwiZGF0ZVwiPltbX2Zvcm1hdERhdGUoaXRlbS53aGVuKV1dPC9oND5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBsYXlvdXQgZW50cnlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPltbX2Zvcm1hdFRpbWUoaXRlbS53aGVuKV1dPC9kaXY+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiW1tfY29tcHV0ZUljb24oaXRlbS5kb21haW4pXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiIGZsZXg9XCJcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaXRlbS5lbnRpdHlfaWRdXVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5bW2l0ZW0ubmFtZV1dPC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpdGVtLmVudGl0eV9pZF1dXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb24tY2xpY2s9XCJlbnRpdHlDbGlja2VkXCIgY2xhc3M9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA+W1tpdGVtLm5hbWVdXTwvYVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHNwYW4+IDwvc3Bhbj4gPHNwYW4+W1tpdGVtLm1lc3NhZ2VdXTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZW50cmllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfZm9ybWF0VGltZShkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUoZGF0ZSksIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gIH1cblxuICBfZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZSksIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gIH1cblxuICBfbmVlZEhlYWRlcihjaGFuZ2UsIGluZGV4KSB7XG4gICAgaWYgKCFpbmRleCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KFwid2hlblwiLCBjaGFuZ2UuYmFzZVtpbmRleF0pO1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5nZXQoXCJ3aGVuXCIsIGNoYW5nZS5iYXNlW2luZGV4IC0gMV0pO1xuICAgIHJldHVybiAoXG4gICAgICBjdXJyZW50ICYmXG4gICAgICBwcmV2aW91cyAmJlxuICAgICAgbmV3IERhdGUoY3VycmVudCkudG9EYXRlU3RyaW5nKCkgIT09IG5ldyBEYXRlKHByZXZpb3VzKS50b0RhdGVTdHJpbmcoKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZUljb24oZG9tYWluKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxuXG4gIGVudGl0eUNsaWNrZWQoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGV2Lm1vZGVsLml0ZW0uZW50aXR5X2lkIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxvZ2Jvb2tcIiwgSGFMb2dib29rKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtZGF0ZS1waWNrZXItc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL2hhLWxvZ2Jvb2stZGF0YVwiO1xuaW1wb3J0IFwiLi9oYS1sb2dib29rXCI7XG5cbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVBhbmVsTG9nYm9vayBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cmFwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFhZGluLWRhdGUtcGlja2VyIHtcbiAgICAgICAgICAtLXZhYWRpbi1kYXRlLXBpY2tlci1jbGVhci1pY29uOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZsb2F0aW5nOiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1lbnRpdHktcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1sb2dib29rLWRhdGFcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgaXMtbG9hZGluZz1cInt7aXNMb2FkaW5nfX1cIlxuICAgICAgICBlbnRyaWVzPVwie3tlbnRyaWVzfX1cIlxuICAgICAgICBmaWx0ZXItZGF0ZT1cIltbX2NvbXB1dGVGaWx0ZXJEYXRlKF9jdXJyZW50RGF0ZSldXVwiXG4gICAgICAgIGZpbHRlci1wZXJpb2Q9XCJbW19jb21wdXRlRmlsdGVyRGF5cyhfcGVyaW9kSW5kZXgpXV1cIlxuICAgICAgICBmaWx0ZXItZW50aXR5PVwiW1tlbnRpdHlJZF1dXCJcbiAgICAgID48L2hhLWxvZ2Jvb2stZGF0YT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5hcnJvdz1cIltbbmFycm93XV1cIlxuICAgICAgICAgICAgPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwubG9nYm9vaycpXV08L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpyZWZyZXNoXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJyZWZyZXNoTG9nYm9va1wiXG4gICAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICBhY3RpdmU9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICBhbHQ9XCJbW2xvY2FsaXplKCd1aS5jb21tb24ubG9hZGluZycpXV1cIlxuICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBsYXlvdXQgaG9yaXpvbnRhbCB3cmFwXCI+XG4gICAgICAgICAgICA8dmFhZGluLWRhdGUtcGlja2VyXG4gICAgICAgICAgICAgIGlkPVwicGlja2VyXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19jdXJyZW50RGF0ZX19XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5sb2dib29rLnNob3dpbmdfZW50cmllcycpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuXG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmxvZ2Jvb2sucGVyaW9kJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfcGVyaW9kSW5kZXh9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAzKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24ud2VlaycsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cblxuICAgICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlJZH19XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmVudGl0eS5lbnRpdHktcGlja2VyLmVudGl0eScpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJfZW50aXR5UGlja2VkXCJcbiAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aGEtbG9nYm9va1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGVudHJpZXM9XCJbW2VudHJpZXNdXVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgPjwvaGEtbG9nYm9vaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcblxuICAgICAgLy8gSVNPODYwMSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAgICAgIF9jdXJyZW50RGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIERhdGUuVVRDKHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIF9wZXJpb2RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgX2VudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgZW50cmllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGVQaWNrZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gV2UgYXJlIHVuYWJsZSB0byBwYXJzZSBkYXRlIGJlY2F1c2Ugd2UgdXNlIGludGwgYXBpIHRvIHJlbmRlciBkYXRlXG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLnBhcnNlRGF0ZVwiLCBudWxsKTtcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4uZm9ybWF0RGF0ZVwiLCAoZGF0ZSkgPT5cbiAgICAgIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXRlKF9jdXJyZW50RGF0ZSkge1xuICAgIGlmICghX2N1cnJlbnREYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJ0cyA9IF9jdXJyZW50RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgcGFydHNbMV0gPSBwYXJzZUludChwYXJ0c1sxXSkgLSAxO1xuICAgIHJldHVybiBuZXcgRGF0ZShwYXJ0c1swXSwgcGFydHNbMV0sIHBhcnRzWzJdKS50b0lTT1N0cmluZygpO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSB7XG4gICAgc3dpdGNoIChwZXJpb2RJbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBfZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5fc2V0RW50aXR5SWQoZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJlZnJlc2hMb2dib29rKCkge1xuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaGEtbG9nYm9vay1kYXRhXCIpLnJlZnJlc2hMb2dib29rKCk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtbG9nYm9va1wiLCBIYVBhbmVsTG9nYm9vayk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLXZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtyZXF1aXJlZF0pIFtwYXJ0fj1cImNsZWFyLWJ1dHRvblwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbb3BlbmVkXSkgW3BhcnR+PVwidG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdGV4dC1maWVsZC1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1jYXB0aW9uXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9sZXR0ZXItc3BhY2luZyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImxhYmVsXCJdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLWJ1dHRvbi1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbcGFydH49XCJ0b2RheS1idXR0b25cIl0pIFtwYXJ0fj1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tbW9udGgtY2FsZW5kYXItZGVmYXVsdC10aGVtZVwiPlxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydD1cImRhdGVcIl1bZm9jdXNlZF0sXG4gICAgICBbcGFydD1cImRhdGVcIl1bc2VsZWN0ZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBNUJBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0dBO0FBQ0E7QUFnSEE7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBdkhBO0FBQ0E7QUF3SEE7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE1Q0E7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsT0E7QUFDQTtBQW1PQTs7Ozs7Ozs7Ozs7QUM3UEE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9IQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
