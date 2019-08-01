(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-google-assistant"],
  {
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

        /* harmony default export */ __webpack_exports__["default"] = function(
          stateObj
        ) {
          return stateObj.attributes.friendly_name === undefined
            ? Object(
                _compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"]
              )(stateObj.entity_id).replace(/_/g, " ")
            : stateObj.attributes.friendly_name || "";
        };

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

        var isEmptyFilter = function isEmptyFilter(filter) {
          return (
            filter.include_domains.length +
              filter.include_entities.length +
              filter.exclude_domains.length +
              filter.exclude_entities.length ===
            0
          );
        };
        var generateFilter = function generateFilter(
          includeDomains,
          includeEntities,
          excludeDomains,
          excludeEntities
        ) {
          var includeDomainsSet = new Set(includeDomains);
          var includeEntitiesSet = new Set(includeEntities);
          var excludeDomainsSet = new Set(excludeDomains);
          var excludeEntitiesSet = new Set(excludeEntities);
          var haveInclude =
            includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
          var haveExclude =
            excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

          if (!haveInclude && !haveExclude) {
            return function() {
              return true;
            };
          } // Case 2 - includes, no excludes - only include specified entities

          if (haveInclude && !haveExclude) {
            return function(entityId) {
              return (
                includeEntitiesSet.has(entityId) ||
                includeDomainsSet.has(
                  Object(
                    _compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(entityId)
                )
              );
            };
          } // Case 3 - excludes, no includes - only exclude specified entities

          if (!haveInclude && haveExclude) {
            return function(entityId) {
              return (
                !excludeEntitiesSet.has(entityId) &&
                !excludeDomainsSet.has(
                  Object(
                    _compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
                  )(entityId)
                )
              );
            };
          } // Case 4 - both includes and excludes specified
          // Case 4a - include domain specified
          //  - if domain is included, pass if entity not excluded
          //  - if domain is not included, pass if entity is included
          // note: if both include and exclude domains specified,
          //   the exclude domains are ignored

          if (includeDomainsSet.size) {
            return function(entityId) {
              return includeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              )
                ? !excludeEntitiesSet.has(entityId)
                : includeEntitiesSet.has(entityId);
            };
          } // Case 4b - exclude domain specified
          //  - if domain is excluded, pass if entity is included
          //  - if domain is not excluded, pass if entity not excluded

          if (excludeDomainsSet.size) {
            return function(entityId) {
              return excludeDomainsSet.has(
                Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(
                  entityId
                )
              )
                ? includeEntitiesSet.has(entityId)
                : !excludeEntitiesSet.has(entityId);
            };
          } // Case 4c - neither include or exclude domain specified
          //  - Only pass if entity is included.  Ignore entity excludes.

          return function(entityId) {
            return includeEntitiesSet.has(entityId);
          };
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
        var compare = function compare(a, b) {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        };
        var caseInsensitiveCompare = function caseInsensitiveCompare(a, b) {
          return compare(a.toLowerCase(), b.toLowerCase());
        };

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
        var fetchCloudGoogleEntities = function fetchCloudGoogleEntities(hass) {
          return hass.callWS({
            type: "cloud/google_assistant/entities",
          });
        };

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

        var loadDomainTogglerDialog = function loadDomainTogglerDialog() {
          return Promise.all(
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
        };
        var showDomainTogglerDialog = function showDomainTogglerDialog(
          element,
          dialogParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-domain-toggler",
            dialogImport: loadDomainTogglerDialog,
            dialogParams: dialogParams,
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

        function _templateObject10() {
          var data = _taggedTemplateLiteral([
            "\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n        --paper-toggle-button-label-spacing: 16px;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      paper-toggle-button {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    ",
          ]);

          _templateObject10 = function _templateObject10() {
            return data;
          };

          return data;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function() {
            var self = this,
              args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            '\n                  <h1>Not Exposed entities</h1>\n                  <div class="content">',
            "</div>\n                ",
          ]);

          _templateObject9 = function _templateObject9() {
            return data;
          };

          return data;
        }

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            '\n                  <h1>Exposed entities</h1>\n                  <div class="content">',
            "</div>\n                ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="banner">\n                  Editing which entities are exposed via this UI is disabled\n                  because you have configured entity filters in\n                  configuration.yaml.\n                </div>\n              ',
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n                <paper-icon-button\n                  slot="toolbar-icon"\n                  icon="hass:tune"\n                  @click=',
            "\n                ></paper-icon-button>\n              ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n            selected\n          ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage header="Google Assistant">\n        <span slot="toolbar-icon">\n          ',
            "",
            "\n        </span>\n        ",
            "\n        ",
            "\n          ",
            "\n          ",
            "\n        </div>\n      </hass-subpage>\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                  <paper-toggle-button\n                    .entityId=",
            "\n                    .checked=",
            "\n                    @checked-changed=",
            "\n                  >\n                    Disable two factor authentication\n                  </paper-toggle-button>\n                ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n        <ha-card>\n          <div class="card-content">\n            <state-info\n              .hass=',
            "\n              .stateObj=",
            "\n              secondary-line\n              @click=",
            "\n            >\n              ",
            "\n            </state-info>\n            <paper-toggle-button\n              .entityId=",
            "\n              .disabled=",
            "\n              .checked=",
            "\n              @checked-changed=",
            "\n            >\n              Expose to Google Assistant\n            </paper-toggle-button>\n            ",
            "\n          </div>\n        </ha-card>\n      ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n        <hass-loading-screen></hass-loading-screen>\n      ",
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
          _getDecoratorsApi = function _getDecoratorsApi() {
            return api;
          };
          var api = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function initializeInstanceElements(
              O,
              elements
            ) {
              ["method", "field"].forEach(function(kind) {
                elements.forEach(function(element) {
                  if (element.kind === kind && element.placement === "own") {
                    this.defineClassElement(O, element);
                  }
                }, this);
              }, this);
            },
            initializeClassElements: function initializeClassElements(
              F,
              elements
            ) {
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
            defineClassElement: function defineClassElement(receiver, element) {
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
            decorateClass: function decorateClass(elements, decorators) {
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
            addElementPlacement: function addElementPlacement(
              element,
              placements,
              silent
            ) {
              var keys = placements[element.placement];
              if (!silent && keys.indexOf(element.key) !== -1) {
                throw new TypeError("Duplicated element (" + element.key + ")");
              }
              keys.push(element.key);
            },
            decorateElement: function decorateElement(element, placements) {
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
            decorateConstructor: function decorateConstructor(
              elements,
              decorators
            ) {
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
            fromElementDescriptor: function fromElementDescriptor(element) {
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
            toElementDescriptors: function toElementDescriptors(
              elementObjects
            ) {
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
            toElementDescriptor: function toElementDescriptor(elementObject) {
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
            toElementFinisherExtras: function toElementFinisherExtras(
              elementObject
            ) {
              var element = this.toElementDescriptor(elementObject);
              var finisher = _optionalCallableProperty(
                elementObject,
                "finisher"
              );
              var extras = this.toElementDescriptors(elementObject.extras);
              return { element: element, finisher: finisher, extras: extras };
            },
            fromClassDescriptor: function fromClassDescriptor(elements) {
              var obj = {
                kind: "class",
                elements: elements.map(this.fromElementDescriptor, this),
              };
              var desc = { value: "Descriptor", configurable: true };
              Object.defineProperty(obj, Symbol.toStringTag, desc);
              return obj;
            },
            toClassDescriptor: function toClassDescriptor(obj) {
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
            runClassFinishers: function runClassFinishers(
              constructor,
              finishers
            ) {
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
            disallowProperty: function disallowProperty(obj, name, objectType) {
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
          var isSameElement = function isSameElement(other) {
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
          return _typeof(key) === "symbol" ? key : String(key);
        }

        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
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

        var DEFAULT_CONFIG_EXPOSE = true;

        var configIsExposed = function configIsExposed(config) {
          return config.should_expose === undefined
            ? DEFAULT_CONFIG_EXPOSE
            : config.should_expose;
        };

        var CloudGoogleAssistant = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-google-assistant"
            ),
          ],
          function(_initialize, _LitElement) {
            var CloudGoogleAssistant =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(CloudGoogleAssistant, _LitElement2);

                function CloudGoogleAssistant() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, CloudGoogleAssistant);

                  for (
                    var _len = arguments.length,
                      args = new Array(_len),
                      _key = 0;
                    _key < _len;
                    _key++
                  ) {
                    args[_key] = arguments[_key];
                  }

                  _this = _possibleConstructorReturn(
                    this,
                    (_getPrototypeOf2 = _getPrototypeOf(
                      CloudGoogleAssistant
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return CloudGoogleAssistant;
              })(_LitElement);

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
                  value: function value() {
                    return {};
                  },
                },
                {
                  kind: "field",
                  key: "_popstateSyncAttached",
                  value: function value() {
                    return false;
                  },
                },
                {
                  kind: "field",
                  key: "_popstateReloadStatusAttached",
                  value: function value() {
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
                  value: function value() {
                    return Object(
                      memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"]
                    )(function(filter) {
                      return Object(
                        _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__[
                          "generateFilter"
                        ]
                      )(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities);
                    });
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    if (this._entities === undefined) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    var emptyFilter = Object(
                      _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__[
                        "isEmptyFilter"
                      ]
                    )(this.cloudStatus.google_entities);

                    var filterFunc = this._getEntityFilterFunc(
                      this.cloudStatus.google_entities
                    ); // We will only generate `isInitialExposed` during first render.
                    // On each subsequent render we will use the same set so that cards
                    // will not jump around when we change the exposed setting.

                    var showInExposed = this._isInitialExposed || new Set();
                    var trackExposed = this._isInitialExposed === undefined;
                    var selected = 0; // On first render we decide which cards show in which category.
                    // That way cards won't jump around when changing values.

                    var exposedCards = [];
                    var notExposedCards = [];

                    this._entities.forEach(function(entity) {
                      var stateObj = _this2.hass.states[entity.entity_id];
                      var config =
                        _this2._entityConfigs[entity.entity_id] || {};
                      var isExposed = emptyFilter
                        ? configIsExposed(config)
                        : filterFunc(entity.entity_id);

                      if (isExposed) {
                        selected++;

                        if (trackExposed) {
                          showInExposed.add(entity.entity_id);
                        }
                      }

                      var target = showInExposed.has(entity.entity_id)
                        ? exposedCards
                        : notExposedCards;
                      target.push(
                        Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(
                          _templateObject2(),
                          _this2.hass,
                          stateObj,
                          _this2._showMoreInfo,
                          entity.traits
                            .map(function(trait) {
                              return trait.substr(trait.lastIndexOf(".") + 1);
                            })
                            .join(", "),
                          entity.entity_id,
                          !emptyFilter,
                          isExposed,
                          _this2._exposeChanged,
                          entity.might_2fa
                            ? Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                              )(
                                _templateObject3(),
                                entity.entity_id,
                                Boolean(config.disable_2fa),
                                _this2._disable2FAChanged
                              )
                            : ""
                        )
                      );
                    });

                    if (trackExposed) {
                      this._isInitialExposed = showInExposed;
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject4(),
                      selected,
                      !this.narrow
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5())
                        : "",
                      emptyFilter
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject6(), this._openDomainToggler)
                        : "",
                      !emptyFilter
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject7())
                        : "",
                      exposedCards.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject8(), exposedCards)
                        : "",
                      notExposedCards.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject9(), notExposedCards)
                        : ""
                    );
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
                  value: (function() {
                    var _fetchData2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        var entities;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.next = 2;
                                  return Object(
                                    _data_google_assistant__WEBPACK_IMPORTED_MODULE_16__[
                                      "fetchCloudGoogleEntities"
                                    ]
                                  )(this.hass);

                                case 2:
                                  entities = _context.sent;
                                  entities.sort(function(a, b) {
                                    var stateA =
                                      _this3.hass.states[a.entity_id];
                                    var stateB =
                                      _this3.hass.states[b.entity_id];
                                    return Object(
                                      _common_string_compare__WEBPACK_IMPORTED_MODULE_10__[
                                        "compare"
                                      ]
                                    )(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(stateB) : b.entity_id);
                                  });
                                  this._entities = entities;

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this
                        );
                      })
                    );

                    function _fetchData() {
                      return _fetchData2.apply(this, arguments);
                    }

                    return _fetchData;
                  })(),
                },
                {
                  kind: "method",
                  key: "_showMoreInfo",
                  value: function _showMoreInfo(ev) {
                    var entityId = ev.currentTarget.stateObj.entity_id;
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                        "fireEvent"
                      ]
                    )(this, "hass-more-info", {
                      entityId: entityId,
                    });
                  },
                },
                {
                  kind: "method",
                  key: "_exposeChanged",
                  value: (function() {
                    var _exposeChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2(ev) {
                        var entityId, newExposed;
                        return regeneratorRuntime.wrap(
                          function _callee2$(_context2) {
                            while (1) {
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  entityId = ev.currentTarget.entityId;
                                  newExposed = ev.detail.value;
                                  _context2.next = 4;
                                  return this._updateExposed(
                                    entityId,
                                    newExposed
                                  );

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          },
                          _callee2,
                          this
                        );
                      })
                    );

                    function _exposeChanged(_x) {
                      return _exposeChanged2.apply(this, arguments);
                    }

                    return _exposeChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_updateExposed",
                  value: (function() {
                    var _updateExposed2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3(
                        entityId,
                        newExposed
                      ) {
                        var curExposed;
                        return regeneratorRuntime.wrap(
                          function _callee3$(_context3) {
                            while (1) {
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  curExposed = configIsExposed(
                                    this._entityConfigs[entityId] || {}
                                  );

                                  if (!(newExposed === curExposed)) {
                                    _context3.next = 3;
                                    break;
                                  }

                                  return _context3.abrupt("return");

                                case 3:
                                  _context3.next = 5;
                                  return this._updateConfig(entityId, {
                                    should_expose: newExposed,
                                  });

                                case 5:
                                  this._ensureEntitySync();

                                case 6:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          },
                          _callee3,
                          this
                        );
                      })
                    );

                    function _updateExposed(_x2, _x3) {
                      return _updateExposed2.apply(this, arguments);
                    }

                    return _updateExposed;
                  })(),
                },
                {
                  kind: "method",
                  key: "_disable2FAChanged",
                  value: (function() {
                    var _disable2FAChanged2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4(ev) {
                        var entityId, newDisable2FA, curDisable2FA;
                        return regeneratorRuntime.wrap(
                          function _callee4$(_context4) {
                            while (1) {
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  entityId = ev.currentTarget.entityId;
                                  newDisable2FA = ev.detail.value;
                                  curDisable2FA = Boolean(
                                    (this._entityConfigs[entityId] || {})
                                      .disable_2fa
                                  );

                                  if (!(newDisable2FA === curDisable2FA)) {
                                    _context4.next = 5;
                                    break;
                                  }

                                  return _context4.abrupt("return");

                                case 5:
                                  _context4.next = 7;
                                  return this._updateConfig(entityId, {
                                    disable_2fa: newDisable2FA,
                                  });

                                case 7:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          },
                          _callee4,
                          this
                        );
                      })
                    );

                    function _disable2FAChanged(_x4) {
                      return _disable2FAChanged2.apply(this, arguments);
                    }

                    return _disable2FAChanged;
                  })(),
                },
                {
                  kind: "method",
                  key: "_updateConfig",
                  value: (function() {
                    var _updateConfig2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5(
                        entityId,
                        values
                      ) {
                        var updatedConfig;
                        return regeneratorRuntime.wrap(
                          function _callee5$(_context5) {
                            while (1) {
                              switch ((_context5.prev = _context5.next)) {
                                case 0:
                                  _context5.next = 2;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                                      "updateCloudGoogleEntityConfig"
                                    ]
                                  )(this.hass, entityId, values);

                                case 2:
                                  updatedConfig = _context5.sent;
                                  this._entityConfigs = Object.assign(
                                    {},
                                    this._entityConfigs,
                                    _defineProperty({}, entityId, updatedConfig)
                                  );

                                  this._ensureStatusReload();

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          },
                          _callee5,
                          this
                        );
                      })
                    );

                    function _updateConfig(_x5, _x6) {
                      return _updateConfig2.apply(this, arguments);
                    }

                    return _updateConfig;
                  })(),
                },
                {
                  kind: "method",
                  key: "_openDomainToggler",
                  value: function _openDomainToggler() {
                    var _this4 = this;

                    Object(
                      _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__[
                        "showDomainTogglerDialog"
                      ]
                    )(this, {
                      domains: this._entities
                        .map(function(entity) {
                          return Object(
                            _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__[
                              "default"
                            ]
                          )(entity.entity_id);
                        })
                        .filter(function(value, idx, self) {
                          return self.indexOf(value) === idx;
                        }),
                      toggleDomain: function toggleDomain(domain, turnOn) {
                        _this4._entities.forEach(function(entity) {
                          if (
                            Object(
                              _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__[
                                "default"
                              ]
                            )(entity.entity_id) === domain
                          ) {
                            _this4._updateExposed(entity.entity_id, turnOn);
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

                    var parent = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      function() {
                        return Object(
                          _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__[
                            "fireEvent"
                          ]
                        )(parent, "ha-refresh-cloud-status");
                      },
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
                    var _this5 = this;

                    if (this._popstateSyncAttached) {
                      return;
                    }

                    this._popstateSyncAttached = true; // Cache parent because by the time popstate happens,
                    // this element is detached

                    var parent = this.parentElement;
                    window.addEventListener(
                      "popstate",
                      function() {
                        Object(
                          _util_toast__WEBPACK_IMPORTED_MODULE_13__["showToast"]
                        )(parent, {
                          message: "Synchronizing changes to Google.",
                        });
                        Object(
                          _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                            "cloudSyncGoogleAssistant"
                          ]
                        )(_this5.hass);
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject10());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZ29vZ2xlX2Fzc2lzdGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9kb21haW4tdG9nZ2xlci9zaG93LWRpYWxvZy1kb21haW4tdG9nZ2xlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9nb29nbGUtYXNzaXN0YW50L2Nsb3VkLWdvb2dsZS1hc3Npc3RhbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9iamVjdElkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVPYmplY3RJZCBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT5cbiAgc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCB0eXBlIEZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlGaWx0ZXIge1xuICBpbmNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBpbmNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9lbnRpdGllczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5RmlsdGVyID0gKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXMubGVuZ3RoID09PVxuICAwO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWx0ZXIgPSAoXG4gIGluY2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdLFxuICBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBleGNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXVxuKTogRmlsdGVyRnVuYyA9PiB7XG4gIGNvbnN0IGluY2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChpbmNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGluY2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoaW5jbHVkZUVudGl0aWVzKTtcbiAgY29uc3QgZXhjbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVEb21haW5zKTtcbiAgY29uc3QgZXhjbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChleGNsdWRlRW50aXRpZXMpO1xuXG4gIGNvbnN0IGhhdmVJbmNsdWRlID0gaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgaW5jbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuICBjb25zdCBoYXZlRXhjbHVkZSA9IGV4Y2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGV4Y2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcblxuICAvLyBDYXNlIDEgLSBubyBpbmNsdWRlcyBvciBleGNsdWRlcyAtIHBhc3MgYWxsIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuICgpID0+IHRydWU7XG4gIH1cblxuICAvLyBDYXNlIDIgLSBpbmNsdWRlcywgbm8gZXhjbHVkZXMgLSBvbmx5IGluY2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmIChoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgfHxcbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDMgLSBleGNsdWRlcywgbm8gaW5jbHVkZXMgLSBvbmx5IGV4Y2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpICYmXG4gICAgICAhZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgNCAtIGJvdGggaW5jbHVkZXMgYW5kIGV4Y2x1ZGVzIHNwZWNpZmllZFxuICAvLyBDYXNlIDRhIC0gaW5jbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vIG5vdGU6IGlmIGJvdGggaW5jbHVkZSBhbmQgZXhjbHVkZSBkb21haW5zIHNwZWNpZmllZCxcbiAgLy8gICB0aGUgZXhjbHVkZSBkb21haW5zIGFyZSBpZ25vcmVkXG4gIGlmIChpbmNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGIgLSBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgaWYgKGV4Y2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YyAtIG5laXRoZXIgaW5jbHVkZSBvciBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gT25seSBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZC4gIElnbm9yZSBlbnRpdHkgZXhjbHVkZXMuXG4gIHJldHVybiAoZW50aXR5SWQpID0+IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0cmFpdHM6IHN0cmluZ1tdO1xuICBtaWdodF8yZmE6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzXCIgfSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zIHtcbiAgZG9tYWluczogc3RyaW5nW107XG4gIHRvZ2dsZURvbWFpbjogKGRvbWFpbjogc3RyaW5nLCB0dXJuT246IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiICovIFwiLi9kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b2dnbGUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxuICBDbG91ZFByZWZlcmVuY2VzLFxuICB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyxcbiAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50LFxuICBHb29nbGVFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlRmlsdGVyLFxuICBpc0VtcHR5RmlsdGVyLFxuICBFbnRpdHlGaWx0ZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXJcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQge1xuICBHb29nbGVFbnRpdHksXG4gIGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZ29vZ2xlX2Fzc2lzdGFudFwiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJR19FWFBPU0UgPSB0cnVlO1xuXG5jb25zdCBjb25maWdJc0V4cG9zZWQgPSAoY29uZmlnOiBHb29nbGVFbnRpdHlDb25maWcpID0+XG4gIGNvbmZpZy5zaG91bGRfZXhwb3NlID09PSB1bmRlZmluZWRcbiAgICA/IERFRkFVTFRfQ09ORklHX0VYUE9TRVxuICAgIDogY29uZmlnLnNob3VsZF9leHBvc2U7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiKVxuY2xhc3MgQ2xvdWRHb29nbGVBc3Npc3RhbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBHb29nbGVFbnRpdHlbXTtcbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuICBwcml2YXRlIF9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbnRpdGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhc3MtbG9hZGluZy1zY3JlZW4+PC9oYXNzLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlGaWx0ZXIgPSBpc0VtcHR5RmlsdGVyKHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzXG4gICAgKTtcblxuICAgIC8vIFdlIHdpbGwgb25seSBnZW5lcmF0ZSBgaXNJbml0aWFsRXhwb3NlZGAgZHVyaW5nIGZpcnN0IHJlbmRlci5cbiAgICAvLyBPbiBlYWNoIHN1YnNlcXVlbnQgcmVuZGVyIHdlIHdpbGwgdXNlIHRoZSBzYW1lIHNldCBzbyB0aGF0IGNhcmRzXG4gICAgLy8gd2lsbCBub3QganVtcCBhcm91bmQgd2hlbiB3ZSBjaGFuZ2UgdGhlIGV4cG9zZWQgc2V0dGluZy5cbiAgICBjb25zdCBzaG93SW5FeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCB8fCBuZXcgU2V0KCk7XG4gICAgY29uc3QgdHJhY2tFeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIE9uIGZpcnN0IHJlbmRlciB3ZSBkZWNpZGUgd2hpY2ggY2FyZHMgc2hvdyBpbiB3aGljaCBjYXRlZ29yeS5cbiAgICAvLyBUaGF0IHdheSBjYXJkcyB3b24ndCBqdW1wIGFyb3VuZCB3aGVuIGNoYW5naW5nIHZhbHVlcy5cbiAgICBjb25zdCBleHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcbiAgICBjb25zdCBub3RFeHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHkuZW50aXR5X2lkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzRXhwb3NlZCA9IGVtcHR5RmlsdGVyXG4gICAgICAgID8gY29uZmlnSXNFeHBvc2VkKGNvbmZpZylcbiAgICAgICAgOiBmaWx0ZXJGdW5jKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgaWYgKGlzRXhwb3NlZCkge1xuICAgICAgICBzZWxlY3RlZCsrO1xuXG4gICAgICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgICAgICBzaG93SW5FeHBvc2VkLmFkZChlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBzaG93SW5FeHBvc2VkLmhhcyhlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgICA/IGV4cG9zZWRDYXJkc1xuICAgICAgICA6IG5vdEV4cG9zZWRDYXJkcztcblxuICAgICAgdGFyZ2V0LnB1c2goaHRtbGBcbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7ZW50aXR5LnRyYWl0c1xuICAgICAgICAgICAgICAgIC5tYXAoKHRyYWl0KSA9PiB0cmFpdC5zdWJzdHIodHJhaXQubGFzdEluZGV4T2YoXCIuXCIpICsgMSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFlbXB0eUZpbHRlcn1cbiAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtpc0V4cG9zZWR9XG4gICAgICAgICAgICAgIEBjaGVja2VkLWNoYW5nZWQ9JHt0aGlzLl9leHBvc2VDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeHBvc2UgdG8gR29vZ2xlIEFzc2lzdGFudFxuICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgJHtlbnRpdHkubWlnaHRfMmZhXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b2dnbGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7Qm9vbGVhbihjb25maWcuZGlzYWJsZV8yZmEpfVxuICAgICAgICAgICAgICAgICAgICBAY2hlY2tlZC1jaGFuZ2VkPSR7dGhpcy5fZGlzYWJsZTJGQUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERpc2FibGUgdHdvIGZhY3RvciBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b2dnbGUtYnV0dG9uPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICBgKTtcbiAgICB9KTtcblxuICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgIHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPSBzaG93SW5FeHBvc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJHb29nbGUgQXNzaXN0YW50XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgRWRpdGluZyB3aGljaCBlbnRpdGllcyBhcmUgZXhwb3NlZCB2aWEgdGhpcyBVSSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgYmVjYXVzZSB5b3UgaGF2ZSBjb25maWd1cmVkIGVudGl0eSBmaWx0ZXJzIGluXG4gICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnlhbWwuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5FeHBvc2VkIGVudGl0aWVzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5Ob3QgRXhwb3NlZCBlbnRpdGllczwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bm90RXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmdvb2dsZV9lbnRpdHlfY29uZmlncztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXModGhpcy5oYXNzKTtcbiAgICBlbnRpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUEgPSB0aGlzLmhhc3Muc3RhdGVzW2EuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IHN0YXRlQiA9IHRoaXMuaGFzcy5zdGF0ZXNbYi5lbnRpdHlfaWRdO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoXG4gICAgICAgIHN0YXRlQSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVBKSA6IGEuZW50aXR5X2lkLFxuICAgICAgICBzdGF0ZUIgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQikgOiBiLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd01vcmVJbmZvKGV2KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5jdXJyZW50VGFyZ2V0LnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXhwb3NlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQsIG5ld0V4cG9zZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRXhwb3NlZChlbnRpdHlJZDogc3RyaW5nLCBuZXdFeHBvc2VkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY3VyRXhwb3NlZCA9IGNvbmZpZ0lzRXhwb3NlZCh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSk7XG4gICAgaWYgKG5ld0V4cG9zZWQgPT09IGN1ckV4cG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlQ29uZmlnKGVudGl0eUlkLCB7XG4gICAgICBzaG91bGRfZXhwb3NlOiBuZXdFeHBvc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuX2Vuc3VyZUVudGl0eVN5bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGUyRkFDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGNvbnN0IG5ld0Rpc2FibGUyRkEgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgY29uc3QgY3VyRGlzYWJsZTJGQSA9IEJvb2xlYW4oXG4gICAgICAodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pLmRpc2FibGVfMmZhXG4gICAgKTtcbiAgICBpZiAobmV3RGlzYWJsZTJGQSA9PT0gY3VyRGlzYWJsZTJGQSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIGRpc2FibGVfMmZhOiBuZXdEaXNhYmxlMkZBLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNob3dUb2FzdChwYXJlbnQsIHsgbWVzc2FnZTogXCJTeW5jaHJvbml6aW5nIGNoYW5nZXMgdG8gR29vZ2xlLlwiIH0pO1xuICAgICAgICBjbG91ZFN5bmNHb29nbGVBc3Npc3RhbnQodGhpcy5oYXNzKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgLS1wYXBlci10b2dnbGUtYnV0dG9uLWxhYmVsLXNwYWNpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICAgc3RhdGUtaW5mbyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXRvZ2dsZS1idXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiOiBDbG91ZEdvb2dsZUFzc2lzdGFudDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQSwwZkFDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7O0FBQ0E7Ozs7OztBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTs7Ozs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVVBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvREE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBTUE7QUFEQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFVQTtBQURBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQTRDQTs7O0FBcFVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
