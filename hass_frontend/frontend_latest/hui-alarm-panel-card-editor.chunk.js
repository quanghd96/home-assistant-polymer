(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-alarm-panel-card-editor"],
  {
    /***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
        /* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
            "html"
          ]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
          is: "paper-icon-item",
          behaviors: [
            _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__[
              "PaperItemBehavior"
            ],
          ],
        });

        /***/
      },

    /***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
      /*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
            "html"
          ]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
          is: "paper-item-body",
        });

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

    /***/ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts":
      /*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/config-elements-style.ts ***!
  \*****************************************************************************/
      /*! exports provided: configElementStyle */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "configElementStyle",
          function() {
            return configElementStyle;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );

        const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "html"
        ]`
  <style>
    paper-toggle-button {
      padding-top: 16px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

        /***/
      },

    /***/ "./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts":
      /*!***********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts ***!
  \***********************************************************************************/
      /*! exports provided: HuiAlarmPanelCardEditor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiAlarmPanelCardEditor",
          function() {
            return HuiAlarmPanelCardEditor;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts"
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

        const cardConfigStruct = Object(
          _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"]
        )({
          type: "string",
          entity: "string?",
          name: "string?",
          states: "array?",
        });
        let HuiAlarmPanelCardEditor = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-alarm-panel-card-editor"
            ),
          ],
          function(_initialize, _LitElement) {
            class HuiAlarmPanelCardEditor extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HuiAlarmPanelCardEditor,
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
                  key: "_config",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "setConfig",
                  value: function setConfig(config) {
                    config = cardConfigStruct(config);
                    this._config = config;
                  },
                },
                {
                  kind: "get",
                  key: "_entity",
                  value: function _entity() {
                    return this._config.entity || "";
                  },
                },
                {
                  kind: "get",
                  key: "_name",
                  value: function _name() {
                    return this._config.name || "";
                  },
                },
                {
                  kind: "get",
                  key: "_states",
                  value: function _states() {
                    return this._config.states || [];
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
                    }

                    const states = [
                      "arm_home",
                      "arm_away",
                      "arm_night",
                      "arm_custom_bypass",
                    ];
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${
        _config_elements_style__WEBPACK_IMPORTED_MODULE_6__[
          "configElementStyle"
        ]
      }
      <div class="card-config">
        <div class="side-by-side">
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <ha-entity-picker
            .hass="${this.hass}"
            .value="${this._entity}"
            .configValue=${"entity"}
            domain-filter="alarm_control_panel"
            @change="${this._valueChanged}"
            allow-custom-entity
          ></ha-entity-picker>
        </div>
        <span>Used States</span> ${this._states.map((state, index) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="states">
              <paper-item>${state}</paper-item>
              <ha-icon
                class="deleteState"
                .value="${index}"
                icon="hass:close"
                @click=${this._stateRemoved}
              ></ha-icon>
            </div>
          `;
        })}
        <paper-dropdown-menu
          label="Available States"
          @value-changed="${this._stateAdded}"
        >
          <paper-listbox slot="dropdown-content">
            ${states.map((state) => {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-item>${state}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .states {
        display: flex;
        flex-direction: row;
      }
      .deleteState {
        visibility: hidden;
      }
      .states:hover > .deleteState {
        visibility: visible;
      }
      ha-icon {
        padding-top: 12px;
      }
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_stateRemoved",
                  value: function _stateRemoved(ev) {
                    if (!this._config || !this._states || !this.hass) {
                      return;
                    }

                    const target = ev.target;
                    const index = Number(target.value);

                    if (index > -1) {
                      const newStates = this._states;
                      newStates.splice(index, 1);
                      this._config = Object.assign({}, this._config, {
                        states: newStates,
                      });
                      Object(
                        _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                          "fireEvent"
                        ]
                      )(this, "config-changed", {
                        config: this._config,
                      });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_stateAdded",
                  value: function _stateAdded(ev) {
                    if (!this._config || !this.hass) {
                      return;
                    }

                    const target = ev.target;

                    if (
                      !target.value ||
                      this._states.indexOf(target.value) >= 0
                    ) {
                      return;
                    }

                    const newStates = this._states;
                    newStates.push(target.value);
                    this._config = Object.assign({}, this._config, {
                      states: newStates,
                    });
                    target.value = "";
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                        "fireEvent"
                      ]
                    )(this, "config-changed", {
                      config: this._config,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function _valueChanged(ev) {
                    if (!this._config || !this.hass) {
                      return;
                    }

                    const target = ev.target;

                    if (this[`_${target.configValue}`] === target.value) {
                      return;
                    }

                    if (target.configValue) {
                      if (target.value === "") {
                        delete this._config[target.configValue];
                      } else {
                        this._config = Object.assign({}, this._config, {
                          [target.configValue]: target.value,
                        });
                      }
                    }

                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__[
                        "fireEvent"
                      ]
                    )(this, "config-changed", {
                      config: this._config,
                    });
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWFsYXJtLXBhbmVsLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2NvbmZpZy1lbGVtZW50cy1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWFsYXJtLXBhbmVsLWNhcmQtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXG4gIDxzdHlsZT5cbiAgICBwYXBlci10b2dnbGUtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5zdWZmaXgge1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG5gO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7IEVudGl0aWVzRWRpdG9yRXZlbnQsIEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdFbGVtZW50U3R5bGUgfSBmcm9tIFwiLi9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgeyBBbGFybVBhbmVsQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgZW50aXR5OiBcInN0cmluZz9cIixcbiAgbmFtZTogXCJzdHJpbmc/XCIsXG4gIHN0YXRlczogXCJhcnJheT9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1hbGFybS1wYW5lbC1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUFsYXJtUGFuZWxDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBBbGFybVBhbmVsQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogQWxhcm1QYW5lbENhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfc3RhdGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5zdGF0ZXMgfHwgW107XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVzID0gW1wiYXJtX2hvbWVcIiwgXCJhcm1fYXdheVwiLCBcImFybV9uaWdodFwiLCBcImFybV9jdXN0b21fYnlwYXNzXCJdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wibmFtZVwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgICAgZG9tYWluLWZpbHRlcj1cImFsYXJtX2NvbnRyb2xfcGFuZWxcIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPlVzZWQgU3RhdGVzPC9zcGFuPiAke3RoaXMuX3N0YXRlcy5tYXAoKHN0YXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke3N0YXRlfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZVN0YXRlXCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3N0YXRlUmVtb3ZlZH1cbiAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGA7XG4gICAgICAgIH0pfVxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIGxhYmVsPVwiQXZhaWxhYmxlIFN0YXRlc1wiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3N0YXRlQWRkZWR9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAke3N0YXRlcy5tYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7c3RhdGV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnN0YXRlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gICAgICAuZGVsZXRlU3RhdGUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuc3RhdGVzOmhvdmVyID4gLmRlbGV0ZVN0YXRlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIGhhLWljb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGVSZW1vdmVkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX3N0YXRlcyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIodGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgbmV3U3RhdGVzID0gdGhpcy5fc3RhdGVzO1xuICAgICAgbmV3U3RhdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgc3RhdGVzOiBuZXdTdGF0ZXMsXG4gICAgICB9O1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZUFkZGVkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBpZiAoIXRhcmdldC52YWx1ZSB8fCB0aGlzLl9zdGF0ZXMuaW5kZXhPZih0YXJnZXQudmFsdWUpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3U3RhdGVzID0gdGhpcy5fc3RhdGVzO1xuICAgIG5ld1N0YXRlcy5wdXNoKHRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgc3RhdGVzOiBuZXdTdGF0ZXMsXG4gICAgfTtcbiAgICB0YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3JcIjogSHVpQWxhcm1QYW5lbENhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBNEJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW9DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQVBBO0FBV0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBekNBO0FBOENBO0FBNUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErRUE7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFlQTtBQTlGQTtBQUFBO0FBQUE7QUFBQTtBQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFoSEE7QUFBQTtBQUFBO0FBQUE7QUFtSEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWxJQTtBQUFBO0FBQUE7QUFBQTtBQXFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF2SkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
