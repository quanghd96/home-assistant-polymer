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
          const nameA = Object(
            _compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(entityA);
          const nameB = Object(
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

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaConfigCustomize extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style include="ha-style"></style>

      <app-header-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="_backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title="">
              [[localize('ui.panel.config.customize.caption')]]
            </div>
          </app-toolbar>
        </app-header>

        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header">
              [[localize('ui.panel.config.customize.picker.header')]]
            </span>
            <span slot="introduction">
              [[localize('ui.panel.config.customize.picker.introduction')]]
            </span>
            <ha-entity-config
              hass="[[hass]]"
              label="Entity"
              entities="[[entities]]"
              config="[[entityConfig]]"
            >
            </ha-entity-config>
          </ha-config-section>
        </div>
      </app-header-layout>
    `;
          }

          static get properties() {
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
                  computeSelectCaption: (stateObj) =>
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
                    ")",
                },
              },
            };
          }

          computeClasses(isWide) {
            return isWide ? "content" : "content narrow";
          }

          _backTapped() {
            history.back();
          }

          computeEntities(hass) {
            return Object.keys(hass.states)
              .map((key) => hass.states[key])
              .sort(
                _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__[
                  "default"
                ]
              );
          }
        }

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

        class HaCustomizeAttribute extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="ha-form-style">
        :host {
          display: block;
          position: relative;
          padding-right: 40px;
        }

        .button {
          position: absolute;
          margin-top: -20px;
          top: 50%;
          right: 0;
        }
      </style>
      <div id="wrapper" class="form-group"></div>
      <paper-icon-button
        class="button"
        icon="[[getIcon(item.secondary)]]"
        on-click="tapButton"
      ></paper-icon-button>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notify: true,
                observer: "itemObserver",
              },
            };
          }

          tapButton() {
            if (this.item.secondary) {
              this.item = Object.assign({}, this.item, {
                secondary: false,
              });
            } else {
              this.item = Object.assign({}, this.item, {
                closed: true,
              });
            }
          }

          getIcon(secondary) {
            return secondary ? "hass:pencil" : "hass:close";
          }

          itemObserver(item) {
            const wrapper = this.$.wrapper;
            const tag = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ].TYPE_TO_TAG[item.type].toUpperCase();
            let child;

            if (wrapper.lastChild && wrapper.lastChild.tagName === tag) {
              child = wrapper.lastChild;
            } else {
              if (wrapper.lastChild) {
                wrapper.removeChild(wrapper.lastChild);
              } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
              // become a defined Custom Element. Polymer does that in some later pass.

              this.$.child = child = document.createElement(tag.toLowerCase());
              child.className = "form-control";
              child.addEventListener("item-changed", () => {
                this.item = Object.assign({}, child.item);
              });
            }

            child.setProperties({
              item: this.item,
            });

            if (child.parentNode === null) {
              wrapper.appendChild(child);
            }
          }
        }

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

        class HaFormCustomizeAttributes extends Object(
          _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__[
            "MutableData"
          ]
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
        [hidden] {
          display: none;
        }
      </style>
      <template is="dom-repeat" items="{{attributes}}" mutable-data="">
        <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">
        </ha-customize-attribute>
      </template>
    `;
          }

          static get properties() {
            return {
              attributes: {
                type: Array,
                notify: true,
              },
            };
          }
        }

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

        class HaFormCustomize extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex ha-style ha-form-style">
        .warning {
          color: red;
        }

        .attributes-text {
          padding-left: 20px;
        }
      </style>
      <template
        is="dom-if"
        if="[[computeShowWarning(localConfig, globalConfig)]]"
      >
        <div class="warning">
          It seems that your configuration.yaml doesn't properly include
          customize.yaml<br />
          Changes made here won't affect your configuration.
        </div>
      </template>
      <template is="dom-if" if="[[hasLocalAttributes]]">
        <h4 class="attributes-text">
          The following attributes are already set in customize.yaml<br />
        </h4>
        <ha-form-customize-attributes
          attributes="{{localAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasGlobalAttributes]]">
        <h4 class="attributes-text">
          The following attributes are customized from outside of
          customize.yaml<br />
          Possibly via a domain, a glob or a different include.
        </h4>
        <ha-form-customize-attributes
          attributes="{{globalAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasExistingAttributes]]">
        <h4 class="attributes-text">
          The following attributes of the entity are set programatically.<br />
          You can override them if you like.
        </h4>
        <ha-form-customize-attributes
          attributes="{{existingAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <template is="dom-if" if="[[hasNewAttributes]]">
        <h4 class="attributes-text">
          The following attributes weren't set. Set them if you like.
        </h4>
        <ha-form-customize-attributes
          attributes="{{newAttributes}}"
        ></ha-form-customize-attributes>
      </template>
      <div class="form-group">
        <paper-dropdown-menu
          label="Pick an attribute to override"
          class="flex"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            selected="{{selectedNewAttribute}}"
          >
            <template
              is="dom-repeat"
              items="[[newAttributesOptions]]"
              as="option"
            >
              <paper-item>[[option]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
          }

          static get properties() {
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
                computed: "computeGlobalAttributes(localConfig, globalConfig)",
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
          }

          static get observers() {
            return [
              "attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)",
            ];
          }

          _initOpenObject(key, value, secondary, config) {
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
          }

          loadEntity(entity) {
            this.entity = entity;
            return this.hass
              .callApi("GET", "config/customize/config/" + entity.entity_id)
              .then((data) => {
                this.localConfig = data.local;
                this.globalConfig = data.global;
                this.newAttributes = [];
              });
          }

          saveEntity() {
            const data = {};
            const attrs = this.localAttributes.concat(
              this.globalAttributes,
              this.existingAttributes,
              this.newAttributes
            );
            attrs.forEach((attr) => {
              if (
                attr.closed ||
                attr.secondary ||
                !attr.attribute ||
                !attr.value
              )
                return;
              const value =
                attr.type === "json" ? JSON.parse(attr.value) : attr.value;
              if (!value) return;
              data[attr.attribute] = value;
            });
            const objectId = this.entity.entity_id;
            return this.hass.callApi(
              "POST",
              "config/customize/config/" + objectId,
              data
            );
          }

          _computeSingleAttribute(key, value, secondary) {
            const config = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
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
          }

          _computeAttributes(config, keys, secondary) {
            return keys.map((key) =>
              this._computeSingleAttribute(key, config[key], secondary)
            );
          }

          computeLocalAttributes(localConfig) {
            if (!localConfig) return [];
            const localKeys = Object.keys(localConfig);

            const result = this._computeAttributes(
              localConfig,
              localKeys,
              false
            );

            return result;
          }

          computeGlobalAttributes(localConfig, globalConfig) {
            if (!localConfig || !globalConfig) return [];
            const localKeys = Object.keys(localConfig);
            const globalKeys = Object.keys(globalConfig).filter(
              (key) => !localKeys.includes(key)
            );
            return this._computeAttributes(globalConfig, globalKeys, true);
          }

          computeExistingAttributes(localConfig, globalConfig, entity) {
            if (!localConfig || !globalConfig || !entity) return [];
            const localKeys = Object.keys(localConfig);
            const globalKeys = Object.keys(globalConfig);
            const entityKeys = Object.keys(entity.attributes).filter(
              (key) => !localKeys.includes(key) && !globalKeys.includes(key)
            );
            return this._computeAttributes(entity.attributes, entityKeys, true);
          }

          computeShowWarning(localConfig, globalConfig) {
            if (!localConfig || !globalConfig) return false;
            return Object.keys(localConfig).some(
              (key) =>
                JSON.stringify(globalConfig[key]) !==
                JSON.stringify(localConfig[key])
            );
          }

          filterFromAttributes(attributes) {
            return (key) =>
              !attributes ||
              attributes.every((attr) => attr.attribute !== key || attr.closed);
          }

          getNewAttributesOptions(
            localAttributes,
            globalAttributes,
            existingAttributes,
            newAttributes
          ) {
            const knownKeys = Object.keys(
              _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"]
                .LOGIC_STATE_ATTRIBUTES
            )
              .filter((key) => {
                const conf =
                  _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ].LOGIC_STATE_ATTRIBUTES[key];
                return (
                  conf &&
                  (!conf.domains ||
                    !this.entity ||
                    conf.domains.includes(
                      Object(
                        _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ]
                      )(this.entity)
                    ))
                );
              })
              .filter(this.filterFromAttributes(localAttributes))
              .filter(this.filterFromAttributes(globalAttributes))
              .filter(this.filterFromAttributes(existingAttributes))
              .filter(this.filterFromAttributes(newAttributes));
            return knownKeys.sort().concat("Other");
          }

          selectedNewAttributeObserver(selected) {
            if (selected < 0) return;
            const option = this.newAttributesOptions[selected];

            if (selected === this.newAttributesOptions.length - 1) {
              // The "Other" option.
              const attr = this._initOpenObject(
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

              this.push("newAttributes", attr);
              this.selectedNewAttribute = -1;
              return;
            }

            let result = this.localAttributes.findIndex(
              (attr) => attr.attribute === option
            );

            if (result >= 0) {
              this.set("localAttributes." + result + ".closed", false);
              this.selectedNewAttribute = -1;
              return;
            }

            result = this.globalAttributes.findIndex(
              (attr) => attr.attribute === option
            );

            if (result >= 0) {
              this.set("globalAttributes." + result + ".closed", false);
              this.selectedNewAttribute = -1;
              return;
            }

            result = this.existingAttributes.findIndex(
              (attr) => attr.attribute === option
            );

            if (result >= 0) {
              this.set("existingAttributes." + result + ".closed", false);
              this.selectedNewAttribute = -1;
              return;
            }

            result = this.newAttributes.findIndex(
              (attr) => attr.attribute === option
            );

            if (result >= 0) {
              this.set("newAttributes." + result + ".closed", false);
              this.selectedNewAttribute = -1;
              return;
            }

            const attr = this._computeSingleAttribute(
              option,
              "",
              false
              /* secondary */
            );

            this.push("newAttributes", attr);
            this.selectedNewAttribute = -1;
          }

          attributesObserver() {
            this.hasLocalAttributes =
              this.localAttributes &&
              this.localAttributes.some((attr) => !attr.closed);
            this.hasGlobalAttributes =
              this.globalAttributes &&
              this.globalAttributes.some((attr) => !attr.closed);
            this.hasExistingAttributes =
              this.existingAttributes &&
              this.existingAttributes.some((attr) => !attr.closed);
            this.hasNewAttributes =
              this.newAttributes &&
              this.newAttributes.some((attr) => !attr.closed);
            this.newAttributesOptions = this.getNewAttributesOptions(
              this.localAttributes,
              this.globalAttributes,
              this.existingAttributes,
              this.newAttributes
            );
          }
        }

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

        /*
         * @appliesMixin EventsMixin
         */

        class HaCustomizeArray extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"]
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
        paper-dropdown-menu {
          margin: -9px 0;
        }
      </style>
      <paper-dropdown-menu
        label="[[item.description]]"
        disabled="[[item.secondary]]"
        selected-item-label="{{item.value}}"
        dynamic-align=""
      >
        <paper-listbox
          slot="dropdown-content"
          selected="[[computeSelected(item)]]"
        >
          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">
            <paper-item>[[option]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notifies: true,
              },
            };
          }

          getOptions(item) {
            const domain = item.domain || "*";
            const options = item.options[domain] || item.options["*"];

            if (!options) {
              this.item.type = "string";
              this.fire("item-changed");
              return [];
            }

            return options.sort();
          }

          computeSelected(item) {
            const options = this.getOptions(item);
            return options.indexOf(item.value);
          }
        }

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

        class HaCustomizeBoolean extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">
        [[item.description]]
      </paper-checkbox>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notifies: true,
              },
            };
          }
        }

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

        class HaCustomizeIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        .icon-image {
          border: 1px solid grey;
          padding: 8px;
          margin-right: 20px;
          margin-top: 10px;
        }
      </style>
      <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>
      <paper-input
        disabled="[[item.secondary]]"
        label="icon"
        value="{{item.value}}"
      >
      </paper-input>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notifies: true,
              },
            };
          }
        }

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

        class HaCustomizeKeyValue extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          @apply --layout-horizontal;
        }
        paper-input {
          @apply --layout-flex;
        }
        .key {
          padding-right: 20px;
        }
      </style>
      <paper-input
        disabled="[[item.secondary]]"
        class="key"
        label="Attribute name"
        value="{{item.attribute}}"
      >
      </paper-input>
      <paper-input
        disabled="[[item.secondary]]"
        label="Attribute value"
        value="{{item.value}}"
      >
      </paper-input>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notifies: true,
              },
            };
          }
        }

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

        class HaCustomizeString extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <paper-input
        disabled="[[item.secondary]]"
        label="[[getLabel(item)]]"
        value="{{item.value}}"
      >
      </paper-input>
    `;
          }

          static get properties() {
            return {
              item: {
                type: Object,
                notifies: true,
              },
            };
          }

          getLabel(item) {
            return (
              item.description +
              (item.type === "json" ? " (JSON formatted)" : "")
            );
          }
        }

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

        class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computeContentClasses(isWide) {
            var classes = "content ";
            return isWide ? classes : classes + "narrow";
          }

          computeClasses(isWide) {
            var classes = "together layout ";
            return classes + (isWide ? "horizontal" : "vertical narrow");
          }
        }

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

        class HaEntityConfig extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        ha-card {
          direction: ltr;
        }

        .device-picker {
          @apply --layout-horizontal;
          padding-bottom: 24px;
        }

        .form-placeholder {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 96px;
        }

        [hidden]: {
          display: none;
        }

        .card-actions {
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
      </style>
      <ha-card>
        <div class="card-content">
          <div class="device-picker">
            <paper-dropdown-menu
              label="[[label]]"
              class="flex"
              disabled="[[!entities.length]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{selectedEntity}}"
              >
                <template is="dom-repeat" items="[[entities]]" as="state">
                  <paper-item>[[computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="form-container">
            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">
              <div class="form-placeholder">
                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">
                  No entities found! :-(
                </template>

                <template is="dom-if" if="[[computeShowSpinner(formState)]]">
                  <paper-spinner active="" alt="[[formState]]"></paper-spinner>
                  [[formState]]
                </template>
              </div>
            </template>

            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>
          </div>
        </div>
        <div class="card-actions">
          <mwc-button
            on-click="saveEntity"
            disabled="[[computeShowPlaceholder(formState)]]"
            >SAVE</mwc-button
          >
          <template is="dom-if" if="[[allowDelete]]">
            <mwc-button
              class="warning"
              on-click="deleteEntity"
              disabled="[[computeShowPlaceholder(formState)]]"
              >DELETE</mwc-button
            >
          </template>
        </div>
      </ha-card>
    `;
          }

          static get properties() {
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
          }

          connectedCallback() {
            super.connectedCallback();
            this.formEl = document.createElement(this.config.component);
            this.formEl.hass = this.hass;
            this.$.form.appendChild(this.formEl);
            this.entityChanged(this.selectedEntity);
          }

          computeSelectCaption(stateObj) {
            return this.config.computeSelectCaption
              ? this.config.computeSelectCaption(stateObj)
              : Object(
                  _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ]
                )(stateObj);
          }

          computeShowNoDevices(formState) {
            return formState === "no-devices";
          }

          computeShowSpinner(formState) {
            return formState === "loading" || formState === "saving";
          }

          computeShowPlaceholder(formState) {
            return formState !== "editing";
          }

          computeShowForm(formState) {
            return formState === "editing";
          }

          hassChanged(hass) {
            if (this.formEl) {
              this.formEl.hass = hass;
            }
          }

          entitiesChanged(entities, oldEntities) {
            if (entities.length === 0) {
              this.formState = "no-devices";
              return;
            }

            if (!oldEntities) {
              this.selectedEntity = 0;
              return;
            }

            var oldEntityId = oldEntities[this.selectedEntity].entity_id;
            var newIndex = entities.findIndex(function(ent) {
              return ent.entity_id === oldEntityId;
            });

            if (newIndex === -1) {
              this.selectedEntity = 0;
            } else if (newIndex !== this.selectedEntity) {
              // Entity moved index
              this.selectedEntity = newIndex;
            }
          }

          entityChanged(index) {
            if (!this.entities || !this.formEl) return;
            var entity = this.entities[index];
            if (!entity) return;
            this.formState = "loading";
            var el = this;
            this.formEl.loadEntity(entity).then(function() {
              el.formState = "editing";
            });
          }

          saveEntity() {
            this.formState = "saving";
            var el = this;
            this.formEl.saveEntity().then(function() {
              el.formState = "editing";
            });
          }
        }

        customElements.define("ha-entity-config", HaEntityConfig);

        /***/
      },

    /***/ "./src/panels/config/ha-form-style.js":
      /*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        const documentContainer = document.createElement("template");
        documentContainer.setAttribute("style", "display: none;");
        documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
        document.head.appendChild(documentContainer.content);

        /***/
      },

    /***/ "./src/util/hass-attributes-util.js":
      /*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        const hassAttributeUtil = {};
        hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
          binary_sensor: [
            "battery",
            "cold",
            "connectivity",
            "door",
            "garage_door",
            "gas",
            "heat",
            "light",
            "lock",
            "moisture",
            "motion",
            "moving",
            "occupancy",
            "opening",
            "plug",
            "power",
            "presence",
            "problem",
            "safety",
            "smoke",
            "sound",
            "vibration",
            "window",
          ],
          cover: [
            "awning",
            "blind",
            "curtain",
            "damper",
            "door",
            "garage",
            "shade",
            "shutter",
            "window",
          ],
          sensor: [
            "battery",
            "humidity",
            "illuminance",
            "temperature",
            "pressure",
            "power",
            "signal_strength",
          ],
          switch: ["switch", "outlet"],
        };
        hassAttributeUtil.UNKNOWN_TYPE = "json";
        hassAttributeUtil.ADD_TYPE = "key-value";
        hassAttributeUtil.TYPE_TO_TAG = {
          string: "ha-customize-string",
          json: "ha-customize-string",
          icon: "ha-customize-icon",
          boolean: "ha-customize-boolean",
          array: "ha-customize-array",
          "key-value": "ha-customize-key-value",
        }; // Attributes here serve dual purpose:
        // 1) Any key of this object won't be shown in more-info window.
        // 2) Any key which has value other than undefined will appear in customization
        //    config according to its value.

        hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
          entity_picture: undefined,
          friendly_name: {
            type: "string",
            description: "Name",
          },
          icon: {
            type: "icon",
          },
          emulated_hue: {
            type: "boolean",
            domains: ["emulated_hue"],
          },
          emulated_hue_name: {
            type: "string",
            domains: ["emulated_hue"],
          },
          haaska_hidden: undefined,
          haaska_name: undefined,
          homebridge_hidden: {
            type: "boolean",
          },
          homebridge_name: {
            type: "string",
          },
          supported_features: undefined,
          attribution: undefined,
          custom_ui_more_info: {
            type: "string",
          },
          custom_ui_state_card: {
            type: "string",
          },
          device_class: {
            type: "array",
            options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
            description: "Device class",
            domains: ["binary_sensor", "cover", "sensor", "switch"],
          },
          hidden: {
            type: "boolean",
            description: "Hide from UI",
          },
          assumed_state: {
            type: "boolean",
            domains: [
              "switch",
              "light",
              "cover",
              "climate",
              "fan",
              "group",
              "water_heater",
            ],
          },
          initial_state: {
            type: "string",
            domains: ["automation"],
          },
          unit_of_measurement: {
            type: "string",
          },
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = hassAttributeUtil;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWN1c3RvbWl6ZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWNvbmZpZy1jdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWN1c3RvbWl6ZS1hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL2hhLWZvcm0tY3VzdG9taXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY3VzdG9taXplL3R5cGVzL2hhLWN1c3RvbWl6ZS1ib29sZWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2N1c3RvbWl6ZS90eXBlcy9oYS1jdXN0b21pemUtaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLWtleS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jdXN0b21pemUvdHlwZXMvaGEtY3VzdG9taXplLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1lbnRpdHktY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWZvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqOiBIYXNzRW50aXR5KSB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsIi8qKlxuICogU29ydCBmdW5jdGlvbiB0byBoZWxwIHNvcnQgc3RhdGVzIGJ5IG5hbWVcbiAqXG4gKiBVc2FnZTpcbiAqICAgY29uc3Qgc3RhdGVzID0gW3N0YXRlMSwgc3RhdGUyXVxuICogICBzdGF0ZXMuc29ydChzdGF0ZXNTb3J0QnlOYW1lKTtcbiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0U3RhdGVzQnlOYW1lKFxuICBlbnRpdHlBOiBIYXNzRW50aXR5LFxuICBlbnRpdHlCOiBIYXNzRW50aXR5XG4pIHtcbiAgY29uc3QgbmFtZUEgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUEpO1xuICBjb25zdCBuYW1lQiA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5Qik7XG4gIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uL2hhLWVudGl0eS1jb25maWdcIjtcbmltcG9ydCBcIi4vaGEtZm9ybS1jdXN0b21pemVcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgc29ydEJ5TmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21pemUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cblxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPVwiXCI+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD1cIlwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2JhY2tUYXBwZWRcIlxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT1cIlwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLmNhcHRpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY3VzdG9taXplLnBpY2tlci5oZWFkZXInKV1dXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jdXN0b21pemUucGlja2VyLmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktY29uZmlnXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50aXR5XCJcbiAgICAgICAgICAgICAgZW50aXRpZXM9XCJbW2VudGl0aWVzXV1cIlxuICAgICAgICAgICAgICBjb25maWc9XCJbW2VudGl0eUNvbmZpZ11dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaGEtZW50aXR5LWNvbmZpZz5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0aWVzKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlDb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGNvbXBvbmVudDogXCJoYS1mb3JtLWN1c3RvbWl6ZVwiLFxuICAgICAgICAgIGNvbXB1dGVTZWxlY3RDYXB0aW9uOiAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSArXG4gICAgICAgICAgICBcIilcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHJldHVybiBpc1dpZGUgPyBcImNvbnRlbnRcIiA6IFwiY29udGVudCBuYXJyb3dcIjtcbiAgfVxuXG4gIF9iYWNrVGFwcGVkKCkge1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUVudGl0aWVzKGhhc3MpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgICAubWFwKChrZXkpID0+IGhhc3Muc3RhdGVzW2tleV0pXG4gICAgICAuc29ydChzb3J0QnlOYW1lKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLCBIYUNvbmZpZ0N1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGhhc3NBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsXCI7XG5pbXBvcnQgXCIuLi9oYS1mb3JtLXN0eWxlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1hcnJheVwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtYm9vbGVhblwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUtaWNvblwiO1xuaW1wb3J0IFwiLi90eXBlcy9oYS1jdXN0b21pemUta2V5LXZhbHVlXCI7XG5pbXBvcnQgXCIuL3R5cGVzL2hhLWN1c3RvbWl6ZS1zdHJpbmdcIjtcblxuY2xhc3MgSGFDdXN0b21pemVBdHRyaWJ1dGUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgIGljb249XCJbW2dldEljb24oaXRlbS5zZWNvbmRhcnkpXV1cIlxuICAgICAgICBvbi1jbGljaz1cInRhcEJ1dHRvblwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJpdGVtT2JzZXJ2ZXJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRhcEJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5pdGVtLnNlY29uZGFyeSkge1xuICAgICAgdGhpcy5pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtLCB7IHNlY29uZGFyeTogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbSwgeyBjbG9zZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SWNvbihzZWNvbmRhcnkpIHtcbiAgICByZXR1cm4gc2Vjb25kYXJ5ID8gXCJoYXNzOnBlbmNpbFwiIDogXCJoYXNzOmNsb3NlXCI7XG4gIH1cblxuICBpdGVtT2JzZXJ2ZXIoaXRlbSkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiQud3JhcHBlcjtcbiAgICBjb25zdCB0YWcgPSBoYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBR1tpdGVtLnR5cGVdLnRvVXBwZXJDYXNlKCk7XG4gICAgbGV0IGNoaWxkO1xuICAgIGlmICh3cmFwcGVyLmxhc3RDaGlsZCAmJiB3cmFwcGVyLmxhc3RDaGlsZC50YWdOYW1lID09PSB0YWcpIHtcbiAgICAgIGNoaWxkID0gd3JhcHBlci5sYXN0Q2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh3cmFwcGVyLmxhc3RDaGlsZCkge1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgICAgdGhpcy4kLmNoaWxkID0gY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGNoaWxkLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG4gICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiaXRlbS1jaGFuZ2VkXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5pdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgY2hpbGQuaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2hpbGQuc2V0UHJvcGVydGllcyh7IGl0ZW06IHRoaXMuaXRlbSB9KTtcbiAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUtYXR0cmlidXRlXCIsIEhhQ3VzdG9taXplQXR0cmlidXRlKTtcbiIsImltcG9ydCB7IE11dGFibGVEYXRhIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9tdXRhYmxlLWRhdGFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtY3VzdG9taXplLWF0dHJpYnV0ZVwiO1xuXG5jbGFzcyBIYUZvcm1DdXN0b21pemVBdHRyaWJ1dGVzIGV4dGVuZHMgTXV0YWJsZURhdGEoUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJ7e2F0dHJpYnV0ZXN9fVwiIG11dGFibGUtZGF0YT1cIlwiPlxuICAgICAgICA8aGEtY3VzdG9taXplLWF0dHJpYnV0ZSBpdGVtPVwie3tpdGVtfX1cIiBoaWRkZW4kPVwiW1tpdGVtLmNsb3NlZF1dXCI+XG4gICAgICAgIDwvaGEtY3VzdG9taXplLWF0dHJpYnV0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1wiLFxuICBIYUZvcm1DdXN0b21pemVBdHRyaWJ1dGVzXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGhhc3NBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsXCI7XG5pbXBvcnQgXCIuL2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5jbGFzcyBIYUZvcm1DdXN0b21pemUgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZSBoYS1mb3JtLXN0eWxlXCI+XG4gICAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgaWY9XCJbW2NvbXB1dGVTaG93V2FybmluZyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndhcm5pbmdcIj5cbiAgICAgICAgICBJdCBzZWVtcyB0aGF0IHlvdXIgY29uZmlndXJhdGlvbi55YW1sIGRvZXNuJ3QgcHJvcGVybHkgaW5jbHVkZVxuICAgICAgICAgIGN1c3RvbWl6ZS55YW1sPGJyIC8+XG4gICAgICAgICAgQ2hhbmdlcyBtYWRlIGhlcmUgd29uJ3QgYWZmZWN0IHlvdXIgY29uZmlndXJhdGlvbi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0xvY2FsQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBhcmUgYWxyZWFkeSBzZXQgaW4gY3VzdG9taXplLnlhbWw8YnIgLz5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tsb2NhbEF0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0dsb2JhbEF0dHJpYnV0ZXNdXVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJhdHRyaWJ1dGVzLXRleHRcIj5cbiAgICAgICAgICBUaGUgZm9sbG93aW5nIGF0dHJpYnV0ZXMgYXJlIGN1c3RvbWl6ZWQgZnJvbSBvdXRzaWRlIG9mXG4gICAgICAgICAgY3VzdG9taXplLnlhbWw8YnIgLz5cbiAgICAgICAgICBQb3NzaWJseSB2aWEgYSBkb21haW4sIGEgZ2xvYiBvciBhIGRpZmZlcmVudCBpbmNsdWRlLlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e2dsb2JhbEF0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc0V4aXN0aW5nQXR0cmlidXRlc11dXCI+XG4gICAgICAgIDxoNCBjbGFzcz1cImF0dHJpYnV0ZXMtdGV4dFwiPlxuICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBvZiB0aGUgZW50aXR5IGFyZSBzZXQgcHJvZ3JhbWF0aWNhbGx5LjxiciAvPlxuICAgICAgICAgIFlvdSBjYW4gb3ZlcnJpZGUgdGhlbSBpZiB5b3UgbGlrZS5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGhhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRyaWJ1dGVzPVwie3tleGlzdGluZ0F0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hhc05ld0F0dHJpYnV0ZXNdXVwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJhdHRyaWJ1dGVzLXRleHRcIj5cbiAgICAgICAgICBUaGUgZm9sbG93aW5nIGF0dHJpYnV0ZXMgd2VyZW4ndCBzZXQuIFNldCB0aGVtIGlmIHlvdSBsaWtlLlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aGEtZm9ybS1jdXN0b21pemUtYXR0cmlidXRlc1xuICAgICAgICAgIGF0dHJpYnV0ZXM9XCJ7e25ld0F0dHJpYnV0ZXN9fVwiXG4gICAgICAgID48L2hhLWZvcm0tY3VzdG9taXplLWF0dHJpYnV0ZXM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBsYWJlbD1cIlBpY2sgYW4gYXR0cmlidXRlIHRvIG92ZXJyaWRlXCJcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZE5ld0F0dHJpYnV0ZX19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgaXRlbXM9XCJbW25ld0F0dHJpYnV0ZXNPcHRpb25zXV1cIlxuICAgICAgICAgICAgICBhcz1cIm9wdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbb3B0aW9uXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHk6IE9iamVjdCxcblxuICAgICAgbG9jYWxBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlTG9jYWxBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnKVwiLFxuICAgICAgfSxcbiAgICAgIGhhc0xvY2FsQXR0cmlidXRlczogQm9vbGVhbixcblxuICAgICAgZ2xvYmFsQXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUdsb2JhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZylcIixcbiAgICAgIH0sXG4gICAgICBoYXNHbG9iYWxBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBleGlzdGluZ0F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOlxuICAgICAgICAgIFwiY29tcHV0ZUV4aXN0aW5nQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnLCBlbnRpdHkpXCIsXG4gICAgICB9LFxuICAgICAgaGFzRXhpc3RpbmdBdHRyaWJ1dGVzOiBCb29sZWFuLFxuXG4gICAgICBuZXdBdHRyaWJ1dGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuICAgICAgaGFzTmV3QXR0cmlidXRlczogQm9vbGVhbixcblxuICAgICAgbmV3QXR0cmlidXRlc09wdGlvbnM6IEFycmF5LFxuICAgICAgc2VsZWN0ZWROZXdBdHRyaWJ1dGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcInNlbGVjdGVkTmV3QXR0cmlidXRlT2JzZXJ2ZXJcIixcbiAgICAgIH0sXG5cbiAgICAgIGxvY2FsQ29uZmlnOiBPYmplY3QsXG4gICAgICBnbG9iYWxDb25maWc6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiYXR0cmlidXRlc09ic2VydmVyKGxvY2FsQXR0cmlidXRlcy4qLCBnbG9iYWxBdHRyaWJ1dGVzLiosIGV4aXN0aW5nQXR0cmlidXRlcy4qLCBuZXdBdHRyaWJ1dGVzLiopXCIsXG4gICAgXTtcbiAgfVxuXG4gIF9pbml0T3Blbk9iamVjdChrZXksIHZhbHVlLCBzZWNvbmRhcnksIGNvbmZpZykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBhdHRyaWJ1dGU6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjbG9zZWQ6IGZhbHNlLFxuICAgICAgICBkb21haW46IGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSksXG4gICAgICAgIHNlY29uZGFyeTogc2Vjb25kYXJ5LFxuICAgICAgICBkZXNjcmlwdGlvbjoga2V5LFxuICAgICAgfSxcbiAgICAgIGNvbmZpZ1xuICAgICk7XG4gIH1cblxuICBsb2FkRW50aXR5KGVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgIHJldHVybiB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwiR0VUXCIsIFwiY29uZmlnL2N1c3RvbWl6ZS9jb25maWcvXCIgKyBlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbENvbmZpZyA9IGRhdGEubG9jYWw7XG4gICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWw7XG4gICAgICAgIHRoaXMubmV3QXR0cmlidXRlcyA9IFtdO1xuICAgICAgfSk7XG4gIH1cblxuICBzYXZlRW50aXR5KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMubG9jYWxBdHRyaWJ1dGVzLmNvbmNhdChcbiAgICAgIHRoaXMuZ2xvYmFsQXR0cmlidXRlcyxcbiAgICAgIHRoaXMuZXhpc3RpbmdBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzXG4gICAgKTtcbiAgICBhdHRycy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoYXR0ci5jbG9zZWQgfHwgYXR0ci5zZWNvbmRhcnkgfHwgIWF0dHIuYXR0cmlidXRlIHx8ICFhdHRyLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudHlwZSA9PT0gXCJqc29uXCIgPyBKU09OLnBhcnNlKGF0dHIudmFsdWUpIDogYXR0ci52YWx1ZTtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgIGRhdGFbYXR0ci5hdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvYmplY3RJZCA9IHRoaXMuZW50aXR5LmVudGl0eV9pZDtcbiAgICByZXR1cm4gdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIlBPU1RcIixcbiAgICAgIFwiY29uZmlnL2N1c3RvbWl6ZS9jb25maWcvXCIgKyBvYmplY3RJZCxcbiAgICAgIGRhdGFcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgY29uc3QgY29uZmlnID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldIHx8IHtcbiAgICAgIHR5cGU6IGhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChcbiAgICAgIGtleSxcbiAgICAgIGNvbmZpZy50eXBlID09PSBcImpzb25cIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLFxuICAgICAgc2Vjb25kYXJ5LFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlcyhjb25maWcsIGtleXMsIHNlY29uZGFyeSkge1xuICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PlxuICAgICAgdGhpcy5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIGNvbmZpZ1trZXldLCBzZWNvbmRhcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVMb2NhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnKSByZXR1cm4gW107XG4gICAgY29uc3QgbG9jYWxLZXlzID0gT2JqZWN0LmtleXMobG9jYWxDb25maWcpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGVzKGxvY2FsQ29uZmlnLCBsb2NhbEtleXMsIGZhbHNlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29tcHV0ZUdsb2JhbEF0dHJpYnV0ZXMobG9jYWxDb25maWcsIGdsb2JhbENvbmZpZykge1xuICAgIGlmICghbG9jYWxDb25maWcgfHwgIWdsb2JhbENvbmZpZykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKS5maWx0ZXIoXG4gICAgICAoa2V5KSA9PiAhbG9jYWxLZXlzLmluY2x1ZGVzKGtleSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9jb21wdXRlQXR0cmlidXRlcyhnbG9iYWxDb25maWcsIGdsb2JhbEtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZUV4aXN0aW5nQXR0cmlidXRlcyhsb2NhbENvbmZpZywgZ2xvYmFsQ29uZmlnLCBlbnRpdHkpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcgfHwgIWVudGl0eSkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxvY2FsS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsQ29uZmlnKTtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gT2JqZWN0LmtleXMoZ2xvYmFsQ29uZmlnKTtcbiAgICBjb25zdCBlbnRpdHlLZXlzID0gT2JqZWN0LmtleXMoZW50aXR5LmF0dHJpYnV0ZXMpLmZpbHRlcihcbiAgICAgIChrZXkpID0+ICFsb2NhbEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZ2xvYmFsS2V5cy5pbmNsdWRlcyhrZXkpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZXMoZW50aXR5LmF0dHJpYnV0ZXMsIGVudGl0eUtleXMsIHRydWUpO1xuICB9XG5cbiAgY29tcHV0ZVNob3dXYXJuaW5nKGxvY2FsQ29uZmlnLCBnbG9iYWxDb25maWcpIHtcbiAgICBpZiAoIWxvY2FsQ29uZmlnIHx8ICFnbG9iYWxDb25maWcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxDb25maWcpLnNvbWUoXG4gICAgICAoa2V5KSA9PlxuICAgICAgICBKU09OLnN0cmluZ2lmeShnbG9iYWxDb25maWdba2V5XSkgIT09IEpTT04uc3RyaW5naWZ5KGxvY2FsQ29uZmlnW2tleV0pXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckZyb21BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gKGtleSkgPT5cbiAgICAgICFhdHRyaWJ1dGVzIHx8XG4gICAgICBhdHRyaWJ1dGVzLmV2ZXJ5KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSAhPT0ga2V5IHx8IGF0dHIuY2xvc2VkKTtcbiAgfVxuXG4gIGdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgIGxvY2FsQXR0cmlidXRlcyxcbiAgICBnbG9iYWxBdHRyaWJ1dGVzLFxuICAgIGV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICBuZXdBdHRyaWJ1dGVzXG4gICkge1xuICAgIGNvbnN0IGtub3duS2V5cyA9IE9iamVjdC5rZXlzKGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpXG4gICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgY29uZiA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjb25mICYmXG4gICAgICAgICAgKCFjb25mLmRvbWFpbnMgfHxcbiAgICAgICAgICAgICF0aGlzLmVudGl0eSB8fFxuICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhsb2NhbEF0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGV4aXN0aW5nQXR0cmlidXRlcykpXG4gICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobmV3QXR0cmlidXRlcykpO1xuICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdChcIk90aGVyXCIpO1xuICB9XG5cbiAgc2VsZWN0ZWROZXdBdHRyaWJ1dGVPYnNlcnZlcihzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCA8IDApIHJldHVybjtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLm5ld0F0dHJpYnV0ZXNPcHRpb25zW3NlbGVjdGVkXTtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gVGhlIFwiT3RoZXJcIiBvcHRpb24uXG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5faW5pdE9wZW5PYmplY3QoXCJcIiwgXCJcIiwgZmFsc2UgLyogc2Vjb25kYXJ5ICovLCB7XG4gICAgICAgIHR5cGU6IGhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnB1c2goXCJuZXdBdHRyaWJ1dGVzXCIsIGF0dHIpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5sb2NhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJsb2NhbEF0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJnbG9iYWxBdHRyaWJ1dGVzLlwiICsgcmVzdWx0ICsgXCIuY2xvc2VkXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdBdHRyaWJ1dGUgPSAtMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0ID0gdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuZmluZEluZGV4KFxuICAgICAgKGF0dHIpID0+IGF0dHIuYXR0cmlidXRlID09PSBvcHRpb25cbiAgICApO1xuICAgIGlmIChyZXN1bHQgPj0gMCkge1xuICAgICAgdGhpcy5zZXQoXCJleGlzdGluZ0F0dHJpYnV0ZXMuXCIgKyByZXN1bHQgKyBcIi5jbG9zZWRcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RlZE5ld0F0dHJpYnV0ZSA9IC0xO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bHQgPSB0aGlzLm5ld0F0dHJpYnV0ZXMuZmluZEluZGV4KChhdHRyKSA9PiBhdHRyLmF0dHJpYnV0ZSA9PT0gb3B0aW9uKTtcbiAgICBpZiAocmVzdWx0ID49IDApIHtcbiAgICAgIHRoaXMuc2V0KFwibmV3QXR0cmlidXRlcy5cIiArIHJlc3VsdCArIFwiLmNsb3NlZFwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKFxuICAgICAgb3B0aW9uLFxuICAgICAgXCJcIixcbiAgICAgIGZhbHNlIC8qIHNlY29uZGFyeSAqL1xuICAgICk7XG4gICAgdGhpcy5wdXNoKFwibmV3QXR0cmlidXRlc1wiLCBhdHRyKTtcbiAgICB0aGlzLnNlbGVjdGVkTmV3QXR0cmlidXRlID0gLTE7XG4gIH1cblxuICBhdHRyaWJ1dGVzT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5oYXNMb2NhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMgJiYgdGhpcy5sb2NhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0dsb2JhbEF0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5nbG9iYWxBdHRyaWJ1dGVzICYmXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc0V4aXN0aW5nQXR0cmlidXRlcyA9XG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyAmJlxuICAgICAgdGhpcy5leGlzdGluZ0F0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gIWF0dHIuY2xvc2VkKTtcbiAgICB0aGlzLmhhc05ld0F0dHJpYnV0ZXMgPVxuICAgICAgdGhpcy5uZXdBdHRyaWJ1dGVzICYmIHRoaXMubmV3QXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiAhYXR0ci5jbG9zZWQpO1xuICAgIHRoaXMubmV3QXR0cmlidXRlc09wdGlvbnMgPSB0aGlzLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgdGhpcy5sb2NhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmdsb2JhbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLmV4aXN0aW5nQXR0cmlidXRlcyxcbiAgICAgIHRoaXMubmV3QXR0cmlidXRlc1xuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWZvcm0tY3VzdG9taXplXCIsIEhhRm9ybUN1c3RvbWl6ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ3VzdG9taXplQXJyYXkgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIGxhYmVsPVwiW1tpdGVtLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbaXRlbS5zZWNvbmRhcnldXVwiXG4gICAgICAgIHNlbGVjdGVkLWl0ZW0tbGFiZWw9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY29tcHV0ZVNlbGVjdGVkKGl0ZW0pXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tnZXRPcHRpb25zKGl0ZW0pXV1cIiBhcz1cIm9wdGlvblwiPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tvcHRpb25dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0T3B0aW9ucyhpdGVtKSB7XG4gICAgY29uc3QgZG9tYWluID0gaXRlbS5kb21haW4gfHwgXCIqXCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGl0ZW0ub3B0aW9uc1tkb21haW5dIHx8IGl0ZW0ub3B0aW9uc1tcIipcIl07XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aGlzLml0ZW0udHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICB0aGlzLmZpcmUoXCJpdGVtLWNoYW5nZWRcIik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLnNvcnQoKTtcbiAgfVxuXG4gIGNvbXB1dGVTZWxlY3RlZChpdGVtKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhpdGVtKTtcbiAgICByZXR1cm4gb3B0aW9ucy5pbmRleE9mKGl0ZW0udmFsdWUpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUtYXJyYXlcIiwgSGFDdXN0b21pemVBcnJheSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDdXN0b21pemVCb29sZWFuIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWNoZWNrYm94IGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCIgY2hlY2tlZD1cInt7aXRlbS52YWx1ZX19XCI+XG4gICAgICAgIFtbaXRlbS5kZXNjcmlwdGlvbl1dXG4gICAgICA8L3BhcGVyLWNoZWNrYm94PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIiwgSGFDdXN0b21pemVCb29sZWFuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZUljb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aXJvbi1pY29uIGNsYXNzPVwiaWNvbi1pbWFnZVwiIGljb249XCJbW2l0ZW0udmFsdWVdXVwiPjwvaXJvbi1pY29uPlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJpY29uXCJcbiAgICAgICAgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZmllczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLWljb25cIiwgSGFDdXN0b21pemVJY29uKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUN1c3RvbWl6ZUtleVZhbHVlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5rZXkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2l0ZW0uc2Vjb25kYXJ5XV1cIlxuICAgICAgICBjbGFzcz1cImtleVwiXG4gICAgICAgIGxhYmVsPVwiQXR0cmlidXRlIG5hbWVcIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS5hdHRyaWJ1dGV9fVwiXG4gICAgICA+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJBdHRyaWJ1dGUgdmFsdWVcIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsIEhhQ3VzdG9taXplS2V5VmFsdWUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ3VzdG9taXplU3RyaW5nIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLnNlY29uZGFyeV1dXCJcbiAgICAgICAgbGFiZWw9XCJbW2dldExhYmVsKGl0ZW0pXV1cIlxuICAgICAgICB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcbiAgICAgID5cbiAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmaWVzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TGFiZWwoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmRlc2NyaXB0aW9uICsgKGl0ZW0udHlwZSA9PT0gXCJqc29uXCIgPyBcIiAoSlNPTiBmb3JtYXR0ZWQpXCIgOiBcIlwiKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLCBIYUN1c3RvbWl6ZVN0cmluZyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jbGFzcyBIYUVudGl0eUNvbmZpZyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tcGxhY2Vob2xkZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXToge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIWVudGl0aWVzLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkRW50aXR5fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlU2hvd1BsYWNlaG9sZGVyKGZvcm1TdGF0ZSldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjb21wdXRlU2hvd05vRGV2aWNlcyhmb3JtU3RhdGUpXV1cIj5cbiAgICAgICAgICAgICAgICAgIE5vIGVudGl0aWVzIGZvdW5kISA6LShcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NvbXB1dGVTaG93U3Bpbm5lcihmb3JtU3RhdGUpXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiIGFsdD1cIltbZm9ybVN0YXRlXV1cIj48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICBbW2Zvcm1TdGF0ZV1dXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFjb21wdXRlU2hvd0Zvcm0oZm9ybVN0YXRlKV1dXCIgaWQ9XCJmb3JtXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIG9uLWNsaWNrPVwic2F2ZUVudGl0eVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpXV1cIlxuICAgICAgICAgICAgPlNBVkU8L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2FsbG93RGVsZXRlXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiZGVsZXRlRW50aXR5XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVTaG93UGxhY2Vob2xkZXIoZm9ybVN0YXRlKV1dXCJcbiAgICAgICAgICAgICAgPkRFTEVURTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJEZXZpY2VcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBvYnNlcnZlcjogXCJlbnRpdGllc0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGFsbG93RGVsZXRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJlbnRpdHlDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmb3JtU3RhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvLyBuby1kZXZpY2VzLCBsb2FkaW5nLCBzYXZpbmcsIGVkaXRpbmdcbiAgICAgICAgdmFsdWU6IFwibm8tZGV2aWNlc1wiLFxuICAgICAgfSxcblxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5mb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuY29uZmlnLmNvbXBvbmVudCk7XG4gICAgdGhpcy5mb3JtRWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICB0aGlzLiQuZm9ybS5hcHBlbmRDaGlsZCh0aGlzLmZvcm1FbCk7XG4gICAgdGhpcy5lbnRpdHlDaGFuZ2VkKHRoaXMuc2VsZWN0ZWRFbnRpdHkpO1xuICB9XG5cbiAgY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY29tcHV0ZVNlbGVjdENhcHRpb25cbiAgICAgID8gdGhpcy5jb25maWcuY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopXG4gICAgICA6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVNob3dOb0RldmljZXMoZm9ybVN0YXRlKSB7XG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJuby1kZXZpY2VzXCI7XG4gIH1cblxuICBjb21wdXRlU2hvd1NwaW5uZXIoZm9ybVN0YXRlKSB7XG4gICAgcmV0dXJuIGZvcm1TdGF0ZSA9PT0gXCJsb2FkaW5nXCIgfHwgZm9ybVN0YXRlID09PSBcInNhdmluZ1wiO1xuICB9XG5cbiAgY29tcHV0ZVNob3dQbGFjZWhvbGRlcihmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlICE9PSBcImVkaXRpbmdcIjtcbiAgfVxuXG4gIGNvbXB1dGVTaG93Rm9ybShmb3JtU3RhdGUpIHtcbiAgICByZXR1cm4gZm9ybVN0YXRlID09PSBcImVkaXRpbmdcIjtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKGhhc3MpIHtcbiAgICBpZiAodGhpcy5mb3JtRWwpIHtcbiAgICAgIHRoaXMuZm9ybUVsLmhhc3MgPSBoYXNzO1xuICAgIH1cbiAgfVxuXG4gIGVudGl0aWVzQ2hhbmdlZChlbnRpdGllcywgb2xkRW50aXRpZXMpIHtcbiAgICBpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmZvcm1TdGF0ZSA9IFwibm8tZGV2aWNlc1wiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW9sZEVudGl0aWVzKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2xkRW50aXR5SWQgPSBvbGRFbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWQ7XG5cbiAgICB2YXIgbmV3SW5kZXggPSBlbnRpdGllcy5maW5kSW5kZXgoZnVuY3Rpb24oZW50KSB7XG4gICAgICByZXR1cm4gZW50LmVudGl0eV9pZCA9PT0gb2xkRW50aXR5SWQ7XG4gICAgfSk7XG5cbiAgICBpZiAobmV3SW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gMDtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkRW50aXR5KSB7XG4gICAgICAvLyBFbnRpdHkgbW92ZWQgaW5kZXhcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBuZXdJbmRleDtcbiAgICB9XG4gIH1cblxuICBlbnRpdHlDaGFuZ2VkKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmVudGl0aWVzIHx8ICF0aGlzLmZvcm1FbCkgcmV0dXJuO1xuICAgIHZhciBlbnRpdHkgPSB0aGlzLmVudGl0aWVzW2luZGV4XTtcbiAgICBpZiAoIWVudGl0eSkgcmV0dXJuO1xuXG4gICAgdGhpcy5mb3JtU3RhdGUgPSBcImxvYWRpbmdcIjtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHRoaXMuZm9ybUVsLmxvYWRFbnRpdHkoZW50aXR5KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgZWwuZm9ybVN0YXRlID0gXCJlZGl0aW5nXCI7XG4gICAgfSk7XG4gIH1cblxuICBzYXZlRW50aXR5KCkge1xuICAgIHRoaXMuZm9ybVN0YXRlID0gXCJzYXZpbmdcIjtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHRoaXMuZm9ybUVsLnNhdmVFbnRpdHkoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgZWwuZm9ybVN0YXRlID0gXCJlZGl0aW5nXCI7XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LWNvbmZpZ1wiLCBIYUVudGl0eUNvbmZpZyk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWZvcm0tc3R5bGVcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LTI7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAudmVydGljYWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudS5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW46IC05cHggMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgXSxcbiAgc3dpdGNoOiBbXCJzd2l0Y2hcIiwgXCJvdXRsZXRcIl0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBcImpzb25cIjtcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGpzb246IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBpY29uOiBcImhhLWN1c3RvbWl6ZS1pY29uXCIsXG4gIGJvb2xlYW46IFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIixcbiAgYXJyYXk6IFwiaGEtY3VzdG9taXplLWFycmF5XCIsXG4gIFwia2V5LXZhbHVlXCI6IFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiB9LFxuICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2aWNlIGNsYXNzXCIsXG4gICAgZG9tYWluczogW1wiYmluYXJ5X3NlbnNvclwiLCBcImNvdmVyXCIsIFwic2Vuc29yXCIsIFwic3dpdGNoXCJdLFxuICB9LFxuICBoaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIsIGRlc2NyaXB0aW9uOiBcIkhpZGUgZnJvbSBVSVwiIH0sXG4gIGFzc3VtZWRfc3RhdGU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXG4gICAgICBcInN3aXRjaFwiLFxuICAgICAgXCJsaWdodFwiLFxuICAgICAgXCJjb3ZlclwiLFxuICAgICAgXCJjbGltYXRlXCIsXG4gICAgICBcImZhblwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgICBdLFxuICB9LFxuICBpbml0aWFsX3N0YXRlOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJhdXRvbWF0aW9uXCJdLFxuICB9LFxuICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBUUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBVEE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQTNFQTtBQUNBO0FBMkVBOzs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2RUE7QUFDQTtBQXVFQTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBdkJBO0FBQ0E7QUF1QkE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQU1BO0FBQ0E7QUF6VUE7QUFDQTtBQXlVQTs7Ozs7Ozs7Ozs7O0FDclZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFDQTtBQWtEQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFqQkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQWhDQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUF0Q0E7QUFDQTtBQXNDQTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMUZBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFqQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExTUE7QUFDQTtBQTJNQTs7Ozs7Ozs7Ozs7QUN2TkE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZCQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFFQTtBQUNBO0FBeUJBO0FBV0E7QUFTQTtBQTlDQTtBQWlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBM0NBO0FBOENBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
