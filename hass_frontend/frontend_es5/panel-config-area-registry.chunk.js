(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-area-registry"],
  {
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

    /***/ "./src/common/util/debounce.ts":
      /*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
      /*! exports provided: debounce */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "debounce",
          function() {
            return debounce;
          }
        );
        // From: https://davidwalsh.name/javascript-debounce-function
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        // tslint:disable-next-line: ban-types
        var debounce = function debounce(func, wait) {
          var immediate =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : false;
          var timeout; // @ts-ignore

          return function() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            // tslint:disable:no-this-assignment
            // @ts-ignore
            var context = this;

            var later = function later() {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          };
        };

        /***/
      },

    /***/ "./src/data/area_registry.ts":
      /*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
      /*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createAreaRegistryEntry",
          function() {
            return createAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateAreaRegistryEntry",
          function() {
            return updateAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteAreaRegistryEntry",
          function() {
            return deleteAreaRegistryEntry;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "subscribeAreaRegistry",
          function() {
            return subscribeAreaRegistry;
          }
        );
        /* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js"
        );
        /* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/string/compare */ "./src/common/string/compare.ts"
        );
        /* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/util/debounce */ "./src/common/util/debounce.ts"
        );

        var createAreaRegistryEntry = function createAreaRegistryEntry(
          hass,
          values
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/create",
              },
              values
            )
          );
        };
        var updateAreaRegistryEntry = function updateAreaRegistryEntry(
          hass,
          areaId,
          updates
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "config/area_registry/update",
                area_id: areaId,
              },
              updates
            )
          );
        };
        var deleteAreaRegistryEntry = function deleteAreaRegistryEntry(
          hass,
          areaId
        ) {
          return hass.callWS({
            type: "config/area_registry/delete",
            area_id: areaId,
          });
        };

        var fetchAreaRegistry = function fetchAreaRegistry(conn) {
          return conn
            .sendMessagePromise({
              type: "config/area_registry/list",
            })
            .then(function(areas) {
              return areas.sort(function(ent1, ent2) {
                return Object(
                  _common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"]
                )(ent1.name, ent2.name);
              });
            });
        };

        var subscribeAreaRegistryUpdates = function subscribeAreaRegistryUpdates(
          conn,
          store
        ) {
          return conn.subscribeEvents(
            Object(
              _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"]
            )(
              function() {
                return fetchAreaRegistry(conn).then(function(areas) {
                  return store.setState(areas, true);
                });
              },
              500,
              true
            ),
            "area_registry_updated"
          );
        };

        var subscribeAreaRegistry = function subscribeAreaRegistry(
          conn,
          onChange
        ) {
          return Object(
            home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__[
              "createCollection"
            ]
          )(
            "_areaRegistry",
            fetchAreaRegistry,
            subscribeAreaRegistryUpdates,
            conn,
            onChange
          );
        };

        /***/
      },

    /***/ "./src/panels/config/area_registry/ha-config-area-registry.ts":
      /*!********************************************************************!*\
  !*** ./src/panels/config/area_registry/ha-config-area-registry.ts ***!
  \********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../data/area_registry */ "./src/data/area_registry.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./show-dialog-area-registry-detail */ "./src/panels/config/area_registry/show-dialog-area-registry-detail.ts"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n      }\n      paper-item {\n        cursor: pointer;\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      paper-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      paper-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n\n      paper-fab.rtl {\n        right: auto;\n        left: 16px;\n      }\n\n      paper-fab[is-wide].rtl {\n        bottom: 24px;\n        right: auto;\n        left: 24px;\n      }\n    ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
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

        function _templateObject5() {
          var data = _taggedTemplateLiteral([""]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                  <div class="empty">\n                    ',
            "\n                    <mwc-button @click=",
            ">\n                      ",
            "\n                    </mwc-button>\n                  </div>\n                ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                <paper-item @click=",
            " .entry=",
            ">\n                  <paper-item-body>\n                    ",
            "\n                  </paper-item-body>\n                </paper-item>\n              ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <hass-subpage\n        header="',
            '"\n      >\n        <ha-config-section .isWide=',
            '>\n          <span slot="header">\n            ',
            '\n          </span>\n          <span slot="introduction">\n            ',
            "\n            <p>\n              ",
            '\n            </p>\n            <a href="/config/integrations/dashboard">\n              ',
            "\n            </a>\n          </span>\n          <ha-card>\n            ",
            "\n            ",
            "\n          </ha-card>\n        </ha-config-section>\n      </hass-subpage>\n\n      <paper-fab\n        ?is-wide=",
            '\n        icon="hass:plus"\n        title="',
            '"\n        @click=',
            '\n        class="',
            '"\n      ></paper-fab>\n    ',
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

        var HaConfigAreaRegistry = _decorate(
          null,
          function(_initialize, _LitElement) {
            var HaConfigAreaRegistry =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaConfigAreaRegistry, _LitElement2);

                function HaConfigAreaRegistry() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaConfigAreaRegistry);

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
                      HaConfigAreaRegistry
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaConfigAreaRegistry;
              })(_LitElement);

            return {
              F: HaConfigAreaRegistry,
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
                  key: "_areas",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_unsubAreas",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaConfigAreaRegistry.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._unsubAreas) {
                      this._unsubAreas();
                    }
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    if (!this.hass || this._areas === undefined) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.hass.localize(
                        "ui.panel.config.area_registry.caption"
                      ),
                      this.isWide,
                      this.hass.localize(
                        "ui.panel.config.area_registry.picker.header"
                      ),
                      this.hass.localize(
                        "ui.panel.config.area_registry.picker.introduction"
                      ),
                      this.hass.localize(
                        "ui.panel.config.area_registry.picker.introduction2"
                      ),
                      this.hass.localize(
                        "ui.panel.config.area_registry.picker.integrations_page"
                      ),
                      this._areas.map(function(entry) {
                        return Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject3(), _this2._openEditEntry, entry, entry.name);
                      }),
                      this._areas.length === 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject4(),
                            this.hass.localize(
                              "ui.panel.config.area_registry.no_areas"
                            ),
                            this._createArea,
                            this.hass.localize(
                              "ui.panel.config.area_registry.create_area"
                            )
                          )
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject5()),
                      this.isWide,
                      this.hass.localize(
                        "ui.panel.config.area_registry.create_area"
                      ),
                      this._createArea,
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_10__[
                          "classMap"
                        ]
                      )({
                        rtl: Object(
                          _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__[
                            "computeRTL"
                          ]
                        )(this.hass),
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(HaConfigAreaRegistry.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    Object(
                      _show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__[
                        "loadAreaRegistryDetailDialog"
                      ]
                    )();
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function updated(changedProps) {
                    var _this3 = this;

                    _get(
                      _getPrototypeOf(HaConfigAreaRegistry.prototype),
                      "updated",
                      this
                    ).call(this, changedProps);

                    if (!this._unsubAreas) {
                      this._unsubAreas = Object(
                        _data_area_registry__WEBPACK_IMPORTED_MODULE_4__[
                          "subscribeAreaRegistry"
                        ]
                      )(this.hass.connection, function(areas) {
                        _this3._areas = areas;
                      });
                    }
                  },
                },
                {
                  kind: "method",
                  key: "_createArea",
                  value: function _createArea() {
                    this._openDialog();
                  },
                },
                {
                  kind: "method",
                  key: "_openEditEntry",
                  value: function _openEditEntry(ev) {
                    var entry = ev.currentTarget.entry;

                    this._openDialog(entry);
                  },
                },
                {
                  kind: "method",
                  key: "_openDialog",
                  value: function _openDialog(entry) {
                    var _this4 = this;

                    Object(
                      _show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__[
                        "showAreaRegistryDetailDialog"
                      ]
                    )(this, {
                      entry: entry,
                      createEntry: (function() {
                        var _createEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee(values) {
                            return regeneratorRuntime.wrap(function _callee$(
                              _context
                            ) {
                              while (1) {
                                switch ((_context.prev = _context.next)) {
                                  case 0:
                                    return _context.abrupt(
                                      "return",
                                      Object(
                                        _data_area_registry__WEBPACK_IMPORTED_MODULE_4__[
                                          "createAreaRegistryEntry"
                                        ]
                                      )(_this4.hass, values)
                                    );

                                  case 1:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            },
                            _callee);
                          })
                        );

                        function createEntry(_x) {
                          return _createEntry.apply(this, arguments);
                        }

                        return createEntry;
                      })(),
                      updateEntry: (function() {
                        var _updateEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2(values) {
                            return regeneratorRuntime.wrap(function _callee2$(
                              _context2
                            ) {
                              while (1) {
                                switch ((_context2.prev = _context2.next)) {
                                  case 0:
                                    return _context2.abrupt(
                                      "return",
                                      Object(
                                        _data_area_registry__WEBPACK_IMPORTED_MODULE_4__[
                                          "updateAreaRegistryEntry"
                                        ]
                                      )(_this4.hass, entry.area_id, values)
                                    );

                                  case 1:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            },
                            _callee2);
                          })
                        );

                        function updateEntry(_x2) {
                          return _updateEntry.apply(this, arguments);
                        }

                        return updateEntry;
                      })(),
                      removeEntry: (function() {
                        var _removeEntry = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee3() {
                            return regeneratorRuntime.wrap(
                              function _callee3$(_context3) {
                                while (1) {
                                  switch ((_context3.prev = _context3.next)) {
                                    case 0:
                                      if (
                                        confirm(
                                          "Are you sure you want to delete this area?\n\nAll devices in this area will become unassigned."
                                        )
                                      ) {
                                        _context3.next = 2;
                                        break;
                                      }

                                      return _context3.abrupt("return", false);

                                    case 2:
                                      _context3.prev = 2;
                                      _context3.next = 5;
                                      return Object(
                                        _data_area_registry__WEBPACK_IMPORTED_MODULE_4__[
                                          "deleteAreaRegistryEntry"
                                        ]
                                      )(_this4.hass, entry.area_id);

                                    case 5:
                                      return _context3.abrupt("return", true);

                                    case 8:
                                      _context3.prev = 8;
                                      _context3.t0 = _context3["catch"](2);
                                      return _context3.abrupt("return", false);

                                    case 11:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              },
                              _callee3,
                              null,
                              [[2, 8]]
                            );
                          })
                        );

                        function removeEntry() {
                          return _removeEntry.apply(this, arguments);
                        }

                        return removeEntry;
                      })(),
                    });
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject6());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("ha-config-area-registry", HaConfigAreaRegistry);

        /***/
      },

    /***/ "./src/panels/config/area_registry/show-dialog-area-registry-detail.ts":
      /*!*****************************************************************************!*\
  !*** ./src/panels/config/area_registry/show-dialog-area-registry-detail.ts ***!
  \*****************************************************************************/
      /*! exports provided: loadAreaRegistryDetailDialog, showAreaRegistryDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "loadAreaRegistryDetailDialog",
          function() {
            return loadAreaRegistryDetailDialog;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showAreaRegistryDetailDialog",
          function() {
            return showAreaRegistryDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var loadAreaRegistryDetailDialog = function loadAreaRegistryDetailDialog() {
          return Promise.all(
            /*! import() | area-registry-detail-dialog */ [
              __webpack_require__.e(0),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
              ),
              __webpack_require__.e(2),
              __webpack_require__.e(
                "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
              ),
              __webpack_require__.e("vendors~area-registry-detail-dialog"),
              __webpack_require__.e("area-registry-detail-dialog"),
            ]
          ).then(
            __webpack_require__.bind(
              null,
              /*! ./dialog-area-registry-detail */ "./src/panels/config/area_registry/dialog-area-registry-detail.ts"
            )
          );
        };
        var showAreaRegistryDetailDialog = function showAreaRegistryDetailDialog(
          element,
          systemLogDetailParams
        ) {
          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "show-dialog", {
            dialogTag: "dialog-area-registry-detail",
            dialogImport: loadAreaRegistryDetailDialog,
            dialogParams: systemLogDetailParams,
          });
        };

        /***/
      },

    /***/ "./src/panels/config/ha-config-section.js":
      /*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
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
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../resources/ha-style */ "./src/resources/ha-style.ts"
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
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

        var HaConfigSection =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigSection, _PolymerElement);

            function HaConfigSection() {
              _classCallCheck(this, HaConfigSection);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigSection).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigSection,
              [
                {
                  key: "computeContentClasses",
                  value: function computeContentClasses(isWide) {
                    var classes = "content ";
                    return isWide ? classes : classes + "narrow";
                  },
                },
                {
                  key: "computeClasses",
                  value: function computeClasses(isWide) {
                    var classes = "together layout ";
                    return (
                      classes + (isWide ? "horizontal" : "vertical narrow")
                    );
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {
                        type: Object,
                      },
                      narrow: {
                        type: Boolean,
                      },
                      isWide: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigSection;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-config-section", HaConfigSection);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWEtcmVnaXN0cnkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2FyZWFfcmVnaXN0cnkvaGEtY29uZmlnLWFyZWEtcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXJlYV9yZWdpc3RyeS9zaG93LWRpYWxvZy1hcmVhLXJlZ2lzdHJ5LWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWZhYi9wYXBlci1mYWJcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5LFxuICBkZWxldGVBcmVhUmVnaXN0cnlFbnRyeSxcbiAgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHtcbiAgc2hvd0FyZWFSZWdpc3RyeURldGFpbERpYWxvZyxcbiAgbG9hZEFyZWFSZWdpc3RyeURldGFpbERpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctYXJlYS1yZWdpc3RyeS1kZXRhaWxcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmNsYXNzIEhhQ29uZmlnQXJlYVJlZ2lzdHJ5IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzPzogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcbiAgcHJpdmF0ZSBfdW5zdWJBcmVhcz86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCB0aGlzLl9hcmVhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhc3MtbG9hZGluZy1zY3JlZW4+PC9oYXNzLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIGhlYWRlcj1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkuY2FwdGlvblwiKX1cIlxuICAgICAgPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5LnBpY2tlci5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5LnBpY2tlci5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5LnBpY2tlci5pbnRyb2R1Y3Rpb24yXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9ucy9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXJlYV9yZWdpc3RyeS5waWNrZXIuaW50ZWdyYXRpb25zX3BhZ2VcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICR7dGhpcy5fYXJlYXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9JHt0aGlzLl9vcGVuRWRpdEVudHJ5fSAuZW50cnk9JHtlbnRyeX0+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAke2VudHJ5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICR7dGhpcy5fYXJlYXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5Lm5vX2FyZWFzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fY3JlYXRlQXJlYX0+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5LmNyZWF0ZV9hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogaHRtbGBgfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuXG4gICAgICA8cGFwZXItZmFiXG4gICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICB0aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkuY3JlYXRlX2FyZWFcIlxuICAgICAgICApfVwiXG4gICAgICAgIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUFyZWF9XG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgIH0pfVwiXG4gICAgICA+PC9wYXBlci1mYWI+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgbG9hZEFyZWFSZWdpc3RyeURldGFpbERpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghdGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcyA9IHN1YnNjcmliZUFyZWFSZWdpc3RyeShcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChhcmVhcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQXJlYSgpIHtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRWRpdEVudHJ5KGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnk6IEFyZWFSZWdpc3RyeUVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIGFueSkuZW50cnk7XG4gICAgdGhpcy5fb3BlbkRpYWxvZyhlbnRyeSk7XG4gIH1cbiAgcHJpdmF0ZSBfb3BlbkRpYWxvZyhlbnRyeT86IEFyZWFSZWdpc3RyeUVudHJ5KSB7XG4gICAgc2hvd0FyZWFSZWdpc3RyeURldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRyeSxcbiAgICAgIGNyZWF0ZUVudHJ5OiBhc3luYyAodmFsdWVzKSA9PlxuICAgICAgICBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCB2YWx1ZXMpLFxuICAgICAgdXBkYXRlRW50cnk6IGFzeW5jICh2YWx1ZXMpID0+XG4gICAgICAgIHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcyEsIGVudHJ5IS5hcmVhX2lkLCB2YWx1ZXMpLFxuICAgICAgcmVtb3ZlRW50cnk6IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXJlYT9cblxuQWxsIGRldmljZXMgaW4gdGhpcyBhcmVhIHdpbGwgYmVjb21lIHVuYXNzaWduZWQuYClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBkZWxldGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MhLCBlbnRyeSEuYXJlYV9pZCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuZW1wdHkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1mYWJbaXMtd2lkZV0ge1xuICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1mYWIucnRsIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWZhYltpcy13aWRlXS5ydGwge1xuICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWFyZWEtcmVnaXN0cnlcIiwgSGFDb25maWdBcmVhUmVnaXN0cnkpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGVudHJ5PzogQXJlYVJlZ2lzdHJ5RW50cnk7XG4gIGNyZWF0ZUVudHJ5OiAodmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHVwZGF0ZUVudHJ5OiAoXG4gICAgdXBkYXRlczogUGFydGlhbDxBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXM+XG4gICkgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgcmVtb3ZlRW50cnk6ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXJlYS1yZWdpc3RyeS1kZXRhaWwtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1hcmVhLXJlZ2lzdHJ5LWRldGFpbFwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dBcmVhUmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IEFyZWFSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWFyZWEtcmVnaXN0cnktZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFDb25maWdTZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDI4cHggMjBweCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1kaXNwbGF5MTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cuY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaW50cm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvXCI+PHNsb3QgbmFtZT1cImludHJvZHVjdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgZmxleC1hdXRvXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJjb250ZW50IFwiO1xuXG4gICAgcmV0dXJuIGlzV2lkZSA/IGNsYXNzZXMgOiBjbGFzc2VzICsgXCJuYXJyb3dcIjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc2VzKGlzV2lkZSkge1xuICAgIHZhciBjbGFzc2VzID0gXCJ0b2dldGhlciBsYXlvdXQgXCI7XG5cbiAgICByZXR1cm4gY2xhc3NlcyArIChpc1dpZGUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWwgbmFycm93XCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZWN0aW9uXCIsIEhhQ29uZmlnU2VjdGlvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBQUE7QUFLQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFHQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFDQTtBQVVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUF5QkE7QUFPQTtBQTJCQTtBQURBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTkE7QUF1QkE7Ozs7O0FBRUE7QUFDQTtBQXdDQTs7O0FBaExBO0FBQ0E7QUFrTEE7Ozs7Ozs7Ozs7OztBQ25OQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQSx5b0JBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
