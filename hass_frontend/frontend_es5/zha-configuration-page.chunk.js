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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
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

        var HaConfigSection =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigSection, _PolymerElement);

            function HaConfigSection() {
              _classCallCheck(this, HaConfigSection);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigSection).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigSection,
              [
                {
                  key: "computeContentClasses",
                  value: function computeContentClasses(isWide) {
                    var classes = "content ";
                    return isWide ? classes : classes + "narrow";
                  },
                },
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    var classes = "together layout ";
                    return (
                      classes + (isWide ? "horizontal" : "vertical narrow")
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
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
                  },
                },
              ]
            );

            return HaConfigSection;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

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
            '\n              <zha-binding-control\n                .isWide="',
            '"\n                .hass="',
            '"\n                .selectedDevice="',
            '"\n                .bindableDevices="',
            '"\n              ></zha-binding-control>\n            ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n              <zha-cluster-attributes\n                .isWide="',
            '"\n                .hass="',
            '"\n                .selectedNode="',
            '"\n                .selectedCluster="',
            '"\n              ></zha-cluster-attributes>\n\n              <zha-cluster-commands\n                .isWide="',
            '"\n                .hass="',
            '"\n                .selectedNode="',
            '"\n                .selectedCluster="',
            '"\n              ></zha-cluster-commands>\n            ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage header="Zigbee Home Automation">\n        <zha-network\n          .isWide="',
            '"\n          .hass="',
            '"\n        ></zha-network>\n\n        <zha-node\n          .isWide="',
            '"\n          .hass="',
            '"\n          @zha-cluster-selected="',
            '"\n          @zha-node-selected="',
            '"\n        ></zha-node>\n        ',
            "\n        ",
            "\n      </hass-subpage>\n    ",
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

        var HaConfigZha = _decorate(
          null,
          function(_initialize, _LitElement) {
            var HaConfigZha =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaConfigZha, _LitElement2);

                function HaConfigZha() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaConfigZha);

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
                      HaConfigZha
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaConfigZha;
              })(_LitElement);

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
                  value: function value() {
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this.hass,
                      this.isWide,
                      this.hass,
                      this._onClusterSelected,
                      this._onDeviceSelected,
                      this._selectedCluster
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                          )(
                            _templateObject2(),
                            this.isWide,
                            this.hass,
                            this._selectedDevice,
                            this._selectedCluster,
                            this.isWide,
                            this.hass,
                            this._selectedDevice,
                            this._selectedCluster
                          )
                        : "",
                      this._selectedDevice && this._bindableDevices.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                          )(
                            _templateObject3(),
                            this.isWide,
                            this.hass,
                            this._selectedDevice,
                            this._bindableDevices
                          )
                        : ""
                    );
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
                  value: (function() {
                    var _fetchBindableDevices2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!(this._selectedDevice && this.hass)) {
                                    _context.next = 5;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                                      "fetchBindableDevices"
                                    ]
                                  )(this.hass, this._selectedDevice.ieee);

                                case 3:
                                  _context.t0 =
                                    _functions__WEBPACK_IMPORTED_MODULE_11__[
                                      "sortZHADevices"
                                    ];
                                  this._bindableDevices = _context.sent.sort(
                                    _context.t0
                                  );

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

                    function _fetchBindableDevices() {
                      return _fetchBindableDevices2.apply(this, arguments);
                    }

                    return _fetchBindableDevices;
                  })(),
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .command-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .input-text {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .sectionHeader {\n          position: relative;\n        }\n\n        .helpText {\n          color: grey;\n          padding: 16px;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      ",
          ]);

          _templateObject6 = function _templateObject6() {
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                  <div class="helpText">\n                    Unbind devices.\n                  </div>\n                ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                  <div class="helpText">\n                    Bind devices.\n                  </div>\n                ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="helpText">\n                  Select a device to issue a bind command.\n                </div>\n              ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                    <paper-item\n                      >",
            "</paper-item\n                    >\n                  ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-config-section .isWide="',
            '">\n        <div class="sectionHeader" slot="header">\n          <span>Device Binding</span>\n          <paper-icon-button\n            class="toggle-help-icon"\n            @click="',
            '"\n            icon="hass:help-circle"\n          >\n          </paper-icon-button>\n        </div>\n        <span slot="introduction">Bind and unbind devices.</span>\n\n        <ha-card class="content">\n          <div class="command-picker">\n            <paper-dropdown-menu label="Bindable Devices" class="flex">\n              <paper-listbox\n                slot="dropdown-content"\n                .selected="',
            '"\n                @iron-select="',
            '"\n              >\n                ',
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ",
            '\n          <div class="card-actions">\n            <mwc-button @click="',
            '">Bind</mwc-button>\n            ',
            '\n            <mwc-button @click="',
            '"\n              >Unbind</mwc-button\n            >\n            ',
            "\n          </div>\n        </ha-card>\n      </ha-config-section>\n    ",
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

        var ZHABindingControl = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["customElement"])(
              "zha-binding-control"
            ),
          ],
          function(_initialize, _LitElement) {
            var ZHABindingControl =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(ZHABindingControl, _LitElement2);

                function ZHABindingControl() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, ZHABindingControl);

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
                      ZHABindingControl
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return ZHABindingControl;
              })(_LitElement);

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
                  value: function value() {
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
                  value: function value() {
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
                  value: function value() {
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this._onHelpTap,
                      this._bindTargetIndex,
                      this._bindTargetIndexChanged,
                      this.bindableDevices.map(function(device) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                        )(_templateObject2(), device.user_given_name ? device.user_given_name : device.name);
                      }),
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                          )(_templateObject3())
                        : "",
                      this._onBindDevicesClick,
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                          )(_templateObject4())
                        : "",
                      this._onUnbindDevicesClick,
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]
                          )(_templateObject5())
                        : ""
                    );
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
                  value: (function() {
                    var _onBindDevicesClick2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    !(
                                      this.hass &&
                                      this._deviceToBind &&
                                      this.selectedDevice
                                    )
                                  ) {
                                    _context.next = 3;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                                      "bindDevices"
                                    ]
                                  )(
                                    this.hass,
                                    this.selectedDevice.ieee,
                                    this._deviceToBind.ieee
                                  );

                                case 3:
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

                    function _onBindDevicesClick() {
                      return _onBindDevicesClick2.apply(this, arguments);
                    }

                    return _onBindDevicesClick;
                  })(),
                },
                {
                  kind: "method",
                  key: "_onUnbindDevicesClick",
                  value: (function() {
                    var _onUnbindDevicesClick2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  if (
                                    !(
                                      this.hass &&
                                      this._deviceToBind &&
                                      this.selectedDevice
                                    )
                                  ) {
                                    _context2.next = 3;
                                    break;
                                  }

                                  _context2.next = 3;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                                      "unbindDevices"
                                    ]
                                  )(
                                    this.hass,
                                    this.selectedDevice.ieee,
                                    this._deviceToBind.ieee
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

                    function _onUnbindDevicesClick() {
                      return _onUnbindDevicesClick2.apply(this, arguments);
                    }

                    return _onUnbindDevicesClick;
                  })(),
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
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["css"])(
                        _templateObject6()
                      ),
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
            "\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .attribute-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .input-text {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n        .help-text {\n          color: grey;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 16px;\n        }\n        .help-text2 {\n          color: grey;\n          padding: 16px;\n        }\n      ",
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
            '\n              <ha-service-description\n                .hass="',
            '"\n                domain="zha"\n                service="set_zigbee_cluster_attribute"\n                class="help-text2"\n              ></ha-service-description>\n            ',
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="help-text2">\n                Get the value for the selected attribute\n              </div>\n            ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="input-text">\n        <paper-input\n          label="Value"\n          type="string"\n          .value="',
            '"\n          @value-changed="',
            '"\n          placeholder="Value"\n        ></paper-input>\n      </div>\n      <div class="input-text">\n        <paper-input\n          label="Manufacturer code override"\n          type="number"\n          .value="',
            '"\n          @value-changed="',
            '"\n          placeholder="Value"\n        ></paper-input>\n      </div>\n      <div class="card-actions">\n        <mwc-button @click="',
            '"\n          >Get Zigbee Attribute</mwc-button\n        >\n        ',
            '\n        <ha-call-service-button\n          .hass="',
            '"\n          domain="zha"\n          service="set_zigbee_cluster_attribute"\n          .serviceData="',
            '"\n          >Set Zigbee Attribute</ha-call-service-button\n        >\n        ',
            "\n      </div>\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="help-text">\n                  Select an attribute to view or set its value\n                </div>\n              ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                    <paper-item\n                      >",
            "</paper-item\n                    >\n                  ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-config-section .isWide="',
            '">\n        <div style="position: relative" slot="header">\n          <span>Cluster Attributes</span>\n          <paper-icon-button\n            class="toggle-help-icon"\n            @click="',
            '"\n            icon="hass:help-circle"\n          >\n          </paper-icon-button>\n        </div>\n        <span slot="introduction">View and edit cluster attributes.</span>\n\n        <ha-card class="content">\n          <div class="attribute-picker">\n            <paper-dropdown-menu\n              label="Attributes of the selected cluster"\n              class="flex"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                .selected="',
            '"\n                @iron-select="',
            '"\n              >\n                ',
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ",
            "\n          ",
            "\n        </ha-card>\n      </ha-config-section>\n    ",
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

        var ZHAClusterAttributes =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(ZHAClusterAttributes, _LitElement);

            function ZHAClusterAttributes() {
              var _this;

              _classCallCheck(this, ZHAClusterAttributes);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ZHAClusterAttributes).call(this)
              );
              _this.hass = void 0;
              _this.isWide = void 0;
              _this.showHelp = void 0;
              _this.selectedNode = void 0;
              _this.selectedCluster = void 0;
              _this._attributes = void 0;
              _this._selectedAttributeIndex = void 0;
              _this._attributeValue = void 0;
              _this._manufacturerCodeOverride = void 0;
              _this._setAttributeServiceData = void 0;
              _this.showHelp = false;
              _this._selectedAttributeIndex = -1;
              _this._attributes = [];
              _this._attributeValue = "";
              return _this;
            }

            _createClass(
              ZHAClusterAttributes,
              [
                {
                  key: "updated",
                  value: function updated(changedProperties) {
                    if (changedProperties.has("selectedCluster")) {
                      this._attributes = [];
                      this._selectedAttributeIndex = -1;
                      this._attributeValue = "";

                      this._fetchAttributesForCluster();
                    }

                    _get(
                      _getPrototypeOf(ZHAClusterAttributes.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this._onHelpTap,
                      this._selectedAttributeIndex,
                      this._selectedAttributeChanged,
                      this._attributes.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                        )(_templateObject2(), entry.name + " (id: " + Object(_functions__WEBPACK_IMPORTED_MODULE_13__["formatAsPaddedHex"])(entry.id) + ")");
                      }),
                      this.showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                          )(_templateObject3())
                        : "",
                      this._selectedAttributeIndex !== -1
                        ? this._renderAttributeInteractions()
                        : ""
                    );
                  },
                },
                {
                  key: "_renderAttributeInteractions",
                  value: function _renderAttributeInteractions() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                    )(
                      _templateObject4(),
                      this._attributeValue,
                      this._onAttributeValueChanged,
                      this._manufacturerCodeOverride,
                      this._onManufacturerCodeOverrideChanged,
                      this._onGetZigbeeAttributeClick,
                      this.showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                          )(_templateObject5())
                        : "",
                      this.hass,
                      this._setAttributeServiceData,
                      this.showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_10__["html"]
                          )(_templateObject6(), this.hass)
                        : ""
                    );
                  },
                },
                {
                  key: "_fetchAttributesForCluster",
                  value: (function() {
                    var _fetchAttributesForCluster2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    !(
                                      this.selectedNode &&
                                      this.selectedCluster &&
                                      this.hass
                                    )
                                  ) {
                                    _context.next = 5;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
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

                                case 3:
                                  this._attributes = _context.sent;

                                  this._attributes.sort(function(a, b) {
                                    return a.name.localeCompare(b.name);
                                  });

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

                    function _fetchAttributesForCluster() {
                      return _fetchAttributesForCluster2.apply(this, arguments);
                    }

                    return _fetchAttributesForCluster;
                  })(),
                },
                {
                  key: "_computeReadAttributeServiceData",
                  value: function _computeReadAttributeServiceData() {
                    if (!this.selectedCluster || !this.selectedNode) {
                      return;
                    }

                    return {
                      ieee: this.selectedNode.ieee,
                      endpoint_id: this.selectedCluster.endpoint_id,
                      cluster_id: this.selectedCluster.id,
                      cluster_type: this.selectedCluster.type,
                      attribute: this._attributes[this._selectedAttributeIndex]
                        .id,
                      manufacturer: this._manufacturerCodeOverride
                        ? parseInt(this._manufacturerCodeOverride, 10)
                        : undefined,
                    };
                  },
                },
                {
                  key: "_computeSetAttributeServiceData",
                  value: function _computeSetAttributeServiceData() {
                    if (!this.selectedCluster || !this.selectedNode) {
                      return;
                    }

                    return {
                      ieee: this.selectedNode.ieee,
                      endpoint_id: this.selectedCluster.endpoint_id,
                      cluster_id: this.selectedCluster.id,
                      cluster_type: this.selectedCluster.type,
                      attribute: this._attributes[this._selectedAttributeIndex]
                        .id,
                      value: this._attributeValue,
                      manufacturer: this._manufacturerCodeOverride
                        ? parseInt(this._manufacturerCodeOverride, 10)
                        : undefined,
                    };
                  },
                },
                {
                  key: "_onAttributeValueChanged",
                  value: function _onAttributeValueChanged(value) {
                    this._attributeValue = value.detail.value;
                    this._setAttributeServiceData = this._computeSetAttributeServiceData();
                  },
                },
                {
                  key: "_onManufacturerCodeOverrideChanged",
                  value: function _onManufacturerCodeOverrideChanged(value) {
                    this._manufacturerCodeOverride = value.detail.value;
                    this._setAttributeServiceData = this._computeSetAttributeServiceData();
                  },
                },
                {
                  key: "_onGetZigbeeAttributeClick",
                  value: (function() {
                    var _onGetZigbeeAttributeClick2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var data;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  data = this._computeReadAttributeServiceData();

                                  if (!(data && this.hass)) {
                                    _context2.next = 5;
                                    break;
                                  }

                                  _context2.next = 4;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_11__[
                                      "readAttributeValue"
                                    ]
                                  )(this.hass, data);

                                case 4:
                                  this._attributeValue = _context2.sent;

                                case 5:
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

                    function _onGetZigbeeAttributeClick() {
                      return _onGetZigbeeAttributeClick2.apply(this, arguments);
                    }

                    return _onGetZigbeeAttributeClick;
                  })(),
                },
                {
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this.showHelp = !this.showHelp;
                  },
                },
                {
                  key: "_selectedAttributeChanged",
                  value: function _selectedAttributeChanged(event) {
                    this._selectedAttributeIndex = event.target.selected;
                    this._attributeValue = "";
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
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
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_12__[
                        "haStyle"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_10__["css"])(
                        _templateObject7()
                      ),
                    ];
                  },
                },
              ]
            );

            return ZHAClusterAttributes;
          })(lit_element__WEBPACK_IMPORTED_MODULE_10__["LitElement"]);
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .command-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .input-text {\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .sectionHeader {\n          position: relative;\n        }\n\n        .help-text {\n          color: grey;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 16px;\n        }\n\n        .help-text2 {\n          color: grey;\n          padding: 16px;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      ",
          ]);

          _templateObject6 = function _templateObject6() {
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                        <ha-service-description\n                          .hass="',
            '"\n                          domain="zha"\n                          service="issue_zigbee_cluster_command"\n                          class="help-text2"\n                        ></ha-service-description>\n                      ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="input-text">\n                  <paper-input\n                    label="Manufacturer code override"\n                    type="number"\n                    .value="',
            '"\n                    @value-changed="',
            '"\n                    placeholder="Value"\n                  ></paper-input>\n                </div>\n                <div class="card-actions">\n                  <ha-call-service-button\n                    .hass="',
            '"\n                    domain="zha"\n                    service="issue_zigbee_cluster_command"\n                    .serviceData="',
            '"\n                    >Issue Zigbee Command</ha-call-service-button\n                  >\n                  ',
            "\n                </div>\n              ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="help-text">Select a command to interact with</div>\n              ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                    <paper-item\n                      >",
            "</paper-item\n                    >\n                  ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-config-section .isWide="',
            '">\n        <div class="sectionHeader" slot="header">\n          <span>Cluster Commands</span>\n          <paper-icon-button\n            class="toggle-help-icon"\n            @click="',
            '"\n            icon="hass:help-circle"\n          >\n          </paper-icon-button>\n        </div>\n        <span slot="introduction">View and issue cluster commands.</span>\n\n        <ha-card class="content">\n          <div class="command-picker">\n            <paper-dropdown-menu\n              label="Commands of the selected cluster"\n              class="flex"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                .selected="',
            '"\n                @iron-select="',
            '"\n              >\n                ',
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ",
            "\n          ",
            "\n        </ha-card>\n      </ha-config-section>\n    ",
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

        var ZHAClusterCommands =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(ZHAClusterCommands, _LitElement);

            function ZHAClusterCommands() {
              var _this;

              _classCallCheck(this, ZHAClusterCommands);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ZHAClusterCommands).call(this)
              );
              _this.hass = void 0;
              _this.isWide = void 0;
              _this.selectedNode = void 0;
              _this.selectedCluster = void 0;
              _this._showHelp = void 0;
              _this._commands = void 0;
              _this._selectedCommandIndex = void 0;
              _this._manufacturerCodeOverride = void 0;
              _this._issueClusterCommandServiceData = void 0;
              _this._showHelp = false;
              _this._selectedCommandIndex = -1;
              _this._commands = [];
              return _this;
            }

            _createClass(
              ZHAClusterCommands,
              [
                {
                  key: "updated",
                  value: function updated(changedProperties) {
                    if (changedProperties.has("selectedCluster")) {
                      this._commands = [];
                      this._selectedCommandIndex = -1;

                      this._fetchCommandsForCluster();
                    }

                    _get(
                      _getPrototypeOf(ZHAClusterCommands.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this._onHelpTap,
                      this._selectedCommandIndex,
                      this._selectedCommandChanged,
                      this._commands.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]
                        )(_templateObject2(), entry.name + " (id: " + Object(_functions__WEBPACK_IMPORTED_MODULE_12__["formatAsPaddedHex"])(entry.id) + ")");
                      }),
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]
                          )(_templateObject3())
                        : "",
                      this._selectedCommandIndex !== -1
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_9__["html"]
                          )(
                            _templateObject4(),
                            this._manufacturerCodeOverride,
                            this._onManufacturerCodeOverrideChanged,
                            this.hass,
                            this._issueClusterCommandServiceData,
                            this._showHelp
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_9__[
                                    "html"
                                  ]
                                )(_templateObject5(), this.hass)
                              : ""
                          )
                        : ""
                    );
                  },
                },
                {
                  key: "_fetchCommandsForCluster",
                  value: (function() {
                    var _fetchCommandsForCluster2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    !(
                                      this.selectedNode &&
                                      this.selectedCluster &&
                                      this.hass
                                    )
                                  ) {
                                    _context.next = 5;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
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

                                case 3:
                                  this._commands = _context.sent;

                                  this._commands.sort(function(a, b) {
                                    return a.name.localeCompare(b.name);
                                  });

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

                    function _fetchCommandsForCluster() {
                      return _fetchCommandsForCluster2.apply(this, arguments);
                    }

                    return _fetchCommandsForCluster;
                  })(),
                },
                {
                  key: "_computeIssueClusterCommandServiceData",
                  value: function _computeIssueClusterCommandServiceData() {
                    if (!this.selectedNode || !this.selectedCluster) {
                      return;
                    }

                    return {
                      ieee: this.selectedNode.ieee,
                      endpoint_id: this.selectedCluster.endpoint_id,
                      cluster_id: this.selectedCluster.id,
                      cluster_type: this.selectedCluster.type,
                      command: this._commands[this._selectedCommandIndex].id,
                      command_type: this._commands[this._selectedCommandIndex]
                        .type,
                    };
                  },
                },
                {
                  key: "_onManufacturerCodeOverrideChanged",
                  value: function _onManufacturerCodeOverrideChanged(value) {
                    this._manufacturerCodeOverride = value.detail.value;
                    this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
                  },
                },
                {
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this._showHelp = !this._showHelp;
                  },
                },
                {
                  key: "_selectedCommandChanged",
                  value: function _selectedCommandChanged(event) {
                    this._selectedCommandIndex = event.target.selected;
                    this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
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
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_11__[
                        "haStyle"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["css"])(
                        _templateObject6()
                      ),
                    ];
                  },
                },
              ]
            );

            return ZHAClusterCommands;
          })(lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"]);
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
            "\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .node-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n        .help-text {\n          color: grey;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 16px;\n        }\n      ",
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
            '\n            <div class="help-text">\n              Select cluster to view attributes and commands\n            </div>\n          ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                <paper-item>",
            "</paper-item>\n              ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="node-picker">\n        <paper-dropdown-menu label="Clusters" class="flex">\n          <paper-listbox\n            slot="dropdown-content"\n            .selected="',
            '"\n            @iron-select="',
            '"\n          >\n            ',
            "\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n      ",
            "\n    ",
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

        var computeClusterKey = function computeClusterKey(cluster) {
          return ""
            .concat(cluster.name, " (Endpoint id: ")
            .concat(cluster.endpoint_id, ", Id: ")
            .concat(
              Object(
                _functions__WEBPACK_IMPORTED_MODULE_11__["formatAsPaddedHex"]
              )(cluster.id),
              ", Type: "
            )
            .concat(cluster.type, ")");
        };

        var ZHAClusters =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(ZHAClusters, _LitElement);

            function ZHAClusters() {
              var _this;

              _classCallCheck(this, ZHAClusters);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ZHAClusters).call(this)
              );
              _this.hass = void 0;
              _this.isWide = void 0;
              _this.showHelp = void 0;
              _this.selectedDevice = void 0;
              _this._selectedClusterIndex = void 0;
              _this._clusters = void 0;
              _this.showHelp = false;
              _this._selectedClusterIndex = -1;
              _this._clusters = [];
              return _this;
            }

            _createClass(
              ZHAClusters,
              [
                {
                  key: "updated",
                  value: function updated(changedProperties) {
                    if (changedProperties.has("selectedDevice")) {
                      this._clusters = [];
                      this._selectedClusterIndex = -1;
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__[
                          "fireEvent"
                        ]
                      )(this, "zha-cluster-selected", {
                        cluster: undefined,
                      });

                      this._fetchClustersForZhaNode();
                    }

                    _get(
                      _getPrototypeOf(ZHAClusters.prototype),
                      "update",
                      this
                    ).call(this, changedProperties);
                  },
                },
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]
                    )(
                      _templateObject(),
                      this._selectedClusterIndex,
                      this._selectedClusterChanged,
                      this._clusters.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]
                        )(_templateObject2(), computeClusterKey(entry));
                      }),
                      this.showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]
                          )(_templateObject3())
                        : ""
                    );
                  },
                },
                {
                  key: "_fetchClustersForZhaNode",
                  value: (function() {
                    var _fetchClustersForZhaNode2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!this.hass) {
                                    _context.next = 5;
                                    break;
                                  }

                                  _context.next = 3;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_9__[
                                      "fetchClustersForZhaNode"
                                    ]
                                  )(this.hass, this.selectedDevice.ieee);

                                case 3:
                                  this._clusters = _context.sent;

                                  this._clusters.sort(function(a, b) {
                                    return a.name.localeCompare(b.name);
                                  });

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

                    function _fetchClustersForZhaNode() {
                      return _fetchClustersForZhaNode2.apply(this, arguments);
                    }

                    return _fetchClustersForZhaNode;
                  })(),
                },
                {
                  key: "_selectedClusterChanged",
                  value: function _selectedClusterChanged(event) {
                    this._selectedClusterIndex = event.target.selected;
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__[
                        "fireEvent"
                      ]
                    )(this, "zha-cluster-selected", {
                      cluster: this._clusters[this._selectedClusterIndex],
                    });
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      isWide: {},
                      showHelp: {},
                      selectedDevice: {},
                      _selectedClusterIndex: {},
                      _clusters: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_10__[
                        "haStyle"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["css"])(
                        _templateObject4()
                      ),
                    ];
                  },
                },
              ]
            );

            return ZHAClusters;
          })(lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]);
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
            "\n        .content {\n          margin-top: 24px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .card-actions.warning ha-call-service-button {\n          color: var(--google-red-500);\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n\n        .help-text2 {\n          color: grey;\n          padding: 16px;\n        }\n      ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                  <ha-service-description\n                    .hass="',
            '"\n                    domain="zha"\n                    service="permit"\n                    class="help-text2"\n                  />\n                ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-config-section .isWide="',
            '">\n        <div style="position: relative" slot="header">\n          <span>Network Management</span>\n          <paper-icon-button\n            class="toggle-help-icon"\n            @click="',
            '"\n            icon="hass:help-circle"\n          ></paper-icon-button>\n        </div>\n        <span slot="introduction">Commands that affect entire network</span>\n\n        <ha-card class="content">\n          <div class="card-actions">\n            <mwc-button @click=',
            ">\n              Add Devices\n            </mwc-button>\n            ",
            "\n          </div>\n        </ha-card>\n      </ha-config-section>\n    ",
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

        var ZHANetwork =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(ZHANetwork, _LitElement);

            function ZHANetwork() {
              var _this;

              _classCallCheck(this, ZHANetwork);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ZHANetwork).call(this)
              );
              _this.hass = void 0;
              _this.isWide = void 0;
              _this._showHelp = void 0;
              _this._showHelp = false;
              return _this;
            }

            _createClass(
              ZHANetwork,
              [
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this._onHelpTap,
                      this._onAddDevicesClick,
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]
                          )(_templateObject2(), this.hass)
                        : ""
                    );
                  },
                },
                {
                  key: "_onHelpTap",
                  value: function _onHelpTap() {
                    this._showHelp = !this._showHelp;
                  },
                },
                {
                  key: "_onAddDevicesClick",
                  value: function _onAddDevicesClick() {
                    Object(
                      _common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"]
                    )(this, "add");
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      isWide: {},
                      _showHelp: {},
                      _joinParams: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyle"],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["css"])(
                        _templateObject3()
                      ),
                    ];
                  },
                },
              ]
            );

            return ZHANetwork;
          })(lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n        .flex {\n          -ms-flex: 1 1 0.000000001px;\n          -webkit-flex: 1;\n          flex: 1;\n          -webkit-flex-basis: 0.000000001px;\n          flex-basis: 0.000000001px;\n        }\n\n        .content {\n          margin-top: 24px;\n        }\n\n        .node-info {\n          margin-left: 16px;\n        }\n\n        .sectionHeader {\n          position: relative;\n        }\n\n        .help-text {\n          color: grey;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 16px;\n        }\n\n        ha-card {\n          margin: 0 auto;\n          max-width: 600px;\n        }\n\n        .node-picker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n          -ms-flex-align: center;\n          -webkit-align-items: center;\n          align-items: center;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n        }\n\n        .card {\n          box-sizing: border-box;\n          display: flex;\n          flex: 1 0 300px;\n          min-width: 0;\n          max-width: 600px;\n          padding-left: 28px;\n          padding-right: 28px;\n          padding-bottom: 10px;\n          word-wrap: break-word;\n        }\n\n        ha-service-description {\n          display: block;\n          color: grey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n\n        .toggle-help-icon {\n          position: absolute;\n          top: 6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n      ",
          ]);

          _templateObject6 = function _templateObject6() {
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n      <zha-clusters\n        .hass="',
            '"\n        .selectedDevice="',
            '"\n        .showHelp="',
            '"\n      ></zha-clusters>\n    ',
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                <zha-device-card\n                  class="card"\n                  .hass="',
            '"\n                  .device="',
            '"\n                  .narrow="',
            '"\n                  .showHelp="',
            '"\n                  .showActions="',
            '"\n                  @zha-device-removed="',
            '"\n                  .isJoinPage="',
            '"\n                ></zha-device-card>\n              ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="help-text">\n                  Select device to view per-device options\n                </div>\n              ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                    <paper-item\n                      >",
            "</paper-item\n                    >\n                  ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-config-section .isWide="',
            '">\n        <div class="sectionHeader" slot="header">\n          <span>Device Management</span>\n          <paper-icon-button\n            class="toggle-help-icon"\n            @click="',
            '"\n            icon="hass:help-circle"\n          ></paper-icon-button>\n        </div>\n        <span slot="introduction">\n          Run ZHA commands that affect a single device. Pick a device to see a\n          list of available commands. <br /><br />Note: Sleepy (battery powered)\n          devices need to be awake when executing commands against them. You can\n          generally wake a sleepy device by triggering it. <br /><br />Some\n          devices such as Xiaomi sensors have a wake up button that you can\n          press at ~5 second intervals that keep devices awake while you\n          interact with them.\n        </span>\n        <ha-card class="content">\n          <div class="node-picker">\n            <paper-dropdown-menu\n              label="Devices"\n              class="flex"\n              id="zha-device-selector"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                @iron-select="',
            '"\n                .selected="',
            '"\n              >\n                ',
            "\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          ",
            "\n          ",
            "\n          ",
            "\n        </ha-card>\n      </ha-config-section>\n    ",
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

        var ZHANode = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["customElement"])(
              "zha-node"
            ),
          ],
          function(_initialize, _LitElement) {
            var ZHANode =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(ZHANode, _LitElement2);

                function ZHANode() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, ZHANode);

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
                    (_getPrototypeOf2 = _getPrototypeOf(ZHANode)).call.apply(
                      _getPrototypeOf2,
                      [this].concat(args)
                    )
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return ZHANode;
              })(_LitElement);

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
                  value: function value() {
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
                  value: function value() {
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
                  value: function value() {
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                    )(
                      _templateObject(),
                      this.isWide,
                      this._onHelpTap,
                      this._selectedDeviceChanged,
                      this._selectedDeviceIndex,
                      this._nodes.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                        )(_templateObject2(), entry.user_given_name ? entry.user_given_name : entry.name);
                      }),
                      this._showHelp
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                          )(_templateObject3())
                        : "",
                      this._selectedDeviceIndex !== -1
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                          )(
                            _templateObject4(),
                            this.hass,
                            this._selectedDevice,
                            !this.isWide,
                            this._showHelp,
                            true,
                            this._onDeviceRemoved,
                            false
                          )
                        : "",
                      this._selectedDevice ? this._renderClusters() : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_renderClusters",
                  value: function _renderClusters() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_11__["html"]
                    )(
                      _templateObject5(),
                      this.hass,
                      this._selectedDevice,
                      this._showHelp
                    );
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
                  value: (function() {
                    var _fetchDevices2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Object(
                                    _data_zha__WEBPACK_IMPORTED_MODULE_13__[
                                      "fetchDevices"
                                    ]
                                  )(this.hass);

                                case 2:
                                  _context.t0 =
                                    _functions__WEBPACK_IMPORTED_MODULE_15__[
                                      "sortZHADevices"
                                    ];
                                  this._nodes = _context.sent.sort(_context.t0);

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

                    function _fetchDevices() {
                      return _fetchDevices2.apply(this, arguments);
                    }

                    return _fetchDevices;
                  })(),
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
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_11__["css"])(
                        _templateObject6()
                      ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWNvbmZpZ3VyYXRpb24tcGFnZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2hhLWNvbmZpZy1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS9oYS1jb25maWctemhhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYmluZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNsdXN0ZXItYXR0cmlidXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNsdXN0ZXItY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1jbHVzdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLW5ldHdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1ub2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4vemhhLWJpbmRpbmdcIjtcbmltcG9ydCBcIi4vemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi96aGEtY2x1c3Rlci1jb21tYW5kc1wiO1xuaW1wb3J0IFwiLi96aGEtbmV0d29ya1wiO1xuaW1wb3J0IFwiLi96aGEtbm9kZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ2x1c3RlciwgZmV0Y2hCaW5kYWJsZURldmljZXMsIFpIQURldmljZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzb3J0WkhBRGV2aWNlcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgWkhBQ2x1c3RlclNlbGVjdGVkUGFyYW1zLCBaSEFEZXZpY2VTZWxlY3RlZFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ1poYSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZERldmljZT86IFpIQURldmljZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfc2VsZWN0ZWREZXZpY2VcIikpIHtcbiAgICAgIHRoaXMuX2ZldGNoQmluZGFibGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIlppZ2JlZSBIb21lIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPHpoYS1uZXR3b3JrXG4gICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgID48L3poYS1uZXR3b3JrPlxuXG4gICAgICAgIDx6aGEtbm9kZVxuICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIEB6aGEtY2x1c3Rlci1zZWxlY3RlZD1cIiR7dGhpcy5fb25DbHVzdGVyU2VsZWN0ZWR9XCJcbiAgICAgICAgICBAemhhLW5vZGUtc2VsZWN0ZWQ9XCIke3RoaXMuX29uRGV2aWNlU2VsZWN0ZWR9XCJcbiAgICAgICAgPjwvemhhLW5vZGU+XG4gICAgICAgICR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWNsdXN0ZXItYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZE5vZGU9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkQ2x1c3Rlcj1cIiR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyfVwiXG4gICAgICAgICAgICAgID48L3poYS1jbHVzdGVyLWF0dHJpYnV0ZXM+XG5cbiAgICAgICAgICAgICAgPHpoYS1jbHVzdGVyLWNvbW1hbmRzXG4gICAgICAgICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkTm9kZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWRDbHVzdGVyPVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJ9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWNsdXN0ZXItY29tbWFuZHM+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuX3NlbGVjdGVkRGV2aWNlICYmIHRoaXMuX2JpbmRhYmxlRGV2aWNlcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWJpbmRpbmctY29udHJvbFxuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZERldmljZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuYmluZGFibGVEZXZpY2VzPVwiJHt0aGlzLl9iaW5kYWJsZURldmljZXN9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWJpbmRpbmctY29udHJvbD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DbHVzdGVyU2VsZWN0ZWQoXG4gICAgc2VsZWN0ZWRDbHVzdGVyRXZlbnQ6IEhBU1NEb21FdmVudDxaSEFDbHVzdGVyU2VsZWN0ZWRQYXJhbXM+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHNlbGVjdGVkQ2x1c3RlckV2ZW50LmRldGFpbC5jbHVzdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25EZXZpY2VTZWxlY3RlZChcbiAgICBzZWxlY3RlZE5vZGVFdmVudDogSEFTU0RvbUV2ZW50PFpIQURldmljZVNlbGVjdGVkUGFyYW1zPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHNlbGVjdGVkTm9kZUV2ZW50LmRldGFpbC5ub2RlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQmluZGFibGVEZXZpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZERldmljZSAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2JpbmRhYmxlRGV2aWNlcyA9IChhd2FpdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLl9zZWxlY3RlZERldmljZSEuaWVlZVxuICAgICAgKSkuc29ydChzb3J0WkhBRGV2aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbaGFTdHlsZV07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy16aGFcIjogSGFDb25maWdaaGE7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXpoYVwiLCBIYUNvbmZpZ1poYSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBiaW5kRGV2aWNlcywgdW5iaW5kRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEl0ZW1TZWxlY3RlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1iaW5kaW5nLWNvbnRyb2xcIilcbmV4cG9ydCBjbGFzcyBaSEFCaW5kaW5nQ29udHJvbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0ZWREZXZpY2U/OiBaSEFEZXZpY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2JpbmRUYXJnZXRJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuICBwcml2YXRlIF9kZXZpY2VUb0JpbmQ/OiBaSEFEZXZpY2U7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkRGV2aWNlXCIpKSB7XG4gICAgICB0aGlzLl9iaW5kVGFyZ2V0SW5kZXggPSAtMTtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+RGV2aWNlIEJpbmRpbmc8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5CaW5kIGFuZCB1bmJpbmQgZGV2aWNlcy48L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmQtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIkJpbmRhYmxlIERldmljZXNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9iaW5kVGFyZ2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX2JpbmRUYXJnZXRJbmRleENoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5iaW5kYWJsZURldmljZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGRldmljZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtkZXZpY2UudXNlcl9naXZlbl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRldmljZS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGV2aWNlLm5hbWV9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGEgZGV2aWNlIHRvIGlzc3VlIGEgYmluZCBjb21tYW5kLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vbkJpbmREZXZpY2VzQ2xpY2t9XCI+QmluZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHBUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIEJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vblVuYmluZERldmljZXNDbGlja31cIlxuICAgICAgICAgICAgICA+VW5iaW5kPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBVbmJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVGFyZ2V0SW5kZXhDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fZGV2aWNlVG9CaW5kID1cbiAgICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9PT0gLTFcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiB0aGlzLmJpbmRhYmxlRGV2aWNlc1t0aGlzLl9iaW5kVGFyZ2V0SW5kZXhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25CaW5kRGV2aWNlc0NsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5fZGV2aWNlVG9CaW5kICYmIHRoaXMuc2VsZWN0ZWREZXZpY2UpIHtcbiAgICAgIGF3YWl0IGJpbmREZXZpY2VzKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UuaWVlZSxcbiAgICAgICAgdGhpcy5fZGV2aWNlVG9CaW5kLmllZWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25VbmJpbmREZXZpY2VzQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLl9kZXZpY2VUb0JpbmQgJiYgdGhpcy5zZWxlY3RlZERldmljZSkge1xuICAgICAgYXdhaXQgdW5iaW5kRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlLmllZWUsXG4gICAgICAgIHRoaXMuX2RldmljZVRvQmluZC5pZWVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1hbmQtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwVGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWJpbmRpbmctY29udHJvbFwiOiBaSEFCaW5kaW5nQ29udHJvbDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7XG4gIEF0dHJpYnV0ZSxcbiAgQ2x1c3RlcixcbiAgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcixcbiAgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxuICByZWFkQXR0cmlidXRlVmFsdWUsXG4gIFpIQURldmljZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuICBDaGFuZ2VFdmVudCxcbiAgSXRlbVNlbGVjdGVkRXZlbnQsXG4gIFNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgWkhBQ2x1c3RlckF0dHJpYnV0ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIHNob3dIZWxwOiBib29sZWFuO1xuICBwdWJsaWMgc2VsZWN0ZWROb2RlPzogWkhBRGV2aWNlO1xuICBwdWJsaWMgc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlW107XG4gIHByaXZhdGUgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlVmFsdWU/OiBhbnk7XG4gIHByaXZhdGUgX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlU2VydmljZURhdGE/OiBTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ID0gLTE7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgIHRoaXMuX2F0dHJpYnV0ZVZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIHNob3dIZWxwOiB7fSxcbiAgICAgIHNlbGVjdGVkTm9kZToge30sXG4gICAgICBzZWxlY3RlZENsdXN0ZXI6IHt9LFxuICAgICAgX2F0dHJpYnV0ZXM6IHt9LFxuICAgICAgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IHt9LFxuICAgICAgX2F0dHJpYnV0ZVZhbHVlOiB7fSxcbiAgICAgIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU6IHt9LFxuICAgICAgX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkQ2x1c3RlclwiKSkge1xuICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBcIlwiO1xuICAgICAgdGhpcy5fZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcigpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPkNsdXN0ZXIgQXR0cmlidXRlczwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlZpZXcgYW5kIGVkaXQgY2x1c3RlciBhdHRyaWJ1dGVzLjwvc3Bhbj5cblxuICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJBdHRyaWJ1dGVzIG9mIHRoZSBzZWxlY3RlZCBjbHVzdGVyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4fVwiXG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fYXR0cmlidXRlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgPiR7ZW50cnkubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAoaWQ6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEFzUGFkZGVkSGV4KGVudHJ5LmlkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcIn08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICBTZWxlY3QgYW4gYXR0cmlidXRlIHRvIHZpZXcgb3Igc2V0IGl0cyB2YWx1ZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKVxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJWYWx1ZVwiXG4gICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9hdHRyaWJ1dGVWYWx1ZX1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9vbkF0dHJpYnV0ZVZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFsdWVcIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJNYW51ZmFjdHVyZXIgY29kZSBvdmVycmlkZVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGV9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fb25NYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGVDaGFuZ2VkfVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fb25HZXRaaWdiZWVBdHRyaWJ1dGVDbGlja31cIlxuICAgICAgICAgID5HZXQgWmlnYmVlIEF0dHJpYnV0ZTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dDJcIj5cbiAgICAgICAgICAgICAgICBHZXQgdGhlIHZhbHVlIGZvciB0aGUgc2VsZWN0ZWQgYXR0cmlidXRlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICBzZXJ2aWNlPVwic2V0X3ppZ2JlZV9jbHVzdGVyX2F0dHJpYnV0ZVwiXG4gICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9zZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YX1cIlxuICAgICAgICAgID5TZXQgWmlnYmVlIEF0dHJpYnV0ZTwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3ppZ2JlZV9jbHVzdGVyX2F0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHQyXCJcbiAgICAgICAgICAgICAgPjwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgJiYgdGhpcy5zZWxlY3RlZENsdXN0ZXIgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXdhaXQgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcihcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZSEuaWVlZSxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmVuZHBvaW50X2lkLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuaWQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS50eXBlXG4gICAgICApO1xuICAgICAgdGhpcy5fYXR0cmlidXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpOlxuICAgIHwgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4gICAgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZENsdXN0ZXIgfHwgIXRoaXMuc2VsZWN0ZWROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZWVlOiB0aGlzLnNlbGVjdGVkTm9kZSEuaWVlZSxcbiAgICAgIGVuZHBvaW50X2lkOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuZW5kcG9pbnRfaWQsXG4gICAgICBjbHVzdGVyX2lkOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuaWQsXG4gICAgICBjbHVzdGVyX3R5cGU6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS50eXBlLFxuICAgICAgYXR0cmlidXRlOiB0aGlzLl9hdHRyaWJ1dGVzW3RoaXMuX3NlbGVjdGVkQXR0cmlidXRlSW5kZXhdLmlkLFxuICAgICAgbWFudWZhY3R1cmVyOiB0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGVcbiAgICAgICAgPyBwYXJzZUludCh0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGUgYXMgc3RyaW5nLCAxMClcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpOlxuICAgIHwgU2V0QXR0cmlidXRlU2VydmljZURhdGFcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkQ2x1c3RlciB8fCAhdGhpcy5zZWxlY3RlZE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGllZWU6IHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgZW5kcG9pbnRfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgIGNsdXN0ZXJfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgIGNsdXN0ZXJfdHlwZTogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGUsXG4gICAgICBhdHRyaWJ1dGU6IHRoaXMuX2F0dHJpYnV0ZXNbdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleF0uaWQsXG4gICAgICB2YWx1ZTogdGhpcy5fYXR0cmlidXRlVmFsdWUsXG4gICAgICBtYW51ZmFjdHVyZXI6IHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZVxuICAgICAgICA/IHBhcnNlSW50KHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZSBhcyBzdHJpbmcsIDEwKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfb25BdHRyaWJ1dGVWYWx1ZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhID0gdGhpcy5fY29tcHV0ZVNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSA9IHRoaXMuX2NvbXB1dGVTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25HZXRaaWdiZWVBdHRyaWJ1dGVDbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fY29tcHV0ZVJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSgpO1xuICAgIGlmIChkYXRhICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBhd2FpdCByZWFkQXR0cmlidXRlVmFsdWUodGhpcy5oYXNzLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93SGVscCA9ICF0aGlzLnNob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRBdHRyaWJ1dGVDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQXR0cmlidXRlSW5kZXggPSBldmVudC50YXJnZXQhLnNlbGVjdGVkO1xuICAgIHRoaXMuX2F0dHJpYnV0ZVZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQyIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jbHVzdGVyLWF0dHJpYnV0ZXNcIjogWkhBQ2x1c3RlckF0dHJpYnV0ZXM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiLCBaSEFDbHVzdGVyQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQge1xuICBDbHVzdGVyLFxuICBDb21tYW5kLFxuICBmZXRjaENvbW1hbmRzRm9yQ2x1c3RlcixcbiAgWkhBRGV2aWNlLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7XG4gIENoYW5nZUV2ZW50LFxuICBJc3N1ZUNvbW1hbmRTZXJ2aWNlRGF0YSxcbiAgSXRlbVNlbGVjdGVkRXZlbnQsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBaSEFDbHVzdGVyQ29tbWFuZHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIHNlbGVjdGVkTm9kZT86IFpIQURldmljZTtcbiAgcHVibGljIHNlbGVjdGVkQ2x1c3Rlcj86IENsdXN0ZXI7XG4gIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuO1xuICBwcml2YXRlIF9jb21tYW5kczogQ29tbWFuZFtdO1xuICBwcml2YXRlIF9zZWxlY3RlZENvbW1hbmRJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YT86IElzc3VlQ29tbWFuZFNlcnZpY2VEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleCA9IC0xO1xuICAgIHRoaXMuX2NvbW1hbmRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGlzV2lkZToge30sXG4gICAgICBzZWxlY3RlZE5vZGU6IHt9LFxuICAgICAgc2VsZWN0ZWRDbHVzdGVyOiB7fSxcbiAgICAgIF9zaG93SGVscDoge30sXG4gICAgICBfY29tbWFuZHM6IHt9LFxuICAgICAgX3NlbGVjdGVkQ29tbWFuZEluZGV4OiB7fSxcbiAgICAgIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU6IHt9LFxuICAgICAgX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YToge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzZWxlY3RlZENsdXN0ZXJcIikpIHtcbiAgICAgIHRoaXMuX2NvbW1hbmRzID0gW107XG4gICAgICB0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fZmV0Y2hDb21tYW5kc0ZvckNsdXN0ZXIoKTtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+Q2x1c3RlciBDb21tYW5kczwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlZpZXcgYW5kIGlzc3VlIGNsdXN0ZXIgY29tbWFuZHMuPC9zcGFuPlxuXG4gICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tYW5kLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb21tYW5kcyBvZiB0aGUgc2VsZWN0ZWQgY2x1c3RlclwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX3NlbGVjdGVkQ29tbWFuZENoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fY29tbWFuZHMubWFwKFxuICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgID4ke2VudHJ5Lm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKGlkOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRBc1BhZGRlZEhleChlbnRyeS5pZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJ9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5TZWxlY3QgYSBjb21tYW5kIHRvIGludGVyYWN0IHdpdGg8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7dGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXggIT09IC0xXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hbnVmYWN0dXJlciBjb2RlIG92ZXJyaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlfVwiXG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJpc3N1ZV96aWdiZWVfY2x1c3Rlcl9jb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGF9XCJcbiAgICAgICAgICAgICAgICAgICAgPklzc3VlIFppZ2JlZSBDb21tYW5kPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cImlzc3VlX3ppZ2JlZV9jbHVzdGVyX2NvbW1hbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtdGV4dDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENvbW1hbmRzRm9yQ2x1c3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgJiYgdGhpcy5zZWxlY3RlZENsdXN0ZXIgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9jb21tYW5kcyA9IGF3YWl0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuZW5kcG9pbnRfaWQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGVcbiAgICAgICk7XG4gICAgICB0aGlzLl9jb21tYW5kcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUlzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YSgpOlxuICAgIHwgSXNzdWVDb21tYW5kU2VydmljZURhdGFcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkTm9kZSB8fCAhdGhpcy5zZWxlY3RlZENsdXN0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGllZWU6IHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgZW5kcG9pbnRfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgIGNsdXN0ZXJfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgIGNsdXN0ZXJfdHlwZTogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGUsXG4gICAgICBjb21tYW5kOiB0aGlzLl9jb21tYW5kc1t0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleF0uaWQsXG4gICAgICBjb21tYW5kX3R5cGU6IHRoaXMuX2NvbW1hbmRzW3RoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4XS50eXBlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9vbk1hbnVmYWN0dXJlckNvZGVPdmVycmlkZUNoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgICB0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEgPSB0aGlzLl9jb21wdXRlSXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENvbW1hbmRDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4ID0gZXZlbnQudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICB0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEgPSB0aGlzLl9jb21wdXRlSXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tYW5kLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQyIHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtY2x1c3Rlci1jb21tYW5kc1wiOiBaSEFDbHVzdGVyQ29tbWFuZHM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiemhhLWNsdXN0ZXItY29tbWFuZHNcIiwgWkhBQ2x1c3RlckNvbW1hbmRzKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBDbHVzdGVyLCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSwgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBJdGVtU2VsZWN0ZWRFdmVudCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiemhhLWNsdXN0ZXItc2VsZWN0ZWRcIjoge1xuICAgICAgY2x1c3Rlcj86IENsdXN0ZXI7XG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG5cbmV4cG9ydCBjbGFzcyBaSEFDbHVzdGVycyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBwdWJsaWMgc2hvd0hlbHA6IGJvb2xlYW47XG4gIHB1YmxpYyBzZWxlY3RlZERldmljZT86IFpIQURldmljZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVySW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY2x1c3RlcnM6IENsdXN0ZXJbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleCA9IC0xO1xuICAgIHRoaXMuX2NsdXN0ZXJzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGlzV2lkZToge30sXG4gICAgICBzaG93SGVscDoge30sXG4gICAgICBzZWxlY3RlZERldmljZToge30sXG4gICAgICBfc2VsZWN0ZWRDbHVzdGVySW5kZXg6IHt9LFxuICAgICAgX2NsdXN0ZXJzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkRGV2aWNlXCIpKSB7XG4gICAgICB0aGlzLl9jbHVzdGVycyA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRDbHVzdGVySW5kZXggPSAtMTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInpoYS1jbHVzdGVyLXNlbGVjdGVkXCIsIHtcbiAgICAgICAgY2x1c3RlcjogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9mZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSgpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtcGlja2VyXCI+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiQ2x1c3RlcnNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleH1cIlxuICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJDaGFuZ2VkfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLl9jbHVzdGVycy5tYXAoXG4gICAgICAgICAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2NvbXB1dGVDbHVzdGVyS2V5KGVudHJ5KX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgIFNlbGVjdCBjbHVzdGVyIHRvIHZpZXcgYXR0cmlidXRlcyBhbmQgY29tbWFuZHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9jbHVzdGVycyA9IGF3YWl0IGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UhLmllZWVcbiAgICAgICk7XG4gICAgICB0aGlzLl9jbHVzdGVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVyQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiemhhLWNsdXN0ZXItc2VsZWN0ZWRcIiwge1xuICAgICAgY2x1c3RlcjogdGhpcy5fY2x1c3RlcnNbdGhpcy5fc2VsZWN0ZWRDbHVzdGVySW5kZXhdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vZGUtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jbHVzdGVyXCI6IFpIQUNsdXN0ZXJzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInpoYS1jbHVzdGVyc1wiLCBaSEFDbHVzdGVycyk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBaSEFOZXR3b3JrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIF9zaG93SGVscDoge30sXG4gICAgICBfam9pblBhcmFtczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5OZXR3b3JrIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5Db21tYW5kcyB0aGF0IGFmZmVjdCBlbnRpcmUgbmV0d29yazwvc3Bhbj5cblxuICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9vbkFkZERldmljZXNDbGlja30+XG4gICAgICAgICAgICAgIEFkZCBEZXZpY2VzXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInBlcm1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0MlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9vbkFkZERldmljZXNDbGljaygpIHtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBcImFkZFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtc2VydmljZS1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dDIge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLW5ldHdvcmtcIjogWkhBTmV0d29yaztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6aGEtbmV0d29ya1wiLCBaSEFOZXR3b3JrKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4vemhhLWNsdXN0ZXJzXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2UtY2FyZFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGZldGNoRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNvcnRaSEFEZXZpY2VzIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBJdGVtU2VsZWN0ZWRFdmVudCwgWkhBRGV2aWNlUmVtb3ZlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiOiB7XG4gICAgICBub2RlPzogWkhBRGV2aWNlO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtbm9kZVwiKVxuZXhwb3J0IGNsYXNzIFpIQU5vZGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0hlbHA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkRGV2aWNlPzogWkhBRGV2aWNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub2RlczogWkhBRGV2aWNlW10gPSBbXTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9mZXRjaERldmljZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+RGV2aWNlIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICBSdW4gWkhBIGNvbW1hbmRzIHRoYXQgYWZmZWN0IGEgc2luZ2xlIGRldmljZS4gUGljayBhIGRldmljZSB0byBzZWUgYVxuICAgICAgICAgIGxpc3Qgb2YgYXZhaWxhYmxlIGNvbW1hbmRzLiA8YnIgLz48YnIgLz5Ob3RlOiBTbGVlcHkgKGJhdHRlcnkgcG93ZXJlZClcbiAgICAgICAgICBkZXZpY2VzIG5lZWQgdG8gYmUgYXdha2Ugd2hlbiBleGVjdXRpbmcgY29tbWFuZHMgYWdhaW5zdCB0aGVtLiBZb3UgY2FuXG4gICAgICAgICAgZ2VuZXJhbGx5IHdha2UgYSBzbGVlcHkgZGV2aWNlIGJ5IHRyaWdnZXJpbmcgaXQuIDxiciAvPjxiciAvPlNvbWVcbiAgICAgICAgICBkZXZpY2VzIHN1Y2ggYXMgWGlhb21pIHNlbnNvcnMgaGF2ZSBhIHdha2UgdXAgYnV0dG9uIHRoYXQgeW91IGNhblxuICAgICAgICAgIHByZXNzIGF0IH41IHNlY29uZCBpbnRlcnZhbHMgdGhhdCBrZWVwIGRldmljZXMgYXdha2Ugd2hpbGUgeW91XG4gICAgICAgICAgaW50ZXJhY3Qgd2l0aCB0aGVtLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWw9XCJEZXZpY2VzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgaWQ9XCJ6aGEtZGV2aWNlLXNlbGVjdG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZERldmljZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXh9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbm9kZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgID4ke2VudHJ5LnVzZXJfZ2l2ZW5fbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlbnRyeS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cnkubmFtZX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGRldmljZSB0byB2aWV3IHBlci1kZXZpY2Ugb3B0aW9uc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZERldmljZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAuZGV2aWNlPVwiJHt0aGlzLl9zZWxlY3RlZERldmljZX1cIlxuICAgICAgICAgICAgICAgICAgLm5hcnJvdz1cIiR7IXRoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgICAuc2hvd0hlbHA9XCIke3RoaXMuX3Nob3dIZWxwfVwiXG4gICAgICAgICAgICAgICAgICAuc2hvd0FjdGlvbnM9XCIke3RydWV9XCJcbiAgICAgICAgICAgICAgICAgIEB6aGEtZGV2aWNlLXJlbW92ZWQ9XCIke3RoaXMuX29uRGV2aWNlUmVtb3ZlZH1cIlxuICAgICAgICAgICAgICAgICAgLmlzSm9pblBhZ2U9XCIke2ZhbHNlfVwiXG4gICAgICAgICAgICAgICAgPjwvemhhLWRldmljZS1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZERldmljZSA/IHRoaXMuX3JlbmRlckNsdXN0ZXJzKCkgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDbHVzdGVycygpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8emhhLWNsdXN0ZXJzXG4gICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgLnNlbGVjdGVkRGV2aWNlPVwiJHt0aGlzLl9zZWxlY3RlZERldmljZX1cIlxuICAgICAgICAuc2hvd0hlbHA9XCIke3RoaXMuX3Nob3dIZWxwfVwiXG4gICAgICA+PC96aGEtY2x1c3RlcnM+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkRGV2aWNlQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZUluZGV4ID0gZXZlbnQhLnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2UgPSB0aGlzLl9ub2Rlc1t0aGlzLl9zZWxlY3RlZERldmljZUluZGV4XTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiLCB7IG5vZGU6IHRoaXMuX3NlbGVjdGVkRGV2aWNlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEZXZpY2VzKCkge1xuICAgIHRoaXMuX25vZGVzID0gKGF3YWl0IGZldGNoRGV2aWNlcyh0aGlzLmhhc3MhKSkuc29ydChzb3J0WkhBRGV2aWNlcyk7XG4gIH1cblxuICBwcml2YXRlIF9vbkRldmljZVJlbW92ZWQoZXZlbnQ6IFpIQURldmljZVJlbW92ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXggPSAtMTtcbiAgICB0aGlzLl9ub2Rlcy5zcGxpY2UodGhpcy5fbm9kZXMuaW5kZXhPZihldmVudC5kZXRhaWwhLmRldmljZSEpLCAxKTtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtbm9kZS1zZWxlY3RlZFwiLCB7IG5vZGU6IHRoaXMuX3NlbGVjdGVkRGV2aWNlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uSGVhZGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDEgMCAzMDBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLW5vZGVcIjogWkhBTm9kZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQTBDQTtBQXpEQTtBQUFBO0FBQUE7QUFBQTtBQThEQTtBQUNBO0FBL0RBO0FBQUE7QUFBQTtBQUFBO0FBb0VBO0FBQ0E7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF6RUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtGQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQTRGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFzQkE7QUFBQTtBQXlDQTtBQWhGQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTtBQUNBO0FBSUE7QUF4RkE7QUFBQTtBQUFBO0FBQUE7QUEyRkE7QUFDQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBL0ZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF6R0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1IQTtBQXVFQTtBQTFMQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFRQTtBQUVBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0NBO0FBQUE7QUFBQTtBQThDQTtBQXlCQTtBQUFBO0FBeUJBO0FBaEdBO0FBQUE7QUFBQTtBQW1HQTtBQWlEQTtBQXBKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXdKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQXJMQTtBQUFBO0FBQUE7QUEwTEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQXhNQTtBQUFBO0FBQUE7QUEyTUE7QUFDQTtBQUNBO0FBN01BO0FBQUE7QUFBQTtBQWdOQTtBQUNBO0FBQ0E7QUFsTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFOQTtBQUNBO0FBdE5BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXVOQTtBQUNBO0FBeE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0TkE7QUFDQTtBQTdOQTtBQUFBO0FBQUE7QUFnT0E7QUFDQTtBQUNBO0FBbE9BO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQWpDQTtBQUFBO0FBQUE7QUFxT0E7QUF3RUE7QUE3U0E7QUFDQTtBQURBO0FBQUE7QUFzVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQU1BO0FBRUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBMENBO0FBeUJBO0FBQUE7QUFvREE7QUF2SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUEySEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBcklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEySUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUF0SkE7QUFBQTtBQUFBO0FBeUpBO0FBQ0E7QUFDQTtBQTNKQTtBQUFBO0FBQUE7QUE4SkE7QUFDQTtBQS9KQTtBQUFBO0FBQUE7QUFrS0E7QUFDQTtBQUNBO0FBcEtBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUE5QkE7QUFBQTtBQUFBO0FBdUtBO0FBOEVBO0FBclBBO0FBQ0E7QUFEQTtBQUFBO0FBOFBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUF1Q0E7QUFTQTtBQUFBO0FBZUE7QUEvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFtRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBMUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4RUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWxGQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBeEJBO0FBQUE7QUFBQTtBQXFGQTtBQWlDQTtBQXRIQTtBQUNBO0FBREE7QUFBQTtBQStIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFvQkE7QUErQkE7QUFuREE7QUFBQTtBQUFBO0FBc0RBO0FBQ0E7QUF2REE7QUFBQTtBQUFBO0FBMERBO0FBQ0E7QUEzREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFqQkE7QUFBQTtBQUFBO0FBOERBO0FBc0NBO0FBcEdBO0FBQ0E7QUFEQTtBQUFBO0FBNkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBZ0NBO0FBQUE7QUFvQ0E7QUFsRkE7QUFBQTtBQUFBO0FBQUE7QUFxRkE7QUFPQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQStGQTtBQUNBO0FBaEdBO0FBQUE7QUFBQTtBQUFBO0FBbUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXRHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXpHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFqSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9IQTtBQStFQTtBQW5NQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
