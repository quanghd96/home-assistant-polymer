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

        /*
         * @appliesMixin EventsMixin
         */

        class CloudForgotPassword extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"]
        )(
          _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__[
            "PolymerElement"
          ]
        ) {
          static get template() {
            return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__[
              "html"
            ]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }

        ha-card {
          max-width: 600px;
          margin: 0 auto;
          margin-top: 24px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-actions a {
          color: var(--primary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <hass-subpage header="Forgot Password">
        <div class="content">
          <ha-card header="Forgot your password">
            <div class="card-content">
              <p>
                Enter your email address and we will send you a link to reset
                your password.
              </p>
              <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              <paper-input
                autofocus=""
                id="email"
                label="E-mail"
                value="{{email}}"
                type="email"
                on-keydown="_keyDown"
                error-message="Invalid email"
              ></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button
                on-click="_handleEmailPasswordReset"
                progress="[[_requestInProgress]]"
                >Send reset email</ha-progress-button
              >
            </div>
          </ha-card>
        </div>
      </hass-subpage>
    `;
          }

          static get properties() {
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
          }

          _emailChanged() {
            this._error = "";
            this.$.email.invalid = false;
          }

          _keyDown(ev) {
            // validate on enter
            if (ev.keyCode === 13) {
              this._handleEmailPasswordReset();

              ev.preventDefault();
            }
          }

          _handleEmailPasswordReset() {
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
                () => {
                  this._requestInProgress = false;
                  this.fire("cloud-done", {
                    flashMessage:
                      "Check your email for instructions on how to reset your password.",
                  });
                },
                (err) =>
                  this.setProperties({
                    _requestInProgress: false,
                    _error:
                      err && err.body && err.body.message
                        ? err.body.message
                        : "Unknown error",
                  })
              );
          }
        }

        customElements.define("cloud-forgot-password", CloudForgotPassword);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZm9yZ290LXBhc3N3b3JkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkL2Nsb3VkLWZvcmdvdC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIENsb3VkRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJGb3Jnb3QgUGFzc3dvcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJGb3Jnb3QgeW91ciBwYXNzd29yZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0XG4gICAgICAgICAgICAgICAgeW91ciBwYXNzd29yZC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1cz1cIlwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbWFpbH19XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgZW1haWxcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8aGEtcHJvZ3Jlc3MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlRW1haWxQYXNzd29yZFJlc2V0XCJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIlxuICAgICAgICAgICAgICAgID5TZW5kIHJlc2V0IGVtYWlsPC9oYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJfZW1haWxDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9lbWFpbENoYW5nZWQoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBcIlwiO1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVFbWFpbFBhc3N3b3JkUmVzZXQoKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUVtYWlsUGFzc3dvcmRSZXNldCgpIHtcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5lbWFpbC5pbnZhbGlkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL2ZvcmdvdF9wYXNzd29yZFwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjbG91ZC1kb25lXCIsIHtcbiAgICAgICAgICAgIGZsYXNoTWVzc2FnZTpcbiAgICAgICAgICAgICAgXCJDaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1mb3Jnb3QtcGFzc3dvcmRcIiwgQ2xvdWRGb3Jnb3RQYXNzd29yZCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQWhJQTtBQUNBO0FBaUlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
