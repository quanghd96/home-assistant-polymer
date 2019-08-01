(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-automation~panel-config-script"],
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

    /***/ "./src/common/entity/has_location.ts":
      /*!*******************************************!*\
  !*** ./src/common/entity/has_location.ts ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return hasLocation;
          }
        );
        function hasLocation(stateObj) {
          return (
            "latitude" in stateObj.attributes &&
            "longitude" in stateObj.attributes
          );
        }

        /***/
      },

    /***/ "./src/common/preact/event.ts":
      /*!************************************!*\
  !*** ./src/common/preact/event.ts ***!
  \************************************/
      /*! exports provided: onChangeEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "onChangeEvent",
          function() {
            return onChangeEvent;
          }
        );
        function onChangeEvent(prop, ev) {
          const origData = this.props[prop];

          if (ev.target.value === origData[ev.target.name]) {
            return;
          }

          const data = Object.assign({}, origData);

          if (ev.target.value) {
            data[ev.target.name] = ev.target.value;
          } else {
            delete data[ev.target.name];
          }

          this.props.onChange(this.props.index, data);
        }

        /***/
      },

    /***/ "./src/common/preact/unmount.ts":
      /*!**************************************!*\
  !*** ./src/common/preact/unmount.ts ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return unmount;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );

        function unmount(mountEl) {
          Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(
            // @ts-ignore
            () => null,
            mountEl
          );
        }

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

    /***/ "./src/components/ha-textarea.js":
      /*!***************************************!*\
  !*** ./src/components/ha-textarea.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /*
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/

        class HaTextarea extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea label="[[label]]" value="{{value}}"></paper-textarea>
    `;
          }

          static get properties() {
            return {
              label: String,
              value: {
                type: String,
                notify: true,
              },
            };
          }
        }

        customElements.define("ha-textarea", HaTextarea);

        /***/
      },

    /***/ "./src/layouts/ha-app-layout.js":
      /*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        /*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/

        /*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

        class HaAppLayout extends customElements.get("app-header-layout") {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
          }
        }

        customElements.define("ha-app-layout", HaAppLayout);

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

    /***/ "./src/panels/config/js/condition/condition_edit.js":
      /*!**********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_edit.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ConditionRow;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./numeric_state */ "./src/panels/config/js/condition/numeric_state.js"
        );
        /* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./state */ "./src/panels/config/js/condition/state.js"
        );
        /* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./sun */ "./src/panels/config/js/condition/sun.js"
        );
        /* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./template */ "./src/panels/config/js/condition/template.js"
        );
        /* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./time */ "./src/panels/config/js/condition/time.js"
        );
        /* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./zone */ "./src/panels/config/js/condition/zone.js"
        );

        const TYPES = {
          state: _state__WEBPACK_IMPORTED_MODULE_5__["default"],
          numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_4__["default"],
          sun: _sun__WEBPACK_IMPORTED_MODULE_6__["default"],
          template: _template__WEBPACK_IMPORTED_MODULE_7__["default"],
          time: _time__WEBPACK_IMPORTED_MODULE_8__["default"],
          zone: _zone__WEBPACK_IMPORTED_MODULE_9__["default"],
        };
        const OPTIONS = Object.keys(TYPES).sort();
        class ConditionRow extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.typeChanged = this.typeChanged.bind(this);
          }

          typeChanged(ev) {
            const type = ev.target.selectedItem.attributes.condition.value;

            if (type !== this.props.condition.condition) {
              this.props.onChange(
                this.props.index,
                Object.assign(
                  {
                    condition: type,
                  },
                  TYPES[type].defaultConfig
                )
              );
            }
          }

          render({ index, condition, onChange, hass, localize }) {
            const Comp = TYPES[condition.condition];
            const selected = OPTIONS.indexOf(condition.condition);

            if (!Comp) {
              return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                null,
                localize(
                  "ui.panel.config.automation.editor.conditions.unsupported_condition",
                  "condition",
                  condition.condition
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "pre",
                  null,
                  JSON.stringify(condition, null, 2)
                )
              );
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-dropdown-menu-light",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.conditions.type_select"
                  ),
                  "no-animations": true,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-listbox",
                  {
                    slot: "dropdown-content",
                    selected: selected,
                    "oniron-select": this.typeChanged,
                  },
                  OPTIONS.map((opt) =>
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-item",
                      {
                        condition: opt,
                      },
                      localize(
                        `ui.panel.config.automation.editor.conditions.type.${opt}.label`
                      )
                    )
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
                index: index,
                condition: condition,
                onChange: onChange,
                hass: hass,
                localize: localize,
              })
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/condition/numeric_state.js":
      /*!*********************************************************!*\
  !*** ./src/panels/config/js/condition/numeric_state.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return NumericStateCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class NumericStateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "condition");
            this.entityPicked = this.entityPicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.condition, {
                entity_id: ev.target.value,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ condition, hass, localize }) {
            const { value_template, entity_id, below, above } = condition;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.numeric_state.above"
                ),
                name: "above",
                value: above,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.numeric_state.below"
                ),
                name: "below",
                value: below,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.numeric_state.value_template"
                ),
                name: "value_template",
                value: value_template,
                "onvalue-changed": this.onChange,
                dir: "ltr",
              })
            );
          }
        }
        NumericStateCondition.defaultConfig = {
          entity_id: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/condition/state.js":
      /*!*************************************************!*\
  !*** ./src/panels/config/js/condition/state.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return StateCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class StateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__[
              "onChangeEvent"
            ].bind(this, "condition");
            this.entityPicked = this.entityPicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.condition, {
                entity_id: ev.target.value,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ condition, hass, localize }) {
            const { entity_id, state } = condition;
            const cndFor = condition.for;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.state.state"
                ),
                name: "state",
                value: state,
                "onvalue-changed": this.onChange,
              }),
              cndFor &&
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "pre",
                  null,
                  "For: ",
                  JSON.stringify(cndFor, null, 2)
                )
            );
          }
        }
        StateCondition.defaultConfig = {
          entity_id: "",
          state: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/condition/sun.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/condition/sun.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return SunCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js"
        );
        /* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class SunCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "condition");
            this.afterPicked = this.radioGroupPicked.bind(this, "after");
            this.beforePicked = this.radioGroupPicked.bind(this, "before");
          }

          radioGroupPicked(key, ev) {
            const condition = Object.assign({}, this.props.condition);

            if (ev.target.selected) {
              condition[key] = ev.target.selected;
            } else {
              delete condition[key];
            }

            this.props.onChange(this.props.index, condition);
          }

          render({ condition, localize }) {
            /* eslint-disable camelcase */
            const { after, after_offset, before, before_offset } = condition;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "beforelabel",
                },
                localize(
                  "ui.panel.config.automation.editor.conditions.type.sun.before"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  "allow-empty-selection": true,
                  selected: before,
                  "aria-labelledby": "beforelabel",
                  "onpaper-radio-group-changed": this.beforePicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunrise",
                  },
                  localize(
                    "ui.panel.config.automation.editor.conditions.type.sun.sunrise"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunset",
                  },
                  localize(
                    "ui.panel.config.automation.editor.conditions.type.sun.sunset"
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.sun.before_offset"
                ),
                name: "before_offset",
                value: before_offset,
                "onvalue-changed": this.onChange,
                disabled: before === undefined,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "afterlabel",
                },
                localize(
                  "ui.panel.config.automation.editor.conditions.type.sun.after"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  "allow-empty-selection": true,
                  selected: after,
                  "aria-labelledby": "afterlabel",
                  "onpaper-radio-group-changed": this.afterPicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunrise",
                  },
                  localize(
                    "ui.panel.config.automation.editor.conditions.type.sun.sunrise"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunset",
                  },
                  localize(
                    "ui.panel.config.automation.editor.conditions.type.sun.sunset"
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.sun.after_offset"
                ),
                name: "after_offset",
                value: after_offset,
                "onvalue-changed": this.onChange,
                disabled: after === undefined,
              })
            );
          }
        }
        SunCondition.defaultConfig = {};

        /***/
      },

    /***/ "./src/panels/config/js/condition/template.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/js/condition/template.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TemplateCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class TemplateCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "condition");
          }

          render({ condition, localize }) {
            /* eslint-disable camelcase */
            const { value_template } = condition;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.template.value_template"
                ),
                name: "value_template",
                value: value_template,
                "onvalue-changed": this.onChange,
                dir: "ltr",
              })
            );
          }
        }
        TemplateCondition.defaultConfig = {
          value_template: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/condition/time.js":
      /*!************************************************!*\
  !*** ./src/panels/config/js/condition/time.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TimeCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class TimeCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "condition");
          }
          /* eslint-disable camelcase */

          render({ condition, localize }) {
            const { after, before } = condition;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.time.after"
                ),
                name: "after",
                value: after,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.conditions.type.time.before"
                ),
                name: "before",
                value: before,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        TimeCondition.defaultConfig = {};

        /***/
      },

    /***/ "./src/panels/config/js/condition/zone.js":
      /*!************************************************!*\
  !*** ./src/panels/config/js/condition/zone.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ZoneCondition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );
        /* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );

        function zoneAndLocationFilter(stateObj) {
          return (
            Object(
              _common_entity_has_location__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ]
            )(stateObj) &&
            Object(
              _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(stateObj) !== "zone"
          );
        }

        class ZoneCondition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "condition");
            this.entityPicked = this.entityPicked.bind(this);
            this.zonePicked = this.zonePicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.condition, {
                entity_id: ev.target.value,
              })
            );
          }

          zonePicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.condition, {
                zone: ev.target.value,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ condition, hass, localize }) {
            const { entity_id, zone } = condition;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.conditions.type.zone.entity"
                  ),
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                  entityFilter: zoneAndLocationFilter,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.conditions.type.zone.zone"
                  ),
                  value: zone,
                  onChange: this.zonePicked,
                  hass: hass,
                  allowCustomEntity: true,
                  domainFilter: "zone",
                }
              )
            );
          }
        }
        ZoneCondition.defaultConfig = {
          entity_id: "",
          zone: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/json_textarea.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/json_textarea.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return JSONTextArea;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );

        class JSONTextArea extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor(props) {
            super(props);
            this.state.isValid = true;
            this.state.value = JSON.stringify(props.value || {}, null, 2);
            this.onChange = this.onChange.bind(this);
          }

          onChange(ev) {
            const value = ev.target.value;
            let parsed;
            let isValid;

            try {
              parsed = JSON.parse(value);
              isValid = true;
            } catch (err) {
              // Invalid JSON
              isValid = false;
            }

            this.setState({
              value,
              isValid,
            });

            if (isValid) {
              this.props.onChange(parsed);
            }
          }

          componentWillReceiveProps({ value }) {
            if (value === this.props.value) return;
            this.setState({
              value: JSON.stringify(value, null, 2),
              isValid: true,
            });
          }

          render({ label }, { value, isValid }) {
            const style = {
              minWidth: 300,
              width: "100%",
            };

            if (!isValid) {
              style.border = "1px solid red";
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "ha-textarea",
              {
                label: label,
                value: value,
                style: style,
                "onvalue-changed": this.onChange,
                dir: "ltr",
              }
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/script/action_edit.js":
      /*!****************************************************!*\
  !*** ./src/panels/config/js/script/action_edit.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Action;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./call_service */ "./src/panels/config/js/script/call_service.js"
        );
        /* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./condition */ "./src/panels/config/js/script/condition.js"
        );
        /* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./delay */ "./src/panels/config/js/script/delay.js"
        );
        /* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./event */ "./src/panels/config/js/script/event.tsx"
        );
        /* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./wait */ "./src/panels/config/js/script/wait.js"
        );

        const TYPES = {
          service: _call_service__WEBPACK_IMPORTED_MODULE_4__["default"],
          delay: _delay__WEBPACK_IMPORTED_MODULE_6__["default"],
          wait_template: _wait__WEBPACK_IMPORTED_MODULE_8__["default"],
          condition: _condition__WEBPACK_IMPORTED_MODULE_5__["default"],
          event: _event__WEBPACK_IMPORTED_MODULE_7__["default"],
        };
        const OPTIONS = Object.keys(TYPES).sort();

        function getType(action) {
          const keys = Object.keys(TYPES);

          for (let i = 0; i < keys.length; i++) {
            if (keys[i] in action) {
              return keys[i];
            }
          }

          return null;
        }

        class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
          constructor() {
            super();
            this.typeChanged = this.typeChanged.bind(this);
          }

          typeChanged(ev) {
            const newType = ev.target.selectedItem.attributes.action.value;
            const oldType = getType(this.props.action);

            if (oldType !== newType) {
              this.props.onChange(
                this.props.index,
                TYPES[newType].defaultConfig
              );
            }
          }

          render({ index, action, onChange, hass, localize }) {
            const type = getType(action);
            const Comp = type && TYPES[type];
            const selected = OPTIONS.indexOf(type);

            if (!Comp) {
              return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                null,
                localize(
                  "ui.panel.config.automation.editor.actions.unsupported_action",
                  "action",
                  type
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "pre",
                  null,
                  JSON.stringify(action, null, 2)
                )
              );
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-dropdown-menu-light",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.actions.type_select"
                  ),
                  "no-animations": true,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-listbox",
                  {
                    slot: "dropdown-content",
                    selected: selected,
                    "oniron-select": this.typeChanged,
                  },
                  OPTIONS.map((opt) =>
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-item",
                      {
                        action: opt,
                      },
                      localize(
                        `ui.panel.config.automation.editor.actions.type.${opt}.label`
                      )
                    )
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
                index: index,
                action: action,
                onChange: onChange,
                hass: hass,
                localize: localize,
              })
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/script/action_row.js":
      /*!***************************************************!*\
  !*** ./src/panels/config/js/script/action_row.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Action;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _action_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./action_edit */ "./src/panels/config/js/script/action_edit.js"
        );

        class Action extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
          constructor() {
            super();
            this.onDelete = this.onDelete.bind(this);
          }

          onDelete() {
            // eslint-disable-next-line
            if (
              confirm(
                this.props.localize(
                  "ui.panel.config.automation.editor.actions.delete_confirm"
                )
              )
            ) {
              this.props.onChange(this.props.index, null);
            }
          }

          render(props) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "ha-card",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                {
                  class: "card-content",
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-menu",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "paper-menu-button",
                    {
                      "no-animations": true,
                      "horizontal-align": "right",
                      "horizontal-offset": "-5",
                      "vertical-offset": "-5",
                    },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-icon-button",
                      {
                        icon: "hass:dots-vertical",
                        slot: "dropdown-trigger",
                      }
                    ),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-listbox",
                      {
                        slot: "dropdown-content",
                      },
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          disabled: true,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.actions.duplicate"
                        )
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          onTap: this.onDelete,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.actions.delete"
                        )
                      )
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _action_edit__WEBPACK_IMPORTED_MODULE_6__["default"],
                  props
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/script/call_service.js":
      /*!*****************************************************!*\
  !*** ./src/panels/config/js/script/call_service.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return CallServiceAction;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../components/ha-service-picker */ "./src/components/ha-service-picker.js"
        );
        /* harmony import */ var _json_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../json_textarea */ "./src/panels/config/js/json_textarea.js"
        );

        class CallServiceAction extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.serviceChanged = this.serviceChanged.bind(this);
            this.serviceDataChanged = this.serviceDataChanged.bind(this);
          }

          serviceChanged(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.action, {
                service: ev.target.value,
              })
            );
          }

          serviceDataChanged(data) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.action, {
                data,
              })
            );
          }

          render({ action, hass, localize }) {
            const { service, data } = action;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-service-picker",
                {
                  hass: hass,
                  value: service,
                  onChange: this.serviceChanged,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                _json_textarea__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  label: localize(
                    "ui.panel.config.automation.editor.actions.type.service.service_data"
                  ),
                  value: data,
                  onChange: this.serviceDataChanged,
                }
              )
            );
          }
        }
        CallServiceAction.defaultConfig = {
          alias: "",
          service: "",
          data: {},
        };

        /***/
      },

    /***/ "./src/panels/config/js/script/condition.js":
      /*!**************************************************!*\
  !*** ./src/panels/config/js/script/condition.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ConditionAction;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _condition_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../condition/state */ "./src/panels/config/js/condition/state.js"
        );
        /* harmony import */ var _condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../condition/condition_edit */ "./src/panels/config/js/condition/condition_edit.js"
        );

        class ConditionAction extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          // eslint-disable-next-line
          render({ action, index, onChange, hass, localize }) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              _condition_condition_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
              {
                condition: action,
                onChange: onChange,
                index: index,
                hass: hass,
                localize: localize,
              }
            );
          }
        }
        ConditionAction.defaultConfig = Object.assign(
          {
            condition: "state",
          },
          _condition_state__WEBPACK_IMPORTED_MODULE_1__["default"].defaultConfig
        );

        /***/
      },

    /***/ "./src/panels/config/js/script/delay.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/js/script/delay.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return DelayAction;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class DelayAction extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "action");
          }

          render({ action, localize }) {
            const { delay } = action;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.actions.type.delay.delay"
                ),
                name: "delay",
                value: delay,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        DelayAction.defaultConfig = {
          delay: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/script/event.tsx":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/script/event.tsx ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return EventActionForm;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _json_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../json_textarea */ "./src/panels/config/js/json_textarea.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class EventActionForm extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          static get defaultConfig() {
            return {
              event: "",
              event_data: {},
            };
          }

          constructor() {
            super();
            this.onChange = void 0;
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__[
              "onChangeEvent"
            ].bind(this, "action");
            this.serviceDataChanged = this.serviceDataChanged.bind(this);
          }

          render() {
            const {
              action: { event, event_data },
              localize,
            } = this.props;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.actions.type.event.event"
                ),
                name: "event",
                value: event,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                _json_textarea__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  label: localize(
                    "ui.panel.config.automation.editor.actions.type.event.service_data"
                  ),
                  value: event_data,
                  onChange: this.serviceDataChanged,
                }
              )
            );
          }

          serviceDataChanged(eventData) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.action, {
                event_data: eventData,
              })
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/script/index.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/js/script/index.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Script;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _action_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./action_row */ "./src/panels/config/js/script/action_row.js"
        );

        class Script extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
          constructor() {
            super();
            this.addAction = this.addAction.bind(this);
            this.actionChanged = this.actionChanged.bind(this);
          }

          addAction() {
            const script = this.props.script.concat({
              service: "",
            });
            this.props.onChange(script);
          }

          actionChanged(index, newValue) {
            const script = this.props.script.concat();

            if (newValue === null) {
              script.splice(index, 1);
            } else {
              script[index] = newValue;
            }

            this.props.onChange(script);
          }

          render({ script, hass, localize }) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              {
                class: "script",
              },
              script.map((act, idx) =>
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _action_row__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    index: idx,
                    action: act,
                    onChange: this.actionChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-card",
                null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-actions add-card",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "mwc-button",
                    {
                      onTap: this.addAction,
                    },
                    localize("ui.panel.config.automation.editor.actions.add")
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/script/wait.js":
      /*!*********************************************!*\
  !*** ./src/panels/config/js/script/wait.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return WaitAction;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class WaitAction extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__[
              "onChangeEvent"
            ].bind(this, "action");
            this.onTemplateChange = this.onTemplateChange.bind(this);
          } // Gets fired on mount. If empty, onChangeEvent removes attribute.
          // Without the attribute this action is no longer matched to this component.

          onTemplateChange(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.action, {
                [ev.target.getAttribute("name")]: ev.target.value,
              })
            );
          }

          render({ action, localize }) {
            /* eslint-disable camelcase */
            const { wait_template, timeout } = action;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
                label: localize(
                  "ui.panel.config.automation.editor.actions.type.wait_template.wait_template"
                ),
                name: "wait_template",
                value: wait_template,
                "onvalue-changed": this.onTemplateChange,
                dir: "ltr",
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.actions.type.wait_template.timeout"
                ),
                name: "timeout",
                value: timeout,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        WaitAction.defaultConfig = {
          wait_template: "",
          timeout: "",
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9oYXNfbG9jYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wcmVhY3QvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wcmVhY3QvdW5tb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvaGEtYXBwLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9jb25kaXRpb25fZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vbnVtZXJpY19zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3N1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9jb25kaXRpb24vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvY29uZGl0aW9uL3pvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvanNvbl90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvYWN0aW9uX2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2FjdGlvbl9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvc2NyaXB0L2NhbGxfc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvY29uZGl0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvZXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9zY3JpcHQvd2FpdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PlxuICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzTG9jYXRpb24oc3RhdGVPYmo6IEhhc3NFbnRpdHkpIHtcbiAgcmV0dXJuIChcbiAgICBcImxhdGl0dWRlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcyAmJiBcImxvbmdpdHVkZVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgKTtcbn1cbiIsImludGVyZmFjZSBPbkNoYW5nZUNvbXBvbmVudCB7XG4gIHByb3BzOiB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBvbkNoYW5nZShpbmRleDogbnVtYmVyLCBkYXRhOiBvYmplY3QpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DaGFuZ2VFdmVudCh0aGlzOiBPbkNoYW5nZUNvbXBvbmVudCwgcHJvcCwgZXYpIHtcbiAgY29uc3Qgb3JpZ0RhdGEgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gIGlmIChldi50YXJnZXQudmFsdWUgPT09IG9yaWdEYXRhW2V2LnRhcmdldC5uYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB7IC4uLm9yaWdEYXRhIH07XG5cbiAgaWYgKGV2LnRhcmdldC52YWx1ZSkge1xuICAgIGRhdGFbZXYudGFyZ2V0Lm5hbWVdID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSBkYXRhW2V2LnRhcmdldC5uYW1lXTtcbiAgfVxuXG4gIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgZGF0YSk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVubW91bnQobW91bnRFbCkge1xuICByZW5kZXIoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgICgpID0+IG51bGwsXG4gICAgbW91bnRFbFxuICApO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNsYXNzIEhhQ29tYm9Cb3ggZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dmFhZGluLWNvbWJvLWJveC1saWdodFxuICAgICAgICBpdGVtcz1cIltbX2l0ZW1zXV1cIlxuICAgICAgICBpdGVtLXZhbHVlLXBhdGg9XCJbW2l0ZW1WYWx1ZVBhdGhdXVwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIltbaXRlbUxhYmVsUGF0aF1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBvcGVuZWQ9XCJ7e29wZW5lZH19XCJcbiAgICAgICAgYWxsb3ctY3VzdG9tLXZhbHVlPVwiW1thbGxvd0N1c3RvbVZhbHVlXV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfZmlyZUNoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBhdXRvZm9jdXM9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9XCJbW3ZhbHVlXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyF2YWx1ZV1dXCJcbiAgICAgICAgICAgID5DbGVhcjwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiW1tfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKV1dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpdGVtcy5sZW5ndGhdXVwiXG4gICAgICAgICAgICA+VG9nZ2xlPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IC01cHggLTEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZTogQm9vbGVhbixcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2l0ZW1zQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9pdGVtczogT2JqZWN0LFxuICAgICAgaXRlbUxhYmVsUGF0aDogU3RyaW5nLFxuICAgICAgaXRlbVZhbHVlUGF0aDogU3RyaW5nLFxuICAgICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vcGVuZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIF9pdGVtc0NoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBuZXdWYWw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCkge1xuICAgIHJldHVybiBvcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwiO1xuICB9XG5cbiAgX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIHJldHVybiBpdGVtTGFiZWxQYXRoID8gaXRlbVtpdGVtTGFiZWxQYXRoXSA6IGl0ZW07XG4gIH1cblxuICBfZmlyZUNoYW5nZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29tYm8tYm94XCIsIEhhQ29tYm9Cb3gpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jb21iby1ib3hcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU2VydmljZVBpY2tlciBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb21iby1ib3hcbiAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLnNlcnZpY2UtcGlja2VyLnNlcnZpY2UnKV1dXCJcbiAgICAgICAgaXRlbXM9XCJbW19zZXJ2aWNlc11dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJcIlxuICAgICAgPjwvaGEtY29tYm8tYm94PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBfc2VydmljZXM6IEFycmF5LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfaGFzc0NoYW5nZWQoaGFzcywgb2xkSGFzcykge1xuICAgIGlmICghaGFzcykge1xuICAgICAgdGhpcy5fc2VydmljZXMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZEhhc3MgJiYgaGFzcy5zZXJ2aWNlcyA9PT0gb2xkSGFzcy5zZXJ2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc2VydmljZXMpXG4gICAgICAuc29ydCgpXG4gICAgICAuZm9yRWFjaCgoZG9tYWluKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlc1tkb21haW5dKS5zb3J0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2RvbWFpbn0uJHtzZXJ2aWNlc1tpXX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHJlc3VsdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zZXJ2aWNlLXBpY2tlclwiLCBIYVNlcnZpY2VQaWNrZXIpO1xuIiwiLypcbldyYXBwZXIgZm9yIHBhcGVyLXRleHRhcmVhLlxuXG5wYXBlci10ZXh0YXJlYSBjcmFzaGVzIG9uIGlPUyB3aGVuIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseS4gVGhpcyBvbmx5IGltcGFjdHNcbm91ciBhdXRvbWF0aW9uIGFuZCBzY3JpcHQgZWRpdG9ycyBhcyB0aGV5IGFyZSB1c2luZyBQcmVhY3QuIFBvbHltZXIgaXMgdXNpbmdcbnRlbXBsYXRlIGVsZW1lbnRzIGFuZCBkb2VzIG5vdCBoYXZlIHRoaXMgaXNzdWUuXG5cbnBhcGVyLXRleHRhcmVhIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy81NTZcbldlYktpdCBpc3N1ZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NDYyOVxuKi9cblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhVGV4dGFyZWEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci10ZXh0YXJlYSBsYWJlbD1cIltbbGFiZWxdXVwiIHZhbHVlPVwie3t2YWx1ZX19XCI+PC9wYXBlci10ZXh0YXJlYT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdGV4dGFyZWFcIiwgSGFUZXh0YXJlYSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcblRoaXMgY29kZSBpcyBjb3BpZWQgZnJvbSBhcHAtaGVhZGVyLWxheW91dC5cbidmdWxsYmxlZWQnIHN1cHBvcnQgaXMgcmVtb3ZlZCBhcyBIb21lIEFzc2lzc3RhbnQgZG9lc24ndCB1c2UgaXQuXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBpcyBhZGRlZC5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUFwcExheW91dCBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldChcImFwcC1oZWFkZXItbGF5b3V0XCIpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSlcbiAgICAgICAgICAjd3JhcHBlci5pbml0aWFsaXppbmdcbiAgICAgICAgICA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAvKiBVc2luZyAndHJhbnNmb3JtJyB3aWxsIGNhdXNlICdwb3NpdGlvbjogZml4ZWQnIGVsZW1lbnRzIHRvIGJlaGF2ZSBsaWtlXG4gICAgICAgICAgICdwb3NpdGlvbjogYWJzb2x1dGUnIHJlbGF0aXZlIHRvIHRoaXMgZWxlbWVudC4gKi9cbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPHNsb3QgaWQ9XCJmYWJcIiBuYW1lPVwiZmFiXCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYXBwLWxheW91dFwiLCBIYUFwcExheW91dCk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbmltcG9ydCBOdW1lcmljU3RhdGVDb25kaXRpb24gZnJvbSBcIi4vbnVtZXJpY19zdGF0ZVwiO1xuaW1wb3J0IFN0YXRlQ29uZGl0aW9uIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgU3VuQ29uZGl0aW9uIGZyb20gXCIuL3N1blwiO1xuaW1wb3J0IFRlbXBsYXRlQ29uZGl0aW9uIGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgVGltZUNvbmRpdGlvbiBmcm9tIFwiLi90aW1lXCI7XG5pbXBvcnQgWm9uZUNvbmRpdGlvbiBmcm9tIFwiLi96b25lXCI7XG5cbmNvbnN0IFRZUEVTID0ge1xuICBzdGF0ZTogU3RhdGVDb25kaXRpb24sXG4gIG51bWVyaWNfc3RhdGU6IE51bWVyaWNTdGF0ZUNvbmRpdGlvbixcbiAgc3VuOiBTdW5Db25kaXRpb24sXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZUNvbmRpdGlvbixcbiAgdGltZTogVGltZUNvbmRpdGlvbixcbiAgem9uZTogWm9uZUNvbmRpdGlvbixcbn07XG5cbmNvbnN0IE9QVElPTlMgPSBPYmplY3Qua2V5cyhUWVBFUykuc29ydCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25Sb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlQ2hhbmdlZCA9IHRoaXMudHlwZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHR5cGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdHlwZSA9IGV2LnRhcmdldC5zZWxlY3RlZEl0ZW0uYXR0cmlidXRlcy5jb25kaXRpb24udmFsdWU7XG5cbiAgICBpZiAodHlwZSAhPT0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgICBPYmplY3QuYXNzaWduKHsgY29uZGl0aW9uOiB0eXBlIH0sIFRZUEVTW3R5cGVdLmRlZmF1bHRDb25maWcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcih7IGluZGV4LCBjb25kaXRpb24sIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgQ29tcCA9IFRZUEVTW2NvbmRpdGlvbi5jb25kaXRpb25dO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gT1BUSU9OUy5pbmRleE9mKGNvbmRpdGlvbi5jb25kaXRpb24pO1xuXG4gICAgaWYgKCFDb21wKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudW5zdXBwb3J0ZWRfY29uZGl0aW9uXCIsXG4gICAgICAgICAgICBcImNvbmRpdGlvblwiLFxuICAgICAgICAgICAgY29uZGl0aW9uLmNvbmRpdGlvblxuICAgICAgICAgICl9XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gY29uZGl0aW9uPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgY29uZGl0aW9uPXtjb25kaXRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNTdGF0ZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5jb25kaXRpb24sIHsgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHJlbmRlcih7IGNvbmRpdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgdmFsdWVfdGVtcGxhdGUsIGVudGl0eV9pZCwgYmVsb3csIGFib3ZlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUubnVtZXJpY19zdGF0ZS5hYm92ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYWJvdmVcIlxuICAgICAgICAgIHZhbHVlPXthYm92ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5udW1lcmljX3N0YXRlLmJlbG93XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWxvd1wiXG4gICAgICAgICAgdmFsdWU9e2JlbG93fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk51bWVyaWNTdGF0ZUNvbmRpdGlvbi5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmNvbmRpdGlvbiwgeyBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcmVuZGVyKHsgY29uZGl0aW9uLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBlbnRpdHlfaWQsIHN0YXRlIH0gPSBjb25kaXRpb247XG4gICAgY29uc3QgY25kRm9yID0gY29uZGl0aW9uLmZvcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdGF0ZS5zdGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIHtjbmRGb3IgJiYgPHByZT5Gb3I6IHtKU09OLnN0cmluZ2lmeShjbmRGb3IsIG51bGwsIDIpfTwvcHJlPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU3RhdGVDb25kaXRpb24uZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxuICBzdGF0ZTogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bkNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuYWZ0ZXJQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzLCBcImFmdGVyXCIpO1xuICAgIHRoaXMuYmVmb3JlUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcywgXCJiZWZvcmVcIik7XG4gIH1cblxuICByYWRpb0dyb3VwUGlja2VkKGtleSwgZXYpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmNvbmRpdGlvbik7XG5cbiAgICBpZiAoZXYudGFyZ2V0LnNlbGVjdGVkKSB7XG4gICAgICBjb25kaXRpb25ba2V5XSA9IGV2LnRhcmdldC5zZWxlY3RlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNvbmRpdGlvbltrZXldO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgY29uZGl0aW9uKTtcbiAgfVxuXG4gIHJlbmRlcih7IGNvbmRpdGlvbiwgbG9jYWxpemUgfSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIGNvbnN0IHsgYWZ0ZXIsIGFmdGVyX29mZnNldCwgYmVmb3JlLCBiZWZvcmVfb2Zmc2V0IH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBpZD1cImJlZm9yZWxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5iZWZvcmVcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIGFsbG93LWVtcHR5LXNlbGVjdGlvblxuICAgICAgICAgIHNlbGVjdGVkPXtiZWZvcmV9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYmVmb3JlbGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5iZWZvcmVQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5yaXNlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3VucmlzZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnNldFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUuc3VuLnN1bnNldFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuXG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uYmVmb3JlX29mZnNldFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYmVmb3JlX29mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e2JlZm9yZV9vZmZzZXR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtiZWZvcmUgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWwgaWQ9XCJhZnRlcmxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5hZnRlclwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgYWxsb3ctZW1wdHktc2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e2FmdGVyfVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFmdGVybGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5hZnRlclBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5zdW5yaXNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3Vuc2V0XCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS5zdW4uc3Vuc2V0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnN1bi5hZnRlcl9vZmZzZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFmdGVyX29mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e2FmdGVyX29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2FmdGVyID09PSB1bmRlZmluZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblN1bkNvbmRpdGlvbi5kZWZhdWx0Q29uZmlnID0ge307XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICB9XG5cbiAgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLnR5cGUudGVtcGxhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRlbXBsYXRlQ29uZGl0aW9uLmRlZmF1bHRDb25maWcgPSB7XG4gIHZhbHVlX3RlbXBsYXRlOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lQ29uZGl0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJjb25kaXRpb25cIik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcmVuZGVyKHsgY29uZGl0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhZnRlciwgYmVmb3JlIH0gPSBjb25kaXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS50aW1lLmFmdGVyXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJhZnRlclwiXG4gICAgICAgICAgdmFsdWU9e2FmdGVyfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnRpbWUuYmVmb3JlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJiZWZvcmVcIlxuICAgICAgICAgIHZhbHVlPXtiZWZvcmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UaW1lQ29uZGl0aW9uLmRlZmF1bHRDb25maWcgPSB7fTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuaW1wb3J0IGhhc0xvY2F0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZUNvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiY29uZGl0aW9uXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5jb25kaXRpb24sIHsgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUgfSlcbiAgICApO1xuICB9XG5cbiAgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5jb25kaXRpb24sIHsgem9uZTogZXYudGFyZ2V0LnZhbHVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgem9uZSB9ID0gY29uZGl0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMudHlwZS56b25lLmVudGl0eVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZW50aXR5RmlsdGVyPXt6b25lQW5kTG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy50eXBlLnpvbmUuem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJ6b25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuWm9uZUNvbmRpdGlvbi5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG4gIHpvbmU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlLmlzVmFsaWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUudmFsdWUgPSBKU09OLnN0cmluZ2lmeShwcm9wcy52YWx1ZSB8fCB7fSwgbnVsbCwgMik7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgbGV0IHBhcnNlZDtcbiAgICBsZXQgaXNWYWxpZDtcblxuICAgIHRyeSB7XG4gICAgICBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSW52YWxpZCBKU09OXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGlzVmFsaWQsXG4gICAgfSk7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UocGFyc2VkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgdmFsdWUgfSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKSxcbiAgICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoeyBsYWJlbCB9LCB7IHZhbHVlLCBpc1ZhbGlkIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIG1pbldpZHRoOiAzMDAsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5pbXBvcnQgQ2FsbFNlcnZpY2VBY3Rpb24gZnJvbSBcIi4vY2FsbF9zZXJ2aWNlXCI7XG5pbXBvcnQgQ29uZGl0aW9uQWN0aW9uIGZyb20gXCIuL2NvbmRpdGlvblwiO1xuaW1wb3J0IERlbGF5QWN0aW9uIGZyb20gXCIuL2RlbGF5XCI7XG5pbXBvcnQgRXZlbnRBY3Rpb24gZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBXYWl0QWN0aW9uIGZyb20gXCIuL3dhaXRcIjtcblxuY29uc3QgVFlQRVMgPSB7XG4gIHNlcnZpY2U6IENhbGxTZXJ2aWNlQWN0aW9uLFxuICBkZWxheTogRGVsYXlBY3Rpb24sXG4gIHdhaXRfdGVtcGxhdGU6IFdhaXRBY3Rpb24sXG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uQWN0aW9uLFxuICBldmVudDogRXZlbnRBY3Rpb24sXG59O1xuXG5jb25zdCBPUFRJT05TID0gT2JqZWN0LmtleXMoVFlQRVMpLnNvcnQoKTtcblxuZnVuY3Rpb24gZ2V0VHlwZShhY3Rpb24pIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFRZUEVTKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGtleXNbaV0gaW4gYWN0aW9uKSB7XG4gICAgICByZXR1cm4ga2V5c1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGVDaGFuZ2VkID0gdGhpcy50eXBlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdUeXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLmFjdGlvbi52YWx1ZTtcbiAgICBjb25zdCBvbGRUeXBlID0gZ2V0VHlwZSh0aGlzLnByb3BzLmFjdGlvbik7XG5cbiAgICBpZiAob2xkVHlwZSAhPT0gbmV3VHlwZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBUWVBFU1tuZXdUeXBlXS5kZWZhdWx0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoeyBpbmRleCwgYWN0aW9uLCBvbkNoYW5nZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKGFjdGlvbik7XG4gICAgY29uc3QgQ29tcCA9IHR5cGUgJiYgVFlQRVNbdHlwZV07XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBPUFRJT05TLmluZGV4T2YodHlwZSk7XG5cbiAgICBpZiAoIUNvbXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy51bnN1cHBvcnRlZF9hY3Rpb25cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCIsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZV9zZWxlY3RcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgIG9uaXJvbi1zZWxlY3Q9e3RoaXMudHlwZUNoYW5nZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge09QVElPTlMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gYWN0aW9uPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLiR7b3B0fS5sYWJlbGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgPENvbXBcbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBBY3Rpb25FZGl0IGZyb20gXCIuL2FjdGlvbl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25EZWxldGUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKFxuICAgICAgY29uZmlybShcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFjdGlvbkVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5cbmltcG9ydCBKU09OVGV4dEFyZWEgZnJvbSBcIi4uL2pzb25fdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbFNlcnZpY2VBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zZXJ2aWNlQ2hhbmdlZCA9IHRoaXMuc2VydmljZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZCA9IHRoaXMuc2VydmljZURhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXJ2aWNlQ2hhbmdlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5hY3Rpb24sIHsgc2VydmljZTogZXYudGFyZ2V0LnZhbHVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VEYXRhQ2hhbmdlZChkYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmFjdGlvbiwgeyBkYXRhIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcih7IGFjdGlvbiwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgc2VydmljZSwgZGF0YSB9ID0gYWN0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgdmFsdWU9e3NlcnZpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VydmljZUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxKU09OVGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuc2VydmljZS5zZXJ2aWNlX2RhdGFcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VydmljZURhdGFDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxsU2VydmljZUFjdGlvbi5kZWZhdWx0Q29uZmlnID0ge1xuICBhbGlhczogXCJcIixcbiAgc2VydmljZTogXCJcIixcbiAgZGF0YToge30sXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgU3RhdGVDb25kaXRpb24gZnJvbSBcIi4uL2NvbmRpdGlvbi9zdGF0ZVwiO1xuaW1wb3J0IENvbmRpdGlvbkVkaXQgZnJvbSBcIi4uL2NvbmRpdGlvbi9jb25kaXRpb25fZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25kaXRpb25BY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmVuZGVyKHsgYWN0aW9uLCBpbmRleCwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbmRpdGlvbkVkaXRcbiAgICAgICAgY29uZGl0aW9uPXthY3Rpb259XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuQ29uZGl0aW9uQWN0aW9uLmRlZmF1bHRDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICB7IGNvbmRpdGlvbjogXCJzdGF0ZVwiIH0sXG4gIFN0YXRlQ29uZGl0aW9uLmRlZmF1bHRDb25maWdcbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF5QWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJhY3Rpb25cIik7XG4gIH1cblxuICByZW5kZXIoeyBhY3Rpb24sIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGRlbGF5IH0gPSBhY3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS5kZWxheS5kZWxheVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZGVsYXlcIlxuICAgICAgICAgIHZhbHVlPXtkZWxheX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRlbGF5QWN0aW9uLmRlZmF1bHRDb25maWcgPSB7XG4gIGRlbGF5OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBKU09OVGV4dEFyZWEgZnJvbSBcIi4uL2pzb25fdGV4dGFyZWFcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IEV2ZW50QWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGlvbjogRXZlbnRBY3Rpb247XG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmM7XG4gIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlciwgYWN0aW9uOiBFdmVudEFjdGlvbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBY3Rpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0Q29uZmlnKCk6IEV2ZW50QWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IFwiXCIsXG4gICAgICBldmVudF9kYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJhY3Rpb25cIik7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWQgPSB0aGlzLnNlcnZpY2VEYXRhQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpb246IHsgZXZlbnQsIGV2ZW50X2RhdGEgfSxcbiAgICAgIGxvY2FsaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLnR5cGUuZXZlbnQuZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImV2ZW50XCJcbiAgICAgICAgICB2YWx1ZT17ZXZlbnR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8SlNPTlRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy50eXBlLmV2ZW50LnNlcnZpY2VfZGF0YVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZXZlbnRfZGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXJ2aWNlRGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJ2aWNlRGF0YUNoYW5nZWQoZXZlbnREYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLmFjdGlvbixcbiAgICAgIGV2ZW50X2RhdGE6IGV2ZW50RGF0YSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgQWN0aW9uUm93IGZyb20gXCIuL2FjdGlvbl9yb3dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYWRkQWN0aW9uID0gdGhpcy5hZGRBY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFjdGlvbkNoYW5nZWQgPSB0aGlzLmFjdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZEFjdGlvbigpIHtcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnByb3BzLnNjcmlwdC5jb25jYXQoe1xuICAgICAgc2VydmljZTogXCJcIixcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaXB0KTtcbiAgfVxuXG4gIGFjdGlvbkNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wcm9wcy5zY3JpcHQuY29uY2F0KCk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHRbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzY3JpcHQpO1xuICB9XG5cbiAgcmVuZGVyKHsgc2NyaXB0LCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JpcHRcIj5cbiAgICAgICAge3NjcmlwdC5tYXAoKGFjdCwgaWR4KSA9PiAoXG4gICAgICAgICAgPEFjdGlvblJvd1xuICAgICAgICAgICAgaW5kZXg9e2lkeH1cbiAgICAgICAgICAgIGFjdGlvbj17YWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMgYWRkLWNhcmRcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uVGFwPXt0aGlzLmFkZEFjdGlvbn0+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5hY3Rpb25zLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FpdEFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwiYWN0aW9uXCIpO1xuICAgIHRoaXMub25UZW1wbGF0ZUNoYW5nZSA9IHRoaXMub25UZW1wbGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gR2V0cyBmaXJlZCBvbiBtb3VudC4gSWYgZW1wdHksIG9uQ2hhbmdlRXZlbnQgcmVtb3ZlcyBhdHRyaWJ1dGUuXG4gIC8vIFdpdGhvdXQgdGhlIGF0dHJpYnV0ZSB0aGlzIGFjdGlvbiBpcyBubyBsb25nZXIgbWF0Y2hlZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgb25UZW1wbGF0ZUNoYW5nZShldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5hY3Rpb24sIHtcbiAgICAgICAgW2V2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXTogZXYudGFyZ2V0LnZhbHVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKHsgYWN0aW9uLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB3YWl0X3RlbXBsYXRlLCB0aW1lb3V0IH0gPSBhY3Rpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS10ZXh0YXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS53YWl0X3RlbXBsYXRlLndhaXRfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIndhaXRfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt3YWl0X3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vblRlbXBsYXRlQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFjdGlvbnMudHlwZS53YWl0X3RlbXBsYXRlLnRpbWVvdXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInRpbWVvdXRcIlxuICAgICAgICAgIHZhbHVlPXt0aW1lb3V0fVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2FpdEFjdGlvbi5kZWZhdWx0Q29uZmlnID0ge1xuICB3YWl0X3RlbXBsYXRlOiBcIlwiLFxuICB0aW1lb3V0OiBcIlwiLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpHQTtBQUNBO0FBMEdBOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaERBO0FBQ0E7QUFpREE7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQXJCQTtBQUNBO0FBc0JBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7QUFLQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzRUE7QUFDQTtBQXpFQTtBQUNBO0FBeUVBOzs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExRkE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBbkVBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQXREQTtBQXdEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVdBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBOUZBO0FBZ0dBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUEvQkE7QUFpQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBbkRBO0FBcURBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQXhEQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQWpFQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQTFDQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQXRCQTtBQXdCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFqREE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFsREE7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQTVDQTtBQThDQTtBQUNBO0FBQ0E7QUFGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
