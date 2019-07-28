/*! For license information please see chunk.f04cc27fbb26a1dbaf03.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [126],
  {
    111: function(e, n, t) {
      "use strict";
      t(4);
      var a = t(91),
        i = t(60),
        r = t(5),
        o = t(1),
        c = t(3);
      function l() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(c.a)(l()),
        is: "iron-input",
        behaviors: [i.a],
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
          a.a.requestAvailability(),
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
        _bindValueChanged: function(e, n) {
          n &&
            (void 0 === e
              ? (n.value = null)
              : e !== n.value && (this.inputElement.value = e),
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
          var n =
              8 == e.keyCode ||
              9 == e.keyCode ||
              13 == e.keyCode ||
              27 == e.keyCode,
            t =
              19 == e.keyCode ||
              20 == e.keyCode ||
              45 == e.keyCode ||
              46 == e.keyCode ||
              144 == e.keyCode ||
              145 == e.keyCode ||
              (e.keyCode > 32 && e.keyCode < 41) ||
              (e.keyCode > 111 && e.keyCode < 124);
          return !(n || (0 == e.charCode && t));
        },
        _onKeypress: function(e) {
          if (this.allowedPattern || "number" === this.inputElement.type) {
            var n = this._patternRegExp;
            if (n && !(e.metaKey || e.ctrlKey || e.altKey)) {
              this._patternAlreadyChecked = !0;
              var t = String.fromCharCode(e.charCode);
              this._isPrintable(e) &&
                !n.test(t) &&
                (e.preventDefault(),
                this._announceInvalidCharacter(
                  "Invalid character " + t + " not entered."
                ));
            }
          }
        },
        _checkPatternValidity: function() {
          var e = this._patternRegExp;
          if (!e) return !0;
          for (var n = 0; n < this.inputElement.value.length; n++)
            if (!e.test(this.inputElement.value[n])) return !1;
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
                  (e = i.a.validate.call(this, this.bindValue))),
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
    117: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return r;
      });
      t(4);
      var a = t(53),
        i = t(34),
        r = [a.a, i.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    120: function(e, n, t) {
      "use strict";
      t(4);
      var a = t(59),
        i = t(60),
        r = {
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
        o = [a.a, i.a, r],
        c = t(56),
        l = t(67);
      t.d(n, "a", function() {
        return s;
      });
      var p = {
          _checkedChanged: function() {
            r._checkedChanged.call(this),
              this.hasRipple() &&
                (this.checked
                  ? this._ripple.setAttribute("checked", "")
                  : this._ripple.removeAttribute("checked"));
          },
          _buttonStateChanged: function() {
            l.a._buttonStateChanged.call(this),
              this.disabled ||
                (this.isAttached && (this.checked = this.active));
          },
        },
        s = [c.a, o, p];
    },
    140: function(e, n, t) {
      "use strict";
      t(44), t(55), t(41), t(52);
      var a = document.createElement("template");
      a.setAttribute("style", "display: none;"),
        (a.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(a.content);
    },
    148: function(e, n, t) {
      "use strict";
      t(4), t(41);
      var a = t(120),
        i = t(56),
        r = t(5),
        o = t(3),
        c = t(61);
      function l() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(
          [
            '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in `attached`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>',
          ],
          [
            '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in \\`attached\\`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>',
          ]
        );
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var p = Object(o.a)(l());
      p.setAttribute("strip-whitespace", ""),
        Object(r.a)({
          _template: p,
          is: "paper-checkbox",
          behaviors: [a.a],
          hostAttributes: { role: "checkbox", "aria-checked": !1, tabindex: 0 },
          properties: {
            ariaActiveAttribute: { type: String, value: "aria-checked" },
          },
          attached: function() {
            Object(c.a)(this, function() {
              if (
                "-1px" ===
                this.getComputedStyleValue(
                  "--calculated-paper-checkbox-ink-size"
                ).trim()
              ) {
                var e = this.getComputedStyleValue(
                    "--calculated-paper-checkbox-size"
                  ).trim(),
                  n = "px",
                  t = e.match(/[A-Za-z]+$/);
                null !== t && (n = t[0]);
                var a = parseFloat(e),
                  i = (8 / 3) * a;
                "px" === n && (i = Math.floor(i)) % 2 != a % 2 && i++,
                  this.updateStyles({ "--paper-checkbox-ink-size": i + n });
              }
            });
          },
          _computeCheckboxClass: function(e, n) {
            var t = "";
            return e && (t += "checked "), n && (t += "invalid"), t;
          },
          _computeCheckmarkClass: function(e) {
            return e ? "" : "hidden";
          },
          _createRipple: function() {
            return (
              (this._rippleContainer = this.$.checkboxContainer),
              i.b._createRipple.call(this)
            );
          },
        });
    },
    178: function(e, n, t) {
      "use strict";
      t(4), t(44), t(41), t(52);
      var a = t(5),
        i = t(3);
      function r() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({ _template: Object(i.a)(r()), is: "paper-item-body" });
    },
    187: function(e, n, t) {
      "use strict";
      t(4), t(44), t(52), t(140);
      var a = t(5),
        i = t(3),
        r = t(117);
      function o() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(i.a)(o()),
        is: "paper-icon-item",
        behaviors: [r.a],
      });
    },
    209: function(e, n, t) {
      "use strict";
      t(4), t(44);
      var a = t(34),
        i = t(60),
        r = t(5),
        o = t(1),
        c = t(3);
      function l() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>\n    </div>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name\\$="[[name]]" aria-label\\$="[[label]]" autocomplete\\$="[[autocomplete]]" autofocus\\$="[[autofocus]]" inputmode\\$="[[inputmode]]" placeholder\\$="[[placeholder]]" readonly\\$="[[readonly]]" required\\$="[[required]]" disabled\\$="[[disabled]]" rows\\$="[[rows]]" minlength\\$="[[minlength]]" maxlength\\$="[[maxlength]]"></textarea>\n    </div>\n',
          ]
        );
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(c.a)(l()),
        is: "iron-autogrow-textarea",
        behaviors: [i.a, a.a],
        properties: {
          value: { observer: "_valueChanged", type: String, notify: !0 },
          bindValue: {
            observer: "_bindValueChanged",
            type: String,
            notify: !0,
          },
          rows: { type: Number, value: 1, observer: "_updateCached" },
          maxRows: { type: Number, value: 0, observer: "_updateCached" },
          autocomplete: { type: String, value: "off" },
          autofocus: { type: Boolean, value: !1 },
          inputmode: { type: String },
          placeholder: { type: String },
          readonly: { type: String },
          required: { type: Boolean },
          minlength: { type: Number },
          maxlength: { type: Number },
          label: { type: String },
        },
        listeners: { input: "_onInput" },
        get textarea() {
          return this.$.textarea;
        },
        get selectionStart() {
          return this.$.textarea.selectionStart;
        },
        get selectionEnd() {
          return this.$.textarea.selectionEnd;
        },
        set selectionStart(e) {
          this.$.textarea.selectionStart = e;
        },
        set selectionEnd(e) {
          this.$.textarea.selectionEnd = e;
        },
        attached: function() {
          navigator.userAgent.match(/iP(?:[oa]d|hone)/) &&
            (this.$.textarea.style.marginLeft = "-3px");
        },
        validate: function() {
          var e = this.$.textarea.validity.valid;
          return (
            e &&
              (this.required && "" === this.value
                ? (e = !1)
                : this.hasValidator() &&
                  (e = i.a.validate.call(this, this.value))),
            (this.invalid = !e),
            this.fire("iron-input-validate"),
            e
          );
        },
        _bindValueChanged: function(e) {
          this.value = e;
        },
        _valueChanged: function(e) {
          var n = this.textarea;
          n &&
            (n.value !== e && (n.value = e || 0 === e ? e : ""),
            (this.bindValue = e),
            (this.$.mirror.innerHTML = this._valueForMirror()),
            this.fire("bind-value-changed", { value: this.bindValue }));
        },
        _onInput: function(e) {
          var n = Object(o.a)(e).path;
          this.value = n ? n[0].value : e.target.value;
        },
        _constrain: function(e) {
          var n;
          for (
            e = e || [""],
              n =
                this.maxRows > 0 && e.length > this.maxRows
                  ? e.slice(0, this.maxRows)
                  : e.slice(0);
            this.rows > 0 && n.length < this.rows;

          )
            n.push("");
          return n.join("<br/>") + "&#160;";
        },
        _valueForMirror: function() {
          var e = this.textarea;
          if (e)
            return (
              (this.tokens =
                e && e.value
                  ? e.value
                      .replace(/&/gm, "&amp;")
                      .replace(/"/gm, "&quot;")
                      .replace(/'/gm, "&#39;")
                      .replace(/</gm, "&lt;")
                      .replace(/>/gm, "&gt;")
                      .split("\n")
                  : [""]),
              this._constrain(this.tokens)
            );
        },
        _updateCached: function() {
          this.$.mirror.innerHTML = this._constrain(this.tokens);
        },
      });
      t(112), t(113), t(114);
      var p = t(59),
        s = t(94);
      function d() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(c.a)(d()),
        is: "paper-textarea",
        behaviors: [s.a, p.a],
        properties: {
          _ariaLabelledBy: { observer: "_ariaLabelledByChanged", type: String },
          _ariaDescribedBy: {
            observer: "_ariaDescribedByChanged",
            type: String,
          },
          value: { type: String },
          rows: { type: Number, value: 1 },
          maxRows: { type: Number, value: 0 },
        },
        get selectionStart() {
          return this.$.input.textarea.selectionStart;
        },
        set selectionStart(e) {
          this.$.input.textarea.selectionStart = e;
        },
        get selectionEnd() {
          return this.$.input.textarea.selectionEnd;
        },
        set selectionEnd(e) {
          this.$.input.textarea.selectionEnd = e;
        },
        _ariaLabelledByChanged: function(e) {
          this._focusableElement.setAttribute("aria-labelledby", e);
        },
        _ariaDescribedByChanged: function(e) {
          this._focusableElement.setAttribute("aria-describedby", e);
        },
        get _focusableElement() {
          return this.inputElement.textarea;
        },
      });
    },
    90: function(e, n, t) {
      "use strict";
      t(4), t(111), t(112), t(113), t(114);
      var a = t(59),
        i = (t(40), t(5)),
        r = t(3),
        o = t(94);
      function c() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        is: "paper-input",
        _template: Object(r.a)(c()),
        behaviors: [o.a, a.a],
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
    91: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return o;
      });
      t(4);
      var a = t(5),
        i = t(3);
      function r() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(a.a)({
        _template: Object(i.a)(r()),
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
//# sourceMappingURL=chunk.f04cc27fbb26a1dbaf03.js.map
