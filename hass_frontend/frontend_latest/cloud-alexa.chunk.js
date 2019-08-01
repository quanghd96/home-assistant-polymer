(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-alexa"],
  {
    /***/ "./src/common/datetime/relative_time.ts":
      /*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return relativeTime;
          }
        );
        /**
         * Calculate a string representing a date object as relative time from now.
         *
         * Example output: 5 minutes ago, in 3 days.
         */
        const tests = [60, 60, 24, 7];
        const langKey = ["second", "minute", "hour", "day"];
        function relativeTime(dateObj, localize, options = {}) {
          const compareTime = options.compareTime || new Date();
          let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
          const tense = delta >= 0 ? "past" : "future";
          delta = Math.abs(delta);
          let timeDesc;

          for (let i = 0; i < tests.length; i++) {
            if (delta < tests[i]) {
              delta = Math.floor(delta);
              timeDesc = localize(
                `ui.components.relative_time.duration.${langKey[i]}`,
                "count",
                delta
              );
              break;
            }

            delta /= tests[i];
          }

          if (timeDesc === undefined) {
            delta = Math.floor(delta);
            timeDesc = localize(
              "ui.components.relative_time.duration.week",
              "count",
              delta
            );
          }

          return options.includeTense === false
            ? timeDesc
            : localize(
                `ui.components.relative_time.${tense}`,
                "time",
                timeDesc
              );
        }

        /***/
      },

    /***/ "./src/common/entity/compute_object_id.ts":
      /*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return computeObjectId;
          }
        );
        /** Compute the object ID of a state. */
        function computeObjectId(entityId) {
          return entityId.substr(entityId.indexOf(".") + 1);
        }

        /***/
      },

    /***/ "./src/common/entity/compute_state_name.ts":
      /*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        /* harmony default export */ __webpack_exports__["default"] = (
          stateObj
        ) =>
          stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";

        /***/
      },

    /***/ "./src/common/entity/entity_filter.ts":
      /*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
      /*! exports provided: isEmptyFilter, generateFilter */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isEmptyFilter",
          function() {
            return isEmptyFilter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "generateFilter",
          function() {
            return generateFilter;
          }
        );
        /* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_domain */ "./src/common/entity/compute_domain.ts"
        );

        const isEmptyFilter = (filter) =>
          filter.include_domains.length +
            filter.include_entities.length +
            filter.exclude_domains.length +
            filter.exclude_entities.length ===
          0;
        const generateFilter = (
          includeDomains,
          includeEntities,
          excludeDomains,
          excludeEntities
        ) => {
          const includeDomainsSet = new Set(includeDomains);
          const includeEntitiesSet = new Set(includeEntities);
          const excludeDomainsSet = new Set(excludeDomains);
          const excludeEntitiesSet = new Set(excludeEntities);
          const haveInclude =
            includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
          const haveExclude =
            excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

          if (!haveInclude && !haveExclude) {
            return () => true;
          } // Case 2 - includes, no excludes - only include specified entities

          if (haveInclude && !haveExclude) {
            return (entityId) =>
              includeEntitiesSet.has(entityId) ||
              includeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              );
          } // Case 3 - excludes, no includes - only exclude specified entities

          if (!haveInclude && haveExclude) {
            return (entityId) =>
              !excludeEntitiesSet.has(entityId) &&
              !excludeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              );
          } // Case 4 - both includes and excludes specified
          // Case 4a - include domain specified
          //  - if domain is included, pass if entity not excluded
          //  - if domain is not included, pass if entity is included
          // note: if both include and exclude domains specified,
          //   the exclude domains are ignored

          if (includeDomainsSet.size) {
            return (entityId) =>
              includeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              )
                ? !excludeEntitiesSet.has(entityId)
                : includeEntitiesSet.has(entityId);
          } // Case 4b - exclude domain specified
          //  - if domain is excluded, pass if entity is included
          //  - if domain is not excluded, pass if entity not excluded

          if (excludeDomainsSet.size) {
            return (entityId) =>
              excludeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              )
                ? includeEntitiesSet.has(entityId)
                : !excludeEntitiesSet.has(entityId);
          } // Case 4c - neither include or exclude domain specified
          //  - Only pass if entity is included.  Ignore entity excludes.

          return (entityId) => includeEntitiesSet.has(entityId);
        };

        /***/
      },

    /***/ "./src/common/string/compare.ts":
      /*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
      /*! exports provided: compare, caseInsensitiveCompare */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "compare",
          function() {
            return compare;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "caseInsensitiveCompare",
          function() {
            return caseInsensitiveCompare;
          }
        );
        const compare = (a, b) => {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        };
        const caseInsensitiveCompare = (a, b) =>
          compare(a.toLowerCase(), b.toLowerCase());

        /***/
      },

    /***/ "./src/components/entity/state-info.js":
      /*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
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
        /* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./state-badge */ "./src/components/entity/state-badge.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );

        class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
          "PolymerElement"
        ] {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
          }

          static get styleTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
          }

          static get stateBadgeTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
          }

          static get infoTemplate() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
              "html"
            ]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
          }

          static get properties() {
            return {
              hass: Object,
              stateObj: Object,
              inDialog: {
                type: Boolean,
                value: () => false,
              },
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
                computed: "computeRTL(hass)",
              },
            };
          }

          computeStateName(stateObj) {
            return Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ]
            )(stateObj);
          }

          computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__[
                "computeRTL"
              ]
            )(hass);
          }
        }

        customElements.define("state-info", StateInfo);

        /***/
      },

    /***/ "./src/components/ha-relative-time.js":
      /*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaRelativeTime extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
            "PolymerElement"
          ]
        ) {
          static get properties() {
            return {
              hass: Object,
              datetime: {
                type: String,
                observer: "datetimeChanged",
              },
              datetimeObj: {
                type: Object,
                observer: "datetimeObjChanged",
              },
              parsedDateTime: Object,
            };
          }

          constructor() {
            super();
            this.updateRelative = this.updateRelative.bind(this);
          }

          connectedCallback() {
            super.connectedCallback(); // update every 60 seconds

            this.updateInterval = setInterval(this.updateRelative, 60000);
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            clearInterval(this.updateInterval);
          }

          datetimeChanged(newVal) {
            this.parsedDateTime = newVal ? new Date(newVal) : null;
            this.updateRelative();
          }

          datetimeObjChanged(newVal) {
            this.parsedDateTime = newVal;
            this.updateRelative();
          }

          updateRelative() {
            const root = Object(
              _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__[
                "dom"
              ]
            )(this);

            if (!this.parsedDateTime) {
              root.innerHTML = this.localize(
                "ui.components.relative_time.never"
              );
            } else {
              root.innerHTML = Object(
                _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ]
              )(this.parsedDateTime, this.localize);
            }
          }
        }

        customElements.define("ha-relative-time", HaRelativeTime);

        /***/
      },

    /***/ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts":
      /*!******************************************************************!*\
  !*** ./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts ***!
  \******************************************************************/
      /*! exports provided: loadDomainTogglerDialog, showDomainTogglerDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadDomainTogglerDialog",
          function() {
            return loadDomainTogglerDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showDomainTogglerDialog",
          function() {
            return showDomainTogglerDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        const loadDomainTogglerDialog = () =>
          Promise.all(
            /*! import() | dialog-domain-toggler */ [
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
              ),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e("dialog-domain-toggler"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-domain-toggler */ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts"
            )
          );
        const showDomainTogglerDialog = (element, dialogParams) => {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-domain-toggler",
            dialogImport: loadDomainTogglerDialog,
            dialogParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/cloud/alexa/cloud-alexa.ts":
      /*!******************************************************!*\
  !*** ./src/panels/config/cloud/alexa/cloud-alexa.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js"
        );
        /* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../data/cloud */ "./src/data/cloud.ts"
        );
        /* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js"
        );
        /* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );
        /* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../data/alexa */ "./src/data/alexa.ts"
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

        const DEFAULT_CONFIG_EXPOSE = true;
        const IGNORE_INTERFACES = ["Alexa.EndpointHealth"];

        const configIsExposed = (config) =>
          config.should_expose === undefined
            ? DEFAULT_CONFIG_EXPOSE
            : config.should_expose;

        let CloudAlexa = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-alexa"
            ),
          ],
          function(_initialize, _LitElement) {
            class CloudAlexa extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: CloudAlexa,
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
                  key: "cloudStatus",
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
                  key: "narrow",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_entities",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["property"]
                    )(),
                  ],
                  key: "_entityConfigs",

                  value() {
                    return {};
                  },
                },
                {
                  kind: "field",
                  key: "_popstateSyncAttached",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  key: "_popstateReloadStatusAttached",

                  value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  key: "_isInitialExposed",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_getEntityFilterFunc",

                  value() {
                    return Object(
                      memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"]
                    )((filter) =>
                      Object(
                        _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__[
                          "generateFilter"
                        ]
                      )(
                        filter.include_domains,
                        filter.include_entities,
                        filter.exclude_domains,
                        filter.exclude_entities
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (this._entities === undefined) {
                      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <hass-loading-screen></hass-loading-screen>
      `;
                    }

                    const emptyFilter = Object(
                      _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__[
                        "isEmptyFilter"
                      ]
                    )(this.cloudStatus.alexa_entities);

                    const filterFunc = this._getEntityFilterFunc(
                      this.cloudStatus.alexa_entities
                    ); // We will only generate `isInitialExposed` during first render.
                    // On each subsequent render we will use the same set so that cards
                    // will not jump around when we change the exposed setting.

                    const showInExposed = this._isInitialExposed || new Set();
                    const trackExposed = this._isInitialExposed === undefined;
                    let selected = 0; // On first render we decide which cards show in which category.
                    // That way cards won't jump around when changing values.

                    const exposedCards = [];
                    const notExposedCards = [];

                    this._entities.forEach((entity) => {
                      const stateObj = this.hass.states[entity.entity_id];
                      const config =
                        this._entityConfigs[entity.entity_id] || {};
                      const isExposed = emptyFilter
                        ? configIsExposed(config)
                        : filterFunc(entity.entity_id);

                      if (isExposed) {
                        selected++;

                        if (trackExposed) {
                          showInExposed.add(entity.entity_id);
                        }
                      }

                      const target = showInExposed.has(entity.entity_id)
                        ? exposedCards
                        : notExposedCards;
                      target.push(lit_element__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]`
        <ha-card>
          <div class="card-content">
            <state-info
              .hass=${this.hass}
              .stateObj=${stateObj}
              secondary-line
              @click=${this._showMoreInfo}
            >
              ${entity.interfaces
                .filter((ifc) => !IGNORE_INTERFACES.includes(ifc))
                .map((ifc) =>
                  ifc.replace("Alexa.", "").replace("Controller", "")
                )
                .join(", ")}
            </state-info>
            <paper-toggle-button
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @checked-changed=${this._exposeChanged}
            >
              Expose to Alexa
            </paper-toggle-button>
          </div>
        </ha-card>
      `);
                    });

                    if (trackExposed) {
                      this._isInitialExposed = showInExposed;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage header="Alexa">
        <span slot="toolbar-icon">
          ${selected}${
                      !this.narrow
                        ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            selected
          `
                        : ""
                    }
        </span>
        ${
          emptyFilter
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-icon-button
                  slot="toolbar-icon"
                  icon="hass:tune"
                  @click=${this._openDomainToggler}
                ></paper-icon-button>
              `
            : ""
        }
        ${
          !emptyFilter
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="banner">
                  Editing which entities are exposed via this UI is disabled
                  because you have configured entity filters in
                  configuration.yaml.
                </div>
              `
            : ""
        }
          ${
            exposedCards.length > 0
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>Exposed entities</h1>
                  <div class="content">${exposedCards}</div>
                `
              : ""
          }
          ${
            notExposedCards.length > 0
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>Not Exposed entities</h1>
                  <div class="content">${notExposedCards}</div>
                `
              : ""
          }
        </div>
      </hass-subpage>
    `;
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(CloudAlexa.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._fetchData();
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    _get(
                      _getPrototypeOf(CloudAlexa.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (changedProps.has("cloudStatus")) {
                      this._entityConfigs = this.cloudStatus.prefs.alexa_entity_configs;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_fetchData",
                  value: async function _fetchData() {
                    const entities = await Object(
                      _data_alexa__WEBPACK_IMPORTED_MODULE_15__[
                        "fetchCloudAlexaEntities"
                      ]
                    )(this.hass);
                    entities.sort((a, b) => {
                      const stateA = this.hass.states[a.entity_id];
                      const stateB = this.hass.states[b.entity_id];
                      return Object(
                        _common_string_compare__WEBPACK_IMPORTED_MODULE_10__[
                          "compare"
                        ]
                      )(
                        stateA
                          ? Object(
                              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__[
                                "default"
                              ]
                            )(stateA)
                          : a.entity_id,
                        stateB
                          ? Object(
                              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__[
                                "default"
                              ]
                            )(stateB)
                          : b.entity_id
                      );
                    });
                    this._entities = entities;
                  },
                },
                {
                  kind: "method",
                  key: "_showMoreInfo",
                  value: function _showMoreInfo(ev) {
                    const entityId = ev.currentTarget.stateObj.entity_id;
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                        "fireEvent"
                      ]
                    )(this, "hass-more-info", {
                      entityId,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_exposeChanged",
                  value: async function _exposeChanged(ev) {
                    const entityId = ev.currentTarget.entityId;
                    const newExposed = ev.detail.value;
                    await this._updateExposed(entityId, newExposed);
                  },
                },
                {
                  kind: "method",
                  key: "_updateExposed",
                  value: async function _updateExposed(entityId, newExposed) {
                    const curExposed = configIsExposed(
                      this._entityConfigs[entityId] || {}
                    );

                    if (newExposed === curExposed) {
                      return;
                    }

                    await this._updateConfig(entityId, {
                      should_expose: newExposed,
                    });

                    this._ensureEntitySync();
                  },
                },
                {
                  kind: "method",
                  key: "_updateConfig",
                  value: async function _updateConfig(entityId, values) {
                    const updatedConfig = await Object(
                      _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                        "updateCloudAlexaEntityConfig"
                      ]
                    )(this.hass, entityId, values);
                    this._entityConfigs = Object.assign(
                      {},
                      this._entityConfigs,
                      {
                        [entityId]: updatedConfig,
                      }
                    );

                    this._ensureStatusReload();
                  },
                },
                {
                  kind: "method",
                  key: "_openDomainToggler",
                  value: function _openDomainToggler() {
                    Object(
                      _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__[
                        "showDomainTogglerDialog"
                      ]
                    )(this, {
                      domains: this._entities
                        .map((entity) =>
                          Object(
                            _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__[
                              "default"
                            ]
                          )(entity.entity_id)
                        )
                        .filter(
                          (value, idx, self) => self.indexOf(value) === idx
                        ),
                      toggleDomain: (domain, turnOn) => {
                        this._entities.forEach((entity) => {
                          if (
                            Object(
                              _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__[
                                "default"
                              ]
                            )(entity.entity_id) === domain
                          ) {
                            this._updateExposed(entity.entity_id, turnOn);
                          }
                        });
                      },
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_ensureStatusReload",
                  value: function _ensureStatusReload() {
                    if (this._popstateReloadStatusAttached) {
                      return;
                    }

                    this._popstateReloadStatusAttached = true; // Cache parent because by the time popstate happens,
                    // this element is detached

                    const parent = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      () =>
                        Object(
                          _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                            "fireEvent"
                          ]
                        )(parent, "ha-refresh-cloud-status"),
                      {
                        once: true,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_ensureEntitySync",
                  value: function _ensureEntitySync() {
                    if (this._popstateSyncAttached) {
                      return;
                    }

                    this._popstateSyncAttached = true; // Cache parent because by the time popstate happens,
                    // this element is detached
                    // const parent = this.parentElement!;

                    window.addEventListener(
                      "popstate",
                      () => {
                        // We don't have anything yet.
                        // showToast(parent, { message: "Synchronizing changes to Google." });
                        // cloudSyncGoogleAssistant(this.hass);
                      },
                      {
                        once: true,
                      }
                    );
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .banner {
        color: var(--primary-text-color);
        background-color: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        padding: 16px 8px;
        text-align: center;
      }
      h1 {
        color: var(--primary-text-color);
        font-size: 24px;
        letter-spacing: -0.012em;
        margin-bottom: 0;
        padding: 0 8px;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        --paper-toggle-button-label-spacing: 16px;
      }
      paper-toggle-button {
        clear: both;
      }
      ha-card {
        margin: 4px;
        width: 100%;
        max-width: 300px;
      }
      .card-content {
        padding-bottom: 12px;
      }
      state-info {
        cursor: pointer;
      }
      paper-toggle-button {
        padding: 8px 0;
      }

      @media all and (max-width: 450px) {
        ha-card {
          max-width: 100%;
        }
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
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FsZXhhL2Nsb3VkLWFsZXhhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCB0eXBlIEZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlGaWx0ZXIge1xuICBpbmNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBpbmNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9lbnRpdGllczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5RmlsdGVyID0gKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXMubGVuZ3RoID09PVxuICAwO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWx0ZXIgPSAoXG4gIGluY2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdLFxuICBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBleGNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXVxuKTogRmlsdGVyRnVuYyA9PiB7XG4gIGNvbnN0IGluY2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChpbmNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGluY2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoaW5jbHVkZUVudGl0aWVzKTtcbiAgY29uc3QgZXhjbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVEb21haW5zKTtcbiAgY29uc3QgZXhjbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChleGNsdWRlRW50aXRpZXMpO1xuXG4gIGNvbnN0IGhhdmVJbmNsdWRlID0gaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgaW5jbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuICBjb25zdCBoYXZlRXhjbHVkZSA9IGV4Y2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGV4Y2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcblxuICAvLyBDYXNlIDEgLSBubyBpbmNsdWRlcyBvciBleGNsdWRlcyAtIHBhc3MgYWxsIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuICgpID0+IHRydWU7XG4gIH1cblxuICAvLyBDYXNlIDIgLSBpbmNsdWRlcywgbm8gZXhjbHVkZXMgLSBvbmx5IGluY2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmIChoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgfHxcbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDMgLSBleGNsdWRlcywgbm8gaW5jbHVkZXMgLSBvbmx5IGV4Y2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpICYmXG4gICAgICAhZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgNCAtIGJvdGggaW5jbHVkZXMgYW5kIGV4Y2x1ZGVzIHNwZWNpZmllZFxuICAvLyBDYXNlIDRhIC0gaW5jbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vIG5vdGU6IGlmIGJvdGggaW5jbHVkZSBhbmQgZXhjbHVkZSBkb21haW5zIHNwZWNpZmllZCxcbiAgLy8gICB0aGUgZXhjbHVkZSBkb21haW5zIGFyZSBpZ25vcmVkXG4gIGlmIChpbmNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGIgLSBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgaWYgKGV4Y2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YyAtIG5laXRoZXIgaW5jbHVkZSBvciBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gT25seSBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZC4gIElnbm9yZSBlbnRpdHkgZXhjbHVkZXMuXG4gIHJldHVybiAoZW50aXR5SWQpID0+IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSW5mbyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlfSAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfSAke3RoaXMuaW5mb1RlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWVbaW4tZGlhbG9nXSxcbiAgICAgICAgOmhvc3QoW3NlY29uZGFyeS1saW5lXSkgLm5hbWUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtYWdvLFxuICAgICAgICAuZXh0cmEtaW5mbyxcbiAgICAgICAgLmV4dHJhLWluZm8gPiAqIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUJhZGdlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIGluLWRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1hZ29cIj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lPVwiW1tzdGF0ZU9iai5sYXN0X2NoYW5nZWRdXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWluRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPjxzbG90PiA8L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6ICgpID0+IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1pbmZvXCIsIFN0YXRlSW5mbyk7XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRhdGV0aW1lT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWREYXRlVGltZTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUgPSB0aGlzLnVwZGF0ZVJlbGF0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIHVwZGF0ZSBldmVyeSA2MCBzZWNvbmRzXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUmVsYXRpdmUsIDYwMDAwKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG4gIGRhdGV0aW1lQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsID8gbmV3IERhdGUobmV3VmFsKSA6IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICBkYXRldGltZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbGF0aXZlKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb20odGhpcyk7XG4gICAgaWYgKCF0aGlzLnBhcnNlZERhdGVUaW1lKSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gcmVsYXRpdmVUaW1lKHRoaXMucGFyc2VkRGF0ZVRpbWUsIHRoaXMubG9jYWxpemUpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWxhdGl2ZS10aW1lXCIsIEhhUmVsYXRpdmVUaW1lKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgdG9nZ2xlRG9tYWluOiAoZG9tYWluOiBzdHJpbmcsIHR1cm5PbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIgKi8gXCIuL2RpYWxvZy1kb21haW4tdG9nZ2xlclwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERvbWFpblRvZ2dsZXJEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG4gIENsb3VkUHJlZmVyZW5jZXMsXG4gIHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcsXG4gIEFsZXhhRW50aXR5Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUZpbHRlcixcbiAgaXNFbXB0eUZpbHRlcixcbiAgRW50aXR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBBbGV4YUVudGl0eSwgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hbGV4YVwiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJR19FWFBPU0UgPSB0cnVlO1xuY29uc3QgSUdOT1JFX0lOVEVSRkFDRVMgPSBbXCJBbGV4YS5FbmRwb2ludEhlYWx0aFwiXTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogQWxleGFFbnRpdHlDb25maWcpID0+XG4gIGNvbmZpZy5zaG91bGRfZXhwb3NlID09PSB1bmRlZmluZWRcbiAgICA/IERFRkFVTFRfQ09ORklHX0VYUE9TRVxuICAgIDogY29uZmlnLnNob3VsZF9leHBvc2U7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtYWxleGFcIilcbmNsYXNzIENsb3VkQWxleGEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBjbG91ZFN0YXR1cyE6IENsb3VkU3RhdHVzTG9nZ2VkSW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllcz86IEFsZXhhRW50aXR5W107XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX2VudGl0eV9jb25maWdzXCJdID0ge307XG4gIHByaXZhdGUgX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNJbml0aWFsRXhwb3NlZD86IFNldDxzdHJpbmc+O1xuXG4gIHByaXZhdGUgX2dldEVudGl0eUZpbHRlckZ1bmMgPSBtZW1vaXplT25lKChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgICBnZW5lcmF0ZUZpbHRlcihcbiAgICAgIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllc1xuICAgIClcbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUZpbHRlciA9IGlzRW1wdHlGaWx0ZXIodGhpcy5jbG91ZFN0YXR1cy5hbGV4YV9lbnRpdGllcyk7XG4gICAgY29uc3QgZmlsdGVyRnVuYyA9IHRoaXMuX2dldEVudGl0eUZpbHRlckZ1bmMoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmFsZXhhX2VudGl0aWVzXG4gICAgKTtcblxuICAgIC8vIFdlIHdpbGwgb25seSBnZW5lcmF0ZSBgaXNJbml0aWFsRXhwb3NlZGAgZHVyaW5nIGZpcnN0IHJlbmRlci5cbiAgICAvLyBPbiBlYWNoIHN1YnNlcXVlbnQgcmVuZGVyIHdlIHdpbGwgdXNlIHRoZSBzYW1lIHNldCBzbyB0aGF0IGNhcmRzXG4gICAgLy8gd2lsbCBub3QganVtcCBhcm91bmQgd2hlbiB3ZSBjaGFuZ2UgdGhlIGV4cG9zZWQgc2V0dGluZy5cbiAgICBjb25zdCBzaG93SW5FeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCB8fCBuZXcgU2V0KCk7XG4gICAgY29uc3QgdHJhY2tFeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIE9uIGZpcnN0IHJlbmRlciB3ZSBkZWNpZGUgd2hpY2ggY2FyZHMgc2hvdyBpbiB3aGljaCBjYXRlZ29yeS5cbiAgICAvLyBUaGF0IHdheSBjYXJkcyB3b24ndCBqdW1wIGFyb3VuZCB3aGVuIGNoYW5naW5nIHZhbHVlcy5cbiAgICBjb25zdCBleHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcbiAgICBjb25zdCBub3RFeHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHkuZW50aXR5X2lkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzRXhwb3NlZCA9IGVtcHR5RmlsdGVyXG4gICAgICAgID8gY29uZmlnSXNFeHBvc2VkKGNvbmZpZylcbiAgICAgICAgOiBmaWx0ZXJGdW5jKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgaWYgKGlzRXhwb3NlZCkge1xuICAgICAgICBzZWxlY3RlZCsrO1xuXG4gICAgICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgICAgICBzaG93SW5FeHBvc2VkLmFkZChlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBzaG93SW5FeHBvc2VkLmhhcyhlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgICA/IGV4cG9zZWRDYXJkc1xuICAgICAgICA6IG5vdEV4cG9zZWRDYXJkcztcblxuICAgICAgdGFyZ2V0LnB1c2goaHRtbGBcbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7ZW50aXR5LmludGVyZmFjZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpZmMpID0+ICFJR05PUkVfSU5URVJGQUNFUy5pbmNsdWRlcyhpZmMpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGlmYykgPT5cbiAgICAgICAgICAgICAgICAgIGlmYy5yZXBsYWNlKFwiQWxleGEuXCIsIFwiXCIpLnJlcGxhY2UoXCJDb250cm9sbGVyXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHkuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshZW1wdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7aXNFeHBvc2VkfVxuICAgICAgICAgICAgICBAY2hlY2tlZC1jaGFuZ2VkPSR7dGhpcy5fZXhwb3NlQ2hhbmdlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhwb3NlIHRvIEFsZXhhXG4gICAgICAgICAgICA8L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9IHNob3dJbkV4cG9zZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIkFsZXhhXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgRWRpdGluZyB3aGljaCBlbnRpdGllcyBhcmUgZXhwb3NlZCB2aWEgdGhpcyBVSSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgYmVjYXVzZSB5b3UgaGF2ZSBjb25maWd1cmVkIGVudGl0eSBmaWx0ZXJzIGluXG4gICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnlhbWwuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5FeHBvc2VkIGVudGl0aWVzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5Ob3QgRXhwb3NlZCBlbnRpdGllczwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bm90RXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmFsZXhhX2VudGl0eV9jb25maWdzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzKHRoaXMuaGFzcyk7XG4gICAgZW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVBID0gdGhpcy5oYXNzLnN0YXRlc1thLmVudGl0eV9pZF07XG4gICAgICBjb25zdCBzdGF0ZUIgPSB0aGlzLmhhc3Muc3RhdGVzW2IuZW50aXR5X2lkXTtcbiAgICAgIHJldHVybiBjb21wYXJlKFxuICAgICAgICBzdGF0ZUEgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQSkgOiBhLmVudGl0eV9pZCxcbiAgICAgICAgc3RhdGVCID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUIpIDogYi5lbnRpdHlfaWRcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dNb3JlSW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4cG9zZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RXhwb3NlZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWcoZW50aXR5SWQ6IHN0cmluZywgdmFsdWVzOiBBbGV4YUVudGl0eUNvbmZpZykge1xuICAgIGNvbnN0IHVwZGF0ZWRDb25maWcgPSBhd2FpdCB1cGRhdGVDbG91ZEFsZXhhRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIC8vIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55dGhpbmcgeWV0LlxuICAgICAgICAvLyBzaG93VG9hc3QocGFyZW50LCB7IG1lc3NhZ2U6IFwiU3luY2hyb25pemluZyBjaGFuZ2VzIHRvIEdvb2dsZS5cIiB9KTtcbiAgICAgICAgLy8gY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50KHRoaXMuaGFzcyk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1sYWJlbC1zcGFjaW5nOiAxNnB4O1xuICAgICAgfVxuICAgICAgcGFwZXItdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBwYXBlci10b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWFsZXhhXCI6IENsb3VkQWxleGE7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFHQTtBQUNBO0FBMkdBOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQUNBO0FBdURBOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLHVoQkFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFwQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUNBOztBQVFBOzs7O0FBS0E7O0FBTEE7QUFXQTs7Ozs7O0FBQUE7QUFXQTs7QUFHQTtBQUhBO0FBUUE7O0FBR0E7QUFIQTs7O0FBMUNBO0FBb0RBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0NBOzs7QUF2VEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
