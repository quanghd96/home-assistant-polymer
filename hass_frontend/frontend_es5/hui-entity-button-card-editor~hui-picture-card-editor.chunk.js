(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-entity-button-card-editor~hui-picture-card-editor"],
  {
    /***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
      /*! exports provided: isEntityId */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isEntityId",
          function() {
            return isEntityId;
          }
        );
        function isEntityId(value) {
          if (typeof value !== "string") {
            return "entity id should be a string";
          }

          if (!value.includes(".")) {
            return "entity id should be in the format 'domain.entity'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/is-icon.ts":
      /*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
      /*! exports provided: isIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isIcon",
          function() {
            return isIcon;
          }
        );
        function isIcon(value) {
          if (typeof value !== "string") {
            return "icon should be a string";
          }

          if (!value.includes(":")) {
            return "icon should be in the format 'mdi:icon'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/struct.ts":
      /*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
      /*! exports provided: struct */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "struct",
          function() {
            return struct;
          }
        );
        /* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! superstruct */ "./node_modules/superstruct/lib/index.es.js"
        );
        /* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts"
        );
        /* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts"
        );

        var struct = Object(
          superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"]
        )({
          types: {
            "entity-id":
              _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
            icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
          },
        });

        /***/
      },

    /***/ "./src/panels/lovelace/components/hui-action-editor.ts":
      /*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-action-editor.ts ***!
  \*************************************************************/
      /*! exports provided: HuiActionEditor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiActionEditor",
          function() {
            return HuiActionEditor;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n            <ha-service-picker\n              .hass="',
            '"\n              .value="',
            '"\n              .configValue="',
            '"\n              @value-changed="',
            '"\n            ></ha-service-picker>\n            <h3>Toggle Editor to input Service Data</h3>\n          ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n            <paper-input\n              label="Navigation Path"\n              .value="',
            '"\n              .configValue="',
            '"\n              @value-changed="',
            '"\n            ></paper-input>\n          ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n              <paper-item>",
            "</paper-item>\n            ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <paper-dropdown-menu\n        .label="',
            '"\n        .configValue="',
            '"\n        @value-changed="',
            '"\n      >\n        <paper-listbox\n          slot="dropdown-content"\n          .selected="',
            '"\n        >\n          ',
            "\n        </paper-listbox>\n      </paper-dropdown-menu>\n      ",
            "\n      ",
            "\n    ",
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

        var HuiActionEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-action-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiActionEditor =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiActionEditor, _LitElement2);

                function HuiActionEditor() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiActionEditor);

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
                      HuiActionEditor
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiActionEditor;
              })(_LitElement);

            return {
              F: HuiActionEditor,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "config",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "label",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "actions",
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
                  kind: "get",
                  key: "_action",
                  value: function _action() {
                    return this.config.action || "";
                  },
                },
                {
                  kind: "get",
                  key: "_navigation_path",
                  value: function _navigation_path() {
                    var config = this.config;
                    return config.navigation_path || "";
                  },
                },
                {
                  kind: "get",
                  key: "_service",
                  value: function _service() {
                    var config = this.config;
                    return config.service || "";
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass || !this.actions) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.label,
                      "action",
                      this._valueChanged,
                      this.actions.indexOf(this._action),
                      this.actions.map(function(action) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject3(), action);
                      }),
                      this._action === "navigate"
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject4(),
                            this._navigation_path,
                            "navigation_path",
                            this._valueChanged
                          )
                        : "",
                      this.config && this.config.action === "call-service"
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject5(),
                            this.hass,
                            this._service,
                            "service",
                            this._valueChanged
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function _valueChanged(ev) {
                    if (!this.hass) {
                      return;
                    }

                    var target = ev.target;

                    if (
                      this.config &&
                      this.config[this["".concat(target.configValue)]] ===
                        target.value
                    ) {
                      return;
                    }

                    if (target.configValue === "action") {
                      this.config = {
                        action: "none",
                      };
                    }

                    if (target.configValue) {
                      this.config = Object.assign(
                        {},
                        this.config,
                        _defineProperty({}, target.configValue, target.value)
                      );
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                          "fireEvent"
                        ]
                      )(this, "action-changed");
                    }
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/types.ts":
      /*!*********************************************!*\
  !*** ./src/panels/lovelace/editor/types.ts ***!
  \*********************************************/
      /*! exports provided: actionConfigStruct */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "actionConfigStruct",
          function() {
            return actionConfigStruct;
          }
        );
        /* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts"
        );

        var actionConfigStruct = Object(
          _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"]
        )({
          action: "string",
          navigation_path: "string?",
          service: "string?",
          service_data: "object?",
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWVudGl0eS1idXR0b24tY2FyZC1lZGl0b3J+aHVpLXBpY3R1cmUtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1hY3Rpb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vZWRpdG9yL3R5cGVzXCI7XG5pbXBvcnQge1xuICBBY3Rpb25Db25maWcsXG4gIE5hdmlnYXRlQWN0aW9uQ29uZmlnLFxuICBDYWxsU2VydmljZUFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJhY3Rpb24tY2hhbmdlZFwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJhY3Rpb24tY2hhbmdlZFwiOiBIQVNTRG9tRXZlbnQ8dW5kZWZpbmVkPjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1hY3Rpb24tZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpQWN0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb25maWc/OiBBY3Rpb25Db25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhY3Rpb25zPzogc3RyaW5nW107XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIGdldCBfYWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnIS5hY3Rpb24gfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmF2aWdhdGlvbl9wYXRoKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWchIGFzIE5hdmlnYXRlQWN0aW9uQ29uZmlnO1xuICAgIHJldHVybiBjb25maWcubmF2aWdhdGlvbl9wYXRoIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3NlcnZpY2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyEgYXMgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWc7XG4gICAgcmV0dXJuIGNvbmZpZy5zZXJ2aWNlIHx8IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuYWN0aW9ucykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAubGFiZWw9XCIke3RoaXMubGFiZWx9XCJcbiAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImFjdGlvblwifVwiXG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLmFjdGlvbnMuaW5kZXhPZih0aGlzLl9hY3Rpb24pfVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7YWN0aW9ufTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICR7dGhpcy5fYWN0aW9uID09PSBcIm5hdmlnYXRlXCJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiTmF2aWdhdGlvbiBQYXRoXCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYXZpZ2F0aW9uX3BhdGh9XCJcbiAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hdmlnYXRpb25fcGF0aFwifVwiXG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hY3Rpb24gPT09IFwiY2FsbC1zZXJ2aWNlXCJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9zZXJ2aWNlfVwiXG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzZXJ2aWNlXCJ9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPjwvaGEtc2VydmljZS1waWNrZXI+XG4gICAgICAgICAgICA8aDM+VG9nZ2xlIEVkaXRvciB0byBpbnB1dCBTZXJ2aWNlIERhdGE8L2gzPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgIHRoaXMuY29uZmlnW3RoaXNbYCR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdXSA9PT0gdGFyZ2V0LnZhbHVlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyBhY3Rpb246IFwibm9uZVwiIH07XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZyEsIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlIH07XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJhY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1hY3Rpb24tZWRpdG9yXCI6IEh1aUFjdGlvbkVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG4gIEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuaW1wb3J0IHsgSW5wdXRUeXBlIH0gZnJvbSBcInpsaWJcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBZYW1sQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICB5YW1sOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0VkaXRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgY29uZmlnOiBMb3ZlbGFjZVZpZXdDb25maWc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVmFsdWUge1xuICBmb3JtYXQ6IFwianNvblwiIHwgXCJ5YW1sXCI7XG4gIHZhbHVlPzogc3RyaW5nIHwgTG92ZWxhY2VDYXJkQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Vycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXRpZXNFZGl0b3JFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGNvbmZpZ1ZhbHVlPzogc3RyaW5nO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICBjb25maWc6IEFjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGlja1RhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgYWN0aW9uOiBcInN0cmluZ1wiLFxuICBuYXZpZ2F0aW9uX3BhdGg6IFwic3RyaW5nP1wiLFxuICBzZXJ2aWNlOiBcInN0cmluZz9cIixcbiAgc2VydmljZV9kYXRhOiBcIm9iamVjdD9cIixcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBV0E7QUFHQTtBQXlCQTtBQWxFQTtBQUFBO0FBQUE7QUFBQTtBQXFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
