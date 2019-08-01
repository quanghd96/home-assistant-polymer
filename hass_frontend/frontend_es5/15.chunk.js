(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [15],
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
        var tests = [60, 60, 24, 7];
        var langKey = ["second", "minute", "hour", "day"];
        function relativeTime(dateObj, localize) {
          var options =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var compareTime = options.compareTime || new Date();
          var delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
          var tense = delta >= 0 ? "past" : "future";
          delta = Math.abs(delta);
          var timeDesc;

          for (var i = 0; i < tests.length; i++) {
            if (delta < tests[i]) {
              delta = Math.floor(delta);
              timeDesc = localize(
                "ui.components.relative_time.duration.".concat(langKey[i]),
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
                "ui.components.relative_time.".concat(tense),
                "time",
                timeDesc
              );
        }

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

    /***/ "./src/components/ha-paper-icon-button-prev.ts":
      /*!*****************************************************!*\
  !*** ./src/components/ha-paper-icon-button-prev.ts ***!
  \*****************************************************/
      /*! exports provided: HaPaperIconButtonPrev */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HaPaperIconButtonPrev",
          function() {
            return HaPaperIconButtonPrev;
          }
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
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

        // Not duplicate, this is for typing.
        // tslint:disable-next-line

        var paperIconButtonClass = customElements.get("paper-icon-button");
        var HaPaperIconButtonPrev =
          /*#__PURE__*/
          (function(_paperIconButtonClass) {
            _inherits(HaPaperIconButtonPrev, _paperIconButtonClass);

            function HaPaperIconButtonPrev() {
              _classCallCheck(this, HaPaperIconButtonPrev);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperIconButtonPrev).apply(this, arguments)
              );
            }

            _createClass(HaPaperIconButtonPrev, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  this.icon =
                    window.getComputedStyle(this).direction === "ltr"
                      ? "hass:chevron-left"
                      : "hass:chevron-right"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

                  _get(
                    _getPrototypeOf(HaPaperIconButtonPrev.prototype),
                    "connectedCallback",
                    this
                  ).call(this);
                },
              },
            ]);

            return HaPaperIconButtonPrev;
          })(paperIconButtonClass);
        customElements.define(
          "ha-paper-icon-button-prev",
          HaPaperIconButtonPrev
        );

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

        var HaRelativeTime =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaRelativeTime, _LocalizeMixin);

            _createClass(HaRelativeTime, null, [
              {
                key: "properties",
                get: function get() {
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
                },
              },
            ]);

            function HaRelativeTime() {
              var _this;

              _classCallCheck(this, HaRelativeTime);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaRelativeTime).call(this)
              );
              _this.updateRelative = _this.updateRelative.bind(
                _assertThisInitialized(_this)
              );
              return _this;
            }

            _createClass(HaRelativeTime, [
              {
                key: "connectedCallback",
                value: function connectedCallback() {
                  _get(
                    _getPrototypeOf(HaRelativeTime.prototype),
                    "connectedCallback",
                    this
                  ).call(this); // update every 60 seconds

                  this.updateInterval = setInterval(this.updateRelative, 60000);
                },
              },
              {
                key: "disconnectedCallback",
                value: function disconnectedCallback() {
                  _get(
                    _getPrototypeOf(HaRelativeTime.prototype),
                    "disconnectedCallback",
                    this
                  ).call(this);

                  clearInterval(this.updateInterval);
                },
              },
              {
                key: "datetimeChanged",
                value: function datetimeChanged(newVal) {
                  this.parsedDateTime = newVal ? new Date(newVal) : null;
                  this.updateRelative();
                },
              },
              {
                key: "datetimeObjChanged",
                value: function datetimeObjChanged(newVal) {
                  this.parsedDateTime = newVal;
                  this.updateRelative();
                },
              },
              {
                key: "updateRelative",
                value: function updateRelative() {
                  var root = Object(
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
                },
              },
            ]);

            return HaRelativeTime;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-relative-time", HaRelativeTime);

        /***/
      },

    /***/ "./src/dialogs/notifications/configurator-notification-item.ts":
      /*!*********************************************************************!*\
  !*** ./src/dialogs/notifications/configurator-notification-item.ts ***!
  \*********************************************************************/
      /*! exports provided: HuiConfiguratorNotificationItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiConfiguratorNotificationItem",
          function() {
            return HuiConfiguratorNotificationItem;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts"
        );
        /* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts"
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <notification-item-template>\n        <span slot="header">',
            "</span>\n\n        <div>\n          ",
            '\n        </div>\n\n        <mwc-button slot="actions" @click="',
            '"\n          >',
            "</mwc-button\n        >\n      </notification-item-template>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        var HuiConfiguratorNotificationItem = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "configurator-notification-item"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiConfiguratorNotificationItem =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiConfiguratorNotificationItem, _LitElement2);

                function HuiConfiguratorNotificationItem() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiConfiguratorNotificationItem);

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
                      HuiConfiguratorNotificationItem
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiConfiguratorNotificationItem;
              })(_LitElement);

            return {
              F: HuiConfiguratorNotificationItem,
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
                  key: "notification",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass || !this.notification) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.hass.localize("domain.configurator"),
                      this.hass.localize(
                        "ui.notification_drawer.click_to_configure",
                        "entity",
                        this.notification.attributes.friendly_name
                      ),
                      this._handleClick,
                      this.hass.localize(
                        "state.configurator.".concat(this.notification.state)
                      )
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_handleClick",
                  value: function _handleClick() {
                    Object(
                      _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__[
                        "fireEvent"
                      ]
                    )(this, "hass-more-info", {
                      entityId: this.notification.entity_id,
                    });
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/dialogs/notifications/notification-drawer.js":
      /*!**********************************************************!*\
  !*** ./src/dialogs/notifications/notification-drawer.js ***!
  \**********************************************************/
      /*! exports provided: HuiNotificationDrawer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiNotificationDrawer",
          function() {
            return HuiNotificationDrawer;
          }
        );
        /* harmony import */ var _polymer_app_layout_app_drawer_app_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-drawer/app-drawer */ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _notification_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./notification-item */ "./src/dialogs/notifications/notification-item.ts"
        );
        /* harmony import */ var _components_ha_paper_icon_button_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../components/ha-paper-icon-button-prev */ "./src/components/ha-paper-icon-button-prev.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../data/persistent_notification */ "./src/data/persistent_notification.ts"
        );
        /* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts"
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
            '\n    <style include="paper-material-styles">\n      app-toolbar {\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        background-color: var(--primary-background-color);\n        min-height: 64px;\n        width: calc(100% - 32px);\n      }\n\n      .notifications {\n        overflow-y: auto;\n        padding-top: 16px;\n        height: calc(100% - 65px);\n        box-sizing: border-box;\n      }\n\n      .notification {\n        padding: 0 16px 16px;\n      }\n\n      .empty {\n        padding: 16px;\n        text-align: center;\n      }\n    </style>\n    <app-drawer id=\'drawer\' opened="{{open}}" disable-swipe>\n      <app-toolbar>\n        <div main-title>[[localize(\'ui.notification_drawer.title\')]]</div>\n        <ha-paper-icon-button-prev on-click="_closeDrawer"></paper-icon-button>\n      </app-toolbar>\n      <div class="notifications">\n        <template is="dom-if" if="[[!_empty(notifications)]]">\n          <dom-repeat items="[[notifications]]">\n            <template>\n              <div class="notification">\n                <notification-item hass="[[hass]]" notification="[[item]]"></notification-item>\n              </div>\n            </template>\n          </dom-repeat>\n        </template>\n        <template is="dom-if" if="[[_empty(notifications)]]">\n          <div class="empty">[[localize(\'ui.notification_drawer.empty\')]]<div>\n        </template>\n      </div>\n    </app-drawer>\n    ',
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

        /*
         * @appliesMixin EventsMixin
         * @appliesMixin LocalizeMixin
         */

        var HuiNotificationDrawer =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HuiNotificationDrawer, _EventsMixin);

            function HuiNotificationDrawer() {
              _classCallCheck(this, HuiNotificationDrawer);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HuiNotificationDrawer).apply(this, arguments)
              );
            }

            _createClass(
              HuiNotificationDrawer,
              [
                {
                  key: "ready",
                  value: function ready() {
                    var _this = this;

                    _get(
                      _getPrototypeOf(HuiNotificationDrawer.prototype),
                      "ready",
                      this
                    ).call(this);

                    window.addEventListener("location-changed", function() {
                      // close drawer when we navigate away.
                      if (_this.open) {
                        _this.open = false;
                      }
                    });
                  },
                },
                {
                  key: "_closeDrawer",
                  value: function _closeDrawer(ev) {
                    ev.stopPropagation();
                    this.open = false;
                  },
                },
                {
                  key: "_empty",
                  value: function _empty(notifications) {
                    return notifications.length === 0;
                  },
                },
                {
                  key: "_openChanged",
                  value: function _openChanged(open) {
                    var _this2 = this;

                    if (open) {
                      // Render closed then animate open
                      this._unsubNotifications = Object(
                        _data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__[
                          "subscribeNotifications"
                        ]
                      )(this.hass.connection, function(notifications) {
                        _this2._notificationsBackend = notifications;
                      });
                    } else if (this._unsubNotifications) {
                      this._unsubNotifications();

                      this._unsubNotifications = undefined;
                    }
                  },
                },
                {
                  key: "_computeNotifications",
                  value: function _computeNotifications(
                    open,
                    hass,
                    notificationsBackend
                  ) {
                    if (!open) {
                      return [];
                    }

                    var configuratorEntities = Object.keys(hass.states)
                      .filter(function(entityId) {
                        return (
                          Object(
                            _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__[
                              "default"
                            ]
                          )(entityId) === "configurator"
                        );
                      })
                      .map(function(entityId) {
                        return hass.states[entityId];
                      });
                    return notificationsBackend.concat(configuratorEntities);
                  },
                },
                {
                  key: "showDialog",
                  value: function showDialog(_ref) {
                    var narrow = _ref.narrow;
                    this.style.setProperty(
                      "--app-drawer-width",
                      narrow ? window.innerWidth + "px" : "500px"
                    );
                    this.$.drawer.open();
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__[
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
                      open: {
                        type: Boolean,
                        observer: "_openChanged",
                      },
                      notifications: {
                        type: Array,
                        computed:
                          "_computeNotifications(open, hass, _notificationsBackend)",
                      },
                      _notificationsBackend: {
                        type: Array,
                        value: [],
                      },
                    };
                  },
                },
              ]
            );

            return HuiNotificationDrawer;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"]
            )(
              Object(
                _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                  "PolymerElement"
                ]
              )
            )
          );
        customElements.define("notification-drawer", HuiNotificationDrawer);

        /***/
      },

    /***/ "./src/dialogs/notifications/notification-item-template.ts":
      /*!*****************************************************************!*\
  !*** ./src/dialogs/notifications/notification-item-template.ts ***!
  \*****************************************************************/
      /*! exports provided: HuiNotificationItemTemplate */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiNotificationItemTemplate",
          function() {
            return HuiNotificationItemTemplate;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/ha-card */ "./src/components/ha-card.ts"
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

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      .contents {\n        padding: 16px;\n        -ms-user-select: text;\n        -webkit-user-select: text;\n        -moz-user-select: text;\n        user-select: text;\n      }\n\n      ha-card .header {\n        /* start paper-font-headline style */\n        font-family: "Roboto", "Noto", sans-serif;\n        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */\n        text-rendering: optimizeLegibility;\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        /* end paper-font-headline style */\n\n        color: var(--primary-text-color);\n        padding: 16px 16px 0;\n      }\n\n      .actions {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n\n      ::slotted(.primary) {\n        color: var(--primary-color);\n      }\n    ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <ha-card>\n        <div class="header"><slot name="header"></slot></div>\n        <div class="contents"><slot></slot></div>\n        <div class="actions"><slot name="actions"></slot></div>\n      </ha-card>\n    ',
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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        var HuiNotificationItemTemplate = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "notification-item-template"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiNotificationItemTemplate =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiNotificationItemTemplate, _LitElement2);

                function HuiNotificationItemTemplate() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiNotificationItemTemplate);

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
                      HuiNotificationItemTemplate
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiNotificationItemTemplate;
              })(_LitElement);

            return {
              F: HuiNotificationItemTemplate,
              d: [
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(_templateObject());
                  },
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]
                    )(_templateObject2());
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/dialogs/notifications/notification-item.ts":
      /*!********************************************************!*\
  !*** ./src/dialogs/notifications/notification-item.ts ***!
  \********************************************************/
      /*! exports provided: HuiNotificationItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiNotificationItem",
          function() {
            return HuiNotificationItem;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _configurator_notification_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./configurator-notification-item */ "./src/dialogs/notifications/configurator-notification-item.ts"
        );
        /* harmony import */ var _persistent_notification_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./persistent-notification-item */ "./src/dialogs/notifications/persistent-notification-item.ts"
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n          <persistent-notification-item\n            .hass="',
            '"\n            .notification="',
            '"\n          ></persistent-notification-item>\n        ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n          <configurator-notification-item\n            .hass="',
            '"\n            .notification="',
            '"\n          ></configurator-notification-item>\n        ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        var HuiNotificationItem = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "notification-item"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiNotificationItem =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiNotificationItem, _LitElement2);

                function HuiNotificationItem() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiNotificationItem);

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
                      HuiNotificationItem
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiNotificationItem;
              })(_LitElement);

            return {
              F: HuiNotificationItem,
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
                  key: "notification",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "shouldUpdate",
                  value: function shouldUpdate(changedProps) {
                    if (
                      !this.hass ||
                      !this.notification ||
                      changedProps.has("notification")
                    ) {
                      return true;
                    }

                    return false;
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass || !this.notification) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return "entity_id" in this.notification
                      ? Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject2(), this.hass, this.notification)
                      : Object(
                          lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                        )(_templateObject3(), this.hass, this.notification);
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

        /***/
      },

    /***/ "./src/dialogs/notifications/persistent-notification-item.ts":
      /*!*******************************************************************!*\
  !*** ./src/dialogs/notifications/persistent-notification-item.ts ***!
  \*******************************************************************/
      /*! exports provided: HuiPersistentNotificationItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HuiPersistentNotificationItem",
          function() {
            return HuiPersistentNotificationItem;
          }
        );
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js"
        );
        /* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/ha-relative-time */ "./src/components/ha-relative-time.js"
        );
        /* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/ha-markdown */ "./src/components/ha-markdown.js"
        );
        /* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts"
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

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            "\n      .time {\n        display: flex;\n        justify-content: flex-end;\n        margin-top: 6px;\n      }\n      ha-relative-time {\n        color: var(--secondary-text-color);\n      }\n      a {\n        color: var(--primary-color);\n      }\n    ",
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n      <notification-item-template>\n        <span slot="header">\n          ',
            '\n        </span>\n\n        <ha-markdown content="',
            '"></ha-markdown>\n\n        <div class="time">\n          <span>\n            <ha-relative-time\n              .hass="',
            '"\n              .datetime="',
            '"\n            ></ha-relative-time>\n            <paper-tooltip\n              >',
            '</paper-tooltip\n            >\n          </span>\n        </div>\n\n        <mwc-button slot="actions" @click="',
            '"\n          >',
            "</mwc-button\n        >\n      </notification-item-template>\n    ",
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([""]);

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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
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

        var HuiPersistentNotificationItem = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "persistent-notification-item"
            ),
          ],
          function(_initialize, _LitElement) {
            var HuiPersistentNotificationItem =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HuiPersistentNotificationItem, _LitElement2);

                function HuiPersistentNotificationItem() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HuiPersistentNotificationItem);

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
                      HuiPersistentNotificationItem
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HuiPersistentNotificationItem;
              })(_LitElement);

            return {
              F: HuiPersistentNotificationItem,
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
                  key: "notification",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "render",
                  value: function render() {
                    if (!this.hass || !this.notification) {
                      return Object(
                        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                      )(_templateObject());
                    }

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject2(),
                      this.notification.title ||
                        this.notification.notification_id,
                      this.notification.message,
                      this.hass,
                      this.notification.created_at,
                      this._computeTooltip(this.hass, this.notification),
                      this._handleDismiss,
                      this.hass.localize(
                        "ui.card.persistent_notification.dismiss"
                      )
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
                    )(_templateObject3());
                  },
                },
                {
                  kind: "method",
                  key: "_handleDismiss",
                  value: function _handleDismiss() {
                    this.hass.callService(
                      "persistent_notification",
                      "dismiss",
                      {
                        notification_id: this.notification.notification_id,
                      }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_computeTooltip",
                  value: function _computeTooltip(hass, notification) {
                    if (!hass || !notification) {
                      return undefined;
                    }

                    var d = new Date(notification.created_at);
                    return d.toLocaleDateString(hass.language, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      minute: "numeric",
                      hour: "numeric",
                    });
                  },
                },
              ],
            };
          },
          lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]
        );

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

        /**
         * Polymer Mixin to enable a localize function powered by language/resources from hass object.
         *
         * @polymerMixin
         */

        /* harmony default export */ __webpack_exports__["default"] = Object(
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

              _createClass(
                _class,
                [
                  {
                    key: "__computeLocalize",
                    value: function __computeLocalize(localize) {
                      return localize;
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function get() {
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
                    },
                  },
                ]
              );

              return _class;
            })(superClass)
          );
        });

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tcHJldi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uLWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9wZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5sZXQgbG9hZGVkID0gbnVsbDtcblxuLyoqXG4gKiBXaGl0ZSBsaXN0IGFsbG93ZWQgc3ZnIHRhZy5cbiAqIE9ubHkgcHV0IGluIHRoZSB0YWcgdXNlZCBpbiBRUiBjb2RlLCBjYW4gYmUgZXh0ZW5kIGluIGZ1dHVyZS5cbiAqL1xuY29uc3Qgc3ZnV2hpdGVMaXN0ID0gW1wic3ZnXCIsIFwicGF0aFwiXTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFNYXJrZG93biBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcIl9yZW5kZXJcIixcbiAgICAgIH0sXG4gICAgICBhbGxvd1N2Zzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIDAgPSBub3QgbG9hZGVkLCAxID0gc3VjY2VzcywgMiA9IGVycm9yXG4gICAgdGhpcy5fc2NyaXB0TG9hZGVkID0gMDtcbiAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNpemUgPSAoKSA9PiB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcblxuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICBsb2FkZWQgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2FkX21hcmtkb3duXCIgKi8gXCIuLi9yZXNvdXJjZXMvbG9hZF9tYXJrZG93blwiKTtcbiAgICB9XG4gICAgbG9hZGVkXG4gICAgICAudGhlbihcbiAgICAgICAgKHsgbWFya2VkLCBmaWx0ZXJYU1MgfSkgPT4ge1xuICAgICAgICAgIHRoaXMubWFya2VkID0gbWFya2VkO1xuICAgICAgICAgIHRoaXMuZmlsdGVyWFNTID0gZmlsdGVyWFNTO1xuICAgICAgICAgIHRoaXMuX3NjcmlwdExvYWRlZCA9IDE7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zY3JpcHRMb2FkZWQgPSAyO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZW5kZXIoKSk7XG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLl9zY3JpcHRMb2FkZWQgPT09IDAgfHwgdGhpcy5fcmVuZGVyU2NoZWR1bGVkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSB0cnVlO1xuXG4gICAgLy8gZGVib3VuY2UgaXQgdG8gbmV4dCBtaWNyb3Rhc2suXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJTY2hlZHVsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuX3NjcmlwdExvYWRlZCA9PT0gMSkge1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHRoaXMuZmlsdGVyWFNTKFxuICAgICAgICAgIHRoaXMubWFya2VkKHRoaXMuY29udGVudCwge1xuICAgICAgICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgICAgICAgdGFibGVzOiB0cnVlLFxuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uSWdub3JlVGFnOiB0aGlzLmFsbG93U3ZnXG4gICAgICAgICAgICAgID8gKHRhZywgaHRtbCkgPT4gKHN2Z1doaXRlTGlzdC5pbmRleE9mKHRhZykgPj0gMCA/IGh0bWwgOiBudWxsKVxuICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9yZXNpemUoKTtcblxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgMSAvKiBTSE9XX0VMRU1FTlQgKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICAgICAgICAvLyBPcGVuIGV4dGVybmFsIGxpbmtzIGluIGEgbmV3IHdpbmRvd1xuICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09IFwiQVwiICYmIG5vZGUuaG9zdCAhPT0gZG9jdW1lbnQubG9jYXRpb24uaG9zdCkge1xuICAgICAgICAgICAgbm9kZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGEgcmVzaXplIGV2ZW50IHdoZW4gaW1hZ2VzIGxvYWRlZCB0byBub3RpZnkgY29udGVudCByZXNpemVkXG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2NyaXB0TG9hZGVkID09PSAyKSB7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5jb250ZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLW1hcmtkb3duXCIsIEhhTWFya2Rvd24pO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySWNvbkJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuY29uc3QgcGFwZXJJY29uQnV0dG9uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItaWNvbi1idXR0b25cIlxuKSBhcyBDb25zdHJ1Y3RvcjxQYXBlckljb25CdXR0b25FbGVtZW50PjtcblxuZXhwb3J0IGNsYXNzIEhhUGFwZXJJY29uQnV0dG9uUHJldiBleHRlbmRzIHBhcGVySWNvbkJ1dHRvbkNsYXNzIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaWNvbiA9XG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1sZWZ0XCJcbiAgICAgICAgOiBcImhhc3M6Y2hldnJvbi1yaWdodFwiO1xuXG4gICAgLy8gY2FsbGluZyBzdXBlciBhZnRlciBzZXR0aW5nIGljb24gdG8gaGF2ZSBpdCBjb25zaXN0ZW50bHkgc2hvdyB0aGUgaWNvbiAob3RoZXJ3aXNlIG5vdCBhbHdheXMgc2hvd24pXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiOiBIYVBhcGVySWNvbkJ1dHRvblByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiLCBIYVBhcGVySWNvbkJ1dHRvblByZXYpO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUmVsYXRpdmVUaW1lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBkYXRldGltZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkRGF0ZVRpbWU6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlID0gdGhpcy51cGRhdGVSZWxhdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyB1cGRhdGUgZXZlcnkgNjAgc2Vjb25kc1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVJlbGF0aXZlLCA2MDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH1cblxuICBkYXRldGltZUNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbCA/IG5ldyBEYXRlKG5ld1ZhbCkgOiBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgZGF0ZXRpbWVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICB1cGRhdGVSZWxhdGl2ZSgpIHtcbiAgICBjb25zdCByb290ID0gZG9tKHRoaXMpO1xuICAgIGlmICghdGhpcy5wYXJzZWREYXRlVGltZSkge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSB0aGlzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLm5ldmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHJlbGF0aXZlVGltZSh0aGlzLnBhcnNlZERhdGVUaW1lLCB0aGlzLmxvY2FsaXplKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcmVsYXRpdmUtdGltZVwiLCBIYVJlbGF0aXZlVGltZSk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQZXJzaXRlbnROb3RpZmljYXRpb25FbnRpdHkgfSBmcm9tIFwiLi4vLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImNvbmZpZ3VyYXRvci1ub3RpZmljYXRpb24taXRlbVwiKVxuZXhwb3J0IGNsYXNzIEh1aUNvbmZpZ3VyYXRvck5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBQZXJzaXRlbnROb3RpZmljYXRpb25FbnRpdHk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLm5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7dGhpcy5oYXNzLmxvY2FsaXplKFwiZG9tYWluLmNvbmZpZ3VyYXRvclwiKX08L3NwYW4+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkubm90aWZpY2F0aW9uX2RyYXdlci5jbGlja190b19jb25maWd1cmVcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWVcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBgc3RhdGUuY29uZmlndXJhdG9yLiR7dGhpcy5ub3RpZmljYXRpb24uc3RhdGV9YFxuICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vdGlmaWNhdGlvbiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpQ29uZmlndXJhdG9yTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtZHJhd2VyL2FwcC1kcmF3ZXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL25vdGlmaWNhdGlvbi1pdGVtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLXByZXZcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5leHBvcnQgY2xhc3MgSHVpTm90aWZpY2F0aW9uRHJhd2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oXG4gIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpXG4pIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb25zIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLmVtcHR5IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGFwcC1kcmF3ZXIgaWQ9J2RyYXdlcicgb3BlbmVkPVwie3tvcGVufX1cIiBkaXNhYmxlLXN3aXBlPlxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgndWkubm90aWZpY2F0aW9uX2RyYXdlci50aXRsZScpXV08L2Rpdj5cbiAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLXByZXYgb24tY2xpY2s9XCJfY2xvc2VEcmF3ZXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZG9tLXJlcGVhdCBpdGVtcz1cIltbbm90aWZpY2F0aW9uc11dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bm90aWZpY2F0aW9uLWl0ZW0gaGFzcz1cIltbaGFzc11dXCIgbm90aWZpY2F0aW9uPVwiW1tpdGVtXV1cIj48L25vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kb20tcmVwZWF0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1wdHlcIj5bW2xvY2FsaXplKCd1aS5ub3RpZmljYXRpb25fZHJhd2VyLmVtcHR5JyldXTxkaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FwcC1kcmF3ZXI+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbkNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgX25vdGlmaWNhdGlvbnNCYWNrZW5kKVwiLFxuICAgICAgfSxcbiAgICAgIF9ub3RpZmljYXRpb25zQmFja2VuZDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2F0aW9uLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgLy8gY2xvc2UgZHJhd2VyIHdoZW4gd2UgbmF2aWdhdGUgYXdheS5cbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2VEcmF3ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIF9lbXB0eShub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgX29wZW5DaGFuZ2VkKG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgLy8gUmVuZGVyIGNsb3NlZCB0aGVuIGFuaW1hdGUgb3BlblxuICAgICAgdGhpcy5fdW5zdWJOb3RpZmljYXRpb25zID0gc3Vic2NyaWJlTm90aWZpY2F0aW9ucyhcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChub3RpZmljYXRpb25zKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uc0JhY2tlbmQgPSBub3RpZmljYXRpb25zO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdW5zdWJOb3RpZmljYXRpb25zKSB7XG4gICAgICB0aGlzLl91bnN1Yk5vdGlmaWNhdGlvbnMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViTm90aWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgbm90aWZpY2F0aW9uc0JhY2tlbmQpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWd1cmF0b3JFbnRpdGllcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLmZpbHRlcigoZW50aXR5SWQpID0+IGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImNvbmZpZ3VyYXRvclwiKVxuICAgICAgLm1hcCgoZW50aXR5SWQpID0+IGhhc3Muc3RhdGVzW2VudGl0eUlkXSk7XG5cbiAgICByZXR1cm4gbm90aWZpY2F0aW9uc0JhY2tlbmQuY29uY2F0KGNvbmZpZ3VyYXRvckVudGl0aWVzKTtcbiAgfVxuXG4gIHNob3dEaWFsb2coeyBuYXJyb3cgfSkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tYXBwLWRyYXdlci13aWR0aFwiLFxuICAgICAgbmFycm93ID8gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCIgOiBcIjUwMHB4XCJcbiAgICApO1xuICAgIHRoaXMuJC5kcmF3ZXIub3BlbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJub3RpZmljYXRpb24tZHJhd2VyXCIsIEh1aU5vdGlmaWNhdGlvbkRyYXdlcik7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiKVxuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkl0ZW1UZW1wbGF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj48c2xvdCBuYW1lPVwiYWN0aW9uc1wiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCAuaGVhZGVyIHtcbiAgICAgICAgLyogc3RhcnQgcGFwZXItZm9udC1oZWFkbGluZSBzdHlsZSAqL1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJOb3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyAvKiBPUyBYIHN1YnBpeGVsIEFBIGJsZWVkIGJ1ZyAqL1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC8qIGVuZCBwYXBlci1mb250LWhlYWRsaW5lIHN0eWxlICovXG5cbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKC5wcmltYXJ5KSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiOiBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjtcbmltcG9ydCBcIi4vcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJub3RpZmljYXRpb24taXRlbVwiKVxuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBIYXNzRW50aXR5IHwgUGVyc2lzdGVudE5vdGlmaWNhdGlvbjtcblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24gfHwgY2hhbmdlZFByb3BzLmhhcyhcIm5vdGlmaWNhdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLm5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlbnRpdHlfaWRcIiBpbiB0aGlzLm5vdGlmaWNhdGlvblxuICAgICAgPyBodG1sYFxuICAgICAgICAgIDxjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICBgXG4gICAgICA6IGh0bWxgXG4gICAgICAgICAgPHBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbT5cbiAgICAgICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJwZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtXCIpXG5leHBvcnQgY2xhc3MgSHVpUGVyc2lzdGVudE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAke3RoaXMubm90aWZpY2F0aW9uLnRpdGxlIHx8IHRoaXMubm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbl9pZH1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxoYS1tYXJrZG93biBjb250ZW50PVwiJHt0aGlzLm5vdGlmaWNhdGlvbi5tZXNzYWdlfVwiPjwvaGEtbWFya2Rvd24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgLmRhdGV0aW1lPVwiJHt0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0fVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXBcbiAgICAgICAgICAgICAgPiR7dGhpcy5fY29tcHV0ZVRvb2x0aXAoXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICl9PC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlRGlzbWlzc31cIlxuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuY2FyZC5wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi5kaXNtaXNzXCJcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAudGltZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIH1cbiAgICAgIGhhLXJlbGF0aXZlLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRGlzbWlzcygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc3MhLmNhbGxTZXJ2aWNlKFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJkaXNtaXNzXCIsIHtcbiAgICAgIG5vdGlmaWNhdGlvbl9pZDogdGhpcy5ub3RpZmljYXRpb24hLm5vdGlmaWNhdGlvbl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVUb29sdGlwKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgbm90aWZpY2F0aW9uOiBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFoYXNzIHx8ICFub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0ISk7XG4gICAgcmV0dXJuIGQudG9Mb2NhbGVEYXRlU3RyaW5nKGhhc3MubGFuZ3VhZ2UsIHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpUGVyc2lzdGVudE5vdGlmaWNhdGlvbkl0ZW07XG4gIH1cbn1cbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsZ1FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTs7OztBQVpBO0FBQ0E7QUF1RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFUQTtBQUNBO0FBREE7QUFBQTtBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBckRBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFPQTtBQUVBO0FBR0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQURBO0FBR0E7QUFuQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXVFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0VBO0FBQUE7QUFBQTtBQWtGQTtBQUNBO0FBQ0E7QUFwRkE7QUFBQTtBQUFBO0FBdUZBO0FBQ0E7QUF4RkE7QUFBQTtBQUFBO0FBMEZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBdkdBO0FBQUE7QUFBQTtBQTBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBbkhBO0FBQUE7QUFBQTtBQXFIQTtBQUNBO0FBSUE7QUFDQTtBQTNIQTtBQUFBO0FBQUE7QUFJQTtBQStDQTtBQW5EQTtBQUFBO0FBQUE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFyRUE7QUFDQTtBQURBO0FBQUE7QUE2SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBU0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU9BO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBaUNBO0FBN0NBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBVUE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUEvQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThCQTtBQXhDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkNBO0FBYUE7QUF4REE7QUFBQTtBQUFBO0FBQUE7QUEyREE7QUFDQTtBQURBO0FBR0E7QUE5REE7QUFBQTtBQUFBO0FBQUE7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFoRkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
