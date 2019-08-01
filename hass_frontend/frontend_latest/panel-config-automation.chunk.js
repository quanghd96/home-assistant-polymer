(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-automation"],
  {
    /***/ "./node_modules/lit-html/directives/if-defined.js":
      /*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
      /*! exports provided: ifDefined */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ifDefined",
          function() {
            return ifDefined;
          }
        );
        /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"
        );
        /**
         * @license
         * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at
         * http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at
         * http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at
         * http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at
         * http://polymer.github.io/PATENTS.txt
         */

        /**
         * For AttributeParts, sets the attribute if the value is defined and removes
         * the attribute if the value is undefined.
         *
         * For other part types, this directive is a no-op.
         */

        const ifDefined = Object(
          _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"]
        )((value) => (part) => {
          if (
            value === undefined &&
            part instanceof
              _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]
          ) {
            if (value !== part.value) {
              const name = part.committer.name;
              part.committer.element.removeAttribute(name);
            }
          } else {
            part.setValue(value);
          }
        });

        /***/
      },

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

    /***/ "./src/data/automation.ts":
      /*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
      /*! exports provided: deleteAutomation */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteAutomation",
          function() {
            return deleteAutomation;
          }
        );
        const deleteAutomation = (hass, id) =>
          hass.callApi("DELETE", `config/automation/config/${id}`);

        /***/
      },

    /***/ "./src/panels/config/automation/ha-automation-editor.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js"
        );
        /* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../js/automation */ "./src/panels/config/js/automation.js"
        );
        /* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../data/automation */ "./src/data/automation.ts"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../common/navigate */ "./src/common/navigate.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        function AutomationEditor(mountEl, props, mergeEl) {
          return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(
            Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(
              _js_automation__WEBPACK_IMPORTED_MODULE_9__["default"],
              props
            ),
            mountEl,
            mergeEl
          );
        }

        class HaAutomationEditor extends lit_element__WEBPACK_IMPORTED_MODULE_0__[
          "LitElement"
        ] {
          static get properties() {
            return {
              hass: {},
              automation: {},
              creatingNew: {},
              isWide: {},
              _errors: {},
              _dirty: {},
              _config: {},
            };
          }

          constructor() {
            super();
            this.hass = void 0;
            this.automation = void 0;
            this.isWide = void 0;
            this.creatingNew = void 0;
            this._config = void 0;
            this._dirty = void 0;
            this._rendered = void 0;
            this._errors = void 0;
            this._configChanged = this._configChanged.bind(this);
          }

          disconnectedCallback() {
            super.disconnectedCallback();

            if (this._rendered) {
              Object(
                _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"]
              )(this._rendered);
              this._rendered = undefined;
            }
          }

          render() {
            if (!this.hass) {
              return;
            }

            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${
                this.automation
                  ? Object(
                      _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__[
                        "default"
                      ]
                    )(this.automation)
                  : this.hass.localize(
                      "ui.panel.config.automation.editor.default_name"
                    )
              }
            </div>
            ${
              this.creatingNew
                ? ""
                : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-button
                    icon="hass:delete"
                    @click=${this._delete}
                  ></paper-icon-button>
                `
            }
          </app-toolbar>
        </app-header>

        <div class="content">
          ${
            this._errors
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="errors">${this._errors}</div>
              `
              : ""
          }
          <div
            id="root"
            class="${Object(
              lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__[
                "classMap"
              ]
            )({
              rtl: Object(
                _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
                  "computeRTL"
                ]
              )(this.hass),
            })}"
          ></div>
        </div>
        <paper-fab
          slot="fab"
          ?is-wide="${this.isWide}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize(
            "ui.panel.config.automation.editor.save"
          )}"
          @click=${this._saveAutomation}
          class="${Object(
            lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__[
              "classMap"
            ]
          )({
            rtl: Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
                "computeRTL"
              ]
            )(this.hass),
          })}"
        ></paper-fab>
      </ha-app-layout>
    `;
          }

          updated(changedProps) {
            super.updated(changedProps);
            const oldAutomation = changedProps.get("automation");

            if (
              changedProps.has("automation") &&
              this.automation &&
              this.hass && // Only refresh config if we picked a new automation. If same ID, don't fetch it.
              (!oldAutomation ||
                oldAutomation.attributes.id !== this.automation.attributes.id)
            ) {
              this.hass
                .callApi(
                  "GET",
                  `config/automation/config/${this.automation.attributes.id}`
                )
                .then(
                  (config) => {
                    // Normalize data: ensure trigger, action and condition are lists
                    // Happens when people copy paste their automations into the config
                    for (const key of ["trigger", "condition", "action"]) {
                      const value = config[key];

                      if (value && !Array.isArray(value)) {
                        config[key] = [value];
                      }
                    }

                    this._dirty = false;
                    this._config = config;
                  },
                  (resp) => {
                    alert(
                      resp.status_code === 404
                        ? this.hass.localize(
                            "ui.panel.config.automation.editor.load_error_not_editable"
                          )
                        : this.hass.localize(
                            "ui.panel.config.automation.editor.load_error_unknown",
                            "err_no",
                            resp.status_code
                          )
                    );
                    history.back();
                  }
                );
            }

            if (
              changedProps.has("creatingNew") &&
              this.creatingNew &&
              this.hass
            ) {
              this._dirty = false;
              this._config = {
                alias: this.hass.localize(
                  "ui.panel.config.automation.editor.default_name"
                ),
                trigger: [
                  {
                    platform: "state",
                  },
                ],
                condition: [],
                action: [
                  {
                    service: "",
                  },
                ],
              };
            }

            if (changedProps.has("_config") && this.hass) {
              this._rendered = AutomationEditor(
                this.shadowRoot.querySelector("#root"),
                {
                  automation: this._config,
                  onChange: this._configChanged,
                  isWide: this.isWide,
                  hass: this.hass,
                  localize: this.hass.localize,
                },
                this._rendered
              );
            }
          }

          _configChanged(config) {
            // onChange gets called a lot during initial rendering causing recursing calls.
            if (!this._rendered) {
              return;
            }

            this._config = config;
            this._errors = undefined;
            this._dirty = true;
          }

          _backTapped() {
            if (
              this._dirty &&
              !confirm(
                this.hass.localize(
                  "ui.panel.config.automation.editor.unsaved_confirm"
                )
              )
            ) {
              return;
            }

            history.back();
          }

          async _delete() {
            if (!confirm("Are you sure you want to delete this automation?")) {
              return;
            }

            await Object(
              _data_automation__WEBPACK_IMPORTED_MODULE_13__["deleteAutomation"]
            )(this.hass, this.automation.attributes.id);
            history.back();
          }

          _saveAutomation() {
            const id = this.creatingNew
              ? "" + Date.now()
              : this.automation.attributes.id;
            this.hass
              .callApi("POST", "config/automation/config/" + id, this._config)
              .then(
                () => {
                  this._dirty = false;

                  if (this.creatingNew) {
                    Object(
                      _common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"]
                    )(this, `/config/automation/edit/${id}`, true);
                  }
                },
                (errors) => {
                  this._errors = errors.body.message;
                  throw errors;
                }
              );
          }

          static get styles() {
            return [
              _resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"],
              lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[dirty] {
          margin-bottom: 0;
        }

        paper-fab.rtl {
          right: auto;
          left: 16px;
        }

        paper-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `,
            ];
          }
        }

        customElements.define("ha-automation-editor", HaAutomationEditor);

        /***/
      },

    /***/ "./src/panels/config/automation/ha-automation-picker.ts":
      /*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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

        let HaAutomationPicker = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-automation-picker"
            ),
          ],
          function(_initialize, _LitElement) {
            class HaAutomationPicker extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: HaAutomationPicker,
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
                  key: "isWide",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "automations",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.automation.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.automation.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize(
              "ui.panel.config.automation.picker.introduction"
            )}
            <p>
              <a
                href="https://home-assistant.io/docs/automation/editor/"
                target="_blank"
              >
                ${this.hass.localize(
                  "ui.panel.config.automation.picker.learn_more"
                )}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize(
              "ui.panel.config.automation.picker.pick_automation"
            )}
          >
            ${
              this.automations.length === 0
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.hass.localize(
                        "ui.panel.config.automation.picker.no_automations"
                      )}
                    </p>
                  </div>
                `
                : this.automations.map(
                    (automation) => lit_element__WEBPACK_IMPORTED_MODULE_0__[
                      "html"
                    ]`

                      <div class='automation'>
                        <ha-entity-toggle
                          .hass=${this.hass}
                          .stateObj=${automation}
                        ></ha-entity-toggle>

                        <paper-item-body two-line>
                          <div>${Object(
                            _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__[
                              "default"
                            ]
                          )(automation)}</div>
                          <div secondary>
                            Last triggered: ${
                              automation.attributes.last_triggered
                                ? Object(
                                    _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__[
                                      "default"
                                    ]
                                  )(
                                    new Date(
                                      automation.attributes.last_triggered
                                    ),
                                    this.hass.language
                                  )
                                : "never"
                            }
                          </div>
                        </paper-item-body>
                        <div class='actions'>
                          <paper-icon-button
                            .automation=${automation}
                            @click=${this._showInfo}
                            icon="hass:information-outline"
                          ></paper-icon-button>
                          <a
                            href=${Object(
                              lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__[
                                "ifDefined"
                              ]
                            )(
                              automation.attributes.id
                                ? `/config/automation/edit/${
                                    automation.attributes.id
                                  }`
                                : undefined
                            )}
                          >
                            <paper-icon-button
                              icon="hass:pencil"
                              .disabled=${!automation.attributes.id}
                            ></paper-icon-button>
                            ${
                              !automation.attributes.id
                                ? lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                    "html"
                                  ]`
                                    <paper-tooltip position="left">
                                      Only automations defined in
                                      automations.yaml are editable.
                                    </paper-tooltip>
                                  `
                                : ""
                            }
                          </a>
                        </div>
                      </div>
                    </a>
                  `
                  )
            }
          </ha-card>
        </ha-config-section>

        <a href="/config/automation/new">
          <paper-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title=${this.hass.localize(
              "ui.panel.config.automation.picker.add_automation"
            )}
            ?rtl=${Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__[
                "computeRTL"
              ]
            )(this.hass)}
          ></paper-fab
        ></a>
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "_showInfo",
                  value: function _showInfo(ev) {
                    const entityId = ev.currentTarget.automation.entity_id;
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__[
                        "fireEvent"
                      ]
                    )(this, "hass-more-info", {
                      entityId,
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_12__[
                        "haStyle"
                      ],
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .automation {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .automation a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        .actions {
          display: flex;
        }

        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
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

        /***/
      },

    /***/ "./src/panels/config/automation/ha-config-automation.js":
      /*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts"
        );
        /* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );

        class HaConfigAutomation extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        ha-automation-picker,
        ha-automation-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:automation"
        data="{{_routeData}}"
        active="{{_edittingAutomation}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-automation-picker
          hass="[[hass]]"
          automations="[[automations]]"
          is-wide="[[isWide]]"
        ></ha-automation-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-automation-editor
          hass="[[hass]]"
          automation="[[automation]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-automation-editor>
      </template>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              route: Object,
              isWide: Boolean,
              _routeData: Object,
              _routeMatches: Boolean,
              _creatingNew: Boolean,
              _edittingAutomation: Boolean,
              automations: {
                type: Array,
                computed: "computeAutomations(hass)",
              },
              automation: {
                type: Object,
                computed:
                  "computeAutomation(automations, _edittingAutomation, _routeData)",
              },
              showEditor: {
                type: Boolean,
                computed:
                  "computeShowEditor(_edittingAutomation, _creatingNew)",
              },
            };
          }

          computeAutomation(automations, edittingAddon, routeData) {
            if (!automations || !edittingAddon) {
              return null;
            }

            for (var i = 0; i < automations.length; i++) {
              if (automations[i].attributes.id === routeData.automation) {
                return automations[i];
              }
            }

            return null;
          }

          computeAutomations(hass) {
            var automations = [];
            Object.keys(hass.states).forEach(function(key) {
              var entity = hass.states[key];

              if (
                Object(
                  _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__[
                    "default"
                  ]
                )(entity) === "automation"
              ) {
                automations.push(entity);
              }
            });
            return automations.sort(function entitySortBy(entityA, entityB) {
              var nameA = (
                entityA.attributes.alias || entityA.entity_id
              ).toLowerCase();
              var nameB = (
                entityB.attributes.alias || entityB.entity_id
              ).toLowerCase();

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }

          computeShowEditor(_edittingAutomation, _creatingNew) {
            return _creatingNew || _edittingAutomation;
          }
        }

        customElements.define("ha-config-automation", HaConfigAutomation);

        /***/
      },

    /***/ "./src/panels/config/js/automation.js":
      /*!********************************************!*\
  !*** ./src/panels/config/js/automation.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Automation;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./trigger/index */ "./src/panels/config/js/trigger/index.js"
        );
        /* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./condition/index */ "./src/panels/config/js/condition/index.js"
        );
        /* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./script/index */ "./src/panels/config/js/script/index.js"
        );

        class Automation extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = this.onChange.bind(this);
            this.triggerChanged = this.triggerChanged.bind(this);
            this.conditionChanged = this.conditionChanged.bind(this);
            this.actionChanged = this.actionChanged.bind(this);
          }

          onChange(ev) {
            this.props.onChange(
              Object.assign({}, this.props.automation, {
                [ev.target.name]: ev.target.value,
              })
            );
          }

          triggerChanged(trigger) {
            this.props.onChange(
              Object.assign({}, this.props.automation, {
                trigger,
              })
            );
          }

          conditionChanged(condition) {
            this.props.onChange(
              Object.assign({}, this.props.automation, {
                condition,
              })
            );
          }

          actionChanged(action) {
            this.props.onChange(
              Object.assign({}, this.props.automation, {
                action,
              })
            );
          }

          render({ automation, isWide, hass, localize }) {
            const { alias, trigger, condition, action } = automation;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  alias
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  localize("ui.panel.config.automation.editor.introduction")
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "ha-card",
                  null,
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "div",
                    {
                      class: "card-content",
                    },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-input",
                      {
                        label: localize(
                          "ui.panel.config.automation.editor.alias"
                        ),
                        name: "alias",
                        value: alias,
                        "onvalue-changed": this.onChange,
                      }
                    )
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  localize("ui.panel.config.automation.editor.triggers.header")
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "p",
                    null,
                    localize(
                      "ui.panel.config.automation.editor.triggers.introduction"
                    )
                  ),
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "a",
                    {
                      href:
                        "https://home-assistant.io/docs/automation/trigger/",
                      target: "_blank",
                    },
                    localize(
                      "ui.panel.config.automation.editor.triggers.learn_more"
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _trigger_index__WEBPACK_IMPORTED_MODULE_4__["default"],
                  {
                    trigger: trigger,
                    onChange: this.triggerChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  localize(
                    "ui.panel.config.automation.editor.conditions.header"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "p",
                    null,
                    localize(
                      "ui.panel.config.automation.editor.conditions.introduction"
                    )
                  ),
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "a",
                    {
                      href:
                        "https://home-assistant.io/docs/scripts/conditions/",
                      target: "_blank",
                    },
                    localize(
                      "ui.panel.config.automation.editor.conditions.learn_more"
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _condition_index__WEBPACK_IMPORTED_MODULE_5__["default"],
                  {
                    condition: condition || [],
                    onChange: this.conditionChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-config-section",
                {
                  "is-wide": isWide,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "header",
                  },
                  localize("ui.panel.config.automation.editor.actions.header")
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "span",
                  {
                    slot: "introduction",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "p",
                    null,
                    localize(
                      "ui.panel.config.automation.editor.actions.introduction"
                    )
                  ),
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "a",
                    {
                      href: "https://home-assistant.io/docs/automation/action/",
                      target: "_blank",
                    },
                    localize(
                      "ui.panel.config.automation.editor.actions.learn_more"
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _script_index__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {
                    script: action,
                    onChange: this.actionChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/condition/condition_row.js":
      /*!*********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ConditionRow;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.js"
        );

        class ConditionRow extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onDelete = this.onDelete.bind(this);
          }

          onDelete() {
            // eslint-disable-next-line
            if (
              confirm(
                this.props.localize(
                  "ui.panel.config.automation.editor.conditions.delete_confirm"
                )
              )
            ) {
              this.props.onChange(this.props.index, null);
            }
          }

          render(props) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "ha-card",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                {
                  class: "card-content",
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-menu",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "paper-menu-button",
                    {
                      "no-animations": true,
                      "horizontal-align": "right",
                      "horizontal-offset": "-5",
                      "vertical-offset": "-5",
                    },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-icon-button",
                      {
                        icon: "hass:dots-vertical",
                        slot: "dropdown-trigger",
                      }
                    ),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-listbox",
                      {
                        slot: "dropdown-content",
                      },
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          disabled: true,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.conditions.duplicate"
                        )
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          onTap: this.onDelete,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.conditions.delete"
                        )
                      )
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _condition_edit__WEBPACK_IMPORTED_MODULE_6__["default"],
                  props
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/condition/index.js":
      /*!*************************************************!*\
  !*** ./src/panels/config/js/condition/index.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Condition;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./condition_row */ "./src/panels/config/js/condition/condition_row.js"
        );

        class Condition extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.addCondition = this.addCondition.bind(this);
            this.conditionChanged = this.conditionChanged.bind(this);
          }

          addCondition() {
            const condition = this.props.condition.concat({
              condition: "state",
            });
            this.props.onChange(condition);
          }

          conditionChanged(index, newValue) {
            const condition = this.props.condition.concat();

            if (newValue === null) {
              condition.splice(index, 1);
            } else {
              condition[index] = newValue;
            }

            this.props.onChange(condition);
          }

          render({ condition, hass, localize }) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              {
                class: "triggers",
              },
              condition.map((cnd, idx) =>
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _condition_row__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    index: idx,
                    condition: cnd,
                    onChange: this.conditionChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-card",
                null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-actions add-card",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "mwc-button",
                    {
                      onTap: this.addCondition,
                    },
                    localize("ui.panel.config.automation.editor.conditions.add")
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/trigger/event.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/event.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return EventTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _json_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../json_textarea */ "./src/panels/config/js/json_textarea.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class EventTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.eventDataChanged = this.eventDataChanged.bind(this);
          }
          /* eslint-disable camelcase */

          eventDataChanged(event_data) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                event_data,
              })
            );
          }

          render({ trigger, localize }) {
            const { event_type, event_data } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.event.event_type"
                ),
                name: "event_type",
                value: event_type,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                _json_textarea__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  label: localize(
                    "ui.panel.config.automation.editor.triggers.type.event.event_data"
                  ),
                  value: event_data,
                  onChange: this.eventDataChanged,
                }
              )
            );
          }
        }
        EventTrigger.defaultConfig = {
          event_type: "",
          event_data: {},
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/geo_location.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return GeolocationTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js"
        );
        /* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class GeolocationTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.zonePicked = this.zonePicked.bind(this);
            this.radioGroupPicked = this.radioGroupPicked.bind(this);
          }

          zonePicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                zone: ev.target.value,
              })
            );
          }

          radioGroupPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                event: ev.target.selected,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, hass, localize }) {
            const { source, zone, event } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.geo_location.source"
                ),
                name: "source",
                value: source,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.triggers.type.geo_location.zone"
                  ),
                  value: zone,
                  onChange: this.zonePicked,
                  hass: hass,
                  allowCustomEntity: true,
                  domainFilter: "zone",
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "eventlabel",
                },
                localize(
                  "ui.panel.config.automation.editor.triggers.type.geo_location.event"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  selected: event,
                  "aria-labelledby": "eventlabel",
                  "onpaper-radio-group-changed": this.radioGroupPicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "enter",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.geo_location.enter"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "leave",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.geo_location.leave"
                  )
                )
              )
            );
          }
        }
        GeolocationTrigger.defaultConfig = {
          source: "",
          zone: "",
          event: "enter",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/homeassistant.js":
      /*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return HassTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js"
        );
        /* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js"
        );

        class HassTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.radioGroupPicked = this.radioGroupPicked.bind(this);
          }

          radioGroupPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                event: ev.target.selected,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, localize }) {
            const { event } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "eventlabel",
                },
                localize(
                  "ui.panel.config.automation.editor.triggers.type.homeassistant.event"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  selected: event,
                  "aria-labelledby": "eventlabel",
                  "onpaper-radio-group-changed": this.radioGroupPicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "start",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.homeassistant.start"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "shutdown",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"
                  )
                )
              )
            );
          }
        }
        HassTrigger.defaultConfig = {
          event: "start",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/index.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/index.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Trigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.js"
        );
        /* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./state */ "./src/panels/config/js/trigger/state.js"
        );

        class Trigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
          constructor() {
            super();
            this.addTrigger = this.addTrigger.bind(this);
            this.triggerChanged = this.triggerChanged.bind(this);
          }

          addTrigger() {
            const trigger = this.props.trigger.concat(
              Object.assign(
                {
                  platform: "state",
                },
                _state__WEBPACK_IMPORTED_MODULE_4__["default"].defaultConfig
              )
            );
            this.props.onChange(trigger);
          }

          triggerChanged(index, newValue) {
            const trigger = this.props.trigger.concat();

            if (newValue === null) {
              trigger.splice(index, 1);
            } else {
              trigger[index] = newValue;
            }

            this.props.onChange(trigger);
          }

          render({ trigger, hass, localize }) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              {
                class: "triggers",
              },
              trigger.map((trg, idx) =>
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _trigger_row__WEBPACK_IMPORTED_MODULE_3__["default"],
                  {
                    index: idx,
                    trigger: trg,
                    onChange: this.triggerChanged,
                    hass: hass,
                    localize: localize,
                  }
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-card",
                null,
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-actions add-card",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "mwc-button",
                    {
                      onTap: this.addTrigger,
                    },
                    localize("ui.panel.config.automation.editor.triggers.add")
                  )
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/trigger/mqtt.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return MQTTTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class MQTTTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "trigger");
          }
          /* eslint-disable camelcase */

          render({ trigger, localize }) {
            const { topic, payload } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.mqtt.topic"
                ),
                name: "topic",
                value: topic,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.mqtt.payload"
                ),
                name: "payload",
                value: payload,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        MQTTTrigger.defaultConfig = {
          topic: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/numeric_state.js":
      /*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return NumericStateTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class NumericStateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.entityPicked = this.entityPicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                entity_id: ev.target.value,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, hass, localize }) {
            const { value_template, entity_id, below, above } = trigger;
            let trgFor = trigger.for;

            if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
              // If the trigger was defined using the yaml dict syntax, convert it to
              // the equivalent string format
              let { hours = 0, minutes = 0, seconds = 0 } = trgFor;
              hours = hours.toString();
              minutes = minutes.toString().padStart(2, "0");
              seconds = seconds.toString().padStart(2, "0");
              trgFor = `${hours}:${minutes}:${seconds}`;
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.numeric_state.above"
                ),
                name: "above",
                value: above,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.numeric_state.below"
                ),
                name: "below",
                value: below,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"
                ),
                name: "value_template",
                value: value_template,
                "onvalue-changed": this.onChange,
                dir: "ltr",
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.state.for"
                ),
                name: "for",
                value: trgFor,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        NumericStateTrigger.defaultConfig = {
          entity_id: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/state.js":
      /*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/state.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return StateTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class StateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.entityPicked = this.entityPicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                entity_id: ev.target.value,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, hass, localize }) {
            const { entity_id, to } = trigger;
            const trgFrom = trigger.from;
            let trgFor = trigger.for;

            if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
              // If the trigger was defined using the yaml dict syntax, convert it to
              // the equivalent string format
              let { hours = 0, minutes = 0, seconds = 0 } = trgFor;
              hours = hours.toString();
              minutes = minutes.toString().padStart(2, "0");
              seconds = seconds.toString().padStart(2, "0");
              trgFor = `${hours}:${minutes}:${seconds}`;
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.state.from"
                ),
                name: "from",
                value: trgFrom,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.state.to"
                ),
                name: "to",
                value: to,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.state.for"
                ),
                name: "for",
                value: trgFor,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        StateTrigger.defaultConfig = {
          entity_id: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/sun.js":
      /*!*********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return SunTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js"
        );
        /* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class SunTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.radioGroupPicked = this.radioGroupPicked.bind(this);
          }

          radioGroupPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                event: ev.target.selected,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, localize }) {
            const { offset, event } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "eventlabel",
                },
                localize(
                  "ui.panel.config.automation.editor.triggers.type.sun.event"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  selected: event,
                  "aria-labelledby": "eventlabel",
                  "onpaper-radio-group-changed": this.radioGroupPicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunrise",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.sun.sunrise"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "sunset",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.sun.sunset"
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.sun.offset"
                ),
                name: "offset",
                value: offset,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        SunTrigger.defaultConfig = {
          event: "sunrise",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/template.js":
      /*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/template.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TemplateTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class TemplateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "trigger");
          }

          render({ trigger, localize }) {
            /* eslint-disable camelcase */
            const { value_template } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.template.value_template"
                ),
                name: "value_template",
                value: value_template,
                "onvalue-changed": this.onChange,
                dir: "ltr",
              })
            );
          }
        }
        TemplateTrigger.defaultConfig = {
          value_template: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/time.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/time.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TimeTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class TimeTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "trigger");
          }
          /* eslint-disable camelcase */

          render({ trigger, localize }) {
            const { at } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.time.at"
                ),
                name: "at",
                value: at,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        TimeTrigger.defaultConfig = {
          at: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/time_pattern.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TimePatternTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class TimePatternTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "trigger");
          }
          /* eslint-disable camelcase */

          render({ trigger, localize }) {
            const { hours, minutes, seconds } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.time_pattern.hours"
                ),
                name: "hours",
                value: hours,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"
                ),
                name: "minutes",
                value: minutes,
                "onvalue-changed": this.onChange,
              }),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"
                ),
                name: "seconds",
                value: seconds,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        TimePatternTrigger.defaultConfig = {
          hours: "",
          minutes: "",
          seconds: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/trigger_edit.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TriggerEdit;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./event */ "./src/panels/config/js/trigger/event.js"
        );
        /* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.js"
        );
        /* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.js"
        );
        /* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.js"
        );
        /* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.js"
        );
        /* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.js"
        );
        /* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./state */ "./src/panels/config/js/trigger/state.js"
        );
        /* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./sun */ "./src/panels/config/js/trigger/sun.js"
        );
        /* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./template */ "./src/panels/config/js/trigger/template.js"
        );
        /* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./time */ "./src/panels/config/js/trigger/time.js"
        );
        /* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./webhook */ "./src/panels/config/js/trigger/webhook.js"
        );
        /* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./zone */ "./src/panels/config/js/trigger/zone.js"
        );

        const TYPES = {
          event: _event__WEBPACK_IMPORTED_MODULE_4__["default"],
          state: _state__WEBPACK_IMPORTED_MODULE_10__["default"],
          geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_5__["default"],
          homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_6__["default"],
          mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_7__["default"],
          numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_8__["default"],
          sun: _sun__WEBPACK_IMPORTED_MODULE_11__["default"],
          template: _template__WEBPACK_IMPORTED_MODULE_12__["default"],
          time: _time__WEBPACK_IMPORTED_MODULE_13__["default"],
          time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_9__["default"],
          webhook: _webhook__WEBPACK_IMPORTED_MODULE_14__["default"],
          zone: _zone__WEBPACK_IMPORTED_MODULE_15__["default"],
        };
        const OPTIONS = Object.keys(TYPES).sort();
        class TriggerEdit extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.typeChanged = this.typeChanged.bind(this);
          }

          typeChanged(ev) {
            const type = ev.target.selectedItem.attributes.platform.value;

            if (type !== this.props.trigger.platform) {
              this.props.onChange(
                this.props.index,
                Object.assign(
                  {
                    platform: type,
                  },
                  TYPES[type].defaultConfig
                )
              );
            }
          }

          render({ index, trigger, onChange, hass, localize }) {
            const Comp = TYPES[trigger.platform];
            const selected = OPTIONS.indexOf(trigger.platform);

            if (!Comp) {
              return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                null,
                localize(
                  "ui.panel.config.automation.editor.triggers.unsupported_platform",
                  "platform",
                  trigger.platform
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "pre",
                  null,
                  JSON.stringify(trigger, null, 2)
                )
              );
            }

            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-dropdown-menu-light",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.triggers.type_select"
                  ),
                  "no-animations": true,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-listbox",
                  {
                    slot: "dropdown-content",
                    selected: selected,
                    "oniron-select": this.typeChanged,
                  },
                  OPTIONS.map((opt) =>
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-item",
                      {
                        platform: opt,
                      },
                      localize(
                        `ui.panel.config.automation.editor.triggers.type.${opt}.label`
                      )
                    )
                  )
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
                index: index,
                trigger: trigger,
                onChange: onChange,
                hass: hass,
                localize: localize,
              })
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/trigger/trigger_row.js":
      /*!*****************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return TriggerRow;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.js"
        );

        class TriggerRow extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onDelete = this.onDelete.bind(this);
          }

          onDelete() {
            // eslint-disable-next-line
            if (
              confirm(
                this.props.localize(
                  "ui.panel.config.automation.editor.triggers.delete_confirm"
                )
              )
            ) {
              this.props.onChange(this.props.index, null);
            }
          }

          render(props) {
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "ha-card",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "div",
                {
                  class: "card-content",
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "div",
                  {
                    class: "card-menu",
                  },
                  Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "paper-menu-button",
                    {
                      "no-animations": true,
                      "horizontal-align": "right",
                      "horizontal-offset": "-5",
                      "vertical-offset": "-5",
                    },
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-icon-button",
                      {
                        icon: "hass:dots-vertical",
                        slot: "dropdown-trigger",
                      }
                    ),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "paper-listbox",
                      {
                        slot: "dropdown-content",
                      },
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          disabled: true,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.triggers.duplicate"
                        )
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "paper-item",
                        {
                          onTap: this.onDelete,
                        },
                        props.localize(
                          "ui.panel.config.automation.editor.triggers.delete"
                        )
                      )
                    )
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  _trigger_edit__WEBPACK_IMPORTED_MODULE_6__["default"],
                  props
                )
              )
            );
          }
        }

        /***/
      },

    /***/ "./src/panels/config/js/trigger/webhook.js":
      /*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return WebhookTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );

        class WebhookTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__[
              "onChangeEvent"
            ].bind(this, "trigger");
          }

          render({ trigger, localize }) {
            const { webhook_id: webhookId } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
                label: localize(
                  "ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"
                ),
                name: "webhook_id",
                value: webhookId,
                "onvalue-changed": this.onChange,
              })
            );
          }
        }
        WebhookTrigger.defaultConfig = {
          webhook_id: "",
        };

        /***/
      },

    /***/ "./src/panels/config/js/trigger/zone.js":
      /*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ZoneTrigger;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js"
        );
        /* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js"
        );
        /* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts"
        );
        /* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../common/preact/event */ "./src/common/preact/event.ts"
        );
        /* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );

        function zoneAndLocationFilter(stateObj) {
          return (
            Object(
              _common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ]
            )(stateObj) &&
            Object(
              _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ]
            )(stateObj) !== "zone"
          );
        }

        class ZoneTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__[
          "Component"
        ] {
          constructor() {
            super();
            this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__[
              "onChangeEvent"
            ].bind(this, "trigger");
            this.radioGroupPicked = this.radioGroupPicked.bind(this);
            this.entityPicked = this.entityPicked.bind(this);
            this.zonePicked = this.zonePicked.bind(this);
          }

          entityPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                entity_id: ev.target.value,
              })
            );
          }

          zonePicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                zone: ev.target.value,
              })
            );
          }

          radioGroupPicked(ev) {
            this.props.onChange(
              this.props.index,
              Object.assign({}, this.props.trigger, {
                event: ev.target.selected,
              })
            );
          }
          /* eslint-disable camelcase */

          render({ trigger, hass, localize }) {
            const { entity_id, zone, event } = trigger;
            return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
              "div",
              null,
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.triggers.type.zone.entity"
                  ),
                  value: entity_id,
                  onChange: this.entityPicked,
                  hass: hass,
                  allowCustomEntity: true,
                  entityFilter: zoneAndLocationFilter,
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "ha-entity-picker",
                {
                  label: localize(
                    "ui.panel.config.automation.editor.triggers.type.zone.zone"
                  ),
                  value: zone,
                  onChange: this.zonePicked,
                  hass: hass,
                  allowCustomEntity: true,
                  domainFilter: "zone",
                }
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "label",
                {
                  id: "eventlabel",
                },
                localize(
                  "ui.panel.config.automation.editor.triggers.type.zone.event"
                )
              ),
              Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                "paper-radio-group",
                {
                  selected: event,
                  "aria-labelledby": "eventlabel",
                  "onpaper-radio-group-changed": this.radioGroupPicked,
                },
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "enter",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.zone.enter"
                  )
                ),
                Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                  "paper-radio-button",
                  {
                    name: "leave",
                  },
                  localize(
                    "ui.panel.config.automation.editor.triggers.type.zone.leave"
                  )
                )
              )
            );
          }
        }
        ZoneTrigger.defaultConfig = {
          entity_id: "",
          zone: "",
          event: "enter",
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL2hhLWF1dG9tYXRpb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vaGEtYXV0b21hdGlvbi1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXV0b21hdGlvbi9oYS1jb25maWctYXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy9hdXRvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9jb25kaXRpb25fcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2NvbmRpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvZ2VvX2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvaG9tZWFzc2lzdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvbXF0dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL251bWVyaWNfc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3N1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RpbWVfcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RyaWdnZXJfZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RyaWdnZXJfcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvd2ViaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3pvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuXG4vKipcbiAqIEZvciBBdHRyaWJ1dGVQYXJ0cywgc2V0cyB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyBkZWZpbmVkIGFuZCByZW1vdmVzXG4gKiB0aGUgYXR0cmlidXRlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogRm9yIG90aGVyIHBhcnQgdHlwZXMsIHRoaXMgZGlyZWN0aXZlIGlzIGEgbm8tb3AuXG4gKi9cbmV4cG9ydCBjb25zdCBpZkRlZmluZWQgPSBkaXJlY3RpdmUoKHZhbHVlOiB1bmtub3duKSA9PiAocGFydDogUGFydCkgPT4ge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkge1xuICAgIGlmICh2YWx1ZSAhPT0gcGFydC52YWx1ZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHBhcnQuY29tbWl0dGVyLm5hbWU7XG4gICAgICBwYXJ0LmNvbW1pdHRlci5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvbWF0aW9uRW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25Db25maWcge1xuICBhbGlhczogc3RyaW5nO1xuICB0cmlnZ2VyOiBhbnlbXTtcbiAgY29uZGl0aW9uPzogYW55W107XG4gIGFjdGlvbjogYW55W107XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBdXRvbWF0aW9uID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLyR7aWR9YCk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcblxuaW1wb3J0IEF1dG9tYXRpb24gZnJvbSBcIi4uL2pzL2F1dG9tYXRpb25cIjtcbmltcG9ydCB1bm1vdW50UHJlYWN0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJlYWN0L3VubW91bnRcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIEF1dG9tYXRpb25FbnRpdHksXG4gIEF1dG9tYXRpb25Db25maWcsXG4gIGRlbGV0ZUF1dG9tYXRpb24sXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5mdW5jdGlvbiBBdXRvbWF0aW9uRWRpdG9yKG1vdW50RWwsIHByb3BzLCBtZXJnZUVsKSB7XG4gIHJldHVybiByZW5kZXIoaChBdXRvbWF0aW9uLCBwcm9wcyksIG1vdW50RWwsIG1lcmdlRWwpO1xufVxuXG5jbGFzcyBIYUF1dG9tYXRpb25FZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgYXV0b21hdGlvbiE6IEF1dG9tYXRpb25FbnRpdHk7XG4gIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBwdWJsaWMgY3JlYXRpbmdOZXc/OiBib29sZWFuO1xuICBwcml2YXRlIF9jb25maWc/OiBBdXRvbWF0aW9uQ29uZmlnO1xuICBwcml2YXRlIF9kaXJ0eT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3JlbmRlcmVkPzogdW5rbm93bjtcbiAgcHJpdmF0ZSBfZXJyb3JzPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgYXV0b21hdGlvbjoge30sXG4gICAgICBjcmVhdGluZ05ldzoge30sXG4gICAgICBpc1dpZGU6IHt9LFxuICAgICAgX2Vycm9yczoge30sXG4gICAgICBfZGlydHk6IHt9LFxuICAgICAgX2NvbmZpZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY29uZmlnQ2hhbmdlZCA9IHRoaXMuX2NvbmZpZ0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgdW5tb3VudFByZWFjdCh0aGlzLl9yZW5kZXJlZCk7XG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2JhY2tUYXBwZWR9XG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPlxuICAgICAgICAgICAgICAke3RoaXMuYXV0b21hdGlvblxuICAgICAgICAgICAgICAgID8gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLmF1dG9tYXRpb24pXG4gICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmRlZmF1bHRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuY3JlYXRpbmdOZXdcbiAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9kZWxldGV9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPiR7dGhpcy5fZXJyb3JzfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cGFwZXItZmFiXG4gICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgP2lzLXdpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgP2RpcnR5PVwiJHt0aGlzLl9kaXJ0eX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmNvbnRlbnQtc2F2ZVwiXG4gICAgICAgICAgLnRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5zYXZlXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2F2ZUF1dG9tYXRpb259XG4gICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MpLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgID48L3BhcGVyLWZhYj5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGNvbnN0IG9sZEF1dG9tYXRpb24gPSBjaGFuZ2VkUHJvcHMuZ2V0KFwiYXV0b21hdGlvblwiKSBhcyBBdXRvbWF0aW9uRW50aXR5O1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJhdXRvbWF0aW9uXCIpICYmXG4gICAgICB0aGlzLmF1dG9tYXRpb24gJiZcbiAgICAgIHRoaXMuaGFzcyAmJlxuICAgICAgLy8gT25seSByZWZyZXNoIGNvbmZpZyBpZiB3ZSBwaWNrZWQgYSBuZXcgYXV0b21hdGlvbi4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZEF1dG9tYXRpb24gfHxcbiAgICAgICAgb2xkQXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkICE9PSB0aGlzLmF1dG9tYXRpb24uYXR0cmlidXRlcy5pZClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFzc1xuICAgICAgICAuY2FsbEFwaTxBdXRvbWF0aW9uQ29uZmlnPihcbiAgICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgIGBjb25maWcvYXV0b21hdGlvbi9jb25maWcvJHt0aGlzLmF1dG9tYXRpb24uYXR0cmlidXRlcy5pZH1gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIGRhdGE6IGVuc3VyZSB0cmlnZ2VyLCBhY3Rpb24gYW5kIGNvbmRpdGlvbiBhcmUgbGlzdHNcbiAgICAgICAgICAgIC8vIEhhcHBlbnMgd2hlbiBwZW9wbGUgY29weSBwYXN0ZSB0aGVpciBhdXRvbWF0aW9ucyBpbnRvIHRoZSBjb25maWdcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIFtcInRyaWdnZXJcIiwgXCJjb25kaXRpb25cIiwgXCJhY3Rpb25cIl0pIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdba2V5XTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1trZXldID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICB9LFxuICAgICAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgcmVzcC5zdGF0dXNfY29kZSA9PT0gNDA0XG4gICAgICAgICAgICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmxvYWRfZXJyb3Jfbm90X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IubG9hZF9lcnJvcl91bmtub3duXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyX25vXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3Auc3RhdHVzX2NvZGVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjcmVhdGluZ05ld1wiKSAmJiB0aGlzLmNyZWF0aW5nTmV3ICYmIHRoaXMuaGFzcykge1xuICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgYWxpYXM6IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZWZhdWx0X25hbWVcIlxuICAgICAgICApLFxuICAgICAgICB0cmlnZ2VyOiBbeyBwbGF0Zm9ybTogXCJzdGF0ZVwiIH1dLFxuICAgICAgICBjb25kaXRpb246IFtdLFxuICAgICAgICBhY3Rpb246IFt7IHNlcnZpY2U6IFwiXCIgfV0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbmZpZ1wiKSAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gQXV0b21hdGlvbkVkaXRvcihcbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIiksXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvbWF0aW9uOiB0aGlzLl9jb25maWcsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuX2NvbmZpZ0NoYW5nZWQsXG4gICAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgbG9jYWxpemU6IHRoaXMuaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnQ2hhbmdlZChjb25maWc6IEF1dG9tYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICAvLyBvbkNoYW5nZSBnZXRzIGNhbGxlZCBhIGxvdCBkdXJpbmcgaW5pdGlhbCByZW5kZXJpbmcgY2F1c2luZyByZWN1cnNpbmcgY2FsbHMuXG4gICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZXJyb3JzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2JhY2tUYXBwZWQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fZGlydHkgJiZcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnVuc2F2ZWRfY29uZmlybVwiKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZSgpIHtcbiAgICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXV0b21hdGlvbj9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgZGVsZXRlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMuYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkISk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlQXV0b21hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3JlYXRpbmdOZXdcbiAgICAgID8gXCJcIiArIERhdGUubm93KClcbiAgICAgIDogdGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdGhpcy5oYXNzIS5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBcImNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy9cIiArIGlkLFxuICAgICAgdGhpcy5fY29uZmlnXG4gICAgKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvYXV0b21hdGlvbi9lZGl0LyR7aWR9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5ydGwgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1ib3R0b20gMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW2RpcnR5XSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYi5ydGwge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbaXMtd2lkZV0ucnRsIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF1dG9tYXRpb24tZWRpdG9yXCIsIEhhQXV0b21hdGlvbkVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQXV0b21hdGlvbkVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2F1dG9tYXRpb25cIjtcbmltcG9ydCBmb3JtYXRfZGF0ZV90aW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWF1dG9tYXRpb24tcGlja2VyXCIpXG5jbGFzcyBIYUF1dG9tYXRpb25QaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9tYXRpb25zITogQXV0b21hdGlvbkVudGl0eVtdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmNhcHRpb25cIil9XG4gICAgICA+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuaGVhZGVyXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9hdXRvbWF0aW9uL2VkaXRvci9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmxlYXJuX21vcmVcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAuaGVhZGluZz0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIucGlja19hdXRvbWF0aW9uXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLmF1dG9tYXRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIubm9fYXV0b21hdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiB0aGlzLmF1dG9tYXRpb25zLm1hcChcbiAgICAgICAgICAgICAgICAgIChhdXRvbWF0aW9uKSA9PiBodG1sYFxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYXV0b21hdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtZW50aXR5LXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7YXV0b21hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKGF1dG9tYXRpb24pfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHRyaWdnZXJlZDogJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uYXR0cmlidXRlcy5sYXN0X3RyaWdnZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdF9kYXRlX3RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmxhc3RfdHJpZ2dlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmV2ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXV0b21hdGlvbj0ke2F1dG9tYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd0luZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aW5mb3JtYXRpb24tb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JHtpZkRlZmluZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgL2NvbmZpZy9hdXRvbWF0aW9uL2VkaXQvJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFhdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ubHkgYXV0b21hdGlvbnMgZGVmaW5lZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9ucy55YW1sIGFyZSBlZGl0YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9hdXRvbWF0aW9uL25ld1wiPlxuICAgICAgICAgIDxwYXBlci1mYWJcbiAgICAgICAgICAgIHNsb3Q9XCJmYWJcIlxuICAgICAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgdGl0bGU9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24ucGlja2VyLmFkZF9hdXRvbWF0aW9uXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgID48L3BhcGVyLWZhYlxuICAgICAgICA+PC9hPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dJbmZvKGV2KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5jdXJyZW50VGFyZ2V0LmF1dG9tYXRpb24uZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0b21hdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaG9yaXpvbnRhbDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRvbWF0aW9uIGFbaHJlZl0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtYXV0b21hdGlvbi1waWNrZXJcIjogSGFBdXRvbWF0aW9uUGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWF1dG9tYXRpb24tZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2hhLWF1dG9tYXRpb24tcGlja2VyXCI7XG5cbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuY2xhc3MgSGFDb25maWdBdXRvbWF0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1hdXRvbWF0aW9uLXBpY2tlcixcbiAgICAgICAgaGEtYXV0b21hdGlvbi1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL2VkaXQvOmF1dG9tYXRpb25cIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICBhY3RpdmU9XCJ7e19lZGl0dGluZ0F1dG9tYXRpb259fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9uZXdcIlxuICAgICAgICBhY3RpdmU9XCJ7e19jcmVhdGluZ05ld319XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFzaG93RWRpdG9yXV1cIj5cbiAgICAgICAgPGhhLWF1dG9tYXRpb24tcGlja2VyXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBhdXRvbWF0aW9ucz1cIltbYXV0b21hdGlvbnNdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICA+PC9oYS1hdXRvbWF0aW9uLXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93RWRpdG9yXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxoYS1hdXRvbWF0aW9uLWVkaXRvclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgYXV0b21hdGlvbj1cIltbYXV0b21hdGlvbl1dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgY3JlYXRpbmctbmV3PVwiW1tfY3JlYXRpbmdOZXddXVwiXG4gICAgICAgID48L2hhLWF1dG9tYXRpb24tZWRpdG9yPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3JvdXRlTWF0Y2hlczogQm9vbGVhbixcbiAgICAgIF9jcmVhdGluZ05ldzogQm9vbGVhbixcbiAgICAgIF9lZGl0dGluZ0F1dG9tYXRpb246IEJvb2xlYW4sXG5cbiAgICAgIGF1dG9tYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQXV0b21hdGlvbnMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIGF1dG9tYXRpb246IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcImNvbXB1dGVBdXRvbWF0aW9uKGF1dG9tYXRpb25zLCBfZWRpdHRpbmdBdXRvbWF0aW9uLCBfcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgc2hvd0VkaXRvcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2hvd0VkaXRvcihfZWRpdHRpbmdBdXRvbWF0aW9uLCBfY3JlYXRpbmdOZXcpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQXV0b21hdGlvbihhdXRvbWF0aW9ucywgZWRpdHRpbmdBZGRvbiwgcm91dGVEYXRhKSB7XG4gICAgaWYgKCFhdXRvbWF0aW9ucyB8fCAhZWRpdHRpbmdBZGRvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXV0b21hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhdXRvbWF0aW9uc1tpXS5hdHRyaWJ1dGVzLmlkID09PSByb3V0ZURhdGEuYXV0b21hdGlvbikge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZUF1dG9tYXRpb25zKGhhc3MpIHtcbiAgICB2YXIgYXV0b21hdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGVudGl0eSA9IGhhc3Muc3RhdGVzW2tleV07XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJhdXRvbWF0aW9uXCIpIHtcbiAgICAgICAgYXV0b21hdGlvbnMucHVzaChlbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF1dG9tYXRpb25zLnNvcnQoZnVuY3Rpb24gZW50aXR5U29ydEJ5KGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgIHZhciBuYW1lQSA9IChlbnRpdHlBLmF0dHJpYnV0ZXMuYWxpYXMgfHwgZW50aXR5QS5lbnRpdHlfaWQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgbmFtZUIgPSAoZW50aXR5Qi5hdHRyaWJ1dGVzLmFsaWFzIHx8IGVudGl0eUIuZW50aXR5X2lkKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nQXV0b21hdGlvbiwgX2NyZWF0aW5nTmV3KSB7XG4gICAgcmV0dXJuIF9jcmVhdGluZ05ldyB8fCBfZWRpdHRpbmdBdXRvbWF0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1hdXRvbWF0aW9uXCIsIEhhQ29uZmlnQXV0b21hdGlvbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBUcmlnZ2VyIGZyb20gXCIuL3RyaWdnZXIvaW5kZXhcIjtcbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vY29uZGl0aW9uL2luZGV4XCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuL3NjcmlwdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvbWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCA9IHRoaXMudHJpZ2dlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmRpdGlvbkNoYW5nZWQgPSB0aGlzLmNvbmRpdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFjdGlvbkNoYW5nZWQgPSB0aGlzLmFjdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuYXV0b21hdGlvbiwge1xuICAgICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0cmlnZ2VyQ2hhbmdlZCh0cmlnZ2VyKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmF1dG9tYXRpb24sIHsgdHJpZ2dlciB9KSk7XG4gIH1cblxuICBjb25kaXRpb25DaGFuZ2VkKGNvbmRpdGlvbikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmF1dG9tYXRpb24sIHsgY29uZGl0aW9uIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFjdGlvbkNoYW5nZWQoYWN0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmF1dG9tYXRpb24sIHsgYWN0aW9uIH0pKTtcbiAgfVxuXG4gIHJlbmRlcih7IGF1dG9tYXRpb24sIGlzV2lkZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYWxpYXMsIHRyaWdnZXIsIGNvbmRpdGlvbiwgYWN0aW9uIH0gPSBhdXRvbWF0aW9uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj57YWxpYXN9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWxpYXNcIil9XG4gICAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWxpYXN9XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL2RvY3MvYXV0b21hdGlvbi90cmlnZ2VyL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFRyaWdnZXJcbiAgICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50cmlnZ2VyQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL2NvbmRpdGlvbnMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMubGVhcm5fbW9yZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxDb25kaXRpb25cbiAgICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9uIHx8IFtdfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY29uZGl0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9hdXRvbWF0aW9uL2FjdGlvbi9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5sZWFybl9tb3JlXCIpfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICBzY3JpcHQ9e2FjdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IENvbmRpdGlvbkVkaXQgZnJvbSBcIi4vY29uZGl0aW9uX2VkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1lbnVcIj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5kdXBsaWNhdGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb25UYXA9e3RoaXMub25EZWxldGV9PlxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5jb25kaXRpb25zLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q29uZGl0aW9uRWRpdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IENvbmRpdGlvblJvdyBmcm9tIFwiLi9jb25kaXRpb25fcm93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmFkZENvbmRpdGlvbiA9IHRoaXMuYWRkQ29uZGl0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25kaXRpb25DaGFuZ2VkID0gdGhpcy5jb25kaXRpb25DaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRDb25kaXRpb24oKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5wcm9wcy5jb25kaXRpb24uY29uY2F0KHtcbiAgICAgIGNvbmRpdGlvbjogXCJzdGF0ZVwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShjb25kaXRpb24pO1xuICB9XG5cbiAgY29uZGl0aW9uQ2hhbmdlZChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLnByb3BzLmNvbmRpdGlvbi5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgY29uZGl0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbltpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGNvbmRpdGlvbik7XG4gIH1cblxuICByZW5kZXIoeyBjb25kaXRpb24sIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInRyaWdnZXJzXCI+XG4gICAgICAgIHtjb25kaXRpb24ubWFwKChjbmQsIGlkeCkgPT4gKFxuICAgICAgICAgIDxDb25kaXRpb25Sb3dcbiAgICAgICAgICAgIGluZGV4PXtpZHh9XG4gICAgICAgICAgICBjb25kaXRpb249e2NuZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNvbmRpdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRDb25kaXRpb259PlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5hZGRcIil9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBKU09OVGV4dEFyZWEgZnJvbSBcIi4uL2pzb25fdGV4dGFyZWFcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5ldmVudERhdGFDaGFuZ2VkID0gdGhpcy5ldmVudERhdGFDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgZXZlbnREYXRhQ2hhbmdlZChldmVudF9kYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnRyaWdnZXIsIHsgZXZlbnRfZGF0YSB9KVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBldmVudF90eXBlLCBldmVudF9kYXRhIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmV2ZW50LmV2ZW50X3R5cGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImV2ZW50X3R5cGVcIlxuICAgICAgICAgIHZhbHVlPXtldmVudF90eXBlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEpTT05UZXh0QXJlYVxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZXZlbnQuZXZlbnRfZGF0YVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZXZlbnRfZGF0YX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5ldmVudERhdGFDaGFuZ2VkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudFRyaWdnZXIuZGVmYXVsdENvbmZpZyA9IHtcbiAgZXZlbnRfdHlwZTogXCJcIixcbiAgZXZlbnRfZGF0YToge30sXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb2xvY2F0aW9uVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHpvbmVQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMudHJpZ2dlciwgeyB6b25lOiBldi50YXJnZXQudmFsdWUgfSlcbiAgICApO1xuICB9XG5cbiAgcmFkaW9Hcm91cFBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy50cmlnZ2VyLCB7IGV2ZW50OiBldi50YXJnZXQuc2VsZWN0ZWQgfSlcbiAgICApO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgem9uZSwgZXZlbnQgfSA9IHRyaWdnZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24uc291cmNlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJzb3VyY2VcIlxuICAgICAgICAgIHZhbHVlPXtzb3VyY2V9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLnpvbmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e3pvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuem9uZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZG9tYWluRmlsdGVyPVwiem9uZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBpZD1cImV2ZW50bGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24uZW50ZXJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJsZWF2ZVwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5sZWF2ZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5HZW9sb2NhdGlvblRyaWdnZXIuZGVmYXVsdENvbmZpZyA9IHtcbiAgc291cmNlOiBcIlwiLFxuICB6b25lOiBcIlwiLFxuICBldmVudDogXCJlbnRlclwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc3NUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmFkaW9Hcm91cFBpY2tlZCA9IHRoaXMucmFkaW9Hcm91cFBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmFkaW9Hcm91cFBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy50cmlnZ2VyLCB7IGV2ZW50OiBldi50YXJnZXQuc2VsZWN0ZWQgfSlcbiAgICApO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGV2ZW50IH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaWQ9XCJldmVudGxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBzZWxlY3RlZD17ZXZlbnR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXZlbnRsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLnJhZGlvR3JvdXBQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdGFydFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmhvbWVhc3Npc3RhbnQuc3RhcnRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzaHV0ZG93blwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmhvbWVhc3Npc3RhbnQuc2h1dGRvd25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGFzc1RyaWdnZXIuZGVmYXVsdENvbmZpZyA9IHtcbiAgZXZlbnQ6IFwic3RhcnRcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBUcmlnZ2VyUm93IGZyb20gXCIuL3RyaWdnZXJfcm93XCI7XG5pbXBvcnQgU3RhdGVUcmlnZ2VyIGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRUcmlnZ2VyID0gdGhpcy5hZGRUcmlnZ2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCA9IHRoaXMudHJpZ2dlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZFRyaWdnZXIoKSB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMucHJvcHMudHJpZ2dlci5jb25jYXQoXG4gICAgICBPYmplY3QuYXNzaWduKHsgcGxhdGZvcm06IFwic3RhdGVcIiB9LCBTdGF0ZVRyaWdnZXIuZGVmYXVsdENvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0cmlnZ2VyKTtcbiAgfVxuXG4gIHRyaWdnZXJDaGFuZ2VkKGluZGV4LCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXIuY29uY2F0KCk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRyaWdnZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlcltpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRyaWdnZXIpO1xuICB9XG5cbiAgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlcnNcIj5cbiAgICAgICAge3RyaWdnZXIubWFwKCh0cmcsIGlkeCkgPT4gKFxuICAgICAgICAgIDxUcmlnZ2VyUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgdHJpZ2dlcj17dHJnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudHJpZ2dlckNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRUcmlnZ2VyfT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1RVFRUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHRvcGljLCBwYXlsb2FkIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm1xdHQudG9waWNcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInRvcGljXCJcbiAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm1xdHQucGF5bG9hZFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwicGF5bG9hZFwiXG4gICAgICAgICAgdmFsdWU9e3BheWxvYWR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NUVRUVHJpZ2dlci5kZWZhdWx0Q29uZmlnID0ge1xuICB0b3BpYzogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljU3RhdGVUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGVudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy50cmlnZ2VyLCB7IGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSwgZW50aXR5X2lkLCBiZWxvdywgYWJvdmUgfSA9IHRyaWdnZXI7XG4gICAgbGV0IHRyZ0ZvciA9IHRyaWdnZXIuZm9yO1xuXG4gICAgaWYgKHRyZ0ZvciAmJiAodHJnRm9yLmhvdXJzIHx8IHRyZ0Zvci5taW51dGVzIHx8IHRyZ0Zvci5zZWNvbmRzKSkge1xuICAgICAgLy8gSWYgdGhlIHRyaWdnZXIgd2FzIGRlZmluZWQgdXNpbmcgdGhlIHlhbWwgZGljdCBzeW50YXgsIGNvbnZlcnQgaXQgdG9cbiAgICAgIC8vIHRoZSBlcXVpdmFsZW50IHN0cmluZyBmb3JtYXRcbiAgICAgIGxldCB7IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwIH0gPSB0cmdGb3I7XG4gICAgICBob3VycyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICB0cmdGb3IgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYWJvdmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFib3ZlXCJcbiAgICAgICAgICB2YWx1ZT17YWJvdmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYmVsb3dcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlbG93XCJcbiAgICAgICAgICB2YWx1ZT17YmVsb3d9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZm9yXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJmb3JcIlxuICAgICAgICAgIHZhbHVlPXt0cmdGb3J9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5OdW1lcmljU3RhdGVUcmlnZ2VyLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnRyaWdnZXIsIHsgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgdG8gfSA9IHRyaWdnZXI7XG4gICAgY29uc3QgdHJnRnJvbSA9IHRyaWdnZXIuZnJvbTtcbiAgICBsZXQgdHJnRm9yID0gdHJpZ2dlci5mb3I7XG5cbiAgICBpZiAodHJnRm9yICYmICh0cmdGb3IuaG91cnMgfHwgdHJnRm9yLm1pbnV0ZXMgfHwgdHJnRm9yLnNlY29uZHMpKSB7XG4gICAgICAvLyBJZiB0aGUgdHJpZ2dlciB3YXMgZGVmaW5lZCB1c2luZyB0aGUgeWFtbCBkaWN0IHN5bnRheCwgY29udmVydCBpdCB0b1xuICAgICAgLy8gdGhlIGVxdWl2YWxlbnQgc3RyaW5nIGZvcm1hdFxuICAgICAgbGV0IHsgaG91cnMgPSAwLCBtaW51dGVzID0gMCwgc2Vjb25kcyA9IDAgfSA9IHRyZ0ZvcjtcbiAgICAgIGhvdXJzID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgc2Vjb25kcyA9IHNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICAgIHRyZ0ZvciA9IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZnJvbVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZnJvbVwiXG4gICAgICAgICAgdmFsdWU9e3RyZ0Zyb219XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN0YXRlLnRvXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0b1wiXG4gICAgICAgICAgdmFsdWU9e3RvfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdGF0ZS5mb3JcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZvclwiXG4gICAgICAgICAgdmFsdWU9e3RyZ0Zvcn1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblN0YXRlVHJpZ2dlci5kZWZhdWx0Q29uZmlnID0ge1xuICBlbnRpdHlfaWQ6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1blRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5yYWRpb0dyb3VwUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnRyaWdnZXIsIHsgZXZlbnQ6IGV2LnRhcmdldC5zZWxlY3RlZCB9KVxuICAgICk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgb2Zmc2V0LCBldmVudCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3VuLmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBzZWxlY3RlZD17ZXZlbnR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXZlbnRsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLnJhZGlvR3JvdXBQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5yaXNlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3VuLnN1bnJpc2VcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJzdW5zZXRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4uc3Vuc2V0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4ub2Zmc2V0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJvZmZzZXRcIlxuICAgICAgICAgIHZhbHVlPXtvZmZzZXR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TdW5UcmlnZ2VyLmRlZmF1bHRDb25maWcgPSB7XG4gIGV2ZW50OiBcInN1bnJpc2VcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICBjb25zdCB7IHZhbHVlX3RlbXBsYXRlIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRlbXBsYXRlLnZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ2YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlX3RlbXBsYXRlfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UZW1wbGF0ZVRyaWdnZXIuZGVmYXVsdENvbmZpZyA9IHtcbiAgdmFsdWVfdGVtcGxhdGU6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYXQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZS5hdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYXRcIlxuICAgICAgICAgIHZhbHVlPXthdH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRpbWVUcmlnZ2VyLmRlZmF1bHRDb25maWcgPSB7XG4gIGF0OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQYXR0ZXJuVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50aW1lX3BhdHRlcm4uaG91cnNcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImhvdXJzXCJcbiAgICAgICAgICB2YWx1ZT17aG91cnN9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRpbWVfcGF0dGVybi5taW51dGVzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJtaW51dGVzXCJcbiAgICAgICAgICB2YWx1ZT17bWludXRlc31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZV9wYXR0ZXJuLnNlY29uZHNcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInNlY29uZHNcIlxuICAgICAgICAgIHZhbHVlPXtzZWNvbmRzfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVGltZVBhdHRlcm5UcmlnZ2VyLmRlZmF1bHRDb25maWcgPSB7XG4gIGhvdXJzOiBcIlwiLFxuICBtaW51dGVzOiBcIlwiLFxuICBzZWNvbmRzOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgRXZlbnRUcmlnZ2VyIGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgR2VvbG9jYXRpb25UcmlnZ2VyIGZyb20gXCIuL2dlb19sb2NhdGlvblwiO1xuaW1wb3J0IEhhc3NUcmlnZ2VyIGZyb20gXCIuL2hvbWVhc3Npc3RhbnRcIjtcbmltcG9ydCBNUVRUVHJpZ2dlciBmcm9tIFwiLi9tcXR0XCI7XG5pbXBvcnQgTnVtZXJpY1N0YXRlVHJpZ2dlciBmcm9tIFwiLi9udW1lcmljX3N0YXRlXCI7XG5pbXBvcnQgVGltZVBhdHRlcm5UcmlnZ2VyIGZyb20gXCIuL3RpbWVfcGF0dGVyblwiO1xuaW1wb3J0IFN0YXRlVHJpZ2dlciBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IFN1blRyaWdnZXIgZnJvbSBcIi4vc3VuXCI7XG5pbXBvcnQgVGVtcGxhdGVUcmlnZ2VyIGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgVGltZVRyaWdnZXIgZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IFdlYmhvb2tUcmlnZ2VyIGZyb20gXCIuL3dlYmhvb2tcIjtcbmltcG9ydCBab25lVHJpZ2dlciBmcm9tIFwiLi96b25lXCI7XG5cbmNvbnN0IFRZUEVTID0ge1xuICBldmVudDogRXZlbnRUcmlnZ2VyLFxuICBzdGF0ZTogU3RhdGVUcmlnZ2VyLFxuICBnZW9fbG9jYXRpb246IEdlb2xvY2F0aW9uVHJpZ2dlcixcbiAgaG9tZWFzc2lzdGFudDogSGFzc1RyaWdnZXIsXG4gIG1xdHQ6IE1RVFRUcmlnZ2VyLFxuICBudW1lcmljX3N0YXRlOiBOdW1lcmljU3RhdGVUcmlnZ2VyLFxuICBzdW46IFN1blRyaWdnZXIsXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVRyaWdnZXIsXG4gIHRpbWU6IFRpbWVUcmlnZ2VyLFxuICB0aW1lX3BhdHRlcm46IFRpbWVQYXR0ZXJuVHJpZ2dlcixcbiAgd2ViaG9vazogV2ViaG9va1RyaWdnZXIsXG4gIHpvbmU6IFpvbmVUcmlnZ2VyLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZUNoYW5nZWQgPSB0aGlzLnR5cGVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICB0eXBlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHR5cGUgPSBldi50YXJnZXQuc2VsZWN0ZWRJdGVtLmF0dHJpYnV0ZXMucGxhdGZvcm0udmFsdWU7XG5cbiAgICBpZiAodHlwZSAhPT0gdGhpcy5wcm9wcy50cmlnZ2VyLnBsYXRmb3JtKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKFxuICAgICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgICBPYmplY3QuYXNzaWduKHsgcGxhdGZvcm06IHR5cGUgfSwgVFlQRVNbdHlwZV0uZGVmYXVsdENvbmZpZylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHsgaW5kZXgsIHRyaWdnZXIsIG9uQ2hhbmdlLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgQ29tcCA9IFRZUEVTW3RyaWdnZXIucGxhdGZvcm1dO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gT1BUSU9OUy5pbmRleE9mKHRyaWdnZXIucGxhdGZvcm0pO1xuXG4gICAgaWYgKCFDb21wKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnVuc3VwcG9ydGVkX3BsYXRmb3JtXCIsXG4gICAgICAgICAgICBcInBsYXRmb3JtXCIsXG4gICAgICAgICAgICB0cmlnZ2VyLnBsYXRmb3JtXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeSh0cmlnZ2VyLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlX3NlbGVjdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgb25pcm9uLXNlbGVjdD17dGhpcy50eXBlQ2hhbmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7T1BUSU9OUy5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBwbGF0Zm9ybT17b3B0fT5cbiAgICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuJHtvcHR9LmxhYmVsYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0PlxuICAgICAgICA8Q29tcFxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB0cmlnZ2VyPXt0cmlnZ2VyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGxvY2FsaXplPXtsb2NhbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgVHJpZ2dlckVkaXQgZnJvbSBcIi4vdHJpZ2dlcl9lZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uRGVsZXRlKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChcbiAgICAgIGNvbmZpcm0oXG4gICAgICAgIHRoaXMucHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW1lbnVcIj5cbiAgICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBuby1hbmltYXRpb25zXG4gICAgICAgICAgICAgIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAgIGhvcml6b250YWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1vZmZzZXQ9XCItNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRvdHMtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIG9uVGFwPXt0aGlzLm9uRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUcmlnZ2VyRWRpdCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJob29rVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS53ZWJob29rLndlYmhvb2tfaWRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIndlYmhvb2tfaWRcIlxuICAgICAgICAgIHZhbHVlPXt3ZWJob29rSWR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XZWJob29rVHJpZ2dlci5kZWZhdWx0Q29uZmlnID0ge1xuICB3ZWJob29rX2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuaW1wb3J0IGhhc0xvY2F0aW9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2hhc19sb2NhdGlvblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gICAgdGhpcy5yYWRpb0dyb3VwUGlja2VkID0gdGhpcy5yYWRpb0dyb3VwUGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRpdHlQaWNrZWQgPSB0aGlzLmVudGl0eVBpY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9uZVBpY2tlZCA9IHRoaXMuem9uZVBpY2tlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnRyaWdnZXIsIHsgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUgfSlcbiAgICApO1xuICB9XG5cbiAgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoXG4gICAgICB0aGlzLnByb3BzLmluZGV4LFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy50cmlnZ2VyLCB7IHpvbmU6IGV2LnRhcmdldC52YWx1ZSB9KVxuICAgICk7XG4gIH1cblxuICByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnRyaWdnZXIsIHsgZXZlbnQ6IGV2LnRhcmdldC5zZWxlY3RlZCB9KVxuICAgICk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgZW50aXR5X2lkLCB6b25lLCBldmVudCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuZW50aXR5XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtlbnRpdHlfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW50aXR5UGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBlbnRpdHlGaWx0ZXI9e3pvbmVBbmRMb2NhdGlvbkZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJ6b25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiZW50ZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmVudGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGVhdmVcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmxlYXZlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblpvbmVUcmlnZ2VyLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgem9uZTogXCJcIixcbiAgZXZlbnQ6IFwiZW50ZXJcIixcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7O0FDTUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBS0E7OztBQUdBOztBQU1BOzs7QUFLQTs7QUFFQTs7Ozs7QUFLQTtBQUVBO0FBRkE7OztBQU9BO0FBQ0E7QUFEQTs7Ozs7QUFPQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBREE7OztBQS9DQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUVBO0FBQ0E7QUF4U0E7QUFDQTtBQXlTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7QUFRQTs7Ozs7O0FBUUE7O0FBSUE7OztBQUlBOzs7QUFKQTtBQUNBOzs7QUFjQTtBQUNBOzs7O0FBSUE7O0FBR0E7Ozs7O0FBYUE7QUFDQTs7OztBQUlBOzs7O0FBVUE7O0FBR0E7Ozs7O0FBQUE7Ozs7O0FBNUNBOzs7Ozs7O0FBaUVBOztBQUVBO0FBR0E7Ozs7QUE3R0E7QUFrSEE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwREE7OztBQTFMQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQXBCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1R0E7QUFDQTtBQTZHQTs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQ0E7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBT0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUF2SUE7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQWxEQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBdENBO0FBd0NBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUNBO0FBdkVBO0FBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBQ0E7QUEzQ0E7QUE2Q0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFsREE7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBL0JBO0FBaUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUExRUE7QUE0RUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQWxFQTtBQW9FQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBckRBO0FBdURBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQWxFQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBWUE7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQXRCQTtBQXdCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBQ0E7QUFoRkE7QUFrRkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
