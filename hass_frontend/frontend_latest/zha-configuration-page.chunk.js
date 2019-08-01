(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["zha-configuration-page"],
  {
    /***/ "./src/panels/config/ha-config-section.js":
      /*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );

        class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              narrow: {
                type: Boolean,
              },
              isWide: {
                type: Boolean,
                value: false,
              },
            };
          }

          computeContentClasses(isWide) {
            var classes = "content ";
            return isWide ? classes : classes + "narrow";
          }

          computeClasses(isWide) {
            var classes = "together layout ";
            return classes + (isWide ? "horizontal" : "vertical narrow");
          }
        }

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },

    /***/ "./src/panels/config/zha/ha-config-zha.ts":
      /*!************************************************!*\
  !*** ./src/panels/config/zha/ha-config-zha.ts ***!
  \************************************************/
      /*! exports provided: HaConfigZha */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaConfigZha",
          function() {
            return HaConfigZha;
          }
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _zha_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./zha-binding */ "./src/panels/config/zha/zha-binding.ts"
        );
        /* harmony import */ var _zha_cluster_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./zha-cluster-attributes */ "./src/panels/config/zha/zha-cluster-attributes.ts"
        );
        /* harmony import */ var _zha_cluster_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./zha-cluster-commands */ "./src/panels/config/zha/zha-cluster-commands.ts"
        );
        /* harmony import */ var _zha_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./zha-network */ "./src/panels/config/zha/zha-network.ts"
        );
        /* harmony import */ var _zha_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./zha-node */ "./src/panels/config/zha/zha-node.ts"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
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

        let HaConfigZha = _decorate(
          null,
          function(_initialize, _LitElement) {
            class HaConfigZha extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaConfigZha,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "_selectedDevice",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "_selectedCluster",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "_bindableDevices",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProperties) {
                    if (changedProperties.has("_selectedDevice")) {
                      this._fetchBindableDevices();
                    }

                    _get(
                      _getPrototypeOf(HaConfigZha.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <hass-subpage header="Zigbee Home Automation">
        <zha-network
          .isWide="${this.isWide}"
          .hass="${this.hass}"
        ></zha-network>

        <zha-node
          .isWide="${this.isWide}"
          .hass="${this.hass}"
          @zha-cluster-selected="${this._onClusterSelected}"
          @zha-node-selected="${this._onDeviceSelected}"
        ></zha-node>
        ${
          this._selectedCluster
            ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
              <zha-cluster-attributes
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedNode="${this._selectedDevice}"
                .selectedCluster="${this._selectedCluster}"
              ></zha-cluster-attributes>

              <zha-cluster-commands
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedNode="${this._selectedDevice}"
                .selectedCluster="${this._selectedCluster}"
              ></zha-cluster-commands>
            `
            : ""
        }
        ${
          this._selectedDevice && this._bindableDevices.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
              <zha-binding-control
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedDevice="${this._selectedDevice}"
                .bindableDevices="${this._bindableDevices}"
              ></zha-binding-control>
            `
            : ""
        }
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_onClusterSelected",
                  value: function _onClusterSelected(selectedClusterEvent) {
                    this._selectedCluster = selectedClusterEvent.detail.cluster;
                  },
                },
                {
                  kind: "method",
                  key: "_onDeviceSelected",
                  value: function _onDeviceSelected(selectedNodeEvent) {
                    this._selectedDevice = selectedNodeEvent.detail.node;
                    this._selectedCluster = undefined;
                  },
                },
                {
                  kind: "method",
                  key: "_fetchBindableDevices",
                  value: async function _fetchBindableDevices() {
                    if (this._selectedDevice && this.hass) {
                      this._bindableDevices = (await Object(
                        _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                          "fetchBindableDevices"
                        ]
                      )(this.hass, this._selectedDevice.ieee)).sort(
                        _functions__WEBPACK_IMPORTED_MODULE_11__[
                          "sortZHADevices"
                        ]
                      );
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_10__[
                        "haStyle"
                      ],
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_8__["LitElement"]
        );
        customElements.define("ha-config-zha", HaConfigZha);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-binding.ts":
      /*!**********************************************!*\
  !*** ./src/panels/config/zha/zha-binding.ts ***!
  \**********************************************/
      /*! exports provided: ZHABindingControl */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHABindingControl",
          function() {
            return ZHABindingControl;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
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

        let ZHABindingControl = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["customElement"])(
              "zha-binding-control"
            ),
          ],
          function(_initialize, _LitElement) {
            class ZHABindingControl extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZHABindingControl,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "selectedDevice",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "_showHelp",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "_bindTargetIndex",

                  value() {
                    return -1;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["property"]
                    )(),
                  ],
                  key: "bindableDevices",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "field",
                  key: "_deviceToBind",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProperties) {
                    if (changedProperties.has("selectedDevice")) {
                      this._bindTargetIndex = -1;
                    }

                    _get(
                      _getPrototypeOf(ZHABindingControl.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>Device Binding</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">Bind and unbind devices.</span>

        <ha-card class="content">
          <div class="command-picker">
            <paper-dropdown-menu label="Bindable Devices" class="flex">
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._bindTargetIndex}"
                @iron-select="${this._bindTargetIndexChanged}"
              >
                ${this.bindableDevices.map(
                  (device) => lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                    <paper-item
                      >${
                        device.user_given_name
                          ? device.user_given_name
                          : device.name
                      }</paper-item
                    >
                  `
                )}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${
            this._showHelp
              ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                <div class="helpText">
                  Select a device to issue a bind command.
                </div>
              `
              : ""
          }
          <div class="card-actions">
            <mwc-button @click="${this._onBindDevicesClick}">Bind</mwc-button>
            ${
              this._showHelp
                ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                  <div class="helpText">
                    Bind devices.
                  </div>
                `
                : ""
            }
            <mwc-button @click="${this._onUnbindDevicesClick}"
              >Unbind</mwc-button
            >
            ${
              this._showHelp
                ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                  <div class="helpText">
                    Unbind devices.
                  </div>
                `
                : ""
            }
          </div>
        </ha-card>
      </ha-config-section>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_bindTargetIndexChanged",
                  value: function _bindTargetIndexChanged(event) {
                    this._bindTargetIndex = event.target.selected;
                    this._deviceToBind =
                      this._bindTargetIndex === -1
                        ? undefined
                        : this.bindableDevices[this._bindTargetIndex];
                  },
                },
                {
                  kind: "method",
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this._showHelp = !this._showHelp;
                  },
                },
                {
                  kind: "method",
                  key: "_onBindDevicesClick",
                  value: async function _onBindDevicesClick() {
                    if (
                      this.hass &&
                      this._deviceToBind &&
                      this.selectedDevice
                    ) {
                      await Object(
                        _data_zha__WEBPACK_IMPORTED_MODULE_9__["bindDevices"]
                      )(
                        this.hass,
                        this.selectedDevice.ieee,
                        this._deviceToBind.ieee
                      );
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_onUnbindDevicesClick",
                  value: async function _onUnbindDevicesClick() {
                    if (
                      this.hass &&
                      this._deviceToBind &&
                      this.selectedDevice
                    ) {
                      await Object(
                        _data_zha__WEBPACK_IMPORTED_MODULE_9__["unbindDevices"]
                      )(
                        this.hass,
                        this.selectedDevice.ieee,
                        this._deviceToBind.ieee
                      );
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_10__[
                        "haStyle"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["css"]`
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .command-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .sectionHeader {
          position: relative;
        }

        .helpText {
          color: grey;
          padding: 16px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_8__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/config/zha/zha-cluster-attributes.ts":
      /*!*********************************************************!*\
  !*** ./src/panels/config/zha/zha-cluster-attributes.ts ***!
  \*********************************************************/
      /*! exports provided: ZHAClusterAttributes */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHAClusterAttributes",
          function() {
            return ZHAClusterAttributes;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
        );

        class ZHAClusterAttributes extends lit_element__WEBPACK_IMPORTED_MODULE_10__[
          "LitElement"
        ] {
          constructor() {
            super();
            this.hass = void 0;
            this.isWide = void 0;
            this.showHelp = void 0;
            this.selectedNode = void 0;
            this.selectedCluster = void 0;
            this._attributes = void 0;
            this._selectedAttributeIndex = void 0;
            this._attributeValue = void 0;
            this._manufacturerCodeOverride = void 0;
            this._setAttributeServiceData = void 0;
            this.showHelp = false;
            this._selectedAttributeIndex = -1;
            this._attributes = [];
            this._attributeValue = "";
          }

          static get properties() {
            return {
              hass: {},
              isWide: {},
              showHelp: {},
              selectedNode: {},
              selectedCluster: {},
              _attributes: {},
              _selectedAttributeIndex: {},
              _attributeValue: {},
              _manufacturerCodeOverride: {},
              _setAttributeServiceData: {},
            };
          }

          updated(changedProperties) {
            if (changedProperties.has("selectedCluster")) {
              this._attributes = [];
              this._selectedAttributeIndex = -1;
              this._attributeValue = "";

              this._fetchAttributesForCluster();
            }

            super.update(changedProperties);
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div style="position: relative" slot="header">
          <span>Cluster Attributes</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">View and edit cluster attributes.</span>

        <ha-card class="content">
          <div class="attribute-picker">
            <paper-dropdown-menu
              label="Attributes of the selected cluster"
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._selectedAttributeIndex}"
                @iron-select="${this._selectedAttributeChanged}"
              >
                ${this._attributes.map(
                  (entry) => lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
                    <paper-item
                      >${entry.name +
                        " (id: " +
                        Object(
                          _functions__WEBPACK_IMPORTED_MODULE_13__[
                            "formatAsPaddedHex"
                          ]
                        )(entry.id) +
                        ")"}</paper-item
                    >
                  `
                )}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${
            this.showHelp
              ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
                <div class="help-text">
                  Select an attribute to view or set its value
                </div>
              `
              : ""
          }
          ${
            this._selectedAttributeIndex !== -1
              ? this._renderAttributeInteractions()
              : ""
          }
        </ha-card>
      </ha-config-section>
    `;
          }

          _renderAttributeInteractions() {
            return lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
      <div class="input-text">
        <paper-input
          label="Value"
          type="string"
          .value="${this._attributeValue}"
          @value-changed="${this._onAttributeValueChanged}"
          placeholder="Value"
        ></paper-input>
      </div>
      <div class="input-text">
        <paper-input
          label="Manufacturer code override"
          type="number"
          .value="${this._manufacturerCodeOverride}"
          @value-changed="${this._onManufacturerCodeOverrideChanged}"
          placeholder="Value"
        ></paper-input>
      </div>
      <div class="card-actions">
        <mwc-button @click="${this._onGetZigbeeAttributeClick}"
          >Get Zigbee Attribute</mwc-button
        >
        ${
          this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
              <div class="help-text2">
                Get the value for the selected attribute
              </div>
            `
            : ""
        }
        <ha-call-service-button
          .hass="${this.hass}"
          domain="zha"
          service="set_zigbee_cluster_attribute"
          .serviceData="${this._setAttributeServiceData}"
          >Set Zigbee Attribute</ha-call-service-button
        >
        ${
          this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]`
              <ha-service-description
                .hass="${this.hass}"
                domain="zha"
                service="set_zigbee_cluster_attribute"
                class="help-text2"
              ></ha-service-description>
            `
            : ""
        }
      </div>
    `;
          }

          async _fetchAttributesForCluster() {
            if (this.selectedNode && this.selectedCluster && this.hass) {
              this._attributes = await Object(
                _data_zha__WEBPACK_IMPORTED_MODULE_11__[
                  "fetchAttributesForCluster"
                ]
              )(
                this.hass,
                this.selectedNode.ieee,
                this.selectedCluster.endpoint_id,
                this.selectedCluster.id,
                this.selectedCluster.type
              );

              this._attributes.sort((a, b) => {
                return a.name.localeCompare(b.name);
              });
            }
          }

          _computeReadAttributeServiceData() {
            if (!this.selectedCluster || !this.selectedNode) {
              return;
            }

            return {
              ieee: this.selectedNode.ieee,
              endpoint_id: this.selectedCluster.endpoint_id,
              cluster_id: this.selectedCluster.id,
              cluster_type: this.selectedCluster.type,
              attribute: this._attributes[this._selectedAttributeIndex].id,
              manufacturer: this._manufacturerCodeOverride
                ? parseInt(this._manufacturerCodeOverride, 10)
                : undefined,
            };
          }

          _computeSetAttributeServiceData() {
            if (!this.selectedCluster || !this.selectedNode) {
              return;
            }

            return {
              ieee: this.selectedNode.ieee,
              endpoint_id: this.selectedCluster.endpoint_id,
              cluster_id: this.selectedCluster.id,
              cluster_type: this.selectedCluster.type,
              attribute: this._attributes[this._selectedAttributeIndex].id,
              value: this._attributeValue,
              manufacturer: this._manufacturerCodeOverride
                ? parseInt(this._manufacturerCodeOverride, 10)
                : undefined,
            };
          }

          _onAttributeValueChanged(value) {
            this._attributeValue = value.detail.value;
            this._setAttributeServiceData = this._computeSetAttributeServiceData();
          }

          _onManufacturerCodeOverrideChanged(value) {
            this._manufacturerCodeOverride = value.detail.value;
            this._setAttributeServiceData = this._computeSetAttributeServiceData();
          }

          async _onGetZigbeeAttributeClick() {
            const data = this._computeReadAttributeServiceData();

            if (data && this.hass) {
              this._attributeValue = await Object(
                _data_zha__WEBPACK_IMPORTED_MODULE_11__["readAttributeValue"]
              )(this.hass, data);
            }
          }

          _onHelpTap() {
            this.showHelp = !this.showHelp;
          }

          _selectedAttributeChanged(event) {
            this._selectedAttributeIndex = event.target.selected;
            this._attributeValue = "";
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_10__["css"]`
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .attribute-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }
        .help-text2 {
          color: grey;
          padding: 16px;
        }
      `,
            ];
          }
        }
        customElements.define("zha-cluster-attributes", ZHAClusterAttributes);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-cluster-commands.ts":
      /*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-cluster-commands.ts ***!
  \*******************************************************/
      /*! exports provided: ZHAClusterCommands */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHAClusterCommands",
          function() {
            return ZHAClusterCommands;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
        );

        class ZHAClusterCommands extends lit_element__WEBPACK_IMPORTED_MODULE_9__[
          "LitElement"
        ] {
          constructor() {
            super();
            this.hass = void 0;
            this.isWide = void 0;
            this.selectedNode = void 0;
            this.selectedCluster = void 0;
            this._showHelp = void 0;
            this._commands = void 0;
            this._selectedCommandIndex = void 0;
            this._manufacturerCodeOverride = void 0;
            this._issueClusterCommandServiceData = void 0;
            this._showHelp = false;
            this._selectedCommandIndex = -1;
            this._commands = [];
          }

          static get properties() {
            return {
              hass: {},
              isWide: {},
              selectedNode: {},
              selectedCluster: {},
              _showHelp: {},
              _commands: {},
              _selectedCommandIndex: {},
              _manufacturerCodeOverride: {},
              _issueClusterCommandServiceData: {},
            };
          }

          updated(changedProperties) {
            if (changedProperties.has("selectedCluster")) {
              this._commands = [];
              this._selectedCommandIndex = -1;

              this._fetchCommandsForCluster();
            }

            super.update(changedProperties);
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>Cluster Commands</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">View and issue cluster commands.</span>

        <ha-card class="content">
          <div class="command-picker">
            <paper-dropdown-menu
              label="Commands of the selected cluster"
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._selectedCommandIndex}"
                @iron-select="${this._selectedCommandChanged}"
              >
                ${this._commands.map(
                  (entry) => lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]`
                    <paper-item
                      >${entry.name +
                        " (id: " +
                        Object(
                          _functions__WEBPACK_IMPORTED_MODULE_12__[
                            "formatAsPaddedHex"
                          ]
                        )(entry.id) +
                        ")"}</paper-item
                    >
                  `
                )}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${
            this._showHelp
              ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]`
                <div class="help-text">Select a command to interact with</div>
              `
              : ""
          }
          ${
            this._selectedCommandIndex !== -1
              ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]`
                <div class="input-text">
                  <paper-input
                    label="Manufacturer code override"
                    type="number"
                    .value="${this._manufacturerCodeOverride}"
                    @value-changed="${this._onManufacturerCodeOverrideChanged}"
                    placeholder="Value"
                  ></paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    .hass="${this.hass}"
                    domain="zha"
                    service="issue_zigbee_cluster_command"
                    .serviceData="${this._issueClusterCommandServiceData}"
                    >Issue Zigbee Command</ha-call-service-button
                  >
                  ${
                    this._showHelp
                      ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]`
                        <ha-service-description
                          .hass="${this.hass}"
                          domain="zha"
                          service="issue_zigbee_cluster_command"
                          class="help-text2"
                        ></ha-service-description>
                      `
                      : ""
                  }
                </div>
              `
              : ""
          }
        </ha-card>
      </ha-config-section>
    `;
          }

          async _fetchCommandsForCluster() {
            if (this.selectedNode && this.selectedCluster && this.hass) {
              this._commands = await Object(
                _data_zha__WEBPACK_IMPORTED_MODULE_10__[
                  "fetchCommandsForCluster"
                ]
              )(
                this.hass,
                this.selectedNode.ieee,
                this.selectedCluster.endpoint_id,
                this.selectedCluster.id,
                this.selectedCluster.type
              );

              this._commands.sort((a, b) => {
                return a.name.localeCompare(b.name);
              });
            }
          }

          _computeIssueClusterCommandServiceData() {
            if (!this.selectedNode || !this.selectedCluster) {
              return;
            }

            return {
              ieee: this.selectedNode.ieee,
              endpoint_id: this.selectedCluster.endpoint_id,
              cluster_id: this.selectedCluster.id,
              cluster_type: this.selectedCluster.type,
              command: this._commands[this._selectedCommandIndex].id,
              command_type: this._commands[this._selectedCommandIndex].type,
            };
          }

          _onManufacturerCodeOverrideChanged(value) {
            this._manufacturerCodeOverride = value.detail.value;
            this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
          }

          _onHelpTap() {
            this._showHelp = !this._showHelp;
          }

          _selectedCommandChanged(event) {
            this._selectedCommandIndex = event.target.selected;
            this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_9__["css"]`
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .command-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .sectionHeader {
          position: relative;
        }

        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }

        .help-text2 {
          color: grey;
          padding: 16px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
      `,
            ];
          }
        }
        customElements.define("zha-cluster-commands", ZHAClusterCommands);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-clusters.ts":
      /*!***********************************************!*\
  !*** ./src/panels/config/zha/zha-clusters.ts ***!
  \***********************************************/
      /*! exports provided: ZHAClusters */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHAClusters",
          function() {
            return ZHAClusters;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
        );

        const computeClusterKey = (cluster) => {
          return `${cluster.name} (Endpoint id: ${
            cluster.endpoint_id
          }, Id: ${Object(
            _functions__WEBPACK_IMPORTED_MODULE_11__["formatAsPaddedHex"]
          )(cluster.id)}, Type: ${cluster.type})`;
        };

        class ZHAClusters extends lit_element__WEBPACK_IMPORTED_MODULE_7__[
          "LitElement"
        ] {
          constructor() {
            super();
            this.hass = void 0;
            this.isWide = void 0;
            this.showHelp = void 0;
            this.selectedDevice = void 0;
            this._selectedClusterIndex = void 0;
            this._clusters = void 0;
            this.showHelp = false;
            this._selectedClusterIndex = -1;
            this._clusters = [];
          }

          static get properties() {
            return {
              hass: {},
              isWide: {},
              showHelp: {},
              selectedDevice: {},
              _selectedClusterIndex: {},
              _clusters: {},
            };
          }

          updated(changedProperties) {
            if (changedProperties.has("selectedDevice")) {
              this._clusters = [];
              this._selectedClusterIndex = -1;
              Object(
                _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"]
              )(this, "zha-cluster-selected", {
                cluster: undefined,
              });

              this._fetchClustersForZhaNode();
            }

            super.update(changedProperties);
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <div class="node-picker">
        <paper-dropdown-menu label="Clusters" class="flex">
          <paper-listbox
            slot="dropdown-content"
            .selected="${this._selectedClusterIndex}"
            @iron-select="${this._selectedClusterChanged}"
          >
            ${this._clusters.map(
              (entry) => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <paper-item>${computeClusterKey(entry)}</paper-item>
              `
            )}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      ${
        this.showHelp
          ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
            <div class="help-text">
              Select cluster to view attributes and commands
            </div>
          `
          : ""
      }
    `;
          }

          async _fetchClustersForZhaNode() {
            if (this.hass) {
              this._clusters = await Object(
                _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                  "fetchClustersForZhaNode"
                ]
              )(this.hass, this.selectedDevice.ieee);

              this._clusters.sort((a, b) => {
                return a.name.localeCompare(b.name);
              });
            }
          }

          _selectedClusterChanged(event) {
            this._selectedClusterIndex = event.target.selected;
            Object(
              _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"]
            )(this, "zha-cluster-selected", {
              cluster: this._clusters[this._selectedClusterIndex],
            });
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .node-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }
      `,
            ];
          }
        }
        customElements.define("zha-clusters", ZHAClusters);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-network.ts":
      /*!**********************************************!*\
  !*** ./src/panels/config/zha/zha-network.ts ***!
  \**********************************************/
      /*! exports provided: ZHANetwork */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHANetwork",
          function() {
            return ZHANetwork;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );

        class ZHANetwork extends lit_element__WEBPACK_IMPORTED_MODULE_6__[
          "LitElement"
        ] {
          constructor() {
            super();
            this.hass = void 0;
            this.isWide = void 0;
            this._showHelp = void 0;
            this._showHelp = false;
          }

          static get properties() {
            return {
              hass: {},
              isWide: {},
              _showHelp: {},
              _joinParams: {},
            };
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div style="position: relative" slot="header">
          <span>Network Management</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">Commands that affect entire network</span>

        <ha-card class="content">
          <div class="card-actions">
            <mwc-button @click=${this._onAddDevicesClick}>
              Add Devices
            </mwc-button>
            ${
              this._showHelp
                ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                  <ha-service-description
                    .hass="${this.hass}"
                    domain="zha"
                    service="permit"
                    class="help-text2"
                  />
                `
                : ""
            }
          </div>
        </ha-card>
      </ha-config-section>
    `;
          }

          _onHelpTap() {
            this._showHelp = !this._showHelp;
          }

          _onAddDevicesClick() {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(
              this,
              "add"
            );
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .help-text2 {
          color: grey;
          padding: 16px;
        }
      `,
            ];
          }
        }
        customElements.define("zha-network", ZHANetwork);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-node.ts":
      /*!*******************************************!*\
  !*** ./src/panels/config/zha/zha-node.ts ***!
  \*******************************************/
      /*! exports provided: ZHANode */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZHANode",
          function() {
            return ZHANode;
          }
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _zha_clusters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./zha-clusters */ "./src/panels/config/zha/zha-clusters.ts"
        );
        /* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../data/zha */ "./src/data/zha.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./functions */ "./src/panels/config/zha/functions.ts"
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

        let ZHANode = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["customElement"])(
              "zha-node"
            ),
          ],
          function(_initialize, _LitElement) {
            class ZHANode extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZHANode,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_showHelp",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_selectedDeviceIndex",

                  value() {
                    return -1;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_selectedDevice",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["property"]
                    )(),
                  ],
                  key: "_nodes",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(ZHANode.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._fetchDevices();
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>Device Management</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">
          Run ZHA commands that affect a single device. Pick a device to see a
          list of available commands. <br /><br />Note: Sleepy (battery powered)
          devices need to be awake when executing commands against them. You can
          generally wake a sleepy device by triggering it. <br /><br />Some
          devices such as Xiaomi sensors have a wake up button that you can
          press at ~5 second intervals that keep devices awake while you
          interact with them.
        </span>
        <ha-card class="content">
          <div class="node-picker">
            <paper-dropdown-menu
              label="Devices"
              class="flex"
              id="zha-device-selector"
            >
              <paper-listbox
                slot="dropdown-content"
                @iron-select="${this._selectedDeviceChanged}"
                .selected="${this._selectedDeviceIndex}"
              >
                ${this._nodes.map(
                  (entry) => lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                    <paper-item
                      >${
                        entry.user_given_name
                          ? entry.user_given_name
                          : entry.name
                      }</paper-item
                    >
                  `
                )}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${
            this._showHelp
              ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <div class="help-text">
                  Select device to view per-device options
                </div>
              `
              : ""
          }
          ${
            this._selectedDeviceIndex !== -1
              ? lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
                <zha-device-card
                  class="card"
                  .hass="${this.hass}"
                  .device="${this._selectedDevice}"
                  .narrow="${!this.isWide}"
                  .showHelp="${this._showHelp}"
                  .showActions="${true}"
                  @zha-device-removed="${this._onDeviceRemoved}"
                  .isJoinPage="${false}"
                ></zha-device-card>
              `
              : ""
          }
          ${this._selectedDevice ? this._renderClusters() : ""}
        </ha-card>
      </ha-config-section>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_renderClusters",
                  value: function _renderClusters() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]`
      <zha-clusters
        .hass="${this.hass}"
        .selectedDevice="${this._selectedDevice}"
        .showHelp="${this._showHelp}"
      ></zha-clusters>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this._showHelp = !this._showHelp;
                  },
                },
                {
                  kind: "method",
                  key: "_selectedDeviceChanged",
                  value: function _selectedDeviceChanged(event) {
                    this._selectedDeviceIndex = event.target.selected;
                    this._selectedDevice = this._nodes[
                      this._selectedDeviceIndex
                    ];
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                        "fireEvent"
                      ]
                    )(this, "zha-node-selected", {
                      node: this._selectedDevice,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_fetchDevices",
                  value: async function _fetchDevices() {
                    this._nodes = (await Object(
                      _data_zha__WEBPACK_IMPORTED_MODULE_13__["fetchDevices"]
                    )(this.hass)).sort(
                      _functions__WEBPACK_IMPORTED_MODULE_15__["sortZHADevices"]
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_onDeviceRemoved",
                  value: function _onDeviceRemoved(event) {
                    this._selectedDeviceIndex = -1;

                    this._nodes.splice(
                      this._nodes.indexOf(event.detail.device),
                      1
                    );

                    this._selectedDevice = undefined;
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                        "fireEvent"
                      ]
                    )(this, "zha-node-selected", {
                      node: this._selectedDevice,
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_14__[
                        "haStyle"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["css"]`
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        .node-info {
          margin-left: 16px;
        }

        .sectionHeader {
          position: relative;
        }

        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .node-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 600px;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
          word-wrap: break-word;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: 6px;
          right: 0;
          color: var(--primary-color);
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_11__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWNvbmZpZ3VyYXRpb24tcGFnZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS9oYS1jb25maWctemhhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYmluZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNsdXN0ZXItYXR0cmlidXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNsdXN0ZXItY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1jbHVzdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLW5ldHdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1ub2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4vemhhLWJpbmRpbmdcIjtcbmltcG9ydCBcIi4vemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi96aGEtY2x1c3Rlci1jb21tYW5kc1wiO1xuaW1wb3J0IFwiLi96aGEtbmV0d29ya1wiO1xuaW1wb3J0IFwiLi96aGEtbm9kZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ2x1c3RlciwgZmV0Y2hCaW5kYWJsZURldmljZXMsIFpIQURldmljZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzb3J0WkhBRGV2aWNlcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgWkhBQ2x1c3RlclNlbGVjdGVkUGFyYW1zLCBaSEFEZXZpY2VTZWxlY3RlZFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ1poYSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZERldmljZT86IFpIQURldmljZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfc2VsZWN0ZWREZXZpY2VcIikpIHtcbiAgICAgIHRoaXMuX2ZldGNoQmluZGFibGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIlppZ2JlZSBIb21lIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPHpoYS1uZXR3b3JrXG4gICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgID48L3poYS1uZXR3b3JrPlxuXG4gICAgICAgIDx6aGEtbm9kZVxuICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIEB6aGEtY2x1c3Rlci1zZWxlY3RlZD1cIiR7dGhpcy5fb25DbHVzdGVyU2VsZWN0ZWR9XCJcbiAgICAgICAgICBAemhhLW5vZGUtc2VsZWN0ZWQ9XCIke3RoaXMuX29uRGV2aWNlU2VsZWN0ZWR9XCJcbiAgICAgICAgPjwvemhhLW5vZGU+XG4gICAgICAgICR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWNsdXN0ZXItYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZE5vZGU9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkQ2x1c3Rlcj1cIiR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyfVwiXG4gICAgICAgICAgICAgID48L3poYS1jbHVzdGVyLWF0dHJpYnV0ZXM+XG5cbiAgICAgICAgICAgICAgPHpoYS1jbHVzdGVyLWNvbW1hbmRzXG4gICAgICAgICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkTm9kZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWRDbHVzdGVyPVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJ9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWNsdXN0ZXItY29tbWFuZHM+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuX3NlbGVjdGVkRGV2aWNlICYmIHRoaXMuX2JpbmRhYmxlRGV2aWNlcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWJpbmRpbmctY29udHJvbFxuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZERldmljZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuYmluZGFibGVEZXZpY2VzPVwiJHt0aGlzLl9iaW5kYWJsZURldmljZXN9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWJpbmRpbmctY29udHJvbD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DbHVzdGVyU2VsZWN0ZWQoXG4gICAgc2VsZWN0ZWRDbHVzdGVyRXZlbnQ6IEhBU1NEb21FdmVudDxaSEFDbHVzdGVyU2VsZWN0ZWRQYXJhbXM+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHNlbGVjdGVkQ2x1c3RlckV2ZW50LmRldGFpbC5jbHVzdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25EZXZpY2VTZWxlY3RlZChcbiAgICBzZWxlY3RlZE5vZGVFdmVudDogSEFTU0RvbUV2ZW50PFpIQURldmljZVNlbGVjdGVkUGFyYW1zPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHNlbGVjdGVkTm9kZUV2ZW50LmRldGFpbC5ub2RlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQmluZGFibGVEZXZpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZERldmljZSAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2JpbmRhYmxlRGV2aWNlcyA9IChhd2FpdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLl9zZWxlY3RlZERldmljZSEuaWVlZVxuICAgICAgKSkuc29ydChzb3J0WkhBRGV2aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbaGFTdHlsZV07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy16aGFcIjogSGFDb25maWdaaGE7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXpoYVwiLCBIYUNvbmZpZ1poYSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBiaW5kRGV2aWNlcywgdW5iaW5kRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEl0ZW1TZWxlY3RlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1iaW5kaW5nLWNvbnRyb2xcIilcbmV4cG9ydCBjbGFzcyBaSEFCaW5kaW5nQ29udHJvbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0ZWREZXZpY2U/OiBaSEFEZXZpY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2JpbmRUYXJnZXRJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuICBwcml2YXRlIF9kZXZpY2VUb0JpbmQ/OiBaSEFEZXZpY2U7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkRGV2aWNlXCIpKSB7XG4gICAgICB0aGlzLl9iaW5kVGFyZ2V0SW5kZXggPSAtMTtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+RGV2aWNlIEJpbmRpbmc8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5CaW5kIGFuZCB1bmJpbmQgZGV2aWNlcy48L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmQtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIkJpbmRhYmxlIERldmljZXNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9iaW5kVGFyZ2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX2JpbmRUYXJnZXRJbmRleENoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5iaW5kYWJsZURldmljZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGRldmljZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtkZXZpY2UudXNlcl9naXZlbl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRldmljZS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGV2aWNlLm5hbWV9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGEgZGV2aWNlIHRvIGlzc3VlIGEgYmluZCBjb21tYW5kLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vbkJpbmREZXZpY2VzQ2xpY2t9XCI+QmluZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHBUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIEJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vblVuYmluZERldmljZXNDbGlja31cIlxuICAgICAgICAgICAgICA+VW5iaW5kPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBVbmJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVGFyZ2V0SW5kZXhDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fZGV2aWNlVG9CaW5kID1cbiAgICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9PT0gLTFcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiB0aGlzLmJpbmRhYmxlRGV2aWNlc1t0aGlzLl9iaW5kVGFyZ2V0SW5kZXhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25CaW5kRGV2aWNlc0NsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5fZGV2aWNlVG9CaW5kICYmIHRoaXMuc2VsZWN0ZWREZXZpY2UpIHtcbiAgICAgIGF3YWl0IGJpbmREZXZpY2VzKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UuaWVlZSxcbiAgICAgICAgdGhpcy5fZGV2aWNlVG9CaW5kLmllZWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25VbmJpbmREZXZpY2VzQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLl9kZXZpY2VUb0JpbmQgJiYgdGhpcy5zZWxlY3RlZERldmljZSkge1xuICAgICAgYXdhaXQgdW5iaW5kRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlLmllZWUsXG4gICAgICAgIHRoaXMuX2RldmljZVRvQmluZC5pZWVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1hbmQtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwVGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWJpbmRpbmctY29udHJvbFwiOiBaSEFCaW5kaW5nQ29udHJvbDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7XG4gIEF0dHJpYnV0ZSxcbiAgQ2x1c3RlcixcbiAgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcixcbiAgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxuICByZWFkQXR0cmlidXRlVmFsdWUsXG4gIFpIQURldmljZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuICBDaGFuZ2VFdmVudCxcbiAgSXRlbVNlbGVjdGVkRXZlbnQsXG4gIFNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgWkhBQ2x1c3RlckF0dHJpYnV0ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIHNob3dIZWxwOiBib29sZWFuO1xuICBwdWJsaWMgc2VsZWN0ZWROb2RlPzogWkhBRGV2aWNlO1xuICBwdWJsaWMgc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlW107XG4gIHByaXZhdGUgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlVmFsdWU/OiBhbnk7XG4gIHByaXZhdGUgX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlU2VydmljZURhdGE/OiBTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ID0gLTE7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgIHRoaXMuX2F0dHJpYnV0ZVZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIHNob3dIZWxwOiB7fSxcbiAgICAgIHNlbGVjdGVkTm9kZToge30sXG4gICAgICBzZWxlY3RlZENsdXN0ZXI6IHt9LFxuICAgICAgX2F0dHJpYnV0ZXM6IHt9LFxuICAgICAgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IHt9LFxuICAgICAgX2F0dHJpYnV0ZVZhbHVlOiB7fSxcbiAgICAgIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU6IHt9LFxuICAgICAgX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkQ2x1c3RlclwiKSkge1xuICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBcIlwiO1xuICAgICAgdGhpcy5fZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcigpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPkNsdXN0ZXIgQXR0cmlidXRlczwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlZpZXcgYW5kIGVkaXQgY2x1c3RlciBhdHRyaWJ1dGVzLjwvc3Bhbj5cblxuICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJBdHRyaWJ1dGVzIG9mIHRoZSBzZWxlY3RlZCBjbHVzdGVyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4fVwiXG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fYXR0cmlidXRlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgPiR7ZW50cnkubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAoaWQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEFzUGFkZGVkSGV4KGVudHJ5LmlkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcIn08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICBTZWxlY3QgYW4gYXR0cmlidXRlIHRvIHZpZXcgb3Igc2V0IGl0cyB2YWx1ZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKVxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJWYWx1ZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9hdHRyaWJ1dGVWYWx1ZX1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9vbkF0dHJpYnV0ZVZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFsdWVcIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJNYW51ZmFjdHVyZXIgY29kZSBvdmVycmlkZVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGV9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fb25NYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGVDaGFuZ2VkfVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fb25HZXRaaWdiZWVBdHRyaWJ1dGVDbGlja31cIlxuICAgICAgICAgID5HZXQgWmlnYmVlIEF0dHJpYnV0ZTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dDJcIj5cbiAgICAgICAgICAgICAgICBHZXQgdGhlIHZhbHVlIGZvciB0aGUgc2VsZWN0ZWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICBzZXJ2aWNlPVwic2V0X3ppZ2JlZV9jbHVzdGVyX2F0dHJpYnV0ZVwiXG4gICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9zZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YX1cIlxuICAgICAgICAgID5TZXQgWmlnYmVlIEF0dHJpYnV0ZTwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3ppZ2JlZV9jbHVzdGVyX2F0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHQyXCJcbiAgICAgICAgICAgICAgPjwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgJiYgdGhpcy5zZWxlY3RlZENsdXN0ZXIgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXdhaXQgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcihcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZSEuaWVlZSxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmVuZHBvaW50X2lkLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuaWQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS50eXBlXG4gICAgICApO1xuICAgICAgdGhpcy5fYXR0cmlidXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpOlxuICAgIHwgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4gICAgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZENsdXN0ZXIgfHwgIXRoaXMuc2VsZWN0ZWROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZWVlOiB0aGlzLnNlbGVjdGVkTm9kZSEuaWVlZSxcbiAgICAgIGVuZHBvaW50X2lkOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuZW5kcG9pbnRfaWQsXG4gICAgICBjbHVzdGVyX2lkOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuaWQsXG4gICAgICBjbHVzdGVyX3R5cGU6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS50eXBlLFxuICAgICAgYXR0cmlidXRlOiB0aGlzLl9hdHRyaWJ1dGVzW3RoaXMuX3NlbGVjdGVkQXR0cmlidXRlSW5kZXhdLmlkLFxuICAgICAgbWFudWZhY3R1cmVyOiB0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGVcbiAgICAgICAgPyBwYXJzZUludCh0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGUgYXMgc3RyaW5nLCAxMClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpOlxuICAgIHwgU2V0QXR0cmlidXRlU2VydmljZURhdGFcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkQ2x1c3RlciB8fCAhdGhpcy5zZWxlY3RlZE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGllZWU6IHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgZW5kcG9pbnRfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgIGNsdXN0ZXJfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgIGNsdXN0ZXJfdHlwZTogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGUsXG4gICAgICBhdHRyaWJ1dGU6IHRoaXMuX2F0dHJpYnV0ZXNbdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleF0uaWQsXG4gICAgICB2YWx1ZTogdGhpcy5fYXR0cmlidXRlVmFsdWUsXG4gICAgICBtYW51ZmFjdHVyZXI6IHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZVxuICAgICAgICA/IHBhcnNlSW50KHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZSBhcyBzdHJpbmcsIDEwKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfb25BdHRyaWJ1dGVWYWx1ZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhID0gdGhpcy5fY29tcHV0ZVNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSA9IHRoaXMuX2NvbXB1dGVTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25HZXRaaWdiZWVBdHRyaWJ1dGVDbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY29tcHV0ZVJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpO1xuICAgIGlmIChkYXRhICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBhd2FpdCByZWFkQXR0cmlidXRlVmFsdWUodGhpcy5oYXNzLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SGVscCA9ICF0aGlzLnNob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRBdHRyaWJ1dGVDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQXR0cmlidXRlSW5kZXggPSBldmVudC50YXJnZXQhLnNlbGVjdGVkO1xuICAgIHRoaXMuX2F0dHJpYnV0ZVZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQyIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jbHVzdGVyLWF0dHJpYnV0ZXNcIjogWkhBQ2x1c3RlckF0dHJpYnV0ZXM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiLCBaSEFDbHVzdGVyQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQge1xuICBDbHVzdGVyLFxuICBDb21tYW5kLFxuICBmZXRjaENvbW1hbmRzRm9yQ2x1c3RlcixcbiAgWkhBRGV2aWNlLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7XG4gIENoYW5nZUV2ZW50LFxuICBJc3N1ZUNvbW1hbmRTZXJ2aWNlRGF0YSxcbiAgSXRlbVNlbGVjdGVkRXZlbnQsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBaSEFDbHVzdGVyQ29tbWFuZHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIHNlbGVjdGVkTm9kZT86IFpIQURldmljZTtcbiAgcHVibGljIHNlbGVjdGVkQ2x1c3Rlcj86IENsdXN0ZXI7XG4gIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuO1xuICBwcml2YXRlIF9jb21tYW5kczogQ29tbWFuZFtdO1xuICBwcml2YXRlIF9zZWxlY3RlZENvbW1hbmRJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YT86IElzc3VlQ29tbWFuZFNlcnZpY2VEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleCA9IC0xO1xuICAgIHRoaXMuX2NvbW1hbmRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGlzV2lkZToge30sXG4gICAgICBzZWxlY3RlZE5vZGU6IHt9LFxuICAgICAgc2VsZWN0ZWRDbHVzdGVyOiB7fSxcbiAgICAgIF9zaG93SGVscDoge30sXG4gICAgICBfY29tbWFuZHM6IHt9LFxuICAgICAgX3NlbGVjdGVkQ29tbWFuZEluZGV4OiB7fSxcbiAgICAgIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU6IHt9LFxuICAgICAgX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YToge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzZWxlY3RlZENsdXN0ZXJcIikpIHtcbiAgICAgIHRoaXMuX2NvbW1hbmRzID0gW107XG4gICAgICB0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fZmV0Y2hDb21tYW5kc0ZvckNsdXN0ZXIoKTtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+Q2x1c3RlciBDb21tYW5kczwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlZpZXcgYW5kIGlzc3VlIGNsdXN0ZXIgY29tbWFuZHMuPC9zcGFuPlxuXG4gICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tYW5kLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb21tYW5kcyBvZiB0aGUgc2VsZWN0ZWQgY2x1c3RlclwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX3NlbGVjdGVkQ29tbWFuZENoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fY29tbWFuZHMubWFwKFxuICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgID4ke2VudHJ5Lm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKGlkOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRBc1BhZGRlZEhleChlbnRyeS5pZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJ9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5TZWxlY3QgYSBjb21tYW5kIHRvIGludGVyYWN0IHdpdGg8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7dGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXggIT09IC0xXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hbnVmYWN0dXJlciBjb2RlIG92ZXJyaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlfVwiXG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJpc3N1ZV96aWdiZWVfY2x1c3Rlcl9jb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGF9XCJcbiAgICAgICAgICAgICAgICAgICAgPklzc3VlIFppZ2JlZSBDb21tYW5kPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cImlzc3VlX3ppZ2JlZV9jbHVzdGVyX2NvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtdGV4dDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENvbW1hbmRzRm9yQ2x1c3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgJiYgdGhpcy5zZWxlY3RlZENsdXN0ZXIgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9jb21tYW5kcyA9IGF3YWl0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuZW5kcG9pbnRfaWQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGVcbiAgICAgICk7XG4gICAgICB0aGlzLl9jb21tYW5kcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUlzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YSgpOlxuICAgIHwgSXNzdWVDb21tYW5kU2VydmljZURhdGFcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkTm9kZSB8fCAhdGhpcy5zZWxlY3RlZENsdXN0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGllZWU6IHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgZW5kcG9pbnRfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgIGNsdXN0ZXJfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgIGNsdXN0ZXJfdHlwZTogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGUsXG4gICAgICBjb21tYW5kOiB0aGlzLl9jb21tYW5kc1t0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleF0uaWQsXG4gICAgICBjb21tYW5kX3R5cGU6IHRoaXMuX2NvbW1hbmRzW3RoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4XS50eXBlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgICB0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEgPSB0aGlzLl9jb21wdXRlSXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENvbW1hbmRDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4ID0gZXZlbnQudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICB0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEgPSB0aGlzLl9jb21wdXRlSXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tYW5kLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQyIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtY2x1c3Rlci1jb21tYW5kc1wiOiBaSEFDbHVzdGVyQ29tbWFuZHM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiemhhLWNsdXN0ZXItY29tbWFuZHNcIiwgWkhBQ2x1c3RlckNvbW1hbmRzKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBDbHVzdGVyLCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSwgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBJdGVtU2VsZWN0ZWRFdmVudCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiemhhLWNsdXN0ZXItc2VsZWN0ZWRcIjoge1xuICAgICAgY2x1c3Rlcj86IENsdXN0ZXI7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG5cbmV4cG9ydCBjbGFzcyBaSEFDbHVzdGVycyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBwdWJsaWMgc2hvd0hlbHA6IGJvb2xlYW47XG4gIHB1YmxpYyBzZWxlY3RlZERldmljZT86IFpIQURldmljZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVySW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY2x1c3RlcnM6IENsdXN0ZXJbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleCA9IC0xO1xuICAgIHRoaXMuX2NsdXN0ZXJzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGlzV2lkZToge30sXG4gICAgICBzaG93SGVscDoge30sXG4gICAgICBzZWxlY3RlZERldmljZToge30sXG4gICAgICBfc2VsZWN0ZWRDbHVzdGVySW5kZXg6IHt9LFxuICAgICAgX2NsdXN0ZXJzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkRGV2aWNlXCIpKSB7XG4gICAgICB0aGlzLl9jbHVzdGVycyA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRDbHVzdGVySW5kZXggPSAtMTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInpoYS1jbHVzdGVyLXNlbGVjdGVkXCIsIHtcbiAgICAgICAgY2x1c3RlcjogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9mZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSgpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtcGlja2VyXCI+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiQ2x1c3RlcnNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleH1cIlxuICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJDaGFuZ2VkfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLl9jbHVzdGVycy5tYXAoXG4gICAgICAgICAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2NvbXB1dGVDbHVzdGVyS2V5KGVudHJ5KX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBjbHVzdGVyIHRvIHZpZXcgYXR0cmlidXRlcyBhbmQgY29tbWFuZHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9jbHVzdGVycyA9IGF3YWl0IGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UhLmllZWVcbiAgICAgICk7XG4gICAgICB0aGlzLl9jbHVzdGVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVyQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiemhhLWNsdXN0ZXItc2VsZWN0ZWRcIiwge1xuICAgICAgY2x1c3RlcjogdGhpcy5fY2x1c3RlcnNbdGhpcy5fc2VsZWN0ZWRDbHVzdGVySW5kZXhdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vZGUtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jbHVzdGVyXCI6IFpIQUNsdXN0ZXJzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInpoYS1jbHVzdGVyc1wiLCBaSEFDbHVzdGVycyk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBaSEFOZXR3b3JrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIF9zaG93SGVscDoge30sXG4gICAgICBfam9pblBhcmFtczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5OZXR3b3JrIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5Db21tYW5kcyB0aGF0IGFmZmVjdCBlbnRpcmUgbmV0d29yazwvc3Bhbj5cblxuICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vbkFkZERldmljZXNDbGlja30+XG4gICAgICAgICAgICAgIEFkZCBEZXZpY2VzXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInBlcm1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0MlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9vbkFkZERldmljZXNDbGljaygpIHtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBcImFkZFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtc2VydmljZS1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dDIge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLW5ldHdvcmtcIjogWkhBTmV0d29yaztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6aGEtbmV0d29ya1wiLCBaSEFOZXR3b3JrKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4vemhhLWNsdXN0ZXJzXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2UtY2FyZFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGZldGNoRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNvcnRaSEFEZXZpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBJdGVtU2VsZWN0ZWRFdmVudCwgWkhBRGV2aWNlUmVtb3ZlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiOiB7XG4gICAgICBub2RlPzogWkhBRGV2aWNlO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtbm9kZVwiKVxuZXhwb3J0IGNsYXNzIFpIQU5vZGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0hlbHA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkRGV2aWNlPzogWkhBRGV2aWNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub2RlczogWkhBRGV2aWNlW10gPSBbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaERldmljZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+RGV2aWNlIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICBSdW4gWkhBIGNvbW1hbmRzIHRoYXQgYWZmZWN0IGEgc2luZ2xlIGRldmljZS4gUGljayBhIGRldmljZSB0byBzZWUgYVxuICAgICAgICAgIGxpc3Qgb2YgYXZhaWxhYmxlIGNvbW1hbmRzLiA8YnIgLz48YnIgLz5Ob3RlOiBTbGVlcHkgKGJhdHRlcnkgcG93ZXJlZClcbiAgICAgICAgICBkZXZpY2VzIG5lZWQgdG8gYmUgYXdha2Ugd2hlbiBleGVjdXRpbmcgY29tbWFuZHMgYWdhaW5zdCB0aGVtLiBZb3UgY2FuXG4gICAgICAgICAgZ2VuZXJhbGx5IHdha2UgYSBzbGVlcHkgZGV2aWNlIGJ5IHRyaWdnZXJpbmcgaXQuIDxiciAvPjxiciAvPlNvbWVcbiAgICAgICAgICBkZXZpY2VzIHN1Y2ggYXMgWGlhb21pIHNlbnNvcnMgaGF2ZSBhIHdha2UgdXAgYnV0dG9uIHRoYXQgeW91IGNhblxuICAgICAgICAgIHByZXNzIGF0IH41IHNlY29uZCBpbnRlcnZhbHMgdGhhdCBrZWVwIGRldmljZXMgYXdha2Ugd2hpbGUgeW91XG4gICAgICAgICAgaW50ZXJhY3Qgd2l0aCB0aGVtLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZXZpY2VzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgaWQ9XCJ6aGEtZGV2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZERldmljZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXh9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbm9kZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgID4ke2VudHJ5LnVzZXJfZ2l2ZW5fbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlbnRyeS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cnkubmFtZX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGRldmljZSB0byB2aWV3IHBlci1kZXZpY2Ugb3B0aW9uc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZERldmljZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAuZGV2aWNlPVwiJHt0aGlzLl9zZWxlY3RlZERldmljZX1cIlxuICAgICAgICAgICAgICAgICAgLm5hcnJvdz1cIiR7IXRoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgICAuc2hvd0hlbHA9XCIke3RoaXMuX3Nob3dIZWxwfVwiXG4gICAgICAgICAgICAgICAgICAuc2hvd0FjdGlvbnM9XCIke3RydWV9XCJcbiAgICAgICAgICAgICAgICAgIEB6aGEtZGV2aWNlLXJlbW92ZWQ9XCIke3RoaXMuX29uRGV2aWNlUmVtb3ZlZH1cIlxuICAgICAgICAgICAgICAgICAgLmlzSm9pblBhZ2U9XCIke2ZhbHNlfVwiXG4gICAgICAgICAgICAgICAgPjwvemhhLWRldmljZS1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZERldmljZSA/IHRoaXMuX3JlbmRlckNsdXN0ZXJzKCkgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDbHVzdGVycygpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8emhhLWNsdXN0ZXJzXG4gICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgLnNlbGVjdGVkRGV2aWNlPVwiJHt0aGlzLl9zZWxlY3RlZERldmljZX1cIlxuICAgICAgICAuc2hvd0hlbHA9XCIke3RoaXMuX3Nob3dIZWxwfVwiXG4gICAgICA+PC96aGEtY2x1c3RlcnM+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkRGV2aWNlQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZUluZGV4ID0gZXZlbnQhLnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2UgPSB0aGlzLl9ub2Rlc1t0aGlzLl9zZWxlY3RlZERldmljZUluZGV4XTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiLCB7IG5vZGU6IHRoaXMuX3NlbGVjdGVkRGV2aWNlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEZXZpY2VzKCkge1xuICAgIHRoaXMuX25vZGVzID0gKGF3YWl0IGZldGNoRGV2aWNlcyh0aGlzLmhhc3MhKSkuc29ydChzb3J0WkhBRGV2aWNlcyk7XG4gIH1cblxuICBwcml2YXRlIF9vbkRldmljZVJlbW92ZWQoZXZlbnQ6IFpIQURldmljZVJlbW92ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXggPSAtMTtcbiAgICB0aGlzLl9ub2Rlcy5zcGxpY2UodGhpcy5fbm9kZXMuaW5kZXhPZihldmVudC5kZXRhaWwhLmRldmljZSEpLCAxKTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiLCB7IG5vZGU6IHRoaXMuX3NlbGVjdGVkRGV2aWNlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDEgMCAzMDBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLW5vZGVcIjogWkhBTm9kZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBMUZBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQWVBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFiQTtBQWlCQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFOQTs7QUE5QkE7QUEwQ0E7QUF6REE7QUFBQTtBQUFBO0FBQUE7QUE4REE7QUFDQTtBQS9EQTtBQUFBO0FBQUE7QUFBQTtBQW9FQTtBQUNBO0FBQ0E7QUF0RUE7QUFBQTtBQUFBO0FBQUE7QUF5RUE7QUFDQTtBQUlBO0FBQ0E7QUEvRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtGQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQTRGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFHQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUNBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUVBOztBQUdBOztBQUhBOzs7O0FBWUE7Ozs7QUFBQTs7QUFRQTtBQUNBOzs7O0FBQUE7QUFPQTs7O0FBR0E7Ozs7QUFBQTs7OztBQXBEQTtBQStEQTtBQWhGQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTtBQUNBO0FBSUE7QUF4RkE7QUFBQTtBQUFBO0FBQUE7QUEyRkE7QUFDQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQStGQTtBQUNBO0FBS0E7QUFDQTtBQXRHQTtBQUFBO0FBQUE7QUFBQTtBQXlHQTtBQUNBO0FBS0E7QUFDQTtBQWhIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1RUE7QUExTEE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFRQTtBQUVBO0FBT0E7QUFZQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBSEE7Ozs7QUFhQTs7OztBQUFBO0FBT0E7OztBQTVDQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOzs7O0FBQUE7O0FBUUE7OztBQUdBOzs7QUFHQTs7QUFHQTs7Ozs7QUFIQTs7QUFyQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0VBO0FBQ0E7QUE5U0E7QUFzVEE7Ozs7Ozs7Ozs7OztBQzVWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBTUE7QUFFQTtBQU9BO0FBV0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7QUFFQTs7QUFHQTs7QUFIQTs7OztBQWFBOztBQUFBO0FBS0E7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBOzs7QUFHQTs7QUFHQTs7Ozs7QUFIQTs7QUFuQkE7OztBQTFDQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThFQTtBQUNBO0FBdFBBO0FBOFBBOzs7Ozs7Ozs7Ozs7QUNqU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFFQTtBQUZBOzs7O0FBUUE7Ozs7QUFBQTtBQWhCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQ0E7QUFDQTtBQXZIQTtBQStIQTs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7O0FBUUE7OztBQUdBOztBQUdBOzs7OztBQUhBOzs7O0FBakJBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0NBO0FBQ0E7QUFyR0E7QUE2R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFhQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBSEE7Ozs7QUFZQTs7OztBQUFBO0FBT0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZBO0FBY0E7OztBQWhFQTtBQW9FQTtBQWxGQTtBQUFBO0FBQUE7QUFBQTtBQXFGQTs7QUFFQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQStGQTtBQUNBO0FBaEdBO0FBQUE7QUFBQTtBQUFBO0FBbUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXRHQTtBQUFBO0FBQUE7QUFBQTtBQXlHQTtBQUNBO0FBMUdBO0FBQUE7QUFBQTtBQUFBO0FBNkdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWpIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStFQTtBQW5NQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
