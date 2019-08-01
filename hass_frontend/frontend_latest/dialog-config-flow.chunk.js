(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["dialog-config-flow"],
  {
    /***/ "./src/common/search/search-input.ts":
      /*!*******************************************!*\
  !*** ./src/common/search/search-input.ts ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-html */ "./node_modules/lit-html/lit-html.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
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

        let SearchInput = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])(
              "search-input"
            ),
          ],
          function(_initialize, _LitElement) {
            class SearchInput extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: SearchInput,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_1__["property"]
                    )(),
                  ],
                  key: "filter",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="search-container">
        <paper-input
          autofocus
          label="Search"
          .value=${this.filter}
          @value-changed=${this._filterInputChanged}
        >
          <iron-icon
            icon="hass:magnify"
            slot="prefix"
            class="prefix"
          ></iron-icon>
          ${this.filter &&
            lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                slot="suffix"
                class="suffix"
                @click=${this._clearSearch}
                icon="hass:close"
                alt="Clear"
                title="Clear"
              ></paper-icon-button>
            `}
        </paper-input>
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: async function _filterChanged(value) {
                    Object(
                      _dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"]
                    )(this, "value-changed", {
                      value: String(value),
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_filterInputChanged",
                  value: async function _filterInputChanged(e) {
                    this._filterChanged(e.target.value);
                  },
                },
                {
                  kind: "method",
                  key: "_clearSearch",
                  value: async function _clearSearch() {
                    this._filterChanged("");
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      paper-input {
        flex: 1 1 auto;
        margin: 0 16px;
      }
      .search-container {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
      .prefix {
        margin: 8px;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]
        );

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

        const HaIronFocusablesHelper = {
          /**
           * Returns a sorted array of tabbable nodes, including the root node.
           * It searches the tabbable nodes in the light and shadow dom of the chidren,
           * sorting the result by tabindex.
           * @param {!Node} node
           * @return {!Array<!HTMLElement>}
           */
          getTabbableNodes: function(node) {
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
          _collectTabbableNodes: function(node, result) {
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

        // tslint:disable-next-line

        const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

        const haTabFixBehaviorImpl = {
          get _focusableNodes() {
            return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__[
              "HaIronFocusablesHelper"
            ].getTabbableNodes(this);
          },
        }; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
        // export class HaPaperDialog extends paperDialogClass {}
        // @ts-ignore

        class HaPaperDialog extends Object(
          _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__[
            "mixinBehaviors"
          ]
        )([haTabFixBehaviorImpl], paperDialogClass) {}
        customElements.define("ha-paper-dialog", HaPaperDialog);

        /***/
      },

    /***/ "./src/components/ha-icon-next.ts":
      /*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
      /*! exports provided: HaIconNext */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIconNext",
          function() {
            return HaIconNext;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ha-icon */ "./src/components/ha-icon.ts"
        );
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__[
          "HaIcon"
        ] {
          connectedCallback() {
            this.icon =
              window.getComputedStyle(this).direction === "ltr"
                ? "hass:chevron-right"
                : "hass:chevron-left"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

            super.connectedCallback();
          }
        }
        customElements.define("ha-icon-next", HaIconNext);

        /***/
      },

    /***/ "./src/data/area_registry.ts":
      /*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
      /*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createAreaRegistryEntry",
          function() {
            return createAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateAreaRegistryEntry",
          function() {
            return updateAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteAreaRegistryEntry",
          function() {
            return deleteAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeAreaRegistry",
          function() {
            return subscribeAreaRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        const createAreaRegistryEntry = (hass, values) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/create",
              },
              values
            )
          );
        const updateAreaRegistryEntry = (hass, areaId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/update",
                area_id: areaId,
              },
              updates
            )
          );
        const deleteAreaRegistryEntry = (hass, areaId) =>
          hass.callWS({
            type: "config/area_registry/delete",
            area_id: areaId,
          });

        const fetchAreaRegistry = (conn) =>
          conn
            .sendMessagePromise({
              type: "config/area_registry/list",
            })
            .then((areas) =>
              areas.sort((ent1, ent2) =>
                Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"]
                )(ent1.name, ent2.name)
              )
            );

        const subscribeAreaRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              () =>
                fetchAreaRegistry(conn).then((areas) =>
                  store.setState(areas, true)
                ),
              500,
              true
            ),
            "area_registry_updated"
          );

        const subscribeAreaRegistry = (conn, onChange) =>
          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_areaRegistry",
            fetchAreaRegistry,
            subscribeAreaRegistryUpdates,
            conn,
            onChange
          );

        /***/
      },

    /***/ "./src/data/device_registry.ts":
      /*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
      /*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateDeviceRegistryEntry",
          function() {
            return updateDeviceRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeDeviceRegistry",
          function() {
            return subscribeDeviceRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        const updateDeviceRegistryEntry = (hass, deviceId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/device_registry/update",
                device_id: deviceId,
              },
              updates
            )
          );

        const fetchDeviceRegistry = (conn) =>
          conn.sendMessagePromise({
            type: "config/device_registry/list",
          });

        const subscribeDeviceRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
            )(
              () =>
                fetchDeviceRegistry(conn).then((devices) =>
                  store.setState(devices, true)
                ),
              500,
              true
            ),
            "device_registry_updated"
          );

        const subscribeDeviceRegistry = (conn, onChange) =>
          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_dr",
            fetchDeviceRegistry,
            subscribeDeviceRegistryUpdates,
            conn,
            onChange
          );

        /***/
      },

    /***/ "./src/dialogs/config-flow/dialog-config-flow.ts":
      /*!*******************************************************!*\
  !*** ./src/dialogs/config-flow/dialog-config-flow.ts ***!
  \*******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/ha-form */ "./src/components/ha-form.js"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../components/ha-markdown */ "./src/components/ha-markdown.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../data/config_entries */ "./src/data/config_entries.ts"
        );
        /* harmony import */ var _step_flow_pick_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./step-flow-pick-handler */ "./src/dialogs/config-flow/step-flow-pick-handler.ts"
        );
        /* harmony import */ var _step_flow_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./step-flow-loading */ "./src/dialogs/config-flow/step-flow-loading.ts"
        );
        /* harmony import */ var _step_flow_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./step-flow-form */ "./src/dialogs/config-flow/step-flow-form.ts"
        );
        /* harmony import */ var _step_flow_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./step-flow-external */ "./src/dialogs/config-flow/step-flow-external.ts"
        );
        /* harmony import */ var _step_flow_abort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./step-flow-abort */ "./src/dialogs/config-flow/step-flow-abort.ts"
        );
        /* harmony import */ var _step_flow_create_entry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./step-flow-create-entry */ "./src/dialogs/config-flow/step-flow-create-entry.ts"
        );
        /* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../data/device_registry */ "./src/data/device_registry.ts"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../data/area_registry */ "./src/data/area_registry.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../common/string/compare */ "./src/common/string/compare.ts"
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

        // Not duplicate, is for typing
        // tslint:disable-next-line

        let instance = 0;

        let ConfigFlowDialog = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "dialog-config-flow"
            ),
          ],
          function(_initialize, _LitElement) {
            class ConfigFlowDialog extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ConfigFlowDialog,
              d: [
                {
                  kind: "field",
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
                  key: "_loading",

                  value() {
                    return true;
                  },
                },
                {
                  kind: "field",
                  key: "_instance",

                  value() {
                    return instance;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_step",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_devices",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_areas",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_handlers",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubAreas",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubDevices",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "showDialog",
                  value: async function showDialog(params) {
                    this._params = params;
                    this._instance = instance++; // Create a new config flow. Show picker

                    if (!params.continueFlowId) {
                      this._step = null; // We only load the handlers once

                      if (this._handlers === undefined) {
                        this._loading = true;
                        this.updateComplete.then(() =>
                          this._scheduleCenterDialog()
                        );

                        try {
                          this._handlers = (await Object(
                            _data_config_entries__WEBPACK_IMPORTED_MODULE_10__[
                              "getConfigFlowHandlers"
                            ]
                          )(this.hass)).sort((handlerA, handlerB) =>
                            Object(
                              _common_string_compare__WEBPACK_IMPORTED_MODULE_19__[
                                "caseInsensitiveCompare"
                              ]
                            )(
                              this.hass.localize(
                                `component.${handlerA}.config.title`
                              ),
                              this.hass.localize(
                                `component.${handlerB}.config.title`
                              )
                            )
                          );
                        } finally {
                          this._loading = false;
                        }
                      }

                      await this.updateComplete;

                      this._scheduleCenterDialog();

                      return;
                    }

                    this._loading = true;
                    const curInstance = this._instance;
                    const step = await Object(
                      _data_config_entries__WEBPACK_IMPORTED_MODULE_10__[
                        "fetchConfigFlow"
                      ]
                    )(this.hass, params.continueFlowId); // Happens if second showDialog called

                    if (curInstance !== this._instance) {
                      return;
                    }

                    this._processStep(step);

                    this._loading = false; // When the flow changes, center the dialog.
                    // Don't do it on each step or else the dialog keeps bouncing.

                    this._scheduleCenterDialog();
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this._params) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed=${this._openedChanged}
      >
        ${
          this._loading || (this._step === null && this._handlers === undefined)
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-loading></step-flow-loading>
            `
            : this._step === undefined // When we are going to next step, we render 1 round of empty
            ? // to reset the element.
              ""
            : this._step === null // Show handler picker
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-pick-handler
                .hass=${this.hass}
                .handlers=${this._handlers}
              ></step-flow-pick-handler>
            `
            : this._step.type === "form"
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-form
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-form>
            `
            : this._step.type === "external"
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-external
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-external>
            `
            : this._step.type === "abort"
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-abort
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-abort>
            `
            : this._devices === undefined || this._areas === undefined // When it's a create entry result, we will fetch device & area registry
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-loading></step-flow-loading>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-create-entry
                .step=${this._step}
                .hass=${this.hass}
                .devices=${this._devices}
                .areas=${this._areas}
              ></step-flow-create-entry>
            `
        }
      </ha-paper-dialog>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(ConfigFlowDialog.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("flow-update", (ev) => {
                      const { step, stepPromise } = ev.detail;

                      this._processStep(step || stepPromise);
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    if (
                      changedProps.has("_step") &&
                      this._step &&
                      this._step.type === "create_entry"
                    ) {
                      this._fetchDevices(this._step.result);

                      this._fetchAreas();
                    }

                    if (changedProps.has("_devices") && this._dialog) {
                      this._scheduleCenterDialog();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_scheduleCenterDialog",
                  value: function _scheduleCenterDialog() {
                    setTimeout(() => this._dialog.center(), 0);
                  },
                },
                {
                  kind: "get",
                  key: "_dialog",
                  value: function _dialog() {
                    return this.shadowRoot.querySelector("ha-paper-dialog");
                  },
                },
                {
                  kind: "method",
                  key: "_fetchDevices",
                  value: async function _fetchDevices(configEntryId) {
                    this._unsubDevices = Object(
                      _data_device_registry__WEBPACK_IMPORTED_MODULE_17__[
                        "subscribeDeviceRegistry"
                      ]
                    )(this.hass.connection, (devices) => {
                      this._devices = devices.filter((device) =>
                        device.config_entries.includes(configEntryId)
                      );
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_fetchAreas",
                  value: async function _fetchAreas() {
                    this._unsubAreas = Object(
                      _data_area_registry__WEBPACK_IMPORTED_MODULE_18__[
                        "subscribeAreaRegistry"
                      ]
                    )(this.hass.connection, (areas) => {
                      this._areas = areas;
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_processStep",
                  value: async function _processStep(step) {
                    if (step instanceof Promise) {
                      this._loading = true;

                      try {
                        this._step = await step;
                      } finally {
                        this._loading = false;
                      }

                      return;
                    }

                    if (step === undefined) {
                      this._flowDone();

                      return;
                    }

                    this._step = undefined;
                    await this.updateComplete;
                    this._step = step;
                  },
                },
                {
                  kind: "method",
                  key: "_flowDone",
                  value: function _flowDone() {
                    if (!this._params) {
                      return;
                    }

                    const flowFinished = Boolean(
                      this._step &&
                        ["create_entry", "abort"].includes(this._step.type)
                    ); // If we created this flow, delete it now.

                    if (
                      this._step &&
                      !flowFinished &&
                      !this._params.continueFlowId
                    ) {
                      Object(
                        _data_config_entries__WEBPACK_IMPORTED_MODULE_10__[
                          "deleteConfigFlow"
                        ]
                      )(this.hass, this._step.flow_id);
                    }

                    this._params.dialogClosedCallback({
                      flowFinished,
                    });

                    this._step = undefined;
                    this._params = undefined;
                    this._devices = undefined;

                    if (this._unsubAreas) {
                      this._unsubAreas();

                      this._unsubAreas = undefined;
                    }

                    if (this._unsubDevices) {
                      this._unsubDevices();

                      this._unsubDevices = undefined;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_openedChanged",
                  value: function _openedChanged(ev) {
                    // Closed dialog by clicking on the overlay
                    if (!ev.detail.value) {
                      if (this._step) {
                        this._flowDone();
                      } else if (this._step === null) {
                        // Flow aborted during picking flow
                        this._step = undefined;
                        this._params = undefined;
                      }
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_9__[
                        "haStyleDialog"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-paper-dialog {
          max-width: 500px;
        }
        ha-paper-dialog > * {
          margin: 0;
          display: block;
          padding: 0;
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

    /***/ "./src/dialogs/config-flow/step-flow-abort.ts":
      /*!****************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-abort.ts ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/translations/localize */ "./src/common/translations/localize.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./styles */ "./src/dialogs/config-flow/styles.ts"
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

        let StepFlowAbort = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-abort"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowAbort extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowAbort,
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
                  key: "step",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const localize = this.hass.localize;
                    const step = this.step;
                    const description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      `component.${step.handler}.config.abort.${step.reason}`,
                      step.description_placeholders
                    );
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>Aborted</h2>
      <div class="content">
        ${
          description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown .content=${description} allow-svg></ha-markdown>
            `
            : ""
        }
      </div>
      <div class="buttons">
        <mwc-button @click="${this._flowDone}">Close</mwc-button>
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_flowDone",
                  value: function _flowDone() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__[
                        "fireEvent"
                      ]
                    )(this, "flow-update", {
                      step: undefined,
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return _styles__WEBPACK_IMPORTED_MODULE_4__[
                      "configFlowContentStyles"
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

    /***/ "./src/dialogs/config-flow/step-flow-create-entry.ts":
      /*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-create-entry.ts ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/translations/localize */ "./src/common/translations/localize.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./styles */ "./src/dialogs/config-flow/styles.ts"
        );
        /* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../data/device_registry */ "./src/data/device_registry.ts"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../data/area_registry */ "./src/data/area_registry.ts"
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

        let StepFlowCreateEntry = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-create-entry"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowCreateEntry extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowCreateEntry,
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
                  key: "step",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "devices",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "areas",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const localize = this.hass.localize;
                    const step = this.step;
                    const description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_5__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      `component.${
                        step.handler
                      }.config.create_entry.${step.description || "default"}`,
                      step.description_placeholders
                    );
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>Success!</h2>
      <div class="content">
        ${
          description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown .content=${description} allow-svg></ha-markdown>
            `
            : ""
        }
        <p>Created config for ${step.title}.</p>
        ${
          this.devices.length === 0
            ? ""
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <p>We found the following devices:</p>
              <div class="devices">
                ${this.devices.map(
                  (device) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div class="device">
                        <div>
                          <b>${device.name}</b><br />
                          ${device.model} (${device.manufacturer})
                        </div>
                        <paper-dropdown-menu-light
                          label="Area"
                          .device=${device.id}
                          @selected-item-changed=${this._handleAreaChanged}
                        >
                          <paper-listbox slot="dropdown-content" selected="0">
                            <paper-item>
                              ${localize(
                                "ui.panel.config.integrations.config_entry.no_area"
                              )}
                            </paper-item>
                            ${this.areas.map(
                              (
                                area
                              ) => lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                "html"
                              ]`
                                <paper-item .area=${area.area_id}>
                                  ${area.name}
                                </paper-item>
                              `
                            )}
                          </paper-listbox>
                        </paper-dropdown-menu-light>
                      </div>
                    `
                )}
              </div>
            `
        }
      </div>
      <div class="buttons">
        ${
          this.devices.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <mwc-button @click="${this._addArea}">Add Area</mwc-button>
            `
            : ""
        }

        <mwc-button @click="${this._flowDone}">Finish</mwc-button>
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_flowDone",
                  value: function _flowDone() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                        "fireEvent"
                      ]
                    )(this, "flow-update", {
                      step: undefined,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_addArea",
                  value: async function _addArea() {
                    const name = prompt("Name of the new area?");

                    if (!name) {
                      return;
                    }

                    try {
                      const area = await Object(
                        _data_area_registry__WEBPACK_IMPORTED_MODULE_9__[
                          "createAreaRegistryEntry"
                        ]
                      )(this.hass, {
                        name,
                      });
                      this.areas = [...this.areas, area];
                    } catch (err) {
                      alert("Failed to create area.");
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_handleAreaChanged",
                  value: async function _handleAreaChanged(ev) {
                    const dropdown = ev.currentTarget;
                    const device = dropdown.device; // Item first becomes null, then new item.

                    if (!dropdown.selectedItem) {
                      return;
                    }

                    const area = dropdown.selectedItem.area;

                    try {
                      await Object(
                        _data_device_registry__WEBPACK_IMPORTED_MODULE_8__[
                          "updateDeviceRegistryEntry"
                        ]
                      )(this.hass, device, {
                        area_id: area,
                      });
                    } catch (err) {
                      alert(`Error saving area: ${err.message}`);
                      dropdown.value = null;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _styles__WEBPACK_IMPORTED_MODULE_7__[
                        "configFlowContentStyles"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .devices {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
          max-height: 600px;
          overflow-y: auto;
        }
        .device {
          border: 1px solid var(--divider-color);
          padding: 5px;
          border-radius: 4px;
          margin: 4px;
          display: inline-block;
          width: 200px;
        }
        .buttons > *:last-child {
          margin-left: auto;
        }
        paper-dropdown-menu-light {
          cursor: pointer;
        }
        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          .device {
            width: 100%;
          }
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

    /***/ "./src/dialogs/config-flow/step-flow-external.ts":
      /*!*******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-external.ts ***!
  \*******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../data/config_entries */ "./src/data/config_entries.ts"
        );
        /* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/translations/localize */ "./src/common/translations/localize.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./styles */ "./src/dialogs/config-flow/styles.ts"
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

        let StepFlowExternal = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-external"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowExternal extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowExternal,
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
                  key: "step",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const localize = this.hass.localize;
                    const step = this.step;
                    const description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      `component.${step.handler}.config.${
                        step.step_id
                      }.description`,
                      step.description_placeholders
                    );
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>
        ${localize(
          `component.${step.handler}.config.step.${step.step_id}.title`
        )}
      </h2>
      <div class="content">
        <p>
          ${localize(
            "ui.panel.config.integrations.config_flow.external_step.description"
          )}
        </p>
        ${
          description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown .content=${description} allow-svg></ha-markdown>
            `
            : ""
        }
        <div class="open-button">
          <a href=${this.step.url} target="_blank">
            <mwc-button raised>
              ${localize(
                "ui.panel.config.integrations.config_flow.external_step.open_site"
              )}
            </mwc-button>
          </a>
        </div>
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(StepFlowExternal.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.hass.connection.subscribeEvents(async (ev) => {
                      if (ev.data.flow_id !== this.step.flow_id) {
                        return;
                      }

                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                          "fireEvent"
                        ]
                      )(this, "flow-update", {
                        stepPromise: Object(
                          _data_config_entries__WEBPACK_IMPORTED_MODULE_2__[
                            "fetchConfigFlow"
                          ]
                        )(this.hass, this.step.flow_id),
                      });
                    }, "data_entry_flow_progressed");
                    window.open(this.step.url);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _styles__WEBPACK_IMPORTED_MODULE_5__[
                        "configFlowContentStyles"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .open-button {
          text-align: center;
          padding: 24px 0;
        }
        .open-button a {
          text-decoration: none;
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

    /***/ "./src/dialogs/config-flow/step-flow-form.ts":
      /*!***************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-form.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/ha-form */ "./src/components/ha-form.js"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/ha-markdown */ "./src/components/ha-markdown.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../data/config_entries */ "./src/data/config_entries.ts"
        );
        /* harmony import */ var _polymer_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../polymer-types */ "./src/polymer-types.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../common/translations/localize */ "./src/common/translations/localize.ts"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./styles */ "./src/dialogs/config-flow/styles.ts"
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

        let StepFlowForm = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-form"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowForm extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowForm,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "step",
                  value: void 0,
                },
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
                  key: "_loading",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_stepData",
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
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const localize = this.hass.localize;
                    const step = this.step;
                    const allRequiredInfoFilledIn =
                      this._stepData === undefined // If no data filled in, just check that any field is required
                        ? step.data_schema.find((field) => !field.optional) ===
                          undefined // If data is filled in, make sure all required fields are
                        : this._stepData &&
                          step.data_schema.every(
                            (field) =>
                              field.optional ||
                              !["", undefined].includes(
                                this._stepData[field.name]
                              )
                          );
                    const description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_10__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      `component.${step.handler}.config.step.${
                        step.step_id
                      }.description`,
                      step.description_placeholders
                    );
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>
        ${localize(
          `component.${step.handler}.config.step.${step.step_id}.title`
        )}
      </h2>
      <div class="content">
        ${
          this._errorMsg
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">${this._errorMsg}</div>
            `
            : ""
        }
        ${
          description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-markdown .content=${description} allow-svg></ha-markdown>
            `
            : ""
        }
        <ha-form
          .data=${this._stepDataProcessed}
          @data-changed=${this._stepDataChanged}
          .schema=${step.data_schema}
          .error=${step.errors}
          .computeLabel=${this._labelCallback}
          .computeError=${this._errorCallback}
        ></ha-form>
      </div>
      <div class="buttons">
        ${
          this._loading
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="submit-spinner">
                <paper-spinner active></paper-spinner>
              </div>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div>
                <mwc-button
                  @click=${this._submitStep}
                  .disabled=${!allRequiredInfoFilledIn}
                >
                  Submit
                </mwc-button>

                ${
                  !allRequiredInfoFilledIn
                    ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <paper-tooltip position="left">
                        Not all required fields are filled in.
                      </paper-tooltip>
                    `
                    : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``
                }
              </div>
            `
        }
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(StepFlowForm.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("keypress", (ev) => {
                      if (ev.keyCode === 13) {
                        this._submitStep();
                      }
                    });
                  },
                },
                {
                  kind: "get",
                  key: "_stepDataProcessed",
                  value: function _stepDataProcessed() {
                    if (this._stepData !== undefined) {
                      return this._stepData;
                    }

                    const data = {};
                    this.step.data_schema.forEach((field) => {
                      if ("default" in field) {
                        data[field.name] = field.default;
                      }
                    });
                    return data;
                  },
                },
                {
                  kind: "method",
                  key: "_submitStep",
                  value: async function _submitStep() {
                    this._loading = true;
                    this._errorMsg = undefined;
                    const flowId = this.step.flow_id;
                    const stepData = this._stepData || {};
                    const toSendData = {};
                    Object.keys(stepData).forEach((key) => {
                      const value = stepData[key];
                      const isEmpty = [undefined, ""].includes(value);

                      if (!isEmpty) {
                        toSendData[key] = value;
                      }
                    });

                    try {
                      const step = await Object(
                        _data_config_entries__WEBPACK_IMPORTED_MODULE_7__[
                          "handleConfigFlowStep"
                        ]
                      )(this.hass, this.step.flow_id, toSendData); // make sure we're still showing the same step as when we
                      // fired off request.

                      if (!this.step || flowId !== this.step.flow_id) {
                        return;
                      }

                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__[
                          "fireEvent"
                        ]
                      )(this, "flow-update", {
                        step,
                      });
                    } catch (err) {
                      this._errorMsg =
                        (err && err.body && err.body.message) ||
                        "Unknown error occurred";
                    } finally {
                      this._loading = false;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_stepDataChanged",
                  value: function _stepDataChanged(ev) {
                    this._stepData = Object(
                      _polymer_types__WEBPACK_IMPORTED_MODULE_8__[
                        "applyPolymerEvent"
                      ]
                    )(ev, this._stepData);
                  },
                },
                {
                  kind: "field",
                  key: "_labelCallback",

                  value() {
                    return (schema) => {
                      const step = this.step;
                      return this.hass.localize(
                        `component.${step.handler}.config.step.${
                          step.step_id
                        }.data.${schema.name}`
                      );
                    };
                  },
                },
                {
                  kind: "field",
                  key: "_errorCallback",

                  value() {
                    return (error) =>
                      this.hass.localize(
                        `component.${this.step.handler}.config.error.${error}`
                      );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _styles__WEBPACK_IMPORTED_MODULE_11__[
                        "configFlowContentStyles"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .error {
          color: red;
        }

        .submit-spinner {
          margin-right: 16px;
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

    /***/ "./src/dialogs/config-flow/step-flow-loading.ts":
      /*!******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-loading.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js"
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

        let StepFlowLoading = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-loading"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowLoading extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowLoading,
              d: [
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="init-spinner">
        <paper-spinner-lite active></paper-spinner-lite>
      </div>
    `;
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .init-spinner {
        padding: 50px 100px;
        text-align: center;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/dialogs/config-flow/step-flow-pick-handler.ts":
      /*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-pick-handler.ts ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../data/config_entries */ "./src/data/config_entries.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"
        );
        /* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js"
        );
        /* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          fuse_js__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../components/ha-icon-next */ "./src/components/ha-icon-next.ts"
        );
        /* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../common/search/search-input */ "./src/common/search/search-input.ts"
        );
        /* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js"
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

        let StepFlowPickHandler = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-pick-handler"
            ),
          ],
          function(_initialize, _LitElement) {
            class StepFlowPickHandler extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StepFlowPickHandler,
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
                  key: "handlers",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "filter",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_width",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_getHandlers",

                  value() {
                    return Object(
                      memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"]
                    )((h, filter) => {
                      const handlers = h.map((handler) => {
                        return {
                          name: this.hass.localize(
                            `component.${handler}.config.title`
                          ),
                          slug: handler,
                        };
                      });

                      if (filter) {
                        const options = {
                          keys: ["name", "slug"],
                          caseSensitive: false,
                          minMatchCharLength: 2,
                          threshold: 0.2,
                        };
                        const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_7__(
                          handlers,
                          options
                        );
                        return fuse.search(filter);
                      }

                      return handlers.sort((a, b) =>
                        a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
                      );
                    });
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const handlers = this._getHandlers(
                      this.handlers,
                      this.filter
                    );

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>${this.hass.localize("ui.panel.config.integrations.new")}</h2>
      <search-input
        .filter=${this.filter}
        @value-changed=${this._filterChanged}
      ></search-input>
      <div style=${Object(
        lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__["styleMap"]
      )({
        width: `${this._width}px`,
      })}>
        ${handlers.map(
          (handler) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item @click=${this._handlerPicked} .handler=${handler}>
                <paper-item-body>
                  ${handler.name}
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            `
        )}
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: async function _filterChanged(e) {
                    this.filter = e.detail.value; // Store the width so that when we search, box doesn't jump

                    if (this._width === undefined) {
                      this._width = this.shadowRoot.querySelector(
                        "div"
                      ).clientWidth;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_handlerPicked",
                  value: async function _handlerPicked(ev) {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                        "fireEvent"
                      ]
                    )(this, "flow-update", {
                      stepPromise: Object(
                        _data_config_entries__WEBPACK_IMPORTED_MODULE_4__[
                          "createConfigFlow"
                        ]
                      )(this.hass, ev.currentTarget.handler.slug),
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      h2 {
        margin-bottom: 2px;
        padding-left: 16px;
      }
      div {
        overflow: auto;
        max-height: 600px;
      }
      paper-item {
        cursor: pointer;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/dialogs/config-flow/styles.ts":
      /*!*******************************************!*\
  !*** ./src/dialogs/config-flow/styles.ts ***!
  \*******************************************/
      /*! exports provided: configFlowContentStyles */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "configFlowContentStyles",
          function() {
            return configFlowContentStyles;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );

        const configFlowContentStyles = lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "css"
        ]`
  h2 {
    margin-top: 24px;
    padding: 0 24px;
  }

  .content {
    margin-top: 20px;
    padding: 0 24px;
  }

  .buttons {
    position: relative;
    padding: 8px 8px 8px 24px;
    margin: 0;
    color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
  }

  ha-markdown {
    overflow-wrap: break-word;
  }
  ha-markdown a {
    color: var(--primary-color);
  }
  ha-markdown img:first-child:last-child {
    display: block;
    margin: 0 auto;
  }
`;

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

    /***/ "./src/polymer-types.ts":
      /*!******************************!*\
  !*** ./src/polymer-types.ts ***!
  \******************************/
      /*! exports provided: applyPolymerEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "applyPolymerEvent",
          function() {
            return applyPolymerEvent;
          }
        );
        const applyPolymerEvent = (ev, curValue) => {
          const { path, value } = ev.detail;

          if (!path) {
            return value;
          }

          const propName = path.split(".")[1];
          return Object.assign({}, curValue, {
            [propName]: value,
          });
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L2RpYWxvZy1jb25maWctZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctYWJvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWNyZWF0ZS1lbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctZXh0ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWxvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LXBpY2staGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHltZXItdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQsIGh0bWwgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzZWFyY2gtaW5wdXRcIilcbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZmlsdGVyPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLmZpbHRlcn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2ZpbHRlcklucHV0Q2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpcm9uLWljb25cbiAgICAgICAgICAgIGljb249XCJoYXNzOm1hZ25pZnlcIlxuICAgICAgICAgICAgc2xvdD1cInByZWZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cInByZWZpeFwiXG4gICAgICAgICAgPjwvaXJvbi1pY29uPlxuICAgICAgICAgICR7dGhpcy5maWx0ZXIgJiZcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclNlYXJjaH1cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQ2xlYXJcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xlYXJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVySW5wdXRDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NsZWFyU2VhcmNoKCkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoXCJcIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnByZWZpeCB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInNlYXJjaC1pbnB1dFwiOiBTZWFyY2hJbnB1dDtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG5cbiAgICAvLyBjYWxsaW5nIHN1cGVyIGFmdGVyIHNldHRpbmcgaWNvbiB0byBoYXZlIGl0IGNvbnNpc3RlbnRseSBzaG93IHRoZSBpY29uIChvdGhlcndpc2Ugbm90IGFsd2F5cyBzaG93bilcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkZXZpY2VJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuLy8gTm90IGR1cGxpY2F0ZSwgaXMgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQge1xuICBmZXRjaENvbmZpZ0Zsb3csXG4gIENvbmZpZ0Zsb3dTdGVwLFxuICBkZWxldGVDb25maWdGbG93LFxuICBnZXRDb25maWdGbG93SGFuZGxlcnMsXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IEhhQ29uZmlnRmxvd1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5cbmltcG9ydCBcIi4vc3RlcC1mbG93LXBpY2staGFuZGxlclwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctbG9hZGluZ1wiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZm9ybVwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZXh0ZXJuYWxcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWFib3J0XCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmxldCBpbnN0YW5jZSA9IDA7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZmxvdy11cGRhdGVcIjoge1xuICAgICAgc3RlcD86IENvbmZpZ0Zsb3dTdGVwO1xuICAgICAgc3RlcFByb21pc2U/OiBQcm9taXNlPENvbmZpZ0Zsb3dTdGVwPjtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWNvbmZpZy1mbG93XCIpXG5jbGFzcyBDb25maWdGbG93RGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogSGFDb25maWdGbG93UGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2FkaW5nID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3RlcDpcbiAgICB8IENvbmZpZ0Zsb3dTdGVwXG4gICAgfCB1bmRlZmluZWRcbiAgICAvLyBOdWxsIG1lYW5zIHdlIG5lZWQgdG8gcGljayBhIGNvbmZpZyBmbG93XG4gICAgfCBudWxsO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VzPzogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhbmRsZXJzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3Vuc3ViQXJlYXM/OiBVbnN1YnNjcmliZUZ1bmM7XG4gIHByaXZhdGUgX3Vuc3ViRGV2aWNlcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IEhhQ29uZmlnRmxvd1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlKys7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgY29uZmlnIGZsb3cuIFNob3cgcGlja2VyXG4gICAgaWYgKCFwYXJhbXMuY29udGludWVGbG93SWQpIHtcbiAgICAgIHRoaXMuX3N0ZXAgPSBudWxsO1xuXG4gICAgICAvLyBXZSBvbmx5IGxvYWQgdGhlIGhhbmRsZXJzIG9uY2VcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlcnMgPSAoYXdhaXQgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzKHRoaXMuaGFzcykpLnNvcnQoXG4gICAgICAgICAgICAoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckF9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcbiAgICBjb25zdCBzdGVwID0gYXdhaXQgZmV0Y2hDb25maWdGbG93KHRoaXMuaGFzcywgcGFyYW1zLmNvbnRpbnVlRmxvd0lkKTtcblxuICAgIC8vIEhhcHBlbnMgaWYgc2Vjb25kIHNob3dEaWFsb2cgY2FsbGVkXG4gICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyBXaGVuIHRoZSBmbG93IGNoYW5nZXMsIGNlbnRlciB0aGUgZGlhbG9nLlxuICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9sb2FkaW5nIHx8ICh0aGlzLl9zdGVwID09PSBudWxsICYmIHRoaXMuX2hhbmRsZXJzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWxvYWRpbmc+PC9zdGVwLWZsb3ctbG9hZGluZz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IHRoaXMuX3N0ZXAgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gLy8gV2hlbiB3ZSBhcmUgZ29pbmcgdG8gbmV4dCBzdGVwLCB3ZSByZW5kZXIgMSByb3VuZCBvZiBlbXB0eVxuICAgICAgICAgICAgLy8gdG8gcmVzZXQgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgOiB0aGlzLl9zdGVwID09PSBudWxsXG4gICAgICAgICAgPyAvLyBTaG93IGhhbmRsZXIgcGlja2VyXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LXBpY2staGFuZGxlclxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5oYW5kbGVycz0ke3RoaXMuX2hhbmRsZXJzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctcGljay1oYW5kbGVyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImZvcm1cIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1mb3JtXG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctZm9ybT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IHRoaXMuX3N0ZXAudHlwZSA9PT0gXCJleHRlcm5hbFwiXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWV4dGVybmFsXG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctZXh0ZXJuYWw+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiYWJvcnRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1hYm9ydFxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWFib3J0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fZGV2aWNlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2FyZWFzID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IC8vIFdoZW4gaXQncyBhIGNyZWF0ZSBlbnRyeSByZXN1bHQsIHdlIHdpbGwgZmV0Y2ggZGV2aWNlICYgYXJlYSByZWdpc3RyeVxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1sb2FkaW5nPjwvc3RlcC1mbG93LWxvYWRpbmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWNyZWF0ZS1lbnRyeVxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAuZGV2aWNlcz0ke3RoaXMuX2RldmljZXN9XG4gICAgICAgICAgICAgICAgLmFyZWFzPSR7dGhpcy5fYXJlYXN9XG4gICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1jcmVhdGUtZW50cnk+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9oYS1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZsb3ctdXBkYXRlXCIsIChldikgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwLCBzdGVwUHJvbWlzZSB9ID0gKGV2IGFzIGFueSkuZGV0YWlsO1xuICAgICAgdGhpcy5fcHJvY2Vzc1N0ZXAoc3RlcCB8fCBzdGVwUHJvbWlzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9zdGVwXCIpICYmXG4gICAgICB0aGlzLl9zdGVwICYmXG4gICAgICB0aGlzLl9zdGVwLnR5cGUgPT09IFwiY3JlYXRlX2VudHJ5XCJcbiAgICApIHtcbiAgICAgIHRoaXMuX2ZldGNoRGV2aWNlcyh0aGlzLl9zdGVwLnJlc3VsdCk7XG4gICAgICB0aGlzLl9mZXRjaEFyZWFzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfZGV2aWNlc1wiKSAmJiB0aGlzLl9kaWFsb2cpIHtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2NoZWR1bGVDZW50ZXJEaWFsb2coKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kaWFsb2cuY2VudGVyKCksIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYWxvZygpOiBIYVBhcGVyRGlhbG9nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtcGFwZXItZGlhbG9nXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGV2aWNlcyhjb25maWdFbnRyeUlkKSB7XG4gICAgdGhpcy5fdW5zdWJEZXZpY2VzID0gc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkoXG4gICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBkZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PlxuICAgICAgICAgIGRldmljZS5jb25maWdfZW50cmllcy5pbmNsdWRlcyhjb25maWdFbnRyeUlkKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaEFyZWFzKCkge1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3Byb2Nlc3NTdGVwKFxuICAgIHN0ZXA6IENvbmZpZ0Zsb3dTdGVwIHwgdW5kZWZpbmVkIHwgUHJvbWlzZTxDb25maWdGbG93U3RlcD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHN0ZXAgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBhd2FpdCBzdGVwO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2Zsb3dEb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0ZXAgPSB1bmRlZmluZWQ7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZsb3dGaW5pc2hlZCA9IEJvb2xlYW4oXG4gICAgICB0aGlzLl9zdGVwICYmIFtcImNyZWF0ZV9lbnRyeVwiLCBcImFib3J0XCJdLmluY2x1ZGVzKHRoaXMuX3N0ZXAudHlwZSlcbiAgICApO1xuXG4gICAgLy8gSWYgd2UgY3JlYXRlZCB0aGlzIGZsb3csIGRlbGV0ZSBpdCBub3cuXG4gICAgaWYgKHRoaXMuX3N0ZXAgJiYgIWZsb3dGaW5pc2hlZCAmJiAhdGhpcy5fcGFyYW1zLmNvbnRpbnVlRmxvd0lkKSB7XG4gICAgICBkZWxldGVDb25maWdGbG93KHRoaXMuaGFzcywgdGhpcy5fc3RlcC5mbG93X2lkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJhbXMuZGlhbG9nQ2xvc2VkQ2FsbGJhY2soe1xuICAgICAgZmxvd0ZpbmlzaGVkLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGV2aWNlcyA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Vuc3ViRGV2aWNlcykge1xuICAgICAgdGhpcy5fdW5zdWJEZXZpY2VzKCk7XG4gICAgICB0aGlzLl91bnN1YkRldmljZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIC8vIENsb3NlZCBkaWFsb2cgYnkgY2xpY2tpbmcgb24gdGhlIG92ZXJsYXlcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX3N0ZXApIHtcbiAgICAgICAgdGhpcy5fZmxvd0RvbmUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBGbG93IGFib3J0ZWQgZHVyaW5nIHBpY2tpbmcgZmxvd1xuICAgICAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nID4gKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLWNvbmZpZy1mbG93XCI6IENvbmZpZ0Zsb3dEaWFsb2c7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IENvbmZpZ0Zsb3dTdGVwQWJvcnQgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbG9jYWxpemVLZXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctYWJvcnRcIilcbmNsYXNzIFN0ZXBGbG93QWJvcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgc3RlcCE6IENvbmZpZ0Zsb3dTdGVwQWJvcnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5oYXNzLmxvY2FsaXplO1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgbG9jYWxpemUsXG4gICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuYWJvcnQuJHtzdGVwLnJlYXNvbn1gLFxuICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+QWJvcnRlZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkNsb3NlPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHsgc3RlcDogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY29uZmlnRmxvd0NvbnRlbnRTdHlsZXM7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1hYm9ydFwiOiBTdGVwRmxvd0Fib3J0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHsgQ29uZmlnRmxvd1N0ZXBDcmVhdGVFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XCIpXG5jbGFzcyBTdGVwRmxvd0NyZWF0ZUVudHJ5IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgc3RlcCE6IENvbmZpZ0Zsb3dTdGVwQ3JlYXRlRW50cnk7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGRldmljZXMhOiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGFyZWFzITogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgbG9jYWxpemUgPSB0aGlzLmhhc3MubG9jYWxpemU7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcDtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5jcmVhdGVfZW50cnkuJHtzdGVwLmRlc2NyaXB0aW9uIHx8XG4gICAgICAgIFwiZGVmYXVsdFwifWAsXG4gICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5TdWNjZXNzITwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cD5DcmVhdGVkIGNvbmZpZyBmb3IgJHtzdGVwLnRpdGxlfS48L3A+XG4gICAgICAgICR7dGhpcy5kZXZpY2VzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPHA+V2UgZm91bmQgdGhlIGZvbGxvd2luZyBkZXZpY2VzOjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZXNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZGV2aWNlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoZGV2aWNlKSA9PlxuICAgICAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiR7ZGV2aWNlLm5hbWV9PC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2RldmljZS5tb2RlbH0gKCR7ZGV2aWNlLm1hbnVmYWN0dXJlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2U9JHtkZXZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVBcmVhQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBzZWxlY3RlZD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYXJlYXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFyZWEpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIC5hcmVhPSR7YXJlYS5hcmVhX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FyZWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgJHt0aGlzLmRldmljZXMubGVuZ3RoID4gMFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9hZGRBcmVhfVwiPkFkZCBBcmVhPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkZpbmlzaDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9mbG93RG9uZSgpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7IHN0ZXA6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZEFyZWEoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcIk5hbWUgb2YgdGhlIG5ldyBhcmVhP1wiKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZWEgPSBhd2FpdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcmVhcyA9IFsuLi50aGlzLmFyZWFzLCBhcmVhXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBhcmVhLlwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVBcmVhQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55O1xuICAgIGNvbnN0IGRldmljZSA9IGRyb3Bkb3duLmRldmljZTtcblxuICAgIC8vIEl0ZW0gZmlyc3QgYmVjb21lcyBudWxsLCB0aGVuIG5ldyBpdGVtLlxuICAgIGlmICghZHJvcGRvd24uc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJlYSA9IGRyb3Bkb3duLnNlbGVjdGVkSXRlbS5hcmVhO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcywgZGV2aWNlLCB7XG4gICAgICAgIGFyZWFfaWQ6IGFyZWEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBFcnJvciBzYXZpbmcgYXJlYTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIGRyb3Bkb3duLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAuZGV2aWNlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25zID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjogU3RlcEZsb3dDcmVhdGVFbnRyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7XG4gIENvbmZpZ0Zsb3dTdGVwRXh0ZXJuYWwsXG4gIERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQsXG4gIGZldGNoQ29uZmlnRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWV4dGVybmFsXCIpXG5jbGFzcyBTdGVwRmxvd0V4dGVybmFsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIHN0ZXAhOiBDb25maWdGbG93U3RlcEV4dGVybmFsO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGl6ZSA9IHRoaXMuaGFzcy5sb2NhbGl6ZTtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgIGxvY2FsaXplLFxuICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLiR7c3RlcC5zdGVwX2lkfS5kZXNjcmlwdGlvbmAsXG4gICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5cbiAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICAgICl9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biAuY29udGVudD0ke2Rlc2NyaXB0aW9ufSBhbGxvdy1zdmc+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcGVuLWJ1dHRvblwiPlxuICAgICAgICAgIDxhIGhyZWY9JHt0aGlzLnN0ZXAudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD5cbiAgICAgICAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuZXh0ZXJuYWxfc3RlcC5vcGVuX3NpdGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHM8RGF0YUVudHJ5Rmxvd1Byb2dyZXNzZWRFdmVudD4oXG4gICAgICBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgaWYgKGV2LmRhdGEuZmxvd19pZCAhPT0gdGhpcy5zdGVwLmZsb3dfaWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICAgICAgc3RlcFByb21pc2U6IGZldGNoQ29uZmlnRmxvdyh0aGlzLmhhc3MsIHRoaXMuc3RlcC5mbG93X2lkKSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgXCJkYXRhX2VudHJ5X2Zsb3dfcHJvZ3Jlc3NlZFwiXG4gICAgKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLnN0ZXAudXJsKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1idXR0b24gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1leHRlcm5hbFwiOiBTdGVwRmxvd0V4dGVybmFsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlQ29uZmlnRmxvd1N0ZXAsXG4gIEZpZWxkU2NoZW1hLFxuICBDb25maWdGbG93U3RlcEZvcm0sXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50LCBhcHBseVBvbHltZXJFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1mb3JtXCIpXG5jbGFzcyBTdGVwRmxvd0Zvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIHN0ZXAhOiBDb25maWdGbG93U3RlcEZvcm07XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9zdGVwRGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZXJyb3JNc2c/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5oYXNzLmxvY2FsaXplO1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG5cbiAgICBjb25zdCBhbGxSZXF1aXJlZEluZm9GaWxsZWRJbiA9XG4gICAgICB0aGlzLl9zdGVwRGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gLy8gSWYgbm8gZGF0YSBmaWxsZWQgaW4sIGp1c3QgY2hlY2sgdGhhdCBhbnkgZmllbGQgaXMgcmVxdWlyZWRcbiAgICAgICAgICBzdGVwLmRhdGFfc2NoZW1hLmZpbmQoKGZpZWxkKSA9PiAhZmllbGQub3B0aW9uYWwpID09PSB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBJZiBkYXRhIGlzIGZpbGxlZCBpbiwgbWFrZSBzdXJlIGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlXG4gICAgICAgICAgdGhpcy5fc3RlcERhdGEgJiZcbiAgICAgICAgICBzdGVwLmRhdGFfc2NoZW1hLmV2ZXJ5KFxuICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICBmaWVsZC5vcHRpb25hbCB8fFxuICAgICAgICAgICAgICAhW1wiXCIsIHVuZGVmaW5lZF0uaW5jbHVkZXModGhpcy5fc3RlcERhdGEhW2ZpZWxkLm5hbWVdKVxuICAgICAgICAgICk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgbG9jYWxpemUsXG4gICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+XG4gICAgICAgICR7bG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgICApfVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5fZXJyb3JNc2dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgIC5kYXRhPSR7dGhpcy5fc3RlcERhdGFQcm9jZXNzZWR9XG4gICAgICAgICAgQGRhdGEtY2hhbmdlZD0ke3RoaXMuX3N0ZXBEYXRhQ2hhbmdlZH1cbiAgICAgICAgICAuc2NoZW1hPSR7c3RlcC5kYXRhX3NjaGVtYX1cbiAgICAgICAgICAuZXJyb3I9JHtzdGVwLmVycm9yc31cbiAgICAgICAgICAuY29tcHV0ZUxhYmVsPSR7dGhpcy5fbGFiZWxDYWxsYmFja31cbiAgICAgICAgICAuY29tcHV0ZUVycm9yPSR7dGhpcy5fZXJyb3JDYWxsYmFja31cbiAgICAgICAgPjwvaGEtZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgJHt0aGlzLl9sb2FkaW5nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3N1Ym1pdFN0ZXB9XG4gICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshYWxsUmVxdWlyZWRJbmZvRmlsbGVkSW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgJHshYWxsUmVxdWlyZWRJbmZvRmlsbGVkSW5cbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdCBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQgaW4uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldikgPT4ge1xuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdFN0ZXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9zdGVwRGF0YVByb2Nlc3NlZCgpIHtcbiAgICBpZiAodGhpcy5fc3RlcERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBEYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICB0aGlzLnN0ZXAuZGF0YV9zY2hlbWEuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChcImRlZmF1bHRcIiBpbiBmaWVsZCkge1xuICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQuZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N1Ym1pdFN0ZXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fZXJyb3JNc2cgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBmbG93SWQgPSB0aGlzLnN0ZXAuZmxvd19pZDtcbiAgICBjb25zdCBzdGVwRGF0YSA9IHRoaXMuX3N0ZXBEYXRhIHx8IHt9O1xuXG4gICAgY29uc3QgdG9TZW5kRGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHN0ZXBEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RlcERhdGFba2V5XTtcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSBbdW5kZWZpbmVkLCBcIlwiXS5pbmNsdWRlcyh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNFbXB0eSkge1xuICAgICAgICB0b1NlbmREYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGVwID0gYXdhaXQgaGFuZGxlQ29uZmlnRmxvd1N0ZXAoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGVwLmZsb3dfaWQsXG4gICAgICAgIHRvU2VuZERhdGFcbiAgICAgICk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBzdGlsbCBzaG93aW5nIHRoZSBzYW1lIHN0ZXAgYXMgd2hlbiB3ZVxuICAgICAgLy8gZmlyZWQgb2ZmIHJlcXVlc3QuXG4gICAgICBpZiAoIXRoaXMuc3RlcCB8fCBmbG93SWQgIT09IHRoaXMuc3RlcC5mbG93X2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwge1xuICAgICAgICBzdGVwLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9XG4gICAgICAgIChlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZSkgfHwgXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGVwRGF0YUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBEYXRhID0gYXBwbHlQb2x5bWVyRXZlbnQoZXYsIHRoaXMuX3N0ZXBEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xhYmVsQ2FsbGJhY2sgPSAoc2NoZW1hOiBGaWVsZFNjaGVtYSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcCBhcyBDb25maWdGbG93U3RlcEZvcm07XG5cbiAgICByZXR1cm4gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtcbiAgICAgICAgc2NoZW1hLm5hbWVcbiAgICAgIH1gXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIF9lcnJvckNhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+XG4gICAgdGhpcy5oYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHt0aGlzLnN0ZXAuaGFuZGxlcn0uY29uZmlnLmVycm9yLiR7ZXJyb3J9YCk7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBjb25maWdGbG93Q29udGVudFN0eWxlcyxcbiAgICAgIGNzc2BcbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Ym1pdC1zcGlubmVyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWZvcm1cIjogU3RlcEZsb3dGb3JtO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctbG9hZGluZ1wiKVxuY2xhc3MgU3RlcEZsb3dMb2FkaW5nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbml0LXNwaW5uZXJcIj5cbiAgICAgICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmluaXQtc3Bpbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctbG9hZGluZ1wiOiBTdGVwRmxvd0xvYWRpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbmZpZ0Zsb3cgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgKiBhcyBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcblxuaW50ZXJmYWNlIEhhbmRsZXJPYmoge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCIpXG5jbGFzcyBTdGVwRmxvd1BpY2tIYW5kbGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhbmRsZXJzITogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZmlsdGVyPzogc3RyaW5nO1xuICBwcml2YXRlIF93aWR0aD86IG51bWJlcjtcblxuICBwcml2YXRlIF9nZXRIYW5kbGVycyA9IG1lbW9pemVPbmUoKGg6IHN0cmluZ1tdLCBmaWx0ZXI/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyczogSGFuZGxlck9ialtdID0gaC5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlcn0uY29uZmlnLnRpdGxlYCksXG4gICAgICAgIHNsdWc6IGhhbmRsZXIsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgY29uc3Qgb3B0aW9uczogRnVzZS5GdXNlT3B0aW9uczxIYW5kbGVyT2JqPiA9IHtcbiAgICAgICAga2V5czogW1wibmFtZVwiLCBcInNsdWdcIl0sXG4gICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDIsXG4gICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShoYW5kbGVycywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZnVzZS5zZWFyY2goZmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXJzLnNvcnQoKGEsIGIpID0+XG4gICAgICBhLm5hbWUudG9VcHBlckNhc2UoKSA8IGIubmFtZS50b1VwcGVyQ2FzZSgpID8gLTEgOiAxXG4gICAgKTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZ2V0SGFuZGxlcnModGhpcy5oYW5kbGVycywgdGhpcy5maWx0ZXIpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ld1wiKX08L2gyPlxuICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAuZmlsdGVyPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVyQ2hhbmdlZH1cbiAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgIDxkaXYgc3R5bGU9JHtzdHlsZU1hcCh7IHdpZHRoOiBgJHt0aGlzLl93aWR0aH1weGAgfSl9PlxuICAgICAgICAke2hhbmRsZXJzLm1hcChcbiAgICAgICAgICAoaGFuZGxlcjogSGFuZGxlck9iaikgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX2hhbmRsZXJQaWNrZWR9IC5oYW5kbGVyPSR7aGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICR7aGFuZGxlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLmZpbHRlciA9IGUuZGV0YWlsLnZhbHVlO1xuXG4gICAgLy8gU3RvcmUgdGhlIHdpZHRoIHNvIHRoYXQgd2hlbiB3ZSBzZWFyY2gsIGJveCBkb2Vzbid0IGp1bXBcbiAgICBpZiAodGhpcy5fd2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZXJQaWNrZWQoZXYpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICBzdGVwUHJvbWlzZTogY3JlYXRlQ29uZmlnRmxvdyh0aGlzLmhhc3MsIGV2LmN1cnJlbnRUYXJnZXQuaGFuZGxlci5zbHVnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1waWNrLWhhbmRsZXJcIjogU3RlcEZsb3dQaWNrSGFuZGxlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdGbG93Q29udGVudFN0eWxlcyA9IGNzc2BcbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgaGEtbWFya2Rvd24ge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgaGEtbWFya2Rvd24gYSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG4gIGhhLW1hcmtkb3duIGltZzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiZXhwb3J0IGNvbnN0IGFwcGx5UG9seW1lckV2ZW50ID0gPFQ+KFxuICBldjogUG9seW1lckNoYW5nZWRFdmVudDxUPixcbiAgY3VyVmFsdWU6IFRcbik6IFQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHZhbHVlIH0gPSBldi5kZXRhaWw7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBwcm9wTmFtZSA9IHBhdGguc3BsaXQoXCIuXCIpWzFdO1xuICByZXR1cm4geyAuLi5jdXJWYWx1ZSwgW3Byb3BOYW1lXTogdmFsdWUgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seW1lckNoYW5nZWRFdmVudDxUPiBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgdmFsdWU6IFQ7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBxdWV1ZVByb3BlcnR5OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHltZXJJcm9uU2VsZWN0RXZlbnQ8VD4gZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGl0ZW06IFQ7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGFzcy1sb2dvdXRcIjogdW5kZWZpbmVkO1xuICAgIFwiaXJvbi1yZXNpemVcIjogdW5kZWZpbmVkO1xuICAgIFwiY29uZmlnLXJlZnJlc2hcIjogdW5kZWZpbmVkO1xuICAgIFwiaGFzcy1hcGktY2FsbGVkXCI6IHtcbiAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICByZXNwb25zZTogdW5rbm93bjtcbiAgICB9O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7Ozs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7Ozs7Ozs7QUFPQTs7OztBQUtBOzs7OztBQUtBOzs7QUF2QkE7QUEyQkE7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBOzs7QUE1REE7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVZBO0FBa0JBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFNQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQVlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7Ozs7O0FBRUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFLQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUFBO0FBTUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7O0FBTEE7O0FBV0E7QUFDQTs7QUFKQTs7QUFVQTtBQUNBOztBQUpBOztBQVVBO0FBQ0E7O0FBSkE7QUFTQTs7QUFGQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUF2REE7QUEwREE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FBQUE7QUFhQTs7O0FBN1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBUUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFNQTs7O0FBR0E7QUFFQTtBQUZBOzs7QUFPQTs7QUFWQTtBQWFBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7OztBQXRDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7OztBQUdBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7OztBQUtBOzs7QUFLQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBOztBQUlBO0FBRUE7QUFDQTs7QUFIQTs7OztBQW5CQTs7QUFnQ0E7OztBQUdBO0FBRUE7QUFGQTtBQUNBO0FBS0E7O0FBdkRBO0FBMERBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUNBOzs7QUEvSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBU0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUdBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQU1BOztBQUVBOzs7O0FBTUE7O0FBSUE7QUFFQTtBQUZBOztBQU1BOztBQUVBOzs7OztBQXBCQTtBQTRCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7QUFBQTtBQVlBOzs7QUE3RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUdBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQU9BO0FBTUE7O0FBRUE7OztBQUtBO0FBRUE7QUFGQTtBQUtBO0FBRUE7QUFGQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUFBOzs7QUFTQTtBQUNBOzs7OztBQUtBOzs7O0FBQUE7O0FBUUE7O0FBbERBO0FBcURBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFLQTs7Ozs7Ozs7QUFFQTs7Ozs7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFZQTs7O0FBM0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBUUE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7O0FBQ0E7QUFDQTs7OztBQUFBO0FBS0E7Ozs7O0FBRUE7QUFDQTs7Ozs7QUFBQTtBQU1BOzs7QUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBOztBQUVBOzs7O0FBTEE7O0FBUEE7QUFvQkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTs7O0FBbkZBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
