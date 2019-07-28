(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    698: function(e, s, r) {
      "use strict";
      r.r(s);
      r(90);
      var a = r(3),
        o = r(25),
        t = (r(171), r(222), r(147), r(92), r(105));
      customElements.define(
        "cloud-forgot-password",
        class extends Object(t.a)(o.a) {
          static get template() {
            return a.a`
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
              email: { type: String, notify: !0, observer: "_emailChanged" },
              _requestInProgress: { type: Boolean, value: !1 },
              _error: { type: String, value: "" },
            };
          }
          _emailChanged() {
            (this._error = ""), (this.$.email.invalid = !1);
          }
          _keyDown(e) {
            13 === e.keyCode &&
              (this._handleEmailPasswordReset(), e.preventDefault());
          }
          _handleEmailPasswordReset() {
            (this.email && this.email.includes("@")) ||
              (this.$.email.invalid = !0),
              this.$.email.invalid ||
                ((this._requestInProgress = !0),
                this.hass
                  .callApi("post", "cloud/forgot_password", {
                    email: this.email,
                  })
                  .then(
                    () => {
                      (this._requestInProgress = !1),
                        this.fire("cloud-done", {
                          flashMessage:
                            "Check your email for instructions on how to reset your password.",
                        });
                    },
                    (e) =>
                      this.setProperties({
                        _requestInProgress: !1,
                        _error:
                          e && e.body && e.body.message
                            ? e.body.message
                            : "Unknown error",
                      })
                  ));
          }
        }
      );
    },
  },
]);
//# sourceMappingURL=chunk.3e87e31582178a989b59.js.map
