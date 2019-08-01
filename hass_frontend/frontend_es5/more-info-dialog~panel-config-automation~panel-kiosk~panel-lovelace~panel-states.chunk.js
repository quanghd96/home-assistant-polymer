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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n      <paper-toggle-button\n        aria-label=",
            "\n        .checked=",
            "\n        @change=",
            "\n      ></paper-toggle-button>\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n        <paper-icon-button\n          aria-label=",
            '\n          icon="hass:flash-off"\n          @click=',
            "\n          ?state-active=",
            "\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=",
            '\n          icon="hass:flash"\n          @click=',
            "\n          ?state-active=",
            "\n        ></paper-icon-button>\n      ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n        <paper-toggle-button disabled></paper-toggle-button>\n      ",
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

        var isOn = function isOn(stateObj) {
          return (
            stateObj !== undefined &&
            !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(
              stateObj.state
            )
          );
        };

        var HaEntityToggle = _decorate(
          null,
          function(_initialize, _LitElement) {
            var HaEntityToggle =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaEntityToggle, _LitElement2);

                function HaEntityToggle() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaEntityToggle);

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
                      HaEntityToggle
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaEntityToggle;
              })(_LitElement);

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
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  // hass is not a property so that we only re-render on stateObj changes
                  value: function render() {
                    if (!this.stateObj) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                      )(_templateObject());
                    }

                    if (this.stateObj.attributes.assumed_state) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                      )(
                        _templateObject2(),
                        "Turn ".concat(
                          Object(
                            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ]
                          )(this.stateObj),
                          " off"
                        ),
                        this._turnOff,
                        !this._isOn,
                        "Turn ".concat(
                          Object(
                            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ]
                          )(this.stateObj),
                          " on"
                        ),
                        this._turnOn,
                        this._isOn
                      );
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                    )(
                      _templateObject3(),
                      "Toggle "
                        .concat(
                          Object(
                            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ]
                          )(this.stateObj),
                          " "
                        )
                        .concat(this._isOn ? "off" : "on"),
                      this._isOn,
                      this._toggleChanged
                    );
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

                    this.addEventListener("click", function(ev) {
                      return ev.stopPropagation();
                    });
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
                    var newVal = ev.target.checked;

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
                  value: (function() {
                    var _callService2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(turnOn) {
                        var _this2 = this;

                        var stateDomain, serviceDomain, service, currentState;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  if (!(!this.hass || !this.stateObj)) {
                                    _context2.next = 2;
                                    break;
                                  }

                                  return _context2.abrupt("return");

                                case 2:
                                  Object(
                                    _data_haptics__WEBPACK_IMPORTED_MODULE_5__[
                                      "forwardHaptic"
                                    ]
                                  )("light");
                                  stateDomain = Object(
                                    _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__[
                                      "default"
                                    ]
                                  )(this.stateObj);

                                  if (stateDomain === "lock") {
                                    serviceDomain = "lock";
                                    service = turnOn ? "unlock" : "lock";
                                  } else if (stateDomain === "cover") {
                                    serviceDomain = "cover";
                                    service = turnOn
                                      ? "open_cover"
                                      : "close_cover";
                                  } else if (stateDomain === "group") {
                                    serviceDomain = "homeassistant";
                                    service = turnOn ? "turn_on" : "turn_off";
                                  } else {
                                    serviceDomain = stateDomain;
                                    service = turnOn ? "turn_on" : "turn_off";
                                  }

                                  currentState = this.stateObj; // Optimistic update.

                                  this._isOn = turnOn;
                                  _context2.next = 9;
                                  return this.hass.callService(
                                    serviceDomain,
                                    service,
                                    {
                                      entity_id: this.stateObj.entity_id,
                                    }
                                  );

                                case 9:
                                  setTimeout(
                                    /*#__PURE__*/
                                    _asyncToGenerator(
                                      /*#__PURE__*/
                                      regeneratorRuntime.mark(
                                        function _callee() {
                                          return regeneratorRuntime.wrap(
                                            function _callee$(_context) {
                                              while (1) {
                                                switch (
                                                  (_context.prev =
                                                    _context.next)
                                                ) {
                                                  case 0:
                                                    // If after 2 seconds we have not received a state update
                                                    // reset the switch to it's original state.
                                                    if (
                                                      _this2.stateObj ===
                                                      currentState
                                                    ) {
                                                      _this2._isOn = isOn(
                                                        _this2.stateObj
                                                      );
                                                    }

                                                  case 1:
                                                  case "end":
                                                    return _context.stop();
                                                }
                                              }
                                            },
                                            _callee
                                          );
                                        }
                                      )
                                    ),
                                    2000
                                  );

                                case 10:
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

                    function _callService(_x) {
                      return _callService2.apply(this, arguments);
                    }

                    return _callService;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]
                    )(_templateObject4());
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
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5cbmltcG9ydCB7IFNUQVRFU19PRkYgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZm9yd2FyZEhhcHRpYyB9IGZyb20gXCIuLi8uLi9kYXRhL2hhcHRpY3NcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jb25zdCBpc09uID0gKHN0YXRlT2JqPzogSGFzc0VudGl0eSkgPT5cbiAgc3RhdGVPYmogIT09IHVuZGVmaW5lZCAmJiAhU1RBVEVTX09GRi5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSk7XG5cbmNsYXNzIEhhRW50aXR5VG9nZ2xlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIC8vIGhhc3MgaXMgbm90IGEgcHJvcGVydHkgc28gdGhhdCB3ZSBvbmx5IHJlLXJlbmRlciBvbiBzdGF0ZU9iaiBjaGFuZ2VzXG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogSGFzc0VudGl0eTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaXNPbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvbiBkaXNhYmxlZD48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9mZmB9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Zmxhc2gtb2ZmXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT2ZmfVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHshdGhpcy5faXNPbn1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9uYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaFwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdHVybk9ufVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHt0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPSR7YFRvZ2dsZSAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9ICR7XG4gICAgICAgICAgdGhpcy5faXNPbiA/IFwib2ZmXCIgOiBcIm9uXCJcbiAgICAgICAgfWB9XG4gICAgICAgIC5jaGVja2VkPSR7dGhpcy5faXNPbn1cbiAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RvZ2dsZUNoYW5nZWR9XG4gICAgICA+PC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHRoaXMuX2lzT24gPSBpc09uKHRoaXMuc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuX2lzT24pIHtcbiAgICAgIHRoaXMuX2NhbGxTZXJ2aWNlKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9uKCkge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9mZigpIHtcbiAgICB0aGlzLl9jYWxsU2VydmljZShmYWxzZSk7XG4gIH1cblxuICAvLyBXZSB3aWxsIGZvcmNlIGEgcmUtcmVuZGVyIGFmdGVyIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlLXN5bmMgdGhlIHRvZ2dsZVxuICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgLy8gcmVzdWx0IGluIHRoZSBlbnRpdHkgdG8gYmUgdHVybmVkIG9uLiBTaW5jZSB0aGUgc3RhdGUgaXMgbm90IGNoYW5naW5nLFxuICAvLyB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZSh0dXJuT24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG4gICAgY29uc3Qgc3RhdGVEb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4odGhpcy5zdGF0ZU9iaik7XG4gICAgbGV0IHNlcnZpY2VEb21haW47XG4gICAgbGV0IHNlcnZpY2U7XG5cbiAgICBpZiAoc3RhdGVEb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJsb2NrXCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ1bmxvY2tcIiA6IFwibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVEb21haW4gPT09IFwiY292ZXJcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwiY292ZXJcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcIm9wZW5fY292ZXJcIiA6IFwiY2xvc2VfY292ZXJcIjtcbiAgICB9IGVsc2UgaWYgKHN0YXRlRG9tYWluID09PSBcImdyb3VwXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImhvbWVhc3Npc3RhbnRcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInR1cm5fb25cIiA6IFwidHVybl9vZmZcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VydmljZURvbWFpbiA9IHN0YXRlRG9tYWluO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidHVybl9vblwiIDogXCJ0dXJuX29mZlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICAvLyBPcHRpbWlzdGljIHVwZGF0ZS5cbiAgICB0aGlzLl9pc09uID0gdHVybk9uO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHNlcnZpY2VEb21haW4sIHNlcnZpY2UsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIElmIGFmdGVyIDIgc2Vjb25kcyB3ZSBoYXZlIG5vdCByZWNlaXZlZCBhIHN0YXRlIHVwZGF0ZVxuICAgICAgLy8gcmVzZXQgdGhlIHN3aXRjaCB0byBpdCdzIG9yaWdpbmFsIHN0YXRlLlxuICAgICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICB0aGlzLl9pc09uID0gaXNPbih0aGlzLnN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgIC0tcGFwZXItaWNvbi1idXR0b24taW5hY3RpdmUtY29sb3IsXG4gICAgICAgICAgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVxuICAgICAgICApO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b25bc3RhdGUtYWN0aXZlXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pY29uLWJ1dHRvbi1hY3RpdmUtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1sYWJlbC1zcGFjaW5nOiAwO1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDVweDtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC01cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktdG9nZ2xlXCIsIEhhRW50aXR5VG9nZ2xlKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUdBOzs7OztBQUNBOzs7QUFBQTs7Ozs7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBU0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMUJBO0FBQUE7QUE2QkE7QUFEQTtBQUNBO0FBN0JBO0FBZ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQXNCQTs7O0FBeElBO0FBQ0E7QUEwSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
