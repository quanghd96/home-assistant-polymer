(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states",
  ],
  {
    /***/ "./src/components/entity/ha-entity-toggle.ts":
      /*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/const */ "./src/common/const.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../data/haptics */ "./src/data/haptics.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
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

        const isOn = (stateObj) =>
          stateObj !== undefined &&
          !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(
            stateObj.state
          );

        let HaEntityToggle = _decorate(
          null,
          function(_initialize, _LitElement) {
            class HaEntityToggle extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaEntityToggle,
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
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["property"]
                    )(),
                  ],
                  key: "stateObj",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["property"]
                    )(),
                  ],
                  key: "_isOn",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  // hass is not a property so that we only re-render on stateObj changes
                  value: function render() {
                    if (!this.stateObj) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
        <paper-toggle-button disabled></paper-toggle-button>
      `;
                    }

                    if (this.stateObj.attributes.assumed_state) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
        <paper-icon-button
          aria-label=${`Turn ${Object(
            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ]
          )(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(
            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ]
          )(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <paper-toggle-button
        aria-label=${`Toggle ${Object(
          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ]
        )(this.stateObj)} ${this._isOn ? "off" : "on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></paper-toggle-button>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaEntityToggle.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("click", (ev) =>
                      ev.stopPropagation()
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    if (changedProps.has("stateObj")) {
                      this._isOn = isOn(this.stateObj);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_toggleChanged",
                  value: function _toggleChanged(ev) {
                    const newVal = ev.target.checked;

                    if (newVal !== this._isOn) {
                      this._callService(newVal);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_turnOn",
                  value: function _turnOn() {
                    this._callService(true);
                  },
                },
                {
                  kind: "method",
                  key: "_turnOff",
                  value: function _turnOff() {
                    this._callService(false);
                  }, // We will force a re-render after a successful call to re-sync the toggle
                  // with the state. It will be out of sync if our service call did not
                  // result in the entity to be turned on. Since the state is not changing,
                  // the resync is not called automatic.
                },
                {
                  kind: "method",
                  key: "_callService",
                  value: async function _callService(turnOn) {
                    if (!this.hass || !this.stateObj) {
                      return;
                    }

                    Object(
                      _data_haptics__WEBPACK_IMPORTED_MODULE_5__[
                        "forwardHaptic"
                      ]
                    )("light");
                    const stateDomain = Object(
                      _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ]
                    )(this.stateObj);
                    let serviceDomain;
                    let service;

                    if (stateDomain === "lock") {
                      serviceDomain = "lock";
                      service = turnOn ? "unlock" : "lock";
                    } else if (stateDomain === "cover") {
                      serviceDomain = "cover";
                      service = turnOn ? "open_cover" : "close_cover";
                    } else if (stateDomain === "group") {
                      serviceDomain = "homeassistant";
                      service = turnOn ? "turn_on" : "turn_off";
                    } else {
                      serviceDomain = stateDomain;
                      service = turnOn ? "turn_on" : "turn_off";
                    }

                    const currentState = this.stateObj; // Optimistic update.

                    this._isOn = turnOn;
                    await this.hass.callService(serviceDomain, service, {
                      entity_id: this.stateObj.entity_id,
                    });
                    setTimeout(async () => {
                      // If after 2 seconds we have not received a state update
                      // reset the switch to it's original state.
                      if (this.stateObj === currentState) {
                        this._isOn = isOn(this.stateObj);
                      }
                    }, 2000);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      paper-toggle-button {
        cursor: pointer;
        --paper-toggle-button-label-spacing: 0;
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]
        );

        customElements.define("ha-entity-toggle", HaEntityToggle);

        /***/
      },

    /***/ "./src/components/ha-icon.ts":
      /*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
      /*! exports provided: HaIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIcon",
          function() {
            return HaIcon;
          }
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        const ironIconClass = customElements.get("iron-icon");
        let loaded = false;
        class HaIcon extends ironIconClass {
          constructor(...args) {
            super(...args);
            this._iconsetName = void 0;
          }

          listen(node, eventName, methodName) {
            super.listen(node, eventName, methodName);

            if (!loaded && this._iconsetName === "mdi") {
              loaded = true;
              __webpack_require__
                .e(/*! import() | mdi-icons */ "mdi-icons")
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"
                  )
                );
            }
          }
        }
        customElements.define("ha-icon", HaIcon);

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
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcblxuaW1wb3J0IHsgU1RBVEVTX09GRiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBmb3J3YXJkSGFwdGljIH0gZnJvbSBcIi4uLy4uL2RhdGEvaGFwdGljc1wiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNvbnN0IGlzT24gPSAoc3RhdGVPYmo/OiBIYXNzRW50aXR5KSA9PlxuICBzdGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmICFTVEFURVNfT0ZGLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKTtcblxuY2xhc3MgSGFFbnRpdHlUb2dnbGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gaGFzcyBpcyBub3QgYSBwcm9wZXJ0eSBzbyB0aGF0IHdlIG9ubHkgcmUtcmVuZGVyIG9uIHN0YXRlT2JqIGNoYW5nZXNcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pc09uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uIGRpc2FibGVkPjwvcGFwZXItdG9nZ2xlLWJ1dHRvbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb2ZmYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaC1vZmZcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3R1cm5PZmZ9XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0keyF0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb25gfVxuICAgICAgICAgIGljb249XCJoYXNzOmZsYXNoXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT259XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0ke3RoaXMuX2lzT259XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9JHtgVG9nZ2xlICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gJHtcbiAgICAgICAgICB0aGlzLl9pc09uID8gXCJvZmZcIiA6IFwib25cIlxuICAgICAgICB9YH1cbiAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9pc09ufVxuICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdG9nZ2xlQ2hhbmdlZH1cbiAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiBldi5zdG9wUHJvcGFnYXRpb24oKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJzdGF0ZU9ialwiKSkge1xuICAgICAgdGhpcy5faXNPbiA9IGlzT24odGhpcy5zdGF0ZU9iaik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5faXNPbikge1xuICAgICAgdGhpcy5fY2FsbFNlcnZpY2UobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90dXJuT24oKSB7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2UodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF90dXJuT2ZmKCkge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKGZhbHNlKTtcbiAgfVxuXG4gIC8vIFdlIHdpbGwgZm9yY2UgYSByZS1yZW5kZXIgYWZ0ZXIgYSBzdWNjZXNzZnVsIGNhbGwgdG8gcmUtc3luYyB0aGUgdG9nZ2xlXG4gIC8vIHdpdGggdGhlIHN0YXRlLiBJdCB3aWxsIGJlIG91dCBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdFxuICAvLyByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWQgb24uIFNpbmNlIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdpbmcsXG4gIC8vIHRoZSByZXN5bmMgaXMgbm90IGNhbGxlZCBhdXRvbWF0aWMuXG4gIHByaXZhdGUgYXN5bmMgX2NhbGxTZXJ2aWNlKHR1cm5Pbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcndhcmRIYXB0aWMoXCJsaWdodFwiKTtcbiAgICBjb25zdCBzdGF0ZURvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLnN0YXRlT2JqKTtcbiAgICBsZXQgc2VydmljZURvbWFpbjtcbiAgICBsZXQgc2VydmljZTtcblxuICAgIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImxvY2tcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInVubG9ja1wiIDogXCJsb2NrXCI7XG4gICAgfSBlbHNlIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJjb3ZlclwiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwib3Blbl9jb3ZlclwiIDogXCJjbG9zZV9jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVEb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwiaG9tZWFzc2lzdGFudFwiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidHVybl9vblwiIDogXCJ0dXJuX29mZlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gc3RhdGVEb21haW47XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ0dXJuX29uXCIgOiBcInR1cm5fb2ZmXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZU9iajtcblxuICAgIC8vIE9wdGltaXN0aWMgdXBkYXRlLlxuICAgIHRoaXMuX2lzT24gPSB0dXJuT247XG5cbiAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFNlcnZpY2Uoc2VydmljZURvbWFpbiwgc2VydmljZSwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gSWYgYWZ0ZXIgMiBzZWNvbmRzIHdlIGhhdmUgbm90IHJlY2VpdmVkIGEgc3RhdGUgdXBkYXRlXG4gICAgICAvLyByZXNldCB0aGUgc3dpdGNoIHRvIGl0J3Mgb3JpZ2luYWwgc3RhdGUuXG4gICAgICBpZiAodGhpcy5zdGF0ZU9iaiA9PT0gY3VycmVudFN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2lzT24gPSBpc09uKHRoaXMuc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtaW4td2lkdGg6IDM4cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1wYXBlci1pY29uLWJ1dHRvbi1pbmFjdGl2ZS1jb2xvcixcbiAgICAgICAgICB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XG4gICAgICB9XG4gICAgICBwYXBlci1pY29uLWJ1dHRvbltzdGF0ZS1hY3RpdmVdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWljb24tYnV0dG9uLWFjdGl2ZS1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgICAgcGFwZXItdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLS1wYXBlci10b2dnbGUtYnV0dG9uLWxhYmVsLXNwYWNpbmc6IDA7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggNXB4O1xuICAgICAgICBtYXJnaW46IC00cHggLTVweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS10b2dnbGVcIiwgSGFFbnRpdHlUb2dnbGUpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFHQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBWEE7QUFjQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBOztBQU5BO0FBU0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBOzs7QUF4SUE7QUFDQTtBQTBJQTs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
