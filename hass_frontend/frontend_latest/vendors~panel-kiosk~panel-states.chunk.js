(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~panel-kiosk~panel-states"],
  {
    /***/ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js ***!
  \**********************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js"
        );
        /* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js"
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

        /**
         * Toggles the shadow property in app-header when content is scrolled to create
         * a sense of depth between the element and the content underneath.
         */

        Object(
          _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["registerEffect"]
        )("waterfall", {
          /**
           *  @this Polymer.AppLayout.ElementWithBackground
           */
          run: function run() {
            this.shadow = this.isOnScreen() && this.isContentBelow();
          },
        });

        /***/
      },

    /***/ "./node_modules/@polymer/iron-pages/iron-pages.js":
      /*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-pages/iron-pages.js ***!
  \********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js"
        );
        /* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
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
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,
          is: "iron-pages",
          behaviors: [
            _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronResizableBehavior"
            ],
            _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__[
              "IronSelectableBehavior"
            ],
          ],
          properties: {
            // as the selected page is the only one visible, activateEvent
            // is both non-sensical and problematic; e.g. in cases where a user
            // handler attempts to change the page and the activateEvent
            // handler immediately changes it back
            activateEvent: {
              type: String,
              value: null,
            },
          },
          observers: ["_selectedPageChanged(selected)"],
          _selectedPageChanged: function(selected, old) {
            this.async(this.notifyResize);
          },
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-card/paper-card.js":
      /*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-card/paper-card.js ***!
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
        /* harmony import */ var _polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-image/iron-image.js */ "./node_modules/@polymer/iron-image/iron-image.js"
        );
        /* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
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
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

`paper-card` is a container with a drop shadow.

Example:

    <paper-card heading="Card Title">
      <div class="card-content">Some content</div>
      <div class="card-actions">
        <paper-button>Some action</paper-button>
      </div>
    </paper-card>

Example - top card image:

    <paper-card heading="Card Title" image="/path/to/image.png" alt="image">
      ...
    </paper-card>

### Accessibility

By default, the `aria-label` will be set to the value of the `heading`
attribute.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-card-background-color` | The background color of the card | `--primary-background-color`
`--paper-card-header-color` | The color of the header text | `#000`
`--paper-card-header` | Mixin applied to the card header section | `{}`
`--paper-card-header-text` | Mixin applied to the title in the card header section | `{}`
`--paper-card-header-image` | Mixin applied to the image in the card header section | `{}`
`--paper-card-header-image-text` | Mixin applied to the text overlapping the image in the card header section | `{}`
`--paper-card-content` | Mixin applied to the card content section| `{}`
`--paper-card-actions` | Mixin applied to the card action section | `{}`
`--paper-card` | Mixin applied to the card | `{}`

@group Paper Elements
@element paper-card
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__[
            "html"
          ]`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,
          is: "paper-card",
          properties: {
            /**
             * The title of the card.
             */
            heading: {
              type: String,
              value: "",
              observer: "_headingChanged",
            },

            /**
             * The url of the title image of the card.
             */
            image: {
              type: String,
              value: "",
            },

            /**
             * The text alternative of the card's title image.
             */
            alt: {
              type: String,
            },

            /**
             * When `true`, any change to the image url property will cause the
             * `placeholder` image to be shown until the image is fully rendered.
             */
            preloadImage: {
              type: Boolean,
              value: false,
            },

            /**
             * When `preloadImage` is true, setting `fadeImage` to true will cause the
             * image to fade into place.
             */
            fadeImage: {
              type: Boolean,
              value: false,
            },

            /**
             * This image will be used as a background/placeholder until the src image
             * has loaded. Use of a data-URI for placeholder is encouraged for instant
             * rendering.
             */
            placeholderImage: {
              type: String,
              value: null,
            },

            /**
             * The z-depth of the card, from 0-5.
             */
            elevation: {
              type: Number,
              value: 1,
              reflectToAttribute: true,
            },

            /**
             * Set this to true to animate the card shadow when setting a new
             * `z` value.
             */
            animatedShadow: {
              type: Boolean,
              value: false,
            },

            /**
             * Read-only property used to pass down the `animatedShadow` value to
             * the underlying paper-material style (since they have different names).
             */
            animated: {
              type: Boolean,
              reflectToAttribute: true,
              readOnly: true,
              computed: "_computeAnimated(animatedShadow)",
            },
          },

          /**
           * Format function for aria-hidden. Use the ! operator results in the
           * empty string when given a falsy value.
           */
          _isHidden: function(image) {
            return image ? "false" : "true";
          },
          _headingChanged: function(heading) {
            var currentHeading = this.getAttribute("heading"),
              currentLabel = this.getAttribute("aria-label");

            if (
              typeof currentLabel !== "string" ||
              currentLabel === currentHeading
            ) {
              this.setAttribute("aria-label", heading);
            }
          },
          _computeHeadingClass: function(image) {
            return image ? " over-image" : "";
          },
          _computeAnimated: function(animatedShadow) {
            return animatedShadow;
          },
        });

        /***/
      },

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

        const $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
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

        const $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
        document.head.appendChild($_documentContainer.content);

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

        const PaperItemBehaviorImpl = {
          hostAttributes: {
            role: "option",
            tabindex: "0",
          },
        };
        /** @polymerBehavior */

        const PaperItemBehavior = [
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

        const $_documentContainer = document.createElement("template");
        $_documentContainer.setAttribute("style", "display: none;");
        $_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
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
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvZWZmZWN0cy93YXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tcGFnZXMvaXJvbi1wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4uL2FwcC1zY3JvbGwtZWZmZWN0cy1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7cmVnaXN0ZXJFZmZlY3R9IGZyb20gJy4uLy4uL2hlbHBlcnMvaGVscGVycy5qcyc7XG4vKipcbiAqIFRvZ2dsZXMgdGhlIHNoYWRvdyBwcm9wZXJ0eSBpbiBhcHAtaGVhZGVyIHdoZW4gY29udGVudCBpcyBzY3JvbGxlZCB0byBjcmVhdGVcbiAqIGEgc2Vuc2Ugb2YgZGVwdGggYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgdGhlIGNvbnRlbnQgdW5kZXJuZWF0aC5cbiAqL1xucmVnaXN0ZXJFZmZlY3QoJ3dhdGVyZmFsbCcsIHtcbiAgLyoqXG4gICAqICBAdGhpcyBQb2x5bWVyLkFwcExheW91dC5FbGVtZW50V2l0aEJhY2tncm91bmRcbiAgICovXG4gIHJ1bjogZnVuY3Rpb24gcnVuKCkge1xuICAgIHRoaXMuc2hhZG93ID0gdGhpcy5pc09uU2NyZWVuKCkgJiYgdGhpcy5pc0NvbnRlbnRCZWxvdygpO1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNlbGVjdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLXNlbGVjdGFibGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5gaXJvbi1wYWdlc2AgaXMgdXNlZCB0byBzZWxlY3Qgb25lIG9mIGl0cyBjaGlsZHJlbiB0byBzaG93LiBPbmUgdXNlIGlzIHRvIGN5Y2xlXG50aHJvdWdoIGEgbGlzdCBvZiBjaGlsZHJlbiBcInBhZ2VzXCIuXG5cbkV4YW1wbGU6XG5cbiAgICA8aXJvbi1wYWdlcyBzZWxlY3RlZD1cIjBcIj5cbiAgICAgIDxkaXY+T25lPC9kaXY+XG4gICAgICA8ZGl2PlR3bzwvZGl2PlxuICAgICAgPGRpdj5UaHJlZTwvZGl2PlxuICAgIDwvaXJvbi1wYWdlcz5cblxuICAgIDxzY3JpcHQ+XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaXJvbi1wYWdlcycpO1xuICAgICAgICBwYWdlcy5zZWxlY3ROZXh0KCk7XG4gICAgICB9KTtcbiAgICA8L3NjcmlwdD5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoOm5vdChzbG90KTpub3QoLmlyb24tc2VsZWN0ZWQpKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ2lyb24tcGFnZXMnLFxuICBiZWhhdmlvcnM6IFtJcm9uUmVzaXphYmxlQmVoYXZpb3IsIElyb25TZWxlY3RhYmxlQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8vIGFzIHRoZSBzZWxlY3RlZCBwYWdlIGlzIHRoZSBvbmx5IG9uZSB2aXNpYmxlLCBhY3RpdmF0ZUV2ZW50XG4gICAgLy8gaXMgYm90aCBub24tc2Vuc2ljYWwgYW5kIHByb2JsZW1hdGljOyBlLmcuIGluIGNhc2VzIHdoZXJlIGEgdXNlclxuICAgIC8vIGhhbmRsZXIgYXR0ZW1wdHMgdG8gY2hhbmdlIHRoZSBwYWdlIGFuZCB0aGUgYWN0aXZhdGVFdmVudFxuICAgIC8vIGhhbmRsZXIgaW1tZWRpYXRlbHkgY2hhbmdlcyBpdCBiYWNrXG4gICAgYWN0aXZhdGVFdmVudDoge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3NlbGVjdGVkUGFnZUNoYW5nZWQoc2VsZWN0ZWQpJ10sXG5cbiAgX3NlbGVjdGVkUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkLCBvbGQpIHtcbiAgICB0aGlzLmFzeW5jKHRoaXMubm90aWZ5UmVzaXplKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlcy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLWNhcmRgIGlzIGEgY29udGFpbmVyIHdpdGggYSBkcm9wIHNoYWRvdy5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+U29tZSBjb250ZW50PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+U29tZSBhY3Rpb248L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItY2FyZD5cblxuRXhhbXBsZSAtIHRvcCBjYXJkIGltYWdlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIiBpbWFnZT1cIi9wYXRoL3RvL2ltYWdlLnBuZ1wiIGFsdD1cImltYWdlXCI+XG4gICAgICAuLi5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkJ5IGRlZmF1bHQsIHRoZSBgYXJpYS1sYWJlbGAgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlIG9mIHRoZSBgaGVhZGluZ2BcbmF0dHJpYnV0ZS5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvcmAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY2FyZCB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgaGVhZGVyIHRleHQgfCBgIzAwMGBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRpdGxlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2VgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRleHQgb3ZlcmxhcHBpbmcgdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgY29udGVudCBzZWN0aW9ufCBge31gXG5gLS1wYXBlci1jYXJkLWFjdGlvbnNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBhY3Rpb24gc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1jYXJkXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZDtcbiAgICAgIH1cblxuICAgICAgLyogSUUgMTAgc3VwcG9ydCBmb3IgSFRNTDUgaGlkZGVuIGF0dHIgKi9cbiAgICAgIDpob3N0KFtoaWRkZW5dKSwgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIGlyb24taW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taXJvbi1pbWFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvciwgIzAwMCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dC5vdmVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1hY3Rpb25zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjJcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIzXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjVcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxpcm9uLWltYWdlIGhpZGRlblxcJD1cIltbIWltYWdlXV1cIiBhcmlhLWhpZGRlblxcJD1cIltbX2lzSGlkZGVuKGltYWdlKV1dXCIgc3JjPVwiW1tpbWFnZV1dXCIgYWx0PVwiW1thbHRdXVwiIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlckltYWdlXV1cIiBwcmVsb2FkPVwiW1twcmVsb2FkSW1hZ2VdXVwiIGZhZGU9XCJbW2ZhZGVJbWFnZV1dXCI+PC9pcm9uLWltYWdlPlxuICAgICAgPGRpdiBoaWRkZW5cXCQ9XCJbWyFoZWFkaW5nXV1cIiBjbGFzc1xcJD1cInRpdGxlLXRleHQgW1tfY29tcHV0ZUhlYWRpbmdDbGFzcyhpbWFnZSldXVwiPltbaGVhZGluZ11dPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItY2FyZCcsXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBoZWFkaW5nOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJycsIG9ic2VydmVyOiAnX2hlYWRpbmdDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSB0aXRsZSBpbWFnZSBvZiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBpbWFnZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGFsdGVybmF0aXZlIG9mIHRoZSBjYXJkJ3MgdGl0bGUgaW1hZ2UuXG4gICAgICovXG4gICAgYWx0OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBpbWFnZSB1cmwgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGVcbiAgICAgKiBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBpbWFnZSBpcyBmdWxseSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBwcmVsb2FkSW1hZ2U6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgcHJlbG9hZEltYWdlYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlSW1hZ2VgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGVcbiAgICAgKiBpbWFnZSB0byBmYWRlIGludG8gcGxhY2UuXG4gICAgICovXG4gICAgZmFkZUltYWdlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlXG4gICAgICogaGFzIGxvYWRlZC4gVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnRcbiAgICAgKiByZW5kZXJpbmcuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXJJbWFnZToge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHotZGVwdGggb2YgdGhlIGNhcmQsIGZyb20gMC01LlxuICAgICAqL1xuICAgIGVsZXZhdGlvbjoge3R5cGU6IE51bWJlciwgdmFsdWU6IDEsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIGNhcmQgc2hhZG93IHdoZW4gc2V0dGluZyBhIG5ld1xuICAgICAqIGB6YCB2YWx1ZS5cbiAgICAgKi9cbiAgICBhbmltYXRlZFNoYWRvdzoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZWFkLW9ubHkgcHJvcGVydHkgdXNlZCB0byBwYXNzIGRvd24gdGhlIGBhbmltYXRlZFNoYWRvd2AgdmFsdWUgdG9cbiAgICAgKiB0aGUgdW5kZXJseWluZyBwYXBlci1tYXRlcmlhbCBzdHlsZSAoc2luY2UgdGhleSBoYXZlIGRpZmZlcmVudCBuYW1lcykuXG4gICAgICovXG4gICAgYW5pbWF0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBbmltYXRlZChhbmltYXRlZFNoYWRvdyknXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JtYXQgZnVuY3Rpb24gZm9yIGFyaWEtaGlkZGVuLiBVc2UgdGhlICEgb3BlcmF0b3IgcmVzdWx0cyBpbiB0aGVcbiAgICogZW1wdHkgc3RyaW5nIHdoZW4gZ2l2ZW4gYSBmYWxzeSB2YWx1ZS5cbiAgICovXG4gIF9pc0hpZGRlbjogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICByZXR1cm4gaW1hZ2UgPyAnZmFsc2UnIDogJ3RydWUnO1xuICB9LFxuXG4gIF9oZWFkaW5nQ2hhbmdlZDogZnVuY3Rpb24oaGVhZGluZykge1xuICAgIHZhciBjdXJyZW50SGVhZGluZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdoZWFkaW5nJyksXG4gICAgICAgIGN1cnJlbnRMYWJlbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICBpZiAodHlwZW9mIGN1cnJlbnRMYWJlbCAhPT0gJ3N0cmluZycgfHwgY3VycmVudExhYmVsID09PSBjdXJyZW50SGVhZGluZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBoZWFkaW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgX2NvbXB1dGVIZWFkaW5nQ2xhc3M6IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgcmV0dXJuIGltYWdlID8gJyBvdmVyLWltYWdlJyA6ICcnO1xuICB9LFxuXG4gIF9jb21wdXRlQW5pbWF0ZWQ6IGZ1bmN0aW9uKGFuaW1hdGVkU2hhZG93KSB7XG4gICAgcmV0dXJuIGFuaW1hdGVkU2hhZG93O1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgIGA8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPVwicGFwZXItZHJvcGRvd24tbWVudVwiIHNpemU9XCIyNFwiPlxuPHN2Zz48ZGVmcz5cbjxnIGlkPVwiYXJyb3ctZHJvcC1kb3duXCI+PHBhdGggZD1cIk03IDEwbDUgNSA1LTV6XCI+PC9wYXRoPjwvZz5cbjwvZGVmcz48L3N2Zz5cbjwvaXJvbi1pY29uc2V0LXN2Zz5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgIGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAvKiBOT1RFKGNkYXRhKTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGVcbiAgICAgICAgICogdmFsdWUgdG8gYmUgXFxgdHJhbnNwYXJlbnRcXGAuXG4gICAgICAgICAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vaW5rXSkgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vLWxhYmVsLWZsb2F0XSkgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LXJpcHBsZTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbWVudS1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWJ1dHRvbjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWlucHV0O1xuICAgICAgfVxuXG4gICAgICBpcm9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCwgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDQ4cHgpO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSwgLnBhcGVyLWl0ZW1baGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlyb24tc2VsZWN0ZWQpLCAucGFwZXItaXRlbS5pcm9uLXNlbGVjdGVkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0LCBib2xkKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLXNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSwgLnBhcGVyLWl0ZW1bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3IsIHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpLCAucGFwZXItaXRlbTpmb2N1cyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyk6YmVmb3JlLCAucGFwZXItaXRlbTpmb2N1czpiZWZvcmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstZGl2aWRlci1vcGFjaXR5KTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltMaXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2xpc3RzLmh0bWwpXG5cbmA8cGFwZXItaXRlbT5gIGlzIGFuIGludGVyYWN0aXZlIGxpc3QgaXRlbS4gQnkgZGVmYXVsdCwgaXQgaXMgYSBob3Jpem9udGFsXG5mbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+SXRlbTwvcGFwZXItaXRlbT5cblxuVXNlIHRoaXMgZWxlbWVudCB3aXRoIGA8cGFwZXItaXRlbS1ib2R5PmAgdG8gbWFrZSBNYXRlcmlhbCBEZXNpZ24gc3R5bGVkXG50d28tbGluZSBhbmQgdGhyZWUtbGluZSBpdGVtcy5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDwvcGFwZXItaXRlbT5cblxuVG8gdXNlIGBwYXBlci1pdGVtYCBhcyBhIGxpbmssIHdyYXAgaXQgaW4gYW4gYW5jaG9yIHRhZy4gU2luY2UgYHBhcGVyLWl0ZW1gIHdpbGxcbmFscmVhZHkgcmVjZWl2ZSBmb2N1cywgeW91IG1heSB3YW50IHRvIHByZXZlbnQgdGhlIGFuY2hvciB0YWcgZnJvbSByZWNlaXZpbmdcbmZvY3VzIGFzIHdlbGwgYnkgc2V0dGluZyBpdHMgdGFiaW5kZXggdG8gLTEuXG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy9cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8cGFwZXItaXRlbSByYWlzZWQ+UG9seW1lciBQcm9qZWN0PC9wYXBlci1pdGVtPlxuICAgIDwvYT5cblxuSWYgeW91IGFyZSBjb25jZXJuZWQgYWJvdXQgcGVyZm9ybWFuY2UgYW5kIHdhbnQgdG8gdXNlIGBwYXBlci1pdGVtYCBpbiBhXG5gcGFwZXItbGlzdGJveGAgd2l0aCBtYW55IGl0ZW1zLCB5b3UgY2FuIGp1c3QgdXNlIGEgbmF0aXZlIGBidXR0b25gIHdpdGggdGhlXG5gcGFwZXItaXRlbWAgY2xhc3MgYXBwbGllZCAocHJvdmlkZWQgeW91IGhhdmUgY29ycmVjdGx5IGluY2x1ZGVkIHRoZSBzaGFyZWRcbnN0eWxlcyk6XG5cbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cblxuICAgIDxwYXBlci1saXN0Ym94PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+SW5ib3g8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlN0YXJyZWQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlNlbnQgbWFpbDwvYnV0dG9uPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiB0aGUgaXRlbSB8IGA0OHB4YFxuYC0tcGFwZXItaXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5UaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwibGlzdGl0ZW1cImAgYnkgZGVmYXVsdC4gRGVwZW5kaW5nIG9uIHVzYWdlLCBpdCBtYXkgYmVcbm1vcmUgYXBwcm9wcmlhdGUgdG8gc2V0IGByb2xlPVwibWVudWl0ZW1cImAsIGByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiYCBvclxuYHJvbGU9XCJtZW51aXRlbXJhZGlvXCJgLlxuXG4gICAgPHBhcGVyLWl0ZW0gcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcIj5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgIFNob3cgeW91ciBzdGF0dXNcbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHBhcGVyLWNoZWNrYm94PjwvcGFwZXItY2hlY2tib3g+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWl0ZW1cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTs7Ozs7Ozs7Ozs7O0FBREE7QUFlQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQWhDQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQWlHQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxEQTtBQUNBO0FBeURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBMQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0VBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0RBOzs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBOzs7Ozs7Ozs7OztBQURBO0FBY0E7QUFDQTtBQWZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
