(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-entity-button-card-editor~hui-picture-card-editor"],
  {
    /***/ "./src/components/ha-combo-box.js":
      /*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        class HaComboBox extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="hass:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
          }

          static get properties() {
            return {
              allowCustomValue: Boolean,
              items: {
                type: Object,
                observer: "_itemsChanged",
              },
              _items: Object,
              itemLabelPath: String,
              itemValuePath: String,
              autofocus: Boolean,
              label: String,
              opened: {
                type: Boolean,
                value: false,
                observer: "_openedChanged",
              },
              value: {
                type: String,
                notify: true,
              },
            };
          }

          _openedChanged(newVal) {
            if (!newVal) {
              this._items = this.items;
            }
          }

          _itemsChanged(newVal) {
            if (!this.opened) {
              this._items = newVal;
            }
          }

          _computeToggleIcon(opened) {
            return opened ? "hass:menu-up" : "hass:menu-down";
          }

          _computeItemLabel(item, itemLabelPath) {
            return itemLabelPath ? item[itemLabelPath] : item;
          }

          _fireChanged(ev) {
            ev.stopPropagation();
            this.fire("change");
          }
        }

        customElements.define("ha-combo-box", HaComboBox);

        /***/
      },

    /***/ "./src/components/ha-service-picker.js":
      /*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
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
        /* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-combo-box */ "./src/components/ha-combo-box.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaServicePicker extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <ha-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></ha-combo-box>
    `;
          }

          static get properties() {
            return {
              hass: {
                type: Object,
                observer: "_hassChanged",
              },
              _services: Array,
              value: {
                type: String,
                notify: true,
              },
            };
          }

          _hassChanged(hass, oldHass) {
            if (!hass) {
              this._services = [];
              return;
            }

            if (oldHass && hass.services === oldHass.services) {
              return;
            }

            const result = [];
            Object.keys(hass.services)
              .sort()
              .forEach((domain) => {
                const services = Object.keys(hass.services[domain]).sort();

                for (let i = 0; i < services.length; i++) {
                  result.push(`${domain}.${services[i]}`);
                }
              });
            this._services = result;
          }
        }

        customElements.define("ha-service-picker", HaServicePicker);

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
      /*! exports provided: isEntityId */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isEntityId",
          function() {
            return isEntityId;
          }
        );
        function isEntityId(value) {
          if (typeof value !== "string") {
            return "entity id should be a string";
          }

          if (!value.includes(".")) {
            return "entity id should be in the format 'domain.entity'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/is-icon.ts":
      /*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
      /*! exports provided: isIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isIcon",
          function() {
            return isIcon;
          }
        );
        function isIcon(value) {
          if (typeof value !== "string") {
            return "icon should be a string";
          }

          if (!value.includes(":")) {
            return "icon should be in the format 'mdi:icon'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/struct.ts":
      /*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
      /*! exports provided: struct */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "struct",
          function() {
            return struct;
          }
        );
        /* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! superstruct */ "./node_modules/superstruct/lib/index.es.js"
        );
        /* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts"
        );
        /* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts"
        );

        const struct = Object(
          superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"]
        )({
          types: {
            "entity-id":
              _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
            icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
          },
        });

        /***/
      },

    /***/ "./src/panels/lovelace/components/hui-action-editor.ts":
      /*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-action-editor.ts ***!
  \*************************************************************/
      /*! exports provided: HuiActionEditor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiActionEditor",
          function() {
            return HuiActionEditor;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        let HuiActionEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-action-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            class HuiActionEditor extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HuiActionEditor,
              d: [
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "config",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "label",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "actions",
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
                  kind: "get",
                  key: "_action",
                  value: function _action() {
                    return this.config.action || "";
                  },
                },
                {
                  kind: "get",
                  key: "_navigation_path",
                  value: function _navigation_path() {
                    const config = this.config;
                    return config.navigation_path || "";
                  },
                },
                {
                  kind: "get",
                  key: "_service",
                  value: function _service() {
                    const config = this.config;
                    return config.service || "";
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass || !this.actions) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-dropdown-menu
        .label="${this.label}"
        .configValue="${"action"}"
        @value-changed="${this._valueChanged}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.actions.indexOf(this._action)}"
        >
          ${this.actions.map((action) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item>${action}</paper-item>
            `;
          })}
        </paper-listbox>
      </paper-dropdown-menu>
      ${
        this._action === "navigate"
          ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <paper-input
              label="Navigation Path"
              .value="${this._navigation_path}"
              .configValue="${"navigation_path"}"
              @value-changed="${this._valueChanged}"
            ></paper-input>
          `
          : ""
      }
      ${
        this.config && this.config.action === "call-service"
          ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <ha-service-picker
              .hass="${this.hass}"
              .value="${this._service}"
              .configValue="${"service"}"
              @value-changed="${this._valueChanged}"
            ></ha-service-picker>
            <h3>Toggle Editor to input Service Data</h3>
          `
          : ""
      }
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function _valueChanged(ev) {
                    if (!this.hass) {
                      return;
                    }

                    const target = ev.target;

                    if (
                      this.config &&
                      this.config[this[`${target.configValue}`]] ===
                        target.value
                    ) {
                      return;
                    }

                    if (target.configValue === "action") {
                      this.config = {
                        action: "none",
                      };
                    }

                    if (target.configValue) {
                      this.config = Object.assign({}, this.config, {
                        [target.configValue]: target.value,
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__[
                          "fireEvent"
                        ]
                      )(this, "action-changed");
                    }
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/types.ts":
      /*!*********************************************!*\
  !*** ./src/panels/lovelace/editor/types.ts ***!
  \*********************************************/
      /*! exports provided: actionConfigStruct */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "actionConfigStruct",
          function() {
            return actionConfigStruct;
          }
        );
        /* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts"
        );

        const actionConfigStruct = Object(
          _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"]
        )({
          action: "string",
          navigation_path: "string?",
          service: "string?",
          service_data: "object?",
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWVudGl0eS1idXR0b24tY2FyZC1lZGl0b3J+aHVpLXBpY3R1cmUtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFDb21ib0JveCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW1zPVwiW1tfaXRlbXNdXVwiXG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cIltbaXRlbVZhbHVlUGF0aF1dXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIG9wZW5lZD1cInt7b3BlbmVkfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJbW2FsbG93Q3VzdG9tVmFsdWVdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9maXJlQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1cz1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIltbdmFsdWVdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIXZhbHVlXV1cIlxuICAgICAgICAgICAgPkNsZWFyPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJbW19jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWl0ZW1zLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5Ub2dnbGU8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlOiBCb29sZWFuLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaXRlbXNDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX2l0ZW1zOiBPYmplY3QsXG4gICAgICBpdGVtTGFiZWxQYXRoOiBTdHJpbmcsXG4gICAgICBpdGVtVmFsdWVQYXRoOiBTdHJpbmcsXG4gICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29wZW5lZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgX2l0ZW1zQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG5ld1ZhbDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKSB7XG4gICAgcmV0dXJuIG9wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCI7XG4gIH1cblxuICBfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgcmV0dXJuIGl0ZW1MYWJlbFBhdGggPyBpdGVtW2l0ZW1MYWJlbFBhdGhdIDogaXRlbTtcbiAgfVxuXG4gIF9maXJlQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb21iby1ib3hcIiwgSGFDb21ib0JveCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbWJvLWJveFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTZXJ2aWNlUGlja2VyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbWJvLWJveFxuICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuc2VydmljZS1waWNrZXIuc2VydmljZScpXV1cIlxuICAgICAgICBpdGVtcz1cIltbX3NlcnZpY2VzXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIlwiXG4gICAgICA+PC9oYS1jb21iby1ib3g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9oYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9zZXJ2aWNlczogQXJyYXksXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9oYXNzQ2hhbmdlZChoYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFoYXNzKSB7XG4gICAgICB0aGlzLl9zZXJ2aWNlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkSGFzcyAmJiBoYXNzLnNlcnZpY2VzID09PSBvbGRIYXNzLnNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlcylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzW2RvbWFpbl0pLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZG9tYWlufS4ke3NlcnZpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gcmVzdWx0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtcGlja2VyXCIsIEhhU2VydmljZVBpY2tlcik7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCwgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgRWRpdG9yVGFyZ2V0IH0gZnJvbSBcIi4uL2VkaXRvci90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQWN0aW9uQ29uZmlnLFxuICBOYXZpZ2F0ZUFjdGlvbkNvbmZpZyxcbiAgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWcsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiYWN0aW9uLWNoYW5nZWRcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwiYWN0aW9uLWNoYW5nZWRcIjogSEFTU0RvbUV2ZW50PHVuZGVmaW5lZD47XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktYWN0aW9uLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUFjdGlvbkVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnPzogQWN0aW9uQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgYWN0aW9ucz86IHN0cmluZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBnZXQgX2FjdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZyEuYWN0aW9uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX25hdmlnYXRpb25fcGF0aCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnISBhcyBOYXZpZ2F0ZUFjdGlvbkNvbmZpZztcbiAgICByZXR1cm4gY29uZmlnLm5hdmlnYXRpb25fcGF0aCB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zZXJ2aWNlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWchIGFzIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnO1xuICAgIHJldHVybiBjb25maWcuc2VydmljZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmxhYmVsfVwiXG4gICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJhY3Rpb25cIn1cIlxuICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy5hY3Rpb25zLmluZGV4T2YodGhpcy5fYWN0aW9uKX1cIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLmFjdGlvbnMubWFwKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2FjdGlvbn08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAke3RoaXMuX2FjdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIk5hdmlnYXRpb24gUGF0aFwiXG4gICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmF2aWdhdGlvbl9wYXRofVwiXG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJuYXZpZ2F0aW9uX3BhdGhcIn1cIlxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuYWN0aW9uID09PSBcImNhbGwtc2VydmljZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fc2VydmljZX1cIlxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2VydmljZVwifVwiXG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID48L2hhLXNlcnZpY2UtcGlja2VyPlxuICAgICAgICAgICAgPGgzPlRvZ2dsZSBFZGl0b3IgdG8gaW5wdXQgU2VydmljZSBEYXRhPC9oMz5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICB0aGlzLmNvbmZpZ1t0aGlzW2Ake3RhcmdldC5jb25maWdWYWx1ZX1gXV0gPT09IHRhcmdldC52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlID09PSBcImFjdGlvblwiKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWchLCBbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV06IHRhcmdldC52YWx1ZSB9O1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiYWN0aW9uLWNoYW5nZWRcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYWN0aW9uLWVkaXRvclwiOiBIdWlBY3Rpb25FZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExvdmVsYWNlQ2FyZENvbmZpZyxcbiAgTG92ZWxhY2VWaWV3Q29uZmlnLFxuICBBY3Rpb25Db25maWcsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IElucHV0VHlwZSB9IGZyb20gXCJ6bGliXCI7XG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWWFtbENoYW5nZWRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgeWFtbDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFZGl0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGNvbmZpZzogTG92ZWxhY2VWaWV3Q29uZmlnO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1ZhbHVlIHtcbiAgZm9ybWF0OiBcImpzb25cIiB8IFwieWFtbFwiO1xuICB2YWx1ZT86IHN0cmluZyB8IExvdmVsYWNlQ2FyZENvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFcnJvciB7XG4gIHR5cGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0aWVzRWRpdG9yRXZlbnQge1xuICBkZXRhaWw/OiB7XG4gICAgZW50aXRpZXM/OiBFbnRpdHlDb25maWdbXTtcbiAgfTtcbiAgdGFyZ2V0PzogRXZlbnRUYXJnZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yVGFyZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICB2YWx1ZT86IHN0cmluZztcbiAgaW5kZXg/OiBudW1iZXI7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBjb25maWdWYWx1ZT86IHN0cmluZztcbiAgdHlwZT86IElucHV0VHlwZTtcbiAgY29uZmlnOiBBY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFBpY2tUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIGFjdGlvbjogXCJzdHJpbmdcIixcbiAgbmF2aWdhdGlvbl9wYXRoOiBcInN0cmluZz9cIixcbiAgc2VydmljZTogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2VfZGF0YTogXCJvYmplY3Q/XCIsXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6R0E7QUFDQTtBQTBHQTs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWhEQTtBQUNBO0FBaURBOzs7Ozs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFvQkE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUdBOzs7QUFJQTtBQUNBO0FBQ0E7O0FBTkE7QUFVQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTkE7QUEzQkE7QUF1Q0E7QUFsRUE7QUFBQTtBQUFBO0FBQUE7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
