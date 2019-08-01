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
            "\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n              <paper-icon-button\n                slot="suffix"\n                class="suffix"\n                @click=',
            '\n                icon="hass:close"\n                alt="Clear"\n                title="Clear"\n              ></paper-icon-button>\n            ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="search-container">\n        <paper-input\n          autofocus\n          label="Search"\n          .value=',
            "\n          @value-changed=",
            '\n        >\n          <iron-icon\n            icon="hass:magnify"\n            slot="prefix"\n            class="prefix"\n          ></iron-icon>\n          ',
            "\n        </paper-input>\n      </div>\n    ",
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

        var SearchInput = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])(
              "search-input"
            ),
          ],
          function(_initialize, _LitElement) {
            var SearchInput =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(SearchInput, _LitElement2);

                function SearchInput() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, SearchInput);

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
                      SearchInput
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return SearchInput;
              })(_LitElement);

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
                    return Object(
                      lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.filter,
                      this._filterInputChanged,
                      this.filter &&
                        Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(
                          _templateObject2(),
                          this._clearSearch
                        )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: (function() {
                    var _filterChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(value) {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  Object(
                                    _dom_fire_event__WEBPACK_IMPORTED_MODULE_2__[
                                      "fireEvent"
                                    ]
                                  )(this, "value-changed", {
                                    value: String(value),
                                  });

                                case 1:
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

                    function _filterChanged(_x) {
                      return _filterChanged2.apply(this, arguments);
                    }

                    return _filterChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_filterInputChanged",
                  value: (function() {
                    var _filterInputChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(e) {
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  this._filterChanged(e.target.value);

                                case 1:
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

                    function _filterInputChanged(_x2) {
                      return _filterInputChanged2.apply(this, arguments);
                    }

                    return _filterInputChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_clearSearch",
                  value: (function() {
                    var _clearSearch2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  this._filterChanged("");

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this
                        );
                      })
                    );

                    function _clearSearch() {
                      return _clearSearch2.apply(this, arguments);
                    }

                    return _clearSearch;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]
                    )(_templateObject3());
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

        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        var HaIconNext =
          /*#__PURE__*/
          (function(_HaIcon) {
            _inherits(HaIconNext, _HaIcon);

            function HaIconNext() {
              _classCallCheck(this, HaIconNext);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaIconNext).apply(this, arguments)
              );
            }

            _createClass(HaIconNext, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  this.icon =
                    window.getComputedStyle(this).direction === "ltr"
                      ? "hass:chevron-right"
                      : "hass:chevron-left"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

                  _get(
                    _getPrototypeOf(HaIconNext.prototype),
                    "connectedCallback",
                    this
                  ).call(this);
                },
              },
            ]);

            return HaIconNext;
          })(_ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"]);
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

        var createAreaRegistryEntry = function createAreaRegistryEntry(
          hass,
          values
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/create",
              },
              values
            )
          );
        };
        var updateAreaRegistryEntry = function updateAreaRegistryEntry(
          hass,
          areaId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/update",
                area_id: areaId,
              },
              updates
            )
          );
        };
        var deleteAreaRegistryEntry = function deleteAreaRegistryEntry(
          hass,
          areaId
        ) {
          return hass.callWS({
            type: "config/area_registry/delete",
            area_id: areaId,
          });
        };

        var fetchAreaRegistry = function fetchAreaRegistry(conn) {
          return conn
            .sendMessagePromise({
              type: "config/area_registry/list",
            })
            .then(function(areas) {
              return areas.sort(function(ent1, ent2) {
                return Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"]
                )(ent1.name, ent2.name);
              });
            });
        };

        var subscribeAreaRegistryUpdates = function subscribeAreaRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              function() {
                return fetchAreaRegistry(conn).then(function(areas) {
                  return store.setState(areas, true);
                });
              },
              500,
              true
            ),
            "area_registry_updated"
          );
        };

        var subscribeAreaRegistry = function subscribeAreaRegistry(
          conn,
          onChange
        ) {
          return Object(
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
        };

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

        var updateDeviceRegistryEntry = function updateDeviceRegistryEntry(
          hass,
          deviceId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/device_registry/update",
                device_id: deviceId,
              },
              updates
            )
          );
        };

        var fetchDeviceRegistry = function fetchDeviceRegistry(conn) {
          return conn.sendMessagePromise({
            type: "config/device_registry/list",
          });
        };

        var subscribeDeviceRegistryUpdates = function subscribeDeviceRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]
            )(
              function() {
                return fetchDeviceRegistry(conn).then(function(devices) {
                  return store.setState(devices, true);
                });
              },
              500,
              true
            ),
            "device_registry_updated"
          );
        };

        var subscribeDeviceRegistry = function subscribeDeviceRegistry(
          conn,
          onChange
        ) {
          return Object(
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
        };

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

        function _templateObject10() {
          var data = _taggedTemplateLiteral([
            "\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-paper-dialog > * {\n          margin: 0;\n          display: block;\n          padding: 0;\n        }\n      ",
          ]);

          _templateObject10 = function _templateObject10() {
            return data;
          };

          return data;
        }

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-create-entry\n                .step=",
            "\n                .hass=",
            "\n                .devices=",
            "\n                .areas=",
            "\n              ></step-flow-create-entry>\n            ",
          ]);

          _templateObject9 = function _templateObject9() {
            return data;
          };

          return data;
        }

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-loading></step-flow-loading>\n            ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-abort\n                .step=",
            "\n                .hass=",
            "\n              ></step-flow-abort>\n            ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-external\n                .step=",
            "\n                .hass=",
            "\n              ></step-flow-external>\n            ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-form\n                .step=",
            "\n                .hass=",
            "\n              ></step-flow-form>\n            ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-pick-handler\n                .hass=",
            "\n                .handlers=",
            "\n              ></step-flow-pick-handler>\n            ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n              <step-flow-loading></step-flow-loading>\n            ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=",
            "\n      >\n        ",
            "\n      </ha-paper-dialog>\n    ",
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

        // Not duplicate, is for typing
        // tslint:disable-next-line

        var instance = 0;

        var ConfigFlowDialog = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "dialog-config-flow"
            ),
          ],
          function(_initialize, _LitElement) {
            var ConfigFlowDialog =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(ConfigFlowDialog, _LitElement2);

                function ConfigFlowDialog() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, ConfigFlowDialog);

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
                      ConfigFlowDialog
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return ConfigFlowDialog;
              })(_LitElement);

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
                  value: function value() {
                    return true;
                  },
                },
                {
                  kind: "field",
                  key: "_instance",
                  value: function value() {
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
                  value: (function() {
                    var _showDialog = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(params) {
                        var _this2 = this;

                        var curInstance, step;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._params = params;
                                  this._instance = instance++; // Create a new config flow. Show picker

                                  if (params.continueFlowId) {
                                    _context.next = 19;
                                    break;
                                  }

                                  this._step = null; // We only load the handlers once

                                  if (!(this._handlers === undefined)) {
                                    _context.next = 15;
                                    break;
                                  }

                                  this._loading = true;
                                  this.updateComplete.then(function() {
                                    return _this2._scheduleCenterDialog();
                                  });
                                  _context.prev = 7;
                                  _context.next = 10;
                                  return Object(
                                    _data_config_entries__WEBPACK_IMPORTED_MODULE_10__[
                                      "getConfigFlowHandlers"
                                    ]
                                  )(this.hass);

                                case 10:
                                  _context.t0 = function(handlerA, handlerB) {
                                    return Object(
                                      _common_string_compare__WEBPACK_IMPORTED_MODULE_19__[
                                        "caseInsensitiveCompare"
                                      ]
                                    )(
                                      _this2.hass.localize(
                                        "component.".concat(
                                          handlerA,
                                          ".config.title"
                                        )
                                      ),
                                      _this2.hass.localize(
                                        "component.".concat(
                                          handlerB,
                                          ".config.title"
                                        )
                                      )
                                    );
                                  };

                                  this._handlers = _context.sent.sort(
                                    _context.t0
                                  );

                                case 12:
                                  _context.prev = 12;
                                  this._loading = false;
                                  return _context.finish(12);

                                case 15:
                                  _context.next = 17;
                                  return this.updateComplete;

                                case 17:
                                  this._scheduleCenterDialog();

                                  return _context.abrupt("return");

                                case 19:
                                  this._loading = true;
                                  curInstance = this._instance;
                                  _context.next = 23;
                                  return Object(
                                    _data_config_entries__WEBPACK_IMPORTED_MODULE_10__[
                                      "fetchConfigFlow"
                                    ]
                                  )(this.hass, params.continueFlowId);

                                case 23:
                                  step = _context.sent;

                                  if (!(curInstance !== this._instance)) {
                                    _context.next = 26;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 26:
                                  this._processStep(step);

                                  this._loading = false; // When the flow changes, center the dialog.
                                  // Don't do it on each step or else the dialog keeps bouncing.

                                  this._scheduleCenterDialog();

                                case 29:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[7, , 12, 15]]
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

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this._openedChanged,
                      this._loading ||
                        (this._step === null && this._handlers === undefined)
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject3())
                        : this._step === undefined // When we are going to next step, we render 1 round of empty
                        ? // to reset the element.
                          ""
                        : this._step === null // Show handler picker
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject4(), this.hass, this._handlers)
                        : this._step.type === "form"
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5(), this._step, this.hass)
                        : this._step.type === "external"
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject6(), this._step, this.hass)
                        : this._step.type === "abort"
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject7(), this._step, this.hass)
                        : this._devices === undefined ||
                          this._areas === undefined // When it's a create entry result, we will fetch device & area registry
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject8())
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject9(),
                            this._step,
                            this.hass,
                            this._devices,
                            this._areas
                          )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this3 = this;

                    _get(
                      _getPrototypeOf(ConfigFlowDialog.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("flow-update", function(ev) {
                      var _detail = ev.detail,
                        step = _detail.step,
                        stepPromise = _detail.stepPromise;

                      _this3._processStep(step || stepPromise);
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
                    var _this4 = this;

                    setTimeout(function() {
                      return _this4._dialog.center();
                    }, 0);
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
                  value: (function() {
                    var _fetchDevices2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(configEntryId) {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  this._unsubDevices = Object(
                                    _data_device_registry__WEBPACK_IMPORTED_MODULE_17__[
                                      "subscribeDeviceRegistry"
                                    ]
                                  )(this.hass.connection, function(devices) {
                                    _this5._devices = devices.filter(function(
                                      device
                                    ) {
                                      return device.config_entries.includes(
                                        configEntryId
                                      );
                                    });
                                  });

                                case 1:
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

                    function _fetchDevices(_x2) {
                      return _fetchDevices2.apply(this, arguments);
                    }

                    return _fetchDevices;
                  })(),
                },
                {
                  kind: "method",
                  key: "_fetchAreas",
                  value: (function() {
                    var _fetchAreas2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  this._unsubAreas = Object(
                                    _data_area_registry__WEBPACK_IMPORTED_MODULE_18__[
                                      "subscribeAreaRegistry"
                                    ]
                                  )(this.hass.connection, function(areas) {
                                    _this6._areas = areas;
                                  });

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this
                        );
                      })
                    );

                    function _fetchAreas() {
                      return _fetchAreas2.apply(this, arguments);
                    }

                    return _fetchAreas;
                  })(),
                },
                {
                  kind: "method",
                  key: "_processStep",
                  value: (function() {
                    var _processStep2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4(step) {
                        return regeneratorRuntime.wrap(
                          function _callee4$(_context4) {
                            while (1) {
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  if (!(step instanceof Promise)) {
                                    _context4.next = 10;
                                    break;
                                  }

                                  this._loading = true;
                                  _context4.prev = 2;
                                  _context4.next = 5;
                                  return step;

                                case 5:
                                  this._step = _context4.sent;

                                case 6:
                                  _context4.prev = 6;
                                  this._loading = false;
                                  return _context4.finish(6);

                                case 9:
                                  return _context4.abrupt("return");

                                case 10:
                                  if (!(step === undefined)) {
                                    _context4.next = 13;
                                    break;
                                  }

                                  this._flowDone();

                                  return _context4.abrupt("return");

                                case 13:
                                  this._step = undefined;
                                  _context4.next = 16;
                                  return this.updateComplete;

                                case 16:
                                  this._step = step;

                                case 17:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          },
                          _callee4,
                          this,
                          [[2, , 6, 9]]
                        );
                      })
                    );

                    function _processStep(_x3) {
                      return _processStep2.apply(this, arguments);
                    }

                    return _processStep;
                  })(),
                },
                {
                  kind: "method",
                  key: "_flowDone",
                  value: function _flowDone() {
                    if (!this._params) {
                      return;
                    }

                    var flowFinished = Boolean(
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
                      flowFinished: flowFinished,
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
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject10()
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
            "\n              <ha-markdown .content=",
            " allow-svg></ha-markdown>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <h2>Aborted</h2>\n      <div class="content">\n        ',
            '\n      </div>\n      <div class="buttons">\n        <mwc-button @click="',
            '">Close</mwc-button>\n      </div>\n    ',
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

        var StepFlowAbort = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-abort"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowAbort =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowAbort, _LitElement2);

                function StepFlowAbort() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowAbort);

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
                      StepFlowAbort
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowAbort;
              })(_LitElement);

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
                    var localize = this.hass.localize;
                    var step = this.step;
                    var description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      "component."
                        .concat(step.handler, ".config.abort.")
                        .concat(step.reason),
                      step.description_placeholders
                    );
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      description
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), description)
                        : "",
                      this._flowDone
                    );
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

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            "\n        .devices {\n          display: flex;\n          flex-wrap: wrap;\n          margin: -4px;\n          max-height: 600px;\n          overflow-y: auto;\n        }\n        .device {\n          border: 1px solid var(--divider-color);\n          padding: 5px;\n          border-radius: 4px;\n          margin: 4px;\n          display: inline-block;\n          width: 200px;\n        }\n        .buttons > *:last-child {\n          margin-left: auto;\n        }\n        paper-dropdown-menu-light {\n          cursor: pointer;\n        }\n        paper-item {\n          cursor: pointer;\n          white-space: nowrap;\n        }\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .device {\n            width: 100%;\n          }\n        }\n      ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
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
            '\n              <mwc-button @click="',
            '">Add Area</mwc-button>\n            ',
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n                                <paper-item .area=",
            ">\n                                  ",
            "\n                                </paper-item>\n                              ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                      <div class="device">\n                        <div>\n                          <b>',
            "</b><br />\n                          ",
            " (",
            ')\n                        </div>\n                        <paper-dropdown-menu-light\n                          label="Area"\n                          .device=',
            "\n                          @selected-item-changed=",
            '\n                        >\n                          <paper-listbox slot="dropdown-content" selected="0">\n                            <paper-item>\n                              ',
            "\n                            </paper-item>\n                            ",
            "\n                          </paper-listbox>\n                        </paper-dropdown-menu-light>\n                      </div>\n                    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n              <p>We found the following devices:</p>\n              <div class="devices">\n                ',
            "\n              </div>\n            ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n              <ha-markdown .content=",
            " allow-svg></ha-markdown>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <h2>Success!</h2>\n      <div class="content">\n        ',
            "\n        <p>Created config for ",
            ".</p>\n        ",
            '\n      </div>\n      <div class="buttons">\n        ',
            '\n\n        <mwc-button @click="',
            '">Finish</mwc-button>\n      </div>\n    ',
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

        var StepFlowCreateEntry = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-create-entry"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowCreateEntry =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowCreateEntry, _LitElement2);

                function StepFlowCreateEntry() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowCreateEntry);

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
                      StepFlowCreateEntry
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowCreateEntry;
              })(_LitElement);

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
                    var _this2 = this;

                    var localize = this.hass.localize;
                    var step = this.step;
                    var description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_5__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      "component."
                        .concat(step.handler, ".config.create_entry.")
                        .concat(step.description || "default"),
                      step.description_placeholders
                    );
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      description
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), description)
                        : "",
                      step.title,
                      this.devices.length === 0
                        ? ""
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            this.devices.map(function(device) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                              )(
                                _templateObject4(),
                                device.name,
                                device.model,
                                device.manufacturer,
                                device.id,
                                _this2._handleAreaChanged,
                                localize(
                                  "ui.panel.config.integrations.config_entry.no_area"
                                ),
                                _this2.areas.map(function(area) {
                                  return Object(
                                    lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                      "html"
                                    ]
                                  )(_templateObject5(), area.area_id, area.name);
                                })
                              );
                            })
                          ),
                      this.devices.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject6(), this._addArea)
                        : "",
                      this._flowDone
                    );
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
                  value: (function() {
                    var _addArea2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var name, area;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  name = prompt("Name of the new area?");

                                  if (name) {
                                    _context.next = 3;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 3:
                                  _context.prev = 3;
                                  _context.next = 6;
                                  return Object(
                                    _data_area_registry__WEBPACK_IMPORTED_MODULE_9__[
                                      "createAreaRegistryEntry"
                                    ]
                                  )(this.hass, {
                                    name: name,
                                  });

                                case 6:
                                  area = _context.sent;
                                  this.areas = [].concat(
                                    _toConsumableArray(this.areas),
                                    [area]
                                  );
                                  _context.next = 13;
                                  break;

                                case 10:
                                  _context.prev = 10;
                                  _context.t0 = _context["catch"](3);
                                  alert("Failed to create area.");

                                case 13:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[3, 10]]
                        );
                      })
                    );

                    function _addArea() {
                      return _addArea2.apply(this, arguments);
                    }

                    return _addArea;
                  })(),
                },
                {
                  kind: "method",
                  key: "_handleAreaChanged",
                  value: (function() {
                    var _handleAreaChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var dropdown, device, area;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  dropdown = ev.currentTarget;
                                  device = dropdown.device; // Item first becomes null, then new item.

                                  if (dropdown.selectedItem) {
                                    _context2.next = 4;
                                    break;
                                  }

                                  return _context2.abrupt("return");

                                case 4:
                                  area = dropdown.selectedItem.area;
                                  _context2.prev = 5;
                                  _context2.next = 8;
                                  return Object(
                                    _data_device_registry__WEBPACK_IMPORTED_MODULE_8__[
                                      "updateDeviceRegistryEntry"
                                    ]
                                  )(this.hass, device, {
                                    area_id: area,
                                  });

                                case 8:
                                  _context2.next = 14;
                                  break;

                                case 10:
                                  _context2.prev = 10;
                                  _context2.t0 = _context2["catch"](5);
                                  alert(
                                    "Error saving area: ".concat(
                                      _context2.t0.message
                                    )
                                  );
                                  dropdown.value = null;

                                case 14:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[5, 10]]
                        );
                      })
                    );

                    function _handleAreaChanged(_x) {
                      return _handleAreaChanged2.apply(this, arguments);
                    }

                    return _handleAreaChanged;
                  })(),
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
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject7()
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
            "\n        .open-button {\n          text-align: center;\n          padding: 24px 0;\n        }\n        .open-button a {\n          text-decoration: none;\n        }\n      ",
          ]);

          _templateObject3 = function _templateObject3() {
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n              <ha-markdown .content=",
            " allow-svg></ha-markdown>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <h2>\n        ",
            '\n      </h2>\n      <div class="content">\n        <p>\n          ',
            "\n        </p>\n        ",
            '\n        <div class="open-button">\n          <a href=',
            ' target="_blank">\n            <mwc-button raised>\n              ',
            "\n            </mwc-button>\n          </a>\n        </div>\n      </div>\n    ",
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

        var StepFlowExternal = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-external"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowExternal =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowExternal, _LitElement2);

                function StepFlowExternal() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowExternal);

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
                      StepFlowExternal
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowExternal;
              })(_LitElement);

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
                    var localize = this.hass.localize;
                    var step = this.step;
                    var description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      "component."
                        .concat(step.handler, ".config.")
                        .concat(step.step_id, ".description"),
                      step.description_placeholders
                    );
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      localize(
                        "component."
                          .concat(step.handler, ".config.step.")
                          .concat(step.step_id, ".title")
                      ),
                      localize(
                        "ui.panel.config.integrations.config_flow.external_step.description"
                      ),
                      description
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), description)
                        : "",
                      this.step.url,
                      localize(
                        "ui.panel.config.integrations.config_flow.external_step.open_site"
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(StepFlowExternal.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.hass.connection.subscribeEvents(
                      /*#__PURE__*/
                      (function() {
                        var _ref = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(ev) {
                            return regeneratorRuntime.wrap(function _callee$(
                              _context
                            ) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    if (
                                      !(ev.data.flow_id !== _this2.step.flow_id)
                                    ) {
                                      _context.next = 2;
                                      break;
                                    }

                                    return _context.abrupt("return");

                                  case 2:
                                    Object(
                                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__[
                                        "fireEvent"
                                      ]
                                    )(_this2, "flow-update", {
                                      stepPromise: Object(
                                        _data_config_entries__WEBPACK_IMPORTED_MODULE_2__[
                                          "fetchConfigFlow"
                                        ]
                                      )(_this2.hass, _this2.step.flow_id),
                                    });

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            },
                            _callee);
                          })
                        );

                        return function(_x) {
                          return _ref.apply(this, arguments);
                        };
                      })(),
                      "data_entry_flow_progressed"
                    );
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
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject3()
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
            "\n        .error {\n          color: red;\n        }\n\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      ",
          ]);

          _templateObject8 = function _templateObject8() {
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

        function _templateObject7() {
          var data = _taggedTemplateLiteral([""]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n                      <paper-tooltip position="left">\n                        Not all required fields are filled in.\n                      </paper-tooltip>\n                    ',
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n              <div>\n                <mwc-button\n                  @click=",
            "\n                  .disabled=",
            "\n                >\n                  Submit\n                </mwc-button>\n\n                ",
            "\n              </div>\n            ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="submit-spinner">\n                <paper-spinner active></paper-spinner>\n              </div>\n            ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n              <ha-markdown .content=",
            " allow-svg></ha-markdown>\n            ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="error">',
            "</div>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <h2>\n        ",
            '\n      </h2>\n      <div class="content">\n        ',
            "\n        ",
            "\n        <ha-form\n          .data=",
            "\n          @data-changed=",
            "\n          .schema=",
            "\n          .error=",
            "\n          .computeLabel=",
            "\n          .computeError=",
            '\n        ></ha-form>\n      </div>\n      <div class="buttons">\n        ',
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

        var StepFlowForm = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-form"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowForm =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowForm, _LitElement2);

                function StepFlowForm() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowForm);

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
                      StepFlowForm
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowForm;
              })(_LitElement);

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
                  value: function value() {
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
                    var _this2 = this;

                    var localize = this.hass.localize;
                    var step = this.step;
                    var allRequiredInfoFilledIn =
                      this._stepData === undefined // If no data filled in, just check that any field is required
                        ? step.data_schema.find(function(field) {
                            return !field.optional;
                          }) === undefined // If data is filled in, make sure all required fields are
                        : this._stepData &&
                          step.data_schema.every(function(field) {
                            return (
                              field.optional ||
                              !["", undefined].includes(
                                _this2._stepData[field.name]
                              )
                            );
                          });
                    var description = Object(
                      _common_translations_localize__WEBPACK_IMPORTED_MODULE_10__[
                        "localizeKey"
                      ]
                    )(
                      localize,
                      "component."
                        .concat(step.handler, ".config.step.")
                        .concat(step.step_id, ".description"),
                      step.description_placeholders
                    );
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      localize(
                        "component."
                          .concat(step.handler, ".config.step.")
                          .concat(step.step_id, ".title")
                      ),
                      this._errorMsg
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), this._errorMsg)
                        : "",
                      description
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject3(), description)
                        : "",
                      this._stepDataProcessed,
                      this._stepDataChanged,
                      step.data_schema,
                      step.errors,
                      this._labelCallback,
                      this._errorCallback,
                      this._loading
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject4())
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject5(),
                            this._submitStep,
                            !allRequiredInfoFilledIn,
                            !allRequiredInfoFilledIn
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                    "html"
                                  ]
                                )(_templateObject6())
                              : Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                    "html"
                                  ]
                                )(_templateObject7())
                          )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this3 = this;

                    _get(
                      _getPrototypeOf(StepFlowForm.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this.addEventListener("keypress", function(ev) {
                      if (ev.keyCode === 13) {
                        _this3._submitStep();
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

                    var data = {};
                    this.step.data_schema.forEach(function(field) {
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
                  value: (function() {
                    var _submitStep2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var flowId, stepData, toSendData, step;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._loading = true;
                                  this._errorMsg = undefined;
                                  flowId = this.step.flow_id;
                                  stepData = this._stepData || {};
                                  toSendData = {};
                                  Object.keys(stepData).forEach(function(key) {
                                    var value = stepData[key];
                                    var isEmpty = [undefined, ""].includes(
                                      value
                                    );

                                    if (!isEmpty) {
                                      toSendData[key] = value;
                                    }
                                  });
                                  _context.prev = 6;
                                  _context.next = 9;
                                  return Object(
                                    _data_config_entries__WEBPACK_IMPORTED_MODULE_7__[
                                      "handleConfigFlowStep"
                                    ]
                                  )(this.hass, this.step.flow_id, toSendData);

                                case 9:
                                  step = _context.sent;

                                  if (
                                    !(
                                      !this.step || flowId !== this.step.flow_id
                                    )
                                  ) {
                                    _context.next = 12;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 12:
                                  Object(
                                    _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__[
                                      "fireEvent"
                                    ]
                                  )(this, "flow-update", {
                                    step: step,
                                  });
                                  _context.next = 18;
                                  break;

                                case 15:
                                  _context.prev = 15;
                                  _context.t0 = _context["catch"](6);
                                  this._errorMsg =
                                    (_context.t0 &&
                                      _context.t0.body &&
                                      _context.t0.body.message) ||
                                    "Unknown error occurred";

                                case 18:
                                  _context.prev = 18;
                                  this._loading = false;
                                  return _context.finish(18);

                                case 21:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[6, 15, 18, 21]]
                        );
                      })
                    );

                    function _submitStep() {
                      return _submitStep2.apply(this, arguments);
                    }

                    return _submitStep;
                  })(),
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
                  value: function value() {
                    var _this4 = this;

                    return function(schema) {
                      var step = _this4.step;
                      return _this4.hass.localize(
                        "component."
                          .concat(step.handler, ".config.step.")
                          .concat(step.step_id, ".data.")
                          .concat(schema.name)
                      );
                    };
                  },
                },
                {
                  kind: "field",
                  key: "_errorCallback",
                  value: function value() {
                    var _this5 = this;

                    return function(error) {
                      return _this5.hass.localize(
                        "component."
                          .concat(_this5.step.handler, ".config.error.")
                          .concat(error)
                      );
                    };
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
            "\n      .init-spinner {\n        padding: 50px 100px;\n        text-align: center;\n      }\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="init-spinner">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    ',
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

        var StepFlowLoading = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-loading"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowLoading =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowLoading, _LitElement2);

                function StepFlowLoading() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowLoading);

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
                      StepFlowLoading
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowLoading;
              })(_LitElement);

            return {
              F: StepFlowLoading,
              d: [
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject());
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject2());
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
            "\n      h2 {\n        margin-bottom: 2px;\n        padding-left: 16px;\n      }\n      div {\n        overflow: auto;\n        max-height: 600px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n              <paper-item @click=",
            " .handler=",
            ">\n                <paper-item-body>\n                  ",
            "\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <h2>",
            "</h2>\n      <search-input\n        .filter=",
            "\n        @value-changed=",
            "\n      ></search-input>\n      <div style=",
            ">\n        ",
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

        var StepFlowPickHandler = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "step-flow-pick-handler"
            ),
          ],
          function(_initialize, _LitElement) {
            var StepFlowPickHandler =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(StepFlowPickHandler, _LitElement2);

                function StepFlowPickHandler() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, StepFlowPickHandler);

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
                      StepFlowPickHandler
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return StepFlowPickHandler;
              })(_LitElement);

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
                  value: function value() {
                    var _this2 = this;

                    return Object(
                      memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"]
                    )(function(h, filter) {
                      var handlers = h.map(function(handler) {
                        return {
                          name: _this2.hass.localize(
                            "component.".concat(handler, ".config.title")
                          ),
                          slug: handler,
                        };
                      });

                      if (filter) {
                        var options = {
                          keys: ["name", "slug"],
                          caseSensitive: false,
                          minMatchCharLength: 2,
                          threshold: 0.2,
                        };
                        var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_7__(
                          handlers,
                          options
                        );
                        return fuse.search(filter);
                      }

                      return handlers.sort(function(a, b) {
                        return a.name.toUpperCase() < b.name.toUpperCase()
                          ? -1
                          : 1;
                      });
                    });
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this3 = this;

                    var handlers = this._getHandlers(
                      this.handlers,
                      this.filter
                    );

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.hass.localize("ui.panel.config.integrations.new"),
                      this.filter,
                      this._filterChanged,
                      Object(
                        lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__[
                          "styleMap"
                        ]
                      )({
                        width: "".concat(this._width, "px"),
                      }),
                      handlers.map(function(handler) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject2(), _this3._handlerPicked, handler, handler.name);
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: (function() {
                    var _filterChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(e) {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this.filter = e.detail.value; // Store the width so that when we search, box doesn't jump

                                  if (this._width === undefined) {
                                    this._width = this.shadowRoot.querySelector(
                                      "div"
                                    ).clientWidth;
                                  }

                                case 2:
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

                    function _filterChanged(_x) {
                      return _filterChanged2.apply(this, arguments);
                    }

                    return _filterChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_handlerPicked",
                  value: (function() {
                    var _handlerPicked2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
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

                                case 1:
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

                    function _handlerPicked(_x2) {
                      return _handlerPicked2.apply(this, arguments);
                    }

                    return _handlerPicked;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject3());
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
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n  h2 {\n    margin-top: 24px;\n    padding: 0 24px;\n  }\n\n  .content {\n    margin-top: 20px;\n    padding: 0 24px;\n  }\n\n  .buttons {\n    position: relative;\n    padding: 8px 8px 8px 24px;\n    margin: 0;\n    color: var(--primary-color);\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  ha-markdown {\n    overflow-wrap: break-word;\n  }\n  ha-markdown a {\n    color: var(--primary-color);\n  }\n  ha-markdown img:first-child:last-child {\n    display: block;\n    margin: 0 auto;\n  }\n",
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

        var configFlowContentStyles = Object(
          lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
        )(_templateObject());

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

        var EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_superClass) {
              _inherits(_class, _superClass);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(_class, [
                {
                  key: "fire",

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
                  value: function fire(type, detail, options) {
                    options = options || {};
                    return Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                        "fireEvent"
                      ]
                    )(options.node || this, type, detail, options);
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

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
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var applyPolymerEvent = function applyPolymerEvent(ev, curValue) {
          var _ev$detail = ev.detail,
            path = _ev$detail.path,
            value = _ev$detail.value;

          if (!path) {
            return value;
          }

          var propName = path.split(".")[1];
          return Object.assign(
            {},
            curValue,
            _defineProperty({}, propName, value)
          );
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L2RpYWxvZy1jb25maWctZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctYWJvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWNyZWF0ZS1lbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctZXh0ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWxvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LXBpY2staGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHltZXItdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQsIGh0bWwgfSBmcm9tIFwibGl0LWh0bWxcIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzZWFyY2gtaW5wdXRcIilcbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZmlsdGVyPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIGxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLmZpbHRlcn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2ZpbHRlcklucHV0Q2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpcm9uLWljb25cbiAgICAgICAgICAgIGljb249XCJoYXNzOm1hZ25pZnlcIlxuICAgICAgICAgICAgc2xvdD1cInByZWZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cInByZWZpeFwiXG4gICAgICAgICAgPjwvaXJvbi1pY29uPlxuICAgICAgICAgICR7dGhpcy5maWx0ZXIgJiZcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclNlYXJjaH1cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQ2xlYXJcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xlYXJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVySW5wdXRDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NsZWFyU2VhcmNoKCkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoXCJcIik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnByZWZpeCB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInNlYXJjaC1pbnB1dFwiOiBTZWFyY2hJbnB1dDtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1sZWZ0XCI7XG5cbiAgICAvLyBjYWxsaW5nIHN1cGVyIGFmdGVyIHNldHRpbmcgaWNvbiB0byBoYXZlIGl0IGNvbnNpc3RlbnRseSBzaG93IHRoZSBpY29uIChvdGhlcndpc2Ugbm90IGFsd2F5cyBzaG93bilcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkZXZpY2VJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuLy8gTm90IGR1cGxpY2F0ZSwgaXMgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQge1xuICBmZXRjaENvbmZpZ0Zsb3csXG4gIENvbmZpZ0Zsb3dTdGVwLFxuICBkZWxldGVDb25maWdGbG93LFxuICBnZXRDb25maWdGbG93SGFuZGxlcnMsXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IEhhQ29uZmlnRmxvd1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5cbmltcG9ydCBcIi4vc3RlcC1mbG93LXBpY2staGFuZGxlclwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctbG9hZGluZ1wiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZm9ybVwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZXh0ZXJuYWxcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWFib3J0XCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmxldCBpbnN0YW5jZSA9IDA7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZmxvdy11cGRhdGVcIjoge1xuICAgICAgc3RlcD86IENvbmZpZ0Zsb3dTdGVwO1xuICAgICAgc3RlcFByb21pc2U/OiBQcm9taXNlPENvbmZpZ0Zsb3dTdGVwPjtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWNvbmZpZy1mbG93XCIpXG5jbGFzcyBDb25maWdGbG93RGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogSGFDb25maWdGbG93UGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2FkaW5nID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3RlcDpcbiAgICB8IENvbmZpZ0Zsb3dTdGVwXG4gICAgfCB1bmRlZmluZWRcbiAgICAvLyBOdWxsIG1lYW5zIHdlIG5lZWQgdG8gcGljayBhIGNvbmZpZyBmbG93XG4gICAgfCBudWxsO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VzPzogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhbmRsZXJzPzogc3RyaW5nW107XG4gIHByaXZhdGUgX3Vuc3ViQXJlYXM/OiBVbnN1YnNjcmliZUZ1bmM7XG4gIHByaXZhdGUgX3Vuc3ViRGV2aWNlcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IEhhQ29uZmlnRmxvd1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlKys7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgY29uZmlnIGZsb3cuIFNob3cgcGlja2VyXG4gICAgaWYgKCFwYXJhbXMuY29udGludWVGbG93SWQpIHtcbiAgICAgIHRoaXMuX3N0ZXAgPSBudWxsO1xuXG4gICAgICAvLyBXZSBvbmx5IGxvYWQgdGhlIGhhbmRsZXJzIG9uY2VcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlcnMgPSAoYXdhaXQgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzKHRoaXMuaGFzcykpLnNvcnQoXG4gICAgICAgICAgICAoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckF9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcbiAgICBjb25zdCBzdGVwID0gYXdhaXQgZmV0Y2hDb25maWdGbG93KHRoaXMuaGFzcywgcGFyYW1zLmNvbnRpbnVlRmxvd0lkKTtcblxuICAgIC8vIEhhcHBlbnMgaWYgc2Vjb25kIHNob3dEaWFsb2cgY2FsbGVkXG4gICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyBXaGVuIHRoZSBmbG93IGNoYW5nZXMsIGNlbnRlciB0aGUgZGlhbG9nLlxuICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9sb2FkaW5nIHx8ICh0aGlzLl9zdGVwID09PSBudWxsICYmIHRoaXMuX2hhbmRsZXJzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWxvYWRpbmc+PC9zdGVwLWZsb3ctbG9hZGluZz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IHRoaXMuX3N0ZXAgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gLy8gV2hlbiB3ZSBhcmUgZ29pbmcgdG8gbmV4dCBzdGVwLCB3ZSByZW5kZXIgMSByb3VuZCBvZiBlbXB0eVxuICAgICAgICAgICAgLy8gdG8gcmVzZXQgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgOiB0aGlzLl9zdGVwID09PSBudWxsXG4gICAgICAgICAgPyAvLyBTaG93IGhhbmRsZXIgcGlja2VyXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LXBpY2staGFuZGxlclxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5oYW5kbGVycz0ke3RoaXMuX2hhbmRsZXJzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctcGljay1oYW5kbGVyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImZvcm1cIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1mb3JtXG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctZm9ybT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IHRoaXMuX3N0ZXAudHlwZSA9PT0gXCJleHRlcm5hbFwiXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWV4dGVybmFsXG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctZXh0ZXJuYWw+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiYWJvcnRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1hYm9ydFxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWFib3J0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fZGV2aWNlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2FyZWFzID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IC8vIFdoZW4gaXQncyBhIGNyZWF0ZSBlbnRyeSByZXN1bHQsIHdlIHdpbGwgZmV0Y2ggZGV2aWNlICYgYXJlYSByZWdpc3RyeVxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1sb2FkaW5nPjwvc3RlcC1mbG93LWxvYWRpbmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWNyZWF0ZS1lbnRyeVxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAuZGV2aWNlcz0ke3RoaXMuX2RldmljZXN9XG4gICAgICAgICAgICAgICAgLmFyZWFzPSR7dGhpcy5fYXJlYXN9XG4gICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1jcmVhdGUtZW50cnk+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9oYS1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZsb3ctdXBkYXRlXCIsIChldikgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwLCBzdGVwUHJvbWlzZSB9ID0gKGV2IGFzIGFueSkuZGV0YWlsO1xuICAgICAgdGhpcy5fcHJvY2Vzc1N0ZXAoc3RlcCB8fCBzdGVwUHJvbWlzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9zdGVwXCIpICYmXG4gICAgICB0aGlzLl9zdGVwICYmXG4gICAgICB0aGlzLl9zdGVwLnR5cGUgPT09IFwiY3JlYXRlX2VudHJ5XCJcbiAgICApIHtcbiAgICAgIHRoaXMuX2ZldGNoRGV2aWNlcyh0aGlzLl9zdGVwLnJlc3VsdCk7XG4gICAgICB0aGlzLl9mZXRjaEFyZWFzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfZGV2aWNlc1wiKSAmJiB0aGlzLl9kaWFsb2cpIHtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2NoZWR1bGVDZW50ZXJEaWFsb2coKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kaWFsb2cuY2VudGVyKCksIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYWxvZygpOiBIYVBhcGVyRGlhbG9nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtcGFwZXItZGlhbG9nXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGV2aWNlcyhjb25maWdFbnRyeUlkKSB7XG4gICAgdGhpcy5fdW5zdWJEZXZpY2VzID0gc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkoXG4gICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBkZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PlxuICAgICAgICAgIGRldmljZS5jb25maWdfZW50cmllcy5pbmNsdWRlcyhjb25maWdFbnRyeUlkKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaEFyZWFzKCkge1xuICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3Byb2Nlc3NTdGVwKFxuICAgIHN0ZXA6IENvbmZpZ0Zsb3dTdGVwIHwgdW5kZWZpbmVkIHwgUHJvbWlzZTxDb25maWdGbG93U3RlcD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHN0ZXAgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3N0ZXAgPSBhd2FpdCBzdGVwO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2Zsb3dEb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0ZXAgPSB1bmRlZmluZWQ7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZsb3dGaW5pc2hlZCA9IEJvb2xlYW4oXG4gICAgICB0aGlzLl9zdGVwICYmIFtcImNyZWF0ZV9lbnRyeVwiLCBcImFib3J0XCJdLmluY2x1ZGVzKHRoaXMuX3N0ZXAudHlwZSlcbiAgICApO1xuXG4gICAgLy8gSWYgd2UgY3JlYXRlZCB0aGlzIGZsb3csIGRlbGV0ZSBpdCBub3cuXG4gICAgaWYgKHRoaXMuX3N0ZXAgJiYgIWZsb3dGaW5pc2hlZCAmJiAhdGhpcy5fcGFyYW1zLmNvbnRpbnVlRmxvd0lkKSB7XG4gICAgICBkZWxldGVDb25maWdGbG93KHRoaXMuaGFzcywgdGhpcy5fc3RlcC5mbG93X2lkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJhbXMuZGlhbG9nQ2xvc2VkQ2FsbGJhY2soe1xuICAgICAgZmxvd0ZpbmlzaGVkLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGV2aWNlcyA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Vuc3ViRGV2aWNlcykge1xuICAgICAgdGhpcy5fdW5zdWJEZXZpY2VzKCk7XG4gICAgICB0aGlzLl91bnN1YkRldmljZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIC8vIENsb3NlZCBkaWFsb2cgYnkgY2xpY2tpbmcgb24gdGhlIG92ZXJsYXlcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX3N0ZXApIHtcbiAgICAgICAgdGhpcy5fZmxvd0RvbmUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBGbG93IGFib3J0ZWQgZHVyaW5nIHBpY2tpbmcgZmxvd1xuICAgICAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nID4gKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLWNvbmZpZy1mbG93XCI6IENvbmZpZ0Zsb3dEaWFsb2c7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IENvbmZpZ0Zsb3dTdGVwQWJvcnQgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbG9jYWxpemVLZXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctYWJvcnRcIilcbmNsYXNzIFN0ZXBGbG93QWJvcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgc3RlcCE6IENvbmZpZ0Zsb3dTdGVwQWJvcnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5oYXNzLmxvY2FsaXplO1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgbG9jYWxpemUsXG4gICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuYWJvcnQuJHtzdGVwLnJlYXNvbn1gLFxuICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+QWJvcnRlZDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkNsb3NlPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHsgc3RlcDogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY29uZmlnRmxvd0NvbnRlbnRTdHlsZXM7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1hYm9ydFwiOiBTdGVwRmxvd0Fib3J0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHsgQ29uZmlnRmxvd1N0ZXBDcmVhdGVFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XCIpXG5jbGFzcyBTdGVwRmxvd0NyZWF0ZUVudHJ5IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgc3RlcCE6IENvbmZpZ0Zsb3dTdGVwQ3JlYXRlRW50cnk7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGRldmljZXMhOiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGFyZWFzITogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgbG9jYWxpemUgPSB0aGlzLmhhc3MubG9jYWxpemU7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcDtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5jcmVhdGVfZW50cnkuJHtzdGVwLmRlc2NyaXB0aW9uIHx8XG4gICAgICAgIFwiZGVmYXVsdFwifWAsXG4gICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5TdWNjZXNzITwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cD5DcmVhdGVkIGNvbmZpZyBmb3IgJHtzdGVwLnRpdGxlfS48L3A+XG4gICAgICAgICR7dGhpcy5kZXZpY2VzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPHA+V2UgZm91bmQgdGhlIGZvbGxvd2luZyBkZXZpY2VzOjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZXNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZGV2aWNlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoZGV2aWNlKSA9PlxuICAgICAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiR7ZGV2aWNlLm5hbWV9PC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2RldmljZS5tb2RlbH0gKCR7ZGV2aWNlLm1hbnVmYWN0dXJlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2U9JHtkZXZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVBcmVhQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBzZWxlY3RlZD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYXJlYXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFyZWEpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIC5hcmVhPSR7YXJlYS5hcmVhX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FyZWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgJHt0aGlzLmRldmljZXMubGVuZ3RoID4gMFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9hZGRBcmVhfVwiPkFkZCBBcmVhPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkZpbmlzaDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9mbG93RG9uZSgpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7IHN0ZXA6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZEFyZWEoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcIk5hbWUgb2YgdGhlIG5ldyBhcmVhP1wiKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZWEgPSBhd2FpdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcmVhcyA9IFsuLi50aGlzLmFyZWFzLCBhcmVhXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBhcmVhLlwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVBcmVhQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55O1xuICAgIGNvbnN0IGRldmljZSA9IGRyb3Bkb3duLmRldmljZTtcblxuICAgIC8vIEl0ZW0gZmlyc3QgYmVjb21lcyBudWxsLCB0aGVuIG5ldyBpdGVtLlxuICAgIGlmICghZHJvcGRvd24uc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJlYSA9IGRyb3Bkb3duLnNlbGVjdGVkSXRlbS5hcmVhO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcywgZGV2aWNlLCB7XG4gICAgICAgIGFyZWFfaWQ6IGFyZWEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBFcnJvciBzYXZpbmcgYXJlYTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIGRyb3Bkb3duLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAuZGV2aWNlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25zID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjogU3RlcEZsb3dDcmVhdGVFbnRyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7XG4gIENvbmZpZ0Zsb3dTdGVwRXh0ZXJuYWwsXG4gIERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQsXG4gIGZldGNoQ29uZmlnRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWV4dGVybmFsXCIpXG5jbGFzcyBTdGVwRmxvd0V4dGVybmFsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIHN0ZXAhOiBDb25maWdGbG93U3RlcEV4dGVybmFsO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGl6ZSA9IHRoaXMuaGFzcy5sb2NhbGl6ZTtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgIGxvY2FsaXplLFxuICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLiR7c3RlcC5zdGVwX2lkfS5kZXNjcmlwdGlvbmAsXG4gICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5cbiAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICAgICl9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biAuY29udGVudD0ke2Rlc2NyaXB0aW9ufSBhbGxvdy1zdmc+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcGVuLWJ1dHRvblwiPlxuICAgICAgICAgIDxhIGhyZWY9JHt0aGlzLnN0ZXAudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD5cbiAgICAgICAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuZXh0ZXJuYWxfc3RlcC5vcGVuX3NpdGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHM8RGF0YUVudHJ5Rmxvd1Byb2dyZXNzZWRFdmVudD4oXG4gICAgICBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgaWYgKGV2LmRhdGEuZmxvd19pZCAhPT0gdGhpcy5zdGVwLmZsb3dfaWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICAgICAgc3RlcFByb21pc2U6IGZldGNoQ29uZmlnRmxvdyh0aGlzLmhhc3MsIHRoaXMuc3RlcC5mbG93X2lkKSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgXCJkYXRhX2VudHJ5X2Zsb3dfcHJvZ3Jlc3NlZFwiXG4gICAgKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLnN0ZXAudXJsKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1idXR0b24gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1leHRlcm5hbFwiOiBTdGVwRmxvd0V4dGVybmFsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlQ29uZmlnRmxvd1N0ZXAsXG4gIEZpZWxkU2NoZW1hLFxuICBDb25maWdGbG93U3RlcEZvcm0sXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50LCBhcHBseVBvbHltZXJFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1mb3JtXCIpXG5jbGFzcyBTdGVwRmxvd0Zvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgcHVibGljIHN0ZXAhOiBDb25maWdGbG93U3RlcEZvcm07XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9zdGVwRGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZXJyb3JNc2c/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5oYXNzLmxvY2FsaXplO1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG5cbiAgICBjb25zdCBhbGxSZXF1aXJlZEluZm9GaWxsZWRJbiA9XG4gICAgICB0aGlzLl9zdGVwRGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gLy8gSWYgbm8gZGF0YSBmaWxsZWQgaW4sIGp1c3QgY2hlY2sgdGhhdCBhbnkgZmllbGQgaXMgcmVxdWlyZWRcbiAgICAgICAgICBzdGVwLmRhdGFfc2NoZW1hLmZpbmQoKGZpZWxkKSA9PiAhZmllbGQub3B0aW9uYWwpID09PSB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBJZiBkYXRhIGlzIGZpbGxlZCBpbiwgbWFrZSBzdXJlIGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlXG4gICAgICAgICAgdGhpcy5fc3RlcERhdGEgJiZcbiAgICAgICAgICBzdGVwLmRhdGFfc2NoZW1hLmV2ZXJ5KFxuICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICBmaWVsZC5vcHRpb25hbCB8fFxuICAgICAgICAgICAgICAhW1wiXCIsIHVuZGVmaW5lZF0uaW5jbHVkZXModGhpcy5fc3RlcERhdGEhW2ZpZWxkLm5hbWVdKVxuICAgICAgICAgICk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgbG9jYWxpemUsXG4gICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+XG4gICAgICAgICR7bG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgICApfVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5fZXJyb3JNc2dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke2Rlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd24gLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0gYWxsb3ctc3ZnPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgIC5kYXRhPSR7dGhpcy5fc3RlcERhdGFQcm9jZXNzZWR9XG4gICAgICAgICAgQGRhdGEtY2hhbmdlZD0ke3RoaXMuX3N0ZXBEYXRhQ2hhbmdlZH1cbiAgICAgICAgICAuc2NoZW1hPSR7c3RlcC5kYXRhX3NjaGVtYX1cbiAgICAgICAgICAuZXJyb3I9JHtzdGVwLmVycm9yc31cbiAgICAgICAgICAuY29tcHV0ZUxhYmVsPSR7dGhpcy5fbGFiZWxDYWxsYmFja31cbiAgICAgICAgICAuY29tcHV0ZUVycm9yPSR7dGhpcy5fZXJyb3JDYWxsYmFja31cbiAgICAgICAgPjwvaGEtZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgJHt0aGlzLl9sb2FkaW5nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3N1Ym1pdFN0ZXB9XG4gICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshYWxsUmVxdWlyZWRJbmZvRmlsbGVkSW59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgJHshYWxsUmVxdWlyZWRJbmZvRmlsbGVkSW5cbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdCBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQgaW4uXG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldikgPT4ge1xuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdFN0ZXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9zdGVwRGF0YVByb2Nlc3NlZCgpIHtcbiAgICBpZiAodGhpcy5fc3RlcERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBEYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICB0aGlzLnN0ZXAuZGF0YV9zY2hlbWEuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChcImRlZmF1bHRcIiBpbiBmaWVsZCkge1xuICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQuZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N1Ym1pdFN0ZXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fZXJyb3JNc2cgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBmbG93SWQgPSB0aGlzLnN0ZXAuZmxvd19pZDtcbiAgICBjb25zdCBzdGVwRGF0YSA9IHRoaXMuX3N0ZXBEYXRhIHx8IHt9O1xuXG4gICAgY29uc3QgdG9TZW5kRGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHN0ZXBEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RlcERhdGFba2V5XTtcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSBbdW5kZWZpbmVkLCBcIlwiXS5pbmNsdWRlcyh2YWx1ZSk7XG5cbiAgICAgIGlmICghaXNFbXB0eSkge1xuICAgICAgICB0b1NlbmREYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGVwID0gYXdhaXQgaGFuZGxlQ29uZmlnRmxvd1N0ZXAoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGVwLmZsb3dfaWQsXG4gICAgICAgIHRvU2VuZERhdGFcbiAgICAgICk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBzdGlsbCBzaG93aW5nIHRoZSBzYW1lIHN0ZXAgYXMgd2hlbiB3ZVxuICAgICAgLy8gZmlyZWQgb2ZmIHJlcXVlc3QuXG4gICAgICBpZiAoIXRoaXMuc3RlcCB8fCBmbG93SWQgIT09IHRoaXMuc3RlcC5mbG93X2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwge1xuICAgICAgICBzdGVwLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9XG4gICAgICAgIChlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZSkgfHwgXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGVwRGF0YUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBEYXRhID0gYXBwbHlQb2x5bWVyRXZlbnQoZXYsIHRoaXMuX3N0ZXBEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xhYmVsQ2FsbGJhY2sgPSAoc2NoZW1hOiBGaWVsZFNjaGVtYSk6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcCBhcyBDb25maWdGbG93U3RlcEZvcm07XG5cbiAgICByZXR1cm4gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtcbiAgICAgICAgc2NoZW1hLm5hbWVcbiAgICAgIH1gXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIF9lcnJvckNhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+XG4gICAgdGhpcy5oYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHt0aGlzLnN0ZXAuaGFuZGxlcn0uY29uZmlnLmVycm9yLiR7ZXJyb3J9YCk7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBjb25maWdGbG93Q29udGVudFN0eWxlcyxcbiAgICAgIGNzc2BcbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Ym1pdC1zcGlubmVyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWZvcm1cIjogU3RlcEZsb3dGb3JtO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctbG9hZGluZ1wiKVxuY2xhc3MgU3RlcEZsb3dMb2FkaW5nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbml0LXNwaW5uZXJcIj5cbiAgICAgICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmluaXQtc3Bpbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctbG9hZGluZ1wiOiBTdGVwRmxvd0xvYWRpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbmZpZ0Zsb3cgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgKiBhcyBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcblxuaW50ZXJmYWNlIEhhbmRsZXJPYmoge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCIpXG5jbGFzcyBTdGVwRmxvd1BpY2tIYW5kbGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhbmRsZXJzITogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZmlsdGVyPzogc3RyaW5nO1xuICBwcml2YXRlIF93aWR0aD86IG51bWJlcjtcblxuICBwcml2YXRlIF9nZXRIYW5kbGVycyA9IG1lbW9pemVPbmUoKGg6IHN0cmluZ1tdLCBmaWx0ZXI/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyczogSGFuZGxlck9ialtdID0gaC5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlcn0uY29uZmlnLnRpdGxlYCksXG4gICAgICAgIHNsdWc6IGhhbmRsZXIsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgY29uc3Qgb3B0aW9uczogRnVzZS5GdXNlT3B0aW9uczxIYW5kbGVyT2JqPiA9IHtcbiAgICAgICAga2V5czogW1wibmFtZVwiLCBcInNsdWdcIl0sXG4gICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDIsXG4gICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShoYW5kbGVycywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZnVzZS5zZWFyY2goZmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXJzLnNvcnQoKGEsIGIpID0+XG4gICAgICBhLm5hbWUudG9VcHBlckNhc2UoKSA8IGIubmFtZS50b1VwcGVyQ2FzZSgpID8gLTEgOiAxXG4gICAgKTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZ2V0SGFuZGxlcnModGhpcy5oYW5kbGVycywgdGhpcy5maWx0ZXIpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ld1wiKX08L2gyPlxuICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAuZmlsdGVyPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVyQ2hhbmdlZH1cbiAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgIDxkaXYgc3R5bGU9JHtzdHlsZU1hcCh7IHdpZHRoOiBgJHt0aGlzLl93aWR0aH1weGAgfSl9PlxuICAgICAgICAke2hhbmRsZXJzLm1hcChcbiAgICAgICAgICAoaGFuZGxlcjogSGFuZGxlck9iaikgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX2hhbmRsZXJQaWNrZWR9IC5oYW5kbGVyPSR7aGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICR7aGFuZGxlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLmZpbHRlciA9IGUuZGV0YWlsLnZhbHVlO1xuXG4gICAgLy8gU3RvcmUgdGhlIHdpZHRoIHNvIHRoYXQgd2hlbiB3ZSBzZWFyY2gsIGJveCBkb2Vzbid0IGp1bXBcbiAgICBpZiAodGhpcy5fd2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZXJQaWNrZWQoZXYpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICBzdGVwUHJvbWlzZTogY3JlYXRlQ29uZmlnRmxvdyh0aGlzLmhhc3MsIGV2LmN1cnJlbnRUYXJnZXQuaGFuZGxlci5zbHVnKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1waWNrLWhhbmRsZXJcIjogU3RlcEZsb3dQaWNrSGFuZGxlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdGbG93Q29udGVudFN0eWxlcyA9IGNzc2BcbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgaGEtbWFya2Rvd24ge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgaGEtbWFya2Rvd24gYSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG4gIGhhLW1hcmtkb3duIGltZzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiZXhwb3J0IGNvbnN0IGFwcGx5UG9seW1lckV2ZW50ID0gPFQ+KFxuICBldjogUG9seW1lckNoYW5nZWRFdmVudDxUPixcbiAgY3VyVmFsdWU6IFRcbik6IFQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHZhbHVlIH0gPSBldi5kZXRhaWw7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBwcm9wTmFtZSA9IHBhdGguc3BsaXQoXCIuXCIpWzFdO1xuICByZXR1cm4geyAuLi5jdXJWYWx1ZSwgW3Byb3BOYW1lXTogdmFsdWUgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seW1lckNoYW5nZWRFdmVudDxUPiBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgdmFsdWU6IFQ7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBxdWV1ZVByb3BlcnR5OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHltZXJJcm9uU2VsZWN0RXZlbnQ8VD4gZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGl0ZW06IFQ7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGFzcy1sb2dvdXRcIjogdW5kZWZpbmVkO1xuICAgIFwiaXJvbi1yZXNpemVcIjogdW5kZWZpbmVkO1xuICAgIFwiY29uZmlnLXJlZnJlc2hcIjogdW5kZWZpbmVkO1xuICAgIFwiaGFzcy1hcGktY2FsbGVkXCI6IHtcbiAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICByZXNwb25zZTogdW5rbm93bjtcbiAgICB9O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUEyQkE7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFjQTs7O0FBNURBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBVEE7QUFDQTtBQURBO0FBQUE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBV0E7QUFBQTtBQUtBO0FBREE7QUFKQTtBQVNBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBS0E7QUFBQTtBQUdBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBREE7QUFIQTtBQUNBO0FBVUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQUxBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBQ0E7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBREE7QUFIQTtBQUNBO0FBWUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUVBO0FBQ0E7QUFZQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQUVBOzs7OztBQUNBOzs7QUFBQTs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7QUFLQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBZEE7QUFBQTtBQXFCQTtBQXJCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXlCQTtBQUNBO0FBMUJBO0FBQ0E7QUFEQTtBQTZCQTtBQUNBO0FBOUJBO0FBQUE7QUFDQTtBQURBO0FBK0JBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXNDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFHQTtBQTZCQTtBQWFBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBZkE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFDQTtBQURBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBYUE7OztBQTdQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFhQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUF0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUdBOzs7OztBQUdBOzs7OztBQUdBOzs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFPQTtBQWVBO0FBbUJBO0FBQUE7QUFuQkE7QUEyQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQURBO0FBQ0E7QUFQQTtBQU1BO0FBR0E7QUFUQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQVRBO0FBQUE7QUFBQTtBQVlBO0FBREE7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFtQ0E7OztBQS9KQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFTQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUE0QkE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFZQTs7O0FBN0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUdBOzs7OztBQUdBOzs7QUFDQTs7OztBQUVBOzs7OztBQUdBOzs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFLQTtBQU1BO0FBcURBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0JBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQThCQTtBQUNBO0FBREE7QUE5QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFuQ0E7QUFBQTtBQXFDQTtBQXJDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFLQTs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7OztBQUdBO0FBQ0E7QUFZQTs7O0FBM0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBUUE7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7QUFDQTtBQUtBOzs7OztBQUVBO0FBQ0E7QUFNQTs7O0FBaEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQVlBOzs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFhQTs7O0FBbkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
