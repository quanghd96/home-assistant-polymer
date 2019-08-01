(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["onboarding-core-config~panel-config-core"],
  {
    /***/ "./src/common/dom/setup-leaflet-map.ts":
      /*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
      /*! exports provided: setupLeafletMap */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setupLeafletMap",
          function() {
            return setupLeafletMap;
          }
        );
        // Sets up a Leaflet map on the provided DOM element
        const setupLeafletMap = async (mapElement, darkMode = false) => {
          if (!mapElement.parentNode) {
            throw new Error("Cannot setup Leaflet map on disconnected element");
          } // tslint:disable-next-line

          const Leaflet = await __webpack_require__
            .e(/*! import() | leaflet */ "vendors~leaflet")
            .then(
              __webpack_require__.t.bind(
                null,
                /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js",
                7
              )
            );
          Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
          const map = Leaflet.map(mapElement);
          const style = document.createElement("link");
          style.setAttribute("href", "/static/images/leaflet/leaflet.css");
          style.setAttribute("rel", "stylesheet");
          mapElement.parentNode.appendChild(style);
          map.setView([52.3731339, 4.8903147], 13);
          Leaflet.tileLayer(
            `https://{s}.basemaps.cartocdn.com/${
              darkMode ? "dark_all" : "light_all"
            }/{z}/{x}/{y}${Leaflet.Browser.retina ? "@2x.png" : ".png"}`,
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: "abcd",
              minZoom: 0,
              maxZoom: 20,
            }
          ).addTo(map);
          return [map, Leaflet];
        };

        /***/
      },

    /***/ "./src/components/map/ha-location-editor.ts":
      /*!**************************************************!*\
  !*** ./src/components/map/ha-location-editor.ts ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        let LocationEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-location-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            class LocationEditor extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: LocationEditor,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "location",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "fitZoom",

                  value() {
                    return 16;
                  },
                },
                {
                  kind: "field",
                  key: "_ignoreFitToMap",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "Leaflet",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_leafletMap",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_locationMarker",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "fitMap",
                  // tslint:disable-next-line
                  value: function fitMap() {
                    if (!this._leafletMap || !this.location) {
                      return;
                    }

                    this._leafletMap.setView(this.location, this.fitZoom);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div id="map"></div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(LocationEditor.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._initMap();
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(LocationEditor.prototype),
                      "updated",
                      this
                    ).call(this, changedProps); // Still loading.

                    if (!this.Leaflet) {
                      return;
                    }

                    this._updateMarker();

                    if (
                      !this._ignoreFitToMap ||
                      this._ignoreFitToMap !== this.location
                    ) {
                      this.fitMap();
                    }

                    this._ignoreFitToMap = undefined;
                  },
                },
                {
                  kind: "get",
                  key: "_mapEl",
                  value: function _mapEl() {
                    return this.shadowRoot.querySelector("div");
                  },
                },
                {
                  kind: "method",
                  key: "_initMap",
                  value: async function _initMap() {
                    [this._leafletMap, this.Leaflet] = await Object(
                      _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__[
                        "setupLeafletMap"
                      ]
                    )(this._mapEl);

                    this._leafletMap.addEventListener(
                      "click", // @ts-ignore
                      (ev) => this._updateLocation(ev.latlng)
                    );

                    this._updateMarker();

                    this.fitMap();

                    this._leafletMap.invalidateSize();
                  },
                },
                {
                  kind: "method",
                  key: "_updateLocation",
                  value: function _updateLocation(latlng) {
                    this.location = this._ignoreFitToMap = [
                      latlng.lat,
                      latlng.lng,
                    ];
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__[
                        "fireEvent"
                      ]
                    )(this, "change", undefined, {
                      bubbles: false,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_updateMarker",
                  value: function _updateMarker() {
                    if (!this.location) {
                      if (this._locationMarker) {
                        this._locationMarker.remove();

                        this._locationMarker = undefined;
                      }

                      return;
                    }

                    if (this._locationMarker) {
                      this._locationMarker.setLatLng(this.location);

                      return;
                    }

                    this._locationMarker = this.Leaflet.marker(this.location, {
                      draggable: true,
                    });

                    this._locationMarker.addEventListener(
                      "dragend", // @ts-ignore
                      (ev) => this._updateLocation(ev.target.getLatLng())
                    );

                    this._leafletMap.addLayer(this._locationMarker);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
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

    /***/ "./src/components/timezone-datalist.ts":
      /*!*********************************************!*\
  !*** ./src/components/timezone-datalist.ts ***!
  \*********************************************/
      /*! exports provided: createTimezoneListEl */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createTimezoneListEl",
          function() {
            return createTimezoneListEl;
          }
        );
        /* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! google-timezones-json */ "./node_modules/google-timezones-json/index.js"
        );
        /* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          google_timezones_json__WEBPACK_IMPORTED_MODULE_0__
        );

        const createTimezoneListEl = () => {
          const list = document.createElement("datalist");
          list.id = "timezones";
          Object.keys(
            google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a
          ).forEach((key) => {
            const option = document.createElement("option");
            option.value = key;
            option.innerHTML =
              google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a[key];
            list.appendChild(option);
          });
          return list;
        };

        /***/
      },

    /***/ "./src/data/core.ts":
      /*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
      /*! exports provided: saveCoreConfig, detectCoreConfig */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "saveCoreConfig",
          function() {
            return saveCoreConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "detectCoreConfig",
          function() {
            return detectCoreConfig;
          }
        );
        const saveCoreConfig = (hass, values) =>
          hass.callWS(
            Object.assign(
              {
                type: "config/core/update",
              },
              values
            )
          );
        const detectCoreConfig = (hass) =>
          hass.callWS({
            type: "config/core/detect",
          });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jb3JlLWNvbmZpZ35wYW5lbC1jb25maWctY29yZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGltZXpvbmUtZGF0YWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBMZWFmbGV0LnRpbGVMYXllcihcbiAgICBgaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tLyR7XG4gICAgICBkYXJrTW9kZSA/IFwiZGFya19hbGxcIiA6IFwibGlnaHRfYWxsXCJcbiAgICB9L3t6fS97eH0ve3l9JHtMZWFmbGV0LkJyb3dzZXIucmV0aW5hID8gXCJAMngucG5nXCIgOiBcIi5wbmdcIn1gLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL2NhcnRvLmNvbS9hdHRyaWJ1dGlvbnNcIj5DQVJUTzwvYT4nLFxuICAgICAgc3ViZG9tYWluczogXCJhYmNkXCIsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjAsXG4gICAgfVxuICApLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE1hcmtlciwgTWFwLCBMZWFmbGV0TW91c2VFdmVudCwgRHJhZ0VuZEV2ZW50LCBMYXRMbmcgfSBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHtcbiAgc2V0dXBMZWFmbGV0TWFwLFxuICBMZWFmbGV0TW9kdWxlVHlwZSxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXBcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1sb2NhdGlvbi1lZGl0b3JcIilcbmNsYXNzIExvY2F0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb2NhdGlvbj86IFtudW1iZXIsIG51bWJlcl07XG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG5cbiAgcHJpdmF0ZSBfaWdub3JlRml0VG9NYXA/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIExlYWZsZXQ/OiBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgcHJpdmF0ZSBfbGVhZmxldE1hcD86IE1hcDtcbiAgcHJpdmF0ZSBfbG9jYXRpb25NYXJrZXI/OiBNYXJrZXI7XG5cbiAgcHVibGljIGZpdE1hcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2xlYWZsZXRNYXAgfHwgIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGVhZmxldE1hcC5zZXRWaWV3KHRoaXMubG9jYXRpb24sIHRoaXMuZml0Wm9vbSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2luaXRNYXAoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBTdGlsbCBsb2FkaW5nLlxuICAgIGlmICghdGhpcy5MZWFmbGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgaWYgKCF0aGlzLl9pZ25vcmVGaXRUb01hcCB8fCB0aGlzLl9pZ25vcmVGaXRUb01hcCAhPT0gdGhpcy5sb2NhdGlvbikge1xuICAgICAgdGhpcy5maXRNYXAoKTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRml0VG9NYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWFwRWwoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaW5pdE1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBbdGhpcy5fbGVhZmxldE1hcCwgdGhpcy5MZWFmbGV0XSA9IGF3YWl0IHNldHVwTGVhZmxldE1hcCh0aGlzLl9tYXBFbCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKGV2OiBMZWFmbGV0TW91c2VFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYubGF0bG5nKVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgdGhpcy5maXRNYXAoKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmludmFsaWRhdGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVMb2NhdGlvbihsYXRsbmc6IExhdExuZykge1xuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLl9pZ25vcmVGaXRUb01hcCA9IFtsYXRsbmcubGF0LCBsYXRsbmcubG5nXTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIiwgdW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWFya2VyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5sb2NhdGlvbikge1xuICAgICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2VyKSB7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnNldExhdExuZyh0aGlzLmxvY2F0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXIgPSB0aGlzLkxlYWZsZXQhLm1hcmtlcih0aGlzLmxvY2F0aW9uLCB7XG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZHJhZ2VuZFwiLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKGV2OiBEcmFnRW5kRXZlbnQpID0+IHRoaXMuX3VwZGF0ZUxvY2F0aW9uKGV2LnRhcmdldC5nZXRMYXRMbmcoKSlcbiAgICApO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAhLmFkZExheWVyKHRoaXMuX2xvY2F0aW9uTWFya2VyKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICB9XG4gICAgICAjbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWxvY2F0aW9uLWVkaXRvclwiOiBMb2NhdGlvbkVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHRpbWV6b25lcyBmcm9tIFwiZ29vZ2xlLXRpbWV6b25lcy1qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaW1lem9uZUxpc3RFbCA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgbGlzdC5pZCA9IFwidGltZXpvbmVzXCI7XG4gIE9iamVjdC5rZXlzKHRpbWV6b25lcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBrZXk7XG4gICAgb3B0aW9uLmlubmVySFRNTCA9IHRpbWV6b25lc1trZXldO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NDb25maWcgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVXBkYXRlVmFsdWVzIHtcbiAgbG9jYXRpb25fbmFtZTogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG4gIHVuaXRfc3lzdGVtOiBcIm1ldHJpY1wiIHwgXCJpbXBlcmlhbFwiO1xuICB0aW1lX3pvbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVDb3JlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB2YWx1ZXM6IFBhcnRpYWw8Q29uZmlnVXBkYXRlVmFsdWVzPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxIYXNzQ29uZmlnPih7XG4gICAgdHlwZTogXCJjb25maWcvY29yZS91cGRhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0Q29yZUNvbmZpZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz4+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL2RldGVjdFwiLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVdBO0FBSUE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBOztBQUFBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFTQTs7O0FBbkdBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFEQTtBQUtBO0FBRUE7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
