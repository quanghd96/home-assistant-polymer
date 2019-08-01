(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~dialog-config-flow"],
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

        var IronCheckedElementBehaviorImpl = {
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
          created: function created() {
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
          _getValidity: function _getValidity(_value) {
            return this.disabled || !this.required || this.checked;
          },

          /**
           * Update the aria-required label when `required` is changed.
           */
          _requiredChanged: function _requiredChanged() {
            if (this.required) {
              this.setAttribute("aria-required", "true");
            } else {
              this.removeAttribute("aria-required");
            }
          },

          /**
           * Fire `iron-changed` when the checked state changes.
           */
          _checkedChanged: function _checkedChanged() {
            this.active = this.checked;
            this.fire("iron-change");
          },

          /**
           * Reset value to 'on' if it is set to `undefined`.
           */
          _valueChanged: function _valueChanged() {
            if (this.value === undefined || this.value === null) {
              this.value = "on";
            }
          },
        };
        /** @polymerBehavior */

        var IronCheckedElementBehavior = [
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

        var PaperCheckedElementBehaviorImpl = {
          /**
           * Synchronizes the element's checked state with its ripple effect.
           */
          _checkedChanged: function _checkedChanged() {
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
          _buttonStateChanged: function _buttonStateChanged() {
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

        var PaperCheckedElementBehavior = [
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

    /***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
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
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n',
          ]);

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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /**
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-dialog-scrollable",
          properties: {
            /**
             * The dialog element that implements `Polymer.PaperDialogBehavior`
             * containing this element.
             * @type {?Node}
             */
            dialogElement: {
              type: Object,
            },
          },

          /**
           * Returns the scrolling element.
           */
          get scrollTarget() {
            return this.$.scrollable;
          },

          ready: function ready() {
            this._ensureTarget();

            this.classList.add("no-padding");
          },
          attached: function attached() {
            this._ensureTarget();

            requestAnimationFrame(this.updateScrollState.bind(this));
          },
          updateScrollState: function updateScrollState() {
            this.toggleClass("is-scrolled", this.scrollTarget.scrollTop > 0);
            this.toggleClass(
              "can-scroll",
              this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight
            );
            this.toggleClass(
              "scrolled-to-bottom",
              this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
                this.scrollTarget.scrollHeight
            );
          },
          _ensureTarget: function _ensureTarget() {
            // Read parentElement instead of parentNode in order to skip shadowRoots.
            this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
            // scrollTarget to host.

            if (
              this.dialogElement &&
              this.dialogElement.behaviors &&
              this.dialogElement.behaviors.indexOf(
                _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
                  "PaperDialogBehaviorImpl"
                ]
              ) >= 0
            ) {
              this.dialogElement.sizingTarget = this.scrollTarget;
              this.scrollTarget.classList.remove("fit");
            } else if (this.dialogElement) {
              this.scrollTarget.classList.add("fit");
            }
          },
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
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
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
          ]);

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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-item-body",
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-lite.js ***!
  \*******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
          ]);

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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-spinner-lite",
          behaviors: [
            _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "PaperSpinnerBehavior"
            ],
          ],
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
      /*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
          ]);

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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-spinner",
          behaviors: [
            _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "PaperSpinnerBehavior"
            ],
          ],
        });

        /***/
      },

    /***/ "./node_modules/fuse.js/dist/fuse.js":
      /*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(module) {
          var __WEBPACK_AMD_DEFINE_FACTORY__,
            __WEBPACK_AMD_DEFINE_ARRAY__,
            __WEBPACK_AMD_DEFINE_RESULT__;
          function _typeof(obj) {
            if (
              typeof Symbol === "function" &&
              typeof Symbol.iterator === "symbol"
            ) {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          /*!
           * Fuse.js v3.4.4 - Lightweight fuzzy-search (http://fusejs.io)
           *
           * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
           * All Rights Reserved. Apache Software License 2.0
           *
           * http://www.apache.org/licenses/LICENSE-2.0
           */
          !(function(e, t) {
            "object" == (false ? undefined : _typeof(exports)) &&
            "object" == (false ? undefined : _typeof(module))
              ? (module.exports = t())
              : true
              ? !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                (__WEBPACK_AMD_DEFINE_FACTORY__ = t),
                (__WEBPACK_AMD_DEFINE_RESULT__ =
                  typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                    ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                        exports,
                        __WEBPACK_AMD_DEFINE_ARRAY__
                      )
                    : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
              : undefined;
          })(this, function() {
            return (function(e) {
              var t = {};

              function n(r) {
                if (t[r]) return t[r].exports;
                var o = (t[r] = {
                  i: r,
                  l: !1,
                  exports: {},
                });
                return (
                  e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
                );
              }

              return (
                (n.m = e),
                (n.c = t),
                (n.d = function(e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, {
                      enumerable: !0,
                      get: r,
                    });
                }),
                (n.r = function(e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", {
                      value: !0,
                    });
                }),
                (n.t = function(e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" == _typeof(e) && e && e.__esModule)
                    return e;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var o in e) {
                      n.d(
                        r,
                        o,
                        function(t) {
                          return e[t];
                        }.bind(null, o)
                      );
                    }
                  return r;
                }),
                (n.n = function(e) {
                  var t =
                    e && e.__esModule
                      ? function() {
                          return e.default;
                        }
                      : function() {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function(e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 1))
              );
            })([
              function(e, t) {
                e.exports = function(e) {
                  return Array.isArray
                    ? Array.isArray(e)
                    : "[object Array]" === Object.prototype.toString.call(e);
                };
              },
              function(e, t, n) {
                function r(e) {
                  return (r =
                    "function" == typeof Symbol &&
                    "symbol" == _typeof(Symbol.iterator)
                      ? function(e) {
                          return _typeof(e);
                        }
                      : function(e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : _typeof(e);
                        })(e);
                }

                function o(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }

                var i = n(2),
                  a = n(8),
                  s = n(0),
                  c = (function() {
                    function e(t, n) {
                      var r = n.location,
                        o = void 0 === r ? 0 : r,
                        i = n.distance,
                        s = void 0 === i ? 100 : i,
                        c = n.threshold,
                        h = void 0 === c ? 0.6 : c,
                        l = n.maxPatternLength,
                        u = void 0 === l ? 32 : l,
                        f = n.caseSensitive,
                        d = void 0 !== f && f,
                        v = n.tokenSeparator,
                        p = void 0 === v ? / +/g : v,
                        g = n.findAllMatches,
                        y = void 0 !== g && g,
                        m = n.minMatchCharLength,
                        k = void 0 === m ? 1 : m,
                        S = n.id,
                        x = void 0 === S ? null : S,
                        b = n.keys,
                        M = void 0 === b ? [] : b,
                        _ = n.shouldSort,
                        L = void 0 === _ || _,
                        w = n.getFn,
                        A = void 0 === w ? a : w,
                        C = n.sortFn,
                        I =
                          void 0 === C
                            ? function(e, t) {
                                return e.score - t.score;
                              }
                            : C,
                        O = n.tokenize,
                        j = void 0 !== O && O,
                        P = n.matchAllTokens,
                        F = void 0 !== P && P,
                        T = n.includeMatches,
                        z = void 0 !== T && T,
                        E = n.includeScore,
                        K = void 0 !== E && E,
                        $ = n.verbose,
                        J = void 0 !== $ && $;
                      !(function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.options = {
                          location: o,
                          distance: s,
                          threshold: h,
                          maxPatternLength: u,
                          isCaseSensitive: d,
                          tokenSeparator: p,
                          findAllMatches: y,
                          minMatchCharLength: k,
                          id: x,
                          keys: M,
                          includeMatches: z,
                          includeScore: K,
                          shouldSort: L,
                          getFn: A,
                          sortFn: I,
                          verbose: J,
                          tokenize: j,
                          matchAllTokens: F,
                        }),
                        this.setCollection(t);
                    }

                    var t, n, c;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "setCollection",
                          value: function value(e) {
                            return (this.list = e), e;
                          },
                        },
                        {
                          key: "search",
                          value: function value(e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {
                                    limit: !1,
                                  };

                            this._log(
                              '---------\nSearch pattern: "'.concat(e, '"')
                            );

                            var n = this._prepareSearchers(e),
                              r = n.tokenSearchers,
                              o = n.fullSearcher,
                              i = this._search(r, o),
                              a = i.weights,
                              s = i.results;

                            return (
                              this._computeScore(a, s),
                              this.options.shouldSort && this._sort(s),
                              t.limit &&
                                "number" == typeof t.limit &&
                                (s = s.slice(0, t.limit)),
                              this._format(s)
                            );
                          },
                        },
                        {
                          key: "_prepareSearchers",
                          value: function value() {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : "",
                              t = [];
                            if (this.options.tokenize)
                              for (
                                var n = e.split(this.options.tokenSeparator),
                                  r = 0,
                                  o = n.length;
                                r < o;
                                r += 1
                              ) {
                                t.push(new i(n[r], this.options));
                              }
                            return {
                              tokenSearchers: t,
                              fullSearcher: new i(e, this.options),
                            };
                          },
                        },
                        {
                          key: "_search",
                          value: function value() {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : [],
                              t = arguments.length > 1 ? arguments[1] : void 0,
                              n = this.list,
                              r = {},
                              o = [];

                            if ("string" == typeof n[0]) {
                              for (var i = 0, a = n.length; i < a; i += 1) {
                                this._analyze(
                                  {
                                    key: "",
                                    value: n[i],
                                    record: i,
                                    index: i,
                                  },
                                  {
                                    resultMap: r,
                                    results: o,
                                    tokenSearchers: e,
                                    fullSearcher: t,
                                  }
                                );
                              }

                              return {
                                weights: null,
                                results: o,
                              };
                            }

                            for (
                              var s = {}, c = 0, h = n.length;
                              c < h;
                              c += 1
                            ) {
                              for (
                                var l = n[c],
                                  u = 0,
                                  f = this.options.keys.length;
                                u < f;
                                u += 1
                              ) {
                                var d = this.options.keys[u];

                                if ("string" != typeof d) {
                                  if (
                                    ((s[d.name] = {
                                      weight: 1 - d.weight || 1,
                                    }),
                                    d.weight <= 0 || d.weight > 1)
                                  )
                                    throw new Error(
                                      "Key weight has to be > 0 and <= 1"
                                    );
                                  d = d.name;
                                } else
                                  s[d] = {
                                    weight: 1,
                                  };

                                this._analyze(
                                  {
                                    key: d,
                                    value: this.options.getFn(l, d),
                                    record: l,
                                    index: c,
                                  },
                                  {
                                    resultMap: r,
                                    results: o,
                                    tokenSearchers: e,
                                    fullSearcher: t,
                                  }
                                );
                              }
                            }

                            return {
                              weights: s,
                              results: o,
                            };
                          },
                        },
                        {
                          key: "_analyze",
                          value: function value(e, t) {
                            var n = e.key,
                              r = e.arrayIndex,
                              o = void 0 === r ? -1 : r,
                              i = e.value,
                              a = e.record,
                              c = e.index,
                              h = t.tokenSearchers,
                              l = void 0 === h ? [] : h,
                              u = t.fullSearcher,
                              f = void 0 === u ? [] : u,
                              d = t.resultMap,
                              v = void 0 === d ? {} : d,
                              p = t.results,
                              g = void 0 === p ? [] : p;

                            if (null != i) {
                              var y = !1,
                                m = -1,
                                k = 0;

                              if ("string" == typeof i) {
                                this._log("\nKey: ".concat("" === n ? "-" : n));

                                var S = f.search(i);

                                if (
                                  (this._log(
                                    'Full text: "'
                                      .concat(i, '", score: ')
                                      .concat(S.score)
                                  ),
                                  this.options.tokenize)
                                ) {
                                  for (
                                    var x = i.split(
                                        this.options.tokenSeparator
                                      ),
                                      b = [],
                                      M = 0;
                                    M < l.length;
                                    M += 1
                                  ) {
                                    var _ = l[M];

                                    this._log(
                                      '\nPattern: "'.concat(_.pattern, '"')
                                    );

                                    for (
                                      var L = !1, w = 0;
                                      w < x.length;
                                      w += 1
                                    ) {
                                      var A = x[w],
                                        C = _.search(A),
                                        I = {};

                                      C.isMatch
                                        ? ((I[A] = C.score),
                                          (y = !0),
                                          (L = !0),
                                          b.push(C.score))
                                        : ((I[A] = 1),
                                          this.options.matchAllTokens ||
                                            b.push(1)),
                                        this._log(
                                          'Token: "'
                                            .concat(A, '", score: ')
                                            .concat(I[A])
                                        );
                                    }

                                    L && (k += 1);
                                  }

                                  m = b[0];

                                  for (var O = b.length, j = 1; j < O; j += 1) {
                                    m += b[j];
                                  }

                                  (m /= O),
                                    this._log("Token score average:", m);
                                }

                                var P = S.score;
                                m > -1 && (P = (P + m) / 2),
                                  this._log("Score average:", P);
                                var F =
                                  !this.options.tokenize ||
                                  !this.options.matchAllTokens ||
                                  k >= l.length;

                                if (
                                  (this._log("\nCheck Matches: ".concat(F)),
                                  (y || S.isMatch) && F)
                                ) {
                                  var T = v[c];
                                  T
                                    ? T.output.push({
                                        key: n,
                                        arrayIndex: o,
                                        value: i,
                                        score: P,
                                        matchedIndices: S.matchedIndices,
                                      })
                                    : ((v[c] = {
                                        item: a,
                                        output: [
                                          {
                                            key: n,
                                            arrayIndex: o,
                                            value: i,
                                            score: P,
                                            matchedIndices: S.matchedIndices,
                                          },
                                        ],
                                      }),
                                      g.push(v[c]));
                                }
                              } else if (s(i))
                                for (var z = 0, E = i.length; z < E; z += 1) {
                                  this._analyze(
                                    {
                                      key: n,
                                      arrayIndex: z,
                                      value: i[z],
                                      record: a,
                                      index: c,
                                    },
                                    {
                                      resultMap: v,
                                      results: g,
                                      tokenSearchers: l,
                                      fullSearcher: f,
                                    }
                                  );
                                }
                            }
                          },
                        },
                        {
                          key: "_computeScore",
                          value: function value(e, t) {
                            this._log("\n\nComputing score:\n");

                            for (var n = 0, r = t.length; n < r; n += 1) {
                              for (
                                var o = t[n].output,
                                  i = o.length,
                                  a = 1,
                                  s = 1,
                                  c = 0;
                                c < i;
                                c += 1
                              ) {
                                var h = e ? e[o[c].key].weight : 1,
                                  l =
                                    (1 === h
                                      ? o[c].score
                                      : o[c].score || 0.001) * h;
                                1 !== h
                                  ? (s = Math.min(s, l))
                                  : ((o[c].nScore = l), (a *= l));
                              }

                              (t[n].score = 1 === s ? a : s), this._log(t[n]);
                            }
                          },
                        },
                        {
                          key: "_sort",
                          value: function value(e) {
                            this._log("\n\nSorting...."),
                              e.sort(this.options.sortFn);
                          },
                        },
                        {
                          key: "_format",
                          value: function value(e) {
                            var t = [];

                            if (this.options.verbose) {
                              var n = [];
                              this._log(
                                "\n\nOutput:\n\n",
                                JSON.stringify(e, function(e, t) {
                                  if ("object" === r(t) && null !== t) {
                                    if (-1 !== n.indexOf(t)) return;
                                    n.push(t);
                                  }

                                  return t;
                                })
                              ),
                                (n = null);
                            }

                            var o = [];
                            this.options.includeMatches &&
                              o.push(function(e, t) {
                                var n = e.output;
                                t.matches = [];

                                for (var r = 0, o = n.length; r < o; r += 1) {
                                  var i = n[r];

                                  if (0 !== i.matchedIndices.length) {
                                    var a = {
                                      indices: i.matchedIndices,
                                      value: i.value,
                                    };
                                    i.key && (a.key = i.key),
                                      i.hasOwnProperty("arrayIndex") &&
                                        i.arrayIndex > -1 &&
                                        (a.arrayIndex = i.arrayIndex),
                                      t.matches.push(a);
                                  }
                                }
                              }),
                              this.options.includeScore &&
                                o.push(function(e, t) {
                                  t.score = e.score;
                                });

                            for (var i = 0, a = e.length; i < a; i += 1) {
                              var s = e[i];

                              if (
                                (this.options.id &&
                                  (s.item = this.options.getFn(
                                    s.item,
                                    this.options.id
                                  )[0]),
                                o.length)
                              ) {
                                for (
                                  var c = {
                                      item: s.item,
                                    },
                                    h = 0,
                                    l = o.length;
                                  h < l;
                                  h += 1
                                ) {
                                  o[h](s, c);
                                }

                                t.push(c);
                              } else t.push(s.item);
                            }

                            return t;
                          },
                        },
                        {
                          key: "_log",
                          value: function value() {
                            var e;
                            this.options.verbose &&
                              (e = console).log.apply(e, arguments);
                          },
                        },
                      ]) && o(t.prototype, n),
                      c && o(t, c),
                      e
                    );
                  })();

                e.exports = c;
              },
              function(e, t, n) {
                function r(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }

                var o = n(3),
                  i = n(4),
                  a = n(7),
                  s = (function() {
                    function e(t, n) {
                      var r = n.location,
                        o = void 0 === r ? 0 : r,
                        i = n.distance,
                        s = void 0 === i ? 100 : i,
                        c = n.threshold,
                        h = void 0 === c ? 0.6 : c,
                        l = n.maxPatternLength,
                        u = void 0 === l ? 32 : l,
                        f = n.isCaseSensitive,
                        d = void 0 !== f && f,
                        v = n.tokenSeparator,
                        p = void 0 === v ? / +/g : v,
                        g = n.findAllMatches,
                        y = void 0 !== g && g,
                        m = n.minMatchCharLength,
                        k = void 0 === m ? 1 : m;
                      !(function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.options = {
                          location: o,
                          distance: s,
                          threshold: h,
                          maxPatternLength: u,
                          isCaseSensitive: d,
                          tokenSeparator: p,
                          findAllMatches: y,
                          minMatchCharLength: k,
                        }),
                        (this.pattern = this.options.isCaseSensitive
                          ? t
                          : t.toLowerCase()),
                        this.pattern.length <= u &&
                          (this.patternAlphabet = a(this.pattern));
                    }

                    var t, n, s;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "search",
                          value: function value(e) {
                            if (
                              (this.options.isCaseSensitive ||
                                (e = e.toLowerCase()),
                              this.pattern === e)
                            )
                              return {
                                isMatch: !0,
                                score: 0,
                                matchedIndices: [[0, e.length - 1]],
                              };
                            var t = this.options,
                              n = t.maxPatternLength,
                              r = t.tokenSeparator;
                            if (this.pattern.length > n)
                              return o(e, this.pattern, r);
                            var a = this.options,
                              s = a.location,
                              c = a.distance,
                              h = a.threshold,
                              l = a.findAllMatches,
                              u = a.minMatchCharLength;
                            return i(e, this.pattern, this.patternAlphabet, {
                              location: s,
                              distance: c,
                              threshold: h,
                              findAllMatches: l,
                              minMatchCharLength: u,
                            });
                          },
                        },
                      ]) && r(t.prototype, n),
                      s && r(t, s),
                      e
                    );
                  })();

                e.exports = s;
              },
              function(e, t) {
                var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

                e.exports = function(e, t) {
                  var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : / +/g,
                    o = new RegExp(t.replace(n, "\\$&").replace(r, "|")),
                    i = e.match(o),
                    a = !!i,
                    s = [];
                  if (a)
                    for (var c = 0, h = i.length; c < h; c += 1) {
                      var l = i[c];
                      s.push([e.indexOf(l), l.length - 1]);
                    }
                  return {
                    score: a ? 0.5 : 1,
                    isMatch: a,
                    matchedIndices: s,
                  };
                };
              },
              function(e, t, n) {
                var r = n(5),
                  o = n(6);

                e.exports = function(e, t, n, i) {
                  for (
                    var a = i.location,
                      s = void 0 === a ? 0 : a,
                      c = i.distance,
                      h = void 0 === c ? 100 : c,
                      l = i.threshold,
                      u = void 0 === l ? 0.6 : l,
                      f = i.findAllMatches,
                      d = void 0 !== f && f,
                      v = i.minMatchCharLength,
                      p = void 0 === v ? 1 : v,
                      g = s,
                      y = e.length,
                      m = u,
                      k = e.indexOf(t, g),
                      S = t.length,
                      x = [],
                      b = 0;
                    b < y;
                    b += 1
                  ) {
                    x[b] = 0;
                  }

                  if (-1 !== k) {
                    var M = r(t, {
                      errors: 0,
                      currentLocation: k,
                      expectedLocation: g,
                      distance: h,
                    });

                    if (
                      ((m = Math.min(M, m)),
                      -1 !== (k = e.lastIndexOf(t, g + S)))
                    ) {
                      var _ = r(t, {
                        errors: 0,
                        currentLocation: k,
                        expectedLocation: g,
                        distance: h,
                      });

                      m = Math.min(_, m);
                    }
                  }

                  k = -1;

                  for (
                    var L = [], w = 1, A = S + y, C = 1 << (S - 1), I = 0;
                    I < S;
                    I += 1
                  ) {
                    for (var O = 0, j = A; O < j; ) {
                      r(t, {
                        errors: I,
                        currentLocation: g + j,
                        expectedLocation: g,
                        distance: h,
                      }) <= m
                        ? (O = j)
                        : (A = j),
                        (j = Math.floor((A - O) / 2 + O));
                    }

                    A = j;
                    var P = Math.max(1, g - j + 1),
                      F = d ? y : Math.min(g + j, y) + S,
                      T = Array(F + 2);
                    T[F + 1] = (1 << I) - 1;

                    for (var z = F; z >= P; z -= 1) {
                      var E = z - 1,
                        K = n[e.charAt(E)];

                      if (
                        (K && (x[E] = 1),
                        (T[z] = ((T[z + 1] << 1) | 1) & K),
                        0 !== I &&
                          (T[z] |= ((L[z + 1] | L[z]) << 1) | 1 | L[z + 1]),
                        T[z] & C &&
                          (w = r(t, {
                            errors: I,
                            currentLocation: E,
                            expectedLocation: g,
                            distance: h,
                          })) <= m)
                      ) {
                        if (((m = w), (k = E) <= g)) break;
                        P = Math.max(1, 2 * g - k);
                      }
                    }

                    if (
                      r(t, {
                        errors: I + 1,
                        currentLocation: g,
                        expectedLocation: g,
                        distance: h,
                      }) > m
                    )
                      break;
                    L = T;
                  }

                  return {
                    isMatch: k >= 0,
                    score: 0 === w ? 0.001 : w,
                    matchedIndices: o(x, p),
                  };
                };
              },
              function(e, t) {
                e.exports = function(e, t) {
                  var n = t.errors,
                    r = void 0 === n ? 0 : n,
                    o = t.currentLocation,
                    i = void 0 === o ? 0 : o,
                    a = t.expectedLocation,
                    s = void 0 === a ? 0 : a,
                    c = t.distance,
                    h = void 0 === c ? 100 : c,
                    l = r / e.length,
                    u = Math.abs(s - i);
                  return h ? l + u / h : u ? 1 : l;
                };
              },
              function(e, t) {
                e.exports = function() {
                  for (
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      n = [],
                      r = -1,
                      o = -1,
                      i = 0,
                      a = e.length;
                    i < a;
                    i += 1
                  ) {
                    var s = e[i];
                    s && -1 === r
                      ? (r = i)
                      : s ||
                        -1 === r ||
                        ((o = i - 1) - r + 1 >= t && n.push([r, o]), (r = -1));
                  }

                  return e[i - 1] && i - r >= t && n.push([r, i - 1]), n;
                };
              },
              function(e, t) {
                e.exports = function(e) {
                  for (var t = {}, n = e.length, r = 0; r < n; r += 1) {
                    t[e.charAt(r)] = 0;
                  }

                  for (var o = 0; o < n; o += 1) {
                    t[e.charAt(o)] |= 1 << (n - o - 1);
                  }

                  return t;
                };
              },
              function(e, t, n) {
                var r = n(0);

                e.exports = function(e, t) {
                  return (function e(t, n, o) {
                    if (n) {
                      var i = n.indexOf("."),
                        a = n,
                        s = null;
                      -1 !== i && ((a = n.slice(0, i)), (s = n.slice(i + 1)));
                      var c = t[a];
                      if (null != c)
                        if (
                          s ||
                          ("string" != typeof c && "number" != typeof c)
                        ) {
                          if (r(c))
                            for (var h = 0, l = c.length; h < l; h += 1) {
                              e(c[h], s, o);
                            }
                          else s && e(c, s, o);
                        } else o.push(c.toString());
                    } else o.push(t);

                    return o;
                  })(e, t, []);
                };
              },
            ]);
          });
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/lit-html/directives/style-map.js":
      /*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
      /*! exports provided: styleMap */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "styleMap",
          function() {
            return styleMap;
          }
        );
        /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"
        );
        /**
         * @license
         * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at
         * http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at
         * http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at
         * http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at
         * http://polymer.github.io/PATENTS.txt
         */

        /**
         * Stores the StyleInfo object applied to a given AttributePart.
         * Used to unset existing values when a new StyleInfo object is applied.
         */

        var styleMapCache = new WeakMap();
        /**
         * A directive that applies CSS properties to an element.
         *
         * `styleMap` can only be used in the `style` attribute and must be the only
         * expression in the attribute. It takes the property names in the `styleInfo`
         * object and adds the property values as CSS propertes. Property names with
         * dashes (`-`) are assumed to be valid CSS property names and set on the
         * element's style object using `setProperty()`. Names without dashes are
         * assumed to be camelCased JavaScript property names and set on the element's
         * style object using property assignment, allowing the style object to
         * translate JavaScript-style names to CSS property names.
         *
         * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
         * '0'})` sets the `background-color`, `border-top` and `--size` properties.
         *
         * @param styleInfo {StyleInfo}
         */

        var styleMap = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"]
        )(function(styleInfo) {
          return function(part) {
            if (
              !(
                part instanceof
                _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]
              ) ||
              part instanceof
                _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] ||
              part.committer.name !== "style" ||
              part.committer.parts.length > 1
            ) {
              throw new Error(
                "The `styleMap` directive must be used in the style attribute " +
                  "and must be the only part in the attribute."
              );
            }

            var committer = part.committer;
            var style = committer.element.style; // Handle static styles the first time we see a Part

            if (!styleMapCache.has(part)) {
              style.cssText = committer.strings.join(" ");
            } // Remove old properties that no longer exist in styleInfo

            var oldInfo = styleMapCache.get(part);

            for (var name in oldInfo) {
              if (!(name in styleInfo)) {
                if (name.indexOf("-") === -1) {
                  // tslint:disable-next-line:no-any
                  style[name] = null;
                } else {
                  style.removeProperty(name);
                }
              }
            } // Add or update properties

            for (var _name in styleInfo) {
              if (_name.indexOf("-") === -1) {
                // tslint:disable-next-line:no-any
                style[_name] = styleInfo[_name];
              } else {
                style.setProperty(_name, styleInfo[_name]);
              }
            }

            styleMapCache.set(part, styleInfo);
          };
        });

        /***/
      },

    /***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
      /*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var shallowEqual = function shallowEqual(newValue, oldValue) {
          return newValue === oldValue;
        };

        var simpleIsEqual = function simpleIsEqual(newArgs, lastArgs) {
          return (
            newArgs.length === lastArgs.length &&
            newArgs.every(function(newArg, index) {
              return shallowEqual(newArg, lastArgs[index]);
            })
          );
        };

        function index(resultFn, isEqual) {
          if (isEqual === void 0) {
            isEqual = simpleIsEqual;
          }

          var lastThis;
          var lastArgs = [];
          var lastResult;
          var calledOnce = false;

          var result = function result() {
            for (
              var _len = arguments.length, newArgs = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              newArgs[_key] = arguments[_key];
            }

            if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
              return lastResult;
            }

            lastResult = resultFn.apply(this, newArgs);
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            return lastResult;
          };

          return result;
        }

        /* harmony default export */ __webpack_exports__["default"] = index;

        /***/
      },

    /***/ "./node_modules/webpack/buildin/module.js":
      /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = function(module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function() {};

            module.paths = []; // module.parent = undefined by default

            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
              enumerable: true,
              get: function get() {
                return module.l;
              },
            });
            Object.defineProperty(module, "id", {
              enumerable: true,
              get: function get() {
                return module.i;
              },
            });
            module.webpackPolyfill = 1;
          }

          return module;
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3N0eWxlLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciwgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYSBjdXN0b20gZWxlbWVudCB0aGF0IGhhcyBhXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgc2ltaWxhciB0byBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIGFuZCBpcyBjb21wYXRpYmxlXG4gKiB3aXRoIGhhdmluZyBhIHJpcHBsZSBlZmZlY3QuXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGNoZWNrZWQgc3RhdGUgd2l0aCBpdHMgcmlwcGxlIGVmZmVjdC5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsLl9jaGVja2VkQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBgYWN0aXZlYCBhbmQgYGNoZWNrZWRgIHN0YXRlLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvci5fYnV0dG9uU3RhdGVDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5hY3RpdmU7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcixcbiAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsXG4gIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltEaWFsb2dzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvZGlhbG9ncy5odG1sKVxuXG5gcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGltcGxlbWVudHMgYSBzY3JvbGxpbmcgYXJlYSB1c2VkIGluIGEgTWF0ZXJpYWwgRGVzaWduXG5kaWFsb2cuIEl0IHNob3dzIGEgZGl2aWRlciBhdCB0aGUgdG9wIGFuZC9vciBib3R0b20gaW5kaWNhdGluZyBtb3JlIGNvbnRlbnQsXG5kZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLiBVc2UgdGhpcyB0b2dldGhlciB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAuXG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG5JdCBzaG93cyBhIHRvcCBkaXZpZGVyIGFmdGVyIHNjcm9sbGluZyBpZiBpdCBpcyBub3QgdGhlIGZpcnN0IGNoaWxkIGluIGl0c1xucGFyZW50IGNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYWJvdmUuIEl0IHNob3dzIGEgYm90dG9tXG5kaXZpZGVyIGlmIGl0IGlzIHNjcm9sbGFibGUgYW5kIGl0IGlzIG5vdCB0aGUgbGFzdCBjaGlsZCBpbiBpdHMgcGFyZW50XG5jb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGJlbG93LiBUaGUgYm90dG9tIGRpdmlkZXIgaXMgaGlkZGVuXG5pZiBpdCBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXG5JZiBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZWxlbWVudCBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLCByZW1lbWJlciB0byBzZXQgdGhlIGBkaWFsb2dFbGVtZW50YDpcblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbCBpZD1cIm15RGlhbG9nXCI+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPGg0PlN1Yi1oZWFkZXI8L2g0PlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICAgIDxzY3JpcHQ+XG4gICAgICB2YXIgc2Nyb2xsYWJsZSA9XG5Qb2x5bWVyLmRvbShteURpYWxvZykucXVlcnlTZWxlY3RvcigncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnKTtcbiAgICAgIHNjcm9sbGFibGUuZGlhbG9nRWxlbWVudCA9IG15RGlhbG9nO1xuICAgIDwvc2NyaXB0PlxuXG4jIyMgU3R5bGluZ1xuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCB8IE1peGluIGZvciB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IHwge31cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcy1zY3JvbGxlZDpub3QoOmZpcnN0LWNoaWxkKSk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNhbi1zY3JvbGw6bm90KC5zY3JvbGxlZC10by1ib3R0b20pOm5vdCg6bGFzdC1jaGlsZCkpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG5cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNjcm9sbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZVwiIGNsYXNzPVwic2Nyb2xsYWJsZVwiIG9uLXNjcm9sbD1cInVwZGF0ZVNjcm9sbFN0YXRlXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaWFsb2cgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmBcbiAgICAgKiBjb250YWluaW5nIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgZGlhbG9nRWxlbWVudDoge3R5cGU6IE9iamVjdH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICovXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zY3JvbGxhYmxlO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ25vLXBhZGRpbmcnKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlU2Nyb2xsU3RhdGUuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgdXBkYXRlU2Nyb2xsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLXNjcm9sbGVkJywgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID4gMCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ2Nhbi1zY3JvbGwnLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdzY3JvbGxlZC10by1ib3R0b20nLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPj1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gIH0sXG5cbiAgX2Vuc3VyZVRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmVhZCBwYXJlbnRFbGVtZW50IGluc3RlYWQgb2YgcGFyZW50Tm9kZSBpbiBvcmRlciB0byBza2lwIHNoYWRvd1Jvb3RzLlxuICAgIHRoaXMuZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nRWxlbWVudCB8fCB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gQ2hlY2sgaWYgZGlhbG9nIGltcGxlbWVudHMgcGFwZXItZGlhbG9nLWJlaGF2aW9yLiBJZiBub3QsIGZpdFxuICAgIC8vIHNjcm9sbFRhcmdldCB0byBob3N0LlxuICAgIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQgJiYgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycyAmJlxuICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzLmluZGV4T2YoUGFwZXJEaWFsb2dCZWhhdmlvckltcGwpID49IDApIHtcbiAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5zaXppbmdUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2dFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmaXQnKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIHNpbmdsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlPjwvcGFwZXItc3Bpbm5lci1saXRlPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGlzIGJsdWUuIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGJlIGEgZGlmZmVyZW50IGNvbG9yLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNwaW5uZXIgfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lci1saXRlXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyLWxpdGUnLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiLyohXG4gKiBGdXNlLmpzIHYzLjQuNCAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgS2lyb2xsb3MgUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiRnVzZVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuRnVzZT10KCk6ZS5GdXNlPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheShlKTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9fSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlKXtyZXR1cm4ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19dmFyIGk9bigyKSxhPW4oOCkscz1uKDApLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbil7dmFyIHI9bi5sb2NhdGlvbixvPXZvaWQgMD09PXI/MDpyLGk9bi5kaXN0YW5jZSxzPXZvaWQgMD09PWk/MTAwOmksYz1uLnRocmVzaG9sZCxoPXZvaWQgMD09PWM/LjY6YyxsPW4ubWF4UGF0dGVybkxlbmd0aCx1PXZvaWQgMD09PWw/MzI6bCxmPW4uY2FzZVNlbnNpdGl2ZSxkPXZvaWQgMCE9PWYmJmYsdj1uLnRva2VuU2VwYXJhdG9yLHA9dm9pZCAwPT09dj8vICsvZzp2LGc9bi5maW5kQWxsTWF0Y2hlcyx5PXZvaWQgMCE9PWcmJmcsbT1uLm1pbk1hdGNoQ2hhckxlbmd0aCxrPXZvaWQgMD09PW0/MTptLFM9bi5pZCx4PXZvaWQgMD09PVM/bnVsbDpTLGI9bi5rZXlzLE09dm9pZCAwPT09Yj9bXTpiLF89bi5zaG91bGRTb3J0LEw9dm9pZCAwPT09X3x8Xyx3PW4uZ2V0Rm4sQT12b2lkIDA9PT13P2E6dyxDPW4uc29ydEZuLEk9dm9pZCAwPT09Qz9mdW5jdGlvbihlLHQpe3JldHVybiBlLnNjb3JlLXQuc2NvcmV9OkMsTz1uLnRva2VuaXplLGo9dm9pZCAwIT09TyYmTyxQPW4ubWF0Y2hBbGxUb2tlbnMsRj12b2lkIDAhPT1QJiZQLFQ9bi5pbmNsdWRlTWF0Y2hlcyx6PXZvaWQgMCE9PVQmJlQsRT1uLmluY2x1ZGVTY29yZSxLPXZvaWQgMCE9PUUmJkUsJD1uLnZlcmJvc2UsSj12b2lkIDAhPT0kJiYkOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOnMsdGhyZXNob2xkOmgsbWF4UGF0dGVybkxlbmd0aDp1LGlzQ2FzZVNlbnNpdGl2ZTpkLHRva2VuU2VwYXJhdG9yOnAsZmluZEFsbE1hdGNoZXM6eSxtaW5NYXRjaENoYXJMZW5ndGg6ayxpZDp4LGtleXM6TSxpbmNsdWRlTWF0Y2hlczp6LGluY2x1ZGVTY29yZTpLLHNob3VsZFNvcnQ6TCxnZXRGbjpBLHNvcnRGbjpJLHZlcmJvc2U6Six0b2tlbml6ZTpqLG1hdGNoQWxsVG9rZW5zOkZ9LHRoaXMuc2V0Q29sbGVjdGlvbih0KX12YXIgdCxuLGM7cmV0dXJuIHQ9ZSwobj1be2tleTpcInNldENvbGxlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0PWUsZX19LHtrZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2xpbWl0OiExfTt0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicuY29uY2F0KGUsJ1wiJykpO3ZhciBuPXRoaXMuX3ByZXBhcmVTZWFyY2hlcnMoZSkscj1uLnRva2VuU2VhcmNoZXJzLG89bi5mdWxsU2VhcmNoZXIsaT10aGlzLl9zZWFyY2gocixvKSxhPWkud2VpZ2h0cyxzPWkucmVzdWx0cztyZXR1cm4gdGhpcy5fY29tcHV0ZVNjb3JlKGEscyksdGhpcy5vcHRpb25zLnNob3VsZFNvcnQmJnRoaXMuX3NvcnQocyksdC5saW1pdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGltaXQmJihzPXMuc2xpY2UoMCx0LmxpbWl0KSksdGhpcy5fZm9ybWF0KHMpfX0se2tleTpcIl9wcmVwYXJlU2VhcmNoZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIix0PVtdO2lmKHRoaXMub3B0aW9ucy50b2tlbml6ZSlmb3IodmFyIG49ZS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLHI9MCxvPW4ubGVuZ3RoO3I8bztyKz0xKXQucHVzaChuZXcgaShuW3JdLHRoaXMub3B0aW9ucykpO3JldHVybnt0b2tlblNlYXJjaGVyczp0LGZ1bGxTZWFyY2hlcjpuZXcgaShlLHRoaXMub3B0aW9ucyl9fX0se2tleTpcIl9zZWFyY2hcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLG49dGhpcy5saXN0LHI9e30sbz1bXTtpZihcInN0cmluZ1wiPT10eXBlb2YgblswXSl7Zm9yKHZhciBpPTAsYT1uLmxlbmd0aDtpPGE7aSs9MSl0aGlzLl9hbmFseXplKHtrZXk6XCJcIix2YWx1ZTpuW2ldLHJlY29yZDppLGluZGV4Oml9LHtyZXN1bHRNYXA6cixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pO3JldHVybnt3ZWlnaHRzOm51bGwscmVzdWx0czpvfX1mb3IodmFyIHM9e30sYz0wLGg9bi5sZW5ndGg7YzxoO2MrPTEpZm9yKHZhciBsPW5bY10sdT0wLGY9dGhpcy5vcHRpb25zLmtleXMubGVuZ3RoO3U8Zjt1Kz0xKXt2YXIgZD10aGlzLm9wdGlvbnMua2V5c1t1XTtpZihcInN0cmluZ1wiIT10eXBlb2YgZCl7aWYoc1tkLm5hbWVdPXt3ZWlnaHQ6MS1kLndlaWdodHx8MX0sZC53ZWlnaHQ8PTB8fGQud2VpZ2h0PjEpdGhyb3cgbmV3IEVycm9yKFwiS2V5IHdlaWdodCBoYXMgdG8gYmUgPiAwIGFuZCA8PSAxXCIpO2Q9ZC5uYW1lfWVsc2Ugc1tkXT17d2VpZ2h0OjF9O3RoaXMuX2FuYWx5emUoe2tleTpkLHZhbHVlOnRoaXMub3B0aW9ucy5nZXRGbihsLGQpLHJlY29yZDpsLGluZGV4OmN9LHtyZXN1bHRNYXA6cixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pfXJldHVybnt3ZWlnaHRzOnMscmVzdWx0czpvfX19LHtrZXk6XCJfYW5hbHl6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5rZXkscj1lLmFycmF5SW5kZXgsbz12b2lkIDA9PT1yPy0xOnIsaT1lLnZhbHVlLGE9ZS5yZWNvcmQsYz1lLmluZGV4LGg9dC50b2tlblNlYXJjaGVycyxsPXZvaWQgMD09PWg/W106aCx1PXQuZnVsbFNlYXJjaGVyLGY9dm9pZCAwPT09dT9bXTp1LGQ9dC5yZXN1bHRNYXAsdj12b2lkIDA9PT1kP3t9OmQscD10LnJlc3VsdHMsZz12b2lkIDA9PT1wP1tdOnA7aWYobnVsbCE9aSl7dmFyIHk9ITEsbT0tMSxrPTA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3RoaXMuX2xvZyhcIlxcbktleTogXCIuY29uY2F0KFwiXCI9PT1uP1wiLVwiOm4pKTt2YXIgUz1mLnNlYXJjaChpKTtpZih0aGlzLl9sb2coJ0Z1bGwgdGV4dDogXCInLmNvbmNhdChpLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChTLnNjb3JlKSksdGhpcy5vcHRpb25zLnRva2VuaXplKXtmb3IodmFyIHg9aS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLGI9W10sTT0wO008bC5sZW5ndGg7TSs9MSl7dmFyIF89bFtNXTt0aGlzLl9sb2coJ1xcblBhdHRlcm46IFwiJy5jb25jYXQoXy5wYXR0ZXJuLCdcIicpKTtmb3IodmFyIEw9ITEsdz0wO3c8eC5sZW5ndGg7dys9MSl7dmFyIEE9eFt3XSxDPV8uc2VhcmNoKEEpLEk9e307Qy5pc01hdGNoPyhJW0FdPUMuc2NvcmUseT0hMCxMPSEwLGIucHVzaChDLnNjb3JlKSk6KElbQV09MSx0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnN8fGIucHVzaCgxKSksdGhpcy5fbG9nKCdUb2tlbjogXCInLmNvbmNhdChBLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChJW0FdKSl9TCYmKGsrPTEpfW09YlswXTtmb3IodmFyIE89Yi5sZW5ndGgsaj0xO2o8TztqKz0xKW0rPWJbal07bS89Tyx0aGlzLl9sb2coXCJUb2tlbiBzY29yZSBhdmVyYWdlOlwiLG0pfXZhciBQPVMuc2NvcmU7bT4tMSYmKFA9KFArbSkvMiksdGhpcy5fbG9nKFwiU2NvcmUgYXZlcmFnZTpcIixQKTt2YXIgRj0hdGhpcy5vcHRpb25zLnRva2VuaXplfHwhdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHxrPj1sLmxlbmd0aDtpZih0aGlzLl9sb2coXCJcXG5DaGVjayBNYXRjaGVzOiBcIi5jb25jYXQoRikpLCh5fHxTLmlzTWF0Y2gpJiZGKXt2YXIgVD12W2NdO1Q/VC5vdXRwdXQucHVzaCh7a2V5Om4sYXJyYXlJbmRleDpvLHZhbHVlOmksc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpTLm1hdGNoZWRJbmRpY2VzfSk6KHZbY109e2l0ZW06YSxvdXRwdXQ6W3trZXk6bixhcnJheUluZGV4Om8sdmFsdWU6aSxzY29yZTpQLG1hdGNoZWRJbmRpY2VzOlMubWF0Y2hlZEluZGljZXN9XX0sZy5wdXNoKHZbY10pKX19ZWxzZSBpZihzKGkpKWZvcih2YXIgej0wLEU9aS5sZW5ndGg7ejxFO3orPTEpdGhpcy5fYW5hbHl6ZSh7a2V5Om4sYXJyYXlJbmRleDp6LHZhbHVlOmlbel0scmVjb3JkOmEsaW5kZXg6Y30se3Jlc3VsdE1hcDp2LHJlc3VsdHM6Zyx0b2tlblNlYXJjaGVyczpsLGZ1bGxTZWFyY2hlcjpmfSl9fX0se2tleTpcIl9jb21wdXRlU2NvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuX2xvZyhcIlxcblxcbkNvbXB1dGluZyBzY29yZTpcXG5cIik7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bis9MSl7Zm9yKHZhciBvPXRbbl0ub3V0cHV0LGk9by5sZW5ndGgsYT0xLHM9MSxjPTA7YzxpO2MrPTEpe3ZhciBoPWU/ZVtvW2NdLmtleV0ud2VpZ2h0OjEsbD0oMT09PWg/b1tjXS5zY29yZTpvW2NdLnNjb3JlfHwuMDAxKSpoOzEhPT1oP3M9TWF0aC5taW4ocyxsKToob1tjXS5uU2NvcmU9bCxhKj1sKX10W25dLnNjb3JlPTE9PT1zP2E6cyx0aGlzLl9sb2codFtuXSl9fX0se2tleTpcIl9zb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fbG9nKFwiXFxuXFxuU29ydGluZy4uLi5cIiksZS5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pfX0se2tleTpcIl9mb3JtYXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXTtpZih0aGlzLm9wdGlvbnMudmVyYm9zZSl7dmFyIG49W107dGhpcy5fbG9nKFwiXFxuXFxuT3V0cHV0OlxcblxcblwiLEpTT04uc3RyaW5naWZ5KGUsZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT09cih0KSYmbnVsbCE9PXQpe2lmKC0xIT09bi5pbmRleE9mKHQpKXJldHVybjtuLnB1c2godCl9cmV0dXJuIHR9KSksbj1udWxsfXZhciBvPVtdO3RoaXMub3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5vdXRwdXQ7dC5tYXRjaGVzPVtdO2Zvcih2YXIgcj0wLG89bi5sZW5ndGg7cjxvO3IrPTEpe3ZhciBpPW5bcl07aWYoMCE9PWkubWF0Y2hlZEluZGljZXMubGVuZ3RoKXt2YXIgYT17aW5kaWNlczppLm1hdGNoZWRJbmRpY2VzLHZhbHVlOmkudmFsdWV9O2kua2V5JiYoYS5rZXk9aS5rZXkpLGkuaGFzT3duUHJvcGVydHkoXCJhcnJheUluZGV4XCIpJiZpLmFycmF5SW5kZXg+LTEmJihhLmFycmF5SW5kZXg9aS5hcnJheUluZGV4KSx0Lm1hdGNoZXMucHVzaChhKX19fSksdGhpcy5vcHRpb25zLmluY2x1ZGVTY29yZSYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dC5zY29yZT1lLnNjb3JlfSk7Zm9yKHZhciBpPTAsYT1lLmxlbmd0aDtpPGE7aSs9MSl7dmFyIHM9ZVtpXTtpZih0aGlzLm9wdGlvbnMuaWQmJihzLml0ZW09dGhpcy5vcHRpb25zLmdldEZuKHMuaXRlbSx0aGlzLm9wdGlvbnMuaWQpWzBdKSxvLmxlbmd0aCl7Zm9yKHZhciBjPXtpdGVtOnMuaXRlbX0saD0wLGw9by5sZW5ndGg7aDxsO2grPTEpb1toXShzLGMpO3QucHVzaChjKX1lbHNlIHQucHVzaChzLml0ZW0pfXJldHVybiB0fX0se2tleTpcIl9sb2dcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlO3RoaXMub3B0aW9ucy52ZXJib3NlJiYoZT1jb25zb2xlKS5sb2cuYXBwbHkoZSxhcmd1bWVudHMpfX1dKSYmbyh0LnByb3RvdHlwZSxuKSxjJiZvKHQsYyksZX0oKTtlLmV4cG9ydHM9Y30sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBvPW4oMyksaT1uKDQpLGE9big3KSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPW4ubG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixpPW4uZGlzdGFuY2Uscz12b2lkIDA9PT1pPzEwMDppLGM9bi50aHJlc2hvbGQsaD12b2lkIDA9PT1jPy42OmMsbD1uLm1heFBhdHRlcm5MZW5ndGgsdT12b2lkIDA9PT1sPzMyOmwsZj1uLmlzQ2FzZVNlbnNpdGl2ZSxkPXZvaWQgMCE9PWYmJmYsdj1uLnRva2VuU2VwYXJhdG9yLHA9dm9pZCAwPT09dj8vICsvZzp2LGc9bi5maW5kQWxsTWF0Y2hlcyx5PXZvaWQgMCE9PWcmJmcsbT1uLm1pbk1hdGNoQ2hhckxlbmd0aCxrPXZvaWQgMD09PW0/MTptOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOnMsdGhyZXNob2xkOmgsbWF4UGF0dGVybkxlbmd0aDp1LGlzQ2FzZVNlbnNpdGl2ZTpkLHRva2VuU2VwYXJhdG9yOnAsZmluZEFsbE1hdGNoZXM6eSxtaW5NYXRjaENoYXJMZW5ndGg6a30sdGhpcy5wYXR0ZXJuPXRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmU/dDp0LnRvTG93ZXJDYXNlKCksdGhpcy5wYXR0ZXJuLmxlbmd0aDw9dSYmKHRoaXMucGF0dGVybkFscGhhYmV0PWEodGhpcy5wYXR0ZXJuKSl9dmFyIHQsbixzO3JldHVybiB0PWUsKG49W3trZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlfHwoZT1lLnRvTG93ZXJDYXNlKCkpLHRoaXMucGF0dGVybj09PWUpcmV0dXJue2lzTWF0Y2g6ITAsc2NvcmU6MCxtYXRjaGVkSW5kaWNlczpbWzAsZS5sZW5ndGgtMV1dfTt2YXIgdD10aGlzLm9wdGlvbnMsbj10Lm1heFBhdHRlcm5MZW5ndGgscj10LnRva2VuU2VwYXJhdG9yO2lmKHRoaXMucGF0dGVybi5sZW5ndGg+bilyZXR1cm4gbyhlLHRoaXMucGF0dGVybixyKTt2YXIgYT10aGlzLm9wdGlvbnMscz1hLmxvY2F0aW9uLGM9YS5kaXN0YW5jZSxoPWEudGhyZXNob2xkLGw9YS5maW5kQWxsTWF0Y2hlcyx1PWEubWluTWF0Y2hDaGFyTGVuZ3RoO3JldHVybiBpKGUsdGhpcy5wYXR0ZXJuLHRoaXMucGF0dGVybkFscGhhYmV0LHtsb2NhdGlvbjpzLGRpc3RhbmNlOmMsdGhyZXNob2xkOmgsZmluZEFsbE1hdGNoZXM6bCxtaW5NYXRjaENoYXJMZW5ndGg6dX0pfX1dKSYmcih0LnByb3RvdHlwZSxuKSxzJiZyKHQscyksZX0oKTtlLmV4cG9ydHM9c30sZnVuY3Rpb24oZSx0KXt2YXIgbj0vW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2c7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOi8gKy9nLG89bmV3IFJlZ0V4cCh0LnJlcGxhY2UobixcIlxcXFwkJlwiKS5yZXBsYWNlKHIsXCJ8XCIpKSxpPWUubWF0Y2gobyksYT0hIWkscz1bXTtpZihhKWZvcih2YXIgYz0wLGg9aS5sZW5ndGg7YzxoO2MrPTEpe3ZhciBsPWlbY107cy5wdXNoKFtlLmluZGV4T2YobCksbC5sZW5ndGgtMV0pfXJldHVybntzY29yZTphPy41OjEsaXNNYXRjaDphLG1hdGNoZWRJbmRpY2VzOnN9fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oNSksbz1uKDYpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbixpKXtmb3IodmFyIGE9aS5sb2NhdGlvbixzPXZvaWQgMD09PWE/MDphLGM9aS5kaXN0YW5jZSxoPXZvaWQgMD09PWM/MTAwOmMsbD1pLnRocmVzaG9sZCx1PXZvaWQgMD09PWw/LjY6bCxmPWkuZmluZEFsbE1hdGNoZXMsZD12b2lkIDAhPT1mJiZmLHY9aS5taW5NYXRjaENoYXJMZW5ndGgscD12b2lkIDA9PT12PzE6dixnPXMseT1lLmxlbmd0aCxtPXUsaz1lLmluZGV4T2YodCxnKSxTPXQubGVuZ3RoLHg9W10sYj0wO2I8eTtiKz0xKXhbYl09MDtpZigtMSE9PWspe3ZhciBNPXIodCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOmssZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTtpZihtPU1hdGgubWluKE0sbSksLTEhPT0oaz1lLmxhc3RJbmRleE9mKHQsZytTKSkpe3ZhciBfPXIodCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOmssZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTttPU1hdGgubWluKF8sbSl9fWs9LTE7Zm9yKHZhciBMPVtdLHc9MSxBPVMreSxDPTE8PFMtMSxJPTA7STxTO0krPTEpe2Zvcih2YXIgTz0wLGo9QTtPPGo7KXtyKHQse2Vycm9yczpJLGN1cnJlbnRMb2NhdGlvbjpnK2osZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTw9bT9PPWo6QT1qLGo9TWF0aC5mbG9vcigoQS1PKS8yK08pfUE9ajt2YXIgUD1NYXRoLm1heCgxLGctaisxKSxGPWQ/eTpNYXRoLm1pbihnK2oseSkrUyxUPUFycmF5KEYrMik7VFtGKzFdPSgxPDxJKS0xO2Zvcih2YXIgej1GO3o+PVA7ei09MSl7dmFyIEU9ei0xLEs9bltlLmNoYXJBdChFKV07aWYoSyYmKHhbRV09MSksVFt6XT0oVFt6KzFdPDwxfDEpJkssMCE9PUkmJihUW3pdfD0oTFt6KzFdfExbel0pPDwxfDF8TFt6KzFdKSxUW3pdJkMmJih3PXIodCx7ZXJyb3JzOkksY3VycmVudExvY2F0aW9uOkUsZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KSk8PW0pe2lmKG09dywoaz1FKTw9ZylicmVhaztQPU1hdGgubWF4KDEsMipnLWspfX1pZihyKHQse2Vycm9yczpJKzEsY3VycmVudExvY2F0aW9uOmcsZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KT5tKWJyZWFrO0w9VH1yZXR1cm57aXNNYXRjaDprPj0wLHNjb3JlOjA9PT13Py4wMDE6dyxtYXRjaGVkSW5kaWNlczpvKHgscCl9fX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbj10LmVycm9ycyxyPXZvaWQgMD09PW4/MDpuLG89dC5jdXJyZW50TG9jYXRpb24saT12b2lkIDA9PT1vPzA6byxhPXQuZXhwZWN0ZWRMb2NhdGlvbixzPXZvaWQgMD09PWE/MDphLGM9dC5kaXN0YW5jZSxoPXZvaWQgMD09PWM/MTAwOmMsbD1yL2UubGVuZ3RoLHU9TWF0aC5hYnMocy1pKTtyZXR1cm4gaD9sK3UvaDp1PzE6bH19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxLG49W10scj0tMSxvPS0xLGk9MCxhPWUubGVuZ3RoO2k8YTtpKz0xKXt2YXIgcz1lW2ldO3MmJi0xPT09cj9yPWk6c3x8LTE9PT1yfHwoKG89aS0xKS1yKzE+PXQmJm4ucHVzaChbcixvXSkscj0tMSl9cmV0dXJuIGVbaS0xXSYmaS1yPj10JiZuLnB1c2goW3IsaS0xXSksbn19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxuPWUubGVuZ3RoLHI9MDtyPG47cis9MSl0W2UuY2hhckF0KHIpXT0wO2Zvcih2YXIgbz0wO288bjtvKz0xKXRbZS5jaGFyQXQobyldfD0xPDxuLW8tMTtyZXR1cm4gdH19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDApO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbiBlKHQsbixvKXtpZihuKXt2YXIgaT1uLmluZGV4T2YoXCIuXCIpLGE9bixzPW51bGw7LTEhPT1pJiYoYT1uLnNsaWNlKDAsaSkscz1uLnNsaWNlKGkrMSkpO3ZhciBjPXRbYV07aWYobnVsbCE9YylpZihzfHxcInN0cmluZ1wiIT10eXBlb2YgYyYmXCJudW1iZXJcIiE9dHlwZW9mIGMpaWYocihjKSlmb3IodmFyIGg9MCxsPWMubGVuZ3RoO2g8bDtoKz0xKWUoY1toXSxzLG8pO2Vsc2UgcyYmZShjLHMsbyk7ZWxzZSBvLnB1c2goYy50b1N0cmluZygpKX1lbHNlIG8ucHVzaCh0KTtyZXR1cm4gb30oZSx0LFtdKX19XSl9KTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0LCBQcm9wZXJ0eVBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUluZm8ge1xuICByZWFkb25seSBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFN0b3JlcyB0aGUgU3R5bGVJbmZvIG9iamVjdCBhcHBsaWVkIHRvIGEgZ2l2ZW4gQXR0cmlidXRlUGFydC5cbiAqIFVzZWQgdG8gdW5zZXQgZXhpc3RpbmcgdmFsdWVzIHdoZW4gYSBuZXcgU3R5bGVJbmZvIG9iamVjdCBpcyBhcHBsaWVkLlxuICovXG5jb25zdCBzdHlsZU1hcENhY2hlID0gbmV3IFdlYWtNYXA8QXR0cmlidXRlUGFydCwgU3R5bGVJbmZvPigpO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXBwbGllcyBDU1MgcHJvcGVydGllcyB0byBhbiBlbGVtZW50LlxuICpcbiAqIGBzdHlsZU1hcGAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHlcbiAqIGV4cHJlc3Npb24gaW4gdGhlIGF0dHJpYnV0ZS4gSXQgdGFrZXMgdGhlIHByb3BlcnR5IG5hbWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhZGRzIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgYXMgQ1NTIHByb3BlcnRlcy4gUHJvcGVydHkgbmFtZXMgd2l0aFxuICogZGFzaGVzIChgLWApIGFyZSBhc3N1bWVkIHRvIGJlIHZhbGlkIENTUyBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZVxuICogZWxlbWVudCdzIHN0eWxlIG9iamVjdCB1c2luZyBgc2V0UHJvcGVydHkoKWAuIE5hbWVzIHdpdGhvdXQgZGFzaGVzIGFyZVxuICogYXNzdW1lZCB0byBiZSBjYW1lbENhc2VkIEphdmFTY3JpcHQgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGUgZWxlbWVudCdzXG4gKiBzdHlsZSBvYmplY3QgdXNpbmcgcHJvcGVydHkgYXNzaWdubWVudCwgYWxsb3dpbmcgdGhlIHN0eWxlIG9iamVjdCB0b1xuICogdHJhbnNsYXRlIEphdmFTY3JpcHQtc3R5bGUgbmFtZXMgdG8gQ1NTIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEZvciBleGFtcGxlIGBzdHlsZU1hcCh7YmFja2dyb3VuZENvbG9yOiAncmVkJywgJ2JvcmRlci10b3AnOiAnNXB4JywgJy0tc2l6ZSc6XG4gKiAnMCd9KWAgc2V0cyB0aGUgYGJhY2tncm91bmQtY29sb3JgLCBgYm9yZGVyLXRvcGAgYW5kIGAtLXNpemVgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHN0eWxlSW5mbyB7U3R5bGVJbmZvfVxuICovXG5leHBvcnQgY29uc3Qgc3R5bGVNYXAgPSBkaXJlY3RpdmUoKHN0eWxlSW5mbzogU3R5bGVJbmZvKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkgfHwgKHBhcnQgaW5zdGFuY2VvZiBQcm9wZXJ0eVBhcnQpIHx8XG4gICAgICBwYXJ0LmNvbW1pdHRlci5uYW1lICE9PSAnc3R5bGUnIHx8IHBhcnQuY29tbWl0dGVyLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBzdHlsZSBhdHRyaWJ1dGUgJyArXG4gICAgICAgICdhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuJyk7XG4gIH1cblxuICBjb25zdCB7Y29tbWl0dGVyfSA9IHBhcnQ7XG4gIGNvbnN0IHtzdHlsZX0gPSBjb21taXR0ZXIuZWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAvLyBIYW5kbGUgc3RhdGljIHN0eWxlcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgYSBQYXJ0XG4gIGlmICghc3R5bGVNYXBDYWNoZS5oYXMocGFydCkpIHtcbiAgICBzdHlsZS5jc3NUZXh0ID0gY29tbWl0dGVyLnN0cmluZ3Muam9pbignICcpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIG9sZCBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0IGluIHN0eWxlSW5mb1xuICBjb25zdCBvbGRJbmZvID0gc3R5bGVNYXBDYWNoZS5nZXQocGFydCk7XG4gIGZvciAoY29uc3QgbmFtZSBpbiBvbGRJbmZvKSB7XG4gICAgaWYgKCEobmFtZSBpbiBzdHlsZUluZm8pKSB7XG4gICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgc3R5bGVJbmZvW25hbWVdKTtcbiAgICB9XG4gIH1cbiAgc3R5bGVNYXBDYWNoZS5zZXQocGFydCwgc3R5bGVJbmZvKTtcbn0pO1xuIiwidmFyIHNoYWxsb3dFcXVhbCA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgcmV0dXJuIG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcbn07XG5cbnZhciBzaW1wbGVJc0VxdWFsID0gZnVuY3Rpb24gc2ltcGxlSXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykge1xuICByZXR1cm4gbmV3QXJncy5sZW5ndGggPT09IGxhc3RBcmdzLmxlbmd0aCAmJiBuZXdBcmdzLmV2ZXJ5KGZ1bmN0aW9uIChuZXdBcmcsIGluZGV4KSB7XG4gICAgcmV0dXJuIHNoYWxsb3dFcXVhbChuZXdBcmcsIGxhc3RBcmdzW2luZGV4XSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gaW5kZXggKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHtcbiAgICBpc0VxdWFsID0gc2ltcGxlSXNFcXVhbDtcbiAgfVxuXG4gIHZhciBsYXN0VGhpcztcbiAgdmFyIGxhc3RBcmdzID0gW107XG4gIHZhciBsYXN0UmVzdWx0O1xuICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBuZXdBcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG5cbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUE0QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNFQTtBQThFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNkJBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQTZDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQW1DQTtBQXBDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQWNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7OztBQ3BHQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFNQTs7Ozs7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBUEE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
