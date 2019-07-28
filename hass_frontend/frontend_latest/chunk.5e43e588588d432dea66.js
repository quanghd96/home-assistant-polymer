/*! For license information please see chunk.5e43e588588d432dea66.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    179: function(e, t, i) {
      "use strict";
      i.d(t, "b", function() {
        return o;
      }),
        i.d(t, "a", function() {
          return a;
        });
      i(4);
      var n = i(84),
        r = i(1);
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
              var t = Object(r.a)(e).path, i = 0, n = t.indexOf(this);
              i < n;
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
        a = [n.a, o];
    },
    184: function(e, t, i) {
      "use strict";
      i(4), i(44), i(41), i(52), i(83);
      const n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(n.content);
    },
    187: function(e, t, i) {
      "use strict";
      i(4), i(184);
      var n = i(119),
        r = i(179),
        o = i(5),
        a = i(3);
      Object(o.a)({
        _template: a.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,
        is: "paper-dialog",
        behaviors: [r.a, n.a],
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
      var n = i(70),
        r = i(1),
        o = i(123);
      const a = {
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
              n = e,
              a = o.a._normalizedTabIndex(n),
              s = a > 0;
            a >= 0 && t.push(n),
              (i =
                "content" === n.localName || "slot" === n.localName
                  ? Object(r.a)(n).getDistributedNodes()
                  : Object(r.a)(n.shadowRoot || n.root || n).children);
            for (var l = 0; l < i.length; l++)
              s = this._collectTabbableNodes(i[l], t) || s;
            return s;
          },
        },
        s = customElements.get("paper-dialog"),
        l = {
          get _focusableNodes() {
            return a.getTabbableNodes(this);
          },
        };
      customElements.define(
        "ha-paper-dialog",
        class extends Object(n.b)([l], s) {}
      );
    },
    692: function(e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "HuiSaveConfig", function() {
          return p;
        });
      var n = i(0),
        r = (i(180), i(189), i(82), i(54));
      function o(e) {
        var t,
          i = d(e.key);
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
        var n = {
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
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function a(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function s(e) {
        return e.decorators && e.decorators.length;
      }
      function l(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function c(e, t) {
        var i = e[t];
        if (void 0 !== i && "function" != typeof i)
          throw new TypeError("Expected '" + t + "' to be a function");
        return i;
      }
      function d(e) {
        var t = (function(e, t) {
          if ("object" != typeof e || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var n = i.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      let p = (function(e, t, i, n) {
        var r = (function() {
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
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var r = t.placement;
                  if (t.kind === n && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : i;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var i = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                i = {
                  enumerable: i.enumerable,
                  writable: i.writable,
                  configurable: i.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, i);
            },
            decorateClass: function(e, t) {
              var i = [],
                n = [],
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function(e) {
                  if (!s(e)) return i.push(e);
                  var t = this.decorateElement(e, r);
                  i.push(t.element),
                    i.push.apply(i, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: i, finishers: n };
              var o = this.decorateConstructor(i, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, i) {
              var n = t[e.placement];
              if (!i && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var i = [], n = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(s) || s);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && n.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var d = 0; d < c.length; d++)
                    this.addElementPlacement(c[d], t);
                  i.push.apply(i, c);
                }
              }
              return { element: e, finishers: n, extras: i };
            },
            decorateConstructor: function(e, t) {
              for (var i = [], n = t.length - 1; n >= 0; n--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(r) || r);
                if (
                  (void 0 !== o.finisher && i.push(o.finisher),
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
              var i = d(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: i,
                placement: n,
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
                i = c(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: i, extras: n };
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
              var i = c(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: i };
            },
            runClassFinishers: function(e, t) {
              for (var i = 0; i < t.length; i++) {
                var n = (0, t[i])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
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
        if (n) for (var p = 0; p < n.length; p++) r = n[p](r);
        var h = t(function(e) {
            r.initializeInstanceElements(e, u.elements);
          }, i),
          u = r.decorateClass(
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
                  n = 0;
                n < e.length;
                n++
              ) {
                var r,
                  o = e[n];
                if ("method" === o.kind && (r = t.find(i)))
                  if (l(o.descriptor) || l(r.descriptor)) {
                    if (s(o) || s(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (s(o)) {
                      if (s(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    a(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(h.d.map(o)),
            e
          );
        return (
          r.initializeClassElements(h.F, u.elements),
          r.runClassFinishers(h.F, u.finishers)
        );
      })(
        [Object(n.d)("hui-dialog-save-config")],
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
                decorators: [Object(n.g)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "_params",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.g)()],
                key: "_saving",
                value: void 0,
              },
              {
                kind: "method",
                key: "showDialog",
                value: async function(e) {
                  (this._params = e),
                    await this.updateComplete,
                    this._dialog.open();
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
                  return n.f`
      <ha-paper-dialog with-backdrop>
        <h2>
          ${this.hass.localize("ui.panel.lovelace.editor.save_config.header")}
        </h2>
        <paper-dialog-scrollable>
          <p>
            ${this.hass.localize("ui.panel.lovelace.editor.save_config.para")}
          </p>
          <p>
            ${this.hass.localize(
              "ui.panel.lovelace.editor.save_config.para_sure"
            )}
          </p>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.hass.localize(
              "ui.panel.lovelace.editor.save_config.cancel"
            )}</mwc-button
          >
          <mwc-button ?disabled="${this._saving}" @click="${this._saveConfig}">
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.hass.localize(
              "ui.panel.lovelace.editor.save_config.save"
            )}</mwc-button
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
                  this._dialog.close();
                },
              },
              {
                kind: "method",
                key: "_saveConfig",
                value: async function() {
                  if (this.hass && this._params) {
                    this._saving = !0;
                    try {
                      const t = this._params.lovelace;
                      await t.saveConfig(t.config),
                        t.setEditMode(!0),
                        (this._saving = !1),
                        this._closeDialog();
                    } catch (e) {
                      alert(`Saving failed: ${e.message}`), (this._saving = !1);
                    }
                  }
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [
                    r.b,
                    n.c`
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
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
      `,
                  ];
                },
              },
            ],
          };
        },
        n.a
      );
    },
  },
]);
//# sourceMappingURL=chunk.5e43e588588d432dea66.js.map
