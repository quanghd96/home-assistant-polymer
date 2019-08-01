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
        const DEFAULT_DOMAIN_ICON = "hass:bookmark";
        /** Panel to show when no panel is picked. */

        const DEFAULT_PANEL = "lovelace";
        /** Domains that have a state card. */

        const DOMAINS_WITH_CARD = [
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

        const DOMAINS_WITH_MORE_INFO = [
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

        const DOMAINS_HIDE_MORE_INFO = [
          "input_number",
          "input_select",
          "input_text",
          "scene",
          "weblink",
        ];
        /** Domains that should have the history hidden in the more info dialog. */

        const DOMAINS_MORE_INFO_NO_HISTORY = [
          "camera",
          "configurator",
          "history_graph",
          "scene",
        ];
        /** States that we consider "off". */

        const STATES_OFF = ["closed", "locked", "off"];
        /** Domains where we allow toggle in Lovelace. */

        const DOMAINS_TOGGLE = new Set([
          "fan",
          "input_boolean",
          "light",
          "switch",
          "group",
          "automation",
        ]);
        /** Temperature units. */

        const UNIT_C = "°C";
        const UNIT_F = "°F";
        /** Entity ID of the default view. */

        const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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
            .map((feature) =>
              Object(
                _supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                  "supportsFeature"
                ]
              )(stateObj, Number(feature))
                ? classNames[feature]
                : ""
            )
            .filter((attr) => attr !== "")
            .join(" ");
        }

        /***/
      },

    /***/ "./src/common/util/debounce.ts":
      /*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
      /*! exports provided: debounce */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "debounce",
          function() {
            return debounce;
          }
        );
        // From: https://davidwalsh.name/javascript-debounce-function
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        // tslint:disable-next-line: ban-types
        const debounce = (func, wait, immediate = false) => {
          let timeout; // @ts-ignore

          return function(...args) {
            // tslint:disable:no-this-assignment
            // @ts-ignore
            const context = this;

            const later = () => {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };

            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          };
        };

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

        class HaAttributes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .data-entry .value {
          max-width: 200px;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: right;
        }
      </style>

      <div class="layout vertical">
        <template
          is="dom-repeat"
          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"
          as="attribute"
        >
          <div class="data-entry layout justified horizontal">
            <div class="key">[[formatAttribute(attribute)]]</div>
            <div class="value">
              [[formatAttributeValue(stateObj, attribute)]]
            </div>
          </div>
        </template>
        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">
          [[computeAttribution(stateObj)]]
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computeFiltersArray(extraFilters) {
            return Object.keys(
              _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"]
                .LOGIC_STATE_ATTRIBUTES
            ).concat(extraFilters ? extraFilters.split(",") : []);
          }

          computeDisplayAttributes(stateObj, filtersArray) {
            if (!stateObj) {
              return [];
            }

            return Object.keys(stateObj.attributes).filter(function(key) {
              return filtersArray.indexOf(key) === -1;
            });
          }

          formatAttribute(attribute) {
            return attribute.replace(/_/g, " ");
          }

          formatAttributeValue(stateObj, attribute) {
            var value = stateObj.attributes[attribute];
            if (value === null) return "-";

            if (Array.isArray(value)) {
              return value.join(", ");
            }

            return value instanceof Object
              ? JSON.stringify(value, null, 2)
              : value;
          }

          computeAttribution(stateObj) {
            return stateObj.attributes.attribution;
          }
        }

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

        let HaCameraStream = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-camera-stream"
            ),
          ],
          function(_initialize, _LitElement) {
            class HaCameraStream extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

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

                  value() {
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

                  value() {
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

                  value() {
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
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${
        false || this._shouldRenderMJPEG
          ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <img
              @load=${this._elementResized}
              .src=${
                false
                  ? undefined
                  : Object(
                      _data_camera__WEBPACK_IMPORTED_MODULE_3__[
                        "computeMJPEGStreamUrl"
                      ]
                    )(this.stateObj)
              }
              .alt=${`Preview of the ${Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(this.stateObj)} camera.`}
            />
          `
          : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <video
              autoplay
              muted
              playsinline
              ?controls=${this.showControls}
              @loadeddata=${this._elementResized}
            ></video>
          `
      }
    `;
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

                    const stateObjChanged = changedProps.has("stateObj");
                    const attachedChanged = changedProps.has("_attached");
                    const oldState = changedProps.get("stateObj");
                    const oldEntityId = oldState
                      ? oldState.entity_id
                      : undefined;
                    const curEntityId = this.stateObj
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
                  value: async function _startHls() {
                    // tslint:disable-next-line
                    const Hls = (await __webpack_require__
                      .e(/*! import() | hls.js */ "vendors~hls.js")
                      .then(
                        __webpack_require__.t.bind(
                          null,
                          /*! hls.js */ "./node_modules/hls.js/dist/hls.js",
                          7
                        )
                      )).default;
                    let hlsSupported = Hls.isSupported();
                    const videoEl = this._videoEl;

                    if (!hlsSupported) {
                      hlsSupported =
                        videoEl.canPlayType("application/vnd.apple.mpegurl") !==
                        "";
                    }

                    if (!hlsSupported) {
                      this._forceMJPEG = this.stateObj.entity_id;
                      return;
                    }

                    try {
                      const { url } = await Object(
                        _data_camera__WEBPACK_IMPORTED_MODULE_3__[
                          "fetchStreamUrl"
                        ]
                      )(this.hass, this.stateObj.entity_id);

                      if (Hls.isSupported()) {
                        this._renderHLSPolyfill(videoEl, Hls, url);
                      } else {
                        this._renderHLSNative(videoEl, url);
                      }

                      return;
                    } catch (err) {
                      // Fails if we were unable to get a stream
                      // tslint:disable-next-line
                      console.error(err);
                      this._forceMJPEG = this.stateObj.entity_id;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_renderHLSNative",
                  value: async function _renderHLSNative(videoEl, url) {
                    videoEl.src = url;
                    await new Promise((resolve) =>
                      videoEl.addEventListener("loadedmetadata", resolve)
                    );
                    videoEl.play();
                  },
                },
                {
                  kind: "method",
                  key: "_renderHLSPolyfill",
                  value: async function _renderHLSPolyfill(
                    videoEl, // tslint:disable-next-line
                    Hls,
                    url
                  ) {
                    const hls = new Hls();
                    this._hlsPolyfillInstance = hls;
                    hls.attachMedia(videoEl);
                    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                      hls.loadSource(url);
                    });
                  },
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
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host,
      img,
      video {
        display: block;
      }

      img,
      video {
        width: 100%;
      }
    `;
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

        /*
         * @appliesMixin EventsMixin
         */

        class HaClimateControl extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
          direction: ltr;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          temperatureStateInFlux(inFlux) {
            this.$.target_temperature.classList.toggle("in-flux", inFlux);
          }

          _round(val) {
            // round value to precision derived from step
            // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
            const s = this.step.toString().split(".");
            return s[1]
              ? parseFloat(val.toFixed(s[1].length))
              : Math.round(val);
          }

          incrementValue() {
            const newval = this._round(this.value + this.step);

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
          }

          decrementValue() {
            const newval = this._round(this.value - this.step);

            if (this.value > this.min) {
              this.last_changed = Date.now();
              this.temperatureStateInFlux(true);
            }

            if (newval >= this.min) {
              this.value = newval;
            } else {
              this.value = this.min;
            }
          }

          valueChanged() {
            // when the last_changed timestamp is changed,
            // trigger a potential event fire in
            // the future, as long as last changed is far enough in the
            // past.
            if (this.last_changed) {
              window.setTimeout(() => {
                const now = Date.now();

                if (now - this.last_changed >= 2000) {
                  this.fire("change");
                  this.temperatureStateInFlux(false);
                  this.last_changed = null;
                }
              }, 2010);
            }
          }
        }

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

        /**
         * Color-picker custom element
         *
         * @appliesMixin EventsMixin
         */

        class HaColorPicker extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `;
          }

          static get properties() {
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
          }

          ready() {
            super.ready();
            this.setupLayers();
            this.drawColorWheel();
            this.drawMarker();
            this.interactionLayer.addEventListener("mousedown", (ev) =>
              this.onMouseDown(ev)
            );
            this.interactionLayer.addEventListener("touchstart", (ev) =>
              this.onTouchStart(ev)
            );
          } // converts browser coordinates to canvas canvas coordinates
          // origin is wheel center
          // returns {x: X, y: Y} object

          convertToCanvasCoordinates(clientX, clientY) {
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
          } // Mouse events

          onMouseDown(ev) {
            const cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY); // return if we're not on the wheel

            if (!this.isInWheel(cc.x, cc.y)) {
              return;
            } // a mousedown in wheel is always a color select action

            this.onMouseSelect(ev); // allow dragging

            this.canvas.classList.add("mouse", "dragging");
            this.addEventListener("mousemove", this.onMouseSelect);
            this.addEventListener("mouseup", this.onMouseUp);
          }

          onMouseUp() {
            this.canvas.classList.remove("mouse", "dragging");
            this.removeEventListener("mousemove", this.onMouseSelect);
          }

          onMouseSelect(ev) {
            requestAnimationFrame(() => this.processUserSelect(ev));
          } // Touch events

          onTouchStart(ev) {
            var touch = ev.changedTouches[0];
            const cc = this.convertToCanvasCoordinates(
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
              () => {
                this.tapBecameScroll = true;
              },
              {
                passive: true,
              }
            );
          }

          onTap(ev) {
            if (this.tapBecameScroll) {
              return;
            }

            ev.preventDefault();
            this.onTouchSelect(ev);
          }

          onTouchEnd() {
            this.canvas.classList.remove("touch", "dragging");
            this.removeEventListener("touchmove", this.onTouchSelect);
          }

          onTouchSelect(ev) {
            requestAnimationFrame(() =>
              this.processUserSelect(ev.changedTouches[0])
            );
          }
          /*
           * General event/selection handling
           */
          // Process user input to color

          processUserSelect(ev) {
            var canvasXY = this.convertToCanvasCoordinates(
              ev.clientX,
              ev.clientY
            );
            var hs = this.getColor(canvasXY.x, canvasXY.y);
            this.onColorSelect(hs);
          } // apply color to marker position and canvas

          onColorSelect(hs) {
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
              this.ensureFinalSelect = setTimeout(() => {
                this.fireColorSelected(hs); // do it for the final time
              }, this.throttle);
              return;
            }

            this.fireColorSelected(hs); // do it

            this.colorSelectIsThrottled = true;
            setTimeout(() => {
              this.colorSelectIsThrottled = false;
            }, this.throttle);
          } // set color values and fire colorselected event

          fireColorSelected(hs) {
            this.hsColor = hs;
            this.fire("colorselected", {
              hs: {
                h: hs.h,
                s: hs.s,
              },
            });
          }
          /*
           * Interface updating
           */
          // set marker position to the given color

          setMarkerOnColor(hs) {
            var dist = hs.s * this.radius;
            var theta = ((hs.h - 180) / 180) * Math.PI;
            var markerdX = -dist * Math.cos(theta);
            var markerdY = -dist * Math.sin(theta);
            var translateString = `translate(${markerdX},${markerdY})`;
            this.marker.setAttribute("transform", translateString);
            this.tooltip.setAttribute("transform", translateString);
          } // apply given color to interface elements

          applyColorToCanvas(hs) {
            // we're not really converting hs to hsl here, but we keep it cheap
            // setting the color on the interactionLayer, the svg elements can inherit
            this.interactionLayer.style.color = `hsl(${hs.h}, 100%, ${100 -
              hs.s * 50}%)`;
          }

          applyHsColor(hs) {
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
          }
          /*
           * input processing helpers
           */
          // get angle (degrees)

          getAngle(dX, dY) {
            var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

            var angle = (theta / Math.PI) * 180 + 180; // degrees, clockwise from right

            return angle;
          } // returns true when coordinates are in the colorwheel

          isInWheel(x, y) {
            return this.getDistance(x, y) <= 1;
          } // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside

          getDistance(dX, dY) {
            return Math.sqrt(dX * dX + dY * dY) / this.radius;
          }
          /*
           * Getting colors
           */

          getColor(x, y) {
            var hue = this.getAngle(x, y); // degrees, clockwise from right

            var relativeDistance = this.getDistance(x, y); // edge of radius = 1

            var sat = Math.min(relativeDistance, 1); // Distance from center

            return {
              h: hue,
              s: sat,
            };
          }

          applySegmentFilter(hs) {
            // apply hue segment steps
            if (this.hueSegments) {
              const angleStep = 360 / this.hueSegments;
              const halfAngleStep = angleStep / 2;
              hs.h -= halfAngleStep; // take the 'centered segemnts' into account

              if (hs.h < 0) {
                hs.h += 360;
              } // don't end up below 0

              const rest = hs.h % angleStep;
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
          }
          /*
           * Drawing related stuff
           */

          setupLayers() {
            this.canvas = this.$.canvas;
            this.backgroundLayer = this.$.backgroundLayer;
            this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

            this.originX = this.width / 2;
            this.originY = this.originX; // synchronise width/height coordinates

            this.backgroundLayer.width = this.width;
            this.backgroundLayer.height = this.height;
            this.interactionLayer.setAttribute(
              "viewBox",
              `${-this.originX} ${-this.originY} ${this.width} ${this.height}`
            );
          }

          drawColorWheel() {
            /*
             *  Setting up all paremeters
             */
            let shadowColor;
            let shadowOffsetX;
            let shadowOffsetY;
            let shadowBlur;
            const context = this.backgroundLayer.getContext("2d"); // postioning and sizing

            const cX = this.originX;
            const cY = this.originY;
            const radius = this.radius;
            const counterClockwise = false; // styling of the wheel

            const wheelStyle = window.getComputedStyle(
              this.backgroundLayer,
              null
            );
            const borderWidth = parseInt(
              wheelStyle.getPropertyValue("--wheel-borderwidth"),
              10
            );
            const borderColor = wheelStyle
              .getPropertyValue("--wheel-bordercolor")
              .trim();
            const wheelShadow = wheelStyle
              .getPropertyValue("--wheel-shadow")
              .trim(); // extract shadow properties from  CCS variable
            // the shadow should be defined as: "10px 5px 5px 0px COLOR"

            if (wheelShadow !== "none") {
              const values = wheelShadow.split("px ");
              shadowColor = values.pop();
              shadowOffsetX = parseInt(values[0], 10);
              shadowOffsetY = parseInt(values[1], 10);
              shadowBlur = parseInt(values[2], 10) || 0;
            }

            const borderRadius = radius + borderWidth / 2;
            const wheelRadius = radius;
            const shadowRadius = radius + borderWidth;
            /*
             *  Drawing functions
             */

            function drawCircle(hueSegments, saturationSegments) {
              hueSegments = hueSegments || 360; // reset 0 segments to 360

              const angleStep = 360 / hueSegments;
              const halfAngleStep = angleStep / 2; // center segments on color

              for (var angle = 0; angle <= 360; angle += angleStep) {
                var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
                var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
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
                let lightness = 100; // first gradient stop

                gradient.addColorStop(0, `hsl(${angle}, 100%, ${lightness}%)`); // segment gradient stops

                if (saturationSegments > 0) {
                  const ratioStep = 1 / saturationSegments;
                  let ratio = 0;

                  for (var stop = 1; stop < saturationSegments; stop += 1) {
                    var prevLighness = lightness;
                    ratio = stop * ratioStep;
                    lightness = 100 - 50 * ratio;
                    gradient.addColorStop(
                      ratio,
                      `hsl(${angle}, 100%, ${prevLighness}%)`
                    );
                    gradient.addColorStop(
                      ratio,
                      `hsl(${angle}, 100%, ${lightness}%)`
                    );
                  }

                  gradient.addColorStop(ratio, `hsl(${angle}, 100%, 50%)`);
                } // last gradient stop

                gradient.addColorStop(1, `hsl(${angle}, 100%, 50%)`);
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
          }
          /*
           *   Draw the (draggable) marker and tooltip
           *   on the interactionLayer)
           */

          drawMarker() {
            const svgElement = this.interactionLayer;
            const markerradius = this.radius * 0.08;
            const tooltipradius = this.radius * 0.15;
            const TooltipOffsetY = -(tooltipradius * 3);
            const TooltipOffsetX = 0;
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
          }

          segmentationChange() {
            if (this.backgroundLayer) {
              this.drawColorWheel();
            }
          }
        }

        customElements.define("ha-color-picker", HaColorPicker);

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

        class HaLabeledSlider extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          display: block;
        }

        .title {
          margin-bottom: 16px;
          opacity: var(--dark-primary-opacity);
        }

        ha-icon {
          float: left;
          margin-top: 4px;
          opacity: var(--dark-secondary-opacity);
        }

        ha-paper-slider {
          background-image: var(--ha-slider-background);
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-paper-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-paper-slider>
      </div>
    `;
          }

          static get properties() {
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
          }
        }

        customElements.define("ha-labeled-slider", HaLabeledSlider);

        /***/
      },

    /***/ "./src/components/ha-paper-dropdown-menu.ts":
      /*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
      /*! exports provided: HaPaperDropdownClass */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperDropdownClass",
          function() {
            return HaPaperDropdownClass;
          }
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );

        const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

        class HaPaperDropdownClass extends paperDropdownClass {
          ready() {
            super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

            setTimeout(() => {
              if (window.getComputedStyle(this).direction === "rtl") {
                this.style.textAlign = "right";
              }
            }, 100);
          }
        }
        customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

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
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        const paperIconButtonClass = customElements.get("paper-icon-button");
        class HaPaperIconButtonArrowPrev extends paperIconButtonClass {
          constructor(...args) {
            super(...args);
            this.hassio = void 0;
          }

          connectedCallback() {
            this.icon =
              window.getComputedStyle(this).direction === "ltr"
                ? this.hassio
                  ? "hassio:arrow-left"
                  : "hass:arrow-left"
                : this.hassio
                ? "hassio:arrow-right"
                : "hass:arrow-right"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

            super.connectedCallback();
          }
        }
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

        /**
         * @polymer
         * @customElement
         * @appliesMixin paper-slider
         */

        const PaperSliderClass = customElements.get("paper-slider");

        class HaPaperSlider extends PaperSliderClass {
          static get template() {
            const tpl = document.createElement("template");
            tpl.innerHTML = PaperSliderClass.template.innerHTML;
            const styleEl = document.createElement("style");
            styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
            tpl.content.appendChild(styleEl);
            return tpl;
          }
        }

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

        /*
         * @appliesMixin EventsMixin
         */

        class HaWaterHeaterControl extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          temperatureStateInFlux(inFlux) {
            this.$.target_temperature.classList.toggle("in-flux", inFlux);
          }

          incrementValue() {
            const newval = this.value + this.step;

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
          }

          decrementValue() {
            const newval = this.value - this.step;

            if (this.value > this.min) {
              this.last_changed = Date.now();
              this.temperatureStateInFlux(true);
            }

            if (newval >= this.min) {
              this.value = newval;
            } else {
              this.value = this.min;
            }
          }

          valueChanged() {
            // when the last_changed timestamp is changed,
            // trigger a potential event fire in
            // the future, as long as last changed is far enough in the
            // past.
            if (this.last_changed) {
              window.setTimeout(() => {
                const now = Date.now();

                if (now - this.last_changed >= 2000) {
                  this.fire("change");
                  this.temperatureStateInFlux(false);
                  this.last_changed = null;
                }
              }, 2010);
            }
          }
        }

        customElements.define("ha-water_heater-control", HaWaterHeaterControl);

        /***/
      },

    /***/ "./src/components/paper-time-input.js":
      /*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
      /*! exports provided: PaperTimeInput */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperTimeInput",
          function() {
            return PaperTimeInput;
          }
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/

        class PaperTimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          on-change="_shouldFormatHour"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          on-change="_formatMin"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="59"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
          }

          static get properties() {
            return {
              /**
               * Label for the input
               */
              label: {
                type: String,
                value: "Time",
              },

              /**
               * auto validate time inputs
               */
              autoValidate: {
                type: Boolean,
                value: true,
              },

              /**
               * hides the label
               */
              hideLabel: {
                type: Boolean,
                value: false,
              },

              /**
               * 12 or 24 hr format
               */
              format: {
                type: Number,
                value: 12,
              },

              /**
               * disables the inputs
               */
              disabled: {
                type: Boolean,
                value: false,
              },

              /**
               * hour
               */
              hour: {
                type: String,
                notify: true,
              },

              /**
               * minute
               */
              min: {
                type: String,
                notify: true,
              },

              /**
               * AM or PM
               */
              amPm: {
                type: String,
                notify: true,
                value: "AM",
              },

              /**
               * Formatted time string
               */
              value: {
                type: String,
                notify: true,
                readOnly: true,
                computed: "_computeTime(min, hour, amPm)",
              },
            };
          }
          /**
           * Validate the inputs
           * @return {boolean}
           */

          validate() {
            var valid = true; // Validate hour & min fields

            if (!this.$.hour.validate() | !this.$.min.validate()) {
              valid = false;
            } // Validate AM PM if 12 hour time

            if (this.format === 12 && !this.$.dropdown.validate()) {
              valid = false;
            }

            return valid;
          }
          /**
           * Create time string
           */

          _computeTime(min, hour, amPm) {
            if (hour && min) {
              // No ampm on 24 hr time
              if (this.format === 24) {
                amPm = "";
              }

              return hour + ":" + min + " " + amPm;
            }

            return undefined;
          }
          /**
           * Format min
           */

          _formatMin() {
            if (this.min.toString().length === 1) {
              this.min = this.min < 10 ? "0" + this.min : this.min;
            }
          }
          /**
           * Hour needs a leading zero in 24hr format
           */

          _shouldFormatHour() {
            if (this.format === 24 && this.hour.toString().length === 1) {
              this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
            }
          }
          /**
           * 24 hour format has a max hr of 23
           */

          _computeHourMax(format) {
            if (format === 12) {
              return format;
            }

            return 23;
          }

          _equal(n1, n2) {
            return n1 === n2;
          }
        }
        customElements.define("paper-time-input", PaperTimeInput);

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
        const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
        const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
        const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
        const CLIMATE_SUPPORT_FAN_MODE = 8;
        const CLIMATE_SUPPORT_PRESET_MODE = 16;
        const CLIMATE_SUPPORT_SWING_MODE = 32;
        const CLIMATE_SUPPORT_AUX_HEAT = 64;

        /***/
      },

    /***/ "./src/data/entity_registry.ts":
      /*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
      /*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeEntityRegistryName",
          function() {
            return computeEntityRegistryName;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateEntityRegistryEntry",
          function() {
            return updateEntityRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "removeEntityRegistryEntry",
          function() {
            return removeEntityRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeEntityRegistry",
          function() {
            return subscribeEntityRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        const computeEntityRegistryName = (hass, entry) => {
          if (entry.name) {
            return entry.name;
          }

          const state = hass.states[entry.entity_id];
          return state
            ? Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(state)
            : null;
        };
        const updateEntityRegistryEntry = (hass, entityId, updates) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/entity_registry/update",
                entity_id: entityId,
              },
              updates
            )
          );
        const removeEntityRegistryEntry = (hass, entityId) =>
          hass.callWS({
            type: "config/entity_registry/remove",
            entity_id: entityId,
          });

        const fetchEntityRegistry = (conn) =>
          conn.sendMessagePromise({
            type: "config/entity_registry/list",
          });

        const subscribeEntityRegistryUpdates = (conn, store) =>
          conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              () =>
                fetchEntityRegistry(conn).then((entities) =>
                  store.setState(entities, true)
                ),
              500,
              true
            ),
            "entity_registry_updated"
          );

        const subscribeEntityRegistry = (conn, onChange) =>
          Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_entityRegistry",
            fetchEntityRegistry,
            subscribeEntityRegistryUpdates,
            conn,
            onChange
          );

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

        /*
         * @appliesMixin DialogMixin
         */

        class HaMoreInfoDialog extends Object(
          _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="ha-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls,
        more-info-settings {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --ha-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls,
          more-info-settings {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <template is="dom-if" if="[[!_page]]">
        <more-info-controls
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          dialog-element="[[_dialogElement]]"
          can-configure="[[_registryInfo]]"
          large="{{large}}"
        ></more-info-controls>
      </template>
      <template is="dom-if" if='[[_equals(_page, "settings")]]'>
        <more-info-settings
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          registry-info="{{_registryInfo}}"
        ></more-info-settings>
      </template>
    `;
          }

          static get properties() {
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
          }

          static get observers() {
            return ["_dialogOpenChanged(opened)"];
          }

          ready() {
            super.ready();
            this._dialogElement = this;
            this.addEventListener("more-info-page", (ev) => {
              this._page = ev.detail.page;
            });
          }

          _computeDomain(stateObj) {
            return stateObj
              ? Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__[
                    "default"
                  ]
                )(stateObj)
              : "";
          }

          _computeStateObj(hass) {
            return hass.states[hass.moreInfoEntityId] || null;
          }

          async _stateObjChanged(newVal, oldVal) {
            if (!newVal) {
              this.setProperties({
                opened: false,
                _page: null,
                _registryInfo: null,
                large: false,
              });
              return;
            }

            requestAnimationFrame(() =>
              requestAnimationFrame(() => {
                // allow dialog to render content before showing it so it will be
                // positioned correctly.
                this.opened = true;
              })
            );

            if (
              !Object(
                _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ]
              )(this.hass, "config") ||
              (oldVal && oldVal.entity_id === newVal.entity_id)
            ) {
              return;
            }

            if (this.hass.user.is_admin) {
              try {
                const info = await this.hass.callWS({
                  type: "config/entity_registry/get",
                  entity_id: newVal.entity_id,
                });
                this._registryInfo = info;
              } catch (err) {
                this._registryInfo = null;
              }
            }
          }

          _dialogOpenChanged(newVal) {
            if (!newVal && this.stateObj) {
              this.fire("hass-more-info", {
                entityId: null,
              });
            }
          }

          _equals(a, b) {
            return a === b;
          }

          _largeChanged() {
            this.notifyResize();
          }
        }

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

        class MoreInfoAlarmControlPanel extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad mwc-button {
          width: 80px;
        }
        .actions mwc-button {
          min-width: 160px;
          margin-bottom: 16px;
        }
        mwc-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="1"
                raised
                >1</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="4"
                raised
                >4</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="7"
                raised
                >7</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="2"
                raised
                >2</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="5"
                raised
                >5</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="8"
                raised
                >8</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="0"
                raised
                >0</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="3"
                raised
                >3</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="6"
                raised
                >6</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="9"
                raised
                >9</mwc-button
              >
              <mwc-button
                on-click="_clearEnteredCode"
                disabled="[[!_inputEnabled]]"
                raised
              >
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </mwc-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <mwc-button
            raised
            class="disarm"
            on-click="_callService"
            data-service="alarm_disarm"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </mwc-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_home"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </mwc-button>
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_away"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </mwc-button>
        </template>
      </div>
    `;
          }

          static get properties() {
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
          }

          constructor() {
            super();
            this._armedStates = [
              "armed_home",
              "armed_away",
              "armed_night",
              "armed_custom_bypass",
            ];
          }

          _stateObjChanged(newVal, oldVal) {
            if (newVal) {
              const state = newVal.state;
              const props = {
                _codeFormat: newVal.attributes.code_format,
                _armVisible: state === "disarmed",
                _codeArmRequired: newVal.attributes.code_arm_required,
                _disarmVisible:
                  this._armedStates.includes(state) ||
                  state === "pending" ||
                  state === "triggered" ||
                  state === "arming",
              };
              props._inputEnabled = props._disarmVisible || props._armVisible;
              this.setProperties(props);
            }

            if (oldVal) {
              setTimeout(() => {
                Object(
                  _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                    "fireEvent"
                  ]
                )(this, "iron-resize");
              }, 500);
            }
          }

          _isNumber(format) {
            return format === "Number";
          }

          _validateCode(code, format, armVisible, codeArmRequired) {
            return (
              !format || code.length > 0 || (armVisible && !codeArmRequired)
            );
          }

          _digitClicked(ev) {
            this._enteredCode += ev.target.getAttribute("data-digit");
          }

          _clearEnteredCode() {
            this._enteredCode = "";
          }

          _callService(ev) {
            const service = ev.target.getAttribute("data-service");
            const data = {
              entity_id: this.stateObj.entity_id,
              code: this._enteredCode,
            };
            this.hass
              .callService("alarm_control_panel", service, data)
              .then(() => {
                this._enteredCode = "";
              });
          }
        }

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

        class MoreInfoAutomation extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>[[localize('ui.card.automation.last_triggered')]]:</div>
        <ha-relative-time
          hass="[[hass]]"
          datetime="[[stateObj.attributes.last_triggered]]"
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </mwc-button>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
            };
          }

          handleTriggerTapped() {
            this.hass.callService("automation", "trigger", {
              entity_id: this.stateObj.entity_id,
            });
          }
        }

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

        // Not duplicate import, it's for typing
        // tslint:disable-next-line

        let MoreInfoCamera = _decorate(
          null,
          function(_initialize, _LitElement) {
            class MoreInfoCamera extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

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

                  value() {
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
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-camera-stream
        .hass="${this.hass}"
        .stateObj="${this.stateObj}"
        showcontrols
      ></ha-camera-stream>
      ${
        this._cameraPrefs
          ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <paper-checkbox
              .checked=${this._cameraPrefs.preload_stream}
              @change=${this._handleCheckboxChanged}
            >
              Preload stream
            </paper-checkbox>
          `
          : undefined
      }
    `;
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    if (!changedProps.has("stateObj")) {
                      return;
                    }

                    const oldState = changedProps.get("stateObj");
                    const oldEntityId = oldState
                      ? oldState.entity_id
                      : undefined;
                    const curEntityId = this.stateObj
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
                  value: async function _fetchCameraPrefs() {
                    this._cameraPrefs = await Object(
                      _data_camera__WEBPACK_IMPORTED_MODULE_1__[
                        "fetchCameraPrefs"
                      ]
                    )(this.hass, this.stateObj.entity_id);
                  },
                },
                {
                  kind: "method",
                  key: "_handleCheckboxChanged",
                  value: async function _handleCheckboxChanged(ev) {
                    const checkbox = ev.currentTarget;

                    try {
                      this._cameraPrefs = await Object(
                        _data_camera__WEBPACK_IMPORTED_MODULE_1__[
                          "updateCameraPrefs"
                        ]
                      )(this.hass, this.stateObj.entity_id, {
                        preload_stream: checkbox.checked,
                      });
                    } catch (err) {
                      alert(err.message);
                      checkbox.checked = !checkbox.checked;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      paper-checkbox {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding: 5px;
        border-bottom-left-radius: 6px;
      }
    `;
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

        let MoreInfoClimate = _decorate(
          null,
          function(_initialize, _LitElement) {
            class MoreInfoClimate extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

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
                      return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]``;
                    }

                    const hass = this.hass;
                    const stateObj = this.stateObj;
                    const supportTargetTemperature = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_TEMPERATURE"
                      ]
                    );
                    const supportTargetTemperatureRange = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE"
                      ]
                    );
                    const supportTargetHumidity = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_TARGET_HUMIDITY"
                      ]
                    );
                    const supportFanMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_FAN_MODE"
                      ]
                    );
                    const supportPresetMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_PRESET_MODE"
                      ]
                    );
                    const supportSwingMode = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_SWING_MODE"
                      ]
                    );
                    const supportAuxHeat = Object(
                      _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__[
                        "supportsFeature"
                      ]
                    )(
                      stateObj,
                      _data_climate__WEBPACK_IMPORTED_MODULE_10__[
                        "CLIMATE_SUPPORT_AUX_HEAT"
                      ]
                    );
                    const temperatureStepSize =
                      stateObj.attributes.target_temp_step ||
                      hass.config.unit_system.temperature.indexOf("F") === -1
                        ? 0.5
                        : 1;
                    const rtlDirection = Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__[
                        "computeRTLDirection"
                      ]
                    )(hass);
                    return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div
        class=${Object(
          lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_12__[
            "classMap"
          ]
        )({
          "has-current_temperature":
            "current_temperature" in stateObj.attributes,
          "has-current_humidity": "current_humidity" in stateObj.attributes,
          "has-target_temperature": supportTargetTemperature,
          "has-target_temperature_range": supportTargetTemperatureRange,
          "has-target_humidity": supportTargetHumidity,
          "has-fan_mode": supportFanMode,
          "has-swing_mode": supportSwingMode,
          "has-aux_heat": supportAuxHeat,
          "has-preset_mode": supportPresetMode,
        })}
      >
        <div class="container-temperature">
          <div class=${stateObj.state}>
            ${
              supportTargetTemperature || supportTargetTemperatureRange
                ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <div>
                    ${hass.localize("ui.card.climate.target_temperature")}
                  </div>
                `
                : ""
            }
            ${
              stateObj.attributes.temperature
                ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <ha-climate-control
                    .value=${stateObj.attributes.temperature}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.min_temp}
                    .max=${stateObj.attributes.max_temp}
                    @change=${this._targetTemperatureChanged}
                  ></ha-climate-control>
                `
                : ""
            }
            ${
              stateObj.attributes.target_temp_low ||
              stateObj.attributes.target_temp_high
                ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <ha-climate-control
                    .value=${stateObj.attributes.target_temp_low}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.min_temp}
                    .max=${stateObj.attributes.target_temp_high}
                    class="range-control-left"
                    @change=${this._targetTemperatureLowChanged}
                  ></ha-climate-control>
                  <ha-climate-control
                    .value=${stateObj.attributes.target_temp_high}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.target_temp_low}
                    .max=${stateObj.attributes.max_temp}
                    class="range-control-right"
                    @change=${this._targetTemperatureHighChanged}
                  ></ha-climate-control>
                `
                : ""
            }
          </div>
        </div>

        ${
          supportTargetHumidity
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="container-humidity">
                <div>${hass.localize("ui.card.climate.target_humidity")}</div>
                <div class="single-row">
                  <div class="target-humidity">
                    ${stateObj.attributes.humidity} %
                  </div>
                  <ha-paper-slider
                    class="humidity"
                    step="1"
                    pin
                    ignore-bar-touch
                    dir=${rtlDirection}
                    .min=${stateObj.attributes.min_humidity}
                    .max=${stateObj.attributes.max_humidity}
                    .secondaryProgress=${stateObj.attributes.max_humidity}
                    .value=${stateObj.attributes.humidity}
                    @change=${this._targetHumiditySliderChanged}
                  >
                  </ha-paper-slider>
                </div>
              </div>
            `
            : ""
        }

        <div class="container-hvac_modes">
          <div class="controls">
            <ha-paper-dropdown-menu
              label-float
              dynamic-align
              .label=${hass.localize("ui.card.climate.operation")}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${stateObj.state}
                @selected-changed=${this._handleOperationmodeChanged}
              >
                ${stateObj.attributes.hvac_modes.map(
                  (mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                    <paper-item item-name=${mode}>
                      ${hass.localize(`state.climate.${mode}`)}
                    </paper-item>
                  `
                )}
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </div>

        ${
          supportPresetMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="container-preset_modes">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.preset_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.preset_mode}
                    @selected-changed=${this._handlePresetmodeChanged}
                  >
                    <paper-item item-name="">
                      ${hass.localize(
                        `state_attributes.climate.preset_mode.none`
                      )}
                    </paper-item>
                    ${stateObj.attributes.preset_modes.map(
                      (mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__[
                        "html"
                      ]`
                        <paper-item item-name=${mode}>
                          ${hass.localize(
                            `state_attributes.climate.preset_mode.${mode}`
                          ) || mode}
                        </paper-item>
                      `
                    )}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""
        }
        ${
          supportFanMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="container-fan_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.fan_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.fan_mode}
                    @selected-changed=${this._handleFanmodeChanged}
                  >
                    ${stateObj.attributes.fan_modes.map(
                      (mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__[
                        "html"
                      ]`
                        <paper-item item-name=${mode}>
                          ${hass.localize(
                            `state_attributes.climate.fan_mode.${mode}`
                          ) || mode}
                        </paper-item>
                      `
                    )}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""
        }
        ${
          supportSwingMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="container-swing_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.swing_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.swing_mode}
                    @selected-changed=${this._handleSwingmodeChanged}
                  >
                    ${stateObj.attributes.swing_modes.map(
                      (mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__[
                        "html"
                      ]`
                        <paper-item item-name=${mode}>${mode}</paper-item>
                      `
                    )}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""
        }
        ${
          supportAuxHeat
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
              <div class="container-aux_heat">
                <div class="center horizontal layout single-row">
                  <div class="flex">
                    ${hass.localize("ui.card.climate.aux_heat")}
                  </div>
                  <paper-toggle-button
                    .checked=${stateObj.attributes.aux_heat === "on"}
                    @change=${this._auxToggleChanged}
                  ></paper-toggle-button>
                </div>
              </div>
            `
            : ""
        }
      </div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
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

                    this._resizeDebounce = window.setTimeout(() => {
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__[
                          "fireEvent"
                        ]
                      )(this, "iron-resize");
                      this._resizeDebounce = undefined;
                    }, 500);
                  },
                },
                {
                  kind: "method",
                  key: "_targetTemperatureChanged",
                  value: function _targetTemperatureChanged(ev) {
                    const newVal = ev.target.value;

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
                    const newVal = ev.currentTarget.value;

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
                    const newVal = ev.currentTarget.value;

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
                    const newVal = ev.target.value;

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
                    const newVal = ev.target.checked;

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
                    const newVal = ev.detail.value;

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
                    const newVal = ev.detail.value;

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
                    const newVal = ev.detail.value;

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
                    const newVal = ev.detail.value || null;

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
                  value: async function _callServiceHelper(
                    oldVal,
                    newVal,
                    service,
                    data
                  ) {
                    if (oldVal === newVal) {
                      return;
                    }

                    data.entity_id = this.stateObj.entity_id;
                    const curState = this.stateObj;
                    await this.hass.callService("climate", service, data); // We reset stateObj to re-sync the inputs with the state. It will be out
                    // of sync if our service call did not result in the entity to be turned
                    // on. Since the state is not changing, the resync is not called automatic.

                    await new Promise((resolve) => setTimeout(resolve, 2000)); // No need to resync if we received a new state.

                    if (this.stateObj !== curState) {
                      return;
                    }

                    this.stateObj = undefined;
                    await this.updateComplete; // Only restore if not set yet by a state change

                    if (this.stateObj === undefined) {
                      this.stateObj = curState;
                    }
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      :host {
        color: var(--primary-text-color);
      }

      .container-hvac_modes iron-icon,
      .container-fan_list iron-icon,
      .container-swing_list iron-icon {
        margin: 22px 16px 0 0;
      }

      ha-paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }

      ha-paper-slider {
        width: 100%;
      }

      .container-humidity .single-row {
        display: flex;
        height: 50px;
      }

      .target-humidity {
        width: 90px;
        font-size: 200%;
        margin: auto;
        direction: ltr;
      }

      ha-climate-control.range-control-left,
      ha-climate-control.range-control-right {
        float: left;
        width: 46%;
      }
      ha-climate-control.range-control-left {
        margin-right: 4%;
      }
      ha-climate-control.range-control-right {
        margin-left: 4%;
      }

      .humidity {
        --paper-slider-active-color: var(--paper-blue-400);
        --paper-slider-secondary-color: var(--paper-blue-400);
      }

      .single-row {
        padding: 8px 0;
      }
    `;
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

        class MoreInfoConfigurator extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        p {
          margin: 8px 0;
        }

        a {
          color: var(--primary-color);
        }

        p > img {
          max-width: 100%;
        }

        p.center {
          text-align: center;
        }

        p.error {
          color: #c62828;
        }

        p.submit {
          text-align: center;
          height: 41px;
        }

        paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }

        [hidden] {
          display: none;
        }
      </style>

      <div class="layout vertical">
        <template is="dom-if" if="[[isConfigurable]]">
          <ha-markdown
            content="[[stateObj.attributes.description]]"
          ></ha-markdown>

          <p class="error" hidden$="[[!stateObj.attributes.errors]]">
            [[stateObj.attributes.errors]]
          </p>

          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
            <paper-input
              label="[[item.name]]"
              name="[[item.id]]"
              type="[[item.type]]"
              on-change="fieldChanged"
            ></paper-input>
          </template>

          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
            <mwc-button
              raised=""
              disabled="[[isConfiguring]]"
              on-click="submitClicked"
            >
              <paper-spinner
                active="[[isConfiguring]]"
                hidden="[[!isConfiguring]]"
                alt="Configuring"
              ></paper-spinner>
              [[stateObj.attributes.submit_caption]]
            </mwc-button>
          </p>
        </template>
      </div>
    `;
          }

          static get properties() {
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
                value: function() {
                  return {};
                },
              },
            };
          }

          computeIsConfigurable(stateObj) {
            return stateObj.state === "configure";
          }

          fieldChanged(ev) {
            var el = ev.target;
            this.fieldInput[el.name] = el.value;
          }

          submitClicked() {
            var data = {
              configure_id: this.stateObj.attributes.configure_id,
              fields: this.fieldInput,
            };
            this.isConfiguring = true;
            this.hass.callService("configurator", "configure", data).then(
              function() {
                this.isConfiguring = false;
              }.bind(this),
              function() {
                this.isConfiguring = false;
              }.bind(this)
            );
          }
        }

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

        class MoreInfoContent extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "UpdatingElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this.stateObj = void 0;
            this._detachedChild = void 0;
          }

          static get properties() {
            return {
              hass: {},
              stateObj: {},
            };
          }

          firstUpdated() {
            this.style.position = "relative";
            this.style.display = "block";
          } // This is not a lit element, but an updating element, so we implement update

          update(changedProps) {
            super.update(changedProps);
            const stateObj = this.stateObj;
            const hass = this.hass;

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

            const moreInfoType =
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
              hass,
              stateObj,
            });
          }
        }

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

        const FEATURE_CLASS_NAMES = {
          128: "has-set_tilt_position",
        };

        class MoreInfoCover extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        .current_position,
        .tilt {
          max-height: 0px;
          overflow: hidden;
        }

        .has-current_position .current_position,
        .has-set_tilt_position .tilt,
        .has-current_tilt_position .tilt {
          max-height: 208px;
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <div class$="[[computeClassNames(stateObj)]]">
        <div class="current_position">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.position')]]"
            pin=""
            value="{{coverPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetPosition]]"
            on-change="coverPositionSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="tilt">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.tilt_position')]]"
            pin=""
            extra=""
            value="{{coverTiltPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetTiltPosition]]"
            on-change="coverTiltPositionSliderChanged"
          >
            <ha-cover-tilt-controls
              slot="extra"
              hidden$="[[entityObj.isTiltOnly]]"
              hass="[[hass]]"
              state-obj="[[stateObj]]"
            ></ha-cover-tilt-controls>
          </ha-labeled-slider>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computeEntityObj(hass, stateObj) {
            return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ](hass, stateObj);
          }

          stateObjChanged(newVal) {
            if (newVal) {
              this.setProperties({
                coverPositionSliderValue: newVal.attributes.current_position,
                coverTiltPositionSliderValue:
                  newVal.attributes.current_tilt_position,
              });
            }
          }

          computeClassNames(stateObj) {
            var classes = [
              Object(
                _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ]
              )(stateObj, ["current_position", "current_tilt_position"]),
              Object(
                _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__[
                  "default"
                ]
              )(stateObj, FEATURE_CLASS_NAMES),
            ];
            return classes.join(" ");
          }

          coverPositionSliderChanged(ev) {
            this.entityObj.setCoverPosition(ev.target.value);
          }

          coverTiltPositionSliderChanged(ev) {
            this.entityObj.setCoverTiltPosition(ev.target.value);
          }
        }

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

        class MoreInfoDefault extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
    `;
          }

          static get properties() {
            return {
              stateObj: {
                type: Object,
              },
            };
          }
        }

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

        /*
         * @appliesMixin EventsMixin
         */

        class MoreInfoFan extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        .container-speed_list,
        .container-direction,
        .container-oscillating {
          display: none;
        }

        .has-speed_list .container-speed_list,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-speed_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.speed')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.speed]]"
              on-selected-changed="speedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <paper-toggle-button
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </paper-toggle-button>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <paper-icon-button
              icon="hass:rotate-left"
              on-click="onDirectionLeft"
              title="Left"
              disabled="[[computeIsRotatingLeft(stateObj)]]"
            ></paper-icon-button>
            <paper-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionRight"
              title="Right"
              disabled="[[computeIsRotatingRight(stateObj)]]"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="speed,speed_list,oscillating,direction"
      ></ha-attributes>
    `;
          }

          static get properties() {
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
          }

          stateObjChanged(newVal, oldVal) {
            if (newVal) {
              this.setProperties({
                oscillationToggleChecked: newVal.attributes.oscillating,
              });
            }

            if (oldVal) {
              setTimeout(() => {
                this.fire("iron-resize");
              }, 500);
            }
          }

          computeClassNames(stateObj) {
            return (
              "more-info-fan " +
              Object(
                _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__[
                  "default"
                ]
              )(stateObj, ["oscillating", "speed_list", "direction"])
            );
          }

          speedChanged(ev) {
            var oldVal = this.stateObj.attributes.speed;
            var newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.hass.callService("fan", "turn_on", {
              entity_id: this.stateObj.entity_id,
              speed: newVal,
            });
          }

          oscillationToggleChanged(ev) {
            var oldVal = this.stateObj.attributes.oscillating;
            var newVal = ev.target.checked;
            if (oldVal === newVal) return;
            this.hass.callService("fan", "oscillate", {
              entity_id: this.stateObj.entity_id,
              oscillating: newVal,
            });
          }

          onDirectionLeft() {
            this.hass.callService("fan", "set_direction", {
              entity_id: this.stateObj.entity_id,
              direction: "reverse",
            });
          }

          onDirectionRight() {
            this.hass.callService("fan", "set_direction", {
              entity_id: this.stateObj.entity_id,
              direction: "forward",
            });
          }

          computeIsRotatingLeft(stateObj) {
            return stateObj.attributes.direction === "reverse";
          }

          computeIsRotatingRight(stateObj) {
            return stateObj.attributes.direction === "forward";
          }
        }

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

        class MoreInfoGroup extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        .child-card {
          margin-bottom: 8px;
        }

        .child-card:last-child {
          margin-bottom: 0;
        }
      </style>

      <div id="groupedControlDetails"></div>
      <template is="dom-repeat" items="[[states]]" as="state">
        <div class="child-card">
          <state-card-content
            state-obj="[[state]]"
            hass="[[hass]]"
          ></state-card-content>
        </div>
      </template>
    `;
          }

          static get properties() {
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
          }

          static get observers() {
            return ["statesChanged(stateObj, states)"];
          }

          computeStates(stateObj, hass) {
            var states = [];
            var entIds = stateObj.attributes.entity_id || [];

            for (var i = 0; i < entIds.length; i++) {
              var state = hass.states[entIds[i]];

              if (state) {
                states.push(state);
              }
            }

            return states;
          }

          statesChanged(stateObj, states) {
            let groupDomainStateObj = false;
            let groupDomain = false;

            if (states && states.length > 0) {
              const baseStateObj =
                states.find((s) => s.state === "on") || states[0];
              groupDomain = Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(baseStateObj); // Groups need to be filtered out or we'll show content of
              // first child above the children of the current group

              if (groupDomain !== "group") {
                groupDomainStateObj = Object.assign({}, baseStateObj, {
                  entity_id: stateObj.entity_id,
                  attributes: Object.assign({}, baseStateObj.attributes),
                });

                for (let i = 0; i < states.length; i++) {
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
              const el = Object(
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
          }
        }

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

        class MoreInfoHistoryGraph extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          margin-bottom: 6px;
        }
      </style>
      <ha-history_graph-card
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog=""
      >
        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
      </ha-history_graph-card>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
            };
          }
        }

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

        class DatetimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `;
          }

          constructor() {
            super();
            this.is_ready = false;
          }

          static get properties() {
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
          }

          ready() {
            super.ready();
            this.is_ready = true;
          }
          /* Convert the date in the stateObj into a string useable by vaadin-date-picker */

          getDateString(stateObj) {
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
          }
          /* Should fire when any value was changed *by the user*, not b/c of setting
           * initial values. */

          dateTimeChanged() {
            // Check if the change is really coming from the user
            if (!this.is_ready) {
              return;
            }

            let changed = false;
            let minuteFiller;
            const serviceData = {
              entity_id: this.stateObj.entity_id,
            };

            if (this.stateObj.attributes.has_time) {
              changed |=
                parseInt(this.selectedMinute) !==
                this.stateObj.attributes.minute;
              changed |=
                parseInt(this.selectedHour) !== this.stateObj.attributes.hour;

              if (this.selectedMinute < 10) {
                minuteFiller = "0";
              } else {
                minuteFiller = "";
              }

              var timeStr =
                this.selectedHour + ":" + minuteFiller + this.selectedMinute;
              serviceData.time = timeStr;
            }

            if (this.stateObj.attributes.has_date) {
              if (this.selectedDate.length === 0) {
                return; // Date was not set
              }

              const dateValInput = new Date(this.selectedDate);
              const dateValState = new Date(
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
          }

          stateObjChanged(newVal) {
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
          }

          doesHaveDate(stateObj) {
            return stateObj.attributes.has_date;
          }

          doesHaveTime(stateObj) {
            return stateObj.attributes.has_time;
          }

          computeClassNames(stateObj) {
            return (
              "more-info-input_datetime " +
              Object(
                _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__[
                  "default"
                ]
              )(stateObj, ["has_time", "has_date"])
            );
          }
        }

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

        const FEATURE_CLASS_NAMES = {
          1: "has-brightness",
          2: "has-color_temp",
          4: "has-effect_list",
          16: "has-color",
          128: "has-white_value",
        };
        /*
         * @appliesMixin EventsMixin
         */

        class MoreInfoLight extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        .effect_list,
        .brightness,
        .color_temp,
        .white_value {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .color_temp {
          --ha-slider-background: -webkit-linear-gradient(
            right,
            rgb(255, 160, 0) 0%,
            white 50%,
            rgb(166, 209, 255) 100%
          );
          /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
          --paper-slider-knob-start-border-color: var(--primary-color);
        }

        .segmentationContainer {
          position: relative;
          width: 100%;
        }

        ha-color-picker {
          display: block;
          width: 100%;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          padding: 0px;
          max-height: 0px;
          width: 23px;
          height: 23px;
          opacity: var(--dark-secondary-opacity);
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-color.is-on .segmentationContainer .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          width: 23px;
          height: 23px;
          padding: 0px;
          opacity: var(--dark-secondary-opacity);
        }

        .has-effect_list.is-on .effect_list,
        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          max-height: 84px;
        }

        .has-brightness .has-color_temp.is-on,
        .has-white_value.is-on {
          margin-top: -16px;
        }

        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          padding-top: 16px;
        }

        .has-color.is-on .segmentationButton {
          max-height: 100px;
          overflow: visible;
        }

        .has-color.is-on ha-color-picker {
          max-height: 500px;
          overflow: visible;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .is-unavailable .control {
          max-height: 0px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="control brightness">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.brightness')]]"
            icon="hass:brightness-5"
            min="1"
            max="255"
            value="{{brightnessSliderValue}}"
            on-change="brightnessSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control color_temp">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.color_temperature')]]"
            icon="hass:thermometer"
            min="[[stateObj.attributes.min_mireds]]"
            max="[[stateObj.attributes.max_mireds]]"
            value="{{ctSliderValue}}"
            on-change="ctSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control white_value">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.white_value')]]"
            icon="hass:file-word-box"
            max="255"
            value="{{wvSliderValue}}"
            on-change="wvSliderChanged"
          ></ha-labeled-slider>
        </div>
        <div class="segmentationContainer">
          <ha-color-picker
            class="control color"
            on-colorselected="colorPicked"
            desired-hs-color="{{colorPickerColor}}"
            throttle="500"
            hue-segments="{{hueSegments}}"
            saturation-segments="{{saturationSegments}}"
          >
          </ha-color-picker>
          <paper-icon-button
            icon="mdi:palette"
            on-click="segmentClick"
            class="control segmentationButton"
          ></paper-icon-button>
        </div>

        <div class="control effect_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.light.effect')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.effect]]"
              on-selected-changed="effectChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.effect_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <ha-attributes
          state-obj="[[stateObj]]"
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"
        ></ha-attributes>
      </div>
    `;
          }

          static get properties() {
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
          }

          stateObjChanged(newVal, oldVal) {
            const props = {
              brightnessSliderValue: 0,
            };

            if (newVal && newVal.state === "on") {
              props.brightnessSliderValue = newVal.attributes.brightness;
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
              setTimeout(() => {
                this.fire("iron-resize");
              }, 500);
            }
          }

          computeClassNames(stateObj) {
            const classes = [
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
          }

          effectChanged(ev) {
            var oldVal = this.stateObj.attributes.effect;
            var newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.hass.callService("light", "turn_on", {
              entity_id: this.stateObj.entity_id,
              effect: newVal,
            });
          }

          brightnessSliderChanged(ev) {
            var bri = parseInt(ev.target.value, 10);
            if (isNaN(bri)) return;
            this.hass.callService("light", "turn_on", {
              entity_id: this.stateObj.entity_id,
              brightness: bri,
            });
          }

          ctSliderChanged(ev) {
            var ct = parseInt(ev.target.value, 10);
            if (isNaN(ct)) return;
            this.hass.callService("light", "turn_on", {
              entity_id: this.stateObj.entity_id,
              color_temp: ct,
            });
          }

          wvSliderChanged(ev) {
            var wv = parseInt(ev.target.value, 10);
            if (isNaN(wv)) return;
            this.hass.callService("light", "turn_on", {
              entity_id: this.stateObj.entity_id,
              white_value: wv,
            });
          }

          segmentClick() {
            if (this.hueSegments === 24 && this.saturationSegments === 8) {
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
          }

          serviceChangeColor(hass, entityId, color) {
            hass.callService("light", "turn_on", {
              entity_id: entityId,
              hs_color: [color.h, color.s * 100],
            });
          }
          /**
           * Called when a new color has been picked.
           * should be throttled with the 'throttle=' attribute of the color picker
           */

          colorPicked(ev) {
            this.serviceChangeColor(
              this.hass,
              this.stateObj.entity_id,
              ev.detail.hs
            );
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class MoreInfoLock extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input
          label="[[localize('ui.card.lock.code')]]"
          value="{{enteredCode}}"
          pattern="[[stateObj.attributes.code_format]]"
          type="password"
        ></paper-input>
        <mwc-button
          on-click="callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </template>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="code_format"
      ></ha-attributes>
    `;
          }

          static get properties() {
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
          }

          stateObjChanged(newVal) {
            if (newVal) {
              this.isLocked = newVal.state === "locked";
            }
          }

          callService(ev) {
            const service = ev.target.getAttribute("data-service");
            const data = {
              entity_id: this.stateObj.entity_id,
              code: this.enteredCode,
            };
            this.hass.callService("lock", service, data);
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        class MoreInfoMediaPlayer extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .media-state {
          text-transform: capitalize;
        }

        paper-icon-button[highlight] {
          color: var(--accent-color);
        }

        .volume {
          margin-bottom: 8px;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-volume_level .volume {
          max-height: 40px;
        }

        iron-icon.source-input {
          padding: 7px;
          margin-top: 15px;
        }

        ha-paper-dropdown-menu.source-input {
          margin-left: 10px;
        }

        [hidden] {
          display: none !important;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="layout horizontal">
          <div class="flex">
            <paper-icon-button
              icon="hass:power"
              highlight$="[[playerObj.isOff]]"
              on-click="handleTogglePower"
              hidden$="[[computeHidePowerButton(playerObj)]]"
            ></paper-icon-button>
          </div>
          <div>
            <template
              is="dom-if"
              if="[[computeShowPlaybackControls(playerObj)]]"
            >
              <paper-icon-button
                icon="hass:skip-previous"
                on-click="handlePrevious"
                hidden$="[[!playerObj.supportsPreviousTrack]]"
              ></paper-icon-button>
              <paper-icon-button
                icon="[[computePlaybackControlIcon(playerObj)]]"
                on-click="handlePlaybackControl"
                hidden$="[[!computePlaybackControlIcon(playerObj)]]"
                highlight=""
              ></paper-icon-button>
              <paper-icon-button
                icon="hass:skip-next"
                on-click="handleNext"
                hidden$="[[!playerObj.supportsNextTrack]]"
              ></paper-icon-button>
            </template>
          </div>
        </div>
        <!-- VOLUME -->
        <div
          class="volume_buttons center horizontal layout"
          hidden$="[[computeHideVolumeButtons(playerObj)]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            icon="hass:volume-off"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeDown"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeDown"
            on-touchstart="handleVolumeDown"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-medium"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeUp"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeUp"
            on-touchstart="handleVolumeUp"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-high"
          ></paper-icon-button>
        </div>
        <div
          class="volume center horizontal layout"
          hidden$="[[!playerObj.supportsVolumeSet]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            hidden$="[[playerObj.supportsVolumeButtons]]"
            icon="[[computeMuteVolumeIcon(playerObj)]]"
          ></paper-icon-button>
          <ha-paper-slider
            disabled$="[[playerObj.isMuted]]"
            min="0"
            max="100"
            value="[[playerObj.volumeSliderValue]]"
            on-change="volumeSliderChanged"
            class="flex"
            ignore-bar-touch=""
            dir="{{rtl}}"
          >
          </ha-paper-slider>
        </div>
        <!-- SOURCE PICKER -->
        <div
          class="controls layout horizontal justified"
          hidden$="[[computeHideSelectSource(playerObj)]]"
        >
          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
          <ha-paper-dropdown-menu
            class="flex source-input"
            dynamic-align=""
            label-float=""
            label="[[localize('ui.card.media_player.source')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="[[playerObj.source]]"
              on-selected-changed="handleSourceChanged"
            >
              <template is="dom-repeat" items="[[playerObj.sourceList]]">
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>
        <!-- SOUND MODE PICKER -->
        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">
          <div class="controls layout horizontal justified">
            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
            <ha-paper-dropdown-menu
              class="flex source-input"
              dynamic-align
              label-float
              label="[[localize('ui.card.media_player.sound_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                selected="[[playerObj.soundMode]]"
                on-selected-changed="handleSoundModeChanged"
              >
                <template is="dom-repeat" items="[[playerObj.soundModeList]]">
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>
        <!-- TTS -->
        <div
          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"
          class="layout horizontal end"
        >
          <paper-input
            id="ttsInput"
            label="[[localize('ui.card.media_player.text_to_speak')]]"
            class="flex"
            value="{{ttsMessage}}"
            on-keydown="ttsCheckForEnter"
          ></paper-input>
          <paper-icon-button
            icon="hass:send"
            on-click="sendTTS"
          ></paper-icon-button>
        </div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computePlayerObj(hass, stateObj) {
            return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__[
              "default"
            ](hass, stateObj);
          }

          playerObjChanged(newVal, oldVal) {
            if (oldVal) {
              setTimeout(() => {
                this.fire("iron-resize");
              }, 500);
            }
          }

          computeClassNames(stateObj) {
            return Object(
              _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__[
                "default"
              ]
            )(stateObj, ["volume_level"]);
          }

          computeMuteVolumeIcon(playerObj) {
            return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
          }

          computeHideVolumeButtons(playerObj) {
            return !playerObj.supportsVolumeButtons || playerObj.isOff;
          }

          computeShowPlaybackControls(playerObj) {
            return !playerObj.isOff && playerObj.hasMediaControl;
          }

          computePlaybackControlIcon(playerObj) {
            if (playerObj.isPlaying) {
              return playerObj.supportsPause ? "hass:pause" : "hass:stop";
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
          }

          computeHidePowerButton(playerObj) {
            return playerObj.isOff
              ? !playerObj.supportsTurnOn
              : !playerObj.supportsTurnOff;
          }

          computeHideSelectSource(playerObj) {
            return (
              playerObj.isOff ||
              !playerObj.supportsSelectSource ||
              !playerObj.sourceList
            );
          }

          computeHideSelectSoundMode(playerObj) {
            return (
              playerObj.isOff ||
              !playerObj.supportsSelectSoundMode ||
              !playerObj.soundModeList
            );
          }

          computeHideTTS(ttsLoaded, playerObj) {
            return !ttsLoaded || !playerObj.supportsPlayMedia;
          }

          computeTTSLoaded(hass) {
            return Object(
              _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__[
                "default"
              ]
            )(hass, "tts");
          }

          handleTogglePower() {
            this.playerObj.togglePower();
          }

          handlePrevious() {
            this.playerObj.previousTrack();
          }

          handlePlaybackControl() {
            this.playerObj.mediaPlayPause();
          }

          handleNext() {
            this.playerObj.nextTrack();
          }

          handleSourceChanged(ev) {
            if (!this.playerObj) return;
            var oldVal = this.playerObj.source;
            var newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.playerObj.selectSource(newVal);
          }

          handleSoundModeChanged(ev) {
            if (!this.playerObj) return;
            var oldVal = this.playerObj.soundMode;
            var newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.playerObj.selectSoundMode(newVal);
          }

          handleVolumeTap() {
            if (!this.playerObj.supportsVolumeMute) {
              return;
            }

            this.playerObj.volumeMute(!this.playerObj.isMuted);
          }

          handleVolumeTouchEnd(ev) {
            /* when touch ends, we must prevent this from
             * becoming a mousedown, up, click by emulation */
            ev.preventDefault();
          }

          handleVolumeUp() {
            const obj = this.$.volumeUp;
            this.handleVolumeWorker("volume_up", obj, true);
          }

          handleVolumeDown() {
            const obj = this.$.volumeDown;
            this.handleVolumeWorker("volume_down", obj, true);
          }

          handleVolumeWorker(service, obj, force) {
            if (force || (obj !== undefined && obj.pointerDown)) {
              this.playerObj.callService(service);
              setTimeout(
                () => this.handleVolumeWorker(service, obj, false),
                500
              );
            }
          }

          volumeSliderChanged(ev) {
            const volPercentage = parseFloat(ev.target.value);
            const volume = volPercentage > 0 ? volPercentage / 100 : 0;
            this.playerObj.setVolume(volume);
          }

          ttsCheckForEnter(ev) {
            if (ev.keyCode === 13) this.sendTTS();
          }

          sendTTS() {
            const services = this.hass.services.tts;
            const serviceKeys = Object.keys(services).sort();
            let service;
            let i;

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
          }

          _computeRTLDirection(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__[
                "computeRTLDirection"
              ]
            )(hass);
          }
        }

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

        class MoreInfoScript extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="layout vertical">
        <div class="data-entry layout justified horizontal">
          <div class="key">
            [[localize('ui.dialogs.more_info_control.script.last_action')]]
          </div>
          <div class="value">[[stateObj.attributes.last_action]]</div>
        </div>
      </div>
    `;
          }

          static get properties() {
            return {
              stateObj: {
                type: Object,
              },
            };
          }
        }

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

        class MoreInfoSun extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>

      <template
        is="dom-repeat"
        items="[[computeOrder(risingDate, settingDate)]]"
      >
        <div class="data-entry layout justified horizontal">
          <div class="key">
            <span>[[itemCaption(item)]]</span>
            <ha-relative-time
              hass="[[hass]]"
              datetime-obj="[[itemDate(item)]]"
            ></ha-relative-time>
          </div>
          <div class="value">[[itemValue(item)]]</div>
        </div>
      </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">
          [[localize('ui.dialogs.more_info_control.sun.elevation')]]
        </div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
      </div>
    `;
          }

          static get properties() {
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
          }

          computeRising(stateObj) {
            return new Date(stateObj.attributes.next_rising);
          }

          computeSetting(stateObj) {
            return new Date(stateObj.attributes.next_setting);
          }

          computeOrder(risingDate, settingDate) {
            return risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
          }

          itemCaption(type) {
            if (type === "ris") {
              return this.localize("ui.dialogs.more_info_control.sun.rising");
            }

            return this.localize("ui.dialogs.more_info_control.sun.setting");
          }

          itemDate(type) {
            return type === "ris" ? this.risingDate : this.settingDate;
          }

          itemValue(type) {
            return Object(
              _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(this.itemDate(type), this.hass.language);
          }
        }

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

        class MoreInfoUpdater extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        .link {
          color: #03a9f4;
        }
      </style>

      <div>
        <a
          class="link"
          href="https://www.home-assistant.io/docs/installation/updating/"
          target="_blank"
          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a
        >
      </div>
    `;
          }

          static get properties() {
            return {
              stateObj: {
                type: Object,
              },
            };
          }

          computeReleaseNotes(stateObj) {
            return (
              stateObj.attributes.release_notes ||
              "https://www.home-assistant.io/docs/installation/updating/"
            );
          }
        }

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

        class MoreInfoVacuum extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        .status-subtitle {
          color: var(--secondary-text-color);
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class="horizontal justified layout">
        <div hidden$="[[!supportsStatus(stateObj)]]">
          <span class="status-subtitle">Status: </span
          ><span><strong>[[stateObj.attributes.status]]</strong></span>
        </div>
        <div hidden$="[[!supportsBattery(stateObj)]]">
          <span
            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>
            [[stateObj.attributes.battery_level]] %</span
          >
        </div>
      </div>
      <div hidden$="[[!supportsCommandBar(stateObj)]]">
        <p></p>
        <div class="status-subtitle">Vacuum cleaner commands:</div>
        <div class="horizontal justified layout">
          <template is="dom-if" if="[[supportsStart(stateObj)]]">
            <div>
              <paper-icon-button
                icon="hass:play"
                on-click="onStart"
                title="Start"
              ></paper-icon-button>
            </div>
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:pause"
                on-click="onPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>
          <template is="dom-if" if="[[!supportsStart(stateObj)]]">
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:play-pause"
                on-click="onPlayPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>

          <div hidden$="[[!supportsStop(stateObj)]]">
            <paper-icon-button
              icon="hass:stop"
              on-click="onStop"
              title="Stop"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsCleanSpot(stateObj)]]">
            <paper-icon-button
              icon="hass:broom"
              on-click="onCleanSpot"
              title="Clean spot"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsLocate(stateObj)]]">
            <paper-icon-button
              icon="hass:map-marker"
              on-click="onLocate"
              title="Locate"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsReturnHome(stateObj)]]">
            <paper-icon-button
              icon="hass:home-map-marker"
              on-click="onReturnHome"
              title="Return home"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <div hidden$="[[!supportsFanSpeed(stateObj)]]">
        <div class="horizontal justified layout">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="Fan speed"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.fan_speed]]"
              on-selected-changed="fanSpeedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.fan_speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
          <div
            style="justify-content: center; align-self: center; padding-top: 1.3em"
          >
            <span
              ><iron-icon icon="hass:fan"></iron-icon>
              [[stateObj.attributes.fan_speed]]</span
            >
          </div>
        </div>
        <p></p>
      </div>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"
      ></ha-attributes>
    `;
          }

          static get properties() {
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
          }

          supportsPause(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 4);
          }

          supportsStop(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 8);
          }

          supportsReturnHome(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 16);
          }

          supportsFanSpeed(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 32);
          }

          supportsBattery(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 64);
          }

          supportsStatus(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 128);
          }

          supportsLocate(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 512);
          }

          supportsCleanSpot(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 1024);
          }

          supportsStart(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__[
                "supportsFeature"
              ]
            )(stateObj, 8192);
          }

          supportsCommandBar(stateObj) {
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
          }

          fanSpeedChanged(ev) {
            var oldVal = this.stateObj.attributes.fan_speed;
            var newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.hass.callService("vacuum", "set_fan_speed", {
              entity_id: this.stateObj.entity_id,
              fan_speed: newVal,
            });
          }

          onStop() {
            this.hass.callService("vacuum", "stop", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onPlayPause() {
            this.hass.callService("vacuum", "start_pause", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onPause() {
            this.hass.callService("vacuum", "pause", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onStart() {
            this.hass.callService("vacuum", "start", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onLocate() {
            this.hass.callService("vacuum", "locate", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onCleanSpot() {
            this.hass.callService("vacuum", "clean_spot", {
              entity_id: this.stateObj.entity_id,
            });
          }

          onReturnHome() {
            this.hass.callService("vacuum", "return_to_base", {
              entity_id: this.stateObj.entity_id,
            });
          }
        }

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

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        class MoreInfoWaterHeater extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
              "html"
            ]`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-away_mode,
        .container-temperature,
        .container-operation_list,

        .has-away_mode .container-away_mode,
        .has-target_temperature .container-temperature,
        .has-operation_mode .container-operation_list,

        .container-operation_list iron-icon,

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <paper-toggle-button
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>
      </div>
    `;
          }

          static get properties() {
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
          }

          stateObjChanged(newVal, oldVal) {
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
                () => {
                  this.fire("iron-resize");
                }
              );
            }
          }

          computeTemperatureStepSize(hass, stateObj) {
            if (stateObj.attributes.target_temp_step) {
              return stateObj.attributes.target_temp_step;
            }

            if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
              return 1;
            }

            return 0.5;
          }

          supportsTemperatureControls(stateObj) {
            return this.supportsTemperature(stateObj);
          }

          supportsTemperature(stateObj) {
            return (
              Object(
                _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                  "supportsFeature"
                ]
              )(stateObj, 1) &&
              typeof stateObj.attributes.temperature === "number"
            );
          }

          supportsOperationMode(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                "supportsFeature"
              ]
            )(stateObj, 2);
          }

          supportsAwayMode(stateObj) {
            return Object(
              _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__[
                "supportsFeature"
              ]
            )(stateObj, 4);
          }

          computeClassNames(stateObj) {
            const _featureClassNames = {
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
          }

          targetTemperatureChanged(ev) {
            const temperature = ev.target.value;
            if (temperature === this.stateObj.attributes.temperature) return;
            this.callServiceHelper("set_temperature", {
              temperature: temperature,
            });
          }

          awayToggleChanged(ev) {
            const oldVal = this.stateObj.attributes.away_mode === "on";
            const newVal = ev.target.checked;
            if (oldVal === newVal) return;
            this.callServiceHelper("set_away_mode", {
              away_mode: newVal,
            });
          }

          handleOperationmodeChanged(ev) {
            const oldVal = this.stateObj.attributes.operation_mode;
            const newVal = ev.detail.value;
            if (!newVal || oldVal === newVal) return;
            this.callServiceHelper("set_operation_mode", {
              operation_mode: newVal,
            });
          }

          callServiceHelper(service, data) {
            // We call stateChanged after a successful call to re-sync the inputs
            // with the state. It will be out of sync if our service call did not
            // result in the entity to be turned on. Since the state is not changing,
            // the resync is not called automatic.

            /* eslint-disable no-param-reassign */
            data.entity_id = this.stateObj.entity_id;
            /* eslint-enable no-param-reassign */

            this.hass.callService("water_heater", service, data).then(() => {
              this.stateObjChanged(this.stateObj);
            });
          }

          _localizeOperationMode(localize, mode) {
            return localize(`state.water_heater.${mode}`) || mode;
          }
        }

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

        /*
         * @appliesMixin LocalizeMixin
         */

        class MoreInfoWeather extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        iron-icon {
          color: var(--paper-item-icon-color);
        }
        .section {
          margin: 16px 0 8px 0;
          font-size: 1.2em;
        }

        .flex {
          display: flex;
          height: 32px;
          align-items: center;
        }

        .main {
          flex: 1;
          margin-left: 24px;
        }

        .temp,
        .templow {
          min-width: 48px;
          text-align: right;
        }

        .templow {
          margin: 0 16px;
          color: var(--secondary-text-color);
        }

        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
        }
      </style>

      <div class="flex">
        <iron-icon icon="hass:thermometer"></iron-icon>
        <div class="main">
          [[localize('ui.card.weather.attributes.temperature')]]
        </div>
        <div>
          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]
        </div>
      </div>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
        <div class="flex">
          <iron-icon icon="hass:gauge"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.air_pressure')]]
          </div>
          <div>
            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
        <div class="flex">
          <iron-icon icon="hass:water-percent"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.humidity')]]
          </div>
          <div>[[stateObj.attributes.humidity]] %</div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
        <div class="flex">
          <iron-icon icon="hass:weather-windy"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.wind_speed')]]
          </div>
          <div>
            [[getWind(stateObj.attributes.wind_speed,
            stateObj.attributes.wind_bearing, localize)]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
        <div class="flex">
          <iron-icon icon="hass:eye"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.visibility')]]
          </div>
          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
        </div>
      </template>

      <template is="dom-if" if="[[stateObj.attributes.forecast]]">
        <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
          <div class="flex">
            <template is="dom-if" if="[[_showValue(item.condition)]]">
              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
            </template>
            <template is="dom-if" if="[[!_showValue(item.templow)]]">
              <div class="main">[[computeDateTime(item.datetime)]]</div>
            </template>
            <template is="dom-if" if="[[_showValue(item.templow)]]">
              <div class="main">[[computeDate(item.datetime)]]</div>
              <div class="templow">
                [[item.templow]] [[getUnit('temperature')]]
              </div>
            </template>
            <div class="temp">
              [[item.temperature]] [[getUnit('temperature')]]
            </div>
          </div>
        </template>
      </template>

      <template is="dom-if" if="stateObj.attributes.attribution">
        <div class="attribution">[[stateObj.attributes.attribution]]</div>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
            };
          }

          constructor() {
            super();
            this.cardinalDirections = [
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
            this.weatherIcons = {
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
          }

          computeDate(data) {
            const date = new Date(data);
            return date.toLocaleDateString(this.hass.language, {
              weekday: "long",
              month: "short",
              day: "numeric",
            });
          }

          computeDateTime(data) {
            const date = new Date(data);
            return date.toLocaleDateString(this.hass.language, {
              weekday: "long",
              hour: "numeric",
            });
          }

          getUnit(measure) {
            const lengthUnit = this.hass.config.unit_system.length || "";

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
          }

          windBearingToText(degree) {
            const degreenum = parseInt(degree);

            if (isFinite(degreenum)) {
              return this.cardinalDirections[
                (((degreenum + 11.25) / 22.5) | 0) % 16
              ];
            }

            return degree;
          }

          getWind(speed, bearing, localize) {
            if (bearing != null) {
              const cardinalDirection = this.windBearingToText(bearing);
              return `${speed} ${this.getUnit("length")}/h (${localize(
                `ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`
              ) || cardinalDirection})`;
            }

            return `${speed} ${this.getUnit("length")}/h`;
          }

          getWeatherIcon(condition) {
            return this.weatherIcons[condition];
          }

          _showValue(item) {
            return typeof item !== "undefined" && item !== null;
          }
        }

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

        const DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
        /*
         * @appliesMixin EventsMixin
         */

        class MoreInfoControls extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style include="ha-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          icon="hass:close"
          dialog-dismiss=""
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[canConfigure]]">
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(hass, stateObj)]]"
          restamp=""
        >
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></more-info-content>
      </paper-dialog-scrollable>
    `;
          }

          static get properties() {
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
          }

          enlarge() {
            this.large = !this.large;
          }

          _computeShowStateInfo(stateObj) {
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
          }

          _computeShowHistoryComponent(hass, stateObj) {
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
          }

          _computeDomain(stateObj) {
            return stateObj
              ? Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__[
                    "default"
                  ]
                )(stateObj)
              : "";
          }

          _computeStateName(stateObj) {
            return stateObj
              ? Object(
                  _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__[
                    "default"
                  ]
                )(stateObj)
              : "";
          }

          _stateObjChanged(newVal) {
            if (!newVal) {
              return;
            }

            if (
              this._cacheConfig.cacheKey !== `more_info.${newVal.entity_id}`
            ) {
              this._cacheConfig = Object.assign({}, this._cacheConfig, {
                cacheKey: `more_info.${newVal.entity_id}`,
              });
            }
          }

          _gotoSettings() {
            this.fire("more-info-page", {
              page: "settings",
            });
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
                "computeRTL"
              ]
            )(hass);
          }
        }

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

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        class MoreInfoSettings extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"]
        )(
          Object(
            _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
          )(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
              "PolymerElement"
            ]
          )
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
              "html"
            ]`
      <style>
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);

          /* to fit save button */
          padding-right: 0;
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        app-toolbar mwc-button {
          font-size: 0.8em;
          margin: 0;
        }

        .form {
          padding: 0 24px 24px;
        }
      </style>

      <app-toolbar>
        <ha-paper-icon-button-arrow-prev
          on-click="_backTapped"
        ></ha-paper-icon-button-arrow-prev>
        <div main-title="">[[_computeStateName(stateObj)]]</div>
        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"
          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button
        >
      </app-toolbar>

      <div class="form">
        <paper-input
          value="{{_name}}"
          label="[[localize('ui.dialogs.more_info_settings.name')]]"
        ></paper-input>
        <paper-input
          value="{{_entityId}}"
          label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
          error-message="Domain needs to stay the same"
          invalid="[[_computeInvalid(_entityId)]]"
        ></paper-input>
      </div>
    `;
          }

          static get properties() {
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
          }

          _computeStateName(stateObj) {
            if (!stateObj) return "";
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                "default"
              ]
            )(stateObj);
          }

          _computeInvalid(entityId) {
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
          }

          _registryInfoChanged(newVal) {
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
          }

          _backTapped() {
            this.fire("more-info-page", {
              page: null,
            });
          }

          async _save() {
            try {
              const info = await Object(
                _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__[
                  "updateEntityRegistryEntry"
                ]
              )(this.hass, this.stateObj.entity_id, {
                name: this._name,
                new_entity_id: this._entityId,
              });
              this.registryInfo = info; // Keep the more info dialog open at the new entity.

              if (this.stateObj.entity_id !== this._entityId) {
                this.fire("hass-more-info", {
                  entityId: this._entityId,
                });
              }
            } catch (err) {
              alert(`save failed: ${err.message}`);
            }
          }
        }

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

        /**
         * @polymerMixin
         * @appliesMixin EventsMixin
         * @appliesMixin PaperDialogBehavior
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends Object(
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
            ) {
              static get properties() {
                return {
                  withBackdrop: {
                    type: Boolean,
                    value: true,
                  },
                };
              }
            }
        );

        /***/
      },

    /***/ "./src/util/hass-attributes-util.js":
      /*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        const hassAttributeUtil = {};
        hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
          binary_sensor: [
            "battery",
            "cold",
            "connectivity",
            "door",
            "garage_door",
            "gas",
            "heat",
            "light",
            "lock",
            "moisture",
            "motion",
            "moving",
            "occupancy",
            "opening",
            "plug",
            "power",
            "presence",
            "problem",
            "safety",
            "smoke",
            "sound",
            "vibration",
            "window",
          ],
          cover: [
            "awning",
            "blind",
            "curtain",
            "damper",
            "door",
            "garage",
            "shade",
            "shutter",
            "window",
          ],
          sensor: [
            "battery",
            "humidity",
            "illuminance",
            "temperature",
            "pressure",
            "power",
            "signal_strength",
          ],
          switch: ["switch", "outlet"],
        };
        hassAttributeUtil.UNKNOWN_TYPE = "json";
        hassAttributeUtil.ADD_TYPE = "key-value";
        hassAttributeUtil.TYPE_TO_TAG = {
          string: "ha-customize-string",
          json: "ha-customize-string",
          icon: "ha-customize-icon",
          boolean: "ha-customize-boolean",
          array: "ha-customize-array",
          "key-value": "ha-customize-key-value",
        }; // Attributes here serve dual purpose:
        // 1) Any key of this object won't be shown in more-info window.
        // 2) Any key which has value other than undefined will appear in customization
        //    config according to its value.

        hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
          entity_picture: undefined,
          friendly_name: {
            type: "string",
            description: "Name",
          },
          icon: {
            type: "icon",
          },
          emulated_hue: {
            type: "boolean",
            domains: ["emulated_hue"],
          },
          emulated_hue_name: {
            type: "string",
            domains: ["emulated_hue"],
          },
          haaska_hidden: undefined,
          haaska_name: undefined,
          homebridge_hidden: {
            type: "boolean",
          },
          homebridge_name: {
            type: "string",
          },
          supported_features: undefined,
          attribution: undefined,
          custom_ui_more_info: {
            type: "string",
          },
          custom_ui_state_card: {
            type: "string",
          },
          device_class: {
            type: "array",
            options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
            description: "Device class",
            domains: ["binary_sensor", "cover", "sensor", "switch"],
          },
          hidden: {
            type: "boolean",
            description: "Hide from UI",
          },
          assumed_state: {
            type: "boolean",
            domains: [
              "switch",
              "light",
              "cover",
              "climate",
              "fan",
              "group",
              "water_heater",
            ],
          },
          initial_state: {
            type: "string",
            domains: ["automation"],
          },
          unit_of_measurement: {
            type: "string",
          },
        };
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = hassAttributeUtil;

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYW1lcmEtc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNsaW1hdGUtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS13YXRlcl9oZWF0ZXItY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlci10aW1lLWlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5X3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2hhLW1vcmUtaW5mby1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1hbGFybV9jb250cm9sX3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tYXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY292ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZmFuLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1oaXN0b3J5X2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1tZWRpYV9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1zdW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tdmFjdXVtLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2F0ZXJfaGVhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9tb3JlLWluZm8tc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9kaWFsb2ctbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9IFwiaGFzczpib29rbWFya1wiO1xuXG4vKiogUGFuZWwgdG8gc2hvdyB3aGVuIG5vIHBhbmVsIGlzIHBpY2tlZC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBTkVMID0gXCJsb3ZlbGFjZVwiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ1cGRhdGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VhdGhlclwiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwic2NlbmVcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICBcImNhbWVyYVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJzY2VuZVwiLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcImNsb3NlZFwiLCBcImxvY2tlZFwiLCBcIm9mZlwiXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4vc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vLyBFeHBlY3RzIGNsYXNzTmFtZXMgdG8gYmUgYW4gb2JqZWN0IG1hcHBpbmcgZmVhdHVyZS1iaXQgLT4gY2xhc3NOYW1lXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0dXJlQ2xhc3NOYW1lcyhcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGNsYXNzTmFtZXM6IHsgW2ZlYXR1cmU6IG51bWJlcl06IHN0cmluZyB9XG4pIHtcbiAgaWYgKCFzdGF0ZU9iaiB8fCAhc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc05hbWVzKVxuICAgIC5tYXAoKGZlYXR1cmUpID0+XG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIE51bWJlcihmZWF0dXJlKSkgPyBjbGFzc05hbWVzW2ZlYXR1cmVdIDogXCJcIlxuICAgIClcbiAgICAuZmlsdGVyKChhdHRyKSA9PiBhdHRyICE9PSBcIlwiKVxuICAgIC5qb2luKFwiIFwiKTtcbn1cbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGhhc3NBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsXCI7XG5cbmNsYXNzIEhhQXR0cmlidXRlcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuZGF0YS1lbnRyeSAudmFsdWUge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgaXRlbXM9XCJbW2NvbXB1dGVEaXNwbGF5QXR0cmlidXRlcyhzdGF0ZU9iaiwgZmlsdGVyc0FycmF5KV1dXCJcbiAgICAgICAgICBhcz1cImF0dHJpYnV0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5bW2Zvcm1hdEF0dHJpYnV0ZShhdHRyaWJ1dGUpXV08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgICBbW2Zvcm1hdEF0dHJpYnV0ZVZhbHVlKHN0YXRlT2JqLCBhdHRyaWJ1dGUpXV1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRpb25cIiBoaWRkZW4kPVwiW1shY29tcHV0ZUF0dHJpYnV0aW9uKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgW1tjb21wdXRlQXR0cmlidXRpb24oc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZXh0cmFGaWx0ZXJzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgZmlsdGVyc0FycmF5OiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVGaWx0ZXJzQXJyYXkoZXh0cmFGaWx0ZXJzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdChcIixcIikgOiBbXVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlRGlzcGxheUF0dHJpYnV0ZXMoc3RhdGVPYmosIGZpbHRlcnNBcnJheSkge1xuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlT2JqLmF0dHJpYnV0ZXMpLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJzQXJyYXkuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1hdEF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlLnJlcGxhY2UoL18vZywgXCIgXCIpO1xuICB9XG5cbiAgZm9ybWF0QXR0cmlidXRlVmFsdWUoc3RhdGVPYmosIGF0dHJpYnV0ZSkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiBcIi1cIjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5qb2luKFwiLCBcIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCA/IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKSA6IHZhbHVlO1xuICB9XG5cbiAgY29tcHV0ZUF0dHJpYnV0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYXR0cmlidXRlc1wiLCBIYUF0dHJpYnV0ZXMpO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNLFxuICBmZXRjaFN0cmVhbVVybCxcbiAgY29tcHV0ZU1KUEVHU3RyZWFtVXJsLFxufSBmcm9tIFwiLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxudHlwZSBITFNNb2R1bGUgPSB0eXBlb2YgaW1wb3J0KFwiaGxzLmpzXCIpO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNhbWVyYS1zdHJlYW1cIilcbmNsYXNzIEhhQ2FtZXJhU3RyZWFtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogQ2FtZXJhRW50aXR5O1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXR0YWNoZWQgPSBmYWxzZTtcbiAgLy8gV2Uga2VlcCB0cmFjayBpZiB3ZSBzaG91bGQgZm9yY2UgTUpQRUcgd2l0aCBhIHN0cmluZ1xuICAvLyB0aGF0IHdheSBpdCBhdXRvbWF0aWNhbGx5IHJlc2V0cyBpZiB3ZSBjaGFuZ2UgZW50aXR5LlxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mb3JjZU1KUEVHOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2hsc1BvbHlmaWxsSW5zdGFuY2U/OiBIbHM7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmogfHwgIXRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtfX0RFTU9fXyB8fCB0aGlzLl9zaG91bGRSZW5kZXJNSlBFR1xuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIEBsb2FkPSR7dGhpcy5fZWxlbWVudFJlc2l6ZWR9XG4gICAgICAgICAgICAgIC5zcmM9JHtfX0RFTU9fX1xuICAgICAgICAgICAgICAgID8gYC9hcGkvY2FtZXJhX3Byb3h5X3N0cmVhbS8ke3RoaXMuc3RhdGVPYmouZW50aXR5X2lkfWBcbiAgICAgICAgICAgICAgICA6IGNvbXB1dGVNSlBFR1N0cmVhbVVybCh0aGlzLnN0YXRlT2JqKX1cbiAgICAgICAgICAgICAgLmFsdD0ke2BQcmV2aWV3IG9mIHRoZSAke2NvbXB1dGVTdGF0ZU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9ialxuICAgICAgICAgICAgICApfSBjYW1lcmEuYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgYXV0b3BsYXlcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgcGxheXNpbmxpbmVcbiAgICAgICAgICAgICAgP2NvbnRyb2xzPSR7dGhpcy5zaG93Q29udHJvbHN9XG4gICAgICAgICAgICAgIEBsb2FkZWRkYXRhPSR7dGhpcy5fZWxlbWVudFJlc2l6ZWR9XG4gICAgICAgICAgICA+PC92aWRlbz5cbiAgICAgICAgICBgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3Qgc3RhdGVPYmpDaGFuZ2VkID0gY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpO1xuICAgIGNvbnN0IGF0dGFjaGVkQ2hhbmdlZCA9IGNoYW5nZWRQcm9wcy5oYXMoXCJfYXR0YWNoZWRcIik7XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICghc3RhdGVPYmpDaGFuZ2VkICYmICFhdHRhY2hlZENoYW5nZWQpIHx8XG4gICAgICAoc3RhdGVPYmpDaGFuZ2VkICYmIG9sZEVudGl0eUlkID09PSBjdXJFbnRpdHlJZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBhcmUgbm8gbG9uZ2VyIGF0dGFjaGVkLCBkZXN0cm95IHBvbHlmaWxsLlxuICAgIGlmIChhdHRhY2hlZENoYW5nZWQgJiYgIXRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHRvIGRvIGlmIHdlIGFyZSByZW5kZXIgTUpQRUcuXG4gICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck1KUEVHKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGVhciBkb3duIGV4aXN0aW5nIHBvbHlmaWxsLCBpZiBhdmFpbGFibGVcbiAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcblxuICAgIGlmIChjdXJFbnRpdHlJZCkge1xuICAgICAgdGhpcy5fc3RhcnRIbHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfc2hvdWxkUmVuZGVyTUpQRUcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPT09IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZCB8fFxuICAgICAgIXRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzdHJlYW1cIikgfHxcbiAgICAgICFzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZpZGVvRWwoKTogSFRNTFZpZGVvRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N0YXJ0SGxzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IEhscyA9ICgoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGxzLmpzXCIgKi8gXCJobHMuanNcIikpIGFzIGFueSlcbiAgICAgIC5kZWZhdWx0IGFzIEhMU01vZHVsZTtcbiAgICBsZXQgaGxzU3VwcG9ydGVkID0gSGxzLmlzU3VwcG9ydGVkKCk7XG4gICAgY29uc3QgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG5cbiAgICBpZiAoIWhsc1N1cHBvcnRlZCkge1xuICAgICAgaGxzU3VwcG9ydGVkID1cbiAgICAgICAgdmlkZW9FbC5jYW5QbGF5VHlwZShcImFwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsXCIpICE9PSBcIlwiO1xuICAgIH1cblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9mb3JjZU1KUEVHID0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgZmV0Y2hTdHJlYW1VcmwoXG4gICAgICAgIHRoaXMuaGFzcyEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZFxuICAgICAgKTtcblxuICAgICAgaWYgKEhscy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU1BvbHlmaWxsKHZpZGVvRWwsIEhscywgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU05hdGl2ZSh2aWRlb0VsLCB1cmwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRmFpbHMgaWYgd2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGEgc3RyZWFtXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTTmF0aXZlKHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsIHVybDogc3RyaW5nKSB7XG4gICAgdmlkZW9FbC5zcmMgPSB1cmw7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICB2aWRlb0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCByZXNvbHZlKVxuICAgICk7XG4gICAgdmlkZW9FbC5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNQb2x5ZmlsbChcbiAgICB2aWRlb0VsOiBIVE1MVmlkZW9FbGVtZW50LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIEhsczogSExTTW9kdWxlLFxuICAgIHVybDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IGhscyA9IG5ldyBIbHMoKTtcbiAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlID0gaGxzO1xuICAgIGhscy5hdHRhY2hNZWRpYSh2aWRlb0VsKTtcbiAgICBobHMub24oSGxzLkV2ZW50cy5NRURJQV9BVFRBQ0hFRCwgKCkgPT4ge1xuICAgICAgaGxzLmxvYWRTb3VyY2UodXJsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2VsZW1lbnRSZXNpemVkKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveVBvbHlmaWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QsXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNhbWVyYS1zdHJlYW1cIjogSGFDYW1lcmFTdHJlYW07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNsaW1hdGVDb250cm9sIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAvKiBsb2NhbCBET00gc3R5bGVzIGdvIGhlcmUgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmluLWZsdXgjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgICN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1zZWxmLWNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtYnV0dG9ucyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS0gbG9jYWwgRE9NIGdvZXMgaGVyZSAtLT5cbiAgICAgIDxkaXYgaWQ9XCJ0YXJnZXRfdGVtcGVyYXR1cmVcIj5bW3ZhbHVlXV0gW1t1bml0c11dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1idXR0b25zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLXVwXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaW5jcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tZG93blwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImRlY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcInZhbHVlQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgc3RlcDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcGVyYXR1cmVTdGF0ZUluRmx1eChpbkZsdXgpIHtcbiAgICB0aGlzLiQudGFyZ2V0X3RlbXBlcmF0dXJlLmNsYXNzTGlzdC50b2dnbGUoXCJpbi1mbHV4XCIsIGluRmx1eCk7XG4gIH1cblxuICBfcm91bmQodmFsKSB7XG4gICAgLy8gcm91bmQgdmFsdWUgdG8gcHJlY2lzaW9uIGRlcml2ZWQgZnJvbSBzdGVwXG4gICAgLy8gaW5zaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc291bmRhcjI0L3JvdW5kU2xpZGVyL2Jsb2IvbWFzdGVyL3NyYy9yb3VuZHNsaWRlci5qc1xuICAgIGNvbnN0IHMgPSB0aGlzLnN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gICAgcmV0dXJuIHNbMV0gPyBwYXJzZUZsb2F0KHZhbC50b0ZpeGVkKHNbMV0ubGVuZ3RoKSkgOiBNYXRoLnJvdW5kKHZhbCk7XG4gIH1cblxuICBpbmNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLl9yb3VuZCh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgIC8vIElmIG5vIGluaXRpYWwgdGFyZ2V0X3RlbXBcbiAgICAgIC8vIHRoaXMgZm9yY2VzIGNvbnRyb2wgdG8gc3RhcnRcbiAgICAgIC8vIGZyb20gdGhlIG1pbiBjb25maWd1cmVkIGluc3RlYWQgb2YgMFxuICAgICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1pbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy5fcm91bmQodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1pbikge1xuICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KHRydWUpO1xuICAgIH1cbiAgICBpZiAobmV3dmFsID49IHRoaXMubWluKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKCkge1xuICAgIC8vIHdoZW4gdGhlIGxhc3RfY2hhbmdlZCB0aW1lc3RhbXAgaXMgY2hhbmdlZCxcbiAgICAvLyB0cmlnZ2VyIGEgcG90ZW50aWFsIGV2ZW50IGZpcmUgaW5cbiAgICAvLyB0aGUgZnV0dXJlLCBhcyBsb25nIGFzIGxhc3QgY2hhbmdlZCBpcyBmYXIgZW5vdWdoIGluIHRoZVxuICAgIC8vIHBhc3QuXG4gICAgaWYgKHRoaXMubGFzdF9jaGFuZ2VkKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RfY2hhbmdlZCA+PSAyMDAwKSB7XG4gICAgICAgICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCAyMDEwKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2xpbWF0ZS1jb250cm9sXCIsIEhhQ2xpbWF0ZUNvbnRyb2wpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKipcbiAqIENvbG9yLXBpY2tlciBjdXN0b20gZWxlbWVudFxuICpcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDb2xvclBpY2tlciBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NhbnZhcyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2NhbnZhcyA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICNpbnRlcmFjdGlvbkxheWVyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICAjYmFja2dyb3VuZExheWVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAtLXdoZWVsLWJvcmRlcmNvbG9yOiB2YXIoLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICAtLXdoZWVsLWJvcmRlcndpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICAgIC0td2hlZWwtc2hhZG93OiB2YXIoXG4gICAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1zaGFkb3csXG4gICAgICAgICAgICByZ2IoMTUsIDE1LCAxNSkgMTBweCA1cHggNXB4IDBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAjbWFya2VyIHtcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgc3Ryb2tlOiB2YXIoLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcmNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcndpZHRoLCAzKTtcbiAgICAgICAgICBmaWx0ZXI6IHVybCgjbWFya2VyLXNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyYWdnaW5nICNtYXJrZXIge1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbG9yVG9vbHRpcCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgc3Ryb2tlOiB2YXIoLS1oYS1jb2xvci1waWNrZXItdG9vbHRpcC1ib3JkZXJjb2xvciwgd2hpdGUpO1xuICAgICAgICAgIHN0cm9rZS13aWR0aDogdmFyKC0taGEtY29sb3ItcGlja2VyLXRvb2x0aXAtYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvdWNoLmRyYWdnaW5nICNjb2xvclRvb2x0aXAge1xuICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGlkPVwiY2FudmFzXCI+XG4gICAgICAgIDxzdmcgaWQ9XCJpbnRlcmFjdGlvbkxheWVyXCI+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8ZmlsdGVyXG4gICAgICAgICAgICAgIGlkPVwibWFya2VyLXNoYWRvd1wiXG4gICAgICAgICAgICAgIHg9XCItNTAlXCJcbiAgICAgICAgICAgICAgeT1cIi01MCVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDAlXCJcbiAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxmZU9mZnNldFxuICAgICAgICAgICAgICAgIHJlc3VsdD1cIm9mZk91dFwiXG4gICAgICAgICAgICAgICAgaW49XCJTb3VyY2VBbHBoYVwiXG4gICAgICAgICAgICAgICAgZHg9XCIyXCJcbiAgICAgICAgICAgICAgICBkeT1cIjJcIlxuICAgICAgICAgICAgICA+PC9mZU9mZnNldD5cbiAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyXG4gICAgICAgICAgICAgICAgcmVzdWx0PVwiYmx1ck91dFwiXG4gICAgICAgICAgICAgICAgaW49XCJvZmZPdXRcIlxuICAgICAgICAgICAgICAgIHN0ZERldmlhdGlvbj1cIjJcIlxuICAgICAgICAgICAgICA+PC9mZUdhdXNzaWFuQmx1cj5cbiAgICAgICAgICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXIgaW49XCJibHVyT3V0XCIgcmVzdWx0PVwiYWxwaGFPdXRcIj5cbiAgICAgICAgICAgICAgICA8ZmVGdW5jQSB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjNcIj48L2ZlRnVuY0E+XG4gICAgICAgICAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj5cbiAgICAgICAgICAgICAgPGZlQmxlbmRcbiAgICAgICAgICAgICAgICBpbj1cIlNvdXJjZUdyYXBoaWNcIlxuICAgICAgICAgICAgICAgIGluMj1cImFscGhhT3V0XCJcbiAgICAgICAgICAgICAgICBtb2RlPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgPjwvZmVCbGVuZD5cbiAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJiYWNrZ3JvdW5kTGF5ZXJcIj48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhzQ29sb3I6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgLy8gdXNlIHRoZXNlIHByb3BlcnRpZXMgdG8gdXBkYXRlIHRoZSBzdGF0ZSB2aWEgYXR0cmlidXRlc1xuICAgICAgZGVzaXJlZEhzQ29sb3I6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJhcHBseUhzQ29sb3JcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHdpZHRoLCBoZWlnaHQgYW5kIHJhZGl1cyBhcHBseSB0byB0aGUgY29vcmRpbmF0ZXMgb2ZcbiAgICAgIC8vIG9mIHRoZSBjYW52YXMuXG4gICAgICAvLyBib3JkZXIgd2lkdGggYXJlIHJlbGF0aXZlIHRvIHRoZXNlIG51bWJlcnNcbiAgICAgIC8vIHRoZSBvbnNjcmVlbiBkaXNwbGF5ZWQgc2l6ZSBzaG91bGQgYmUgY29udHJvbGxlZCB3aXRoIGNzc1xuICAgICAgLy8gYW5kIHNob3VsZCBiZSB0aGUgc2FtZSBvciBzbWFsbGVyXG4gICAgICB3aWR0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICB9LFxuXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgfSxcblxuICAgICAgcmFkaXVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDIyNSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZSBhbW91bnQgc2VnbWVudHMgZm9yIHRoZSBodWVcbiAgICAgIC8vIDAgPSBjb250aW51b3VzIGdyYWRpZW50XG4gICAgICAvLyBvdGhlciB0aGFuIDAgZ2l2ZXMgJ3BpZS1waWVjZXMnXG4gICAgICBodWVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWdtZW50YXRpb25DaGFuZ2VcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZSBhbW91bnQgc2VnbWVudHMgZm9yIHRoZSBodWVcbiAgICAgIC8vIDAgPSBjb250aW51b3VzIGdyYWRpZW50XG4gICAgICAvLyAxID0gb25seSBmdWxseSBzYXR1cmF0ZWRcbiAgICAgIC8vID4gMSA9IHNlZ21lbnRzIGZyb20gd2hpdGUgdG8gZnVsbHkgc2F0dXJhdGVkXG4gICAgICBzYXR1cmF0aW9uU2VnbWVudHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VnbWVudGF0aW9uQ2hhbmdlXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBzZXQgdG8gdHJ1ZSB0byBtYWtlIHRoZSBzZWdtZW50cyBwdXJlbHkgZXN0aGV0aWNhbFxuICAgICAgLy8gdGhpcyBhbGxvd3Mgc2VsZWN0aW9uIG9mZiBhbGwgY29sbG9ycywgYWxzb1xuICAgICAgLy8gaW50ZXJwb2xhdGVkIGJldHdlZW4gdGhlIHNlZ21lbnRzXG4gICAgICBpZ25vcmVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvLyB0aHJvdHRsZSB0ZSBhbW91bnQgb2YgJ2NvbG9yc2VsZWN0ZWQnIGV2ZW50cyBmaXJlZFxuICAgICAgLy8gdmFsdWUgaXMgdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAgICAgIHRocm90dGxlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5zZXR1cExheWVycygpO1xuICAgIHRoaXMuZHJhd0NvbG9yV2hlZWwoKTtcbiAgICB0aGlzLmRyYXdNYXJrZXIoKTtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT5cbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXYpXG4gICAgKTtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIC8vIGNvbnZlcnRzIGJyb3dzZXIgY29vcmRpbmF0ZXMgdG8gY2FudmFzIGNhbnZhcyBjb29yZGluYXRlc1xuICAvLyBvcmlnaW4gaXMgd2hlZWwgY2VudGVyXG4gIC8vIHJldHVybnMge3g6IFgsIHk6IFl9IG9iamVjdFxuICBjb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgdmFyIHN2Z1BvaW50ID0gdGhpcy5pbnRlcmFjdGlvbkxheWVyLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgc3ZnUG9pbnQueCA9IGNsaWVudFg7XG4gICAgc3ZnUG9pbnQueSA9IGNsaWVudFk7XG4gICAgdmFyIGNjID0gc3ZnUG9pbnQubWF0cml4VHJhbnNmb3JtKFxuICAgICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKVxuICAgICk7XG4gICAgcmV0dXJuIHsgeDogY2MueCwgeTogY2MueSB9O1xuICB9XG5cbiAgLy8gTW91c2UgZXZlbnRzXG5cbiAgb25Nb3VzZURvd24oZXYpIHtcbiAgICBjb25zdCBjYyA9IHRoaXMuY29udmVydFRvQ2FudmFzQ29vcmRpbmF0ZXMoZXYuY2xpZW50WCwgZXYuY2xpZW50WSk7XG4gICAgLy8gcmV0dXJuIGlmIHdlJ3JlIG5vdCBvbiB0aGUgd2hlZWxcbiAgICBpZiAoIXRoaXMuaXNJbldoZWVsKGNjLngsIGNjLnkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGEgbW91c2Vkb3duIGluIHdoZWVsIGlzIGFsd2F5cyBhIGNvbG9yIHNlbGVjdCBhY3Rpb25cbiAgICB0aGlzLm9uTW91c2VTZWxlY3QoZXYpO1xuICAgIC8vIGFsbG93IGRyYWdnaW5nXG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcIm1vdXNlXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZVNlbGVjdCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcCk7XG4gIH1cblxuICBvbk1vdXNlVXAoKSB7XG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcIm1vdXNlXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZVNlbGVjdCk7XG4gIH1cblxuICBvbk1vdXNlU2VsZWN0KGV2KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucHJvY2Vzc1VzZXJTZWxlY3QoZXYpKTtcbiAgfVxuXG4gIC8vIFRvdWNoIGV2ZW50c1xuXG4gIG9uVG91Y2hTdGFydChldikge1xuICAgIHZhciB0b3VjaCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIGNvbnN0IGNjID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgICAvLyByZXR1cm4gaWYgd2UncmUgbm90IG9uIHRoZSB3aGVlbFxuICAgIGlmICghdGhpcy5pc0luV2hlZWwoY2MueCwgY2MueSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2LnRhcmdldCA9PT0gdGhpcy5tYXJrZXIpIHtcbiAgICAgIC8vIGRyYWcgbWFya2VyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcInRvdWNoXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoU2VsZWN0KTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGRvbid0IGZpcmUgY29sb3Igc2VsZWN0aW9uIGltbWVkaWF0ZWx5LFxuICAgIC8vIHdhaXQgZm9yIHRvdWNoZW5kIGFuZCBpbnZhbGlkYXRlIHdoZW4gd2Ugc2Nyb2xsXG4gICAgdGhpcy50YXBCZWNhbWVTY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVGFwKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRvdWNobW92ZVwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnRhcEJlY2FtZVNjcm9sbCA9IHRydWU7XG4gICAgICB9LFxuICAgICAgeyBwYXNzaXZlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgb25UYXAoZXYpIHtcbiAgICBpZiAodGhpcy50YXBCZWNhbWVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uVG91Y2hTZWxlY3QoZXYpO1xuICB9XG5cbiAgb25Ub3VjaEVuZCgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwidG91Y2hcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoU2VsZWN0KTtcbiAgfVxuXG4gIG9uVG91Y2hTZWxlY3QoZXYpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5wcm9jZXNzVXNlclNlbGVjdChldi5jaGFuZ2VkVG91Y2hlc1swXSkpO1xuICB9XG5cbiAgLypcbiAgICogR2VuZXJhbCBldmVudC9zZWxlY3Rpb24gaGFuZGxpbmdcbiAgICovXG5cbiAgLy8gUHJvY2VzcyB1c2VyIGlucHV0IHRvIGNvbG9yXG4gIHByb2Nlc3NVc2VyU2VsZWN0KGV2KSB7XG4gICAgdmFyIGNhbnZhc1hZID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhldi5jbGllbnRYLCBldi5jbGllbnRZKTtcbiAgICB2YXIgaHMgPSB0aGlzLmdldENvbG9yKGNhbnZhc1hZLngsIGNhbnZhc1hZLnkpO1xuICAgIHRoaXMub25Db2xvclNlbGVjdChocyk7XG4gIH1cblxuICAvLyBhcHBseSBjb2xvciB0byBtYXJrZXIgcG9zaXRpb24gYW5kIGNhbnZhc1xuICBvbkNvbG9yU2VsZWN0KGhzKSB7XG4gICAgdGhpcy5zZXRNYXJrZXJPbkNvbG9yKGhzKTsgLy8gbWFya2VyIGFsd2F5cyBmb2xsb3dzIG1vdW5zZSAncmF3JyBocyB2YWx1ZSAoPSBtb3VzZSBwb3NpdGlvbilcbiAgICBpZiAoIXRoaXMuaWdub3JlU2VnbWVudHMpIHtcbiAgICAgIC8vIGFwcGx5IHNlZ21lbnRzIGlmIG5lZWRlZFxuICAgICAgaHMgPSB0aGlzLmFwcGx5U2VnbWVudEZpbHRlcihocyk7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBhcHBseSB0aGUgbmV3IGNvbG9yIHRvIHRoZSBpbnRlcmZhY2UgLyBjYW52YXNcbiAgICB0aGlzLmFwcGx5Q29sb3JUb0NhbnZhcyhocyk7XG4gICAgLy8gdGhyb3R0bGluZyBpcyBhcHBsaWVkIHRvIHVwZGF0aW5nIHRoZSBleHBvc2VkIGNvbG9ycyAocHJvcGVydGllcylcbiAgICAvLyBhbmQgZmlyaW5nIG9mIGV2ZW50c1xuICAgIGlmICh0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBhcHBseSB0aGUgbGFzdCBzZWxlY3RlZCBjb2xvclxuICAgICAgLy8gZXZlbnR1YWxseSBhZnRlciB0aHJvdHRsZSBsaW1pdCBoYXMgcGFzc2VkXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnN1cmVGaW5hbFNlbGVjdCk7XG4gICAgICB0aGlzLmVuc3VyZUZpbmFsU2VsZWN0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZUNvbG9yU2VsZWN0ZWQoaHMpOyAvLyBkbyBpdCBmb3IgdGhlIGZpbmFsIHRpbWVcbiAgICAgIH0sIHRoaXMudGhyb3R0bGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpcmVDb2xvclNlbGVjdGVkKGhzKTsgLy8gZG8gaXRcbiAgICB0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvclNlbGVjdElzVGhyb3R0bGVkID0gZmFsc2U7XG4gICAgfSwgdGhpcy50aHJvdHRsZSk7XG4gIH1cblxuICAvLyBzZXQgY29sb3IgdmFsdWVzIGFuZCBmaXJlIGNvbG9yc2VsZWN0ZWQgZXZlbnRcbiAgZmlyZUNvbG9yU2VsZWN0ZWQoaHMpIHtcbiAgICB0aGlzLmhzQ29sb3IgPSBocztcbiAgICB0aGlzLmZpcmUoXCJjb2xvcnNlbGVjdGVkXCIsIHsgaHM6IHsgaDogaHMuaCwgczogaHMucyB9IH0pO1xuICB9XG5cbiAgLypcbiAgICogSW50ZXJmYWNlIHVwZGF0aW5nXG4gICAqL1xuXG4gIC8vIHNldCBtYXJrZXIgcG9zaXRpb24gdG8gdGhlIGdpdmVuIGNvbG9yXG4gIHNldE1hcmtlck9uQ29sb3IoaHMpIHtcbiAgICB2YXIgZGlzdCA9IGhzLnMgKiB0aGlzLnJhZGl1cztcbiAgICB2YXIgdGhldGEgPSAoKGhzLmggLSAxODApIC8gMTgwKSAqIE1hdGguUEk7XG4gICAgdmFyIG1hcmtlcmRYID0gLWRpc3QgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgdmFyIG1hcmtlcmRZID0gLWRpc3QgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgdmFyIHRyYW5zbGF0ZVN0cmluZyA9IGB0cmFuc2xhdGUoJHttYXJrZXJkWH0sJHttYXJrZXJkWX0pYDtcbiAgICB0aGlzLm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlU3RyaW5nKTtcbiAgICB0aGlzLnRvb2x0aXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZVN0cmluZyk7XG4gIH1cblxuICAvLyBhcHBseSBnaXZlbiBjb2xvciB0byBpbnRlcmZhY2UgZWxlbWVudHNcbiAgYXBwbHlDb2xvclRvQ2FudmFzKGhzKSB7XG4gICAgLy8gd2UncmUgbm90IHJlYWxseSBjb252ZXJ0aW5nIGhzIHRvIGhzbCBoZXJlLCBidXQgd2Uga2VlcCBpdCBjaGVhcFxuICAgIC8vIHNldHRpbmcgdGhlIGNvbG9yIG9uIHRoZSBpbnRlcmFjdGlvbkxheWVyLCB0aGUgc3ZnIGVsZW1lbnRzIGNhbiBpbmhlcml0XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLnN0eWxlLmNvbG9yID0gYGhzbCgke2hzLmh9LCAxMDAlLCAkezEwMCAtXG4gICAgICBocy5zICogNTB9JSlgO1xuICB9XG5cbiAgYXBwbHlIc0NvbG9yKGhzKSB7XG4gICAgLy8gZG8gbm90aGluZyBpcyB3ZSBhbHJlYWR5IGhhdmUgdGhlIHNhbWUgY29sb3JcbiAgICBpZiAodGhpcy5oc0NvbG9yICYmIHRoaXMuaHNDb2xvci5oID09PSBocy5oICYmIHRoaXMuaHNDb2xvci5zID09PSBocy5zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0TWFya2VyT25Db2xvcihocyk7IC8vIG1hcmtlciBpcyBhbHdheXMgc2V0IG9uICdyYXcnIGhzIHBvc2l0aW9uXG4gICAgaWYgKCF0aGlzLmlnbm9yZVNlZ21lbnRzKSB7XG4gICAgICAvLyBhcHBseSBzZWdtZW50cyBpZiBuZWVkZWRcbiAgICAgIGhzID0gdGhpcy5hcHBseVNlZ21lbnRGaWx0ZXIoaHMpO1xuICAgIH1cbiAgICB0aGlzLmhzQ29sb3IgPSBocztcbiAgICAvLyBhbHdheXMgYXBwbHkgdGhlIG5ldyBjb2xvciB0byB0aGUgaW50ZXJmYWNlIC8gY2FudmFzXG4gICAgdGhpcy5hcHBseUNvbG9yVG9DYW52YXMoaHMpO1xuICB9XG5cbiAgLypcbiAgICogaW5wdXQgcHJvY2Vzc2luZyBoZWxwZXJzXG4gICAqL1xuXG4gIC8vIGdldCBhbmdsZSAoZGVncmVlcylcbiAgZ2V0QW5nbGUoZFgsIGRZKSB7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMigtZFksIC1kWCk7IC8vIHJhZGlhbnMgZnJvbSB0aGUgbGVmdCBlZGdlLCBjbG9ja3dpc2UgPSBwb3NpdGl2ZVxuICAgIHZhciBhbmdsZSA9ICh0aGV0YSAvIE1hdGguUEkpICogMTgwICsgMTgwOyAvLyBkZWdyZWVzLCBjbG9ja3dpc2UgZnJvbSByaWdodFxuICAgIHJldHVybiBhbmdsZTtcbiAgfVxuXG4gIC8vIHJldHVybnMgdHJ1ZSB3aGVuIGNvb3JkaW5hdGVzIGFyZSBpbiB0aGUgY29sb3J3aGVlbFxuICBpc0luV2hlZWwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKHgsIHkpIDw9IDE7XG4gIH1cblxuICAvLyByZXR1cm5zIGRpc3RhbmNlIGZyb20gd2hlZWwgY2VudGVyLCAwID0gY2VudGVyLCAxID0gZWRnZSwgPjEgPSBvdXRzaWRlXG4gIGdldERpc3RhbmNlKGRYLCBkWSkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoZFggKiBkWCArIGRZICogZFkpIC8gdGhpcy5yYWRpdXM7XG4gIH1cblxuICAvKlxuICAgKiBHZXR0aW5nIGNvbG9yc1xuICAgKi9cblxuICBnZXRDb2xvcih4LCB5KSB7XG4gICAgdmFyIGh1ZSA9IHRoaXMuZ2V0QW5nbGUoeCwgeSk7IC8vIGRlZ3JlZXMsIGNsb2Nrd2lzZSBmcm9tIHJpZ2h0XG4gICAgdmFyIHJlbGF0aXZlRGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHgsIHkpOyAvLyBlZGdlIG9mIHJhZGl1cyA9IDFcbiAgICB2YXIgc2F0ID0gTWF0aC5taW4ocmVsYXRpdmVEaXN0YW5jZSwgMSk7IC8vIERpc3RhbmNlIGZyb20gY2VudGVyXG4gICAgcmV0dXJuIHsgaDogaHVlLCBzOiBzYXQgfTtcbiAgfVxuXG4gIGFwcGx5U2VnbWVudEZpbHRlcihocykge1xuICAgIC8vIGFwcGx5IGh1ZSBzZWdtZW50IHN0ZXBzXG4gICAgaWYgKHRoaXMuaHVlU2VnbWVudHMpIHtcbiAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDM2MCAvIHRoaXMuaHVlU2VnbWVudHM7XG4gICAgICBjb25zdCBoYWxmQW5nbGVTdGVwID0gYW5nbGVTdGVwIC8gMjtcbiAgICAgIGhzLmggLT0gaGFsZkFuZ2xlU3RlcDsgLy8gdGFrZSB0aGUgJ2NlbnRlcmVkIHNlZ2VtbnRzJyBpbnRvIGFjY291bnRcbiAgICAgIGlmIChocy5oIDwgMCkge1xuICAgICAgICBocy5oICs9IDM2MDtcbiAgICAgIH0gLy8gZG9uJ3QgZW5kIHVwIGJlbG93IDBcbiAgICAgIGNvbnN0IHJlc3QgPSBocy5oICUgYW5nbGVTdGVwO1xuICAgICAgaHMuaCAtPSByZXN0IC0gYW5nbGVTdGVwO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHNhdHVyYXRpb24gc2VnbWVudCBzdGVwc1xuICAgIGlmICh0aGlzLnNhdHVyYXRpb25TZWdtZW50cykge1xuICAgICAgaWYgKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzID09PSAxKSB7XG4gICAgICAgIGhzLnMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNlZ21lbnRTaXplID0gMSAvIHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzO1xuICAgICAgICB2YXIgc2F0dXJhdGlvblN0ZXAgPSAxIC8gKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzIC0gMSk7XG4gICAgICAgIHZhciBjYWxjdWxhdGVkU2F0ID0gTWF0aC5mbG9vcihocy5zIC8gc2VnbWVudFNpemUpICogc2F0dXJhdGlvblN0ZXA7XG4gICAgICAgIGhzLnMgPSBNYXRoLm1pbihjYWxjdWxhdGVkU2F0LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhzO1xuICB9XG5cbiAgLypcbiAgICogRHJhd2luZyByZWxhdGVkIHN0dWZmXG4gICAqL1xuXG4gIHNldHVwTGF5ZXJzKCkge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy4kLmNhbnZhcztcbiAgICB0aGlzLmJhY2tncm91bmRMYXllciA9IHRoaXMuJC5iYWNrZ3JvdW5kTGF5ZXI7XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyID0gdGhpcy4kLmludGVyYWN0aW9uTGF5ZXI7XG5cbiAgICAvLyBjb29yZGluYXRlIG9yaWdpbiBwb3NpdGlvbiAoY2VudGVyIG9mIHRoZSB3aGVlbClcbiAgICB0aGlzLm9yaWdpblggPSB0aGlzLndpZHRoIC8gMjtcbiAgICB0aGlzLm9yaWdpblkgPSB0aGlzLm9yaWdpblg7XG5cbiAgICAvLyBzeW5jaHJvbmlzZSB3aWR0aC9oZWlnaHQgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmJhY2tncm91bmRMYXllci53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwidmlld0JveFwiLFxuICAgICAgYCR7LXRoaXMub3JpZ2luWH0gJHstdGhpcy5vcmlnaW5ZfSAke3RoaXMud2lkdGh9ICR7dGhpcy5oZWlnaHR9YFxuICAgICk7XG4gIH1cblxuICBkcmF3Q29sb3JXaGVlbCgpIHtcbiAgICAvKlxuICAgICAqICBTZXR0aW5nIHVwIGFsbCBwYXJlbWV0ZXJzXG4gICAgICovXG4gICAgbGV0IHNoYWRvd0NvbG9yO1xuICAgIGxldCBzaGFkb3dPZmZzZXRYO1xuICAgIGxldCBzaGFkb3dPZmZzZXRZO1xuICAgIGxldCBzaGFkb3dCbHVyO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmJhY2tncm91bmRMYXllci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gcG9zdGlvbmluZyBhbmQgc2l6aW5nXG4gICAgY29uc3QgY1ggPSB0aGlzLm9yaWdpblg7XG4gICAgY29uc3QgY1kgPSB0aGlzLm9yaWdpblk7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgY29uc3QgY291bnRlckNsb2Nrd2lzZSA9IGZhbHNlO1xuICAgIC8vIHN0eWxpbmcgb2YgdGhlIHdoZWVsXG4gICAgY29uc3Qgd2hlZWxTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuYmFja2dyb3VuZExheWVyLCBudWxsKTtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHBhcnNlSW50KFxuICAgICAgd2hlZWxTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1ib3JkZXJ3aWR0aFwiKSxcbiAgICAgIDEwXG4gICAgKTtcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IHdoZWVsU3R5bGVcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1ib3JkZXJjb2xvclwiKVxuICAgICAgLnRyaW0oKTtcbiAgICBjb25zdCB3aGVlbFNoYWRvdyA9IHdoZWVsU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0td2hlZWwtc2hhZG93XCIpLnRyaW0oKTtcbiAgICAvLyBleHRyYWN0IHNoYWRvdyBwcm9wZXJ0aWVzIGZyb20gIENDUyB2YXJpYWJsZVxuICAgIC8vIHRoZSBzaGFkb3cgc2hvdWxkIGJlIGRlZmluZWQgYXM6IFwiMTBweCA1cHggNXB4IDBweCBDT0xPUlwiXG4gICAgaWYgKHdoZWVsU2hhZG93ICE9PSBcIm5vbmVcIikge1xuICAgICAgY29uc3QgdmFsdWVzID0gd2hlZWxTaGFkb3cuc3BsaXQoXCJweCBcIik7XG4gICAgICBzaGFkb3dDb2xvciA9IHZhbHVlcy5wb3AoKTtcbiAgICAgIHNoYWRvd09mZnNldFggPSBwYXJzZUludCh2YWx1ZXNbMF0sIDEwKTtcbiAgICAgIHNoYWRvd09mZnNldFkgPSBwYXJzZUludCh2YWx1ZXNbMV0sIDEwKTtcbiAgICAgIHNoYWRvd0JsdXIgPSBwYXJzZUludCh2YWx1ZXNbMl0sIDEwKSB8fCAwO1xuICAgIH1cbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSByYWRpdXMgKyBib3JkZXJXaWR0aCAvIDI7XG4gICAgY29uc3Qgd2hlZWxSYWRpdXMgPSByYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93UmFkaXVzID0gcmFkaXVzICsgYm9yZGVyV2lkdGg7XG5cbiAgICAvKlxuICAgICAqICBEcmF3aW5nIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRyYXdDaXJjbGUoaHVlU2VnbWVudHMsIHNhdHVyYXRpb25TZWdtZW50cykge1xuICAgICAgaHVlU2VnbWVudHMgPSBodWVTZWdtZW50cyB8fCAzNjA7IC8vIHJlc2V0IDAgc2VnbWVudHMgdG8gMzYwXG4gICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzNjAgLyBodWVTZWdtZW50cztcbiAgICAgIGNvbnN0IGhhbGZBbmdsZVN0ZXAgPSBhbmdsZVN0ZXAgLyAyOyAvLyBjZW50ZXIgc2VnbWVudHMgb24gY29sb3JcbiAgICAgIGZvciAodmFyIGFuZ2xlID0gMDsgYW5nbGUgPD0gMzYwOyBhbmdsZSArPSBhbmdsZVN0ZXApIHtcbiAgICAgICAgdmFyIHN0YXJ0QW5nbGUgPSAoYW5nbGUgLSBoYWxmQW5nbGVTdGVwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdmFyIGVuZEFuZ2xlID0gKGFuZ2xlICsgaGFsZkFuZ2xlU3RlcCArIDEpICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhjWCwgY1kpO1xuICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICBjWCxcbiAgICAgICAgICBjWSxcbiAgICAgICAgICB3aGVlbFJhZGl1cyxcbiAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2VcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gZ3JhZGllbnRcbiAgICAgICAgdmFyIGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgICBjWCxcbiAgICAgICAgICBjWSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIHdoZWVsUmFkaXVzXG4gICAgICAgICk7XG4gICAgICAgIGxldCBsaWdodG5lc3MgPSAxMDA7XG4gICAgICAgIC8vIGZpcnN0IGdyYWRpZW50IHN0b3BcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGBoc2woJHthbmdsZX0sIDEwMCUsICR7bGlnaHRuZXNzfSUpYCk7XG4gICAgICAgIC8vIHNlZ21lbnQgZ3JhZGllbnQgc3RvcHNcbiAgICAgICAgaWYgKHNhdHVyYXRpb25TZWdtZW50cyA+IDApIHtcbiAgICAgICAgICBjb25zdCByYXRpb1N0ZXAgPSAxIC8gc2F0dXJhdGlvblNlZ21lbnRzO1xuICAgICAgICAgIGxldCByYXRpbyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgc3RvcCA9IDE7IHN0b3AgPCBzYXR1cmF0aW9uU2VnbWVudHM7IHN0b3AgKz0gMSkge1xuICAgICAgICAgICAgdmFyIHByZXZMaWdobmVzcyA9IGxpZ2h0bmVzcztcbiAgICAgICAgICAgIHJhdGlvID0gc3RvcCAqIHJhdGlvU3RlcDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IDEwMCAtIDUwICogcmF0aW87XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXG4gICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICBgaHNsKCR7YW5nbGV9LCAxMDAlLCAke3ByZXZMaWdobmVzc30lKWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AocmF0aW8sIGBoc2woJHthbmdsZX0sIDEwMCUsICR7bGlnaHRuZXNzfSUpYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChyYXRpbywgYGhzbCgke2FuZ2xlfSwgMTAwJSwgNTAlKWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgZ3JhZGllbnQgc3RvcFxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYGhzbCgke2FuZ2xlfSwgMTAwJSwgNTAlKWApO1xuXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdTaGFkb3coKSB7XG4gICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LmFyYyhjWCwgY1ksIHNoYWRvd1JhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSBzaGFkb3dDb2xvcjtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHNoYWRvd09mZnNldFg7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSBzaGFkb3dPZmZzZXRZO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gc2hhZG93Qmx1cjtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3Qm9yZGVyKCkge1xuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQuYXJjKGNYLCBjWSwgYm9yZGVyUmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgY29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiAgIENhbGwgdGhlIGRyYXdpbmcgZnVuY3Rpb25zXG4gICAgICogICBkcmF3cyB0aGUgc2hhZG93LCB3aGVlbCBhbmQgYm9yZGVyXG4gICAgICovXG4gICAgaWYgKHdoZWVsU3R5bGUuc2hhZG93ICE9PSBcIm5vbmVcIikge1xuICAgICAgZHJhd1NoYWRvdygpO1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHRoaXMuaHVlU2VnbWVudHMsIHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzKTtcbiAgICBpZiAoYm9yZGVyV2lkdGggPiAwKSB7XG4gICAgICBkcmF3Qm9yZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogICBEcmF3IHRoZSAoZHJhZ2dhYmxlKSBtYXJrZXIgYW5kIHRvb2x0aXBcbiAgICogICBvbiB0aGUgaW50ZXJhY3Rpb25MYXllcilcbiAgICovXG5cbiAgZHJhd01hcmtlcigpIHtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gdGhpcy5pbnRlcmFjdGlvbkxheWVyO1xuICAgIGNvbnN0IG1hcmtlcnJhZGl1cyA9IHRoaXMucmFkaXVzICogMC4wODtcbiAgICBjb25zdCB0b29sdGlwcmFkaXVzID0gdGhpcy5yYWRpdXMgKiAwLjE1O1xuICAgIGNvbnN0IFRvb2x0aXBPZmZzZXRZID0gLSh0b29sdGlwcmFkaXVzICogMyk7XG4gICAgY29uc3QgVG9vbHRpcE9mZnNldFggPSAwO1xuXG4gICAgc3ZnRWxlbWVudC5tYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcImNpcmNsZVwiXG4gICAgKTtcbiAgICBzdmdFbGVtZW50Lm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcmtlclwiKTtcbiAgICBzdmdFbGVtZW50Lm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJyXCIsIG1hcmtlcnJhZGl1cyk7XG4gICAgdGhpcy5tYXJrZXIgPSBzdmdFbGVtZW50Lm1hcmtlcjtcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQubWFya2VyKTtcblxuICAgIHN2Z0VsZW1lbnQudG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwiY2lyY2xlXCJcbiAgICApO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG9yVG9vbHRpcFwiKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiclwiLCB0b29sdGlwcmFkaXVzKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiY3hcIiwgVG9vbHRpcE9mZnNldFgpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBUb29sdGlwT2Zmc2V0WSk7XG4gICAgdGhpcy50b29sdGlwID0gc3ZnRWxlbWVudC50b29sdGlwO1xuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC50b29sdGlwKTtcbiAgfVxuXG4gIHNlZ21lbnRhdGlvbkNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kTGF5ZXIpIHtcbiAgICAgIHRoaXMuZHJhd0NvbG9yV2hlZWwoKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbG9yLXBpY2tlclwiLCBIYUNvbG9yUGlja2VyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuL2hhLWljb25cIjtcblxuY2xhc3MgSGFMYWJlbGVkU2xpZGVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1oYS1zbGlkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY2FwdGlvbl1dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtY29udGFpbmVyXCI+PHNsb3QgbmFtZT1cImV4dHJhXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhhLWljb24gaWNvbj1cIltbaWNvbl1dXCIgaGlkZGVuJD1cIltbIWljb25dXVwiPjwvaGEtaWNvbj5cbiAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHN0ZXA9XCJbW3N0ZXBdXVwiXG4gICAgICAgICAgcGluPVwiW1twaW5dXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcHRpb246IFN0cmluZyxcbiAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgbWluOiBOdW1iZXIsXG4gICAgICBtYXg6IE51bWJlcixcbiAgICAgIHBpbjogQm9vbGVhbixcbiAgICAgIHN0ZXA6IE51bWJlcixcblxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlnbm9yZUJhclRvdWNoOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sYWJlbGVkLXNsaWRlclwiLCBIYUxhYmVsZWRTbGlkZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuXG5jb25zdCBwYXBlckRyb3Bkb3duQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItZHJvcGRvd24tbWVudVwiXG4pIGFzIENvbnN0cnVjdG9yPFBvbHltZXJFbGVtZW50PjtcblxuLy8gcGF0Y2hlcyBwYXBlciBkcm9wIGRvd24gdG8gcHJvcGVybHkgc3VwcG9ydCBSVEwgLSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWRyb3Bkb3duLW1lbnUvaXNzdWVzLzE4M1xuZXhwb3J0IGNsYXNzIEhhUGFwZXJEcm9wZG93bkNsYXNzIGV4dGVuZHMgcGFwZXJEcm9wZG93bkNsYXNzIHtcbiAgcHVibGljIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICB0aGlzLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCI6IEhhUGFwZXJEcm9wZG93bkNsYXNzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIiwgSGFQYXBlckRyb3Bkb3duQ2xhc3MpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySWNvbkJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuY29uc3QgcGFwZXJJY29uQnV0dG9uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItaWNvbi1idXR0b25cIlxuKSBhcyBDb25zdHJ1Y3RvcjxQYXBlckljb25CdXR0b25FbGVtZW50PjtcblxuZXhwb3J0IGNsYXNzIEhhUGFwZXJJY29uQnV0dG9uQXJyb3dQcmV2IGV4dGVuZHMgcGFwZXJJY29uQnV0dG9uQ2xhc3Mge1xuICBwdWJsaWMgaGFzc2lvPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pY29uID1cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICA/IHRoaXMuaGFzc2lvXG4gICAgICAgICAgPyBcImhhc3NpbzphcnJvdy1sZWZ0XCJcbiAgICAgICAgICA6IFwiaGFzczphcnJvdy1sZWZ0XCJcbiAgICAgICAgOiB0aGlzLmhhc3Npb1xuICAgICAgICA/IFwiaGFzc2lvOmFycm93LXJpZ2h0XCJcbiAgICAgICAgOiBcImhhc3M6YXJyb3ctcmlnaHRcIjtcblxuICAgIC8vIGNhbGxpbmcgc3VwZXIgYWZ0ZXIgc2V0dGluZyBpY29uIHRvIGhhdmUgaXQgY29uc2lzdGVudGx5IHNob3cgdGhlIGljb24gKG90aGVyd2lzZSBub3QgYWx3YXlzIHNob3duKVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjogSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIixcbiAgSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXZcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVdhdGVySGVhdGVyQ29udHJvbCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLyogbG9jYWwgRE9NIHN0eWxlcyBnbyBoZXJlICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICAgIC5pbi1mbHV4I3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2VsZi1jZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJ1dHRvbnMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tIGxvY2FsIERPTSBnb2VzIGhlcmUgLS0+XG4gICAgICA8ZGl2IGlkPVwidGFyZ2V0X3RlbXBlcmF0dXJlXCI+W1t2YWx1ZV1dIFtbdW5pdHNdXTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi11cFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImluY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJkZWNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJ2YWx1ZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB1bml0czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoaW5GbHV4KSB7XG4gICAgdGhpcy4kLnRhcmdldF90ZW1wZXJhdHVyZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW4tZmx1eFwiLCBpbkZsdXgpO1xuICB9XG5cbiAgaW5jcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSArIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgIC8vIElmIG5vIGluaXRpYWwgdGFyZ2V0X3RlbXBcbiAgICAgIC8vIHRoaXMgZm9yY2VzIGNvbnRyb2wgdG8gc3RhcnRcbiAgICAgIC8vIGZyb20gdGhlIG1pbiBjb25maWd1cmVkIGluc3RlYWQgb2YgMFxuICAgICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1pbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSAtIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWluKSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPj0gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgLy8gd2hlbiB0aGUgbGFzdF9jaGFuZ2VkIHRpbWVzdGFtcCBpcyBjaGFuZ2VkLFxuICAgIC8vIHRyaWdnZXIgYSBwb3RlbnRpYWwgZXZlbnQgZmlyZSBpblxuICAgIC8vIHRoZSBmdXR1cmUsIGFzIGxvbmcgYXMgbGFzdCBjaGFuZ2VkIGlzIGZhciBlbm91Z2ggaW4gdGhlXG4gICAgLy8gcGFzdC5cbiAgICBpZiAodGhpcy5sYXN0X2NoYW5nZWQpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdF9jaGFuZ2VkID49IDIwMDApIHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMTApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13YXRlcl9oZWF0ZXItY29udHJvbFwiLCBIYVdhdGVySGVhdGVyQ29udHJvbCk7XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWlucHV0LXdyYXAge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1uby13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbW2hpZGVMYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWlucHV0LXdyYXBcIj5cbiAgICAgICAgPCEtLSBIb3VyIElucHV0IC0tPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBpZD1cImhvdXJcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tob3VyfX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9zaG91bGRGb3JtYXRIb3VyXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dD1cIlwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRNaW5cIlxuICAgICAgICAgIHJlcXVpcmVkPVwiXCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgcHJldmVudC1pbnZhbGlkLWlucHV0PVwiXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuXG4gICAgICAgIDwhLS0gRHJvcGRvd24gTWVudSAtLT5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBpZD1cImRyb3Bkb3duXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbX2VxdWFsKGZvcm1hdCwgMjQpXV1cIlxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3thbVBtfX1cIlxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJBTVwiPkFNPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0gbmFtZT1cIlBNXCI+UE08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIExhYmVsIGZvciB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJUaW1lXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhdXRvIHZhbGlkYXRlIHRpbWUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhpZGVzIHRoZSBsYWJlbFxuICAgICAgICovXG4gICAgICBoaWRlTGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogMTIgb3IgMjQgaHIgZm9ybWF0XG4gICAgICAgKi9cbiAgICAgIGZvcm1hdDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGRpc2FibGVzIHRoZSBpbnB1dHNcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogaG91clxuICAgICAgICovXG4gICAgICBob3VyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogbWludXRlXG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEFNIG9yIFBNXG4gICAgICAgKi9cbiAgICAgIGFtUG06IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFNXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXR0ZWQgdGltZSBzdHJpbmdcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRpbWUobWluLCBob3VyLCBhbVBtKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBpbnB1dHNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgLy8gVmFsaWRhdGUgaG91ciAmIG1pbiBmaWVsZHNcbiAgICBpZiAoIXRoaXMuJC5ob3VyLnZhbGlkYXRlKCkgfCAhdGhpcy4kLm1pbi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBBTSBQTSBpZiAxMiBob3VyIHRpbWVcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyICYmICF0aGlzLiQuZHJvcGRvd24udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aW1lIHN0cmluZ1xuICAgKi9cbiAgX2NvbXB1dGVUaW1lKG1pbiwgaG91ciwgYW1QbSkge1xuICAgIGlmIChob3VyICYmIG1pbikge1xuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0KSB7XG4gICAgICAgIGFtUG0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbiArIFwiIFwiICsgYW1QbTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgbWluXG4gICAqL1xuICBfZm9ybWF0TWluKCkge1xuICAgIGlmICh0aGlzLm1pbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5taW4gPSB0aGlzLm1pbiA8IDEwID8gXCIwXCIgKyB0aGlzLm1pbiA6IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb3VyIG5lZWRzIGEgbGVhZGluZyB6ZXJvIGluIDI0aHIgZm9ybWF0XG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyIDwgMTAgPyBcIjBcIiArIHRoaXMuaG91ciA6IHRoaXMuaG91cjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMjQgaG91ciBmb3JtYXQgaGFzIGEgbWF4IGhyIG9mIDIzXG4gICAqL1xuICBfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gMTIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiAyMztcbiAgfVxuXG4gIF9lcXVhbChuMSwgbjIpIHtcbiAgICByZXR1cm4gbjEgPT09IG4yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBhcGVyLXRpbWUtaW5wdXRcIiwgUGFwZXJUaW1lSW5wdXQpO1xuIiwiaW1wb3J0IHtcbiAgSGFzc0VudGl0eUJhc2UsXG4gIEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNNb2RlID1cbiAgfCBcIm9mZlwiXG4gIHwgXCJoZWF0XCJcbiAgfCBcImNvb2xcIlxuICB8IFwiaGVhdF9jb29sXCJcbiAgfCBcImF1dG9cIlxuICB8IFwiZHJ5XCJcbiAgfCBcImZhbl9vbmx5XCI7XG5cbmV4cG9ydCB0eXBlIEh2YWNBY3Rpb24gPSBcIm9mZlwiIHwgXCJoZWF0aW5nXCIgfCBcImNvb2xpbmdcIiB8IFwiZHJ5aW5nXCIgfCBcImlkbGVcIjtcblxuZXhwb3J0IHR5cGUgQ2xpbWF0ZUVudGl0eSA9IEhhc3NFbnRpdHlCYXNlICYge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBodmFjX21vZGU6IEh2YWNNb2RlO1xuICAgIGh2YWNfbW9kZXM6IEh2YWNNb2RlW107XG4gICAgaHZhY19hY3Rpb24/OiBIdmFjQWN0aW9uO1xuICAgIGN1cnJlbnRfdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICBtaW5fdGVtcDogbnVtYmVyO1xuICAgIG1heF90ZW1wOiBudW1iZXI7XG4gICAgdGVtcGVyYXR1cmU6IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9zdGVwPzogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX2hpZ2g/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfbG93PzogbnVtYmVyO1xuICAgIGh1bWlkaXR5PzogbnVtYmVyO1xuICAgIGN1cnJlbnRfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgdGFyZ2V0X2h1bWlkaXR5X2xvdz86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfaGlnaD86IG51bWJlcjtcbiAgICBtaW5faHVtaWRpdHk/OiBudW1iZXI7XG4gICAgbWF4X2h1bWlkaXR5PzogbnVtYmVyO1xuICAgIGZhbl9tb2RlPzogc3RyaW5nO1xuICAgIGZhbl9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHByZXNldF9tb2RlPzogc3RyaW5nO1xuICAgIHByZXNldF9tb2Rlcz86IHN0cmluZ1tdO1xuICAgIHN3aW5nX21vZGU/OiBzdHJpbmc7XG4gICAgc3dpbmdfbW9kZXM/OiBzdHJpbmdbXTtcbiAgICBhdXhfaGVhdD86IFwib25cIiB8IFwib2ZmXCI7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRSA9IDE7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRV9SQU5HRSA9IDI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWSA9IDQ7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0ZBTl9NT0RFID0gODtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREUgPSAxNjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfU1dJTkdfTU9ERSA9IDMyO1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9BVVhfSEVBVCA9IDY0O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby9tb3JlLWluZm8tc2V0dGluZ3NcIjtcblxuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IERpYWxvZ01peGluIGZyb20gXCIuLi9taXhpbnMvZGlhbG9nLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIERpYWxvZ01peGluXG4gKi9cbmNsYXNzIEhhTW9yZUluZm9EaWFsb2cgZXh0ZW5kcyBEaWFsb2dNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2cgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB3aWR0aDogMzY1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICBtb3JlLWluZm8tc2V0dGluZ3Mge1xuICAgICAgICAgIC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlOiB7XG4gICAgICAgICAgICAvKiBEZXNpZ24gZ3VpZGVsaW5lIHN0YXRlcyAyNHB4LCBjaGFuZ2VkIHRvIDE2IHRvIGFsaWduIHdpdGggc3RhdGUgaW5mbyAqL1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjZlbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAvKiB3ZWJraXQgYW5kIGJsaW5rIHN0aWxsIHN1cHBvcnQgc2ltcGxlIG11bHRpbGluZSB0ZXh0LW92ZXJmbG93ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICAgIG1vcmUtaW5mby1zZXR0aW5ncyB7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiY2FtZXJhXCJdKSB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZGF0YS1kb21haW49XCJoaXN0b3J5X2dyYXBoXCJdKSxcbiAgICAgICAgOmhvc3QoW2xhcmdlXSkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3BhZ2VdXVwiPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRyb2xzXG4gICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZGlhbG9nLWVsZW1lbnQ9XCJbW19kaWFsb2dFbGVtZW50XV1cIlxuICAgICAgICAgIGNhbi1jb25maWd1cmU9XCJbW19yZWdpc3RyeUluZm9dXVwiXG4gICAgICAgICAgbGFyZ2U9XCJ7e2xhcmdlfX1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udHJvbHM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcGFnZSwgXCJzZXR0aW5nc1wiKV1dJz5cbiAgICAgICAgPG1vcmUtaW5mby1zZXR0aW5nc1xuICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIHJlZ2lzdHJ5LWluZm89XCJ7e19yZWdpc3RyeUluZm99fVwiXG4gICAgICAgID48L21vcmUtaW5mby1zZXR0aW5ncz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVN0YXRlT2JqKGhhc3MpXCIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2xhcmdlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2RpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIF9yZWdpc3RyeUluZm86IE9iamVjdCxcblxuICAgICAgX3BhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGFEb21haW46IHtcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oc3RhdGVPYmopXCIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfZGlhbG9nT3BlbkNoYW5nZWQob3BlbmVkKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZGlhbG9nRWxlbWVudCA9IHRoaXM7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW9yZS1pbmZvLXBhZ2VcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9wYWdlID0gZXYuZGV0YWlsLnBhZ2U7XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU9iaihoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2hhc3MubW9yZUluZm9FbnRpdHlJZF0gfHwgbnVsbDtcbiAgfVxuXG4gIGFzeW5jIF9zdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgX3BhZ2U6IG51bGwsXG4gICAgICAgIF9yZWdpc3RyeUluZm86IG51bGwsXG4gICAgICAgIGxhcmdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gYWxsb3cgZGlhbG9nIHRvIHJlbmRlciBjb250ZW50IGJlZm9yZSBzaG93aW5nIGl0IHNvIGl0IHdpbGwgYmVcbiAgICAgICAgLy8gcG9zaXRpb25lZCBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICFpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwiY29uZmlnXCIpIHx8XG4gICAgICAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzcy51c2VyLmlzX2FkbWluKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgICAgICAgIGVudGl0eV9pZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IGluZm87XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlJbmZvID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGlhbG9nT3BlbkNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwgJiYgdGhpcy5zdGF0ZU9iaikge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9sYXJnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbW9yZS1pbmZvLWRpYWxvZ1wiLCBIYU1vcmVJbmZvRGlhbG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuY2xhc3MgTW9yZUluZm9BbGFybUNvbnRyb2xQYW5lbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5wYWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24uZGlzYXJtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvZGVGb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQuYWxhcm1fY29udHJvbF9wYW5lbC5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc051bWJlcihfY29kZUZvcm1hdCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjFcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4xPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNFwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjQ8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI3XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NzwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjJcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4yPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjU8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI4XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+ODwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjBcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4wPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiM1wiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjM8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI2XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjlcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID45PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9jbGVhckVudGVyZWRDb2RlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuY2xlYXJfY29kZScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWp1c3RpZmllZCBhY3Rpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGlzYXJtVmlzaWJsZV1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgY2xhc3M9XCJkaXNhcm1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgICAgZGF0YS1zZXJ2aWNlPVwiYWxhcm1fZGlzYXJtXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2NvZGVWYWxpZF1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuZGlzYXJtJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hcm1WaXNpYmxlXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1faG9tZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9ob21lJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1fYXdheVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9hd2F5JyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9lbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9jb2RlRm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2NvZGVWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcIl92YWxpZGF0ZUNvZGUoX2VudGVyZWRDb2RlLCAgX2NvZGVGb3JtYXQsICBfYXJtVmlzaWJsZSwgX2NvZGVBcm1SZXF1aXJlZClcIixcbiAgICAgIH0sXG4gICAgICBfZGlzYXJtVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2FybVZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9pbnB1dEVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hcm1lZFN0YXRlcyA9IFtcbiAgICAgIFwiYXJtZWRfaG9tZVwiLFxuICAgICAgXCJhcm1lZF9hd2F5XCIsXG4gICAgICBcImFybWVkX25pZ2h0XCIsXG4gICAgICBcImFybWVkX2N1c3RvbV9ieXBhc3NcIixcbiAgICBdO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3VmFsLnN0YXRlO1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIF9jb2RlRm9ybWF0OiBuZXdWYWwuYXR0cmlidXRlcy5jb2RlX2Zvcm1hdCxcbiAgICAgICAgX2FybVZpc2libGU6IHN0YXRlID09PSBcImRpc2FybWVkXCIsXG4gICAgICAgIF9jb2RlQXJtUmVxdWlyZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvZGVfYXJtX3JlcXVpcmVkLFxuICAgICAgICBfZGlzYXJtVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLl9hcm1lZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSkgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJwZW5kaW5nXCIgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJ0cmlnZ2VyZWRcIiB8fFxuICAgICAgICAgIHN0YXRlID09PSBcImFybWluZ1wiLFxuICAgICAgfTtcbiAgICAgIHByb3BzLl9pbnB1dEVuYWJsZWQgPSBwcm9wcy5fZGlzYXJtVmlzaWJsZSB8fCBwcm9wcy5fYXJtVmlzaWJsZTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzTnVtYmVyKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQgPT09IFwiTnVtYmVyXCI7XG4gIH1cblxuICBfdmFsaWRhdGVDb2RlKGNvZGUsIGZvcm1hdCwgYXJtVmlzaWJsZSwgY29kZUFybVJlcXVpcmVkKSB7XG4gICAgcmV0dXJuICFmb3JtYXQgfHwgY29kZS5sZW5ndGggPiAwIHx8IChhcm1WaXNpYmxlICYmICFjb2RlQXJtUmVxdWlyZWQpO1xuICB9XG5cbiAgX2RpZ2l0Q2xpY2tlZChldikge1xuICAgIHRoaXMuX2VudGVyZWRDb2RlICs9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpZ2l0XCIpO1xuICB9XG5cbiAgX2NsZWFyRW50ZXJlZENvZGUoKSB7XG4gICAgdGhpcy5fZW50ZXJlZENvZGUgPSBcIlwiO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLl9lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgc2VydmljZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9lbnRlcmVkQ29kZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJtb3JlLWluZm8tYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBNb3JlSW5mb0FsYXJtQ29udHJvbFBhbmVsXG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvQXV0b21hdGlvbiBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDM2cHggMCA4cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdj5bW2xvY2FsaXplKCd1aS5jYXJkLmF1dG9tYXRpb24ubGFzdF90cmlnZ2VyZWQnKV1dOjwvZGl2PlxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRdXVwiXG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJoYW5kbGVUcmlnZ2VyVGFwcGVkXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hdXRvbWF0aW9uLnRyaWdnZXInKV1dXG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRyaWdnZXJUYXBwZWQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiYXV0b21hdGlvblwiLCBcInRyaWdnZXJcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tYXV0b21hdGlvblwiLCBNb3JlSW5mb0F1dG9tYXRpb24pO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENBTUVSQV9TVVBQT1JUX1NUUkVBTSxcbiAgQ2FtZXJhUHJlZmVyZW5jZXMsXG4gIGZldGNoQ2FtZXJhUHJlZnMsXG4gIHVwZGF0ZUNhbWVyYVByZWZzLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FtZXJhLXN0cmVhbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbi8vIE5vdCBkdXBsaWNhdGUgaW1wb3J0LCBpdCdzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJDaGVja2JveEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcblxuY2xhc3MgTW9yZUluZm9DYW1lcmEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhbWVyYVByZWZzPzogQ2FtZXJhUHJlZmVyZW5jZXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F0dGFjaGVkIHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FtZXJhLXN0cmVhbVxuICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgIC5zdGF0ZU9iaj1cIiR7dGhpcy5zdGF0ZU9ian1cIlxuICAgICAgICBzaG93Y29udHJvbHNcbiAgICAgID48L2hhLWNhbWVyYS1zdHJlYW0+XG4gICAgICAke3RoaXMuX2NhbWVyYVByZWZzXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NhbWVyYVByZWZzLnByZWxvYWRfc3RyZWFtfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlQ2hlY2tib3hDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmVsb2FkIHN0cmVhbVxuICAgICAgICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICBgXG4gICAgICAgIDogdW5kZWZpbmVkfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNhbWUgZW50aXR5LCBpZ25vcmUuXG4gICAgaWYgKGN1ckVudGl0eUlkID09PSBvbGRFbnRpdHlJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGN1ckVudGl0eUlkICYmXG4gICAgICB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3RyZWFtXCIpICYmXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApIHtcbiAgICAgIC8vIEZldGNoIGluIGJhY2tncm91bmQgd2hpbGUgd2Ugc2V0IHVwIHRoZSB2aWRlby5cbiAgICAgIHRoaXMuX2ZldGNoQ2FtZXJhUHJlZnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENhbWVyYVByZWZzKCkge1xuICAgIHRoaXMuX2NhbWVyYVByZWZzID0gYXdhaXQgZmV0Y2hDYW1lcmFQcmVmcyhcbiAgICAgIHRoaXMuaGFzcyEsXG4gICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlQ2hlY2tib3hDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVyQ2hlY2tib3hFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jYW1lcmFQcmVmcyA9IGF3YWl0IHVwZGF0ZUNhbWVyYVByZWZzKFxuICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVsb2FkX3N0cmVhbTogY2hlY2tib3guY2hlY2tlZCEsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY2FtZXJhXCIsIE1vcmVJbmZvQ2FtZXJhKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTERpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ2xpbWF0ZUVudGl0eSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRV9SQU5HRSxcbiAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWSxcbiAgQ0xJTUFURV9TVVBQT1JUX0ZBTl9NT0RFLFxuICBDTElNQVRFX1NVUFBPUlRfU1dJTkdfTU9ERSxcbiAgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFULFxuICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREUsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NsaW1hdGVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmNsYXNzIE1vcmVJbmZvQ2xpbWF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENsaW1hdGVFbnRpdHk7XG4gIHByaXZhdGUgX3Jlc2l6ZURlYm91bmNlPzogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0SHVtaWRpdHkgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFlcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRGYW5Nb2RlID0gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUpO1xuICAgIGNvbnN0IHN1cHBvcnRQcmVzZXRNb2RlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRTd2luZ01vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0QXV4SGVhdCA9IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RlcFNpemUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9zdGVwIHx8XG4gICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSA9PT0gLTFcbiAgICAgICAgPyAwLjVcbiAgICAgICAgOiAxO1xuXG4gICAgY29uc3QgcnRsRGlyZWN0aW9uID0gY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICBcImhhcy1jdXJyZW50X3RlbXBlcmF0dXJlXCI6XG4gICAgICAgICAgICBcImN1cnJlbnRfdGVtcGVyYXR1cmVcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAgIFwiaGFzLWN1cnJlbnRfaHVtaWRpdHlcIjogXCJjdXJyZW50X2h1bWlkaXR5XCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgICBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVcIjogc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZV9yYW5nZVwiOiBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmVSYW5nZSxcbiAgICAgICAgICBcImhhcy10YXJnZXRfaHVtaWRpdHlcIjogc3VwcG9ydFRhcmdldEh1bWlkaXR5LFxuICAgICAgICAgIFwiaGFzLWZhbl9tb2RlXCI6IHN1cHBvcnRGYW5Nb2RlLFxuICAgICAgICAgIFwiaGFzLXN3aW5nX21vZGVcIjogc3VwcG9ydFN3aW5nTW9kZSxcbiAgICAgICAgICBcImhhcy1hdXhfaGVhdFwiOiBzdXBwb3J0QXV4SGVhdCxcbiAgICAgICAgICBcImhhcy1wcmVzZXRfbW9kZVwiOiBzdXBwb3J0UHJlc2V0TW9kZSxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSR7c3RhdGVPYmouc3RhdGV9PlxuICAgICAgICAgICAgJHtzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgfHwgc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlUmFuZ2VcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wfVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtY2xpbWF0ZS1jb250cm9sPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9XG4gICAgICAgICAgICAgICAgICAgIC51bml0cz0ke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RlbXBlcmF0dXJlU3RlcFNpemV9XG4gICAgICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wfVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdofVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhbmdlLWNvbnRyb2wtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRUZW1wZXJhdHVyZUxvd0NoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8aGEtY2xpbWF0ZS1jb250cm9sXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaH1cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYW5nZS1jb250cm9sLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldFRlbXBlcmF0dXJlSGlnaENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICR7c3VwcG9ydFRhcmdldEh1bWlkaXR5XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWh1bWlkaXR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdj4ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X2h1bWlkaXR5XCIpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFyZ2V0LWh1bWlkaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaHVtaWRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHBpblxuICAgICAgICAgICAgICAgICAgICBpZ25vcmUtYmFyLXRvdWNoXG4gICAgICAgICAgICAgICAgICAgIGRpcj0ke3J0bERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX2h1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnlQcm9ncmVzcz0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X2h1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0SHVtaWRpdHlTbGlkZXJDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWh2YWNfbW9kZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5vcGVyYXRpb25cIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5zdGF0ZX1cbiAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh2YWNfbW9kZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShgc3RhdGUuY2xpbWF0ZS4ke21vZGV9YCl9XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICR7c3VwcG9ydFByZXNldE1vZGVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItcHJlc2V0X21vZGVzXCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnByZXNldF9tb2RlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVByZXNldG1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLnByZXNldF9tb2RlLm5vbmVgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGVzIS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9JHttb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHttb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCBtb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzdXBwb3J0RmFuTW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mYW5fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5mYW5fbW9kZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5mYW5fbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVGYW5tb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9tb2RlcyEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLmZhbl9tb2RlLiR7bW9kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwgbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c3VwcG9ydFN3aW5nTW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1zd2luZ19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnN3aW5nX21vZGVcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3dpbmdfbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3dpbmdfbW9kZXMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAobW9kZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PiR7bW9kZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3N1cHBvcnRBdXhIZWF0XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF1eF9oZWF0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuYXV4X2hlYXRcIil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwifVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYXV4VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZURlYm91bmNlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplRGVib3VuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVEZWJvdW5jZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgICAgdGhpcy5fcmVzaXplRGVib3VuY2UgPSB1bmRlZmluZWQ7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldFRlbXBlcmF0dXJlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgeyB0ZW1wZXJhdHVyZTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVMb3dDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0X3RlbXBfbG93OiBuZXdWYWwsXG4gICAgICAgIHRhcmdldF90ZW1wX2hpZ2g6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2gsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAge1xuICAgICAgICB0YXJnZXRfdGVtcF9sb3c6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgICB0YXJnZXRfdGVtcF9oaWdoOiBuZXdWYWwsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldEh1bWlkaXR5U2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMuaHVtaWRpdHksXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9odW1pZGl0eVwiLFxuICAgICAgeyBodW1pZGl0eTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXV4VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwiLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfYXV4X2hlYXRcIixcbiAgICAgIHsgYXV4X2hlYXQ6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUZhbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5mYW5fbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X2Zhbl9tb2RlXCIsXG4gICAgICB7IGZhbl9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcGVyYXRpb25tb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcih0aGlzLnN0YXRlT2JqIS5zdGF0ZSwgbmV3VmFsLCBcInNldF9odmFjX21vZGVcIiwge1xuICAgICAgaHZhY19tb2RlOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5zd2luZ19tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfc3dpbmdfbW9kZVwiLFxuICAgICAgeyBzd2luZ19tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQcmVzZXRtb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZSB8fCBudWxsO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5wcmVzZXRfbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3ByZXNldF9tb2RlXCIsXG4gICAgICB7IHByZXNldF9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZUhlbHBlcihcbiAgICBvbGRWYWw6IHVua25vd24sXG4gICAgbmV3VmFsOiB1bmtub3duLFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBkYXRhOiB7XG4gICAgICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gICAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xuICAgIH1cbiAgKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgY29uc3QgY3VyU3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY2xpbWF0ZVwiLCBzZXJ2aWNlLCBkYXRhKTtcblxuICAgIC8vIFdlIHJlc2V0IHN0YXRlT2JqIHRvIHJlLXN5bmMgdGhlIGlucHV0cyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXRcbiAgICAvLyBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdCByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWRcbiAgICAvLyBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZywgdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XG5cbiAgICAvLyBObyBuZWVkIHRvIHJlc3luYyBpZiB3ZSByZWNlaXZlZCBhIG5ldyBzdGF0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZU9iaiAhPT0gY3VyU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlT2JqID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgLy8gT25seSByZXN0b3JlIGlmIG5vdCBzZXQgeWV0IGJ5IGEgc3RhdGUgY2hhbmdlXG4gICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZU9iaiA9IGN1clN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHZhY19tb2RlcyBpcm9uLWljb24sXG4gICAgICAuY29udGFpbmVyLWZhbl9saXN0IGlyb24taWNvbixcbiAgICAgIC5jb250YWluZXItc3dpbmdfbGlzdCBpcm9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDIycHggMTZweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHVtaWRpdHkgLnNpbmdsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50YXJnZXQtaHVtaWRpdHkge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgIH1cbiAgICAgIGhhLWNsaW1hdGUtY29udHJvbC5yYW5nZS1jb250cm9sLWxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgfVxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICB9XG5cbiAgICAgIC5odW1pZGl0eSB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWFjdGl2ZS1jb2xvcjogdmFyKC0tcGFwZXItYmx1ZS00MDApO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBhcGVyLWJsdWUtNDAwKTtcbiAgICAgIH1cblxuICAgICAgLnNpbmdsZS1yb3cge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jbGltYXRlXCIsIE1vcmVJbmZvQ2xpbWF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbmZpZ3VyYXRvciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2M2MjgyODtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuc3VibWl0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpc0NvbmZpZ3VyYWJsZV1dXCI+XG4gICAgICAgICAgPGhhLW1hcmtkb3duXG4gICAgICAgICAgICBjb250ZW50PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVycm9yc11dXCI+XG4gICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZXJyb3JzXV1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmllbGRzXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbaXRlbS5uYW1lXV1cIlxuICAgICAgICAgICAgICBuYW1lPVwiW1tpdGVtLmlkXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwiW1tpdGVtLnR5cGVdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cImZpZWxkQ2hhbmdlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJtaXRcIiBoaWRkZW4kPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWQ9XCJcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJzdWJtaXRDbGlja2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICBhY3RpdmU9XCJbW2lzQ29uZmlndXJpbmddXVwiXG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiW1shaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25maWd1cmluZ1wiXG4gICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGlzcGxheVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUlzQ29uZmlndXJhYmxlKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBmaWVsZElucHV0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVJc0NvbmZpZ3VyYWJsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJjb25maWd1cmVcIjtcbiAgfVxuXG4gIGZpZWxkQ2hhbmdlZChldikge1xuICAgIHZhciBlbCA9IGV2LnRhcmdldDtcbiAgICB0aGlzLmZpZWxkSW5wdXRbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrZWQoKSB7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjb25maWd1cmVfaWQ6IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5jb25maWd1cmVfaWQsXG4gICAgICBmaWVsZHM6IHRoaXMuZmllbGRJbnB1dCxcbiAgICB9O1xuXG4gICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvbmZpZ3VyYXRvclwiLCBcImNvbmZpZ3VyZVwiLCBkYXRhKS50aGVuKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29uZmlndXJhdG9yXCIsIE1vcmVJbmZvQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7XG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVXBkYXRpbmdFbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWxcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWF1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWNhbWVyYVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY2xpbWF0ZVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3ZlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZGVmYXVsdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZmFuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1ncm91cFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWxpZ2h0XCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1sb2NrXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tc3VuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby11cGRhdGVyXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby12YWN1dW1cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8td2VhdGhlclwiO1xuXG5pbXBvcnQgc3RhdGVNb3JlSW5mb1R5cGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfbW9yZV9pbmZvX3R5cGVcIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY2xhc3MgTW9yZUluZm9Db250ZW50IGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBwcml2YXRlIF9kZXRhY2hlZENoaWxkPzogQ2hpbGROb2RlO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgc3RhdGVPYmo6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgLy8gVGhpcyBpcyBub3QgYSBsaXQgZWxlbWVudCwgYnV0IGFuIHVwZGF0aW5nIGVsZW1lbnQsIHNvIHdlIGltcGxlbWVudCB1cGRhdGVcbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG5cbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICAvLyBEZXRhY2ggY2hpbGQgdG8gcHJldmVudCBpdCBmcm9tIGRvaW5nIHdvcmsuXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZXRhY2hlZENoaWxkKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2RldGFjaGVkQ2hpbGQpO1xuICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBtb3JlSW5mb1R5cGUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyAmJiBcImN1c3RvbV91aV9tb3JlX2luZm9cIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzXG4gICAgICAgID8gc3RhdGVPYmouYXR0cmlidXRlcy5jdXN0b21fdWlfbW9yZV9pbmZvXG4gICAgICAgIDogXCJtb3JlLWluZm8tXCIgKyBzdGF0ZU1vcmVJbmZvVHlwZShzdGF0ZU9iaik7XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIodGhpcywgbW9yZUluZm9UeXBlLnRvVXBwZXJDYXNlKCksIHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29udGVudFwiLCBNb3JlSW5mb0NvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvdmVyLXRpbHQtY29udHJvbHNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCBmZWF0dXJlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY29uc3QgRkVBVFVSRV9DTEFTU19OQU1FUyA9IHtcbiAgMTI4OiBcImhhcy1zZXRfdGlsdF9wb3NpdGlvblwiLFxufTtcbmNsYXNzIE1vcmVJbmZvQ292ZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICAudGlsdCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWN1cnJlbnRfcG9zaXRpb24gLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIC5oYXMtc2V0X3RpbHRfcG9zaXRpb24gLnRpbHQsXG4gICAgICAgIC5oYXMtY3VycmVudF90aWx0X3Bvc2l0aW9uIC50aWx0IHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudF9wb3NpdGlvblwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQuY292ZXIucG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJQb3NpdGlvblNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTZXRQb3NpdGlvbl1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cImNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbHRcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmNvdmVyLnRpbHRfcG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICBleHRyYT1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJUaWx0UG9zaXRpb25TbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aGEtY292ZXItdGlsdC1jb250cm9sc1xuICAgICAgICAgICAgICBzbG90PVwiZXh0cmFcIlxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1tlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgID48L2hhLWNvdmVyLXRpbHQtY29udHJvbHM+XG4gICAgICAgICAgPC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgICAgY292ZXJQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgICBjb3ZlclRpbHRQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBjb3ZlclBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIGNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfdGlsdF9wb3NpdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBbXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXG4gICAgICAgIFwiY3VycmVudF9wb3NpdGlvblwiLFxuICAgICAgICBcImN1cnJlbnRfdGlsdF9wb3NpdGlvblwiLFxuICAgICAgXSksXG4gICAgICBmZWF0dXJlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgRkVBVFVSRV9DTEFTU19OQU1FUyksXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJQb3NpdGlvbihldi50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJUaWx0UG9zaXRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY292ZXJcIiwgTW9yZUluZm9Db3Zlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuY2xhc3MgTW9yZUluZm9EZWZhdWx0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZGVmYXVsdFwiLCBNb3JlSW5mb0RlZmF1bHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9nZ2xlLWJ1dHRvbi9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9GYW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyLXNwZWVkX2xpc3QsXG4gICAgICAgIC5jb250YWluZXItZGlyZWN0aW9uLFxuICAgICAgICAuY29udGFpbmVyLW9zY2lsbGF0aW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1zcGVlZF9saXN0IC5jb250YWluZXItc3BlZWRfbGlzdCxcbiAgICAgICAgLmhhcy1kaXJlY3Rpb24gLmNvbnRhaW5lci1kaXJlY3Rpb24sXG4gICAgICAgIC5oYXMtb3NjaWxsYXRpbmcgLmNvbnRhaW5lci1vc2NpbGxhdGluZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItc3BlZWRfbGlzdFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uc3BlZWQnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkXV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwic3BlZWRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkX2xpc3RdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3NjaWxsYXRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4ub3NjaWxsYXRlJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAgICAgY2hlY2tlZD1cIltbb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkXV1cIlxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJvc2NpbGxhdGlvblRvZ2dsZUNoYW5nZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWRpcmVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXJlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXY+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uZGlyZWN0aW9uJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJvdGF0ZS1sZWZ0XCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJvbkRpcmVjdGlvbkxlZnRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxlZnRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUlzUm90YXRpbmdMZWZ0KHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJvdGF0ZS1yaWdodFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25EaXJlY3Rpb25SaWdodFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmlnaHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUlzUm90YXRpbmdSaWdodChzdGF0ZU9iaildXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cInNwZWVkLHNwZWVkX2xpc3Qsb3NjaWxsYXRpbmcsZGlyZWN0aW9uXCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLm9zY2lsbGF0aW5nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1mYW4gXCIgK1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1wib3NjaWxsYXRpbmdcIiwgXCJzcGVlZF9saXN0XCIsIFwiZGlyZWN0aW9uXCJdKVxuICAgICk7XG4gIH1cblxuICBzcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3BlZWQ6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIG9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3NjaWxsYXRpbmc7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJvc2NpbGxhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG9zY2lsbGF0aW5nOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBvbkRpcmVjdGlvbkxlZnQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcInJldmVyc2VcIixcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGlyZWN0aW9uUmlnaHQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcImZvcndhcmRcIixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVJc1JvdGF0aW5nTGVmdChzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRpcmVjdGlvbiA9PT0gXCJyZXZlcnNlXCI7XG4gIH1cblxuICBjb21wdXRlSXNSb3RhdGluZ1JpZ2h0KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGlyZWN0aW9uID09PSBcImZvcndhcmRcIjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZmFuXCIsIE1vcmVJbmZvRmFuKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgTW9yZUluZm9Hcm91cCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmNoaWxkLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZC1jYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJncm91cGVkQ29udHJvbERldGFpbHNcIj48L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc3RhdGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGlsZC1jYXJkXCI+XG4gICAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZV1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTdGF0ZXMoc3RhdGVPYmosIGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wic3RhdGVzQ2hhbmdlZChzdGF0ZU9iaiwgc3RhdGVzKVwiXTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZXMoc3RhdGVPYmosIGhhc3MpIHtcbiAgICB2YXIgc3RhdGVzID0gW107XG4gICAgdmFyIGVudElkcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkIHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdGF0ZSA9IGhhc3Muc3RhdGVzW2VudElkc1tpXV07XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIHN0YXRlc0NoYW5nZWQoc3RhdGVPYmosIHN0YXRlcykge1xuICAgIGxldCBncm91cERvbWFpblN0YXRlT2JqID0gZmFsc2U7XG4gICAgbGV0IGdyb3VwRG9tYWluID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVzICYmIHN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYXNlU3RhdGVPYmogPSBzdGF0ZXMuZmluZCgocykgPT4gcy5zdGF0ZSA9PT0gXCJvblwiKSB8fCBzdGF0ZXNbMF07XG4gICAgICBncm91cERvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihiYXNlU3RhdGVPYmopO1xuXG4gICAgICAvLyBHcm91cHMgbmVlZCB0byBiZSBmaWx0ZXJlZCBvdXQgb3Igd2UnbGwgc2hvdyBjb250ZW50IG9mXG4gICAgICAvLyBmaXJzdCBjaGlsZCBhYm92ZSB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgZ3JvdXBcbiAgICAgIGlmIChncm91cERvbWFpbiAhPT0gXCJncm91cFwiKSB7XG4gICAgICAgIGdyb3VwRG9tYWluU3RhdGVPYmogPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlU3RhdGVPYmosIHtcbiAgICAgICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBiYXNlU3RhdGVPYmouYXR0cmlidXRlcyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzW2ldKSkge1xuICAgICAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFncm91cERvbWFpblN0YXRlT2JqKSB7XG4gICAgICBjb25zdCBlbCA9IGRvbSh0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzKTtcbiAgICAgIGlmIChlbC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzLFxuICAgICAgICBcIk1PUkUtSU5GTy1cIiArIGdyb3VwRG9tYWluLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHsgc3RhdGVPYmo6IGdyb3VwRG9tYWluU3RhdGVPYmosIGhhc3M6IHRoaXMuaGFzcyB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZ3JvdXBcIiwgTW9yZUluZm9Hcm91cCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jYXJkcy9oYS1oaXN0b3J5X2dyYXBoLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0hpc3RvcnlHcmFwaCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1oaXN0b3J5X2dyYXBoLWNhcmRcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgID5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9oYS1oaXN0b3J5X2dyYXBoLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiLCBNb3JlSW5mb0hpc3RvcnlHcmFwaCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXRcIjtcblxuaW1wb3J0IGF0dHJpYnV0ZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmNsYXNzIERhdGV0aW1lSW5wdXQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvZXNIYXZlRGF0ZShzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cImRhdGVJbnB1dFwiXG4gICAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJkYXRlVGltZUNoYW5nZWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7c2VsZWN0ZWREYXRlfX1cIlxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZG9lc0hhdmVUaW1lKHN0YXRlT2JqKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cGFwZXItdGltZS1pbnB1dFxuICAgICAgICAgICAgICBob3VyPVwie3tzZWxlY3RlZEhvdXJ9fVwiXG4gICAgICAgICAgICAgIG1pbj1cInt7c2VsZWN0ZWRNaW51dGV9fVwiXG4gICAgICAgICAgICAgIGZvcm1hdD1cIjI0XCJcbiAgICAgICAgICAgID48L3BhcGVyLXRpbWUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRIb3VyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZVRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZE1pbnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIENvbnZlcnQgdGhlIGRhdGUgaW4gdGhlIHN0YXRlT2JqIGludG8gYSBzdHJpbmcgdXNlYWJsZSBieSB2YWFkaW4tZGF0ZS1waWNrZXIgKi9cbiAgZ2V0RGF0ZVN0cmluZyhzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmtub3duXCIpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB2YXIgbW9udGhGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggPCAxMCkge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHZhciBkYXlGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5IDwgMTApIHtcbiAgICAgIGRheUZpbGxlciA9IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIgK1xuICAgICAgXCItXCIgK1xuICAgICAgbW9udGhGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCArXG4gICAgICBcIi1cIiArXG4gICAgICBkYXlGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICApO1xuICB9XG5cbiAgLyogU2hvdWxkIGZpcmUgd2hlbiBhbnkgdmFsdWUgd2FzIGNoYW5nZWQgKmJ5IHRoZSB1c2VyKiwgbm90IGIvYyBvZiBzZXR0aW5nXG4gICAqIGluaXRpYWwgdmFsdWVzLiAqL1xuICBkYXRlVGltZUNoYW5nZWQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZSBpcyByZWFsbHkgY29taW5nIGZyb20gdGhlIHVzZXJcbiAgICBpZiAoIXRoaXMuaXNfcmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBtaW51dGVGaWxsZXI7XG5cbiAgICBjb25zdCBzZXJ2aWNlRGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGNoYW5nZWQgfD1cbiAgICAgICAgcGFyc2VJbnQodGhpcy5zZWxlY3RlZE1pbnV0ZSkgIT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGU7XG4gICAgICBjaGFuZ2VkIHw9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3VyKSAhPT0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXI7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1pbnV0ZSA8IDEwKSB7XG4gICAgICAgIG1pbnV0ZUZpbGxlciA9IFwiMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlRmlsbGVyID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lU3RyID1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXIgKyBcIjpcIiArIG1pbnV0ZUZpbGxlciArIHRoaXMuc2VsZWN0ZWRNaW51dGU7XG4gICAgICBzZXJ2aWNlRGF0YS50aW1lID0gdGltZVN0cjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gRGF0ZSB3YXMgbm90IHNldFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRlVmFsSW5wdXQgPSBuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICBjb25zdCBkYXRlVmFsU3RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG5cbiAgICAgIGNoYW5nZWQgfD0gZGF0ZVZhbFN0YXRlICE9PSBkYXRlVmFsSW5wdXQ7XG5cbiAgICAgIHNlcnZpY2VEYXRhLmRhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfZGF0ZXRpbWVcIiwgXCJzZXRfZGF0ZXRpbWVcIiwgc2VydmljZURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICAvLyBTZXQgdG8gbm9uLXJlYWR5IHMudC4gZGF0ZVRpbWVDaGFuZ2VkIGRvZXMgbm90IGZpcmVcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG5cbiAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gbmV3VmFsLmF0dHJpYnV0ZXMuaG91cjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSBuZXdWYWwuYXR0cmlidXRlcy5taW51dGU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMuZ2V0RGF0ZVN0cmluZyhuZXdWYWwpO1xuICAgIH1cblxuICAgIHRoaXMuaXNfcmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgZG9lc0hhdmVEYXRlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX2RhdGU7XG4gIH1cblxuICBkb2VzSGF2ZVRpbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwibW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lIFwiICtcbiAgICAgIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcImhhc190aW1lXCIsIFwiaGFzX2RhdGVcIl0pXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIiwgRGF0ZXRpbWVJbnB1dCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgZmVhdHVyZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBGRUFUVVJFX0NMQVNTX05BTUVTID0ge1xuICAxOiBcImhhcy1icmlnaHRuZXNzXCIsXG4gIDI6IFwiaGFzLWNvbG9yX3RlbXBcIixcbiAgNDogXCJoYXMtZWZmZWN0X2xpc3RcIixcbiAgMTY6IFwiaGFzLWNvbG9yXCIsXG4gIDEyODogXCJoYXMtd2hpdGVfdmFsdWVcIixcbn07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0xpZ2h0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmVmZmVjdF9saXN0LFxuICAgICAgICAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmNvbG9yX3RlbXAsXG4gICAgICAgIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuY29sb3JfdGVtcCB7XG4gICAgICAgICAgLS1oYS1zbGlkZXItYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgIHJnYigyNTUsIDE2MCwgMCkgMCUsXG4gICAgICAgICAgICB3aGl0ZSA1MCUsXG4gICAgICAgICAgICByZ2IoMTY2LCAyMDksIDI1NSkgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgICAgLyogVGhlIGNvbG9yIHRlbXAgbWluaW11bSB2YWx1ZSBzaG91bGRuJ3QgYmUgcmVuZGVyZWQgZGlmZmVyZW50bHkuIEl0J3Mgbm90IFwib2ZmXCIuICovXG4gICAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY29sb3ItcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkNvbnRhaW5lciAuc2VnbWVudGF0aW9uQnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMSU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1lZmZlY3RfbGlzdC5pcy1vbiAuZWZmZWN0X2xpc3QsXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmhhcy1jb2xvcl90ZW1wLmlzLW9uIC5jb2xvcl90ZW1wLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogODRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuaGFzLWNvbG9yX3RlbXAuaXMtb24sXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1icmlnaHRuZXNzIC5icmlnaHRuZXNzLFxuICAgICAgICAuaGFzLWNvbG9yX3RlbXAuaXMtb24gLmNvbG9yX3RlbXAsXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24gLndoaXRlX3ZhbHVlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIGhhLWNvbG9yLXBpY2tlciB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyd2lkdGg6IDU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyd2lkdGg6IDI7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcmNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pcy11bmF2YWlsYWJsZSAuY29udHJvbCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgYnJpZ2h0bmVzc1wiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuYnJpZ2h0bmVzcycpXV1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJpZ2h0bmVzcy01XCJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3ticmlnaHRuZXNzU2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJicmlnaHRuZXNzU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGNvbG9yX3RlbXBcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmNvbG9yX3RlbXBlcmF0dXJlJyldXVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp0aGVybW9tZXRlclwiXG4gICAgICAgICAgICBtaW49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX21pcmVkc11dXCJcbiAgICAgICAgICAgIG1heD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfbWlyZWRzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2N0U2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJjdFNsaWRlckNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWxhYmVsZWQtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCB3aGl0ZV92YWx1ZVwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQud2hpdGVfdmFsdWUnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmZpbGUtd29yZC1ib3hcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t3dlNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwid3ZTbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWdtZW50YXRpb25Db250YWluZXJcIj5cbiAgICAgICAgICA8aGEtY29sb3ItcGlja2VyXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29sb3JcIlxuICAgICAgICAgICAgb24tY29sb3JzZWxlY3RlZD1cImNvbG9yUGlja2VkXCJcbiAgICAgICAgICAgIGRlc2lyZWQtaHMtY29sb3I9XCJ7e2NvbG9yUGlja2VyQ29sb3J9fVwiXG4gICAgICAgICAgICB0aHJvdHRsZT1cIjUwMFwiXG4gICAgICAgICAgICBodWUtc2VnbWVudHM9XCJ7e2h1ZVNlZ21lbnRzfX1cIlxuICAgICAgICAgICAgc2F0dXJhdGlvbi1zZWdtZW50cz1cInt7c2F0dXJhdGlvblNlZ21lbnRzfX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWNvbG9yLXBpY2tlcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJtZGk6cGFsZXR0ZVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cInNlZ21lbnRDbGlja1wiXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgc2VnbWVudGF0aW9uQnV0dG9uXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgZWZmZWN0X2xpc3RcIj5cbiAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuZWZmZWN0JyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3RdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJlZmZlY3RDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVmZmVjdF9saXN0XV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZXh0cmEtZmlsdGVycz1cImJyaWdodG5lc3MsY29sb3JfdGVtcCx3aGl0ZV92YWx1ZSxlZmZlY3RfbGlzdCxlZmZlY3QsaHNfY29sb3IscmdiX2NvbG9yLHh5X2NvbG9yLG1pbl9taXJlZHMsbWF4X21pcmVkc1wiXG4gICAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBicmlnaHRuZXNzU2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGN0U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIHd2U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGh1ZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDI0LFxuICAgICAgfSxcblxuICAgICAgc2F0dXJhdGlvblNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDgsXG4gICAgICB9LFxuXG4gICAgICBjb2xvclBpY2tlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgYnJpZ2h0bmVzc1NsaWRlclZhbHVlOiAwLFxuICAgIH07XG5cbiAgICBpZiAobmV3VmFsICYmIG5ld1ZhbC5zdGF0ZSA9PT0gXCJvblwiKSB7XG4gICAgICBwcm9wcy5icmlnaHRuZXNzU2xpZGVyVmFsdWUgPSBuZXdWYWwuYXR0cmlidXRlcy5icmlnaHRuZXNzO1xuICAgICAgcHJvcHMuY3RTbGlkZXJWYWx1ZSA9IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvbG9yX3RlbXA7XG4gICAgICBwcm9wcy53dlNsaWRlclZhbHVlID0gbmV3VmFsLmF0dHJpYnV0ZXMud2hpdGVfdmFsdWU7XG4gICAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3IpIHtcbiAgICAgICAgcHJvcHMuY29sb3JQaWNrZXJDb2xvciA9IHtcbiAgICAgICAgICBoOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclswXSxcbiAgICAgICAgICBzOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclsxXSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIEZFQVRVUkVfQ0xBU1NfTkFNRVMpXTtcbiAgICBpZiAoc3RhdGVPYmogJiYgc3RhdGVPYmouc3RhdGUgPT09IFwib25cIikge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiaXMtb25cIik7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iaiAmJiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJpcy11bmF2YWlsYWJsZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBlZmZlY3RDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3Q7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGVmZmVjdDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgYnJpZ2h0bmVzc1NsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgYnJpID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oYnJpKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBicmlnaHRuZXNzOiBicmksXG4gICAgfSk7XG4gIH1cblxuICBjdFNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgY3QgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTihjdCkpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgY29sb3JfdGVtcDogY3QsXG4gICAgfSk7XG4gIH1cblxuICB3dlNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgd3YgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTih3dikpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgd2hpdGVfdmFsdWU6IHd2LFxuICAgIH0pO1xuICB9XG5cbiAgc2VnbWVudENsaWNrKCkge1xuICAgIGlmICh0aGlzLmh1ZVNlZ21lbnRzID09PSAyNCAmJiB0aGlzLnNhdHVyYXRpb25TZWdtZW50cyA9PT0gOCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDAsIHNhdHVyYXRpb25TZWdtZW50czogMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDI0LCBzYXR1cmF0aW9uU2VnbWVudHM6IDggfSk7XG4gICAgfVxuICB9XG5cbiAgc2VydmljZUNoYW5nZUNvbG9yKGhhc3MsIGVudGl0eUlkLCBjb2xvcikge1xuICAgIGhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgIGhzX2NvbG9yOiBbY29sb3IuaCwgY29sb3IucyAqIDEwMF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBuZXcgY29sb3IgaGFzIGJlZW4gcGlja2VkLlxuICAgKiBzaG91bGQgYmUgdGhyb3R0bGVkIHdpdGggdGhlICd0aHJvdHRsZT0nIGF0dHJpYnV0ZSBvZiB0aGUgY29sb3IgcGlja2VyXG4gICAqL1xuICBjb2xvclBpY2tlZChldikge1xuICAgIHRoaXMuc2VydmljZUNoYW5nZUNvbG9yKHRoaXMuaGFzcywgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsIGV2LmRldGFpbC5ocyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWxpZ2h0XCIsIE1vcmVJbmZvTGlnaHQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE1vcmVJbmZvTG9jayBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2VudGVyZWRDb2RlfX1cIlxuICAgICAgICAgIHBhdHRlcm49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJjYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwidW5sb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay51bmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBvbi1jbGljaz1cImNhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJsb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiY29kZV9mb3JtYXRcIlxuICAgICAgPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGVyZWRDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgaXNMb2NrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gbmV3VmFsLnN0YXRlID09PSBcImxvY2tlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLmVudGVyZWRDb2RlLFxuICAgIH07XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibG9ja1wiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tbG9ja1wiLCBNb3JlSW5mb0xvY2spO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuXG5pbXBvcnQgYXR0cmlidXRlQ2xhc3NOYW1lcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9NZWRpYVBsYXllciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLm1lZGlhLXN0YXRlIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2hpZ2hsaWdodF0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvbHVtZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLXZvbHVtZV9sZXZlbCAudm9sdW1lIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaXJvbi1pY29uLnNvdXJjZS1pbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51LnNvdXJjZS1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpwb3dlclwiXG4gICAgICAgICAgICAgIGhpZ2hsaWdodCQ9XCJbW3BsYXllck9iai5pc09mZl1dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVUb2dnbGVQb3dlclwiXG4gICAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlUG93ZXJCdXR0b24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICBpZj1cIltbY29tcHV0ZVNob3dQbGF5YmFja0NvbnRyb2xzKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtcHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNQcmV2aW91c1RyYWNrXV1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cIltbY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVBsYXliYWNrQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIWNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0PVwiXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtbmV4dFwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVOZXh0XCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzTmV4dFRyYWNrXV1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFZPTFVNRSAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lX2J1dHRvbnMgY2VudGVyIGhvcml6b250YWwgbGF5b3V0XCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVZvbHVtZUJ1dHRvbnMocGxheWVyT2JqKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVWb2x1bWVUYXBcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dm9sdW1lLW9mZlwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpZD1cInZvbHVtZURvd25cIlxuICAgICAgICAgICAgZGlzYWJsZWQkPVwiW1twbGF5ZXJPYmouaXNNdXRlZF1dXCJcbiAgICAgICAgICAgIG9uLW1vdXNlZG93bj1cImhhbmRsZVZvbHVtZURvd25cIlxuICAgICAgICAgICAgb24tdG91Y2hzdGFydD1cImhhbmRsZVZvbHVtZURvd25cIlxuICAgICAgICAgICAgb24tdG91Y2hlbmQ9XCJoYW5kbGVWb2x1bWVUb3VjaEVuZFwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp2b2x1bWUtbWVkaXVtXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGlkPVwidm9sdW1lVXBcIlxuICAgICAgICAgICAgZGlzYWJsZWQkPVwiW1twbGF5ZXJPYmouaXNNdXRlZF1dXCJcbiAgICAgICAgICAgIG9uLW1vdXNlZG93bj1cImhhbmRsZVZvbHVtZVVwXCJcbiAgICAgICAgICAgIG9uLXRvdWNoc3RhcnQ9XCJoYW5kbGVWb2x1bWVVcFwiXG4gICAgICAgICAgICBvbi10b3VjaGVuZD1cImhhbmRsZVZvbHVtZVRvdWNoRW5kXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnZvbHVtZS1oaWdoXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInZvbHVtZSBjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNWb2x1bWVTZXRdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlVm9sdW1lVGFwXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbW3BsYXllck9iai5zdXBwb3J0c1ZvbHVtZUJ1dHRvbnNdXVwiXG4gICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlTXV0ZVZvbHVtZUljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIxMDBcIlxuICAgICAgICAgICAgdmFsdWU9XCJbW3BsYXllck9iai52b2x1bWVTbGlkZXJWYWx1ZV1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cInZvbHVtZVNsaWRlckNoYW5nZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIGlnbm9yZS1iYXItdG91Y2g9XCJcIlxuICAgICAgICAgICAgZGlyPVwie3tydGx9fVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBTT1VSQ0UgUElDS0VSIC0tPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlU2VsZWN0U291cmNlKHBsYXllck9iaildXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aXJvbi1pY29uIGNsYXNzPVwic291cmNlLWlucHV0XCIgaWNvbj1cImhhc3M6bG9naW4tdmFyaWFudFwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBjbGFzcz1cImZsZXggc291cmNlLWlucHV0XCJcbiAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci5zb3VyY2UnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW3BsYXllck9iai5zb3VyY2VdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJoYW5kbGVTb3VyY2VDaGFuZ2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1twbGF5ZXJPYmouc291cmNlTGlzdF1dXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBTT1VORCBNT0RFIFBJQ0tFUiAtLT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFjb21wdXRlSGlkZVNlbGVjdFNvdW5kTW9kZShwbGF5ZXJPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMgbGF5b3V0IGhvcml6b250YWwganVzdGlmaWVkXCI+XG4gICAgICAgICAgICA8aXJvbi1pY29uIGNsYXNzPVwic291cmNlLWlucHV0XCIgaWNvbj1cImhhc3M6bXVzaWMtbm90ZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IHNvdXJjZS1pbnB1dFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci5zb3VuZF9tb2RlJyldXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbcGxheWVyT2JqLnNvdW5kTW9kZV1dXCJcbiAgICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwiaGFuZGxlU291bmRNb2RlQ2hhbmdlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3BsYXllck9iai5zb3VuZE1vZGVMaXN0XV1cIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPCEtLSBUVFMgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVRUUyh0dHNMb2FkZWQsIHBsYXllck9iaildXVwiXG4gICAgICAgICAgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBlbmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBpZD1cInR0c0lucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5tZWRpYV9wbGF5ZXIudGV4dF90b19zcGVhaycpXV1cIlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t0dHNNZXNzYWdlfX1cIlxuICAgICAgICAgICAgb24ta2V5ZG93bj1cInR0c0NoZWNrRm9yRW50ZXJcIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2VuZFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cInNlbmRUVFNcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJwbGF5ZXJPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICB0dHNMb2FkZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVRUU0xvYWRlZChoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgdHRzTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVExEaXJlY3Rpb24oaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBwbGF5ZXJPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJ2b2x1bWVfbGV2ZWxcIl0pO1xuICB9XG5cbiAgY29tcHV0ZU11dGVWb2x1bWVJY29uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNNdXRlZCA/IFwiaGFzczp2b2x1bWUtb2ZmXCIgOiBcImhhc3M6dm9sdW1lLWhpZ2hcIjtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlVm9sdW1lQnV0dG9ucyhwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXBsYXllck9iai5zdXBwb3J0c1ZvbHVtZUJ1dHRvbnMgfHwgcGxheWVyT2JqLmlzT2ZmO1xuICB9XG5cbiAgY29tcHV0ZVNob3dQbGF5YmFja0NvbnRyb2xzKHBsYXllck9iaikge1xuICAgIHJldHVybiAhcGxheWVyT2JqLmlzT2ZmICYmIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2w7XG4gIH1cblxuICBjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopIHtcbiAgICBpZiAocGxheWVyT2JqLmlzUGxheWluZykge1xuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BhdXNlID8gXCJoYXNzOnBhdXNlXCIgOiBcImhhc3M6c3RvcFwiO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLmhhc01lZGlhQ29udHJvbCB8fCBwbGF5ZXJPYmouaXNPZmYgfHwgcGxheWVyT2JqLmlzSWRsZSkge1xuICAgICAgaWYgKFxuICAgICAgICBwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sICYmXG4gICAgICAgIHBsYXllck9iai5zdXBwb3J0c1BhdXNlICYmXG4gICAgICAgICFwbGF5ZXJPYmouaXNQYXVzZWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJoYXNzOnBsYXktcGF1c2VcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbGF5ZXJPYmouc3VwcG9ydHNQbGF5ID8gXCJoYXNzOnBsYXlcIiA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gcGxheWVyT2JqLmlzT2ZmXG4gICAgICA/ICFwbGF5ZXJPYmouc3VwcG9ydHNUdXJuT25cbiAgICAgIDogIXBsYXllck9iai5zdXBwb3J0c1R1cm5PZmY7XG4gIH1cblxuICBjb21wdXRlSGlkZVNlbGVjdFNvdXJjZShwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLmlzT2ZmIHx8XG4gICAgICAhcGxheWVyT2JqLnN1cHBvcnRzU2VsZWN0U291cmNlIHx8XG4gICAgICAhcGxheWVyT2JqLnNvdXJjZUxpc3RcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVTZWxlY3RTb3VuZE1vZGUocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBsYXllck9iai5pc09mZiB8fFxuICAgICAgIXBsYXllck9iai5zdXBwb3J0c1NlbGVjdFNvdW5kTW9kZSB8fFxuICAgICAgIXBsYXllck9iai5zb3VuZE1vZGVMaXN0XG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlVFRTKHR0c0xvYWRlZCwgcGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICF0dHNMb2FkZWQgfHwgIXBsYXllck9iai5zdXBwb3J0c1BsYXlNZWRpYTtcbiAgfVxuXG4gIGNvbXB1dGVUVFNMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcInR0c1wiKTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVBvd2VyKCkge1xuICAgIHRoaXMucGxheWVyT2JqLnRvZ2dsZVBvd2VyKCk7XG4gIH1cblxuICBoYW5kbGVQcmV2aW91cygpIHtcbiAgICB0aGlzLnBsYXllck9iai5wcmV2aW91c1RyYWNrKCk7XG4gIH1cblxuICBoYW5kbGVQbGF5YmFja0NvbnRyb2woKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoubWVkaWFQbGF5UGF1c2UoKTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoubmV4dFRyYWNrKCk7XG4gIH1cblxuICBoYW5kbGVTb3VyY2VDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLnBsYXllck9iaikgcmV0dXJuO1xuXG4gICAgdmFyIG9sZFZhbCA9IHRoaXMucGxheWVyT2JqLnNvdXJjZTtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMucGxheWVyT2JqLnNlbGVjdFNvdXJjZShuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlU291bmRNb2RlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5wbGF5ZXJPYmopIHJldHVybjtcblxuICAgIHZhciBvbGRWYWwgPSB0aGlzLnBsYXllck9iai5zb3VuZE1vZGU7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLnBsYXllck9iai5zZWxlY3RTb3VuZE1vZGUobmV3VmFsKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVRhcCgpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lTXV0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBsYXllck9iai52b2x1bWVNdXRlKCF0aGlzLnBsYXllck9iai5pc011dGVkKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVRvdWNoRW5kKGV2KSB7XG4gICAgLyogd2hlbiB0b3VjaCBlbmRzLCB3ZSBtdXN0IHByZXZlbnQgdGhpcyBmcm9tXG4gICAgICogYmVjb21pbmcgYSBtb3VzZWRvd24sIHVwLCBjbGljayBieSBlbXVsYXRpb24gKi9cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVXAoKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy4kLnZvbHVtZVVwO1xuICAgIHRoaXMuaGFuZGxlVm9sdW1lV29ya2VyKFwidm9sdW1lX3VwXCIsIG9iaiwgdHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVWb2x1bWVEb3duKCkge1xuICAgIGNvbnN0IG9iaiA9IHRoaXMuJC52b2x1bWVEb3duO1xuICAgIHRoaXMuaGFuZGxlVm9sdW1lV29ya2VyKFwidm9sdW1lX2Rvd25cIiwgb2JqLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZVdvcmtlcihzZXJ2aWNlLCBvYmosIGZvcmNlKSB7XG4gICAgaWYgKGZvcmNlIHx8IChvYmogIT09IHVuZGVmaW5lZCAmJiBvYmoucG9pbnRlckRvd24pKSB7XG4gICAgICB0aGlzLnBsYXllck9iai5jYWxsU2VydmljZShzZXJ2aWNlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoc2VydmljZSwgb2JqLCBmYWxzZSksIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgdm9sdW1lU2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHZvbFBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGV2LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3Qgdm9sdW1lID0gdm9sUGVyY2VudGFnZSA+IDAgPyB2b2xQZXJjZW50YWdlIC8gMTAwIDogMDtcbiAgICB0aGlzLnBsYXllck9iai5zZXRWb2x1bWUodm9sdW1lKTtcbiAgfVxuXG4gIHR0c0NoZWNrRm9yRW50ZXIoZXYpIHtcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHRoaXMuc2VuZFRUUygpO1xuICB9XG5cbiAgc2VuZFRUUygpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMuaGFzcy5zZXJ2aWNlcy50dHM7XG4gICAgY29uc3Qgc2VydmljZUtleXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcykuc29ydCgpO1xuICAgIGxldCBzZXJ2aWNlO1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNlcnZpY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2VydmljZUtleXNbaV0uaW5kZXhPZihcIl9zYXlcIikgIT09IC0xKSB7XG4gICAgICAgIHNlcnZpY2UgPSBzZXJ2aWNlS2V5c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwidHRzXCIsIHNlcnZpY2UsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBtZXNzYWdlOiB0aGlzLnR0c01lc3NhZ2UsXG4gICAgfSk7XG4gICAgdGhpcy50dHNNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLiQudHRzSW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tbWVkaWFfcGxheWVyXCIsIE1vcmVJbmZvTWVkaWFQbGF5ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvU2NyaXB0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgdmVydGljYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zY3JpcHQubGFzdF9hY3Rpb24nKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmxhc3RfYWN0aW9uXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXNjcmlwdFwiLCBNb3JlSW5mb1NjcmlwdCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcblxuY2xhc3MgTW9yZUluZm9TdW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlT3JkZXIocmlzaW5nRGF0ZSwgc2V0dGluZ0RhdGUpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgICA8c3Bhbj5bW2l0ZW1DYXB0aW9uKGl0ZW0pXV08L3NwYW4+XG4gICAgICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkYXRldGltZS1vYmo9XCJbW2l0ZW1EYXRlKGl0ZW0pXV1cIlxuICAgICAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW2l0ZW1WYWx1ZShpdGVtKV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWVudHJ5IGxheW91dCBqdXN0aWZpZWQgaG9yaXpvbnRhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4uZWxldmF0aW9uJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVsZXZhdGlvbl1dPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgcmlzaW5nRGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSaXNpbmcoc3RhdGVPYmopXCIsXG4gICAgICB9LFxuXG4gICAgICBzZXR0aW5nRGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTZXR0aW5nKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVJpc2luZyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgRGF0ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLm5leHRfcmlzaW5nKTtcbiAgfVxuXG4gIGNvbXB1dGVTZXR0aW5nKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXRlT2JqLmF0dHJpYnV0ZXMubmV4dF9zZXR0aW5nKTtcbiAgfVxuXG4gIGNvbXB1dGVPcmRlcihyaXNpbmdEYXRlLCBzZXR0aW5nRGF0ZSkge1xuICAgIHJldHVybiByaXNpbmdEYXRlID4gc2V0dGluZ0RhdGUgPyBbXCJzZXRcIiwgXCJyaXNcIl0gOiBbXCJyaXNcIiwgXCJzZXRcIl07XG4gIH1cblxuICBpdGVtQ2FwdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IFwicmlzXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4ucmlzaW5nXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuc3VuLnNldHRpbmdcIik7XG4gIH1cblxuICBpdGVtRGF0ZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwicmlzXCIgPyB0aGlzLnJpc2luZ0RhdGUgOiB0aGlzLnNldHRpbmdEYXRlO1xuICB9XG5cbiAgaXRlbVZhbHVlKHR5cGUpIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZSh0aGlzLml0ZW1EYXRlKHR5cGUpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1zdW5cIiwgTW9yZUluZm9TdW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9VcGRhdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9pbnN0YWxsYXRpb24vdXBkYXRpbmcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnVwZGF0ZXIudGl0bGUnKV1dPC9hXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWxlYXNlTm90ZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5yZWxlYXNlX25vdGVzIHx8XG4gICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvaW5zdGFsbGF0aW9uL3VwZGF0aW5nL1wiXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tdXBkYXRlclwiLCBNb3JlSW5mb1VwZGF0ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuY2xhc3MgTW9yZUluZm9WYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtc3VidGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1zdWJ0aXRsZVwiPlN0YXR1czogPC9zcGFuXG4gICAgICAgICAgPjxzcGFuPjxzdHJvbmc+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXR1c11dPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgID48aXJvbi1pY29uIGljb249XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeV9pY29uXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5X2xldmVsXV0gJTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaildXVwiPlxuICAgICAgICA8cD48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtc3VidGl0bGVcIj5WYWN1dW0gY2xlYW5lciBjb21tYW5kczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdXBwb3J0c1N0YXJ0KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uU3RhcnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwYXVzZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJvblBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3VwcG9ydHNTdGFydChzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5LXBhdXNlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUGxheVBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdG9wKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTdG9wXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ2xlYW5TcG90KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJvb21cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xlYW5TcG90XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhbiBzcG90XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzTG9jYXRlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25Mb2NhdGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxvY2F0ZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpob21lLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUmV0dXJuSG9tZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmV0dXJuIGhvbWVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzRmFuU3BlZWQoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFuIHNwZWVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZF1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImZhblNwZWVkQ2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1zZWxmOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxLjNlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgPjxpcm9uLWljb24gaWNvbj1cImhhc3M6ZmFuXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRdXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiZmFuX3NwZWVkLGZhbl9zcGVlZF9saXN0LHN0YXR1cyxiYXR0ZXJ5X2xldmVsLGJhdHRlcnlfaWNvblwiXG4gICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3VwcG9ydHNQYXVzZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBzdXBwb3J0c0ZhblNwZWVkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgc3VwcG9ydHNMb2NhdGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgc3VwcG9ydHNDbGVhblNwb3Qoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIHN1cHBvcnRzU3RhcnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKTtcbiAgfVxuXG4gIHN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNikgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTAyNCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKVxuICAgICk7XG4gIH1cblxuICBmYW5TcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZDtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInNldF9mYW5fc3BlZWRcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGZhbl9zcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0b3BcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGxheVBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0X3BhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInBhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0XCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvY2F0ZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJsb2NhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYW5TcG90KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcImNsZWFuX3Nwb3RcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmV0dXJuSG9tZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJyZXR1cm5fdG9fYmFzZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby12YWN1dW1cIiwgTW9yZUluZm9WYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS13YXRlcl9oZWF0ZXItY29udHJvbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgZmVhdHVyZUNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XYXRlckhlYXRlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuY29udGFpbmVyLW9wZXJhdGlvbl9saXN0LFxuXG4gICAgICAgIC5oYXMtYXdheV9tb2RlIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuaGFzLXRhcmdldF90ZW1wZXJhdHVyZSAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuaGFzLW9wZXJhdGlvbl9tb2RlIC5jb250YWluZXItb3BlcmF0aW9uX2xpc3QsXG5cbiAgICAgICAgLmNvbnRhaW5lci1vcGVyYXRpb25fbGlzdCBpcm9uLWljb24sXG5cbiAgICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICB9XG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgfVxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5vcGVyYXRpb25fbW9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIudGFyZ2V0X3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dXCJcbiAgICAgICAgICAgICAgICB1bml0cz1cIltbaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVdXVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIltbY29tcHV0ZVRlbXBlcmF0dXJlU3RlcFNpemUoaGFzcywgc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcF1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXBdXVwiXG4gICAgICAgICAgICAgICAgb24tY2hhbmdlPVwidGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXdhdGVyX2hlYXRlci1jb250cm9sPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3BlcmF0aW9uX2xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLm9wZXJhdGlvbicpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlXV1cIlxuICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX2xpc3RdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPltbX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzQXdheU1vZGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF3YXlfbW9kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuYXdheV9tb2RlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHBhcGVyLXRvZ2dsZS1idXR0b25cbiAgICAgICAgICAgICAgICBjaGVja2VkPVwiW1thd2F5VG9nZ2xlQ2hlY2tlZF1dXCJcbiAgICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJhd2F5VG9nZ2xlQ2hhbmdlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBhd2F5VG9nZ2xlQ2hlY2tlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgYXdheVRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmF3YXlfbW9kZSA9PT0gXCJvblwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgIHRpbWVPdXQuYWZ0ZXIoNTAwKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVUZW1wZXJhdHVyZVN0ZXBTaXplKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfc3RlcCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfc3RlcDtcbiAgICB9XG4gICAgaWYgKGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlLmluZGV4T2YoXCJGXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwLjU7XG4gIH1cblxuICBzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3J0c1RlbXBlcmF0dXJlKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN1cHBvcnRzVGVtcGVyYXR1cmUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxKSAmJlxuICAgICAgdHlwZW9mIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgPT09IFwibnVtYmVyXCJcbiAgICApO1xuICB9XG5cbiAgc3VwcG9ydHNPcGVyYXRpb25Nb2RlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMik7XG4gIH1cblxuICBzdXBwb3J0c0F3YXlNb2RlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IF9mZWF0dXJlQ2xhc3NOYW1lcyA9IHtcbiAgICAgIDE6IFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgMjogXCJoYXMtb3BlcmF0aW9uX21vZGVcIixcbiAgICAgIDQ6IFwiaGFzLWF3YXlfbW9kZVwiLFxuICAgIH07XG5cbiAgICB2YXIgY2xhc3NlcyA9IFtmZWF0dXJlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgX2ZlYXR1cmVDbGFzc05hbWVzKV07XG5cbiAgICBjbGFzc2VzLnB1c2goXCJtb3JlLWluZm8td2F0ZXJfaGVhdGVyXCIpO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICB0YXJnZXRUZW1wZXJhdHVyZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGVtcGVyYXR1cmUgPT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZSkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbFNlcnZpY2VIZWxwZXIoXCJzZXRfdGVtcGVyYXR1cmVcIiwgeyB0ZW1wZXJhdHVyZTogdGVtcGVyYXR1cmUgfSk7XG4gIH1cblxuICBhd2F5VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hd2F5X21vZGUgPT09IFwib25cIjtcbiAgICBjb25zdCBuZXdWYWwgPSBldi50YXJnZXQuY2hlY2tlZDtcbiAgICBpZiAob2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlSGVscGVyKFwic2V0X2F3YXlfbW9kZVwiLCB7IGF3YXlfbW9kZTogbmV3VmFsIH0pO1xuICB9XG5cbiAgaGFuZGxlT3BlcmF0aW9ubW9kZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX21vZGU7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG4gICAgdGhpcy5jYWxsU2VydmljZUhlbHBlcihcInNldF9vcGVyYXRpb25fbW9kZVwiLCB7XG4gICAgICBvcGVyYXRpb25fbW9kZTogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgY2FsbFNlcnZpY2VIZWxwZXIoc2VydmljZSwgZGF0YSkge1xuICAgIC8vIFdlIGNhbGwgc3RhdGVDaGFuZ2VkIGFmdGVyIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlLXN5bmMgdGhlIGlucHV0c1xuICAgIC8vIHdpdGggdGhlIHN0YXRlLiBJdCB3aWxsIGJlIG91dCBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZW50aXR5IHRvIGJlIHR1cm5lZCBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZyxcbiAgICAvLyB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwid2F0ZXJfaGVhdGVyXCIsIHNlcnZpY2UsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZU9iakNoYW5nZWQodGhpcy5zdGF0ZU9iaik7XG4gICAgfSk7XG4gIH1cblxuICBfbG9jYWxpemVPcGVyYXRpb25Nb2RlKGxvY2FsaXplLCBtb2RlKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZS53YXRlcl9oZWF0ZXIuJHttb2RlfWApIHx8IG1vZGU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiLCBNb3JlSW5mb1dhdGVySGVhdGVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb1dlYXRoZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGlyb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwIDhweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlbXAsXG4gICAgICAgIC50ZW1wbG93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGVtcGxvdyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6dGhlcm1vbWV0ZXJcIj48L2lyb24taWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy50ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlXV0gW1tnZXRVbml0KCd0ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc3N1cmUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOmdhdWdlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmFpcl9wcmVzc3VyZScpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlXV0gW1tnZXRVbml0KCdhaXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHkpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOndhdGVyLXBlcmNlbnRcIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMuaHVtaWRpdHknKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHldXSAlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6d2VhdGhlci13aW5keVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy53aW5kX3NwZWVkJyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBbW2dldFdpbmQoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkLFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX2JlYXJpbmcsIGxvY2FsaXplKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMudmlzaWJpbGl0eSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgIDxpcm9uLWljb24gaWNvbj1cImhhc3M6ZXllXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLnZpc2liaWxpdHknKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMudmlzaWJpbGl0eV1dIFtbZ2V0VW5pdCgnbGVuZ3RoJyldXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0XV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5bW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuZm9yZWNhc3QnKV1dOjwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3RdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLmNvbmRpdGlvbildXVwiPlxuICAgICAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJbW2dldFdlYXRoZXJJY29uKGl0ZW0uY29uZGl0aW9uKV1dXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfc2hvd1ZhbHVlKGl0ZW0udGVtcGxvdyldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPltbY29tcHV0ZURhdGVUaW1lKGl0ZW0uZGF0ZXRpbWUpXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5bW2NvbXB1dGVEYXRlKGl0ZW0uZGF0ZXRpbWUpXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsb3dcIj5cbiAgICAgICAgICAgICAgICBbW2l0ZW0udGVtcGxvd11dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+XG4gICAgICAgICAgICAgIFtbaXRlbS50ZW1wZXJhdHVyZV1dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwic3RhdGVPYmouYXR0cmlidXRlcy5hdHRyaWJ1dGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRpb25cIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb25dXTwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FyZGluYWxEaXJlY3Rpb25zID0gW1xuICAgICAgXCJOXCIsXG4gICAgICBcIk5ORVwiLFxuICAgICAgXCJORVwiLFxuICAgICAgXCJFTkVcIixcbiAgICAgIFwiRVwiLFxuICAgICAgXCJFU0VcIixcbiAgICAgIFwiU0VcIixcbiAgICAgIFwiU1NFXCIsXG4gICAgICBcIlNcIixcbiAgICAgIFwiU1NXXCIsXG4gICAgICBcIlNXXCIsXG4gICAgICBcIldTV1wiLFxuICAgICAgXCJXXCIsXG4gICAgICBcIldOV1wiLFxuICAgICAgXCJOV1wiLFxuICAgICAgXCJOTldcIixcbiAgICAgIFwiTlwiLFxuICAgIF07XG4gICAgdGhpcy53ZWF0aGVySWNvbnMgPSB7XG4gICAgICBcImNsZWFyLW5pZ2h0XCI6IFwiaGFzczp3ZWF0aGVyLW5pZ2h0XCIsXG4gICAgICBjbG91ZHk6IFwiaGFzczp3ZWF0aGVyLWNsb3VkeVwiLFxuICAgICAgZm9nOiBcImhhc3M6d2VhdGhlci1mb2dcIixcbiAgICAgIGhhaWw6IFwiaGFzczp3ZWF0aGVyLWhhaWxcIixcbiAgICAgIGxpZ2h0bmluZzogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nXCIsXG4gICAgICBcImxpZ2h0bmluZy1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmctcmFpbnlcIixcbiAgICAgIHBhcnRseWNsb3VkeTogXCJoYXNzOndlYXRoZXItcGFydGx5Y2xvdWR5XCIsXG4gICAgICBwb3VyaW5nOiBcImhhc3M6d2VhdGhlci1wb3VyaW5nXCIsXG4gICAgICByYWlueTogXCJoYXNzOndlYXRoZXItcmFpbnlcIixcbiAgICAgIHNub3d5OiBcImhhc3M6d2VhdGhlci1zbm93eVwiLFxuICAgICAgXCJzbm93eS1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1zbm93eS1yYWlueVwiLFxuICAgICAgc3Vubnk6IFwiaGFzczp3ZWF0aGVyLXN1bm55XCIsXG4gICAgICB3aW5keTogXCJoYXNzOndlYXRoZXItd2luZHlcIixcbiAgICAgIFwid2luZHktdmFyaWFudFwiOiBcImhhc3M6d2VhdGhlci13aW5keS12YXJpYW50XCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlVGltZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHtcbiAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH1cblxuICBnZXRVbml0KG1lYXN1cmUpIHtcbiAgICBjb25zdCBsZW5ndGhVbml0ID0gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbS5sZW5ndGggfHwgXCJcIjtcbiAgICBzd2l0Y2ggKG1lYXN1cmUpIHtcbiAgICAgIGNhc2UgXCJhaXJfcHJlc3N1cmVcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwiaFBhXCIgOiBcImluSGdcIjtcbiAgICAgIGNhc2UgXCJsZW5ndGhcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQ7XG4gICAgICBjYXNlIFwicHJlY2lwaXRhdGlvblwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJtbVwiIDogXCJpblwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW1bbWVhc3VyZV0gfHwgXCJcIjtcbiAgICB9XG4gIH1cblxuICB3aW5kQmVhcmluZ1RvVGV4dChkZWdyZWUpIHtcbiAgICBjb25zdCBkZWdyZWVudW0gPSBwYXJzZUludChkZWdyZWUpO1xuICAgIGlmIChpc0Zpbml0ZShkZWdyZWVudW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJkaW5hbERpcmVjdGlvbnNbKCgoZGVncmVlbnVtICsgMTEuMjUpIC8gMjIuNSkgfCAwKSAlIDE2XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZ3JlZTtcbiAgfVxuXG4gIGdldFdpbmQoc3BlZWQsIGJlYXJpbmcsIGxvY2FsaXplKSB7XG4gICAgaWYgKGJlYXJpbmcgIT0gbnVsbCkge1xuICAgICAgY29uc3QgY2FyZGluYWxEaXJlY3Rpb24gPSB0aGlzLndpbmRCZWFyaW5nVG9UZXh0KGJlYXJpbmcpO1xuICAgICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaCAoJHtsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNhcmQud2VhdGhlci5jYXJkaW5hbF9kaXJlY3Rpb24uJHtjYXJkaW5hbERpcmVjdGlvbi50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICkgfHwgY2FyZGluYWxEaXJlY3Rpb259KWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtzcGVlZH0gJHt0aGlzLmdldFVuaXQoXCJsZW5ndGhcIil9L2hgO1xuICB9XG5cbiAgZ2V0V2VhdGhlckljb24oY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMud2VhdGhlckljb25zW2NvbmRpdGlvbl07XG4gIH1cblxuICBfc2hvd1ZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8td2VhdGhlclwiLCBNb3JlSW5mb1dlYXRoZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgXCIuL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50XCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNvbnN0IERPTUFJTlNfTk9fSU5GTyA9IFtcImNhbWVyYVwiLCBcImNvbmZpZ3VyYXRvclwiLCBcImhpc3RvcnlfZ3JhcGhcIl07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0NvbnRyb2xzIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGUtZGlhbG9nXCI+XG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtaGlzdG9yeS1jaGFydHMge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDUxcHgpIGFuZCAobWluLWhlaWdodDogNTAxcHgpIHtcbiAgICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZG9tYWluPVwiY2FtZXJhXCJdKSBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwIC0yNHB4IC0yMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgZGlhbG9nLWRpc21pc3M9XCJcIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiBtYWluLXRpdGxlPVwiXCIgb24tY2xpY2s9XCJlbmxhcmdlXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhbkNvbmZpZ3VyZV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9nb3RvU2V0dGluZ3NcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBpbi1kaWFsb2c9XCJcIlxuICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIGRpYWxvZy1lbGVtZW50PVwiW1tkaWFsb2dFbGVtZW50XV1cIj5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVNob3dIaXN0b3J5Q29tcG9uZW50KGhhc3MsIHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBmaWx0ZXItdHlwZT1cInJlY2VudC1lbnRpdHlcIlxuICAgICAgICAgICAgZW50aXR5LWlkPVwiW1tzdGF0ZU9iai5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICBkYXRhPVwie3tfc3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZz1cInt7X3N0YXRlSGlzdG9yeUxvYWRpbmd9fVwiXG4gICAgICAgICAgICBjYWNoZS1jb25maWc9XCJbW19jYWNoZUNvbmZpZ11dXCJcbiAgICAgICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgaGlzdG9yeS1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5TG9hZGluZ11dXCJcbiAgICAgICAgICAgIHVwLXRvLW5vd1xuICAgICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnRzPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRlbnRcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgID48L21vcmUtaW5mby1jb250ZW50PlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGlhbG9nRWxlbWVudDogT2JqZWN0LFxuICAgICAgY2FuQ29uZmlndXJlOiBCb29sZWFuLFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgX3N0YXRlSGlzdG9yeUxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2NhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiA2MCxcbiAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICBob3Vyc1RvU2hvdzogMjQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGVubGFyZ2UoKSB7XG4gICAgdGhpcy5sYXJnZSA9ICF0aGlzLmxhcmdlO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93U3RhdGVJbmZvKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuICFzdGF0ZU9iaiB8fCAhRE9NQUlOU19OT19JTkZPLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikpO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBoYXNzICYmXG4gICAgICBzdGF0ZU9iaiAmJlxuICAgICAgaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJoaXN0b3J5XCIpICYmXG4gICAgICAhRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWS5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IFwiXCI7XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhY2hlQ29uZmlnLmNhY2hlS2V5ICE9PSBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gKSB7XG4gICAgICB0aGlzLl9jYWNoZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NhY2hlQ29uZmlnLCB7XG4gICAgICAgIGNhY2hlS2V5OiBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IFwic2V0dGluZ3NcIiB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRyb2xzXCIsIE1vcmVJbmZvQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb1NldHRpbmdzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgLyogdG8gZml0IHNhdmUgYnV0dG9uICovXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXRvb2xiYXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICBvbi1jbGljaz1cIl9iYWNrVGFwcGVkXCJcbiAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+W1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zYXZlXCIgZGlzYWJsZWQ9XCJbW19jb21wdXRlSW52YWxpZChfZW50aXR5SWQpXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5zYXZlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2FwcC10b29sYmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X25hbWV9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5uYW1lJyldXVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X2VudGl0eUlkfX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3MuZW50aXR5X2lkJyldXVwiXG4gICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkRvbWFpbiBuZWVkcyB0byBzdGF5IHRoZSBzYW1lXCJcbiAgICAgICAgICBpbnZhbGlkPVwiW1tfY29tcHV0ZUludmFsaWQoX2VudGl0eUlkKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuXG4gICAgICByZWdpc3RyeUluZm86IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfcmVnaXN0cnlJbmZvQ2hhbmdlZFwiLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBfbmFtZTogU3RyaW5nLFxuICAgICAgX2VudGl0eUlkOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaikgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgX2NvbXB1dGVJbnZhbGlkKGVudGl0eUlkKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVEb21haW4odGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpICE9PSBjb21wdXRlRG9tYWluKGVudGl0eUlkKTtcbiAgfVxuXG4gIF9yZWdpc3RyeUluZm9DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBuZXdWYWwubmFtZSxcbiAgICAgICAgX2VudGl0eUlkOiBuZXdWYWwuZW50aXR5X2lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBcIlwiLFxuICAgICAgICBfZW50aXR5SWQ6IFwiXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfYmFja1RhcHBlZCgpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IG51bGwgfSk7XG4gIH1cblxuICBhc3luYyBfc2F2ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICAgIG5ld19lbnRpdHlfaWQ6IHRoaXMuX2VudGl0eUlkLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLnJlZ2lzdHJ5SW5mbyA9IGluZm87XG5cbiAgICAgIC8vIEtlZXAgdGhlIG1vcmUgaW5mbyBkaWFsb2cgb3BlbiBhdCB0aGUgbmV3IGVudGl0eS5cbiAgICAgIGlmICh0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCAhPT0gdGhpcy5fZW50aXR5SWQpIHtcbiAgICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5fZW50aXR5SWQgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgc2F2ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2V0dGluZ3NcIiwgTW9yZUluZm9TZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBQYXBlckRpYWxvZ0JlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3JcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi9ldmVudHMtbWl4aW5cIjtcbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gICAgICBbRXZlbnRzTWl4aW4sIFBhcGVyRGlhbG9nQmVoYXZpb3JdLFxuICAgICAgc3VwZXJDbGFzc1xuICAgICkge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpdGhCYWNrZHJvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImNvbGRcIixcbiAgICBcImNvbm5lY3Rpdml0eVwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlX2Rvb3JcIixcbiAgICBcImdhc1wiLFxuICAgIFwiaGVhdFwiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImxvY2tcIixcbiAgICBcIm1vaXN0dXJlXCIsXG4gICAgXCJtb3Rpb25cIixcbiAgICBcIm1vdmluZ1wiLFxuICAgIFwib2NjdXBhbmN5XCIsXG4gICAgXCJvcGVuaW5nXCIsXG4gICAgXCJwbHVnXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlc2VuY2VcIixcbiAgICBcInByb2JsZW1cIixcbiAgICBcInNhZmV0eVwiLFxuICAgIFwic21va2VcIixcbiAgICBcInNvdW5kXCIsXG4gICAgXCJ2aWJyYXRpb25cIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBjb3ZlcjogW1xuICAgIFwiYXduaW5nXCIsXG4gICAgXCJibGluZFwiLFxuICAgIFwiY3VydGFpblwiLFxuICAgIFwiZGFtcGVyXCIsXG4gICAgXCJkb29yXCIsXG4gICAgXCJnYXJhZ2VcIixcbiAgICBcInNoYWRlXCIsXG4gICAgXCJzaHV0dGVyXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJodW1pZGl0eVwiLFxuICAgIFwiaWxsdW1pbmFuY2VcIixcbiAgICBcInRlbXBlcmF0dXJlXCIsXG4gICAgXCJwcmVzc3VyZVwiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInNpZ25hbF9zdHJlbmd0aFwiLFxuICBdLFxuICBzd2l0Y2g6IFtcInN3aXRjaFwiLCBcIm91dGxldFwiXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IFwianNvblwiO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSBcImtleS12YWx1ZVwiO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwiaGEtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJoYS1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiwgZGVzY3JpcHRpb246IFwiTmFtZVwiIH0sXG4gIGljb246IHsgdHlwZTogXCJpY29uXCIgfSxcbiAgZW11bGF0ZWRfaHVlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiIH0sXG4gIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBkZXZpY2VfY2xhc3M6IHtcbiAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIiwgXCJzd2l0Y2hcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQUE7QUFzQkE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRkE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQVdBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFHQTs7OztBQUFBOzs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUdBOztBQVBBOzs7OztBQWlCQTtBQUNBOztBQUVBO0FBckJBO0FBdUJBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQSx3TEFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTs7O0FBckxBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxJQTtBQUNBO0FBbUlBOzs7Ozs7Ozs7Ozs7QUM5SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUE1REE7QUFpRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlrQkE7QUFDQTtBQThrQkE7Ozs7Ozs7Ozs7OztBQ3psQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkE7QUFDQTtBQXBFQTtBQUNBO0FBcUVBOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBa0JBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFoQkE7QUF3QkE7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFDQTtBQTREQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExSEE7QUFDQTtBQTJIQTs7Ozs7Ozs7Ozs7O0FDdElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBN0RBO0FBb0VBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNRQTtBQTZRQTs7Ozs7Ozs7Ozs7O0FDMVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFnQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXRCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExTEE7QUFDQTtBQTBMQTs7Ozs7Ozs7Ozs7O0FDN01BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUEzQkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL1BBO0FBQ0E7QUErUEE7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUExQ0E7QUFDQTtBQTJDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQVdBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFHQTtBQUNBOzs7O0FBSkE7QUFOQTtBQWlCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFJQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUFBQTtBQVVBOzs7QUFsR0E7QUFDQTtBQW9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7OztBQWNBO0FBQ0E7O0FBR0E7O0FBSEE7QUFPQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFZQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQW5CQTs7OztBQTBCQTs7QUFHQTs7O0FBR0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBbEJBO0FBQ0E7Ozs7OztBQThCQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7QUFIQTs7Ozs7O0FBWUE7Ozs7O0FBTUE7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7O0FBSUE7QUFFQTtBQUNBOztBQUhBOzs7O0FBbkJBO0FBaUNBOzs7OztBQU1BOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUhBOzs7O0FBZEE7QUE0QkE7Ozs7O0FBTUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUVBO0FBRkE7Ozs7QUFkQTtBQXdCQTs7OztBQUtBOzs7QUFHQTtBQUNBOzs7O0FBVEE7O0FBdE1BO0FBdU5BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXdEQTs7O0FBOWNBO0FBQ0E7QUFnZEE7Ozs7Ozs7Ozs7OztBQ3BmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFwQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBdklBO0FBQ0E7QUF3SUE7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUEvQ0E7QUFDQTtBQWdEQTs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEdBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFkQTtBQUNBO0FBZUE7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBektBO0FBQ0E7QUEwS0E7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFuR0E7QUFDQTtBQW9HQTs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBekJBO0FBQ0E7QUF5QkE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQWhMQTtBQUNBO0FBaUxBOzs7Ozs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFuQ0E7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUF6VUE7QUFDQTtBQTBVQTs7Ozs7Ozs7Ozs7O0FDcFdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFrRUE7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFuQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoWkE7QUFDQTtBQWlaQTs7Ozs7Ozs7Ozs7O0FDeGFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUF2QkE7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUNBO0FBd0VBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQWxDQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBeFBBO0FBQ0E7QUF5UEE7Ozs7Ozs7Ozs7OztBQ3RRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBck9BO0FBQ0E7QUFzT0E7Ozs7Ozs7Ozs7OztBQzlQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlOQTtBQUNBO0FBK05BOzs7Ozs7Ozs7Ozs7QUN6T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWxDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkxBO0FBQ0E7QUF1TEE7Ozs7Ozs7Ozs7OztBQ2hOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5IQTtBQUNBO0FBbUhBOzs7Ozs7Ozs7Ozs7QUN2SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUtBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBVEE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFFQTtBQUNBO0FBeUJBO0FBV0E7QUFTQTtBQTlDQTtBQWlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBM0NBO0FBOENBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
