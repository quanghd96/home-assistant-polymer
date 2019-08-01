(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["ha-sidebar"],
  {
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
        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        const ironIconClass = customElements.get("iron-icon");
        let loaded = false;
        class HaIcon extends ironIconClass {
          constructor(...args) {
            super(...args);
            this._iconsetName = void 0;
          }

          listen(node, eventName, methodName) {
            super.listen(node, eventName, methodName);

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
          }
        }
        customElements.define("ha-icon", HaIcon);

        /***/
      },

    /***/ "./src/components/ha-sidebar.ts":
      /*!**************************************!*\
  !*** ./src/components/ha-sidebar.ts ***!
  \**************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _components_user_ha_user_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../components/user/ha-user-badge */ "./src/components/user/ha-user-badge.ts"
        );
        /* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../components/ha-menu-button */ "./src/components/ha-menu-button.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../common/const */ "./src/common/const.ts"
        );
        /* harmony import */ var _external_app_external_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../external_app/external_config */ "./src/external_app/external_config.ts"
        );
        /* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../data/persistent_notification */ "./src/data/persistent_notification.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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

        const SHOW_AFTER_SPACER = ["config", "developer-tools"];

        const computeUrl = (urlPath) => `/${urlPath}`;

        const SUPPORT_SCROLL_IF_NEEDED =
          "scrollIntoViewIfNeeded" in document.body;
        const SORT_VALUE = {
          map: 1,
          logbook: 2,
          history: 3,
          "developer-tools": 9,
          configuration: 10,
        };

        const panelSorter = (a, b) => {
          const aBuiltIn = a.component_name in SORT_VALUE;
          const bBuiltIn = b.component_name in SORT_VALUE;

          if (aBuiltIn && bBuiltIn) {
            return SORT_VALUE[a.component_name] - SORT_VALUE[b.component_name];
          }

          if (aBuiltIn) {
            return -1;
          }

          if (bBuiltIn) {
            return 1;
          } // both not built in, sort by title

          if (a.title < b.title) {
            return -1;
          }

          if (a.title > b.title) {
            return 1;
          }

          return 0;
        };

        const computePanels = (hass) => {
          const panels = hass.panels;

          if (!panels) {
            return [[], []];
          }

          const beforeSpacer = [];
          const afterSpacer = [];
          Object.values(panels).forEach((panel) => {
            if (!panel.title) {
              return;
            }

            (SHOW_AFTER_SPACER.includes(panel.component_name)
              ? afterSpacer
              : beforeSpacer
            ).push(panel);
          });
          beforeSpacer.sort(panelSorter);
          afterSpacer.sort(panelSorter);
          return [beforeSpacer, afterSpacer];
        };

        const renderPanel = (
          hass,
          panel
        ) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <a
    aria-role="option"
    href="${computeUrl(panel.url_path)}"
    data-panel="${panel.url_path}"
    tabindex="-1"
  >
    <paper-icon-item>
      <ha-icon slot="item-icon" .icon="${panel.icon}"></ha-icon>
      <span class="item-text">
        ${hass.localize(`panel.${panel.title}`) || panel.title}
      </span>
    </paper-icon-item>
  </a>
