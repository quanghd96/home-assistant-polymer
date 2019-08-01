(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [8],
  {
    /***/ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js":
      /*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-checkbox/paper-checkbox.js ***!
  \****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral(
            [
              '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in `attached`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>',
            ],
            [
              '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in \\`attached\\`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>',
            ]
          );

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("strip-whitespace", "");
        /**
Material design:
[Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)

`paper-checkbox` is a button that can be either checked or unchecked. User can
tap the checkbox to check or uncheck it. Usually you use checkboxes to allow
user to select multiple options from a set. If you have a single ON/OFF option,
avoid using a single checkbox and use `paper-toggle-button` instead.

Example:

    <paper-checkbox>label</paper-checkbox>

    <paper-checkbox checked> label</paper-checkbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--primary-color`
`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-checkbox-checkmark-color` | Checkmark color | `white`
`--paper-checkbox-label-color` | Label color | `--primary-text-color`
`--paper-checkbox-label-checked-color` | Label color when the input is checked | `--paper-checkbox-label-color`
`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
`--paper-checkbox-label` | Mixin applied to the label | `{}`
`--paper-checkbox-label-checked` | Mixin applied to the label when the input is checked | `{}`
`--paper-checkbox-error-color` | Checkbox color when invalid | `--error-color`
`--paper-checkbox-size` | Size of the checkbox | `18px`
`--paper-checkbox-ink-size` | Size of the ripple | `48px`
`--paper-checkbox-margin` | Margin around the checkbox container | `initial`
`--paper-checkbox-vertical-align` | Vertical alignment of the checkbox container | `middle`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-checkbox",
          behaviors: [
            _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__[
              "PaperCheckedElementBehavior"
            ],
          ],

          /** @private */
          hostAttributes: {
            role: "checkbox",
            "aria-checked": false,
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
            ariaActiveAttribute: {
              type: String,
              value: "aria-checked",
            },
          },
          attached: function attached() {
            // Wait until styles have resolved to check for the default sentinel.
            // See polymer#4009 for more details.
            Object(
              _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__[
                "afterNextRender"
              ]
            )(this, function() {
              var inkSize = this.getComputedStyleValue(
                "--calculated-paper-checkbox-ink-size"
              ).trim(); // If unset, compute and set the default `--paper-checkbox-ink-size`.

              if (inkSize === "-1px") {
                var checkboxSizeText = this.getComputedStyleValue(
                  "--calculated-paper-checkbox-size"
                ).trim();
                var units = "px";
                var unitsMatches = checkboxSizeText.match(/[A-Za-z]+$/);

                if (unitsMatches !== null) {
                  units = unitsMatches[0];
                }

                var checkboxSize = parseFloat(checkboxSizeText);
                var defaultInkSize = (8 / 3) * checkboxSize;

                if (units === "px") {
                  defaultInkSize = Math.floor(defaultInkSize); // The checkbox and ripple need to have the same parity so that their
                  // centers align.

                  if (defaultInkSize % 2 !== checkboxSize % 2) {
                    defaultInkSize++;
                  }
                }

                this.updateStyles({
                  "--paper-checkbox-ink-size": defaultInkSize + units,
                });
              }
            });
          },
          _computeCheckboxClass: function _computeCheckboxClass(
            checked,
            invalid
          ) {
            var className = "";

            if (checked) {
              className += "checked ";
            }

            if (invalid) {
              className += "invalid";
            }

            return className;
          },
          _computeCheckmarkClass: function _computeCheckmarkClass(checked) {
            return checked ? "" : "hidden";
          },
          // create ripple inside the checkboxContainer
          _createRipple: function _createRipple() {
            this._rippleContainer = this.$.checkboxContainer;
            return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
              "PaperInkyFocusBehaviorImpl"
            ]._createRipple.call(this);
          },
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHthZnRlck5leHRSZW5kZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplOiB2YXIoLS1wYXBlci1jaGVja2JveC1zaXplLCAxOHB4KTtcbiAgICAvKiAtMXB4IGlzIGEgc2VudGluZWwgZm9yIHRoZSBkZWZhdWx0IGFuZCBpcyByZXBsYWNlZCBpbiBcXGBhdHRhY2hlZFxcYC4gKi9cbiAgICAtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemU6IHZhcigtLXBhcGVyLWNoZWNrYm94LWluay1zaXplLCAtMXB4KTtcbiAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICA6aG9zdChbaGlkZGVuXSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0KDpmb2N1cykge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2NoZWNrYm94Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKTtcbiAgICBtaW4td2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSk7XG4gICAgbWFyZ2luOiB2YXIoLS1wYXBlci1jaGVja2JveC1tYXJnaW4sIGluaXRpYWwpO1xuICAgIHZlcnRpY2FsLWFsaWduOiB2YXIoLS1wYXBlci1jaGVja2JveC12ZXJ0aWNhbC1hbGlnbiwgbWlkZGxlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgI2luayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLyogQ2VudGVyIHRoZSByaXBwbGUgaW4gdGhlIGNoZWNrYm94IGJ5IG5lZ2F0aXZlIG9mZnNldHRpbmcgaXQgYnlcbiAgICAgKiAoaW5rV2lkdGggLSByaXBwbGVXaWR0aCkgLyAyICovXG4gICAgdG9wOiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgbGVmdDogY2FsYygwcHggLSAodmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSkgLSB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKSAvIDIpO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAjaW5rOmRpcihydGwpIHtcbiAgICByaWdodDogY2FsYygwcHggLSAodmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSkgLSB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKSAvIDIpO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICAjaW5rW2NoZWNrZWRdIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gICNjaGVja2JveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zLCBib3JkZXItY29sb3IgMTQwbXM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcywgYm9yZGVyLWNvbG9yIDE0MG1zO1xuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgfVxuXG4gIC8qIGNoZWNrYm94IGNoZWNrZWQgYW5pbWF0aW9ucyAqL1xuICAjY2hlY2tib3guY2hlY2tlZCAjY2hlY2ttYXJrIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2ttYXJrLWV4cGFuZCAxNDBtcyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGNoZWNrbWFyay1leHBhbmQgMTQwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItY2hlY2tib3gtYW5pbWF0aW9uLWR1cmF0aW9uLCAxNDBtcyk7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVja21hcmstZXhwYW5kIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNoZWNrbWFyay1leHBhbmQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrYm94LmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gICNjaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzYlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IGNhbGMoMi8xNSAqIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMi8xNSAqIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2ttYXJrLWNvbG9yLCB3aGl0ZSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA5NyUgODYlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDk3JSA4NiU7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIHByb3RlY3QgYWdhaW5zdCBwYWdlLWxldmVsIGJveC1zaXppbmcgKi9cbiAgfVxuXG4gICNjaGVja21hcms6ZGlyKHJ0bCkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE0JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTQlO1xuICB9XG5cbiAgLyogbGFiZWwgKi9cbiAgI2NoZWNrYm94TGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmcsIDhweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgQGFwcGx5IC0tcGFwZXItY2hlY2tib3gtbGFiZWw7XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNjaGVja2JveExhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZC1jb2xvciwgdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpKTtcbiAgICBAYXBwbHkgLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkO1xuICB9XG5cbiAgI2NoZWNrYm94TGFiZWw6ZGlyKHJ0bCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmcsIDhweCk7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgI2NoZWNrYm94TGFiZWxbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRpc2FibGVkIHN0YXRlICovXG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI2NoZWNrYm94IHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXVtjaGVja2VkXSkgI2NoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF0pICNjaGVja2JveExhYmVsICB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuXG4gIC8qIGludmFsaWQgc3RhdGUgKi9cbiAgI2NoZWNrYm94LmludmFsaWQ6bm90KC5jaGVja2VkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1lcnJvci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBpZD1cImNoZWNrYm94Q29udGFpbmVyXCI+XG4gIDxkaXYgaWQ9XCJjaGVja2JveFwiIGNsYXNzJD1cIltbX2NvbXB1dGVDaGVja2JveENsYXNzKGNoZWNrZWQsIGludmFsaWQpXV1cIj5cbiAgICA8ZGl2IGlkPVwiY2hlY2ttYXJrXCIgY2xhc3MkPVwiW1tfY29tcHV0ZUNoZWNrbWFya0NsYXNzKGNoZWNrZWQpXV1cIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBpZD1cImNoZWNrYm94TGFiZWxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bQ2hlY2tib3hdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtY2hlY2tib3gpXG5cbmBwYXBlci1jaGVja2JveGAgaXMgYSBidXR0b24gdGhhdCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQgb3IgdW5jaGVja2VkLiBVc2VyIGNhblxudGFwIHRoZSBjaGVja2JveCB0byBjaGVjayBvciB1bmNoZWNrIGl0LiBVc3VhbGx5IHlvdSB1c2UgY2hlY2tib3hlcyB0byBhbGxvd1xudXNlciB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucyBmcm9tIGEgc2V0LiBJZiB5b3UgaGF2ZSBhIHNpbmdsZSBPTi9PRkYgb3B0aW9uLFxuYXZvaWQgdXNpbmcgYSBzaW5nbGUgY2hlY2tib3ggYW5kIHVzZSBgcGFwZXItdG9nZ2xlLWJ1dHRvbmAgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jaGVja2JveD5sYWJlbDwvcGFwZXItY2hlY2tib3g+XG5cbiAgICA8cGFwZXItY2hlY2tib3ggY2hlY2tlZD4gbGFiZWw8L3BhcGVyLWNoZWNrYm94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3JgIHwgQ2hlY2tib3ggYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGB0cmFuc3BhcmVudGBcbmAtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcmAgfCBDaGVja2JveCBib3JkZXIgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja21hcmstY29sb3JgIHwgQ2hlY2ttYXJrIGNvbG9yIHwgYHdoaXRlYFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkLWNvbG9yYCB8IExhYmVsIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmdgIHwgU3BhY2luZyBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIGNoZWNrYm94IHwgYDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtZXJyb3ItY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1zaXplYCB8IFNpemUgb2YgdGhlIGNoZWNrYm94IHwgYDE4cHhgXG5gLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZWAgfCBTaXplIG9mIHRoZSByaXBwbGUgfCBgNDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LW1hcmdpbmAgfCBNYXJnaW4gYXJvdW5kIHRoZSBjaGVja2JveCBjb250YWluZXIgfCBgaW5pdGlhbGBcbmAtLXBhcGVyLWNoZWNrYm94LXZlcnRpY2FsLWFsaWduYCB8IFZlcnRpY2FsIGFsaWdubWVudCBvZiB0aGUgY2hlY2tib3ggY29udGFpbmVyIHwgYG1pZGRsZWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItY2hlY2tib3gnLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2NoZWNrYm94JywgJ2FyaWEtY2hlY2tlZCc6IGZhbHNlLCB0YWJpbmRleDogMH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuICAgIGFyaWFBY3RpdmVBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYXJpYS1jaGVja2VkJ31cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBzdHlsZXMgaGF2ZSByZXNvbHZlZCB0byBjaGVjayBmb3IgdGhlIGRlZmF1bHQgc2VudGluZWwuXG4gICAgLy8gU2VlIHBvbHltZXIjNDAwOSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmtTaXplID1cbiAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplJylcbiAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgIC8vIElmIHVuc2V0LCBjb21wdXRlIGFuZCBzZXQgdGhlIGRlZmF1bHQgYC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemVgLlxuICAgICAgaWYgKGlua1NpemUgPT09ICctMXB4Jykge1xuICAgICAgICB2YXIgY2hlY2tib3hTaXplVGV4dCA9XG4gICAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUnKVxuICAgICAgICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgdmFyIHVuaXRzID0gJ3B4JztcbiAgICAgICAgdmFyIHVuaXRzTWF0Y2hlcyA9IGNoZWNrYm94U2l6ZVRleHQubWF0Y2goL1tBLVphLXpdKyQvKTtcbiAgICAgICAgaWYgKHVuaXRzTWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHVuaXRzID0gdW5pdHNNYXRjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoZWNrYm94U2l6ZSA9IHBhcnNlRmxvYXQoY2hlY2tib3hTaXplVGV4dCk7XG4gICAgICAgIHZhciBkZWZhdWx0SW5rU2l6ZSA9ICg4IC8gMykgKiBjaGVja2JveFNpemU7XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAncHgnKSB7XG4gICAgICAgICAgZGVmYXVsdElua1NpemUgPSBNYXRoLmZsb29yKGRlZmF1bHRJbmtTaXplKTtcblxuICAgICAgICAgIC8vIFRoZSBjaGVja2JveCBhbmQgcmlwcGxlIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBwYXJpdHkgc28gdGhhdCB0aGVpclxuICAgICAgICAgIC8vIGNlbnRlcnMgYWxpZ24uXG4gICAgICAgICAgaWYgKGRlZmF1bHRJbmtTaXplICUgMiAhPT0gY2hlY2tib3hTaXplICUgMikge1xuICAgICAgICAgICAgZGVmYXVsdElua1NpemUrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgICAgJy0tcGFwZXItY2hlY2tib3gtaW5rLXNpemUnOiBkZWZhdWx0SW5rU2l6ZSArIHVuaXRzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrYm94Q2xhc3M6IGZ1bmN0aW9uKGNoZWNrZWQsIGludmFsaWQpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnY2hlY2tlZCAnO1xuICAgIH1cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY2xhc3NOYW1lICs9ICdpbnZhbGlkJztcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrbWFya0NsYXNzOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgcmV0dXJuIGNoZWNrZWQgPyAnJyA6ICdoaWRkZW4nO1xuICB9LFxuXG4gIC8vIGNyZWF0ZSByaXBwbGUgaW5zaWRlIHRoZSBjaGVja2JveENvbnRhaW5lclxuICBfY3JlYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLiQuY2hlY2tib3hDb250YWluZXI7XG4gICAgcmV0dXJuIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsLl9jcmVhdGVSaXBwbGUuY2FsbCh0aGlzKTtcbiAgfVxuXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFxTEE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
