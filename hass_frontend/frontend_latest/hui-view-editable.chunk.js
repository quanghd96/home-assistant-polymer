(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["hui-view-editable"],
  {
    /***/ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js":
      /*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-button-behavior.js ***!
  \************************************************************************/
      /*! exports provided: PaperButtonBehaviorImpl, PaperButtonBehavior */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperButtonBehaviorImpl",
          function() {
            return PaperButtonBehaviorImpl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "PaperButtonBehavior",
          function() {
            return PaperButtonBehavior;
          }
        );
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js"
        );
        /* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js"
        );
        /* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js"
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

        /** @polymerBehavior PaperButtonBehavior */

        const PaperButtonBehaviorImpl = {
          properties: {
            /**
             * The z-depth of this element, from 0-5. Setting to 0 will remove the
             * shadow, and each increasing number greater than 0 will be "deeper"
             * than the last.
             *
             * @attribute elevation
             * @type number
             * @default 1
             */
            elevation: {
              type: Number,
              reflectToAttribute: true,
              readOnly: true,
            },
          },
          observers: [
            "_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)",
            "_computeKeyboardClass(receivedFocusFromKeyboard)",
          ],
          hostAttributes: {
            role: "button",
            tabindex: "0",
            animated: true,
          },
          _calculateElevation: function() {
            var e = 1;

            if (this.disabled) {
              e = 0;
            } else if (this.active || this.pressed) {
              e = 4;
            } else if (this.receivedFocusFromKeyboard) {
              e = 3;
            }

            this._setElevation(e);
          },
          _computeKeyboardClass: function(receivedFocusFromKeyboard) {
            this.toggleClass("keyboard-focus", receivedFocusFromKeyboard);
          },

          /**
           * In addition to `IronButtonState` behavior, when space key goes down,
           * create a ripple down effect.
           *
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyDownHandler: function(event) {
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronButtonStateImpl"
            ]._spaceKeyDownHandler.call(this, event); // Ensure that there is at most one ripple when the space key is held down.

            if (this.hasRipple() && this.getRipple().ripples.length < 1) {
              this._ripple.uiDownAction();
            }
          },

          /**
           * In addition to `IronButtonState` behavior, when space key goes up,
           * create a ripple up effect.
           *
           * @param {!KeyboardEvent} event .
           */
          _spaceKeyUpHandler: function(event) {
            _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronButtonStateImpl"
            ]._spaceKeyUpHandler.call(this, event);

            if (this.hasRipple()) {
              this._ripple.uiUpAction();
            }
          },
        };
        /** @polymerBehavior */

        const PaperButtonBehavior = [
          _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__[
            "IronButtonState"
          ],
          _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__[
            "IronControlState"
          ],
          _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
            "PaperRippleBehavior"
          ],
          PaperButtonBehaviorImpl,
        ];

        /***/
      },

    /***/ "./node_modules/@polymer/paper-fab/paper-fab.js":
      /*!******************************************************!*\
  !*** ./node_modules/@polymer/paper-fab/paper-fab.js ***!
  \******************************************************/
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
        /* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js"
        );
        /* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js"
        );
        /* harmony import */ var _polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/paper-behaviors/paper-button-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

        const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__[
          "html"
        ]`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Floating Action
Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)

`paper-fab` is a floating action button. It contains an image placed in the
center and comes in two sizes: regular size and a smaller size by applying the
attribute `mini`. When the user touches the button, a ripple effect emanates
from the center of the button.

You may import `iron-icons` to use with this element, or provide a URL to a
custom icon. See `iron-iconset` for more information about how to use a custom
icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-fab icon="add"></paper-fab>
    <paper-fab mini icon="favorite"></paper-fab>
    <paper-fab src="star.png"></paper-fab>


### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-fab-background` | The background color of the button | `--accent-color`
`--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
`--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
`--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
`--paper-fab` | Mixin applied to the button | `{}`
`--paper-fab-mini` | Mixin applied to a mini button | `{}`
`--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
`--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
`--paper-fab-label` | Mixin applied to the label within the button | `{}`

@group Paper Elements
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-fab",
          behaviors: [
            _polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__[
              "PaperButtonBehavior"
            ],
          ],
          properties: {
            /**
             * The URL of an image for the icon. If the src property is specified,
             * the icon property should not be.
             */
            src: {
              type: String,
              value: "",
            },

            /**
             * Specifies the icon name or index in the set of icons available in
             * the icon's icon set. If the icon property is specified,
             * the src property should not be.
             */
            icon: {
              type: String,
              value: "",
            },

            /**
             * Set this to true to style this is a "mini" FAB.
             */
            mini: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
            },

            /**
             * The label displayed in the badge. The label is centered, and ideally
             * should have very few characters.
             */
            label: {
              type: String,
              observer: "_labelChanged",
            },
          },
          _labelChanged: function() {
            this.setAttribute("aria-label", this.label);
          },
          _computeIsIconFab: function(icon, src) {
            return icon.length > 0 || src.length > 0;
          },
        });

        /***/
      },

    /***/ "./src/panels/lovelace/components/hui-card-options.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
      /*! exports provided: HuiCardOptions */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiCardOptions",
          function() {
            return HuiCardOptions;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts"
        );
        /* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts"
        );
        /* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts"
        );
        /* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts"
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

        let HuiCardOptions = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "hui-card-options"
            ),
          ],
          function(_initialize, _LitElement) {
            class HuiCardOptions extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HuiCardOptions,
              d: [
                {
                  kind: "field",
                  key: "cardConfig",
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
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "lovelace",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "path",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <slot></slot>
      <div class="options">
        <div class="primary-actions">
          <mwc-button @click="${this._editCard}"
            >${this.hass.localize(
              "ui.panel.lovelace.editor.edit_card.edit"
            )}</mwc-button
          >
        </div>
        <div class="secondary-actions">
          <paper-icon-button
            title="Move card down"
            class="move-arrow"
            icon="hass:arrow-down"
            @click="${this._cardDown}"
            ?disabled="${this.lovelace.config.views[this.path[0]].cards
              .length ===
              this.path[1] + 1}"
          ></paper-icon-button>
          <paper-icon-button
            title="Move card up"
            class="move-arrow"
            icon="hass:arrow-up"
            @click="${this._cardUp}"
            ?disabled="${this.path[1] === 0}"
          ></paper-icon-button>
          <paper-menu-button
            horizontal-align="right"
            vertical-align="bottom"
            vertical-offset="40"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item @click="${this._moveCard}"
                >${this.hass.localize(
                  "ui.panel.lovelace.editor.edit_card.move"
                )}</paper-item
              >
              <paper-item @click="${this._deleteCard}"
                >${this.hass.localize(
                  "ui.panel.lovelace.editor.edit_card.delete"
                )}</paper-item
              >
            </paper-listbox>
          </paper-menu-button>
        </div>
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
      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        background: var(--paper-card-background-color, white);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
        display: flex;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      paper-icon-button {
        color: var(--primary-text-color);
      }

      paper-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
      }
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_editCard",
                  value: function _editCard() {
                    Object(
                      _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__[
                        "showEditCardDialog"
                      ]
                    )(this, {
                      lovelace: this.lovelace,
                      path: this.path,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_cardUp",
                  value: function _cardUp() {
                    const lovelace = this.lovelace;
                    const path = this.path;
                    lovelace.saveConfig(
                      Object(
                        _editor_config_util__WEBPACK_IMPORTED_MODULE_7__[
                          "swapCard"
                        ]
                      )(lovelace.config, path, [path[0], path[1] - 1])
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_cardDown",
                  value: function _cardDown() {
                    const lovelace = this.lovelace;
                    const path = this.path;
                    lovelace.saveConfig(
                      Object(
                        _editor_config_util__WEBPACK_IMPORTED_MODULE_7__[
                          "swapCard"
                        ]
                      )(lovelace.config, path, [path[0], path[1] + 1])
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_moveCard",
                  value: function _moveCard() {
                    Object(
                      _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__[
                        "showMoveCardViewDialog"
                      ]
                    )(this, {
                      path: this.path,
                      lovelace: this.lovelace,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_deleteCard",
                  value: function _deleteCard() {
                    Object(
                      _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__[
                        "confDeleteCard"
                      ]
                    )(this.lovelace, this.path);
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
      /*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
      /*! exports provided: showMoveCardViewDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showMoveCardViewDialog",
          function() {
            return showMoveCardViewDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        let registeredDialog = false;

        const registerEditCardDialog = (element) =>
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "register-dialog", {
            dialogShowEvent: "show-move-card-view",
            dialogTag: "hui-dialog-move-card-view",
            dialogImport: () =>
              Promise.all(
                /*! import() | hui-dialog-move-card-view */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("hui-dialog-move-card-view"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts"
                )
              ),
          });

        const showMoveCardViewDialog = (element, moveCardViewDialogParams) => {
          if (!registeredDialog) {
            registeredDialog = true;
            registerEditCardDialog(element);
          }

          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-move-card-view", moveCardViewDialogParams);
        };

        /***/
      },

    /***/ "./src/panels/lovelace/editor/delete-card.ts":
      /*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
      /*! exports provided: confDeleteCard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "confDeleteCard",
          function() {
            return confDeleteCard;
          }
        );
        /* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts"
        );

        async function confDeleteCard(lovelace, path) {
          if (!confirm("Are you sure you want to delete this card?")) {
            return;
          }

          try {
            await lovelace.saveConfig(
              Object(_config_util__WEBPACK_IMPORTED_MODULE_0__["deleteCard"])(
                lovelace.config,
                path
              )
            );
          } catch (err) {
            alert(`Deleting failed: ${err.message}`);
          }
        }

        /***/
      },

    /***/ "./src/panels/lovelace/hui-view-editable.ts":
      /*!**************************************************!*\
  !*** ./src/panels/lovelace/hui-view-editable.ts ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts"
        );
        // hui-view dependencies for when in edit mode.

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWJ1dHRvbi1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9kZWxldGUtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2h1aS12aWV3LWVkaXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGUsIElyb25CdXR0b25TdGF0ZUltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQnV0dG9uQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckJ1dHRvbkJlaGF2aW9ySW1wbCA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoaXMgZWxlbWVudCwgZnJvbSAwLTUuIFNldHRpbmcgdG8gMCB3aWxsIHJlbW92ZSB0aGVcbiAgICAgKiBzaGFkb3csIGFuZCBlYWNoIGluY3JlYXNpbmcgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwIHdpbGwgYmUgXCJkZWVwZXJcIlxuICAgICAqIHRoYW4gdGhlIGxhc3QuXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIGVsZXZhdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBlbGV2YXRpb246IHt0eXBlOiBOdW1iZXIsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ19jYWxjdWxhdGVFbGV2YXRpb24oZm9jdXNlZCwgZGlzYWJsZWQsIGFjdGl2ZSwgcHJlc3NlZCwgcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknLFxuICAgICdfY29tcHV0ZUtleWJvYXJkQ2xhc3MocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknXG4gIF0sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnYnV0dG9uJywgdGFiaW5kZXg6ICcwJywgYW5pbWF0ZWQ6IHRydWV9LFxuXG4gIF9jYWxjdWxhdGVFbGV2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gMTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgZSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZSB8fCB0aGlzLnByZXNzZWQpIHtcbiAgICAgIGUgPSA0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgICBlID0gMztcbiAgICB9XG4gICAgdGhpcy5fc2V0RWxldmF0aW9uKGUpO1xuICB9LFxuXG4gIF9jb21wdXRlS2V5Ym9hcmRDbGFzczogZnVuY3Rpb24ocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2tleWJvYXJkLWZvY3VzJywgcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluIGFkZGl0aW9uIHRvIGBJcm9uQnV0dG9uU3RhdGVgIGJlaGF2aW9yLCB3aGVuIHNwYWNlIGtleSBnb2VzIGRvd24sXG4gICAqIGNyZWF0ZSBhIHJpcHBsZSBkb3duIGVmZmVjdC5cbiAgICpcbiAgICogQHBhcmFtIHshS2V5Ym9hcmRFdmVudH0gZXZlbnQgLlxuICAgKi9cbiAgX3NwYWNlS2V5RG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbkJ1dHRvblN0YXRlSW1wbC5fc3BhY2VLZXlEb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGVyZSBpcyBhdCBtb3N0IG9uZSByaXBwbGUgd2hlbiB0aGUgc3BhY2Uga2V5IGlzIGhlbGQgZG93bi5cbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSAmJiB0aGlzLmdldFJpcHBsZSgpLnJpcHBsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5fcmlwcGxlLnVpRG93bkFjdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW4gYWRkaXRpb24gdG8gYElyb25CdXR0b25TdGF0ZWAgYmVoYXZpb3IsIHdoZW4gc3BhY2Uga2V5IGdvZXMgdXAsXG4gICAqIGNyZWF0ZSBhIHJpcHBsZSB1cCBlZmZlY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IUtleWJvYXJkRXZlbnR9IGV2ZW50IC5cbiAgICovXG4gIF9zcGFjZUtleVVwSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uQnV0dG9uU3RhdGVJbXBsLl9zcGFjZUtleVVwSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLnVpVXBBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJCdXR0b25CZWhhdmlvciA9IFtcbiAgSXJvbkJ1dHRvblN0YXRlLFxuICBJcm9uQ29udHJvbFN0YXRlLFxuICBQYXBlclJpcHBsZUJlaGF2aW9yLFxuICBQYXBlckJ1dHRvbkJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJCdXR0b25CZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWJ1dHRvbi1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgOmhvc3Qge1xuICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG5cbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1iYWNrZ3JvdW5kLCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgei1pbmRleDogMDtcblxuICAgICAgLyogTk9URTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGUgdmFsdWUgXFxgdHJhbnNwYXJlbnRcXGAuICovXG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBAYXBwbHkgLS1wYXBlci1mYWI7XG4gICAgfVxuXG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIDpob3N0KFttaW5pXSkge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1taW5pO1xuICAgIH1cblxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1mYWItZGlzYWJsZWQtdGV4dCwgdmFyKC0tcGFwZXItZ3JleS01MDApKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLCB2YXIoLS1wYXBlci1ncmV5LTMwMCkpO1xuXG4gICAgICBAYXBwbHkgLS1wYXBlci1mYWItZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaXJvbi1pY29uIHtcbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1pcm9uLWljb247XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIEBhcHBseSAtLXBhcGVyLWZhYi1sYWJlbDtcbiAgICB9XG5cbiAgICA6aG9zdCgua2V5Ym9hcmQtZm9jdXMpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWZhYi1rZXlib2FyZC1mb2N1cy1iYWNrZ3JvdW5kLCB2YXIoLS1wYXBlci1waW5rLTkwMCkpO1xuICAgIH1cblxuICAgIDpob3N0KFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICB9XG5cbiAgICA6aG9zdChbZWxldmF0aW9uPVwiMlwiXSkge1xuICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgfVxuXG4gICAgOmhvc3QoW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgIH1cblxuICAgIDpob3N0KFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICB9XG5cbiAgICA6aG9zdChbZWxldmF0aW9uPVwiNVwiXSkge1xuICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxpcm9uLWljb24gaWQ9XCJpY29uXCIgaGlkZGVuXFwkPVwie3shX2NvbXB1dGVJc0ljb25GYWIoaWNvbiwgc3JjKX19XCIgc3JjPVwiW1tzcmNdXVwiIGljb249XCJbW2ljb25dXVwiPjwvaXJvbi1pY29uPlxuICA8c3BhbiBoaWRkZW5cXCQ9XCJ7e19jb21wdXRlSXNJY29uRmFiKGljb24sIHNyYyl9fVwiPnt7bGFiZWx9fTwvc3Bhbj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRmxvYXRpbmcgQWN0aW9uXG5CdXR0b25dKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLWZsb2F0aW5nLWFjdGlvbi1idXR0b24uaHRtbClcblxuYHBhcGVyLWZhYmAgaXMgYSBmbG9hdGluZyBhY3Rpb24gYnV0dG9uLiBJdCBjb250YWlucyBhbiBpbWFnZSBwbGFjZWQgaW4gdGhlXG5jZW50ZXIgYW5kIGNvbWVzIGluIHR3byBzaXplczogcmVndWxhciBzaXplIGFuZCBhIHNtYWxsZXIgc2l6ZSBieSBhcHBseWluZyB0aGVcbmF0dHJpYnV0ZSBgbWluaWAuIFdoZW4gdGhlIHVzZXIgdG91Y2hlcyB0aGUgYnV0dG9uLCBhIHJpcHBsZSBlZmZlY3QgZW1hbmF0ZXNcbmZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uLlxuXG5Zb3UgbWF5IGltcG9ydCBgaXJvbi1pY29uc2AgdG8gdXNlIHdpdGggdGhpcyBlbGVtZW50LCBvciBwcm92aWRlIGEgVVJMIHRvIGFcbmN1c3RvbSBpY29uLiBTZWUgYGlyb24taWNvbnNldGAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIHVzZSBhIGN1c3RvbVxuaWNvbiBzZXQuXG5cbkV4YW1wbGU6XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29ucy9pcm9uLWljb25zLmpzJztcbiAgICA8L3NjcmlwdD5cblxuICAgIDxwYXBlci1mYWIgaWNvbj1cImFkZFwiPjwvcGFwZXItZmFiPlxuICAgIDxwYXBlci1mYWIgbWluaSBpY29uPVwiZmF2b3JpdGVcIj48L3BhcGVyLWZhYj5cbiAgICA8cGFwZXItZmFiIHNyYz1cInN0YXIucG5nXCI+PC9wYXBlci1mYWI+XG5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWZhYi1iYWNrZ3JvdW5kYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b24gfCBgLS1hY2NlbnQtY29sb3JgXG5gLS1wYXBlci1mYWIta2V5Ym9hcmQtZm9jdXMtYmFja2dyb3VuZGAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYnV0dG9uIHdoZW4gZm9jdXNlZCB8IGAtLXBhcGVyLXBpbmstOTAwYFxuYC0tcGFwZXItZmFiLWRpc2FibGVkLWJhY2tncm91bmRgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJ1dHRvbiB3aGVuIGl0J3MgZGlzYWJsZWQgfCBgLS1wYXBlci1ncmV5LTMwMGBcbmAtLXBhcGVyLWZhYi1kaXNhYmxlZC10ZXh0YCB8IFRoZSB0ZXh0IGNvbG9yIG9mIHRoZSBidXR0b24gd2hlbiBpdCdzIGRpc2FibGVkIHwgYC0tcGFwZXItZ3JleS01MDBgXG5gLS1wYXBlci1mYWJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZmFiLW1pbmlgIHwgTWl4aW4gYXBwbGllZCB0byBhIG1pbmkgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZmFiLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gYSBkaXNhYmxlZCBidXR0b24gfCBge31gXG5gLS1wYXBlci1mYWItaXJvbi1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlyb24taWNvbiB3aXRoaW4gdGhlIGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWZhYi1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aXRoaW4gdGhlIGJ1dHRvbiB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLWZhYicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJCdXR0b25CZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgYW4gaW1hZ2UgZm9yIHRoZSBpY29uLiBJZiB0aGUgc3JjIHByb3BlcnR5IGlzIHNwZWNpZmllZCxcbiAgICAgKiB0aGUgaWNvbiBwcm9wZXJ0eSBzaG91bGQgbm90IGJlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgaWNvbiBuYW1lIG9yIGluZGV4IGluIHRoZSBzZXQgb2YgaWNvbnMgYXZhaWxhYmxlIGluXG4gICAgICogdGhlIGljb24ncyBpY29uIHNldC4gSWYgdGhlIGljb24gcHJvcGVydHkgaXMgc3BlY2lmaWVkLFxuICAgICAqIHRoZSBzcmMgcHJvcGVydHkgc2hvdWxkIG5vdCBiZS5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBzdHlsZSB0aGlzIGlzIGEgXCJtaW5pXCIgRkFCLlxuICAgICAqL1xuICAgIG1pbmk6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBiYWRnZS4gVGhlIGxhYmVsIGlzIGNlbnRlcmVkLCBhbmQgaWRlYWxseVxuICAgICAqIHNob3VsZCBoYXZlIHZlcnkgZmV3IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgbGFiZWw6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAnX2xhYmVsQ2hhbmdlZCd9XG4gIH0sXG5cbiAgX2xhYmVsQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxhYmVsKTtcbiAgfSxcblxuICBfY29tcHV0ZUlzSWNvbkZhYjogZnVuY3Rpb24oaWNvbiwgc3JjKSB7XG4gICAgcmV0dXJuIChpY29uLmxlbmd0aCA+IDApIHx8IChzcmMubGVuZ3RoID4gMCk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHsgc2hvd0VkaXRDYXJkRGlhbG9nIH0gZnJvbSBcIi4uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IGNvbmZEZWxldGVDYXJkIH0gZnJvbSBcIi4uL2VkaXRvci9kZWxldGUtY2FyZFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzd2FwQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvY29uZmlnLXV0aWxcIjtcbmltcG9ydCB7IHNob3dNb3ZlQ2FyZFZpZXdEaWFsb2cgfSBmcm9tIFwiLi4vZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctbW92ZS1jYXJkLXZpZXctZGlhbG9nXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWNhcmQtb3B0aW9uc1wiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRPcHRpb25zIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBjYXJkQ29uZmlnPzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgcGF0aD86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fZWRpdENhcmR9XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5lZGl0XCJcbiAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeS1hY3Rpb25zXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICB0aXRsZT1cIk1vdmUgY2FyZCBkb3duXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW92ZS1hcnJvd1wiXG4gICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy1kb3duXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fY2FyZERvd259XCJcbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5sb3ZlbGFjZSEuY29uZmlnLnZpZXdzW3RoaXMucGF0aCFbMF1dLmNhcmRzIVxuICAgICAgICAgICAgICAubGVuZ3RoID09PVxuICAgICAgICAgICAgICB0aGlzLnBhdGghWzFdICsgMX1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgdXBcIlxuICAgICAgICAgICAgY2xhc3M9XCJtb3ZlLWFycm93XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LXVwXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fY2FyZFVwfVwiXG4gICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMucGF0aCFbMV0gPT09IDB9XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbj1cImJvdHRvbVwiXG4gICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCI0MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz1cIiR7dGhpcy5fbW92ZUNhcmR9XCJcbiAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLm1vdmVcIlxuICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQGNsaWNrPVwiJHt0aGlzLl9kZWxldGVDYXJkfVwiXG4gICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5kZWxldGVcIlxuICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBkaXYub3B0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAtNHB4LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAucHJpbWFyeS1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ubW92ZS1hcnJvd1tkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbS5oZWFkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0Q2FyZCgpOiB2b2lkIHtcbiAgICBzaG93RWRpdENhcmREaWFsb2codGhpcywge1xuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRVcCgpOiB2b2lkIHtcbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2UhO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGxvdmVsYWNlLnNhdmVDb25maWcoXG4gICAgICBzd2FwQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgsIFtwYXRoWzBdLCBwYXRoWzFdIC0gMV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmREb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHN3YXBDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gKyAxXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW92ZUNhcmQoKTogdm9pZCB7XG4gICAgc2hvd01vdmVDYXJkVmlld0RpYWxvZyh0aGlzLCB7XG4gICAgICBwYXRoOiB0aGlzLnBhdGghLFxuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25mRGVsZXRlQ2FyZCh0aGlzLmxvdmVsYWNlISwgdGhpcy5wYXRoISk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLW9wdGlvbnNcIjogSHVpQ2FyZE9wdGlvbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMge1xuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdO1xuICBsb3ZlbGFjZTogTG92ZWxhY2U7XG59XG5cbmNvbnN0IHJlZ2lzdGVyRWRpdENhcmREaWFsb2cgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBFdmVudCA9PlxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsXG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIiksXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd01vdmVDYXJkVmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtczogTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgcmVnaXN0ZXJFZGl0Q2FyZERpYWxvZyhlbGVtZW50KTtcbiAgfVxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRlbGV0ZUNhcmQgfSBmcm9tIFwiLi9jb25maWctdXRpbFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZkRlbGV0ZUNhcmQoXG4gIGxvdmVsYWNlOiBMb3ZlbGFjZSxcbiAgcGF0aDogW251bWJlciwgbnVtYmVyXVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXJkP1wiKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGF3YWl0IGxvdmVsYWNlLnNhdmVDb25maWcoZGVsZXRlQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYWxlcnQoYERlbGV0aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgfVxufVxuIiwiLy8gaHVpLXZpZXcgZGVwZW5kZW5jaWVzIGZvciB3aGVuIGluIGVkaXQgbW9kZS5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9odWktY2FyZC1vcHRpb25zXCI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFhQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTlEQTtBQWlFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEyRkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7QUFJQTtBQUNBOzs7Ozs7OztBQVVBO0FBQ0E7Ozs7OztBQVFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7O0FBSUE7QUFDQTs7Ozs7O0FBM0NBO0FBb0RBO0FBOURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2Q0E7QUE5R0E7QUFBQTtBQUFBO0FBQUE7QUFpSEE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXJIQTtBQUFBO0FBQUE7QUFBQTtBQXdIQTtBQUNBO0FBQ0E7QUFHQTtBQTdIQTtBQUFBO0FBQUE7QUFBQTtBQWdJQTtBQUNBO0FBQ0E7QUFHQTtBQXJJQTtBQUFBO0FBQUE7QUFBQTtBQXdJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBNUlBO0FBQUE7QUFBQTtBQUFBO0FBK0lBO0FBQ0E7QUFoSkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0EsMlpBQ0E7QUFKQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
