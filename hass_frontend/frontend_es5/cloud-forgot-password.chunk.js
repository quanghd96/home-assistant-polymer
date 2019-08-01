(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-forgot-password"],
  {
    /***/ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js":
      /*!**************************************************************************!*\
  !*** ./src/panels/config/cloud/forgot-password/cloud-forgot-password.js ***!
  \**************************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js"
        );
        /* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"
        );
        /* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js"
        );
        /* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../components/ha-card */ "./src/components/ha-card.ts"
        );
        /* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js"
        );
        /* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts"
        );
        /* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
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
            '\n      <style include="iron-flex ha-style">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto;\n          margin-top: 24px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .card-actions a {\n          color: var(--primary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <hass-subpage header="Forgot Password">\n        <div class="content">\n          <ha-card header="Forgot your password">\n            <div class="card-content">\n              <p>\n                Enter your email address and we will send you a link to reset\n                your password.\n              </p>\n              <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n              <paper-input\n                autofocus=""\n                id="email"\n                label="E-mail"\n                value="{{email}}"\n                type="email"\n                on-keydown="_keyDown"\n                error-message="Invalid email"\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-progress-button\n                on-click="_handleEmailPasswordReset"\n                progress="[[_requestInProgress]]"\n                >Send reset email</ha-progress-button\n              >\n            </div>\n          </ha-card>\n        </div>\n      </hass-subpage>\n    ',
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

        var CloudForgotPassword =
          /*#__PURE__*/
          (function(_EventsMixin) {
            _inherits(CloudForgotPassword, _EventsMixin);

            function CloudForgotPassword() {
              _classCallCheck(this, CloudForgotPassword);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(CloudForgotPassword).apply(this, arguments)
              );
            }

            _createClass(
              CloudForgotPassword,
              [
                {
                  key: "_emailChanged",
                  value: function _emailChanged() {
                    this._error = "";
                    this.$.email.invalid = false;
                  },
                },
                {
                  key: "_keyDown",
                  value: function _keyDown(ev) {
                    // validate on enter
                    if (ev.keyCode === 13) {
                      this._handleEmailPasswordReset();

                      ev.preventDefault();
                    }
                  },
                },
                {
                  key: "_handleEmailPasswordReset",
                  value: function _handleEmailPasswordReset() {
                    var _this = this;

                    if (!this.email || !this.email.includes("@")) {
                      this.$.email.invalid = true;
                    }

                    if (this.$.email.invalid) return;
                    this._requestInProgress = true;
                    this.hass
                      .callApi("post", "cloud/forgot_password", {
                        email: this.email,
                      })
                      .then(
                        function() {
                          _this._requestInProgress = false;

                          _this.fire("cloud-done", {
                            flashMessage:
                              "Check your email for instructions on how to reset your password.",
                          });
                        },
                        function(err) {
                          return _this.setProperties({
                            _requestInProgress: false,
                            _error:
                              err && err.body && err.body.message
                                ? err.body.message
                                : "Unknown error",
                          });
                        }
                      );
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
                      email: {
                        type: String,
                        notify: true,
                        observer: "_emailChanged",
                      },
                      _requestInProgress: {
                        type: Boolean,
                        value: false,
                      },
                      _error: {
                        type: String,
                        value: "",
                      },
                    };
                  },
                },
              ]
            );

            return CloudForgotPassword;
          })(
            Object(
              _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"]
            )(
              _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
                "PolymerElement"
              ]
            )
          );

        customElements.define("cloud-forgot-password", CloudForgotPassword);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZm9yZ290LXBhc3N3b3JkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkL2Nsb3VkLWZvcmdvdC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIENsb3VkRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJGb3Jnb3QgUGFzc3dvcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJGb3Jnb3QgeW91ciBwYXNzd29yZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0XG4gICAgICAgICAgICAgICAgeW91ciBwYXNzd29yZC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1cz1cIlwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbWFpbH19XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgZW1haWxcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlRW1haWxQYXNzd29yZFJlc2V0XCJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIlxuICAgICAgICAgICAgICAgID5TZW5kIHJlc2V0IGVtYWlsPC9oYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJfZW1haWxDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9lbWFpbENoYW5nZWQoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBcIlwiO1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVFbWFpbFBhc3N3b3JkUmVzZXQoKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUVtYWlsUGFzc3dvcmRSZXNldCgpIHtcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5lbWFpbC5pbnZhbGlkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL2ZvcmdvdF9wYXNzd29yZFwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjbG91ZC1kb25lXCIsIHtcbiAgICAgICAgICAgIGZsYXNoTWVzc2FnZTpcbiAgICAgICAgICAgICAgXCJDaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIiwgQ2xvdWRGb3Jnb3RQYXNzd29yZCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQW9GQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQVNBOzs7QUE5SEE7QUFDQTtBQTZEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWdCQTs7OztBQWxGQTtBQUNBO0FBaUlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
