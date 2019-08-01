(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a",
  ],
  {
    /***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
      /*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js"
        );
        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML =
          '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>';
        document.head.appendChild($_documentContainer.content);

        /***/
      },

    /***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML =
          '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>';
        document.head.appendChild($_documentContainer.content);

        /***/
      },

    /***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js ***!
  \**************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input.js */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js"
        );
        /* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js"
        );
        /* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js"
        );
        /* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    <!-- this div fulfills an a11y requirement for combobox, do not remove -->\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        <!-- paper-input has type="text" for a11y, do not remove -->\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n',
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
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-dropdown-menu` is similar to a native browser select element.
`paper-dropdown-menu` works with selectable content. The currently selected
item is displayed in the control. If no item is selected, the `label` is
displayed instead.

Example:

    <paper-dropdown-menu label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

This example renders a dropdown menu with 4 options.

The child element with the slot `dropdown-content` is used as the dropdown
menu. This can be a [`paper-listbox`](paper-listbox), or any other or
element that acts like an [`iron-selector`](iron-selector).

Specifically, the menu child must fire an
[`iron-select`](iron-selector#event-iron-select) event when one of its
children is selected, and an
[`iron-deselect`](iron-selector#event-iron-deselect) event when a child is
deselected. The selected or deselected item must be passed as the event's
`detail.item` property.

Applications can listen for the `iron-select` and `iron-deselect` events
to react when options are selected and deselected.

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
`--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
`--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
`--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
`--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`

You can also use any of the `paper-input-container` and `paper-menu-button`
style mixins and custom properties to style the internal input and menu button
respectively.

@group Paper Elements
@element paper-dropdown-menu
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-dropdown-menu",
          behaviors: [
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__[
              "IronButtonState"
            ],
            _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__[
              "IronControlState"
            ],
            _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__[
              "IronFormElementBehavior"
            ],
            _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__[
              "IronValidatableBehavior"
            ],
          ],
          properties: {
            /**
             * The derived "label" of the currently selected item. This value
             * is the `label` property on the selected item if set, or else the
             * trimmed text content of the selected item.
             */
            selectedItemLabel: {
              type: String,
              notify: true,
              readOnly: true,
            },

            /**
             * The last selected item. An item is selected if the dropdown menu has
             * a child with slot `dropdown-content`, and that child triggers an
             * `iron-select` event with the selected `item` in the `detail`.
             *
             * @type {?Object}
             */
            selectedItem: {
              type: Object,
              notify: true,
              readOnly: true,
            },

            /**
             * The value for this element that will be used when submitting in
             * a form. It reflects the value of `selectedItemLabel`. If set directly,
             * it will not update the `selectedItemLabel` value.
             */
            value: {
              type: String,
              notify: true,
            },

            /**
             * The label for the dropdown.
             */
            label: {
              type: String,
            },

            /**
             * The placeholder for the dropdown.
             */
            placeholder: {
              type: String,
            },

            /**
             * The error message to display when invalid.
             */
            errorMessage: {
              type: String,
            },

            /**
             * True if the dropdown is open. Otherwise, false.
             */
            opened: {
              type: Boolean,
              notify: true,
              value: false,
              observer: "_openedChanged",
            },

            /**
             * By default, the dropdown will constrain scrolling on the page
             * to itself when opened.
             * Set to true in order to prevent scroll from being constrained
             * to the dropdown when it opens.
             */
            allowOutsideScroll: {
              type: Boolean,
              value: false,
            },

            /**
             * Set to true to disable the floating label. Bind this to the
             * `<paper-input-container>`'s `noLabelFloat` property.
             */
            noLabelFloat: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
            },

            /**
             * Set to true to always float the label. Bind this to the
             * `<paper-input-container>`'s `alwaysFloatLabel` property.
             */
            alwaysFloatLabel: {
              type: Boolean,
              value: false,
            },

            /**
             * Set to true to disable animations when opening and closing the
             * dropdown.
             */
            noAnimations: {
              type: Boolean,
              value: false,
            },

            /**
             * The orientation against which to align the menu dropdown
             * horizontally relative to the dropdown trigger.
             */
            horizontalAlign: {
              type: String,
              value: "right",
            },

            /**
             * The orientation against which to align the menu dropdown
             * vertically relative to the dropdown trigger.
             */
            verticalAlign: {
              type: String,
              value: "top",
            },

            /**
             * Overrides the vertical offset computed in
             * _computeMenuVerticalOffset.
             */
            verticalOffset: Number,

            /**
             * If true, the `horizontalAlign` and `verticalAlign` properties will
             * be considered preferences instead of strict requirements when
             * positioning the dropdown and may be changed if doing so reduces
             * the area of the dropdown falling outside of `fitInto`.
             */
            dynamicAlign: {
              type: Boolean,
            },

            /**
             * Whether focus should be restored to the dropdown when the menu closes.
             */
            restoreFocusOnClose: {
              type: Boolean,
              value: true,
            },
          },
          listeners: {
            tap: "_onTap",
          },

          /**
           * @type {!Object}
           */
          keyBindings: {
            "up down": "open",
            esc: "close",
          },
          hostAttributes: {
            role: "combobox",
            "aria-autocomplete": "none",
            "aria-haspopup": "true",
          },
          observers: ["_selectedItemChanged(selectedItem)"],
          attached: function attached() {
            // NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
            // child will cause an `iron-select` event to fire while the element is
            // still in a `DocumentFragment`. This has the effect of causing
            // handlers not to fire. So, we double check this value on attached:
            var contentElement = this.contentElement;

            if (contentElement && contentElement.selectedItem) {
              this._setSelectedItem(contentElement.selectedItem);
            }
          },

          /**
           * The content element that is contained by the dropdown menu, if any.
           */
          get contentElement() {
            // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
            var nodes = Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__[
                "dom"
              ]
            )(this.$.content).getDistributedNodes();

            for (var i = 0, l = nodes.length; i < l; i++) {
              if (nodes[i].nodeType === Node.ELEMENT_NODE) {
                return nodes[i];
              }
            }
          },

          /**
           * Show the dropdown content.
           */
          open: function open() {
            this.$.menuButton.open();
          },

          /**
           * Hide the dropdown content.
           */
          close: function close() {
            this.$.menuButton.close();
          },

          /**
           * A handler that is called when `iron-select` is fired.
           *
           * @param {CustomEvent} event An `iron-select` event.
           */
          _onIronSelect: function _onIronSelect(event) {
            this._setSelectedItem(event.detail.item);
          },

          /**
           * A handler that is called when `iron-deselect` is fired.
           *
           * @param {CustomEvent} event An `iron-deselect` event.
           */
          _onIronDeselect: function _onIronDeselect(event) {
            this._setSelectedItem(null);
          },

          /**
           * A handler that is called when the dropdown is tapped.
           *
           * @param {CustomEvent} event A tap event.
           */
          _onTap: function _onTap(event) {
            if (
              _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__[
                "findOriginalTarget"
              ](event) === this
            ) {
              this.open();
            }
          },

          /**
           * Compute the label for the dropdown given a selected item.
           *
           * @param {Element} selectedItem A selected Element item, with an
           * optional `label` property.
           */
          _selectedItemChanged: function _selectedItemChanged(selectedItem) {
            var value = "";

            if (!selectedItem) {
              value = "";
            } else {
              value =
                selectedItem.label ||
                selectedItem.getAttribute("label") ||
                selectedItem.textContent.trim();
            }

            this.value = value;

            this._setSelectedItemLabel(value);
          },

          /**
           * Compute the vertical offset of the menu based on the value of
           * `noLabelFloat`.
           *
           * @param {boolean} noLabelFloat True if the label should not float
           * @param {number=} opt_verticalOffset Optional offset from the user
           * above the input, otherwise false.
           */
          _computeMenuVerticalOffset: function _computeMenuVerticalOffset(
            noLabelFloat,
            opt_verticalOffset
          ) {
            // Override offset if it's passed from the user.
            if (opt_verticalOffset) {
              return opt_verticalOffset;
            } // NOTE(cdata): These numbers are somewhat magical because they are
            // derived from the metrics of elements internal to `paper-input`'s
            // template. The metrics will change depending on whether or not the
            // input has a floating label.

            return noLabelFloat ? -4 : 8;
          },

          /**
           * Returns false if the element is required and does not have a selection,
           * and true otherwise.
           * @param {*=} _value Ignored.
           * @return {boolean} true if `required` is false, or if `required` is true
           * and the element has a valid selection.
           */
          _getValidity: function _getValidity(_value) {
            return (
              this.disabled || !this.required || (this.required && !!this.value)
            );
          },
          _openedChanged: function _openedChanged() {
            var openState = this.opened ? "true" : "false";
            var e = this.contentElement;

            if (e) {
              e.setAttribute("aria-expanded", openState);
            }
          },
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
      /*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperItemBehaviorImpl",
          function() {
            return PaperItemBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperItemBehavior",
          function() {
            return PaperItemBehavior;
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

        /** @polymerBehavior PaperItemBehavior */

        var PaperItemBehaviorImpl = {
          hostAttributes: {
            role: "option",
            tabindex: "0",
          },
        };
        /** @polymerBehavior */

        var PaperItemBehavior = [
          _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronButtonState"
          ],
          _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronControlState"
          ],
          PaperItemBehaviorImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
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

        var $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>";
        document.head.appendChild($_documentContainer.content);

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item.js":
      /*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
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
        /* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n',
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
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-item",
          behaviors: [
            _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "PaperItemBehavior"
            ],
          ],
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctY3VzdG9taXplfnBhbmVsLWNvbmZpZy1pbnRlZ3JhdGlvbnN+cGFuZWwtY35lNTc1OGMyYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLWRyb3Bkb3duLW1lbnVcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLyogTk9URShjZGF0YSk6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlXG4gICAgICAgICAqIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtub2lua10pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItZHJvcGRvd24tbWVudS1pY29ucy5qcyc7XG5pbXBvcnQgJy4vcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRHJvcGRvd25cbm1lbnVzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy5odG1sI2J1dHRvbnMtZHJvcGRvd24tYnV0dG9ucylcblxuYHBhcGVyLWRyb3Bkb3duLW1lbnVgIGlzIHNpbWlsYXIgdG8gYSBuYXRpdmUgYnJvd3NlciBzZWxlY3QgZWxlbWVudC5cbmBwYXBlci1kcm9wZG93bi1tZW51YCB3b3JrcyB3aXRoIHNlbGVjdGFibGUgY29udGVudC4gVGhlIGN1cnJlbnRseSBzZWxlY3RlZFxuaXRlbSBpcyBkaXNwbGF5ZWQgaW4gdGhlIGNvbnRyb2wuIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHRoZSBgbGFiZWxgIGlzXG5kaXNwbGF5ZWQgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiWW91ciBmYXZvdXJpdGUgcGFzdHJ5XCI+XG4gICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICA8cGFwZXItaXRlbT5Dcm9pc3NhbnQ8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkRvbnV0PC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5GaW5hbmNpZXI8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPk1hZGVsZWluZTwvcGFwZXItaXRlbT5cbiAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG5cblRoaXMgZXhhbXBsZSByZW5kZXJzIGEgZHJvcGRvd24gbWVudSB3aXRoIDQgb3B0aW9ucy5cblxuVGhlIGNoaWxkIGVsZW1lbnQgd2l0aCB0aGUgc2xvdCBgZHJvcGRvd24tY29udGVudGAgaXMgdXNlZCBhcyB0aGUgZHJvcGRvd25cbm1lbnUuIFRoaXMgY2FuIGJlIGEgW2BwYXBlci1saXN0Ym94YF0ocGFwZXItbGlzdGJveCksIG9yIGFueSBvdGhlciBvclxuZWxlbWVudCB0aGF0IGFjdHMgbGlrZSBhbiBbYGlyb24tc2VsZWN0b3JgXShpcm9uLXNlbGVjdG9yKS5cblxuU3BlY2lmaWNhbGx5LCB0aGUgbWVudSBjaGlsZCBtdXN0IGZpcmUgYW5cbltgaXJvbi1zZWxlY3RgXShpcm9uLXNlbGVjdG9yI2V2ZW50LWlyb24tc2VsZWN0KSBldmVudCB3aGVuIG9uZSBvZiBpdHNcbmNoaWxkcmVuIGlzIHNlbGVjdGVkLCBhbmQgYW5cbltgaXJvbi1kZXNlbGVjdGBdKGlyb24tc2VsZWN0b3IjZXZlbnQtaXJvbi1kZXNlbGVjdCkgZXZlbnQgd2hlbiBhIGNoaWxkIGlzXG5kZXNlbGVjdGVkLiBUaGUgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCBpdGVtIG11c3QgYmUgcGFzc2VkIGFzIHRoZSBldmVudCdzXG5gZGV0YWlsLml0ZW1gIHByb3BlcnR5LlxuXG5BcHBsaWNhdGlvbnMgY2FuIGxpc3RlbiBmb3IgdGhlIGBpcm9uLXNlbGVjdGAgYW5kIGBpcm9uLWRlc2VsZWN0YCBldmVudHNcbnRvIHJlYWN0IHdoZW4gb3B0aW9ucyBhcmUgc2VsZWN0ZWQgYW5kIGRlc2VsZWN0ZWQuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYWxzbyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWRgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB3aGVuIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHJpcHBsZSB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBtZW51IGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXRgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHBhcGVyIGlucHV0IHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1pY29uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBpY29uIHwgYHt9YFxuXG5Zb3UgY2FuIGFsc28gdXNlIGFueSBvZiB0aGUgYHBhcGVyLWlucHV0LWNvbnRhaW5lcmAgYW5kIGBwYXBlci1tZW51LWJ1dHRvbmBcbnN0eWxlIG1peGlucyBhbmQgY3VzdG9tIHByb3BlcnRpZXMgdG8gc3R5bGUgdGhlIGludGVybmFsIGlucHV0IGFuZCBtZW51IGJ1dHRvblxucmVzcGVjdGl2ZWx5LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRyb3Bkb3duLW1lbnVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPCEtLSB0aGlzIGRpdiBmdWxmaWxscyBhbiBhMTF5IHJlcXVpcmVtZW50IGZvciBjb21ib2JveCwgZG8gbm90IHJlbW92ZSAtLT5cbiAgICA8c3BhbiByb2xlPVwiYnV0dG9uXCI+PC9zcGFuPlxuICAgIDxwYXBlci1tZW51LWJ1dHRvbiBpZD1cIm1lbnVCdXR0b25cIiB2ZXJ0aWNhbC1hbGlnbj1cIltbdmVydGljYWxBbGlnbl1dXCIgaG9yaXpvbnRhbC1hbGlnbj1cIltbaG9yaXpvbnRhbEFsaWduXV1cIiBkeW5hbWljLWFsaWduPVwiW1tkeW5hbWljQWxpZ25dXVwiIHZlcnRpY2FsLW9mZnNldD1cIltbX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQobm9MYWJlbEZsb2F0LCB2ZXJ0aWNhbE9mZnNldCldXVwiIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCIgbm8tYW5pbWF0aW9ucz1cIltbbm9BbmltYXRpb25zXV1cIiBvbi1pcm9uLXNlbGVjdD1cIl9vbklyb25TZWxlY3RcIiBvbi1pcm9uLWRlc2VsZWN0PVwiX29uSXJvbkRlc2VsZWN0XCIgb3BlbmVkPVwie3tvcGVuZWR9fVwiIGNsb3NlLW9uLWFjdGl2YXRlIGFsbG93LW91dHNpZGUtc2Nyb2xsPVwiW1thbGxvd091dHNpZGVTY3JvbGxdXVwiIHJlc3RvcmUtZm9jdXMtb24tY2xvc2U9XCJbW3Jlc3RvcmVGb2N1c09uQ2xvc2VdXVwiPlxuICAgICAgPCEtLSBzdXBwb3J0IGh5YnJpZCBtb2RlOiB1c2VyIG1pZ2h0IGJlIHVzaW5nIHBhcGVyLW1lbnUtYnV0dG9uIDEueCB3aGljaCBkaXN0cmlidXRlcyB2aWEgPGNvbnRlbnQ+IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIiBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICA8IS0tIHBhcGVyLWlucHV0IGhhcyB0eXBlPVwidGV4dFwiIGZvciBhMTF5LCBkbyBub3QgcmVtb3ZlIC0tPlxuICAgICAgICA8cGFwZXItaW5wdXQgdHlwZT1cInRleHRcIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIiByZWFkb25seSBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiIHZhbHVlPVwiW1t2YWx1ZV1dXCIgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIiBlcnJvci1tZXNzYWdlPVwiW1tlcnJvck1lc3NhZ2VdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbYWx3YXlzRmxvYXRMYWJlbF1dXCIgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIj5cbiAgICAgICAgICA8IS0tIHN1cHBvcnQgaHlicmlkIG1vZGU6IHVzZXIgbWlnaHQgYmUgdXNpbmcgcGFwZXItaW5wdXQgMS54IHdoaWNoIGRpc3RyaWJ1dGVzIHZpYSA8Y29udGVudD4gLS0+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwicGFwZXItZHJvcGRvd24tbWVudTphcnJvdy1kcm9wLWRvd25cIiBzdWZmaXggc2xvdD1cInN1ZmZpeFwiPjwvaXJvbi1pY29uPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZHJvcGRvd24tY29udGVudFwiIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+PC9zbG90PlxuICAgIDwvcGFwZXItbWVudS1idXR0b24+XG5gLFxuXG4gIGlzOiAncGFwZXItZHJvcGRvd24tbWVudScsXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgSXJvbkJ1dHRvblN0YXRlLFxuICAgIElyb25Db250cm9sU3RhdGUsXG4gICAgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IsXG4gICAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRlcml2ZWQgXCJsYWJlbFwiIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS4gVGhpcyB2YWx1ZVxuICAgICAqIGlzIHRoZSBgbGFiZWxgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3RlZCBpdGVtIGlmIHNldCwgb3IgZWxzZSB0aGVcbiAgICAgKiB0cmltbWVkIHRleHQgY29udGVudCBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1MYWJlbDoge3R5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCBzZWxlY3RlZCBpdGVtLiBBbiBpdGVtIGlzIHNlbGVjdGVkIGlmIHRoZSBkcm9wZG93biBtZW51IGhhc1xuICAgICAqIGEgY2hpbGQgd2l0aCBzbG90IGBkcm9wZG93bi1jb250ZW50YCwgYW5kIHRoYXQgY2hpbGQgdHJpZ2dlcnMgYW5cbiAgICAgKiBgaXJvbi1zZWxlY3RgIGV2ZW50IHdpdGggdGhlIHNlbGVjdGVkIGBpdGVtYCBpbiB0aGUgYGRldGFpbGAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBzdWJtaXR0aW5nIGluXG4gICAgICogYSBmb3JtLiBJdCByZWZsZWN0cyB0aGUgdmFsdWUgb2YgYHNlbGVjdGVkSXRlbUxhYmVsYC4gSWYgc2V0IGRpcmVjdGx5LFxuICAgICAqIGl0IHdpbGwgbm90IHVwZGF0ZSB0aGUgYHNlbGVjdGVkSXRlbUxhYmVsYCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBsYWJlbDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gaW52YWxpZC5cbiAgICAgKi9cbiAgICBlcnJvck1lc3NhZ2U6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZHJvcGRvd24gaXMgb3Blbi4gT3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgKi9cbiAgICBvcGVuZWQ6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgYWxsb3dPdXRzaWRlU2Nyb2xsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBCaW5kIHRoaXMgdG8gdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBub0xhYmVsRmxvYXRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG5vTGFiZWxGbG9hdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIEJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhbmltYXRpb25zIHdoZW4gb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAgICAgKiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBub0FuaW1hdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIG1lbnUgZHJvcGRvd25cbiAgICAgKiBob3Jpem9udGFsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3JpZ2h0J30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyB0aGUgdmVydGljYWwgb2Zmc2V0IGNvbXB1dGVkIGluXG4gICAgICogX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQuXG4gICAgICovXG4gICAgdmVydGljYWxPZmZzZXQ6IE51bWJlcixcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBgaG9yaXpvbnRhbEFsaWduYCBhbmQgYHZlcnRpY2FsQWxpZ25gIHByb3BlcnRpZXMgd2lsbFxuICAgICAqIGJlIGNvbnNpZGVyZWQgcHJlZmVyZW5jZXMgaW5zdGVhZCBvZiBzdHJpY3QgcmVxdWlyZW1lbnRzIHdoZW5cbiAgICAgKiBwb3NpdGlvbmluZyB0aGUgZHJvcGRvd24gYW5kIG1heSBiZSBjaGFuZ2VkIGlmIGRvaW5nIHNvIHJlZHVjZXNcbiAgICAgKiB0aGUgYXJlYSBvZiB0aGUgZHJvcGRvd24gZmFsbGluZyBvdXRzaWRlIG9mIGBmaXRJbnRvYC5cbiAgICAgKi9cbiAgICBkeW5hbWljQWxpZ246IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIHJlc3RvcmVkIHRvIHRoZSBkcm9wZG93biB3aGVuIHRoZSBtZW51IGNsb3Nlcy5cbiAgICAgKi9cbiAgICByZXN0b3JlRm9jdXNPbkNsb3NlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IHRydWV9LFxuICB9LFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uVGFwJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsndXAgZG93bic6ICdvcGVuJywgJ2VzYyc6ICdjbG9zZSd9LFxuXG4gIGhvc3RBdHRyaWJ1dGVzOlxuICAgICAge3JvbGU6ICdjb21ib2JveCcsICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdub25lJywgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSd9LFxuXG4gIG9ic2VydmVyczogWydfc2VsZWN0ZWRJdGVtQ2hhbmdlZChzZWxlY3RlZEl0ZW0pJ10sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE5PVEUoY2RhdGEpOiBEdWUgdG8gdGltaW5nLCBhIHByZXNlbGVjdGVkIHZhbHVlIGluIGEgYElyb25TZWxlY3RhYmxlYFxuICAgIC8vIGNoaWxkIHdpbGwgY2F1c2UgYW4gYGlyb24tc2VsZWN0YCBldmVudCB0byBmaXJlIHdoaWxlIHRoZSBlbGVtZW50IGlzXG4gICAgLy8gc3RpbGwgaW4gYSBgRG9jdW1lbnRGcmFnbWVudGAuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2YgY2F1c2luZ1xuICAgIC8vIGhhbmRsZXJzIG5vdCB0byBmaXJlLiBTbywgd2UgZG91YmxlIGNoZWNrIHRoaXMgdmFsdWUgb24gYXR0YWNoZWQ6XG4gICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICBpZiAoY29udGVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0oY29udGVudEVsZW1lbnQuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IGVsZW1lbnQgdGhhdCBpcyBjb250YWluZWQgYnkgdGhlIGRyb3Bkb3duIG1lbnUsIGlmIGFueS5cbiAgICovXG4gIGdldCBjb250ZW50RWxlbWVudCgpIHtcbiAgICAvLyBQb2x5bWVyIDIueCByZXR1cm5zIHNsb3QuYXNzaWduZWROb2RlcyB3aGljaCBjYW4gY29udGFpbiB0ZXh0IG5vZGVzLlxuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzLiQuY29udGVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGRyb3Bkb3duIGNvbnRlbnQuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQubWVudUJ1dHRvbi5vcGVuKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGRyb3Bkb3duIGNvbnRlbnQuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLm1lbnVCdXR0b24uY2xvc2UoKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYGlyb24tc2VsZWN0YCBpcyBmaXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQW4gYGlyb24tc2VsZWN0YCBldmVudC5cbiAgICovXG4gIF9vbklyb25TZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKGV2ZW50LmRldGFpbC5pdGVtKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYGlyb24tZGVzZWxlY3RgIGlzIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBbiBgaXJvbi1kZXNlbGVjdGAgZXZlbnQuXG4gICAqL1xuICBfb25Jcm9uRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIHRhcCBldmVudC5cbiAgICovXG4gIF9vblRhcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZ2VzdHVyZXMuZmluZE9yaWdpbmFsVGFyZ2V0KGV2ZW50KSA9PT0gdGhpcykge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBsYWJlbCBmb3IgdGhlIGRyb3Bkb3duIGdpdmVuIGEgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzZWxlY3RlZEl0ZW0gQSBzZWxlY3RlZCBFbGVtZW50IGl0ZW0sIHdpdGggYW5cbiAgICogb3B0aW9uYWwgYGxhYmVsYCBwcm9wZXJ0eS5cbiAgICovXG4gIF9zZWxlY3RlZEl0ZW1DaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICB2YXIgdmFsdWUgPSAnJztcbiAgICBpZiAoIXNlbGVjdGVkSXRlbSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBzZWxlY3RlZEl0ZW0ubGFiZWwgfHwgc2VsZWN0ZWRJdGVtLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSB8fFxuICAgICAgICAgIHNlbGVjdGVkSXRlbS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbUxhYmVsKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgdmVydGljYWwgb2Zmc2V0IG9mIHRoZSBtZW51IGJhc2VkIG9uIHRoZSB2YWx1ZSBvZlxuICAgKiBgbm9MYWJlbEZsb2F0YC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBub0xhYmVsRmxvYXQgVHJ1ZSBpZiB0aGUgbGFiZWwgc2hvdWxkIG5vdCBmbG9hdFxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF92ZXJ0aWNhbE9mZnNldCBPcHRpb25hbCBvZmZzZXQgZnJvbSB0aGUgdXNlclxuICAgKiBhYm92ZSB0aGUgaW5wdXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIF9jb21wdXRlTWVudVZlcnRpY2FsT2Zmc2V0OiBmdW5jdGlvbihub0xhYmVsRmxvYXQsIG9wdF92ZXJ0aWNhbE9mZnNldCkge1xuICAgIC8vIE92ZXJyaWRlIG9mZnNldCBpZiBpdCdzIHBhc3NlZCBmcm9tIHRoZSB1c2VyLlxuICAgIGlmIChvcHRfdmVydGljYWxPZmZzZXQpIHtcbiAgICAgIHJldHVybiBvcHRfdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gTk9URShjZGF0YSk6IFRoZXNlIG51bWJlcnMgYXJlIHNvbWV3aGF0IG1hZ2ljYWwgYmVjYXVzZSB0aGV5IGFyZVxuICAgIC8vIGRlcml2ZWQgZnJvbSB0aGUgbWV0cmljcyBvZiBlbGVtZW50cyBpbnRlcm5hbCB0byBgcGFwZXItaW5wdXRgJ3NcbiAgICAvLyB0ZW1wbGF0ZS4gVGhlIG1ldHJpY3Mgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgIC8vIGlucHV0IGhhcyBhIGZsb2F0aW5nIGxhYmVsLlxuICAgIHJldHVybiBub0xhYmVsRmxvYXQgPyAtNCA6IDg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgYW5kIGRvZXMgbm90IGhhdmUgYSBzZWxlY3Rpb24sXG4gICAqIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHsqPX0gX3ZhbHVlIElnbm9yZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYHJlcXVpcmVkYCBpcyBmYWxzZSwgb3IgaWYgYHJlcXVpcmVkYCBpcyB0cnVlXG4gICAqIGFuZCB0aGUgZWxlbWVudCBoYXMgYSB2YWxpZCBzZWxlY3Rpb24uXG4gICAqL1xuICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKF92YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnJlcXVpcmVkIHx8ICh0aGlzLnJlcXVpcmVkICYmICEhdGhpcy52YWx1ZSk7XG4gIH0sXG5cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcGVuU3RhdGUgPSB0aGlzLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRlbnRFbGVtZW50O1xuICAgIGlmIChlKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW5TdGF0ZSk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuLypcbmBQYXBlckl0ZW1CZWhhdmlvcmAgaXMgYSBjb252ZW5pZW5jZSBiZWhhdmlvciBzaGFyZWQgYnkgPHBhcGVyLWl0ZW0+IGFuZFxuPHBhcGVyLWljb24taXRlbT4gdGhhdCBtYW5hZ2VzIHRoZSBzaGFyZWQgY29udHJvbCBzdGF0ZXMgYW5kIGF0dHJpYnV0ZXMgb2ZcbnRoZSBpdGVtcy5cbiovXG4vKiogQHBvbHltZXJCZWhhdmlvciBQYXBlckl0ZW1CZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySXRlbUJlaGF2aW9ySW1wbCA9IHtcbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnb3B0aW9uJywgdGFiaW5kZXg6ICcwJ31cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3IgPVxuICAgIFtJcm9uQnV0dG9uU3RhdGUsIElyb25Db250cm9sU3RhdGUsIFBhcGVySXRlbUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QsIC5wYXBlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXBlci1pdGVtIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSksIC5wYXBlci1pdGVtW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcm9uLXNlbGVjdGVkKSwgLnBhcGVyLWl0ZW0uaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodCwgYm9sZCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1zZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSksIC5wYXBlci1pdGVtW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yLCB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKSwgLnBhcGVyLWl0ZW06Zm9jdXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpOmJlZm9yZSwgLnBhcGVyLWl0ZW06Zm9jdXM6YmVmb3JlIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTGlzdHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9saXN0cy5odG1sKVxuXG5gPHBhcGVyLWl0ZW0+YCBpcyBhbiBpbnRlcmFjdGl2ZSBsaXN0IGl0ZW0uIEJ5IGRlZmF1bHQsIGl0IGlzIGEgaG9yaXpvbnRhbFxuZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPkl0ZW08L3BhcGVyLWl0ZW0+XG5cblVzZSB0aGlzIGVsZW1lbnQgd2l0aCBgPHBhcGVyLWl0ZW0tYm9keT5gIHRvIG1ha2UgTWF0ZXJpYWwgRGVzaWduIHN0eWxlZFxudHdvLWxpbmUgYW5kIHRocmVlLWxpbmUgaXRlbXMuXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRvIHVzZSBgcGFwZXItaXRlbWAgYXMgYSBsaW5rLCB3cmFwIGl0IGluIGFuIGFuY2hvciB0YWcuIFNpbmNlIGBwYXBlci1pdGVtYCB3aWxsXG5hbHJlYWR5IHJlY2VpdmUgZm9jdXMsIHlvdSBtYXkgd2FudCB0byBwcmV2ZW50IHRoZSBhbmNob3IgdGFnIGZyb20gcmVjZWl2aW5nXG5mb2N1cyBhcyB3ZWxsIGJ5IHNldHRpbmcgaXRzIHRhYmluZGV4IHRvIC0xLlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvbHltZXItcHJvamVjdC5vcmcvXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgPHBhcGVyLWl0ZW0gcmFpc2VkPlBvbHltZXIgUHJvamVjdDwvcGFwZXItaXRlbT5cbiAgICA8L2E+XG5cbklmIHlvdSBhcmUgY29uY2VybmVkIGFib3V0IHBlcmZvcm1hbmNlIGFuZCB3YW50IHRvIHVzZSBgcGFwZXItaXRlbWAgaW4gYVxuYHBhcGVyLWxpc3Rib3hgIHdpdGggbWFueSBpdGVtcywgeW91IGNhbiBqdXN0IHVzZSBhIG5hdGl2ZSBgYnV0dG9uYCB3aXRoIHRoZVxuYHBhcGVyLWl0ZW1gIGNsYXNzIGFwcGxpZWQgKHByb3ZpZGVkIHlvdSBoYXZlIGNvcnJlY3RseSBpbmNsdWRlZCB0aGUgc2hhcmVkXG5zdHlsZXMpOlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPkluYm94PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TdGFycmVkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5TZW50IG1haWw8L2J1dHRvbj5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgdGhlIGl0ZW0gfCBgNDhweGBcbmAtLXBhcGVyLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImxpc3RpdGVtXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB1c2FnZSwgaXQgbWF5IGJlXG5tb3JlIGFwcHJvcHJpYXRlIHRvIHNldCBgcm9sZT1cIm1lbnVpdGVtXCJgLCBgcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcImAgb3JcbmByb2xlPVwibWVudWl0ZW1yYWRpb1wiYC5cblxuICAgIDxwYXBlci1pdGVtIHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCI+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICBTaG93IHlvdXIgc3RhdHVzXG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDxwYXBlci1jaGVja2JveD48L3BhcGVyLWNoZWNrYm94PlxuICAgIDwvcGFwZXItaXRlbT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1pdGVtXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQW9FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBO0FBQ0E7QUFtQkE7QUFFQTtBQU9BO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQXZHQTtBQTBHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvUUE7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBO0FBYUE7QUFDQTtBQWZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
