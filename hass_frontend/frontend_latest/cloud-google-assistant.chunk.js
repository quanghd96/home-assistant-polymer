(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-google-assistant"],
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

    /***/ "./src/data/google_assistant.ts":
      /*!**************************************!*\
  !*** ./src/data/google_assistant.ts ***!
  \**************************************/
      /*! exports provided: fetchCloudGoogleEntities */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCloudGoogleEntities",
          function() {
            return fetchCloudGoogleEntities;
          }
        );
        const fetchCloudGoogleEntities = (hass) =>
          hass.callWS({
            type: "cloud/google_assistant/entities",
          });

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

    /***/ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts":
      /*!****************************************************************************!*\
  !*** ./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts ***!
  \****************************************************************************/
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
        /* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../util/toast */ "./src/util/toast.ts"
        );
        /* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
        );
        /* harmony import */ var _data_google_assistant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../data/google_assistant */ "./src/data/google_assistant.ts"
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

        const configIsExposed = (config) =>
          config.should_expose === undefined
            ? DEFAULT_CONFIG_EXPOSE
            : config.should_expose;

        let CloudGoogleAssistant = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-google-assistant"
            ),
          ],
          function(_initialize, _LitElement) {
            class CloudGoogleAssistant extends _LitElement {
              constructor(...args) {
                super(...args);

                _initialize(this);
              }
            }

            return {
              F: CloudGoogleAssistant,
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
                    )(this.cloudStatus.google_entities);

                    const filterFunc = this._getEntityFilterFunc(
                      this.cloudStatus.google_entities
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
              ${entity.traits
                .map((trait) => trait.substr(trait.lastIndexOf(".") + 1))
                .join(", ")}
            </state-info>
            <paper-toggle-button
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @checked-changed=${this._exposeChanged}
            >
              Expose to Google Assistant
            </paper-toggle-button>
            ${
              entity.might_2fa
                ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-toggle-button
                    .entityId=${entity.entity_id}
                    .checked=${Boolean(config.disable_2fa)}
                    @checked-changed=${this._disable2FAChanged}
                  >
                    Disable two factor authentication
                  </paper-toggle-button>
                `
                : ""
            }
          </div>
        </ha-card>
      `);
                    });

                    if (trackExposed) {
                      this._isInitialExposed = showInExposed;
                    }

                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage header="Google Assistant">
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
                      _getPrototypeOf(CloudGoogleAssistant.prototype),
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
                      _getPrototypeOf(CloudGoogleAssistant.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (changedProps.has("cloudStatus")) {
                      this._entityConfigs = this.cloudStatus.prefs.google_entity_configs;
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_fetchData",
                  value: async function _fetchData() {
                    const entities = await Object(
                      _data_google_assistant__WEBPACK_IMPORTED_MODULE_16__[
                        "fetchCloudGoogleEntities"
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
                  key: "_disable2FAChanged",
                  value: async function _disable2FAChanged(ev) {
                    const entityId = ev.currentTarget.entityId;
                    const newDisable2FA = ev.detail.value;
                    const curDisable2FA = Boolean(
                      (this._entityConfigs[entityId] || {}).disable_2fa
                    );

                    if (newDisable2FA === curDisable2FA) {
                      return;
                    }

                    await this._updateConfig(entityId, {
                      disable_2fa: newDisable2FA,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_updateConfig",
                  value: async function _updateConfig(entityId, values) {
                    const updatedConfig = await Object(
                      _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                        "updateCloudGoogleEntityConfig"
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
                      _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__[
                        "showDomainTogglerDialog"
                      ]
                    )(this, {
                      domains: this._entities
                        .map((entity) =>
                          Object(
                            _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__[
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
                              _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__[
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

                    const parent = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      () => {
                        Object(
                          _util_toast__WEBPACK_IMPORTED_MODULE_13__["showToast"]
                        )(parent, {
                          message: "Synchronizing changes to Google.",
                        });
                        Object(
                          _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                            "cloudSyncGoogleAssistant"
                          ]
                        )(this.hass);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZ29vZ2xlX2Fzc2lzdGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9kb21haW4tdG9nZ2xlci9zaG93LWRpYWxvZy1kb21haW4tdG9nZ2xlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9nb29nbGUtYXNzaXN0YW50L2Nsb3VkLWdvb2dsZS1hc3Npc3RhbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PlxuICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IHR5cGUgRmlsdGVyRnVuYyA9IChlbnRpdHlJZDogc3RyaW5nKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUZpbHRlciB7XG4gIGluY2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGluY2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzRW1wdHlGaWx0ZXIgPSAoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllcy5sZW5ndGggPT09XG4gIDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbHRlciA9IChcbiAgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUVudGl0aWVzPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdXG4pOiBGaWx0ZXJGdW5jID0+IHtcbiAgY29uc3QgaW5jbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGluY2x1ZGVEb21haW5zKTtcbiAgY29uc3QgaW5jbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChpbmNsdWRlRW50aXRpZXMpO1xuICBjb25zdCBleGNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoZXhjbHVkZURvbWFpbnMpO1xuICBjb25zdCBleGNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVFbnRpdGllcyk7XG5cbiAgY29uc3QgaGF2ZUluY2x1ZGUgPSBpbmNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBpbmNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG4gIGNvbnN0IGhhdmVFeGNsdWRlID0gZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgZXhjbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuXG4gIC8vIENhc2UgMSAtIG5vIGluY2x1ZGVzIG9yIGV4Y2x1ZGVzIC0gcGFzcyBhbGwgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENhc2UgMiAtIGluY2x1ZGVzLCBubyBleGNsdWRlcyAtIG9ubHkgaW5jbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKGhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSB8fFxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgMyAtIGV4Y2x1ZGVzLCBubyBpbmNsdWRlcyAtIG9ubHkgZXhjbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiBoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgJiZcbiAgICAgICFleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSA0IC0gYm90aCBpbmNsdWRlcyBhbmQgZXhjbHVkZXMgc3BlY2lmaWVkXG4gIC8vIENhc2UgNGEgLSBpbmNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gbm90ZTogaWYgYm90aCBpbmNsdWRlIGFuZCBleGNsdWRlIGRvbWFpbnMgc3BlY2lmaWVkLFxuICAvLyAgIHRoZSBleGNsdWRlIGRvbWFpbnMgYXJlIGlnbm9yZWRcbiAgaWYgKGluY2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YiAtIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICBpZiAoZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRjIC0gbmVpdGhlciBpbmNsdWRlIG9yIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBPbmx5IHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkLiAgSWdub3JlIGVudGl0eSBleGNsdWRlcy5cbiAgcmV0dXJuIChlbnRpdHlJZCkgPT4gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY2xhc3MgU3RhdGVJbmZvIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGV9ICR7dGhpcy5zdGF0ZUJhZGdlVGVtcGxhdGV9ICR7dGhpcy5pbmZvVGVtcGxhdGV9XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtYmFkZ2Uge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZVtpbi1kaWFsb2ddLFxuICAgICAgICA6aG9zdChbc2Vjb25kYXJ5LWxpbmVdKSAubmFtZSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS1hZ28sXG4gICAgICAgIC5leHRyYS1pbmZvLFxuICAgICAgICAuZXh0cmEtaW5mbyA+ICoge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlQmFkZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L3N0YXRlLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCIgaW4tZGlhbG9nJD1cIltbaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIFtbY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWFnb1wiPlxuICAgICAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmxhc3RfY2hhbmdlZF1dXCJcbiAgICAgICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1pbmZvXCI+PHNsb3Q+IDwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogKCkgPT4gZmFsc2UsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWluZm9cIiwgU3RhdGVJbmZvKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlbGF0aXZlLXRpbWVcIiwgSGFSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0cmFpdHM6IHN0cmluZ1tdO1xuICBtaWdodF8yZmE6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzXCIgfSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zIHtcbiAgZG9tYWluczogc3RyaW5nW107XG4gIHRvZ2dsZURvbWFpbjogKGRvbWFpbjogc3RyaW5nLCB0dXJuT246IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiICovIFwiLi9kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxuICBDbG91ZFByZWZlcmVuY2VzLFxuICB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyxcbiAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50LFxuICBHb29nbGVFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlRmlsdGVyLFxuICBpc0VtcHR5RmlsdGVyLFxuICBFbnRpdHlGaWx0ZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXJcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQge1xuICBHb29nbGVFbnRpdHksXG4gIGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZ29vZ2xlX2Fzc2lzdGFudFwiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJR19FWFBPU0UgPSB0cnVlO1xuXG5jb25zdCBjb25maWdJc0V4cG9zZWQgPSAoY29uZmlnOiBHb29nbGVFbnRpdHlDb25maWcpID0+XG4gIGNvbmZpZy5zaG91bGRfZXhwb3NlID09PSB1bmRlZmluZWRcbiAgICA/IERFRkFVTFRfQ09ORklHX0VYUE9TRVxuICAgIDogY29uZmlnLnNob3VsZF9leHBvc2U7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiKVxuY2xhc3MgQ2xvdWRHb29nbGVBc3Npc3RhbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBHb29nbGVFbnRpdHlbXTtcbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuICBwcml2YXRlIF9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbnRpdGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhc3MtbG9hZGluZy1zY3JlZW4+PC9oYXNzLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlGaWx0ZXIgPSBpc0VtcHR5RmlsdGVyKHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzXG4gICAgKTtcblxuICAgIC8vIFdlIHdpbGwgb25seSBnZW5lcmF0ZSBgaXNJbml0aWFsRXhwb3NlZGAgZHVyaW5nIGZpcnN0IHJlbmRlci5cbiAgICAvLyBPbiBlYWNoIHN1YnNlcXVlbnQgcmVuZGVyIHdlIHdpbGwgdXNlIHRoZSBzYW1lIHNldCBzbyB0aGF0IGNhcmRzXG4gICAgLy8gd2lsbCBub3QganVtcCBhcm91bmQgd2hlbiB3ZSBjaGFuZ2UgdGhlIGV4cG9zZWQgc2V0dGluZy5cbiAgICBjb25zdCBzaG93SW5FeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCB8fCBuZXcgU2V0KCk7XG4gICAgY29uc3QgdHJhY2tFeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIE9uIGZpcnN0IHJlbmRlciB3ZSBkZWNpZGUgd2hpY2ggY2FyZHMgc2hvdyBpbiB3aGljaCBjYXRlZ29yeS5cbiAgICAvLyBUaGF0IHdheSBjYXJkcyB3b24ndCBqdW1wIGFyb3VuZCB3aGVuIGNoYW5naW5nIHZhbHVlcy5cbiAgICBjb25zdCBleHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcbiAgICBjb25zdCBub3RFeHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHkuZW50aXR5X2lkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzRXhwb3NlZCA9IGVtcHR5RmlsdGVyXG4gICAgICAgID8gY29uZmlnSXNFeHBvc2VkKGNvbmZpZylcbiAgICAgICAgOiBmaWx0ZXJGdW5jKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgaWYgKGlzRXhwb3NlZCkge1xuICAgICAgICBzZWxlY3RlZCsrO1xuXG4gICAgICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgICAgICBzaG93SW5FeHBvc2VkLmFkZChlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBzaG93SW5FeHBvc2VkLmhhcyhlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgICA/IGV4cG9zZWRDYXJkc1xuICAgICAgICA6IG5vdEV4cG9zZWRDYXJkcztcblxuICAgICAgdGFyZ2V0LnB1c2goaHRtbGBcbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7ZW50aXR5LnRyYWl0c1xuICAgICAgICAgICAgICAgIC5tYXAoKHRyYWl0KSA9PiB0cmFpdC5zdWJzdHIodHJhaXQubGFzdEluZGV4T2YoXCIuXCIpICsgMSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFlbXB0eUZpbHRlcn1cbiAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtpc0V4cG9zZWR9XG4gICAgICAgICAgICAgIEBjaGVja2VkLWNoYW5nZWQ9JHt0aGlzLl9leHBvc2VDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeHBvc2UgdG8gR29vZ2xlIEFzc2lzdGFudFxuICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgJHtlbnRpdHkubWlnaHRfMmZhXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7Qm9vbGVhbihjb25maWcuZGlzYWJsZV8yZmEpfVxuICAgICAgICAgICAgICAgICAgICBAY2hlY2tlZC1jaGFuZ2VkPSR7dGhpcy5fZGlzYWJsZTJGQUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERpc2FibGUgdHdvIGZhY3RvciBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICBgKTtcbiAgICB9KTtcblxuICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgIHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPSBzaG93SW5FeHBvc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJHb29nbGUgQXNzaXN0YW50XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgRWRpdGluZyB3aGljaCBlbnRpdGllcyBhcmUgZXhwb3NlZCB2aWEgdGhpcyBVSSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgYmVjYXVzZSB5b3UgaGF2ZSBjb25maWd1cmVkIGVudGl0eSBmaWx0ZXJzIGluXG4gICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnlhbWwuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5FeHBvc2VkIGVudGl0aWVzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5Ob3QgRXhwb3NlZCBlbnRpdGllczwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bm90RXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmdvb2dsZV9lbnRpdHlfY29uZmlncztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXModGhpcy5oYXNzKTtcbiAgICBlbnRpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUEgPSB0aGlzLmhhc3Muc3RhdGVzW2EuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IHN0YXRlQiA9IHRoaXMuaGFzcy5zdGF0ZXNbYi5lbnRpdHlfaWRdO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoXG4gICAgICAgIHN0YXRlQSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVBKSA6IGEuZW50aXR5X2lkLFxuICAgICAgICBzdGF0ZUIgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQikgOiBiLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd01vcmVJbmZvKGV2KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5jdXJyZW50VGFyZ2V0LnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXhwb3NlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQsIG5ld0V4cG9zZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRXhwb3NlZChlbnRpdHlJZDogc3RyaW5nLCBuZXdFeHBvc2VkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY3VyRXhwb3NlZCA9IGNvbmZpZ0lzRXhwb3NlZCh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSk7XG4gICAgaWYgKG5ld0V4cG9zZWQgPT09IGN1ckV4cG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlQ29uZmlnKGVudGl0eUlkLCB7XG4gICAgICBzaG91bGRfZXhwb3NlOiBuZXdFeHBvc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuX2Vuc3VyZUVudGl0eVN5bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGUyRkFDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGNvbnN0IG5ld0Rpc2FibGUyRkEgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgY29uc3QgY3VyRGlzYWJsZTJGQSA9IEJvb2xlYW4oXG4gICAgICAodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pLmRpc2FibGVfMmZhXG4gICAgKTtcbiAgICBpZiAobmV3RGlzYWJsZTJGQSA9PT0gY3VyRGlzYWJsZTJGQSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIGRpc2FibGVfMmZhOiBuZXdEaXNhYmxlMkZBLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNob3dUb2FzdChwYXJlbnQsIHsgbWVzc2FnZTogXCJTeW5jaHJvbml6aW5nIGNoYW5nZXMgdG8gR29vZ2xlLlwiIH0pO1xuICAgICAgICBjbG91ZFN5bmNHb29nbGVBc3Npc3RhbnQodGhpcy5oYXNzKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgLS1wYXBlci10b2dnbGUtYnV0dG9uLWxhYmVsLXNwYWNpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICAgc3RhdGUtaW5mbyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiOiBDbG91ZEdvb2dsZUFzc2lzdGFudDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUdBO0FBQ0E7QUEyR0E7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsdWhCQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFMQTs7O0FBckJBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFDQTs7QUFRQTs7OztBQUtBOztBQUxBO0FBV0E7Ozs7OztBQUFBO0FBV0E7O0FBR0E7QUFIQTtBQVFBOztBQUdBO0FBSEE7OztBQTFDQTtBQW9EQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRDQTs7O0FBcFVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
