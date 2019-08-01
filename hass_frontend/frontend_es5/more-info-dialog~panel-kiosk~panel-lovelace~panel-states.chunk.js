(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],
  {
    /***/ "./src/common/config/is_component_loaded.ts":
      /*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return isComponentLoaded;
          }
        );
        /** Return if a component is loaded. */
        function isComponentLoaded(hass, component) {
          return hass && hass.config.components.indexOf(component) !== -1;
        }

        /***/
      },

    /***/ "./src/common/datetime/duration_to_seconds.ts":
      /*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return durationToSeconds;
          }
        );
        function durationToSeconds(duration) {
          var parts = duration.split(":").map(Number);
          return parts[0] * 3600 + parts[1] * 60 + parts[2];
        }

        /***/
      },

    /***/ "./src/common/datetime/seconds_to_duration.ts":
      /*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return secondsToDuration;
          }
        );
        var leftPad = function leftPad(num) {
          return num < 10 ? "0".concat(num) : num;
        };

        function secondsToDuration(d) {
          var h = Math.floor(d / 3600);
          var m = Math.floor((d % 3600) / 60);
          var s = Math.floor((d % 3600) % 60);

          if (h > 0) {
            return ""
              .concat(h, ":")
              .concat(leftPad(m), ":")
              .concat(leftPad(s));
          }

          if (m > 0) {
            return "".concat(m, ":").concat(leftPad(s));
          }

          if (s > 0) {
            return "" + s;
          }

          return null;
        }

        /***/
      },

    /***/ "./src/common/dom/stop_propagation.ts":
      /*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
      /*! exports provided: stopPropagation */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stopPropagation",
          function() {
            return stopPropagation;
          }
        );
        var stopPropagation = function stopPropagation(ev) {
          return ev.stopPropagation();
        };

        /***/
      },

    /***/ "./src/common/entity/supports-feature.ts":
      /*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
      /*! exports provided: supportsFeature */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsFeature",
          function() {
            return supportsFeature;
          }
        );
        var supportsFeature = function supportsFeature(stateObj, feature) {
          // tslint:disable-next-line:no-bitwise
          return (stateObj.attributes.supported_features & feature) !== 0;
        };

        /***/
      },

    /***/ "./src/common/entity/timer_time_remaining.ts":
      /*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return timerTimeRemaining;
          }
        );
        /* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts"
        );

        function timerTimeRemaining(stateObj) {
          var timeRemaining = Object(
            _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ]
          )(stateObj.attributes.remaining);

          if (stateObj.state === "active") {
            var now = new Date().getTime();
            var madeActive = new Date(stateObj.last_changed).getTime();
            timeRemaining = Math.max(
              timeRemaining - (now - madeActive) / 1000,
              0
            );
          }

          return timeRemaining;
        }

        /***/
      },

    /***/ "./src/common/util/time-cache-function-promise.ts":
      /*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
      /*! exports provided: timeCachePromiseFunc */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "timeCachePromiseFunc",
          function() {
            return timeCachePromiseFunc;
          }
        );
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

        var timeCachePromiseFunc =
          /*#__PURE__*/
          (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(
                cacheKey,
                cacheTime,
                func,
                hass,
                entityId
              ) {
                var _len,
                  args,
                  _key,
                  cache,
                  lastResult,
                  result,
                  _args = arguments;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        for (
                          _len = _args.length,
                            args = new Array(_len > 5 ? _len - 5 : 0),
                            _key = 5;
                          _key < _len;
                          _key++
                        ) {
                          args[_key - 5] = _args[_key];
                        }

                        cache = hass[cacheKey];

                        if (!cache) {
                          cache = hass[cacheKey] = {};
                        }

                        lastResult = cache[entityId];

                        if (!lastResult) {
                          _context.next = 6;
                          break;
                        }

                        return _context.abrupt("return", lastResult);

                      case 6:
                        result = func.apply(
                          void 0,
                          [hass, entityId].concat(args)
                        );
                        cache[entityId] = result;
                        result.then(
                          // When successful, set timer to clear cache
                          function() {
                            return setTimeout(function() {
                              cache[entityId] = undefined;
                            }, cacheTime);
                          }, // On failure, clear cache right away
                          function() {
                            cache[entityId] = undefined;
                          }
                        );
                        return _context.abrupt("return", result);

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );

            return function timeCachePromiseFunc(_x, _x2, _x3, _x4, _x5) {
              return _ref.apply(this, arguments);
            };
          })();

        /***/
      },

    /***/ "./src/components/ha-climate-state.js":
      /*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
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
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
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
            '\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n\n        .unit {\n          display: inline-block;\n          direction: ltr;\n        }\n      </style>\n\n      <div class="target">\n        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">\n          <span class="state-label">\n            [[_localizeState(localize, stateObj.state)]]\n            <template is="dom-if" if="[[stateObj.attributes.preset_mode]]">\n              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]\n            </template>\n          </span>\n        </template>\n        <div class="unit">[[computeTarget(hass, stateObj)]]</div>\n      </div>\n\n      <template is="dom-if" if="[[currentStatus]]">\n        <div class="current">\n          [[localize(\'ui.card.climate.currently\')]]:\n          <div class="unit">[[currentStatus]]</div>\n        </div>\n      </template>\n    ',
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

        /*
         * @appliesMixin LocalizeMixin
         */

        var HaClimateState =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaClimateState, _LocalizeMixin);

            function HaClimateState() {
              _classCallCheck(this, HaClimateState);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaClimateState).apply(this, arguments)
              );
            }

            _createClass(
              HaClimateState,
              [
                {
                  key: "computeCurrentStatus",
                  value: function computeCurrentStatus(hass, stateObj) {
                    if (!hass || !stateObj) return null;

                    if (stateObj.attributes.current_temperature != null) {
                      return ""
                        .concat(stateObj.attributes.current_temperature, " ")
                        .concat(hass.config.unit_system.temperature);
                    }

                    if (stateObj.attributes.current_humidity != null) {
                      return "".concat(
                        stateObj.attributes.current_humidity,
                        " %"
                      );
                    }

                    return null;
                  },
                },
                {
                  key: "computeTarget",
                  value: function computeTarget(hass, stateObj) {
                    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

                    if (
                      stateObj.attributes.target_temp_low != null &&
                      stateObj.attributes.target_temp_high != null
                    ) {
                      return ""
                        .concat(stateObj.attributes.target_temp_low, "-")
                        .concat(stateObj.attributes.target_temp_high, " ")
                        .concat(hass.config.unit_system.temperature);
                    }

                    if (stateObj.attributes.temperature != null) {
                      return ""
                        .concat(stateObj.attributes.temperature, " ")
                        .concat(hass.config.unit_system.temperature);
                    }

                    if (
                      stateObj.attributes.target_humidity_low != null &&
                      stateObj.attributes.target_humidity_high != null
                    ) {
                      return ""
                        .concat(stateObj.attributes.target_humidity_low, "-")
                        .concat(stateObj.attributes.target_humidity_high, "%");
                    }

                    if (stateObj.attributes.humidity != null) {
                      return "".concat(stateObj.attributes.humidity, " %");
                    }

                    return "";
                  },
                },
                {
                  key: "_hasKnownState",
                  value: function _hasKnownState(state) {
                    return state !== "unknown";
                  },
                },
                {
                  key: "_localizeState",
                  value: function _localizeState(localize, state) {
                    return localize("state.climate.".concat(state)) || state;
                  },
                },
                {
                  key: "_localizePreset",
                  value: function _localizePreset(localize, preset) {
                    return (
                      localize(
                        "state_attributes.climate.preset_mode.".concat(preset)
                      ) || preset
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
                      hass: Object,
                      stateObj: Object,
                      currentStatus: {
                        type: String,
                        computed: "computeCurrentStatus(hass, stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return HaClimateState;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-climate-state", HaClimateState);

        /***/
      },

    /***/ "./src/components/ha-cover-controls.js":
      /*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/cover-model */ "./src/util/cover-model.js"
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
            '\n      <style>\n        .state {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div class="state">\n        <paper-icon-button\n          icon="hass:arrow-up"\n          on-click="onOpenTap"\n          invisible$="[[!entityObj.supportsOpen]]"\n          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon="hass:stop"\n          on-click="onStopTap"\n          invisible$="[[!entityObj.supportsStop]]"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon="hass:arrow-down"\n          on-click="onCloseTap"\n          invisible$="[[!entityObj.supportsClose]]"\n          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"\n        ></paper-icon-button>\n      </div>\n    ',
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

        var HaCoverControls =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCoverControls, _PolymerElement);

            function HaCoverControls() {
              _classCallCheck(this, HaCoverControls);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCoverControls).apply(this, arguments)
              );
            }

            _createClass(
              HaCoverControls,
              [
                {
                  key: "computeEntityObj",
                  value: function computeEntityObj(hass, stateObj) {
                    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "computeOpenDisabled",
                  value: function computeOpenDisabled(stateObj, entityObj) {
                    var assumedState =
                      stateObj.attributes.assumed_state === true;
                    return (
                      (entityObj.isFullyOpen || entityObj.isOpening) &&
                      !assumedState
                    );
                  },
                },
                {
                  key: "computeClosedDisabled",
                  value: function computeClosedDisabled(stateObj, entityObj) {
                    var assumedState =
                      stateObj.attributes.assumed_state === true;
                    return (
                      (entityObj.isFullyClosed || entityObj.isClosing) &&
                      !assumedState
                    );
                  },
                },
                {
                  key: "onOpenTap",
                  value: function onOpenTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.openCover();
                  },
                },
                {
                  key: "onCloseTap",
                  value: function onCloseTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.closeCover();
                  },
                },
                {
                  key: "onStopTap",
                  value: function onStopTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.stopCover();
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
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
                      stateObj: {
                        type: Object,
                      },
                      entityObj: {
                        type: Object,
                        computed: "computeEntityObj(hass, stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return HaCoverControls;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-cover-controls", HaCoverControls);

        /***/
      },

    /***/ "./src/components/ha-cover-tilt-controls.js":
      /*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../util/cover-model */ "./src/util/cover-model.js"
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
            '\n      <style include="iron-flex"></style>\n      <style>\n        :host {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <paper-icon-button\n        icon="hass:arrow-top-right"\n        on-click="onOpenTiltTap"\n        title="Open tilt"\n        invisible$="[[!entityObj.supportsOpenTilt]]"\n        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon="hass:stop"\n        on-click="onStopTiltTap"\n        invisible$="[[!entityObj.supportsStopTilt]]"\n        title="Stop tilt"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon="hass:arrow-bottom-left"\n        on-click="onCloseTiltTap"\n        title="Close tilt"\n        invisible$="[[!entityObj.supportsCloseTilt]]"\n        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"\n      ></paper-icon-button>\n    ',
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

        var HaCoverTiltControls =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaCoverTiltControls, _PolymerElement);

            function HaCoverTiltControls() {
              _classCallCheck(this, HaCoverTiltControls);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaCoverTiltControls).apply(this, arguments)
              );
            }

            _createClass(
              HaCoverTiltControls,
              [
                {
                  key: "computeEntityObj",
                  value: function computeEntityObj(hass, stateObj) {
                    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ](hass, stateObj);
                  },
                },
                {
                  key: "computeOpenDisabled",
                  value: function computeOpenDisabled(stateObj, entityObj) {
                    var assumedState =
                      stateObj.attributes.assumed_state === true;
                    return entityObj.isFullyOpenTilt && !assumedState;
                  },
                },
                {
                  key: "computeClosedDisabled",
                  value: function computeClosedDisabled(stateObj, entityObj) {
                    var assumedState =
                      stateObj.attributes.assumed_state === true;
                    return entityObj.isFullyClosedTilt && !assumedState;
                  },
                },
                {
                  key: "onOpenTiltTap",
                  value: function onOpenTiltTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.openCoverTilt();
                  },
                },
                {
                  key: "onCloseTiltTap",
                  value: function onCloseTiltTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.closeCoverTilt();
                  },
                },
                {
                  key: "onStopTiltTap",
                  value: function onStopTiltTap(ev) {
                    ev.stopPropagation();
                    this.entityObj.stopCoverTilt();
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__[
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
                      stateObj: {
                        type: Object,
                      },
                      entityObj: {
                        type: Object,
                        computed: "computeEntityObj(hass, stateObj)",
                      },
                    };
                  },
                },
              ]
            );

            return HaCoverTiltControls;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

        /***/
      },

    /***/ "./src/components/ha-markdown.js":
      /*!***************************************!*\
  !*** ./src/components/ha-markdown.js ***!
  \***************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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

        var loaded = null;
        /**
         * White list allowed svg tag.
         * Only put in the tag used in QR code, can be extend in future.
         */

        var svgWhiteList = ["svg", "path"];
        /*
         * @appliesMixin EventsMixin
         */

        var HaMarkdown =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaMarkdown, _EventsMixin);

            function HaMarkdown() {
              _classCallCheck(this, HaMarkdown);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaMarkdown).apply(this, arguments)
              );
            }

            _createClass(
              HaMarkdown,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaMarkdown.prototype),
                      "connectedCallback",
                      this
                    ).call(this); // 0 = not loaded, 1 = success, 2 = error

                    this._scriptLoaded = 0;
                    this._renderScheduled = false;

                    this._resize = function() {
                      return _this.fire("iron-resize");
                    };

                    if (!loaded) {
                      loaded = Promise.all(
                        /*! import() | load_markdown */ [
                          __webpack_require__.e("vendors~load_markdown"),
                          __webpack_require__.e("load_markdown"),
                        ]
                      ).then(
                        __webpack_require__.bind(
                          null,
                          /*! ../resources/load_markdown */ "./src/resources/load_markdown.js"
                        )
                      );
                    }

                    loaded
                      .then(
                        function(_ref) {
                          var marked = _ref.marked,
                            filterXSS = _ref.filterXSS;
                          _this.marked = marked;
                          _this.filterXSS = filterXSS;
                          _this._scriptLoaded = 1;
                        },
                        function() {
                          _this._scriptLoaded = 2;
                        }
                      )
                      .then(function() {
                        return _this._render();
                      });
                  },
                },
                {
                  key: "_render",
                  value: function _render() {
                    var _this2 = this;

                    if (this._scriptLoaded === 0 || this._renderScheduled)
                      return;
                    this._renderScheduled = true; // debounce it to next microtask.

                    Promise.resolve().then(function() {
                      _this2._renderScheduled = false;

                      if (_this2._scriptLoaded === 1) {
                        _this2.innerHTML = _this2.filterXSS(
                          _this2.marked(_this2.content, {
                            gfm: true,
                            tables: true,
                            breaks: true,
                          }),
                          {
                            onIgnoreTag: _this2.allowSvg
                              ? function(tag, html) {
                                  return svgWhiteList.indexOf(tag) >= 0
                                    ? html
                                    : null;
                                }
                              : null,
                          }
                        );

                        _this2._resize();

                        var walker = document.createTreeWalker(
                          _this2,
                          1,
                          /* SHOW_ELEMENT */
                          null,
                          false
                        );

                        while (walker.nextNode()) {
                          var node = walker.currentNode; // Open external links in a new window

                          if (
                            node.tagName === "A" &&
                            node.host !== document.location.host
                          ) {
                            node.target = "_blank"; // Fire a resize event when images loaded to notify content resized
                          } else if (node.tagName === "IMG") {
                            node.addEventListener("load", _this2._resize);
                          }
                        }
                      } else if (_this2._scriptLoaded === 2) {
                        _this2.innerText = _this2.content;
                      }
                    });
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      content: {
                        type: String,
                        observer: "_render",
                      },
                      allowSvg: {
                        type: Boolean,
                        value: false,
                      },
                    };
                  },
                },
              ]
            );

            return HaMarkdown;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-markdown", HaMarkdown);

        /***/
      },

    /***/ "./src/components/ha-slider.js":
      /*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js"
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

        var PaperSliderClass = customElements.get("paper-slider");
        var subTemplate;

        var HaSlider =
          /*#__PURE__*/
          (function(_PaperSliderClass) {
            _inherits(HaSlider, _PaperSliderClass);

            function HaSlider() {
              _classCallCheck(this, HaSlider);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaSlider).apply(this, arguments)
              );
            }

            _createClass(
              HaSlider,
              [
                {
                  key: "_calcStep",
                  value: function _calcStep(value) {
                    if (!this.step) {
                      return parseFloat(value);
                    }

                    var numSteps = Math.round((value - this.min) / this.step);
                    var stepStr = this.step.toString();
                    var stepPointAt = stepStr.indexOf(".");

                    if (stepPointAt !== -1) {
                      /**
                       * For small values of this.step, if we calculate the step using
                       * For non-integer values of this.step, if we calculate the step using
                       * `Math.round(value / step) * step` we may hit a precision point issue
                       * eg. 0.1 * 0.2 =  0.020000000000000004
                       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
                       *
                       * as a work around we can round with the decimal precision of `step`
                       */
                      var precision = Math.pow(
                        10,
                        stepStr.length - stepPointAt - 1
                      );
                      return (
                        Math.round(
                          (numSteps * this.step + this.min) * precision
                        ) / precision
                      );
                    }

                    return numSteps * this.step + this.min;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    if (!subTemplate) {
                      subTemplate = PaperSliderClass.template.cloneNode(true);
                      var superStyle = subTemplate.content.querySelector(
                        "style"
                      ); // append style to add mirroring of pin in RTL

                      superStyle.appendChild(
                        document.createTextNode(
                          '\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        '
                        )
                      );
                    }

                    return subTemplate;
                  },
                },
              ]
            );

            return HaSlider;
          })(PaperSliderClass);

        customElements.define("ha-slider", HaSlider);

        /***/
      },

    /***/ "./src/data/auth.ts":
      /*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
      /*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "hassUrl",
          function() {
            return hassUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getSignedPath",
          function() {
            return getSignedPath;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchAuthProviders",
          function() {
            return fetchAuthProviders;
          }
        );
        var hassUrl = "".concat(location.protocol, "//").concat(location.host);
        var getSignedPath = function getSignedPath(hass, path) {
          return hass.callWS({
            type: "auth/sign_path",
            path: path,
          });
        };
        var fetchAuthProviders = function fetchAuthProviders() {
          return fetch("/auth/providers", {
            credentials: "same-origin",
          });
        };

        /***/
      },

    /***/ "./src/data/camera.ts":
      /*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
      /*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CAMERA_SUPPORT_ON_OFF",
          function() {
            return CAMERA_SUPPORT_ON_OFF;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CAMERA_SUPPORT_STREAM",
          function() {
            return CAMERA_SUPPORT_STREAM;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeMJPEGStreamUrl",
          function() {
            return computeMJPEGStreamUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnailUrlWithCache",
          function() {
            return fetchThumbnailUrlWithCache;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnailUrl",
          function() {
            return fetchThumbnailUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchThumbnail",
          function() {
            return fetchThumbnail;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchStreamUrl",
          function() {
            return fetchStreamUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchCameraPrefs",
          function() {
            return fetchCameraPrefs;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateCameraPrefs",
          function() {
            return updateCameraPrefs;
          }
        );
        /* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts"
        );
        /* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./auth */ "./src/data/auth.ts"
        );

        var CAMERA_SUPPORT_ON_OFF = 1;
        var CAMERA_SUPPORT_STREAM = 2;
        var computeMJPEGStreamUrl = function computeMJPEGStreamUrl(entity) {
          return "/api/camera_proxy_stream/"
            .concat(entity.entity_id, "?token=")
            .concat(entity.attributes.access_token);
        };
        var fetchThumbnailUrlWithCache = function fetchThumbnailUrlWithCache(
          hass,
          entityId
        ) {
          return Object(
            _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__[
              "timeCachePromiseFunc"
            ]
          )("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
        };
        var fetchThumbnailUrl = function fetchThumbnailUrl(hass, entityId) {
          return Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(
            hass,
            "/api/camera_proxy/".concat(entityId)
          ).then(function(_ref) {
            var path = _ref.path;
            return path;
          });
        };
        var fetchThumbnail = function fetchThumbnail(hass, entityId) {
          // tslint:disable-next-line: no-console
          console.warn("This method has been deprecated.");
          return hass.callWS({
            type: "camera_thumbnail",
            entity_id: entityId,
          });
        };
        var fetchStreamUrl = function fetchStreamUrl(hass, entityId, format) {
          var data = {
            type: "camera/stream",
            entity_id: entityId,
          };

          if (format) {
            // @ts-ignore
            data.format = format;
          }

          return hass.callWS(data);
        };
        var fetchCameraPrefs = function fetchCameraPrefs(hass, entityId) {
          return hass.callWS({
            type: "camera/get_prefs",
            entity_id: entityId,
          });
        };
        var updateCameraPrefs = function updateCameraPrefs(
          hass,
          entityId,
          prefs
        ) {
          return hass.callWS(
            Object.assign(
              {
                type: "camera/update_prefs",
                entity_id: entityId,
              },
              prefs
            )
          );
        };

        /***/
      },

    /***/ "./src/data/input-select.ts":
      /*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
      /*! exports provided: setInputSelectOption */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setInputSelectOption",
          function() {
            return setInputSelectOption;
          }
        );
        var setInputSelectOption = function setInputSelectOption(
          hass,
          entity,
          option
        ) {
          return hass.callService("input_select", "select_option", {
            option: option,
            entity_id: entity,
          });
        };

        /***/
      },

    /***/ "./src/util/cover-model.js":
      /*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
      /*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return CoverEntity;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsOpen",
          function() {
            return supportsOpen;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsClose",
          function() {
            return supportsClose;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsSetPosition",
          function() {
            return supportsSetPosition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsStop",
          function() {
            return supportsStop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsOpenTilt",
          function() {
            return supportsOpenTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsCloseTilt",
          function() {
            return supportsCloseTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsStopTilt",
          function() {
            return supportsStopTilt;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "supportsSetTiltPosition",
          function() {
            return supportsSetTiltPosition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isTiltOnly",
          function() {
            return isTiltOnly;
          }
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );
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

        /* eslint-enable no-bitwise */

        var CoverEntity =
          /*#__PURE__*/
          (function() {
            function CoverEntity(hass, stateObj) {
              _classCallCheck(this, CoverEntity);

              this.hass = hass;
              this.stateObj = stateObj;
              this._attr = stateObj.attributes;
              this._feat = this._attr.supported_features;
            }

            _createClass(CoverEntity, [
              {
                key: "openCover",
                value: function openCover() {
                  this.callService("open_cover");
                },
              },
              {
                key: "closeCover",
                value: function closeCover() {
                  this.callService("close_cover");
                },
              },
              {
                key: "stopCover",
                value: function stopCover() {
                  this.callService("stop_cover");
                },
              },
              {
                key: "openCoverTilt",
                value: function openCoverTilt() {
                  this.callService("open_cover_tilt");
                },
              },
              {
                key: "closeCoverTilt",
                value: function closeCoverTilt() {
                  this.callService("close_cover_tilt");
                },
              },
              {
                key: "stopCoverTilt",
                value: function stopCoverTilt() {
                  this.callService("stop_cover_tilt");
                },
              },
              {
                key: "setCoverPosition",
                value: function setCoverPosition(position) {
                  this.callService("set_cover_position", {
                    position: position,
                  });
                },
              },
              {
                key: "setCoverTiltPosition",
                value: function setCoverTiltPosition(tiltPosition) {
                  this.callService("set_cover_tilt_position", {
                    tilt_position: tiltPosition,
                  });
                }, // helper method
              },
              {
                key: "callService",
                value: function callService(service) {
                  var data =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : {};
                  data.entity_id = this.stateObj.entity_id;
                  this.hass.callService("cover", service, data);
                },
              },
              {
                key: "isFullyOpen",
                get: function get() {
                  if (this._attr.current_position !== undefined) {
                    return this._attr.current_position === 100;
                  }

                  return this.stateObj.state === "open";
                },
              },
              {
                key: "isFullyClosed",
                get: function get() {
                  if (this._attr.current_position !== undefined) {
                    return this._attr.current_position === 0;
                  }

                  return this.stateObj.state === "closed";
                },
              },
              {
                key: "isFullyOpenTilt",
                get: function get() {
                  return this._attr.current_tilt_position === 100;
                },
              },
              {
                key: "isFullyClosedTilt",
                get: function get() {
                  return this._attr.current_tilt_position === 0;
                },
              },
              {
                key: "isOpening",
                get: function get() {
                  return this.stateObj.state === "opening";
                },
              },
              {
                key: "isClosing",
                get: function get() {
                  return this.stateObj.state === "closing";
                },
              },
              {
                key: "supportsOpen",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 1);
                },
              },
              {
                key: "supportsClose",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 2);
                },
              },
              {
                key: "supportsSetPosition",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 4);
                },
              },
              {
                key: "supportsStop",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 8);
                },
              },
              {
                key: "supportsOpenTilt",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 16);
                },
              },
              {
                key: "supportsCloseTilt",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 32);
                },
              },
              {
                key: "supportsStopTilt",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 64);
                },
              },
              {
                key: "supportsSetTiltPosition",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 128);
                },
              },
              {
                key: "isTiltOnly",
                get: function get() {
                  var supportsCover =
                    this.supportsOpen ||
                    this.supportsClose ||
                    this.supportsStop;
                  var supportsTilt =
                    this.supportsOpenTilt ||
                    this.supportsCloseTilt ||
                    this.supportsStopTilt;
                  return supportsTilt && !supportsCover;
                },
              },
            ]);

            return CoverEntity;
          })();

        var supportsOpen = function supportsOpen(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 1);
        };
        var supportsClose = function supportsClose(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 2);
        };
        var supportsSetPosition = function supportsSetPosition(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 4);
        };
        var supportsStop = function supportsStop(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 8);
        };
        var supportsOpenTilt = function supportsOpenTilt(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 16);
        };
        var supportsCloseTilt = function supportsCloseTilt(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 32);
        };
        var supportsStopTilt = function supportsStopTilt(stateObj) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 64);
        };
        var supportsSetTiltPosition = function supportsSetTiltPosition(
          stateObj
        ) {
          return Object(
            _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
              "supportsFeature"
            ]
          )(stateObj, 128);
        };
        function isTiltOnly(stateObj) {
          var supportsCover =
            supportsOpen(stateObj) ||
            supportsClose(stateObj) ||
            supportsStop(stateObj);
          var supportsTilt =
            supportsOpenTilt(stateObj) ||
            supportsCloseTilt(stateObj) ||
            supportsStopTilt(stateObj);
          return supportsTilt && !supportsCover;
        }

        /***/
      },

    /***/ "./src/util/hass-media-player-model.js":
      /*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return MediaPlayerEntity;
          }
        );
        /* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts"
        );
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

        var MediaPlayerEntity =
          /*#__PURE__*/
          (function() {
            function MediaPlayerEntity(hass, stateObj) {
              _classCallCheck(this, MediaPlayerEntity);

              this.hass = hass;
              this.stateObj = stateObj;
              this._attr = stateObj.attributes;
              this._feat = this._attr.supported_features;
            }

            _createClass(MediaPlayerEntity, [
              {
                key: "mediaPlayPause",
                value: function mediaPlayPause() {
                  this.callService("media_play_pause");
                },
              },
              {
                key: "nextTrack",
                value: function nextTrack() {
                  this.callService("media_next_track");
                },
              },
              {
                key: "playbackControl",
                value: function playbackControl() {
                  this.callService("media_play_pause");
                },
              },
              {
                key: "previousTrack",
                value: function previousTrack() {
                  this.callService("media_previous_track");
                },
              },
              {
                key: "setVolume",
                value: function setVolume(volume) {
                  this.callService("volume_set", {
                    volume_level: volume,
                  });
                },
              },
              {
                key: "togglePower",
                value: function togglePower() {
                  if (this.isOff) {
                    this.turnOn();
                  } else {
                    this.turnOff();
                  }
                },
              },
              {
                key: "turnOff",
                value: function turnOff() {
                  this.callService("turn_off");
                },
              },
              {
                key: "turnOn",
                value: function turnOn() {
                  this.callService("turn_on");
                },
              },
              {
                key: "volumeDown",
                value: function volumeDown() {
                  this.callService("volume_down");
                },
              },
              {
                key: "volumeMute",
                value: function volumeMute(mute) {
                  if (!this.supportsVolumeMute) {
                    throw new Error("Muting volume not supported");
                  }

                  this.callService("volume_mute", {
                    is_volume_muted: mute,
                  });
                },
              },
              {
                key: "volumeUp",
                value: function volumeUp() {
                  this.callService("volume_up");
                },
              },
              {
                key: "selectSource",
                value: function selectSource(source) {
                  this.callService("select_source", {
                    source: source,
                  });
                },
              },
              {
                key: "selectSoundMode",
                value: function selectSoundMode(soundMode) {
                  this.callService("select_sound_mode", {
                    sound_mode: soundMode,
                  });
                }, // helper method
              },
              {
                key: "callService",
                value: function callService(service) {
                  var data =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : {};
                  data.entity_id = this.stateObj.entity_id;
                  this.hass.callService("media_player", service, data);
                },
              },
              {
                key: "isOff",
                get: function get() {
                  return this.stateObj.state === "off";
                },
              },
              {
                key: "isIdle",
                get: function get() {
                  return this.stateObj.state === "idle";
                },
              },
              {
                key: "isMuted",
                get: function get() {
                  return this._attr.is_volume_muted;
                },
              },
              {
                key: "isPaused",
                get: function get() {
                  return this.stateObj.state === "paused";
                },
              },
              {
                key: "isPlaying",
                get: function get() {
                  return this.stateObj.state === "playing";
                },
              },
              {
                key: "isMusic",
                get: function get() {
                  return this._attr.media_content_type === "music";
                },
              },
              {
                key: "isTVShow",
                get: function get() {
                  return this._attr.media_content_type === "tvshow";
                },
              },
              {
                key: "hasMediaControl",
                get: function get() {
                  return (
                    ["playing", "paused", "unknown", "on"].indexOf(
                      this.stateObj.state
                    ) !== -1
                  );
                },
              },
              {
                key: "volumeSliderValue",
                get: function get() {
                  return this._attr.volume_level * 100;
                },
              },
              {
                key: "showProgress",
                get: function get() {
                  return (
                    (this.isPlaying || this.isPaused) &&
                    "media_duration" in this.stateObj.attributes &&
                    "media_position" in this.stateObj.attributes &&
                    "media_position_updated_at" in this.stateObj.attributes
                  );
                },
              },
              {
                key: "currentProgress",
                get: function get() {
                  var progress = this._attr.media_position;

                  if (this.isPlaying) {
                    progress +=
                      (Date.now() -
                        new Date(
                          this._attr.media_position_updated_at
                        ).getTime()) /
                      1000.0;
                  }

                  return progress;
                },
              },
              {
                key: "supportsPause",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 1);
                },
              },
              {
                key: "supportsVolumeSet",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 4);
                },
              },
              {
                key: "supportsVolumeMute",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 8);
                },
              },
              {
                key: "supportsPreviousTrack",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 16);
                },
              },
              {
                key: "supportsNextTrack",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 32);
                },
              },
              {
                key: "supportsTurnOn",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 128);
                },
              },
              {
                key: "supportsTurnOff",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 256);
                },
              },
              {
                key: "supportsPlayMedia",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 512);
                },
              },
              {
                key: "supportsVolumeButtons",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 1024);
                },
              },
              {
                key: "supportsSelectSource",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 2048);
                },
              },
              {
                key: "supportsSelectSoundMode",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 65536);
                },
              },
              {
                key: "supportsPlay",
                get: function get() {
                  return Object(
                    _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__[
                      "supportsFeature"
                    ]
                  )(this.stateObj, 16384);
                },
              },
              {
                key: "primaryTitle",
                get: function get() {
                  return this._attr.media_title;
                },
              },
              {
                key: "secondaryTitle",
                get: function get() {
                  if (this.isMusic) {
                    return this._attr.media_artist;
                  }

                  if (this.isTVShow) {
                    var text = this._attr.media_series_title;

                    if (this._attr.media_season) {
                      text += " S" + this._attr.media_season;

                      if (this._attr.media_episode) {
                        text += "E" + this._attr.media_episode;
                      }
                    }

                    return text;
                  }

                  if (this._attr.app_name) {
                    return this._attr.app_name;
                  }

                  return "";
                },
              },
              {
                key: "source",
                get: function get() {
                  return this._attr.source;
                },
              },
              {
                key: "sourceList",
                get: function get() {
                  return this._attr.source_list;
                },
              },
              {
                key: "soundMode",
                get: function get() {
                  return this._attr.sound_mode;
                },
              },
              {
                key: "soundModeList",
                get: function get() {
                  return this._attr.sound_mode_list;
                },
              },
            ]);

            return MediaPlayerEntity;
          })();

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY292ZXItbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1tZWRpYS1wbGF5ZXItbW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR1cmF0aW9uVG9TZWNvbmRzKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgcmV0dXJuIHBhcnRzWzBdICogMzYwMCArIHBhcnRzWzFdICogNjAgKyBwYXJ0c1syXTtcbn1cbiIsImNvbnN0IGxlZnRQYWQgPSAobnVtOiBudW1iZXIpID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlY29uZHNUb0R1cmF0aW9uKGQ6IG51bWJlcikge1xuICBjb25zdCBoID0gTWF0aC5mbG9vcihkIC8gMzYwMCk7XG4gIGNvbnN0IG0gPSBNYXRoLmZsb29yKChkICUgMzYwMCkgLyA2MCk7XG4gIGNvbnN0IHMgPSBNYXRoLmZsb29yKChkICUgMzYwMCkgJSA2MCk7XG5cbiAgaWYgKGggPiAwKSB7XG4gICAgcmV0dXJuIGAke2h9OiR7bGVmdFBhZChtKX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKG0gPiAwKSB7XG4gICAgcmV0dXJuIGAke219OiR7bGVmdFBhZChzKX1gO1xuICB9XG4gIGlmIChzID4gMCkge1xuICAgIHJldHVybiBcIlwiICsgcztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmVhdHVyZSA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGZlYXR1cmU6IG51bWJlclxuKTogYm9vbGVhbiA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gIHJldHVybiAoc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMhICYgZmVhdHVyZSkgIT09IDA7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBkdXJhdGlvblRvU2Vjb25kcyBmcm9tIFwiLi4vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lclRpbWVSZW1haW5pbmcoc3RhdGVPYmo6IEhhc3NFbnRpdHkpIHtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBkdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlbWFpbmluZyk7XG5cbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgbWFkZUFjdGl2ZSA9IG5ldyBEYXRlKHN0YXRlT2JqLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuICAgIHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aW1lUmVtYWluaW5nIC0gKG5vdyAtIG1hZGVBY3RpdmUpIC8gMTAwMCwgMCk7XG4gIH1cblxuICByZXR1cm4gdGltZVJlbWFpbmluZztcbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFJlc3VsdENhY2hlPFQ+IHtcbiAgW2VudGl0eUlkOiBzdHJpbmddOiBQcm9taXNlPFQ+IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgdGltZUNhY2hlUHJvbWlzZUZ1bmMgPSBhc3luYyA8VD4oXG4gIGNhY2hlS2V5OiBzdHJpbmcsXG4gIGNhY2hlVGltZTogbnVtYmVyLFxuICBmdW5jOiAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IHVua25vd25bXVxuICApID0+IFByb21pc2U8VD4sXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIC4uLmFyZ3M6IHVua25vd25bXVxuKTogUHJvbWlzZTxUPiA9PiB7XG4gIGxldCBjYWNoZTogUmVzdWx0Q2FjaGU8VD4gfCB1bmRlZmluZWQgPSAoaGFzcyBhcyBhbnkpW2NhY2hlS2V5XTtcblxuICBpZiAoIWNhY2hlKSB7XG4gICAgY2FjaGUgPSBoYXNzW2NhY2hlS2V5XSA9IHt9O1xuICB9XG5cbiAgY29uc3QgbGFzdFJlc3VsdCA9IGNhY2hlW2VudGl0eUlkXTtcblxuICBpZiAobGFzdFJlc3VsdCkge1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZnVuYyhoYXNzLCBlbnRpdHlJZCwgLi4uYXJncyk7XG4gIGNhY2hlW2VudGl0eUlkXSA9IHJlc3VsdDtcblxuICByZXN1bHQudGhlbihcbiAgICAvLyBXaGVuIHN1Y2Nlc3NmdWwsIHNldCB0aW1lciB0byBjbGVhciBjYWNoZVxuICAgICgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FjaGUhW2VudGl0eUlkXSA9IHVuZGVmaW5lZDtcbiAgICAgIH0sIGNhY2hlVGltZSksXG4gICAgLy8gT24gZmFpbHVyZSwgY2xlYXIgY2FjaGUgcmlnaHQgYXdheVxuICAgICgpID0+IHtcbiAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZVN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51bml0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19oYXNLbm93blN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPlxuICAgICAgICAgICAgW1tfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmouc3RhdGUpXV1cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlXV1cIj5cbiAgICAgICAgICAgICAgLSBbW19sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZSldXVxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQuY2xpbWF0ZS5jdXJyZW50bHknKV1dOlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjdXJyZW50U3RhdHVzXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjdXJyZW50U3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUN1cnJlbnRTdGF0dXMoaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZX0gJHtcbiAgICAgICAgaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVcbiAgICAgIH1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHl9ICVgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd30tJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICB9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7XG4gICAgICAgIGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlXG4gICAgICB9YDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2xvd30tJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfaGlnaFxuICAgICAgfSVgO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfaGFzS25vd25TdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZSAhPT0gXCJ1bmtub3duXCI7XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGUpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYHN0YXRlLmNsaW1hdGUuJHtzdGF0ZX1gKSB8fCBzdGF0ZTtcbiAgfVxuXG4gIF9sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgcHJlc2V0KSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHtwcmVzZXR9YCkgfHwgcHJlc2V0O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jbGltYXRlLXN0YXRlXCIsIEhhQ2xpbWF0ZVN0YXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgSGFDb3ZlckNvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgW2ludmlzaWJsZV0ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdXBcIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzT3Blbl1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGljb249XCJoYXNzOnN0b3BcIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU3RvcF1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiAoZW50aXR5T2JqLmlzRnVsbHlPcGVuIHx8IGVudGl0eU9iai5pc09wZW5pbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIChlbnRpdHlPYmouaXNGdWxseUNsb3NlZCB8fCBlbnRpdHlPYmouaXNDbG9zaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyKCk7XG4gIH1cblxuICBvbkNsb3NlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlcigpO1xuICB9XG5cbiAgb25TdG9wVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouc3RvcENvdmVyKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItY29udHJvbHNcIiwgSGFDb3ZlckNvbnRyb2xzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIEhhQ292ZXJUaWx0Q29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBpY29uPVwiaGFzczphcnJvdy10b3AtcmlnaHRcIlxuICAgICAgICBvbi1jbGljaz1cIm9uT3BlblRpbHRUYXBcIlxuICAgICAgICB0aXRsZT1cIk9wZW4gdGlsdFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuVGlsdF1dXCJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUaWx0VGFwXCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BUaWx0XV1cIlxuICAgICAgICB0aXRsZT1cIlN0b3AgdGlsdFwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBpY29uPVwiaGFzczphcnJvdy1ib3R0b20tbGVmdFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRpbHRUYXBcIlxuICAgICAgICB0aXRsZT1cIkNsb3NlIHRpbHRcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzQ2xvc2VUaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiBlbnRpdHlPYmouaXNGdWxseU9wZW5UaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uU3RvcFRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXJUaWx0KCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItdGlsdC1jb250cm9sc1wiLCBIYUNvdmVyVGlsdENvbnRyb2xzKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmxldCBsb2FkZWQgPSBudWxsO1xuXG4vKipcbiAqIFdoaXRlIGxpc3QgYWxsb3dlZCBzdmcgdGFnLlxuICogT25seSBwdXQgaW4gdGhlIHRhZyB1c2VkIGluIFFSIGNvZGUsIGNhbiBiZSBleHRlbmQgaW4gZnV0dXJlLlxuICovXG5jb25zdCBzdmdXaGl0ZUxpc3QgPSBbXCJzdmdcIiwgXCJwYXRoXCJdO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3JlbmRlclwiLFxuICAgICAgfSxcbiAgICAgIGFsbG93U3ZnOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gMCA9IG5vdCBsb2FkZWQsIDEgPSBzdWNjZXNzLCAyID0gZXJyb3JcbiAgICB0aGlzLl9zY3JpcHRMb2FkZWQgPSAwO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2l6ZSA9ICgpID0+IHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuXG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfbWFya2Rvd25cIiAqLyBcIi4uL3Jlc291cmNlcy9sb2FkX21hcmtkb3duXCIpO1xuICAgIH1cbiAgICBsb2FkZWRcbiAgICAgIC50aGVuKFxuICAgICAgICAoeyBtYXJrZWQsIGZpbHRlclhTUyB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZWQgPSBtYXJrZWQ7XG4gICAgICAgICAgdGhpcy5maWx0ZXJYU1MgPSBmaWx0ZXJYU1M7XG4gICAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGVkID0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NjcmlwdExvYWRlZCA9IDI7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlbmRlcigpKTtcbiAgfVxuXG4gIF9yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuX3NjcmlwdExvYWRlZCA9PT0gMCB8fCB0aGlzLl9yZW5kZXJTY2hlZHVsZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IHRydWU7XG5cbiAgICAvLyBkZWJvdW5jZSBpdCB0byBuZXh0IG1pY3JvdGFzay5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5fc2NyaXB0TG9hZGVkID09PSAxKSB7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGhpcy5maWx0ZXJYU1MoXG4gICAgICAgICAgdGhpcy5tYXJrZWQodGhpcy5jb250ZW50LCB7XG4gICAgICAgICAgICBnZm06IHRydWUsXG4gICAgICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25JZ25vcmVUYWc6IHRoaXMuYWxsb3dTdmdcbiAgICAgICAgICAgICAgPyAodGFnLCBodG1sKSA9PiAoc3ZnV2hpdGVMaXN0LmluZGV4T2YodGFnKSA+PSAwID8gaHRtbCA6IG51bGwpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAxIC8qIFNIT1dfRUxFTUVOVCAqLyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICAgIC8vIE9wZW4gZXh0ZXJuYWwgbGlua3MgaW4gYSBuZXcgd2luZG93XG4gICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJBXCIgJiYgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0KSB7XG4gICAgICAgICAgICBub2RlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY3JpcHRMb2FkZWQgPT09IDIpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWFya2Rvd25cIiwgSGFNYXJrZG93bik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXJcIjtcblxuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcbmxldCBzdWJUZW1wbGF0ZTtcblxuY2xhc3MgSGFTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXN1YlRlbXBsYXRlKSB7XG4gICAgICBzdWJUZW1wbGF0ZSA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBjb25zdCBzdXBlclN0eWxlID0gc3ViVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIik7XG5cbiAgICAgIC8vIGFwcGVuZCBzdHlsZSB0byBhZGQgbWlycm9yaW5nIG9mIHBpbiBpbiBSVExcbiAgICAgIHN1cGVyU3R5bGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAjc2xpZGVyQ29udGFpbmVyLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc3ViVGVtcGxhdGU7XG4gIH1cblxuICBfY2FsY1N0ZXAodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuc3RlcCkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bVN0ZXBzID0gTWF0aC5yb3VuZCgodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApO1xuICAgIGNvbnN0IHN0ZXBTdHIgPSB0aGlzLnN0ZXAudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzdGVwUG9pbnRBdCA9IHN0ZXBTdHIuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKHN0ZXBQb2ludEF0ICE9PSAtMSkge1xuICAgICAgLyoqXG4gICAgICAgKiBGb3Igc21hbGwgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBGb3Igbm9uLWludGVnZXIgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBgTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcGAgd2UgbWF5IGhpdCBhIHByZWNpc2lvbiBwb2ludCBpc3N1ZVxuICAgICAgICogZWcuIDAuMSAqIDAuMiA9ICAwLjAyMDAwMDAwMDAwMDAwMDAwNFxuICAgICAgICogaHR0cDovL2RvY3Mub3JhY2xlLmNvbS9jZC9FMTk5NTctMDEvODA2LTM1NjgvbmNnX2dvbGRiZXJnLmh0bWxcbiAgICAgICAqXG4gICAgICAgKiBhcyBhIHdvcmsgYXJvdW5kIHdlIGNhbiByb3VuZCB3aXRoIHRoZSBkZWNpbWFsIHByZWNpc2lvbiBvZiBgc3RlcGBcbiAgICAgICAqL1xuICAgICAgY29uc3QgcHJlY2lzaW9uID0gMTAgKiogKHN0ZXBTdHIubGVuZ3RoIC0gc3RlcFBvaW50QXQgLSAxKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIE1hdGgucm91bmQoKG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW4pICogcHJlY2lzaW9uKSAvIHByZWNpc2lvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2xpZGVyXCIsIEhhU2xpZGVyKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFsIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFBhdGgge1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNzVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTaWduZWRQYXRoPiA9PiBoYXNzLmNhbGxXUyh7IHR5cGU6IFwiYXV0aC9zaWduX3BhdGhcIiwgcGF0aCB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aFByb3ZpZGVycyA9ICgpID0+XG4gIGZldGNoKFwiL2F1dGgvcHJvdmlkZXJzXCIsIHtcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGltZUNhY2hlUHJvbWlzZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlXCI7XG5pbXBvcnQgeyBnZXRTaWduZWRQYXRoIH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgQ0FNRVJBX1NVUFBPUlRfT05fT0ZGID0gMTtcbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9TVFJFQU0gPSAyO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVByZWZlcmVuY2VzIHtcbiAgcHJlbG9hZF9zdHJlYW06IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhVGh1bWJuYWlsIHtcbiAgY29udGVudF90eXBlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW0ge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVNSlBFR1N0cmVhbVVybCA9IChlbnRpdHk6IENhbWVyYUVudGl0eSkgPT5cbiAgYC9hcGkvY2FtZXJhX3Byb3h5X3N0cmVhbS8ke2VudGl0eS5lbnRpdHlfaWR9P3Rva2VuPSR7XG4gICAgZW50aXR5LmF0dHJpYnV0ZXMuYWNjZXNzX3Rva2VuXG4gIH1gO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT5cbiAgdGltZUNhY2hlUHJvbWlzZUZ1bmMoXG4gICAgXCJfY2FtZXJhVG1iVXJsXCIsXG4gICAgOTAwMCxcbiAgICBmZXRjaFRodW1ibmFpbFVybCxcbiAgICBoYXNzLFxuICAgIGVudGl0eUlkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PlxuICBnZXRTaWduZWRQYXRoKGhhc3MsIGAvYXBpL2NhbWVyYV9wcm94eS8ke2VudGl0eUlkfWApLnRoZW4oKHsgcGF0aCB9KSA9PiBwYXRoKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGVudGl0eUlkOiBzdHJpbmcpID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXCIpO1xuICByZXR1cm4gaGFzcy5jYWxsV1M8Q2FtZXJhVGh1bWJuYWlsPih7XG4gICAgdHlwZTogXCJjYW1lcmFfdGh1bWJuYWlsXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTdHJlYW1VcmwgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGZvcm1hdD86IFwiaGxzXCJcbikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHR5cGU6IFwiY2FtZXJhL3N0cmVhbVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH07XG4gIGlmIChmb3JtYXQpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZGF0YS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgcmV0dXJuIGhhc3MuY2FsbFdTPFN0cmVhbT4oZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYW1lcmFQcmVmcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL2dldF9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FtZXJhUHJlZnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHByZWZzOiB7XG4gICAgcHJlbG9hZF9zdHJlYW0/OiBib29sZWFuO1xuICB9XG4pID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvdXBkYXRlX3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRJbnB1dFNlbGVjdE9wdGlvbiA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5OiBzdHJpbmcsXG4gIG9wdGlvbjogc3RyaW5nXG4pID0+XG4gIGhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF9zZWxlY3RcIiwgXCJzZWxlY3Rfb3B0aW9uXCIsIHtcbiAgICBvcHRpb24sXG4gICAgZW50aXR5X2lkOiBlbnRpdHksXG4gIH0pO1xuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaGFzcywgc3RhdGVPYmopIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW4oKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5cIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2VkXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW5UaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMTAwO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMDtcbiAgfVxuXG4gIGdldCBpc09wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlbmluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zaW5nXCI7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3AoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW5UaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2VUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcFRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IGlzVGlsdE9ubHkoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlbiB8fCB0aGlzLnN1cHBvcnRzQ2xvc2UgfHwgdGhpcy5zdXBwb3J0c1N0b3A7XG4gICAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuVGlsdCB8fCB0aGlzLnN1cHBvcnRzQ2xvc2VUaWx0IHx8IHRoaXMuc3VwcG9ydHNTdG9wVGlsdDtcbiAgICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xuICB9XG5cbiAgb3BlbkNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyXCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJcIik7XG4gIH1cblxuICBzdG9wQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJcIik7XG4gIH1cblxuICBvcGVuQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHNldENvdmVyUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3Bvc2l0aW9uXCIsIHsgcG9zaXRpb24gfSk7XG4gIH1cblxuICBzZXRDb3ZlclRpbHRQb3NpdGlvbih0aWx0UG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3RpbHRfcG9zaXRpb25cIiwge1xuICAgICAgdGlsdF9wb3NpdGlvbjogdGlsdFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY292ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzT3BlbiA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2UgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1NldFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTdG9wID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDgpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Nsb3NlVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAzMik7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3BUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDY0KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uID0gKHN0YXRlT2JqKSA9PlxuICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEyOCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbHRPbmx5KHN0YXRlT2JqKSB7XG4gIGNvbnN0IHN1cHBvcnRzQ292ZXIgPVxuICAgIHN1cHBvcnRzT3BlbihzdGF0ZU9iaikgfHwgc3VwcG9ydHNDbG9zZShzdGF0ZU9iaikgfHwgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKTtcbiAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICBzdXBwb3J0c09wZW5UaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzQ2xvc2VUaWx0KHN0YXRlT2JqKSB8fFxuICAgIHN1cHBvcnRzU3RvcFRpbHQoc3RhdGVPYmopO1xuICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xufVxuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVBsYXllckVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLnN0YXRlT2JqID0gc3RhdGVPYmo7XG4gICAgdGhpcy5fYXR0ciA9IHN0YXRlT2JqLmF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fZmVhdCA9IHRoaXMuX2F0dHIuc3VwcG9ydGVkX2ZlYXR1cmVzO1xuICB9XG5cbiAgZ2V0IGlzT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG5cbiAgZ2V0IGlzSWRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJpZGxlXCI7XG4gIH1cblxuICBnZXQgaXNNdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5pc192b2x1bWVfbXV0ZWQ7XG4gIH1cblxuICBnZXQgaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCI7XG4gIH1cblxuICBnZXQgaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcInBsYXlpbmdcIjtcbiAgfVxuXG4gIGdldCBpc011c2ljKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJtdXNpY1wiO1xuICB9XG5cbiAgZ2V0IGlzVFZTaG93KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJ0dnNob3dcIjtcbiAgfVxuXG4gIGdldCBoYXNNZWRpYUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFtcInBsYXlpbmdcIiwgXCJwYXVzZWRcIiwgXCJ1bmtub3duXCIsIFwib25cIl0uaW5kZXhPZih0aGlzLnN0YXRlT2JqLnN0YXRlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZvbHVtZVNsaWRlclZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnZvbHVtZV9sZXZlbCAqIDEwMDtcbiAgfVxuXG4gIGdldCBzaG93UHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzUGxheWluZyB8fCB0aGlzLmlzUGF1c2VkKSAmJlxuICAgICAgXCJtZWRpYV9kdXJhdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvblwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgXCJtZWRpYV9wb3NpdGlvbl91cGRhdGVkX2F0XCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzXG4gICAgKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UHJvZ3Jlc3MoKSB7XG4gICAgdmFyIHByb2dyZXNzID0gdGhpcy5fYXR0ci5tZWRpYV9wb3NpdGlvbjtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHByb2dyZXNzICs9XG4gICAgICAgIChEYXRlLm5vdygpIC1cbiAgICAgICAgICBuZXcgRGF0ZSh0aGlzLl9hdHRyLm1lZGlhX3Bvc2l0aW9uX3VwZGF0ZWRfYXQpLmdldFRpbWUoKSkgL1xuICAgICAgICAxMDAwLjA7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmVzcztcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BhdXNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVTZXQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZU11dGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ByZXZpb3VzVHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNOZXh0VHJhY2soKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNUdXJuT24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVHVybk9mZigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDI1Nik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5TWVkaWEoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lQnV0dG9ucygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEwMjQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2VsZWN0U291cmNlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMjA0OCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZWxlY3RTb3VuZE1vZGUoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NTUzNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQbGF5KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYzODQpO1xuICB9XG5cbiAgZ2V0IHByaW1hcnlUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV90aXRsZTtcbiAgfVxuXG4gIGdldCBzZWNvbmRhcnlUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5pc011c2ljKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9hcnRpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVFZTaG93KSB7XG4gICAgICB2YXIgdGV4dCA9IHRoaXMuX2F0dHIubWVkaWFfc2VyaWVzX3RpdGxlO1xuXG4gICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9zZWFzb24pIHtcbiAgICAgICAgdGV4dCArPSBcIiBTXCIgKyB0aGlzLl9hdHRyLm1lZGlhX3NlYXNvbjtcblxuICAgICAgICBpZiAodGhpcy5fYXR0ci5tZWRpYV9lcGlzb2RlKSB7XG4gICAgICAgICAgdGV4dCArPSBcIkVcIiArIHRoaXMuX2F0dHIubWVkaWFfZXBpc29kZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F0dHIuYXBwX25hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmFwcF9uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlO1xuICB9XG5cbiAgZ2V0IHNvdXJjZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291cmNlX2xpc3Q7XG4gIH1cblxuICBnZXQgc291bmRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdW5kX21vZGU7XG4gIH1cblxuICBnZXQgc291bmRNb2RlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VuZF9tb2RlX2xpc3Q7XG4gIH1cblxuICBtZWRpYVBsYXlQYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIG5leHRUcmFjaygpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfbmV4dF90cmFja1wiKTtcbiAgfVxuXG4gIHBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheV9wYXVzZVwiKTtcbiAgfVxuXG4gIHByZXZpb3VzVHJhY2soKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3ByZXZpb3VzX3RyYWNrXCIpO1xuICB9XG5cbiAgc2V0Vm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfc2V0XCIsIHsgdm9sdW1lX2xldmVsOiB2b2x1bWUgfSk7XG4gIH1cblxuICB0b2dnbGVQb3dlcigpIHtcbiAgICBpZiAodGhpcy5pc09mZikge1xuICAgICAgdGhpcy50dXJuT24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuT2ZmKCk7XG4gICAgfVxuICB9XG5cbiAgdHVybk9mZigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidHVybl9vZmZcIik7XG4gIH1cblxuICB0dXJuT24oKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInR1cm5fb25cIik7XG4gIH1cblxuICB2b2x1bWVEb3duKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfZG93blwiKTtcbiAgfVxuXG4gIHZvbHVtZU11dGUobXV0ZSkge1xuICAgIGlmICghdGhpcy5zdXBwb3J0c1ZvbHVtZU11dGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11dGluZyB2b2x1bWUgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9tdXRlXCIsIHsgaXNfdm9sdW1lX211dGVkOiBtdXRlIH0pO1xuICB9XG5cbiAgdm9sdW1lVXAoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV91cFwiKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZShzb3VyY2UpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdXJjZVwiLCB7IHNvdXJjZSB9KTtcbiAgfVxuXG4gIHNlbGVjdFNvdW5kTW9kZShzb3VuZE1vZGUpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2VsZWN0X3NvdW5kX21vZGVcIiwgeyBzb3VuZF9tb2RlOiBzb3VuZE1vZGUgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5ZXJcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0VBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXdCQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBcENBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQW5IQTtBQUNBO0FBK0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTVEQTtBQUNBO0FBcUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQTNFQTtBQUNBO0FBOEJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBOzs7O0FBL0NBO0FBQ0E7QUE4RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWtEQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNUVBO0FBQ0E7QUErQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUFoREE7QUFDQTtBQStFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsZ1FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTs7OztBQVpBO0FBQ0E7QUF1RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFsQkE7QUFDQTtBQThDQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQURBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBUUE7QUFDQTtBQUZBO0FBUEE7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF1RUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUE3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7QUE1RUE7QUF3SEE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFzSkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBck5BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