`;
        /*
         * @appliesMixin LocalizeMixin
         */

        let HaSidebar = _decorate(
          null,
          function(_initialize, _LitElement) {
            class HaSidebar extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaSidebar,
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
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )({
                      type: Boolean,
                    }),
                  ],
                  key: "alwaysExpand",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )({
                      type: Boolean,
                      reflect: true,
                    }),
                  ],
                  key: "expanded",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )({
                      type: Boolean,
                      reflect: true,
                    }),
                  ],
                  key: "expandedWidth",

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
                  key: "_defaultPage",

                  value() {
                    return (
                      localStorage.defaultPage ||
                      _common_const__WEBPACK_IMPORTED_MODULE_10__[
                        "DEFAULT_PANEL"
                      ]
                    );
                  },
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_externalConfig",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_notifications",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_expandTimeout",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_contractTimeout",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const hass = this.hass;

                    if (!hass) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    const [beforeSpacer, afterSpacer] = computePanels(hass);
                    let notificationCount = this._notifications
                      ? this._notifications.length
                      : 0;

                    for (const entityId in hass.states) {
                      if (
                        Object(
                          _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__[
                            "default"
                          ]
                        )(entityId) === "configurator"
                      ) {
                        notificationCount++;
                      }
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="menu">
        ${
          !this.narrow
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                aria-label="Sidebar Toggle"
                .icon=${hass.dockedSidebar ? "hass:menu-open" : "hass:menu"}
                @click=${this._toggleSidebar}
              ></paper-icon-button>
            `
            : ""
        }
        <span class="title">JAVIS Home</span>
      </div>
      <paper-listbox attr-for-selected="data-panel" .selected=${hass.panelUrl}>
        <a
          aria-role="option"
          href="${computeUrl(this._defaultPage)}"
          data-panel=${this._defaultPage}
          tabindex="-1"
        >
          <paper-icon-item>
            <ha-icon slot="item-icon" icon="hass:apps"></ha-icon>
            <span class="item-text">${hass.localize("panel.states")}</span>
          </paper-icon-item>
        </a>

        ${beforeSpacer.map((panel) => renderPanel(hass, panel))}
        <div class="spacer" disabled></div>

        ${afterSpacer.map((panel) => renderPanel(hass, panel))}
        ${
          this._externalConfig && this._externalConfig.hasSettingsScreen
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <a
                aria-role="option"
                aria-label="App Configuration"
                href="#external-app-configuration"
                tabindex="-1"
                @click=${this._handleExternalAppConfiguration}
              >
                <paper-icon-item>
                  <ha-icon
                    slot="item-icon"
                    icon="hass:cellphone-settings-variant"
                  ></ha-icon>
                  <span class="item-text">
                    ${hass.localize("ui.sidebar.external_app_configuration")}
                  </span>
                </paper-icon-item>
              </a>
            `
            : ""
        }
      </paper-listbox>

      <div class="divider"></div>

      <paper-icon-item
        class="notifications"
        aria-role="option"
        @click=${this._handleShowNotificationDrawer}
      >
        <ha-icon slot="item-icon" icon="hass:bell"></ha-icon>
        ${
          notificationCount > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <span class="notification-badge" slot="item-icon">
                ${notificationCount}
              </span>
            `
            : ""
        }
        <span class="item-text">
          ${hass.localize("ui.notification_drawer.title")}
        </span>
      </paper-icon-item>

      <a
        class=${Object(
          lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__[
            "classMap"
          ]
        )({
          profile: true,
          // Mimick behavior that paper-listbox provides
          "iron-selected": hass.panelUrl === "profile",
        })}
        href="/profile"
        data-panel="panel"
        tabindex="-1"
        aria-role="option"
        aria-label=${hass.localize("panel.profile")}
      >
        <paper-icon-item>
          <ha-user-badge slot="item-icon" .user=${hass.user}></ha-user-badge>

          <span class="item-text">
            ${hass.user ? hass.user.name : ""}
          </span>
        </paper-icon-item>
      </a>
      <div disabled class="bottom-spacer"></div>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "shouldUpdate",
                  value: function shouldUpdate(changedProps) {
                    if (
                      changedProps.has("expanded") ||
                      changedProps.has("expandedWidth") ||
                      changedProps.has("narrow") ||
                      changedProps.has("alwaysExpand") ||
                      changedProps.has("_externalConfig") ||
                      changedProps.has("_notifications")
                    ) {
                      return true;
                    }

                    if (!this.hass || !changedProps.has("hass")) {
                      return false;
                    }

                    const oldHass = changedProps.get("hass");

                    if (!oldHass) {
                      return true;
                    }

                    const hass = this.hass;
                    return (
                      hass.panels !== oldHass.panels ||
                      hass.panelUrl !== oldHass.panelUrl ||
                      hass.user !== oldHass.user ||
                      hass.localize !== oldHass.localize ||
                      hass.states !== oldHass.states
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaSidebar.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    if (this.hass && this.hass.auth.external) {
                      Object(
                        _external_app_external_config__WEBPACK_IMPORTED_MODULE_11__[
                          "getExternalConfig"
                        ]
                      )(this.hass.auth.external).then((conf) => {
                        this._externalConfig = conf;
                      });
                    } // On tablets, there is no hover. So we receive click and mouseenter at the
                    // same time. In that case, we're going to cancel expanding, because it is
                    // going to require another tap outside the sidebar to trigger mouseleave

                    this.addEventListener("click", () => {
                      if (this._expandTimeout) {
                        clearTimeout(this._expandTimeout);
                        this._expandTimeout = undefined;
                      }
                    });
                    this.addEventListener("mouseenter", () => {
                      this._expand();
                    });
                    this.addEventListener("mouseleave", () => {
                      this._contract();
                    });
                    Object(
                      _data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__[
                        "subscribeNotifications"
                      ]
                    )(this.hass.connection, (notifications) => {
                      this._notifications = notifications;
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(HaSidebar.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (changedProps.has("alwaysExpand") && this.alwaysExpand) {
                      this.expanded = true;
                      this.expandedWidth = true;
                    }

                    if (
                      !SUPPORT_SCROLL_IF_NEEDED ||
                      !changedProps.has("hass")
                    ) {
                      return;
                    }

                    const oldHass = changedProps.get("hass");

                    if (!oldHass || oldHass.panelUrl !== this.hass.panelUrl) {
                      const selectedEl = this.shadowRoot.querySelector(
                        ".iron-selected"
                      );

                      if (selectedEl) {
                        // @ts-ignore
                        selectedEl.scrollIntoViewIfNeeded();
                      }
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_expand",
                  value: function _expand() {
                    // We debounce it one frame, because on tablets, the mouse-enter and
                    // click event fire at the same time.
                    this._expandTimeout = window.setTimeout(() => {
                      this.expanded = true;
                      this.expandedWidth = true;
                    }, 0);

                    if (this._contractTimeout) {
                      clearTimeout(this._contractTimeout);
                      this._contractTimeout = undefined;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_contract",
                  value: function _contract() {
                    if (this._expandTimeout) {
                      clearTimeout(this._expandTimeout);
                      this._expandTimeout = undefined;
                    }

                    if (this.alwaysExpand) {
                      return;
                    }

                    this.expandedWidth = false;
                    this._contractTimeout = window.setTimeout(() => {
                      this.expanded = this.alwaysExpand || false;
                    }, 400);
                  },
                },
                {
                  kind: "method",
                  key: "_handleShowNotificationDrawer",
                  value: function _handleShowNotificationDrawer() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__[
                        "fireEvent"
                      ]
                    )(this, "hass-show-notifications");
                  },
                },
                {
                  kind: "method",
                  key: "_handleExternalAppConfiguration",
                  value: function _handleExternalAppConfiguration(ev) {
                    ev.preventDefault();
                    this.hass.auth.external.fireMessage({
                      type: "config_screen/show",
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_toggleSidebar",
                  value: function _toggleSidebar() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__[
                        "fireEvent"
                      ]
                    )(this, "hass-toggle-menu");
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        height: 100%;
        display: block;
        overflow: hidden;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(
          --sidebar-background-color,
          var(--primary-background-color)
        );
        width: 64px;
        transition: width 0.2s ease-in;
        will-change: width;
        contain: strict;
        transition-delay: 0.2s;
      }
      :host([expandedwidth]) {
        width: 256px;
      }

      .menu {
        box-sizing: border-box;
        height: 65px;
        display: flex;
        padding: 0 12px;
        border-bottom: 1px solid transparent;
        white-space: nowrap;
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        font-size: 20px;
        align-items: center;
      }
      :host([expanded]) .menu {
        width: 256px;
      }

      .menu paper-icon-button {
        color: var(--sidebar-icon-color);
      }
      :host([expanded]) .menu paper-icon-button {
        margin-right: 23px;
      }

      .title {
        display: none;
      }
      :host([expanded]) .title {
        display: initial;
      }

      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }

      paper-listbox {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: calc(100% - 196px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
      }

      a {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
      }

      paper-icon-item {
        box-sizing: border-box;
        margin: 4px 8px;
        padding-left: 12px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
        width: 48px;
      }
      :host([expanded]) paper-icon-item {
        width: 240px;
      }

      ha-icon[slot="item-icon"] {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item:before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
        transition: opacity 15ms linear;
        will-change: opacity;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item ha-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item .item-text {
        display: none;
      }
      :host([expanded]) paper-icon-item .item-text {
        display: block;
      }

      .divider {
        bottom: 112px;
        padding: 10px 0;
      }
      .divider::before {
        content: " ";
        display: block;
        height: 1px;
        background-color: var(--divider-color);
      }

      .notifications {
        cursor: pointer;
      }
      .profile {
      }
      .profile paper-icon-item {
        padding-left: 4px;
      }
      .profile .item-text {
        margin-left: 8px;
      }

      .notification-badge {
        position: absolute;
        font-weight: 400;
        bottom: 14px;
        left: 26px;
        border-radius: 50%;
        background-color: var(--primary-color);
        height: 20px;
        line-height: 20px;
        text-align: center;
        padding: 0px 6px;
        font-size: 0.65em;
        color: var(--text-primary-color);
      }

      .spacer {
        flex: 1;
        pointer-events: none;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        white-space: nowrap;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
        width: 256px;
        box-sizing: border-box;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }
    `;
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("ha-sidebar", HaSidebar);

        /***/
      },

    /***/ "./src/components/user/ha-user-badge.ts":
      /*!**********************************************!*\
  !*** ./src/components/user/ha-user-badge.ts ***!
  \**********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
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

        const computeInitials = (name) => {
          if (!name) {
            return "user";
          }

          return name
            .trim() // Split by space and take first 3 words
            .split(" ")
            .slice(0, 3) // Of each word, take first letter
            .map((s) => s.substr(0, 1))
            .join("");
        };

        let StateBadge = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-user-badge"
            ),
          ],
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
                  key: "user",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    const user = this.user;
                    const initials = user ? computeInitials(user.name) : "?";
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${initials}
    `;
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(StateBadge.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    this.toggleAttribute(
                      "long",
                      (this.user ? computeInitials(this.user.name) : "?")
                        .length > 2
                    );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
        overflow: hidden;
      }

      :host([long]) {
        font-size: 80%;
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

    /***/ "./src/external_app/external_config.ts":
      /*!*********************************************!*\
  !*** ./src/external_app/external_config.ts ***!
  \*********************************************/
      /*! exports provided: getExternalConfig */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getExternalConfig",
          function() {
            return getExternalConfig;
          }
        );
        const getExternalConfig = (bus) => {
          if (!bus.cache.cfg) {
            bus.cache.cfg = bus.sendMessage({
              type: "config/get",
            });
          }

          return bus.cache.cfg;
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc2lkZWJhci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIi4vaGEtaWNvblwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3VzZXIvaGEtdXNlci1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUGFuZWxJbmZvIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBERUZBVUxUX1BBTkVMIH0gZnJvbSBcIi4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHtcbiAgZ2V0RXh0ZXJuYWxDb25maWcsXG4gIEV4dGVybmFsQ29uZmlnLFxufSBmcm9tIFwiLi4vZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2NvbmZpZ1wiO1xuaW1wb3J0IHtcbiAgUGVyc2lzdGVudE5vdGlmaWNhdGlvbixcbiAgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyxcbn0gZnJvbSBcIi4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuXG5jb25zdCBTSE9XX0FGVEVSX1NQQUNFUiA9IFtcImNvbmZpZ1wiLCBcImRldmVsb3Blci10b29sc1wiXTtcblxuY29uc3QgY29tcHV0ZVVybCA9ICh1cmxQYXRoKSA9PiBgLyR7dXJsUGF0aH1gO1xuXG5jb25zdCBTVVBQT1JUX1NDUk9MTF9JRl9ORUVERUQgPSBcInNjcm9sbEludG9WaWV3SWZOZWVkZWRcIiBpbiBkb2N1bWVudC5ib2R5O1xuXG5jb25zdCBTT1JUX1ZBTFVFID0ge1xuICBtYXA6IDEsXG4gIGxvZ2Jvb2s6IDIsXG4gIGhpc3Rvcnk6IDMsXG4gIFwiZGV2ZWxvcGVyLXRvb2xzXCI6IDksXG4gIGNvbmZpZ3VyYXRpb246IDEwLFxufTtcblxuY29uc3QgcGFuZWxTb3J0ZXIgPSAoYSwgYikgPT4ge1xuICBjb25zdCBhQnVpbHRJbiA9IGEuY29tcG9uZW50X25hbWUgaW4gU09SVF9WQUxVRTtcbiAgY29uc3QgYkJ1aWx0SW4gPSBiLmNvbXBvbmVudF9uYW1lIGluIFNPUlRfVkFMVUU7XG5cbiAgaWYgKGFCdWlsdEluICYmIGJCdWlsdEluKSB7XG4gICAgcmV0dXJuIFNPUlRfVkFMVUVbYS5jb21wb25lbnRfbmFtZV0gLSBTT1JUX1ZBTFVFW2IuY29tcG9uZW50X25hbWVdO1xuICB9XG4gIGlmIChhQnVpbHRJbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYkJ1aWx0SW4pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICAvLyBib3RoIG5vdCBidWlsdCBpbiwgc29ydCBieSB0aXRsZVxuICBpZiAoYS50aXRsZSEgPCBiLnRpdGxlISkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS50aXRsZSEgPiBiLnRpdGxlISkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgY29tcHV0ZVBhbmVscyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogW1BhbmVsSW5mb1tdLCBQYW5lbEluZm9bXV0gPT4ge1xuICBjb25zdCBwYW5lbHMgPSBoYXNzLnBhbmVscztcbiAgaWYgKCFwYW5lbHMpIHtcbiAgICByZXR1cm4gW1tdLCBbXV07XG4gIH1cblxuICBjb25zdCBiZWZvcmVTcGFjZXI6IFBhbmVsSW5mb1tdID0gW107XG4gIGNvbnN0IGFmdGVyU3BhY2VyOiBQYW5lbEluZm9bXSA9IFtdO1xuXG4gIE9iamVjdC52YWx1ZXMocGFuZWxzKS5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgIGlmICghcGFuZWwudGl0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKFNIT1dfQUZURVJfU1BBQ0VSLmluY2x1ZGVzKHBhbmVsLmNvbXBvbmVudF9uYW1lKVxuICAgICAgPyBhZnRlclNwYWNlclxuICAgICAgOiBiZWZvcmVTcGFjZXJcbiAgICApLnB1c2gocGFuZWwpO1xuICB9KTtcblxuICBiZWZvcmVTcGFjZXIuc29ydChwYW5lbFNvcnRlcik7XG4gIGFmdGVyU3BhY2VyLnNvcnQocGFuZWxTb3J0ZXIpO1xuXG4gIHJldHVybiBbYmVmb3JlU3BhY2VyLCBhZnRlclNwYWNlcl07XG59O1xuXG5jb25zdCByZW5kZXJQYW5lbCA9IChoYXNzLCBwYW5lbCkgPT4gaHRtbGBcbiAgPGFcbiAgICBhcmlhLXJvbGU9XCJvcHRpb25cIlxuICAgIGhyZWY9XCIke2NvbXB1dGVVcmwocGFuZWwudXJsX3BhdGgpfVwiXG4gICAgZGF0YS1wYW5lbD1cIiR7cGFuZWwudXJsX3BhdGh9XCJcbiAgICB0YWJpbmRleD1cIi0xXCJcbiAgPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aGEtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgLmljb249XCIke3BhbmVsLmljb259XCI+PC9oYS1pY29uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgJHtoYXNzLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlfVxuICAgICAgPC9zcGFuPlxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICA8L2E+XG5gO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU2lkZWJhciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFsd2F5c0V4cGFuZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBleHBhbmRlZFdpZHRoID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBfZGVmYXVsdFBhZ2U/OiBzdHJpbmcgPVxuICAgIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSB8fCBERUZBVUxUX1BBTkVMO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9leHRlcm5hbENvbmZpZz86IEV4dGVybmFsQ29uZmlnO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9ub3RpZmljYXRpb25zPzogUGVyc2lzdGVudE5vdGlmaWNhdGlvbltdO1xuICBwcml2YXRlIF9leHBhbmRUaW1lb3V0PzogbnVtYmVyO1xuICBwcml2YXRlIF9jb250cmFjdFRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgaWYgKCFoYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IFtiZWZvcmVTcGFjZXIsIGFmdGVyU3BhY2VyXSA9IGNvbXB1dGVQYW5lbHMoaGFzcyk7XG5cbiAgICBsZXQgbm90aWZpY2F0aW9uQ291bnQgPSB0aGlzLl9ub3RpZmljYXRpb25zXG4gICAgICA/IHRoaXMuX25vdGlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICA6IDA7XG4gICAgZm9yIChjb25zdCBlbnRpdHlJZCBpbiBoYXNzLnN0YXRlcykge1xuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImNvbmZpZ3VyYXRvclwiKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZGViYXIgVG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAuaWNvbj0ke2hhc3MuZG9ja2VkU2lkZWJhciA/IFwiaGFzczptZW51LW9wZW5cIiA6IFwiaGFzczptZW51XCJ9XG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+SkFWSVMgSG9tZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHBhcGVyLWxpc3Rib3ggYXR0ci1mb3Itc2VsZWN0ZWQ9XCJkYXRhLXBhbmVsXCIgLnNlbGVjdGVkPSR7aGFzcy5wYW5lbFVybH0+XG4gICAgICAgIDxhXG4gICAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICBocmVmPVwiJHtjb21wdXRlVXJsKHRoaXMuX2RlZmF1bHRQYWdlKX1cIlxuICAgICAgICAgIGRhdGEtcGFuZWw9JHt0aGlzLl9kZWZhdWx0UGFnZX1cbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICA8aGEtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgaWNvbj1cImhhc3M6YXBwc1wiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+JHtoYXNzLmxvY2FsaXplKFwicGFuZWwuc3RhdGVzXCIpfTwvc3Bhbj5cbiAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgICR7YmVmb3JlU3BhY2VyLm1hcCgocGFuZWwpID0+IHJlbmRlclBhbmVsKGhhc3MsIHBhbmVsKSl9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIiBkaXNhYmxlZD48L2Rpdj5cblxuICAgICAgICAke2FmdGVyU3BhY2VyLm1hcCgocGFuZWwpID0+IHJlbmRlclBhbmVsKGhhc3MsIHBhbmVsKSl9XG4gICAgICAgICR7dGhpcy5fZXh0ZXJuYWxDb25maWcgJiYgdGhpcy5fZXh0ZXJuYWxDb25maWcuaGFzU2V0dGluZ3NTY3JlZW5cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQXBwIENvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjZXh0ZXJuYWwtYXBwLWNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUV4dGVybmFsQXBwQ29uZmlndXJhdGlvbn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2VsbHBob25lLXNldHRpbmdzLXZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zXCJcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU2hvd05vdGlmaWNhdGlvbkRyYXdlcn1cbiAgICAgID5cbiAgICAgICAgPGhhLWljb24gc2xvdD1cIml0ZW0taWNvblwiIGljb249XCJoYXNzOmJlbGxcIj48L2hhLWljb24+XG4gICAgICAgICR7bm90aWZpY2F0aW9uQ291bnQgPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1iYWRnZVwiIHNsb3Q9XCJpdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICAke25vdGlmaWNhdGlvbkNvdW50fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLm5vdGlmaWNhdGlvbl9kcmF3ZXIudGl0bGVcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4gICAgICA8YVxuICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICBwcm9maWxlOiB0cnVlLFxuICAgICAgICAgIC8vIE1pbWljayBiZWhhdmlvciB0aGF0IHBhcGVyLWxpc3Rib3ggcHJvdmlkZXNcbiAgICAgICAgICBcImlyb24tc2VsZWN0ZWRcIjogaGFzcy5wYW5lbFVybCA9PT0gXCJwcm9maWxlXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxuICAgICAgICBkYXRhLXBhbmVsPVwicGFuZWxcIlxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJwYW5lbC5wcm9maWxlXCIpfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgIDxoYS11c2VyLWJhZGdlIHNsb3Q9XCJpdGVtLWljb25cIiAudXNlcj0ke2hhc3MudXNlcn0+PC9oYS11c2VyLWJhZGdlPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgICAgICR7aGFzcy51c2VyID8gaGFzcy51c2VyLm5hbWUgOiBcIlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGRpc2FibGVkIGNsYXNzPVwiYm90dG9tLXNwYWNlclwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiZXhwYW5kZWRcIikgfHxcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJleHBhbmRlZFdpZHRoXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwibmFycm93XCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiYWx3YXlzRXhwYW5kXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX2V4dGVybmFsQ29uZmlnXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX25vdGlmaWNhdGlvbnNcIilcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQ7XG4gICAgaWYgKCFvbGRIYXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICByZXR1cm4gKFxuICAgICAgaGFzcy5wYW5lbHMgIT09IG9sZEhhc3MucGFuZWxzIHx8XG4gICAgICBoYXNzLnBhbmVsVXJsICE9PSBvbGRIYXNzLnBhbmVsVXJsIHx8XG4gICAgICBoYXNzLnVzZXIgIT09IG9sZEhhc3MudXNlciB8fFxuICAgICAgaGFzcy5sb2NhbGl6ZSAhPT0gb2xkSGFzcy5sb2NhbGl6ZSB8fFxuICAgICAgaGFzcy5zdGF0ZXMgIT09IG9sZEhhc3Muc3RhdGVzXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLmhhc3MuYXV0aC5leHRlcm5hbCkge1xuICAgICAgZ2V0RXh0ZXJuYWxDb25maWcodGhpcy5oYXNzLmF1dGguZXh0ZXJuYWwpLnRoZW4oKGNvbmYpID0+IHtcbiAgICAgICAgdGhpcy5fZXh0ZXJuYWxDb25maWcgPSBjb25mO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE9uIHRhYmxldHMsIHRoZXJlIGlzIG5vIGhvdmVyLiBTbyB3ZSByZWNlaXZlIGNsaWNrIGFuZCBtb3VzZWVudGVyIGF0IHRoZVxuICAgIC8vIHNhbWUgdGltZS4gSW4gdGhhdCBjYXNlLCB3ZSdyZSBnb2luZyB0byBjYW5jZWwgZXhwYW5kaW5nLCBiZWNhdXNlIGl0IGlzXG4gICAgLy8gZ29pbmcgdG8gcmVxdWlyZSBhbm90aGVyIHRhcCBvdXRzaWRlIHRoZSBzaWRlYmFyIHRvIHRyaWdnZXIgbW91c2VsZWF2ZVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9leHBhbmRUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9leHBhbmRUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fZXhwYW5kVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2V4cGFuZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fY29udHJhY3QoKTtcbiAgICB9KTtcbiAgICBzdWJzY3JpYmVOb3RpZmljYXRpb25zKHRoaXMuaGFzcy5jb25uZWN0aW9uLCAobm90aWZpY2F0aW9ucykgPT4ge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnM7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJhbHdheXNFeHBhbmRcIikgJiYgdGhpcy5hbHdheXNFeHBhbmQpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgdGhpcy5leHBhbmRlZFdpZHRoID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFTVVBQT1JUX1NDUk9MTF9JRl9ORUVERUQgfHwgIWNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZEhhc3MgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiaGFzc1wiKSBhcyBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkO1xuICAgIGlmICghb2xkSGFzcyB8fCBvbGRIYXNzLnBhbmVsVXJsICE9PSB0aGlzLmhhc3MucGFuZWxVcmwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRWwgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIuaXJvbi1zZWxlY3RlZFwiKTtcbiAgICAgIGlmIChzZWxlY3RlZEVsKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2VsZWN0ZWRFbC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXhwYW5kKCkge1xuICAgIC8vIFdlIGRlYm91bmNlIGl0IG9uZSBmcmFtZSwgYmVjYXVzZSBvbiB0YWJsZXRzLCB0aGUgbW91c2UtZW50ZXIgYW5kXG4gICAgLy8gY2xpY2sgZXZlbnQgZmlyZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIHRoaXMuX2V4cGFuZFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHRydWU7XG4gICAgfSwgMCk7XG4gICAgaWYgKHRoaXMuX2NvbnRyYWN0VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2NvbnRyYWN0VGltZW91dCk7XG4gICAgICB0aGlzLl9jb250cmFjdFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29udHJhY3QoKSB7XG4gICAgaWYgKHRoaXMuX2V4cGFuZFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9leHBhbmRUaW1lb3V0KTtcbiAgICAgIHRoaXMuX2V4cGFuZFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFsd2F5c0V4cGFuZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4cGFuZGVkV2lkdGggPSBmYWxzZTtcbiAgICB0aGlzLl9jb250cmFjdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5hbHdheXNFeHBhbmQgfHwgZmFsc2U7XG4gICAgfSwgNDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNob3dOb3RpZmljYXRpb25EcmF3ZXIoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1zaG93LW5vdGlmaWNhdGlvbnNcIik7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFeHRlcm5hbEFwcENvbmZpZ3VyYXRpb24oZXY6IEV2ZW50KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhhc3MuYXV0aC5leHRlcm5hbCEuZmlyZU1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJjb25maWdfc2NyZWVuL3Nob3dcIixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZVNpZGViYXIoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy10b2dnbGUtbWVudVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKFxuICAgICAgICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICAgICAgICAgIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcbiAgICAgICAgKTtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHdpZHRoO1xuICAgICAgICBjb250YWluOiBzdHJpY3Q7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWR3aWR0aF0pIHtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWVudSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIC5tZW51IHtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWljb24tY29sb3IpO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLm1lbnUgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjRyZW07XG4gICAgICAgIGhlaWdodDogMC40cmVtO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci10aHVtYi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWxpc3Rib3gge1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOTZweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItdGh1bWItY29sb3IpIHRyYW5zcGFyZW50O1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIC0tcGFwZXItaXRlbS1taW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIH1cblxuICAgICAgaGEtaWNvbltzbG90PVwiaXRlbS1pY29uXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC1pY29uLWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC4xMjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbVtwcmVzc2VkXTpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjM3O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGEuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW0gaGEtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLWljb24tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBhLmlyb24tc2VsZWN0ZWQgLml0ZW0tdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGJvdHRvbTogMTEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cbiAgICAgIC5kaXZpZGVyOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbnMge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAucHJvZmlsZSB7XG4gICAgICB9XG4gICAgICAucHJvZmlsZSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIC5pdGVtLXRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5zdWJoZWFkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAuZGV2LXRvb2xzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAuZGV2LXRvb2xzIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zaWRlYmFyXCI6IEhhU2lkZWJhcjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zaWRlYmFyXCIsIEhhU2lkZWJhcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBjb21wdXRlSW5pdGlhbHMgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBcInVzZXJcIjtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5hbWVcbiAgICAgIC50cmltKClcbiAgICAgIC8vIFNwbGl0IGJ5IHNwYWNlIGFuZCB0YWtlIGZpcnN0IDMgd29yZHNcbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5zbGljZSgwLCAzKVxuICAgICAgLy8gT2YgZWFjaCB3b3JkLCB0YWtlIGZpcnN0IGxldHRlclxuICAgICAgLm1hcCgocykgPT4gcy5zdWJzdHIoMCwgMSkpXG4gICAgICAuam9pbihcIlwiKVxuICApO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS11c2VyLWJhZGdlXCIpXG5jbGFzcyBTdGF0ZUJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB1c2VyPzogVXNlciB8IEN1cnJlbnRVc2VyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy51c2VyO1xuICAgIGNvbnN0IGluaXRpYWxzID0gdXNlciA/IGNvbXB1dGVJbml0aWFscyh1c2VyLm5hbWUpIDogXCI/XCI7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2luaXRpYWxzfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoXG4gICAgICBcImxvbmdcIixcbiAgICAgICh0aGlzLnVzZXIgPyBjb21wdXRlSW5pdGlhbHModGhpcy51c2VyLm5hbWUpIDogXCI/XCIpLmxlbmd0aCA+IDJcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbG9uZ10pIHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdXNlci1iYWRnZVwiOiBTdGF0ZUJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFeHRlcm5hbE1lc3NhZ2luZyB9IGZyb20gXCIuL2V4dGVybmFsX21lc3NhZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsQ29uZmlnIHtcbiAgaGFzU2V0dGluZ3NTY3JlZW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFeHRlcm5hbENvbmZpZyA9IChcbiAgYnVzOiBFeHRlcm5hbE1lc3NhZ2luZ1xuKTogUHJvbWlzZTxFeHRlcm5hbENvbmZpZz4gPT4ge1xuICBpZiAoIWJ1cy5jYWNoZS5jZmcpIHtcbiAgICBidXMuY2FjaGUuY2ZnID0gYnVzLnNlbmRNZXNzYWdlPEV4dGVybmFsQ29uZmlnPih7XG4gICAgICB0eXBlOiBcImNvbmZpZy9nZXRcIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYnVzLmNhY2hlLmNmZztcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBOztBQUVBOzs7O0FBVkE7QUFnQkE7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUlBO0FBQ0E7O0FBTEE7OztBQVdBOzs7QUFHQTtBQUNBOzs7OztBQUtBOzs7O0FBSUE7OztBQUdBO0FBQ0E7Ozs7OztBQU9BOzs7Ozs7OztBQVFBOzs7O0FBZkE7Ozs7Ozs7O0FBNEJBOzs7QUFHQTs7QUFHQTs7QUFIQTs7QUFRQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7OztBQVNBOzs7QUFHQTtBQUNBOztBQUVBOzs7OztBQXpGQTtBQStGQTs7OztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNk1BOzs7QUFwY0E7QUFDQTtBQTRjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2pCQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0JBOzs7QUF0Q0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
