/*! For license information please see chunk.12e11dbe5e9ccb347e24.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    105: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return p;
      });
      var i = t(8),
        o = t(19);
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
      function a(e, n) {
        for (var t = 0; t < n.length; t++) {
          var i = n[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, n) {
        return !n || ("object" !== r(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s(e, n) {
        return (s =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var p = Object(i.a)(function(e) {
        return (function(n) {
          function t() {
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              c(this, l(t).apply(this, arguments))
            );
          }
          var i, r, p;
          return (
            (function(e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && s(e, n);
            })(t, e),
            (i = t),
            (r = [
              {
                key: "fire",
                value: function(e, n, t) {
                  return (t = t || {}), Object(o.a)(t.node || this, e, n, t);
                },
              },
            ]) && a(i.prototype, r),
            p && a(i, p),
            t
          );
        })();
      });
    },
    111: function(e, n, t) {
      "use strict";
      t(4);
      var i = t(91),
        o = t(60),
        r = t(5),
        a = t(1),
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
    117: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return r;
      });
      t(4);
      var i = t(53),
        o = t(34),
        r = [i.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
    },
    119: function(e, n, t) {
      "use strict";
      t(4);
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
        _copyProperties: function(e, n) {
          for (var t in n) e[t] = n[t];
        },
        _cloneConfig: function(e) {
          var n = { isClone: !0 };
          return this._copyProperties(n, e), n;
        },
        _getAnimationConfigRecursive: function(e, n, t) {
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
                  o.animatable._getAnimationConfigRecursive(o.type || e, n, t);
                else if (o.id) {
                  var a = n[o.id];
                  a
                    ? (a.isClone ||
                        ((n[o.id] = this._cloneConfig(a)), (a = n[o.id])),
                      this._copyProperties(a, o))
                    : (n[o.id] = o);
                } else t.push(o);
        },
        getAnimationConfig: function(e) {
          var n = {},
            t = [];
          for (var i in (this._getAnimationConfigRecursive(e, n, t), n))
            t.push(n[i]);
          return t;
        },
      };
      t.d(n, "a", function() {
        return o;
      });
      var o = [
        i,
        {
          _configureAnimations: function(e) {
            var n = [],
              t = [];
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
                    t.push({ result: a, config: i, neonAnimation: r });
                } else console.warn(this.is + ":", i.name, "not found!");
              }
            for (var c = 0; c < t.length; c++) {
              var l = t[c].result,
                s = t[c].config,
                p = t[c].neonAnimation;
              try {
                "function" != typeof l.cancel &&
                  (l = document.timeline.play(l));
              } catch (u) {
                (l = null), console.warn("Couldnt play", "(", s.name, ").", u);
              }
              l && n.push({ neonAnimation: p, config: s, animation: l });
            }
            return n;
          },
          _shouldComplete: function(e) {
            for (var n = !0, t = 0; t < e.length; t++)
              if ("finished" != e[t].animation.playState) {
                n = !1;
                break;
              }
            return n;
          },
          _complete: function(e) {
            for (var n = 0; n < e.length; n++)
              e[n].neonAnimation.complete(e[n].config);
            for (n = 0; n < e.length; n++) e[n].animation.cancel();
          },
          playAnimation: function(e, n) {
            var t = this.getAnimationConfig(e);
            if (t) {
              (this._active = this._active || {}),
                this._active[e] &&
                  (this._complete(this._active[e]), delete this._active[e]);
              var i = this._configureAnimations(t);
              if (0 != i.length) {
                this._active[e] = i;
                for (var o = 0; o < i.length; o++)
                  i[o].animation.onfinish = function() {
                    this._shouldComplete(i) &&
                      (this._complete(i),
                      delete this._active[e],
                      this.fire("neon-animation-finish", n, { bubbles: !1 }));
                  }.bind(this);
              } else this.fire("neon-animation-finish", n, { bubbles: !1 });
            }
          },
          cancelAnimation: function() {
            for (var e in this._active) {
              var n = this._active[e];
              for (var t in n) n[t].animation.cancel();
            }
            this._active = {};
          },
        },
      ];
    },
    120: function(e, n, t) {
      "use strict";
      t(4);
      var i = t(59),
        o = t(60),
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
        c = t(56),
        l = t(67);
      t.d(n, "a", function() {
        return p;
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
        p = [c.a, a, s];
    },
    138: function(e, n, t) {
      "use strict";
      t(4), t(44), t(140);
      var i = t(5),
        o = t(3),
        r = t(117);
      function a() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
    139: function(e, n, t) {
      "use strict";
      t(4), t(41);
      var i = t(121),
        o = t(5),
        r = t(3);
      function a() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
    140: function(e, n, t) {
      "use strict";
      t(44), t(55), t(41), t(52);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(i.content);
    },
    142: function(e, n, t) {
      "use strict";
      t(4);
      var i = t(31),
        o = t(34),
        r = t(84),
        a = t(119),
        c = t(5),
        l = t(1),
        s = t(3);
      function p() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id="contentWrapper">\n      <slot id="content" name="dropdown-content"></slot>\n    </div>\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      Object(c.a)({
        _template: Object(s.a)(p()),
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
              n = 0,
              t = e.length;
            n < t;
            n++
          )
            if (e[n].nodeType === Node.ELEMENT_NODE) return e[n];
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
              n = []
                .concat(this.openAnimationConfig || [])
                .concat(this.closeAnimationConfig || []),
              t = 0;
            t < n.length;
            t++
          )
            n[t].node = e;
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
      var u = {
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
            for (var n in e.timing) this.animationTiming[n] = e.timing[n];
          return this.animationTiming;
        },
        setPrefixedProperty: function(e, n, t) {
          for (
            var i,
              o = {
                transform: ["webkitTransform"],
                transformOrigin: [
                  "mozTransformOrigin",
                  "webkitTransformOrigin",
                ],
              }[n],
              r = 0;
            (i = o[r]);
            r++
          )
            e.style[i] = t;
          e.style[n] = t;
        },
        complete: function(e) {},
      };
      Object(c.a)({
        is: "fade-in-animation",
        behaviors: [u],
        configure: function(e) {
          var n = e.node;
          return (
            (this._effect = new KeyframeEffect(
              n,
              [{ opacity: "0" }, { opacity: "1" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        },
      }),
        Object(c.a)({
          is: "fade-out-animation",
          behaviors: [u],
          configure: function(e) {
            var n = e.node;
            return (
              (this._effect = new KeyframeEffect(
                n,
                [{ opacity: "1" }, { opacity: "0" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        });
      t(41), t(83);
      function d() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
        behaviors: [u],
        configure: function(e) {
          var n = e.node,
            t = n.getBoundingClientRect().height;
          return (
            (this._effect = new KeyframeEffect(
              n,
              [{ height: t / 2 + "px" }, { height: t + "px" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        },
      }),
        Object(c.a)({
          is: "paper-menu-grow-width-animation",
          behaviors: [u],
          configure: function(e) {
            var n = e.node,
              t = n.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                n,
                [{ width: t / 2 + "px" }, { width: t + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        }),
        Object(c.a)({
          is: "paper-menu-shrink-width-animation",
          behaviors: [u],
          configure: function(e) {
            var n = e.node,
              t = n.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                n,
                [{ width: t + "px" }, { width: t - t / 20 + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          },
        }),
        Object(c.a)({
          is: "paper-menu-shrink-height-animation",
          behaviors: [u],
          configure: function(e) {
            var n = e.node,
              t = n.getBoundingClientRect().height;
            return (
              this.setPrefixedProperty(n, "transformOrigin", "0 0"),
              (this._effect = new KeyframeEffect(
                n,
                [
                  { height: t + "px", transform: "translateY(0)" },
                  { height: t / 2 + "px", transform: "translateY(-20px)" },
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
        f = Object(c.a)({
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
                n = 0,
                t = e.length;
              n < t;
              n++
            )
              if (e[n].nodeType === Node.ELEMENT_NODE) return e[n];
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
          _openedChanged: function(e, n) {
            e
              ? ((this._dropdownContent = this.contentElement),
                this.fire("paper-dropdown-open"))
              : null != n && this.fire("paper-dropdown-close");
          },
          _disabledChanged: function(e) {
            o.a._disabledChanged.apply(this, arguments),
              e && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(e) {
            var n = e.detail,
              t = this.$.trigger;
            Object(l.a)(n).path.indexOf(t) > -1 && e.preventDefault();
          },
        });
      Object.keys(h).forEach(function(e) {
        f[e] = h[e];
      });
    },
    148: function(e, n, t) {
      "use strict";
      t(4), t(41);
      var i = t(120),
        o = t(56),
        r = t(5),
        a = t(3),
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
                  n = "px",
                  t = e.match(/[A-Za-z]+$/);
                null !== t && (n = t[0]);
                var i = parseFloat(e),
                  o = (8 / 3) * i;
                "px" === n && (o = Math.floor(o)) % 2 != i % 2 && o++,
                  this.updateStyles({ "--paper-checkbox-ink-size": o + n });
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
              o.b._createRipple.call(this)
            );
          },
        });
    },
    171: function(e, n, t) {
      "use strict";
      var i = t(8);
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
      function r(e, n) {
        for (var t = 0; t < n.length; t++) {
          var i = n[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function a(e, n) {
        return !n || ("object" !== o(n) && "function" != typeof n)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, n) {
        return (l =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      n.a = Object(i.a)(function(e) {
        return (function(n) {
          function t() {
            return (
              (function(e, n) {
                if (!(e instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              a(this, c(t).apply(this, arguments))
            );
          }
          var i, o, s;
          return (
            (function(e, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(n && n.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                n && l(e, n);
            })(t, e),
            (i = t),
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
            t
          );
        })();
      });
    },
    172: function(e, n, t) {
      "use strict";
      var i = t(0);
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
      function s(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, n) {
        return (d =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function h(e) {
        var n,
          t = y(e.key);
        "method" === e.kind
          ? (n = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (n = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (n = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (n = { configurable: !0, writable: !0, enumerable: !0 });
        var i = {
          kind: "field" === e.kind ? "field" : "method",
          key: t,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: n,
        };
        return (
          e.decorators && (i.decorators = e.decorators),
          "field" === e.kind && (i.initializer = e.value),
          i
        );
      }
      function f(e, n) {
        void 0 !== e.descriptor.get
          ? (n.descriptor.get = e.descriptor.get)
          : (n.descriptor.set = e.descriptor.set);
      }
      function b(e) {
        return e.decorators && e.decorators.length;
      }
      function m(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function v(e, n) {
        var t = e[n];
        if (void 0 !== t && "function" != typeof t)
          throw new TypeError("Expected '" + n + "' to be a function");
        return t;
      }
      function y(e) {
        var n = (function(e, n) {
          if ("object" !== o(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var i = t.call(e, n || "default");
            if ("object" !== o(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === n ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(n) ? n : String(n);
      }
      var g = (function(e, n, t, i) {
        var o = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, n) {
              ["method", "field"].forEach(function(t) {
                n.forEach(function(n) {
                  n.kind === t &&
                    "own" === n.placement &&
                    this.defineClassElement(e, n);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, n) {
              var t = e.prototype;
              ["method", "field"].forEach(function(i) {
                n.forEach(function(n) {
                  var o = n.placement;
                  if (n.kind === i && ("static" === o || "prototype" === o)) {
                    var r = "static" === o ? e : t;
                    this.defineClassElement(r, n);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, n) {
              var t = n.descriptor;
              if ("field" === n.kind) {
                var i = n.initializer;
                t = {
                  enumerable: t.enumerable,
                  writable: t.writable,
                  configurable: t.configurable,
                  value: void 0 === i ? void 0 : i.call(e),
                };
              }
              Object.defineProperty(e, n.key, t);
            },
            decorateClass: function(e, n) {
              var t = [],
                i = [],
                o = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, o);
                }, this),
                e.forEach(function(e) {
                  if (!b(e)) return t.push(e);
                  var n = this.decorateElement(e, o);
                  t.push(n.element),
                    t.push.apply(t, n.extras),
                    i.push.apply(i, n.finishers);
                }, this),
                !n)
              )
                return { elements: t, finishers: i };
              var r = this.decorateConstructor(t, n);
              return i.push.apply(i, r.finishers), (r.finishers = i), r;
            },
            addElementPlacement: function(e, n, t) {
              var i = n[e.placement];
              if (!t && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function(e, n) {
              for (
                var t = [], i = [], o = e.decorators, r = o.length - 1;
                r >= 0;
                r--
              ) {
                var a = n[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var c = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, o[r])(c) || c);
                (e = l.element),
                  this.addElementPlacement(e, n),
                  l.finisher && i.push(l.finisher);
                var s = l.extras;
                if (s) {
                  for (var p = 0; p < s.length; p++)
                    this.addElementPlacement(s[p], n);
                  t.push.apply(t, s);
                }
              }
              return { element: e, finishers: i, extras: t };
            },
            decorateConstructor: function(e, n) {
              for (var t = [], i = n.length - 1; i >= 0; i--) {
                var o = this.fromClassDescriptor(e),
                  r = this.toClassDescriptor((0, n[i])(o) || o);
                if (
                  (void 0 !== r.finisher && t.push(r.finisher),
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
              return { elements: e, finishers: t };
            },
            fromElementDescriptor: function(e) {
              var n = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (n.initializer = e.initializer),
                n
              );
            },
            toElementDescriptors: function(e) {
              var n;
              if (void 0 !== e)
                return ((n = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(n) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(n) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var n = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    n
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var n = String(e.kind);
              if ("method" !== n && "field" !== n)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    n +
                    '"'
                );
              var t = y(e.key),
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
                kind: n,
                key: t,
                placement: i,
                descriptor: Object.assign({}, o),
              };
              return (
                "field" !== n
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
              var n = this.toElementDescriptor(e),
                t = v(e, "finisher"),
                i = this.toElementDescriptors(e.extras);
              return { element: n, finisher: t, extras: i };
            },
            fromClassDescriptor: function(e) {
              var n = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(n, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                n
              );
            },
            toClassDescriptor: function(e) {
              var n = String(e.kind);
              if ("class" !== n)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    n +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var t = v(e, "finisher"),
                i = this.toElementDescriptors(e.elements);
              return { elements: i, finisher: t };
            },
            runClassFinishers: function(e, n) {
              for (var t = 0; t < n.length; t++) {
                var i = (0, n[t])(e);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  e = i;
                }
              }
              return e;
            },
            disallowProperty: function(e, n, t) {
              if (void 0 !== e[n])
                throw new TypeError(t + " can't have a ." + n + " property.");
            },
          };
          return e;
        })();
        if (i) for (var r = 0; r < i.length; r++) o = i[r](o);
        var a = n(function(e) {
            o.initializeInstanceElements(e, c.elements);
          }, t),
          c = o.decorateClass(
            (function(e) {
              for (
                var n = [],
                  t = function(e) {
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
                if ("method" === r.kind && (o = n.find(t)))
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
                    f(r, o);
                  }
                else n.push(r);
              }
              return n;
            })(a.d.map(h)),
            e
          );
        return (
          o.initializeClassElements(a.F, c.elements),
          o.runClassFinishers(a.F, c.finishers)
        );
      })(
        null,
        function(e, n) {
          return {
            F: (function(t) {
              function i() {
                var n, t, r, a;
                !(function(e, n) {
                  if (!(e instanceof n))
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
                  (t =
                    !(a = (n = p(i)).call.apply(n, [this].concat(l))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? u(r)
                      : a),
                  e(u(t)),
                  t
                );
              }
              return (
                (function(e, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(n && n.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    n && d(e, n);
                })(i, n),
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
    178: function(e, n, t) {
      "use strict";
      t(4), t(44), t(41), t(52);
      var i = t(5),
        o = t(3);
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
      Object(i.a)({ _template: Object(o.a)(r()), is: "paper-item-body" });
    },
    187: function(e, n, t) {
      "use strict";
      t(4), t(44), t(52), t(140);
      var i = t(5),
        o = t(3),
        r = t(117);
      function a() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n',
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
        is: "paper-icon-item",
        behaviors: [r.a],
      });
    },
    198: function(e, n, t) {
      "use strict";
      t(4), t(44);
      var i = t(5),
        o = t(1),
        r = t(3),
        a = t(124);
      function c() {
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
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
            var n = e.offsetHeight;
            this.hasScrollingRegion
              ? ((e.style.left = ""), (e.style.right = ""))
              : requestAnimationFrame(
                  function() {
                    var n = this.getBoundingClientRect(),
                      t = document.documentElement.clientWidth - n.right;
                    (e.style.left = n.left + "px"), (e.style.right = t + "px");
                  }.bind(this)
                );
            var t = this.$.contentContainer.style;
            e.fixed && !e.condenses && this.hasScrollingRegion
              ? ((t.marginTop = n + "px"), (t.paddingTop = ""))
              : ((t.paddingTop = n + "px"), (t.marginTop = ""));
          }
        },
      });
    },
    217: function(e, n, t) {
      "use strict";
      function i(e, n) {
        return e && -1 !== e.config.components.indexOf(n);
      }
      t.d(n, "a", function() {
        return i;
      });
    },
    279: function(e, n, t) {
      "use strict";
      t(106);
      var i = t(3),
        o = t(25),
        r = t(105),
        a = t(217),
        c = t(19);
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
          '\n      <paper-icon-button\n        aria-label="Start conversation"\n        icon="hass:microphone"\n        hidden$="[[!canListen]]"\n        on-click="handleListenClick"\n      ></paper-icon-button>\n    ',
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
          var i = n[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function u(e, n) {
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
      function h(e, n) {
        return (h =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var f = (function(e) {
        function n() {
          return (
            (function(e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            u(this, d(n).apply(this, arguments))
          );
        }
        var l, f, b;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && h(e, n);
          })(n, Object(r["a"])(o["a"])),
          (l = n),
          (b = [
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
                  hass: { type: Object, value: null },
                  canListen: {
                    type: Boolean,
                    computed: "computeCanListen(hass)",
                    notify: !0,
                  },
                };
              },
            },
          ]),
          (f = [
            {
              key: "computeCanListen",
              value: function(e) {
                return (
                  "webkitSpeechRecognition" in window &&
                  Object(a.a)(e, "conversation")
                );
              },
            },
            {
              key: "handleListenClick",
              value: function() {
                Object(c.a)(this, "show-dialog", {
                  dialogImport: function() {
                    return t.e(120).then(t.bind(null, 354));
                  },
                  dialogTag: "ha-voice-command-dialog",
                });
              },
            },
          ]) && p(l.prototype, f),
          b && p(l, b),
          n
        );
      })();
      customElements.define("ha-start-voice-button", f);
    },
    667: function(e, n, t) {
      "use strict";
      t.r(n);
      t(198),
        t(216),
        t(145),
        t(148),
        t(106),
        t(90),
        t(187),
        t(178),
        t(138),
        t(139),
        t(142);
      var i = t(3),
        o = t(25),
        r = (t(126), t(279), t(172), t(171));
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
        var e = (function(e, n) {
          n || (n = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          );
        })([
          '\n      <style include="ha-style">\n        :host {\n          height: 100%;\n        }\n        app-toolbar paper-listbox {\n          width: 150px;\n        }\n        app-toolbar paper-item {\n          cursor: pointer;\n        }\n        .content {\n          padding-bottom: 32px;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n        paper-icon-item {\n          border-top: 1px solid var(--divider-color);\n        }\n        paper-icon-item:first-child {\n          border-top: 0;\n        }\n        paper-checkbox {\n          padding: 11px;\n        }\n        paper-input {\n          --paper-input-container-underline: {\n            display: none;\n          }\n          --paper-input-container-underline-focus: {\n            display: none;\n          }\n          position: relative;\n          top: 1px;\n        }\n        .tip {\n          padding: 24px;\n          text-align: center;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot="header" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass="[[hass]]"\n              narrow="[[narrow]]"\n            ></ha-menu-button>\n            <div main-title>[[localize(\'panel.shopping_list\')]]</div>\n            <ha-start-voice-button\n              hass="[[hass]]"\n              can-listen="{{canListen}}"\n            ></ha-start-voice-button>\n            <paper-menu-button\n              horizontal-align="right"\n              horizontal-offset="-5"\n              vertical-offset="-5"\n            >\n              <paper-icon-button\n                icon="hass:dots-vertical"\n                slot="dropdown-trigger"\n              ></paper-icon-button>\n              <paper-listbox slot="dropdown-content">\n                <paper-item on-click="_clearCompleted"\n                  >[[localize(\'ui.panel.shopping-list.clear_completed\')]]</paper-item\n                >\n              </paper-listbox>\n            </paper-menu-button>\n          </app-toolbar>\n        </app-header>\n\n        <div class="content">\n          <ha-card>\n            <paper-icon-item on-focus="_focusRowInput">\n              <paper-icon-button\n                slot="item-icon"\n                icon="hass:plus"\n                on-click="_addItem"\n              ></paper-icon-button>\n              <paper-item-body>\n                <paper-input\n                  id="addBox"\n                  placeholder="[[localize(\'ui.panel.shopping-list.add_item\')]]"\n                  on-keydown="_addKeyPress"\n                  no-label-float\n                ></paper-input>\n              </paper-item-body>\n            </paper-icon-item>\n\n            <template is="dom-repeat" items="[[items]]">\n              <paper-icon-item>\n                <paper-checkbox\n                  slot="item-icon"\n                  checked="{{item.complete}}"\n                  on-click="_itemCompleteTapped"\n                  tabindex="0"\n                ></paper-checkbox>\n                <paper-item-body>\n                  <paper-input\n                    id="editBox"\n                    no-label-float\n                    value="[[item.name]]"\n                    on-change="_saveEdit"\n                  ></paper-input>\n                </paper-item-body>\n              </paper-icon-item>\n            </template>\n          </ha-card>\n          <div class="tip" hidden$="[[!canListen]]">\n            [[localize(\'ui.panel.shopping-list.microphone_tip\')]]\n          </div>\n        </div>\n      </app-header-layout>\n    ',
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l(e, n) {
        for (var t = 0; t < n.length; t++) {
          var i = n[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function s(e, n) {
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
      function p(e, n, t) {
        return (p =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, n, t) {
                var i = (function(e, n) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, n) &&
                    null !== (e = u(e));

                  );
                  return e;
                })(e, n);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, n);
                  return o.get ? o.get.call(t) : o.value;
                }
              })(e, n, t || e);
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, n) {
        return (d =
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
            s(this, u(n).apply(this, arguments))
          );
        }
        var t, a, h;
        return (
          (function(e, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && d(e, n);
          })(n, Object(r["a"])(o["a"])),
          (t = n),
          (h = [
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
                  canListen: Boolean,
                  items: { type: Array, value: [] },
                };
              },
            },
          ]),
          (a = [
            {
              key: "connectedCallback",
              value: function() {
                p(u(n.prototype), "connectedCallback", this).call(this),
                  (this._fetchData = this._fetchData.bind(this)),
                  this.hass.connection
                    .subscribeEvents(this._fetchData, "shopping_list_updated")
                    .then(
                      function(e) {
                        this._unsubEvents = e;
                      }.bind(this)
                    ),
                  this._fetchData();
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                p(u(n.prototype), "disconnectedCallback", this).call(this),
                  this._unsubEvents && this._unsubEvents();
              },
            },
            {
              key: "_fetchData",
              value: function() {
                this.hass.callApi("get", "shopping_list").then(
                  function(e) {
                    e.reverse(), (this.items = e);
                  }.bind(this)
                );
              },
            },
            {
              key: "_itemCompleteTapped",
              value: function(e) {
                var n = this;
                e.stopPropagation(),
                  this.hass
                    .callApi("post", "shopping_list/item/" + e.model.item.id, {
                      complete: e.target.checked,
                    })
                    .catch(function() {
                      return n._fetchData();
                    });
              },
            },
            {
              key: "_addItem",
              value: function(e) {
                var n = this;
                this.hass
                  .callApi("post", "shopping_list/item", {
                    name: this.$.addBox.value,
                  })
                  .catch(function() {
                    return n._fetchData();
                  }),
                  (this.$.addBox.value = ""),
                  e &&
                    setTimeout(function() {
                      return n.$.addBox.focus();
                    }, 10);
              },
            },
            {
              key: "_addKeyPress",
              value: function(e) {
                13 === e.keyCode && this._addItem();
              },
            },
            {
              key: "_saveEdit",
              value: function(e) {
                var n = this,
                  t = e.model,
                  i = t.index,
                  o = t.item,
                  r = e.target.value;
                r !== o.name &&
                  (this.set(["items", i, "name"], r),
                  this.hass
                    .callApi("post", "shopping_list/item/" + o.id, { name: r })
                    .catch(function() {
                      return n._fetchData();
                    }));
              },
            },
            {
              key: "_clearCompleted",
              value: function() {
                this.hass.callApi("POST", "shopping_list/clear_completed");
              },
            },
          ]) && l(t.prototype, a),
          h && l(t, h),
          n
        );
      })();
      customElements.define("ha-panel-shopping-list", h);
    },
    90: function(e, n, t) {
      "use strict";
      t(4), t(111), t(112), t(113), t(114);
      var i = t(59),
        o = (t(40), t(5)),
        r = t(3),
        a = t(94);
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
    91: function(e, n, t) {
      "use strict";
      t.d(n, "a", function() {
        return a;
      });
      t(4);
      var i = t(5),
        o = t(3);
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
//# sourceMappingURL=chunk.12e11dbe5e9ccb347e24.js.map
