/*! For license information please see chunk.a174fbbd9833678a7247.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    111: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(91),
        a = n(60),
        r = n(5),
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
      Object(r.a)({
        _template: Object(l.a)(s()),
        is: "iron-input",
        behaviors: [a.a],
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
                  (e = a.a.validate.call(this, this.bindValue))),
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
    209: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var i = n(34),
        a = n(60),
        r = n(5),
        o = n(1),
        l = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
      Object(r.a)({
        _template: Object(l.a)(s()),
        is: "iron-autogrow-textarea",
        behaviors: [a.a, i.a],
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
                  (e = a.a.validate.call(this, this.value))),
            (this.invalid = !e),
            this.fire("iron-input-validate"),
            e
          );
        },
        _bindValueChanged: function(e) {
          this.value = e;
        },
        _valueChanged: function(e) {
          var t = this.textarea;
          t &&
            (t.value !== e && (t.value = e || 0 === e ? e : ""),
            (this.bindValue = e),
            (this.$.mirror.innerHTML = this._valueForMirror()),
            this.fire("bind-value-changed", { value: this.bindValue }));
        },
        _onInput: function(e) {
          var t = Object(o.a)(e).path;
          this.value = t ? t[0].value : e.target.value;
        },
        _constrain: function(e) {
          var t;
          for (
            e = e || [""],
              t =
                this.maxRows > 0 && e.length > this.maxRows
                  ? e.slice(0, this.maxRows)
                  : e.slice(0);
            this.rows > 0 && t.length < this.rows;

          )
            t.push("");
          return t.join("<br/>") + "&#160;";
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
      n(112), n(113), n(114);
      var u = n(59),
        p = n(94);
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
        _template: Object(l.a)(d()),
        is: "paper-textarea",
        behaviors: [p.a, u.a],
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
    451: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      n(4);
      var i = /\.splices$/,
        a = /\.length$/,
        r = /\.?#?([0-9]+)$/,
        o = {
          properties: {
            data: {
              type: Object,
              notify: !0,
              value: function() {
                return this.zeroValue;
              },
            },
            sequentialTransactions: { type: Boolean, value: !1 },
            log: { type: Boolean, value: !1 },
          },
          observers: ["__dataChanged(data.*)"],
          created: function() {
            (this.__initialized = !1),
              (this.__syncingToMemory = !1),
              (this.__initializingStoredValue = null),
              (this.__transactionQueueAdvances = Promise.resolve());
          },
          ready: function() {
            this._initializeStoredValue();
          },
          get isNew() {
            return !0;
          },
          get transactionsComplete() {
            return this.__transactionQueueAdvances;
          },
          get zeroValue() {},
          saveValue: function(e) {
            return Promise.resolve();
          },
          reset: function() {},
          destroy: function() {
            return (this.data = this.zeroValue), this.saveValue();
          },
          initializeStoredValue: function() {
            return this.isNew
              ? Promise.resolve()
              : this._getStoredValue("data").then(
                  function(e) {
                    if (
                      (this._log("Got stored value!", e, this.data), null == e)
                    )
                      return this._setStoredValue(
                        "data",
                        this.data || this.zeroValue
                      );
                    this.syncToMemory(function() {
                      this.set("data", e);
                    });
                  }.bind(this)
                );
          },
          getStoredValue: function(e) {
            return Promise.resolve();
          },
          setStoredValue: function(e, t) {
            return Promise.resolve(t);
          },
          memoryPathToStoragePath: function(e) {
            return e;
          },
          storagePathToMemoryPath: function(e) {
            return e;
          },
          syncToMemory: function(e) {
            this.__syncingToMemory ||
              (this._group("Sync to memory."),
              (this.__syncingToMemory = !0),
              e.call(this),
              (this.__syncingToMemory = !1),
              this._groupEnd("Sync to memory."));
          },
          valueIsEmpty: function(e) {
            return Array.isArray(e)
              ? 0 === e.length
              : Object.prototype.isPrototypeOf(e)
              ? 0 === Object.keys(e).length
              : null == e;
          },
          _getStoredValue: function(e) {
            return this.getStoredValue(this.memoryPathToStoragePath(e));
          },
          _setStoredValue: function(e, t) {
            return this.setStoredValue(this.memoryPathToStoragePath(e), t);
          },
          _enqueueTransaction: function(e) {
            if (this.sequentialTransactions) e = e.bind(this);
            else {
              var t = e.call(this);
              e = function() {
                return t;
              };
            }
            return (this.__transactionQueueAdvances = this.__transactionQueueAdvances
              .then(e)
              .catch(
                function(e) {
                  this._error("Error performing queued transaction.", e);
                }.bind(this)
              ));
          },
          _log: function() {
            if (this.log) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              console.log.apply(console, t);
            }
          },
          _error: function() {
            if (this.log) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              console.error.apply(console, t);
            }
          },
          _group: function() {
            if (this.log) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              console.group.apply(console, t);
            }
          },
          _groupEnd: function() {
            if (this.log) {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              console.groupEnd.apply(console, t);
            }
          },
          _initializeStoredValue: function() {
            if (!this.__initializingStoredValue) {
              this._group("Initializing stored value.");
              var e = (this.__initializingStoredValue = this.initializeStoredValue()
                .then(
                  function() {
                    (this.__initialized = !0),
                      (this.__initializingStoredValue = null),
                      this._groupEnd("Initializing stored value.");
                  }.bind(this)
                )
                .catch(
                  function(e) {
                    (this.__initializingStoredValue = null),
                      this._groupEnd("Initializing stored value.");
                  }.bind(this)
                ));
              return this._enqueueTransaction(function() {
                return e;
              });
            }
          },
          __dataChanged: function(e) {
            if (
              !this.isNew &&
              !this.__syncingToMemory &&
              this.__initialized &&
              !this.__pathCanBeIgnored(e.path)
            ) {
              var t = this.__normalizeMemoryPath(e.path),
                n = e.value,
                i = n && n.indexSplices;
              this._enqueueTransaction(function() {
                return (
                  this._log("Setting", t + ":", i || n),
                  i &&
                    this.__pathIsSplices(t) &&
                    ((t = this.__parentPath(t)), (n = this.get(t))),
                  this._setStoredValue(t, n)
                );
              });
            }
          },
          __normalizeMemoryPath: function(e) {
            for (
              var t = e.split("."), n = [], i = [], a = [], r = 0;
              r < t.length;
              ++r
            )
              i.push(t[r]),
                /^#/.test(t[r])
                  ? a.push(this.get(n).indexOf(this.get(i)))
                  : a.push(t[r]),
                n.push(t[r]);
            return a.join(".");
          },
          __parentPath: function(e) {
            var t = e.split(".");
            return t.slice(0, t.length - 1).join(".");
          },
          __pathCanBeIgnored: function(e) {
            return a.test(e) && Array.isArray(this.get(this.__parentPath(e)));
          },
          __pathIsSplices: function(e) {
            return i.test(e) && Array.isArray(this.get(this.__parentPath(e)));
          },
          __pathRefersToArray: function(e) {
            return (
              (i.test(e) || a.test(e)) &&
              Array.isArray(this.get(this.__parentPath(e)))
            );
          },
          __pathTailToIndex: function(e) {
            var t = e.split(".").pop();
            return window.parseInt(t.replace(r, "$1"), 10);
          },
        };
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var i = n(59),
        a = (n(40), n(5)),
        r = n(3),
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
      Object(a.a)({
        is: "paper-input",
        _template: Object(r.a)(l()),
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
        a = n(3);
      function r() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
      var o = Object(i.a)({
        _template: Object(a.a)(r()),
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
//# sourceMappingURL=chunk.a174fbbd9833678a7247.js.map
