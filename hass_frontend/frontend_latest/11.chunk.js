(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [11],
  {
    /***/ "./src/common/datetime/format_date_time.ts":
      /*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleStringSupportsOptions() {
          try {
            new Date().toLocaleString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleStringSupportsOptions()
          ? (dateObj, locales) =>
              dateObj.toLocaleString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "haDateTime"
              );

        /***/
      },

    /***/ "./src/common/datetime/format_time.ts":
      /*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleTimeStringSupportsOptions() {
          try {
            new Date().toLocaleTimeString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleTimeStringSupportsOptions()
          ? (dateObj, locales) =>
              dateObj.toLocaleTimeString(locales, {
                hour: "numeric",
                minute: "2-digit",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "shortTime"
              );

        /***/
      },

    /***/ "./src/components/buttons/ha-call-service-button.js":
      /*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
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
        /* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class HaCallServiceButton extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              progress: {
                type: Boolean,
                value: false,
              },
              domain: {
                type: String,
              },
              service: {
                type: String,
              },
              serviceData: {
                type: Object,
                value: {},
              },
            };
          }

          buttonTapped() {
            this.progress = true;
            var el = this;
            var eventData = {
              domain: this.domain,
              service: this.service,
              serviceData: this.serviceData,
            };
            this.hass
              .callService(this.domain, this.service, this.serviceData)
              .then(
                function() {
                  el.progress = false;
                  el.$.progress.actionSuccess();
                  eventData.success = true;
                },
                function() {
                  el.progress = false;
                  el.$.progress.actionError();
                  eventData.success = false;
                }
              )
              .then(function() {
                el.fire("hass-service-called", eventData);
              });
          }
        }

        customElements.define("ha-call-service-button", HaCallServiceButton);

        /***/
      },

    /***/ "./src/components/buttons/ha-progress-button.js":
      /*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );

        class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
              "html"
            ]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
              },
              progress: {
                type: Boolean,
                value: false,
              },
              disabled: {
                type: Boolean,
                value: false,
              },
            };
          }

          tempClass(className) {
            var classList = this.$.container.classList;
            classList.add(className);
            setTimeout(() => {
              classList.remove(className);
            }, 1000);
          }

          ready() {
            super.ready();
            this.addEventListener("click", (ev) => this.buttonTapped(ev));
          }

          buttonTapped(ev) {
            if (this.progress) ev.stopPropagation();
          }

          actionSuccess() {
            this.tempClass("success");
          }

          actionError() {
            this.tempClass("error");
          }

          computeDisabled(disabled, progress) {
            return disabled || progress;
          }
        }

        customElements.define("ha-progress-button", HaProgressButton);

        /***/
      },

    /***/ "./src/data/error_log.ts":
      /*!*******************************!*\
  !*** ./src/data/error_log.ts ***!
  \*******************************/
      /*! exports provided: fetchErrorLog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchErrorLog",
          function() {
            return fetchErrorLog;
          }
        );
        const fetchErrorLog = (hass) => hass.callApi("GET", "error_log");

        /***/
      },

    /***/ "./src/data/system_health.ts":
      /*!***********************************!*\
  !*** ./src/data/system_health.ts ***!
  \***********************************/
      /*! exports provided: fetchSystemHealthInfo */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSystemHealthInfo",
          function() {
            return fetchSystemHealthInfo;
          }
        );
        const fetchSystemHealthInfo = (hass) =>
          hass.callWS({
            type: "system_health/info",
          });

        /***/
      },

    /***/ "./src/data/system_log.ts":
      /*!********************************!*\
  !*** ./src/data/system_log.ts ***!
  \********************************/
      /*! exports provided: fetchSystemLog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSystemLog",
          function() {
            return fetchSystemLog;
          }
        );
        const fetchSystemLog = (hass) => hass.callApi("GET", "error/all");

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

        const EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
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
              fire(type, detail, options) {
                options = options || {};
                return Object(
                  _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                    "fireEvent"
                  ]
                )(options.node || this, type, detail, options);
              }
            }
        );

        /***/
      },

    /***/ "./src/panels/developer-tools/info/developer-tools-info.ts":
      /*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/info/developer-tools-info.ts ***!
  \*****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _system_log_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./system-log-card */ "./src/panels/developer-tools/info/system-log-card.ts"
        );
        /* harmony import */ var _error_log_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./error-log-card */ "./src/panels/developer-tools/info/error-log-card.ts"
        );
        /* harmony import */ var _system_health_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./system-health-card */ "./src/panels/developer-tools/info/system-health-card.ts"
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

        const JS_TYPE = "latest";
        const JS_VERSION = "20190718.0";
        const OPT_IN_PANEL = "states";

        let HaPanelDevInfo = _decorate(
          null,
          function(_initialize, _LitElement) {
            class HaPanelDevInfo extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaPanelDevInfo,
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
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const hass = this.hass;
                    const customUiList = window.CUSTOM_UI_LIST || [];
                    const nonDefaultLink =
                      localStorage.defaultPage === OPT_IN_PANEL &&
                      OPT_IN_PANEL === "states"
                        ? "/lovelace"
                        : "/states";
                    const nonDefaultLinkText =
                      localStorage.defaultPage === OPT_IN_PANEL &&
                      OPT_IN_PANEL === "states"
                        ? "Go to the Lovelace UI"
                        : "Go to the states UI";
                    const defaultPageText = `${
                      localStorage.defaultPage === OPT_IN_PANEL
                        ? "Remove"
                        : "Set"
                    } ${OPT_IN_PANEL} as default page on this device`;
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="about">
        <p class="version">
          <a href="https://www.home-assistant.io" target="_blank"
            ><img
              src="/static/icons/favicon-192x192.png"
              height="192"
              alt="JAVIS Home logo"
          /></a>
          <br />
          JAVIS Home<br />
          ${hass.config.version}
        </p>
        <p>
          Path to configuration.yaml: ${hass.config.config_dir}
        </p>
        <p class="develop">
          <a
            href="https://www.home-assistant.io/developers/credits/"
            target="_blank"
          >
            Developed by a bunch of awesome people.
          </a>
        </p>
        <p>
          Published under the Apache 2.0 license<br />
          Source:
          <a
            href="https://github.com/home-assistant/home-assistant"
            target="_blank"
            >server</a
          >
          &mdash;
          <a
            href="https://github.com/home-assistant/home-assistant-polymer"
            target="_blank"
            >frontend-ui</a
          >
        </p>
        <p>
          Built using
          <a href="https://www.python.org">Python 3</a>,
          <a href="https://www.polymer-project.org" target="_blank">Polymer</a>,
          Icons by
          <a href="https://www.google.com/design/icons/" target="_blank"
            >Google</a
          >
          and
          <a href="https://MaterialDesignIcons.com" target="_blank"
            >MaterialDesignIcons.com</a
          >.
        </p>
        <p>
          Frontend version: ${JS_VERSION} - ${JS_TYPE}
          ${
            customUiList.length > 0
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div>
                  Custom UIs:
                  ${customUiList.map(
                    (item) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div>
                        <a href="${item.url}" target="_blank"> ${item.name}</a>:
                        ${item.version}
                      </div>
                    `
                  )}
                </div>
              `
              : ""
          }
        </p>
        <p>
          <a href="${nonDefaultLink}">${nonDefaultLinkText}</a><br />
          <mwc-button @click="${this._toggleDefaultPage}" raised>
            ${defaultPageText}
          </mwc-button>
        </p>
      </div>
      <system-health-card .hass=${this.hass}></system-health-card>
      <system-log-card .hass=${this.hass}></system-log-card>
      <error-log-card .hass=${this.hass}></error-log-card>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaPanelDevInfo.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps); // Legacy custom UI can be slow to register, give them time.

                    const customUI = (window.CUSTOM_UI_LIST || []).length;
                    setTimeout(() => {
                      if (
                        (window.CUSTOM_UI_LIST || []).length !== customUI.length
                      ) {
                        this.requestUpdate();
                      }
                    }, 1000);
                  },
                },
                {
                  kind: "method",
                  key: "_toggleDefaultPage",
                  value: function _toggleDefaultPage() {
                    if (localStorage.defaultPage === OPT_IN_PANEL) {
                      delete localStorage.defaultPage;
                    } else {
                      localStorage.defaultPage = OPT_IN_PANEL;
                    }

                    this.requestUpdate();
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_1__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px 0px 16px 0;
          direction: ltr;
        }

        .about {
          text-align: center;
          line-height: 2em;
        }

        .version {
          @apply --paper-font-headline;
        }

        .develop {
          @apply --paper-font-subhead;
        }

        .about a {
          color: var(--dark-primary-color);
        }

        system-health-card {
          display: block;
          max-width: 600px;
          margin: 0 auto;
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("developer-tools-info", HaPanelDevInfo);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/error-log-card.ts":
      /*!***********************************************************!*\
  !*** ./src/panels/developer-tools/info/error-log-card.ts ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _data_error_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../data/error_log */ "./src/data/error_log.ts"
        );

        class ErrorLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this._errorLog = void 0;
          }

          static get properties() {
            return {
              hass: {},
              _errorLog: {},
            };
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p class="error-log-intro">
        ${
          this._errorLog
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                icon="hass:refresh"
                @click=${this._refreshErrorLog}
              ></paper-icon-button>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <mwc-button raised @click=${this._refreshErrorLog}>
                Load Full JAVIS Home Log
              </mwc-button>
            `
        }
      </p>
      <div class="error-log">${this._errorLog}</div>
    `;
          }

          static get styles() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .error-log-intro {
        text-align: center;
        margin: 16px;
      }

      paper-icon-button {
        float: right;
      }

      .error-log {
        @apply --paper-font-code)
          clear: both;
        white-space: pre-wrap;
        margin: 16px;
      }
    `;
          }

          async _refreshErrorLog() {
            this._errorLog = "Loading error log…";
            const log = await Object(
              _data_error_log__WEBPACK_IMPORTED_MODULE_3__["fetchErrorLog"]
            )(this.hass);
            this._errorLog = log || "No errors have been reported.";
          }
        }

        customElements.define("error-log-card", ErrorLogCard);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/show-dialog-system-log-detail.ts":
      /*!**************************************************************************!*\
  !*** ./src/panels/developer-tools/info/show-dialog-system-log-detail.ts ***!
  \**************************************************************************/
      /*! exports provided: showSystemLogDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showSystemLogDetailDialog",
          function() {
            return showSystemLogDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        let registeredDialog = false;
        const dialogShowEvent = "show-dialog-system-log-detail";
        const dialogTag = "dialog-system-log-detail";

        const registerDialog = (element) =>
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "register-dialog", {
            dialogShowEvent,
            dialogTag,
            dialogImport: () =>
              Promise.all(
                /*! import() | system-log-detail-dialog */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("vendors~system-log-detail-dialog"),
                  __webpack_require__.e("system-log-detail-dialog"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-system-log-detail */ "./src/panels/developer-tools/info/dialog-system-log-detail.ts"
                )
              ),
          });

        const showSystemLogDetailDialog = (element, systemLogDetailParams) => {
          if (!registeredDialog) {
            registeredDialog = true;
            registerDialog(element);
          }

          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, dialogShowEvent, systemLogDetailParams);
        };

        /***/
      },

    /***/ "./src/panels/developer-tools/info/system-health-card.ts":
      /*!***************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-health-card.ts ***!
  \***************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _data_system_health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../data/system_health */ "./src/data/system_health.ts"
        );

        const sortKeys = (a, b) => {
          if (a === "homeassistant") {
            return -1;
          }

          if (b === "homeassistant") {
            return 1;
          }

          if (a < b) {
            return -1;
          }

          if (b < a) {
            return 1;
          }

          return 0;
        };

        class SystemHealthCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this._info = void 0;
          }

          static get properties() {
            return {
              hass: {},
              _info: {},
            };
          }

          render() {
            if (!this.hass) {
              return;
            }

            const sections = [];

            if (!this._info) {
              sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div class="loading-container">
            <paper-spinner active></paper-spinner>
          </div>
        `);
            } else {
              const domains = Object.keys(this._info).sort(sortKeys);

              for (const domain of domains) {
                const keys = [];

                for (const key of Object.keys(this._info[domain]).sort()) {
                  keys.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <tr>
              <td>${key}</td>
              <td>${this._info[domain][key]}</td>
            </tr>
          `);
                }

                if (domain !== "homeassistant") {
                  sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__[
                    "html"
                  ]`
              <h3>${this.hass.localize(`domain.${domain}`) || domain}</h3>
            `);
                }

                sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <table>
            ${keys}
          </table>
        `);
              }
            }

            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="System Health">
        <div class="card-content">${sections}</div>
      </ha-card>
    `;
          }

          firstUpdated(changedProps) {
            super.firstUpdated(changedProps);

            this._fetchInfo();
          }

          async _fetchInfo() {
            try {
              if (!this.hass.config.components.includes("system_health")) {
                throw new Error();
              }

              this._info = await Object(
                _data_system_health__WEBPACK_IMPORTED_MODULE_3__[
                  "fetchSystemHealthInfo"
                ]
              )(this.hass);
            } catch (err) {
              this._info = {
                system_health: {
                  error:
                    "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
                },
              };
            }
          }

          static get styles() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      table {
        width: 100%;
      }

      td:first-child {
        width: 33%;
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
          }
        }

        customElements.define("system-health-card", SystemHealthCard);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/system-log-card.ts":
      /*!************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-log-card.ts ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _data_system_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../data/system_log */ "./src/data/system_log.ts"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts"
        );
        /* harmony import */ var _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./show-dialog-system-log-detail */ "./src/panels/developer-tools/info/show-dialog-system-log-detail.ts"
        );

        const formatLogTime = (date, language) => {
          const today = new Date().setHours(0, 0, 0, 0);
          const dateTime = new Date(date * 1000);
          const dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);
          return dateTimeDay < today
            ? Object(
                _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__[
                  "default"
                ]
              )(dateTime, language)
            : Object(
                _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__[
                  "default"
                ]
              )(dateTime, language);
        };

        class SystemLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this._items = void 0;
          }

          static get properties() {
            return {
              hass: {},
              _items: {},
            };
          }

          render() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="system-log-intro">
        <ha-card>
          ${
            this._items === undefined
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="loading-container">
                  <paper-spinner active></paper-spinner>
                </div>
              `
              : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                ${
                  this._items.length === 0
                    ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div class="card-content">There are no new issues!</div>
                    `
                    : this._items.map(
                        (item) => lit_element__WEBPACK_IMPORTED_MODULE_0__[
                          "html"
                        ]`
                        <paper-item @click=${this._openLog} .logItem=${item}>
                          <paper-item-body two-line>
                            <div class="row">
                              ${item.message}
                            </div>
                            <div secondary>
                              ${formatLogTime(
                                item.timestamp,
                                this.hass.language
                              )}
                              ${item.source} (${item.level})
                              ${
                                item.count > 1
                                  ? lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                      "html"
                                    ]`
                                    - message first occured at
                                    ${formatLogTime(
                                      item.first_occured,
                                      this.hass.language
                                    )}
                                    and shows up ${item.count} times
                                  `
                                  : lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                      "html"
                                    ]``
                              }
                            </div>
                          </paper-item-body>
                        </paper-item>
                      `
                      )
                }

                <div class="card-actions">
                  <ha-call-service-button
                    .hass=${this.hass}
                    domain="system_log"
                    service="clear"
                    >Clear</ha-call-service-button
                  >
                  <ha-progress-button @click=${this._fetchData}
                    >Refresh</ha-progress-button
                  >
                </div>
              `
          }
        </ha-card>
      </div>
    `;
          }

          firstUpdated(changedProps) {
            super.firstUpdated(changedProps);

            this._fetchData();

            this.addEventListener("hass-service-called", (ev) =>
              this.serviceCalled(ev)
            );
          }

          serviceCalled(ev) {
            // Check if this is for us
            if (ev.detail.success && ev.detail.domain === "system_log") {
              // Do the right thing depending on service
              if (ev.detail.service === "clear") {
                this._items = [];
              }
            }
          }

          async _fetchData() {
            this._items = undefined;
            this._items = await Object(
              _data_system_log__WEBPACK_IMPORTED_MODULE_8__["fetchSystemLog"]
            )(this.hass);
          }

          _openLog(ev) {
            const item = ev.currentTarget.logItem;
            Object(
              _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__[
                "showSystemLogDetailDialog"
              ]
            )(this, {
              item,
            });
          }

          static get styles() {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-card {
        padding-top: 16px;
      }

      paper-item {
        cursor: pointer;
      }

      .system-log-intro {
        margin: 16px;
        border-top: 1px solid var(--light-primary-color);
        padding-top: 16px;
      }

      .loading-container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
          }
        }

        customElements.define("system-log-card", SystemLogCard);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZXJyb3JfbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3N5c3RlbV9oZWFsdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc3lzdGVtX2xvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL2RldmVsb3Blci10b29scy1pbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vZXJyb3ItbG9nLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvaW5mby9zaG93LWRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL3N5c3RlbS1oZWFsdGgtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL3N5c3RlbS1sb2ctY2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJoYURhdGVUaW1lXCIpKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIikpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDYWxsU2VydmljZUJ1dHRvbiBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgIGlkPVwicHJvZ3Jlc3NcIlxuICAgICAgICBwcm9ncmVzcz1cIltbcHJvZ3Jlc3NdXVwiXG4gICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPjxzbG90Pjwvc2xvdFxuICAgICAgPjwvaGEtcHJvZ3Jlc3MtYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge30sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRydWU7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIHNlcnZpY2U6IHRoaXMuc2VydmljZSxcbiAgICAgIHNlcnZpY2VEYXRhOiB0aGlzLnNlcnZpY2VEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlLCB0aGlzLnNlcnZpY2VEYXRhKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuZmlyZShcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFcnJvckxvZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8c3RyaW5nPihcIkdFVFwiLCBcImVycm9yX2xvZ1wiKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIb21lQXNzaXN0YW50U3lzdGVtSGVhbHRoSW5mbyB7XG4gIHZlcnNpb246IHN0cmluZztcbiAgZGV2OiBib29sZWFuO1xuICBoYXNzaW86IGJvb2xlYW47XG4gIHZpcnR1YWxlbnY6IHN0cmluZztcbiAgcHl0aG9uX3ZlcnNpb246IHN0cmluZztcbiAgZG9ja2VyOiBib29sZWFuO1xuICBhcmNoOiBzdHJpbmc7XG4gIHRpbWV6b25lOiBzdHJpbmc7XG4gIG9zX25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1IZWFsdGhJbmZvIHtcbiAgW2RvbWFpbjogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIH07XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN5c3RlbUhlYWx0aEluZm8gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnRcbik6IFByb21pc2U8U3lzdGVtSGVhbHRoSW5mbz4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwic3lzdGVtX2hlYWx0aC9pbmZvXCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2dlZEVycm9yIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBsZXZlbDogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgLy8gdW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgZXhjZXB0aW9uOiBzdHJpbmc7XG4gIGNvdW50OiBudW1iZXI7XG4gIC8vIHVuaXggdGltZXN0YW1wIGluIHNlY29uZHNcbiAgZmlyc3Rfb2NjdXJlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTeXN0ZW1Mb2cgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPExvZ2dlZEVycm9yW10+KFwiR0VUXCIsIFwiZXJyb3IvYWxsXCIpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4vc3lzdGVtLWxvZy1jYXJkXCI7XG5pbXBvcnQgXCIuL2Vycm9yLWxvZy1jYXJkXCI7XG5pbXBvcnQgXCIuL3N5c3RlbS1oZWFsdGgtY2FyZFwiO1xuXG5jb25zdCBKU19UWVBFID0gX19CVUlMRF9fO1xuY29uc3QgSlNfVkVSU0lPTiA9IF9fVkVSU0lPTl9fO1xuY29uc3QgT1BUX0lOX1BBTkVMID0gXCJzdGF0ZXNcIjtcblxuY2xhc3MgSGFQYW5lbERldkluZm8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIGNvbnN0IGN1c3RvbVVpTGlzdDogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nOyB2ZXJzaW9uOiBzdHJpbmcgfT4gPVxuICAgICAgKHdpbmRvdyBhcyBhbnkpLkNVU1RPTV9VSV9MSVNUIHx8IFtdO1xuXG4gICAgY29uc3Qgbm9uRGVmYXVsdExpbmsgPVxuICAgICAgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwgJiYgT1BUX0lOX1BBTkVMID09PSBcInN0YXRlc1wiXG4gICAgICAgID8gXCIvbG92ZWxhY2VcIlxuICAgICAgICA6IFwiL3N0YXRlc1wiO1xuXG4gICAgY29uc3Qgbm9uRGVmYXVsdExpbmtUZXh0ID1cbiAgICAgIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSA9PT0gT1BUX0lOX1BBTkVMICYmIE9QVF9JTl9QQU5FTCA9PT0gXCJzdGF0ZXNcIlxuICAgICAgICA/IFwiR28gdG8gdGhlIExvdmVsYWNlIFVJXCJcbiAgICAgICAgOiBcIkdvIHRvIHRoZSBzdGF0ZXMgVUlcIjtcblxuICAgIGNvbnN0IGRlZmF1bHRQYWdlVGV4dCA9IGAke1xuICAgICAgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwgPyBcIlJlbW92ZVwiIDogXCJTZXRcIlxuICAgIH0gJHtPUFRfSU5fUEFORUx9IGFzIGRlZmF1bHQgcGFnZSBvbiB0aGlzIGRldmljZWA7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICAgICAgICA8cCBjbGFzcz1cInZlcnNpb25cIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPjxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pY29ucy9mYXZpY29uLTE5MngxOTIucG5nXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTkyXCJcbiAgICAgICAgICAgICAgYWx0PVwiSkFWSVMgSG9tZSBsb2dvXCJcbiAgICAgICAgICAvPjwvYT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBKQVZJUyBIb21lPGJyIC8+XG4gICAgICAgICAgJHtoYXNzLmNvbmZpZy52ZXJzaW9ufVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFBhdGggdG8gY29uZmlndXJhdGlvbi55YW1sOiAke2hhc3MuY29uZmlnLmNvbmZpZ19kaXJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXZlbG9wXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9kZXZlbG9wZXJzL2NyZWRpdHMvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGV2ZWxvcGVkIGJ5IGEgYnVuY2ggb2YgYXdlc29tZSBwZW9wbGUuXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFB1Ymxpc2hlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBsaWNlbnNlPGJyIC8+XG4gICAgICAgICAgU291cmNlOlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hvbWUtYXNzaXN0YW50L2hvbWUtYXNzaXN0YW50XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+c2VydmVyPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgICZtZGFzaDtcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ob21lLWFzc2lzdGFudC9ob21lLWFzc2lzdGFudC1wb2x5bWVyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+ZnJvbnRlbmQtdWk8L2FcbiAgICAgICAgICA+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnVpbHQgdXNpbmdcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucHl0aG9uLm9yZ1wiPlB5dGhvbiAzPC9hPixcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPlBvbHltZXI8L2E+LFxuICAgICAgICAgIEljb25zIGJ5XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL2ljb25zL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+R29vZ2xlPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgIGFuZFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL01hdGVyaWFsRGVzaWduSWNvbnMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5NYXRlcmlhbERlc2lnbkljb25zLmNvbTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRnJvbnRlbmQgdmVyc2lvbjogJHtKU19WRVJTSU9OfSAtICR7SlNfVFlQRX1cbiAgICAgICAgICAke2N1c3RvbVVpTGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEN1c3RvbSBVSXM6XG4gICAgICAgICAgICAgICAgICAke2N1c3RvbVVpTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtpdGVtLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gJHtpdGVtLm5hbWV9PC9hPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj1cIiR7bm9uRGVmYXVsdExpbmt9XCI+JHtub25EZWZhdWx0TGlua1RleHR9PC9hPjxiciAvPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fdG9nZ2xlRGVmYXVsdFBhZ2V9XCIgcmFpc2VkPlxuICAgICAgICAgICAgJHtkZWZhdWx0UGFnZVRleHR9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzeXN0ZW0taGVhbHRoLWNhcmQgLmhhc3M9JHt0aGlzLmhhc3N9Pjwvc3lzdGVtLWhlYWx0aC1jYXJkPlxuICAgICAgPHN5c3RlbS1sb2ctY2FyZCAuaGFzcz0ke3RoaXMuaGFzc30+PC9zeXN0ZW0tbG9nLWNhcmQ+XG4gICAgICA8ZXJyb3ItbG9nLWNhcmQgLmhhc3M9JHt0aGlzLmhhc3N9PjwvZXJyb3ItbG9nLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBMZWdhY3kgY3VzdG9tIFVJIGNhbiBiZSBzbG93IHRvIHJlZ2lzdGVyLCBnaXZlIHRoZW0gdGltZS5cbiAgICBjb25zdCBjdXN0b21VSSA9ICgod2luZG93IGFzIGFueSkuQ1VTVE9NX1VJX0xJU1QgfHwgW10pLmxlbmd0aDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICgoKHdpbmRvdyBhcyBhbnkpLkNVU1RPTV9VSV9MSVNUIHx8IFtdKS5sZW5ndGggIT09IGN1c3RvbVVJLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdG9nZ2xlRGVmYXVsdFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSA9PT0gT1BUX0lOX1BBTkVMKSB7XG4gICAgICBkZWxldGUgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPSBPUFRfSU5fUEFORUw7XG4gICAgfVxuICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDBweCAxNnB4IDA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnNpb24ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2ZWxvcCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0IGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3lzdGVtLWhlYWx0aC1jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRldmVsb3Blci10b29scy1pbmZvXCI6IEhhUGFuZWxEZXZJbmZvO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1pbmZvXCIsIEhhUGFuZWxEZXZJbmZvKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZldGNoRXJyb3JMb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lcnJvcl9sb2dcIjtcblxuY2xhc3MgRXJyb3JMb2dDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHJpdmF0ZSBfZXJyb3JMb2c/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBfZXJyb3JMb2c6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cCBjbGFzcz1cImVycm9yLWxvZy1pbnRyb1wiPlxuICAgICAgICAke3RoaXMuX2Vycm9yTG9nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9yZWZyZXNoRXJyb3JMb2d9XG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIEBjbGljaz0ke3RoaXMuX3JlZnJlc2hFcnJvckxvZ30+XG4gICAgICAgICAgICAgICAgTG9hZCBGdWxsIEpBVklTIEhvbWUgTG9nXG4gICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbG9nXCI+JHt0aGlzLl9lcnJvckxvZ308L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmVycm9yLWxvZy1pbnRybyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yLWxvZyB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29kZSlcbiAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlZnJlc2hFcnJvckxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9lcnJvckxvZyA9IFwiTG9hZGluZyBlcnJvciBsb2figKZcIjtcbiAgICBjb25zdCBsb2cgPSBhd2FpdCBmZXRjaEVycm9yTG9nKHRoaXMuaGFzcyEpO1xuICAgIHRoaXMuX2Vycm9yTG9nID0gbG9nIHx8IFwiTm8gZXJyb3JzIGhhdmUgYmVlbiByZXBvcnRlZC5cIjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJlcnJvci1sb2ctY2FyZFwiLCBFcnJvckxvZ0NhcmQpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG9nZ2VkRXJyb3IgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zeXN0ZW1fbG9nXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwic2hvdy1kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIjogU3lzdGVtTG9nRGV0YWlsRGlhbG9nUGFyYW1zO1xuICB9XG59XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5jb25zdCBkaWFsb2dTaG93RXZlbnQgPSBcInNob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI7XG5jb25zdCBkaWFsb2dUYWcgPSBcImRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN5c3RlbUxvZ0RldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGl0ZW06IExvZ2dlZEVycm9yO1xufVxuXG5jb25zdCByZWdpc3RlckRpYWxvZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT5cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dTaG93RXZlbnQsXG4gICAgZGlhbG9nVGFnLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInN5c3RlbS1sb2ctZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIiksXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd1N5c3RlbUxvZ0RldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogU3lzdGVtTG9nRGV0YWlsRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgcmVnaXN0ZXJEaWFsb2coZWxlbWVudCk7XG4gIH1cbiAgZmlyZUV2ZW50KGVsZW1lbnQsIGRpYWxvZ1Nob3dFdmVudCwgc3lzdGVtTG9nRGV0YWlsUGFyYW1zKTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIFN5c3RlbUhlYWx0aEluZm8sXG4gIGZldGNoU3lzdGVtSGVhbHRoSW5mbyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2hlYWx0aFwiO1xuXG5jb25zdCBzb3J0S2V5cyA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA9PT0gXCJob21lYXNzaXN0YW50XCIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGIgPT09IFwiaG9tZWFzc2lzdGFudFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChiIDwgYSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY2xhc3MgU3lzdGVtSGVhbHRoQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHByaXZhdGUgX2luZm8/OiBTeXN0ZW1IZWFsdGhJbmZvO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgX2luZm86IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbnM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIGlmICghdGhpcy5faW5mbykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvbWFpbnMgPSBPYmplY3Qua2V5cyh0aGlzLl9pbmZvKS5zb3J0KHNvcnRLZXlzKTtcbiAgICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgY29uc3Qga2V5czogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX2luZm9bZG9tYWluXSkuc29ydCgpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGh0bWxgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke2tleX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt0aGlzLl9pbmZvW2RvbWFpbl1ba2V5XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tYWluICE9PSBcImhvbWVhc3Npc3RhbnRcIikge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8aDM+JHt0aGlzLmhhc3MubG9jYWxpemUoYGRvbWFpbi4ke2RvbWFpbn1gKSB8fCBkb21haW59PC9oMz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb25zLnB1c2goaHRtbGBcbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAke2tleXN9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJTeXN0ZW0gSGVhbHRoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj4ke3NlY3Rpb25zfTwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoSW5mbygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hJbmZvKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzeXN0ZW1faGVhbHRoXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5mbyA9IGF3YWl0IGZldGNoU3lzdGVtSGVhbHRoSW5mbyh0aGlzLmhhc3MhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2luZm8gPSB7XG4gICAgICAgIHN5c3RlbV9oZWFsdGg6IHtcbiAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgIFwiU3lzdGVtIEhlYWx0aCBjb21wb25lbnQgaXMgbm90IGxvYWRlZC4gQWRkICdzeXN0ZW1faGVhbHRoOicgdG8gY29uZmlndXJhdGlvbi55YW1sXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzeXN0ZW0taGVhbHRoLWNhcmRcIiwgU3lzdGVtSGVhbHRoQ2FyZCk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1wcm9ncmVzcy1idXR0b25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvZ2dlZEVycm9yLCBmZXRjaFN5c3RlbUxvZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3N5c3RlbV9sb2dcIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IHNob3dTeXN0ZW1Mb2dEZXRhaWxEaWFsb2cgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiO1xuXG5jb25zdCBmb3JtYXRMb2dUaW1lID0gKGRhdGUsIGxhbmd1YWdlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKTtcbiAgY29uc3QgZGF0ZVRpbWVEYXkgPSBuZXcgRGF0ZShkYXRlICogMTAwMCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgcmV0dXJuIGRhdGVUaW1lRGF5IDwgdG9kYXlcbiAgICA/IGZvcm1hdERhdGVUaW1lKGRhdGVUaW1lLCBsYW5ndWFnZSlcbiAgICA6IGZvcm1hdFRpbWUoZGF0ZVRpbWUsIGxhbmd1YWdlKTtcbn07XG5cbmNsYXNzIFN5c3RlbUxvZ0NhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwcml2YXRlIF9pdGVtcz86IExvZ2dlZEVycm9yW107XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBfaXRlbXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwic3lzdGVtLWxvZy1pbnRyb1wiPlxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAke3RoaXMuX2l0ZW1zID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5UaGVyZSBhcmUgbm8gbmV3IGlzc3VlcyE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiB0aGlzLl9pdGVtcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9JHt0aGlzLl9vcGVuTG9nfSAubG9nSXRlbT0ke2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRMb2dUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS5zb3VyY2V9ICgke2l0ZW0ubGV2ZWx9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLmNvdW50ID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG1lc3NhZ2UgZmlyc3Qgb2NjdXJlZCBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRMb2dUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpcnN0X29jY3VyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzcyEubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgc2hvd3MgdXAgJHtpdGVtLmNvdW50fSB0aW1lc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJzeXN0ZW1fbG9nXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cImNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgPkNsZWFyPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2ZldGNoRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgPlJlZnJlc2g8L2hhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlcnZpY2VDYWxsZWQoZXYpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGZvciB1c1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2VzcyAmJiBldi5kZXRhaWwuZG9tYWluID09PSBcInN5c3RlbV9sb2dcIikge1xuICAgICAgLy8gRG8gdGhlIHJpZ2h0IHRoaW5nIGRlcGVuZGluZyBvbiBzZXJ2aWNlXG4gICAgICBpZiAoZXYuZGV0YWlsLnNlcnZpY2UgPT09IFwiY2xlYXJcIikge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pdGVtcyA9IGF3YWl0IGZldGNoU3lzdGVtTG9nKHRoaXMuaGFzcyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkxvZyhldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5sb2dJdGVtO1xuICAgIHNob3dTeXN0ZW1Mb2dEZXRhaWxEaWFsb2codGhpcywgeyBpdGVtIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuc3lzdGVtLWxvZy1pbnRybyB7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzeXN0ZW0tbG9nLWNhcmRcIiwgU3lzdGVtTG9nQ2FyZCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWxCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFrRUE7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhHQTtBQUNBO0FBaUdBOzs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNnQkE7QUFBQTtBQUFBO0FBSUE7QUFEQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBS0E7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBOzs7QUFJQTs7QUFHQTtBQUNBOztBQUpBOztBQUpBOzs7QUFpQkE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBL0VBO0FBaUZBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzQ0E7OztBQXJLQTtBQUNBO0FBNktBOzs7Ozs7Ozs7Ozs7QUNsTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBSUE7O0FBSkE7QUFRQTs7O0FBR0E7O0FBRUE7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4REE7QUFDQTtBQXlEQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQSxtbEJBQ0E7QUFKQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTs7QUFFQTs7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWVBO0FBQ0E7QUFsR0E7QUFDQTtBQW1HQTs7Ozs7Ozs7Ozs7O0FDcklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUFBO0FBT0E7O0FBQUE7QUFNQTs7O0FBR0E7OztBQUdBO0FBSUE7QUFDQTs7QUFHQTtBQUlBO0FBUEE7Ozs7QUFiQTtBQUNBOzs7QUE4QkE7Ozs7O0FBS0E7Ozs7QUFJQTs7O0FBdERBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTtBQUNBO0FBNUhBO0FBQ0E7QUE2SEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
