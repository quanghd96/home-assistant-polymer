/*! For license information please see chunk.3e053facf17675bd2a77.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [93, 6, 8],
  {
    111: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(91),
        o = n(60),
        r = n(5),
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
      Object(r.a)({
        _template: Object(s.a)(l()),
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
            for (var s = 0; s < n.length; s++) {
              var l = n[s].result,
                c = n[s].config,
                u = n[s].neonAnimation;
              try {
                "function" != typeof l.cancel &&
                  (l = document.timeline.play(l));
              } catch (d) {
                (l = null), console.warn("Couldnt play", "(", c.name, ").", d);
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
        s = n(5),
        l = n(1),
        c = n(35),
        u = n(3);
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        \x3c!-- paper-input has type="text" for a11y, do not remove --\x3e\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          \x3c!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> --\x3e\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      Object(s.a)({
        _template: Object(u.a)(d()),
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
      var i = n(31),
        o = n(34),
        r = n(84),
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
      var d = {
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
      Object(s.a)({
        is: "fade-in-animation",
        behaviors: [d],
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
          behaviors: [d],
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
      function p() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      Object(s.a)({
        is: "paper-menu-grow-height-animation",
        behaviors: [d],
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
          behaviors: [d],
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
          behaviors: [d],
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
          behaviors: [d],
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
      var h = {
          ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
          MAX_ANIMATION_TIME_MS: 400,
        },
        f = Object(s.a)({
          _template: Object(c.a)(p()),
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
                      easing: h.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                  {
                    name: "paper-menu-grow-height-animation",
                    timing: {
                      delay: 100,
                      duration: 275,
                      easing: h.ANIMATION_CUBIC_BEZIER,
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
                      easing: h.ANIMATION_CUBIC_BEZIER,
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
      Object.keys(h).forEach(function(e) {
        f[e] = h[e];
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
      t.a = Object(i.a)(function(e) {
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
          var i, o, c;
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
            (o = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                },
              },
            ]) && r(i.prototype, o),
            c && r(i, c),
            n
          );
        })();
      });
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
      var s = Object(o.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(i.a)({ _template: s, is: "paper-spinner", behaviors: [r.a] });
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
    191: function(e, t, n) {
      "use strict";
      var i = {},
        o = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        r = "[^\\s]+",
        a = /\[([^]*?)\]/gm,
        s = function() {};
      function l(e, t) {
        for (var n = [], i = 0, o = e.length; i < o; i++)
          n.push(e[i].substr(0, t));
        return n;
      }
      function c(e) {
        return function(t, n, i) {
          var o = i[e].indexOf(
            n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
          );
          ~o && (t.month = o);
        };
      }
      function u(e, t) {
        for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
        return e;
      }
      var d = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        p = [
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
        h = l(p, 3),
        f = l(d, 3);
      i.i18n = {
        dayNamesShort: f,
        dayNames: d,
        monthNamesShort: h,
        monthNames: p,
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
            "\\d\\d?" + r,
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
          ddd: [r, s],
          MMM: [r, c("monthNamesShort")],
          MMMM: [r, c("monthNames")],
          a: [
            r,
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
      (y.dd = y.d),
        (y.dddd = y.ddd),
        (y.DD = y.D),
        (y.mm = y.m),
        (y.hh = y.H = y.HH = y.h),
        (y.MM = y.M),
        (y.ss = y.s),
        (y.A = y.a),
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
          var r = n || i.i18n;
          if (
            ("number" == typeof e && (e = new Date(e)),
            "[object Date]" !== Object.prototype.toString.call(e) ||
              isNaN(e.getTime()))
          )
            throw new Error("Invalid Date in fecha.format");
          t = i.masks[t] || t || i.masks.default;
          var s = [];
          return (t = (t = t.replace(a, function(e, t) {
            return s.push(t), "??";
          })).replace(o, function(t) {
            return t in m ? m[t](e, r) : t.slice(1, t.length - 1);
          })).replace(/\?\?/g, function() {
            return s.shift();
          });
        }),
        (i.parse = function(e, t, n) {
          var r = n || i.i18n;
          if ("string" != typeof t)
            throw new Error("Invalid format in fecha.parse");
          if (((t = i.masks[t] || t), e.length > 1e3)) return null;
          var a,
            s = {},
            l = [],
            c = ((a = t), a.replace(/[|\\{()[^$+*?.-]/g, "\\$&")).replace(
              o,
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
          for (var d = 1; d < u.length; d++) l[d - 1](s, u[d], r);
          var p,
            h = new Date();
          return (
            !0 === s.isPm && null != s.hour && 12 != +s.hour
              ? (s.hour = +s.hour + 12)
              : !1 === s.isPm && 12 == +s.hour && (s.hour = 0),
            null != s.timezoneOffset
              ? ((s.minute = +(s.minute || 0) - +s.timezoneOffset),
                (p = new Date(
                  Date.UTC(
                    s.year || h.getFullYear(),
                    s.month || 0,
                    s.day || 1,
                    s.hour || 0,
                    s.minute || 0,
                    s.second || 0,
                    s.millisecond || 0
                  )
                )))
              : (p = new Date(
                  s.year || h.getFullYear(),
                  s.month || 0,
                  s.day || 1,
                  s.hour || 0,
                  s.minute || 0,
                  s.second || 0,
                  s.millisecond || 0
                )),
            p
          );
        }),
        (t.a = i);
    },
    194: function(e, t, n) {
      "use strict";
      var i = n(191);
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
            return i.a.format(e, "haDateTime");
          };
    },
    198: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var i = n(5),
        o = n(1),
        r = n(3),
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
      Object(i.a)({
        _template: Object(r.a)(s()),
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
    211: function(e, t, n) {
      "use strict";
      var i = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleTimeString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleTimeString(t, {
              hour: "numeric",
              minute: "2-digit",
            });
          }
        : function(e) {
            return i.a.format(e, "shortTime");
          };
    },
    216: function(e, t, n) {
      "use strict";
      n(4), n(44);
      var i = n(5),
        o = n(1),
        r = n(3),
        a = n(124),
        s = n(252);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: "";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id="contentContainer">\n      <slot id="slot"></slot>\n    </div>\n',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(l()),
        is: "app-header",
        behaviors: [s.a, a.a],
        properties: {
          condenses: { type: Boolean, value: !1 },
          fixed: { type: Boolean, value: !1 },
          reveals: { type: Boolean, value: !1 },
          shadow: { type: Boolean, reflectToAttribute: !0, value: !1 },
        },
        observers: ["_configChanged(isAttached, condenses, fixed)"],
        _height: 0,
        _dHeight: 0,
        _stickyElTop: 0,
        _stickyElRef: null,
        _top: 0,
        _progress: 0,
        _wasScrollingDown: !1,
        _initScrollTop: 0,
        _initTimestamp: 0,
        _lastTimestamp: 0,
        _lastScrollTop: 0,
        get _maxHeaderTop() {
          return this.fixed ? this._dHeight : this._height + 5;
        },
        get _stickyEl() {
          if (this._stickyElRef) return this._stickyElRef;
          for (
            var e, t = Object(o.a)(this.$.slot).getDistributedNodes(), n = 0;
            (e = t[n]);
            n++
          )
            if (e.nodeType === Node.ELEMENT_NODE) {
              if (e.hasAttribute("sticky")) {
                this._stickyElRef = e;
                break;
              }
              this._stickyElRef || (this._stickyElRef = e);
            }
          return this._stickyElRef;
        },
        _configChanged: function() {
          this.resetLayout(), this._notifyLayoutChanged();
        },
        _updateLayoutStates: function() {
          if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
            var e = this._clampedScrollTop,
              t = 0 === this._height || 0 === e,
              n = this.disabled;
            (this._height = this.offsetHeight),
              (this._stickyElRef = null),
              (this.disabled = !0),
              t || this._updateScrollState(0, !0),
              this._mayMove()
                ? (this._dHeight = this._stickyEl
                    ? this._height - this._stickyEl.offsetHeight
                    : 0)
                : (this._dHeight = 0),
              (this._stickyElTop = this._stickyEl
                ? this._stickyEl.offsetTop
                : 0),
              this._setUpEffect(),
              t
                ? this._updateScrollState(e, !0)
                : (this._updateScrollState(this._lastScrollTop, !0),
                  this._layoutIfDirty()),
              (this.disabled = n);
          }
        },
        _updateScrollState: function(e, t) {
          if (0 !== this._height) {
            var n = 0,
              i = 0,
              o = this._top,
              r = (this._lastScrollTop, this._maxHeaderTop),
              a = e - this._lastScrollTop,
              s = Math.abs(a),
              l = e > this._lastScrollTop,
              c = performance.now();
            if (
              (this._mayMove() &&
                (i = this._clamp(this.reveals ? o + a : e, 0, r)),
              e >= this._dHeight &&
                ((i =
                  this.condenses && !this.fixed
                    ? Math.max(this._dHeight, i)
                    : i),
                (this.style.transitionDuration = "0ms")),
              this.reveals &&
                !this.disabled &&
                s < 100 &&
                ((c - this._initTimestamp > 300 ||
                  this._wasScrollingDown !== l) &&
                  ((this._initScrollTop = e), (this._initTimestamp = c)),
                e >= r))
            )
              if (Math.abs(this._initScrollTop - e) > 30 || s > 10) {
                l && e >= r
                  ? (i = r)
                  : !l &&
                    e >= this._dHeight &&
                    (i = this.condenses && !this.fixed ? this._dHeight : 0);
                var u = a / (c - this._lastTimestamp);
                this.style.transitionDuration =
                  this._clamp((i - o) / u, 0, 300) + "ms";
              } else i = this._top;
            (n = 0 === this._dHeight ? (e > 0 ? 1 : 0) : i / this._dHeight),
              t ||
                ((this._lastScrollTop = e),
                (this._top = i),
                (this._wasScrollingDown = l),
                (this._lastTimestamp = c)),
              (t || n !== this._progress || o !== i || 0 === e) &&
                ((this._progress = n),
                this._runEffects(n, i),
                this._transformHeader(i));
          }
        },
        _mayMove: function() {
          return this.condenses || !this.fixed;
        },
        willCondense: function() {
          return this._dHeight > 0 && this.condenses;
        },
        isOnScreen: function() {
          return 0 !== this._height && this._top < this._height;
        },
        isContentBelow: function() {
          return 0 === this._top
            ? this._clampedScrollTop > 0
            : this._clampedScrollTop - this._maxHeaderTop >= 0;
        },
        _transformHeader: function(e) {
          this.translate3d(0, -e + "px", 0),
            this._stickyEl &&
              this.translate3d(
                0,
                this.condenses && e >= this._stickyElTop
                  ? Math.min(e, this._dHeight) - this._stickyElTop + "px"
                  : 0,
                0,
                this._stickyEl
              );
        },
        _clamp: function(e, t, n) {
          return Math.min(n, Math.max(t, e));
        },
        _ensureBgContainers: function() {
          this._bgContainer ||
            ((this._bgContainer = document.createElement("div")),
            (this._bgContainer.id = "background"),
            (this._bgRear = document.createElement("div")),
            (this._bgRear.id = "backgroundRearLayer"),
            this._bgContainer.appendChild(this._bgRear),
            (this._bgFront = document.createElement("div")),
            (this._bgFront.id = "backgroundFrontLayer"),
            this._bgContainer.appendChild(this._bgFront),
            Object(o.a)(this.root).insertBefore(
              this._bgContainer,
              this.$.contentContainer
            ));
        },
        _getDOMRef: function(e) {
          switch (e) {
            case "backgroundFrontLayer":
              return this._ensureBgContainers(), this._bgFront;
            case "backgroundRearLayer":
              return this._ensureBgContainers(), this._bgRear;
            case "background":
              return this._ensureBgContainers(), this._bgContainer;
            case "mainTitle":
              return Object(o.a)(this).querySelector("[main-title]");
            case "condensedTitle":
              return Object(o.a)(this).querySelector("[condensed-title]");
          }
          return null;
        },
        getScrollState: function() {
          return { progress: this._progress, top: this._top };
        },
      });
    },
    218: function(e, t, n) {
      "use strict";
      var i = n(175),
        o = n(194),
        r = n(232),
        a = n(211);
      t.a = function(e, t, n) {
        var s,
          l = Object(i.a)(t);
        if ("binary_sensor" === l)
          t.attributes.device_class &&
            (s = e(
              "state."
                .concat(l, ".")
                .concat(t.attributes.device_class, ".")
                .concat(t.state)
            )),
            s || (s = e("state.".concat(l, ".default.").concat(t.state)));
        else if (
          t.attributes.unit_of_measurement &&
          !["unknown", "unavailable"].includes(t.state)
        )
          s = t.state + " " + t.attributes.unit_of_measurement;
        else if ("input_datetime" === l) {
          var c;
          if (t.attributes.has_time)
            if (t.attributes.has_date)
              (c = new Date(
                t.attributes.year,
                t.attributes.month - 1,
                t.attributes.day,
                t.attributes.hour,
                t.attributes.minute
              )),
                (s = Object(o.a)(c, n));
            else {
              var u = new Date();
              (c = new Date(
                u.getFullYear(),
                u.getMonth(),
                u.getDay(),
                t.attributes.hour,
                t.attributes.minute
              )),
                (s = Object(a.a)(c, n));
            }
          else
            (c = new Date(
              t.attributes.year,
              t.attributes.month - 1,
              t.attributes.day
            )),
              (s = Object(r.a)(c, n));
        } else
          s =
            "zwave" === l
              ? ["initializing", "dead"].includes(t.state)
                ? e(
                    "state.zwave.query_stage.".concat(t.state),
                    "query_stage",
                    t.attributes.query_stage
                  )
                : e("state.zwave.default.".concat(t.state))
              : e("state.".concat(l, ".").concat(t.state));
        return (
          s ||
            (s =
              e("state.default.".concat(t.state)) ||
              e("component.".concat(l, ".state.").concat(t.state)) ||
              t.state),
          s
        );
      };
    },
    228: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return l;
      }),
        n.d(t, "b", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return d;
        });
      var i = n(173),
        o = n(175),
        r = n(218),
        a = ["climate", "water_heater"],
        s = [
          "temperature",
          "current_temperature",
          "target_temp_low",
          "target_temp_high",
        ],
        l = function(e, t, n, i) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = "history/period";
          return (
            n && (r += "/" + n.toISOString()),
            (r += "?filter_entity_id=" + t),
            i && (r += "&end_time=" + i.toISOString()),
            o && (r += "&skip_initial_state"),
            e.callApi("GET", r)
          );
        },
        c = function(e, t, n) {
          return e.callApi(
            "GET",
            "history/period/"
              .concat(t.toISOString(), "?end_time=")
              .concat(n.toISOString())
          );
        },
        u = function(e, t) {
          return (
            e.state === t.state &&
            (!e.attributes ||
              s.every(function(n) {
                return e.attributes[n] === t.attributes[n];
              }))
          );
        },
        d = function(e, t, n, l) {
          var c = {},
            d = [];
          return t
            ? (t.forEach(function(t) {
                if (0 !== t.length) {
                  var a,
                    s = t.find(function(e) {
                      return "unit_of_measurement" in e.attributes;
                    });
                  s
                    ? (a = s.attributes.unit_of_measurement)
                    : "climate" === Object(o.a)(t[0])
                    ? (a = e.config.unit_system.temperature)
                    : "water_heater" === Object(o.a)(t[0]) &&
                      (a = e.config.unit_system.temperature),
                    a
                      ? a in c
                        ? c[a].push(t)
                        : (c[a] = [t])
                      : d.push(
                          (function(e, t, n) {
                            var o = [],
                              a = !0,
                              s = !1,
                              l = void 0;
                            try {
                              for (
                                var c, u = n[Symbol.iterator]();
                                !(a = (c = u.next()).done);
                                a = !0
                              ) {
                                var d = c.value;
                                (o.length > 0 &&
                                  d.state === o[o.length - 1].state) ||
                                  o.push({
                                    state_localize: Object(r.a)(e, d, t),
                                    state: d.state,
                                    last_changed: d.last_changed,
                                  });
                              }
                            } catch (p) {
                              (s = !0), (l = p);
                            } finally {
                              try {
                                a || null == u.return || u.return();
                              } finally {
                                if (s) throw l;
                              }
                            }
                            return {
                              name: Object(i.a)(n[0]),
                              entity_id: n[0].entity_id,
                              data: o,
                            };
                          })(n, l, t)
                        );
                }
              }),
              {
                line: Object.keys(c).map(function(e) {
                  return (function(e, t) {
                    var n = [],
                      r = !0,
                      l = !1,
                      c = void 0;
                    try {
                      for (
                        var d, p = t[Symbol.iterator]();
                        !(r = (d = p.next()).done);
                        r = !0
                      ) {
                        var h = d.value,
                          f = h[h.length - 1],
                          m = Object(o.a)(f),
                          y = [],
                          v = !0,
                          b = !1,
                          g = void 0;
                        try {
                          for (
                            var _, w = h[Symbol.iterator]();
                            !(v = (_ = w.next()).done);
                            v = !0
                          ) {
                            var k = _.value,
                              x = void 0;
                            if (a.includes(m)) {
                              x = {
                                state: k.state,
                                last_changed: k.last_updated,
                                attributes: {},
                              };
                              for (var O = s, D = 0; D < O.length; D++) {
                                var S = O[D];
                                S in k.attributes &&
                                  (x.attributes[S] = k.attributes[S]);
                              }
                            } else x = k;
                            (y.length > 1 &&
                              u(x, y[y.length - 1]) &&
                              u(x, y[y.length - 2])) ||
                              y.push(x);
                          }
                        } catch (C) {
                          (b = !0), (g = C);
                        } finally {
                          try {
                            v || null == w.return || w.return();
                          } finally {
                            if (b) throw g;
                          }
                        }
                        n.push({
                          domain: m,
                          name: Object(i.a)(f),
                          entity_id: f.entity_id,
                          states: y,
                        });
                      }
                    } catch (C) {
                      (l = !0), (c = C);
                    } finally {
                      try {
                        r || null == p.return || p.return();
                      } finally {
                        if (l) throw c;
                      }
                    }
                    return {
                      unit: e,
                      identifier: t
                        .map(function(e) {
                          return e[0].entity_id;
                        })
                        .join(""),
                      data: n,
                    };
                  })(e, c[e]);
                }),
                timeline: d,
              })
            : { line: [], timeline: [] };
        };
    },
    232: function(e, t, n) {
      "use strict";
      var i = n(191);
      t.a = (function() {
        try {
          new Date().toLocaleDateString("i");
        } catch (e) {
          return "RangeError" === e.name;
        }
        return !1;
      })()
        ? function(e, t) {
            return e.toLocaleDateString(t, {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          }
        : function(e) {
            return i.a.format(e, "mediumDate");
          };
    },
    242: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      n(4);
      var i = n(1);
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
      var r = {
        properties: {
          scrollTarget: {
            type: HTMLElement,
            value: function() {
              return this._defaultScrollTarget;
            },
          },
        },
        observers: ["_scrollTargetChanged(scrollTarget, isAttached)"],
        _shouldHaveListener: !0,
        _scrollTargetChanged: function(e, t) {
          if (
            (this._oldScrollTarget &&
              (this._toggleScrollListener(!1, this._oldScrollTarget),
              (this._oldScrollTarget = null)),
            t)
          )
            if ("document" === e) this.scrollTarget = this._doc;
            else if ("string" == typeof e) {
              var n = this.domHost;
              this.scrollTarget =
                n && n.$
                  ? n.$[e]
                  : Object(i.a)(this.ownerDocument).querySelector("#" + e);
            } else
              this._isValidScrollTarget() &&
                ((this._oldScrollTarget = e),
                this._toggleScrollListener(this._shouldHaveListener, e));
        },
        _scrollHandler: function() {},
        get _defaultScrollTarget() {
          return this._doc;
        },
        get _doc() {
          return this.ownerDocument.documentElement;
        },
        get _scrollTop() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.pageYOffset
              : this.scrollTarget.scrollTop
            : 0;
        },
        get _scrollLeft() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.pageXOffset
              : this.scrollTarget.scrollLeft
            : 0;
        },
        set _scrollTop(e) {
          this.scrollTarget === this._doc
            ? window.scrollTo(window.pageXOffset, e)
            : this._isValidScrollTarget() && (this.scrollTarget.scrollTop = e);
        },
        set _scrollLeft(e) {
          this.scrollTarget === this._doc
            ? window.scrollTo(e, window.pageYOffset)
            : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = e);
        },
        scroll: function(e, t) {
          var n;
          "object" === o(e) ? ((n = e.left), (t = e.top)) : (n = e),
            (n = n || 0),
            (t = t || 0),
            this.scrollTarget === this._doc
              ? window.scrollTo(n, t)
              : this._isValidScrollTarget() &&
                ((this.scrollTarget.scrollLeft = n),
                (this.scrollTarget.scrollTop = t));
        },
        get _scrollTargetWidth() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.innerWidth
              : this.scrollTarget.offsetWidth
            : 0;
        },
        get _scrollTargetHeight() {
          return this._isValidScrollTarget()
            ? this.scrollTarget === this._doc
              ? window.innerHeight
              : this.scrollTarget.offsetHeight
            : 0;
        },
        _isValidScrollTarget: function() {
          return this.scrollTarget instanceof HTMLElement;
        },
        _toggleScrollListener: function(e, t) {
          var n = t === this._doc ? window : t;
          e
            ? this._boundScrollHandler ||
              ((this._boundScrollHandler = this._scrollHandler.bind(this)),
              n.addEventListener("scroll", this._boundScrollHandler))
            : this._boundScrollHandler &&
              (n.removeEventListener("scroll", this._boundScrollHandler),
              (this._boundScrollHandler = null));
        },
        toggleScrollListener: function(e) {
          (this._shouldHaveListener = e),
            this._toggleScrollListener(e, this.scrollTarget);
        },
      };
    },
    252: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      n(4);
      var i = n(242),
        o = n(253),
        r = [
          i.a,
          {
            properties: {
              effects: { type: String },
              effectsConfig: {
                type: Object,
                value: function() {
                  return {};
                },
              },
              disabled: { type: Boolean, reflectToAttribute: !0, value: !1 },
              threshold: { type: Number, value: 0 },
              thresholdTriggered: {
                type: Boolean,
                notify: !0,
                readOnly: !0,
                reflectToAttribute: !0,
              },
            },
            observers: ["_effectsChanged(effects, effectsConfig, isAttached)"],
            _updateScrollState: function(e) {},
            isOnScreen: function() {
              return !1;
            },
            isContentBelow: function() {
              return !1;
            },
            _effectsRunFn: null,
            _effects: null,
            get _clampedScrollTop() {
              return Math.max(0, this._scrollTop);
            },
            attached: function() {
              this._scrollStateChanged();
            },
            detached: function() {
              this._tearDownEffects();
            },
            createEffect: function(e, t) {
              var n = o.a[e];
              if (!n) throw new ReferenceError(this._getUndefinedMsg(e));
              var i = this._boundEffect(n, t || {});
              return i.setUp(), i;
            },
            _effectsChanged: function(e, t, n) {
              this._tearDownEffects(),
                e &&
                  n &&
                  (e.split(" ").forEach(function(e) {
                    var n;
                    "" !== e &&
                      ((n = o.a[e])
                        ? this._effects.push(this._boundEffect(n, t[e]))
                        : console.warn(this._getUndefinedMsg(e)));
                  }, this),
                  this._setUpEffect());
            },
            _layoutIfDirty: function() {
              return this.offsetWidth;
            },
            _boundEffect: function(e, t) {
              t = t || {};
              var n = parseFloat(t.startsAt || 0),
                i = parseFloat(t.endsAt || 1),
                o = i - n,
                r = function() {},
                a =
                  0 === n && 1 === i
                    ? e.run
                    : function(t, i) {
                        e.run.call(this, Math.max(0, (t - n) / o), i);
                      };
              return {
                setUp: e.setUp ? e.setUp.bind(this, t) : r,
                run: e.run ? a.bind(this) : r,
                tearDown: e.tearDown ? e.tearDown.bind(this) : r,
              };
            },
            _setUpEffect: function() {
              this.isAttached &&
                this._effects &&
                ((this._effectsRunFn = []),
                this._effects.forEach(function(e) {
                  !1 !== e.setUp() && this._effectsRunFn.push(e.run);
                }, this));
            },
            _tearDownEffects: function() {
              this._effects &&
                this._effects.forEach(function(e) {
                  e.tearDown();
                }),
                (this._effectsRunFn = []),
                (this._effects = []);
            },
            _runEffects: function(e, t) {
              this._effectsRunFn &&
                this._effectsRunFn.forEach(function(n) {
                  n(e, t);
                });
            },
            _scrollHandler: function() {
              this._scrollStateChanged();
            },
            _scrollStateChanged: function() {
              if (!this.disabled) {
                var e = this._clampedScrollTop;
                this._updateScrollState(e),
                  this.threshold > 0 &&
                    this._setThresholdTriggered(e >= this.threshold);
              }
            },
            _getDOMRef: function(e) {
              console.warn("_getDOMRef", "`" + e + "` is undefined");
            },
            _getUndefinedMsg: function(e) {
              return (
                "Scroll effect `" +
                e +
                "` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/" +
                e +
                ".html ?"
              );
            },
          },
        ];
    },
    253: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return o;
        });
      n(4);
      var i = {},
        o = function(e, t) {
          if (null != i[e])
            throw new Error("effect `" + e + "` is already registered.");
          i[e] = t;
        };
    },
    260: function(e, t, n) {
      "use strict";
      n(181);
      var i = n(3),
        o = n(25),
        r = n(21),
        a = n(95),
        s = (n(106), n(11)),
        l = n(70),
        c = n(211);
      function u(e) {
        return (u =
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
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          display: block;\n        }\n        .chartHeader {\n          padding: 6px 0 0 0;\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n        }\n        .chartHeader > div {\n          vertical-align: top;\n          padding: 0 8px;\n        }\n        .chartHeader > div.chartTitle {\n          padding-top: 8px;\n          flex: 0 0 0;\n          max-width: 30%;\n        }\n        .chartHeader > div.chartLegend {\n          flex: 1 1;\n          min-width: 70%;\n        }\n        :root {\n          user-select: none;\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none;\n        }\n        .chartTooltip {\n          font-size: 90%;\n          opacity: 1;\n          position: absolute;\n          background: rgba(80, 80, 80, 0.9);\n          color: white;\n          border-radius: 3px;\n          pointer-events: none;\n          transform: translate(-50%, 12px);\n          z-index: 1000;\n          width: 200px;\n          transition: opacity 0.15s ease-in-out;\n        }\n        :host([rtl]) .chartTooltip {\n          direction: rtl;\n        }\n        .chartLegend ul,\n        .chartTooltip ul {\n          display: inline-block;\n          padding: 0 0px;\n          margin: 5px 0 0 0;\n          width: 100%;\n        }\n        .chartTooltip li {\n          display: block;\n          white-space: pre-line;\n        }\n        .chartTooltip .title {\n          text-align: center;\n          font-weight: 500;\n        }\n        .chartLegend li {\n          display: inline-block;\n          padding: 0 6px;\n          max-width: 49%;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          box-sizing: border-box;\n        }\n        .chartLegend li:nth-child(odd):last-of-type {\n          /* Make last item take full width if it is odd-numbered. */\n          max-width: 100%;\n        }\n        .chartLegend li[data-hidden] {\n          text-decoration: line-through;\n        }\n        .chartLegend em,\n        .chartTooltip em {\n          border-radius: 5px;\n          display: inline-block;\n          height: 10px;\n          margin-right: 4px;\n          width: 10px;\n        }\n        :host([rtl]) .chartTooltip em {\n          margin-right: inherit;\n          margin-left: 4px;\n        }\n        paper-icon-button {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template is="dom-if" if="[[unit]]">\n        <div class="chartHeader">\n          <div class="chartTitle">[[unit]]</div>\n          <div class="chartLegend">\n            <ul>\n              <template is="dom-repeat" items="[[metas]]">\n                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">\n                  <em style$="background-color:[[item.bgColor]]"></em>\n                  [[item.label]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </template>\n      <div id="chartTarget" style="height:40px; width:100%">\n        <canvas id="chartCanvas"></canvas>\n        <div\n          class$="chartTooltip [[tooltip.yAlign]]"\n          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"\n        >\n          <div class="title">[[tooltip.title]]</div>\n          <div>\n            <ul>\n              <template is="dom-repeat" items="[[tooltip.lines]]">\n                <li>\n                  <em style$="background-color:[[item.bgColor]]"></em\n                  >[[item.text]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </div>\n    ',
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function h(e, t) {
        return !t || ("object" !== u(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e, t, n) {
        return (f =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = m(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var v = null,
        b = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              h(this, m(t).apply(this, arguments))
            );
          }
          var u, b, g;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && y(e, t);
            })(t, Object(l["b"])([a["a"]], o["a"])),
            (u = t),
            (g = [
              {
                key: "getColorList",
                value: function(e) {
                  var t = !1;
                  e > 10 && ((t = !0), (e = Math.ceil(e / 2)));
                  for (var n = 360 / e, i = [], o = 0; o < e; o++)
                    (i[o] = Color().hsl(n * o, 80, 38)),
                      t && (i[o + e] = Color().hsl(n * o, 80, 62));
                  return i;
                },
              },
              {
                key: "getColorGenerator",
                value: function(e, t) {
                  var n = [
                    "ff0029",
                    "66a61e",
                    "377eb8",
                    "984ea3",
                    "00d2d5",
                    "ff7f00",
                    "af8d00",
                    "7f80cd",
                    "b3e900",
                    "c42e60",
                    "a65628",
                    "f781bf",
                    "8dd3c7",
                    "bebada",
                    "fb8072",
                    "80b1d3",
                    "fdb462",
                    "fccde5",
                    "bc80bd",
                    "ffed6f",
                    "c4eaff",
                    "cf8c00",
                    "1b9e77",
                    "d95f02",
                    "e7298a",
                    "e6ab02",
                    "a6761d",
                    "0097ff",
                    "00d067",
                    "f43600",
                    "4ba93b",
                    "5779bb",
                    "927acc",
                    "97ee3f",
                    "bf3947",
                    "9f5b00",
                    "f48758",
                    "8caed6",
                    "f2b94f",
                    "eff26e",
                    "e43872",
                    "d9b100",
                    "9d7a00",
                    "698cff",
                    "d9d9d9",
                    "00d27e",
                    "d06800",
                    "009f82",
                    "c49200",
                    "cbe8ff",
                    "fecddf",
                    "c27eb6",
                    "8cd2ce",
                    "c4b8d9",
                    "f883b0",
                    "a49100",
                    "f48800",
                    "27d0df",
                    "a04a9b",
                  ];
                  function i(e) {
                    return Color("#" + n[e % n.length]);
                  }
                  var o = {},
                    r = 0;
                  return (
                    t > 0 && (r = t),
                    e &&
                      Object.keys(e).forEach(function(t) {
                        var n = e[t];
                        isFinite(n)
                          ? (o[t.toLowerCase()] = i(n))
                          : (o[t.toLowerCase()] = Color(e[t]));
                      }),
                    function(e, t) {
                      var n,
                        a = t[3];
                      if (null === a) return Color().hsl(0, 40, 38);
                      if (void 0 === a) return Color().hsl(120, 40, 38);
                      var s = a.toLowerCase();
                      return (
                        void 0 === n && (n = o[s]),
                        void 0 === n && ((n = i(r)), r++, (o[s] = n)),
                        n
                      );
                    }
                  );
                },
              },
              {
                key: "template",
                get: function() {
                  return Object(i.a)(d());
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    data: Object,
                    identifier: String,
                    rendered: {
                      type: Boolean,
                      notify: !0,
                      value: !1,
                      readOnly: !0,
                    },
                    metas: {
                      type: Array,
                      value: function() {
                        return [];
                      },
                    },
                    tooltip: {
                      type: Object,
                      value: function() {
                        return {
                          opacity: "0",
                          left: "0",
                          top: "0",
                          xPadding: "5",
                          yPadding: "3",
                        };
                      },
                    },
                    unit: Object,
                    rtl: { type: Boolean, reflectToAttribute: !0 },
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return ["onPropsChange(data)"];
                },
              },
            ]),
            (b = [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  f(m(t.prototype), "connectedCallback", this).call(this),
                    (this._isAttached = !0),
                    this.onPropsChange(),
                    (this._resizeListener = function() {
                      e._debouncer = r.a.debounce(
                        e._debouncer,
                        s.d.after(10),
                        function() {
                          e._isAttached && e.resizeChart();
                        }
                      );
                    }),
                    "function" == typeof ResizeObserver
                      ? ((this.resizeObserver = new ResizeObserver(function(t) {
                          t.forEach(function() {
                            e._resizeListener();
                          });
                        })),
                        this.resizeObserver.observe(this.$.chartTarget))
                      : this.addEventListener(
                          "iron-resize",
                          this._resizeListener
                        ),
                    null === v &&
                      (v = Promise.all([n.e(12), n.e(113), n.e(67)]).then(
                        n.bind(null, 681)
                      )),
                    v.then(function(t) {
                      (e.ChartClass = t.default), e.onPropsChange();
                    });
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  f(m(t.prototype), "disconnectedCallback", this).call(this),
                    (this._isAttached = !1),
                    this.resizeObserver &&
                      this.resizeObserver.unobserve(this.$.chartTarget),
                    this.removeEventListener(
                      "iron-resize",
                      this._resizeListener
                    ),
                    void 0 !== this._resizeTimer &&
                      (clearInterval(this._resizeTimer),
                      (this._resizeTimer = void 0));
                },
              },
              {
                key: "onPropsChange",
                value: function() {
                  this._isAttached &&
                    this.ChartClass &&
                    this.data &&
                    this.drawChart();
                },
              },
              {
                key: "_customTooltips",
                value: function(e) {
                  if (0 !== e.opacity) {
                    e.yAlign
                      ? this.set(["tooltip", "yAlign"], e.yAlign)
                      : this.set(["tooltip", "yAlign"], "no-transform");
                    var t = (e.title && e.title[0]) || "";
                    this.set(["tooltip", "title"], t);
                    var n = e.body.map(function(e) {
                      return e.lines;
                    });
                    e.body &&
                      this.set(
                        ["tooltip", "lines"],
                        n.map(function(t, n) {
                          var i = e.labelColors[n];
                          return {
                            color: i.borderColor,
                            bgColor: i.backgroundColor,
                            text: t.join("\n"),
                          };
                        })
                      );
                    var i = this.$.chartTarget.clientWidth,
                      o = e.caretX,
                      r = this._chart.canvas.offsetTop + e.caretY;
                    e.caretX + 100 > i
                      ? (o = i - 100)
                      : e.caretX < 100 && (o = 100),
                      (o += this._chart.canvas.offsetLeft),
                      (this.tooltip = Object.assign({}, this.tooltip, {
                        opacity: 1,
                        left: "".concat(o, "px"),
                        top: "".concat(r, "px"),
                      }));
                  } else this.set(["tooltip", "opacity"], 0);
                },
              },
              {
                key: "_legendClick",
                value: function(e) {
                  (e = e || window.event).stopPropagation();
                  for (var t = e.target || e.srcElement; "LI" !== t.nodeName; )
                    t = t.parentElement;
                  var n = e.model.itemsIndex,
                    i = this._chart.getDatasetMeta(n);
                  (i.hidden =
                    null === i.hidden
                      ? !this._chart.data.datasets[n].hidden
                      : null),
                    this.set(
                      ["metas", n, "hidden"],
                      this._chart.isDatasetVisible(n) ? null : "hidden"
                    ),
                    this._chart.update();
                },
              },
              {
                key: "_drawLegend",
                value: function() {
                  var e = this,
                    t = this._chart,
                    n =
                      this._oldIdentifier &&
                      this.identifier === this._oldIdentifier;
                  (this._oldIdentifier = this.identifier),
                    this.set(
                      "metas",
                      this._chart.data.datasets.map(function(i, o) {
                        return {
                          label: i.label,
                          color: i.color,
                          bgColor: i.backgroundColor,
                          hidden:
                            n && o < e.metas.length
                              ? e.metas[o].hidden
                              : !t.isDatasetVisible(o),
                        };
                      })
                    );
                  var i = !1;
                  if (n)
                    for (var o = 0; o < this.metas.length; o++) {
                      var r = t.getDatasetMeta(o);
                      !!r.hidden != !!this.metas[o].hidden && (i = !0),
                        (r.hidden = !!this.metas[o].hidden || null);
                    }
                  i && t.update(), (this.unit = this.data.unit);
                },
              },
              {
                key: "_formatTickValue",
                value: function(e, t, n) {
                  if (0 === n.length) return e;
                  var i = new Date(n[t].value);
                  return Object(c.a)(i);
                },
              },
              {
                key: "drawChart",
                value: function() {
                  var e = this,
                    t = this.data.data,
                    n = this.$.chartCanvas;
                  if ((t.datasets && t.datasets.length) || this._chart) {
                    if ("timeline" !== this.data.type && t.datasets.length > 0)
                      for (
                        var i = t.datasets.length,
                          o = this.constructor.getColorList(i),
                          r = 0;
                        r < i;
                        r++
                      )
                        (t.datasets[r].borderColor = o[r].rgbString()),
                          (t.datasets[r].backgroundColor = o[r]
                            .alpha(0.6)
                            .rgbaString());
                    if (this._chart)
                      this._customTooltips({ opacity: 0 }),
                        (this._chart.data = t),
                        this._chart.update({ duration: 0 }),
                        this.isTimeline
                          ? (this._chart.options.scales.yAxes[0].gridLines.display =
                              t.length > 1)
                          : !0 === this.data.legend && this._drawLegend(),
                        this.resizeChart();
                    else {
                      if (!t.datasets) return;
                      this._customTooltips({ opacity: 0 });
                      var a = [
                          {
                            afterRender: function() {
                              return e._setRendered(!0);
                            },
                          },
                        ],
                        s = {
                          responsive: !0,
                          maintainAspectRatio: !1,
                          animation: { duration: 0 },
                          hover: { animationDuration: 0 },
                          responsiveAnimationDuration: 0,
                          tooltips: {
                            enabled: !1,
                            custom: this._customTooltips.bind(this),
                          },
                          legend: { display: !1 },
                          line: { spanGaps: !0 },
                          elements: { font: "12px 'Roboto', 'sans-serif'" },
                          ticks: { fontFamily: "'Roboto', 'sans-serif'" },
                        };
                      ((s = Chart.helpers.merge(
                        s,
                        this.data.options
                      )).scales.xAxes[0].ticks.callback = this._formatTickValue),
                        "timeline" === this.data.type
                          ? (this.set("isTimeline", !0),
                            void 0 !== this.data.colors &&
                              (this._colorFunc = this.constructor.getColorGenerator(
                                this.data.colors.staticColors,
                                this.data.colors.staticColorIndex
                              )),
                            void 0 !== this._colorFunc &&
                              (s.elements.colorFunction = this._colorFunc),
                            1 === t.datasets.length &&
                              (s.scales.yAxes[0].ticks
                                ? (s.scales.yAxes[0].ticks.display = !1)
                                : (s.scales.yAxes[0].ticks = { display: !1 }),
                              s.scales.yAxes[0].gridLines
                                ? (s.scales.yAxes[0].gridLines.display = !1)
                                : (s.scales.yAxes[0].gridLines = {
                                    display: !1,
                                  })),
                            (this.$.chartTarget.style.height = "50px"))
                          : (this.$.chartTarget.style.height = "160px");
                      var l = {
                        type: this.data.type,
                        data: this.data.data,
                        options: s,
                        plugins: a,
                      };
                      (this._chart = new this.ChartClass(n, l)),
                        !0 !== this.isTimeline &&
                          !0 === this.data.legend &&
                          this._drawLegend(),
                        this.resizeChart();
                    }
                  }
                },
              },
              {
                key: "resizeChart",
                value: function() {
                  this._chart &&
                    (void 0 !== this._resizeTimer
                      ? (clearInterval(this._resizeTimer),
                        (this._resizeTimer = void 0),
                        this._resizeChart())
                      : (this._resizeTimer = setInterval(
                          this.resizeChart.bind(this),
                          10
                        )));
                },
              },
              {
                key: "_resizeChart",
                value: function() {
                  var e = this.$.chartTarget,
                    t = this.data.data;
                  if (0 !== t.datasets.length)
                    if (this.isTimeline) {
                      var n = this._chart.chartArea.top,
                        i = this._chart.chartArea.bottom,
                        o = this._chart.canvas.clientHeight;
                      if (
                        (i > 0 && (this._axisHeight = o - i + n),
                        !this._axisHeight)
                      )
                        return (
                          (e.style.height = "50px"),
                          this._chart.resize(),
                          void this.resizeChart()
                        );
                      if (this._axisHeight) {
                        var r =
                          30 * t.datasets.length + this._axisHeight + "px";
                        e.style.height !== r && (e.style.height = r),
                          this._chart.resize();
                      }
                    } else this._chart.resize();
                },
              },
              {
                key: "chart",
                get: function() {
                  return this._chart;
                },
              },
            ]) && p(u.prototype, b),
            g && p(u, g),
            t
          );
        })();
      customElements.define("ha-chart-base", b);
      var g = n(171),
        _ = n(194);
      function w(e) {
        return (w =
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
      function k() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          display: block;\n          overflow: hidden;\n          height: 0;\n          transition: height 0.3s ease-in-out;\n        }\n      </style>\n      <ha-chart-base\n        id="chart"\n        data="[[chartData]]"\n        identifier="[[identifier]]"\n        rendered="{{rendered}}"\n      ></ha-chart-base>\n    ',
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function O(e, t) {
        return !t || ("object" !== w(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function D(e, t, n) {
        return (D =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = S(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function C(e, t) {
        return (C =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var T = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            O(this, S(t).apply(this, arguments))
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
              t && C(e, t);
          })(t, Object(g["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(k());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  chartData: Object,
                  data: Object,
                  names: Object,
                  unit: String,
                  identifier: String,
                  isSingleDevice: { type: Boolean, value: !1 },
                  endTime: Object,
                  rendered: {
                    type: Boolean,
                    value: !1,
                    observer: "_onRenderedChanged",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["dataChanged(data, endTime, isSingleDevice)"];
              },
            },
          ]),
          (r = [
            {
              key: "connectedCallback",
              value: function() {
                D(S(t.prototype), "connectedCallback", this).call(this),
                  (this._isAttached = !0),
                  this.drawChart();
              },
            },
            {
              key: "dataChanged",
              value: function() {
                this.drawChart();
              },
            },
            {
              key: "_onRenderedChanged",
              value: function(e) {
                e && this.animateHeight();
              },
            },
            {
              key: "animateHeight",
              value: function() {
                var e = this;
                requestAnimationFrame(function() {
                  return requestAnimationFrame(function() {
                    e.style.height = e.$.chart.scrollHeight + "px";
                  });
                });
              },
            },
            {
              key: "drawChart",
              value: function() {
                var e,
                  t = this,
                  n = this.unit,
                  i = this.data,
                  o = [];
                if (this._isAttached && 0 !== i.length) {
                  (e =
                    this.endTime ||
                    new Date(
                      Math.max.apply(
                        null,
                        i.map(function(e) {
                          return new Date(
                            e.states[e.states.length - 1].last_changed
                          );
                        })
                      )
                    )) > new Date() && (e = new Date());
                  var r = this.names || {};
                  i.forEach(function(t) {
                    var i,
                      a = t.domain,
                      l = r[t.entity_id] || t.name,
                      c = [];
                    function u(t, n) {
                      n &&
                        (t > e ||
                          (c.forEach(function(e, i) {
                            e.data.push({ x: t, y: n[i] });
                          }),
                          (i = n)));
                    }
                    function d(e, t, i) {
                      var o = !1,
                        r = !1;
                      i && (o = "origin"),
                        t && (r = "before"),
                        c.push({
                          label: e,
                          fill: o,
                          steppedLine: r,
                          pointRadius: 0,
                          data: [],
                          unitText: n,
                        });
                    }
                    if (
                      "thermostat" === a ||
                      "climate" === a ||
                      "water_heater" === a
                    ) {
                      var p =
                          "climate" === a
                            ? function(e) {
                                return "heating" === e.attributes.hvac_action;
                              }
                            : function(e) {
                                return "heat" === e.state;
                              },
                        h =
                          "climate" === a
                            ? function(e) {
                                return "cooling" === e.attributes.hvac_action;
                              }
                            : function(e) {
                                return "cool" === e.state;
                              },
                        f = t.states.some(function(e) {
                          return (
                            e.attributes &&
                            e.attributes.target_temp_high !==
                              e.attributes.target_temp_low
                          );
                        }),
                        m = t.states.some(p),
                        y = t.states.some(h);
                      d(l + " current temperature", !0),
                        m && d(l + " heating", !0, !0),
                        y && d(l + " cooling", !0, !0),
                        f
                          ? (d(l + " target temperature high", !0),
                            d(l + " target temperature low", !0))
                          : d(l + " target temperature", !0),
                        t.states.forEach(function(e) {
                          if (e.attributes) {
                            var t = s(e.attributes.current_temperature),
                              n = [t];
                            if (
                              (m && n.push(p(e) ? t : null),
                              y && n.push(h(e) ? t : null),
                              f)
                            ) {
                              var i = s(e.attributes.target_temp_high),
                                o = s(e.attributes.target_temp_low);
                              n.push(i, o), u(new Date(e.last_changed), n);
                            } else {
                              var r = s(e.attributes.temperature);
                              n.push(r), u(new Date(e.last_changed), n);
                            }
                          }
                        });
                    } else {
                      d(l, "sensor" === a);
                      var v = null,
                        b = null,
                        g = null;
                      t.states.forEach(function(e) {
                        var t = s(e.state),
                          n = new Date(e.last_changed);
                        if (null !== t && null !== g) {
                          var i = n.getTime(),
                            o = g.getTime(),
                            r = b.getTime();
                          u(g, [((o - r) / (i - r)) * (t - v) + v]),
                            u(new Date(o + 1), [null]),
                            u(n, [t]),
                            (b = n),
                            (v = t),
                            (g = null);
                        } else null !== t && null === g ? (u(n, [t]), (b = n), (v = t)) : null === t && null === g && null !== v && (g = n);
                      });
                    }
                    u(e, i), Array.prototype.push.apply(o, c);
                  });
                  var a = {
                    type: "line",
                    unit: n,
                    legend: !this.isSingleDevice,
                    options: {
                      scales: {
                        xAxes: [
                          {
                            type: "time",
                            ticks: { major: { fontStyle: "bold" } },
                          },
                        ],
                        yAxes: [{ ticks: { maxTicksLimit: 7 } }],
                      },
                      tooltips: {
                        mode: "neareach",
                        callbacks: {
                          title: function(e, n) {
                            var i = e[0],
                              o = n.datasets[i.datasetIndex].data[i.index].x;
                            return Object(_.a)(o, t.hass.language);
                          },
                        },
                      },
                      hover: { mode: "neareach" },
                      layout: { padding: { top: 5 } },
                      elements: {
                        line: {
                          tension: 0.1,
                          pointRadius: 0,
                          borderWidth: 1.5,
                        },
                        point: { hitRadius: 5 },
                      },
                      plugins: { filler: { propagate: !0 } },
                    },
                    data: { labels: [], datasets: o },
                  };
                  this.chartData = a;
                }
                function s(e) {
                  var t = parseFloat(e);
                  return isFinite(t) ? t : null;
                }
              },
            },
          ]) && x(n.prototype, r),
          a && x(n, a),
          t
        );
      })();
      customElements.define("state-history-chart-line", T);
      var E = n(93);
      function j(e) {
        return (j =
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
      function A() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          display: block;\n          opacity: 0;\n          transition: opacity 0.3s ease-in-out;\n        }\n        :host([rendered]) {\n          opacity: 1;\n        }\n\n        ha-chart-base {\n          direction: ltr;\n        }\n      </style>\n      <ha-chart-base\n        data="[[chartData]]"\n        rendered="{{rendered}}"\n        rtl="{{rtl}}"\n      ></ha-chart-base>\n    ',
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function I(e, t) {
        return !t || ("object" !== j(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function P(e, t, n) {
        return (P =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = M(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function M(e) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var $ = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            I(this, M(t).apply(this, arguments))
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
              t && L(e, t);
          })(t, Object(g["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(A());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  chartData: Object,
                  data: { type: Object, observer: "dataChanged" },
                  names: Object,
                  noSingle: Boolean,
                  endTime: Date,
                  rendered: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  rtl: {
                    reflectToAttribute: !0,
                    computed: "_computeRTL(hass)",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["dataChanged(data, endTime, localize, language)"];
              },
            },
          ]),
          (r = [
            {
              key: "connectedCallback",
              value: function() {
                P(M(t.prototype), "connectedCallback", this).call(this),
                  (this._isAttached = !0),
                  this.drawChart();
              },
            },
            {
              key: "dataChanged",
              value: function() {
                this.drawChart();
              },
            },
            {
              key: "drawChart",
              value: function() {
                var e = this,
                  t = this.data;
                if (this._isAttached) {
                  t || (t = []);
                  var n = new Date(
                      t.reduce(function(e, t) {
                        return Math.min(e, new Date(t.data[0].last_changed));
                      }, new Date())
                    ),
                    i =
                      this.endTime ||
                      new Date(
                        t.reduce(function(e, t) {
                          return Math.max(
                            e,
                            new Date(t.data[t.data.length - 1].last_changed)
                          );
                        }, n)
                      );
                  i > new Date() && (i = new Date());
                  var o = [],
                    r = [],
                    a = this.names || {};
                  t.forEach(function(e) {
                    var t,
                      s = null,
                      l = null,
                      c = n,
                      u = a[e.entity_id] || e.name,
                      d = [];
                    e.data.forEach(function(e) {
                      var n = e.state;
                      (void 0 !== n && "" !== n) || (n = null),
                        new Date(e.last_changed) > i ||
                          (null !== s && n !== s
                            ? ((t = new Date(e.last_changed)),
                              d.push([c, t, l, s]),
                              (s = n),
                              (l = e.state_localize),
                              (c = t))
                            : null === s &&
                              ((s = n),
                              (l = e.state_localize),
                              (c = new Date(e.last_changed))));
                    }),
                      null !== s && d.push([c, i, l, s]),
                      r.push({ data: d }),
                      o.push(u);
                  });
                  var s = {
                    type: "timeline",
                    options: {
                      tooltips: {
                        callbacks: {
                          label: function(t, n) {
                            var i = n.datasets[t.datasetIndex].data[t.index],
                              o = Object(_.a)(i[0], e.hass.language),
                              r = Object(_.a)(i[1], e.hass.language);
                            return [i[2], o, r];
                          },
                        },
                      },
                      scales: {
                        xAxes: [{ ticks: { major: { fontStyle: "bold" } } }],
                        yAxes: [
                          {
                            afterSetDimensions: function(e) {
                              e.maxWidth = 0.18 * e.chart.width;
                            },
                            position: this._computeRTL ? "right" : "left",
                          },
                        ],
                      },
                    },
                    data: { labels: o, datasets: r },
                    colors: {
                      staticColors: {
                        on: 1,
                        off: 0,
                        unavailable: "#a0a0a0",
                        unknown: "#606060",
                        idle: 2,
                      },
                      staticColorIndex: 3,
                    },
                  };
                  this.chartData = s;
                }
              },
            },
            {
              key: "_computeRTL",
              value: function(e) {
                return Object(E.a)(e);
              },
            },
          ]) && z(n.prototype, r),
          a && z(n, a),
          t
        );
      })();
      function F(e) {
        return (F =
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
      function R() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        :host {\n          display: block;\n          /* height of single timeline chart = 58px */\n          min-height: 58px;\n        }\n        .info {\n          text-align: center;\n          line-height: 58px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template\n        is="dom-if"\n        class="info"\n        if="[[_computeIsLoading(isLoadingData)]]"\n      >\n        <div class="info">\n          [[localize(\'ui.components.history_charts.loading_history\')]]\n        </div>\n      </template>\n\n      <template\n        is="dom-if"\n        class="info"\n        if="[[_computeIsEmpty(isLoadingData, historyData)]]"\n      >\n        <div class="info">\n          [[localize(\'ui.components.history_charts.no_history_found\')]]\n        </div>\n      </template>\n\n      <template is="dom-if" if="[[historyData.timeline.length]]">\n        <state-history-chart-timeline\n          hass="[[hass]]"\n          data="[[historyData.timeline]]"\n          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"\n          no-single="[[noSingle]]"\n          names="[[names]]"\n        ></state-history-chart-timeline>\n      </template>\n\n      <template is="dom-repeat" items="[[historyData.line]]">\n        <state-history-chart-line\n          hass="[[hass]]"\n          unit="[[item.unit]]"\n          data="[[item.data]]"\n          identifier="[[item.identifier]]"\n          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"\n          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"\n          names="[[names]]"\n        ></state-history-chart-line>\n      </template>\n    ',
        ]);
        return (
          (R = function() {
            return e;
          }),
          e
        );
      }
      function B(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Y(e, t) {
        return !t || ("object" !== F(t) && "function" != typeof t)
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
      function V(e, t) {
        return (V =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define("state-history-chart-timeline", $);
      var N = (function(e) {
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
              t && V(e, t);
          })(t, Object(g["a"])(o["a"])),
          (n = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(R());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  historyData: { type: Object, value: null },
                  names: Object,
                  isLoadingData: Boolean,
                  endTime: { type: Object },
                  upToNow: Boolean,
                  noSingle: Boolean,
                };
              },
            },
          ]),
          (r = [
            {
              key: "_computeIsSingleLineChart",
              value: function(e, t) {
                return !t && e && 1 === e.length;
              },
            },
            {
              key: "_computeIsEmpty",
              value: function(e, t) {
                var n =
                  !t ||
                  !t.timeline ||
                  !t.line ||
                  (0 === t.timeline.length && 0 === t.line.length);
                return !e && n;
              },
            },
            {
              key: "_computeIsLoading",
              value: function(e) {
                return e && !this.historyData;
              },
            },
            {
              key: "_computeEndTime",
              value: function(e, t) {
                return t ? new Date() : e;
              },
            },
          ]) && B(n.prototype, r),
          a && B(n, a),
          t
        );
      })();
      customElements.define("state-history-charts", N);
    },
    261: function(e, t, n) {
      "use strict";
      var i = n(11),
        o = n(21),
        r = n(25),
        a = n(171),
        s = n(228);
      function l(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      var c = {},
        u = {};
      var d = function(e, t, n, i, o) {
          var r = n.cacheKey,
            a = new Date(),
            c = new Date(a);
          c.setHours(c.getHours() - n.hoursToShow);
          var d = c,
            f = !1,
            y = u[r];
          if (y && d >= y.startTime && d <= y.endTime && y.language === o) {
            if (((d = y.endTime), (f = !0), a <= y.endTime)) return y.prom;
          } else
            y = u[r] = (function(e, t, n) {
              return {
                prom: Promise.resolve({ line: [], timeline: [] }),
                language: e,
                startTime: t,
                endTime: n,
                data: { line: [], timeline: [] },
              };
            })(o, c, a);
          var v = y.prom,
            b = (function() {
              var n,
                b = ((n = regeneratorRuntime.mark(function n() {
                  var l, b, g;
                  return regeneratorRuntime.wrap(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (n.next = 3),
                              Promise.all([v, Object(s.c)(e, t, d, a, f)])
                            );
                          case 3:
                            (b = n.sent), (l = b[1]), (n.next = 11);
                            break;
                          case 7:
                            throw ((n.prev = 7),
                            (n.t0 = n.catch(0)),
                            delete u[r],
                            n.t0);
                          case 11:
                            return (
                              (g = Object(s.a)(e, l, i, o)),
                              f
                                ? (p(g.line, y.data.line),
                                  h(g.timeline, y.data.timeline),
                                  m(c, y.data))
                                : (y.data = g),
                              n.abrupt("return", y.data)
                            );
                          case 14:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })),
                function() {
                  var e = this,
                    t = arguments;
                  return new Promise(function(i, o) {
                    var r = n.apply(e, t);
                    function a(e) {
                      l(r, i, o, a, s, "next", e);
                    }
                    function s(e) {
                      l(r, i, o, a, s, "throw", e);
                    }
                    a(void 0);
                  });
                });
              return function() {
                return b.apply(this, arguments);
              };
            })();
          return (y.prom = b()), (y.startTime = c), (y.endTime = a), y.prom;
        },
        p = function(e, t) {
          e.forEach(function(e) {
            var n = e.unit,
              i = t.find(function(e) {
                return e.unit === n;
              });
            i
              ? e.data.forEach(function(e) {
                  var t = i.data.find(function(t) {
                    return e.entity_id === t.entity_id;
                  });
                  t ? (t.states = t.states.concat(e.states)) : i.data.push(e);
                })
              : t.push(e);
          });
        },
        h = function(e, t) {
          e.forEach(function(e) {
            var n = t.find(function(t) {
              return t.entity_id === e.entity_id;
            });
            n ? (n.data = n.data.concat(e.data)) : t.push(e);
          });
        },
        f = function(e, t) {
          if (0 === t.length) return t;
          var n = t.findIndex(function(t) {
            return new Date(t.last_changed) > e;
          });
          if (0 === n) return t;
          var i = -1 === n ? t.length - 1 : n - 1;
          return (t[i].last_changed = e), t.slice(i);
        },
        m = function(e, t) {
          t.line.forEach(function(t) {
            t.data.forEach(function(t) {
              t.states = f(e, t.states);
            });
          }),
            t.timeline.forEach(function(t) {
              t.data = f(e, t.data);
            });
        };
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
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function b(e, t) {
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
      function g(e, t, n) {
        return (g =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = _(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var k = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            b(this, _(t).apply(this, arguments))
          );
        }
        var n, l, u;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && w(e, t);
          })(t, Object(a["a"])(r["a"])),
          (n = t),
          (u = [
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object, observer: "hassChanged" },
                  filterType: String,
                  cacheConfig: Object,
                  startTime: Date,
                  endTime: Date,
                  entityId: String,
                  isLoading: {
                    type: Boolean,
                    value: !0,
                    readOnly: !0,
                    notify: !0,
                  },
                  data: { type: Object, value: null, readOnly: !0, notify: !0 },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)",
                ];
              },
            },
          ]),
          (l = [
            {
              key: "connectedCallback",
              value: function() {
                g(_(t.prototype), "connectedCallback", this).call(this),
                  this.filterChangedDebouncer(
                    this.filterType,
                    this.entityId,
                    this.startTime,
                    this.endTime,
                    this.cacheConfig,
                    this.localize
                  );
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                this._refreshTimeoutId &&
                  (window.clearInterval(this._refreshTimeoutId),
                  (this._refreshTimeoutId = null)),
                  g(_(t.prototype), "disconnectedCallback", this).call(this);
              },
            },
            {
              key: "hassChanged",
              value: function(e, t) {
                t ||
                  this._madeFirstCall ||
                  this.filterChangedDebouncer(
                    this.filterType,
                    this.entityId,
                    this.startTime,
                    this.endTime,
                    this.cacheConfig,
                    this.localize
                  );
              },
            },
            {
              key: "filterChangedDebouncer",
              value: function() {
                for (
                  var e = this, t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                this._debounceFilterChanged = o.a.debounce(
                  this._debounceFilterChanged,
                  i.d.after(0),
                  function() {
                    e.filterChanged.apply(e, n);
                  }
                );
              },
            },
            {
              key: "filterChanged",
              value: function(e, t, n, i, o, r) {
                var a = this;
                if (this.hass && (!o || o.cacheKey) && r) {
                  this._madeFirstCall = !0;
                  var l,
                    u = this.hass.language;
                  if ("date" === e) {
                    if (!n || !i) return;
                    l = Object(s.b)(this.hass, n, i).then(function(e) {
                      return Object(s.a)(a.hass, e, r, u);
                    });
                  } else {
                    if ("recent-entity" !== e) return;
                    if (!t) return;
                    l = o
                      ? this.getRecentWithCacheRefresh(t, o, r, u)
                      : (function(e, t, n, i, o, r) {
                          var a = t,
                            l = c[a];
                          if (
                            l &&
                            Date.now() - l.created < 6e4 &&
                            l.language === r
                          )
                            return l.data;
                          var u = Object(s.c)(e, t, n, i).then(
                            function(t) {
                              return Object(s.a)(e, t, o, r);
                            },
                            function(e) {
                              throw (delete c[t], e);
                            }
                          );
                          return (
                            (c[a] = {
                              created: Date.now(),
                              language: r,
                              data: u,
                            }),
                            u
                          );
                        })(this.hass, t, n, i, r, u);
                  }
                  this._setIsLoading(!0),
                    l.then(function(e) {
                      a._setData(e), a._setIsLoading(!1);
                    });
                }
              },
            },
            {
              key: "getRecentWithCacheRefresh",
              value: function(e, t, n, i) {
                var o = this;
                return (
                  this._refreshTimeoutId &&
                    (window.clearInterval(this._refreshTimeoutId),
                    (this._refreshTimeoutId = null)),
                  t.refresh &&
                    (this._refreshTimeoutId = window.setInterval(function() {
                      d(o.hass, e, t, n, i).then(function(e) {
                        o._setData(Object.assign({}, e));
                      });
                    }, 1e3 * t.refresh)),
                  d(this.hass, e, t, n, i)
                );
              },
            },
          ]) && v(n.prototype, l),
          u && v(n, u),
          t
        );
      })();
      customElements.define("ha-state-history-data", k);
    },
    333: function(e, t, n) {
      "use strict";
      n(213), n(195), n(291);
      var i = n(3);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style include="lumo-menu-overlay">\n      [part="overlay"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part="content"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part="overlay"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      document.head.appendChild(r.content);
      n(202), n(196), n(219);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-button" theme-for="vaadin-button">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-contrast-5pct);\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don’t affect the host vertical alignment */\n      [part="label"],\n      [part="prefix"],\n      [part="suffix"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part="label"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="large"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: "";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~="tertiary"]),\n      :host([theme~="tertiary-inline"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~="tertiary"])::before,\n      :host([theme~="tertiary-inline"])::before {\n        display: none;\n      }\n\n      :host([theme~="tertiary"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*="tertiary"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~="tertiary"][active]),\n      :host([theme~="tertiary-inline"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~="tertiary-inline"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~="tertiary-inline"]) [part="label"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~="primary"]) {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~="primary"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~="primary"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~="primary"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~="primary"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~="primary"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~="primary"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~="success"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~="success"][theme~="primary"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~="success"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~="error"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~="error"][theme~="primary"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~="error"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~="contrast"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~="contrast"][theme~="primary"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~="contrast"][theme~="primary"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="prefix"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part="suffix"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~="icon"]) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~="icon"]) [part="prefix"],\n      :host([theme~="icon"]) [part="suffix"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(i.a)(a());
      document.head.appendChild(s.content);
      var l = n(25),
        c = n(45),
        u = n(197);
      function d(e) {
        return (d =
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
      function p(e, t, n) {
        return (p =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = v(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function m(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      function y(e, t) {
        return !t || ("object" !== d(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && g(e, t);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var _ = function(e) {
          return (function(t) {
            function n() {
              return h(this, n), y(this, v(n).apply(this, arguments));
            }
            return (
              b(n, e),
              m(n, null, [
                {
                  key: "properties",
                  get: function() {
                    var e = {
                      tabindex: {
                        type: Number,
                        value: 0,
                        reflectToAttribute: !0,
                        observer: "_tabindexChanged",
                      },
                    };
                    return window.ShadyDOM && (e.tabIndex = e.tabindex), e;
                  },
                },
              ]),
              n
            );
          })();
        },
        w = function(e) {
          return (function(t) {
            function n() {
              return h(this, n), y(this, v(n).apply(this, arguments));
            }
            return (
              b(n, _(e)),
              m(
                n,
                [
                  {
                    key: "ready",
                    value: function() {
                      var e = this;
                      this.addEventListener("focusin", function(t) {
                        t.composedPath()[0] === e
                          ? e._focus(t)
                          : -1 === t.composedPath().indexOf(e.focusElement) ||
                            e.disabled ||
                            e._setFocused(!0);
                      }),
                        this.addEventListener("focusout", function(t) {
                          return e._setFocused(!1);
                        }),
                        p(v(n.prototype), "ready", this).call(this);
                      var t = function(e) {
                        e.composed ||
                          e.target.dispatchEvent(
                            new CustomEvent(e.type, {
                              bubbles: !0,
                              composed: !0,
                              cancelable: !1,
                            })
                          );
                      };
                      this.shadowRoot.addEventListener("focusin", t),
                        this.shadowRoot.addEventListener("focusout", t),
                        this.addEventListener("keydown", function(t) {
                          if (!t.defaultPrevented && 9 === t.keyCode)
                            if (t.shiftKey)
                              (e._isShiftTabbing = !0),
                                HTMLElement.prototype.focus.apply(e),
                                e._setFocused(!1),
                                setTimeout(function() {
                                  return (e._isShiftTabbing = !1);
                                }, 0);
                            else {
                              var n = window.navigator.userAgent.match(
                                /Firefox\/(\d\d\.\d)/
                              );
                              if (
                                n &&
                                parseFloat(n[1]) >= 63 &&
                                parseFloat(n[1]) < 66 &&
                                e.parentNode &&
                                e.nextSibling
                              ) {
                                var i = document.createElement("input");
                                (i.style.position = "absolute"),
                                  (i.style.opacity = 0),
                                  (i.tabIndex = e.tabIndex),
                                  e.parentNode.insertBefore(i, e.nextSibling),
                                  i.focus(),
                                  i.addEventListener("focusout", function() {
                                    return e.parentNode.removeChild(i);
                                  });
                              }
                            }
                        }),
                        !this.autofocus ||
                          this.focused ||
                          this.disabled ||
                          window.requestAnimationFrame(function() {
                            e._focus(),
                              e._setFocused(!0),
                              e.setAttribute("focus-ring", "");
                          }),
                        (this._boundKeydownListener = this._bodyKeydownListener.bind(
                          this
                        )),
                        (this._boundKeyupListener = this._bodyKeyupListener.bind(
                          this
                        ));
                    },
                  },
                  {
                    key: "connectedCallback",
                    value: function() {
                      p(v(n.prototype), "connectedCallback", this).call(this),
                        document.body.addEventListener(
                          "keydown",
                          this._boundKeydownListener,
                          !0
                        ),
                        document.body.addEventListener(
                          "keyup",
                          this._boundKeyupListener,
                          !0
                        );
                    },
                  },
                  {
                    key: "disconnectedCallback",
                    value: function() {
                      p(v(n.prototype), "disconnectedCallback", this).call(
                        this
                      ),
                        document.body.removeEventListener(
                          "keydown",
                          this._boundKeydownListener,
                          !0
                        ),
                        document.body.removeEventListener(
                          "keyup",
                          this._boundKeyupListener,
                          !0
                        ),
                        this.hasAttribute("focused") && this._setFocused(!1);
                    },
                  },
                  {
                    key: "_setFocused",
                    value: function(e) {
                      e
                        ? this.setAttribute("focused", "")
                        : this.removeAttribute("focused"),
                        e && this._tabPressed
                          ? this.setAttribute("focus-ring", "")
                          : this.removeAttribute("focus-ring");
                    },
                  },
                  {
                    key: "_bodyKeydownListener",
                    value: function(e) {
                      this._tabPressed = 9 === e.keyCode;
                    },
                  },
                  {
                    key: "_bodyKeyupListener",
                    value: function() {
                      this._tabPressed = !1;
                    },
                  },
                  {
                    key: "_focus",
                    value: function(e) {
                      this._isShiftTabbing ||
                        (this.focusElement.focus(), this._setFocused(!0));
                    },
                  },
                  {
                    key: "focus",
                    value: function() {
                      this.focusElement &&
                        !this.disabled &&
                        (this.focusElement.focus(), this._setFocused(!0));
                    },
                  },
                  {
                    key: "blur",
                    value: function() {
                      this.focusElement.blur(), this._setFocused(!1);
                    },
                  },
                  {
                    key: "_disabledChanged",
                    value: function(e) {
                      (this.focusElement.disabled = e),
                        e
                          ? (this.blur(),
                            (this._previousTabIndex = this.tabindex),
                            (this.tabindex = -1),
                            this.setAttribute("aria-disabled", "true"))
                          : (void 0 !== this._previousTabIndex &&
                              (this.tabindex = this._previousTabIndex),
                            this.removeAttribute("aria-disabled"));
                    },
                  },
                  {
                    key: "_tabindexChanged",
                    value: function(e) {
                      void 0 !== e && (this.focusElement.tabIndex = e),
                        this.disabled &&
                          this.tabindex &&
                          (-1 !== this.tabindex &&
                            (this._previousTabIndex = this.tabindex),
                          (this.tabindex = e = void 0)),
                        window.ShadyDOM &&
                          this.setProperties({ tabIndex: e, tabindex: e });
                    },
                  },
                  {
                    key: "click",
                    value: function() {
                      this.disabled ||
                        p(v(n.prototype), "click", this).call(this);
                    },
                  },
                  {
                    key: "focusElement",
                    get: function() {
                      return (
                        window.console.warn(
                          "Please implement the 'focusElement' property in <".concat(
                            this.localName,
                            ">"
                          )
                        ),
                        this
                      );
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function() {
                      return {
                        autofocus: { type: Boolean },
                        _previousTabIndex: { type: Number },
                        disabled: {
                          type: Boolean,
                          observer: "_disabledChanged",
                          reflectToAttribute: !0,
                        },
                        _isShiftTabbing: { type: Boolean },
                      };
                    },
                  },
                ]
              ),
              n
            );
          })();
        },
        k = n(11),
        x = n(21),
        O = n(24),
        D = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
      function S(e, t) {
        if ("function" == typeof e) {
          var n = D.exec(e.toString());
          if (n)
            try {
              e = new Function(n[1]);
            } catch (i) {
              console.log(
                "vaadin-development-mode-detector: uncommentAndRun() failed",
                i
              );
            }
          return e(t);
        }
      }
      window.Vaadin = window.Vaadin || {};
      var C = function(e, t) {
        if (window.Vaadin.developmentMode) return S(e, t);
      };
      function T() {}
      void 0 === window.Vaadin.developmentMode &&
        (window.Vaadin.developmentMode = (function() {
          try {
            return (
              localStorage.getItem("vaadin.developmentmode.force") ||
              (["localhost", "127.0.0.1"].indexOf(window.location.hostname) >=
                0 &&
                !S(function() {
                  return !0;
                }) &&
                !(function() {
                  if (
                    window.Vaadin &&
                    window.Vaadin.Flow &&
                    window.Vaadin.Flow.clients
                  ) {
                    var e = Object.keys(window.Vaadin.Flow.clients)
                      .map(function(e) {
                        return window.Vaadin.Flow.clients[e];
                      })
                      .filter(function(e) {
                        return e.productionMode;
                      });
                    if (e.length > 0) return !0;
                  }
                  return !1;
                })())
            );
          } catch (e) {
            return !1;
          }
        })());
      var E,
        j = function() {
          return C(T);
        };
      function A(e) {
        return (A =
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
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function I(e, t) {
        return !t || ("object" !== A(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function P(e, t, n) {
        return (P =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = M(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function M(e) {
        return (M = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      window.Vaadin || (window.Vaadin = {}),
        (window.Vaadin.registrations = window.Vaadin.registrations || []),
        (window.Vaadin.developmentModeCallback =
          window.Vaadin.developmentModeCallback || {}),
        (window.Vaadin.developmentModeCallback[
          "vaadin-usage-statistics"
        ] = function() {
          j && j();
        });
      var $ = function(e) {
          return (function(t) {
            function n() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                I(this, M(n).apply(this, arguments))
              );
            }
            var i, o, r;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && L(e, t);
              })(n, e),
              (i = n),
              (r = [
                {
                  key: "_finalizeClass",
                  value: function() {
                    P(M(n), "_finalizeClass", this).call(this),
                      this.is &&
                        (window.Vaadin.registrations.push(this),
                        window.Vaadin.developmentModeCallback &&
                          ((E = x.a.debounce(E, k.b, function() {
                            window.Vaadin.developmentModeCallback[
                              "vaadin-usage-statistics"
                            ]();
                          })),
                          Object(O.a)(E)));
                  },
                },
              ]),
              (o = [
                {
                  key: "ready",
                  value: function() {
                    P(M(n.prototype), "ready", this).call(this),
                      null === document.doctype &&
                        console.warn(
                          'Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'
                        );
                  },
                },
              ]) && z(i.prototype, o),
              r && z(i, r),
              n
            );
          })();
        },
        F = n(35);
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
      function B() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: "\\2003";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part="prefix"],\n      [part="suffix"] {\n        flex: none;\n      }\n\n      [part="label"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class="vaadin-button-container">\n      <div part="prefix">\n        <slot name="prefix"></slot>\n      </div>\n      <div part="label">\n        <slot></slot>\n      </div>\n      <div part="suffix">\n        <slot name="suffix"></slot>\n      </div>\n    </div>\n    <button id="button" type="button" aria-label$="[[_ariaLabel]]"></button>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: "\\\\2003";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part="prefix"],\n      [part="suffix"] {\n        flex: none;\n      }\n\n      [part="label"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class="vaadin-button-container">\n      <div part="prefix">\n        <slot name="prefix"></slot>\n      </div>\n      <div part="label">\n        <slot></slot>\n      </div>\n      <div part="suffix">\n        <slot name="suffix"></slot>\n      </div>\n    </div>\n    <button id="button" type="button" aria-label\\$="[[_ariaLabel]]"></button>\n',
          ]
        );
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function H(e, t) {
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
      function V(e, t, n) {
        return (V =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = N(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function N(e) {
        return (N = Object.setPrototypeOf
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
      var q = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            H(this, N(t).apply(this, arguments))
          );
        }
        var n, o, r;
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
          })(t, $(w(Object(u["a"])(Object(c["a"])(l["a"]))))),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(B());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-button";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.1.4";
              },
            },
            {
              key: "properties",
              get: function() {
                return { _ariaLabel: { type: String } };
              },
            },
            {
              key: "observedAttributes",
              get: function() {
                return V(N(t), "observedAttributes", this).concat([
                  "aria-label",
                ]);
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                V(N(t.prototype), "ready", this).call(this),
                  this.setAttribute("role", "button"),
                  this.$.button.setAttribute("role", "presentation"),
                  this._addActiveListeners(),
                  this._updateAriaLabel(this.getAttribute("aria-label"));
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                V(N(t.prototype), "disconnectedCallback", this).call(this),
                  this.hasAttribute("active") && this.removeAttribute("active");
              },
            },
            {
              key: "attributeChangedCallback",
              value: function(e, n, i) {
                V(N(t.prototype), "attributeChangedCallback", this).call(
                  this,
                  e,
                  n,
                  i
                ),
                  "aria-label" === e && this._updateAriaLabel(i);
              },
            },
            {
              key: "_addActiveListeners",
              value: function() {
                var e = this;
                Object(F.b)(this, "down", function() {
                  return !e.disabled && e.setAttribute("active", "");
                }),
                  Object(F.b)(this, "up", function() {
                    return e.removeAttribute("active");
                  }),
                  this.addEventListener("keydown", function(t) {
                    return (
                      !e.disabled &&
                      [13, 32].indexOf(t.keyCode) >= 0 &&
                      e.setAttribute("active", "")
                    );
                  }),
                  this.addEventListener("keyup", function() {
                    return e.removeAttribute("active");
                  }),
                  this.addEventListener("blur", function() {
                    return e.removeAttribute("active");
                  });
              },
            },
            {
              key: "_updateAriaLabel",
              value: function(e) {
                this._ariaLabel = null != e ? e : this.innerText;
              },
            },
            {
              key: "focusElement",
              get: function() {
                return this.$.button;
              },
            },
          ]) && Y(n.prototype, o),
          r && Y(n, r),
          t
        );
      })();
      function K() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part="months"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part="years"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part="years"]:hover [part="year-number"],\n      [part="years"]:hover [part="year-separator"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part="months"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part="years"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part="years"] [part="year-separator"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: "•";\n      }\n\n      /* Current year */\n\n      [part="years"] [part="year-number"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part="toolbar"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part="toolbar"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */\n      [part="toolbar"] [part$="button"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part="toolbar"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part="overlay-header"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part="toggle-button"],\n      :host([fullscreen]) [part="clear-button"],\n      [part="overlay-header"] [part="label"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part="years-toggle-button"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part="years-toggle-button"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="years-toggle-button"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part="years"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part="toolbar"],\n        [part="months"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part="years"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part="months"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
          ],
          [
            '<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part="months"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part="years"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part="years"]:hover [part="year-number"],\n      [part="years"]:hover [part="year-separator"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part="months"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part="years"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part="year-number"],\n      [part="year-separator"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part="years"] [part="year-separator"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: "•";\n      }\n\n      /* Current year */\n\n      [part="years"] [part="year-number"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part="toolbar"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part="toolbar"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */\n      [part="toolbar"] [part\\$="button"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part="toolbar"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part="overlay-header"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part="toggle-button"],\n      :host([fullscreen]) [part="clear-button"],\n      [part="overlay-header"] [part="label"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part="years-toggle-button"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part="years-toggle-button"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="years-toggle-button"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part="years"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part="toolbar"],\n        [part="months"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part="years"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part="months"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
          ]
        );
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(q.is, q);
      var U = Object(i.a)(K());
      function X() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part="month-header"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part="weekdays"],\n      [part="weekday"],\n      [part="week-numbers"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part="weekdays"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part="week-number" for the cell in weekdays-container */\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part="date"],\n      [part="week-number"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part="date"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part="date"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part="date"]::before {\n        content: "";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part="date"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part="date"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part="date"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part="date"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      [part="date"][disabled] {\n        color: var(--lumo-disabled-text-color);\n      }\n\n      @media (pointer: coarse) {\n        [part="date"]:hover:not([selected])::before,\n        [part="date"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part="date"][role="button"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part="date"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>',
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      document.head.appendChild(U.content);
      var Z = Object(i.a)(X());
      document.head.appendChild(Z.content);
      n(238);
      var G = document.createElement("template");
      (G.innerHTML =
        '<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(G.content);
      var J = document.createElement("template");
      function Q() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '<dom-module id="lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style include="lumo-required-field lumo-field-button">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part="label"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part="value"]:focus,\n      [part="input-field"] ::slotted(input):focus,\n      [part="input-field"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part="value"],\n        [part="input-field"] ::slotted(input),\n        [part="input-field"] ::slotted(textarea),\n        [part="input-field"] ::slotted([part="value"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part="value"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part="value"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part="input-field"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part="input-field"]::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part="label"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part="label"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part="value"]::-webkit-input-placeholder,\n      :host([disabled]) [part="value"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]:-ms-input-placeholder,\n      :host([disabled]) [part="value"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::-moz-placeholder,\n      :host([disabled]) [part="value"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::placeholder,\n      :host([disabled]) [part="value"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part="input-field"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part="input-field"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part="input-field"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part="label"],\n      :host([disabled]) [part="value"],\n      :host([disabled]) [part="input-field"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part="input-field"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part="input-field"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part="input-field"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="small"][has-label]) [part="label"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~="small"][has-label]) [part="error-message"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~="align-center"]) [part="value"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~="align-right"]) [part="value"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~="align-right"]) [part="value"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part="input-field"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
          ],
          [
            '<dom-module id="lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style include="lumo-required-field lumo-field-button">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part="label"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part="value"]:focus,\n      [part="input-field"] ::slotted(input):focus,\n      [part="input-field"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part="value"],\n        [part="input-field"] ::slotted(input),\n        [part="input-field"] ::slotted(textarea),\n        [part="input-field"] ::slotted([part="value"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part="value"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part="value"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part="value"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part="input-field"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part="input-field"]::after {\n        content: "";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part="label"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part="label"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part="value"]::-webkit-input-placeholder,\n      :host([disabled]) [part="value"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]:-ms-input-placeholder,\n      :host([disabled]) [part="value"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::-moz-placeholder,\n      :host([disabled]) [part="value"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part="value"]::placeholder,\n      :host([disabled]) [part="value"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part="input-field"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part="input-field"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part="input-field"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part="label"],\n      :host([disabled]) [part="value"],\n      :host([disabled]) [part="input-field"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part="input-field"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part="input-field"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part="input-field"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part="input-field"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~="small"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~="small"][has-label]) [part="label"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~="small"][has-label]) [part="error-message"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~="align-center"]) [part="value"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~="align-right"]) [part="value"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~="align-right"]) [part="value"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part="input-field"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
          ]
        );
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      (J.innerHTML =
        '<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(J.content);
      var ee = Object(i.a)(Q());
      function te(e) {
        return (te =
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
      function ne(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ie(e, t) {
        return !t || ("object" !== te(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function oe(e, t, n) {
        return (oe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = re(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function re(e) {
        return (re = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ae(e, t) {
        return (ae =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      document.head.appendChild(ee.content);
      var se = document.createElement("template");
      (se.innerHTML =
        '<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(se.content);
      var le = {
          default: [
            "list",
            "autofocus",
            "pattern",
            "autocapitalize",
            "autocorrect",
            "maxlength",
            "minlength",
            "name",
            "placeholder",
            "autocomplete",
            "title",
          ],
          accessible: ["disabled", "readonly", "required", "invalid"],
        },
        ce = { DEFAULT: "default", ACCESSIBLE: "accessible" },
        ue = function e(t) {
          return (function(n) {
            function i() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                ie(this, re(i).apply(this, arguments))
              );
            }
            var o, r, a;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ae(e, t);
              })(i, w(t)),
              (o = i),
              (a = [
                {
                  key: "properties",
                  get: function() {
                    return {
                      autocomplete: { type: String },
                      autocorrect: { type: String },
                      autocapitalize: { type: String },
                      autoselect: { type: Boolean, value: !1 },
                      clearButtonVisible: { type: Boolean, value: !1 },
                      errorMessage: { type: String, value: "" },
                      label: {
                        type: String,
                        value: "",
                        observer: "_labelChanged",
                      },
                      maxlength: { type: Number },
                      minlength: { type: Number },
                      name: { type: String },
                      placeholder: { type: String },
                      readonly: { type: Boolean, reflectToAttribute: !0 },
                      required: { type: Boolean, reflectToAttribute: !0 },
                      value: {
                        type: String,
                        value: "",
                        observer: "_valueChanged",
                        notify: !0,
                      },
                      invalid: {
                        type: Boolean,
                        reflectToAttribute: !0,
                        notify: !0,
                        value: !1,
                      },
                      hasValue: { type: Boolean, reflectToAttribute: !0 },
                      preventInvalidInput: { type: Boolean },
                      _labelId: { type: String },
                      _errorId: { type: String },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function() {
                    return [
                      "_stateChanged(disabled, readonly, clearButtonVisible, hasValue)",
                      "_hostPropsChanged(" + le.default.join(", ") + ")",
                      "_hostAccessiblePropsChanged(" +
                        le.accessible.join(", ") +
                        ")",
                      "_getActiveErrorId(invalid, errorMessage, _errorId)",
                      "_getActiveLabelId(label, _labelId)",
                    ];
                  },
                },
              ]),
              (r = [
                {
                  key: "_onInput",
                  value: function(e) {
                    var t = this;
                    if (this.__preventInput)
                      return (
                        e.stopImmediatePropagation(),
                        void (this.__preventInput = !1)
                      );
                    if (this.preventInvalidInput) {
                      var n = this.inputElement;
                      if (n.value.length > 0 && !this.checkValidity())
                        return (
                          (n.value = this.value || ""),
                          this.setAttribute("input-prevented", ""),
                          void (this._inputDebouncer = x.a.debounce(
                            this._inputDebouncer,
                            k.d.after(200),
                            function() {
                              t.removeAttribute("input-prevented");
                            }
                          ))
                        );
                    }
                    (this.__userInput = !0), (this.value = e.target.value);
                  },
                },
                {
                  key: "_stateChanged",
                  value: function(e, t, n, i) {
                    !e && !t && n && i
                      ? this.$.clearButton.removeAttribute("hidden")
                      : this.$.clearButton.setAttribute("hidden", !0);
                  },
                },
                {
                  key: "_onChange",
                  value: function(e) {
                    if (!this._valueClearing) {
                      var t = new CustomEvent("change", {
                        detail: { sourceEvent: e },
                        bubbles: e.bubbles,
                        cancelable: e.cancelable,
                      });
                      this.dispatchEvent(t);
                    }
                  },
                },
                {
                  key: "_valueChanged",
                  value: function(e, t) {
                    ("" === e && void 0 === t) ||
                      ((this.hasValue = "" !== e && null != e),
                      this.__userInput
                        ? (this.__userInput = !1)
                        : (void 0 !== e
                            ? (this.inputElement.value = e)
                            : (this.value = this.inputElement.value = ""),
                          this.invalid && this.validate()));
                  },
                },
                {
                  key: "_labelChanged",
                  value: function(e) {
                    "" !== e && null != e
                      ? this.setAttribute("has-label", "")
                      : this.removeAttribute("has-label");
                  },
                },
                {
                  key: "_onSlotChange",
                  value: function() {
                    var e = this,
                      t = this.querySelector(
                        ""
                          .concat(this._slottedTagName, '[slot="')
                          .concat(this._slottedTagName, '"]')
                      );
                    this.value &&
                      ((this.inputElement.value = this.value), this.validate()),
                      t && !this._slottedInput
                        ? (this._validateSlottedValue(t),
                          this._addInputListeners(t),
                          this._addIEListeners(t),
                          (this._slottedInput = t))
                        : !t &&
                          this._slottedInput &&
                          (this._removeInputListeners(this._slottedInput),
                          this._removeIEListeners(this._slottedInput),
                          (this._slottedInput = void 0)),
                      Object.keys(ce)
                        .map(function(e) {
                          return ce[e];
                        })
                        .forEach(function(t) {
                          return e._propagateHostAttributes(
                            le[t].map(function(t) {
                              return e[t];
                            }),
                            t
                          );
                        });
                  },
                },
                {
                  key: "_hostPropsChanged",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._propagateHostAttributes(t, ce.DEFAULT);
                  },
                },
                {
                  key: "_hostAccessiblePropsChanged",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._propagateHostAttributes(t, ce.ACCESSIBLE);
                  },
                },
                {
                  key: "_validateSlottedValue",
                  value: function(e) {
                    e.value !== this.value &&
                      (console.warn(
                        "Please define value on the vaadin-text-field component!"
                      ),
                      (e.value = ""));
                  },
                },
                {
                  key: "_propagateHostAttributes",
                  value: function(e, t) {
                    var n = this,
                      i = this.inputElement,
                      o = le[t];
                    "accessible" === t
                      ? o.forEach(function(t, o) {
                          n._setOrToggleAttribute(t, e[o], i),
                            n._setOrToggleAttribute("aria-".concat(t), e[o], i);
                        })
                      : o.forEach(function(t, o) {
                          n._setOrToggleAttribute(t, e[o], i);
                        });
                  },
                },
                {
                  key: "_setOrToggleAttribute",
                  value: function(e, t, n) {
                    e &&
                      n &&
                      (t
                        ? n.setAttribute(e, "boolean" == typeof t ? "" : t)
                        : n.removeAttribute(e));
                  },
                },
                {
                  key: "checkValidity",
                  value: function() {
                    return this.required ||
                      this.pattern ||
                      this.maxlength ||
                      this.minlength
                      ? this.inputElement.checkValidity()
                      : !this.invalid;
                  },
                },
                {
                  key: "_addInputListeners",
                  value: function(e) {
                    e.addEventListener("input", this._boundOnInput),
                      e.addEventListener("change", this._boundOnChange),
                      e.addEventListener("blur", this._boundOnBlur),
                      e.addEventListener("focus", this._boundOnFocus);
                  },
                },
                {
                  key: "_removeInputListeners",
                  value: function(e) {
                    e.removeEventListener("input", this._boundOnInput),
                      e.removeEventListener("change", this._boundOnChange),
                      e.removeEventListener("blur", this._boundOnBlur),
                      e.removeEventListener("focus", this._boundOnFocus);
                  },
                },
                {
                  key: "ready",
                  value: function() {
                    var t = this;
                    oe(re(i.prototype), "ready", this).call(this),
                      (this._boundOnInput = this._onInput.bind(this)),
                      (this._boundOnChange = this._onChange.bind(this)),
                      (this._boundOnBlur = this._onBlur.bind(this)),
                      (this._boundOnFocus = this._onFocus.bind(this));
                    var n = this.shadowRoot.querySelector('[part="value"]');
                    (this._slottedInput = this.querySelector(
                      ""
                        .concat(this._slottedTagName, '[slot="')
                        .concat(this._slottedTagName, '"]')
                    )),
                      this._addInputListeners(n),
                      this._addIEListeners(n),
                      this._slottedInput &&
                        (this._addIEListeners(this._slottedInput),
                        this._addInputListeners(this._slottedInput)),
                      this.shadowRoot
                        .querySelector('[name="input"], [name="textarea"]')
                        .addEventListener(
                          "slotchange",
                          this._onSlotChange.bind(this)
                        ),
                      (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                        this.updateStyles(),
                      this.$.clearButton.addEventListener(
                        "mousedown",
                        function() {
                          return (t._valueClearing = !0);
                        }
                      ),
                      this.$.clearButton.addEventListener(
                        "click",
                        this._onClearButtonClick.bind(this)
                      ),
                      this.addEventListener(
                        "keydown",
                        this._onKeyDown.bind(this)
                      );
                    var o = (e._uniqueId = 1 + e._uniqueId || 0);
                    (this._errorId = ""
                      .concat(this.constructor.is, "-error-")
                      .concat(o)),
                      (this._labelId = ""
                        .concat(this.constructor.is, "-label-")
                        .concat(o));
                  },
                },
                {
                  key: "validate",
                  value: function() {
                    return !(this.invalid = !this.checkValidity());
                  },
                },
                {
                  key: "clear",
                  value: function() {
                    this.value = "";
                  },
                },
                {
                  key: "_onBlur",
                  value: function() {
                    this.validate();
                  },
                },
                {
                  key: "_onFocus",
                  value: function() {
                    var e = this;
                    this.autoselect &&
                      (this.inputElement.select(),
                      setTimeout(function() {
                        e.inputElement.setSelectionRange(0, 9999);
                      }));
                  },
                },
                {
                  key: "_onClearButtonClick",
                  value: function(e) {
                    this.inputElement.focus(),
                      this.clear(),
                      (this._valueClearing = !1),
                      this.inputElement.dispatchEvent(
                        new Event("change", { bubbles: !this._slottedInput })
                      );
                  },
                },
                {
                  key: "_onKeyDown",
                  value: function(e) {
                    27 === e.keyCode && this.clearButtonVisible && this.clear();
                  },
                },
                {
                  key: "_addIEListeners",
                  value: function(e) {
                    var t = this;
                    navigator.userAgent.match(/Trident/) &&
                      ((this._shouldPreventInput = function() {
                        (t.__preventInput = !0),
                          requestAnimationFrame(function() {
                            t.__preventInput = !1;
                          });
                      }),
                      e.addEventListener("focusin", this._shouldPreventInput),
                      e.addEventListener("focusout", this._shouldPreventInput),
                      this._createPropertyObserver(
                        "placeholder",
                        this._shouldPreventInput
                      ));
                  },
                },
                {
                  key: "_removeIEListeners",
                  value: function(e) {
                    navigator.userAgent.match(/Trident/) &&
                      (e.removeEventListener(
                        "focusin",
                        this._shouldPreventInput
                      ),
                      e.removeEventListener(
                        "focusout",
                        this._shouldPreventInput
                      ));
                  },
                },
                {
                  key: "_getActiveErrorId",
                  value: function(e, t, n) {
                    this._setOrToggleAttribute(
                      "aria-describedby",
                      t && e ? n : void 0,
                      this.inputElement
                    );
                  },
                },
                {
                  key: "_getActiveLabelId",
                  value: function(e, t) {
                    this._setOrToggleAttribute(
                      "aria-labelledby",
                      e ? t : void 0,
                      this.inputElement
                    );
                  },
                },
                {
                  key: "_getErrorMessageAriaHidden",
                  value: function(e, t, n) {
                    return (!(t && e ? n : void 0)).toString();
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function(e, t, n) {
                    if (
                      (oe(
                        re(i.prototype),
                        "attributeChangedCallback",
                        this
                      ).call(this, e, t, n),
                      (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                        !/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(
                          e
                        ) ||
                        this.updateStyles(),
                      /^((?!chrome|android).)*safari/i.test(
                        navigator.userAgent
                      ) && this.root)
                    ) {
                      this.root.querySelectorAll("*").forEach(function(e) {
                        (e.style["-webkit-backface-visibility"] = "visible"),
                          (e.style["-webkit-backface-visibility"] = "");
                      });
                    }
                  },
                },
                {
                  key: "focusElement",
                  get: function() {
                    if (this.shadowRoot) {
                      var e = this.querySelector(
                        ""
                          .concat(this._slottedTagName, '[slot="')
                          .concat(this._slottedTagName, '"]')
                      );
                      return (
                        e || this.shadowRoot.querySelector('[part="value"]')
                      );
                    }
                  },
                },
                {
                  key: "inputElement",
                  get: function() {
                    return this.focusElement;
                  },
                },
                {
                  key: "_slottedTagName",
                  get: function() {
                    return "input";
                  },
                },
              ]) && ne(o.prototype, r),
              a && ne(o, a),
              i
            );
          })();
        };
      function de(e) {
        return (de =
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
      function pe() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style include="vaadin-text-field-shared-styles">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class="vaadin-text-field-container">\n\n      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>\n\n      <div part="input-field">\n\n        <slot name="prefix"></slot>\n\n        <slot name="input">\n          <input part="value">\n        </slot>\n\n        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>\n        <slot name="suffix"></slot>\n\n      </div>\n\n      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>\n\n    </div>\n',
          ],
          [
            '\n    <style include="vaadin-text-field-shared-styles">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class="vaadin-text-field-container">\n\n      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>\n\n      <div part="input-field">\n\n        <slot name="prefix"></slot>\n\n        <slot name="input">\n          <input part="value">\n        </slot>\n\n        <div part="clear-button" id="clearButton" role="button" aria-label="Clear"></div>\n        <slot name="suffix"></slot>\n\n      </div>\n\n      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>\n\n    </div>\n',
          ]
        );
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function he(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function fe(e, t) {
        return !t || ("object" !== de(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function me(e) {
        return (me = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ye(e, t) {
        return (ye =
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
            fe(this, me(t).apply(this, arguments))
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ye(e, t);
          })(t, $(ue(Object(u["a"])(l["a"])))),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(pe());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-text-field";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.3.5";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  list: { type: String },
                  pattern: { type: String },
                  title: { type: String },
                };
              },
            },
          ]),
          (o = null) && he(n.prototype, o),
          r && he(n, r),
          t
        );
      })();
      function be() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">\n  <template>\n    <style include="lumo-field-button">\n      :host {\n        outline: none;\n      }\n\n      [part="toggle-button"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part="clear-button"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(ve.is, ve);
      var ge = Object(i.a)(be());
      document.head.appendChild(ge.content);
      n(128);
      var _e = n(249),
        we = n(251),
        ke = n(292);
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
      function Oe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function De(e, t) {
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
      function Se(e) {
        return (Se = Object.setPrototypeOf
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
      var Te = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            De(this, Se(t).apply(this, arguments))
          );
        }
        var n, i, o;
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
          })(t, Object(ke["a"])(we["a"])),
          (n = t),
          (o = [
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker-overlay";
              },
            },
          ]),
          (i = null) && Oe(n.prototype, i),
          o && Oe(n, o),
          t
        );
      })();
      customElements.define(Te.is, Te);
      var Ee = n(31),
        je = n(91);
      n(86);
      function Ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var ze = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "_getISOWeekNumber",
              value: function(e) {
                var t = e.getDay();
                0 === t && (t = 7);
                var n = 4 - t,
                  i = new Date(e.getTime() + 24 * n * 3600 * 1e3),
                  o = new Date(0, 0);
                o.setFullYear(i.getFullYear());
                var r = i.getTime() - o.getTime(),
                  a = Math.round(r / 864e5);
                return Math.floor(a / 7 + 1);
              },
            },
            {
              key: "_dateEquals",
              value: function(e, t) {
                return (
                  e instanceof Date &&
                  t instanceof Date &&
                  e.getFullYear() === t.getFullYear() &&
                  e.getMonth() === t.getMonth() &&
                  e.getDate() === t.getDate()
                );
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return (!t || e >= t) && (!n || e <= n);
              },
            },
            {
              key: "_getClosestDate",
              value: function(e, t) {
                return t
                  .filter(function(e) {
                    return void 0 !== e;
                  })
                  .reduce(function(t, n) {
                    return n
                      ? t
                        ? Math.abs(e.getTime() - n.getTime()) <
                          Math.abs(t.getTime() - e.getTime())
                          ? n
                          : t
                        : n
                      : t;
                  });
              },
            },
            {
              key: "_extractDateParts",
              value: function(e) {
                return {
                  day: e.getDate(),
                  month: e.getMonth(),
                  year: e.getFullYear(),
                };
              },
            },
          ]),
          (n = null) && Ae(t.prototype, n),
          i && Ae(t, i),
          e
        );
      })();
      function Ie(e) {
        return (Ie =
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
      function Pe() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part="weekdays"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part="week-numbers"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part="week-numbers"][hidden],\n      [part="weekday"][hidden] {\n        display: none;\n      }\n\n      [part="weekday"],\n      [part="date"] {\n        /* Would use calc(100% / 7) but it doesn\'t work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">\n      <div id="weekdays-container">\n        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>\n        <div part="weekdays">\n          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">\n            <div part="weekday" role="heading" aria-label$="[[item.weekDay]]">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id="days-container">\n        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">\n          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">\n            <div part="week-number" role="heading" aria-label$="[[i18n.week]] [[item]]">[[item]]</div>\n          </template>\n        </div>\n        <div id="days">\n          <template is="dom-repeat" items="[[_days]]">\n            <div part="date" today$="[[_isToday(item)]]" selected$="[[_dateEquals(item, selectedDate)]]" focused$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled$="[[!_dateAllowed(item, minDate, maxDate)]]" role$="[[_getRole(item)]]" aria-label$="[[_getAriaLabel(item)]]" aria-disabled$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part="weekdays"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part="week-numbers"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part="week-numbers"][hidden],\n      [part="weekday"][hidden] {\n        display: none;\n      }\n\n      [part="weekday"],\n      [part="date"] {\n        /* Would use calc(100% / 7) but it doesn\'t work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part="weekday"]:empty,\n      [part="week-numbers"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">\n      <div id="weekdays-container">\n        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>\n        <div part="weekdays">\n          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">\n            <div part="weekday" role="heading" aria-label\\$="[[item.weekDay]]">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id="days-container">\n        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">\n          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">\n            <div part="week-number" role="heading" aria-label\\$="[[i18n.week]] [[item]]">[[item]]</div>\n          </template>\n        </div>\n        <div id="days">\n          <template is="dom-repeat" items="[[_days]]">\n            <div part="date" today\\$="[[_isToday(item)]]" selected\\$="[[_dateEquals(item, selectedDate)]]" focused\\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\\$="[[_getRole(item)]]" aria-label\\$="[[_getAriaLabel(item)]]" aria-disabled\\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n',
          ]
        );
        return (
          (Pe = function() {
            return e;
          }),
          e
        );
      }
      function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Le(e, t) {
        return !t || ("object" !== Ie(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function $e(e) {
        return ($e = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Fe(e, t) {
        return (Fe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Re = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Le(this, $e(t).apply(this, arguments))
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Fe(e, t);
          })(t, Object(u["a"])(Object(c["a"])(l["a"]))),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Pe());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-month-calendar";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  month: { type: Date, value: new Date() },
                  selectedDate: { type: Date, notify: !0 },
                  focusedDate: Date,
                  showWeekNumbers: { type: Boolean, value: !1 },
                  i18n: { type: Object },
                  ignoreTaps: Boolean,
                  _notTapping: Boolean,
                  minDate: { type: Date, value: null },
                  maxDate: { type: Date, value: null },
                  _days: {
                    type: Array,
                    computed:
                      "_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)",
                  },
                  disabled: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    computed: "_isDisabled(month, minDate, maxDate)",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)",
                ];
              },
            },
          ]),
          (o = [
            {
              key: "_dateEquals",
              value: function(e, t) {
                return ze._dateEquals(e, t);
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return ze._dateAllowed(e, t, n);
              },
            },
            {
              key: "_isDisabled",
              value: function(e, t, n) {
                var i = new Date(0, 0);
                i.setFullYear(e.getFullYear()),
                  i.setMonth(e.getMonth()),
                  i.setDate(1);
                var o = new Date(0, 0);
                return (
                  o.setFullYear(e.getFullYear()),
                  o.setMonth(e.getMonth() + 1),
                  o.setDate(-1),
                  !(
                    t &&
                    n &&
                    t.getMonth() === n.getMonth() &&
                    t.getMonth() === e.getMonth() &&
                    n.getDate() - t.getDate() >= 0
                  ) &&
                    (!this._dateAllowed(i, t, n) && !this._dateAllowed(o, t, n))
                );
              },
            },
            {
              key: "_getTitle",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return this.i18n.formatTitle(
                    t[e.getMonth()],
                    e.getFullYear()
                  );
              },
            },
            {
              key: "_onMonthGridTouchStart",
              value: function() {
                var e = this;
                (this._notTapping = !1),
                  setTimeout(function() {
                    return (e._notTapping = !0);
                  }, 300);
              },
            },
            {
              key: "_dateAdd",
              value: function(e, t) {
                e.setDate(e.getDate() + t);
              },
            },
            {
              key: "_applyFirstDayOfWeek",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return e.slice(t).concat(e.slice(0, t));
              },
            },
            {
              key: "_getWeekDayNames",
              value: function(e, t, n, i) {
                if (
                  void 0 !== e &&
                  void 0 !== t &&
                  void 0 !== n &&
                  void 0 !== i
                )
                  return (
                    (e = this._applyFirstDayOfWeek(e, i)),
                    (t = this._applyFirstDayOfWeek(t, i)),
                    (e = e.map(function(e, n) {
                      return { weekDay: e, weekDayShort: t[n] };
                    }))
                  );
              },
            },
            {
              key: "_getDate",
              value: function(e) {
                return e ? e.getDate() : "";
              },
            },
            {
              key: "_showWeekNumbersChanged",
              value: function(e, t) {
                e && 1 === t
                  ? this.setAttribute("week-numbers", "")
                  : this.removeAttribute("week-numbers");
              },
            },
            {
              key: "_showWeekSeparator",
              value: function(e, t) {
                return e && 1 === t;
              },
            },
            {
              key: "_isToday",
              value: function(e) {
                return this._dateEquals(new Date(), e);
              },
            },
            {
              key: "_getDays",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t) {
                  var n = new Date(0, 0);
                  for (
                    n.setFullYear(e.getFullYear()),
                      n.setMonth(e.getMonth()),
                      n.setDate(1);
                    n.getDay() !== t;

                  )
                    this._dateAdd(n, -1);
                  for (
                    var i = [], o = n.getMonth(), r = e.getMonth();
                    n.getMonth() === r || n.getMonth() === o;

                  )
                    i.push(n.getMonth() === r ? new Date(n.getTime()) : null),
                      this._dateAdd(n, 1);
                  return i;
                }
              },
            },
            {
              key: "_getWeekNumber",
              value: function(e, t) {
                if (void 0 !== e && void 0 !== t)
                  return (
                    e ||
                      (e = t.reduce(function(e, t) {
                        return !e && t ? t : e;
                      })),
                    ze._getISOWeekNumber(e)
                  );
              },
            },
            {
              key: "_getWeekNumbers",
              value: function(e) {
                var t = this;
                return e
                  .map(function(n) {
                    return t._getWeekNumber(n, e);
                  })
                  .filter(function(e, t, n) {
                    return n.indexOf(e) === t;
                  });
              },
            },
            {
              key: "_handleTap",
              value: function(e) {
                this.ignoreTaps ||
                  this._notTapping ||
                  !e.target.date ||
                  e.target.hasAttribute("disabled") ||
                  ((this.selectedDate = e.target.date),
                  this.dispatchEvent(
                    new CustomEvent("date-tap", { bubbles: !0, composed: !0 })
                  ));
              },
            },
            {
              key: "_preventDefault",
              value: function(e) {
                e.preventDefault();
              },
            },
            {
              key: "_getRole",
              value: function(e) {
                return e ? "button" : "presentation";
              },
            },
            {
              key: "_getAriaLabel",
              value: function(e) {
                if (!e) return "";
                var t =
                  this._getDate(e) +
                  " " +
                  this.i18n.monthNames[e.getMonth()] +
                  " " +
                  e.getFullYear() +
                  ", " +
                  this.i18n.weekdays[e.getDay()];
                return this._isToday(e) && (t += ", " + this.i18n.today), t;
              },
            },
            {
              key: "_getAriaDisabled",
              value: function(e, t, n) {
                if (void 0 !== e && void 0 !== t && void 0 !== n)
                  return this._dateAllowed(e, t, n) ? "false" : "true";
              },
            },
          ]) && Me(n.prototype, o),
          r && Me(n, r),
          t
        );
      })();
      customElements.define(Re.is, Re);
      var Be = n(32),
        Ye = n(61);
      function He(e) {
        return (He =
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
      function Ve() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id="scroller" on-scroll="_scroll">\n      <div class="buffer"></div>\n      <div class="buffer"></div>\n      <div id="fullHeight"></div>\n    </div>\n',
        ]);
        return (
          (Ve = function() {
            return e;
          }),
          e
        );
      }
      function Ne(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function We(e, t) {
        return !t || ("object" !== He(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function qe(e, t, n) {
        return (qe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ke(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function Ke(e) {
        return (Ke = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ue(e, t) {
        return (Ue =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Xe = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            We(this, Ke(t).apply(this, arguments))
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Ue(e, t);
          })(t, l["a"]),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Ve());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-infinite-scroller";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  bufferSize: { type: Number, value: 20 },
                  _initialScroll: { value: 5e5 },
                  _initialIndex: { value: 0 },
                  _buffers: Array,
                  _preventScrollEvent: Boolean,
                  _mayHaveMomentum: Boolean,
                  _initialized: Boolean,
                  active: { type: Boolean, observer: "_activated" },
                };
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                qe(Ke(t.prototype), "ready", this).call(this),
                  (this._buffers = Array.prototype.slice.call(
                    this.root.querySelectorAll(".buffer")
                  )),
                  (this.$.fullHeight.style.height =
                    2 * this._initialScroll + "px");
                var e = this.querySelector("template");
                (this._TemplateClass = Object(Be.b)(e, this, {
                  forwardHostProp: function(e, t) {
                    "index" !== e &&
                      this._buffers.forEach(function(n) {
                        [].forEach.call(n.children, function(n) {
                          n._itemWrapper.instance[e] = t;
                        });
                      });
                  },
                })),
                  navigator.userAgent.toLowerCase().indexOf("firefox") > -1 &&
                    (this.$.scroller.tabIndex = -1);
              },
            },
            {
              key: "_activated",
              value: function(e) {
                e &&
                  !this._initialized &&
                  (this._createPool(), (this._initialized = !0));
              },
            },
            {
              key: "_finishInit",
              value: function() {
                var e = this;
                this._initDone ||
                  (this._buffers.forEach(function(t) {
                    [].forEach.call(t.children, function(t) {
                      return e._ensureStampedInstance(t._itemWrapper);
                    });
                  }, this),
                  this._buffers[0].translateY || this._reset(),
                  (this._initDone = !0));
              },
            },
            {
              key: "_translateBuffer",
              value: function(e) {
                var t = e ? 1 : 0;
                (this._buffers[t].translateY =
                  this._buffers[t ? 0 : 1].translateY +
                  this._bufferHeight * (t ? -1 : 1)),
                  (this._buffers[t].style.transform =
                    "translate3d(0, " + this._buffers[t].translateY + "px, 0)"),
                  (this._buffers[t].updated = !1),
                  this._buffers.reverse();
              },
            },
            {
              key: "_scroll",
              value: function() {
                var e = this;
                if (!this._scrollDisabled) {
                  var t = this.$.scroller.scrollTop;
                  (t < this._bufferHeight ||
                    t > 2 * this._initialScroll - this._bufferHeight) &&
                    ((this._initialIndex = ~~this.position), this._reset());
                  var n = this.root.querySelector(".buffer").offsetTop,
                    i = t > this._buffers[1].translateY + this.itemHeight + n,
                    o = t < this._buffers[0].translateY + this.itemHeight + n;
                  (i || o) && (this._translateBuffer(o), this._updateClones()),
                    this._preventScrollEvent ||
                      (this.dispatchEvent(
                        new CustomEvent("custom-scroll", {
                          bubbles: !1,
                          composed: !0,
                        })
                      ),
                      (this._mayHaveMomentum = !0)),
                    (this._preventScrollEvent = !1),
                    (this._debouncerScrollFinish = x.a.debounce(
                      this._debouncerScrollFinish,
                      k.d.after(200),
                      function() {
                        var t = e.$.scroller.getBoundingClientRect();
                        e._isVisible(e._buffers[0], t) ||
                          e._isVisible(e._buffers[1], t) ||
                          (e.position = e.position);
                      }
                    ));
                }
              },
            },
            {
              key: "_reset",
              value: function() {
                var e = this;
                (this._scrollDisabled = !0),
                  (this.$.scroller.scrollTop = this._initialScroll),
                  (this._buffers[0].translateY =
                    this._initialScroll - this._bufferHeight),
                  (this._buffers[1].translateY = this._initialScroll),
                  this._buffers.forEach(function(e) {
                    e.style.transform =
                      "translate3d(0, " + e.translateY + "px, 0)";
                  }),
                  (this._buffers[0].updated = this._buffers[1].updated = !1),
                  this._updateClones(!0),
                  (this._debouncerUpdateClones = x.a.debounce(
                    this._debouncerUpdateClones,
                    k.d.after(200),
                    function() {
                      (e._buffers[0].updated = e._buffers[1].updated = !1),
                        e._updateClones();
                    }
                  )),
                  (this._scrollDisabled = !1);
              },
            },
            {
              key: "_createPool",
              value: function() {
                var e = this,
                  n = this.getBoundingClientRect();
                this._buffers.forEach(function(i) {
                  for (
                    var o = function() {
                        var o = document.createElement("div");
                        (o.style.height = e.itemHeight + "px"),
                          (o.instance = {});
                        var r =
                            "vaadin-infinite-scroller-item-content-" +
                            (t._contentIndex = t._contentIndex + 1 || 0),
                          a = document.createElement("slot");
                        a.setAttribute("name", r),
                          (a._itemWrapper = o),
                          i.appendChild(a),
                          o.setAttribute("slot", r),
                          e.appendChild(o),
                          Object(O.b)(),
                          setTimeout(function() {
                            e._isVisible(o, n) && e._ensureStampedInstance(o);
                          }, 1);
                      },
                      r = 0;
                    r < e.bufferSize;
                    r++
                  )
                    o();
                }, this),
                  setTimeout(function() {
                    Object(Ye.a)(e, e._finishInit.bind(e));
                  }, 1);
              },
            },
            {
              key: "_ensureStampedInstance",
              value: function(e) {
                if (!e.firstElementChild) {
                  var t = e.instance;
                  (e.instance = new this._TemplateClass({})),
                    e.appendChild(e.instance.root),
                    Object.keys(t).forEach(function(n) {
                      e.instance.set(n, t[n]);
                    });
                }
              },
            },
            {
              key: "_updateClones",
              value: function(e) {
                var t = this;
                this._firstIndex =
                  ~~(
                    (this._buffers[0].translateY - this._initialScroll) /
                    this.itemHeight
                  ) + this._initialIndex;
                var n = e ? this.$.scroller.getBoundingClientRect() : void 0;
                this._buffers.forEach(function(i, o) {
                  if (!i.updated) {
                    var r = t._firstIndex + t.bufferSize * o;
                    [].forEach.call(i.children, function(i, o) {
                      var a = i._itemWrapper;
                      (e && !t._isVisible(a, n)) || (a.instance.index = r + o);
                    }),
                      (i.updated = !0);
                  }
                }, this);
              },
            },
            {
              key: "_isVisible",
              value: function(e, t) {
                var n = e.getBoundingClientRect();
                return n.bottom > t.top && n.top < t.bottom;
              },
            },
            {
              key: "position",
              set: function(e) {
                var t = this;
                (this._preventScrollEvent = !0),
                  e > this._firstIndex &&
                  e < this._firstIndex + 2 * this.bufferSize
                    ? (this.$.scroller.scrollTop =
                        this.itemHeight * (e - this._firstIndex) +
                        this._buffers[0].translateY)
                    : ((this._initialIndex = ~~e),
                      this._reset(),
                      (this._scrollDisabled = !0),
                      (this.$.scroller.scrollTop += (e % 1) * this.itemHeight),
                      (this._scrollDisabled = !1)),
                  this._mayHaveMomentum &&
                    (this.$.scroller.classList.add("notouchscroll"),
                    (this._mayHaveMomentum = !1),
                    setTimeout(function() {
                      t.$.scroller.classList.remove("notouchscroll");
                    }, 10));
              },
              get: function() {
                return (
                  (this.$.scroller.scrollTop - this._buffers[0].translateY) /
                    this.itemHeight +
                  this._firstIndex
                );
              },
            },
            {
              key: "itemHeight",
              get: function() {
                if (!this._itemHeightVal) {
                  (window.ShadyCSS && window.ShadyCSS.nativeCss) ||
                    this.updateStyles();
                  var e = window.ShadyCSS
                    ? window.ShadyCSS.getComputedStyleValue(
                        this,
                        "--vaadin-infinite-scroller-item-height"
                      )
                    : getComputedStyle(this).getPropertyValue(
                        "--vaadin-infinite-scroller-item-height"
                      );
                  this.$.fullHeight.style.setProperty("background-position", e);
                  var t = getComputedStyle(this.$.fullHeight).getPropertyValue(
                    "background-position"
                  );
                  this.$.fullHeight.style.removeProperty("background-position"),
                    (this._itemHeightVal = parseFloat(t));
                }
                return this._itemHeightVal;
              },
            },
            {
              key: "_bufferHeight",
              get: function() {
                return this.itemHeight * this.bufferSize;
              },
            },
          ]) && Ne(n.prototype, o),
          r && Ne(n, r),
          t
        );
      })();
      customElements.define(Xe.is, Xe);
      n(72);
      var Ze = document.createElement("template");
      function Ge(e) {
        return (Ge =
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
      function Je() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part="overlay-header"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part="overlay-header"] {\n        display: none;\n      }\n\n      [part="label"] {\n        flex-grow: 1;\n      }\n\n      [part="clear-button"]:not([showclear]) {\n        display: none;\n      }\n\n      [part="years-toggle-button"] {\n        display: flex;\n      }\n\n      [part="years-toggle-button"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part="years-toggle-button"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part="months"],\n      [part="years"] {\n        height: 100%;\n      }\n\n      [part="months"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part="months"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part="years"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part="years"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part="years"]::before {\n        content: \'\';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part="months"],\n      :host(.animate) [part="years"] {\n        transition: all 200ms;\n      }\n\n      [part="toolbar"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~="overlay-header"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~="years-toggle-button"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id="announcer" role="alert" aria-live="polite">\n      [[i18n.calendar]]\n    </div>\n\n    <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">\n      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part="clear-button" on-tap="_clear" showclear$="[[_showClear(selectedDate)]]"></div>\n      <div part="toggle-button" on-tap="_cancel"></div>\n\n      <div part="years-toggle-button" desktop$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id="scrollers" desktop$="[[_desktopMode]]" on-track="_track">\n      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">\n        <template>\n          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused$="[[_focused]]" part="month" theme$="[[theme]]">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">\n        <template>\n          <div part="year-number" role="button" current$="[[_isCurrentYear(index)]]" selected$="[[_isSelectedYear(index, selectedDate)]]">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part="year-separator" aria-hidden="true"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">\n      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part="overlay-header"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part="overlay-header"] {\n        display: none;\n      }\n\n      [part="label"] {\n        flex-grow: 1;\n      }\n\n      [part="clear-button"]:not([showclear]) {\n        display: none;\n      }\n\n      [part="years-toggle-button"] {\n        display: flex;\n      }\n\n      [part="years-toggle-button"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part="years-toggle-button"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part="months"],\n      [part="years"] {\n        height: 100%;\n      }\n\n      [part="months"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part="months"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part="years"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part="years"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part="years"]::before {\n        content: \'\';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part="months"],\n      :host(.animate) [part="years"] {\n        transition: all 200ms;\n      }\n\n      [part="toolbar"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~="overlay-header"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~="years-toggle-button"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id="announcer" role="alert" aria-live="polite">\n      [[i18n.calendar]]\n    </div>\n\n    <div part="overlay-header" on-touchend="_preventDefault" desktop\\$="[[_desktopMode]]" aria-hidden="true">\n      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part="clear-button" on-tap="_clear" showclear\\$="[[_showClear(selectedDate)]]"></div>\n      <div part="toggle-button" on-tap="_cancel"></div>\n\n      <div part="years-toggle-button" desktop\\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id="scrollers" desktop\\$="[[_desktopMode]]" on-track="_track">\n      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">\n        <template>\n          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\\$="[[_focused]]" part="month" theme\\$="[[theme]]">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">\n        <template>\n          <div part="year-number" role="button" current\\$="[[_isCurrentYear(index)]]" selected\\$="[[_isSelectedYear(index, selectedDate)]]">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part="year-separator" aria-hidden="true"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">\n      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>\n',
          ]
        );
        return (
          (Je = function() {
            return e;
          }),
          e
        );
      }
      function Qe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function et(e, t) {
        return !t || ("object" !== Ge(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function tt(e, t, n) {
        return (tt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = nt(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function nt(e) {
        return (nt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function it(e, t) {
        return (it =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      (Ze.innerHTML =
        '<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir="rtl"]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(Ze.content);
      var ot = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            et(this, nt(t).apply(this, arguments))
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && it(e, t);
          })(t, Object(u["a"])(Object(_e["a"])(Object(c["a"])(l["a"])))),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Je());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker-overlay-content";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  selectedDate: { type: Date, notify: !0 },
                  focusedDate: {
                    type: Date,
                    notify: !0,
                    observer: "_focusedDateChanged",
                  },
                  _focusedMonthDate: Number,
                  initialPosition: {
                    type: Date,
                    observer: "_initialPositionChanged",
                  },
                  _originDate: { value: new Date() },
                  _visibleMonthIndex: Number,
                  _desktopMode: Boolean,
                  _translateX: { observer: "_translateXChanged" },
                  _yearScrollerWidth: { value: 50 },
                  i18n: { type: Object },
                  showWeekNumbers: { type: Boolean },
                  _ignoreTaps: Boolean,
                  _notTapping: Boolean,
                  minDate: Date,
                  maxDate: Date,
                  _focused: Boolean,
                  label: String,
                };
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                tt(nt(t.prototype), "ready", this).call(this),
                  this.setAttribute("tabindex", 0),
                  this.addEventListener("keydown", this._onKeydown.bind(this)),
                  Object(F.b)(this, "tap", this._stopPropagation),
                  this.addEventListener(
                    "focus",
                    this._onOverlayFocus.bind(this)
                  ),
                  this.addEventListener("blur", this._onOverlayBlur.bind(this));
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                tt(nt(t.prototype), "connectedCallback", this).call(this),
                  this._closeYearScroller(),
                  this._toggleAnimateClass(!0),
                  Object(F.f)(this.$.scrollers, "pan-y"),
                  je.a.requestAvailability();
              },
            },
            {
              key: "announceFocusedDate",
              value: function() {
                var e = this._currentlyFocusedDate(),
                  t = [];
                ze._dateEquals(e, new Date()) && t.push(this.i18n.today),
                  (t = t.concat([
                    this.i18n.weekdays[e.getDay()],
                    e.getDate(),
                    this.i18n.monthNames[e.getMonth()],
                    e.getFullYear(),
                  ])),
                  this.showWeekNumbers &&
                    1 === this.i18n.firstDayOfWeek &&
                    (t.push(this.i18n.week), t.push(ze._getISOWeekNumber(e))),
                  this.dispatchEvent(
                    new CustomEvent("iron-announce", {
                      bubbles: !0,
                      composed: !0,
                      detail: { text: t.join(" ") },
                    })
                  );
              },
            },
            {
              key: "focusCancel",
              value: function() {
                this.$.cancelButton.focus();
              },
            },
            {
              key: "scrollToDate",
              value: function(e, t) {
                this._scrollToPosition(
                  this._differenceInMonths(e, this._originDate),
                  t
                );
              },
            },
            {
              key: "_focusedDateChanged",
              value: function(e) {
                this.revealDate(e);
              },
            },
            {
              key: "_isCurrentYear",
              value: function(e) {
                return 0 === e;
              },
            },
            {
              key: "_isSelectedYear",
              value: function(e, t) {
                if (t)
                  return t.getFullYear() === this._originDate.getFullYear() + e;
              },
            },
            {
              key: "revealDate",
              value: function(e) {
                if (e) {
                  var t = this._differenceInMonths(e, this._originDate),
                    n = this.$.monthScroller.position > t,
                    i =
                      this.$.monthScroller.clientHeight /
                      this.$.monthScroller.itemHeight,
                    o = this.$.monthScroller.position + i - 1 < t;
                  n
                    ? this._scrollToPosition(t, !0)
                    : o && this._scrollToPosition(t - i + 1, !0);
                }
              },
            },
            {
              key: "_onOverlayFocus",
              value: function() {
                this._focused = !0;
              },
            },
            {
              key: "_onOverlayBlur",
              value: function() {
                this._focused = !1;
              },
            },
            {
              key: "_initialPositionChanged",
              value: function(e) {
                this.scrollToDate(e);
              },
            },
            {
              key: "_repositionYearScroller",
              value: function() {
                (this._visibleMonthIndex = Math.floor(
                  this.$.monthScroller.position
                )),
                  (this.$.yearScroller.position =
                    (this.$.monthScroller.position +
                      this._originDate.getMonth()) /
                    12);
              },
            },
            {
              key: "_repositionMonthScroller",
              value: function() {
                (this.$.monthScroller.position =
                  12 * this.$.yearScroller.position -
                  this._originDate.getMonth()),
                  (this._visibleMonthIndex = Math.floor(
                    this.$.monthScroller.position
                  ));
              },
            },
            {
              key: "_onMonthScroll",
              value: function() {
                this._repositionYearScroller(), this._doIgnoreTaps();
              },
            },
            {
              key: "_onYearScroll",
              value: function() {
                this._repositionMonthScroller(), this._doIgnoreTaps();
              },
            },
            {
              key: "_onYearScrollTouchStart",
              value: function() {
                var e = this;
                (this._notTapping = !1),
                  setTimeout(function() {
                    return (e._notTapping = !0);
                  }, 300),
                  this._repositionMonthScroller();
              },
            },
            {
              key: "_onMonthScrollTouchStart",
              value: function() {
                this._repositionYearScroller();
              },
            },
            {
              key: "_doIgnoreTaps",
              value: function() {
                var e = this;
                (this._ignoreTaps = !0),
                  (this._debouncer = x.a.debounce(
                    this._debouncer,
                    k.d.after(300),
                    function() {
                      return (e._ignoreTaps = !1);
                    }
                  ));
              },
            },
            {
              key: "_formatDisplayed",
              value: function(e, t, n) {
                return e ? t(ze._extractDateParts(e)) : n;
              },
            },
            {
              key: "_onTodayTap",
              value: function() {
                var e = new Date();
                Math.abs(
                  this.$.monthScroller.position -
                    this._differenceInMonths(e, this._originDate)
                ) < 0.001
                  ? ((this.selectedDate = e), this._close())
                  : this._scrollToCurrentMonth();
              },
            },
            {
              key: "_scrollToCurrentMonth",
              value: function() {
                this.focusedDate && (this.focusedDate = new Date()),
                  this.scrollToDate(new Date(), !0);
              },
            },
            {
              key: "_showClear",
              value: function(e) {
                return !!e;
              },
            },
            {
              key: "_onYearTap",
              value: function(e) {
                if (!this._ignoreTaps && !this._notTapping) {
                  var t =
                    (e.detail.y -
                      (this.$.yearScroller.getBoundingClientRect().top +
                        this.$.yearScroller.clientHeight / 2)) /
                    this.$.yearScroller.itemHeight;
                  this._scrollToPosition(
                    this.$.monthScroller.position + 12 * t,
                    !0
                  );
                }
              },
            },
            {
              key: "_scrollToPosition",
              value: function(e, t) {
                var n = this;
                if (void 0 === this._targetPosition) {
                  if (!t)
                    return (
                      (this.$.monthScroller.position = e),
                      (this._targetPosition = void 0),
                      void this._repositionYearScroller()
                    );
                  this._targetPosition = e;
                  var i = t ? 300 : 0,
                    o = 0,
                    r = this.$.monthScroller.position;
                  window.requestAnimationFrame(function e(t) {
                    var a,
                      s,
                      l,
                      c = t - (o = o || t);
                    if (c < i) {
                      var u = ((a = c),
                      (s = r),
                      (l = n._targetPosition - r),
                      (a /= i / 2) < 1
                        ? (l / 2) * a * a + s
                        : (-l / 2) * (--a * (a - 2) - 1) + s);
                      (n.$.monthScroller.position = u),
                        window.requestAnimationFrame(e);
                    } else n.dispatchEvent(new CustomEvent("scroll-animation-finished", { bubbles: !0, composed: !0, detail: { position: n._targetPosition, oldPosition: r } })), (n.$.monthScroller.position = n._targetPosition), (n._targetPosition = void 0);
                    setTimeout(n._repositionYearScroller.bind(n), 1);
                  });
                } else this._targetPosition = e;
              },
            },
            {
              key: "_limit",
              value: function(e, t) {
                return Math.min(t.max, Math.max(t.min, e));
              },
            },
            {
              key: "_handleTrack",
              value: function(e) {
                if (
                  !(Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10)
                ) {
                  Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3 &&
                    this._toggleAnimateClass(!0);
                  var t = this._translateX + e.detail.ddx;
                  this._translateX = this._limit(t, {
                    min: 0,
                    max: this._yearScrollerWidth,
                  });
                }
              },
            },
            {
              key: "_track",
              value: function(e) {
                if (!this._desktopMode)
                  switch (e.detail.state) {
                    case "start":
                      this._toggleAnimateClass(!1);
                      break;
                    case "track":
                      this._handleTrack(e);
                      break;
                    case "end":
                      this._toggleAnimateClass(!0),
                        this._translateX >= this._yearScrollerWidth / 2
                          ? this._closeYearScroller()
                          : this._openYearScroller();
                  }
              },
            },
            {
              key: "_toggleAnimateClass",
              value: function(e) {
                e
                  ? this.classList.add("animate")
                  : this.classList.remove("animate");
              },
            },
            {
              key: "_toggleYearScroller",
              value: function() {
                this._isYearScrollerVisible()
                  ? this._closeYearScroller()
                  : this._openYearScroller();
              },
            },
            {
              key: "_openYearScroller",
              value: function() {
                (this._translateX = 0), this.setAttribute("years-visible", "");
              },
            },
            {
              key: "_closeYearScroller",
              value: function() {
                this.removeAttribute("years-visible"),
                  (this._translateX = this._yearScrollerWidth);
              },
            },
            {
              key: "_isYearScrollerVisible",
              value: function() {
                return this._translateX < this._yearScrollerWidth / 2;
              },
            },
            {
              key: "_translateXChanged",
              value: function(e) {
                this._desktopMode ||
                  ((this.$.monthScroller.style.transform =
                    "translateX(" + (e - this._yearScrollerWidth) + "px)"),
                  (this.$.yearScroller.style.transform =
                    "translateX(" + e + "px)"));
              },
            },
            {
              key: "_yearAfterXYears",
              value: function(e) {
                var t = new Date(this._originDate);
                return (
                  t.setFullYear(parseInt(e) + this._originDate.getFullYear()),
                  t.getFullYear()
                );
              },
            },
            {
              key: "_yearAfterXMonths",
              value: function(e) {
                return this._dateAfterXMonths(e).getFullYear();
              },
            },
            {
              key: "_dateAfterXMonths",
              value: function(e) {
                var t = new Date(this._originDate);
                return (
                  t.setDate(1),
                  t.setMonth(parseInt(e) + this._originDate.getMonth()),
                  t
                );
              },
            },
            {
              key: "_differenceInMonths",
              value: function(e, t) {
                return (
                  12 * (e.getFullYear() - t.getFullYear()) -
                  t.getMonth() +
                  e.getMonth()
                );
              },
            },
            {
              key: "_differenceInYears",
              value: function(e, t) {
                return this._differenceInMonths(e, t) / 12;
              },
            },
            {
              key: "_clear",
              value: function() {
                this.selectedDate = "";
              },
            },
            {
              key: "_close",
              value: function() {
                var e = this.getRootNode().host,
                  t = e ? e.getRootNode().host : null;
                t && (t.opened = !1),
                  this.dispatchEvent(
                    new CustomEvent("close", { bubbles: !0, composed: !0 })
                  );
              },
            },
            {
              key: "_cancel",
              value: function() {
                (this.focusedDate = this.selectedDate), this._close();
              },
            },
            {
              key: "_preventDefault",
              value: function(e) {
                e.preventDefault();
              },
            },
            {
              key: "_eventKey",
              value: function(e) {
                for (
                  var t = [
                      "down",
                      "up",
                      "right",
                      "left",
                      "enter",
                      "space",
                      "home",
                      "end",
                      "pageup",
                      "pagedown",
                      "tab",
                      "esc",
                    ],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n];
                  if (Ee.a.keyboardEventMatchesKeys(e, i)) return i;
                }
              },
            },
            {
              key: "_onKeydown",
              value: function(e) {
                var t = this,
                  n = this._currentlyFocusedDate(),
                  i = e.composedPath().indexOf(this.$.todayButton) >= 0,
                  o = e.composedPath().indexOf(this.$.cancelButton) >= 0,
                  r = !i && !o,
                  a = this._eventKey(e);
                if ("tab" === a) {
                  e.stopPropagation();
                  var s = this.hasAttribute("fullscreen"),
                    l = e.shiftKey;
                  s
                    ? e.preventDefault()
                    : (l && r) || (!l && o)
                    ? (e.preventDefault(),
                      this.dispatchEvent(
                        new CustomEvent("focus-input", {
                          bubbles: !0,
                          composed: !0,
                        })
                      ))
                    : l && i
                    ? ((this._focused = !0),
                      setTimeout(function() {
                        return t.revealDate(t.focusedDate);
                      }, 1))
                    : (this._focused = !1);
                } else if (a)
                  switch ((e.preventDefault(), e.stopPropagation(), a)) {
                    case "down":
                      this._moveFocusByDays(7), this.focus();
                      break;
                    case "up":
                      this._moveFocusByDays(-7), this.focus();
                      break;
                    case "right":
                      r && this._moveFocusByDays(1);
                      break;
                    case "left":
                      r && this._moveFocusByDays(-1);
                      break;
                    case "enter":
                      r || o ? this._close() : i && this._onTodayTap();
                      break;
                    case "space":
                      if (o) this._close();
                      else if (i) this._onTodayTap();
                      else {
                        var c = this.focusedDate;
                        ze._dateEquals(c, this.selectedDate)
                          ? ((this.selectedDate = ""), (this.focusedDate = c))
                          : (this.selectedDate = c);
                      }
                      break;
                    case "home":
                      this._moveFocusInsideMonth(n, "minDate");
                      break;
                    case "end":
                      this._moveFocusInsideMonth(n, "maxDate");
                      break;
                    case "pagedown":
                      this._moveFocusByMonths(e.shiftKey ? 12 : 1);
                      break;
                    case "pageup":
                      this._moveFocusByMonths(e.shiftKey ? -12 : -1);
                      break;
                    case "esc":
                      this._cancel();
                  }
              },
            },
            {
              key: "_currentlyFocusedDate",
              value: function() {
                return (
                  this.focusedDate ||
                  this.selectedDate ||
                  this.initialPosition ||
                  new Date()
                );
              },
            },
            {
              key: "_focusDate",
              value: function(e) {
                (this.focusedDate = e), (this._focusedMonthDate = e.getDate());
              },
            },
            {
              key: "_focusClosestDate",
              value: function(e) {
                this._focusDate(
                  ze._getClosestDate(e, [this.minDate, this.maxDate])
                );
              },
            },
            {
              key: "_moveFocusByDays",
              value: function(e) {
                var t = this._currentlyFocusedDate(),
                  n = new Date(0, 0);
                n.setFullYear(t.getFullYear()),
                  n.setMonth(t.getMonth()),
                  n.setDate(t.getDate() + e),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? this._focusDate(n)
                    : this._dateAllowed(t, this.minDate, this.maxDate)
                    ? e > 0
                      ? this._focusDate(this.maxDate)
                      : this._focusDate(this.minDate)
                    : this._focusClosestDate(t);
              },
            },
            {
              key: "_moveFocusByMonths",
              value: function(e) {
                var t = this._currentlyFocusedDate(),
                  n = new Date(0, 0);
                n.setFullYear(t.getFullYear()), n.setMonth(t.getMonth() + e);
                var i = n.getMonth();
                n.setDate(
                  this._focusedMonthDate ||
                    (this._focusedMonthDate = t.getDate())
                ),
                  n.getMonth() !== i && n.setDate(0),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? (this.focusedDate = n)
                    : this._dateAllowed(t, this.minDate, this.maxDate)
                    ? e > 0
                      ? this._focusDate(this.maxDate)
                      : this._focusDate(this.minDate)
                    : this._focusClosestDate(t);
              },
            },
            {
              key: "_moveFocusInsideMonth",
              value: function(e, t) {
                var n = new Date(0, 0);
                n.setFullYear(e.getFullYear()),
                  "minDate" === t
                    ? (n.setMonth(e.getMonth()), n.setDate(1))
                    : (n.setMonth(e.getMonth() + 1), n.setDate(0)),
                  this._dateAllowed(n, this.minDate, this.maxDate)
                    ? this._focusDate(n)
                    : this._dateAllowed(e, this.minDate, this.maxDate)
                    ? this._focusDate(this[t])
                    : this._focusClosestDate(e);
              },
            },
            {
              key: "_dateAllowed",
              value: function(e, t, n) {
                return (!t || e >= t) && (!n || e <= n);
              },
            },
            {
              key: "_isTodayAllowed",
              value: function(e, t) {
                var n = new Date(),
                  i = new Date(0, 0);
                return (
                  i.setFullYear(n.getFullYear()),
                  i.setMonth(n.getMonth()),
                  i.setDate(n.getDate()),
                  this._dateAllowed(i, e, t)
                );
              },
            },
            {
              key: "_stopPropagation",
              value: function(e) {
                e.stopPropagation();
              },
            },
          ]) && Qe(n.prototype, o),
          r && Qe(n, r),
          t
        );
      })();
      customElements.define(ot.is, ot);
      var rt = n(95),
        at = n(70);
      function st(e) {
        return (st =
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
      function lt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ct(e, t) {
        return !t || ("object" !== st(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function ut(e, t, n) {
        return (ut =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = dt(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function dt(e) {
        return (dt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function pt(e, t) {
        return (pt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var ht = function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ct(this, dt(n).apply(this, arguments))
            );
          }
          var i, o, r;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && pt(e, t);
            })(n, Object(at["b"])([rt["a"]], e)),
            (i = n),
            (r = [
              {
                key: "properties",
                get: function() {
                  return {
                    _selectedDate: { type: Date },
                    _focusedDate: Date,
                    value: {
                      type: String,
                      observer: "_valueChanged",
                      notify: !0,
                      value: "",
                    },
                    required: { type: Boolean, value: !1 },
                    name: { type: String },
                    initialPosition: String,
                    label: String,
                    opened: {
                      type: Boolean,
                      reflectToAttribute: !0,
                      notify: !0,
                      observer: "_openedChanged",
                    },
                    showWeekNumbers: { type: Boolean },
                    _fullscreen: { value: !1, observer: "_fullscreenChanged" },
                    _fullscreenMediaQuery: {
                      value: "(max-width: 420px), (max-height: 420px)",
                    },
                    _touchPrevented: Array,
                    i18n: {
                      type: Object,
                      value: function() {
                        return {
                          monthNames: [
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
                          weekdays: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ],
                          weekdaysShort: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ],
                          firstDayOfWeek: 0,
                          week: "Week",
                          calendar: "Calendar",
                          clear: "Clear",
                          today: "Today",
                          cancel: "Cancel",
                          formatDate: function(e) {
                            var t = String(e.year).replace(/\d+/, function(e) {
                              return "0000".substr(e.length) + e;
                            });
                            return [e.month + 1, e.day, t].join("/");
                          },
                          parseDate: function(e) {
                            var t,
                              n = e.split("/"),
                              i = new Date(),
                              o = i.getMonth(),
                              r = i.getFullYear();
                            if (
                              (3 === n.length
                                ? ((r = parseInt(n[2])),
                                  n[2].length < 3 &&
                                    r >= 0 &&
                                    (r += r < 50 ? 2e3 : 1900),
                                  (o = parseInt(n[0]) - 1),
                                  (t = parseInt(n[1])))
                                : 2 === n.length
                                ? ((o = parseInt(n[0]) - 1),
                                  (t = parseInt(n[1])))
                                : 1 === n.length && (t = parseInt(n[0])),
                              void 0 !== t)
                            )
                              return { day: t, month: o, year: r };
                          },
                          formatTitle: function(e, t) {
                            return e + " " + t;
                          },
                        };
                      },
                    },
                    min: { type: String, observer: "_minChanged" },
                    max: { type: String, observer: "_maxChanged" },
                    _minDate: { type: Date, value: "" },
                    _maxDate: { type: Date, value: "" },
                    _noInput: {
                      type: Boolean,
                      computed: "_isNoInput(_fullscreen, _ios, i18n, i18n.*)",
                    },
                    _ios: {
                      type: Boolean,
                      value: navigator.userAgent.match(
                        /iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/
                      ),
                    },
                    _webkitOverflowScroll: {
                      type: Boolean,
                      value:
                        "" ===
                        document.createElement("div").style
                          .webkitOverflowScrolling,
                    },
                    _ignoreAnnounce: { value: !0 },
                    _focusOverlayOnOpen: Boolean,
                    _overlayInitialized: Boolean,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_updateHasValue(value)",
                    "_validateInput(_selectedDate, _minDate, _maxDate)",
                    "_selectedDateChanged(_selectedDate, i18n.formatDate)",
                    "_focusedDateChanged(_focusedDate, i18n.formatDate)",
                    "_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)",
                  ];
                },
              },
            ]),
            (o = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  ut(dt(n.prototype), "ready", this).call(this),
                    (this._boundOnScroll = this._onScroll.bind(this)),
                    (this._boundFocus = this._focus.bind(this)),
                    (this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(
                      this
                    )),
                    Object(F.b)(this, "tap", this.open),
                    this.addEventListener(
                      "touchend",
                      this._preventDefault.bind(this)
                    ),
                    this.addEventListener(
                      "keydown",
                      this._onKeydown.bind(this)
                    ),
                    this.addEventListener(
                      "input",
                      this._onUserInput.bind(this)
                    ),
                    this.addEventListener("focus", function(t) {
                      return e._noInput && t.target.blur();
                    });
                },
              },
              {
                key: "_initOverlay",
                value: function() {
                  var e = this;
                  this.$.overlay.removeAttribute("disable-upgrade"),
                    (this._overlayInitialized = !0),
                    this.$.overlay.addEventListener("opened-changed", function(
                      t
                    ) {
                      return (e.opened = t.detail.value);
                    }),
                    this._overlayContent.addEventListener(
                      "close",
                      this._close.bind(this)
                    ),
                    this._overlayContent.addEventListener(
                      "focus-input",
                      this._focusAndSelect.bind(this)
                    ),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-escape-press",
                      this._boundFocus
                    ),
                    this._overlayContent.addEventListener("focus", function() {
                      return e.focusElement._setFocused(!0);
                    }),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-close",
                      this._onVaadinOverlayClose.bind(this)
                    );
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  ut(dt(n.prototype), "disconnectedCallback", this).call(this),
                    this._overlayInitialized &&
                      this.$.overlay.removeEventListener(
                        "vaadin-overlay-escape-press",
                        this._boundFocus
                      ),
                    (this.opened = !1);
                },
              },
              {
                key: "open",
                value: function() {
                  this.disabled || this.readonly || (this.opened = !0);
                },
              },
              {
                key: "_close",
                value: function(e) {
                  e && e.stopPropagation(), this._focus(), this.close();
                },
              },
              {
                key: "close",
                value: function() {
                  this._overlayInitialized && this.$.overlay.close();
                },
              },
              {
                key: "_parseDate",
                value: function(e) {
                  var t = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(
                    e
                  );
                  if (t) {
                    var n = new Date(0, 0);
                    return (
                      n.setFullYear(parseInt(t[1], 10)),
                      n.setMonth(parseInt(t[2], 10) - 1),
                      n.setDate(parseInt(t[3], 10)),
                      n
                    );
                  }
                },
              },
              {
                key: "_isNoInput",
                value: function(e, t, n) {
                  return !this._inputElement || e || t || !n.parseDate;
                },
              },
              {
                key: "_formatISO",
                value: function(e) {
                  if (!(e instanceof Date)) return "";
                  var t = function(e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "00";
                      return (t + e).substr((t + e).length - t.length);
                    },
                    n = "",
                    i = "0000",
                    o = e.getFullYear();
                  return (
                    o < 0
                      ? ((o = -o), (n = "-"), (i = "000000"))
                      : e.getFullYear() >= 1e4 && ((n = "+"), (i = "000000")),
                    [n + t(o, i), t(e.getMonth() + 1), t(e.getDate())].join("-")
                  );
                },
              },
              {
                key: "_openedChanged",
                value: function(e) {
                  e && !this._overlayInitialized && this._initOverlay(),
                    this._overlayInitialized && (this.$.overlay.opened = e),
                    e && this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_selectedDateChanged",
                value: function(e, t) {
                  if (void 0 !== e && void 0 !== t) {
                    this.__userInputOccurred && (this.__dispatchChange = !0);
                    var n = e && t(ze._extractDateParts(e)),
                      i = this._formatISO(e);
                    i !== this.value && (this.validate(n), (this.value = i)),
                      (this.__userInputOccurred = !1),
                      (this.__dispatchChange = !1),
                      (this._focusedDate = e),
                      (this._inputValue = e ? n : "");
                  }
                },
              },
              {
                key: "_focusedDateChanged",
                value: function(e, t) {
                  void 0 !== e &&
                    void 0 !== t &&
                    ((this.__userInputOccurred = !0),
                    this._ignoreFocusedDateChange ||
                      this._noInput ||
                      (this._inputValue = e ? t(ze._extractDateParts(e)) : ""));
                },
              },
              {
                key: "_updateHasValue",
                value: function(e) {
                  e
                    ? this.setAttribute("has-value", "")
                    : this.removeAttribute("has-value");
                },
              },
              {
                key: "_handleDateChange",
                value: function(e, t, n) {
                  if (t) {
                    var i = this._parseDate(t);
                    i
                      ? ze._dateEquals(this[e], i) || (this[e] = i)
                      : (this.value = n);
                  } else this[e] = "";
                },
              },
              {
                key: "_valueChanged",
                value: function(e, t) {
                  this.__dispatchChange &&
                    this.dispatchEvent(
                      new CustomEvent("change", { bubbles: !0 })
                    ),
                    this._handleDateChange("_selectedDate", e, t);
                },
              },
              {
                key: "_minChanged",
                value: function(e, t) {
                  this._handleDateChange("_minDate", e, t);
                },
              },
              {
                key: "_maxChanged",
                value: function(e, t) {
                  this._handleDateChange("_maxDate", e, t);
                },
              },
              {
                key: "_updateAlignmentAndPosition",
                value: function() {
                  if (this._overlayInitialized) {
                    if (!this._fullscreen) {
                      var e = this._inputElement.getBoundingClientRect(),
                        t = e.top > window.innerHeight / 2;
                      if (
                        e.left + this.clientWidth / 2 >
                        window.innerWidth / 2
                      ) {
                        var n = Math.min(
                          window.innerWidth,
                          document.documentElement.clientWidth
                        );
                        this.$.overlay.setAttribute("right-aligned", ""),
                          this.$.overlay.style.removeProperty("left"),
                          (this.$.overlay.style.right = n - e.right + "px");
                      } else
                        this.$.overlay.removeAttribute("right-aligned"),
                          this.$.overlay.style.removeProperty("right"),
                          (this.$.overlay.style.left = e.left + "px");
                      if (t) {
                        var i = Math.min(
                          window.innerHeight,
                          document.documentElement.clientHeight
                        );
                        this.$.overlay.setAttribute("bottom-aligned", ""),
                          this.$.overlay.style.removeProperty("top"),
                          (this.$.overlay.style.bottom = i - e.top + "px");
                      } else
                        this.$.overlay.removeAttribute("bottom-aligned"),
                          this.$.overlay.style.removeProperty("bottom"),
                          (this.$.overlay.style.top = e.bottom + "px");
                    }
                    this.$.overlay.setAttribute(
                      "dir",
                      getComputedStyle(this._inputElement).getPropertyValue(
                        "direction"
                      )
                    ),
                      this._overlayContent._repositionYearScroller();
                  }
                },
              },
              {
                key: "_fullscreenChanged",
                value: function() {
                  this._overlayInitialized &&
                    this.$.overlay.opened &&
                    this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_onOverlayOpened",
                value: function() {
                  this._openedWithFocusRing =
                    this.hasAttribute("focus-ring") ||
                    (this.focusElement &&
                      this.focusElement.hasAttribute("focus-ring"));
                  var e = this._parseDate(this.initialPosition),
                    t =
                      this._selectedDate ||
                      this._overlayContent.initialPosition ||
                      e ||
                      new Date();
                  e || ze._dateAllowed(t, this._minDate, this._maxDate)
                    ? (this._overlayContent.initialPosition = t)
                    : (this._overlayContent.initialPosition = ze._getClosestDate(
                        t,
                        [this._minDate, this._maxDate]
                      )),
                    this._overlayContent.scrollToDate(
                      this._overlayContent.focusedDate ||
                        this._overlayContent.initialPosition
                    ),
                    (this._ignoreFocusedDateChange = !0),
                    (this._overlayContent.focusedDate =
                      this._overlayContent.focusedDate ||
                      this._overlayContent.initialPosition),
                    (this._ignoreFocusedDateChange = !1),
                    window.addEventListener("scroll", this._boundOnScroll, !0),
                    this.addEventListener(
                      "iron-resize",
                      this._boundUpdateAlignmentAndPosition
                    ),
                    this._webkitOverflowScroll &&
                      (this._touchPrevented = this._preventWebkitOverflowScrollingTouch(
                        this.parentElement
                      )),
                    this._focusOverlayOnOpen
                      ? (this._overlayContent.focus(),
                        (this._focusOverlayOnOpen = !1))
                      : this._focus(),
                    this._noInput &&
                      this.focusElement &&
                      this.focusElement.blur(),
                    this.updateStyles(),
                    (this._ignoreAnnounce = !1);
                },
              },
              {
                key: "_preventWebkitOverflowScrollingTouch",
                value: function(e) {
                  for (var t = []; e; ) {
                    if (
                      "touch" ===
                      window.getComputedStyle(e).webkitOverflowScrolling
                    ) {
                      var n = e.style.webkitOverflowScrolling;
                      (e.style.webkitOverflowScrolling = "auto"),
                        t.push({ element: e, oldInlineValue: n });
                    }
                    e = e.parentElement;
                  }
                  return t;
                },
              },
              {
                key: "_onOverlayClosed",
                value: function() {
                  if (
                    ((this._ignoreAnnounce = !0),
                    window.removeEventListener(
                      "scroll",
                      this._boundOnScroll,
                      !0
                    ),
                    this.removeEventListener(
                      "iron-resize",
                      this._boundUpdateAlignmentAndPosition
                    ),
                    this._touchPrevented &&
                      (this._touchPrevented.forEach(function(e) {
                        return (e.element.style.webkitOverflowScrolling =
                          e.oldInlineValue);
                      }),
                      (this._touchPrevented = [])),
                    this.updateStyles(),
                    (this._ignoreFocusedDateChange = !0),
                    this.i18n.parseDate)
                  ) {
                    var e = this._inputValue || "",
                      t = this.i18n.parseDate(e),
                      n =
                        t &&
                        this._parseDate(
                          ""
                            .concat(t.year, "-")
                            .concat(t.month + 1, "-")
                            .concat(t.day)
                        );
                    this._isValidDate(n)
                      ? (this._selectedDate = n)
                      : ((this._selectedDate = null), (this._inputValue = e));
                  } else
                    this._focusedDate &&
                      (this._selectedDate = this._focusedDate);
                  (this._ignoreFocusedDateChange = !1),
                    this._nativeInput &&
                      this._nativeInput.selectionStart &&
                      (this._nativeInput.selectionStart = this._nativeInput.selectionEnd),
                    this.validate();
                },
              },
              {
                key: "validate",
                value: function(e) {
                  return (
                    (this.invalid = !1),
                    (e = void 0 !== e ? e : this._inputValue),
                    !(this.invalid = !this.checkValidity(e))
                  );
                },
              },
              {
                key: "checkValidity",
                value: function(e) {
                  var t =
                      !e ||
                      (this._selectedDate &&
                        e ===
                          this.i18n.formatDate(
                            ze._extractDateParts(this._selectedDate)
                          )),
                    n =
                      !this._selectedDate ||
                      ze._dateAllowed(
                        this._selectedDate,
                        this._minDate,
                        this._maxDate
                      ),
                    i = !0;
                  return (
                    this._inputElement &&
                      (this._inputElement.checkValidity
                        ? (i = this._inputElement.checkValidity(e))
                        : this._inputElement.validate &&
                          (i = this._inputElement.validate(e))),
                    t && n && i
                  );
                },
              },
              {
                key: "_onScroll",
                value: function(e) {
                  (e.target !== window &&
                    this._overlayContent.contains(e.target)) ||
                    this._updateAlignmentAndPosition();
                },
              },
              {
                key: "_focus",
                value: function() {
                  this._noInput
                    ? this._overlayInitialized && this._overlayContent.focus()
                    : this._inputElement.focus();
                },
              },
              {
                key: "_focusAndSelect",
                value: function() {
                  this._focus(),
                    this._setSelectionRange(0, this._inputValue.length);
                },
              },
              {
                key: "_setSelectionRange",
                value: function(e, t) {
                  this._nativeInput &&
                    this._nativeInput.setSelectionRange &&
                    this._nativeInput.setSelectionRange(e, t);
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: "_eventKey",
                value: function(e) {
                  for (
                    var t = ["down", "up", "enter", "esc", "tab"], n = 0;
                    n < t.length;
                    n++
                  ) {
                    var i = t[n];
                    if (Ee.a.keyboardEventMatchesKeys(e, i)) return i;
                  }
                },
              },
              {
                key: "_isValidDate",
                value: function(e) {
                  return e && !isNaN(e.getTime());
                },
              },
              {
                key: "_onKeydown",
                value: function(e) {
                  if (this._noInput) {
                    -1 === [9].indexOf(e.keyCode) && e.preventDefault();
                  }
                  switch (this._eventKey(e)) {
                    case "down":
                    case "up":
                      e.preventDefault(),
                        this.opened
                          ? (this._overlayContent.focus(),
                            this._overlayContent._onKeydown(e))
                          : ((this._focusOverlayOnOpen = !0), this.open());
                      break;
                    case "enter":
                      var t = this.i18n.parseDate(this._inputValue),
                        n =
                          t &&
                          this._parseDate(
                            t.year + "-" + (t.month + 1) + "-" + t.day
                          );
                      this._overlayContent.focusedDate &&
                        this._isValidDate(n) &&
                        (this._selectedDate = this._overlayContent.focusedDate),
                        this.close();
                      break;
                    case "esc":
                      (this._focusedDate = this._selectedDate), this._close();
                      break;
                    case "tab":
                      this.opened &&
                        (e.preventDefault(),
                        this._setSelectionRange(0, 0),
                        e.shiftKey
                          ? this._overlayContent.focusCancel()
                          : (this._overlayContent.focus(),
                            this._overlayContent.revealDate(
                              this._focusedDate
                            )));
                  }
                },
              },
              {
                key: "_validateInput",
                value: function(e, t, n) {
                  e && (t || n) && (this.invalid = !ze._dateAllowed(e, t, n));
                },
              },
              {
                key: "_onUserInput",
                value: function(e) {
                  this.opened || this.open(), this._userInputValueChanged();
                },
              },
              {
                key: "_userInputValueChanged",
                value: function(e) {
                  if (this.opened && this._inputValue) {
                    var t =
                        this.i18n.parseDate &&
                        this.i18n.parseDate(this._inputValue),
                      n =
                        t &&
                        this._parseDate(
                          ""
                            .concat(t.year, "-")
                            .concat(t.month + 1, "-")
                            .concat(t.day)
                        );
                    this._isValidDate(n) &&
                      ((this._ignoreFocusedDateChange = !0),
                      ze._dateEquals(n, this._focusedDate) ||
                        (this._focusedDate = n),
                      (this._ignoreFocusedDateChange = !1));
                  }
                },
              },
              {
                key: "_announceFocusedDate",
                value: function(e, t, n) {
                  t && !n && this._overlayContent.announceFocusedDate();
                },
              },
              {
                key: "_inputElement",
                get: function() {
                  return this._input();
                },
              },
              {
                key: "_nativeInput",
                get: function() {
                  if (this._inputElement)
                    return this._inputElement.focusElement
                      ? this._inputElement.focusElement
                      : this._inputElement.inputElement
                      ? this._inputElement.inputElement
                      : window.unwrap
                      ? window.unwrap(this._inputElement)
                      : this._inputElement;
                },
              },
              {
                key: "_overlayContent",
                get: function() {
                  return this.$.overlay.content.querySelector(
                    "#overlay-content"
                  );
                },
              },
            ]) && lt(i.prototype, o),
            r && lt(i, r),
            n
          );
        })();
      };
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
      function mt() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part="text-field"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part="clear-button"],\n      :host([readonly]) [part="clear-button"],\n      :host(:not([has-value])) [part="clear-button"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label$="[[label]]" part="text-field" theme$="[[theme]]">\n      <slot name="prefix" slot="prefix"></slot>\n      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label$="[[i18n.clear]]"></div>\n      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label$="[[i18n.calendar]]" aria-expanded$="[[_getAriaExpanded(opened)]]"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id="overlay" fullscreen$="[[_fullscreen]]" theme$="[[theme]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">\n      <template>\n        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme$="[[theme]]">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">\n    </iron-media-query>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part="text-field"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part="clear-button"],\n      :host([readonly]) [part="clear-button"],\n      :host(:not([has-value])) [part="clear-button"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" aria-label\\$="[[label]]" part="text-field" theme\\$="[[theme]]">\n      <slot name="prefix" slot="prefix"></slot>\n      <div part="clear-button" slot="suffix" on-touchend="_clearTouchend" on-click="_clear" role="button" aria-label\\$="[[i18n.clear]]"></div>\n      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\\$="[[i18n.calendar]]" aria-expanded\\$="[[_getAriaExpanded(opened)]]"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id="overlay" fullscreen\\$="[[_fullscreen]]" theme\\$="[[theme]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">\n      <template>\n        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\\$="[[theme]]">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">\n    </iron-media-query>\n',
          ]
        );
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function vt(e, t) {
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
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = gt(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
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
      function _t(e, t) {
        return (_t =
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
            vt(this, gt(t).apply(this, arguments))
          );
        }
        var n, o, r;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _t(e, t);
          })(
            t,
            $(w(Object(u["a"])(Object(_e["a"])(ht(Object(c["a"])(l["a"]))))))
          ),
          (n = t),
          (r = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(mt());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-date-picker";
              },
            },
            {
              key: "version",
              get: function() {
                return "3.3.3";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  disabled: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  errorMessage: String,
                  placeholder: String,
                  readonly: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  invalid: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    notify: !0,
                    value: !1,
                  },
                  _userInputValue: String,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["_userInputValueChanged(_userInputValue)"];
              },
            },
          ]),
          (o = [
            {
              key: "ready",
              value: function() {
                var e = this;
                bt(gt(t.prototype), "ready", this).call(this),
                  Object(Ye.a)(this, function() {
                    return (e._inputElement.validate = function() {});
                  });
              },
            },
            {
              key: "_onVaadinOverlayClose",
              value: function(e) {
                this._openedWithFocusRing && this.hasAttribute("focused")
                  ? this.focusElement.setAttribute("focus-ring", "")
                  : this.hasAttribute("focused") || this.focusElement.blur(),
                  e.detail.sourceEvent &&
                    -1 !== e.detail.sourceEvent.composedPath().indexOf(this) &&
                    e.preventDefault();
              },
            },
            {
              key: "_clear",
              value: function() {
                (this.__dispatchChange = !0),
                  (this.value = ""),
                  this.validate(),
                  this.focus(),
                  Object(F.d)("tap"),
                  (this.__dispatchChange = !1);
              },
            },
            {
              key: "_clearTouchend",
              value: function(e) {
                this._clear(), e.preventDefault(), Object(F.d)("tap");
              },
            },
            {
              key: "_toggle",
              value: function(e) {
                e.stopPropagation(),
                  this[
                    this._overlayInitialized && this.$.overlay.opened
                      ? "close"
                      : "open"
                  ]();
              },
            },
            {
              key: "_input",
              value: function() {
                return this.$.input;
              },
            },
            {
              key: "_getAriaExpanded",
              value: function(e) {
                return Boolean(e).toString();
              },
            },
            {
              key: "_inputValue",
              set: function(e) {
                this._inputElement.value = e;
              },
              get: function() {
                return this._inputElement.value;
              },
            },
            {
              key: "focusElement",
              get: function() {
                return this._input() || this;
              },
            },
          ]) && yt(n.prototype, o),
          r && yt(n, r),
          t
        );
      })();
      customElements.define(wt.is, wt);
    },
    391: function(e, t) {
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<dom-module id="ha-date-picker-vaadin-date-picker-styles" theme-for="vaadin-date-picker">\n  <template>\n    <style>\n      :host([required]) [part~="clear-button"] {\n        display: none;\n      }\n\n      [part~="toggle-button"] {\n        color: var(--secondary-text-color);\n        font-size: var(--paper-font-subhead_-_font-size);\n        margin-right: 5px;\n      }\n\n      :host([opened]) [part~="toggle-button"] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">\n  <template>\n    <style>\n      :host {\n        padding: 8px 0;\n      }\n\n      [part~="label"] {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        font-family: var(--paper-font-caption_-_font-family);\n        font-size: var(--paper-font-caption_-_font-size);\n        font-weight: var(--paper-font-caption_-_font-weight);\n        letter-spacing: var(--paper-font-caption_-_letter-spacing);\n        line-height: var(--paper-font-caption_-_line-height);\n      }\n      :host([focused]) [part~="label"] {\n          color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n\n      [part~="input-field"] {\n        padding-bottom: 1px;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        line-height: var(--paper-font-subhead_-_line-height);\n      }\n\n      :host([focused]) [part~="input-field"] {\n        padding-bottom: 0;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      [part~="value"]:focus {\n        outline: none;\n      }\n\n      [part~="value"] {\n        font-size: var(--paper-font-subhead_-_font-size);\n        font-family: inherit;\n        color: inherit;\n        border: none;\n        background: transparent;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">\n  <template>\n    <style>\n      :host([part~="today-button"]) [part~="button"]::before {\n        content: "⦿";\n        color: var(--primary-color);\n      }\n\n      [part~="button"] {\n        font-family: inherit;\n        font-size: var(--paper-font-subhead_-_font-size);\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n        color: inherit;\n      }\n\n      [part~="button"]:focus {\n        outline: none;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style include="vaadin-date-picker-overlay-default-theme">\n      :host {\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n      }\n\n      [part~="toolbar"] {\n        padding: 0.3em;\n        background-color: var(--secondary-background-color);\n      }\n\n      [part="years"] {\n        background-color: var(--paper-grey-200);\n      }\n\n    </style>\n  </template>\n</dom-module><dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">\n  <template>\n    <style include="vaadin-month-calendar-default-theme">\n      :host([focused]) [part="date"][focused],\n      [part="date"][selected] {\n        background-color: var(--paper-grey-200);\n      }\n      [part="date"][today] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(n.content);
    },
    662: function(e, t, n) {
      "use strict";
      n.r(t);
      n(198), n(216), n(145), n(141), n(106), n(90), n(138), n(139);
      var i = n(3),
        o = n(25),
        r = (n(333), n(126), n(260), n(261), n(391), n(92), n(232)),
        a = n(171),
        s = n(93);
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
          '\n      <style include="iron-flex ha-style">\n        .content {\n          padding: 0 16px 16px;\n        }\n\n        vaadin-date-picker {\n          margin-right: 16px;\n          max-width: 200px;\n        }\n\n        paper-dropdown-menu {\n          max-width: 100px;\n          margin-top: 13px;\n          margin-right: 16px;\n          --paper-input-container-label-floating: {\n            padding-bottom: 10px;\n          }\n        }\n\n        :host([rtl]) paper-dropdown-menu {\n          text-align: right;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <ha-state-history-data\n        hass="[[hass]]"\n        filter-type="[[_filterType]]"\n        start-time="[[_computeStartTime(_currentDate)]]"\n        end-time="[[endTime]]"\n        data="{{stateHistory}}"\n        is-loading="{{isLoadingData}}"\n      ></ha-state-history-data>\n      <app-header-layout has-scrolling-region>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.history\')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class="flex content">\n          <div class="flex layout horizontal wrap">\n            <vaadin-date-picker\n              id="picker"\n              value="{{_currentDate}}"\n              label="[[localize(\'ui.panel.history.showing_entries\')]]"\n              disabled="[[isLoadingData]]"\n              required\n            ></vaadin-date-picker>\n\n            <paper-dropdown-menu\n              label-float\n              label="[[localize(\'ui.panel.history.period\')]]"\n              disabled="[[isLoadingData]]"\n            >\n              <paper-listbox\n                slot="dropdown-content"\n                selected="{{_periodIndex}}"\n              >\n                <paper-item\n                  >[[localize(\'ui.duration.day\', \'count\', 1)]]</paper-item\n                >\n                <paper-item\n                  >[[localize(\'ui.duration.day\', \'count\', 3)]]</paper-item\n                >\n                <paper-item\n                  >[[localize(\'ui.duration.week\', \'count\', 1)]]</paper-item\n                >\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          <state-history-charts\n            hass="[[hass]]"\n            history-data="[[stateHistory]]"\n            is-loading-data="[[isLoadingData]]"\n            end-time="[[endTime]]"\n            no-single\n          >\n          </state-history-charts>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function d(e, t) {
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
      function p(e, t, n) {
        return (p =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = h(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
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
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            d(this, h(t).apply(this, arguments))
          );
        }
        var n, l, m;
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
          })(t, Object(a["a"])(o["a"])),
          (n = t),
          (m = [
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
                  hass: Object,
                  narrow: Boolean,
                  stateHistory: { type: Object, value: null },
                  _periodIndex: { type: Number, value: 0 },
                  isLoadingData: { type: Boolean, value: !1 },
                  endTime: {
                    type: Object,
                    computed: "_computeEndTime(_currentDate, _periodIndex)",
                  },
                  _currentDate: {
                    type: String,
                    value: function() {
                      var e = new Date();
                      return new Date(
                        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
                      )
                        .toISOString()
                        .split("T")[0];
                    },
                  },
                  _filterType: { type: String, value: "date" },
                  rtl: {
                    type: Boolean,
                    reflectToAttribute: !0,
                    computed: "_computeRTL(hass)",
                  },
                };
              },
            },
          ]),
          (l = [
            {
              key: "datepickerFocus",
              value: function() {
                this.datePicker.adjustPosition();
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                var e = this;
                p(h(t.prototype), "connectedCallback", this).call(this),
                  this.$.picker.set("i18n.parseDate", null),
                  this.$.picker.set("i18n.formatDate", function(t) {
                    return Object(
                      r.a
                    )(new Date(t.year, t.month, t.day), e.hass.language);
                  });
              },
            },
            {
              key: "_computeStartTime",
              value: function(e) {
                if (e) {
                  var t = e.split("-");
                  return (
                    (t[1] = parseInt(t[1]) - 1), new Date(t[0], t[1], t[2])
                  );
                }
              },
            },
            {
              key: "_computeEndTime",
              value: function(e, t) {
                var n = this._computeStartTime(e),
                  i = new Date(n);
                return i.setDate(n.getDate() + this._computeFilterDays(t)), i;
              },
            },
            {
              key: "_computeFilterDays",
              value: function(e) {
                switch (e) {
                  case 1:
                    return 3;
                  case 2:
                    return 7;
                  default:
                    return 1;
                }
              },
            },
            {
              key: "_computeRTL",
              value: function(e) {
                return Object(s.a)(e);
              },
            },
          ]) && u(n.prototype, l),
          m && u(n, m),
          t
        );
      })();
      customElements.define("ha-panel-history", m);
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var i = n(59),
        o = (n(40), n(5)),
        r = n(3),
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
      Object(o.a)({
        is: "paper-input",
        _template: Object(r.a)(s()),
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
//# sourceMappingURL=chunk.3e053facf17675bd2a77.js.map
