(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [14],
  {
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
          ? function(dateObj, locales) {
              return dateObj.toLocaleString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              });
            }
          : function(dateObj) {
              return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "haDateTime"
              );
            };

        /***/
      },

    /***/ "./src/common/datetime/format_time.ts":
      /*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleTimeStringSupportsOptions() {
          try {
            new Date().toLocaleTimeString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleTimeStringSupportsOptions()
          ? function(dateObj, locales) {
              return dateObj.toLocaleTimeString(locales, {
                hour: "numeric",
                minute: "2-digit",
              });
            }
          : function(dateObj) {
              return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "shortTime"
              );
            };

        /***/
      },

    /***/ "./src/data/error_log.ts":
      /*!*******************************!*\
  !*** ./src/data/error_log.ts ***!
  \*******************************/
      /*! exports provided: fetchErrorLog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchErrorLog",
          function() {
            return fetchErrorLog;
          }
        );
        var fetchErrorLog = function fetchErrorLog(hass) {
          return hass.callApi("GET", "error_log");
        };

        /***/
      },

    /***/ "./src/data/system_health.ts":
      /*!***********************************!*\
  !*** ./src/data/system_health.ts ***!
  \***********************************/
      /*! exports provided: fetchSystemHealthInfo */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSystemHealthInfo",
          function() {
            return fetchSystemHealthInfo;
          }
        );
        var fetchSystemHealthInfo = function fetchSystemHealthInfo(hass) {
          return hass.callWS({
            type: "system_health/info",
          });
        };

        /***/
      },

    /***/ "./src/data/system_log.ts":
      /*!********************************!*\
  !*** ./src/data/system_log.ts ***!
  \********************************/
      /*! exports provided: fetchSystemLog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchSystemLog",
          function() {
            return fetchSystemLog;
          }
        );
        var fetchSystemLog = function fetchSystemLog(hass) {
          return hass.callApi("GET", "error/all");
        };

        /***/
      },

    /***/ "./src/mixins/events-mixin.js":
      /*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
      /*! exports provided: EventsMixin */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "EventsMixin",
          function() {
            return EventsMixin;
          }
        );
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        // Polymer legacy event helpers used courtesy of the Polymer project.
        //
        // Copyright (c) 2017 The Polymer Authors. All rights reserved.
        //
        // Redistribution and use in source and binary forms, with or without
        // modification, are permitted provided that the following conditions are
        // met:
        //
        //    * Redistributions of source code must retain the above copyright
        // notice, this list of conditions and the following disclaimer.
        //    * Redistributions in binary form must reproduce the above
        // copyright notice, this list of conditions and the following disclaimer
        // in the documentation and/or other materials provided with the
        // distribution.
        //    * Neither the name of Google Inc. nor the names of its
        // contributors may be used to endorse or promote products derived from
        // this software without specific prior written permission.
        //
        // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
        // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
        // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
        // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
        // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
        // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
        // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

        /* @polymerMixin */

        var EventsMixin = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(function(superClass) {
          return (
            /*#__PURE__*/
            (function(_superClass) {
              _inherits(_class, _superClass);

              function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).apply(this, arguments)
                );
              }

              _createClass(_class, [
                {
                  key: "fire",

                  /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
                  value: function fire(type, detail, options) {
                    options = options || {};
                    return Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__[
                        "fireEvent"
                      ]
                    )(options.node || this, type, detail, options);
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/developer-tools/info/developer-tools-info.ts":
      /*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/info/developer-tools-info.ts ***!
  \*****************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _system_log_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./system-log-card */ "./src/panels/developer-tools/info/system-log-card.ts"
        );
        /* harmony import */ var _error_log_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./error-log-card */ "./src/panels/developer-tools/info/error-log-card.ts"
        );
        /* harmony import */ var _system_health_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./system-health-card */ "./src/panels/developer-tools/info/system-health-card.ts"
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px 0px 16px 0;\n          direction: ltr;\n        }\n\n        .about {\n          text-align: center;\n          line-height: 2em;\n        }\n\n        .version {\n          @apply --paper-font-headline;\n        }\n\n        .develop {\n          @apply --paper-font-subhead;\n        }\n\n        .about a {\n          color: var(--dark-primary-color);\n        }\n\n        system-health-card {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n      ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n                      <div>\n                        <a href="',
            '" target="_blank"> ',
            "</a>:\n                        ",
            "\n                      </div>\n                    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n                <div>\n                  Custom UIs:\n                  ",
            "\n                </div>\n              ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="about">\n        <p class="version">\n          <a href="https://www.home-assistant.io" target="_blank"\n            ><img\n              src="/static/icons/favicon-192x192.png"\n              height="192"\n              alt="JAVIS Home logo"\n          /></a>\n          <br />\n          JAVIS Home<br />\n          ',
            "\n        </p>\n        <p>\n          Path to configuration.yaml: ",
            '\n        </p>\n        <p class="develop">\n          <a\n            href="https://www.home-assistant.io/developers/credits/"\n            target="_blank"\n          >\n            Developed by a bunch of awesome people.\n          </a>\n        </p>\n        <p>\n          Published under the Apache 2.0 license<br />\n          Source:\n          <a\n            href="https://github.com/home-assistant/home-assistant"\n            target="_blank"\n            >server</a\n          >\n          &mdash;\n          <a\n            href="https://github.com/home-assistant/home-assistant-polymer"\n            target="_blank"\n            >frontend-ui</a\n          >\n        </p>\n        <p>\n          Built using\n          <a href="https://www.python.org">Python 3</a>,\n          <a href="https://www.polymer-project.org" target="_blank">Polymer</a>,\n          Icons by\n          <a href="https://www.google.com/design/icons/" target="_blank"\n            >Google</a\n          >\n          and\n          <a href="https://MaterialDesignIcons.com" target="_blank"\n            >MaterialDesignIcons.com</a\n          >.\n        </p>\n        <p>\n          Frontend version: ',
            " - ",
            "\n          ",
            '\n        </p>\n        <p>\n          <a href="',
            '">',
            '</a><br />\n          <mwc-button @click="',
            '" raised>\n            ',
            "\n          </mwc-button>\n        </p>\n      </div>\n      <system-health-card .hass=",
            "></system-health-card>\n      <system-log-card .hass=",
            "></system-log-card>\n      <error-log-card .hass=",
            "></error-log-card>\n    ",
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

        var JS_TYPE = "es5";
        var JS_VERSION = "20190718.0";
        var OPT_IN_PANEL = "states";

        var HaPanelDevInfo = _decorate(
          null,
          function(_initialize, _LitElement) {
            var HaPanelDevInfo =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaPanelDevInfo, _LitElement2);

                function HaPanelDevInfo() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaPanelDevInfo);

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
                      HaPanelDevInfo
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaPanelDevInfo;
              })(_LitElement);

            return {
              F: HaPanelDevInfo,
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
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var hass = this.hass;
                    var customUiList = window.CUSTOM_UI_LIST || [];
                    var nonDefaultLink =
                      localStorage.defaultPage === OPT_IN_PANEL &&
                      OPT_IN_PANEL === "states"
                        ? "/lovelace"
                        : "/states";
                    var nonDefaultLinkText =
                      localStorage.defaultPage === OPT_IN_PANEL &&
                      OPT_IN_PANEL === "states"
                        ? "Go to the Lovelace UI"
                        : "Go to the states UI";
                    var defaultPageText = ""
                      .concat(
                        localStorage.defaultPage === OPT_IN_PANEL
                          ? "Remove"
                          : "Set",
                        " "
                      )
                      .concat(OPT_IN_PANEL, " as default page on this device");
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      hass.config.version,
                      hass.config.config_dir,
                      JS_VERSION,
                      JS_TYPE,
                      customUiList.length > 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject2(),
                            customUiList.map(function(item) {
                              return Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                              )(_templateObject3(), item.url, item.name, item.version);
                            })
                          )
                        : "",
                      nonDefaultLink,
                      nonDefaultLinkText,
                      this._toggleDefaultPage,
                      defaultPageText,
                      this.hass,
                      this.hass,
                      this.hass
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this2 = this;

                    _get(
                      _getPrototypeOf(HaPanelDevInfo.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps); // Legacy custom UI can be slow to register, give them time.

                    var customUI = (window.CUSTOM_UI_LIST || []).length;
                    setTimeout(function() {
                      if (
                        (window.CUSTOM_UI_LIST || []).length !== customUI.length
                      ) {
                        _this2.requestUpdate();
                      }
                    }, 1000);
                  },
                },
                {
                  kind: "method",
                  key: "_toggleDefaultPage",
                  value: function _toggleDefaultPage() {
                    if (localStorage.defaultPage === OPT_IN_PANEL) {
                      delete localStorage.defaultPage;
                    } else {
                      localStorage.defaultPage = OPT_IN_PANEL;
                    }

                    this.requestUpdate();
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_1__["haStyle"],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject4()
                      ),
                    ];
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        customElements.define("developer-tools-info", HaPanelDevInfo);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/error-log-card.ts":
      /*!***********************************************************!*\
  !*** ./src/panels/developer-tools/info/error-log-card.ts ***!
  \***********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _data_error_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../data/error_log */ "./src/data/error_log.ts"
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

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n      .error-log-intro {\n        text-align: center;\n        margin: 16px;\n      }\n\n      paper-icon-button {\n        float: right;\n      }\n\n      .error-log {\n        @apply --paper-font-code)\n          clear: both;\n        white-space: pre-wrap;\n        margin: 16px;\n      }\n    ",
          ]);

          _templateObject4 = function _templateObject4() {
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n              <mwc-button raised @click=",
            ">\n                Load Full JAVIS Home Log\n              </mwc-button>\n            ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n              <paper-icon-button\n                icon="hass:refresh"\n                @click=',
            "\n              ></paper-icon-button>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <p class="error-log-intro">\n        ',
            '\n      </p>\n      <div class="error-log">',
            "</div>\n    ",
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

        var ErrorLogCard =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(ErrorLogCard, _LitElement);

            function ErrorLogCard() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, ErrorLogCard);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(ErrorLogCard)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this.hass = void 0;
              _this._errorLog = void 0;
              return _this;
            }

            _createClass(
              ErrorLogCard,
              [
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this._errorLog
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2(), this._refreshErrorLog)
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject3(), this._refreshErrorLog),
                      this._errorLog
                    );
                  },
                },
                {
                  key: "_refreshErrorLog",
                  value: (function() {
                    var _refreshErrorLog2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var log;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._errorLog = "Loading error log…";
                                  _context.next = 3;
                                  return Object(
                                    _data_error_log__WEBPACK_IMPORTED_MODULE_3__[
                                      "fetchErrorLog"
                                    ]
                                  )(this.hass);

                                case 3:
                                  log = _context.sent;
                                  this._errorLog =
                                    log || "No errors have been reported.";

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

                    function _refreshErrorLog() {
                      return _refreshErrorLog2.apply(this, arguments);
                    }

                    return _refreshErrorLog;
                  })(),
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      _errorLog: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject4());
                  },
                },
              ]
            );

            return ErrorLogCard;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

        customElements.define("error-log-card", ErrorLogCard);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/show-dialog-system-log-detail.ts":
      /*!**************************************************************************!*\
  !*** ./src/panels/developer-tools/info/show-dialog-system-log-detail.ts ***!
  \**************************************************************************/
      /*! exports provided: showSystemLogDetailDialog */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "showSystemLogDetailDialog",
          function() {
            return showSystemLogDetailDialog;
          }
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
        );

        var registeredDialog = false;
        var dialogShowEvent = "show-dialog-system-log-detail";
        var dialogTag = "dialog-system-log-detail";

        var registerDialog = function registerDialog(element) {
          return Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, "register-dialog", {
            dialogShowEvent: dialogShowEvent,
            dialogTag: dialogTag,
            dialogImport: function dialogImport() {
              return Promise.all(
                /*! import() | system-log-detail-dialog */ [
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"
                  ),
                  __webpack_require__.e(
                    "vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"
                  ),
                  __webpack_require__.e("vendors~system-log-detail-dialog"),
                  __webpack_require__.e("system-log-detail-dialog"),
                ]
              ).then(
                __webpack_require__.bind(
                  null,
                  /*! ./dialog-system-log-detail */ "./src/panels/developer-tools/info/dialog-system-log-detail.ts"
                )
              );
            },
          });
        };

        var showSystemLogDetailDialog = function showSystemLogDetailDialog(
          element,
          systemLogDetailParams
        ) {
          if (!registeredDialog) {
            registeredDialog = true;
            registerDialog(element);
          }

          Object(
            _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"]
          )(element, dialogShowEvent, systemLogDetailParams);
        };

        /***/
      },

    /***/ "./src/panels/developer-tools/info/system-health-card.ts":
      /*!***************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-health-card.ts ***!
  \***************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _data_system_health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../data/system_health */ "./src/data/system_health.ts"
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
            "\n      table {\n        width: 100%;\n      }\n\n      td:first-child {\n        width: 33%;\n      }\n\n      .loading-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    ",
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
          var data = _taggedTemplateLiteral([
            '\n      <ha-card header="System Health">\n        <div class="card-content">',
            "</div>\n      </ha-card>\n    ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            "\n            <tr>\n              <td>",
            "</td>\n              <td>",
            "</td>\n            </tr>\n          ",
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n          <table>\n            ",
            "\n          </table>\n        ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            "\n              <h3>",
            "</h3>\n            ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n          <div class="loading-container">\n            <paper-spinner active></paper-spinner>\n          </div>\n        ',
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

        var sortKeys = function sortKeys(a, b) {
          if (a === "homeassistant") {
            return -1;
          }

          if (b === "homeassistant") {
            return 1;
          }

          if (a < b) {
            return -1;
          }

          if (b < a) {
            return 1;
          }

          return 0;
        };

        var SystemHealthCard =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(SystemHealthCard, _LitElement);

            function SystemHealthCard() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, SystemHealthCard);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(
                  SystemHealthCard
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this.hass = void 0;
              _this._info = void 0;
              return _this;
            }

            _createClass(
              SystemHealthCard,
              [
                {
                  key: "render",
                  value: function render() {
                    if (!this.hass) {
                      return;
                    }

                    var sections = [];

                    if (!this._info) {
                      sections.push(
                        Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject())
                      );
                    } else {
                      var domains = Object.keys(this._info).sort(sortKeys);
                      var _iteratorNormalCompletion = true;
                      var _didIteratorError = false;
                      var _iteratorError = undefined;

                      try {
                        for (
                          var _iterator = domains[Symbol.iterator](), _step;
                          !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                          _iteratorNormalCompletion = true
                        ) {
                          var domain = _step.value;
                          var keys = [];
                          var _iteratorNormalCompletion2 = true;
                          var _didIteratorError2 = false;
                          var _iteratorError2 = undefined;

                          try {
                            for (
                              var _iterator2 = Object.keys(this._info[domain])
                                  .sort()
                                  [Symbol.iterator](),
                                _step2;
                              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                                .done);
                              _iteratorNormalCompletion2 = true
                            ) {
                              var key = _step2.value;
                              keys.push(
                                Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                    "html"
                                  ]
                                )(
                                  _templateObject4(),
                                  key,
                                  this._info[domain][key]
                                )
                              );
                            }
                          } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                          } finally {
                            try {
                              if (
                                !_iteratorNormalCompletion2 &&
                                _iterator2.return != null
                              ) {
                                _iterator2.return();
                              }
                            } finally {
                              if (_didIteratorError2) {
                                throw _iteratorError2;
                              }
                            }
                          }

                          if (domain !== "homeassistant") {
                            sections.push(
                              Object(
                                lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                              )(
                                _templateObject2(),
                                this.hass.localize("domain.".concat(domain)) ||
                                  domain
                              )
                            );
                          }

                          sections.push(
                            Object(
                              lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                            )(_templateObject3(), keys)
                          );
                        }
                      } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                      } finally {
                        try {
                          if (
                            !_iteratorNormalCompletion &&
                            _iterator.return != null
                          ) {
                            _iterator.return();
                          }
                        } finally {
                          if (_didIteratorError) {
                            throw _iteratorError;
                          }
                        }
                      }
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject5(), sections);
                  },
                },
                {
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    _get(
                      _getPrototypeOf(SystemHealthCard.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._fetchInfo();
                  },
                },
                {
                  key: "_fetchInfo",
                  value: (function() {
                    var _fetchInfo2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  _context.prev = 0;

                                  if (
                                    this.hass.config.components.includes(
                                      "system_health"
                                    )
                                  ) {
                                    _context.next = 3;
                                    break;
                                  }

                                  throw new Error();

                                case 3:
                                  _context.next = 5;
                                  return Object(
                                    _data_system_health__WEBPACK_IMPORTED_MODULE_3__[
                                      "fetchSystemHealthInfo"
                                    ]
                                  )(this.hass);

                                case 5:
                                  this._info = _context.sent;
                                  _context.next = 11;
                                  break;

                                case 8:
                                  _context.prev = 8;
                                  _context.t0 = _context["catch"](0);
                                  this._info = {
                                    system_health: {
                                      error:
                                        "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
                                    },
                                  };

                                case 11:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[0, 8]]
                        );
                      })
                    );

                    function _fetchInfo() {
                      return _fetchInfo2.apply(this, arguments);
                    }

                    return _fetchInfo;
                  })(),
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      _info: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject6());
                  },
                },
              ]
            );

            return SystemHealthCard;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

        customElements.define("system-health-card", SystemHealthCard);

        /***/
      },

    /***/ "./src/panels/developer-tools/info/system-log-card.ts":
      /*!************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-log-card.ts ***!
  \************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js"
        );
        /* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _data_system_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../data/system_log */ "./src/data/system_log.ts"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts"
        );
        /* harmony import */ var _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./show-dialog-system-log-detail */ "./src/panels/developer-tools/info/show-dialog-system-log-detail.ts"
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

        function _templateObject8() {
          var data = _taggedTemplateLiteral([
            "\n      ha-card {\n        padding-top: 16px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      .system-log-intro {\n        margin: 16px;\n        border-top: 1px solid var(--light-primary-color);\n        padding-top: 16px;\n      }\n\n      .loading-container {\n        height: 100px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    ",
          ]);

          _templateObject8 = function _templateObject8() {
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

        function _templateObject7() {
          var data = _taggedTemplateLiteral([""]);

          _templateObject7 = function _templateObject7() {
            return data;
          };

          return data;
        }

        function _templateObject6() {
          var data = _taggedTemplateLiteral([
            "\n                                    - message first occured at\n                                    ",
            "\n                                    and shows up ",
            " times\n                                  ",
          ]);

          _templateObject6 = function _templateObject6() {
            return data;
          };

          return data;
        }

        function _templateObject5() {
          var data = _taggedTemplateLiteral([
            "\n                        <paper-item @click=",
            " .logItem=",
            '>\n                          <paper-item-body two-line>\n                            <div class="row">\n                              ',
            "\n                            </div>\n                            <div secondary>\n                              ",
            "\n                              ",
            " (",
            ")\n                              ",
            "\n                            </div>\n                          </paper-item-body>\n                        </paper-item>\n                      ",
          ]);

          _templateObject5 = function _templateObject5() {
            return data;
          };

          return data;
        }

        function _templateObject4() {
          var data = _taggedTemplateLiteral([
            '\n                      <div class="card-content">There are no new issues!</div>\n                    ',
          ]);

          _templateObject4 = function _templateObject4() {
            return data;
          };

          return data;
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n                ",
            '\n\n                <div class="card-actions">\n                  <ha-call-service-button\n                    .hass=',
            '\n                    domain="system_log"\n                    service="clear"\n                    >Clear</ha-call-service-button\n                  >\n                  <ha-progress-button @click=',
            "\n                    >Refresh</ha-progress-button\n                  >\n                </div>\n              ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                <div class="loading-container">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <div class="system-log-intro">\n        <ha-card>\n          ',
            "\n        </ha-card>\n      </div>\n    ",
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

        var formatLogTime = function formatLogTime(date, language) {
          var today = new Date().setHours(0, 0, 0, 0);
          var dateTime = new Date(date * 1000);
          var dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);
          return dateTimeDay < today
            ? Object(
                _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__[
                  "default"
                ]
              )(dateTime, language)
            : Object(
                _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__[
                  "default"
                ]
              )(dateTime, language);
        };

        var SystemLogCard =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(SystemLogCard, _LitElement);

            function SystemLogCard() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, SystemLogCard);

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(SystemLogCard)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              );
              _this.hass = void 0;
              _this._items = void 0;
              return _this;
            }

            _createClass(
              SystemLogCard,
              [
                {
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this._items === undefined
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2())
                        : Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(
                            _templateObject3(),
                            this._items.length === 0
                              ? Object(
                                  lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                    "html"
                                  ]
                                )(_templateObject4())
                              : this._items.map(function(item) {
                                  return Object(
                                    lit_element__WEBPACK_IMPORTED_MODULE_0__[
                                      "html"
                                    ]
                                  )(_templateObject5(), _this2._openLog, item, item.message, formatLogTime(item.timestamp, _this2.hass.language), item.source, item.level, item.count > 1 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), formatLogTime(item.first_occured, _this2.hass.language), item.count) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7()));
                                }),
                            this.hass,
                            this._fetchData
                          )
                    );
                  },
                },
                {
                  key: "firstUpdated",
                  value: function firstUpdated(changedProps) {
                    var _this3 = this;

                    _get(
                      _getPrototypeOf(SystemLogCard.prototype),
                      "firstUpdated",
                      this
                    ).call(this, changedProps);

                    this._fetchData();

                    this.addEventListener("hass-service-called", function(ev) {
                      return _this3.serviceCalled(ev);
                    });
                  },
                },
                {
                  key: "serviceCalled",
                  value: function serviceCalled(ev) {
                    // Check if this is for us
                    if (
                      ev.detail.success &&
                      ev.detail.domain === "system_log"
                    ) {
                      // Do the right thing depending on service
                      if (ev.detail.service === "clear") {
                        this._items = [];
                      }
                    }
                  },
                },
                {
                  key: "_fetchData",
                  value: (function() {
                    var _fetchData2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._items = undefined;
                                  _context.next = 3;
                                  return Object(
                                    _data_system_log__WEBPACK_IMPORTED_MODULE_8__[
                                      "fetchSystemLog"
                                    ]
                                  )(this.hass);

                                case 3:
                                  this._items = _context.sent;

                                case 4:
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
                  key: "_openLog",
                  value: function _openLog(ev) {
                    var item = ev.currentTarget.logItem;
                    Object(
                      _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__[
                        "showSystemLogDetailDialog"
                      ]
                    )(this, {
                      item: item,
                    });
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      _items: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject8());
                  },
                },
              ]
            );

            return SystemLogCard;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

        customElements.define("system-log-card", SystemLogCard);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lcnJvcl9sb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc3lzdGVtX2hlYWx0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zeXN0ZW1fbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vZGV2ZWxvcGVyLXRvb2xzLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvaW5mby9lcnJvci1sb2ctY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL3Nob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vc3lzdGVtLWhlYWx0aC1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vc3lzdGVtLWxvZy1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEVycm9yTG9nID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxzdHJpbmc+KFwiR0VUXCIsIFwiZXJyb3JfbG9nXCIpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVBc3Npc3RhbnRTeXN0ZW1IZWFsdGhJbmZvIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBkZXY6IGJvb2xlYW47XG4gIGhhc3NpbzogYm9vbGVhbjtcbiAgdmlydHVhbGVudjogc3RyaW5nO1xuICBweXRob25fdmVyc2lvbjogc3RyaW5nO1xuICBkb2NrZXI6IGJvb2xlYW47XG4gIGFyY2g6IHN0cmluZztcbiAgdGltZXpvbmU6IHN0cmluZztcbiAgb3NfbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5c3RlbUhlYWx0aEluZm8ge1xuICBbZG9tYWluOiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3lzdGVtSGVhbHRoSW5mbyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxTeXN0ZW1IZWFsdGhJbmZvPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJzeXN0ZW1faGVhbHRoL2luZm9cIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VkRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGxldmVsOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICAvLyB1bml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBleGNlcHRpb246IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgLy8gdW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xuICBmaXJzdF9vY2N1cmVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN5c3RlbUxvZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8TG9nZ2VkRXJyb3JbXT4oXCJHRVRcIiwgXCJlcnJvci9hbGxcIik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcblxuaW1wb3J0IFwiLi9zeXN0ZW0tbG9nLWNhcmRcIjtcbmltcG9ydCBcIi4vZXJyb3ItbG9nLWNhcmRcIjtcbmltcG9ydCBcIi4vc3lzdGVtLWhlYWx0aC1jYXJkXCI7XG5cbmNvbnN0IEpTX1RZUEUgPSBfX0JVSUxEX187XG5jb25zdCBKU19WRVJTSU9OID0gX19WRVJTSU9OX187XG5jb25zdCBPUFRfSU5fUEFORUwgPSBcInN0YXRlc1wiO1xuXG5jbGFzcyBIYVBhbmVsRGV2SW5mbyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG4gICAgY29uc3QgY3VzdG9tVWlMaXN0OiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9PiA9XG4gICAgICAod2luZG93IGFzIGFueSkuQ1VTVE9NX1VJX0xJU1QgfHwgW107XG5cbiAgICBjb25zdCBub25EZWZhdWx0TGluayA9XG4gICAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPT09IE9QVF9JTl9QQU5FTCAmJiBPUFRfSU5fUEFORUwgPT09IFwic3RhdGVzXCJcbiAgICAgICAgPyBcIi9sb3ZlbGFjZVwiXG4gICAgICAgIDogXCIvc3RhdGVzXCI7XG5cbiAgICBjb25zdCBub25EZWZhdWx0TGlua1RleHQgPVxuICAgICAgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwgJiYgT1BUX0lOX1BBTkVMID09PSBcInN0YXRlc1wiXG4gICAgICAgID8gXCJHbyB0byB0aGUgTG92ZWxhY2UgVUlcIlxuICAgICAgICA6IFwiR28gdG8gdGhlIHN0YXRlcyBVSVwiO1xuXG4gICAgY29uc3QgZGVmYXVsdFBhZ2VUZXh0ID0gYCR7XG4gICAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPT09IE9QVF9JTl9QQU5FTCA/IFwiUmVtb3ZlXCIgOiBcIlNldFwiXG4gICAgfSAke09QVF9JTl9QQU5FTH0gYXMgZGVmYXVsdCBwYWdlIG9uIHRoaXMgZGV2aWNlYDtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwidmVyc2lvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pb1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+PGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ljb25zL2Zhdmljb24tMTkyeDE5Mi5wbmdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOTJcIlxuICAgICAgICAgICAgICBhbHQ9XCJKQVZJUyBIb21lIGxvZ29cIlxuICAgICAgICAgIC8+PC9hPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIEpBVklTIEhvbWU8YnIgLz5cbiAgICAgICAgICAke2hhc3MuY29uZmlnLnZlcnNpb259XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUGF0aCB0byBjb25maWd1cmF0aW9uLnlhbWw6ICR7aGFzcy5jb25maWcuY29uZmlnX2Rpcn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImRldmVsb3BcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RldmVsb3BlcnMvY3JlZGl0cy9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZXZlbG9wZWQgYnkgYSBidW5jaCBvZiBhd2Vzb21lIHBlb3BsZS5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUHVibGlzaGVkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIGxpY2Vuc2U8YnIgLz5cbiAgICAgICAgICBTb3VyY2U6XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaG9tZS1hc3Npc3RhbnQvaG9tZS1hc3Npc3RhbnRcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5zZXJ2ZXI8L2FcbiAgICAgICAgICA+XG4gICAgICAgICAgJm1kYXNoO1xuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2hvbWUtYXNzaXN0YW50L2hvbWUtYXNzaXN0YW50LXBvbHltZXJcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5mcm9udGVuZC11aTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCdWlsdCB1c2luZ1xuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5weXRob24ub3JnXCI+UHl0aG9uIDM8L2E+LFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UG9seW1lcjwvYT4sXG4gICAgICAgICAgSWNvbnMgYnlcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vaWNvbnMvXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5Hb29nbGU8L2FcbiAgICAgICAgICA+XG4gICAgICAgICAgYW5kXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vTWF0ZXJpYWxEZXNpZ25JY29ucy5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPk1hdGVyaWFsRGVzaWduSWNvbnMuY29tPC9hXG4gICAgICAgICAgPi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBGcm9udGVuZCB2ZXJzaW9uOiAke0pTX1ZFUlNJT059IC0gJHtKU19UWVBFfVxuICAgICAgICAgICR7Y3VzdG9tVWlMaXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgQ3VzdG9tIFVJczpcbiAgICAgICAgICAgICAgICAgICR7Y3VzdG9tVWlMaXN0Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiAke2l0ZW0ubmFtZX08L2E+OlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YSBocmVmPVwiJHtub25EZWZhdWx0TGlua31cIj4ke25vbkRlZmF1bHRMaW5rVGV4dH08L2E+PGJyIC8+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl90b2dnbGVEZWZhdWx0UGFnZX1cIiByYWlzZWQ+XG4gICAgICAgICAgICAke2RlZmF1bHRQYWdlVGV4dH1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN5c3RlbS1oZWFsdGgtY2FyZCAuaGFzcz0ke3RoaXMuaGFzc30+PC9zeXN0ZW0taGVhbHRoLWNhcmQ+XG4gICAgICA8c3lzdGVtLWxvZy1jYXJkIC5oYXNzPSR7dGhpcy5oYXNzfT48L3N5c3RlbS1sb2ctY2FyZD5cbiAgICAgIDxlcnJvci1sb2ctY2FyZCAuaGFzcz0ke3RoaXMuaGFzc30+PC9lcnJvci1sb2ctY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIC8vIExlZ2FjeSBjdXN0b20gVUkgY2FuIGJlIHNsb3cgdG8gcmVnaXN0ZXIsIGdpdmUgdGhlbSB0aW1lLlxuICAgIGNvbnN0IGN1c3RvbVVJID0gKCh3aW5kb3cgYXMgYW55KS5DVVNUT01fVUlfTElTVCB8fCBbXSkubGVuZ3RoO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCgod2luZG93IGFzIGFueSkuQ1VTVE9NX1VJX0xJU1QgfHwgW10pLmxlbmd0aCAhPT0gY3VzdG9tVUkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJvdGVjdGVkIF90b2dnbGVEZWZhdWx0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID09PSBPUFRfSU5fUEFORUwpIHtcbiAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZSA9IE9QVF9JTl9QQU5FTDtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMHB4IDE2cHggMDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudmVyc2lvbiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZlbG9wIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBzeXN0ZW0taGVhbHRoLWNhcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGV2ZWxvcGVyLXRvb2xzLWluZm9cIjogSGFQYW5lbERldkluZm87XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGV2ZWxvcGVyLXRvb2xzLWluZm9cIiwgSGFQYW5lbERldkluZm8pO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmV0Y2hFcnJvckxvZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Vycm9yX2xvZ1wiO1xuXG5jbGFzcyBFcnJvckxvZ0NhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwcml2YXRlIF9lcnJvckxvZz86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIF9lcnJvckxvZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbG9nLWludHJvXCI+XG4gICAgICAgICR7dGhpcy5fZXJyb3JMb2dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnJlZnJlc2hcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3JlZnJlc2hFcnJvckxvZ31cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQgQGNsaWNrPSR7dGhpcy5fcmVmcmVzaEVycm9yTG9nfT5cbiAgICAgICAgICAgICAgICBMb2FkIEZ1bGwgSkFWSVMgSG9tZSBMb2dcbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1sb2dcIj4ke3RoaXMuX2Vycm9yTG9nfTwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZXJyb3ItbG9nLWludHJvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAuZXJyb3ItbG9nIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb2RlKVxuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVmcmVzaEVycm9yTG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2Vycm9yTG9nID0gXCJMb2FkaW5nIGVycm9yIGxvZ+KAplwiO1xuICAgIGNvbnN0IGxvZyA9IGF3YWl0IGZldGNoRXJyb3JMb2codGhpcy5oYXNzISk7XG4gICAgdGhpcy5fZXJyb3JMb2cgPSBsb2cgfHwgXCJObyBlcnJvcnMgaGF2ZSBiZWVuIHJlcG9ydGVkLlwiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVycm9yLWxvZy1jYXJkXCIsIEVycm9yTG9nQ2FyZCk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb2dnZWRFcnJvciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3N5c3RlbV9sb2dcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJzaG93LWRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiOiBTeXN0ZW1Mb2dEZXRhaWxEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcbmNvbnN0IGRpYWxvZ1Nob3dFdmVudCA9IFwic2hvdy1kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIjtcbmNvbnN0IGRpYWxvZ1RhZyA9IFwiZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtTG9nRGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgaXRlbTogTG9nZ2VkRXJyb3I7XG59XG5cbmNvbnN0IHJlZ2lzdGVyRGlhbG9nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PlxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1Nob3dFdmVudCxcbiAgICBkaWFsb2dUYWcsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwic3lzdGVtLWxvZy1kZXRhaWwtZGlhbG9nXCIgKi8gXCIuL2RpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiKSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93U3lzdGVtTG9nRGV0YWlsRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBTeXN0ZW1Mb2dEZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICByZWdpc3RlckRpYWxvZyhlbGVtZW50KTtcbiAgfVxuICBmaXJlRXZlbnQoZWxlbWVudCwgZGlhbG9nU2hvd0V2ZW50LCBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMpO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgU3lzdGVtSGVhbHRoSW5mbyxcbiAgZmV0Y2hTeXN0ZW1IZWFsdGhJbmZvLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zeXN0ZW1faGVhbHRoXCI7XG5cbmNvbnN0IHNvcnRLZXlzID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhID09PSBcImhvbWVhc3Npc3RhbnRcIikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYiA9PT0gXCJob21lYXNzaXN0YW50XCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGIgPCBhKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5jbGFzcyBTeXN0ZW1IZWFsdGhDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHJpdmF0ZSBfaW5mbz86IFN5c3RlbUhlYWx0aEluZm87XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBfaW5mbzoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWN0aW9uczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLl9pbmZvKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKFxuICAgICAgICBodG1sYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG9tYWlucyA9IE9iamVjdC5rZXlzKHRoaXMuX2luZm8pLnNvcnQoc29ydEtleXMpO1xuICAgICAgZm9yIChjb25zdCBkb21haW4gb2YgZG9tYWlucykge1xuICAgICAgICBjb25zdCBrZXlzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5faW5mb1tkb21haW5dKS5zb3J0KCkpIHtcbiAgICAgICAgICBrZXlzLnB1c2goaHRtbGBcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPiR7a2V5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4ke3RoaXMuX2luZm9bZG9tYWluXVtrZXldfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIGApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb21haW4gIT09IFwiaG9tZWFzc2lzdGFudFwiKSB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxoMz4ke3RoaXMuaGFzcy5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApIHx8IGRvbWFpbn08L2gzPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbnMucHVzaChodG1sYFxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICR7a2V5c31cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIlN5c3RlbSBIZWFsdGhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPiR7c2VjdGlvbnN9PC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hJbmZvKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaEluZm8oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5oYXNzIS5jb25maWcuY29tcG9uZW50cy5pbmNsdWRlcyhcInN5c3RlbV9oZWFsdGhcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pbmZvID0gYXdhaXQgZmV0Y2hTeXN0ZW1IZWFsdGhJbmZvKHRoaXMuaGFzcyEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5faW5mbyA9IHtcbiAgICAgICAgc3lzdGVtX2hlYWx0aDoge1xuICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgXCJTeXN0ZW0gSGVhbHRoIGNvbXBvbmVudCBpcyBub3QgbG9hZGVkLiBBZGQgJ3N5c3RlbV9oZWFsdGg6JyB0byBjb25maWd1cmF0aW9uLnlhbWxcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgfVxuXG4gICAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN5c3RlbS1oZWFsdGgtY2FyZFwiLCBTeXN0ZW1IZWFsdGhDYXJkKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG9nZ2VkRXJyb3IsIGZldGNoU3lzdGVtTG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2xvZ1wiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuaW1wb3J0IHsgc2hvd1N5c3RlbUxvZ0RldGFpbERpYWxvZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI7XG5cbmNvbnN0IGZvcm1hdExvZ1RpbWUgPSAoZGF0ZSwgbGFuZ3VhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBjb25zdCBkYXRlVGltZURheSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICByZXR1cm4gZGF0ZVRpbWVEYXkgPCB0b2RheVxuICAgID8gZm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWUsIGxhbmd1YWdlKVxuICAgIDogZm9ybWF0VGltZShkYXRlVGltZSwgbGFuZ3VhZ2UpO1xufTtcblxuY2xhc3MgU3lzdGVtTG9nQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHByaXZhdGUgX2l0ZW1zPzogTG9nZ2VkRXJyb3JbXTtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIF9pdGVtczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzeXN0ZW0tbG9nLWludHJvXCI+XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICR7dGhpcy5faXRlbXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICR7dGhpcy5faXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlRoZXJlIGFyZSBubyBuZXcgaXNzdWVzITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuX2l0ZW1zLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5Mb2d9IC5sb2dJdGVtPSR7aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdExvZ1RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnNvdXJjZX0gKCR7aXRlbS5sZXZlbH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uY291bnQgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbWVzc2FnZSBmaXJzdCBvY2N1cmVkIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdExvZ1RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmlyc3Rfb2NjdXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBzaG93cyB1cCAke2l0ZW0uY291bnR9IHRpbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInN5c3RlbV9sb2dcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2xlYXJcIlxuICAgICAgICAgICAgICAgICAgICA+Q2xlYXI8L2hhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b24gQGNsaWNrPSR7dGhpcy5fZmV0Y2hEYXRhfVxuICAgICAgICAgICAgICAgICAgICA+UmVmcmVzaDwvaGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2VydmljZUNhbGxlZChldik6IHZvaWQge1xuICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgZm9yIHVzXG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzICYmIGV2LmRldGFpbC5kb21haW4gPT09IFwic3lzdGVtX2xvZ1wiKSB7XG4gICAgICAvLyBEbyB0aGUgcmlnaHQgdGhpbmcgZGVwZW5kaW5nIG9uIHNlcnZpY2VcbiAgICAgIGlmIChldi5kZXRhaWwuc2VydmljZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2l0ZW1zID0gYXdhaXQgZmV0Y2hTeXN0ZW1Mb2codGhpcy5oYXNzISk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuTG9nKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmxvZ0l0ZW07XG4gICAgc2hvd1N5c3RlbUxvZ0RldGFpbERpYWxvZyh0aGlzLCB7IGl0ZW0gfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zeXN0ZW0tbG9nLWludHJvIHtcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN5c3RlbS1sb2ctY2FyZFwiLCBTeXN0ZW1Mb2dDYXJkKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFRQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNnQkE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQURBO0FBSEE7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFLQTtBQUlBO0FBMkRBO0FBQUE7QUFzQkE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBc0NBOzs7QUFyS0E7QUFDQTtBQTZLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE1BO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFTQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7QUF1QkE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbkRBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBc0JBO0FBQ0E7QUFpQkE7Ozs7QUFqREE7QUFDQTtBQXlEQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUEsMGtCQUNBO0FBREE7QUFIQTtBQURBO0FBQ0E7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFNQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFLQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7QUFEQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFyRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUF3RUE7QUFDQTtBQWVBOzs7O0FBakdBO0FBQ0E7QUFtR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7OztBQVNBO0FBQUE7QUFDQTtBQUFBO0FBZUE7QUFBQTtBQTJDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUdBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQTlGQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQTJGQTtBQUNBO0FBc0JBOzs7O0FBM0hBO0FBQ0E7QUE2SEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
