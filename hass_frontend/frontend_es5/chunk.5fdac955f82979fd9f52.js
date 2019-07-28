(window.webpackJsonp = window.webpackJsonp || []).push([
  [120],
  {
    180: function(n, t, e) {
      "use strict";
      e.d(t, "b", function() {
        return r;
      }),
        e.d(t, "a", function() {
          return s;
        });
      e(4);
      var o = e(84),
        i = e(1),
        r = {
          hostAttributes: { role: "dialog", tabindex: "-1" },
          properties: {
            modal: { type: Boolean, value: !1 },
            __readied: { type: Boolean, value: !1 },
          },
          observers: ["_modalChanged(modal, __readied)"],
          listeners: { tap: "_onDialogClick" },
          ready: function() {
            (this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick),
              (this.__prevNoCancelOnEscKey = this.noCancelOnEscKey),
              (this.__prevWithBackdrop = this.withBackdrop),
              (this.__readied = !0);
          },
          _modalChanged: function(n, t) {
            t &&
              (n
                ? ((this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick),
                  (this.__prevNoCancelOnEscKey = this.noCancelOnEscKey),
                  (this.__prevWithBackdrop = this.withBackdrop),
                  (this.noCancelOnOutsideClick = !0),
                  (this.noCancelOnEscKey = !0),
                  (this.withBackdrop = !0))
                : ((this.noCancelOnOutsideClick =
                    this.noCancelOnOutsideClick &&
                    this.__prevNoCancelOnOutsideClick),
                  (this.noCancelOnEscKey =
                    this.noCancelOnEscKey && this.__prevNoCancelOnEscKey),
                  (this.withBackdrop =
                    this.withBackdrop && this.__prevWithBackdrop)));
          },
          _updateClosingReasonConfirmed: function(n) {
            (this.closingReason = this.closingReason || {}),
              (this.closingReason.confirmed = n);
          },
          _onDialogClick: function(n) {
            for (
              var t = Object(i.a)(n).path, e = 0, o = t.indexOf(this);
              e < o;
              e++
            ) {
              var r = t[e];
              if (
                r.hasAttribute &&
                (r.hasAttribute("dialog-dismiss") ||
                  r.hasAttribute("dialog-confirm"))
              ) {
                this._updateClosingReasonConfirmed(
                  r.hasAttribute("dialog-confirm")
                ),
                  this.close(),
                  n.stopPropagation();
                break;
              }
            }
          },
        },
        s = [o.a, r];
    },
    184: function(n, t, e) {
      "use strict";
      e(4), e(44), e(41), e(52), e(83);
      var o = document.createElement("template");
      o.setAttribute("style", "display: none;"),
        (o.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(o.content);
    },
    354: function(n, t, e) {
      "use strict";
      e.r(t);
      e(107), e(184), e(106);
      var o = e(3),
        i = e(25),
        r = e(392);
      function s(n) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(n) {
                return typeof n;
              }
            : function(n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function a() {
        var n = (function(n, t) {
          t || (t = n.slice(0));
          return Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="paper-dialog-shared-styles">\n        iron-icon {\n          margin-right: 8px;\n        }\n\n        .content {\n          width: 450px;\n          min-height: 80px;\n          font-size: 18px;\n          padding: 16px;\n        }\n\n        .messages {\n          max-height: 50vh;\n          overflow: auto;\n        }\n\n        .messages::after {\n          content: "";\n          clear: both;\n          display: block;\n        }\n\n        .message {\n          clear: both;\n          margin: 8px 0;\n          padding: 8px;\n          border-radius: 15px;\n        }\n\n        .message.user {\n          margin-left: 24px;\n          float: right;\n          text-align: right;\n          border-bottom-right-radius: 0px;\n          background-color: var(--light-primary-color);\n          color: var(--primary-text-color);\n        }\n\n        .message.hass {\n          margin-right: 24px;\n          float: left;\n          border-bottom-left-radius: 0px;\n          background-color: var(--primary-color);\n          color: var(--text-primary-color);\n        }\n\n        .message.error {\n          background-color: var(--google-red-500);\n          color: var(--text-primary-color);\n        }\n\n        .icon {\n          text-align: center;\n        }\n\n        .icon paper-icon-button {\n          height: 52px;\n          width: 52px;\n        }\n\n        .interimTranscript {\n          color: darkgrey;\n        }\n\n        [hidden] {\n          display: none;\n        }\n\n        :host {\n          border-radius: 2px;\n        }\n\n        @media all and (max-width: 450px) {\n          :host {\n            margin: 0;\n            width: 100%;\n            max-height: calc(100% - 64px);\n\n            position: fixed !important;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            overflow: scroll;\n            border-bottom-left-radius: 0px;\n            border-bottom-right-radius: 0px;\n          }\n\n          .content {\n            width: auto;\n          }\n\n          .messages {\n            max-height: 68vh;\n          }\n        }\n      </style>\n\n      <div class="content">\n        <div class="messages" id="messages">\n          <template is="dom-repeat" items="[[_conversation]]" as="message">\n            <div class$="[[_computeMessageClasses(message)]]">\n              [[message.text]]\n            </div>\n          </template>\n        </div>\n        <template is="dom-if" if="[[results]]">\n          <div class="messages">\n            <div class="message user">\n              <span>{{results.final}}</span>\n              <span class="interimTranscript">[[results.interim]]</span> …\n            </div>\n          </div>\n        </template>\n        <div class="icon" hidden$="[[results]]">\n          <paper-icon-button\n            icon="hass:text-to-speech"\n            on-click="startListening"\n          ></paper-icon-button>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      function l(n, t) {
        for (var e = 0; e < t.length; e++) {
          var o = t[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      function c(n, t) {
        return !t || ("object" !== s(t) && "function" != typeof t)
          ? (function(n) {
              if (void 0 === n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return n;
            })(n)
          : t;
      }
      function p(n) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function u(n, t) {
        return (u =
          Object.setPrototypeOf ||
          function(n, t) {
            return (n.__proto__ = t), n;
          })(n, t);
      }
      var h = (function(n) {
        function t() {
          return (
            (function(n, t) {
              if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, p(t).apply(this, arguments))
          );
        }
        var e, s, h;
        return (
          (function(n, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (n.prototype = Object.create(t && t.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
              t && u(n, t);
          })(t, Object(r["a"])(i["a"])),
          (e = t),
          (h = [
            {
              key: "template",
              get: function() {
                return Object(o.a)(a());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  results: {
                    type: Object,
                    value: null,
                    observer: "_scrollMessagesBottom",
                  },
                  _conversation: {
                    type: Array,
                    value: function() {
                      return [{ who: "hass", text: "How can I help?" }];
                    },
                    observer: "_scrollMessagesBottom",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["dialogOpenChanged(opened)"];
              },
            },
          ]),
          (s = [
            {
              key: "showDialog",
              value: function() {
                this.opened = !0;
              },
            },
            {
              key: "initRecognition",
              value: function() {
                (this.recognition = new webkitSpeechRecognition()),
                  (this.recognition.onstart = function() {
                    this.results = { final: "", interim: "" };
                  }.bind(this)),
                  (this.recognition.onerror = function() {
                    this.recognition.abort();
                    var n = this.results.final || this.results.interim;
                    (this.results = null),
                      "" === n && (n = "<JAVIS Home did not hear anything>"),
                      this.push("_conversation", {
                        who: "user",
                        text: n,
                        error: !0,
                      });
                  }.bind(this)),
                  (this.recognition.onend = function() {
                    if (null != this.results) {
                      var n = this.results.final || this.results.interim;
                      (this.results = null),
                        this.push("_conversation", { who: "user", text: n }),
                        this.hass
                          .callApi("post", "conversation/process", { text: n })
                          .then(
                            function(n) {
                              this.push("_conversation", {
                                who: "hass",
                                text: n.speech.plain.speech,
                              });
                            }.bind(this),
                            function() {
                              this.set(
                                [
                                  "_conversation",
                                  this._conversation.length - 1,
                                  "error",
                                ],
                                !0
                              );
                            }.bind(this)
                          );
                    }
                  }.bind(this)),
                  (this.recognition.onresult = function(n) {
                    for (
                      var t = this.results, e = "", o = "", i = n.resultIndex;
                      i < n.results.length;
                      i++
                    )
                      n.results[i].isFinal
                        ? (e += n.results[i][0].transcript)
                        : (o += n.results[i][0].transcript);
                    this.results = { interim: o, final: t.final + e };
                  }.bind(this));
              },
            },
            {
              key: "startListening",
              value: function() {
                this.recognition || this.initRecognition(),
                  (this.results = { interim: "", final: "" }),
                  this.recognition.start();
              },
            },
            {
              key: "_scrollMessagesBottom",
              value: function() {
                var n = this;
                setTimeout(function() {
                  (n.$.messages.scrollTop = n.$.messages.scrollHeight),
                    0 !== n.$.messages.scrollTop &&
                      n.$.dialog.fire("iron-resize");
                }, 10);
              },
            },
            {
              key: "dialogOpenChanged",
              value: function(n) {
                n
                  ? this.startListening()
                  : !n && this.results && this.recognition.abort();
              },
            },
            {
              key: "_computeMessageClasses",
              value: function(n) {
                return "message " + n.who + (n.error ? " error" : "");
              },
            },
          ]) && l(e.prototype, s),
          h && l(e, h),
          t
        );
      })();
      customElements.define("ha-voice-command-dialog", h);
    },
    392: function(n, t, e) {
      "use strict";
      var o = e(8),
        i = e(180),
        r = e(70),
        s = e(105);
      function a(n) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(n) {
                return typeof n;
              }
            : function(n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function l(n, t) {
        for (var e = 0; e < t.length; e++) {
          var o = t[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      function c(n, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function(n) {
              if (void 0 === n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return n;
            })(n)
          : t;
      }
      function p(n) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function u(n, t) {
        return (u =
          Object.setPrototypeOf ||
          function(n, t) {
            return (n.__proto__ = t), n;
          })(n, t);
      }
      t.a = Object(o.a)(function(n) {
        return (function(t) {
          function e() {
            return (
              (function(n, t) {
                if (!(n instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              c(this, p(e).apply(this, arguments))
            );
          }
          var o, a, h;
          return (
            (function(n, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
                t && u(n, t);
            })(e, Object(r["b"])([s["a"], i["a"]], n)),
            (o = e),
            (h = [
              {
                key: "properties",
                get: function() {
                  return { withBackdrop: { type: Boolean, value: !0 } };
                },
              },
            ]),
            (a = null) && l(o.prototype, a),
            h && l(o, h),
            e
          );
        })();
      });
    },
  },
]);
//# sourceMappingURL=chunk.5fdac955f82979fd9f52.js.map
