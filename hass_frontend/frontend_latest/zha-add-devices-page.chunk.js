(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["zha-add-devices-page"],
  {
    /***/ "./src/components/ha-textarea.js":
      /*!***************************************!*\
  !*** ./src/components/ha-textarea.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /*
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/

        class HaTextarea extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea label="[[label]]" value="{{value}}"></paper-textarea>
    `;
          }

          static get properties() {
            return {
              label: String,
              value: {
                type: String,
                notify: true,
              },
            };
          }
        }

        customElements.define("ha-textarea", HaTextarea);

        /***/
      },

    /***/ "./src/panels/config/zha/zha-add-devices-page.ts":
      /*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-add-devices-page.ts ***!
  \*******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
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

        let ZHAAddDevicesPage = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])(
              "zha-add-devices-page"
            ),
          ],
          function(_initialize, _LitElement) {
            class ZHAAddDevicesPage extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: ZHAAddDevicesPage,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "route",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "_error",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "_discoveredDevices",

                  value() {
                    return [];
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "_formattedEvents",

                  value() {
                    return "";
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "_active",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["property"]
                    )(),
                  ],
                  key: "_showHelp",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  key: "_ieeeAddress",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_addDevicesTimeoutHandle",

                  value() {
                    return undefined;
                  },
                },
                {
                  kind: "field",
                  key: "_subscribed",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(ZHAAddDevicesPage.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this.route && this.route.path && this.route.path !== ""
                      ? (this._ieeeAddress = this.route.path.substring(1))
                      : (this._ieeeAddress = undefined);

                    this._subscribe();
                  },
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(ZHAAddDevicesPage.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this._unsubscribe();

                    this._error = undefined;
                    this._discoveredDevices = [];
                    this._formattedEvents = "";
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <hass-subpage
        header="${this.hass.localize(
          "ui.panel.config.zha.add_device_page.header"
        )}"
      >
        ${
          this._active
            ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <h2>
                <paper-spinner
                  ?active="${this._active}"
                  alt="Searching"
                ></paper-spinner>
                ${this.hass.localize(
                  "ui.panel.config.zha.add_device_page.spinner"
                )}
              </h2>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <div class="card-actions">
                <mwc-button @click=${this._subscribe} class="search-button">
                  Search again
                </mwc-button>
                <paper-icon-button
                  class="toggle-help-icon"
                  @click="${this._onHelpTap}"
                  icon="hass:help-circle"
                ></paper-icon-button>
                ${
                  this._showHelp
                    ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                      <ha-service-description
                        .hass="${this.hass}"
                        domain="zha"
                        service="permit"
                        class="help-text"
                      />
                    `
                    : ""
                }
              </div>
            `
        }
        ${
          this._error
            ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <div class="error">${this._error}</div>
            `
            : ""
        }
        <div class="content-header"></div>
        <div class="content">
          ${
            this._discoveredDevices.length < 1
              ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="discovery-text">
                  <h4>
                    ${this.hass.localize(
                      "ui.panel.config.zha.add_device_page.discovery_text"
                    )}
                  </h4>
                </div>
              `
              : lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                ${this._discoveredDevices.map(
                  (device) => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                    <zha-device-card
                      class="card"
                      .hass="${this.hass}"
                      .device="${device}"
                      .narrow="${!this.isWide}"
                      .showHelp="${this._showHelp}"
                      .showActions="${!this._active}"
                      .isJoinPage="${true}"
                    ></zha-device-card>
                  `
                )}
              `
          }
        </div>
        <ha-textarea class="events" value="${this._formattedEvents}">
        </ha-textarea>
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_handleMessage",
                  value: function _handleMessage(message) {
                    if (message.type === "log_output") {
                      this._formattedEvents += message.log_entry.message + "\n";

                      if (this.shadowRoot) {
                        const textArea = this.shadowRoot.querySelector(
                          "ha-textarea"
                        );

                        if (textArea) {
                          textArea.scrollTop = textArea.scrollHeight;
                        }
                      }
                    }

                    if (
                      message.type &&
                      message.type === "device_fully_initialized"
                    ) {
                      this._discoveredDevices.push(message.device_info);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_unsubscribe",
                  value: function _unsubscribe() {
                    this._active = false;

                    if (this._addDevicesTimeoutHandle) {
                      clearTimeout(this._addDevicesTimeoutHandle);
                    }

                    if (this._subscribed) {
                      this._subscribed.then((unsub) => unsub());

                      this._subscribed = undefined;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_subscribe",
                  value: function _subscribe() {
                    const data = {
                      type: "zha/devices/permit",
                    };

                    if (this._ieeeAddress) {
                      data.ieee = this._ieeeAddress;
                    }

                    this._subscribed = this.hass.connection.subscribeMessage(
                      (message) => this._handleMessage(message),
                      data
                    );
                    this._active = true;
                    this._addDevicesTimeoutHandle = setTimeout(
                      () => this._unsubscribe(),
                      75000
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
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyle"],
                      lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
        .discovery-text,
        .content-header {
          margin: 16px;
        }
        .content {
          border-top: 1px solid var(--light-primary-color);
          min-height: 500px;
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: left;
          overflow: scroll;
        }
        .error {
          color: var(--google-red-500);
        }
        paper-spinner {
          display: none;
          margin-right: 20px;
          margin-left: 16px;
        }
        paper-spinner[active] {
          display: block;
          float: left;
          margin-right: 20px;
          margin-left: 16px;
        }
        .card {
          margin-left: 16px;
          margin-right: 16px;
          margin-bottom: 0px;
          margin-top: 10px;
        }
        .events {
          margin: 16px;
          border-top: 1px solid var(--light-primary-color);
          padding-top: 16px;
          min-height: 200px;
          max-height: 200px;
          overflow: scroll;
        }
        .toggle-help-icon {
          position: absolute;
          margin-top: 16px;
          margin-right: 16px;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }
        ha-service-description {
          margin-top: 16px;
          margin-left: 16px;
          display: block;
          color: grey;
        }
        .search-button {
          margin-top: 16px;
          margin-left: 16px;
        }
        .help-text {
          color: grey;
          padding-left: 16px;
        }
      `,
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1kZXZpY2VzLXBhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWFkZC1kZXZpY2VzLXBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbldyYXBwZXIgZm9yIHBhcGVyLXRleHRhcmVhLlxuXG5wYXBlci10ZXh0YXJlYSBjcmFzaGVzIG9uIGlPUyB3aGVuIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseS4gVGhpcyBvbmx5IGltcGFjdHNcbm91ciBhdXRvbWF0aW9uIGFuZCBzY3JpcHQgZWRpdG9ycyBhcyB0aGV5IGFyZSB1c2luZyBQcmVhY3QuIFBvbHltZXIgaXMgdXNpbmdcbnRlbXBsYXRlIGVsZW1lbnRzIGFuZCBkb2VzIG5vdCBoYXZlIHRoaXMgaXNzdWUuXG5cbnBhcGVyLXRleHRhcmVhIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy81NTZcbldlYktpdCBpc3N1ZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NDYyOVxuKi9cblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhVGV4dGFyZWEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci10ZXh0YXJlYSBsYWJlbD1cIltbbGFiZWxdXVwiIHZhbHVlPVwie3t2YWx1ZX19XCI+PC9wYXBlci10ZXh0YXJlYT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdGV4dGFyZWFcIiwgSGFUZXh0YXJlYSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2UtY2FyZFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IFpIQURldmljZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCIpXG5jbGFzcyBaSEFBZGREZXZpY2VzUGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGU/OiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Rpc2NvdmVyZWREZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mb3JtYXR0ZWRFdmVudHM6IHN0cmluZyA9IFwiXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93SGVscDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pZWVlQWRkcmVzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGU6IGFueSA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlZD86IFByb21pc2U8KCkgPT4gUHJvbWlzZTx2b2lkPj47XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yb3V0ZSAmJiB0aGlzLnJvdXRlLnBhdGggJiYgdGhpcy5yb3V0ZS5wYXRoICE9PSBcIlwiXG4gICAgICA/ICh0aGlzLl9pZWVlQWRkcmVzcyA9IHRoaXMucm91dGUucGF0aC5zdWJzdHJpbmcoMSkpXG4gICAgICA6ICh0aGlzLl9pZWVlQWRkcmVzcyA9IHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Rpc2NvdmVyZWREZXZpY2VzID0gW107XG4gICAgdGhpcy5fZm9ybWF0dGVkRXZlbnRzID0gXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgaGVhZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5hZGRfZGV2aWNlX3BhZ2UuaGVhZGVyXCJcbiAgICAgICAgKX1cIlxuICAgICAgPlxuICAgICAgICAke3RoaXMuX2FjdGl2ZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICA/YWN0aXZlPVwiJHt0aGlzLl9hY3RpdmV9XCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlNlYXJjaGluZ1wiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuYWRkX2RldmljZV9wYWdlLnNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fc3Vic2NyaWJlfSBjbGFzcz1cInNlYXJjaC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIFNlYXJjaCBhZ2FpblxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJwZXJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLl9kaXNjb3ZlcmVkRGV2aWNlcy5sZW5ndGggPCAxXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2NvdmVyeS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuYWRkX2RldmljZV9wYWdlLmRpc2NvdmVyeV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2Rpc2NvdmVyZWREZXZpY2VzLm1hcChcbiAgICAgICAgICAgICAgICAgIChkZXZpY2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAuZGV2aWNlPVwiJHtkZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAgICAgICAubmFycm93PVwiJHshdGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAuc2hvd0hlbHA9XCIke3RoaXMuX3Nob3dIZWxwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgLnNob3dBY3Rpb25zPVwiJHshdGhpcy5fYWN0aXZlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgLmlzSm9pblBhZ2U9XCIke3RydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgPjwvemhhLWRldmljZS1jYXJkPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWEgY2xhc3M9XCJldmVudHNcIiB2YWx1ZT1cIiR7dGhpcy5fZm9ybWF0dGVkRXZlbnRzfVwiPlxuICAgICAgICA8L2hhLXRleHRhcmVhPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJsb2dfb3V0cHV0XCIpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdHRlZEV2ZW50cyArPSBtZXNzYWdlLmxvZ19lbnRyeS5tZXNzYWdlICsgXCJcXG5cIjtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgY29uc3QgdGV4dEFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImhhLXRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGV4dEFyZWEpIHtcbiAgICAgICAgICB0ZXh0QXJlYS5zY3JvbGxUb3AgPSB0ZXh0QXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSAmJiBtZXNzYWdlLnR5cGUgPT09IFwiZGV2aWNlX2Z1bGx5X2luaXRpYWxpemVkXCIpIHtcbiAgICAgIHRoaXMuX2Rpc2NvdmVyZWREZXZpY2VzLnB1c2gobWVzc2FnZS5kZXZpY2VfaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2FkZERldmljZXNUaW1lb3V0SGFuZGxlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZC50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7IHR5cGU6IFwiemhhL2RldmljZXMvcGVybWl0XCIgfTtcbiAgICBpZiAodGhpcy5faWVlZUFkZHJlc3MpIHtcbiAgICAgIGRhdGEuaWVlZSA9IHRoaXMuX2llZWVBZGRyZXNzO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVkID0gdGhpcy5oYXNzIS5jb25uZWN0aW9uLnN1YnNjcmliZU1lc3NhZ2UoXG4gICAgICAobWVzc2FnZSkgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShtZXNzYWdlKSxcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5fdW5zdWJzY3JpYmUoKSxcbiAgICAgIDc1MDAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmRpc2NvdmVyeS10ZXh0LFxuICAgICAgICAuY29udGVudC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lclthY3RpdmVdIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXZlbnRzIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCI6IFpIQUFkZERldmljZXNQYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQXJCQTtBQUNBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7OztBQUFBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTs7QUFFQTs7QUFJQTs7O0FBSUE7OztBQUdBOztBQVBBOztBQWNBOzs7OztBQUtBOzs7QUFHQTs7QUFHQTs7Ozs7QUFIQTs7QUFXQTtBQUNBO0FBRUE7QUFGQTs7O0FBT0E7OztBQUlBOzs7QUFKQTtBQVdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7QUFhQTs7QUFFQTs7O0FBekVBO0FBNkVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBSUE7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0VBOzs7QUFoT0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
