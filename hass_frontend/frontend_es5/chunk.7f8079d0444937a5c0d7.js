/*! For license information please see chunk.7f8079d0444937a5c0d7.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [36],
  {
    150: function(e, t, n) {
      "use strict";
      var r = n(25),
        o = n(105);
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
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
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
      function s(e, t, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = c(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = null,
        f = ["svg", "path"],
        m = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              l(this, c(t).apply(this, arguments))
            );
          }
          var a, m, d;
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
            })(t, Object(o["a"])(r["a"])),
            (a = t),
            (d = [
              {
                key: "properties",
                get: function() {
                  return {
                    content: { type: String, observer: "_render" },
                    allowSvg: { type: Boolean, value: !1 },
                  };
                },
              },
            ]),
            (m = [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  s(c(t.prototype), "connectedCallback", this).call(this),
                    (this._scriptLoaded = 0),
                    (this._renderScheduled = !1),
                    (this._resize = function() {
                      return e.fire("iron-resize");
                    }),
                    u ||
                      (u = Promise.all([n.e(114), n.e(68)]).then(
                        n.bind(null, 168)
                      )),
                    u
                      .then(
                        function(t) {
                          var n = t.marked,
                            r = t.filterXSS;
                          (e.marked = n),
                            (e.filterXSS = r),
                            (e._scriptLoaded = 1);
                        },
                        function() {
                          e._scriptLoaded = 2;
                        }
                      )
                      .then(function() {
                        return e._render();
                      });
                },
              },
              {
                key: "_render",
                value: function() {
                  var e = this;
                  0 === this._scriptLoaded ||
                    this._renderScheduled ||
                    ((this._renderScheduled = !0),
                    Promise.resolve().then(function() {
                      if (((e._renderScheduled = !1), 1 === e._scriptLoaded)) {
                        (e.innerHTML = e.filterXSS(
                          e.marked(e.content, {
                            gfm: !0,
                            tables: !0,
                            breaks: !0,
                          }),
                          {
                            onIgnoreTag: e.allowSvg
                              ? function(e, t) {
                                  return f.indexOf(e) >= 0 ? t : null;
                                }
                              : null,
                          }
                        )),
                          e._resize();
                        for (
                          var t = document.createTreeWalker(e, 1, null, !1);
                          t.nextNode();

                        ) {
                          var n = t.currentNode;
                          "A" === n.tagName && n.host !== document.location.host
                            ? (n.target = "_blank")
                            : "IMG" === n.tagName &&
                              n.addEventListener("load", e._resize);
                        }
                      } else 2 === e._scriptLoaded && (e.innerText = e.content);
                    }));
                },
              },
            ]) && i(a.prototype, m),
            d && i(a, d),
            t
          );
        })();
      customElements.define("ha-markdown", m);
    },
    153: function(e, t, n) {
      "use strict";
      n(152);
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
      function i(e) {
        return (i = Object.setPrototypeOf
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
      var s = customElements.get("paper-slider"),
        c = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              a(this, i(t).apply(this, arguments))
            );
          }
          var n, r, c;
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
            })(t, s),
            (n = t),
            (c = [
              {
                key: "template",
                get: function() {
                  var e = document.createElement("template");
                  e.innerHTML = s.template.innerHTML;
                  var t = document.createElement("style");
                  return (
                    (t.innerHTML =
                      '\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    '),
                    e.content.appendChild(t),
                    e
                  );
                },
              },
            ]),
            (r = null) && o(n.prototype, r),
            c && o(n, c),
            t
          );
        })();
      customElements.define("ha-paper-slider", c);
    },
    155: function(e, t, n) {
      "use strict";
      n(148), n(141), n(106), n(90), n(138), n(139);
      var r = n(3),
        o = n(25),
        a = (n(153), n(105));
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
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .error {\n          color: red;\n        }\n        paper-checkbox {\n          display: inline-block;\n          padding: 22px 0;\n        }\n      </style>\n      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error.base]]">\n          <div class="error">[[computeError(error.base, schema)]]</div>\n        </template>\n\n        <template is="dom-repeat" items="[[schema]]">\n          <ha-form\n            data="[[_getValue(data, item)]]"\n            schema="[[item]]"\n            error="[[_getValue(error, item)]]"\n            on-data-changed="_valueChanged"\n            compute-label="[[computeLabel]]"\n            compute-error="[[computeError]]"\n          ></ha-form>\n        </template>\n      </template>\n      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error]]">\n          <div class="error">[[computeError(error, schema)]]</div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "string")]]\'\n          restamp=""\n        >\n          <template\n            is="dom-if"\n            if=\'[[_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              type="[[_passwordFieldType(unmaskedPassword)]]"\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            >\n              <paper-icon-button\n                toggles\n                active="{{unmaskedPassword}}"\n                slot="suffix"\n                icon="[[_passwordFieldIcon(unmaskedPassword)]]"\n                id="iconButton"\n                title="Click to toggle between masked and clear password"\n              >\n              </paper-icon-button>\n            </paper-input>\n          </template>\n          <template\n            is="dom-if"\n            if=\'[[!_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "integer")]]\'\n          restamp=""\n        >\n          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">\n            <div>\n              [[computeLabel(schema)]]\n              <ha-paper-slider\n                pin=""\n                value="{{data}}"\n                min="[[schema.valueMin]]"\n                max="[[schema.valueMax]]"\n              ></ha-paper-slider>\n            </div>\n          </template>\n          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              type="number"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template is="dom-if" if=\'[[_equals(schema.type, "float")]]\' restamp="">\n          \x3c!-- TODO --\x3e\n          <paper-input\n            label="[[computeLabel(schema)]]"\n            value="{{data}}"\n            required="[[schema.required]]"\n            auto-validate="[[schema.required]]"\n            error-message="Required"\n          ></paper-input>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "boolean")]]\'\n          restamp=""\n        >\n          <div>\n            <paper-checkbox checked="{{data}}"\n              >[[computeLabel(schema)]]</paper-checkbox\n            >\n          </div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "select")]]\'\n          restamp=""\n        >\n          <paper-dropdown-menu label="[[computeLabel(schema)]]">\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="item-name"\n              selected="{{data}}"\n            >\n              <template is="dom-repeat" items="[[schema.options]]">\n                <paper-item item-name$="[[_optionValue(item)]]"\n                  >[[_optionLabel(item)]]</paper-item\n                >\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </template>\n      </template>\n    ',
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
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
      function p(e) {
        return (p = Object.setPrototypeOf
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
      var f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, p(t).apply(this, arguments))
          );
        }
        var n, i, f;
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
          })(t, Object(a["a"])(o["a"])),
          (n = t),
          (f = [
            {
              key: "template",
              get: function() {
                return Object(r.a)(l());
              },
            },
            {
              key: "properties",
              get: function() {
                return {
                  data: { type: Object, notify: !0 },
                  schema: Object,
                  error: Object,
                  computeLabel: {
                    type: Function,
                    value: function() {
                      return function(e) {
                        return e && e.name;
                      };
                    },
                  },
                  computeError: {
                    type: Function,
                    value: function() {
                      return function(e, t) {
                        return e;
                      };
                    },
                  },
                };
              },
            },
          ]),
          (i = [
            {
              key: "focus",
              value: function() {
                var e = this.shadowRoot.querySelector(
                  "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
                );
                e && e.focus();
              },
            },
            {
              key: "_isArray",
              value: function(e) {
                return Array.isArray(e);
              },
            },
            {
              key: "_isRange",
              value: function(e) {
                return "valueMin" in e && "valueMax" in e;
              },
            },
            {
              key: "_equals",
              value: function(e, t) {
                return e === t;
              },
            },
            {
              key: "_includes",
              value: function(e, t) {
                return e.indexOf(t) >= 0;
              },
            },
            {
              key: "_getValue",
              value: function(e, t) {
                return e ? e[t.name] : null;
              },
            },
            {
              key: "_valueChanged",
              value: function(e) {
                var t = e.detail.value;
                "integer" === e.model.item.type && (t = Number(e.detail.value)),
                  this.set(["data", e.model.item.name], t);
              },
            },
            {
              key: "_passwordFieldType",
              value: function(e) {
                return e ? "text" : "password";
              },
            },
            {
              key: "_passwordFieldIcon",
              value: function(e) {
                return e ? "hass:eye-off" : "hass:eye";
              },
            },
            {
              key: "_optionValue",
              value: function(e) {
                return Array.isArray(e) ? e[0] : e;
              },
            },
            {
              key: "_optionLabel",
              value: function(e) {
                return Array.isArray(e) ? e[1] : e;
              },
            },
          ]) && s(n.prototype, i),
          f && s(n, f),
          t
        );
      })();
      customElements.define("ha-form", f);
    },
    190: function(e, t, n) {
      "use strict";
      n(188);
      var r = n(70),
        o = n(1),
        a = n(123),
        i = {
          getTabbableNodes: function(e) {
            var t = [];
            return this._collectTabbableNodes(e, t)
              ? a.a._sortByTabIndex(t)
              : t;
          },
          _collectTabbableNodes: function(e, t) {
            if (e.nodeType !== Node.ELEMENT_NODE || !a.a._isVisible(e))
              return !1;
            var n,
              r = e,
              i = a.a._normalizedTabIndex(r),
              l = i > 0;
            i >= 0 && t.push(r),
              (n =
                "content" === r.localName || "slot" === r.localName
                  ? Object(o.a)(r).getDistributedNodes()
                  : Object(o.a)(r.shadowRoot || r.root || r).children);
            for (var s = 0; s < n.length; s++)
              l = this._collectTabbableNodes(n[s], t) || l;
            return l;
          },
        };
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
      function s(e, t) {
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
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = customElements.get("paper-dialog"),
        f = {
          get _focusableNodes() {
            return i.getTabbableNodes(this);
          },
        },
        m = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              s(this, c(t).apply(this, arguments))
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
            })(t, Object(r["b"])([f], u)),
            t
          );
        })();
      customElements.define("ha-paper-dialog", m);
    },
    203: function(e, t, n) {
      "use strict";
      n(4), n(44), n(41);
      var r = n(180),
        o = n(5),
        a = n(3);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        _template: Object(a.a)(i()),
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
            this.dialogElement.behaviors.indexOf(r.b) >= 0
              ? ((this.dialogElement.sizingTarget = this.scrollTarget),
                this.scrollTarget.classList.remove("fit"))
              : this.dialogElement && this.scrollTarget.classList.add("fit");
        },
      });
    },
    695: function(e, t, n) {
      "use strict";
      n.r(t);
      n(82), n(203), n(181);
      var r = n(3),
        o = n(25),
        a = (n(190), n(155), n(150), n(92), n(105)),
        i = n(171);
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
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style include="ha-style-dialog">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-markdown img:first-child:last-child,\n        ha-markdown svg:first-child:last-child {\n          display: block;\n          margin: 0 auto;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .init-spinner {\n          padding: 10px 100px 34px;\n          text-align: center;\n        }\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      </style>\n      <ha-paper-dialog\n        id="dialog"\n        with-backdrop=""\n        opened="{{_opened}}"\n        on-opened-changed="_openedChanged"\n      >\n        <h2>\n          <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n            [[localize(\'ui.panel.profile.mfa_setup.title_aborted\')]]\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n            [[localize(\'ui.panel.profile.mfa_setup.title_success\')]]\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n            [[_computeStepTitle(localize, _step)]]\n          </template>\n        </h2>\n        <paper-dialog-scrollable>\n          <template is="dom-if" if="[[_errorMsg]]">\n            <div class="error">[[_errorMsg]]</div>\n          </template>\n          <template is="dom-if" if="[[!_step]]">\n            <div class="init-spinner">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is="dom-if" if="[[_step]]">\n            <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n              <ha-markdown\n                content="[[_computeStepAbortedReason(localize, _step)]]"\n              ></ha-markdown>\n            </template>\n\n            <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n              <p>\n                [[localize(\'ui.panel.profile.mfa_setup.step_done\', \'step\',\n                _step.title)]]\n              </p>\n            </template>\n\n            <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n              <template\n                is="dom-if"\n                if="[[_computeStepDescription(localize, _step)]]"\n              >\n                <ha-markdown\n                  content="[[_computeStepDescription(localize, _step)]]"\n                  allow-svg\n                ></ha-markdown>\n              </template>\n\n              <ha-form\n                data="{{_stepData}}"\n                schema="[[_step.data_schema]]"\n                error="[[_step.errors]]"\n                compute-label="[[_computeLabelCallback(localize, _step)]]"\n                compute-error="[[_computeErrorCallback(localize, _step)]]"\n              ></ha-form>\n            </template>\n          </template>\n        </paper-dialog-scrollable>\n        <div class="buttons">\n          <template is="dom-if" if="[[_equals(_step.type, \'abort\')]]">\n            <mwc-button on-click="_flowDone"\n              >[[localize(\'ui.panel.profile.mfa_setup.close\')]]</mwc-button\n            >\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'create_entry\')]]">\n            <mwc-button on-click="_flowDone"\n              >[[localize(\'ui.panel.profile.mfa_setup.close\')]]</mwc-button\n            >\n          </template>\n          <template is="dom-if" if="[[_equals(_step.type, \'form\')]]">\n            <template is="dom-if" if="[[_loading]]">\n              <div class="submit-spinner">\n                <paper-spinner active></paper-spinner>\n              </div>\n            </template>\n            <template is="dom-if" if="[[!_loading]]">\n              <mwc-button on-click="_submitStep"\n                >[[localize(\'ui.panel.profile.mfa_setup.submit\')]]</mwc-button\n              >\n            </template>\n          </template>\n        </div>\n      </ha-paper-dialog>\n    ',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
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
      function u(e, t, n) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var r = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = f(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function f(e) {
        return (f = Object.setPrototypeOf
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
      var d = 0,
        h = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              p(this, f(t).apply(this, arguments))
            );
          }
          var n, l, h;
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
            })(t, Object(i["a"])(Object(a["a"])(o["a"]))),
            (n = t),
            (h = [
              {
                key: "template",
                get: function() {
                  return Object(r.a)(s());
                },
              },
              {
                key: "properties",
                get: function() {
                  return {
                    _hass: Object,
                    _dialogClosedCallback: Function,
                    _instance: Number,
                    _loading: { type: Boolean, value: !1 },
                    _errorMsg: String,
                    _opened: { type: Boolean, value: !1 },
                    _step: { type: Object, value: null },
                    _stepData: Object,
                  };
                },
              },
            ]),
            (l = [
              {
                key: "ready",
                value: function() {
                  var e = this;
                  u(f(t.prototype), "ready", this).call(this),
                    this.addEventListener("keypress", function(t) {
                      13 === t.keyCode && e._submitStep();
                    });
                },
              },
              {
                key: "showDialog",
                value: function(e) {
                  var t = this,
                    n = e.hass,
                    r = e.continueFlowId,
                    o = e.mfaModuleId,
                    a = e.dialogClosedCallback;
                  (this.hass = n),
                    (this._instance = d++),
                    (this._dialogClosedCallback = a),
                    (this._createdFromHandler = !!o),
                    (this._loading = !0),
                    (this._opened = !0);
                  var i = r
                      ? this.hass.callWS({ type: "auth/setup_mfa", flow_id: r })
                      : this.hass.callWS({
                          type: "auth/setup_mfa",
                          mfa_module_id: o,
                        }),
                    l = this._instance;
                  i.then(function(e) {
                    l === t._instance &&
                      (t._processStep(e),
                      (t._loading = !1),
                      setTimeout(function() {
                        return t.$.dialog.center();
                      }, 0));
                  });
                },
              },
              {
                key: "_submitStep",
                value: function() {
                  var e = this;
                  (this._loading = !0), (this._errorMsg = null);
                  var t = this._instance;
                  this.hass
                    .callWS({
                      type: "auth/setup_mfa",
                      flow_id: this._step.flow_id,
                      user_input: this._stepData,
                    })
                    .then(
                      function(n) {
                        t === e._instance &&
                          (e._processStep(n), (e._loading = !1));
                      },
                      function(t) {
                        (e._errorMsg =
                          (t && t.body && t.body.message) ||
                          "Unknown error occurred"),
                          (e._loading = !1);
                      }
                    );
                },
              },
              {
                key: "_processStep",
                value: function(e) {
                  e.errors || (e.errors = {}),
                    (this._step = e),
                    0 === Object.keys(e.errors).length && (this._stepData = {});
                },
              },
              {
                key: "_flowDone",
                value: function() {
                  this._opened = !1;
                  var e =
                    this._step &&
                    ["create_entry", "abort"].includes(this._step.type);
                  this._step && !e && this._createdFromHandler,
                    this._dialogClosedCallback({ flowFinished: e }),
                    (this._errorMsg = null),
                    (this._step = null),
                    (this._stepData = {}),
                    (this._dialogClosedCallback = null);
                },
              },
              {
                key: "_equals",
                value: function(e, t) {
                  return e === t;
                },
              },
              {
                key: "_openedChanged",
                value: function(e) {
                  this._step && !e.detail.value && this._flowDone();
                },
              },
              {
                key: "_computeStepAbortedReason",
                value: function(e, t) {
                  return e(
                    "component.auth.mfa_setup."
                      .concat(t.handler, ".abort.")
                      .concat(t.reason)
                  );
                },
              },
              {
                key: "_computeStepTitle",
                value: function(e, t) {
                  return (
                    e(
                      "component.auth.mfa_setup."
                        .concat(t.handler, ".step.")
                        .concat(t.step_id, ".title")
                    ) || "Setup Multi-factor Authentication"
                  );
                },
              },
              {
                key: "_computeStepDescription",
                value: function(e, t) {
                  var n = [
                      "component.auth.mfa_setup."
                        .concat(t.handler, ".step.")
                        .concat(t.step_id, ".description"),
                    ],
                    r = t.description_placeholders || {};
                  return (
                    Object.keys(r).forEach(function(e) {
                      n.push(e), n.push(r[e]);
                    }),
                    e.apply(void 0, n)
                  );
                },
              },
              {
                key: "_computeLabelCallback",
                value: function(e, t) {
                  return function(n) {
                    return (
                      e(
                        "component.auth.mfa_setup."
                          .concat(t.handler, ".step.")
                          .concat(t.step_id, ".data.")
                          .concat(n.name)
                      ) || n.name
                    );
                  };
                },
              },
              {
                key: "_computeErrorCallback",
                value: function(e, t) {
                  return function(n) {
                    return (
                      e(
                        "component.auth.mfa_setup."
                          .concat(t.handler, ".error.")
                          .concat(n)
                      ) || n
                    );
                  };
                },
              },
            ]) && c(n.prototype, l),
            h && c(n, h),
            t
          );
        })();
      customElements.define("ha-mfa-module-setup-flow", h);
    },
  },
]);
//# sourceMappingURL=chunk.7f8079d0444937a5c0d7.js.map
