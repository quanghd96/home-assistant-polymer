(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-webhook-manage-dialog"],
  {
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

        const HaIronFocusablesHelper = {
          /**
           * Returns a sorted array of tabbable nodes, including the root node.
           * It searches the tabbable nodes in the light and shadow dom of the chidren,
           * sorting the result by tabindex.
           * @param {!Node} node
           * @return {!Array<!HTMLElement>}
           */
          getTabbableNodes: function(node) {
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
          _collectTabbableNodes: function(node, result) {
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

        // tslint:disable-next-line

        const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

        const haTabFixBehaviorImpl = {
          get _focusableNodes() {
            return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__[
              "HaIronFocusablesHelper"
            ].getTabbableNodes(this);
          },
        }; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
        // export class HaPaperDialog extends paperDialogClass {}
        // @ts-ignore

        class HaPaperDialog extends Object(
          _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__[
            "mixinBehaviors"
          ]
        )([haTabFixBehaviorImpl], paperDialogClass) {}
        customElements.define("ha-paper-dialog", HaPaperDialog);

        /***/
      },

    /***/ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts":
      /*!************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts ***!
  \************************************************************************************/
      /*! exports provided: DialogManageCloudhook */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DialogManageCloudhook",
          function() {
            return DialogManageCloudhook;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"
        );
        /* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../resources/styles */ "./src/resources/styles.ts"
        );

        // This is not a duplicate import, one is for types, one is for element.
        // tslint:disable-next-line

        const inputLabel = "Public URL – Click to copy to clipboard";
        class DialogManageCloudhook extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          constructor(...args) {
            super(...args);
            this.hass = void 0;
            this._params = void 0;
          }

          static get properties() {
            return {
              _params: {},
            };
          }

          async showDialog(params) {
            this._params = params; // Wait till dialog is rendered.

            await this.updateComplete;

            this._dialog.open();
          }

          render() {
            if (!this._params) {
              return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
            }

            const { webhook, cloudhook } = this._params;
            const docsUrl =
              webhook.domain === "automation"
                ? "https://www.home-assistant.io/docs/automation/trigger/#webhook-trigger"
                : `https://www.home-assistant.io/components/${webhook.domain}/`;
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-paper-dialog with-backdrop>
        <h2>Webhook for ${webhook.name}</h2>
        <div>
          <p>The webhook is available at the following url:</p>
          <paper-input
            label="${inputLabel}"
            value="${cloudhook.cloudhook_url}"
            @click="${this._copyClipboard}"
            @blur="${this._restoreLabel}"
          ></paper-input>
          <p>
            ${
              cloudhook.managed
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  This webhook is managed by an integration and cannot be
                  disabled.
                `
                : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  If you no longer want to use this webhook, you can
                  <button class="link" @click="${this._disableWebhook}">
                    disable it</button
                  >.
                `
            }
          </p>
        </div>

        <div class="paper-dialog-buttons">
          <a href="${docsUrl}" target="_blank">
            <mwc-button>VIEW DOCUMENTATION</mwc-button>
          </a>
          <mwc-button @click="${this._closeDialog}">CLOSE</mwc-button>
        </div>
      </ha-paper-dialog>
    `;
          }

          get _dialog() {
            return this.shadowRoot.querySelector("ha-paper-dialog");
          }

          get _paperInput() {
            return this.shadowRoot.querySelector("paper-input");
          }

          _closeDialog() {
            this._dialog.close();
          }

          async _disableWebhook() {
            if (!confirm("Are you sure you want to disable this webhook?")) {
              return;
            }

            this._params.disableHook();

            this._closeDialog();
          }

          _copyClipboard(ev) {
            // paper-input -> iron-input -> input
            const paperInput = ev.currentTarget;
            const input = paperInput.inputElement.inputElement;
            input.setSelectionRange(0, input.value.length);

            try {
              document.execCommand("copy");
              paperInput.label = "COPIED TO CLIPBOARD";
            } catch (err) {
              // Copying failed. Oh no
            }
          }

          _restoreLabel() {
            this._paperInput.label = inputLabel;
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-paper-dialog {
          width: 650px;
        }
        paper-input {
          margin-top: -8px;
        }
        button.link {
          color: var(--primary-color);
        }
        .paper-dialog-buttons a {
          text-decoration: none;
        }
      `,
            ];
          }
        }
        customElements.define("dialog-manage-cloudhook", DialogManageCloudhook);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgV2ViaG9va0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjtcblxuY29uc3QgaW5wdXRMYWJlbCA9IFwiUHVibGljIFVSTCDigJMgQ2xpY2sgdG8gY29weSB0byBjbGlwYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ01hbmFnZUNsb3VkaG9vayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHByaXZhdGUgX3BhcmFtcz86IFdlYmhvb2tEaWFsb2dQYXJhbXM7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgX3BhcmFtczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogV2ViaG9va0RpYWxvZ1BhcmFtcykge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICAvLyBXYWl0IHRpbGwgZGlhbG9nIGlzIHJlbmRlcmVkLlxuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IHsgd2ViaG9vaywgY2xvdWRob29rIH0gPSB0aGlzLl9wYXJhbXM7XG4gICAgY29uc3QgZG9jc1VybCA9XG4gICAgICB3ZWJob29rLmRvbWFpbiA9PT0gXCJhdXRvbWF0aW9uXCJcbiAgICAgICAgPyBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvYXV0b21hdGlvbi90cmlnZ2VyLyN3ZWJob29rLXRyaWdnZXJcIlxuICAgICAgICA6IGBodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9jb21wb25lbnRzLyR7d2ViaG9vay5kb21haW59L2A7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nIHdpdGgtYmFja2Ryb3A+XG4gICAgICAgIDxoMj5XZWJob29rIGZvciAke3dlYmhvb2submFtZX08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlRoZSB3ZWJob29rIGlzIGF2YWlsYWJsZSBhdCB0aGUgZm9sbG93aW5nIHVybDo8L3A+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIiR7aW5wdXRMYWJlbH1cIlxuICAgICAgICAgICAgdmFsdWU9XCIke2Nsb3VkaG9vay5jbG91ZGhvb2tfdXJsfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NvcHlDbGlwYm9hcmR9XCJcbiAgICAgICAgICAgIEBibHVyPVwiJHt0aGlzLl9yZXN0b3JlTGFiZWx9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICR7Y2xvdWRob29rLm1hbmFnZWRcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgVGhpcyB3ZWJob29rIGlzIG1hbmFnZWQgYnkgYW4gaW50ZWdyYXRpb24gYW5kIGNhbm5vdCBiZVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQuXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICBJZiB5b3Ugbm8gbG9uZ2VyIHdhbnQgdG8gdXNlIHRoaXMgd2ViaG9vaywgeW91IGNhblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCIke3RoaXMuX2Rpc2FibGVXZWJob29rfVwiPlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlIGl0PC9idXR0b25cbiAgICAgICAgICAgICAgICAgID4uXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIke2RvY3NVcmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbj5WSUVXIERPQ1VNRU5UQVRJT048L213Yy1idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fY2xvc2VEaWFsb2d9XCI+Q0xPU0U8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogSGFQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcGFwZXJJbnB1dCgpOiBQYXBlcklucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuX2RpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGlzYWJsZVdlYmhvb2soKSB7XG4gICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRpc2FibGUgdGhpcyB3ZWJob29rP1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BhcmFtcyEuZGlzYWJsZUhvb2soKTtcbiAgICB0aGlzLl9jbG9zZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29weUNsaXBib2FyZChldjogRm9jdXNFdmVudCkge1xuICAgIC8vIHBhcGVyLWlucHV0IC0+IGlyb24taW5wdXQgLT4gaW5wdXRcbiAgICBjb25zdCBwYXBlcklucHV0ID0gZXYuY3VycmVudFRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICBjb25zdCBpbnB1dCA9IChwYXBlcklucHV0LmlucHV0RWxlbWVudCBhcyBhbnkpXG4gICAgICAuaW5wdXRFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgcGFwZXJJbnB1dC5sYWJlbCA9IFwiQ09QSUVEIFRPIENMSVBCT0FSRFwiO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gQ29weWluZyBmYWlsZWQuIE9oIG5vXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzdG9yZUxhYmVsKCkge1xuICAgIHRoaXMuX3BhcGVySW5wdXQubGFiZWwgPSBpbnB1dExhYmVsO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIHdpZHRoOiA2NTBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ubGluayB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjogRGlhbG9nTWFuYWdlQ2xvdWRob29rO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCIsIERpYWxvZ01hbmFnZUNsb3VkaG9vayk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBQUE7O0FBT0E7OztBQUdBOzs7OztBQUtBOzs7QUFHQTs7O0FBOUJBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQkE7QUFDQTtBQXhIQTtBQWdJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
