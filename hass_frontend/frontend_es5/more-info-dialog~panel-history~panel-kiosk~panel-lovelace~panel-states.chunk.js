(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states"],
  {
    /***/ "./src/common/datetime/format_date.ts":
      /*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! fecha */ "./node_modules/fecha/src/fecha.js"
        );
        // Check for support of native locale string options

        function toLocaleDateStringSupportsOptions() {
          try {
            new Date().toLocaleDateString("i");
          } catch (e) {
            return e.name === "RangeError";
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = toLocaleDateStringSupportsOptions()
          ? function(dateObj, locales) {
              return dateObj.toLocaleDateString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            }
          : function(dateObj) {
              return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "mediumDate"
              );
            };

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

    /***/ "./src/common/entity/compute_state_display.ts":
      /*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../datetime/format_date */ "./src/common/datetime/format_date.ts"
        );
        /* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../datetime/format_time */ "./src/common/datetime/format_time.ts"
        );

        /* harmony default export */ __webpack_exports__["default"] = function(
          localize,
          stateObj,
          language
        ) {
          var display;
          var domain = Object(
            _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj);

          if (domain === "binary_sensor") {
            // Try device class translation, then default binary sensor translation
            if (stateObj.attributes.device_class) {
              display = localize(
                "state."
                  .concat(domain, ".")
                  .concat(stateObj.attributes.device_class, ".")
                  .concat(stateObj.state)
              );
            }

            if (!display) {
              display = localize(
                "state.".concat(domain, ".default.").concat(stateObj.state)
              );
            }
          } else if (
            stateObj.attributes.unit_of_measurement &&
            !["unknown", "unavailable"].includes(stateObj.state)
          ) {
            display =
              stateObj.state + " " + stateObj.attributes.unit_of_measurement;
          } else if (domain === "input_datetime") {
            var date;

            if (!stateObj.attributes.has_time) {
              date = new Date(
                stateObj.attributes.year,
                stateObj.attributes.month - 1,
                stateObj.attributes.day
              );
              display = Object(
                _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"]
              )(date, language);
            } else if (!stateObj.attributes.has_date) {
              var now = new Date();
              date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
                now.getFullYear(),
                now.getMonth(),
                now.getDay(),
                stateObj.attributes.hour,
                stateObj.attributes.minute
              );
              display = Object(
                _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["default"]
              )(date, language);
            } else {
              date = new Date(
                stateObj.attributes.year,
                stateObj.attributes.month - 1,
                stateObj.attributes.day,
                stateObj.attributes.hour,
                stateObj.attributes.minute
              );
              display = Object(
                _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(date, language);
            }
          } else if (domain === "zwave") {
            if (["initializing", "dead"].includes(stateObj.state)) {
              display = localize(
                "state.zwave.query_stage.".concat(stateObj.state),
                "query_stage",
                stateObj.attributes.query_stage
              );
            } else {
              display = localize("state.zwave.default.".concat(stateObj.state));
            }
          } else {
            display = localize(
              "state.".concat(domain, ".").concat(stateObj.state)
            );
          } // Fall back to default, component backend translation, or raw state if nothing else matches.

          if (!display) {
            display =
              localize("state.default.".concat(stateObj.state)) ||
              localize(
                "component.".concat(domain, ".state.").concat(stateObj.state)
              ) ||
              stateObj.state;
          }

          return display;
        };

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

    /***/ "./src/components/entity/ha-chart-base.js":
      /*!************************************************!*\
  !*** ./src/components/entity/ha-chart-base.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js"
        );
        /* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts"
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
            '\n      <style>\n        :host {\n          display: block;\n        }\n        .chartHeader {\n          padding: 6px 0 0 0;\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n        }\n        .chartHeader > div {\n          vertical-align: top;\n          padding: 0 8px;\n        }\n        .chartHeader > div.chartTitle {\n          padding-top: 8px;\n          flex: 0 0 0;\n          max-width: 30%;\n        }\n        .chartHeader > div.chartLegend {\n          flex: 1 1;\n          min-width: 70%;\n        }\n        :root {\n          user-select: none;\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none;\n        }\n        .chartTooltip {\n          font-size: 90%;\n          opacity: 1;\n          position: absolute;\n          background: rgba(80, 80, 80, 0.9);\n          color: white;\n          border-radius: 3px;\n          pointer-events: none;\n          transform: translate(-50%, 12px);\n          z-index: 1000;\n          width: 200px;\n          transition: opacity 0.15s ease-in-out;\n        }\n        :host([rtl]) .chartTooltip {\n          direction: rtl;\n        }\n        .chartLegend ul,\n        .chartTooltip ul {\n          display: inline-block;\n          padding: 0 0px;\n          margin: 5px 0 0 0;\n          width: 100%;\n        }\n        .chartTooltip li {\n          display: block;\n          white-space: pre-line;\n        }\n        .chartTooltip .title {\n          text-align: center;\n          font-weight: 500;\n        }\n        .chartLegend li {\n          display: inline-block;\n          padding: 0 6px;\n          max-width: 49%;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          box-sizing: border-box;\n        }\n        .chartLegend li:nth-child(odd):last-of-type {\n          /* Make last item take full width if it is odd-numbered. */\n          max-width: 100%;\n        }\n        .chartLegend li[data-hidden] {\n          text-decoration: line-through;\n        }\n        .chartLegend em,\n        .chartTooltip em {\n          border-radius: 5px;\n          display: inline-block;\n          height: 10px;\n          margin-right: 4px;\n          width: 10px;\n        }\n        :host([rtl]) .chartTooltip em {\n          margin-right: inherit;\n          margin-left: 4px;\n        }\n        paper-icon-button {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template is="dom-if" if="[[unit]]">\n        <div class="chartHeader">\n          <div class="chartTitle">[[unit]]</div>\n          <div class="chartLegend">\n            <ul>\n              <template is="dom-repeat" items="[[metas]]">\n                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">\n                  <em style$="background-color:[[item.bgColor]]"></em>\n                  [[item.label]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </template>\n      <div id="chartTarget" style="height:40px; width:100%">\n        <canvas id="chartCanvas"></canvas>\n        <div\n          class$="chartTooltip [[tooltip.yAlign]]"\n          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"\n        >\n          <div class="title">[[tooltip.title]]</div>\n          <div>\n            <ul>\n              <template is="dom-repeat" items="[[tooltip.lines]]">\n                <li>\n                  <em style$="background-color:[[item.bgColor]]"></em\n                  >[[item.text]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </div>\n    ',
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

        // eslint-disable-next-line no-unused-vars

        /* global Chart moment Color */

        var scriptsLoaded = null;

        var HaChartBase =
          /*#__PURE__*/
          (function(_mixinBehaviors) {
            _inherits(HaChartBase, _mixinBehaviors);

            function HaChartBase() {
              _classCallCheck(this, HaChartBase);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaChartBase).apply(this, arguments)
              );
            }

            _createClass(
              HaChartBase,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HaChartBase.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._isAttached = true;
                    this.onPropsChange();

                    this._resizeListener = function() {
                      _this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__[
                        "Debouncer"
                      ].debounce(
                        _this._debouncer,
                        _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__[
                          "timeOut"
                        ].after(10),
                        function() {
                          if (_this._isAttached) {
                            _this.resizeChart();
                          }
                        }
                      );
                    };

                    if (typeof ResizeObserver === "function") {
                      this.resizeObserver = new ResizeObserver(function(
                        entries
                      ) {
                        entries.forEach(function() {
                          _this._resizeListener();
                        });
                      });
                      this.resizeObserver.observe(this.$.chartTarget);
                    } else {
                      this.addEventListener(
                        "iron-resize",
                        this._resizeListener
                      );
                    }

                    if (scriptsLoaded === null) {
                      scriptsLoaded = Promise.all(
                        /*! import() | load_chart */ [
                          __webpack_require__.e(
                            "vendors~load_chart~panel-calendar"
                          ),
                          __webpack_require__.e("vendors~load_chart"),
                          __webpack_require__.e("load_chart"),
                        ]
                      ).then(
                        __webpack_require__.bind(
                          null,
                          /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"
                        )
                      );
                    }

                    scriptsLoaded.then(function(ChartModule) {
                      _this.ChartClass = ChartModule.default;

                      _this.onPropsChange();
                    });
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaChartBase.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    this._isAttached = false;

                    if (this.resizeObserver) {
                      this.resizeObserver.unobserve(this.$.chartTarget);
                    }

                    this.removeEventListener(
                      "iron-resize",
                      this._resizeListener
                    );

                    if (this._resizeTimer !== undefined) {
                      clearInterval(this._resizeTimer);
                      this._resizeTimer = undefined;
                    }
                  },
                },
                {
                  key: "onPropsChange",
                  value: function onPropsChange() {
                    if (!this._isAttached || !this.ChartClass || !this.data) {
                      return;
                    }

                    this.drawChart();
                  },
                },
                {
                  key: "_customTooltips",
                  value: function _customTooltips(tooltip) {
                    // Hide if no tooltip
                    if (tooltip.opacity === 0) {
                      this.set(["tooltip", "opacity"], 0);
                      return;
                    } // Set caret Position

                    if (tooltip.yAlign) {
                      this.set(["tooltip", "yAlign"], tooltip.yAlign);
                    } else {
                      this.set(["tooltip", "yAlign"], "no-transform");
                    }

                    var title = tooltip.title ? tooltip.title[0] || "" : "";
                    this.set(["tooltip", "title"], title);
                    var bodyLines = tooltip.body.map(function(n) {
                      return n.lines;
                    }); // Set Text

                    if (tooltip.body) {
                      this.set(
                        ["tooltip", "lines"],
                        bodyLines.map(function(body, i) {
                          var colors = tooltip.labelColors[i];
                          return {
                            color: colors.borderColor,
                            bgColor: colors.backgroundColor,
                            text: body.join("\n"),
                          };
                        })
                      );
                    }

                    var parentWidth = this.$.chartTarget.clientWidth;
                    var positionX = tooltip.caretX;
                    var positionY =
                      this._chart.canvas.offsetTop + tooltip.caretY;

                    if (tooltip.caretX + 100 > parentWidth) {
                      positionX = parentWidth - 100;
                    } else if (tooltip.caretX < 100) {
                      positionX = 100;
                    }

                    positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

                    this.tooltip = Object.assign({}, this.tooltip, {
                      opacity: 1,
                      left: "".concat(positionX, "px"),
                      top: "".concat(positionY, "px"),
                    });
                  },
                },
                {
                  key: "_legendClick",
                  value: function _legendClick(event) {
                    event = event || window.event;
                    event.stopPropagation();
                    var target = event.target || event.srcElement;

                    while (target.nodeName !== "LI") {
                      // user clicked child, find parent LI
                      target = target.parentElement;
                    }

                    var index = event.model.itemsIndex;

                    var meta = this._chart.getDatasetMeta(index);

                    meta.hidden =
                      meta.hidden === null
                        ? !this._chart.data.datasets[index].hidden
                        : null;
                    this.set(
                      ["metas", index, "hidden"],
                      this._chart.isDatasetVisible(index) ? null : "hidden"
                    );

                    this._chart.update();
                  },
                },
                {
                  key: "_drawLegend",
                  value: function _drawLegend() {
                    var _this2 = this;

                    var chart = this._chart; // New data for old graph. Keep metadata.

                    var preserveVisibility =
                      this._oldIdentifier &&
                      this.identifier === this._oldIdentifier;
                    this._oldIdentifier = this.identifier;
                    this.set(
                      "metas",
                      this._chart.data.datasets.map(function(x, i) {
                        return {
                          label: x.label,
                          color: x.color,
                          bgColor: x.backgroundColor,
                          hidden:
                            preserveVisibility && i < _this2.metas.length
                              ? _this2.metas[i].hidden
                              : !chart.isDatasetVisible(i),
                        };
                      })
                    );
                    var updateNeeded = false;

                    if (preserveVisibility) {
                      for (var i = 0; i < this.metas.length; i++) {
                        var meta = chart.getDatasetMeta(i);
                        if (!!meta.hidden !== !!this.metas[i].hidden)
                          updateNeeded = true;
                        meta.hidden = this.metas[i].hidden ? true : null;
                      }
                    }

                    if (updateNeeded) {
                      chart.update();
                    }

                    this.unit = this.data.unit;
                  },
                },
                {
                  key: "_formatTickValue",
                  value: function _formatTickValue(value, index, values) {
                    if (values.length === 0) {
                      return value;
                    }

                    var date = new Date(values[index].value);
                    return Object(
                      _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__[
                        "default"
                      ]
                    )(date);
                  },
                },
                {
                  key: "drawChart",
                  value: function drawChart() {
                    var _this3 = this;

                    var data = this.data.data;
                    var ctx = this.$.chartCanvas;

                    if (
                      (!data.datasets || !data.datasets.length) &&
                      !this._chart
                    ) {
                      return;
                    }

                    if (
                      this.data.type !== "timeline" &&
                      data.datasets.length > 0
                    ) {
                      var cnt = data.datasets.length;
                      var colors = this.constructor.getColorList(cnt);

                      for (var loopI = 0; loopI < cnt; loopI++) {
                        data.datasets[loopI].borderColor = colors[
                          loopI
                        ].rgbString();
                        data.datasets[loopI].backgroundColor = colors[loopI]
                          .alpha(0.6)
                          .rgbaString();
                      }
                    }

                    if (this._chart) {
                      this._customTooltips({
                        opacity: 0,
                      });

                      this._chart.data = data;

                      this._chart.update({
                        duration: 0,
                      });

                      if (this.isTimeline) {
                        this._chart.options.scales.yAxes[0].gridLines.display =
                          data.length > 1;
                      } else if (this.data.legend === true) {
                        this._drawLegend();
                      }

                      this.resizeChart();
                    } else {
                      if (!data.datasets) {
                        return;
                      }

                      this._customTooltips({
                        opacity: 0,
                      });

                      var plugins = [
                        {
                          afterRender: function afterRender() {
                            return _this3._setRendered(true);
                          },
                        },
                      ];
                      var options = {
                        responsive: true,
                        maintainAspectRatio: false,
                        animation: {
                          duration: 0,
                        },
                        hover: {
                          animationDuration: 0,
                        },
                        responsiveAnimationDuration: 0,
                        tooltips: {
                          enabled: false,
                          custom: this._customTooltips.bind(this),
                        },
                        legend: {
                          display: false,
                        },
                        line: {
                          spanGaps: true,
                        },
                        elements: {
                          font: "12px 'Roboto', 'sans-serif'",
                        },
                        ticks: {
                          fontFamily: "'Roboto', 'sans-serif'",
                        },
                      };
                      options = Chart.helpers.merge(options, this.data.options);
                      options.scales.xAxes[0].ticks.callback = this._formatTickValue;

                      if (this.data.type === "timeline") {
                        this.set("isTimeline", true);

                        if (this.data.colors !== undefined) {
                          this._colorFunc = this.constructor.getColorGenerator(
                            this.data.colors.staticColors,
                            this.data.colors.staticColorIndex
                          );
                        }

                        if (this._colorFunc !== undefined) {
                          options.elements.colorFunction = this._colorFunc;
                        }

                        if (data.datasets.length === 1) {
                          if (options.scales.yAxes[0].ticks) {
                            options.scales.yAxes[0].ticks.display = false;
                          } else {
                            options.scales.yAxes[0].ticks = {
                              display: false,
                            };
                          }

                          if (options.scales.yAxes[0].gridLines) {
                            options.scales.yAxes[0].gridLines.display = false;
                          } else {
                            options.scales.yAxes[0].gridLines = {
                              display: false,
                            };
                          }
                        }

                        this.$.chartTarget.style.height = "50px";
                      } else {
                        this.$.chartTarget.style.height = "160px";
                      }

                      var chartData = {
                        type: this.data.type,
                        data: this.data.data,
                        options: options,
                        plugins: plugins,
                      }; // Async resize after dom update

                      this._chart = new this.ChartClass(ctx, chartData);

                      if (
                        this.isTimeline !== true &&
                        this.data.legend === true
                      ) {
                        this._drawLegend();
                      }

                      this.resizeChart();
                    }
                  },
                },
                {
                  key: "resizeChart",
                  value: function resizeChart() {
                    if (!this._chart) return; // Chart not ready

                    if (this._resizeTimer === undefined) {
                      this._resizeTimer = setInterval(
                        this.resizeChart.bind(this),
                        10
                      );
                      return;
                    }

                    clearInterval(this._resizeTimer);
                    this._resizeTimer = undefined;

                    this._resizeChart();
                  },
                },
                {
                  key: "_resizeChart",
                  value: function _resizeChart() {
                    var chartTarget = this.$.chartTarget;
                    var options = this.data;
                    var data = options.data;

                    if (data.datasets.length === 0) {
                      return;
                    }

                    if (!this.isTimeline) {
                      this._chart.resize();

                      return;
                    } // Recalculate chart height for Timeline chart

                    var areaTop = this._chart.chartArea.top;
                    var areaBot = this._chart.chartArea.bottom;
                    var height1 = this._chart.canvas.clientHeight;

                    if (areaBot > 0) {
                      this._axisHeight = height1 - areaBot + areaTop;
                    }

                    if (!this._axisHeight) {
                      chartTarget.style.height = "50px";

                      this._chart.resize();

                      this.resizeChart();
                      return;
                    }

                    if (this._axisHeight) {
                      var cnt = data.datasets.length;
                      var targetHeight = 30 * cnt + this._axisHeight + "px";

                      if (chartTarget.style.height !== targetHeight) {
                        chartTarget.style.height = targetHeight;
                      }

                      this._chart.resize();
                    }
                  }, // Get HSL distributed color list
                },
                {
                  key: "chart",
                  get: function get() {
                    return this._chart;
                  },
                },
              ],
              [
                {
                  key: "getColorList",
                  value: function getColorList(count) {
                    var processL = false;

                    if (count > 10) {
                      processL = true;
                      count = Math.ceil(count / 2);
                    }

                    var h1 = 360 / count;
                    var result = [];

                    for (var loopI = 0; loopI < count; loopI++) {
                      result[loopI] = Color().hsl(h1 * loopI, 80, 38);

                      if (processL) {
                        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
                      }
                    }

                    return result;
                  },
                },
                {
                  key: "getColorGenerator",
                  value: function getColorGenerator(staticColors, startIndex) {
                    // Known colors for static data,
                    // should add for very common state string manually.
                    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
                    var palette = [
                      "ff0029",
                      "66a61e",
                      "377eb8",
                      "984ea3",
                      "00d2d5",
                      "ff7f00",
                      "af8d00",
                      "7f80cd",
                      "b3e900",
                      "c42e60",
                      "a65628",
                      "f781bf",
                      "8dd3c7",
                      "bebada",
                      "fb8072",
                      "80b1d3",
                      "fdb462",
                      "fccde5",
                      "bc80bd",
                      "ffed6f",
                      "c4eaff",
                      "cf8c00",
                      "1b9e77",
                      "d95f02",
                      "e7298a",
                      "e6ab02",
                      "a6761d",
                      "0097ff",
                      "00d067",
                      "f43600",
                      "4ba93b",
                      "5779bb",
                      "927acc",
                      "97ee3f",
                      "bf3947",
                      "9f5b00",
                      "f48758",
                      "8caed6",
                      "f2b94f",
                      "eff26e",
                      "e43872",
                      "d9b100",
                      "9d7a00",
                      "698cff",
                      "d9d9d9",
                      "00d27e",
                      "d06800",
                      "009f82",
                      "c49200",
                      "cbe8ff",
                      "fecddf",
                      "c27eb6",
                      "8cd2ce",
                      "c4b8d9",
                      "f883b0",
                      "a49100",
                      "f48800",
                      "27d0df",
                      "a04a9b",
                    ];

                    function getColorIndex(idx) {
                      // Reuse the color if index too large.
                      return Color("#" + palette[idx % palette.length]);
                    }

                    var colorDict = {};
                    var colorIndex = 0;
                    if (startIndex > 0) colorIndex = startIndex;

                    if (staticColors) {
                      Object.keys(staticColors).forEach(function(c) {
                        var c1 = staticColors[c];

                        if (isFinite(c1)) {
                          colorDict[c.toLowerCase()] = getColorIndex(c1);
                        } else {
                          colorDict[c.toLowerCase()] = Color(staticColors[c]);
                        }
                      });
                    } // Custom color assign

                    function getColor(__, data) {
                      var ret;
                      var name = data[3];
                      if (name === null) return Color().hsl(0, 40, 38);
                      if (name === undefined) return Color().hsl(120, 40, 38);
                      var name1 = name.toLowerCase();

                      if (ret === undefined) {
                        ret = colorDict[name1];
                      }

                      if (ret === undefined) {
                        ret = getColorIndex(colorIndex);
                        colorIndex++;
                        colorDict[name1] = ret;
                      }

                      return ret;
                    }

                    return getColor;
                  },
                },
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
                      data: Object,
                      identifier: String,
                      rendered: {
                        type: Boolean,
                        notify: true,
                        value: false,
                        readOnly: true,
                      },
                      metas: {
                        type: Array,
                        value: function value() {
                          return [];
                        },
                      },
                      tooltip: {
                        type: Object,
                        value: function value() {
                          return {
                            opacity: "0",
                            left: "0",
                            top: "0",
                            xPadding: "5",
                            yPadding: "3",
                          };
                        },
                      },
                      unit: Object,
                      rtl: {
                        type: Boolean,
                        reflectToAttribute: true,
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["onPropsChange(data)"];
                  },
                },
              ]
            );

            return HaChartBase;
          })(
            Object(
              _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__[
                "mixinBehaviors"
              ]
            )(
              [
                _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__[
                  "IronResizableBehavior"
                ],
              ],
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-chart-base", HaChartBase);

        /***/
      },

    /***/ "./src/components/state-history-chart-line.js":
      /*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
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
            '\n      <style>\n        :host {\n          display: block;\n          overflow: hidden;\n          height: 0;\n          transition: height 0.3s ease-in-out;\n        }\n      </style>\n      <ha-chart-base\n        id="chart"\n        data="[[chartData]]"\n        identifier="[[identifier]]"\n        rendered="{{rendered}}"\n      ></ha-chart-base>\n    ',
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

        var StateHistoryChartLine =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateHistoryChartLine, _LocalizeMixin);

            function StateHistoryChartLine() {
              _classCallCheck(this, StateHistoryChartLine);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateHistoryChartLine).apply(this, arguments)
              );
            }

            _createClass(
              StateHistoryChartLine,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(StateHistoryChartLine.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._isAttached = true;
                    this.drawChart();
                  },
                },
                {
                  key: "dataChanged",
                  value: function dataChanged() {
                    this.drawChart();
                  },
                },
                {
                  key: "_onRenderedChanged",
                  value: function _onRenderedChanged(rendered) {
                    if (rendered) this.animateHeight();
                  },
                },
                {
                  key: "animateHeight",
                  value: function animateHeight() {
                    var _this = this;

                    requestAnimationFrame(function() {
                      return requestAnimationFrame(function() {
                        _this.style.height = _this.$.chart.scrollHeight + "px";
                      });
                    });
                  },
                },
                {
                  key: "drawChart",
                  value: function drawChart() {
                    var _this2 = this;

                    var unit = this.unit;
                    var deviceStates = this.data;
                    var datasets = [];
                    var endTime;

                    if (!this._isAttached) {
                      return;
                    }

                    if (deviceStates.length === 0) {
                      return;
                    }

                    function safeParseFloat(value) {
                      var parsed = parseFloat(value);
                      return isFinite(parsed) ? parsed : null;
                    }

                    endTime =
                      this.endTime || // Get the highest date from the last date of each device
                      new Date(
                        Math.max.apply(
                          null,
                          deviceStates.map(function(devSts) {
                            return new Date(
                              devSts.states[
                                devSts.states.length - 1
                              ].last_changed
                            );
                          })
                        )
                      );

                    if (endTime > new Date()) {
                      endTime = new Date();
                    }

                    var names = this.names || {};
                    deviceStates.forEach(function(states) {
                      var domain = states.domain;
                      var name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

                      var prevValues;
                      var data = [];

                      function pushData(timestamp, datavalues) {
                        if (!datavalues) return;

                        if (timestamp > endTime) {
                          // Drop datapoints that are after the requested endTime. This could happen if
                          // endTime is "now" and client time is not in sync with server time.
                          return;
                        }

                        data.forEach(function(d, i) {
                          d.data.push({
                            x: timestamp,
                            y: datavalues[i],
                          });
                        });
                        prevValues = datavalues;
                      }

                      function addColumn(nameY, step, fill) {
                        var dataFill = false;
                        var dataStep = false;

                        if (fill) {
                          dataFill = "origin";
                        }

                        if (step) {
                          dataStep = "before";
                        }

                        data.push({
                          label: nameY,
                          fill: dataFill,
                          steppedLine: dataStep,
                          pointRadius: 0,
                          data: [],
                          unitText: unit,
                        });
                      }

                      if (
                        domain === "thermostat" ||
                        domain === "climate" ||
                        domain === "water_heater"
                      ) {
                        var isHeating =
                          domain === "climate"
                            ? function(state) {
                                return (
                                  state.attributes.hvac_action === "heating"
                                );
                              }
                            : function(state) {
                                return state.state === "heat";
                              };
                        var isCooling =
                          domain === "climate"
                            ? function(state) {
                                return (
                                  state.attributes.hvac_action === "cooling"
                                );
                              }
                            : function(state) {
                                return state.state === "cool";
                              }; // We differentiate between thermostats that have a target temperature
                        // range versus ones that have just a target temperature
                        // Using step chart by step-before so manually interpolation not needed.

                        var hasTargetRange = states.states.some(function(
                          state
                        ) {
                          return (
                            state.attributes &&
                            state.attributes.target_temp_high !==
                              state.attributes.target_temp_low
                          );
                        });
                        var hasHeat = states.states.some(isHeating);
                        var hasCool = states.states.some(isCooling);
                        addColumn(name + " current temperature", true);

                        if (hasHeat) {
                          addColumn(name + " heating", true, true); // The "heating" series uses steppedArea to shade the area below the current
                          // temperature when the thermostat is calling for heat.
                        }

                        if (hasCool) {
                          addColumn(name + " cooling", true, true); // The "cooling" series uses steppedArea to shade the area below the current
                          // temperature when the thermostat is calling for heat.
                        }

                        if (hasTargetRange) {
                          addColumn(name + " target temperature high", true);
                          addColumn(name + " target temperature low", true);
                        } else {
                          addColumn(name + " target temperature", true);
                        }

                        states.states.forEach(function(state) {
                          if (!state.attributes) return;
                          var curTemp = safeParseFloat(
                            state.attributes.current_temperature
                          );
                          var series = [curTemp];

                          if (hasHeat) {
                            series.push(isHeating(state) ? curTemp : null);
                          }

                          if (hasCool) {
                            series.push(isCooling(state) ? curTemp : null);
                          }

                          if (hasTargetRange) {
                            var targetHigh = safeParseFloat(
                              state.attributes.target_temp_high
                            );
                            var targetLow = safeParseFloat(
                              state.attributes.target_temp_low
                            );
                            series.push(targetHigh, targetLow);
                            pushData(new Date(state.last_changed), series);
                          } else {
                            var target = safeParseFloat(
                              state.attributes.temperature
                            );
                            series.push(target);
                            pushData(new Date(state.last_changed), series);
                          }
                        });
                      } else {
                        // Only disable interpolation for sensors
                        var isStep = domain === "sensor";
                        addColumn(name, isStep);
                        var lastValue = null;
                        var lastDate = null;
                        var lastNullDate = null; // Process chart data.
                        // When state is `unknown`, calculate the value and break the line.

                        states.states.forEach(function(state) {
                          var value = safeParseFloat(state.state);
                          var date = new Date(state.last_changed);

                          if (value !== null && lastNullDate !== null) {
                            var dateTime = date.getTime();
                            var lastNullDateTime = lastNullDate.getTime();
                            var lastDateTime = lastDate.getTime();
                            var tmpValue =
                              (value - lastValue) *
                                ((lastNullDateTime - lastDateTime) /
                                  (dateTime - lastDateTime)) +
                              lastValue;
                            pushData(lastNullDate, [tmpValue]);
                            pushData(new Date(lastNullDateTime + 1), [null]);
                            pushData(date, [value]);
                            lastDate = date;
                            lastValue = value;
                            lastNullDate = null;
                          } else if (value !== null && lastNullDate === null) {
                            pushData(date, [value]);
                            lastDate = date;
                            lastValue = value;
                          } else if (
                            value === null &&
                            lastNullDate === null &&
                            lastValue !== null
                          ) {
                            lastNullDate = date;
                          }
                        });
                      } // Add an entry for final values

                      pushData(endTime, prevValues, false); // Concat two arrays

                      Array.prototype.push.apply(datasets, data);
                    });

                    var formatTooltipTitle = function formatTooltipTitle(
                      items,
                      data
                    ) {
                      var item = items[0];
                      var date =
                        data.datasets[item.datasetIndex].data[item.index].x;
                      return Object(
                        _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(date, _this2.hass.language);
                    };

                    var chartOptions = {
                      type: "line",
                      unit: unit,
                      legend: !this.isSingleDevice,
                      options: {
                        scales: {
                          xAxes: [
                            {
                              type: "time",
                              ticks: {
                                major: {
                                  fontStyle: "bold",
                                },
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: {
                                maxTicksLimit: 7,
                              },
                            },
                          ],
                        },
                        tooltips: {
                          mode: "neareach",
                          callbacks: {
                            title: formatTooltipTitle,
                          },
                        },
                        hover: {
                          mode: "neareach",
                        },
                        layout: {
                          padding: {
                            top: 5,
                          },
                        },
                        elements: {
                          line: {
                            tension: 0.1,
                            pointRadius: 0,
                            borderWidth: 1.5,
                          },
                          point: {
                            hitRadius: 5,
                          },
                        },
                        plugins: {
                          filler: {
                            propagate: true,
                          },
                        },
                      },
                      data: {
                        labels: [],
                        datasets: datasets,
                      },
                    };
                    this.chartData = chartOptions;
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
                      chartData: Object,
                      data: Object,
                      names: Object,
                      unit: String,
                      identifier: String,
                      isSingleDevice: {
                        type: Boolean,
                        value: false,
                      },
                      endTime: Object,
                      rendered: {
                        type: Boolean,
                        value: false,
                        observer: "_onRenderedChanged",
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["dataChanged(data, endTime, isSingleDevice)"];
                  },
                },
              ]
            );

            return StateHistoryChartLine;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "state-history-chart-line",
          StateHistoryChartLine
        );

        /***/
      },

    /***/ "./src/components/state-history-chart-timeline.js":
      /*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js"
        );
        /* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
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
            '\n      <style>\n        :host {\n          display: block;\n          opacity: 0;\n          transition: opacity 0.3s ease-in-out;\n        }\n        :host([rendered]) {\n          opacity: 1;\n        }\n\n        ha-chart-base {\n          direction: ltr;\n        }\n      </style>\n      <ha-chart-base\n        data="[[chartData]]"\n        rendered="{{rendered}}"\n        rtl="{{rtl}}"\n      ></ha-chart-base>\n    ',
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

        var StateHistoryChartTimeline =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateHistoryChartTimeline, _LocalizeMixin);

            function StateHistoryChartTimeline() {
              _classCallCheck(this, StateHistoryChartTimeline);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateHistoryChartTimeline).apply(
                  this,
                  arguments
                )
              );
            }

            _createClass(
              StateHistoryChartTimeline,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(StateHistoryChartTimeline.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this._isAttached = true;
                    this.drawChart();
                  },
                },
                {
                  key: "dataChanged",
                  value: function dataChanged() {
                    this.drawChart();
                  },
                },
                {
                  key: "drawChart",
                  value: function drawChart() {
                    var _this = this;

                    var staticColors = {
                      on: 1,
                      off: 0,
                      unavailable: "#a0a0a0",
                      unknown: "#606060",
                      idle: 2,
                    };
                    var stateHistory = this.data;

                    if (!this._isAttached) {
                      return;
                    }

                    if (!stateHistory) {
                      stateHistory = [];
                    }

                    var startTime = new Date(
                      stateHistory.reduce(function(minTime, stateInfo) {
                        return Math.min(
                          minTime,
                          new Date(stateInfo.data[0].last_changed)
                        );
                      }, new Date())
                    ); // end time is Math.max(startTime, last_event)

                    var endTime =
                      this.endTime ||
                      new Date(
                        stateHistory.reduce(function(maxTime, stateInfo) {
                          return Math.max(
                            maxTime,
                            new Date(
                              stateInfo.data[
                                stateInfo.data.length - 1
                              ].last_changed
                            )
                          );
                        }, startTime)
                      );

                    if (endTime > new Date()) {
                      endTime = new Date();
                    }

                    var labels = [];
                    var datasets = []; // stateHistory is a list of lists of sorted state objects

                    var names = this.names || {};
                    stateHistory.forEach(function(stateInfo) {
                      var newLastChanged;
                      var prevState = null;
                      var locState = null;
                      var prevLastChanged = startTime;
                      var entityDisplay =
                        names[stateInfo.entity_id] || stateInfo.name;
                      var dataRow = [];
                      stateInfo.data.forEach(function(state) {
                        var newState = state.state;
                        var timeStamp = new Date(state.last_changed);

                        if (newState === undefined || newState === "") {
                          newState = null;
                        }

                        if (timeStamp > endTime) {
                          // Drop datapoints that are after the requested endTime. This could happen if
                          // endTime is 'now' and client time is not in sync with server time.
                          return;
                        }

                        if (prevState !== null && newState !== prevState) {
                          newLastChanged = new Date(state.last_changed);
                          dataRow.push([
                            prevLastChanged,
                            newLastChanged,
                            locState,
                            prevState,
                          ]);
                          prevState = newState;
                          locState = state.state_localize;
                          prevLastChanged = newLastChanged;
                        } else if (prevState === null) {
                          prevState = newState;
                          locState = state.state_localize;
                          prevLastChanged = new Date(state.last_changed);
                        }
                      });

                      if (prevState !== null) {
                        dataRow.push([
                          prevLastChanged,
                          endTime,
                          locState,
                          prevState,
                        ]);
                      }

                      datasets.push({
                        data: dataRow,
                      });
                      labels.push(entityDisplay);
                    });

                    var formatTooltipLabel = function formatTooltipLabel(
                      item,
                      data
                    ) {
                      var values =
                        data.datasets[item.datasetIndex].data[item.index];
                      var start = Object(
                        _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(values[0], _this.hass.language);
                      var end = Object(
                        _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(values[1], _this.hass.language);
                      var state = values[2];
                      return [state, start, end];
                    };

                    var chartOptions = {
                      type: "timeline",
                      options: {
                        tooltips: {
                          callbacks: {
                            label: formatTooltipLabel,
                          },
                        },
                        scales: {
                          xAxes: [
                            {
                              ticks: {
                                major: {
                                  fontStyle: "bold",
                                },
                              },
                            },
                          ],
                          yAxes: [
                            {
                              afterSetDimensions: function afterSetDimensions(
                                yaxe
                              ) {
                                yaxe.maxWidth = yaxe.chart.width * 0.18;
                              },
                              position: this._computeRTL ? "right" : "left",
                            },
                          ],
                        },
                      },
                      data: {
                        labels: labels,
                        datasets: datasets,
                      },
                      colors: {
                        staticColors: staticColors,
                        staticColorIndex: 3,
                      },
                    };
                    this.chartData = chartOptions;
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__[
                        "computeRTL"
                      ]
                    )(hass);
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
                      chartData: Object,
                      data: {
                        type: Object,
                        observer: "dataChanged",
                      },
                      names: Object,
                      noSingle: Boolean,
                      endTime: Date,
                      rendered: {
                        type: Boolean,
                        value: false,
                        reflectToAttribute: true,
                      },
                      rtl: {
                        reflectToAttribute: true,
                        computed: "_computeRTL(hass)",
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return ["dataChanged(data, endTime, localize, language)"];
                  },
                },
              ]
            );

            return StateHistoryChartTimeline;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define(
          "state-history-chart-timeline",
          StateHistoryChartTimeline
        );

        /***/
      },

    /***/ "./src/components/state-history-charts.js":
      /*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js"
        );
        /* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
            '\n      <style>\n        :host {\n          display: block;\n          /* height of single timeline chart = 58px */\n          min-height: 58px;\n        }\n        .info {\n          text-align: center;\n          line-height: 58px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template\n        is="dom-if"\n        class="info"\n        if="[[_computeIsLoading(isLoadingData)]]"\n      >\n        <div class="info">\n          [[localize(\'ui.components.history_charts.loading_history\')]]\n        </div>\n      </template>\n\n      <template\n        is="dom-if"\n        class="info"\n        if="[[_computeIsEmpty(isLoadingData, historyData)]]"\n      >\n        <div class="info">\n          [[localize(\'ui.components.history_charts.no_history_found\')]]\n        </div>\n      </template>\n\n      <template is="dom-if" if="[[historyData.timeline.length]]">\n        <state-history-chart-timeline\n          hass="[[hass]]"\n          data="[[historyData.timeline]]"\n          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"\n          no-single="[[noSingle]]"\n          names="[[names]]"\n        ></state-history-chart-timeline>\n      </template>\n\n      <template is="dom-repeat" items="[[historyData.line]]">\n        <state-history-chart-line\n          hass="[[hass]]"\n          unit="[[item.unit]]"\n          data="[[item.data]]"\n          identifier="[[item.identifier]]"\n          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"\n          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"\n          names="[[names]]"\n        ></state-history-chart-line>\n      </template>\n    ',
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

        var StateHistoryCharts =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(StateHistoryCharts, _LocalizeMixin);

            function StateHistoryCharts() {
              _classCallCheck(this, StateHistoryCharts);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(StateHistoryCharts).apply(this, arguments)
              );
            }

            _createClass(
              StateHistoryCharts,
              [
                {
                  key: "_computeIsSingleLineChart",
                  value: function _computeIsSingleLineChart(data, noSingle) {
                    return !noSingle && data && data.length === 1;
                  },
                },
                {
                  key: "_computeIsEmpty",
                  value: function _computeIsEmpty(isLoadingData, historyData) {
                    var historyDataEmpty =
                      !historyData ||
                      !historyData.timeline ||
                      !historyData.line ||
                      (historyData.timeline.length === 0 &&
                        historyData.line.length === 0);
                    return !isLoadingData && historyDataEmpty;
                  },
                },
                {
                  key: "_computeIsLoading",
                  value: function _computeIsLoading(isLoading) {
                    return isLoading && !this.historyData;
                  },
                },
                {
                  key: "_computeEndTime",
                  value: function _computeEndTime(endTime, upToNow) {
                    // We don't really care about the value of historyData, but if it change we want to update
                    // endTime.
                    return upToNow ? new Date() : endTime;
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
                      hass: Object,
                      historyData: {
                        type: Object,
                        value: null,
                      },
                      names: Object,
                      isLoadingData: Boolean,
                      endTime: {
                        type: Object,
                      },
                      upToNow: Boolean,
                      noSingle: Boolean,
                    };
                  },
                },
              ]
            );

            return StateHistoryCharts;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("state-history-charts", StateHistoryCharts);

        /***/
      },

    /***/ "./src/data/cached-history.ts":
      /*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
      /*! exports provided: getRecent, getRecentWithCache */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getRecent",
          function() {
            return getRecent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getRecentWithCache",
          function() {
            return getRecentWithCache;
          }
        );
        /* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./history */ "./src/data/history.ts"
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

        var RECENT_THRESHOLD = 60000; // 1 minute

        var RECENT_CACHE = {};
        var stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

        var getRecent = function getRecent(
          hass,
          entityId,
          startTime,
          endTime,
          localize,
          language
        ) {
          var cacheKey = entityId;
          var cache = RECENT_CACHE[cacheKey];

          if (
            cache &&
            Date.now() - cache.created < RECENT_THRESHOLD &&
            cache.language === language
          ) {
            return cache.data;
          }

          var prom = Object(
            _history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"]
          )(hass, entityId, startTime, endTime).then(
            function(stateHistory) {
              return Object(
                _history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"]
              )(hass, stateHistory, localize, language);
            },
            function(err) {
              delete RECENT_CACHE[entityId];
              throw err;
            }
          );
          RECENT_CACHE[cacheKey] = {
            created: Date.now(),
            language: language,
            data: prom,
          };
          return prom;
        }; // Cache type 2 functionality

        function getEmptyCache(language, startTime, endTime) {
          return {
            prom: Promise.resolve({
              line: [],
              timeline: [],
            }),
            language: language,
            startTime: startTime,
            endTime: endTime,
            data: {
              line: [],
              timeline: [],
            },
          };
        }

        var getRecentWithCache = function getRecentWithCache(
          hass,
          entityId,
          cacheConfig,
          localize,
          language
        ) {
          var cacheKey = cacheConfig.cacheKey;
          var endTime = new Date();
          var startTime = new Date(endTime);
          startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
          var toFetchStartTime = startTime;
          var appendingToCache = false;
          var cache = stateHistoryCache[cacheKey];

          if (
            cache &&
            toFetchStartTime >= cache.startTime &&
            toFetchStartTime <= cache.endTime &&
            cache.language === language
          ) {
            toFetchStartTime = cache.endTime;
            appendingToCache = true; // This pretty much never happens as endTime is usually set to now

            if (endTime <= cache.endTime) {
              return cache.prom;
            }
          } else {
            cache = stateHistoryCache[cacheKey] = getEmptyCache(
              language,
              startTime,
              endTime
            );
          }

          var curCacheProm = cache.prom;

          var genProm =
            /*#__PURE__*/
            (function() {
              var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var fetchedHistory, results, stateHistory;
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return Promise.all([
                              curCacheProm,
                              Object(
                                _history__WEBPACK_IMPORTED_MODULE_0__[
                                  "fetchRecent"
                                ]
                              )(
                                hass,
                                entityId,
                                toFetchStartTime,
                                endTime,
                                appendingToCache
                              ),
                            ]);

                          case 3:
                            results = _context.sent;
                            fetchedHistory = results[1];
                            _context.next = 11;
                            break;

                          case 7:
                            _context.prev = 7;
                            _context.t0 = _context["catch"](0);
                            delete stateHistoryCache[cacheKey];
                            throw _context.t0;

                          case 11:
                            stateHistory = Object(
                              _history__WEBPACK_IMPORTED_MODULE_0__[
                                "computeHistory"
                              ]
                            )(hass, fetchedHistory, localize, language);

                            if (appendingToCache) {
                              mergeLine(stateHistory.line, cache.data.line);
                              mergeTimeline(
                                stateHistory.timeline,
                                cache.data.timeline
                              );
                              pruneStartTime(startTime, cache.data);
                            } else {
                              cache.data = stateHistory;
                            }

                            return _context.abrupt("return", cache.data);

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 7]]
                  );
                })
              );

              return function genProm() {
                return _ref.apply(this, arguments);
              };
            })();

          cache.prom = genProm();
          cache.startTime = startTime;
          cache.endTime = endTime;
          return cache.prom;
        };

        var mergeLine = function mergeLine(historyLines, cacheLines) {
          historyLines.forEach(function(line) {
            var unit = line.unit;
            var oldLine = cacheLines.find(function(cacheLine) {
              return cacheLine.unit === unit;
            });

            if (oldLine) {
              line.data.forEach(function(entity) {
                var oldEntity = oldLine.data.find(function(cacheEntity) {
                  return entity.entity_id === cacheEntity.entity_id;
                });

                if (oldEntity) {
                  oldEntity.states = oldEntity.states.concat(entity.states);
                } else {
                  oldLine.data.push(entity);
                }
              });
            } else {
              cacheLines.push(line);
            }
          });
        };

        var mergeTimeline = function mergeTimeline(
          historyTimelines,
          cacheTimelines
        ) {
          historyTimelines.forEach(function(timeline) {
            var oldTimeline = cacheTimelines.find(function(cacheTimeline) {
              return cacheTimeline.entity_id === timeline.entity_id;
            });

            if (oldTimeline) {
              oldTimeline.data = oldTimeline.data.concat(timeline.data);
            } else {
              cacheTimelines.push(timeline);
            }
          });
        };

        var pruneArray = function pruneArray(originalStartTime, arr) {
          if (arr.length === 0) {
            return arr;
          }

          var changedAfterStartTime = arr.findIndex(function(state) {
            return new Date(state.last_changed) > originalStartTime;
          });

          if (changedAfterStartTime === 0) {
            // If all changes happened after originalStartTime then we are done.
            return arr;
          } // If all changes happened at or before originalStartTime. Use last index.

          var updateIndex =
            changedAfterStartTime === -1
              ? arr.length - 1
              : changedAfterStartTime - 1;
          arr[updateIndex].last_changed = originalStartTime;
          return arr.slice(updateIndex);
        };

        var pruneStartTime = function pruneStartTime(
          originalStartTime,
          cacheData
        ) {
          cacheData.line.forEach(function(line) {
            line.data.forEach(function(entity) {
              entity.states = pruneArray(originalStartTime, entity.states);
            });
          });
          cacheData.timeline.forEach(function(timeline) {
            timeline.data = pruneArray(originalStartTime, timeline.data);
          });
        };

        /***/
      },

    /***/ "./src/data/ha-state-history-data.js":
      /*!*******************************************!*\
  !*** ./src/data/ha-state-history-data.js ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./history */ "./src/data/history.ts"
        );
        /* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./cached-history */ "./src/data/cached-history.ts"
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

        /*
         * @appliesMixin LocalizeMixin
         */

        var HaStateHistoryData =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaStateHistoryData, _LocalizeMixin);

            function HaStateHistoryData() {
              _classCallCheck(this, HaStateHistoryData);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaStateHistoryData).apply(this, arguments)
              );
            }

            _createClass(
              HaStateHistoryData,
              [
                {
                  key: "connectedCallback",
                  value: function connectedCallback() {
                    _get(
                      _getPrototypeOf(HaStateHistoryData.prototype),
                      "connectedCallback",
                      this
                    ).call(this);

                    this.filterChangedDebouncer(
                      this.filterType,
                      this.entityId,
                      this.startTime,
                      this.endTime,
                      this.cacheConfig,
                      this.localize
                    );
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    if (this._refreshTimeoutId) {
                      window.clearInterval(this._refreshTimeoutId);
                      this._refreshTimeoutId = null;
                    }

                    _get(
                      _getPrototypeOf(HaStateHistoryData.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);
                  },
                },
                {
                  key: "hassChanged",
                  value: function hassChanged(newHass, oldHass) {
                    if (!oldHass && !this._madeFirstCall) {
                      this.filterChangedDebouncer(
                        this.filterType,
                        this.entityId,
                        this.startTime,
                        this.endTime,
                        this.cacheConfig,
                        this.localize
                      );
                    }
                  },
                },
                {
                  key: "filterChangedDebouncer",
                  value: function filterChangedDebouncer() {
                    var _this = this;

                    for (
                      var _len = arguments.length,
                        args = new Array(_len),
                        _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__[
                      "Debouncer"
                    ].debounce(
                      this._debounceFilterChanged,
                      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__[
                        "timeOut"
                      ].after(0),
                      function() {
                        _this.filterChanged.apply(_this, args);
                      }
                    );
                  },
                },
                {
                  key: "filterChanged",
                  value: function filterChanged(
                    filterType,
                    entityId,
                    startTime,
                    endTime,
                    cacheConfig,
                    localize
                  ) {
                    var _this2 = this;

                    if (!this.hass) {
                      return;
                    }

                    if (cacheConfig && !cacheConfig.cacheKey) {
                      return;
                    }

                    if (!localize) {
                      return;
                    }

                    this._madeFirstCall = true;
                    var language = this.hass.language;
                    var data;

                    if (filterType === "date") {
                      if (!startTime || !endTime) return;
                      data = Object(
                        _history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"]
                      )(this.hass, startTime, endTime).then(function(
                        dateHistory
                      ) {
                        return Object(
                          _history__WEBPACK_IMPORTED_MODULE_4__[
                            "computeHistory"
                          ]
                        )(_this2.hass, dateHistory, localize, language);
                      });
                    } else if (filterType === "recent-entity") {
                      if (!entityId) return;

                      if (cacheConfig) {
                        data = this.getRecentWithCacheRefresh(
                          entityId,
                          cacheConfig,
                          localize,
                          language
                        );
                      } else {
                        data = Object(
                          _cached_history__WEBPACK_IMPORTED_MODULE_5__[
                            "getRecent"
                          ]
                        )(
                          this.hass,
                          entityId,
                          startTime,
                          endTime,
                          localize,
                          language
                        );
                      }
                    } else {
                      return;
                    }

                    this._setIsLoading(true);

                    data.then(function(stateHistory) {
                      _this2._setData(stateHistory);

                      _this2._setIsLoading(false);
                    });
                  },
                },
                {
                  key: "getRecentWithCacheRefresh",
                  value: function getRecentWithCacheRefresh(
                    entityId,
                    cacheConfig,
                    localize,
                    language
                  ) {
                    var _this3 = this;

                    if (this._refreshTimeoutId) {
                      window.clearInterval(this._refreshTimeoutId);
                      this._refreshTimeoutId = null;
                    }

                    if (cacheConfig.refresh) {
                      this._refreshTimeoutId = window.setInterval(function() {
                        Object(
                          _cached_history__WEBPACK_IMPORTED_MODULE_5__[
                            "getRecentWithCache"
                          ]
                        )(
                          _this3.hass,
                          entityId,
                          cacheConfig,
                          localize,
                          language
                        ).then(function(stateHistory) {
                          _this3._setData(Object.assign({}, stateHistory));
                        });
                      }, cacheConfig.refresh * 1000);
                    }

                    return Object(
                      _cached_history__WEBPACK_IMPORTED_MODULE_5__[
                        "getRecentWithCache"
                      ]
                    )(this.hass, entityId, cacheConfig, localize, language);
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {
                        type: Object,
                        observer: "hassChanged",
                      },
                      filterType: String,
                      cacheConfig: Object,
                      startTime: Date,
                      endTime: Date,
                      entityId: String,
                      isLoading: {
                        type: Boolean,
                        value: true,
                        readOnly: true,
                        notify: true,
                      },
                      data: {
                        type: Object,
                        value: null,
                        readOnly: true,
                        notify: true,
                      },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function get() {
                    return [
                      "filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)",
                    ];
                  },
                },
              ]
            );

            return HaStateHistoryData;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-state-history-data", HaStateHistoryData);

        /***/
      },

    /***/ "./src/data/history.ts":
      /*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
      /*! exports provided: fetchRecent, fetchDate, computeHistory */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchRecent",
          function() {
            return fetchRecent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fetchDate",
          function() {
            return fetchDate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "computeHistory",
          function() {
            return computeHistory;
          }
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
        );
        /* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts"
        );

        var DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
        var LINE_ATTRIBUTES_TO_KEEP = [
          "temperature",
          "current_temperature",
          "target_temp_low",
          "target_temp_high",
        ];
        var fetchRecent = function fetchRecent(
          hass,
          entityId,
          startTime,
          endTime
        ) {
          var skipInitialState =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : false;
          var url = "history/period";

          if (startTime) {
            url += "/" + startTime.toISOString();
          }

          url += "?filter_entity_id=" + entityId;

          if (endTime) {
            url += "&end_time=" + endTime.toISOString();
          }

          if (skipInitialState) {
            url += "&skip_initial_state";
          }

          return hass.callApi("GET", url);
        };
        var fetchDate = function fetchDate(hass, startTime, endTime) {
          return hass.callApi(
            "GET",
            "history/period/"
              .concat(startTime.toISOString(), "?end_time=")
              .concat(endTime.toISOString())
          );
        };

        var equalState = function equalState(obj1, obj2) {
          return (
            obj1.state === obj2.state && // They either both have an attributes object or not
            (!obj1.attributes ||
              LINE_ATTRIBUTES_TO_KEEP.every(function(attr) {
                return obj1.attributes[attr] === obj2.attributes[attr];
              }))
          );
        };

        var processTimelineEntity = function processTimelineEntity(
          localize,
          language,
          states
        ) {
          var data = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (
              var _iterator = states[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var state = _step.value;

              if (
                data.length > 0 &&
                state.state === data[data.length - 1].state
              ) {
                continue;
              }

              data.push({
                state_localize: Object(
                  _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ]
                )(localize, state, language),
                state: state.state,
                last_changed: state.last_changed,
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return {
            name: Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(states[0]),
            entity_id: states[0].entity_id,
            data: data,
          };
        };

        var processLineChartEntities = function processLineChartEntities(
          unit,
          entities
        ) {
          var data = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (
              var _iterator2 = entities[Symbol.iterator](), _step2;
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              var states = _step2.value;
              var last = states[states.length - 1];
              var domain = Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(last);
              var processedStates = [];
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (
                  var _iterator3 = states[Symbol.iterator](), _step3;
                  !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next())
                    .done);
                  _iteratorNormalCompletion3 = true
                ) {
                  var state = _step3.value;
                  var processedState = void 0;

                  if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
                    processedState = {
                      state: state.state,
                      last_changed: state.last_updated,
                      attributes: {},
                    };
                    var _arr = LINE_ATTRIBUTES_TO_KEEP;

                    for (var _i = 0; _i < _arr.length; _i++) {
                      var attr = _arr[_i];

                      if (attr in state.attributes) {
                        processedState.attributes[attr] =
                          state.attributes[attr];
                      }
                    }
                  } else {
                    processedState = state;
                  }

                  if (
                    processedStates.length > 1 &&
                    equalState(
                      processedState,
                      processedStates[processedStates.length - 1]
                    ) &&
                    equalState(
                      processedState,
                      processedStates[processedStates.length - 2]
                    )
                  ) {
                    continue;
                  }

                  processedStates.push(processedState);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (
                    !_iteratorNormalCompletion3 &&
                    _iterator3.return != null
                  ) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              data.push({
                domain: domain,
                name: Object(
                  _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ]
                )(last),
                entity_id: last.entity_id,
                states: processedStates,
              });
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return {
            unit: unit,
            identifier: entities
              .map(function(states) {
                return states[0].entity_id;
              })
              .join(""),
            data: data,
          };
        };

        var computeHistory = function computeHistory(
          hass,
          stateHistory,
          localize,
          language
        ) {
          var lineChartDevices = {};
          var timelineDevices = [];

          if (!stateHistory) {
            return {
              line: [],
              timeline: [],
            };
          }

          stateHistory.forEach(function(stateInfo) {
            if (stateInfo.length === 0) {
              return;
            }

            var stateWithUnit = stateInfo.find(function(state) {
              return "unit_of_measurement" in state.attributes;
            });
            var unit;

            if (stateWithUnit) {
              unit = stateWithUnit.attributes.unit_of_measurement;
            } else if (
              Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(stateInfo[0]) === "climate"
            ) {
              unit = hass.config.unit_system.temperature;
            } else if (
              Object(
                _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              )(stateInfo[0]) === "water_heater"
            ) {
              unit = hass.config.unit_system.temperature;
            }

            if (!unit) {
              timelineDevices.push(
                processTimelineEntity(localize, language, stateInfo)
              );
            } else if (unit in lineChartDevices) {
              lineChartDevices[unit].push(stateInfo);
            } else {
              lineChartDevices[unit] = [stateInfo];
            }
          });
          var unitStates = Object.keys(lineChartDevices).map(function(unit) {
            return processLineChartEntities(unit, lineChartDevices[unit]);
          });
          return {
            line: unitStates,
            timeline: timelineDevices,
          };
        };

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtY2hhcnQtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jYWNoZWQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGlzdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJtZWRpdW1EYXRlXCIpKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKSk7XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IHN0cmluZyA9PiB7XG4gIGxldCBkaXNwbGF5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJiaW5hcnlfc2Vuc29yXCIpIHtcbiAgICAvLyBUcnkgZGV2aWNlIGNsYXNzIHRyYW5zbGF0aW9uLCB0aGVuIGRlZmF1bHQgYmluYXJ5IHNlbnNvciB0cmFuc2xhdGlvblxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKFxuICAgICAgICBgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3N9LiR7c3RhdGVPYmouc3RhdGV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc3BsYXkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50ICYmXG4gICAgIVtcInVua25vd25cIiwgXCJ1bmF2YWlsYWJsZVwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSlcbiAgKSB7XG4gICAgZGlzcGxheSA9IHN0YXRlT2JqLnN0YXRlICsgXCIgXCIgKyBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcImlucHV0X2RhdGV0aW1lXCIpIHtcbiAgICBsZXQgZGF0ZTogRGF0ZTtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG4gICAgICBkaXNwbGF5ID0gZm9ybWF0RGF0ZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfSBlbHNlIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgLy8gRHVlIHRvIGJ1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTc1NDhcbiAgICAgICAgLy8gZG9uJ3QgdXNlIGFydGlmaWNpYWwgMTk3MCB5ZWFyLlxuICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICAgIG5vdy5nZXREYXkoKSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXRUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbnV0ZVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlVGltZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJ6d2F2ZVwiKSB7XG4gICAgaWYgKFtcImluaXRpYWxpemluZ1wiLCBcImRlYWRcIl0uaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS56d2F2ZS5xdWVyeV9zdGFnZS4ke3N0YXRlT2JqLnN0YXRlfWAsXG4gICAgICAgIFwicXVlcnlfc3RhZ2VcIixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5xdWVyeV9zdGFnZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS56d2F2ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuJHtkb21haW59LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gIH1cblxuICAvLyBGYWxsIGJhY2sgdG8gZGVmYXVsdCwgY29tcG9uZW50IGJhY2tlbmQgdHJhbnNsYXRpb24sIG9yIHJhdyBzdGF0ZSBpZiBub3RoaW5nIGVsc2UgbWF0Y2hlcy5cbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBzdGF0ZU9iai5zdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBkaXNwbGF5O1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PlxuICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IElyb25SZXNpemFibGVCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5cbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLyogZ2xvYmFsIENoYXJ0IG1vbWVudCBDb2xvciAqL1xuXG5sZXQgc2NyaXB0c0xvYWRlZCA9IG51bGw7XG5cbmNsYXNzIEhhQ2hhcnRCYXNlIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gIFtJcm9uUmVzaXphYmxlQmVoYXZpb3JdLFxuICBQb2x5bWVyRWxlbWVudFxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDAgMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2IHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydFRpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIGZsZXg6IDAgMCAwO1xuICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdi5jaGFydExlZ2VuZCB7XG4gICAgICAgICAgZmxleDogMSAxO1xuICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODAsIDgwLCA4MCwgMC45KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEycHgpO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5jaGFydFRvb2x0aXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCB1bCxcbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB1bCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0OSU7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpOm50aC1jaGlsZChvZGQpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgLyogTWFrZSBsYXN0IGl0ZW0gdGFrZSBmdWxsIHdpZHRoIGlmIGl0IGlzIG9kZC1udW1iZXJlZC4gKi9cbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGxpW2RhdGEtaGlkZGVuXSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIGVtLFxuICAgICAgICAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCBlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbdW5pdF1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydEhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydFRpdGxlXCI+W1t1bml0XV08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRMZWdlbmRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1ttZXRhc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpIG9uLWNsaWNrPVwiX2xlZ2VuZENsaWNrXCIgZGF0YS1oaWRkZW4kPVwiW1tpdGVtLmhpZGRlbl1dXCI+XG4gICAgICAgICAgICAgICAgICA8ZW0gc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjpbW2l0ZW0uYmdDb2xvcl1dXCI+PC9lbT5cbiAgICAgICAgICAgICAgICAgIFtbaXRlbS5sYWJlbF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgaWQ9XCJjaGFydFRhcmdldFwiIHN0eWxlPVwiaGVpZ2h0OjQwcHg7IHdpZHRoOjEwMCVcIj5cbiAgICAgICAgPGNhbnZhcyBpZD1cImNoYXJ0Q2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcyQ9XCJjaGFydFRvb2x0aXAgW1t0b29sdGlwLnlBbGlnbl1dXCJcbiAgICAgICAgICBzdHlsZSQ9XCJvcGFjaXR5OltbdG9vbHRpcC5vcGFjaXR5XV07IHRvcDpbW3Rvb2x0aXAudG9wXV07IGxlZnQ6W1t0b29sdGlwLmxlZnRdXTsgcGFkZGluZzpbW3Rvb2x0aXAueVBhZGRpbmddXXB4IFtbdG9vbHRpcC54UGFkZGluZ11dcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+W1t0b29sdGlwLnRpdGxlXV08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3Rvb2x0aXAubGluZXNdXVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtXG4gICAgICAgICAgICAgICAgICA+W1tpdGVtLnRleHRdXVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBnZXQgY2hhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgbWV0YXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiAoKSA9PiBbXSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6ICgpID0+ICh7XG4gICAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICB4UGFkZGluZzogXCI1XCIsXG4gICAgICAgICAgeVBhZGRpbmc6IFwiM1wiLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICB1bml0OiBPYmplY3QsXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIm9uUHJvcHNDaGFuZ2UoZGF0YSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICB0aGlzLl9kZWJvdW5jZXIsXG4gICAgICAgIHRpbWVPdXQuYWZ0ZXIoMTApLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy4kLmNoYXJ0VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGlmIChzY3JpcHRzTG9hZGVkID09PSBudWxsKSB7XG4gICAgICBzY3JpcHRzTG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9hZF9jaGFydFwiICovIFwiLi4vLi4vcmVzb3VyY2VzL2hhLWNoYXJ0LXNjcmlwdHMuanNcIik7XG4gICAgfVxuICAgIHNjcmlwdHNMb2FkZWQudGhlbigoQ2hhcnRNb2R1bGUpID0+IHtcbiAgICAgIHRoaXMuQ2hhcnRDbGFzcyA9IENoYXJ0TW9kdWxlLmRlZmF1bHQ7XG4gICAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcblxuICAgIGlmICh0aGlzLl9yZXNpemVUaW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvcHNDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkIHx8ICF0aGlzLkNoYXJ0Q2xhc3MgfHwgIXRoaXMuZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgX2N1c3RvbVRvb2x0aXBzKHRvb2x0aXApIHtcbiAgICAvLyBIaWRlIGlmIG5vIHRvb2x0aXBcbiAgICBpZiAodG9vbHRpcC5vcGFjaXR5ID09PSAwKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwib3BhY2l0eVwiXSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBjYXJldCBQb3NpdGlvblxuICAgIGlmICh0b29sdGlwLnlBbGlnbikge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInlBbGlnblwiXSwgdG9vbHRpcC55QWxpZ24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCBcIm5vLXRyYW5zZm9ybVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IHRvb2x0aXAudGl0bGUgPyB0b29sdGlwLnRpdGxlWzBdIHx8IFwiXCIgOiBcIlwiO1xuICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ0aXRsZVwiXSwgdGl0bGUpO1xuXG4gICAgY29uc3QgYm9keUxpbmVzID0gdG9vbHRpcC5ib2R5Lm1hcCgobikgPT4gbi5saW5lcyk7XG5cbiAgICAvLyBTZXQgVGV4dFxuICAgIGlmICh0b29sdGlwLmJvZHkpIHtcbiAgICAgIHRoaXMuc2V0KFxuICAgICAgICBbXCJ0b29sdGlwXCIsIFwibGluZXNcIl0sXG4gICAgICAgIGJvZHlMaW5lcy5tYXAoKGJvZHksIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xvcnMgPSB0b29sdGlwLmxhYmVsQ29sb3JzW2ldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JzLmJvcmRlckNvbG9yLFxuICAgICAgICAgICAgYmdDb2xvcjogY29sb3JzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIHRleHQ6IGJvZHkuam9pbihcIlxcblwiKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50V2lkdGggPSB0aGlzLiQuY2hhcnRUYXJnZXQuY2xpZW50V2lkdGg7XG4gICAgbGV0IHBvc2l0aW9uWCA9IHRvb2x0aXAuY2FyZXRYO1xuICAgIGNvbnN0IHBvc2l0aW9uWSA9IHRoaXMuX2NoYXJ0LmNhbnZhcy5vZmZzZXRUb3AgKyB0b29sdGlwLmNhcmV0WTtcbiAgICBpZiAodG9vbHRpcC5jYXJldFggKyAxMDAgPiBwYXJlbnRXaWR0aCkge1xuICAgICAgcG9zaXRpb25YID0gcGFyZW50V2lkdGggLSAxMDA7XG4gICAgfSBlbHNlIGlmICh0b29sdGlwLmNhcmV0WCA8IDEwMCkge1xuICAgICAgcG9zaXRpb25YID0gMTAwO1xuICAgIH1cbiAgICBwb3NpdGlvblggKz0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldExlZnQ7XG4gICAgLy8gRGlzcGxheSwgcG9zaXRpb24sIGFuZCBzZXQgc3R5bGVzIGZvciBmb250XG4gICAgdGhpcy50b29sdGlwID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50b29sdGlwLCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgbGVmdDogYCR7cG9zaXRpb25YfXB4YCxcbiAgICAgIHRvcDogYCR7cG9zaXRpb25ZfXB4YCxcbiAgICB9KTtcbiAgfVxuXG4gIF9sZWdlbmRDbGljayhldmVudCkge1xuICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0Lm5vZGVOYW1lICE9PSBcIkxJXCIpIHtcbiAgICAgIC8vIHVzZXIgY2xpY2tlZCBjaGlsZCwgZmluZCBwYXJlbnQgTElcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGV2ZW50Lm1vZGVsLml0ZW1zSW5kZXg7XG5cbiAgICBjb25zdCBtZXRhID0gdGhpcy5fY2hhcnQuZ2V0RGF0YXNldE1ldGEoaW5kZXgpO1xuICAgIG1ldGEuaGlkZGVuID1cbiAgICAgIG1ldGEuaGlkZGVuID09PSBudWxsID8gIXRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHNbaW5kZXhdLmhpZGRlbiA6IG51bGw7XG4gICAgdGhpcy5zZXQoXG4gICAgICBbXCJtZXRhc1wiLCBpbmRleCwgXCJoaWRkZW5cIl0sXG4gICAgICB0aGlzLl9jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGluZGV4KSA/IG51bGwgOiBcImhpZGRlblwiXG4gICAgKTtcbiAgICB0aGlzLl9jaGFydC51cGRhdGUoKTtcbiAgfVxuXG4gIF9kcmF3TGVnZW5kKCkge1xuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5fY2hhcnQ7XG4gICAgLy8gTmV3IGRhdGEgZm9yIG9sZCBncmFwaC4gS2VlcCBtZXRhZGF0YS5cbiAgICBjb25zdCBwcmVzZXJ2ZVZpc2liaWxpdHkgPVxuICAgICAgdGhpcy5fb2xkSWRlbnRpZmllciAmJiB0aGlzLmlkZW50aWZpZXIgPT09IHRoaXMuX29sZElkZW50aWZpZXI7XG4gICAgdGhpcy5fb2xkSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcjtcbiAgICB0aGlzLnNldChcbiAgICAgIFwibWV0YXNcIixcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEuZGF0YXNldHMubWFwKCh4LCBpKSA9PiAoe1xuICAgICAgICBsYWJlbDogeC5sYWJlbCxcbiAgICAgICAgY29sb3I6IHguY29sb3IsXG4gICAgICAgIGJnQ29sb3I6IHguYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBoaWRkZW46XG4gICAgICAgICAgcHJlc2VydmVWaXNpYmlsaXR5ICYmIGkgPCB0aGlzLm1ldGFzLmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLm1ldGFzW2ldLmhpZGRlblxuICAgICAgICAgICAgOiAhY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSxcbiAgICAgIH0pKVxuICAgICk7XG4gICAgbGV0IHVwZGF0ZU5lZWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcmVzZXJ2ZVZpc2liaWxpdHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tZXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZXRhID0gY2hhcnQuZ2V0RGF0YXNldE1ldGEoaSk7XG4gICAgICAgIGlmICghIW1ldGEuaGlkZGVuICE9PSAhIXRoaXMubWV0YXNbaV0uaGlkZGVuKSB1cGRhdGVOZWVkZWQgPSB0cnVlO1xuICAgICAgICBtZXRhLmhpZGRlbiA9IHRoaXMubWV0YXNbaV0uaGlkZGVuID8gdHJ1ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1cGRhdGVOZWVkZWQpIHtcbiAgICAgIGNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnVuaXQgPSB0aGlzLmRhdGEudW5pdDtcbiAgfVxuXG4gIF9mb3JtYXRUaWNrVmFsdWUodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWVzW2luZGV4XS52YWx1ZSk7XG4gICAgcmV0dXJuIGZvcm1hdFRpbWUoZGF0ZSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5kYXRhO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuJC5jaGFydENhbnZhcztcblxuICAgIGlmICgoIWRhdGEuZGF0YXNldHMgfHwgIWRhdGEuZGF0YXNldHMubGVuZ3RoKSAmJiAhdGhpcy5fY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS50eXBlICE9PSBcInRpbWVsaW5lXCIgJiYgZGF0YS5kYXRhc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JMaXN0KGNudCk7XG4gICAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY250OyBsb29wSSsrKSB7XG4gICAgICAgIGRhdGEuZGF0YXNldHNbbG9vcEldLmJvcmRlckNvbG9yID0gY29sb3JzW2xvb3BJXS5yZ2JTdHJpbmcoKTtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2xvb3BJXVxuICAgICAgICAgIC5hbHBoYSgwLjYpXG4gICAgICAgICAgLnJnYmFTdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIHRoaXMuX2NoYXJ0LmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5fY2hhcnQudXBkYXRlKHsgZHVyYXRpb246IDAgfSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lKSB7XG4gICAgICAgIHRoaXMuX2NoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZGF0YS5sZW5ndGggPiAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkYXRhLmRhdGFzZXRzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1c3RvbVRvb2x0aXBzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAgIGNvbnN0IHBsdWdpbnMgPSBbeyBhZnRlclJlbmRlcjogKCkgPT4gdGhpcy5fc2V0UmVuZGVyZWQodHJ1ZSkgfV07XG4gICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgY3VzdG9tOiB0aGlzLl9jdXN0b21Ub29sdGlwcy5iaW5kKHRoaXMpLFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHNwYW5HYXBzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGZvbnQ6IFwiMTJweCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uob3B0aW9ucywgdGhpcy5kYXRhLm9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MuY2FsbGJhY2sgPSB0aGlzLl9mb3JtYXRUaWNrVmFsdWU7XG4gICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09IFwidGltZWxpbmVcIikge1xuICAgICAgICB0aGlzLnNldChcImlzVGltZWxpbmVcIiwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9jb2xvckZ1bmMgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbG9yR2VuZXJhdG9yKFxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9ycy5zdGF0aWNDb2xvcnMsXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ySW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb2xvckZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudHMuY29sb3JGdW5jdGlvbiA9IHRoaXMuX2NvbG9yRnVuYztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLmNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTYwcHhcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLnR5cGUsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kYXRhLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgfTtcbiAgICAgIC8vIEFzeW5jIHJlc2l6ZSBhZnRlciBkb20gdXBkYXRlXG4gICAgICB0aGlzLl9jaGFydCA9IG5ldyB0aGlzLkNoYXJ0Q2xhc3MoY3R4LCBjaGFydERhdGEpO1xuICAgICAgaWYgKHRoaXMuaXNUaW1lbGluZSAhPT0gdHJ1ZSAmJiB0aGlzLmRhdGEubGVnZW5kID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2RyYXdMZWdlbmQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemVDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2NoYXJ0KSByZXR1cm47XG4gICAgLy8gQ2hhcnQgbm90IHJlYWR5XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5yZXNpemVDaGFydC5iaW5kKHRoaXMpLCAxMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9yZXNpemVDaGFydCgpO1xuICB9XG5cbiAgX3Jlc2l6ZUNoYXJ0KCkge1xuICAgIGNvbnN0IGNoYXJ0VGFyZ2V0ID0gdGhpcy4kLmNoYXJ0VGFyZ2V0O1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgaWYgKGRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlY2FsY3VsYXRlIGNoYXJ0IGhlaWdodCBmb3IgVGltZWxpbmUgY2hhcnRcbiAgICBjb25zdCBhcmVhVG9wID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLnRvcDtcbiAgICBjb25zdCBhcmVhQm90ID0gdGhpcy5fY2hhcnQuY2hhcnRBcmVhLmJvdHRvbTtcbiAgICBjb25zdCBoZWlnaHQxID0gdGhpcy5fY2hhcnQuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBpZiAoYXJlYUJvdCA+IDApIHtcbiAgICAgIHRoaXMuX2F4aXNIZWlnaHQgPSBoZWlnaHQxIC0gYXJlYUJvdCArIGFyZWFUb3A7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXhpc0hlaWdodCkge1xuICAgICAgY29uc3QgY250ID0gZGF0YS5kYXRhc2V0cy5sZW5ndGg7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSAzMCAqIGNudCArIHRoaXMuX2F4aXNIZWlnaHQgKyBcInB4XCI7XG4gICAgICBpZiAoY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ICE9PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IEhTTCBkaXN0cmlidXRlZCBjb2xvciBsaXN0XG4gIHN0YXRpYyBnZXRDb2xvckxpc3QoY291bnQpIHtcbiAgICBsZXQgcHJvY2Vzc0wgPSBmYWxzZTtcbiAgICBpZiAoY291bnQgPiAxMCkge1xuICAgICAgcHJvY2Vzc0wgPSB0cnVlO1xuICAgICAgY291bnQgPSBNYXRoLmNlaWwoY291bnQgLyAyKTtcbiAgICB9XG4gICAgY29uc3QgaDEgPSAzNjAgLyBjb3VudDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBsb29wSSA9IDA7IGxvb3BJIDwgY291bnQ7IGxvb3BJKyspIHtcbiAgICAgIHJlc3VsdFtsb29wSV0gPSBDb2xvcigpLmhzbChoMSAqIGxvb3BJLCA4MCwgMzgpO1xuICAgICAgaWYgKHByb2Nlc3NMKSB7XG4gICAgICAgIHJlc3VsdFtsb29wSSArIGNvdW50XSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCA2Mik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29sb3JHZW5lcmF0b3Ioc3RhdGljQ29sb3JzLCBzdGFydEluZGV4KSB7XG4gICAgLy8gS25vd24gY29sb3JzIGZvciBzdGF0aWMgZGF0YSxcbiAgICAvLyBzaG91bGQgYWRkIGZvciB2ZXJ5IGNvbW1vbiBzdGF0ZSBzdHJpbmcgbWFudWFsbHkuXG4gICAgLy8gUGFsZXR0ZSBtb2RpZmllZCBmcm9tIGh0dHA6Ly9nb29nbGUuZ2l0aHViLmlvL3BhbGV0dGUuanMvIG1wbjY1LCBBcGFjaGUgMi4wXG4gICAgY29uc3QgcGFsZXR0ZSA9IFtcbiAgICAgIFwiZmYwMDI5XCIsXG4gICAgICBcIjY2YTYxZVwiLFxuICAgICAgXCIzNzdlYjhcIixcbiAgICAgIFwiOTg0ZWEzXCIsXG4gICAgICBcIjAwZDJkNVwiLFxuICAgICAgXCJmZjdmMDBcIixcbiAgICAgIFwiYWY4ZDAwXCIsXG4gICAgICBcIjdmODBjZFwiLFxuICAgICAgXCJiM2U5MDBcIixcbiAgICAgIFwiYzQyZTYwXCIsXG4gICAgICBcImE2NTYyOFwiLFxuICAgICAgXCJmNzgxYmZcIixcbiAgICAgIFwiOGRkM2M3XCIsXG4gICAgICBcImJlYmFkYVwiLFxuICAgICAgXCJmYjgwNzJcIixcbiAgICAgIFwiODBiMWQzXCIsXG4gICAgICBcImZkYjQ2MlwiLFxuICAgICAgXCJmY2NkZTVcIixcbiAgICAgIFwiYmM4MGJkXCIsXG4gICAgICBcImZmZWQ2ZlwiLFxuICAgICAgXCJjNGVhZmZcIixcbiAgICAgIFwiY2Y4YzAwXCIsXG4gICAgICBcIjFiOWU3N1wiLFxuICAgICAgXCJkOTVmMDJcIixcbiAgICAgIFwiZTcyOThhXCIsXG4gICAgICBcImU2YWIwMlwiLFxuICAgICAgXCJhNjc2MWRcIixcbiAgICAgIFwiMDA5N2ZmXCIsXG4gICAgICBcIjAwZDA2N1wiLFxuICAgICAgXCJmNDM2MDBcIixcbiAgICAgIFwiNGJhOTNiXCIsXG4gICAgICBcIjU3NzliYlwiLFxuICAgICAgXCI5MjdhY2NcIixcbiAgICAgIFwiOTdlZTNmXCIsXG4gICAgICBcImJmMzk0N1wiLFxuICAgICAgXCI5ZjViMDBcIixcbiAgICAgIFwiZjQ4NzU4XCIsXG4gICAgICBcIjhjYWVkNlwiLFxuICAgICAgXCJmMmI5NGZcIixcbiAgICAgIFwiZWZmMjZlXCIsXG4gICAgICBcImU0Mzg3MlwiLFxuICAgICAgXCJkOWIxMDBcIixcbiAgICAgIFwiOWQ3YTAwXCIsXG4gICAgICBcIjY5OGNmZlwiLFxuICAgICAgXCJkOWQ5ZDlcIixcbiAgICAgIFwiMDBkMjdlXCIsXG4gICAgICBcImQwNjgwMFwiLFxuICAgICAgXCIwMDlmODJcIixcbiAgICAgIFwiYzQ5MjAwXCIsXG4gICAgICBcImNiZThmZlwiLFxuICAgICAgXCJmZWNkZGZcIixcbiAgICAgIFwiYzI3ZWI2XCIsXG4gICAgICBcIjhjZDJjZVwiLFxuICAgICAgXCJjNGI4ZDlcIixcbiAgICAgIFwiZjg4M2IwXCIsXG4gICAgICBcImE0OTEwMFwiLFxuICAgICAgXCJmNDg4MDBcIixcbiAgICAgIFwiMjdkMGRmXCIsXG4gICAgICBcImEwNGE5YlwiLFxuICAgIF07XG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JJbmRleChpZHgpIHtcbiAgICAgIC8vIFJldXNlIHRoZSBjb2xvciBpZiBpbmRleCB0b28gbGFyZ2UuXG4gICAgICByZXR1cm4gQ29sb3IoXCIjXCIgKyBwYWxldHRlW2lkeCAlIHBhbGV0dGUubGVuZ3RoXSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbG9yRGljdCA9IHt9O1xuICAgIGxldCBjb2xvckluZGV4ID0gMDtcbiAgICBpZiAoc3RhcnRJbmRleCA+IDApIGNvbG9ySW5kZXggPSBzdGFydEluZGV4O1xuICAgIGlmIChzdGF0aWNDb2xvcnMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRpY0NvbG9ycykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjMSA9IHN0YXRpY0NvbG9yc1tjXTtcbiAgICAgICAgaWYgKGlzRmluaXRlKGMxKSkge1xuICAgICAgICAgIGNvbG9yRGljdFtjLnRvTG93ZXJDYXNlKCldID0gZ2V0Q29sb3JJbmRleChjMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBDb2xvcihzdGF0aWNDb2xvcnNbY10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGNvbG9yIGFzc2lnblxuICAgIGZ1bmN0aW9uIGdldENvbG9yKF9fLCBkYXRhKSB7XG4gICAgICBsZXQgcmV0O1xuICAgICAgY29uc3QgbmFtZSA9IGRhdGFbM107XG4gICAgICBpZiAobmFtZSA9PT0gbnVsbCkgcmV0dXJuIENvbG9yKCkuaHNsKDAsIDQwLCAzOCk7XG4gICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gQ29sb3IoKS5oc2woMTIwLCA0MCwgMzgpO1xuICAgICAgY29uc3QgbmFtZTEgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gY29sb3JEaWN0W25hbWUxXTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBnZXRDb2xvckluZGV4KGNvbG9ySW5kZXgpO1xuICAgICAgICBjb2xvckluZGV4Kys7XG4gICAgICAgIGNvbG9yRGljdFtuYW1lMV0gPSByZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q29sb3I7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNoYXJ0LWJhc2VcIiwgSGFDaGFydEJhc2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vZW50aXR5L2hhLWNoYXJ0LWJhc2VcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydExpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jaGFydC1iYXNlXG4gICAgICAgIGlkPVwiY2hhcnRcIlxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIGlkZW50aWZpZXI9XCJbW2lkZW50aWZpZXJdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgID48L2hhLWNoYXJ0LWJhc2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnREYXRhOiBPYmplY3QsXG4gICAgICBkYXRhOiBPYmplY3QsXG4gICAgICBuYW1lczogT2JqZWN0LFxuICAgICAgdW5pdDogU3RyaW5nLFxuICAgICAgaWRlbnRpZmllcjogU3RyaW5nLFxuXG4gICAgICBpc1NpbmdsZURldmljZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbmRUaW1lOiBPYmplY3QsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vblJlbmRlcmVkQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGlzU2luZ2xlRGV2aWNlKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfb25SZW5kZXJlZENoYW5nZWQocmVuZGVyZWQpIHtcbiAgICBpZiAocmVuZGVyZWQpIHRoaXMuYW5pbWF0ZUhlaWdodCgpO1xuICB9XG5cbiAgYW5pbWF0ZUhlaWdodCgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy4kLmNoYXJ0LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy51bml0O1xuICAgIGNvbnN0IGRldmljZVN0YXRlcyA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIGxldCBlbmRUaW1lO1xuXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRldmljZVN0YXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYWZlUGFyc2VGbG9hdCh2YWx1ZSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gaXNGaW5pdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG4gICAgfVxuXG4gICAgZW5kVGltZSA9XG4gICAgICB0aGlzLmVuZFRpbWUgfHxcbiAgICAgIC8vIEdldCB0aGUgaGlnaGVzdCBkYXRlIGZyb20gdGhlIGxhc3QgZGF0ZSBvZiBlYWNoIGRldmljZVxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIE1hdGgubWF4LmFwcGx5KFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgZGV2aWNlU3RhdGVzLm1hcChcbiAgICAgICAgICAgIChkZXZTdHMpID0+XG4gICAgICAgICAgICAgIG5ldyBEYXRlKGRldlN0cy5zdGF0ZXNbZGV2U3RzLnN0YXRlcy5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIGlmIChlbmRUaW1lID4gbmV3IERhdGUoKSkge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLm5hbWVzIHx8IHt9O1xuICAgIGRldmljZVN0YXRlcy5mb3JFYWNoKChzdGF0ZXMpID0+IHtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IHN0YXRlcy5kb21haW47XG4gICAgICBjb25zdCBuYW1lID0gbmFtZXNbc3RhdGVzLmVudGl0eV9pZF0gfHwgc3RhdGVzLm5hbWU7XG4gICAgICAvLyBhcnJheSBjb250YWluaW5nIFt2YWx1ZTEsIHZhbHVlMiwgZXRjXVxuICAgICAgbGV0IHByZXZWYWx1ZXM7XG4gICAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICAgIGZ1bmN0aW9uIHB1c2hEYXRhKHRpbWVzdGFtcCwgZGF0YXZhbHVlcykge1xuICAgICAgICBpZiAoIWRhdGF2YWx1ZXMpIHJldHVybjtcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICAvLyBEcm9wIGRhdGFwb2ludHMgdGhhdCBhcmUgYWZ0ZXIgdGhlIHJlcXVlc3RlZCBlbmRUaW1lLiBUaGlzIGNvdWxkIGhhcHBlbiBpZlxuICAgICAgICAgIC8vIGVuZFRpbWUgaXMgXCJub3dcIiBhbmQgY2xpZW50IHRpbWUgaXMgbm90IGluIHN5bmMgd2l0aCBzZXJ2ZXIgdGltZS5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgZC5kYXRhLnB1c2goeyB4OiB0aW1lc3RhbXAsIHk6IGRhdGF2YWx1ZXNbaV0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2VmFsdWVzID0gZGF0YXZhbHVlcztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkQ29sdW1uKG5hbWVZLCBzdGVwLCBmaWxsKSB7XG4gICAgICAgIGxldCBkYXRhRmlsbCA9IGZhbHNlO1xuICAgICAgICBsZXQgZGF0YVN0ZXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICBkYXRhRmlsbCA9IFwib3JpZ2luXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICBkYXRhU3RlcCA9IFwiYmVmb3JlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogbmFtZVksXG4gICAgICAgICAgZmlsbDogZGF0YUZpbGwsXG4gICAgICAgICAgc3RlcHBlZExpbmU6IGRhdGFTdGVwLFxuICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgIHVuaXRUZXh0OiB1bml0LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBkb21haW4gPT09IFwidGhlcm1vc3RhdFwiIHx8XG4gICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcIndhdGVyX2hlYXRlclwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaXNIZWF0aW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJoZWF0aW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJoZWF0XCI7XG4gICAgICAgIGNvbnN0IGlzQ29vbGluZyA9XG4gICAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIlxuICAgICAgICAgICAgPyAoc3RhdGUpID0+IHN0YXRlLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb24gPT09IFwiY29vbGluZ1wiXG4gICAgICAgICAgICA6IChzdGF0ZSkgPT4gc3RhdGUuc3RhdGUgPT09IFwiY29vbFwiO1xuXG4gICAgICAgIC8vIFdlIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVybW9zdGF0cyB0aGF0IGhhdmUgYSB0YXJnZXQgdGVtcGVyYXR1cmVcbiAgICAgICAgLy8gcmFuZ2UgdmVyc3VzIG9uZXMgdGhhdCBoYXZlIGp1c3QgYSB0YXJnZXQgdGVtcGVyYXR1cmVcblxuICAgICAgICAvLyBVc2luZyBzdGVwIGNoYXJ0IGJ5IHN0ZXAtYmVmb3JlIHNvIG1hbnVhbGx5IGludGVycG9sYXRpb24gbm90IG5lZWRlZC5cbiAgICAgICAgY29uc3QgaGFzVGFyZ2V0UmFuZ2UgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoXG4gICAgICAgICAgKHN0YXRlKSA9PlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9PVxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBoYXNIZWF0ID0gc3RhdGVzLnN0YXRlcy5zb21lKGlzSGVhdGluZyk7XG4gICAgICAgIGNvbnN0IGhhc0Nvb2wgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNDb29saW5nKTtcblxuICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIGN1cnJlbnQgdGVtcGVyYXR1cmVcIiwgdHJ1ZSk7XG4gICAgICAgIGlmIChoYXNIZWF0KSB7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiBoZWF0aW5nXCIsIHRydWUsIHRydWUpO1xuICAgICAgICAgIC8vIFRoZSBcImhlYXRpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzQ29vbCkge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgY29vbGluZ1wiLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAvLyBUaGUgXCJjb29saW5nXCIgc2VyaWVzIHVzZXMgc3RlcHBlZEFyZWEgdG8gc2hhZGUgdGhlIGFyZWEgYmVsb3cgdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyB0ZW1wZXJhdHVyZSB3aGVuIHRoZSB0aGVybW9zdGF0IGlzIGNhbGxpbmcgZm9yIGhlYXQuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIHRhcmdldCB0ZW1wZXJhdHVyZSBoaWdoXCIsIHRydWUpO1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlIGxvd1wiLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIHRhcmdldCB0ZW1wZXJhdHVyZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBjdXJUZW1wID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlKTtcbiAgICAgICAgICBjb25zdCBzZXJpZXMgPSBbY3VyVGVtcF07XG4gICAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzSGVhdGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgICBzZXJpZXMucHVzaChpc0Nvb2xpbmcoc3RhdGUpID8gY3VyVGVtcCA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEhpZ2ggPSBzYWZlUGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0TG93ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0SGlnaCwgdGFyZ2V0TG93KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9ubHkgZGlzYWJsZSBpbnRlcnBvbGF0aW9uIGZvciBzZW5zb3JzXG4gICAgICAgIGNvbnN0IGlzU3RlcCA9IGRvbWFpbiA9PT0gXCJzZW5zb3JcIjtcbiAgICAgICAgYWRkQ29sdW1uKG5hbWUsIGlzU3RlcCk7XG5cbiAgICAgICAgbGV0IGxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0RGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0TnVsbERhdGUgPSBudWxsO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgY2hhcnQgZGF0YS5cbiAgICAgICAgLy8gV2hlbiBzdGF0ZSBpcyBgdW5rbm93bmAsIGNhbGN1bGF0ZSB0aGUgdmFsdWUgYW5kIGJyZWFrIHRoZSBsaW5lLlxuICAgICAgICBzdGF0ZXMuc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5zdGF0ZSk7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIGxhc3ROdWxsRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROdWxsRGF0ZVRpbWUgPSBsYXN0TnVsbERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdERhdGVUaW1lID0gbGFzdERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdG1wVmFsdWUgPVxuICAgICAgICAgICAgICAodmFsdWUgLSBsYXN0VmFsdWUpICpcbiAgICAgICAgICAgICAgICAoKGxhc3ROdWxsRGF0ZVRpbWUgLSBsYXN0RGF0ZVRpbWUpIC9cbiAgICAgICAgICAgICAgICAgIChkYXRlVGltZSAtIGxhc3REYXRlVGltZSkpICtcbiAgICAgICAgICAgICAgbGFzdFZhbHVlO1xuICAgICAgICAgICAgcHVzaERhdGEobGFzdE51bGxEYXRlLCBbdG1wVmFsdWVdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKGxhc3ROdWxsRGF0ZVRpbWUgKyAxKSwgW251bGxdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwdXNoRGF0YShkYXRlLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIGxhc3REYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB2YWx1ZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgbGFzdE51bGxEYXRlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0VmFsdWUgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGFuIGVudHJ5IGZvciBmaW5hbCB2YWx1ZXNcbiAgICAgIHB1c2hEYXRhKGVuZFRpbWUsIHByZXZWYWx1ZXMsIGZhbHNlKTtcblxuICAgICAgLy8gQ29uY2F0IHR3byBhcnJheXNcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGRhdGFzZXRzLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBUaXRsZSA9IChpdGVtcywgZGF0YSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGEuZGF0YXNldHNbaXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbaXRlbS5pbmRleF0ueDtcblxuICAgICAgcmV0dXJuIGZvcm1hdERhdGVUaW1lKGRhdGUsIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgdW5pdDogdW5pdCxcbiAgICAgIGxlZ2VuZDogIXRoaXMuaXNTaW5nbGVEZXZpY2UsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtYXRUb29sdGlwVGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlYWNoXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIHRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICBoaXRSYWRpdXM6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIGZpbGxlcjoge1xuICAgICAgICAgICAgcHJvcGFnYXRlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiLCBTdGF0ZUhpc3RvcnlDaGFydExpbmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcmVuZGVyZWRdKSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNoYXJ0LWJhc2Uge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNoYXJ0LWJhc2VcbiAgICAgICAgZGF0YT1cIltbY2hhcnREYXRhXV1cIlxuICAgICAgICByZW5kZXJlZD1cInt7cmVuZGVyZWR9fVwiXG4gICAgICAgIHJ0bD1cInt7cnRsfX1cIlxuICAgICAgPjwvaGEtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICBub1NpbmdsZTogQm9vbGVhbixcbiAgICAgIGVuZFRpbWU6IERhdGUsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGxvY2FsaXplLCBsYW5ndWFnZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHN0YXRpY0NvbG9ycyA9IHtcbiAgICAgIG9uOiAxLFxuICAgICAgb2ZmOiAwLFxuICAgICAgdW5hdmFpbGFibGU6IFwiI2EwYTBhMFwiLFxuICAgICAgdW5rbm93bjogXCIjNjA2MDYwXCIsXG4gICAgICBpZGxlOiAyLFxuICAgIH07XG4gICAgbGV0IHN0YXRlSGlzdG9yeSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgICBzdGF0ZUhpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgIChtaW5UaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgTWF0aC5taW4obWluVGltZSwgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbMF0ubGFzdF9jaGFuZ2VkKSksXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gZW5kIHRpbWUgaXMgTWF0aC5tYXgoc3RhcnRUaW1lLCBsYXN0X2V2ZW50KVxuICAgIGxldCBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgICAgKG1heFRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICBtYXhUaW1lLFxuICAgICAgICAgICAgICBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVtzdGF0ZUluZm8uZGF0YS5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHN0YXJ0VGltZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIC8vIHN0YXRlSGlzdG9yeSBpcyBhIGxpc3Qgb2YgbGlzdHMgb2Ygc29ydGVkIHN0YXRlIG9iamVjdHNcbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgICAgbGV0IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgbGV0IHByZXZTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgbG9jU3RhdGUgPSBudWxsO1xuICAgICAgbGV0IHByZXZMYXN0Q2hhbmdlZCA9IHN0YXJ0VGltZTtcbiAgICAgIGNvbnN0IGVudGl0eURpc3BsYXkgPSBuYW1lc1tzdGF0ZUluZm8uZW50aXR5X2lkXSB8fCBzdGF0ZUluZm8ubmFtZTtcblxuICAgICAgY29uc3QgZGF0YVJvdyA9IFtdO1xuICAgICAgc3RhdGVJbmZvLmRhdGEuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1N0YXRlID09PSBcIlwiKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lU3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzICdub3cnIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsICYmIG5ld1N0YXRlICE9PSBwcmV2U3RhdGUpIHtcbiAgICAgICAgICBuZXdMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG5cbiAgICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgbmV3TGFzdENoYW5nZWQsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcblxuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3TGFzdENoYW5nZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgZW5kVGltZSwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuICAgICAgfVxuICAgICAgZGF0YXNldHMucHVzaCh7IGRhdGE6IGRhdGFSb3cgfSk7XG4gICAgICBsYWJlbHMucHVzaChlbnRpdHlEaXNwbGF5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBMYWJlbCA9IChpdGVtLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1swXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IGVuZCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1sxXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdmFsdWVzWzJdO1xuXG4gICAgICByZXR1cm4gW3N0YXRlLCBzdGFydCwgZW5kXTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJ0aW1lbGluZVwiLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6IGZvcm1hdFRvb2x0aXBMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWZ0ZXJTZXREaW1lbnNpb25zOiAoeWF4ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHlheGUubWF4V2lkdGggPSB5YXhlLmNoYXJ0LndpZHRoICogMC4xODtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuX2NvbXB1dGVSVEwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIHN0YXRpY0NvbG9yczogc3RhdGljQ29sb3JzLFxuICAgICAgICBzdGF0aWNDb2xvckluZGV4OiAzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnRPcHRpb25zO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwic3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVwiLFxuICBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyogaGVpZ2h0IG9mIHNpbmdsZSB0aW1lbGluZSBjaGFydCA9IDU4cHggKi9cbiAgICAgICAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmdEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLmxvYWRpbmdfaGlzdG9yeScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLm5vX2hpc3RvcnlfZm91bmQnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aF1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBkYXRhPVwiW1toaXN0b3J5RGF0YS50aW1lbGluZV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuby1zaW5nbGU9XCJbW25vU2luZ2xlXV1cIlxuICAgICAgICAgIG5hbWVzPVwiW1tuYW1lc11dXCJcbiAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbaGlzdG9yeURhdGEubGluZV1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHVuaXQ9XCJbW2l0ZW0udW5pdF1dXCJcbiAgICAgICAgICBkYXRhPVwiW1tpdGVtLmRhdGFdXVwiXG4gICAgICAgICAgaWRlbnRpZmllcj1cIltbaXRlbS5pZGVudGlmaWVyXV1cIlxuICAgICAgICAgIGlzLXNpbmdsZS1kZXZpY2U9XCJbW19jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoaXRlbS5kYXRhLCBub1NpbmdsZSldXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbmFtZXM9XCJbW25hbWVzXV1cIlxuICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGhpc3RvcnlEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgbmFtZXM6IE9iamVjdCxcblxuICAgICAgaXNMb2FkaW5nRGF0YTogQm9vbGVhbixcblxuICAgICAgZW5kVGltZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB1cFRvTm93OiBCb29sZWFuLFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoZGF0YSwgbm9TaW5nbGUpIHtcbiAgICByZXR1cm4gIW5vU2luZ2xlICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBfY29tcHV0ZUlzRW1wdHkoaXNMb2FkaW5nRGF0YSwgaGlzdG9yeURhdGEpIHtcbiAgICBjb25zdCBoaXN0b3J5RGF0YUVtcHR5ID1cbiAgICAgICFoaXN0b3J5RGF0YSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLnRpbWVsaW5lIHx8XG4gICAgICAhaGlzdG9yeURhdGEubGluZSB8fFxuICAgICAgKGhpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aCA9PT0gMCAmJiBoaXN0b3J5RGF0YS5saW5lLmxlbmd0aCA9PT0gMCk7XG4gICAgcmV0dXJuICFpc0xvYWRpbmdEYXRhICYmIGhpc3RvcnlEYXRhRW1wdHk7XG4gIH1cblxuICBfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gaXNMb2FkaW5nICYmICF0aGlzLmhpc3RvcnlEYXRhO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3cpIHtcbiAgICAvLyBXZSBkb24ndCByZWFsbHkgY2FyZSBhYm91dCB0aGUgdmFsdWUgb2YgaGlzdG9yeURhdGEsIGJ1dCBpZiBpdCBjaGFuZ2Ugd2Ugd2FudCB0byB1cGRhdGVcbiAgICAvLyBlbmRUaW1lLlxuICAgIHJldHVybiB1cFRvTm93ID8gbmV3IERhdGUoKSA6IGVuZFRpbWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnRzXCIsIFN0YXRlSGlzdG9yeUNoYXJ0cyk7XG4iLCJpbXBvcnQge1xuICBjb21wdXRlSGlzdG9yeSxcbiAgZmV0Y2hSZWNlbnQsXG4gIEhpc3RvcnlSZXN1bHQsXG4gIFRpbWVsaW5lRW50aXR5LFxuICBMaW5lQ2hhcnRVbml0LFxufSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuaW50ZXJmYWNlIENhY2hlQ29uZmlnIHtcbiAgcmVmcmVzaDogbnVtYmVyO1xuICBjYWNoZUtleTogc3RyaW5nO1xuICBob3Vyc1RvU2hvdzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FjaGVkUmVzdWx0cyB7XG4gIHByb206IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG4gIHN0YXJ0VGltZTogRGF0ZTtcbiAgZW5kVGltZTogRGF0ZTtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgZGF0YTogSGlzdG9yeVJlc3VsdDtcbn1cblxuLy8gVGhpcyBpcyBhIGRpZmZlcmVudCBpbnRlcmZhY2UsIGEgZGlmZmVyZW50IGNhY2hlIDooXG5pbnRlcmZhY2UgUmVjZW50Q2FjaGVSZXN1bHRzIHtcbiAgY3JlYXRlZDogbnVtYmVyO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBQcm9taXNlPEhpc3RvcnlSZXN1bHQ+O1xufVxuXG5jb25zdCBSRUNFTlRfVEhSRVNIT0xEID0gNjAwMDA7IC8vIDEgbWludXRlXG5jb25zdCBSRUNFTlRfQ0FDSEU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBSZWNlbnRDYWNoZVJlc3VsdHMgfSA9IHt9O1xuY29uc3Qgc3RhdGVIaXN0b3J5Q2FjaGU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBDYWNoZWRSZXN1bHRzIH0gPSB7fTtcblxuLy8gQ2FjaGVkIHR5cGUgMSB1bmN0aW9uLiBXaXRob3V0IGNhY2hlIGNvbmZpZy5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gZW50aXR5SWQ7XG4gIGNvbnN0IGNhY2hlID0gUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XTtcblxuICBpZiAoXG4gICAgY2FjaGUgJiZcbiAgICBEYXRlLm5vdygpIC0gY2FjaGUuY3JlYXRlZCA8IFJFQ0VOVF9USFJFU0hPTEQgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH1cblxuICBjb25zdCBwcm9tID0gZmV0Y2hSZWNlbnQoaGFzcywgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbihcbiAgICAoc3RhdGVIaXN0b3J5KSA9PiBjb21wdXRlSGlzdG9yeShoYXNzLCBzdGF0ZUhpc3RvcnksIGxvY2FsaXplLCBsYW5ndWFnZSksXG4gICAgKGVycikgPT4ge1xuICAgICAgZGVsZXRlIFJFQ0VOVF9DQUNIRVtlbnRpdHlJZF07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICApO1xuXG4gIFJFQ0VOVF9DQUNIRVtjYWNoZUtleV0gPSB7XG4gICAgY3JlYXRlZDogRGF0ZS5ub3coKSxcbiAgICBsYW5ndWFnZSxcbiAgICBkYXRhOiBwcm9tLFxuICB9O1xuICByZXR1cm4gcHJvbTtcbn07XG5cbi8vIENhY2hlIHR5cGUgMiBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBnZXRFbXB0eUNhY2hlKFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IENhY2hlZFJlc3VsdHMge1xuICByZXR1cm4ge1xuICAgIHByb206IFByb21pc2UucmVzb2x2ZSh7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSksXG4gICAgbGFuZ3VhZ2UsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgZGF0YTogeyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGNhY2hlQ29uZmlnOiBDYWNoZUNvbmZpZyxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gY2FjaGVDb25maWcuY2FjaGVLZXk7XG4gIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShlbmRUaW1lKTtcbiAgc3RhcnRUaW1lLnNldEhvdXJzKHN0YXJ0VGltZS5nZXRIb3VycygpIC0gY2FjaGVDb25maWcuaG91cnNUb1Nob3cpO1xuICBsZXQgdG9GZXRjaFN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgbGV0IGFwcGVuZGluZ1RvQ2FjaGUgPSBmYWxzZTtcblxuICBsZXQgY2FjaGUgPSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIHRvRmV0Y2hTdGFydFRpbWUgPj0gY2FjaGUuc3RhcnRUaW1lICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA8PSBjYWNoZS5lbmRUaW1lICYmXG4gICAgY2FjaGUubGFuZ3VhZ2UgPT09IGxhbmd1YWdlXG4gICkge1xuICAgIHRvRmV0Y2hTdGFydFRpbWUgPSBjYWNoZS5lbmRUaW1lO1xuICAgIGFwcGVuZGluZ1RvQ2FjaGUgPSB0cnVlO1xuICAgIC8vIFRoaXMgcHJldHR5IG11Y2ggbmV2ZXIgaGFwcGVucyBhcyBlbmRUaW1lIGlzIHVzdWFsbHkgc2V0IHRvIG5vd1xuICAgIGlmIChlbmRUaW1lIDw9IGNhY2hlLmVuZFRpbWUpIHtcbiAgICAgIHJldHVybiBjYWNoZS5wcm9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XSA9IGdldEVtcHR5Q2FjaGUoXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWVcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY3VyQ2FjaGVQcm9tID0gY2FjaGUucHJvbTtcblxuICBjb25zdCBnZW5Qcm9tID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmZXRjaGVkSGlzdG9yeTogSGFzc0VudGl0eVtdW107XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgY3VyQ2FjaGVQcm9tLFxuICAgICAgICBmZXRjaFJlY2VudChcbiAgICAgICAgICBoYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHRvRmV0Y2hTdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBhcHBlbmRpbmdUb0NhY2hlXG4gICAgICAgICksXG4gICAgICBdKTtcbiAgICAgIGZldGNoZWRIaXN0b3J5ID0gcmVzdWx0c1sxXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlSGlzdG9yeSA9IGNvbXB1dGVIaXN0b3J5KFxuICAgICAgaGFzcyxcbiAgICAgIGZldGNoZWRIaXN0b3J5LFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gICAgaWYgKGFwcGVuZGluZ1RvQ2FjaGUpIHtcbiAgICAgIG1lcmdlTGluZShzdGF0ZUhpc3RvcnkubGluZSwgY2FjaGUuZGF0YS5saW5lKTtcbiAgICAgIG1lcmdlVGltZWxpbmUoc3RhdGVIaXN0b3J5LnRpbWVsaW5lLCBjYWNoZS5kYXRhLnRpbWVsaW5lKTtcbiAgICAgIHBydW5lU3RhcnRUaW1lKHN0YXJ0VGltZSwgY2FjaGUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLmRhdGEgPSBzdGF0ZUhpc3Rvcnk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS5kYXRhO1xuICB9O1xuXG4gIGNhY2hlLnByb20gPSBnZW5Qcm9tKCk7XG4gIGNhY2hlLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgY2FjaGUuZW5kVGltZSA9IGVuZFRpbWU7XG4gIHJldHVybiBjYWNoZS5wcm9tO1xufTtcblxuY29uc3QgbWVyZ2VMaW5lID0gKFxuICBoaXN0b3J5TGluZXM6IExpbmVDaGFydFVuaXRbXSxcbiAgY2FjaGVMaW5lczogTGluZUNoYXJ0VW5pdFtdXG4pID0+IHtcbiAgaGlzdG9yeUxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCB1bml0ID0gbGluZS51bml0O1xuICAgIGNvbnN0IG9sZExpbmUgPSBjYWNoZUxpbmVzLmZpbmQoKGNhY2hlTGluZSkgPT4gY2FjaGVMaW5lLnVuaXQgPT09IHVuaXQpO1xuICAgIGlmIChvbGRMaW5lKSB7XG4gICAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVudGl0eSA9IG9sZExpbmUuZGF0YS5maW5kKFxuICAgICAgICAgIChjYWNoZUVudGl0eSkgPT4gZW50aXR5LmVudGl0eV9pZCA9PT0gY2FjaGVFbnRpdHkuZW50aXR5X2lkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChvbGRFbnRpdHkpIHtcbiAgICAgICAgICBvbGRFbnRpdHkuc3RhdGVzID0gb2xkRW50aXR5LnN0YXRlcy5jb25jYXQoZW50aXR5LnN0YXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZS5kYXRhLnB1c2goZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlTGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWVyZ2VUaW1lbGluZSA9IChcbiAgaGlzdG9yeVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXSxcbiAgY2FjaGVUaW1lbGluZXM6IFRpbWVsaW5lRW50aXR5W11cbikgPT4ge1xuICBoaXN0b3J5VGltZWxpbmVzLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgY29uc3Qgb2xkVGltZWxpbmUgPSBjYWNoZVRpbWVsaW5lcy5maW5kKFxuICAgICAgKGNhY2hlVGltZWxpbmUpID0+IGNhY2hlVGltZWxpbmUuZW50aXR5X2lkID09PSB0aW1lbGluZS5lbnRpdHlfaWRcbiAgICApO1xuICAgIGlmIChvbGRUaW1lbGluZSkge1xuICAgICAgb2xkVGltZWxpbmUuZGF0YSA9IG9sZFRpbWVsaW5lLmRhdGEuY29uY2F0KHRpbWVsaW5lLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVRpbWVsaW5lcy5wdXNoKHRpbWVsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcHJ1bmVBcnJheSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgYXJyKSA9PiB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBjb25zdCBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPSBhcnIuZmluZEluZGV4KFxuICAgIChzdGF0ZSkgPT4gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSA+IG9yaWdpbmFsU3RhcnRUaW1lXG4gICk7XG4gIGlmIChjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IDApIHtcbiAgICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhZnRlciBvcmlnaW5hbFN0YXJ0VGltZSB0aGVuIHdlIGFyZSBkb25lLlxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhdCBvciBiZWZvcmUgb3JpZ2luYWxTdGFydFRpbWUuIFVzZSBsYXN0IGluZGV4LlxuICBjb25zdCB1cGRhdGVJbmRleCA9XG4gICAgY2hhbmdlZEFmdGVyU3RhcnRUaW1lID09PSAtMSA/IGFyci5sZW5ndGggLSAxIDogY2hhbmdlZEFmdGVyU3RhcnRUaW1lIC0gMTtcbiAgYXJyW3VwZGF0ZUluZGV4XS5sYXN0X2NoYW5nZWQgPSBvcmlnaW5hbFN0YXJ0VGltZTtcbiAgcmV0dXJuIGFyci5zbGljZSh1cGRhdGVJbmRleCk7XG59O1xuXG5jb25zdCBwcnVuZVN0YXJ0VGltZSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgY2FjaGVEYXRhOiBIaXN0b3J5UmVzdWx0KSA9PiB7XG4gIGNhY2hlRGF0YS5saW5lLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBlbnRpdHkuc3RhdGVzID0gcHJ1bmVBcnJheShvcmlnaW5hbFN0YXJ0VGltZSwgZW50aXR5LnN0YXRlcyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNhY2hlRGF0YS50aW1lbGluZS5mb3JFYWNoKCh0aW1lbGluZSkgPT4ge1xuICAgIHRpbWVsaW5lLmRhdGEgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCB0aW1lbGluZS5kYXRhKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVIaXN0b3J5LCBmZXRjaERhdGUgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRSZWNlbnQsIGdldFJlY2VudFdpdGhDYWNoZSB9IGZyb20gXCIuL2NhY2hlZC1oaXN0b3J5XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTdGF0ZUhpc3RvcnlEYXRhIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyVHlwZTogU3RyaW5nLFxuXG4gICAgICBjYWNoZUNvbmZpZzogT2JqZWN0LFxuXG4gICAgICBzdGFydFRpbWU6IERhdGUsXG4gICAgICBlbmRUaW1lOiBEYXRlLFxuXG4gICAgICBlbnRpdHlJZDogU3RyaW5nLFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJmaWx0ZXJDaGFuZ2VkRGVib3VuY2VyKGZpbHRlclR5cGUsIGVudGl0eUlkLCBzdGFydFRpbWUsIGVuZFRpbWUsIGNhY2hlQ29uZmlnLCBsb2NhbGl6ZSlcIixcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmZpbHRlckNoYW5nZWREZWJvdW5jZXIoXG4gICAgICB0aGlzLmZpbHRlclR5cGUsXG4gICAgICB0aGlzLmVudGl0eUlkLFxuICAgICAgdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aGlzLmVuZFRpbWUsXG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLFxuICAgICAgdGhpcy5sb2NhbGl6ZVxuICAgICk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGhhc3NDaGFuZ2VkKG5ld0hhc3MsIG9sZEhhc3MpIHtcbiAgICBpZiAoIW9sZEhhc3MgJiYgIXRoaXMuX21hZGVGaXJzdENhbGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgICAgdGhpcy5maWx0ZXJUeXBlLFxuICAgICAgICB0aGlzLmVudGl0eUlkLFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgICAgdGhpcy5lbmRUaW1lLFxuICAgICAgICB0aGlzLmNhY2hlQ29uZmlnLFxuICAgICAgICB0aGlzLmxvY2FsaXplXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckNoYW5nZWREZWJvdW5jZXIoLi4uYXJncykge1xuICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlRmlsdGVyQ2hhbmdlZCxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMCksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZCguLi5hcmdzKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZChcbiAgICBmaWx0ZXJUeXBlLFxuICAgIGVudGl0eUlkLFxuICAgIHN0YXJ0VGltZSxcbiAgICBlbmRUaW1lLFxuICAgIGNhY2hlQ29uZmlnLFxuICAgIGxvY2FsaXplXG4gICkge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZUNvbmZpZyAmJiAhY2FjaGVDb25maWcuY2FjaGVLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFsb2NhbGl6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYWRlRmlyc3RDYWxsID0gdHJ1ZTtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuaGFzcy5sYW5ndWFnZTtcbiAgICBsZXQgZGF0YTtcblxuICAgIGlmIChmaWx0ZXJUeXBlID09PSBcImRhdGVcIikge1xuICAgICAgaWYgKCFzdGFydFRpbWUgfHwgIWVuZFRpbWUpIHJldHVybjtcblxuICAgICAgZGF0YSA9IGZldGNoRGF0ZSh0aGlzLmhhc3MsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbigoZGF0ZUhpc3RvcnkpID0+XG4gICAgICAgIGNvbXB1dGVIaXN0b3J5KHRoaXMuaGFzcywgZGF0ZUhpc3RvcnksIGxvY2FsaXplLCBsYW5ndWFnZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJUeXBlID09PSBcInJlY2VudC1lbnRpdHlcIikge1xuICAgICAgaWYgKCFlbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgaWYgKGNhY2hlQ29uZmlnKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLmdldFJlY2VudFdpdGhDYWNoZVJlZnJlc2goXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgY2FjaGVDb25maWcsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBnZXRSZWNlbnQoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgZGF0YS50aGVuKChzdGF0ZUhpc3RvcnkpID0+IHtcbiAgICAgIHRoaXMuX3NldERhdGEoc3RhdGVIaXN0b3J5KTtcbiAgICAgIHRoaXMuX3NldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWNlbnRXaXRoQ2FjaGVSZWZyZXNoKGVudGl0eUlkLCBjYWNoZUNvbmZpZywgbG9jYWxpemUsIGxhbmd1YWdlKSB7XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fcmVmcmVzaFRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChjYWNoZUNvbmZpZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgZ2V0UmVjZW50V2l0aENhY2hlKFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldERhdGEoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVIaXN0b3J5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgY2FjaGVDb25maWcucmVmcmVzaCAqIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVjZW50V2l0aENhY2hlKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICBjYWNoZUNvbmZpZyxcbiAgICAgIGxvY2FsaXplLFxuICAgICAgbGFuZ3VhZ2VcbiAgICApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcIiwgSGFTdGF0ZUhpc3RvcnlEYXRhKTtcbiIsImltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURpc3BsYXkgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5XCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuY29uc3QgRE9NQUlOU19VU0VfTEFTVF9VUERBVEVEID0gW1wiY2xpbWF0ZVwiLCBcIndhdGVyX2hlYXRlclwiXTtcbmNvbnN0IExJTkVfQVRUUklCVVRFU19UT19LRUVQID0gW1xuICBcInRlbXBlcmF0dXJlXCIsXG4gIFwiY3VycmVudF90ZW1wZXJhdHVyZVwiLFxuICBcInRhcmdldF90ZW1wX2xvd1wiLFxuICBcInRhcmdldF90ZW1wX2hpZ2hcIixcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0U3RhdGUge1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0RW50aXR5IHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHN0YXRlczogTGluZUNoYXJ0U3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRVbml0IHtcbiAgdW5pdDogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIGRhdGE6IExpbmVDaGFydEVudGl0eVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lU3RhdGUge1xuICBzdGF0ZV9sb2NhbGl6ZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBsYXN0X2NoYW5nZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZUVudGl0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIGRhdGE6IFRpbWVsaW5lU3RhdGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5UmVzdWx0IHtcbiAgbGluZTogTGluZUNoYXJ0VW5pdFtdO1xuICB0aW1lbGluZTogVGltZWxpbmVFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUmVjZW50ID0gKFxuICBoYXNzLFxuICBlbnRpdHlJZCxcbiAgc3RhcnRUaW1lLFxuICBlbmRUaW1lLFxuICBza2lwSW5pdGlhbFN0YXRlID0gZmFsc2Vcbik6IFByb21pc2U8SGFzc0VudGl0eVtdW10+ID0+IHtcbiAgbGV0IHVybCA9IFwiaGlzdG9yeS9wZXJpb2RcIjtcbiAgaWYgKHN0YXJ0VGltZSkge1xuICAgIHVybCArPSBcIi9cIiArIHN0YXJ0VGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIHVybCArPSBcIj9maWx0ZXJfZW50aXR5X2lkPVwiICsgZW50aXR5SWQ7XG4gIGlmIChlbmRUaW1lKSB7XG4gICAgdXJsICs9IFwiJmVuZF90aW1lPVwiICsgZW5kVGltZS50b0lTT1N0cmluZygpO1xuICB9XG4gIGlmIChza2lwSW5pdGlhbFN0YXRlKSB7XG4gICAgdXJsICs9IFwiJnNraXBfaW5pdGlhbF9zdGF0ZVwiO1xuICB9XG5cbiAgcmV0dXJuIGhhc3MuY2FsbEFwaShcIkdFVFwiLCB1cmwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGF0ZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlXG4pOiBQcm9taXNlPEhhc3NFbnRpdHlbXVtdPiA9PiB7XG4gIHJldHVybiBoYXNzLmNhbGxBcGkoXG4gICAgXCJHRVRcIixcbiAgICBgaGlzdG9yeS9wZXJpb2QvJHtzdGFydFRpbWUudG9JU09TdHJpbmcoKX0/ZW5kX3RpbWU9JHtlbmRUaW1lLnRvSVNPU3RyaW5nKCl9YFxuICApO1xufTtcblxuY29uc3QgZXF1YWxTdGF0ZSA9IChvYmoxOiBMaW5lQ2hhcnRTdGF0ZSwgb2JqMjogTGluZUNoYXJ0U3RhdGUpID0+XG4gIG9iajEuc3RhdGUgPT09IG9iajIuc3RhdGUgJiZcbiAgLy8gVGhleSBlaXRoZXIgYm90aCBoYXZlIGFuIGF0dHJpYnV0ZXMgb2JqZWN0IG9yIG5vdFxuICAoIW9iajEuYXR0cmlidXRlcyB8fFxuICAgIExJTkVfQVRUUklCVVRFU19UT19LRUVQLmV2ZXJ5KFxuICAgICAgKGF0dHIpID0+IG9iajEuYXR0cmlidXRlcyFbYXR0cl0gPT09IG9iajIuYXR0cmlidXRlcyFbYXR0cl1cbiAgICApKTtcblxuY29uc3QgcHJvY2Vzc1RpbWVsaW5lRW50aXR5ID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBzdGF0ZXM6IEhhc3NFbnRpdHlbXVxuKTogVGltZWxpbmVFbnRpdHkgPT4ge1xuICBjb25zdCBkYXRhOiBUaW1lbGluZVN0YXRlW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDAgJiYgc3RhdGUuc3RhdGUgPT09IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5zdGF0ZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIHN0YXRlX2xvY2FsaXplOiBjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZSwgbGFuZ3VhZ2UpLFxuICAgICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X2NoYW5nZWQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVzWzBdKSxcbiAgICBlbnRpdHlfaWQ6IHN0YXRlc1swXS5lbnRpdHlfaWQsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2Nlc3NMaW5lQ2hhcnRFbnRpdGllcyA9IChcbiAgdW5pdCxcbiAgZW50aXRpZXM6IEhhc3NFbnRpdHlbXVtdXG4pOiBMaW5lQ2hhcnRVbml0ID0+IHtcbiAgY29uc3QgZGF0YTogTGluZUNoYXJ0RW50aXR5W10gPSBbXTtcblxuICBmb3IgKGNvbnN0IHN0YXRlcyBvZiBlbnRpdGllcykge1xuICAgIGNvbnN0IGxhc3Q6IEhhc3NFbnRpdHkgPSBzdGF0ZXNbc3RhdGVzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihsYXN0KTtcbiAgICBjb25zdCBwcm9jZXNzZWRTdGF0ZXM6IExpbmVDaGFydFN0YXRlW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgICBsZXQgcHJvY2Vzc2VkU3RhdGU6IExpbmVDaGFydFN0YXRlO1xuXG4gICAgICBpZiAoRE9NQUlOU19VU0VfTEFTVF9VUERBVEVELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxuICAgICAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGUubGFzdF91cGRhdGVkLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUCkge1xuICAgICAgICAgIGlmIChhdHRyIGluIHN0YXRlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLmF0dHJpYnV0ZXMhW2F0dHJdID0gc3RhdGUuYXR0cmlidXRlc1thdHRyXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NlZFN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgZXF1YWxTdGF0ZShcbiAgICAgICAgICBwcm9jZXNzZWRTdGF0ZSxcbiAgICAgICAgICBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkgJiZcbiAgICAgICAgZXF1YWxTdGF0ZShwcm9jZXNzZWRTdGF0ZSwgcHJvY2Vzc2VkU3RhdGVzW3Byb2Nlc3NlZFN0YXRlcy5sZW5ndGggLSAyXSlcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzc2VkU3RhdGVzLnB1c2gocHJvY2Vzc2VkU3RhdGUpO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBkb21haW4sXG4gICAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKGxhc3QpLFxuICAgICAgZW50aXR5X2lkOiBsYXN0LmVudGl0eV9pZCxcbiAgICAgIHN0YXRlczogcHJvY2Vzc2VkU3RhdGVzLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1bml0LFxuICAgIGlkZW50aWZpZXI6IGVudGl0aWVzLm1hcCgoc3RhdGVzKSA9PiBzdGF0ZXNbMF0uZW50aXR5X2lkKS5qb2luKFwiXCIpLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUhpc3RvcnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlSGlzdG9yeTogSGFzc0VudGl0eVtdW10sXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmdcbik6IEhpc3RvcnlSZXN1bHQgPT4ge1xuICBjb25zdCBsaW5lQ2hhcnREZXZpY2VzOiB7IFt1bml0OiBzdHJpbmddOiBIYXNzRW50aXR5W11bXSB9ID0ge307XG4gIGNvbnN0IHRpbWVsaW5lRGV2aWNlczogVGltZWxpbmVFbnRpdHlbXSA9IFtdO1xuICBpZiAoIXN0YXRlSGlzdG9yeSkge1xuICAgIHJldHVybiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfTtcbiAgfVxuXG4gIHN0YXRlSGlzdG9yeS5mb3JFYWNoKChzdGF0ZUluZm8pID0+IHtcbiAgICBpZiAoc3RhdGVJbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlV2l0aFVuaXQgPSBzdGF0ZUluZm8uZmluZChcbiAgICAgIChzdGF0ZSkgPT4gXCJ1bml0X29mX21lYXN1cmVtZW50XCIgaW4gc3RhdGUuYXR0cmlidXRlc1xuICAgICk7XG5cbiAgICBsZXQgdW5pdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHN0YXRlV2l0aFVuaXQpIHtcbiAgICAgIHVuaXQgPSBzdGF0ZVdpdGhVbml0LmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZUluZm9bMF0pID09PSBcImNsaW1hdGVcIikge1xuICAgICAgdW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlO1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwid2F0ZXJfaGVhdGVyXCIpIHtcbiAgICAgIHVuaXQgPSBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9XG5cbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRpbWVsaW5lRGV2aWNlcy5wdXNoKFxuICAgICAgICBwcm9jZXNzVGltZWxpbmVFbnRpdHkobG9jYWxpemUsIGxhbmd1YWdlLCBzdGF0ZUluZm8pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodW5pdCBpbiBsaW5lQ2hhcnREZXZpY2VzKSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdLnB1c2goc3RhdGVJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSA9IFtzdGF0ZUluZm9dO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdW5pdFN0YXRlcyA9IE9iamVjdC5rZXlzKGxpbmVDaGFydERldmljZXMpLm1hcCgodW5pdCkgPT5cbiAgICBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXModW5pdCwgbGluZUNoYXJ0RGV2aWNlc1t1bml0XSlcbiAgKTtcblxuICByZXR1cm4geyBsaW5lOiB1bml0U3RhdGVzLCB0aW1lbGluZTogdGltZWxpbmVEZXZpY2VzIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBTUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFRQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0tBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc1VBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUE1V0E7QUFDQTtBQUNBOzs7QUE0V0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBdG1CQTtBQUNBO0FBZ0lBOzs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUE2QkE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTdLQTtBQUNBO0FBMm1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxbkJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBU0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQVpBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUE1Q0E7QUFrREE7QUFDQTtBQUNBO0FBRkE7QUF0REE7QUEyREE7QUFDQTs7O0FBeFVBO0FBQ0E7QUFnQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBNUNBO0FBQ0E7QUEwVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQU1BO0FBSUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFYQTtBQU5BO0FBMEJBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFoQ0E7QUFxQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE1TUE7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFzQkE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXBEQTtBQUNBO0FBOE1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU5BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFuR0E7QUFDQTtBQXVEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQWZBO0FBaUJBOzs7O0FBN0VBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBVUE7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFnQkE7QUFoQkE7QUFDQTtBQURBO0FBbUJBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBQUE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTs7O0FBR0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BOzs7QUFuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXRCQTtBQTZCQTs7O0FBRUE7QUFDQTtBQUdBOzs7O0FBckNBO0FBQ0E7QUFxS0E7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUEyQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUtBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUEvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
