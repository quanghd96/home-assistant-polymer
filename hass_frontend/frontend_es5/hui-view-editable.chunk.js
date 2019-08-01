(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-view-editable"],
  {
    /***/ "./src/panels/lovelace/components/hui-card-options.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
      /*! exports provided: HuiCardOptions */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiCardOptions",
          function() {
            return HuiCardOptions;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts"
        );
        /* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts"
        );
        /* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts"
        );
        /* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts"
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
            "\n      div.options {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 8px;\n        background: var(--paper-card-background-color, white);\n        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,\n          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,\n          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;\n        display: flex;\n      }\n\n      div.options .primary-actions {\n        flex: 1;\n        margin: auto;\n      }\n\n      div.options .secondary-actions {\n        flex: 4;\n        text-align: right;\n      }\n\n      paper-icon-button {\n        color: var(--primary-text-color);\n      }\n\n      paper-icon-button.move-arrow[disabled] {\n        color: var(--disabled-text-color);\n      }\n\n      paper-menu-button {\n        color: var(--secondary-text-color);\n        padding: 0;\n      }\n\n      paper-item.header {\n        color: var(--primary-text-color);\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <slot></slot>\n      <div class="options">\n        <div class="primary-actions">\n          <mwc-button @click="',
            '"\n            >',
            '</mwc-button\n          >\n        </div>\n        <div class="secondary-actions">\n          <paper-icon-button\n            title="Move card down"\n            class="move-arrow"\n            icon="hass:arrow-down"\n            @click="',
            '"\n            ?disabled="',
            '"\n          ></paper-icon-button>\n          <paper-icon-button\n            title="Move card up"\n            class="move-arrow"\n            icon="hass:arrow-up"\n            @click="',
            '"\n            ?disabled="',
            '"\n          ></paper-icon-button>\n          <paper-menu-button\n            horizontal-align="right"\n            vertical-align="bottom"\n            vertical-offset="40"\n          >\n            <paper-icon-button\n              icon="hass:dots-vertical"\n              slot="dropdown-trigger"\n            ></paper-icon-button>\n            <paper-listbox slot="dropdown-content">\n              <paper-item @click="',
            '"\n                >',
            '</paper-item\n              >\n              <paper-item @click="',
            '"\n                >',
            "</paper-item\n              >\n            </paper-listbox>\n          </paper-menu-button>\n        </div>\n      </div>\n    ",
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

        var HuiCardOptions = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-card-options"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiCardOptions =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiCardOptions, _LitElement2);

                function HuiCardOptions() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiCardOptions);

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
                      HuiCardOptions
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiCardOptions;
              })(_LitElement);

            return {
              F: HuiCardOptions,
              d: [
                {
                  kind: "field",
                  key: "cardConfig",
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
                  key: "lovelace",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "path",
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
                      this._editCard,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.edit"
                      ),
                      this._cardDown,
                      this.lovelace.config.views[this.path[0]].cards.length ===
                        this.path[1] + 1,
                      this._cardUp,
                      this.path[1] === 0,
                      this._moveCard,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.move"
                      ),
                      this._deleteCard,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.edit_card.delete"
                      )
                    );
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
                {
                  kind: "method",
                  key: "_editCard",
                  value: function _editCard() {
                    Object(
                      _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__[
                        "showEditCardDialog"
                      ]
                    )(this, {
                      lovelace: this.lovelace,
                      path: this.path,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_cardUp",
                  value: function _cardUp() {
                    var lovelace = this.lovelace;
                    var path = this.path;
                    lovelace.saveConfig(
                      Object(
                        _editor_config_util__WEBPACK_IMPORTED_MODULE_7__[
                          "swapCard"
                        ]
                      )(lovelace.config, path, [path[0], path[1] - 1])
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_cardDown",
                  value: function _cardDown() {
                    var lovelace = this.lovelace;
                    var path = this.path;
                    lovelace.saveConfig(
                      Object(
                        _editor_config_util__WEBPACK_IMPORTED_MODULE_7__[
                          "swapCard"
                        ]
                      )(lovelace.config, path, [path[0], path[1] + 1])
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_moveCard",
                  value: function _moveCard() {
                    Object(
                      _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__[
                        "showMoveCardViewDialog"
                      ]
                    )(this, {
                      path: this.path,
                      lovelace: this.lovelace,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_deleteCard",
                  value: function _deleteCard() {
                    Object(
                      _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__[
                        "confDeleteCard"
                      ]
                    )(this.lovelace, this.path);
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
      /*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
      /*! exports provided: showMoveCardViewDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showMoveCardViewDialog",
          function() {
            return showMoveCardViewDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var registeredDialog = false;

        var registerEditCardDialog = function registerEditCardDialog(element) {
          return Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "register-dialog", {
            dialogShowEvent: "show-move-card-view",
            dialogTag: "hui-dialog-move-card-view",
            dialogImport: function dialogImport() {
              return Promise.all(
                /*! import() | hui-dialog-move-card-view */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("hui-dialog-move-card-view"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts"
                )
              );
            },
          });
        };

        var showMoveCardViewDialog = function showMoveCardViewDialog(
          element,
          moveCardViewDialogParams
        ) {
          if (!registeredDialog) {
            registeredDialog = true;
            registerEditCardDialog(element);
          }

          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-move-card-view", moveCardViewDialogParams);
        };

        /***/
      },

    /***/ "./src/panels/lovelace/editor/delete-card.ts":
      /*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
      /*! exports provided: confDeleteCard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "confDeleteCard",
          function() {
            return confDeleteCard;
          }
        );
        /* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts"
        );
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

        function confDeleteCard(_x, _x2) {
          return _confDeleteCard.apply(this, arguments);
        }

        function _confDeleteCard() {
          _confDeleteCard = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(lovelace, path) {
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (
                          confirm("Are you sure you want to delete this card?")
                        ) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        _context.prev = 2;
                        _context.next = 5;
                        return lovelace.saveConfig(
                          Object(
                            _config_util__WEBPACK_IMPORTED_MODULE_0__[
                              "deleteCard"
                            ]
                          )(lovelace.config, path)
                        );

                      case 5:
                        _context.next = 10;
                        break;

                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](2);
                        alert("Deleting failed: ".concat(_context.t0.message));

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[2, 7]]
              );
            })
          );
          return _confDeleteCard.apply(this, arguments);
        }

        /***/
      },

    /***/ "./src/panels/lovelace/hui-view-editable.ts":
      /*!**************************************************!*\
  !*** ./src/panels/lovelace/hui-view-editable.ts ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts"
        );
        // hui-view dependencies for when in edit mode.

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9kZWxldGUtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2h1aS12aWV3LWVkaXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBjb25mRGVsZXRlQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvZGVsZXRlLWNhcmRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc3dhcENhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2NvbmZpZy11dGlsXCI7XG5pbXBvcnQgeyBzaG93TW92ZUNhcmRWaWV3RGlhbG9nIH0gZnJvbSBcIi4uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLW9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkT3B0aW9ucyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBhdGg/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2VkaXRDYXJkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZWRpdFwiXG4gICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnktYWN0aW9uc1wiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgZG93blwiXG4gICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmREb3dufVwiXG4gICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMubG92ZWxhY2UhLmNvbmZpZy52aWV3c1t0aGlzLnBhdGghWzBdXS5jYXJkcyFcbiAgICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgICAgICAgdGhpcy5wYXRoIVsxXSArIDF9XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBjYXJkIHVwXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW92ZS1hcnJvd1wiXG4gICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmRVcH1cIlxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLnBhdGghWzFdID09PSAwfVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ249XCJib3R0b21cIlxuICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiNDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9XCIke3RoaXMuX21vdmVDYXJkfVwiXG4gICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5tb3ZlXCJcbiAgICAgICAgICAgICAgICApfTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz1cIiR7dGhpcy5fZGVsZXRlQ2FyZH1cIlxuICAgICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICApfTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgZGl2Lm9wdGlvbnMge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggLTRweCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgZGl2Lm9wdGlvbnMgLnByaW1hcnktYWN0aW9ucyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgZGl2Lm9wdGlvbnMgLnNlY29uZGFyeS1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogNDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uLm1vdmUtYXJyb3dbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0uaGVhZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWRpdENhcmQoKTogdm9pZCB7XG4gICAgc2hvd0VkaXRDYXJkRGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYXJkVXAoKTogdm9pZCB7XG4gICAgY29uc3QgbG92ZWxhY2UgPSB0aGlzLmxvdmVsYWNlITtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoITtcbiAgICBsb3ZlbGFjZS5zYXZlQ29uZmlnKFxuICAgICAgc3dhcENhcmQobG92ZWxhY2UuY29uZmlnLCBwYXRoLCBbcGF0aFswXSwgcGF0aFsxXSAtIDFdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jYXJkRG93bigpOiB2b2lkIHtcbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2UhO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGxvdmVsYWNlLnNhdmVDb25maWcoXG4gICAgICBzd2FwQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgsIFtwYXRoWzBdLCBwYXRoWzFdICsgMV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX21vdmVDYXJkKCk6IHZvaWQge1xuICAgIHNob3dNb3ZlQ2FyZFZpZXdEaWFsb2codGhpcywge1xuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlbGV0ZUNhcmQoKTogdm9pZCB7XG4gICAgY29uZkRlbGV0ZUNhcmQodGhpcy5sb3ZlbGFjZSEsIHRoaXMucGF0aCEpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1vcHRpb25zXCI6IEh1aUNhcmRPcHRpb25zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInNob3ctbW92ZS1jYXJkLXZpZXdcIjogTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zO1xuICB9XG59XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zIHtcbiAgcGF0aDogW251bWJlciwgbnVtYmVyXTtcbiAgbG92ZWxhY2U6IExvdmVsYWNlO1xufVxuXG5jb25zdCByZWdpc3RlckVkaXRDYXJkRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogRXZlbnQgPT5cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiLFxuICAgIGRpYWxvZ1RhZzogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld1wiICovIFwiLi9odWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dNb3ZlQ2FyZFZpZXdEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBtb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM6IE1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgIHJlZ2lzdGVyRWRpdENhcmREaWFsb2coZWxlbWVudCk7XG4gIH1cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiLCBtb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMpO1xufTtcbiIsImltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZWxldGVDYXJkIH0gZnJvbSBcIi4vY29uZmlnLXV0aWxcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmZEZWxldGVDYXJkKFxuICBsb3ZlbGFjZTogTG92ZWxhY2UsXG4gIHBhdGg6IFtudW1iZXIsIG51bWJlcl1cbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2FyZD9cIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBhd2FpdCBsb3ZlbGFjZS5zYXZlQ29uZmlnKGRlbGV0ZUNhcmQobG92ZWxhY2UuY29uZmlnLCBwYXRoKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGFsZXJ0KGBEZWxldGluZyBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gIH1cbn1cbiIsIi8vIGh1aS12aWV3IGRlcGVuZGVuY2llcyBmb3Igd2hlbiBpbiBlZGl0IG1vZGUuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1mYWIvcGFwZXItZmFiXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9uc1wiO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQW9EQTtBQTlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUVBO0FBNkNBO0FBOUdBO0FBQUE7QUFBQTtBQUFBO0FBaUhBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFySEE7QUFBQTtBQUFBO0FBQUE7QUF3SEE7QUFDQTtBQUNBO0FBR0E7QUE3SEE7QUFBQTtBQUFBO0FBQUE7QUFnSUE7QUFDQTtBQUNBO0FBR0E7QUFySUE7QUFBQTtBQUFBO0FBQUE7QUF3SUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQTVJQTtBQUFBO0FBQUE7QUFBQTtBQStJQTtBQUNBO0FBaEpBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQSxrWkFDQTtBQURBO0FBSEE7QUFEQTtBQUNBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
