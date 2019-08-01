(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["ha-mfa-module-setup-flow"],
  {
    /***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
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
        /* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n',
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

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

        /**
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__[
            "Polymer"
          ]
        )({
          _template: Object(
            _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__[
              "html"
            ]
          )(_templateObject()),
          is: "paper-dialog-scrollable",
          properties: {
            /**
             * The dialog element that implements `Polymer.PaperDialogBehavior`
             * containing this element.
             * @type {?Node}
             */
            dialogElement: {
              type: Object,
            },
          },

          /**
           * Returns the scrolling element.
           */
          get scrollTarget() {
            return this.$.scrollable;
          },

          ready: function ready() {
            this._ensureTarget();

            this.classList.add("no-padding");
          },
          attached: function attached() {
            this._ensureTarget();

            requestAnimationFrame(this.updateScrollState.bind(this));
          },
          updateScrollState: function updateScrollState() {
            this.toggleClass("is-scrolled", this.scrollTarget.scrollTop > 0);
            this.toggleClass(
              "can-scroll",
              this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight
            );
            this.toggleClass(
              "scrolled-to-bottom",
              this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
                this.scrollTarget.scrollHeight
            );
          },
          _ensureTarget: function _ensureTarget() {
            // Read parentElement instead of parentNode in order to skip shadowRoots.
            this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
            // scrollTarget to host.

            if (
              this.dialogElement &&
              this.dialogElement.behaviors &&
              this.dialogElement.behaviors.indexOf(
                _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__[
                  "PaperDialogBehaviorImpl"
                ]
              ) >= 0
            ) {
              this.dialogElement.sizingTarget = this.scrollTarget;
              this.scrollTarget.classList.remove("fit");
            } else if (this.dialogElement) {
              this.scrollTarget.classList.add("fit");
            }
          },
        });

        /***/
      },

    /***/ "./src/components/dialog/ha-iron-focusables-helper.js":
      /*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
      /*! exports provided: HaIronFocusablesHelper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaIronFocusablesHelper",
          function() {
            return HaIronFocusablesHelper;
          }
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js"
        );
        /**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        /*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/

        var HaIronFocusablesHelper = {
          /**
           * Returns a sorted array of tabbable nodes, including the root node.
           * It searches the tabbable nodes in the light and shadow dom of the chidren,
           * sorting the result by tabindex.
           * @param {!Node} node
           * @return {!Array<!HTMLElement>}
           */
          getTabbableNodes: function getTabbableNodes(node) {
            var result = []; // If there is at least one element with tabindex > 0, we need to sort
            // the final array by tabindex.

            var needsSortByTabIndex = this._collectTabbableNodes(node, result);

            if (needsSortByTabIndex) {
              return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
                "IronFocusablesHelper"
              ]._sortByTabIndex(result);
            }

            return result;
          },

          /**
           * Searches for nodes that are tabbable and adds them to the `result` array.
           * Returns if the `result` array needs to be sorted by tabindex.
           * @param {!Node} node The starting point for the search; added to `result`
           * if tabbable.
           * @param {!Array<!HTMLElement>} result
           * @return {boolean}
           * @private
           */
          _collectTabbableNodes: function _collectTabbableNodes(node, result) {
            // If not an element or not visible, no need to explore children.
            if (
              node.nodeType !== Node.ELEMENT_NODE ||
              !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
                "IronFocusablesHelper"
              ]._isVisible(node)
            ) {
              return false;
            }

            var element =
              /** @type {!HTMLElement} */
              node;

            var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__[
              "IronFocusablesHelper"
            ]._normalizedTabIndex(element);

            var needsSort = tabIndex > 0;

            if (tabIndex >= 0) {
              result.push(element);
            } // In ShadowDOM v1, tab order is affected by the order of distrubution.
            // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
            // in ShadowDOM v0 tab order is not affected by the distrubution order,
            // in fact getTabbableNodes(#root) returns [#B, #A].
            //  <div id="root">
            //   <!-- shadow -->
            //     <slot name="a">
            //     <slot name="b">
            //   <!-- /shadow -->
            //   <input id="A" slot="a">
            //   <input id="B" slot="b" tabindex="1">
            //  </div>
            // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.

            var children;

            if (
              element.localName === "content" ||
              element.localName === "slot"
            ) {
              children = Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__[
                  "dom"
                ]
              )(element).getDistributedNodes();
            } else {
              // /////////////////////////
              // Use shadow root if possible, will check for distributed nodes.
              // THIS IS THE CHANGED LINE
              children = Object(
                _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__[
                  "dom"
                ]
              )(element.shadowRoot || element.root || element).children; // /////////////////////////
            }

            for (var i = 0; i < children.length; i++) {
              // Ensure method is always invoked to collect tabbable children.
              needsSort =
                this._collectTabbableNodes(children[i], result) || needsSort;
            }

            return needsSort;
          },
        };

        /***/
      },

    /***/ "./src/components/dialog/ha-paper-dialog.ts":
      /*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
      /*! exports provided: HaPaperDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperDialog",
          function() {
            return HaPaperDialog;
          }
        );
        /* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js"
        );
        /* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        // tslint:disable-next-line

        var paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

        var haTabFixBehaviorImpl = {
          get _focusableNodes() {
            return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__[
              "HaIronFocusablesHelper"
            ].getTabbableNodes(this);
          },
        }; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
        // export class HaPaperDialog extends paperDialogClass {}
        // @ts-ignore

        var HaPaperDialog =
          /*#__PURE__*/
          (function(_mixinBehaviors) {
            _inherits(HaPaperDialog, _mixinBehaviors);

            function HaPaperDialog() {
              _classCallCheck(this, HaPaperDialog);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperDialog).apply(this, arguments)
              );
            }

            return HaPaperDialog;
          })(
            Object(
              _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__[
                "mixinBehaviors"
              ]
            )([haTabFixBehaviorImpl], paperDialogClass)
          );
        customElements.define("ha-paper-dialog", HaPaperDialog);

        /***/
      },

    /***/ "./src/panels/profile/ha-mfa-module-setup-flow.js":
      /*!********************************************************!*\
  !*** ./src/panels/profile/ha-mfa-module-setup-flow.js ***!
  \********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts"
        );
        /* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../components/ha-form */ "./src/components/ha-form.js"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../components/ha-markdown */ "./src/components/ha-markdown.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style include="ha-style-dialog">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-markdown img:first-child:last-child,\n        ha-markdown svg:first-child:last-child {\n          display: block;\n          margin: 0 auto;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .init-spinner {\n          padding: 10px 100px 34px;\n          text-align: center;\n        }\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      </style>\n      <ha-paper-dialog\n        id="dialog"\n        with-backdrop=""\n        opened="{{_opened}}"\n        on-opened-changed="_openedChanged"\n      >\n        <h2>\n          <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n            [[localize(\'ui.panel.profile.mfa_setup.title_aborted\')]]\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n            [[localize(\'ui.panel.profile.mfa_setup.title_success\')]]\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n            [[_computeStepTitle(localize, _step)]]\n          </template>\n        </h2>\n        <paper-dialog-scrollable>\n          <template is="dom-if" if="[[_errorMsg]]">\n            <div class="error">[[_errorMsg]]</div>\n          </template>\n          <template is="dom-if" if="[[!_step]]">\n            <div class="init-spinner">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is="dom-if" if="[[_step]]">\n            <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n              <ha-markdown\n                content="[[_computeStepAbortedReason(localize, _step)]]"\n              ></ha-markdown>\n            </template>\n\n            <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n              <p>\n                [[localize(\'ui.panel.profile.mfa_setup.step_done\', \'step\',\n                _step.title)]]\n              </p>\n            </template>\n\n            <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n              <template\n                is="dom-if"\n                if="[[_computeStepDescription(localize, _step)]]"\n              >\n                <ha-markdown\n                  content="[[_computeStepDescription(localize, _step)]]"\n                  allow-svg\n                ></ha-markdown>\n              </template>\n\n              <ha-form\n                data="{{_stepData}}"\n                schema="[[_step.data_schema]]"\n                error="[[_step.errors]]"\n                compute-label="[[_computeLabelCallback(localize, _step)]]"\n                compute-error="[[_computeErrorCallback(localize, _step)]]"\n              ></ha-form>\n            </template>\n          </template>\n        </paper-dialog-scrollable>\n        <div class="buttons">\n          <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n            <mwc-button on-click="_flowDone"\n              >[[localize(\'ui.panel.profile.mfa_setup.close\')]]</mwc-button\n            >\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n            <mwc-button on-click="_flowDone"\n              >[[localize(\'ui.panel.profile.mfa_setup.close\')]]</mwc-button\n            >\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n            <template is="dom-if" if="[[_loading]]">\n              <div class="submit-spinner">\n                <paper-spinner active></paper-spinner>\n              </div>\n            </template>\n            <template is="dom-if" if="[[!_loading]]">\n              <mwc-button on-click="_submitStep"\n                >[[localize(\'ui.panel.profile.mfa_setup.submit\')]]</mwc-button\n              >\n            </template>\n          </template>\n        </div>\n      </ha-paper-dialog>\n    ',
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
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

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        var instance = 0;
        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin EventsMixin
         */

        var HaMfaModuleSetupFlow =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaMfaModuleSetupFlow, _LocalizeMixin);

            function HaMfaModuleSetupFlow() {
              _classCallCheck(this, HaMfaModuleSetupFlow);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaMfaModuleSetupFlow).apply(this, arguments)
              );
            }

            _createClass(
              HaMfaModuleSetupFlow,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaMfaModuleSetupFlow.prototype),
                      "ready",
                      this
                    ).call(this);

                    this.addEventListener("keypress", function(ev) {
                      if (ev.keyCode === 13) {
                        _this._submitStep();
                      }
                    });
                  },
                },
                {
                  key: "showDialog",
                  value: function showDialog(_ref) {
                    var _this2 = this;

                    var hass = _ref.hass,
                      continueFlowId = _ref.continueFlowId,
                      mfaModuleId = _ref.mfaModuleId,
                      dialogClosedCallback = _ref.dialogClosedCallback;
                    this.hass = hass;
                    this._instance = instance++;
                    this._dialogClosedCallback = dialogClosedCallback;
                    this._createdFromHandler = !!mfaModuleId;
                    this._loading = true;
                    this._opened = true;
                    var fetchStep = continueFlowId
                      ? this.hass.callWS({
                          type: "auth/setup_mfa",
                          flow_id: continueFlowId,
                        })
                      : this.hass.callWS({
                          type: "auth/setup_mfa",
                          mfa_module_id: mfaModuleId,
                        });
                    var curInstance = this._instance;
                    fetchStep.then(function(step) {
                      if (curInstance !== _this2._instance) return;

                      _this2._processStep(step);

                      _this2._loading = false; // When the flow changes, center the dialog.
                      // Don't do it on each step or else the dialog keeps bouncing.

                      setTimeout(function() {
                        return _this2.$.dialog.center();
                      }, 0);
                    });
                  },
                },
                {
                  key: "_submitStep",
                  value: function _submitStep() {
                    var _this3 = this;

                    this._loading = true;
                    this._errorMsg = null;
                    var curInstance = this._instance;
                    this.hass
                      .callWS({
                        type: "auth/setup_mfa",
                        flow_id: this._step.flow_id,
                        user_input: this._stepData,
                      })
                      .then(
                        function(step) {
                          if (curInstance !== _this3._instance) return;

                          _this3._processStep(step);

                          _this3._loading = false;
                        },
                        function(err) {
                          _this3._errorMsg =
                            (err && err.body && err.body.message) ||
                            "Unknown error occurred";
                          _this3._loading = false;
                        }
                      );
                  },
                },
                {
                  key: "_processStep",
                  value: function _processStep(step) {
                    if (!step.errors) step.errors = {};
                    this._step = step; // We got a new form if there are no errors.

                    if (Object.keys(step.errors).length === 0) {
                      this._stepData = {};
                    }
                  },
                },
                {
                  key: "_flowDone",
                  value: function _flowDone() {
                    this._opened = false;
                    var flowFinished =
                      this._step &&
                      ["create_entry", "abort"].includes(this._step.type);

                    if (
                      this._step &&
                      !flowFinished &&
                      this._createdFromHandler
                    ) {
                      // console.log('flow not finish');
                    }

                    this._dialogClosedCallback({
                      flowFinished: flowFinished,
                    });

                    this._errorMsg = null;
                    this._step = null;
                    this._stepData = {};
                    this._dialogClosedCallback = null;
                  },
                },
                {
                  key: "_equals",
                  value: function _equals(a, b) {
                    return a === b;
                  },
                },
                {
                  key: "_openedChanged",
                  value: function _openedChanged(ev) {
                    // Closed dialog by clicking on the overlay
                    if (this._step && !ev.detail.value) {
                      this._flowDone();
                    }
                  },
                },
                {
                  key: "_computeStepAbortedReason",
                  value: function _computeStepAbortedReason(localize, step) {
                    return localize(
                      "component.auth.mfa_setup."
                        .concat(step.handler, ".abort.")
                        .concat(step.reason)
                    );
                  },
                },
                {
                  key: "_computeStepTitle",
                  value: function _computeStepTitle(localize, step) {
                    return (
                      localize(
                        "component.auth.mfa_setup."
                          .concat(step.handler, ".step.")
                          .concat(step.step_id, ".title")
                      ) || "Setup Multi-factor Authentication"
                    );
                  },
                },
                {
                  key: "_computeStepDescription",
                  value: function _computeStepDescription(localize, step) {
                    var args = [
                      "component.auth.mfa_setup."
                        .concat(step.handler, ".step.")
                        .concat(step.step_id, ".description"),
                    ];
                    var placeholders = step.description_placeholders || {};
                    Object.keys(placeholders).forEach(function(key) {
                      args.push(key);
                      args.push(placeholders[key]);
                    });
                    return localize.apply(void 0, args);
                  },
                },
                {
                  key: "_computeLabelCallback",
                  value: function _computeLabelCallback(localize, step) {
                    // Returns a callback for ha-form to calculate labels per schema object
                    return function(schema) {
                      return (
                        localize(
                          "component.auth.mfa_setup."
                            .concat(step.handler, ".step.")
                            .concat(step.step_id, ".data.")
                            .concat(schema.name)
                        ) || schema.name
                      );
                    };
                  },
                },
                {
                  key: "_computeErrorCallback",
                  value: function _computeErrorCallback(localize, step) {
                    // Returns a callback for ha-form to calculate error messages
                    return function(error) {
                      return (
                        localize(
                          "component.auth.mfa_setup."
                            .concat(step.handler, ".error.")
                            .concat(error)
                        ) || error
                      );
                    };
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      _hass: Object,
                      _dialogClosedCallback: Function,
                      _instance: Number,
                      _loading: {
                        type: Boolean,
                        value: false,
                      },
                      // Error message when can't talk to server etc
                      _errorMsg: String,
                      _opened: {
                        type: Boolean,
                        value: false,
                      },
                      _step: {
                        type: Object,
                        value: null,
                      },

                      /*
                       * Store user entered data.
                       */
                      _stepData: Object,
                    };
                  },
                },
              ]
            );

            return HaMfaModuleSetupFlow;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"]
            )(
              Object(
                _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-mfa-module-setup-flow", HaMfaModuleSetupFlow);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLW1mYS1tb2R1bGUtc2V0dXAtZmxvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltEaWFsb2dzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvZGlhbG9ncy5odG1sKVxuXG5gcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGltcGxlbWVudHMgYSBzY3JvbGxpbmcgYXJlYSB1c2VkIGluIGEgTWF0ZXJpYWwgRGVzaWduXG5kaWFsb2cuIEl0IHNob3dzIGEgZGl2aWRlciBhdCB0aGUgdG9wIGFuZC9vciBib3R0b20gaW5kaWNhdGluZyBtb3JlIGNvbnRlbnQsXG5kZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLiBVc2UgdGhpcyB0b2dldGhlciB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAuXG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG5JdCBzaG93cyBhIHRvcCBkaXZpZGVyIGFmdGVyIHNjcm9sbGluZyBpZiBpdCBpcyBub3QgdGhlIGZpcnN0IGNoaWxkIGluIGl0c1xucGFyZW50IGNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYWJvdmUuIEl0IHNob3dzIGEgYm90dG9tXG5kaXZpZGVyIGlmIGl0IGlzIHNjcm9sbGFibGUgYW5kIGl0IGlzIG5vdCB0aGUgbGFzdCBjaGlsZCBpbiBpdHMgcGFyZW50XG5jb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGJlbG93LiBUaGUgYm90dG9tIGRpdmlkZXIgaXMgaGlkZGVuXG5pZiBpdCBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXG5JZiBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZWxlbWVudCBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLCByZW1lbWJlciB0byBzZXQgdGhlIGBkaWFsb2dFbGVtZW50YDpcblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbCBpZD1cIm15RGlhbG9nXCI+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPGg0PlN1Yi1oZWFkZXI8L2g0PlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICAgIDxzY3JpcHQ+XG4gICAgICB2YXIgc2Nyb2xsYWJsZSA9XG5Qb2x5bWVyLmRvbShteURpYWxvZykucXVlcnlTZWxlY3RvcigncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnKTtcbiAgICAgIHNjcm9sbGFibGUuZGlhbG9nRWxlbWVudCA9IG15RGlhbG9nO1xuICAgIDwvc2NyaXB0PlxuXG4jIyMgU3R5bGluZ1xuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCB8IE1peGluIGZvciB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IHwge31cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcy1zY3JvbGxlZDpub3QoOmZpcnN0LWNoaWxkKSk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNhbi1zY3JvbGw6bm90KC5zY3JvbGxlZC10by1ib3R0b20pOm5vdCg6bGFzdC1jaGlsZCkpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG5cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNjcm9sbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZVwiIGNsYXNzPVwic2Nyb2xsYWJsZVwiIG9uLXNjcm9sbD1cInVwZGF0ZVNjcm9sbFN0YXRlXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaWFsb2cgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmBcbiAgICAgKiBjb250YWluaW5nIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgZGlhbG9nRWxlbWVudDoge3R5cGU6IE9iamVjdH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICovXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zY3JvbGxhYmxlO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ25vLXBhZGRpbmcnKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlU2Nyb2xsU3RhdGUuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgdXBkYXRlU2Nyb2xsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLXNjcm9sbGVkJywgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID4gMCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ2Nhbi1zY3JvbGwnLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdzY3JvbGxlZC10by1ib3R0b20nLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPj1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gIH0sXG5cbiAgX2Vuc3VyZVRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmVhZCBwYXJlbnRFbGVtZW50IGluc3RlYWQgb2YgcGFyZW50Tm9kZSBpbiBvcmRlciB0byBza2lwIHNoYWRvd1Jvb3RzLlxuICAgIHRoaXMuZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nRWxlbWVudCB8fCB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gQ2hlY2sgaWYgZGlhbG9nIGltcGxlbWVudHMgcGFwZXItZGlhbG9nLWJlaGF2aW9yLiBJZiBub3QsIGZpdFxuICAgIC8vIHNjcm9sbFRhcmdldCB0byBob3N0LlxuICAgIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQgJiYgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycyAmJlxuICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzLmluZGV4T2YoUGFwZXJEaWFsb2dCZWhhdmlvckltcGwpID49IDApIHtcbiAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5zaXppbmdUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2dFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmaXQnKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmxldCBpbnN0YW5jZSA9IDA7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFNZmFNb2R1bGVTZXR1cEZsb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2dcIj5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBpbWc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCxcbiAgICAgICAgaGEtbWFya2Rvd24gc3ZnOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5pdC1zcGlubmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDM0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQtc3Bpbm5lciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICBpZD1cImRpYWxvZ1wiXG4gICAgICAgIHdpdGgtYmFja2Ryb3A9XCJcIlxuICAgICAgICBvcGVuZWQ9XCJ7e19vcGVuZWR9fVwiXG4gICAgICAgIG9uLW9wZW5lZC1jaGFuZ2VkPVwiX29wZW5lZENoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAudGl0bGVfYWJvcnRlZCcpXV1cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdjcmVhdGVfZW50cnknKV1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYV9zZXR1cC50aXRsZV9zdWNjZXNzJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Zvcm0nKV1dXCI+XG4gICAgICAgICAgICBbW19jb21wdXRlU3RlcFRpdGxlKGxvY2FsaXplLCBfc3RlcCldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2Vycm9yTXNnXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3N0ZXBdXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3N0ZXBdXVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiW1tfY29tcHV0ZVN0ZXBBYm9ydGVkUmVhc29uKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2NyZWF0ZV9lbnRyeScpXV1cIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuc3RlcF9kb25lJywgJ3N0ZXAnLFxuICAgICAgICAgICAgICAgIF9zdGVwLnRpdGxlKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdmb3JtJyldXVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgICAgaWY9XCJbW19jb21wdXRlU3RlcERlc2NyaXB0aW9uKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGEtbWFya2Rvd25cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJbW19jb21wdXRlU3RlcERlc2NyaXB0aW9uKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgICAgICBhbGxvdy1zdmdcbiAgICAgICAgICAgICAgICA+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgICAgIGRhdGE9XCJ7e19zdGVwRGF0YX19XCJcbiAgICAgICAgICAgICAgICBzY2hlbWE9XCJbW19zdGVwLmRhdGFfc2NoZW1hXV1cIlxuICAgICAgICAgICAgICAgIGVycm9yPVwiW1tfc3RlcC5lcnJvcnNdXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1sYWJlbD1cIltbX2NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1lcnJvcj1cIltbX2NvbXB1dGVFcnJvckNhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgID48L2hhLWZvcm0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnY3JlYXRlX2VudHJ5JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2xvYWRpbmddXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zdWJtaXRTdGVwXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuc3VibWl0JyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX2hhc3M6IE9iamVjdCxcbiAgICAgIF9kaWFsb2dDbG9zZWRDYWxsYmFjazogRnVuY3Rpb24sXG4gICAgICBfaW5zdGFuY2U6IE51bWJlcixcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9vcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX3N0ZXA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIC8qXG4gICAgICAgKiBTdG9yZSB1c2VyIGVudGVyZWQgZGF0YS5cbiAgICAgICAqL1xuICAgICAgX3N0ZXBEYXRhOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0U3RlcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0RpYWxvZyh7IGhhc3MsIGNvbnRpbnVlRmxvd0lkLCBtZmFNb2R1bGVJZCwgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgfSkge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZSsrO1xuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrID0gZGlhbG9nQ2xvc2VkQ2FsbGJhY2s7XG4gICAgdGhpcy5fY3JlYXRlZEZyb21IYW5kbGVyID0gISFtZmFNb2R1bGVJZDtcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZmV0Y2hTdGVwID0gY29udGludWVGbG93SWRcbiAgICAgID8gdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJhdXRoL3NldHVwX21mYVwiLFxuICAgICAgICAgIGZsb3dfaWQ6IGNvbnRpbnVlRmxvd0lkLFxuICAgICAgICB9KVxuICAgICAgOiB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgICB0eXBlOiBcImF1dGgvc2V0dXBfbWZhXCIsXG4gICAgICAgICAgbWZhX21vZHVsZV9pZDogbWZhTW9kdWxlSWQsXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIGZldGNoU3RlcC50aGVuKChzdGVwKSA9PiB7XG4gICAgICBpZiAoY3VySW5zdGFuY2UgIT09IHRoaXMuX2luc3RhbmNlKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gV2hlbiB0aGUgZmxvdyBjaGFuZ2VzLCBjZW50ZXIgdGhlIGRpYWxvZy5cbiAgICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuJC5kaWFsb2cuY2VudGVyKCksIDApO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1Ym1pdFN0ZXAoKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fZXJyb3JNc2cgPSBudWxsO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9zZXR1cF9tZmFcIixcbiAgICAgICAgZmxvd19pZDogdGhpcy5fc3RlcC5mbG93X2lkLFxuICAgICAgICB1c2VyX2lucHV0OiB0aGlzLl9zdGVwRGF0YSxcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKHN0ZXApID0+IHtcbiAgICAgICAgICBpZiAoY3VySW5zdGFuY2UgIT09IHRoaXMuX2luc3RhbmNlKSByZXR1cm47XG5cbiAgICAgICAgICB0aGlzLl9wcm9jZXNzU3RlcChzdGVwKTtcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLl9lcnJvck1zZyA9XG4gICAgICAgICAgICAoZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5Lm1lc3NhZ2UpIHx8IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIF9wcm9jZXNzU3RlcChzdGVwKSB7XG4gICAgaWYgKCFzdGVwLmVycm9ycykgc3RlcC5lcnJvcnMgPSB7fTtcbiAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgICAvLyBXZSBnb3QgYSBuZXcgZm9ybSBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgIGlmIChPYmplY3Qua2V5cyhzdGVwLmVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zdGVwRGF0YSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIF9mbG93RG9uZSgpIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICBjb25zdCBmbG93RmluaXNoZWQgPVxuICAgICAgdGhpcy5fc3RlcCAmJiBbXCJjcmVhdGVfZW50cnlcIiwgXCJhYm9ydFwiXS5pbmNsdWRlcyh0aGlzLl9zdGVwLnR5cGUpO1xuXG4gICAgaWYgKHRoaXMuX3N0ZXAgJiYgIWZsb3dGaW5pc2hlZCAmJiB0aGlzLl9jcmVhdGVkRnJvbUhhbmRsZXIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmbG93IG5vdCBmaW5pc2gnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayh7XG4gICAgICBmbG93RmluaXNoZWQsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9lcnJvck1zZyA9IG51bGw7XG4gICAgdGhpcy5fc3RlcCA9IG51bGw7XG4gICAgdGhpcy5fc3RlcERhdGEgPSB7fTtcbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayA9IG51bGw7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKGV2KSB7XG4gICAgLy8gQ2xvc2VkIGRpYWxvZyBieSBjbGlja2luZyBvbiB0aGUgb3ZlcmxheVxuICAgIGlmICh0aGlzLl9zdGVwICYmICFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHRoaXMuX2Zsb3dEb25lKCk7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVTdGVwQWJvcnRlZFJlYXNvbihsb2NhbGl6ZSwgc3RlcCkge1xuICAgIHJldHVybiBsb2NhbGl6ZShcbiAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LmFib3J0LiR7c3RlcC5yZWFzb259YFxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVN0ZXBUaXRsZShsb2NhbGl6ZSwgc3RlcCkge1xuICAgIHJldHVybiAoXG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApIHx8IFwiU2V0dXAgTXVsdGktZmFjdG9yIEF1dGhlbnRpY2F0aW9uXCJcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGVwRGVzY3JpcHRpb24obG9jYWxpemUsIHN0ZXApIHtcbiAgICBjb25zdCBhcmdzID0gW1xuICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uc3RlcC4ke1xuICAgICAgICBzdGVwLnN0ZXBfaWRcbiAgICAgIH0uZGVzY3JpcHRpb25gLFxuICAgIF07XG4gICAgY29uc3QgcGxhY2Vob2xkZXJzID0gc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnMgfHwge307XG4gICAgT2JqZWN0LmtleXMocGxhY2Vob2xkZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGFyZ3MucHVzaChrZXkpO1xuICAgICAgYXJncy5wdXNoKHBsYWNlaG9sZGVyc1trZXldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxpemUoLi4uYXJncyk7XG4gIH1cblxuICBfY29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUsIHN0ZXApIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtcbiAgICAgICAgICBzY2hlbWEubmFtZVxuICAgICAgICB9YFxuICAgICAgKSB8fCBzY2hlbWEubmFtZTtcbiAgfVxuXG4gIF9jb21wdXRlRXJyb3JDYWxsYmFjayhsb2NhbGl6ZSwgc3RlcCkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3IgaGEtZm9ybSB0byBjYWxjdWxhdGUgZXJyb3IgbWVzc2FnZXNcbiAgICByZXR1cm4gKGVycm9yKSA9PlxuICAgICAgbG9jYWxpemUoYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uZXJyb3IuJHtlcnJvcn1gKSB8fFxuICAgICAgZXJyb3I7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsIEhhTWZhTW9kdWxlU2V0dXBGbG93KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQTZDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQWtKQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7QUF0U0E7QUFDQTtBQStHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQTFCQTtBQTRCQTs7OztBQWhKQTtBQUNBO0FBeVNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
