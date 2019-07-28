(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    698: function(e, n, t) {
      "use strict";
      t.r(n);
      t(90);
      var r = t(3),
        o = t(25),
        i = (t(172), t(222), t(147), t(92), t(193), t(105));
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style include="iron-flex ha-style">\n      .content {\n        direction: ltr;\n      }\n\n      [slot=introduction] {\n        margin: -1em 0;\n      }\n      [slot=introduction] a {\n        color: var(--primary-color);\n      }\n      a {\n        color: var(--primary-color);\n      }\n      paper-item {\n        cursor: pointer;\n      }\n      h1 {\n        @apply --paper-font-headline;\n        margin: 0;\n      }\n      .error {\n        color: var(--google-red-500);\n      }\n      .card-actions {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      [hidden] {\n        display: none;\n      }\n    </style>\n    <hass-subpage header="Register Account">\n      <div class="content">\n        <ha-config-section is-wide="[[isWide]]">\n          <span slot="header">Start your free trial</span>\n          <div slot="introduction">\n            <p>\n              Create an account to start your free one month trial with JAVIS Home Cloud. No payment information necessary.\n            </p>\n            <p>\n              The trial will give you access to all the benefits of JAVIS Home Cloud, including:\n            </p>\n            <ul>\n              <li>Control of JAVIS Home away from home</li>\n              <li>Integration with Google Assistant</li>\n              <li>Integration with Amazon Alexa</li>\n              <li>Easy integration with webhook-based apps like OwnTracks</li>\n            </ul>\n            <p>\n              This service is run by our partner <a href=\'https://www.nabucasa.com\' target=\'_blank\'>Nabu&nbsp;Casa,&nbsp;Inc</a>, a company founded by the founders of JAVIS Home and Hass.io.\n            </p>\n\n            <p>\n              By registering an account you agree to the following terms and conditions.\n              </p><ul>\n                <li><a href="https://home-assistant.io/tos/" target="_blank">Terms and Conditions</a></li>\n                <li><a href="https://home-assistant.io/privacy/" target="_blank">Privacy Policy</a></li>\n              </ul>\n            </p>\n          </div>\n\n          <ha-card header="Create Account">\n            <div class="card-content">\n              <div class="header">\n                <div class="error" hidden$="[[!_error]]">[[_error]]</div>\n              </div>\n              <paper-input autofocus="" id="email" label="Email address" type="email" value="{{email}}" on-keydown="_keyDown" error-message="Invalid email"></paper-input>\n              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="Your password needs to be at least 8 characters"></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">Start trial</ha-progress-button>\n              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">Resend confirmation email</button>\n            </div>\n          </ha-card>\n        </ha-config-section>\n      </div>\n    </hass-subpage>\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function l(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, n) {
        return !n || ("object" !== a(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, n) {
        return (p =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var d = (function(e) {
        function n() {
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            c(this, u(n).apply(this, arguments))
          );
        }
        var t, a, d;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && p(e, n);
          })(n, Object(i["a"])(o["a"])),
          (t = n),
          (d = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(s());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  isWide: Boolean,
                  email: { type: String, notify: !0 },
                  _requestInProgress: { type: Boolean, value: !1 },
                  _password: { type: String, value: "" },
                  _error: { type: String, value: "" },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["_inputChanged(email, _password)"];
              },
            },
          ]),
          (a = [
            {
              key: "_inputChanged",
              value: function() {
                (this._error = ""),
                  (this.$.email.invalid = !1),
                  (this.$.password.invalid = !1);
              },
            },
            {
              key: "_keyDown",
              value: function(e) {
                13 === e.keyCode &&
                  (this._handleRegister(), e.preventDefault());
              },
            },
            {
              key: "_handleRegister",
              value: function() {
                var e = this,
                  n = !1;
                (this.email && this.email.includes("@")) ||
                  ((this.$.email.invalid = !0), this.$.email.focus(), (n = !0)),
                  this._password.length < 8 &&
                    ((this.$.password.invalid = !0),
                    n || ((n = !0), this.$.password.focus())),
                  n ||
                    ((this._requestInProgress = !0),
                    this.hass
                      .callApi("post", "cloud/register", {
                        email: this.email,
                        password: this._password,
                      })
                      .then(
                        function() {
                          return e._verificationEmailSent();
                        },
                        function(n) {
                          (e._password = ""),
                            e.setProperties({
                              _requestInProgress: !1,
                              _error:
                                n && n.body && n.body.message
                                  ? n.body.message
                                  : "Unknown error",
                            });
                        }
                      ));
              },
            },
            {
              key: "_handleResendVerifyEmail",
              value: function() {
                var e = this;
                this.email
                  ? this.hass
                      .callApi("post", "cloud/resend_confirm", {
                        email: this.email,
                      })
                      .then(
                        function() {
                          return e._verificationEmailSent();
                        },
                        function(n) {
                          return e.setProperties({
                            _error:
                              n && n.body && n.body.message
                                ? n.body.message
                                : "Unknown error",
                          });
                        }
                      )
                  : (this.$.email.invalid = !0);
              },
            },
            {
              key: "_verificationEmailSent",
              value: function() {
                this.setProperties({ _requestInProgress: !1, _password: "" }),
                  this.fire("cloud-done", {
                    flashMessage:
                      "Account created! Check your email for instructions on how to activate your account.",
                  });
              },
            },
          ]) && l(t.prototype, a),
          d && l(t, d),
          n
        );
      })();
      customElements.define("cloud-register", d);
    },
  },
]);
//# sourceMappingURL=chunk.dbf5b2156f7586ff12f4.js.map
