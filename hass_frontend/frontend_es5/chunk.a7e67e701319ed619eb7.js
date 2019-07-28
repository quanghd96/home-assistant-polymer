/*! For license information please see chunk.a7e67e701319ed619eb7.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [117],
  {
    111: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(91),
        r = n(60),
        a = n(5),
        o = n(1),
        l = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(l.a)(s()),
        is: "iron-input",
        behaviors: [r.a],
        properties: {
          bindValue: { type: String, value: "" },
          value: { type: String, computed: "_computeValue(bindValue)" },
          allowedPattern: { type: String },
          autoValidate: { type: Boolean, value: !1 },
          _inputElement: Object,
        },
        observers: ["_bindValueChanged(bindValue, _inputElement)"],
        listeners: { input: "_onInput", keypress: "_onKeypress" },
        created: function() {
          i.a.requestAvailability(),
            (this._previousValidInput = ""),
            (this._patternAlreadyChecked = !1);
        },
        attached: function() {
          this._observer = Object(o.a)(this).observeNodes(
            function(e) {
              this._initSlottedInput();
            }.bind(this)
          );
        },
        detached: function() {
          this._observer &&
            (Object(o.a)(this).unobserveNodes(this._observer),
            (this._observer = null));
        },
        get inputElement() {
          return this._inputElement;
        },
        _initSlottedInput: function() {
          (this._inputElement = this.getEffectiveChildren()[0]),
            this.inputElement &&
              this.inputElement.value &&
              (this.bindValue = this.inputElement.value),
            this.fire("iron-input-ready");
        },
        get _patternRegExp() {
          var e;
          if (this.allowedPattern) e = new RegExp(this.allowedPattern);
          else
            switch (this.inputElement.type) {
              case "number":
                e = /[0-9.,e-]/;
            }
          return e;
        },
        _bindValueChanged: function(e, t) {
          t &&
            (void 0 === e
              ? (t.value = null)
              : e !== t.value && (this.inputElement.value = e),
            this.autoValidate && this.validate(),
            this.fire("bind-value-changed", { value: e }));
        },
        _onInput: function() {
          this.allowedPattern &&
            !this._patternAlreadyChecked &&
            (this._checkPatternValidity() ||
              (this._announceInvalidCharacter(
                "Invalid string of characters not entered."
              ),
              (this.inputElement.value = this._previousValidInput)));
          (this.bindValue = this._previousValidInput = this.inputElement.value),
            (this._patternAlreadyChecked = !1);
        },
        _isPrintable: function(e) {
          var t =
              8 == e.keyCode ||
              9 == e.keyCode ||
              13 == e.keyCode ||
              27 == e.keyCode,
            n =
              19 == e.keyCode ||
              20 == e.keyCode ||
              45 == e.keyCode ||
              46 == e.keyCode ||
              144 == e.keyCode ||
              145 == e.keyCode ||
              (e.keyCode > 32 && e.keyCode < 41) ||
              (e.keyCode > 111 && e.keyCode < 124);
          return !(t || (0 == e.charCode && n));
        },
        _onKeypress: function(e) {
          if (this.allowedPattern || "number" === this.inputElement.type) {
            var t = this._patternRegExp;
            if (t && !(e.metaKey || e.ctrlKey || e.altKey)) {
              this._patternAlreadyChecked = !0;
              var n = String.fromCharCode(e.charCode);
              this._isPrintable(e) &&
                !t.test(n) &&
                (e.preventDefault(),
                this._announceInvalidCharacter(
                  "Invalid character " + n + " not entered."
                ));
            }
          }
        },
        _checkPatternValidity: function() {
          var e = this._patternRegExp;
          if (!e) return !0;
          for (var t = 0; t < this.inputElement.value.length; t++)
            if (!e.test(this.inputElement.value[t])) return !1;
          return !0;
        },
        validate: function() {
          if (!this.inputElement) return (this.invalid = !1), !0;
          var e = this.inputElement.checkValidity();
          return (
            e &&
              (this.required && "" === this.bindValue
                ? (e = !1)
                : this.hasValidator() &&
                  (e = r.a.validate.call(this, this.bindValue))),
            (this.invalid = !e),
            this.fire("iron-input-validate"),
            e
          );
        },
        _announceInvalidCharacter: function(e) {
          this.fire("iron-announce", { text: e });
        },
        _computeValue: function(e) {
          return e;
        },
      });
    },
    117: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      n(4);
      var i = n(53),
        r = n(34),
        a = [i.a, r.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    120: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(59),
        r = n(60),
        a = {
          properties: {
            checked: {
              type: Boolean,
              value: !1,
              reflectToAttribute: !0,
              notify: !0,
              observer: "_checkedChanged",
            },
            toggles: { type: Boolean, value: !0, reflectToAttribute: !0 },
            value: { type: String, value: "on", observer: "_valueChanged" },
          },
          observers: ["_requiredChanged(required)"],
          created: function() {
            this._hasIronCheckedElementBehavior = !0;
          },
          _getValidity: function(e) {
            return this.disabled || !this.required || this.checked;
          },
          _requiredChanged: function() {
            this.required
              ? this.setAttribute("aria-required", "true")
              : this.removeAttribute("aria-required");
          },
          _checkedChanged: function() {
            (this.active = this.checked), this.fire("iron-change");
          },
          _valueChanged: function() {
            (void 0 !== this.value && null !== this.value) ||
              (this.value = "on");
          },
        },
        o = [i.a, r.a, a],
        l = n(56),
        s = n(67);
      n.d(t, "a", function() {
        return u;
      });
      var c = {
          _checkedChanged: function() {
            a._checkedChanged.call(this),
              this.hasRipple() &&
                (this.checked
                  ? this._ripple.setAttribute("checked", "")
                  : this._ripple.removeAttribute("checked"));
          },
          _buttonStateChanged: function() {
            s.a._buttonStateChanged.call(this),
              this.disabled ||
                (this.isAttached && (this.checked = this.active));
          },
        },
        u = [l.a, o, c];
    },
    138: function(e, t, n) {
      "use strict";
      n(4), n(44), n(140);
      var i = n(5),
        r = n(3),
        a = n(117);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(o()),
        is: "paper-item",
        behaviors: [a.a],
      });
    },
    140: function(e, t, n) {
      "use strict";
      n(44), n(55), n(41), n(52);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(i.content);
    },
    178: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41), n(52);
      var i = n(5),
        r = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({ _template: Object(r.a)(a()), is: "paper-item-body" });
    },
    181: function(e, t, n) {
      "use strict";
      n(4), n(55), n(146);
      var i = n(5),
        r = n(3),
        a = n(122);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(r.a)(o());
      l.setAttribute("strip-whitespace", ""),
        Object(i.a)({ _template: l, is: "paper-spinner", behaviors: [a.a] });
    },
    191: function(e, t, n) {
      "use strict";
      var i = {},
        r = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        a = "[^\\s]+",
        o = /\[([^]*?)\]/gm,
        l = function() {};
      function s(e, t) {
        for (var n = [], i = 0, r = e.length; i < r; i++)
          n.push(e[i].substr(0, t));
        return n;
      }
      function c(e) {
        return function(t, n, i) {
          var r = i[e].indexOf(
            n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
          );
          ~r && (t.month = r);
        };
      }
      function u(e, t) {
        for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
        return e;
      }
      var p = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        d = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        h = s(d, 3),
        v = s(p, 3);
      i.i18n = {
        dayNamesShort: v,
        dayNames: p,
        monthNamesShort: h,
        monthNames: d,
        amPm: ["am", "pm"],
        DoFn: function(e) {
          return (
            e +
            ["th", "st", "nd", "rd"][
              e % 10 > 3 ? 0 : ((e - (e % 10) != 10) * e) % 10
            ]
          );
        },
      };
      var f = {
          D: function(e) {
            return e.getDate();
          },
          DD: function(e) {
            return u(e.getDate());
          },
          Do: function(e, t) {
            return t.DoFn(e.getDate());
          },
          d: function(e) {
            return e.getDay();
          },
          dd: function(e) {
            return u(e.getDay());
          },
          ddd: function(e, t) {
            return t.dayNamesShort[e.getDay()];
          },
          dddd: function(e, t) {
            return t.dayNames[e.getDay()];
          },
          M: function(e) {
            return e.getMonth() + 1;
          },
          MM: function(e) {
            return u(e.getMonth() + 1);
          },
          MMM: function(e, t) {
            return t.monthNamesShort[e.getMonth()];
          },
          MMMM: function(e, t) {
            return t.monthNames[e.getMonth()];
          },
          YY: function(e) {
            return u(String(e.getFullYear()), 4).substr(2);
          },
          YYYY: function(e) {
            return u(e.getFullYear(), 4);
          },
          h: function(e) {
            return e.getHours() % 12 || 12;
          },
          hh: function(e) {
            return u(e.getHours() % 12 || 12);
          },
          H: function(e) {
            return e.getHours();
          },
          HH: function(e) {
            return u(e.getHours());
          },
          m: function(e) {
            return e.getMinutes();
          },
          mm: function(e) {
            return u(e.getMinutes());
          },
          s: function(e) {
            return e.getSeconds();
          },
          ss: function(e) {
            return u(e.getSeconds());
          },
          S: function(e) {
            return Math.round(e.getMilliseconds() / 100);
          },
          SS: function(e) {
            return u(Math.round(e.getMilliseconds() / 10), 2);
          },
          SSS: function(e) {
            return u(e.getMilliseconds(), 3);
          },
          a: function(e, t) {
            return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
          },
          A: function(e, t) {
            return e.getHours() < 12
              ? t.amPm[0].toUpperCase()
              : t.amPm[1].toUpperCase();
          },
          ZZ: function(e) {
            var t = e.getTimezoneOffset();
            return (
              (t > 0 ? "-" : "+") +
              u(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
            );
          },
        },
        b = {
          D: [
            "\\d\\d?",
            function(e, t) {
              e.day = t;
            },
          ],
          Do: [
            "\\d\\d?" + a,
            function(e, t) {
              e.day = parseInt(t, 10);
            },
          ],
          M: [
            "\\d\\d?",
            function(e, t) {
              e.month = t - 1;
            },
          ],
          YY: [
            "\\d\\d?",
            function(e, t) {
              var n = +("" + new Date().getFullYear()).substr(0, 2);
              e.year = "" + (t > 68 ? n - 1 : n) + t;
            },
          ],
          h: [
            "\\d\\d?",
            function(e, t) {
              e.hour = t;
            },
          ],
          m: [
            "\\d\\d?",
            function(e, t) {
              e.minute = t;
            },
          ],
          s: [
            "\\d\\d?",
            function(e, t) {
              e.second = t;
            },
          ],
          YYYY: [
            "\\d{4}",
            function(e, t) {
              e.year = t;
            },
          ],
          S: [
            "\\d",
            function(e, t) {
              e.millisecond = 100 * t;
            },
          ],
          SS: [
            "\\d{2}",
            function(e, t) {
              e.millisecond = 10 * t;
            },
          ],
          SSS: [
            "\\d{3}",
            function(e, t) {
              e.millisecond = t;
            },
          ],
          d: ["\\d\\d?", l],
          ddd: [a, l],
          MMM: [a, c("monthNamesShort")],
          MMMM: [a, c("monthNames")],
          a: [
            a,
            function(e, t, n) {
              var i = t.toLowerCase();
              i === n.amPm[0]
                ? (e.isPm = !1)
                : i === n.amPm[1] && (e.isPm = !0);
            },
          ],
          ZZ: [
            "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",
            function(e, t) {
              var n,
                i = (t + "").match(/([+-]|\d\d)/gi);
              i &&
                ((n = 60 * i[1] + parseInt(i[2], 10)),
                (e.timezoneOffset = "+" === i[0] ? n : -n));
            },
          ],
        };
      (b.dd = b.d),
        (b.dddd = b.ddd),
        (b.DD = b.D),
        (b.mm = b.m),
        (b.hh = b.H = b.HH = b.h),
        (b.MM = b.M),
        (b.ss = b.s),
        (b.A = b.a),
        (i.masks = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        }),
        (i.format = function(e, t, n) {
          var a = n || i.i18n;
          if (
            ("number" == typeof e && (e = new Date(e)),
            "[object Date]" !== Object.prototype.toString.call(e) ||
              isNaN(e.getTime()))
          )
            throw new Error("Invalid Date in fecha.format");
          t = i.masks[t] || t || i.masks.default;
          var l = [];
          return (t = (t = t.replace(o, function(e, t) {
            return l.push(t), "??";
          })).replace(r, function(t) {
            return t in f ? f[t](e, a) : t.slice(1, t.length - 1);
          })).replace(/\?\?/g, function() {
            return l.shift();
          });
        }),
        (i.parse = function(e, t, n) {
          var a = n || i.i18n;
          if ("string" != typeof t)
            throw new Error("Invalid format in fecha.parse");
          if (((t = i.masks[t] || t), e.length > 1e3)) return null;
          var o,
            l = {},
            s = [],
            c = ((o = t), o.replace(/[|\\{()[^$+*?.-]/g, "\\$&")).replace(
              r,
              function(e) {
                if (b[e]) {
                  var t = b[e];
                  return s.push(t[1]), "(" + t[0] + ")";
                }
                return e;
              }
            ),
            u = e.match(new RegExp(c, "i"));
          if (!u) return null;
          for (var p = 1; p < u.length; p++) s[p - 1](l, u[p], a);
          var d,
            h = new Date();
          return (
            !0 === l.isPm && null != l.hour && 12 != +l.hour
              ? (l.hour = +l.hour + 12)
              : !1 === l.isPm && 12 == +l.hour && (l.hour = 0),
            null != l.timezoneOffset
              ? ((l.minute = +(l.minute || 0) - +l.timezoneOffset),
                (d = new Date(
                  Date.UTC(
                    l.year || h.getFullYear(),
                    l.month || 0,
                    l.day || 1,
                    l.hour || 0,
                    l.minute || 0,
                    l.second || 0,
                    l.millisecond || 0
                  )
                )))
              : (d = new Date(
                  l.year || h.getFullYear(),
                  l.month || 0,
                  l.day || 1,
                  l.hour || 0,
                  l.minute || 0,
                  l.second || 0,
                  l.millisecond || 0
                )),
            d
          );
        }),
        (t.a = i);
    },
    200: function(e, t, n) {
      "use strict";
      n(4), n(44), n(55), n(41);
      var i = n(120),
        r = n(67),
        a = n(5),
        o = n(35),
        l = n(3),
        s = n(61);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n\n    <style>\n      :host {\n        display: inline-block;\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-common-base;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host(:focus) {\n        outline:none;\n      }\n\n      .toggle-bar {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: 8px;\n        pointer-events: none;\n        opacity: 0.4;\n        transition: background-color linear .08s;\n        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);\n\n        @apply --paper-toggle-button-unchecked-bar;\n      }\n\n      .toggle-button {\n        position: absolute;\n        top: -3px;\n        left: 0;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);\n        transition: -webkit-transform linear .08s, background-color linear .08s;\n        transition: transform linear .08s, background-color linear .08s;\n        will-change: transform;\n        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));\n\n        @apply --paper-toggle-button-unchecked-button;\n      }\n\n      .toggle-button.dragging {\n        -webkit-transition: none;\n        transition: none;\n      }\n\n      :host([checked]:not([disabled])) .toggle-bar {\n        opacity: 0.5;\n        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-bar;\n      }\n\n      :host([disabled]) .toggle-bar {\n        background-color: #000;\n        opacity: 0.12;\n      }\n\n      :host([checked]) .toggle-button {\n        -webkit-transform: translate(16px, 0);\n        transform: translate(16px, 0);\n      }\n\n      :host([checked]:not([disabled])) .toggle-button {\n        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-button;\n      }\n\n      :host([disabled]) .toggle-button {\n        background-color: #bdbdbd;\n        opacity: 1;\n      }\n\n      .toggle-ink {\n        position: absolute;\n        top: -14px;\n        left: -14px;\n        right: auto;\n        bottom: auto;\n        width: 48px;\n        height: 48px;\n        opacity: 0.5;\n        pointer-events: none;\n        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));\n\n        @apply --paper-toggle-button-unchecked-ink;\n      }\n\n      :host([checked]) .toggle-ink {\n        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));\n\n        @apply --paper-toggle-button-checked-ink;\n      }\n\n      .toggle-container {\n        display: inline-block;\n        position: relative;\n        width: 36px;\n        height: 14px;\n        /* The toggle button has an absolute position of -3px; The extra 1px\n        /* accounts for the toggle button shadow box. */\n        margin: 4px 1px;\n      }\n\n      .toggle-label {\n        position: relative;\n        display: inline-block;\n        vertical-align: middle;\n        padding-left: var(--paper-toggle-button-label-spacing, 8px);\n        pointer-events: none;\n        color: var(--paper-toggle-button-label-color, var(--primary-text-color));\n      }\n\n      /* invalid state */\n      :host([invalid]) .toggle-bar {\n        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));\n      }\n\n      :host([invalid]) .toggle-button {\n        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));\n      }\n\n      :host([invalid]) .toggle-ink {\n        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));\n      }\n    </style>\n\n    <div class="toggle-container">\n      <div id="toggleBar" class="toggle-bar"></div>\n      <div id="toggleButton" class="toggle-button"></div>\n    </div>\n\n    <div class="toggle-label"><slot></slot></div>\n\n  ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var u = Object(l.a)(c());
      u.setAttribute("strip-whitespace", ""),
        Object(a.a)({
          _template: u,
          is: "paper-toggle-button",
          behaviors: [i.a],
          hostAttributes: {
            role: "button",
            "aria-pressed": "false",
            tabindex: 0,
          },
          properties: {},
          listeners: { track: "_ontrack" },
          attached: function() {
            Object(s.a)(this, function() {
              Object(o.f)(this, "pan-y");
            });
          },
          _ontrack: function(e) {
            var t = e.detail;
            "start" === t.state
              ? this._trackStart(t)
              : "track" === t.state
              ? this._trackMove(t)
              : "end" === t.state && this._trackEnd(t);
          },
          _trackStart: function(e) {
            (this._width = this.$.toggleBar.offsetWidth / 2),
              (this._trackChecked = this.checked),
              this.$.toggleButton.classList.add("dragging");
          },
          _trackMove: function(e) {
            var t = e.dx;
            (this._x = Math.min(
              this._width,
              Math.max(0, this._trackChecked ? this._width + t : t)
            )),
              this.translate3d(this._x + "px", 0, 0, this.$.toggleButton),
              this._userActivate(this._x > this._width / 2);
          },
          _trackEnd: function(e) {
            this.$.toggleButton.classList.remove("dragging"),
              this.transform("", this.$.toggleButton);
          },
          _createRipple: function() {
            this._rippleContainer = this.$.toggleButton;
            var e = r.a._createRipple();
            return (
              (e.id = "ink"),
              e.setAttribute("recenters", ""),
              e.classList.add("circle", "toggle-ink"),
              e
            );
          },
        });
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var i = n(59),
        r = (n(40), n(5)),
        a = n(3),
        o = n(94);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        is: "paper-input",
        _template: Object(a.a)(l()),
        behaviors: [o.a, i.a],
        properties: { value: { type: String } },
        get _focusableElement() {
          return this.inputElement._inputElement;
        },
        listeners: { "iron-input-ready": "_onIronInputReady" },
        _onIronInputReady: function() {
          this.$.nativeInput || (this.$.nativeInput = this.$$("input")),
            this.inputElement &&
              -1 !== this._typesThatHaveText.indexOf(this.$.nativeInput.type) &&
              (this.alwaysFloatLabel = !0),
            this.inputElement.bindValue &&
              this.$.container._handleValueAndAutoValidate(this.inputElement);
        },
      });
    },
    91: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      n(4);
      var i = n(5),
        r = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(i.a)({
        _template: Object(r.a)(a()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" },
        },
        created: function() {
          o.instance || (o.instance = this),
            document.body.addEventListener(
              "iron-announce",
              this._onIronAnnounce.bind(this)
            );
        },
        announce: function(e) {
          (this._text = ""),
            this.async(function() {
              this._text = e;
            }, 100);
        },
        _onIronAnnounce: function(e) {
          e.detail && e.detail.text && this.announce(e.detail.text);
        },
      });
      (o.instance = null),
        (o.requestAvailability = function() {
          o.instance ||
            (o.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(o.instance);
        });
    },
  },
]);
//# sourceMappingURL=chunk.a7e67e701319ed619eb7.js.map
