(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "vendors~hui-view-editable~panel-config-area-registry~panel-config-automation~panel-config-integratio~3bab15b9",
  ],
  {
    /***/ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js":
      /*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-button-behavior.js ***!
  \************************************************************************/
      /*! exports provided: PaperButtonBehaviorImpl, PaperButtonBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperButtonBehaviorImpl",
          function() {
            return PaperButtonBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperButtonBehavior",
          function() {
            return PaperButtonBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js"
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

        /** @polymerBehavior PaperButtonBehavior */

        var PaperButtonBehaviorImpl = {
          properties: {
            /**
             * The z-depth of this element, from 0-5. Setting to 0 will remove the
             * shadow, and each increasing number greater than 0 will be "deeper"
             * than the last.
             *
             * @attribute elevation
             * @type number
             * @default 1
             */
            elevation: {
              type: Number,
              reflectToAttribute: true,
              readOnly: true,
            },
          },
          observers: [
            "_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)",
            "_computeKeyboardClass(receivedFocusFromKeyboard)",
          ],
          hostAttributes: {
            role: "button",
            tabindex: "0",
            animated: true,
          },
          _calculateElevation: function _calculateElevation() {
            var e = 1;

            if (this.disabled) {
              e = 0;
            } else if (this.active || this.pressed) {
              e = 4;
            } else if (this.receivedFocusFromKeyboard) {
              e = 3;
            }

            this._setElevation(e);
          },
          _computeKeyboardClass: function _computeKeyboardClass(
            receivedFocusFromKeyboard
          ) {
            this.toggleClass("keyboard-focus", receivedFocusFromKeyboard);
          },

          /**
           * In addition to `IronButtonState` behavior, when space key goes down,
           * create a ripple down effect.
           *
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyDownHandler: function _spaceKeyDownHandler(event) {
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronButtonStateImpl"
            ]._spaceKeyDownHandler.call(this, event); // Ensure that there is at most one ripple when the space key is held down.

            if (this.hasRipple() && this.getRipple().ripples.length < 1) {
              this._ripple.uiDownAction();
            }
          },

          /**
           * In addition to `IronButtonState` behavior, when space key goes up,
           * create a ripple up effect.
           *
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyUpHandler: function _spaceKeyUpHandler(event) {
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronButtonStateImpl"
            ]._spaceKeyUpHandler.call(this, event);

            if (this.hasRipple()) {
              this._ripple.uiUpAction();
            }
          },
        };
        /** @polymerBehavior */

        var PaperButtonBehavior = [
          _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronButtonState"
          ],
          _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronControlState"
          ],
          _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
            "PaperRippleBehavior"
          ],
          PaperButtonBehaviorImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-fab/paper-fab.js":
      /*!******************************************************!*\
  !*** ./node_modules/@polymer/paper-fab/paper-fab.js ***!
  \******************************************************/
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
        /* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-button-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral(
            [
              '\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value `transparent`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n',
            ],
            [
              '\n  <style include="paper-material-styles">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value \\`transparent\\`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation="1"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation="2"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation="3"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation="4"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation="5"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id="icon" hidden\\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>\n  <span hidden\\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>\n',
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
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Floating Action
Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)

`paper-fab` is a floating action button. It contains an image placed in the
center and comes in two sizes: regular size and a smaller size by applying the
attribute `mini`. When the user touches the button, a ripple effect emanates
from the center of the button.

You may import `iron-icons` to use with this element, or provide a URL to a
custom icon. See `iron-iconset` for more information about how to use a custom
icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-fab icon="add"></paper-fab>
    <paper-fab mini icon="favorite"></paper-fab>
    <paper-fab src="star.png"></paper-fab>


### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-fab-background` | The background color of the button | `--accent-color`
`--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
`--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
`--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
`--paper-fab` | Mixin applied to the button | `{}`
`--paper-fab-mini` | Mixin applied to a mini button | `{}`
`--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
`--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
`--paper-fab-label` | Mixin applied to the label within the button | `{}`

@group Paper Elements
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-fab",
          behaviors: [
            _polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__[
              "PaperButtonBehavior"
            ],
          ],
          properties: {
            /**
             * The URL of an image for the icon. If the src property is specified,
             * the icon property should not be.
             */
            src: {
              type: String,
              value: "",
            },

            /**
             * Specifies the icon name or index in the set of icons available in
             * the icon's icon set. If the icon property is specified,
             * the src property should not be.
             */
            icon: {
              type: String,
              value: "",
            },

            /**
             * Set this to true to style this is a "mini" FAB.
             */
            mini: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
            },

            /**
             * The label displayed in the badge. The label is centered, and ideally
             * should have very few characters.
             */
            label: {
              type: String,
              observer: "_labelChanged",
            },
          },
          _labelChanged: function _labelChanged() {
            this.setAttribute("aria-label", this.label);
          },
          _computeIsIconFab: function _computeIsIconFab(icon, src) {
            return icon.length > 0 || src.length > 0;
          },
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktdmlldy1lZGl0YWJsZX5wYW5lbC1jb25maWctYXJlYS1yZWdpc3RyeX5wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctaW50ZWdyYXRpb34zYmFiMTViOS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItYnV0dG9uLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1mYWIvcGFwZXItZmFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGUsIElyb25CdXR0b25TdGF0ZUltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQnV0dG9uQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckJ1dHRvbkJlaGF2aW9ySW1wbCA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoaXMgZWxlbWVudCwgZnJvbSAwLTUuIFNldHRpbmcgdG8gMCB3aWxsIHJlbW92ZSB0aGVcbiAgICAgKiBzaGFkb3csIGFuZCBlYWNoIGluY3JlYXNpbmcgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIHdpbGwgYmUgXCJkZWVwZXJcIlxuICAgICAqIHRoYW4gdGhlIGxhc3QuXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIGVsZXZhdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBlbGV2YXRpb246IHt0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ19jYWxjdWxhdGVFbGV2YXRpb24oZm9jdXNlZCwgZGlzYWJsZWQsIGFjdGl2ZSwgcHJlc3NlZCwgcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknLFxuICAgICdfY29tcHV0ZUtleWJvYXJkQ2xhc3MocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknXG4gIF0sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnYnV0dG9uJywgdGFiaW5kZXg6ICcwJywgYW5pbWF0ZWQ6IHRydWV9LFxuXG4gIF9jYWxjdWxhdGVFbGV2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gMTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgZSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZSB8fCB0aGlzLnByZXNzZWQpIHtcbiAgICAgIGUgPSA0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgICBlID0gMztcbiAgICB9XG4gICAgdGhpcy5fc2V0RWxldmF0aW9uKGUpO1xuICB9LFxuXG4gIF9jb21wdXRlS2V5Ym9hcmRDbGFzczogZnVuY3Rpb24ocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2tleWJvYXJkLWZvY3VzJywgcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluIGFkZGl0aW9uIHRvIGBJcm9uQnV0dG9uU3RhdGVgIGJlaGF2aW9yLCB3aGVuIHNwYWNlIGtleSBnb2VzIGRvd24sXG4gICAqIGNyZWF0ZSBhIHJpcHBsZSBkb3duIGVmZmVjdC5cbiAgICpcbiAgICogQHBhcmFtIHshS2V5Ym9hcmRFdmVudH0gZXZlbnQgLlxuICAgKi9cbiAgX3NwYWNlS2V5RG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbkJ1dHRvblN0YXRlSW1wbC5fc3BhY2VLZXlEb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGVyZSBpcyBhdCBtb3N0IG9uZSByaXBwbGUgd2hlbiB0aGUgc3BhY2Uga2V5IGlzIGhlbGQgZG93bi5cbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSAmJiB0aGlzLmdldFJpcHBsZSgpLnJpcHBsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5fcmlwcGxlLnVpRG93bkFjdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW4gYWRkaXRpb24gdG8gYElyb25CdXR0b25TdGF0ZWAgYmVoYXZpb3IsIHdoZW4gc3BhY2Uga2V5IGdvZXMgdXAsXG4gICAqIGNyZWF0ZSBhIHJpcHBsZSB1cCBlZmZlY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IUtleWJvYXJkRXZlbnR9IGV2ZW50IC5cbiAgICovXG4gIF9zcGFjZUtleVVwSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uQnV0dG9uU3RhdGVJbXBsLl9zcGFjZUtleVVwSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLnVpVXBBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJCdXR0b25CZWhhdmlvciA9IFtcbiAgSXJvbkJ1dHRvblN0YXRlLFxuICBJcm9uQ29udHJvbFN0YXRlLFxuICBQYXBlclJpcHBsZUJlaGF2aW9yLFxuICBQYXBlckJ1dHRvbkJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJCdXR0b25CZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWJ1dHRvbi1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgOmhvc3Qge1xuICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG5cbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1iYWNrZ3JvdW5kLCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgei1pbmRleDogMDtcblxuICAgICAgLyogTk9URTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGUgdmFsdWUgXFxgdHJhbnNwYXJlbnRcXGAuICovXG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBAYXBwbHkgLS1wYXBlci1mYWI7XG4gICAgfVxuXG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIDpob3N0KFttaW5pXSkge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1taW5pO1xuICAgIH1cblxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1mYWItZGlzYWJsZWQtdGV4dCwgdmFyKC0tcGFwZXItZ3JleS01MDApKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLCB2YXIoLS1wYXBlci1ncmV5LTMwMCkpO1xuXG4gICAgICBAYXBwbHkgLS1wYXBlci1mYWItZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaXJvbi1pY29uIHtcbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1pcm9uLWljb247XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1sYWJlbDtcbiAgICB9XG5cbiAgICA6aG9zdCgua2V5Ym9hcmQtZm9jdXMpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1rZXlib2FyZC1mb2N1cy1iYWNrZ3JvdW5kLCB2YXIoLS1wYXBlci1waW5rLTkwMCkpO1xuICAgIH1cblxuICAgIDpob3N0KFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICB9XG5cbiAgICA6aG9zdChbZWxldmF0aW9uPVwiMlwiXSkge1xuICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgfVxuXG4gICAgOmhvc3QoW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgIH1cblxuICAgIDpob3N0KFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICB9XG5cbiAgICA6aG9zdChbZWxldmF0aW9uPVwiNVwiXSkge1xuICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxpcm9uLWljb24gaWQ9XCJpY29uXCIgaGlkZGVuXFwkPVwie3shX2NvbXB1dGVJc0ljb25GYWIoaWNvbiwgc3JjKX19XCIgc3JjPVwiW1tzcmNdXVwiIGljb249XCJbW2ljb25dXVwiPjwvaXJvbi1pY29uPlxuICA8c3BhbiBoaWRkZW5cXCQ9XCJ7e19jb21wdXRlSXNJY29uRmFiKGljb24sIHNyYyl9fVwiPnt7bGFiZWx9fTwvc3Bhbj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRmxvYXRpbmcgQWN0aW9uXG5CdXR0b25dKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLWZsb2F0aW5nLWFjdGlvbi1idXR0b24uaHRtbClcblxuYHBhcGVyLWZhYmAgaXMgYSBmbG9hdGluZyBhY3Rpb24gYnV0dG9uLiBJdCBjb250YWlucyBhbiBpbWFnZSBwbGFjZWQgaW4gdGhlXG5jZW50ZXIgYW5kIGNvbWVzIGluIHR3byBzaXplczogcmVndWxhciBzaXplIGFuZCBhIHNtYWxsZXIgc2l6ZSBieSBhcHBseWluZyB0aGVcbmF0dHJpYnV0ZSBgbWluaWAuIFdoZW4gdGhlIHVzZXIgdG91Y2hlcyB0aGUgYnV0dG9uLCBhIHJpcHBsZSBlZmZlY3QgZW1hbmF0ZXNcbmZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uLlxuXG5Zb3UgbWF5IGltcG9ydCBgaXJvbi1pY29uc2AgdG8gdXNlIHdpdGggdGhpcyBlbGVtZW50LCBvciBwcm92aWRlIGEgVVJMIHRvIGFcbmN1c3RvbSBpY29uLiBTZWUgYGlyb24taWNvbnNldGAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIHVzZSBhIGN1c3RvbVxuaWNvbiBzZXQuXG5cbkV4YW1wbGU6XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29ucy9pcm9uLWljb25zLmpzJztcbiAgICA8L3NjcmlwdD5cblxuICAgIDxwYXBlci1mYWIgaWNvbj1cImFkZFwiPjwvcGFwZXItZmFiPlxuICAgIDxwYXBlci1mYWIgbWluaSBpY29uPVwiZmF2b3JpdGVcIj48L3BhcGVyLWZhYj5cbiAgICA8cGFwZXItZmFiIHNyYz1cInN0YXIucG5nXCI+PC9wYXBlci1mYWI+XG5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWZhYi1iYWNrZ3JvdW5kYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b24gfCBgLS1hY2NlbnQtY29sb3JgXG5gLS1wYXBlci1mYWIta2V5Ym9hcmQtZm9jdXMtYmFja2dyb3VuZGAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYnV0dG9uIHdoZW4gZm9jdXNlZCB8IGAtLXBhcGVyLXBpbmstOTAwYFxuYC0tcGFwZXItZmFiLWRpc2FibGVkLWJhY2tncm91bmRgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJ1dHRvbiB3aGVuIGl0J3MgZGlzYWJsZWQgfCBgLS1wYXBlci1ncmV5LTMwMGBcbmAtLXBhcGVyLWZhYi1kaXNhYmxlZC10ZXh0YCB8IFRoZSB0ZXh0IGNvbG9yIG9mIHRoZSBidXR0b24gd2hlbiBpdCdzIGRpc2FibGVkIHwgYC0tcGFwZXItZ3JleS01MDBgXG5gLS1wYXBlci1mYWJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZmFiLW1pbmlgIHwgTWl4aW4gYXBwbGllZCB0byBhIG1pbmkgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZmFiLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gYSBkaXNhYmxlZCBidXR0b24gfCBge31gXG5gLS1wYXBlci1mYWItaXJvbi1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlyb24taWNvbiB3aXRoaW4gdGhlIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWZhYi1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aXRoaW4gdGhlIGJ1dHRvbiB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLWZhYicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJCdXR0b25CZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgYW4gaW1hZ2UgZm9yIHRoZSBpY29uLiBJZiB0aGUgc3JjIHByb3BlcnR5IGlzIHNwZWNpZmllZCxcbiAgICAgKiB0aGUgaWNvbiBwcm9wZXJ0eSBzaG91bGQgbm90IGJlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgaWNvbiBuYW1lIG9yIGluZGV4IGluIHRoZSBzZXQgb2YgaWNvbnMgYXZhaWxhYmxlIGluXG4gICAgICogdGhlIGljb24ncyBpY29uIHNldC4gSWYgdGhlIGljb24gcHJvcGVydHkgaXMgc3BlY2lmaWVkLFxuICAgICAqIHRoZSBzcmMgcHJvcGVydHkgc2hvdWxkIG5vdCBiZS5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBzdHlsZSB0aGlzIGlzIGEgXCJtaW5pXCIgRkFCLlxuICAgICAqL1xuICAgIG1pbmk6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBiYWRnZS4gVGhlIGxhYmVsIGlzIGNlbnRlcmVkLCBhbmQgaWRlYWxseVxuICAgICAqIHNob3VsZCBoYXZlIHZlcnkgZmV3IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgbGFiZWw6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAnX2xhYmVsQ2hhbmdlZCd9XG4gIH0sXG5cbiAgX2xhYmVsQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxhYmVsKTtcbiAgfSxcblxuICBfY29tcHV0ZUlzSWNvbkZhYjogZnVuY3Rpb24oaWNvbiwgc3JjKSB7XG4gICAgcmV0dXJuIChpY29uLmxlbmd0aCA+IDApIHx8IChzcmMubGVuZ3RoID4gMCk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5REE7QUFpRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBMkZBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUF2QkE7QUEwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdkNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
