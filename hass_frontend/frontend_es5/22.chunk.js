(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [22],
  {
    /***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
      /*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-styles/color.js */ "./src/util/empty.js"
        );
        /* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js"
        );
        /* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js"
        );
        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
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

        /**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

        var template = Object(
          _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__[
            "html"
          ]
        )(_templateObject());
        template.setAttribute("strip-whitespace", "");
        /**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

        Object(
          _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__[
            "Polymer"
          ]
        )({
          _template: template,
          is: "paper-spinner",
          behaviors: [
            _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__[
              "PaperSpinnerBehavior"
            ],
          ],
        });

        /***/
      },

    /***/ "./src/panels/developer-tools/template/developer-tools-template.js":
      /*!*************************************************************************!*\
  !*** ./src/panels/developer-tools/template/developer-tools-template.js ***!
  \*************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js"
        );
        /* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../resources/ha-style */ "./src/resources/ha-style.ts"
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
            '\n      <style include="ha-style iron-flex iron-positioning"></style>\n      <style>\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .edit-pane {\n          margin-right: 16px;\n        }\n\n        .edit-pane a {\n          color: var(--dark-primary-color);\n        }\n\n        .horizontal .edit-pane {\n          max-width: 50%;\n        }\n\n        .render-pane {\n          position: relative;\n          max-width: 50%;\n        }\n\n        .render-spinner {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n        }\n\n        paper-textarea {\n          --paper-input-container-input: {\n            @apply --paper-font-code1;\n          }\n        }\n\n        .rendered {\n          @apply --paper-font-code1;\n          clear: both;\n          white-space: pre-wrap;\n        }\n\n        .rendered.error {\n          color: red;\n        }\n      </style>\n\n      <div class$="[[computeFormClasses(narrow)]]">\n        <div class="edit-pane">\n          <p>\n            Templates are rendered using the Jinja2 template engine with some\n            JAVIS Home specific extensions.\n          </p>\n          <ul>\n            <li>\n              <a\n                href="http://jinja.pocoo.org/docs/dev/templates/"\n                target="_blank"\n                >Jinja2 template documentation</a\n              >\n            </li>\n            <li>\n              <a\n                href="https://home-assistant.io/docs/configuration/templating/"\n                target="_blank"\n                >JAVIS Home template extensions</a\n              >\n            </li>\n          </ul>\n          <paper-textarea\n            label="Template editor"\n            value="{{template}}"\n            autofocus\n          ></paper-textarea>\n        </div>\n\n        <div class="render-pane">\n          <paper-spinner\n            class="render-spinner"\n            active="[[rendering]]"\n          ></paper-spinner>\n          <pre class$="[[computeRenderedClasses(error)]]">[[processed]]</pre>\n        </div>\n      </div>\n    ',
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

        var HaPanelDevTemplate =
          /*#__PURE__*/
          (function(_PolymerElement) {
            _inherits(HaPanelDevTemplate, _PolymerElement);

            function HaPanelDevTemplate() {
              _classCallCheck(this, HaPanelDevTemplate);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(HaPanelDevTemplate).apply(this, arguments)
              );
            }

            _createClass(
              HaPanelDevTemplate,
              [
                {
                  key: "computeFormClasses",
                  value: function computeFormClasses(narrow) {
                    return narrow
                      ? "content fit"
                      : "content fit layout horizontal";
                  },
                },
                {
                  key: "computeRenderedClasses",
                  value: function computeRenderedClasses(error) {
                    return error ? "error rendered" : "rendered";
                  },
                },
                {
                  key: "templateChanged",
                  value: function templateChanged() {
                    var _this = this;

                    if (this.error) {
                      this.error = false;
                    }

                    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__[
                      "Debouncer"
                    ].debounce(
                      this._debouncer,
                      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_2__[
                        "timeOut"
                      ].after(500),
                      function() {
                        _this.renderTemplate();
                      }
                    );
                  },
                },
                {
                  key: "renderTemplate",
                  value: function renderTemplate() {
                    this.rendering = true;
                    this.hass
                      .callApi("POST", "template", {
                        template: this.template,
                      })
                      .then(
                        function(processed) {
                          this.processed = processed;
                          this.rendering = false;
                        }.bind(this),
                        function(error) {
                          this.processed =
                            (error && error.body && error.body.message) ||
                            "Unknown error rendering template";
                          this.error = true;
                          this.rendering = false;
                        }.bind(this)
                      );
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
                      error: {
                        type: Boolean,
                        value: false,
                      },
                      rendering: {
                        type: Boolean,
                        value: false,
                      },
                      template: {
                        type: String,

                        /* eslint-disable max-len */
                        value:
                          'Imitate available variables:\n{% set my_test_json = {\n  "temperature": 25,\n  "unit": "\xB0C"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state("device_tracker.paulus", "home") and\n      is_state("device_tracker.anne_therese", "home") -%}\n  You are both home, you silly\n{%- else -%}\n  Anne Therese is at {{ states("device_tracker.anne_therese") }}\n  Paulus is at {{ states("device_tracker.paulus") }}\n{%- endif %}\n\nFor loop example:\n{% for state in states.sensor -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.',

                        /* eslint-enable max-len */
                        observer: "templateChanged",
                      },
                      processed: {
                        type: String,
                        value: "",
                      },
                    };
                  },
                },
              ]
            );

            return HaPanelDevTemplate;
          })(
            _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__[
              "PolymerElement"
            ]
          );

        customElements.define("developer-tools-template", HaPanelDevTemplate);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL3RlbXBsYXRlL2RldmVsb3Blci10b29scy10ZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuY2xhc3MgSGFQYW5lbERldlRlbXBsYXRlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZSBpcm9uLWZsZXggaXJvbi1wb3NpdGlvbmluZ1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZWRpdC1wYW5lIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZWRpdC1wYW5lIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvcml6b250YWwgLmVkaXQtcGFuZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVuZGVyLXBhbmUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZW5kZXItc3Bpbm5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci10ZXh0YXJlYSB7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29kZTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlbmRlcmVkIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvZGUxO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZW5kZXJlZC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVGb3JtQ2xhc3NlcyhuYXJyb3cpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtcGFuZVwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGVtcGxhdGVzIGFyZSByZW5kZXJlZCB1c2luZyB0aGUgSmluamEyIHRlbXBsYXRlIGVuZ2luZSB3aXRoIHNvbWVcbiAgICAgICAgICAgIEpBVklTIEhvbWUgc3BlY2lmaWMgZXh0ZW5zaW9ucy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vamluamEucG9jb28ub3JnL2RvY3MvZGV2L3RlbXBsYXRlcy9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPkppbmphMiB0ZW1wbGF0ZSBkb2N1bWVudGF0aW9uPC9hXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9jb25maWd1cmF0aW9uL3RlbXBsYXRpbmcvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5KQVZJUyBIb21lIHRlbXBsYXRlIGV4dGVuc2lvbnM8L2FcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICAgICAgbGFiZWw9XCJUZW1wbGF0ZSBlZGl0b3JcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e3RlbXBsYXRlfX1cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgPjwvcGFwZXItdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZW5kZXItcGFuZVwiPlxuICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICBjbGFzcz1cInJlbmRlci1zcGlubmVyXCJcbiAgICAgICAgICAgIGFjdGl2ZT1cIltbcmVuZGVyaW5nXV1cIlxuICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgPHByZSBjbGFzcyQ9XCJbW2NvbXB1dGVSZW5kZXJlZENsYXNzZXMoZXJyb3IpXV1cIj5bW3Byb2Nlc3NlZF1dPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlcnJvcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICByZW5kZXJpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgICAgIHZhbHVlOiBgSW1pdGF0ZSBhdmFpbGFibGUgdmFyaWFibGVzOlxueyUgc2V0IG15X3Rlc3RfanNvbiA9IHtcbiAgXCJ0ZW1wZXJhdHVyZVwiOiAyNSxcbiAgXCJ1bml0XCI6IFwiwrBDXCJcbn0gJX1cblxuVGhlIHRlbXBlcmF0dXJlIGlzIHt7IG15X3Rlc3RfanNvbi50ZW1wZXJhdHVyZSB9fSB7eyBteV90ZXN0X2pzb24udW5pdCB9fS5cblxueyUgaWYgaXNfc3RhdGUoXCJkZXZpY2VfdHJhY2tlci5wYXVsdXNcIiwgXCJob21lXCIpIGFuZFxuICAgICAgaXNfc3RhdGUoXCJkZXZpY2VfdHJhY2tlci5hbm5lX3RoZXJlc2VcIiwgXCJob21lXCIpIC0lfVxuICBZb3UgYXJlIGJvdGggaG9tZSwgeW91IHNpbGx5XG57JS0gZWxzZSAtJX1cbiAgQW5uZSBUaGVyZXNlIGlzIGF0IHt7IHN0YXRlcyhcImRldmljZV90cmFja2VyLmFubmVfdGhlcmVzZVwiKSB9fVxuICBQYXVsdXMgaXMgYXQge3sgc3RhdGVzKFwiZGV2aWNlX3RyYWNrZXIucGF1bHVzXCIpIH19XG57JS0gZW5kaWYgJX1cblxuRm9yIGxvb3AgZXhhbXBsZTpcbnslIGZvciBzdGF0ZSBpbiBzdGF0ZXMuc2Vuc29yIC0lfVxuICB7JS0gaWYgbG9vcC5maXJzdCAlfVRoZSB7JSBlbGlmIGxvb3AubGFzdCAlfSBhbmQgdGhlIHslIGVsc2UgJX0sIHRoZSB7JSBlbmRpZiAtJX1cbiAge3sgc3RhdGUubmFtZSB8IGxvd2VyIH19IGlzIHt7c3RhdGUuc3RhdGVfd2l0aF91bml0fX1cbnslLSBlbmRmb3IgJX0uYCxcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gICAgICAgIG9ic2VydmVyOiBcInRlbXBsYXRlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcHJvY2Vzc2VkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRm9ybUNsYXNzZXMobmFycm93KSB7XG4gICAgcmV0dXJuIG5hcnJvdyA/IFwiY29udGVudCBmaXRcIiA6IFwiY29udGVudCBmaXQgbGF5b3V0IGhvcml6b250YWxcIjtcbiAgfVxuXG4gIGNvbXB1dGVSZW5kZXJlZENsYXNzZXMoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgPyBcImVycm9yIHJlbmRlcmVkXCIgOiBcInJlbmRlcmVkXCI7XG4gIH1cblxuICB0ZW1wbGF0ZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgdGltZU91dC5hZnRlcig1MDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlKCkge1xuICAgIHRoaXMucmVuZGVyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcInRlbXBsYXRlXCIsIHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSkudGhlbihcbiAgICAgIGZ1bmN0aW9uKHByb2Nlc3NlZCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NlZCA9IHByb2Nlc3NlZDtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID1cbiAgICAgICAgICAoZXJyb3IgJiYgZXJyb3IuYm9keSAmJiBlcnJvci5ib2R5Lm1lc3NhZ2UpIHx8XG4gICAgICAgICAgXCJVbmtub3duIGVycm9yIHJlbmRlcmluZyB0ZW1wbGF0ZVwiO1xuICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGV2ZWxvcGVyLXRvb2xzLXRlbXBsYXRlXCIsIEhhUGFuZWxEZXZUZW1wbGF0ZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1KQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQXZMQTtBQUNBO0FBNEZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQW9CQTtBQUNBO0FBekJBO0FBNEJBO0FBQ0E7QUFDQTtBQUZBO0FBM0NBO0FBZ0RBOzs7O0FBakpBO0FBQ0E7QUEwTEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
