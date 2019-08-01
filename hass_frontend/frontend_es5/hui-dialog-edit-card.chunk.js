(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-dialog-edit-card"],
  {
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

    /***/ "./src/components/dialog/ha-iron-focusables-helper.js":
      /*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
      /*! exports provided: HaIronFocusablesHelper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIronFocusablesHelper",
          function() {
            return HaIronFocusablesHelper;
          }
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js"
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

        /*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/

        var HaIronFocusablesHelper = {
          /**
           * Returns a sorted array of tabbable nodes, including the root node.
           * It searches the tabbable nodes in the light and shadow dom of the chidren,
           * sorting the result by tabindex.
           * @param {!Node} node
           * @return {!Array<!HTMLElement>}
           */
          getTabbableNodes: function getTabbableNodes(node) {
            var result = []; // If there is at least one element with tabindex > 0, we need to sort
            // the final array by tabindex.

            var needsSortByTabIndex = this._collectTabbableNodes(node, result);

            if (needsSortByTabIndex) {
              return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
                "IronFocusablesHelper"
              ]._sortByTabIndex(result);
            }

            return result;
          },

          /**
           * Searches for nodes that are tabbable and adds them to the `result` array.
           * Returns if the `result` array needs to be sorted by tabindex.
           * @param {!Node} node The starting point for the search; added to `result`
           * if tabbable.
           * @param {!Array<!HTMLElement>} result
           * @return {boolean}
           * @private
           */
          _collectTabbableNodes: function _collectTabbableNodes(node, result) {
            // If not an element or not visible, no need to explore children.
            if (
              node.nodeType !== Node.ELEMENT_NODE ||
              !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
                "IronFocusablesHelper"
              ]._isVisible(node)
            ) {
              return false;
            }

            var element =
              /** @type {!HTMLElement} */
              node;

            var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronFocusablesHelper"
            ]._normalizedTabIndex(element);

            var needsSort = tabIndex > 0;

            if (tabIndex >= 0) {
              result.push(element);
            } // In ShadowDOM v1, tab order is affected by the order of distrubution.
            // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
            // in ShadowDOM v0 tab order is not affected by the distrubution order,
            // in fact getTabbableNodes(#root) returns [#B, #A].
            //  <div id="root">
            //   <!-- shadow -->
            //     <slot name="a">
            //     <slot name="b">
            //   <!-- /shadow -->
            //   <input id="A" slot="a">
            //   <input id="B" slot="b" tabindex="1">
            //  </div>
            // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.

            var children;

            if (
              element.localName === "content" ||
              element.localName === "slot"
            ) {
              children = Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__[
                  "dom"
                ]
              )(element).getDistributedNodes();
            } else {
              // /////////////////////////
              // Use shadow root if possible, will check for distributed nodes.
              // THIS IS THE CHANGED LINE
              children = Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__[
                  "dom"
                ]
              )(element.shadowRoot || element.root || element).children; // /////////////////////////
            }

            for (var i = 0; i < children.length; i++) {
              // Ensure method is always invoked to collect tabbable children.
              needsSort =
                this._collectTabbableNodes(children[i], result) || needsSort;
            }

            return needsSort;
          },
        };

        /***/
      },

    /***/ "./src/components/dialog/ha-paper-dialog.ts":
      /*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
      /*! exports provided: HaPaperDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperDialog",
          function() {
            return HaPaperDialog;
          }
        );
        /* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js"
        );
        /* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js"
        );
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        // tslint:disable-next-line

        var paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

        var haTabFixBehaviorImpl = {
          get _focusableNodes() {
            return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__[
              "HaIronFocusablesHelper"
            ].getTabbableNodes(this);
          },
        }; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
        // export class HaPaperDialog extends paperDialogClass {}
        // @ts-ignore

        var HaPaperDialog =
          /*#__PURE__*/
          (function(_mixinBehaviors) {
            _inherits(HaPaperDialog, _mixinBehaviors);

            function HaPaperDialog() {
              _classCallCheck(this, HaPaperDialog);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperDialog).apply(this, arguments)
              );
            }

            return HaPaperDialog;
          })(
            Object(
              _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__[
                "mixinBehaviors"
              ]
            )([haTabFixBehaviorImpl], paperDialogClass)
          );
        customElements.define("ha-paper-dialog", HaPaperDialog);

        /***/
      },

    /***/ "./src/panels/lovelace/common/get-card-element-tag.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/common/get-card-element-tag.ts ***!
  \************************************************************/
      /*! exports provided: getCardElementTag */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getCardElementTag",
          function() {
            return getCardElementTag;
          }
        );
        var CUSTOM_TYPE_PREFIX = "custom:";
        function getCardElementTag(type) {
          return type.startsWith(CUSTOM_TYPE_PREFIX)
            ? type.substr(CUSTOM_TYPE_PREFIX.length)
            : "hui-".concat(type, "-card");
        }

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts":
      /*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-picker.ts ***!
  \*******************************************************************/
      /*! exports provided: HuiCardPicker */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiCardPicker",
          function() {
            return HuiCardPicker;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts"
        );
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n        .cards-container {\n          display: flex;\n          flex-wrap: wrap;\n          margin-bottom: 10px;\n        }\n        .cards-container mwc-button {\n          flex: 1 0 25%;\n          margin: 4px;\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .cards-container mwc-button {\n            flex: 1 0 33%;\n          }\n        }\n      ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n            <mwc-button @click="',
            '" .type="',
            '">\n              ',
            "\n            </mwc-button>\n          ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <h3>\n        ",
            '\n      </h3>\n      <div class="cards-container">\n        ',
            "\n      </div>\n    ",
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

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
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
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
            defineClassElement: function defineClassElement(receiver, element) {
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
            decorateClass: function decorateClass(elements, decorators) {
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
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
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
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
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
            fromElementDescriptor: function fromElementDescriptor(element) {
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
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
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
            toElementDescriptor: function toElementDescriptor(elementObject) {
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
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
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
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
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
            disallowProperty: function disallowProperty(obj, name, objectType) {
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
          var isSameElement = function isSameElement(other) {
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
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
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

        var cards = [
          {
            name: "Alarm panel",
            type: "alarm-panel",
          },
          {
            name: "Conditional",
            type: "conditional",
          },
          {
            name: "Entities",
            type: "entities",
          },
          {
            name: "Entity Button",
            type: "entity-button",
          },
          {
            name: "Entity Filter",
            type: "entity-filter",
          },
          {
            name: "Gauge",
            type: "gauge",
          },
          {
            name: "Glance",
            type: "glance",
          },
          {
            name: "History Graph",
            type: "history-graph",
          },
          {
            name: "Horizontal Stack",
            type: "horizontal-stack",
          },
          {
            name: "iFrame",
            type: "iframe",
          },
          {
            name: "Light",
            type: "light",
          },
          {
            name: "Map",
            type: "map",
          },
          {
            name: "Markdown",
            type: "markdown",
          },
          {
            name: "Media Control",
            type: "media-control",
          },
          {
            name: "Picture",
            type: "picture",
          },
          {
            name: "Picture Elements",
            type: "picture-elements",
          },
          {
            name: "Picture Entity",
            type: "picture-entity",
          },
          {
            name: "Picture Glance",
            type: "picture-glance",
          },
          {
            name: "Plant Status",
            type: "plant-status",
          },
          {
            name: "Sensor",
            type: "sensor",
          },
          {
            name: "Shopping List",
            type: "shopping-list",
          },
          {
            name: "Thermostat",
            type: "thermostat",
          },
          {
            name: "Vertical Stack",
            type: "vertical-stack",
          },
          {
            name: "Weather Forecast",
            type: "weather-forecast",
          },
        ];
        var HuiCardPicker = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-card-picker"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiCardPicker =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiCardPicker, _LitElement2);

                function HuiCardPicker() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiCardPicker);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      HuiCardPicker
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiCardPicker;
              })(_LitElement);

            return {
              F: HuiCardPicker,
              d: [
                {
                  kind: "field",
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "cardPicked",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.pick_card"
                      ),
                      cards.map(function(card) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject2(), _this2._cardPicked, card.type, card.name);
                      })
                    );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject3()
                      ),
                    ];
                  },
                },
                {
                  kind: "method",
                  key: "_cardPicked",
                  value: function _cardPicked(ev) {
                    var type = ev.currentTarget.type;
                    var tag = Object(
                      _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "getCardElementTag"
                      ]
                    )(type);
                    var elClass = customElements.get(tag);
                    var config = {
                      type: type,
                    };

                    if (elClass && elClass.getStubConfig) {
                      var cardConfig = elClass.getStubConfig(this.hass);
                      config = Object.assign({}, config, cardConfig);
                    }

                    this.cardPicked(config);
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts":
      /*!********************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-preview.ts ***!
  \********************************************************************/
      /*! exports provided: HuiCardPreview */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiCardPreview",
          function() {
            return HuiCardPreview;
          }
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js"
        );
        /* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts"
        );
        /* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts"
        );
        /* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : undefined;
          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") {
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class)) return _cache.get(Class);
              _cache.set(Class, Wrapper);
            }
            function Wrapper() {
              return _construct(
                Class,
                arguments,
                _getPrototypeOf(this).constructor
              );
            }
            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            return _setPrototypeOf(Wrapper, Class);
          };
          return _wrapNativeSuper(Class);
        }

        function isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _construct(Parent, args, Class) {
          if (isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }

        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        var HuiCardPreview =
          /*#__PURE__*/
          (function(_HTMLElement) {
            _inherits(HuiCardPreview, _HTMLElement);

            function HuiCardPreview() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HuiCardPreview);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HuiCardPreview)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this._hass = void 0;
              _this._element = void 0;
              return _this;
            }

            _createClass(HuiCardPreview, [
              {
                key: "_createCard",
                value: function _createCard(configValue) {
                  this._cleanup();

                  this._element = Object(
                    _common_create_card_element__WEBPACK_IMPORTED_MODULE_2__[
                      "createCardElement"
                    ]
                  )(configValue);

                  if (this._hass) {
                    this._element.hass = this._hass;
                  }

                  this.appendChild(this._element);
                },
              },
              {
                key: "_cleanup",
                value: function _cleanup() {
                  if (!this._element) {
                    return;
                  }

                  this.removeChild(this._element);
                  this._element = undefined;
                },
              },
              {
                key: "hass",
                set: function set(hass) {
                  if (!this._hass || this._hass.language !== hass.language) {
                    this.style.direction = Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__[
                        "computeRTL"
                      ]
                    )(hass)
                      ? "rtl"
                      : "ltr";
                  }

                  this._hass = hass;

                  if (this._element) {
                    this._element.hass = hass;
                  }
                },
              },
              {
                key: "error",
                set: function set(error) {
                  var configValue = Object(
                    _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__[
                      "createErrorCardConfig"
                    ]
                  )(
                    "".concat(error.type, ": ").concat(error.message),
                    undefined
                  );

                  this._createCard(configValue);
                },
              },
              {
                key: "config",
                set: function set(configValue) {
                  if (!configValue) {
                    this._cleanup();

                    return;
                  }

                  if (!configValue.type) {
                    this._createCard(
                      Object(
                        _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__[
                          "createErrorCardConfig"
                        ]
                      )("No card type found", configValue)
                    );

                    return;
                  }

                  if (!this._element) {
                    this._createCard(configValue);

                    return;
                  }

                  var tag = Object(
                    _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__[
                      "getCardElementTag"
                    ]
                  )(configValue.type);

                  if (tag.toUpperCase() === this._element.tagName) {
                    try {
                      this._element.setConfig(
                        Object(
                          deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                          ]
                        )(configValue)
                      );
                    } catch (err) {
                      this._createCard(
                        Object(
                          _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_4__[
                            "createErrorCardConfig"
                          ]
                        )(err.message, configValue)
                      );
                    }
                  } else {
                    this._createCard(configValue);
                  }
                },
              },
            ]);

            return HuiCardPreview;
          })(_wrapNativeSuper(HTMLElement));
        customElements.define("hui-card-preview", HuiCardPreview);

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts":
      /*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts ***!
  \************************************************************************/
      /*! exports provided: HuiDialogEditCard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiDialogEditCard",
          function() {
            return HuiDialogEditCard;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _hui_edit_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./hui-edit-card */ "./src/panels/lovelace/editor/card-editor/hui-edit-card.ts"
        );
        /* harmony import */ var _hui_dialog_pick_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./hui-dialog-pick-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-pick-card.ts"
        );
        /* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts"
        );
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n      <hui-edit-card\n        .hass="',
            '"\n        .lovelace="',
            '"\n        .cardConfig="',
            '"\n        .closeDialog="',
            '"\n        .saveCard="',
            '"\n        .newCard="',
            '"\n      >\n      </hui-edit-card>\n    ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n        <hui-dialog-pick-card\n          .hass="',
            '"\n          .cardPicked="',
            '"\n          .closeDialog="',
            '"\n        ></hui-dialog-pick-card>\n      ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _nonIterableRest()
          );
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

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
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
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
            defineClassElement: function defineClassElement(receiver, element) {
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
            decorateClass: function decorateClass(elements, decorators) {
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
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
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
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
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
            fromElementDescriptor: function fromElementDescriptor(element) {
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
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
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
            toElementDescriptor: function toElementDescriptor(elementObject) {
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
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
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
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
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
            disallowProperty: function disallowProperty(obj, name, objectType) {
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
          var isSameElement = function isSameElement(other) {
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
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
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

        var HuiDialogEditCard = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-dialog-edit-card"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiDialogEditCard =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiDialogEditCard, _LitElement2);

                function HuiDialogEditCard() {
                  var _this;

                  _classCallCheck(this, HuiDialogEditCard);

                  _this = _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(HuiDialogEditCard).call(this)
                  );

                  _initialize(_assertThisInitialized(_this));

                  _this._cardPicked = _this._cardPicked.bind(
                    _assertThisInitialized(_this)
                  );
                  _this._cancel = _this._cancel.bind(
                    _assertThisInitialized(_this)
                  );
                  _this._save = _this._save.bind(_assertThisInitialized(_this));
                  return _this;
                }

                return HuiDialogEditCard;
              })(_LitElement);

            return {
              F: HuiDialogEditCard,
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
                  key: "_params",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_cardConfig",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_newCard",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "showDialog",
                  value: (function() {
                    var _showDialog = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(params) {
                        var _params$path, view, card;

                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._params = params;
                                  (_params$path = _slicedToArray(
                                    params.path,
                                    2
                                  )),
                                    (view = _params$path[0]),
                                    (card = _params$path[1]);
                                  this._newCard =
                                    card !== undefined ? false : true;
                                  this._cardConfig =
                                    card !== undefined
                                      ? params.lovelace.config.views[view]
                                          .cards[card]
                                      : undefined;

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function showDialog(_x) {
                      return _showDialog.apply(this, arguments);
                    }

                    return showDialog;
                  })(),
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this._params) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    if (!this._cardConfig) {
                      // Card picker
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(
                        _templateObject2(),
                        this.hass,
                        this._cardPicked,
                        this._cancel
                      );
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject3(),
                      this.hass,
                      this._params.lovelace,
                      this._cardConfig,
                      this._cancel,
                      this._save,
                      this._newCard
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_cardPicked",
                  value: function _cardPicked(cardConf) {
                    this._cardConfig = cardConf;
                  },
                },
                {
                  kind: "method",
                  key: "_cancel",
                  value: function _cancel() {
                    this._params = undefined;
                    this._cardConfig = undefined;
                  },
                },
                {
                  kind: "method",
                  key: "_save",
                  value: (function() {
                    var _save2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(cardConf) {
                        var lovelace;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  lovelace = this._params.lovelace;
                                  _context2.next = 3;
                                  return lovelace.saveConfig(
                                    this._params.path.length === 1
                                      ? Object(
                                          _config_util__WEBPACK_IMPORTED_MODULE_3__[
                                            "addCard"
                                          ]
                                        )(
                                          lovelace.config,
                                          this._params.path,
                                          cardConf
                                        )
                                      : Object(
                                          _config_util__WEBPACK_IMPORTED_MODULE_3__[
                                            "replaceCard"
                                          ]
                                        )(
                                          lovelace.config,
                                          this._params.path,
                                          cardConf
                                        )
                                  );

                                case 3:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this
                        );
                      })
                    );

                    function _save(_x2) {
                      return _save2.apply(this, arguments);
                    }

                    return _save;
                  })(),
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-pick-card.ts":
      /*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-pick-card.ts ***!
  \************************************************************************/
      /*! exports provided: HuiDialogPickCard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiDialogPickCard",
          function() {
            return HuiDialogPickCard;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts"
        );
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 650px;\n          }\n        }\n\n        ha-paper-dialog {\n          max-width: 650px;\n        }\n      ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed="',
            '"\n      >\n        <h2>\n          ',
            '\n        </h2>\n        <paper-dialog-scrollable>\n          <hui-card-picker\n            .hass="',
            '"\n            .cardPicked="',
            '"\n          ></hui-card-picker>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          <mwc-button @click="',
            '">MANUAL CARD</mwc-button>\n        </div>\n      </ha-paper-dialog>\n    ',
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

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
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
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
            defineClassElement: function defineClassElement(receiver, element) {
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
            decorateClass: function decorateClass(elements, decorators) {
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
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
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
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
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
            fromElementDescriptor: function fromElementDescriptor(element) {
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
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
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
            toElementDescriptor: function toElementDescriptor(elementObject) {
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
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
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
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
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
            disallowProperty: function disallowProperty(obj, name, objectType) {
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
          var isSameElement = function isSameElement(other) {
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
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
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

        var HuiDialogPickCard = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-dialog-pick-card"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiDialogPickCard =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiDialogPickCard, _LitElement2);

                function HuiDialogPickCard() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiDialogPickCard);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      HuiDialogPickCard
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiDialogPickCard;
              })(_LitElement);

            return {
              F: HuiDialogPickCard,
              d: [
                {
                  kind: "field",
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "cardPicked",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "closeDialog",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this._openedChanged,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.header"
                      ),
                      this.hass,
                      this.cardPicked,
                      this._skipPick
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_openedChanged",
                  value: function _openedChanged(ev) {
                    if (!ev.detail.value) {
                      this.closeDialog();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_skipPick",
                  value: function _skipPick() {
                    this.cardPicked({
                      type: "",
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_3__[
                        "haStyleDialog"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject2()
                      ),
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

    /***/ "./src/panels/lovelace/editor/card-editor/hui-edit-card.ts":
      /*!*****************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-edit-card.ts ***!
  \*****************************************************************/
      /*! exports provided: HuiEditCard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiEditCard",
          function() {
            return HuiEditCard;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! js-yaml */ "./node_modules/js-yaml/index.js"
        );
        /* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          js_yaml__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js"
        );
        /* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _components_hui_yaml_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../components/hui-yaml-editor */ "./src/panels/lovelace/components/hui-yaml-editor.ts"
        );
        /* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./hui-card-preview */ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts"
        );
        /* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts"
        );
        /* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../common/util/render-status */ "./src/common/util/render-status.ts"
        );
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

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            "\n        :host {\n          --code-mirror-max-height: calc(100vh - 176px);\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 845px;\n          }\n        }\n\n        ha-paper-dialog {\n          max-width: 845px;\n        }\n\n        .center {\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .content {\n          display: flex;\n          flex-direction: column;\n          margin: 0 -10px;\n        }\n        .content hui-card-preview {\n          margin-top: 16px;\n          margin: 0 auto;\n          max-width: 390px;\n        }\n        .content .element-editor {\n          margin: 0 10px;\n        }\n\n        @media (min-width: 1200px) {\n          ha-paper-dialog {\n            max-width: none;\n            width: 1000px;\n          }\n\n          .content {\n            flex-direction: row;\n          }\n          .content > * {\n            flex-basis: 0;\n            flex-grow: 1;\n            flex-shrink: 1;\n            min-width: 0;\n          }\n          .content hui-card-preview {\n            padding-top: 0;\n            margin: 0 10px;\n            max-width: 490px;\n          }\n        }\n\n        .margin-bot {\n          margin-bottom: 24px;\n        }\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        paper-spinner {\n          display: none;\n        }\n        paper-spinner[active] {\n          display: block;\n        }\n        .hidden {\n          display: none;\n        }\n        .element-editor {\n          margin-bottom: 8px;\n        }\n        .error {\n          color: #ef5350;\n          border-bottom: 1px solid #ef5350;\n        }\n        hui-card-preview {\n          padding-top: 8px;\n          margin-bottom: 4px;\n          display: block;\n        }\n        .toggle-button {\n          margin-right: auto;\n        }\n      ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            "\n        Your config is not supported by the UI editor:<br /><b>",
            "</b\n        ><br />Falling back to YAML editor.\n      ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="paper-dialog-buttons">\n                <mwc-button\n                  class="toggle-button"\n                  ?disabled="',
            '"\n                  @click="',
            '"\n                  >',
            '</mwc-button\n                >\n                <mwc-button @click="',
            '"\n                  >',
            '</mwc-button\n                >\n                <mwc-button\n                  ?disabled="',
            '"\n                  @click="',
            '"\n                >\n                  <paper-spinner\n                    ?active="',
            '"\n                    alt="Saving"\n                  ></paper-spinner>\n                  ',
            "\n                </mwc-button>\n              </div>\n            ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="error">',
            "</div>\n              ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        modal\n        @opened-changed="',
            '"\n      >\n        <h2>\n          ',
            '\n        </h2>\n        <paper-spinner\n          ?active="',
            '"\n          alt="Loading"\n          class="center margin-bot"\n        ></paper-spinner>\n        <paper-dialog-scrollable\n          class="',
            '"\n        >\n          ',
            '\n          <div class="content">',
            "",
            "</div>\n        </paper-dialog-scrollable>\n        ",
            "\n      </ha-paper-dialog>\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n        <hui-card-preview .hass="',
            '"> </hui-card-preview>\n      ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                <hui-yaml-editor\n                  .hass="',
            '"\n                  .value="',
            '"\n                  @yaml-changed="',
            '"\n                  @yaml-save="',
            '"\n                ></hui-yaml-editor>\n              ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n        <div class="element-editor">\n          ',
            "\n        </div>\n      ",
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

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
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
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
            defineClassElement: function defineClassElement(receiver, element) {
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
            decorateClass: function decorateClass(elements, decorators) {
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
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
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
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
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
            fromElementDescriptor: function fromElementDescriptor(element) {
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
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
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
            toElementDescriptor: function toElementDescriptor(elementObject) {
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
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
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
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
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
            disallowProperty: function disallowProperty(obj, name, objectType) {
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
          var isSameElement = function isSameElement(other) {
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
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
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

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(receiver);
              }
              return desc.value;
            };
          }
          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        // This is not a duplicate import, one is for types, one is for element.
        // tslint:disable-next-line

        // This is not a duplicate import, one is for types, one is for element.
        // tslint:disable-next-line

        // This is not a duplicate import, one is for types, one is for element.
        // tslint:disable-next-line

        var HuiEditCard = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-edit-card"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiEditCard =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiEditCard, _LitElement2);

                // tslint:disable-next-line
                function HuiEditCard() {
                  var _this;

                  _classCallCheck(this, HuiEditCard);

                  _this = _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(HuiEditCard).call(this)
                  );

                  _initialize(_assertThisInitialized(_this));

                  _this._saving = false;
                  return _this;
                }

                return HuiEditCard;
              })(_LitElement);

            return {
              F: HuiEditCard,
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
                  key: "cardConfig",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "lovelace",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "closeDialog",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "saveCard",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "newCard",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_configElement",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_uiEditor",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_cardConfig",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_configState",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_loading",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_saving",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_errorMsg",
                  value: void 0,
                },
                {
                  kind: "get",
                  key: "_dialog",
                  value: function _dialog() {
                    return this.shadowRoot.querySelector("ha-paper-dialog");
                  },
                },
                {
                  kind: "get",
                  key: "_previewEl",
                  value: function _previewEl() {
                    return this.shadowRoot.querySelector("hui-card-preview");
                  },
                },
                {
                  kind: "field",
                  key: "__cardYaml",
                  value: void 0,
                },
                {
                  kind: "get",
                  key: "_cardYaml",
                  value: function _cardYaml() {
                    if (!this.__cardYaml) {
                      this.__cardYaml = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(
                        this._cardConfig
                      );
                    }

                    return this.__cardYaml;
                  },
                },
                {
                  kind: "set",
                  key: "_cardYaml",
                  value: function _cardYaml(yml) {
                    this.__cardYaml = yml;
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProperties) {
                    _get(
                      _getPrototypeOf(HuiEditCard.prototype),
                      "updated",
                      this
                    ).call(this, changedProperties);

                    if (!changedProperties.has("cardConfig")) {
                      return;
                    }

                    this._cardConfig = undefined;
                    this._cardYaml = undefined;
                    this._configState = "OK";
                    this._uiEditor = true;
                    this._errorMsg = undefined;
                    this._configElement = undefined;
                    this._loading = true;

                    this._loadConfigElement(this.cardConfig);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var content;
                    var preview;

                    if (this._configElement !== undefined) {
                      content = Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(
                        _templateObject(),
                        this._uiEditor
                          ? this._configElement
                          : Object(
                              lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                            )(
                              _templateObject2(),
                              this.hass,
                              this._cardYaml,
                              this._handleYamlChanged,
                              this._save
                            )
                      );
                      preview = Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject3(), this.hass);
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject4(),
                      this._openedChanged,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.header"
                      ),
                      this._loading,
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                          "classMap"
                        ]
                      )({
                        hidden: this._loading,
                      }),
                      this._errorMsg
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5(), this._errorMsg)
                        : "",
                      content,
                      preview,
                      !this._loading
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject6(),
                            this._configElement === null ||
                              this._configState !== "OK",
                            this._toggleEditor,
                            this.hass.localize(
                              "ui.panel.lovelace.editor.edit_card.toggle_editor"
                            ),
                            this.closeDialog,
                            this.hass.localize("ui.common.cancel"),
                            this._saving || this._configState !== "OK",
                            this._save,
                            this._saving,
                            this.hass.localize("ui.common.save")
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_loadedDialog",
                  value: (function() {
                    var _loadedDialog2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return this.updateComplete;

                                case 2:
                                  this._loading = false;

                                  this._resizeDialog();

                                  if (!this._uiEditor) {
                                    Object(
                                      _common_util_render_status__WEBPACK_IMPORTED_MODULE_13__[
                                        "afterNextRender"
                                      ]
                                    )(function() {
                                      _this2.yamlEditor.codemirror.refresh();

                                      _this2._resizeDialog();

                                      _this2.yamlEditor.codemirror.focus();
                                    });
                                  }

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function _loadedDialog() {
                      return _loadedDialog2.apply(this, arguments);
                    }

                    return _loadedDialog;
                  })(),
                },
                {
                  kind: "method",
                  key: "_resizeDialog",
                  value: (function() {
                    var _resizeDialog2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  _context2.next = 2;
                                  return this.updateComplete;

                                case 2:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__[
                                      "fireEvent"
                                    ]
                                  )(this._dialog, "iron-resize");

                                case 3:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this
                        );
                      })
                    );

                    function _resizeDialog() {
                      return _resizeDialog2.apply(this, arguments);
                    }

                    return _resizeDialog;
                  })(),
                },
                {
                  kind: "method",
                  key: "_save",
                  value: (function() {
                    var _save2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  if (this._isConfigValid()) {
                                    _context3.next = 3;
                                    break;
                                  }

                                  alert(
                                    "Your config is not valid, please fix your config before saving."
                                  );
                                  return _context3.abrupt("return");

                                case 3:
                                  if (this._isConfigChanged()) {
                                    _context3.next = 6;
                                    break;
                                  }

                                  this.closeDialog();
                                  return _context3.abrupt("return");

                                case 6:
                                  this._saving = true;
                                  _context3.prev = 7;
                                  _context3.next = 10;
                                  return this.saveCard(this._cardConfig);

                                case 10:
                                  this._cardYaml = undefined;
                                  this.closeDialog();
                                  _context3.next = 17;
                                  break;

                                case 14:
                                  _context3.prev = 14;
                                  _context3.t0 = _context3["catch"](7);
                                  alert(
                                    "Saving failed: ".concat(
                                      _context3.t0.message
                                    )
                                  );

                                case 17:
                                  _context3.prev = 17;
                                  this._saving = false;
                                  return _context3.finish(17);

                                case 20:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this,
                          [[7, 14, 17, 20]]
                        );
                      })
                    );

                    function _save() {
                      return _save2.apply(this, arguments);
                    }

                    return _save;
                  })(),
                },
                {
                  kind: "method",
                  key: "_handleYamlChanged",
                  value: function _handleYamlChanged(ev) {
                    try {
                      this._cardConfig = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(
                        ev.detail.value
                      );

                      this._updatePreview(this._cardConfig);

                      this._configState = "OK";
                    } catch (err) {
                      this._configState = "YAML_ERROR";

                      this._setPreviewError({
                        type: "YAML Error",
                        message: err,
                      });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_handleUIConfigChanged",
                  value: function _handleUIConfigChanged(value) {
                    this._cardConfig = value;

                    this._updatePreview(value);
                  },
                },
                {
                  kind: "method",
                  key: "_updatePreview",
                  value: (function() {
                    var _updatePreview2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4(config) {
                        return regeneratorRuntime.wrap(
                          function _callee4$(_context4) {
                            while (1) {
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  _context4.next = 2;
                                  return this.updateComplete;

                                case 2:
                                  if (this._previewEl) {
                                    _context4.next = 4;
                                    break;
                                  }

                                  return _context4.abrupt("return");

                                case 4:
                                  this._previewEl.config = config;

                                  if (this._loading) {
                                    this._loadedDialog();
                                  } else {
                                    this._resizeDialog();
                                  }

                                case 6:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          },
                          _callee4,
                          this
                        );
                      })
                    );

                    function _updatePreview(_x) {
                      return _updatePreview2.apply(this, arguments);
                    }

                    return _updatePreview;
                  })(),
                },
                {
                  kind: "method",
                  key: "_setPreviewError",
                  value: function _setPreviewError(error) {
                    if (!this._previewEl) {
                      return;
                    }

                    this._previewEl.error = error;

                    this._resizeDialog();
                  },
                },
                {
                  kind: "method",
                  key: "_toggleEditor",
                  value: (function() {
                    var _toggleEditor2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var success;
                        return regeneratorRuntime.wrap(
                          function _callee5$(_context5) {
                            while (1) {
                              switch ((_context5.prev = _context5.next)) {
                                case 0:
                                  this._cardYaml = undefined;

                                  if (!this._uiEditor) {
                                    _context5.next = 5;
                                    break;
                                  }

                                  this._uiEditor = false;
                                  _context5.next = 10;
                                  break;

                                case 5:
                                  if (!this._configElement) {
                                    _context5.next = 10;
                                    break;
                                  }

                                  _context5.next = 8;
                                  return this._loadConfigElement(
                                    this._cardConfig
                                  );

                                case 8:
                                  success = _context5.sent;

                                  if (!success) {
                                    this._loadedDialog();
                                  } else {
                                    this._uiEditor = true;

                                    this._configElement.setConfig(
                                      this._cardConfig
                                    );
                                  }

                                case 10:
                                  this._resizeDialog();

                                case 11:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          },
                          _callee5,
                          this
                        );
                      })
                    );

                    function _toggleEditor() {
                      return _toggleEditor2.apply(this, arguments);
                    }

                    return _toggleEditor;
                  })(),
                },
                {
                  kind: "method",
                  key: "_isConfigValid",
                  value: function _isConfigValid() {
                    if (!this._cardConfig) {
                      return false;
                    }

                    if (this._configState === "OK") {
                      return true;
                    } else {
                      return false;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_isConfigChanged",
                  value: function _isConfigChanged() {
                    if (this.newCard) {
                      return true;
                    }

                    return (
                      JSON.stringify(this._cardConfig) !==
                      JSON.stringify(this.cardConfig)
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_loadConfigElement",
                  value: (function() {
                    var _loadConfigElement2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee6(conf) {
                        var _this3 = this;

                        var tag, elClass, configElement;
                        return regeneratorRuntime.wrap(
                          function _callee6$(_context6) {
                            while (1) {
                              switch ((_context6.prev = _context6.next)) {
                                case 0:
                                  if (conf) {
                                    _context6.next = 2;
                                    break;
                                  }

                                  return _context6.abrupt("return", false);

                                case 2:
                                  this._errorMsg = undefined;
                                  this._loading = true;
                                  this._configElement = undefined;
                                  tag = Object(
                                    _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_12__[
                                      "getCardElementTag"
                                    ]
                                  )(conf.type);
                                  elClass = customElements.get(tag);
                                  this._cardConfig = conf;

                                  if (!(elClass && elClass.getConfigElement)) {
                                    _context6.next = 14;
                                    break;
                                  }

                                  _context6.next = 11;
                                  return elClass.getConfigElement();

                                case 11:
                                  configElement = _context6.sent;
                                  _context6.next = 18;
                                  break;

                                case 14:
                                  this._updatePreview(conf);

                                  this._uiEditor = false;
                                  this._configElement = null;
                                  return _context6.abrupt("return", false);

                                case 18:
                                  _context6.prev = 18;
                                  configElement.setConfig(conf);
                                  _context6.next = 29;
                                  break;

                                case 22:
                                  _context6.prev = 22;
                                  _context6.t0 = _context6["catch"](18);
                                  this._errorMsg = Object(
                                    lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                      "html"
                                    ]
                                  )(_templateObject7(), _context6.t0.message);

                                  this._updatePreview(conf);

                                  this._uiEditor = false;
                                  this._configElement = null;
                                  return _context6.abrupt("return", false);

                                case 29:
                                  configElement.hass = this.hass;
                                  configElement.addEventListener(
                                    "config-changed",
                                    function(ev) {
                                      return _this3._handleUIConfigChanged(
                                        ev.detail.config
                                      );
                                    }
                                  );
                                  this._configElement = configElement;
                                  _context6.next = 34;
                                  return this.updateComplete;

                                case 34:
                                  this._updatePreview(conf);

                                  return _context6.abrupt("return", true);

                                case 36:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          },
                          _callee6,
                          this,
                          [[18, 22]]
                        );
                      })
                    );

                    function _loadConfigElement(_x2) {
                      return _loadConfigElement2.apply(this, arguments);
                    }

                    return _loadConfigElement;
                  })(),
                },
                {
                  kind: "method",
                  key: "_openedChanged",
                  value: function _openedChanged(ev) {
                    if (!ev.detail.value) {
                      this.closeDialog();
                    }
                  },
                },
                {
                  kind: "get",
                  key: "yamlEditor",
                  value: function yamlEditor() {
                    return this.shadowRoot.querySelector("hui-yaml-editor");
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_3__[
                        "haStyleDialog"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject8()
                      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9nZXQtY2FyZC1lbGVtZW50LXRhZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktY2FyZC1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWNhcmQtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktZGlhbG9nLWVkaXQtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktZGlhbG9nLXBpY2stY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktZWRpdC1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImNvbnN0IENVU1RPTV9UWVBFX1BSRUZJWCA9IFwiY3VzdG9tOlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnRUYWcodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGUuc3RhcnRzV2l0aChDVVNUT01fVFlQRV9QUkVGSVgpXG4gICAgPyB0eXBlLnN1YnN0cihDVVNUT01fVFlQRV9QUkVGSVgubGVuZ3RoKVxuICAgIDogYGh1aS0ke3R5cGV9LWNhcmRgO1xufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IENhcmRQaWNrVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICB7IG5hbWU6IFwiQWxhcm0gcGFuZWxcIiwgdHlwZTogXCJhbGFybS1wYW5lbFwiIH0sXG4gIHsgbmFtZTogXCJDb25kaXRpb25hbFwiLCB0eXBlOiBcImNvbmRpdGlvbmFsXCIgfSxcbiAgeyBuYW1lOiBcIkVudGl0aWVzXCIsIHR5cGU6IFwiZW50aXRpZXNcIiB9LFxuICB7IG5hbWU6IFwiRW50aXR5IEJ1dHRvblwiLCB0eXBlOiBcImVudGl0eS1idXR0b25cIiB9LFxuICB7IG5hbWU6IFwiRW50aXR5IEZpbHRlclwiLCB0eXBlOiBcImVudGl0eS1maWx0ZXJcIiB9LFxuICB7IG5hbWU6IFwiR2F1Z2VcIiwgdHlwZTogXCJnYXVnZVwiIH0sXG4gIHsgbmFtZTogXCJHbGFuY2VcIiwgdHlwZTogXCJnbGFuY2VcIiB9LFxuICB7IG5hbWU6IFwiSGlzdG9yeSBHcmFwaFwiLCB0eXBlOiBcImhpc3RvcnktZ3JhcGhcIiB9LFxuICB7IG5hbWU6IFwiSG9yaXpvbnRhbCBTdGFja1wiLCB0eXBlOiBcImhvcml6b250YWwtc3RhY2tcIiB9LFxuICB7IG5hbWU6IFwiaUZyYW1lXCIsIHR5cGU6IFwiaWZyYW1lXCIgfSxcbiAgeyBuYW1lOiBcIkxpZ2h0XCIsIHR5cGU6IFwibGlnaHRcIiB9LFxuICB7IG5hbWU6IFwiTWFwXCIsIHR5cGU6IFwibWFwXCIgfSxcbiAgeyBuYW1lOiBcIk1hcmtkb3duXCIsIHR5cGU6IFwibWFya2Rvd25cIiB9LFxuICB7IG5hbWU6IFwiTWVkaWEgQ29udHJvbFwiLCB0eXBlOiBcIm1lZGlhLWNvbnRyb2xcIiB9LFxuICB7IG5hbWU6IFwiUGljdHVyZVwiLCB0eXBlOiBcInBpY3R1cmVcIiB9LFxuICB7IG5hbWU6IFwiUGljdHVyZSBFbGVtZW50c1wiLCB0eXBlOiBcInBpY3R1cmUtZWxlbWVudHNcIiB9LFxuICB7IG5hbWU6IFwiUGljdHVyZSBFbnRpdHlcIiwgdHlwZTogXCJwaWN0dXJlLWVudGl0eVwiIH0sXG4gIHsgbmFtZTogXCJQaWN0dXJlIEdsYW5jZVwiLCB0eXBlOiBcInBpY3R1cmUtZ2xhbmNlXCIgfSxcbiAgeyBuYW1lOiBcIlBsYW50IFN0YXR1c1wiLCB0eXBlOiBcInBsYW50LXN0YXR1c1wiIH0sXG4gIHsgbmFtZTogXCJTZW5zb3JcIiwgdHlwZTogXCJzZW5zb3JcIiB9LFxuICB7IG5hbWU6IFwiU2hvcHBpbmcgTGlzdFwiLCB0eXBlOiBcInNob3BwaW5nLWxpc3RcIiB9LFxuICB7IG5hbWU6IFwiVGhlcm1vc3RhdFwiLCB0eXBlOiBcInRoZXJtb3N0YXRcIiB9LFxuICB7IG5hbWU6IFwiVmVydGljYWwgU3RhY2tcIiwgdHlwZTogXCJ2ZXJ0aWNhbC1zdGFja1wiIH0sXG4gIHsgbmFtZTogXCJXZWF0aGVyIEZvcmVjYXN0XCIsIHR5cGU6IFwid2VhdGhlci1mb3JlY2FzdFwiIH0sXG5dO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLXBpY2tlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHB1YmxpYyBjYXJkUGlja2VkPzogKGNhcmRDb25mOiBMb3ZlbGFjZUNhcmRDb25maWcpID0+IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgzPlxuICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLnBpY2tfY2FyZFwiKX1cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgICR7Y2FyZHMubWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2NhcmRQaWNrZWR9XCIgLnR5cGU9XCIke2NhcmQudHlwZX1cIj5cbiAgICAgICAgICAgICAgJHtjYXJkLm5hbWV9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgYDtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRzLWNvbnRhaW5lciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBmbGV4OiAxIDAgMjUlO1xuICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5jYXJkcy1jb250YWluZXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMzMlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFBpY2tlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0eXBlID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIENhcmRQaWNrVGFyZ2V0KS50eXBlO1xuICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKHR5cGUpO1xuXG4gICAgY29uc3QgZWxDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuICAgIGxldCBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyA9IHsgdHlwZSB9O1xuXG4gICAgaWYgKGVsQ2xhc3MgJiYgZWxDbGFzcy5nZXRTdHViQ29uZmlnKSB7XG4gICAgICBjb25zdCBjYXJkQ29uZmlnID0gZWxDbGFzcy5nZXRTdHViQ29uZmlnKHRoaXMuaGFzcyk7XG4gICAgICBjb25maWcgPSB7IC4uLmNvbmZpZywgLi4uY2FyZENvbmZpZyB9O1xuICAgIH1cblxuICAgIHRoaXMuY2FyZFBpY2tlZCEoY29uZmlnKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtcGlja2VyXCI6IEh1aUNhcmRQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5cbmltcG9ydCBkZWVwQ2xvbmUgZnJvbSBcImRlZXAtY2xvbmUtc2ltcGxlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUNhcmRFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jcmVhdGUtY2FyZC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdFcnJvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q2FyZEVsZW1lbnRUYWcgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2dldC1jYXJkLWVsZW1lbnQtdGFnXCI7XG5pbXBvcnQgeyBjcmVhdGVFcnJvckNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvaHVpLWVycm9yLWNhcmRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuZXhwb3J0IGNsYXNzIEh1aUNhcmRQcmV2aWV3IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHJpdmF0ZSBfZWxlbWVudD86IExvdmVsYWNlQ2FyZDtcblxuICBzZXQgaGFzcyhoYXNzOiBIb21lQXNzaXN0YW50KSB7XG4gICAgaWYgKCF0aGlzLl9oYXNzIHx8IHRoaXMuX2hhc3MubGFuZ3VhZ2UgIT09IGhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlyZWN0aW9uID0gY29tcHV0ZVJUTChoYXNzKSA/IFwicnRsXCIgOiBcImx0clwiO1xuICAgIH1cblxuICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lmhhc3MgPSBoYXNzO1xuICAgIH1cbiAgfVxuXG4gIHNldCBlcnJvcihlcnJvcjogQ29uZmlnRXJyb3IpIHtcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhcbiAgICAgIGAke2Vycm9yLnR5cGV9OiAke2Vycm9yLm1lc3NhZ2V9YCxcbiAgICAgIHVuZGVmaW5lZFxuICAgICk7XG5cbiAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgfVxuXG4gIHNldCBjb25maWcoY29uZmlnVmFsdWU6IExvdmVsYWNlQ2FyZENvbmZpZykge1xuICAgIGlmICghY29uZmlnVmFsdWUpIHtcbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZ1ZhbHVlLnR5cGUpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoXG4gICAgICAgIGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhcIk5vIGNhcmQgdHlwZSBmb3VuZFwiLCBjb25maWdWYWx1ZSlcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YWcgPSBnZXRDYXJkRWxlbWVudFRhZyhjb25maWdWYWx1ZS50eXBlKTtcblxuICAgIGlmICh0YWcudG9VcHBlckNhc2UoKSA9PT0gdGhpcy5fZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldENvbmZpZyhkZWVwQ2xvbmUoY29uZmlnVmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLl9jcmVhdGVDYXJkKGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhlcnIubWVzc2FnZSwgY29uZmlnVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChjb25maWdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2FyZChjb25maWdWYWx1ZTogTG92ZWxhY2VDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBjcmVhdGVDYXJkRWxlbWVudChjb25maWdWYWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faGFzcykge1xuICAgICAgdGhpcy5fZWxlbWVudCEuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50ISk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLXByZXZpZXdcIjogSHVpQ2FyZFByZXZpZXc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaHVpLWNhcmQtcHJldmlld1wiLCBIdWlDYXJkUHJldmlldyk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IFwiLi9odWktZWRpdC1jYXJkXCI7XG5pbXBvcnQgXCIuL2h1aS1kaWFsb2ctcGljay1jYXJkXCI7XG5pbXBvcnQgeyBFZGl0Q2FyZERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZWRpdC1jYXJkLWRpYWxvZ1wiO1xuaW1wb3J0IHsgYWRkQ2FyZCwgcmVwbGFjZUNhcmQgfSBmcm9tIFwiLi4vY29uZmlnLXV0aWxcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtbG92ZWxhY2VcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0Q2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRWRpdENhcmREaWFsb2dQYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uZXdDYXJkPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NhcmRQaWNrZWQgPSB0aGlzLl9jYXJkUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2FuY2VsID0gdGhpcy5fY2FuY2VsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc2F2ZSA9IHRoaXMuX3NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogRWRpdENhcmREaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgY29uc3QgW3ZpZXcsIGNhcmRdID0gcGFyYW1zLnBhdGg7XG4gICAgdGhpcy5fbmV3Q2FyZCA9IGNhcmQgIT09IHVuZGVmaW5lZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzLl9jYXJkQ29uZmlnID1cbiAgICAgIGNhcmQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHBhcmFtcy5sb3ZlbGFjZS5jb25maWcudmlld3Nbdmlld10uY2FyZHMhW2NhcmRdXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2NhcmRDb25maWcpIHtcbiAgICAgIC8vIENhcmQgcGlja2VyXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGh1aS1kaWFsb2ctcGljay1jYXJkXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIC5jYXJkUGlja2VkPVwiJHt0aGlzLl9jYXJkUGlja2VkfVwiXG4gICAgICAgICAgLmNsb3NlRGlhbG9nPVwiJHt0aGlzLl9jYW5jZWx9XCJcbiAgICAgICAgPjwvaHVpLWRpYWxvZy1waWNrLWNhcmQ+XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZWRpdC1jYXJkXG4gICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgLmxvdmVsYWNlPVwiJHt0aGlzLl9wYXJhbXMubG92ZWxhY2V9XCJcbiAgICAgICAgLmNhcmRDb25maWc9XCIke3RoaXMuX2NhcmRDb25maWd9XCJcbiAgICAgICAgLmNsb3NlRGlhbG9nPVwiJHt0aGlzLl9jYW5jZWx9XCJcbiAgICAgICAgLnNhdmVDYXJkPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgIC5uZXdDYXJkPVwiJHt0aGlzLl9uZXdDYXJkfVwiXG4gICAgICA+XG4gICAgICA8L2h1aS1lZGl0LWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRQaWNrZWQoY2FyZENvbmY6IExvdmVsYWNlQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2NhcmRDb25maWcgPSBjYXJkQ29uZjtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoY2FyZENvbmY6IExvdmVsYWNlQ2FyZENvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5fcGFyYW1zIS5sb3ZlbGFjZTtcbiAgICBhd2FpdCBsb3ZlbGFjZS5zYXZlQ29uZmlnKFxuICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IGFkZENhcmQobG92ZWxhY2UuY29uZmlnLCB0aGlzLl9wYXJhbXMhLnBhdGggYXMgW251bWJlcl0sIGNhcmRDb25mKVxuICAgICAgICA6IHJlcGxhY2VDYXJkKFxuICAgICAgICAgICAgbG92ZWxhY2UuY29uZmlnLFxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoIGFzIFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgICAgICBjYXJkQ29uZlxuICAgICAgICAgIClcbiAgICApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZGlhbG9nLWVkaXQtY2FyZFwiOiBIdWlEaWFsb2dFZGl0Q2FyZDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcblxuaW1wb3J0IFwiLi9odWktY2FyZC1waWNrZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1waWNrLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dQaWNrQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBjYXJkUGlja2VkPzogKGNhcmRDb25mOiBMb3ZlbGFjZUNhcmRDb25maWcpID0+IHZvaWQ7XG4gIHB1YmxpYyBjbG9zZURpYWxvZz86ICgpID0+IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9XCIke3RoaXMuX29wZW5lZENoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuaGVhZGVyXCIpfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgPGh1aS1jYXJkLXBpY2tlclxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmNhcmRQaWNrZWQ9XCIke3RoaXMuY2FyZFBpY2tlZH1cIlxuICAgICAgICAgID48L2h1aS1jYXJkLXBpY2tlcj5cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9za2lwUGlja31cIj5NQU5VQUwgQ0FSRDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldik6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICB0aGlzLmNsb3NlRGlhbG9nISgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NraXBQaWNrKCkge1xuICAgIHRoaXMuY2FyZFBpY2tlZCEoeyB0eXBlOiBcIlwiIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIGhhLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogNjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctcGljay1jYXJkXCI6IEh1aURpYWxvZ1BpY2tDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBjc3MsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHlhbWwgZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG4vLyBUaGlzIGlzIG5vdCBhIGR1cGxpY2F0ZSBpbXBvcnQsIG9uZSBpcyBmb3IgdHlwZXMsIG9uZSBpcyBmb3IgZWxlbWVudC5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFQYXBlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWkteWFtbC1lZGl0b3JcIjtcbi8vIFRoaXMgaXMgbm90IGEgZHVwbGljYXRlIGltcG9ydCwgb25lIGlzIGZvciB0eXBlcywgb25lIGlzIGZvciBlbGVtZW50LlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIdWlZYW1sRWRpdG9yIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXlhbWwtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLXByZXZpZXdcIjtcbi8vIFRoaXMgaXMgbm90IGEgZHVwbGljYXRlIGltcG9ydCwgb25lIGlzIGZvciB0eXBlcywgb25lIGlzIGZvciBlbGVtZW50LlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIdWlDYXJkUHJldmlldyB9IGZyb20gXCIuL2h1aS1jYXJkLXByZXZpZXdcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZEVkaXRvciwgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0Vycm9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IGdldENhcmRFbGVtZW50VGFnIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9nZXQtY2FyZC1lbGVtZW50LXRhZ1wiO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlbnRpdGllcy1jaGFuZ2VkXCI6IHtcbiAgICAgIGVudGl0aWVzOiBFbnRpdHlDb25maWdbXTtcbiAgICB9O1xuICAgIFwiY29uZmlnLWNoYW5nZWRcIjoge1xuICAgICAgY29uZmlnOiBMb3ZlbGFjZUNhcmRDb25maWc7XG4gICAgfTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lZGl0LWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlFZGl0Q2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGNhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWc7XG5cbiAgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgcHVibGljIGNsb3NlRGlhbG9nPzogKCkgPT4gdm9pZDtcblxuICBwdWJsaWMgc2F2ZUNhcmQ/OiAoY2FyZENvbmY6IExvdmVsYWNlQ2FyZENvbmZpZykgPT4gUHJvbWlzZTx2b2lkPjtcblxuICBwdWJsaWMgbmV3Q2FyZD86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxlbWVudD86IExvdmVsYWNlQ2FyZEVkaXRvciB8IG51bGw7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdWlFZGl0b3I/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnU3RhdGU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9hZGluZz86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2F2aW5nOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yTXNnPzogVGVtcGxhdGVSZXN1bHQ7XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYWxvZygpOiBIYVBhcGVyRGlhbG9nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtcGFwZXItZGlhbG9nXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9wcmV2aWV3RWwoKTogSHVpQ2FyZFByZXZpZXcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJodWktY2FyZC1wcmV2aWV3XCIpITtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIF9fY2FyZFlhbWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIGdldCBfY2FyZFlhbWwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMuX19jYXJkWWFtbCkge1xuICAgICAgdGhpcy5fX2NhcmRZYW1sID0geWFtbC5zYWZlRHVtcCh0aGlzLl9jYXJkQ29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19jYXJkWWFtbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IF9jYXJkWWFtbCh5bWw6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX19jYXJkWWFtbCA9IHltbDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAoIWNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImNhcmRDb25maWdcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jYXJkQ29uZmlnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NhcmRZYW1sID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NvbmZpZ1N0YXRlID0gXCJPS1wiO1xuICAgIHRoaXMuX3VpRWRpdG9yID0gdHJ1ZTtcbiAgICB0aGlzLl9lcnJvck1zZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jb25maWdFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fbG9hZENvbmZpZ0VsZW1lbnQodGhpcy5jYXJkQ29uZmlnISk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IHByZXZpZXc7XG4gICAgaWYgKHRoaXMuX2NvbmZpZ0VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGVudCA9IGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LWVkaXRvclwiPlxuICAgICAgICAgICR7dGhpcy5fdWlFZGl0b3JcbiAgICAgICAgICAgID8gdGhpcy5fY29uZmlnRWxlbWVudFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxodWkteWFtbC1lZGl0b3JcbiAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fY2FyZFlhbWx9XCJcbiAgICAgICAgICAgICAgICAgIEB5YW1sLWNoYW5nZWQ9XCIke3RoaXMuX2hhbmRsZVlhbWxDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgICBAeWFtbC1zYXZlPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgICAgICAgPjwvaHVpLXlhbWwtZWRpdG9yPlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICAgIHByZXZpZXcgPSBodG1sYFxuICAgICAgICA8aHVpLWNhcmQtcHJldmlldyAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiPiA8L2h1aS1jYXJkLXByZXZpZXc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBtb2RhbFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9XCIke3RoaXMuX29wZW5lZENoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuaGVhZGVyXCIpfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX2xvYWRpbmd9XCJcbiAgICAgICAgICBhbHQ9XCJMb2FkaW5nXCJcbiAgICAgICAgICBjbGFzcz1cImNlbnRlciBtYXJnaW4tYm90XCJcbiAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG4gICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHsgaGlkZGVuOiB0aGlzLl9sb2FkaW5nISB9KX1cIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLl9lcnJvck1zZ1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7Y29udGVudH0ke3ByZXZpZXd9PC9kaXY+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICR7IXRoaXMuX2xvYWRpbmdcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLl9jb25maWdFbGVtZW50ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1N0YXRlICE9PSBcIk9LXCJ9XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdG9nZ2xlRWRpdG9yfVwiXG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQudG9nZ2xlX2VkaXRvclwiXG4gICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuY2xvc2VEaWFsb2d9XCJcbiAgICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLl9zYXZpbmcgfHwgdGhpcy5fY29uZmlnU3RhdGUgIT09IFwiT0tcIn1cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fc2F2aW5nfVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlNhdmluZ1wiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnNhdmVcIil9XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZGVkRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICAgIGlmICghdGhpcy5fdWlFZGl0b3IpIHtcbiAgICAgIGFmdGVyTmV4dFJlbmRlcigoKSA9PiB7XG4gICAgICAgIHRoaXMueWFtbEVkaXRvci5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICAgICAgdGhpcy5fcmVzaXplRGlhbG9nKCk7XG4gICAgICAgIHRoaXMueWFtbEVkaXRvci5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZXNpemVEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICBmaXJlRXZlbnQodGhpcy5fZGlhbG9nIGFzIEhUTUxFbGVtZW50LCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX2lzQ29uZmlnVmFsaWQoKSkge1xuICAgICAgYWxlcnQoXCJZb3VyIGNvbmZpZyBpcyBub3QgdmFsaWQsIHBsZWFzZSBmaXggeW91ciBjb25maWcgYmVmb3JlIHNhdmluZy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0NoYW5nZWQoKSkge1xuICAgICAgdGhpcy5jbG9zZURpYWxvZyEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZpbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZUNhcmQhKHRoaXMuX2NhcmRDb25maWchKTtcbiAgICAgIHRoaXMuX2NhcmRZYW1sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jbG9zZURpYWxvZyEoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBTYXZpbmcgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVZYW1sQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY2FyZENvbmZpZyA9IHlhbWwuc2FmZUxvYWQoZXYuZGV0YWlsLnZhbHVlKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVByZXZpZXcodGhpcy5fY2FyZENvbmZpZyEpO1xuICAgICAgdGhpcy5fY29uZmlnU3RhdGUgPSBcIk9LXCI7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9jb25maWdTdGF0ZSA9IFwiWUFNTF9FUlJPUlwiO1xuICAgICAgdGhpcy5fc2V0UHJldmlld0Vycm9yKHtcbiAgICAgICAgdHlwZTogXCJZQU1MIEVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IGVycixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVVJQ29uZmlnQ2hhbmdlZCh2YWx1ZTogTG92ZWxhY2VDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IHZhbHVlO1xuICAgIHRoaXMuX3VwZGF0ZVByZXZpZXcodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlUHJldmlldyhjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG5cbiAgICBpZiAoIXRoaXMuX3ByZXZpZXdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZXZpZXdFbC5jb25maWcgPSBjb25maWc7XG5cbiAgICBpZiAodGhpcy5fbG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGVkRGlhbG9nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFByZXZpZXdFcnJvcihlcnJvcjogQ29uZmlnRXJyb3IpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3ByZXZpZXdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2aWV3RWwuZXJyb3IgPSBlcnJvcjtcblxuICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdG9nZ2xlRWRpdG9yKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2NhcmRZYW1sID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl91aUVkaXRvcikge1xuICAgICAgdGhpcy5fdWlFZGl0b3IgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCB0aGlzLl9sb2FkQ29uZmlnRWxlbWVudCh0aGlzLl9jYXJkQ29uZmlnISk7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkRGlhbG9nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91aUVkaXRvciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0VsZW1lbnQuc2V0Q29uZmlnKHRoaXMuX2NhcmRDb25maWchKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVzaXplRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0NvbmZpZ1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fY2FyZENvbmZpZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlnU3RhdGUgPT09IFwiT0tcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc0NvbmZpZ0NoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmV3Q2FyZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9jYXJkQ29uZmlnKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJkQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWRDb25maWdFbGVtZW50KGNvbmY6IExvdmVsYWNlQ2FyZENvbmZpZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghY29uZikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX2Vycm9yTXNnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2NvbmZpZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB0YWcgPSBnZXRDYXJkRWxlbWVudFRhZyhjb25mLnR5cGUpO1xuXG4gICAgY29uc3QgZWxDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuICAgIGxldCBjb25maWdFbGVtZW50O1xuXG4gICAgdGhpcy5fY2FyZENvbmZpZyA9IGNvbmY7XG5cbiAgICBpZiAoZWxDbGFzcyAmJiBlbENsYXNzLmdldENvbmZpZ0VsZW1lbnQpIHtcbiAgICAgIGNvbmZpZ0VsZW1lbnQgPSBhd2FpdCBlbENsYXNzLmdldENvbmZpZ0VsZW1lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlUHJldmlldyhjb25mKTtcbiAgICAgIHRoaXMuX3VpRWRpdG9yID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50ID0gbnVsbDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uZmlnRWxlbWVudC5zZXRDb25maWcoY29uZik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IGh0bWxgXG4gICAgICAgIFlvdXIgY29uZmlnIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIFVJIGVkaXRvcjo8YnIgLz48Yj4ke2Vyci5tZXNzYWdlfTwvYlxuICAgICAgICA+PGJyIC8+RmFsbGluZyBiYWNrIHRvIFlBTUwgZWRpdG9yLlxuICAgICAgYDtcbiAgICAgIHRoaXMuX3VwZGF0ZVByZXZpZXcoY29uZik7XG4gICAgICB0aGlzLl91aUVkaXRvciA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCA9IG51bGw7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uZmlnRWxlbWVudC5oYXNzID0gdGhpcy5oYXNzO1xuICAgIGNvbmZpZ0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbmZpZy1jaGFuZ2VkXCIsIChldikgPT5cbiAgICAgIHRoaXMuX2hhbmRsZVVJQ29uZmlnQ2hhbmdlZChldi5kZXRhaWwuY29uZmlnKVxuICAgICk7XG4gICAgdGhpcy5fY29uZmlnRWxlbWVudCA9IGNvbmZpZ0VsZW1lbnQ7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl91cGRhdGVQcmV2aWV3KGNvbmYpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldik6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICB0aGlzLmNsb3NlRGlhbG9nISgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHlhbWxFZGl0b3IoKTogSHVpWWFtbEVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImh1aS15YW1sLWVkaXRvclwiKSE7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzZweCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIGhhLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogODQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDg0NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IC5lbGVtZW50LWVkaXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0OTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWFyZ2luLWJvdCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtZWRpdG9yIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2VmNTM1MDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmNTM1MDtcbiAgICAgICAgfVxuICAgICAgICBodWktY2FyZC1wcmV2aWV3IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAudG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0LWNhcmRcIjogSHVpRWRpdENhcmQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQTZDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBUUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQU1BO0FBS0E7QUFHQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBbUJBO0FBMUNBO0FBQUE7QUFBQTtBQUFBO0FBNkNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6REE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBd0RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEVBO0FBQUE7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBSUE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBQ0E7QUFEQTtBQUFBO0FBaUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBV0E7QUFDQTtBQUVBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQVdBO0FBbkRBO0FBQUE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBQUE7QUEwREE7QUFDQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEvREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQVFBO0FBRUE7QUFFQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFvQkE7QUExQkE7QUFBQTtBQUFBO0FBQUE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQUE7QUFtQ0E7QUFBQTtBQUFBO0FBQ0E7QUFwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDQTtBQXNCQTtBQTdEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBVUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFrQ0E7QUFjQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQXJEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBQUE7QUE4Q0E7QUFDQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFBQTtBQXlFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZUE7QUFHQTtBQUNBO0FBQ0E7QUFnQkE7QUFBQTtBQXVDQTtBQXZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0tBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXZLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQVBBO0FBQ0E7QUFEQTtBQVdBO0FBWEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBa0JBO0FBQ0E7QUFuQkE7QUFBQTtBQW9CQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTVLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9NQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEvTUE7QUFBQTtBQUFBO0FBQUE7QUFrTkE7QUFDQTtBQUFBO0FBQ0E7QUFwTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXZOQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBN09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoUEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4UUE7QUFBQTtBQUFBO0FBQUE7QUEyUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBL1FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaVJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFDQTtBQURBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBckJBO0FBQ0E7QUFEQTtBQUFBO0FBMEJBO0FBMUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFsQ0E7QUFDQTtBQURBO0FBc0NBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUExQ0E7QUFBQTtBQUNBO0FBREE7QUE0Q0E7QUFDQTtBQTdDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWxSQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtVQTtBQUNBO0FBQ0E7QUFDQTtBQXJVQTtBQUFBO0FBQUE7QUFBQTtBQXdVQTtBQUNBO0FBelVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0VUE7QUFvR0E7QUFoYkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
