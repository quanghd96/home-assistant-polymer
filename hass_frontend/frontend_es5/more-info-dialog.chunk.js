(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["more-info-dialog"],
  {
    /***/ "./src/common/const.ts":
      /*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
      /*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DEFAULT_DOMAIN_ICON",
          function() {
            return DEFAULT_DOMAIN_ICON;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DEFAULT_PANEL",
          function() {
            return DEFAULT_PANEL;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DOMAINS_WITH_CARD",
          function() {
            return DOMAINS_WITH_CARD;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DOMAINS_WITH_MORE_INFO",
          function() {
            return DOMAINS_WITH_MORE_INFO;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DOMAINS_HIDE_MORE_INFO",
          function() {
            return DOMAINS_HIDE_MORE_INFO;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DOMAINS_MORE_INFO_NO_HISTORY",
          function() {
            return DOMAINS_MORE_INFO_NO_HISTORY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "STATES_OFF",
          function() {
            return STATES_OFF;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DOMAINS_TOGGLE",
          function() {
            return DOMAINS_TOGGLE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UNIT_C",
          function() {
            return UNIT_C;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UNIT_F",
          function() {
            return UNIT_F;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DEFAULT_VIEW_ENTITY_ID",
          function() {
            return DEFAULT_VIEW_ENTITY_ID;
          }
        );
        /** Constants to be used in the frontend. */
        // Constants should be alphabetically sorted by name.
        // Arrays with values should be alphabetically sorted if order doesn't matter.
        // Each constant should have a description what it is supposed to be used for.

        /** Icon to use when no icon specified for domain. */
        var DEFAULT_DOMAIN_ICON = "hass:bookmark";
        /** Panel to show when no panel is picked. */

        var DEFAULT_PANEL = "lovelace";
        /** Domains that have a state card. */

        var DOMAINS_WITH_CARD = [
          "climate",
          "cover",
          "configurator",
          "input_select",
          "input_number",
          "input_text",
          "lock",
          "media_player",
          "scene",
          "script",
          "timer",
          "vacuum",
          "water_heater",
          "weblink",
        ];
        /** Domains with separate more info dialog. */

        var DOMAINS_WITH_MORE_INFO = [
          "alarm_control_panel",
          "automation",
          "camera",
          "climate",
          "configurator",
          "cover",
          "fan",
          "group",
          "history_graph",
          "input_datetime",
          "light",
          "lock",
          "media_player",
          "script",
          "sun",
          "updater",
          "vacuum",
          "water_heater",
          "weather",
        ];
        /** Domains that show no more info dialog. */

        var DOMAINS_HIDE_MORE_INFO = [
          "input_number",
          "input_select",
          "input_text",
          "scene",
          "weblink",
        ];
        /** Domains that should have the history hidden in the more info dialog. */

        var DOMAINS_MORE_INFO_NO_HISTORY = [
          "camera",
          "configurator",
          "history_graph",
          "scene",
        ];
        /** States that we consider "off". */

        var STATES_OFF = ["closed", "locked", "off"];
        /** Domains where we allow toggle in Lovelace. */

        var DOMAINS_TOGGLE = new Set([
          "fan",
          "input_boolean",
          "light",
          "switch",
          "group",
          "automation",
        ]);
        /** Temperature units. */

        var UNIT_C = "°C";
        var UNIT_F = "°F";
        /** Entity ID of the default view. */

        var DEFAULT_VIEW_ENTITY_ID = "group.default_view";

        /***/
      },

    /***/ "./src/common/entity/compute_domain.ts":
      /*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeDomain;
          }
        );
        function computeDomain(entityId) {
          return entityId.substr(0, entityId.indexOf("."));
        }

        /***/
      },

    /***/ "./src/common/entity/feature_class_names.ts":
      /*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return featureClassNames;
          }
        );
        /* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./supports-feature */ "./src/common/entity/supports-feature.ts"
        );
        // Expects classNames to be an object mapping feature-bit -> className

        function featureClassNames(stateObj, classNames) {
          if (!stateObj || !stateObj.attributes.supported_features) {
            return "";
          }

          return Object.keys(classNames)
            .map(function(feature) {
              return Object(
                _supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                  "supportsFeature"
                ]
              )(stateObj, Number(feature))
                ? classNames[feature]
                : "";
            })
            .filter(function(attr) {
              return attr !== "";
            })
            .join(" ");
        }

        /***/
      },

    /***/ "./src/components/ha-attributes.js":
      /*!*****************************************!*\
  !*** ./src/components/ha-attributes.js ***!
  \*****************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/hass-attributes-util */ "./src/util/hass-attributes-util.js"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        .data-entry .value {\n          max-width: 200px;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: right;\n        }\n      </style>\n\n      <div class="layout vertical">\n        <template\n          is="dom-repeat"\n          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"\n          as="attribute"\n        >\n          <div class="data-entry layout justified horizontal">\n            <div class="key">[[formatAttribute(attribute)]]</div>\n            <div class="value">\n              [[formatAttributeValue(stateObj, attribute)]]\n            </div>\n          </div>\n        </template>\n        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">\n          [[computeAttribution(stateObj)]]\n        </div>\n      </div>\n    ',
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

        var HaAttributes =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaAttributes, _PolymerElement);

            function HaAttributes() {
              _classCallCheck(this, HaAttributes);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaAttributes).apply(this, arguments)
              );
            }

            _createClass(
              HaAttributes,
              [
                {
                  key: "computeFiltersArray",
                  value: function computeFiltersArray(extraFilters) {
                    return Object.keys(
                      _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ].LOGIC_STATE_ATTRIBUTES
                    ).concat(extraFilters ? extraFilters.split(",") : []);
                  },
                },
                {
                  key: "computeDisplayAttributes",
                  value: function computeDisplayAttributes(
                    stateObj,
                    filtersArray
                  ) {
                    if (!stateObj) {
                      return [];
                    }

                    return Object.keys(stateObj.attributes).filter(function(
                      key
                    ) {
                      return filtersArray.indexOf(key) === -1;
                    });
                  },
                },
                {
                  key: "formatAttribute",
                  value: function formatAttribute(attribute) {
                    return attribute.replace(/_/g, " ");
                  },
                },
                {
                  key: "formatAttributeValue",
                  value: function formatAttributeValue(stateObj, attribute) {
                    var value = stateObj.attributes[attribute];
                    if (value === null) return "-";

                    if (Array.isArray(value)) {
                      return value.join(", ");
                    }

                    return value instanceof Object
                      ? JSON.stringify(value, null, 2)
                      : value;
                  },
                },
                {
                  key: "computeAttribution",
                  value: function computeAttribution(stateObj) {
                    return stateObj.attributes.attribution;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      stateObj: {
                        type: Object,
                      },
                      extraFilters: {
                        type: String,
                        value: "",
                      },
                      filtersArray: {
                        type: Array,
                        computed: "computeFiltersArray(extraFilters)",
                      },
                    };
                  },
                },
              ]
            );

            return HaAttributes;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-attributes", HaAttributes);

        /***/
      },

    /***/ "./src/components/ha-camera-stream.ts":
      /*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../data/camera */ "./src/data/camera.ts"
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    ",
          ]);

          _templateObject5 = function _templateObject5() {
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=",
            "\n              @loadeddata=",
            "\n            ></video>\n          ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n            <img\n              @load=",
            "\n              .src=",
            "\n              .alt=",
            "\n            />\n          ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

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

        var HaCameraStream = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-camera-stream"
            ),
          ],
          function(_initialize, _LitElement) {
            var HaCameraStream =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaCameraStream, _LitElement2);

                function HaCameraStream() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaCameraStream);

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
                      HaCameraStream
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaCameraStream;
              })(_LitElement);

            return {
              F: HaCameraStream,
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
                  key: "stateObj",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )({
                      type: Boolean,
                    }),
                  ],
                  key: "showControls",
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
                  key: "_attached",
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
                  key: "_forceMJPEG",
                  value: function value() {
                    return undefined;
                  },
                },
                {
                  kind: "field",
                  key: "_hlsPolyfillInstance",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  // We keep track if we should force MJPEG with a string
                  value:
                    // that way it automatically resets if we change entity.
                    function connectedCallback() {
                      _get(
                        _getPrototypeOf(HaCameraStream.prototype),
                        "connectedCallback",
                        this
                      ).call(this);

                      this._attached = true;
                    },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaCameraStream.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this._attached = false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.stateObj || !this._attached) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      false || this._shouldRenderMJPEG
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            this._elementResized,
                            false
                              ? undefined
                              : Object(
                                  _data_camera__WEBPACK_IMPORTED_MODULE_3__[
                                    "computeMJPEGStreamUrl"
                                  ]
                                )(this.stateObj),
                            "Preview of the ".concat(
                              Object(
                                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__[
                                  "default"
                                ]
                              )(this.stateObj),
                              " camera."
                            )
                          )
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject4(),
                            this.showControls,
                            this._elementResized
                          )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(HaCameraStream.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    var stateObjChanged = changedProps.has("stateObj");
                    var attachedChanged = changedProps.has("_attached");
                    var oldState = changedProps.get("stateObj");
                    var oldEntityId = oldState ? oldState.entity_id : undefined;
                    var curEntityId = this.stateObj
                      ? this.stateObj.entity_id
                      : undefined;

                    if (
                      (!stateObjChanged && !attachedChanged) ||
                      (stateObjChanged && oldEntityId === curEntityId)
                    ) {
                      return;
                    } // If we are no longer attached, destroy polyfill.

                    if (attachedChanged && !this._attached) {
                      this._destroyPolyfill();

                      return;
                    } // Nothing to do if we are render MJPEG.

                    if (this._shouldRenderMJPEG) {
                      return;
                    } // Tear down existing polyfill, if available

                    this._destroyPolyfill();

                    if (curEntityId) {
                      this._startHls();
                    }
                  },
                },
                {
                  kind: "get",
                  key: "_shouldRenderMJPEG",
                  value: function _shouldRenderMJPEG() {
                    return (
                      this._forceMJPEG === this.stateObj.entity_id ||
                      !this.hass.config.components.includes("stream") ||
                      !Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__[
                          "supportsFeature"
                        ]
                      )(
                        this.stateObj,
                        _data_camera__WEBPACK_IMPORTED_MODULE_3__[
                          "CAMERA_SUPPORT_STREAM"
                        ]
                      )
                    );
                  },
                },
                {
                  kind: "get",
                  key: "_videoEl",
                  value: function _videoEl() {
                    return this.shadowRoot.querySelector("video");
                  },
                },
                {
                  kind: "method",
                  key: "_startHls",
                  value: (function() {
                    var _startHls2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var Hls, hlsSupported, videoEl, _ref, url;

                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return __webpack_require__
                                    .e(
                                      /*! import() | hls.js */ "vendors~hls.js"
                                    )
                                    .then(
                                      __webpack_require__.t.bind(
                                        null,
                                        /*! hls.js */ "./node_modules/hls.js/dist/hls.js",
                                        7
                                      )
                                    );

                                case 2:
                                  Hls = _context.sent.default;
                                  hlsSupported = Hls.isSupported();
                                  videoEl = this._videoEl;

                                  if (!hlsSupported) {
                                    hlsSupported =
                                      videoEl.canPlayType(
                                        "application/vnd.apple.mpegurl"
                                      ) !== "";
                                  }

                                  if (hlsSupported) {
                                    _context.next = 9;
                                    break;
                                  }

                                  this._forceMJPEG = this.stateObj.entity_id;
                                  return _context.abrupt("return");

                                case 9:
                                  _context.prev = 9;
                                  _context.next = 12;
                                  return Object(
                                    _data_camera__WEBPACK_IMPORTED_MODULE_3__[
                                      "fetchStreamUrl"
                                    ]
                                  )(this.hass, this.stateObj.entity_id);

                                case 12:
                                  _ref = _context.sent;
                                  url = _ref.url;

                                  if (Hls.isSupported()) {
                                    this._renderHLSPolyfill(videoEl, Hls, url);
                                  } else {
                                    this._renderHLSNative(videoEl, url);
                                  }

                                  return _context.abrupt("return");

                                case 18:
                                  _context.prev = 18;
                                  _context.t0 = _context["catch"](9);
                                  // Fails if we were unable to get a stream
                                  // tslint:disable-next-line
                                  console.error(_context.t0);
                                  this._forceMJPEG = this.stateObj.entity_id;

                                case 22:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[9, 18]]
                        );
                      })
                    );

                    function _startHls() {
                      return _startHls2.apply(this, arguments);
                    }

                    return _startHls;
                  })(),
                },
                {
                  kind: "method",
                  key: "_renderHLSNative",
                  value: (function() {
                    var _renderHLSNative2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(videoEl, url) {
                        return regeneratorRuntime.wrap(function _callee2$(
                          _context2
                        ) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                videoEl.src = url;
                                _context2.next = 3;
                                return new Promise(function(resolve) {
                                  return videoEl.addEventListener(
                                    "loadedmetadata",
                                    resolve
                                  );
                                });

                              case 3:
                                videoEl.play();

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2);
                      })
                    );

                    function _renderHLSNative(_x, _x2) {
                      return _renderHLSNative2.apply(this, arguments);
                    }

                    return _renderHLSNative;
                  })(),
                },
                {
                  kind: "method",
                  key: "_renderHLSPolyfill",
                  value: (function() {
                    var _renderHLSPolyfill2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3(
                        videoEl, // tslint:disable-next-line
                        Hls,
                        url
                      ) {
                        var hls;
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  hls = new Hls();
                                  this._hlsPolyfillInstance = hls;
                                  hls.attachMedia(videoEl);
                                  hls.on(Hls.Events.MEDIA_ATTACHED, function() {
                                    hls.loadSource(url);
                                  });

                                case 4:
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

                    function _renderHLSPolyfill(_x3, _x4, _x5) {
                      return _renderHLSPolyfill2.apply(this, arguments);
                    }

                    return _renderHLSPolyfill;
                  })(),
                },
                {
                  kind: "method",
                  key: "_elementResized",
                  value: function _elementResized() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__[
                        "fireEvent"
                      ]
                    )(this, "iron-resize");
                  },
                },
                {
                  kind: "method",
                  key: "_destroyPolyfill",
                  value: function _destroyPolyfill() {
                    if (this._hlsPolyfillInstance) {
                      this._hlsPolyfillInstance.destroy();

                      this._hlsPolyfillInstance = undefined;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject5());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/components/ha-climate-control.js":
      /*!**********************************************!*\
  !*** ./src/components/ha-climate-control.js ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n          direction: ltr;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id="target_temperature">[[value]] [[units]]</div>\n      <div class="control-buttons">\n        <div>\n          <paper-icon-button\n            icon="hass:chevron-up"\n            on-click="incrementValue"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon="hass:chevron-down"\n            on-click="decrementValue"\n          ></paper-icon-button>\n        </div>\n      </div>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         */

        var HaClimateControl =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaClimateControl, _EventsMixin);

            function HaClimateControl() {
              _classCallCheck(this, HaClimateControl);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaClimateControl).apply(this, arguments)
              );
            }

            _createClass(
              HaClimateControl,
              [
                {
                  key: "temperatureStateInFlux",
                  value: function temperatureStateInFlux(inFlux) {
                    this.$.target_temperature.classList.toggle(
                      "in-flux",
                      inFlux
                    );
                  },
                },
                {
                  key: "_round",
                  value: function _round(val) {
                    // round value to precision derived from step
                    // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
                    var s = this.step.toString().split(".");
                    return s[1]
                      ? parseFloat(val.toFixed(s[1].length))
                      : Math.round(val);
                  },
                },
                {
                  key: "incrementValue",
                  value: function incrementValue() {
                    var newval = this._round(this.value + this.step);

                    if (this.value < this.max) {
                      this.last_changed = Date.now();
                      this.temperatureStateInFlux(true);
                    }

                    if (newval <= this.max) {
                      // If no initial target_temp
                      // this forces control to start
                      // from the min configured instead of 0
                      if (newval <= this.min) {
                        this.value = this.min;
                      } else {
                        this.value = newval;
                      }
                    } else {
                      this.value = this.max;
                    }
                  },
                },
                {
                  key: "decrementValue",
                  value: function decrementValue() {
                    var newval = this._round(this.value - this.step);

                    if (this.value > this.min) {
                      this.last_changed = Date.now();
                      this.temperatureStateInFlux(true);
                    }

                    if (newval >= this.min) {
                      this.value = newval;
                    } else {
                      this.value = this.min;
                    }
                  },
                },
                {
                  key: "valueChanged",
                  value: function valueChanged() {
                    var _this = this;

                    // when the last_changed timestamp is changed,
                    // trigger a potential event fire in
                    // the future, as long as last changed is far enough in the
                    // past.
                    if (this.last_changed) {
                      window.setTimeout(function() {
                        var now = Date.now();

                        if (now - _this.last_changed >= 2000) {
                          _this.fire("change");

                          _this.temperatureStateInFlux(false);

                          _this.last_changed = null;
                        }
                      }, 2010);
                    }
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      value: {
                        type: Number,
                        observer: "valueChanged",
                      },
                      units: {
                        type: String,
                      },
                      min: {
                        type: Number,
                      },
                      max: {
                        type: Number,
                      },
                      step: {
                        type: Number,
                        value: 1,
                      },
                    };
                  },
                },
              ]
            );

            return HaClimateControl;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-climate-control", HaClimateControl);

        /***/
      },

    /***/ "./src/components/ha-color-picker.js":
      /*!*******************************************!*\
  !*** ./src/components/ha-color-picker.js ***!
  \*******************************************/
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
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style>\n        :host {\n          user-select: none;\n          -webkit-user-select: none;\n        }\n\n        #canvas {\n          position: relative;\n          width: 100%;\n          max-width: 330px;\n        }\n        #canvas > * {\n          display: block;\n        }\n        #interactionLayer {\n          color: white;\n          position: absolute;\n          cursor: crosshair;\n          width: 100%;\n          height: 100%;\n          overflow: visible;\n        }\n        #backgroundLayer {\n          width: 100%;\n          overflow: visible;\n          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);\n          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);\n          --wheel-shadow: var(\n            --ha-color-picker-wheel-shadow,\n            rgb(15, 15, 15) 10px 5px 5px 0px\n          );\n        }\n\n        #marker {\n          fill: currentColor;\n          stroke: var(--ha-color-picker-marker-bordercolor, white);\n          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);\n          filter: url(#marker-shadow);\n        }\n        .dragging #marker {\n        }\n\n        #colorTooltip {\n          display: none;\n          fill: currentColor;\n          stroke: var(--ha-color-picker-tooltip-bordercolor, white);\n          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);\n        }\n\n        .touch.dragging #colorTooltip {\n          display: inherit;\n        }\n      </style>\n      <div id="canvas">\n        <svg id="interactionLayer">\n          <defs>\n            <filter\n              id="marker-shadow"\n              x="-50%"\n              y="-50%"\n              width="200%"\n              height="200%"\n              filterUnits="objectBoundingBox"\n            >\n              <feOffset\n                result="offOut"\n                in="SourceAlpha"\n                dx="2"\n                dy="2"\n              ></feOffset>\n              <feGaussianBlur\n                result="blurOut"\n                in="offOut"\n                stdDeviation="2"\n              ></feGaussianBlur>\n              <feComponentTransfer in="blurOut" result="alphaOut">\n                <feFuncA type="linear" slope="0.3"></feFuncA>\n              </feComponentTransfer>\n              <feBlend\n                in="SourceGraphic"\n                in2="alphaOut"\n                mode="normal"\n              ></feBlend>\n            </filter>\n          </defs>\n        </svg>\n        <canvas id="backgroundLayer"></canvas>\n      </div>\n    ',
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

        /**
         * Color-picker custom element
         *
         * @appliesMixin EventsMixin
         */

        var HaColorPicker =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaColorPicker, _EventsMixin);

            function HaColorPicker() {
              _classCallCheck(this, HaColorPicker);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaColorPicker).apply(this, arguments)
              );
            }

            _createClass(
              HaColorPicker,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaColorPicker.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.setupLayers();
                    this.drawColorWheel();
                    this.drawMarker();
                    this.interactionLayer.addEventListener(
                      "mousedown",
                      function(ev) {
                        return _this.onMouseDown(ev);
                      }
                    );
                    this.interactionLayer.addEventListener(
                      "touchstart",
                      function(ev) {
                        return _this.onTouchStart(ev);
                      }
                    );
                  }, // converts browser coordinates to canvas canvas coordinates
                  // origin is wheel center
                  // returns {x: X, y: Y} object
                },
                {
                  key: "convertToCanvasCoordinates",
                  value: function convertToCanvasCoordinates(clientX, clientY) {
                    var svgPoint = this.interactionLayer.createSVGPoint();
                    svgPoint.x = clientX;
                    svgPoint.y = clientY;
                    var cc = svgPoint.matrixTransform(
                      this.interactionLayer.getScreenCTM().inverse()
                    );
                    return {
                      x: cc.x,
                      y: cc.y,
                    };
                  }, // Mouse events
                },
                {
                  key: "onMouseDown",
                  value: function onMouseDown(ev) {
                    var cc = this.convertToCanvasCoordinates(
                      ev.clientX,
                      ev.clientY
                    ); // return if we're not on the wheel

                    if (!this.isInWheel(cc.x, cc.y)) {
                      return;
                    } // a mousedown in wheel is always a color select action

                    this.onMouseSelect(ev); // allow dragging

                    this.canvas.classList.add("mouse", "dragging");
                    this.addEventListener("mousemove", this.onMouseSelect);
                    this.addEventListener("mouseup", this.onMouseUp);
                  },
                },
                {
                  key: "onMouseUp",
                  value: function onMouseUp() {
                    this.canvas.classList.remove("mouse", "dragging");
                    this.removeEventListener("mousemove", this.onMouseSelect);
                  },
                },
                {
                  key: "onMouseSelect",
                  value: function onMouseSelect(ev) {
                    var _this2 = this;

                    requestAnimationFrame(function() {
                      return _this2.processUserSelect(ev);
                    });
                  }, // Touch events
                },
                {
                  key: "onTouchStart",
                  value: function onTouchStart(ev) {
                    var _this3 = this;

                    var touch = ev.changedTouches[0];
                    var cc = this.convertToCanvasCoordinates(
                      touch.clientX,
                      touch.clientY
                    ); // return if we're not on the wheel

                    if (!this.isInWheel(cc.x, cc.y)) {
                      return;
                    }

                    if (ev.target === this.marker) {
                      // drag marker
                      ev.preventDefault();
                      this.canvas.classList.add("touch", "dragging");
                      this.addEventListener("touchmove", this.onTouchSelect);
                      this.addEventListener("touchend", this.onTouchEnd);
                      return;
                    } // don't fire color selection immediately,
                    // wait for touchend and invalidate when we scroll

                    this.tapBecameScroll = false;
                    this.addEventListener("touchend", this.onTap);
                    this.addEventListener(
                      "touchmove",
                      function() {
                        _this3.tapBecameScroll = true;
                      },
                      {
                        passive: true,
                      }
                    );
                  },
                },
                {
                  key: "onTap",
                  value: function onTap(ev) {
                    if (this.tapBecameScroll) {
                      return;
                    }

                    ev.preventDefault();
                    this.onTouchSelect(ev);
                  },
                },
                {
                  key: "onTouchEnd",
                  value: function onTouchEnd() {
                    this.canvas.classList.remove("touch", "dragging");
                    this.removeEventListener("touchmove", this.onTouchSelect);
                  },
                },
                {
                  key: "onTouchSelect",
                  value: function onTouchSelect(ev) {
                    var _this4 = this;

                    requestAnimationFrame(function() {
                      return _this4.processUserSelect(ev.changedTouches[0]);
                    });
                  },
                  /*
                   * General event/selection handling
                   */
                  // Process user input to color
                },
                {
                  key: "processUserSelect",
                  value: function processUserSelect(ev) {
                    var canvasXY = this.convertToCanvasCoordinates(
                      ev.clientX,
                      ev.clientY
                    );
                    var hs = this.getColor(canvasXY.x, canvasXY.y);
                    this.onColorSelect(hs);
                  }, // apply color to marker position and canvas
                },
                {
                  key: "onColorSelect",
                  value: function onColorSelect(hs) {
                    var _this5 = this;

                    this.setMarkerOnColor(hs); // marker always follows mounse 'raw' hs value (= mouse position)

                    if (!this.ignoreSegments) {
                      // apply segments if needed
                      hs = this.applySegmentFilter(hs);
                    } // always apply the new color to the interface / canvas

                    this.applyColorToCanvas(hs); // throttling is applied to updating the exposed colors (properties)
                    // and firing of events

                    if (this.colorSelectIsThrottled) {
                      // make sure we apply the last selected color
                      // eventually after throttle limit has passed
                      clearTimeout(this.ensureFinalSelect);
                      this.ensureFinalSelect = setTimeout(function() {
                        _this5.fireColorSelected(hs); // do it for the final time
                      }, this.throttle);
                      return;
                    }

                    this.fireColorSelected(hs); // do it

                    this.colorSelectIsThrottled = true;
                    setTimeout(function() {
                      _this5.colorSelectIsThrottled = false;
                    }, this.throttle);
                  }, // set color values and fire colorselected event
                },
                {
                  key: "fireColorSelected",
                  value: function fireColorSelected(hs) {
                    this.hsColor = hs;
                    this.fire("colorselected", {
                      hs: {
                        h: hs.h,
                        s: hs.s,
                      },
                    });
                  },
                  /*
                   * Interface updating
                   */
                  // set marker position to the given color
                },
                {
                  key: "setMarkerOnColor",
                  value: function setMarkerOnColor(hs) {
                    var dist = hs.s * this.radius;
                    var theta = ((hs.h - 180) / 180) * Math.PI;
                    var markerdX = -dist * Math.cos(theta);
                    var markerdY = -dist * Math.sin(theta);
                    var translateString = "translate("
                      .concat(markerdX, ",")
                      .concat(markerdY, ")");
                    this.marker.setAttribute("transform", translateString);
                    this.tooltip.setAttribute("transform", translateString);
                  }, // apply given color to interface elements
                },
                {
                  key: "applyColorToCanvas",
                  value: function applyColorToCanvas(hs) {
                    // we're not really converting hs to hsl here, but we keep it cheap
                    // setting the color on the interactionLayer, the svg elements can inherit
                    this.interactionLayer.style.color = "hsl("
                      .concat(hs.h, ", 100%, ")
                      .concat(100 - hs.s * 50, "%)");
                  },
                },
                {
                  key: "applyHsColor",
                  value: function applyHsColor(hs) {
                    // do nothing is we already have the same color
                    if (
                      this.hsColor &&
                      this.hsColor.h === hs.h &&
                      this.hsColor.s === hs.s
                    ) {
                      return;
                    }

                    this.setMarkerOnColor(hs); // marker is always set on 'raw' hs position

                    if (!this.ignoreSegments) {
                      // apply segments if needed
                      hs = this.applySegmentFilter(hs);
                    }

                    this.hsColor = hs; // always apply the new color to the interface / canvas

                    this.applyColorToCanvas(hs);
                  },
                  /*
                   * input processing helpers
                   */
                  // get angle (degrees)
                },
                {
                  key: "getAngle",
                  value: function getAngle(dX, dY) {
                    var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

                    var angle = (theta / Math.PI) * 180 + 180; // degrees, clockwise from right

                    return angle;
                  }, // returns true when coordinates are in the colorwheel
                },
                {
                  key: "isInWheel",
                  value: function isInWheel(x, y) {
                    return this.getDistance(x, y) <= 1;
                  }, // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside
                },
                {
                  key: "getDistance",
                  value: function getDistance(dX, dY) {
                    return Math.sqrt(dX * dX + dY * dY) / this.radius;
                  },
                  /*
                   * Getting colors
                   */
                },
                {
                  key: "getColor",
                  value: function getColor(x, y) {
                    var hue = this.getAngle(x, y); // degrees, clockwise from right

                    var relativeDistance = this.getDistance(x, y); // edge of radius = 1

                    var sat = Math.min(relativeDistance, 1); // Distance from center

                    return {
                      h: hue,
                      s: sat,
                    };
                  },
                },
                {
                  key: "applySegmentFilter",
                  value: function applySegmentFilter(hs) {
                    // apply hue segment steps
                    if (this.hueSegments) {
                      var angleStep = 360 / this.hueSegments;
                      var halfAngleStep = angleStep / 2;
                      hs.h -= halfAngleStep; // take the 'centered segemnts' into account

                      if (hs.h < 0) {
                        hs.h += 360;
                      } // don't end up below 0

                      var rest = hs.h % angleStep;
                      hs.h -= rest - angleStep;
                    } // apply saturation segment steps

                    if (this.saturationSegments) {
                      if (this.saturationSegments === 1) {
                        hs.s = 1;
                      } else {
                        var segmentSize = 1 / this.saturationSegments;
                        var saturationStep = 1 / (this.saturationSegments - 1);
                        var calculatedSat =
                          Math.floor(hs.s / segmentSize) * saturationStep;
                        hs.s = Math.min(calculatedSat, 1);
                      }
                    }

                    return hs;
                  },
                  /*
                   * Drawing related stuff
                   */
                },
                {
                  key: "setupLayers",
                  value: function setupLayers() {
                    this.canvas = this.$.canvas;
                    this.backgroundLayer = this.$.backgroundLayer;
                    this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

                    this.originX = this.width / 2;
                    this.originY = this.originX; // synchronise width/height coordinates

                    this.backgroundLayer.width = this.width;
                    this.backgroundLayer.height = this.height;
                    this.interactionLayer.setAttribute(
                      "viewBox",
                      ""
                        .concat(-this.originX, " ")
                        .concat(-this.originY, " ")
                        .concat(this.width, " ")
                        .concat(this.height)
                    );
                  },
                },
                {
                  key: "drawColorWheel",
                  value: function drawColorWheel() {
                    /*
                     *  Setting up all paremeters
                     */
                    var shadowColor;
                    var shadowOffsetX;
                    var shadowOffsetY;
                    var shadowBlur;
                    var context = this.backgroundLayer.getContext("2d"); // postioning and sizing

                    var cX = this.originX;
                    var cY = this.originY;
                    var radius = this.radius;
                    var counterClockwise = false; // styling of the wheel

                    var wheelStyle = window.getComputedStyle(
                      this.backgroundLayer,
                      null
                    );
                    var borderWidth = parseInt(
                      wheelStyle.getPropertyValue("--wheel-borderwidth"),
                      10
                    );
                    var borderColor = wheelStyle
                      .getPropertyValue("--wheel-bordercolor")
                      .trim();
                    var wheelShadow = wheelStyle
                      .getPropertyValue("--wheel-shadow")
                      .trim(); // extract shadow properties from  CCS variable
                    // the shadow should be defined as: "10px 5px 5px 0px COLOR"

                    if (wheelShadow !== "none") {
                      var values = wheelShadow.split("px ");
                      shadowColor = values.pop();
                      shadowOffsetX = parseInt(values[0], 10);
                      shadowOffsetY = parseInt(values[1], 10);
                      shadowBlur = parseInt(values[2], 10) || 0;
                    }

                    var borderRadius = radius + borderWidth / 2;
                    var wheelRadius = radius;
                    var shadowRadius = radius + borderWidth;
                    /*
                     *  Drawing functions
                     */

                    function drawCircle(hueSegments, saturationSegments) {
                      hueSegments = hueSegments || 360; // reset 0 segments to 360

                      var angleStep = 360 / hueSegments;
                      var halfAngleStep = angleStep / 2; // center segments on color

                      for (var angle = 0; angle <= 360; angle += angleStep) {
                        var startAngle =
                          (angle - halfAngleStep) * (Math.PI / 180);
                        var endAngle =
                          (angle + halfAngleStep + 1) * (Math.PI / 180);
                        context.beginPath();
                        context.moveTo(cX, cY);
                        context.arc(
                          cX,
                          cY,
                          wheelRadius,
                          startAngle,
                          endAngle,
                          counterClockwise
                        );
                        context.closePath(); // gradient

                        var gradient = context.createRadialGradient(
                          cX,
                          cY,
                          0,
                          cX,
                          cY,
                          wheelRadius
                        );
                        var lightness = 100; // first gradient stop

                        gradient.addColorStop(
                          0,
                          "hsl("
                            .concat(angle, ", 100%, ")
                            .concat(lightness, "%)")
                        ); // segment gradient stops

                        if (saturationSegments > 0) {
                          var ratioStep = 1 / saturationSegments;
                          var ratio = 0;

                          for (
                            var stop = 1;
                            stop < saturationSegments;
                            stop += 1
                          ) {
                            var prevLighness = lightness;
                            ratio = stop * ratioStep;
                            lightness = 100 - 50 * ratio;
                            gradient.addColorStop(
                              ratio,
                              "hsl("
                                .concat(angle, ", 100%, ")
                                .concat(prevLighness, "%)")
                            );
                            gradient.addColorStop(
                              ratio,
                              "hsl("
                                .concat(angle, ", 100%, ")
                                .concat(lightness, "%)")
                            );
                          }

                          gradient.addColorStop(
                            ratio,
                            "hsl(".concat(angle, ", 100%, 50%)")
                          );
                        } // last gradient stop

                        gradient.addColorStop(
                          1,
                          "hsl(".concat(angle, ", 100%, 50%)")
                        );
                        context.fillStyle = gradient;
                        context.fill();
                      }
                    }

                    function drawShadow() {
                      context.save();
                      context.beginPath();
                      context.arc(cX, cY, shadowRadius, 0, 2 * Math.PI, false);
                      context.shadowColor = shadowColor;
                      context.shadowOffsetX = shadowOffsetX;
                      context.shadowOffsetY = shadowOffsetY;
                      context.shadowBlur = shadowBlur;
                      context.fillStyle = "white";
                      context.fill();
                      context.restore();
                    }

                    function drawBorder() {
                      context.beginPath();
                      context.arc(cX, cY, borderRadius, 0, 2 * Math.PI, false);
                      context.lineWidth = borderWidth;
                      context.strokeStyle = borderColor;
                      context.stroke();
                    }
                    /*
                     *   Call the drawing functions
                     *   draws the shadow, wheel and border
                     */

                    if (wheelStyle.shadow !== "none") {
                      drawShadow();
                    }

                    drawCircle(this.hueSegments, this.saturationSegments);

                    if (borderWidth > 0) {
                      drawBorder();
                    }
                  },
                  /*
                   *   Draw the (draggable) marker and tooltip
                   *   on the interactionLayer)
                   */
                },
                {
                  key: "drawMarker",
                  value: function drawMarker() {
                    var svgElement = this.interactionLayer;
                    var markerradius = this.radius * 0.08;
                    var tooltipradius = this.radius * 0.15;
                    var TooltipOffsetY = -(tooltipradius * 3);
                    var TooltipOffsetX = 0;
                    svgElement.marker = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "circle"
                    );
                    svgElement.marker.setAttribute("id", "marker");
                    svgElement.marker.setAttribute("r", markerradius);
                    this.marker = svgElement.marker;
                    svgElement.appendChild(svgElement.marker);
                    svgElement.tooltip = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "circle"
                    );
                    svgElement.tooltip.setAttribute("id", "colorTooltip");
                    svgElement.tooltip.setAttribute("r", tooltipradius);
                    svgElement.tooltip.setAttribute("cx", TooltipOffsetX);
                    svgElement.tooltip.setAttribute("cy", TooltipOffsetY);
                    this.tooltip = svgElement.tooltip;
                    svgElement.appendChild(svgElement.tooltip);
                  },
                },
                {
                  key: "segmentationChange",
                  value: function segmentationChange() {
                    if (this.backgroundLayer) {
                      this.drawColorWheel();
                    }
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
                      hsColor: {
                        type: Object,
                      },
                      // use these properties to update the state via attributes
                      desiredHsColor: {
                        type: Object,
                        observer: "applyHsColor",
                      },
                      // width, height and radius apply to the coordinates of
                      // of the canvas.
                      // border width are relative to these numbers
                      // the onscreen displayed size should be controlled with css
                      // and should be the same or smaller
                      width: {
                        type: Number,
                        value: 500,
                      },
                      height: {
                        type: Number,
                        value: 500,
                      },
                      radius: {
                        type: Number,
                        value: 225,
                      },
                      // the amount segments for the hue
                      // 0 = continuous gradient
                      // other than 0 gives 'pie-pieces'
                      hueSegments: {
                        type: Number,
                        value: 0,
                        observer: "segmentationChange",
                      },
                      // the amount segments for the hue
                      // 0 = continuous gradient
                      // 1 = only fully saturated
                      // > 1 = segments from white to fully saturated
                      saturationSegments: {
                        type: Number,
                        value: 0,
                        observer: "segmentationChange",
                      },
                      // set to true to make the segments purely esthetical
                      // this allows selection off all collors, also
                      // interpolated between the segments
                      ignoreSegments: {
                        type: Boolean,
                        value: false,
                      },
                      // throttle te amount of 'colorselected' events fired
                      // value is timeout in milliseconds
                      throttle: {
                        type: Number,
                        value: 500,
                      },
                    };
                  },
                },
              ]
            );

            return HaColorPicker;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-color-picker", HaColorPicker);

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

        var ironIconClass = customElements.get("iron-icon");
        var loaded = false;
        var HaIcon =
          /*#__PURE__*/
          (function(_ironIconClass) {
            _inherits(HaIcon, _ironIconClass);

            function HaIcon() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaIcon);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(HaIcon)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this._iconsetName = void 0;
              return _this;
            }

            _createClass(HaIcon, [
              {
                key: "listen",
                value: function listen(node, eventName, methodName) {
                  _get(_getPrototypeOf(HaIcon.prototype), "listen", this).call(
                    this,
                    node,
                    eventName,
                    methodName
                  );

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
                },
              },
            ]);

            return HaIcon;
          })(ironIconClass);
        customElements.define("ha-icon", HaIcon);

        /***/
      },

    /***/ "./src/components/ha-labeled-slider.js":
      /*!*********************************************!*\
  !*** ./src/components/ha-labeled-slider.js ***!
  \*********************************************/
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
        /* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style>\n        :host {\n          display: block;\n        }\n\n        .title {\n          margin-bottom: 16px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        ha-icon {\n          float: left;\n          margin-top: 4px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        ha-paper-slider {\n          background-image: var(--ha-slider-background);\n        }\n      </style>\n\n      <div class="title">[[caption]]</div>\n      <div class="extra-container"><slot name="extra"></slot></div>\n      <div class="slider-container">\n        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>\n        <ha-paper-slider\n          min="[[min]]"\n          max="[[max]]"\n          step="[[step]]"\n          pin="[[pin]]"\n          disabled="[[disabled]]"\n          disabled="[[disabled]]"\n          value="{{value}}"\n        ></ha-paper-slider>\n      </div>\n    ',
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

        var HaLabeledSlider =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaLabeledSlider, _PolymerElement);

            function HaLabeledSlider() {
              _classCallCheck(this, HaLabeledSlider);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaLabeledSlider).apply(this, arguments)
              );
            }

            _createClass(HaLabeledSlider, null, [
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
                    caption: String,
                    disabled: Boolean,
                    min: Number,
                    max: Number,
                    pin: Boolean,
                    step: Number,
                    extra: {
                      type: Boolean,
                      value: false,
                    },
                    ignoreBarTouch: {
                      type: Boolean,
                      value: true,
                    },
                    icon: {
                      type: String,
                      value: "",
                    },
                    value: {
                      type: Number,
                      notify: true,
                    },
                  };
                },
              },
            ]);

            return HaLabeledSlider;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-labeled-slider", HaLabeledSlider);

        /***/
      },

    /***/ "./src/components/ha-paper-icon-button-arrow-prev.ts":
      /*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-prev.ts ***!
  \***********************************************************/
      /*! exports provided: HaPaperIconButtonArrowPrev */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperIconButtonArrowPrev",
          function() {
            return HaPaperIconButtonArrowPrev;
          }
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
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

        var paperIconButtonClass = customElements.get("paper-icon-button");
        var HaPaperIconButtonArrowPrev =
          /*#__PURE__*/
          (function(_paperIconButtonClass) {
            _inherits(HaPaperIconButtonArrowPrev, _paperIconButtonClass);

            function HaPaperIconButtonArrowPrev() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, HaPaperIconButtonArrowPrev);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(
                  HaPaperIconButtonArrowPrev
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this.hassio = void 0;
              return _this;
            }

            _createClass(HaPaperIconButtonArrowPrev, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  this.icon =
                    window.getComputedStyle(this).direction === "ltr"
                      ? this.hassio
                        ? "hassio:arrow-left"
                        : "hass:arrow-left"
                      : this.hassio
                      ? "hassio:arrow-right"
                      : "hass:arrow-right"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

                  _get(
                    _getPrototypeOf(HaPaperIconButtonArrowPrev.prototype),
                    "connectedCallback",
                    this
                  ).call(this);
                },
              },
            ]);

            return HaPaperIconButtonArrowPrev;
          })(paperIconButtonClass);
        customElements.define(
          "ha-paper-icon-button-arrow-prev",
          HaPaperIconButtonArrowPrev
        );

        /***/
      },

    /***/ "./src/components/ha-paper-slider.js":
      /*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js"
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

        /**
         * @polymer
         * @customElement
         * @appliesMixin paper-slider
         */

        var PaperSliderClass = customElements.get("paper-slider");

        var HaPaperSlider =
          /*#__PURE__*/
          (function(_PaperSliderClass) {
            _inherits(HaPaperSlider, _PaperSliderClass);

            function HaPaperSlider() {
              _classCallCheck(this, HaPaperSlider);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperSlider).apply(this, arguments)
              );
            }

            _createClass(HaPaperSlider, null, [
              {
                key: "template",
                get: function get() {
                  var tpl = document.createElement("template");
                  tpl.innerHTML = PaperSliderClass.template.innerHTML;
                  var styleEl = document.createElement("style");
                  styleEl.innerHTML =
                    '\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ';
                  tpl.content.appendChild(styleEl);
                  return tpl;
                },
              },
            ]);

            return HaPaperSlider;
          })(PaperSliderClass);

        customElements.define("ha-paper-slider", HaPaperSlider);

        /***/
      },

    /***/ "./src/components/ha-water_heater-control.js":
      /*!***************************************************!*\
  !*** ./src/components/ha-water_heater-control.js ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id="target_temperature">[[value]] [[units]]</div>\n      <div class="control-buttons">\n        <div>\n          <paper-icon-button\n            icon="hass:chevron-up"\n            on-click="incrementValue"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon="hass:chevron-down"\n            on-click="decrementValue"\n          ></paper-icon-button>\n        </div>\n      </div>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         */

        var HaWaterHeaterControl =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaWaterHeaterControl, _EventsMixin);

            function HaWaterHeaterControl() {
              _classCallCheck(this, HaWaterHeaterControl);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaWaterHeaterControl).apply(this, arguments)
              );
            }

            _createClass(
              HaWaterHeaterControl,
              [
                {
                  key: "temperatureStateInFlux",
                  value: function temperatureStateInFlux(inFlux) {
                    this.$.target_temperature.classList.toggle(
                      "in-flux",
                      inFlux
                    );
                  },
                },
                {
                  key: "incrementValue",
                  value: function incrementValue() {
                    var newval = this.value + this.step;

                    if (this.value < this.max) {
                      this.last_changed = Date.now();
                      this.temperatureStateInFlux(true);
                    }

                    if (newval <= this.max) {
                      // If no initial target_temp
                      // this forces control to start
                      // from the min configured instead of 0
                      if (newval <= this.min) {
                        this.value = this.min;
                      } else {
                        this.value = newval;
                      }
                    } else {
                      this.value = this.max;
                    }
                  },
                },
                {
                  key: "decrementValue",
                  value: function decrementValue() {
                    var newval = this.value - this.step;

                    if (this.value > this.min) {
                      this.last_changed = Date.now();
                      this.temperatureStateInFlux(true);
                    }

                    if (newval >= this.min) {
                      this.value = newval;
                    } else {
                      this.value = this.min;
                    }
                  },
                },
                {
                  key: "valueChanged",
                  value: function valueChanged() {
                    var _this = this;

                    // when the last_changed timestamp is changed,
                    // trigger a potential event fire in
                    // the future, as long as last changed is far enough in the
                    // past.
                    if (this.last_changed) {
                      window.setTimeout(function() {
                        var now = Date.now();

                        if (now - _this.last_changed >= 2000) {
                          _this.fire("change");

                          _this.temperatureStateInFlux(false);

                          _this.last_changed = null;
                        }
                      }, 2010);
                    }
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      value: {
                        type: Number,
                        observer: "valueChanged",
                      },
                      units: {
                        type: String,
                      },
                      min: {
                        type: Number,
                      },
                      max: {
                        type: Number,
                      },
                      step: {
                        type: Number,
                        value: 1,
                      },
                    };
                  },
                },
              ]
            );

            return HaWaterHeaterControl;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-water_heater-control", HaWaterHeaterControl);

        /***/
      },

    /***/ "./src/data/climate.ts":
      /*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
      /*! exports provided: CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_TARGET_TEMPERATURE",
          function() {
            return CLIMATE_SUPPORT_TARGET_TEMPERATURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE",
          function() {
            return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_TARGET_HUMIDITY",
          function() {
            return CLIMATE_SUPPORT_TARGET_HUMIDITY;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_FAN_MODE",
          function() {
            return CLIMATE_SUPPORT_FAN_MODE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_PRESET_MODE",
          function() {
            return CLIMATE_SUPPORT_PRESET_MODE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_SWING_MODE",
          function() {
            return CLIMATE_SUPPORT_SWING_MODE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CLIMATE_SUPPORT_AUX_HEAT",
          function() {
            return CLIMATE_SUPPORT_AUX_HEAT;
          }
        );
        var CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
        var CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
        var CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
        var CLIMATE_SUPPORT_FAN_MODE = 8;
        var CLIMATE_SUPPORT_PRESET_MODE = 16;
        var CLIMATE_SUPPORT_SWING_MODE = 32;
        var CLIMATE_SUPPORT_AUX_HEAT = 64;

        /***/
      },

    /***/ "./src/dialogs/ha-more-info-dialog.js":
      /*!********************************************!*\
  !*** ./src/dialogs/ha-more-info-dialog.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js"
        );
        /* harmony import */ var _more_info_more_info_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./more-info/more-info-settings */ "./src/dialogs/more-info/more-info-settings.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js"
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
            '\n      <style include="ha-style-dialog paper-dialog-shared-styles">\n        :host {\n          font-size: 14px;\n          width: 365px;\n          border-radius: 2px;\n        }\n\n        more-info-controls,\n        more-info-settings {\n          --more-info-header-background: var(--secondary-background-color);\n          --more-info-header-color: var(--primary-text-color);\n          --ha-more-info-app-toolbar-title: {\n            /* Design guideline states 24px, changed to 16 to align with state info */\n            margin-left: 16px;\n            line-height: 1.3em;\n            max-height: 2.6em;\n            overflow: hidden;\n            /* webkit and blink still support simple multiline text-overflow */\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n          }\n        }\n\n        /* overrule the ha-style-dialog max-height on small screens */\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          more-info-controls,\n          more-info-settings {\n            --more-info-header-background: var(--primary-color);\n            --more-info-header-color: var(--text-primary-color);\n          }\n          :host {\n            width: 100% !important;\n            border-radius: 0px;\n            position: fixed !important;\n            margin: 0;\n          }\n          :host::before {\n            content: "";\n            position: fixed;\n            z-index: -1;\n            top: 0px;\n            left: 0px;\n            right: 0px;\n            bottom: 0px;\n            background-color: inherit;\n          }\n        }\n\n        :host([data-domain="camera"]) {\n          width: auto;\n        }\n\n        :host([data-domain="history_graph"]),\n        :host([large]) {\n          width: 90%;\n        }\n      </style>\n\n      <template is="dom-if" if="[[!_page]]">\n        <more-info-controls\n          class="no-padding"\n          hass="[[hass]]"\n          state-obj="[[stateObj]]"\n          dialog-element="[[_dialogElement]]"\n          can-configure="[[_registryInfo]]"\n          large="{{large}}"\n        ></more-info-controls>\n      </template>\n      <template is="dom-if" if=\'[[_equals(_page, "settings")]]\'>\n        <more-info-settings\n          class="no-padding"\n          hass="[[hass]]"\n          state-obj="[[stateObj]]"\n          registry-info="{{_registryInfo}}"\n        ></more-info-settings>\n      </template>\n    ',
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

        /*
         * @appliesMixin DialogMixin
         */

        var HaMoreInfoDialog =
          /*#__PURE__*/
          (function(_DialogMixin) {
            _inherits(HaMoreInfoDialog, _DialogMixin);

            function HaMoreInfoDialog() {
              _classCallCheck(this, HaMoreInfoDialog);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaMoreInfoDialog).apply(this, arguments)
              );
            }

            _createClass(
              HaMoreInfoDialog,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaMoreInfoDialog.prototype),
                      "ready",
                      this
                    ).call(this);

                    this._dialogElement = this;
                    this.addEventListener("more-info-page", function(ev) {
                      _this._page = ev.detail.page;
                    });
                  },
                },
                {
                  key: "_computeDomain",
                  value: function _computeDomain(stateObj) {
                    return stateObj
                      ? Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__[
                            "default"
                          ]
                        )(stateObj)
                      : "";
                  },
                },
                {
                  key: "_computeStateObj",
                  value: function _computeStateObj(hass) {
                    return hass.states[hass.moreInfoEntityId] || null;
                  },
                },
                {
                  key: "_stateObjChanged",
                  value: (function() {
                    var _stateObjChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(newVal, oldVal) {
                        var _this2 = this;

                        var info;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (newVal) {
                                    _context.next = 3;
                                    break;
                                  }

                                  this.setProperties({
                                    opened: false,
                                    _page: null,
                                    _registryInfo: null,
                                    large: false,
                                  });
                                  return _context.abrupt("return");

                                case 3:
                                  requestAnimationFrame(function() {
                                    return requestAnimationFrame(function() {
                                      // allow dialog to render content before showing it so it will be
                                      // positioned correctly.
                                      _this2.opened = true;
                                    });
                                  });

                                  if (
                                    !(
                                      !Object(
                                        _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__[
                                          "default"
                                        ]
                                      )(this.hass, "config") ||
                                      (oldVal &&
                                        oldVal.entity_id === newVal.entity_id)
                                    )
                                  ) {
                                    _context.next = 6;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 6:
                                  if (!this.hass.user.is_admin) {
                                    _context.next = 17;
                                    break;
                                  }

                                  _context.prev = 7;
                                  _context.next = 10;
                                  return this.hass.callWS({
                                    type: "config/entity_registry/get",
                                    entity_id: newVal.entity_id,
                                  });

                                case 10:
                                  info = _context.sent;
                                  this._registryInfo = info;
                                  _context.next = 17;
                                  break;

                                case 14:
                                  _context.prev = 14;
                                  _context.t0 = _context["catch"](7);
                                  this._registryInfo = null;

                                case 17:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[7, 14]]
                        );
                      })
                    );

                    function _stateObjChanged(_x, _x2) {
                      return _stateObjChanged2.apply(this, arguments);
                    }

                    return _stateObjChanged;
                  })(),
                },
                {
                  key: "_dialogOpenChanged",
                  value: function _dialogOpenChanged(newVal) {
                    if (!newVal && this.stateObj) {
                      this.fire("hass-more-info", {
                        entityId: null,
                      });
                    }
                  },
                },
                {
                  key: "_equals",
                  value: function _equals(a, b) {
                    return a === b;
                  },
                },
                {
                  key: "_largeChanged",
                  value: function _largeChanged() {
                    this.notifyResize();
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        computed: "_computeStateObj(hass)",
                        observer: "_stateObjChanged",
                      },
                      large: {
                        type: Boolean,
                        reflectToAttribute: true,
                        observer: "_largeChanged",
                      },
                      _dialogElement: Object,
                      _registryInfo: Object,
                      _page: {
                        type: String,
                        value: null,
                      },
                      dataDomain: {
                        computed: "_computeDomain(stateObj)",
                        reflectToAttribute: true,
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["_dialogOpenChanged(opened)"];
                  },
                },
              ]
            );

            return HaMoreInfoDialog;
          })(
            Object(
              _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-more-info-dialog", HaMoreInfoDialog);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js":
      /*!*************************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-alarm_control_panel.js ***!
  \*************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="iron-flex"></style>\n      <style>\n        paper-input {\n          margin: auto;\n          max-width: 200px;\n        }\n        .pad {\n          display: flex;\n          justify-content: center;\n          margin-bottom: 24px;\n        }\n        .pad div {\n          display: flex;\n          flex-direction: column;\n        }\n        .pad mwc-button {\n          width: 80px;\n        }\n        .actions mwc-button {\n          min-width: 160px;\n          margin-bottom: 16px;\n        }\n        mwc-button.disarm {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <template is="dom-if" if="[[_codeFormat]]">\n        <paper-input\n          label="[[localize(\'ui.card.alarm_control_panel.code\')]]"\n          value="{{_enteredCode}}"\n          type="password"\n          disabled="[[!_inputEnabled]]"\n        ></paper-input>\n\n        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">\n          <div class="pad">\n            <div>\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="1"\n                raised\n                >1</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="4"\n                raised\n                >4</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="7"\n                raised\n                >7</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="2"\n                raised\n                >2</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="5"\n                raised\n                >5</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="8"\n                raised\n                >8</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="0"\n                raised\n                >0</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="3"\n                raised\n                >3</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="6"\n                raised\n                >6</mwc-button\n              >\n              <mwc-button\n                on-click="_digitClicked"\n                disabled="[[!_inputEnabled]]"\n                data-digit="9"\n                raised\n                >9</mwc-button\n              >\n              <mwc-button\n                on-click="_clearEnteredCode"\n                disabled="[[!_inputEnabled]]"\n                raised\n              >\n                [[localize(\'ui.card.alarm_control_panel.clear_code\')]]\n              </mwc-button>\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <div class="layout horizontal center-justified actions">\n        <template is="dom-if" if="[[_disarmVisible]]">\n          <mwc-button\n            raised\n            class="disarm"\n            on-click="_callService"\n            data-service="alarm_disarm"\n            disabled="[[!_codeValid]]"\n          >\n            [[localize(\'ui.card.alarm_control_panel.disarm\')]]\n          </mwc-button>\n        </template>\n        <template is="dom-if" if="[[_armVisible]]">\n          <mwc-button\n            raised\n            on-click="_callService"\n            data-service="alarm_arm_home"\n            disabled="[[!_codeValid]]"\n          >\n            [[localize(\'ui.card.alarm_control_panel.arm_home\')]]\n          </mwc-button>\n          <mwc-button\n            raised\n            on-click="_callService"\n            data-service="alarm_arm_away"\n            disabled="[[!_codeValid]]"\n          >\n            [[localize(\'ui.card.alarm_control_panel.arm_away\')]]\n          </mwc-button>\n        </template>\n      </div>\n    ',
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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        var MoreInfoAlarmControlPanel =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoAlarmControlPanel, _LocalizeMixin);

            _createClass(MoreInfoAlarmControlPanel, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
                      "html"
                    ]
                  )(_templateObject());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: {
                      type: Object,
                      observer: "_stateObjChanged",
                    },
                    _enteredCode: {
                      type: String,
                      value: "",
                    },
                    _codeFormat: {
                      type: String,
                      value: "",
                    },
                    _codeValid: {
                      type: Boolean,
                      computed:
                        "_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)",
                    },
                    _disarmVisible: {
                      type: Boolean,
                      value: false,
                    },
                    _armVisible: {
                      type: Boolean,
                      value: false,
                    },
                    _inputEnabled: {
                      type: Boolean,
                      value: false,
                    },
                  };
                },
              },
            ]);

            function MoreInfoAlarmControlPanel() {
              var _this;

              _classCallCheck(this, MoreInfoAlarmControlPanel);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoAlarmControlPanel).call(this)
              );
              _this._armedStates = [
                "armed_home",
                "armed_away",
                "armed_night",
                "armed_custom_bypass",
              ];
              return _this;
            }

            _createClass(MoreInfoAlarmControlPanel, [
              {
                key: "_stateObjChanged",
                value: function _stateObjChanged(newVal, oldVal) {
                  var _this2 = this;

                  if (newVal) {
                    var state = newVal.state;
                    var props = {
                      _codeFormat: newVal.attributes.code_format,
                      _armVisible: state === "disarmed",
                      _codeArmRequired: newVal.attributes.code_arm_required,
                      _disarmVisible:
                        this._armedStates.includes(state) ||
                        state === "pending" ||
                        state === "triggered" ||
                        state === "arming",
                    };
                    props._inputEnabled =
                      props._disarmVisible || props._armVisible;
                    this.setProperties(props);
                  }

                  if (oldVal) {
                    setTimeout(function() {
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                          "fireEvent"
                        ]
                      )(_this2, "iron-resize");
                    }, 500);
                  }
                },
              },
              {
                key: "_isNumber",
                value: function _isNumber(format) {
                  return format === "Number";
                },
              },
              {
                key: "_validateCode",
                value: function _validateCode(
                  code,
                  format,
                  armVisible,
                  codeArmRequired
                ) {
                  return (
                    !format ||
                    code.length > 0 ||
                    (armVisible && !codeArmRequired)
                  );
                },
              },
              {
                key: "_digitClicked",
                value: function _digitClicked(ev) {
                  this._enteredCode += ev.target.getAttribute("data-digit");
                },
              },
              {
                key: "_clearEnteredCode",
                value: function _clearEnteredCode() {
                  this._enteredCode = "";
                },
              },
              {
                key: "_callService",
                value: function _callService(ev) {
                  var _this3 = this;

                  var service = ev.target.getAttribute("data-service");
                  var data = {
                    entity_id: this.stateObj.entity_id,
                    code: this._enteredCode,
                  };
                  this.hass
                    .callService("alarm_control_panel", service, data)
                    .then(function() {
                      _this3._enteredCode = "";
                    });
                },
              },
            ]);

            return MoreInfoAlarmControlPanel;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "more-info-alarm_control_panel",
          MoreInfoAlarmControlPanel
        );

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-automation.js":
      /*!****************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-automation.js ***!
  \****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        .flex {\n          display: flex;\n          justify-content: space-between;\n        }\n        .actions {\n          margin: 36px 0 8px 0;\n          text-align: right;\n        }\n      </style>\n\n      <div class="flex">\n        <div>[[localize(\'ui.card.automation.last_triggered\')]]:</div>\n        <ha-relative-time\n          hass="[[hass]]"\n          datetime="[[stateObj.attributes.last_triggered]]"\n        ></ha-relative-time>\n      </div>\n\n      <div class="actions">\n        <mwc-button on-click="handleTriggerTapped">\n          [[localize(\'ui.card.automation.trigger\')]]\n        </mwc-button>\n      </div>\n    ',
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

        var MoreInfoAutomation =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoAutomation, _LocalizeMixin);

            function MoreInfoAutomation() {
              _classCallCheck(this, MoreInfoAutomation);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoAutomation).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoAutomation,
              [
                {
                  key: "handleTriggerTapped",
                  value: function handleTriggerTapped() {
                    this.hass.callService("automation", "trigger", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                    };
                  },
                },
              ]
            );

            return MoreInfoAutomation;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-automation", MoreInfoAutomation);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-camera.ts":
      /*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-camera.ts ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../data/camera */ "./src/data/camera.ts"
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );
        /* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts"
        );
        /* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js"
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
            "\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    ",
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
            "\n            <paper-checkbox\n              .checked=",
            "\n              @change=",
            "\n            >\n              Preload stream\n            </paper-checkbox>\n          ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-camera-stream\n        .hass="',
            '"\n        .stateObj="',
            '"\n        showcontrols\n      ></ha-camera-stream>\n      ',
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

        // Not duplicate import, it's for typing
        // tslint:disable-next-line

        var MoreInfoCamera = _decorate(
          null,
          function(_initialize, _LitElement) {
            var MoreInfoCamera =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(MoreInfoCamera, _LitElement2);

                function MoreInfoCamera() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, MoreInfoCamera);

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
                      MoreInfoCamera
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return MoreInfoCamera;
              })(_LitElement);

            return {
              F: MoreInfoCamera,
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
                  key: "stateObj",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_cameraPrefs",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_attached",
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(MoreInfoCamera.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._attached = true;
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(MoreInfoCamera.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this._attached = false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this._attached || !this.hass || !this.stateObj) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.hass,
                      this.stateObj,
                      this._cameraPrefs
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            this._cameraPrefs.preload_stream,
                            this._handleCheckboxChanged
                          )
                        : undefined
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    if (!changedProps.has("stateObj")) {
                      return;
                    }

                    var oldState = changedProps.get("stateObj");
                    var oldEntityId = oldState ? oldState.entity_id : undefined;
                    var curEntityId = this.stateObj
                      ? this.stateObj.entity_id
                      : undefined; // Same entity, ignore.

                    if (curEntityId === oldEntityId) {
                      return;
                    }

                    if (
                      curEntityId &&
                      this.hass.config.components.includes("stream") &&
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__[
                          "supportsFeature"
                        ]
                      )(
                        this.stateObj,
                        _data_camera__WEBPACK_IMPORTED_MODULE_1__[
                          "CAMERA_SUPPORT_STREAM"
                        ]
                      )
                    ) {
                      // Fetch in background while we set up the video.
                      this._fetchCameraPrefs();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_fetchCameraPrefs",
                  value: (function() {
                    var _fetchCameraPrefs2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Object(
                                    _data_camera__WEBPACK_IMPORTED_MODULE_1__[
                                      "fetchCameraPrefs"
                                    ]
                                  )(this.hass, this.stateObj.entity_id);

                                case 2:
                                  this._cameraPrefs = _context.sent;

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

                    function _fetchCameraPrefs() {
                      return _fetchCameraPrefs2.apply(this, arguments);
                    }

                    return _fetchCameraPrefs;
                  })(),
                },
                {
                  kind: "method",
                  key: "_handleCheckboxChanged",
                  value: (function() {
                    var _handleCheckboxChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var checkbox;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  checkbox = ev.currentTarget;
                                  _context2.prev = 1;
                                  _context2.next = 4;
                                  return Object(
                                    _data_camera__WEBPACK_IMPORTED_MODULE_1__[
                                      "updateCameraPrefs"
                                    ]
                                  )(this.hass, this.stateObj.entity_id, {
                                    preload_stream: checkbox.checked,
                                  });

                                case 4:
                                  this._cameraPrefs = _context2.sent;
                                  _context2.next = 11;
                                  break;

                                case 7:
                                  _context2.prev = 7;
                                  _context2.t0 = _context2["catch"](1);
                                  alert(_context2.t0.message);
                                  checkbox.checked = !checkbox.checked;

                                case 11:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this,
                          [[1, 7]]
                        );
                      })
                    );

                    function _handleCheckboxChanged(_x) {
                      return _handleCheckboxChanged2.apply(this, arguments);
                    }

                    return _handleCheckboxChanged;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject4());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("more-info-camera", MoreInfoCamera);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-climate.ts":
      /*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.ts ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js"
        );
        /* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../data/climate */ "./src/data/climate.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
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

        function _templateObject15() {
          var data = _taggedTemplateLiteral([
            "\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    ",
          ]);

          _templateObject15 = function _templateObject15() {
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

        function _templateObject14() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="container-aux_heat">\n                <div class="center horizontal layout single-row">\n                  <div class="flex">\n                    ',
            "\n                  </div>\n                  <paper-toggle-button\n                    .checked=",
            "\n                    @change=",
            "\n                  ></paper-toggle-button>\n                </div>\n              </div>\n            ",
          ]);

          _templateObject14 = function _templateObject14() {
            return data;
          };

          return data;
        }

        function _templateObject13() {
          var data = _taggedTemplateLiteral([
            "\n                        <paper-item item-name=",
            ">",
            "</paper-item>\n                      ",
          ]);

          _templateObject13 = function _templateObject13() {
            return data;
          };

          return data;
        }

        function _templateObject12() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="container-swing_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=',
            '\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',
            "\n                    @selected-changed=",
            "\n                  >\n                    ",
            "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            ",
          ]);

          _templateObject12 = function _templateObject12() {
            return data;
          };

          return data;
        }

        function _templateObject11() {
          var data = _taggedTemplateLiteral([
            "\n                        <paper-item item-name=",
            ">\n                          ",
            "\n                        </paper-item>\n                      ",
          ]);

          _templateObject11 = function _templateObject11() {
            return data;
          };

          return data;
        }

        function _templateObject10() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="container-fan_list">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=',
            '\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',
            "\n                    @selected-changed=",
            "\n                  >\n                    ",
            "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            ",
          ]);

          _templateObject10 = function _templateObject10() {
            return data;
          };

          return data;
        }

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            "\n                        <paper-item item-name=",
            ">\n                          ",
            "\n                        </paper-item>\n                      ",
          ]);

          _templateObject9 = function _templateObject9() {
            return data;
          };

          return data;
        }

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="container-preset_modes">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=',
            '\n                >\n                  <paper-listbox\n                    slot="dropdown-content"\n                    attr-for-selected="item-name"\n                    .selected=',
            "\n                    @selected-changed=",
            '\n                  >\n                    <paper-item item-name="">\n                      ',
            "\n                    </paper-item>\n                    ",
            "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            "\n                    <paper-item item-name=",
            ">\n                      ",
            "\n                    </paper-item>\n                  ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n              <div class="container-humidity">\n                <div>',
            '</div>\n                <div class="single-row">\n                  <div class="target-humidity">\n                    ',
            ' %\n                  </div>\n                  <ha-paper-slider\n                    class="humidity"\n                    step="1"\n                    pin\n                    ignore-bar-touch\n                    dir=',
            "\n                    .min=",
            "\n                    .max=",
            "\n                    .secondaryProgress=",
            "\n                    .value=",
            "\n                    @change=",
            "\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n                  <ha-climate-control\n                    .value=",
            "\n                    .units=",
            "\n                    .step=",
            "\n                    .min=",
            "\n                    .max=",
            '\n                    class="range-control-left"\n                    @change=',
            "\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=",
            "\n                    .units=",
            "\n                    .step=",
            "\n                    .min=",
            "\n                    .max=",
            '\n                    class="range-control-right"\n                    @change=',
            "\n                  ></ha-climate-control>\n                ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n                  <ha-climate-control\n                    .value=",
            "\n                    .units=",
            "\n                    .step=",
            "\n                    .min=",
            "\n                    .max=",
            "\n                    @change=",
            "\n                  ></ha-climate-control>\n                ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                  <div>\n                    ",
            "\n                  </div>\n                ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n      <div\n        class=",
            '\n      >\n        <div class="container-temperature">\n          <div class=',
            ">\n            ",
            "\n            ",
            "\n            ",
            "\n          </div>\n        </div>\n\n        ",
            '\n\n        <div class="container-hvac_modes">\n          <div class="controls">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=',
            '\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                attr-for-selected="item-name"\n                .selected=',
            "\n                @selected-changed=",
            "\n              >\n                ",
            "\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ",
            "\n        ",
            "\n        ",
            "\n        ",
            "\n      </div>\n    ",
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

        var MoreInfoClimate = _decorate(
          null,
          function(_initialize, _LitElement) {
            var MoreInfoClimate =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(MoreInfoClimate, _LitElement2);

                function MoreInfoClimate() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, MoreInfoClimate);

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
                      MoreInfoClimate
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return MoreInfoClimate;
              })(_LitElement);

            return {
              F: MoreInfoClimate,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["property"]
                    )(),
                  ],
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
                  key: "_resizeDebounce",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.stateObj) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                      )(_templateObject());
                    }

                    var hass = this.hass;
                    var stateObj = this.stateObj;
                    var supportTargetTemperature = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_TEMPERATURE"
                      ]
                    );
                    var supportTargetTemperatureRange = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE"
                      ]
                    );
                    var supportTargetHumidity = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_HUMIDITY"
                      ]
                    );
                    var supportFanMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_FAN_MODE"
                      ]
                    );
                    var supportPresetMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_PRESET_MODE"
                      ]
                    );
                    var supportSwingMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_SWING_MODE"
                      ]
                    );
                    var supportAuxHeat = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_AUX_HEAT"
                      ]
                    );
                    var temperatureStepSize =
                      stateObj.attributes.target_temp_step ||
                      hass.config.unit_system.temperature.indexOf("F") === -1
                        ? 0.5
                        : 1;
                    var rtlDirection = Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__[
                        "computeRTLDirection"
                      ]
                    )(hass);
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                    )(
                      _templateObject2(),
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_12__[
                          "classMap"
                        ]
                      )({
                        "has-current_temperature":
                          "current_temperature" in stateObj.attributes,
                        "has-current_humidity":
                          "current_humidity" in stateObj.attributes,
                        "has-target_temperature": supportTargetTemperature,
                        "has-target_temperature_range": supportTargetTemperatureRange,
                        "has-target_humidity": supportTargetHumidity,
                        "has-fan_mode": supportFanMode,
                        "has-swing_mode": supportSwingMode,
                        "has-aux_heat": supportAuxHeat,
                        "has-preset_mode": supportPresetMode,
                      }),
                      stateObj.state,
                      supportTargetTemperature || supportTargetTemperatureRange
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject3(),
                            hass.localize("ui.card.climate.target_temperature")
                          )
                        : "",
                      stateObj.attributes.temperature
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject4(),
                            stateObj.attributes.temperature,
                            hass.config.unit_system.temperature,
                            temperatureStepSize,
                            stateObj.attributes.min_temp,
                            stateObj.attributes.max_temp,
                            this._targetTemperatureChanged
                          )
                        : "",
                      stateObj.attributes.target_temp_low ||
                        stateObj.attributes.target_temp_high
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject5(),
                            stateObj.attributes.target_temp_low,
                            hass.config.unit_system.temperature,
                            temperatureStepSize,
                            stateObj.attributes.min_temp,
                            stateObj.attributes.target_temp_high,
                            this._targetTemperatureLowChanged,
                            stateObj.attributes.target_temp_high,
                            hass.config.unit_system.temperature,
                            temperatureStepSize,
                            stateObj.attributes.target_temp_low,
                            stateObj.attributes.max_temp,
                            this._targetTemperatureHighChanged
                          )
                        : "",
                      supportTargetHumidity
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject6(),
                            hass.localize("ui.card.climate.target_humidity"),
                            stateObj.attributes.humidity,
                            rtlDirection,
                            stateObj.attributes.min_humidity,
                            stateObj.attributes.max_humidity,
                            stateObj.attributes.max_humidity,
                            stateObj.attributes.humidity,
                            this._targetHumiditySliderChanged
                          )
                        : "",
                      hass.localize("ui.card.climate.operation"),
                      stateObj.state,
                      this._handleOperationmodeChanged,
                      stateObj.attributes.hvac_modes.map(function(mode) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                        )(_templateObject7(), mode, hass.localize("state.climate.".concat(mode)));
                      }),
                      supportPresetMode
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject8(),
                            hass.localize("ui.card.climate.preset_mode"),
                            stateObj.attributes.preset_mode,
                            this._handlePresetmodeChanged,
                            hass.localize(
                              "state_attributes.climate.preset_mode.none"
                            ),
                            stateObj.attributes.preset_modes.map(function(
                              mode
                            ) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                              )(
                                _templateObject9(),
                                mode,
                                hass.localize(
                                  "state_attributes.climate.preset_mode.".concat(
                                    mode
                                  )
                                ) || mode
                              );
                            })
                          )
                        : "",
                      supportFanMode
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject10(),
                            hass.localize("ui.card.climate.fan_mode"),
                            stateObj.attributes.fan_mode,
                            this._handleFanmodeChanged,
                            stateObj.attributes.fan_modes.map(function(mode) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                              )(_templateObject11(), mode, hass.localize("state_attributes.climate.fan_mode.".concat(mode)) || mode);
                            })
                          )
                        : "",
                      supportSwingMode
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject12(),
                            hass.localize("ui.card.climate.swing_mode"),
                            stateObj.attributes.swing_mode,
                            this._handleSwingmodeChanged,
                            stateObj.attributes.swing_modes.map(function(mode) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                              )(_templateObject13(), mode, mode);
                            })
                          )
                        : "",
                      supportAuxHeat
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]
                          )(
                            _templateObject14(),
                            hass.localize("ui.card.climate.aux_heat"),
                            stateObj.attributes.aux_heat === "on",
                            this._auxToggleChanged
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(MoreInfoClimate.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (!changedProps.has("stateObj") || !this.stateObj) {
                      return;
                    }

                    if (this._resizeDebounce) {
                      clearTimeout(this._resizeDebounce);
                    }

                    this._resizeDebounce = window.setTimeout(function() {
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__[
                          "fireEvent"
                        ]
                      )(_this2, "iron-resize");
                      _this2._resizeDebounce = undefined;
                    }, 500);
                  },
                },
                {
                  kind: "method",
                  key: "_targetTemperatureChanged",
                  value: function _targetTemperatureChanged(ev) {
                    var newVal = ev.target.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.temperature,
                      newVal,
                      "set_temperature",
                      {
                        temperature: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_targetTemperatureLowChanged",
                  value: function _targetTemperatureLowChanged(ev) {
                    var newVal = ev.currentTarget.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.target_temp_low,
                      newVal,
                      "set_temperature",
                      {
                        target_temp_low: newVal,
                        target_temp_high: this.stateObj.attributes
                          .target_temp_high,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_targetTemperatureHighChanged",
                  value: function _targetTemperatureHighChanged(ev) {
                    var newVal = ev.currentTarget.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.target_temp_high,
                      newVal,
                      "set_temperature",
                      {
                        target_temp_low: this.stateObj.attributes
                          .target_temp_low,
                        target_temp_high: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_targetHumiditySliderChanged",
                  value: function _targetHumiditySliderChanged(ev) {
                    var newVal = ev.target.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.humidity,
                      newVal,
                      "set_humidity",
                      {
                        humidity: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_auxToggleChanged",
                  value: function _auxToggleChanged(ev) {
                    var newVal = ev.target.checked;

                    this._callServiceHelper(
                      this.stateObj.attributes.aux_heat === "on",
                      newVal,
                      "set_aux_heat",
                      {
                        aux_heat: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handleFanmodeChanged",
                  value: function _handleFanmodeChanged(ev) {
                    var newVal = ev.detail.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.fan_mode,
                      newVal,
                      "set_fan_mode",
                      {
                        fan_mode: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handleOperationmodeChanged",
                  value: function _handleOperationmodeChanged(ev) {
                    var newVal = ev.detail.value;

                    this._callServiceHelper(
                      this.stateObj.state,
                      newVal,
                      "set_hvac_mode",
                      {
                        hvac_mode: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handleSwingmodeChanged",
                  value: function _handleSwingmodeChanged(ev) {
                    var newVal = ev.detail.value;

                    this._callServiceHelper(
                      this.stateObj.attributes.swing_mode,
                      newVal,
                      "set_swing_mode",
                      {
                        swing_mode: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handlePresetmodeChanged",
                  value: function _handlePresetmodeChanged(ev) {
                    var newVal = ev.detail.value || null;

                    this._callServiceHelper(
                      this.stateObj.attributes.preset_mode,
                      newVal,
                      "set_preset_mode",
                      {
                        preset_mode: newVal,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_callServiceHelper",
                  value: (function() {
                    var _callServiceHelper2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(
                        oldVal,
                        newVal,
                        service,
                        data
                      ) {
                        var curState;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (!(oldVal === newVal)) {
                                    _context.next = 2;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 2:
                                  data.entity_id = this.stateObj.entity_id;
                                  curState = this.stateObj;
                                  _context.next = 6;
                                  return this.hass.callService(
                                    "climate",
                                    service,
                                    data
                                  );

                                case 6:
                                  _context.next = 8;
                                  return new Promise(function(resolve) {
                                    return setTimeout(resolve, 2000);
                                  });

                                case 8:
                                  if (!(this.stateObj !== curState)) {
                                    _context.next = 10;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 10:
                                  this.stateObj = undefined;
                                  _context.next = 13;
                                  return this.updateComplete;

                                case 13:
                                  // Only restore if not set yet by a state change
                                  if (this.stateObj === undefined) {
                                    this.stateObj = curState;
                                  }

                                case 14:
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

                    function _callServiceHelper(_x, _x2, _x3, _x4) {
                      return _callServiceHelper2.apply(this, arguments);
                    }

                    return _callServiceHelper;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]
                    )(_templateObject15());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]
        );

        customElements.define("more-info-climate", MoreInfoClimate);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-configurator.js":
      /*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-configurator.js ***!
  \******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_input_iron_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-input/iron-input */ "./node_modules/@polymer/iron-input/iron-input.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-markdown */ "./src/components/ha-markdown.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        p {\n          margin: 8px 0;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n\n        p > img {\n          max-width: 100%;\n        }\n\n        p.center {\n          text-align: center;\n        }\n\n        p.error {\n          color: #c62828;\n        }\n\n        p.submit {\n          text-align: center;\n          height: 41px;\n        }\n\n        paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      </style>\n\n      <div class="layout vertical">\n        <template is="dom-if" if="[[isConfigurable]]">\n          <ha-markdown\n            content="[[stateObj.attributes.description]]"\n          ></ha-markdown>\n\n          <p class="error" hidden$="[[!stateObj.attributes.errors]]">\n            [[stateObj.attributes.errors]]\n          </p>\n\n          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">\n            <paper-input\n              label="[[item.name]]"\n              name="[[item.id]]"\n              type="[[item.type]]"\n              on-change="fieldChanged"\n            ></paper-input>\n          </template>\n\n          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">\n            <mwc-button\n              raised=""\n              disabled="[[isConfiguring]]"\n              on-click="submitClicked"\n            >\n              <paper-spinner\n                active="[[isConfiguring]]"\n                hidden="[[!isConfiguring]]"\n                alt="Configuring"\n              ></paper-spinner>\n              [[stateObj.attributes.submit_caption]]\n            </mwc-button>\n          </p>\n        </template>\n      </div>\n    ',
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

        var MoreInfoConfigurator =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(MoreInfoConfigurator, _PolymerElement);

            function MoreInfoConfigurator() {
              _classCallCheck(this, MoreInfoConfigurator);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoConfigurator).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoConfigurator,
              [
                {
                  key: "computeIsConfigurable",
                  value: function computeIsConfigurable(stateObj) {
                    return stateObj.state === "configure";
                  },
                },
                {
                  key: "fieldChanged",
                  value: function fieldChanged(ev) {
                    var el = ev.target;
                    this.fieldInput[el.name] = el.value;
                  },
                },
                {
                  key: "submitClicked",
                  value: function submitClicked() {
                    var data = {
                      configure_id: this.stateObj.attributes.configure_id,
                      fields: this.fieldInput,
                    };
                    this.isConfiguring = true;
                    this.hass
                      .callService("configurator", "configure", data)
                      .then(
                        function() {
                          this.isConfiguring = false;
                        }.bind(this),
                        function() {
                          this.isConfiguring = false;
                        }.bind(this)
                      );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      stateObj: {
                        type: Object,
                      },
                      action: {
                        type: String,
                        value: "display",
                      },
                      isConfigurable: {
                        type: Boolean,
                        computed: "computeIsConfigurable(stateObj)",
                      },
                      isConfiguring: {
                        type: Boolean,
                        value: false,
                      },
                      fieldInput: {
                        type: Object,
                        value: function value() {
                          return {};
                        },
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoConfigurator;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-configurator", MoreInfoConfigurator);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-content.ts":
      /*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-content.ts ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _more_info_alarm_control_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./more-info-alarm_control_panel */ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js"
        );
        /* harmony import */ var _more_info_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./more-info-automation */ "./src/dialogs/more-info/controls/more-info-automation.js"
        );
        /* harmony import */ var _more_info_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./more-info-camera */ "./src/dialogs/more-info/controls/more-info-camera.ts"
        );
        /* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.ts"
        );
        /* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js"
        );
        /* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js"
        );
        /* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js"
        );
        /* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js"
        );
        /* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js"
        );
        /* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js"
        );
        /* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js"
        );
        /* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js"
        );
        /* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js"
        );
        /* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js"
        );
        /* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js"
        );
        /* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.js"
        );
        /* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js"
        );
        /* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js"
        );
        /* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js"
        );
        /* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.js"
        );
        /* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts"
        );
        /* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts"
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

        var MoreInfoContent =
          /*#__PURE__*/
          (function(_UpdatingElement) {
            _inherits(MoreInfoContent, _UpdatingElement);

            function MoreInfoContent() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, MoreInfoContent);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(
                  MoreInfoContent
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this.hass = void 0;
              _this.stateObj = void 0;
              _this._detachedChild = void 0;
              return _this;
            }

            _createClass(
              MoreInfoContent,
              [
                {
                  key: "firstUpdated",
                  value: function firstUpdated() {
                    this.style.position = "relative";
                    this.style.display = "block";
                  }, // This is not a lit element, but an updating element, so we implement update
                },
                {
                  key: "update",
                  value: function update(changedProps) {
                    _get(
                      _getPrototypeOf(MoreInfoContent.prototype),
                      "update",
                      this
                    ).call(this, changedProps);

                    var stateObj = this.stateObj;
                    var hass = this.hass;

                    if (!stateObj || !hass) {
                      if (this.lastChild) {
                        this._detachedChild = this.lastChild; // Detach child to prevent it from doing work.

                        this.removeChild(this.lastChild);
                      }

                      return;
                    }

                    if (this._detachedChild) {
                      this.appendChild(this._detachedChild);
                      this._detachedChild = undefined;
                    }

                    var moreInfoType =
                      stateObj.attributes &&
                      "custom_ui_more_info" in stateObj.attributes
                        ? stateObj.attributes.custom_ui_more_info
                        : "more-info-" +
                          Object(
                            _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__[
                              "default"
                            ]
                          )(stateObj);
                    Object(
                      _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__[
                        "default"
                      ]
                    )(this, moreInfoType.toUpperCase(), {
                      hass: hass,
                      stateObj: stateObj,
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
                      stateObj: {},
                    };
                  },
                },
              ]
            );

            return MoreInfoContent;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);

        customElements.define("more-info-content", MoreInfoContent);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-cover.js":
      /*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-cover.js ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js"
        );
        /* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js"
        );
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../util/cover-model */ "./src/util/cover-model.js"
        );
        /* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts"
        );
        /* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        .current_position,\n        .tilt {\n          max-height: 0px;\n          overflow: hidden;\n        }\n\n        .has-current_position .current_position,\n        .has-set_tilt_position .tilt,\n        .has-current_tilt_position .tilt {\n          max-height: 208px;\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="current_position">\n          <ha-labeled-slider\n            caption="[[localize(\'ui.card.cover.position\')]]"\n            pin=""\n            value="{{coverPositionSliderValue}}"\n            disabled="[[!entityObj.supportsSetPosition]]"\n            on-change="coverPositionSliderChanged"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class="tilt">\n          <ha-labeled-slider\n            caption="[[localize(\'ui.card.cover.tilt_position\')]]"\n            pin=""\n            extra=""\n            value="{{coverTiltPositionSliderValue}}"\n            disabled="[[!entityObj.supportsSetTiltPosition]]"\n            on-change="coverTiltPositionSliderChanged"\n          >\n            <ha-cover-tilt-controls\n              slot="extra"\n              hidden$="[[entityObj.isTiltOnly]]"\n              hass="[[hass]]"\n              state-obj="[[stateObj]]"\n            ></ha-cover-tilt-controls>\n          </ha-labeled-slider>\n        </div>\n      </div>\n    ',
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

        var FEATURE_CLASS_NAMES = {
          128: "has-set_tilt_position",
        };

        var MoreInfoCover =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoCover, _LocalizeMixin);

            function MoreInfoCover() {
              _classCallCheck(this, MoreInfoCover);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoCover).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoCover,
              [
                {
                  key: "computeEntityObj",
                  value: function computeEntityObj(hass, stateObj) {
                    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal) {
                    if (newVal) {
                      this.setProperties({
                        coverPositionSliderValue:
                          newVal.attributes.current_position,
                        coverTiltPositionSliderValue:
                          newVal.attributes.current_tilt_position,
                      });
                    }
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    var classes = [
                      Object(
                        _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ]
                      )(stateObj, [
                        "current_position",
                        "current_tilt_position",
                      ]),
                      Object(
                        _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__[
                          "default"
                        ]
                      )(stateObj, FEATURE_CLASS_NAMES),
                    ];
                    return classes.join(" ");
                  },
                },
                {
                  key: "coverPositionSliderChanged",
                  value: function coverPositionSliderChanged(ev) {
                    this.entityObj.setCoverPosition(ev.target.value);
                  },
                },
                {
                  key: "coverTiltPositionSliderChanged",
                  value: function coverTiltPositionSliderChanged(ev) {
                    this.entityObj.setCoverTiltPosition(ev.target.value);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      entityObj: {
                        type: Object,
                        computed: "computeEntityObj(hass, stateObj)",
                      },
                      coverPositionSliderValue: Number,
                      coverTiltPositionSliderValue: Number,
                    };
                  },
                },
              ]
            );

            return MoreInfoCover;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-cover", MoreInfoCover);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-default.js":
      /*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-default.js ***!
  \*************************************************************/
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
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
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
            '\n      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>\n    ',
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

        var MoreInfoDefault =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(MoreInfoDefault, _PolymerElement);

            function MoreInfoDefault() {
              _classCallCheck(this, MoreInfoDefault);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoDefault).apply(this, arguments)
              );
            }

            _createClass(MoreInfoDefault, null, [
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
                    stateObj: {
                      type: Object,
                    },
                  };
                },
              },
            ]);

            return MoreInfoDefault;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-default", MoreInfoDefault);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-fan.js":
      /*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-fan.js ***!
  \*********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        .container-speed_list,\n        .container-direction,\n        .container-oscillating {\n          display: none;\n        }\n\n        .has-speed_list .container-speed_list,\n        .has-direction .container-direction,\n        .has-oscillating .container-oscillating {\n          display: block;\n        }\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="container-speed_list">\n          <ha-paper-dropdown-menu\n            label-float=""\n            dynamic-align=""\n            label="[[localize(\'ui.card.fan.speed\')]]"\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              selected="[[stateObj.attributes.speed]]"\n              on-selected-changed="speedChanged"\n              attr-for-selected="item-name"\n            >\n              <template\n                is="dom-repeat"\n                items="[[stateObj.attributes.speed_list]]"\n              >\n                <paper-item item-name$="[[item]]">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <div class="container-oscillating">\n          <div class="center horizontal layout single-row">\n            <div class="flex">[[localize(\'ui.card.fan.oscillate\')]]</div>\n            <paper-toggle-button\n              checked="[[oscillationToggleChecked]]"\n              on-change="oscillationToggleChanged"\n            >\n            </paper-toggle-button>\n          </div>\n        </div>\n\n        <div class="container-direction">\n          <div class="direction">\n            <div>[[localize(\'ui.card.fan.direction\')]]</div>\n            <paper-icon-button\n              icon="hass:rotate-left"\n              on-click="onDirectionLeft"\n              title="Left"\n              disabled="[[computeIsRotatingLeft(stateObj)]]"\n            ></paper-icon-button>\n            <paper-icon-button\n              icon="hass:rotate-right"\n              on-click="onDirectionRight"\n              title="Right"\n              disabled="[[computeIsRotatingRight(stateObj)]]"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <ha-attributes\n        state-obj="[[stateObj]]"\n        extra-filters="speed,speed_list,oscillating,direction"\n      ></ha-attributes>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         */

        var MoreInfoFan =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoFan, _LocalizeMixin);

            function MoreInfoFan() {
              _classCallCheck(this, MoreInfoFan);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoFan).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoFan,
              [
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal, oldVal) {
                    var _this = this;

                    if (newVal) {
                      this.setProperties({
                        oscillationToggleChecked: newVal.attributes.oscillating,
                      });
                    }

                    if (oldVal) {
                      setTimeout(function() {
                        _this.fire("iron-resize");
                      }, 500);
                    }
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    return (
                      "more-info-fan " +
                      Object(
                        _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__[
                          "default"
                        ]
                      )(stateObj, ["oscillating", "speed_list", "direction"])
                    );
                  },
                },
                {
                  key: "speedChanged",
                  value: function speedChanged(ev) {
                    var oldVal = this.stateObj.attributes.speed;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.hass.callService("fan", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                      speed: newVal,
                    });
                  },
                },
                {
                  key: "oscillationToggleChanged",
                  value: function oscillationToggleChanged(ev) {
                    var oldVal = this.stateObj.attributes.oscillating;
                    var newVal = ev.target.checked;
                    if (oldVal === newVal) return;
                    this.hass.callService("fan", "oscillate", {
                      entity_id: this.stateObj.entity_id,
                      oscillating: newVal,
                    });
                  },
                },
                {
                  key: "onDirectionLeft",
                  value: function onDirectionLeft() {
                    this.hass.callService("fan", "set_direction", {
                      entity_id: this.stateObj.entity_id,
                      direction: "reverse",
                    });
                  },
                },
                {
                  key: "onDirectionRight",
                  value: function onDirectionRight() {
                    this.hass.callService("fan", "set_direction", {
                      entity_id: this.stateObj.entity_id,
                      direction: "forward",
                    });
                  },
                },
                {
                  key: "computeIsRotatingLeft",
                  value: function computeIsRotatingLeft(stateObj) {
                    return stateObj.attributes.direction === "reverse";
                  },
                },
                {
                  key: "computeIsRotatingRight",
                  value: function computeIsRotatingRight(stateObj) {
                    return stateObj.attributes.direction === "forward";
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
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
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      oscillationToggleChecked: {
                        type: Boolean,
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoFan;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("more-info-fan", MoreInfoFan);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-group.js":
      /*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-group.js ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts"
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
            '\n      <style>\n        .child-card {\n          margin-bottom: 8px;\n        }\n\n        .child-card:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n\n      <div id="groupedControlDetails"></div>\n      <template is="dom-repeat" items="[[states]]" as="state">\n        <div class="child-card">\n          <state-card-content\n            state-obj="[[state]]"\n            hass="[[hass]]"\n          ></state-card-content>\n        </div>\n      </template>\n    ',
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

        var MoreInfoGroup =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(MoreInfoGroup, _PolymerElement);

            function MoreInfoGroup() {
              _classCallCheck(this, MoreInfoGroup);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoGroup).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoGroup,
              [
                {
                  key: "computeStates",
                  value: function computeStates(stateObj, hass) {
                    var states = [];
                    var entIds = stateObj.attributes.entity_id || [];

                    for (var i = 0; i < entIds.length; i++) {
                      var state = hass.states[entIds[i]];

                      if (state) {
                        states.push(state);
                      }
                    }

                    return states;
                  },
                },
                {
                  key: "statesChanged",
                  value: function statesChanged(stateObj, states) {
                    var groupDomainStateObj = false;
                    var groupDomain = false;

                    if (states && states.length > 0) {
                      var baseStateObj =
                        states.find(function(s) {
                          return s.state === "on";
                        }) || states[0];
                      groupDomain = Object(
                        _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__[
                          "default"
                        ]
                      )(baseStateObj); // Groups need to be filtered out or we'll show content of
                      // first child above the children of the current group

                      if (groupDomain !== "group") {
                        groupDomainStateObj = Object.assign({}, baseStateObj, {
                          entity_id: stateObj.entity_id,
                          attributes: Object.assign(
                            {},
                            baseStateObj.attributes
                          ),
                        });

                        for (var i = 0; i < states.length; i++) {
                          if (
                            groupDomain !==
                            Object(
                              _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__[
                                "default"
                              ]
                            )(states[i])
                          ) {
                            groupDomainStateObj = false;
                            break;
                          }
                        }
                      }
                    }

                    if (!groupDomainStateObj) {
                      var el = Object(
                        _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__[
                          "dom"
                        ]
                      )(this.$.groupedControlDetails);

                      if (el.lastChild) {
                        el.removeChild(el.lastChild);
                      }
                    } else {
                      Object(
                        _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(
                        this.$.groupedControlDetails,
                        "MORE-INFO-" + groupDomain.toUpperCase(),
                        {
                          stateObj: groupDomainStateObj,
                          hass: this.hass,
                        }
                      );
                    }
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
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
                      stateObj: {
                        type: Object,
                      },
                      states: {
                        type: Array,
                        computed: "computeStates(stateObj, hass)",
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["statesChanged(stateObj, states)"];
                  },
                },
              ]
            );

            return MoreInfoGroup;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-group", MoreInfoGroup);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-history_graph.js":
      /*!*******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-history_graph.js ***!
  \*******************************************************************/
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
        /* harmony import */ var _cards_ha_history_graph_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../cards/ha-history_graph-card */ "./src/cards/ha-history_graph-card.js"
        );
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
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
            '\n      <style>\n        :host {\n          display: block;\n          margin-bottom: 6px;\n        }\n      </style>\n      <ha-history_graph-card\n        hass="[[hass]]"\n        state-obj="[[stateObj]]"\n        in-dialog=""\n      >\n        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>\n      </ha-history_graph-card>\n    ',
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

        var MoreInfoHistoryGraph =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(MoreInfoHistoryGraph, _PolymerElement);

            function MoreInfoHistoryGraph() {
              _classCallCheck(this, MoreInfoHistoryGraph);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoHistoryGraph).apply(this, arguments)
              );
            }

            _createClass(MoreInfoHistoryGraph, null, [
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
                    hass: Object,
                    stateObj: Object,
                  };
                },
              },
            ]);

            return MoreInfoHistoryGraph;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-history_graph", MoreInfoHistoryGraph);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-input_datetime.js":
      /*!********************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-input_datetime.js ***!
  \********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js"
        );
        /* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js"
        );
        /* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts"
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
            '\n      <div class$="[[computeClassNames(stateObj)]]">\n        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">\n          <div>\n            <vaadin-date-picker\n              id="dateInput"\n              on-value-changed="dateTimeChanged"\n              label="Date"\n              value="{{selectedDate}}"\n            ></vaadin-date-picker>\n          </div>\n        </template>\n        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">\n          <div>\n            <paper-time-input\n              hour="{{selectedHour}}"\n              min="{{selectedMinute}}"\n              format="24"\n            ></paper-time-input>\n          </div>\n        </template>\n      </div>\n    ',
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

        var DatetimeInput =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(DatetimeInput, _PolymerElement);

            _createClass(DatetimeInput, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                      "html"
                    ]
                  )(_templateObject());
                },
              },
            ]);

            function DatetimeInput() {
              var _this;

              _classCallCheck(this, DatetimeInput);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(DatetimeInput).call(this)
              );
              _this.is_ready = false;
              return _this;
            }

            _createClass(
              DatetimeInput,
              [
                {
                  key: "ready",
                  value: function ready() {
                    _get(
                      _getPrototypeOf(DatetimeInput.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.is_ready = true;
                  },
                  /* Convert the date in the stateObj into a string useable by vaadin-date-picker */
                },
                {
                  key: "getDateString",
                  value: function getDateString(stateObj) {
                    if (stateObj.state === "unknown") {
                      return "";
                    }

                    var monthFiller;

                    if (stateObj.attributes.month < 10) {
                      monthFiller = "0";
                    } else {
                      monthFiller = "";
                    }

                    var dayFiller;

                    if (stateObj.attributes.day < 10) {
                      dayFiller = "0";
                    } else {
                      dayFiller = "";
                    }

                    return (
                      stateObj.attributes.year +
                      "-" +
                      monthFiller +
                      stateObj.attributes.month +
                      "-" +
                      dayFiller +
                      stateObj.attributes.day
                    );
                  },
                  /* Should fire when any value was changed *by the user*, not b/c of setting
                   * initial values. */
                },
                {
                  key: "dateTimeChanged",
                  value: function dateTimeChanged() {
                    // Check if the change is really coming from the user
                    if (!this.is_ready) {
                      return;
                    }

                    var changed = false;
                    var minuteFiller;
                    var serviceData = {
                      entity_id: this.stateObj.entity_id,
                    };

                    if (this.stateObj.attributes.has_time) {
                      changed |=
                        parseInt(this.selectedMinute) !==
                        this.stateObj.attributes.minute;
                      changed |=
                        parseInt(this.selectedHour) !==
                        this.stateObj.attributes.hour;

                      if (this.selectedMinute < 10) {
                        minuteFiller = "0";
                      } else {
                        minuteFiller = "";
                      }

                      var timeStr =
                        this.selectedHour +
                        ":" +
                        minuteFiller +
                        this.selectedMinute;
                      serviceData.time = timeStr;
                    }

                    if (this.stateObj.attributes.has_date) {
                      if (this.selectedDate.length === 0) {
                        return; // Date was not set
                      }

                      var dateValInput = new Date(this.selectedDate);
                      var dateValState = new Date(
                        this.stateObj.attributes.year,
                        this.stateObj.attributes.month - 1,
                        this.stateObj.attributes.day
                      );
                      changed |= dateValState !== dateValInput;
                      serviceData.date = this.selectedDate;
                    }

                    if (changed) {
                      this.hass.callService(
                        "input_datetime",
                        "set_datetime",
                        serviceData
                      );
                    }
                  },
                },
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal) {
                    // Set to non-ready s.t. dateTimeChanged does not fire
                    this.is_ready = false;

                    if (newVal.attributes.has_time) {
                      this.selectedHour = newVal.attributes.hour;
                      this.selectedMinute = newVal.attributes.minute;
                    }

                    if (newVal.attributes.has_date) {
                      this.selectedDate = this.getDateString(newVal);
                    }

                    this.is_ready = true;
                  },
                },
                {
                  key: "doesHaveDate",
                  value: function doesHaveDate(stateObj) {
                    return stateObj.attributes.has_date;
                  },
                },
                {
                  key: "doesHaveTime",
                  value: function doesHaveTime(stateObj) {
                    return stateObj.attributes.has_time;
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    return (
                      "more-info-input_datetime " +
                      Object(
                        _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ]
                      )(stateObj, ["has_time", "has_date"])
                    );
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {
                        type: Object,
                      },
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      selectedDate: {
                        type: String,
                        observer: "dateTimeChanged",
                      },
                      selectedHour: {
                        type: Number,
                        observer: "dateTimeChanged",
                      },
                      selectedMinute: {
                        type: Number,
                        observer: "dateTimeChanged",
                      },
                    };
                  },
                },
              ]
            );

            return DatetimeInput;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-input_datetime", DatetimeInput);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-light.js":
      /*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-light.js ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
        );
        /* harmony import */ var _components_ha_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-color-picker */ "./src/components/ha-color-picker.js"
        );
        /* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        .effect_list,\n        .brightness,\n        .color_temp,\n        .white_value {\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .color_temp {\n          --ha-slider-background: -webkit-linear-gradient(\n            right,\n            rgb(255, 160, 0) 0%,\n            white 50%,\n            rgb(166, 209, 255) 100%\n          );\n          /* The color temp minimum value shouldn\'t be rendered differently. It\'s not "off". */\n          --paper-slider-knob-start-border-color: var(--primary-color);\n        }\n\n        .segmentationContainer {\n          position: relative;\n          width: 100%;\n        }\n\n        ha-color-picker {\n          display: block;\n          width: 100%;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          padding: 0px;\n          max-height: 0px;\n          width: 23px;\n          height: 23px;\n          opacity: var(--dark-secondary-opacity);\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-color.is-on .segmentationContainer .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          width: 23px;\n          height: 23px;\n          padding: 0px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        .has-effect_list.is-on .effect_list,\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          max-height: 84px;\n        }\n\n        .has-brightness .has-color_temp.is-on,\n        .has-white_value.is-on {\n          margin-top: -16px;\n        }\n\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          padding-top: 16px;\n        }\n\n        .has-color.is-on .segmentationButton {\n          max-height: 100px;\n          overflow: visible;\n        }\n\n        .has-color.is-on ha-color-picker {\n          max-height: 500px;\n          overflow: visible;\n          --ha-color-picker-wheel-borderwidth: 5;\n          --ha-color-picker-wheel-bordercolor: white;\n          --ha-color-picker-wheel-shadow: none;\n          --ha-color-picker-marker-borderwidth: 2;\n          --ha-color-picker-marker-bordercolor: white;\n        }\n\n        .is-unavailable .control {\n          max-height: 0px;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="control brightness">\n          <ha-labeled-slider\n            caption="[[localize(\'ui.card.light.brightness\')]]"\n            icon="hass:brightness-5"\n            min="1"\n            max="255"\n            value="{{brightnessSliderValue}}"\n            on-change="brightnessSliderChanged"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class="control color_temp">\n          <ha-labeled-slider\n            caption="[[localize(\'ui.card.light.color_temperature\')]]"\n            icon="hass:thermometer"\n            min="[[stateObj.attributes.min_mireds]]"\n            max="[[stateObj.attributes.max_mireds]]"\n            value="{{ctSliderValue}}"\n            on-change="ctSliderChanged"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class="control white_value">\n          <ha-labeled-slider\n            caption="[[localize(\'ui.card.light.white_value\')]]"\n            icon="hass:file-word-box"\n            max="255"\n            value="{{wvSliderValue}}"\n            on-change="wvSliderChanged"\n          ></ha-labeled-slider>\n        </div>\n        <div class="segmentationContainer">\n          <ha-color-picker\n            class="control color"\n            on-colorselected="colorPicked"\n            desired-hs-color="{{colorPickerColor}}"\n            throttle="500"\n            hue-segments="{{hueSegments}}"\n            saturation-segments="{{saturationSegments}}"\n          >\n          </ha-color-picker>\n          <paper-icon-button\n            icon="mdi:palette"\n            on-click="segmentClick"\n            class="control segmentationButton"\n          ></paper-icon-button>\n        </div>\n\n        <div class="control effect_list">\n          <ha-paper-dropdown-menu\n            label-float=""\n            dynamic-align=""\n            label="[[localize(\'ui.card.light.effect\')]]"\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              selected="[[stateObj.attributes.effect]]"\n              on-selected-changed="effectChanged"\n              attr-for-selected="item-name"\n            >\n              <template\n                is="dom-repeat"\n                items="[[stateObj.attributes.effect_list]]"\n              >\n                <paper-item item-name$="[[item]]">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <ha-attributes\n          state-obj="[[stateObj]]"\n          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"\n        ></ha-attributes>\n      </div>\n    ',
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

        var FEATURE_CLASS_NAMES = {
          1: "has-brightness",
          2: "has-color_temp",
          4: "has-effect_list",
          16: "has-color",
          128: "has-white_value",
        };
        /*
         * @appliesMixin EventsMixin
         */

        var MoreInfoLight =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoLight, _LocalizeMixin);

            function MoreInfoLight() {
              _classCallCheck(this, MoreInfoLight);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoLight).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoLight,
              [
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal, oldVal) {
                    var _this = this;

                    var props = {
                      brightnessSliderValue: 0,
                    };

                    if (newVal && newVal.state === "on") {
                      props.brightnessSliderValue =
                        newVal.attributes.brightness;
                      props.ctSliderValue = newVal.attributes.color_temp;
                      props.wvSliderValue = newVal.attributes.white_value;

                      if (newVal.attributes.hs_color) {
                        props.colorPickerColor = {
                          h: newVal.attributes.hs_color[0],
                          s: newVal.attributes.hs_color[1] / 100,
                        };
                      }
                    }

                    this.setProperties(props);

                    if (oldVal) {
                      setTimeout(function() {
                        _this.fire("iron-resize");
                      }, 500);
                    }
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    var classes = [
                      Object(
                        _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__[
                          "default"
                        ]
                      )(stateObj, FEATURE_CLASS_NAMES),
                    ];

                    if (stateObj && stateObj.state === "on") {
                      classes.push("is-on");
                    }

                    if (stateObj && stateObj.state === "unavailable") {
                      classes.push("is-unavailable");
                    }

                    return classes.join(" ");
                  },
                },
                {
                  key: "effectChanged",
                  value: function effectChanged(ev) {
                    var oldVal = this.stateObj.attributes.effect;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.hass.callService("light", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                      effect: newVal,
                    });
                  },
                },
                {
                  key: "brightnessSliderChanged",
                  value: function brightnessSliderChanged(ev) {
                    var bri = parseInt(ev.target.value, 10);
                    if (isNaN(bri)) return;
                    this.hass.callService("light", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                      brightness: bri,
                    });
                  },
                },
                {
                  key: "ctSliderChanged",
                  value: function ctSliderChanged(ev) {
                    var ct = parseInt(ev.target.value, 10);
                    if (isNaN(ct)) return;
                    this.hass.callService("light", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                      color_temp: ct,
                    });
                  },
                },
                {
                  key: "wvSliderChanged",
                  value: function wvSliderChanged(ev) {
                    var wv = parseInt(ev.target.value, 10);
                    if (isNaN(wv)) return;
                    this.hass.callService("light", "turn_on", {
                      entity_id: this.stateObj.entity_id,
                      white_value: wv,
                    });
                  },
                },
                {
                  key: "segmentClick",
                  value: function segmentClick() {
                    if (
                      this.hueSegments === 24 &&
                      this.saturationSegments === 8
                    ) {
                      this.setProperties({
                        hueSegments: 0,
                        saturationSegments: 0,
                      });
                    } else {
                      this.setProperties({
                        hueSegments: 24,
                        saturationSegments: 8,
                      });
                    }
                  },
                },
                {
                  key: "serviceChangeColor",
                  value: function serviceChangeColor(hass, entityId, color) {
                    hass.callService("light", "turn_on", {
                      entity_id: entityId,
                      hs_color: [color.h, color.s * 100],
                    });
                  },
                  /**
                   * Called when a new color has been picked.
                   * should be throttled with the 'throttle=' attribute of the color picker
                   */
                },
                {
                  key: "colorPicked",
                  value: function colorPicked(ev) {
                    this.serviceChangeColor(
                      this.hass,
                      this.stateObj.entity_id,
                      ev.detail.hs
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
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
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      brightnessSliderValue: {
                        type: Number,
                        value: 0,
                      },
                      ctSliderValue: {
                        type: Number,
                        value: 0,
                      },
                      wvSliderValue: {
                        type: Number,
                        value: 0,
                      },
                      hueSegments: {
                        type: Number,
                        value: 24,
                      },
                      saturationSegments: {
                        type: Number,
                        value: 8,
                      },
                      colorPickerColor: {
                        type: Object,
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoLight;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("more-info-light", MoreInfoLight);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-lock.js":
      /*!**********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-lock.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        paper-input {\n          display: inline-block;\n        }\n      </style>\n\n      <template is="dom-if" if="[[stateObj.attributes.code_format]]">\n        <paper-input\n          label="[[localize(\'ui.card.lock.code\')]]"\n          value="{{enteredCode}}"\n          pattern="[[stateObj.attributes.code_format]]"\n          type="password"\n        ></paper-input>\n        <mwc-button\n          on-click="callService"\n          data-service="unlock"\n          hidden$="[[!isLocked]]"\n          >[[localize(\'ui.card.lock.unlock\')]]</mwc-button\n        >\n        <mwc-button\n          on-click="callService"\n          data-service="lock"\n          hidden$="[[isLocked]]"\n          >[[localize(\'ui.card.lock.lock\')]]</mwc-button\n        >\n      </template>\n      <ha-attributes\n        state-obj="[[stateObj]]"\n        extra-filters="code_format"\n      ></ha-attributes>\n    ',
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

        /*
         * @appliesMixin LocalizeMixin
         */

        var MoreInfoLock =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoLock, _LocalizeMixin);

            function MoreInfoLock() {
              _classCallCheck(this, MoreInfoLock);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoLock).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoLock,
              [
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal) {
                    if (newVal) {
                      this.isLocked = newVal.state === "locked";
                    }
                  },
                },
                {
                  key: "callService",
                  value: function callService(ev) {
                    var service = ev.target.getAttribute("data-service");
                    var data = {
                      entity_id: this.stateObj.entity_id,
                      code: this.enteredCode,
                    };
                    this.hass.callService("lock", service, data);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      enteredCode: {
                        type: String,
                        value: "",
                      },
                      isLocked: Boolean,
                    };
                  },
                },
              ]
            );

            return MoreInfoLock;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-lock", MoreInfoLock);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-media_player.js":
      /*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-media_player.js ***!
  \******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../util/hass-media-player-model */ "./src/util/hass-media-player-model.js"
        );
        /* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        .media-state {\n          text-transform: capitalize;\n        }\n\n        paper-icon-button[highlight] {\n          color: var(--accent-color);\n        }\n\n        .volume {\n          margin-bottom: 8px;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-volume_level .volume {\n          max-height: 40px;\n        }\n\n        iron-icon.source-input {\n          padding: 7px;\n          margin-top: 15px;\n        }\n\n        ha-paper-dropdown-menu.source-input {\n          margin-left: 10px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="layout horizontal">\n          <div class="flex">\n            <paper-icon-button\n              icon="hass:power"\n              highlight$="[[playerObj.isOff]]"\n              on-click="handleTogglePower"\n              hidden$="[[computeHidePowerButton(playerObj)]]"\n            ></paper-icon-button>\n          </div>\n          <div>\n            <template\n              is="dom-if"\n              if="[[computeShowPlaybackControls(playerObj)]]"\n            >\n              <paper-icon-button\n                icon="hass:skip-previous"\n                on-click="handlePrevious"\n                hidden$="[[!playerObj.supportsPreviousTrack]]"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon="[[computePlaybackControlIcon(playerObj)]]"\n                on-click="handlePlaybackControl"\n                hidden$="[[!computePlaybackControlIcon(playerObj)]]"\n                highlight=""\n              ></paper-icon-button>\n              <paper-icon-button\n                icon="hass:skip-next"\n                on-click="handleNext"\n                hidden$="[[!playerObj.supportsNextTrack]]"\n              ></paper-icon-button>\n            </template>\n          </div>\n        </div>\n        <!-- VOLUME -->\n        <div\n          class="volume_buttons center horizontal layout"\n          hidden$="[[computeHideVolumeButtons(playerObj)]]"\n        >\n          <paper-icon-button\n            on-click="handleVolumeTap"\n            icon="hass:volume-off"\n          ></paper-icon-button>\n          <paper-icon-button\n            id="volumeDown"\n            disabled$="[[playerObj.isMuted]]"\n            on-mousedown="handleVolumeDown"\n            on-touchstart="handleVolumeDown"\n            on-touchend="handleVolumeTouchEnd"\n            icon="hass:volume-medium"\n          ></paper-icon-button>\n          <paper-icon-button\n            id="volumeUp"\n            disabled$="[[playerObj.isMuted]]"\n            on-mousedown="handleVolumeUp"\n            on-touchstart="handleVolumeUp"\n            on-touchend="handleVolumeTouchEnd"\n            icon="hass:volume-high"\n          ></paper-icon-button>\n        </div>\n        <div\n          class="volume center horizontal layout"\n          hidden$="[[!playerObj.supportsVolumeSet]]"\n        >\n          <paper-icon-button\n            on-click="handleVolumeTap"\n            hidden$="[[playerObj.supportsVolumeButtons]]"\n            icon="[[computeMuteVolumeIcon(playerObj)]]"\n          ></paper-icon-button>\n          <ha-paper-slider\n            disabled$="[[playerObj.isMuted]]"\n            min="0"\n            max="100"\n            value="[[playerObj.volumeSliderValue]]"\n            on-change="volumeSliderChanged"\n            class="flex"\n            ignore-bar-touch=""\n            dir="{{rtl}}"\n          >\n          </ha-paper-slider>\n        </div>\n        <!-- SOURCE PICKER -->\n        <div\n          class="controls layout horizontal justified"\n          hidden$="[[computeHideSelectSource(playerObj)]]"\n        >\n          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>\n          <ha-paper-dropdown-menu\n            class="flex source-input"\n            dynamic-align=""\n            label-float=""\n            label="[[localize(\'ui.card.media_player.source\')]]"\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="item-name"\n              selected="[[playerObj.source]]"\n              on-selected-changed="handleSourceChanged"\n            >\n              <template is="dom-repeat" items="[[playerObj.sourceList]]">\n                <paper-item item-name$="[[item]]">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n        <!-- SOUND MODE PICKER -->\n        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">\n          <div class="controls layout horizontal justified">\n            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>\n            <ha-paper-dropdown-menu\n              class="flex source-input"\n              dynamic-align\n              label-float\n              label="[[localize(\'ui.card.media_player.sound_mode\')]]"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                attr-for-selected="item-name"\n                selected="[[playerObj.soundMode]]"\n                on-selected-changed="handleSoundModeChanged"\n              >\n                <template is="dom-repeat" items="[[playerObj.soundModeList]]">\n                  <paper-item item-name$="[[item]]">[[item]]</paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n        <!-- TTS -->\n        <div\n          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"\n          class="layout horizontal end"\n        >\n          <paper-input\n            id="ttsInput"\n            label="[[localize(\'ui.card.media_player.text_to_speak\')]]"\n            class="flex"\n            value="{{ttsMessage}}"\n            on-keydown="ttsCheckForEnter"\n          ></paper-input>\n          <paper-icon-button\n            icon="hass:send"\n            on-click="sendTTS"\n          ></paper-icon-button>\n        </div>\n      </div>\n    ',
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

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        var MoreInfoMediaPlayer =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoMediaPlayer, _LocalizeMixin);

            function MoreInfoMediaPlayer() {
              _classCallCheck(this, MoreInfoMediaPlayer);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoMediaPlayer).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoMediaPlayer,
              [
                {
                  key: "computePlayerObj",
                  value: function computePlayerObj(hass, stateObj) {
                    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "playerObjChanged",
                  value: function playerObjChanged(newVal, oldVal) {
                    var _this = this;

                    if (oldVal) {
                      setTimeout(function() {
                        _this.fire("iron-resize");
                      }, 500);
                    }
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    return Object(
                      _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__[
                        "default"
                      ]
                    )(stateObj, ["volume_level"]);
                  },
                },
                {
                  key: "computeMuteVolumeIcon",
                  value: function computeMuteVolumeIcon(playerObj) {
                    return playerObj.isMuted
                      ? "hass:volume-off"
                      : "hass:volume-high";
                  },
                },
                {
                  key: "computeHideVolumeButtons",
                  value: function computeHideVolumeButtons(playerObj) {
                    return !playerObj.supportsVolumeButtons || playerObj.isOff;
                  },
                },
                {
                  key: "computeShowPlaybackControls",
                  value: function computeShowPlaybackControls(playerObj) {
                    return !playerObj.isOff && playerObj.hasMediaControl;
                  },
                },
                {
                  key: "computePlaybackControlIcon",
                  value: function computePlaybackControlIcon(playerObj) {
                    if (playerObj.isPlaying) {
                      return playerObj.supportsPause
                        ? "hass:pause"
                        : "hass:stop";
                    }

                    if (
                      playerObj.hasMediaControl ||
                      playerObj.isOff ||
                      playerObj.isIdle
                    ) {
                      if (
                        playerObj.hasMediaControl &&
                        playerObj.supportsPause &&
                        !playerObj.isPaused
                      ) {
                        return "hass:play-pause";
                      }

                      return playerObj.supportsPlay ? "hass:play" : null;
                    }

                    return "";
                  },
                },
                {
                  key: "computeHidePowerButton",
                  value: function computeHidePowerButton(playerObj) {
                    return playerObj.isOff
                      ? !playerObj.supportsTurnOn
                      : !playerObj.supportsTurnOff;
                  },
                },
                {
                  key: "computeHideSelectSource",
                  value: function computeHideSelectSource(playerObj) {
                    return (
                      playerObj.isOff ||
                      !playerObj.supportsSelectSource ||
                      !playerObj.sourceList
                    );
                  },
                },
                {
                  key: "computeHideSelectSoundMode",
                  value: function computeHideSelectSoundMode(playerObj) {
                    return (
                      playerObj.isOff ||
                      !playerObj.supportsSelectSoundMode ||
                      !playerObj.soundModeList
                    );
                  },
                },
                {
                  key: "computeHideTTS",
                  value: function computeHideTTS(ttsLoaded, playerObj) {
                    return !ttsLoaded || !playerObj.supportsPlayMedia;
                  },
                },
                {
                  key: "computeTTSLoaded",
                  value: function computeTTSLoaded(hass) {
                    return Object(
                      _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__[
                        "default"
                      ]
                    )(hass, "tts");
                  },
                },
                {
                  key: "handleTogglePower",
                  value: function handleTogglePower() {
                    this.playerObj.togglePower();
                  },
                },
                {
                  key: "handlePrevious",
                  value: function handlePrevious() {
                    this.playerObj.previousTrack();
                  },
                },
                {
                  key: "handlePlaybackControl",
                  value: function handlePlaybackControl() {
                    this.playerObj.mediaPlayPause();
                  },
                },
                {
                  key: "handleNext",
                  value: function handleNext() {
                    this.playerObj.nextTrack();
                  },
                },
                {
                  key: "handleSourceChanged",
                  value: function handleSourceChanged(ev) {
                    if (!this.playerObj) return;
                    var oldVal = this.playerObj.source;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.playerObj.selectSource(newVal);
                  },
                },
                {
                  key: "handleSoundModeChanged",
                  value: function handleSoundModeChanged(ev) {
                    if (!this.playerObj) return;
                    var oldVal = this.playerObj.soundMode;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.playerObj.selectSoundMode(newVal);
                  },
                },
                {
                  key: "handleVolumeTap",
                  value: function handleVolumeTap() {
                    if (!this.playerObj.supportsVolumeMute) {
                      return;
                    }

                    this.playerObj.volumeMute(!this.playerObj.isMuted);
                  },
                },
                {
                  key: "handleVolumeTouchEnd",
                  value: function handleVolumeTouchEnd(ev) {
                    /* when touch ends, we must prevent this from
                     * becoming a mousedown, up, click by emulation */
                    ev.preventDefault();
                  },
                },
                {
                  key: "handleVolumeUp",
                  value: function handleVolumeUp() {
                    var obj = this.$.volumeUp;
                    this.handleVolumeWorker("volume_up", obj, true);
                  },
                },
                {
                  key: "handleVolumeDown",
                  value: function handleVolumeDown() {
                    var obj = this.$.volumeDown;
                    this.handleVolumeWorker("volume_down", obj, true);
                  },
                },
                {
                  key: "handleVolumeWorker",
                  value: function handleVolumeWorker(service, obj, force) {
                    var _this2 = this;

                    if (force || (obj !== undefined && obj.pointerDown)) {
                      this.playerObj.callService(service);
                      setTimeout(function() {
                        return _this2.handleVolumeWorker(service, obj, false);
                      }, 500);
                    }
                  },
                },
                {
                  key: "volumeSliderChanged",
                  value: function volumeSliderChanged(ev) {
                    var volPercentage = parseFloat(ev.target.value);
                    var volume = volPercentage > 0 ? volPercentage / 100 : 0;
                    this.playerObj.setVolume(volume);
                  },
                },
                {
                  key: "ttsCheckForEnter",
                  value: function ttsCheckForEnter(ev) {
                    if (ev.keyCode === 13) this.sendTTS();
                  },
                },
                {
                  key: "sendTTS",
                  value: function sendTTS() {
                    var services = this.hass.services.tts;
                    var serviceKeys = Object.keys(services).sort();
                    var service;
                    var i;

                    for (i = 0; i < serviceKeys.length; i++) {
                      if (serviceKeys[i].indexOf("_say") !== -1) {
                        service = serviceKeys[i];
                        break;
                      }
                    }

                    if (!service) {
                      return;
                    }

                    this.hass.callService("tts", service, {
                      entity_id: this.stateObj.entity_id,
                      message: this.ttsMessage,
                    });
                    this.ttsMessage = "";
                    this.$.ttsInput.focus();
                  },
                },
                {
                  key: "_computeRTLDirection",
                  value: function _computeRTLDirection(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__[
                        "computeRTLDirection"
                      ]
                    )(hass);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      playerObj: {
                        type: Object,
                        computed: "computePlayerObj(hass, stateObj)",
                        observer: "playerObjChanged",
                      },
                      ttsLoaded: {
                        type: Boolean,
                        computed: "computeTTSLoaded(hass)",
                      },
                      ttsMessage: {
                        type: String,
                        value: "",
                      },
                      rtl: {
                        type: String,
                        computed: "_computeRTLDirection(hass)",
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoMediaPlayer;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("more-info-media_player", MoreInfoMediaPlayer);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-script.js":
      /*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-script.js ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n\n      <div class="layout vertical">\n        <div class="data-entry layout justified horizontal">\n          <div class="key">\n            [[localize(\'ui.dialogs.more_info_control.script.last_action\')]]\n          </div>\n          <div class="value">[[stateObj.attributes.last_action]]</div>\n        </div>\n      </div>\n    ',
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

        var MoreInfoScript =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoScript, _LocalizeMixin);

            function MoreInfoScript() {
              _classCallCheck(this, MoreInfoScript);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoScript).apply(this, arguments)
              );
            }

            _createClass(MoreInfoScript, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    stateObj: {
                      type: Object,
                    },
                  };
                },
              },
            ]);

            return MoreInfoScript;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-script", MoreInfoScript);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-sun.js":
      /*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.js ***!
  \*********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n\n      <template\n        is="dom-repeat"\n        items="[[computeOrder(risingDate, settingDate)]]"\n      >\n        <div class="data-entry layout justified horizontal">\n          <div class="key">\n            <span>[[itemCaption(item)]]</span>\n            <ha-relative-time\n              hass="[[hass]]"\n              datetime-obj="[[itemDate(item)]]"\n            ></ha-relative-time>\n          </div>\n          <div class="value">[[itemValue(item)]]</div>\n        </div>\n      </template>\n      <div class="data-entry layout justified horizontal">\n        <div class="key">\n          [[localize(\'ui.dialogs.more_info_control.sun.elevation\')]]\n        </div>\n        <div class="value">[[stateObj.attributes.elevation]]</div>\n      </div>\n    ',
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

        var MoreInfoSun =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoSun, _LocalizeMixin);

            function MoreInfoSun() {
              _classCallCheck(this, MoreInfoSun);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoSun).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoSun,
              [
                {
                  key: "computeRising",
                  value: function computeRising(stateObj) {
                    return new Date(stateObj.attributes.next_rising);
                  },
                },
                {
                  key: "computeSetting",
                  value: function computeSetting(stateObj) {
                    return new Date(stateObj.attributes.next_setting);
                  },
                },
                {
                  key: "computeOrder",
                  value: function computeOrder(risingDate, settingDate) {
                    return risingDate > settingDate
                      ? ["set", "ris"]
                      : ["ris", "set"];
                  },
                },
                {
                  key: "itemCaption",
                  value: function itemCaption(type) {
                    if (type === "ris") {
                      return this.localize(
                        "ui.dialogs.more_info_control.sun.rising"
                      );
                    }

                    return this.localize(
                      "ui.dialogs.more_info_control.sun.setting"
                    );
                  },
                },
                {
                  key: "itemDate",
                  value: function itemDate(type) {
                    return type === "ris" ? this.risingDate : this.settingDate;
                  },
                },
                {
                  key: "itemValue",
                  value: function itemValue(type) {
                    return Object(
                      _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__[
                        "default"
                      ]
                    )(this.itemDate(type), this.hass.language);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      risingDate: {
                        type: Object,
                        computed: "computeRising(stateObj)",
                      },
                      settingDate: {
                        type: Object,
                        computed: "computeSetting(stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoSun;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-sun", MoreInfoSun);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-updater.js":
      /*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-updater.js ***!
  \*************************************************************/
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
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        .link {\n          color: #03a9f4;\n        }\n      </style>\n\n      <div>\n        <a\n          class="link"\n          href="https://www.home-assistant.io/docs/installation/updating/"\n          target="_blank"\n          >[[localize(\'ui.dialogs.more_info_control.updater.title\')]]</a\n        >\n      </div>\n    ',
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

        var MoreInfoUpdater =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoUpdater, _LocalizeMixin);

            function MoreInfoUpdater() {
              _classCallCheck(this, MoreInfoUpdater);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoUpdater).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoUpdater,
              [
                {
                  key: "computeReleaseNotes",
                  value: function computeReleaseNotes(stateObj) {
                    return (
                      stateObj.attributes.release_notes ||
                      "https://www.home-assistant.io/docs/installation/updating/"
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
                      stateObj: {
                        type: Object,
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoUpdater;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-updater", MoreInfoUpdater);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-vacuum.js":
      /*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-vacuum.js ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
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
            '\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        .status-subtitle {\n          color: var(--secondary-text-color);\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class="horizontal justified layout">\n        <div hidden$="[[!supportsStatus(stateObj)]]">\n          <span class="status-subtitle">Status: </span\n          ><span><strong>[[stateObj.attributes.status]]</strong></span>\n        </div>\n        <div hidden$="[[!supportsBattery(stateObj)]]">\n          <span\n            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>\n            [[stateObj.attributes.battery_level]] %</span\n          >\n        </div>\n      </div>\n      <div hidden$="[[!supportsCommandBar(stateObj)]]">\n        <p></p>\n        <div class="status-subtitle">Vacuum cleaner commands:</div>\n        <div class="horizontal justified layout">\n          <template is="dom-if" if="[[supportsStart(stateObj)]]">\n            <div>\n              <paper-icon-button\n                icon="hass:play"\n                on-click="onStart"\n                title="Start"\n              ></paper-icon-button>\n            </div>\n            <div hidden$="[[!supportsPause(stateObj)]]">\n              <paper-icon-button\n                icon="hass:pause"\n                on-click="onPause"\n                title="Pause"\n              ></paper-icon-button>\n            </div>\n          </template>\n          <template is="dom-if" if="[[!supportsStart(stateObj)]]">\n            <div hidden$="[[!supportsPause(stateObj)]]">\n              <paper-icon-button\n                icon="hass:play-pause"\n                on-click="onPlayPause"\n                title="Pause"\n              ></paper-icon-button>\n            </div>\n          </template>\n\n          <div hidden$="[[!supportsStop(stateObj)]]">\n            <paper-icon-button\n              icon="hass:stop"\n              on-click="onStop"\n              title="Stop"\n            ></paper-icon-button>\n          </div>\n          <div hidden$="[[!supportsCleanSpot(stateObj)]]">\n            <paper-icon-button\n              icon="hass:broom"\n              on-click="onCleanSpot"\n              title="Clean spot"\n            ></paper-icon-button>\n          </div>\n          <div hidden$="[[!supportsLocate(stateObj)]]">\n            <paper-icon-button\n              icon="hass:map-marker"\n              on-click="onLocate"\n              title="Locate"\n            ></paper-icon-button>\n          </div>\n          <div hidden$="[[!supportsReturnHome(stateObj)]]">\n            <paper-icon-button\n              icon="hass:home-map-marker"\n              on-click="onReturnHome"\n              title="Return home"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <div hidden$="[[!supportsFanSpeed(stateObj)]]">\n        <div class="horizontal justified layout">\n          <ha-paper-dropdown-menu\n            label-float=""\n            dynamic-align=""\n            label="Fan speed"\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              selected="[[stateObj.attributes.fan_speed]]"\n              on-selected-changed="fanSpeedChanged"\n              attr-for-selected="item-name"\n            >\n              <template\n                is="dom-repeat"\n                items="[[stateObj.attributes.fan_speed_list]]"\n              >\n                <paper-item item-name$="[[item]]">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n          <div\n            style="justify-content: center; align-self: center; padding-top: 1.3em"\n          >\n            <span\n              ><iron-icon icon="hass:fan"></iron-icon>\n              [[stateObj.attributes.fan_speed]]</span\n            >\n          </div>\n        </div>\n        <p></p>\n      </div>\n      <ha-attributes\n        state-obj="[[stateObj]]"\n        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"\n      ></ha-attributes>\n    ',
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

        var MoreInfoVacuum =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(MoreInfoVacuum, _PolymerElement);

            function MoreInfoVacuum() {
              _classCallCheck(this, MoreInfoVacuum);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoVacuum).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoVacuum,
              [
                {
                  key: "supportsPause",
                  value: function supportsPause(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 4);
                  },
                },
                {
                  key: "supportsStop",
                  value: function supportsStop(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 8);
                  },
                },
                {
                  key: "supportsReturnHome",
                  value: function supportsReturnHome(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 16);
                  },
                },
                {
                  key: "supportsFanSpeed",
                  value: function supportsFanSpeed(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 32);
                  },
                },
                {
                  key: "supportsBattery",
                  value: function supportsBattery(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 64);
                  },
                },
                {
                  key: "supportsStatus",
                  value: function supportsStatus(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 128);
                  },
                },
                {
                  key: "supportsLocate",
                  value: function supportsLocate(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 512);
                  },
                },
                {
                  key: "supportsCleanSpot",
                  value: function supportsCleanSpot(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 1024);
                  },
                },
                {
                  key: "supportsStart",
                  value: function supportsStart(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                        "supportsFeature"
                      ]
                    )(stateObj, 8192);
                  },
                },
                {
                  key: "supportsCommandBar",
                  value: function supportsCommandBar(stateObj) {
                    return (
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 4) |
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 8) |
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 16) |
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 512) |
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 1024) |
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                          "supportsFeature"
                        ]
                      )(stateObj, 8192)
                    );
                  },
                },
                {
                  key: "fanSpeedChanged",
                  value: function fanSpeedChanged(ev) {
                    var oldVal = this.stateObj.attributes.fan_speed;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.hass.callService("vacuum", "set_fan_speed", {
                      entity_id: this.stateObj.entity_id,
                      fan_speed: newVal,
                    });
                  },
                },
                {
                  key: "onStop",
                  value: function onStop() {
                    this.hass.callService("vacuum", "stop", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onPlayPause",
                  value: function onPlayPause() {
                    this.hass.callService("vacuum", "start_pause", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onPause",
                  value: function onPause() {
                    this.hass.callService("vacuum", "pause", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onStart",
                  value: function onStart() {
                    this.hass.callService("vacuum", "start", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onLocate",
                  value: function onLocate() {
                    this.hass.callService("vacuum", "locate", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onCleanSpot",
                  value: function onCleanSpot() {
                    this.hass.callService("vacuum", "clean_spot", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
                {
                  key: "onReturnHome",
                  value: function onReturnHome() {
                    this.hass.callService("vacuum", "return_to_base", {
                      entity_id: this.stateObj.entity_id,
                    });
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
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
                      inDialog: {
                        type: Boolean,
                        value: false,
                      },
                      stateObj: {
                        type: Object,
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoVacuum;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          );

        customElements.define("more-info-vacuum", MoreInfoVacuum);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-water_heater.js":
      /*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-water_heater.js ***!
  \******************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js"
        );
        /* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts"
        );
        /* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts"
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        .container-away_mode,\n        .container-temperature,\n        .container-operation_list,\n\n        .has-away_mode .container-away_mode,\n        .has-target_temperature .container-temperature,\n        .has-operation_mode .container-operation_list,\n\n        .container-operation_list iron-icon,\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-paper-slider {\n          width: 100%;\n        }\n\n        ha-water_heater-control.range-control-left,\n        ha-water_heater-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-water_heater-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-water_heater-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n        }\n      </style>\n\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="container-temperature">\n          <div class$="[[stateObj.attributes.operation_mode]]">\n            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">\n              [[localize(\'ui.card.water_heater.target_temperature\')]]\n            </div>\n            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">\n              <ha-water_heater-control\n                value="[[stateObj.attributes.temperature]]"\n                units="[[hass.config.unit_system.temperature]]"\n                step="[[computeTemperatureStepSize(hass, stateObj)]]"\n                min="[[stateObj.attributes.min_temp]]"\n                max="[[stateObj.attributes.max_temp]]"\n                on-change="targetTemperatureChanged"\n              >\n              </ha-water_heater-control>\n            </template>\n          </div>\n        </div>\n\n        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">\n          <div class="container-operation_list">\n            <div class="controls">\n              <ha-paper-dropdown-menu\n                label-float=""\n                dynamic-align=""\n                label="[[localize(\'ui.card.water_heater.operation\')]]"\n              >\n                <paper-listbox\n                  slot="dropdown-content"\n                  selected="[[stateObj.attributes.operation_mode]]"\n                  attr-for-selected="item-name"\n                  on-selected-changed="handleOperationmodeChanged"\n                >\n                  <template\n                    is="dom-repeat"\n                    items="[[stateObj.attributes.operation_list]]"\n                  >\n                    <paper-item item-name$="[[item]]"\n                      >[[_localizeOperationMode(localize, item)]]</paper-item\n                    >\n                  </template>\n                </paper-listbox>\n              </ha-paper-dropdown-menu>\n            </div>\n          </div>\n        </template>\n\n        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">\n          <div class="container-away_mode">\n            <div class="center horizontal layout single-row">\n              <div class="flex">\n                [[localize(\'ui.card.water_heater.away_mode\')]]\n              </div>\n              <paper-toggle-button\n                checked="[[awayToggleChecked]]"\n                on-change="awayToggleChanged"\n              >\n              </paper-toggle-button>\n            </div>\n          </div>\n        </template>\n      </div>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var MoreInfoWaterHeater =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoWaterHeater, _LocalizeMixin);

            function MoreInfoWaterHeater() {
              _classCallCheck(this, MoreInfoWaterHeater);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoWaterHeater).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoWaterHeater,
              [
                {
                  key: "stateObjChanged",
                  value: function stateObjChanged(newVal, oldVal) {
                    var _this = this;

                    if (newVal) {
                      this.setProperties({
                        awayToggleChecked: newVal.attributes.away_mode === "on",
                      });
                    }

                    if (oldVal) {
                      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__[
                        "Debouncer"
                      ].debounce(
                        this._debouncer,
                        _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__[
                          "timeOut"
                        ].after(500),
                        function() {
                          _this.fire("iron-resize");
                        }
                      );
                    }
                  },
                },
                {
                  key: "computeTemperatureStepSize",
                  value: function computeTemperatureStepSize(hass, stateObj) {
                    if (stateObj.attributes.target_temp_step) {
                      return stateObj.attributes.target_temp_step;
                    }

                    if (
                      hass.config.unit_system.temperature.indexOf("F") !== -1
                    ) {
                      return 1;
                    }

                    return 0.5;
                  },
                },
                {
                  key: "supportsTemperatureControls",
                  value: function supportsTemperatureControls(stateObj) {
                    return this.supportsTemperature(stateObj);
                  },
                },
                {
                  key: "supportsTemperature",
                  value: function supportsTemperature(stateObj) {
                    return (
                      Object(
                        _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                          "supportsFeature"
                        ]
                      )(stateObj, 1) &&
                      typeof stateObj.attributes.temperature === "number"
                    );
                  },
                },
                {
                  key: "supportsOperationMode",
                  value: function supportsOperationMode(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                        "supportsFeature"
                      ]
                    )(stateObj, 2);
                  },
                },
                {
                  key: "supportsAwayMode",
                  value: function supportsAwayMode(stateObj) {
                    return Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                        "supportsFeature"
                      ]
                    )(stateObj, 4);
                  },
                },
                {
                  key: "computeClassNames",
                  value: function computeClassNames(stateObj) {
                    var _featureClassNames = {
                      1: "has-target_temperature",
                      2: "has-operation_mode",
                      4: "has-away_mode",
                    };
                    var classes = [
                      Object(
                        _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__[
                          "default"
                        ]
                      )(stateObj, _featureClassNames),
                    ];
                    classes.push("more-info-water_heater");
                    return classes.join(" ");
                  },
                },
                {
                  key: "targetTemperatureChanged",
                  value: function targetTemperatureChanged(ev) {
                    var temperature = ev.target.value;
                    if (temperature === this.stateObj.attributes.temperature)
                      return;
                    this.callServiceHelper("set_temperature", {
                      temperature: temperature,
                    });
                  },
                },
                {
                  key: "awayToggleChanged",
                  value: function awayToggleChanged(ev) {
                    var oldVal = this.stateObj.attributes.away_mode === "on";
                    var newVal = ev.target.checked;
                    if (oldVal === newVal) return;
                    this.callServiceHelper("set_away_mode", {
                      away_mode: newVal,
                    });
                  },
                },
                {
                  key: "handleOperationmodeChanged",
                  value: function handleOperationmodeChanged(ev) {
                    var oldVal = this.stateObj.attributes.operation_mode;
                    var newVal = ev.detail.value;
                    if (!newVal || oldVal === newVal) return;
                    this.callServiceHelper("set_operation_mode", {
                      operation_mode: newVal,
                    });
                  },
                },
                {
                  key: "callServiceHelper",
                  value: function callServiceHelper(service, data) {
                    var _this2 = this;

                    // We call stateChanged after a successful call to re-sync the inputs
                    // with the state. It will be out of sync if our service call did not
                    // result in the entity to be turned on. Since the state is not changing,
                    // the resync is not called automatic.

                    /* eslint-disable no-param-reassign */
                    data.entity_id = this.stateObj.entity_id;
                    /* eslint-enable no-param-reassign */

                    this.hass
                      .callService("water_heater", service, data)
                      .then(function() {
                        _this2.stateObjChanged(_this2.stateObj);
                      });
                  },
                },
                {
                  key: "_localizeOperationMode",
                  value: function _localizeOperationMode(localize, mode) {
                    return localize("state.water_heater.".concat(mode)) || mode;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
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
                      stateObj: {
                        type: Object,
                        observer: "stateObjChanged",
                      },
                      awayToggleChecked: Boolean,
                    };
                  },
                },
              ]
            );

            return MoreInfoWaterHeater;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__[
                  "EventsMixin"
                ]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("more-info-water_heater", MoreInfoWaterHeater);

        /***/
      },

    /***/ "./src/dialogs/more-info/controls/more-info-weather.js":
      /*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.js ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        iron-icon {\n          color: var(--paper-item-icon-color);\n        }\n        .section {\n          margin: 16px 0 8px 0;\n          font-size: 1.2em;\n        }\n\n        .flex {\n          display: flex;\n          height: 32px;\n          align-items: center;\n        }\n\n        .main {\n          flex: 1;\n          margin-left: 24px;\n        }\n\n        .temp,\n        .templow {\n          min-width: 48px;\n          text-align: right;\n        }\n\n        .templow {\n          margin: 0 16px;\n          color: var(--secondary-text-color);\n        }\n\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: center;\n        }\n      </style>\n\n      <div class="flex">\n        <iron-icon icon="hass:thermometer"></iron-icon>\n        <div class="main">\n          [[localize(\'ui.card.weather.attributes.temperature\')]]\n        </div>\n        <div>\n          [[stateObj.attributes.temperature]] [[getUnit(\'temperature\')]]\n        </div>\n      </div>\n      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">\n        <div class="flex">\n          <iron-icon icon="hass:gauge"></iron-icon>\n          <div class="main">\n            [[localize(\'ui.card.weather.attributes.air_pressure\')]]\n          </div>\n          <div>\n            [[stateObj.attributes.pressure]] [[getUnit(\'air_pressure\')]]\n          </div>\n        </div>\n      </template>\n      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">\n        <div class="flex">\n          <iron-icon icon="hass:water-percent"></iron-icon>\n          <div class="main">\n            [[localize(\'ui.card.weather.attributes.humidity\')]]\n          </div>\n          <div>[[stateObj.attributes.humidity]] %</div>\n        </div>\n      </template>\n      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">\n        <div class="flex">\n          <iron-icon icon="hass:weather-windy"></iron-icon>\n          <div class="main">\n            [[localize(\'ui.card.weather.attributes.wind_speed\')]]\n          </div>\n          <div>\n            [[getWind(stateObj.attributes.wind_speed,\n            stateObj.attributes.wind_bearing, localize)]]\n          </div>\n        </div>\n      </template>\n      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">\n        <div class="flex">\n          <iron-icon icon="hass:eye"></iron-icon>\n          <div class="main">\n            [[localize(\'ui.card.weather.attributes.visibility\')]]\n          </div>\n          <div>[[stateObj.attributes.visibility]] [[getUnit(\'length\')]]</div>\n        </div>\n      </template>\n\n      <template is="dom-if" if="[[stateObj.attributes.forecast]]">\n        <div class="section">[[localize(\'ui.card.weather.forecast\')]]:</div>\n        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">\n          <div class="flex">\n            <template is="dom-if" if="[[_showValue(item.condition)]]">\n              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>\n            </template>\n            <template is="dom-if" if="[[!_showValue(item.templow)]]">\n              <div class="main">[[computeDateTime(item.datetime)]]</div>\n            </template>\n            <template is="dom-if" if="[[_showValue(item.templow)]]">\n              <div class="main">[[computeDate(item.datetime)]]</div>\n              <div class="templow">\n                [[item.templow]] [[getUnit(\'temperature\')]]\n              </div>\n            </template>\n            <div class="temp">\n              [[item.temperature]] [[getUnit(\'temperature\')]]\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <template is="dom-if" if="stateObj.attributes.attribution">\n        <div class="attribution">[[stateObj.attributes.attribution]]</div>\n      </template>\n    ',
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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        /*
         * @appliesMixin LocalizeMixin
         */

        var MoreInfoWeather =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoWeather, _LocalizeMixin);

            _createClass(MoreInfoWeather, null, [
              {
                key: "template",
                get: function get() {
                  return Object(
                    _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
                      "html"
                    ]
                  )(_templateObject());
                },
              },
              {
                key: "properties",
                get: function get() {
                  return {
                    hass: Object,
                    stateObj: Object,
                  };
                },
              },
            ]);

            function MoreInfoWeather() {
              var _this;

              _classCallCheck(this, MoreInfoWeather);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoWeather).call(this)
              );
              _this.cardinalDirections = [
                "N",
                "NNE",
                "NE",
                "ENE",
                "E",
                "ESE",
                "SE",
                "SSE",
                "S",
                "SSW",
                "SW",
                "WSW",
                "W",
                "WNW",
                "NW",
                "NNW",
                "N",
              ];
              _this.weatherIcons = {
                "clear-night": "hass:weather-night",
                cloudy: "hass:weather-cloudy",
                fog: "hass:weather-fog",
                hail: "hass:weather-hail",
                lightning: "hass:weather-lightning",
                "lightning-rainy": "hass:weather-lightning-rainy",
                partlycloudy: "hass:weather-partlycloudy",
                pouring: "hass:weather-pouring",
                rainy: "hass:weather-rainy",
                snowy: "hass:weather-snowy",
                "snowy-rainy": "hass:weather-snowy-rainy",
                sunny: "hass:weather-sunny",
                windy: "hass:weather-windy",
                "windy-variant": "hass:weather-windy-variant",
              };
              return _this;
            }

            _createClass(MoreInfoWeather, [
              {
                key: "computeDate",
                value: function computeDate(data) {
                  var date = new Date(data);
                  return date.toLocaleDateString(this.hass.language, {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  });
                },
              },
              {
                key: "computeDateTime",
                value: function computeDateTime(data) {
                  var date = new Date(data);
                  return date.toLocaleDateString(this.hass.language, {
                    weekday: "long",
                    hour: "numeric",
                  });
                },
              },
              {
                key: "getUnit",
                value: function getUnit(measure) {
                  var lengthUnit = this.hass.config.unit_system.length || "";

                  switch (measure) {
                    case "air_pressure":
                      return lengthUnit === "km" ? "hPa" : "inHg";

                    case "length":
                      return lengthUnit;

                    case "precipitation":
                      return lengthUnit === "km" ? "mm" : "in";

                    default:
                      return this.hass.config.unit_system[measure] || "";
                  }
                },
              },
              {
                key: "windBearingToText",
                value: function windBearingToText(degree) {
                  var degreenum = parseInt(degree);

                  if (isFinite(degreenum)) {
                    return this.cardinalDirections[
                      (((degreenum + 11.25) / 22.5) | 0) % 16
                    ];
                  }

                  return degree;
                },
              },
              {
                key: "getWind",
                value: function getWind(speed, bearing, localize) {
                  if (bearing != null) {
                    var cardinalDirection = this.windBearingToText(bearing);
                    return ""
                      .concat(speed, " ")
                      .concat(this.getUnit("length"), "/h (")
                      .concat(
                        localize(
                          "ui.card.weather.cardinal_direction.".concat(
                            cardinalDirection.toLowerCase()
                          )
                        ) || cardinalDirection,
                        ")"
                      );
                  }

                  return ""
                    .concat(speed, " ")
                    .concat(this.getUnit("length"), "/h");
                },
              },
              {
                key: "getWeatherIcon",
                value: function getWeatherIcon(condition) {
                  return this.weatherIcons[condition];
                },
              },
              {
                key: "_showValue",
                value: function _showValue(item) {
                  return typeof item !== "undefined" && item !== null;
                },
              },
            ]);

            return MoreInfoWeather;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-weather", MoreInfoWeather);

        /***/
      },

    /***/ "./src/dialogs/more-info/more-info-controls.js":
      /*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/state-history-charts */ "./src/components/state-history-charts.js"
        );
        /* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js"
        );
        /* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../common/const */ "./src/common/const.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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
            '\n      <style include="ha-style-dialog">\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        state-card-content {\n          display: block;\n          padding: 16px;\n        }\n\n        state-history-charts {\n          max-width: 100%;\n          margin-bottom: 16px;\n        }\n\n        @media all and (min-width: 451px) and (min-height: 501px) {\n          .main-title {\n            pointer-events: auto;\n            cursor: default;\n          }\n        }\n\n        paper-dialog-scrollable {\n          padding-bottom: 16px;\n        }\n\n        :host([domain="camera"]) paper-dialog-scrollable {\n          margin: 0 -24px -21px;\n        }\n\n        :host([rtl]) app-toolbar {\n          direction: rtl;\n          text-align: right;\n        }\n      </style>\n\n      <app-toolbar>\n        <paper-icon-button\n          icon="hass:close"\n          dialog-dismiss=""\n        ></paper-icon-button>\n        <div class="main-title" main-title="" on-click="enlarge">\n          [[_computeStateName(stateObj)]]\n        </div>\n        <template is="dom-if" if="[[canConfigure]]">\n          <paper-icon-button\n            icon="hass:settings"\n            on-click="_gotoSettings"\n          ></paper-icon-button>\n        </template>\n      </app-toolbar>\n\n      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">\n        <state-card-content\n          state-obj="[[stateObj]]"\n          hass="[[hass]]"\n          in-dialog=""\n        ></state-card-content>\n      </template>\n      <paper-dialog-scrollable dialog-element="[[dialogElement]]">\n        <template\n          is="dom-if"\n          if="[[_computeShowHistoryComponent(hass, stateObj)]]"\n          restamp=""\n        >\n          <ha-state-history-data\n            hass="[[hass]]"\n            filter-type="recent-entity"\n            entity-id="[[stateObj.entity_id]]"\n            data="{{_stateHistory}}"\n            is-loading="{{_stateHistoryLoading}}"\n            cache-config="[[_cacheConfig]]"\n          ></ha-state-history-data>\n          <state-history-charts\n            hass="[[hass]]"\n            history-data="[[_stateHistory]]"\n            is-loading-data="[[_stateHistoryLoading]]"\n            up-to-now\n          ></state-history-charts>\n        </template>\n        <more-info-content\n          state-obj="[[stateObj]]"\n          hass="[[hass]]"\n        ></more-info-content>\n      </paper-dialog-scrollable>\n    ',
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

        var DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
        /*
         * @appliesMixin EventsMixin
         */

        var MoreInfoControls =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(MoreInfoControls, _EventsMixin);

            function MoreInfoControls() {
              _classCallCheck(this, MoreInfoControls);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoControls).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoControls,
              [
                {
                  key: "enlarge",
                  value: function enlarge() {
                    this.large = !this.large;
                  },
                },
                {
                  key: "_computeShowStateInfo",
                  value: function _computeShowStateInfo(stateObj) {
                    return (
                      !stateObj ||
                      !DOMAINS_NO_INFO.includes(
                        Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__[
                            "default"
                          ]
                        )(stateObj)
                      )
                    );
                  },
                },
                {
                  key: "_computeShowHistoryComponent",
                  value: function _computeShowHistoryComponent(hass, stateObj) {
                    return (
                      hass &&
                      stateObj &&
                      Object(
                        _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__[
                          "default"
                        ]
                      )(hass, "history") &&
                      !_common_const__WEBPACK_IMPORTED_MODULE_13__[
                        "DOMAINS_MORE_INFO_NO_HISTORY"
                      ].includes(
                        Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__[
                            "default"
                          ]
                        )(stateObj)
                      )
                    );
                  },
                },
                {
                  key: "_computeDomain",
                  value: function _computeDomain(stateObj) {
                    return stateObj
                      ? Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__[
                            "default"
                          ]
                        )(stateObj)
                      : "";
                  },
                },
                {
                  key: "_computeStateName",
                  value: function _computeStateName(stateObj) {
                    return stateObj
                      ? Object(
                          _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__[
                            "default"
                          ]
                        )(stateObj)
                      : "";
                  },
                },
                {
                  key: "_stateObjChanged",
                  value: function _stateObjChanged(newVal) {
                    if (!newVal) {
                      return;
                    }

                    if (
                      this._cacheConfig.cacheKey !==
                      "more_info.".concat(newVal.entity_id)
                    ) {
                      this._cacheConfig = Object.assign({}, this._cacheConfig, {
                        cacheKey: "more_info.".concat(newVal.entity_id),
                      });
                    }
                  },
                },
                {
                  key: "_gotoSettings",
                  value: function _gotoSettings() {
                    this.fire("more-info-page", {
                      page: "settings",
                    });
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
                        "computeRTL"
                      ]
                    )(hass);
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: {
                        type: Object,
                        observer: "_stateObjChanged",
                      },
                      dialogElement: Object,
                      canConfigure: Boolean,
                      domain: {
                        type: String,
                        reflectToAttribute: true,
                        computed: "_computeDomain(stateObj)",
                      },
                      _stateHistory: Object,
                      _stateHistoryLoading: Boolean,
                      large: {
                        type: Boolean,
                        value: false,
                        notify: true,
                      },
                      _cacheConfig: {
                        type: Object,
                        value: {
                          refresh: 60,
                          cacheKey: null,
                          hoursToShow: 24,
                        },
                      },
                      rtl: {
                        type: Boolean,
                        reflectToAttribute: true,
                        computed: "_computeRTL(hass)",
                      },
                    };
                  },
                },
              ]
            );

            return MoreInfoControls;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("more-info-controls", MoreInfoControls);

        /***/
      },

    /***/ "./src/dialogs/more-info/more-info-settings.js":
      /*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-settings.js ***!
  \*****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../data/entity_registry */ "./src/data/entity_registry.ts"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
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
            '\n      <style>\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n\n          /* to fit save button */\n          padding-right: 0;\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        app-toolbar mwc-button {\n          font-size: 0.8em;\n          margin: 0;\n        }\n\n        .form {\n          padding: 0 24px 24px;\n        }\n      </style>\n\n      <app-toolbar>\n        <ha-paper-icon-button-arrow-prev\n          on-click="_backTapped"\n        ></ha-paper-icon-button-arrow-prev>\n        <div main-title="">[[_computeStateName(stateObj)]]</div>\n        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"\n          >[[localize(\'ui.dialogs.more_info_settings.save\')]]</mwc-button\n        >\n      </app-toolbar>\n\n      <div class="form">\n        <paper-input\n          value="{{_name}}"\n          label="[[localize(\'ui.dialogs.more_info_settings.name\')]]"\n        ></paper-input>\n        <paper-input\n          value="{{_entityId}}"\n          label="[[localize(\'ui.dialogs.more_info_settings.entity_id\')]]"\n          error-message="Domain needs to stay the same"\n          invalid="[[_computeInvalid(_entityId)]]"\n        ></paper-input>\n      </div>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var MoreInfoSettings =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(MoreInfoSettings, _LocalizeMixin);

            function MoreInfoSettings() {
              _classCallCheck(this, MoreInfoSettings);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MoreInfoSettings).apply(this, arguments)
              );
            }

            _createClass(
              MoreInfoSettings,
              [
                {
                  key: "_computeStateName",
                  value: function _computeStateName(stateObj) {
                    if (!stateObj) return "";
                    return Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                        "default"
                      ]
                    )(stateObj);
                  },
                },
                {
                  key: "_computeInvalid",
                  value: function _computeInvalid(entityId) {
                    return (
                      Object(
                        _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__[
                          "default"
                        ]
                      )(this.stateObj.entity_id) !==
                      Object(
                        _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__[
                          "default"
                        ]
                      )(entityId)
                    );
                  },
                },
                {
                  key: "_registryInfoChanged",
                  value: function _registryInfoChanged(newVal) {
                    if (newVal) {
                      this.setProperties({
                        _name: newVal.name,
                        _entityId: newVal.entity_id,
                      });
                    } else {
                      this.setProperties({
                        _name: "",
                        _entityId: "",
                      });
                    }
                  },
                },
                {
                  key: "_backTapped",
                  value: function _backTapped() {
                    this.fire("more-info-page", {
                      page: null,
                    });
                  },
                },
                {
                  key: "_save",
                  value: (function() {
                    var _save2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var info;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.prev = 0;
                                  _context.next = 3;
                                  return Object(
                                    _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__[
                                      "updateEntityRegistryEntry"
                                    ]
                                  )(this.hass, this.stateObj.entity_id, {
                                    name: this._name,
                                    new_entity_id: this._entityId,
                                  });

                                case 3:
                                  info = _context.sent;
                                  this.registryInfo = info; // Keep the more info dialog open at the new entity.

                                  if (
                                    this.stateObj.entity_id !== this._entityId
                                  ) {
                                    this.fire("hass-more-info", {
                                      entityId: this._entityId,
                                    });
                                  }

                                  _context.next = 11;
                                  break;

                                case 8:
                                  _context.prev = 8;
                                  _context.t0 = _context["catch"](0);
                                  alert(
                                    "save failed: ".concat(_context.t0.message)
                                  );

                                case 11:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[0, 8]]
                        );
                      })
                    );

                    function _save() {
                      return _save2.apply(this, arguments);
                    }

                    return _save;
                  })(),
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: Object,
                      stateObj: Object,
                      registryInfo: {
                        type: Object,
                        observer: "_registryInfoChanged",
                        notify: true,
                      },
                      _name: String,
                      _entityId: String,
                    };
                  },
                },
              ]
            );

            return MoreInfoSettings;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("more-info-settings", MoreInfoSettings);

        /***/
      },

    /***/ "./src/mixins/dialog-mixin.js":
      /*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js"
        );
        /* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./events-mixin */ "./src/mixins/events-mixin.js"
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

        /**
         * @polymerMixin
         * @appliesMixin EventsMixin
         * @appliesMixin PaperDialogBehavior
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_mixinBehaviors) {
              _inherits(_class, _mixinBehaviors);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(_class, null, [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      withBackdrop: {
                        type: Boolean,
                        value: true,
                      },
                    };
                  },
                },
              ]);

              return _class;
            })(
              Object(
                _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__[
                  "mixinBehaviors"
                ]
              )(
                [
                  _events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"],
                  _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__[
                    "PaperDialogBehavior"
                  ],
                ],
                superClass
              )
            )
          );
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhbWVyYS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNvbG9yLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWxhYmVsZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXdhdGVyX2hlYXRlci1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvaGEtbW9yZS1pbmZvLWRpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1hdXRvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY2xpbWF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1mYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWhpc3RvcnlfZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1pbnB1dF9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWxpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLW1lZGlhX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLXN1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLXVwZGF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby12YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby13YXRlcl9oZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby13ZWF0aGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9tb3JlLWluZm8tY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL21vcmUtaW5mby1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2RpYWxvZy1taXhpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcImxvdmVsYWNlXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJncm91cFwiLFxuICBcImF1dG9tYXRpb25cIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoXCIuXCIpKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbi8vIEV4cGVjdHMgY2xhc3NOYW1lcyB0byBiZSBhbiBvYmplY3QgbWFwcGluZyBmZWF0dXJlLWJpdCAtPiBjbGFzc05hbWVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZlYXR1cmVDbGFzc05hbWVzKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgY2xhc3NOYW1lczogeyBbZmVhdHVyZTogbnVtYmVyXTogc3RyaW5nIH1cbikge1xuICBpZiAoIXN0YXRlT2JqIHx8ICFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzTmFtZXMpXG4gICAgLm1hcCgoZmVhdHVyZSkgPT5cbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgTnVtYmVyKGZlYXR1cmUpKSA/IGNsYXNzTmFtZXNbZmVhdHVyZV0gOiBcIlwiXG4gICAgKVxuICAgIC5maWx0ZXIoKGF0dHIpID0+IGF0dHIgIT09IFwiXCIpXG4gICAgLmpvaW4oXCIgXCIpO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBoYXNzQXR0cmlidXRlVXRpbCBmcm9tIFwiLi4vdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbFwiO1xuXG5jbGFzcyBIYUF0dHJpYnV0ZXMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmRhdGEtZW50cnkgLnZhbHVlIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlRGlzcGxheUF0dHJpYnV0ZXMoc3RhdGVPYmosIGZpbHRlcnNBcnJheSldXVwiXG4gICAgICAgICAgYXM9XCJhdHRyaWJ1dGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+W1tmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgW1tmb3JtYXRBdHRyaWJ1dGVWYWx1ZShzdGF0ZU9iaiwgYXR0cmlidXRlKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCIgaGlkZGVuJD1cIltbIWNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIFtbY29tcHV0ZUF0dHJpYnV0aW9uKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGV4dHJhRmlsdGVyczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGZpbHRlcnNBcnJheToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKS5jb25jYXQoXG4gICAgICBleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoXCIsXCIpIDogW11cbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZURpc3BsYXlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBmaWx0ZXJzQXJyYXkpIHtcbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZU9iai5hdHRyaWJ1dGVzKS5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZmlsdGVyc0FycmF5LmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZS5yZXBsYWNlKC9fL2csIFwiIFwiKTtcbiAgfVxuXG4gIGZvcm1hdEF0dHJpYnV0ZVZhbHVlKHN0YXRlT2JqLCBhdHRyaWJ1dGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gXCItXCI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUuam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikgOiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF0dHJpYnV0ZXNcIiwgSGFBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCB7XG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIENBTUVSQV9TVVBQT1JUX1NUUkVBTSxcbiAgZmV0Y2hTdHJlYW1VcmwsXG4gIGNvbXB1dGVNSlBFR1N0cmVhbVVybCxcbn0gZnJvbSBcIi4uL2RhdGEvY2FtZXJhXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbnR5cGUgSExTTW9kdWxlID0gdHlwZW9mIGltcG9ydChcImhscy5qc1wiKTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jYW1lcmEtc3RyZWFtXCIpXG5jbGFzcyBIYUNhbWVyYVN0cmVhbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENhbWVyYUVudGl0eTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG4gIC8vIFdlIGtlZXAgdHJhY2sgaWYgd2Ugc2hvdWxkIGZvcmNlIE1KUEVHIHdpdGggYSBzdHJpbmdcbiAgLy8gdGhhdCB3YXkgaXQgYXV0b21hdGljYWxseSByZXNldHMgaWYgd2UgY2hhbmdlIGVudGl0eS5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZm9yY2VNSlBFRzogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9obHNQb2x5ZmlsbEluc3RhbmNlPzogSGxzO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN0YXRlT2JqIHx8ICF0aGlzLl9hdHRhY2hlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7X19ERU1PX18gfHwgdGhpcy5fc2hvdWxkUmVuZGVyTUpQRUdcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBAbG9hZD0ke3RoaXMuX2VsZW1lbnRSZXNpemVkfVxuICAgICAgICAgICAgICAuc3JjPSR7X19ERU1PX19cbiAgICAgICAgICAgICAgICA/IGAvYXBpL2NhbWVyYV9wcm94eV9zdHJlYW0vJHt0aGlzLnN0YXRlT2JqLmVudGl0eV9pZH1gXG4gICAgICAgICAgICAgICAgOiBjb21wdXRlTUpQRUdTdHJlYW1VcmwodGhpcy5zdGF0ZU9iail9XG4gICAgICAgICAgICAgIC5hbHQ9JHtgUHJldmlldyBvZiB0aGUgJHtjb21wdXRlU3RhdGVOYW1lKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVPYmpcbiAgICAgICAgICAgICAgKX0gY2FtZXJhLmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgIGF1dG9wbGF5XG4gICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgIHBsYXlzaW5saW5lXG4gICAgICAgICAgICAgID9jb250cm9scz0ke3RoaXMuc2hvd0NvbnRyb2xzfVxuICAgICAgICAgICAgICBAbG9hZGVkZGF0YT0ke3RoaXMuX2VsZW1lbnRSZXNpemVkfVxuICAgICAgICAgICAgPjwvdmlkZW8+XG4gICAgICAgICAgYH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGNvbnN0IHN0YXRlT2JqQ2hhbmdlZCA9IGNoYW5nZWRQcm9wcy5oYXMoXCJzdGF0ZU9ialwiKTtcbiAgICBjb25zdCBhdHRhY2hlZENoYW5nZWQgPSBjaGFuZ2VkUHJvcHMuaGFzKFwiX2F0dGFjaGVkXCIpO1xuXG4gICAgY29uc3Qgb2xkU3RhdGUgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwic3RhdGVPYmpcIikgYXMgdGhpc1tcInN0YXRlT2JqXCJdO1xuICAgIGNvbnN0IG9sZEVudGl0eUlkID0gb2xkU3RhdGUgPyBvbGRTdGF0ZS5lbnRpdHlfaWQgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY3VyRW50aXR5SWQgPSB0aGlzLnN0YXRlT2JqID8gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICAoIXN0YXRlT2JqQ2hhbmdlZCAmJiAhYXR0YWNoZWRDaGFuZ2VkKSB8fFxuICAgICAgKHN0YXRlT2JqQ2hhbmdlZCAmJiBvbGRFbnRpdHlJZCA9PT0gY3VyRW50aXR5SWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgYXJlIG5vIGxvbmdlciBhdHRhY2hlZCwgZGVzdHJveSBwb2x5ZmlsbC5cbiAgICBpZiAoYXR0YWNoZWRDaGFuZ2VkICYmICF0aGlzLl9hdHRhY2hlZCkge1xuICAgICAgdGhpcy5fZGVzdHJveVBvbHlmaWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB0byBkbyBpZiB3ZSBhcmUgcmVuZGVyIE1KUEVHLlxuICAgIGlmICh0aGlzLl9zaG91bGRSZW5kZXJNSlBFRykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRlYXIgZG93biBleGlzdGluZyBwb2x5ZmlsbCwgaWYgYXZhaWxhYmxlXG4gICAgdGhpcy5fZGVzdHJveVBvbHlmaWxsKCk7XG5cbiAgICBpZiAoY3VyRW50aXR5SWQpIHtcbiAgICAgIHRoaXMuX3N0YXJ0SGxzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Nob3VsZFJlbmRlck1KUEVHKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9mb3JjZU1KUEVHID09PSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQgfHxcbiAgICAgICF0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3RyZWFtXCIpIHx8XG4gICAgICAhc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmohLCBDQU1FUkFfU1VQUE9SVF9TVFJFQU0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92aWRlb0VsKCk6IEhUTUxWaWRlb0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKSE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zdGFydEhscygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCBIbHMgPSAoKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhscy5qc1wiICovIFwiaGxzLmpzXCIpKSBhcyBhbnkpXG4gICAgICAuZGVmYXVsdCBhcyBITFNNb2R1bGU7XG4gICAgbGV0IGhsc1N1cHBvcnRlZCA9IEhscy5pc1N1cHBvcnRlZCgpO1xuICAgIGNvbnN0IHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuXG4gICAgaWYgKCFobHNTdXBwb3J0ZWQpIHtcbiAgICAgIGhsc1N1cHBvcnRlZCA9XG4gICAgICAgIHZpZGVvRWwuY2FuUGxheVR5cGUoXCJhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybFwiKSAhPT0gXCJcIjtcbiAgICB9XG5cbiAgICBpZiAoIWhsc1N1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fZm9yY2VNSlBFRyA9IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IGZldGNoU3RyZWFtVXJsKFxuICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWRcbiAgICAgICk7XG5cbiAgICAgIGlmIChIbHMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJITFNQb2x5ZmlsbCh2aWRlb0VsLCBIbHMsIHVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJITFNOYXRpdmUodmlkZW9FbCwgdXJsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIEZhaWxzIGlmIHdlIHdlcmUgdW5hYmxlIHRvIGdldCBhIHN0cmVhbVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB0aGlzLl9mb3JjZU1KUEVHID0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlckhMU05hdGl2ZSh2aWRlb0VsOiBIVE1MVmlkZW9FbGVtZW50LCB1cmw6IHN0cmluZykge1xuICAgIHZpZGVvRWwuc3JjID0gdXJsO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxuICAgICAgdmlkZW9FbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgcmVzb2x2ZSlcbiAgICApO1xuICAgIHZpZGVvRWwucGxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTUG9seWZpbGwoXG4gICAgdmlkZW9FbDogSFRNTFZpZGVvRWxlbWVudCxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBIbHM6IEhMU01vZHVsZSxcbiAgICB1cmw6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBobHMgPSBuZXcgSGxzKCk7XG4gICAgdGhpcy5faGxzUG9seWZpbGxJbnN0YW5jZSA9IGhscztcbiAgICBobHMuYXR0YWNoTWVkaWEodmlkZW9FbCk7XG4gICAgaGxzLm9uKEhscy5FdmVudHMuTUVESUFfQVRUQUNIRUQsICgpID0+IHtcbiAgICAgIGhscy5sb2FkU291cmNlKHVybCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbGVtZW50UmVzaXplZCgpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lQb2x5ZmlsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faGxzUG9seWZpbGxJbnN0YW5jZSkge1xuICAgICAgdGhpcy5faGxzUG9seWZpbGxJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0LFxuICAgICAgaW1nLFxuICAgICAgdmlkZW8ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgaW1nLFxuICAgICAgdmlkZW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jYW1lcmEtc3RyZWFtXCI6IEhhQ2FtZXJhU3RyZWFtO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDbGltYXRlQ29udHJvbCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLyogbG9jYWwgRE9NIHN0eWxlcyBnbyBoZXJlICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICAgIC5pbi1mbHV4I3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2VsZi1jZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJ1dHRvbnMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tIGxvY2FsIERPTSBnb2VzIGhlcmUgLS0+XG4gICAgICA8ZGl2IGlkPVwidGFyZ2V0X3RlbXBlcmF0dXJlXCI+W1t2YWx1ZV1dIFtbdW5pdHNdXTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi11cFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImluY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJkZWNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJ2YWx1ZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB1bml0czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoaW5GbHV4KSB7XG4gICAgdGhpcy4kLnRhcmdldF90ZW1wZXJhdHVyZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW4tZmx1eFwiLCBpbkZsdXgpO1xuICB9XG5cbiAgX3JvdW5kKHZhbCkge1xuICAgIC8vIHJvdW5kIHZhbHVlIHRvIHByZWNpc2lvbiBkZXJpdmVkIGZyb20gc3RlcFxuICAgIC8vIGluc2lyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3NvdW5kYXIyNC9yb3VuZFNsaWRlci9ibG9iL21hc3Rlci9zcmMvcm91bmRzbGlkZXIuanNcbiAgICBjb25zdCBzID0gdGhpcy5zdGVwLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgIHJldHVybiBzWzFdID8gcGFyc2VGbG9hdCh2YWwudG9GaXhlZChzWzFdLmxlbmd0aCkpIDogTWF0aC5yb3VuZCh2YWwpO1xuICB9XG5cbiAgaW5jcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy5fcm91bmQodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1heCkge1xuICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KHRydWUpO1xuICAgIH1cbiAgICBpZiAobmV3dmFsIDw9IHRoaXMubWF4KSB7XG4gICAgICAvLyBJZiBubyBpbml0aWFsIHRhcmdldF90ZW1wXG4gICAgICAvLyB0aGlzIGZvcmNlcyBjb250cm9sIHRvIHN0YXJ0XG4gICAgICAvLyBmcm9tIHRoZSBtaW4gY29uZmlndXJlZCBpbnN0ZWFkIG9mIDBcbiAgICAgIGlmIChuZXd2YWwgPD0gdGhpcy5taW4pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld3ZhbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWF4O1xuICAgIH1cbiAgfVxuXG4gIGRlY3JlbWVudFZhbHVlKCkge1xuICAgIGNvbnN0IG5ld3ZhbCA9IHRoaXMuX3JvdW5kKHRoaXMudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIGlmICh0aGlzLnZhbHVlID4gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5ld3ZhbCA+PSB0aGlzLm1pbikge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld3ZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAvLyB3aGVuIHRoZSBsYXN0X2NoYW5nZWQgdGltZXN0YW1wIGlzIGNoYW5nZWQsXG4gICAgLy8gdHJpZ2dlciBhIHBvdGVudGlhbCBldmVudCBmaXJlIGluXG4gICAgLy8gdGhlIGZ1dHVyZSwgYXMgbG9uZyBhcyBsYXN0IGNoYW5nZWQgaXMgZmFyIGVub3VnaCBpbiB0aGVcbiAgICAvLyBwYXN0LlxuICAgIGlmICh0aGlzLmxhc3RfY2hhbmdlZCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0X2NoYW5nZWQgPj0gMjAwMCkge1xuICAgICAgICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoZmFsc2UpO1xuICAgICAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSwgMjAxMCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNsaW1hdGUtY29udHJvbFwiLCBIYUNsaW1hdGVDb250cm9sKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLyoqXG4gKiBDb2xvci1waWNrZXIgY3VzdG9tIGVsZW1lbnRcbiAqXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ29sb3JQaWNrZXIgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjYW52YXMge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICAgICAgICB9XG4gICAgICAgICNjYW52YXMgPiAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAjaW50ZXJhY3Rpb25MYXllciB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgI2JhY2tncm91bmRMYXllciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgLS13aGVlbC1ib3JkZXJjb2xvcjogdmFyKC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcmNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgLS13aGVlbC1ib3JkZXJ3aWR0aDogdmFyKC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcndpZHRoLCAzKTtcbiAgICAgICAgICAtLXdoZWVsLXNoYWRvdzogdmFyKFxuICAgICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtc2hhZG93LFxuICAgICAgICAgICAgcmdiKDE1LCAxNSwgMTUpIDEwcHggNXB4IDVweCAwcHhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgI21hcmtlciB7XG4gICAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgICAgIHN0cm9rZTogdmFyKC0taGEtY29sb3ItcGlja2VyLW1hcmtlci1ib3JkZXJjb2xvciwgd2hpdGUpO1xuICAgICAgICAgIHN0cm9rZS13aWR0aDogdmFyKC0taGEtY29sb3ItcGlja2VyLW1hcmtlci1ib3JkZXJ3aWR0aCwgMyk7XG4gICAgICAgICAgZmlsdGVyOiB1cmwoI21hcmtlci1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgICAgIC5kcmFnZ2luZyAjbWFya2VyIHtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb2xvclRvb2x0aXAge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgICAgIHN0cm9rZTogdmFyKC0taGEtY29sb3ItcGlja2VyLXRvb2x0aXAtYm9yZGVyY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLWhhLWNvbG9yLXBpY2tlci10b29sdGlwLWJvcmRlcndpZHRoLCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3VjaC5kcmFnZ2luZyAjY29sb3JUb29sdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cImNhbnZhc1wiPlxuICAgICAgICA8c3ZnIGlkPVwiaW50ZXJhY3Rpb25MYXllclwiPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPGZpbHRlclxuICAgICAgICAgICAgICBpZD1cIm1hcmtlci1zaGFkb3dcIlxuICAgICAgICAgICAgICB4PVwiLTUwJVwiXG4gICAgICAgICAgICAgIHk9XCItNTAlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwJVwiXG4gICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZmVPZmZzZXRcbiAgICAgICAgICAgICAgICByZXN1bHQ9XCJvZmZPdXRcIlxuICAgICAgICAgICAgICAgIGluPVwiU291cmNlQWxwaGFcIlxuICAgICAgICAgICAgICAgIGR4PVwiMlwiXG4gICAgICAgICAgICAgICAgZHk9XCIyXCJcbiAgICAgICAgICAgICAgPjwvZmVPZmZzZXQ+XG4gICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1clxuICAgICAgICAgICAgICAgIHJlc3VsdD1cImJsdXJPdXRcIlxuICAgICAgICAgICAgICAgIGluPVwib2ZmT3V0XCJcbiAgICAgICAgICAgICAgICBzdGREZXZpYXRpb249XCIyXCJcbiAgICAgICAgICAgICAgPjwvZmVHYXVzc2lhbkJsdXI+XG4gICAgICAgICAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyIGluPVwiYmx1ck91dFwiIHJlc3VsdD1cImFscGhhT3V0XCI+XG4gICAgICAgICAgICAgICAgPGZlRnVuY0EgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwiMC4zXCI+PC9mZUZ1bmNBPlxuICAgICAgICAgICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+XG4gICAgICAgICAgICAgIDxmZUJsZW5kXG4gICAgICAgICAgICAgICAgaW49XCJTb3VyY2VHcmFwaGljXCJcbiAgICAgICAgICAgICAgICBpbjI9XCJhbHBoYU91dFwiXG4gICAgICAgICAgICAgICAgbW9kZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgID48L2ZlQmxlbmQ+XG4gICAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8Y2FudmFzIGlkPVwiYmFja2dyb3VuZExheWVyXCI+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoc0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHVzZSB0aGVzZSBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB0aGUgc3RhdGUgdmlhIGF0dHJpYnV0ZXNcbiAgICAgIGRlc2lyZWRIc0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiYXBwbHlIc0NvbG9yXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyB3aWR0aCwgaGVpZ2h0IGFuZCByYWRpdXMgYXBwbHkgdG8gdGhlIGNvb3JkaW5hdGVzIG9mXG4gICAgICAvLyBvZiB0aGUgY2FudmFzLlxuICAgICAgLy8gYm9yZGVyIHdpZHRoIGFyZSByZWxhdGl2ZSB0byB0aGVzZSBudW1iZXJzXG4gICAgICAvLyB0aGUgb25zY3JlZW4gZGlzcGxheWVkIHNpemUgc2hvdWxkIGJlIGNvbnRyb2xsZWQgd2l0aCBjc3NcbiAgICAgIC8vIGFuZCBzaG91bGQgYmUgdGhlIHNhbWUgb3Igc21hbGxlclxuICAgICAgd2lkdGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgfSxcblxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgIH0sXG5cbiAgICAgIHJhZGl1czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyMjUsXG4gICAgICB9LFxuXG4gICAgICAvLyB0aGUgYW1vdW50IHNlZ21lbnRzIGZvciB0aGUgaHVlXG4gICAgICAvLyAwID0gY29udGludW91cyBncmFkaWVudFxuICAgICAgLy8gb3RoZXIgdGhhbiAwIGdpdmVzICdwaWUtcGllY2VzJ1xuICAgICAgaHVlU2VnbWVudHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VnbWVudGF0aW9uQ2hhbmdlXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyB0aGUgYW1vdW50IHNlZ21lbnRzIGZvciB0aGUgaHVlXG4gICAgICAvLyAwID0gY29udGludW91cyBncmFkaWVudFxuICAgICAgLy8gMSA9IG9ubHkgZnVsbHkgc2F0dXJhdGVkXG4gICAgICAvLyA+IDEgPSBzZWdtZW50cyBmcm9tIHdoaXRlIHRvIGZ1bGx5IHNhdHVyYXRlZFxuICAgICAgc2F0dXJhdGlvblNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcInNlZ21lbnRhdGlvbkNoYW5nZVwiLFxuICAgICAgfSxcblxuICAgICAgLy8gc2V0IHRvIHRydWUgdG8gbWFrZSB0aGUgc2VnbWVudHMgcHVyZWx5IGVzdGhldGljYWxcbiAgICAgIC8vIHRoaXMgYWxsb3dzIHNlbGVjdGlvbiBvZmYgYWxsIGNvbGxvcnMsIGFsc29cbiAgICAgIC8vIGludGVycG9sYXRlZCBiZXR3ZWVuIHRoZSBzZWdtZW50c1xuICAgICAgaWdub3JlU2VnbWVudHM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gdGhyb3R0bGUgdGUgYW1vdW50IG9mICdjb2xvcnNlbGVjdGVkJyBldmVudHMgZmlyZWRcbiAgICAgIC8vIHZhbHVlIGlzIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzXG4gICAgICB0aHJvdHRsZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuc2V0dXBMYXllcnMoKTtcbiAgICB0aGlzLmRyYXdDb2xvcldoZWVsKCk7XG4gICAgdGhpcy5kcmF3TWFya2VyKCk7XG5cbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2KVxuICAgICk7XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldikgPT5cbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2KVxuICAgICk7XG4gIH1cblxuICAvLyBjb252ZXJ0cyBicm93c2VyIGNvb3JkaW5hdGVzIHRvIGNhbnZhcyBjYW52YXMgY29vcmRpbmF0ZXNcbiAgLy8gb3JpZ2luIGlzIHdoZWVsIGNlbnRlclxuICAvLyByZXR1cm5zIHt4OiBYLCB5OiBZfSBvYmplY3RcbiAgY29udmVydFRvQ2FudmFzQ29vcmRpbmF0ZXMoY2xpZW50WCwgY2xpZW50WSkge1xuICAgIHZhciBzdmdQb2ludCA9IHRoaXMuaW50ZXJhY3Rpb25MYXllci5jcmVhdGVTVkdQb2ludCgpO1xuICAgIHN2Z1BvaW50LnggPSBjbGllbnRYO1xuICAgIHN2Z1BvaW50LnkgPSBjbGllbnRZO1xuICAgIHZhciBjYyA9IHN2Z1BvaW50Lm1hdHJpeFRyYW5zZm9ybShcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKClcbiAgICApO1xuICAgIHJldHVybiB7IHg6IGNjLngsIHk6IGNjLnkgfTtcbiAgfVxuXG4gIC8vIE1vdXNlIGV2ZW50c1xuXG4gIG9uTW91c2VEb3duKGV2KSB7XG4gICAgY29uc3QgY2MgPSB0aGlzLmNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKGV2LmNsaWVudFgsIGV2LmNsaWVudFkpO1xuICAgIC8vIHJldHVybiBpZiB3ZSdyZSBub3Qgb24gdGhlIHdoZWVsXG4gICAgaWYgKCF0aGlzLmlzSW5XaGVlbChjYy54LCBjYy55KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhIG1vdXNlZG93biBpbiB3aGVlbCBpcyBhbHdheXMgYSBjb2xvciBzZWxlY3QgYWN0aW9uXG4gICAgdGhpcy5vbk1vdXNlU2VsZWN0KGV2KTtcbiAgICAvLyBhbGxvdyBkcmFnZ2luZ1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJtb3VzZVwiLCBcImRyYWdnaW5nXCIpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VTZWxlY3QpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXApO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJtb3VzZVwiLCBcImRyYWdnaW5nXCIpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VTZWxlY3QpO1xuICB9XG5cbiAgb25Nb3VzZVNlbGVjdChldikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnByb2Nlc3NVc2VyU2VsZWN0KGV2KSk7XG4gIH1cblxuICAvLyBUb3VjaCBldmVudHNcblxuICBvblRvdWNoU3RhcnQoZXYpIHtcbiAgICB2YXIgdG91Y2ggPSBldi5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBjb25zdCBjYyA9IHRoaXMuY29udmVydFRvQ2FudmFzQ29vcmRpbmF0ZXModG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gICAgLy8gcmV0dXJuIGlmIHdlJ3JlIG5vdCBvbiB0aGUgd2hlZWxcbiAgICBpZiAoIXRoaXMuaXNJbldoZWVsKGNjLngsIGNjLnkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldi50YXJnZXQgPT09IHRoaXMubWFya2VyKSB7XG4gICAgICAvLyBkcmFnIG1hcmtlclxuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJ0b3VjaFwiLCBcImRyYWdnaW5nXCIpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMub25Ub3VjaFNlbGVjdCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBkb24ndCBmaXJlIGNvbG9yIHNlbGVjdGlvbiBpbW1lZGlhdGVseSxcbiAgICAvLyB3YWl0IGZvciB0b3VjaGVuZCBhbmQgaW52YWxpZGF0ZSB3aGVuIHdlIHNjcm9sbFxuICAgIHRoaXMudGFwQmVjYW1lU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5vblRhcCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0b3VjaG1vdmVcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy50YXBCZWNhbWVTY3JvbGwgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIG9uVGFwKGV2KSB7XG4gICAgaWYgKHRoaXMudGFwQmVjYW1lU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vblRvdWNoU2VsZWN0KGV2KTtcbiAgfVxuXG4gIG9uVG91Y2hFbmQoKSB7XG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcInRvdWNoXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMub25Ub3VjaFNlbGVjdCk7XG4gIH1cblxuICBvblRvdWNoU2VsZWN0KGV2KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucHJvY2Vzc1VzZXJTZWxlY3QoZXYuY2hhbmdlZFRvdWNoZXNbMF0pKTtcbiAgfVxuXG4gIC8qXG4gICAqIEdlbmVyYWwgZXZlbnQvc2VsZWN0aW9uIGhhbmRsaW5nXG4gICAqL1xuXG4gIC8vIFByb2Nlc3MgdXNlciBpbnB1dCB0byBjb2xvclxuICBwcm9jZXNzVXNlclNlbGVjdChldikge1xuICAgIHZhciBjYW52YXNYWSA9IHRoaXMuY29udmVydFRvQ2FudmFzQ29vcmRpbmF0ZXMoZXYuY2xpZW50WCwgZXYuY2xpZW50WSk7XG4gICAgdmFyIGhzID0gdGhpcy5nZXRDb2xvcihjYW52YXNYWS54LCBjYW52YXNYWS55KTtcbiAgICB0aGlzLm9uQ29sb3JTZWxlY3QoaHMpO1xuICB9XG5cbiAgLy8gYXBwbHkgY29sb3IgdG8gbWFya2VyIHBvc2l0aW9uIGFuZCBjYW52YXNcbiAgb25Db2xvclNlbGVjdChocykge1xuICAgIHRoaXMuc2V0TWFya2VyT25Db2xvcihocyk7IC8vIG1hcmtlciBhbHdheXMgZm9sbG93cyBtb3Vuc2UgJ3JhdycgaHMgdmFsdWUgKD0gbW91c2UgcG9zaXRpb24pXG4gICAgaWYgKCF0aGlzLmlnbm9yZVNlZ21lbnRzKSB7XG4gICAgICAvLyBhcHBseSBzZWdtZW50cyBpZiBuZWVkZWRcbiAgICAgIGhzID0gdGhpcy5hcHBseVNlZ21lbnRGaWx0ZXIoaHMpO1xuICAgIH1cbiAgICAvLyBhbHdheXMgYXBwbHkgdGhlIG5ldyBjb2xvciB0byB0aGUgaW50ZXJmYWNlIC8gY2FudmFzXG4gICAgdGhpcy5hcHBseUNvbG9yVG9DYW52YXMoaHMpO1xuICAgIC8vIHRocm90dGxpbmcgaXMgYXBwbGllZCB0byB1cGRhdGluZyB0aGUgZXhwb3NlZCBjb2xvcnMgKHByb3BlcnRpZXMpXG4gICAgLy8gYW5kIGZpcmluZyBvZiBldmVudHNcbiAgICBpZiAodGhpcy5jb2xvclNlbGVjdElzVGhyb3R0bGVkKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYXBwbHkgdGhlIGxhc3Qgc2VsZWN0ZWQgY29sb3JcbiAgICAgIC8vIGV2ZW50dWFsbHkgYWZ0ZXIgdGhyb3R0bGUgbGltaXQgaGFzIHBhc3NlZFxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW5zdXJlRmluYWxTZWxlY3QpO1xuICAgICAgdGhpcy5lbnN1cmVGaW5hbFNlbGVjdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpcmVDb2xvclNlbGVjdGVkKGhzKTsgLy8gZG8gaXQgZm9yIHRoZSBmaW5hbCB0aW1lXG4gICAgICB9LCB0aGlzLnRocm90dGxlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maXJlQ29sb3JTZWxlY3RlZChocyk7IC8vIGRvIGl0XG4gICAgdGhpcy5jb2xvclNlbGVjdElzVGhyb3R0bGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JTZWxlY3RJc1Rocm90dGxlZCA9IGZhbHNlO1xuICAgIH0sIHRoaXMudGhyb3R0bGUpO1xuICB9XG5cbiAgLy8gc2V0IGNvbG9yIHZhbHVlcyBhbmQgZmlyZSBjb2xvcnNlbGVjdGVkIGV2ZW50XG4gIGZpcmVDb2xvclNlbGVjdGVkKGhzKSB7XG4gICAgdGhpcy5oc0NvbG9yID0gaHM7XG4gICAgdGhpcy5maXJlKFwiY29sb3JzZWxlY3RlZFwiLCB7IGhzOiB7IGg6IGhzLmgsIHM6IGhzLnMgfSB9KTtcbiAgfVxuXG4gIC8qXG4gICAqIEludGVyZmFjZSB1cGRhdGluZ1xuICAgKi9cblxuICAvLyBzZXQgbWFya2VyIHBvc2l0aW9uIHRvIHRoZSBnaXZlbiBjb2xvclxuICBzZXRNYXJrZXJPbkNvbG9yKGhzKSB7XG4gICAgdmFyIGRpc3QgPSBocy5zICogdGhpcy5yYWRpdXM7XG4gICAgdmFyIHRoZXRhID0gKChocy5oIC0gMTgwKSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgIHZhciBtYXJrZXJkWCA9IC1kaXN0ICogTWF0aC5jb3ModGhldGEpO1xuICAgIHZhciBtYXJrZXJkWSA9IC1kaXN0ICogTWF0aC5zaW4odGhldGEpO1xuICAgIHZhciB0cmFuc2xhdGVTdHJpbmcgPSBgdHJhbnNsYXRlKCR7bWFya2VyZFh9LCR7bWFya2VyZFl9KWA7XG4gICAgdGhpcy5tYXJrZXIuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZVN0cmluZyk7XG4gICAgdGhpcy50b29sdGlwLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGVTdHJpbmcpO1xuICB9XG5cbiAgLy8gYXBwbHkgZ2l2ZW4gY29sb3IgdG8gaW50ZXJmYWNlIGVsZW1lbnRzXG4gIGFwcGx5Q29sb3JUb0NhbnZhcyhocykge1xuICAgIC8vIHdlJ3JlIG5vdCByZWFsbHkgY29udmVydGluZyBocyB0byBoc2wgaGVyZSwgYnV0IHdlIGtlZXAgaXQgY2hlYXBcbiAgICAvLyBzZXR0aW5nIHRoZSBjb2xvciBvbiB0aGUgaW50ZXJhY3Rpb25MYXllciwgdGhlIHN2ZyBlbGVtZW50cyBjYW4gaW5oZXJpdFxuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5zdHlsZS5jb2xvciA9IGBoc2woJHtocy5ofSwgMTAwJSwgJHsxMDAgLVxuICAgICAgaHMucyAqIDUwfSUpYDtcbiAgfVxuXG4gIGFwcGx5SHNDb2xvcihocykge1xuICAgIC8vIGRvIG5vdGhpbmcgaXMgd2UgYWxyZWFkeSBoYXZlIHRoZSBzYW1lIGNvbG9yXG4gICAgaWYgKHRoaXMuaHNDb2xvciAmJiB0aGlzLmhzQ29sb3IuaCA9PT0gaHMuaCAmJiB0aGlzLmhzQ29sb3IucyA9PT0gaHMucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldE1hcmtlck9uQ29sb3IoaHMpOyAvLyBtYXJrZXIgaXMgYWx3YXlzIHNldCBvbiAncmF3JyBocyBwb3NpdGlvblxuICAgIGlmICghdGhpcy5pZ25vcmVTZWdtZW50cykge1xuICAgICAgLy8gYXBwbHkgc2VnbWVudHMgaWYgbmVlZGVkXG4gICAgICBocyA9IHRoaXMuYXBwbHlTZWdtZW50RmlsdGVyKGhzKTtcbiAgICB9XG4gICAgdGhpcy5oc0NvbG9yID0gaHM7XG4gICAgLy8gYWx3YXlzIGFwcGx5IHRoZSBuZXcgY29sb3IgdG8gdGhlIGludGVyZmFjZSAvIGNhbnZhc1xuICAgIHRoaXMuYXBwbHlDb2xvclRvQ2FudmFzKGhzKTtcbiAgfVxuXG4gIC8qXG4gICAqIGlucHV0IHByb2Nlc3NpbmcgaGVscGVyc1xuICAgKi9cblxuICAvLyBnZXQgYW5nbGUgKGRlZ3JlZXMpXG4gIGdldEFuZ2xlKGRYLCBkWSkge1xuICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIoLWRZLCAtZFgpOyAvLyByYWRpYW5zIGZyb20gdGhlIGxlZnQgZWRnZSwgY2xvY2t3aXNlID0gcG9zaXRpdmVcbiAgICB2YXIgYW5nbGUgPSAodGhldGEgLyBNYXRoLlBJKSAqIDE4MCArIDE4MDsgLy8gZGVncmVlcywgY2xvY2t3aXNlIGZyb20gcmlnaHRcbiAgICByZXR1cm4gYW5nbGU7XG4gIH1cblxuICAvLyByZXR1cm5zIHRydWUgd2hlbiBjb29yZGluYXRlcyBhcmUgaW4gdGhlIGNvbG9yd2hlZWxcbiAgaXNJbldoZWVsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXN0YW5jZSh4LCB5KSA8PSAxO1xuICB9XG5cbiAgLy8gcmV0dXJucyBkaXN0YW5jZSBmcm9tIHdoZWVsIGNlbnRlciwgMCA9IGNlbnRlciwgMSA9IGVkZ2UsID4xID0gb3V0c2lkZVxuICBnZXREaXN0YW5jZShkWCwgZFkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGRYICogZFggKyBkWSAqIGRZKSAvIHRoaXMucmFkaXVzO1xuICB9XG5cbiAgLypcbiAgICogR2V0dGluZyBjb2xvcnNcbiAgICovXG5cbiAgZ2V0Q29sb3IoeCwgeSkge1xuICAgIHZhciBodWUgPSB0aGlzLmdldEFuZ2xlKHgsIHkpOyAvLyBkZWdyZWVzLCBjbG9ja3dpc2UgZnJvbSByaWdodFxuICAgIHZhciByZWxhdGl2ZURpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZSh4LCB5KTsgLy8gZWRnZSBvZiByYWRpdXMgPSAxXG4gICAgdmFyIHNhdCA9IE1hdGgubWluKHJlbGF0aXZlRGlzdGFuY2UsIDEpOyAvLyBEaXN0YW5jZSBmcm9tIGNlbnRlclxuICAgIHJldHVybiB7IGg6IGh1ZSwgczogc2F0IH07XG4gIH1cblxuICBhcHBseVNlZ21lbnRGaWx0ZXIoaHMpIHtcbiAgICAvLyBhcHBseSBodWUgc2VnbWVudCBzdGVwc1xuICAgIGlmICh0aGlzLmh1ZVNlZ21lbnRzKSB7XG4gICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzNjAgLyB0aGlzLmh1ZVNlZ21lbnRzO1xuICAgICAgY29uc3QgaGFsZkFuZ2xlU3RlcCA9IGFuZ2xlU3RlcCAvIDI7XG4gICAgICBocy5oIC09IGhhbGZBbmdsZVN0ZXA7IC8vIHRha2UgdGhlICdjZW50ZXJlZCBzZWdlbW50cycgaW50byBhY2NvdW50XG4gICAgICBpZiAoaHMuaCA8IDApIHtcbiAgICAgICAgaHMuaCArPSAzNjA7XG4gICAgICB9IC8vIGRvbid0IGVuZCB1cCBiZWxvdyAwXG4gICAgICBjb25zdCByZXN0ID0gaHMuaCAlIGFuZ2xlU3RlcDtcbiAgICAgIGhzLmggLT0gcmVzdCAtIGFuZ2xlU3RlcDtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBzYXR1cmF0aW9uIHNlZ21lbnQgc3RlcHNcbiAgICBpZiAodGhpcy5zYXR1cmF0aW9uU2VnbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLnNhdHVyYXRpb25TZWdtZW50cyA9PT0gMSkge1xuICAgICAgICBocy5zID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZWdtZW50U2l6ZSA9IDEgLyB0aGlzLnNhdHVyYXRpb25TZWdtZW50cztcbiAgICAgICAgdmFyIHNhdHVyYXRpb25TdGVwID0gMSAvICh0aGlzLnNhdHVyYXRpb25TZWdtZW50cyAtIDEpO1xuICAgICAgICB2YXIgY2FsY3VsYXRlZFNhdCA9IE1hdGguZmxvb3IoaHMucyAvIHNlZ21lbnRTaXplKSAqIHNhdHVyYXRpb25TdGVwO1xuICAgICAgICBocy5zID0gTWF0aC5taW4oY2FsY3VsYXRlZFNhdCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBocztcbiAgfVxuXG4gIC8qXG4gICAqIERyYXdpbmcgcmVsYXRlZCBzdHVmZlxuICAgKi9cblxuICBzZXR1cExheWVycygpIHtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuJC5jYW52YXM7XG4gICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIgPSB0aGlzLiQuYmFja2dyb3VuZExheWVyO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllciA9IHRoaXMuJC5pbnRlcmFjdGlvbkxheWVyO1xuXG4gICAgLy8gY29vcmRpbmF0ZSBvcmlnaW4gcG9zaXRpb24gKGNlbnRlciBvZiB0aGUgd2hlZWwpXG4gICAgdGhpcy5vcmlnaW5YID0gdGhpcy53aWR0aCAvIDI7XG4gICAgdGhpcy5vcmlnaW5ZID0gdGhpcy5vcmlnaW5YO1xuXG4gICAgLy8gc3luY2hyb25pc2Ugd2lkdGgvaGVpZ2h0IGNvb3JkaW5hdGVzXG4gICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMuYmFja2dyb3VuZExheWVyLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZpZXdCb3hcIixcbiAgICAgIGAkey10aGlzLm9yaWdpblh9ICR7LXRoaXMub3JpZ2luWX0gJHt0aGlzLndpZHRofSAke3RoaXMuaGVpZ2h0fWBcbiAgICApO1xuICB9XG5cbiAgZHJhd0NvbG9yV2hlZWwoKSB7XG4gICAgLypcbiAgICAgKiAgU2V0dGluZyB1cCBhbGwgcGFyZW1ldGVyc1xuICAgICAqL1xuICAgIGxldCBzaGFkb3dDb2xvcjtcbiAgICBsZXQgc2hhZG93T2Zmc2V0WDtcbiAgICBsZXQgc2hhZG93T2Zmc2V0WTtcbiAgICBsZXQgc2hhZG93Qmx1cjtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5iYWNrZ3JvdW5kTGF5ZXIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIHBvc3Rpb25pbmcgYW5kIHNpemluZ1xuICAgIGNvbnN0IGNYID0gdGhpcy5vcmlnaW5YO1xuICAgIGNvbnN0IGNZID0gdGhpcy5vcmlnaW5ZO1xuICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMucmFkaXVzO1xuICAgIGNvbnN0IGNvdW50ZXJDbG9ja3dpc2UgPSBmYWxzZTtcbiAgICAvLyBzdHlsaW5nIG9mIHRoZSB3aGVlbFxuICAgIGNvbnN0IHdoZWVsU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmJhY2tncm91bmRMYXllciwgbnVsbCk7XG4gICAgY29uc3QgYm9yZGVyV2lkdGggPSBwYXJzZUludChcbiAgICAgIHdoZWVsU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0td2hlZWwtYm9yZGVyd2lkdGhcIiksXG4gICAgICAxMFxuICAgICk7XG4gICAgY29uc3QgYm9yZGVyQ29sb3IgPSB3aGVlbFN0eWxlXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZShcIi0td2hlZWwtYm9yZGVyY29sb3JcIilcbiAgICAgIC50cmltKCk7XG4gICAgY29uc3Qgd2hlZWxTaGFkb3cgPSB3aGVlbFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXdoZWVsLXNoYWRvd1wiKS50cmltKCk7XG4gICAgLy8gZXh0cmFjdCBzaGFkb3cgcHJvcGVydGllcyBmcm9tICBDQ1MgdmFyaWFibGVcbiAgICAvLyB0aGUgc2hhZG93IHNob3VsZCBiZSBkZWZpbmVkIGFzOiBcIjEwcHggNXB4IDVweCAwcHggQ09MT1JcIlxuICAgIGlmICh3aGVlbFNoYWRvdyAhPT0gXCJub25lXCIpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHdoZWVsU2hhZG93LnNwbGl0KFwicHggXCIpO1xuICAgICAgc2hhZG93Q29sb3IgPSB2YWx1ZXMucG9wKCk7XG4gICAgICBzaGFkb3dPZmZzZXRYID0gcGFyc2VJbnQodmFsdWVzWzBdLCAxMCk7XG4gICAgICBzaGFkb3dPZmZzZXRZID0gcGFyc2VJbnQodmFsdWVzWzFdLCAxMCk7XG4gICAgICBzaGFkb3dCbHVyID0gcGFyc2VJbnQodmFsdWVzWzJdLCAxMCkgfHwgMDtcbiAgICB9XG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gcmFkaXVzICsgYm9yZGVyV2lkdGggLyAyO1xuICAgIGNvbnN0IHdoZWVsUmFkaXVzID0gcmFkaXVzO1xuICAgIGNvbnN0IHNoYWRvd1JhZGl1cyA9IHJhZGl1cyArIGJvcmRlcldpZHRoO1xuXG4gICAgLypcbiAgICAgKiAgRHJhd2luZyBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkcmF3Q2lyY2xlKGh1ZVNlZ21lbnRzLCBzYXR1cmF0aW9uU2VnbWVudHMpIHtcbiAgICAgIGh1ZVNlZ21lbnRzID0gaHVlU2VnbWVudHMgfHwgMzYwOyAvLyByZXNldCAwIHNlZ21lbnRzIHRvIDM2MFxuICAgICAgY29uc3QgYW5nbGVTdGVwID0gMzYwIC8gaHVlU2VnbWVudHM7XG4gICAgICBjb25zdCBoYWxmQW5nbGVTdGVwID0gYW5nbGVTdGVwIC8gMjsgLy8gY2VudGVyIHNlZ21lbnRzIG9uIGNvbG9yXG4gICAgICBmb3IgKHZhciBhbmdsZSA9IDA7IGFuZ2xlIDw9IDM2MDsgYW5nbGUgKz0gYW5nbGVTdGVwKSB7XG4gICAgICAgIHZhciBzdGFydEFuZ2xlID0gKGFuZ2xlIC0gaGFsZkFuZ2xlU3RlcCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHZhciBlbmRBbmdsZSA9IChhbmdsZSArIGhhbGZBbmdsZVN0ZXAgKyAxKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY1gsIGNZKTtcbiAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgY1gsXG4gICAgICAgICAgY1ksXG4gICAgICAgICAgd2hlZWxSYWRpdXMsXG4gICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICBjb3VudGVyQ2xvY2t3aXNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIC8vIGdyYWRpZW50XG4gICAgICAgIHZhciBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICAgICAgY1gsXG4gICAgICAgICAgY1ksXG4gICAgICAgICAgMCxcbiAgICAgICAgICBjWCxcbiAgICAgICAgICBjWSxcbiAgICAgICAgICB3aGVlbFJhZGl1c1xuICAgICAgICApO1xuICAgICAgICBsZXQgbGlnaHRuZXNzID0gMTAwO1xuICAgICAgICAvLyBmaXJzdCBncmFkaWVudCBzdG9wXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCAke2xpZ2h0bmVzc30lKWApO1xuICAgICAgICAvLyBzZWdtZW50IGdyYWRpZW50IHN0b3BzXG4gICAgICAgIGlmIChzYXR1cmF0aW9uU2VnbWVudHMgPiAwKSB7XG4gICAgICAgICAgY29uc3QgcmF0aW9TdGVwID0gMSAvIHNhdHVyYXRpb25TZWdtZW50cztcbiAgICAgICAgICBsZXQgcmF0aW8gPSAwO1xuICAgICAgICAgIGZvciAodmFyIHN0b3AgPSAxOyBzdG9wIDwgc2F0dXJhdGlvblNlZ21lbnRzOyBzdG9wICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBwcmV2TGlnaG5lc3MgPSBsaWdodG5lc3M7XG4gICAgICAgICAgICByYXRpbyA9IHN0b3AgKiByYXRpb1N0ZXA7XG4gICAgICAgICAgICBsaWdodG5lc3MgPSAxMDAgLSA1MCAqIHJhdGlvO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxuICAgICAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAgICAgYGhzbCgke2FuZ2xlfSwgMTAwJSwgJHtwcmV2TGlnaG5lc3N9JSlgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHJhdGlvLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCAke2xpZ2h0bmVzc30lKWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AocmF0aW8sIGBoc2woJHthbmdsZX0sIDEwMCUsIDUwJSlgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsYXN0IGdyYWRpZW50IHN0b3BcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGBoc2woJHthbmdsZX0sIDEwMCUsIDUwJSlgKTtcblxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3U2hhZG93KCkge1xuICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5hcmMoY1gsIGNZLCBzaGFkb3dSYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gc2hhZG93Q29sb3I7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSBzaGFkb3dPZmZzZXRYO1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRZID0gc2hhZG93T2Zmc2V0WTtcbiAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHNoYWRvd0JsdXI7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd0JvcmRlcigpIHtcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LmFyYyhjWCwgY1ksIGJvcmRlclJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgIGNvbnRleHQubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogICBDYWxsIHRoZSBkcmF3aW5nIGZ1bmN0aW9uc1xuICAgICAqICAgZHJhd3MgdGhlIHNoYWRvdywgd2hlZWwgYW5kIGJvcmRlclxuICAgICAqL1xuICAgIGlmICh3aGVlbFN0eWxlLnNoYWRvdyAhPT0gXCJub25lXCIpIHtcbiAgICAgIGRyYXdTaGFkb3coKTtcbiAgICB9XG4gICAgZHJhd0NpcmNsZSh0aGlzLmh1ZVNlZ21lbnRzLCB0aGlzLnNhdHVyYXRpb25TZWdtZW50cyk7XG4gICAgaWYgKGJvcmRlcldpZHRoID4gMCkge1xuICAgICAgZHJhd0JvcmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqICAgRHJhdyB0aGUgKGRyYWdnYWJsZSkgbWFya2VyIGFuZCB0b29sdGlwXG4gICAqICAgb24gdGhlIGludGVyYWN0aW9uTGF5ZXIpXG4gICAqL1xuXG4gIGRyYXdNYXJrZXIoKSB7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IHRoaXMuaW50ZXJhY3Rpb25MYXllcjtcbiAgICBjb25zdCBtYXJrZXJyYWRpdXMgPSB0aGlzLnJhZGl1cyAqIDAuMDg7XG4gICAgY29uc3QgdG9vbHRpcHJhZGl1cyA9IHRoaXMucmFkaXVzICogMC4xNTtcbiAgICBjb25zdCBUb29sdGlwT2Zmc2V0WSA9IC0odG9vbHRpcHJhZGl1cyAqIDMpO1xuICAgIGNvbnN0IFRvb2x0aXBPZmZzZXRYID0gMDtcblxuICAgIHN2Z0VsZW1lbnQubWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJjaXJjbGVcIlxuICAgICk7XG4gICAgc3ZnRWxlbWVudC5tYXJrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYXJrZXJcIik7XG4gICAgc3ZnRWxlbWVudC5tYXJrZXIuc2V0QXR0cmlidXRlKFwiclwiLCBtYXJrZXJyYWRpdXMpO1xuICAgIHRoaXMubWFya2VyID0gc3ZnRWxlbWVudC5tYXJrZXI7XG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50Lm1hcmtlcik7XG5cbiAgICBzdmdFbGVtZW50LnRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcImNpcmNsZVwiXG4gICAgKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb2xvclRvb2x0aXBcIik7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcInJcIiwgdG9vbHRpcHJhZGl1cyk7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcImN4XCIsIFRvb2x0aXBPZmZzZXRYKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiY3lcIiwgVG9vbHRpcE9mZnNldFkpO1xuICAgIHRoaXMudG9vbHRpcCA9IHN2Z0VsZW1lbnQudG9vbHRpcDtcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQudG9vbHRpcCk7XG4gIH1cblxuICBzZWdtZW50YXRpb25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZExheWVyKSB7XG4gICAgICB0aGlzLmRyYXdDb2xvcldoZWVsKCk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb2xvci1waWNrZXJcIiwgSGFDb2xvclBpY2tlcik7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuL2hhLWljb25cIjtcblxuY2xhc3MgSGFMYWJlbGVkU2xpZGVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1oYS1zbGlkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY2FwdGlvbl1dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtY29udGFpbmVyXCI+PHNsb3QgbmFtZT1cImV4dHJhXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhhLWljb24gaWNvbj1cIltbaWNvbl1dXCIgaGlkZGVuJD1cIltbIWljb25dXVwiPjwvaGEtaWNvbj5cbiAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHN0ZXA9XCJbW3N0ZXBdXVwiXG4gICAgICAgICAgcGluPVwiW1twaW5dXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcHRpb246IFN0cmluZyxcbiAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgbWluOiBOdW1iZXIsXG4gICAgICBtYXg6IE51bWJlcixcbiAgICAgIHBpbjogQm9vbGVhbixcbiAgICAgIHN0ZXA6IE51bWJlcixcblxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlnbm9yZUJhclRvdWNoOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sYWJlbGVkLXNsaWRlclwiLCBIYUxhYmVsZWRTbGlkZXIpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySWNvbkJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuY29uc3QgcGFwZXJJY29uQnV0dG9uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItaWNvbi1idXR0b25cIlxuKSBhcyBDb25zdHJ1Y3RvcjxQYXBlckljb25CdXR0b25FbGVtZW50PjtcblxuZXhwb3J0IGNsYXNzIEhhUGFwZXJJY29uQnV0dG9uQXJyb3dQcmV2IGV4dGVuZHMgcGFwZXJJY29uQnV0dG9uQ2xhc3Mge1xuICBwdWJsaWMgaGFzc2lvPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IHRoaXMuaGFzc2lvXG4gICAgICAgICAgPyBcImhhc3NpbzphcnJvdy1sZWZ0XCJcbiAgICAgICAgICA6IFwiaGFzczphcnJvdy1sZWZ0XCJcbiAgICAgICAgOiB0aGlzLmhhc3Npb1xuICAgICAgICA/IFwiaGFzc2lvOmFycm93LXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6YXJyb3ctcmlnaHRcIjtcblxuICAgIC8vIGNhbGxpbmcgc3VwZXIgYWZ0ZXIgc2V0dGluZyBpY29uIHRvIGhhdmUgaXQgY29uc2lzdGVudGx5IHNob3cgdGhlIGljb24gKG90aGVyd2lzZSBub3QgYWx3YXlzIHNob3duKVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjogSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIixcbiAgSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXZcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVdhdGVySGVhdGVyQ29udHJvbCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLyogbG9jYWwgRE9NIHN0eWxlcyBnbyBoZXJlICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICAgIC5pbi1mbHV4I3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2VsZi1jZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJ1dHRvbnMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tIGxvY2FsIERPTSBnb2VzIGhlcmUgLS0+XG4gICAgICA8ZGl2IGlkPVwidGFyZ2V0X3RlbXBlcmF0dXJlXCI+W1t2YWx1ZV1dIFtbdW5pdHNdXTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi11cFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImluY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJkZWNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJ2YWx1ZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB1bml0czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoaW5GbHV4KSB7XG4gICAgdGhpcy4kLnRhcmdldF90ZW1wZXJhdHVyZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW4tZmx1eFwiLCBpbkZsdXgpO1xuICB9XG5cbiAgaW5jcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSArIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgIC8vIElmIG5vIGluaXRpYWwgdGFyZ2V0X3RlbXBcbiAgICAgIC8vIHRoaXMgZm9yY2VzIGNvbnRyb2wgdG8gc3RhcnRcbiAgICAgIC8vIGZyb20gdGhlIG1pbiBjb25maWd1cmVkIGluc3RlYWQgb2YgMFxuICAgICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1pbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSAtIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWluKSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPj0gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgLy8gd2hlbiB0aGUgbGFzdF9jaGFuZ2VkIHRpbWVzdGFtcCBpcyBjaGFuZ2VkLFxuICAgIC8vIHRyaWdnZXIgYSBwb3RlbnRpYWwgZXZlbnQgZmlyZSBpblxuICAgIC8vIHRoZSBmdXR1cmUsIGFzIGxvbmcgYXMgbGFzdCBjaGFuZ2VkIGlzIGZhciBlbm91Z2ggaW4gdGhlXG4gICAgLy8gcGFzdC5cbiAgICBpZiAodGhpcy5sYXN0X2NoYW5nZWQpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdF9jaGFuZ2VkID49IDIwMDApIHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMTApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13YXRlcl9oZWF0ZXItY29udHJvbFwiLCBIYVdhdGVySGVhdGVyQ29udHJvbCk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IHR5cGUgSHZhY01vZGUgPVxuICB8IFwib2ZmXCJcbiAgfCBcImhlYXRcIlxuICB8IFwiY29vbFwiXG4gIHwgXCJoZWF0X2Nvb2xcIlxuICB8IFwiYXV0b1wiXG4gIHwgXCJkcnlcIlxuICB8IFwiZmFuX29ubHlcIjtcblxuZXhwb3J0IHR5cGUgSHZhY0FjdGlvbiA9IFwib2ZmXCIgfCBcImhlYXRpbmdcIiB8IFwiY29vbGluZ1wiIHwgXCJkcnlpbmdcIiB8IFwiaWRsZVwiO1xuXG5leHBvcnQgdHlwZSBDbGltYXRlRW50aXR5ID0gSGFzc0VudGl0eUJhc2UgJiB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGh2YWNfbW9kZTogSHZhY01vZGU7XG4gICAgaHZhY19tb2RlczogSHZhY01vZGVbXTtcbiAgICBodmFjX2FjdGlvbj86IEh2YWNBY3Rpb247XG4gICAgY3VycmVudF90ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIG1pbl90ZW1wOiBudW1iZXI7XG4gICAgbWF4X3RlbXA6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX3N0ZXA/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfaGlnaD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9sb3c/OiBudW1iZXI7XG4gICAgaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgY3VycmVudF9odW1pZGl0eT86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfbG93PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9oaWdoPzogbnVtYmVyO1xuICAgIG1pbl9odW1pZGl0eT86IG51bWJlcjtcbiAgICBtYXhfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgZmFuX21vZGU/OiBzdHJpbmc7XG4gICAgZmFuX21vZGVzPzogc3RyaW5nW107XG4gICAgcHJlc2V0X21vZGU/OiBzdHJpbmc7XG4gICAgcHJlc2V0X21vZGVzPzogc3RyaW5nW107XG4gICAgc3dpbmdfbW9kZT86IHN0cmluZztcbiAgICBzd2luZ19tb2Rlcz86IHN0cmluZ1tdO1xuICAgIGF1eF9oZWF0PzogXCJvblwiIHwgXCJvZmZcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFID0gMTtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFID0gMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZID0gNDtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUgPSA4O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFID0gMzI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUID0gNjQ7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby9tb3JlLWluZm8tc2V0dGluZ3NcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IERpYWxvZ01peGluIGZyb20gXCIuLi9taXhpbnMvZGlhbG9nLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIERpYWxvZ01peGluXG4gKi9cbmNsYXNzIEhhTW9yZUluZm9EaWFsb2cgZXh0ZW5kcyBEaWFsb2dNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2cgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB3aWR0aDogMzY1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICBtb3JlLWluZm8tc2V0dGluZ3Mge1xuICAgICAgICAgIC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlOiB7XG4gICAgICAgICAgICAvKiBEZXNpZ24gZ3VpZGVsaW5lIHN0YXRlcyAyNHB4LCBjaGFuZ2VkIHRvIDE2IHRvIGFsaWduIHdpdGggc3RhdGUgaW5mbyAqL1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjZlbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAvKiB3ZWJraXQgYW5kIGJsaW5rIHN0aWxsIHN1cHBvcnQgc2ltcGxlIG11bHRpbGluZSB0ZXh0LW92ZXJmbG93ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICAgIG1vcmUtaW5mby1zZXR0aW5ncyB7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiY2FtZXJhXCJdKSB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZGF0YS1kb21haW49XCJoaXN0b3J5X2dyYXBoXCJdKSxcbiAgICAgICAgOmhvc3QoW2xhcmdlXSkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3BhZ2VdXVwiPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRyb2xzXG4gICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZGlhbG9nLWVsZW1lbnQ9XCJbW19kaWFsb2dFbGVtZW50XV1cIlxuICAgICAgICAgIGNhbi1jb25maWd1cmU9XCJbW19yZWdpc3RyeUluZm9dXVwiXG4gICAgICAgICAgbGFyZ2U9XCJ7e2xhcmdlfX1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udHJvbHM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcGFnZSwgXCJzZXR0aW5nc1wiKV1dJz5cbiAgICAgICAgPG1vcmUtaW5mby1zZXR0aW5nc1xuICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIHJlZ2lzdHJ5LWluZm89XCJ7e19yZWdpc3RyeUluZm99fVwiXG4gICAgICAgID48L21vcmUtaW5mby1zZXR0aW5ncz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVN0YXRlT2JqKGhhc3MpXCIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2xhcmdlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2RpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIF9yZWdpc3RyeUluZm86IE9iamVjdCxcblxuICAgICAgX3BhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGFEb21haW46IHtcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oc3RhdGVPYmopXCIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfZGlhbG9nT3BlbkNoYW5nZWQob3BlbmVkKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZGlhbG9nRWxlbWVudCA9IHRoaXM7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW9yZS1pbmZvLXBhZ2VcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9wYWdlID0gZXYuZGV0YWlsLnBhZ2U7XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU9iaihoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2hhc3MubW9yZUluZm9FbnRpdHlJZF0gfHwgbnVsbDtcbiAgfVxuXG4gIGFzeW5jIF9zdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgX3BhZ2U6IG51bGwsXG4gICAgICAgIF9yZWdpc3RyeUluZm86IG51bGwsXG4gICAgICAgIGxhcmdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gYWxsb3cgZGlhbG9nIHRvIHJlbmRlciBjb250ZW50IGJlZm9yZSBzaG93aW5nIGl0IHNvIGl0IHdpbGwgYmVcbiAgICAgICAgLy8gcG9zaXRpb25lZCBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICFpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwiY29uZmlnXCIpIHx8XG4gICAgICAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzcy51c2VyLmlzX2FkbWluKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgICAgICAgIGVudGl0eV9pZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IGluZm87XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlJbmZvID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGlhbG9nT3BlbkNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwgJiYgdGhpcy5zdGF0ZU9iaikge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9sYXJnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbW9yZS1pbmZvLWRpYWxvZ1wiLCBIYU1vcmVJbmZvRGlhbG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuY2xhc3MgTW9yZUluZm9BbGFybUNvbnRyb2xQYW5lbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5wYWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24uZGlzYXJtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvZGVGb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQuYWxhcm1fY29udHJvbF9wYW5lbC5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc051bWJlcihfY29kZUZvcm1hdCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjFcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4xPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNFwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjQ8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI3XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NzwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjJcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4yPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjU8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI4XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+ODwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjBcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4wPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiM1wiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjM8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI2XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjlcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID45PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9jbGVhckVudGVyZWRDb2RlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuY2xlYXJfY29kZScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWp1c3RpZmllZCBhY3Rpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGlzYXJtVmlzaWJsZV1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgY2xhc3M9XCJkaXNhcm1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgICAgZGF0YS1zZXJ2aWNlPVwiYWxhcm1fZGlzYXJtXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2NvZGVWYWxpZF1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuZGlzYXJtJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hcm1WaXNpYmxlXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1faG9tZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9ob21lJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1fYXdheVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9hd2F5JyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9lbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9jb2RlRm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2NvZGVWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcIl92YWxpZGF0ZUNvZGUoX2VudGVyZWRDb2RlLCAgX2NvZGVGb3JtYXQsICBfYXJtVmlzaWJsZSwgX2NvZGVBcm1SZXF1aXJlZClcIixcbiAgICAgIH0sXG4gICAgICBfZGlzYXJtVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2FybVZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9pbnB1dEVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hcm1lZFN0YXRlcyA9IFtcbiAgICAgIFwiYXJtZWRfaG9tZVwiLFxuICAgICAgXCJhcm1lZF9hd2F5XCIsXG4gICAgICBcImFybWVkX25pZ2h0XCIsXG4gICAgICBcImFybWVkX2N1c3RvbV9ieXBhc3NcIixcbiAgICBdO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3VmFsLnN0YXRlO1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIF9jb2RlRm9ybWF0OiBuZXdWYWwuYXR0cmlidXRlcy5jb2RlX2Zvcm1hdCxcbiAgICAgICAgX2FybVZpc2libGU6IHN0YXRlID09PSBcImRpc2FybWVkXCIsXG4gICAgICAgIF9jb2RlQXJtUmVxdWlyZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvZGVfYXJtX3JlcXVpcmVkLFxuICAgICAgICBfZGlzYXJtVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLl9hcm1lZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSkgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJwZW5kaW5nXCIgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJ0cmlnZ2VyZWRcIiB8fFxuICAgICAgICAgIHN0YXRlID09PSBcImFybWluZ1wiLFxuICAgICAgfTtcbiAgICAgIHByb3BzLl9pbnB1dEVuYWJsZWQgPSBwcm9wcy5fZGlzYXJtVmlzaWJsZSB8fCBwcm9wcy5fYXJtVmlzaWJsZTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzTnVtYmVyKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQgPT09IFwiTnVtYmVyXCI7XG4gIH1cblxuICBfdmFsaWRhdGVDb2RlKGNvZGUsIGZvcm1hdCwgYXJtVmlzaWJsZSwgY29kZUFybVJlcXVpcmVkKSB7XG4gICAgcmV0dXJuICFmb3JtYXQgfHwgY29kZS5sZW5ndGggPiAwIHx8IChhcm1WaXNpYmxlICYmICFjb2RlQXJtUmVxdWlyZWQpO1xuICB9XG5cbiAgX2RpZ2l0Q2xpY2tlZChldikge1xuICAgIHRoaXMuX2VudGVyZWRDb2RlICs9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpZ2l0XCIpO1xuICB9XG5cbiAgX2NsZWFyRW50ZXJlZENvZGUoKSB7XG4gICAgdGhpcy5fZW50ZXJlZENvZGUgPSBcIlwiO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLl9lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgc2VydmljZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9lbnRlcmVkQ29kZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJtb3JlLWluZm8tYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBNb3JlSW5mb0FsYXJtQ29udHJvbFBhbmVsXG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvQXV0b21hdGlvbiBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDM2cHggMCA4cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdj5bW2xvY2FsaXplKCd1aS5jYXJkLmF1dG9tYXRpb24ubGFzdF90cmlnZ2VyZWQnKV1dOjwvZGl2PlxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRdXVwiXG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJoYW5kbGVUcmlnZ2VyVGFwcGVkXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hdXRvbWF0aW9uLnRyaWdnZXInKV1dXG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRyaWdnZXJUYXBwZWQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiYXV0b21hdGlvblwiLCBcInRyaWdnZXJcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tYXV0b21hdGlvblwiLCBNb3JlSW5mb0F1dG9tYXRpb24pO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENBTUVSQV9TVVBQT1JUX1NUUkVBTSxcbiAgQ2FtZXJhUHJlZmVyZW5jZXMsXG4gIGZldGNoQ2FtZXJhUHJlZnMsXG4gIHVwZGF0ZUNhbWVyYVByZWZzLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FtZXJhLXN0cmVhbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbi8vIE5vdCBkdXBsaWNhdGUgaW1wb3J0LCBpdCdzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJDaGVja2JveEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcblxuY2xhc3MgTW9yZUluZm9DYW1lcmEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhbWVyYVByZWZzPzogQ2FtZXJhUHJlZmVyZW5jZXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F0dGFjaGVkIHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FtZXJhLXN0cmVhbVxuICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgIC5zdGF0ZU9iaj1cIiR7dGhpcy5zdGF0ZU9ian1cIlxuICAgICAgICBzaG93Y29udHJvbHNcbiAgICAgID48L2hhLWNhbWVyYS1zdHJlYW0+XG4gICAgICAke3RoaXMuX2NhbWVyYVByZWZzXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NhbWVyYVByZWZzLnByZWxvYWRfc3RyZWFtfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlQ2hlY2tib3hDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmVsb2FkIHN0cmVhbVxuICAgICAgICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICBgXG4gICAgICAgIDogdW5kZWZpbmVkfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNhbWUgZW50aXR5LCBpZ25vcmUuXG4gICAgaWYgKGN1ckVudGl0eUlkID09PSBvbGRFbnRpdHlJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGN1ckVudGl0eUlkICYmXG4gICAgICB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3RyZWFtXCIpICYmXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApIHtcbiAgICAgIC8vIEZldGNoIGluIGJhY2tncm91bmQgd2hpbGUgd2Ugc2V0IHVwIHRoZSB2aWRlby5cbiAgICAgIHRoaXMuX2ZldGNoQ2FtZXJhUHJlZnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENhbWVyYVByZWZzKCkge1xuICAgIHRoaXMuX2NhbWVyYVByZWZzID0gYXdhaXQgZmV0Y2hDYW1lcmFQcmVmcyhcbiAgICAgIHRoaXMuaGFzcyEsXG4gICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlQ2hlY2tib3hDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVyQ2hlY2tib3hFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jYW1lcmFQcmVmcyA9IGF3YWl0IHVwZGF0ZUNhbWVyYVByZWZzKFxuICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVsb2FkX3N0cmVhbTogY2hlY2tib3guY2hlY2tlZCEsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY2FtZXJhXCIsIE1vcmVJbmZvQ2FtZXJhKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTERpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ2xpbWF0ZUVudGl0eSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRV9SQU5HRSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWSxcbiAgQ0xJTUFURV9TVVBQT1JUX0ZBTl9NT0RFLFxuICBDTElNQVRFX1NVUFBPUlRfU1dJTkdfTU9ERSxcbiAgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFULFxuICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREUsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NsaW1hdGVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmNsYXNzIE1vcmVJbmZvQ2xpbWF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENsaW1hdGVFbnRpdHk7XG4gIHByaXZhdGUgX3Jlc2l6ZURlYm91bmNlPzogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0SHVtaWRpdHkgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFlcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRGYW5Nb2RlID0gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUpO1xuICAgIGNvbnN0IHN1cHBvcnRQcmVzZXRNb2RlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRTd2luZ01vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0QXV4SGVhdCA9IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RlcFNpemUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9zdGVwIHx8XG4gICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSA9PT0gLTFcbiAgICAgICAgPyAwLjVcbiAgICAgICAgOiAxO1xuXG4gICAgY29uc3QgcnRsRGlyZWN0aW9uID0gY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICBcImhhcy1jdXJyZW50X3RlbXBlcmF0dXJlXCI6XG4gICAgICAgICAgICBcImN1cnJlbnRfdGVtcGVyYXR1cmVcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAgIFwiaGFzLWN1cnJlbnRfaHVtaWRpdHlcIjogXCJjdXJyZW50X2h1bWlkaXR5XCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgICBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVcIjogc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZV9yYW5nZVwiOiBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmVSYW5nZSxcbiAgICAgICAgICBcImhhcy10YXJnZXRfaHVtaWRpdHlcIjogc3VwcG9ydFRhcmdldEh1bWlkaXR5LFxuICAgICAgICAgIFwiaGFzLWZhbl9tb2RlXCI6IHN1cHBvcnRGYW5Nb2RlLFxuICAgICAgICAgIFwiaGFzLXN3aW5nX21vZGVcIjogc3VwcG9ydFN3aW5nTW9kZSxcbiAgICAgICAgICBcImhhcy1hdXhfaGVhdFwiOiBzdXBwb3J0QXV4SGVhdCxcbiAgICAgICAgICBcImhhcy1wcmVzZXRfbW9kZVwiOiBzdXBwb3J0UHJlc2V0TW9kZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSR7c3RhdGVPYmouc3RhdGV9PlxuICAgICAgICAgICAgJHtzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgfHwgc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlUmFuZ2VcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wfVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtY2xpbWF0ZS1jb250cm9sPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9XG4gICAgICAgICAgICAgICAgICAgIC51bml0cz0ke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RlbXBlcmF0dXJlU3RlcFNpemV9XG4gICAgICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wfVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdofVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhbmdlLWNvbnRyb2wtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRUZW1wZXJhdHVyZUxvd0NoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8aGEtY2xpbWF0ZS1jb250cm9sXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaH1cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYW5nZS1jb250cm9sLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldFRlbXBlcmF0dXJlSGlnaENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICR7c3VwcG9ydFRhcmdldEh1bWlkaXR5XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWh1bWlkaXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdj4ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X2h1bWlkaXR5XCIpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFyZ2V0LWh1bWlkaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaHVtaWRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHBpblxuICAgICAgICAgICAgICAgICAgICBpZ25vcmUtYmFyLXRvdWNoXG4gICAgICAgICAgICAgICAgICAgIGRpcj0ke3J0bERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX2h1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlQcm9ncmVzcz0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X2h1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0SHVtaWRpdHlTbGlkZXJDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWh2YWNfbW9kZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5vcGVyYXRpb25cIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5zdGF0ZX1cbiAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh2YWNfbW9kZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShgc3RhdGUuY2xpbWF0ZS4ke21vZGV9YCl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICR7c3VwcG9ydFByZXNldE1vZGVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItcHJlc2V0X21vZGVzXCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnByZXNldF9tb2RlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVByZXNldG1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLnByZXNldF9tb2RlLm5vbmVgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGVzIS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9JHttb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHttb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCBtb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzdXBwb3J0RmFuTW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mYW5fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5mYW5fbW9kZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5mYW5fbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVGYW5tb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9tb2RlcyEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLmZhbl9tb2RlLiR7bW9kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwgbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c3VwcG9ydFN3aW5nTW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1zd2luZ19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnN3aW5nX21vZGVcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3dpbmdfbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3dpbmdfbW9kZXMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAobW9kZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PiR7bW9kZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3N1cHBvcnRBdXhIZWF0XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF1eF9oZWF0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuYXV4X2hlYXRcIil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwifVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYXV4VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZURlYm91bmNlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplRGVib3VuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVEZWJvdW5jZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgICAgdGhpcy5fcmVzaXplRGVib3VuY2UgPSB1bmRlZmluZWQ7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldFRlbXBlcmF0dXJlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgeyB0ZW1wZXJhdHVyZTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVMb3dDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0X3RlbXBfbG93OiBuZXdWYWwsXG4gICAgICAgIHRhcmdldF90ZW1wX2hpZ2g6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2gsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAge1xuICAgICAgICB0YXJnZXRfdGVtcF9sb3c6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgICB0YXJnZXRfdGVtcF9oaWdoOiBuZXdWYWwsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldEh1bWlkaXR5U2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMuaHVtaWRpdHksXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9odW1pZGl0eVwiLFxuICAgICAgeyBodW1pZGl0eTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXV4VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwiLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfYXV4X2hlYXRcIixcbiAgICAgIHsgYXV4X2hlYXQ6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUZhbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5mYW5fbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X2Zhbl9tb2RlXCIsXG4gICAgICB7IGZhbl9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcGVyYXRpb25tb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcih0aGlzLnN0YXRlT2JqIS5zdGF0ZSwgbmV3VmFsLCBcInNldF9odmFjX21vZGVcIiwge1xuICAgICAgaHZhY19tb2RlOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5zd2luZ19tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfc3dpbmdfbW9kZVwiLFxuICAgICAgeyBzd2luZ19tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQcmVzZXRtb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZSB8fCBudWxsO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5wcmVzZXRfbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3ByZXNldF9tb2RlXCIsXG4gICAgICB7IHByZXNldF9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZUhlbHBlcihcbiAgICBvbGRWYWw6IHVua25vd24sXG4gICAgbmV3VmFsOiB1bmtub3duLFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBkYXRhOiB7XG4gICAgICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gICAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xuICAgIH1cbiAgKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgY29uc3QgY3VyU3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY2xpbWF0ZVwiLCBzZXJ2aWNlLCBkYXRhKTtcblxuICAgIC8vIFdlIHJlc2V0IHN0YXRlT2JqIHRvIHJlLXN5bmMgdGhlIGlucHV0cyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXRcbiAgICAvLyBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdCByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWRcbiAgICAvLyBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZywgdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XG5cbiAgICAvLyBObyBuZWVkIHRvIHJlc3luYyBpZiB3ZSByZWNlaXZlZCBhIG5ldyBzdGF0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZU9iaiAhPT0gY3VyU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlT2JqID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgLy8gT25seSByZXN0b3JlIGlmIG5vdCBzZXQgeWV0IGJ5IGEgc3RhdGUgY2hhbmdlXG4gICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZU9iaiA9IGN1clN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHZhY19tb2RlcyBpcm9uLWljb24sXG4gICAgICAuY29udGFpbmVyLWZhbl9saXN0IGlyb24taWNvbixcbiAgICAgIC5jb250YWluZXItc3dpbmdfbGlzdCBpcm9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDIycHggMTZweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHVtaWRpdHkgLnNpbmdsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50YXJnZXQtaHVtaWRpdHkge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgIH1cbiAgICAgIGhhLWNsaW1hdGUtY29udHJvbC5yYW5nZS1jb250cm9sLWxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgfVxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICB9XG5cbiAgICAgIC5odW1pZGl0eSB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWFjdGl2ZS1jb2xvcjogdmFyKC0tcGFwZXItYmx1ZS00MDApO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBhcGVyLWJsdWUtNDAwKTtcbiAgICAgIH1cblxuICAgICAgLnNpbmdsZS1yb3cge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jbGltYXRlXCIsIE1vcmVJbmZvQ2xpbWF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbmZpZ3VyYXRvciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2M2MjgyODtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuc3VibWl0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpc0NvbmZpZ3VyYWJsZV1dXCI+XG4gICAgICAgICAgPGhhLW1hcmtkb3duXG4gICAgICAgICAgICBjb250ZW50PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVycm9yc11dXCI+XG4gICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZXJyb3JzXV1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmllbGRzXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbaXRlbS5uYW1lXV1cIlxuICAgICAgICAgICAgICBuYW1lPVwiW1tpdGVtLmlkXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwiW1tpdGVtLnR5cGVdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cImZpZWxkQ2hhbmdlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJtaXRcIiBoaWRkZW4kPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWQ9XCJcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJzdWJtaXRDbGlja2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICBhY3RpdmU9XCJbW2lzQ29uZmlndXJpbmddXVwiXG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiW1shaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25maWd1cmluZ1wiXG4gICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGlzcGxheVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUlzQ29uZmlndXJhYmxlKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBmaWVsZElucHV0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVJc0NvbmZpZ3VyYWJsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJjb25maWd1cmVcIjtcbiAgfVxuXG4gIGZpZWxkQ2hhbmdlZChldikge1xuICAgIHZhciBlbCA9IGV2LnRhcmdldDtcbiAgICB0aGlzLmZpZWxkSW5wdXRbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrZWQoKSB7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjb25maWd1cmVfaWQ6IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5jb25maWd1cmVfaWQsXG4gICAgICBmaWVsZHM6IHRoaXMuZmllbGRJbnB1dCxcbiAgICB9O1xuXG4gICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvbmZpZ3VyYXRvclwiLCBcImNvbmZpZ3VyZVwiLCBkYXRhKS50aGVuKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29uZmlndXJhdG9yXCIsIE1vcmVJbmZvQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7XG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVXBkYXRpbmdFbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWxcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWF1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWNhbWVyYVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY2xpbWF0ZVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3ZlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZGVmYXVsdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZmFuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1ncm91cFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWxpZ2h0XCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1sb2NrXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tc3VuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby11cGRhdGVyXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby12YWN1dW1cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8td2VhdGhlclwiO1xuXG5pbXBvcnQgc3RhdGVNb3JlSW5mb1R5cGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfbW9yZV9pbmZvX3R5cGVcIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY2xhc3MgTW9yZUluZm9Db250ZW50IGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBwcml2YXRlIF9kZXRhY2hlZENoaWxkPzogQ2hpbGROb2RlO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgc3RhdGVPYmo6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgLy8gVGhpcyBpcyBub3QgYSBsaXQgZWxlbWVudCwgYnV0IGFuIHVwZGF0aW5nIGVsZW1lbnQsIHNvIHdlIGltcGxlbWVudCB1cGRhdGVcbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG5cbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICAvLyBEZXRhY2ggY2hpbGQgdG8gcHJldmVudCBpdCBmcm9tIGRvaW5nIHdvcmsuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZXRhY2hlZENoaWxkKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2RldGFjaGVkQ2hpbGQpO1xuICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBtb3JlSW5mb1R5cGUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyAmJiBcImN1c3RvbV91aV9tb3JlX2luZm9cIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzXG4gICAgICAgID8gc3RhdGVPYmouYXR0cmlidXRlcy5jdXN0b21fdWlfbW9yZV9pbmZvXG4gICAgICAgIDogXCJtb3JlLWluZm8tXCIgKyBzdGF0ZU1vcmVJbmZvVHlwZShzdGF0ZU9iaik7XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIodGhpcywgbW9yZUluZm9UeXBlLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29udGVudFwiLCBNb3JlSW5mb0NvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvdmVyLXRpbHQtY29udHJvbHNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCBmZWF0dXJlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY29uc3QgRkVBVFVSRV9DTEFTU19OQU1FUyA9IHtcbiAgMTI4OiBcImhhcy1zZXRfdGlsdF9wb3NpdGlvblwiLFxufTtcbmNsYXNzIE1vcmVJbmZvQ292ZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICAudGlsdCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWN1cnJlbnRfcG9zaXRpb24gLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIC5oYXMtc2V0X3RpbHRfcG9zaXRpb24gLnRpbHQsXG4gICAgICAgIC5oYXMtY3VycmVudF90aWx0X3Bvc2l0aW9uIC50aWx0IHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudF9wb3NpdGlvblwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQuY292ZXIucG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJQb3NpdGlvblNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTZXRQb3NpdGlvbl1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cImNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbHRcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmNvdmVyLnRpbHRfcG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICBleHRyYT1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJUaWx0UG9zaXRpb25TbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aGEtY292ZXItdGlsdC1jb250cm9sc1xuICAgICAgICAgICAgICBzbG90PVwiZXh0cmFcIlxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1tlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgID48L2hhLWNvdmVyLXRpbHQtY29udHJvbHM+XG4gICAgICAgICAgPC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgICAgY292ZXJQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgICBjb3ZlclRpbHRQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBjb3ZlclBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIGNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfdGlsdF9wb3NpdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBbXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXG4gICAgICAgIFwiY3VycmVudF9wb3NpdGlvblwiLFxuICAgICAgICBcImN1cnJlbnRfdGlsdF9wb3NpdGlvblwiLFxuICAgICAgXSksXG4gICAgICBmZWF0dXJlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgRkVBVFVSRV9DTEFTU19OQU1FUyksXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJQb3NpdGlvbihldi50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJUaWx0UG9zaXRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY292ZXJcIiwgTW9yZUluZm9Db3Zlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuY2xhc3MgTW9yZUluZm9EZWZhdWx0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZGVmYXVsdFwiLCBNb3JlSW5mb0RlZmF1bHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9GYW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyLXNwZWVkX2xpc3QsXG4gICAgICAgIC5jb250YWluZXItZGlyZWN0aW9uLFxuICAgICAgICAuY29udGFpbmVyLW9zY2lsbGF0aW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1zcGVlZF9saXN0IC5jb250YWluZXItc3BlZWRfbGlzdCxcbiAgICAgICAgLmhhcy1kaXJlY3Rpb24gLmNvbnRhaW5lci1kaXJlY3Rpb24sXG4gICAgICAgIC5oYXMtb3NjaWxsYXRpbmcgLmNvbnRhaW5lci1vc2NpbGxhdGluZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItc3BlZWRfbGlzdFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uc3BlZWQnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkXV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwic3BlZWRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkX2xpc3RdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3NjaWxsYXRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4ub3NjaWxsYXRlJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAgICAgY2hlY2tlZD1cIltbb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkXV1cIlxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJvc2NpbGxhdGlvblRvZ2dsZUNoYW5nZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWRpcmVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXJlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXY+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uZGlyZWN0aW9uJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJvdGF0ZS1sZWZ0XCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJvbkRpcmVjdGlvbkxlZnRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxlZnRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUlzUm90YXRpbmdMZWZ0KHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJvdGF0ZS1yaWdodFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25EaXJlY3Rpb25SaWdodFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmlnaHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUlzUm90YXRpbmdSaWdodChzdGF0ZU9iaildXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cInNwZWVkLHNwZWVkX2xpc3Qsb3NjaWxsYXRpbmcsZGlyZWN0aW9uXCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLm9zY2lsbGF0aW5nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1mYW4gXCIgK1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1wib3NjaWxsYXRpbmdcIiwgXCJzcGVlZF9saXN0XCIsIFwiZGlyZWN0aW9uXCJdKVxuICAgICk7XG4gIH1cblxuICBzcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3BlZWQ6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIG9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3NjaWxsYXRpbmc7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJvc2NpbGxhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG9zY2lsbGF0aW5nOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBvbkRpcmVjdGlvbkxlZnQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcInJldmVyc2VcIixcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGlyZWN0aW9uUmlnaHQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcImZvcndhcmRcIixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVJc1JvdGF0aW5nTGVmdChzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRpcmVjdGlvbiA9PT0gXCJyZXZlcnNlXCI7XG4gIH1cblxuICBjb21wdXRlSXNSb3RhdGluZ1JpZ2h0KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGlyZWN0aW9uID09PSBcImZvcndhcmRcIjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZmFuXCIsIE1vcmVJbmZvRmFuKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgTW9yZUluZm9Hcm91cCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmNoaWxkLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC1jYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJncm91cGVkQ29udHJvbERldGFpbHNcIj48L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc3RhdGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1jYXJkXCI+XG4gICAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZV1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTdGF0ZXMoc3RhdGVPYmosIGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wic3RhdGVzQ2hhbmdlZChzdGF0ZU9iaiwgc3RhdGVzKVwiXTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZXMoc3RhdGVPYmosIGhhc3MpIHtcbiAgICB2YXIgc3RhdGVzID0gW107XG4gICAgdmFyIGVudElkcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkIHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdGF0ZSA9IGhhc3Muc3RhdGVzW2VudElkc1tpXV07XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIHN0YXRlc0NoYW5nZWQoc3RhdGVPYmosIHN0YXRlcykge1xuICAgIGxldCBncm91cERvbWFpblN0YXRlT2JqID0gZmFsc2U7XG4gICAgbGV0IGdyb3VwRG9tYWluID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVzICYmIHN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYXNlU3RhdGVPYmogPSBzdGF0ZXMuZmluZCgocykgPT4gcy5zdGF0ZSA9PT0gXCJvblwiKSB8fCBzdGF0ZXNbMF07XG4gICAgICBncm91cERvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihiYXNlU3RhdGVPYmopO1xuXG4gICAgICAvLyBHcm91cHMgbmVlZCB0byBiZSBmaWx0ZXJlZCBvdXQgb3Igd2UnbGwgc2hvdyBjb250ZW50IG9mXG4gICAgICAvLyBmaXJzdCBjaGlsZCBhYm92ZSB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgZ3JvdXBcbiAgICAgIGlmIChncm91cERvbWFpbiAhPT0gXCJncm91cFwiKSB7XG4gICAgICAgIGdyb3VwRG9tYWluU3RhdGVPYmogPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlU3RhdGVPYmosIHtcbiAgICAgICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBiYXNlU3RhdGVPYmouYXR0cmlidXRlcyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzW2ldKSkge1xuICAgICAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFncm91cERvbWFpblN0YXRlT2JqKSB7XG4gICAgICBjb25zdCBlbCA9IGRvbSh0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzKTtcbiAgICAgIGlmIChlbC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzLFxuICAgICAgICBcIk1PUkUtSU5GTy1cIiArIGdyb3VwRG9tYWluLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHsgc3RhdGVPYmo6IGdyb3VwRG9tYWluU3RhdGVPYmosIGhhc3M6IHRoaXMuaGFzcyB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZ3JvdXBcIiwgTW9yZUluZm9Hcm91cCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jYXJkcy9oYS1oaXN0b3J5X2dyYXBoLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0hpc3RvcnlHcmFwaCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1oaXN0b3J5X2dyYXBoLWNhcmRcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgID5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9oYS1oaXN0b3J5X2dyYXBoLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiLCBNb3JlSW5mb0hpc3RvcnlHcmFwaCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXRcIjtcblxuaW1wb3J0IGF0dHJpYnV0ZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmNsYXNzIERhdGV0aW1lSW5wdXQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvZXNIYXZlRGF0ZShzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cImRhdGVJbnB1dFwiXG4gICAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJkYXRlVGltZUNoYW5nZWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7c2VsZWN0ZWREYXRlfX1cIlxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZG9lc0hhdmVUaW1lKHN0YXRlT2JqKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cGFwZXItdGltZS1pbnB1dFxuICAgICAgICAgICAgICBob3VyPVwie3tzZWxlY3RlZEhvdXJ9fVwiXG4gICAgICAgICAgICAgIG1pbj1cInt7c2VsZWN0ZWRNaW51dGV9fVwiXG4gICAgICAgICAgICAgIGZvcm1hdD1cIjI0XCJcbiAgICAgICAgICAgID48L3BhcGVyLXRpbWUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRIb3VyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZVRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZE1pbnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIENvbnZlcnQgdGhlIGRhdGUgaW4gdGhlIHN0YXRlT2JqIGludG8gYSBzdHJpbmcgdXNlYWJsZSBieSB2YWFkaW4tZGF0ZS1waWNrZXIgKi9cbiAgZ2V0RGF0ZVN0cmluZyhzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmtub3duXCIpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB2YXIgbW9udGhGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggPCAxMCkge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHZhciBkYXlGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5IDwgMTApIHtcbiAgICAgIGRheUZpbGxlciA9IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIgK1xuICAgICAgXCItXCIgK1xuICAgICAgbW9udGhGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCArXG4gICAgICBcIi1cIiArXG4gICAgICBkYXlGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICApO1xuICB9XG5cbiAgLyogU2hvdWxkIGZpcmUgd2hlbiBhbnkgdmFsdWUgd2FzIGNoYW5nZWQgKmJ5IHRoZSB1c2VyKiwgbm90IGIvYyBvZiBzZXR0aW5nXG4gICAqIGluaXRpYWwgdmFsdWVzLiAqL1xuICBkYXRlVGltZUNoYW5nZWQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZSBpcyByZWFsbHkgY29taW5nIGZyb20gdGhlIHVzZXJcbiAgICBpZiAoIXRoaXMuaXNfcmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBtaW51dGVGaWxsZXI7XG5cbiAgICBjb25zdCBzZXJ2aWNlRGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGNoYW5nZWQgfD1cbiAgICAgICAgcGFyc2VJbnQodGhpcy5zZWxlY3RlZE1pbnV0ZSkgIT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGU7XG4gICAgICBjaGFuZ2VkIHw9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3VyKSAhPT0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXI7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1pbnV0ZSA8IDEwKSB7XG4gICAgICAgIG1pbnV0ZUZpbGxlciA9IFwiMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlRmlsbGVyID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lU3RyID1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXIgKyBcIjpcIiArIG1pbnV0ZUZpbGxlciArIHRoaXMuc2VsZWN0ZWRNaW51dGU7XG4gICAgICBzZXJ2aWNlRGF0YS50aW1lID0gdGltZVN0cjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gRGF0ZSB3YXMgbm90IHNldFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRlVmFsSW5wdXQgPSBuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICBjb25zdCBkYXRlVmFsU3RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG5cbiAgICAgIGNoYW5nZWQgfD0gZGF0ZVZhbFN0YXRlICE9PSBkYXRlVmFsSW5wdXQ7XG5cbiAgICAgIHNlcnZpY2VEYXRhLmRhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfZGF0ZXRpbWVcIiwgXCJzZXRfZGF0ZXRpbWVcIiwgc2VydmljZURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICAvLyBTZXQgdG8gbm9uLXJlYWR5IHMudC4gZGF0ZVRpbWVDaGFuZ2VkIGRvZXMgbm90IGZpcmVcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG5cbiAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gbmV3VmFsLmF0dHJpYnV0ZXMuaG91cjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSBuZXdWYWwuYXR0cmlidXRlcy5taW51dGU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMuZ2V0RGF0ZVN0cmluZyhuZXdWYWwpO1xuICAgIH1cblxuICAgIHRoaXMuaXNfcmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgZG9lc0hhdmVEYXRlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX2RhdGU7XG4gIH1cblxuICBkb2VzSGF2ZVRpbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwibW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lIFwiICtcbiAgICAgIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcImhhc190aW1lXCIsIFwiaGFzX2RhdGVcIl0pXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIiwgRGF0ZXRpbWVJbnB1dCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgZmVhdHVyZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBGRUFUVVJFX0NMQVNTX05BTUVTID0ge1xuICAxOiBcImhhcy1icmlnaHRuZXNzXCIsXG4gIDI6IFwiaGFzLWNvbG9yX3RlbXBcIixcbiAgNDogXCJoYXMtZWZmZWN0X2xpc3RcIixcbiAgMTY6IFwiaGFzLWNvbG9yXCIsXG4gIDEyODogXCJoYXMtd2hpdGVfdmFsdWVcIixcbn07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0xpZ2h0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmVmZmVjdF9saXN0LFxuICAgICAgICAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmNvbG9yX3RlbXAsXG4gICAgICAgIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuY29sb3JfdGVtcCB7XG4gICAgICAgICAgLS1oYS1zbGlkZXItYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgIHJnYigyNTUsIDE2MCwgMCkgMCUsXG4gICAgICAgICAgICB3aGl0ZSA1MCUsXG4gICAgICAgICAgICByZ2IoMTY2LCAyMDksIDI1NSkgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgICAgLyogVGhlIGNvbG9yIHRlbXAgbWluaW11bSB2YWx1ZSBzaG91bGRuJ3QgYmUgcmVuZGVyZWQgZGlmZmVyZW50bHkuIEl0J3Mgbm90IFwib2ZmXCIuICovXG4gICAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY29sb3ItcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkNvbnRhaW5lciAuc2VnbWVudGF0aW9uQnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMSU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1lZmZlY3RfbGlzdC5pcy1vbiAuZWZmZWN0X2xpc3QsXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmhhcy1jb2xvcl90ZW1wLmlzLW9uIC5jb2xvcl90ZW1wLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogODRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuaGFzLWNvbG9yX3RlbXAuaXMtb24sXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1icmlnaHRuZXNzIC5icmlnaHRuZXNzLFxuICAgICAgICAuaGFzLWNvbG9yX3RlbXAuaXMtb24gLmNvbG9yX3RlbXAsXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24gLndoaXRlX3ZhbHVlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIGhhLWNvbG9yLXBpY2tlciB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyd2lkdGg6IDU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyd2lkdGg6IDI7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcmNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pcy11bmF2YWlsYWJsZSAuY29udHJvbCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgYnJpZ2h0bmVzc1wiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuYnJpZ2h0bmVzcycpXV1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJpZ2h0bmVzcy01XCJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3ticmlnaHRuZXNzU2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJicmlnaHRuZXNzU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGNvbG9yX3RlbXBcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmNvbG9yX3RlbXBlcmF0dXJlJyldXVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp0aGVybW9tZXRlclwiXG4gICAgICAgICAgICBtaW49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX21pcmVkc11dXCJcbiAgICAgICAgICAgIG1heD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfbWlyZWRzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2N0U2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJjdFNsaWRlckNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWxhYmVsZWQtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCB3aGl0ZV92YWx1ZVwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQud2hpdGVfdmFsdWUnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmZpbGUtd29yZC1ib3hcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t3dlNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwid3ZTbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWdtZW50YXRpb25Db250YWluZXJcIj5cbiAgICAgICAgICA8aGEtY29sb3ItcGlja2VyXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29sb3JcIlxuICAgICAgICAgICAgb24tY29sb3JzZWxlY3RlZD1cImNvbG9yUGlja2VkXCJcbiAgICAgICAgICAgIGRlc2lyZWQtaHMtY29sb3I9XCJ7e2NvbG9yUGlja2VyQ29sb3J9fVwiXG4gICAgICAgICAgICB0aHJvdHRsZT1cIjUwMFwiXG4gICAgICAgICAgICBodWUtc2VnbWVudHM9XCJ7e2h1ZVNlZ21lbnRzfX1cIlxuICAgICAgICAgICAgc2F0dXJhdGlvbi1zZWdtZW50cz1cInt7c2F0dXJhdGlvblNlZ21lbnRzfX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWNvbG9yLXBpY2tlcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJtZGk6cGFsZXR0ZVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cInNlZ21lbnRDbGlja1wiXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgc2VnbWVudGF0aW9uQnV0dG9uXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgZWZmZWN0X2xpc3RcIj5cbiAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuZWZmZWN0JyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3RdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJlZmZlY3RDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVmZmVjdF9saXN0XV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZXh0cmEtZmlsdGVycz1cImJyaWdodG5lc3MsY29sb3JfdGVtcCx3aGl0ZV92YWx1ZSxlZmZlY3RfbGlzdCxlZmZlY3QsaHNfY29sb3IscmdiX2NvbG9yLHh5X2NvbG9yLG1pbl9taXJlZHMsbWF4X21pcmVkc1wiXG4gICAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBicmlnaHRuZXNzU2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGN0U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIHd2U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGh1ZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDI0LFxuICAgICAgfSxcblxuICAgICAgc2F0dXJhdGlvblNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDgsXG4gICAgICB9LFxuXG4gICAgICBjb2xvclBpY2tlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgYnJpZ2h0bmVzc1NsaWRlclZhbHVlOiAwLFxuICAgIH07XG5cbiAgICBpZiAobmV3VmFsICYmIG5ld1ZhbC5zdGF0ZSA9PT0gXCJvblwiKSB7XG4gICAgICBwcm9wcy5icmlnaHRuZXNzU2xpZGVyVmFsdWUgPSBuZXdWYWwuYXR0cmlidXRlcy5icmlnaHRuZXNzO1xuICAgICAgcHJvcHMuY3RTbGlkZXJWYWx1ZSA9IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvbG9yX3RlbXA7XG4gICAgICBwcm9wcy53dlNsaWRlclZhbHVlID0gbmV3VmFsLmF0dHJpYnV0ZXMud2hpdGVfdmFsdWU7XG4gICAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3IpIHtcbiAgICAgICAgcHJvcHMuY29sb3JQaWNrZXJDb2xvciA9IHtcbiAgICAgICAgICBoOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclswXSxcbiAgICAgICAgICBzOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclsxXSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIEZFQVRVUkVfQ0xBU1NfTkFNRVMpXTtcbiAgICBpZiAoc3RhdGVPYmogJiYgc3RhdGVPYmouc3RhdGUgPT09IFwib25cIikge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiaXMtb25cIik7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iaiAmJiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJpcy11bmF2YWlsYWJsZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBlZmZlY3RDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3Q7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGVmZmVjdDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgYnJpZ2h0bmVzc1NsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgYnJpID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oYnJpKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBicmlnaHRuZXNzOiBicmksXG4gICAgfSk7XG4gIH1cblxuICBjdFNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgY3QgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTihjdCkpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgY29sb3JfdGVtcDogY3QsXG4gICAgfSk7XG4gIH1cblxuICB3dlNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgd3YgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTih3dikpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgd2hpdGVfdmFsdWU6IHd2LFxuICAgIH0pO1xuICB9XG5cbiAgc2VnbWVudENsaWNrKCkge1xuICAgIGlmICh0aGlzLmh1ZVNlZ21lbnRzID09PSAyNCAmJiB0aGlzLnNhdHVyYXRpb25TZWdtZW50cyA9PT0gOCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDAsIHNhdHVyYXRpb25TZWdtZW50czogMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDI0LCBzYXR1cmF0aW9uU2VnbWVudHM6IDggfSk7XG4gICAgfVxuICB9XG5cbiAgc2VydmljZUNoYW5nZUNvbG9yKGhhc3MsIGVudGl0eUlkLCBjb2xvcikge1xuICAgIGhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgIGhzX2NvbG9yOiBbY29sb3IuaCwgY29sb3IucyAqIDEwMF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBuZXcgY29sb3IgaGFzIGJlZW4gcGlja2VkLlxuICAgKiBzaG91bGQgYmUgdGhyb3R0bGVkIHdpdGggdGhlICd0aHJvdHRsZT0nIGF0dHJpYnV0ZSBvZiB0aGUgY29sb3IgcGlja2VyXG4gICAqL1xuICBjb2xvclBpY2tlZChldikge1xuICAgIHRoaXMuc2VydmljZUNoYW5nZUNvbG9yKHRoaXMuaGFzcywgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsIGV2LmRldGFpbC5ocyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWxpZ2h0XCIsIE1vcmVJbmZvTGlnaHQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE1vcmVJbmZvTG9jayBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2VudGVyZWRDb2RlfX1cIlxuICAgICAgICAgIHBhdHRlcm49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJjYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwidW5sb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay51bmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBvbi1jbGljaz1cImNhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJsb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiY29kZV9mb3JtYXRcIlxuICAgICAgPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGVyZWRDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgaXNMb2NrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gbmV3VmFsLnN0YXRlID09PSBcImxvY2tlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLmVudGVyZWRDb2RlLFxuICAgIH07XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibG9ja1wiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tbG9ja1wiLCBNb3JlSW5mb0xvY2spO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9NZWRpYVBsYXllciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLm1lZGlhLXN0YXRlIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2hpZ2hsaWdodF0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvbHVtZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLXZvbHVtZV9sZXZlbCAudm9sdW1lIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaXJvbi1pY29uLnNvdXJjZS1pbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51LnNvdXJjZS1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpwb3dlclwiXG4gICAgICAgICAgICAgIGhpZ2hsaWdodCQ9XCJbW3BsYXllck9iai5pc09mZl1dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVUb2dnbGVQb3dlclwiXG4gICAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlUG93ZXJCdXR0b24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICBpZj1cIltbY29tcHV0ZVNob3dQbGF5YmFja0NvbnRyb2xzKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtcHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNQcmV2aW91c1RyYWNrXV1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cIltbY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVBsYXliYWNrQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIWNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0PVwiXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtbmV4dFwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVOZXh0XCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzTmV4dFRyYWNrXV1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFZPTFVNRSAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lX2J1dHRvbnMgY2VudGVyIGhvcml6b250YWwgbGF5b3V0XCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVZvbHVtZUJ1dHRvbnMocGxheWVyT2JqKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVWb2x1bWVUYXBcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dm9sdW1lLW9mZlwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpZD1cInZvbHVtZURvd25cIlxuICAgICAgICAgICAgZGlzYWJsZWQkPVwiW1twbGF5ZXJPYmouaXNNdXRlZF1dXCJcbiAgICAgICAgICAgIG9uLW1vdXNlZG93bj1cImhhbmRsZVZvbHVtZURvd25cIlxuICAgICAgICAgICAgb24tdG91Y2hzdGFydD1cImhhbmRsZVZvbHVtZURvd25cIlxuICAgICAgICAgICAgb24tdG91Y2hlbmQ9XCJoYW5kbGVWb2x1bWVUb3VjaEVuZFwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp2b2x1bWUtbWVkaXVtXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGlkPVwidm9sdW1lVXBcIlxuICAgICAgICAgICAgZGlzYWJsZWQkPVwiW1twbGF5ZXJPYmouaXNNdXRlZF1dXCJcbiAgICAgICAgICAgIG9uLW1vdXNlZG93bj1cImhhbmRsZVZvbHVtZVVwXCJcbiAgICAgICAgICAgIG9uLXRvdWNoc3RhcnQ9XCJoYW5kbGVWb2x1bWVVcFwiXG4gICAgICAgICAgICBvbi10b3VjaGVuZD1cImhhbmRsZVZvbHVtZVRvdWNoRW5kXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnZvbHVtZS1oaWdoXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInZvbHVtZSBjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNWb2x1bWVTZXRdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlVm9sdW1lVGFwXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbW3BsYXllck9iai5zdXBwb3J0c1ZvbHVtZUJ1dHRvbnNdXVwiXG4gICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlTXV0ZVZvbHVtZUljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgdmFsdWU9XCJbW3BsYXllck9iai52b2x1bWVTbGlkZXJWYWx1ZV1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cInZvbHVtZVNsaWRlckNoYW5nZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIGlnbm9yZS1iYXItdG91Y2g9XCJcIlxuICAgICAgICAgICAgZGlyPVwie3tydGx9fVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBTT1VSQ0UgUElDS0VSIC0tPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlU2VsZWN0U291cmNlKHBsYXllck9iaildXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aXJvbi1pY29uIGNsYXNzPVwic291cmNlLWlucHV0XCIgaWNvbj1cImhhc3M6bG9naW4tdmFyaWFudFwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBjbGFzcz1cImZsZXggc291cmNlLWlucHV0XCJcbiAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci5zb3VyY2UnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW3BsYXllck9iai5zb3VyY2VdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJoYW5kbGVTb3VyY2VDaGFuZ2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1twbGF5ZXJPYmouc291cmNlTGlzdF1dXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBTT1VORCBNT0RFIFBJQ0tFUiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFjb21wdXRlSGlkZVNlbGVjdFNvdW5kTW9kZShwbGF5ZXJPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMgbGF5b3V0IGhvcml6b250YWwganVzdGlmaWVkXCI+XG4gICAgICAgICAgICA8aXJvbi1pY29uIGNsYXNzPVwic291cmNlLWlucHV0XCIgaWNvbj1cImhhc3M6bXVzaWMtbm90ZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IHNvdXJjZS1pbnB1dFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci5zb3VuZF9tb2RlJyldXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbcGxheWVyT2JqLnNvdW5kTW9kZV1dXCJcbiAgICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwiaGFuZGxlU291bmRNb2RlQ2hhbmdlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3BsYXllck9iai5zb3VuZE1vZGVMaXN0XV1cIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBUVFMgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVRUUyh0dHNMb2FkZWQsIHBsYXllck9iaildXVwiXG4gICAgICAgICAgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBlbmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBpZD1cInR0c0lucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5tZWRpYV9wbGF5ZXIudGV4dF90b19zcGVhaycpXV1cIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t0dHNNZXNzYWdlfX1cIlxuICAgICAgICAgICAgb24ta2V5ZG93bj1cInR0c0NoZWNrRm9yRW50ZXJcIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2VuZFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cInNlbmRUVFNcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJwbGF5ZXJPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICB0dHNMb2FkZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVRUU0xvYWRlZChoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgdHRzTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVExEaXJlY3Rpb24oaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBwbGF5ZXJPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJ2b2x1bWVfbGV2ZWxcIl0pO1xuICB9XG5cbiAgY29tcHV0ZU11dGVWb2x1bWVJY29uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNNdXRlZCA/IFwiaGFzczp2b2x1bWUtb2ZmXCIgOiBcImhhc3M6dm9sdW1lLWhpZ2hcIjtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlVm9sdW1lQnV0dG9ucyhwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXBsYXllck9iai5zdXBwb3J0c1ZvbHVtZUJ1dHRvbnMgfHwgcGxheWVyT2JqLmlzT2ZmO1xuICB9XG5cbiAgY29tcHV0ZVNob3dQbGF5YmFja0NvbnRyb2xzKHBsYXllck9iaikge1xuICAgIHJldHVybiAhcGxheWVyT2JqLmlzT2ZmICYmIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2w7XG4gIH1cblxuICBjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopIHtcbiAgICBpZiAocGxheWVyT2JqLmlzUGxheWluZykge1xuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BhdXNlID8gXCJoYXNzOnBhdXNlXCIgOiBcImhhc3M6c3RvcFwiO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLmhhc01lZGlhQ29udHJvbCB8fCBwbGF5ZXJPYmouaXNPZmYgfHwgcGxheWVyT2JqLmlzSWRsZSkge1xuICAgICAgaWYgKFxuICAgICAgICBwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sICYmXG4gICAgICAgIHBsYXllck9iai5zdXBwb3J0c1BhdXNlICYmXG4gICAgICAgICFwbGF5ZXJPYmouaXNQYXVzZWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJoYXNzOnBsYXktcGF1c2VcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbGF5ZXJPYmouc3VwcG9ydHNQbGF5ID8gXCJoYXNzOnBsYXlcIiA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gcGxheWVyT2JqLmlzT2ZmXG4gICAgICA/ICFwbGF5ZXJPYmouc3VwcG9ydHNUdXJuT25cbiAgICAgIDogIXBsYXllck9iai5zdXBwb3J0c1R1cm5PZmY7XG4gIH1cblxuICBjb21wdXRlSGlkZVNlbGVjdFNvdXJjZShwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLmlzT2ZmIHx8XG4gICAgICAhcGxheWVyT2JqLnN1cHBvcnRzU2VsZWN0U291cmNlIHx8XG4gICAgICAhcGxheWVyT2JqLnNvdXJjZUxpc3RcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVTZWxlY3RTb3VuZE1vZGUocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBsYXllck9iai5pc09mZiB8fFxuICAgICAgIXBsYXllck9iai5zdXBwb3J0c1NlbGVjdFNvdW5kTW9kZSB8fFxuICAgICAgIXBsYXllck9iai5zb3VuZE1vZGVMaXN0XG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlVFRTKHR0c0xvYWRlZCwgcGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICF0dHNMb2FkZWQgfHwgIXBsYXllck9iai5zdXBwb3J0c1BsYXlNZWRpYTtcbiAgfVxuXG4gIGNvbXB1dGVUVFNMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcInR0c1wiKTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVBvd2VyKCkge1xuICAgIHRoaXMucGxheWVyT2JqLnRvZ2dsZVBvd2VyKCk7XG4gIH1cblxuICBoYW5kbGVQcmV2aW91cygpIHtcbiAgICB0aGlzLnBsYXllck9iai5wcmV2aW91c1RyYWNrKCk7XG4gIH1cblxuICBoYW5kbGVQbGF5YmFja0NvbnRyb2woKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoubWVkaWFQbGF5UGF1c2UoKTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoubmV4dFRyYWNrKCk7XG4gIH1cblxuICBoYW5kbGVTb3VyY2VDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLnBsYXllck9iaikgcmV0dXJuO1xuXG4gICAgdmFyIG9sZFZhbCA9IHRoaXMucGxheWVyT2JqLnNvdXJjZTtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMucGxheWVyT2JqLnNlbGVjdFNvdXJjZShuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlU291bmRNb2RlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5wbGF5ZXJPYmopIHJldHVybjtcblxuICAgIHZhciBvbGRWYWwgPSB0aGlzLnBsYXllck9iai5zb3VuZE1vZGU7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLnBsYXllck9iai5zZWxlY3RTb3VuZE1vZGUobmV3VmFsKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVRhcCgpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lTXV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBsYXllck9iai52b2x1bWVNdXRlKCF0aGlzLnBsYXllck9iai5pc011dGVkKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVRvdWNoRW5kKGV2KSB7XG4gICAgLyogd2hlbiB0b3VjaCBlbmRzLCB3ZSBtdXN0IHByZXZlbnQgdGhpcyBmcm9tXG4gICAgICogYmVjb21pbmcgYSBtb3VzZWRvd24sIHVwLCBjbGljayBieSBlbXVsYXRpb24gKi9cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVXAoKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy4kLnZvbHVtZVVwO1xuICAgIHRoaXMuaGFuZGxlVm9sdW1lV29ya2VyKFwidm9sdW1lX3VwXCIsIG9iaiwgdHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVWb2x1bWVEb3duKCkge1xuICAgIGNvbnN0IG9iaiA9IHRoaXMuJC52b2x1bWVEb3duO1xuICAgIHRoaXMuaGFuZGxlVm9sdW1lV29ya2VyKFwidm9sdW1lX2Rvd25cIiwgb2JqLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVdvcmtlcihzZXJ2aWNlLCBvYmosIGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlIHx8IChvYmogIT09IHVuZGVmaW5lZCAmJiBvYmoucG9pbnRlckRvd24pKSB7XG4gICAgICB0aGlzLnBsYXllck9iai5jYWxsU2VydmljZShzZXJ2aWNlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoc2VydmljZSwgb2JqLCBmYWxzZSksIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgdm9sdW1lU2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHZvbFBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3Qgdm9sdW1lID0gdm9sUGVyY2VudGFnZSA+IDAgPyB2b2xQZXJjZW50YWdlIC8gMTAwIDogMDtcbiAgICB0aGlzLnBsYXllck9iai5zZXRWb2x1bWUodm9sdW1lKTtcbiAgfVxuXG4gIHR0c0NoZWNrRm9yRW50ZXIoZXYpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHRoaXMuc2VuZFRUUygpO1xuICB9XG5cbiAgc2VuZFRUUygpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMuaGFzcy5zZXJ2aWNlcy50dHM7XG4gICAgY29uc3Qgc2VydmljZUtleXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcykuc29ydCgpO1xuICAgIGxldCBzZXJ2aWNlO1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNlcnZpY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2VydmljZUtleXNbaV0uaW5kZXhPZihcIl9zYXlcIikgIT09IC0xKSB7XG4gICAgICAgIHNlcnZpY2UgPSBzZXJ2aWNlS2V5c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwidHRzXCIsIHNlcnZpY2UsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLnR0c01lc3NhZ2UsXG4gICAgfSk7XG4gICAgdGhpcy50dHNNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLiQudHRzSW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tbWVkaWFfcGxheWVyXCIsIE1vcmVJbmZvTWVkaWFQbGF5ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvU2NyaXB0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgdmVydGljYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zY3JpcHQubGFzdF9hY3Rpb24nKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmxhc3RfYWN0aW9uXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXNjcmlwdFwiLCBNb3JlSW5mb1NjcmlwdCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcblxuY2xhc3MgTW9yZUluZm9TdW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlT3JkZXIocmlzaW5nRGF0ZSwgc2V0dGluZ0RhdGUpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgICA8c3Bhbj5bW2l0ZW1DYXB0aW9uKGl0ZW0pXV08L3NwYW4+XG4gICAgICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkYXRldGltZS1vYmo9XCJbW2l0ZW1EYXRlKGl0ZW0pXV1cIlxuICAgICAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW2l0ZW1WYWx1ZShpdGVtKV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWVudHJ5IGxheW91dCBqdXN0aWZpZWQgaG9yaXpvbnRhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4uZWxldmF0aW9uJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVsZXZhdGlvbl1dPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgcmlzaW5nRGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSaXNpbmcoc3RhdGVPYmopXCIsXG4gICAgICB9LFxuXG4gICAgICBzZXR0aW5nRGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTZXR0aW5nKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVJpc2luZyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgRGF0ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLm5leHRfcmlzaW5nKTtcbiAgfVxuXG4gIGNvbXB1dGVTZXR0aW5nKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXRlT2JqLmF0dHJpYnV0ZXMubmV4dF9zZXR0aW5nKTtcbiAgfVxuXG4gIGNvbXB1dGVPcmRlcihyaXNpbmdEYXRlLCBzZXR0aW5nRGF0ZSkge1xuICAgIHJldHVybiByaXNpbmdEYXRlID4gc2V0dGluZ0RhdGUgPyBbXCJzZXRcIiwgXCJyaXNcIl0gOiBbXCJyaXNcIiwgXCJzZXRcIl07XG4gIH1cblxuICBpdGVtQ2FwdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFwicmlzXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4ucmlzaW5nXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuc3VuLnNldHRpbmdcIik7XG4gIH1cblxuICBpdGVtRGF0ZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwicmlzXCIgPyB0aGlzLnJpc2luZ0RhdGUgOiB0aGlzLnNldHRpbmdEYXRlO1xuICB9XG5cbiAgaXRlbVZhbHVlKHR5cGUpIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZSh0aGlzLml0ZW1EYXRlKHR5cGUpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1zdW5cIiwgTW9yZUluZm9TdW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9VcGRhdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9pbnN0YWxsYXRpb24vdXBkYXRpbmcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnVwZGF0ZXIudGl0bGUnKV1dPC9hXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWxlYXNlTm90ZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5yZWxlYXNlX25vdGVzIHx8XG4gICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvaW5zdGFsbGF0aW9uL3VwZGF0aW5nL1wiXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tdXBkYXRlclwiLCBNb3JlSW5mb1VwZGF0ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuY2xhc3MgTW9yZUluZm9WYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtc3VidGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1zdWJ0aXRsZVwiPlN0YXR1czogPC9zcGFuXG4gICAgICAgICAgPjxzcGFuPjxzdHJvbmc+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXR1c11dPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgID48aXJvbi1pY29uIGljb249XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeV9pY29uXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5X2xldmVsXV0gJTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaildXVwiPlxuICAgICAgICA8cD48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtc3VidGl0bGVcIj5WYWN1dW0gY2xlYW5lciBjb21tYW5kczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdXBwb3J0c1N0YXJ0KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uU3RhcnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwYXVzZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJvblBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3VwcG9ydHNTdGFydChzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5LXBhdXNlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUGxheVBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdG9wKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTdG9wXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ2xlYW5TcG90KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJvb21cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xlYW5TcG90XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhbiBzcG90XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzTG9jYXRlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25Mb2NhdGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxvY2F0ZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpob21lLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUmV0dXJuSG9tZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmV0dXJuIGhvbWVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzRmFuU3BlZWQoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFuIHNwZWVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZF1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImZhblNwZWVkQ2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1zZWxmOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxLjNlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgPjxpcm9uLWljb24gaWNvbj1cImhhc3M6ZmFuXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRdXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiZmFuX3NwZWVkLGZhbl9zcGVlZF9saXN0LHN0YXR1cyxiYXR0ZXJ5X2xldmVsLGJhdHRlcnlfaWNvblwiXG4gICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3VwcG9ydHNQYXVzZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBzdXBwb3J0c0ZhblNwZWVkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgc3VwcG9ydHNMb2NhdGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgc3VwcG9ydHNDbGVhblNwb3Qoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIHN1cHBvcnRzU3RhcnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKTtcbiAgfVxuXG4gIHN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNikgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTAyNCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKVxuICAgICk7XG4gIH1cblxuICBmYW5TcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZDtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInNldF9mYW5fc3BlZWRcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGZhbl9zcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0b3BcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGxheVBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0X3BhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInBhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0XCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvY2F0ZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJsb2NhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYW5TcG90KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcImNsZWFuX3Nwb3RcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmV0dXJuSG9tZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJyZXR1cm5fdG9fYmFzZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby12YWN1dW1cIiwgTW9yZUluZm9WYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS13YXRlcl9oZWF0ZXItY29udHJvbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgZmVhdHVyZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XYXRlckhlYXRlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuY29udGFpbmVyLW9wZXJhdGlvbl9saXN0LFxuXG4gICAgICAgIC5oYXMtYXdheV9tb2RlIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuaGFzLXRhcmdldF90ZW1wZXJhdHVyZSAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuaGFzLW9wZXJhdGlvbl9tb2RlIC5jb250YWluZXItb3BlcmF0aW9uX2xpc3QsXG5cbiAgICAgICAgLmNvbnRhaW5lci1vcGVyYXRpb25fbGlzdCBpcm9uLWljb24sXG5cbiAgICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICB9XG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgfVxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5vcGVyYXRpb25fbW9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIudGFyZ2V0X3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dXCJcbiAgICAgICAgICAgICAgICB1bml0cz1cIltbaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVdXVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIltbY29tcHV0ZVRlbXBlcmF0dXJlU3RlcFNpemUoaGFzcywgc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcF1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXBdXVwiXG4gICAgICAgICAgICAgICAgb24tY2hhbmdlPVwidGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXdhdGVyX2hlYXRlci1jb250cm9sPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3BlcmF0aW9uX2xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLm9wZXJhdGlvbicpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlXV1cIlxuICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX2xpc3RdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPltbX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzQXdheU1vZGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF3YXlfbW9kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuYXdheV9tb2RlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAgICAgICBjaGVja2VkPVwiW1thd2F5VG9nZ2xlQ2hlY2tlZF1dXCJcbiAgICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJhd2F5VG9nZ2xlQ2hhbmdlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBhd2F5VG9nZ2xlQ2hlY2tlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgYXdheVRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmF3YXlfbW9kZSA9PT0gXCJvblwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgIHRpbWVPdXQuYWZ0ZXIoNTAwKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVUZW1wZXJhdHVyZVN0ZXBTaXplKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfc3RlcCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfc3RlcDtcbiAgICB9XG4gICAgaWYgKGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlLmluZGV4T2YoXCJGXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwLjU7XG4gIH1cblxuICBzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3J0c1RlbXBlcmF0dXJlKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN1cHBvcnRzVGVtcGVyYXR1cmUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxKSAmJlxuICAgICAgdHlwZW9mIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgPT09IFwibnVtYmVyXCJcbiAgICApO1xuICB9XG5cbiAgc3VwcG9ydHNPcGVyYXRpb25Nb2RlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMik7XG4gIH1cblxuICBzdXBwb3J0c0F3YXlNb2RlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IF9mZWF0dXJlQ2xhc3NOYW1lcyA9IHtcbiAgICAgIDE6IFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgMjogXCJoYXMtb3BlcmF0aW9uX21vZGVcIixcbiAgICAgIDQ6IFwiaGFzLWF3YXlfbW9kZVwiLFxuICAgIH07XG5cbiAgICB2YXIgY2xhc3NlcyA9IFtmZWF0dXJlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgX2ZlYXR1cmVDbGFzc05hbWVzKV07XG5cbiAgICBjbGFzc2VzLnB1c2goXCJtb3JlLWluZm8td2F0ZXJfaGVhdGVyXCIpO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICB0YXJnZXRUZW1wZXJhdHVyZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGVtcGVyYXR1cmUgPT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbFNlcnZpY2VIZWxwZXIoXCJzZXRfdGVtcGVyYXR1cmVcIiwgeyB0ZW1wZXJhdHVyZTogdGVtcGVyYXR1cmUgfSk7XG4gIH1cblxuICBhd2F5VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hd2F5X21vZGUgPT09IFwib25cIjtcbiAgICBjb25zdCBuZXdWYWwgPSBldi50YXJnZXQuY2hlY2tlZDtcbiAgICBpZiAob2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlSGVscGVyKFwic2V0X2F3YXlfbW9kZVwiLCB7IGF3YXlfbW9kZTogbmV3VmFsIH0pO1xuICB9XG5cbiAgaGFuZGxlT3BlcmF0aW9ubW9kZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX21vZGU7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG4gICAgdGhpcy5jYWxsU2VydmljZUhlbHBlcihcInNldF9vcGVyYXRpb25fbW9kZVwiLCB7XG4gICAgICBvcGVyYXRpb25fbW9kZTogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgY2FsbFNlcnZpY2VIZWxwZXIoc2VydmljZSwgZGF0YSkge1xuICAgIC8vIFdlIGNhbGwgc3RhdGVDaGFuZ2VkIGFmdGVyIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlLXN5bmMgdGhlIGlucHV0c1xuICAgIC8vIHdpdGggdGhlIHN0YXRlLiBJdCB3aWxsIGJlIG91dCBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZW50aXR5IHRvIGJlIHR1cm5lZCBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZyxcbiAgICAvLyB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwid2F0ZXJfaGVhdGVyXCIsIHNlcnZpY2UsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZU9iakNoYW5nZWQodGhpcy5zdGF0ZU9iaik7XG4gICAgfSk7XG4gIH1cblxuICBfbG9jYWxpemVPcGVyYXRpb25Nb2RlKGxvY2FsaXplLCBtb2RlKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZS53YXRlcl9oZWF0ZXIuJHttb2RlfWApIHx8IG1vZGU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiLCBNb3JlSW5mb1dhdGVySGVhdGVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb1dlYXRoZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGlyb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwIDhweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlbXAsXG4gICAgICAgIC50ZW1wbG93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGVtcGxvdyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6dGhlcm1vbWV0ZXJcIj48L2lyb24taWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy50ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlXV0gW1tnZXRVbml0KCd0ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc3N1cmUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOmdhdWdlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmFpcl9wcmVzc3VyZScpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlXV0gW1tnZXRVbml0KCdhaXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHkpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOndhdGVyLXBlcmNlbnRcIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMuaHVtaWRpdHknKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHldXSAlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6d2VhdGhlci13aW5keVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy53aW5kX3NwZWVkJyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBbW2dldFdpbmQoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkLFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX2JlYXJpbmcsIGxvY2FsaXplKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMudmlzaWJpbGl0eSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6ZXllXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLnZpc2liaWxpdHknKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMudmlzaWJpbGl0eV1dIFtbZ2V0VW5pdCgnbGVuZ3RoJyldXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0XV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5bW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuZm9yZWNhc3QnKV1dOjwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3RdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLmNvbmRpdGlvbildXVwiPlxuICAgICAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJbW2dldFdlYXRoZXJJY29uKGl0ZW0uY29uZGl0aW9uKV1dXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfc2hvd1ZhbHVlKGl0ZW0udGVtcGxvdyldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPltbY29tcHV0ZURhdGVUaW1lKGl0ZW0uZGF0ZXRpbWUpXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5bW2NvbXB1dGVEYXRlKGl0ZW0uZGF0ZXRpbWUpXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsb3dcIj5cbiAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGxvd11dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+XG4gICAgICAgICAgICAgIFtbaXRlbS50ZW1wZXJhdHVyZV1dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwic3RhdGVPYmouYXR0cmlidXRlcy5hdHRyaWJ1dGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRpb25cIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb25dXTwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FyZGluYWxEaXJlY3Rpb25zID0gW1xuICAgICAgXCJOXCIsXG4gICAgICBcIk5ORVwiLFxuICAgICAgXCJORVwiLFxuICAgICAgXCJFTkVcIixcbiAgICAgIFwiRVwiLFxuICAgICAgXCJFU0VcIixcbiAgICAgIFwiU0VcIixcbiAgICAgIFwiU1NFXCIsXG4gICAgICBcIlNcIixcbiAgICAgIFwiU1NXXCIsXG4gICAgICBcIlNXXCIsXG4gICAgICBcIldTV1wiLFxuICAgICAgXCJXXCIsXG4gICAgICBcIldOV1wiLFxuICAgICAgXCJOV1wiLFxuICAgICAgXCJOTldcIixcbiAgICAgIFwiTlwiLFxuICAgIF07XG4gICAgdGhpcy53ZWF0aGVySWNvbnMgPSB7XG4gICAgICBcImNsZWFyLW5pZ2h0XCI6IFwiaGFzczp3ZWF0aGVyLW5pZ2h0XCIsXG4gICAgICBjbG91ZHk6IFwiaGFzczp3ZWF0aGVyLWNsb3VkeVwiLFxuICAgICAgZm9nOiBcImhhc3M6d2VhdGhlci1mb2dcIixcbiAgICAgIGhhaWw6IFwiaGFzczp3ZWF0aGVyLWhhaWxcIixcbiAgICAgIGxpZ2h0bmluZzogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nXCIsXG4gICAgICBcImxpZ2h0bmluZy1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmctcmFpbnlcIixcbiAgICAgIHBhcnRseWNsb3VkeTogXCJoYXNzOndlYXRoZXItcGFydGx5Y2xvdWR5XCIsXG4gICAgICBwb3VyaW5nOiBcImhhc3M6d2VhdGhlci1wb3VyaW5nXCIsXG4gICAgICByYWlueTogXCJoYXNzOndlYXRoZXItcmFpbnlcIixcbiAgICAgIHNub3d5OiBcImhhc3M6d2VhdGhlci1zbm93eVwiLFxuICAgICAgXCJzbm93eS1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1zbm93eS1yYWlueVwiLFxuICAgICAgc3Vubnk6IFwiaGFzczp3ZWF0aGVyLXN1bm55XCIsXG4gICAgICB3aW5keTogXCJoYXNzOndlYXRoZXItd2luZHlcIixcbiAgICAgIFwid2luZHktdmFyaWFudFwiOiBcImhhc3M6d2VhdGhlci13aW5keS12YXJpYW50XCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlVGltZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHtcbiAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH1cblxuICBnZXRVbml0KG1lYXN1cmUpIHtcbiAgICBjb25zdCBsZW5ndGhVbml0ID0gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbS5sZW5ndGggfHwgXCJcIjtcbiAgICBzd2l0Y2ggKG1lYXN1cmUpIHtcbiAgICAgIGNhc2UgXCJhaXJfcHJlc3N1cmVcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwiaFBhXCIgOiBcImluSGdcIjtcbiAgICAgIGNhc2UgXCJsZW5ndGhcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQ7XG4gICAgICBjYXNlIFwicHJlY2lwaXRhdGlvblwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJtbVwiIDogXCJpblwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW1bbWVhc3VyZV0gfHwgXCJcIjtcbiAgICB9XG4gIH1cblxuICB3aW5kQmVhcmluZ1RvVGV4dChkZWdyZWUpIHtcbiAgICBjb25zdCBkZWdyZWVudW0gPSBwYXJzZUludChkZWdyZWUpO1xuICAgIGlmIChpc0Zpbml0ZShkZWdyZWVudW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJkaW5hbERpcmVjdGlvbnNbKCgoZGVncmVlbnVtICsgMTEuMjUpIC8gMjIuNSkgfCAwKSAlIDE2XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZ3JlZTtcbiAgfVxuXG4gIGdldFdpbmQoc3BlZWQsIGJlYXJpbmcsIGxvY2FsaXplKSB7XG4gICAgaWYgKGJlYXJpbmcgIT0gbnVsbCkge1xuICAgICAgY29uc3QgY2FyZGluYWxEaXJlY3Rpb24gPSB0aGlzLndpbmRCZWFyaW5nVG9UZXh0KGJlYXJpbmcpO1xuICAgICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaCAoJHtsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNhcmQud2VhdGhlci5jYXJkaW5hbF9kaXJlY3Rpb24uJHtjYXJkaW5hbERpcmVjdGlvbi50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICkgfHwgY2FyZGluYWxEaXJlY3Rpb259KWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtzcGVlZH0gJHt0aGlzLmdldFVuaXQoXCJsZW5ndGhcIil9L2hgO1xuICB9XG5cbiAgZ2V0V2VhdGhlckljb24oY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMud2VhdGhlckljb25zW2NvbmRpdGlvbl07XG4gIH1cblxuICBfc2hvd1ZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8td2VhdGhlclwiLCBNb3JlSW5mb1dlYXRoZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgXCIuL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50XCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNvbnN0IERPTUFJTlNfTk9fSU5GTyA9IFtcImNhbWVyYVwiLCBcImNvbmZpZ3VyYXRvclwiLCBcImhpc3RvcnlfZ3JhcGhcIl07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0NvbnRyb2xzIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGUtZGlhbG9nXCI+XG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtaGlzdG9yeS1jaGFydHMge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDUxcHgpIGFuZCAobWluLWhlaWdodDogNTAxcHgpIHtcbiAgICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZG9tYWluPVwiY2FtZXJhXCJdKSBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwIC0yNHB4IC0yMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgZGlhbG9nLWRpc21pc3M9XCJcIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiBtYWluLXRpdGxlPVwiXCIgb24tY2xpY2s9XCJlbmxhcmdlXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhbkNvbmZpZ3VyZV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9nb3RvU2V0dGluZ3NcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBpbi1kaWFsb2c9XCJcIlxuICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIGRpYWxvZy1lbGVtZW50PVwiW1tkaWFsb2dFbGVtZW50XV1cIj5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVNob3dIaXN0b3J5Q29tcG9uZW50KGhhc3MsIHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBmaWx0ZXItdHlwZT1cInJlY2VudC1lbnRpdHlcIlxuICAgICAgICAgICAgZW50aXR5LWlkPVwiW1tzdGF0ZU9iai5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICBkYXRhPVwie3tfc3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZz1cInt7X3N0YXRlSGlzdG9yeUxvYWRpbmd9fVwiXG4gICAgICAgICAgICBjYWNoZS1jb25maWc9XCJbW19jYWNoZUNvbmZpZ11dXCJcbiAgICAgICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgaGlzdG9yeS1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5TG9hZGluZ11dXCJcbiAgICAgICAgICAgIHVwLXRvLW5vd1xuICAgICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnRzPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRlbnRcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgID48L21vcmUtaW5mby1jb250ZW50PlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGlhbG9nRWxlbWVudDogT2JqZWN0LFxuICAgICAgY2FuQ29uZmlndXJlOiBCb29sZWFuLFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgX3N0YXRlSGlzdG9yeUxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2NhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiA2MCxcbiAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICBob3Vyc1RvU2hvdzogMjQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGVubGFyZ2UoKSB7XG4gICAgdGhpcy5sYXJnZSA9ICF0aGlzLmxhcmdlO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93U3RhdGVJbmZvKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuICFzdGF0ZU9iaiB8fCAhRE9NQUlOU19OT19JTkZPLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikpO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBoYXNzICYmXG4gICAgICBzdGF0ZU9iaiAmJlxuICAgICAgaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJoaXN0b3J5XCIpICYmXG4gICAgICAhRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWS5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IFwiXCI7XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhY2hlQ29uZmlnLmNhY2hlS2V5ICE9PSBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gKSB7XG4gICAgICB0aGlzLl9jYWNoZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NhY2hlQ29uZmlnLCB7XG4gICAgICAgIGNhY2hlS2V5OiBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IFwic2V0dGluZ3NcIiB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRyb2xzXCIsIE1vcmVJbmZvQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb1NldHRpbmdzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgLyogdG8gZml0IHNhdmUgYnV0dG9uICovXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXRvb2xiYXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICBvbi1jbGljaz1cIl9iYWNrVGFwcGVkXCJcbiAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+W1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zYXZlXCIgZGlzYWJsZWQ9XCJbW19jb21wdXRlSW52YWxpZChfZW50aXR5SWQpXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5zYXZlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2FwcC10b29sYmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X25hbWV9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5uYW1lJyldXVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X2VudGl0eUlkfX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3MuZW50aXR5X2lkJyldXVwiXG4gICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkRvbWFpbiBuZWVkcyB0byBzdGF5IHRoZSBzYW1lXCJcbiAgICAgICAgICBpbnZhbGlkPVwiW1tfY29tcHV0ZUludmFsaWQoX2VudGl0eUlkKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuXG4gICAgICByZWdpc3RyeUluZm86IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfcmVnaXN0cnlJbmZvQ2hhbmdlZFwiLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBfbmFtZTogU3RyaW5nLFxuICAgICAgX2VudGl0eUlkOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaikgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgX2NvbXB1dGVJbnZhbGlkKGVudGl0eUlkKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVEb21haW4odGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpICE9PSBjb21wdXRlRG9tYWluKGVudGl0eUlkKTtcbiAgfVxuXG4gIF9yZWdpc3RyeUluZm9DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBuZXdWYWwubmFtZSxcbiAgICAgICAgX2VudGl0eUlkOiBuZXdWYWwuZW50aXR5X2lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBcIlwiLFxuICAgICAgICBfZW50aXR5SWQ6IFwiXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfYmFja1RhcHBlZCgpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IG51bGwgfSk7XG4gIH1cblxuICBhc3luYyBfc2F2ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICAgIG5ld19lbnRpdHlfaWQ6IHRoaXMuX2VudGl0eUlkLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLnJlZ2lzdHJ5SW5mbyA9IGluZm87XG5cbiAgICAgIC8vIEtlZXAgdGhlIG1vcmUgaW5mbyBkaWFsb2cgb3BlbiBhdCB0aGUgbmV3IGVudGl0eS5cbiAgICAgIGlmICh0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCAhPT0gdGhpcy5fZW50aXR5SWQpIHtcbiAgICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5fZW50aXR5SWQgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgc2F2ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2V0dGluZ3NcIiwgTW9yZUluZm9TZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBQYXBlckRpYWxvZ0JlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3JcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi9ldmVudHMtbWl4aW5cIjtcbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gICAgICBbRXZlbnRzTWl4aW4sIFBhcGVyRGlhbG9nQmVoYXZpb3JdLFxuICAgICAgc3VwZXJDbGFzc1xuICAgICkge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpdGhCYWNrZHJvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBaUJBO0FBQ0E7QUFBQTtBQXNCQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFrREE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBL0VBO0FBQ0E7QUE4QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTs7OztBQWhEQTtBQUNBO0FBa0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFXQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTs7O0FBQUE7Ozs7QUFDQTs7O0FBQUE7Ozs7QUFHQTs7O0FBQUE7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0xBRUE7QUFDQTtBQUhBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFZQTtBQWJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWtCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBT0E7QUFHQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBWUE7OztBQXJMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBc0VBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaElBO0FBQ0E7QUE0Q0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFtQkE7Ozs7QUFwRUE7QUFDQTtBQW1JQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7O0FBa0tBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1a0JBO0FBQ0E7QUEwRkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQTVEQTtBQWlFQTs7OztBQWhLQTtBQUNBO0FBOGtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hsQkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUtBQUE7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFxQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTs7OztBQW5FQTtBQUNBO0FBcUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQVNBO0FBQ0E7QUFmQTtBQUNBO0FBREE7QUFBQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW9EQTtBQUNBO0FBQ0E7Ozs7QUEzREE7QUFDQTtBQTREQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBcUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXhIQTtBQUNBO0FBMkNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQWRBO0FBbUJBOzs7O0FBbkVBO0FBQ0E7QUEySEE7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBc0hBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7O0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVFBOzs7Ozs7OztBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7QUFEQTtBQUlBOzs7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXhMQTtBQUNBO0FBZ0ZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdEJBO0FBMkJBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFwSEE7QUFDQTtBQTBMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQTZKQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUEzQkE7QUFnQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBOVBBO0FBQ0E7QUErUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUF4Q0E7QUFDQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBbkNBO0FBQ0E7QUEyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBV0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7QUFBQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQURBO0FBQ0E7QUFQQTtBQUdBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBVUE7OztBQWxHQTtBQUNBO0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQU1BO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQW9HQTtBQUFBO0FBK0JBO0FBQUE7QUE0QkE7QUFBQTtBQTRCQTtBQUFBO0FBMEJBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBcUJBO0FBQUE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE0QkE7QUE1QkE7QUFBQTtBQUNBO0FBREE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBd0RBOzs7QUE5Y0E7QUFDQTtBQWdkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBNkdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBcklBO0FBQ0E7QUEyRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFwQkE7QUEyQkE7Ozs7QUEzR0E7QUFDQTtBQXdJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBekNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQVZBO0FBQ0E7QUFnREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQXFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBbEdBO0FBQ0E7QUFpREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTs7OztBQW5FQTtBQUNBO0FBcUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7O0FBYkE7QUFDQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUF1R0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXZLQTtBQUNBO0FBa0ZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFWQTtBQWNBOzs7O0FBckdBO0FBQ0E7QUEwS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7OztBQWpHQTtBQUNBO0FBcUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUE1Q0E7QUFDQTtBQW9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUF4QkE7QUFDQTtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUF1QkE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQS9JQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkE7Ozs7QUExREE7QUFDQTtBQWlMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFpT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBdlVBO0FBQ0E7QUFtTEE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFuQ0E7QUF1Q0E7Ozs7QUEvTkE7QUFDQTtBQTBVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQS9EQTtBQUNBO0FBZ0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQVlBOzs7O0FBakRBO0FBQ0E7QUFrRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEyTkE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTlZQTtBQUNBO0FBNExBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFuQkE7QUF3QkE7Ozs7QUF6TkE7QUFDQTtBQWlaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQXRCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFyRUE7QUFDQTtBQXlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTs7OztBQTNDQTtBQUNBO0FBd0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUlBOzs7QUFoQ0E7QUFDQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUExQkE7QUFDQTtBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0pBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUF0UEE7QUFDQTtBQStIQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBVkE7QUFjQTs7OztBQWxKQTtBQUNBO0FBeVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBa0lBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQW5PQTtBQUNBO0FBK0dBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVZBO0FBWUE7Ozs7QUFoSUE7QUFDQTtBQXNPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UEE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7O0FBQ0E7QUFDQTtBQW9IQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQXJCQTtBQXFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTdOQTtBQUNBO0FBK05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTJJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFyTEE7QUFDQTtBQTRGQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFsQ0E7QUF3Q0E7Ozs7QUF6SUE7QUFDQTtBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFJQTtBQUNBO0FBRkE7QUFDQTs7QUFKQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWhIQTtBQUNBO0FBK0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBWEE7QUFhQTs7OztBQWpFQTtBQUNBO0FBbUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
