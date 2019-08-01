(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["lovelace-yaml-editor"],
  {
    /***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
      /*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
      /*! exports provided: isEntityId */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isEntityId",
          function() {
            return isEntityId;
          }
        );
        function isEntityId(value) {
          if (typeof value !== "string") {
            return "entity id should be a string";
          }

          if (!value.includes(".")) {
            return "entity id should be in the format 'domain.entity'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/is-icon.ts":
      /*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
      /*! exports provided: isIcon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isIcon",
          function() {
            return isIcon;
          }
        );
        function isIcon(value) {
          if (typeof value !== "string") {
            return "icon should be a string";
          }

          if (!value.includes(":")) {
            return "icon should be in the format 'mdi:icon'";
          }

          return true;
        }

        /***/
      },

    /***/ "./src/panels/lovelace/common/structs/struct.ts":
      /*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
      /*! exports provided: struct */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "struct",
          function() {
            return struct;
          }
        );
        /* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! superstruct */ "./node_modules/superstruct/lib/index.es.js"
        );
        /* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts"
        );
        /* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts"
        );

        var struct = Object(
          superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"]
        )({
          types: {
            "entity-id":
              _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
            icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
          },
        });

        /***/
      },

    /***/ "./src/panels/lovelace/hui-editor.ts":
      /*!*******************************************!*\
  !*** ./src/panels/lovelace/hui-editor.ts ***!
  \*******************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! lit-element */ "./node_modules/lit-element/lit-element.js"
        );
        /* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js"
        );
        /* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! js-yaml */ "./node_modules/js-yaml/index.js"
        );
        /* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          js_yaml__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js"
        );
        /* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js"
        );
        /* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
        );
        /* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js"
        );
        /* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts"
        );
        /* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../components/ha-icon */ "./src/components/ha-icon.ts"
        );
        /* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../resources/styles */ "./src/resources/styles.ts"
        );
        /* harmony import */ var _components_hui_yaml_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./components/hui-yaml-editor */ "./src/panels/lovelace/components/hui-yaml-editor.ts"
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
            "\n        :host {\n          --code-mirror-height: 100%;\n        }\n\n        app-header-layout {\n          height: 100vh;\n        }\n\n        app-toolbar {\n          background-color: var(--dark-background-color, #455a64);\n          color: var(--dark-text-color);\n        }\n\n        .comments {\n          font-size: 16px;\n        }\n\n        .content {\n          height: calc(100vh - 68px);\n        }\n\n        hui-code-editor {\n          height: 100%;\n        }\n\n        .save-button {\n          opacity: 0;\n          font-size: 14px;\n          padding: 0px 10px;\n        }\n\n        .saved {\n          opacity: 1;\n        }\n      ",
          ]);

          _templateObject2 = function _templateObject2() {
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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <app-header-layout>\n        <app-header>\n          <app-toolbar>\n            <paper-icon-button\n              icon="hass:close"\n              @click="',
            '"\n            ></paper-icon-button>\n            <div main-title>\n              ',
            '\n            </div>\n            <div\n              class="save-button\n              ',
            '"\n            >\n              ',
            '\n            </div>\n            <mwc-button raised @click="',
            '"\n              >',
            '</mwc-button\n            >\n          </app-toolbar>\n        </app-header>\n        <div class="content">\n          <hui-yaml-editor\n            .hass="',
            '"\n            @yaml-changed="',
            '"\n            @yaml-save="',
            '"\n          >\n          </hui-yaml-editor>\n        </div>\n      </app-header-layout>\n    ',
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

        // This is not a duplicate import, one is for types, one is for element.
        // tslint:disable-next-line

        var lovelaceStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__[
          "struct"
        ].interface({
          title: "string?",
          views: ["object"],
          resources: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__[
            "struct"
          ].optional(["object"]),
        });

        var LovelaceFullConfigEditor =
          /*#__PURE__*/
          (function(_LitElement) {
            _inherits(LovelaceFullConfigEditor, _LitElement);

            function LovelaceFullConfigEditor() {
              var _getPrototypeOf2;

              var _this;

              _classCallCheck(this, LovelaceFullConfigEditor);

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
                  LovelaceFullConfigEditor
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              );
              _this.hass = void 0;
              _this.lovelace = void 0;
              _this.closeEditor = void 0;
              _this._saving = void 0;
              _this._changed = void 0;
              _this._generation = void 0;
              return _this;
            }

            _createClass(
              LovelaceFullConfigEditor,
              [
                {
                  key: "render",
                  value: function render() {
                    return Object(
                      lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]
                    )(
                      _templateObject(),
                      this._closeEditor,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.header"
                      ),
                      Object(
                        lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__[
                          "classMap"
                        ]
                      )({
                        saved: this._saving === false || this._changed === true,
                      }),
                      this._changed
                        ? this.hass.localize(
                            "ui.panel.lovelace.editor.raw_editor.unsaved_changes"
                          )
                        : this.hass.localize(
                            "ui.panel.lovelace.editor.raw_editor.saved"
                          ),
                      this._handleSave,
                      this.hass.localize(
                        "ui.panel.lovelace.editor.raw_editor.save"
                      ),
                      this.hass,
                      this._yamlChanged,
                      this._handleSave
                    );
                  },
                },
                {
                  key: "firstUpdated",
                  value: function firstUpdated() {
                    this.yamlEditor.value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(
                      this.lovelace.config
                    );
                    this.yamlEditor.codemirror.clearHistory();
                    this._generation = this.yamlEditor.codemirror.changeGeneration(
                      true
                    );
                  },
                },
                {
                  key: "_yamlChanged",
                  value: function _yamlChanged() {
                    if (!this._generation) {
                      return;
                    }

                    this._changed = !this.yamlEditor.codemirror.isClean(
                      this._generation
                    );

                    if (this._changed && !window.onbeforeunload) {
                      window.onbeforeunload = function() {
                        return true;
                      };
                    } else if (!this._changed && window.onbeforeunload) {
                      window.onbeforeunload = null;
                    }
                  },
                },
                {
                  key: "_closeEditor",
                  value: function _closeEditor() {
                    if (this._changed) {
                      if (
                        !confirm(
                          "You have unsaved changes, are you sure you want to exit?"
                        )
                      ) {
                        return;
                      }
                    }

                    window.onbeforeunload = null;

                    if (this.closeEditor) {
                      this.closeEditor();
                    }
                  },
                },
                {
                  key: "_handleSave",
                  value: (function() {
                    var _handleSave2 = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var value;
                        return regeneratorRuntime.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  this._saving = true;

                                  if (!this.yamlEditor.hasComments) {
                                    _context.next = 4;
                                    break;
                                  }

                                  if (
                                    confirm(
                                      "Your config contains comment(s), these will not be saved. Do you want to continue?"
                                    )
                                  ) {
                                    _context.next = 4;
                                    break;
                                  }

                                  return _context.abrupt("return");

                                case 4:
                                  _context.prev = 4;
                                  value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(
                                    this.yamlEditor.value
                                  );
                                  _context.next = 13;
                                  break;

                                case 8:
                                  _context.prev = 8;
                                  _context.t0 = _context["catch"](4);
                                  alert(
                                    "Unable to parse YAML: ".concat(_context.t0)
                                  );
                                  this._saving = false;
                                  return _context.abrupt("return");

                                case 13:
                                  _context.prev = 13;
                                  value = lovelaceStruct(value);
                                  _context.next = 21;
                                  break;

                                case 17:
                                  _context.prev = 17;
                                  _context.t1 = _context["catch"](13);
                                  alert(
                                    "Your config is not valid: ".concat(
                                      _context.t1
                                    )
                                  );
                                  return _context.abrupt("return");

                                case 21:
                                  _context.prev = 21;
                                  _context.next = 24;
                                  return this.lovelace.saveConfig(value);

                                case 24:
                                  _context.next = 29;
                                  break;

                                case 26:
                                  _context.prev = 26;
                                  _context.t2 = _context["catch"](21);
                                  alert(
                                    "Unable to save YAML: ".concat(_context.t2)
                                  );

                                case 29:
                                  this._generation = this.yamlEditor.codemirror.changeGeneration(
                                    true
                                  );
                                  window.onbeforeunload = null;
                                  this._saving = false;
                                  this._changed = false;

                                case 33:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          this,
                          [[4, 8], [13, 17], [21, 26]]
                        );
                      })
                    );

                    function _handleSave() {
                      return _handleSave2.apply(this, arguments);
                    }

                    return _handleSave;
                  })(),
                },
                {
                  key: "yamlEditor",
                  get: function get() {
                    return this.shadowRoot.querySelector("hui-yaml-editor");
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function get() {
                    return {
                      hass: {},
                      lovelace: {},
                      closeEditor: {},
                      _saving: {},
                      _changed: {},
                    };
                  },
                },
                {
                  key: "styles",
                  get: function get() {
                    return [
                      _resources_styles__WEBPACK_IMPORTED_MODULE_11__[
                        "haStyle"
                      ],
                      Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(
                        _templateObject2()
                      ),
                    ];
                  },
                },
              ]
            );

            return LovelaceFullConfigEditor;
          })(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

        customElements.define("hui-editor", LovelaceFullConfigEditor);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UteWFtbC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9odWktZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgVGVtcGxhdGVSZXN1bHQsIENTU1Jlc3VsdCwgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHlhbWwgZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL2h1aS15YW1sLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEh1aVlhbWxFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL2h1aS15YW1sLWVkaXRvclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBsb3ZlbGFjZVN0cnVjdCA9IHN0cnVjdC5pbnRlcmZhY2Uoe1xuICB0aXRsZTogXCJzdHJpbmc/XCIsXG4gIHZpZXdzOiBbXCJvYmplY3RcIl0sXG4gIHJlc291cmNlczogc3RydWN0Lm9wdGlvbmFsKFtcIm9iamVjdFwiXSksXG59KTtcblxuY2xhc3MgTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG4gIHB1YmxpYyBjbG9zZUVkaXRvcj86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX3NhdmluZz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2NoYW5nZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIF9nZW5lcmF0aW9uPzogbnVtYmVyO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBsb3ZlbGFjZToge30sXG4gICAgICBjbG9zZUVkaXRvcjoge30sXG4gICAgICBfc2F2aW5nOiB7fSxcbiAgICAgIF9jaGFuZ2VkOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0PlxuICAgICAgICA8YXBwLWhlYWRlcj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRWRpdG9yfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuaGVhZGVyXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInNhdmUtYnV0dG9uXG4gICAgICAgICAgICAgICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgIHNhdmVkOiB0aGlzLl9zYXZpbmchID09PSBmYWxzZSB8fCB0aGlzLl9jaGFuZ2VkID09PSB0cnVlLFxuICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuX2NoYW5nZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IudW5zYXZlZF9jaGFuZ2VzXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZWRcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlU2F2ZX1cIlxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxodWkteWFtbC1lZGl0b3JcbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIEB5YW1sLWNoYW5nZWQ9XCIke3RoaXMuX3lhbWxDaGFuZ2VkfVwiXG4gICAgICAgICAgICBAeWFtbC1zYXZlPVwiJHt0aGlzLl9oYW5kbGVTYXZlfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvaHVpLXlhbWwtZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy55YW1sRWRpdG9yLnZhbHVlID0geWFtbC5zYWZlRHVtcCh0aGlzLmxvdmVsYWNlIS5jb25maWcpO1xuICAgIHRoaXMueWFtbEVkaXRvci5jb2RlbWlycm9yLmNsZWFySGlzdG9yeSgpO1xuICAgIHRoaXMuX2dlbmVyYXRpb24gPSB0aGlzLnlhbWxFZGl0b3IuY29kZW1pcnJvci5jaGFuZ2VHZW5lcmF0aW9uKHRydWUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLS1jb2RlLW1pcnJvci1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtaGVhZGVyLWxheW91dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IsICM0NTVhNjQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1lbnRzIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG4gICAgICAgIH1cblxuICAgICAgICBodWktY29kZS1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYXZlLWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2F2ZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX3lhbWxDaGFuZ2VkKCkge1xuICAgIGlmICghdGhpcy5fZ2VuZXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VkID0gIXRoaXMueWFtbEVkaXRvci5jb2RlbWlycm9yLmlzQ2xlYW4odGhpcy5fZ2VuZXJhdGlvbik7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQgJiYgIXdpbmRvdy5vbmJlZm9yZXVubG9hZCkge1xuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlZCAmJiB3aW5kb3cub25iZWZvcmV1bmxvYWQpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VFZGl0b3IoKSB7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXCJZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMsIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBleGl0P1wiKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICBpZiAodGhpcy5jbG9zZUVkaXRvcikge1xuICAgICAgdGhpcy5jbG9zZUVkaXRvcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVNhdmUoKSB7XG4gICAgdGhpcy5fc2F2aW5nID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnlhbWxFZGl0b3IuaGFzQ29tbWVudHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgXCJZb3VyIGNvbmZpZyBjb250YWlucyBjb21tZW50KHMpLCB0aGVzZSB3aWxsIG5vdCBiZSBzYXZlZC4gRG8geW91IHdhbnQgdG8gY29udGludWU/XCJcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0geWFtbC5zYWZlTG9hZCh0aGlzLnlhbWxFZGl0b3IudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFVuYWJsZSB0byBwYXJzZSBZQU1MOiAke2Vycn1gKTtcbiAgICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBsb3ZlbGFjZVN0cnVjdCh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgWW91ciBjb25maWcgaXMgbm90IHZhbGlkOiAke2Vycn1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMubG92ZWxhY2UhLnNhdmVDb25maWcodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYFVuYWJsZSB0byBzYXZlIFlBTUw6ICR7ZXJyfWApO1xuICAgIH1cbiAgICB0aGlzLl9nZW5lcmF0aW9uID0gdGhpcy55YW1sRWRpdG9yLmNvZGVtaXJyb3IuY2hhbmdlR2VuZXJhdGlvbih0cnVlKTtcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHlhbWxFZGl0b3IoKTogSHVpWWFtbEVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImh1aS15YW1sLWVkaXRvclwiKSE7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0b3JcIjogTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImh1aS1lZGl0b3JcIiwgTG92ZWxhY2VGdWxsQ29uZmlnRWRpdG9yKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVlBO0FBQ0E7QUFnQkE7QUFEQTtBQTZCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7QUFFQTtBQUNBOzs7OztBQUlBOzs7Ozs7O0FBRUE7Ozs7OztBQUlBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7O0FBN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBdURBO0FBQ0E7QUF1Q0E7Ozs7QUEvR0E7QUFDQTtBQTZMQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
