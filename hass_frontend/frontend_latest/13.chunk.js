(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [13],
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

    /***/ "./src/components/ha-combo-box.js":
      /*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
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
        /* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        class HaComboBox extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
          }

          static get properties() {
            return {
              allowCustomValue: Boolean,
              items: {
                type: Object,
                observer: "_itemsChanged",
              },
              _items: Object,
              itemLabelPath: String,
              itemValuePath: String,
              autofocus: Boolean,
              label: String,
              opened: {
                type: Boolean,
                value: false,
                observer: "_openedChanged",
              },
              value: {
                type: String,
                notify: true,
              },
            };
          }

          _openedChanged(newVal) {
            if (!newVal) {
              this._items = this.items;
            }
          }

          _itemsChanged(newVal) {
            if (!this.opened) {
              this._items = newVal;
            }
          }

          _computeToggleIcon(opened) {
            return opened ? "hass:menu-up" : "hass:menu-down";
          }

          _computeItemLabel(item, itemLabelPath) {
            return itemLabelPath ? item[itemLabelPath] : item;
          }

          _fireChanged(ev) {
            ev.stopPropagation();
            this.fire("change");
          }
        }

        customElements.define("ha-combo-box", HaComboBox);

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

    /***/ "./src/components/ha-service-picker.js":
      /*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
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
        /* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-combo-box */ "./src/components/ha-combo-box.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaServicePicker extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
                observer: "_hassChanged",
              },
              _services: Array,
              value: {
                type: String,
                notify: true,
              },
            };
          }

          _hassChanged(hass, oldHass) {
            if (!hass) {
              this._services = [];
              return;
            }

            if (oldHass && hass.services === oldHass.services) {
              return;
            }

            const result = [];
            Object.keys(hass.services)
              .sort()
              .forEach((domain) => {
                const services = Object.keys(hass.services[domain]).sort();

                for (let i = 0; i < services.length; i++) {
                  result.push(`${domain}.${services[i]}`);
                }
              });
            this._services = result;
          }
        }

        customElements.define("ha-service-picker", HaServicePicker);

        /***/
      },

    /***/ "./src/data/entity.ts":
      /*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
      /*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UNAVAILABLE",
          function() {
            return UNAVAILABLE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ENTITY_COMPONENT_DOMAINS",
          function() {
            return ENTITY_COMPONENT_DOMAINS;
          }
        );
        const UNAVAILABLE = "unavailable";
        const ENTITY_COMPONENT_DOMAINS = [
          "air_quality",
          "alarm_control_panel",
          "automation",
          "binary_sensor",
          "calendar",
          "counter",
          "cover",
          "dominos",
          "fan",
          "geo_location",
          "group",
          "history_graph",
          "image_processing",
          "input_boolean",
          "input_datetime",
          "input_number",
          "input_select",
          "input_text",
          "light",
          "lock",
          "mailbox",
          "media_player",
          "person",
          "plant",
          "remember_the_milk",
          "remote",
          "scene",
          "script",
          "sensor",
          "switch",
          "timer",
          "utility_meter",
          "vacuum",
          "weather",
          "wink",
          "zha",
          "zwave",
        ];

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

    /***/ "./src/panels/developer-tools/service/developer-tools-service.js":
      /*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../data/entity */ "./src/data/entity.ts"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js"
        );

        const ERROR_SENTINEL = {};

        class HaPanelDevService extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .ha-form {
          margin-right: 16px;
          max-width: 400px;
        }

        .description {
          margin-top: 24px;
          white-space: pre-wrap;
        }

        .header {
          @apply --paper-font-title;
        }

        .attributes th {
          text-align: left;
        }

        .attributes tr {
          vertical-align: top;
        }

        .attributes tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #eee);
        }

        .attributes tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }

        .attributes td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        pre {
          margin: 0;
        }

        h1 {
          white-space: normal;
        }

        td {
          padding: 4px;
        }

        .error {
          color: var(--google-red-500);
        }
      </style>

      <app-localstorage-document
        key="panel-dev-service-state-domain-service"
        data="{{domainService}}"
      >
      </app-localstorage-document>
      <app-localstorage-document
        key="[[_computeServicedataKey(domainService)]]"
        data="{{serviceData}}"
      >
      </app-localstorage-document>

      <div class="content">
        <p>
          The service dev tool allows you to call any available service in Home
          Assistant.
        </p>

        <div class="ha-form">
          <ha-service-picker
            hass="[[hass]]"
            value="{{domainService}}"
          ></ha-service-picker>
          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">
            <ha-entity-picker
              hass="[[hass]]"
              value="[[_computeEntityValue(parsedJSON)]]"
              on-change="_entityPicked"
              disabled="[[!validJSON]]"
              domain-filter="[[_computeEntityDomainFilter(_domain)]]"
              allow-custom-entity
            ></ha-entity-picker>
          </template>
          <paper-textarea
            always-float-label
            label="Service Data (JSON, optional)"
            value="{{serviceData}}"
            autocapitalize="none"
            autocomplete="off"
            spellcheck="false"
          ></paper-textarea>
          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]"
            >Call Service</mwc-button
          >
          <template is="dom-if" if="[[!validJSON]]">
            <span class="error">Invalid JSON</span>
          </template>
        </div>

        <template is="dom-if" if="[[!domainService]]">
          <h1>Select a service to see the description</h1>
        </template>

        <template is="dom-if" if="[[domainService]]">
          <template is="dom-if" if="[[!_description]]">
            <h1>No description is available</h1>
          </template>
          <template is="dom-if" if="[[_description]]">
            <h3>[[_description]]</h3>

            <table class="attributes">
              <tr>
                <th>Parameter</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
              <template is="dom-if" if="[[!_attributes.length]]">
                <tr>
                  <td colspan="3">This service takes no parameters.</td>
                </tr>
              </template>
              <template is="dom-repeat" items="[[_attributes]]" as="attribute">
                <tr>
                  <td><pre>[[attribute.key]]</pre></td>
                  <td>[[attribute.description]]</td>
                  <td>[[attribute.example]]</td>
                </tr>
              </template>
            </table>
          </template>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              domainService: {
                type: String,
                observer: "_domainServiceChanged",
              },
              _domain: {
                type: String,
                computed: "_computeDomain(domainService)",
              },
              _service: {
                type: String,
                computed: "_computeService(domainService)",
              },
              serviceData: {
                type: String,
                value: "",
              },
              parsedJSON: {
                type: Object,
                computed: "_computeParsedServiceData(serviceData)",
              },
              validJSON: {
                type: Boolean,
                computed: "_computeValidJSON(parsedJSON)",
              },
              _attributes: {
                type: Array,
                computed: "_computeAttributesArray(hass, _domain, _service)",
              },
              _description: {
                type: String,
                computed: "_computeDescription(hass, _domain, _service)",
              },
            };
          }

          _domainServiceChanged() {
            this.serviceData = "";
          }

          _computeAttributesArray(hass, domain, service) {
            const serviceDomains = hass.services;
            if (!(domain in serviceDomains)) return [];
            if (!(service in serviceDomains[domain])) return [];
            const fields = serviceDomains[domain][service].fields;
            return Object.keys(fields).map(function(field) {
              return Object.assign(
                {
                  key: field,
                },
                fields[field]
              );
            });
          }

          _computeDescription(hass, domain, service) {
            const serviceDomains = hass.services;
            if (!(domain in serviceDomains)) return undefined;
            if (!(service in serviceDomains[domain])) return undefined;
            return serviceDomains[domain][service].description;
          }

          _computeServicedataKey(domainService) {
            return `panel-dev-service-state-servicedata.${domainService}`;
          }

          _computeDomain(domainService) {
            return domainService.split(".", 1)[0];
          }

          _computeService(domainService) {
            return domainService.split(".", 2)[1] || null;
          }

          _computeParsedServiceData(serviceData) {
            try {
              return serviceData ? JSON.parse(serviceData) : {};
            } catch (err) {
              return ERROR_SENTINEL;
            }
          }

          _computeValidJSON(parsedJSON) {
            return parsedJSON !== ERROR_SENTINEL;
          }

          _computeHasEntity(attributes) {
            return attributes.some((attr) => attr.key === "entity_id");
          }

          _computeEntityValue(parsedJSON) {
            return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
          }

          _computeEntityDomainFilter(domain) {
            return _data_entity__WEBPACK_IMPORTED_MODULE_4__[
              "ENTITY_COMPONENT_DOMAINS"
            ].includes(domain)
              ? domain
              : null;
          }

          _callService() {
            if (this.parsedJSON === ERROR_SENTINEL) {
              // eslint-disable-next-line
              alert(`Error parsing JSON: ${this.serviceData}`);
            }

            this.hass.callService(this._domain, this._service, this.parsedJSON);
          }

          _entityPicked(ev) {
            this.serviceData = JSON.stringify(
              Object.assign({}, this.parsedJSON, {
                entity_id: ev.target.value,
              }),
              null,
              2
            );
          }
        }

        customElements.define("developer-tools-service", HaPanelDevService);

        /***/
      },

    /***/ "./src/util/app-localstorage-document.js":
      /*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* Forked because it contained an import.meta which webpack doesn't support. */

        /* eslint-disable */

        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        /**
         * app-localstorage-document synchronizes storage between an in-memory
         * value and a location in the browser's localStorage system.
         *
         * localStorage is a simple and widely supported storage API that provides both
         * permanent and session-based storage options. Using app-localstorage-document
         * you can easily integrate localStorage into your app via normal Polymer
         * databinding.
         *
         * app-localstorage-document is the reference implementation of an element
         * that uses `AppStorageBehavior`. Reading its code is a good way to get
         * started writing your own storage element.
         *
         * Example use:
         *
         *     <paper-input value="{{search}}"></paper-input>
         *     <app-localstorage-document key="search" data="{{search}}">
         *     </app-localstorage-document>
         *
         * app-localstorage-document automatically synchronizes changes to the
         * same key across multiple tabs.
         *
         * Only supports storing JSON-serializable values.
         */

        Object(
          _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__[
            "Polymer"
          ]
        )({
          is: "app-localstorage-document",
          behaviors: [
            _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__[
              "AppStorageBehavior"
            ],
          ],
          properties: {
            /**
             * Defines the logical location to store the data.
             *
             * @type{String}
             */
            key: {
              type: String,
              notify: true,
            },

            /**
             * If true, the data will automatically be cleared from storage when
             * the page session ends (i.e. when the user has navigated away from
             * the page).
             */
            sessionOnly: {
              type: Boolean,
              value: false,
            },

            /**
             * Either `window.localStorage` or `window.sessionStorage`, depending on
             * `this.sessionOnly`.
             */
            storage: {
              type: Object,
              computed: "__computeStorage(sessionOnly)",
            },
          },
          observers: ["__storageSourceChanged(storage, key)"],
          attached: function() {
            this.listen(window, "storage", "__onStorage");
            this.listen(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },
          detached: function() {
            this.unlisten(window, "storage", "__onStorage");
            this.unlisten(
              window.top,
              "app-local-storage-changed",
              "__onAppLocalStorageChanged"
            );
          },

          get isNew() {
            return !this.key;
          },

          /**
           * Stores a value at the given key, and if successful, updates this.key.
           *
           * @param {*} key The new key to use.
           * @return {Promise}
           */
          saveValue: function(key) {
            try {
              this.__setStorageValue(
                /*{@type if (key ty){String}}*/
                key,
                this.data
              );
            } catch (e) {
              return Promise.reject(e);
            }

            this.key =
              /** @type {String} */
              key;
            return Promise.resolve();
          },
          reset: function() {
            this.key = null;
            this.data = this.zeroValue;
          },
          destroy: function() {
            try {
              this.storage.removeItem(this.key);
              this.reset();
            } catch (e) {
              return Promise.reject(e);
            }

            return Promise.resolve();
          },
          getStoredValue: function(path) {
            var value;

            if (this.key != null) {
              try {
                value = this.__parseValueFromStorage();

                if (value != null) {
                  value = this.get(path, {
                    data: value,
                  });
                } else {
                  value = undefined;
                }
              } catch (e) {
                return Promise.reject(e);
              }
            }

            return Promise.resolve(value);
          },
          setStoredValue: function(path, value) {
            if (this.key != null) {
              try {
                this.__setStorageValue(this.key, this.data);
              } catch (e) {
                return Promise.reject(e);
              }

              this.fire("app-local-storage-changed", this, {
                node: window.top,
              });
            }

            return Promise.resolve(value);
          },
          __computeStorage: function(sessionOnly) {
            return sessionOnly ? window.sessionStorage : window.localStorage;
          },
          __storageSourceChanged: function(storage, key) {
            this._initializeStoredValue();
          },
          __onStorage: function(event) {
            if (event.key !== this.key || event.storageArea !== this.storage) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", this.__parseValueFromStorage());
            });
          },
          __onAppLocalStorageChanged: function(event) {
            if (
              event.detail === this ||
              event.detail.key !== this.key ||
              event.detail.storage !== this.storage
            ) {
              return;
            }

            this.syncToMemory(function() {
              this.set("data", event.detail.data);
            });
          },
          __parseValueFromStorage: function() {
            try {
              return JSON.parse(this.storage.getItem(this.key));
            } catch (e) {
              console.error("Failed to parse value from storage for", this.key);
            }
          },
          __setStorageValue: function(key, value) {
            if (typeof value === "undefined") value = null;
            this.storage.setItem(key, JSON.stringify(value));
          },
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY29tYm8tYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvc2VydmljZS9kZXZlbG9wZXItdG9vbHMtc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFDb21ib0JveCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW1zPVwiW1tfaXRlbXNdXVwiXG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cIltbaXRlbVZhbHVlUGF0aF1dXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIG9wZW5lZD1cInt7b3BlbmVkfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJbW2FsbG93Q3VzdG9tVmFsdWVdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9maXJlQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1cz1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIltbdmFsdWVdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIXZhbHVlXV1cIlxuICAgICAgICAgICAgPkNsZWFyPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJbW19jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWl0ZW1zLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5Ub2dnbGU8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlOiBCb29sZWFuLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaXRlbXNDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX2l0ZW1zOiBPYmplY3QsXG4gICAgICBpdGVtTGFiZWxQYXRoOiBTdHJpbmcsXG4gICAgICBpdGVtVmFsdWVQYXRoOiBTdHJpbmcsXG4gICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29wZW5lZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgX2l0ZW1zQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG5ld1ZhbDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKSB7XG4gICAgcmV0dXJuIG9wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCI7XG4gIH1cblxuICBfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgcmV0dXJuIGl0ZW1MYWJlbFBhdGggPyBpdGVtW2l0ZW1MYWJlbFBhdGhdIDogaXRlbTtcbiAgfVxuXG4gIF9maXJlQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb21iby1ib3hcIiwgSGFDb21ib0JveCk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtY29tYm8tYm94XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVNlcnZpY2VQaWNrZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY29tYm8tYm94XG4gICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY29tcG9uZW50cy5zZXJ2aWNlLXBpY2tlci5zZXJ2aWNlJyldXVwiXG4gICAgICAgIGl0ZW1zPVwiW1tfc2VydmljZXNdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgYWxsb3ctY3VzdG9tLXZhbHVlPVwiXCJcbiAgICAgID48L2hhLWNvbWJvLWJveD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2hhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX3NlcnZpY2VzOiBBcnJheSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2hhc3NDaGFuZ2VkKGhhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIWhhc3MpIHtcbiAgICAgIHRoaXMuX3NlcnZpY2VzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvbGRIYXNzICYmIGhhc3Muc2VydmljZXMgPT09IG9sZEhhc3Muc2VydmljZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzKVxuICAgICAgLnNvcnQoKVxuICAgICAgLmZvckVhY2goKGRvbWFpbikgPT4ge1xuICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IE9iamVjdC5rZXlzKGhhc3Muc2VydmljZXNbZG9tYWluXSkuc29ydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQucHVzaChgJHtkb21haW59LiR7c2VydmljZXNbaV19YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fc2VydmljZXMgPSByZXN1bHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2VydmljZS1waWNrZXJcIiwgSGFTZXJ2aWNlUGlja2VyKTtcbiIsImV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRSA9IFwidW5hdmFpbGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9DT01QT05FTlRfRE9NQUlOUyA9IFtcbiAgXCJhaXJfcXVhbGl0eVwiLFxuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiYmluYXJ5X3NlbnNvclwiLFxuICBcImNhbGVuZGFyXCIsXG4gIFwiY291bnRlclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZG9taW5vc1wiLFxuICBcImZhblwiLFxuICBcImdlb19sb2NhdGlvblwiLFxuICBcImdyb3VwXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwibGlnaHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWFpbGJveFwiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInBlcnNvblwiLFxuICBcInBsYW50XCIsXG4gIFwicmVtZW1iZXJfdGhlX21pbGtcIixcbiAgXCJyZW1vdGVcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInNlbnNvclwiLFxuICBcInN3aXRjaFwiLFxuICBcInRpbWVyXCIsXG4gIFwidXRpbGl0eV9tZXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndlYXRoZXJcIixcbiAgXCJ3aW5rXCIsXG4gIFwiemhhXCIsXG4gIFwiendhdmVcIixcbl07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiO1xuXG5jb25zdCBFUlJPUl9TRU5USU5FTCA9IHt9O1xuY2xhc3MgSGFQYW5lbERldlNlcnZpY2UgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGEtZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHIge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWJhY2tncm91bmQtY29sb3IsICNlZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYWx0ZXJuYXRpdmUtYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICAgIGtleT1cInBhbmVsLWRldi1zZXJ2aWNlLXN0YXRlLWRvbWFpbi1zZXJ2aWNlXCJcbiAgICAgICAgZGF0YT1cInt7ZG9tYWluU2VydmljZX19XCJcbiAgICAgID5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICAgIGtleT1cIltbX2NvbXB1dGVTZXJ2aWNlZGF0YUtleShkb21haW5TZXJ2aWNlKV1dXCJcbiAgICAgICAgZGF0YT1cInt7c2VydmljZURhdGF9fVwiXG4gICAgICA+XG4gICAgICA8L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBzZXJ2aWNlIGRldiB0b29sIGFsbG93cyB5b3UgdG8gY2FsbCBhbnkgYXZhaWxhYmxlIHNlcnZpY2UgaW4gSG9tZVxuICAgICAgICAgIEFzc2lzdGFudC5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYS1mb3JtXCI+XG4gICAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RvbWFpblNlcnZpY2V9fVwiXG4gICAgICAgICAgPjwvaGEtc2VydmljZS1waWNrZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlSGFzRW50aXR5KF9hdHRyaWJ1dGVzKV1dXCI+XG4gICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIltbX2NvbXB1dGVFbnRpdHlWYWx1ZShwYXJzZWRKU09OKV1dXCJcbiAgICAgICAgICAgICAgb24tY2hhbmdlPVwiX2VudGl0eVBpY2tlZFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shdmFsaWRKU09OXV1cIlxuICAgICAgICAgICAgICBkb21haW4tZmlsdGVyPVwiW1tfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihfZG9tYWluKV1dXCJcbiAgICAgICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICAgICAgYWx3YXlzLWZsb2F0LWxhYmVsXG4gICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2UgRGF0YSAoSlNPTiwgb3B0aW9uYWwpXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tzZXJ2aWNlRGF0YX19XCJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICA+PC9wYXBlci10ZXh0YXJlYT5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiIHJhaXNlZCBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgID5DYWxsIFNlcnZpY2U8L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyF2YWxpZEpTT05dXVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPkludmFsaWQgSlNPTjwvc3Bhbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDxoMT5TZWxlY3QgYSBzZXJ2aWNlIHRvIHNlZSB0aGUgZGVzY3JpcHRpb248L2gxPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkb21haW5TZXJ2aWNlXV1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9kZXNjcmlwdGlvbl1dXCI+XG4gICAgICAgICAgICA8aDE+Tm8gZGVzY3JpcHRpb24gaXMgYXZhaWxhYmxlPC9oMT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGVzY3JpcHRpb25dXVwiPlxuICAgICAgICAgICAgPGgzPltbX2Rlc2NyaXB0aW9uXV08L2gzPlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UGFyYW1ldGVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FeGFtcGxlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfYXR0cmlidXRlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlRoaXMgc2VydmljZSB0YWtlcyBubyBwYXJhbWV0ZXJzLjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfYXR0cmlidXRlc11dXCIgYXM9XCJhdHRyaWJ1dGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHByZT5bW2F0dHJpYnV0ZS5rZXldXTwvcHJlPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZGVzY3JpcHRpb25dXTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZXhhbXBsZV1dPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBkb21haW5TZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2RvbWFpblNlcnZpY2VDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVTZXJ2aWNlKGRvbWFpblNlcnZpY2UpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkSlNPTjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUGFyc2VkU2VydmljZURhdGEoc2VydmljZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICB2YWxpZEpTT046IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTilcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUF0dHJpYnV0ZXNBcnJheShoYXNzLCBfZG9tYWluLCBfc2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRGVzY3JpcHRpb24oaGFzcywgX2RvbWFpbiwgX3NlcnZpY2UpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfZG9tYWluU2VydmljZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZXNBcnJheShoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IGhhc3Muc2VydmljZXM7XG4gICAgaWYgKCEoZG9tYWluIGluIHNlcnZpY2VEb21haW5zKSkgcmV0dXJuIFtdO1xuICAgIGlmICghKHNlcnZpY2UgaW4gc2VydmljZURvbWFpbnNbZG9tYWluXSkpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGZpZWxkcyA9IHNlcnZpY2VEb21haW5zW2RvbWFpbl1bc2VydmljZV0uZmllbGRzO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHMpLm1hcChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBrZXk6IGZpZWxkIH0sIGZpZWxkc1tmaWVsZF0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IGhhc3Muc2VydmljZXM7XG4gICAgaWYgKCEoZG9tYWluIGluIHNlcnZpY2VEb21haW5zKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIShzZXJ2aWNlIGluIHNlcnZpY2VEb21haW5zW2RvbWFpbl0pKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzZXJ2aWNlRG9tYWluc1tkb21haW5dW3NlcnZpY2VdLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgX2NvbXB1dGVTZXJ2aWNlZGF0YUtleShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGBwYW5lbC1kZXYtc2VydmljZS1zdGF0ZS1zZXJ2aWNlZGF0YS4ke2RvbWFpblNlcnZpY2V9YDtcbiAgfVxuXG4gIF9jb21wdXRlRG9tYWluKGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gZG9tYWluU2VydmljZS5zcGxpdChcIi5cIiwgMSlbMF07XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAyKVsxXSB8fCBudWxsO1xuICB9XG5cbiAgX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc2VydmljZURhdGEgPyBKU09OLnBhcnNlKHNlcnZpY2VEYXRhKSA6IHt9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIEVSUk9SX1NFTlRJTkVMO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlVmFsaWRKU09OKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiAhPT0gRVJST1JfU0VOVElORUw7XG4gIH1cblxuICBfY29tcHV0ZUhhc0VudGl0eShhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gYXR0ci5rZXkgPT09IFwiZW50aXR5X2lkXCIpO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlWYWx1ZShwYXJzZWRKU09OKSB7XG4gICAgcmV0dXJuIHBhcnNlZEpTT04gPT09IEVSUk9SX1NFTlRJTkVMID8gXCJcIiA6IHBhcnNlZEpTT04uZW50aXR5X2lkO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlEb21haW5GaWx0ZXIoZG9tYWluKSB7XG4gICAgcmV0dXJuIEVOVElUWV9DT01QT05FTlRfRE9NQUlOUy5pbmNsdWRlcyhkb21haW4pID8gZG9tYWluIDogbnVsbDtcbiAgfVxuXG4gIF9jYWxsU2VydmljZSgpIHtcbiAgICBpZiAodGhpcy5wYXJzZWRKU09OID09PSBFUlJPUl9TRU5USU5FTCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBhbGVydChgRXJyb3IgcGFyc2luZyBKU09OOiAke3RoaXMuc2VydmljZURhdGF9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuX2RvbWFpbiwgdGhpcy5fc2VydmljZSwgdGhpcy5wYXJzZWRKU09OKTtcbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhcnNlZEpTT04sIHtcbiAgICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIG51bGwsXG4gICAgICAyXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtc2VydmljZVwiLCBIYVBhbmVsRGV2U2VydmljZSk7XG4iLCIvKiBGb3JrZWQgYmVjYXVzZSBpdCBjb250YWluZWQgYW4gaW1wb3J0Lm1ldGEgd2hpY2ggd2VicGFjayBkb2Vzbid0IHN1cHBvcnQuICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCB7IEFwcFN0b3JhZ2VCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9hcHAtc3RvcmFnZS9hcHAtc3RvcmFnZS1iZWhhdmlvclwiO1xuaW1wb3J0IHsgUG9seW1lciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeVwiO1xuXG4vKipcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgc3luY2hyb25pemVzIHN0b3JhZ2UgYmV0d2VlbiBhbiBpbi1tZW1vcnlcbiAqIHZhbHVlIGFuZCBhIGxvY2F0aW9uIGluIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlIHN5c3RlbS5cbiAqXG4gKiBsb2NhbFN0b3JhZ2UgaXMgYSBzaW1wbGUgYW5kIHdpZGVseSBzdXBwb3J0ZWQgc3RvcmFnZSBBUEkgdGhhdCBwcm92aWRlcyBib3RoXG4gKiBwZXJtYW5lbnQgYW5kIHNlc3Npb24tYmFzZWQgc3RvcmFnZSBvcHRpb25zLiBVc2luZyBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gKiB5b3UgY2FuIGVhc2lseSBpbnRlZ3JhdGUgbG9jYWxTdG9yYWdlIGludG8geW91ciBhcHAgdmlhIG5vcm1hbCBQb2x5bWVyXG4gKiBkYXRhYmluZGluZy5cbiAqXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGlzIHRoZSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgYW4gZWxlbWVudFxuICogdGhhdCB1c2VzIGBBcHBTdG9yYWdlQmVoYXZpb3JgLiBSZWFkaW5nIGl0cyBjb2RlIGlzIGEgZ29vZCB3YXkgdG8gZ2V0XG4gKiBzdGFydGVkIHdyaXRpbmcgeW91ciBvd24gc3RvcmFnZSBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGUgdXNlOlxuICpcbiAqICAgICA8cGFwZXItaW5wdXQgdmFsdWU9XCJ7e3NlYXJjaH19XCI+PC9wYXBlci1pbnB1dD5cbiAqICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBrZXk9XCJzZWFyY2hcIiBkYXRhPVwie3tzZWFyY2h9fVwiPlxuICogICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAqXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGF1dG9tYXRpY2FsbHkgc3luY2hyb25pemVzIGNoYW5nZXMgdG8gdGhlXG4gKiBzYW1lIGtleSBhY3Jvc3MgbXVsdGlwbGUgdGFicy5cbiAqXG4gKiBPbmx5IHN1cHBvcnRzIHN0b3JpbmcgSlNPTi1zZXJpYWxpemFibGUgdmFsdWVzLlxuICovXG5Qb2x5bWVyKHtcbiAgaXM6IFwiYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiLFxuICBiZWhhdmlvcnM6IFtBcHBTdG9yYWdlQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsb2dpY2FsIGxvY2F0aW9uIHRvIHN0b3JlIHRoZSBkYXRhLlxuICAgICAqXG4gICAgICogQHR5cGV7U3RyaW5nfVxuICAgICAqL1xuICAgIGtleTogeyB0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGRhdGEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNsZWFyZWQgZnJvbSBzdG9yYWdlIHdoZW5cbiAgICAgKiB0aGUgcGFnZSBzZXNzaW9uIGVuZHMgKGkuZS4gd2hlbiB0aGUgdXNlciBoYXMgbmF2aWdhdGVkIGF3YXkgZnJvbVxuICAgICAqIHRoZSBwYWdlKS5cbiAgICAgKi9cbiAgICBzZXNzaW9uT25seTogeyB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UgfSxcblxuICAgIC8qKlxuICAgICAqIEVpdGhlciBgd2luZG93LmxvY2FsU3RvcmFnZWAgb3IgYHdpbmRvdy5zZXNzaW9uU3RvcmFnZWAsIGRlcGVuZGluZyBvblxuICAgICAqIGB0aGlzLnNlc3Npb25Pbmx5YC5cbiAgICAgKi9cbiAgICBzdG9yYWdlOiB7IHR5cGU6IE9iamVjdCwgY29tcHV0ZWQ6IFwiX19jb21wdXRlU3RvcmFnZShzZXNzaW9uT25seSlcIiB9LFxuICB9LFxuXG4gIG9ic2VydmVyczogW1wiX19zdG9yYWdlU291cmNlQ2hhbmdlZChzdG9yYWdlLCBrZXkpXCJdLFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xuICAgIHRoaXMubGlzdGVuKFxuICAgICAgd2luZG93LnRvcCxcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxuICAgICAgXCJfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZFwiXG4gICAgKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51bmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xuICAgIHRoaXMudW5saXN0ZW4oXG4gICAgICB3aW5kb3cudG9wLFxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcbiAgICApO1xuICB9LFxuXG4gIGdldCBpc05ldygpIHtcbiAgICByZXR1cm4gIXRoaXMua2V5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4ga2V5LCBhbmQgaWYgc3VjY2Vzc2Z1bCwgdXBkYXRlcyB0aGlzLmtleS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBrZXkgVGhlIG5ldyBrZXkgdG8gdXNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgc2F2ZVZhbHVlOiBmdW5jdGlvbihrZXkpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fX3NldFN0b3JhZ2VWYWx1ZSgvKntAdHlwZSBpZiAoa2V5IHR5KXtTdHJpbmd9fSovIGtleSwgdGhpcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSAvKiogQHR5cGUge1N0cmluZ30gKi8gKGtleSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnplcm9WYWx1ZTtcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAodGhpcy5rZXkgIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KHBhdGgsIHsgZGF0YTogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKHRoaXMua2V5LCB0aGlzLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlyZShcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIiwgdGhpcywgeyBub2RlOiB3aW5kb3cudG9wIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIF9fY29tcHV0ZVN0b3JhZ2U6IGZ1bmN0aW9uKHNlc3Npb25Pbmx5KSB7XG4gICAgcmV0dXJuIHNlc3Npb25Pbmx5ID8gd2luZG93LnNlc3Npb25TdG9yYWdlIDogd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSxcblxuICBfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkOiBmdW5jdGlvbihzdG9yYWdlLCBrZXkpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplU3RvcmVkVmFsdWUoKTtcbiAgfSxcblxuICBfX29uU3RvcmFnZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSB0aGlzLmtleSB8fCBldmVudC5zdG9yYWdlQXJlYSAhPT0gdGhpcy5zdG9yYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldChcImRhdGFcIiwgdGhpcy5fX3BhcnNlVmFsdWVGcm9tU3RvcmFnZSgpKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5kZXRhaWwgPT09IHRoaXMgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5rZXkgIT09IHRoaXMua2V5IHx8XG4gICAgICBldmVudC5kZXRhaWwuc3RvcmFnZSAhPT0gdGhpcy5zdG9yYWdlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXQoXCJkYXRhXCIsIGV2ZW50LmRldGFpbC5kYXRhKTtcbiAgICB9KTtcbiAgfSxcblxuICBfX3BhcnNlVmFsdWVGcm9tU3RvcmFnZTogZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSB2YWx1ZSBmcm9tIHN0b3JhZ2UgZm9yXCIsIHRoaXMua2V5KTtcbiAgICB9XG4gIH0sXG5cbiAgX19zZXRTdG9yYWdlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB2YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9LFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFoQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekdBO0FBQ0E7QUEwR0E7Ozs7Ozs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoREE7QUFDQTtBQWlEQTs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFqUkE7QUFDQTtBQWtSQTs7Ozs7Ozs7Ozs7O0FDL1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
