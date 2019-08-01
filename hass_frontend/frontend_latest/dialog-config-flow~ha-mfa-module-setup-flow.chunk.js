(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["dialog-config-flow~ha-mfa-module-setup-flow"],
  {
    /***/ "./src/components/ha-form.js":
      /*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaForm extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
              "html"
            ]`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-label="[[computeLabel]]"
            compute-error="[[computeError]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          ></paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `;
          }

          static get properties() {
            return {
              data: {
                type: Object,
                notify: true,
              },
              schema: Object,
              error: Object,
              // A function that will computes the label to be displayed for a given
              // schema object.
              computeLabel: {
                type: Function,
                value: () => (schema) => schema && schema.name,
              },
              // A function that will computes an error message to be displayed for a
              // given error ID, and relevant schema object
              computeError: {
                type: Function,
                value: () => (error, schema) => error, // eslint-disable-line no-unused-vars
              },
            };
          }

          focus() {
            const input = this.shadowRoot.querySelector(
              "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
            );

            if (!input) {
              return;
            }

            input.focus();
          }

          _isArray(val) {
            return Array.isArray(val);
          }

          _isRange(schema) {
            return "valueMin" in schema && "valueMax" in schema;
          }

          _equals(a, b) {
            return a === b;
          }

          _includes(a, b) {
            return a.indexOf(b) >= 0;
          }

          _getValue(obj, item) {
            if (obj) {
              return obj[item.name];
            }

            return null;
          }

          _valueChanged(ev) {
            let value = ev.detail.value;

            if (ev.model.item.type === "integer") {
              value = Number(ev.detail.value);
            }

            this.set(["data", ev.model.item.name], value);
          }

          _passwordFieldType(unmaskedPassword) {
            return unmaskedPassword ? "text" : "password";
          }

          _passwordFieldIcon(unmaskedPassword) {
            return unmaskedPassword ? "hass:eye-off" : "hass:eye";
          }

          _optionValue(item) {
            return Array.isArray(item) ? item[0] : item;
          }

          _optionLabel(item) {
            return Array.isArray(item) ? item[1] : item;
          }
        }

        customElements.define("ha-form", HaForm);

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

    /***/ "./src/components/ha-paper-slider.js":
      /*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js"
        );

        /**
         * @polymer
         * @customElement
         * @appliesMixin paper-slider
         */

        const PaperSliderClass = customElements.get("paper-slider");

        class HaPaperSlider extends PaperSliderClass {
          static get template() {
            const tpl = document.createElement("template");
            tpl.innerHTML = PaperSliderClass.template.innerHTML;
            const styleEl = document.createElement("style");
            styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
            tpl.content.appendChild(styleEl);
            return tpl;
          }
        }

        customElements.define("ha-paper-slider", HaPaperSlider);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvdy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhRm9ybSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDIycHggMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNBcnJheShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvci5iYXNlXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvci5iYXNlLCBzY2hlbWEpXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYV1dXCI+XG4gICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgIGRhdGE9XCJbW19nZXRWYWx1ZShkYXRhLCBpdGVtKV1dXCJcbiAgICAgICAgICAgIHNjaGVtYT1cIltbaXRlbV1dXCJcbiAgICAgICAgICAgIGVycm9yPVwiW1tfZ2V0VmFsdWUoZXJyb3IsIGl0ZW0pXV1cIlxuICAgICAgICAgICAgb24tZGF0YS1jaGFuZ2VkPVwiX3ZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgICBjb21wdXRlLWxhYmVsPVwiW1tjb21wdXRlTGFiZWxdXVwiXG4gICAgICAgICAgICBjb21wdXRlLWVycm9yPVwiW1tjb21wdXRlRXJyb3JdXVwiXG4gICAgICAgICAgPjwvaGEtZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9pc0FycmF5KHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvciwgc2NoZW1hKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic3RyaW5nXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbW19pbmNsdWRlcyhzY2hlbWEubmFtZSwgXCJwYXNzd29yZFwiKV1dJ1xuICAgICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJbW19wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICB0b2dnbGVzXG4gICAgICAgICAgICAgICAgYWN0aXZlPVwie3t1bm1hc2tlZFBhc3N3b3JkfX1cIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGljb249XCJbW19wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgICBpZD1cImljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gbWFza2VkIGFuZCBjbGVhciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbWyFfaW5jbHVkZXMoc2NoZW1hLm5hbWUsIFwicGFzc3dvcmRcIildXSdcbiAgICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcImludGVnZXJcIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cbiAgICAgICAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgICAgbWluPVwiW1tzY2hlbWEudmFsdWVNaW5dXVwiXG4gICAgICAgICAgICAgICAgbWF4PVwiW1tzY2hlbWEudmFsdWVNYXhdXVwiXG4gICAgICAgICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJmbG9hdFwiKV1dJyByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJib29sZWFuXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgID5bW2NvbXB1dGVMYWJlbChzY2hlbWEpXV08L3BhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic2VsZWN0XCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYS5vcHRpb25zXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tfb3B0aW9uVmFsdWUoaXRlbSldXVwiXG4gICAgICAgICAgICAgICAgICA+W1tfb3B0aW9uTGFiZWwoaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBPYmplY3QsXG4gICAgICBlcnJvcjogT2JqZWN0LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBjb21wdXRlcyB0aGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIGZvciBhIGdpdmVuXG4gICAgICAvLyBzY2hlbWEgb2JqZWN0LlxuICAgICAgY29tcHV0ZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHNjaGVtYSkgPT4gc2NoZW1hICYmIHNjaGVtYS5uYW1lLFxuICAgICAgfSxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IHdpbGwgY29tcHV0ZXMgYW4gZXJyb3IgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgZm9yIGFcbiAgICAgIC8vIGdpdmVuIGVycm9yIElELCBhbmQgcmVsZXZhbnQgc2NoZW1hIG9iamVjdFxuICAgICAgY29tcHV0ZUVycm9yOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKGVycm9yLCBzY2hlbWEpID0+IGVycm9yLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJoYS1mb3JtLCBwYXBlci1pbnB1dCwgaGEtcGFwZXItc2xpZGVyLCBwYXBlci1jaGVja2JveCwgcGFwZXItZHJvcGRvd24tbWVudVwiXG4gICAgKTtcblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2lzQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbiAgfVxuXG4gIF9pc1JhbmdlKHNjaGVtYSkge1xuICAgIHJldHVybiBcInZhbHVlTWluXCIgaW4gc2NoZW1hICYmIFwidmFsdWVNYXhcIiBpbiBzY2hlbWE7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9pbmNsdWRlcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEuaW5kZXhPZihiKSA+PSAwO1xuICB9XG5cbiAgX2dldFZhbHVlKG9iaiwgaXRlbSkge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHJldHVybiBvYmpbaXRlbS5uYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgbGV0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChldi5tb2RlbC5pdGVtLnR5cGUgPT09IFwiaW50ZWdlclwiKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcihldi5kZXRhaWwudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldChbXCJkYXRhXCIsIGV2Lm1vZGVsLml0ZW0ubmFtZV0sIHZhbHVlKTtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcImhhc3M6ZXllLW9mZlwiIDogXCJoYXNzOmV5ZVwiO1xuICB9XG5cbiAgX29wdGlvblZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgX29wdGlvbkxhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMV0gOiBpdGVtO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWZvcm1cIiwgSGFGb3JtKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmxldCBsb2FkZWQgPSBudWxsO1xuXG4vKipcbiAqIFdoaXRlIGxpc3QgYWxsb3dlZCBzdmcgdGFnLlxuICogT25seSBwdXQgaW4gdGhlIHRhZyB1c2VkIGluIFFSIGNvZGUsIGNhbiBiZSBleHRlbmQgaW4gZnV0dXJlLlxuICovXG5jb25zdCBzdmdXaGl0ZUxpc3QgPSBbXCJzdmdcIiwgXCJwYXRoXCJdO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3JlbmRlclwiLFxuICAgICAgfSxcbiAgICAgIGFsbG93U3ZnOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gMCA9IG5vdCBsb2FkZWQsIDEgPSBzdWNjZXNzLCAyID0gZXJyb3JcbiAgICB0aGlzLl9zY3JpcHRMb2FkZWQgPSAwO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2l6ZSA9ICgpID0+IHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuXG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfbWFya2Rvd25cIiAqLyBcIi4uL3Jlc291cmNlcy9sb2FkX21hcmtkb3duXCIpO1xuICAgIH1cbiAgICBsb2FkZWRcbiAgICAgIC50aGVuKFxuICAgICAgICAoeyBtYXJrZWQsIGZpbHRlclhTUyB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZWQgPSBtYXJrZWQ7XG4gICAgICAgICAgdGhpcy5maWx0ZXJYU1MgPSBmaWx0ZXJYU1M7XG4gICAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGVkID0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NjcmlwdExvYWRlZCA9IDI7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlbmRlcigpKTtcbiAgfVxuXG4gIF9yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuX3NjcmlwdExvYWRlZCA9PT0gMCB8fCB0aGlzLl9yZW5kZXJTY2hlZHVsZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IHRydWU7XG5cbiAgICAvLyBkZWJvdW5jZSBpdCB0byBuZXh0IG1pY3JvdGFzay5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5fc2NyaXB0TG9hZGVkID09PSAxKSB7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGhpcy5maWx0ZXJYU1MoXG4gICAgICAgICAgdGhpcy5tYXJrZWQodGhpcy5jb250ZW50LCB7XG4gICAgICAgICAgICBnZm06IHRydWUsXG4gICAgICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25JZ25vcmVUYWc6IHRoaXMuYWxsb3dTdmdcbiAgICAgICAgICAgICAgPyAodGFnLCBodG1sKSA9PiAoc3ZnV2hpdGVMaXN0LmluZGV4T2YodGFnKSA+PSAwID8gaHRtbCA6IG51bGwpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAxIC8qIFNIT1dfRUxFTUVOVCAqLyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICAgIC8vIE9wZW4gZXh0ZXJuYWwgbGlua3MgaW4gYSBuZXcgd2luZG93XG4gICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJBXCIgJiYgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0KSB7XG4gICAgICAgICAgICBub2RlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY3JpcHRMb2FkZWQgPT09IDIpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWFya2Rvd25cIiwgSGFNYXJrZG93bik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFqQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFPQTtBQUNBO0FBMk9BOzs7Ozs7Ozs7Ozs7QUMzUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBSUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSw4UEFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBNURBO0FBQ0E7QUE0REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
