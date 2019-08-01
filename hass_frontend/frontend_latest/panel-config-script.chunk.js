(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-script"],
  {
    /***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
      /*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
      /*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IronCheckedElementBehaviorImpl",
          function() {
            return IronCheckedElementBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "IronCheckedElementBehavior",
          function() {
            return IronCheckedElementBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js"
        );
        /* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /**
         * Use `IronCheckedElementBehavior` to implement a custom element that has a
         * `checked` property, which can be used for validation if the element is also
         * `required`. Element instances implementing this behavior will also be
         * registered for use in an `iron-form` element.
         *
         * @demo demo/index.html
         * @polymerBehavior IronCheckedElementBehavior
         */

        const IronCheckedElementBehaviorImpl = {
          properties: {
            /**
             * Fired when the checked state changes.
             *
             * @event iron-change
             */

            /**
             * Gets or sets the state, `true` is checked and `false` is unchecked.
             */
            checked: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              notify: true,
              observer: "_checkedChanged",
            },

            /**
             * If true, the button toggles the active state with each tap or press
             * of the spacebar.
             */
            toggles: {
              type: Boolean,
              value: true,
              reflectToAttribute: true,
            },

            /* Overriden from IronFormElementBehavior */
            value: {
              type: String,
              value: "on",
              observer: "_valueChanged",
            },
          },
          observers: ["_requiredChanged(required)"],
          created: function() {
            // Used by `iron-form` to handle the case that an element with this behavior
            // doesn't have a role of 'checkbox' or 'radio', but should still only be
            // included when the form is serialized if `this.checked === true`.
            this._hasIronCheckedElementBehavior = true;
          },

          /**
           * Returns false if the element is required and not checked, and true
           * otherwise.
           * @param {*=} _value Ignored.
           * @return {boolean} true if `required` is false or if `checked` is true.
           */
          _getValidity: function(_value) {
            return this.disabled || !this.required || this.checked;
          },

          /**
           * Update the aria-required label when `required` is changed.
           */
          _requiredChanged: function() {
            if (this.required) {
              this.setAttribute("aria-required", "true");
            } else {
              this.removeAttribute("aria-required");
            }
          },

          /**
           * Fire `iron-changed` when the checked state changes.
           */
          _checkedChanged: function() {
            this.active = this.checked;
            this.fire("iron-change");
          },

          /**
           * Reset value to 'on' if it is set to `undefined`.
           */
          _valueChanged: function() {
            if (this.value === undefined || this.value === null) {
              this.value = "on";
            }
          },
        };
        /** @polymerBehavior */

        const IronCheckedElementBehavior = [
          _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronFormElementBehavior"
          ],
          _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronValidatableBehavior"
          ],
          IronCheckedElementBehaviorImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
      /*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperCheckedElementBehaviorImpl",
          function() {
            return PaperCheckedElementBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperCheckedElementBehavior",
          function() {
            return PaperCheckedElementBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js"
        );
        /* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js"
        );
        /* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /**
         * Use `PaperCheckedElementBehavior` to implement a custom element that has a
         * `checked` property similar to `IronCheckedElementBehavior` and is compatible
         * with having a ripple effect.
         * @polymerBehavior PaperCheckedElementBehavior
         */

        const PaperCheckedElementBehaviorImpl = {
          /**
           * Synchronizes the element's checked state with its ripple effect.
           */
          _checkedChanged: function() {
            _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronCheckedElementBehaviorImpl"
            ]._checkedChanged.call(this);

            if (this.hasRipple()) {
              if (this.checked) {
                this._ripple.setAttribute("checked", "");
              } else {
                this._ripple.removeAttribute("checked");
              }
            }
          },

          /**
           * Synchronizes the element's `active` and `checked` state.
           */
          _buttonStateChanged: function() {
            _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
              "PaperRippleBehavior"
            ]._buttonStateChanged.call(this);

            if (this.disabled) {
              return;
            }

            if (this.isAttached) {
              this.checked = this.active;
            }
          },
        };
        /** @polymerBehavior */

        const PaperCheckedElementBehavior = [
          _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__[
            "PaperInkyFocusBehavior"
          ],
          _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronCheckedElementBehavior"
          ],
          PaperCheckedElementBehaviorImpl,
        ];

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

    /***/ "./src/data/script.ts":
      /*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
      /*! exports provided: triggerScript, deleteScript */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "triggerScript",
          function() {
            return triggerScript;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteScript",
          function() {
            return deleteScript;
          }
        );
        /* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        const triggerScript = (hass, entityId, variables) =>
          hass.callService(
            "script",
            Object(
              _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(entityId),
            variables
          );
        const deleteScript = (hass, objectId) =>
          hass.callApi("DELETE", `config/script/config/${objectId}`);

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

    /***/ "./src/mixins/navigate-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/navigate */ "./src/common/navigate.ts"
        );

        /*
         * @polymerMixin
         * @appliesMixin EventsMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
              navigate(...args) {
                Object(
                  _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"]
                )(this, ...args);
              }
            }
        );

        /***/
      },

    /***/ "./src/panels/config/js/script.js":
      /*!****************************************!*\
  !*** ./src/panels/config/js/script.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ScriptEditor;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./script/index */ "./src/panels/config/js/script/index.js"
        );

        class ScriptEditor extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = this.onChange.bind(this);
            this.sequenceChanged = this.sequenceChanged.bind(this);
          }

          onChange(ev) {
            this.props.onChange(
              Object.assign({}, this.props.script, {
                [ev.target.name]: ev.target.value,
              })
            );
          }

          sequenceChanged(sequence) {
            this.props.onChange(
              Object.assign({}, this.props.script, {
                sequence,
              })
            );
          }

          render({ script, isWide, hass, localize }) {
            const { alias, sequence } = script;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  alias
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  "Use scripts to execute a sequence of actions."
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "ha-card",
                  null,
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "div",
                    {
                      class: "card-content",
                    },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-input",
                      {
                        label: "Name",
                        name: "alias",
                        value: alias,
                        "onvalue-changed": this.onChange,
                      }
                    )
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  "Sequence"
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  "The sequence of actions of this script.",
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "p",
                    null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "a",
                      {
                        href: "https://home-assistant.io/docs/scripts/",
                        target: "_blank",
                      },
                      "Learn more about available actions."
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _script_index__WEBPACK_IMPORTED_MODULE_4__["default"],
                  {
                    script: sequence,
                    onChange: this.sequenceChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/script/ha-config-script.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.js"
        );
        /* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );

        class HaConfigScript extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        ha-script-picker,
        ha-script-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:script"
        data="{{_routeData}}"
        active="{{_edittingScript}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-script-picker
          hass="[[hass]]"
          scripts="[[scripts]]"
          is-wide="[[isWide]]"
        ></ha-script-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-script-editor
          hass="[[hass]]"
          script="[[script]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-script-editor>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              route: Object,
              isWide: Boolean,
              _routeData: Object,
              _routeMatches: Boolean,
              _creatingNew: Boolean,
              _edittingScript: Boolean,
              scripts: {
                type: Array,
                computed: "computeScripts(hass)",
              },
              script: {
                type: Object,
                computed: "computeScript(scripts, _edittingScript, _routeData)",
              },
              showEditor: {
                type: Boolean,
                computed: "computeShowEditor(_edittingScript, _creatingNew)",
              },
            };
          }

          computeScript(scripts, edittingAddon, routeData) {
            if (!scripts || !edittingAddon) {
              return null;
            }

            for (var i = 0; i < scripts.length; i++) {
              if (scripts[i].entity_id === routeData.script) {
                return scripts[i];
              }
            }

            return null;
          }

          computeScripts(hass) {
            var scripts = [];
            Object.keys(hass.states).forEach(function(key) {
              var entity = hass.states[key];

              if (
                Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                    "default"
                  ]
                )(entity) === "script"
              ) {
                scripts.push(entity);
              }
            });
            return scripts.sort(function entitySortBy(entityA, entityB) {
              var nameA = Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(entityA);
              var nameB = Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(entityB);

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }

          computeShowEditor(_edittingScript, _creatingNew) {
            return _creatingNew || _edittingScript;
          }
        }

        customElements.define("ha-config-script", HaConfigScript);

        /***/
      },

    /***/ "./src/panels/config/script/ha-script-editor.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../js/script */ "./src/panels/config/js/script.js"
        );
        /* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts"
        );
        /* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../data/script */ "./src/data/script.ts"
        );

        function ScriptEditor(mountEl, props, mergeEl) {
          return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(
            Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(
              _js_script__WEBPACK_IMPORTED_MODULE_9__["default"],
              props
            ),
            mountEl,
            mergeEl
          );
        }
        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin NavigateMixin
         */

        class HaScriptEditor extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
        )(
          Object(
            _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style include="ha-style">
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[dirty] {
          margin-bottom: 0;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>Script [[computeName(script)]]</div>
            <template is="dom-if" if="[[!creatingNew]]">
              <paper-icon-button
                icon="hass:delete"
                on-click="_delete"
              ></paper-icon-button>
            </template>
          </app-toolbar>
        </app-header>
        <div class="content">
          <template is="dom-if" if="[[errors]]">
            <div class="errors">[[errors]]</div>
          </template>
          <div id="root"></div>
        </div>
        <paper-fab
          slot="fab"
          is-wide$="[[isWide]]"
          dirty$="[[dirty]]"
          icon="hass:content-save"
          title="Save"
          on-click="saveScript"
          rtl$="[[rtl]]"
        ></paper-fab>
      </ha-app-layout>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              errors: {
                type: Object,
                value: null,
              },
              dirty: {
                type: Boolean,
                value: false,
              },
              config: {
                type: Object,
                value: null,
              },
              script: {
                type: Object,
                observer: "scriptChanged",
              },
              creatingNew: {
                type: Boolean,
                observer: "creatingNewChanged",
              },
              isWide: {
                type: Boolean,
                observer: "_updateComponent",
              },
              _rendered: {
                type: Object,
                value: null,
              },
              _renderScheduled: {
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

          ready() {
            this.configChanged = this.configChanged.bind(this);
            super.ready(); // This call will initialize preact.
          }

          disconnectedCallback() {
            super.disconnectedCallback();

            if (this._rendered) {
              Object(
                _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"]
              )(this._rendered);
              this._rendered = null;
            }
          }

          configChanged(config) {
            // onChange gets called a lot during initial rendering causing recursing calls.
            if (this._rendered === null) return;
            this.config = config;
            this.errors = null;
            this.dirty = true;

            this._updateComponent();
          }

          scriptChanged(newVal, oldVal) {
            if (!newVal) return;

            if (!this.hass) {
              setTimeout(() => this.scriptChanged(newVal, oldVal), 0);
              return;
            }

            if (oldVal && oldVal.entity_id === newVal.entity_id) {
              return;
            }

            this.hass
              .callApi(
                "get",
                "config/script/config/" +
                  Object(
                    _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                      "default"
                    ]
                  )(newVal.entity_id)
              )
              .then(
                (config) => {
                  // Normalize data: ensure sequence is a list
                  // Happens when people copy paste their scripts into the config
                  var value = config.sequence;

                  if (value && !Array.isArray(value)) {
                    config.sequence = [value];
                  }

                  this.dirty = false;
                  this.config = config;

                  this._updateComponent();
                },
                () => {
                  alert("Only scripts inside scripts.yaml are editable.");
                  history.back();
                }
              );
          }

          creatingNewChanged(newVal) {
            if (!newVal) {
              return;
            }

            this.dirty = false;
            this.config = {
              alias: "New Script",
              sequence: [
                {
                  service: "",
                  data: {},
                },
              ],
            };

            this._updateComponent();
          }

          backTapped() {
            if (
              this.dirty && // eslint-disable-next-line
              !confirm(
                "You have unsaved changes. Are you sure you want to leave?"
              )
            ) {
              return;
            }

            history.back();
          }

          _updateComponent() {
            if (this._renderScheduled || !this.hass || !this.config) return;
            this._renderScheduled = true;
            Promise.resolve().then(() => {
              this._rendered = ScriptEditor(
                this.$.root,
                {
                  script: this.config,
                  onChange: this.configChanged,
                  isWide: this.isWide,
                  hass: this.hass,
                  localize: this.localize,
                },
                this._rendered
              );
              this._renderScheduled = false;
            });
          }

          async _delete() {
            if (!confirm("Are you sure you want to delete this script?")) {
              return;
            }

            await Object(
              _data_script__WEBPACK_IMPORTED_MODULE_16__["deleteScript"]
            )(
              this.hass,
              Object(
                _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                  "default"
                ]
              )(this.script.entity_id)
            );
            history.back();
          }

          saveScript() {
            var id = this.creatingNew
              ? "" + Date.now()
              : Object(
                  _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                    "default"
                  ]
                )(this.script.entity_id);
            this.hass
              .callApi("post", "config/script/config/" + id, this.config)
              .then(
                () => {
                  this.dirty = false;

                  if (this.creatingNew) {
                    this.navigate(`/config/script/edit/${id}`, true);
                  }
                },
                (errors) => {
                  this.errors = errors.body.message;
                  throw errors;
                }
              );
          }

          computeName(script) {
            return (
              script &&
              Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__[
                  "default"
                ]
              )(script)
            );
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("ha-script-editor", HaScriptEditor);

        /***/
      },

    /***/ "./src/panels/config/script/ha-script-picker.ts":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../data/script */ "./src/data/script.ts"
        );
        /* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../util/toast */ "./src/util/toast.ts"
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

        let HaScriptPicker = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-script-picker"
            ),
          ],
          function(_initialize, _LitElement) {
            class HaScriptPicker extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaScriptPicker,
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
                  key: "scripts",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.script.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">Script Editor</div>
          <div slot="introduction">
            The script editor allows you to create and edit scripts. Please read
            <a
              href="https://home-assistant.io/docs/scripts/editor/"
              target="_blank"
              >the instructions</a
            >
            to make sure that you have configured JAVIS Home correctly.
          </div>

          <ha-card header="Pick script to edit">
            ${
              this.scripts.length === 0
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>We couldn't find any scripts.</p>
                  </div>
                `
                : this.scripts.map(
                    (script) => lit_element__WEBPACK_IMPORTED_MODULE_0__[
                      "html"
                    ]`
                    <div class="script">
                      <paper-icon-button
                        .script=${script}
                        icon="hass:play"
                        @click=${this._runScript}
                      ></paper-icon-button>
                      <paper-item-body>
                        <div>${Object(
                          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                            "default"
                          ]
                        )(script)}</div>
                      </paper-item-body>
                      <div class="actions">
                        <a href=${`/config/script/edit/${script.entity_id}`}>
                          <paper-icon-button
                            icon="hass:pencil"
                          ></paper-icon-button>
                        </a>
                      </div>
                    </div>
                  `
                  )
            }
          </ha-card>
        </ha-config-section>

        <a href="/config/script/new">
          <paper-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title="Add Script"
            ?rtl=${Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__[
                "computeRTL"
              ]
            )(this.hass)}
          ></paper-fab>
        </a>
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_runScript",
                  value: async function _runScript(ev) {
                    const script = ev.currentTarget.script;
                    await Object(
                      _data_script__WEBPACK_IMPORTED_MODULE_10__[
                        "triggerScript"
                      ]
                    )(this.hass, script.entity_id);
                    Object(
                      _util_toast__WEBPACK_IMPORTED_MODULE_11__["showToast"]
                    )(this, {
                      message: `Triggered ${Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                          "default"
                        ]
                      )(script)}`,
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        ha-card {
          padding-bottom: 8px;
          margin-bottom: 56px;
        }

        .script {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px;
          margin: 4px 0;
        }

        .script > *:first-child {
          margin-right: 8px;
        }

        .script a[href],
        paper-icon-button {
          color: var(--primary-text-color);
        }

        .actions {
          display: flex;
        }

        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtY29uZmlnLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LXBpY2tlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciwgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYSBjdXN0b20gZWxlbWVudCB0aGF0IGhhcyBhXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgc2ltaWxhciB0byBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIGFuZCBpcyBjb21wYXRpYmxlXG4gKiB3aXRoIGhhdmluZyBhIHJpcHBsZSBlZmZlY3QuXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGNoZWNrZWQgc3RhdGUgd2l0aCBpdHMgcmlwcGxlIGVmZmVjdC5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsLl9jaGVja2VkQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBgYWN0aXZlYCBhbmQgYGNoZWNrZWRgIHN0YXRlLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvci5fYnV0dG9uU3RhdGVDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5hY3RpdmU7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcixcbiAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsXG4gIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGV2ZW50X2RhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBldmVudF9kYXRhX3RlbXBsYXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyaWdnZXJTY3JpcHQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHZhcmlhYmxlcz86IHt9XG4pID0+IGhhc3MuY2FsbFNlcnZpY2UoXCJzY3JpcHRcIiwgY29tcHV0ZU9iamVjdElkKGVudGl0eUlkKSwgdmFyaWFibGVzKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjcmlwdCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBvYmplY3RJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9zY3JpcHQvY29uZmlnLyR7b2JqZWN0SWR9YCk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuL3NjcmlwdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlcXVlbmNlQ2hhbmdlZCA9IHRoaXMuc2VxdWVuY2VDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNjcmlwdCwge1xuICAgICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXF1ZW5jZUNoYW5nZWQoc2VxdWVuY2UpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2NyaXB0LCB7IHNlcXVlbmNlIH0pKTtcbiAgfVxuXG4gIHJlbmRlcih7IHNjcmlwdCwgaXNXaWRlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBhbGlhcywgc2VxdWVuY2UgfSA9IHNjcmlwdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+e2FsaWFzfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBVc2Ugc2NyaXB0cyB0byBleGVjdXRlIGEgc2VxdWVuY2Ugb2YgYWN0aW9ucy5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWxpYXN9XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5TZXF1ZW5jZTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBUaGUgc2VxdWVuY2Ugb2YgYWN0aW9ucyBvZiB0aGlzIHNjcmlwdC5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBhdmFpbGFibGUgYWN0aW9ucy5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICBzY3JpcHQ9e3NlcXVlbmNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VxdWVuY2VDaGFuZ2VkfVxuICAgICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1zY3JpcHQtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLXNjcmlwdC1waWNrZXJcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2NyaXB0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1zY3JpcHQtcGlja2VyLFxuICAgICAgICBoYS1zY3JpcHQtZWRpdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9lZGl0LzpzY3JpcHRcIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICBhY3RpdmU9XCJ7e19lZGl0dGluZ1NjcmlwdH19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL25ld1wiXG4gICAgICAgIGFjdGl2ZT1cInt7X2NyZWF0aW5nTmV3fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXNob3dFZGl0b3JdXVwiPlxuICAgICAgICA8aGEtc2NyaXB0LXBpY2tlclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc2NyaXB0cz1cIltbc2NyaXB0c11dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgID48L2hhLXNjcmlwdC1waWNrZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0VkaXRvcl1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICA8aGEtc2NyaXB0LWVkaXRvclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc2NyaXB0PVwiW1tzY3JpcHRdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGNyZWF0aW5nLW5ldz1cIltbX2NyZWF0aW5nTmV3XV1cIlxuICAgICAgICA+PC9oYS1zY3JpcHQtZWRpdG9yPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3JvdXRlTWF0Y2hlczogQm9vbGVhbixcbiAgICAgIF9jcmVhdGluZ05ldzogQm9vbGVhbixcbiAgICAgIF9lZGl0dGluZ1NjcmlwdDogQm9vbGVhbixcblxuICAgICAgc2NyaXB0czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdHMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIHNjcmlwdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTY3JpcHQoc2NyaXB0cywgX2VkaXR0aW5nU2NyaXB0LCBfcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgc2hvd0VkaXRvcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2hvd0VkaXRvcihfZWRpdHRpbmdTY3JpcHQsIF9jcmVhdGluZ05ldylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTY3JpcHQoc2NyaXB0cywgZWRpdHRpbmdBZGRvbiwgcm91dGVEYXRhKSB7XG4gICAgaWYgKCFzY3JpcHRzIHx8ICFlZGl0dGluZ0FkZG9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2NyaXB0c1tpXS5lbnRpdHlfaWQgPT09IHJvdXRlRGF0YS5zY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIHNjcmlwdHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZVNjcmlwdHMoaGFzcykge1xuICAgIHZhciBzY3JpcHRzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBlbnRpdHkgPSBoYXNzLnN0YXRlc1trZXldO1xuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwic2NyaXB0XCIpIHtcbiAgICAgICAgc2NyaXB0cy5wdXNoKGVudGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NyaXB0cy5zb3J0KGZ1bmN0aW9uIGVudGl0eVNvcnRCeShlbnRpdHlBLCBlbnRpdHlCKSB7XG4gICAgICB2YXIgbmFtZUEgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUEpO1xuICAgICAgdmFyIG5hbWVCID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlCKTtcblxuICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ1NjcmlwdCwgX2NyZWF0aW5nTmV3KSB7XG4gICAgcmV0dXJuIF9jcmVhdGluZ05ldyB8fCBfZWRpdHRpbmdTY3JpcHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNjcmlwdFwiLCBIYUNvbmZpZ1NjcmlwdCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5cbmltcG9ydCBTY3JpcHQgZnJvbSBcIi4uL2pzL3NjcmlwdFwiO1xuaW1wb3J0IHVubW91bnRQcmVhY3QgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvdW5tb3VudFwiO1xuXG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgZGVsZXRlU2NyaXB0IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5cbmZ1bmN0aW9uIFNjcmlwdEVkaXRvcihtb3VudEVsLCBwcm9wcywgbWVyZ2VFbCkge1xuICByZXR1cm4gcmVuZGVyKGgoU2NyaXB0LCBwcm9wcyksIG1vdW50RWwsIG1lcmdlRWwpO1xufVxuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgSGFTY3JpcHRFZGl0b3IgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKE5hdmlnYXRlTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLW1lbnUgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW5bc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbZGlydHldIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj1cIlwiPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ9XCJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBvbi1jbGljaz1cImJhY2tUYXBwZWRcIlxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5TY3JpcHQgW1tjb21wdXRlTmFtZShzY3JpcHQpXV08L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shY3JlYXRpbmdOZXddXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RlbGV0ZVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yc11dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+W1tlcnJvcnNdXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwYXBlci1mYWJcbiAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICBpcy13aWRlJD1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGRpcnR5JD1cIltbZGlydHldXVwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6Y29udGVudC1zYXZlXCJcbiAgICAgICAgICB0aXRsZT1cIlNhdmVcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic2F2ZVNjcmlwdFwiXG4gICAgICAgICAgcnRsJD1cIltbcnRsXV1cIlxuICAgICAgICA+PC9wYXBlci1mYWI+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRpcnR5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2NyaXB0Q2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgY3JlYXRpbmdOZXc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiY3JlYXRpbmdOZXdDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3VwZGF0ZUNvbXBvbmVudFwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBfcmVuZGVyU2NoZWR1bGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZWQgPSB0aGlzLmNvbmZpZ0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICBzdXBlci5yZWFkeSgpOyAvLyBUaGlzIGNhbGwgd2lsbCBpbml0aWFsaXplIHByZWFjdC5cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICB1bm1vdW50UHJlYWN0KHRoaXMuX3JlbmRlcmVkKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25maWdDaGFuZ2VkKGNvbmZpZykge1xuICAgIC8vIG9uQ2hhbmdlIGdldHMgY2FsbGVkIGEgbG90IGR1cmluZyBpbml0aWFsIHJlbmRlcmluZyBjYXVzaW5nIHJlY3Vyc2luZyBjYWxscy5cbiAgICBpZiAodGhpcy5fcmVuZGVyZWQgPT09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gIH1cblxuICBzY3JpcHRDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcmlwdENoYW5nZWQobmV3VmFsLCBvbGRWYWwpLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZFZhbCAmJiBvbGRWYWwuZW50aXR5X2lkID09PSBuZXdWYWwuZW50aXR5X2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiZ2V0XCIsXG4gICAgICAgIFwiY29uZmlnL3NjcmlwdC9jb25maWcvXCIgKyBjb21wdXRlT2JqZWN0SWQobmV3VmFsLmVudGl0eV9pZClcbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgLy8gTm9ybWFsaXplIGRhdGE6IGVuc3VyZSBzZXF1ZW5jZSBpcyBhIGxpc3RcbiAgICAgICAgICAvLyBIYXBwZW5zIHdoZW4gcGVvcGxlIGNvcHkgcGFzdGUgdGhlaXIgc2NyaXB0cyBpbnRvIHRoZSBjb25maWdcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWcuc2VxdWVuY2U7XG4gICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgY29uZmlnLnNlcXVlbmNlID0gW3ZhbHVlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChcIk9ubHkgc2NyaXB0cyBpbnNpZGUgc2NyaXB0cy55YW1sIGFyZSBlZGl0YWJsZS5cIik7XG4gICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBjcmVhdGluZ05ld0NoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgYWxpYXM6IFwiTmV3IFNjcmlwdFwiLFxuICAgICAgc2VxdWVuY2U6IFt7IHNlcnZpY2U6IFwiXCIsIGRhdGE6IHt9IH1dLFxuICAgIH07XG4gICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gIH1cblxuICBiYWNrVGFwcGVkKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZGlydHkgJiZcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgIWNvbmZpcm0oXCJZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT9cIilcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBfdXBkYXRlQ29tcG9uZW50KCkge1xuICAgIGlmICh0aGlzLl9yZW5kZXJTY2hlZHVsZWQgfHwgIXRoaXMuaGFzcyB8fCAhdGhpcy5jb25maWcpIHJldHVybjtcbiAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBTY3JpcHRFZGl0b3IoXG4gICAgICAgIHRoaXMuJC5yb290LFxuICAgICAgICB7XG4gICAgICAgICAgc2NyaXB0OiB0aGlzLmNvbmZpZyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5jb25maWdDaGFuZ2VkLFxuICAgICAgICAgIGlzV2lkZTogdGhpcy5pc1dpZGUsXG4gICAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICAgIGxvY2FsaXplOiB0aGlzLmxvY2FsaXplLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9yZW5kZXJlZFxuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgX2RlbGV0ZSgpIHtcbiAgICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc2NyaXB0P1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBkZWxldGVTY3JpcHQodGhpcy5oYXNzLCBjb21wdXRlT2JqZWN0SWQodGhpcy5zY3JpcHQuZW50aXR5X2lkKSk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzYXZlU2NyaXB0KCkge1xuICAgIHZhciBpZCA9IHRoaXMuY3JlYXRpbmdOZXdcbiAgICAgID8gXCJcIiArIERhdGUubm93KClcbiAgICAgIDogY29tcHV0ZU9iamVjdElkKHRoaXMuc2NyaXB0LmVudGl0eV9pZCk7XG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJwb3N0XCIsIFwiY29uZmlnL3NjcmlwdC9jb25maWcvXCIgKyBpZCwgdGhpcy5jb25maWcpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jcmVhdGluZ05ldykge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGUoYC9jb25maWcvc2NyaXB0L2VkaXQvJHtpZH1gLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnMuYm9keS5tZXNzYWdlO1xuICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVOYW1lKHNjcmlwdCkge1xuICAgIHJldHVybiBzY3JpcHQgJiYgY29tcHV0ZVN0YXRlTmFtZShzY3JpcHQpO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNjcmlwdC1lZGl0b3JcIiwgSGFTY3JpcHRFZGl0b3IpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRyaWdnZXJTY3JpcHQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc2NyaXB0LXBpY2tlclwiKVxuY2xhc3MgSGFTY3JpcHRQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NyaXB0cyE6IEhhc3NFbnRpdHlbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5TY3JpcHQgRWRpdG9yPC9kaXY+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICBUaGUgc2NyaXB0IGVkaXRvciBhbGxvd3MgeW91IHRvIGNyZWF0ZSBhbmQgZWRpdCBzY3JpcHRzLiBQbGVhc2UgcmVhZFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL2VkaXRvci9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+dGhlIGluc3RydWN0aW9uczwvYVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgY29uZmlndXJlZCBKQVZJUyBIb21lIGNvcnJlY3RseS5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIlBpY2sgc2NyaXB0IHRvIGVkaXRcIj5cbiAgICAgICAgICAgICR7dGhpcy5zY3JpcHRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIGNvdWxkbid0IGZpbmQgYW55IHNjcmlwdHMuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IHRoaXMuc2NyaXB0cy5tYXAoXG4gICAgICAgICAgICAgICAgICAoc2NyaXB0KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NyaXB0PSR7c2NyaXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9ydW5TY3JpcHR9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKHNjcmlwdCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JHtgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke3NjcmlwdC5lbnRpdHlfaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9zY3JpcHQvbmV3XCI+XG4gICAgICAgICAgPHBhcGVyLWZhYlxuICAgICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT1cIkFkZCBTY3JpcHRcIlxuICAgICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgICA+PC9wYXBlci1mYWI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9ydW5TY3JpcHQoZXYpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBldi5jdXJyZW50VGFyZ2V0LnNjcmlwdCBhcyBIYXNzRW50aXR5O1xuICAgIGF3YWl0IHRyaWdnZXJTY3JpcHQodGhpcy5oYXNzLCBzY3JpcHQuZW50aXR5X2lkKTtcbiAgICBzaG93VG9hc3QodGhpcywge1xuICAgICAgbWVzc2FnZTogYFRyaWdnZXJlZCAke2NvbXB1dGVTdGF0ZU5hbWUoc2NyaXB0KX1gLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBob3Jpem9udGFsO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQgYVtocmVmXSxcbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2NyaXB0LXBpY2tlclwiOiBIYVNjcmlwdFBpY2tlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBOEVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUE2QkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBTUE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUE5REE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFuQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0dBO0FBQ0E7QUE0R0E7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE3Q0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOVJBO0FBQ0E7QUErUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVRBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFBQTs7O0FBVUE7O0FBRUE7OztBQUdBOzs7QUFHQTs7Ozs7OztBQVpBOzs7Ozs7O0FBMkJBOzs7QUFHQTs7OztBQXJEQTtBQTBEQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkRBOzs7QUF4SUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
