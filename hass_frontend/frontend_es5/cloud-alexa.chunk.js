(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-alexa"],
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

        function _templateObject9() {
          var data = _taggedTemplateLiteral([
            "\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n        --paper-toggle-button-label-spacing: 16px;\n      }\n      paper-toggle-button {\n        clear: both;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      paper-toggle-button {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    ",
          ]);

          _templateObject9 = function _templateObject9() {
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

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            '\n                  <h1>Not Exposed entities</h1>\n                  <div class="content">',
            "</div>\n                ",
          ]);

          _templateObject8 = function _templateObject8() {
            return data;
          };

          return data;
        }

        function _templateObject7() {
          var data = _taggedTemplateLiteral([
            '\n                  <h1>Exposed entities</h1>\n                  <div class="content">',
            "</div>\n                ",
          ]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="banner">\n                  Editing which entities are exposed via this UI is disabled\n                  because you have configured entity filters in\n                  configuration.yaml.\n                </div>\n              ',
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            '\n                <paper-icon-button\n                  slot="toolbar-icon"\n                  icon="hass:tune"\n                  @click=',
            "\n                ></paper-icon-button>\n              ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n            selected\n          ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage header="Alexa">\n        <span slot="toolbar-icon">\n          ',
            "",
            "\n        </span>\n        ",
            "\n        ",
            "\n          ",
            "\n          ",
            "\n        </div>\n      </hass-subpage>\n    ",
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
            "\n            >\n              Expose to Alexa\n            </paper-toggle-button>\n          </div>\n        </ha-card>\n      ",
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
        var IGNORE_INTERFACES = ["Alexa.EndpointHealth"];

        var configIsExposed = function configIsExposed(config) {
          return config.should_expose === undefined
            ? DEFAULT_CONFIG_EXPOSE
            : config.should_expose;
        };

        var CloudAlexa = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "cloud-alexa"
            ),
          ],
          function(_initialize, _LitElement) {
            var CloudAlexa =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(CloudAlexa, _LitElement2);

                function CloudAlexa() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, CloudAlexa);

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
                    (_getPrototypeOf2 = _getPrototypeOf(CloudAlexa)).call.apply(
                      _getPrototypeOf2,
                      [this].concat(args)
                    )
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return CloudAlexa;
              })(_LitElement);

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
                    )(this.cloudStatus.alexa_entities);

                    var filterFunc = this._getEntityFilterFunc(
                      this.cloudStatus.alexa_entities
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
                          entity.interfaces
                            .filter(function(ifc) {
                              return !IGNORE_INTERFACES.includes(ifc);
                            })
                            .map(function(ifc) {
                              return ifc
                                .replace("Alexa.", "")
                                .replace("Controller", "");
                            })
                            .join(", "),
                          entity.entity_id,
                          !emptyFilter,
                          isExposed,
                          _this2._exposeChanged
                        )
                      );
                    });

                    if (trackExposed) {
                      this._isInitialExposed = showInExposed;
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject3(),
                      selected,
                      !this.narrow
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject4())
                        : "",
                      emptyFilter
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5(), this._openDomainToggler)
                        : "",
                      !emptyFilter
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject6())
                        : "",
                      exposedCards.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject7(), exposedCards)
                        : "",
                      notExposedCards.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject8(), notExposedCards)
                        : ""
                    );
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
                                    _data_alexa__WEBPACK_IMPORTED_MODULE_15__[
                                      "fetchCloudAlexaEntities"
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
                  key: "_updateConfig",
                  value: (function() {
                    var _updateConfig2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4(
                        entityId,
                        values
                      ) {
                        var updatedConfig;
                        return regeneratorRuntime.wrap(
                          function _callee4$(_context4) {
                            while (1) {
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  _context4.next = 2;
                                  return Object(
                                    _data_cloud__WEBPACK_IMPORTED_MODULE_7__[
                                      "updateCloudAlexaEntityConfig"
                                    ]
                                  )(this.hass, entityId, values);

                                case 2:
                                  updatedConfig = _context4.sent;
                                  this._entityConfigs = Object.assign(
                                    {},
                                    this._entityConfigs,
                                    _defineProperty({}, entityId, updatedConfig)
                                  );

                                  this._ensureStatusReload();

                                case 5:
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

                    function _updateConfig(_x4, _x5) {
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
                      _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__[
                        "showDomainTogglerDialog"
                      ]
                    )(this, {
                      domains: this._entities
                        .map(function(entity) {
                          return Object(
                            _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__[
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
                              _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__[
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
                    if (this._popstateSyncAttached) {
                      return;
                    }

                    this._popstateSyncAttached = true; // Cache parent because by the time popstate happens,
                    // this element is detached
                    // const parent = this.parentElement!;

                    window.addEventListener(
                      "popstate",
                      function() {
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
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject9());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FsZXhhL2Nsb3VkLWFsZXhhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5RmlsdGVyIHtcbiAgaW5jbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9lbnRpdGllczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaXNFbXB0eUZpbHRlciA9IChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzLmxlbmd0aCA9PT1cbiAgMDtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmlsdGVyID0gKFxuICBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBpbmNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZUVudGl0aWVzPzogc3RyaW5nW11cbik6IEZpbHRlckZ1bmMgPT4ge1xuICBjb25zdCBpbmNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoaW5jbHVkZURvbWFpbnMpO1xuICBjb25zdCBpbmNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGluY2x1ZGVFbnRpdGllcyk7XG4gIGNvbnN0IGV4Y2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChleGNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGV4Y2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoZXhjbHVkZUVudGl0aWVzKTtcblxuICBjb25zdCBoYXZlSW5jbHVkZSA9IGluY2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGluY2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcbiAgY29uc3QgaGF2ZUV4Y2x1ZGUgPSBleGNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBleGNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG5cbiAgLy8gQ2FzZSAxIC0gbm8gaW5jbHVkZXMgb3IgZXhjbHVkZXMgLSBwYXNzIGFsbCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICB9XG5cbiAgLy8gQ2FzZSAyIC0gaW5jbHVkZXMsIG5vIGV4Y2x1ZGVzIC0gb25seSBpbmNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpIHx8XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSAzIC0gZXhjbHVkZXMsIG5vIGluY2x1ZGVzIC0gb25seSBleGNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmIGhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSAmJlxuICAgICAgIWV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDQgLSBib3RoIGluY2x1ZGVzIGFuZCBleGNsdWRlcyBzcGVjaWZpZWRcbiAgLy8gQ2FzZSA0YSAtIGluY2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyBub3RlOiBpZiBib3RoIGluY2x1ZGUgYW5kIGV4Y2x1ZGUgZG9tYWlucyBzcGVjaWZpZWQsXG4gIC8vICAgdGhlIGV4Y2x1ZGUgZG9tYWlucyBhcmUgaWdub3JlZFxuICBpZiAoaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRiIC0gZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIGlmIChleGNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGMgLSBuZWl0aGVyIGluY2x1ZGUgb3IgZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIE9ubHkgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWQuICBJZ25vcmUgZW50aXR5IGV4Y2x1ZGVzLlxuICByZXR1cm4gKGVudGl0eUlkKSA9PiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgdG9nZ2xlRG9tYWluOiAoZG9tYWluOiBzdHJpbmcsIHR1cm5PbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIgKi8gXCIuL2RpYWxvZy1kb21haW4tdG9nZ2xlclwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERvbWFpblRvZ2dsZXJEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvZ2dsZS1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG4gIENsb3VkUHJlZmVyZW5jZXMsXG4gIHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcsXG4gIEFsZXhhRW50aXR5Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUZpbHRlcixcbiAgaXNFbXB0eUZpbHRlcixcbiAgRW50aXR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBBbGV4YUVudGl0eSwgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hbGV4YVwiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJR19FWFBPU0UgPSB0cnVlO1xuY29uc3QgSUdOT1JFX0lOVEVSRkFDRVMgPSBbXCJBbGV4YS5FbmRwb2ludEhlYWx0aFwiXTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogQWxleGFFbnRpdHlDb25maWcpID0+XG4gIGNvbmZpZy5zaG91bGRfZXhwb3NlID09PSB1bmRlZmluZWRcbiAgICA/IERFRkFVTFRfQ09ORklHX0VYUE9TRVxuICAgIDogY29uZmlnLnNob3VsZF9leHBvc2U7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtYWxleGFcIilcbmNsYXNzIENsb3VkQWxleGEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBjbG91ZFN0YXR1cyE6IENsb3VkU3RhdHVzTG9nZ2VkSW47XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllcz86IEFsZXhhRW50aXR5W107XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImFsZXhhX2VudGl0eV9jb25maWdzXCJdID0ge307XG4gIHByaXZhdGUgX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNJbml0aWFsRXhwb3NlZD86IFNldDxzdHJpbmc+O1xuXG4gIHByaXZhdGUgX2dldEVudGl0eUZpbHRlckZ1bmMgPSBtZW1vaXplT25lKChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgICBnZW5lcmF0ZUZpbHRlcihcbiAgICAgIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllc1xuICAgIClcbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUZpbHRlciA9IGlzRW1wdHlGaWx0ZXIodGhpcy5jbG91ZFN0YXR1cy5hbGV4YV9lbnRpdGllcyk7XG4gICAgY29uc3QgZmlsdGVyRnVuYyA9IHRoaXMuX2dldEVudGl0eUZpbHRlckZ1bmMoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmFsZXhhX2VudGl0aWVzXG4gICAgKTtcblxuICAgIC8vIFdlIHdpbGwgb25seSBnZW5lcmF0ZSBgaXNJbml0aWFsRXhwb3NlZGAgZHVyaW5nIGZpcnN0IHJlbmRlci5cbiAgICAvLyBPbiBlYWNoIHN1YnNlcXVlbnQgcmVuZGVyIHdlIHdpbGwgdXNlIHRoZSBzYW1lIHNldCBzbyB0aGF0IGNhcmRzXG4gICAgLy8gd2lsbCBub3QganVtcCBhcm91bmQgd2hlbiB3ZSBjaGFuZ2UgdGhlIGV4cG9zZWQgc2V0dGluZy5cbiAgICBjb25zdCBzaG93SW5FeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCB8fCBuZXcgU2V0KCk7XG4gICAgY29uc3QgdHJhY2tFeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIE9uIGZpcnN0IHJlbmRlciB3ZSBkZWNpZGUgd2hpY2ggY2FyZHMgc2hvdyBpbiB3aGljaCBjYXRlZ29yeS5cbiAgICAvLyBUaGF0IHdheSBjYXJkcyB3b24ndCBqdW1wIGFyb3VuZCB3aGVuIGNoYW5naW5nIHZhbHVlcy5cbiAgICBjb25zdCBleHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcbiAgICBjb25zdCBub3RFeHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHkuZW50aXR5X2lkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGlzRXhwb3NlZCA9IGVtcHR5RmlsdGVyXG4gICAgICAgID8gY29uZmlnSXNFeHBvc2VkKGNvbmZpZylcbiAgICAgICAgOiBmaWx0ZXJGdW5jKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgaWYgKGlzRXhwb3NlZCkge1xuICAgICAgICBzZWxlY3RlZCsrO1xuXG4gICAgICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgICAgICBzaG93SW5FeHBvc2VkLmFkZChlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQgPSBzaG93SW5FeHBvc2VkLmhhcyhlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgICA/IGV4cG9zZWRDYXJkc1xuICAgICAgICA6IG5vdEV4cG9zZWRDYXJkcztcblxuICAgICAgdGFyZ2V0LnB1c2goaHRtbGBcbiAgICAgICAgPGhhLWNhcmQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7ZW50aXR5LmludGVyZmFjZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpZmMpID0+ICFJR05PUkVfSU5URVJGQUNFUy5pbmNsdWRlcyhpZmMpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGlmYykgPT5cbiAgICAgICAgICAgICAgICAgIGlmYy5yZXBsYWNlKFwiQWxleGEuXCIsIFwiXCIpLnJlcGxhY2UoXCJDb250cm9sbGVyXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgICAgICA8cGFwZXItdG9nZ2xlLWJ1dHRvblxuICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHkuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshZW1wdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7aXNFeHBvc2VkfVxuICAgICAgICAgICAgICBAY2hlY2tlZC1jaGFuZ2VkPSR7dGhpcy5fZXhwb3NlQ2hhbmdlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhwb3NlIHRvIEFsZXhhXG4gICAgICAgICAgICA8L3BhcGVyLXRvZ2dsZS1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9IHNob3dJbkV4cG9zZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIkFsZXhhXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgRWRpdGluZyB3aGljaCBlbnRpdGllcyBhcmUgZXhwb3NlZCB2aWEgdGhpcyBVSSBpcyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgYmVjYXVzZSB5b3UgaGF2ZSBjb25maWd1cmVkIGVudGl0eSBmaWx0ZXJzIGluXG4gICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnlhbWwuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5FeHBvc2VkIGVudGl0aWVzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5Ob3QgRXhwb3NlZCBlbnRpdGllczwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bm90RXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmFsZXhhX2VudGl0eV9jb25maWdzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzKHRoaXMuaGFzcyk7XG4gICAgZW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVBID0gdGhpcy5oYXNzLnN0YXRlc1thLmVudGl0eV9pZF07XG4gICAgICBjb25zdCBzdGF0ZUIgPSB0aGlzLmhhc3Muc3RhdGVzW2IuZW50aXR5X2lkXTtcbiAgICAgIHJldHVybiBjb21wYXJlKFxuICAgICAgICBzdGF0ZUEgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQSkgOiBhLmVudGl0eV9pZCxcbiAgICAgICAgc3RhdGVCID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUIpIDogYi5lbnRpdHlfaWRcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dNb3JlSW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4cG9zZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RXhwb3NlZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWcoZW50aXR5SWQ6IHN0cmluZywgdmFsdWVzOiBBbGV4YUVudGl0eUNvbmZpZykge1xuICAgIGNvbnN0IHVwZGF0ZWRDb25maWcgPSBhd2FpdCB1cGRhdGVDbG91ZEFsZXhhRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIC8vIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55dGhpbmcgeWV0LlxuICAgICAgICAvLyBzaG93VG9hc3QocGFyZW50LCB7IG1lc3NhZ2U6IFwiU3luY2hyb25pemluZyBjaGFuZ2VzIHRvIEdvb2dsZS5cIiB9KTtcbiAgICAgICAgLy8gY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50KHRoaXMuaGFzcyk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi1sYWJlbC1zcGFjaW5nOiAxNnB4O1xuICAgICAgfVxuICAgICAgcGFwZXItdG9nZ2xlLWJ1dHRvbiB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBwYXBlci10b2dnbGUtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWFsZXhhXCI6IENsb3VkQWxleGE7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQSwwZkFDQTtBQURBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUFBOzs7OztBQUVBOzs7OztBQUVBOzs7QUFDQTs7Ozs7O0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBOzs7OztBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFvREE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBTUE7QUFEQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBK0NBOzs7QUF2VEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
