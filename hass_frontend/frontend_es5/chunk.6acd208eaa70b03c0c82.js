/*! For license information please see chunk.6acd208eaa70b03c0c82.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [103, 5, 106, 107],
  {
    111: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(91),
        r = n(60),
        o = n(5),
        s = n(1),
        a = n(3);
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
        _template: Object(a.a)(l()),
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
          this._observer = Object(s.a)(this).observeNodes(
            function(e) {
              this._initSlottedInput();
            }.bind(this)
          );
        },
        detached: function() {
          this._observer &&
            (Object(s.a)(this).unobserveNodes(this._observer),
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
              for (var r, o = 0; (r = i[o]); o++)
                if (r.animatable)
                  r.animatable._getAnimationConfigRecursive(r.type || e, t, n);
                else if (r.id) {
                  var s = t[r.id];
                  s
                    ? (s.isClone ||
                        ((t[r.id] = this._cloneConfig(s)), (s = t[r.id])),
                      this._copyProperties(s, r))
                    : (t[r.id] = r);
                } else n.push(r);
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
        return r;
      });
      var r = [
        i,
        {
          _configureAnimations: function(e) {
            var t = [],
              n = [];
            if (e.length > 0)
              for (var i, r = 0; (i = e[r]); r++) {
                var o = document.createElement(i.name);
                if (o.isNeonAnimation) {
                  var s;
                  o.configure ||
                    (o.configure = function(e) {
                      return null;
                    }),
                    (s = o.configure(i)),
                    n.push({ result: s, config: i, neonAnimation: o });
                } else console.warn(this.is + ":", i.name, "not found!");
              }
            for (var a = 0; a < n.length; a++) {
              var l = n[a].result,
                c = n[a].config,
                u = n[a].neonAnimation;
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
                for (var r = 0; r < i.length; r++)
                  i[r].animation.onfinish = function() {
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
    139: function(e, t, n) {
      "use strict";
      n(4), n(41);
      var i = n(121),
        r = n(5),
        o = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n",
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(o.a)(s()),
        is: "paper-listbox",
        behaviors: [i.a],
        hostAttributes: { role: "listbox" },
      });
    },
    142: function(e, t, n) {
      "use strict";
      n(4);
      var i = n(31),
        r = n(34),
        o = n(84),
        s = n(119),
        a = n(5),
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
      Object(a.a)({
        _template: Object(c.a)(u()),
        is: "iron-dropdown",
        behaviors: [r.a, i.a, o.a, s.a],
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
              r = {
                transform: ["webkitTransform"],
                transformOrigin: [
                  "mozTransformOrigin",
                  "webkitTransformOrigin",
                ],
              }[t],
              o = 0;
            (i = r[o]);
            o++
          )
            e.style[i] = n;
          e.style[t] = n;
        },
        complete: function(e) {},
      };
      Object(a.a)({
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
        Object(a.a)({
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
      function h() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n',
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
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
        Object(a.a)({
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
        Object(a.a)({
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
        Object(a.a)({
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
      var p = {
          ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
          MAX_ANIMATION_TIME_MS: 400,
        },
        f = Object(a.a)({
          _template: Object(c.a)(h()),
          is: "paper-menu-button",
          behaviors: [i.a, r.a],
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
                      easing: p.ANIMATION_CUBIC_BEZIER,
                    },
                  },
                  {
                    name: "paper-menu-grow-height-animation",
                    timing: {
                      delay: 100,
                      duration: 275,
                      easing: p.ANIMATION_CUBIC_BEZIER,
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
                      easing: p.ANIMATION_CUBIC_BEZIER,
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
            r.a._disabledChanged.apply(this, arguments),
              e && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(e) {
            var t = e.detail,
              n = this.$.trigger;
            Object(l.a)(t).path.indexOf(n) > -1 && e.preventDefault();
          },
        });
      Object.keys(p).forEach(function(e) {
        f[e] = p[e];
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
        return r;
      });
      var i = n(118);
      function r(e) {
        return Object(i.a)(e.entity_id);
      }
    },
    176: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      var i = n(116),
        r = {
          alert: "hass:alert",
          alexa: "hass:amazon-alexa",
          automation: "hass:playlist-play",
          calendar: "hass:calendar",
          camera: "hass:video",
          climate: "hass:thermostat",
          configurator: "hass:settings",
          conversation: "hass:text-to-speech",
          device_tracker: "hass:account",
          fan: "hass:fan",
          google_assistant: "hass:google-assistant",
          group: "hass:google-circles-communities",
          history_graph: "hass:chart-line",
          homeassistant: "hass:home-assistant",
          homekit: "hass:home-automation",
          image_processing: "hass:image-filter-frames",
          input_boolean: "hass:drawing",
          input_datetime: "hass:calendar-clock",
          input_number: "hass:ray-vertex",
          input_select: "hass:format-list-bulleted",
          input_text: "hass:textbox",
          light: "hass:lightbulb",
          mailbox: "hass:mailbox",
          notify: "hass:comment-alert",
          person: "hass:account",
          plant: "hass:flower",
          proximity: "hass:apple-safari",
          remote: "hass:remote",
          scene: "hass:google-pages",
          script: "hass:file-document",
          sensor: "hass:eye",
          simple_alarm: "hass:bell",
          sun: "hass:white-balance-sunny",
          switch: "hass:flash",
          timer: "hass:timer",
          updater: "hass:cloud-upload",
          vacuum: "hass:robot-vacuum",
          water_heater: "hass:thermometer",
          weather: "hass:weather-cloudy",
          weblink: "hass:open-in-new",
        };
      function o(e, t) {
        if (e in r) return r[e];
        switch (e) {
          case "alarm_control_panel":
            switch (t) {
              case "armed_home":
                return "hass:bell-plus";
              case "armed_night":
                return "hass:bell-sleep";
              case "disarmed":
                return "hass:bell-outline";
              case "triggered":
                return "hass:bell-ring";
              default:
                return "hass:bell";
            }
          case "binary_sensor":
            return t && "off" === t
              ? "hass:radiobox-blank"
              : "hass:checkbox-marked-circle";
          case "cover":
            return "closed" === t ? "hass:window-closed" : "hass:window-open";
          case "lock":
            return t && "unlocked" === t ? "hass:lock-open" : "hass:lock";
          case "media_player":
            return t && "off" !== t && "idle" !== t
              ? "hass:cast-connected"
              : "hass:cast";
          case "zwave":
            switch (t) {
              case "dead":
                return "hass:emoticon-dead";
              case "sleeping":
                return "hass:sleep";
              case "initializing":
                return "hass:timer-sand";
              default:
                return "hass:z-wave";
            }
          default:
            return (
              console.warn(
                "Unable to find icon for domain " + e + " (" + t + ")"
              ),
              i.a
            );
        }
      }
    },
    177: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return d;
      });
      n(107);
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
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t) {
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
      function s(e, t, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = a(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function a(e) {
        return (a = Object.setPrototypeOf
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
      var c = customElements.get("iron-icon"),
        u = !1,
        d = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
              r[s] = arguments[s];
            return (
              ((n = o(
                this,
                (e = a(t)).call.apply(e, [this].concat(r))
              ))._iconsetName = void 0),
              n
            );
          }
          var i, d, h;
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
            (i = t),
            (d = [
              {
                key: "listen",
                value: function(e, i, r) {
                  s(a(t.prototype), "listen", this).call(this, e, i, r),
                    u ||
                      "mdi" !== this._iconsetName ||
                      ((u = !0), n.e(70).then(n.bind(null, 214)));
                },
              },
            ]) && r(i.prototype, d),
            h && r(i, h),
            t
          );
        })();
      customElements.define("ha-icon", d);
    },
    180: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return s;
        });
      n(4);
      var i = n(84),
        r = n(1),
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
              var t = Object(r.a)(e).path, n = 0, i = t.indexOf(this);
              n < i;
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
        s = [i.a, o];
    },
    183: function(e, t, n) {
      "use strict";
      var i = n(0),
        r = (n(177), n(175)),
        o = n(189);
      function s() {
        var e = u([
          '\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain="light"][data-state="on"],\n      ha-icon[data-domain="switch"][data-state="on"],\n      ha-icon[data-domain="binary_sensor"][data-state="on"],\n      ha-icon[data-domain="fan"][data-state="on"],\n      ha-icon[data-domain="sun"][data-state="above_horizon"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state="unavailable"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
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
      function l() {
        var e = u([
          '\n      <ha-icon\n        id="icon"\n        data-domain=',
          "\n        data-state=",
          "\n        .icon=",
          "\n      ></ha-icon>\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([""]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          n = _(e.key);
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
      function m(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function v(e) {
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
      function _(e) {
        var t = (function(e, t) {
          if ("object" !== a(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === a(t) ? t : String(t);
      }
      var g = (function(e, t, n, i) {
        var r = (function() {
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
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
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
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!v(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
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
              var n = _(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
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
              var n = b(e, "finisher"),
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
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function(e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
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
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (y(o.descriptor) || y(r.descriptor)) {
                    if (v(o) || v(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (v(o)) {
                      if (v(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    m(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(f)),
            e
          );
        return (
          r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function i() {
                var t, n, r, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var s = arguments.length, l = new Array(s), c = 0;
                  c < s;
                  c++
                )
                  l[c] = arguments[c];
                return (
                  (r = this),
                  (n =
                    !(o = (t = d(i)).call.apply(t, [this].concat(l))) ||
                    ("object" !== a(o) && "function" != typeof o)
                      ? h(r)
                      : o),
                  e(h(n)),
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
                    t && p(e, t);
                })(i, t),
                i
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "stateObj",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "overrideIcon",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.h)("ha-icon")],
                key: "_icon",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this.stateObj;
                  return e
                    ? Object(i.f)(
                        l(),
                        Object(r.a)(e),
                        e.state,
                        this.overrideIcon || Object(o.a)(e)
                      )
                    : Object(i.f)(c());
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (e.has("stateObj") && this.stateObj) {
                    var t = this.stateObj,
                      n = { color: "", filter: "" },
                      i = { backgroundImage: "" };
                    if (t)
                      if (t.attributes.entity_picture && !this.overrideIcon)
                        (i.backgroundImage =
                          "url(" + t.attributes.entity_picture + ")"),
                          (n.display = "none");
                      else {
                        if (t.attributes.hs_color) {
                          var r = t.attributes.hs_color[0],
                            o = t.attributes.hs_color[1];
                          o > 10 &&
                            (n.color = "hsl("
                              .concat(r, ", 100%, ")
                              .concat(100 - o / 2, "%)"));
                        }
                        if (t.attributes.brightness) {
                          var s = t.attributes.brightness;
                          if ("number" != typeof s) {
                            var l = "Type error: state-badge expected number, but type of "
                              .concat(t.entity_id, ".attributes.brightness is ")
                              .concat(a(s), " (")
                              .concat(s, ")");
                            console.warn(l);
                          }
                          n.filter = "brightness(".concat((s + 245) / 5, "%)");
                        }
                      }
                    Object.assign(this._icon.style, n),
                      Object.assign(this.style, i);
                  }
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(s());
                },
              },
            ],
          };
        },
        i.a
      );
      customElements.define("state-badge", g);
    },
    184: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41), n(52), n(83);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(i.content);
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
    186: function(e, t, n) {
      "use strict";
      n(106), n(90), n(187), n(178), n(220);
      var i = n(125),
        r = (n(183), n(173)),
        o = n(0),
        s = n(19);
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
      function l() {
        var e = h([
          "\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    ",
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = h([
          '\n                <paper-icon-button\n                  slot="suffix"\n                  class="toggle-button"\n                  .icon=',
          "\n                >\n                  Toggle\n                </paper-icon-button>\n              ",
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = h([
          '\n                <paper-icon-button\n                  slot="suffix"\n                  class="clear-button"\n                  icon="hass:close"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              ',
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = h([
          '\n      <vaadin-combo-box-light\n        item-value-path="entity_id"\n        item-label-path="entity_id"\n        .items=',
          "\n        .value=",
          "\n        .allowCustomValue=",
          "\n        .renderer=",
          "\n        @opened-changed=",
          "\n        @value-changed=",
          "\n      >\n        <paper-input\n          .autofocus=",
          "\n          .label=",
          "\n          .value=",
          "\n          .disabled=",
          '\n          class="input"\n          autocapitalize="none"\n          autocomplete="off"\n          autocorrect="off"\n          spellcheck="false"\n        >\n          ',
          "\n          ",
          "\n        </paper-input>\n      </vaadin-combo-box-light>\n    ",
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function h(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
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
      function m(e) {
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
      function v(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function y(e) {
        return e.decorators && e.decorators.length;
      }
      function b(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function g(e) {
        var t = (function(e, t) {
          if ("object" !== a(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== a(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === a(t) ? t : String(t);
      }
      function w(e, t, n) {
        return (w =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = k(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
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
      var x = function(e, t, n) {
          e.firstElementChild ||
            (e.innerHTML =
              '\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>\n        <paper-item-body two-line="">\n          <div class=\'name\'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    '),
            (e.querySelector("state-badge").stateObj = n.item),
            (e.querySelector(".name").textContent = Object(r.a)(n.item)),
            (e.querySelector("[secondary]").textContent = n.item.entity_id);
        },
        O = (function(e, t, n, i) {
          var r = (function() {
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
                    var r = t.placement;
                    if (t.kind === i && ("static" === r || "prototype" === r)) {
                      var o = "static" === r ? e : n;
                      this.defineClassElement(o, t);
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
                  r = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, r);
                  }, this),
                  e.forEach(function(e) {
                    if (!y(e)) return n.push(e);
                    var t = this.decorateElement(e, r);
                    n.push(t.element),
                      n.push.apply(n, t.extras),
                      i.push.apply(i, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: n, finishers: i };
                var o = this.decorateConstructor(n, t);
                return i.push.apply(i, o.finishers), (o.finishers = i), o;
              },
              addElementPlacement: function(e, t, n) {
                var i = t[e.placement];
                if (!n && -1 !== i.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                i.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var n = [], i = [], r = e.decorators, o = r.length - 1;
                  o >= 0;
                  o--
                ) {
                  var s = t[e.placement];
                  s.splice(s.indexOf(e.key), 1);
                  var a = this.fromElementDescriptor(e),
                    l = this.toElementFinisherExtras((0, r[o])(a) || a);
                  (e = l.element),
                    this.addElementPlacement(e, t),
                    l.finisher && i.push(l.finisher);
                  var c = l.extras;
                  if (c) {
                    for (var u = 0; u < c.length; u++)
                      this.addElementPlacement(c[u], t);
                    n.push.apply(n, c);
                  }
                }
                return { element: e, finishers: i, extras: n };
              },
              decorateConstructor: function(e, t) {
                for (var n = [], i = t.length - 1; i >= 0; i--) {
                  var r = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[i])(r) || r);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var s = 0; s < e.length - 1; s++)
                      for (var a = s + 1; a < e.length; a++)
                        if (
                          e[s].key === e[a].key &&
                          e[s].placement === e[a].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[s].key + ")"
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
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
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
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
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
                  i = String(e.placement);
                if ("static" !== i && "prototype" !== i && "own" !== i)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      i +
                      '"'
                  );
                var r = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: n,
                  placement: i,
                  descriptor: Object.assign({}, r),
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        r,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function(e) {
                var t = this.toElementDescriptor(e),
                  n = _(e, "finisher"),
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
                var n = _(e, "finisher"),
                  i = this.toElementDescriptors(e.elements);
                return { elements: i, finisher: n };
              },
              runClassFinishers: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = (0, t[n])(e);
                  if (void 0 !== i) {
                    if ("function" != typeof i)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
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
          if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
          var s = t(function(e) {
              r.initializeInstanceElements(e, a.elements);
            }, n),
            a = r.decorateClass(
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
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var r,
                    o = e[i];
                  if ("method" === o.kind && (r = t.find(n)))
                    if (b(o.descriptor) || b(r.descriptor)) {
                      if (y(o) || y(r))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      r.descriptor = o.descriptor;
                    } else {
                      if (y(o)) {
                        if (y(r))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        r.decorators = o.decorators;
                      }
                      v(o, r);
                    }
                  else t.push(o);
                }
                return t;
              })(s.d.map(m)),
              e
            );
          return (
            r.initializeClassElements(s.F, a.elements),
            r.runClassFinishers(s.F, a.finishers)
          );
        })(
          null,
          function(e, t) {
            var n = (function(n) {
              function i() {
                var t, n, r, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var s = arguments.length, l = new Array(s), c = 0;
                  c < s;
                  c++
                )
                  l[c] = arguments[c];
                return (
                  (r = this),
                  (n =
                    !(o = (t = k(i)).call.apply(t, [this].concat(l))) ||
                    ("object" !== a(o) && "function" != typeof o)
                      ? p(r)
                      : o),
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
                })(i, t),
                i
              );
            })();
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  decorators: [Object(o.g)({ type: Boolean })],
                  key: "autofocus",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)({ type: Boolean })],
                  key: "disabled",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [
                    Object(o.g)({
                      type: Boolean,
                      attribute: "allow-custom-entity",
                    }),
                  ],
                  key: "allowCustomEntity",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)()],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)()],
                  key: "label",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)()],
                  key: "value",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)({ attribute: "domain-filter" })],
                  key: "domainFilter",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)()],
                  key: "entityFilter",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)({ type: Boolean })],
                  key: "_opened",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(o.g)()],
                  key: "_hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  key: "_getStates",
                  value: function() {
                    var e = this;
                    return Object(i.a)(function(t, n, i) {
                      var r = [];
                      if (!t) return [];
                      var o = Object.keys(t.states);
                      return (
                        n &&
                          (o = o.filter(function(e) {
                            return e.substr(0, e.indexOf(".")) === n;
                          })),
                        (r = o.sort().map(function(e) {
                          return t.states[e];
                        })),
                        i &&
                          (r = r.filter(function(t) {
                            return t.entity_id === e.value || i(t);
                          })),
                        r
                      );
                    });
                  },
                },
                {
                  kind: "method",
                  key: "updated",
                  value: function(e) {
                    w(k(n.prototype), "updated", this).call(this, e),
                      e.has("hass") &&
                        !this._opened &&
                        (this._hass = this.hass);
                  },
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this._getStates(
                      this._hass,
                      this.domainFilter,
                      this.entityFilter
                    );
                    return Object(o.f)(
                      d(),
                      e,
                      this._value,
                      this.allowCustomEntity,
                      x,
                      this._openedChanged,
                      this._valueChanged,
                      this.autofocus,
                      void 0 === this.label && this._hass
                        ? this._hass.localize(
                            "ui.components.entity.entity-picker.entity"
                          )
                        : this.label,
                      this._value,
                      this.disabled,
                      this.value ? Object(o.f)(u()) : "",
                      e.length > 0
                        ? Object(o.f)(
                            c(),
                            this._opened ? "hass:menu-up" : "hass:menu-down"
                          )
                        : ""
                    );
                  },
                },
                {
                  kind: "get",
                  key: "_value",
                  value: function() {
                    return this.value || "";
                  },
                },
                {
                  kind: "method",
                  key: "_openedChanged",
                  value: function(e) {
                    this._opened = e.detail.value;
                  },
                },
                {
                  kind: "method",
                  key: "_valueChanged",
                  value: function(e) {
                    var t = this;
                    e.detail.value !== this._value &&
                      ((this.value = e.detail.value),
                      setTimeout(function() {
                        Object(s.a)(t, "value-changed", { value: t.value }),
                          Object(s.a)(t, "change");
                      }, 0));
                  },
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(o.c)(l());
                  },
                },
              ],
            };
          },
          o.a
        );
      customElements.define("ha-entity-picker", O);
    },
    187: function(e, t, n) {
      "use strict";
      n(4), n(44), n(52), n(140);
      var i = n(5),
        r = n(3),
        o = n(117);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(s()),
        is: "paper-icon-item",
        behaviors: [o.a],
      });
    },
    188: function(e, t, n) {
      "use strict";
      n(4), n(184);
      var i = n(119),
        r = n(180),
        o = n(5),
        s = n(3);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        _template: Object(s.a)(a()),
        is: "paper-dialog",
        behaviors: [r.a, i.a],
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
    189: function(e, t, n) {
      "use strict";
      var i = n(116),
        r = n(118),
        o = n(176);
      var s = {
        humidity: "hass:water-percent",
        illuminance: "hass:brightness-5",
        temperature: "hass:thermometer",
        pressure: "hass:gauge",
        power: "hass:flash",
        signal_strength: "hass:wifi",
      };
      n.d(t, "a", function() {
        return l;
      });
      var a = {
        binary_sensor: function(e) {
          var t = e.state && "off" === e.state;
          switch (e.attributes.device_class) {
            case "battery":
              return t ? "hass:battery" : "hass:battery-outline";
            case "cold":
              return t ? "hass:thermometer" : "hass:snowflake";
            case "connectivity":
              return t ? "hass:server-network-off" : "hass:server-network";
            case "door":
              return t ? "hass:door-closed" : "hass:door-open";
            case "garage_door":
              return t ? "hass:garage" : "hass:garage-open";
            case "gas":
            case "power":
            case "problem":
            case "safety":
            case "smoke":
              return t ? "hass:shield-check" : "hass:alert";
            case "heat":
              return t ? "hass:thermometer" : "hass:fire";
            case "light":
              return t ? "hass:brightness-5" : "hass:brightness-7";
            case "lock":
              return t ? "hass:lock" : "hass:lock-open";
            case "moisture":
              return t ? "hass:water-off" : "hass:water";
            case "motion":
              return t ? "hass:walk" : "hass:run";
            case "occupancy":
              return t ? "hass:home-outline" : "hass:home";
            case "opening":
              return t ? "hass:square" : "hass:square-outline";
            case "plug":
              return t ? "hass:power-plug-off" : "hass:power-plug";
            case "presence":
              return t ? "hass:home-outline" : "hass:home";
            case "sound":
              return t ? "hass:music-note-off" : "hass:music-note";
            case "vibration":
              return t ? "hass:crop-portrait" : "hass:vibrate";
            case "window":
              return t ? "hass:window-closed" : "hass:window-open";
            default:
              return t ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";
          }
        },
        cover: function(e) {
          var t = "closed" !== e.state;
          switch (e.attributes.device_class) {
            case "garage":
              return t ? "hass:garage-open" : "hass:garage";
            default:
              return Object(o.a)("cover", e.state);
          }
        },
        sensor: function(e) {
          var t = e.attributes.device_class;
          if (t && t in s) return s[t];
          if ("battery" === t) {
            var n = Number(e.state);
            if (isNaN(n)) return "hass:battery-unknown";
            var r = 10 * Math.round(n / 10);
            return r >= 100
              ? "hass:battery"
              : r <= 0
              ? "hass:battery-alert"
              : "hass".concat(":battery-", r);
          }
          var a = e.attributes.unit_of_measurement;
          return a === i.j || a === i.k
            ? "hass:thermometer"
            : Object(o.a)("sensor");
        },
        input_datetime: function(e) {
          return e.attributes.has_date
            ? e.attributes.has_time
              ? Object(o.a)("input_datetime")
              : "hass:calendar"
            : "hass:clock";
        },
      };
      function l(e) {
        if (!e) return i.a;
        if (e.attributes.icon) return e.attributes.icon;
        var t = Object(r.a)(e.entity_id);
        return t in a ? a[t](e) : Object(o.a)(t, e.state);
      }
    },
    190: function(e, t, n) {
      "use strict";
      n(188);
      var i = n(70),
        r = n(1),
        o = n(123),
        s = {
          getTabbableNodes: function(e) {
            var t = [];
            return this._collectTabbableNodes(e, t)
              ? o.a._sortByTabIndex(t)
              : t;
          },
          _collectTabbableNodes: function(e, t) {
            if (e.nodeType !== Node.ELEMENT_NODE || !o.a._isVisible(e))
              return !1;
            var n,
              i = e,
              s = o.a._normalizedTabIndex(i),
              a = s > 0;
            s >= 0 && t.push(i),
              (n =
                "content" === i.localName || "slot" === i.localName
                  ? Object(r.a)(i).getDistributedNodes()
                  : Object(r.a)(i.shadowRoot || i.root || i).children);
            for (var l = 0; l < n.length; l++)
              a = this._collectTabbableNodes(n[l], t) || a;
            return a;
          },
        };
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
      function l(e, t) {
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
      function c(e) {
        return (c = Object.setPrototypeOf
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
      var d = customElements.get("paper-dialog"),
        h = {
          get _focusableNodes() {
            return s.getTabbableNodes(this);
          },
        },
        p = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              l(this, c(t).apply(this, arguments))
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
                t && u(e, t);
            })(t, Object(i["b"])([h], d)),
            t
          );
        })();
      customElements.define("ha-paper-dialog", p);
    },
    203: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41);
      var i = n(180),
        r = n(5),
        o = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(o.a)(s()),
        is: "paper-dialog-scrollable",
        properties: { dialogElement: { type: Object } },
        get scrollTarget() {
          return this.$.scrollable;
        },
        ready: function() {
          this._ensureTarget(), this.classList.add("no-padding");
        },
        attached: function() {
          this._ensureTarget(),
            requestAnimationFrame(this.updateScrollState.bind(this));
        },
        updateScrollState: function() {
          this.toggleClass("is-scrolled", this.scrollTarget.scrollTop > 0),
            this.toggleClass(
              "can-scroll",
              this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight
            ),
            this.toggleClass(
              "scrolled-to-bottom",
              this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
                this.scrollTarget.scrollHeight
            );
        },
        _ensureTarget: function() {
          (this.dialogElement = this.dialogElement || this.parentElement),
            this.dialogElement &&
            this.dialogElement.behaviors &&
            this.dialogElement.behaviors.indexOf(i.b) >= 0
              ? ((this.dialogElement.sizingTarget = this.scrollTarget),
                this.scrollTarget.classList.remove("fit"))
              : this.dialogElement && this.scrollTarget.classList.add("fit");
        },
      });
    },
    220: function(e, t, n) {
      "use strict";
      n(202), n(195), n(196), n(327);
      var i = n(3);
      function r() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">\n  <template>\n    <style include="lumo-overlay">\n      /* stylelint-disable no-empty-source */\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(i.a)(r());
      document.head.appendChild(o.content);
      var s = n(251);
      n(291);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      [part="content"] {\n        padding: 0;\n      }\n\n      :host {\n        /* TODO: using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: var(--lumo-space-xs);\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */\n      :host([opened]) {\n        --iron-list-items-container_-_border-width: var(--lumo-space-xs);\n        --iron-list-items-container_-_border-style: solid;\n        --iron-list-items-container_-_border-color: transparent;\n      }\n\n      /* Loading state */\n\n      /* When items are empty, the sinner needs some room */\n      :host(:not([closing])) [part~="content"] {\n        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));\n      }\n\n      [part~="overlay"] {\n        position: relative;\n      }\n\n      :host([loading]) [part~="loader"] {\n        box-sizing: border-box;\n        width: var(--lumo-icon-size-s);\n        height: var(--lumo-icon-size-s);\n        position: absolute;\n        z-index: 1;\n        left: var(--lumo-space-s);\n        right: var(--lumo-space-s);\n        top: var(--lumo-space-s);\n        margin-left: auto;\n        margin-inline-start: auto;\n        margin-inline-end: 0;\n        border: 2px solid transparent;\n        border-color:\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color)\n          var(--lumo-primary-color);\n        border-radius: calc(0.5 * var(--lumo-icon-size-s));\n        opacity: 0;\n        animation:\n          1s linear infinite lumo-combo-box-loader-rotate,\n          .3s .1s lumo-combo-box-loader-fade-in both;\n        pointer-events: none;\n      }\n\n      @keyframes lumo-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes lumo-combo-box-loader-rotate {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(i.a)(a());
      document.head.appendChild(l.content);
      n(238), n(213), n(219);
      var c = document.createElement("template");
      (c.innerHTML =
        '<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(c.content);
      var u = n(25),
        d = n(197);
      function h(e) {
        return (h =
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
      function p(e, t) {
        return !t || ("object" !== h(t) && "function" != typeof t)
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
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
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
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function y(e, t, n) {
        return t && v(e.prototype, t), n && v(e, n), e;
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var _ = function(e) {
        return (function(t) {
          function n() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (e = p(this, m(n).call(this))).value,
              e
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
                t && b(e, t);
            })(n, e),
            y(n, null, [
              {
                key: "properties",
                get: function() {
                  return {
                    _hasVaadinItemMixin: { value: !0 },
                    disabled: {
                      type: Boolean,
                      value: !1,
                      observer: "_disabledChanged",
                      reflectToAttribute: !0,
                    },
                    selected: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_selectedChanged",
                    },
                    _value: String,
                  };
                },
              },
            ]),
            y(n, [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  f(m(n.prototype), "ready", this).call(this);
                  var t = this.getAttribute("value");
                  null !== t && (this.value = t),
                    this.addEventListener(
                      "focus",
                      function(t) {
                        return e._setFocused(!0);
                      },
                      !0
                    ),
                    this.addEventListener(
                      "blur",
                      function(t) {
                        return e._setFocused(!1);
                      },
                      !0
                    ),
                    this.addEventListener("mousedown", function(t) {
                      e._setActive((e._mousedown = !0));
                      document.addEventListener("mouseup", function t() {
                        e._setActive((e._mousedown = !1)),
                          document.removeEventListener("mouseup", t);
                      });
                    }),
                    this.addEventListener("keydown", function(t) {
                      return e._onKeydown(t);
                    }),
                    this.addEventListener("keyup", function(t) {
                      return e._onKeyup(t);
                    });
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  f(m(n.prototype), "disconnectedCallback", this).call(this),
                    this.hasAttribute("active") && this._setFocused(!1);
                },
              },
              {
                key: "_selectedChanged",
                value: function(e) {
                  this.setAttribute("aria-selected", e);
                },
              },
              {
                key: "_disabledChanged",
                value: function(e) {
                  e
                    ? ((this.selected = !1),
                      this.setAttribute("aria-disabled", "true"),
                      this.blur())
                    : this.removeAttribute("aria-disabled");
                },
              },
              {
                key: "_setFocused",
                value: function(e) {
                  e
                    ? (this.setAttribute("focused", ""),
                      this._mousedown || this.setAttribute("focus-ring", ""))
                    : (this.removeAttribute("focused"),
                      this.removeAttribute("focus-ring"),
                      this._setActive(!1));
                },
              },
              {
                key: "_setActive",
                value: function(e) {
                  e
                    ? this.setAttribute("active", "")
                    : this.removeAttribute("active");
                },
              },
              {
                key: "_onKeydown",
                value: function(e) {
                  /^( |SpaceBar|Enter)$/.test(e.key) &&
                    !e.defaultPrevented &&
                    (e.preventDefault(), this._setActive(!0));
                },
              },
              {
                key: "_onKeyup",
                value: function(e) {
                  this.hasAttribute("active") &&
                    (this._setActive(!1), this.click());
                },
              },
              {
                key: "value",
                get: function() {
                  return void 0 !== this._value
                    ? this._value
                    : this.textContent.trim();
                },
                set: function(e) {
                  this._value = e;
                },
              },
            ]),
            n
          );
        })();
      };
      function g(e) {
        return (g =
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
      function w() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part="content">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function x(e, t) {
        return !t || ("object" !== g(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function E(e, t) {
        return (E =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var I = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            x(this, O(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && E(e, t);
          })(t, _(Object(d["a"])(u["a"]))),
          (n = t),
          (o = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(w());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-item";
              },
            },
            {
              key: "version",
              get: function() {
                return "2.1.0";
              },
            },
          ]),
          (r = null) && k(n.prototype, r),
          o && k(n, o),
          t
        );
      })();
      function C() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">\n  <template>\n    <style include="lumo-item">\n      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */\n\n      :host {\n        cursor: default;\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        padding-left: calc(var(--lumo-border-radius) / 4);\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n        transition: background-color 100ms;\n        border-radius: var(--lumo-border-radius);\n        overflow: hidden;\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround (show the selected item checkmark) */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      :host([focused]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover) {\n          background-color: transparent;\n        }\n\n        :host([focused]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>',
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      customElements.define(I.is, I);
      var P = Object(i.a)(C());
      document.head.appendChild(P.content);
      var S = n(249),
        j = n(11),
        T = n(24),
        A = n(32),
        z = n(91),
        V = n(31),
        R = n(62);
      function F(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var D = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "toString",
              value: function() {
                return "";
              },
            },
          ]) && F(t.prototype, n),
          i && F(t, i),
          e
        );
      })();
      function L(e) {
        return (L =
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
      function $(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function B(e, t) {
        return !t || ("object" !== L(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function N(e, t, n) {
        return (N =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = H(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function H(e) {
        return (H = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function M(e, t) {
        return (M =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var q = function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              B(this, H(n).apply(this, arguments))
            );
          }
          var i, r, o;
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
            })(n, e),
            (i = n),
            (o = [
              {
                key: "properties",
                get: function() {
                  return {
                    opened: {
                      type: Boolean,
                      notify: !0,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_openedChanged",
                    },
                    disabled: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    readonly: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    renderer: Function,
                    items: { type: Array, observer: "_itemsChanged" },
                    allowCustomValue: { type: Boolean, value: !1 },
                    filteredItems: { type: Array },
                    value: {
                      type: String,
                      observer: "_valueChanged",
                      notify: !0,
                      value: "",
                    },
                    _lastCommittedValue: String,
                    loading: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                    },
                    _focusedIndex: { type: Number, value: -1 },
                    filter: { type: String, value: "", notify: !0 },
                    selectedItem: { type: Object, notify: !0 },
                    itemLabelPath: {
                      type: String,
                      value: "label",
                      observer: "_itemLabelPathChanged",
                    },
                    itemValuePath: { type: String, value: "value" },
                    itemIdPath: String,
                    name: { type: String },
                    invalid: {
                      type: Boolean,
                      reflectToAttribute: !0,
                      notify: !0,
                      value: !1,
                    },
                    _toggleElement: Object,
                    _clearElement: Object,
                    _inputElementValue: String,
                    _closeOnBlurIsPrevented: Boolean,
                    _previousDocumentPointerEvents: String,
                    _itemTemplate: Object,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_filterChanged(filter, itemValuePath, itemLabelPath)",
                    "_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)",
                    "_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)",
                    "_templateOrRendererChanged(_itemTemplate, renderer)",
                    "_loadingChanged(loading)",
                    "_selectedItemChanged(selectedItem, itemLabelPath)",
                    "_toggleElementChanged(_toggleElement)",
                  ];
                },
              },
            ]),
            (r = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  N(H(n.prototype), "ready", this).call(this),
                    this.addEventListener("focusout", function(t) {
                      var n = e.$.overlay.$.dropdown;
                      n && n.$ && t.relatedTarget === n.$.overlay
                        ? t.composedPath()[0].focus()
                        : e._closeOnBlurIsPrevented || e.close();
                    }),
                    (this._lastCommittedValue = this.value),
                    z.a.requestAvailability(),
                    this.$.overlay.addEventListener(
                      "selection-changed",
                      this._overlaySelectedItemChanged.bind(this)
                    ),
                    this.addEventListener(
                      "vaadin-combo-box-dropdown-closed",
                      this._onClosed.bind(this)
                    ),
                    this.addEventListener(
                      "vaadin-combo-box-dropdown-opened",
                      this._onOpened.bind(this)
                    ),
                    this.addEventListener(
                      "keydown",
                      this._onKeyDown.bind(this)
                    ),
                    this.addEventListener("click", this._onClick.bind(this)),
                    this.$.overlay.addEventListener(
                      "vaadin-overlay-touch-action",
                      this._onOverlayTouchAction.bind(this)
                    ),
                    this.addEventListener("touchend", function(t) {
                      e._clearElement &&
                        t.composedPath()[0] === e._clearElement &&
                        (t.preventDefault(), e._clear());
                    }),
                    (this._observer = new R.a(this, function(t) {
                      e._setTemplateFromNodes(t.addedNodes);
                    }));
                },
              },
              {
                key: "render",
                value: function() {
                  this.$.overlay._selector &&
                    this.$.overlay._selector
                      .querySelectorAll("vaadin-combo-box-item")
                      .forEach(function(e) {
                        return e._render();
                      });
                },
              },
              {
                key: "_setTemplateFromNodes",
                value: function(e) {
                  this._itemTemplate =
                    e.filter(function(e) {
                      return e.localName && "template" === e.localName;
                    })[0] || this._itemTemplate;
                },
              },
              {
                key: "_removeNewRendererOrTemplate",
                value: function(e, t, n, i) {
                  e !== t
                    ? (this._itemTemplate = void 0)
                    : n !== i && (this.renderer = void 0);
                },
              },
              {
                key: "_templateOrRendererChanged",
                value: function(e, t) {
                  if (e && t)
                    throw (this._removeNewRendererOrTemplate(
                      e,
                      this._oldTemplate,
                      t,
                      this._oldRenderer
                    ),
                    new Error(
                      "You should only use either a renderer or a template for combo box items"
                    ));
                  (this._oldTemplate = e), (this._oldRenderer = t);
                },
              },
              {
                key: "open",
                value: function() {
                  this.disabled || this.readonly || (this.opened = !0);
                },
              },
              {
                key: "close",
                value: function() {
                  this.opened = !1;
                },
              },
              {
                key: "_openedChanged",
                value: function(e, t) {
                  void 0 !== t &&
                    (this.opened
                      ? ((this._openedWithFocusRing =
                          this.hasAttribute("focus-ring") ||
                          (this.focusElement &&
                            this.focusElement.hasAttribute("focus-ring"))),
                        this.$.overlay.touchDevice ||
                          this.focused ||
                          this.focus())
                      : (this._openedWithFocusRing &&
                          this.hasAttribute("focused") &&
                          this.focusElement.setAttribute("focus-ring", ""),
                        this._onClosed()));
                },
              },
              {
                key: "_onOverlayTouchAction",
                value: function(e) {
                  (this._closeOnBlurIsPrevented = !0),
                    this.inputElement.blur(),
                    (this._closeOnBlurIsPrevented = !1);
                },
              },
              {
                key: "_onClick",
                value: function(e) {
                  this._closeOnBlurIsPrevented = !0;
                  var t = e.composedPath();
                  -1 !== t.indexOf(this._clearElement)
                    ? (this._clear(), this.focus())
                    : -1 !== t.indexOf(this.inputElement) &&
                      (t.indexOf(this._toggleElement) > -1 && this.opened
                        ? this.close()
                        : this.open()),
                    (this._closeOnBlurIsPrevented = !1);
                },
              },
              {
                key: "_onKeyDown",
                value: function(e) {
                  this._isEventKey(e, "down")
                    ? ((this._closeOnBlurIsPrevented = !0),
                      this._onArrowDown(),
                      (this._closeOnBlurIsPrevented = !1),
                      e.preventDefault())
                    : this._isEventKey(e, "up")
                    ? ((this._closeOnBlurIsPrevented = !0),
                      this._onArrowUp(),
                      (this._closeOnBlurIsPrevented = !1),
                      e.preventDefault())
                    : this._isEventKey(e, "enter")
                    ? this._onEnter(e)
                    : this._isEventKey(e, "esc") && this._onEscape(e);
                },
              },
              {
                key: "_isEventKey",
                value: function(e, t) {
                  return V.a.keyboardEventMatchesKeys(e, t);
                },
              },
              {
                key: "_getItemLabel",
                value: function(e) {
                  return this.$.overlay.getItemLabel(e);
                },
              },
              {
                key: "_getItemValue",
                value: function(e) {
                  var t =
                    e && this.itemValuePath
                      ? this.get(this.itemValuePath, e)
                      : void 0;
                  return void 0 === t && (t = e ? e.toString() : ""), t;
                },
              },
              {
                key: "_onArrowDown",
                value: function() {
                  this.opened
                    ? this.$.overlay._items &&
                      ((this._focusedIndex = Math.min(
                        this.$.overlay._items.length - 1,
                        this._focusedIndex + 1
                      )),
                      this._prefillFocusedItemLabel())
                    : this.open();
                },
              },
              {
                key: "_onArrowUp",
                value: function() {
                  this.opened
                    ? (this._focusedIndex > -1
                        ? (this._focusedIndex = Math.max(
                            0,
                            this._focusedIndex - 1
                          ))
                        : this.$.overlay._items &&
                          (this._focusedIndex =
                            this.$.overlay._items.length - 1),
                      this._prefillFocusedItemLabel())
                    : this.open();
                },
              },
              {
                key: "_prefillFocusedItemLabel",
                value: function() {
                  var e = this;
                  this._focusedIndex > -1 &&
                    ((this._inputElementValue = ""),
                    setTimeout(function() {
                      (e._inputElementValue = e._getItemLabel(
                        e.$.overlay._focusedItem
                      )),
                        e._markAllSelectionRange();
                    }, 1));
                },
              },
              {
                key: "_setSelectionRange",
                value: function(e, t) {
                  var n = this._nativeInput || this.inputElement;
                  if (this.hasAttribute("focused") && n && n.setSelectionRange)
                    try {
                      n.setSelectionRange(e, t);
                    } catch (i) {}
                },
              },
              {
                key: "_markAllSelectionRange",
                value: function() {
                  void 0 !== this._inputElementValue &&
                    this._setSelectionRange(0, this._inputElementValue.length);
                },
              },
              {
                key: "_clearSelectionRange",
                value: function() {
                  if (void 0 !== this._inputElementValue) {
                    var e = this._inputElementValue
                      ? this._inputElementValue.length
                      : 0;
                    this._setSelectionRange(e, e);
                  }
                },
              },
              {
                key: "_onEnter",
                value: function(e) {
                  this.opened &&
                    (this.allowCustomValue ||
                      "" === this._inputElementValue ||
                      this._focusedIndex > -1) &&
                    (this.close(), e.preventDefault());
                },
              },
              {
                key: "_onEscape",
                value: function(e) {
                  this.opened &&
                    (this._stopPropagation(e),
                    this._focusedIndex > -1
                      ? ((this._focusedIndex = -1), this._revertInputValue())
                      : this.cancel());
                },
              },
              {
                key: "_toggleElementChanged",
                value: function(e) {
                  e &&
                    e.addEventListener("mousedown", function(e) {
                      return e.preventDefault();
                    });
                },
              },
              {
                key: "_clear",
                value: function() {
                  (this.selectedItem = null),
                    this.allowCustomValue && (this.value = ""),
                    this.opened || this._detectAndDispatchChange();
                },
              },
              {
                key: "cancel",
                value: function() {
                  this._revertInputValueToValue(),
                    (this._lastCommittedValue = this.value),
                    this.close();
                },
              },
              {
                key: "_onOpened",
                value: function() {
                  var e = this;
                  Object(T.b)(),
                    this.$.overlay.ensureItemsRendered(),
                    this.$.overlay._selector.toggleScrollListener(!0),
                    this.$.overlay.updateViewportBoundaries(),
                    this.$.overlay._selector._increasePoolIfNeeded(),
                    setTimeout(function() {
                      return e._resizeDropdown();
                    }, 1),
                    window.requestAnimationFrame(function() {
                      return e.$.overlay.adjustScrollPosition();
                    }),
                    (this._lastCommittedValue = this.value);
                },
              },
              {
                key: "_onClosed",
                value: function() {
                  if (
                    (this.opened && this.close(),
                    this.$.overlay._items && this._focusedIndex > -1)
                  ) {
                    var e = this.$.overlay._items[this._focusedIndex];
                    this.selectedItem !== e && (this.selectedItem = e),
                      (this._inputElementValue = this._getItemLabel(
                        this.selectedItem
                      ));
                  } else if (
                    "" === this._inputElementValue ||
                    void 0 === this._inputElementValue
                  )
                    (this.selectedItem = null),
                      this.allowCustomValue && (this.value = "");
                  else if (this.allowCustomValue) {
                    var t = new CustomEvent("custom-value-set", {
                      detail: this._inputElementValue,
                      composed: !0,
                      cancelable: !0,
                      bubbles: !0,
                    });
                    if ((this.dispatchEvent(t), !t.defaultPrevented)) {
                      var n = this._inputElementValue;
                      this._selectItemForValue(n), (this.value = n);
                    }
                  } else
                    this._inputElementValue = this.selectedItem
                      ? this._getItemLabel(this.selectedItem)
                      : "";
                  this._detectAndDispatchChange(),
                    this._clearSelectionRange(),
                    this.dataProvider || (this.filter = "");
                },
              },
              {
                key: "_inputValueChanged",
                value: function(e) {
                  -1 !== e.composedPath().indexOf(this.inputElement) &&
                    ((this._inputElementValue = this.inputElement[
                      this._propertyForValue
                    ]),
                    this._filterFromInput());
                },
              },
              {
                key: "_filterFromInput",
                value: function(e) {
                  this.opened || this.open(),
                    this.filter === this._inputElementValue
                      ? this._filterChanged(
                          this.filter,
                          this.itemValuePath,
                          this.itemLabelPath
                        )
                      : (this.filter = this._inputElementValue);
                },
              },
              {
                key: "_itemLabelPathChanged",
                value: function(e, t) {
                  "string" != typeof e &&
                    console.error(
                      "You should set itemLabelPath to a valid string"
                    );
                },
              },
              {
                key: "_filterChanged",
                value: function(e, t, n) {
                  void 0 !== e &&
                    (this.items
                      ? (this.filteredItems = this._filterItems(this.items, e))
                      : this._filteredItemsChanged(
                          { path: "filteredItems", value: this.filteredItems },
                          t,
                          n
                        ));
                },
              },
              {
                key: "_loadingChanged",
                value: function(e) {
                  e && (this._focusedIndex = -1);
                },
              },
              {
                key: "_revertInputValue",
                value: function() {
                  "" !== this.filter
                    ? (this._inputElementValue = this.filter)
                    : this._revertInputValueToValue(),
                    this._clearSelectionRange();
                },
              },
              {
                key: "_revertInputValueToValue",
                value: function() {
                  this.allowCustomValue && !this.selectedItem
                    ? (this._inputElementValue = this.value)
                    : (this._inputElementValue = this._getItemLabel(
                        this.selectedItem
                      ));
                },
              },
              {
                key: "_resizeDropdown",
                value: function() {
                  this.$.overlay.$.dropdown.notifyResize();
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
                key: "_selectedItemChanged",
                value: function(e, t) {
                  if (null == e)
                    this.filteredItems &&
                      (this.allowCustomValue || (this.value = ""),
                      this._updateHasValue("" !== this.value),
                      (this._inputElementValue = this.value));
                  else {
                    var n = this._getItemValue(e);
                    this.value !== n && (this.value = n),
                      this._updateHasValue(!0),
                      (this._inputElementValue = this._getItemLabel(e)),
                      this.inputElement &&
                        (this.inputElement[
                          this._propertyForValue
                        ] = this._inputElementValue);
                  }
                  (this.$.overlay._selectedItem = e),
                    this.filteredItems &&
                      this.$.overlay._items &&
                      (this._focusedIndex = this.filteredItems.indexOf(e));
                },
              },
              {
                key: "_valueChanged",
                value: function(e, t) {
                  if ("" !== e || void 0 !== t) {
                    var n;
                    if (this._isValidValue(e))
                      this._getItemValue(this.selectedItem) !== e
                        ? this._selectItemForValue(e)
                        : (n = this.selectedItem),
                        !n &&
                          this.allowCustomValue &&
                          (this._inputElementValue = e),
                        this._updateHasValue("" !== this.value);
                    else this.selectedItem = null;
                    this._lastCommittedValue = void 0;
                  }
                },
              },
              {
                key: "_detectAndDispatchChange",
                value: function() {
                  this.value !== this._lastCommittedValue &&
                    (this.dispatchEvent(
                      new CustomEvent("change", { bubbles: !0 })
                    ),
                    (this._lastCommittedValue = this.value));
                },
              },
              {
                key: "_itemsChanged",
                value: function(e, t) {
                  var n = this;
                  this._ensureItemsOrDataProvider(function() {
                    n.items = t;
                  });
                },
              },
              {
                key: "_itemsOrPathsChanged",
                value: function(e, t, n) {
                  if (
                    void 0 !== e.value &&
                    ("items" === e.path || "items.splices" === e.path)
                  ) {
                    this.filteredItems = this.items
                      ? this.items.slice(0)
                      : this.items;
                    var i = this._indexOfValue(this.value, this.items);
                    this._focusedIndex = i;
                    var r = i > -1 && this.items[i];
                    r && (this.selectedItem = r);
                  }
                },
              },
              {
                key: "_filteredItemsChanged",
                value: function(e, t, n) {
                  void 0 !== e.value &&
                    (("filteredItems" !== e.path &&
                      "filteredItems.splices" !== e.path) ||
                      (this._setOverlayItems(this.filteredItems),
                      (this._focusedIndex = this.opened
                        ? this.$.overlay.indexOfLabel(this.filter)
                        : this._indexOfValue(this.value, this.filteredItems)),
                      this.opened && this._repositionOverlay()));
                },
              },
              {
                key: "_filterItems",
                value: function(e, t) {
                  var n = this;
                  return e
                    ? e.filter(function(e) {
                        return (
                          (t = t ? t.toString().toLowerCase() : ""),
                          n
                            ._getItemLabel(e)
                            .toString()
                            .toLowerCase()
                            .indexOf(t) > -1
                        );
                      })
                    : e;
                },
              },
              {
                key: "_selectItemForValue",
                value: function(e) {
                  var t = this._indexOfValue(e, this.filteredItems),
                    n = this.selectedItem;
                  (this.selectedItem =
                    t >= 0
                      ? this.filteredItems[t]
                      : this.dataProvider && void 0 === this.selectedItem
                      ? void 0
                      : null),
                    null === this.selectedItem &&
                      null === n &&
                      this._selectedItemChanged(this.selectedItem);
                },
              },
              {
                key: "_setOverlayItems",
                value: function(e) {
                  this.$.overlay.set("_items", e),
                    this.opened && this._resizeDropdown();
                },
              },
              {
                key: "_repositionOverlay",
                value: function() {
                  var e = this;
                  setTimeout(function() {
                    e._resizeDropdown(),
                      e.$.overlay.updateViewportBoundaries(),
                      e.$.overlay.ensureItemsRendered(),
                      e.$.overlay._selector.notifyResize(),
                      Object(T.b)();
                  }, 1);
                },
              },
              {
                key: "_indexOfValue",
                value: function(e, t) {
                  if (t && this._isValidValue(e))
                    for (var n = 0; n < t.length; n++)
                      if (this._getItemValue(t[n]) === e) return n;
                  return -1;
                },
              },
              {
                key: "_isValidValue",
                value: function(e) {
                  return null != e;
                },
              },
              {
                key: "_overlaySelectedItemChanged",
                value: function(e) {
                  e.stopPropagation(),
                    e.detail.item instanceof D ||
                      (this.opened && this.close(),
                      this.selectedItem !== e.detail.item &&
                        ((this.selectedItem = e.detail.item),
                        this._detectAndDispatchChange()));
                },
              },
              {
                key: "validate",
                value: function() {
                  return !(this.invalid = !this.checkValidity());
                },
              },
              {
                key: "checkValidity",
                value: function() {
                  if (this.inputElement.validate)
                    return this.inputElement.validate();
                },
              },
              {
                key: "_ensureTemplatized",
                value: function() {
                  if (!this._TemplateClass) {
                    var e = this._itemTemplate || this._getRootTemplate();
                    e &&
                      (this._TemplateClass = Object(A.b)(e, this, {
                        instanceProps: this._instanceProps,
                        forwardHostProp: function(e, t) {
                          var n = this.$.overlay._selector.querySelectorAll(
                            "vaadin-combo-box-item"
                          );
                          Array.prototype.forEach.call(n, function(n) {
                            n._itemTemplateInstance &&
                              (n._itemTemplateInstance.set(e, t),
                              n._itemTemplateInstance.notifyPath(e, t, !0));
                          });
                        },
                      }));
                  }
                },
              },
              {
                key: "_getRootTemplate",
                value: function() {
                  return Array.prototype.filter.call(this.children, function(
                    e
                  ) {
                    return "TEMPLATE" === e.tagName;
                  })[0];
                },
              },
              {
                key: "_preventInputBlur",
                value: function() {
                  this._toggleElement &&
                    this._toggleElement.addEventListener(
                      "click",
                      this._preventDefault
                    ),
                    this._clearElement &&
                      this._clearElement.addEventListener(
                        "click",
                        this._preventDefault
                      );
                },
              },
              {
                key: "_restoreInputBlur",
                value: function() {
                  this._toggleElement &&
                    this._toggleElement.removeEventListener(
                      "click",
                      this._preventDefault
                    ),
                    this._clearElement &&
                      this._clearElement.removeEventListener(
                        "click",
                        this._preventDefault
                      );
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.preventDefault();
                },
              },
              {
                key: "_stopPropagation",
                value: function(e) {
                  e.stopPropagation();
                },
              },
              {
                key: "_propertyForValue",
                get: function() {
                  return "value";
                },
              },
              {
                key: "_instanceProps",
                get: function() {
                  return { item: !0, index: !0, selected: !0, focused: !0 };
                },
              },
            ]) && $(i.prototype, r),
            o && $(i, o),
            n
          );
        })();
      };
      function K(e) {
        return (K =
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
      function W(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
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
        return !t || ("object" !== K(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function X(e, t, n) {
        return (X =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = G(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Z(e, t) {
        return (Z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var J = function(e) {
          return (function(t) {
            function n() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                Y(this, G(n).apply(this, arguments))
              );
            }
            var i, r, o;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Z(e, t);
              })(n, e),
              (i = n),
              (o = [
                {
                  key: "properties",
                  get: function() {
                    return {
                      pageSize: {
                        type: Number,
                        value: 50,
                        observer: "_pageSizeChanged",
                      },
                      size: { type: Number, observer: "_sizeChanged" },
                      dataProvider: {
                        type: Object,
                        observer: "_dataProviderChanged",
                      },
                      _pendingRequests: {
                        value: function() {
                          return {};
                        },
                      },
                      __placeHolder: { value: new D() },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function() {
                    return [
                      "_dataProviderFilterChanged(filter, dataProvider)",
                      "_dataProviderClearFilter(dataProvider, opened, value)",
                      "_warnDataProviderValue(dataProvider, value)",
                      "_ensureFirstPage(opened)",
                    ];
                  },
                },
              ]),
              (r = [
                {
                  key: "_dataProviderClearFilter",
                  value: function(e, t, n) {
                    e &&
                      this.filter &&
                      ((this.size = void 0),
                      (this._pendingRequests = {}),
                      (this.filter = ""),
                      this.clearCache());
                  },
                },
                {
                  key: "ready",
                  value: function() {
                    var e = this;
                    X(G(n.prototype), "ready", this).call(this),
                      this.clearCache(),
                      this.$.overlay.addEventListener(
                        "index-requested",
                        function(t) {
                          var n = t.detail.index;
                          if (void 0 !== n) {
                            var i = e._getPageForIndex(n);
                            e._shouldLoadPage(i) && e._loadPage(i);
                          }
                        }
                      );
                  },
                },
                {
                  key: "_dataProviderFilterChanged",
                  value: function() {
                    this.dataProvider &&
                      this.opened &&
                      ((this.size = void 0),
                      (this._pendingRequests = {}),
                      this.clearCache());
                  },
                },
                {
                  key: "_ensureFirstPage",
                  value: function(e) {
                    e && this._shouldLoadPage(0) && this._loadPage(0);
                  },
                },
                {
                  key: "_shouldLoadPage",
                  value: function(e) {
                    if (!this.filteredItems || this._forceNextRequest)
                      return (this._forceNextRequest = !1), !0;
                    var t = this.filteredItems[e * this.pageSize];
                    return void 0 !== t ? t instanceof D : void 0 === this.size;
                  },
                },
                {
                  key: "_loadPage",
                  value: function(e) {
                    var t = this;
                    if (!this._pendingRequests[e] && this.dataProvider) {
                      this.loading = !0;
                      var n = {
                          page: e,
                          pageSize: this.pageSize,
                          filter: this.filter,
                        },
                        i = function i(r, o) {
                          if (t._pendingRequests[e] === i) {
                            if (t.filteredItems)
                              t.splice.apply(
                                t,
                                [
                                  "filteredItems",
                                  n.page * n.pageSize,
                                  r.length,
                                ].concat(W(r))
                              );
                            else {
                              var s = [];
                              s.splice.apply(
                                s,
                                [n.page * n.pageSize, r.length].concat(W(r))
                              ),
                                (t.filteredItems = s);
                            }
                            t._isValidValue(t.value) &&
                              t._getItemValue(t.selectedItem) !== t.value &&
                              t._selectItemForValue(t.value),
                              (t.size = o),
                              delete t._pendingRequests[e],
                              0 === Object.keys(t._pendingRequests).length &&
                                (t.loading = !1);
                          }
                        };
                      (this._pendingRequests[e] = i), this.dataProvider(n, i);
                    }
                  },
                },
                {
                  key: "_getPageForIndex",
                  value: function(e) {
                    return Math.floor(e / this.pageSize);
                  },
                },
                {
                  key: "clearCache",
                  value: function() {
                    if (this.dataProvider) {
                      this._pendingRequests = {};
                      for (var e = [], t = 0; t < (this.size || 0); t++)
                        e.push(this.__placeHolder);
                      (this.filteredItems = e),
                        this.opened
                          ? this._loadPage(0)
                          : (this._forceNextRequest = !0);
                    }
                  },
                },
                {
                  key: "_sizeChanged",
                  value: function() {
                    for (
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        t = (this.filteredItems || []).slice(0, e),
                        n = 0;
                      n < e;
                      n++
                    )
                      t[n] = void 0 !== t[n] ? t[n] : this.__placeHolder;
                    this.filteredItems = t;
                  },
                },
                {
                  key: "_pageSizeChanged",
                  value: function(e, t) {
                    if (Math.floor(e) !== e || 0 === e)
                      throw ((this.pageSize = t),
                      new Error("`pageSize` value must be an integer > 0"));
                    this.clearCache();
                  },
                },
                {
                  key: "_dataProviderChanged",
                  value: function(e, t) {
                    var n = this;
                    this._ensureItemsOrDataProvider(function() {
                      n.dataProvider = t;
                    });
                  },
                },
                {
                  key: "_ensureItemsOrDataProvider",
                  value: function(e) {
                    if (void 0 !== this.items && void 0 !== this.dataProvider)
                      throw (e(),
                      new Error(
                        "Using `items` and `dataProvider` together is not supported"
                      ));
                  },
                },
                {
                  key: "_warnDataProviderValue",
                  value: function(e, t) {
                    if (
                      e &&
                      "" !== t &&
                      (void 0 === this.selectedItem ||
                        null === this.selectedItem)
                    ) {
                      var n = this._indexOfValue(t, this.filteredItems);
                      (n < 0 || !this._getItemLabel(this.filteredItems[n])) &&
                        console.warn(
                          "Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`"
                        );
                    }
                  },
                },
              ]) && U(i.prototype, r),
              o && U(i, o),
              n
            );
          })();
        },
        Q = (n(4), n(95)),
        ee = n(242),
        te = n(98),
        ne = n(5),
        ie = n(1),
        re = n(97),
        oe = n(21),
        se = n(2);
      function ae() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>\n\n    <div id="items">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var le = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),
        ce = le && le[1] >= 8;
      function ue(e) {
        return (ue =
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
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part="content" id="content"></div>\n',
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
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function pe(e, t) {
        return !t || ("object" !== ue(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function fe(e, t, n) {
        return (fe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = me(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function me(e) {
        return (me = Object.setPrototypeOf
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
      Object(ne.a)({
        _template: Object(i.a)(ae()),
        is: "iron-list",
        properties: {
          items: { type: Array },
          as: { type: String, value: "item" },
          indexAs: { type: String, value: "index" },
          selectedAs: { type: String, value: "selected" },
          grid: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
            observer: "_gridChanged",
          },
          selectionEnabled: { type: Boolean, value: !1 },
          selectedItem: { type: Object, notify: !0 },
          selectedItems: { type: Object, notify: !0 },
          multiSelection: { type: Boolean, value: !1 },
          scrollOffset: { type: Number, value: 0 },
        },
        observers: [
          "_itemsChanged(items.*)",
          "_selectionEnabledChanged(selectionEnabled)",
          "_multiSelectionChanged(multiSelection)",
          "_setOverflow(scrollTarget, scrollOffset)",
        ],
        behaviors: [re.a, Q.a, ee.a, te.a],
        _ratio: 0.5,
        _scrollerPaddingTop: 0,
        _scrollPosition: 0,
        _physicalSize: 0,
        _physicalAverage: 0,
        _physicalAverageCount: 0,
        _physicalTop: 0,
        _virtualCount: 0,
        _estScrollHeight: 0,
        _scrollHeight: 0,
        _viewportHeight: 0,
        _viewportWidth: 0,
        _physicalItems: null,
        _physicalSizes: null,
        _firstVisibleIndexVal: null,
        _lastVisibleIndexVal: null,
        _maxPages: 2,
        _focusedItem: null,
        _focusedVirtualIndex: -1,
        _focusedPhysicalIndex: -1,
        _offscreenFocusedItem: null,
        _focusBackfillItem: null,
        _itemsPerRow: 1,
        _itemWidth: 0,
        _rowHeight: 0,
        _templateCost: 0,
        _parentModel: !0,
        get _physicalBottom() {
          return this._physicalTop + this._physicalSize;
        },
        get _scrollBottom() {
          return this._scrollPosition + this._viewportHeight;
        },
        get _virtualEnd() {
          return this._virtualStart + this._physicalCount - 1;
        },
        get _hiddenContentSize() {
          return (
            (this.grid
              ? this._physicalRows * this._rowHeight
              : this._physicalSize) - this._viewportHeight
          );
        },
        get _itemsParent() {
          return Object(ie.a)(Object(ie.a)(this._userTemplate).parentNode);
        },
        get _maxScrollTop() {
          return (
            this._estScrollHeight - this._viewportHeight + this._scrollOffset
          );
        },
        get _maxVirtualStart() {
          var e = this._convertIndexToCompleteRow(this._virtualCount);
          return Math.max(0, e - this._physicalCount);
        },
        set _virtualStart(e) {
          (e = this._clamp(e, 0, this._maxVirtualStart)),
            this.grid && (e -= e % this._itemsPerRow),
            (this._virtualStartVal = e);
        },
        get _virtualStart() {
          return this._virtualStartVal || 0;
        },
        set _physicalStart(e) {
          (e %= this._physicalCount) < 0 && (e = this._physicalCount + e),
            this.grid && (e -= e % this._itemsPerRow),
            (this._physicalStartVal = e);
        },
        get _physicalStart() {
          return this._physicalStartVal || 0;
        },
        get _physicalEnd() {
          return (
            (this._physicalStart + this._physicalCount - 1) %
            this._physicalCount
          );
        },
        set _physicalCount(e) {
          this._physicalCountVal = e;
        },
        get _physicalCount() {
          return this._physicalCountVal || 0;
        },
        get _optPhysicalSize() {
          return 0 === this._viewportHeight
            ? 1 / 0
            : this._viewportHeight * this._maxPages;
        },
        get _isVisible() {
          return Boolean(this.offsetWidth || this.offsetHeight);
        },
        get firstVisibleIndex() {
          var e = this._firstVisibleIndexVal;
          if (null == e) {
            var t = this._physicalTop + this._scrollOffset;
            (e =
              this._iterateItems(function(e, n) {
                return (t += this._getPhysicalSizeIncrement(e)) >
                  this._scrollPosition
                  ? this.grid
                    ? n - (n % this._itemsPerRow)
                    : n
                  : this.grid && this._virtualCount - 1 === n
                  ? n - (n % this._itemsPerRow)
                  : void 0;
              }) || 0),
              (this._firstVisibleIndexVal = e);
          }
          return e;
        },
        get lastVisibleIndex() {
          var e = this._lastVisibleIndexVal;
          if (null == e) {
            if (this.grid)
              e = Math.min(
                this._virtualCount,
                this.firstVisibleIndex +
                  this._estRowsInView * this._itemsPerRow -
                  1
              );
            else {
              var t = this._physicalTop + this._scrollOffset;
              this._iterateItems(function(n, i) {
                t < this._scrollBottom && (e = i),
                  (t += this._getPhysicalSizeIncrement(n));
              });
            }
            this._lastVisibleIndexVal = e;
          }
          return e;
        },
        get _defaultScrollTarget() {
          return this;
        },
        get _virtualRowCount() {
          return Math.ceil(this._virtualCount / this._itemsPerRow);
        },
        get _estRowsInView() {
          return Math.ceil(this._viewportHeight / this._rowHeight);
        },
        get _physicalRows() {
          return Math.ceil(this._physicalCount / this._itemsPerRow);
        },
        get _scrollOffset() {
          return this._scrollerPaddingTop + this.scrollOffset;
        },
        ready: function() {
          this.addEventListener("focus", this._didFocus.bind(this), !0);
        },
        attached: function() {
          this._debounce("_render", this._render, j.a),
            this.listen(this, "iron-resize", "_resizeHandler"),
            this.listen(this, "keydown", "_keydownHandler");
        },
        detached: function() {
          this.unlisten(this, "iron-resize", "_resizeHandler"),
            this.unlisten(this, "keydown", "_keydownHandler");
        },
        _setOverflow: function(e) {
          (this.style.webkitOverflowScrolling = e === this ? "touch" : ""),
            (this.style.overflowY = e === this ? "auto" : ""),
            (this._lastVisibleIndexVal = null),
            (this._firstVisibleIndexVal = null),
            this._debounce("_render", this._render, j.a);
        },
        updateViewportBoundaries: function() {
          var e = window.getComputedStyle(this);
          (this._scrollerPaddingTop =
            this.scrollTarget === this ? 0 : parseInt(e["padding-top"], 10)),
            (this._isRTL = Boolean("rtl" === e.direction)),
            (this._viewportWidth = this.$.items.offsetWidth),
            (this._viewportHeight = this._scrollTargetHeight),
            this.grid && this._updateGridMetrics();
        },
        _scrollHandler: function() {
          var e = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop)),
            t = e - this._scrollPosition,
            n = t >= 0;
          if (
            ((this._scrollPosition = e),
            (this._firstVisibleIndexVal = null),
            (this._lastVisibleIndexVal = null),
            Math.abs(t) > this._physicalSize && this._physicalSize > 0)
          ) {
            t -= this._scrollOffset;
            var i = Math.round(t / this._physicalAverage) * this._itemsPerRow;
            (this._virtualStart = this._virtualStart + i),
              (this._physicalStart = this._physicalStart + i),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage),
              this._update();
          } else if (this._physicalCount > 0) {
            var r = this._getReusables(n);
            n
              ? ((this._physicalTop = r.physicalTop),
                (this._virtualStart = this._virtualStart + r.indexes.length),
                (this._physicalStart = this._physicalStart + r.indexes.length))
              : ((this._virtualStart = this._virtualStart - r.indexes.length),
                (this._physicalStart = this._physicalStart - r.indexes.length)),
              this._update(r.indexes, n ? null : r.indexes),
              this._debounce(
                "_increasePoolIfNeeded",
                this._increasePoolIfNeeded.bind(this, 0),
                j.c
              );
          }
        },
        _getReusables: function(e) {
          var t,
            n,
            i,
            r = [],
            o = this._hiddenContentSize * this._ratio,
            s = this._virtualStart,
            a = this._virtualEnd,
            l = this._physicalCount,
            c = this._physicalTop + this._scrollOffset,
            u = this._physicalBottom + this._scrollOffset,
            d = this._scrollTop,
            h = this._scrollBottom;
          for (
            e
              ? ((t = this._physicalStart), this._physicalEnd, (n = d - c))
              : ((t = this._physicalEnd), this._physicalStart, (n = u - h));
            (n -= i = this._getPhysicalSizeIncrement(t)),
              !(r.length >= l || n <= o);

          )
            if (e) {
              if (a + r.length + 1 >= this._virtualCount) break;
              if (c + i >= d - this._scrollOffset) break;
              r.push(t), (c += i), (t = (t + 1) % l);
            } else {
              if (s - r.length <= 0) break;
              if (c + this._physicalSize - i <= h) break;
              r.push(t), (c -= i), (t = 0 === t ? l - 1 : t - 1);
            }
          return { indexes: r, physicalTop: c - this._scrollOffset };
        },
        _update: function(e, t) {
          if (!((e && 0 === e.length) || 0 === this._physicalCount)) {
            if (
              (this._manageFocus(),
              this._assignModels(e),
              this._updateMetrics(e),
              t)
            )
              for (; t.length; ) {
                var n = t.pop();
                this._physicalTop -= this._getPhysicalSizeIncrement(n);
              }
            this._positionItems(), this._updateScrollerSize();
          }
        },
        _createPool: function(e) {
          var t, n;
          this._ensureTemplatized();
          var i = new Array(e);
          for (t = 0; t < e; t++)
            (n = this.stamp(null)),
              (i[t] = n.root.querySelector("*")),
              this._itemsParent.appendChild(n.root);
          return i;
        },
        _isClientFull: function() {
          return (
            0 != this._scrollBottom &&
            this._physicalBottom - 1 >= this._scrollBottom &&
            this._physicalTop <= this._scrollPosition
          );
        },
        _increasePoolIfNeeded: function(e) {
          var t = this._clamp(
            this._physicalCount + e,
            3,
            this._virtualCount - this._virtualStart
          );
          if (((t = this._convertIndexToCompleteRow(t)), this.grid)) {
            var n = t % this._itemsPerRow;
            n && t - n <= this._physicalCount && (t += this._itemsPerRow),
              (t -= n);
          }
          var i = t - this._physicalCount,
            r = Math.round(0.5 * this._physicalCount);
          if (!(i < 0)) {
            if (i > 0) {
              var o = window.performance.now();
              [].push.apply(this._physicalItems, this._createPool(i));
              for (var s = 0; s < i; s++) this._physicalSizes.push(0);
              (this._physicalCount = this._physicalCount + i),
                this._physicalStart > this._physicalEnd &&
                  this._isIndexRendered(this._focusedVirtualIndex) &&
                  this._getPhysicalIndex(this._focusedVirtualIndex) <
                    this._physicalEnd &&
                  (this._physicalStart = this._physicalStart + i),
                this._update(),
                (this._templateCost = (window.performance.now() - o) / i),
                (r = Math.round(0.5 * this._physicalCount));
            }
            this._virtualEnd >= this._virtualCount - 1 ||
              0 === r ||
              (this._isClientFull()
                ? this._physicalSize < this._optPhysicalSize &&
                  this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(
                      this,
                      this._clamp(Math.round(50 / this._templateCost), 1, r)
                    ),
                    j.b
                  )
                : this._debounce(
                    "_increasePoolIfNeeded",
                    this._increasePoolIfNeeded.bind(this, r),
                    j.c
                  ));
          }
        },
        _render: function() {
          if (this.isAttached && this._isVisible)
            if (0 !== this._physicalCount) {
              var e = this._getReusables(!0);
              (this._physicalTop = e.physicalTop),
                (this._virtualStart = this._virtualStart + e.indexes.length),
                (this._physicalStart = this._physicalStart + e.indexes.length),
                this._update(e.indexes),
                this._update(),
                this._increasePoolIfNeeded(0);
            } else
              this._virtualCount > 0 &&
                (this.updateViewportBoundaries(),
                this._increasePoolIfNeeded(3));
        },
        _ensureTemplatized: function() {
          if (!this.ctor) {
            (this._userTemplate = this.queryEffectiveChildren("template")),
              this._userTemplate ||
                console.warn(
                  "iron-list requires a template to be provided in light-dom"
                );
            var e = { __key__: !0 };
            (e[this.as] = !0),
              (e[this.indexAs] = !0),
              (e[this.selectedAs] = !0),
              (e.tabIndex = !0),
              (this._instanceProps = e),
              this.templatize(this._userTemplate, this.mutableData);
          }
        },
        _gridChanged: function(e, t) {
          void 0 !== t &&
            (this.notifyResize(),
            Object(T.b)(),
            e && this._updateGridMetrics());
        },
        _itemsChanged: function(e) {
          if ("items" === e.path)
            (this._virtualStart = 0),
              (this._physicalTop = 0),
              (this._virtualCount = this.items ? this.items.length : 0),
              (this._physicalIndexForKey = {}),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null),
              (this._physicalCount = this._physicalCount || 0),
              (this._physicalItems = this._physicalItems || []),
              (this._physicalSizes = this._physicalSizes || []),
              (this._physicalStart = 0),
              this._scrollTop > this._scrollOffset &&
                this._resetScrollPosition(0),
              this._removeFocusedItem(),
              this._debounce("_render", this._render, j.a);
          else if ("items.splices" === e.path) {
            if (
              (this._adjustVirtualIndex(e.value.indexSplices),
              (this._virtualCount = this.items ? this.items.length : 0),
              e.value.indexSplices.some(function(e) {
                return e.addedCount > 0 || e.removed.length > 0;
              }))
            ) {
              var t = this._getActiveElement();
              this.contains(t) && t.blur();
            }
            var n = e.value.indexSplices.some(function(e) {
              return (
                e.index + e.addedCount >= this._virtualStart &&
                e.index <= this._virtualEnd
              );
            }, this);
            (this._isClientFull() && !n) ||
              this._debounce("_render", this._render, j.a);
          } else
            "items.length" !== e.path && this._forwardItemPath(e.path, e.value);
        },
        _forwardItemPath: function(e, t) {
          var n,
            i,
            r,
            o = (e = e.slice(6)).indexOf(".");
          -1 === o && (o = e.length);
          var s = this.modelForElement(this._offscreenFocusedItem),
            a = parseInt(e.substring(0, o), 10);
          (n = this._isIndexRendered(a))
            ? ((i = this._getPhysicalIndex(a)),
              (r = this.modelForElement(this._physicalItems[i])))
            : s && (r = s),
            r &&
              r[this.indexAs] === a &&
              ((e = e.substring(o + 1)),
              (e = this.as + (e ? "." + e : "")),
              r._setPendingPropertyOrPath(e, t, !1, !0),
              r._flushProperties && r._flushProperties(!0),
              n &&
                (this._updateMetrics([i]),
                this._positionItems(),
                this._updateScrollerSize()));
        },
        _adjustVirtualIndex: function(e) {
          e.forEach(function(e) {
            if (
              (e.removed.forEach(this._removeItem, this),
              e.index < this._virtualStart)
            ) {
              var t = Math.max(
                e.addedCount - e.removed.length,
                e.index - this._virtualStart
              );
              (this._virtualStart = this._virtualStart + t),
                this._focusedVirtualIndex >= 0 &&
                  (this._focusedVirtualIndex = this._focusedVirtualIndex + t);
            }
          }, this);
        },
        _removeItem: function(e) {
          this.$.selector.deselect(e),
            this._focusedItem &&
              this.modelForElement(this._focusedItem)[this.as] === e &&
              this._removeFocusedItem();
        },
        _iterateItems: function(e, t) {
          var n, i, r, o;
          if (2 === arguments.length && t) {
            for (o = 0; o < t.length; o++)
              if (
                ((n = t[o]),
                (i = this._computeVidx(n)),
                null != (r = e.call(this, n, i)))
              )
                return r;
          } else {
            for (
              n = this._physicalStart, i = this._virtualStart;
              n < this._physicalCount;
              n++, i++
            )
              if (null != (r = e.call(this, n, i))) return r;
            for (n = 0; n < this._physicalStart; n++, i++)
              if (null != (r = e.call(this, n, i))) return r;
          }
        },
        _computeVidx: function(e) {
          return e >= this._physicalStart
            ? this._virtualStart + (e - this._physicalStart)
            : this._virtualStart +
                (this._physicalCount - this._physicalStart) +
                e;
        },
        _assignModels: function(e) {
          this._iterateItems(function(e, t) {
            var n = this._physicalItems[e],
              i = this.items && this.items[t];
            if (null != i) {
              var r = this.modelForElement(n);
              (r.__key__ = null),
                this._forwardProperty(r, this.as, i),
                this._forwardProperty(
                  r,
                  this.selectedAs,
                  this.$.selector.isSelected(i)
                ),
                this._forwardProperty(r, this.indexAs, t),
                this._forwardProperty(
                  r,
                  "tabIndex",
                  this._focusedVirtualIndex === t ? 0 : -1
                ),
                (this._physicalIndexForKey[r.__key__] = e),
                r._flushProperties && r._flushProperties(!0),
                n.removeAttribute("hidden");
            } else n.setAttribute("hidden", "");
          }, e);
        },
        _updateMetrics: function(e) {
          Object(T.b)();
          var t = 0,
            n = 0,
            i = this._physicalAverageCount,
            r = this._physicalAverage;
          this._iterateItems(function(e, i) {
            (n += this._physicalSizes[e]),
              (this._physicalSizes[e] = this._physicalItems[e].offsetHeight),
              (t += this._physicalSizes[e]),
              (this._physicalAverageCount += this._physicalSizes[e] ? 1 : 0);
          }, e),
            this.grid
              ? (this._updateGridMetrics(),
                (this._physicalSize =
                  Math.ceil(this._physicalCount / this._itemsPerRow) *
                  this._rowHeight))
              : ((n =
                  1 === this._itemsPerRow
                    ? n
                    : Math.ceil(this._physicalCount / this._itemsPerRow) *
                      this._rowHeight),
                (this._physicalSize = this._physicalSize + t - n),
                (this._itemsPerRow = 1)),
            this._physicalAverageCount !== i &&
              (this._physicalAverage = Math.round(
                (r * i + t) / this._physicalAverageCount
              ));
        },
        _updateGridMetrics: function() {
          (this._itemWidth =
            this._physicalCount > 0
              ? this._physicalItems[0].getBoundingClientRect().width
              : 200),
            (this._rowHeight =
              this._physicalCount > 0
                ? this._physicalItems[0].offsetHeight
                : 200),
            (this._itemsPerRow = this._itemWidth
              ? Math.floor(this._viewportWidth / this._itemWidth)
              : this._itemsPerRow);
        },
        _positionItems: function() {
          this._adjustScrollPosition();
          var e = this._physicalTop;
          if (this.grid) {
            var t = this._itemsPerRow * this._itemWidth,
              n = (this._viewportWidth - t) / 2;
            this._iterateItems(function(t, i) {
              var r = i % this._itemsPerRow,
                o = Math.floor(r * this._itemWidth + n);
              this._isRTL && (o *= -1),
                this.translate3d(o + "px", e + "px", 0, this._physicalItems[t]),
                this._shouldRenderNextRow(i) && (e += this._rowHeight);
            });
          } else
            this._iterateItems(function(t, n) {
              this.translate3d(0, e + "px", 0, this._physicalItems[t]),
                (e += this._physicalSizes[t]);
            });
        },
        _getPhysicalSizeIncrement: function(e) {
          return this.grid
            ? this._computeVidx(e) % this._itemsPerRow != this._itemsPerRow - 1
              ? 0
              : this._rowHeight
            : this._physicalSizes[e];
        },
        _shouldRenderNextRow: function(e) {
          return e % this._itemsPerRow == this._itemsPerRow - 1;
        },
        _adjustScrollPosition: function() {
          var e =
            0 === this._virtualStart
              ? this._physicalTop
              : Math.min(this._scrollPosition + this._physicalTop, 0);
          if (0 !== e) {
            this._physicalTop = this._physicalTop - e;
            var t = this._scrollTop;
            !ce && t > 0 && this._resetScrollPosition(t - e);
          }
        },
        _resetScrollPosition: function(e) {
          this.scrollTarget &&
            e >= 0 &&
            ((this._scrollTop = e), (this._scrollPosition = this._scrollTop));
        },
        _updateScrollerSize: function(e) {
          this.grid
            ? (this._estScrollHeight = this._virtualRowCount * this._rowHeight)
            : (this._estScrollHeight =
                this._physicalBottom +
                Math.max(
                  this._virtualCount - this._physicalCount - this._virtualStart,
                  0
                ) *
                  this._physicalAverage),
            ((e =
              (e =
                (e = e || 0 === this._scrollHeight) ||
                this._scrollPosition >=
                  this._estScrollHeight - this._physicalSize) ||
              (this.grid &&
                this.$.items.style.height < this._estScrollHeight)) ||
              Math.abs(this._estScrollHeight - this._scrollHeight) >=
                this._viewportHeight) &&
              ((this.$.items.style.height = this._estScrollHeight + "px"),
              (this._scrollHeight = this._estScrollHeight));
        },
        scrollToItem: function(e) {
          return this.scrollToIndex(this.items.indexOf(e));
        },
        scrollToIndex: function(e) {
          if (
            !("number" != typeof e || e < 0 || e > this.items.length - 1) &&
            (Object(T.b)(), 0 !== this._physicalCount)
          ) {
            (e = this._clamp(e, 0, this._virtualCount - 1)),
              (!this._isIndexRendered(e) || e >= this._maxVirtualStart) &&
                (this._virtualStart = this.grid
                  ? e - 2 * this._itemsPerRow
                  : e - 1),
              this._manageFocus(),
              this._assignModels(),
              this._updateMetrics(),
              (this._physicalTop =
                Math.floor(this._virtualStart / this._itemsPerRow) *
                this._physicalAverage);
            for (
              var t = this._physicalStart,
                n = this._virtualStart,
                i = 0,
                r = this._hiddenContentSize;
              n < e && i <= r;

            )
              (i += this._getPhysicalSizeIncrement(t)),
                (t = (t + 1) % this._physicalCount),
                n++;
            this._updateScrollerSize(!0),
              this._positionItems(),
              this._resetScrollPosition(
                this._physicalTop + this._scrollOffset + i
              ),
              this._increasePoolIfNeeded(0),
              (this._firstVisibleIndexVal = null),
              (this._lastVisibleIndexVal = null);
          }
        },
        _resetAverage: function() {
          (this._physicalAverage = 0), (this._physicalAverageCount = 0);
        },
        _resizeHandler: function() {
          this._debounce(
            "_render",
            function() {
              (this._firstVisibleIndexVal = null),
                (this._lastVisibleIndexVal = null),
                this._isVisible
                  ? (this.updateViewportBoundaries(),
                    this.toggleScrollListener(!0),
                    this._resetAverage(),
                    this._render())
                  : this.toggleScrollListener(!1);
            },
            j.a
          );
        },
        selectItem: function(e) {
          return this.selectIndex(this.items.indexOf(e));
        },
        selectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (
              (!this.multiSelection &&
                this.selectedItem &&
                this.clearSelection(),
              this._isIndexRendered(e))
            ) {
              var t = this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              );
              t && (t[this.selectedAs] = !0), this.updateSizeForIndex(e);
            }
            this.$.selector.selectIndex(e);
          }
        },
        deselectItem: function(e) {
          return this.deselectIndex(this.items.indexOf(e));
        },
        deselectIndex: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            if (this._isIndexRendered(e))
              (this.modelForElement(
                this._physicalItems[this._getPhysicalIndex(e)]
              )[this.selectedAs] = !1),
                this.updateSizeForIndex(e);
            this.$.selector.deselectIndex(e);
          }
        },
        toggleSelectionForItem: function(e) {
          return this.toggleSelectionForIndex(this.items.indexOf(e));
        },
        toggleSelectionForIndex: function(e) {
          (this.$.selector.isIndexSelected
          ? this.$.selector.isIndexSelected(e)
          : this.$.selector.isSelected(this.items[e]))
            ? this.deselectIndex(e)
            : this.selectIndex(e);
        },
        clearSelection: function() {
          this._iterateItems(function(e, t) {
            this.modelForElement(this._physicalItems[e])[this.selectedAs] = !1;
          }),
            this.$.selector.clearSelection();
        },
        _selectionEnabledChanged: function(e) {
          (e ? this.listen : this.unlisten).call(
            this,
            this,
            "tap",
            "_selectionHandler"
          );
        },
        _selectionHandler: function(e) {
          var t = this.modelForElement(e.target);
          if (t) {
            var n,
              i,
              r = Object(ie.a)(e).path[0],
              o = this._getActiveElement(),
              s = this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];
            "input" !== r.localName &&
              "button" !== r.localName &&
              "select" !== r.localName &&
              ((n = t.tabIndex),
              (t.tabIndex = -100),
              (i = o ? o.tabIndex : -1),
              (t.tabIndex = n),
              (o && s !== o && s.contains(o) && -100 !== i) ||
                this.toggleSelectionForItem(t[this.as]));
          }
        },
        _multiSelectionChanged: function(e) {
          this.clearSelection(), (this.$.selector.multi = e);
        },
        updateSizeForItem: function(e) {
          return this.updateSizeForIndex(this.items.indexOf(e));
        },
        updateSizeForIndex: function(e) {
          return this._isIndexRendered(e)
            ? (this._updateMetrics([this._getPhysicalIndex(e)]),
              this._positionItems(),
              null)
            : null;
        },
        _manageFocus: function() {
          var e = this._focusedVirtualIndex;
          e >= 0 && e < this._virtualCount
            ? this._isIndexRendered(e)
              ? this._restoreFocusedItem()
              : this._createFocusBackfillItem()
            : this._virtualCount > 0 &&
              this._physicalCount > 0 &&
              ((this._focusedPhysicalIndex = this._physicalStart),
              (this._focusedVirtualIndex = this._virtualStart),
              (this._focusedItem = this._physicalItems[this._physicalStart]));
        },
        _convertIndexToCompleteRow: function(e) {
          return (
            (this._itemsPerRow = this._itemsPerRow || 1),
            this.grid ? Math.ceil(e / this._itemsPerRow) * this._itemsPerRow : e
          );
        },
        _isIndexRendered: function(e) {
          return e >= this._virtualStart && e <= this._virtualEnd;
        },
        _isIndexVisible: function(e) {
          return e >= this.firstVisibleIndex && e <= this.lastVisibleIndex;
        },
        _getPhysicalIndex: function(e) {
          return (
            (this._physicalStart + (e - this._virtualStart)) %
            this._physicalCount
          );
        },
        focusItem: function(e) {
          this._focusPhysicalItem(e);
        },
        _focusPhysicalItem: function(e) {
          if (!(e < 0 || e >= this._virtualCount)) {
            this._restoreFocusedItem(),
              this._isIndexRendered(e) || this.scrollToIndex(e);
            var t,
              n = this._physicalItems[this._getPhysicalIndex(e)],
              i = this.modelForElement(n);
            (i.tabIndex = -100),
              -100 === n.tabIndex && (t = n),
              t || (t = Object(ie.a)(n).querySelector('[tabindex="-100"]')),
              (i.tabIndex = 0),
              (this._focusedVirtualIndex = e),
              t && t.focus();
          }
        },
        _removeFocusedItem: function() {
          this._offscreenFocusedItem &&
            this._itemsParent.removeChild(this._offscreenFocusedItem),
            (this._offscreenFocusedItem = null),
            (this._focusBackfillItem = null),
            (this._focusedItem = null),
            (this._focusedVirtualIndex = -1),
            (this._focusedPhysicalIndex = -1);
        },
        _createFocusBackfillItem: function() {
          var e = this._focusedPhysicalIndex;
          if (!(this._offscreenFocusedItem || this._focusedVirtualIndex < 0)) {
            if (!this._focusBackfillItem) {
              var t = this.stamp(null);
              (this._focusBackfillItem = t.root.querySelector("*")),
                this._itemsParent.appendChild(t.root);
            }
            (this._offscreenFocusedItem = this._physicalItems[e]),
              (this.modelForElement(this._offscreenFocusedItem).tabIndex = 0),
              (this._physicalItems[e] = this._focusBackfillItem),
              (this._focusedPhysicalIndex = e),
              this.translate3d(0, "-10000px", 0, this._offscreenFocusedItem);
          }
        },
        _restoreFocusedItem: function() {
          if (this._offscreenFocusedItem && !(this._focusedVirtualIndex < 0)) {
            this._assignModels();
            var e = (this._focusedPhysicalIndex = this._getPhysicalIndex(
                this._focusedVirtualIndex
              )),
              t = this._physicalItems[e];
            if (t) {
              var n = this.modelForElement(t),
                i = this.modelForElement(this._offscreenFocusedItem);
              n[this.as] === i[this.as]
                ? ((this._focusBackfillItem = t),
                  (n.tabIndex = -1),
                  (this._physicalItems[e] = this._offscreenFocusedItem),
                  this.translate3d(0, "-10000px", 0, this._focusBackfillItem))
                : (this._removeFocusedItem(), (this._focusBackfillItem = null)),
                (this._offscreenFocusedItem = null);
            }
          }
        },
        _didFocus: function(e) {
          var t = this.modelForElement(e.target),
            n = this.modelForElement(this._focusedItem),
            i = null !== this._offscreenFocusedItem,
            r = this._focusedVirtualIndex;
          t &&
            (n === t
              ? this._isIndexVisible(r) || this.scrollToIndex(r)
              : (this._restoreFocusedItem(),
                n && (n.tabIndex = -1),
                (t.tabIndex = 0),
                (r = t[this.indexAs]),
                (this._focusedVirtualIndex = r),
                (this._focusedPhysicalIndex = this._getPhysicalIndex(r)),
                (this._focusedItem = this._physicalItems[
                  this._focusedPhysicalIndex
                ]),
                i && !this._offscreenFocusedItem && this._update()));
        },
        _keydownHandler: function(e) {
          switch (e.keyCode) {
            case 40:
              this._focusedVirtualIndex < this._virtualCount - 1 &&
                e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex +
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 39:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? -1 : 1)
                );
              break;
            case 38:
              this._focusedVirtualIndex > 0 && e.preventDefault(),
                this._focusPhysicalItem(
                  this._focusedVirtualIndex -
                    (this.grid ? this._itemsPerRow : 1)
                );
              break;
            case 37:
              this.grid &&
                this._focusPhysicalItem(
                  this._focusedVirtualIndex + (this._isRTL ? 1 : -1)
                );
              break;
            case 13:
              this._focusPhysicalItem(this._focusedVirtualIndex),
                this.selectionEnabled && this._selectionHandler(e);
          }
        },
        _clamp: function(e, t, n) {
          return Math.min(n, Math.max(t, e));
        },
        _debounce: function(e, t, n) {
          (this._debouncers = this._debouncers || {}),
            (this._debouncers[e] = oe.a.debounce(
              this._debouncers[e],
              n,
              t.bind(this)
            )),
            Object(T.a)(this._debouncers[e]);
        },
        _forwardProperty: function(e, t, n) {
          e._setPendingProperty(t, n);
        },
        _forwardHostPropV2: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(n) {
              n && this.modelForElement(n).forwardHostProp(e, t);
            }, this);
        },
        _notifyInstancePropV2: function(e, t, n) {
          if (Object(se.e)(this.as, t)) {
            var i = e[this.indexAs];
            t == this.as && (this.items[i] = n),
              this.notifyPath(Object(se.i)(this.as, "items." + i, t), n);
          }
        },
        _getStampedChildren: function() {
          return this._physicalItems;
        },
        _forwardInstancePath: function(e, t, n) {
          0 === t.indexOf(this.as + ".") &&
            this.notifyPath(
              "items." + e.__key__ + "." + t.slice(this.as.length + 1),
              n
            );
        },
        _forwardParentPath: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(n) {
              n && this.modelForElement(n).notifyPath(e, t, !0);
            }, this);
        },
        _forwardParentProp: function(e, t) {
          (this._physicalItems || [])
            .concat([this._offscreenFocusedItem, this._focusBackfillItem])
            .forEach(function(n) {
              n && (this.modelForElement(n)[e] = t);
            }, this);
        },
        _getActiveElement: function() {
          var e = this._itemsParent.node.domHost;
          return Object(ie.a)(e ? e.root : document).activeElement;
        },
      });
      var ye = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            pe(this, me(t).apply(this, arguments))
          );
        }
        var n, r, o;
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
          })(t, Object(d["a"])(u["a"])),
          (n = t),
          (o = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(de());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-item";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  index: Number,
                  item: Object,
                  label: String,
                  selected: {
                    type: Boolean,
                    value: !1,
                    reflectToAttribute: !0,
                  },
                  focused: { type: Boolean, value: !1, reflectToAttribute: !0 },
                  _itemTemplateInstance: Object,
                  renderer: Function,
                  _oldRenderer: Function,
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return [
                  "_rendererOrItemChanged(renderer, index, item.*)",
                  "_updateLabel(label, _itemTemplateInstance)",
                  '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)',
                  '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)',
                ];
              },
            },
          ]),
          (r = [
            {
              key: "connectedCallback",
              value: function() {
                if (
                  (fe(me(t.prototype), "connectedCallback", this).call(this),
                  !this._itemTemplateInstance)
                ) {
                  var e = this.getRootNode()
                    .host.getRootNode()
                    .host.__dataHost.getRootNode().host;
                  (this._comboBox = e.getRootNode().host),
                    this._comboBox._ensureTemplatized(),
                    this._comboBox._TemplateClass &&
                      ((this._itemTemplateInstance = new this._comboBox._TemplateClass(
                        {}
                      )),
                      (this.$.content.textContent = ""),
                      this.$.content.appendChild(
                        this._itemTemplateInstance.root
                      ));
                }
              },
            },
            {
              key: "_render",
              value: function() {
                if (this.renderer) {
                  var e = { index: this.index, item: this.item };
                  this.renderer(this.$.content, this._comboBox, e);
                }
              },
            },
            {
              key: "_rendererOrItemChanged",
              value: function(e, t, n) {
                void 0 !== n &&
                  void 0 !== t &&
                  (this._oldRenderer !== e && (this.$.content.innerHTML = ""),
                  e && ((this._oldRenderer = e), this._render()));
              },
            },
            {
              key: "_updateLabel",
              value: function(e, t) {
                void 0 === t &&
                  this.$.content &&
                  !this.renderer &&
                  (this.$.content.textContent = e);
              },
            },
            {
              key: "_updateTemplateInstanceVariable",
              value: function(e, t, n) {
                void 0 !== e && void 0 !== t && void 0 !== n && (n[e] = t);
              },
            },
          ]) && he(n.prototype, r),
          o && he(n, o),
          t
        );
      })();
      customElements.define(ye.is, ye);
      var be = n(292),
        _e = n(70);
      function ge() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id="overlay" hidden$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme$="[[theme]]">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n',
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id="overlay" hidden\\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\\$="[[theme]]">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n',
          ]
        );
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
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
      function ke(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function xe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Oe(e, t, n) {
        return t && xe(e.prototype, t), n && xe(e, n), e;
      }
      function Ee(e, t) {
        return !t || ("object" !== we(t) && "function" != typeof t) ? Ie(e) : t;
      }
      function Ie(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ce(e, t, n) {
        return (Ce =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Pe(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function Pe(e) {
        return (Pe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Se(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && je(e, t);
      }
      function je(e, t) {
        return (je =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Te = (function(e) {
        function t() {
          return ke(this, t), Ee(this, Pe(t).apply(this, arguments));
        }
        return (
          Se(t, s["a"]),
          Oe(
            t,
            [
              {
                key: "ready",
                value: function() {
                  Ce(Pe(t.prototype), "ready", this).call(this);
                  var e = document.createElement("div");
                  e.setAttribute("part", "loader");
                  var n = this.shadowRoot.querySelector(['[part~="content"]']);
                  n.parentNode.insertBefore(e, n);
                },
              },
            ],
            [
              {
                key: "is",
                get: function() {
                  return "vaadin-combo-box-overlay";
                },
              },
            ]
          ),
          t
        );
      })();
      customElements.define(Te.is, Te);
      var Ae = (function(e) {
        function t() {
          var e;
          return (
            ke(this, t),
            ((e = Ee(
              this,
              Pe(t).call(this)
            ))._boundSetPosition = e._setPosition.bind(Ie(e))),
            (e._boundOutsideClickListener = e._outsideClickListener.bind(
              Ie(e)
            )),
            e
          );
        }
        return (
          Se(t, Object(be["a"])(Object(_e["b"])(Q["a"], u["a"]))),
          Oe(t, null, [
            {
              key: "template",
              get: function() {
                return Object(i.a)(ge());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-dropdown";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  opened: { type: Boolean, observer: "_openedChanged" },
                  template: { type: Object, notify: !0 },
                  positionTarget: { type: Object },
                  alignedAbove: { type: Boolean, value: !1 },
                  theme: String,
                };
              },
            },
          ]),
          Oe(t, [
            {
              key: "connectedCallback",
              value: function() {
                Ce(Pe(t.prototype), "connectedCallback", this).call(this),
                  this.addEventListener("iron-resize", this._boundSetPosition);
              },
            },
            {
              key: "ready",
              value: function() {
                Ce(Pe(t.prototype), "ready", this).call(this),
                  this.$.overlay.addEventListener(
                    "vaadin-overlay-outside-click",
                    function(e) {
                      e.preventDefault();
                    }
                  );
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                Ce(Pe(t.prototype), "disconnectedCallback", this).call(this),
                  this.removeEventListener(
                    "iron-resize",
                    this._boundSetPosition
                  ),
                  (this.opened = !1);
              },
            },
            {
              key: "notifyResize",
              value: function() {
                Ce(Pe(t.prototype), "notifyResize", this).call(this),
                  this.positionTarget &&
                    this.opened &&
                    (this._setPosition(),
                    requestAnimationFrame(this._setPosition.bind(this)));
              },
            },
            {
              key: "_openedChanged",
              value: function(e, t) {
                !!e != !!t &&
                  (e
                    ? ((this.$.overlay.style.position = this._isPositionFixed(
                        this.positionTarget
                      )
                        ? "fixed"
                        : "absolute"),
                      this._setPosition(),
                      window.addEventListener(
                        "scroll",
                        this._boundSetPosition,
                        !0
                      ),
                      document.addEventListener(
                        "click",
                        this._boundOutsideClickListener,
                        !0
                      ),
                      this.dispatchEvent(
                        new CustomEvent("vaadin-combo-box-dropdown-opened", {
                          bubbles: !0,
                          composed: !0,
                        })
                      ))
                    : (window.removeEventListener(
                        "scroll",
                        this._boundSetPosition,
                        !0
                      ),
                      document.removeEventListener(
                        "click",
                        this._boundOutsideClickListener,
                        !0
                      ),
                      this.dispatchEvent(
                        new CustomEvent("vaadin-combo-box-dropdown-closed", {
                          bubbles: !0,
                          composed: !0,
                        })
                      )));
              },
            },
            {
              key: "_outsideClickListener",
              value: function(e) {
                var t = e.composedPath();
                t.indexOf(this.positionTarget) < 0 &&
                  t.indexOf(this.$.overlay) < 0 &&
                  (this.opened = !1);
              },
            },
            {
              key: "_isPositionFixed",
              value: function(e) {
                var t = this._getOffsetParent(e);
                return (
                  "fixed" === window.getComputedStyle(e).position ||
                  (t && this._isPositionFixed(t))
                );
              },
            },
            {
              key: "_getOffsetParent",
              value: function(e) {
                if (e.assignedSlot) return e.assignedSlot.parentElement;
                if (e.parentElement) return e.offsetParent;
                var t = e.parentNode;
                return t && 11 === t.nodeType && t.host ? t.host : void 0;
              },
            },
            {
              key: "_verticalOffset",
              value: function(e, t) {
                return this.alignedAbove ? -e.height : t.height;
              },
            },
            {
              key: "_shouldAlignAbove",
              value: function(e) {
                return (
                  (window.innerHeight -
                    e.bottom -
                    Math.min(document.body.scrollTop, 0)) /
                    window.innerHeight <
                  0.3
                );
              },
            },
            {
              key: "_setPosition",
              value: function(e) {
                if (e && e.target) {
                  var t = e.target === document ? document.body : e.target,
                    n = this.$.overlay.parentElement;
                  if (
                    (!t.contains(this.$.overlay) &&
                      !t.contains(this.positionTarget)) ||
                    n !== document.body
                  )
                    return;
                }
                var i = this.positionTarget.getBoundingClientRect();
                this.alignedAbove = this._shouldAlignAbove(i);
                var r = this.$.overlay.getBoundingClientRect();
                (this._translateX = i.left - r.left + (this._translateX || 0)),
                  (this._translateY =
                    i.top -
                    r.top +
                    (this._translateY || 0) +
                    this._verticalOffset(r, i));
                var o = window.devicePixelRatio || 1;
                (this._translateX = Math.round(this._translateX * o) / o),
                  (this._translateY = Math.round(this._translateY * o) / o),
                  (this.$.overlay.style.transform = "translate3d("
                    .concat(this._translateX, "px, ")
                    .concat(this._translateY, "px, 0)")),
                  (this.$.overlay.style.width =
                    this.positionTarget.clientWidth + "px"),
                  (this.$.overlay.style.justifyContent = this.alignedAbove
                    ? "flex-end"
                    : "flex-start"),
                  this.dispatchEvent(new CustomEvent("position-changed"));
              },
            },
          ]),
          t
        );
      })();
      function ze(e) {
        return (ze =
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
        })(
          [
            '\n    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when \'Show scroll bars: Always\' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id="scroller" on-click="_stopPropagation">\n          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">\n            <template>\n              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role$="[[_getAriaRole(index)]]" aria-selected$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme$="[[theme]]">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n',
          ],
          [
            '\n    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when \'Show scroll bars: Always\' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id="scroller" on-click="_stopPropagation">\n          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">\n            <template>\n              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\\$="[[_getAriaRole(index)]]" aria-selected\\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\\$="[[theme]]">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n',
          ]
        );
        return (
          (Ve = function() {
            return e;
          }),
          e
        );
      }
      function Re(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Fe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function De(e, t) {
        return !t || ("object" !== ze(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Le(e) {
        return (Le = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $e(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Be(e, t);
      }
      function Be(e, t) {
        return (Be =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      customElements.define(Ae.is, Ae);
      var Ne = (function() {
          try {
            return document.createEvent("TouchEvent"), !0;
          } catch (e) {
            return !1;
          }
        })(),
        He = (function(e) {
          function t() {
            return Re(this, t), De(this, Le(t).apply(this, arguments));
          }
          var n, r, o;
          return (
            $e(t, e),
            (n = t),
            (o = [
              {
                key: "template",
                get: function() {
                  return Object(i.a)(Ve());
                },
              },
              {
                key: "is",
                get: function() {
                  return "vaadin-combo-box-dropdown-wrapper";
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    touchDevice: { type: Boolean, value: Ne },
                    opened: Boolean,
                    positionTarget: { type: Object },
                    renderer: Function,
                    loading: {
                      type: Boolean,
                      value: !1,
                      reflectToAttribute: !0,
                      observer: "_setOverlayHeight",
                    },
                    theme: String,
                    _selectedItem: { type: Object },
                    _items: { type: Object },
                    _focusedIndex: {
                      type: Number,
                      value: -1,
                      observer: "_focusedIndexChanged",
                    },
                    _focusedItem: {
                      type: String,
                      computed: "_getFocusedItem(_focusedIndex)",
                    },
                    _itemLabelPath: { type: String, value: "label" },
                    _itemValuePath: { type: String, value: "value" },
                    _selector: Object,
                    _itemIdPath: String,
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return [
                    "_selectorChanged(_selector)",
                    "_loadingChanged(loading)",
                    "_openedChanged(opened, _items, loading)",
                  ];
                },
              },
            ]),
            (r = [
              {
                key: "_fireTouchAction",
                value: function(e) {
                  this.dispatchEvent(
                    new CustomEvent("vaadin-overlay-touch-action", {
                      detail: { sourceEvent: e },
                    })
                  );
                },
              },
              {
                key: "_getItems",
                value: function(e, t) {
                  return e ? t : [];
                },
              },
              {
                key: "_openedChanged",
                value: function(e, t, n) {
                  if (this.$.dropdown.hasAttribute("disable-upgrade")) {
                    if (!e) return;
                    this._initDropdown();
                  }
                  this.$.dropdown.opened = !(
                    !e || !(n || this.$.dropdown.opened || (t && t.length))
                  );
                },
              },
              {
                key: "_initDropdown",
                value: function() {
                  var e = this;
                  this.$.dropdown.removeAttribute("disable-upgrade"),
                    this._templateChanged(),
                    this._loadingChanged(this.loading),
                    this.$.dropdown.$.overlay.addEventListener(
                      "touchend",
                      function(t) {
                        return e._fireTouchAction(t);
                      }
                    ),
                    this.$.dropdown.$.overlay.addEventListener(
                      "touchmove",
                      function(t) {
                        return e._fireTouchAction(t);
                      }
                    ),
                    this.$.dropdown.$.overlay.addEventListener(
                      "mousedown",
                      function(e) {
                        return e.preventDefault();
                      }
                    ),
                    /Trident/.test(navigator.userAgent) &&
                      this._scroller.setAttribute("unselectable", "on");
                },
              },
              {
                key: "_templateChanged",
                value: function(e) {
                  this.$.dropdown.hasAttribute("disable-upgrade") ||
                    ((this._selector = this.$.dropdown.$.overlay.content.querySelector(
                      "#selector"
                    )),
                    (this._scroller = this.$.dropdown.$.overlay.content.querySelector(
                      "#scroller"
                    )));
                },
              },
              {
                key: "_loadingChanged",
                value: function(e) {
                  this.$.dropdown.hasAttribute("disable-upgrade") ||
                    (e
                      ? this.$.dropdown.$.overlay.setAttribute("loading", "")
                      : this.$.dropdown.$.overlay.removeAttribute("loading"));
                },
              },
              {
                key: "_selectorChanged",
                value: function(e) {
                  this._patchWheelOverScrolling();
                },
              },
              {
                key: "_setOverlayHeight",
                value: function() {
                  if (this.opened && this.positionTarget && this._selector) {
                    var e = this.positionTarget.getBoundingClientRect();
                    this._scroller.style.maxHeight =
                      (window.ShadyCSS
                        ? window.ShadyCSS.getComputedStyleValue(
                            this,
                            "--vaadin-combo-box-overlay-max-height"
                          )
                        : getComputedStyle(this).getPropertyValue(
                            "--vaadin-combo-box-overlay-max-height"
                          )) || "65vh";
                    var t = this._maxOverlayHeight(e);
                    (this.$.dropdown.$.overlay.style.maxHeight = t),
                      (this._selector.style.maxHeight = t),
                      this.updateViewportBoundaries();
                  }
                },
              },
              {
                key: "_maxOverlayHeight",
                value: function(e) {
                  var t = Math.min(
                    window.innerHeight,
                    document.body.scrollHeight - document.body.scrollTop
                  );
                  return this.$.dropdown.alignedAbove
                    ? Math.max(
                        e.top - 8 + Math.min(document.body.scrollTop, 0),
                        116
                      ) + "px"
                    : Math.max(t - e.bottom - 8, 116) + "px";
                },
              },
              {
                key: "_getFocusedItem",
                value: function(e) {
                  if (e >= 0) return this._items[e];
                },
              },
              {
                key: "_isItemSelected",
                value: function(e, t, n) {
                  return (
                    !(e instanceof D) &&
                    (n && void 0 !== e && void 0 !== t
                      ? this.get(n, e) === this.get(n, t)
                      : e === t)
                  );
                },
              },
              {
                key: "_onItemClick",
                value: function(e) {
                  e.detail &&
                    e.detail.sourceEvent &&
                    e.detail.sourceEvent.stopPropagation &&
                    this._stopPropagation(e.detail.sourceEvent),
                    this.dispatchEvent(
                      new CustomEvent("selection-changed", {
                        detail: { item: e.model.item },
                      })
                    );
                },
              },
              {
                key: "indexOfLabel",
                value: function(e) {
                  if (this._items && e)
                    for (var t = 0; t < this._items.length; t++)
                      if (
                        this.getItemLabel(this._items[t])
                          .toString()
                          .toLowerCase() === e.toString().toLowerCase()
                      )
                        return t;
                  return -1;
                },
              },
              {
                key: "__requestItemByIndex",
                value: function(e, t) {
                  return (
                    e instanceof D &&
                      void 0 !== t &&
                      this.dispatchEvent(
                        new CustomEvent("index-requested", {
                          detail: { index: t },
                        })
                      ),
                    t
                  );
                },
              },
              {
                key: "getItemLabel",
                value: function(e, t) {
                  t = t || this._itemLabelPath;
                  var n = e && t ? this.get(t, e) : void 0;
                  return null == n && (n = e ? e.toString() : ""), n;
                },
              },
              {
                key: "_isItemFocused",
                value: function(e, t) {
                  return e == t;
                },
              },
              {
                key: "_getAriaSelected",
                value: function(e, t) {
                  return this._isItemFocused(e, t).toString();
                },
              },
              {
                key: "_getAriaRole",
                value: function(e) {
                  return void 0 !== e && "option";
                },
              },
              {
                key: "_focusedIndexChanged",
                value: function(e) {
                  e >= 0 && this._scrollIntoView(e);
                },
              },
              {
                key: "_scrollIntoView",
                value: function(e) {
                  var t = this._visibleItemsCount();
                  if (void 0 !== t) {
                    var n = e;
                    e > this._selector.lastVisibleIndex - 1
                      ? (n = e - t + 1)
                      : e > this._selector.firstVisibleIndex &&
                        (n = this._selector.firstVisibleIndex),
                      this._selector.scrollToIndex(Math.max(0, n));
                    var i = this._selector._getPhysicalIndex(e),
                      r = this._selector._physicalItems[i];
                    if (r) {
                      var o = r.getBoundingClientRect(),
                        s = this._scroller.getBoundingClientRect(),
                        a =
                          o.bottom -
                          s.bottom +
                          this._viewportTotalPaddingBottom;
                      a > 0 && (this._scroller.scrollTop += a);
                    }
                  }
                },
              },
              {
                key: "ensureItemsRendered",
                value: function() {
                  this._selector._render();
                },
              },
              {
                key: "adjustScrollPosition",
                value: function() {
                  this.opened &&
                    this._items &&
                    this._scrollIntoView(this._focusedIndex);
                },
              },
              {
                key: "_patchWheelOverScrolling",
                value: function() {
                  var e = this._selector;
                  e.addEventListener("wheel", function(t) {
                    var n = e._scroller || e.scrollTarget,
                      i = 0 === n.scrollTop,
                      r = n.scrollHeight - n.scrollTop - n.clientHeight <= 1;
                    i && t.deltaY < 0
                      ? t.preventDefault()
                      : r && t.deltaY > 0 && t.preventDefault();
                  });
                },
              },
              {
                key: "updateViewportBoundaries",
                value: function() {
                  (this._cachedViewportTotalPaddingBottom = void 0),
                    this._selector.updateViewportBoundaries();
                },
              },
              {
                key: "_visibleItemsCount",
                value: function() {
                  if (this._selector)
                    return (
                      this._selector.flushDebouncer("_debounceTemplate"),
                      this._selector.scrollToIndex(
                        this._selector.firstVisibleIndex
                      ),
                      this.updateViewportBoundaries(),
                      this._selector.lastVisibleIndex -
                        this._selector.firstVisibleIndex +
                        1
                    );
                },
              },
              {
                key: "_selectItem",
                value: function(e) {
                  (e = "number" == typeof e ? this._items[e] : e),
                    this._selector.selectedItem !== e &&
                      this._selector.selectItem(e);
                },
              },
              {
                key: "_preventDefault",
                value: function(e) {
                  e.cancelable && e.preventDefault();
                },
              },
              {
                key: "_stopPropagation",
                value: function(e) {
                  e.stopPropagation();
                },
              },
              {
                key: "_hidden",
                value: function(e) {
                  return !(this.loading || (this._items && this._items.length));
                },
              },
              {
                key: "_viewportTotalPaddingBottom",
                get: function() {
                  if (void 0 === this._cachedViewportTotalPaddingBottom) {
                    var e = window.getComputedStyle(this._selector.$.items);
                    this._cachedViewportTotalPaddingBottom = [
                      e.paddingBottom,
                      e.borderBottomWidth,
                    ]
                      .map(function(e) {
                        return parseInt(e, 10);
                      })
                      .reduce(function(e, t) {
                        return e + t;
                      });
                  }
                  return this._cachedViewportTotalPaddingBottom;
                },
              },
            ]) && Fe(n.prototype, r),
            o && Fe(n, o),
            t
          );
        })(
          (function(e) {
            function t() {
              return Re(this, t), De(this, Le(t).apply(this, arguments));
            }
            return $e(t, u["a"]), t;
          })()
        );
      customElements.define(He.is, He);
      var Me = n(22);
      function qe(e) {
        return (qe =
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
      function Ke() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">\n    </vaadin-combo-box-dropdown-wrapper>\n',
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function We(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ue(e, t, n) {
        return (Ue =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ye(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
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
      function Xe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ge(e, t, n) {
        return t && Xe(e.prototype, t), n && Xe(e, n), e;
      }
      function Ze(e, t) {
        return (Ze =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Je = (function(e) {
        function t() {
          var e, n, i;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (n = this),
            ((e =
              !(i = Ye(t).call(this)) ||
              ("object" !== qe(i) && "function" != typeof i)
                ? We(n)
                : i)._boundInputValueChanged = e._inputValueChanged.bind(
              We(e)
            )),
            e
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
              t && Ze(e, t);
          })(t, Object(S["a"])(Object(d["a"])(J(q(u["a"]))))),
          Ge(t, null, [
            {
              key: "template",
              get: function() {
                return Object(i.a)(Ke());
              },
            },
            {
              key: "is",
              get: function() {
                return "vaadin-combo-box-light";
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  attrForValue: { type: String, value: "value" },
                  inputElement: { type: Element, readOnly: !0 },
                };
              },
            },
          ]),
          Ge(t, [
            {
              key: "ready",
              value: function() {
                Ue(Ye(t.prototype), "ready", this).call(this),
                  (this._toggleElement = this.querySelector(".toggle-button")),
                  (this._clearElement = this.querySelector(".clear-button"));
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                Ue(Ye(t.prototype), "connectedCallback", this).call(this);
                this._setInputElement(
                  this.querySelector(
                    "vaadin-text-field,iron-input,paper-input,.paper-input-input,.input"
                  )
                ),
                  this._revertInputValue(),
                  this.inputElement.addEventListener(
                    "input",
                    this._boundInputValueChanged
                  ),
                  this._preventInputBlur();
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                Ue(Ye(t.prototype), "disconnectedCallback", this).call(this),
                  this.inputElement.removeEventListener(
                    "input",
                    this._boundInputValueChanged
                  ),
                  this._restoreInputBlur();
              },
            },
            {
              key: "focused",
              get: function() {
                return this.getRootNode().activeElement === this.inputElement;
              },
            },
            {
              key: "_propertyForValue",
              get: function() {
                return Object(Me.b)(this.attrForValue);
              },
            },
            {
              key: "_inputElementValue",
              get: function() {
                return (
                  this.inputElement && this.inputElement[this._propertyForValue]
                );
              },
              set: function(e) {
                this.inputElement &&
                  (this.inputElement[this._propertyForValue] = e);
              },
            },
          ]),
          t
        );
      })();
      customElements.define(Je.is, Je);
    },
    227: function(e, t, n) {
      "use strict";
      n(4), n(31), n(107), n(142), n(41), n(143), n(144);
      var i = n(53),
        r = n(34),
        o = n(59),
        s = n(60),
        a = n(67),
        l = n(5),
        c = n(1),
        u = n(35),
        d = n(3);
      function h() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style include="paper-dropdown-menu-shared-styles">\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host {\n        width: 200px;  /* Default size of an <input> */\n      }\n\n      /**\n       * All of these styles below are for styling the fake-input display\n       */\n      [slot="dropdown-trigger"] {\n        box-sizing: border-box;\n        position: relative;\n        width: 100%;\n        padding: 16px 0 8px 0;\n      }\n\n      :host([disabled]) [slot="dropdown-trigger"] {\n        pointer-events: none;\n        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);\n      }\n\n      :host([no-label-float]) [slot="dropdown-trigger"] {\n        padding-top: 8px;   /* If there\'s no label, we need less space up top. */\n      }\n\n      #input {\n        @apply --paper-font-subhead;\n        @apply --paper-font-common-nowrap;\n        line-height: 1.5;\n        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));\n        color: var(--paper-dropdown-menu-color, var(--primary-text-color));\n        width: 100%;\n        box-sizing: border-box;\n        padding: 12px 20px 0 0;   /* Right padding so that text doesn\'t overlap the icon */\n        outline: none;\n        @apply --paper-dropdown-menu-input;\n      }\n\n      #input:dir(rtl) {\n        padding-right: 0px;\n        padding-left: 20px;\n      }\n\n      :host([disabled]) #input {\n        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));\n      }\n\n      :host([invalid]) #input {\n        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      :host([no-label-float]) #input {\n        padding-top: 0;   /* If there\'s no label, we need less space up top. */\n      }\n\n      label {\n        @apply --paper-font-subhead;\n        @apply --paper-font-common-nowrap;\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        /**\n         * The container has a 16px top padding, and there\'s 12px of padding\n         * between the input and the label (from the input\'s padding-top)\n         */\n        top: 28px;\n        box-sizing: border-box;\n        width: 100%;\n        padding-right: 20px;    /* Right padding so that text doesn\'t overlap the icon */\n        text-align: left;\n        transition-duration: .2s;\n        transition-timing-function: cubic-bezier(.4,0,.2,1);\n        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));\n        @apply --paper-dropdown-menu-label;\n      }\n\n      label:dir(rtl) {\n        padding-right: 0px;\n        padding-left: 20px;\n      }\n\n      :host([no-label-float]) label {\n        top: 8px;\n        /* Since the label doesn\'t need to float, remove the animation duration\n        which slows down visibility changes (i.e. when a selection is made) */\n        transition-duration: 0s;\n      }\n\n      label.label-is-floating {\n        font-size: 12px;\n        top: 8px;\n      }\n\n      label.label-is-hidden {\n        visibility: hidden;\n      }\n\n      :host([focused]) label.label-is-floating {\n        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));\n      }\n\n      :host([invalid]) label.label-is-floating {\n        color: var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      /**\n       * Sets up the focused underline. It\'s initially hidden, and becomes\n       * visible when it\'s focused.\n       */\n      label:after {\n        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));\n        bottom: 7px;    /* The container has an 8px bottom padding */\n        content: \'\';\n        height: 2px;\n        left: 45%;\n        position: absolute;\n        transition-duration: .2s;\n        transition-timing-function: cubic-bezier(.4,0,.2,1);\n        visibility: hidden;\n        width: 8px;\n        z-index: 10;\n      }\n\n      :host([invalid]) label:after {\n        background-color: var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      :host([no-label-float]) label:after {\n        bottom: 7px;    /* The container has a 8px bottom padding */\n      }\n\n      :host([focused]:not([disabled])) label:after {\n        left: 0;\n        visibility: visible;\n        width: 100%;\n      }\n\n      iron-icon {\n        position: absolute;\n        right: 0px;\n        bottom: 8px;    /* The container has an 8px bottom padding */\n        @apply --paper-font-subhead;\n        color: var(--disabled-text-color);\n        @apply --paper-dropdown-menu-icon;\n      }\n\n      iron-icon:dir(rtl) {\n        left: 0;\n        right: auto;\n      }\n\n      :host([no-label-float]) iron-icon {\n        margin-top: 0px;\n      }\n\n      .error {\n        display: inline-block;\n        visibility: hidden;\n        color: var(--paper-dropdown-error-color, var(--error-color));\n        @apply --paper-font-caption;\n        position: absolute;\n        left:0;\n        right:0;\n        bottom: -12px;\n      }\n\n      :host([invalid]) .error {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <label class$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">\n          [[label]]\n        </label>\n        <div id="input" tabindex="-1">&nbsp;</div>\n        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>\n        <span class="error">[[errorMessage]]</span>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n',
          ],
          [
            '\n    <style include="paper-dropdown-menu-shared-styles">\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host {\n        width: 200px;  /* Default size of an <input> */\n      }\n\n      /**\n       * All of these styles below are for styling the fake-input display\n       */\n      [slot="dropdown-trigger"] {\n        box-sizing: border-box;\n        position: relative;\n        width: 100%;\n        padding: 16px 0 8px 0;\n      }\n\n      :host([disabled]) [slot="dropdown-trigger"] {\n        pointer-events: none;\n        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);\n      }\n\n      :host([no-label-float]) [slot="dropdown-trigger"] {\n        padding-top: 8px;   /* If there\'s no label, we need less space up top. */\n      }\n\n      #input {\n        @apply --paper-font-subhead;\n        @apply --paper-font-common-nowrap;\n        line-height: 1.5;\n        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));\n        color: var(--paper-dropdown-menu-color, var(--primary-text-color));\n        width: 100%;\n        box-sizing: border-box;\n        padding: 12px 20px 0 0;   /* Right padding so that text doesn\'t overlap the icon */\n        outline: none;\n        @apply --paper-dropdown-menu-input;\n      }\n\n      #input:dir(rtl) {\n        padding-right: 0px;\n        padding-left: 20px;\n      }\n\n      :host([disabled]) #input {\n        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));\n      }\n\n      :host([invalid]) #input {\n        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      :host([no-label-float]) #input {\n        padding-top: 0;   /* If there\'s no label, we need less space up top. */\n      }\n\n      label {\n        @apply --paper-font-subhead;\n        @apply --paper-font-common-nowrap;\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        /**\n         * The container has a 16px top padding, and there\'s 12px of padding\n         * between the input and the label (from the input\'s padding-top)\n         */\n        top: 28px;\n        box-sizing: border-box;\n        width: 100%;\n        padding-right: 20px;    /* Right padding so that text doesn\'t overlap the icon */\n        text-align: left;\n        transition-duration: .2s;\n        transition-timing-function: cubic-bezier(.4,0,.2,1);\n        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));\n        @apply --paper-dropdown-menu-label;\n      }\n\n      label:dir(rtl) {\n        padding-right: 0px;\n        padding-left: 20px;\n      }\n\n      :host([no-label-float]) label {\n        top: 8px;\n        /* Since the label doesn\'t need to float, remove the animation duration\n        which slows down visibility changes (i.e. when a selection is made) */\n        transition-duration: 0s;\n      }\n\n      label.label-is-floating {\n        font-size: 12px;\n        top: 8px;\n      }\n\n      label.label-is-hidden {\n        visibility: hidden;\n      }\n\n      :host([focused]) label.label-is-floating {\n        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));\n      }\n\n      :host([invalid]) label.label-is-floating {\n        color: var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      /**\n       * Sets up the focused underline. It\'s initially hidden, and becomes\n       * visible when it\'s focused.\n       */\n      label:after {\n        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));\n        bottom: 7px;    /* The container has an 8px bottom padding */\n        content: \'\';\n        height: 2px;\n        left: 45%;\n        position: absolute;\n        transition-duration: .2s;\n        transition-timing-function: cubic-bezier(.4,0,.2,1);\n        visibility: hidden;\n        width: 8px;\n        z-index: 10;\n      }\n\n      :host([invalid]) label:after {\n        background-color: var(--paper-dropdown-error-color, var(--error-color));\n      }\n\n      :host([no-label-float]) label:after {\n        bottom: 7px;    /* The container has a 8px bottom padding */\n      }\n\n      :host([focused]:not([disabled])) label:after {\n        left: 0;\n        visibility: visible;\n        width: 100%;\n      }\n\n      iron-icon {\n        position: absolute;\n        right: 0px;\n        bottom: 8px;    /* The container has an 8px bottom padding */\n        @apply --paper-font-subhead;\n        color: var(--disabled-text-color);\n        @apply --paper-dropdown-menu-icon;\n      }\n\n      iron-icon:dir(rtl) {\n        left: 0;\n        right: auto;\n      }\n\n      :host([no-label-float]) iron-icon {\n        margin-top: 0px;\n      }\n\n      .error {\n        display: inline-block;\n        visibility: hidden;\n        color: var(--paper-dropdown-error-color, var(--error-color));\n        @apply --paper-font-caption;\n        position: absolute;\n        left:0;\n        right:0;\n        bottom: -12px;\n      }\n\n      :host([invalid]) .error {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <label class\\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">\n          [[label]]\n        </label>\n        <div id="input" tabindex="-1">&nbsp;</div>\n        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>\n        <span class="error">[[errorMessage]]</span>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n',
          ]
        );
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      Object(l.a)({
        _template: Object(d.a)(h()),
        is: "paper-dropdown-menu-light",
        behaviors: [i.a, r.a, a.a, o.a, s.a],
        properties: {
          selectedItemLabel: { type: String, notify: !0, readOnly: !0 },
          selectedItem: { type: Object, notify: !0, readOnly: !0 },
          value: { type: String, notify: !0, observer: "_valueChanged" },
          label: { type: String },
          placeholder: { type: String },
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
          hasContent: { type: Boolean, readOnly: !0 },
        },
        listeners: { tap: "_onTap" },
        keyBindings: { "up down": "open", esc: "close" },
        hostAttributes: {
          tabindex: 0,
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
            var e = Object(c.a)(this.$.content).getDistributedNodes(),
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
          u.c(e) === this && this.open();
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
        _computeLabelClass: function(e, t, n) {
          var i = "";
          return !0 === e
            ? n
              ? "label-is-hidden"
              : ""
            : ((n || !0 === t) && (i += " label-is-floating"), i);
        },
        _valueChanged: function() {
          this.$.input &&
            this.$.input.textContent !== this.value &&
            (this.$.input.textContent = this.value),
            this._setHasContent(!!this.value);
        },
      });
    },
    242: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      });
      n(4);
      var i = n(1);
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
      var o = {
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
          "object" === r(e) ? ((n = e.left), (t = e.top)) : (n = e),
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
    318: function(e, t, n) {
      "use strict";
      var i = /^(\w+)\.(\w+)$/;
      t.a = function(e) {
        return i.test(e);
      };
    },
    722: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = (n(203), n(90), n(82), n(190), n(4), n(67)),
        o = n(5),
        s = n(3),
        a = n(61);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            "\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 24px;\n        height: 24px;\n      }\n\n      paper-ripple {\n        opacity: 0.6;\n        color: currentColor;\n        @apply --paper-icon-button-light-ripple;\n      }\n\n      :host > ::slotted(button) {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        background: none;\n        border: none;\n        outline: none;\n        vertical-align: middle;\n        color: inherit;\n        cursor: pointer;\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n      }\n      :host > ::slotted(button[disabled]) {\n        color: #9b9b9b;\n        pointer-events: none;\n        cursor: auto;\n      }\n    </style>\n    <slot></slot>\n  ",
          ],
          [
            "\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 24px;\n        height: 24px;\n      }\n\n      paper-ripple {\n        opacity: 0.6;\n        color: currentColor;\n        @apply --paper-icon-button-light-ripple;\n      }\n\n      :host > ::slotted(button) {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        background: none;\n        border: none;\n        outline: none;\n        vertical-align: middle;\n        color: inherit;\n        cursor: pointer;\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n      }\n      :host > ::slotted(button[disabled]) {\n        color: #9b9b9b;\n        pointer-events: none;\n        cursor: auto;\n      }\n    </style>\n    <slot></slot>\n  ",
          ]
        );
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        is: "paper-icon-button-light",
        _template: Object(s.a)(l()),
        behaviors: [r.a],
        registered: function() {
          this._template.setAttribute("strip-whitespace", "");
        },
        ready: function() {
          var e = this;
          Object(a.a)(this, function() {
            e.addEventListener("down", e._rippleDown.bind(e)),
              e.addEventListener("up", e._rippleUp.bind(e));
            var t = e.getEffectiveChildren()[0];
            (e._rippleContainer = t),
              t.addEventListener("focus", e._rippleDown.bind(e)),
              t.addEventListener("blur", e._rippleUp.bind(e));
          });
        },
        _rippleDown: function() {
          this.getRipple().uiDownAction();
        },
        _rippleUp: function() {
          this.getRipple().uiUpAction();
        },
        ensureRipple: function(e) {
          var t = this._ripple;
          r.a.ensureRipple.apply(this, arguments),
            this._ripple &&
              this._ripple !== t &&
              ((this._ripple.center = !0),
              this._ripple.classList.add("circle"));
        },
      });
      var c = n(19),
        u = n(318);
      n(186);
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
      function h(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          C(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function p(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      function f(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(i, r) {
            var o = e.apply(t, n);
            function s(e) {
              p(o, i, r, s, a, "next", e);
            }
            function a(e) {
              p(o, i, r, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function m() {
        var e = y([
          "\n          <div>\n            <ha-entity-picker\n              allow-custom-entity\n              .curValue=",
          "\n              .hass=",
          "\n              .domainFilter=",
          "\n              .entityFilter=",
          "\n              .value=",
          "\n              .label=",
          "\n              @value-changed=",
          "\n            ></ha-entity-picker>\n          </div>\n        ",
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = y([
          "\n      ",
          "\n      <div>\n        <ha-entity-picker\n          .hass=",
          "\n          .domainFilter=",
          "\n          .entityFilter=",
          "\n          .label=",
          "\n          @value-changed=",
          "\n        ></ha-entity-picker>\n      </div>\n    ",
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function y(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        var t,
          n = I(e.key);
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
      function k(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function x(e) {
        return e.decorators && e.decorators.length;
      }
      function O(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function E(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function I(e) {
        var t = (function(e, t) {
          if ("object" !== d(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== d(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === d(t) ? t : String(t);
      }
      function C(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      (function(e, t, n, i) {
        var r = (function() {
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
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
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
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!x(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
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
                  C(t) ||
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
              var n = I(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = E(e, "finisher"),
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
              var n = E(e, "finisher"),
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
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function(e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
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
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (O(o.descriptor) || O(r.descriptor)) {
                    if (x(o) || x(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (x(o)) {
                      if (x(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    k(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(w)),
            e
          );
        r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers);
      })(
        [Object(i.d)("ha-entities-picker")],
        function(e, t) {
          return {
            F: (function(n) {
              function i() {
                var t, n, r, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var s = arguments.length, a = new Array(s), l = 0;
                  l < s;
                  l++
                )
                  a[l] = arguments[l];
                return (
                  (r = this),
                  (n =
                    !(o = (t = b(i)).call.apply(t, [this].concat(a))) ||
                    ("object" !== d(o) && "function" != typeof o)
                      ? _(r)
                      : o),
                  e(_(n)),
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
                    t && g(e, t);
                })(i, t),
                i
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "value",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)({ attribute: "domain-filter" })],
                key: "domainFilter",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)({ attribute: "picked-entity-label" })],
                key: "pickedEntityLabel",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)({ attribute: "pick-entity-label" })],
                key: "pickEntityLabel",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  if (this.hass) {
                    var t = this._currentEntities;
                    return Object(i.f)(
                      v(),
                      t.map(function(t) {
                        return Object(
                          i.f
                        )(m(), t, e.hass, e.domainFilter, e._entityFilter, t, e.pickedEntityLabel, e._entityChanged);
                      }),
                      this.hass,
                      this.domainFilter,
                      this._entityFilter,
                      this.pickEntityLabel,
                      this._addEntity
                    );
                  }
                },
              },
              {
                kind: "field",
                key: "_entityFilter",
                value: function() {
                  var e = this;
                  return function(t) {
                    return !e.value || !e.value.includes(t.entity_id);
                  };
                },
              },
              {
                kind: "get",
                key: "_currentEntities",
                value: function() {
                  return this.value || [];
                },
              },
              {
                kind: "method",
                key: "_updateEntities",
                value: (function() {
                  var e = f(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                Object(c.a)(this, "value-changed", {
                                  value: t,
                                }),
                                  (this.value = t);
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_entityChanged",
                value: function(e) {
                  e.stopPropagation();
                  var t = e.currentTarget.curValue,
                    n = e.detail.value;
                  n === t ||
                    ("" !== n && !Object(u.a)(n)) ||
                    ("" === n
                      ? this._updateEntities(
                          this._currentEntities.filter(function(e) {
                            return e !== t;
                          })
                        )
                      : this._updateEntities(
                          this._currentEntities.map(function(e) {
                            return e === t ? n : e;
                          })
                        ));
                },
              },
              {
                kind: "method",
                key: "_addEntity",
                value: (function() {
                  var e = f(
                    regeneratorRuntime.mark(function e(t) {
                      var n, i;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (t.stopPropagation(),
                                  (n = t.detail.value),
                                  (t.currentTarget.value = ""),
                                  n)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                if (!(i = this._currentEntities).includes(n)) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return");
                              case 8:
                                this._updateEntities([].concat(h(i), [n]));
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ],
          };
        },
        i.a
      ),
        n(106),
        n(187),
        n(178),
        n(227),
        n(139);
      var P = n(125),
        S = n(330),
        j = n(207);
      function T(e) {
        return (T =
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
        var e = R([
          "\n      :host {\n        display: inline-block;\n      }\n      paper-dropdown-menu-light {\n        display: block;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-icon-item {\n        cursor: pointer;\n      }\n    ",
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = R([
          "\n              <paper-icon-item data-user-id=",
          ">\n                <ha-user-badge .user=",
          ' slot="item-icon"></ha-user-badge>\n                ',
          "\n              </paper-icon-item>\n            ",
        ]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = R([
          "\n      <paper-dropdown-menu-light .label=",
          '>\n        <paper-listbox\n          slot="dropdown-content"\n          .selected=',
          '\n          attr-for-selected="data-user-id"\n          @iron-select=',
          '\n        >\n          <paper-icon-item data-user-id="">\n            No user\n          </paper-icon-item>\n          ',
          "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    ",
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      function R(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function F(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          K(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function $(e) {
        var t,
          n = q(e.key);
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
      function B(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function N(e) {
        return e.decorators && e.decorators.length;
      }
      function H(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function M(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function q(e) {
        var t = (function(e, t) {
          if ("object" !== T(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== T(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === T(t) ? t : String(t);
      }
      function K(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function W(e, t, n) {
        return (W =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = U(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function U(e) {
        return (U = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Y = (function(e, t, n, i) {
        var r = (function() {
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
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
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
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!N(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
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
                  K(t) ||
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
              var n = q(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = M(e, "finisher"),
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
              var n = M(e, "finisher"),
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
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function(e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
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
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (H(o.descriptor) || H(r.descriptor)) {
                    if (N(o) || N(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (N(o)) {
                      if (N(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    B(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map($)),
            e
          );
        return (
          r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers)
        );
      })(
        null,
        function(e, t) {
          var n = (function(n) {
            function i() {
              var t, n, r, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var s = arguments.length, a = new Array(s), l = 0;
                l < s;
                l++
              )
                a[l] = arguments[l];
              return (
                (r = this),
                (n =
                  !(o = (t = U(i)).call.apply(t, [this].concat(a))) ||
                  ("object" !== T(o) && "function" != typeof o)
                    ? D(r)
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
                  t && L(e, t);
              })(i, t),
              i
            );
          })();
          return {
            F: n,
            d: [
              { kind: "field", key: "hass", value: void 0 },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "label",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "value",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "users",
                value: void 0,
              },
              {
                kind: "field",
                key: "_sortedUsers",
                value: function() {
                  return Object(P.a)(function(e) {
                    if (!e || 1 === e.length) return e || [];
                    var t = F(e);
                    return (
                      t.sort(function(e, t) {
                        return Object(j.b)(e.name, t.name);
                      }),
                      t
                    );
                  });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(i.f)(
                    V(),
                    this.label,
                    this._value,
                    this._userChanged,
                    this._sortedUsers(this.users).map(function(e) {
                      return Object(i.f)(z(), e.id, e, e.name);
                    })
                  );
                },
              },
              {
                kind: "get",
                key: "_value",
                value: function() {
                  return this.value || "";
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  var t = this;
                  W(U(n.prototype), "firstUpdated", this).call(this, e),
                    void 0 === this.users &&
                      Object(S.d)(this.hass).then(function(e) {
                        t.users = e;
                      });
                },
              },
              {
                kind: "method",
                key: "_userChanged",
                value: function(e) {
                  var t = this,
                    n = e.detail.item.dataset.userId;
                  n !== this._value &&
                    ((this.value = e.detail.value),
                    setTimeout(function() {
                      Object(c.a)(t, "value-changed", { value: n }),
                        Object(c.a)(t, "change");
                    }, 0));
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(i.c)(A());
                },
              },
            ],
          };
        },
        i.a
      );
      customElements.define("ha-user-picker", Y);
      var X = n(54);
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
      function Z() {
        var e = ie([
          "\n        ha-paper-dialog {\n          min-width: 400px;\n        }\n        .form {\n          padding-bottom: 24px;\n        }\n        ha-user-picker {\n          margin-top: 16px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n      ",
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = ie([""]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function Q() {
        var e = ie([
          '\n                <mwc-button\n                  class="warning"\n                  @click="',
          '"\n                  .disabled=',
          "\n                >\n                  DELETE\n                </mwc-button>\n              ",
        ]);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = ie([
          '\n                <div class="error">',
          "</div>\n              ",
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = ie([
          '\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed="',
          '"\n      >\n        <h2>',
          "</h2>\n        <paper-dialog-scrollable>\n          ",
          '\n          <div class="form">\n            <paper-input\n              .value=',
          "\n              @value-changed=",
          '\n              label="Name"\n              error-message="Name is required"\n              .invalid=',
          '\n            ></paper-input>\n            <ha-user-picker\n              label="Linked User"\n              .hass=',
          "\n              .value=",
          "\n              .users=",
          "\n              @value-changed=",
          "\n            ></ha-user-picker>\n            <p>\n              ",
          "\n            </p>\n            <ha-entities-picker\n              .hass=",
          "\n              .value=",
          '\n              domain-filter="device_tracker"\n              .pickedEntityLabel=',
          "\n              .pickEntityLabel=",
          "\n              @value-changed=",
          '\n            ></ha-entities-picker>\n          </div>\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          ',
          '\n          <mwc-button\n            @click="',
          '"\n            .disabled=',
          "\n          >\n            ",
          "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    ",
        ]);
        return (
          (te = function() {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = ie([""]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      function ie(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function re(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      function oe(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(i, r) {
            var o = e.apply(t, n);
            function s(e) {
              re(o, i, r, s, a, "next", e);
            }
            function a(e) {
              re(o, i, r, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function se(e) {
        return (se = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ae(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function le(e, t) {
        return (le =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ce(e) {
        var t,
          n = fe(e.key);
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
      function ue(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function de(e) {
        return e.decorators && e.decorators.length;
      }
      function he(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function pe(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      function fe(e) {
        var t = (function(e, t) {
          if ("object" !== G(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== G(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === G(t) ? t : String(t);
      }
      var me = (function(e, t, n, i) {
        var r = (function() {
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
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
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
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!de(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function(e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function(e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
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
              var n = fe(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                n = pe(e, "finisher"),
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
              var n = pe(e, "finisher"),
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
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function(e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
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
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (he(o.descriptor) || he(r.descriptor)) {
                    if (de(o) || de(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (de(o)) {
                      if (de(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    ue(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(ce)),
            e
          );
        return (
          r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(n) {
              function i() {
                var t, n, r, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var s = arguments.length, a = new Array(s), l = 0;
                  l < s;
                  l++
                )
                  a[l] = arguments[l];
                return (
                  (r = this),
                  (n =
                    !(o = (t = se(i)).call.apply(t, [this].concat(a))) ||
                    ("object" !== G(o) && "function" != typeof o)
                      ? ae(r)
                      : o),
                  e(ae(n)),
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
                    t && le(e, t);
                })(i, t),
                i
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_name",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_userId",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_deviceTrackers",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_error",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_params",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(i.g)()],
                key: "_submitting",
                value: function() {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "showDialog",
                value: (function() {
                  var e = oe(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._params = t),
                                  (this._error = void 0),
                                  this._params.entry
                                    ? ((this._name =
                                        this._params.entry.name || ""),
                                      (this._userId =
                                        this._params.entry.user_id || void 0),
                                      (this._deviceTrackers =
                                        this._params.entry.device_trackers ||
                                        []))
                                    : ((this._name = ""),
                                      (this._userId = void 0),
                                      (this._deviceTrackers = [])),
                                  (e.next = 5),
                                  this.updateComplete
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  if (!this._params) return Object(i.f)(ne());
                  var e = "" === this._name.trim();
                  return Object(i.f)(
                    te(),
                    this._openedChanged,
                    this._params.entry ? this._params.entry.name : "New Person",
                    this._error ? Object(i.f)(ee(), this._error) : "",
                    this._name,
                    this._nameChanged,
                    e,
                    this.hass,
                    this._userId,
                    this._params.users,
                    this._userChanged,
                    this.hass.localize(
                      "ui.panel.config.person.detail.device_tracker_intro"
                    ),
                    this.hass,
                    this._deviceTrackers,
                    this.hass.localize(
                      "ui.panel.config.person.detail.device_tracker_picked"
                    ),
                    this.hass.localize(
                      "ui.panel.config.person.detail.device_tracker_pick"
                    ),
                    this._deviceTrackersChanged,
                    this._params.entry
                      ? Object(i.f)(Q(), this._deleteEntry, this._submitting)
                      : Object(i.f)(J()),
                    this._updateEntry,
                    e || this._submitting,
                    this._params.entry ? "UPDATE" : "CREATE"
                  );
                },
              },
              {
                kind: "method",
                key: "_nameChanged",
                value: function(e) {
                  (this._error = void 0), (this._name = e.detail.value);
                },
              },
              {
                kind: "method",
                key: "_userChanged",
                value: function(e) {
                  (this._error = void 0), (this._userId = e.detail.value);
                },
              },
              {
                kind: "method",
                key: "_deviceTrackersChanged",
                value: function(e) {
                  (this._error = void 0),
                    (this._deviceTrackers = e.detail.value);
                },
              },
              {
                kind: "method",
                key: "_updateEntry",
                value: (function() {
                  var e = oe(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this._submitting = !0),
                                  (e.prev = 1),
                                  (t = {
                                    name: this._name.trim(),
                                    device_trackers: this._deviceTrackers,
                                    user_id: this._userId || null,
                                  }),
                                  !this._params.entry)
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 6), this._params.updateEntry(t)
                                );
                              case 6:
                                e.next = 10;
                                break;
                              case 8:
                                return (
                                  (e.next = 10), this._params.createEntry(t)
                                );
                              case 10:
                                (this._params = void 0), (e.next = 16);
                                break;
                              case 13:
                                (e.prev = 13),
                                  (e.t0 = e.catch(1)),
                                  (this._error = e.t0
                                    ? e.t0.message
                                    : "Unknown error");
                              case 16:
                                return (
                                  (e.prev = 16),
                                  (this._submitting = !1),
                                  e.finish(16)
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 13, 16, 19]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_deleteEntry",
                value: (function() {
                  var e = oe(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._submitting = !0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  this._params.removeEntry()
                                );
                              case 4:
                                if (!e.sent) {
                                  e.next = 6;
                                  break;
                                }
                                this._params = void 0;
                              case 6:
                                return (
                                  (e.prev = 6),
                                  (this._submitting = !1),
                                  e.finish(6)
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, , 6, 9]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_openedChanged",
                value: function(e) {
                  e.detail.value || (this._params = void 0);
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [X.b, Object(i.c)(Z())];
                },
              },
            ],
          };
        },
        i.a
      );
      customElements.define("dialog-person-detail", me);
    },
    90: function(e, t, n) {
      "use strict";
      n(4), n(111), n(112), n(113), n(114);
      var i = n(59),
        r = (n(40), n(5)),
        o = n(3),
        s = n(94);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  ',
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        is: "paper-input",
        _template: Object(o.a)(a()),
        behaviors: [s.a, i.a],
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
        return s;
      });
      n(4);
      var i = n(5),
        r = n(3);
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
      var s = Object(i.a)({
        _template: Object(r.a)(o()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" },
        },
        created: function() {
          s.instance || (s.instance = this),
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
      (s.instance = null),
        (s.requestAvailability = function() {
          s.instance ||
            (s.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(s.instance);
        });
    },
  },
]);
//# sourceMappingURL=chunk.6acd208eaa70b03c0c82.js.map
