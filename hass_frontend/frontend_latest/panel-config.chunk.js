(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config"],
  {
    /***/ "./src/common/config/is_component_loaded.ts":
      /*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return isComponentLoaded;
          }
        );
        /** Return if a component is loaded. */
        function isComponentLoaded(hass, component) {
          return hass && hass.config.components.indexOf(component) !== -1;
        }

        /***/
      },

    /***/ "./src/common/dom/media_query.ts":
      /*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
      /*! exports provided: listenMediaQuery */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "listenMediaQuery",
          function() {
            return listenMediaQuery;
          }
        );
        /**
         * Attach a media query. Listener is called right away and when it matches.
         * @param mediaQuery media query to match.
         * @param listener listener to call when media query changes between match/unmatch
         * @returns function to remove the listener.
         */
        const listenMediaQuery = (mediaQuery, matchesChanged) => {
          const mql = matchMedia(mediaQuery);

          const listener = (e) => matchesChanged(e.matches);

          mql.addListener(listener);
          matchesChanged(mql.matches);
          return () => mql.removeListener(listener);
        };

        /***/
      },

    /***/ "./src/data/cloud.ts":
      /*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
      /*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, updateCloudPref, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant, updateCloudAlexaEntityConfig */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCloudStatus",
          function() {
            return fetchCloudStatus;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createCloudhook",
          function() {
            return createCloudhook;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteCloudhook",
          function() {
            return deleteCloudhook;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "connectCloudRemote",
          function() {
            return connectCloudRemote;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "disconnectCloudRemote",
          function() {
            return disconnectCloudRemote;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCloudSubscriptionInfo",
          function() {
            return fetchCloudSubscriptionInfo;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCloudPref",
          function() {
            return updateCloudPref;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCloudGoogleEntityConfig",
          function() {
            return updateCloudGoogleEntityConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "cloudSyncGoogleAssistant",
          function() {
            return cloudSyncGoogleAssistant;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCloudAlexaEntityConfig",
          function() {
            return updateCloudAlexaEntityConfig;
          }
        );
        const fetchCloudStatus = (hass) =>
          hass.callWS({
            type: "cloud/status",
          });
        const createCloudhook = (hass, webhookId) =>
          hass.callWS({
            type: "cloud/cloudhook/create",
            webhook_id: webhookId,
          });
        const deleteCloudhook = (hass, webhookId) =>
          hass.callWS({
            type: "cloud/cloudhook/delete",
            webhook_id: webhookId,
          });
        const connectCloudRemote = (hass) =>
          hass.callWS({
            type: "cloud/remote/connect",
          });
        const disconnectCloudRemote = (hass) =>
          hass.callWS({
            type: "cloud/remote/disconnect",
          });
        const fetchCloudSubscriptionInfo = (hass) =>
          hass.callWS({
            type: "cloud/subscription",
          });
        const updateCloudPref = (hass, prefs) =>
          hass.callWS(
            Object.assign(
              {
                type: "cloud/update_prefs",
              },
              prefs
            )
          );
        const updateCloudGoogleEntityConfig = (hass, entityId, values) =>
          hass.callWS(
            Object.assign(
              {
                type: "cloud/google_assistant/entities/update",
                entity_id: entityId,
              },
              values
            )
          );
        const cloudSyncGoogleAssistant = (hass) =>
          hass.callApi("POST", "cloud/google_actions/sync");
        const updateCloudAlexaEntityConfig = (hass, entityId, values) =>
          hass.callWS(
            Object.assign(
              {
                type: "cloud/alexa/entities/update",
                entity_id: entityId,
              },
              values
            )
          );

        /***/
      },

    /***/ "./src/panels/config/ha-panel-config.ts":
      /*!**********************************************!*\
  !*** ./src/panels/config/ha-panel-config.ts ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts"
        );
        /* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts"
        );
        /* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../data/frontend */ "./src/data/frontend.ts"
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

        let HaPanelConfig = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-panel-config"
            ),
          ],
          function(_initialize, _HassRouterPage) {
            class HaPanelConfig extends _HassRouterPage {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaPanelConfig,
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
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "routerOptions",

                  value() {
                    return {
                      defaultPage: "dashboard",
                      cacheAll: true,
                      preloadAll: true,
                      routes: {
                        area_registry: {
                          tag: "ha-config-area-registry",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-area-registry */ [
                                __webpack_require__.e(
                                  "vendors~panel-config-area-registry"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(
                                  "panel-config-area-registry"
                                ),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./area_registry/ha-config-area-registry */ "./src/panels/config/area_registry/ha-config-area-registry.ts"
                              )
                            ),
                        },
                        automation: {
                          tag: "ha-config-automation",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-automation */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(3),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(4),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(7),
                                __webpack_require__.e(
                                  "vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"
                                ),
                                __webpack_require__.e(9),
                                __webpack_require__.e(
                                  "vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(5),
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states"
                                ),
                                __webpack_require__.e(
                                  "panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "panel-config-automation"
                                ),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./automation/ha-config-automation */ "./src/panels/config/automation/ha-config-automation.js"
                              )
                            ),
                        },
                        cloud: {
                          tag: "ha-config-cloud",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-cloud */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~more-info-dialog~panel-config-automation~panel-config-cloud~panel-kiosk~panel-lovelace~panel~1e6cf785"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-cloud"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-cloud"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./cloud/ha-config-cloud */ "./src/panels/config/cloud/ha-config-cloud.ts"
                              )
                            ),
                        },
                        core: {
                          tag: "ha-config-core",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-core */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "vendors~onboarding-core-config~panel-config-core"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(
                                  "onboarding-core-config~panel-config-core"
                                ),
                                __webpack_require__.e("panel-config-core"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./core/ha-config-core */ "./src/panels/config/core/ha-config-core.js"
                              )
                            ),
                        },
                        customize: {
                          tag: "ha-config-customize",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-customize */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
                                ),
                                __webpack_require__.e(8),
                                __webpack_require__.e(
                                  "vendors~panel-config-customize~panel-config-zwave"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-customize"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./customize/ha-config-customize */ "./src/panels/config/customize/ha-config-customize.js"
                              )
                            ),
                        },
                        dashboard: {
                          tag: "ha-config-dashboard",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-dashboard */ [
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-dashboard"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-dashboard"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./dashboard/ha-config-dashboard */ "./src/panels/config/dashboard/ha-config-dashboard.js"
                              )
                            ),
                        },
                        entity_registry: {
                          tag: "ha-config-entity-registry",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-entity-registry */ [
                                __webpack_require__.e(1),
                                __webpack_require__.e(
                                  "panel-config-entity-registry"
                                ),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./entity_registry/ha-config-entity-registry */ "./src/panels/config/entity_registry/ha-config-entity-registry.ts"
                              )
                            ),
                        },
                        integrations: {
                          tag: "ha-config-integrations",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-integrations */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"
                                ),
                                __webpack_require__.e(9),
                                __webpack_require__.e(
                                  "vendors~panel-config-integrations"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "panel-config-integrations"
                                ),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./integrations/ha-config-integrations */ "./src/panels/config/integrations/ha-config-integrations.js"
                              )
                            ),
                        },
                        person: {
                          tag: "ha-config-person",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-person */ [
                                __webpack_require__.e(
                                  "vendors~panel-config-person~panel-config-users"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-person"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./person/ha-config-person */ "./src/panels/config/person/ha-config-person.ts"
                              )
                            ),
                        },
                        script: {
                          tag: "ha-config-script",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-script */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(3),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(4),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(7),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"
                                ),
                                __webpack_require__.e(
                                  "vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e(5),
                                __webpack_require__.e(6),
                                __webpack_require__.e(
                                  "panel-config-automation~panel-config-script"
                                ),
                                __webpack_require__.e("panel-config-script"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./script/ha-config-script */ "./src/panels/config/script/ha-config-script.js"
                              )
                            ),
                        },
                        users: {
                          tag: "ha-config-users",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-users */ [
                                __webpack_require__.e(
                                  "vendors~panel-config-automation~panel-config-integrations~panel-config-script~panel-config-users~pan~347d38cc"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-config-person~panel-config-users"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-users"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./users/ha-config-users */ "./src/panels/config/users/ha-config-users.js"
                              )
                            ),
                        },
                        zha: {
                          tag: "zha-config-panel",
                          load: () =>
                            __webpack_require__
                              .e(
                                /*! import() | panel-config-zha */ "panel-config-zha"
                              )
                              .then(
                                __webpack_require__.bind(
                                  null,
                                  /*! ./zha/zha-config-panel */ "./src/panels/config/zha/zha-config-panel.ts"
                                )
                              ),
                        },
                        zwave: {
                          tag: "ha-config-zwave",
                          load: () =>
                            Promise.all(
                              /*! import() | panel-config-zwave */ [
                                __webpack_require__.e(0),
                                __webpack_require__.e(
                                  "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                                ),
                                __webpack_require__.e(2),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~2ef54234"
                                ),
                                __webpack_require__.e(
                                  "vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~31c1c79b"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"
                                ),
                                __webpack_require__.e(
                                  "vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"
                                ),
                                __webpack_require__.e(8),
                                __webpack_require__.e(
                                  "vendors~panel-config-customize~panel-config-zwave"
                                ),
                                __webpack_require__.e(1),
                                __webpack_require__.e("panel-config-zwave"),
                              ]
                            ).then(
                              __webpack_require__.bind(
                                null,
                                /*! ./zwave/ha-config-zwave */ "./src/panels/config/zwave/ha-config-zwave.js"
                              )
                            ),
                        },
                      },
                    };
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_wideSidebar",

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
                  key: "_wide",

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
                  key: "_coreUserData",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_cloudStatus",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_listeners",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaPanelConfig.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._listeners.push(
                      Object(
                        _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__[
                          "listenMediaQuery"
                        ]
                      )("(min-width: 1040px)", (matches) => {
                        this._wide = matches;
                      })
                    );

                    this._listeners.push(
                      Object(
                        _common_dom_media_query__WEBPACK_IMPORTED_MODULE_4__[
                          "listenMediaQuery"
                        ]
                      )("(min-width: 1296px)", (matches) => {
                        this._wideSidebar = matches;
                      })
                    );

                    this._listeners.push(
                      Object(
                        _data_frontend__WEBPACK_IMPORTED_MODULE_6__[
                          "getOptimisticFrontendUserDataCollection"
                        ]
                      )(this.hass.connection, "core").subscribe(
                        (coreUserData) => {
                          this._coreUserData = coreUserData || {};
                        }
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaPanelConfig.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    while (this._listeners.length) {
                      this._listeners.pop()();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaPanelConfig.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    if (
                      Object(
                        _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_2__[
                          "default"
                        ]
                      )(this.hass, "cloud")
                    ) {
                      this._updateCloudStatus();
                    }

                    this.addEventListener("ha-refresh-cloud-status", () =>
                      this._updateCloudStatus()
                    );
                  },
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function updatePageEl(el) {
                    const showAdvanced = !!(
                      this._coreUserData && this._coreUserData.showAdvanced
                    );
                    const isWide = this.hass.dockedSidebar
                      ? this._wideSidebar
                      : this._wide;

                    if ("setProperties" in el) {
                      // As long as we have Polymer panels
                      el.setProperties({
                        route: this.routeTail,
                        hass: this.hass,
                        showAdvanced,
                        isWide,
                        narrow: this.narrow,
                        cloudStatus: this._cloudStatus,
                      });
                    } else {
                      el.route = this.routeTail;
                      el.hass = this.hass;
                      el.showAdvanced = showAdvanced;
                      el.isWide = isWide;
                      el.narrow = this.narrow;
                      el.cloudStatus = this._cloudStatus;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_updateCloudStatus",
                  value: async function _updateCloudStatus() {
                    this._cloudStatus = await Object(
                      _data_cloud__WEBPACK_IMPORTED_MODULE_3__[
                        "fetchCloudStatus"
                      ]
                    )(this.hass);

                    if (this._cloudStatus.cloud === "connecting") {
                      setTimeout(() => this._updateCloudStatus(), 5000);
                    }
                  },
                },
              ],
            };
          },
          _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_5__[
            "HassRouterPage"
          ]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9tZWRpYV9xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1wYW5lbC1jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsIi8qKlxuICogQXR0YWNoIGEgbWVkaWEgcXVlcnkuIExpc3RlbmVyIGlzIGNhbGxlZCByaWdodCBhd2F5IGFuZCB3aGVuIGl0IG1hdGNoZXMuXG4gKiBAcGFyYW0gbWVkaWFRdWVyeSBtZWRpYSBxdWVyeSB0byBtYXRjaC5cbiAqIEBwYXJhbSBsaXN0ZW5lciBsaXN0ZW5lciB0byBjYWxsIHdoZW4gbWVkaWEgcXVlcnkgY2hhbmdlcyBiZXR3ZWVuIG1hdGNoL3VubWF0Y2hcbiAqIEByZXR1cm5zIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW5NZWRpYVF1ZXJ5ID0gKFxuICBtZWRpYVF1ZXJ5OiBzdHJpbmcsXG4gIG1hdGNoZXNDaGFuZ2VkOiAobWF0Y2hlczogYm9vbGVhbikgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IG1xbCA9IG1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGUpID0+IG1hdGNoZXNDaGFuZ2VkKGUubWF0Y2hlcyk7XG4gIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIG1hdGNoZXNDaGFuZ2VkKG1xbC5tYXRjaGVzKTtcbiAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuXG5pbnRlcmZhY2UgQ2xvdWRTdGF0dXNCYXNlIHtcbiAgbG9nZ2VkX2luOiBib29sZWFuO1xuICBjbG91ZDogXCJkaXNjb25uZWN0ZWRcIiB8IFwiY29ubmVjdGluZ1wiIHwgXCJjb25uZWN0ZWRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbiAgb3ZlcnJpZGVfbmFtZT86IHN0cmluZztcbiAgYWxpYXNlcz86IHN0cmluZ1tdO1xuICBkaXNhYmxlXzJmYT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uIHtcbiAgY29tbW9uX25hbWU6IHN0cmluZztcbiAgZXhwaXJlX2RhdGU6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZFByZWZlcmVuY2VzIHtcbiAgZ29vZ2xlX2VuYWJsZWQ6IGJvb2xlYW47XG4gIGFsZXhhX2VuYWJsZWQ6IGJvb2xlYW47XG4gIHJlbW90ZV9lbmFibGVkOiBib29sZWFuO1xuICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNsb3VkaG9va3M6IHsgW3dlYmhvb2tJZDogc3RyaW5nXTogQ2xvdWRXZWJob29rIH07XG4gIGdvb2dsZV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogR29vZ2xlRW50aXR5Q29uZmlnO1xuICB9O1xuICBhbGV4YV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogQWxleGFFbnRpdHlDb25maWc7XG4gIH07XG4gIGFsZXhhX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXNMb2dnZWRJbiA9IENsb3VkU3RhdHVzQmFzZSAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgZ29vZ2xlX2VudGl0aWVzOiBFbnRpdHlGaWx0ZXI7XG4gIGdvb2dsZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgYWxleGFfZW50aXRpZXM6IEVudGl0eUZpbHRlcjtcbiAgcHJlZnM6IENsb3VkUHJlZmVyZW5jZXM7XG4gIHJlbW90ZV9kb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVtb3RlX2Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgcmVtb3RlX2NlcnRpZmljYXRlOiB1bmRlZmluZWQgfCBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXMgPSBDbG91ZFN0YXR1c0Jhc2UgfCBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkluZm8ge1xuICBodW1hbl9kZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkV2ViaG9vayB7XG4gIHdlYmhvb2tfaWQ6IHN0cmluZztcbiAgY2xvdWRob29rX2lkOiBzdHJpbmc7XG4gIGNsb3VkaG9va191cmw6IHN0cmluZztcbiAgbWFuYWdlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkU3RhdHVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkU3RhdHVzPih7IHR5cGU6IFwiY2xvdWQvc3RhdHVzXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkV2ViaG9vaz4oe1xuICAgIHR5cGU6IFwiY2xvdWQvY2xvdWRob29rL2NyZWF0ZVwiLFxuICAgIHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL2Nsb3VkaG9vay9kZWxldGVcIixcbiAgICB3ZWJob29rX2lkOiB3ZWJob29rSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9jb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9kaXNjb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8U3Vic2NyaXB0aW9uSW5mbz4oeyB0eXBlOiBcImNsb3VkL3N1YnNjcmlwdGlvblwiIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xvdWRQcmVmID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwcmVmczoge1xuICAgIGdvb2dsZV9lbmFibGVkPzogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbmFibGVkXCJdO1xuICAgIGFsZXhhX2VuYWJsZWQ/OiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfZW5hYmxlZFwiXTtcbiAgICBhbGV4YV9yZXBvcnRfc3RhdGU/OiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfcmVwb3J0X3N0YXRlXCJdO1xuICAgIGdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW4/OiBDbG91ZFByZWZlcmVuY2VzW1wiZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpblwiXTtcbiAgfVxuKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjbG91ZC91cGRhdGVfcHJlZnNcIixcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFsdWVzOiBHb29nbGVFbnRpdHlDb25maWdcbikgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5Q29uZmlnPih7XG4gICAgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzL3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGkoXCJQT1NUXCIsIFwiY2xvdWQvZ29vZ2xlX2FjdGlvbnMvc3luY1wiKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHZhbHVlczogQWxleGFFbnRpdHlDb25maWdcbikgPT5cbiAgaGFzcy5jYWxsV1M8QWxleGFFbnRpdHlDb25maWc+KHtcbiAgICB0eXBlOiBcImNsb3VkL2FsZXhhL2VudGl0aWVzL3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcbiIsImltcG9ydCB7IHByb3BlcnR5LCBQcm9wZXJ0eVZhbHVlcywgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgaXNDb21wb25lbnRMb2FkZWQgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ2xvdWRTdGF0dXMsIGZldGNoQ2xvdWRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgbGlzdGVuTWVkaWFRdWVyeSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL21lZGlhX3F1ZXJ5XCI7XG5pbXBvcnQgeyBIYXNzUm91dGVyUGFnZSwgUm91dGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9sYXlvdXRzL2hhc3Mtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7XG4gIENvcmVGcm9udGVuZFVzZXJEYXRhLFxuICBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24sXG59IGZyb20gXCIuLi8uLi9kYXRhL2Zyb250ZW5kXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtcGFuZWwtY29uZmlnXCIpXG5jbGFzcyBIYVBhbmVsQ29uZmlnIGV4dGVuZHMgSGFzc1JvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIGNhY2hlQWxsOiB0cnVlLFxuICAgIHByZWxvYWRBbGw6IHRydWUsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcmVhX3JlZ2lzdHJ5OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctYXJlYS1yZWdpc3RyeVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1hcmVhLXJlZ2lzdHJ5XCIgKi8gXCIuL2FyZWFfcmVnaXN0cnkvaGEtY29uZmlnLWFyZWEtcmVnaXN0cnlcIiksXG4gICAgICB9LFxuICAgICAgYXV0b21hdGlvbjoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWF1dG9tYXRpb25cIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctYXV0b21hdGlvblwiICovIFwiLi9hdXRvbWF0aW9uL2hhLWNvbmZpZy1hdXRvbWF0aW9uXCIpLFxuICAgICAgfSxcbiAgICAgIGNsb3VkOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctY2xvdWRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctY2xvdWRcIiAqLyBcIi4vY2xvdWQvaGEtY29uZmlnLWNsb3VkXCIpLFxuICAgICAgfSxcbiAgICAgIGNvcmU6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1jb3JlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNvcmVcIiAqLyBcIi4vY29yZS9oYS1jb25maWctY29yZVwiKSxcbiAgICAgIH0sXG4gICAgICBjdXN0b21pemU6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1jdXN0b21pemVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctY3VzdG9taXplXCIgKi8gXCIuL2N1c3RvbWl6ZS9oYS1jb25maWctY3VzdG9taXplXCIpLFxuICAgICAgfSxcbiAgICAgIGRhc2hib2FyZDoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWRhc2hib2FyZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1kYXNoYm9hcmRcIiAqLyBcIi4vZGFzaGJvYXJkL2hhLWNvbmZpZy1kYXNoYm9hcmRcIiksXG4gICAgICB9LFxuICAgICAgZW50aXR5X3JlZ2lzdHJ5OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWVudGl0eS1yZWdpc3RyeVwiICovIFwiLi9lbnRpdHlfcmVnaXN0cnkvaGEtY29uZmlnLWVudGl0eS1yZWdpc3RyeVwiKSxcbiAgICAgIH0sXG4gICAgICBpbnRlZ3JhdGlvbnM6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctaW50ZWdyYXRpb25zXCIgKi8gXCIuL2ludGVncmF0aW9ucy9oYS1jb25maWctaW50ZWdyYXRpb25zXCIpLFxuICAgICAgfSxcbiAgICAgIHBlcnNvbjoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLXBlcnNvblwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1wZXJzb25cIiAqLyBcIi4vcGVyc29uL2hhLWNvbmZpZy1wZXJzb25cIiksXG4gICAgICB9LFxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2NyaXB0XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXNjcmlwdFwiICovIFwiLi9zY3JpcHQvaGEtY29uZmlnLXNjcmlwdFwiKSxcbiAgICAgIH0sXG4gICAgICB1c2Vyczoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLXVzZXJzXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXVzZXJzXCIgKi8gXCIuL3VzZXJzL2hhLWNvbmZpZy11c2Vyc1wiKSxcbiAgICAgIH0sXG4gICAgICB6aGE6IHtcbiAgICAgICAgdGFnOiBcInpoYS1jb25maWctcGFuZWxcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctemhhXCIgKi8gXCIuL3poYS96aGEtY29uZmlnLXBhbmVsXCIpLFxuICAgICAgfSxcbiAgICAgIHp3YXZlOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctendhdmVcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctendhdmVcIiAqLyBcIi4vendhdmUvaGEtY29uZmlnLXp3YXZlXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dpZGVTaWRlYmFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29yZVVzZXJEYXRhPzogQ29yZUZyb250ZW5kVXNlckRhdGE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Nsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXM7XG5cbiAgcHJpdmF0ZSBfbGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKFxuICAgICAgbGlzdGVuTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwNDBweClcIiwgKG1hdGNoZXMpID0+IHtcbiAgICAgICAgdGhpcy5fd2lkZSA9IG1hdGNoZXM7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICBsaXN0ZW5NZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTI5NnB4KVwiLCAobWF0Y2hlcykgPT4ge1xuICAgICAgICB0aGlzLl93aWRlU2lkZWJhciA9IG1hdGNoZXM7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24oXG4gICAgICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uLFxuICAgICAgICBcImNvcmVcIlxuICAgICAgKS5zdWJzY3JpYmUoKGNvcmVVc2VyRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLl9jb3JlVXNlckRhdGEgPSBjb3JlVXNlckRhdGEgfHwge307XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB3aGlsZSAodGhpcy5fbGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnBvcCgpISgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwiY2xvdWRcIikpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsb3VkU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIsICgpID0+XG4gICAgICB0aGlzLl91cGRhdGVDbG91ZFN0YXR1cygpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpIHtcbiAgICBjb25zdCBzaG93QWR2YW5jZWQgPSAhIShcbiAgICAgIHRoaXMuX2NvcmVVc2VyRGF0YSAmJiB0aGlzLl9jb3JlVXNlckRhdGEuc2hvd0FkdmFuY2VkXG4gICAgKTtcbiAgICBjb25zdCBpc1dpZGUgPSB0aGlzLmhhc3MuZG9ja2VkU2lkZWJhciA/IHRoaXMuX3dpZGVTaWRlYmFyIDogdGhpcy5fd2lkZTtcblxuICAgIGlmIChcInNldFByb3BlcnRpZXNcIiBpbiBlbCkge1xuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBoYXZlIFBvbHltZXIgcGFuZWxzXG4gICAgICAoZWwgYXMgUG9seW1lckVsZW1lbnQpLnNldFByb3BlcnRpZXMoe1xuICAgICAgICByb3V0ZTogdGhpcy5yb3V0ZVRhaWwsXG4gICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgc2hvd0FkdmFuY2VkLFxuICAgICAgICBpc1dpZGUsXG4gICAgICAgIG5hcnJvdzogdGhpcy5uYXJyb3csXG4gICAgICAgIGNsb3VkU3RhdHVzOiB0aGlzLl9jbG91ZFN0YXR1cyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yb3V0ZSA9IHRoaXMucm91dGVUYWlsO1xuICAgICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIGVsLnNob3dBZHZhbmNlZCA9IHNob3dBZHZhbmNlZDtcbiAgICAgIGVsLmlzV2lkZSA9IGlzV2lkZTtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgICAgZWwuY2xvdWRTdGF0dXMgPSB0aGlzLl9jbG91ZFN0YXR1cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDbG91ZFN0YXR1cygpIHtcbiAgICB0aGlzLl9jbG91ZFN0YXR1cyA9IGF3YWl0IGZldGNoQ2xvdWRTdGF0dXModGhpcy5oYXNzKTtcblxuICAgIGlmICh0aGlzLl9jbG91ZFN0YXR1cy5jbG91ZCA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fdXBkYXRlQ2xvdWRTdGF0dXMoKSwgNTAwMCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYW5lbC1jb25maWdcIjogSGFQYW5lbENvbmZpZztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7Ozs7OztBQU1BO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQURBO0FBSUE7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFVQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUdBO0FBTUE7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1YQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsKzNEQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsdWZBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSx5MEJBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSxnbUNBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSwrZEFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBLGtVQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsNG5DQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EscVZBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSwwbERBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQSx1ZEFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBLHdOQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0Esd2tDQUNBO0FBSEE7QUE3REE7QUFKQTs7Ozs7QUF5RUE7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBM0pBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
