(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~panel-calendar~panel-config-automation~panel-config-script"],
  {
    /***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
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
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js"
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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
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

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
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

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,
          is: "app-header-layout",
          behaviors: [
            _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "AppLayoutBehavior"
            ],
          ],
          properties: {
            /**
             * If true, the current element will have its own scrolling region.
             * Otherwise, it will use the document scroll to control the header.
             */
            hasScrollingRegion: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
            },
          },
          observers: ["resetLayout(isAttached, hasScrollingRegion)"],

          /**
           * A reference to the app-header element.
           *
           * @property header
           */
          get header() {
            return Object(
              _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__[
                "dom"
              ]
            )(this.$.headerSlot).getDistributedNodes()[0];
          },

          _updateLayoutStates: function() {
            var header = this.header;

            if (!this.isAttached || !header) {
              return;
            } // Remove the initializing class, which staticly positions the header and
            // the content until the height of the header can be read.

            this.$.wrapper.classList.remove("initializing"); // Update scroll target.

            header.scrollTarget = this.hasScrollingRegion
              ? this.$.contentContainer
              : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
            // style writes (i.e. getBoundingClientRect() below).

            var headerHeight = header.offsetHeight; // Update the header position.

            if (!this.hasScrollingRegion) {
              requestAnimationFrame(
                function() {
                  var rect = this.getBoundingClientRect();
                  var rightOffset =
                    document.documentElement.clientWidth - rect.right;
                  header.style.left = rect.left + "px";
                  header.style.right = rightOffset + "px";
                }.bind(this)
              );
            } else {
              header.style.left = "";
              header.style.right = "";
            } // Update the content container position.

            var containerStyle = this.$.contentContainer.style;

            if (header.fixed && !header.condenses && this.hasScrollingRegion) {
              // If the header size does not change and we're using a scrolling region,
              // exclude the header area from the scrolling region so that the header
              // doesn't overlap the scrollbar.
              containerStyle.marginTop = headerHeight + "px";
              containerStyle.paddingTop = "";
            } else {
              containerStyle.paddingTop = headerHeight + "px";
              containerStyle.marginTop = "";
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

    /***/ "./node_modules/preact/dist/preact.mjs":
      /*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
      /*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
      /***/ function(
        __webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "h",
          function() {
            return h;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createElement",
          function() {
            return h;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cloneElement",
          function() {
            return cloneElement;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createRef",
          function() {
            return createRef;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Component",
          function() {
            return Component;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function() {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "rerender",
          function() {
            return rerender;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "options",
          function() {
            return options;
          }
        );
        var VNode = function VNode() {};

        var options = {};
        var stack = [];
        var EMPTY_CHILDREN = [];

        function h(nodeName, attributes) {
          var children = EMPTY_CHILDREN,
            lastSimple,
            child,
            simple,
            i;

          for (i = arguments.length; i-- > 2; ) {
            stack.push(arguments[i]);
          }

          if (attributes && attributes.children != null) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
          }

          while (stack.length) {
            if ((child = stack.pop()) && child.pop !== undefined) {
              for (i = child.length; i--; ) {
                stack.push(child[i]);
              }
            } else {
              if (typeof child === "boolean") child = null;

              if ((simple = typeof nodeName !== "function")) {
                if (child == null) child = "";
                else if (typeof child === "number") child = String(child);
                else if (typeof child !== "string") simple = false;
              }

              if (simple && lastSimple) {
                children[children.length - 1] += child;
              } else if (children === EMPTY_CHILDREN) {
                children = [child];
              } else {
                children.push(child);
              }

              lastSimple = simple;
            }
          }

          var p = new VNode();
          p.nodeName = nodeName;
          p.children = children;
          p.attributes = attributes == null ? undefined : attributes;
          p.key = attributes == null ? undefined : attributes.key;
          if (options.vnode !== undefined) options.vnode(p);
          return p;
        }

        function extend(obj, props) {
          for (var i in props) {
            obj[i] = props[i];
          }

          return obj;
        }

        function applyRef(ref, value) {
          if (ref != null) {
            if (typeof ref == "function") ref(value);
            else ref.current = value;
          }
        }

        var defer =
          typeof Promise == "function"
            ? Promise.resolve().then.bind(Promise.resolve())
            : setTimeout;

        function cloneElement(vnode, props) {
          return h(
            vnode.nodeName,
            extend(extend({}, vnode.attributes), props),
            arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children
          );
        }

        var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
        var items = [];

        function enqueueRender(component) {
          if (
            !component._dirty &&
            (component._dirty = true) &&
            items.push(component) == 1
          ) {
            (options.debounceRendering || defer)(rerender);
          }
        }

        function rerender() {
          var p;

          while ((p = items.pop())) {
            if (p._dirty) renderComponent(p);
          }
        }

        function isSameNodeType(node, vnode, hydrating) {
          if (typeof vnode === "string" || typeof vnode === "number") {
            return node.splitText !== undefined;
          }

          if (typeof vnode.nodeName === "string") {
            return (
              !node._componentConstructor && isNamedNode(node, vnode.nodeName)
            );
          }

          return hydrating || node._componentConstructor === vnode.nodeName;
        }

        function isNamedNode(node, nodeName) {
          return (
            node.normalizedNodeName === nodeName ||
            node.nodeName.toLowerCase() === nodeName.toLowerCase()
          );
        }

        function getNodeProps(vnode) {
          var props = extend({}, vnode.attributes);
          props.children = vnode.children;
          var defaultProps = vnode.nodeName.defaultProps;

          if (defaultProps !== undefined) {
            for (var i in defaultProps) {
              if (props[i] === undefined) {
                props[i] = defaultProps[i];
              }
            }
          }

          return props;
        }

        function createNode(nodeName, isSvg) {
          var node = isSvg
            ? document.createElementNS("http://www.w3.org/2000/svg", nodeName)
            : document.createElement(nodeName);
          node.normalizedNodeName = nodeName;
          return node;
        }

        function removeNode(node) {
          var parentNode = node.parentNode;
          if (parentNode) parentNode.removeChild(node);
        }

        function setAccessor(node, name, old, value, isSvg) {
          if (name === "className") name = "class";

          if (name === "key") {
          } else if (name === "ref") {
            applyRef(old, null);
            applyRef(value, node);
          } else if (name === "class" && !isSvg) {
            node.className = value || "";
          } else if (name === "style") {
            if (
              !value ||
              typeof value === "string" ||
              typeof old === "string"
            ) {
              node.style.cssText = value || "";
            }

            if (value && typeof value === "object") {
              if (typeof old !== "string") {
                for (var i in old) {
                  if (!(i in value)) node.style[i] = "";
                }
              }

              for (var i in value) {
                node.style[i] =
                  typeof value[i] === "number" &&
                  IS_NON_DIMENSIONAL.test(i) === false
                    ? value[i] + "px"
                    : value[i];
              }
            }
          } else if (name === "dangerouslySetInnerHTML") {
            if (value) node.innerHTML = value.__html || "";
          } else if (name[0] == "o" && name[1] == "n") {
            var useCapture = name !== (name = name.replace(/Capture$/, ""));
            name = name.toLowerCase().substring(2);

            if (value) {
              if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else {
              node.removeEventListener(name, eventProxy, useCapture);
            }

            (node._listeners || (node._listeners = {}))[name] = value;
          } else if (
            name !== "list" &&
            name !== "type" &&
            !isSvg &&
            name in node
          ) {
            try {
              node[name] = value == null ? "" : value;
            } catch (e) {}

            if ((value == null || value === false) && name != "spellcheck")
              node.removeAttribute(name);
          } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ""));

            if (value == null || value === false) {
              if (ns)
                node.removeAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  name.toLowerCase()
                );
              else node.removeAttribute(name);
            } else if (typeof value !== "function") {
              if (ns)
                node.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  name.toLowerCase(),
                  value
                );
              else node.setAttribute(name, value);
            }
          }
        }

        function eventProxy(e) {
          return this._listeners[e.type](
            (options.event && options.event(e)) || e
          );
        }

        var mounts = [];
        var diffLevel = 0;
        var isSvgMode = false;
        var hydrating = false;

        function flushMounts() {
          var c;

          while ((c = mounts.shift())) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
          }
        }

        function diff(dom, vnode, context, mountAll, parent, componentRoot) {
          if (!diffLevel++) {
            isSvgMode = parent != null && parent.ownerSVGElement !== undefined;
            hydrating = dom != null && !("__preactattr_" in dom);
          }

          var ret = idiff(dom, vnode, context, mountAll, componentRoot);
          if (parent && ret.parentNode !== parent) parent.appendChild(ret);

          if (!--diffLevel) {
            hydrating = false;
            if (!componentRoot) flushMounts();
          }

          return ret;
        }

        function idiff(dom, vnode, context, mountAll, componentRoot) {
          var out = dom,
            prevSvgMode = isSvgMode;
          if (vnode == null || typeof vnode === "boolean") vnode = "";

          if (typeof vnode === "string" || typeof vnode === "number") {
            if (
              dom &&
              dom.splitText !== undefined &&
              dom.parentNode &&
              (!dom._component || componentRoot)
            ) {
              if (dom.nodeValue != vnode) {
                dom.nodeValue = vnode;
              }
            } else {
              out = document.createTextNode(vnode);

              if (dom) {
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, true);
              }
            }

            out["__preactattr_"] = true;
            return out;
          }

          var vnodeName = vnode.nodeName;

          if (typeof vnodeName === "function") {
            return buildComponentFromVNode(dom, vnode, context, mountAll);
          }

          isSvgMode =
            vnodeName === "svg"
              ? true
              : vnodeName === "foreignObject"
              ? false
              : isSvgMode;
          vnodeName = String(vnodeName);

          if (!dom || !isNamedNode(dom, vnodeName)) {
            out = createNode(vnodeName, isSvgMode);

            if (dom) {
              while (dom.firstChild) {
                out.appendChild(dom.firstChild);
              }

              if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
              recollectNodeTree(dom, true);
            }
          }

          var fc = out.firstChild,
            props = out["__preactattr_"],
            vchildren = vnode.children;

          if (props == null) {
            props = out["__preactattr_"] = {};

            for (var a = out.attributes, i = a.length; i--; ) {
              props[a[i].name] = a[i].value;
            }
          }

          if (
            !hydrating &&
            vchildren &&
            vchildren.length === 1 &&
            typeof vchildren[0] === "string" &&
            fc != null &&
            fc.splitText !== undefined &&
            fc.nextSibling == null
          ) {
            if (fc.nodeValue != vchildren[0]) {
              fc.nodeValue = vchildren[0];
            }
          } else if ((vchildren && vchildren.length) || fc != null) {
            innerDiffNode(
              out,
              vchildren,
              context,
              mountAll,
              hydrating || props.dangerouslySetInnerHTML != null
            );
          }

          diffAttributes(out, vnode.attributes, props);
          isSvgMode = prevSvgMode;
          return out;
        }

        function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
          var originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren ? vchildren.length : 0,
            j,
            c,
            f,
            vchild,
            child;

          if (len !== 0) {
            for (var i = 0; i < len; i++) {
              var _child = originalChildren[i],
                props = _child["__preactattr_"],
                key =
                  vlen && props
                    ? _child._component
                      ? _child._component.__key
                      : props.key
                    : null;

              if (key != null) {
                keyedLen++;
                keyed[key] = _child;
              } else if (
                props ||
                (_child.splitText !== undefined
                  ? isHydrating
                    ? _child.nodeValue.trim()
                    : true
                  : isHydrating)
              ) {
                children[childrenLen++] = _child;
              }
            }
          }

          if (vlen !== 0) {
            for (var i = 0; i < vlen; i++) {
              vchild = vchildren[i];
              child = null;
              var key = vchild.key;

              if (key != null) {
                if (keyedLen && keyed[key] !== undefined) {
                  child = keyed[key];
                  keyed[key] = undefined;
                  keyedLen--;
                }
              } else if (min < childrenLen) {
                for (j = min; j < childrenLen; j++) {
                  if (
                    children[j] !== undefined &&
                    isSameNodeType((c = children[j]), vchild, isHydrating)
                  ) {
                    child = c;
                    children[j] = undefined;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                  }
                }
              }

              child = idiff(child, vchild, context, mountAll);
              f = originalChildren[i];

              if (child && child !== dom && child !== f) {
                if (f == null) {
                  dom.appendChild(child);
                } else if (child === f.nextSibling) {
                  removeNode(f);
                } else {
                  dom.insertBefore(child, f);
                }
              }
            }
          }

          if (keyedLen) {
            for (var i in keyed) {
              if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
            }
          }

          while (min <= childrenLen) {
            if ((child = children[childrenLen--]) !== undefined)
              recollectNodeTree(child, false);
          }
        }

        function recollectNodeTree(node, unmountOnly) {
          var component = node._component;

          if (component) {
            unmountComponent(component);
          } else {
            if (node["__preactattr_"] != null)
              applyRef(node["__preactattr_"].ref, null);

            if (unmountOnly === false || node["__preactattr_"] == null) {
              removeNode(node);
            }

            removeChildren(node);
          }
        }

        function removeChildren(node) {
          node = node.lastChild;

          while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, true);
            node = next;
          }
        }

        function diffAttributes(dom, attrs, old) {
          var name;

          for (name in old) {
            if (!(attrs && attrs[name] != null) && old[name] != null) {
              setAccessor(
                dom,
                name,
                old[name],
                (old[name] = undefined),
                isSvgMode
              );
            }
          }

          for (name in attrs) {
            if (
              name !== "children" &&
              name !== "innerHTML" &&
              (!(name in old) ||
                attrs[name] !==
                  (name === "value" || name === "checked"
                    ? dom[name]
                    : old[name]))
            ) {
              setAccessor(
                dom,
                name,
                old[name],
                (old[name] = attrs[name]),
                isSvgMode
              );
            }
          }
        }

        var recyclerComponents = [];

        function createComponent(Ctor, props, context) {
          var inst,
            i = recyclerComponents.length;

          if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
          } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
          }

          while (i--) {
            if (recyclerComponents[i].constructor === Ctor) {
              inst.nextBase = recyclerComponents[i].nextBase;
              recyclerComponents.splice(i, 1);
              return inst;
            }
          }

          return inst;
        }

        function doRender(props, state, context) {
          return this.constructor(props, context);
        }

        function setComponentProps(
          component,
          props,
          renderMode,
          context,
          mountAll
        ) {
          if (component._disable) return;
          component._disable = true;
          component.__ref = props.ref;
          component.__key = props.key;
          delete props.ref;
          delete props.key;

          if (
            typeof component.constructor.getDerivedStateFromProps ===
            "undefined"
          ) {
            if (!component.base || mountAll) {
              if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) {
              component.componentWillReceiveProps(props, context);
            }
          }

          if (context && context !== component.context) {
            if (!component.prevContext)
              component.prevContext = component.context;
            component.context = context;
          }

          if (!component.prevProps) component.prevProps = component.props;
          component.props = props;
          component._disable = false;

          if (renderMode !== 0) {
            if (
              renderMode === 1 ||
              options.syncComponentUpdates !== false ||
              !component.base
            ) {
              renderComponent(component, 1, mountAll);
            } else {
              enqueueRender(component);
            }
          }

          applyRef(component.__ref, component);
        }

        function renderComponent(component, renderMode, mountAll, isChild) {
          if (component._disable) return;
          var props = component.props,
            state = component.state,
            context = component.context,
            previousProps = component.prevProps || props,
            previousState = component.prevState || state,
            previousContext = component.prevContext || context,
            isUpdate = component.base,
            nextBase = component.nextBase,
            initialBase = isUpdate || nextBase,
            initialChildComponent = component._component,
            skip = false,
            snapshot = previousContext,
            rendered,
            inst,
            cbase;

          if (component.constructor.getDerivedStateFromProps) {
            state = extend(
              extend({}, state),
              component.constructor.getDerivedStateFromProps(props, state)
            );
            component.state = state;
          }

          if (isUpdate) {
            component.props = previousProps;
            component.state = previousState;
            component.context = previousContext;

            if (
              renderMode !== 2 &&
              component.shouldComponentUpdate &&
              component.shouldComponentUpdate(props, state, context) === false
            ) {
              skip = true;
            } else if (component.componentWillUpdate) {
              component.componentWillUpdate(props, state, context);
            }

            component.props = props;
            component.state = state;
            component.context = context;
          }

          component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
          component._dirty = false;

          if (!skip) {
            rendered = component.render(props, state, context);

            if (component.getChildContext) {
              context = extend(
                extend({}, context),
                component.getChildContext()
              );
            }

            if (isUpdate && component.getSnapshotBeforeUpdate) {
              snapshot = component.getSnapshotBeforeUpdate(
                previousProps,
                previousState
              );
            }

            var childComponent = rendered && rendered.nodeName,
              toUnmount,
              base;

            if (typeof childComponent === "function") {
              var childProps = getNodeProps(rendered);
              inst = initialChildComponent;

              if (
                inst &&
                inst.constructor === childComponent &&
                childProps.key == inst.__key
              ) {
                setComponentProps(inst, childProps, 1, context, false);
              } else {
                toUnmount = inst;
                component._component = inst = createComponent(
                  childComponent,
                  childProps,
                  context
                );
                inst.nextBase = inst.nextBase || nextBase;
                inst._parentComponent = component;
                setComponentProps(inst, childProps, 0, context, false);
                renderComponent(inst, 1, mountAll, true);
              }

              base = inst.base;
            } else {
              cbase = initialBase;
              toUnmount = initialChildComponent;

              if (toUnmount) {
                cbase = component._component = null;
              }

              if (initialBase || renderMode === 1) {
                if (cbase) cbase._component = null;
                base = diff(
                  cbase,
                  rendered,
                  context,
                  mountAll || !isUpdate,
                  initialBase && initialBase.parentNode,
                  true
                );
              }
            }

            if (
              initialBase &&
              base !== initialBase &&
              inst !== initialChildComponent
            ) {
              var baseParent = initialBase.parentNode;

              if (baseParent && base !== baseParent) {
                baseParent.replaceChild(base, initialBase);

                if (!toUnmount) {
                  initialBase._component = null;
                  recollectNodeTree(initialBase, false);
                }
              }
            }

            if (toUnmount) {
              unmountComponent(toUnmount);
            }

            component.base = base;

            if (base && !isChild) {
              var componentRef = component,
                t = component;

              while ((t = t._parentComponent)) {
                (componentRef = t).base = base;
              }

              base._component = componentRef;
              base._componentConstructor = componentRef.constructor;
            }
          }

          if (!isUpdate || mountAll) {
            mounts.push(component);
          } else if (!skip) {
            if (component.componentDidUpdate) {
              component.componentDidUpdate(
                previousProps,
                previousState,
                snapshot
              );
            }

            if (options.afterUpdate) options.afterUpdate(component);
          }

          while (component._renderCallbacks.length) {
            component._renderCallbacks.pop().call(component);
          }

          if (!diffLevel && !isChild) flushMounts();
        }

        function buildComponentFromVNode(dom, vnode, context, mountAll) {
          var c = dom && dom._component,
            originalComponent = c,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);

          while (c && !isOwner && (c = c._parentComponent)) {
            isOwner = c.constructor === vnode.nodeName;
          }

          if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
          } else {
            if (originalComponent && !isDirectOwner) {
              unmountComponent(originalComponent);
              dom = oldDom = null;
            }

            c = createComponent(vnode.nodeName, props, context);

            if (dom && !c.nextBase) {
              c.nextBase = dom;
              oldDom = null;
            }

            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;

            if (oldDom && dom !== oldDom) {
              oldDom._component = null;
              recollectNodeTree(oldDom, false);
            }
          }

          return dom;
        }

        function unmountComponent(component) {
          if (options.beforeUnmount) options.beforeUnmount(component);
          var base = component.base;
          component._disable = true;
          if (component.componentWillUnmount) component.componentWillUnmount();
          component.base = null;
          var inner = component._component;

          if (inner) {
            unmountComponent(inner);
          } else if (base) {
            if (base["__preactattr_"] != null)
              applyRef(base["__preactattr_"].ref, null);
            component.nextBase = base;
            removeNode(base);
            recyclerComponents.push(component);
            removeChildren(base);
          }

          applyRef(component.__ref, null);
        }

        function Component(props, context) {
          this._dirty = true;
          this.context = context;
          this.props = props;
          this.state = this.state || {};
          this._renderCallbacks = [];
        }

        extend(Component.prototype, {
          setState: function setState(state, callback) {
            if (!this.prevState) this.prevState = this.state;
            this.state = extend(
              extend({}, this.state),
              typeof state === "function"
                ? state(this.state, this.props)
                : state
            );
            if (callback) this._renderCallbacks.push(callback);
            enqueueRender(this);
          },
          forceUpdate: function forceUpdate(callback) {
            if (callback) this._renderCallbacks.push(callback);
            renderComponent(this, 2);
          },
          render: function render() {},
        });

        function render(vnode, parent, merge) {
          return diff(merge, vnode, {}, false, parent, false);
        }

        function createRef() {
          return {};
        }

        var preact = {
          h: h,
          createElement: h,
          cloneElement: cloneElement,
          createRef: createRef,
          Component: Component,
          render: render,
          rerender: rerender,
          options: options,
        };
        /* harmony default export */ __webpack_exports__["default"] = preact;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jYWxlbmRhcn5wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Zub2RlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2xvbmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlbmRlci1xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Zkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92ZG9tL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92ZG9tL2NvbXBvbmVudC1yZWN5Y2xlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Zkb20vY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge0FwcExheW91dEJlaGF2aW9yfSBmcm9tICcuLi9hcHAtbGF5b3V0LWJlaGF2aW9yL2FwcC1sYXlvdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbmFwcC1oZWFkZXItbGF5b3V0IGlzIGEgd3JhcHBlciBlbGVtZW50IHRoYXQgcG9zaXRpb25zIGFuIGFwcC1oZWFkZXIgYW5kIG90aGVyXG5jb250ZW50LiBUaGlzIGVsZW1lbnQgdXNlcyB0aGUgZG9jdW1lbnQgc2Nyb2xsIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYWxzb1xuZGVmaW5lIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cblxuVXNpbmcgdGhlIGRvY3VtZW50IHNjcm9sbDpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0PlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5Vc2luZyBhbiBvd24gc2Nyb2xsaW5nIHJlZ2lvbjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5BZGQgdGhlIGBmdWxsYmxlZWRgIGF0dHJpYnV0ZSB0byBhcHAtaGVhZGVyLWxheW91dCB0byBtYWtlIGl0IGZpdCB0aGUgc2l6ZSBvZlxuaXRzIGNvbnRhaW5lcjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGZ1bGxibGVlZD5cbiAuLi5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLWhlYWRlci1sYXlvdXRcbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2ltcGxlLmh0bWwgU2ltcGxlIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vbXVzaWMuaHRtbCBNdXNpYyBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL2Zvb3Rlci5odG1sIEZvb3RlciBEZW1vXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2UgYXBwLWhlYWRlci1sYXlvdXQgdG8gaGF2ZSBpdHMgb3duIHN0YWNraW5nIGNvbnRleHQgc28gdGhhdCBpdHMgcGFyZW50IGNhblxuICAgICAgICAgKiBjb250cm9sIHRoZSBzdGFja2luZyBvZiBpdCByZWxhdGl2ZSB0byBvdGhlciBlbGVtZW50cyAoZS5nLiBhcHAtZHJhd2VyLWxheW91dCkuXG4gICAgICAgICAqIFRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBcXGBpc29sYXRpb246IGlzb2xhdGVcXGAsIGJ1dCB0aGF0J3Mgbm90IHdlbGwgc3VwcG9ydGVkXG4gICAgICAgICAqIGFjcm9zcyBicm93c2Vycy5cbiAgICAgICAgICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIsXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgIDxzbG90IGlkPVwiaGVhZGVyU2xvdFwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2FwcC1oZWFkZXItbGF5b3V0JyxcbiAgYmVoYXZpb3JzOiBbQXBwTGF5b3V0QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgY3VycmVudCBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgZG9jdW1lbnQgc2Nyb2xsIHRvIGNvbnRyb2wgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICBoYXNTY3JvbGxpbmdSZWdpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsncmVzZXRMYXlvdXQoaXNBdHRhY2hlZCwgaGFzU2Nyb2xsaW5nUmVnaW9uKSddLFxuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYXBwLWhlYWRlciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJvcGVydHkgaGVhZGVyXG4gICAqL1xuICBnZXQgaGVhZGVyKCkge1xuICAgIHJldHVybiBkb20odGhpcy4kLmhlYWRlclNsb3QpLmdldERpc3RyaWJ1dGVkTm9kZXMoKVswXTtcbiAgfSxcblxuICBfdXBkYXRlTGF5b3V0U3RhdGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIWhlYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWxpemluZyBjbGFzcywgd2hpY2ggc3RhdGljbHkgcG9zaXRpb25zIHRoZSBoZWFkZXIgYW5kXG4gICAgLy8gdGhlIGNvbnRlbnQgdW50aWwgdGhlIGhlaWdodCBvZiB0aGUgaGVhZGVyIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuJC53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2luaXRpYWxpemluZycpO1xuICAgIC8vIFVwZGF0ZSBzY3JvbGwgdGFyZ2V0LlxuICAgIGhlYWRlci5zY3JvbGxUYXJnZXQgPSB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbiA/XG4gICAgICAgIHRoaXMuJC5jb250ZW50Q29udGFpbmVyIDpcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAvLyBHZXQgaGVhZGVyIGhlaWdodCBoZXJlIHNvIHRoYXQgc3R5bGUgcmVhZHMgYXJlIGJhdGNoZWQgdG9nZXRoZXIgYmVmb3JlXG4gICAgLy8gc3R5bGUgd3JpdGVzIChpLmUuIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGJlbG93KS5cbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAvLyBVcGRhdGUgdGhlIGhlYWRlciBwb3NpdGlvbi5cbiAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodDtcbiAgICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyAncHgnO1xuICAgICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSByaWdodE9mZnNldCArICdweCc7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB0aGUgY29udGVudCBjb250YWluZXIgcG9zaXRpb24uXG4gICAgdmFyIGNvbnRhaW5lclN0eWxlID0gdGhpcy4kLmNvbnRlbnRDb250YWluZXIuc3R5bGU7XG4gICAgaWYgKGhlYWRlci5maXhlZCAmJiAhaGVhZGVyLmNvbmRlbnNlcyAmJiB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgLy8gSWYgdGhlIGhlYWRlciBzaXplIGRvZXMgbm90IGNoYW5nZSBhbmQgd2UncmUgdXNpbmcgYSBzY3JvbGxpbmcgcmVnaW9uLFxuICAgICAgLy8gZXhjbHVkZSB0aGUgaGVhZGVyIGFyZWEgZnJvbSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbiBzbyB0aGF0IHRoZSBoZWFkZXJcbiAgICAgIC8vIGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgc2Nyb2xsYmFyLlxuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCwgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDQ4cHgpO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSwgLnBhcGVyLWl0ZW1baGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlyb24tc2VsZWN0ZWQpLCAucGFwZXItaXRlbS5pcm9uLXNlbGVjdGVkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0LCBib2xkKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLXNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSwgLnBhcGVyLWl0ZW1bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3IsIHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpLCAucGFwZXItaXRlbTpmb2N1cyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyk6YmVmb3JlLCAucGFwZXItaXRlbTpmb2N1czpiZWZvcmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstZGl2aWRlci1vcGFjaXR5KTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltMaXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2xpc3RzLmh0bWwpXG5cbmA8cGFwZXItaXRlbT5gIGlzIGFuIGludGVyYWN0aXZlIGxpc3QgaXRlbS4gQnkgZGVmYXVsdCwgaXQgaXMgYSBob3Jpem9udGFsXG5mbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+SXRlbTwvcGFwZXItaXRlbT5cblxuVXNlIHRoaXMgZWxlbWVudCB3aXRoIGA8cGFwZXItaXRlbS1ib2R5PmAgdG8gbWFrZSBNYXRlcmlhbCBEZXNpZ24gc3R5bGVkXG50d28tbGluZSBhbmQgdGhyZWUtbGluZSBpdGVtcy5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDwvcGFwZXItaXRlbT5cblxuVG8gdXNlIGBwYXBlci1pdGVtYCBhcyBhIGxpbmssIHdyYXAgaXQgaW4gYW4gYW5jaG9yIHRhZy4gU2luY2UgYHBhcGVyLWl0ZW1gIHdpbGxcbmFscmVhZHkgcmVjZWl2ZSBmb2N1cywgeW91IG1heSB3YW50IHRvIHByZXZlbnQgdGhlIGFuY2hvciB0YWcgZnJvbSByZWNlaXZpbmdcbmZvY3VzIGFzIHdlbGwgYnkgc2V0dGluZyBpdHMgdGFiaW5kZXggdG8gLTEuXG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy9cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8cGFwZXItaXRlbSByYWlzZWQ+UG9seW1lciBQcm9qZWN0PC9wYXBlci1pdGVtPlxuICAgIDwvYT5cblxuSWYgeW91IGFyZSBjb25jZXJuZWQgYWJvdXQgcGVyZm9ybWFuY2UgYW5kIHdhbnQgdG8gdXNlIGBwYXBlci1pdGVtYCBpbiBhXG5gcGFwZXItbGlzdGJveGAgd2l0aCBtYW55IGl0ZW1zLCB5b3UgY2FuIGp1c3QgdXNlIGEgbmF0aXZlIGBidXR0b25gIHdpdGggdGhlXG5gcGFwZXItaXRlbWAgY2xhc3MgYXBwbGllZCAocHJvdmlkZWQgeW91IGhhdmUgY29ycmVjdGx5IGluY2x1ZGVkIHRoZSBzaGFyZWRcbnN0eWxlcyk6XG5cbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cblxuICAgIDxwYXBlci1saXN0Ym94PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+SW5ib3g8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlN0YXJyZWQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlNlbnQgbWFpbDwvYnV0dG9uPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiB0aGUgaXRlbSB8IGA0OHB4YFxuYC0tcGFwZXItaXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5UaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwibGlzdGl0ZW1cImAgYnkgZGVmYXVsdC4gRGVwZW5kaW5nIG9uIHVzYWdlLCBpdCBtYXkgYmVcbm1vcmUgYXBwcm9wcmlhdGUgdG8gc2V0IGByb2xlPVwibWVudWl0ZW1cImAsIGByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiYCBvclxuYHJvbGU9XCJtZW51aXRlbXJhZGlvXCJgLlxuXG4gICAgPHBhcGVyLWl0ZW0gcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcIj5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgIFNob3cgeW91ciBzdGF0dXNcbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHBhcGVyLWNoZWNrYm94PjwvcGFwZXItY2hlY2tib3g+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWl0ZW1cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG4gKiBWaXJ0dWFsIERPTSBOb2RlXG4gKiBAdHlwZWRlZiBWTm9kZVxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBmdW5jdGlvbn0gbm9kZU5hbWUgVGhlIHN0cmluZyBvZiB0aGUgRE9NIG5vZGUgdG8gY3JlYXRlIG9yIENvbXBvbmVudCBjb25zdHJ1Y3RvciB0byByZW5kZXJcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8Vk5vZGUgfCBzdHJpbmc+fSBjaGlsZHJlbiBUaGUgY2hpbGRyZW4gb2Ygbm9kZVxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWR9IGtleSBUaGUga2V5IHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBWTm9kZSBpbiBhIGxpc3RcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBhdHRyaWJ1dGVzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgVk5vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IFZOb2RlID0gZnVuY3Rpb24gVk5vZGUoKSB7fTtcbiIsIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9jb21wb25lbnQnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi92bm9kZScpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogR2xvYmFsIG9wdGlvbnNcbiAqIEBwdWJsaWNcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3N5bmNDb21wb25lbnRVcGRhdGVzXSBJZiBgdHJ1ZWAsIGBwcm9wYCBjaGFuZ2VzIHRyaWdnZXIgc3luY2hyb25vdXMgY29tcG9uZW50IHVwZGF0ZXMuIERlZmF1bHRzIHRvIHRydWUuXG4gKiBAcHJvcGVydHkgeyh2bm9kZTogVk5vZGUpID0+IHZvaWR9IFt2bm9kZV0gUHJvY2Vzc2VzIGFsbCBjcmVhdGVkIFZOb2Rlcy5cbiAqIEBwcm9wZXJ0eSB7KGNvbXBvbmVudDogQ29tcG9uZW50KSA9PiB2b2lkfSBbYWZ0ZXJNb3VudF0gSG9vayBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gKiBAcHJvcGVydHkgeyhjb21wb25lbnQ6IENvbXBvbmVudCkgPT4gdm9pZH0gW2FmdGVyVXBkYXRlXSBIb29rIGludm9rZWQgYWZ0ZXIgdGhlIERPTSBpcyB1cGRhdGVkIHdpdGggYSBjb21wb25lbnQncyBsYXRlc3QgcmVuZGVyLlxuICogQHByb3BlcnR5IHsoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHZvaWR9IFtiZWZvcmVVbm1vdW50XSBIb29rIGludm9rZWQgaW1tZWRpYXRlbHkgYmVmb3JlIGEgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqIEBwcm9wZXJ0eSB7KHJlcmVuZGVyOiBmdW5jdGlvbikgPT4gdm9pZH0gW2RlYm91bmNlUmVuZGVyaW5nXSBIb29rIGludm9rZWQgd2hlbmV2ZXIgYSByZXJlbmRlciBpcyByZXF1ZXN0ZWQuIENhbiBiZSB1c2VkIHRvIGRlYm91bmNlIHJlcmVuZGVycy5cbiAqIEBwcm9wZXJ0eSB7KGV2ZW50OiBFdmVudCkgPT4gRXZlbnQgfCB2b2lkfSBbZXZlbnRdIEhvb2sgaW52b2tlZCBiZWZvcmUgYW55IFByZWFjdCBldmVudCBsaXN0ZW5lcnMuIFRoZSByZXR1cm4gdmFsdWUgKGlmIGFueSkgcmVwbGFjZXMgdGhlIG5hdGl2ZSBicm93c2VyIGV2ZW50IGdpdmVuIHRvIGV2ZW50IGxpc3RlbmVyc1xuICovXG5cbi8qKiBAdHlwZSB7T3B0aW9uc30gICovXG5jb25zdCBvcHRpb25zID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxuXG5jb25zdCBzdGFjayA9IFtdO1xuXG5jb25zdCBFTVBUWV9DSElMRFJFTiA9IFtdO1xuXG4vKipcbiAqIEpTWC9oeXBlcnNjcmlwdCByZXZpdmVyLlxuICogQHNlZSBodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3hcbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTdlZThmOGUzMzBhYjA5OTAwYTFhMWEwXG4gKlxuICogTm90ZTogdGhpcyBpcyBleHBvcnRlZCBhcyBib3RoIGBoKClgIGFuZCBgY3JlYXRlRWxlbWVudCgpYCBmb3IgY29tcGF0aWJpbGl0eVxuICogcmVhc29ucy5cbiAqXG4gKiBDcmVhdGVzIGEgVk5vZGUgKHZpcnR1YWwgRE9NIGVsZW1lbnQpLiBBIHRyZWUgb2YgVk5vZGVzIGNhbiBiZSB1c2VkIGFzIGFcbiAqIGxpZ2h0d2VpZ2h0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzdHJ1Y3R1cmUgb2YgYSBET00gdHJlZS4gVGhpcyBzdHJ1Y3R1cmUgY2FuXG4gKiBiZSByZWFsaXplZCBieSByZWN1cnNpdmVseSBjb21wYXJpbmcgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBfYWN0dWFsXyBET01cbiAqIHN0cnVjdHVyZSwgYW5kIGFwcGx5aW5nIG9ubHkgdGhlIGRpZmZlcmVuY2VzLlxuICpcbiAqIGBoKClgL2BjcmVhdGVFbGVtZW50KClgIGFjY2VwdHMgYW4gZWxlbWVudCBuYW1lLCBhIGxpc3Qgb2YgYXR0cmlidXRlcy9wcm9wcyxcbiAqIGFuZCBvcHRpb25hbGx5IGNoaWxkcmVuIHRvIGFwcGVuZCB0byB0aGUgZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZSBUaGUgZm9sbG93aW5nIERPTSB0cmVlXG4gKlxuICogYDxkaXYgaWQ9XCJmb29cIiBuYW1lPVwiYmFyXCI+SGVsbG8hPC9kaXY+YFxuICpcbiAqIGNhbiBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIGFzOlxuICpcbiAqIGBoKCdkaXYnLCB7IGlkOiAnZm9vJywgbmFtZSA6ICdiYXInIH0sICdIZWxsbyEnKTtgXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBmdW5jdGlvbn0gbm9kZU5hbWUgQW4gZWxlbWVudCBuYW1lLiBFeDogYGRpdmAsIGBhYCwgYHNwYW5gLCBldGMuXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IGF0dHJpYnV0ZXMgQW55IGF0dHJpYnV0ZXMvcHJvcHMgdG8gc2V0IG9uIHRoZSBjcmVhdGVkIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1ZOb2RlW119IFtyZXN0XSBBZGRpdGlvbmFsIGFyZ3VtZW50cyBhcmUgdGFrZW4gdG8gYmUgY2hpbGRyZW4gdG9cbiAqICBhcHBlbmQuIENhbiBiZSBpbmZpbml0ZWx5IG5lc3RlZCBBcnJheXMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZSwgYXR0cmlidXRlcykge1xuXHRsZXQgY2hpbGRyZW49RU1QVFlfQ0hJTERSRU4sIGxhc3RTaW1wbGUsIGNoaWxkLCBzaW1wbGUsIGk7XG5cdGZvciAoaT1hcmd1bWVudHMubGVuZ3RoOyBpLS0gPiAyOyApIHtcblx0XHRzdGFjay5wdXNoKGFyZ3VtZW50c1tpXSk7XG5cdH1cblx0aWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy5jaGlsZHJlbiE9bnVsbCkge1xuXHRcdGlmICghc3RhY2subGVuZ3RoKSBzdGFjay5wdXNoKGF0dHJpYnV0ZXMuY2hpbGRyZW4pO1xuXHRcdGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuXHR9XG5cdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRpZiAoKGNoaWxkID0gc3RhY2sucG9wKCkpICYmIGNoaWxkLnBvcCE9PXVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yIChpPWNoaWxkLmxlbmd0aDsgaS0tOyApIHN0YWNrLnB1c2goY2hpbGRbaV0pO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgY2hpbGQ9PT0nYm9vbGVhbicpIGNoaWxkID0gbnVsbDtcblxuXHRcdFx0aWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUhPT0nZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZiAoY2hpbGQ9PW51bGwpIGNoaWxkID0gJyc7XG5cdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjaGlsZD09PSdudW1iZXInKSBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG5cdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjaGlsZCE9PSdzdHJpbmcnKSBzaW1wbGUgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG5cdFx0XHRcdGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aC0xXSArPSBjaGlsZDtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGNoaWxkcmVuPT09RU1QVFlfQ0hJTERSRU4pIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSBbY2hpbGRdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRsYXN0U2ltcGxlID0gc2ltcGxlO1xuXHRcdH1cblx0fVxuXG5cdGxldCBwID0gbmV3IFZOb2RlKCk7XG5cdHAubm9kZU5hbWUgPSBub2RlTmFtZTtcblx0cC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRwLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzPT1udWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcztcblx0cC5rZXkgPSBhdHRyaWJ1dGVzPT1udWxsID8gdW5kZWZpbmVkIDogYXR0cmlidXRlcy5rZXk7XG5cblx0Ly8gaWYgYSBcInZub2RlIGhvb2tcIiBpcyBkZWZpbmVkLCBwYXNzIGV2ZXJ5IGNyZWF0ZWQgVk5vZGUgdG8gaXRcblx0aWYgKG9wdGlvbnMudm5vZGUhPT11bmRlZmluZWQpIG9wdGlvbnMudm5vZGUocCk7XG5cblx0cmV0dXJuIHA7XG59XG4iLCIvKipcbiAqIENvcHkgYWxsIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIG9udG8gYG9iamAuXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIE9iamVjdCBvbnRvIHdoaWNoIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvcGllZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBPYmplY3QgZnJvbSB3aGljaCB0byBjb3B5IHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChvYmosIHByb3BzKSB7XG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gb2JqO1xufVxuXG4vKiogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBbcmVmPW51bGxdXG4gKiAgQHBhcmFtIHthbnl9IFt2YWx1ZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUpIHtcblx0aWYgKHJlZiE9bnVsbCkge1xuXHRcdGlmICh0eXBlb2YgcmVmPT0nZnVuY3Rpb24nKSByZWYodmFsdWUpO1xuXHRcdGVsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcblx0fVxufVxuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBhc3luY2hyb25vdXNseSwgYXMgc29vbiBhcyBwb3NzaWJsZS4gTWFrZXNcbiAqIHVzZSBvZiBIVE1MIFByb21pc2UgdG8gc2NoZWR1bGUgdGhlIGNhbGxiYWNrIGlmIGF2YWlsYWJsZSxcbiAqIG90aGVyd2lzZSBmYWxsaW5nIGJhY2sgdG8gYHNldFRpbWVvdXRgIChtYWlubHkgZm9yIElFPDExKS5cbiAqIEB0eXBlIHsoY2FsbGJhY2s6IGZ1bmN0aW9uKSA9PiB2b2lkfVxuICovXG5leHBvcnQgY29uc3QgZGVmZXIgPSB0eXBlb2YgUHJvbWlzZT09J2Z1bmN0aW9uJyA/IFByb21pc2UucmVzb2x2ZSgpLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSkgOiBzZXRUaW1lb3V0O1xuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGggfSBmcm9tICcuL2gnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHNcbiAqIGNoaWxkcmVuLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgRE9NIGVsZW1lbnQgdG8gY2xvbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBBdHRyaWJ1dGVzL3Byb3BzIHRvIGFkZCB3aGVuIGNsb25pbmdcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuL3Zub2RlJykuVk5vZGU+fSBbcmVzdF0gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudFxuICogIGNoaWxkcmVuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcykge1xuXHRyZXR1cm4gaChcblx0XHR2bm9kZS5ub2RlTmFtZSxcblx0XHRleHRlbmQoZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKSwgcHJvcHMpLFxuXHRcdGFyZ3VtZW50cy5sZW5ndGg+MiA/IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHZub2RlLmNoaWxkcmVuXG5cdCk7XG59XG4iLCIvLyByZW5kZXIgbW9kZXNcblxuLyoqIERvIG5vdCByZS1yZW5kZXIgYSBjb21wb25lbnQgKi9cbmV4cG9ydCBjb25zdCBOT19SRU5ERVIgPSAwO1xuLyoqIFN5bmNocm9ub3VzbHkgcmUtcmVuZGVyIGEgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBTWU5DX1JFTkRFUiA9IDE7XG4vKiogU3luY2hyb25vdXNseSByZS1yZW5kZXIgYSBjb21wb25lbnQsIGV2ZW4gaWYgaXRzIGxpZmVjeWNsZSBtZXRob2RzIGF0dGVtcHQgdG8gcHJldmVudCBpdC4gKi9cbmV4cG9ydCBjb25zdCBGT1JDRV9SRU5ERVIgPSAyO1xuLyoqIFF1ZXVlIGFzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgYSBjb21wb25lbnQgYW5kIGl0J3MgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBBU1lOQ19SRU5ERVIgPSAzO1xuXG5cbmV4cG9ydCBjb25zdCBBVFRSX0tFWSA9ICdfX3ByZWFjdGF0dHJfJztcblxuLyoqIERPTSBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIE5PVCBoYXZlIFwicHhcIiBhZGRlZCB3aGVuIG51bWVyaWMgKi9cbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtcblxuIiwiaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IGRlZmVyIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IHJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vdmRvbS9jb21wb25lbnQnO1xuXG4vKipcbiAqIE1hbmFnZWQgcXVldWUgb2YgZGlydHkgY29tcG9uZW50cyB0byBiZSByZS1yZW5kZXJlZFxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9jb21wb25lbnQnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgaXRlbXMgPSBbXTtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2NvbXBvbmVudCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoY29tcG9uZW50KSB7XG5cdGlmICghY29tcG9uZW50Ll9kaXJ0eSAmJiAoY29tcG9uZW50Ll9kaXJ0eSA9IHRydWUpICYmIGl0ZW1zLnB1c2goY29tcG9uZW50KT09MSkge1xuXHRcdChvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nIHx8IGRlZmVyKShyZXJlbmRlcik7XG5cdH1cbn1cblxuLyoqIFJlcmVuZGVyIGFsbCBlbnF1ZXVlZCBkaXJ0eSBjb21wb25lbnRzICovXG5leHBvcnQgZnVuY3Rpb24gcmVyZW5kZXIoKSB7XG5cdGxldCBwO1xuXHR3aGlsZSAoIChwID0gaXRlbXMucG9wKCkpICkge1xuXHRcdGlmIChwLl9kaXJ0eSkgcmVuZGVyQ29tcG9uZW50KHApO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJztcblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBub2RlcyBhcmUgZXF1aXZhbGVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBub2RlIERPTSBOb2RlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi92bm9kZScpLlZOb2RlfSB2bm9kZSBWaXJ0dWFsIERPTSBub2RlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2h5ZHJhdGluZz1mYWxzZV0gSWYgdHJ1ZSwgaWdub3JlcyBjb21wb25lbnQgY29uc3RydWN0b3JzXG4gKiAgd2hlbiBjb21wYXJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTm9kZVR5cGUobm9kZSwgdm5vZGUsIGh5ZHJhdGluZykge1xuXHRpZiAodHlwZW9mIHZub2RlPT09J3N0cmluZycgfHwgdHlwZW9mIHZub2RlPT09J251bWJlcicpIHtcblx0XHRyZXR1cm4gbm9kZS5zcGxpdFRleHQhPT11bmRlZmluZWQ7XG5cdH1cblx0aWYgKHR5cGVvZiB2bm9kZS5ub2RlTmFtZT09PSdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuICFub2RlLl9jb21wb25lbnRDb25zdHJ1Y3RvciAmJiBpc05hbWVkTm9kZShub2RlLCB2bm9kZS5ub2RlTmFtZSk7XG5cdH1cblx0cmV0dXJuIGh5ZHJhdGluZyB8fCBub2RlLl9jb21wb25lbnRDb25zdHJ1Y3Rvcj09PXZub2RlLm5vZGVOYW1lO1xufVxuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gRWxlbWVudCBoYXMgYSBnaXZlbiBub2RlTmFtZSwgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IG5vZGUgQSBET00gRWxlbWVudCB0byBpbnNwZWN0IHRoZSBuYW1lIG9mLlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVOYW1lIFVubm9ybWFsaXplZCBuYW1lIHRvIGNvbXBhcmUgYWdhaW5zdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZWROb2RlKG5vZGUsIG5vZGVOYW1lKSB7XG5cdHJldHVybiBub2RlLm5vcm1hbGl6ZWROb2RlTmFtZT09PW5vZGVOYW1lIHx8IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PW5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5cblxuLyoqXG4gKiBSZWNvbnN0cnVjdCBDb21wb25lbnQtc3R5bGUgYHByb3BzYCBmcm9tIGEgVk5vZGUuXG4gKiBFbnN1cmVzIGRlZmF1bHQvZmFsbGJhY2sgdmFsdWVzIGZyb20gYGRlZmF1bHRQcm9wc2A6XG4gKiBPd24tcHJvcGVydGllcyBvZiBgZGVmYXVsdFByb3BzYCBub3QgcHJlc2VudCBpbiBgdm5vZGUuYXR0cmlidXRlc2AgYXJlIGFkZGVkLlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL3Zub2RlJykuVk5vZGV9IHZub2RlIFRoZSBWTm9kZSB0byBnZXQgcHJvcHMgZm9yXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcHJvcHMgdG8gdXNlIGZvciB0aGlzIFZOb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlUHJvcHModm5vZGUpIHtcblx0bGV0IHByb3BzID0gZXh0ZW5kKHt9LCB2bm9kZS5hdHRyaWJ1dGVzKTtcblx0cHJvcHMuY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcblxuXHRsZXQgZGVmYXVsdFByb3BzID0gdm5vZGUubm9kZU5hbWUuZGVmYXVsdFByb3BzO1xuXHRpZiAoZGVmYXVsdFByb3BzIT09dW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChsZXQgaSBpbiBkZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChwcm9wc1tpXT09PXVuZGVmaW5lZCkge1xuXHRcdFx0XHRwcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJvcHM7XG59XG4iLCJpbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYXBwbHlSZWYgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEEgRE9NIGV2ZW50IGxpc3RlbmVyXG4gKiBAdHlwZWRlZiB7KGU6IEV2ZW50KSA9PiB2b2lkfSBFdmVudExpc3RuZXJcbiAqL1xuXG4vKipcbiAqIEEgbWFwcGluZyBvZiBldmVudCB0eXBlcyB0byBldmVudCBsaXN0ZW5lcnNcbiAqIEB0eXBlZGVmIHtPYmplY3QuPHN0cmluZywgRXZlbnRMaXN0ZW5lcj59IEV2ZW50TGlzdGVuZXJNYXBcbiAqL1xuXG4vKipcbiAqIFByb3BlcnRpZXMgUHJlYWN0IGFkZHMgdG8gZWxlbWVudHMgaXQgY3JlYXRlc1xuICogQHR5cGVkZWYgUHJlYWN0RWxlbWVudEV4dGVuc2lvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbm9ybWFsaXplZE5vZGVOYW1lXSBBIG5vcm1hbGl6ZWQgbm9kZSBuYW1lIHRvIHVzZSBpbiBkaWZmaW5nXG4gKiBAcHJvcGVydHkge0V2ZW50TGlzdGVuZXJNYXB9IFtfbGlzdGVuZXJzXSBBIG1hcCBvZiBldmVudCBsaXN0ZW5lcnMgYWRkZWQgYnkgY29tcG9uZW50cyB0byB0aGlzIERPTSBub2RlXG4gKiBAcHJvcGVydHkge2ltcG9ydCgnLi4vY29tcG9uZW50JykuQ29tcG9uZW50fSBbX2NvbXBvbmVudF0gVGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcmVkIHRoaXMgRE9NIG5vZGVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IFtfY29tcG9uZW50Q29uc3RydWN0b3JdIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgY29tcG9uZW50IHRoYXQgcmVuZGVyZWQgdGhpcyBET00gbm9kZVxuICovXG5cbi8qKlxuICogQSBET00gZWxlbWVudCB0aGF0IGhhcyBiZWVuIGV4dGVuZGVkIHdpdGggUHJlYWN0IHByb3BlcnRpZXNcbiAqIEB0eXBlZGVmIHtFbGVtZW50ICYgRWxlbWVudENTU0lubGluZVN0eWxlICYgUHJlYWN0RWxlbWVudEV4dGVuc2lvbnN9IFByZWFjdEVsZW1lbnRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggdGhlIGdpdmVuIG5vZGVOYW1lLlxuICogQHBhcmFtIHtzdHJpbmd9IG5vZGVOYW1lIFRoZSBET00gbm9kZSB0byBjcmVhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3ZnPWZhbHNlXSBJZiBgdHJ1ZWAsIGNyZWF0ZXMgYW4gZWxlbWVudCB3aXRoaW4gdGhlIFNWR1xuICogIG5hbWVzcGFjZS5cbiAqIEByZXR1cm5zIHtQcmVhY3RFbGVtZW50fSBUaGUgY3JlYXRlZCBET00gbm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShub2RlTmFtZSwgaXNTdmcpIHtcblx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRsZXQgbm9kZSA9IGlzU3ZnID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5vZGVOYW1lKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuXHRub2RlLm5vcm1hbGl6ZWROb2RlTmFtZSA9IG5vZGVOYW1lO1xuXHRyZXR1cm4gbm9kZTtcbn1cblxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuXG4vKipcbiAqIFNldCBhIG5hbWVkIGF0dHJpYnV0ZSBvbiB0aGUgZ2l2ZW4gTm9kZSwgd2l0aCBzcGVjaWFsIGJlaGF2aW9yIGZvciBzb21lIG5hbWVzXG4gKiBhbmQgZXZlbnQgaGFuZGxlcnMuIElmIGB2YWx1ZWAgaXMgYG51bGxgLCB0aGUgYXR0cmlidXRlL2hhbmRsZXIgd2lsbCBiZVxuICogcmVtb3ZlZC5cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gbm9kZSBBbiBlbGVtZW50IHRvIG11dGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUva2V5IHRvIHNldCwgc3VjaCBhcyBhbiBldmVudCBvciBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHsqfSBvbGQgVGhlIGxhc3QgdmFsdWUgdGhhdCB3YXMgc2V0IGZvciB0aGlzIG5hbWUvbm9kZSBwYWlyXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFuIGF0dHJpYnV0ZSB2YWx1ZSwgc3VjaCBhcyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYW5cbiAqICBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIEFyZSB3ZSBjdXJyZW50bHkgZGlmZmluZyBpbnNpZGUgYW4gc3ZnP1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFjY2Vzc29yKG5vZGUsIG5hbWUsIG9sZCwgdmFsdWUsIGlzU3ZnKSB7XG5cdGlmIChuYW1lPT09J2NsYXNzTmFtZScpIG5hbWUgPSAnY2xhc3MnO1xuXG5cblx0aWYgKG5hbWU9PT0na2V5Jykge1xuXHRcdC8vIGlnbm9yZVxuXHR9XG5cdGVsc2UgaWYgKG5hbWU9PT0ncmVmJykge1xuXHRcdGFwcGx5UmVmKG9sZCwgbnVsbCk7XG5cdFx0YXBwbHlSZWYodmFsdWUsIG5vZGUpO1xuXHR9XG5cdGVsc2UgaWYgKG5hbWU9PT0nY2xhc3MnICYmICFpc1N2Zykge1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gdmFsdWUgfHwgJyc7XG5cdH1cblx0ZWxzZSBpZiAobmFtZT09PSdzdHlsZScpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnIHx8IHR5cGVvZiBvbGQ9PT0nc3RyaW5nJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gdmFsdWUgfHwgJyc7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWU9PT0nb2JqZWN0Jykge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGQhPT0nc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKGxldCBpIGluIG9sZCkgaWYgKCEoaSBpbiB2YWx1ZSkpIG5vZGUuc3R5bGVbaV0gPSAnJztcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0bm9kZS5zdHlsZVtpXSA9IHR5cGVvZiB2YWx1ZVtpXT09PSdudW1iZXInICYmIElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGkpPT09ZmFsc2UgPyAodmFsdWVbaV0rJ3B4JykgOiB2YWx1ZVtpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZWxzZSBpZiAobmFtZT09PSdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRpZiAodmFsdWUpIG5vZGUuaW5uZXJIVE1MID0gdmFsdWUuX19odG1sIHx8ICcnO1xuXHR9XG5cdGVsc2UgaWYgKG5hbWVbMF09PSdvJyAmJiBuYW1lWzFdPT0nbicpIHtcblx0XHRsZXQgdXNlQ2FwdHVyZSA9IG5hbWUgIT09IChuYW1lPW5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXHRcdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGQpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5LCB1c2VDYXB0dXJlKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHRcdChub2RlLl9saXN0ZW5lcnMgfHwgKG5vZGUuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXHRlbHNlIGlmIChuYW1lIT09J2xpc3QnICYmIG5hbWUhPT0ndHlwZScgJiYgIWlzU3ZnICYmIG5hbWUgaW4gbm9kZSkge1xuXHRcdC8vIEF0dGVtcHQgdG8gc2V0IGEgRE9NIHByb3BlcnR5IHRvIHRoZSBnaXZlbiB2YWx1ZS5cblx0XHQvLyBJRSAmIEZGIHRocm93IGZvciBjZXJ0YWluIHByb3BlcnR5LXZhbHVlIGNvbWJpbmF0aW9ucy5cblx0XHR0cnkge1xuXHRcdFx0bm9kZVtuYW1lXSA9IHZhbHVlPT1udWxsID8gJycgOiB2YWx1ZTtcblx0XHR9IGNhdGNoIChlKSB7IH1cblx0XHRpZiAoKHZhbHVlPT1udWxsIHx8IHZhbHVlPT09ZmFsc2UpICYmIG5hbWUhPSdzcGVsbGNoZWNrJykgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0bGV0IG5zID0gaXNTdmcgJiYgKG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9eeGxpbms6Py8sICcnKSkpO1xuXHRcdC8vIHNwZWxsY2hlY2sgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSB0aGFuIGFsbCBvdGhlciBib29sZWFuIHZhbHVlcyBhbmRcblx0XHQvLyBzaG91bGQgbm90IGJlIHJlbW92ZWQgd2hlbiB0aGUgdmFsdWUgaXMgYGZhbHNlYC4gU2VlOlxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLXNwZWxsY2hlY2tcblx0XHRpZiAodmFsdWU9PW51bGwgfHwgdmFsdWU9PT1mYWxzZSkge1xuXHRcdFx0aWYgKG5zKSBub2RlLnJlbW92ZUF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdGVsc2Ugbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSE9PSdmdW5jdGlvbicpIHtcblx0XHRcdGlmIChucykgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUudG9Mb3dlckNhc2UoKSwgdmFsdWUpO1xuXHRcdFx0ZWxzZSBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG5cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKG9wdGlvbnMuZXZlbnQgJiYgb3B0aW9ucy5ldmVudChlKSB8fCBlKTtcbn1cbiIsImltcG9ydCB7IEFUVFJfS0VZIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzU2FtZU5vZGVUeXBlLCBpc05hbWVkTm9kZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgYnVpbGRDb21wb25lbnRGcm9tVk5vZGUgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBjcmVhdGVOb2RlLCBzZXRBY2Nlc3NvciB9IGZyb20gJy4uL2RvbS9pbmRleCc7XG5pbXBvcnQgeyB1bm1vdW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBhcHBseVJlZiB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZSB9IGZyb20gJy4uL2RvbS9pbmRleCc7XG5cbi8qKlxuICogUXVldWUgb2YgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBtb3VudGVkIGFuZCBhcmUgYXdhaXRpbmcgY29tcG9uZW50RGlkTW91bnRcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4uL2NvbXBvbmVudCcpLkNvbXBvbmVudD59XG4gKi9cbmV4cG9ydCBjb25zdCBtb3VudHMgPSBbXTtcblxuLyoqIERpZmYgcmVjdXJzaW9uIGNvdW50LCB1c2VkIHRvIHRyYWNrIHRoZSBlbmQgb2YgdGhlIGRpZmYgY3ljbGUuICovXG5leHBvcnQgbGV0IGRpZmZMZXZlbCA9IDA7XG5cbi8qKiBHbG9iYWwgZmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBkaWZmIGlzIGN1cnJlbnRseSB3aXRoaW4gYW4gU1ZHICovXG5sZXQgaXNTdmdNb2RlID0gZmFsc2U7XG5cbi8qKiBHbG9iYWwgZmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBkaWZmIGlzIHBlcmZvcm1pbmcgaHlkcmF0aW9uICovXG5sZXQgaHlkcmF0aW5nID0gZmFsc2U7XG5cbi8qKiBJbnZva2UgcXVldWVkIGNvbXBvbmVudERpZE1vdW50IGxpZmVjeWNsZSBtZXRob2RzICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2hNb3VudHMoKSB7XG5cdGxldCBjO1xuXHR3aGlsZSAoKGMgPSBtb3VudHMuc2hpZnQoKSkpIHtcblx0XHRpZiAob3B0aW9ucy5hZnRlck1vdW50KSBvcHRpb25zLmFmdGVyTW91bnQoYyk7XG5cdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQpIGMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0fVxufVxuXG5cbi8qKlxuICogQXBwbHkgZGlmZmVyZW5jZXMgaW4gYSBnaXZlbiB2bm9kZSAoYW5kIGl0J3MgZGVlcCBjaGlsZHJlbikgdG8gYSByZWFsIERPTSBOb2RlLlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IGRvbSBBIERPTSBub2RlIHRvIG11dGF0ZSBpbnRvIHRoZSBzaGFwZSBvZiBhIGB2bm9kZWBcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi92bm9kZScpLlZOb2RlfSB2bm9kZSBBIFZOb2RlICh3aXRoIGRlc2NlbmRhbnRzIGZvcm1pbmcgYSB0cmVlKSByZXByZXNlbnRpbmdcbiAqICB0aGUgZGVzaXJlZCBET00gc3RydWN0dXJlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1vdW50QWxsIFdoZXRoZXIgb3Igbm90IHRvIGltbWVkaWF0ZWx5IG1vdW50IGFsbCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudCA/XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBvbmVudFJvb3QgP1xuICogQHJldHVybnMge2ltcG9ydCgnLi4vZG9tJykuUHJlYWN0RWxlbWVudH0gVGhlIGNyZWF0ZWQvbXV0YXRlZCBlbGVtZW50XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgcGFyZW50LCBjb21wb25lbnRSb290KSB7XG5cdC8vIGRpZmZMZXZlbCBoYXZpbmcgYmVlbiAwIGhlcmUgaW5kaWNhdGVzIGluaXRpYWwgZW50cnkgaW50byB0aGUgZGlmZiAobm90IGEgc3ViZGlmZilcblx0aWYgKCFkaWZmTGV2ZWwrKykge1xuXHRcdC8vIHdoZW4gZmlyc3Qgc3RhcnRpbmcgdGhlIGRpZmYsIGNoZWNrIGlmIHdlJ3JlIGRpZmZpbmcgYW4gU1ZHIG9yIHdpdGhpbiBhbiBTVkdcblx0XHRpc1N2Z01vZGUgPSBwYXJlbnQhPW51bGwgJiYgcGFyZW50Lm93bmVyU1ZHRWxlbWVudCE9PXVuZGVmaW5lZDtcblxuXHRcdC8vIGh5ZHJhdGlvbiBpcyBpbmRpY2F0ZWQgYnkgdGhlIGV4aXN0aW5nIGVsZW1lbnQgdG8gYmUgZGlmZmVkIG5vdCBoYXZpbmcgYSBwcm9wIGNhY2hlXG5cdFx0aHlkcmF0aW5nID0gZG9tIT1udWxsICYmICEoQVRUUl9LRVkgaW4gZG9tKTtcblx0fVxuXG5cdGxldCByZXQgPSBpZGlmZihkb20sIHZub2RlLCBjb250ZXh0LCBtb3VudEFsbCwgY29tcG9uZW50Um9vdCk7XG5cblx0Ly8gYXBwZW5kIHRoZSBlbGVtZW50IGlmIGl0cyBhIG5ldyBwYXJlbnRcblx0aWYgKHBhcmVudCAmJiByZXQucGFyZW50Tm9kZSE9PXBhcmVudCkgcGFyZW50LmFwcGVuZENoaWxkKHJldCk7XG5cblx0Ly8gZGlmZkxldmVsIGJlaW5nIHJlZHVjZWQgdG8gMCBtZWFucyB3ZSdyZSBleGl0aW5nIHRoZSBkaWZmXG5cdGlmICghLS1kaWZmTGV2ZWwpIHtcblx0XHRoeWRyYXRpbmcgPSBmYWxzZTtcblx0XHQvLyBpbnZva2UgcXVldWVkIGNvbXBvbmVudERpZE1vdW50IGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0aWYgKCFjb21wb25lbnRSb290KSBmbHVzaE1vdW50cygpO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuXG4vKipcbiAqIEludGVybmFscyBvZiBgZGlmZigpYCwgc2VwYXJhdGVkIHRvIGFsbG93IGJ5cGFzc2luZyBkaWZmTGV2ZWwgLyBtb3VudCBmbHVzaGluZy5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBkb20gQSBET00gbm9kZSB0byBtdXRhdGUgaW50byB0aGUgc2hhcGUgb2YgYSBgdm5vZGVgXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgQSBWTm9kZSAod2l0aCBkZXNjZW5kYW50cyBmb3JtaW5nIGEgdHJlZSkgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIERPTSBzdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91bnRBbGwgV2hldGhlciBvciBub3QgdG8gaW1tZWRpYXRlbHkgbW91bnQgYWxsIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbXBvbmVudFJvb3RdID9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlkaWZmKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsLCBjb21wb25lbnRSb290KSB7XG5cdGxldCBvdXQgPSBkb20sXG5cdFx0cHJldlN2Z01vZGUgPSBpc1N2Z01vZGU7XG5cblx0Ly8gZW1wdHkgdmFsdWVzIChudWxsLCB1bmRlZmluZWQsIGJvb2xlYW5zKSByZW5kZXIgYXMgZW1wdHkgVGV4dCBub2Rlc1xuXHRpZiAodm5vZGU9PW51bGwgfHwgdHlwZW9mIHZub2RlPT09J2Jvb2xlYW4nKSB2bm9kZSA9ICcnO1xuXG5cblx0Ly8gRmFzdCBjYXNlOiBTdHJpbmdzICYgTnVtYmVycyBjcmVhdGUvdXBkYXRlIFRleHQgbm9kZXMuXG5cdGlmICh0eXBlb2Ygdm5vZGU9PT0nc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGU9PT0nbnVtYmVyJykge1xuXG5cdFx0Ly8gdXBkYXRlIGlmIGl0J3MgYWxyZWFkeSBhIFRleHQgbm9kZTpcblx0XHRpZiAoZG9tICYmIGRvbS5zcGxpdFRleHQhPT11bmRlZmluZWQgJiYgZG9tLnBhcmVudE5vZGUgJiYgKCFkb20uX2NvbXBvbmVudCB8fCBjb21wb25lbnRSb290KSkge1xuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIGlmICovIC8qIEJyb3dzZXIgcXVpcmsgdGhhdCBjYW4ndCBiZSBjb3ZlcmVkOiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9jb21taXQvZmQ0ZjIxZjVjNDVkZmQ3NTE1MWJkMjdiNGMyMTdkODAwM2FhNWViOSAqL1xuXHRcdFx0aWYgKGRvbS5ub2RlVmFsdWUhPXZub2RlKSB7XG5cdFx0XHRcdGRvbS5ub2RlVmFsdWUgPSB2bm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBpdCB3YXNuJ3QgYSBUZXh0IG5vZGU6IHJlcGxhY2UgaXQgd2l0aCBvbmUgYW5kIHJlY3ljbGUgdGhlIG9sZCBFbGVtZW50XG5cdFx0XHRvdXQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2bm9kZSk7XG5cdFx0XHRpZiAoZG9tKSB7XG5cdFx0XHRcdGlmIChkb20ucGFyZW50Tm9kZSkgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTtcblx0XHRcdFx0cmVjb2xsZWN0Tm9kZVRyZWUoZG9tLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvdXRbQVRUUl9LRVldID0gdHJ1ZTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXG5cdC8vIElmIHRoZSBWTm9kZSByZXByZXNlbnRzIGEgQ29tcG9uZW50LCBwZXJmb3JtIGEgY29tcG9uZW50IGRpZmY6XG5cdGxldCB2bm9kZU5hbWUgPSB2bm9kZS5ub2RlTmFtZTtcblx0aWYgKHR5cGVvZiB2bm9kZU5hbWU9PT0nZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0fVxuXG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIFNWRyBuYW1lc3BhY2Ugd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlzU3ZnTW9kZSA9IHZub2RlTmFtZT09PSdzdmcnID8gdHJ1ZSA6IHZub2RlTmFtZT09PSdmb3JlaWduT2JqZWN0JyA/IGZhbHNlIDogaXNTdmdNb2RlO1xuXG5cblx0Ly8gSWYgdGhlcmUncyBubyBleGlzdGluZyBlbGVtZW50IG9yIGl0J3MgdGhlIHdyb25nIHR5cGUsIGNyZWF0ZSBhIG5ldyBvbmU6XG5cdHZub2RlTmFtZSA9IFN0cmluZyh2bm9kZU5hbWUpO1xuXHRpZiAoIWRvbSB8fCAhaXNOYW1lZE5vZGUoZG9tLCB2bm9kZU5hbWUpKSB7XG5cdFx0b3V0ID0gY3JlYXRlTm9kZSh2bm9kZU5hbWUsIGlzU3ZnTW9kZSk7XG5cblx0XHRpZiAoZG9tKSB7XG5cdFx0XHQvLyBtb3ZlIGNoaWxkcmVuIGludG8gdGhlIHJlcGxhY2VtZW50IG5vZGVcblx0XHRcdHdoaWxlIChkb20uZmlyc3RDaGlsZCkgb3V0LmFwcGVuZENoaWxkKGRvbS5maXJzdENoaWxkKTtcblxuXHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIEVsZW1lbnQgd2FzIG1vdW50ZWQgaW50byB0aGUgRE9NLCByZXBsYWNlIGl0IGlubGluZVxuXHRcdFx0aWYgKGRvbS5wYXJlbnROb2RlKSBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuXG5cdFx0XHQvLyByZWN5Y2xlIHRoZSBvbGQgZWxlbWVudCAoc2tpcHMgbm9uLUVsZW1lbnQgbm9kZSB0eXBlcylcblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGRvbSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblxuXHRsZXQgZmMgPSBvdXQuZmlyc3RDaGlsZCxcblx0XHRwcm9wcyA9IG91dFtBVFRSX0tFWV0sXG5cdFx0dmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG5cblx0aWYgKHByb3BzPT1udWxsKSB7XG5cdFx0cHJvcHMgPSBvdXRbQVRUUl9LRVldID0ge307XG5cdFx0Zm9yIChsZXQgYT1vdXQuYXR0cmlidXRlcywgaT1hLmxlbmd0aDsgaS0tOyApIHByb3BzW2FbaV0ubmFtZV0gPSBhW2ldLnZhbHVlO1xuXHR9XG5cblx0Ly8gT3B0aW1pemF0aW9uOiBmYXN0LXBhdGggZm9yIGVsZW1lbnRzIGNvbnRhaW5pbmcgYSBzaW5nbGUgVGV4dE5vZGU6XG5cdGlmICghaHlkcmF0aW5nICYmIHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoPT09MSAmJiB0eXBlb2YgdmNoaWxkcmVuWzBdPT09J3N0cmluZycgJiYgZmMhPW51bGwgJiYgZmMuc3BsaXRUZXh0IT09dW5kZWZpbmVkICYmIGZjLm5leHRTaWJsaW5nPT1udWxsKSB7XG5cdFx0aWYgKGZjLm5vZGVWYWx1ZSE9dmNoaWxkcmVuWzBdKSB7XG5cdFx0XHRmYy5ub2RlVmFsdWUgPSB2Y2hpbGRyZW5bMF07XG5cdFx0fVxuXHR9XG5cdC8vIG90aGVyd2lzZSwgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIG9yIG5ldyBjaGlsZHJlbiwgZGlmZiB0aGVtOlxuXHRlbHNlIGlmICh2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCB8fCBmYyE9bnVsbCkge1xuXHRcdGlubmVyRGlmZk5vZGUob3V0LCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBoeWRyYXRpbmcgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwhPW51bGwpO1xuXHR9XG5cblxuXHQvLyBBcHBseSBhdHRyaWJ1dGVzL3Byb3BzIGZyb20gVk5vZGUgdG8gdGhlIERPTSBFbGVtZW50OlxuXHRkaWZmQXR0cmlidXRlcyhvdXQsIHZub2RlLmF0dHJpYnV0ZXMsIHByb3BzKTtcblxuXG5cdC8vIHJlc3RvcmUgcHJldmlvdXMgU1ZHIG1vZGU6IChpbiBjYXNlIHdlJ3JlIGV4aXRpbmcgYW4gU1ZHIG5hbWVzcGFjZSlcblx0aXNTdmdNb2RlID0gcHJldlN2Z01vZGU7XG5cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIEFwcGx5IGNoaWxkIGFuZCBhdHRyaWJ1dGUgY2hhbmdlcyBiZXR3ZWVuIGEgVk5vZGUgYW5kIGEgRE9NIE5vZGUgdG8gdGhlIERPTS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBkb20gRWxlbWVudCB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgY29tcGFyZWQgJiBtdXRhdGVkXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vdm5vZGUnKS5WTm9kZT59IHZjaGlsZHJlbiBBcnJheSBvZiBWTm9kZXMgdG8gY29tcGFyZSB0byBgZG9tLmNoaWxkTm9kZXNgXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBJbXBsaWNpdGx5IGRlc2NlbmRhbnQgY29udGV4dCBvYmplY3QgKGZyb20gbW9zdFxuICogIHJlY2VudCBgZ2V0Q2hpbGRDb250ZXh0KClgKVxuICogQHBhcmFtIHtib29sZWFufSBtb3VudEFsbCBXaGV0aGVyIG9yIG5vdCB0byBpbW1lZGlhdGVseSBtb3VudCBhbGwgY29tcG9uZW50c1xuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBpZiBgdHJ1ZWAsIGNvbnN1bWVzIGV4dGVybmFsbHkgY3JlYXRlZCBlbGVtZW50c1xuICogIHNpbWlsYXIgdG8gaHlkcmF0aW9uXG4gKi9cbmZ1bmN0aW9uIGlubmVyRGlmZk5vZGUoZG9tLCB2Y2hpbGRyZW4sIGNvbnRleHQsIG1vdW50QWxsLCBpc0h5ZHJhdGluZykge1xuXHRsZXQgb3JpZ2luYWxDaGlsZHJlbiA9IGRvbS5jaGlsZE5vZGVzLFxuXHRcdGNoaWxkcmVuID0gW10sXG5cdFx0a2V5ZWQgPSB7fSxcblx0XHRrZXllZExlbiA9IDAsXG5cdFx0bWluID0gMCxcblx0XHRsZW4gPSBvcmlnaW5hbENoaWxkcmVuLmxlbmd0aCxcblx0XHRjaGlsZHJlbkxlbiA9IDAsXG5cdFx0dmxlbiA9IHZjaGlsZHJlbiA/IHZjaGlsZHJlbi5sZW5ndGggOiAwLFxuXHRcdGosIGMsIGYsIHZjaGlsZCwgY2hpbGQ7XG5cblx0Ly8gQnVpbGQgdXAgYSBtYXAgb2Yga2V5ZWQgY2hpbGRyZW4gYW5kIGFuIEFycmF5IG9mIHVua2V5ZWQgY2hpbGRyZW46XG5cdGlmIChsZW4hPT0wKSB7XG5cdFx0Zm9yIChsZXQgaT0wOyBpPGxlbjsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSBvcmlnaW5hbENoaWxkcmVuW2ldLFxuXHRcdFx0XHRwcm9wcyA9IGNoaWxkW0FUVFJfS0VZXSxcblx0XHRcdFx0a2V5ID0gdmxlbiAmJiBwcm9wcyA/IGNoaWxkLl9jb21wb25lbnQgPyBjaGlsZC5fY29tcG9uZW50Ll9fa2V5IDogcHJvcHMua2V5IDogbnVsbDtcblx0XHRcdGlmIChrZXkhPW51bGwpIHtcblx0XHRcdFx0a2V5ZWRMZW4rKztcblx0XHRcdFx0a2V5ZWRba2V5XSA9IGNoaWxkO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAocHJvcHMgfHwgKGNoaWxkLnNwbGl0VGV4dCE9PXVuZGVmaW5lZCA/IChpc0h5ZHJhdGluZyA/IGNoaWxkLm5vZGVWYWx1ZS50cmltKCkgOiB0cnVlKSA6IGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRjaGlsZHJlbltjaGlsZHJlbkxlbisrXSA9IGNoaWxkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICh2bGVuIT09MCkge1xuXHRcdGZvciAobGV0IGk9MDsgaTx2bGVuOyBpKyspIHtcblx0XHRcdHZjaGlsZCA9IHZjaGlsZHJlbltpXTtcblx0XHRcdGNoaWxkID0gbnVsbDtcblxuXHRcdFx0Ly8gYXR0ZW1wdCB0byBmaW5kIGEgbm9kZSBiYXNlZCBvbiBrZXkgbWF0Y2hpbmdcblx0XHRcdGxldCBrZXkgPSB2Y2hpbGQua2V5O1xuXHRcdFx0aWYgKGtleSE9bnVsbCkge1xuXHRcdFx0XHRpZiAoa2V5ZWRMZW4gJiYga2V5ZWRba2V5XSE9PXVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNoaWxkID0ga2V5ZWRba2V5XTtcblx0XHRcdFx0XHRrZXllZFtrZXldID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGtleWVkTGVuLS07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGF0dGVtcHQgdG8gcGx1Y2sgYSBub2RlIG9mIHRoZSBzYW1lIHR5cGUgZnJvbSB0aGUgZXhpc3RpbmcgY2hpbGRyZW5cblx0XHRcdGVsc2UgaWYgKG1pbjxjaGlsZHJlbkxlbikge1xuXHRcdFx0XHRmb3IgKGo9bWluOyBqPGNoaWxkcmVuTGVuOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bal0hPT11bmRlZmluZWQgJiYgaXNTYW1lTm9kZVR5cGUoYyA9IGNoaWxkcmVuW2pdLCB2Y2hpbGQsIGlzSHlkcmF0aW5nKSkge1xuXHRcdFx0XHRcdFx0Y2hpbGQgPSBjO1xuXHRcdFx0XHRcdFx0Y2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoaj09PWNoaWxkcmVuTGVuLTEpIGNoaWxkcmVuTGVuLS07XG5cdFx0XHRcdFx0XHRpZiAoaj09PW1pbikgbWluKys7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gbW9ycGggdGhlIG1hdGNoZWQvZm91bmQvY3JlYXRlZCBET00gY2hpbGQgdG8gbWF0Y2ggdmNoaWxkIChkZWVwKVxuXHRcdFx0Y2hpbGQgPSBpZGlmZihjaGlsZCwgdmNoaWxkLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cblx0XHRcdGYgPSBvcmlnaW5hbENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICYmIGNoaWxkIT09ZG9tICYmIGNoaWxkIT09Zikge1xuXHRcdFx0XHRpZiAoZj09bnVsbCkge1xuXHRcdFx0XHRcdGRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoY2hpbGQ9PT1mLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZShmKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRkb20uaW5zZXJ0QmVmb3JlKGNoaWxkLCBmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0Ly8gcmVtb3ZlIHVudXNlZCBrZXllZCBjaGlsZHJlbjpcblx0aWYgKGtleWVkTGVuKSB7XG5cdFx0Zm9yIChsZXQgaSBpbiBrZXllZCkgaWYgKGtleWVkW2ldIT09dW5kZWZpbmVkKSByZWNvbGxlY3ROb2RlVHJlZShrZXllZFtpXSwgZmFsc2UpO1xuXHR9XG5cblx0Ly8gcmVtb3ZlIG9ycGhhbmVkIHVua2V5ZWQgY2hpbGRyZW46XG5cdHdoaWxlIChtaW48PWNoaWxkcmVuTGVuKSB7XG5cdFx0aWYgKChjaGlsZCA9IGNoaWxkcmVuW2NoaWxkcmVuTGVuLS1dKSE9PXVuZGVmaW5lZCkgcmVjb2xsZWN0Tm9kZVRyZWUoY2hpbGQsIGZhbHNlKTtcblx0fVxufVxuXG5cblxuLyoqXG4gKiBSZWN1cnNpdmVseSByZWN5Y2xlIChvciBqdXN0IHVubW91bnQpIGEgbm9kZSBhbmQgaXRzIGRlc2NlbmRhbnRzLlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IG5vZGUgRE9NIG5vZGUgdG8gc3RhcnRcbiAqICB1bm1vdW50L3JlbW92YWwgZnJvbVxuICogQHBhcmFtIHtib29sZWFufSBbdW5tb3VudE9ubHk9ZmFsc2VdIElmIGB0cnVlYCwgb25seSB0cmlnZ2VycyB1bm1vdW50XG4gKiAgbGlmZWN5Y2xlLCBza2lwcyByZW1vdmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvbGxlY3ROb2RlVHJlZShub2RlLCB1bm1vdW50T25seSkge1xuXHRsZXQgY29tcG9uZW50ID0gbm9kZS5fY29tcG9uZW50O1xuXHRpZiAoY29tcG9uZW50KSB7XG5cdFx0Ly8gaWYgbm9kZSBpcyBvd25lZCBieSBhIENvbXBvbmVudCwgdW5tb3VudCB0aGF0IGNvbXBvbmVudCAoZW5kcyB1cCByZWN1cnNpbmcgYmFjayBoZXJlKVxuXHRcdHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBJZiB0aGUgbm9kZSdzIFZOb2RlIGhhZCBhIHJlZiBmdW5jdGlvbiwgaW52b2tlIGl0IHdpdGggbnVsbCBoZXJlLlxuXHRcdC8vICh0aGlzIGlzIHBhcnQgb2YgdGhlIFJlYWN0IHNwZWMsIGFuZCBzbWFydCBmb3IgdW5zZXR0aW5nIHJlZmVyZW5jZXMpXG5cdFx0aWYgKG5vZGVbQVRUUl9LRVldIT1udWxsKSBhcHBseVJlZihub2RlW0FUVFJfS0VZXS5yZWYsIG51bGwpO1xuXG5cdFx0aWYgKHVubW91bnRPbmx5PT09ZmFsc2UgfHwgbm9kZVtBVFRSX0tFWV09PW51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUobm9kZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG5cdH1cbn1cblxuXG4vKipcbiAqIFJlY29sbGVjdC91bm1vdW50IGFsbCBjaGlsZHJlbi5cbiAqXHQtIHdlIHVzZSAubGFzdENoaWxkIGhlcmUgYmVjYXVzZSBpdCBjYXVzZXMgbGVzcyByZWZsb3cgdGhhbiAuZmlyc3RDaGlsZFxuICpcdC0gaXQncyBhbHNvIGNoZWFwZXIgdGhhbiBhY2Nlc3NpbmcgdGhlIC5jaGlsZE5vZGVzIExpdmUgTm9kZUxpc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKG5vZGUpIHtcblx0bm9kZSA9IG5vZGUubGFzdENoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGxldCBuZXh0ID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cdFx0cmVjb2xsZWN0Tm9kZVRyZWUobm9kZSwgdHJ1ZSk7XG5cdFx0bm9kZSA9IG5leHQ7XG5cdH1cbn1cblxuXG4vKipcbiAqIEFwcGx5IGRpZmZlcmVuY2VzIGluIGF0dHJpYnV0ZXMgZnJvbSBhIFZOb2RlIHRvIHRoZSBnaXZlbiBET00gRWxlbWVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9kb20nKS5QcmVhY3RFbGVtZW50fSBkb20gRWxlbWVudCB3aXRoIGF0dHJpYnV0ZXMgdG8gZGlmZiBgYXR0cnNgIGFnYWluc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRycyBUaGUgZGVzaXJlZCBlbmQtc3RhdGUga2V5LXZhbHVlIGF0dHJpYnV0ZSBwYWlyc1xuICogQHBhcmFtIHtvYmplY3R9IG9sZCBDdXJyZW50L3ByZXZpb3VzIGF0dHJpYnV0ZXMgKGZyb20gcHJldmlvdXMgVk5vZGUgb3JcbiAqICBlbGVtZW50J3MgcHJvcCBjYWNoZSlcbiAqL1xuZnVuY3Rpb24gZGlmZkF0dHJpYnV0ZXMoZG9tLCBhdHRycywgb2xkKSB7XG5cdGxldCBuYW1lO1xuXG5cdC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG5cdGZvciAobmFtZSBpbiBvbGQpIHtcblx0XHRpZiAoIShhdHRycyAmJiBhdHRyc1tuYW1lXSE9bnVsbCkgJiYgb2xkW25hbWVdIT1udWxsKSB7XG5cdFx0XHRzZXRBY2Nlc3Nvcihkb20sIG5hbWUsIG9sZFtuYW1lXSwgb2xkW25hbWVdID0gdW5kZWZpbmVkLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGFkZCBuZXcgJiB1cGRhdGUgY2hhbmdlZCBhdHRyaWJ1dGVzXG5cdGZvciAobmFtZSBpbiBhdHRycykge1xuXHRcdGlmIChuYW1lIT09J2NoaWxkcmVuJyAmJiBuYW1lIT09J2lubmVySFRNTCcgJiYgKCEobmFtZSBpbiBvbGQpIHx8IGF0dHJzW25hbWVdIT09KG5hbWU9PT0ndmFsdWUnIHx8IG5hbWU9PT0nY2hlY2tlZCcgPyBkb21bbmFtZV0gOiBvbGRbbmFtZV0pKSkge1xuXHRcdFx0c2V0QWNjZXNzb3IoZG9tLCBuYW1lLCBvbGRbbmFtZV0sIG9sZFtuYW1lXSA9IGF0dHJzW25hbWVdLCBpc1N2Z01vZGUpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBSZXRhaW5zIGEgcG9vbCBvZiBDb21wb25lbnRzIGZvciByZS11c2UuXG4gKiBAdHlwZSB7Q29tcG9uZW50W119XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgcmVjeWNsZXJDb21wb25lbnRzID0gW107XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQuIE5vcm1hbGl6ZXMgZGlmZmVyZW5jZXMgYmV0d2VlbiBQRkMncyBhbmQgY2xhc3NmdWxcbiAqIENvbXBvbmVudHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBDdG9yIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgY29tcG9uZW50IHRvIGNyZWF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIHByb3BzIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbml0aWFsIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybnMge2ltcG9ydCgnLi4vY29tcG9uZW50JykuQ29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KEN0b3IsIHByb3BzLCBjb250ZXh0KSB7XG5cdGxldCBpbnN0LCBpID0gcmVjeWNsZXJDb21wb25lbnRzLmxlbmd0aDtcblxuXHRpZiAoQ3Rvci5wcm90b3R5cGUgJiYgQ3Rvci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0aW5zdCA9IG5ldyBDdG9yKHByb3BzLCBjb250ZXh0KTtcblx0XHRDb21wb25lbnQuY2FsbChpbnN0LCBwcm9wcywgY29udGV4dCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0aW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuXHRcdGluc3QuY29uc3RydWN0b3IgPSBDdG9yO1xuXHRcdGluc3QucmVuZGVyID0gZG9SZW5kZXI7XG5cdH1cblxuXG5cdHdoaWxlIChpLS0pIHtcblx0XHRpZiAocmVjeWNsZXJDb21wb25lbnRzW2ldLmNvbnN0cnVjdG9yPT09Q3Rvcikge1xuXHRcdFx0aW5zdC5uZXh0QmFzZSA9IHJlY3ljbGVyQ29tcG9uZW50c1tpXS5uZXh0QmFzZTtcblx0XHRcdHJlY3ljbGVyQ29tcG9uZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRyZXR1cm4gaW5zdDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5zdDtcbn1cblxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBTWU5DX1JFTkRFUiwgTk9fUkVOREVSLCBGT1JDRV9SRU5ERVIsIEFTWU5DX1JFTkRFUiwgQVRUUl9LRVkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5pbXBvcnQgeyBleHRlbmQsIGFwcGx5UmVmIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyLXF1ZXVlJztcbmltcG9ydCB7IGdldE5vZGVQcm9wcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgZGlmZiwgbW91bnRzLCBkaWZmTGV2ZWwsIGZsdXNoTW91bnRzLCByZWNvbGxlY3ROb2RlVHJlZSwgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tICcuL2RpZmYnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCByZWN5Y2xlckNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudC1yZWN5Y2xlcic7XG5pbXBvcnQgeyByZW1vdmVOb2RlIH0gZnJvbSAnLi4vZG9tL2luZGV4JztcblxuLyoqXG4gKiBTZXQgYSBjb21wb25lbnQncyBgcHJvcHNgIGFuZCBwb3NzaWJseSByZS1yZW5kZXIgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2NvbXBvbmVudCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBDb21wb25lbnQgdG8gc2V0IHByb3BzIG9uXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIG5ldyBwcm9wc1xuICogQHBhcmFtIHtudW1iZXJ9IHJlbmRlck1vZGUgUmVuZGVyIG9wdGlvbnMgLSBzcGVjaWZpZXMgaG93IHRvIHJlLXJlbmRlciB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgbmV3IGNvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91bnRBbGwgV2hldGhlciBvciBub3QgdG8gaW1tZWRpYXRlbHkgbW91bnQgYWxsIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMsIHJlbmRlck1vZGUsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdGlmIChjb21wb25lbnQuX2Rpc2FibGUpIHJldHVybjtcblx0Y29tcG9uZW50Ll9kaXNhYmxlID0gdHJ1ZTtcblxuXHRjb21wb25lbnQuX19yZWYgPSBwcm9wcy5yZWY7XG5cdGNvbXBvbmVudC5fX2tleSA9IHByb3BzLmtleTtcblx0ZGVsZXRlIHByb3BzLnJlZjtcblx0ZGVsZXRlIHByb3BzLmtleTtcblxuXHRpZiAodHlwZW9mIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFjb21wb25lbnQuYmFzZSB8fCBtb3VudEFsbCkge1xuXHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzLCBjb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoY29udGV4dCAmJiBjb250ZXh0IT09Y29tcG9uZW50LmNvbnRleHQpIHtcblx0XHRpZiAoIWNvbXBvbmVudC5wcmV2Q29udGV4dCkgY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG5cdFx0Y29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0aWYgKCFjb21wb25lbnQucHJldlByb3BzKSBjb21wb25lbnQucHJldlByb3BzID0gY29tcG9uZW50LnByb3BzO1xuXHRjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSBmYWxzZTtcblxuXHRpZiAocmVuZGVyTW9kZSE9PU5PX1JFTkRFUikge1xuXHRcdGlmIChyZW5kZXJNb2RlPT09U1lOQ19SRU5ERVIgfHwgb3B0aW9ucy5zeW5jQ29tcG9uZW50VXBkYXRlcyE9PWZhbHNlIHx8ICFjb21wb25lbnQuYmFzZSkge1xuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgU1lOQ19SRU5ERVIsIG1vdW50QWxsKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRlbnF1ZXVlUmVuZGVyKGNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG5cblx0YXBwbHlSZWYoY29tcG9uZW50Ll9fcmVmLCBjb21wb25lbnQpO1xufVxuXG5cblxuLyoqXG4gKiBSZW5kZXIgYSBDb21wb25lbnQsIHRyaWdnZXJpbmcgbmVjZXNzYXJ5IGxpZmVjeWNsZSBldmVudHMgYW5kIHRha2luZ1xuICogSGlnaC1PcmRlciBDb21wb25lbnRzIGludG8gYWNjb3VudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9jb21wb25lbnQnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlbmRlclxuICogQHBhcmFtIHtudW1iZXJ9IFtyZW5kZXJNb2RlXSByZW5kZXIgbW9kZSwgc2VlIGNvbnN0YW50cy5qcyBmb3IgYXZhaWxhYmxlIG9wdGlvbnMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttb3VudEFsbF0gV2hldGhlciBvciBub3QgdG8gaW1tZWRpYXRlbHkgbW91bnQgYWxsIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzQ2hpbGRdID9cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCByZW5kZXJNb2RlLCBtb3VudEFsbCwgaXNDaGlsZCkge1xuXHRpZiAoY29tcG9uZW50Ll9kaXNhYmxlKSByZXR1cm47XG5cblx0bGV0IHByb3BzID0gY29tcG9uZW50LnByb3BzLFxuXHRcdHN0YXRlID0gY29tcG9uZW50LnN0YXRlLFxuXHRcdGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dCxcblx0XHRwcmV2aW91c1Byb3BzID0gY29tcG9uZW50LnByZXZQcm9wcyB8fCBwcm9wcyxcblx0XHRwcmV2aW91c1N0YXRlID0gY29tcG9uZW50LnByZXZTdGF0ZSB8fCBzdGF0ZSxcblx0XHRwcmV2aW91c0NvbnRleHQgPSBjb21wb25lbnQucHJldkNvbnRleHQgfHwgY29udGV4dCxcblx0XHRpc1VwZGF0ZSA9IGNvbXBvbmVudC5iYXNlLFxuXHRcdG5leHRCYXNlID0gY29tcG9uZW50Lm5leHRCYXNlLFxuXHRcdGluaXRpYWxCYXNlID0gaXNVcGRhdGUgfHwgbmV4dEJhc2UsXG5cdFx0aW5pdGlhbENoaWxkQ29tcG9uZW50ID0gY29tcG9uZW50Ll9jb21wb25lbnQsXG5cdFx0c2tpcCA9IGZhbHNlLFxuXHRcdHNuYXBzaG90ID0gcHJldmlvdXNDb250ZXh0LFxuXHRcdHJlbmRlcmVkLCBpbnN0LCBjYmFzZTtcblxuXHRpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcykge1xuXHRcdHN0YXRlID0gZXh0ZW5kKGV4dGVuZCh7fSwgc3RhdGUpLCBjb21wb25lbnQuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkpO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuXHR9XG5cblx0Ly8gaWYgdXBkYXRpbmdcblx0aWYgKGlzVXBkYXRlKSB7XG5cdFx0Y29tcG9uZW50LnByb3BzID0gcHJldmlvdXNQcm9wcztcblx0XHRjb21wb25lbnQuc3RhdGUgPSBwcmV2aW91c1N0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gcHJldmlvdXNDb250ZXh0O1xuXHRcdGlmIChyZW5kZXJNb2RlIT09Rk9SQ0VfUkVOREVSXG5cdFx0XHQmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0XHQmJiBjb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCkgPT09IGZhbHNlKSB7XG5cdFx0XHRza2lwID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKHByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG5cdFx0fVxuXHRcdGNvbXBvbmVudC5wcm9wcyA9IHByb3BzO1xuXHRcdGNvbXBvbmVudC5zdGF0ZSA9IHN0YXRlO1xuXHRcdGNvbXBvbmVudC5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdGNvbXBvbmVudC5wcmV2UHJvcHMgPSBjb21wb25lbnQucHJldlN0YXRlID0gY29tcG9uZW50LnByZXZDb250ZXh0ID0gY29tcG9uZW50Lm5leHRCYXNlID0gbnVsbDtcblx0Y29tcG9uZW50Ll9kaXJ0eSA9IGZhbHNlO1xuXG5cdGlmICghc2tpcCkge1xuXHRcdHJlbmRlcmVkID0gY29tcG9uZW50LnJlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuXG5cdFx0Ly8gY29udGV4dCB0byBwYXNzIHRvIHRoZSBjaGlsZCwgY2FuIGJlIHVwZGF0ZWQgdmlhIChncmFuZC0pcGFyZW50IGNvbXBvbmVudFxuXHRcdGlmIChjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHRjb250ZXh0ID0gZXh0ZW5kKGV4dGVuZCh7fSwgY29udGV4dCksIGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzVXBkYXRlICYmIGNvbXBvbmVudC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSkge1xuXHRcdFx0c25hcHNob3QgPSBjb21wb25lbnQuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSk7XG5cdFx0fVxuXG5cdFx0bGV0IGNoaWxkQ29tcG9uZW50ID0gcmVuZGVyZWQgJiYgcmVuZGVyZWQubm9kZU5hbWUsXG5cdFx0XHR0b1VubW91bnQsIGJhc2U7XG5cblx0XHRpZiAodHlwZW9mIGNoaWxkQ29tcG9uZW50PT09J2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gc2V0IHVwIGhpZ2ggb3JkZXIgY29tcG9uZW50IGxpbmtcblxuXHRcdFx0bGV0IGNoaWxkUHJvcHMgPSBnZXROb2RlUHJvcHMocmVuZGVyZWQpO1xuXHRcdFx0aW5zdCA9IGluaXRpYWxDaGlsZENvbXBvbmVudDtcblxuXHRcdFx0aWYgKGluc3QgJiYgaW5zdC5jb25zdHJ1Y3Rvcj09PWNoaWxkQ29tcG9uZW50ICYmIGNoaWxkUHJvcHMua2V5PT1pbnN0Ll9fa2V5KSB7XG5cdFx0XHRcdHNldENvbXBvbmVudFByb3BzKGluc3QsIGNoaWxkUHJvcHMsIFNZTkNfUkVOREVSLCBjb250ZXh0LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dG9Vbm1vdW50ID0gaW5zdDtcblxuXHRcdFx0XHRjb21wb25lbnQuX2NvbXBvbmVudCA9IGluc3QgPSBjcmVhdGVDb21wb25lbnQoY2hpbGRDb21wb25lbnQsIGNoaWxkUHJvcHMsIGNvbnRleHQpO1xuXHRcdFx0XHRpbnN0Lm5leHRCYXNlID0gaW5zdC5uZXh0QmFzZSB8fCBuZXh0QmFzZTtcblx0XHRcdFx0aW5zdC5fcGFyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xuXHRcdFx0XHRzZXRDb21wb25lbnRQcm9wcyhpbnN0LCBjaGlsZFByb3BzLCBOT19SRU5ERVIsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRcdFx0cmVuZGVyQ29tcG9uZW50KGluc3QsIFNZTkNfUkVOREVSLCBtb3VudEFsbCwgdHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGJhc2UgPSBpbnN0LmJhc2U7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y2Jhc2UgPSBpbml0aWFsQmFzZTtcblxuXHRcdFx0Ly8gZGVzdHJveSBoaWdoIG9yZGVyIGNvbXBvbmVudCBsaW5rXG5cdFx0XHR0b1VubW91bnQgPSBpbml0aWFsQ2hpbGRDb21wb25lbnQ7XG5cdFx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHRcdGNiYXNlID0gY29tcG9uZW50Ll9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5pdGlhbEJhc2UgfHwgcmVuZGVyTW9kZT09PVNZTkNfUkVOREVSKSB7XG5cdFx0XHRcdGlmIChjYmFzZSkgY2Jhc2UuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0XHRcdGJhc2UgPSBkaWZmKGNiYXNlLCByZW5kZXJlZCwgY29udGV4dCwgbW91bnRBbGwgfHwgIWlzVXBkYXRlLCBpbml0aWFsQmFzZSAmJiBpbml0aWFsQmFzZS5wYXJlbnROb2RlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaW5pdGlhbEJhc2UgJiYgYmFzZSE9PWluaXRpYWxCYXNlICYmIGluc3QhPT1pbml0aWFsQ2hpbGRDb21wb25lbnQpIHtcblx0XHRcdGxldCBiYXNlUGFyZW50ID0gaW5pdGlhbEJhc2UucGFyZW50Tm9kZTtcblx0XHRcdGlmIChiYXNlUGFyZW50ICYmIGJhc2UhPT1iYXNlUGFyZW50KSB7XG5cdFx0XHRcdGJhc2VQYXJlbnQucmVwbGFjZUNoaWxkKGJhc2UsIGluaXRpYWxCYXNlKTtcblxuXHRcdFx0XHRpZiAoIXRvVW5tb3VudCkge1xuXHRcdFx0XHRcdGluaXRpYWxCYXNlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdFx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKGluaXRpYWxCYXNlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodG9Vbm1vdW50KSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KHRvVW5tb3VudCk7XG5cdFx0fVxuXG5cdFx0Y29tcG9uZW50LmJhc2UgPSBiYXNlO1xuXHRcdGlmIChiYXNlICYmICFpc0NoaWxkKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50UmVmID0gY29tcG9uZW50LFxuXHRcdFx0XHR0ID0gY29tcG9uZW50O1xuXHRcdFx0d2hpbGUgKCh0PXQuX3BhcmVudENvbXBvbmVudCkpIHtcblx0XHRcdFx0KGNvbXBvbmVudFJlZiA9IHQpLmJhc2UgPSBiYXNlO1xuXHRcdFx0fVxuXHRcdFx0YmFzZS5fY29tcG9uZW50ID0gY29tcG9uZW50UmVmO1xuXHRcdFx0YmFzZS5fY29tcG9uZW50Q29uc3RydWN0b3IgPSBjb21wb25lbnRSZWYuY29uc3RydWN0b3I7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFpc1VwZGF0ZSB8fCBtb3VudEFsbCkge1xuXHRcdG1vdW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdH1cblx0ZWxzZSBpZiAoIXNraXApIHtcblx0XHQvLyBFbnN1cmUgdGhhdCBwZW5kaW5nIGNvbXBvbmVudERpZE1vdW50KCkgaG9va3Mgb2YgY2hpbGQgY29tcG9uZW50c1xuXHRcdC8vIGFyZSBjYWxsZWQgYmVmb3JlIHRoZSBjb21wb25lbnREaWRVcGRhdGUoKSBob29rIGluIHRoZSBwYXJlbnQuXG5cdFx0Ly8gTm90ZTogZGlzYWJsZWQgYXMgaXQgY2F1c2VzIGR1cGxpY2F0ZSBob29rcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2lzc3Vlcy83NTBcblx0XHQvLyBmbHVzaE1vdW50cygpO1xuXG5cdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUpIHtcblx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wcywgcHJldmlvdXNTdGF0ZSwgc25hcHNob3QpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5hZnRlclVwZGF0ZSkgb3B0aW9ucy5hZnRlclVwZGF0ZShjb21wb25lbnQpO1xuXHR9XG5cblx0d2hpbGUgKGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkgY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucG9wKCkuY2FsbChjb21wb25lbnQpO1xuXG5cdGlmICghZGlmZkxldmVsICYmICFpc0NoaWxkKSBmbHVzaE1vdW50cygpO1xufVxuXG5cblxuLyoqXG4gKiBBcHBseSB0aGUgQ29tcG9uZW50IHJlZmVyZW5jZWQgYnkgYSBWTm9kZSB0byB0aGUgRE9NLlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbXV0YXRlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vdm5vZGUnKS5WTm9kZX0gdm5vZGUgQSBDb21wb25lbnQtcmVmZXJlbmNpbmcgVk5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91bnRBbGwgV2hldGhlciBvciBub3QgdG8gaW1tZWRpYXRlbHkgbW91bnQgYWxsIGNvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2RvbScpLlByZWFjdEVsZW1lbnR9IFRoZSBjcmVhdGVkL211dGF0ZWQgZWxlbWVudFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29tcG9uZW50RnJvbVZOb2RlKGRvbSwgdm5vZGUsIGNvbnRleHQsIG1vdW50QWxsKSB7XG5cdGxldCBjID0gZG9tICYmIGRvbS5fY29tcG9uZW50LFxuXHRcdG9yaWdpbmFsQ29tcG9uZW50ID0gYyxcblx0XHRvbGREb20gPSBkb20sXG5cdFx0aXNEaXJlY3RPd25lciA9IGMgJiYgZG9tLl9jb21wb25lbnRDb25zdHJ1Y3Rvcj09PXZub2RlLm5vZGVOYW1lLFxuXHRcdGlzT3duZXIgPSBpc0RpcmVjdE93bmVyLFxuXHRcdHByb3BzID0gZ2V0Tm9kZVByb3BzKHZub2RlKTtcblx0d2hpbGUgKGMgJiYgIWlzT3duZXIgJiYgKGM9Yy5fcGFyZW50Q29tcG9uZW50KSkge1xuXHRcdGlzT3duZXIgPSBjLmNvbnN0cnVjdG9yPT09dm5vZGUubm9kZU5hbWU7XG5cdH1cblxuXHRpZiAoYyAmJiBpc093bmVyICYmICghbW91bnRBbGwgfHwgYy5fY29tcG9uZW50KSkge1xuXHRcdHNldENvbXBvbmVudFByb3BzKGMsIHByb3BzLCBBU1lOQ19SRU5ERVIsIGNvbnRleHQsIG1vdW50QWxsKTtcblx0XHRkb20gPSBjLmJhc2U7XG5cdH1cblx0ZWxzZSB7XG5cdFx0aWYgKG9yaWdpbmFsQ29tcG9uZW50ICYmICFpc0RpcmVjdE93bmVyKSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50KG9yaWdpbmFsQ29tcG9uZW50KTtcblx0XHRcdGRvbSA9IG9sZERvbSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0YyA9IGNyZWF0ZUNvbXBvbmVudCh2bm9kZS5ub2RlTmFtZSwgcHJvcHMsIGNvbnRleHQpO1xuXHRcdGlmIChkb20gJiYgIWMubmV4dEJhc2UpIHtcblx0XHRcdGMubmV4dEJhc2UgPSBkb207XG5cdFx0XHQvLyBwYXNzaW5nIGRvbS9vbGREb20gYXMgbmV4dEJhc2Ugd2lsbCByZWN5Y2xlIGl0IGlmIHVudXNlZCwgc28gYnlwYXNzIHJlY3ljbGluZyBvbiBMMjI5OlxuXHRcdFx0b2xkRG9tID0gbnVsbDtcblx0XHR9XG5cdFx0c2V0Q29tcG9uZW50UHJvcHMoYywgcHJvcHMsIFNZTkNfUkVOREVSLCBjb250ZXh0LCBtb3VudEFsbCk7XG5cdFx0ZG9tID0gYy5iYXNlO1xuXG5cdFx0aWYgKG9sZERvbSAmJiBkb20hPT1vbGREb20pIHtcblx0XHRcdG9sZERvbS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdHJlY29sbGVjdE5vZGVUcmVlKG9sZERvbSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cblxuXG4vKipcbiAqIFJlbW92ZSBhIGNvbXBvbmVudCBmcm9tIHRoZSBET00gYW5kIHJlY3ljbGUgaXQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vY29tcG9uZW50JykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIENvbXBvbmVudCBpbnN0YW5jZSB0byB1bm1vdW50XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKG9wdGlvbnMuYmVmb3JlVW5tb3VudCkgb3B0aW9ucy5iZWZvcmVVbm1vdW50KGNvbXBvbmVudCk7XG5cblx0bGV0IGJhc2UgPSBjb21wb25lbnQuYmFzZTtcblxuXHRjb21wb25lbnQuX2Rpc2FibGUgPSB0cnVlO1xuXG5cdGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG5cdGNvbXBvbmVudC5iYXNlID0gbnVsbDtcblxuXHQvLyByZWN1cnNpdmVseSB0ZWFyIGRvd24gJiByZWNvbGxlY3QgaGlnaC1vcmRlciBjb21wb25lbnQgY2hpbGRyZW46XG5cdGxldCBpbm5lciA9IGNvbXBvbmVudC5fY29tcG9uZW50O1xuXHRpZiAoaW5uZXIpIHtcblx0XHR1bm1vdW50Q29tcG9uZW50KGlubmVyKTtcblx0fVxuXHRlbHNlIGlmIChiYXNlKSB7XG5cdFx0aWYgKGJhc2VbQVRUUl9LRVldIT1udWxsKSBhcHBseVJlZihiYXNlW0FUVFJfS0VZXS5yZWYsIG51bGwpO1xuXG5cdFx0Y29tcG9uZW50Lm5leHRCYXNlID0gYmFzZTtcblxuXHRcdHJlbW92ZU5vZGUoYmFzZSk7XG5cdFx0cmVjeWNsZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuXHRcdHJlbW92ZUNoaWxkcmVuKGJhc2UpO1xuXHR9XG5cblx0YXBwbHlSZWYoY29tcG9uZW50Ll9fcmVmLCBudWxsKTtcbn1cbiIsImltcG9ydCB7IEZPUkNFX1JFTkRFUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyByZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3Zkb20vY29tcG9uZW50JztcbmltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL3JlbmRlci1xdWV1ZSc7XG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLlxuICogUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoIHRyaWdnZXIgcmVuZGVyaW5nLlxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnIGdldENoaWxkQ29udGV4dFxuICogQHB1YmxpY1xuICpcbiAqIEBleGFtcGxlXG4gKiBjbGFzcyBNeUZvbyBleHRlbmRzIENvbXBvbmVudCB7XG4gKiAgIHJlbmRlcihwcm9wcywgc3RhdGUpIHtcbiAqICAgICByZXR1cm4gPGRpdiAvPjtcbiAqICAgfVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMuX2RpcnR5ID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7b2JqZWN0fVxuXHQgKi9cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7b2JqZWN0fVxuXHQgKi9cblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqIEB0eXBlIHtvYmplY3R9XG5cdCAqL1xuXHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcblxuXHR0aGlzLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcbn1cblxuXG5leHRlbmQoQ29tcG9uZW50LnByb3RvdHlwZSwge1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cblx0ICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIEEgZGljdCBvZiBzdGF0ZSBwcm9wZXJ0aWVzIHRvIGJlIHNoYWxsb3dseSBtZXJnZWRcblx0ICogXHRpbnRvIHRoZSBjdXJyZW50IHN0YXRlLCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9kdWNlIHN1Y2ggYSBkaWN0LiBUaGVcblx0ICogXHRmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgcHJvcHMuXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2sgQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcblx0ICogXHR1cGRhdGVkXG5cdCAqL1xuXHRzZXRTdGF0ZShzdGF0ZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoIXRoaXMucHJldlN0YXRlKSB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0dGhpcy5zdGF0ZSA9IGV4dGVuZChcblx0XHRcdGV4dGVuZCh7fSwgdGhpcy5zdGF0ZSksXG5cdFx0XHR0eXBlb2Ygc3RhdGUgPT09ICdmdW5jdGlvbicgPyBzdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSA6IHN0YXRlXG5cdFx0KTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEltbWVkaWF0ZWx5IHBlcmZvcm0gYSBzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQgaXNcblx0ICogXHRyZS1yZW5kZXJlZC5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZvcmNlVXBkYXRlKGNhbGxiYWNrKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0cmVuZGVyQ29tcG9uZW50KHRoaXMsIEZPUkNFX1JFTkRFUik7XG5cdH0sXG5cblxuXHQvKipcblx0ICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuXHQgKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHA6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeCkuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuXHQgKiBcdGVsZW1lbnQvY29tcG9uZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3Rcblx0ICogIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuXHQgKiBAcmV0dXJucyB7aW1wb3J0KCcuL3Zub2RlJykuVk5vZGUgfCB2b2lkfVxuXHQgKi9cblx0cmVuZGVyKCkge31cblxufSk7XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi92ZG9tL2RpZmYnO1xuXG4vKipcbiAqIFJlbmRlciBKU1ggaW50byBhIGBwYXJlbnRgIEVsZW1lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi92bm9kZScpLlZOb2RlfSB2bm9kZSBBIChKU1gpIFZOb2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vZG9tJykuUHJlYWN0RWxlbWVudH0gcGFyZW50IERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9kb20nKS5QcmVhY3RFbGVtZW50fSBbbWVyZ2VdIEF0dGVtcHQgdG8gcmUtdXNlIGFuIGV4aXN0aW5nIERPTSB0cmVlIHJvb3RlZCBhdFxuICogIGBtZXJnZWBcbiAqIEBwdWJsaWNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmVuZGVyIGEgZGl2IGludG8gPGJvZHk+OlxuICogcmVuZGVyKDxkaXYgaWQ9XCJoZWxsb1wiPmhlbGxvITwvZGl2PiwgZG9jdW1lbnQuYm9keSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJlbmRlciBhIFwiVGhpbmdcIiBjb21wb25lbnQgaW50byAjZm9vOlxuICogY29uc3QgVGhpbmcgPSAoeyBuYW1lIH0pID0+IDxzcGFuPnsgbmFtZSB9PC9zcGFuPjtcbiAqIHJlbmRlcig8VGhpbmcgbmFtZT1cIm9uZVwiIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vJykpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIG1lcmdlKSB7XG5cdHJldHVybiBkaWZmKG1lcmdlLCB2bm9kZSwge30sIGZhbHNlLCBwYXJlbnQsIGZhbHNlKTtcbn1cbiIsImltcG9ydCB7IGgsIGggYXMgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vaCc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICcuL2Nsb25lLWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IHsgcmVyZW5kZXIgfSBmcm9tICcuL3JlbmRlci1xdWV1ZSc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG5cdHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRoLFxuXHRjcmVhdGVFbGVtZW50LFxuXHRjbG9uZUVsZW1lbnQsXG5cdGNyZWF0ZVJlZixcblx0Q29tcG9uZW50LFxuXHRyZW5kZXIsXG5cdHJlcmVuZGVyLFxuXHRvcHRpb25zXG59O1xuXG5leHBvcnQge1xuXHRoLFxuXHRjcmVhdGVFbGVtZW50LFxuXHRjbG9uZUVsZW1lbnQsXG5cdGNyZWF0ZVJlZixcblx0Q29tcG9uZW50LFxuXHRyZW5kZXIsXG5cdHJlcmVuZGVyLFxuXHRvcHRpb25zXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFnRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3SUE7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3REE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBREE7QUFjQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FDVUE7QUNmQTtBQUVBO0FBQ0E7QUFnQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFJQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7O0FDN0VBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBT0E7QUFDQTtBQUNBOzs7O0FBV0E7QUFDQTtBQ25CQTtBQUNBOzs7QUNUQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBRUE7OztBQ1BBOztBQU1BO0FBQ0E7QUFDQTs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFXQTtBQUNBOzs7QUFXQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7OztBQ2ZBO0FBQ0E7QUFDQTs7O0FBUUE7QUFDQTtBQUNBO0FBREE7O0FBaUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBRUE7Ozs7QUFFQTtBQUNBOzs7O0FBVEE7QUFjQTtBQURBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBS0E7QUFUQTtBQWNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBREE7OztBQWlCQTtBQUNBOzs7O0FDNUhBOztBQUdBOztBQUdBO0FBQ0E7QUFFQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7OztBQW1CQTtBQUVBO0FBR0E7OztBQUdBOzs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7OztBQWFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUlBO0FBR0E7QUFDQTtBQUVBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFFQTtBQUNBOzs7O0FBS0E7QUFDQTs7OztBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBOzs7QUFHQTs7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBR0E7QUFFQTs7O0FBS0E7OztBQUtBOztBQUlBOztBQUVBOzs7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFIQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUNBOzs7Ozs7QUFRQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7OztBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7OztBQUdBOzs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBWUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FDdFVBOztBQVdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBOzs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBR0E7Ozs7QUFJQTs7O0FBY0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFHQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQW5CQTtBQXNCQTs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7Ozs7OztBQUtBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBOzs7QUFVQTs7QUFFQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUVBOztBQUlBOztBQVdBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFFQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7OztBQU1BOztBQ25SQTtBQUNBOztBQU1BOztBQU1BOztBQU1BOztBQUVBOzs7QUFJQTtBQUFBOzs7QUFnQkE7QUFDQTtBQWpCQTtBQUNBO0FBMkJBO0FBQ0E7QUE3QkE7QUFDQTtBQURBO0FBQUE7QUN6QkE7QUFDQTtBRHdCQTtBQUFBO0FFckNBO0FBQ0E7O0FGb0NBO0FFakNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
