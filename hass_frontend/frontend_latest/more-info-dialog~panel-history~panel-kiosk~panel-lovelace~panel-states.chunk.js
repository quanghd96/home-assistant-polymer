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
          ? (dateObj, locales) =>
              dateObj.toLocaleDateString(locales, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "mediumDate"
              );

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
          ? (dateObj, locales) =>
              dateObj.toLocaleTimeString(locales, {
                hour: "numeric",
                minute: "2-digit",
              })
          : (dateObj) =>
              fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(
                dateObj,
                "shortTime"
              );

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

        /* harmony default export */ __webpack_exports__["default"] = (
          localize,
          stateObj,
          language
        ) => {
          let display;
          const domain = Object(
            _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"]
          )(stateObj);

          if (domain === "binary_sensor") {
            // Try device class translation, then default binary sensor translation
            if (stateObj.attributes.device_class) {
              display = localize(
                `state.${domain}.${stateObj.attributes.device_class}.${
                  stateObj.state
                }`
              );
            }

            if (!display) {
              display = localize(`state.${domain}.default.${stateObj.state}`);
            }
          } else if (
            stateObj.attributes.unit_of_measurement &&
            !["unknown", "unavailable"].includes(stateObj.state)
          ) {
            display =
              stateObj.state + " " + stateObj.attributes.unit_of_measurement;
          } else if (domain === "input_datetime") {
            let date;

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
              const now = new Date();
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
                `state.zwave.query_stage.${stateObj.state}`,
                "query_stage",
                stateObj.attributes.query_stage
              );
            } else {
              display = localize(`state.zwave.default.${stateObj.state}`);
            }
          } else {
            display = localize(`state.${domain}.${stateObj.state}`);
          } // Fall back to default, component backend translation, or raw state if nothing else matches.

          if (!display) {
            display =
              localize(`state.default.${stateObj.state}`) ||
              localize(`component.${domain}.state.${stateObj.state}`) ||
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

        // eslint-disable-next-line no-unused-vars

        /* global Chart moment Color */

        let scriptsLoaded = null;

        class HaChartBase extends Object(
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
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__[
              "html"
            ]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
          }

          get chart() {
            return this._chart;
          }

          static get properties() {
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
                value: () => [],
              },
              tooltip: {
                type: Object,
                value: () => ({
                  opacity: "0",
                  left: "0",
                  top: "0",
                  xPadding: "5",
                  yPadding: "3",
                }),
              },
              unit: Object,
              rtl: {
                type: Boolean,
                reflectToAttribute: true,
              },
            };
          }

          static get observers() {
            return ["onPropsChange(data)"];
          }

          connectedCallback() {
            super.connectedCallback();
            this._isAttached = true;
            this.onPropsChange();

            this._resizeListener = () => {
              this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__[
                "Debouncer"
              ].debounce(
                this._debouncer,
                _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__[
                  "timeOut"
                ].after(10),
                () => {
                  if (this._isAttached) {
                    this.resizeChart();
                  }
                }
              );
            };

            if (typeof ResizeObserver === "function") {
              this.resizeObserver = new ResizeObserver((entries) => {
                entries.forEach(() => {
                  this._resizeListener();
                });
              });
              this.resizeObserver.observe(this.$.chartTarget);
            } else {
              this.addEventListener("iron-resize", this._resizeListener);
            }

            if (scriptsLoaded === null) {
              scriptsLoaded = Promise.all(
                /*! import() | load_chart */ [
                  __webpack_require__.e("vendors~load_chart~panel-calendar"),
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

            scriptsLoaded.then((ChartModule) => {
              this.ChartClass = ChartModule.default;
              this.onPropsChange();
            });
          }

          disconnectedCallback() {
            super.disconnectedCallback();
            this._isAttached = false;

            if (this.resizeObserver) {
              this.resizeObserver.unobserve(this.$.chartTarget);
            }

            this.removeEventListener("iron-resize", this._resizeListener);

            if (this._resizeTimer !== undefined) {
              clearInterval(this._resizeTimer);
              this._resizeTimer = undefined;
            }
          }

          onPropsChange() {
            if (!this._isAttached || !this.ChartClass || !this.data) {
              return;
            }

            this.drawChart();
          }

          _customTooltips(tooltip) {
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

            const title = tooltip.title ? tooltip.title[0] || "" : "";
            this.set(["tooltip", "title"], title);
            const bodyLines = tooltip.body.map((n) => n.lines); // Set Text

            if (tooltip.body) {
              this.set(
                ["tooltip", "lines"],
                bodyLines.map((body, i) => {
                  const colors = tooltip.labelColors[i];
                  return {
                    color: colors.borderColor,
                    bgColor: colors.backgroundColor,
                    text: body.join("\n"),
                  };
                })
              );
            }

            const parentWidth = this.$.chartTarget.clientWidth;
            let positionX = tooltip.caretX;
            const positionY = this._chart.canvas.offsetTop + tooltip.caretY;

            if (tooltip.caretX + 100 > parentWidth) {
              positionX = parentWidth - 100;
            } else if (tooltip.caretX < 100) {
              positionX = 100;
            }

            positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

            this.tooltip = Object.assign({}, this.tooltip, {
              opacity: 1,
              left: `${positionX}px`,
              top: `${positionY}px`,
            });
          }

          _legendClick(event) {
            event = event || window.event;
            event.stopPropagation();
            let target = event.target || event.srcElement;

            while (target.nodeName !== "LI") {
              // user clicked child, find parent LI
              target = target.parentElement;
            }

            const index = event.model.itemsIndex;

            const meta = this._chart.getDatasetMeta(index);

            meta.hidden =
              meta.hidden === null
                ? !this._chart.data.datasets[index].hidden
                : null;
            this.set(
              ["metas", index, "hidden"],
              this._chart.isDatasetVisible(index) ? null : "hidden"
            );

            this._chart.update();
          }

          _drawLegend() {
            const chart = this._chart; // New data for old graph. Keep metadata.

            const preserveVisibility =
              this._oldIdentifier && this.identifier === this._oldIdentifier;
            this._oldIdentifier = this.identifier;
            this.set(
              "metas",
              this._chart.data.datasets.map((x, i) => ({
                label: x.label,
                color: x.color,
                bgColor: x.backgroundColor,
                hidden:
                  preserveVisibility && i < this.metas.length
                    ? this.metas[i].hidden
                    : !chart.isDatasetVisible(i),
              }))
            );
            let updateNeeded = false;

            if (preserveVisibility) {
              for (let i = 0; i < this.metas.length; i++) {
                const meta = chart.getDatasetMeta(i);
                if (!!meta.hidden !== !!this.metas[i].hidden)
                  updateNeeded = true;
                meta.hidden = this.metas[i].hidden ? true : null;
              }
            }

            if (updateNeeded) {
              chart.update();
            }

            this.unit = this.data.unit;
          }

          _formatTickValue(value, index, values) {
            if (values.length === 0) {
              return value;
            }

            const date = new Date(values[index].value);
            return Object(
              _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__[
                "default"
              ]
            )(date);
          }

          drawChart() {
            const data = this.data.data;
            const ctx = this.$.chartCanvas;

            if ((!data.datasets || !data.datasets.length) && !this._chart) {
              return;
            }

            if (this.data.type !== "timeline" && data.datasets.length > 0) {
              const cnt = data.datasets.length;
              const colors = this.constructor.getColorList(cnt);

              for (let loopI = 0; loopI < cnt; loopI++) {
                data.datasets[loopI].borderColor = colors[loopI].rgbString();
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

              const plugins = [
                {
                  afterRender: () => this._setRendered(true),
                },
              ];
              let options = {
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

              const chartData = {
                type: this.data.type,
                data: this.data.data,
                options: options,
                plugins: plugins,
              }; // Async resize after dom update

              this._chart = new this.ChartClass(ctx, chartData);

              if (this.isTimeline !== true && this.data.legend === true) {
                this._drawLegend();
              }

              this.resizeChart();
            }
          }

          resizeChart() {
            if (!this._chart) return; // Chart not ready

            if (this._resizeTimer === undefined) {
              this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
              return;
            }

            clearInterval(this._resizeTimer);
            this._resizeTimer = undefined;

            this._resizeChart();
          }

          _resizeChart() {
            const chartTarget = this.$.chartTarget;
            const options = this.data;
            const data = options.data;

            if (data.datasets.length === 0) {
              return;
            }

            if (!this.isTimeline) {
              this._chart.resize();

              return;
            } // Recalculate chart height for Timeline chart

            const areaTop = this._chart.chartArea.top;
            const areaBot = this._chart.chartArea.bottom;
            const height1 = this._chart.canvas.clientHeight;

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
              const cnt = data.datasets.length;
              const targetHeight = 30 * cnt + this._axisHeight + "px";

              if (chartTarget.style.height !== targetHeight) {
                chartTarget.style.height = targetHeight;
              }

              this._chart.resize();
            }
          } // Get HSL distributed color list

          static getColorList(count) {
            let processL = false;

            if (count > 10) {
              processL = true;
              count = Math.ceil(count / 2);
            }

            const h1 = 360 / count;
            const result = [];

            for (let loopI = 0; loopI < count; loopI++) {
              result[loopI] = Color().hsl(h1 * loopI, 80, 38);

              if (processL) {
                result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
              }
            }

            return result;
          }

          static getColorGenerator(staticColors, startIndex) {
            // Known colors for static data,
            // should add for very common state string manually.
            // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
            const palette = [
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

            const colorDict = {};
            let colorIndex = 0;
            if (startIndex > 0) colorIndex = startIndex;

            if (staticColors) {
              Object.keys(staticColors).forEach((c) => {
                const c1 = staticColors[c];

                if (isFinite(c1)) {
                  colorDict[c.toLowerCase()] = getColorIndex(c1);
                } else {
                  colorDict[c.toLowerCase()] = Color(staticColors[c]);
                }
              });
            } // Custom color assign

            function getColor(__, data) {
              let ret;
              const name = data[3];
              if (name === null) return Color().hsl(0, 40, 38);
              if (name === undefined) return Color().hsl(120, 40, 38);
              const name1 = name.toLowerCase();

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
          }
        }

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

        class StateHistoryChartLine extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `;
          }

          static get properties() {
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
          }

          static get observers() {
            return ["dataChanged(data, endTime, isSingleDevice)"];
          }

          connectedCallback() {
            super.connectedCallback();
            this._isAttached = true;
            this.drawChart();
          }

          dataChanged() {
            this.drawChart();
          }

          _onRenderedChanged(rendered) {
            if (rendered) this.animateHeight();
          }

          animateHeight() {
            requestAnimationFrame(() =>
              requestAnimationFrame(() => {
                this.style.height = this.$.chart.scrollHeight + "px";
              })
            );
          }

          drawChart() {
            const unit = this.unit;
            const deviceStates = this.data;
            const datasets = [];
            let endTime;

            if (!this._isAttached) {
              return;
            }

            if (deviceStates.length === 0) {
              return;
            }

            function safeParseFloat(value) {
              const parsed = parseFloat(value);
              return isFinite(parsed) ? parsed : null;
            }

            endTime =
              this.endTime || // Get the highest date from the last date of each device
              new Date(
                Math.max.apply(
                  null,
                  deviceStates.map(
                    (devSts) =>
                      new Date(
                        devSts.states[devSts.states.length - 1].last_changed
                      )
                  )
                )
              );

            if (endTime > new Date()) {
              endTime = new Date();
            }

            const names = this.names || {};
            deviceStates.forEach((states) => {
              const domain = states.domain;
              const name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

              let prevValues;
              const data = [];

              function pushData(timestamp, datavalues) {
                if (!datavalues) return;

                if (timestamp > endTime) {
                  // Drop datapoints that are after the requested endTime. This could happen if
                  // endTime is "now" and client time is not in sync with server time.
                  return;
                }

                data.forEach((d, i) => {
                  d.data.push({
                    x: timestamp,
                    y: datavalues[i],
                  });
                });
                prevValues = datavalues;
              }

              function addColumn(nameY, step, fill) {
                let dataFill = false;
                let dataStep = false;

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
                const isHeating =
                  domain === "climate"
                    ? (state) => state.attributes.hvac_action === "heating"
                    : (state) => state.state === "heat";
                const isCooling =
                  domain === "climate"
                    ? (state) => state.attributes.hvac_action === "cooling"
                    : (state) => state.state === "cool"; // We differentiate between thermostats that have a target temperature
                // range versus ones that have just a target temperature
                // Using step chart by step-before so manually interpolation not needed.

                const hasTargetRange = states.states.some(
                  (state) =>
                    state.attributes &&
                    state.attributes.target_temp_high !==
                      state.attributes.target_temp_low
                );
                const hasHeat = states.states.some(isHeating);
                const hasCool = states.states.some(isCooling);
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

                states.states.forEach((state) => {
                  if (!state.attributes) return;
                  const curTemp = safeParseFloat(
                    state.attributes.current_temperature
                  );
                  const series = [curTemp];

                  if (hasHeat) {
                    series.push(isHeating(state) ? curTemp : null);
                  }

                  if (hasCool) {
                    series.push(isCooling(state) ? curTemp : null);
                  }

                  if (hasTargetRange) {
                    const targetHigh = safeParseFloat(
                      state.attributes.target_temp_high
                    );
                    const targetLow = safeParseFloat(
                      state.attributes.target_temp_low
                    );
                    series.push(targetHigh, targetLow);
                    pushData(new Date(state.last_changed), series);
                  } else {
                    const target = safeParseFloat(state.attributes.temperature);
                    series.push(target);
                    pushData(new Date(state.last_changed), series);
                  }
                });
              } else {
                // Only disable interpolation for sensors
                const isStep = domain === "sensor";
                addColumn(name, isStep);
                let lastValue = null;
                let lastDate = null;
                let lastNullDate = null; // Process chart data.
                // When state is `unknown`, calculate the value and break the line.

                states.states.forEach((state) => {
                  const value = safeParseFloat(state.state);
                  const date = new Date(state.last_changed);

                  if (value !== null && lastNullDate !== null) {
                    const dateTime = date.getTime();
                    const lastNullDateTime = lastNullDate.getTime();
                    const lastDateTime = lastDate.getTime();
                    const tmpValue =
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

            const formatTooltipTitle = (items, data) => {
              const item = items[0];
              const date = data.datasets[item.datasetIndex].data[item.index].x;
              return Object(
                _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(date, this.hass.language);
            };

            const chartOptions = {
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
          }
        }

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

        class StateHistoryChartTimeline extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `;
          }

          static get properties() {
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
          }

          static get observers() {
            return ["dataChanged(data, endTime, localize, language)"];
          }

          connectedCallback() {
            super.connectedCallback();
            this._isAttached = true;
            this.drawChart();
          }

          dataChanged() {
            this.drawChart();
          }

          drawChart() {
            const staticColors = {
              on: 1,
              off: 0,
              unavailable: "#a0a0a0",
              unknown: "#606060",
              idle: 2,
            };
            let stateHistory = this.data;

            if (!this._isAttached) {
              return;
            }

            if (!stateHistory) {
              stateHistory = [];
            }

            const startTime = new Date(
              stateHistory.reduce(
                (minTime, stateInfo) =>
                  Math.min(minTime, new Date(stateInfo.data[0].last_changed)),
                new Date()
              )
            ); // end time is Math.max(startTime, last_event)

            let endTime =
              this.endTime ||
              new Date(
                stateHistory.reduce(
                  (maxTime, stateInfo) =>
                    Math.max(
                      maxTime,
                      new Date(
                        stateInfo.data[stateInfo.data.length - 1].last_changed
                      )
                    ),
                  startTime
                )
              );

            if (endTime > new Date()) {
              endTime = new Date();
            }

            const labels = [];
            const datasets = []; // stateHistory is a list of lists of sorted state objects

            const names = this.names || {};
            stateHistory.forEach((stateInfo) => {
              let newLastChanged;
              let prevState = null;
              let locState = null;
              let prevLastChanged = startTime;
              const entityDisplay =
                names[stateInfo.entity_id] || stateInfo.name;
              const dataRow = [];
              stateInfo.data.forEach((state) => {
                let newState = state.state;
                const timeStamp = new Date(state.last_changed);

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
                dataRow.push([prevLastChanged, endTime, locState, prevState]);
              }

              datasets.push({
                data: dataRow,
              });
              labels.push(entityDisplay);
            });

            const formatTooltipLabel = (item, data) => {
              const values = data.datasets[item.datasetIndex].data[item.index];
              const start = Object(
                _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(values[0], this.hass.language);
              const end = Object(
                _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              )(values[1], this.hass.language);
              const state = values[2];
              return [state, start, end];
            };

            const chartOptions = {
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
                      afterSetDimensions: (yaxe) => {
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
          }

          _computeRTL(hass) {
            return Object(
              _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__[
                "computeRTL"
              ]
            )(hass);
          }
        }

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

        class StateHistoryCharts extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
          }

          static get properties() {
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
          }

          _computeIsSingleLineChart(data, noSingle) {
            return !noSingle && data && data.length === 1;
          }

          _computeIsEmpty(isLoadingData, historyData) {
            const historyDataEmpty =
              !historyData ||
              !historyData.timeline ||
              !historyData.line ||
              (historyData.timeline.length === 0 &&
                historyData.line.length === 0);
            return !isLoadingData && historyDataEmpty;
          }

          _computeIsLoading(isLoading) {
            return isLoading && !this.historyData;
          }

          _computeEndTime(endTime, upToNow) {
            // We don't really care about the value of historyData, but if it change we want to update
            // endTime.
            return upToNow ? new Date() : endTime;
          }
        }

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

        const RECENT_THRESHOLD = 60000; // 1 minute

        const RECENT_CACHE = {};
        const stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

        const getRecent = (
          hass,
          entityId,
          startTime,
          endTime,
          localize,
          language
        ) => {
          const cacheKey = entityId;
          const cache = RECENT_CACHE[cacheKey];

          if (
            cache &&
            Date.now() - cache.created < RECENT_THRESHOLD &&
            cache.language === language
          ) {
            return cache.data;
          }

          const prom = Object(
            _history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"]
          )(hass, entityId, startTime, endTime).then(
            (stateHistory) =>
              Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(
                hass,
                stateHistory,
                localize,
                language
              ),
            (err) => {
              delete RECENT_CACHE[entityId];
              throw err;
            }
          );
          RECENT_CACHE[cacheKey] = {
            created: Date.now(),
            language,
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
            language,
            startTime,
            endTime,
            data: {
              line: [],
              timeline: [],
            },
          };
        }

        const getRecentWithCache = (
          hass,
          entityId,
          cacheConfig,
          localize,
          language
        ) => {
          const cacheKey = cacheConfig.cacheKey;
          const endTime = new Date();
          const startTime = new Date(endTime);
          startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
          let toFetchStartTime = startTime;
          let appendingToCache = false;
          let cache = stateHistoryCache[cacheKey];

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

          const curCacheProm = cache.prom;

          const genProm = async () => {
            let fetchedHistory;

            try {
              const results = await Promise.all([
                curCacheProm,
                Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(
                  hass,
                  entityId,
                  toFetchStartTime,
                  endTime,
                  appendingToCache
                ),
              ]);
              fetchedHistory = results[1];
            } catch (err) {
              delete stateHistoryCache[cacheKey];
              throw err;
            }

            const stateHistory = Object(
              _history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"]
            )(hass, fetchedHistory, localize, language);

            if (appendingToCache) {
              mergeLine(stateHistory.line, cache.data.line);
              mergeTimeline(stateHistory.timeline, cache.data.timeline);
              pruneStartTime(startTime, cache.data);
            } else {
              cache.data = stateHistory;
            }

            return cache.data;
          };

          cache.prom = genProm();
          cache.startTime = startTime;
          cache.endTime = endTime;
          return cache.prom;
        };

        const mergeLine = (historyLines, cacheLines) => {
          historyLines.forEach((line) => {
            const unit = line.unit;
            const oldLine = cacheLines.find(
              (cacheLine) => cacheLine.unit === unit
            );

            if (oldLine) {
              line.data.forEach((entity) => {
                const oldEntity = oldLine.data.find(
                  (cacheEntity) => entity.entity_id === cacheEntity.entity_id
                );

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

        const mergeTimeline = (historyTimelines, cacheTimelines) => {
          historyTimelines.forEach((timeline) => {
            const oldTimeline = cacheTimelines.find(
              (cacheTimeline) => cacheTimeline.entity_id === timeline.entity_id
            );

            if (oldTimeline) {
              oldTimeline.data = oldTimeline.data.concat(timeline.data);
            } else {
              cacheTimelines.push(timeline);
            }
          });
        };

        const pruneArray = (originalStartTime, arr) => {
          if (arr.length === 0) {
            return arr;
          }

          const changedAfterStartTime = arr.findIndex(
            (state) => new Date(state.last_changed) > originalStartTime
          );

          if (changedAfterStartTime === 0) {
            // If all changes happened after originalStartTime then we are done.
            return arr;
          } // If all changes happened at or before originalStartTime. Use last index.

          const updateIndex =
            changedAfterStartTime === -1
              ? arr.length - 1
              : changedAfterStartTime - 1;
          arr[updateIndex].last_changed = originalStartTime;
          return arr.slice(updateIndex);
        };

        const pruneStartTime = (originalStartTime, cacheData) => {
          cacheData.line.forEach((line) => {
            line.data.forEach((entity) => {
              entity.states = pruneArray(originalStartTime, entity.states);
            });
          });
          cacheData.timeline.forEach((timeline) => {
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

        /*
         * @appliesMixin LocalizeMixin
         */

        class HaStateHistoryData extends Object(
          _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get properties() {
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
          }

          static get observers() {
            return [
              "filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)",
            ];
          }

          connectedCallback() {
            super.connectedCallback();
            this.filterChangedDebouncer(
              this.filterType,
              this.entityId,
              this.startTime,
              this.endTime,
              this.cacheConfig,
              this.localize
            );
          }

          disconnectedCallback() {
            if (this._refreshTimeoutId) {
              window.clearInterval(this._refreshTimeoutId);
              this._refreshTimeoutId = null;
            }

            super.disconnectedCallback();
          }

          hassChanged(newHass, oldHass) {
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
          }

          filterChangedDebouncer(...args) {
            this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__[
              "Debouncer"
            ].debounce(
              this._debounceFilterChanged,
              _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__[
                "timeOut"
              ].after(0),
              () => {
                this.filterChanged(...args);
              }
            );
          }

          filterChanged(
            filterType,
            entityId,
            startTime,
            endTime,
            cacheConfig,
            localize
          ) {
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
            const language = this.hass.language;
            let data;

            if (filterType === "date") {
              if (!startTime || !endTime) return;
              data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(
                this.hass,
                startTime,
                endTime
              ).then((dateHistory) =>
                Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(
                  this.hass,
                  dateHistory,
                  localize,
                  language
                )
              );
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
                  _cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"]
                )(this.hass, entityId, startTime, endTime, localize, language);
              }
            } else {
              return;
            }

            this._setIsLoading(true);

            data.then((stateHistory) => {
              this._setData(stateHistory);

              this._setIsLoading(false);
            });
          }

          getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
            if (this._refreshTimeoutId) {
              window.clearInterval(this._refreshTimeoutId);
              this._refreshTimeoutId = null;
            }

            if (cacheConfig.refresh) {
              this._refreshTimeoutId = window.setInterval(() => {
                Object(
                  _cached_history__WEBPACK_IMPORTED_MODULE_5__[
                    "getRecentWithCache"
                  ]
                )(this.hass, entityId, cacheConfig, localize, language).then(
                  (stateHistory) => {
                    this._setData(Object.assign({}, stateHistory));
                  }
                );
              }, cacheConfig.refresh * 1000);
            }

            return Object(
              _cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"]
            )(this.hass, entityId, cacheConfig, localize, language);
          }
        }

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

        const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
        const LINE_ATTRIBUTES_TO_KEEP = [
          "temperature",
          "current_temperature",
          "target_temp_low",
          "target_temp_high",
        ];
        const fetchRecent = (
          hass,
          entityId,
          startTime,
          endTime,
          skipInitialState = false
        ) => {
          let url = "history/period";

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
        const fetchDate = (hass, startTime, endTime) => {
          return hass.callApi(
            "GET",
            `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`
          );
        };

        const equalState = (obj1, obj2) =>
          obj1.state === obj2.state && // They either both have an attributes object or not
          (!obj1.attributes ||
            LINE_ATTRIBUTES_TO_KEEP.every(
              (attr) => obj1.attributes[attr] === obj2.attributes[attr]
            ));

        const processTimelineEntity = (localize, language, states) => {
          const data = [];

          for (const state of states) {
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

          return {
            name: Object(
              _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(states[0]),
            entity_id: states[0].entity_id,
            data,
          };
        };

        const processLineChartEntities = (unit, entities) => {
          const data = [];

          for (const states of entities) {
            const last = states[states.length - 1];
            const domain = Object(
              _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ]
            )(last);
            const processedStates = [];

            for (const state of states) {
              let processedState;

              if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
                processedState = {
                  state: state.state,
                  last_changed: state.last_updated,
                  attributes: {},
                };

                for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
                  if (attr in state.attributes) {
                    processedState.attributes[attr] = state.attributes[attr];
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

            data.push({
              domain,
              name: Object(
                _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ]
              )(last),
              entity_id: last.entity_id,
              states: processedStates,
            });
          }

          return {
            unit,
            identifier: entities.map((states) => states[0].entity_id).join(""),
            data,
          };
        };

        const computeHistory = (hass, stateHistory, localize, language) => {
          const lineChartDevices = {};
          const timelineDevices = [];

          if (!stateHistory) {
            return {
              line: [],
              timeline: [],
            };
          }

          stateHistory.forEach((stateInfo) => {
            if (stateInfo.length === 0) {
              return;
            }

            const stateWithUnit = stateInfo.find(
              (state) => "unit_of_measurement" in state.attributes
            );
            let unit;

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
          const unitStates = Object.keys(lineChartDevices).map((unit) =>
            processLineChartEntities(unit, lineChartDevices[unit])
          );
          return {
            line: unitStates,
            timeline: timelineDevices,
          };
        };

        /***/
      },

    /***/ "./src/mixins/localize-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
          _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__[
            "dedupingMixin"
          ]
        )(
          (superClass) =>
            class extends superClass {
              static get properties() {
                return {
                  hass: Object,

                  /**
                   * Translates a string to the current `language`. Any parameters to the
                   * string should be passed in order, as follows:
                   * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
                   */
                  localize: {
                    type: Function,
                    computed: "__computeLocalize(hass.localize)",
                  },
                };
              }

              __computeLocalize(localize) {
                return localize;
              }
            }
        );

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1oaXN0b3J5fnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtY2hhcnQtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jYWNoZWQtaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bURhdGVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpKTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlXCI7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogc3RyaW5nID0+IHtcbiAgbGV0IGRpc3BsYXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoZG9tYWluID09PSBcImJpbmFyeV9zZW5zb3JcIikge1xuICAgIC8vIFRyeSBkZXZpY2UgY2xhc3MgdHJhbnNsYXRpb24sIHRoZW4gZGVmYXVsdCBiaW5hcnkgc2Vuc29yIHRyYW5zbGF0aW9uXG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoXG4gICAgICAgIGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzc30uJHtzdGF0ZU9iai5zdGF0ZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghZGlzcGxheSkge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQgJiZcbiAgICAhW1widW5rbm93blwiLCBcInVuYXZhaWxhYmxlXCJdLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKVxuICApIHtcbiAgICBkaXNwbGF5ID0gc3RhdGVPYmouc3RhdGUgKyBcIiBcIiArIHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgfSBlbHNlIGlmIChkb21haW4gPT09IFwiaW5wdXRfZGF0ZXRpbWVcIikge1xuICAgIGxldCBkYXRlOiBEYXRlO1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheVxuICAgICAgKTtcbiAgICAgIGRpc3BsYXkgPSBmb3JtYXREYXRlKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAvLyBEdWUgdG8gYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc5NzU0OFxuICAgICAgICAvLyBkb24ndCB1c2UgYXJ0aWZpY2lhbCAxOTcwIHllYXIuXG4gICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICBub3cuZ2V0TW9udGgoKSxcbiAgICAgICAgbm93LmdldERheSgpLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdFRpbWUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMueWVhcixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5LFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlXG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdERhdGVUaW1lKGRhdGUsIGxhbmd1YWdlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSBcInp3YXZlXCIpIHtcbiAgICBpZiAoW1wiaW5pdGlhbGl6aW5nXCIsIFwiZGVhZFwiXS5pbmNsdWRlcyhzdGF0ZU9iai5zdGF0ZSkpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShcbiAgICAgICAgYHN0YXRlLnp3YXZlLnF1ZXJ5X3N0YWdlLiR7c3RhdGVPYmouc3RhdGV9YCxcbiAgICAgICAgXCJxdWVyeV9zdGFnZVwiLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoYHN0YXRlLnp3YXZlLmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheSA9IGxvY2FsaXplKGBzdGF0ZS4ke2RvbWFpbn0uJHtzdGF0ZU9iai5zdGF0ZX1gKTtcbiAgfVxuXG4gIC8vIEZhbGwgYmFjayB0byBkZWZhdWx0LCBjb21wb25lbnQgYmFja2VuZCB0cmFuc2xhdGlvbiwgb3IgcmF3IHN0YXRlIGlmIG5vdGhpbmcgZWxzZSBtYXRjaGVzLlxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID1cbiAgICAgIGxvY2FsaXplKGBzdGF0ZS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIGxvY2FsaXplKGBjb21wb25lbnQuJHtkb21haW59LnN0YXRlLiR7c3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHN0YXRlT2JqLnN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIGRpc3BsYXk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+XG4gIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG4iLCJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgSXJvblJlc2l6YWJsZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcblxuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vKiBnbG9iYWwgQ2hhcnQgbW9tZW50IENvbG9yICovXG5cbmxldCBzY3JpcHRzTG9hZGVkID0gbnVsbDtcblxuY2xhc3MgSGFDaGFydEJhc2UgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhcbiAgW0lyb25SZXNpemFibGVCZWhhdmlvcl0sXG4gIFBvbHltZXJFbGVtZW50XG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgMCAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0VGl0bGUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgZmxleDogMCAwIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyID4gZGl2LmNoYXJ0TGVnZW5kIHtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MCwgODAsIDgwLCAwLjkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTJweCk7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcnRsXSkgLmNoYXJ0VG9vbHRpcCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0TGVnZW5kIHVsLFxuICAgICAgICAuY2hhcnRUb29sdGlwIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydFRvb2x0aXAgLnRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQ5JTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGk6bnRoLWNoaWxkKG9kZCk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAvKiBNYWtlIGxhc3QgaXRlbSB0YWtlIGZ1bGwgd2lkdGggaWYgaXQgaXMgb2RkLW51bWJlcmVkLiAqL1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgbGlbZGF0YS1oaWRkZW5dIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgZW0sXG4gICAgICAgIC5jaGFydFRvb2x0aXAgZW0ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuY2hhcnRUb29sdGlwIGVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t1bml0XV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0SGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0VGl0bGVcIj5bW3VuaXRdXTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydExlZ2VuZFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW21ldGFzXV1cIj5cbiAgICAgICAgICAgICAgICA8bGkgb24tY2xpY2s9XCJfbGVnZW5kQ2xpY2tcIiBkYXRhLWhpZGRlbiQ9XCJbW2l0ZW0uaGlkZGVuXV1cIj5cbiAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZSQ9XCJiYWNrZ3JvdW5kLWNvbG9yOltbaXRlbS5iZ0NvbG9yXV1cIj48L2VtPlxuICAgICAgICAgICAgICAgICAgW1tpdGVtLmxhYmVsXV1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBpZD1cImNoYXJ0VGFyZ2V0XCIgc3R5bGU9XCJoZWlnaHQ6NDBweDsgd2lkdGg6MTAwJVwiPlxuICAgICAgICA8Y2FudmFzIGlkPVwiY2hhcnRDYW52YXNcIj48L2NhbnZhcz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzJD1cImNoYXJ0VG9vbHRpcCBbW3Rvb2x0aXAueUFsaWduXV1cIlxuICAgICAgICAgIHN0eWxlJD1cIm9wYWNpdHk6W1t0b29sdGlwLm9wYWNpdHldXTsgdG9wOltbdG9vbHRpcC50b3BdXTsgbGVmdDpbW3Rvb2x0aXAubGVmdF1dOyBwYWRkaW5nOltbdG9vbHRpcC55UGFkZGluZ11dcHggW1t0b29sdGlwLnhQYWRkaW5nXV1weFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5bW3Rvb2x0aXAudGl0bGVdXTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdG9vbHRpcC5saW5lc11dXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGVtIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6W1tpdGVtLmJnQ29sb3JdXVwiPjwvZW1cbiAgICAgICAgICAgICAgICAgID5bW2l0ZW0udGV4dF1dXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGdldCBjaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIGlkZW50aWZpZXI6IFN0cmluZyxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBtZXRhczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHtcbiAgICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIHhQYWRkaW5nOiBcIjVcIixcbiAgICAgICAgICB5UGFkZGluZzogXCIzXCIsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICAgIHVuaXQ6IE9iamVjdCxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wib25Qcm9wc0NoYW5nZShkYXRhKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9kZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgICAgdGltZU91dC5hZnRlcigxMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiQuY2hhcnRUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJpcm9uLXJlc2l6ZVwiLCB0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgaWYgKHNjcmlwdHNMb2FkZWQgPT09IG51bGwpIHtcbiAgICAgIHNjcmlwdHNMb2FkZWQgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2FkX2NoYXJ0XCIgKi8gXCIuLi8uLi9yZXNvdXJjZXMvaGEtY2hhcnQtc2NyaXB0cy5qc1wiKTtcbiAgICB9XG4gICAgc2NyaXB0c0xvYWRlZC50aGVuKChDaGFydE1vZHVsZSkgPT4ge1xuICAgICAgdGhpcy5DaGFydENsYXNzID0gQ2hhcnRNb2R1bGUuZGVmYXVsdDtcbiAgICAgIHRoaXMub25Qcm9wc0NoYW5nZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuJC5jaGFydFRhcmdldCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaXJvbi1yZXNpemVcIiwgdGhpcy5fcmVzaXplTGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzaXplVGltZXIpO1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgb25Qcm9wc0NoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQgfHwgIXRoaXMuQ2hhcnRDbGFzcyB8fCAhdGhpcy5kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBfY3VzdG9tVG9vbHRpcHModG9vbHRpcCkge1xuICAgIC8vIEhpZGUgaWYgbm8gdG9vbHRpcFxuICAgIGlmICh0b29sdGlwLm9wYWNpdHkgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJvcGFjaXR5XCJdLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2V0IGNhcmV0IFBvc2l0aW9uXG4gICAgaWYgKHRvb2x0aXAueUFsaWduKSB7XG4gICAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwieUFsaWduXCJdLCB0b29sdGlwLnlBbGlnbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ5QWxpZ25cIl0sIFwibm8tdHJhbnNmb3JtXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gdG9vbHRpcC50aXRsZSA/IHRvb2x0aXAudGl0bGVbMF0gfHwgXCJcIiA6IFwiXCI7XG4gICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInRpdGxlXCJdLCB0aXRsZSk7XG5cbiAgICBjb25zdCBib2R5TGluZXMgPSB0b29sdGlwLmJvZHkubWFwKChuKSA9PiBuLmxpbmVzKTtcblxuICAgIC8vIFNldCBUZXh0XG4gICAgaWYgKHRvb2x0aXAuYm9keSkge1xuICAgICAgdGhpcy5zZXQoXG4gICAgICAgIFtcInRvb2x0aXBcIiwgXCJsaW5lc1wiXSxcbiAgICAgICAgYm9keUxpbmVzLm1hcCgoYm9keSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IHRvb2x0aXAubGFiZWxDb2xvcnNbaV07XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMuYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICBiZ0NvbG9yOiBjb2xvcnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgdGV4dDogYm9keS5qb2luKFwiXFxuXCIpLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHRoaXMuJC5jaGFydFRhcmdldC5jbGllbnRXaWR0aDtcbiAgICBsZXQgcG9zaXRpb25YID0gdG9vbHRpcC5jYXJldFg7XG4gICAgY29uc3QgcG9zaXRpb25ZID0gdGhpcy5fY2hhcnQuY2FudmFzLm9mZnNldFRvcCArIHRvb2x0aXAuY2FyZXRZO1xuICAgIGlmICh0b29sdGlwLmNhcmV0WCArIDEwMCA+IHBhcmVudFdpZHRoKSB7XG4gICAgICBwb3NpdGlvblggPSBwYXJlbnRXaWR0aCAtIDEwMDtcbiAgICB9IGVsc2UgaWYgKHRvb2x0aXAuY2FyZXRYIDwgMTAwKSB7XG4gICAgICBwb3NpdGlvblggPSAxMDA7XG4gICAgfVxuICAgIHBvc2l0aW9uWCArPSB0aGlzLl9jaGFydC5jYW52YXMub2Zmc2V0TGVmdDtcbiAgICAvLyBEaXNwbGF5LCBwb3NpdGlvbiwgYW5kIHNldCBzdHlsZXMgZm9yIGZvbnRcbiAgICB0aGlzLnRvb2x0aXAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRvb2x0aXAsIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBsZWZ0OiBgJHtwb3NpdGlvblh9cHhgLFxuICAgICAgdG9wOiBgJHtwb3NpdGlvbll9cHhgLFxuICAgIH0pO1xuICB9XG5cbiAgX2xlZ2VuZENsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXQubm9kZU5hbWUgIT09IFwiTElcIikge1xuICAgICAgLy8gdXNlciBjbGlja2VkIGNoaWxkLCBmaW5kIHBhcmVudCBMSVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gZXZlbnQubW9kZWwuaXRlbXNJbmRleDtcblxuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9jaGFydC5nZXREYXRhc2V0TWV0YShpbmRleCk7XG4gICAgbWV0YS5oaWRkZW4gPVxuICAgICAgbWV0YS5oaWRkZW4gPT09IG51bGwgPyAhdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0c1tpbmRleF0uaGlkZGVuIDogbnVsbDtcbiAgICB0aGlzLnNldChcbiAgICAgIFtcIm1ldGFzXCIsIGluZGV4LCBcImhpZGRlblwiXSxcbiAgICAgIHRoaXMuX2NoYXJ0LmlzRGF0YXNldFZpc2libGUoaW5kZXgpID8gbnVsbCA6IFwiaGlkZGVuXCJcbiAgICApO1xuICAgIHRoaXMuX2NoYXJ0LnVwZGF0ZSgpO1xuICB9XG5cbiAgX2RyYXdMZWdlbmQoKSB7XG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLl9jaGFydDtcbiAgICAvLyBOZXcgZGF0YSBmb3Igb2xkIGdyYXBoLiBLZWVwIG1ldGFkYXRhLlxuICAgIGNvbnN0IHByZXNlcnZlVmlzaWJpbGl0eSA9XG4gICAgICB0aGlzLl9vbGRJZGVudGlmaWVyICYmIHRoaXMuaWRlbnRpZmllciA9PT0gdGhpcy5fb2xkSWRlbnRpZmllcjtcbiAgICB0aGlzLl9vbGRJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuICAgIHRoaXMuc2V0KFxuICAgICAgXCJtZXRhc1wiLFxuICAgICAgdGhpcy5fY2hhcnQuZGF0YS5kYXRhc2V0cy5tYXAoKHgsIGkpID0+ICh7XG4gICAgICAgIGxhYmVsOiB4LmxhYmVsLFxuICAgICAgICBjb2xvcjogeC5jb2xvcixcbiAgICAgICAgYmdDb2xvcjogeC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGhpZGRlbjpcbiAgICAgICAgICBwcmVzZXJ2ZVZpc2liaWxpdHkgJiYgaSA8IHRoaXMubWV0YXMubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMubWV0YXNbaV0uaGlkZGVuXG4gICAgICAgICAgICA6ICFjaGFydC5pc0RhdGFzZXRWaXNpYmxlKGkpLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICBsZXQgdXBkYXRlTmVlZGVkID0gZmFsc2U7XG4gICAgaWYgKHByZXNlcnZlVmlzaWJpbGl0eSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1ldGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBjaGFydC5nZXREYXRhc2V0TWV0YShpKTtcbiAgICAgICAgaWYgKCEhbWV0YS5oaWRkZW4gIT09ICEhdGhpcy5tZXRhc1tpXS5oaWRkZW4pIHVwZGF0ZU5lZWRlZCA9IHRydWU7XG4gICAgICAgIG1ldGEuaGlkZGVuID0gdGhpcy5tZXRhc1tpXS5oaWRkZW4gPyB0cnVlIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVwZGF0ZU5lZWRlZCkge1xuICAgICAgY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICAgIHRoaXMudW5pdCA9IHRoaXMuZGF0YS51bml0O1xuICB9XG5cbiAgX2Zvcm1hdFRpY2tWYWx1ZSh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZXNbaW5kZXhdLnZhbHVlKTtcbiAgICByZXR1cm4gZm9ybWF0VGltZShkYXRlKTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmRhdGE7XG4gICAgY29uc3QgY3R4ID0gdGhpcy4kLmNoYXJ0Q2FudmFzO1xuXG4gICAgaWYgKCghZGF0YS5kYXRhc2V0cyB8fCAhZGF0YS5kYXRhc2V0cy5sZW5ndGgpICYmICF0aGlzLl9jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnR5cGUgIT09IFwidGltZWxpbmVcIiAmJiBkYXRhLmRhdGFzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNudCA9IGRhdGEuZGF0YXNldHMubGVuZ3RoO1xuICAgICAgY29uc3QgY29sb3JzID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRDb2xvckxpc3QoY250KTtcbiAgICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjbnQ7IGxvb3BJKyspIHtcbiAgICAgICAgZGF0YS5kYXRhc2V0c1tsb29wSV0uYm9yZGVyQ29sb3IgPSBjb2xvcnNbbG9vcEldLnJnYlN0cmluZygpO1xuICAgICAgICBkYXRhLmRhdGFzZXRzW2xvb3BJXS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbbG9vcEldXG4gICAgICAgICAgLmFscGhhKDAuNilcbiAgICAgICAgICAucmdiYVN0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgdGhpcy5fY2hhcnQuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLl9jaGFydC51cGRhdGUoeyBkdXJhdGlvbjogMCB9KTtcbiAgICAgIGlmICh0aGlzLmlzVGltZWxpbmUpIHtcbiAgICAgICAgdGhpcy5fY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBkYXRhLmxlbmd0aCA+IDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRhdGEuZGF0YXNldHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VzdG9tVG9vbHRpcHMoeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgY29uc3QgcGx1Z2lucyA9IFt7IGFmdGVyUmVuZGVyOiAoKSA9PiB0aGlzLl9zZXRSZW5kZXJlZCh0cnVlKSB9XTtcbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBjdXN0b206IHRoaXMuX2N1c3RvbVRvb2x0aXBzLmJpbmQodGhpcyksXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3BhbkdhcHM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgZm9udDogXCIxMnB4ICdSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnc2Fucy1zZXJpZidcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZShvcHRpb25zLCB0aGlzLmRhdGEub3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcy5jYWxsYmFjayA9IHRoaXMuX2Zvcm1hdFRpY2tWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gXCJ0aW1lbGluZVwiKSB7XG4gICAgICAgIHRoaXMuc2V0KFwiaXNUaW1lbGluZVwiLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX2NvbG9yRnVuYyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sb3JHZW5lcmF0b3IoXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3JzLnN0YXRpY0NvbG9ycyxcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvcnMuc3RhdGljQ29sb3JJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbGVtZW50cy5jb2xvckZ1bmN0aW9uID0gdGhpcy5fY29sb3JGdW5jO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcyA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQuY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIxNjBweFwiO1xuICAgICAgfVxuICAgICAgY29uc3QgY2hhcnREYXRhID0ge1xuICAgICAgICB0eXBlOiB0aGlzLmRhdGEudHlwZSxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLmRhdGEsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICB9O1xuICAgICAgLy8gQXN5bmMgcmVzaXplIGFmdGVyIGRvbSB1cGRhdGVcbiAgICAgIHRoaXMuX2NoYXJ0ID0gbmV3IHRoaXMuQ2hhcnRDbGFzcyhjdHgsIGNoYXJ0RGF0YSk7XG4gICAgICBpZiAodGhpcy5pc1RpbWVsaW5lICE9PSB0cnVlICYmIHRoaXMuZGF0YS5sZWdlbmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xlZ2VuZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemVDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5fY2hhcnQpIHJldHVybjtcbiAgICAvLyBDaGFydCBub3QgcmVhZHlcbiAgICBpZiAodGhpcy5fcmVzaXplVGltZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcmVzaXplVGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnJlc2l6ZUNoYXJ0LmJpbmQodGhpcyksIDEwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9yZXNpemVUaW1lciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuX3Jlc2l6ZUNoYXJ0KCk7XG4gIH1cblxuICBfcmVzaXplQ2hhcnQoKSB7XG4gICAgY29uc3QgY2hhcnRUYXJnZXQgPSB0aGlzLiQuY2hhcnRUYXJnZXQ7XG5cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICBpZiAoZGF0YS5kYXRhc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNUaW1lbGluZSkge1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVjYWxjdWxhdGUgY2hhcnQgaGVpZ2h0IGZvciBUaW1lbGluZSBjaGFydFxuICAgIGNvbnN0IGFyZWFUb3AgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEudG9wO1xuICAgIGNvbnN0IGFyZWFCb3QgPSB0aGlzLl9jaGFydC5jaGFydEFyZWEuYm90dG9tO1xuICAgIGNvbnN0IGhlaWdodDEgPSB0aGlzLl9jaGFydC5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChhcmVhQm90ID4gMCkge1xuICAgICAgdGhpcy5fYXhpc0hlaWdodCA9IGhlaWdodDEgLSBhcmVhQm90ICsgYXJlYVRvcDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2F4aXNIZWlnaHQpIHtcbiAgICAgIGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgdGhpcy5fY2hhcnQucmVzaXplKCk7XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9heGlzSGVpZ2h0KSB7XG4gICAgICBjb25zdCBjbnQgPSBkYXRhLmRhdGFzZXRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IDMwICogY250ICsgdGhpcy5fYXhpc0hlaWdodCArIFwicHhcIjtcbiAgICAgIGlmIChjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgIT09IHRhcmdldEhlaWdodCkge1xuICAgICAgICBjaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXRIZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgSFNMIGRpc3RyaWJ1dGVkIGNvbG9yIGxpc3RcbiAgc3RhdGljIGdldENvbG9yTGlzdChjb3VudCkge1xuICAgIGxldCBwcm9jZXNzTCA9IGZhbHNlO1xuICAgIGlmIChjb3VudCA+IDEwKSB7XG4gICAgICBwcm9jZXNzTCA9IHRydWU7XG4gICAgICBjb3VudCA9IE1hdGguY2VpbChjb3VudCAvIDIpO1xuICAgIH1cbiAgICBjb25zdCBoMSA9IDM2MCAvIGNvdW50O1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGxvb3BJID0gMDsgbG9vcEkgPCBjb3VudDsgbG9vcEkrKykge1xuICAgICAgcmVzdWx0W2xvb3BJXSA9IENvbG9yKCkuaHNsKGgxICogbG9vcEksIDgwLCAzOCk7XG4gICAgICBpZiAocHJvY2Vzc0wpIHtcbiAgICAgICAgcmVzdWx0W2xvb3BJICsgY291bnRdID0gQ29sb3IoKS5oc2woaDEgKiBsb29wSSwgODAsIDYyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb2xvckdlbmVyYXRvcihzdGF0aWNDb2xvcnMsIHN0YXJ0SW5kZXgpIHtcbiAgICAvLyBLbm93biBjb2xvcnMgZm9yIHN0YXRpYyBkYXRhLFxuICAgIC8vIHNob3VsZCBhZGQgZm9yIHZlcnkgY29tbW9uIHN0YXRlIHN0cmluZyBtYW51YWxseS5cbiAgICAvLyBQYWxldHRlIG1vZGlmaWVkIGZyb20gaHR0cDovL2dvb2dsZS5naXRodWIuaW8vcGFsZXR0ZS5qcy8gbXBuNjUsIEFwYWNoZSAyLjBcbiAgICBjb25zdCBwYWxldHRlID0gW1xuICAgICAgXCJmZjAwMjlcIixcbiAgICAgIFwiNjZhNjFlXCIsXG4gICAgICBcIjM3N2ViOFwiLFxuICAgICAgXCI5ODRlYTNcIixcbiAgICAgIFwiMDBkMmQ1XCIsXG4gICAgICBcImZmN2YwMFwiLFxuICAgICAgXCJhZjhkMDBcIixcbiAgICAgIFwiN2Y4MGNkXCIsXG4gICAgICBcImIzZTkwMFwiLFxuICAgICAgXCJjNDJlNjBcIixcbiAgICAgIFwiYTY1NjI4XCIsXG4gICAgICBcImY3ODFiZlwiLFxuICAgICAgXCI4ZGQzYzdcIixcbiAgICAgIFwiYmViYWRhXCIsXG4gICAgICBcImZiODA3MlwiLFxuICAgICAgXCI4MGIxZDNcIixcbiAgICAgIFwiZmRiNDYyXCIsXG4gICAgICBcImZjY2RlNVwiLFxuICAgICAgXCJiYzgwYmRcIixcbiAgICAgIFwiZmZlZDZmXCIsXG4gICAgICBcImM0ZWFmZlwiLFxuICAgICAgXCJjZjhjMDBcIixcbiAgICAgIFwiMWI5ZTc3XCIsXG4gICAgICBcImQ5NWYwMlwiLFxuICAgICAgXCJlNzI5OGFcIixcbiAgICAgIFwiZTZhYjAyXCIsXG4gICAgICBcImE2NzYxZFwiLFxuICAgICAgXCIwMDk3ZmZcIixcbiAgICAgIFwiMDBkMDY3XCIsXG4gICAgICBcImY0MzYwMFwiLFxuICAgICAgXCI0YmE5M2JcIixcbiAgICAgIFwiNTc3OWJiXCIsXG4gICAgICBcIjkyN2FjY1wiLFxuICAgICAgXCI5N2VlM2ZcIixcbiAgICAgIFwiYmYzOTQ3XCIsXG4gICAgICBcIjlmNWIwMFwiLFxuICAgICAgXCJmNDg3NThcIixcbiAgICAgIFwiOGNhZWQ2XCIsXG4gICAgICBcImYyYjk0ZlwiLFxuICAgICAgXCJlZmYyNmVcIixcbiAgICAgIFwiZTQzODcyXCIsXG4gICAgICBcImQ5YjEwMFwiLFxuICAgICAgXCI5ZDdhMDBcIixcbiAgICAgIFwiNjk4Y2ZmXCIsXG4gICAgICBcImQ5ZDlkOVwiLFxuICAgICAgXCIwMGQyN2VcIixcbiAgICAgIFwiZDA2ODAwXCIsXG4gICAgICBcIjAwOWY4MlwiLFxuICAgICAgXCJjNDkyMDBcIixcbiAgICAgIFwiY2JlOGZmXCIsXG4gICAgICBcImZlY2RkZlwiLFxuICAgICAgXCJjMjdlYjZcIixcbiAgICAgIFwiOGNkMmNlXCIsXG4gICAgICBcImM0YjhkOVwiLFxuICAgICAgXCJmODgzYjBcIixcbiAgICAgIFwiYTQ5MTAwXCIsXG4gICAgICBcImY0ODgwMFwiLFxuICAgICAgXCIyN2QwZGZcIixcbiAgICAgIFwiYTA0YTliXCIsXG4gICAgXTtcbiAgICBmdW5jdGlvbiBnZXRDb2xvckluZGV4KGlkeCkge1xuICAgICAgLy8gUmV1c2UgdGhlIGNvbG9yIGlmIGluZGV4IHRvbyBsYXJnZS5cbiAgICAgIHJldHVybiBDb2xvcihcIiNcIiArIHBhbGV0dGVbaWR4ICUgcGFsZXR0ZS5sZW5ndGhdKTtcbiAgICB9XG4gICAgY29uc3QgY29sb3JEaWN0ID0ge307XG4gICAgbGV0IGNvbG9ySW5kZXggPSAwO1xuICAgIGlmIChzdGFydEluZGV4ID4gMCkgY29sb3JJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKHN0YXRpY0NvbG9ycykge1xuICAgICAgT2JqZWN0LmtleXMoc3RhdGljQ29sb3JzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGMxID0gc3RhdGljQ29sb3JzW2NdO1xuICAgICAgICBpZiAoaXNGaW5pdGUoYzEpKSB7XG4gICAgICAgICAgY29sb3JEaWN0W2MudG9Mb3dlckNhc2UoKV0gPSBnZXRDb2xvckluZGV4KGMxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvckRpY3RbYy50b0xvd2VyQ2FzZSgpXSA9IENvbG9yKHN0YXRpY0NvbG9yc1tjXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDdXN0b20gY29sb3IgYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoX18sIGRhdGEpIHtcbiAgICAgIGxldCByZXQ7XG4gICAgICBjb25zdCBuYW1lID0gZGF0YVszXTtcbiAgICAgIGlmIChuYW1lID09PSBudWxsKSByZXR1cm4gQ29sb3IoKS5oc2woMCwgNDAsIDM4KTtcbiAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHJldHVybiBDb2xvcigpLmhzbCgxMjAsIDQwLCAzOCk7XG4gICAgICBjb25zdCBuYW1lMSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBjb2xvckRpY3RbbmFtZTFdO1xuICAgICAgfVxuICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGdldENvbG9ySW5kZXgoY29sb3JJbmRleCk7XG4gICAgICAgIGNvbG9ySW5kZXgrKztcbiAgICAgICAgY29sb3JEaWN0W25hbWUxXSA9IHJldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiBnZXRDb2xvcjtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2hhcnQtYmFzZVwiLCBIYUNoYXJ0QmFzZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNoYXJ0LWJhc2VcbiAgICAgICAgaWQ9XCJjaGFydFwiXG4gICAgICAgIGRhdGE9XCJbW2NoYXJ0RGF0YV1dXCJcbiAgICAgICAgaWRlbnRpZmllcj1cIltbaWRlbnRpZmllcl1dXCJcbiAgICAgICAgcmVuZGVyZWQ9XCJ7e3JlbmRlcmVkfX1cIlxuICAgICAgPjwvaGEtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICB1bml0OiBTdHJpbmcsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG5cbiAgICAgIGlzU2luZ2xlRGV2aWNlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVuZFRpbWU6IE9iamVjdCxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29uUmVuZGVyZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGF0YUNoYW5nZWQoZGF0YSwgZW5kVGltZSwgaXNTaW5nbGVEZXZpY2UpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIF9vblJlbmRlcmVkQ2hhbmdlZChyZW5kZXJlZCkge1xuICAgIGlmIChyZW5kZXJlZCkgdGhpcy5hbmltYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBhbmltYXRlSGVpZ2h0KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSB0aGlzLiQuY2hhcnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLnVuaXQ7XG4gICAgY29uc3QgZGV2aWNlU3RhdGVzID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGFzZXRzID0gW107XG4gICAgbGV0IGVuZFRpbWU7XG5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGV2aWNlU3RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIHJldHVybiBpc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogbnVsbDtcbiAgICB9XG5cbiAgICBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgLy8gR2V0IHRoZSBoaWdoZXN0IGRhdGUgZnJvbSB0aGUgbGFzdCBkYXRlIG9mIGVhY2ggZGV2aWNlXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBkZXZpY2VTdGF0ZXMubWFwKFxuICAgICAgICAgICAgKGRldlN0cykgPT5cbiAgICAgICAgICAgICAgbmV3IERhdGUoZGV2U3RzLnN0YXRlc1tkZXZTdHMuc3RhdGVzLmxlbmd0aCAtIDFdLmxhc3RfY2hhbmdlZClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgZGV2aWNlU3RhdGVzLmZvckVhY2goKHN0YXRlcykgPT4ge1xuICAgICAgY29uc3QgZG9tYWluID0gc3RhdGVzLmRvbWFpbjtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tzdGF0ZXMuZW50aXR5X2lkXSB8fCBzdGF0ZXMubmFtZTtcbiAgICAgIC8vIGFycmF5IGNvbnRhaW5pbmcgW3ZhbHVlMSwgdmFsdWUyLCBldGNdXG4gICAgICBsZXQgcHJldlZhbHVlcztcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZnVuY3Rpb24gcHVzaERhdGEodGltZXN0YW1wLCBkYXRhdmFsdWVzKSB7XG4gICAgICAgIGlmICghZGF0YXZhbHVlcykgcmV0dXJuO1xuICAgICAgICBpZiAodGltZXN0YW1wID4gZW5kVGltZSkge1xuICAgICAgICAgIC8vIERyb3AgZGF0YXBvaW50cyB0aGF0IGFyZSBhZnRlciB0aGUgcmVxdWVzdGVkIGVuZFRpbWUuIFRoaXMgY291bGQgaGFwcGVuIGlmXG4gICAgICAgICAgLy8gZW5kVGltZSBpcyBcIm5vd1wiIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICBkLmRhdGEucHVzaCh7IHg6IHRpbWVzdGFtcCwgeTogZGF0YXZhbHVlc1tpXSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZWYWx1ZXMgPSBkYXRhdmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRDb2x1bW4obmFtZVksIHN0ZXAsIGZpbGwpIHtcbiAgICAgICAgbGV0IGRhdGFGaWxsID0gZmFsc2U7XG4gICAgICAgIGxldCBkYXRhU3RlcCA9IGZhbHNlO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgIGRhdGFGaWxsID0gXCJvcmlnaW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgIGRhdGFTdGVwID0gXCJiZWZvcmVcIjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBuYW1lWSxcbiAgICAgICAgICBmaWxsOiBkYXRhRmlsbCxcbiAgICAgICAgICBzdGVwcGVkTGluZTogZGF0YVN0ZXAsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgdW5pdFRleHQ6IHVuaXQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRvbWFpbiA9PT0gXCJ0aGVybW9zdGF0XCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiB8fFxuICAgICAgICBkb21haW4gPT09IFwid2F0ZXJfaGVhdGVyXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBpc0hlYXRpbmcgPVxuICAgICAgICAgIGRvbWFpbiA9PT0gXCJjbGltYXRlXCJcbiAgICAgICAgICAgID8gKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uID09PSBcImhlYXRpbmdcIlxuICAgICAgICAgICAgOiAoc3RhdGUpID0+IHN0YXRlLnN0YXRlID09PSBcImhlYXRcIjtcbiAgICAgICAgY29uc3QgaXNDb29saW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiXG4gICAgICAgICAgICA/IChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcy5odmFjX2FjdGlvbiA9PT0gXCJjb29saW5nXCJcbiAgICAgICAgICAgIDogKHN0YXRlKSA9PiBzdGF0ZS5zdGF0ZSA9PT0gXCJjb29sXCI7XG5cbiAgICAgICAgLy8gV2UgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZXJtb3N0YXRzIHRoYXQgaGF2ZSBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuICAgICAgICAvLyByYW5nZSB2ZXJzdXMgb25lcyB0aGF0IGhhdmUganVzdCBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuXG4gICAgICAgIC8vIFVzaW5nIHN0ZXAgY2hhcnQgYnkgc3RlcC1iZWZvcmUgc28gbWFudWFsbHkgaW50ZXJwb2xhdGlvbiBub3QgbmVlZGVkLlxuICAgICAgICBjb25zdCBoYXNUYXJnZXRSYW5nZSA9IHN0YXRlcy5zdGF0ZXMuc29tZShcbiAgICAgICAgICAoc3RhdGUpID0+XG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT09XG4gICAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGhhc0hlYXQgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNIZWF0aW5nKTtcbiAgICAgICAgY29uc3QgaGFzQ29vbCA9IHN0YXRlcy5zdGF0ZXMuc29tZShpc0Nvb2xpbmcpO1xuXG4gICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgY3VycmVudCB0ZW1wZXJhdHVyZVwiLCB0cnVlKTtcbiAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICBhZGRDb2x1bW4obmFtZSArIFwiIGhlYXRpbmdcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgLy8gVGhlIFwiaGVhdGluZ1wiIHNlcmllcyB1c2VzIHN0ZXBwZWRBcmVhIHRvIHNoYWRlIHRoZSBhcmVhIGJlbG93IHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gdGVtcGVyYXR1cmUgd2hlbiB0aGUgdGhlcm1vc3RhdCBpcyBjYWxsaW5nIGZvciBoZWF0LlxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiBjb29saW5nXCIsIHRydWUsIHRydWUpO1xuICAgICAgICAgIC8vIFRoZSBcImNvb2xpbmdcIiBzZXJpZXMgdXNlcyBzdGVwcGVkQXJlYSB0byBzaGFkZSB0aGUgYXJlYSBiZWxvdyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHRlbXBlcmF0dXJlIHdoZW4gdGhlIHRoZXJtb3N0YXQgaXMgY2FsbGluZyBmb3IgaGVhdC5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlIGhpZ2hcIiwgdHJ1ZSk7XG4gICAgICAgICAgYWRkQ29sdW1uKG5hbWUgKyBcIiB0YXJnZXQgdGVtcGVyYXR1cmUgbG93XCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENvbHVtbihuYW1lICsgXCIgdGFyZ2V0IHRlbXBlcmF0dXJlXCIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVzLnN0YXRlcy5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGlmICghc3RhdGUuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IGN1clRlbXAgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUpO1xuICAgICAgICAgIGNvbnN0IHNlcmllcyA9IFtjdXJUZW1wXTtcbiAgICAgICAgICBpZiAoaGFzSGVhdCkge1xuICAgICAgICAgICAgc2VyaWVzLnB1c2goaXNIZWF0aW5nKHN0YXRlKSA/IGN1clRlbXAgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0Nvb2wpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzQ29vbGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNUYXJnZXRSYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SGlnaCA9IHNhZmVQYXJzZUZsb2F0KFxuICAgICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRMb3cgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvdyk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXRIaWdoLCB0YXJnZXRMb3cpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSwgc2VyaWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25seSBkaXNhYmxlIGludGVycG9sYXRpb24gZm9yIHNlbnNvcnNcbiAgICAgICAgY29uc3QgaXNTdGVwID0gZG9tYWluID09PSBcInNlbnNvclwiO1xuICAgICAgICBhZGRDb2x1bW4obmFtZSwgaXNTdGVwKTtcblxuICAgICAgICBsZXQgbGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3REYXRlID0gbnVsbDtcbiAgICAgICAgbGV0IGxhc3ROdWxsRGF0ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gUHJvY2VzcyBjaGFydCBkYXRhLlxuICAgICAgICAvLyBXaGVuIHN0YXRlIGlzIGB1bmtub3duYCwgY2FsY3VsYXRlIHRoZSB2YWx1ZSBhbmQgYnJlYWsgdGhlIGxpbmUuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLnN0YXRlKTtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlVGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdE51bGxEYXRlVGltZSA9IGxhc3ROdWxsRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0RGF0ZVRpbWUgPSBsYXN0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCB0bXBWYWx1ZSA9XG4gICAgICAgICAgICAgICh2YWx1ZSAtIGxhc3RWYWx1ZSkgKlxuICAgICAgICAgICAgICAgICgobGFzdE51bGxEYXRlVGltZSAtIGxhc3REYXRlVGltZSkgL1xuICAgICAgICAgICAgICAgICAgKGRhdGVUaW1lIC0gbGFzdERhdGVUaW1lKSkgK1xuICAgICAgICAgICAgICBsYXN0VmFsdWU7XG4gICAgICAgICAgICBwdXNoRGF0YShsYXN0TnVsbERhdGUsIFt0bXBWYWx1ZV0pO1xuICAgICAgICAgICAgcHVzaERhdGEobmV3IERhdGUobGFzdE51bGxEYXRlVGltZSArIDEpLCBbbnVsbF0pO1xuICAgICAgICAgICAgcHVzaERhdGEoZGF0ZSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICBsYXN0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBsYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBsYXN0TnVsbERhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHZhbHVlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPT09IG51bGwgJiZcbiAgICAgICAgICAgIGxhc3RWYWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFzdE51bGxEYXRlID0gZGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYW4gZW50cnkgZm9yIGZpbmFsIHZhbHVlc1xuICAgICAgcHVzaERhdGEoZW5kVGltZSwgcHJldlZhbHVlcywgZmFsc2UpO1xuXG4gICAgICAvLyBDb25jYXQgdHdvIGFycmF5c1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZGF0YXNldHMsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0VG9vbHRpcFRpdGxlID0gKGl0ZW1zLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXNbMF07XG4gICAgICBjb25zdCBkYXRlID0gZGF0YS5kYXRhc2V0c1tpdGVtLmRhdGFzZXRJbmRleF0uZGF0YVtpdGVtLmluZGV4XS54O1xuXG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZVRpbWUoZGF0ZSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICB1bml0OiB1bml0LFxuICAgICAgbGVnZW5kOiAhdGhpcy5pc1NpbmdsZURldmljZSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZWFjaFwiLFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgdGl0bGU6IGZvcm1hdFRvb2x0aXBUaXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgfSxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgdGVuc2lvbjogMC4xLFxuICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgIGhpdFJhZGl1czogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgZmlsbGVyOiB7XG4gICAgICAgICAgICBwcm9wYWdhdGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW10sXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IGNoYXJ0T3B0aW9ucztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXCIsIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2VudGl0eS9oYS1jaGFydC1iYXNlXCI7XG5cbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRUaW1lbGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtyZW5kZXJlZF0pIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2hhcnQtYmFzZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2hhcnQtYmFzZVxuICAgICAgICBkYXRhPVwiW1tjaGFydERhdGFdXVwiXG4gICAgICAgIHJlbmRlcmVkPVwie3tyZW5kZXJlZH19XCJcbiAgICAgICAgcnRsPVwie3tydGx9fVwiXG4gICAgICA+PC9oYS1jaGFydC1iYXNlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGNoYXJ0RGF0YTogT2JqZWN0LFxuICAgICAgZGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgbmFtZXM6IE9iamVjdCxcbiAgICAgIG5vU2luZ2xlOiBCb29sZWFuLFxuICAgICAgZW5kVGltZTogRGF0ZSxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGF0YUNoYW5nZWQoZGF0YSwgZW5kVGltZSwgbG9jYWxpemUsIGxhbmd1YWdlKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIGRhdGFDaGFuZ2VkKCkge1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgY29uc3Qgc3RhdGljQ29sb3JzID0ge1xuICAgICAgb246IDEsXG4gICAgICBvZmY6IDAsXG4gICAgICB1bmF2YWlsYWJsZTogXCIjYTBhMGEwXCIsXG4gICAgICB1bmtub3duOiBcIiM2MDYwNjBcIixcbiAgICAgIGlkbGU6IDIsXG4gICAgfTtcbiAgICBsZXQgc3RhdGVIaXN0b3J5ID0gdGhpcy5kYXRhO1xuXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZUhpc3RvcnkpIHtcbiAgICAgIHN0YXRlSGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKFxuICAgICAgc3RhdGVIaXN0b3J5LnJlZHVjZShcbiAgICAgICAgKG1pblRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICBNYXRoLm1pbihtaW5UaW1lLCBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVswXS5sYXN0X2NoYW5nZWQpKSxcbiAgICAgICAgbmV3IERhdGUoKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBlbmQgdGltZSBpcyBNYXRoLm1heChzdGFydFRpbWUsIGxhc3RfZXZlbnQpXG4gICAgbGV0IGVuZFRpbWUgPVxuICAgICAgdGhpcy5lbmRUaW1lIHx8XG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVIaXN0b3J5LnJlZHVjZShcbiAgICAgICAgICAobWF4VGltZSwgc3RhdGVJbmZvKSA9PlxuICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgIG1heFRpbWUsXG4gICAgICAgICAgICAgIG5ldyBEYXRlKHN0YXRlSW5mby5kYXRhW3N0YXRlSW5mby5kYXRhLmxlbmd0aCAtIDFdLmxhc3RfY2hhbmdlZClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgc3RhcnRUaW1lXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICBpZiAoZW5kVGltZSA+IG5ldyBEYXRlKCkpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIGNvbnN0IGRhdGFzZXRzID0gW107XG4gICAgLy8gc3RhdGVIaXN0b3J5IGlzIGEgbGlzdCBvZiBsaXN0cyBvZiBzb3J0ZWQgc3RhdGUgb2JqZWN0c1xuICAgIGNvbnN0IG5hbWVzID0gdGhpcy5uYW1lcyB8fCB7fTtcbiAgICBzdGF0ZUhpc3RvcnkuZm9yRWFjaCgoc3RhdGVJbmZvKSA9PiB7XG4gICAgICBsZXQgbmV3TGFzdENoYW5nZWQ7XG4gICAgICBsZXQgcHJldlN0YXRlID0gbnVsbDtcbiAgICAgIGxldCBsb2NTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgcHJldkxhc3RDaGFuZ2VkID0gc3RhcnRUaW1lO1xuICAgICAgY29uc3QgZW50aXR5RGlzcGxheSA9IG5hbWVzW3N0YXRlSW5mby5lbnRpdHlfaWRdIHx8IHN0YXRlSW5mby5uYW1lO1xuXG4gICAgICBjb25zdCBkYXRhUm93ID0gW107XG4gICAgICBzdGF0ZUluZm8uZGF0YS5mb3JFYWNoKChzdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgY29uc3QgdGltZVN0YW1wID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcbiAgICAgICAgaWYgKG5ld1N0YXRlID09PSB1bmRlZmluZWQgfHwgbmV3U3RhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgICBuZXdTdGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVTdGFtcCA+IGVuZFRpbWUpIHtcbiAgICAgICAgICAvLyBEcm9wIGRhdGFwb2ludHMgdGhhdCBhcmUgYWZ0ZXIgdGhlIHJlcXVlc3RlZCBlbmRUaW1lLiBUaGlzIGNvdWxkIGhhcHBlbiBpZlxuICAgICAgICAgIC8vIGVuZFRpbWUgaXMgJ25vdycgYW5kIGNsaWVudCB0aW1lIGlzIG5vdCBpbiBzeW5jIHdpdGggc2VydmVyIHRpbWUuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2U3RhdGUgIT09IG51bGwgJiYgbmV3U3RhdGUgIT09IHByZXZTdGF0ZSkge1xuICAgICAgICAgIG5ld0xhc3RDaGFuZ2VkID0gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKTtcblxuICAgICAgICAgIGRhdGFSb3cucHVzaChbcHJldkxhc3RDaGFuZ2VkLCBuZXdMYXN0Q2hhbmdlZCwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuXG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXdMYXN0Q2hhbmdlZDtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICBwcmV2U3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICBsb2NTdGF0ZSA9IHN0YXRlLnN0YXRlX2xvY2FsaXplO1xuICAgICAgICAgIHByZXZMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGFSb3cucHVzaChbcHJldkxhc3RDaGFuZ2VkLCBlbmRUaW1lLCBsb2NTdGF0ZSwgcHJldlN0YXRlXSk7XG4gICAgICB9XG4gICAgICBkYXRhc2V0cy5wdXNoKHsgZGF0YTogZGF0YVJvdyB9KTtcbiAgICAgIGxhYmVscy5wdXNoKGVudGl0eURpc3BsYXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZm9ybWF0VG9vbHRpcExhYmVsID0gKGl0ZW0sIGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGRhdGEuZGF0YXNldHNbaXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbaXRlbS5pbmRleF07XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gZm9ybWF0RGF0ZVRpbWUodmFsdWVzWzBdLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgICAgY29uc3QgZW5kID0gZm9ybWF0RGF0ZVRpbWUodmFsdWVzWzFdLCB0aGlzLmhhc3MubGFuZ3VhZ2UpO1xuICAgICAgY29uc3Qgc3RhdGUgPSB2YWx1ZXNbMl07XG5cbiAgICAgIHJldHVybiBbc3RhdGUsIHN0YXJ0LCBlbmRdO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFydE9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiBcInRpbWVsaW5lXCIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBsYWJlbDogZm9ybWF0VG9vbHRpcExhYmVsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWFqb3I6IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhZnRlclNldERpbWVuc2lvbnM6ICh5YXhlKSA9PiB7XG4gICAgICAgICAgICAgICAgeWF4ZS5tYXhXaWR0aCA9IHlheGUuY2hhcnQud2lkdGggKiAwLjE4O1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fY29tcHV0ZVJUTCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgc3RhdGljQ29sb3JzOiBzdGF0aWNDb2xvcnMsXG4gICAgICAgIHN0YXRpY0NvbG9ySW5kZXg6IDMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCIsXG4gIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmVcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtaGlzdG9yeS1jaGFydC1saW5lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jbGFzcyBTdGF0ZUhpc3RvcnlDaGFydHMgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvKiBoZWlnaHQgb2Ygc2luZ2xlIHRpbWVsaW5lIGNoYXJ0ID0gNThweCAqL1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDU4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNThweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlXG4gICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgY2xhc3M9XCJpbmZvXCJcbiAgICAgICAgaWY9XCJbW19jb21wdXRlSXNMb2FkaW5nKGlzTG9hZGluZ0RhdGEpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuaGlzdG9yeV9jaGFydHMubG9hZGluZ19oaXN0b3J5JyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzRW1wdHkoaXNMb2FkaW5nRGF0YSwgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuaGlzdG9yeV9jaGFydHMubm9faGlzdG9yeV9mb3VuZCcpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaGlzdG9yeURhdGEudGltZWxpbmUubGVuZ3RoXV1cIj5cbiAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnQtdGltZWxpbmVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIGRhdGE9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lXV1cIlxuICAgICAgICAgIGVuZC10aW1lPVwiW1tfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdywgaGlzdG9yeURhdGEpXV1cIlxuICAgICAgICAgIG5vLXNpbmdsZT1cIltbbm9TaW5nbGVdXVwiXG4gICAgICAgICAgbmFtZXM9XCJbW25hbWVzXV1cIlxuICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1toaXN0b3J5RGF0YS5saW5lXV1cIj5cbiAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnQtbGluZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgdW5pdD1cIltbaXRlbS51bml0XV1cIlxuICAgICAgICAgIGRhdGE9XCJbW2l0ZW0uZGF0YV1dXCJcbiAgICAgICAgICBpZGVudGlmaWVyPVwiW1tpdGVtLmlkZW50aWZpZXJdXVwiXG4gICAgICAgICAgaXMtc2luZ2xlLWRldmljZT1cIltbX2NvbXB1dGVJc1NpbmdsZUxpbmVDaGFydChpdGVtLmRhdGEsIG5vU2luZ2xlKV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuYW1lcz1cIltbbmFtZXNdXVwiXG4gICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaGlzdG9yeURhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuYW1lczogT2JqZWN0LFxuXG4gICAgICBpc0xvYWRpbmdEYXRhOiBCb29sZWFuLFxuXG4gICAgICBlbmRUaW1lOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHVwVG9Ob3c6IEJvb2xlYW4sXG4gICAgICBub1NpbmdsZTogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVJc1NpbmdsZUxpbmVDaGFydChkYXRhLCBub1NpbmdsZSkge1xuICAgIHJldHVybiAhbm9TaW5nbGUgJiYgZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIF9jb21wdXRlSXNFbXB0eShpc0xvYWRpbmdEYXRhLCBoaXN0b3J5RGF0YSkge1xuICAgIGNvbnN0IGhpc3RvcnlEYXRhRW1wdHkgPVxuICAgICAgIWhpc3RvcnlEYXRhIHx8XG4gICAgICAhaGlzdG9yeURhdGEudGltZWxpbmUgfHxcbiAgICAgICFoaXN0b3J5RGF0YS5saW5lIHx8XG4gICAgICAoaGlzdG9yeURhdGEudGltZWxpbmUubGVuZ3RoID09PSAwICYmIGhpc3RvcnlEYXRhLmxpbmUubGVuZ3RoID09PSAwKTtcbiAgICByZXR1cm4gIWlzTG9hZGluZ0RhdGEgJiYgaGlzdG9yeURhdGFFbXB0eTtcbiAgfVxuXG4gIF9jb21wdXRlSXNMb2FkaW5nKGlzTG9hZGluZykge1xuICAgIHJldHVybiBpc0xvYWRpbmcgJiYgIXRoaXMuaGlzdG9yeURhdGE7XG4gIH1cblxuICBfY29tcHV0ZUVuZFRpbWUoZW5kVGltZSwgdXBUb05vdykge1xuICAgIC8vIFdlIGRvbid0IHJlYWxseSBjYXJlIGFib3V0IHRoZSB2YWx1ZSBvZiBoaXN0b3J5RGF0YSwgYnV0IGlmIGl0IGNoYW5nZSB3ZSB3YW50IHRvIHVwZGF0ZVxuICAgIC8vIGVuZFRpbWUuXG4gICAgcmV0dXJuIHVwVG9Ob3cgPyBuZXcgRGF0ZSgpIDogZW5kVGltZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaGlzdG9yeS1jaGFydHNcIiwgU3RhdGVIaXN0b3J5Q2hhcnRzKTtcbiIsImltcG9ydCB7XG4gIGNvbXB1dGVIaXN0b3J5LFxuICBmZXRjaFJlY2VudCxcbiAgSGlzdG9yeVJlc3VsdCxcbiAgVGltZWxpbmVFbnRpdHksXG4gIExpbmVDaGFydFVuaXQsXG59IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5pbnRlcmZhY2UgQ2FjaGVDb25maWcge1xuICByZWZyZXNoOiBudW1iZXI7XG4gIGNhY2hlS2V5OiBzdHJpbmc7XG4gIGhvdXJzVG9TaG93OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWNoZWRSZXN1bHRzIHtcbiAgcHJvbTogUHJvbWlzZTxIaXN0b3J5UmVzdWx0PjtcbiAgc3RhcnRUaW1lOiBEYXRlO1xuICBlbmRUaW1lOiBEYXRlO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBIaXN0b3J5UmVzdWx0O1xufVxuXG4vLyBUaGlzIGlzIGEgZGlmZmVyZW50IGludGVyZmFjZSwgYSBkaWZmZXJlbnQgY2FjaGUgOihcbmludGVyZmFjZSBSZWNlbnRDYWNoZVJlc3VsdHMge1xuICBjcmVhdGVkOiBudW1iZXI7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGRhdGE6IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG59XG5cbmNvbnN0IFJFQ0VOVF9USFJFU0hPTEQgPSA2MDAwMDsgLy8gMSBtaW51dGVcbmNvbnN0IFJFQ0VOVF9DQUNIRTogeyBbY2FjaGVLZXk6IHN0cmluZ106IFJlY2VudENhY2hlUmVzdWx0cyB9ID0ge307XG5jb25zdCBzdGF0ZUhpc3RvcnlDYWNoZTogeyBbY2FjaGVLZXk6IHN0cmluZ106IENhY2hlZFJlc3VsdHMgfSA9IHt9O1xuXG4vLyBDYWNoZWQgdHlwZSAxIHVuY3Rpb24uIFdpdGhvdXQgY2FjaGUgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGdldFJlY2VudCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgc3RhcnRUaW1lOiBEYXRlLFxuICBlbmRUaW1lOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBlbnRpdHlJZDtcbiAgY29uc3QgY2FjaGUgPSBSRUNFTlRfQ0FDSEVbY2FjaGVLZXldO1xuXG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIERhdGUubm93KCkgLSBjYWNoZS5jcmVhdGVkIDwgUkVDRU5UX1RIUkVTSE9MRCAmJlxuICAgIGNhY2hlLmxhbmd1YWdlID09PSBsYW5ndWFnZVxuICApIHtcbiAgICByZXR1cm4gY2FjaGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHByb20gPSBmZXRjaFJlY2VudChoYXNzLCBlbnRpdHlJZCwgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKFxuICAgIChzdGF0ZUhpc3RvcnkpID0+IGNvbXB1dGVIaXN0b3J5KGhhc3MsIHN0YXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKSxcbiAgICAoZXJyKSA9PiB7XG4gICAgICBkZWxldGUgUkVDRU5UX0NBQ0hFW2VudGl0eUlkXTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICk7XG5cbiAgUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XSA9IHtcbiAgICBjcmVhdGVkOiBEYXRlLm5vdygpLFxuICAgIGxhbmd1YWdlLFxuICAgIGRhdGE6IHByb20sXG4gIH07XG4gIHJldHVybiBwcm9tO1xufTtcblxuLy8gQ2FjaGUgdHlwZSAyIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGdldEVtcHR5Q2FjaGUoXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogQ2FjaGVkUmVzdWx0cyB7XG4gIHJldHVybiB7XG4gICAgcHJvbTogUHJvbWlzZS5yZXNvbHZlKHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9KSxcbiAgICBsYW5ndWFnZSxcbiAgICBzdGFydFRpbWUsXG4gICAgZW5kVGltZSxcbiAgICBkYXRhOiB7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgY2FjaGVDb25maWc6IENhY2hlQ29uZmlnLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBjYWNoZUNvbmZpZy5jYWNoZUtleTtcbiAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICBzdGFydFRpbWUuc2V0SG91cnMoc3RhcnRUaW1lLmdldEhvdXJzKCkgLSBjYWNoZUNvbmZpZy5ob3Vyc1RvU2hvdyk7XG4gIGxldCB0b0ZldGNoU3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBsZXQgYXBwZW5kaW5nVG9DYWNoZSA9IGZhbHNlO1xuXG4gIGxldCBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgaWYgKFxuICAgIGNhY2hlICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA+PSBjYWNoZS5zdGFydFRpbWUgJiZcbiAgICB0b0ZldGNoU3RhcnRUaW1lIDw9IGNhY2hlLmVuZFRpbWUgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgdG9GZXRjaFN0YXJ0VGltZSA9IGNhY2hlLmVuZFRpbWU7XG4gICAgYXBwZW5kaW5nVG9DYWNoZSA9IHRydWU7XG4gICAgLy8gVGhpcyBwcmV0dHkgbXVjaCBuZXZlciBoYXBwZW5zIGFzIGVuZFRpbWUgaXMgdXN1YWxseSBzZXQgdG8gbm93XG4gICAgaWYgKGVuZFRpbWUgPD0gY2FjaGUuZW5kVGltZSkge1xuICAgICAgcmV0dXJuIGNhY2hlLnByb207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhY2hlID0gc3RhdGVIaXN0b3J5Q2FjaGVbY2FjaGVLZXldID0gZ2V0RW1wdHlDYWNoZShcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZVxuICAgICk7XG4gIH1cblxuICBjb25zdCBjdXJDYWNoZVByb20gPSBjYWNoZS5wcm9tO1xuXG4gIGNvbnN0IGdlblByb20gPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGZldGNoZWRIaXN0b3J5OiBIYXNzRW50aXR5W11bXTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBjdXJDYWNoZVByb20sXG4gICAgICAgIGZldGNoUmVjZW50KFxuICAgICAgICAgIGhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgdG9GZXRjaFN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lLFxuICAgICAgICAgIGFwcGVuZGluZ1RvQ2FjaGVcbiAgICAgICAgKSxcbiAgICAgIF0pO1xuICAgICAgZmV0Y2hlZEhpc3RvcnkgPSByZXN1bHRzWzFdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGVsZXRlIHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVIaXN0b3J5ID0gY29tcHV0ZUhpc3RvcnkoXG4gICAgICBoYXNzLFxuICAgICAgZmV0Y2hlZEhpc3RvcnksXG4gICAgICBsb2NhbGl6ZSxcbiAgICAgIGxhbmd1YWdlXG4gICAgKTtcbiAgICBpZiAoYXBwZW5kaW5nVG9DYWNoZSkge1xuICAgICAgbWVyZ2VMaW5lKHN0YXRlSGlzdG9yeS5saW5lLCBjYWNoZS5kYXRhLmxpbmUpO1xuICAgICAgbWVyZ2VUaW1lbGluZShzdGF0ZUhpc3RvcnkudGltZWxpbmUsIGNhY2hlLmRhdGEudGltZWxpbmUpO1xuICAgICAgcHJ1bmVTdGFydFRpbWUoc3RhcnRUaW1lLCBjYWNoZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUuZGF0YSA9IHN0YXRlSGlzdG9yeTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH07XG5cbiAgY2FjaGUucHJvbSA9IGdlblByb20oKTtcbiAgY2FjaGUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICBjYWNoZS5lbmRUaW1lID0gZW5kVGltZTtcbiAgcmV0dXJuIGNhY2hlLnByb207XG59O1xuXG5jb25zdCBtZXJnZUxpbmUgPSAoXG4gIGhpc3RvcnlMaW5lczogTGluZUNoYXJ0VW5pdFtdLFxuICBjYWNoZUxpbmVzOiBMaW5lQ2hhcnRVbml0W11cbikgPT4ge1xuICBoaXN0b3J5TGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSBsaW5lLnVuaXQ7XG4gICAgY29uc3Qgb2xkTGluZSA9IGNhY2hlTGluZXMuZmluZCgoY2FjaGVMaW5lKSA9PiBjYWNoZUxpbmUudW5pdCA9PT0gdW5pdCk7XG4gICAgaWYgKG9sZExpbmUpIHtcbiAgICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRW50aXR5ID0gb2xkTGluZS5kYXRhLmZpbmQoXG4gICAgICAgICAgKGNhY2hlRW50aXR5KSA9PiBlbnRpdHkuZW50aXR5X2lkID09PSBjYWNoZUVudGl0eS5lbnRpdHlfaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG9sZEVudGl0eSkge1xuICAgICAgICAgIG9sZEVudGl0eS5zdGF0ZXMgPSBvbGRFbnRpdHkuc3RhdGVzLmNvbmNhdChlbnRpdHkuc3RhdGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lLmRhdGEucHVzaChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtZXJnZVRpbWVsaW5lID0gKFxuICBoaXN0b3J5VGltZWxpbmVzOiBUaW1lbGluZUVudGl0eVtdLFxuICBjYWNoZVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXVxuKSA9PiB7XG4gIGhpc3RvcnlUaW1lbGluZXMuZm9yRWFjaCgodGltZWxpbmUpID0+IHtcbiAgICBjb25zdCBvbGRUaW1lbGluZSA9IGNhY2hlVGltZWxpbmVzLmZpbmQoXG4gICAgICAoY2FjaGVUaW1lbGluZSkgPT4gY2FjaGVUaW1lbGluZS5lbnRpdHlfaWQgPT09IHRpbWVsaW5lLmVudGl0eV9pZFxuICAgICk7XG4gICAgaWYgKG9sZFRpbWVsaW5lKSB7XG4gICAgICBvbGRUaW1lbGluZS5kYXRhID0gb2xkVGltZWxpbmUuZGF0YS5jb25jYXQodGltZWxpbmUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlVGltZWxpbmVzLnB1c2godGltZWxpbmUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBwcnVuZUFycmF5ID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBhcnIpID0+IHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGNvbnN0IGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9IGFyci5maW5kSW5kZXgoXG4gICAgKHN0YXRlKSA9PiBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpID4gb3JpZ2luYWxTdGFydFRpbWVcbiAgKTtcbiAgaWYgKGNoYW5nZWRBZnRlclN0YXJ0VGltZSA9PT0gMCkge1xuICAgIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGFmdGVyIG9yaWdpbmFsU3RhcnRUaW1lIHRoZW4gd2UgYXJlIGRvbmUuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8vIElmIGFsbCBjaGFuZ2VzIGhhcHBlbmVkIGF0IG9yIGJlZm9yZSBvcmlnaW5hbFN0YXJ0VGltZS4gVXNlIGxhc3QgaW5kZXguXG4gIGNvbnN0IHVwZGF0ZUluZGV4ID1cbiAgICBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IC0xID8gYXJyLmxlbmd0aCAtIDEgOiBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgLSAxO1xuICBhcnJbdXBkYXRlSW5kZXhdLmxhc3RfY2hhbmdlZCA9IG9yaWdpbmFsU3RhcnRUaW1lO1xuICByZXR1cm4gYXJyLnNsaWNlKHVwZGF0ZUluZGV4KTtcbn07XG5cbmNvbnN0IHBydW5lU3RhcnRUaW1lID0gKG9yaWdpbmFsU3RhcnRUaW1lOiBEYXRlLCBjYWNoZURhdGE6IEhpc3RvcnlSZXN1bHQpID0+IHtcbiAgY2FjaGVEYXRhLmxpbmUuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGxpbmUuZGF0YS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGVudGl0eS5zdGF0ZXMgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCBlbnRpdHkuc3RhdGVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY2FjaGVEYXRhLnRpbWVsaW5lLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgdGltZWxpbmUuZGF0YSA9IHBydW5lQXJyYXkob3JpZ2luYWxTdGFydFRpbWUsIHRpbWVsaW5lLmRhdGEpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZUhpc3RvcnksIGZldGNoRGF0ZSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFJlY2VudCwgZ2V0UmVjZW50V2l0aENhY2hlIH0gZnJvbSBcIi4vY2FjaGVkLWhpc3RvcnlcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVN0YXRlSGlzdG9yeURhdGEgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJUeXBlOiBTdHJpbmcsXG5cbiAgICAgIGNhY2hlQ29uZmlnOiBPYmplY3QsXG5cbiAgICAgIHN0YXJ0VGltZTogRGF0ZSxcbiAgICAgIGVuZFRpbWU6IERhdGUsXG5cbiAgICAgIGVudGl0eUlkOiBTdHJpbmcsXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcImZpbHRlckNoYW5nZWREZWJvdW5jZXIoZmlsdGVyVHlwZSwgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSwgY2FjaGVDb25maWcsIGxvY2FsaXplKVwiLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgIHRoaXMuZmlsdGVyVHlwZSxcbiAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRoaXMuZW5kVGltZSxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICB0aGlzLmxvY2FsaXplXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQobmV3SGFzcywgb2xkSGFzcykge1xuICAgIGlmICghb2xkSGFzcyAmJiAhdGhpcy5fbWFkZUZpcnN0Q2FsbCkge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgICB0aGlzLmZpbHRlclR5cGUsXG4gICAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICAgIHRoaXMubG9jYWxpemVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZERlYm91bmNlciguLi5hcmdzKSB7XG4gICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkLFxuICAgICAgdGltZU91dC5hZnRlcigwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkKFxuICAgIGZpbHRlclR5cGUsXG4gICAgZW50aXR5SWQsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgY2FjaGVDb25maWcsXG4gICAgbG9jYWxpemVcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnICYmICFjYWNoZUNvbmZpZy5jYWNoZUtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hZGVGaXJzdENhbGwgPSB0cnVlO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5oYXNzLmxhbmd1YWdlO1xuICAgIGxldCBkYXRhO1xuXG4gICAgaWYgKGZpbHRlclR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICBpZiAoIXN0YXJ0VGltZSB8fCAhZW5kVGltZSkgcmV0dXJuO1xuXG4gICAgICBkYXRhID0gZmV0Y2hEYXRlKHRoaXMuaGFzcywgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKChkYXRlSGlzdG9yeSkgPT5cbiAgICAgICAgY29tcHV0ZUhpc3RvcnkodGhpcy5oYXNzLCBkYXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicmVjZW50LWVudGl0eVwiKSB7XG4gICAgICBpZiAoIWVudGl0eUlkKSByZXR1cm47XG4gICAgICBpZiAoY2FjaGVDb25maWcpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IGdldFJlY2VudChcbiAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWUsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBkYXRhLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgdGhpcy5fc2V0RGF0YShzdGF0ZUhpc3RvcnkpO1xuICAgICAgdGhpcy5fc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlY2VudFdpdGhDYWNoZVJlZnJlc2goZW50aXR5SWQsIGNhY2hlQ29uZmlnLCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICkudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0RGF0YShPYmplY3QuYXNzaWduKHt9LCBzdGF0ZUhpc3RvcnkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBjYWNoZUNvbmZpZy5yZWZyZXNoICogMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXRlLWhpc3RvcnktZGF0YVwiLCBIYVN0YXRlSGlzdG9yeURhdGEpO1xuIiwiaW1wb3J0IGNvbXB1dGVTdGF0ZU5hbWUgZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRGlzcGxheSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5jb25zdCBET01BSU5TX1VTRV9MQVNUX1VQREFURUQgPSBbXCJjbGltYXRlXCIsIFwid2F0ZXJfaGVhdGVyXCJdO1xuY29uc3QgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAgPSBbXG4gIFwidGVtcGVyYXR1cmVcIixcbiAgXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIsXG4gIFwidGFyZ2V0X3RlbXBfbG93XCIsXG4gIFwidGFyZ2V0X3RlbXBfaGlnaFwiLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRTdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ2hhcnRFbnRpdHkge1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgc3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFVuaXQge1xuICB1bml0OiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgZGF0YTogTGluZUNoYXJ0RW50aXR5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVTdGF0ZSB7XG4gIHN0YXRlX2xvY2FsaXplOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGxhc3RfY2hhbmdlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVsaW5lRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGF0YTogVGltZWxpbmVTdGF0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlSZXN1bHQge1xuICBsaW5lOiBMaW5lQ2hhcnRVbml0W107XG4gIHRpbWVsaW5lOiBUaW1lbGluZUVudGl0eVtdO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hSZWNlbnQgPSAoXG4gIGhhc3MsXG4gIGVudGl0eUlkLFxuICBzdGFydFRpbWUsXG4gIGVuZFRpbWUsXG4gIHNraXBJbml0aWFsU3RhdGUgPSBmYWxzZVxuKTogUHJvbWlzZTxIYXNzRW50aXR5W11bXT4gPT4ge1xuICBsZXQgdXJsID0gXCJoaXN0b3J5L3BlcmlvZFwiO1xuICBpZiAoc3RhcnRUaW1lKSB7XG4gICAgdXJsICs9IFwiL1wiICsgc3RhcnRUaW1lLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgdXJsICs9IFwiP2ZpbHRlcl9lbnRpdHlfaWQ9XCIgKyBlbnRpdHlJZDtcbiAgaWYgKGVuZFRpbWUpIHtcbiAgICB1cmwgKz0gXCImZW5kX3RpbWU9XCIgKyBlbmRUaW1lLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgaWYgKHNraXBJbml0aWFsU3RhdGUpIHtcbiAgICB1cmwgKz0gXCImc2tpcF9pbml0aWFsX3N0YXRlXCI7XG4gIH1cblxuICByZXR1cm4gaGFzcy5jYWxsQXBpKFwiR0VUXCIsIHVybCk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IFByb21pc2U8SGFzc0VudGl0eVtdW10+ID0+IHtcbiAgcmV0dXJuIGhhc3MuY2FsbEFwaShcbiAgICBcIkdFVFwiLFxuICAgIGBoaXN0b3J5L3BlcmlvZC8ke3N0YXJ0VGltZS50b0lTT1N0cmluZygpfT9lbmRfdGltZT0ke2VuZFRpbWUudG9JU09TdHJpbmcoKX1gXG4gICk7XG59O1xuXG5jb25zdCBlcXVhbFN0YXRlID0gKG9iajE6IExpbmVDaGFydFN0YXRlLCBvYmoyOiBMaW5lQ2hhcnRTdGF0ZSkgPT5cbiAgb2JqMS5zdGF0ZSA9PT0gb2JqMi5zdGF0ZSAmJlxuICAvLyBUaGV5IGVpdGhlciBib3RoIGhhdmUgYW4gYXR0cmlidXRlcyBvYmplY3Qgb3Igbm90XG4gICghb2JqMS5hdHRyaWJ1dGVzIHx8XG4gICAgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAuZXZlcnkoXG4gICAgICAoYXR0cikgPT4gb2JqMS5hdHRyaWJ1dGVzIVthdHRyXSA9PT0gb2JqMi5hdHRyaWJ1dGVzIVthdHRyXVxuICAgICkpO1xuXG5jb25zdCBwcm9jZXNzVGltZWxpbmVFbnRpdHkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGxhbmd1YWdlOiBzdHJpbmcsXG4gIHN0YXRlczogSGFzc0VudGl0eVtdXG4pOiBUaW1lbGluZUVudGl0eSA9PiB7XG4gIGNvbnN0IGRhdGE6IFRpbWVsaW5lU3RhdGVbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCAmJiBzdGF0ZS5zdGF0ZSA9PT0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnN0YXRlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgc3RhdGVfbG9jYWxpemU6IGNvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlLCBsYW5ndWFnZSksXG4gICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmxhc3RfY2hhbmdlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZXNbMF0pLFxuICAgIGVudGl0eV9pZDogc3RhdGVzWzBdLmVudGl0eV9pZCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuY29uc3QgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzID0gKFxuICB1bml0LFxuICBlbnRpdGllczogSGFzc0VudGl0eVtdW11cbik6IExpbmVDaGFydFVuaXQgPT4ge1xuICBjb25zdCBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXSA9IFtdO1xuXG4gIGZvciAoY29uc3Qgc3RhdGVzIG9mIGVudGl0aWVzKSB7XG4gICAgY29uc3QgbGFzdDogSGFzc0VudGl0eSA9IHN0YXRlc1tzdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGxhc3QpO1xuICAgIGNvbnN0IHByb2Nlc3NlZFN0YXRlczogTGluZUNoYXJ0U3RhdGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGxldCBwcm9jZXNzZWRTdGF0ZTogTGluZUNoYXJ0U3RhdGU7XG5cbiAgICAgIGlmIChET01BSU5TX1VTRV9MQVNUX1VQREFURUQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZS5sYXN0X3VwZGF0ZWQsXG4gICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIExJTkVfQVRUUklCVVRFU19UT19LRUVQKSB7XG4gICAgICAgICAgaWYgKGF0dHIgaW4gc3RhdGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcHJvY2Vzc2VkU3RhdGUuYXR0cmlidXRlcyFbYXR0cl0gPSBzdGF0ZS5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc2VkU3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzZWRTdGF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBlcXVhbFN0YXRlKFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlLFxuICAgICAgICAgIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSAmJlxuICAgICAgICBlcXVhbFN0YXRlKHByb2Nlc3NlZFN0YXRlLCBwcm9jZXNzZWRTdGF0ZXNbcHJvY2Vzc2VkU3RhdGVzLmxlbmd0aCAtIDJdKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzZWRTdGF0ZXMucHVzaChwcm9jZXNzZWRTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGRvbWFpbixcbiAgICAgIG5hbWU6IGNvbXB1dGVTdGF0ZU5hbWUobGFzdCksXG4gICAgICBlbnRpdHlfaWQ6IGxhc3QuZW50aXR5X2lkLFxuICAgICAgc3RhdGVzOiBwcm9jZXNzZWRTdGF0ZXMsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVuaXQsXG4gICAgaWRlbnRpZmllcjogZW50aXRpZXMubWFwKChzdGF0ZXMpID0+IHN0YXRlc1swXS5lbnRpdHlfaWQpLmpvaW4oXCJcIiksXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlSGlzdG9yeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVIaXN0b3J5OiBIYXNzRW50aXR5W11bXSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKTogSGlzdG9yeVJlc3VsdCA9PiB7XG4gIGNvbnN0IGxpbmVDaGFydERldmljZXM6IHsgW3VuaXQ6IHN0cmluZ106IEhhc3NFbnRpdHlbXVtdIH0gPSB7fTtcbiAgY29uc3QgdGltZWxpbmVEZXZpY2VzOiBUaW1lbGluZUVudGl0eVtdID0gW107XG4gIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgcmV0dXJuIHsgbGluZTogW10sIHRpbWVsaW5lOiBbXSB9O1xuICB9XG5cbiAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgIGlmIChzdGF0ZUluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGVXaXRoVW5pdCA9IHN0YXRlSW5mby5maW5kKFxuICAgICAgKHN0YXRlKSA9PiBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBzdGF0ZS5hdHRyaWJ1dGVzXG4gICAgKTtcblxuICAgIGxldCB1bml0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc3RhdGVXaXRoVW5pdCkge1xuICAgICAgdW5pdCA9IHN0YXRlV2l0aFVuaXQuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlSW5mb1swXSkgPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgICB1bml0ID0gaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmU7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGVJbmZvWzBdKSA9PT0gXCJ3YXRlcl9oZWF0ZXJcIikge1xuICAgICAgdW5pdCA9IGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlO1xuICAgIH1cblxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGltZWxpbmVEZXZpY2VzLnB1c2goXG4gICAgICAgIHByb2Nlc3NUaW1lbGluZUVudGl0eShsb2NhbGl6ZSwgbGFuZ3VhZ2UsIHN0YXRlSW5mbylcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh1bml0IGluIGxpbmVDaGFydERldmljZXMpIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNbdW5pdF0ucHVzaChzdGF0ZUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdID0gW3N0YXRlSW5mb107XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bml0U3RhdGVzID0gT2JqZWN0LmtleXMobGluZUNoYXJ0RGV2aWNlcykubWFwKCh1bml0KSA9PlxuICAgIHByb2Nlc3NMaW5lQ2hhcnRFbnRpdGllcyh1bml0LCBsaW5lQ2hhcnREZXZpY2VzW3VuaXRdKVxuICApO1xuXG4gIHJldHVybiB7IGxpbmU6IHVuaXRTdGF0ZXMsIHRpbWVsaW5lOiB0aW1lbGluZURldmljZXMgfTtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvVUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXhtQkE7QUFDQTtBQXdtQkE7Ozs7Ozs7Ozs7OztBQzFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQU1BO0FBRUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUZBO0FBU0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQVpBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUE1Q0E7QUFrREE7QUFDQTtBQUNBO0FBRkE7QUF0REE7QUEyREE7QUFDQTtBQUNBO0FBMVVBO0FBQ0E7QUEwVUE7Ozs7Ozs7Ozs7OztBQ3BWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBaENBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOU1BO0FBQ0E7QUE4TUE7Ozs7Ozs7Ozs7OztBQzFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJHQTtBQUNBO0FBcUdBOzs7Ozs7Ozs7Ozs7QUMvR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBcktBO0FBQ0E7QUFxS0E7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUEyQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoT0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
