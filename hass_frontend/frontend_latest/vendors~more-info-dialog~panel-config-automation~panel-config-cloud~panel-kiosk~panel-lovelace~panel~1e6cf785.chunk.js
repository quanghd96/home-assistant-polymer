(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785",
  ],
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

    /***/ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js ***!
  \**************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js"
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

        const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__[
          "html"
        ]`

    <style>
      :host {
        display: inline-block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-common-base;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host(:focus) {
        outline:none;
      }

      .toggle-bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        pointer-events: none;
        opacity: 0.4;
        transition: background-color linear .08s;
        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);

        @apply --paper-toggle-button-unchecked-bar;
      }

      .toggle-button {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        transition: -webkit-transform linear .08s, background-color linear .08s;
        transition: transform linear .08s, background-color linear .08s;
        will-change: transform;
        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));

        @apply --paper-toggle-button-unchecked-button;
      }

      .toggle-button.dragging {
        -webkit-transition: none;
        transition: none;
      }

      :host([checked]:not([disabled])) .toggle-bar {
        opacity: 0.5;
        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));

        @apply --paper-toggle-button-checked-bar;
      }

      :host([disabled]) .toggle-bar {
        background-color: #000;
        opacity: 0.12;
      }

      :host([checked]) .toggle-button {
        -webkit-transform: translate(16px, 0);
        transform: translate(16px, 0);
      }

      :host([checked]:not([disabled])) .toggle-button {
        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));

        @apply --paper-toggle-button-checked-button;
      }

      :host([disabled]) .toggle-button {
        background-color: #bdbdbd;
        opacity: 1;
      }

      .toggle-ink {
        position: absolute;
        top: -14px;
        left: -14px;
        right: auto;
        bottom: auto;
        width: 48px;
        height: 48px;
        opacity: 0.5;
        pointer-events: none;
        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));

        @apply --paper-toggle-button-unchecked-ink;
      }

      :host([checked]) .toggle-ink {
        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));

        @apply --paper-toggle-button-checked-ink;
      }

      .toggle-container {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 14px;
        /* The toggle button has an absolute position of -3px; The extra 1px
        /* accounts for the toggle button shadow box. */
        margin: 4px 1px;
      }

      .toggle-label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-toggle-button-label-spacing, 8px);
        pointer-events: none;
        color: var(--paper-toggle-button-label-color, var(--primary-text-color));
      }

      /* invalid state */
      :host([invalid]) .toggle-bar {
        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));
      }

      :host([invalid]) .toggle-button {
        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));
      }

      :host([invalid]) .toggle-ink {
        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));
      }
    </style>

    <div class="toggle-container">
      <div id="toggleBar" class="toggle-bar"></div>
      <div id="toggleButton" class="toggle-button"></div>
    </div>

    <div class="toggle-label"><slot></slot></div>

  `;
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Switch](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-switch)

`paper-toggle-button` provides a ON/OFF switch that user can toggle the state
by tapping or by dragging the switch.

Example:

    <paper-toggle-button></paper-toggle-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-toggle-button-unchecked-bar-color` | Slider color when the input is not checked | `#000000`
`--paper-toggle-button-unchecked-button-color` | Button color when the input is not checked | `--paper-grey-50`
`--paper-toggle-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--dark-primary-color`
`--paper-toggle-button-checked-bar-color` | Slider button color when the input is checked | `--primary-color`
`--paper-toggle-button-checked-button-color` | Button color when the input is checked | `--primary-color`
`--paper-toggle-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-toggle-button-invalid-bar-color` | Slider button color when the input is invalid | `--error-color`
`--paper-toggle-button-invalid-button-color` | Button color when the input is invalid | `--error-color`
`--paper-toggle-button-invalid-ink-color` | Selected/focus ripple color when the input is invalid | `--error-color`
`--paper-toggle-button-unchecked-bar` | Mixin applied to the slider when the input is not checked | `{}`
`--paper-toggle-button-unchecked-button` | Mixin applied to the slider button when the input is not checked | `{}`
`--paper-toggle-button-unchecked-ink` | Mixin applied to the ripple when the input is not checked | `{}`
`--paper-toggle-button-checked-bar` | Mixin applied to the slider when the input is checked | `{}`
`--paper-toggle-button-checked-button` | Mixin applied to the slider button when the input is checked | `{}`
`--paper-toggle-button-checked-ink` | Mixin applied to the ripple when the input is checked | `{}`
`--paper-toggle-button-label-color` | Label color | `--primary-text-color`
`--paper-toggle-button-label-spacing` | Spacing between the label and the button | `8px`

