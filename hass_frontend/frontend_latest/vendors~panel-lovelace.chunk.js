(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendors~panel-lovelace"],
  {
    /***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
      /*! exports provided: style */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "style",
          function() {
            return style;
          }
        );
        /* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js"
        );
        /**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        const style = _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
          "css"
        ]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

        /***/
      },

    /***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
      /*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
      /*! exports provided: Ripple */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Ripple",
          function() {
            return Ripple;
          }
        );
        /* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js"
        );
        /* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js"
        );
        /* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js"
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === "object" &&
              typeof Reflect.decorate === "function"
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        /**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        let Ripple = class Ripple extends _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor() {
            super(...arguments);
            this.primary = false;
            this.accent = false;
            this.unbounded = false;
            this.disabled = false;
            this.interactionNode = this;
          }

          connectedCallback() {
            if (this.interactionNode === this) {
              this.interactionNode = this.parentNode;
            }

            super.connectedCallback();
          } // TODO(sorvell) #css: sizing.

          render() {
            const classes = {
              "mdc-ripple-surface--primary": this.primary,
              "mdc-ripple-surface--accent": this.accent,
            };
            const { disabled, unbounded, active, interactionNode } = this;
            const rippleOptions = {
              disabled,
              unbounded,
              interactionNode,
            };

            if (active !== undefined) {
              rippleOptions.active = active;
            }

            return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <div .ripple="${Object(
        _ripple_directive_js__WEBPACK_IMPORTED_MODULE_1__["ripple"]
      )(rippleOptions)}"
          class="mdc-ripple-surface ${Object(
            _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
              "classMap"
            ]
          )(classes)}"></div>`;
          }
        };
        Ripple.styles =
          _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_2__["style"];

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )({
              type: Boolean,
            }),
          ],
          Ripple.prototype,
          "primary",
          void 0
        );

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )({
              type: Boolean,
            }),
          ],
          Ripple.prototype,
          "active",
          void 0
        );

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )({
              type: Boolean,
            }),
          ],
          Ripple.prototype,
          "accent",
          void 0
        );

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )({
              type: Boolean,
            }),
          ],
          Ripple.prototype,
          "unbounded",
          void 0
        );

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )({
              type: Boolean,
            }),
          ],
          Ripple.prototype,
          "disabled",
          void 0
        );

        __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "property"
              ]
            )(),
          ],
          Ripple.prototype,
          "interactionNode",
          void 0
        );

        Ripple = __decorate(
          [
            Object(
              _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__[
                "customElement"
              ]
            )("mwc-ripple"),
          ],
          Ripple
        );

        /***/
      },

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

    /***/ "./node_modules/deep-clone-simple/index.js":
      /*!*************************************************!*\
  !*** ./node_modules/deep-clone-simple/index.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return deepcopy;
          }
        );
        function deepcopy(value) {
          if (!(!!value && typeof value == "object")) {
            return value;
          }

          if (Object.prototype.toString.call(value) == "[object Date]") {
            return new Date(value.getTime());
          }

          if (Array.isArray(value)) {
            return value.map(deepcopy);
          }

          var result = {};
          Object.keys(value).forEach(function(key) {
            result[key] = deepcopy(value[key]);
          });
          return result;
        }

        /***/
      },

    /***/ "./node_modules/lit-html/directives/repeat.js":
      /*!****************************************************!*\
  !*** ./node_modules/lit-html/directives/repeat.js ***!
  \****************************************************/
      /*! exports provided: repeat */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "repeat",
          function() {
            return repeat;
          }
        );
        /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"
        );
        /**
         * @license
         * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
        // Helper functions for manipulating parts
        // TODO(kschaaf): Refactor into Part API?

        const createAndInsertPart = (containerPart, beforePart) => {
          const container = containerPart.startNode.parentNode;
          const beforeNode =
            beforePart === undefined
              ? containerPart.endNode
              : beforePart.startNode;
          const startNode = container.insertBefore(
            Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(),
            beforeNode
          );
          container.insertBefore(
            Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(),
            beforeNode
          );
          const newPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__[
            "NodePart"
          ](containerPart.options);
          newPart.insertAfterNode(startNode);
          return newPart;
        };

        const updatePart = (part, value) => {
          part.setValue(value);
          part.commit();
          return part;
        };

        const insertPartBefore = (containerPart, part, ref) => {
          const container = containerPart.startNode.parentNode;
          const beforeNode = ref ? ref.startNode : containerPart.endNode;
          const endNode = part.endNode.nextSibling;

          if (endNode !== beforeNode) {
            Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(
              container,
              part.startNode,
              endNode,
              beforeNode
            );
          }
        };

        const removePart = (part) => {
          Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(
            part.startNode.parentNode,
            part.startNode,
            part.endNode.nextSibling
          );
        }; // Helper for generating a map of array item to its index over a subset
        // of an array (used to lazily generate `newKeyToIndexMap` and
        // `oldKeyToIndexMap`)

        const generateMap = (list, start, end) => {
          const map = new Map();

          for (let i = start; i <= end; i++) {
            map.set(list[i], i);
          }

          return map;
        }; // Stores previous ordered list of parts and map of key to index

        const partListCache = new WeakMap();
        const keyListCache = new WeakMap();
        /**
         * A directive that repeats a series of values (usually `TemplateResults`)
         * generated from an iterable, and updates those items efficiently when the
         * iterable changes based on user-provided `keys` associated with each item.
         *
         * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
         * meaning previous DOM for a given key is moved into the new position if
         * needed, and DOM will never be reused with values for different keys (new DOM
         * will always be created for new keys). This is generally the most efficient
         * way to use `repeat` since it performs minimum unnecessary work for insertions
         * amd removals.
         *
         * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
         * given call to `repeat`. The behavior when two or more items have the same key
         * is undefined.
         *
         * If no `keyFn` is provided, this directive will perform similar to mapping
         * items to values, and DOM will be reused against potentially different items.
         */

        const repeat = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"]
        )((items, keyFnOrTemplate, template) => {
          let keyFn;

          if (template === undefined) {
            template = keyFnOrTemplate;
          } else if (keyFnOrTemplate !== undefined) {
            keyFn = keyFnOrTemplate;
          }

          return (containerPart) => {
            if (
              !(
                containerPart instanceof
                _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"]
              )
            ) {
              throw new Error("repeat can only be used in text bindings");
            } // Old part & key lists are retrieved from the last update
            // (associated with the part for this instance of the directive)

            const oldParts = partListCache.get(containerPart) || [];
            const oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
            // old parts or created for new keys in this update). This is
            // saved in the above cache at the end of the update.

            const newParts = []; // New value list is eagerly generated from items along with a
            // parallel array indicating its key.

            const newValues = [];
            const newKeys = [];
            let index = 0;

            for (const item of items) {
              newKeys[index] = keyFn ? keyFn(item, index) : index;
              newValues[index] = template(item, index);
              index++;
            } // Maps from key to index for current and previous update; these
            // are generated lazily only when needed as a performance
            // optimization, since they are only required for multiple
            // non-contiguous changes in the list, which are less common.

            let newKeyToIndexMap;
            let oldKeyToIndexMap; // Head and tail pointers to old parts and new values

            let oldHead = 0;
            let oldTail = oldParts.length - 1;
            let newHead = 0;
            let newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
            // based on ideas found in ivi, vue, snabbdom, etc.):
            //
            // * We start with the list of old parts and new values (and
            //   arrays of their respective keys), head/tail pointers into
            //   each, and we build up the new list of parts by updating
            //   (and when needed, moving) old parts or creating new ones.
            //   The initial scenario might look like this (for brevity of
            //   the diagrams, the numbers in the array reflect keys
            //   associated with the old parts or new values, although keys
            //   and parts/values are actually stored in parallel arrays
            //   indexed using the same head/tail pointers):
            //
            //      oldHead v                 v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [ ,  ,  ,  ,  ,  ,  ]
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
            //                                      item order
            //      newHead ^                 ^ newTail
            //
            // * Iterate old & new lists from both sides, updating,
            //   swapping, or removing parts at the head/tail locations
            //   until neither head nor tail can move.
            //
            // * Example below: keys at head pointers match, so update old
            //   part 0 in-place (no need to move it) and record part 0 in
            //   the `newParts` list. The last thing we do is advance the
            //   `oldHead` and `newHead` pointers (will be reflected in the
            //   next diagram).
            //
            //      oldHead v                 v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
            //                                      & newHead
            //      newHead ^                 ^ newTail
            //
            // * Example below: head pointers don't match, but tail
            //   pointers do, so update part 6 in place (no need to move
            //   it), and record part 6 in the `newParts` list. Last,
            //   advance the `oldTail` and `oldHead` pointers.
            //
            //         oldHead v              v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
            //                                      & newTail
            //         newHead ^              ^ newTail
            //
            // * If neither head nor tail match; next check if one of the
            //   old head/tail items was removed. We first need to generate
            //   the reverse map of new keys to index (`newKeyToIndexMap`),
            //   which is done once lazily as a performance optimization,
            //   since we only hit this case if multiple non-contiguous
            //   changes were made. Note that for contiguous removal
            //   anywhere in the list, the head and tails would advance
            //   from either end and pass each other before we get to this
            //   case and removals would be handled in the final while loop
            //   without needing to generate the map.
            //
            // * Example below: The key at `oldTail` was removed (no longer
            //   in the `newKeyToIndexMap`), so remove that part from the
            //   DOM and advance just the `oldTail` pointer.
            //
            //         oldHead v           v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
            //         newHead ^           ^ newTail
            //
            // * Once head and tail cannot move, any mismatches are due to
            //   either new or moved items; if a new key is in the previous
            //   "old key to old index" map, move the old part to the new
            //   location, otherwise create and insert a new part. Note
            //   that when moving an old part we null its position in the
            //   oldParts array if it lies between the head and tail so we
            //   know to skip it when the pointers get there.
            //
            // * Example below: neither head nor tail match, and neither
            //   were removed; so find the `newHead` key in the
            //   `oldKeyToIndexMap`, and move that old part's DOM into the
            //   next head position (before `oldParts[oldHead]`). Last,
            //   null the part in the `oldPart` array since it was
            //   somewhere in the remaining oldParts still to be scanned
            //   (between the head and tail pointers) so that we know to
            //   skip that old part on future iterations.
            //
            //         oldHead v        v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
            //                                      newHead
            //         newHead ^           ^ newTail
            //
            // * Note that for moves/insertions like the one above, a part
            //   inserted at the head pointer is inserted before the
            //   current `oldParts[oldHead]`, and a part inserted at the
            //   tail pointer is inserted before `newParts[newTail+1]`. The
            //   seeming asymmetry lies in the fact that new parts are
            //   moved into place outside in, so to the right of the head
            //   pointer are old parts, and to the right of the tail
            //   pointer are new parts.
            //
            // * We always restart back from the top of the algorithm,
            //   allowing matching and simple updates in place to
            //   continue...
            //
            // * Example below: the head pointers once again match, so
            //   simply update part 1 and record it in the `newParts`
            //   array.  Last, advance both head pointers.
            //
            //         oldHead v        v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
            //                                      & newHead
            //            newHead ^        ^ newTail
            //
            // * As mentioned above, items that were moved as a result of
            //   being stuck (the final else clause in the code below) are
            //   marked with null, so we always advance old pointers over
            //   these so we're comparing the next actual old value on
            //   either end.
            //
            // * Example below: `oldHead` is null (already placed in
            //   newParts), so advance `oldHead`.
            //
            //            oldHead v     v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
            //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
            //               newHead ^     ^ newTail
            //
            // * Note it's not critical to mark old parts as null when they
            //   are moved from head to tail or tail to head, since they
            //   will be outside the pointer range and never visited again.
            //
            // * Example below: Here the old tail key matches the new head
            //   key, so the part at the `oldTail` position and move its
            //   DOM to the new head position (before `oldParts[oldHead]`).
            //   Last, advance `oldTail` and `newHead` pointers.
            //
            //               oldHead v  v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
            //                                     advance oldTail & newHead
            //               newHead ^     ^ newTail
            //
            // * Example below: Old and new head keys match, so update the
            //   old head part in place, and advance the `oldHead` and
            //   `newHead` pointers.
            //
            //               oldHead v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
            //                                      newHead
            //                  newHead ^  ^ newTail
            //
            // * Once the new or old pointers move past each other then all
            //   we have left is additions (if old list exhausted) or
            //   removals (if new list exhausted). Those are handled in the
            //   final while loops at the end.
            //
            // * Example below: `oldHead` exceeded `oldTail`, so we're done
            //   with the main loop.  Create the remaining part and insert
            //   it at the new head position, and the update is complete.
            //
            //                   (oldHead > oldTail)
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
            //                     newHead ^ newTail
            //
            // * Note that the order of the if/else clauses is not
            //   important to the algorithm, as long as the null checks
            //   come first (to ensure we're always working on valid old
            //   parts) and that the final else clause comes last (since
            //   that's where the expensive moves occur). The order of
            //   remaining clauses is is just a simple guess at which cases
            //   will be most common.
            //
            // * TODO(kschaaf) Note, we could calculate the longest
            //   increasing subsequence (LIS) of old items in new position,
            //   and only move those not in the LIS set. However that costs
            //   O(nlogn) time and adds a bit more code, and only helps
            //   make rare types of mutations require fewer moves. The
            //   above handles removes, adds, reversal, swaps, and single
            //   moves of contiguous items in linear time, in the minimum
            //   number of moves. As the number of multiple moves where LIS
            //   might help approaches a random shuffle, the LIS
            //   optimization becomes less helpful, so it seems not worth
            //   the code at this point. Could reconsider if a compelling
            //   case arises.

            while (oldHead <= oldTail && newHead <= newTail) {
              if (oldParts[oldHead] === null) {
                // `null` means old part at head has already been used
                // below; skip
                oldHead++;
              } else if (oldParts[oldTail] === null) {
                // `null` means old part at tail has already been used
                // below; skip
                oldTail--;
              } else if (oldKeys[oldHead] === newKeys[newHead]) {
                // Old head matches new head; update in place
                newParts[newHead] = updatePart(
                  oldParts[oldHead],
                  newValues[newHead]
                );
                oldHead++;
                newHead++;
              } else if (oldKeys[oldTail] === newKeys[newTail]) {
                // Old tail matches new tail; update in place
                newParts[newTail] = updatePart(
                  oldParts[oldTail],
                  newValues[newTail]
                );
                oldTail--;
                newTail--;
              } else if (oldKeys[oldHead] === newKeys[newTail]) {
                // Old head matches new tail; update and move to new tail
                newParts[newTail] = updatePart(
                  oldParts[oldHead],
                  newValues[newTail]
                );
                insertPartBefore(
                  containerPart,
                  oldParts[oldHead],
                  newParts[newTail + 1]
                );
                oldHead++;
                newTail--;
              } else if (oldKeys[oldTail] === newKeys[newHead]) {
                // Old tail matches new head; update and move to new head
                newParts[newHead] = updatePart(
                  oldParts[oldTail],
                  newValues[newHead]
                );
                insertPartBefore(
                  containerPart,
                  oldParts[oldTail],
                  oldParts[oldHead]
                );
                oldTail--;
                newHead++;
              } else {
                if (newKeyToIndexMap === undefined) {
                  // Lazily generate key-to-index maps, used for removals &
                  // moves below
                  newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
                  oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
                }

                if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
                  // Old head is no longer in new list; remove
                  removePart(oldParts[oldHead]);
                  oldHead++;
                } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
                  // Old tail is no longer in new list; remove
                  removePart(oldParts[oldTail]);
                  oldTail--;
                } else {
                  // Any mismatches at this point are due to additions or
                  // moves; see if we have an old part we can reuse and move
                  // into place
                  const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
                  const oldPart =
                    oldIndex !== undefined ? oldParts[oldIndex] : null;

                  if (oldPart === null) {
                    // No old part for this value; create a new one and
                    // insert it
                    const newPart = createAndInsertPart(
                      containerPart,
                      oldParts[oldHead]
                    );
                    updatePart(newPart, newValues[newHead]);
                    newParts[newHead] = newPart;
                  } else {
                    // Reuse old part
                    newParts[newHead] = updatePart(oldPart, newValues[newHead]);
                    insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
                    // it will be skipped in the first two checks above

                    oldParts[oldIndex] = null;
                  }

                  newHead++;
                }
              }
            } // Add parts for any remaining new values

            while (newHead <= newTail) {
              // For all remaining additions, we insert before last new
              // tail, since old pointers are no longer valid
              const newPart = createAndInsertPart(
                containerPart,
                newParts[newTail + 1]
              );
              updatePart(newPart, newValues[newHead]);
              newParts[newHead++] = newPart;
            } // Remove any remaining unused old parts

            while (oldHead <= oldTail) {
              const oldPart = oldParts[oldHead++];

              if (oldPart !== null) {
                removePart(oldPart);
              }
            } // Save order of new parts for next round

            partListCache.set(containerPart, newParts);
            keyListCache.set(containerPart, newKeys);
          };
        });

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

        const styleMapCache = new WeakMap();
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

        const styleMap = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"]
        )((styleInfo) => (part) => {
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

          const { committer } = part;
          const { style } = committer.element; // Handle static styles the first time we see a Part

          if (!styleMapCache.has(part)) {
            style.cssText = committer.strings.join(" ");
          } // Remove old properties that no longer exist in styleInfo

          const oldInfo = styleMapCache.get(part);

          for (const name in oldInfo) {
            if (!(name in styleInfo)) {
              if (name.indexOf("-") === -1) {
                // tslint:disable-next-line:no-any
                style[name] = null;
              } else {
                style.removeProperty(name);
              }
            }
          } // Add or update properties

          for (const name in styleInfo) {
            if (name.indexOf("-") === -1) {
              // tslint:disable-next-line:no-any
              style[name] = styleInfo[name];
            } else {
              style.setProperty(name, styleInfo[name]);
            }
          }

          styleMapCache.set(part, styleInfo);
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1jbG9uZS1zaW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmVzL3JlcGVhdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzYEBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVney0tbWRjLXJpcHBsZS1zdXJmYWNlLXRlc3QtZWRnZS12YXI6IDFweCBzb2xpZCAjMDAwO3Zpc2liaWxpdHk6aGlkZGVufS5tZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnOjpiZWZvcmV7Ym9yZGVyOnZhcigtLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyKX0ubWRjLXJpcHBsZS1zdXJmYWNley0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCk7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHk7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTpub25lO292ZXJmbG93OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwifS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1kYy1yaXBwbGUtc3VyZmFjZTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSAxMDAlKTtsZWZ0OmNhbGMoNTAlIC0gMTAwJSk7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXXtvdmVyZmxvdzp2aXNpYmxlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSA1MCUpO2xlZnQ6Y2FsYyg1MCUgLSA1MCUpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gNTAlKSk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIGNhbGMoNTAlIC0gNTAlKSk7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzYyMDBlZX1Ac3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOiBhdXRvKXsubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSl9fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4Nn1Ac3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOiBhdXRvKXsubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNle3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9YDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7TGl0RWxlbWVudCwgaHRtbCwgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIGNsYXNzTWFwfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmltcG9ydCB7cmlwcGxlLCBSaXBwbGVPcHRpb25zfSBmcm9tICcuL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbkBjdXN0b21FbGVtZW50KCdtd2MtcmlwcGxlJyBhcyBhbnkpXG5leHBvcnQgY2xhc3MgUmlwcGxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pXG4gIGFjdGl2ZTogYm9vbGVhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgYWNjZW50ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSlcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25Ob2RlOiBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgc3RhdGljIHN0eWxlcyA9IHN0eWxlO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSB0aGlzLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBUT0RPKHNvcnZlbGwpICNjc3M6IHNpemluZy5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5JzogdGhpcy5wcmltYXJ5LFxuICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50JzogdGhpcy5hY2NlbnQsXG4gICAgfTtcbiAgICBjb25zdCB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgYWN0aXZlLCBpbnRlcmFjdGlvbk5vZGV9ID0gdGhpcztcbiAgICBjb25zdCByaXBwbGVPcHRpb25zOiBSaXBwbGVPcHRpb25zID0ge2Rpc2FibGVkLCB1bmJvdW5kZWQsIGludGVyYWN0aW9uTm9kZX07XG4gICAgaWYgKGFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGVPcHRpb25zLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IC5yaXBwbGU9XCIke3JpcHBsZShyaXBwbGVPcHRpb25zKX1cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLXJpcHBsZS1zdXJmYWNlICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCI+PC9kaXY+YDtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn0iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi4vYXBwLXNjcm9sbC1lZmZlY3RzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtyZWdpc3RlckVmZmVjdH0gZnJvbSAnLi4vLi4vaGVscGVycy9oZWxwZXJzLmpzJztcbi8qKlxuICogVG9nZ2xlcyB0aGUgc2hhZG93IHByb3BlcnR5IGluIGFwcC1oZWFkZXIgd2hlbiBjb250ZW50IGlzIHNjcm9sbGVkIHRvIGNyZWF0ZVxuICogYSBzZW5zZSBvZiBkZXB0aCBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCB0aGUgY29udGVudCB1bmRlcm5lYXRoLlxuICovXG5yZWdpc3RlckVmZmVjdCgnd2F0ZXJmYWxsJywge1xuICAvKipcbiAgICogIEB0aGlzIFBvbHltZXIuQXBwTGF5b3V0LkVsZW1lbnRXaXRoQmFja2dyb3VuZFxuICAgKi9cbiAgcnVuOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgdGhpcy5zaGFkb3cgPSB0aGlzLmlzT25TY3JlZW4oKSAmJiB0aGlzLmlzQ29udGVudEJlbG93KCk7XG4gIH1cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcGNvcHkodmFsdWUpIHtcbiAgaWYgKCEoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoZGVlcGNvcHkpO1xuICB9XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goXG4gICAgZnVuY3Rpb24oa2V5KSB7IHJlc3VsdFtrZXldID0gZGVlcGNvcHkodmFsdWVba2V5XSk7IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZUZufSBmcm9tICcuLi9saWIvZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7Y3JlYXRlTWFya2VyLCBkaXJlY3RpdmUsIE5vZGVQYXJ0LCBQYXJ0LCByZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgdHlwZSBLZXlGbjxUPiA9IChpdGVtOiBULCBpbmRleDogbnVtYmVyKSA9PiB1bmtub3duO1xuZXhwb3J0IHR5cGUgSXRlbVRlbXBsYXRlPFQ+ID0gKGl0ZW06IFQsIGluZGV4OiBudW1iZXIpID0+IHVua25vd247XG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBwYXJ0c1xuLy8gVE9ETyhrc2NoYWFmKTogUmVmYWN0b3IgaW50byBQYXJ0IEFQST9cbmNvbnN0IGNyZWF0ZUFuZEluc2VydFBhcnQgPVxuICAgIChjb250YWluZXJQYXJ0OiBOb2RlUGFydCwgYmVmb3JlUGFydD86IE5vZGVQYXJ0KTogTm9kZVBhcnQgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUGFydC5zdGFydE5vZGUucGFyZW50Tm9kZSBhcyBOb2RlO1xuICAgICAgY29uc3QgYmVmb3JlTm9kZSA9IGJlZm9yZVBhcnQgPT09IHVuZGVmaW5lZCA/IGNvbnRhaW5lclBhcnQuZW5kTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlUGFydC5zdGFydE5vZGU7XG4gICAgICBjb25zdCBzdGFydE5vZGUgPSBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBiZWZvcmVOb2RlKTtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGJlZm9yZU5vZGUpO1xuICAgICAgY29uc3QgbmV3UGFydCA9IG5ldyBOb2RlUGFydChjb250YWluZXJQYXJ0Lm9wdGlvbnMpO1xuICAgICAgbmV3UGFydC5pbnNlcnRBZnRlck5vZGUoc3RhcnROb2RlKTtcbiAgICAgIHJldHVybiBuZXdQYXJ0O1xuICAgIH07XG5cbmNvbnN0IHVwZGF0ZVBhcnQgPSAocGFydDogTm9kZVBhcnQsIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICBwYXJ0LmNvbW1pdCgpO1xuICByZXR1cm4gcGFydDtcbn07XG5cbmNvbnN0IGluc2VydFBhcnRCZWZvcmUgPVxuICAgIChjb250YWluZXJQYXJ0OiBOb2RlUGFydCwgcGFydDogTm9kZVBhcnQsIHJlZj86IE5vZGVQYXJ0KSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJQYXJ0LnN0YXJ0Tm9kZS5wYXJlbnROb2RlIGFzIE5vZGU7XG4gICAgICBjb25zdCBiZWZvcmVOb2RlID0gcmVmID8gcmVmLnN0YXJ0Tm9kZSA6IGNvbnRhaW5lclBhcnQuZW5kTm9kZTtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBwYXJ0LmVuZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICBpZiAoZW5kTm9kZSAhPT0gYmVmb3JlTm9kZSkge1xuICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRhaW5lciwgcGFydC5zdGFydE5vZGUsIGVuZE5vZGUsIGJlZm9yZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbmNvbnN0IHJlbW92ZVBhcnQgPSAocGFydDogTm9kZVBhcnQpID0+IHtcbiAgcmVtb3ZlTm9kZXMoXG4gICAgICBwYXJ0LnN0YXJ0Tm9kZS5wYXJlbnROb2RlISwgcGFydC5zdGFydE5vZGUsIHBhcnQuZW5kTm9kZS5uZXh0U2libGluZyk7XG59O1xuXG4vLyBIZWxwZXIgZm9yIGdlbmVyYXRpbmcgYSBtYXAgb2YgYXJyYXkgaXRlbSB0byBpdHMgaW5kZXggb3ZlciBhIHN1YnNldFxuLy8gb2YgYW4gYXJyYXkgKHVzZWQgdG8gbGF6aWx5IGdlbmVyYXRlIGBuZXdLZXlUb0luZGV4TWFwYCBhbmRcbi8vIGBvbGRLZXlUb0luZGV4TWFwYClcbmNvbnN0IGdlbmVyYXRlTWFwID0gKGxpc3Q6IHVua25vd25bXSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBtYXAuc2V0KGxpc3RbaV0sIGkpO1xuICB9XG4gIHJldHVybiBtYXA7XG59O1xuXG4vLyBTdG9yZXMgcHJldmlvdXMgb3JkZXJlZCBsaXN0IG9mIHBhcnRzIGFuZCBtYXAgb2Yga2V5IHRvIGluZGV4XG5jb25zdCBwYXJ0TGlzdENhY2hlID0gbmV3IFdlYWtNYXA8Tm9kZVBhcnQsIChOb2RlUGFydCB8IG51bGwpW10+KCk7XG5jb25zdCBrZXlMaXN0Q2FjaGUgPSBuZXcgV2Vha01hcDxOb2RlUGFydCwgdW5rbm93bltdPigpO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgcmVwZWF0cyBhIHNlcmllcyBvZiB2YWx1ZXMgKHVzdWFsbHkgYFRlbXBsYXRlUmVzdWx0c2ApXG4gKiBnZW5lcmF0ZWQgZnJvbSBhbiBpdGVyYWJsZSwgYW5kIHVwZGF0ZXMgdGhvc2UgaXRlbXMgZWZmaWNpZW50bHkgd2hlbiB0aGVcbiAqIGl0ZXJhYmxlIGNoYW5nZXMgYmFzZWQgb24gdXNlci1wcm92aWRlZCBga2V5c2AgYXNzb2NpYXRlZCB3aXRoIGVhY2ggaXRlbS5cbiAqXG4gKiBOb3RlIHRoYXQgaWYgYSBga2V5Rm5gIGlzIHByb3ZpZGVkLCBzdHJpY3Qga2V5LXRvLURPTSBtYXBwaW5nIGlzIG1haW50YWluZWQsXG4gKiBtZWFuaW5nIHByZXZpb3VzIERPTSBmb3IgYSBnaXZlbiBrZXkgaXMgbW92ZWQgaW50byB0aGUgbmV3IHBvc2l0aW9uIGlmXG4gKiBuZWVkZWQsIGFuZCBET00gd2lsbCBuZXZlciBiZSByZXVzZWQgd2l0aCB2YWx1ZXMgZm9yIGRpZmZlcmVudCBrZXlzIChuZXcgRE9NXG4gKiB3aWxsIGFsd2F5cyBiZSBjcmVhdGVkIGZvciBuZXcga2V5cykuIFRoaXMgaXMgZ2VuZXJhbGx5IHRoZSBtb3N0IGVmZmljaWVudFxuICogd2F5IHRvIHVzZSBgcmVwZWF0YCBzaW5jZSBpdCBwZXJmb3JtcyBtaW5pbXVtIHVubmVjZXNzYXJ5IHdvcmsgZm9yIGluc2VydGlvbnNcbiAqIGFtZCByZW1vdmFscy5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHByb3ZpZGluZyBhIGBrZXlGbmAsIGtleXMgKm11c3QqIGJlIHVuaXF1ZSBmb3IgYWxsIGl0ZW1zIGluIGFcbiAqIGdpdmVuIGNhbGwgdG8gYHJlcGVhdGAuIFRoZSBiZWhhdmlvciB3aGVuIHR3byBvciBtb3JlIGl0ZW1zIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBpcyB1bmRlZmluZWQuXG4gKlxuICogSWYgbm8gYGtleUZuYCBpcyBwcm92aWRlZCwgdGhpcyBkaXJlY3RpdmUgd2lsbCBwZXJmb3JtIHNpbWlsYXIgdG8gbWFwcGluZ1xuICogaXRlbXMgdG8gdmFsdWVzLCBhbmQgRE9NIHdpbGwgYmUgcmV1c2VkIGFnYWluc3QgcG90ZW50aWFsbHkgZGlmZmVyZW50IGl0ZW1zLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0ID1cbiAgICBkaXJlY3RpdmUoXG4gICAgICAgIDxUPihpdGVtczogSXRlcmFibGU8VD4sXG4gICAgICAgICAgICBrZXlGbk9yVGVtcGxhdGU6IEtleUZuPFQ+fEl0ZW1UZW1wbGF0ZTxUPixcbiAgICAgICAgICAgIHRlbXBsYXRlPzogSXRlbVRlbXBsYXRlPFQ+KTpcbiAgICAgICAgICAgIERpcmVjdGl2ZUZuID0+IHtcbiAgICAgICAgICAgICAgbGV0IGtleUZuOiBLZXlGbjxUPjtcbiAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IGtleUZuT3JUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlGbk9yVGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGtleUZuID0ga2V5Rm5PclRlbXBsYXRlIGFzIEtleUZuPFQ+O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZXJQYXJ0OiBQYXJ0KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoY29udGFpbmVyUGFydCBpbnN0YW5jZW9mIE5vZGVQYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBlYXQgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXh0IGJpbmRpbmdzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9sZCBwYXJ0ICYga2V5IGxpc3RzIGFyZSByZXRyaWV2ZWQgZnJvbSB0aGUgbGFzdCB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyAoYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXJ0IGZvciB0aGlzIGluc3RhbmNlIG9mIHRoZSBkaXJlY3RpdmUpXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUGFydHMgPSBwYXJ0TGlzdENhY2hlLmdldChjb250YWluZXJQYXJ0KSB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRLZXlzID0ga2V5TGlzdENhY2hlLmdldChjb250YWluZXJQYXJ0KSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIC8vIE5ldyBwYXJ0IGxpc3Qgd2lsbCBiZSBidWlsdCB1cCBhcyB3ZSBnbyAoZWl0aGVyIHJldXNlZCBmcm9tXG4gICAgICAgICAgICAgICAgLy8gb2xkIHBhcnRzIG9yIGNyZWF0ZWQgZm9yIG5ldyBrZXlzIGluIHRoaXMgdXBkYXRlKS4gVGhpcyBpc1xuICAgICAgICAgICAgICAgIC8vIHNhdmVkIGluIHRoZSBhYm92ZSBjYWNoZSBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGUuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydHM6IE5vZGVQYXJ0W10gPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vIE5ldyB2YWx1ZSBsaXN0IGlzIGVhZ2VybHkgZ2VuZXJhdGVkIGZyb20gaXRlbXMgYWxvbmcgd2l0aCBhXG4gICAgICAgICAgICAgICAgLy8gcGFyYWxsZWwgYXJyYXkgaW5kaWNhdGluZyBpdHMga2V5LlxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlczogdW5rbm93bltdID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3S2V5czogdW5rbm93bltdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0tleXNbaW5kZXhdID0ga2V5Rm4gPyBrZXlGbihpdGVtLCBpbmRleCkgOiBpbmRleDtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tpbmRleF0gPSB0ZW1wbGF0ZSAhKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBmcm9tIGtleSB0byBpbmRleCBmb3IgY3VycmVudCBhbmQgcHJldmlvdXMgdXBkYXRlOyB0aGVzZVxuICAgICAgICAgICAgICAgIC8vIGFyZSBnZW5lcmF0ZWQgbGF6aWx5IG9ubHkgd2hlbiBuZWVkZWQgYXMgYSBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIC8vIG9wdGltaXphdGlvbiwgc2luY2UgdGhleSBhcmUgb25seSByZXF1aXJlZCBmb3IgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAvLyBub24tY29udGlndW91cyBjaGFuZ2VzIGluIHRoZSBsaXN0LCB3aGljaCBhcmUgbGVzcyBjb21tb24uXG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleVRvSW5kZXhNYXAhOiBNYXA8dW5rbm93biwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBsZXQgb2xkS2V5VG9JbmRleE1hcCE6IE1hcDx1bmtub3duLCBudW1iZXI+O1xuXG4gICAgICAgICAgICAgICAgLy8gSGVhZCBhbmQgdGFpbCBwb2ludGVycyB0byBvbGQgcGFydHMgYW5kIG5ldyB2YWx1ZXNcbiAgICAgICAgICAgICAgICBsZXQgb2xkSGVhZCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IG9sZFRhaWwgPSBvbGRQYXJ0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFkID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFpbCA9IG5ld1ZhbHVlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gT3ZlcnZpZXcgb2YgTyhuKSByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0gKGdlbmVyYWwgYXBwcm9hY2hcbiAgICAgICAgICAgICAgICAvLyBiYXNlZCBvbiBpZGVhcyBmb3VuZCBpbiBpdmksIHZ1ZSwgc25hYmJkb20sIGV0Yy4pOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBXZSBzdGFydCB3aXRoIHRoZSBsaXN0IG9mIG9sZCBwYXJ0cyBhbmQgbmV3IHZhbHVlcyAoYW5kXG4gICAgICAgICAgICAgICAgLy8gICBhcnJheXMgb2YgdGhlaXIgcmVzcGVjdGl2ZSBrZXlzKSwgaGVhZC90YWlsIHBvaW50ZXJzIGludG9cbiAgICAgICAgICAgICAgICAvLyAgIGVhY2gsIGFuZCB3ZSBidWlsZCB1cCB0aGUgbmV3IGxpc3Qgb2YgcGFydHMgYnkgdXBkYXRpbmdcbiAgICAgICAgICAgICAgICAvLyAgIChhbmQgd2hlbiBuZWVkZWQsIG1vdmluZykgb2xkIHBhcnRzIG9yIGNyZWF0aW5nIG5ldyBvbmVzLlxuICAgICAgICAgICAgICAgIC8vICAgVGhlIGluaXRpYWwgc2NlbmFyaW8gbWlnaHQgbG9vayBsaWtlIHRoaXMgKGZvciBicmV2aXR5IG9mXG4gICAgICAgICAgICAgICAgLy8gICB0aGUgZGlhZ3JhbXMsIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheSByZWZsZWN0IGtleXNcbiAgICAgICAgICAgICAgICAvLyAgIGFzc29jaWF0ZWQgd2l0aCB0aGUgb2xkIHBhcnRzIG9yIG5ldyB2YWx1ZXMsIGFsdGhvdWdoIGtleXNcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBwYXJ0cy92YWx1ZXMgYXJlIGFjdHVhbGx5IHN0b3JlZCBpbiBwYXJhbGxlbCBhcnJheXNcbiAgICAgICAgICAgICAgICAvLyAgIGluZGV4ZWQgdXNpbmcgdGhlIHNhbWUgaGVhZC90YWlsIHBvaW50ZXJzKTpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgb2xkSGVhZCB2ICAgICAgICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbICwgICwgICwgICwgICwgICwgIF1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gPC0gcmVmbGVjdHMgdGhlIHVzZXIncyBuZXdcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSBvcmRlclxuICAgICAgICAgICAgICAgIC8vICAgICAgbmV3SGVhZCBeICAgICAgICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogSXRlcmF0ZSBvbGQgJiBuZXcgbGlzdHMgZnJvbSBib3RoIHNpZGVzLCB1cGRhdGluZyxcbiAgICAgICAgICAgICAgICAvLyAgIHN3YXBwaW5nLCBvciByZW1vdmluZyBwYXJ0cyBhdCB0aGUgaGVhZC90YWlsIGxvY2F0aW9uc1xuICAgICAgICAgICAgICAgIC8vICAgdW50aWwgbmVpdGhlciBoZWFkIG5vciB0YWlsIGNhbiBtb3ZlLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBrZXlzIGF0IGhlYWQgcG9pbnRlcnMgbWF0Y2gsIHNvIHVwZGF0ZSBvbGRcbiAgICAgICAgICAgICAgICAvLyAgIHBhcnQgMCBpbi1wbGFjZSAobm8gbmVlZCB0byBtb3ZlIGl0KSBhbmQgcmVjb3JkIHBhcnQgMCBpblxuICAgICAgICAgICAgICAgIC8vICAgdGhlIGBuZXdQYXJ0c2AgbGlzdC4gVGhlIGxhc3QgdGhpbmcgd2UgZG8gaXMgYWR2YW5jZSB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGBvbGRIZWFkYCBhbmQgYG5ld0hlYWRgIHBvaW50ZXJzICh3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG5leHQgZGlhZ3JhbSkuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgIG9sZEhlYWQgdiAgICAgICAgICAgICAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIDIsIDMsIDQsIDUsIDZdXG4gICAgICAgICAgICAgICAgLy8gICBuZXdQYXJ0czogWzAsICAsICAsICAsICAsICAsICBdIDwtIGhlYWRzIG1hdGNoZWQ6IHVwZGF0ZSAwXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdICAgIGFuZCBhZHZhbmNlIGJvdGggb2xkSGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IGhlYWQgcG9pbnRlcnMgZG9uJ3QgbWF0Y2gsIGJ1dCB0YWlsXG4gICAgICAgICAgICAgICAgLy8gICBwb2ludGVycyBkbywgc28gdXBkYXRlIHBhcnQgNiBpbiBwbGFjZSAobm8gbmVlZCB0byBtb3ZlXG4gICAgICAgICAgICAgICAgLy8gICBpdCksIGFuZCByZWNvcmQgcGFydCA2IGluIHRoZSBgbmV3UGFydHNgIGxpc3QuIExhc3QsXG4gICAgICAgICAgICAgICAgLy8gICBhZHZhbmNlIHRoZSBgb2xkVGFpbGAgYW5kIGBvbGRIZWFkYCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgMiwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgICwgICwgICwgICwgICwgNl0gPC0gdGFpbHMgbWF0Y2hlZDogdXBkYXRlIDZcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYW5kIGFkdmFuY2UgYm90aCBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3SGVhZCBeICAgICAgICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogSWYgbmVpdGhlciBoZWFkIG5vciB0YWlsIG1hdGNoOyBuZXh0IGNoZWNrIGlmIG9uZSBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG9sZCBoZWFkL3RhaWwgaXRlbXMgd2FzIHJlbW92ZWQuIFdlIGZpcnN0IG5lZWQgdG8gZ2VuZXJhdGVcbiAgICAgICAgICAgICAgICAvLyAgIHRoZSByZXZlcnNlIG1hcCBvZiBuZXcga2V5cyB0byBpbmRleCAoYG5ld0tleVRvSW5kZXhNYXBgKSxcbiAgICAgICAgICAgICAgICAvLyAgIHdoaWNoIGlzIGRvbmUgb25jZSBsYXppbHkgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24sXG4gICAgICAgICAgICAgICAgLy8gICBzaW5jZSB3ZSBvbmx5IGhpdCB0aGlzIGNhc2UgaWYgbXVsdGlwbGUgbm9uLWNvbnRpZ3VvdXNcbiAgICAgICAgICAgICAgICAvLyAgIGNoYW5nZXMgd2VyZSBtYWRlLiBOb3RlIHRoYXQgZm9yIGNvbnRpZ3VvdXMgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIC8vICAgYW55d2hlcmUgaW4gdGhlIGxpc3QsIHRoZSBoZWFkIGFuZCB0YWlscyB3b3VsZCBhZHZhbmNlXG4gICAgICAgICAgICAgICAgLy8gICBmcm9tIGVpdGhlciBlbmQgYW5kIHBhc3MgZWFjaCBvdGhlciBiZWZvcmUgd2UgZ2V0IHRvIHRoaXNcbiAgICAgICAgICAgICAgICAvLyAgIGNhc2UgYW5kIHJlbW92YWxzIHdvdWxkIGJlIGhhbmRsZWQgaW4gdGhlIGZpbmFsIHdoaWxlIGxvb3BcbiAgICAgICAgICAgICAgICAvLyAgIHdpdGhvdXQgbmVlZGluZyB0byBnZW5lcmF0ZSB0aGUgbWFwLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBUaGUga2V5IGF0IGBvbGRUYWlsYCB3YXMgcmVtb3ZlZCAobm8gbG9uZ2VyXG4gICAgICAgICAgICAgICAgLy8gICBpbiB0aGUgYG5ld0tleVRvSW5kZXhNYXBgKSwgc28gcmVtb3ZlIHRoYXQgcGFydCBmcm9tIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgRE9NIGFuZCBhZHZhbmNlIGp1c3QgdGhlIGBvbGRUYWlsYCBwb2ludGVyLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvbGRIZWFkIHYgICAgICAgICAgIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAyLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAgLCAgLCAgLCAgLCAgLCA2XSA8LSA1IG5vdCBpbiBuZXcgbWFwOiByZW1vdmVcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgNSBhbmQgYWR2YW5jZSBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdIZWFkIF4gICAgICAgICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBPbmNlIGhlYWQgYW5kIHRhaWwgY2Fubm90IG1vdmUsIGFueSBtaXNtYXRjaGVzIGFyZSBkdWUgdG9cbiAgICAgICAgICAgICAgICAvLyAgIGVpdGhlciBuZXcgb3IgbW92ZWQgaXRlbXM7IGlmIGEgbmV3IGtleSBpcyBpbiB0aGUgcHJldmlvdXNcbiAgICAgICAgICAgICAgICAvLyAgIFwib2xkIGtleSB0byBvbGQgaW5kZXhcIiBtYXAsIG1vdmUgdGhlIG9sZCBwYXJ0IHRvIHRoZSBuZXdcbiAgICAgICAgICAgICAgICAvLyAgIGxvY2F0aW9uLCBvdGhlcndpc2UgY3JlYXRlIGFuZCBpbnNlcnQgYSBuZXcgcGFydC4gTm90ZVxuICAgICAgICAgICAgICAgIC8vICAgdGhhdCB3aGVuIG1vdmluZyBhbiBvbGQgcGFydCB3ZSBudWxsIGl0cyBwb3NpdGlvbiBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIG9sZFBhcnRzIGFycmF5IGlmIGl0IGxpZXMgYmV0d2VlbiB0aGUgaGVhZCBhbmQgdGFpbCBzbyB3ZVxuICAgICAgICAgICAgICAgIC8vICAga25vdyB0byBza2lwIGl0IHdoZW4gdGhlIHBvaW50ZXJzIGdldCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogbmVpdGhlciBoZWFkIG5vciB0YWlsIG1hdGNoLCBhbmQgbmVpdGhlclxuICAgICAgICAgICAgICAgIC8vICAgd2VyZSByZW1vdmVkOyBzbyBmaW5kIHRoZSBgbmV3SGVhZGAga2V5IGluIHRoZVxuICAgICAgICAgICAgICAgIC8vICAgYG9sZEtleVRvSW5kZXhNYXBgLCBhbmQgbW92ZSB0aGF0IG9sZCBwYXJ0J3MgRE9NIGludG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gICBuZXh0IGhlYWQgcG9zaXRpb24gKGJlZm9yZSBgb2xkUGFydHNbb2xkSGVhZF1gKS4gTGFzdCxcbiAgICAgICAgICAgICAgICAvLyAgIG51bGwgdGhlIHBhcnQgaW4gdGhlIGBvbGRQYXJ0YCBhcnJheSBzaW5jZSBpdCB3YXNcbiAgICAgICAgICAgICAgICAvLyAgIHNvbWV3aGVyZSBpbiB0aGUgcmVtYWluaW5nIG9sZFBhcnRzIHN0aWxsIHRvIGJlIHNjYW5uZWRcbiAgICAgICAgICAgICAgICAvLyAgIChiZXR3ZWVuIHRoZSBoZWFkIGFuZCB0YWlsIHBvaW50ZXJzKSBzbyB0aGF0IHdlIGtub3cgdG9cbiAgICAgICAgICAgICAgICAvLyAgIHNraXAgdGhhdCBvbGQgcGFydCBvbiBmdXR1cmUgaXRlcmF0aW9ucy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgICwgICwgICwgICwgNl0gPC0gc3R1Y2s6IHVwZGF0ZSAmIG1vdmUgMlxuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XSAgICBpbnRvIHBsYWNlIGFuZCBhZHZhbmNlXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld0hlYWQgXiAgICAgICAgICAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE5vdGUgdGhhdCBmb3IgbW92ZXMvaW5zZXJ0aW9ucyBsaWtlIHRoZSBvbmUgYWJvdmUsIGEgcGFydFxuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0ZWQgYXQgdGhlIGhlYWQgcG9pbnRlciBpcyBpbnNlcnRlZCBiZWZvcmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gICBjdXJyZW50IGBvbGRQYXJ0c1tvbGRIZWFkXWAsIGFuZCBhIHBhcnQgaW5zZXJ0ZWQgYXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gICB0YWlsIHBvaW50ZXIgaXMgaW5zZXJ0ZWQgYmVmb3JlIGBuZXdQYXJ0c1tuZXdUYWlsKzFdYC4gVGhlXG4gICAgICAgICAgICAgICAgLy8gICBzZWVtaW5nIGFzeW1tZXRyeSBsaWVzIGluIHRoZSBmYWN0IHRoYXQgbmV3IHBhcnRzIGFyZVxuICAgICAgICAgICAgICAgIC8vICAgbW92ZWQgaW50byBwbGFjZSBvdXRzaWRlIGluLCBzbyB0byB0aGUgcmlnaHQgb2YgdGhlIGhlYWRcbiAgICAgICAgICAgICAgICAvLyAgIHBvaW50ZXIgYXJlIG9sZCBwYXJ0cywgYW5kIHRvIHRoZSByaWdodCBvZiB0aGUgdGFpbFxuICAgICAgICAgICAgICAgIC8vICAgcG9pbnRlciBhcmUgbmV3IHBhcnRzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBXZSBhbHdheXMgcmVzdGFydCBiYWNrIGZyb20gdGhlIHRvcCBvZiB0aGUgYWxnb3JpdGhtLFxuICAgICAgICAgICAgICAgIC8vICAgYWxsb3dpbmcgbWF0Y2hpbmcgYW5kIHNpbXBsZSB1cGRhdGVzIGluIHBsYWNlIHRvXG4gICAgICAgICAgICAgICAgLy8gICBjb250aW51ZS4uLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiB0aGUgaGVhZCBwb2ludGVycyBvbmNlIGFnYWluIG1hdGNoLCBzb1xuICAgICAgICAgICAgICAgIC8vICAgc2ltcGx5IHVwZGF0ZSBwYXJ0IDEgYW5kIHJlY29yZCBpdCBpbiB0aGUgYG5ld1BhcnRzYFxuICAgICAgICAgICAgICAgIC8vICAgYXJyYXkuICBMYXN0LCBhZHZhbmNlIGJvdGggaGVhZCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2xkSGVhZCB2ICAgICAgICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgICwgICwgICwgNl0gPC0gaGVhZHMgbWF0Y2hlZDogdXBkYXRlIDFcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYW5kIGFkdmFuY2UgYm90aCBvbGRIZWFkXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgbmV3SGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgbmV3SGVhZCBeICAgICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogQXMgbWVudGlvbmVkIGFib3ZlLCBpdGVtcyB0aGF0IHdlcmUgbW92ZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgICAgICAgICAgICAvLyAgIGJlaW5nIHN0dWNrICh0aGUgZmluYWwgZWxzZSBjbGF1c2UgaW4gdGhlIGNvZGUgYmVsb3cpIGFyZVxuICAgICAgICAgICAgICAgIC8vICAgbWFya2VkIHdpdGggbnVsbCwgc28gd2UgYWx3YXlzIGFkdmFuY2Ugb2xkIHBvaW50ZXJzIG92ZXJcbiAgICAgICAgICAgICAgICAvLyAgIHRoZXNlIHNvIHdlJ3JlIGNvbXBhcmluZyB0aGUgbmV4dCBhY3R1YWwgb2xkIHZhbHVlIG9uXG4gICAgICAgICAgICAgICAgLy8gICBlaXRoZXIgZW5kLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBFeGFtcGxlIGJlbG93OiBgb2xkSGVhZGAgaXMgbnVsbCAoYWxyZWFkeSBwbGFjZWQgaW5cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzKSwgc28gYWR2YW5jZSBgb2xkSGVhZGAuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIG9sZEhlYWQgdiAgICAgdiBvbGRUYWlsXG4gICAgICAgICAgICAgICAgLy8gICBvbGRLZXlzOiAgWzAsIDEsIC0sIDMsIDQsIDUsIDZdIDwtIG9sZCBoZWFkIGFscmVhZHkgdXNlZDpcbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgICwgICwgICwgNl0gICAgYWR2YW5jZSBvbGRIZWFkXG4gICAgICAgICAgICAgICAgLy8gICBuZXdLZXlzOiAgWzAsIDIsIDEsIDQsIDMsIDcsIDZdXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBuZXdIZWFkIF4gICAgIF4gbmV3VGFpbFxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gKiBOb3RlIGl0J3Mgbm90IGNyaXRpY2FsIHRvIG1hcmsgb2xkIHBhcnRzIGFzIG51bGwgd2hlbiB0aGV5XG4gICAgICAgICAgICAgICAgLy8gICBhcmUgbW92ZWQgZnJvbSBoZWFkIHRvIHRhaWwgb3IgdGFpbCB0byBoZWFkLCBzaW5jZSB0aGV5XG4gICAgICAgICAgICAgICAgLy8gICB3aWxsIGJlIG91dHNpZGUgdGhlIHBvaW50ZXIgcmFuZ2UgYW5kIG5ldmVyIHZpc2l0ZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IEhlcmUgdGhlIG9sZCB0YWlsIGtleSBtYXRjaGVzIHRoZSBuZXcgaGVhZFxuICAgICAgICAgICAgICAgIC8vICAga2V5LCBzbyB0aGUgcGFydCBhdCB0aGUgYG9sZFRhaWxgIHBvc2l0aW9uIGFuZCBtb3ZlIGl0c1xuICAgICAgICAgICAgICAgIC8vICAgRE9NIHRvIHRoZSBuZXcgaGVhZCBwb3NpdGlvbiAoYmVmb3JlIGBvbGRQYXJ0c1tvbGRIZWFkXWApLlxuICAgICAgICAgICAgICAgIC8vICAgTGFzdCwgYWR2YW5jZSBgb2xkVGFpbGAgYW5kIGBuZXdIZWFkYCBwb2ludGVycy5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgb2xkSGVhZCB2ICB2IG9sZFRhaWxcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgICwgICwgNl0gPC0gb2xkIHRhaWwgbWF0Y2hlcyBuZXdcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICBoZWFkOiB1cGRhdGUgJiBtb3ZlIDQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSBvbGRUYWlsICYgbmV3SGVhZFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgbmV3SGVhZCBeICAgICBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogRXhhbXBsZSBiZWxvdzogT2xkIGFuZCBuZXcgaGVhZCBrZXlzIG1hdGNoLCBzbyB1cGRhdGUgdGhlXG4gICAgICAgICAgICAgICAgLy8gICBvbGQgaGVhZCBwYXJ0IGluIHBsYWNlLCBhbmQgYWR2YW5jZSB0aGUgYG9sZEhlYWRgIGFuZFxuICAgICAgICAgICAgICAgIC8vICAgYG5ld0hlYWRgIHBvaW50ZXJzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBvbGRIZWFkIHYgb2xkVGFpbFxuICAgICAgICAgICAgICAgIC8vICAgb2xkS2V5czogIFswLCAxLCAtLCAzLCA0LCA1LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgbmV3UGFydHM6IFswLCAyLCAxLCA0LCAzLCAgICw2XSA8LSBoZWFkcyBtYXRjaDogdXBkYXRlIDNcbiAgICAgICAgICAgICAgICAvLyAgIG5ld0tleXM6ICBbMCwgMiwgMSwgNCwgMywgNywgNl0gICAgYW5kIGFkdmFuY2Ugb2xkSGVhZCAmXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0hlYWRcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgIG5ld0hlYWQgXiAgXiBuZXdUYWlsXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIE9uY2UgdGhlIG5ldyBvciBvbGQgcG9pbnRlcnMgbW92ZSBwYXN0IGVhY2ggb3RoZXIgdGhlbiBhbGxcbiAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgbGVmdCBpcyBhZGRpdGlvbnMgKGlmIG9sZCBsaXN0IGV4aGF1c3RlZCkgb3JcbiAgICAgICAgICAgICAgICAvLyAgIHJlbW92YWxzIChpZiBuZXcgbGlzdCBleGhhdXN0ZWQpLiBUaG9zZSBhcmUgaGFuZGxlZCBpbiB0aGVcbiAgICAgICAgICAgICAgICAvLyAgIGZpbmFsIHdoaWxlIGxvb3BzIGF0IHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAqIEV4YW1wbGUgYmVsb3c6IGBvbGRIZWFkYCBleGNlZWRlZCBgb2xkVGFpbGAsIHNvIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAvLyAgIHdpdGggdGhlIG1haW4gbG9vcC4gIENyZWF0ZSB0aGUgcmVtYWluaW5nIHBhcnQgYW5kIGluc2VydFxuICAgICAgICAgICAgICAgIC8vICAgaXQgYXQgdGhlIG5ldyBoZWFkIHBvc2l0aW9uLCBhbmQgdGhlIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIChvbGRIZWFkID4gb2xkVGFpbClcbiAgICAgICAgICAgICAgICAvLyAgIG9sZEtleXM6ICBbMCwgMSwgLSwgMywgNCwgNSwgNl1cbiAgICAgICAgICAgICAgICAvLyAgIG5ld1BhcnRzOiBbMCwgMiwgMSwgNCwgMywgNyAsNl0gPC0gY3JlYXRlIGFuZCBpbnNlcnQgN1xuICAgICAgICAgICAgICAgIC8vICAgbmV3S2V5czogIFswLCAyLCAxLCA0LCAzLCA3LCA2XVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCBeIG5ld1RhaWxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgaWYvZWxzZSBjbGF1c2VzIGlzIG5vdFxuICAgICAgICAgICAgICAgIC8vICAgaW1wb3J0YW50IHRvIHRoZSBhbGdvcml0aG0sIGFzIGxvbmcgYXMgdGhlIG51bGwgY2hlY2tzXG4gICAgICAgICAgICAgICAgLy8gICBjb21lIGZpcnN0ICh0byBlbnN1cmUgd2UncmUgYWx3YXlzIHdvcmtpbmcgb24gdmFsaWQgb2xkXG4gICAgICAgICAgICAgICAgLy8gICBwYXJ0cykgYW5kIHRoYXQgdGhlIGZpbmFsIGVsc2UgY2xhdXNlIGNvbWVzIGxhc3QgKHNpbmNlXG4gICAgICAgICAgICAgICAgLy8gICB0aGF0J3Mgd2hlcmUgdGhlIGV4cGVuc2l2ZSBtb3ZlcyBvY2N1cikuIFRoZSBvcmRlciBvZlxuICAgICAgICAgICAgICAgIC8vICAgcmVtYWluaW5nIGNsYXVzZXMgaXMgaXMganVzdCBhIHNpbXBsZSBndWVzcyBhdCB3aGljaCBjYXNlc1xuICAgICAgICAgICAgICAgIC8vICAgd2lsbCBiZSBtb3N0IGNvbW1vbi5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICogVE9ETyhrc2NoYWFmKSBOb3RlLCB3ZSBjb3VsZCBjYWxjdWxhdGUgdGhlIGxvbmdlc3RcbiAgICAgICAgICAgICAgICAvLyAgIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgKExJUykgb2Ygb2xkIGl0ZW1zIGluIG5ldyBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAvLyAgIGFuZCBvbmx5IG1vdmUgdGhvc2Ugbm90IGluIHRoZSBMSVMgc2V0LiBIb3dldmVyIHRoYXQgY29zdHNcbiAgICAgICAgICAgICAgICAvLyAgIE8obmxvZ24pIHRpbWUgYW5kIGFkZHMgYSBiaXQgbW9yZSBjb2RlLCBhbmQgb25seSBoZWxwc1xuICAgICAgICAgICAgICAgIC8vICAgbWFrZSByYXJlIHR5cGVzIG9mIG11dGF0aW9ucyByZXF1aXJlIGZld2VyIG1vdmVzLiBUaGVcbiAgICAgICAgICAgICAgICAvLyAgIGFib3ZlIGhhbmRsZXMgcmVtb3ZlcywgYWRkcywgcmV2ZXJzYWwsIHN3YXBzLCBhbmQgc2luZ2xlXG4gICAgICAgICAgICAgICAgLy8gICBtb3ZlcyBvZiBjb250aWd1b3VzIGl0ZW1zIGluIGxpbmVhciB0aW1lLCBpbiB0aGUgbWluaW11bVxuICAgICAgICAgICAgICAgIC8vICAgbnVtYmVyIG9mIG1vdmVzLiBBcyB0aGUgbnVtYmVyIG9mIG11bHRpcGxlIG1vdmVzIHdoZXJlIExJU1xuICAgICAgICAgICAgICAgIC8vICAgbWlnaHQgaGVscCBhcHByb2FjaGVzIGEgcmFuZG9tIHNodWZmbGUsIHRoZSBMSVNcbiAgICAgICAgICAgICAgICAvLyAgIG9wdGltaXphdGlvbiBiZWNvbWVzIGxlc3MgaGVscGZ1bCwgc28gaXQgc2VlbXMgbm90IHdvcnRoXG4gICAgICAgICAgICAgICAgLy8gICB0aGUgY29kZSBhdCB0aGlzIHBvaW50LiBDb3VsZCByZWNvbnNpZGVyIGlmIGEgY29tcGVsbGluZ1xuICAgICAgICAgICAgICAgIC8vICAgY2FzZSBhcmlzZXMuXG5cbiAgICAgICAgICAgICAgICB3aGlsZSAob2xkSGVhZCA8PSBvbGRUYWlsICYmIG5ld0hlYWQgPD0gbmV3VGFpbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKG9sZFBhcnRzW29sZEhlYWRdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBudWxsYCBtZWFucyBvbGQgcGFydCBhdCBoZWFkIGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdzsgc2tpcFxuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFBhcnRzW29sZFRhaWxdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBudWxsYCBtZWFucyBvbGQgcGFydCBhdCB0YWlsIGhhcyBhbHJlYWR5IGJlZW4gdXNlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdzsgc2tpcFxuICAgICAgICAgICAgICAgICAgICBvbGRUYWlsLS07XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZEtleXNbb2xkSGVhZF0gPT09IG5ld0tleXNbbmV3SGVhZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2xkIGhlYWQgbWF0Y2hlcyBuZXcgaGVhZDsgdXBkYXRlIGluIHBsYWNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcnRzW25ld0hlYWRdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcnQob2xkUGFydHNbb2xkSGVhZF0hLCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIG5ld0hlYWQrKztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRUYWlsXSA9PT0gbmV3S2V5c1tuZXdUYWlsXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgdGFpbCBtYXRjaGVzIG5ldyB0YWlsOyB1cGRhdGUgaW4gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3VGFpbF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEsIG5ld1ZhbHVlc1tuZXdUYWlsXSk7XG4gICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFpbC0tO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlzW29sZEhlYWRdID09PSBuZXdLZXlzW25ld1RhaWxdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9sZCBoZWFkIG1hdGNoZXMgbmV3IHRhaWw7IHVwZGF0ZSBhbmQgbW92ZSB0byBuZXcgdGFpbFxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdUYWlsXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG9sZFBhcnRzW29sZEhlYWRdISwgbmV3VmFsdWVzW25ld1RhaWxdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXJ0c1tvbGRIZWFkXSEsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdUYWlsICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICBvbGRIZWFkKys7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RhaWwtLTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkS2V5c1tvbGRUYWlsXSA9PT0gbmV3S2V5c1tuZXdIZWFkXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbGQgdGFpbCBtYXRjaGVzIG5ldyBoZWFkOyB1cGRhdGUgYW5kIG1vdmUgdG8gbmV3IGhlYWRcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZF0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFBhcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBvbGRQYXJ0c1tvbGRUYWlsXSEsIG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCsrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0tleVRvSW5kZXhNYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIExhemlseSBnZW5lcmF0ZSBrZXktdG8taW5kZXggbWFwcywgdXNlZCBmb3IgcmVtb3ZhbHMgJlxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmVzIGJlbG93XG4gICAgICAgICAgICAgICAgICAgICAgbmV3S2V5VG9JbmRleE1hcCA9IGdlbmVyYXRlTWFwKG5ld0tleXMsIG5ld0hlYWQsIG5ld1RhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgIG9sZEtleVRvSW5kZXhNYXAgPSBnZW5lcmF0ZU1hcChvbGRLZXlzLCBvbGRIZWFkLCBvbGRUYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld0tleVRvSW5kZXhNYXAuaGFzKG9sZEtleXNbb2xkSGVhZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gT2xkIGhlYWQgaXMgbm8gbG9uZ2VyIGluIG5ldyBsaXN0OyByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQYXJ0KG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgICAgb2xkSGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFuZXdLZXlUb0luZGV4TWFwLmhhcyhvbGRLZXlzW29sZFRhaWxdKSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIE9sZCB0YWlsIGlzIG5vIGxvbmdlciBpbiBuZXcgbGlzdDsgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGFydChvbGRQYXJ0c1tvbGRUYWlsXSEpO1xuICAgICAgICAgICAgICAgICAgICAgIG9sZFRhaWwtLTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgbWlzbWF0Y2hlcyBhdCB0aGlzIHBvaW50IGFyZSBkdWUgdG8gYWRkaXRpb25zIG9yXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZXM7IHNlZSBpZiB3ZSBoYXZlIGFuIG9sZCBwYXJ0IHdlIGNhbiByZXVzZSBhbmQgbW92ZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGludG8gcGxhY2VcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IG9sZEtleVRvSW5kZXhNYXAuZ2V0KG5ld0tleXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBhcnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRJbmRleCAhPT0gdW5kZWZpbmVkID8gb2xkUGFydHNbb2xkSW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkUGFydCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gb2xkIHBhcnQgZm9yIHRoaXMgdmFsdWU7IGNyZWF0ZSBhIG5ldyBvbmUgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhcnQgPSBjcmVhdGVBbmRJbnNlcnRQYXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclBhcnQsIG9sZFBhcnRzW29sZEhlYWRdISk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJ0KG5ld1BhcnQsIG5ld1ZhbHVlc1tuZXdIZWFkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9IG5ld1BhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldXNlIG9sZCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0c1tuZXdIZWFkXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChvbGRQYXJ0LCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UGFydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJQYXJ0LCBvbGRQYXJ0LCBvbGRQYXJ0c1tvbGRIZWFkXSEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtYXJrcyB0aGUgb2xkIHBhcnQgYXMgaGF2aW5nIGJlZW4gdXNlZCwgc28gdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgd2lsbCBiZSBza2lwcGVkIGluIHRoZSBmaXJzdCB0d28gY2hlY2tzIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXJ0c1tvbGRJbmRleCBhcyBudW1iZXJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbmV3SGVhZCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBwYXJ0cyBmb3IgYW55IHJlbWFpbmluZyBuZXcgdmFsdWVzXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5ld0hlYWQgPD0gbmV3VGFpbCkge1xuICAgICAgICAgICAgICAgICAgLy8gRm9yIGFsbCByZW1haW5pbmcgYWRkaXRpb25zLCB3ZSBpbnNlcnQgYmVmb3JlIGxhc3QgbmV3XG4gICAgICAgICAgICAgICAgICAvLyB0YWlsLCBzaW5jZSBvbGQgcG9pbnRlcnMgYXJlIG5vIGxvbmdlciB2YWxpZFxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydCA9XG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kSW5zZXJ0UGFydChjb250YWluZXJQYXJ0LCBuZXdQYXJ0c1tuZXdUYWlsICsgMV0pO1xuICAgICAgICAgICAgICAgICAgdXBkYXRlUGFydChuZXdQYXJ0LCBuZXdWYWx1ZXNbbmV3SGVhZF0pO1xuICAgICAgICAgICAgICAgICAgbmV3UGFydHNbbmV3SGVhZCsrXSA9IG5ld1BhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIHVudXNlZCBvbGQgcGFydHNcbiAgICAgICAgICAgICAgICB3aGlsZSAob2xkSGVhZCA8PSBvbGRUYWlsKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvbGRQYXJ0ID0gb2xkUGFydHNbb2xkSGVhZCsrXTtcbiAgICAgICAgICAgICAgICAgIGlmIChvbGRQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVBhcnQob2xkUGFydCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNhdmUgb3JkZXIgb2YgbmV3IHBhcnRzIGZvciBuZXh0IHJvdW5kXG4gICAgICAgICAgICAgICAgcGFydExpc3RDYWNoZS5zZXQoY29udGFpbmVyUGFydCwgbmV3UGFydHMpO1xuICAgICAgICAgICAgICAgIGtleUxpc3RDYWNoZS5zZXQoY29udGFpbmVyUGFydCwgbmV3S2V5cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSBhc1xuICAgIDxUPihpdGVtczogSXRlcmFibGU8VD4sXG4gICAgICAgIGtleUZuT3JUZW1wbGF0ZTogS2V5Rm48VD58SXRlbVRlbXBsYXRlPFQ+LFxuICAgICAgICB0ZW1wbGF0ZT86IEl0ZW1UZW1wbGF0ZTxUPikgPT4gRGlyZWN0aXZlRm47XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0LCBQcm9wZXJ0eVBhcnR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUluZm8ge1xuICByZWFkb25seSBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG4vKipcbiAqIFN0b3JlcyB0aGUgU3R5bGVJbmZvIG9iamVjdCBhcHBsaWVkIHRvIGEgZ2l2ZW4gQXR0cmlidXRlUGFydC5cbiAqIFVzZWQgdG8gdW5zZXQgZXhpc3RpbmcgdmFsdWVzIHdoZW4gYSBuZXcgU3R5bGVJbmZvIG9iamVjdCBpcyBhcHBsaWVkLlxuICovXG5jb25zdCBzdHlsZU1hcENhY2hlID0gbmV3IFdlYWtNYXA8QXR0cmlidXRlUGFydCwgU3R5bGVJbmZvPigpO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXBwbGllcyBDU1MgcHJvcGVydGllcyB0byBhbiBlbGVtZW50LlxuICpcbiAqIGBzdHlsZU1hcGAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHlcbiAqIGV4cHJlc3Npb24gaW4gdGhlIGF0dHJpYnV0ZS4gSXQgdGFrZXMgdGhlIHByb3BlcnR5IG5hbWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhZGRzIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgYXMgQ1NTIHByb3BlcnRlcy4gUHJvcGVydHkgbmFtZXMgd2l0aFxuICogZGFzaGVzIChgLWApIGFyZSBhc3N1bWVkIHRvIGJlIHZhbGlkIENTUyBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZVxuICogZWxlbWVudCdzIHN0eWxlIG9iamVjdCB1c2luZyBgc2V0UHJvcGVydHkoKWAuIE5hbWVzIHdpdGhvdXQgZGFzaGVzIGFyZVxuICogYXNzdW1lZCB0byBiZSBjYW1lbENhc2VkIEphdmFTY3JpcHQgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGUgZWxlbWVudCdzXG4gKiBzdHlsZSBvYmplY3QgdXNpbmcgcHJvcGVydHkgYXNzaWdubWVudCwgYWxsb3dpbmcgdGhlIHN0eWxlIG9iamVjdCB0b1xuICogdHJhbnNsYXRlIEphdmFTY3JpcHQtc3R5bGUgbmFtZXMgdG8gQ1NTIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEZvciBleGFtcGxlIGBzdHlsZU1hcCh7YmFja2dyb3VuZENvbG9yOiAncmVkJywgJ2JvcmRlci10b3AnOiAnNXB4JywgJy0tc2l6ZSc6XG4gKiAnMCd9KWAgc2V0cyB0aGUgYGJhY2tncm91bmQtY29sb3JgLCBgYm9yZGVyLXRvcGAgYW5kIGAtLXNpemVgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHN0eWxlSW5mbyB7U3R5bGVJbmZvfVxuICovXG5leHBvcnQgY29uc3Qgc3R5bGVNYXAgPSBkaXJlY3RpdmUoKHN0eWxlSW5mbzogU3R5bGVJbmZvKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkgfHwgKHBhcnQgaW5zdGFuY2VvZiBQcm9wZXJ0eVBhcnQpIHx8XG4gICAgICBwYXJ0LmNvbW1pdHRlci5uYW1lICE9PSAnc3R5bGUnIHx8IHBhcnQuY29tbWl0dGVyLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBzdHlsZSBhdHRyaWJ1dGUgJyArXG4gICAgICAgICdhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuJyk7XG4gIH1cblxuICBjb25zdCB7Y29tbWl0dGVyfSA9IHBhcnQ7XG4gIGNvbnN0IHtzdHlsZX0gPSBjb21taXR0ZXIuZWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAvLyBIYW5kbGUgc3RhdGljIHN0eWxlcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgYSBQYXJ0XG4gIGlmICghc3R5bGVNYXBDYWNoZS5oYXMocGFydCkpIHtcbiAgICBzdHlsZS5jc3NUZXh0ID0gY29tbWl0dGVyLnN0cmluZ3Muam9pbignICcpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIG9sZCBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0IGluIHN0eWxlSW5mb1xuICBjb25zdCBvbGRJbmZvID0gc3R5bGVNYXBDYWNoZS5nZXQocGFydCk7XG4gIGZvciAoY29uc3QgbmFtZSBpbiBvbGRJbmZvKSB7XG4gICAgaWYgKCEobmFtZSBpbiBzdHlsZUluZm8pKSB7XG4gICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAoc3R5bGUgYXMgYW55KVtuYW1lXSA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgc3R5bGVJbmZvW25hbWVdKTtcbiAgICB9XG4gIH1cbiAgc3R5bGVNYXBDYWNoZS5zZXQocGFydCwgc3R5bGVJbmZvKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBR0E7QUFEQTs7QUFJQTtBQU1BO0FBR0E7QUFHQTtBQUdBO0FBMkJBO0FBQ0E7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQW9CQTtBQUNBO0FBbEJBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBbkJBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBOzs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWVBO0FBTUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0YkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQU1BOzs7OztBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
