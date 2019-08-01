(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["panel-config-script"],
  {
    /***/ "./src/data/script.ts":
      /*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
      /*! exports provided: triggerScript, deleteScript */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "triggerScript",
          function() {
            return triggerScript;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteScript",
          function() {
            return deleteScript;
          }
        );
        /* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );

        var triggerScript = function triggerScript(hass, entityId, variables) {
          return hass.callService(
            "script",
            Object(
              _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(entityId),
            variables
          );
        };
        var deleteScript = function deleteScript(hass, objectId) {
          return hass.callApi(
            "DELETE",
            "config/script/config/".concat(objectId)
          );
        };

        /***/
      },

    /***/ "./src/mixins/navigate-mixin.js":
      /*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"
        );
        /* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../common/navigate */ "./src/common/navigate.ts"
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

        /*
         * @polymerMixin
         * @appliesMixin EventsMixin
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

              _createClass(_class, [
                {
                  key: "navigate",
                  value: function navigate() {
                    for (
                      var _len = arguments.length,
                        args = new Array(_len),
                        _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    _common_navigate__WEBPACK_IMPORTED_MODULE_1__[
                      "navigate"
                    ].apply(void 0, [this].concat(args));
                  },
                },
              ]);

              return _class;
            })(superClass)
          );
        });

        /***/
      },

    /***/ "./src/panels/config/js/script.js":
      /*!****************************************!*\
  !*** ./src/panels/config/js/script.js ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return ScriptEditor;
          }
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./script/index */ "./src/panels/config/js/script/index.js"
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

        var ScriptEditor =
          /*#__PURE__*/
          (function(_Component) {
            _inherits(ScriptEditor, _Component);

            function ScriptEditor() {
              var _this;

              _classCallCheck(this, ScriptEditor);

              _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(ScriptEditor).call(this)
              );
              _this.onChange = _this.onChange.bind(
                _assertThisInitialized(_this)
              );
              _this.sequenceChanged = _this.sequenceChanged.bind(
                _assertThisInitialized(_this)
              );
              return _this;
            }

            _createClass(ScriptEditor, [
              {
                key: "onChange",
                value: function onChange(ev) {
                  this.props.onChange(
                    Object.assign(
                      {},
                      this.props.script,
                      _defineProperty({}, ev.target.name, ev.target.value)
                    )
                  );
                },
              },
              {
                key: "sequenceChanged",
                value: function sequenceChanged(sequence) {
                  this.props.onChange(
                    Object.assign({}, this.props.script, {
                      sequence: sequence,
                    })
                  );
                },
              },
              {
                key: "render",
                value: function render(_ref) {
                  var script = _ref.script,
                    isWide = _ref.isWide,
                    hass = _ref.hass,
                    localize = _ref.localize;
                  var alias = script.alias,
                    sequence = script.sequence;
                  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                    "div",
                    null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "ha-config-section",
                      {
                        "is-wide": isWide,
                      },
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "span",
                        {
                          slot: "header",
                        },
                        alias
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "span",
                        {
                          slot: "introduction",
                        },
                        "Use scripts to execute a sequence of actions."
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "ha-card",
                        null,
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                          "div",
                          {
                            class: "card-content",
                          },
                          Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                            "paper-input",
                            {
                              label: "Name",
                              name: "alias",
                              value: alias,
                              "onvalue-changed": this.onChange,
                            }
                          )
                        )
                      )
                    ),
                    Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                      "ha-config-section",
                      {
                        "is-wide": isWide,
                      },
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "span",
                        {
                          slot: "header",
                        },
                        "Sequence"
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        "span",
                        {
                          slot: "introduction",
                        },
                        "The sequence of actions of this script.",
                        Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                          "p",
                          null,
                          Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                            "a",
                            {
                              href: "https://home-assistant.io/docs/scripts/",
                              target: "_blank",
                            },
                            "Learn more about available actions."
                          )
                        )
                      ),
                      Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(
                        _script_index__WEBPACK_IMPORTED_MODULE_4__["default"],
                        {
                          script: sequence,
                          onChange: this.sequenceChanged,
                          hass: hass,
                          localize: localize,
                        }
                      )
                    )
                  );
                },
              },
            ]);

            return ScriptEditor;
          })(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

        /***/
      },

    /***/ "./src/panels/config/script/ha-config-script.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.js"
        );
        /* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts"
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
            '\n      <style>\n        ha-script-picker,\n        ha-script-editor {\n          height: 100%;\n        }\n      </style>\n      <app-route\n        route="[[route]]"\n        pattern="/edit/:script"\n        data="{{_routeData}}"\n        active="{{_edittingScript}}"\n      ></app-route>\n      <app-route\n        route="[[route]]"\n        pattern="/new"\n        active="{{_creatingNew}}"\n      ></app-route>\n\n      <template is="dom-if" if="[[!showEditor]]">\n        <ha-script-picker\n          hass="[[hass]]"\n          scripts="[[scripts]]"\n          is-wide="[[isWide]]"\n        ></ha-script-picker>\n      </template>\n\n      <template is="dom-if" if="[[showEditor]]" restamp="">\n        <ha-script-editor\n          hass="[[hass]]"\n          script="[[script]]"\n          is-wide="[[isWide]]"\n          creating-new="[[_creatingNew]]"\n        ></ha-script-editor>\n      </template>\n    ',
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

        var HaConfigScript =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaConfigScript, _PolymerElement);

            function HaConfigScript() {
              _classCallCheck(this, HaConfigScript);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaConfigScript).apply(this, arguments)
              );
            }

            _createClass(
              HaConfigScript,
              [
                {
                  key: "computeScript",
                  value: function computeScript(
                    scripts,
                    edittingAddon,
                    routeData
                  ) {
                    if (!scripts || !edittingAddon) {
                      return null;
                    }

                    for (var i = 0; i < scripts.length; i++) {
                      if (scripts[i].entity_id === routeData.script) {
                        return scripts[i];
                      }
                    }

                    return null;
                  },
                },
                {
                  key: "computeScripts",
                  value: function computeScripts(hass) {
                    var scripts = [];
                    Object.keys(hass.states).forEach(function(key) {
                      var entity = hass.states[key];

                      if (
                        Object(
                          _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__[
                            "default"
                          ]
                        )(entity) === "script"
                      ) {
                        scripts.push(entity);
                      }
                    });
                    return scripts.sort(function entitySortBy(
                      entityA,
                      entityB
                    ) {
                      var nameA = Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(entityA);
                      var nameB = Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ]
                      )(entityB);

                      if (nameA < nameB) {
                        return -1;
                      }

                      if (nameA > nameB) {
                        return 1;
                      }

                      return 0;
                    });
                  },
                },
                {
                  key: "computeShowEditor",
                  value: function computeShowEditor(
                    _edittingScript,
                    _creatingNew
                  ) {
                    return _creatingNew || _edittingScript;
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
                      route: Object,
                      isWide: Boolean,
                      _routeData: Object,
                      _routeMatches: Boolean,
                      _creatingNew: Boolean,
                      _edittingScript: Boolean,
                      scripts: {
                        type: Array,
                        computed: "computeScripts(hass)",
                      },
                      script: {
                        type: Object,
                        computed:
                          "computeScript(scripts, _edittingScript, _routeData)",
                      },
                      showEditor: {
                        type: Boolean,
                        computed:
                          "computeShowEditor(_edittingScript, _creatingNew)",
                      },
                    };
                  },
                },
              ]
            );

            return HaConfigScript;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
              "PolymerElement"
            ]
          );

        customElements.define("ha-config-script", HaConfigScript);

        /***/
      },

    /***/ "./src/panels/config/script/ha-script-editor.js":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.js ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! preact */ "./node_modules/preact/dist/preact.mjs"
        );
        /* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js"
        );
        /* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts"
        );
        /* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../js/script */ "./src/panels/config/js/script.js"
        );
        /* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts"
        );
        /* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js"
        );
        /* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../data/script */ "./src/data/script.ts"
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
            '\n      <style include="ha-style">\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot="introduction"] a {\n          color: var(--primary-color);\n        }\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      </style>\n      <ha-app-layout has-scrolling-region="">\n        <app-header slot="header" fixed="">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click="backTapped"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>Script [[computeName(script)]]</div>\n            <template is="dom-if" if="[[!creatingNew]]">\n              <paper-icon-button\n                icon="hass:delete"\n                on-click="_delete"\n              ></paper-icon-button>\n            </template>\n          </app-toolbar>\n        </app-header>\n        <div class="content">\n          <template is="dom-if" if="[[errors]]">\n            <div class="errors">[[errors]]</div>\n          </template>\n          <div id="root"></div>\n        </div>\n        <paper-fab\n          slot="fab"\n          is-wide$="[[isWide]]"\n          dirty$="[[dirty]]"\n          icon="hass:content-save"\n          title="Save"\n          on-click="saveScript"\n          rtl$="[[rtl]]"\n        ></paper-fab>\n      </ha-app-layout>\n    ',
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

        function ScriptEditor(mountEl, props, mergeEl) {
          return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(
            Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(
              _js_script__WEBPACK_IMPORTED_MODULE_9__["default"],
              props
            ),
            mountEl,
            mergeEl
          );
        }
        /*
         * @appliesMixin LocalizeMixin
         * @appliesMixin NavigateMixin
         */

        var HaScriptEditor =
          /*#__PURE__*/
          (function(_LocalizeMixin) {
            _inherits(HaScriptEditor, _LocalizeMixin);

            function HaScriptEditor() {
              _classCallCheck(this, HaScriptEditor);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaScriptEditor).apply(this, arguments)
              );
            }

            _createClass(
              HaScriptEditor,
              [
                {
                  key: "ready",
                  value: function ready() {
                    this.configChanged = this.configChanged.bind(this);

                    _get(
                      _getPrototypeOf(HaScriptEditor.prototype),
                      "ready",
                      this
                    ).call(this); // This call will initialize preact.
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function disconnectedCallback() {
                    _get(
                      _getPrototypeOf(HaScriptEditor.prototype),
                      "disconnectedCallback",
                      this
                    ).call(this);

                    if (this._rendered) {
                      Object(
                        _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__[
                          "default"
                        ]
                      )(this._rendered);
                      this._rendered = null;
                    }
                  },
                },
                {
                  key: "configChanged",
                  value: function configChanged(config) {
                    // onChange gets called a lot during initial rendering causing recursing calls.
                    if (this._rendered === null) return;
                    this.config = config;
                    this.errors = null;
                    this.dirty = true;

                    this._updateComponent();
                  },
                },
                {
                  key: "scriptChanged",
                  value: function scriptChanged(newVal, oldVal) {
                    var _this = this;

                    if (!newVal) return;

                    if (!this.hass) {
                      setTimeout(function() {
                        return _this.scriptChanged(newVal, oldVal);
                      }, 0);
                      return;
                    }

                    if (oldVal && oldVal.entity_id === newVal.entity_id) {
                      return;
                    }

                    this.hass
                      .callApi(
                        "get",
                        "config/script/config/" +
                          Object(
                            _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                              "default"
                            ]
                          )(newVal.entity_id)
                      )
                      .then(
                        function(config) {
                          // Normalize data: ensure sequence is a list
                          // Happens when people copy paste their scripts into the config
                          var value = config.sequence;

                          if (value && !Array.isArray(value)) {
                            config.sequence = [value];
                          }

                          _this.dirty = false;
                          _this.config = config;

                          _this._updateComponent();
                        },
                        function() {
                          alert(
                            "Only scripts inside scripts.yaml are editable."
                          );
                          history.back();
                        }
                      );
                  },
                },
                {
                  key: "creatingNewChanged",
                  value: function creatingNewChanged(newVal) {
                    if (!newVal) {
                      return;
                    }

                    this.dirty = false;
                    this.config = {
                      alias: "New Script",
                      sequence: [
                        {
                          service: "",
                          data: {},
                        },
                      ],
                    };

                    this._updateComponent();
                  },
                },
                {
                  key: "backTapped",
                  value: function backTapped() {
                    if (
                      this.dirty && // eslint-disable-next-line
                      !confirm(
                        "You have unsaved changes. Are you sure you want to leave?"
                      )
                    ) {
                      return;
                    }

                    history.back();
                  },
                },
                {
                  key: "_updateComponent",
                  value: function _updateComponent() {
                    var _this2 = this;

                    if (this._renderScheduled || !this.hass || !this.config)
                      return;
                    this._renderScheduled = true;
                    Promise.resolve().then(function() {
                      _this2._rendered = ScriptEditor(
                        _this2.$.root,
                        {
                          script: _this2.config,
                          onChange: _this2.configChanged,
                          isWide: _this2.isWide,
                          hass: _this2.hass,
                          localize: _this2.localize,
                        },
                        _this2._rendered
                      );
                      _this2._renderScheduled = false;
                    });
                  },
                },
                {
                  key: "_delete",
                  value: (function() {
                    var _delete2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      "Are you sure you want to delete this script?"
                                    )
                                  ) {
                                    _context.next = 2;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 2:
                                  _context.next = 4;
                                  return Object(
                                    _data_script__WEBPACK_IMPORTED_MODULE_16__[
                                      "deleteScript"
                                    ]
                                  )(
                                    this.hass,
                                    Object(
                                      _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                                        "default"
                                      ]
                                    )(this.script.entity_id)
                                  );

                                case 4:
                                  history.back();

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

                    function _delete() {
                      return _delete2.apply(this, arguments);
                    }

                    return _delete;
                  })(),
                },
                {
                  key: "saveScript",
                  value: function saveScript() {
                    var _this3 = this;

                    var id = this.creatingNew
                      ? "" + Date.now()
                      : Object(
                          _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__[
                            "default"
                          ]
                        )(this.script.entity_id);
                    this.hass
                      .callApi(
                        "post",
                        "config/script/config/" + id,
                        this.config
                      )
                      .then(
                        function() {
                          _this3.dirty = false;

                          if (_this3.creatingNew) {
                            _this3.navigate(
                              "/config/script/edit/".concat(id),
                              true
                            );
                          }
                        },
                        function(errors) {
                          _this3.errors = errors.body.message;
                          throw errors;
                        }
                      );
                  },
                },
                {
                  key: "computeName",
                  value: function computeName(script) {
                    return (
                      script &&
                      Object(
                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__[
                          "default"
                        ]
                      )(script)
                    );
                  },
                },
                {
                  key: "_computeRTL",
                  value: function _computeRTL(hass) {
                    return Object(
                      _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__[
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
                      hass: {
                        type: Object,
                      },
                      errors: {
                        type: Object,
                        value: null,
                      },
                      dirty: {
                        type: Boolean,
                        value: false,
                      },
                      config: {
                        type: Object,
                        value: null,
                      },
                      script: {
                        type: Object,
                        observer: "scriptChanged",
                      },
                      creatingNew: {
                        type: Boolean,
                        observer: "creatingNewChanged",
                      },
                      isWide: {
                        type: Boolean,
                        observer: "_updateComponent",
                      },
                      _rendered: {
                        type: Object,
                        value: null,
                      },
                      _renderScheduled: {
                        type: Boolean,
                        value: false,
                      },
                      rtl: {
                        type: Boolean,
                        reflectToAttribute: true,
                        computed: "_computeRTL(hass)",
                      },
                    };
                  },
                },
              ]
            );

            return HaScriptEditor;
          })(
            Object(
              _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"]
            )(
              Object(
                _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__["default"]
              )(
                _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
                  "PolymerElement"
                ]
              )
            )
          );

        customElements.define("ha-script-editor", HaScriptEditor);

        /***/
      },

    /***/ "./src/panels/config/script/ha-script-picker.ts":
      /*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../data/script */ "./src/data/script.ts"
        );
        /* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../util/toast */ "./src/util/toast.ts"
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
            "\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          padding-bottom: 8px;\n          margin-bottom: 56px;\n        }\n\n        .script {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px;\n          margin: 4px 0;\n        }\n\n        .script > *:first-child {\n          margin-right: 8px;\n        }\n\n        .script a[href],\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      ",
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
            '\n                    <div class="script">\n                      <paper-icon-button\n                        .script=',
            '\n                        icon="hass:play"\n                        @click=',
            "\n                      ></paper-icon-button>\n                      <paper-item-body>\n                        <div>",
            '</div>\n                      </paper-item-body>\n                      <div class="actions">\n                        <a href=',
            '>\n                          <paper-icon-button\n                            icon="hass:pencil"\n                          ></paper-icon-button>\n                        </a>\n                      </div>\n                    </div>\n                  ',
          ]);

          _templateObject3 = function _templateObject3() {
            return data;
          };

          return data;
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                  <div class="card-content">\n                    <p>We couldn\'t find any scripts.</p>\n                  </div>\n                ',
          ]);

          _templateObject2 = function _templateObject2() {
            return data;
          };

          return data;
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n      <hass-subpage\n        .header=",
            "\n      >\n        <ha-config-section .isWide=",
            '>\n          <div slot="header">Script Editor</div>\n          <div slot="introduction">\n            The script editor allows you to create and edit scripts. Please read\n            <a\n              href="https://home-assistant.io/docs/scripts/editor/"\n              target="_blank"\n              >the instructions</a\n            >\n            to make sure that you have configured JAVIS Home correctly.\n          </div>\n\n          <ha-card header="Pick script to edit">\n            ',
            '\n          </ha-card>\n        </ha-config-section>\n\n        <a href="/config/script/new">\n          <paper-fab\n            slot="fab"\n            ?is-wide=',
            '\n            icon="hass:plus"\n            title="Add Script"\n            ?rtl=',
            "\n          ></paper-fab>\n        </a>\n      </hass-subpage>\n    ",
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

        var HaScriptPicker = _decorate(
          [
            Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])(
              "ha-script-picker"
            ),
          ],
          function(_initialize, _LitElement) {
            var HaScriptPicker =
              /*#__PURE__*/
              (function(_LitElement2) {
                _inherits(HaScriptPicker, _LitElement2);

                function HaScriptPicker() {
                  var _getPrototypeOf2;

                  var _this;

                  _classCallCheck(this, HaScriptPicker);

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
                      HaScriptPicker
                    )).call.apply(_getPrototypeOf2, [this].concat(args))
                  );

                  _initialize(_assertThisInitialized(_this));

                  return _this;
                }

                return HaScriptPicker;
              })(_LitElement);

            return {
              F: HaScriptPicker,
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
                  key: "scripts",
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
                  kind: "method",
                  key: "render",
                  value: function render() {
                    var _this2 = this;

                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this.hass.localize("ui.panel.config.script.caption"),
                      this.isWide,
                      this.scripts.length === 0
                        ? Object(
                            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                          )(_templateObject2())
                        : this.scripts.map(function(script) {
                            return Object(
                              lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                            )(_templateObject3(), script, _this2._runScript, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(script), "/config/script/edit/".concat(script.entity_id));
                          }),
                      this.isWide,
                      Object(
                        _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__[
                          "computeRTL"
                        ]
                      )(this.hass)
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_runScript",
                  value: (function() {
                    var _runScript2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee(ev) {
                        var script;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  script = ev.currentTarget.script;
                                  _context.next = 3;
                                  return Object(
                                    _data_script__WEBPACK_IMPORTED_MODULE_10__[
                                      "triggerScript"
                                    ]
                                  )(this.hass, script.entity_id);

                                case 3:
                                  Object(
                                    _util_toast__WEBPACK_IMPORTED_MODULE_11__[
                                      "showToast"
                                    ]
                                  )(this, {
                                    message: "Triggered ".concat(
                                      Object(
                                        _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__[
                                          "default"
                                        ]
                                      )(script)
                                    ),
                                  });

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

                    function _runScript(_x) {
                      return _runScript2.apply(this, arguments);
                    }

                    return _runScript;
                  })(),
                },
                {
                  kind: "get",
                  static: true,
                  key: "styles",
                  value: function styles() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyle"],
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

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtY29uZmlnLXNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY3JpcHQvaGEtc2NyaXB0LXBpY2tlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgY29tcHV0ZU9iamVjdElkIGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRBY3Rpb24ge1xuICBldmVudDogc3RyaW5nO1xuICBldmVudF9kYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgZXZlbnRfZGF0YV90ZW1wbGF0ZT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBjb25zdCB0cmlnZ2VyU2NyaXB0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YXJpYWJsZXM/OiB7fVxuKSA9PiBoYXNzLmNhbGxTZXJ2aWNlKFwic2NyaXB0XCIsIGNvbXB1dGVPYmplY3RJZChlbnRpdHlJZCksIHZhcmlhYmxlcyk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTY3JpcHQgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgb2JqZWN0SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NyaXB0L2NvbmZpZy8ke29iamVjdElkfWApO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBTY3JpcHQgZnJvbSBcIi4vc2NyaXB0L2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmlwdEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VxdWVuY2VDaGFuZ2VkID0gdGhpcy5zZXF1ZW5jZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2NyaXB0LCB7XG4gICAgICAgIFtldi50YXJnZXQubmFtZV06IGV2LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNlcXVlbmNlQ2hhbmdlZChzZXF1ZW5jZSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zY3JpcHQsIHsgc2VxdWVuY2UgfSkpO1xuICB9XG5cbiAgcmVuZGVyKHsgc2NyaXB0LCBpc1dpZGUsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGFsaWFzLCBzZXF1ZW5jZSB9ID0gc2NyaXB0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj57YWxpYXN9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIFVzZSBzY3JpcHRzIHRvIGV4ZWN1dGUgYSBzZXF1ZW5jZSBvZiBhY3Rpb25zLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWxpYXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthbGlhc31cbiAgICAgICAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9e2lzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlNlcXVlbmNlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIFRoZSBzZXF1ZW5jZSBvZiBhY3Rpb25zIG9mIHRoaXMgc2NyaXB0LlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL2RvY3Mvc2NyaXB0cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGFib3V0IGF2YWlsYWJsZSBhY3Rpb25zLlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgIHNjcmlwdD17c2VxdWVuY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXF1ZW5jZUNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXNjcmlwdC1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaGEtc2NyaXB0LXBpY2tlclwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuY2xhc3MgSGFDb25maWdTY3JpcHQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLXNjcmlwdC1waWNrZXIsXG4gICAgICAgIGhhLXNjcmlwdC1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL2VkaXQvOnNjcmlwdFwiXG4gICAgICAgIGRhdGE9XCJ7e19yb3V0ZURhdGF9fVwiXG4gICAgICAgIGFjdGl2ZT1cInt7X2VkaXR0aW5nU2NyaXB0fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhdHRlcm49XCIvbmV3XCJcbiAgICAgICAgYWN0aXZlPVwie3tfY3JlYXRpbmdOZXd9fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc2hvd0VkaXRvcl1dXCI+XG4gICAgICAgIDxoYS1zY3JpcHQtcGlja2VyXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzY3JpcHRzPVwiW1tzY3JpcHRzXV1cIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgPjwvaGEtc2NyaXB0LXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93RWRpdG9yXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxoYS1zY3JpcHQtZWRpdG9yXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzY3JpcHQ9XCJbW3NjcmlwdF1dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgY3JlYXRpbmctbmV3PVwiW1tfY3JlYXRpbmdOZXddXVwiXG4gICAgICAgID48L2hhLXNjcmlwdC1lZGl0b3I+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBfcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICBfcm91dGVNYXRjaGVzOiBCb29sZWFuLFxuICAgICAgX2NyZWF0aW5nTmV3OiBCb29sZWFuLFxuICAgICAgX2VkaXR0aW5nU2NyaXB0OiBCb29sZWFuLFxuXG4gICAgICBzY3JpcHRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2NyaXB0cyhoYXNzKVwiLFxuICAgICAgfSxcblxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBfZWRpdHRpbmdTY3JpcHQsIF9yb3V0ZURhdGEpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93RWRpdG9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ1NjcmlwdCwgX2NyZWF0aW5nTmV3KVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVNjcmlwdChzY3JpcHRzLCBlZGl0dGluZ0FkZG9uLCByb3V0ZURhdGEpIHtcbiAgICBpZiAoIXNjcmlwdHMgfHwgIWVkaXR0aW5nQWRkb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzY3JpcHRzW2ldLmVudGl0eV9pZCA9PT0gcm91dGVEYXRhLnNjcmlwdCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wdXRlU2NyaXB0cyhoYXNzKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGVudGl0eSA9IGhhc3Muc3RhdGVzW2tleV07XG5cbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSA9PT0gXCJzY3JpcHRcIikge1xuICAgICAgICBzY3JpcHRzLnB1c2goZW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY3JpcHRzLnNvcnQoZnVuY3Rpb24gZW50aXR5U29ydEJ5KGVudGl0eUEsIGVudGl0eUIpIHtcbiAgICAgIHZhciBuYW1lQSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5QSk7XG4gICAgICB2YXIgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuXG4gICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0b3IoX2VkaXR0aW5nU2NyaXB0LCBfY3JlYXRpbmdOZXcpIHtcbiAgICByZXR1cm4gX2NyZWF0aW5nTmV3IHx8IF9lZGl0dGluZ1NjcmlwdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2NyaXB0XCIsIEhhQ29uZmlnU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYlwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYS1hcHAtbGF5b3V0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcblxuaW1wb3J0IFNjcmlwdCBmcm9tIFwiLi4vanMvc2NyaXB0XCI7XG5pbXBvcnQgdW5tb3VudFByZWFjdCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3ByZWFjdC91bm1vdW50XCI7XG5cbmltcG9ydCBjb21wdXRlT2JqZWN0SWQgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVOYW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBkZWxldGVTY3JpcHQgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY3JpcHRcIjtcblxuZnVuY3Rpb24gU2NyaXB0RWRpdG9yKG1vdW50RWwsIHByb3BzLCBtZXJnZUVsKSB7XG4gIHJldHVybiByZW5kZXIoaChTY3JpcHQsIHByb3BzKSwgbW91bnRFbCwgbWVyZ2VFbCk7XG59XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICovXG5jbGFzcyBIYVNjcmlwdEVkaXRvciBleHRlbmRzIExvY2FsaXplTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgLmVycm9ycyB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMsXG4gICAgICAgIC5zY3JpcHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VycyBoYS1jYXJkLFxuICAgICAgICAuc2NyaXB0IGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1jYXJkIG13Yy1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbltzbG90PVwiaW50cm9kdWN0aW9uXCJdIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtODBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4tYm90dG9tIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltkaXJ0eV0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1hcHAtbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPVwiXCI+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD1cIlwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwiYmFja1RhcHBlZFwiXG4gICAgICAgICAgICA+PC9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPlNjcmlwdCBbW2NvbXB1dGVOYW1lKHNjcmlwdCldXTwvZGl2PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFjcmVhdGluZ05ld11dXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGVsZXRlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JzXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj5bW2Vycm9yc11dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHBhcGVyLWZhYlxuICAgICAgICAgIHNsb3Q9XCJmYWJcIlxuICAgICAgICAgIGlzLXdpZGUkPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgZGlydHkkPVwiW1tkaXJ0eV1dXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpjb250ZW50LXNhdmVcIlxuICAgICAgICAgIHRpdGxlPVwiU2F2ZVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJzYXZlU2NyaXB0XCJcbiAgICAgICAgICBydGwkPVwiW1tydGxdXVwiXG4gICAgICAgID48L3BhcGVyLWZhYj5cbiAgICAgIDwvaGEtYXBwLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgZGlydHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBzY3JpcHQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzY3JpcHRDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBjcmVhdGluZ05ldzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJjcmVhdGluZ05ld0NoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfdXBkYXRlQ29tcG9uZW50XCIsXG4gICAgICB9LFxuXG4gICAgICBfcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIF9yZW5kZXJTY2hlZHVsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuY29uZmlnQ2hhbmdlZCA9IHRoaXMuY29uZmlnQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHN1cGVyLnJlYWR5KCk7IC8vIFRoaXMgY2FsbCB3aWxsIGluaXRpYWxpemUgcHJlYWN0LlxuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcbiAgICAgIHVubW91bnRQcmVhY3QodGhpcy5fcmVuZGVyZWQpO1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpZ0NoYW5nZWQoY29uZmlnKSB7XG4gICAgLy8gb25DaGFuZ2UgZ2V0cyBjYWxsZWQgYSBsb3QgZHVyaW5nIGluaXRpYWwgcmVuZGVyaW5nIGNhdXNpbmcgcmVjdXJzaW5nIGNhbGxzLlxuICAgIGlmICh0aGlzLl9yZW5kZXJlZCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuZXJyb3JzID0gbnVsbDtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgfVxuXG4gIHNjcmlwdENoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2NyaXB0Q2hhbmdlZChuZXdWYWwsIG9sZFZhbCksIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJnZXRcIixcbiAgICAgICAgXCJjb25maWcvc2NyaXB0L2NvbmZpZy9cIiArIGNvbXB1dGVPYmplY3RJZChuZXdWYWwuZW50aXR5X2lkKVxuICAgICAgKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChjb25maWcpID0+IHtcbiAgICAgICAgICAvLyBOb3JtYWxpemUgZGF0YTogZW5zdXJlIHNlcXVlbmNlIGlzIGEgbGlzdFxuICAgICAgICAgIC8vIEhhcHBlbnMgd2hlbiBwZW9wbGUgY29weSBwYXN0ZSB0aGVpciBzY3JpcHRzIGludG8gdGhlIGNvbmZpZ1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbmZpZy5zZXF1ZW5jZTtcbiAgICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBjb25maWcuc2VxdWVuY2UgPSBbdmFsdWVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiT25seSBzY3JpcHRzIGluc2lkZSBzY3JpcHRzLnlhbWwgYXJlIGVkaXRhYmxlLlwiKTtcbiAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGNyZWF0aW5nTmV3Q2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBhbGlhczogXCJOZXcgU2NyaXB0XCIsXG4gICAgICBzZXF1ZW5jZTogW3sgc2VydmljZTogXCJcIiwgZGF0YToge30gfV0sXG4gICAgfTtcbiAgICB0aGlzLl91cGRhdGVDb21wb25lbnQoKTtcbiAgfVxuXG4gIGJhY2tUYXBwZWQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5kaXJ0eSAmJlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAhY29uZmlybShcIllvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlP1wiKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIF91cGRhdGVDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlclNjaGVkdWxlZCB8fCAhdGhpcy5oYXNzIHx8ICF0aGlzLmNvbmZpZykgcmV0dXJuO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IFNjcmlwdEVkaXRvcihcbiAgICAgICAgdGhpcy4kLnJvb3QsXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JpcHQ6IHRoaXMuY29uZmlnLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNvbmZpZ0NoYW5nZWQsXG4gICAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgbG9jYWxpemU6IHRoaXMubG9jYWxpemUsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfZGVsZXRlKCkge1xuICAgIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzY3JpcHQ/XCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IGRlbGV0ZVNjcmlwdCh0aGlzLmhhc3MsIGNvbXB1dGVPYmplY3RJZCh0aGlzLnNjcmlwdC5lbnRpdHlfaWQpKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHNhdmVTY3JpcHQoKSB7XG4gICAgdmFyIGlkID0gdGhpcy5jcmVhdGluZ05ld1xuICAgICAgPyBcIlwiICsgRGF0ZS5ub3coKVxuICAgICAgOiBjb21wdXRlT2JqZWN0SWQodGhpcy5zY3JpcHQuZW50aXR5X2lkKTtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcInBvc3RcIiwgXCJjb25maWcvc2NyaXB0L2NvbmZpZy9cIiArIGlkLCB0aGlzLmNvbmZpZykudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0ZShgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke2lkfWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9ycykgPT4ge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZU5hbWUoc2NyaXB0KSB7XG4gICAgcmV0dXJuIHNjcmlwdCAmJiBjb21wdXRlU3RhdGVOYW1lKHNjcmlwdCk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2NyaXB0LWVkaXRvclwiLCBIYVNjcmlwdEVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZmFiL3BhcGVyLWZhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgY29tcHV0ZVN0YXRlTmFtZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgdHJpZ2dlclNjcmlwdCB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjcmlwdFwiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvdG9hc3RcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zY3JpcHQtcGlja2VyXCIpXG5jbGFzcyBIYVNjcmlwdFBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY3JpcHRzITogSGFzc0VudGl0eVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmNhcHRpb25cIil9XG4gICAgICA+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlNjcmlwdCBFZGl0b3I8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIFRoZSBzY3JpcHQgZWRpdG9yIGFsbG93cyB5b3UgdG8gY3JlYXRlIGFuZCBlZGl0IHNjcmlwdHMuIFBsZWFzZSByZWFkXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL3NjcmlwdHMvZWRpdG9yL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID50aGUgaW5zdHJ1Y3Rpb25zPC9hXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB0byBtYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBjb25maWd1cmVkIEpBVklTIEhvbWUgY29ycmVjdGx5LlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiUGljayBzY3JpcHQgdG8gZWRpdFwiPlxuICAgICAgICAgICAgJHt0aGlzLnNjcmlwdHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2UgY291bGRuJ3QgZmluZCBhbnkgc2NyaXB0cy48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGhpcy5zY3JpcHRzLm1hcChcbiAgICAgICAgICAgICAgICAgIChzY3JpcHQpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JpcHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY3JpcHQ9JHtzY3JpcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3J1blNjcmlwdH1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2NvbXB1dGVTdGF0ZU5hbWUoc2NyaXB0KX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0ke2AvY29uZmlnL3NjcmlwdC9lZGl0LyR7c2NyaXB0LmVudGl0eV9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL3NjcmlwdC9uZXdcIj5cbiAgICAgICAgICA8cGFwZXItZmFiXG4gICAgICAgICAgICBzbG90PVwiZmFiXCJcbiAgICAgICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQWRkIFNjcmlwdFwiXG4gICAgICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgID48L3BhcGVyLWZhYj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3J1blNjcmlwdChldikge1xuICAgIGNvbnN0IHNjcmlwdCA9IGV2LmN1cnJlbnRUYXJnZXQuc2NyaXB0IGFzIEhhc3NFbnRpdHk7XG4gICAgYXdhaXQgdHJpZ2dlclNjcmlwdCh0aGlzLmhhc3MsIHNjcmlwdC5lbnRpdHlfaWQpO1xuICAgIHNob3dUb2FzdCh0aGlzLCB7XG4gICAgICBtZXNzYWdlOiBgVHJpZ2dlcmVkICR7Y29tcHV0ZVN0YXRlTmFtZShzY3JpcHQpfWAsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGhvcml6b250YWw7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdCA+ICo6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdCBhW2hyZWZdLFxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zY3JpcHQtcGlja2VyXCI6IEhhU2NyaXB0UGlja2VyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTs7OztBQTdEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF6R0E7QUFDQTtBQW9DQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBd0JBOzs7O0FBakVBO0FBQ0E7QUE0R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQTBKQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTVSQTtBQUNBO0FBZ0dBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE3Q0E7QUFtREE7Ozs7QUF4SkE7QUFDQTtBQStSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEE7QUFTQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBd0JBO0FBQUE7QUFrQ0E7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUE2REE7OztBQXhJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
