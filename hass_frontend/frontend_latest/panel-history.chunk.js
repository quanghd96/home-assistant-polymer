(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-history"],
  {
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

    /***/ "./src/panels/history/ha-panel-history.js":
      /*!************************************************!*\
  !*** ./src/panels/history/ha-panel-history.js ***!
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
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../components/state-history-charts */ "./src/components/state-history-charts.js"
        );
        /* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js"
        );
        /* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js"
        );
        /* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
          _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaPanelHistory extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding: 0 16px 16px;
        }

        vaadin-date-picker {
          margin-right: 16px;
          max-width: 200px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-top: 13px;
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
      </style>

      <ha-state-history-data
        hass="[[hass]]"
        filter-type="[[_filterType]]"
        start-time="[[_computeStartTime(_currentDate)]]"
        end-time="[[endTime]]"
        data="{{stateHistory}}"
        is-loading="{{isLoadingData}}"
      ></ha-state-history-data>
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.history')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.history.showing_entries')]]"
              disabled="[[isLoadingData]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.history.period')]]"
              disabled="[[isLoadingData]]"
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
          </div>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[isLoadingData]]"
            end-time="[[endTime]]"
            no-single
          >
          </state-history-charts>
        </div>
      </app-header-layout>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              narrow: Boolean,
              stateHistory: {
                type: Object,
                value: null,
              },
              _periodIndex: {
                type: Number,
                value: 0,
              },
              isLoadingData: {
                type: Boolean,
                value: false,
              },
              endTime: {
                type: Object,
                computed: "_computeEndTime(_currentDate, _periodIndex)",
              },
              // ISO8601 formatted date string
              _currentDate: {
                type: String,
                value: function() {
                  var value = new Date();
                  var today = new Date(
                    Date.UTC(
                      value.getFullYear(),
                      value.getMonth(),
                      value.getDate()
                    )
                  );
                  return today.toISOString().split("T")[0];
                },
              },
              _filterType: {
                type: String,
                value: "date",
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "_computeRTL(hass)",
              },
            };
          }

          datepickerFocus() {
            this.datePicker.adjustPosition();
          }

          connectedCallback() {
            super.connectedCallback(); // We are unable to parse date because we use intl api to render date

            this.$.picker.set("i18n.parseDate", null);
            this.$.picker.set("i18n.formatDate", (date) =>
              Object(
                _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__[
                  "default"
                ]
              )(new Date(date.year, date.month, date.day), this.hass.language)
            );
          }

          _computeStartTime(_currentDate) {
            if (!_currentDate) return undefined;

            var parts = _currentDate.split("-");

            parts[1] = parseInt(parts[1]) - 1;
            return new Date(parts[0], parts[1], parts[2]);
          }

          _computeEndTime(_currentDate, periodIndex) {
            var startTime = this._computeStartTime(_currentDate);

            var endTime = new Date(startTime);
            endTime.setDate(
              startTime.getDate() + this._computeFilterDays(periodIndex)
            );
            return endTime;
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

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("ha-panel-history", HaPanelHistory);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvaGlzdG9yeS9oYS1wYW5lbC1oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvaGEtZGF0ZS1waWNrZXItc3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxIaXN0b3J5IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFhZGluLWRhdGUtcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc6IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLXN0YXRlLWhpc3RvcnktZGF0YVxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBmaWx0ZXItdHlwZT1cIltbX2ZpbHRlclR5cGVdXVwiXG4gICAgICAgIHN0YXJ0LXRpbWU9XCJbW19jb21wdXRlU3RhcnRUaW1lKF9jdXJyZW50RGF0ZSldXVwiXG4gICAgICAgIGVuZC10aW1lPVwiW1tlbmRUaW1lXV1cIlxuICAgICAgICBkYXRhPVwie3tzdGF0ZUhpc3Rvcnl9fVwiXG4gICAgICAgIGlzLWxvYWRpbmc9XCJ7e2lzTG9hZGluZ0RhdGF9fVwiXG4gICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5oaXN0b3J5JyldXTwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGF5b3V0IGhvcml6b250YWwgd3JhcFwiPlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cInBpY2tlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfY3VycmVudERhdGV9fVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuaGlzdG9yeS5zaG93aW5nX2VudHJpZXMnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ0RhdGFdXVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC92YWFkaW4tZGF0ZS1waWNrZXI+XG5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuaGlzdG9yeS5wZXJpb2QnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ0RhdGFdXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfcGVyaW9kSW5kZXh9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAzKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24ud2VlaycsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydHNcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBoaXN0b3J5LWRhdGE9XCJbW3N0YXRlSGlzdG9yeV1dXCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmctZGF0YT1cIltbaXNMb2FkaW5nRGF0YV1dXCJcbiAgICAgICAgICAgIGVuZC10aW1lPVwiW1tlbmRUaW1lXV1cIlxuICAgICAgICAgICAgbm8tc2luZ2xlXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvc3RhdGUtaGlzdG9yeS1jaGFydHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG5cbiAgICAgIHN0YXRlSGlzdG9yeToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgX3BlcmlvZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmdEYXRhOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVuZFRpbWU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUVuZFRpbWUoX2N1cnJlbnREYXRlLCBfcGVyaW9kSW5kZXgpXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBJU084NjAxIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICAgICAgX2N1cnJlbnREYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLlVUQyh2YWx1ZS5nZXRGdWxsWWVhcigpLCB2YWx1ZS5nZXRNb250aCgpLCB2YWx1ZS5nZXREYXRlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBfZmlsdGVyVHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcImRhdGVcIixcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBkYXRlcGlja2VyRm9jdXMoKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIFdlIGFyZSB1bmFibGUgdG8gcGFyc2UgZGF0ZSBiZWNhdXNlIHdlIHVzZSBpbnRsIGFwaSB0byByZW5kZXIgZGF0ZVxuICAgIHRoaXMuJC5waWNrZXIuc2V0KFwiaTE4bi5wYXJzZURhdGVcIiwgbnVsbCk7XG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLmZvcm1hdERhdGVcIiwgKGRhdGUpID0+XG4gICAgICBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhcnRUaW1lKF9jdXJyZW50RGF0ZSkge1xuICAgIGlmICghX2N1cnJlbnREYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJ0cyA9IF9jdXJyZW50RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgcGFydHNbMV0gPSBwYXJzZUludChwYXJ0c1sxXSkgLSAxO1xuICAgIHJldHVybiBuZXcgRGF0ZShwYXJ0c1swXSwgcGFydHNbMV0sIHBhcnRzWzJdKTtcbiAgfVxuXG4gIF9jb21wdXRlRW5kVGltZShfY3VycmVudERhdGUsIHBlcmlvZEluZGV4KSB7XG4gICAgdmFyIHN0YXJ0VGltZSA9IHRoaXMuX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKTtcbiAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKHN0YXJ0VGltZSk7XG4gICAgZW5kVGltZS5zZXREYXRlKHN0YXJ0VGltZS5nZXREYXRlKCkgKyB0aGlzLl9jb21wdXRlRmlsdGVyRGF5cyhwZXJpb2RJbmRleCkpO1xuICAgIHJldHVybiBlbmRUaW1lO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSB7XG4gICAgc3dpdGNoIChwZXJpb2RJbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtaGlzdG9yeVwiLCBIYVBhbmVsSGlzdG9yeSk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLXZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtyZXF1aXJlZF0pIFtwYXJ0fj1cImNsZWFyLWJ1dHRvblwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbb3BlbmVkXSkgW3BhcnR+PVwidG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdGV4dC1maWVsZC1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1jYXB0aW9uXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9sZXR0ZXItc3BhY2luZyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImxhYmVsXCJdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLWJ1dHRvbi1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbcGFydH49XCJ0b2RheS1idXR0b25cIl0pIFtwYXJ0fj1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tbW9udGgtY2FsZW5kYXItZGVmYXVsdC10aGVtZVwiPlxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydD1cImRhdGVcIl1bZm9jdXNlZF0sXG4gICAgICBbcGFydD1cImRhdGVcIl1bc2VsZWN0ZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQXpDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekxBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvSEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
