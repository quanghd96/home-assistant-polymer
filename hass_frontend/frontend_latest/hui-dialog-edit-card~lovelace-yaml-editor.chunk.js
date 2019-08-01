(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-dialog-edit-card~lovelace-yaml-editor"],
  {
    /***/ "./src/panels/lovelace/components/hui-yaml-editor.ts":
      /*!***********************************************************!*\
  !*** ./src/panels/lovelace/components/hui-yaml-editor.ts ***!
  \***********************************************************/
      /*! exports provided: HuiYamlEditor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiYamlEditor",
          function() {
            return HuiYamlEditor;
          }
        );
        /* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! codemirror */ "./node_modules/codemirror/lib/codemirror.js"
        );
        /* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          codemirror__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! codemirror/mode/yaml/yaml */ "./node_modules/codemirror/mode/yaml/yaml.js"
        );
        /* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
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

        // @ts-ignore

        // @ts-ignore

        let HuiYamlEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])(
              "hui-yaml-editor"
            ),
          ],
          function(_initialize, _HTMLElement) {
            class HuiYamlEditor extends _HTMLElement {
              constructor() {
                super();

                _initialize(this);

                codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.commands.save = (
                  cm
                ) => {
                  Object(
                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__[
                      "fireEvent"
                    ]
                  )(cm.getWrapperElement(), "yaml-save");
                };

                this._value = "";
                const shadowRoot = this.attachShadow({
                  mode: "open",
                });
                shadowRoot.innerHTML = `
            <style>
              ${
                codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ]
              }
              .CodeMirror {
                height: var(--code-mirror-height, auto);
                direction: var(--code-mirror-direction, ltr);
              }
              .CodeMirror-scroll {
                max-height: var(--code-mirror-max-height, --code-mirror-height);
              }
              .CodeMirror-gutters {
                border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
                background-color: var(--paper-dialog-background-color, var(--primary-background-color));
                transition: 0.2s ease border-right;
              }
              .CodeMirror-focused .CodeMirror-gutters {
                border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));;
              }
              .CodeMirror-linenumber {
                color: var(--paper-dialog-color, var(--primary-text-color));
              }
              .rtl .CodeMirror-vscrollbar {
                right: auto;
                left: 0px;
              }
              .rtl-gutter {
                width: 20px;
              }
            </style>`;
              }
            }

            return {
              F: HuiYamlEditor,
              d: [
                {
                  kind: "field",
                  key: "_hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "codemirror",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_value",
                  value: void 0,
                },
                {
                  kind: "set",
                  key: "hass",
                  value: function hass(_hass) {
                    this._hass = _hass;

                    if (this._hass) {
                      this.setScrollBarDirection();
                    }
                  },
                },
                {
                  kind: "set",
                  key: "value",
                  value: function value(_value) {
                    if (this.codemirror) {
                      if (_value !== this.codemirror.getValue()) {
                        this.codemirror.setValue(_value);
                      }
                    }

                    this._value = _value;
                  },
                },
                {
                  kind: "get",
                  key: "value",
                  value: function value() {
                    return this.codemirror.getValue();
                  },
                },
                {
                  kind: "get",
                  key: "hasComments",
                  value: function hasComments() {
                    return this.shadowRoot.querySelector("span.cm-comment")
                      ? true
                      : false;
                  },
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    if (!this.codemirror) {
                      this.codemirror = codemirror__WEBPACK_IMPORTED_MODULE_0___default()(
                        this.shadowRoot,
                        {
                          value: this._value,
                          lineNumbers: true,
                          mode: "yaml",
                          tabSize: 2,
                          autofocus: true,
                          viewportMargin: Infinity,
                          extraKeys: {
                            Tab: "indentMore",
                            "Shift-Tab": "indentLess",
                          },
                          gutters:
                            this._hass &&
                            Object(
                              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__[
                                "computeRTL"
                              ]
                            )(this._hass)
                              ? ["rtl-gutter", "CodeMirror-linenumbers"]
                              : [],
                        }
                      );
                      this.setScrollBarDirection();
                      this.codemirror.on("changes", () => this._onChange());
                    } else {
                      this.codemirror.refresh();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_onChange",
                  value: function _onChange() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__[
                        "fireEvent"
                      ]
                    )(this, "yaml-changed", {
                      value: this.codemirror.getValue(),
                    });
                  },
                },
                {
                  kind: "method",
                  key: "setScrollBarDirection",
                  value: function setScrollBarDirection() {
                    if (!this.codemirror) {
                      return;
                    }

                    this.codemirror
                      .getWrapperElement()
                      .classList.toggle(
                        "rtl",
                        Object(
                          _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__[
                            "computeRTL"
                          ]
                        )(this._hass)
                      );
                  },
                },
              ],
            };
          },
          HTMLElement
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmR+bG92ZWxhY2UteWFtbC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLXlhbWwtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gXCJjb2RlbWlycm9yXCI7XG5pbXBvcnQgXCJjb2RlbWlycm9yL21vZGUveWFtbC95YW1sXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgY29kZU1pcnJvckNTUyBmcm9tIFwiY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5jc3NcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ5YW1sLWNoYW5nZWRcIjoge1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9O1xuICAgIFwieWFtbC1zYXZlXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS15YW1sLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVlhbWxFZGl0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHB1YmxpYyBfaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHVibGljIGNvZGVtaXJyb3IhOiBhbnk7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBDb2RlTWlycm9yLmNvbW1hbmRzLnNhdmUgPSAoY206IENvZGVNaXJyb3IpID0+IHtcbiAgICAgIGZpcmVFdmVudChjbS5nZXRXcmFwcGVyRWxlbWVudCgpLCBcInlhbWwtc2F2ZVwiKTtcbiAgICB9O1xuICAgIHRoaXMuX3ZhbHVlID0gXCJcIjtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgJHtjb2RlTWlycm9yQ1NTfVxuICAgICAgICAgICAgICAuQ29kZU1pcnJvciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1oZWlnaHQsIGF1dG8pO1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdmFyKC0tY29kZS1taXJyb3ItZGlyZWN0aW9uLCBsdHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5Db2RlTWlycm9yLXNjcm9sbCB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItbWF4LWhlaWdodCwgLS1jb2RlLW1pcnJvci1oZWlnaHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGJvcmRlci1yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpOztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucnRsIC5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucnRsLWd1dHRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+YDtcbiAgfVxuXG4gIHNldCBoYXNzKGhhc3M6IEhvbWVBc3Npc3RhbnQpIHtcbiAgICB0aGlzLl9oYXNzID0gaGFzcztcbiAgICBpZiAodGhpcy5faGFzcykge1xuICAgICAgdGhpcy5zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5jb2RlbWlycm9yLmdldFZhbHVlKCkpIHtcbiAgICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGdldCBoYXNDb21tZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jbS1jb21tZW50XCIpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IgPSBDb2RlTWlycm9yKFxuICAgICAgICAodGhpcy5zaGFkb3dSb290IGFzIHVua25vd24pIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgIG1vZGU6IFwieWFtbFwiLFxuICAgICAgICAgIHRhYlNpemU6IDIsXG4gICAgICAgICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgICAgICAgIHZpZXdwb3J0TWFyZ2luOiBJbmZpbml0eSxcbiAgICAgICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgICAgIFRhYjogXCJpbmRlbnRNb3JlXCIsXG4gICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGd1dHRlcnM6XG4gICAgICAgICAgICB0aGlzLl9oYXNzICYmIGNvbXB1dGVSVEwodGhpcy5faGFzcyEpXG4gICAgICAgICAgICAgID8gW1wicnRsLWd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIl1cbiAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VzXCIsICgpID0+IHRoaXMuX29uQ2hhbmdlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInlhbWwtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2RlbWlycm9yXG4gICAgICAuZ2V0V3JhcHBlckVsZW1lbnQoKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIiwgY29tcHV0ZVJUTCh0aGlzLl9oYXNzISkpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWkteWFtbC1lZGl0b3JcIjogSHVpWWFtbEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUE2QkE7QUFDQTtBQTVDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0RBO0FBQUE7QUFBQTtBQUFBO0FBOERBO0FBQ0E7QUEvREE7QUFBQTtBQUFBO0FBQUE7QUFrRUE7QUFDQTtBQW5FQTtBQUFBO0FBQUE7QUFBQTtBQXNFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9GQTtBQUFBO0FBQUE7QUFBQTtBQWtHQTtBQUFBO0FBQUE7QUFDQTtBQW5HQTtBQUFBO0FBQUE7QUFBQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUE3R0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
