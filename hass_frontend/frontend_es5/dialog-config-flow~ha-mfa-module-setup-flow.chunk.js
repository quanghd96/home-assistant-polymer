(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["dialog-config-flow~ha-mfa-module-setup-flow"],
  {
    /***/ "./src/components/ha-form.js":
      /*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js"
        );
        /* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js"
        );
        /* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <style>\n        .error {\n          color: red;\n        }\n        paper-checkbox {\n          display: inline-block;\n          padding: 22px 0;\n        }\n      </style>\n      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error.base]]">\n          <div class="error">[[computeError(error.base, schema)]]</div>\n        </template>\n\n        <template is="dom-repeat" items="[[schema]]">\n          <ha-form\n            data="[[_getValue(data, item)]]"\n            schema="[[item]]"\n            error="[[_getValue(error, item)]]"\n            on-data-changed="_valueChanged"\n            compute-label="[[computeLabel]]"\n            compute-error="[[computeError]]"\n          ></ha-form>\n        </template>\n      </template>\n      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error]]">\n          <div class="error">[[computeError(error, schema)]]</div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "string")]]\'\n          restamp=""\n        >\n          <template\n            is="dom-if"\n            if=\'[[_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              type="[[_passwordFieldType(unmaskedPassword)]]"\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            >\n              <paper-icon-button\n                toggles\n                active="{{unmaskedPassword}}"\n                slot="suffix"\n                icon="[[_passwordFieldIcon(unmaskedPassword)]]"\n                id="iconButton"\n                title="Click to toggle between masked and clear password"\n              >\n              </paper-icon-button>\n            </paper-input>\n          </template>\n          <template\n            is="dom-if"\n            if=\'[[!_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "integer")]]\'\n          restamp=""\n        >\n          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">\n            <div>\n              [[computeLabel(schema)]]\n              <ha-paper-slider\n                pin=""\n                value="{{data}}"\n                min="[[schema.valueMin]]"\n                max="[[schema.valueMax]]"\n              ></ha-paper-slider>\n            </div>\n          </template>\n          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              type="number"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template is="dom-if" if=\'[[_equals(schema.type, "float")]]\' restamp="">\n          <!-- TODO -->\n          <paper-input\n            label="[[computeLabel(schema)]]"\n            value="{{data}}"\n            required="[[schema.required]]"\n            auto-validate="[[schema.required]]"\n            error-message="Required"\n          ></paper-input>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "boolean")]]\'\n          restamp=""\n        >\n          <div>\n            <paper-checkbox checked="{{data}}"\n              >[[computeLabel(schema)]]</paper-checkbox\n            >\n          </div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "select")]]\'\n          restamp=""\n        >\n          <paper-dropdown-menu label="[[computeLabel(schema)]]">\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="item-name"\n              selected="{{data}}"\n            >\n              <template is="dom-repeat" items="[[schema.options]]">\n                <paper-item item-name$="[[_optionValue(item)]]"\n                  >[[_optionLabel(item)]]</paper-item\n                >\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </template>\n      </template>\n    ',
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
         * @appliesMixin EventsMixin
         */

        var HaForm =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(HaForm, _EventsMixin);

            function HaForm() {
              _classCallCheck(this, HaForm);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaForm).apply(this, arguments)
              );
            }

            _createClass(
              HaForm,
              [
                {
                  key: "focus",
                  value: function focus() {
                    var input = this.shadowRoot.querySelector(
                      "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
                    );

                    if (!input) {
                      return;
                    }

                    input.focus();
                  },
                },
                {
                  key: "_isArray",
                  value: function _isArray(val) {
                    return Array.isArray(val);
                  },
                },
                {
                  key: "_isRange",
                  value: function _isRange(schema) {
                    return "valueMin" in schema && "valueMax" in schema;
                  },
                },
                {
                  key: "_equals",
                  value: function _equals(a, b) {
                    return a === b;
                  },
                },
                {
                  key: "_includes",
                  value: function _includes(a, b) {
                    return a.indexOf(b) >= 0;
                  },
                },
                {
                  key: "_getValue",
                  value: function _getValue(obj, item) {
                    if (obj) {
                      return obj[item.name];
                    }

                    return null;
                  },
                },
                {
                  key: "_valueChanged",
                  value: function _valueChanged(ev) {
                    var value = ev.detail.value;

                    if (ev.model.item.type === "integer") {
                      value = Number(ev.detail.value);
                    }

                    this.set(["data", ev.model.item.name], value);
                  },
                },
                {
                  key: "_passwordFieldType",
                  value: function _passwordFieldType(unmaskedPassword) {
                    return unmaskedPassword ? "text" : "password";
                  },
                },
                {
                  key: "_passwordFieldIcon",
                  value: function _passwordFieldIcon(unmaskedPassword) {
                    return unmaskedPassword ? "hass:eye-off" : "hass:eye";
                  },
                },
                {
                  key: "_optionValue",
                  value: function _optionValue(item) {
                    return Array.isArray(item) ? item[0] : item;
                  },
                },
                {
                  key: "_optionLabel",
                  value: function _optionLabel(item) {
                    return Array.isArray(item) ? item[1] : item;
                  },
                },
              ],
              [
                {
                  key: "template",
                  get: function get() {
                    return Object(
                      _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__[
                        "html"
                      ]
                    )(_templateObject());
                  },
                },
                {
                  key: "properties",
                  get: function get() {
                    return {
                      data: {
                        type: Object,
                        notify: true,
                      },
                      schema: Object,
                      error: Object,
                      // A function that will computes the label to be displayed for a given
                      // schema object.
                      computeLabel: {
                        type: Function,
                        value: function value() {
                          return function(schema) {
                            return schema && schema.name;
                          };
                        },
                      },
                      // A function that will computes an error message to be displayed for a
                      // given error ID, and relevant schema object
                      computeError: {
                        type: Function,
                        value: function value() {
                          return function(error, schema) {
                            return error;
                          };
                        }, // eslint-disable-line no-unused-vars
                      },
                    };
                  },
                },
              ]
            );

            return HaForm;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("ha-form", HaForm);

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

    /***/ "./src/components/ha-paper-slider.js":
      /*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js"
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
         * @polymer
         * @customElement
         * @appliesMixin paper-slider
         */

        var PaperSliderClass = customElements.get("paper-slider");

        var HaPaperSlider =
          /*#__PURE__*/
          (function(_PaperSliderClass) {
            _inherits(HaPaperSlider, _PaperSliderClass);

            function HaPaperSlider() {
              _classCallCheck(this, HaPaperSlider);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPaperSlider).apply(this, arguments)
              );
            }

            _createClass(HaPaperSlider, null, [
              {
                key: "template",
                get: function get() {
                  var tpl = document.createElement("template");
                  tpl.innerHTML = PaperSliderClass.template.innerHTML;
                  var styleEl = document.createElement("style");
                  styleEl.innerHTML =
                    '\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ';
                  tpl.content.appendChild(styleEl);
                  return tpl;
                },
              },
            ]);

            return HaPaperSlider;
          })(PaperSliderClass);

        customElements.define("ha-paper-slider", HaPaperSlider);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvdy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhRm9ybSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDIycHggMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNBcnJheShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvci5iYXNlXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvci5iYXNlLCBzY2hlbWEpXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYV1dXCI+XG4gICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgIGRhdGE9XCJbW19nZXRWYWx1ZShkYXRhLCBpdGVtKV1dXCJcbiAgICAgICAgICAgIHNjaGVtYT1cIltbaXRlbV1dXCJcbiAgICAgICAgICAgIGVycm9yPVwiW1tfZ2V0VmFsdWUoZXJyb3IsIGl0ZW0pXV1cIlxuICAgICAgICAgICAgb24tZGF0YS1jaGFuZ2VkPVwiX3ZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgICBjb21wdXRlLWxhYmVsPVwiW1tjb21wdXRlTGFiZWxdXVwiXG4gICAgICAgICAgICBjb21wdXRlLWVycm9yPVwiW1tjb21wdXRlRXJyb3JdXVwiXG4gICAgICAgICAgPjwvaGEtZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9pc0FycmF5KHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvciwgc2NoZW1hKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic3RyaW5nXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbW19pbmNsdWRlcyhzY2hlbWEubmFtZSwgXCJwYXNzd29yZFwiKV1dJ1xuICAgICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJbW19wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICB0b2dnbGVzXG4gICAgICAgICAgICAgICAgYWN0aXZlPVwie3t1bm1hc2tlZFBhc3N3b3JkfX1cIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGljb249XCJbW19wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKV1dXCJcbiAgICAgICAgICAgICAgICBpZD1cImljb25CdXR0b25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gbWFza2VkIGFuZCBjbGVhciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgIGlmPSdbWyFfaW5jbHVkZXMoc2NoZW1hLm5hbWUsIFwicGFzc3dvcmRcIildXSdcbiAgICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcImludGVnZXJcIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cbiAgICAgICAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgICAgbWluPVwiW1tzY2hlbWEudmFsdWVNaW5dXVwiXG4gICAgICAgICAgICAgICAgbWF4PVwiW1tzY2hlbWEudmFsdWVNYXhdXVwiXG4gICAgICAgICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaXNSYW5nZShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJmbG9hdFwiKV1dJyByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJib29sZWFuXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgID5bW2NvbXB1dGVMYWJlbChzY2hlbWEpXV08L3BhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic2VsZWN0XCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYS5vcHRpb25zXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tfb3B0aW9uVmFsdWUoaXRlbSldXVwiXG4gICAgICAgICAgICAgICAgICA+W1tfb3B0aW9uTGFiZWwoaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBPYmplY3QsXG4gICAgICBlcnJvcjogT2JqZWN0LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBjb21wdXRlcyB0aGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIGZvciBhIGdpdmVuXG4gICAgICAvLyBzY2hlbWEgb2JqZWN0LlxuICAgICAgY29tcHV0ZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHNjaGVtYSkgPT4gc2NoZW1hICYmIHNjaGVtYS5uYW1lLFxuICAgICAgfSxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IHdpbGwgY29tcHV0ZXMgYW4gZXJyb3IgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgZm9yIGFcbiAgICAgIC8vIGdpdmVuIGVycm9yIElELCBhbmQgcmVsZXZhbnQgc2NoZW1hIG9iamVjdFxuICAgICAgY29tcHV0ZUVycm9yOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKGVycm9yLCBzY2hlbWEpID0+IGVycm9yLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJoYS1mb3JtLCBwYXBlci1pbnB1dCwgaGEtcGFwZXItc2xpZGVyLCBwYXBlci1jaGVja2JveCwgcGFwZXItZHJvcGRvd24tbWVudVwiXG4gICAgKTtcblxuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2lzQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKTtcbiAgfVxuXG4gIF9pc1JhbmdlKHNjaGVtYSkge1xuICAgIHJldHVybiBcInZhbHVlTWluXCIgaW4gc2NoZW1hICYmIFwidmFsdWVNYXhcIiBpbiBzY2hlbWE7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9pbmNsdWRlcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEuaW5kZXhPZihiKSA+PSAwO1xuICB9XG5cbiAgX2dldFZhbHVlKG9iaiwgaXRlbSkge1xuICAgIGlmIChvYmopIHtcbiAgICAgIHJldHVybiBvYmpbaXRlbS5uYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgbGV0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChldi5tb2RlbC5pdGVtLnR5cGUgPT09IFwiaW50ZWdlclwiKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcihldi5kZXRhaWwudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldChbXCJkYXRhXCIsIGV2Lm1vZGVsLml0ZW0ubmFtZV0sIHZhbHVlKTtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkVHlwZSh1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcbiAgfVxuXG4gIF9wYXNzd29yZEZpZWxkSWNvbih1bm1hc2tlZFBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIHVubWFza2VkUGFzc3dvcmQgPyBcImhhc3M6ZXllLW9mZlwiIDogXCJoYXNzOmV5ZVwiO1xuICB9XG5cbiAgX29wdGlvblZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgX29wdGlvbkxhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMV0gOiBpdGVtO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWZvcm1cIiwgSGFGb3JtKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmxldCBsb2FkZWQgPSBudWxsO1xuXG4vKipcbiAqIFdoaXRlIGxpc3QgYWxsb3dlZCBzdmcgdGFnLlxuICogT25seSBwdXQgaW4gdGhlIHRhZyB1c2VkIGluIFFSIGNvZGUsIGNhbiBiZSBleHRlbmQgaW4gZnV0dXJlLlxuICovXG5jb25zdCBzdmdXaGl0ZUxpc3QgPSBbXCJzdmdcIiwgXCJwYXRoXCJdO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3JlbmRlclwiLFxuICAgICAgfSxcbiAgICAgIGFsbG93U3ZnOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gMCA9IG5vdCBsb2FkZWQsIDEgPSBzdWNjZXNzLCAyID0gZXJyb3JcbiAgICB0aGlzLl9zY3JpcHRMb2FkZWQgPSAwO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Jlc2l6ZSA9ICgpID0+IHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuXG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfbWFya2Rvd25cIiAqLyBcIi4uL3Jlc291cmNlcy9sb2FkX21hcmtkb3duXCIpO1xuICAgIH1cbiAgICBsb2FkZWRcbiAgICAgIC50aGVuKFxuICAgICAgICAoeyBtYXJrZWQsIGZpbHRlclhTUyB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZWQgPSBtYXJrZWQ7XG4gICAgICAgICAgdGhpcy5maWx0ZXJYU1MgPSBmaWx0ZXJYU1M7XG4gICAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGVkID0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NjcmlwdExvYWRlZCA9IDI7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlbmRlcigpKTtcbiAgfVxuXG4gIF9yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuX3NjcmlwdExvYWRlZCA9PT0gMCB8fCB0aGlzLl9yZW5kZXJTY2hlZHVsZWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IHRydWU7XG5cbiAgICAvLyBkZWJvdW5jZSBpdCB0byBuZXh0IG1pY3JvdGFzay5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5fc2NyaXB0TG9hZGVkID09PSAxKSB7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gdGhpcy5maWx0ZXJYU1MoXG4gICAgICAgICAgdGhpcy5tYXJrZWQodGhpcy5jb250ZW50LCB7XG4gICAgICAgICAgICBnZm06IHRydWUsXG4gICAgICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25JZ25vcmVUYWc6IHRoaXMuYWxsb3dTdmdcbiAgICAgICAgICAgICAgPyAodGFnLCBodG1sKSA9PiAoc3ZnV2hpdGVMaXN0LmluZGV4T2YodGFnKSA+PSAwID8gaHRtbCA6IG51bGwpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZSgpO1xuXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAxIC8qIFNIT1dfRUxFTUVOVCAqLyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICAgIC8vIE9wZW4gZXh0ZXJuYWwgbGlua3MgaW4gYSBuZXcgd2luZG93XG4gICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJBXCIgJiYgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0KSB7XG4gICAgICAgICAgICBub2RlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY3JpcHRMb2FkZWQgPT09IDIpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWFya2Rvd25cIiwgSGFNYXJrZG93bik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBZ0xBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXhPQTtBQUNBO0FBbUpBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBakJBO0FBc0JBOzs7O0FBOUtBO0FBQ0E7QUEyT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUEE7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBSUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLGdRQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXBGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7Ozs7QUFaQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0RBO0FBQ0E7QUFDQTs7OztBQTNEQTtBQUNBO0FBNERBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
