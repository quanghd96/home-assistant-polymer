/*! For license information please see chunk.37e1718ca6944a0baeba.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [131],
  {
    181: function(e, n, t) {
      "use strict";
      t(4), t(55), t(146);
      var a = t(5),
        r = t(3),
        i = t(122);
      function o() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
        Object(a.a)({ _template: l, is: "paper-spinner", behaviors: [i.a] });
    },
    209: function(e, n, t) {
      "use strict";
      t(4), t(44);
      var a = t(34),
        r = t(60),
        i = t(5),
        o = t(1),
        l = t(3);
      function s() {
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
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(l.a)(s()),
        is: "iron-autogrow-textarea",
        behaviors: [r.a, a.a],
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
                  (e = r.a.validate.call(this, this.value))),
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
        c = t(94);
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
      Object(i.a)({
        _template: Object(l.a)(d()),
        is: "paper-textarea",
        behaviors: [c.a, p.a],
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
    675: function(e, n, t) {
      "use strict";
      t.r(n);
      t(209), t(181);
      var a = t(11),
        r = t(21),
        i = t(3),
        o = t(25);
      t(92);
      function l(e) {
        return (l =
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
          '\n      <style include="ha-style iron-flex iron-positioning"></style>\n      <style>\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .edit-pane {\n          margin-right: 16px;\n        }\n\n        .edit-pane a {\n          color: var(--dark-primary-color);\n        }\n\n        .horizontal .edit-pane {\n          max-width: 50%;\n        }\n\n        .render-pane {\n          position: relative;\n          max-width: 50%;\n        }\n\n        .render-spinner {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n        }\n\n        paper-textarea {\n          --paper-input-container-input: {\n            @apply --paper-font-code1;\n          }\n        }\n\n        .rendered {\n          @apply --paper-font-code1;\n          clear: both;\n          white-space: pre-wrap;\n        }\n\n        .rendered.error {\n          color: red;\n        }\n      </style>\n\n      <div class$="[[computeFormClasses(narrow)]]">\n        <div class="edit-pane">\n          <p>\n            Templates are rendered using the Jinja2 template engine with some\n            JAVIS Home specific extensions.\n          </p>\n          <ul>\n            <li>\n              <a\n                href="http://jinja.pocoo.org/docs/dev/templates/"\n                target="_blank"\n                >Jinja2 template documentation</a\n              >\n            </li>\n            <li>\n              <a\n                href="https://home-assistant.io/docs/configuration/templating/"\n                target="_blank"\n                >JAVIS Home template extensions</a\n              >\n            </li>\n          </ul>\n          <paper-textarea\n            label="Template editor"\n            value="{{template}}"\n            autofocus\n          ></paper-textarea>\n        </div>\n\n        <div class="render-pane">\n          <paper-spinner\n            class="render-spinner"\n            active="[[rendering]]"\n          ></paper-spinner>\n          <pre class$="[[computeRenderedClasses(error)]]">[[processed]]</pre>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function p(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function c(e, n) {
        return !n || ("object" !== l(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, n) {
        return (u =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var h = (function(e) {
        function n() {
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            c(this, d(n).apply(this, arguments))
          );
        }
        var t, l, h;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && u(e, n);
          })(n, o["a"]),
          (t = n),
          (h = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(s());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  error: { type: Boolean, value: !1 },
                  rendering: { type: Boolean, value: !1 },
                  template: {
                    type: String,
                    value:
                      'Imitate available variables:\n{% set my_test_json = {\n  "temperature": 25,\n  "unit": "°C"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state("device_tracker.paulus", "home") and\n      is_state("device_tracker.anne_therese", "home") -%}\n  You are both home, you silly\n{%- else -%}\n  Anne Therese is at {{ states("device_tracker.anne_therese") }}\n  Paulus is at {{ states("device_tracker.paulus") }}\n{%- endif %}\n\nFor loop example:\n{% for state in states.sensor -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.',
                    observer: "templateChanged",
                  },
                  processed: { type: String, value: "" },
                };
              },
            },
          ]),
          (l = [
            {
              key: "computeFormClasses",
              value: function(e) {
                return e ? "content fit" : "content fit layout horizontal";
              },
            },
            {
              key: "computeRenderedClasses",
              value: function(e) {
                return e ? "error rendered" : "rendered";
              },
            },
            {
              key: "templateChanged",
              value: function() {
                var e = this;
                this.error && (this.error = !1),
                  (this._debouncer = r.a.debounce(
                    this._debouncer,
                    a.d.after(500),
                    function() {
                      e.renderTemplate();
                    }
                  ));
              },
            },
            {
              key: "renderTemplate",
              value: function() {
                (this.rendering = !0),
                  this.hass
                    .callApi("POST", "template", { template: this.template })
                    .then(
                      function(e) {
                        (this.processed = e), (this.rendering = !1);
                      }.bind(this),
                      function(e) {
                        (this.processed =
                          (e && e.body && e.body.message) ||
                          "Unknown error rendering template"),
                          (this.error = !0),
                          (this.rendering = !1);
                      }.bind(this)
                    );
              },
            },
          ]) && p(t.prototype, l),
          h && p(t, h),
          n
        );
      })();
      customElements.define("developer-tools-template", h);
    },
  },
]);
//# sourceMappingURL=chunk.37e1718ca6944a0baeba.js.map
