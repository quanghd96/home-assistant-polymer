/*! For license information please see chunk.2dbb3157fc4fa1ac118a.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [100, 8, 117],
  {
    105: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var r = n(8),
        i = n(19);
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
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
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
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              s(this, l(n).apply(this, arguments))
            );
          }
          var r, o, u;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(n, e),
            (r = n),
            (o = [
              {
                key: "fire",
                value: function(e, t, n) {
                  return (n = n || {}), Object(i.a)(n.node || this, e, t, n);
                },
              },
            ]) && a(r.prototype, o),
            u && a(r, u),
            n
          );
        })();
      });
    },
    111: function(e, t, n) {
      "use strict";
      n(4);
      var r = n(91),
        i = n(60),
        o = n(5),
        a = n(1),
        s = n(3);
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
      Object(o.a)({
        _template: Object(s.a)(l()),
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
          r.a.requestAvailability(),
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
    117: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      n(4);
      var r = n(53),
        i = n(34),
        o = [r.a, i.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    119: function(e, t, n) {
      "use strict";
      n(4);
      var r = {
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
          var r;
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
              ((r = e ? this.animationConfig[e] : this.animationConfig),
              Array.isArray(r) || (r = [r]),
              r)
            )
              for (var i, o = 0; (i = r[o]); o++)
                if (i.animatable)
                  i.animatable._getAnimationConfigRecursive(i.type || e, t, n);
                else if (i.id) {
                  var a = t[i.id];
                  a
                    ? (a.isClone ||
                        ((t[i.id] = this._cloneConfig(a)), (a = t[i.id])),
                      this._copyProperties(a, i))
                    : (t[i.id] = i);
                } else n.push(i);
        },
        getAnimationConfig: function(e) {
          var t = {},
            n = [];
          for (var r in (this._getAnimationConfigRecursive(e, t, n), t))
            n.push(t[r]);
          return n;
        },
      };
      n.d(t, "a", function() {
        return i;
      });
      var i = [
        r,
        {
          _configureAnimations: function(e) {
            var t = [],
              n = [];
            if (e.length > 0)
              for (var r, i = 0; (r = e[i]); i++) {
                var o = document.createElement(r.name);
                if (o.isNeonAnimation) {
                  var a;
                  o.configure ||
                    (o.configure = function(e) {
                      return null;
                    }),
                    (a = o.configure(r)),
                    n.push({ result: a, config: r, neonAnimation: o });
                } else console.warn(this.is + ":", r.name, "not found!");
              }
            for (var s = 0; s < n.length; s++) {
              var l = n[s].result,
                c = n[s].config,
                u = n[s].neonAnimation;
              try {
                "function" != typeof l.cancel &&
                  (l = document.timeline.play(l));
              } catch (p) {
                (l = null), console.warn("Couldnt play", "(", c.name, ").", p);
              }
              l && t.push({ neonAnimation: u, config: c, animation: l });
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
              var r = this._configureAnimations(n);
              if (0 != r.length) {
                this._active[e] = r;
                for (var i = 0; i < r.length; i++)
                  r[i].animation.onfinish = function() {
                    this._shouldComplete(r) &&
                      (this._complete(r),
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
      var r = n(59),
        i = n(60),
        o = {
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
        a = [r.a, i.a, o],
        s = n(56),
        l = n(67);
      n.d(t, "a", function() {
        return u;
      });
      var c = {
          _checkedChanged: function() {
            o._checkedChanged.call(this),
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
        u = [s.a, a, c];
    },
    138: function(e, t, n) {
      "use strict";
      n(4), n(44), n(140);
      var r = n(5),
        i = n(3),
        o = n(117);
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
      Object(r.a)({
        _template: Object(i.a)(a()),
        is: "paper-item",
        behaviors: [o.a],
      });
    },
    139: function(e, t, n) {
      "use strict";
      n(4), n(41);
      var r = n(121),
        i = n(5),
        o = n(3);
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
      Object(i.a)({
        _template: Object(o.a)(a()),
        is: "paper-listbox",
        behaviors: [r.a],
        hostAttributes: { role: "listbox" },
      });
    },
    140: function(e, t, n) {
      "use strict";
      n(44), n(55), n(41), n(52);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(r.content);
    },
    141: function(e, t, n) {
      "use strict";
      n(4), n(31), n(107), n(90), n(142), n(108), n(41), n(143), n(144);
      var r = n(53),
        i = n(34),
        o = n(59),
        a = n(60),
        s = n(5),
        l = n(1),
        c = n(35),
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
      Object(s.a)({
        _template: Object(u.a)(p()),
        is: "paper-dropdown-menu",
        behaviors: [r.a, i.a, o.a, a.a],
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
          c.c(e) === this && this.open();
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
      var r = n(31),
        i = n(34),
        o = n(84),
        a = n(119),
        s = n(5),
        l = n(1),
        c = n(3);
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
      Object(s.a)({
        _template: Object(c.a)(u()),
        is: "iron-dropdown",
        behaviors: [i.a, r.a, o.a, a.a],
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
              o.b._openedChanged.apply(this, arguments));
        },
        _renderOpened: function() {
          !this.noAnimations && this.animationConfig.open
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("open"))
            : o.b._renderOpened.apply(this, arguments);
        },
        _renderClosed: function() {
          !this.noAnimations && this.animationConfig.close
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("close"))
            : o.b._renderClosed.apply(this, arguments);
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
            : o.b._applyFocus.apply(this, arguments);
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
            var r,
              i = {
                transform: ["webkitTransform"],
                transformOrigin: [
                  "mozTransformOrigin",
                  "webkitTransformOrigin",
                ],
              }[t],
              o = 0;
            (r = i[o]);
            o++
          )
            e.style[r] = n;
          e.style[t] = n;
        },
        complete: function(e) {},
      };
      Object(s.a)({
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
        Object(s.a)({
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
      function f() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n',
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      Object(s.a)({
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
        Object(s.a)({
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
        Object(s.a)({
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
        Object(s.a)({
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
      var d = {
          ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
          MAX_ANIMATION_TIME_MS: 400,
        },
        h = Object(s.a)({
          _template: Object(c.a)(f()),
          is: "paper-menu-button",
          behaviors: [r.a, i.a],
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
                      easing: d.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                  {
                    name: "paper-menu-grow-height-animation",
                    timing: {
                      delay: 100,
                      duration: 275,
                      easing: d.ANIMATION_CUBIC_BEZIER,
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
                      easing: d.ANIMATION_CUBIC_BEZIER,
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
            i.a._disabledChanged.apply(this, arguments),
              e && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(e) {
            var t = e.detail,
              n = this.$.trigger;
            Object(l.a)(t).path.indexOf(n) > -1 && e.preventDefault();
          },
        });
      Object.keys(d).forEach(function(e) {
        h[e] = d[e];
      });
    },
    143: function(e, t, n) {
      "use strict";
      n(85);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'),
        document.head.appendChild(r.content);
    },
    144: function(e, t, n) {
      "use strict";
      n(41);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(r.content);
    },
    171: function(e, t, n) {
      "use strict";
      var r = n(8);
      function i(e) {
        return (i =
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
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t)
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      t.a = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              a(this, s(n).apply(this, arguments))
            );
          }
          var r, i, c;
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
            (r = n),
            (c = [
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
            (i = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                },
              },
            ]) && o(r.prototype, i),
            c && o(r, c),
            n
          );
        })();
      });
    },
    172: function(e, t, n) {
      "use strict";
      var r = n(0);
      function i(e) {
        return (i =
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
      function o() {
        var e = c([""]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = c([
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
      function s() {
        var e = c(["\n      ", "\n      <slot></slot>\n    "]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = c([
          "\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
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
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        var t,
          n = g(e.key);
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
        var r = {
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
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function h(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function m(e) {
        return e.decorators && e.decorators.length;
      }
      function y(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function b(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function g(e) {
        var t = (function(e, t) {
          if ("object" !== i(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== i(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === i(t) ? t : String(t);
      }
      var v = (function(e, t, n, r) {
        var i = (function() {
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
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === r && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : n;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!m(e)) return n.push(e);
                  var t = this.decorateElement(e, i);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var o = this.decorateConstructor(n, t);
              return r.push.apply(r, o.finishers), (o.finishers = r), o;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[r])(i) || i);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
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
              var n = g(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, i),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = b(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = b(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
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
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (y(o.descriptor) || y(i.descriptor)) {
                    if (m(o) || m(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (m(o)) {
                      if (m(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    h(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(d)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, o, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var s = arguments.length, l = new Array(s), c = 0;
                  c < s;
                  c++
                )
                  l[c] = arguments[c];
                return (
                  (o = this),
                  (n =
                    !(a = (t = u(r)).call.apply(t, [this].concat(l))) ||
                    ("object" !== i(a) && "function" != typeof a)
                      ? p(o)
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
                    t && f(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "header",
                value: void 0,
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(r.c)(l());
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(r.f)(
                    s(),
                    this.header
                      ? Object(r.f)(a(), this.header)
                      : Object(r.f)(o())
                  );
                },
              },
            ],
          };
        },
        r.a
      );
      customElements.define("ha-card", v);
    },
    174: function(e, t, n) {
      "use strict";
      n(4);
      var r = n(3);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n/* Most common used flex styles*/\n<dom-module id="iron-flex">\n  <template>\n    <style>\n      .layout.horizontal,\n      .layout.vertical {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.inline {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      }\n\n      .layout.horizontal {\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .layout.vertical {\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      .layout.wrap {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n\n      .layout.no-wrap {\n        -ms-flex-wrap: nowrap;\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .flex {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-auto {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      }\n\n      .flex-none {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Basic flexbox reverse styles */\n<dom-module id="iron-flex-reverse">\n  <template>\n    <style>\n      .layout.horizontal-reverse,\n      .layout.vertical-reverse {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.horizontal-reverse {\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      }\n\n      .layout.vertical-reverse {\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      }\n\n      .layout.wrap-reverse {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Flexbox alignment */\n<dom-module id="iron-flex-alignment">\n  <template>\n    <style>\n      /**\n       * Alignment in cross axis.\n       */\n      .layout.start {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.end {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      }\n\n      .layout.baseline {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      }\n\n      /**\n       * Alignment in main axis.\n       */\n      .layout.start-justified {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .layout.end-justified {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      }\n\n      .layout.around-justified {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      }\n\n      .layout.justified {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n\n      /**\n       * Self alignment.\n       */\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-center {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n\n      .self-stretch {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      }\n\n      .self-baseline {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      }\n\n      /**\n       * multi-line alignment in main axis.\n       */\n      .layout.start-aligned {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      }\n\n      .layout.end-aligned {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      }\n\n      .layout.center-aligned {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      }\n\n      .layout.between-aligned {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      }\n\n      .layout.around-aligned {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Non-flexbox positioning helper styles */\n<dom-module id="iron-flex-factors">\n  <template>\n    <style>\n      .flex,\n      .flex-1 {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-2 {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      }\n\n      .flex-3 {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      }\n\n      .flex-4 {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      }\n\n      .flex-5 {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      }\n\n      .flex-6 {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      }\n\n      .flex-7 {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      }\n\n      .flex-8 {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      }\n\n      .flex-9 {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      }\n\n      .flex-10 {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      }\n\n      .flex-11 {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      }\n\n      .flex-12 {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id="iron-positioning">\n  <template>\n    <style>\n      .block {\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .invisible {\n        visibility: hidden !important;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      body.fullbleed {\n        margin: 0;\n        height: 100vh;\n      }\n\n      .scroll {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      }\n\n      /* fixed position */\n      .fixed-bottom,\n      .fixed-left,\n      .fixed-right,\n      .fixed-top {\n        position: fixed;\n      }\n\n      .fixed-top {\n        top: 0;\n        left: 0;\n        right: 0;\n      }\n\n      .fixed-right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      .fixed-bottom {\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .fixed-left {\n        top: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(r.a)(i());
      o.setAttribute("style", "display: none;"),
        document.head.appendChild(o.content);
    },
    178: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41), n(52);
      var r = n(5),
        i = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({ _template: Object(i.a)(o()), is: "paper-item-body" });
    },
    180: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return a;
        });
      n(4);
      var r = n(84),
        i = n(1),
        o = {
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
          _modalChanged: function(e, t) {
            t &&
              (e
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
          _updateClosingReasonConfirmed: function(e) {
            (this.closingReason = this.closingReason || {}),
              (this.closingReason.confirmed = e);
          },
          _onDialogClick: function(e) {
            for (
              var t = Object(i.a)(e).path, n = 0, r = t.indexOf(this);
              n < r;
              n++
            ) {
              var o = t[n];
              if (
                o.hasAttribute &&
                (o.hasAttribute("dialog-dismiss") ||
                  o.hasAttribute("dialog-confirm"))
              ) {
                this._updateClosingReasonConfirmed(
                  o.hasAttribute("dialog-confirm")
                ),
                  this.close(),
                  e.stopPropagation();
                break;
              }
            }
          },
        },
        a = [r.a, o];
    },
    181: function(e, t, n) {
      "use strict";
      n(4), n(55), n(146);
      var r = n(5),
        i = n(3),
        o = n(122);
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
      var s = Object(i.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(r.a)({ _template: s, is: "paper-spinner", behaviors: [o.a] });
    },
    184: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41), n(52), n(83);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(r.content);
    },
    188: function(e, t, n) {
      "use strict";
      n(4), n(184);
      var r = n(119),
        i = n(180),
        o = n(5),
        a = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        _template: Object(a.a)(s()),
        is: "paper-dialog",
        behaviors: [i.a, r.a],
        listeners: { "neon-animation-finish": "_onNeonAnimationFinish" },
        _renderOpened: function() {
          this.cancelAnimation(), this.playAnimation("entry");
        },
        _renderClosed: function() {
          this.cancelAnimation(), this.playAnimation("exit");
        },
        _onNeonAnimationFinish: function() {
          this.opened ? this._finishRenderOpened() : this._finishRenderClosed();
        },
      });
    },
    191: function(e, t, n) {
      "use strict";
      var r = {},
        i = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        o = "[^\\s]+",
        a = /\[([^]*?)\]/gm,
        s = function() {};
      function l(e, t) {
        for (var n = [], r = 0, i = e.length; r < i; r++)
          n.push(e[r].substr(0, t));
        return n;
      }
      function c(e) {
        return function(t, n, r) {
          var i = r[e].indexOf(
            n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
          );
          ~i && (t.month = i);
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
        f = [
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
        d = l(f, 3),
        h = l(p, 3);
      r.i18n = {
        dayNamesShort: h,
        dayNames: p,
        monthNamesShort: d,
        monthNames: f,
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
      var m = {
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
        y = {
          D: [
            "\\d\\d?",
            function(e, t) {
              e.day = t;
            },
          ],
          Do: [
            "\\d\\d?" + o,
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
          d: ["\\d\\d?", s],
          ddd: [o, s],
          MMM: [o, c("monthNamesShort")],
          MMMM: [o, c("monthNames")],
          a: [
            o,
            function(e, t, n) {
              var r = t.toLowerCase();
              r === n.amPm[0]
                ? (e.isPm = !1)
                : r === n.amPm[1] && (e.isPm = !0);
            },
          ],
          ZZ: [
            "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",
            function(e, t) {
              var n,
                r = (t + "").match(/([+-]|\d\d)/gi);
              r &&
                ((n = 60 * r[1] + parseInt(r[2], 10)),
                (e.timezoneOffset = "+" === r[0] ? n : -n));
            },
          ],
        };
      (y.dd = y.d),
        (y.dddd = y.ddd),
        (y.DD = y.D),
        (y.mm = y.m),
        (y.hh = y.H = y.HH = y.h),
        (y.MM = y.M),
        (y.ss = y.s),
        (y.A = y.a),
        (r.masks = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        }),
        (r.format = function(e, t, n) {
          var o = n || r.i18n;
          if (
            ("number" == typeof e && (e = new Date(e)),
            "[object Date]" !== Object.prototype.toString.call(e) ||
              isNaN(e.getTime()))
          )
            throw new Error("Invalid Date in fecha.format");
          t = r.masks[t] || t || r.masks.default;
          var s = [];
          return (t = (t = t.replace(a, function(e, t) {
            return s.push(t), "??";
          })).replace(i, function(t) {
            return t in m ? m[t](e, o) : t.slice(1, t.length - 1);
          })).replace(/\?\?/g, function() {
            return s.shift();
          });
        }),
        (r.parse = function(e, t, n) {
          var o = n || r.i18n;
          if ("string" != typeof t)
            throw new Error("Invalid format in fecha.parse");
          if (((t = r.masks[t] || t), e.length > 1e3)) return null;
          var a,
            s = {},
            l = [],
            c = ((a = t), a.replace(/[|\\{()[^$+*?.-]/g, "\\$&")).replace(
              i,
              function(e) {
                if (y[e]) {
                  var t = y[e];
                  return l.push(t[1]), "(" + t[0] + ")";
                }
                return e;
              }
            ),
            u = e.match(new RegExp(c, "i"));
          if (!u) return null;
          for (var p = 1; p < u.length; p++) l[p - 1](s, u[p], o);
          var f,
            d = new Date();
          return (
            !0 === s.isPm && null != s.hour && 12 != +s.hour
              ? (s.hour = +s.hour + 12)
              : !1 === s.isPm && 12 == +s.hour && (s.hour = 0),
            null != s.timezoneOffset
              ? ((s.minute = +(s.minute || 0) - +s.timezoneOffset),
                (f = new Date(
                  Date.UTC(
                    s.year || d.getFullYear(),
                    s.month || 0,
                    s.day || 1,
                    s.hour || 0,
                    s.minute || 0,
                    s.second || 0,
                    s.millisecond || 0
                  )
                )))
              : (f = new Date(
                  s.year || d.getFullYear(),
                  s.month || 0,
                  s.day || 1,
                  s.hour || 0,
                  s.minute || 0,
                  s.second || 0,
                  s.millisecond || 0
                )),
            f
          );
        }),
        (t.a = r);
    },
    194: function(e, t, n) {
      "use strict";
      var r = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleString(t, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            });
          }
        : function(e) {
            return r.a.format(e, "haDateTime");
          };
    },
    198: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var r = n(5),
        i = n(1),
        o = n(3),
        a = n(124);
      function s() {
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
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(o.a)(s()),
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
          return Object(i.a)(this.$.headerSlot).getDistributedNodes()[0];
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
    200: function(e, t, n) {
      "use strict";
      n(4), n(44), n(55), n(41);
      var r = n(120),
        i = n(67),
        o = n(5),
        a = n(35),
        s = n(3),
        l = n(61);
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
      var u = Object(s.a)(c());
      u.setAttribute("strip-whitespace", ""),
        Object(o.a)({
          _template: u,
          is: "paper-toggle-button",
          behaviors: [r.a],
          hostAttributes: {
            role: "button",
            "aria-pressed": "false",
            tabindex: 0,
          },
          properties: {},
          listeners: { track: "_ontrack" },
          attached: function() {
            Object(l.a)(this, function() {
              Object(a.f)(this, "pan-y");
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
            var e = i.a._createRipple();
            return (
              (e.id = "ink"),
              e.setAttribute("recenters", ""),
              e.classList.add("circle", "toggle-ink"),
              e
            );
          },
        });
    },
    217: function(e, t, n) {
      "use strict";
      function r(e, t) {
        return e && -1 !== e.config.components.indexOf(t);
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    247: function(e, t, n) {
      "use strict";
      n(141);
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t) {
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
      function a(e, t, n) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = s(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function s(e) {
        return (s = Object.setPrototypeOf
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
      var c = customElements.get("paper-dropdown-menu"),
        u = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              o(this, s(t).apply(this, arguments))
            );
          }
          var n, r, u;
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
            })(t, c),
            (n = t),
            (r = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  a(s(t.prototype), "ready", this).call(this),
                    setTimeout(function() {
                      "rtl" === window.getComputedStyle(e).direction &&
                        (e.style.textAlign = "right");
                    }, 100);
                },
              },
            ]) && i(n.prototype, r),
            u && i(n, u),
            t
          );
        })();
      customElements.define("ha-paper-dropdown-menu", u);
    },
    259: function(e, t, n) {
      "use strict";
      n(4);
      var r = n(5),
        i = n(1),
        o = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n        z-index: 1002;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n        cursor: default;\n      }\n\n      #tooltip {\n        display: block;\n        outline: none;\n        @apply --paper-font-common-base;\n        font-size: 10px;\n        line-height: 1;\n        background-color: var(--paper-tooltip-background, #616161);\n        color: var(--paper-tooltip-text-color, white);\n        padding: 8px;\n        border-radius: 2px;\n        @apply --paper-tooltip;\n      }\n\n      @keyframes keyFrameScaleUp {\n        0% {\n          transform: scale(0.0);\n        }\n        100% {\n          transform: scale(1.0);\n        }\n      }\n\n      @keyframes keyFrameScaleDown {\n        0% {\n          transform: scale(1.0);\n        }\n        100% {\n          transform: scale(0.0);\n        }\n      }\n\n      @keyframes keyFrameFadeInOpacity {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameFadeOutOpacity {\n        0% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes keyFrameSlideDownIn {\n        0% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameSlideDownOut {\n        0% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n      }\n\n      .fade-in-animation {\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameFadeInOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .fade-out-animation {\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 0ms);\n        animation-name: keyFrameFadeOutOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-up-animation {\n        transform: scale(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameScaleUp;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-down-animation {\n        transform: scale(1);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameScaleDown;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation {\n        transform: translateY(-2000px);\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownIn;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation-out {\n        transform: translateY(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownOut;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .cancel-animation {\n        animation-delay: -30s !important;\n      }\n\n      /* Thanks IE 10. */\n\n      .hidden {\n        display: none !important;\n      }\n    </style>\n\n    <div id="tooltip" class="hidden">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(o.a)(a()),
        is: "paper-tooltip",
        hostAttributes: { role: "tooltip", tabindex: -1 },
        properties: {
          for: { type: String, observer: "_findTarget" },
          manualMode: {
            type: Boolean,
            value: !1,
            observer: "_manualModeChanged",
          },
          position: { type: String, value: "bottom" },
          fitToVisibleBounds: { type: Boolean, value: !1 },
          offset: { type: Number, value: 14 },
          marginTop: { type: Number, value: 14 },
          animationDelay: {
            type: Number,
            value: 500,
            observer: "_delayChange",
          },
          animationEntry: { type: String, value: "" },
          animationExit: { type: String, value: "" },
          animationConfig: {
            type: Object,
            value: function() {
              return {
                entry: [
                  {
                    name: "fade-in-animation",
                    node: this,
                    timing: { delay: 0 },
                  },
                ],
                exit: [{ name: "fade-out-animation", node: this }],
              };
            },
          },
          _showing: { type: Boolean, value: !1 },
        },
        listeners: { webkitAnimationEnd: "_onAnimationEnd" },
        get target() {
          var e = Object(i.a)(this).parentNode,
            t = Object(i.a)(this).getOwnerRoot();
          return this.for
            ? Object(i.a)(t).querySelector("#" + this.for)
            : e.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            ? t.host
            : e;
        },
        attached: function() {
          this._findTarget();
        },
        detached: function() {
          this.manualMode || this._removeListeners();
        },
        playAnimation: function(e) {
          "entry" === e ? this.show() : "exit" === e && this.hide();
        },
        cancelAnimation: function() {
          this.$.tooltip.classList.add("cancel-animation");
        },
        show: function() {
          if (!this._showing) {
            if ("" === Object(i.a)(this).textContent.trim()) {
              for (
                var e = !0,
                  t = Object(i.a)(this).getEffectiveChildNodes(),
                  n = 0;
                n < t.length;
                n++
              )
                if ("" !== t[n].textContent.trim()) {
                  e = !1;
                  break;
                }
              if (e) return;
            }
            (this._showing = !0),
              this.$.tooltip.classList.remove("hidden"),
              this.$.tooltip.classList.remove("cancel-animation"),
              this.$.tooltip.classList.remove(this._getAnimationType("exit")),
              this.updatePosition(),
              (this._animationPlaying = !0),
              this.$.tooltip.classList.add(this._getAnimationType("entry"));
          }
        },
        hide: function() {
          if (this._showing) {
            if (this._animationPlaying)
              return (this._showing = !1), void this._cancelAnimation();
            this._onAnimationFinish(),
              (this._showing = !1),
              (this._animationPlaying = !0);
          }
        },
        updatePosition: function() {
          if (this._target && this.offsetParent) {
            var e = this.offset;
            14 != this.marginTop && 14 == this.offset && (e = this.marginTop);
            var t,
              n,
              r = this.offsetParent.getBoundingClientRect(),
              i = this._target.getBoundingClientRect(),
              o = this.getBoundingClientRect(),
              a = (i.width - o.width) / 2,
              s = (i.height - o.height) / 2,
              l = i.left - r.left,
              c = i.top - r.top;
            switch (this.position) {
              case "top":
                (t = l + a), (n = c - o.height - e);
                break;
              case "bottom":
                (t = l + a), (n = c + i.height + e);
                break;
              case "left":
                (t = l - o.width - e), (n = c + s);
                break;
              case "right":
                (t = l + i.width + e), (n = c + s);
            }
            this.fitToVisibleBounds
              ? (r.left + t + o.width > window.innerWidth
                  ? ((this.style.right = "0px"), (this.style.left = "auto"))
                  : ((this.style.left = Math.max(0, t) + "px"),
                    (this.style.right = "auto")),
                r.top + n + o.height > window.innerHeight
                  ? ((this.style.bottom = r.height - c + e + "px"),
                    (this.style.top = "auto"))
                  : ((this.style.top = Math.max(-r.top, n) + "px"),
                    (this.style.bottom = "auto")))
              : ((this.style.left = t + "px"), (this.style.top = n + "px"));
          }
        },
        _addListeners: function() {
          this._target &&
            (this.listen(this._target, "mouseenter", "show"),
            this.listen(this._target, "focus", "show"),
            this.listen(this._target, "mouseleave", "hide"),
            this.listen(this._target, "blur", "hide"),
            this.listen(this._target, "tap", "hide")),
            this.listen(this.$.tooltip, "animationend", "_onAnimationEnd"),
            this.listen(this, "mouseenter", "hide");
        },
        _findTarget: function() {
          this.manualMode || this._removeListeners(),
            (this._target = this.target),
            this.manualMode || this._addListeners();
        },
        _delayChange: function(e) {
          500 !== e &&
            this.updateStyles({ "--paper-tooltip-delay-in": e + "ms" });
        },
        _manualModeChanged: function() {
          this.manualMode ? this._removeListeners() : this._addListeners();
        },
        _cancelAnimation: function() {
          this.$.tooltip.classList.remove(this._getAnimationType("entry")),
            this.$.tooltip.classList.remove(this._getAnimationType("exit")),
            this.$.tooltip.classList.remove("cancel-animation"),
            this.$.tooltip.classList.add("hidden");
        },
        _onAnimationFinish: function() {
          this._showing &&
            (this.$.tooltip.classList.remove(this._getAnimationType("entry")),
            this.$.tooltip.classList.remove("cancel-animation"),
            this.$.tooltip.classList.add(this._getAnimationType("exit")));
        },
        _onAnimationEnd: function() {
          (this._animationPlaying = !1),
            this._showing ||
              (this.$.tooltip.classList.remove(this._getAnimationType("exit")),
              this.$.tooltip.classList.add("hidden"));
        },
        _getAnimationType: function(e) {
          if ("entry" === e && "" !== this.animationEntry)
            return this.animationEntry;
          if ("exit" === e && "" !== this.animationExit)
            return this.animationExit;
          if (
            this.animationConfig[e] &&
            "string" == typeof this.animationConfig[e][0].name
          ) {
            if (
              this.animationConfig[e][0].timing &&
              this.animationConfig[e][0].timing.delay &&
              0 !== this.animationConfig[e][0].timing.delay
            ) {
              var t = this.animationConfig[e][0].timing.delay;
              "entry" === e
                ? this.updateStyles({ "--paper-tooltip-delay-in": t + "ms" })
                : "exit" === e &&
                  this.updateStyles({ "--paper-tooltip-delay-out": t + "ms" });
            }
            return this.animationConfig[e][0].name;
          }
        },
        _removeListeners: function() {
          this._target &&
            (this.unlisten(this._target, "mouseenter", "show"),
            this.unlisten(this._target, "focus", "show"),
            this.unlisten(this._target, "mouseleave", "hide"),
            this.unlisten(this._target, "blur", "hide"),
            this.unlisten(this._target, "tap", "hide")),
            this.unlisten(this.$.tooltip, "animationend", "_onAnimationEnd"),
            this.unlisten(this, "mouseenter", "hide");
        },
      });
    },
    711: function(e, t, n) {
      "use strict";
      n.r(t);
      n(198), n(216), n(178), n(138), n(82), n(145);
      var r = n(3),
        i = n(25),
        o = (n(172), n(126), n(92), n(64)),
        a = n(105),
        s = n(171);
      n(188), n(181);
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
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        .currentPassword {\n          margin-top: -4px;\n        }\n      </style>\n      <div>\n        <ha-card\n          header="[[localize(\'ui.panel.profile.change_password.header\')]]"\n        >\n          <div class="card-content">\n            <template is="dom-if" if="[[_errorMsg]]">\n              <div class="error">[[_errorMsg]]</div>\n            </template>\n            <template is="dom-if" if="[[_statusMsg]]">\n              <div class="status">[[_statusMsg]]</div>\n            </template>\n            <paper-input\n              class="currentPassword"\n              label="[[localize(\'ui.panel.profile.change_password.current_password\')]]"\n              type="password"\n              value="{{_currentPassword}}"\n              required\n              auto-validate\n              error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n            ></paper-input>\n            <template is="dom-if" if="[[_currentPassword]]">\n              <paper-input\n                label="[[localize(\'ui.panel.profile.change_password.new_password\')]]"\n                type="password"\n                value="{{_password1}}"\n                required\n                auto-validate\n                error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n              ></paper-input>\n              <paper-input\n                label="[[localize(\'ui.panel.profile.change_password.confirm_new_password\')]]"\n                type="password"\n                value="{{_password2}}"\n                required\n                auto-validate\n                error-message="[[localize(\'ui.panel.profile.change_password.error_required\')]]"\n              ></paper-input>\n            </template>\n          </div>\n          <div class="card-actions">\n            <template is="dom-if" if="[[_loading]]">\n              <div><paper-spinner active></paper-spinner></div>\n            </template>\n            <template is="dom-if" if="[[!_loading]]">\n              <mwc-button on-click="_changePassword"\n                >[[localize(\'ui.panel.profile.change_password.submit\')]]</mwc-button\n              >\n            </template>\n          </div>\n        </ha-card>\n      </div>\n    ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t, n) {
        return (d =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = h(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var y = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            f(this, h(t).apply(this, arguments))
          );
        }
        var n, o, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(t, Object(s["a"])(i["a"])),
          (n = t),
          (o = [
            {
              key: "ready",
              value: function() {
                var e = this;
                d(h(t.prototype), "ready", this).call(this),
                  this.addEventListener("keypress", function(t) {
                    (e._statusMsg = null),
                      13 === t.keyCode && e._changePassword();
                  });
              },
            },
            {
              key: "_changePassword",
              value: (function() {
                var e,
                  t = ((e = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((this._statusMsg = null),
                                this._currentPassword &&
                                  this._password1 &&
                                  this._password2)
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (this._password1 === this._password2) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (this._errorMsg =
                                  "New password confirmation doesn't match"),
                                e.abrupt("return")
                              );
                            case 6:
                              if (this._currentPassword !== this._password1) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (this._errorMsg =
                                  "New password must be different than current password"),
                                e.abrupt("return")
                              );
                            case 9:
                              return (
                                (this._loading = !0),
                                (this._errorMsg = null),
                                (e.prev = 11),
                                (e.next = 14),
                                this.hass.callWS({
                                  type:
                                    "config/auth_provider/homeassistant/change_password",
                                  current_password: this._currentPassword,
                                  new_password: this._password1,
                                })
                              );
                            case 14:
                              this.setProperties({
                                _statusMsg: "Password changed successfully",
                                _currentPassword: null,
                                _password1: null,
                                _password2: null,
                              }),
                                (e.next = 20);
                              break;
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(11)),
                                (this._errorMsg = e.t0.message);
                            case 20:
                              this._loading = !1;
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[11, 17]]
                    );
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, i) {
                      var o = e.apply(t, n);
                      function a(e) {
                        u(o, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        u(o, r, i, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
                return function() {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(c());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  _loading: { type: Boolean, value: !1 },
                  _statusMsg: String,
                  _errorMsg: String,
                  _currentPassword: String,
                  _password1: String,
                  _password2: String,
                };
              },
            },
          ]),
          o && p(n.prototype, o),
          a && p(n, a),
          t
        );
      })();
      function b(e) {
        return (b =
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
      function g() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="iron-flex ha-style">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        mwc-button {\n          margin-right: -0.57em;\n        }\n      </style>\n      <ha-card header="[[localize(\'ui.panel.profile.mfa.header\')]]">\n        <template is="dom-repeat" items="[[mfaModules]]" as="module">\n          <paper-item>\n            <paper-item-body two-line="">\n              <div>[[module.name]]</div>\n              <div secondary="">[[module.id]]</div>\n            </paper-item-body>\n            <template is="dom-if" if="[[module.enabled]]">\n              <mwc-button on-click="_disable"\n                >[[localize(\'ui.panel.profile.mfa.disable\')]]</mwc-button\n              >\n            </template>\n            <template is="dom-if" if="[[!module.enabled]]">\n              <mwc-button on-click="_enable"\n                >[[localize(\'ui.panel.profile.mfa.enable\')]]</mwc-button\n              >\n            </template>\n          </paper-item>\n        </template>\n      </ha-card>\n    ',
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function w(e, t) {
        return !t || ("object" !== b(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function _(e, t, n) {
        return (_ =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = k(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function k(e) {
        return (k = Object.setPrototypeOf
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
      customElements.define("ha-change-password-card", y);
      var O = !1,
        j = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              w(this, k(t).apply(this, arguments))
            );
          }
          var o, l, c;
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
            })(t, Object(a["a"])(Object(s["a"])(i["a"]))),
            (o = t),
            (c = [
              {
                key: "template",
                get: function() {
                  return Object(r.a)(g());
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    hass: Object,
                    _loading: { type: Boolean, value: !1 },
                    _statusMsg: String,
                    _errorMsg: String,
                    mfaModules: Array,
                  };
                },
              },
            ]),
            (l = [
              {
                key: "connectedCallback",
                value: function() {
                  _(k(t.prototype), "connectedCallback", this).call(this),
                    O ||
                      ((O = !0),
                      this.fire("register-dialog", {
                        dialogShowEvent: "show-mfa-module-setup-flow",
                        dialogTag: "ha-mfa-module-setup-flow",
                        dialogImport: function() {
                          return Promise.all([n.e(10), n.e(36)]).then(
                            n.bind(null, 695)
                          );
                        },
                      }));
                },
              },
              {
                key: "_enable",
                value: function(e) {
                  var t = this;
                  this.fire("show-mfa-module-setup-flow", {
                    hass: this.hass,
                    mfaModuleId: e.model.module.id,
                    dialogClosedCallback: function() {
                      return t._refreshCurrentUser();
                    },
                  });
                },
              },
              {
                key: "_disable",
                value: function(e) {
                  var t = this;
                  if (
                    confirm(
                      this.localize(
                        "ui.panel.profile.mfa.confirm_disable",
                        "name",
                        e.model.module.name
                      )
                    )
                  ) {
                    var n = e.model.module.id;
                    this.hass
                      .callWS({ type: "auth/depose_mfa", mfa_module_id: n })
                      .then(function() {
                        t._refreshCurrentUser();
                      });
                  }
                },
              },
              {
                key: "_refreshCurrentUser",
                value: function() {
                  this.fire("hass-refresh-current-user");
                },
              },
            ]) && v(o.prototype, l),
            c && v(o, c),
            t
          );
        })();
      customElements.define("ha-mfa-modules-card", j);
      var C = n(0);
      function E(e) {
        return (E =
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
      function S() {
        var e = z([
          "\n      .card-header {\n        display: flex;\n      }\n      .title {\n        flex: 1;\n      }\n    ",
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function P(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function A() {
        var e = z([
          '\n      <ha-card>\n        <div class="card-header">\n          <div class="title">Advanced mode</div>\n          <paper-toggle-button\n            .checked=',
          "\n            .disabled=",
          "\n            @change=",
          '\n          ></paper-toggle-button>\n        </div>\n        <div class="card-content">\n          JAVIS Home hides advanced features and options by default. You can\n          make these features accessible by checking this toggle. This is a\n          user-specific setting and does not impact other users using Home\n          Assistant.\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function z(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function T(e) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function M(e, t) {
        return (M =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e) {
        var t,
          n = $(e.key);
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
        var r = {
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
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function I(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function B(e) {
        return e.decorators && e.decorators.length;
      }
      function F(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function N(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function $(e) {
        var t = (function(e, t) {
          if ("object" !== E(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== E(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === E(t) ? t : String(t);
      }
      (function(e, t, n, r) {
        var i = (function() {
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
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === r && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : n;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!B(e)) return n.push(e);
                  var t = this.decorateElement(e, i);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var o = this.decorateConstructor(n, t);
              return r.push.apply(r, o.finishers), (o.finishers = r), o;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[r])(i) || i);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
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
              var n = $(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, i),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = N(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = N(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
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
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (F(o.descriptor) || F(i.descriptor)) {
                    if (B(o) || B(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (B(o)) {
                      if (B(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    I(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(R)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(C.d)("ha-advanced-mode-card")],
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, s = new Array(a), l = 0;
                  l < a;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (i = this),
                  (n =
                    !(o = (t = T(r)).call.apply(t, [this].concat(s))) ||
                    ("object" !== E(o) && "function" != typeof o)
                      ? D(i)
                      : o),
                  e(D(n)),
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
                    t && M(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(C.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(C.g)()],
                key: "coreUserData",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(C.f)(
                    A(),
                    this.coreUserData && this.coreUserData.showAdvanced,
                    void 0 === this.coreUserData,
                    this._advancedToggled
                  );
                },
              },
              {
                kind: "method",
                key: "_advancedToggled",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                Object(o.b)(this.hass.connection, "core").save({
                                  showAdvanced: t.currentTarget.checked,
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })),
                    function() {
                      var t = this,
                        n = arguments;
                      return new Promise(function(r, i) {
                        var o = e.apply(t, n);
                        function a(e) {
                          P(o, r, i, a, s, "next", e);
                        }
                        function s(e) {
                          P(o, r, i, a, s, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(C.c)(S());
                },
              },
            ],
          };
        },
        C.a
      ),
        n(106),
        n(259);
      var L = n(194);
      function Y(e) {
        return (Y =
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
      function H() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          display: flex;\n          padding: 0 16px;\n          align-content: normal;\n          align-self: auto;\n          align-items: center;\n        }\n        :host([narrow]) {\n          align-items: normal;\n          flex-direction: column;\n          border-top: 1px solid var(--divider-color);\n          padding-bottom: 8px;\n        }\n        paper-item-body {\n          padding-right: 16px;\n        }\n      </style>\n      <paper-item-body two-line$="[[!threeLine]]" three-line$="[[threeLine]]">\n        <slot name="heading"></slot>\n        <div secondary><slot name="description"></slot></div>\n      </paper-item-body>\n      <slot></slot>\n    ',
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function q(e, t) {
        return !t || ("object" !== Y(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function W(e) {
        return (W = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function U(e, t) {
        return (U =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var K = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            q(this, W(t).apply(this, arguments))
          );
        }
        var n, o, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && U(e, t);
          })(t, i["a"]),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(H());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  narrow: { type: Boolean, reflectToAttribute: !0 },
                  threeLine: { type: Boolean, value: !1 },
                };
              },
            },
          ]),
          (o = null) && V(n.prototype, o),
          a && V(n, a),
          t
        );
      })();
      function Z(e) {
        return (Z =
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
      function J() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n        paper-icon-button[disabled] {\n          color: var(--disabled-text-color);\n        }\n      </style>\n      <ha-card header="[[localize(\'ui.panel.profile.refresh_tokens.header\')]]">\n        <div class="card-content">\n          [[localize(\'ui.panel.profile.refresh_tokens.description\')]]\n        </div>\n        <template is="dom-repeat" items="[[_computeTokens(refreshTokens)]]">\n          <ha-settings-row three-line>\n            <span slot="heading">[[_formatTitle(item.client_id)]]</span>\n            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>\n            <div slot="description">[[_formatLastUsed(item)]]</div>\n            <div>\n              <template is="dom-if" if="[[item.is_current]]">\n                <paper-tooltip position="left"\n                  >[[localize(\'ui.panel.profile.refresh_tokens.current_token_tooltip\')]]</paper-tooltip\n                >\n              </template>\n              <paper-icon-button\n                icon="hass:delete"\n                on-click="_handleDelete"\n                disabled="[[item.is_current]]"\n              ></paper-icon-button>\n            </div>\n          </ha-settings-row>\n        </template>\n      </ha-card>\n    ',
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function G(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function X(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Q(e, t) {
        return !t || ("object" !== Z(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ee(e) {
        return (ee = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function te(e, t) {
        return (te =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-settings-row", K);
      var ne = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Q(this, ee(t).apply(this, arguments))
          );
        }
        var n, o, l;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && te(e, t);
          })(t, Object(s["a"])(Object(a["a"])(i["a"]))),
          (n = t),
          (o = [
            {
              key: "_computeTokens",
              value: function(e) {
                return e
                  .filter(function(e) {
                    return "normal" === e.type;
                  })
                  .reverse();
              },
            },
            {
              key: "_formatTitle",
              value: function(e) {
                return this.localize(
                  "ui.panel.profile.refresh_tokens.token_title",
                  "clientId",
                  e
                );
              },
            },
            {
              key: "_formatCreatedAt",
              value: function(e) {
                return this.localize(
                  "ui.panel.profile.refresh_tokens.created_at",
                  "date",
                  Object(L.a)(new Date(e), this.hass.language)
                );
              },
            },
            {
              key: "_formatLastUsed",
              value: function(e) {
                return e.last_used_at
                  ? this.localize(
                      "ui.panel.profile.refresh_tokens.last_used",
                      "date",
                      Object(L.a)(new Date(e.last_used_at), this.hass.language),
                      "location",
                      e.last_used_ip
                    )
                  : this.localize("ui.panel.profile.refresh_tokens.not_used");
              },
            },
            {
              key: "_handleDelete",
              value: (function() {
                var e,
                  t = ((e = regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                confirm(
                                  this.localize(
                                    "ui.panel.profile.refresh_tokens.confirm_delete",
                                    "name",
                                    t.model.item.client_id
                                  )
                                )
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.hass.callWS({
                                  type: "auth/delete_refresh_token",
                                  refresh_token_id: t.model.item.id,
                                })
                              );
                            case 5:
                              this.fire("hass-refresh-tokens"), (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0),
                                alert(
                                  this.localize(
                                    "ui.panel.profile.refresh_tokens.delete_failed"
                                  )
                                );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 8]]
                    );
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, i) {
                      var o = e.apply(t, n);
                      function a(e) {
                        G(o, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        G(o, r, i, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          (l = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(J());
              },
            },
            {
              key: "properties",
              get: function() {
                return { hass: Object, refreshTokens: Array };
              },
            },
          ]),
          o && X(n.prototype, o),
          l && X(n, l),
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
      function ie() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style">\n        .card-content {\n          margin: -1em 0;\n        }\n        a {\n          color: var(--primary-color);\n        }\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n      </style>\n      <ha-card\n        header="[[localize(\'ui.panel.profile.long_lived_access_tokens.header\')]]"\n      >\n        <div class="card-content">\n          <p>\n            [[localize(\'ui.panel.profile.long_lived_access_tokens.description\')]]\n            <a\n              href="https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests"\n              target="_blank"\n            >\n              [[localize(\'ui.panel.profile.long_lived_access_tokens.learn_auth_requests\')]]\n            </a>\n          </p>\n          <template is="dom-if" if="[[!_tokens.length]]">\n            <p>\n              [[localize(\'ui.panel.profile.long_lived_access_tokens.empty_state\')]]\n            </p>\n          </template>\n        </div>\n        <template is="dom-repeat" items="[[_tokens]]">\n          <ha-settings-row two-line>\n            <span slot="heading">[[item.client_name]]</span>\n            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>\n            <paper-icon-button\n              icon="hass:delete"\n              on-click="_handleDelete"\n            ></paper-icon-button>\n          </ha-settings-row>\n        </template>\n        <div class="card-actions">\n          <mwc-button on-click="_handleCreate">\n            [[localize(\'ui.panel.profile.long_lived_access_tokens.create\')]]\n          </mwc-button>\n        </div>\n      </ha-card>\n    ',
        ]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function oe(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function ae(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, i) {
            var o = e.apply(t, n);
            function a(e) {
              oe(o, r, i, a, s, "next", e);
            }
            function s(e) {
              oe(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function se(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
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
      function ce(e) {
        return (ce = Object.setPrototypeOf
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
      customElements.define("ha-refresh-tokens-card", ne);
      var pe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            le(this, ce(t).apply(this, arguments))
          );
        }
        var n, o, l;
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
          })(t, Object(s["a"])(Object(a["a"])(i["a"]))),
          (n = t),
          (o = [
            {
              key: "_computeTokens",
              value: function(e) {
                return e
                  .filter(function(e) {
                    return "long_lived_access_token" === e.type;
                  })
                  .reverse();
              },
            },
            {
              key: "_formatTitle",
              value: function(e) {
                return this.localize(
                  "ui.panel.profile.long_lived_access_tokens.token_title",
                  "name",
                  e
                );
              },
            },
            {
              key: "_formatCreatedAt",
              value: function(e) {
                return this.localize(
                  "ui.panel.profile.long_lived_access_tokens.created_at",
                  "date",
                  Object(L.a)(new Date(e), this.hass.language)
                );
              },
            },
            {
              key: "_handleCreate",
              value: (function() {
                var e = ae(
                  regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t = prompt(
                                  this.localize(
                                    "ui.panel.profile.long_lived_access_tokens.prompt_name"
                                  )
                                ))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (e.prev = 3),
                                (e.next = 6),
                                this.hass.callWS({
                                  type: "auth/long_lived_access_token",
                                  lifespan: 3650,
                                  client_name: t,
                                })
                              );
                            case 6:
                              (n = e.sent),
                                prompt(
                                  this.localize(
                                    "ui.panel.profile.long_lived_access_tokens.prompt_copy_token"
                                  ),
                                  n
                                ),
                                this.fire("hass-refresh-tokens"),
                                (e.next = 15);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(3)),
                                console.error(e.t0),
                                alert(
                                  this.localize(
                                    "ui.panel.profile.long_lived_access_tokens.create_failed"
                                  )
                                );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 11]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleDelete",
              value: (function() {
                var e = ae(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                confirm(
                                  this.localize(
                                    "ui.panel.profile.long_lived_access_tokens.confirm_delete",
                                    "name",
                                    t.model.item.client_name
                                  )
                                )
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                this.hass.callWS({
                                  type: "auth/delete_refresh_token",
                                  refresh_token_id: t.model.item.id,
                                })
                              );
                            case 5:
                              this.fire("hass-refresh-tokens"), (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0),
                                alert(
                                  this.localize(
                                    "ui.panel.profile.long_lived_access_tokens.delete_failed"
                                  )
                                );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 8]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          (l = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(ie());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  refreshTokens: Array,
                  _tokens: {
                    type: Array,
                    computed: "_computeTokens(refreshTokens)",
                  },
                };
              },
            },
          ]),
          o && se(n.prototype, o),
          l && se(n, l),
          t
        );
      })();
      customElements.define("ha-long-lived-access-tokens-card", pe);
      n(139), n(247);
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
      function de() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          direction: ltr;\n        }\n        paper-item[is-rtl] {\n          direction: rtl;\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.language.header\')]]</span\n        >\n        <span slot="description">\n          <a\n            href="https://developers.home-assistant.io/docs/en/internationalization_translation.html"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.language.link_promo\')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label="[[localize(\'ui.panel.profile.language.dropdown_label\')]]"\n          dynamic-align=""\n        >\n          <paper-listbox\n            slot="dropdown-content"\n            attr-for-selected="language-tag"\n            selected="{{languageSelection}}"\n          >\n            <template is="dom-repeat" items="[[languages]]">\n              <paper-item language-tag$="[[item.key]]" is-rtl$="[[item.isRTL]]">\n                [[item.nativeName]]\n              </paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    ',
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function he(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
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
      function ye(e, t, n) {
        return (ye =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = be(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function be(e) {
        return (be = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ge(e, t) {
        return (ge =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var ve = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            me(this, be(t).apply(this, arguments))
          );
        }
        var n, o, l;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ge(e, t);
          })(t, Object(s["a"])(Object(a["a"])(i["a"]))),
          (n = t),
          (l = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(de());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  narrow: Boolean,
                  languageSelection: {
                    type: String,
                    observer: "languageSelectionChanged",
                  },
                  languages: {
                    type: Array,
                    computed: "computeLanguages(hass)",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["setLanguageSelection(language)"];
              },
            },
          ]),
          (o = [
            {
              key: "computeLanguages",
              value: function(e) {
                if (!e || !e.translationMetadata) return [];
                var t = e.translationMetadata.translations;
                return Object.keys(t).map(function(e) {
                  return Object.assign({ key: e }, t[e]);
                });
              },
            },
            {
              key: "setLanguageSelection",
              value: function(e) {
                this.languageSelection = e;
              },
            },
            {
              key: "languageSelectionChanged",
              value: function(e) {
                e !== this.hass.language &&
                  this.fire("hass-language-select", { language: e });
              },
            },
            {
              key: "ready",
              value: function() {
                ye(be(t.prototype), "ready", this).call(this),
                  this.hass &&
                    this.hass.language &&
                    this.setLanguageSelection(this.hass.language);
              },
            },
          ]) && he(n.prototype, o),
          l && he(n, l),
          t
        );
      })();
      function we(e) {
        return (we =
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
      function _e() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.themes.header\')]]</span\n        >\n        <span slot="description">\n          <template is="dom-if" if="[[!_hasThemes]]">\n            [[localize(\'ui.panel.profile.themes.error_no_theme\')]]\n          </template>\n          <a\n            href="https://www.home-assistant.io/components/frontend/#defining-themes"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.themes.link_promo\')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label="[[localize(\'ui.panel.profile.themes.dropdown_label\')]]"\n          dynamic-align\n          disabled="[[!_hasThemes]]"\n        >\n          <paper-listbox slot="dropdown-content" selected="{{selectedTheme}}">\n            <template is="dom-repeat" items="[[themes]]" as="theme">\n              <paper-item>[[theme]]</paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    ',
        ]);
        return (
          (_e = function() {
            return e;
          }),
          e
        );
      }
      function ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function xe(e, t) {
        return !t || ("object" !== we(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Oe(e, t, n) {
        return (Oe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = je(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function je(e) {
        return (je = Object.setPrototypeOf
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
      customElements.define("ha-pick-language-row", ve);
      var Ee = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            xe(this, je(t).apply(this, arguments))
          );
        }
        var n, o, l;
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
          })(t, Object(s["a"])(Object(a["a"])(i["a"]))),
          (n = t),
          (l = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(_e());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  narrow: Boolean,
                  _hasThemes: {
                    type: Boolean,
                    computed: "_compHasThemes(hass)",
                  },
                  themes: { type: Array, computed: "_computeThemes(hass)" },
                  selectedTheme: { type: Number },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["selectionChanged(hass, selectedTheme)"];
              },
            },
          ]),
          (o = [
            {
              key: "_compHasThemes",
              value: function(e) {
                return (
                  e.themes &&
                  e.themes.themes &&
                  Object.keys(e.themes.themes).length
                );
              },
            },
            {
              key: "ready",
              value: function() {
                Oe(je(t.prototype), "ready", this).call(this),
                  this.hass.selectedTheme &&
                  this.themes.indexOf(this.hass.selectedTheme) > 0
                    ? (this.selectedTheme = this.themes.indexOf(
                        this.hass.selectedTheme
                      ))
                    : this.hass.selectedTheme || (this.selectedTheme = 0);
              },
            },
            {
              key: "_computeThemes",
              value: function(e) {
                return e
                  ? ["Backend-selected", "default"].concat(
                      Object.keys(e.themes.themes).sort()
                    )
                  : [];
              },
            },
            {
              key: "selectionChanged",
              value: function(e, t) {
                t > 0 && t < this.themes.length
                  ? e.selectedTheme !== this.themes[t] &&
                    this.fire("settheme", this.themes[t])
                  : 0 === t &&
                    "" !== e.selectedTheme &&
                    this.fire("settheme", "");
              },
            },
          ]) && ke(n.prototype, o),
          l && ke(n, l),
          t
        );
      })();
      customElements.define("ha-pick-theme-row", Ee);
      n(174), n(4);
      var Se = n(5),
        Pe = n(1),
        Ae = Object(Se.a)({
          is: "iron-label",
          listeners: { tap: "_tapHandler" },
          properties: {
            for: {
              type: String,
              value: "",
              reflectToAttribute: !0,
              observer: "_forChanged",
            },
            _forElement: Object,
          },
          attached: function() {
            this._forChanged();
          },
          ready: function() {
            this._generateLabelId();
          },
          _generateLabelId: function() {
            if (!this.id) {
              var e = "iron-label-" + Ae._labelNumber++;
              Object(Pe.a)(this).setAttribute("id", e);
            }
          },
          _findTarget: function() {
            if (this.for) {
              var e = Object(Pe.a)(this).getOwnerRoot();
              return Object(Pe.a)(e).querySelector("#" + this.for);
            }
            var t = Object(Pe.a)(this).querySelector("[iron-label-target]");
            return t || (t = Object(Pe.a)(this).firstElementChild), t;
          },
          _tapHandler: function(e) {
            this._forElement &&
              (Object(Pe.a)(e).localTarget !== this._forElement &&
                (this._forElement.focus(), this._forElement.click()));
          },
          _applyLabelledBy: function() {
            this._forElement &&
              Object(Pe.a)(this._forElement).setAttribute(
                "aria-labelledby",
                this.id
              );
          },
          _forChanged: function() {
            this._forElement &&
              Object(Pe.a)(this._forElement).removeAttribute("aria-labelledby"),
              (this._forElement = this._findTarget()),
              this._applyLabelledBy();
          },
        });
      Ae._labelNumber = 0;
      var ze = n(217);
      n(200);
      function Te(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function De(e) {
        for (
          var t = (e + "=".repeat((4 - (e.length % 4)) % 4))
              .replace(/-/g, "+")
              .replace(/_/g, "/"),
            n = window.atob(t),
            r = new Uint8Array(n.length),
            i = 0;
          i < n.length;
          ++i
        )
          r[i] = n.charCodeAt(i);
        return r;
      }
      var Me = (function() {
        var e,
          t = ((e = regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2), t.callWS({ type: "notify/html5/appkey" })
                    );
                  case 2:
                    return (n = e.sent), e.abrupt("return", n ? De(n) : null);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })),
          function() {
            var t = this,
              n = arguments;
            return new Promise(function(r, i) {
              var o = e.apply(t, n);
              function a(e) {
                Te(o, r, i, a, s, "next", e);
              }
              function s(e) {
                Te(o, r, i, a, s, "throw", e);
              }
              a(void 0);
            });
          });
        return function(e) {
          return t.apply(this, arguments);
        };
      })();
      function Re(e) {
        return (Re =
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
      function Ie() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <paper-toggle-button\n        disabled="[[_compDisabled(disabled, loading)]]"\n        checked="{{pushChecked}}"\n        on-change="handlePushChange"\n      ></paper-toggle-button>\n    ',
        ]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      function Be(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function Fe(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, i) {
            var o = e.apply(t, n);
            function a(e) {
              Be(o, r, i, a, s, "next", e);
            }
            function s(e) {
              Be(o, r, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Ne(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function $e(e, t) {
        return !t || ("object" !== Re(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Le(e, t, n) {
        return (Le =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ye(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function Ye(e) {
        return (Ye = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function He(e, t) {
        return (He =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Ve =
          "serviceWorker" in navigator &&
          "PushManager" in window &&
          ("https:" === document.location.protocol ||
            "localhost" === document.location.hostname ||
            "127.0.0.1" === document.location.hostname),
        qe = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              $e(this, Ye(t).apply(this, arguments))
            );
          }
          var n, o, s;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && He(e, t);
            })(t, Object(a["a"])(i["a"])),
            (n = t),
            (o = [
              {
                key: "connectedCallback",
                value: (function() {
                  var e = Fe(
                    regeneratorRuntime.mark(function e() {
                      var n,
                        r = this;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (Le(
                                    Ye(t.prototype),
                                    "connectedCallback",
                                    this
                                  ).call(this),
                                  Ve)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                return (
                                  (e.prev = 3),
                                  (e.next = 6),
                                  navigator.serviceWorker.ready
                                );
                              case 6:
                                if ((n = e.sent).pushManager) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                n.pushManager
                                  .getSubscription()
                                  .then(function(e) {
                                    (r.loading = !1), (r.pushChecked = !!e);
                                  }),
                                  (e.next = 14);
                                break;
                              case 12:
                                (e.prev = 12), (e.t0 = e.catch(3));
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 12]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handlePushChange",
                value: function(e) {
                  Ve &&
                    (e.target.checked
                      ? this.subscribePushNotifications()
                      : this.unsubscribePushNotifications());
                },
              },
              {
                key: "subscribePushNotifications",
                value: (function() {
                  var e = Fe(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r, i, o, a;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), navigator.serviceWorker.ready
                                );
                              case 2:
                                if (
                                  ((t = e.sent),
                                  (e.prev = 3),
                                  (r =
                                    navigator.userAgent
                                      .toLowerCase()
                                      .indexOf("firefox") > -1
                                      ? "firefox"
                                      : "chrome"),
                                  null !=
                                    (i = prompt(
                                      "What should this device be called ?"
                                    )))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (this.pushChecked = !1), e.abrupt("return")
                                );
                              case 9:
                                return (
                                  (e.prev = 9), (e.next = 12), Me(this.hass)
                                );
                              case 12:
                                (o = e.sent), (e.next = 18);
                                break;
                              case 15:
                                (e.prev = 15), (e.t0 = e.catch(9)), (o = null);
                              case 18:
                                if (!o) {
                                  e.next = 24;
                                  break;
                                }
                                return (
                                  (e.next = 21),
                                  t.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                    applicationServerKey: o,
                                  })
                                );
                              case 21:
                                (n = e.sent), (e.next = 27);
                                break;
                              case 24:
                                return (
                                  (e.next = 26),
                                  t.pushManager.subscribe({
                                    userVisibleOnly: !0,
                                  })
                                );
                              case 26:
                                n = e.sent;
                              case 27:
                                return (
                                  (e.next = 29),
                                  this.hass.callApi("POST", "notify.html5", {
                                    subscription: n,
                                    browser: r,
                                    name: i,
                                  })
                                );
                              case 29:
                                e.next = 40;
                                break;
                              case 31:
                                if (
                                  ((e.prev = 31),
                                  (e.t1 = e.catch(3)),
                                  (a =
                                    e.t1.message ||
                                    "Notification registration failed."),
                                  !n)
                                ) {
                                  e.next = 37;
                                  break;
                                }
                                return (e.next = 37), n.unsubscribe();
                              case 37:
                                console.error(e.t1),
                                  this.fire("hass-notification", {
                                    message: a,
                                  }),
                                  (this.pushChecked = !1);
                              case 40:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 31], [9, 15]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unsubscribePushNotifications",
                value: (function() {
                  var e = Fe(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), navigator.serviceWorker.ready
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  t.pushManager.getSubscription()
                                );
                              case 6:
                                if ((n = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                return (
                                  (e.next = 11),
                                  this.hass.callApi("DELETE", "notify.html5", {
                                    subscription: n,
                                  })
                                );
                              case 11:
                                return (e.next = 13), n.unsubscribe();
                              case 13:
                                e.next = 21;
                                break;
                              case 15:
                                (e.prev = 15),
                                  (e.t0 = e.catch(3)),
                                  (r =
                                    e.t0.message ||
                                    "Failed unsubscribing for push notifications."),
                                  console.error("Error in unsub push", e.t0),
                                  this.fire("hass-notification", {
                                    message: r,
                                  }),
                                  (this.pushChecked = !0);
                              case 21:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 15]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_compDisabled",
                value: function(e, t) {
                  return e || t;
                },
              },
            ]),
            (s = [
              {
                key: "template",
                get: function() {
                  return Object(r.a)(Ie());
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    hass: { type: Object, value: null },
                    disabled: { type: Boolean, value: !1 },
                    pushChecked: {
                      type: Boolean,
                      value:
                        "Notification" in window &&
                        "granted" === Notification.permission,
                    },
                    loading: { type: Boolean, value: !0 },
                  };
                },
              },
            ]),
            o && Ne(n.prototype, o),
            s && Ne(n, s),
            t
          );
        })();
      function We(e) {
        return (We =
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
      function Ue() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow="[[narrow]]">\n        <span slot="heading"\n          >[[localize(\'ui.panel.profile.push_notifications.header\')]]</span\n        >\n        <span slot="description">\n          [[_description(_platformLoaded, _pushSupported)]]\n          <a\n            href="https://www.home-assistant.io/components/notify.html5/"\n            target="_blank"\n            >[[localize(\'ui.panel.profile.push_notifications.link_promo\')]]</a\n          >\n        </span>\n        <ha-push-notifications-toggle\n          hass="[[hass]]"\n          disabled="[[_error]]"\n        ></ha-push-notifications-toggle>\n      </ha-settings-row>\n    ',
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function Ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ze(e, t) {
        return !t || ("object" !== We(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Je(e) {
        return (Je = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ge(e, t) {
        return (Ge =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("ha-push-notifications-toggle", qe);
      var Xe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ze(this, Je(t).apply(this, arguments))
          );
        }
        var n, o, a;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Ge(e, t);
          })(t, Object(s["a"])(i["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(Ue());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  narrow: Boolean,
                  _platformLoaded: {
                    type: Boolean,
                    computed: "_compPlatformLoaded(hass)",
                  },
                  _pushSupported: { type: Boolean, value: Ve },
                  _error: {
                    type: Boolean,
                    computed: "_compError(_platformLoaded, _pushSupported)",
                  },
                };
              },
            },
          ]),
          (o = [
            {
              key: "_compPlatformLoaded",
              value: function(e) {
                return Object(ze.a)(e, "notify.html5");
              },
            },
            {
              key: "_compError",
              value: function(e, t) {
                return !e || !t;
              },
            },
            {
              key: "_description",
              value: function(e, t) {
                var n;
                return (
                  (n = t
                    ? e
                      ? "description"
                      : "error_load_platform"
                    : "error_use_https"),
                  this.localize(
                    "ui.panel.profile.push_notifications.".concat(n)
                  )
                );
              },
            },
          ]) && Ke(n.prototype, o),
          a && Ke(n, a),
          t
        );
      })();
      customElements.define("ha-push-notifications-row", Xe);
      var Qe = n(19);
      function et(e) {
        return (et =
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
      function tt(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function nt() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n      <ha-settings-row .narrow=",
          '>\n        <span slot="heading">\n          ',
          '\n        </span>\n        <span slot="description">\n          ',
          "\n        </span>\n        <paper-toggle-button\n          .checked=",
          "\n          @checked-changed=",
          "\n        ></paper-toggle-button>\n      </ha-settings-row>\n    ",
        ]);
        return (
          (nt = function() {
            return e;
          }),
          e
        );
      }
      function rt(e) {
        return (rt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function it(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ot(e, t) {
        return (ot =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function at(e) {
        var t,
          n = pt(e.key);
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
        var r = {
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
          e.decorators && (r.decorators = e.decorators),
          "field" === e.kind && (r.initializer = e.value),
          r
        );
      }
      function st(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function lt(e) {
        return e.decorators && e.decorators.length;
      }
      function ct(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ut(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function pt(e) {
        var t = (function(e, t) {
          if ("object" !== et(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== et(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === et(t) ? t : String(t);
      }
      !(function(e, t, n, r) {
        var i = (function() {
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
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === r && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : n;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function(e, t) {
              var n = [],
                r = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!lt(e)) return n.push(e);
                  var t = this.decorateElement(e, i);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: r };
              var o = this.decorateConstructor(n, t);
              return r.push.apply(r, o.finishers), (o.finishers = r), o;
            },
            addElementPlacement: function(e, t, n) {
              var r = t[e.placement];
              if (!n && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], r = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: r, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], r = t.length - 1; r >= 0; r--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[r])(i) || i);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
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
              var n = pt(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: r,
                descriptor: Object.assign({}, i),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = ut(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: r };
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
              var n = ut(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: n };
            },
            runClassFinishers: function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = (0, t[n])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
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
        if (r) for (var o = 0; o < r.length; o++) i = r[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, n),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  n = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  r = 0;
                r < e.length;
                r++
              ) {
                var i,
                  o = e[r];
                if ("method" === o.kind && (i = t.find(n)))
                  if (ct(o.descriptor) || ct(i.descriptor)) {
                    if (lt(o) || lt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (lt(o)) {
                      if (lt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    st(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(at)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(C.d)("ha-force-narrow-row")],
        function(e, t) {
          return {
            F: (function(n) {
              function r() {
                var t, n, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r);
                for (
                  var a = arguments.length, s = new Array(a), l = 0;
                  l < a;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (i = this),
                  (n =
                    !(o = (t = rt(r)).call.apply(t, [this].concat(s))) ||
                    ("object" !== et(o) && "function" != typeof o)
                      ? it(i)
                      : o),
                  e(it(n)),
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
                    t && ot(e, t);
                })(r, t),
                r
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(C.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(C.g)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(C.f)(
                    nt(),
                    this.narrow,
                    this.hass.localize("ui.panel.profile.force_narrow.header"),
                    this.hass.localize(
                      "ui.panel.profile.force_narrow.description"
                    ),
                    "always_hidden" === this.hass.dockedSidebar,
                    this._checkedChanged
                  );
                },
              },
              {
                kind: "method",
                key: "_checkedChanged",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (n = t.detail.value) !==
                                  ("always_hidden" === this.hass.dockedSidebar)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                Object(Qe.a)(this, "hass-dock-sidebar", {
                                  dock: n ? "always_hidden" : "auto",
                                });
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })),
                    function() {
                      var t = this,
                        n = arguments;
                      return new Promise(function(r, i) {
                        var o = e.apply(t, n);
                        function a(e) {
                          tt(o, r, i, a, s, "next", e);
                        }
                        function s(e) {
                          tt(o, r, i, a, s, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                  return function(e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ],
          };
        },
        C.a
      );
      function ft(e) {
        return (ft =
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
      function dt() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .content > * {\n          display: block;\n          margin: 24px 0;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.profile\')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class="content">\n          <ha-card header="[[hass.user.name]]">\n            <div class="card-content">\n              [[localize(\'ui.panel.profile.current_user\', \'fullName\',\n              hass.user.name)]]\n              <template is="dom-if" if="[[hass.user.is_owner]]"\n                >[[localize(\'ui.panel.profile.is_owner\')]]</template\n              >\n            </div>\n\n            <hello-world hass="[[hass]]"></hello-world>\n\n            <ha-pick-language-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-pick-language-row>\n            <ha-pick-theme-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-pick-theme-row>\n            <template\n              is="dom-if"\n              if="[[_showNarrowRow(hass.dockedSidebar, narrow)]]"\n            >\n              <ha-force-narrow-row\n                narrow="[[narrow]]"\n                hass="[[hass]]"\n              ></ha-force-narrow-row>\n            </template>\n            <ha-push-notifications-row\n              narrow="[[narrow]]"\n              hass="[[hass]]"\n            ></ha-push-notifications-row>\n\n            <div class="card-actions">\n              <mwc-button class="warning" on-click="_handleLogOut"\n                >[[localize(\'ui.panel.profile.logout\')]]</mwc-button\n              >\n            </div>\n          </ha-card>\n\n          <template is="dom-if" if="[[_canChangePassword(hass.user)]]">\n            <ha-change-password-card hass="[[hass]]"></ha-change-password-card>\n          </template>\n\n          <ha-mfa-modules-card\n            hass="[[hass]]"\n            mfa-modules="[[hass.user.mfa_modules]]"\n          ></ha-mfa-modules-card>\n\n          <template is="dom-if" if="[[_isAdmin(hass.user)]]">\n            <ha-advanced-mode-card\n              hass="[[hass]]"\n              core-user-data="[[_coreUserData]]"\n            ></ha-advanced-mode-card>\n          </template>\n\n          <ha-refresh-tokens-card\n            hass="[[hass]]"\n            refresh-tokens="[[_refreshTokens]]"\n            on-hass-refresh-tokens="_refreshRefreshTokens"\n          ></ha-refresh-tokens-card>\n\n          <ha-long-lived-access-tokens-card\n            hass="[[hass]]"\n            refresh-tokens="[[_refreshTokens]]"\n            on-hass-refresh-tokens="_refreshRefreshTokens"\n          ></ha-long-lived-access-tokens-card>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (dt = function() {
            return e;
          }),
          e
        );
      }
      function ht(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function mt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function yt(e, t) {
        return !t || ("object" !== ft(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function bt(e, t, n) {
        return (bt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = gt(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(e, t, n || e);
      }
      function gt(e) {
        return (gt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function vt(e, t) {
        return (vt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var wt = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            yt(this, gt(t).apply(this, arguments))
          );
        }
        var n, l, c;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && vt(e, t);
          })(t, Object(a["a"])(Object(s["a"])(i["a"]))),
          (n = t),
          (l = [
            {
              key: "connectedCallback",
              value: function() {
                var e = this;
                bt(gt(t.prototype), "connectedCallback", this).call(this),
                  this._refreshRefreshTokens(),
                  (this._unsubCoreData = Object(o.b)(
                    this.hass.connection,
                    "core"
                  ).subscribe(function(t) {
                    e._coreUserData = t;
                  }));
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                bt(gt(t.prototype), "disconnectedCallback", this).call(this),
                  this._unsubCoreData &&
                    (this._unsubCoreData(), (this._unsubCoreData = void 0));
              },
            },
            {
              key: "_refreshRefreshTokens",
              value: (function() {
                var e,
                  t = ((e = regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.hass.callWS({
                                  type: "auth/refresh_tokens",
                                })
                              );
                            case 2:
                              this._refreshTokens = e.sent;
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, i) {
                      var o = e.apply(t, n);
                      function a(e) {
                        ht(o, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        ht(o, r, i, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
                return function() {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleLogOut",
              value: function() {
                this.fire("hass-logout");
              },
            },
            {
              key: "_canChangePassword",
              value: function(e) {
                return e.credentials.some(function(e) {
                  return "homeassistant" === e.auth_provider_type;
                });
              },
            },
            {
              key: "_isAdmin",
              value: function(e) {
                return e.is_admin;
              },
            },
            {
              key: "_showNarrowRow",
              value: function(e, t) {
                return "auto" !== e || !t;
              },
            },
          ]),
          (c = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(dt());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  narrow: Boolean,
                  _refreshTokens: Array,
                  _coreUserData: Object,
                };
              },
            },
          ]),
          l && mt(n.prototype, l),
          c && mt(n, c),
          t
        );
      })();
      customElements.define("ha-panel-profile", wt);
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var r = n(59),
        i = (n(40), n(5)),
        o = n(3),
        a = n(94);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        is: "paper-input",
        _template: Object(o.a)(s()),
        behaviors: [a.a, r.a],
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
      var r = n(5),
        i = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var a = Object(r.a)({
        _template: Object(i.a)(o()),
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
//# sourceMappingURL=chunk.2dbb3157fc4fa1ac118a.js.map
