/*! For license information please see chunk.3ac7aa7e1e6f4a2e7a6d.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [82, 8],
  {
    105: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var i = n(8),
        o = n(19);
      function r(e) {
        return (r =
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
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = Object(i.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              c(this, l(n).apply(this, arguments))
            );
          }
          var i, r, u;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && s(e, t);
            })(n, e),
            (i = n),
            (r = [
              {
                key: "fire",
                value: function(e, t, n) {
                  return (n = n || {}), Object(o.a)(n.node || this, e, t, n);
                },
              },
            ]) && a(i.prototype, r),
            u && a(i, u),
            n
          );
        })();
      });
    },
    111: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(91),
        o = n(60),
        r = n(5),
        a = n(1),
        c = n(3);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
        behaviors: [o.a],
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
          this._observer = Object(a.a)(this).observeNodes(
            function(e) {
              this._initSlottedInput();
            }.bind(this)
          );
        },
        detached: function() {
          this._observer &&
            (Object(a.a)(this).unobserveNodes(this._observer),
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
                  (e = o.a.validate.call(this, this.bindValue))),
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
        return r;
      });
      n(4);
      var i = n(53),
        o = n(34),
        r = [i.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    119: function(e, t, n) {
      "use strict";
      n(4);
      var i = {
        properties: {
          animationConfig: { type: Object },
          entryAnimation: { observer: "_entryAnimationChanged", type: String },
          exitAnimation: { observer: "_exitAnimationChanged", type: String },
        },
        _entryAnimationChanged: function() {
          (this.animationConfig = this.animationConfig || {}),
            (this.animationConfig.entry = [
              { name: this.entryAnimation, node: this },
            ]);
        },
        _exitAnimationChanged: function() {
          (this.animationConfig = this.animationConfig || {}),
            (this.animationConfig.exit = [
              { name: this.exitAnimation, node: this },
            ]);
        },
        _copyProperties: function(e, t) {
          for (var n in t) e[n] = t[n];
        },
        _cloneConfig: function(e) {
          var t = { isClone: !0 };
          return this._copyProperties(t, e), t;
        },
        _getAnimationConfigRecursive: function(e, t, n) {
          var i;
          if (this.animationConfig)
            if (
              this.animationConfig.value &&
              "function" == typeof this.animationConfig.value
            )
              this._warn(
                this._logf(
                  "playAnimation",
                  "Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."
                )
              );
            else if (
              ((i = e ? this.animationConfig[e] : this.animationConfig),
              Array.isArray(i) || (i = [i]),
              i)
            )
              for (var o, r = 0; (o = i[r]); r++)
                if (o.animatable)
                  o.animatable._getAnimationConfigRecursive(o.type || e, t, n);
                else if (o.id) {
                  var a = t[o.id];
                  a
                    ? (a.isClone ||
                        ((t[o.id] = this._cloneConfig(a)), (a = t[o.id])),
                      this._copyProperties(a, o))
                    : (t[o.id] = o);
                } else n.push(o);
        },
        getAnimationConfig: function(e) {
          var t = {},
            n = [];
          for (var i in (this._getAnimationConfigRecursive(e, t, n), t))
            n.push(t[i]);
          return n;
        },
      };
      n.d(t, "a", function() {
        return o;
      });
      var o = [
        i,
        {
          _configureAnimations: function(e) {
            var t = [],
              n = [];
            if (e.length > 0)
              for (var i, o = 0; (i = e[o]); o++) {
                var r = document.createElement(i.name);
                if (r.isNeonAnimation) {
                  var a;
                  r.configure ||
                    (r.configure = function(e) {
                      return null;
                    }),
                    (a = r.configure(i)),
                    n.push({ result: a, config: i, neonAnimation: r });
                } else console.warn(this.is + ":", i.name, "not found!");
              }
            for (var c = 0; c < n.length; c++) {
              var l = n[c].result,
                s = n[c].config,
                u = n[c].neonAnimation;
              try {
                "function" != typeof l.cancel &&
                  (l = document.timeline.play(l));
              } catch (p) {
                (l = null), console.warn("Couldnt play", "(", s.name, ").", p);
              }
              l && t.push({ neonAnimation: u, config: s, animation: l });
            }
            return t;
          },
          _shouldComplete: function(e) {
            for (var t = !0, n = 0; n < e.length; n++)
              if ("finished" != e[n].animation.playState) {
                t = !1;
                break;
              }
            return t;
          },
          _complete: function(e) {
            for (var t = 0; t < e.length; t++)
              e[t].neonAnimation.complete(e[t].config);
            for (t = 0; t < e.length; t++) e[t].animation.cancel();
          },
          playAnimation: function(e, t) {
            var n = this.getAnimationConfig(e);
            if (n) {
              (this._active = this._active || {}),
                this._active[e] &&
                  (this._complete(this._active[e]), delete this._active[e]);
              var i = this._configureAnimations(n);
              if (0 != i.length) {
                this._active[e] = i;
                for (var o = 0; o < i.length; o++)
                  i[o].animation.onfinish = function() {
                    this._shouldComplete(i) &&
                      (this._complete(i),
                      delete this._active[e],
                      this.fire("neon-animation-finish", t, { bubbles: !1 }));
                  }.bind(this);
              } else this.fire("neon-animation-finish", t, { bubbles: !1 });
            }
          },
          cancelAnimation: function() {
            for (var e in this._active) {
              var t = this._active[e];
              for (var n in t) t[n].animation.cancel();
            }
            this._active = {};
          },
        },
      ];
    },
    120: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(59),
        o = n(60),
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
        a = [i.a, o.a, r],
        c = n(56),
        l = n(67);
      n.d(t, "a", function() {
        return u;
      });
      var s = {
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
        u = [c.a, a, s];
    },
    138: function(e, t, n) {
      "use strict";
      n(4), n(44), n(140);
      var i = n(5),
        o = n(3),
        r = n(117);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(a()),
        is: "paper-item",
        behaviors: [r.a],
      });
    },
    139: function(e, t, n) {
      "use strict";
      n(4), n(41);
      var i = n(121),
        o = n(5),
        r = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        _template: Object(r.a)(a()),
        is: "paper-listbox",
        behaviors: [i.a],
        hostAttributes: { role: "listbox" },
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
    141: function(e, t, n) {
      "use strict";
      n(4), n(31), n(107), n(90), n(142), n(108), n(41), n(143), n(144);
      var i = n(53),
        o = n(34),
        r = n(59),
        a = n(60),
        c = n(5),
        l = n(1),
        s = n(35),
        u = n(3);
      function p() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        \x3c!-- paper-input has type="text" for a11y, do not remove --\x3e\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          \x3c!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> --\x3e\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      Object(c.a)({
        _template: Object(u.a)(p()),
        is: "paper-dropdown-menu",
        behaviors: [i.a, o.a, r.a, a.a],
        properties: {
          selectedItemLabel: { type: String, notify: !0, readOnly: !0 },
          selectedItem: { type: Object, notify: !0, readOnly: !0 },
          value: { type: String, notify: !0 },
          label: { type: String },
          placeholder: { type: String },
          errorMessage: { type: String },
          opened: {
            type: Boolean,
            notify: !0,
            value: !1,
            observer: "_openedChanged",
          },
          allowOutsideScroll: { type: Boolean, value: !1 },
          noLabelFloat: { type: Boolean, value: !1, reflectToAttribute: !0 },
          alwaysFloatLabel: { type: Boolean, value: !1 },
          noAnimations: { type: Boolean, value: !1 },
          horizontalAlign: { type: String, value: "right" },
          verticalAlign: { type: String, value: "top" },
          verticalOffset: Number,
          dynamicAlign: { type: Boolean },
          restoreFocusOnClose: { type: Boolean, value: !0 },
        },
        listeners: { tap: "_onTap" },
        keyBindings: { "up down": "open", esc: "close" },
        hostAttributes: {
          role: "combobox",
          "aria-autocomplete": "none",
          "aria-haspopup": "true",
        },
        observers: ["_selectedItemChanged(selectedItem)"],
        attached: function() {
          var e = this.contentElement;
          e && e.selectedItem && this._setSelectedItem(e.selectedItem);
        },
        get contentElement() {
          for (
            var e = Object(l.a)(this.$.content).getDistributedNodes(),
              t = 0,
              n = e.length;
            t < n;
            t++
          )
            if (e[t].nodeType === Node.ELEMENT_NODE) return e[t];
        },
        open: function() {
          this.$.menuButton.open();
        },
        close: function() {
          this.$.menuButton.close();
        },
        _onIronSelect: function(e) {
          this._setSelectedItem(e.detail.item);
        },
        _onIronDeselect: function(e) {
          this._setSelectedItem(null);
        },
        _onTap: function(e) {
          s.c(e) === this && this.open();
        },
        _selectedItemChanged: function(e) {
          var t = "";
          (t = e
            ? e.label || e.getAttribute("label") || e.textContent.trim()
            : ""),
            (this.value = t),
            this._setSelectedItemLabel(t);
        },
        _computeMenuVerticalOffset: function(e, t) {
          return t || (e ? -4 : 8);
        },
        _getValidity: function(e) {
          return (
            this.disabled || !this.required || (this.required && !!this.value)
          );
        },
        _openedChanged: function() {
          var e = this.opened ? "true" : "false",
            t = this.contentElement;
          t && t.setAttribute("aria-expanded", e);
        },
      });
    },
    142: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(31),
        o = n(34),
        r = n(84),
        a = n(119),
        c = n(5),
        l = n(1),
        s = n(3);
      function u() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id="contentWrapper">\n      <slot id="content" name="dropdown-content"></slot>\n    </div>\n',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      Object(c.a)({
        _template: Object(s.a)(u()),
        is: "iron-dropdown",
        behaviors: [o.a, i.a, r.a, a.a],
        properties: {
          horizontalAlign: {
            type: String,
            value: "left",
            reflectToAttribute: !0,
          },
          verticalAlign: { type: String, value: "top", reflectToAttribute: !0 },
          openAnimationConfig: { type: Object },
          closeAnimationConfig: { type: Object },
          focusTarget: { type: Object },
          noAnimations: { type: Boolean, value: !1 },
          allowOutsideScroll: {
            type: Boolean,
            value: !1,
            observer: "_allowOutsideScrollChanged",
          },
        },
        listeners: { "neon-animation-finish": "_onNeonAnimationFinish" },
        observers: [
          "_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)",
        ],
        get containedElement() {
          for (
            var e = Object(l.a)(this.$.content).getDistributedNodes(),
              t = 0,
              n = e.length;
            t < n;
            t++
          )
            if (e[t].nodeType === Node.ELEMENT_NODE) return e[t];
        },
        ready: function() {
          this.scrollAction ||
            (this.scrollAction = this.allowOutsideScroll ? "refit" : "lock"),
            (this._readied = !0);
        },
        attached: function() {
          (this.sizingTarget && this.sizingTarget !== this) ||
            (this.sizingTarget = this.containedElement || this);
        },
        detached: function() {
          this.cancelAnimation();
        },
        _openedChanged: function() {
          this.opened && this.disabled
            ? this.cancel()
            : (this.cancelAnimation(),
              this._updateAnimationConfig(),
              r.b._openedChanged.apply(this, arguments));
        },
        _renderOpened: function() {
          !this.noAnimations && this.animationConfig.open
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("open"))
            : r.b._renderOpened.apply(this, arguments);
        },
        _renderClosed: function() {
          !this.noAnimations && this.animationConfig.close
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("close"))
            : r.b._renderClosed.apply(this, arguments);
        },
        _onNeonAnimationFinish: function() {
          this.$.contentWrapper.classList.remove("animating"),
            this.opened
              ? this._finishRenderOpened()
              : this._finishRenderClosed();
        },
        _updateAnimationConfig: function() {
          for (
            var e = this.containedElement,
              t = []
                .concat(this.openAnimationConfig || [])
                .concat(this.closeAnimationConfig || []),
              n = 0;
            n < t.length;
            n++
          )
            t[n].node = e;
          this.animationConfig = {
            open: this.openAnimationConfig,
            close: this.closeAnimationConfig,
          };
        },
        _updateOverlayPosition: function() {
          this.isAttached && this.notifyResize();
        },
        _allowOutsideScrollChanged: function(e) {
          this._readied &&
            (e
              ? (this.scrollAction && "lock" !== this.scrollAction) ||
                (this.scrollAction = "refit")
              : (this.scrollAction = "lock"));
        },
        _applyFocus: function() {
          var e = this.focusTarget || this.containedElement;
          e && this.opened && !this.noAutoFocus
            ? e.focus()
            : r.b._applyFocus.apply(this, arguments);
        },
      });
      var p = {
        properties: {
          animationTiming: {
            type: Object,
            value: function() {
              return {
                duration: 500,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                fill: "both",
              };
            },
          },
        },
        isNeonAnimation: !0,
        created: function() {
          document.body.animate ||
            console.warn(
              "No web animations detected. This element will not function without a web animations polyfill."
            );
        },
        timingFromConfig: function(e) {
          if (e.timing)
            for (var t in e.timing) this.animationTiming[t] = e.timing[t];
          return this.animationTiming;
        },
        setPrefixedProperty: function(e, t, n) {
          for (
            var i,
              o = {
                transform: ["webkitTransform"],
                transformOrigin: [
                  "mozTransformOrigin",
                  "webkitTransformOrigin",
                ],
              }[t],
              r = 0;
            (i = o[r]);
            r++
          )
            e.style[i] = n;
          e.style[t] = n;
        },
        complete: function(e) {},
      };
      Object(c.a)({
        is: "fade-in-animation",
        behaviors: [p],
        configure: function(e) {
          var t = e.node;
          return (
            (this._effect = new KeyframeEffect(
              t,
              [{ opacity: "0" }, { opacity: "1" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        },
      }),
        Object(c.a)({
          is: "fade-out-animation",
          behaviors: [p],
          configure: function(e) {
            var t = e.node;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ opacity: "1" }, { opacity: "0" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        });
      n(41), n(83);
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      Object(c.a)({
        is: "paper-menu-grow-height-animation",
        behaviors: [p],
        configure: function(e) {
          var t = e.node,
            n = t.getBoundingClientRect().height;
          return (
            (this._effect = new KeyframeEffect(
              t,
              [{ height: n / 2 + "px" }, { height: n + "px" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        },
      }),
        Object(c.a)({
          is: "paper-menu-grow-width-animation",
          behaviors: [p],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ width: n / 2 + "px" }, { width: n + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        }),
        Object(c.a)({
          is: "paper-menu-shrink-width-animation",
          behaviors: [p],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ width: n + "px" }, { width: n - n / 20 + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        }),
        Object(c.a)({
          is: "paper-menu-shrink-height-animation",
          behaviors: [p],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().height;
            return (
              this.setPrefixedProperty(t, "transformOrigin", "0 0"),
              (this._effect = new KeyframeEffect(
                t,
                [
                  { height: n + "px", transform: "translateY(0)" },
                  { height: n / 2 + "px", transform: "translateY(-20px)" },
                ],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        });
      var f = {
          ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
          MAX_ANIMATION_TIME_MS: 400,
        },
        h = Object(c.a)({
          _template: Object(s.a)(d()),
          is: "paper-menu-button",
          behaviors: [i.a, o.a],
          properties: {
            opened: {
              type: Boolean,
              value: !1,
              notify: !0,
              observer: "_openedChanged",
            },
            horizontalAlign: {
              type: String,
              value: "left",
              reflectToAttribute: !0,
            },
            verticalAlign: {
              type: String,
              value: "top",
              reflectToAttribute: !0,
            },
            dynamicAlign: { type: Boolean },
            horizontalOffset: { type: Number, value: 0, notify: !0 },
            verticalOffset: { type: Number, value: 0, notify: !0 },
            noOverlap: { type: Boolean },
            noAnimations: { type: Boolean, value: !1 },
            ignoreSelect: { type: Boolean, value: !1 },
            closeOnActivate: { type: Boolean, value: !1 },
            openAnimationConfig: {
              type: Object,
              value: function() {
                return [
                  {
                    name: "fade-in-animation",
                    timing: { delay: 100, duration: 200 },
                  },
                  {
                    name: "paper-menu-grow-width-animation",
                    timing: {
                      delay: 100,
                      duration: 150,
                      easing: f.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                  {
                    name: "paper-menu-grow-height-animation",
                    timing: {
                      delay: 100,
                      duration: 275,
                      easing: f.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                ];
              },
            },
            closeAnimationConfig: {
              type: Object,
              value: function() {
                return [
                  { name: "fade-out-animation", timing: { duration: 150 } },
                  {
                    name: "paper-menu-shrink-width-animation",
                    timing: {
                      delay: 100,
                      duration: 50,
                      easing: f.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                  {
                    name: "paper-menu-shrink-height-animation",
                    timing: { duration: 200, easing: "ease-in" },
                  },
                ];
              },
            },
            allowOutsideScroll: { type: Boolean, value: !1 },
            restoreFocusOnClose: { type: Boolean, value: !0 },
            _dropdownContent: { type: Object },
          },
          hostAttributes: { role: "group", "aria-haspopup": "true" },
          listeners: {
            "iron-activate": "_onIronActivate",
            "iron-select": "_onIronSelect",
          },
          get contentElement() {
            for (
              var e = Object(l.a)(this.$.content).getDistributedNodes(),
                t = 0,
                n = e.length;
              t < n;
              t++
            )
              if (e[t].nodeType === Node.ELEMENT_NODE) return e[t];
          },
          toggle: function() {
            this.opened ? this.close() : this.open();
          },
          open: function() {
            this.disabled || this.$.dropdown.open();
          },
          close: function() {
            this.$.dropdown.close();
          },
          _onIronSelect: function(e) {
            this.ignoreSelect || this.close();
          },
          _onIronActivate: function(e) {
            this.closeOnActivate && this.close();
          },
          _openedChanged: function(e, t) {
            e
              ? ((this._dropdownContent = this.contentElement),
                this.fire("paper-dropdown-open"))
              : null != t && this.fire("paper-dropdown-close");
          },
          _disabledChanged: function(e) {
            o.a._disabledChanged.apply(this, arguments),
              e && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(e) {
            var t = e.detail,
              n = this.$.trigger;
            Object(l.a)(t).path.indexOf(n) > -1 && e.preventDefault();
          },
        });
      Object.keys(f).forEach(function(e) {
        h[e] = f[e];
      });
    },
    143: function(e, t, n) {
      "use strict";
      n(85);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'),
        document.head.appendChild(i.content);
    },
    144: function(e, t, n) {
      "use strict";
      n(41);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(i.content);
    },
    148: function(e, t, n) {
      "use strict";
      n(4), n(41);
      var i = n(120),
        o = n(56),
        r = n(5),
        a = n(3),
        c = n(61);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
      var s = Object(a.a)(l());
      s.setAttribute("strip-whitespace", ""),
        Object(r.a)({
          _template: s,
          is: "paper-checkbox",
          behaviors: [i.a],
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
                  t = "px",
                  n = e.match(/[A-Za-z]+$/);
                null !== n && (t = n[0]);
                var i = parseFloat(e),
                  o = (8 / 3) * i;
                "px" === t && (o = Math.floor(o)) % 2 != i % 2 && o++,
                  this.updateStyles({ "--paper-checkbox-ink-size": o + t });
              }
            });
          },
          _computeCheckboxClass: function(e, t) {
            var n = "";
            return e && (n += "checked "), t && (n += "invalid"), n;
          },
          _computeCheckmarkClass: function(e) {
            return e ? "" : "hidden";
          },
          _createRipple: function() {
            return (
              (this._rippleContainer = this.$.checkboxContainer),
              o.b._createRipple.call(this)
            );
          },
        });
    },
    171: function(e, t, n) {
      "use strict";
      var i = n(8);
      function o(e) {
        return (o =
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
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function a(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      t.a = Object(i.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              a(this, c(n).apply(this, arguments))
            );
          }
          var i, o, s;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && l(e, t);
            })(n, e),
            (i = n),
            (s = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: Object,
                    localize: {
                      type: Function,
                      computed: "__computeLocalize(hass.localize)",
                    },
                  };
                },
              },
            ]),
            (o = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                },
              },
            ]) && r(i.prototype, o),
            s && r(i, s),
            n
          );
        })();
      });
    },
    172: function(e, t, n) {
      "use strict";
      var i = n(0);
      function o(e) {
        return (o =
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
      function r() {
        var e = s([""]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = s([
          '\n            <div class="card-header">',
          "</div>\n          ",
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = s(["\n      ", "\n      <slot></slot>\n    "]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = s([
          "\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          n = v(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var i = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (i.decorators = e.decorators),
          "field" === e.kind && (i.initializer = e.value),
          i
        );
      }
      function h(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function b(e) {
        return e.decorators && e.decorators.length;
      }
      function m(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function v(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== o(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      var g = (function(e, t, n, i) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(i) {
                t.forEach(function(t) {
                  var o = t.placement;
                  if (t.kind === i && ("static" === o || "prototype" === o)) {
                    var r = "static" === o ? e : n;
                    this.defineClassElement(r, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var i = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === i ? void 0 : i.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                i = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!b(e)) return n.push(e);
                  var t = this.decorateElement(e, o);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var r = this.decorateConstructor(n, t);
              return i.push.apply(i, r.finishers), (r.finishers = i), r;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], o = e.decorators, r = o.length - 1;
                r >= 0;
                r--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var c = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, o[r])(c) || c);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var s = l.extras;
                if (s) {
                  for (var u = 0; u < s.length; u++)
                    this.addElementPlacement(s[u], t);
                  n.push.apply(n, s);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var o = this.fromClassDescriptor(e),
                  r = this.toClassDescriptor((0, t[i])(o) || o);
                if (
                  (void 0 !== r.finisher && n.push(r.finisher),
                  void 0 !== r.elements)
                ) {
                  e = r.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var c = a + 1; c < e.length; c++)
                      if (
                        e[a].key === e[c].key &&
                        e[a].placement === e[c].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: n };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var n = v(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var o = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var r = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      o,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      o,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (r.initializer = e.initializer)),
                r
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = y(e, "finisher"),
                i = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: i };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var n = y(e, "finisher"),
                i = this.toElementDescriptors(e.elements);
              return { elements: i, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = (0, t[n])(e);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  e = i;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (i) for (var r = 0; r < i.length; r++) o = i[r](o);
        var a = t(function(e) {
            o.initializeInstanceElements(e, c.elements);
          }, n),
          c = o.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === r.key &&
                      e.placement === r.placement
                    );
                  },
                  i = 0;
                i < e.length;
                i++
              ) {
                var o,
                  r = e[i];
                if ("method" === r.kind && (o = t.find(n)))
                  if (m(r.descriptor) || m(o.descriptor)) {
                    if (b(r) || b(o))
                      throw new ReferenceError(
                        "Duplicated methods (" + r.key + ") can't be decorated."
                      );
                    o.descriptor = r.descriptor;
                  } else {
                    if (b(r)) {
                      if (b(o))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            r.key +
                            ")."
                        );
                      o.decorators = r.decorators;
                    }
                    h(r, o);
                  }
                else t.push(r);
              }
              return t;
            })(a.d.map(f)),
            e
          );
        return (
          o.initializeClassElements(a.F, c.elements),
          o.runClassFinishers(a.F, c.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function i() {
                var t, n, r, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var c = arguments.length, l = new Array(c), s = 0;
                  s < c;
                  s++
                )
                  l[s] = arguments[s];
                return (
                  (r = this),
                  (n =
                    !(a = (t = u(i)).call.apply(t, [this].concat(l))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? p(r)
                      : a),
                  e(p(n)),
                  n
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && d(e, t);
                })(i, t),
                i
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "header",
                value: void 0,
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(l());
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(i.f)(
                    c(),
                    this.header
                      ? Object(i.f)(a(), this.header)
                      : Object(i.f)(r())
                  );
                },
              },
            ],
          };
        },
        i.a
      );
      customElements.define("ha-card", g);
    },
    173: function(e, t, n) {
      "use strict";
      var i = n(185);
      t.a = function(e) {
        return void 0 === e.attributes.friendly_name
          ? Object(i.a)(e.entity_id).replace(/_/g, " ")
          : e.attributes.friendly_name || "";
      };
    },
    175: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var i = n(118);
      function o(e) {
        return Object(i.a)(e.entity_id);
      }
    },
    181: function(e, t, n) {
      "use strict";
      n(4), n(55), n(146);
      var i = n(5),
        o = n(3),
        r = n(122);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var c = Object(o.a)(a());
      c.setAttribute("strip-whitespace", ""),
        Object(i.a)({ _template: c, is: "paper-spinner", behaviors: [r.a] });
    },
    185: function(e, t, n) {
      "use strict";
      function i(e) {
        return e.substr(e.indexOf(".") + 1);
      }
      n.d(t, "a", function() {
        return i;
      });
    },
    193: function(e, t, n) {
      "use strict";
      var i = n(3),
        o = n(25);
      n(92);
      function r(e) {
        return (r =
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
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$="[[computeContentClasses(isWide)]]">\n        <div class="header"><slot name="header"></slot></div>\n        <div class$="[[computeClasses(isWide)]]">\n          <div class="intro"><slot name="introduction"></slot></div>\n          <div class="panel flex-auto"><slot></slot></div>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function l(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            l(this, s(t).apply(this, arguments))
          );
        }
        var n, r, p;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && u(e, t);
          })(t, o["a"]),
          (n = t),
          (p = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(a());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  narrow: { type: Boolean },
                  isWide: { type: Boolean, value: !1 },
                };
              },
            },
          ]),
          (r = [
            {
              key: "computeContentClasses",
              value: function(e) {
                return e ? "content " : "content narrow";
              },
            },
            {
              key: "computeClasses",
              value: function(e) {
                return (
                  "together layout " + (e ? "horizontal" : "vertical narrow")
                );
              },
            },
          ]) && c(n.prototype, r),
          p && c(n, p),
          t
        );
      })();
      customElements.define("ha-config-section", p);
    },
    198: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var i = n(5),
        o = n(1),
        r = n(3),
        a = n(124);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n',
          ]
        );
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(c()),
        is: "app-header-layout",
        behaviors: [a.a],
        properties: {
          hasScrollingRegion: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
          },
        },
        observers: ["resetLayout(isAttached, hasScrollingRegion)"],
        get header() {
          return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0];
        },
        _updateLayoutStates: function() {
          var e = this.header;
          if (this.isAttached && e) {
            this.$.wrapper.classList.remove("initializing"),
              (e.scrollTarget = this.hasScrollingRegion
                ? this.$.contentContainer
                : this.ownerDocument.documentElement);
            var t = e.offsetHeight;
            this.hasScrollingRegion
              ? ((e.style.left = ""), (e.style.right = ""))
              : requestAnimationFrame(
                  function() {
                    var t = this.getBoundingClientRect(),
                      n = document.documentElement.clientWidth - t.right;
                    (e.style.left = t.left + "px"), (e.style.right = n + "px");
                  }.bind(this)
                );
            var n = this.$.contentContainer.style;
            e.fixed && !e.condenses && this.hasScrollingRegion
              ? ((n.marginTop = t + "px"), (n.paddingTop = ""))
              : ((n.paddingTop = t + "px"), (n.marginTop = ""));
          }
        },
      });
    },
    349: function(e, t, n) {
      "use strict";
      var i = {
        DOMAIN_DEVICE_CLASS: {
          binary_sensor: [
            "battery",
            "cold",
            "connectivity",
            "door",
            "garage_door",
            "gas",
            "heat",
            "light",
            "lock",
            "moisture",
            "motion",
            "moving",
            "occupancy",
            "opening",
            "plug",
            "power",
            "presence",
            "problem",
            "safety",
            "smoke",
            "sound",
            "vibration",
            "window",
          ],
          cover: [
            "awning",
            "blind",
            "curtain",
            "damper",
            "door",
            "garage",
            "shade",
            "shutter",
            "window",
          ],
          sensor: [
            "battery",
            "humidity",
            "illuminance",
            "temperature",
            "pressure",
            "power",
            "signal_strength",
          ],
          switch: ["switch", "outlet"],
        },
        UNKNOWN_TYPE: "json",
        ADD_TYPE: "key-value",
        TYPE_TO_TAG: {
          string: "ha-customize-string",
          json: "ha-customize-string",
          icon: "ha-customize-icon",
          boolean: "ha-customize-boolean",
          array: "ha-customize-array",
          "key-value": "ha-customize-key-value",
        },
      };
      (i.LOGIC_STATE_ATTRIBUTES = i.LOGIC_STATE_ATTRIBUTES || {
        entity_picture: void 0,
        friendly_name: { type: "string", description: "Name" },
        icon: { type: "icon" },
        emulated_hue: { type: "boolean", domains: ["emulated_hue"] },
        emulated_hue_name: { type: "string", domains: ["emulated_hue"] },
        haaska_hidden: void 0,
        haaska_name: void 0,
        homebridge_hidden: { type: "boolean" },
        homebridge_name: { type: "string" },
        supported_features: void 0,
        attribution: void 0,
        custom_ui_more_info: { type: "string" },
        custom_ui_state_card: { type: "string" },
        device_class: {
          type: "array",
          options: i.DOMAIN_DEVICE_CLASS,
          description: "Device class",
          domains: ["binary_sensor", "cover", "sensor", "switch"],
        },
        hidden: { type: "boolean", description: "Hide from UI" },
        assumed_state: {
          type: "boolean",
          domains: [
            "switch",
            "light",
            "cover",
            "climate",
            "fan",
            "group",
            "water_heater",
          ],
        },
        initial_state: { type: "string", domains: ["automation"] },
        unit_of_measurement: { type: "string" },
      }),
        (t.a = i);
    },
    399: function(e, t) {
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<dom-module id="ha-form-style">\n  <template>\n    <style>\n      .form-group {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        padding: 8px 16px;\n      }\n\n      .form-group label {\n        @apply --layout-flex-2;\n      }\n\n      .form-group .form-control {\n        @apply --layout-flex;\n      }\n\n      .form-group.vertical {\n        @apply --layout-vertical;\n        @apply --layout-start;\n      }\n\n      paper-dropdown-menu.form-control {\n        margin: -9px 0;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(n.content);
    },
    400: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var i = n(173);
      function o(e, t) {
        var n = Object(i.a)(e),
          o = Object(i.a)(t);
        return n < o ? -1 : n > o ? 1 : 0;
      }
    },
    713: function(e, t, n) {
      "use strict";
      n.r(t);
      n(198), n(216), n(145), n(106);
      var i = n(3),
        o = n(25),
        r = (n(92),
        n(127),
        n(193),
        n(82),
        n(141),
        n(138),
        n(139),
        n(181),
        n(172),
        n(173));
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
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        ha-card {\n          direction: ltr;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          padding-bottom: 24px;\n        }\n\n        .form-placeholder {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 96px;\n        }\n\n        [hidden]: {\n          display: none;\n        }\n\n        .card-actions {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n      </style>\n      <ha-card>\n        <div class="card-content">\n          <div class="device-picker">\n            <paper-dropdown-menu\n              label="[[label]]"\n              class="flex"\n              disabled="[[!entities.length]]"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                selected="{{selectedEntity}}"\n              >\n                <template is="dom-repeat" items="[[entities]]" as="state">\n                  <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class="form-container">\n            <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">\n              <div class="form-placeholder">\n                <template is="dom-if" if="[[computeShowNoDevices(formState)]]">\n                  No entities found! :-(\n                </template>\n\n                <template is="dom-if" if="[[computeShowSpinner(formState)]]">\n                  <paper-spinner active="" alt="[[formState]]"></paper-spinner>\n                  [[formState]]\n                </template>\n              </div>\n            </template>\n\n            <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>\n          </div>\n        </div>\n        <div class="card-actions">\n          <mwc-button\n            on-click="saveEntity"\n            disabled="[[computeShowPlaceholder(formState)]]"\n            >SAVE</mwc-button\n          >\n          <template is="dom-if" if="[[allowDelete]]">\n            <mwc-button\n              class="warning"\n              on-click="deleteEntity"\n              disabled="[[computeShowPlaceholder(formState)]]"\n              >DELETE</mwc-button\n            >\n          </template>\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t, n) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = p(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            s(this, p(t).apply(this, arguments))
          );
        }
        var n, a, f;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && d(e, t);
          })(t, o["a"]),
          (n = t),
          (f = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(c());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object, observer: "hassChanged" },
                  label: { type: String, value: "Device" },
                  entities: { type: Array, observer: "entitiesChanged" },
                  allowDelete: { type: Boolean, value: !1 },
                  selectedEntity: {
                    type: Number,
                    value: -1,
                    observer: "entityChanged",
                  },
                  formState: { type: String, value: "no-devices" },
                  config: { type: Object },
                };
              },
            },
          ]),
          (a = [
            {
              key: "connectedCallback",
              value: function() {
                u(p(t.prototype), "connectedCallback", this).call(this),
                  (this.formEl = document.createElement(this.config.component)),
                  (this.formEl.hass = this.hass),
                  this.$.form.appendChild(this.formEl),
                  this.entityChanged(this.selectedEntity);
              },
            },
            {
              key: "computeSelectCaption",
              value: function(e) {
                return this.config.computeSelectCaption
                  ? this.config.computeSelectCaption(e)
                  : Object(r.a)(e);
              },
            },
            {
              key: "computeShowNoDevices",
              value: function(e) {
                return "no-devices" === e;
              },
            },
            {
              key: "computeShowSpinner",
              value: function(e) {
                return "loading" === e || "saving" === e;
              },
            },
            {
              key: "computeShowPlaceholder",
              value: function(e) {
                return "editing" !== e;
              },
            },
            {
              key: "computeShowForm",
              value: function(e) {
                return "editing" === e;
              },
            },
            {
              key: "hassChanged",
              value: function(e) {
                this.formEl && (this.formEl.hass = e);
              },
            },
            {
              key: "entitiesChanged",
              value: function(e, t) {
                if (0 !== e.length)
                  if (t) {
                    var n = t[this.selectedEntity].entity_id,
                      i = e.findIndex(function(e) {
                        return e.entity_id === n;
                      });
                    -1 === i
                      ? (this.selectedEntity = 0)
                      : i !== this.selectedEntity && (this.selectedEntity = i);
                  } else this.selectedEntity = 0;
                else this.formState = "no-devices";
              },
            },
            {
              key: "entityChanged",
              value: function(e) {
                if (this.entities && this.formEl) {
                  var t = this.entities[e];
                  if (t) {
                    this.formState = "loading";
                    var n = this;
                    this.formEl.loadEntity(t).then(function() {
                      n.formState = "editing";
                    });
                  }
                }
              },
            },
            {
              key: "saveEntity",
              value: function() {
                this.formState = "saving";
                var e = this;
                this.formEl.saveEntity().then(function() {
                  e.formState = "editing";
                });
              },
            },
          ]) && l(n.prototype, a),
          f && l(n, f),
          t
        );
      })();
      customElements.define("ha-entity-config", f);
      var h = n(349),
        b = n(26),
        m = (n(399), n(105));
      function y(e) {
        return (y =
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
      function v() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        paper-dropdown-menu {\n          margin: -9px 0;\n        }\n      </style>\n      <paper-dropdown-menu\n        label="[[item.description]]"\n        disabled="[[item.secondary]]"\n        selected-item-label="{{item.value}}"\n        dynamic-align=""\n      >\n        <paper-listbox\n          slot="dropdown-content"\n          selected="[[computeSelected(item)]]"\n        >\n          <template is="dom-repeat" items="[[getOptions(item)]]" as="option">\n            <paper-item>[[option]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    ',
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function k(e, t) {
        return !t || ("object" !== y(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var O = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            k(this, w(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && x(e, t);
          })(t, Object(m["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(v());
              },
            },
            {
              key: "properties",
              get: function() {
                return { item: { type: Object, notifies: !0 } };
              },
            },
          ]),
          (r = [
            {
              key: "getOptions",
              value: function(e) {
                var t = e.domain || "*",
                  n = e.options[t] || e.options["*"];
                return n
                  ? n.sort()
                  : ((this.item.type = "string"),
                    this.fire("item-changed"),
                    []);
              },
            },
            {
              key: "computeSelected",
              value: function(e) {
                return this.getOptions(e).indexOf(e.value);
              },
            },
          ]) && g(n.prototype, r),
          a && g(n, a),
          t
        );
      })();
      customElements.define("ha-customize-array", O);
      n(148);
      function _(e) {
        return (_ =
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
      function j() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">\n        [[item.description]]\n      </paper-checkbox>\n    ',
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function A(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function C(e, t) {
        return !t || ("object" !== _(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var z = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            C(this, E(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && S(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(j());
              },
            },
            {
              key: "properties",
              get: function() {
                return { item: { type: Object, notifies: !0 } };
              },
            },
          ]),
          (r = null) && A(n.prototype, r),
          a && A(n, a),
          t
        );
      })();
      customElements.define("ha-customize-boolean", z);
      n(107), n(90);
      function P(e) {
        return (P =
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
      function T() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        .icon-image {\n          border: 1px solid grey;\n          padding: 8px;\n          margin-right: 20px;\n          margin-top: 10px;\n        }\n      </style>\n      <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="icon"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      function I(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function N(e, t) {
        return !t || ("object" !== P(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function $(e) {
        return ($ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function B(e, t) {
        return (B =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var L = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            N(this, $(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && B(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(T());
              },
            },
            {
              key: "properties",
              get: function() {
                return { item: { type: Object, notifies: !0 } };
              },
            },
          ]),
          (r = null) && I(n.prototype, r),
          a && I(n, a),
          t
        );
      })();
      function R(e) {
        return (R =
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
      function D() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        paper-input {\n          @apply --layout-flex;\n        }\n        .key {\n          padding-right: 20px;\n        }\n      </style>\n      <paper-input\n        disabled="[[item.secondary]]"\n        class="key"\n        label="Attribute name"\n        value="{{item.attribute}}"\n      >\n      </paper-input>\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="Attribute value"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function F(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function V(e, t) {
        return !t || ("object" !== R(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function M(e) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function W(e, t) {
        return (W =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-customize-icon", L);
      var q = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            V(this, M(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && W(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(D());
              },
            },
            {
              key: "properties",
              get: function() {
                return { item: { type: Object, notifies: !0 } };
              },
            },
          ]),
          (r = null) && F(n.prototype, r),
          a && F(n, a),
          t
        );
      })();
      function G(e) {
        return (G =
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
      function K() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <paper-input\n        disabled="[[item.secondary]]"\n        label="[[getLabel(item)]]"\n        value="{{item.value}}"\n      >\n      </paper-input>\n    ',
        ]);
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      function U(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Y(e, t) {
        return !t || ("object" !== G(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function H(e) {
        return (H = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function J(e, t) {
        return (J =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-customize-key-value", q);
      var Z = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Y(this, H(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && J(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(K());
              },
            },
            {
              key: "properties",
              get: function() {
                return { item: { type: Object, notifies: !0 } };
              },
            },
          ]),
          (r = [
            {
              key: "getLabel",
              value: function(e) {
                return (
                  e.description + ("json" === e.type ? " (JSON formatted)" : "")
                );
              },
            },
          ]) && U(n.prototype, r),
          a && U(n, a),
          t
        );
      })();
      function X(e) {
        return (X =
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
      function Q() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-form-style">\n        :host {\n          display: block;\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .button {\n          position: absolute;\n          margin-top: -20px;\n          top: 50%;\n          right: 0;\n        }\n      </style>\n      <div id="wrapper" class="form-group"></div>\n      <paper-icon-button\n        class="button"\n        icon="[[getIcon(item.secondary)]]"\n        on-click="tapButton"\n      ></paper-icon-button>\n    ',
        ]);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      function ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function te(e, t) {
        return !t || ("object" !== X(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ne(e) {
        return (ne = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ie(e, t) {
        return (ie =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-customize-string", Z);
      var oe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            te(this, ne(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ie(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Q());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  item: { type: Object, notify: !0, observer: "itemObserver" },
                };
              },
            },
          ]),
          (r = [
            {
              key: "tapButton",
              value: function() {
                this.item.secondary
                  ? (this.item = Object.assign({}, this.item, {
                      secondary: !1,
                    }))
                  : (this.item = Object.assign({}, this.item, { closed: !0 }));
              },
            },
            {
              key: "getIcon",
              value: function(e) {
                return e ? "hass:pencil" : "hass:close";
              },
            },
            {
              key: "itemObserver",
              value: function(e) {
                var t,
                  n = this,
                  i = this.$.wrapper,
                  o = h.a.TYPE_TO_TAG[e.type].toUpperCase();
                i.lastChild && i.lastChild.tagName === o
                  ? (t = i.lastChild)
                  : (i.lastChild && i.removeChild(i.lastChild),
                    (this.$.child = t = document.createElement(
                      o.toLowerCase()
                    )),
                    (t.className = "form-control"),
                    t.addEventListener("item-changed", function() {
                      n.item = Object.assign({}, t.item);
                    })),
                  t.setProperties({ item: this.item }),
                  null === t.parentNode && i.appendChild(t);
              },
            },
          ]) && ee(n.prototype, r),
          a && ee(n, a),
          t
        );
      })();
      function re(e) {
        return (re =
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
      function ae() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <template is="dom-repeat" items="{{attributes}}" mutable-data="">\n        <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">\n        </ha-customize-attribute>\n      </template>\n    ',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function le(e, t) {
        return !t || ("object" !== re(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function se(e) {
        return (se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ue(e, t) {
        return (ue =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-customize-attribute", oe);
      var pe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            le(this, se(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ue(e, t);
          })(t, Object(b["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(ae());
              },
            },
            {
              key: "properties",
              get: function() {
                return { attributes: { type: Array, notify: !0 } };
              },
            },
          ]),
          (r = null) && ce(n.prototype, r),
          a && ce(n, a),
          t
        );
      })();
      customElements.define("ha-form-customize-attributes", pe);
      var de = n(175);
      function fe(e) {
        return (fe =
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
      function he() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style ha-form-style">\n        .warning {\n          color: red;\n        }\n\n        .attributes-text {\n          padding-left: 20px;\n        }\n      </style>\n      <template\n        is="dom-if"\n        if="[[computeShowWarning(localConfig, globalConfig)]]"\n      >\n        <div class="warning">\n          It seems that your configuration.yaml doesn\'t properly include\n          customize.yaml<br />\n          Changes made here won\'t affect your configuration.\n        </div>\n      </template>\n      <template is="dom-if" if="[[hasLocalAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes are already set in customize.yaml<br />\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{localAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasGlobalAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes are customized from outside of\n          customize.yaml<br />\n          Possibly via a domain, a glob or a different include.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{globalAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasExistingAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes of the entity are set programatically.<br />\n          You can override them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{existingAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is="dom-if" if="[[hasNewAttributes]]">\n        <h4 class="attributes-text">\n          The following attributes weren\'t set. Set them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes="{{newAttributes}}"\n        ></ha-form-customize-attributes>\n      </template>\n      <div class="form-group">\n        <paper-dropdown-menu\n          label="Pick an attribute to override"\n          class="flex"\n          dynamic-align=""\n        >\n          <paper-listbox\n            slot="dropdown-content"\n            selected="{{selectedNewAttribute}}"\n          >\n            <template\n              is="dom-repeat"\n              items="[[newAttributesOptions]]"\n              as="option"\n            >\n              <paper-item>[[option]]</paper-item>\n            </template>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    ',
        ]);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      function be(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function me(e, t) {
        return !t || ("object" !== fe(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ye(e) {
        return (ye = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ve(e, t) {
        return (ve =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var ge = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            me(this, ye(t).apply(this, arguments))
          );
        }
        var n, r, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ve(e, t);
          })(t, o["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(he());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  entity: Object,
                  localAttributes: {
                    type: Array,
                    computed: "computeLocalAttributes(localConfig)",
                  },
                  hasLocalAttributes: Boolean,
                  globalAttributes: {
                    type: Array,
                    computed:
                      "computeGlobalAttributes(localConfig, globalConfig)",
                  },
                  hasGlobalAttributes: Boolean,
                  existingAttributes: {
                    type: Array,
                    computed:
                      "computeExistingAttributes(localConfig, globalConfig, entity)",
                  },
                  hasExistingAttributes: Boolean,
                  newAttributes: { type: Array, value: [] },
                  hasNewAttributes: Boolean,
                  newAttributesOptions: Array,
                  selectedNewAttribute: {
                    type: Number,
                    value: -1,
                    observer: "selectedNewAttributeObserver",
                  },
                  localConfig: Object,
                  globalConfig: Object,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)",
                ];
              },
            },
          ]),
          (r = [
            {
              key: "_initOpenObject",
              value: function(e, t, n, i) {
                return Object.assign(
                  {
                    attribute: e,
                    value: t,
                    closed: !1,
                    domain: Object(de.a)(this.entity),
                    secondary: n,
                    description: e,
                  },
                  i
                );
              },
            },
            {
              key: "loadEntity",
              value: function(e) {
                var t = this;
                return (
                  (this.entity = e),
                  this.hass
                    .callApi("GET", "config/customize/config/" + e.entity_id)
                    .then(function(e) {
                      (t.localConfig = e.local),
                        (t.globalConfig = e.global),
                        (t.newAttributes = []);
                    })
                );
              },
            },
            {
              key: "saveEntity",
              value: function() {
                var e = {};
                this.localAttributes
                  .concat(
                    this.globalAttributes,
                    this.existingAttributes,
                    this.newAttributes
                  )
                  .forEach(function(t) {
                    if (!t.closed && !t.secondary && t.attribute && t.value) {
                      var n = "json" === t.type ? JSON.parse(t.value) : t.value;
                      n && (e[t.attribute] = n);
                    }
                  });
                var t = this.entity.entity_id;
                return this.hass.callApi(
                  "POST",
                  "config/customize/config/" + t,
                  e
                );
              },
            },
            {
              key: "_computeSingleAttribute",
              value: function(e, t, n) {
                var i = h.a.LOGIC_STATE_ATTRIBUTES[e] || {
                  type: h.a.UNKNOWN_TYPE,
                };
                return this._initOpenObject(
                  e,
                  "json" === i.type ? JSON.stringify(t) : t,
                  n,
                  i
                );
              },
            },
            {
              key: "_computeAttributes",
              value: function(e, t, n) {
                var i = this;
                return t.map(function(t) {
                  return i._computeSingleAttribute(t, e[t], n);
                });
              },
            },
            {
              key: "computeLocalAttributes",
              value: function(e) {
                if (!e) return [];
                var t = Object.keys(e);
                return this._computeAttributes(e, t, !1);
              },
            },
            {
              key: "computeGlobalAttributes",
              value: function(e, t) {
                if (!e || !t) return [];
                var n = Object.keys(e),
                  i = Object.keys(t).filter(function(e) {
                    return !n.includes(e);
                  });
                return this._computeAttributes(t, i, !0);
              },
            },
            {
              key: "computeExistingAttributes",
              value: function(e, t, n) {
                if (!e || !t || !n) return [];
                var i = Object.keys(e),
                  o = Object.keys(t),
                  r = Object.keys(n.attributes).filter(function(e) {
                    return !i.includes(e) && !o.includes(e);
                  });
                return this._computeAttributes(n.attributes, r, !0);
              },
            },
            {
              key: "computeShowWarning",
              value: function(e, t) {
                return (
                  !(!e || !t) &&
                  Object.keys(e).some(function(n) {
                    return JSON.stringify(t[n]) !== JSON.stringify(e[n]);
                  })
                );
              },
            },
            {
              key: "filterFromAttributes",
              value: function(e) {
                return function(t) {
                  return (
                    !e ||
                    e.every(function(e) {
                      return e.attribute !== t || e.closed;
                    })
                  );
                };
              },
            },
            {
              key: "getNewAttributesOptions",
              value: function(e, t, n, i) {
                var o = this;
                return Object.keys(h.a.LOGIC_STATE_ATTRIBUTES)
                  .filter(function(e) {
                    var t = h.a.LOGIC_STATE_ATTRIBUTES[e];
                    return (
                      t &&
                      (!t.domains ||
                        !o.entity ||
                        t.domains.includes(Object(de.a)(o.entity)))
                    );
                  })
                  .filter(this.filterFromAttributes(e))
                  .filter(this.filterFromAttributes(t))
                  .filter(this.filterFromAttributes(n))
                  .filter(this.filterFromAttributes(i))
                  .sort()
                  .concat("Other");
              },
            },
            {
              key: "selectedNewAttributeObserver",
              value: function(e) {
                if (!(e < 0)) {
                  var t = this.newAttributesOptions[e];
                  if (e === this.newAttributesOptions.length - 1) {
                    var n = this._initOpenObject("", "", !1, {
                      type: h.a.ADD_TYPE,
                    });
                    return (
                      this.push("newAttributes", n),
                      void (this.selectedNewAttribute = -1)
                    );
                  }
                  var i = this.localAttributes.findIndex(function(e) {
                    return e.attribute === t;
                  });
                  if (i >= 0)
                    return (
                      this.set("localAttributes." + i + ".closed", !1),
                      void (this.selectedNewAttribute = -1)
                    );
                  if (
                    (i = this.globalAttributes.findIndex(function(e) {
                      return e.attribute === t;
                    })) >= 0
                  )
                    return (
                      this.set("globalAttributes." + i + ".closed", !1),
                      void (this.selectedNewAttribute = -1)
                    );
                  if (
                    (i = this.existingAttributes.findIndex(function(e) {
                      return e.attribute === t;
                    })) >= 0
                  )
                    return (
                      this.set("existingAttributes." + i + ".closed", !1),
                      void (this.selectedNewAttribute = -1)
                    );
                  if (
                    (i = this.newAttributes.findIndex(function(e) {
                      return e.attribute === t;
                    })) >= 0
                  )
                    return (
                      this.set("newAttributes." + i + ".closed", !1),
                      void (this.selectedNewAttribute = -1)
                    );
                  var o = this._computeSingleAttribute(t, "", !1);
                  this.push("newAttributes", o),
                    (this.selectedNewAttribute = -1);
                }
              },
            },
            {
              key: "attributesObserver",
              value: function() {
                (this.hasLocalAttributes =
                  this.localAttributes &&
                  this.localAttributes.some(function(e) {
                    return !e.closed;
                  })),
                  (this.hasGlobalAttributes =
                    this.globalAttributes &&
                    this.globalAttributes.some(function(e) {
                      return !e.closed;
                    })),
                  (this.hasExistingAttributes =
                    this.existingAttributes &&
                    this.existingAttributes.some(function(e) {
                      return !e.closed;
                    })),
                  (this.hasNewAttributes =
                    this.newAttributes &&
                    this.newAttributes.some(function(e) {
                      return !e.closed;
                    })),
                  (this.newAttributesOptions = this.getNewAttributesOptions(
                    this.localAttributes,
                    this.globalAttributes,
                    this.existingAttributes,
                    this.newAttributes
                  ));
              },
            },
          ]) && be(n.prototype, r),
          a && be(n, a),
          t
        );
      })();
      customElements.define("ha-form-customize", ge);
      var ke = n(400),
        we = n(171);
      function xe(e) {
        return (xe =
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
      function Oe() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style"></style>\n\n      <app-header-layout has-scrolling-region="">\n        <app-header slot="header" fixed="">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click="_backTapped"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title="">\n              [[localize(\'ui.panel.config.customize.caption\')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <div class$="[[computeClasses(isWide)]]">\n          <ha-config-section is-wide="[[isWide]]">\n            <span slot="header">\n              [[localize(\'ui.panel.config.customize.picker.header\')]]\n            </span>\n            <span slot="introduction">\n              [[localize(\'ui.panel.config.customize.picker.introduction\')]]\n            </span>\n            <ha-entity-config\n              hass="[[hass]]"\n              label="Entity"\n              entities="[[entities]]"\n              config="[[entityConfig]]"\n            >\n            </ha-entity-config>\n          </ha-config-section>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (Oe = function() {
            return e;
          }),
          e
        );
      }
      function _e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function je(e, t) {
        return !t || ("object" !== xe(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Ae(e) {
        return (Ae = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ce(e, t) {
        return (Ce =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Ee = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            je(this, Ae(t).apply(this, arguments))
          );
        }
        var n, a, c;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Ce(e, t);
          })(t, Object(we["a"])(o["a"])),
          (n = t),
          (c = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Oe());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  isWide: Boolean,
                  entities: { type: Array, computed: "computeEntities(hass)" },
                  entityConfig: {
                    type: Object,
                    value: {
                      component: "ha-form-customize",
                      computeSelectCaption: function(e) {
                        return Object(r.a)(e) + " (" + Object(de.a)(e) + ")";
                      },
                    },
                  },
                };
              },
            },
          ]),
          (a = [
            {
              key: "computeClasses",
              value: function(e) {
                return e ? "content" : "content narrow";
              },
            },
            {
              key: "_backTapped",
              value: function() {
                history.back();
              },
            },
            {
              key: "computeEntities",
              value: function(e) {
                return Object.keys(e.states)
                  .map(function(t) {
                    return e.states[t];
                  })
                  .sort(ke.a);
              },
            },
          ]) && _e(n.prototype, a),
          c && _e(n, c),
          t
        );
      })();
      customElements.define("ha-config-customize", Ee);
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var i = n(59),
        o = (n(40), n(5)),
        r = n(3),
        a = n(94);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
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
      Object(o.a)({
        is: "paper-input",
        _template: Object(r.a)(c()),
        behaviors: [a.a, i.a],
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
        return a;
      });
      n(4);
      var i = n(5),
        o = n(3);
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
      var a = Object(i.a)({
        _template: Object(o.a)(r()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" },
        },
        created: function() {
          a.instance || (a.instance = this),
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
      (a.instance = null),
        (a.requestAvailability = function() {
          a.instance ||
            (a.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(a.instance);
        });
    },
  },
]);
//# sourceMappingURL=chunk.3ac7aa7e1e6f4a2e7a6d.js.map
