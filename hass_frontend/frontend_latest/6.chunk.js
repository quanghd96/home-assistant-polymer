(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [6],
  {
    /***/ "./src/common/entity/binary_sensor_icon.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return binarySensorIcon;
          }
        );
        /** Return an icon representing a binary sensor state. */
        function binarySensorIcon(state) {
          const activated = state.state && state.state === "off";

          switch (state.attributes.device_class) {
            case "battery":
              return activated ? "hass:battery" : "hass:battery-outline";

            case "cold":
              return activated ? "hass:thermometer" : "hass:snowflake";

            case "connectivity":
              return activated
                ? "hass:server-network-off"
                : "hass:server-network";

            case "door":
              return activated ? "hass:door-closed" : "hass:door-open";

            case "garage_door":
              return activated ? "hass:garage" : "hass:garage-open";

            case "gas":
            case "power":
            case "problem":
            case "safety":
            case "smoke":
              return activated ? "hass:shield-check" : "hass:alert";

            case "heat":
              return activated ? "hass:thermometer" : "hass:fire";

            case "light":
              return activated ? "hass:brightness-5" : "hass:brightness-7";

            case "lock":
              return activated ? "hass:lock" : "hass:lock-open";

            case "moisture":
              return activated ? "hass:water-off" : "hass:water";

            case "motion":
              return activated ? "hass:walk" : "hass:run";

            case "occupancy":
              return activated ? "hass:home-outline" : "hass:home";

            case "opening":
              return activated ? "hass:square" : "hass:square-outline";

            case "plug":
              return activated ? "hass:power-plug-off" : "hass:power-plug";

            case "presence":
              return activated ? "hass:home-outline" : "hass:home";

            case "sound":
              return activated ? "hass:music-note-off" : "hass:music-note";

            case "vibration":
              return activated ? "hass:crop-portrait" : "hass:vibrate";

            case "window":
              return activated ? "hass:window-closed" : "hass:window-open";

            default:
              return activated
                ? "hass:radiobox-blank"
                : "hass:checkbox-marked-circle";
          }
        }

        /***/
      },

    /***/ "./src/common/entity/compute_state_domain.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeStateDomain;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );

        function computeStateDomain(stateObj) {
          return Object(
            _compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj.entity_id);
        }

        /***/
      },

    /***/ "./src/common/entity/cover_icon.ts":
      /*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return coverIcon;
          }
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing a cover state. */

        function coverIcon(state) {
          const open = state.state !== "closed";

          switch (state.attributes.device_class) {
            case "garage":
              return open ? "hass:garage-open" : "hass:garage";

            default:
              return Object(
                _domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"]
              )("cover", state.state);
          }
        }

        /***/
      },

    /***/ "./src/common/entity/domain_icon.ts":
      /*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return domainIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /**
         * Return the icon to be used for a domain.
         *
         * Optionally pass in a state to influence the domain icon.
         */

        const fixedIcons = {
          alert: "hass:alert",
          alexa: "hass:amazon-alexa",
          automation: "hass:playlist-play",
          calendar: "hass:calendar",
          camera: "hass:video",
          climate: "hass:thermostat",
          configurator: "hass:settings",
          conversation: "hass:text-to-speech",
          device_tracker: "hass:account",
          fan: "hass:fan",
          google_assistant: "hass:google-assistant",
          group: "hass:google-circles-communities",
          history_graph: "hass:chart-line",
          homeassistant: "hass:home-assistant",
          homekit: "hass:home-automation",
          image_processing: "hass:image-filter-frames",
          input_boolean: "hass:drawing",
          input_datetime: "hass:calendar-clock",
          input_number: "hass:ray-vertex",
          input_select: "hass:format-list-bulleted",
          input_text: "hass:textbox",
          light: "hass:lightbulb",
          mailbox: "hass:mailbox",
          notify: "hass:comment-alert",
          person: "hass:account",
          plant: "hass:flower",
          proximity: "hass:apple-safari",
          remote: "hass:remote",
          scene: "hass:google-pages",
          script: "hass:file-document",
          sensor: "hass:eye",
          simple_alarm: "hass:bell",
          sun: "hass:white-balance-sunny",
          switch: "hass:flash",
          timer: "hass:timer",
          updater: "hass:cloud-upload",
          vacuum: "hass:robot-vacuum",
          water_heater: "hass:thermometer",
          weather: "hass:weather-cloudy",
          weblink: "hass:open-in-new",
        };
        function domainIcon(domain, state) {
          if (domain in fixedIcons) {
            return fixedIcons[domain];
          }

          switch (domain) {
            case "alarm_control_panel":
              switch (state) {
                case "armed_home":
                  return "hass:bell-plus";

                case "armed_night":
                  return "hass:bell-sleep";

                case "disarmed":
                  return "hass:bell-outline";

                case "triggered":
                  return "hass:bell-ring";

                default:
                  return "hass:bell";
              }

            case "binary_sensor":
              return state && state === "off"
                ? "hass:radiobox-blank"
                : "hass:checkbox-marked-circle";

            case "cover":
              return state === "closed"
                ? "hass:window-closed"
                : "hass:window-open";

            case "lock":
              return state && state === "unlocked"
                ? "hass:lock-open"
                : "hass:lock";

            case "media_player":
              return state && state !== "off" && state !== "idle"
                ? "hass:cast-connected"
                : "hass:cast";

            case "zwave":
              switch (state) {
                case "dead":
                  return "hass:emoticon-dead";

                case "sleeping":
                  return "hass:sleep";

                case "initializing":
                  return "hass:timer-sand";

                default:
                  return "hass:z-wave";
              }

            default:
              // tslint:disable-next-line
              console.warn(
                "Unable to find icon for domain " + domain + " (" + state + ")"
              );
              return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
          }
        }

        /***/
      },

    /***/ "./src/common/entity/input_dateteime_icon.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return inputDateTimeIcon;
          }
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing an input datetime state. */

        function inputDateTimeIcon(state) {
          if (!state.attributes.has_date) {
            return "hass:clock";
          }

          if (!state.attributes.has_time) {
            return "hass:calendar";
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "input_datetime"
          );
        }

        /***/
      },

    /***/ "./src/common/entity/sensor_icon.ts":
      /*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return sensorIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /** Return an icon representing a sensor state. */

        const fixedDeviceClassIcons = {
          humidity: "hass:water-percent",
          illuminance: "hass:brightness-5",
          temperature: "hass:thermometer",
          pressure: "hass:gauge",
          power: "hass:flash",
          signal_strength: "hass:wifi",
        };
        function sensorIcon(state) {
          const dclass = state.attributes.device_class;

          if (dclass && dclass in fixedDeviceClassIcons) {
            return fixedDeviceClassIcons[dclass];
          }

          if (dclass === "battery") {
            const battery = Number(state.state);

            if (isNaN(battery)) {
              return "hass:battery-unknown";
            }

            const batteryRound = Math.round(battery / 10) * 10;

            if (batteryRound >= 100) {
              return "hass:battery";
            }

            if (batteryRound <= 0) {
              return "hass:battery-alert";
            } // Will return one of the following icons: (listed so extractor picks up)
            // hass:battery-10
            // hass:battery-20
            // hass:battery-30
            // hass:battery-40
            // hass:battery-50
            // hass:battery-60
            // hass:battery-70
            // hass:battery-80
            // hass:battery-90
            // We obscure 'hass' in iconname so this name does not get picked up

            return `${"hass"}:battery-${batteryRound}`;
          }

          const unit = state.attributes.unit_of_measurement;

          if (
            unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] ||
            unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]
          ) {
            return "hass:thermometer";
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["default"])(
            "sensor"
          );
        }

        /***/
      },

    /***/ "./src/common/entity/state_icon.ts":
      /*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return stateIcon;
          }
        );
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../const */ "./src/common/const.ts"
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./domain_icon */ "./src/common/entity/domain_icon.ts"
        );
        /* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts"
        );
        /* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./cover_icon */ "./src/common/entity/cover_icon.ts"
        );
        /* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts"
        );
        /* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts"
        );
        /** Return an icon representing a state. */

        const domainIcons = {
          binary_sensor:
            _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
          cover: _cover_icon__WEBPACK_IMPORTED_MODULE_4__["default"],
          sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_5__["default"],
          input_datetime:
            _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__["default"],
        };
        function stateIcon(state) {
          if (!state) {
            return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
          }

          if (state.attributes.icon) {
            return state.attributes.icon;
          }

          const domain = Object(
            _compute_domain__WEBPACK_IMPORTED_MODULE_1__["default"]
          )(state.entity_id);

          if (domain in domainIcons) {
            return domainIcons[domain](state);
          }

          return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(
            domain,
            state.state
          );
        }

        /***/
      },

    /***/ "./src/components/entity/state-badge.ts":
      /*!**********************************************!*\
  !*** ./src/components/entity/state-badge.ts ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts"
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

        let StateBadge = _decorate(
          null,
          function(_initialize, _LitElement) {
            class StateBadge extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: StateBadge,
              d: [
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
                  key: "overrideIcon",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])(
                      "ha-icon"
                    ),
                  ],
                  key: "_icon",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const stateObj = this.stateObj;

                    if (!stateObj) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-icon
        id="icon"
        data-domain=${Object(
          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(stateObj)}
        data-state=${stateObj.state}
        .icon=${this.overrideIcon ||
          Object(
            _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["default"]
          )(stateObj)}
      ></ha-icon>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    if (!changedProps.has("stateObj") || !this.stateObj) {
                      return;
                    }

                    const stateObj = this.stateObj;
                    const iconStyle = {
                      color: "",
                      filter: "",
                    };
                    const hostStyle = {
                      backgroundImage: "",
                    };

                    if (stateObj) {
                      // hide icon if we have entity picture
                      if (
                        stateObj.attributes.entity_picture &&
                        !this.overrideIcon
                      ) {
                        hostStyle.backgroundImage =
                          "url(" + stateObj.attributes.entity_picture + ")";
                        iconStyle.display = "none";
                      } else {
                        if (stateObj.attributes.hs_color) {
                          const hue = stateObj.attributes.hs_color[0];
                          const sat = stateObj.attributes.hs_color[1];

                          if (sat > 10) {
                            iconStyle.color = `hsl(${hue}, 100%, ${100 -
                              sat / 2}%)`;
                          }
                        }

                        if (stateObj.attributes.brightness) {
                          const brightness = stateObj.attributes.brightness;

                          if (typeof brightness !== "number") {
                            const errorMessage = `Type error: state-badge expected number, but type of ${
                              stateObj.entity_id
                            }.attributes.brightness is ${typeof brightness} (${brightness})`; // tslint:disable-next-line

                            console.warn(errorMessage);
                          } // lowest brighntess will be around 50% (that's pretty dark)

                          iconStyle.filter = `brightness(${(brightness + 245) /
                            5}%)`;
                        }
                      }
                    }

                    Object.assign(this._icon.style, iconStyle);
                    Object.assign(this.style, hostStyle);
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
      }

      ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Color the icon if light or sun is on */
      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      /* Color the icon if unavailable */
      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("state-badge", StateBadge);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2JpbmFyeV9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb3Zlcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2lucHV0X2RhdGV0ZWltZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBiaW5hcnkgc2Vuc29yIHN0YXRlLiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5hcnlTZW5zb3JJY29uKHN0YXRlOiBIYXNzRW50aXR5KSB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6YmF0dGVyeVwiIDogXCJoYXNzOmJhdHRlcnktb3V0bGluZVwiO1xuICAgIGNhc2UgXCJjb2xkXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzZXJ2ZXItbmV0d29yay1vZmZcIiA6IFwiaGFzczpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmRvb3ItY2xvc2VkXCIgOiBcImhhc3M6ZG9vci1vcGVuXCI7XG4gICAgY2FzZSBcImdhcmFnZV9kb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmdhcmFnZVwiIDogXCJoYXNzOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpzaGllbGQtY2hlY2tcIiA6IFwiaGFzczphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOnRoZXJtb21ldGVyXCIgOiBcImhhc3M6ZmlyZVwiO1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpicmlnaHRuZXNzLTVcIiA6IFwiaGFzczpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpsb2NrXCIgOiBcImhhc3M6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOndhdGVyLW9mZlwiIDogXCJoYXNzOndhdGVyXCI7XG4gICAgY2FzZSBcIm1vdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3YWxrXCIgOiBcImhhc3M6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpob21lLW91dGxpbmVcIiA6IFwiaGFzczpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6c3F1YXJlXCIgOiBcImhhc3M6c3F1YXJlLW91dGxpbmVcIjtcbiAgICBjYXNlIFwicGx1Z1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpwb3dlci1wbHVnLW9mZlwiIDogXCJoYXNzOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcImhhc3M6aG9tZS1vdXRsaW5lXCIgOiBcImhhc3M6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczptdXNpYy1ub3RlLW9mZlwiIDogXCJoYXNzOm11c2ljLW5vdGVcIjtcbiAgICBjYXNlIFwidmlicmF0aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJoYXNzOmNyb3AtcG9ydHJhaXRcIiA6IFwiaGFzczp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczp3aW5kb3ctY2xvc2VkXCIgOiBcImhhc3M6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwiaGFzczpyYWRpb2JveC1ibGFua1wiIDogXCJoYXNzOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGNvdmVyIHN0YXRlLiAqL1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdmVySWNvbihzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJnYXJhZ2VcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJoYXNzOmdhcmFnZS1vcGVuXCIgOiBcImhhc3M6Z2FyYWdlXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIFJldHVybiB0aGUgaWNvbiB0byBiZSB1c2VkIGZvciBhIGRvbWFpbi5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYSBzdGF0ZSB0byBpbmZsdWVuY2UgdGhlIGRvbWFpbiBpY29uLlxuICovXG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmNvbnN0IGZpeGVkSWNvbnMgPSB7XG4gIGFsZXJ0OiBcImhhc3M6YWxlcnRcIixcbiAgYWxleGE6IFwiaGFzczphbWF6b24tYWxleGFcIixcbiAgYXV0b21hdGlvbjogXCJoYXNzOnBsYXlsaXN0LXBsYXlcIixcbiAgY2FsZW5kYXI6IFwiaGFzczpjYWxlbmRhclwiLFxuICBjYW1lcmE6IFwiaGFzczp2aWRlb1wiLFxuICBjbGltYXRlOiBcImhhc3M6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwiaGFzczpzZXR0aW5nc1wiLFxuICBjb252ZXJzYXRpb246IFwiaGFzczp0ZXh0LXRvLXNwZWVjaFwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJoYXNzOmFjY291bnRcIixcbiAgZmFuOiBcImhhc3M6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwiaGFzczpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcImhhc3M6Z29vZ2xlLWNpcmNsZXMtY29tbXVuaXRpZXNcIixcbiAgaGlzdG9yeV9ncmFwaDogXCJoYXNzOmNoYXJ0LWxpbmVcIixcbiAgaG9tZWFzc2lzdGFudDogXCJoYXNzOmhvbWUtYXNzaXN0YW50XCIsXG4gIGhvbWVraXQ6IFwiaGFzczpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJoYXNzOmltYWdlLWZpbHRlci1mcmFtZXNcIixcbiAgaW5wdXRfYm9vbGVhbjogXCJoYXNzOmRyYXdpbmdcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwiaGFzczpjYWxlbmRhci1jbG9ja1wiLFxuICBpbnB1dF9udW1iZXI6IFwiaGFzczpyYXktdmVydGV4XCIsXG4gIGlucHV0X3NlbGVjdDogXCJoYXNzOmZvcm1hdC1saXN0LWJ1bGxldGVkXCIsXG4gIGlucHV0X3RleHQ6IFwiaGFzczp0ZXh0Ym94XCIsXG4gIGxpZ2h0OiBcImhhc3M6bGlnaHRidWxiXCIsXG4gIG1haWxib3g6IFwiaGFzczptYWlsYm94XCIsXG4gIG5vdGlmeTogXCJoYXNzOmNvbW1lbnQtYWxlcnRcIixcbiAgcGVyc29uOiBcImhhc3M6YWNjb3VudFwiLFxuICBwbGFudDogXCJoYXNzOmZsb3dlclwiLFxuICBwcm94aW1pdHk6IFwiaGFzczphcHBsZS1zYWZhcmlcIixcbiAgcmVtb3RlOiBcImhhc3M6cmVtb3RlXCIsXG4gIHNjZW5lOiBcImhhc3M6Z29vZ2xlLXBhZ2VzXCIsXG4gIHNjcmlwdDogXCJoYXNzOmZpbGUtZG9jdW1lbnRcIixcbiAgc2Vuc29yOiBcImhhc3M6ZXllXCIsXG4gIHNpbXBsZV9hbGFybTogXCJoYXNzOmJlbGxcIixcbiAgc3VuOiBcImhhc3M6d2hpdGUtYmFsYW5jZS1zdW5ueVwiLFxuICBzd2l0Y2g6IFwiaGFzczpmbGFzaFwiLFxuICB0aW1lcjogXCJoYXNzOnRpbWVyXCIsXG4gIHVwZGF0ZXI6IFwiaGFzczpjbG91ZC11cGxvYWRcIixcbiAgdmFjdXVtOiBcImhhc3M6cm9ib3QtdmFjdXVtXCIsXG4gIHdhdGVyX2hlYXRlcjogXCJoYXNzOnRoZXJtb21ldGVyXCIsXG4gIHdlYXRoZXI6IFwiaGFzczp3ZWF0aGVyLWNsb3VkeVwiLFxuICB3ZWJsaW5rOiBcImhhc3M6b3Blbi1pbi1uZXdcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbWFpbkljb24oZG9tYWluOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGRvbWFpbiBpbiBmaXhlZEljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkSWNvbnNbZG9tYWluXTtcbiAgfVxuXG4gIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImFybWVkX2hvbWVcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsLW91dGxpbmVcIjtcbiAgICAgICAgY2FzZSBcInRyaWdnZXJlZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJoYXNzOnJhZGlvYm94LWJsYW5rXCJcbiAgICAgICAgOiBcImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IFwiY2xvc2VkXCIgPyBcImhhc3M6d2luZG93LWNsb3NlZFwiIDogXCJoYXNzOndpbmRvdy1vcGVuXCI7XG5cbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInVubG9ja2VkXCIgPyBcImhhc3M6bG9jay1vcGVuXCIgOiBcImhhc3M6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlICE9PSBcIm9mZlwiICYmIHN0YXRlICE9PSBcImlkbGVcIlxuICAgICAgICA/IFwiaGFzczpjYXN0LWNvbm5lY3RlZFwiXG4gICAgICAgIDogXCJoYXNzOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcImhhc3M6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXppbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufVxuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhbiBpbnB1dCBkYXRldGltZSBzdGF0ZS4gKi9cbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnB1dERhdGVUaW1lSWNvbihzdGF0ZTogSGFzc0VudGl0eSk6IHN0cmluZyB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcImhhc3M6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJoYXNzOmNhbGVuZGFyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJpbnB1dF9kYXRldGltZVwiKTtcbn1cbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzZW5zb3Igc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgVU5JVF9DLCBVTklUX0YgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCBkb21haW5JY29uIGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmNvbnN0IGZpeGVkRGV2aWNlQ2xhc3NJY29ucyA9IHtcbiAgaHVtaWRpdHk6IFwiaGFzczp3YXRlci1wZXJjZW50XCIsXG4gIGlsbHVtaW5hbmNlOiBcImhhc3M6YnJpZ2h0bmVzcy01XCIsXG4gIHRlbXBlcmF0dXJlOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgcHJlc3N1cmU6IFwiaGFzczpnYXVnZVwiLFxuICBwb3dlcjogXCJoYXNzOmZsYXNoXCIsXG4gIHNpZ25hbF9zdHJlbmd0aDogXCJoYXNzOndpZmlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbnNvckljb24oc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJoYXNzOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5XCI7XG4gICAgfVxuICAgIGlmIChiYXR0ZXJ5Um91bmQgPD0gMCkge1xuICAgICAgcmV0dXJuIFwiaGFzczpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBoYXNzOmJhdHRlcnktMTBcbiAgICAvLyBoYXNzOmJhdHRlcnktMjBcbiAgICAvLyBoYXNzOmJhdHRlcnktMzBcbiAgICAvLyBoYXNzOmJhdHRlcnktNDBcbiAgICAvLyBoYXNzOmJhdHRlcnktNTBcbiAgICAvLyBoYXNzOmJhdHRlcnktNjBcbiAgICAvLyBoYXNzOmJhdHRlcnktNzBcbiAgICAvLyBoYXNzOmJhdHRlcnktODBcbiAgICAvLyBoYXNzOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdoYXNzJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcImhhc3NcIn06YmF0dGVyeS0ke2JhdHRlcnlSb3VuZH1gO1xuICB9XG5cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgaWYgKHVuaXQgPT09IFVOSVRfQyB8fCB1bml0ID09PSBVTklUX0YpIHtcbiAgICByZXR1cm4gXCJoYXNzOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc3RhdGUuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IGRvbWFpbkljb24gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuaW1wb3J0IGJpbmFyeVNlbnNvckljb24gZnJvbSBcIi4vYmluYXJ5X3NlbnNvcl9pY29uXCI7XG5pbXBvcnQgY292ZXJJY29uIGZyb20gXCIuL2NvdmVyX2ljb25cIjtcbmltcG9ydCBzZW5zb3JJY29uIGZyb20gXCIuL3NlbnNvcl9pY29uXCI7XG5pbXBvcnQgaW5wdXREYXRlVGltZUljb24gZnJvbSBcIi4vaW5wdXRfZGF0ZXRlaW1lX2ljb25cIjtcblxuY29uc3QgZG9tYWluSWNvbnMgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IGJpbmFyeVNlbnNvckljb24sXG4gIGNvdmVyOiBjb3Zlckljb24sXG4gIHNlbnNvcjogc2Vuc29ySWNvbixcbiAgaW5wdXRfZGF0ZXRpbWU6IGlucHV0RGF0ZVRpbWVJY29uLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVJY29uKHN0YXRlOiBIYXNzRW50aXR5KSB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxuICBpZiAoc3RhdGUuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGUuZW50aXR5X2lkKTtcblxuICBpZiAoZG9tYWluIGluIGRvbWFpbkljb25zKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb25zW2RvbWFpbl0oc3RhdGUpO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2hhLWljb25cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBzdGF0ZUljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFJY29uIH0gZnJvbSBcIi4uL2hhLWljb25cIjtcblxuY2xhc3MgU3RhdGVCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3ZlcnJpZGVJY29uPzogc3RyaW5nO1xuICBAcXVlcnkoXCJoYS1pY29uXCIpIHByaXZhdGUgX2ljb24hOiBIYUljb247XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5zdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtaWNvblxuICAgICAgICBpZD1cImljb25cIlxuICAgICAgICBkYXRhLWRvbWFpbj0ke2NvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iail9XG4gICAgICAgIGRhdGEtc3RhdGU9JHtzdGF0ZU9iai5zdGF0ZX1cbiAgICAgICAgLmljb249JHt0aGlzLm92ZXJyaWRlSWNvbiB8fCBzdGF0ZUljb24oc3RhdGVPYmopfVxuICAgICAgPjwvaGEtaWNvbj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5zdGF0ZU9iajtcblxuICAgIGNvbnN0IGljb25TdHlsZTogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPiA9IHtcbiAgICAgIGNvbG9yOiBcIlwiLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgIH07XG4gICAgY29uc3QgaG9zdFN0eWxlOiBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+ID0ge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBcIlwiLFxuICAgIH07XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICAvLyBoaWRlIGljb24gaWYgd2UgaGF2ZSBlbnRpdHkgcGljdHVyZVxuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUgJiYgIXRoaXMub3ZlcnJpZGVJY29uKSB7XG4gICAgICAgIGhvc3RTdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgIFwidXJsKFwiICsgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSArIFwiKVwiO1xuICAgICAgICBpY29uU3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHNfY29sb3IpIHtcbiAgICAgICAgICBjb25zdCBodWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhzX2NvbG9yWzBdO1xuICAgICAgICAgIGNvbnN0IHNhdCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHNfY29sb3JbMV07XG4gICAgICAgICAgaWYgKHNhdCA+IDEwKSB7XG4gICAgICAgICAgICBpY29uU3R5bGUuY29sb3IgPSBgaHNsKCR7aHVlfSwgMTAwJSwgJHsxMDAgLSBzYXQgLyAyfSUpYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuYnJpZ2h0bmVzcykge1xuICAgICAgICAgIGNvbnN0IGJyaWdodG5lc3MgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJyaWdodG5lc3M7XG4gICAgICAgICAgaWYgKHR5cGVvZiBicmlnaHRuZXNzICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgVHlwZSBlcnJvcjogc3RhdGUtYmFkZ2UgZXhwZWN0ZWQgbnVtYmVyLCBidXQgdHlwZSBvZiAke1xuICAgICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWRcbiAgICAgICAgICAgIH0uYXR0cmlidXRlcy5icmlnaHRuZXNzIGlzICR7dHlwZW9mIGJyaWdodG5lc3N9ICgke2JyaWdodG5lc3N9KWA7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBsb3dlc3QgYnJpZ2hudGVzcyB3aWxsIGJlIGFyb3VuZCA1MCUgKHRoYXQncyBwcmV0dHkgZGFyaylcbiAgICAgICAgICBpY29uU3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoJHsoYnJpZ2h0bmVzcyArIDI0NSkgLyA1fSUpYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ljb24uc3R5bGUsIGljb25TdHlsZSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0eWxlLCBob3N0U3R5bGUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IsICM0NDczOWUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgaGEtaWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAvKiBDb2xvciB0aGUgaWNvbiBpZiBsaWdodCBvciBzdW4gaXMgb24gKi9cbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJsaWdodFwiXVtkYXRhLXN0YXRlPVwib25cIl0sXG4gICAgICBoYS1pY29uW2RhdGEtZG9tYWluPVwic3dpdGNoXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJiaW5hcnlfc2Vuc29yXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgICAgIGhhLWljb25bZGF0YS1kb21haW49XCJmYW5cIl1bZGF0YS1zdGF0ZT1cIm9uXCJdLFxuICAgICAgaGEtaWNvbltkYXRhLWRvbWFpbj1cInN1blwiXVtkYXRhLXN0YXRlPVwiYWJvdmVfaG9yaXpvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tYWN0aXZlLWNvbG9yLCAjZmRkODM1KTtcbiAgICAgIH1cblxuICAgICAgLyogQ29sb3IgdGhlIGljb24gaWYgdW5hdmFpbGFibGUgKi9cbiAgICAgIGhhLWljb25bZGF0YS1zdGF0ZT1cInVuYXZhaWxhYmxlXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXN0YXRlLWljb24tdW5hdmFpbGFibGUtY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0YXRlLWJhZGdlXCI6IFN0YXRlQmFkZ2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtYmFkZ2VcIiwgU3RhdGVCYWRnZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQTRDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFNQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBaERBO0FBa0RBOzs7Ozs7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBTEE7QUFRQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQkE7OztBQW5HQTtBQUNBO0FBMkdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
