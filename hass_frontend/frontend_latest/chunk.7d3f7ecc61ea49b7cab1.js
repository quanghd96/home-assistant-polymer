/*! For license information please see chunk.7d3f7ecc61ea49b7cab1.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    179: function(e, t, i) {
      "use strict";
      i.d(t, "b", function() {
        return o;
      }),
        i.d(t, "a", function() {
          return s;
        });
      i(4);
      var r = i(84),
        n = i(1);
      const o = {
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
              var t = Object(n.a)(e).path, i = 0, r = t.indexOf(this);
              i < r;
              i++
            ) {
              var o = t[i];
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
        s = [r.a, o];
    },
    184: function(e, t, i) {
      "use strict";
      i(4), i(44), i(41), i(52), i(83);
      const r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
        (r.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(r.content);
    },
    187: function(e, t, i) {
      "use strict";
      i(4), i(184);
      var r = i(119),
        n = i(179),
        o = i(5),
        s = i(3);
      Object(o.a)({
        _template: s.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,
        is: "paper-dialog",
        behaviors: [n.a, r.a],
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
    189: function(e, t, i) {
      "use strict";
      i(187);
      var r = i(70),
        n = i(1),
        o = i(123);
      const s = {
          getTabbableNodes: function(e) {
            var t = [];
            return this._collectTabbableNodes(e, t)
              ? o.a._sortByTabIndex(t)
              : t;
          },
          _collectTabbableNodes: function(e, t) {
            if (e.nodeType !== Node.ELEMENT_NODE || !o.a._isVisible(e))
              return !1;
            var i,
              r = e,
              s = o.a._normalizedTabIndex(r),
              a = s > 0;
            s >= 0 && t.push(r),
              (i =
                "content" === r.localName || "slot" === r.localName
                  ? Object(n.a)(r).getDistributedNodes()
                  : Object(n.a)(r.shadowRoot || r.root || r).children);
            for (var l = 0; l < i.length; l++)
              a = this._collectTabbableNodes(i[l], t) || a;
            return a;
          },
        },
        a = customElements.get("paper-dialog"),
        l = {
          get _focusableNodes() {
            return s.getTabbableNodes(this);
          },
        };
      customElements.define(
        "ha-paper-dialog",
        class extends Object(r.b)([l], a) {}
      );
    },
    203: function(e, t, i) {
      "use strict";
      i(4), i(44), i(41);
      var r = i(179),
        n = i(5),
        o = i(3);
      Object(n.a)({
        _template: o.a`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
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
    208: function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
        return r;
      });
      const r = i(0).f`
  <style>
    paper-toggle-button {
      padding-top: 16px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;
    },
    738: function(e, t, i) {
      "use strict";
      i.r(t);
      var r = i(0),
        n = (i(180), i(189), i(82), i(203), i(54)),
        o = (i(90), i(19)),
        s = i(208);
      function a(e) {
        var t,
          i = h(e.key);
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
          key: i,
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
      function l(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function c(e) {
        return e.decorators && e.decorators.length;
      }
      function d(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function p(e, t) {
        var i = e[t];
        if (void 0 !== i && "function" != typeof i)
          throw new TypeError("Expected '" + t + "' to be a function");
        return i;
      }
      function h(e) {
        var t = (function(e, t) {
          if ("object" != typeof e || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      !(function(e, t, i, r) {
        var n = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(i) {
                t.forEach(function(t) {
                  t.kind === i &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var i = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var n = t.placement;
                  if (t.kind === r && ("static" === n || "prototype" === n)) {
                    var o = "static" === n ? e : i;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var i = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                i = {
                  enumerable: i.enumerable,
                  writable: i.writable,
                  configurable: i.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, i);
            },
            decorateClass: function(e, t) {
              var i = [],
                r = [],
                n = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, n);
                }, this),
                e.forEach(function(e) {
                  if (!c(e)) return i.push(e);
                  var t = this.decorateElement(e, n);
                  i.push(t.element),
                    i.push.apply(i, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: i, finishers: r };
              var o = this.decorateConstructor(i, t);
              return r.push.apply(r, o.finishers), (o.finishers = r), o;
            },
            addElementPlacement: function(e, t, i) {
              var r = t[e.placement];
              if (!i && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var i = [], r = [], n = e.decorators, o = n.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, n[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var d = 0; d < c.length; d++)
                    this.addElementPlacement(c[d], t);
                  i.push.apply(i, c);
                }
              }
              return { element: e, finishers: r, extras: i };
            },
            decorateConstructor: function(e, t) {
              for (var i = [], r = t.length - 1; r >= 0; r--) {
                var n = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[r])(n) || n);
                if (
                  (void 0 !== o.finisher && i.push(o.finisher),
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
              return { elements: e, finishers: i };
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
              var i = h(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var n = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: i,
                placement: r,
                descriptor: Object.assign({}, n),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      n,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      n,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      n,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                i = p(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: i, extras: r };
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
              var i = p(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: i };
            },
            runClassFinishers: function(e, t) {
              for (var i = 0; i < t.length; i++) {
                var r = (0, t[i])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, i) {
              if (void 0 !== e[t])
                throw new TypeError(i + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var o = 0; o < r.length; o++) n = r[o](n);
        var s = t(function(e) {
            n.initializeInstanceElements(e, f.elements);
          }, i),
          f = n.decorateClass(
            (function(e) {
              for (
                var t = [],
                  i = function(e) {
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
                var n,
                  o = e[r];
                if ("method" === o.kind && (n = t.find(i)))
                  if (d(o.descriptor) || d(n.descriptor)) {
                    if (c(o) || c(n))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    n.descriptor = o.descriptor;
                  } else {
                    if (c(o)) {
                      if (c(n))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      n.decorators = o.decorators;
                    }
                    l(o, n);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(a)),
            e
          );
        n.initializeClassElements(s.F, f.elements),
          n.runClassFinishers(s.F, f.finishers);
      })(
        [Object(r.d)("hui-lovelace-editor")],
        function(e, t) {
          return {
            F: class extends t {
              constructor(...t) {
                super(...t), e(this);
              }
            },
            d: [
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "config",
                value: void 0,
              },
              {
                kind: "get",
                key: "_title",
                value: function() {
                  return (this.config && this.config.title) || "";
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return r.f`
      ${s.a}
      <div class="card-config">
        <paper-input
          label="Title"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
      </div>
    `;
                },
              },
              {
                kind: "method",
                key: "_valueChanged",
                value: function(e) {
                  if (!this.config) return;
                  const t = e.currentTarget;
                  if (this[`_${t.configValue}`] === t.value) return;
                  let i;
                  t.configValue &&
                    (i = Object.assign({}, this.config, {
                      [t.configValue]: t.value,
                    })),
                    Object(o.a)(this, "lovelace-config-changed", { config: i });
                },
              },
            ],
          };
        },
        r.a
      );
      function f(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (i = o[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
        return n;
      }
      function u(e) {
        var t,
          i = b(e.key);
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
          key: i,
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
      function m(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function g(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var i = e[t];
        if (void 0 !== i && "function" != typeof i)
          throw new TypeError("Expected '" + t + "' to be a function");
        return i;
      }
      function b(e) {
        var t = (function(e, t) {
          if ("object" != typeof e || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      i.d(t, "HuiDialogEditLovelace", function() {
        return k;
      });
      let k = (function(e, t, i, r) {
        var n = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(i) {
                t.forEach(function(t) {
                  t.kind === i &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var i = e.prototype;
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  var n = t.placement;
                  if (t.kind === r && ("static" === n || "prototype" === n)) {
                    var o = "static" === n ? e : i;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var i = t.descriptor;
              if ("field" === t.kind) {
                var r = t.initializer;
                i = {
                  enumerable: i.enumerable,
                  writable: i.writable,
                  configurable: i.configurable,
                  value: void 0 === r ? void 0 : r.call(e),
                };
              }
              Object.defineProperty(e, t.key, i);
            },
            decorateClass: function(e, t) {
              var i = [],
                r = [],
                n = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, n);
                }, this),
                e.forEach(function(e) {
                  if (!g(e)) return i.push(e);
                  var t = this.decorateElement(e, n);
                  i.push(t.element),
                    i.push.apply(i, t.extras),
                    r.push.apply(r, t.finishers);
                }, this),
                !t)
              )
                return { elements: i, finishers: r };
              var o = this.decorateConstructor(i, t);
              return r.push.apply(r, o.finishers), (o.finishers = r), o;
            },
            addElementPlacement: function(e, t, i) {
              var r = t[e.placement];
              if (!i && -1 !== r.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              r.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var i = [], r = [], n = e.decorators, o = n.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, n[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && r.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var d = 0; d < c.length; d++)
                    this.addElementPlacement(c[d], t);
                  i.push.apply(i, c);
                }
              }
              return { element: e, finishers: r, extras: i };
            },
            decorateConstructor: function(e, t) {
              for (var i = [], r = t.length - 1; r >= 0; r--) {
                var n = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[r])(n) || n);
                if (
                  (void 0 !== o.finisher && i.push(o.finisher),
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
              return { elements: e, finishers: i };
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
              var i = b(e.key),
                r = String(e.placement);
              if ("static" !== r && "prototype" !== r && "own" !== r)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    r +
                    '"'
                );
              var n = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: i,
                placement: r,
                descriptor: Object.assign({}, n),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      n,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      n,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      n,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                i = y(e, "finisher"),
                r = this.toElementDescriptors(e.extras);
              return { element: t, finisher: i, extras: r };
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
              var i = y(e, "finisher"),
                r = this.toElementDescriptors(e.elements);
              return { elements: r, finisher: i };
            },
            runClassFinishers: function(e, t) {
              for (var i = 0; i < t.length; i++) {
                var r = (0, t[i])(e);
                if (void 0 !== r) {
                  if ("function" != typeof r)
                    throw new TypeError("Finishers must return a constructor.");
                  e = r;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, i) {
              if (void 0 !== e[t])
                throw new TypeError(i + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (r) for (var o = 0; o < r.length; o++) n = r[o](n);
        var s = t(function(e) {
            n.initializeInstanceElements(e, a.elements);
          }, i),
          a = n.decorateClass(
            (function(e) {
              for (
                var t = [],
                  i = function(e) {
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
                var n,
                  o = e[r];
                if ("method" === o.kind && (n = t.find(i)))
                  if (v(o.descriptor) || v(n.descriptor)) {
                    if (g(o) || g(n))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    n.descriptor = o.descriptor;
                  } else {
                    if (g(o)) {
                      if (g(n))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      n.decorators = o.decorators;
                    }
                    m(o, n);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(u)),
            e
          );
        return (
          n.initializeClassElements(s.F, a.elements),
          n.runClassFinishers(s.F, a.finishers)
        );
      })(
        [Object(r.d)("hui-dialog-edit-lovelace")],
        function(e, t) {
          return {
            F: class extends t {
              constructor() {
                super(), e(this), (this._saving = !1);
              }
            },
            d: [
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(r.g)()],
                key: "_lovelace",
                value: void 0,
              },
              { kind: "field", key: "_config", value: void 0 },
              { kind: "field", key: "_saving", value: void 0 },
              {
                kind: "method",
                key: "showDialog",
                value: async function(e) {
                  (this._lovelace = e),
                    null == this._dialog && (await this.updateComplete);
                  const t = f(this._lovelace.config, ["views"]);
                  (this._config = t), this._dialog.open();
                },
              },
              {
                kind: "get",
                key: "_dialog",
                value: function() {
                  return this.shadowRoot.querySelector("ha-paper-dialog");
                },
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return r.f`
      <ha-paper-dialog with-backdrop>
        <h2>Edit Lovelace</h2>
        <paper-dialog-scrollable>
          <hui-lovelace-editor
            .hass="${this.hass}"
            .config="${this._config}"
            @lovelace-config-changed="${this._ConfigChanged}"
          ></hui-lovelace-editor
        ></paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize("ui.common.cancel")}</mwc-button
          >
          <mwc-button
            ?disabled="${!this._config || this._saving}"
            @click="${this._save}"
          >
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize("ui.common.save")}</mwc-button
          >
        </div>
      </ha-paper-dialog>
    `;
                },
              },
              {
                kind: "method",
                key: "_closeDialog",
                value: function() {
                  (this._config = void 0), this._dialog.close();
                },
              },
              {
                kind: "method",
                key: "_save",
                value: async function() {
                  if (!this._config) return;
                  if (!this._isConfigChanged()) return void this._closeDialog();
                  this._saving = !0;
                  const e = this._lovelace,
                    t = Object.assign({}, e.config, this._config);
                  try {
                    await e.saveConfig(t), this._closeDialog();
                  } catch (i) {
                    alert(`Saving failed: ${i.message}`);
                  } finally {
                    this._saving = !1;
                  }
                },
              },
              {
                kind: "method",
                key: "_ConfigChanged",
                value: function(e) {
                  e.detail &&
                    e.detail.config &&
                    (this._config = e.detail.config);
                },
              },
              {
                kind: "method",
                key: "_isConfigChanged",
                value: function() {
                  const e = f(this._lovelace.config, ["views"]);
                  return JSON.stringify(this._config) !== JSON.stringify(e);
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [
                    n.b,
                    r.c`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 660px) {
          ha-paper-dialog {
            width: 650px;
          }
        }
        ha-paper-dialog {
          max-width: 650px;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
      `,
                  ];
                },
              },
            ],
          };
        },
        r.a
      );
    },
  },
]);
//# sourceMappingURL=chunk.7d3f7ecc61ea49b7cab1.js.map