This element applies the mixin `--paper-font-common-base` but does not import `paper-styles/typography.html`.
In order to apply the `Roboto` font to this element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-toggle-button
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-toggle-button",
          behaviors: [
            _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_4__[
              "PaperCheckedElementBehavior"
            ],
          ],

          /** @private */
          hostAttributes: {
            role: "button",
            "aria-pressed": "false",
            tabindex: 0,
          },
          properties: {
            /**
             * Fired when the checked state changes due to user interaction.
             *
             * @event change
             */
            /**
             * Fired when the checked state changes.
             *
             * @event iron-change
             */
          },
          listeners: {
            track: "_ontrack",
          },
          attached: function() {
            Object(
              _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_9__[
                "afterNextRender"
              ]
            )(this, function() {
              Object(
                _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_7__[
                  "setTouchAction"
                ]
              )(this, "pan-y");
            });
          },
          _ontrack: function(event) {
            var track = event.detail;

            if (track.state === "start") {
              this._trackStart(track);
            } else if (track.state === "track") {
              this._trackMove(track);
            } else if (track.state === "end") {
              this._trackEnd(track);
            }
          },
          _trackStart: function(track) {
            this._width = this.$.toggleBar.offsetWidth / 2;
            /*
             * keep an track-only check state to keep the dragging behavior smooth
             * while toggling activations
             */

            this._trackChecked = this.checked;
            this.$.toggleButton.classList.add("dragging");
          },
          _trackMove: function(track) {
            var dx = track.dx;
            this._x = Math.min(
              this._width,
              Math.max(0, this._trackChecked ? this._width + dx : dx)
            );
            this.translate3d(this._x + "px", 0, 0, this.$.toggleButton);

            this._userActivate(this._x > this._width / 2);
          },
          _trackEnd: function(track) {
            this.$.toggleButton.classList.remove("dragging");
            this.transform("", this.$.toggleButton);
          },
          // customize the element's ripple
          _createRipple: function() {
            this._rippleContainer = this.$.toggleButton;

            var ripple = _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "PaperRippleBehavior"
            ]._createRipple();

            ripple.id = "ink";
            ripple.setAttribute("recenters", "");
            ripple.classList.add("circle", "toggle-ink");
            return ripple;
          },
        });

        /***/
      },

    /***/ "./node_modules/fecha/src/fecha.js":
      /*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /**
         * Parse or format dates
         * @class fecha
         */
        var fecha = {};
        var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
        var twoDigits = "\\d\\d?";
        var threeDigits = "\\d{3}";
        var fourDigits = "\\d{4}";
        var word = "[^\\s]+";
        var literal = /\[([^]*?)\]/gm;

        var noop = function() {};

        function regexEscape(str) {
          return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
        }

        function shorten(arr, sLen) {
          var newArr = [];

          for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
          }

          return newArr;
        }

        function monthUpdate(arrName) {
          return function(d, v, i18n) {
            var index = i18n[arrName].indexOf(
              v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
            );

            if (~index) {
              d.month = index;
            }
          };
        }

        function pad(val, len) {
          val = String(val);
          len = len || 2;

          while (val.length < len) {
            val = "0" + val;
          }

          return val;
        }

        var dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        var monthNamesShort = shorten(monthNames, 3);
        var dayNamesShort = shorten(dayNames, 3);
        fecha.i18n = {
          dayNamesShort: dayNamesShort,
          dayNames: dayNames,
          monthNamesShort: monthNamesShort,
          monthNames: monthNames,
          amPm: ["am", "pm"],
          DoFn: function DoFn(D) {
            return (
              D +
              ["th", "st", "nd", "rd"][
                D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10
              ]
            );
          },
        };
        var formatFlags = {
          D: function(dateObj) {
            return dateObj.getDate();
          },
          DD: function(dateObj) {
            return pad(dateObj.getDate());
          },
          Do: function(dateObj, i18n) {
            return i18n.DoFn(dateObj.getDate());
          },
          d: function(dateObj) {
            return dateObj.getDay();
          },
          dd: function(dateObj) {
            return pad(dateObj.getDay());
          },
          ddd: function(dateObj, i18n) {
            return i18n.dayNamesShort[dateObj.getDay()];
          },
          dddd: function(dateObj, i18n) {
            return i18n.dayNames[dateObj.getDay()];
          },
          M: function(dateObj) {
            return dateObj.getMonth() + 1;
          },
          MM: function(dateObj) {
            return pad(dateObj.getMonth() + 1);
          },
          MMM: function(dateObj, i18n) {
            return i18n.monthNamesShort[dateObj.getMonth()];
          },
          MMMM: function(dateObj, i18n) {
            return i18n.monthNames[dateObj.getMonth()];
          },
          YY: function(dateObj) {
            return pad(String(dateObj.getFullYear()), 4).substr(2);
          },
          YYYY: function(dateObj) {
            return pad(dateObj.getFullYear(), 4);
          },
          h: function(dateObj) {
            return dateObj.getHours() % 12 || 12;
          },
          hh: function(dateObj) {
            return pad(dateObj.getHours() % 12 || 12);
          },
          H: function(dateObj) {
            return dateObj.getHours();
          },
          HH: function(dateObj) {
            return pad(dateObj.getHours());
          },
          m: function(dateObj) {
            return dateObj.getMinutes();
          },
          mm: function(dateObj) {
            return pad(dateObj.getMinutes());
          },
          s: function(dateObj) {
            return dateObj.getSeconds();
          },
          ss: function(dateObj) {
            return pad(dateObj.getSeconds());
          },
          S: function(dateObj) {
            return Math.round(dateObj.getMilliseconds() / 100);
          },
          SS: function(dateObj) {
            return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
          },
          SSS: function(dateObj) {
            return pad(dateObj.getMilliseconds(), 3);
          },
          a: function(dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
          },
          A: function(dateObj, i18n) {
            return dateObj.getHours() < 12
              ? i18n.amPm[0].toUpperCase()
              : i18n.amPm[1].toUpperCase();
          },
          ZZ: function(dateObj) {
            var o = dateObj.getTimezoneOffset();
            return (
              (o > 0 ? "-" : "+") +
              pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4)
            );
          },
        };
        var parseFlags = {
          D: [
            twoDigits,
            function(d, v) {
              d.day = v;
            },
          ],
          Do: [
            twoDigits + word,
            function(d, v) {
              d.day = parseInt(v, 10);
            },
          ],
          M: [
            twoDigits,
            function(d, v) {
              d.month = v - 1;
            },
          ],
          YY: [
            twoDigits,
            function(d, v) {
              var da = new Date(),
                cent = +("" + da.getFullYear()).substr(0, 2);
              d.year = "" + (v > 68 ? cent - 1 : cent) + v;
            },
          ],
          h: [
            twoDigits,
            function(d, v) {
              d.hour = v;
            },
          ],
          m: [
            twoDigits,
            function(d, v) {
              d.minute = v;
            },
          ],
          s: [
            twoDigits,
            function(d, v) {
              d.second = v;
            },
          ],
          YYYY: [
            fourDigits,
            function(d, v) {
              d.year = v;
            },
          ],
          S: [
            "\\d",
            function(d, v) {
              d.millisecond = v * 100;
            },
          ],
          SS: [
            "\\d{2}",
            function(d, v) {
              d.millisecond = v * 10;
            },
          ],
          SSS: [
            threeDigits,
            function(d, v) {
              d.millisecond = v;
            },
          ],
          d: [twoDigits, noop],
          ddd: [word, noop],
          MMM: [word, monthUpdate("monthNamesShort")],
          MMMM: [word, monthUpdate("monthNames")],
          a: [
            word,
            function(d, v, i18n) {
              var val = v.toLowerCase();

              if (val === i18n.amPm[0]) {
                d.isPm = false;
              } else if (val === i18n.amPm[1]) {
                d.isPm = true;
              }
            },
          ],
          ZZ: [
            "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",
            function(d, v) {
              var parts = (v + "").match(/([+-]|\d\d)/gi),
                minutes;

              if (parts) {
                minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
                d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
              }
            },
          ],
        };
        parseFlags.dd = parseFlags.d;
        parseFlags.dddd = parseFlags.ddd;
        parseFlags.DD = parseFlags.D;
        parseFlags.mm = parseFlags.m;
        parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
        parseFlags.MM = parseFlags.M;
        parseFlags.ss = parseFlags.s;
        parseFlags.A = parseFlags.a; // Some common format strings

        fecha.masks = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        };
        /***
         * Format a date
         * @method format
         * @param {Date|number} dateObj
         * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
         */

        fecha.format = function(dateObj, mask, i18nSettings) {
          var i18n = i18nSettings || fecha.i18n;

          if (typeof dateObj === "number") {
            dateObj = new Date(dateObj);
          }

          if (
            Object.prototype.toString.call(dateObj) !== "[object Date]" ||
            isNaN(dateObj.getTime())
          ) {
            throw new Error("Invalid Date in fecha.format");
          }

          mask = fecha.masks[mask] || mask || fecha.masks["default"];
          var literals = []; // Make literals inactive by replacing them with ??

          mask = mask.replace(literal, function($0, $1) {
            literals.push($1);
            return "??";
          }); // Apply formatting rules

          mask = mask.replace(token, function($0) {
            return $0 in formatFlags
              ? formatFlags[$0](dateObj, i18n)
              : $0.slice(1, $0.length - 1);
          }); // Inline literal values back into the formatted value

          return mask.replace(/\?\?/g, function() {
            return literals.shift();
          });
        };
        /**
         * Parse a date string into an object, changes - into /
         * @method parse
         * @param {string} dateStr Date string
         * @param {string} format Date parse format
         * @returns {Date|boolean}
         */

        fecha.parse = function(dateStr, format, i18nSettings) {
          var i18n = i18nSettings || fecha.i18n;

          if (typeof format !== "string") {
            throw new Error("Invalid format in fecha.parse");
          }

          format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
          // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

          if (dateStr.length > 1000) {
            return null;
          }

          var dateInfo = {};
          var parseInfo = [];
          var newFormat = regexEscape(format).replace(token, function($0) {
            if (parseFlags[$0]) {
              var info = parseFlags[$0];
              parseInfo.push(info[1]);
              return "(" + info[0] + ")";
            }

            return $0;
          });
          var matches = dateStr.match(new RegExp(newFormat, "i"));

          if (!matches) {
            return null;
          }

          for (var i = 1; i < matches.length; i++) {
            parseInfo[i - 1](dateInfo, matches[i], i18n);
          }

          var today = new Date();

          if (
            dateInfo.isPm === true &&
            dateInfo.hour != null &&
            +dateInfo.hour !== 12
          ) {
            dateInfo.hour = +dateInfo.hour + 12;
          } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
          }

          var date;

          if (dateInfo.timezoneOffset != null) {
            dateInfo.minute =
              +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
            date = new Date(
              Date.UTC(
                dateInfo.year || today.getFullYear(),
                dateInfo.month || 0,
                dateInfo.day || 1,
                dateInfo.hour || 0,
                dateInfo.minute || 0,
                dateInfo.second || 0,
                dateInfo.millisecond || 0
              )
            );
          } else {
            date = new Date(
              dateInfo.year || today.getFullYear(),
              dateInfo.month || 0,
              dateInfo.day || 1,
              dateInfo.hour || 0,
              dateInfo.minute || 0,
              dateInfo.second || 0,
              dateInfo.millisecond || 0
            );
          }

          return date;
        };

        /* harmony default export */ __webpack_exports__["default"] = fecha;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1jbG91ZH5wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbH4xZTZjZjc4NS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mZWNoYS9zcmMvZmVjaGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25WYWxpZGF0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIHRvIGltcGxlbWVudCBhIGN1c3RvbSBlbGVtZW50IHRoYXQgaGFzIGFcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHZhbGlkYXRpb24gaWYgdGhlIGVsZW1lbnQgaXMgYWxzb1xuICogYHJlcXVpcmVkYC4gRWxlbWVudCBpbnN0YW5jZXMgaW1wbGVtZW50aW5nIHRoaXMgYmVoYXZpb3Igd2lsbCBhbHNvIGJlXG4gKiByZWdpc3RlcmVkIGZvciB1c2UgaW4gYW4gYGlyb24tZm9ybWAgZWxlbWVudC5cbiAqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tY2hhbmdlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHN0YXRlLCBgdHJ1ZWAgaXMgY2hlY2tlZCBhbmQgYGZhbHNlYCBpcyB1bmNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2NoZWNrZWRDaGFuZ2VkJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGVhY2ggdGFwIG9yIHByZXNzXG4gICAgICogb2YgdGhlIHNwYWNlYmFyLlxuICAgICAqL1xuICAgIHRvZ2dsZXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qIE92ZXJyaWRlbiBmcm9tIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yICovXG4gICAgdmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nLCBvYnNlcnZlcjogJ192YWx1ZUNoYW5nZWQnfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfcmVxdWlyZWRDaGFuZ2VkKHJlcXVpcmVkKSddLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZWQgYnkgYGlyb24tZm9ybWAgdG8gaGFuZGxlIHRoZSBjYXNlIHRoYXQgYW4gZWxlbWVudCB3aXRoIHRoaXMgYmVoYXZpb3JcbiAgICAvLyBkb2Vzbid0IGhhdmUgYSByb2xlIG9mICdjaGVja2JveCcgb3IgJ3JhZGlvJywgYnV0IHNob3VsZCBzdGlsbCBvbmx5IGJlXG4gICAgLy8gaW5jbHVkZWQgd2hlbiB0aGUgZm9ybSBpcyBzZXJpYWxpemVkIGlmIGB0aGlzLmNoZWNrZWQgPT09IHRydWVgLlxuICAgIHRoaXMuX2hhc0lyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBhbmQgbm90IGNoZWNrZWQsIGFuZCB0cnVlXG4gICAqIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHsqPX0gX3ZhbHVlIElnbm9yZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYHJlcXVpcmVkYCBpcyBmYWxzZSBvciBpZiBgY2hlY2tlZGAgaXMgdHJ1ZS5cbiAgICovXG4gIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24oX3ZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVxdWlyZWQgfHwgdGhpcy5jaGVja2VkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGFyaWEtcmVxdWlyZWQgbGFiZWwgd2hlbiBgcmVxdWlyZWRgIGlzIGNoYW5nZWQuXG4gICAqL1xuICBfcmVxdWlyZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRmlyZSBgaXJvbi1jaGFuZ2VkYCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAqL1xuICBfY2hlY2tlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jaGVja2VkO1xuICAgIHRoaXMuZmlyZSgnaXJvbi1jaGFuZ2UnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXQgdmFsdWUgdG8gJ29uJyBpZiBpdCBpcyBzZXQgdG8gYHVuZGVmaW5lZGAuXG4gICAqL1xuICBfdmFsdWVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnb24nO1xuICAgIH1cbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IsXG4gIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yLFxuICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBVc2UgYFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5IHNpbWlsYXIgdG8gYElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yYCBhbmQgaXMgY29tcGF0aWJsZVxuICogd2l0aCBoYXZpbmcgYSByaXBwbGUgZWZmZWN0LlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwgPSB7XG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBjaGVja2VkIHN0YXRlIHdpdGggaXRzIHJpcHBsZSBlZmZlY3QuXG4gICAqL1xuICBfY2hlY2tlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbC5fY2hlY2tlZENoYW5nZWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHRoZSBlbGVtZW50J3MgYGFjdGl2ZWAgYW5kIGBjaGVja2VkYCBzdGF0ZS5cbiAgICovXG4gIF9idXR0b25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIFBhcGVyUmlwcGxlQmVoYXZpb3IuX2J1dHRvblN0YXRlQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSBbXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yLFxuICBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtzZXRUb3VjaEFjdGlvbn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcblxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSB7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRvZ2dsZS1iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgLjA4cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yLCAjMDAwMDAwKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXI7XG4gICAgICB9XG5cbiAgICAgIC50b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBsaW5lYXIgLjA4cywgYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgLjA4cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGxpbmVhciAuMDhzLCBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAuMDhzO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IsIHZhcigtLXBhcGVyLWdyZXktNTApKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b247XG4gICAgICB9XG5cbiAgICAgIC50b2dnbGUtYnV0dG9uLmRyYWdnaW5nIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2hlY2tlZF06bm90KFtkaXNhYmxlZF0pKSAudG9nZ2xlLWJhciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWJhci1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvZ2dsZS1idXR0b24tY2hlY2tlZC1iYXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIC50b2dnbGUtYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC4xMjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2NoZWNrZWRdKSAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE2cHgsIDApO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2hlY2tlZF06bm90KFtkaXNhYmxlZF0pKSAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tY2hlY2tlZC1idXR0b24tY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10b2dnbGUtYnV0dG9uLWNoZWNrZWQtYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIC50b2dnbGUtaW5rIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xNHB4O1xuICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtaW5rO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2hlY2tlZF0pIC50b2dnbGUtaW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10b2dnbGUtYnV0dG9uLWNoZWNrZWQtaW5rO1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAvKiBUaGUgdG9nZ2xlIGJ1dHRvbiBoYXMgYW4gYWJzb2x1dGUgcG9zaXRpb24gb2YgLTNweDsgVGhlIGV4dHJhIDFweFxuICAgICAgICAvKiBhY2NvdW50cyBmb3IgdGhlIHRvZ2dsZSBidXR0b24gc2hhZG93IGJveC4gKi9cbiAgICAgICAgbWFyZ2luOiA0cHggMXB4O1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1sYWJlbC1zcGFjaW5nLCA4cHgpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tbGFiZWwtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAvKiBpbnZhbGlkIHN0YXRlICovXG4gICAgICA6aG9zdChbaW52YWxpZF0pIC50b2dnbGUtYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1pbnZhbGlkLWJhci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24taW52YWxpZC1idXR0b24tY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgLnRvZ2dsZS1pbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1pbnZhbGlkLWluay1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cInRvZ2dsZS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJ0b2dnbGVCYXJcIiBjbGFzcz1cInRvZ2dsZS1iYXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0b2dnbGVCdXR0b25cIiBjbGFzcz1cInRvZ2dsZS1idXR0b25cIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0b2dnbGUtbGFiZWxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG5cbiAgYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtTd2l0Y2hdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtc3dpdGNoKVxuXG5gcGFwZXItdG9nZ2xlLWJ1dHRvbmAgcHJvdmlkZXMgYSBPTi9PRkYgc3dpdGNoIHRoYXQgdXNlciBjYW4gdG9nZ2xlIHRoZSBzdGF0ZVxuYnkgdGFwcGluZyBvciBieSBkcmFnZ2luZyB0aGUgc3dpdGNoLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXRvZ2dsZS1idXR0b24+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yYCB8IFNsaWRlciBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAjMDAwMDAwYFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yYCB8IEJ1dHRvbiBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXBhcGVyLWdyZXktNTBgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYC0tZGFyay1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWJhci1jb2xvcmAgfCBTbGlkZXIgYnV0dG9uIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWJ1dHRvbi1jb2xvcmAgfCBCdXR0b24gY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLWNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLXRvZ2dsZS1idXR0b24taW52YWxpZC1iYXItY29sb3JgIHwgU2xpZGVyIGJ1dHRvbiBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLWludmFsaWQtYnV0dG9uLWNvbG9yYCB8IEJ1dHRvbiBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLWludmFsaWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgc2xpZGVyIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHNsaWRlciBidXR0b24gd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBge31gXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1pbmtgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgcmlwcGxlIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWJhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBzbGlkZXIgd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGB7fWBcbmAtLXBhcGVyLXRvZ2dsZS1idXR0b24tY2hlY2tlZC1idXR0b25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgc2xpZGVyIGJ1dHRvbiB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1jaGVja2VkLWlua2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSByaXBwbGUgd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGB7fWBcbmAtLXBhcGVyLXRvZ2dsZS1idXR0b24tbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci10b2dnbGUtYnV0dG9uLWxhYmVsLXNwYWNpbmdgIHwgU3BhY2luZyBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIGJ1dHRvbiB8IGA4cHhgXG5cblRoaXMgZWxlbWVudCBhcHBsaWVzIHRoZSBtaXhpbiBgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlYCBidXQgZG9lcyBub3QgaW1wb3J0IGBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC5cbkluIG9yZGVyIHRvIGFwcGx5IHRoZSBgUm9ib3RvYCBmb250IHRvIHRoaXMgZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItdG9nZ2xlLWJ1dHRvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci10b2dnbGUtYnV0dG9uJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdidXR0b24nLCAnYXJpYS1wcmVzc2VkJzogJ2ZhbHNlJywgdGFiaW5kZXg6IDB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogQGV2ZW50IGlyb24tY2hhbmdlXG4gICAgICAgKi9cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHt0cmFjazogJ19vbnRyYWNrJ30sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRvdWNoQWN0aW9uKHRoaXMsICdwYW4teScpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9vbnRyYWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB0cmFjayA9IGV2ZW50LmRldGFpbDtcbiAgICBpZiAodHJhY2suc3RhdGUgPT09ICdzdGFydCcpIHtcbiAgICAgIHRoaXMuX3RyYWNrU3RhcnQodHJhY2spO1xuICAgIH0gZWxzZSBpZiAodHJhY2suc3RhdGUgPT09ICd0cmFjaycpIHtcbiAgICAgIHRoaXMuX3RyYWNrTW92ZSh0cmFjayk7XG4gICAgfSBlbHNlIGlmICh0cmFjay5zdGF0ZSA9PT0gJ2VuZCcpIHtcbiAgICAgIHRoaXMuX3RyYWNrRW5kKHRyYWNrKTtcbiAgICB9XG4gIH0sXG5cbiAgX3RyYWNrU3RhcnQ6IGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgdGhpcy5fd2lkdGggPSB0aGlzLiQudG9nZ2xlQmFyLm9mZnNldFdpZHRoIC8gMjtcbiAgICAvKlxuICAgICAqIGtlZXAgYW4gdHJhY2stb25seSBjaGVjayBzdGF0ZSB0byBrZWVwIHRoZSBkcmFnZ2luZyBiZWhhdmlvciBzbW9vdGhcbiAgICAgKiB3aGlsZSB0b2dnbGluZyBhY3RpdmF0aW9uc1xuICAgICAqL1xuICAgIHRoaXMuX3RyYWNrQ2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICB0aGlzLiQudG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gIH0sXG5cbiAgX3RyYWNrTW92ZTogZnVuY3Rpb24odHJhY2spIHtcbiAgICB2YXIgZHggPSB0cmFjay5keDtcbiAgICB0aGlzLl94ID0gTWF0aC5taW4oXG4gICAgICAgIHRoaXMuX3dpZHRoLCBNYXRoLm1heCgwLCB0aGlzLl90cmFja0NoZWNrZWQgPyB0aGlzLl93aWR0aCArIGR4IDogZHgpKTtcbiAgICB0aGlzLnRyYW5zbGF0ZTNkKHRoaXMuX3ggKyAncHgnLCAwLCAwLCB0aGlzLiQudG9nZ2xlQnV0dG9uKTtcbiAgICB0aGlzLl91c2VyQWN0aXZhdGUodGhpcy5feCA+ICh0aGlzLl93aWR0aCAvIDIpKTtcbiAgfSxcblxuICBfdHJhY2tFbmQ6IGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgdGhpcy4kLnRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIHRoaXMudHJhbnNmb3JtKCcnLCB0aGlzLiQudG9nZ2xlQnV0dG9uKTtcbiAgfSxcblxuICAvLyBjdXN0b21pemUgdGhlIGVsZW1lbnQncyByaXBwbGVcbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy4kLnRvZ2dsZUJ1dHRvbjtcbiAgICB2YXIgcmlwcGxlID0gUGFwZXJSaXBwbGVCZWhhdmlvci5fY3JlYXRlUmlwcGxlKCk7XG4gICAgcmlwcGxlLmlkID0gJ2luayc7XG4gICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgncmVjZW50ZXJzJywgJycpO1xuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnLCAndG9nZ2xlLWluaycpO1xuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxufSk7XG4iLCIvKipcbiAqIFBhcnNlIG9yIGZvcm1hdCBkYXRlc1xuICogQGNsYXNzIGZlY2hhXG4gKi9cbnZhciBmZWNoYSA9IHt9O1xudmFyIHRva2VuID0gL2R7MSw0fXxNezEsNH18WVkoPzpZWSk/fFN7MSwzfXxEb3xaWnwoW0hoTXNEbV0pXFwxP3xbYUFdfFwiW15cIl0qXCJ8J1teJ10qJy9nO1xudmFyIHR3b0RpZ2l0cyA9ICdcXFxcZFxcXFxkPyc7XG52YXIgdGhyZWVEaWdpdHMgPSAnXFxcXGR7M30nO1xudmFyIGZvdXJEaWdpdHMgPSAnXFxcXGR7NH0nO1xudmFyIHdvcmQgPSAnW15cXFxcc10rJztcbnZhciBsaXRlcmFsID0gL1xcWyhbXl0qPylcXF0vZ207XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC9bfFxcXFx7KClbXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBzaG9ydGVuKGFyciwgc0xlbikge1xuICB2YXIgbmV3QXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBuZXdBcnIucHVzaChhcnJbaV0uc3Vic3RyKDAsIHNMZW4pKTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBtb250aFVwZGF0ZShhcnJOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciBpbmRleCA9IGkxOG5bYXJyTmFtZV0uaW5kZXhPZih2LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdi5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKH5pbmRleCkge1xuICAgICAgZC5tb250aCA9IGluZGV4O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xudmFyIG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbnZhciBtb250aE5hbWVzU2hvcnQgPSBzaG9ydGVuKG1vbnRoTmFtZXMsIDMpO1xudmFyIGRheU5hbWVzU2hvcnQgPSBzaG9ydGVuKGRheU5hbWVzLCAzKTtcbmZlY2hhLmkxOG4gPSB7XG4gIGRheU5hbWVzU2hvcnQ6IGRheU5hbWVzU2hvcnQsXG4gIGRheU5hbWVzOiBkYXlOYW1lcyxcbiAgbW9udGhOYW1lc1Nob3J0OiBtb250aE5hbWVzU2hvcnQsXG4gIG1vbnRoTmFtZXM6IG1vbnRoTmFtZXMsXG4gIGFtUG06IFsnYW0nLCAncG0nXSxcbiAgRG9GbjogZnVuY3Rpb24gRG9GbihEKSB7XG4gICAgcmV0dXJuIEQgKyBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bRCAlIDEwID4gMyA/IDAgOiAoRCAtIEQgJSAxMCAhPT0gMTApICogRCAlIDEwXTtcbiAgfVxufTtcblxudmFyIGZvcm1hdEZsYWdzID0ge1xuICBEOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF0ZSgpO1xuICB9LFxuICBERDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBEbzogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLkRvRm4oZGF0ZU9iai5nZXREYXRlKCkpO1xuICB9LFxuICBkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0RGF5KCk7XG4gIH0sXG4gIGRkOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldERheSgpKTtcbiAgfSxcbiAgZGRkOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4uZGF5TmFtZXNTaG9ydFtkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgZGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzW2RhdGVPYmouZ2V0RGF5KCldO1xuICB9LFxuICBNOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIE1NOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1vbnRoKCkgKyAxKTtcbiAgfSxcbiAgTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1Nob3J0W2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NTU06IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5tb250aE5hbWVzW2RhdGVPYmouZ2V0TW9udGgoKV07XG4gIH0sXG4gIFlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChTdHJpbmcoZGF0ZU9iai5nZXRGdWxsWWVhcigpKSwgNCkuc3Vic3RyKDIpO1xuICB9LFxuICBZWVlZOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDQpO1xuICB9LFxuICBoOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyO1xuICB9LFxuICBoaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgfHwgMTIpO1xuICB9LFxuICBIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKTtcbiAgfSxcbiAgSEg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSk7XG4gIH0sXG4gIG06IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRNaW51dGVzKCk7XG4gIH0sXG4gIG1tOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldE1pbnV0ZXMoKSk7XG4gIH0sXG4gIHM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRTZWNvbmRzKCk7XG4gIH0sXG4gIHNzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldFNlY29uZHMoKSk7XG4gIH0sXG4gIFM6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRlT2JqLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKTtcbiAgfSxcbiAgU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSwgMik7XG4gIH0sXG4gIFNTUzogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG4gIH0sXG4gIGE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0gOiBpMThuLmFtUG1bMV07XG4gIH0sXG4gIEE6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gZGF0ZU9iai5nZXRIb3VycygpIDwgMTIgPyBpMThuLmFtUG1bMF0udG9VcHBlckNhc2UoKSA6IGkxOG4uYW1QbVsxXS50b1VwcGVyQ2FzZSgpO1xuICB9LFxuICBaWjogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHZhciBvID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHJldHVybiAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KTtcbiAgfVxufTtcblxudmFyIHBhcnNlRmxhZ3MgPSB7XG4gIEQ6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5kYXkgPSB2O1xuICB9XSxcbiAgRG86IFt0d29EaWdpdHMgKyB3b3JkLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XSxcbiAgTTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1vbnRoID0gdiAtIDE7XG4gIH1dLFxuICBZWTogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgZGEgPSBuZXcgRGF0ZSgpLCBjZW50ID0gKygnJyArIGRhLmdldEZ1bGxZZWFyKCkpLnN1YnN0cigwLCAyKTtcbiAgICBkLnllYXIgPSAnJyArICh2ID4gNjggPyBjZW50IC0gMSA6IGNlbnQpICsgdjtcbiAgfV0sXG4gIGg6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5ob3VyID0gdjtcbiAgfV0sXG4gIG06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taW51dGUgPSB2O1xuICB9XSxcbiAgczogW3R3b0RpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnNlY29uZCA9IHY7XG4gIH1dLFxuICBZWVlZOiBbZm91ckRpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLnllYXIgPSB2O1xuICB9XSxcbiAgUzogWydcXFxcZCcsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDA7XG4gIH1dLFxuICBTUzogWydcXFxcZHsyfScsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5taWxsaXNlY29uZCA9IHYgKiAxMDtcbiAgfV0sXG4gIFNTUzogW3RocmVlRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2O1xuICB9XSxcbiAgZDogW3R3b0RpZ2l0cywgbm9vcF0sXG4gIGRkZDogW3dvcmQsIG5vb3BdLFxuICBNTU06IFt3b3JkLCBtb250aFVwZGF0ZSgnbW9udGhOYW1lc1Nob3J0JyldLFxuICBNTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXMnKV0sXG4gIGE6IFt3b3JkLCBmdW5jdGlvbiAoZCwgdiwgaTE4bikge1xuICAgIHZhciB2YWwgPSB2LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzBdKSB7XG4gICAgICBkLmlzUG0gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbCA9PT0gaTE4bi5hbVBtWzFdKSB7XG4gICAgICBkLmlzUG0gPSB0cnVlO1xuICAgIH1cbiAgfV0sXG4gIFpaOiBbJ1teXFxcXHNdKj9bXFxcXCtcXFxcLV1cXFxcZFxcXFxkOj9cXFxcZFxcXFxkfFteXFxcXHNdKj9aJywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICB2YXIgcGFydHMgPSAodiArICcnKS5tYXRjaCgvKFsrLV18XFxkXFxkKS9naSksIG1pbnV0ZXM7XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcbiAgICAgIGQudGltZXpvbmVPZmZzZXQgPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cbiAgfV1cbn07XG5wYXJzZUZsYWdzLmRkID0gcGFyc2VGbGFncy5kO1xucGFyc2VGbGFncy5kZGRkID0gcGFyc2VGbGFncy5kZGQ7XG5wYXJzZUZsYWdzLkREID0gcGFyc2VGbGFncy5EO1xucGFyc2VGbGFncy5tbSA9IHBhcnNlRmxhZ3MubTtcbnBhcnNlRmxhZ3MuaGggPSBwYXJzZUZsYWdzLkggPSBwYXJzZUZsYWdzLkhIID0gcGFyc2VGbGFncy5oO1xucGFyc2VGbGFncy5NTSA9IHBhcnNlRmxhZ3MuTTtcbnBhcnNlRmxhZ3Muc3MgPSBwYXJzZUZsYWdzLnM7XG5wYXJzZUZsYWdzLkEgPSBwYXJzZUZsYWdzLmE7XG5cblxuLy8gU29tZSBjb21tb24gZm9ybWF0IHN0cmluZ3NcbmZlY2hhLm1hc2tzID0ge1xuICBkZWZhdWx0OiAnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzJyxcbiAgc2hvcnREYXRlOiAnTS9EL1lZJyxcbiAgbWVkaXVtRGF0ZTogJ01NTSBELCBZWVlZJyxcbiAgbG9uZ0RhdGU6ICdNTU1NIEQsIFlZWVknLFxuICBmdWxsRGF0ZTogJ2RkZGQsIE1NTU0gRCwgWVlZWScsXG4gIHNob3J0VGltZTogJ0hIOm1tJyxcbiAgbWVkaXVtVGltZTogJ0hIOm1tOnNzJyxcbiAgbG9uZ1RpbWU6ICdISDptbTpzcy5TU1MnXG59O1xuXG4vKioqXG4gKiBGb3JtYXQgYSBkYXRlXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtEYXRlfG51bWJlcn0gZGF0ZU9ialxuICogQHBhcmFtIHtzdHJpbmd9IG1hc2sgRm9ybWF0IG9mIHRoZSBkYXRlLCBpLmUuICdtbS1kZC15eScgb3IgJ3Nob3J0RGF0ZSdcbiAqL1xuZmVjaGEuZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIG1hc2ssIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZGF0ZU9iaiA9PT0gJ251bWJlcicpIHtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iaik7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGVPYmopICE9PSAnW29iamVjdCBEYXRlXScgfHwgaXNOYU4oZGF0ZU9iai5nZXRUaW1lKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIERhdGUgaW4gZmVjaGEuZm9ybWF0Jyk7XG4gIH1cblxuICBtYXNrID0gZmVjaGEubWFza3NbbWFza10gfHwgbWFzayB8fCBmZWNoYS5tYXNrc1snZGVmYXVsdCddO1xuXG4gIHZhciBsaXRlcmFscyA9IFtdO1xuXG4gIC8vIE1ha2UgbGl0ZXJhbHMgaW5hY3RpdmUgYnkgcmVwbGFjaW5nIHRoZW0gd2l0aCA/P1xuICBtYXNrID0gbWFzay5yZXBsYWNlKGxpdGVyYWwsIGZ1bmN0aW9uKCQwLCAkMSkge1xuICAgIGxpdGVyYWxzLnB1c2goJDEpO1xuICAgIHJldHVybiAnPz8nO1xuICB9KTtcbiAgLy8gQXBwbHkgZm9ybWF0dGluZyBydWxlc1xuICBtYXNrID0gbWFzay5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICByZXR1cm4gJDAgaW4gZm9ybWF0RmxhZ3MgPyBmb3JtYXRGbGFnc1skMF0oZGF0ZU9iaiwgaTE4bikgOiAkMC5zbGljZSgxLCAkMC5sZW5ndGggLSAxKTtcbiAgfSk7XG4gIC8vIElubGluZSBsaXRlcmFsIHZhbHVlcyBiYWNrIGludG8gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICByZXR1cm4gbWFzay5yZXBsYWNlKC9cXD9cXD8vZywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxzLnNoaWZ0KCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQYXJzZSBhIGRhdGUgc3RyaW5nIGludG8gYW4gb2JqZWN0LCBjaGFuZ2VzIC0gaW50byAvXG4gKiBAbWV0aG9kIHBhcnNlXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0ciBEYXRlIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBEYXRlIHBhcnNlIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV8Ym9vbGVhbn1cbiAqL1xuZmVjaGEucGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0ciwgZm9ybWF0LCBpMThuU2V0dGluZ3MpIHtcbiAgdmFyIGkxOG4gPSBpMThuU2V0dGluZ3MgfHwgZmVjaGEuaTE4bjtcblxuICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZm9ybWF0IGluIGZlY2hhLnBhcnNlJyk7XG4gIH1cblxuICBmb3JtYXQgPSBmZWNoYS5tYXNrc1tmb3JtYXRdIHx8IGZvcm1hdDtcblxuICAvLyBBdm9pZCByZWd1bGFyIGV4cHJlc3Npb24gZGVuaWFsIG9mIHNlcnZpY2UsIGZhaWwgZWFybHkgZm9yIHJlYWxseSBsb25nIHN0cmluZ3NcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9SZWd1bGFyX2V4cHJlc3Npb25fRGVuaWFsX29mX1NlcnZpY2VfLV9SZURvU1xuICBpZiAoZGF0ZVN0ci5sZW5ndGggPiAxMDAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGF0ZUluZm8gPSB7fTtcbiAgdmFyIHBhcnNlSW5mbyA9IFtdO1xuICB2YXIgbmV3Rm9ybWF0ID0gcmVnZXhFc2NhcGUoZm9ybWF0KS5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICBpZiAocGFyc2VGbGFnc1skMF0pIHtcbiAgICAgIHZhciBpbmZvID0gcGFyc2VGbGFnc1skMF07XG4gICAgICBwYXJzZUluZm8ucHVzaChpbmZvWzFdKTtcbiAgICAgIHJldHVybiAnKCcgKyBpbmZvWzBdICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiAkMDtcbiAgfSk7XG4gIHZhciBtYXRjaGVzID0gZGF0ZVN0ci5tYXRjaChuZXcgUmVnRXhwKG5ld0Zvcm1hdCwgJ2knKSk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFyc2VJbmZvW2kgLSAxXShkYXRlSW5mbywgbWF0Y2hlc1tpXSwgaTE4bik7XG4gIH1cblxuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gdHJ1ZSAmJiBkYXRlSW5mby5ob3VyICE9IG51bGwgJiYgK2RhdGVJbmZvLmhvdXIgIT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9ICtkYXRlSW5mby5ob3VyICsgMTI7XG4gIH0gZWxzZSBpZiAoZGF0ZUluZm8uaXNQbSA9PT0gZmFsc2UgJiYgK2RhdGVJbmZvLmhvdXIgPT09IDEyKSB7XG4gICAgZGF0ZUluZm8uaG91ciA9IDA7XG4gIH1cblxuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVJbmZvLnRpbWV6b25lT2Zmc2V0ICE9IG51bGwpIHtcbiAgICBkYXRlSW5mby5taW51dGUgPSArKGRhdGVJbmZvLm1pbnV0ZSB8fCAwKSAtICtkYXRlSW5mby50aW1lem9uZU9mZnNldDtcbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZUluZm8ueWVhciB8fCB0b2RheS5nZXRGdWxsWWVhcigpLCBkYXRlSW5mby5tb250aCB8fCAwLCBkYXRlSW5mby5kYXkgfHwgMSxcbiAgICAgIGRhdGVJbmZvLmhvdXIgfHwgMCwgZGF0ZUluZm8ubWludXRlIHx8IDAsIGRhdGVJbmZvLnNlY29uZCB8fCAwLCBkYXRlSW5mby5taWxsaXNlY29uZCB8fCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZWNoYTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUE0QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNFQTtBQThFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNkJBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE4SUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFLQTs7Ozs7QUFOQTtBQWFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekVBOzs7Ozs7Ozs7Ozs7QUM5TUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
