(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-zha"],
  {
    /***/ "./src/panels/config/zha/zha-config-panel.ts":
      /*!***************************************************!*\
  !*** ./src/panels/config/zha/zha-config-panel.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../common/dom/media_query */ "./src/common/dom/media_query.ts"
        );
        /* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts"
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

        let ZHAConfigPanel = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])(
              "zha-config-panel"
            ),
          ],
          function(_initialize, _HassRouterPage) {
            class ZHAConfigPanel extends _HassRouterPage {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZHAConfigPanel,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_1__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_1__["property"]
                    )(),
                  ],
                  key: "_wideSidebar",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_1__["property"]
                    )(),
                  ],
                  key: "_wide",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  key: "routerOptions",

                  value() {
                    return {
                      defaultPage: "configuration",
                      cacheAll: true,
                      preloadAll: true,
                      routes: {
                        configuration: {
                          tag: "ha-config-zha",
                          load: () =>
                            Promise.all(
                              /*! import() | zha-configuration-page */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "zha-add-devices-page~zha-configuration-page"
                                ),
                                __webpack_require__.e("zha-configuration-page"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./ha-config-zha */ "./src/panels/config/zha/ha-config-zha.ts"
                              )
                            ),
                        },
                        add: {
                          tag: "zha-add-devices-page",
                          load: () =>
                            Promise.all(
                              /*! import() | zha-add-devices-page */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(7),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "zha-add-devices-page~zha-configuration-page"
                                ),
                                __webpack_require__.e("zha-add-devices-page"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./zha-add-devices-page */ "./src/panels/config/zha/zha-add-devices-page.ts"
                              )
                            ),
                        },
                      },
                    };
                  },
                },
                {
                  kind: "field",
                  key: "_listeners",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(ZHAConfigPanel.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._listeners.push(
                      Object(
                        _common_dom_media_query__WEBPACK_IMPORTED_MODULE_2__[
                          "listenMediaQuery"
                        ]
                      )("(min-width: 1040px)", (matches) => {
                        this._wide = matches;
                      })
                    );

                    this._listeners.push(
                      Object(
                        _common_dom_media_query__WEBPACK_IMPORTED_MODULE_2__[
                          "listenMediaQuery"
                        ]
                      )("(min-width: 1296px)", (matches) => {
                        this._wideSidebar = matches;
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(ZHAConfigPanel.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    while (this._listeners.length) {
                      this._listeners.pop()();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function updatePageEl(el) {
                    el.route = this.routeTail;
                    el.hass = this.hass;
                    el.isWide = this.hass.dockedSidebar
                      ? this._wideSidebar
                      : this._wide;
                  },
                },
              ],
            };
          },
          _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__[
            "HassRouterPage"
          ]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpoYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY29uZmlnLXBhbmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBsaXN0ZW5NZWRpYVF1ZXJ5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vbWVkaWFfcXVlcnlcIjtcbmltcG9ydCB7XG4gIEhhc3NSb3V0ZXJQYWdlLFxuICBSb3V0ZXJPcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWNvbmZpZy1wYW5lbFwiKVxuY2xhc3MgWkhBQ29uZmlnUGFuZWwgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIF93aWRlU2lkZWJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgX3dpZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJjb25maWd1cmF0aW9uXCIsXG4gICAgY2FjaGVBbGw6IHRydWUsXG4gICAgcHJlbG9hZEFsbDogdHJ1ZSxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy16aGFcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtY29uZmlndXJhdGlvbi1wYWdlXCIgKi8gXCIuL2hhLWNvbmZpZy16aGFcIiksXG4gICAgICB9LFxuICAgICAgYWRkOiB7XG4gICAgICAgIHRhZzogXCJ6aGEtYWRkLWRldmljZXMtcGFnZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCIgKi8gXCIuL3poYS1hZGQtZGV2aWNlcy1wYWdlXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgX2xpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGxpc3Rlbk1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMDQwcHgpXCIsIChtYXRjaGVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3dpZGUgPSBtYXRjaGVzO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgbGlzdGVuTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEyOTZweClcIiwgKG1hdGNoZXMpID0+IHtcbiAgICAgICAgdGhpcy5fd2lkZVNpZGViYXIgPSBtYXRjaGVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2hpbGUgKHRoaXMuX2xpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wb3AoKSEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKGVsKTogdm9pZCB7XG4gICAgZWwucm91dGUgPSB0aGlzLnJvdXRlVGFpbDtcbiAgICBlbC5oYXNzID0gdGhpcy5oYXNzO1xuICAgIGVsLmlzV2lkZSA9IHRoaXMuaGFzcy5kb2NrZWRTaWRlYmFyID8gdGhpcy5fd2lkZVNpZGViYXIgOiB0aGlzLl93aWRlO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtY29uZmlnLXBhbmVsXCI6IFpIQUNvbmZpZ1BhbmVsO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHM3QkFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBLDA5QkFDQTtBQUhBO0FBTkE7QUFKQTs7Ozs7Ozs7QUFrQkE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWxEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
