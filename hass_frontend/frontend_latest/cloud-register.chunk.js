(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["cloud-register"],
  {
    /***/ "./src/panels/config/cloud/register/cloud-register.js":
      /*!************************************************************!*\
  !*** ./src/panels/config/cloud/register/cloud-register.js ***!
  \************************************************************/
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
        /* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js"
        );
        /* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js"
        );

        /*
         * @appliesMixin EventsMixin
         */

        class CloudRegister extends Object(
          _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"]
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
        direction: ltr;
      }

      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-item {
        cursor: pointer;
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
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="Register Account">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Start your free trial</span>
          <div slot="introduction">
            <p>
              Create an account to start your free one month trial with JAVIS Home Cloud. No payment information necessary.
            </p>
            <p>
              The trial will give you access to all the benefits of JAVIS Home Cloud, including:
            </p>
            <ul>
              <li>Control of JAVIS Home away from home</li>
              <li>Integration with Google Assistant</li>
              <li>Integration with Amazon Alexa</li>
              <li>Easy integration with webhook-based apps like OwnTracks</li>
            </ul>
            <p>
              This service is run by our partner <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>, a company founded by the founders of JAVIS Home and Hass.io.
            </p>

            <p>
              By registering an account you agree to the following terms and conditions.
              </p><ul>
                <li><a href="https://home-assistant.io/tos/" target="_blank">Terms and Conditions</a></li>
                <li><a href="https://home-assistant.io/privacy/" target="_blank">Privacy Policy</a></li>
              </ul>
            </p>
          </div>

          <ha-card header="Create Account">
            <div class="card-content">
              <div class="header">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="Email address" type="email" value="{{email}}" on-keydown="_keyDown" error-message="Invalid email"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="Your password needs to be at least 8 characters"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">Start trial</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">Resend confirmation email</button>
            </div>
          </ha-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`;
          }

          static get properties() {
            return {
              hass: Object,
              isWide: Boolean,
              email: {
                type: String,
                notify: true,
              },
              _requestInProgress: {
                type: Boolean,
                value: false,
              },
              _password: {
                type: String,
                value: "",
              },
              _error: {
                type: String,
                value: "",
              },
            };
          }

          static get observers() {
            return ["_inputChanged(email, _password)"];
          }

          _inputChanged() {
            this._error = "";
            this.$.email.invalid = false;
            this.$.password.invalid = false;
          }

          _keyDown(ev) {
            // validate on enter
            if (ev.keyCode === 13) {
              this._handleRegister();

              ev.preventDefault();
            }
          }

          _handleRegister() {
            let invalid = false;

            if (!this.email || !this.email.includes("@")) {
              this.$.email.invalid = true;
              this.$.email.focus();
              invalid = true;
            }

            if (this._password.length < 8) {
              this.$.password.invalid = true;

              if (!invalid) {
                invalid = true;
                this.$.password.focus();
              }
            }

            if (invalid) return;
            this._requestInProgress = true;
            this.hass
              .callApi("post", "cloud/register", {
                email: this.email,
                password: this._password,
              })
              .then(
                () => this._verificationEmailSent(),
                (err) => {
                  // Do this before setProperties because changing it clears errors.
                  this._password = "";
                  this.setProperties({
                    _requestInProgress: false,
                    _error:
                      err && err.body && err.body.message
                        ? err.body.message
                        : "Unknown error",
                  });
                }
              );
          }

          _handleResendVerifyEmail() {
            if (!this.email) {
              this.$.email.invalid = true;
              return;
            }

            this.hass
              .callApi("post", "cloud/resend_confirm", {
                email: this.email,
              })
              .then(
                () => this._verificationEmailSent(),
                (err) =>
                  this.setProperties({
                    _error:
                      err && err.body && err.body.message
                        ? err.body.message
                        : "Unknown error",
                  })
              );
          }

          _verificationEmailSent() {
            this.setProperties({
              _requestInProgress: false,
              _password: "",
            });
            this.fire("cloud-done", {
              flashMessage:
                "Account created! Check your email for instructions on how to activate your account.",
            });
          }
        }

        customElements.define("cloud-register", CloudRegister);

        /***/
      },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtcmVnaXN0ZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9yZWdpc3Rlci9jbG91ZC1yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBDbG91ZFJlZ2lzdGVyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgIH1cblxuICAgICAgW3Nsb3Q9aW50cm9kdWN0aW9uXSB7XG4gICAgICAgIG1hcmdpbjogLTFlbSAwO1xuICAgICAgfVxuICAgICAgW3Nsb3Q9aW50cm9kdWN0aW9uXSBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCJSZWdpc3RlciBBY2NvdW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+U3RhcnQgeW91ciBmcmVlIHRyaWFsPC9zcGFuPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50IHRvIHN0YXJ0IHlvdXIgZnJlZSBvbmUgbW9udGggdHJpYWwgd2l0aCBKQVZJUyBIb21lIENsb3VkLiBObyBwYXltZW50IGluZm9ybWF0aW9uIG5lY2Vzc2FyeS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgdHJpYWwgd2lsbCBnaXZlIHlvdSBhY2Nlc3MgdG8gYWxsIHRoZSBiZW5lZml0cyBvZiBKQVZJUyBIb21lIENsb3VkLCBpbmNsdWRpbmc6XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5Db250cm9sIG9mIEpBVklTIEhvbWUgYXdheSBmcm9tIGhvbWU8L2xpPlxuICAgICAgICAgICAgICA8bGk+SW50ZWdyYXRpb24gd2l0aCBHb29nbGUgQXNzaXN0YW50PC9saT5cbiAgICAgICAgICAgICAgPGxpPkludGVncmF0aW9uIHdpdGggQW1hem9uIEFsZXhhPC9saT5cbiAgICAgICAgICAgICAgPGxpPkVhc3kgaW50ZWdyYXRpb24gd2l0aCB3ZWJob29rLWJhc2VkIGFwcHMgbGlrZSBPd25UcmFja3M8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGlzIHNlcnZpY2UgaXMgcnVuIGJ5IG91ciBwYXJ0bmVyIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbScgdGFyZ2V0PSdfYmxhbmsnPk5hYnUmbmJzcDtDYXNhLCZuYnNwO0luYzwvYT4sIGEgY29tcGFueSBmb3VuZGVkIGJ5IHRoZSBmb3VuZGVycyBvZiBKQVZJUyBIb21lIGFuZCBIYXNzLmlvLlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQnkgcmVnaXN0ZXJpbmcgYW4gYWNjb3VudCB5b3UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZyB0ZXJtcyBhbmQgY29uZGl0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPjx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vdG9zL1wiIHRhcmdldD1cIl9ibGFua1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL3ByaXZhY3kvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIkNyZWF0ZSBBY2NvdW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgYXV0b2ZvY3VzPVwiXCIgaWQ9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWwgYWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPVwie3tlbWFpbH19XCIgb24ta2V5ZG93bj1cIl9rZXlEb3duXCIgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgZW1haWxcIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgaWQ9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIiB0eXBlPVwicGFzc3dvcmRcIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiWW91ciBwYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b24gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIiBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIj5TdGFydCB0cmlhbDwvaGEtcHJvZ3Jlc3MtYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiIGhpZGRlbj1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIiBvbi1jbGljaz1cIl9oYW5kbGVSZXNlbmRWZXJpZnlFbWFpbFwiPlJlc2VuZCBjb25maXJtYXRpb24gZW1haWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGFzcy1zdWJwYWdlPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9wYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9lcnJvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIl9pbnB1dENoYW5nZWQoZW1haWwsIF9wYXNzd29yZClcIl07XG4gIH1cblxuICBfaW5wdXRDaGFuZ2VkKCkge1xuICAgIHRoaXMuX2Vycm9yID0gXCJcIjtcbiAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuJC5wYXNzd29yZC5pbnZhbGlkID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVSZWdpc3RlcigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5lbWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcbiAgICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5lbWFpbC5mb2N1cygpO1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICAgIHRoaXMuJC5wYXNzd29yZC5pbnZhbGlkID0gdHJ1ZTtcblxuICAgICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiQucGFzc3dvcmQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fcmVxdWVzdEluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9yZWdpc3RlclwiLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5fcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHRoaXMuX3ZlcmlmaWNhdGlvbkVtYWlsU2VudCgpLFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gRG8gdGhpcyBiZWZvcmUgc2V0UHJvcGVydGllcyBiZWNhdXNlIGNoYW5naW5nIGl0IGNsZWFycyBlcnJvcnMuXG4gICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIF9oYW5kbGVSZXNlbmRWZXJpZnlFbWFpbCgpIHtcbiAgICBpZiAoIXRoaXMuZW1haWwpIHtcbiAgICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL3Jlc2VuZF9jb25maXJtXCIsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHRoaXMuX3ZlcmlmaWNhdGlvbkVtYWlsU2VudCgpLFxuICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIF92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSB7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICBfcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSk7XG4gICAgdGhpcy5maXJlKFwiY2xvdWQtZG9uZVwiLCB7XG4gICAgICBmbGFzaE1lc3NhZ2U6XG4gICAgICAgIFwiQWNjb3VudCBjcmVhdGVkISBDaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gaG93IHRvIGFjdGl2YXRlIHlvdXIgYWNjb3VudC5cIixcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1yZWdpc3RlclwiLCBDbG91ZFJlZ2lzdGVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFoQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQTNNQTtBQUNBO0FBNE1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
