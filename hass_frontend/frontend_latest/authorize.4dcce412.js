/*! For license information please see authorize.4dcce412.js.LICENSE */
!(function(e) {
  function t(t) {
    for (var n, o, r = t[0], a = t[1], s = 0, c = []; s < r.length; s++)
      (o = r[s]), i[o] && c.push(i[o][0]), (i[o] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (l && l(t); c.length; ) c.shift()();
  }
  var n = {},
    i = { 18: 0, 0: 0, 1: 0, 2: 0, 7: 0, 9: 0, 124: 0, 127: 0 };
  function o(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.e = function(e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function(t, o) {
          n = i[e] = [t, o];
        });
        t.push((n[2] = r));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function(e) {
            return (
              o.p +
              "chunk." +
              {
                68: "fe269c6fddd0a36b152e",
                70: "f7ab746e6b6ce9ff6cc1",
                104: "91d6c079a6004e230cad",
                126: "7fcace6ca155cfed4fcf",
                131: "c23efaed473e1ada427f",
              }[e] +
              ".js"
            );
          })(e)),
          (a = function(t) {
            (s.onerror = s.onload = null), clearTimeout(l);
            var n = i[e];
            if (0 !== n) {
              if (n) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  r = t && t.target && t.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")"
                  );
                (a.type = o), (a.request = r), n[1](a);
              }
              i[e] = void 0;
            }
          });
        var l = setTimeout(function() {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/frontend_latest/"),
    (o.oe = function(e) {
      throw (console.error(e), e);
    });
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    a = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var s = 0; s < r.length; s++) t(r[s]);
  var l = a;
  o((o.s = 164));
})([
  function(e, t, n) {
    "use strict";
    var i = n(10),
      o = n(17),
      r = n(6);
    const a = 133;
    function s(e, t) {
      const {
          element: { content: n },
          parts: i,
        } = e,
        o = document.createTreeWalker(n, a, null, !1);
      let r = c(i),
        s = i[r],
        l = -1,
        d = 0;
      const u = [];
      let p = null;
      for (; o.nextNode(); ) {
        l++;
        const e = o.currentNode;
        for (
          e.previousSibling === p && (p = null),
            t.has(e) && (u.push(e), null === p && (p = e)),
            null !== p && d++;
          void 0 !== s && s.index === l;

        )
          (s.index = null !== p ? -1 : s.index - d), (s = i[(r = c(i, r))]);
      }
      u.forEach((e) => e.parentNode.removeChild(e));
    }
    const l = (e) => {
        let t = 11 === e.nodeType ? 0 : 1;
        const n = document.createTreeWalker(e, a, null, !1);
        for (; n.nextNode(); ) t++;
        return t;
      },
      c = (e, t = -1) => {
        for (let n = t + 1; n < e.length; n++) {
          const t = e[n];
          if (Object(r.d)(t)) return n;
        }
        return -1;
      };
    var d = n(30),
      u = n(27),
      p = n(38),
      h = n(23);
    const f = (e, t) => `${e}--${t}`;
    let b = !0;
    void 0 === window.ShadyCSS
      ? (b = !1)
      : void 0 === window.ShadyCSS.prepareTemplateDom &&
        (console.warn(
          "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
        ),
        (b = !1));
    const m = (e) => (t) => {
        const n = f(t.type, e);
        let i = u.a.get(n);
        void 0 === i &&
          ((i = { stringsArray: new WeakMap(), keyString: new Map() }),
          u.a.set(n, i));
        let o = i.stringsArray.get(t.strings);
        if (void 0 !== o) return o;
        const a = t.strings.join(r.f);
        if (void 0 === (o = i.keyString.get(a))) {
          const n = t.getTemplateElement();
          b && window.ShadyCSS.prepareTemplateDom(n, e),
            (o = new r.a(t, n)),
            i.keyString.set(a, o);
        }
        return i.stringsArray.set(t.strings, o), o;
      },
      g = ["html", "svg"],
      _ = new Set(),
      y = (e, t, n) => {
        _.add(n);
        const i = e.querySelectorAll("style"),
          { length: o } = i;
        if (0 === o)
          return void window.ShadyCSS.prepareTemplateStyles(t.element, n);
        const r = document.createElement("style");
        for (let a = 0; a < o; a++) {
          const e = i[a];
          e.parentNode.removeChild(e), (r.textContent += e.textContent);
        }
        ((e) => {
          g.forEach((t) => {
            const n = u.a.get(f(t, e));
            void 0 !== n &&
              n.keyString.forEach((e) => {
                const {
                    element: { content: t },
                  } = e,
                  n = new Set();
                Array.from(t.querySelectorAll("style")).forEach((e) => {
                  n.add(e);
                }),
                  s(e, n);
              });
          });
        })(n);
        const d = t.element.content;
        !(function(e, t, n = null) {
          const {
            element: { content: i },
            parts: o,
          } = e;
          if (null == n) return void i.appendChild(t);
          const r = document.createTreeWalker(i, a, null, !1);
          let s = c(o),
            d = 0,
            u = -1;
          for (; r.nextNode(); )
            for (
              u++,
                r.currentNode === n &&
                  ((d = l(t)), n.parentNode.insertBefore(t, n));
              -1 !== s && o[s].index === u;

            ) {
              if (d > 0) {
                for (; -1 !== s; ) (o[s].index += d), (s = c(o, s));
                return;
              }
              s = c(o, s);
            }
        })(t, r, d.firstChild),
          window.ShadyCSS.prepareTemplateStyles(t.element, n);
        const p = d.querySelector("style");
        if (window.ShadyCSS.nativeShadow && null !== p)
          e.insertBefore(p.cloneNode(!0), e.firstChild);
        else {
          d.insertBefore(r, d.firstChild);
          const e = new Set();
          e.add(r), s(t, e);
        }
      };
    window.JSCompiler_renameProperty = (e, t) => e;
    const v = {
        toAttribute(e, t) {
          switch (t) {
            case Boolean:
              return e ? "" : null;
            case Object:
            case Array:
              return null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute(e, t) {
          switch (t) {
            case Boolean:
              return null !== e;
            case Number:
              return null === e ? null : Number(e);
            case Object:
            case Array:
              return JSON.parse(e);
          }
          return e;
        },
      },
      w = (e, t) => t !== e && (t == t || e == e),
      x = {
        attribute: !0,
        type: String,
        converter: v,
        reflect: !1,
        hasChanged: w,
      },
      k = Promise.resolve(!0),
      C = 1,
      S = 4,
      j = 8,
      O = 16,
      E = 32;
    class A extends HTMLElement {
      constructor() {
        super(),
          (this._updateState = 0),
          (this._instanceProperties = void 0),
          (this._updatePromise = k),
          (this._hasConnectedResolver = void 0),
          (this._changedProperties = new Map()),
          (this._reflectingProperties = void 0),
          this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        const e = [];
        return (
          this._classProperties.forEach((t, n) => {
            const i = this._attributeNameForProperty(n, t);
            void 0 !== i && (this._attributeToPropertyMap.set(i, n), e.push(i));
          }),
          e
        );
      }
      static _ensureClassProperties() {
        if (
          !this.hasOwnProperty(
            JSCompiler_renameProperty("_classProperties", this)
          )
        ) {
          this._classProperties = new Map();
          const e = Object.getPrototypeOf(this)._classProperties;
          void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
        }
      }
      static createProperty(e, t = x) {
        if (
          (this._ensureClassProperties(),
          this._classProperties.set(e, t),
          t.noAccessor || this.prototype.hasOwnProperty(e))
        )
          return;
        const n = "symbol" == typeof e ? Symbol() : `__${e}`;
        Object.defineProperty(this.prototype, e, {
          get() {
            return this[n];
          },
          set(t) {
            const i = this[e];
            (this[n] = t), this._requestUpdate(e, i);
          },
          configurable: !0,
          enumerable: !0,
        });
      }
      static finalize() {
        if (
          this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) &&
          this.finalized
        )
          return;
        const e = Object.getPrototypeOf(this);
        if (
          ("function" == typeof e.finalize && e.finalize(),
          (this.finalized = !0),
          this._ensureClassProperties(),
          (this._attributeToPropertyMap = new Map()),
          this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
        ) {
          const e = this.properties,
            t = [
              ...Object.getOwnPropertyNames(e),
              ...("function" == typeof Object.getOwnPropertySymbols
                ? Object.getOwnPropertySymbols(e)
                : []),
            ];
          for (const n of t) this.createProperty(n, e[n]);
        }
      }
      static _attributeNameForProperty(e, t) {
        const n = t.attribute;
        return !1 === n
          ? void 0
          : "string" == typeof n
          ? n
          : "string" == typeof e
          ? e.toLowerCase()
          : void 0;
      }
      static _valueHasChanged(e, t, n = w) {
        return n(e, t);
      }
      static _propertyValueFromAttribute(e, t) {
        const n = t.type,
          i = t.converter || v,
          o = "function" == typeof i ? i : i.fromAttribute;
        return o ? o(e, n) : e;
      }
      static _propertyValueToAttribute(e, t) {
        if (void 0 === t.reflect) return;
        const n = t.type,
          i = t.converter;
        return ((i && i.toAttribute) || v.toAttribute)(e, n);
      }
      initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((e, t) => {
          if (this.hasOwnProperty(t)) {
            const e = this[t];
            delete this[t],
              this._instanceProperties ||
                (this._instanceProperties = new Map()),
              this._instanceProperties.set(t, e);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((e, t) => (this[t] = e)),
          (this._instanceProperties = void 0);
      }
      connectedCallback() {
        (this._updateState = this._updateState | E),
          this._hasConnectedResolver &&
            (this._hasConnectedResolver(),
            (this._hasConnectedResolver = void 0));
      }
      disconnectedCallback() {}
      attributeChangedCallback(e, t, n) {
        t !== n && this._attributeToProperty(e, n);
      }
      _propertyToAttribute(e, t, n = x) {
        const i = this.constructor,
          o = i._attributeNameForProperty(e, n);
        if (void 0 !== o) {
          const e = i._propertyValueToAttribute(t, n);
          if (void 0 === e) return;
          (this._updateState = this._updateState | j),
            null == e ? this.removeAttribute(o) : this.setAttribute(o, e),
            (this._updateState = this._updateState & ~j);
        }
      }
      _attributeToProperty(e, t) {
        if (this._updateState & j) return;
        const n = this.constructor,
          i = n._attributeToPropertyMap.get(e);
        if (void 0 !== i) {
          const e = n._classProperties.get(i) || x;
          (this._updateState = this._updateState | O),
            (this[i] = n._propertyValueFromAttribute(t, e)),
            (this._updateState = this._updateState & ~O);
        }
      }
      _requestUpdate(e, t) {
        let n = !0;
        if (void 0 !== e) {
          const i = this.constructor,
            o = i._classProperties.get(e) || x;
          i._valueHasChanged(this[e], t, o.hasChanged)
            ? (this._changedProperties.has(e) ||
                this._changedProperties.set(e, t),
              !0 !== o.reflect ||
                this._updateState & O ||
                (void 0 === this._reflectingProperties &&
                  (this._reflectingProperties = new Map()),
                this._reflectingProperties.set(e, o)))
            : (n = !1);
        }
        !this._hasRequestedUpdate && n && this._enqueueUpdate();
      }
      requestUpdate(e, t) {
        return this._requestUpdate(e, t), this.updateComplete;
      }
      async _enqueueUpdate() {
        let e, t;
        this._updateState = this._updateState | S;
        const n = this._updatePromise;
        this._updatePromise = new Promise((n, i) => {
          (e = n), (t = i);
        });
        try {
          await n;
        } catch (i) {}
        this._hasConnected ||
          (await new Promise((e) => (this._hasConnectedResolver = e)));
        try {
          const e = this.performUpdate();
          null != e && (await e);
        } catch (i) {
          t(i);
        }
        e(!this._hasRequestedUpdate);
      }
      get _hasConnected() {
        return this._updateState & E;
      }
      get _hasRequestedUpdate() {
        return this._updateState & S;
      }
      get hasUpdated() {
        return this._updateState & C;
      }
      performUpdate() {
        this._instanceProperties && this._applyInstanceProperties();
        let e = !1;
        const t = this._changedProperties;
        try {
          (e = this.shouldUpdate(t)) && this.update(t);
        } catch (n) {
          throw ((e = !1), n);
        } finally {
          this._markUpdated();
        }
        e &&
          (this._updateState & C ||
            ((this._updateState = this._updateState | C), this.firstUpdated(t)),
          this.updated(t));
      }
      _markUpdated() {
        (this._changedProperties = new Map()),
          (this._updateState = this._updateState & ~S);
      }
      get updateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        void 0 !== this._reflectingProperties &&
          this._reflectingProperties.size > 0 &&
          (this._reflectingProperties.forEach((e, t) =>
            this._propertyToAttribute(t, this[t], e)
          ),
          (this._reflectingProperties = void 0));
      }
      updated(e) {}
      firstUpdated(e) {}
    }
    A.finalized = !0;
    const P = (e) => (t) =>
        "function" == typeof t
          ? ((e, t) => (window.customElements.define(e, t), t))(e, t)
          : ((e, t) => {
              const { kind: n, elements: i } = t;
              return {
                kind: n,
                elements: i,
                finisher(t) {
                  window.customElements.define(e, t);
                },
              };
            })(e, t),
      T = (e, t) =>
        "method" !== t.kind || !t.descriptor || "value" in t.descriptor
          ? {
              kind: "field",
              key: Symbol(),
              placement: "own",
              descriptor: {},
              initializer() {
                "function" == typeof t.initializer &&
                  (this[t.key] = t.initializer.call(this));
              },
              finisher(n) {
                n.createProperty(t.key, e);
              },
            }
          : Object.assign({}, t, {
              finisher(n) {
                n.createProperty(t.key, e);
              },
            }),
      I = (e, t, n) => {
        t.constructor.createProperty(n, e);
      };
    function N(e) {
      return (t, n) => (void 0 !== n ? I(e, t, n) : T(e, t));
    }
    function z(e) {
      return (t, n) => {
        const i = {
          get() {
            return this.renderRoot.querySelector(e);
          },
          enumerable: !0,
          configurable: !0,
        };
        return void 0 !== n ? R(i, t, n) : L(i, t);
      };
    }
    const R = (e, t, n) => {
        Object.defineProperty(t, n, e);
      },
      L = (e, t) => ({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e,
      }),
      M = (e) => (t, n) =>
        void 0 !== n
          ? ((e, t, n) => {
              Object.assign(t[n], e);
            })(e, t, n)
          : ((e, t) =>
              Object.assign({}, t, {
                finisher(n) {
                  Object.assign(n.prototype[t.key], e);
                },
              }))(e, t),
      F =
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      D = Symbol();
    class B {
      constructor(e, t) {
        if (t !== D)
          throw new Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = e;
      }
      get styleSheet() {
        return (
          void 0 === this._styleSheet &&
            (F
              ? ((this._styleSheet = new CSSStyleSheet()),
                this._styleSheet.replaceSync(this.cssText))
              : (this._styleSheet = null)),
          this._styleSheet
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const H = (e, ...t) => {
      const n = t.reduce(
        (t, n, i) =>
          t +
          ((e) => {
            if (e instanceof B) return e.cssText;
            if ("number" == typeof e) return e;
            throw new Error(
              `Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
            );
          })(n) +
          e[i + 1],
        e[0]
      );
      return new B(n, D);
    };
    n.d(t, "a", function() {
      return $;
    }),
      n.d(t, "b", function() {
        return A;
      }),
      n.d(t, "d", function() {
        return P;
      }),
      n.d(t, "g", function() {
        return N;
      }),
      n.d(t, "h", function() {
        return z;
      }),
      n.d(t, "e", function() {
        return M;
      }),
      n.d(t, "f", function() {
        return i.g;
      }),
      n.d(t, "i", function() {
        return i.k;
      }),
      n.d(t, "c", function() {
        return H;
      }),
      (window.litElementVersions || (window.litElementVersions = [])).push(
        "2.2.0"
      );
    const V = (e) =>
      e.flat
        ? e.flat(1 / 0)
        : (function e(t, n = []) {
            for (let i = 0, o = t.length; i < o; i++) {
              const o = t[i];
              Array.isArray(o) ? e(o, n) : n.push(o);
            }
            return n;
          })(e);
    class $ extends A {
      static finalize() {
        super.finalize(),
          (this._styles = this.hasOwnProperty(
            JSCompiler_renameProperty("styles", this)
          )
            ? this._getUniqueStyles()
            : this._styles || []);
      }
      static _getUniqueStyles() {
        const e = this.styles,
          t = [];
        if (Array.isArray(e)) {
          V(e)
            .reduceRight((e, t) => (e.add(t), e), new Set())
            .forEach((e) => t.unshift(e));
        } else e && t.push(e);
        return t;
      }
      initialize() {
        super.initialize(),
          (this.renderRoot = this.createRenderRoot()),
          window.ShadowRoot &&
            this.renderRoot instanceof window.ShadowRoot &&
            this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow({ mode: "open" });
      }
      adoptStyles() {
        const e = this.constructor._styles;
        0 !== e.length &&
          (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
            ? F
              ? (this.renderRoot.adoptedStyleSheets = e.map(
                  (e) => e.styleSheet
                ))
              : (this._needsShimAdoptedStyleSheets = !0)
            : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                e.map((e) => e.cssText),
                this.localName
              ));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasUpdated &&
            void 0 !== window.ShadyCSS &&
            window.ShadyCSS.styleElement(this);
      }
      update(e) {
        super.update(e);
        const t = this.render();
        t instanceof i.d &&
          this.constructor.render(t, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this,
          }),
          this._needsShimAdoptedStyleSheets &&
            ((this._needsShimAdoptedStyleSheets = !1),
            this.constructor._styles.forEach((e) => {
              const t = document.createElement("style");
              (t.textContent = e.cssText), this.renderRoot.appendChild(t);
            }));
      }
      render() {}
    }
    ($.finalized = !0),
      ($.render = (e, t, n) => {
        const i = n.scopeName,
          r = d.a.has(t),
          a = b && 11 === t.nodeType && !!t.host && e instanceof h.b,
          s = a && !_.has(i),
          l = s ? document.createDocumentFragment() : t;
        if (
          (Object(d.b)(e, l, Object.assign({ templateFactory: m(i) }, n)), s)
        ) {
          const e = d.a.get(l);
          d.a.delete(l),
            e.value instanceof p.a && y(l, e.value.template, i),
            Object(o.b)(t, t.firstChild),
            t.appendChild(l),
            d.a.set(t, e);
        }
        !r && a && window.ShadyCSS.styleElement(t.host);
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return c;
      });
    n(7), n(9);
    var i = n(62);
    n(24), n(21);
    const o = Element.prototype,
      r =
        o.matches ||
        o.matchesSelector ||
        o.mozMatchesSelector ||
        o.msMatchesSelector ||
        o.oMatchesSelector ||
        o.webkitMatchesSelector,
      a = function(e, t) {
        return r.call(e, t);
      };
    class s {
      constructor(e) {
        this.node = e;
      }
      observeNodes(e) {
        return new i.a(this.node, e);
      }
      unobserveNodes(e) {
        e.disconnect();
      }
      notifyObserver() {}
      deepContains(e) {
        if (this.node.contains(e)) return !0;
        let t = e,
          n = e.ownerDocument;
        for (; t && t !== n && t !== this.node; ) t = t.parentNode || t.host;
        return t === this.node;
      }
      getOwnerRoot() {
        return this.node.getRootNode();
      }
      getDistributedNodes() {
        return "slot" === this.node.localName
          ? this.node.assignedNodes({ flatten: !0 })
          : [];
      }
      getDestinationInsertionPoints() {
        let e = [],
          t = this.node.assignedSlot;
        for (; t; ) e.push(t), (t = t.assignedSlot);
        return e;
      }
      importNode(e, t) {
        return (this.node instanceof Document
          ? this.node
          : this.node.ownerDocument
        ).importNode(e, t);
      }
      getEffectiveChildNodes() {
        return i.a.getFlattenedNodes(this.node);
      }
      queryDistributedElements(e) {
        let t = this.getEffectiveChildNodes(),
          n = [];
        for (let i, o = 0, r = t.length; o < r && (i = t[o]); o++)
          i.nodeType === Node.ELEMENT_NODE && a(i, e) && n.push(i);
        return n;
      }
      get activeElement() {
        let e = this.node;
        return void 0 !== e._activeElement ? e._activeElement : e.activeElement;
      }
    }
    class l {
      constructor(e) {
        this.event = e;
      }
      get rootTarget() {
        return this.event.composedPath()[0];
      }
      get localTarget() {
        return this.event.target;
      }
      get path() {
        return this.event.composedPath();
      }
    }
    s.prototype.cloneNode,
      s.prototype.appendChild,
      s.prototype.insertBefore,
      s.prototype.removeChild,
      s.prototype.replaceChild,
      s.prototype.setAttribute,
      s.prototype.removeAttribute,
      s.prototype.querySelector,
      s.prototype.querySelectorAll,
      s.prototype.parentNode,
      s.prototype.firstChild,
      s.prototype.lastChild,
      s.prototype.nextSibling,
      s.prototype.previousSibling,
      s.prototype.firstElementChild,
      s.prototype.lastElementChild,
      s.prototype.nextElementSibling,
      s.prototype.previousElementSibling,
      s.prototype.childNodes,
      s.prototype.children,
      s.prototype.classList,
      s.prototype.textContent,
      s.prototype.innerHTML,
      (function(e, t) {
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          e[i] = function() {
            return this.node[i].apply(this.node, arguments);
          };
        }
      })(s.prototype, [
        "cloneNode",
        "appendChild",
        "insertBefore",
        "removeChild",
        "replaceChild",
        "setAttribute",
        "removeAttribute",
        "querySelector",
        "querySelectorAll",
      ]),
      (function(e, t) {
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          Object.defineProperty(e, i, {
            get: function() {
              return this.node[i];
            },
            configurable: !0,
          });
        }
      })(s.prototype, [
        "parentNode",
        "firstChild",
        "lastChild",
        "nextSibling",
        "previousSibling",
        "firstElementChild",
        "lastElementChild",
        "nextElementSibling",
        "previousElementSibling",
        "childNodes",
        "children",
        "classList",
      ]),
      (function(e, t) {
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          Object.defineProperty(e, i, {
            get: function() {
              return this.node[i];
            },
            set: function(e) {
              this.node[i] = e;
            },
            configurable: !0,
          });
        }
      })(s.prototype, ["textContent", "innerHTML"]);
    const c = function(e) {
      if (!(e = e || document).__domApi) {
        let t;
        (t = e instanceof Event ? new l(e) : new s(e)), (e.__domApi = t);
      }
      return e.__domApi;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return i;
    }),
      n.d(t, "g", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return r;
      }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "i", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return p;
      });
    n(7);
    function i(e) {
      return e.indexOf(".") >= 0;
    }
    function o(e) {
      let t = e.indexOf(".");
      return -1 === t ? e : e.slice(0, t);
    }
    function r(e, t) {
      return 0 === e.indexOf(t + ".");
    }
    function a(e, t) {
      return 0 === t.indexOf(e + ".");
    }
    function s(e, t, n) {
      return t + n.slice(e.length);
    }
    function l(e, t) {
      return e === t || r(e, t) || a(e, t);
    }
    function c(e) {
      if (Array.isArray(e)) {
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let i = e[n].toString().split(".");
          for (let e = 0; e < i.length; e++) t.push(i[e]);
        }
        return t.join(".");
      }
      return e;
    }
    function d(e) {
      return Array.isArray(e) ? c(e).split(".") : e.toString().split(".");
    }
    function u(e, t, n) {
      let i = e,
        o = d(t);
      for (let r = 0; r < o.length; r++) {
        if (!i) return;
        i = i[o[r]];
      }
      return n && (n.path = o.join(".")), i;
    }
    function p(e, t, n) {
      let i = e,
        o = d(t),
        r = o[o.length - 1];
      if (o.length > 1) {
        for (let e = 0; e < o.length - 1; e++) {
          if (!(i = i[o[e]])) return;
        }
        i[r] = n;
      } else i[t] = n;
      return o.join(".");
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(7);
    class i {
      constructor(e) {
        this.value = e.toString();
      }
      toString() {
        return this.value;
      }
    }
    function o(e) {
      if (e instanceof i) return e.value;
      throw new Error(
        `non-literal value passed to Polymer's htmlLiteral function: ${e}`
      );
    }
    const r = function(e, ...t) {
      const n = document.createElement("template");
      return (
        (n.innerHTML = t.reduce(
          (t, n, r) =>
            t +
            (function(e) {
              if (e instanceof HTMLTemplateElement) return e.innerHTML;
              if (e instanceof i) return o(e);
              throw new Error(
                `non-template value passed to Polymer's html function: ${e}`
              );
            })(n) +
            e[r + 1],
          e[0]
        )),
        n
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var i = n(43),
      o = n(5),
      r = (n(97), n(7), n(37)),
      a = n(26),
      s = n(45),
      l = n(9);
    const c = Object(s.a)(Object(a.b)(Object(r.a)(HTMLElement)));
    customElements.define(
      "dom-bind",
      class extends c {
        static get observedAttributes() {
          return ["mutable-data"];
        }
        constructor() {
          if ((super(), l.f))
            throw new Error("strictTemplatePolicy: dom-bind not allowed");
          (this.root = null), (this.$ = null), (this.__children = null);
        }
        attributeChangedCallback() {
          this.mutableData = !0;
        }
        connectedCallback() {
          (this.style.display = "none"), this.render();
        }
        disconnectedCallback() {
          this.__removeChildren();
        }
        __insertChildren() {
          this.parentNode.insertBefore(this.root, this);
        }
        __removeChildren() {
          if (this.__children)
            for (let e = 0; e < this.__children.length; e++)
              this.root.appendChild(this.__children[e]);
        }
        render() {
          let e;
          if (!this.__children) {
            if (!(e = e || this.querySelector("template"))) {
              let t = new MutationObserver(() => {
                if (!(e = this.querySelector("template")))
                  throw new Error("dom-bind requires a <template> child");
                t.disconnect(), this.render();
              });
              return void t.observe(this, { childList: !0 });
            }
            (this.root = this._stampTemplate(e)),
              (this.$ = this.root.$),
              (this.__children = []);
            for (let e = this.root.firstChild; e; e = e.nextSibling)
              this.__children[this.__children.length] = e;
            this._enableProperties();
          }
          this.__insertChildren(),
            this.dispatchEvent(
              new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
            );
        }
      }
    );
    n(86), n(88);
    var d = n(25),
      u = n(8),
      p = n(49),
      h = n(36);
    let f = Object(u.a)((e) => {
      let t = Object(h.a)(e);
      return class extends t {
        static get properties() {
          return {
            items: { type: Array },
            multi: { type: Boolean, value: !1 },
            selected: { type: Object, notify: !0 },
            selectedItem: { type: Object, notify: !0 },
            toggle: { type: Boolean, value: !1 },
          };
        }
        static get observers() {
          return ["__updateSelection(multi, items.*)"];
        }
        constructor() {
          super(),
            (this.__lastItems = null),
            (this.__lastMulti = null),
            (this.__selectedMap = null);
        }
        __updateSelection(e, t) {
          let n = t.path;
          if ("items" == n) {
            let n = t.base || [],
              i = this.__lastItems;
            if ((e !== this.__lastMulti && this.clearSelection(), i)) {
              let e = Object(p.a)(n, i);
              this.__applySplices(e);
            }
            (this.__lastItems = n), (this.__lastMulti = e);
          } else if ("items.splices" == t.path)
            this.__applySplices(t.value.indexSplices);
          else {
            let e = n.slice("items.".length),
              t = parseInt(e, 10);
            e.indexOf(".") < 0 && e == t && this.__deselectChangedIdx(t);
          }
        }
        __applySplices(e) {
          let t = this.__selectedMap;
          for (let i = 0; i < e.length; i++) {
            let n = e[i];
            t.forEach((e, i) => {
              e < n.index ||
                (e >= n.index + n.removed.length
                  ? t.set(i, e + n.addedCount - n.removed.length)
                  : t.set(i, -1));
            });
            for (let e = 0; e < n.addedCount; e++) {
              let i = n.index + e;
              t.has(this.items[i]) && t.set(this.items[i], i);
            }
          }
          this.__updateLinks();
          let n = 0;
          t.forEach((e, i) => {
            e < 0
              ? (this.multi
                  ? this.splice("selected", n, 1)
                  : (this.selected = this.selectedItem = null),
                t.delete(i))
              : n++;
          });
        }
        __updateLinks() {
          if (((this.__dataLinkedPaths = {}), this.multi)) {
            let e = 0;
            this.__selectedMap.forEach((t) => {
              t >= 0 && this.linkPaths("items." + t, "selected." + e++);
            });
          } else
            this.__selectedMap.forEach((e) => {
              this.linkPaths("selected", "items." + e),
                this.linkPaths("selectedItem", "items." + e);
            });
        }
        clearSelection() {
          (this.__dataLinkedPaths = {}),
            (this.__selectedMap = new Map()),
            (this.selected = this.multi ? [] : null),
            (this.selectedItem = null);
        }
        isSelected(e) {
          return this.__selectedMap.has(e);
        }
        isIndexSelected(e) {
          return this.isSelected(this.items[e]);
        }
        __deselectChangedIdx(e) {
          let t = this.__selectedIndexForItemIndex(e);
          if (t >= 0) {
            let e = 0;
            this.__selectedMap.forEach((n, i) => {
              t == e++ && this.deselect(i);
            });
          }
        }
        __selectedIndexForItemIndex(e) {
          let t = this.__dataLinkedPaths["items." + e];
          if (t) return parseInt(t.slice("selected.".length), 10);
        }
        deselect(e) {
          let t = this.__selectedMap.get(e);
          if (t >= 0) {
            let n;
            this.__selectedMap.delete(e),
              this.multi && (n = this.__selectedIndexForItemIndex(t)),
              this.__updateLinks(),
              this.multi
                ? this.splice("selected", n, 1)
                : (this.selected = this.selectedItem = null);
          }
        }
        deselectIndex(e) {
          this.deselect(this.items[e]);
        }
        select(e) {
          this.selectIndex(this.items.indexOf(e));
        }
        selectIndex(e) {
          let t = this.items[e];
          this.isSelected(t)
            ? this.toggle && this.deselectIndex(e)
            : (this.multi || this.__selectedMap.clear(),
              this.__selectedMap.set(t, e),
              this.__updateLinks(),
              this.multi
                ? this.push("selected", t)
                : (this.selected = this.selectedItem = t));
        }
      };
    })(d.a);
    class b extends f {
      static get is() {
        return "array-selector";
      }
    }
    customElements.define(b.is, b);
    n(72), n(98);
    var m = n(3);
    n.d(t, "a", function() {
      return g;
    }),
      n.d(t, "b", function() {
        return o.a;
      }),
      n.d(t, "c", function() {
        return m.a;
      });
    const g = Object(i.a)(HTMLElement).prototype;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(70);
    n(7);
    const o = function(e) {
      let t;
      return (
        (t = "function" == typeof e ? e : o.Class(e)),
        customElements.define(t.is, t),
        t
      );
    };
    o.Class = i.a;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return i;
    }),
      n.d(t, "g", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return d;
      }),
      n.d(t, "e", function() {
        return u;
      });
    const i = `{{lit-${String(Math.random()).slice(2)}}}`,
      o = `\x3c!--${i}--\x3e`,
      r = new RegExp(`${i}|${o}`),
      a = "$lit$";
    class s {
      constructor(e, t) {
        (this.parts = []), (this.element = t);
        const n = [],
          o = [],
          s = document.createTreeWalker(t.content, 133, null, !1);
        let c = 0,
          p = -1,
          h = 0;
        const {
          strings: f,
          values: { length: b },
        } = e;
        for (; h < b; ) {
          const e = s.nextNode();
          if (null !== e) {
            if ((p++, 1 === e.nodeType)) {
              if (e.hasAttributes()) {
                const t = e.attributes,
                  { length: n } = t;
                let i = 0;
                for (let e = 0; e < n; e++) l(t[e].name, a) && i++;
                for (; i-- > 0; ) {
                  const t = f[h],
                    n = u.exec(t)[2],
                    i = n.toLowerCase() + a,
                    o = e.getAttribute(i);
                  e.removeAttribute(i);
                  const s = o.split(r);
                  this.parts.push({
                    type: "attribute",
                    index: p,
                    name: n,
                    strings: s,
                  }),
                    (h += s.length - 1);
                }
              }
              "TEMPLATE" === e.tagName &&
                (o.push(e), (s.currentNode = e.content));
            } else if (3 === e.nodeType) {
              const t = e.data;
              if (t.indexOf(i) >= 0) {
                const i = e.parentNode,
                  o = t.split(r),
                  s = o.length - 1;
                for (let t = 0; t < s; t++) {
                  let n,
                    r = o[t];
                  if ("" === r) n = d();
                  else {
                    const e = u.exec(r);
                    null !== e &&
                      l(e[2], a) &&
                      (r =
                        r.slice(0, e.index) +
                        e[1] +
                        e[2].slice(0, -a.length) +
                        e[3]),
                      (n = document.createTextNode(r));
                  }
                  i.insertBefore(n, e),
                    this.parts.push({ type: "node", index: ++p });
                }
                "" === o[s]
                  ? (i.insertBefore(d(), e), n.push(e))
                  : (e.data = o[s]),
                  (h += s);
              }
            } else if (8 === e.nodeType)
              if (e.data === i) {
                const t = e.parentNode;
                (null !== e.previousSibling && p !== c) ||
                  (p++, t.insertBefore(d(), e)),
                  (c = p),
                  this.parts.push({ type: "node", index: p }),
                  null === e.nextSibling ? (e.data = "") : (n.push(e), p--),
                  h++;
              } else {
                let t = -1;
                for (; -1 !== (t = e.data.indexOf(i, t + 1)); )
                  this.parts.push({ type: "node", index: -1 }), h++;
              }
          } else s.currentNode = o.pop();
        }
        for (const i of n) i.parentNode.removeChild(i);
      }
    }
    const l = (e, t) => {
        const n = e.length - t.length;
        return n >= 0 && e.slice(n) === t;
      },
      c = (e) => -1 !== e.index,
      d = () => document.createComment(""),
      u = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  },
  function(e, t, n) {
    "use strict";
    window.JSCompiler_renameProperty = function(e, t) {
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(7);
    let i = 0;
    function o() {}
    o.prototype.__mixinApplications, o.prototype.__mixinSet;
    const r = function(e) {
      let t = e.__mixinApplications;
      t || ((t = new WeakMap()), (e.__mixinApplications = t));
      let n = i++;
      return function(i) {
        let o = i.__mixinSet;
        if (o && o[n]) return i;
        let r = t,
          a = r.get(i);
        a || ((a = e(i)), r.set(i, a));
        let s = Object.create(a.__mixinSet || o || null);
        return (s[n] = !0), (a.__mixinSet = s), a;
      };
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return o;
    }),
      n.d(t, "c", function() {
        return r;
      }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return d;
      });
    n(7);
    var i = n(18);
    const o = !window.ShadyDOM;
    Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss),
      window.customElements.polyfillWrapFlushCallback;
    let r = Object(i.a)(document.baseURI || window.location.href);
    let a = (window.Polymer && window.Polymer.sanitizeDOMValue) || void 0;
    let s = !1;
    const l = function(e) {
      s = e;
    };
    let c = !1;
    let d = !1;
  },
  function(e, t, n) {
    "use strict";
    var i = n(14);
    const o = new class {
      handleAttributeExpressions(e, t, n, o) {
        const r = t[0];
        return "." === r
          ? new i.f(e, t.slice(1), n).parts
          : "@" === r
          ? [new i.d(e, t.slice(1), o.eventContext)]
          : "?" === r
          ? [new i.c(e, t.slice(1), n)]
          : new i.a(e, t, n).parts;
      }
      handleTextExpression(e) {
        return new i.e(e);
      }
    }();
    var r = n(23),
      a = n(29),
      s = n(17),
      l = n(16),
      c = (n(30), n(27)),
      d = (n(38), n(6));
    n.d(t, "g", function() {
      return u;
    }),
      n.d(t, "k", function() {
        return p;
      }),
      n.d(t, "f", function() {
        return a.a;
      }),
      n.d(t, "i", function() {
        return s.b;
      }),
      n.d(t, "j", function() {
        return s.c;
      }),
      n.d(t, "h", function() {
        return l.a;
      }),
      n.d(t, "a", function() {
        return i.b;
      }),
      n.d(t, "b", function() {
        return i.e;
      }),
      n.d(t, "c", function() {
        return i.g;
      }),
      n.d(t, "l", function() {
        return c.b;
      }),
      n.d(t, "d", function() {
        return r.b;
      }),
      n.d(t, "e", function() {
        return d.c;
      }),
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
    const u = (e, ...t) => new r.b(e, t, "html", o),
      p = (e, ...t) => new r.a(e, t, "svg", o);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return l;
    }),
      n.d(t, "a", function() {
        return c;
      }),
      n.d(t, "b", function() {
        return d;
      }),
      n.d(t, "c", function() {
        return u;
      });
    n(7);
    let i = 0,
      o = 0,
      r = [],
      a = 0,
      s = document.createTextNode("");
    new window.MutationObserver(function() {
      const e = r.length;
      for (let n = 0; n < e; n++) {
        let e = r[n];
        if (e)
          try {
            e();
          } catch (t) {
            setTimeout(() => {
              throw t;
            });
          }
      }
      r.splice(0, e), (o += e);
    }).observe(s, { characterData: !0 });
    const l = {
        after: (e) => ({
          run: (t) => window.setTimeout(t, e),
          cancel(e) {
            window.clearTimeout(e);
          },
        }),
        run: (e, t) => window.setTimeout(e, t),
        cancel(e) {
          window.clearTimeout(e);
        },
      },
      c = {
        run: (e) => window.requestAnimationFrame(e),
        cancel(e) {
          window.cancelAnimationFrame(e);
        },
      },
      d = {
        run: (e) =>
          window.requestIdleCallback
            ? window.requestIdleCallback(e)
            : window.setTimeout(e, 16),
        cancel(e) {
          window.cancelIdleCallback
            ? window.cancelIdleCallback(e)
            : window.clearTimeout(e);
        },
      },
      u = {
        run: (e) => ((s.textContent = a++), r.push(e), i++),
        cancel(e) {
          const t = e - o;
          if (t >= 0) {
            if (!r[t]) throw new Error("invalid async handle: " + e);
            r[t] = null;
          }
        },
      };
  },
  function(e, t, n) {
    "use strict";
    function i(e, t) {
      try {
        var n = e();
      } catch (e) {
        return t(e);
      }
      return n && n.then ? n.then(void 0, t) : n;
    }
    n.d(t, "e", function() {
      return T;
    }),
      n.d(t, "g", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return d;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return b;
      }),
      n.d(t, "d", function() {
        return m;
      }),
      n.d(t, "j", function() {
        return x;
      }),
      n.d(t, "l", function() {
        return O;
      }),
      n.d(t, "k", function() {
        return P;
      }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "i", function() {
        return g;
      }),
      n.d(t, "c", function() {
        return _;
      });
    var o = 2,
      r = 4;
    function a(e) {
      return { type: "unsubscribe_events", subscription: e };
    }
    var s = function(e, t) {
      (this.options = t),
        (this.commandId = 1),
        (this.commands = new Map()),
        (this.eventListeners = new Map()),
        (this.closeRequested = !1),
        this.setSocket(e);
    };
    (s.prototype.setSocket = function(e) {
      var t = this,
        n = this.socket;
      if (
        ((this.socket = e),
        e.addEventListener("message", function(e) {
          return t._handleMessage(e);
        }),
        e.addEventListener("close", function(e) {
          return t._handleClose(e);
        }),
        n)
      ) {
        var i = this.commands;
        (this.commandId = 1),
          (this.commands = new Map()),
          i.forEach(function(e) {
            "subscribe" in e &&
              e.subscribe().then(function(t) {
                (e.unsubscribe = t), e.resolve();
              });
          }),
          this.fireEvent("ready");
      }
    }),
      (s.prototype.addEventListener = function(e, t) {
        var n = this.eventListeners.get(e);
        n || this.eventListeners.set(e, (n = [])), n.push(t);
      }),
      (s.prototype.removeEventListener = function(e, t) {
        var n = this.eventListeners.get(e);
        if (n) {
          var i = n.indexOf(t);
          -1 !== i && n.splice(i, 1);
        }
      }),
      (s.prototype.fireEvent = function(e, t) {
        var n = this;
        (this.eventListeners.get(e) || []).forEach(function(e) {
          return e(n, t);
        });
      }),
      (s.prototype.close = function() {
        (this.closeRequested = !0), this.socket.close();
      }),
      (s.prototype.subscribeEvents = function(e, t) {
        try {
          return this.subscribeMessage(
            e,
            (function(e) {
              var t = { type: "subscribe_events" };
              return e && (t.event_type = e), t;
            })(t)
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (s.prototype.ping = function() {
        return this.sendMessagePromise({ type: "ping" });
      }),
      (s.prototype.sendMessage = function(e, t) {
        t || (t = this._genCmdId()),
          (e.id = t),
          this.socket.send(JSON.stringify(e));
      }),
      (s.prototype.sendMessagePromise = function(e) {
        var t = this;
        return new Promise(function(n, i) {
          var o = t._genCmdId();
          t.commands.set(o, { resolve: n, reject: i }), t.sendMessage(e, o);
        });
      }),
      (s.prototype.subscribeMessage = function(e, t) {
        try {
          var n,
            i = this,
            o = i._genCmdId();
          return Promise.resolve(
            new Promise(function(r, s) {
              (n = {
                resolve: r,
                reject: s,
                callback: e,
                subscribe: function() {
                  return i.subscribeMessage(e, t);
                },
                unsubscribe: function() {
                  try {
                    return Promise.resolve(i.sendMessagePromise(a(o))).then(
                      function() {
                        i.commands.delete(o);
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                },
              }),
                i.commands.set(o, n);
              try {
                i.sendMessage(t, o);
              } catch (e) {}
            })
          ).then(function() {
            return function() {
              return n.unsubscribe();
            };
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (s.prototype._handleMessage = function(e) {
        var t = JSON.parse(e.data),
          n = this.commands.get(t.id);
        switch (t.type) {
          case "event":
            n
              ? n.callback(t.event)
              : (console.warn(
                  "Received event for unknown subscription " +
                    t.id +
                    ". Unsubscribing."
                ),
                this.sendMessagePromise(a(t.id)));
            break;
          case "result":
            n &&
              (t.success
                ? (n.resolve(t.result),
                  "subscribe" in n || this.commands.delete(t.id))
                : (n.reject(t.error), this.commands.delete(t.id)));
            break;
          case "pong":
            n
              ? (n.resolve(), this.commands.delete(t.id))
              : console.warn("Received unknown pong response " + t.id);
        }
      }),
      (s.prototype._handleClose = function(e) {
        var t = this;
        if (
          (this.commands.forEach(function(e) {
            "subscribe" in e ||
              e.reject({
                type: "result",
                success: !1,
                error: { code: 3, message: "Connection lost" },
              });
          }),
          !this.closeRequested)
        ) {
          this.fireEvent("disconnected");
          var n = Object.assign({}, this.options, { setupRetry: 0 }),
            o = function(e) {
              var r = t;
              setTimeout(function() {
                try {
                  var t = i(
                    function() {
                      return Promise.resolve(n.createSocket(n)).then(function(
                        e
                      ) {
                        r.setSocket(e);
                      });
                    },
                    function(t) {
                      2 === t ? r.fireEvent("reconnect-error", t) : o(e + 1);
                    }
                  );
                  return Promise.resolve(
                    t && t.then ? t.then(function() {}) : void 0
                  );
                } catch (i) {
                  return Promise.reject(i);
                }
              }, 1e3 * Math.min(e, 5));
            };
          o(0);
        }
      }),
      (s.prototype._genCmdId = function() {
        return ++this.commandId;
      });
    var l = function(e) {
        void 0 === e && (e = {});
        try {
          function t() {
            function t() {
              function t() {
                if (n) return new h(n, e.saveTokens);
                if (void 0 === o) throw r;
                return (
                  (function(e, t, n, i) {
                    (n += (n.includes("?") ? "&" : "?") + "auth_callback=1"),
                      (document.location.href = (function(e, t, n, i) {
                        var o =
                          e +
                          "/auth/authorize?response_type=code&client_id=" +
                          encodeURIComponent(t) +
                          "&redirect_uri=" +
                          encodeURIComponent(n);
                        return i && (o += "&state=" + encodeURIComponent(i)), o;
                      })(e, t, n, i));
                  })(
                    o,
                    a,
                    e.redirectUrl ||
                      location.protocol +
                        "//" +
                        location.host +
                        location.pathname +
                        location.search,
                    btoa(JSON.stringify({ hassUrl: o, clientId: a }))
                  ),
                  new Promise(function() {})
                );
              }
              var i = (function() {
                if (!n && e.loadTokens)
                  return Promise.resolve(e.loadTokens()).then(function(e) {
                    n = e;
                  });
              })();
              return i && i.then ? i.then(t) : t();
            }
            var s = (function() {
              if (!n) {
                var t = (function(e) {
                    for (
                      var t = {},
                        n = location.search.substr(1).split("&"),
                        i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i].split("="),
                        r = decodeURIComponent(o[0]),
                        a = o.length > 1 ? decodeURIComponent(o[1]) : void 0;
                      t[r] = a;
                    }
                    return t;
                  })(),
                  o = (function() {
                    if ("auth_callback" in t) {
                      var o = JSON.parse(atob(t.state)),
                        r = i(
                          function() {
                            return Promise.resolve(
                              p(o.hassUrl, o.clientId, t.code)
                            ).then(function(t) {
                              (n = t), e.saveTokens && e.saveTokens(n);
                            });
                          },
                          function(e) {
                            console.log("Unable to fetch access token", e);
                          }
                        );
                      if (r && r.then) return r.then(function() {});
                    }
                  })();
                if (o && o.then) return o.then(function() {});
              }
            })();
            return s && s.then ? s.then(t) : t();
          }
          var n,
            o = e.hassUrl;
          o && "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1));
          var a = e.clientId || d(),
            s = (function() {
              if (!n && e.authCode && o && a) {
                var t = i(
                  function() {
                    return Promise.resolve(p(o, a, e.authCode)).then(function(
                      t
                    ) {
                      (n = t), e.saveTokens && e.saveTokens(n);
                    });
                  },
                  function(e) {
                    console.log("Unable to fetch access token", e);
                  }
                );
                if (t && t.then) return t.then(function() {});
              }
            })();
          return Promise.resolve(s && s.then ? s.then(t) : t());
        } catch (i) {
          return Promise.reject(i);
        }
      },
      c = function(e, t, n) {
        try {
          var i = new FormData();
          return (
            i.append("client_id", t),
            Object.keys(n).forEach(function(e) {
              i.append(e, n[e]);
            }),
            Promise.resolve(
              fetch(e + "/auth/token", {
                method: "POST",
                credentials: "same-origin",
                body: i,
              })
            ).then(function(n) {
              if (!n.ok)
                throw 400 === n.status || 403 === n.status
                  ? 2
                  : new Error("Unable to fetch tokens");
              return Promise.resolve(n.json()).then(function(n) {
                return (
                  (n.hassUrl = e),
                  (n.clientId = t),
                  (n.expires = u(n.expires_in)),
                  n
                );
              });
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      },
      d = function() {
        return location.protocol + "//" + location.host + "/";
      },
      u = function(e) {
        return 1e3 * e + Date.now();
      };
    function p(e, t, n) {
      return c(e, t, { code: n, grant_type: "authorization_code" });
    }
    var h = function(e, t) {
        (this.data = e), (this._saveTokens = t);
      },
      f = {
        wsUrl: { configurable: !0 },
        accessToken: { configurable: !0 },
        expired: { configurable: !0 },
      };
    (f.wsUrl.get = function() {
      return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
    }),
      (f.accessToken.get = function() {
        return this.data.access_token;
      }),
      (f.expired.get = function() {
        return Date.now() > this.data.expires;
      }),
      (h.prototype.refreshAccessToken = function() {
        try {
          var e = this;
          return Promise.resolve(
            c(e.data.hassUrl, e.data.clientId, {
              grant_type: "refresh_token",
              refresh_token: e.data.refresh_token,
            })
          ).then(function(t) {
            (t.refresh_token = e.data.refresh_token),
              (e.data = t),
              e._saveTokens && e._saveTokens(t);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (h.prototype.revoke = function() {
        try {
          var e = this,
            t = new FormData();
          return (
            t.append("action", "revoke"),
            t.append("token", e.data.refresh_token),
            Promise.resolve(
              fetch(e.data.hassUrl + "/auth/token", {
                method: "POST",
                credentials: "same-origin",
                body: t,
              })
            ).then(function() {
              e._saveTokens && e._saveTokens(null);
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      Object.defineProperties(h.prototype, f);
    var b = function(e, t, n, i) {
        if (e[t]) return e[t];
        var o,
          r = 0,
          a = (function(e) {
            var t = [];
            function n(n, i) {
              e = i ? n : Object.assign({}, e, n);
              for (var o = t, r = 0; r < o.length; r++) o[r](e);
            }
            return {
              get state() {
                return e;
              },
              action: function(t) {
                function i(e) {
                  n(e, !1);
                }
                return function() {
                  for (
                    var n = arguments, o = [e], r = 0;
                    r < arguments.length;
                    r++
                  )
                    o.push(n[r]);
                  var a = t.apply(this, o);
                  if (null != a) return a.then ? a.then(i) : i(a);
                };
              },
              setState: n,
              subscribe: function(e) {
                return (
                  t.push(e),
                  function() {
                    !(function(e) {
                      for (var n = [], i = 0; i < t.length; i++)
                        t[i] === e ? (e = null) : n.push(t[i]);
                      t = n;
                    })(e);
                  }
                );
              },
            };
          })(),
          s = function() {
            return n(e).then(function(e) {
              return a.setState(e, !0);
            });
          },
          l = function() {
            return s().catch(function(t) {
              if (e.socket.readyState == e.socket.OPEN) throw t;
            });
          };
        return (
          (e[t] = {
            get state() {
              return a.state;
            },
            refresh: s,
            subscribe: function(t) {
              1 == ++r &&
                (i && (o = i(e, a)), e.addEventListener("ready", l), l());
              var n = a.subscribe(t);
              return (
                void 0 !== a.state &&
                  setTimeout(function() {
                    return t(a.state);
                  }, 0),
                function() {
                  n(),
                    --r ||
                      (o &&
                        o.then(function(e) {
                          e();
                        }),
                      e.removeEventListener("ready", s));
                }
              );
            },
          }),
          e[t]
        );
      },
      m = function(e, t, n, i, o) {
        return b(i, e, t, n).subscribe(o);
      },
      g = function(e) {
        return e.sendMessagePromise({ type: "auth/current_user" });
      },
      _ = function(e, t, n, i) {
        return e.sendMessagePromise(
          (function(e, t, n) {
            var i = { type: "call_service", domain: e, service: t };
            return n && (i.service_data = n), i;
          })(t, n, i)
        );
      };
    function y(e, t) {
      return void 0 === e
        ? null
        : { components: e.components.concat(t.data.component) };
    }
    var v = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_config" });
        })(e);
      },
      w = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(y), "component_loaded"),
          e.subscribeEvents(function() {
            return v(e).then(function(e) {
              return t.setState(e, !0);
            });
          }, "core_config_updated"),
        ]).then(function(e) {
          return function() {
            return e.forEach(function(e) {
              return e();
            });
          };
        });
      },
      x = function(e, t) {
        return (function(e) {
          return b(e, "_cnf", v, w);
        })(e).subscribe(t);
      };
    function k(e, t) {
      var n, i;
      if (void 0 === e) return null;
      var o = t.data,
        r = o.domain,
        a = Object.assign(
          {},
          e[r],
          (((n = {})[o.service] = { description: "", fields: {} }), n)
        );
      return ((i = {})[r] = a), i;
    }
    function C(e, t) {
      var n;
      if (void 0 === e) return null;
      var i = t.data,
        o = i.domain,
        r = i.service,
        a = e[o];
      if (!(a && r in a)) return null;
      var s = {};
      return (
        Object.keys(a).forEach(function(e) {
          e !== r && (s[e] = a[e]);
        }),
        ((n = {})[o] = s),
        n
      );
    }
    var S = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_services" });
        })(e);
      },
      j = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(k), "service_registered"),
          e.subscribeEvents(t.action(C), "service_removed"),
        ]).then(function(e) {
          return function() {
            return e.forEach(function(e) {
              return e();
            });
          };
        });
      },
      O = function(e, t) {
        return (function(e) {
          return b(e, "_srv", S, j);
        })(e).subscribe(t);
      },
      E = function(e) {
        try {
          return Promise.resolve(
            (function(e) {
              return e.sendMessagePromise({ type: "get_states" });
            })(e)
          ).then(function(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var i = e[n];
              t[i.entity_id] = i;
            }
            return t;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      A = function(e, t) {
        return e.subscribeEvents(function(e) {
          return (function(t, n) {
            var i,
              o = t.state;
            if (void 0 !== o) {
              var r = e.data,
                a = r.entity_id,
                s = r.new_state;
              if (s) t.setState((((i = {})[s.entity_id] = s), i));
              else {
                var l = Object.assign({}, o);
                delete l[a], t.setState(l, !0);
              }
            }
          })(t);
        }, "state_changed");
      },
      P = function(e, t) {
        return (function(e) {
          return b(e, "_ent", E, A);
        })(e).subscribe(t);
      },
      T = function(e) {
        try {
          var t = Object.assign({}, I, e);
          return Promise.resolve(t.createSocket(t)).then(function(e) {
            return new s(e, t);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      I = {
        setupRetry: 0,
        createSocket: function(e) {
          if (!e.auth) throw r;
          var t = e.auth,
            n = t.expired
              ? t.refreshAccessToken().then(
                  function() {
                    n = void 0;
                  },
                  function() {
                    n = void 0;
                  }
                )
              : void 0,
            o = t.wsUrl;
          return new Promise(function(r, a) {
            return (function e(r, a, s) {
              var l = new WebSocket(o),
                c = !1,
                d = function() {
                  if ((l.removeEventListener("close", d), c)) s(2);
                  else if (0 !== r) {
                    var t = -1 === r ? -1 : r - 1;
                    setTimeout(function() {
                      return e(t, a, s);
                    }, 1e3);
                  } else s(1);
                },
                u = function(e) {
                  try {
                    var o = i(
                      function() {
                        function e() {
                          l.send(
                            JSON.stringify({
                              type: "auth",
                              access_token: t.accessToken,
                            })
                          );
                        }
                        var i = (function() {
                          if (t.expired)
                            return Promise.resolve(
                              n || t.refreshAccessToken()
                            ).then(function() {});
                        })();
                        return i && i.then ? i.then(e) : e();
                      },
                      function(e) {
                        (c = 2 === e), l.close();
                      }
                    );
                    return Promise.resolve(
                      o && o.then ? o.then(function() {}) : void 0
                    );
                  } catch (i) {
                    return Promise.reject(i);
                  }
                },
                p = function(e) {
                  try {
                    switch (JSON.parse(e.data).type) {
                      case "auth_invalid":
                        (c = !0), l.close();
                        break;
                      case "auth_ok":
                        l.removeEventListener("open", u),
                          l.removeEventListener("message", p),
                          l.removeEventListener("close", d),
                          l.removeEventListener("error", d),
                          a(l);
                    }
                    return;
                  } catch (e) {
                    return Promise.reject(e);
                  }
                };
              l.addEventListener("open", u),
                l.addEventListener("message", p),
                l.addEventListener("close", d),
                l.addEventListener("error", d);
            })(e.setupRetry, r, a);
          });
        },
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return i;
    }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return l;
      });
    const i = !(window.ShadyDOM && window.ShadyDOM.inUse);
    let o, r;
    function a(e) {
      o =
        (!e || !e.shimcssproperties) &&
        (i ||
          Boolean(
            !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
              window.CSS &&
              CSS.supports &&
              CSS.supports("box-shadow", "0 0 0 var(--foo)")
          ));
    }
    window.ShadyCSS &&
      void 0 !== window.ShadyCSS.cssBuild &&
      (r = window.ShadyCSS.cssBuild);
    const s = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
      ? (o = window.ShadyCSS.nativeCss)
      : window.ShadyCSS
      ? (a(window.ShadyCSS), (window.ShadyCSS = void 0))
      : a(window.WebComponents && window.WebComponents.flags);
    const l = o;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "h", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "b", function() {
        return p;
      }),
      n.d(t, "e", function() {
        return h;
      }),
      n.d(t, "c", function() {
        return f;
      }),
      n.d(t, "f", function() {
        return b;
      }),
      n.d(t, "g", function() {
        return m;
      }),
      n.d(t, "d", function() {
        return _;
      });
    var i = n(29),
      o = n(17),
      r = n(16),
      a = n(38),
      s = n(23),
      l = n(6);
    const c = (e) =>
        null === e || !("object" == typeof e || "function" == typeof e),
      d = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
    class u {
      constructor(e, t, n) {
        (this.dirty = !0),
          (this.element = e),
          (this.name = t),
          (this.strings = n),
          (this.parts = []);
        for (let i = 0; i < n.length - 1; i++)
          this.parts[i] = this._createPart();
      }
      _createPart() {
        return new p(this);
      }
      _getValue() {
        const e = this.strings,
          t = e.length - 1;
        let n = "";
        for (let i = 0; i < t; i++) {
          n += e[i];
          const t = this.parts[i];
          if (void 0 !== t) {
            const e = t.value;
            if (c(e) || !d(e)) n += "string" == typeof e ? e : String(e);
            else for (const t of e) n += "string" == typeof t ? t : String(t);
          }
        }
        return (n += e[t]);
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1),
          this.element.setAttribute(this.name, this._getValue()));
      }
    }
    class p {
      constructor(e) {
        (this.value = void 0), (this.committer = e);
      }
      setValue(e) {
        e === r.a ||
          (c(e) && e === this.value) ||
          ((this.value = e), Object(i.b)(e) || (this.committer.dirty = !0));
      }
      commit() {
        for (; Object(i.b)(this.value); ) {
          const e = this.value;
          (this.value = r.a), e(this);
        }
        this.value !== r.a && this.committer.commit();
      }
    }
    class h {
      constructor(e) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.options = e);
      }
      appendInto(e) {
        (this.startNode = e.appendChild(Object(l.c)())),
          (this.endNode = e.appendChild(Object(l.c)()));
      }
      insertAfterNode(e) {
        (this.startNode = e), (this.endNode = e.nextSibling);
      }
      appendIntoPart(e) {
        e.__insert((this.startNode = Object(l.c)())),
          e.__insert((this.endNode = Object(l.c)()));
      }
      insertAfterPart(e) {
        e.__insert((this.startNode = Object(l.c)())),
          (this.endNode = e.endNode),
          (e.endNode = this.startNode);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; Object(i.b)(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = r.a), e(this);
        }
        const e = this.__pendingValue;
        e !== r.a &&
          (c(e)
            ? e !== this.value && this.__commitText(e)
            : e instanceof s.b
            ? this.__commitTemplateResult(e)
            : e instanceof Node
            ? this.__commitNode(e)
            : d(e)
            ? this.__commitIterable(e)
            : e === r.b
            ? ((this.value = r.b), this.clear())
            : this.__commitText(e));
      }
      __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
      __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
      }
      __commitText(e) {
        const t = this.startNode.nextSibling;
        (e = null == e ? "" : e),
          t === this.endNode.previousSibling && 3 === t.nodeType
            ? (t.data = e)
            : this.__commitNode(
                document.createTextNode("string" == typeof e ? e : String(e))
              ),
          (this.value = e);
      }
      __commitTemplateResult(e) {
        const t = this.options.templateFactory(e);
        if (this.value instanceof a.a && this.value.template === t)
          this.value.update(e.values);
        else {
          const n = new a.a(t, e.processor, this.options),
            i = n._clone();
          n.update(e.values), this.__commitNode(i), (this.value = n);
        }
      }
      __commitIterable(e) {
        Array.isArray(this.value) || ((this.value = []), this.clear());
        const t = this.value;
        let n,
          i = 0;
        for (const o of e)
          void 0 === (n = t[i]) &&
            ((n = new h(this.options)),
            t.push(n),
            0 === i ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])),
            n.setValue(o),
            n.commit(),
            i++;
        i < t.length && ((t.length = i), this.clear(n && n.endNode));
      }
      clear(e = this.startNode) {
        Object(o.b)(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    }
    class f {
      constructor(e, t, n) {
        if (
          ((this.value = void 0),
          (this.__pendingValue = void 0),
          2 !== n.length || "" !== n[0] || "" !== n[1])
        )
          throw new Error(
            "Boolean attributes can only contain a single expression"
          );
        (this.element = e), (this.name = t), (this.strings = n);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; Object(i.b)(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = r.a), e(this);
        }
        if (this.__pendingValue === r.a) return;
        const e = !!this.__pendingValue;
        this.value !== e &&
          (e
            ? this.element.setAttribute(this.name, "")
            : this.element.removeAttribute(this.name),
          (this.value = e)),
          (this.__pendingValue = r.a);
      }
    }
    class b extends u {
      constructor(e, t, n) {
        super(e, t, n),
          (this.single = 2 === n.length && "" === n[0] && "" === n[1]);
      }
      _createPart() {
        return new m(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1), (this.element[this.name] = this._getValue()));
      }
    }
    class m extends p {}
    let g = !1;
    try {
      const e = {
        get capture() {
          return (g = !0), !1;
        },
      };
      window.addEventListener("test", e, e),
        window.removeEventListener("test", e, e);
    } catch (v) {}
    class _ {
      constructor(e, t, n) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.element = e),
          (this.eventName = t),
          (this.eventContext = n),
          (this.__boundHandleEvent = (e) => this.handleEvent(e));
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; Object(i.b)(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = r.a), e(this);
        }
        if (this.__pendingValue === r.a) return;
        const e = this.__pendingValue,
          t = this.value,
          n =
            null == e ||
            (null != t &&
              (e.capture !== t.capture ||
                e.once !== t.once ||
                e.passive !== t.passive)),
          o = null != e && (null == t || n);
        n &&
          this.element.removeEventListener(
            this.eventName,
            this.__boundHandleEvent,
            this.__options
          ),
          o &&
            ((this.__options = y(e)),
            this.element.addEventListener(
              this.eventName,
              this.__boundHandleEvent,
              this.__options
            )),
          (this.value = e),
          (this.__pendingValue = r.a);
      }
      handleEvent(e) {
        "function" == typeof this.value
          ? this.value.call(this.eventContext || this.element, e)
          : this.value.handleEvent(e);
      }
    }
    const y = (e) =>
      e &&
      (g
        ? { capture: e.capture, passive: e.passive, once: e.once }
        : e.capture);
  },
  function(e, t, n) {
    "use strict";
    var i = n(0),
      o = n(71);
    n.d(t, "e", function() {
      return i.f;
    }),
      n.d(t, "a", function() {
        return i.a;
      }),
      n.d(t, "d", function() {
        return i.d;
      }),
      n.d(t, "f", function() {
        return i.g;
      }),
      n.d(t, "c", function() {
        return i.c;
      }),
      n.d(t, "b", function() {
        return o.a;
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      });
    const i = {},
      o = {};
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return r;
      });
    const i =
        void 0 !== window.customElements &&
        void 0 !== window.customElements.polyfillWrapFlushCallback,
      o = (e, t, n = null, i = null) => {
        for (; t !== n; ) {
          const n = t.nextSibling;
          e.insertBefore(t, i), (t = n);
        }
      },
      r = (e, t, n = null) => {
        for (; t !== n; ) {
          const n = t.nextSibling;
          e.removeChild(t), (t = n);
        }
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return s;
    }),
      n.d(t, "b", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return c;
      });
    n(7);
    let i,
      o,
      r = /(url\()([^)]*)(\))/g,
      a = /(^\/)|(^#)|(^[\w-\d]*:)/;
    function s(e, t) {
      if (e && a.test(e)) return e;
      if (void 0 === i) {
        i = !1;
        try {
          const e = new URL("b", "http://a");
          (e.pathname = "c%20d"), (i = "http://a/c%20d" === e.href);
        } catch (n) {}
      }
      return (
        t || (t = document.baseURI || window.location.href),
        i
          ? new URL(e, t).href
          : (o ||
              (((o = document.implementation.createHTMLDocument(
                "temp"
              )).base = o.createElement("base")),
              o.head.appendChild(o.base),
              (o.anchor = o.createElement("a")),
              o.body.appendChild(o.anchor)),
            (o.base.href = t),
            (o.anchor.href = e),
            o.anchor.href || e)
      );
    }
    function l(e, t) {
      return e.replace(r, function(e, n, i, o) {
        return n + "'" + s(i.replace(/["']/g, ""), t) + "'" + o;
      });
    }
    function c(e) {
      return e.substring(0, e.lastIndexOf("/") + 1);
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    const i = (e, t, n, i) => {
      (i = i || {}), (n = null == n ? {} : n);
      const o = new Event(t, {
        bubbles: void 0 === i.bubbles || i.bubbles,
        cancelable: Boolean(i.cancelable),
        composed: void 0 === i.composed || i.composed,
      });
      return (o.detail = n), e.dispatchEvent(o), o;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return r;
      });
    const i = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      o = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      r = /@media\s(.*)/;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(7), n(8), n(11);
    class i {
      constructor() {
        (this._asyncModule = null),
          (this._callback = null),
          (this._timer = null);
      }
      setConfig(e, t) {
        (this._asyncModule = e),
          (this._callback = t),
          (this._timer = this._asyncModule.run(() => {
            (this._timer = null), this._callback();
          }));
      }
      cancel() {
        this.isActive() &&
          (this._asyncModule.cancel(this._timer), (this._timer = null));
      }
      flush() {
        this.isActive() && (this.cancel(), this._callback());
      }
      isActive() {
        return null != this._timer;
      }
      static debounce(e, t, n) {
        return (
          e instanceof i ? e.cancel() : (e = new i()), e.setConfig(t, n), e
        );
      }
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return s;
      });
    n(7);
    const i = {},
      o = /-[a-z]/g,
      r = /([A-Z])/g;
    function a(e) {
      return (
        i[e] ||
        (i[e] =
          e.indexOf("-") < 0 ? e : e.replace(o, (e) => e[1].toUpperCase()))
      );
    }
    function s(e) {
      return i[e] || (i[e] = e.replace(r, "-$1").toLowerCase());
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return a;
      });
    var i = n(17),
      o = n(6);
    class r {
      constructor(e, t, n, i) {
        (this.strings = e),
          (this.values = t),
          (this.type = n),
          (this.processor = i);
      }
      getHTML() {
        const e = this.strings.length - 1;
        let t = "",
          n = !1;
        for (let i = 0; i < e; i++) {
          const e = this.strings[i],
            r = e.lastIndexOf("\x3c!--");
          n = (r > -1 || n) && -1 === e.indexOf("--\x3e", r + 1);
          const a = o.e.exec(e);
          t +=
            null === a
              ? e + (n ? o.f : o.g)
              : e.substr(0, a.index) + a[1] + a[2] + o.b + a[3] + o.f;
        }
        return (t += this.strings[e]);
      }
      getTemplateElement() {
        const e = document.createElement("template");
        return (e.innerHTML = this.getHTML()), e;
      }
    }
    class a extends r {
      getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
      }
      getTemplateElement() {
        const e = super.getTemplateElement(),
          t = e.content,
          n = t.firstChild;
        return t.removeChild(n), Object(i.c)(t, n.firstChild), e;
      }
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return a;
      });
    n(7), n(21);
    let i = [];
    const o = function(e) {
      i.push(e);
    };
    function r() {
      const e = Boolean(i.length);
      for (; i.length; )
        try {
          i.shift().flush();
        } catch (t) {
          setTimeout(() => {
            throw t;
          });
        }
      return e;
    }
    const a = function() {
      let e, t;
      do {
        (e = window.ShadyDOM && ShadyDOM.flush()),
          window.ShadyCSS &&
            window.ShadyCSS.ScopingShim &&
            window.ShadyCSS.ScopingShim.flush(),
          (t = r());
      } while (e || t);
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(36);
    n(3);
    const o = Object(i.a)(HTMLElement);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return a;
      });
    var i = n(8);
    function o(e, t, n, i, o) {
      let r;
      o && (r = "object" == typeof n && null !== n) && (i = e.__dataTemp[t]);
      let a = i !== n && (i == i || n == n);
      return r && a && (e.__dataTemp[t] = n), a;
    }
    const r = Object(i.a)((e) => {
        return class extends e {
          _shouldPropertyChange(e, t, n) {
            return o(this, e, t, n, !0);
          }
        };
      }),
      a = Object(i.a)((e) => {
        return class extends e {
          static get properties() {
            return { mutableData: Boolean };
          }
          _shouldPropertyChange(e, t, n) {
            return o(this, e, t, n, this.mutableData);
          }
        };
      });
    r._mutablePropertyChange = o;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return r;
      });
    var i = n(6);
    function o(e) {
      let t = r.get(e.type);
      void 0 === t &&
        ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
        r.set(e.type, t));
      let n = t.stringsArray.get(e.strings);
      if (void 0 !== n) return n;
      const o = e.strings.join(i.f);
      return (
        void 0 === (n = t.keyString.get(o)) &&
          ((n = new i.a(e, e.getTemplateElement())), t.keyString.set(o, n)),
        t.stringsArray.set(e.strings, n),
        n
      );
    }
    const r = new Map();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return r;
      }),
      n.d(t, "a", function() {
        return a;
      });
    var i = n(20);
    function o(e, t) {
      for (let n in t)
        null === n ? e.style.removeProperty(n) : e.style.setProperty(n, t[n]);
    }
    function r(e, t) {
      const n = window.getComputedStyle(e).getPropertyValue(t);
      return n ? n.trim() : "";
    }
    function a(e) {
      const t = i.b.test(e) || i.c.test(e);
      return (i.b.lastIndex = 0), (i.c.lastIndex = 0), t;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return r;
      });
    const i = new WeakMap(),
      o = (e) => (...t) => {
        const n = e(...t);
        return i.set(n, !0), n;
      },
      r = (e) => "function" == typeof e && i.has(e);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    }),
      n.d(t, "b", function() {
        return s;
      });
    var i = n(17),
      o = n(14),
      r = n(27);
    const a = new WeakMap(),
      s = (e, t, n) => {
        let s = a.get(t);
        void 0 === s &&
          (Object(i.b)(t, t.firstChild),
          a.set(t, (s = new o.e(Object.assign({ templateFactory: r.b }, n)))),
          s.appendInto(t)),
          s.setValue(e),
          s.commit();
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return b;
    });
    n(4);
    var i = {
        "U+0008": "backspace",
        "U+0009": "tab",
        "U+001B": "esc",
        "U+0020": "space",
        "U+007F": "del",
      },
      o = {
        8: "backspace",
        9: "tab",
        13: "enter",
        27: "esc",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        46: "del",
        106: "*",
      },
      r = {
        shift: "shiftKey",
        ctrl: "ctrlKey",
        alt: "altKey",
        meta: "metaKey",
      },
      a = /[a-z0-9*]/,
      s = /U\+/,
      l = /^arrow/,
      c = /^space(bar)?/,
      d = /^escape$/;
    function u(e, t) {
      var n = "";
      if (e) {
        var i = e.toLowerCase();
        " " === i || c.test(i)
          ? (n = "space")
          : d.test(i)
          ? (n = "esc")
          : 1 == i.length
          ? (t && !a.test(i)) || (n = i)
          : (n = l.test(i)
              ? i.replace("arrow", "")
              : "multiply" == i
              ? "*"
              : i);
      }
      return n;
    }
    function p(e, t) {
      return e.key
        ? u(e.key, t)
        : e.detail && e.detail.key
        ? u(e.detail.key, t)
        : ((n = e.keyIdentifier),
          (r = ""),
          n &&
            (n in i
              ? (r = i[n])
              : s.test(n)
              ? ((n = parseInt(n.replace("U+", "0x"), 16)),
                (r = String.fromCharCode(n).toLowerCase()))
              : (r = n.toLowerCase())),
          r ||
            (function(e) {
              var t = "";
              return (
                Number(e) &&
                  (t =
                    e >= 65 && e <= 90
                      ? String.fromCharCode(32 + e)
                      : e >= 112 && e <= 123
                      ? "f" + (e - 112 + 1)
                      : e >= 48 && e <= 57
                      ? String(e - 48)
                      : e >= 96 && e <= 105
                      ? String(e - 96)
                      : o[e]),
                t
              );
            })(e.keyCode) ||
            "");
      var n, r;
    }
    function h(e, t) {
      return (
        p(t, e.hasModifiers) === e.key &&
        (!e.hasModifiers ||
          (!!t.shiftKey == !!e.shiftKey &&
            !!t.ctrlKey == !!e.ctrlKey &&
            !!t.altKey == !!e.altKey &&
            !!t.metaKey == !!e.metaKey))
      );
    }
    function f(e) {
      return e
        .trim()
        .split(" ")
        .map(function(e) {
          return (function(e) {
            return 1 === e.length
              ? { combo: e, key: e, event: "keydown" }
              : e.split("+").reduce(
                  function(e, t) {
                    var n = t.split(":"),
                      i = n[0],
                      o = n[1];
                    return (
                      i in r
                        ? ((e[r[i]] = !0), (e.hasModifiers = !0))
                        : ((e.key = i), (e.event = o || "keydown")),
                      e
                    );
                  },
                  { combo: e.split(":").shift() }
                );
          })(e);
        });
    }
    const b = {
      properties: {
        keyEventTarget: {
          type: Object,
          value: function() {
            return this;
          },
        },
        stopKeyboardEventPropagation: { type: Boolean, value: !1 },
        _boundKeyHandlers: {
          type: Array,
          value: function() {
            return [];
          },
        },
        _imperativeKeyBindings: {
          type: Object,
          value: function() {
            return {};
          },
        },
      },
      observers: ["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],
      keyBindings: {},
      registered: function() {
        this._prepKeyBindings();
      },
      attached: function() {
        this._listenKeyEventListeners();
      },
      detached: function() {
        this._unlistenKeyEventListeners();
      },
      addOwnKeyBinding: function(e, t) {
        (this._imperativeKeyBindings[e] = t),
          this._prepKeyBindings(),
          this._resetKeyEventListeners();
      },
      removeOwnKeyBindings: function() {
        (this._imperativeKeyBindings = {}),
          this._prepKeyBindings(),
          this._resetKeyEventListeners();
      },
      keyboardEventMatchesKeys: function(e, t) {
        for (var n = f(t), i = 0; i < n.length; ++i) if (h(n[i], e)) return !0;
        return !1;
      },
      _collectKeyBindings: function() {
        var e = this.behaviors.map(function(e) {
          return e.keyBindings;
        });
        return (
          -1 === e.indexOf(this.keyBindings) && e.push(this.keyBindings), e
        );
      },
      _prepKeyBindings: function() {
        for (var e in ((this._keyBindings = {}),
        this._collectKeyBindings().forEach(function(e) {
          for (var t in e) this._addKeyBinding(t, e[t]);
        }, this),
        this._imperativeKeyBindings))
          this._addKeyBinding(e, this._imperativeKeyBindings[e]);
        for (var t in this._keyBindings)
          this._keyBindings[t].sort(function(e, t) {
            var n = e[0].hasModifiers;
            return n === t[0].hasModifiers ? 0 : n ? -1 : 1;
          });
      },
      _addKeyBinding: function(e, t) {
        f(e).forEach(function(e) {
          (this._keyBindings[e.event] = this._keyBindings[e.event] || []),
            this._keyBindings[e.event].push([e, t]);
        }, this);
      },
      _resetKeyEventListeners: function() {
        this._unlistenKeyEventListeners(),
          this.isAttached && this._listenKeyEventListeners();
      },
      _listenKeyEventListeners: function() {
        this.keyEventTarget &&
          Object.keys(this._keyBindings).forEach(function(e) {
            var t = this._keyBindings[e],
              n = this._onKeyBindingEvent.bind(this, t);
            this._boundKeyHandlers.push([this.keyEventTarget, e, n]),
              this.keyEventTarget.addEventListener(e, n);
          }, this);
      },
      _unlistenKeyEventListeners: function() {
        for (var e, t, n, i; this._boundKeyHandlers.length; )
          (t = (e = this._boundKeyHandlers.pop())[0]),
            (n = e[1]),
            (i = e[2]),
            t.removeEventListener(n, i);
      },
      _onKeyBindingEvent: function(e, t) {
        if (
          (this.stopKeyboardEventPropagation && t.stopPropagation(),
          !t.defaultPrevented)
        )
          for (var n = 0; n < e.length; n++) {
            var i = e[n][0],
              o = e[n][1];
            if (
              h(i, t) &&
              (this._triggerKeyHandler(i, o, t), t.defaultPrevented)
            )
              return;
          }
      },
      _triggerKeyHandler: function(e, t, n) {
        var i = Object.create(e);
        i.keyboardEvent = n;
        var o = new CustomEvent(e.event, { detail: i, cancelable: !0 });
        this[t].call(this, o), o.defaultPrevented && n.preventDefault();
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return _;
    }),
      n.d(t, "a", function() {
        return y;
      });
    n(7);
    var i = n(37),
      o = n(26),
      r = n(9);
    let a = null;
    function s() {
      return a;
    }
    s.prototype = Object.create(HTMLTemplateElement.prototype, {
      constructor: { value: s, writable: !0 },
    });
    const l = Object(i.a)(s),
      c = Object(o.a)(l);
    const d = Object(i.a)(class {});
    class u extends d {
      constructor(e) {
        super(),
          this._configureProperties(e),
          (this.root = this._stampTemplate(this.__dataHost));
        let t = (this.children = []);
        for (let i = this.root.firstChild; i; i = i.nextSibling)
          t.push(i), (i.__templatizeInstance = this);
        this.__templatizeOwner &&
          this.__templatizeOwner.__hideTemplateChildren__ &&
          this._showHideChildren(!0);
        let n = this.__templatizeOptions;
        ((e && n.instanceProps) || !n.instanceProps) &&
          this._enableProperties();
      }
      _configureProperties(e) {
        if (this.__templatizeOptions.forwardHostProp)
          for (let t in this.__hostProps)
            this._setPendingProperty(t, this.__dataHost["_host_" + t]);
        for (let t in e) this._setPendingProperty(t, e[t]);
      }
      forwardHostProp(e, t) {
        this._setPendingPropertyOrPath(e, t, !1, !0) &&
          this.__dataHost._enqueueClient(this);
      }
      _addEventListenerToNode(e, t, n) {
        if (this._methodHost && this.__templatizeOptions.parentModel)
          this._methodHost._addEventListenerToNode(e, t, (e) => {
            (e.model = this), n(e);
          });
        else {
          let i = this.__dataHost.__dataHost;
          i && i._addEventListenerToNode(e, t, n);
        }
      }
      _showHideChildren(e) {
        let t = this.children;
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (Boolean(e) != Boolean(i.__hideTemplateChildren__))
            if (i.nodeType === Node.TEXT_NODE)
              e
                ? ((i.__polymerTextContent__ = i.textContent),
                  (i.textContent = ""))
                : (i.textContent = i.__polymerTextContent__);
            else if ("slot" === i.localName)
              if (e)
                (i.__polymerReplaced__ = document.createComment("hidden-slot")),
                  i.parentNode.replaceChild(i.__polymerReplaced__, i);
              else {
                const e = i.__polymerReplaced__;
                e && e.parentNode.replaceChild(i, e);
              }
            else
              i.style &&
                (e
                  ? ((i.__polymerDisplay__ = i.style.display),
                    (i.style.display = "none"))
                  : (i.style.display = i.__polymerDisplay__));
          (i.__hideTemplateChildren__ = e),
            i._showHideChildren && i._showHideChildren(e);
        }
      }
      _setUnmanagedPropertyToNode(e, t, n) {
        e.__hideTemplateChildren__ &&
        e.nodeType == Node.TEXT_NODE &&
        "textContent" == t
          ? (e.__polymerTextContent__ = n)
          : super._setUnmanagedPropertyToNode(e, t, n);
      }
      get parentModel() {
        let e = this.__parentModel;
        if (!e) {
          let t;
          e = this;
          do {
            e = e.__dataHost.__dataHost;
          } while ((t = e.__templatizeOptions) && !t.parentModel);
          this.__parentModel = e;
        }
        return e;
      }
      dispatchEvent(e) {
        return !0;
      }
    }
    u.prototype.__dataHost,
      u.prototype.__templatizeOptions,
      u.prototype._methodHost,
      u.prototype.__templatizeOwner,
      u.prototype.__hostProps;
    const p = Object(o.a)(u);
    function h(e) {
      let t = e.__dataHost;
      return (t && t._methodHost) || t;
    }
    function f(e, t, n) {
      let i = n.mutableData ? p : u,
        o = class extends i {};
      return (
        (o.prototype.__templatizeOptions = n),
        o.prototype._bindTemplate(e),
        (function(e, t, n, i) {
          let o = n.hostProps || {};
          for (let r in i.instanceProps) {
            delete o[r];
            let t = i.notifyInstanceProp;
            t &&
              e.prototype._addPropertyEffect(
                r,
                e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                { fn: g(r, t) }
              );
          }
          if (i.forwardHostProp && t.__dataHost)
            for (let r in o)
              e.prototype._addPropertyEffect(
                r,
                e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                {
                  fn: function(e, t, n) {
                    e.__dataHost._setPendingPropertyOrPath(
                      "_host_" + t,
                      n[t],
                      !0,
                      !0
                    );
                  },
                }
              );
        })(o, e, t, n),
        o
      );
    }
    function b(e, t, n) {
      let i = n.forwardHostProp;
      if (i) {
        let o = t.templatizeTemplateClass;
        if (!o) {
          let e = n.mutableData ? c : l;
          o = t.templatizeTemplateClass = class extends e {};
          let r = t.hostProps;
          for (let t in r)
            o.prototype._addPropertyEffect(
              "_host_" + t,
              o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
              { fn: m(t, i) }
            ),
              o.prototype._createNotifyingProperty("_host_" + t);
        }
        !(function(e, t) {
          (a = e), Object.setPrototypeOf(e, t.prototype), new t(), (a = null);
        })(e, o),
          e.__dataProto && Object.assign(e.__data, e.__dataProto),
          (e.__dataTemp = {}),
          (e.__dataPending = null),
          (e.__dataOld = null),
          e._enableProperties();
      }
    }
    function m(e, t) {
      return function(e, n, i) {
        t.call(e.__templatizeOwner, n.substring("_host_".length), i[n]);
      };
    }
    function g(e, t) {
      return function(e, n, i) {
        t.call(e.__templatizeOwner, e, n, i[n]);
      };
    }
    function _(e, t, n) {
      if (r.f && !h(e))
        throw new Error("strictTemplatePolicy: template owner not trusted");
      if (((n = n || {}), e.__templatizeOwner))
        throw new Error("A <template> can only be templatized once");
      e.__templatizeOwner = t;
      let i = (t ? t.constructor : u)._parseTemplate(e),
        o = i.templatizeInstanceClass;
      o || ((o = f(e, i, n)), (i.templatizeInstanceClass = o)), b(e, i, n);
      let a = class extends o {};
      return (
        (a.prototype._methodHost = h(e)),
        (a.prototype.__dataHost = e),
        (a.prototype.__templatizeOwner = t),
        (a.prototype.__hostProps = i.hostProps),
        (a = a)
      );
    }
    function y(e, t) {
      let n;
      for (; t; )
        if ((n = t.__templatizeInstance)) {
          if (n.__dataHost == e) return n;
          t = n.__dataHost;
        } else t = t.parentNode;
      return null;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return l;
    }),
      n.d(t, "a", function() {
        return c;
      }),
      n.d(t, "b", function() {
        return u;
      });
    var i = n(39),
      o = n(51);
    const r = window.localStorage || {},
      a = {
        "zh-cn": "zh-Hans",
        "zh-sg": "zh-Hans",
        "zh-my": "zh-Hans",
        "zh-tw": "zh-Hant",
        "zh-hk": "zh-Hant",
        "zh-mo": "zh-Hant",
        zh: "zh-Hant",
      };
    function s(e) {
      if (e in i.a.translations) return e;
      const t = e.toLowerCase();
      if (t in a) return a[t];
      for (const n in Object.keys(i.a.translations))
        if (n.toLowerCase() === t) return n;
    }
    async function l(e) {
      const t = await Object(o.a)(e),
        n = t ? t.language : null;
      if (n) {
        const e = s(n);
        if (e) return e;
      }
      return null;
    }
    function c() {
      let e = null;
      if (r.selectedLanguage)
        try {
          const n = JSON.parse(r.selectedLanguage);
          if (n && (e = s(n))) return e;
        } catch (t) {}
      if (navigator.languages)
        for (const n of navigator.languages) if ((e = s(n))) return e;
      return (
        (e = s(navigator.language)) ||
        (navigator.language &&
        navigator.language.includes("-") &&
        (e = s(navigator.language.split("-")[0]))
          ? e
          : "en")
      );
    }
    const d = {};
    async function u(e, t) {
      const n = i.a.translations[t];
      if (!n) {
        if ("en" !== t) return u(e, "en");
        throw new Error("Language en is not found in metadata");
      }
      const o = n.fingerprints[e ? `${e}/${t}` : t];
      return (
        d[o] ||
          (d[o] = (async function(e) {
            const t = await fetch(`/static/translations/${e}`, {
              credentials: "same-origin",
            });
            if (!t.ok)
              throw new Error(
                `Fail to fetch translation ${e}: HTTP response status is ${
                  t.status
                }`
              );
            return t.json();
          })(o)
            .then((e) => ({ language: t, data: e }))
            .catch(
              (n) => (delete d[o], "en" !== t ? u(e, "en") : Promise.reject(n))
            )),
        d[o]
      );
    }
    u(null, c());
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(4), n(1);
    const i = {
      properties: {
        focused: {
          type: Boolean,
          value: !1,
          notify: !0,
          readOnly: !0,
          reflectToAttribute: !0,
        },
        disabled: {
          type: Boolean,
          value: !1,
          notify: !0,
          observer: "_disabledChanged",
          reflectToAttribute: !0,
        },
        _oldTabIndex: { type: String },
        _boundFocusBlurHandler: {
          type: Function,
          value: function() {
            return this._focusBlurHandler.bind(this);
          },
        },
      },
      observers: ["_changedControlState(focused, disabled)"],
      ready: function() {
        this.addEventListener("focus", this._boundFocusBlurHandler, !0),
          this.addEventListener("blur", this._boundFocusBlurHandler, !0);
      },
      _focusBlurHandler: function(e) {
        this._setFocused("focus" === e.type);
      },
      _disabledChanged: function(e, t) {
        this.setAttribute("aria-disabled", e ? "true" : "false"),
          (this.style.pointerEvents = e ? "none" : ""),
          e
            ? ((this._oldTabIndex = this.getAttribute("tabindex")),
              this._setFocused(!1),
              (this.tabIndex = -1),
              this.blur())
            : void 0 !== this._oldTabIndex &&
              (null === this._oldTabIndex
                ? this.removeAttribute("tabindex")
                : this.setAttribute("tabindex", this._oldTabIndex));
      },
      _changedControlState: function() {
        this._controlStateChanged && this._controlStateChanged();
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return z;
    }),
      n.d(t, "e", function() {
        return R;
      }),
      n.d(t, "f", function() {
        return M;
      }),
      n.d(t, "d", function() {
        return D;
      }),
      n.d(t, "c", function() {
        return U;
      }),
      n.d(t, "a", function() {
        return q;
      });
    n(7);
    var i = n(11),
      o = n(21),
      r = n(9);
    let a = "string" == typeof document.head.style.touchAction,
      s = "__polymerGestures",
      l = "__polymerGesturesHandled",
      c = "__polymerGesturesTouchAction",
      d = 25,
      u = 5,
      p = 2500,
      h = ["mousedown", "mousemove", "mouseup", "click"],
      f = [0, 1, 4, 2],
      b = (function() {
        try {
          return 1 === new MouseEvent("test", { buttons: 1 }).buttons;
        } catch (e) {
          return !1;
        }
      })();
    function m(e) {
      return h.indexOf(e) > -1;
    }
    let g = !1;
    function _(e) {
      if (!m(e) && "touchend" !== e)
        return a && g && r.b ? { passive: !0 } : void 0;
    }
    !(function() {
      try {
        let t = Object.defineProperty({}, "passive", {
          get() {
            g = !0;
          },
        });
        window.addEventListener("test", null, t),
          window.removeEventListener("test", null, t);
      } catch (e) {}
    })();
    let y = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
    const v = [],
      w = {
        button: !0,
        input: !0,
        keygen: !0,
        meter: !0,
        output: !0,
        textarea: !0,
        progress: !0,
        select: !0,
      },
      x = {
        button: !0,
        command: !0,
        fieldset: !0,
        input: !0,
        keygen: !0,
        optgroup: !0,
        option: !0,
        select: !0,
        textarea: !0,
      };
    function k(e) {
      let t = Array.prototype.slice.call(e.labels || []);
      if (!t.length) {
        t = [];
        let n = e.getRootNode();
        if (e.id) {
          let i = n.querySelectorAll(`label[for = ${e.id}]`);
          for (let e = 0; e < i.length; e++) t.push(i[e]);
        }
      }
      return t;
    }
    let C = function(e) {
      let t = e.sourceCapabilities;
      var n;
      if (
        (!t || t.firesTouchEvents) &&
        ((e[l] = { skip: !0 }), "click" === e.type)
      ) {
        let t = !1,
          i = e.composedPath && e.composedPath();
        if (i)
          for (let e = 0; e < i.length; e++) {
            if (i[e].nodeType === Node.ELEMENT_NODE)
              if ("label" === i[e].localName) v.push(i[e]);
              else if (((n = i[e]), w[n.localName])) {
                let n = k(i[e]);
                for (let e = 0; e < n.length; e++)
                  t = t || v.indexOf(n[e]) > -1;
              }
            if (i[e] === O.mouse.target) return;
          }
        if (t) return;
        e.preventDefault(), e.stopPropagation();
      }
    };
    function S(e) {
      let t = y ? ["click"] : h;
      for (let n, i = 0; i < t.length; i++)
        (n = t[i]),
          e
            ? ((v.length = 0), document.addEventListener(n, C, !0))
            : document.removeEventListener(n, C, !0);
    }
    function j(e) {
      let t = e.type;
      if (!m(t)) return !1;
      if ("mousemove" === t) {
        let t = void 0 === e.buttons ? 1 : e.buttons;
        return (
          e instanceof window.MouseEvent && !b && (t = f[e.which] || 0),
          Boolean(1 & t)
        );
      }
      return 0 === (void 0 === e.button ? 0 : e.button);
    }
    let O = {
      mouse: { target: null, mouseIgnoreJob: null },
      touch: { x: 0, y: 0, id: -1, scrollDecided: !1 },
    };
    function E(e, t, n) {
      (e.movefn = t),
        (e.upfn = n),
        document.addEventListener("mousemove", t),
        document.addEventListener("mouseup", n);
    }
    function A(e) {
      document.removeEventListener("mousemove", e.movefn),
        document.removeEventListener("mouseup", e.upfn),
        (e.movefn = null),
        (e.upfn = null);
    }
    document.addEventListener(
      "touchend",
      function(e) {
        O.mouse.mouseIgnoreJob || S(!0),
          (O.mouse.target = e.composedPath()[0]),
          (O.mouse.mouseIgnoreJob = o.a.debounce(
            O.mouse.mouseIgnoreJob,
            i.d.after(p),
            function() {
              S(), (O.mouse.target = null), (O.mouse.mouseIgnoreJob = null);
            }
          ));
      },
      !!g && { passive: !0 }
    );
    const P = {},
      T = [];
    function I(e) {
      if (e.composedPath) {
        const t = e.composedPath();
        return t.length > 0 ? t[0] : e.target;
      }
      return e.target;
    }
    function N(e) {
      let t,
        n = e.type,
        i = e.currentTarget[s];
      if (!i) return;
      let o = i[n];
      if (o) {
        if (!e[l] && ((e[l] = {}), "touch" === n.slice(0, 5))) {
          let t = (e = e).changedTouches[0];
          if (
            ("touchstart" === n &&
              1 === e.touches.length &&
              (O.touch.id = t.identifier),
            O.touch.id !== t.identifier)
          )
            return;
          a ||
            ("touchstart" !== n && "touchmove" !== n) ||
            (function(e) {
              let t = e.changedTouches[0],
                n = e.type;
              if ("touchstart" === n)
                (O.touch.x = t.clientX),
                  (O.touch.y = t.clientY),
                  (O.touch.scrollDecided = !1);
              else if ("touchmove" === n) {
                if (O.touch.scrollDecided) return;
                O.touch.scrollDecided = !0;
                let n = (function(e) {
                    let t = "auto",
                      n = e.composedPath && e.composedPath();
                    if (n)
                      for (let i, o = 0; o < n.length; o++)
                        if ((i = n[o])[c]) {
                          t = i[c];
                          break;
                        }
                    return t;
                  })(e),
                  i = !1,
                  o = Math.abs(O.touch.x - t.clientX),
                  r = Math.abs(O.touch.y - t.clientY);
                e.cancelable &&
                  ("none" === n
                    ? (i = !0)
                    : "pan-x" === n
                    ? (i = r > o)
                    : "pan-y" === n && (i = o > r)),
                  i ? e.preventDefault() : D("track");
              }
            })(e);
        }
        if (!(t = e[l]).skip) {
          for (let n, i = 0; i < T.length; i++)
            o[(n = T[i]).name] &&
              !t[n.name] &&
              n.flow &&
              n.flow.start.indexOf(e.type) > -1 &&
              n.reset &&
              n.reset();
          for (let i, r = 0; r < T.length; r++)
            o[(i = T[r]).name] && !t[i.name] && ((t[i.name] = !0), i[n](e));
        }
      }
    }
    function z(e, t, n) {
      return (
        !!P[t] &&
        ((function(e, t, n) {
          let i = P[t],
            o = i.deps,
            r = i.name,
            a = e[s];
          a || (e[s] = a = {});
          for (let s, l, c = 0; c < o.length; c++)
            (s = o[c]),
              (y && m(s) && "click" !== s) ||
                ((l = a[s]) || (a[s] = l = { _count: 0 }),
                0 === l._count && e.addEventListener(s, N, _(s)),
                (l[r] = (l[r] || 0) + 1),
                (l._count = (l._count || 0) + 1));
          e.addEventListener(t, n), i.touchAction && M(e, i.touchAction);
        })(e, t, n),
        !0)
      );
    }
    function R(e, t, n) {
      return (
        !!P[t] &&
        ((function(e, t, n) {
          let i = P[t],
            o = i.deps,
            r = i.name,
            a = e[s];
          if (a)
            for (let s, l, c = 0; c < o.length; c++)
              (s = o[c]),
                (l = a[s]) &&
                  l[r] &&
                  ((l[r] = (l[r] || 1) - 1),
                  (l._count = (l._count || 1) - 1),
                  0 === l._count && e.removeEventListener(s, N, _(s)));
          e.removeEventListener(t, n);
        })(e, t, n),
        !0)
      );
    }
    function L(e) {
      T.push(e);
      for (let t = 0; t < e.emits.length; t++) P[e.emits[t]] = e;
    }
    function M(e, t) {
      a &&
        e instanceof HTMLElement &&
        i.c.run(() => {
          e.style.touchAction = t;
        }),
        (e[c] = t);
    }
    function F(e, t, n) {
      let i = new Event(t, { bubbles: !0, cancelable: !0, composed: !0 });
      if (((i.detail = n), e.dispatchEvent(i), i.defaultPrevented)) {
        let e = n.preventer || n.sourceEvent;
        e && e.preventDefault && e.preventDefault();
      }
    }
    function D(e) {
      let t = (function(e) {
        for (let t, n = 0; n < T.length; n++) {
          t = T[n];
          for (let n, i = 0; i < t.emits.length; i++)
            if ((n = t.emits[i]) === e) return t;
        }
        return null;
      })(e);
      t.info && (t.info.prevent = !0);
    }
    function B(e, t, n, i) {
      t &&
        F(t, e, {
          x: n.clientX,
          y: n.clientY,
          sourceEvent: n,
          preventer: i,
          prevent: function(e) {
            return D(e);
          },
        });
    }
    function H(e, t, n) {
      if (e.prevent) return !1;
      if (e.started) return !0;
      let i = Math.abs(e.x - t),
        o = Math.abs(e.y - n);
      return i >= u || o >= u;
    }
    function V(e, t, n) {
      if (!t) return;
      let i,
        o = e.moves[e.moves.length - 2],
        r = e.moves[e.moves.length - 1],
        a = r.x - e.x,
        s = r.y - e.y,
        l = 0;
      o && ((i = r.x - o.x), (l = r.y - o.y)),
        F(t, "track", {
          state: e.state,
          x: n.clientX,
          y: n.clientY,
          dx: a,
          dy: s,
          ddx: i,
          ddy: l,
          sourceEvent: n,
          hover: function() {
            return (function(e, t) {
              let n = document.elementFromPoint(e, t),
                i = n;
              for (
                ;
                i &&
                i.shadowRoot &&
                !window.ShadyDOM &&
                i !== (i = i.shadowRoot.elementFromPoint(e, t));

              )
                i && (n = i);
              return n;
            })(n.clientX, n.clientY);
          },
        });
    }
    function $(e, t, n) {
      let i = Math.abs(t.clientX - e.x),
        o = Math.abs(t.clientY - e.y),
        r = I(n || t);
      !r ||
        (x[r.localName] && r.hasAttribute("disabled")) ||
        ((isNaN(i) ||
          isNaN(o) ||
          (i <= d && o <= d) ||
          (function(e) {
            if ("click" === e.type) {
              if (0 === e.detail) return !0;
              let t = I(e);
              if (!t.nodeType || t.nodeType !== Node.ELEMENT_NODE) return !0;
              let n = t.getBoundingClientRect(),
                i = e.pageX,
                o = e.pageY;
              return !(
                i >= n.left &&
                i <= n.right &&
                o >= n.top &&
                o <= n.bottom
              );
            }
            return !1;
          })(t)) &&
          (e.prevent ||
            F(r, "tap", {
              x: t.clientX,
              y: t.clientY,
              sourceEvent: t,
              preventer: n,
            })));
    }
    L({
      name: "downup",
      deps: ["mousedown", "touchstart", "touchend"],
      flow: {
        start: ["mousedown", "touchstart"],
        end: ["mouseup", "touchend"],
      },
      emits: ["down", "up"],
      info: { movefn: null, upfn: null },
      reset: function() {
        A(this.info);
      },
      mousedown: function(e) {
        if (!j(e)) return;
        let t = I(e),
          n = this;
        E(
          this.info,
          function(e) {
            j(e) || (B("up", t, e), A(n.info));
          },
          function(e) {
            j(e) && B("up", t, e), A(n.info);
          }
        ),
          B("down", t, e);
      },
      touchstart: function(e) {
        B("down", I(e), e.changedTouches[0], e);
      },
      touchend: function(e) {
        B("up", I(e), e.changedTouches[0], e);
      },
    }),
      L({
        name: "track",
        touchAction: "none",
        deps: ["mousedown", "touchstart", "touchmove", "touchend"],
        flow: {
          start: ["mousedown", "touchstart"],
          end: ["mouseup", "touchend"],
        },
        emits: ["track"],
        info: {
          x: 0,
          y: 0,
          state: "start",
          started: !1,
          moves: [],
          addMove: function(e) {
            this.moves.length > 2 && this.moves.shift(), this.moves.push(e);
          },
          movefn: null,
          upfn: null,
          prevent: !1,
        },
        reset: function() {
          (this.info.state = "start"),
            (this.info.started = !1),
            (this.info.moves = []),
            (this.info.x = 0),
            (this.info.y = 0),
            (this.info.prevent = !1),
            A(this.info);
        },
        mousedown: function(e) {
          if (!j(e)) return;
          let t = I(e),
            n = this,
            i = function(e) {
              let i = e.clientX,
                o = e.clientY;
              H(n.info, i, o) &&
                ((n.info.state = n.info.started
                  ? "mouseup" === e.type
                    ? "end"
                    : "track"
                  : "start"),
                "start" === n.info.state && D("tap"),
                n.info.addMove({ x: i, y: o }),
                j(e) || ((n.info.state = "end"), A(n.info)),
                t && V(n.info, t, e),
                (n.info.started = !0));
            };
          E(this.info, i, function(e) {
            n.info.started && i(e), A(n.info);
          }),
            (this.info.x = e.clientX),
            (this.info.y = e.clientY);
        },
        touchstart: function(e) {
          let t = e.changedTouches[0];
          (this.info.x = t.clientX), (this.info.y = t.clientY);
        },
        touchmove: function(e) {
          let t = I(e),
            n = e.changedTouches[0],
            i = n.clientX,
            o = n.clientY;
          H(this.info, i, o) &&
            ("start" === this.info.state && D("tap"),
            this.info.addMove({ x: i, y: o }),
            V(this.info, t, n),
            (this.info.state = "track"),
            (this.info.started = !0));
        },
        touchend: function(e) {
          let t = I(e),
            n = e.changedTouches[0];
          this.info.started &&
            ((this.info.state = "end"),
            this.info.addMove({ x: n.clientX, y: n.clientY }),
            V(this.info, t, n));
        },
      }),
      L({
        name: "tap",
        deps: ["mousedown", "click", "touchstart", "touchend"],
        flow: {
          start: ["mousedown", "touchstart"],
          end: ["click", "touchend"],
        },
        emits: ["tap"],
        info: { x: NaN, y: NaN, prevent: !1 },
        reset: function() {
          (this.info.x = NaN), (this.info.y = NaN), (this.info.prevent = !1);
        },
        mousedown: function(e) {
          j(e) && ((this.info.x = e.clientX), (this.info.y = e.clientY));
        },
        click: function(e) {
          j(e) && $(this.info, e);
        },
        touchstart: function(e) {
          const t = e.changedTouches[0];
          (this.info.x = t.clientX), (this.info.y = t.clientY);
        },
        touchend: function(e) {
          $(this.info, e.changedTouches[0], e);
        },
      });
    const U = I,
      q = z;
  },
  function(e, t, n) {
    "use strict";
    n(7);
    var i = n(9),
      o = n(8),
      r = n(42),
      a = n(18),
      s = n(40),
      l = n(37),
      c = n(48);
    const d = Object(o.a)((e) => {
      const t = Object(c.a)(e);
      function n(e) {
        const t = Object.getPrototypeOf(e);
        return t.prototype instanceof o ? t : null;
      }
      function i(e) {
        if (
          !e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", e))
        ) {
          let t = null;
          if (e.hasOwnProperty(JSCompiler_renameProperty("properties", e))) {
            const n = e.properties;
            n &&
              (t = (function(e) {
                const t = {};
                for (let n in e) {
                  const i = e[n];
                  t[n] = "function" == typeof i ? { type: i } : i;
                }
                return t;
              })(n));
          }
          e.__ownProperties = t;
        }
        return e.__ownProperties;
      }
      class o extends t {
        static get observedAttributes() {
          const e = this._properties;
          return e
            ? Object.keys(e).map((e) => this.attributeNameForProperty(e))
            : [];
        }
        static finalize() {
          if (
            !this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))
          ) {
            const e = n(this);
            e && e.finalize(), (this.__finalized = !0), this._finalizeClass();
          }
        }
        static _finalizeClass() {
          const e = i(this);
          e && this.createProperties(e);
        }
        static get _properties() {
          if (
            !this.hasOwnProperty(
              JSCompiler_renameProperty("__properties", this)
            )
          ) {
            const e = n(this);
            this.__properties = Object.assign({}, e && e._properties, i(this));
          }
          return this.__properties;
        }
        static typeForProperty(e) {
          const t = this._properties[e];
          return t && t.type;
        }
        _initializeProperties() {
          this.constructor.finalize(), super._initializeProperties();
        }
        connectedCallback() {
          super.connectedCallback && super.connectedCallback(),
            this._enableProperties();
        }
        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback();
        }
      }
      return o;
    });
    n.d(t, "a", function() {
      return p;
    });
    const u = "3.0.5",
      p = Object(o.a)((e) => {
        const t = d(Object(l.a)(e));
        return class extends t {
          static get polymerElementVersion() {
            return u;
          }
          static _finalizeClass() {
            var e;
            super._finalizeClass(),
              this.hasOwnProperty(JSCompiler_renameProperty("is", this)) &&
                this.is &&
                ((e = this.prototype), h.push(e));
            const t = ((n = this).hasOwnProperty(
              JSCompiler_renameProperty("__ownObservers", n)
            ) ||
              (n.__ownObservers = n.hasOwnProperty(
                JSCompiler_renameProperty("observers", n)
              )
                ? n.observers
                : null),
            n.__ownObservers);
            var n;
            t && this.createObservers(t, this._properties);
            let i = this.template;
            i &&
              ("string" == typeof i
                ? (console.error(
                    "template getter must return HTMLTemplateElement"
                  ),
                  (i = null))
                : (i = i.cloneNode(!0))),
              (this.prototype._template = i);
          }
          static createProperties(e) {
            for (let r in e)
              (t = this.prototype),
                (n = r),
                (i = e[r]),
                (o = e),
                i.computed && (i.readOnly = !0),
                i.computed &&
                  !t._hasReadOnlyEffect(n) &&
                  t._createComputedProperty(n, i.computed, o),
                i.readOnly &&
                  !t._hasReadOnlyEffect(n) &&
                  t._createReadOnlyProperty(n, !i.computed),
                i.reflectToAttribute &&
                  !t._hasReflectEffect(n) &&
                  t._createReflectedProperty(n),
                i.notify &&
                  !t._hasNotifyEffect(n) &&
                  t._createNotifyingProperty(n),
                i.observer &&
                  t._createPropertyObserver(n, i.observer, o[i.observer]),
                t._addPropertyToAttributeMap(n);
            var t, n, i, o;
          }
          static createObservers(e, t) {
            const n = this.prototype;
            for (let i = 0; i < e.length; i++) n._createMethodObserver(e[i], t);
          }
          static get template() {
            return (
              this.hasOwnProperty(
                JSCompiler_renameProperty("_template", this)
              ) ||
                (this._template = this.prototype.hasOwnProperty(
                  JSCompiler_renameProperty("_template", this.prototype)
                )
                  ? this.prototype._template
                  : (function(e) {
                      let t = null;
                      if (
                        e &&
                        (!i.f || i.a) &&
                        ((t = s.a.import(e, "template")), i.f && !t)
                      )
                        throw new Error(
                          `strictTemplatePolicy: expecting dom-module or null template for ${e}`
                        );
                      return t;
                    })(this.is) ||
                    Object.getPrototypeOf(this.prototype).constructor.template),
              this._template
            );
          }
          static set template(e) {
            this._template = e;
          }
          static get importPath() {
            if (
              !this.hasOwnProperty(
                JSCompiler_renameProperty("_importPath", this)
              )
            ) {
              const e = this.importMeta;
              if (e) this._importPath = Object(a.a)(e.url);
              else {
                const e = s.a.import(this.is);
                this._importPath =
                  (e && e.assetpath) ||
                  Object.getPrototypeOf(this.prototype).constructor.importPath;
              }
            }
            return this._importPath;
          }
          constructor() {
            super(),
              this._template,
              this._importPath,
              this.rootPath,
              this.importPath,
              this.root,
              this.$;
          }
          _initializeProperties() {
            0,
              this.constructor.finalize(),
              this.constructor._finalizeTemplate(this.localName),
              super._initializeProperties(),
              (this.rootPath = i.c),
              (this.importPath = this.constructor.importPath);
            let e = (function(e) {
              if (
                !e.hasOwnProperty(
                  JSCompiler_renameProperty("__propertyDefaults", e)
                )
              ) {
                e.__propertyDefaults = null;
                let t = e._properties;
                for (let n in t) {
                  let i = t[n];
                  "value" in i &&
                    ((e.__propertyDefaults = e.__propertyDefaults || {}),
                    (e.__propertyDefaults[n] = i));
                }
              }
              return e.__propertyDefaults;
            })(this.constructor);
            if (e)
              for (let t in e) {
                let n = e[t];
                if (!this.hasOwnProperty(t)) {
                  let e =
                    "function" == typeof n.value ? n.value.call(this) : n.value;
                  this._hasAccessor(t)
                    ? this._setPendingProperty(t, e, !0)
                    : (this[t] = e);
                }
              }
          }
          static _processStyleText(e, t) {
            return Object(a.b)(e, t);
          }
          static _finalizeTemplate(e) {
            const t = this.prototype._template;
            if (t && !t.__polymerFinalized) {
              t.__polymerFinalized = !0;
              const n = this.importPath;
              !(function(e, t, n, i) {
                const o = t.content.querySelectorAll("style"),
                  a = Object(r.c)(t),
                  s = Object(r.b)(n),
                  l = t.content.firstElementChild;
                for (let r = 0; r < s.length; r++) {
                  let n = s[r];
                  (n.textContent = e._processStyleText(n.textContent, i)),
                    t.content.insertBefore(n, l);
                }
                let c = 0;
                for (let r = 0; r < a.length; r++) {
                  let t = a[r],
                    n = o[c];
                  n !== t
                    ? ((t = t.cloneNode(!0)), n.parentNode.insertBefore(t, n))
                    : c++,
                    (t.textContent = e._processStyleText(t.textContent, i));
                }
                window.ShadyCSS && window.ShadyCSS.prepareTemplate(t, n);
              })(this, t, e, n ? Object(a.c)(n) : ""),
                this.prototype._bindTemplate(t);
            }
          }
          connectedCallback() {
            window.ShadyCSS &&
              this._template &&
              window.ShadyCSS.styleElement(this),
              super.connectedCallback();
          }
          ready() {
            this._template &&
              ((this.root = this._stampTemplate(this._template)),
              (this.$ = this.root.$)),
              super.ready();
          }
          _readyClients() {
            this._template && (this.root = this._attachDom(this.root)),
              super._readyClients();
          }
          _attachDom(e) {
            if (this.attachShadow)
              return e
                ? (this.shadowRoot || this.attachShadow({ mode: "open" }),
                  this.shadowRoot.appendChild(e),
                  this.shadowRoot)
                : null;
            throw new Error(
              "ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`."
            );
          }
          updateStyles(e) {
            window.ShadyCSS && window.ShadyCSS.styleSubtree(this, e);
          }
          resolveUrl(e, t) {
            return (
              !t && this.importPath && (t = Object(a.c)(this.importPath)),
              Object(a.c)(e, t)
            );
          }
          static _parseTemplateContent(e, t, n) {
            return (
              (t.dynamicFns = t.dynamicFns || this._properties),
              super._parseTemplateContent(e, t, n)
            );
          }
        };
      });
    const h = [];
  },
  function(e, t, n) {
    "use strict";
    n(7);
    var i = n(8),
      o = n(2),
      r = n(22),
      a = n(47);
    const s = { "dom-if": !0, "dom-repeat": !0 };
    function l(e) {
      let t = e.getAttribute("is");
      if (t && s[t]) {
        let n = e;
        for (
          n.removeAttribute("is"),
            e = n.ownerDocument.createElement(t),
            n.parentNode.replaceChild(e, n),
            e.appendChild(n);
          n.attributes.length;

        )
          e.setAttribute(n.attributes[0].name, n.attributes[0].value),
            n.removeAttribute(n.attributes[0].name);
      }
      return e;
    }
    function c(e, t) {
      let n = t.parentInfo && c(e, t.parentInfo);
      if (!n) return e;
      for (let i = n.firstChild, o = 0; i; i = i.nextSibling)
        if (t.parentIndex === o++) return i;
    }
    function d(e, t, n, i) {
      i.id && (t[i.id] = n);
    }
    function u(e, t, n) {
      if (n.events && n.events.length)
        for (let i, o = 0, r = n.events; o < r.length && (i = r[o]); o++)
          e._addMethodEventListenerToNode(t, i.name, i.value, e);
    }
    function p(e, t, n) {
      n.templateInfo && (t._templateInfo = n.templateInfo);
    }
    const h = Object(i.a)((e) => {
      return class extends e {
        static _parseTemplate(e, t) {
          if (!e._templateInfo) {
            let n = (e._templateInfo = {});
            (n.nodeInfoList = []),
              (n.stripWhiteSpace =
                (t && t.stripWhiteSpace) || e.hasAttribute("strip-whitespace")),
              this._parseTemplateContent(e, n, { parent: null });
          }
          return e._templateInfo;
        }
        static _parseTemplateContent(e, t, n) {
          return this._parseTemplateNode(e.content, t, n);
        }
        static _parseTemplateNode(e, t, n) {
          let i,
            o = e;
          return (
            "template" != o.localName || o.hasAttribute("preserve-content")
              ? "slot" === o.localName && (t.hasInsertionPoint = !0)
              : (i = this._parseTemplateNestedTemplate(o, t, n) || i),
            o.firstChild && (i = this._parseTemplateChildNodes(o, t, n) || i),
            o.hasAttributes &&
              o.hasAttributes() &&
              (i = this._parseTemplateNodeAttributes(o, t, n) || i),
            i
          );
        }
        static _parseTemplateChildNodes(e, t, n) {
          if ("script" !== e.localName && "style" !== e.localName)
            for (let i, o = e.firstChild, r = 0; o; o = i) {
              if (
                ("template" == o.localName && (o = l(o)),
                (i = o.nextSibling),
                o.nodeType === Node.TEXT_NODE)
              ) {
                let n = i;
                for (; n && n.nodeType === Node.TEXT_NODE; )
                  (o.textContent += n.textContent),
                    (i = n.nextSibling),
                    e.removeChild(n),
                    (n = i);
                if (t.stripWhiteSpace && !o.textContent.trim()) {
                  e.removeChild(o);
                  continue;
                }
              }
              let a = { parentIndex: r, parentInfo: n };
              this._parseTemplateNode(o, t, a) &&
                (a.infoIndex = t.nodeInfoList.push(a) - 1),
                o.parentNode && r++;
            }
        }
        static _parseTemplateNestedTemplate(e, t, n) {
          let i = this._parseTemplate(e, t);
          return (
            (i.content = e.content.ownerDocument.createDocumentFragment()).appendChild(
              e.content
            ),
            (n.templateInfo = i),
            !0
          );
        }
        static _parseTemplateNodeAttributes(e, t, n) {
          let i = !1,
            o = Array.from(e.attributes);
          for (let r, a = o.length - 1; (r = o[a]); a--)
            i = this._parseTemplateNodeAttribute(e, t, n, r.name, r.value) || i;
          return i;
        }
        static _parseTemplateNodeAttribute(e, t, n, i, o) {
          return "on-" === i.slice(0, 3)
            ? (e.removeAttribute(i),
              (n.events = n.events || []),
              n.events.push({ name: i.slice(3), value: o }),
              !0)
            : "id" === i && ((n.id = o), !0);
        }
        static _contentForTemplate(e) {
          let t = e._templateInfo;
          return (t && t.content) || e.content;
        }
        _stampTemplate(e) {
          e &&
            !e.content &&
            window.HTMLTemplateElement &&
            HTMLTemplateElement.decorate &&
            HTMLTemplateElement.decorate(e);
          let t = this.constructor._parseTemplate(e),
            n = t.nodeInfoList,
            i = t.content || e.content,
            o = document.importNode(i, !0);
          o.__noInsertionPoint = !t.hasInsertionPoint;
          let r = (o.nodeList = new Array(n.length));
          o.$ = {};
          for (let a, s = 0, l = n.length; s < l && (a = n[s]); s++) {
            let e = (r[s] = c(o, a));
            d(0, o.$, e, a), p(0, e, a), u(this, e, a);
          }
          return (o = o);
        }
        _addMethodEventListenerToNode(e, t, n, i) {
          let o = (function(e, t, n) {
            return (
              (e = e._methodHost || e),
              function(t) {
                e[n]
                  ? e[n](t, t.detail)
                  : console.warn("listener method `" + n + "` not defined");
              }
            );
          })((i = i || e), 0, n);
          return this._addEventListenerToNode(e, t, o), o;
        }
        _addEventListenerToNode(e, t, n) {
          e.addEventListener(t, n);
        }
        _removeEventListenerFromNode(e, t, n) {
          e.removeEventListener(t, n);
        }
      };
    });
    var f = n(9);
    n.d(t, "a", function() {
      return $;
    });
    let b = 0;
    const m = {
        COMPUTE: "__computeEffects",
        REFLECT: "__reflectEffects",
        NOTIFY: "__notifyEffects",
        PROPAGATE: "__propagateEffects",
        OBSERVE: "__observeEffects",
        READ_ONLY: "__readOnly",
      },
      g = /[A-Z]/;
    let _;
    function y(e, t) {
      let n = e[t];
      if (n) {
        if (!e.hasOwnProperty(t)) {
          n = e[t] = Object.create(e[t]);
          for (let e in n) {
            let t = n[e],
              i = (n[e] = Array(t.length));
            for (let e = 0; e < t.length; e++) i[e] = t[e];
          }
        }
      } else n = e[t] = {};
      return n;
    }
    function v(e, t, n, i, o, r) {
      if (t) {
        let a = !1,
          s = b++;
        for (let l in n) w(e, t, s, l, n, i, o, r) && (a = !0);
        return a;
      }
      return !1;
    }
    function w(e, t, n, i, r, a, s, l) {
      let c = !1,
        d = t[s ? Object(o.g)(i) : i];
      if (d)
        for (let o, u = 0, p = d.length; u < p && (o = d[u]); u++)
          (o.info && o.info.lastRun === n) ||
            (s && !x(i, o.trigger)) ||
            (o.info && (o.info.lastRun = n),
            o.fn(e, i, r, a, o.info, s, l),
            (c = !0));
      return c;
    }
    function x(e, t) {
      if (t) {
        let n = t.name;
        return (
          n == e ||
          (t.structured && Object(o.b)(n, e)) ||
          (t.wildcard && Object(o.c)(n, e))
        );
      }
      return !0;
    }
    function k(e, t, n, i, o) {
      let r = "string" == typeof o.method ? e[o.method] : o.method,
        a = o.property;
      r
        ? r.call(e, e.__data[a], i[a])
        : o.dynamicFn ||
          console.warn("observer method `" + o.method + "` not defined");
    }
    function C(e, t, n) {
      let i = Object(o.g)(t);
      if (i !== t) {
        return S(e, Object(r.a)(i) + "-changed", n[t], t), !0;
      }
      return !1;
    }
    function S(e, t, n, i) {
      let o = { value: n, queueProperty: !0 };
      i && (o.path = i), e.dispatchEvent(new CustomEvent(t, { detail: o }));
    }
    function j(e, t, n, i, r, a) {
      let s = (a ? Object(o.g)(t) : t) != t ? t : null,
        l = s ? Object(o.a)(e, s) : e.__data[t];
      s && void 0 === l && (l = n[t]), S(e, r.eventName, l, s);
    }
    function O(e, t, n, i, o) {
      let r = e.__data[t];
      f.d && (r = Object(f.d)(r, o.attrName, "attribute", e)),
        e._propertyToAttribute(t, o.attrName, r);
    }
    function E(e, t, n, i, o) {
      let r = R(e, t, n, i, o),
        a = o.methodInfo;
      e.__dataHasAccessor && e.__dataHasAccessor[a]
        ? e._setPendingProperty(a, r, !0)
        : (e[a] = r);
    }
    function A(e, t, n, i, o, a, s) {
      n.bindings = n.bindings || [];
      let l = {
        kind: i,
        target: o,
        parts: a,
        literal: s,
        isCompound: 1 !== a.length,
      };
      if (
        (n.bindings.push(l),
        (function(e) {
          return (
            Boolean(e.target) &&
            "attribute" != e.kind &&
            "text" != e.kind &&
            !e.isCompound &&
            "{" === e.parts[0].mode
          );
        })(l))
      ) {
        let { event: e, negate: t } = l.parts[0];
        (l.listenerEvent = e || Object(r.a)(o) + "-changed"),
          (l.listenerNegate = t);
      }
      let c = t.nodeInfoList.length;
      for (let r = 0; r < l.parts.length; r++) {
        let n = l.parts[r];
        (n.compoundIndex = r), P(e, t, l, n, c);
      }
    }
    function P(e, t, n, i, o) {
      if (!i.literal)
        if ("attribute" === n.kind && "-" === n.target[0])
          console.warn(
            "Cannot set attribute " +
              n.target +
              ' because "-" is not a valid attribute starting character'
          );
        else {
          let r = i.dependencies,
            a = { index: o, binding: n, part: i, evaluator: e };
          for (let n = 0; n < r.length; n++) {
            let i = r[n];
            "string" == typeof i && ((i = B(i)).wildcard = !0),
              e._addTemplatePropertyEffect(t, i.rootProperty, {
                fn: T,
                info: a,
                trigger: i,
              });
          }
        }
    }
    function T(e, t, n, i, r, a, s) {
      let l = s[r.index],
        c = r.binding,
        d = r.part;
      if (
        a &&
        d.source &&
        t.length > d.source.length &&
        "property" == c.kind &&
        !c.isCompound &&
        l.__isPropertyEffectsClient &&
        l.__dataHasAccessor &&
        l.__dataHasAccessor[c.target]
      ) {
        let i = n[t];
        (t = Object(o.i)(d.source, c.target, t)),
          l._setPendingPropertyOrPath(t, i, !1, !0) && e._enqueueClient(l);
      } else {
        !(function(e, t, n, i, o) {
          (o = (function(e, t, n, i) {
            if (n.isCompound) {
              let o = e.__dataCompoundStorage[n.target];
              (o[i.compoundIndex] = t), (t = o.join(""));
            }
            return (
              "attribute" !== n.kind &&
                (("textContent" !== n.target &&
                  ("value" !== n.target ||
                    ("input" !== e.localName && "textarea" !== e.localName))) ||
                  (t = null == t ? "" : t)),
              t
            );
          })(t, o, n, i)),
            f.d && (o = Object(f.d)(o, n.target, n.kind, t));
          if ("attribute" == n.kind) e._valueToNodeAttribute(t, o, n.target);
          else {
            let i = n.target;
            t.__isPropertyEffectsClient &&
            t.__dataHasAccessor &&
            t.__dataHasAccessor[i]
              ? (t[m.READ_ONLY] && t[m.READ_ONLY][i]) ||
                (t._setPendingProperty(i, o) && e._enqueueClient(t))
              : e._setUnmanagedPropertyToNode(t, i, o);
          }
        })(e, l, c, d, r.evaluator._evaluateBinding(e, d, t, n, i, a));
      }
    }
    function I(e, t) {
      if (t.isCompound) {
        let n = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}),
          i = t.parts,
          o = new Array(i.length);
        for (let e = 0; e < i.length; e++) o[e] = i[e].literal;
        let r = t.target;
        (n[r] = o), t.literal && "property" == t.kind && (e[r] = t.literal);
      }
    }
    function N(e, t, n) {
      if (n.listenerEvent) {
        let i = n.parts[0];
        e.addEventListener(n.listenerEvent, function(e) {
          !(function(e, t, n, i, r) {
            let a,
              s = e.detail,
              l = s && s.path;
            l
              ? ((i = Object(o.i)(n, i, l)), (a = s && s.value))
              : (a = e.currentTarget[n]),
              (a = r ? !a : a),
              (t[m.READ_ONLY] && t[m.READ_ONLY][i]) ||
                !t._setPendingPropertyOrPath(i, a, !0, Boolean(l)) ||
                (s && s.queueProperty) ||
                t._invalidateProperties();
          })(e, t, n.target, i.source, i.negate);
        });
      }
    }
    function z(e, t, n, i, o, r) {
      r = t.static || (r && ("object" != typeof r || r[t.methodName]));
      let a = {
        methodName: t.methodName,
        args: t.args,
        methodInfo: o,
        dynamicFn: r,
      };
      for (let s, l = 0; l < t.args.length && (s = t.args[l]); l++)
        s.literal ||
          e._addPropertyEffect(s.rootProperty, n, {
            fn: i,
            info: a,
            trigger: s,
          });
      r && e._addPropertyEffect(t.methodName, n, { fn: i, info: a });
    }
    function R(e, t, n, i, o) {
      let r = e._methodHost || e,
        a = r[o.methodName];
      if (a) {
        let i = e._marshalArgs(o.args, t, n);
        return a.apply(r, i);
      }
      o.dynamicFn || console.warn("method `" + o.methodName + "` not defined");
    }
    const L = [],
      M = new RegExp(
        "(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
        "g"
      );
    function F(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) {
        t += e[n].literal || "";
      }
      return t;
    }
    function D(e) {
      let t = e.match(/([^\s]+?)\(([\s\S]*)\)/);
      if (t) {
        let e = { methodName: t[1], static: !0, args: L };
        if (t[2].trim()) {
          return (function(e, t) {
            return (
              (t.args = e.map(function(e) {
                let n = B(e);
                return n.literal || (t.static = !1), n;
              }, this)),
              t
            );
          })(t[2].replace(/\\,/g, "&comma;").split(","), e);
        }
        return e;
      }
      return null;
    }
    function B(e) {
      let t = e
          .trim()
          .replace(/&comma;/g, ",")
          .replace(/\\(.)/g, "$1"),
        n = { name: t, value: "", literal: !1 },
        i = t[0];
      switch (("-" === i && (i = t[1]), i >= "0" && i <= "9" && (i = "#"), i)) {
        case "'":
        case '"':
          (n.value = t.slice(1, -1)), (n.literal = !0);
          break;
        case "#":
          (n.value = Number(t)), (n.literal = !0);
      }
      return (
        n.literal ||
          ((n.rootProperty = Object(o.g)(t)),
          (n.structured = Object(o.d)(t)),
          n.structured &&
            ((n.wildcard = ".*" == t.slice(-2)),
            n.wildcard && (n.name = t.slice(0, -2)))),
        n
      );
    }
    function H(e, t, n, i) {
      let o = n + ".splices";
      e.notifyPath(o, { indexSplices: i }),
        e.notifyPath(n + ".length", t.length),
        (e.__data[o] = { indexSplices: null });
    }
    function V(e, t, n, i, o, r) {
      H(e, t, n, [
        { index: i, addedCount: o, removed: r, object: t, type: "splice" },
      ]);
    }
    const $ = Object(i.a)((e) => {
      const t = h(Object(a.a)(e));
      class n extends t {
        constructor() {
          super(),
            (this.__isPropertyEffectsClient = !0),
            (this.__dataCounter = 0),
            this.__dataClientsReady,
            this.__dataPendingClients,
            this.__dataToNotify,
            this.__dataLinkedPaths,
            this.__dataHasPaths,
            this.__dataCompoundStorage,
            this.__dataHost,
            this.__dataTemp,
            this.__dataClientsInitialized,
            this.__data,
            this.__dataPending,
            this.__dataOld,
            this.__computeEffects,
            this.__reflectEffects,
            this.__notifyEffects,
            this.__propagateEffects,
            this.__observeEffects,
            this.__readOnly,
            this.__templateInfo;
        }
        get PROPERTY_EFFECT_TYPES() {
          return m;
        }
        _initializeProperties() {
          super._initializeProperties(),
            U.registerHost(this),
            (this.__dataClientsReady = !1),
            (this.__dataPendingClients = null),
            (this.__dataToNotify = null),
            (this.__dataLinkedPaths = null),
            (this.__dataHasPaths = !1),
            (this.__dataCompoundStorage = this.__dataCompoundStorage || null),
            (this.__dataHost = this.__dataHost || null),
            (this.__dataTemp = {}),
            (this.__dataClientsInitialized = !1);
        }
        _initializeProtoProperties(e) {
          (this.__data = Object.create(e)),
            (this.__dataPending = Object.create(e)),
            (this.__dataOld = {});
        }
        _initializeInstanceProperties(e) {
          let t = this[m.READ_ONLY];
          for (let n in e)
            (t && t[n]) ||
              ((this.__dataPending = this.__dataPending || {}),
              (this.__dataOld = this.__dataOld || {}),
              (this.__data[n] = this.__dataPending[n] = e[n]));
        }
        _addPropertyEffect(e, t, n) {
          this._createPropertyAccessor(e, t == m.READ_ONLY);
          let i = y(this, t)[e];
          i || (i = this[t][e] = []), i.push(n);
        }
        _removePropertyEffect(e, t, n) {
          let i = y(this, t)[e],
            o = i.indexOf(n);
          o >= 0 && i.splice(o, 1);
        }
        _hasPropertyEffect(e, t) {
          let n = this[t];
          return Boolean(n && n[e]);
        }
        _hasReadOnlyEffect(e) {
          return this._hasPropertyEffect(e, m.READ_ONLY);
        }
        _hasNotifyEffect(e) {
          return this._hasPropertyEffect(e, m.NOTIFY);
        }
        _hasReflectEffect(e) {
          return this._hasPropertyEffect(e, m.REFLECT);
        }
        _hasComputedEffect(e) {
          return this._hasPropertyEffect(e, m.COMPUTE);
        }
        _setPendingPropertyOrPath(e, t, n, i) {
          if (i || Object(o.g)(Array.isArray(e) ? e[0] : e) !== e) {
            if (!i) {
              let n = Object(o.a)(this, e);
              if (
                !(e = Object(o.h)(this, e, t)) ||
                !super._shouldPropertyChange(e, t, n)
              )
                return !1;
            }
            if (((this.__dataHasPaths = !0), this._setPendingProperty(e, t, n)))
              return (
                (function(e, t, n) {
                  let i = e.__dataLinkedPaths;
                  if (i) {
                    let r;
                    for (let a in i) {
                      let s = i[a];
                      Object(o.c)(a, t)
                        ? ((r = Object(o.i)(a, s, t)),
                          e._setPendingPropertyOrPath(r, n, !0, !0))
                        : Object(o.c)(s, t) &&
                          ((r = Object(o.i)(s, a, t)),
                          e._setPendingPropertyOrPath(r, n, !0, !0));
                    }
                  }
                })(this, e, t),
                !0
              );
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[e])
              return this._setPendingProperty(e, t, n);
            this[e] = t;
          }
          return !1;
        }
        _setUnmanagedPropertyToNode(e, t, n) {
          (n === e[t] && "object" != typeof n) || (e[t] = n);
        }
        _setPendingProperty(e, t, n) {
          let i = this.__dataHasPaths && Object(o.d)(e),
            r = i ? this.__dataTemp : this.__data;
          return (
            !!this._shouldPropertyChange(e, t, r[e]) &&
            (this.__dataPending ||
              ((this.__dataPending = {}), (this.__dataOld = {})),
            e in this.__dataOld || (this.__dataOld[e] = this.__data[e]),
            i ? (this.__dataTemp[e] = t) : (this.__data[e] = t),
            (this.__dataPending[e] = t),
            (i || (this[m.NOTIFY] && this[m.NOTIFY][e])) &&
              ((this.__dataToNotify = this.__dataToNotify || {}),
              (this.__dataToNotify[e] = n)),
            !0)
          );
        }
        _setProperty(e, t) {
          this._setPendingProperty(e, t, !0) && this._invalidateProperties();
        }
        _invalidateProperties() {
          this.__dataReady && this._flushProperties();
        }
        _enqueueClient(e) {
          (this.__dataPendingClients = this.__dataPendingClients || []),
            e !== this && this.__dataPendingClients.push(e);
        }
        _flushProperties() {
          this.__dataCounter++, super._flushProperties(), this.__dataCounter--;
        }
        _flushClients() {
          this.__dataClientsReady
            ? this.__enableOrFlushClients()
            : ((this.__dataClientsReady = !0),
              this._readyClients(),
              (this.__dataReady = !0));
        }
        __enableOrFlushClients() {
          let e = this.__dataPendingClients;
          if (e) {
            this.__dataPendingClients = null;
            for (let t = 0; t < e.length; t++) {
              let n = e[t];
              n.__dataEnabled
                ? n.__dataPending && n._flushProperties()
                : n._enableProperties();
            }
          }
        }
        _readyClients() {
          this.__enableOrFlushClients();
        }
        setProperties(e, t) {
          for (let n in e)
            (!t && this[m.READ_ONLY] && this[m.READ_ONLY][n]) ||
              this._setPendingPropertyOrPath(n, e[n], !0);
          this._invalidateProperties();
        }
        ready() {
          this._flushProperties(),
            this.__dataClientsReady || this._flushClients(),
            this.__dataPending && this._flushProperties();
        }
        _propertiesChanged(e, t, n) {
          let i = this.__dataHasPaths;
          (this.__dataHasPaths = !1),
            (function(e, t, n, i) {
              let o = e[m.COMPUTE];
              if (o) {
                let r = t;
                for (; v(e, o, r, n, i); )
                  Object.assign(n, e.__dataOld),
                    Object.assign(t, e.__dataPending),
                    (r = e.__dataPending),
                    (e.__dataPending = null);
              }
            })(this, t, n, i);
          let o = this.__dataToNotify;
          (this.__dataToNotify = null),
            this._propagatePropertyChanges(t, n, i),
            this._flushClients(),
            v(this, this[m.REFLECT], t, n, i),
            v(this, this[m.OBSERVE], t, n, i),
            o &&
              (function(e, t, n, i, o) {
                let r,
                  a,
                  s = e[m.NOTIFY],
                  l = b++;
                for (let c in t)
                  t[c] &&
                    (s && w(e, s, l, c, n, i, o)
                      ? (r = !0)
                      : o && C(e, c, n) && (r = !0));
                r &&
                  (a = e.__dataHost) &&
                  a._invalidateProperties &&
                  a._invalidateProperties();
              })(this, o, t, n, i),
            1 == this.__dataCounter && (this.__dataTemp = {});
        }
        _propagatePropertyChanges(e, t, n) {
          this[m.PROPAGATE] && v(this, this[m.PROPAGATE], e, t, n);
          let i = this.__templateInfo;
          for (; i; )
            v(this, i.propertyEffects, e, t, n, i.nodeList),
              (i = i.nextTemplateInfo);
        }
        linkPaths(e, t) {
          (e = Object(o.f)(e)),
            (t = Object(o.f)(t)),
            (this.__dataLinkedPaths = this.__dataLinkedPaths || {}),
            (this.__dataLinkedPaths[e] = t);
        }
        unlinkPaths(e) {
          (e = Object(o.f)(e)),
            this.__dataLinkedPaths && delete this.__dataLinkedPaths[e];
        }
        notifySplices(e, t) {
          let n = { path: "" };
          H(this, Object(o.a)(this, e, n), n.path, t);
        }
        get(e, t) {
          return Object(o.a)(t || this, e);
        }
        set(e, t, n) {
          n
            ? Object(o.h)(n, e, t)
            : (this[m.READ_ONLY] && this[m.READ_ONLY][e]) ||
              (this._setPendingPropertyOrPath(e, t, !0) &&
                this._invalidateProperties());
        }
        push(e, ...t) {
          let n = { path: "" },
            i = Object(o.a)(this, e, n),
            r = i.length,
            a = i.push(...t);
          return t.length && V(this, i, n.path, r, t.length, []), a;
        }
        pop(e) {
          let t = { path: "" },
            n = Object(o.a)(this, e, t),
            i = Boolean(n.length),
            r = n.pop();
          return i && V(this, n, t.path, n.length, 0, [r]), r;
        }
        splice(e, t, n, ...i) {
          let r,
            a = { path: "" },
            s = Object(o.a)(this, e, a);
          return (
            t < 0 ? (t = s.length - Math.floor(-t)) : t && (t = Math.floor(t)),
            (r = 2 === arguments.length ? s.splice(t) : s.splice(t, n, ...i)),
            (i.length || r.length) && V(this, s, a.path, t, i.length, r),
            r
          );
        }
        shift(e) {
          let t = { path: "" },
            n = Object(o.a)(this, e, t),
            i = Boolean(n.length),
            r = n.shift();
          return i && V(this, n, t.path, 0, 0, [r]), r;
        }
        unshift(e, ...t) {
          let n = { path: "" },
            i = Object(o.a)(this, e, n),
            r = i.unshift(...t);
          return t.length && V(this, i, n.path, 0, t.length, []), r;
        }
        notifyPath(e, t) {
          let n;
          if (1 == arguments.length) {
            let i = { path: "" };
            (t = Object(o.a)(this, e, i)), (n = i.path);
          } else n = Array.isArray(e) ? Object(o.f)(e) : e;
          this._setPendingPropertyOrPath(n, t, !0, !0) &&
            this._invalidateProperties();
        }
        _createReadOnlyProperty(e, t) {
          var n;
          this._addPropertyEffect(e, m.READ_ONLY),
            t &&
              (this[
                "_set" + ((n = e), n[0].toUpperCase() + n.substring(1))
              ] = function(t) {
                this._setProperty(e, t);
              });
        }
        _createPropertyObserver(e, t, n) {
          let i = { property: e, method: t, dynamicFn: Boolean(n) };
          this._addPropertyEffect(e, m.OBSERVE, {
            fn: k,
            info: i,
            trigger: { name: e },
          }),
            n &&
              this._addPropertyEffect(t, m.OBSERVE, {
                fn: k,
                info: i,
                trigger: { name: t },
              });
        }
        _createMethodObserver(e, t) {
          let n = D(e);
          if (!n) throw new Error("Malformed observer expression '" + e + "'");
          z(this, n, m.OBSERVE, R, null, t);
        }
        _createNotifyingProperty(e) {
          this._addPropertyEffect(e, m.NOTIFY, {
            fn: j,
            info: { eventName: Object(r.a)(e) + "-changed", property: e },
          });
        }
        _createReflectedProperty(e) {
          let t = this.constructor.attributeNameForProperty(e);
          "-" === t[0]
            ? console.warn(
                "Property " +
                  e +
                  " cannot be reflected to attribute " +
                  t +
                  ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'
              )
            : this._addPropertyEffect(e, m.REFLECT, {
                fn: O,
                info: { attrName: t },
              });
        }
        _createComputedProperty(e, t, n) {
          let i = D(t);
          if (!i) throw new Error("Malformed computed expression '" + t + "'");
          z(this, i, m.COMPUTE, E, e, n);
        }
        _marshalArgs(e, t, n) {
          const i = this.__data;
          let r = [];
          for (let a = 0, s = e.length; a < s; a++) {
            let s,
              l = e[a],
              c = l.name;
            if (
              (l.literal
                ? (s = l.value)
                : l.structured
                ? void 0 === (s = Object(o.a)(i, c)) && (s = n[c])
                : (s = i[c]),
              l.wildcard)
            ) {
              let e = 0 === c.indexOf(t + "."),
                i = 0 === t.indexOf(c) && !e;
              r[a] = { path: i ? t : c, value: i ? n[t] : s, base: s };
            } else r[a] = s;
          }
          return r;
        }
        static addPropertyEffect(e, t, n) {
          this.prototype._addPropertyEffect(e, t, n);
        }
        static createPropertyObserver(e, t, n) {
          this.prototype._createPropertyObserver(e, t, n);
        }
        static createMethodObserver(e, t) {
          this.prototype._createMethodObserver(e, t);
        }
        static createNotifyingProperty(e) {
          this.prototype._createNotifyingProperty(e);
        }
        static createReadOnlyProperty(e, t) {
          this.prototype._createReadOnlyProperty(e, t);
        }
        static createReflectedProperty(e) {
          this.prototype._createReflectedProperty(e);
        }
        static createComputedProperty(e, t, n) {
          this.prototype._createComputedProperty(e, t, n);
        }
        static bindTemplate(e) {
          return this.prototype._bindTemplate(e);
        }
        _bindTemplate(e, t) {
          let n = this.constructor._parseTemplate(e),
            i = this.__templateInfo == n;
          if (!i)
            for (let o in n.propertyEffects) this._createPropertyAccessor(o);
          if (
            t &&
            (((n = Object.create(n)).wasPreBound = i),
            !i && this.__templateInfo)
          ) {
            let e = this.__templateInfoLast || this.__templateInfo;
            return (
              (this.__templateInfoLast = e.nextTemplateInfo = n),
              (n.previousTemplateInfo = e),
              n
            );
          }
          return (this.__templateInfo = n);
        }
        static _addTemplatePropertyEffect(e, t, n) {
          (e.hostProps = e.hostProps || {})[t] = !0;
          let i = (e.propertyEffects = e.propertyEffects || {});
          (i[t] = i[t] || []).push(n);
        }
        _stampTemplate(e) {
          U.beginHosting(this);
          let t = super._stampTemplate(e);
          U.endHosting(this);
          let n = this._bindTemplate(e, !0);
          if (((n.nodeList = t.nodeList), !n.wasPreBound)) {
            let e = (n.childNodes = []);
            for (let n = t.firstChild; n; n = n.nextSibling) e.push(n);
          }
          return (
            (t.templateInfo = n),
            (function(e, t) {
              let { nodeList: n, nodeInfoList: i } = t;
              if (i.length)
                for (let o = 0; o < i.length; o++) {
                  let t = i[o],
                    r = n[o],
                    a = t.bindings;
                  if (a)
                    for (let n = 0; n < a.length; n++) {
                      let t = a[n];
                      I(r, t), N(r, e, t);
                    }
                  r.__dataHost = e;
                }
            })(this, n),
            this.__dataReady &&
              v(this, n.propertyEffects, this.__data, null, !1, n.nodeList),
            t
          );
        }
        _removeBoundDom(e) {
          let t = e.templateInfo;
          t.previousTemplateInfo &&
            (t.previousTemplateInfo.nextTemplateInfo = t.nextTemplateInfo),
            t.nextTemplateInfo &&
              (t.nextTemplateInfo.previousTemplateInfo =
                t.previousTemplateInfo),
            this.__templateInfoLast == t &&
              (this.__templateInfoLast = t.previousTemplateInfo),
            (t.previousTemplateInfo = t.nextTemplateInfo = null);
          let n = t.childNodes;
          for (let i = 0; i < n.length; i++) {
            let e = n[i];
            e.parentNode.removeChild(e);
          }
        }
        static _parseTemplateNode(e, t, n) {
          let i = super._parseTemplateNode(e, t, n);
          if (e.nodeType === Node.TEXT_NODE) {
            let o = this._parseBindings(e.textContent, t);
            o &&
              ((e.textContent = F(o) || " "),
              A(this, t, n, "text", "textContent", o),
              (i = !0));
          }
          return i;
        }
        static _parseTemplateNodeAttribute(e, t, n, i, o) {
          let a = this._parseBindings(o, t);
          if (a) {
            let o = i,
              s = "property";
            g.test(i)
              ? (s = "attribute")
              : "$" == i[i.length - 1] &&
                ((i = i.slice(0, -1)), (s = "attribute"));
            let l = F(a);
            return (
              l && "attribute" == s && e.setAttribute(i, l),
              "input" === e.localName && "value" === o && e.setAttribute(o, ""),
              e.removeAttribute(o),
              "property" === s && (i = Object(r.b)(i)),
              A(this, t, n, s, i, a, l),
              !0
            );
          }
          return super._parseTemplateNodeAttribute(e, t, n, i, o);
        }
        static _parseTemplateNestedTemplate(e, t, n) {
          let i = super._parseTemplateNestedTemplate(e, t, n),
            o = n.templateInfo.hostProps;
          for (let r in o) {
            A(this, t, n, "property", "_host_" + r, [
              { mode: "{", source: r, dependencies: [r] },
            ]);
          }
          return i;
        }
        static _parseBindings(e, t) {
          let n,
            i = [],
            o = 0;
          for (; null !== (n = M.exec(e)); ) {
            n.index > o && i.push({ literal: e.slice(o, n.index) });
            let r = n[1][0],
              a = Boolean(n[2]),
              s = n[3].trim(),
              l = !1,
              c = "",
              d = -1;
            "{" == r &&
              (d = s.indexOf("::")) > 0 &&
              ((c = s.substring(d + 2)), (s = s.substring(0, d)), (l = !0));
            let u = D(s),
              p = [];
            if (u) {
              let { args: e, methodName: n } = u;
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                n.literal || p.push(n);
              }
              let i = t.dynamicFns;
              ((i && i[n]) || u.static) && (p.push(n), (u.dynamicFn = !0));
            } else p.push(s);
            i.push({
              source: s,
              mode: r,
              negate: a,
              customEvent: l,
              signature: u,
              dependencies: p,
              event: c,
            }),
              (o = M.lastIndex);
          }
          if (o && o < e.length) {
            let t = e.substring(o);
            t && i.push({ literal: t });
          }
          return i.length ? i : null;
        }
        static _evaluateBinding(e, t, n, i, r, a) {
          let s;
          return (
            (s = t.signature
              ? R(e, n, i, 0, t.signature)
              : n != t.source
              ? Object(o.a)(e, t.source)
              : a && Object(o.d)(n)
              ? Object(o.a)(e, n)
              : e.__data[n]),
            t.negate && (s = !s),
            s
          );
        }
      }
      return (_ = n), n;
    });
    const U = new class {
      constructor() {
        this.stack = [];
      }
      registerHost(e) {
        this.stack.length &&
          this.stack[this.stack.length - 1]._enqueueClient(e);
      }
      beginHosting(e) {
        this.stack.push(e);
      }
      endHosting(e) {
        let t = this.stack.length;
        t && this.stack[t - 1] == e && this.stack.pop();
      }
    }();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var i = n(17),
      o = n(6);
    class r {
      constructor(e, t, n) {
        (this.__parts = []),
          (this.template = e),
          (this.processor = t),
          (this.options = n);
      }
      update(e) {
        let t = 0;
        for (const n of this.__parts) void 0 !== n && n.setValue(e[t]), t++;
        for (const n of this.__parts) void 0 !== n && n.commit();
      }
      _clone() {
        const e = i.a
            ? this.template.element.content.cloneNode(!0)
            : document.importNode(this.template.element.content, !0),
          t = [],
          n = this.template.parts,
          r = document.createTreeWalker(e, 133, null, !1);
        let a,
          s = 0,
          l = 0,
          c = r.nextNode();
        for (; s < n.length; )
          if (((a = n[s]), Object(o.d)(a))) {
            for (; l < a.index; )
              l++,
                "TEMPLATE" === c.nodeName &&
                  (t.push(c), (r.currentNode = c.content)),
                null === (c = r.nextNode()) &&
                  ((r.currentNode = t.pop()), (c = r.nextNode()));
            if ("node" === a.type) {
              const e = this.processor.handleTextExpression(this.options);
              e.insertAfterNode(c.previousSibling), this.__parts.push(e);
            } else
              this.__parts.push(
                ...this.processor.handleAttributeExpressions(
                  c,
                  a.name,
                  a.strings,
                  this.options
                )
              );
            s++;
          } else this.__parts.push(void 0), s++;
        return i.a && (document.adoptNode(e), customElements.upgrade(e)), e;
      }
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(76);
    const o = i;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    n(7);
    var i = n(18),
      o = n(9);
    let r = {},
      a = {};
    function s(e, t) {
      r[e] = a[e.toLowerCase()] = t;
    }
    function l(e) {
      return r[e] || a[e.toLowerCase()];
    }
    class c extends HTMLElement {
      static get observedAttributes() {
        return ["id"];
      }
      static import(e, t) {
        if (e) {
          let n = l(e);
          return n && t ? n.querySelector(t) : n;
        }
        return null;
      }
      attributeChangedCallback(e, t, n, i) {
        t !== n && this.register();
      }
      get assetpath() {
        if (!this.__assetpath) {
          const e =
              window.HTMLImports && HTMLImports.importForElement
                ? HTMLImports.importForElement(this) || document
                : this.ownerDocument,
            t = Object(i.c)(this.getAttribute("assetpath") || "", e.baseURI);
          this.__assetpath = Object(i.a)(t);
        }
        return this.__assetpath;
      }
      register(e) {
        if ((e = e || this.id)) {
          if (o.f && void 0 !== l(e))
            throw (s(e, null),
            new Error(`strictTemplatePolicy: dom-module ${e} re-registered`));
          (this.id = e),
            s(e, this),
            (t = this).querySelector("style") &&
              console.warn("dom-module %s has style outside template", t.id);
        }
        var t;
      }
    }
    (c.prototype.modules = r), customElements.define("dom-module", c);
  },
  function(e, t, n) {
    "use strict";
    n(4), n(73);
    const i = n(3).a`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;
    i.setAttribute("style", "display: none;"),
      document.head.appendChild(i.content);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return p;
    }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "a", function() {
        return b;
      });
    var i = n(40),
      o = n(18);
    const r = "link[rel=import][type~=css]",
      a = "include",
      s = "shady-unscoped";
    function l(e) {
      return i.a.import(e);
    }
    function c(e) {
      let t = e.body ? e.body : e;
      const n = Object(o.b)(t.textContent, e.baseURI),
        i = document.createElement("style");
      return (i.textContent = n), i;
    }
    function d(e) {
      const t = e.trim().split(/\s+/),
        n = [];
      for (let i = 0; i < t.length; i++) n.push(...u(t[i]));
      return n;
    }
    function u(e) {
      const t = l(e);
      if (!t)
        return console.warn("Could not find style data in module named", e), [];
      if (void 0 === t._styles) {
        const e = [];
        e.push(...f(t));
        const n = t.querySelector("template");
        n && e.push(...p(n, t.assetpath)), (t._styles = e);
      }
      return t._styles;
    }
    function p(e, t) {
      if (!e._styles) {
        const n = [],
          i = e.content.querySelectorAll("style");
        for (let e = 0; e < i.length; e++) {
          let r = i[e],
            s = r.getAttribute(a);
          s &&
            n.push(
              ...d(s).filter(function(e, t, n) {
                return n.indexOf(e) === t;
              })
            ),
            t && (r.textContent = Object(o.b)(r.textContent, t)),
            n.push(r);
        }
        e._styles = n;
      }
      return e._styles;
    }
    function h(e) {
      let t = l(e);
      return t ? f(t) : [];
    }
    function f(e) {
      const t = [],
        n = e.querySelectorAll(r);
      for (let i = 0; i < n.length; i++) {
        let e = n[i];
        if (e.import) {
          const n = e.import,
            i = e.hasAttribute(s);
          if (i && !n._unscopedStyle) {
            const e = c(n);
            e.setAttribute(s, ""), (n._unscopedStyle = e);
          } else n._style || (n._style = c(n));
          t.push(i ? n._unscopedStyle : n._style);
        }
      }
      return t;
    }
    function b(e) {
      let t = e.trim().split(/\s+/),
        n = "";
      for (let i = 0; i < t.length; i++) n += m(t[i]);
      return n;
    }
    function m(e) {
      let t = l(e);
      if (t && void 0 === t._cssText) {
        let e = g(t),
          n = t.querySelector("template");
        n &&
          (e += (function(e, t) {
            let n = "";
            const i = p(e, t);
            for (let o = 0; o < i.length; o++) {
              let e = i[o];
              e.parentNode && e.parentNode.removeChild(e), (n += e.textContent);
            }
            return n;
          })(n, t.assetpath)),
          (t._cssText = e || null);
      }
      return (
        t || console.warn("Could not find style data in module named", e),
        (t && t._cssText) || ""
      );
    }
    function g(e) {
      let t = "",
        n = f(e);
      for (let i = 0; i < n.length; i++) t += n[i].textContent;
      return t;
    }
  },
  function(e, t, n) {
    "use strict";
    var i = n(13);
    class o {
      constructor() {
        (this.start = 0),
          (this.end = 0),
          (this.previous = null),
          (this.parent = null),
          (this.rules = null),
          (this.parsedCssText = ""),
          (this.cssText = ""),
          (this.atRule = !1),
          (this.type = 0),
          (this.keyframesName = ""),
          (this.selector = ""),
          (this.parsedSelector = "");
      }
    }
    function r(e) {
      return (function e(t, n) {
        let i = n.substring(t.start, t.end - 1);
        t.parsedCssText = t.cssText = i.trim();
        if (t.parent) {
          let e = t.previous ? t.previous.end : t.parent.start;
          i = (i = (i = (function(e) {
            return e.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
              let e = arguments[1],
                t = 6 - e.length;
              for (; t--; ) e = "0" + e;
              return "\\" + e;
            });
          })((i = n.substring(e, t.start - 1)))).replace(
            d.multipleSpaces,
            " "
          )).substring(i.lastIndexOf(";") + 1);
          let o = (t.parsedSelector = t.selector = i.trim());
          (t.atRule = 0 === o.indexOf(h)),
            t.atRule
              ? 0 === o.indexOf(p)
                ? (t.type = s.MEDIA_RULE)
                : o.match(d.keyframesRule) &&
                  ((t.type = s.KEYFRAMES_RULE),
                  (t.keyframesName = t.selector.split(d.multipleSpaces).pop()))
              : 0 === o.indexOf(u)
              ? (t.type = s.MIXIN_RULE)
              : (t.type = s.STYLE_RULE);
        }
        let o = t.rules;
        if (o)
          for (let r, a = 0, s = o.length; a < s && (r = o[a]); a++) e(r, n);
        return t;
      })(
        (function(e) {
          let t = new o();
          (t.start = 0), (t.end = e.length);
          let n = t;
          for (let i = 0, r = e.length; i < r; i++)
            if (e[i] === l) {
              n.rules || (n.rules = []);
              let e = n,
                t = e.rules[e.rules.length - 1] || null;
              ((n = new o()).start = i + 1),
                (n.parent = e),
                (n.previous = t),
                e.rules.push(n);
            } else e[i] === c && ((n.end = i + 1), (n = n.parent || t));
          return t;
        })((e = e.replace(d.comments, "").replace(d.port, ""))),
        e
      );
    }
    function a(e, t, n = "") {
      let i = "";
      if (e.cssText || e.rules) {
        let n = e.rules;
        if (
          n &&
          !(function(e) {
            let t = e[0];
            return (
              Boolean(t) && Boolean(t.selector) && 0 === t.selector.indexOf(u)
            );
          })(n)
        )
          for (let e, o = 0, r = n.length; o < r && (e = n[o]); o++)
            i = a(e, t, i);
        else
          (i = (i = t
            ? e.cssText
            : (function(e) {
                return (function(e) {
                  return e.replace(d.mixinApply, "").replace(d.varApply, "");
                })(
                  (e = (function(e) {
                    return e.replace(d.customProp, "").replace(d.mixinProp, "");
                  })(e))
                );
              })(e.cssText)).trim()) && (i = "  " + i + "\n");
      }
      return (
        i &&
          (e.selector && (n += e.selector + " " + l + "\n"),
          (n += i),
          e.selector && (n += c + "\n\n")),
        n
      );
    }
    const s = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1e3,
      },
      l = "{",
      c = "}",
      d = {
        comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g,
      },
      u = "--",
      p = "@media",
      h = "@";
    var f = n(20);
    const b = new Set(),
      m = "shady-unscoped";
    function g(e) {
      const t = e.textContent;
      if (!b.has(t)) {
        b.add(t);
        const n = e.cloneNode(!0);
        document.head.appendChild(n);
      }
    }
    function _(e) {
      return e.hasAttribute(m);
    }
    function y(e, t) {
      return e
        ? ("string" == typeof e && (e = r(e)), t && w(e, t), a(e, i.c))
        : "";
    }
    function v(e) {
      return (
        !e.__cssRules && e.textContent && (e.__cssRules = r(e.textContent)),
        e.__cssRules || null
      );
    }
    function w(e, t, n, i) {
      if (!e) return;
      let o = !1,
        r = e.type;
      if (i && r === s.MEDIA_RULE) {
        let t = e.selector.match(f.a);
        t && (window.matchMedia(t[1]).matches || (o = !0));
      }
      r === s.STYLE_RULE
        ? t(e)
        : n && r === s.KEYFRAMES_RULE
        ? n(e)
        : r === s.MIXIN_RULE && (o = !0);
      let a = e.rules;
      if (a && !o)
        for (let s, l = 0, c = a.length; l < c && (s = a[l]); l++)
          w(s, t, n, i);
    }
    function x(e, t) {
      let n = 0;
      for (let i = t, o = e.length; i < o; i++)
        if ("(" === e[i]) n++;
        else if (")" === e[i] && 0 == --n) return i;
      return -1;
    }
    window.ShadyDOM && window.ShadyDOM.wrap;
    const k = "css-build";
    function C(e) {
      if (void 0 !== i.a) return i.a;
      if (void 0 === e.__cssBuild) {
        const t = e.getAttribute(k);
        if (t) e.__cssBuild = t;
        else {
          const t = (function(e) {
            const t =
              "template" === e.localName ? e.content.firstChild : e.firstChild;
            if (t instanceof Comment) {
              const e = t.textContent.trim().split(":");
              if (e[0] === k) return e[1];
            }
            return "";
          })(e);
          "" !== t &&
            (function(e) {
              const t =
                "template" === e.localName
                  ? e.content.firstChild
                  : e.firstChild;
              t.parentNode.removeChild(t);
            })(e),
            (e.__cssBuild = t);
        }
      }
      return e.__cssBuild || "";
    }
    function S(e) {
      return "" !== C(e);
    }
    var j = n(28);
    const O = /;\s*/m,
      E = /^\s*(initial)|(inherit)\s*$/,
      A = /\s*!important/,
      P = "_-_";
    class T {
      constructor() {
        this._map = {};
      }
      set(e, t) {
        (e = e.trim()), (this._map[e] = { properties: t, dependants: {} });
      }
      get(e) {
        return (e = e.trim()), this._map[e] || null;
      }
    }
    let I = null;
    class N {
      constructor() {
        (this._currentElement = null),
          (this._measureElement = null),
          (this._map = new T());
      }
      detectMixin(e) {
        return Object(j.a)(e);
      }
      gatherStyles(e) {
        const t = (function(e) {
          const t = [],
            n = e.querySelectorAll("style");
          for (let o = 0; o < n.length; o++) {
            const e = n[o];
            _(e)
              ? i.d || (g(e), e.parentNode.removeChild(e))
              : (t.push(e.textContent), e.parentNode.removeChild(e));
          }
          return t.join("").trim();
        })(e.content);
        if (t) {
          const n = document.createElement("style");
          return (
            (n.textContent = t),
            e.content.insertBefore(n, e.content.firstChild),
            n
          );
        }
        return null;
      }
      transformTemplate(e, t) {
        void 0 === e._gatheredStyle &&
          (e._gatheredStyle = this.gatherStyles(e));
        const n = e._gatheredStyle;
        return n ? this.transformStyle(n, t) : null;
      }
      transformStyle(e, t = "") {
        let n = v(e);
        return this.transformRules(n, t), (e.textContent = y(n)), n;
      }
      transformCustomStyle(e) {
        let t = v(e);
        return (
          w(t, (e) => {
            ":root" === e.selector && (e.selector = "html"),
              this.transformRule(e);
          }),
          (e.textContent = y(t)),
          t
        );
      }
      transformRules(e, t) {
        (this._currentElement = t),
          w(e, (e) => {
            this.transformRule(e);
          }),
          (this._currentElement = null);
      }
      transformRule(e) {
        (e.cssText = this.transformCssText(e.parsedCssText, e)),
          ":root" === e.selector && (e.selector = ":host > *");
      }
      transformCssText(e, t) {
        return (
          (e = e.replace(f.c, (e, n, i, o) =>
            this._produceCssProperties(e, n, i, o, t)
          )),
          this._consumeCssProperties(e, t)
        );
      }
      _getInitialValueForProperty(e) {
        return (
          this._measureElement ||
            ((this._measureElement = document.createElement("meta")),
            this._measureElement.setAttribute("apply-shim-measure", ""),
            (this._measureElement.style.all = "initial"),
            document.head.appendChild(this._measureElement)),
          window.getComputedStyle(this._measureElement).getPropertyValue(e)
        );
      }
      _fallbacksFromPreviousRules(e) {
        let t = e;
        for (; t.parent; ) t = t.parent;
        const n = {};
        let i = !1;
        return (
          w(t, (t) => {
            (i = i || t === e) ||
              (t.selector === e.selector &&
                Object.assign(n, this._cssTextToMap(t.parsedCssText)));
          }),
          n
        );
      }
      _consumeCssProperties(e, t) {
        let n = null;
        for (; (n = f.b.exec(e)); ) {
          let i = n[0],
            o = n[1],
            r = n.index,
            a = r + i.indexOf("@apply"),
            s = r + i.length,
            l = e.slice(0, a),
            c = e.slice(s),
            d = t ? this._fallbacksFromPreviousRules(t) : {};
          Object.assign(d, this._cssTextToMap(l));
          let u = this._atApplyToCssProperties(o, d);
          (e = `${l}${u}${c}`), (f.b.lastIndex = r + u.length);
        }
        return e;
      }
      _atApplyToCssProperties(e, t) {
        e = e.replace(O, "");
        let n = [],
          i = this._map.get(e);
        if ((i || (this._map.set(e, {}), (i = this._map.get(e))), i)) {
          let o, r, a;
          this._currentElement && (i.dependants[this._currentElement] = !0);
          const s = i.properties;
          for (o in s)
            (a = t && t[o]),
              (r = [o, ": var(", e, P, o]),
              a && r.push(",", a.replace(A, "")),
              r.push(")"),
              A.test(s[o]) && r.push(" !important"),
              n.push(r.join(""));
        }
        return n.join("; ");
      }
      _replaceInitialOrInherit(e, t) {
        let n = E.exec(t);
        return (
          n &&
            (t = n[1]
              ? this._getInitialValueForProperty(e)
              : "apply-shim-inherit"),
          t
        );
      }
      _cssTextToMap(e, t = !1) {
        let n,
          i,
          o = e.split(";"),
          r = {};
        for (let a, s, l = 0; l < o.length; l++)
          (a = o[l]) &&
            (s = a.split(":")).length > 1 &&
            ((n = s[0].trim()),
            (i = s.slice(1).join(":")),
            t && (i = this._replaceInitialOrInherit(n, i)),
            (r[n] = i));
        return r;
      }
      _invalidateMixinEntry(e) {
        if (I) for (let t in e.dependants) t !== this._currentElement && I(t);
      }
      _produceCssProperties(e, t, n, i, o) {
        if (
          (n &&
            (function e(t, n) {
              let i = t.indexOf("var(");
              if (-1 === i) return n(t, "", "", "");
              let o = x(t, i + 3),
                r = t.substring(i + 4, o),
                a = t.substring(0, i),
                s = e(t.substring(o + 1), n),
                l = r.indexOf(",");
              return -1 === l
                ? n(a, r.trim(), "", s)
                : n(a, r.substring(0, l).trim(), r.substring(l + 1).trim(), s);
            })(n, (e, t) => {
              t && this._map.get(t) && (i = `@apply ${t};`);
            }),
          !i)
        )
          return e;
        let r = this._consumeCssProperties("" + i, o),
          a = e.slice(0, e.indexOf("--")),
          s = this._cssTextToMap(r, !0),
          l = s,
          c = this._map.get(t),
          d = c && c.properties;
        d ? (l = Object.assign(Object.create(d), s)) : this._map.set(t, l);
        let u,
          p,
          h = [],
          f = !1;
        for (u in l)
          void 0 === (p = s[u]) && (p = "initial"),
            !d || u in d || (f = !0),
            h.push(`${t}${P}${u}: ${p}`);
        return (
          f && this._invalidateMixinEntry(c),
          c && (c.properties = l),
          n && (a = `${e};${a}`),
          `${a}${h.join("; ")};`
        );
      }
    }
    (N.prototype.detectMixin = N.prototype.detectMixin),
      (N.prototype.transformStyle = N.prototype.transformStyle),
      (N.prototype.transformCustomStyle = N.prototype.transformCustomStyle),
      (N.prototype.transformRules = N.prototype.transformRules),
      (N.prototype.transformRule = N.prototype.transformRule),
      (N.prototype.transformTemplate = N.prototype.transformTemplate),
      (N.prototype._separator = P),
      Object.defineProperty(N.prototype, "invalidCallback", {
        get: () => I,
        set(e) {
          I = e;
        },
      });
    var z = N;
    var R = {};
    const L = "_applyShimCurrentVersion",
      M = "_applyShimNextVersion",
      F = "_applyShimValidatingVersion",
      D = Promise.resolve();
    function B(e) {
      let t = R[e];
      t &&
        (function(e) {
          (e[L] = e[L] || 0), (e[F] = e[F] || 0), (e[M] = (e[M] || 0) + 1);
        })(t);
    }
    function H(e) {
      return e[L] === e[M];
    }
    function V(e) {
      return !H(e) && e[F] === e[M];
    }
    function $(e) {
      (e[F] = e[M]),
        e._validating ||
          ((e._validating = !0),
          D.then(function() {
            (e[L] = e[M]), (e._validating = !1);
          }));
    }
    n(63);
    const U = new z();
    class q {
      constructor() {
        (this.customStyleInterface = null), (U.invalidCallback = B);
      }
      ensure() {
        this.customStyleInterface ||
          (window.ShadyCSS.CustomStyleInterface &&
            ((this.customStyleInterface = window.ShadyCSS.CustomStyleInterface),
            (this.customStyleInterface.transformCallback = (e) => {
              U.transformCustomStyle(e);
            }),
            (this.customStyleInterface.validateCallback = () => {
              requestAnimationFrame(() => {
                this.customStyleInterface.enqueued && this.flushCustomStyles();
              });
            })));
      }
      prepareTemplate(e, t) {
        if ((this.ensure(), S(e))) return;
        R[t] = e;
        let n = U.transformTemplate(e, t);
        e._styleAst = n;
      }
      flushCustomStyles() {
        if ((this.ensure(), !this.customStyleInterface)) return;
        let e = this.customStyleInterface.processStyles();
        if (this.customStyleInterface.enqueued) {
          for (let t = 0; t < e.length; t++) {
            let n = e[t],
              i = this.customStyleInterface.getStyleForCustomStyle(n);
            i && U.transformCustomStyle(i);
          }
          this.customStyleInterface.enqueued = !1;
        }
      }
      styleSubtree(e, t) {
        if ((this.ensure(), t && Object(j.c)(e, t), e.shadowRoot)) {
          this.styleElement(e);
          let t = e.shadowRoot.children || e.shadowRoot.childNodes;
          for (let e = 0; e < t.length; e++) this.styleSubtree(t[e]);
        } else {
          let t = e.children || e.childNodes;
          for (let e = 0; e < t.length; e++) this.styleSubtree(t[e]);
        }
      }
      styleElement(e) {
        this.ensure();
        let { is: t } = (function(e) {
            let t = e.localName,
              n = "",
              i = "";
            return (
              t
                ? t.indexOf("-") > -1
                  ? (n = t)
                  : ((i = t),
                    (n = (e.getAttribute && e.getAttribute("is")) || ""))
                : ((n = e.is), (i = e.extends)),
              { is: n, typeExtension: i }
            );
          })(e),
          n = R[t];
        if ((!n || !S(n)) && n && !H(n)) {
          V(n) || (this.prepareTemplate(n, t), $(n));
          let i = e.shadowRoot;
          if (i) {
            let e = i.querySelector("style");
            e &&
              ((e.__cssRules = n._styleAst), (e.textContent = y(n._styleAst)));
          }
        }
      }
      styleDocument(e) {
        this.ensure(), this.styleSubtree(document.body, e);
      }
    }
    if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
      const e = new q();
      let t = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
      (window.ShadyCSS = {
        prepareTemplate(t, n, i) {
          e.flushCustomStyles(), e.prepareTemplate(t, n);
        },
        prepareTemplateStyles(e, t, n) {
          window.ShadyCSS.prepareTemplate(e, t, n);
        },
        prepareTemplateDom(e, t) {},
        styleSubtree(t, n) {
          e.flushCustomStyles(), e.styleSubtree(t, n);
        },
        styleElement(t) {
          e.flushCustomStyles(), e.styleElement(t);
        },
        styleDocument(t) {
          e.flushCustomStyles(), e.styleDocument(t);
        },
        getComputedStyleValue: (e, t) => Object(j.b)(e, t),
        flushCustomStyles() {
          e.flushCustomStyles();
        },
        nativeCss: i.c,
        nativeShadow: i.d,
        cssBuild: i.a,
        disableRuntime: i.b,
      }),
        t && (window.ShadyCSS.CustomStyleInterface = t);
    }
    window.ShadyCSS.ApplyShim = U;
    var K = n(36),
      X = n(45),
      Y = n(47),
      W = n(8);
    const G = /:host\(:dir\((ltr|rtl)\)\)/g,
      J = ':host([dir="$1"])',
      Z = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,
      Q = ':host([dir="$2"]) $1',
      ee = [];
    let te = null,
      ne = "";
    function ie() {
      ne = document.documentElement.getAttribute("dir");
    }
    function oe(e) {
      if (!e.__autoDirOptOut) {
        e.setAttribute("dir", ne);
      }
    }
    function re() {
      ie(), (ne = document.documentElement.getAttribute("dir"));
      for (let e = 0; e < ee.length; e++) oe(ee[e]);
    }
    const ae = Object(W.a)((e) => {
      te ||
        (ie(),
        (te = new MutationObserver(re)).observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["dir"],
        }));
      const t = Object(Y.a)(e);
      class n extends t {
        static _processStyleText(e, t) {
          return (
            (e = super._processStyleText(e, t)),
            (e = this._replaceDirInCssText(e))
          );
        }
        static _replaceDirInCssText(e) {
          let t = e;
          return (
            e !== (t = (t = t.replace(G, J)).replace(Z, Q)) &&
              (this.__activateDir = !0),
            t
          );
        }
        constructor() {
          super(), (this.__autoDirOptOut = !1);
        }
        ready() {
          super.ready(), (this.__autoDirOptOut = this.hasAttribute("dir"));
        }
        connectedCallback() {
          t.prototype.connectedCallback && super.connectedCallback(),
            this.constructor.__activateDir &&
              (te && te.takeRecords().length && re(), ee.push(this), oe(this));
        }
        disconnectedCallback() {
          if (
            (t.prototype.disconnectedCallback && super.disconnectedCallback(),
            this.constructor.__activateDir)
          ) {
            const e = ee.indexOf(this);
            e > -1 && ee.splice(e, 1);
          }
        }
      }
      return (n.__activateDir = !1), n;
    });
    n(61);
    function se() {
      document.body.removeAttribute("unresolved");
    }
    "interactive" === document.readyState || "complete" === document.readyState
      ? se()
      : window.addEventListener("DOMContentLoaded", se);
    var le = n(1),
      ce = n(35),
      de = n(21),
      ue = n(11),
      pe = n(2);
    n.d(t, "a", function() {
      return fe;
    });
    let he = window.ShadyCSS;
    const fe = Object(W.a)((e) => {
      const t = ae(Object(X.a)(Object(K.a)(e))),
        n = { x: "pan-x", y: "pan-y", none: "none", all: "auto" };
      class i extends t {
        constructor() {
          super(),
            this.isAttached,
            this.__boundListeners,
            this._debouncers,
            this._applyListeners();
        }
        static get importMeta() {
          return this.prototype.importMeta;
        }
        created() {}
        connectedCallback() {
          super.connectedCallback(), (this.isAttached = !0), this.attached();
        }
        attached() {}
        disconnectedCallback() {
          super.disconnectedCallback(), (this.isAttached = !1), this.detached();
        }
        detached() {}
        attributeChangedCallback(e, t, n, i) {
          t !== n &&
            (super.attributeChangedCallback(e, t, n, i),
            this.attributeChanged(e, t, n));
        }
        attributeChanged(e, t, n) {}
        _initializeProperties() {
          let e = Object.getPrototypeOf(this);
          e.hasOwnProperty("__hasRegisterFinished") ||
            ((e.__hasRegisterFinished = !0), this._registered()),
            super._initializeProperties(),
            (this.root = this),
            this.created();
        }
        _registered() {}
        ready() {
          this._ensureAttributes(), super.ready();
        }
        _ensureAttributes() {}
        _applyListeners() {}
        serialize(e) {
          return this._serializeValue(e);
        }
        deserialize(e, t) {
          return this._deserializeValue(e, t);
        }
        reflectPropertyToAttribute(e, t, n) {
          this._propertyToAttribute(e, t, n);
        }
        serializeValueToAttribute(e, t, n) {
          this._valueToNodeAttribute(n || this, e, t);
        }
        extend(e, t) {
          if (!e || !t) return e || t;
          let n = Object.getOwnPropertyNames(t);
          for (let i, o = 0; o < n.length && (i = n[o]); o++) {
            let n = Object.getOwnPropertyDescriptor(t, i);
            n && Object.defineProperty(e, i, n);
          }
          return e;
        }
        mixin(e, t) {
          for (let n in t) e[n] = t[n];
          return e;
        }
        chainObject(e, t) {
          return e && t && e !== t && (e.__proto__ = t), e;
        }
        instanceTemplate(e) {
          let t = this.constructor._contentForTemplate(e);
          return document.importNode(t, !0);
        }
        fire(e, t, n) {
          (n = n || {}), (t = null == t ? {} : t);
          let i = new Event(e, {
            bubbles: void 0 === n.bubbles || n.bubbles,
            cancelable: Boolean(n.cancelable),
            composed: void 0 === n.composed || n.composed,
          });
          return (i.detail = t), (n.node || this).dispatchEvent(i), i;
        }
        listen(e, t, n) {
          e = e || this;
          let i =
              this.__boundListeners || (this.__boundListeners = new WeakMap()),
            o = i.get(e);
          o || ((o = {}), i.set(e, o));
          let r = t + n;
          o[r] || (o[r] = this._addMethodEventListenerToNode(e, t, n, this));
        }
        unlisten(e, t, n) {
          e = e || this;
          let i = this.__boundListeners && this.__boundListeners.get(e),
            o = t + n,
            r = i && i[o];
          r && (this._removeEventListenerFromNode(e, t, r), (i[o] = null));
        }
        setScrollDirection(e, t) {
          Object(ce.f)(t || this, n[e] || "auto");
        }
        $$(e) {
          return this.root.querySelector(e);
        }
        get domHost() {
          let e = this.getRootNode();
          return e instanceof DocumentFragment ? e.host : e;
        }
        distributeContent() {
          window.ShadyDOM && this.shadowRoot && ShadyDOM.flush();
        }
        getEffectiveChildNodes() {
          return Object(le.a)(this).getEffectiveChildNodes();
        }
        queryDistributedElements(e) {
          return Object(le.a)(this).queryDistributedElements(e);
        }
        getEffectiveChildren() {
          return this.getEffectiveChildNodes().filter(function(e) {
            return e.nodeType === Node.ELEMENT_NODE;
          });
        }
        getEffectiveTextContent() {
          let e = this.getEffectiveChildNodes(),
            t = [];
          for (let n, i = 0; (n = e[i]); i++)
            n.nodeType !== Node.COMMENT_NODE && t.push(n.textContent);
          return t.join("");
        }
        queryEffectiveChildren(e) {
          let t = this.queryDistributedElements(e);
          return t && t[0];
        }
        queryAllEffectiveChildren(e) {
          return this.queryDistributedElements(e);
        }
        getContentChildNodes(e) {
          let t = this.root.querySelector(e || "slot");
          return t ? Object(le.a)(t).getDistributedNodes() : [];
        }
        getContentChildren(e) {
          return this.getContentChildNodes(e).filter(function(e) {
            return e.nodeType === Node.ELEMENT_NODE;
          });
        }
        isLightDescendant(e) {
          return (
            this !== e &&
            this.contains(e) &&
            this.getRootNode() === e.getRootNode()
          );
        }
        isLocalDescendant(e) {
          return this.root === e.getRootNode();
        }
        scopeSubtree(e, t) {}
        getComputedStyleValue(e) {
          return he.getComputedStyleValue(this, e);
        }
        debounce(e, t, n) {
          return (
            (this._debouncers = this._debouncers || {}),
            (this._debouncers[e] = de.a.debounce(
              this._debouncers[e],
              n > 0 ? ue.d.after(n) : ue.c,
              t.bind(this)
            ))
          );
        }
        isDebouncerActive(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          return !(!t || !t.isActive());
        }
        flushDebouncer(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          t && t.flush();
        }
        cancelDebouncer(e) {
          this._debouncers = this._debouncers || {};
          let t = this._debouncers[e];
          t && t.cancel();
        }
        async(e, t) {
          return t > 0 ? ue.d.run(e.bind(this), t) : ~ue.c.run(e.bind(this));
        }
        cancelAsync(e) {
          e < 0 ? ue.c.cancel(~e) : ue.d.cancel(e);
        }
        create(e, t) {
          let n = document.createElement(e);
          if (t)
            if (n.setProperties) n.setProperties(t);
            else for (let i in t) n[i] = t[i];
          return n;
        }
        elementMatches(e, t) {
          return Object(le.b)(t || this, e);
        }
        toggleAttribute(e, t) {
          let n = this;
          return (
            3 === arguments.length && (n = arguments[2]),
            1 == arguments.length && (t = !n.hasAttribute(e)),
            t ? (n.setAttribute(e, ""), !0) : (n.removeAttribute(e), !1)
          );
        }
        toggleClass(e, t, n) {
          (n = n || this),
            1 == arguments.length && (t = !n.classList.contains(e)),
            t ? n.classList.add(e) : n.classList.remove(e);
        }
        transform(e, t) {
          ((t = t || this).style.webkitTransform = e), (t.style.transform = e);
        }
        translate3d(e, t, n, i) {
          (i = i || this),
            this.transform("translate3d(" + e + "," + t + "," + n + ")", i);
        }
        arrayDelete(e, t) {
          let n;
          if (Array.isArray(e)) {
            if ((n = e.indexOf(t)) >= 0) return e.splice(n, 1);
          } else {
            if ((n = Object(pe.a)(this, e).indexOf(t)) >= 0)
              return this.splice(e, n, 1);
          }
          return null;
        }
        _logger(e, t) {
          switch (
            (Array.isArray(t) &&
              1 === t.length &&
              Array.isArray(t[0]) &&
              (t = t[0]),
            e)
          ) {
            case "log":
            case "warn":
            case "error":
              console[e](...t);
          }
        }
        _log(...e) {
          this._logger("log", e);
        }
        _warn(...e) {
          this._logger("warn", e);
        }
        _error(...e) {
          this._logger("error", e);
        }
        _logf(e, ...t) {
          return ["[%s::%s]", this.is, e, ...t];
        }
      }
      return (i.prototype.is = ""), i;
    });
  },
  function(e, t, n) {
    "use strict";
    n(4);
    const i = n(3).a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
    i.setAttribute("style", "display: none;"),
      document.head.appendChild(i.content);
    var o = document.createElement("style");
    (o.textContent = "[hidden] { display: none !important; }"),
      document.head.appendChild(o);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(7);
    var i = n(8),
      o = n(35);
    const r = Object(i.a)((e) => {
      return class extends e {
        _addEventListenerToNode(e, t, n) {
          Object(o.b)(e, t, n) || super._addEventListenerToNode(e, t, n);
        }
        _removeEventListenerFromNode(e, t, n) {
          Object(o.e)(e, t, n) || super._removeEventListenerFromNode(e, t, n);
        }
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    n(4);
    var i = n(5);
    class o {
      constructor(e) {
        o[" "](e),
          (this.type = (e && e.type) || "default"),
          (this.key = e && e.key),
          e && "value" in e && (this.value = e.value);
      }
      get value() {
        var e = this.type,
          t = this.key;
        if (e && t) return o.types[e] && o.types[e][t];
      }
      set value(e) {
        var t = this.type,
          n = this.key;
        t &&
          n &&
          ((t = o.types[t] = o.types[t] || {}),
          null == e ? delete t[n] : (t[n] = e));
      }
      get list() {
        if (this.type) {
          var e = o.types[this.type];
          return e
            ? Object.keys(e).map(function(e) {
                return r[this.type][e];
              }, this)
            : [];
        }
      }
      byKey(e) {
        return (this.key = e), this.value;
      }
    }
    (o[" "] = function() {}), (o.types = {});
    var r = o.types;
    Object(i.a)({
      is: "iron-meta",
      properties: {
        type: { type: String, value: "default" },
        key: { type: String },
        value: { type: String, notify: !0 },
        self: { type: Boolean, observer: "_selfChanged" },
        __meta: { type: Boolean, computed: "__computeMeta(type, key, value)" },
      },
      hostAttributes: { hidden: !0 },
      __computeMeta: function(e, t, n) {
        var i = new o({ type: e, key: t });
        return (
          void 0 !== n && n !== i.value
            ? (i.value = n)
            : this.value !== i.value && (this.value = i.value),
          i
        );
      },
      get list() {
        return this.__meta && this.__meta.list;
      },
      _selfChanged: function(e) {
        e && (this.value = this);
      },
      byKey: function(e) {
        return new o({ type: this.type, key: e }).value;
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return l;
    });
    n(7);
    var i = n(8),
      o = n(22),
      r = n(48);
    const a = {};
    let s = HTMLElement.prototype;
    for (; s; ) {
      let e = Object.getOwnPropertyNames(s);
      for (let t = 0; t < e.length; t++) a[e[t]] = !0;
      s = Object.getPrototypeOf(s);
    }
    const l = Object(i.a)((e) => {
      const t = Object(r.a)(e);
      return class extends t {
        static createPropertiesForAttributes() {
          let e = this.observedAttributes;
          for (let t = 0; t < e.length; t++)
            this.prototype._createPropertyAccessor(Object(o.b)(e[t]));
        }
        static attributeNameForProperty(e) {
          return Object(o.a)(e);
        }
        _initializeProperties() {
          this.__dataProto &&
            (this._initializeProtoProperties(this.__dataProto),
            (this.__dataProto = null)),
            super._initializeProperties();
        }
        _initializeProtoProperties(e) {
          for (let t in e) this._setProperty(t, e[t]);
        }
        _ensureAttribute(e, t) {
          const n = this;
          n.hasAttribute(e) || this._valueToNodeAttribute(n, t, e);
        }
        _serializeValue(e) {
          switch (typeof e) {
            case "object":
              if (e instanceof Date) return e.toString();
              if (e)
                try {
                  return JSON.stringify(e);
                } catch (t) {
                  return "";
                }
            default:
              return super._serializeValue(e);
          }
        }
        _deserializeValue(e, t) {
          let n;
          switch (t) {
            case Object:
              try {
                n = JSON.parse(e);
              } catch (i) {
                n = e;
              }
              break;
            case Array:
              try {
                n = JSON.parse(e);
              } catch (i) {
                (n = null),
                  console.warn(
                    `Polymer::Attributes: couldn't decode Array as JSON: ${e}`
                  );
              }
              break;
            case Date:
              (n = isNaN(e) ? String(e) : Number(e)), (n = new Date(n));
              break;
            default:
              n = super._deserializeValue(e, t);
          }
          return n;
        }
        _definePropertyAccessor(e, t) {
          !(function(e, t) {
            if (!a[t]) {
              let n = e[t];
              void 0 !== n &&
                (e.__data
                  ? e._setPendingProperty(t, n)
                  : (e.__dataProto
                      ? e.hasOwnProperty(
                          JSCompiler_renameProperty("__dataProto", e)
                        ) || (e.__dataProto = Object.create(e.__dataProto))
                      : (e.__dataProto = {}),
                    (e.__dataProto[t] = n)));
            }
          })(this, e),
            super._definePropertyAccessor(e, t);
        }
        _hasAccessor(e) {
          return this.__dataHasAccessor && this.__dataHasAccessor[e];
        }
        _isPropertyPending(e) {
          return Boolean(this.__dataPending && e in this.__dataPending);
        }
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(7);
    var i = n(8);
    const o = n(11).c,
      r = Object(i.a)((e) => {
        return class extends e {
          static createProperties(e) {
            const t = this.prototype;
            for (let n in e) n in t || t._createPropertyAccessor(n);
          }
          static attributeNameForProperty(e) {
            return e.toLowerCase();
          }
          static typeForProperty(e) {}
          _createPropertyAccessor(e, t) {
            this._addPropertyToAttributeMap(e),
              this.hasOwnProperty("__dataHasAccessor") ||
                (this.__dataHasAccessor = Object.assign(
                  {},
                  this.__dataHasAccessor
                )),
              this.__dataHasAccessor[e] ||
                ((this.__dataHasAccessor[e] = !0),
                this._definePropertyAccessor(e, t));
          }
          _addPropertyToAttributeMap(e) {
            if (
              (this.hasOwnProperty("__dataAttributes") ||
                (this.__dataAttributes = Object.assign(
                  {},
                  this.__dataAttributes
                )),
              !this.__dataAttributes[e])
            ) {
              const t = this.constructor.attributeNameForProperty(e);
              this.__dataAttributes[t] = e;
            }
          }
          _definePropertyAccessor(e, t) {
            Object.defineProperty(this, e, {
              get() {
                return this._getProperty(e);
              },
              set: t
                ? function() {}
                : function(t) {
                    this._setProperty(e, t);
                  },
            });
          }
          constructor() {
            super(),
              (this.__dataEnabled = !1),
              (this.__dataReady = !1),
              (this.__dataInvalid = !1),
              (this.__data = {}),
              (this.__dataPending = null),
              (this.__dataOld = null),
              (this.__dataInstanceProps = null),
              (this.__serializing = !1),
              this._initializeProperties();
          }
          ready() {
            (this.__dataReady = !0), this._flushProperties();
          }
          _initializeProperties() {
            for (let e in this.__dataHasAccessor)
              this.hasOwnProperty(e) &&
                ((this.__dataInstanceProps = this.__dataInstanceProps || {}),
                (this.__dataInstanceProps[e] = this[e]),
                delete this[e]);
          }
          _initializeInstanceProperties(e) {
            Object.assign(this, e);
          }
          _setProperty(e, t) {
            this._setPendingProperty(e, t) && this._invalidateProperties();
          }
          _getProperty(e) {
            return this.__data[e];
          }
          _setPendingProperty(e, t, n) {
            let i = this.__data[e],
              o = this._shouldPropertyChange(e, t, i);
            return (
              o &&
                (this.__dataPending ||
                  ((this.__dataPending = {}), (this.__dataOld = {})),
                !this.__dataOld ||
                  e in this.__dataOld ||
                  (this.__dataOld[e] = i),
                (this.__data[e] = t),
                (this.__dataPending[e] = t)),
              o
            );
          }
          _invalidateProperties() {
            !this.__dataInvalid &&
              this.__dataReady &&
              ((this.__dataInvalid = !0),
              o.run(() => {
                this.__dataInvalid &&
                  ((this.__dataInvalid = !1), this._flushProperties());
              }));
          }
          _enableProperties() {
            this.__dataEnabled ||
              ((this.__dataEnabled = !0),
              this.__dataInstanceProps &&
                (this._initializeInstanceProperties(this.__dataInstanceProps),
                (this.__dataInstanceProps = null)),
              this.ready());
          }
          _flushProperties() {
            const e = this.__data,
              t = this.__dataPending,
              n = this.__dataOld;
            this._shouldPropertiesChange(e, t, n) &&
              ((this.__dataPending = null),
              (this.__dataOld = null),
              this._propertiesChanged(e, t, n));
          }
          _shouldPropertiesChange(e, t, n) {
            return Boolean(t);
          }
          _propertiesChanged(e, t, n) {}
          _shouldPropertyChange(e, t, n) {
            return n !== t && (n == n || t == t);
          }
          attributeChangedCallback(e, t, n, i) {
            t !== n && this._attributeToProperty(e, n),
              super.attributeChangedCallback &&
                super.attributeChangedCallback(e, t, n, i);
          }
          _attributeToProperty(e, t, n) {
            if (!this.__serializing) {
              const i = this.__dataAttributes,
                o = (i && i[e]) || e;
              this[o] = this._deserializeValue(
                t,
                n || this.constructor.typeForProperty(o)
              );
            }
          }
          _propertyToAttribute(e, t, n) {
            (this.__serializing = !0),
              (n = arguments.length < 3 ? this[e] : n),
              this._valueToNodeAttribute(
                this,
                n,
                t || this.constructor.attributeNameForProperty(e)
              ),
              (this.__serializing = !1);
          }
          _valueToNodeAttribute(e, t, n) {
            const i = this._serializeValue(t);
            void 0 === i ? e.removeAttribute(n) : e.setAttribute(n, i);
          }
          _serializeValue(e) {
            switch (typeof e) {
              case "boolean":
                return e ? "" : void 0;
              default:
                return null != e ? e.toString() : void 0;
            }
          }
          _deserializeValue(e, t) {
            switch (t) {
              case Boolean:
                return null !== e;
              case Number:
                return Number(e);
              default:
                return e;
            }
          }
        };
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    n(7);
    function i(e, t, n) {
      return { index: e, removed: t, addedCount: n };
    }
    const o = 0,
      r = 1,
      a = 2,
      s = 3;
    function l(e, t, n, l, c, u) {
      let p,
        h = 0,
        f = 0,
        b = Math.min(n - t, u - c);
      if (
        (0 == t &&
          0 == c &&
          (h = (function(e, t, n) {
            for (let i = 0; i < n; i++) if (!d(e[i], t[i])) return i;
            return n;
          })(e, l, b)),
        n == e.length &&
          u == l.length &&
          (f = (function(e, t, n) {
            let i = e.length,
              o = t.length,
              r = 0;
            for (; r < n && d(e[--i], t[--o]); ) r++;
            return r;
          })(e, l, b - h)),
        (c += h),
        (u -= f),
        (n -= f) - (t += h) == 0 && u - c == 0)
      )
        return [];
      if (t == n) {
        for (p = i(t, [], 0); c < u; ) p.removed.push(l[c++]);
        return [p];
      }
      if (c == u) return [i(t, [], n - t)];
      let m = (function(e) {
        let t = e.length - 1,
          n = e[0].length - 1,
          i = e[t][n],
          l = [];
        for (; t > 0 || n > 0; ) {
          if (0 == t) {
            l.push(a), n--;
            continue;
          }
          if (0 == n) {
            l.push(s), t--;
            continue;
          }
          let c,
            d = e[t - 1][n - 1],
            u = e[t - 1][n],
            p = e[t][n - 1];
          (c = u < p ? (u < d ? u : d) : p < d ? p : d) == d
            ? (d == i ? l.push(o) : (l.push(r), (i = d)), t--, n--)
            : c == u
            ? (l.push(s), t--, (i = u))
            : (l.push(a), n--, (i = p));
        }
        return l.reverse(), l;
      })(
        (function(e, t, n, i, o, r) {
          let a = r - o + 1,
            s = n - t + 1,
            l = new Array(a);
          for (let c = 0; c < a; c++) (l[c] = new Array(s)), (l[c][0] = c);
          for (let c = 0; c < s; c++) l[0][c] = c;
          for (let c = 1; c < a; c++)
            for (let n = 1; n < s; n++)
              if (d(e[t + n - 1], i[o + c - 1])) l[c][n] = l[c - 1][n - 1];
              else {
                let e = l[c - 1][n] + 1,
                  t = l[c][n - 1] + 1;
                l[c][n] = e < t ? e : t;
              }
          return l;
        })(e, t, n, l, c, u)
      );
      p = void 0;
      let g = [],
        _ = t,
        y = c;
      for (let d = 0; d < m.length; d++)
        switch (m[d]) {
          case o:
            p && (g.push(p), (p = void 0)), _++, y++;
            break;
          case r:
            p || (p = i(_, [], 0)),
              p.addedCount++,
              _++,
              p.removed.push(l[y]),
              y++;
            break;
          case a:
            p || (p = i(_, [], 0)), p.addedCount++, _++;
            break;
          case s:
            p || (p = i(_, [], 0)), p.removed.push(l[y]), y++;
        }
      return p && g.push(p), g;
    }
    function c(e, t) {
      return l(e, 0, e.length, t, 0, t.length);
    }
    function d(e, t) {
      return e === t;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(19);
    const o = (e, t) => Object(i.a)(e, "hass-notification", t);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "c", function() {
        return r;
      }),
      n.d(t, "b", function() {
        return a;
      });
    var i = n(64);
    const o = (e) => Object(i.a)(e.connection, "language"),
      r = (e, t) => Object(i.c)(e.connection, "language", t),
      a = async (e, t) => {
        return (await e.callWS({
          type: "frontend/get_translations",
          language: t,
        })).resources;
      };
  },
  function(e, t, n) {
    "use strict";
    n(4), n(55);
    const i = n(3).a`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;
    i.setAttribute("style", "display: none;"),
      document.head.appendChild(i.content);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return a;
      });
    n(4), n(34);
    var i = n(31),
      o = n(1);
    const r = {
        properties: {
          pressed: {
            type: Boolean,
            readOnly: !0,
            value: !1,
            reflectToAttribute: !0,
            observer: "_pressedChanged",
          },
          toggles: { type: Boolean, value: !1, reflectToAttribute: !0 },
          active: {
            type: Boolean,
            value: !1,
            notify: !0,
            reflectToAttribute: !0,
          },
          pointerDown: { type: Boolean, readOnly: !0, value: !1 },
          receivedFocusFromKeyboard: { type: Boolean, readOnly: !0 },
          ariaActiveAttribute: {
            type: String,
            value: "aria-pressed",
            observer: "_ariaActiveAttributeChanged",
          },
        },
        listeners: {
          down: "_downHandler",
          up: "_upHandler",
          tap: "_tapHandler",
        },
        observers: [
          "_focusChanged(focused)",
          "_activeChanged(active, ariaActiveAttribute)",
        ],
        keyBindings: {
          "enter:keydown": "_asyncClick",
          "space:keydown": "_spaceKeyDownHandler",
          "space:keyup": "_spaceKeyUpHandler",
        },
        _mouseEventRe: /^mouse/,
        _tapHandler: function() {
          this.toggles ? this._userActivate(!this.active) : (this.active = !1);
        },
        _focusChanged: function(e) {
          this._detectKeyboardFocus(e), e || this._setPressed(!1);
        },
        _detectKeyboardFocus: function(e) {
          this._setReceivedFocusFromKeyboard(!this.pointerDown && e);
        },
        _userActivate: function(e) {
          this.active !== e && ((this.active = e), this.fire("change"));
        },
        _downHandler: function(e) {
          this._setPointerDown(!0),
            this._setPressed(!0),
            this._setReceivedFocusFromKeyboard(!1);
        },
        _upHandler: function() {
          this._setPointerDown(!1), this._setPressed(!1);
        },
        _spaceKeyDownHandler: function(e) {
          var t = e.detail.keyboardEvent,
            n = Object(o.a)(t).localTarget;
          this.isLightDescendant(n) ||
            (t.preventDefault(),
            t.stopImmediatePropagation(),
            this._setPressed(!0));
        },
        _spaceKeyUpHandler: function(e) {
          var t = e.detail.keyboardEvent,
            n = Object(o.a)(t).localTarget;
          this.isLightDescendant(n) ||
            (this.pressed && this._asyncClick(), this._setPressed(!1));
        },
        _asyncClick: function() {
          this.async(function() {
            this.click();
          }, 1);
        },
        _pressedChanged: function(e) {
          this._changedButtonState();
        },
        _ariaActiveAttributeChanged: function(e, t) {
          t && t != e && this.hasAttribute(t) && this.removeAttribute(t);
        },
        _activeChanged: function(e, t) {
          this.toggles
            ? this.setAttribute(this.ariaActiveAttribute, e ? "true" : "false")
            : this.removeAttribute(this.ariaActiveAttribute),
            this._changedButtonState();
        },
        _controlStateChanged: function() {
          this.disabled ? this._setPressed(!1) : this._changedButtonState();
        },
        _changedButtonState: function() {
          this._buttonStateChanged && this._buttonStateChanged();
        },
      },
      a = [i.a, r];
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return r;
      });
    var i = n(0);
    const o = i.c`
  :host {
    @apply --paper-font-body1;
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--primary-color);
    font-weight: 400;
    color: var(--text-primary-color, white);
  }

  app-toolbar ha-menu-button + [main-title],
  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],
  app-toolbar paper-icon-button + [main-title] {
    margin-left: 24px;
  }

  h1 {
    @apply --paper-font-title;
  }

  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--google-red-500);
  }
`,
      r = i.c`
  /* prevent clipping of positioned elements */
  paper-dialog-scrollable {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: auto;
    }
  }

  /* force smooth scrolling for iOS 10 */
  paper-dialog-scrollable.can-scroll {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: touch;
    }
  }

  .paper-dialog-buttons {
    align-items: flex-end;
    padding: 8px;
  }

  .paper-dialog-buttons .warning {
    --mdc-theme-primary: var(--google-red-500);
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    paper-dialog,
    ha-paper-dialog {
      margin: 0;
      width: 100% !important;
      max-height: calc(100% - 64px);

      position: fixed !important;
      bottom: 0px;
      left: 0px;
      right: 0px;
      overflow: scroll;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;
  },
  function(e, t) {},
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return s;
      });
    n(4);
    var i = n(53),
      o = n(34),
      r = n(67);
    const a = {
        observers: ["_focusedChanged(receivedFocusFromKeyboard)"],
        _focusedChanged: function(e) {
          e && this.ensureRipple(),
            this.hasRipple() && (this._ripple.holdDown = e);
        },
        _createRipple: function() {
          var e = r.a._createRipple();
          return (
            (e.id = "ink"),
            e.setAttribute("center", ""),
            e.classList.add("circle"),
            e
          );
        },
      },
      s = [i.a, o.a, r.a, a];
  },
  function(e, t, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty;
    function o(e) {
      var t,
        n,
        o,
        r,
        a = Array.prototype.slice.call(arguments, 1);
      for (t = 0, n = a.length; t < n; t += 1)
        if ((o = a[t])) for (r in o) i.call(o, r) && (e[r] = o[r]);
      return e;
    }
    var r = (function() {
        try {
          return !!Object.defineProperty({}, "a", {});
        } catch (e) {
          return !1;
        }
      })(),
      a = (!r && Object.prototype.__defineGetter__,
      r
        ? Object.defineProperty
        : function(e, t, n) {
            "get" in n && e.__defineGetter__
              ? e.__defineGetter__(t, n.get)
              : (!i.call(e, t) || "value" in n) && (e[t] = n.value);
          }),
      s =
        Object.create ||
        function(e, t) {
          var n, o;
          function r() {}
          for (o in ((r.prototype = e), (n = new r()), t))
            i.call(t, o) && a(n, o, t[o]);
          return n;
        },
      l = c;
    function c(e, t, n) {
      (this.locales = e), (this.formats = t), (this.pluralFn = n);
    }
    function d(e) {
      this.id = e;
    }
    function u(e, t, n, i, o) {
      (this.id = e),
        (this.useOrdinal = t),
        (this.offset = n),
        (this.options = i),
        (this.pluralFn = o);
    }
    function p(e, t, n, i) {
      (this.id = e),
        (this.offset = t),
        (this.numberFormat = n),
        (this.string = i);
    }
    function h(e, t) {
      (this.id = e), (this.options = t);
    }
    (c.prototype.compile = function(e) {
      return (
        (this.pluralStack = []),
        (this.currentPlural = null),
        (this.pluralNumberFormat = null),
        this.compileMessage(e)
      );
    }),
      (c.prototype.compileMessage = function(e) {
        if (!e || "messageFormatPattern" !== e.type)
          throw new Error('Message AST is not of type: "messageFormatPattern"');
        var t,
          n,
          i,
          o = e.elements,
          r = [];
        for (t = 0, n = o.length; t < n; t += 1)
          switch ((i = o[t]).type) {
            case "messageTextElement":
              r.push(this.compileMessageText(i));
              break;
            case "argumentElement":
              r.push(this.compileArgument(i));
              break;
            default:
              throw new Error("Message element does not have a valid type");
          }
        return r;
      }),
      (c.prototype.compileMessageText = function(e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value)
          ? (this.pluralNumberFormat ||
              (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)),
            new p(
              this.currentPlural.id,
              this.currentPlural.format.offset,
              this.pluralNumberFormat,
              e.value
            ))
          : e.value.replace(/\\#/g, "#");
      }),
      (c.prototype.compileArgument = function(e) {
        var t = e.format;
        if (!t) return new d(e.id);
        var n,
          i = this.formats,
          o = this.locales,
          r = this.pluralFn;
        switch (t.type) {
          case "numberFormat":
            return (
              (n = i.number[t.style]),
              { id: e.id, format: new Intl.NumberFormat(o, n).format }
            );
          case "dateFormat":
            return (
              (n = i.date[t.style]),
              { id: e.id, format: new Intl.DateTimeFormat(o, n).format }
            );
          case "timeFormat":
            return (
              (n = i.time[t.style]),
              { id: e.id, format: new Intl.DateTimeFormat(o, n).format }
            );
          case "pluralFormat":
            return (
              (n = this.compileOptions(e)),
              new u(e.id, t.ordinal, t.offset, n, r)
            );
          case "selectFormat":
            return (n = this.compileOptions(e)), new h(e.id, n);
          default:
            throw new Error(
              "Message element does not have a valid format type"
            );
        }
      }),
      (c.prototype.compileOptions = function(e) {
        var t,
          n,
          i,
          o = e.format,
          r = o.options,
          a = {};
        for (
          this.pluralStack.push(this.currentPlural),
            this.currentPlural = "pluralFormat" === o.type ? e : null,
            t = 0,
            n = r.length;
          t < n;
          t += 1
        )
          a[(i = r[t]).selector] = this.compileMessage(i.value);
        return (this.currentPlural = this.pluralStack.pop()), a;
      }),
      (d.prototype.format = function(e) {
        return e || "number" == typeof e
          ? "string" == typeof e
            ? e
            : String(e)
          : "";
      }),
      (u.prototype.getOption = function(e) {
        var t = this.options;
        return (
          t["=" + e] ||
          t[this.pluralFn(e - this.offset, this.useOrdinal)] ||
          t.other
        );
      }),
      (p.prototype.format = function(e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string
          .replace(/(^|[^\\])#/g, "$1" + t)
          .replace(/\\#/g, "#");
      }),
      (h.prototype.getOption = function(e) {
        var t = this.options;
        return t[e] || t.other;
      });
    var f = n(77),
      b = n.n(f),
      m = g;
    function g(e, t, n) {
      var i = "string" == typeof e ? g.__parse(e) : e;
      if (!i || "messageFormatPattern" !== i.type)
        throw new TypeError("A message must be provided as a String or AST.");
      (n = this._mergeFormats(g.formats, n)),
        a(this, "_locale", { value: this._resolveLocale(t) });
      var o = this._findPluralRuleFunction(this._locale),
        r = this._compilePattern(i, t, n, o),
        s = this;
      this.format = function(t) {
        try {
          return s._format(r, t);
        } catch (n) {
          throw n.variableId
            ? new Error(
                "The intl string context variable '" +
                  n.variableId +
                  "' was not provided to the string '" +
                  e +
                  "'"
              )
            : n;
        }
      };
    }
    a(g, "formats", {
      enumerable: !0,
      value: {
        number: {
          currency: { style: "currency" },
          percent: { style: "percent" },
        },
        date: {
          short: { month: "numeric", day: "numeric", year: "2-digit" },
          medium: { month: "short", day: "numeric", year: "numeric" },
          long: { month: "long", day: "numeric", year: "numeric" },
          full: {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          },
        },
        time: {
          short: { hour: "numeric", minute: "numeric" },
          medium: { hour: "numeric", minute: "numeric", second: "numeric" },
          long: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
          full: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
        },
      },
    }),
      a(g, "__localeData__", { value: s(null) }),
      a(g, "__addLocaleData", {
        value: function(e) {
          if (!e || !e.locale)
            throw new Error(
              "Locale data provided to IntlMessageFormat is missing a `locale` property"
            );
          g.__localeData__[e.locale.toLowerCase()] = e;
        },
      }),
      a(g, "__parse", { value: b.a.parse }),
      a(g, "defaultLocale", { enumerable: !0, writable: !0, value: void 0 }),
      (g.prototype.resolvedOptions = function() {
        return { locale: this._locale };
      }),
      (g.prototype._compilePattern = function(e, t, n, i) {
        return new l(t, n, i).compile(e);
      }),
      (g.prototype._findPluralRuleFunction = function(e) {
        for (var t = g.__localeData__, n = t[e.toLowerCase()]; n; ) {
          if (n.pluralRuleFunction) return n.pluralRuleFunction;
          n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw new Error(
          "Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" +
            e
        );
      }),
      (g.prototype._format = function(e, t) {
        var n,
          o,
          r,
          a,
          s,
          l,
          c = "";
        for (n = 0, o = e.length; n < o; n += 1)
          if ("string" != typeof (r = e[n])) {
            if (((a = r.id), !t || !i.call(t, a)))
              throw (((l = new Error(
                "A value must be provided for: " + a
              )).variableId = a),
              l);
            (s = t[a]),
              r.options
                ? (c += this._format(r.getOption(s), t))
                : (c += r.format(s));
          } else c += r;
        return c;
      }),
      (g.prototype._mergeFormats = function(e, t) {
        var n,
          r,
          a = {};
        for (n in e)
          i.call(e, n) &&
            ((a[n] = r = s(e[n])), t && i.call(t, n) && o(r, t[n]));
        return a;
      }),
      (g.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [e]),
          (e = (e || []).concat(g.defaultLocale));
        var t,
          n,
          i,
          o,
          r = g.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1)
          for (i = e[t].toLowerCase().split("-"); i.length; ) {
            if ((o = r[i.join("-")])) return o.locale;
            i.pop();
          }
        var a = e.pop();
        throw new Error(
          "No locale data has been added to IntlMessageFormat for: " +
            e.join(", ") +
            ", or the default locale: " +
            a
        );
      });
    var _ = {
      locale: "en",
      pluralRuleFunction: function(e, t) {
        var n = String(e).split("."),
          i = !n[1],
          o = Number(n[0]) == e,
          r = o && n[0].slice(-1),
          a = o && n[0].slice(-2);
        return t
          ? 1 == r && 11 != a
            ? "one"
            : 2 == r && 12 != a
            ? "two"
            : 3 == r && 13 != a
            ? "few"
            : "other"
          : 1 == e && i
          ? "one"
          : "other";
      },
    };
    m.__addLocaleData(_), (m.defaultLocale = "en");
    var y = m;
    n.d(t, "a", function() {
      return v;
    }),
      n.d(t, "b", function() {
        return w;
      });
    const v = (e, t, n, i) => (
        (e._localizationCache = {}),
        (o, ...r) => {
          if (!(o && n && t && n[t])) return "";
          const a = n[t][o];
          if (!a) return "";
          const s = o + a;
          let l = e._localizationCache[s];
          l || ((l = new y(a, t, i)), (e._localizationCache[s] = l));
          const c = {};
          for (let e = 0; e < r.length; e += 2) c[r[e]] = r[e + 1];
          try {
            return l.format(c);
          } catch (d) {
            return "Translation " + d;
          }
        }
      ),
      w = (e, t, n) => {
        const i = [t];
        return (
          n &&
            Object.keys(n).forEach((e) => {
              i.push(e), i.push(n[e]);
            }),
          e(...i)
        );
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(4);
    const i = {
      properties: {
        name: { type: String },
        value: { notify: !0, type: String },
        required: { type: Boolean, value: !1 },
      },
      attached: function() {},
      detached: function() {},
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4);
    var i = n(46);
    let o = null;
    const r = {
      properties: {
        validator: { type: String },
        invalid: {
          notify: !0,
          reflectToAttribute: !0,
          type: Boolean,
          value: !1,
          observer: "_invalidChanged",
        },
      },
      registered: function() {
        o = new i.a({ type: "validator" });
      },
      _invalidChanged: function() {
        this.invalid
          ? this.setAttribute("aria-invalid", "true")
          : this.removeAttribute("aria-invalid");
      },
      get _validator() {
        return o && o.byKey(this.validator);
      },
      hasValidator: function() {
        return null != this._validator;
      },
      validate: function(e) {
        return (
          void 0 === e && void 0 !== this.value
            ? (this.invalid = !this._getValidity(this.value))
            : (this.invalid = !this._getValidity(e)),
          !this.invalid
        );
      },
      _getValidity: function(e) {
        return !this.hasValidator() || this._validator.validate(e);
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    n(7);
    let i = !1,
      o = [],
      r = [];
    function a() {
      (i = !0),
        requestAnimationFrame(function() {
          (i = !1),
            s(o),
            setTimeout(function() {
              !(function(e) {
                for (let t = 0, n = e.length; t < n; t++) l(e.shift());
              })(r);
            });
        });
    }
    function s(e) {
      for (; e.length; ) l(e.shift());
    }
    function l(e) {
      const t = e[0],
        n = e[1],
        i = e[2];
      try {
        n.apply(t, i);
      } catch (o) {
        setTimeout(() => {
          throw o;
        });
      }
    }
    function c(e, t, n) {
      i || a(), r.push([e, t, n]);
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(7);
    var i = n(49),
      o = n(11);
    function r(e) {
      return "slot" === e.localName;
    }
    class a {
      static getFlattenedNodes(e) {
        return r(e)
          ? (e = e).assignedNodes({ flatten: !0 })
          : Array.from(e.childNodes)
              .map((e) => (r(e) ? (e = e).assignedNodes({ flatten: !0 }) : [e]))
              .reduce((e, t) => e.concat(t), []);
      }
      constructor(e, t) {
        (this._shadyChildrenObserver = null),
          (this._nativeChildrenObserver = null),
          (this._connected = !1),
          (this._target = e),
          (this.callback = t),
          (this._effectiveNodes = []),
          (this._observer = null),
          (this._scheduled = !1),
          (this._boundSchedule = () => {
            this._schedule();
          }),
          this.connect(),
          this._schedule();
      }
      connect() {
        r(this._target)
          ? this._listenSlots([this._target])
          : this._target.children &&
            (this._listenSlots(this._target.children),
            window.ShadyDOM
              ? (this._shadyChildrenObserver = ShadyDOM.observeChildren(
                  this._target,
                  (e) => {
                    this._processMutations(e);
                  }
                ))
              : ((this._nativeChildrenObserver = new MutationObserver((e) => {
                  this._processMutations(e);
                })),
                this._nativeChildrenObserver.observe(this._target, {
                  childList: !0,
                }))),
          (this._connected = !0);
      }
      disconnect() {
        r(this._target)
          ? this._unlistenSlots([this._target])
          : this._target.children &&
            (this._unlistenSlots(this._target.children),
            window.ShadyDOM && this._shadyChildrenObserver
              ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver),
                (this._shadyChildrenObserver = null))
              : this._nativeChildrenObserver &&
                (this._nativeChildrenObserver.disconnect(),
                (this._nativeChildrenObserver = null))),
          (this._connected = !1);
      }
      _schedule() {
        this._scheduled ||
          ((this._scheduled = !0), o.c.run(() => this.flush()));
      }
      _processMutations(e) {
        this._processSlotMutations(e), this.flush();
      }
      _processSlotMutations(e) {
        if (e)
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            n.addedNodes && this._listenSlots(n.addedNodes),
              n.removedNodes && this._unlistenSlots(n.removedNodes);
          }
      }
      flush() {
        if (!this._connected) return !1;
        window.ShadyDOM && ShadyDOM.flush(),
          this._nativeChildrenObserver
            ? this._processSlotMutations(
                this._nativeChildrenObserver.takeRecords()
              )
            : this._shadyChildrenObserver &&
              this._processSlotMutations(
                this._shadyChildrenObserver.takeRecords()
              ),
          (this._scheduled = !1);
        let e = { target: this._target, addedNodes: [], removedNodes: [] },
          t = this.constructor.getFlattenedNodes(this._target),
          n = Object(i.a)(t, this._effectiveNodes);
        for (let i, r = 0; r < n.length && (i = n[r]); r++)
          for (let t, n = 0; n < i.removed.length && (t = i.removed[n]); n++)
            e.removedNodes.push(t);
        for (let i, r = 0; r < n.length && (i = n[r]); r++)
          for (let n = i.index; n < i.index + i.addedCount; n++)
            e.addedNodes.push(t[n]);
        this._effectiveNodes = t;
        let o = !1;
        return (
          (e.addedNodes.length || e.removedNodes.length) &&
            ((o = !0), this.callback.call(this._target, e)),
          o
        );
      }
      _listenSlots(e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          r(n) && n.addEventListener("slotchange", this._boundSchedule);
        }
      }
      _unlistenSlots(e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          r(n) && n.removeEventListener("slotchange", this._boundSchedule);
        }
      }
    }
  },
  function(e, t, n) {
    "use strict";
    let i,
      o = null,
      r = (window.HTMLImports && window.HTMLImports.whenReady) || null;
    function a(e) {
      requestAnimationFrame(function() {
        r
          ? r(e)
          : (o ||
              ((o = new Promise((e) => {
                i = e;
              })),
              "complete" === document.readyState
                ? i()
                : document.addEventListener("readystatechange", () => {
                    "complete" === document.readyState && i();
                  })),
            o.then(function() {
              e && e();
            }));
      });
    }
    n.d(t, "a", function() {
      return u;
    });
    const s = "__seenByShadyCSS",
      l = "__shadyCSSCachedStyle";
    let c = null,
      d = null;
    class u {
      constructor() {
        (this.customStyles = []),
          (this.enqueued = !1),
          a(() => {
            window.ShadyCSS.flushCustomStyles &&
              window.ShadyCSS.flushCustomStyles();
          });
      }
      enqueueDocumentValidation() {
        !this.enqueued && d && ((this.enqueued = !0), a(d));
      }
      addCustomStyle(e) {
        e[s] ||
          ((e[s] = !0),
          this.customStyles.push(e),
          this.enqueueDocumentValidation());
      }
      getStyleForCustomStyle(e) {
        if (e[l]) return e[l];
        let t;
        return (t = e.getStyle ? e.getStyle() : e);
      }
      processStyles() {
        const e = this.customStyles;
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (n[l]) continue;
          const i = this.getStyleForCustomStyle(n);
          if (i) {
            const e = i.__appliedElement || i;
            c && c(e), (n[l] = e);
          }
        }
        return e;
      }
    }
    (u.prototype.addCustomStyle = u.prototype.addCustomStyle),
      (u.prototype.getStyleForCustomStyle = u.prototype.getStyleForCustomStyle),
      (u.prototype.processStyles = u.prototype.processStyles),
      Object.defineProperties(u.prototype, {
        transformCallback: {
          get: () => c,
          set(e) {
            c = e;
          },
        },
        validateCallback: {
          get: () => d,
          set(e) {
            let t = !1;
            d || (t = !0), (d = e), t && this.enqueueDocumentValidation();
          },
        },
      });
  },
  function(e, t, n) {
    "use strict";
    var i = n(12);
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "c", function() {
        return r;
      }),
      n.d(t, "b", function() {
        return a;
      });
    const o = async (e, t) => {
        return (await e.sendMessagePromise({
          type: "frontend/get_user_data",
          key: t,
        })).value;
      },
      r = async (e, t, n) =>
        e.sendMessagePromise({
          type: "frontend/set_user_data",
          key: t,
          value: n,
        }),
      a = (e, t) =>
        ((e, t, n, o, r) => {
          const a = `${n}-optimistic`,
            s = Object(i.h)(t, n, o, async (e, n) => {
              const i = r ? r(t, n) : void 0;
              return (
                (t[a] = n),
                () => {
                  i && i.then((e) => e()), (t[a] = void 0);
                }
              );
            });
          return Object.assign({}, s, {
            async save(n) {
              const i = t[a];
              let o;
              i && ((o = i.state), i.setState(n, !0));
              try {
                return await e(t, n);
              } catch (r) {
                throw (i && i.setState(o, !0), r);
              }
            },
          });
        })((n, i) => r(e, t, i), e, `_frontendUserData-${t}`, () => o(e, t));
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return r;
      });
    const i = `${location.protocol}//${location.host}`,
      o = (e, t) => e.callWS({ type: "auth/sign_path", path: t }),
      r = () => fetch("/auth/providers", { credentials: "same-origin" });
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4), n(108);
    var i = n(53),
      o = n(1);
    const r = {
      properties: {
        noink: { type: Boolean, observer: "_noinkChanged" },
        _rippleContainer: { type: Object },
      },
      _buttonStateChanged: function() {
        this.focused && this.ensureRipple();
      },
      _downHandler: function(e) {
        i.b._downHandler.call(this, e), this.pressed && this.ensureRipple(e);
      },
      ensureRipple: function(e) {
        if (!this.hasRipple()) {
          (this._ripple = this._createRipple()),
            (this._ripple.noink = this.noink);
          var t = this._rippleContainer || this.root;
          if ((t && Object(o.a)(t).appendChild(this._ripple), e)) {
            var n = Object(o.a)(this._rippleContainer || this),
              i = Object(o.a)(e).rootTarget;
            n.deepContains(i) && this._ripple.uiDownAction(e);
          }
        }
      },
      getRipple: function() {
        return this.ensureRipple(), this._ripple;
      },
      hasRipple: function() {
        return Boolean(this._ripple);
      },
      _createRipple: function() {
        return document.createElement("paper-ripple");
      },
      _noinkChanged: function(e) {
        this.hasRipple() && (this._ripple.noink = e);
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(4);
    const i = {
      attached: function() {
        this.fire("addon-attached");
      },
      update: function(e) {},
    };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return s;
      });
    var i = n(43);
    let o = {
      attached: !0,
      detached: !0,
      ready: !0,
      created: !0,
      beforeRegister: !0,
      registered: !0,
      attributeChanged: !0,
      behaviors: !0,
    };
    function r(e, t) {
      if (!e) return (t = t);
      (t = Object(i.a)(t)), Array.isArray(e) || (e = [e]);
      let n = t.prototype.behaviors;
      return (
        (t = (function e(t, n) {
          for (let i = 0; i < t.length; i++) {
            let o = t[i];
            o && (n = Array.isArray(o) ? e(o, n) : a(o, n));
          }
          return n;
        })(
          (e = (function e(t, n, i) {
            n = n || [];
            for (let o = t.length - 1; o >= 0; o--) {
              let r = t[o];
              r
                ? Array.isArray(r)
                  ? e(r, n)
                  : n.indexOf(r) < 0 && (!i || i.indexOf(r) < 0) && n.unshift(r)
                : console.warn(
                    "behavior is null, check for missing or 404 import"
                  );
            }
            return n;
          })(e, null, n)),
          t
        )),
        n && (e = n.concat(e)),
        (t.prototype.behaviors = e),
        t
      );
    }
    function a(e, t) {
      class n extends t {
        static get properties() {
          return e.properties;
        }
        static get observers() {
          return e.observers;
        }
        created() {
          super.created(), e.created && e.created.call(this);
        }
        _registered() {
          super._registered(),
            e.beforeRegister &&
              e.beforeRegister.call(Object.getPrototypeOf(this)),
            e.registered && e.registered.call(Object.getPrototypeOf(this));
        }
        _applyListeners() {
          if ((super._applyListeners(), e.listeners))
            for (let t in e.listeners)
              this._addMethodEventListenerToNode(this, t, e.listeners[t]);
        }
        _ensureAttributes() {
          if (e.hostAttributes)
            for (let t in e.hostAttributes)
              this._ensureAttribute(t, e.hostAttributes[t]);
          super._ensureAttributes();
        }
        ready() {
          super.ready(), e.ready && e.ready.call(this);
        }
        attached() {
          super.attached(), e.attached && e.attached.call(this);
        }
        detached() {
          super.detached(), e.detached && e.detached.call(this);
        }
        attributeChanged(t, n, i) {
          super.attributeChanged(t, n, i),
            e.attributeChanged && e.attributeChanged.call(this, t, n, i);
        }
      }
      n.generatedFrom = e;
      for (let i in e)
        if (!(i in o)) {
          let t = Object.getOwnPropertyDescriptor(e, i);
          t && Object.defineProperty(n.prototype, i, t);
        }
      return n;
    }
    const s = function(e, t) {
      e || console.warn("Polymer's Class function requires `info` argument");
      const n = e.behaviors
          ? r(e.behaviors, HTMLElement)
          : Object(i.a)(HTMLElement),
        o = a(e, t ? t(n) : n);
      return (o.is = e.is), o;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var i = n(10);
    const o = new WeakMap(),
      r = Object(i.f)((e) => (t) => {
        if (
          !(t instanceof i.a) ||
          t instanceof i.c ||
          "class" !== t.committer.name ||
          t.committer.parts.length > 1
        )
          throw new Error(
            "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
          );
        const { committer: n } = t,
          { element: r } = n;
        o.has(t) || (r.className = n.strings.join(" "));
        const { classList: a } = r,
          s = o.get(t);
        for (const i in s) i in e || a.remove(i);
        for (const i in e) {
          const t = e[i];
          if (!s || t !== s[i]) {
            a[t ? "add" : "remove"](i);
          }
        }
        o.set(t, e);
      });
  },
  function(e, t, n) {
    "use strict";
    var i = n(63),
      o = n(28),
      r = n(13);
    const a = new i.a();
    window.ShadyCSS ||
      (window.ShadyCSS = {
        prepareTemplate(e, t, n) {},
        prepareTemplateDom(e, t) {},
        prepareTemplateStyles(e, t, n) {},
        styleSubtree(e, t) {
          a.processStyles(), Object(o.c)(e, t);
        },
        styleElement(e) {
          a.processStyles();
        },
        styleDocument(e) {
          a.processStyles(), Object(o.c)(document.body, e);
        },
        getComputedStyleValue: (e, t) => Object(o.b)(e, t),
        flushCustomStyles() {},
        nativeCss: r.c,
        nativeShadow: r.d,
        cssBuild: r.a,
        disableRuntime: r.b,
      }),
      (window.ShadyCSS.CustomStyleInterface = a);
    var s = n(42);
    const l = "include",
      c = window.ShadyCSS.CustomStyleInterface;
    window.customElements.define(
      "custom-style",
      class extends HTMLElement {
        constructor() {
          super(), (this._style = null), c.addCustomStyle(this);
        }
        getStyle() {
          if (this._style) return this._style;
          const e = this.querySelector("style");
          if (!e) return null;
          this._style = e;
          const t = e.getAttribute(l);
          return (
            t &&
              (e.removeAttribute(l),
              (e.textContent = Object(s.a)(t) + e.textContent)),
            this.ownerDocument !== window.document &&
              window.document.head.appendChild(this),
            this._style
          );
        }
      }
    );
  },
  function(e, t) {},
  function(e, t, n) {
    "use strict";
    var i = n(10),
      o = function(e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
    var r = function() {
      return (r =
        Object.assign ||
        function(e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    var a,
      s,
      l = (function() {
        function e(e) {
          void 0 === e && (e = {}), (this.adapter_ = e);
        }
        return (
          Object.defineProperty(e, "cssClasses", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e, "strings", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e, "numbers", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e, "defaultAdapter", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.init = function() {}),
          (e.prototype.destroy = function() {}),
          e
        );
      })(),
      c = {
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded",
      },
      d = {
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top",
      },
      u = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300,
      };
    function p(e, t) {
      if (
        (void 0 === e && (e = window),
        void 0 === t && (t = !1),
        void 0 === s || t)
      ) {
        var n = !1;
        try {
          e.document.addEventListener("test", function() {}, {
            get passive() {
              return (n = !0);
            },
          });
        } catch (i) {}
        s = n;
      }
      return !!s && { passive: !0 };
    }
    var h = ["touchstart", "pointerdown", "mousedown", "keydown"],
      f = ["touchend", "pointerup", "mouseup", "contextmenu"],
      b = [],
      m = (function(e) {
        function t(n) {
          var i = e.call(this, r({}, t.defaultAdapter, n)) || this;
          return (
            (i.activationAnimationHasEnded_ = !1),
            (i.activationTimer_ = 0),
            (i.fgDeactivationRemovalTimer_ = 0),
            (i.fgScale_ = "0"),
            (i.frame_ = { width: 0, height: 0 }),
            (i.initialSize_ = 0),
            (i.layoutFrame_ = 0),
            (i.maxRadius_ = 0),
            (i.unboundedCoords_ = { left: 0, top: 0 }),
            (i.activationState_ = i.defaultActivationState_()),
            (i.activationTimerCallback_ = function() {
              (i.activationAnimationHasEnded_ = !0),
                i.runDeactivationUXLogicIfReady_();
            }),
            (i.activateHandler_ = function(e) {
              return i.activate_(e);
            }),
            (i.deactivateHandler_ = function() {
              return i.deactivate_();
            }),
            (i.focusHandler_ = function() {
              return i.handleFocus();
            }),
            (i.blurHandler_ = function() {
              return i.handleBlur();
            }),
            (i.resizeHandler_ = function() {
              return i.layout();
            }),
            i
          );
        }
        return (
          (function(e, t) {
            function n() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          })(t, e),
          Object.defineProperty(t, "cssClasses", {
            get: function() {
              return c;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t, "strings", {
            get: function() {
              return d;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t, "numbers", {
            get: function() {
              return u;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t, "defaultAdapter", {
            get: function() {
              return {
                addClass: function() {},
                browserSupportsCssVars: function() {
                  return !0;
                },
                computeBoundingRect: function() {
                  return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                  };
                },
                containsEventTarget: function() {
                  return !0;
                },
                deregisterDocumentInteractionHandler: function() {},
                deregisterInteractionHandler: function() {},
                deregisterResizeHandler: function() {},
                getWindowPageOffset: function() {
                  return { x: 0, y: 0 };
                },
                isSurfaceActive: function() {
                  return !0;
                },
                isSurfaceDisabled: function() {
                  return !0;
                },
                isUnbounded: function() {
                  return !0;
                },
                registerDocumentInteractionHandler: function() {},
                registerInteractionHandler: function() {},
                registerResizeHandler: function() {},
                removeClass: function() {},
                updateCssVariable: function() {},
              };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.init = function() {
            var e = this,
              n = this.supportsPressRipple_();
            if ((this.registerRootHandlers_(n), n)) {
              var i = t.cssClasses,
                o = i.ROOT,
                r = i.UNBOUNDED;
              requestAnimationFrame(function() {
                e.adapter_.addClass(o),
                  e.adapter_.isUnbounded() &&
                    (e.adapter_.addClass(r), e.layoutInternal_());
              });
            }
          }),
          (t.prototype.destroy = function() {
            var e = this;
            if (this.supportsPressRipple_()) {
              this.activationTimer_ &&
                (clearTimeout(this.activationTimer_),
                (this.activationTimer_ = 0),
                this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),
                this.fgDeactivationRemovalTimer_ &&
                  (clearTimeout(this.fgDeactivationRemovalTimer_),
                  (this.fgDeactivationRemovalTimer_ = 0),
                  this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));
              var n = t.cssClasses,
                i = n.ROOT,
                o = n.UNBOUNDED;
              requestAnimationFrame(function() {
                e.adapter_.removeClass(i),
                  e.adapter_.removeClass(o),
                  e.removeCssVars_();
              });
            }
            this.deregisterRootHandlers_(),
              this.deregisterDeactivationHandlers_();
          }),
          (t.prototype.activate = function(e) {
            this.activate_(e);
          }),
          (t.prototype.deactivate = function() {
            this.deactivate_();
          }),
          (t.prototype.layout = function() {
            var e = this;
            this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
              (this.layoutFrame_ = requestAnimationFrame(function() {
                e.layoutInternal_(), (e.layoutFrame_ = 0);
              }));
          }),
          (t.prototype.setUnbounded = function(e) {
            var n = t.cssClasses.UNBOUNDED;
            e ? this.adapter_.addClass(n) : this.adapter_.removeClass(n);
          }),
          (t.prototype.handleFocus = function() {
            var e = this;
            requestAnimationFrame(function() {
              return e.adapter_.addClass(t.cssClasses.BG_FOCUSED);
            });
          }),
          (t.prototype.handleBlur = function() {
            var e = this;
            requestAnimationFrame(function() {
              return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED);
            });
          }),
          (t.prototype.supportsPressRipple_ = function() {
            return this.adapter_.browserSupportsCssVars();
          }),
          (t.prototype.defaultActivationState_ = function() {
            return {
              activationEvent: void 0,
              hasDeactivationUXRun: !1,
              isActivated: !1,
              isProgrammatic: !1,
              wasActivatedByPointer: !1,
              wasElementMadeActive: !1,
            };
          }),
          (t.prototype.registerRootHandlers_ = function(e) {
            var t = this;
            e &&
              (h.forEach(function(e) {
                t.adapter_.registerInteractionHandler(e, t.activateHandler_);
              }),
              this.adapter_.isUnbounded() &&
                this.adapter_.registerResizeHandler(this.resizeHandler_)),
              this.adapter_.registerInteractionHandler(
                "focus",
                this.focusHandler_
              ),
              this.adapter_.registerInteractionHandler(
                "blur",
                this.blurHandler_
              );
          }),
          (t.prototype.registerDeactivationHandlers_ = function(e) {
            var t = this;
            "keydown" === e.type
              ? this.adapter_.registerInteractionHandler(
                  "keyup",
                  this.deactivateHandler_
                )
              : f.forEach(function(e) {
                  t.adapter_.registerDocumentInteractionHandler(
                    e,
                    t.deactivateHandler_
                  );
                });
          }),
          (t.prototype.deregisterRootHandlers_ = function() {
            var e = this;
            h.forEach(function(t) {
              e.adapter_.deregisterInteractionHandler(t, e.activateHandler_);
            }),
              this.adapter_.deregisterInteractionHandler(
                "focus",
                this.focusHandler_
              ),
              this.adapter_.deregisterInteractionHandler(
                "blur",
                this.blurHandler_
              ),
              this.adapter_.isUnbounded() &&
                this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }),
          (t.prototype.deregisterDeactivationHandlers_ = function() {
            var e = this;
            this.adapter_.deregisterInteractionHandler(
              "keyup",
              this.deactivateHandler_
            ),
              f.forEach(function(t) {
                e.adapter_.deregisterDocumentInteractionHandler(
                  t,
                  e.deactivateHandler_
                );
              });
          }),
          (t.prototype.removeCssVars_ = function() {
            var e = this,
              n = t.strings;
            Object.keys(n).forEach(function(t) {
              0 === t.indexOf("VAR_") &&
                e.adapter_.updateCssVariable(n[t], null);
            });
          }),
          (t.prototype.activate_ = function(e) {
            var t = this;
            if (!this.adapter_.isSurfaceDisabled()) {
              var n = this.activationState_;
              if (!n.isActivated) {
                var i = this.previousActivationEvent_;
                if (!(i && void 0 !== e && i.type !== e.type))
                  (n.isActivated = !0),
                    (n.isProgrammatic = void 0 === e),
                    (n.activationEvent = e),
                    (n.wasActivatedByPointer =
                      !n.isProgrammatic &&
                      (void 0 !== e &&
                        ("mousedown" === e.type ||
                          "touchstart" === e.type ||
                          "pointerdown" === e.type))),
                    void 0 !== e &&
                    b.length > 0 &&
                    b.some(function(e) {
                      return t.adapter_.containsEventTarget(e);
                    })
                      ? this.resetActivationState_()
                      : (void 0 !== e &&
                          (b.push(e.target),
                          this.registerDeactivationHandlers_(e)),
                        (n.wasElementMadeActive = this.checkElementMadeActive_(
                          e
                        )),
                        n.wasElementMadeActive && this.animateActivation_(),
                        requestAnimationFrame(function() {
                          (b = []),
                            n.wasElementMadeActive ||
                              void 0 === e ||
                              (" " !== e.key && 32 !== e.keyCode) ||
                              ((n.wasElementMadeActive = t.checkElementMadeActive_(
                                e
                              )),
                              n.wasElementMadeActive && t.animateActivation_()),
                            n.wasElementMadeActive ||
                              (t.activationState_ = t.defaultActivationState_());
                        }));
              }
            }
          }),
          (t.prototype.checkElementMadeActive_ = function(e) {
            return (
              void 0 === e ||
              "keydown" !== e.type ||
              this.adapter_.isSurfaceActive()
            );
          }),
          (t.prototype.animateActivation_ = function() {
            var e = this,
              n = t.strings,
              i = n.VAR_FG_TRANSLATE_START,
              o = n.VAR_FG_TRANSLATE_END,
              r = t.cssClasses,
              a = r.FG_DEACTIVATION,
              s = r.FG_ACTIVATION,
              l = t.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal_();
            var c = "",
              d = "";
            if (!this.adapter_.isUnbounded()) {
              var u = this.getFgTranslationCoordinates_(),
                p = u.startPoint,
                h = u.endPoint;
              (c = p.x + "px, " + p.y + "px"), (d = h.x + "px, " + h.y + "px");
            }
            this.adapter_.updateCssVariable(i, c),
              this.adapter_.updateCssVariable(o, d),
              clearTimeout(this.activationTimer_),
              clearTimeout(this.fgDeactivationRemovalTimer_),
              this.rmBoundedActivationClasses_(),
              this.adapter_.removeClass(a),
              this.adapter_.computeBoundingRect(),
              this.adapter_.addClass(s),
              (this.activationTimer_ = setTimeout(function() {
                return e.activationTimerCallback_();
              }, l));
          }),
          (t.prototype.getFgTranslationCoordinates_ = function() {
            var e,
              t = this.activationState_,
              n = t.activationEvent;
            return {
              startPoint: (e = {
                x:
                  (e = t.wasActivatedByPointer
                    ? (function(e, t, n) {
                        if (!e) return { x: 0, y: 0 };
                        var i,
                          o,
                          r = t.x,
                          a = t.y,
                          s = r + n.left,
                          l = a + n.top;
                        if ("touchstart" === e.type) {
                          var c = e;
                          (i = c.changedTouches[0].pageX - s),
                            (o = c.changedTouches[0].pageY - l);
                        } else {
                          var d = e;
                          (i = d.pageX - s), (o = d.pageY - l);
                        }
                        return { x: i, y: o };
                      })(
                        n,
                        this.adapter_.getWindowPageOffset(),
                        this.adapter_.computeBoundingRect()
                      )
                    : { x: this.frame_.width / 2, y: this.frame_.height / 2 })
                    .x -
                  this.initialSize_ / 2,
                y: e.y - this.initialSize_ / 2,
              }),
              endPoint: {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2,
              },
            };
          }),
          (t.prototype.runDeactivationUXLogicIfReady_ = function() {
            var e = this,
              n = t.cssClasses.FG_DEACTIVATION,
              i = this.activationState_,
              o = i.hasDeactivationUXRun,
              r = i.isActivated;
            (o || !r) &&
              this.activationAnimationHasEnded_ &&
              (this.rmBoundedActivationClasses_(),
              this.adapter_.addClass(n),
              (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                e.adapter_.removeClass(n);
              }, u.FG_DEACTIVATION_MS)));
          }),
          (t.prototype.rmBoundedActivationClasses_ = function() {
            var e = t.cssClasses.FG_ACTIVATION;
            this.adapter_.removeClass(e),
              (this.activationAnimationHasEnded_ = !1),
              this.adapter_.computeBoundingRect();
          }),
          (t.prototype.resetActivationState_ = function() {
            var e = this;
            (this.previousActivationEvent_ = this.activationState_.activationEvent),
              (this.activationState_ = this.defaultActivationState_()),
              setTimeout(function() {
                return (e.previousActivationEvent_ = void 0);
              }, t.numbers.TAP_DELAY_MS);
          }),
          (t.prototype.deactivate_ = function() {
            var e = this,
              t = this.activationState_;
            if (t.isActivated) {
              var n = r({}, t);
              t.isProgrammatic
                ? (requestAnimationFrame(function() {
                    return e.animateDeactivation_(n);
                  }),
                  this.resetActivationState_())
                : (this.deregisterDeactivationHandlers_(),
                  requestAnimationFrame(function() {
                    (e.activationState_.hasDeactivationUXRun = !0),
                      e.animateDeactivation_(n),
                      e.resetActivationState_();
                  }));
            }
          }),
          (t.prototype.animateDeactivation_ = function(e) {
            var t = e.wasActivatedByPointer,
              n = e.wasElementMadeActive;
            (t || n) && this.runDeactivationUXLogicIfReady_();
          }),
          (t.prototype.layoutInternal_ = function() {
            var e = this;
            this.frame_ = this.adapter_.computeBoundingRect();
            var n = Math.max(this.frame_.height, this.frame_.width);
            (this.maxRadius_ = this.adapter_.isUnbounded()
              ? n
              : Math.sqrt(
                  Math.pow(e.frame_.width, 2) + Math.pow(e.frame_.height, 2)
                ) + t.numbers.PADDING),
              (this.initialSize_ = Math.floor(
                n * t.numbers.INITIAL_ORIGIN_SCALE
              )),
              (this.fgScale_ = "" + this.maxRadius_ / this.initialSize_),
              this.updateLayoutCssVars_();
          }),
          (t.prototype.updateLayoutCssVars_ = function() {
            var e = t.strings,
              n = e.VAR_FG_SIZE,
              i = e.VAR_LEFT,
              o = e.VAR_TOP,
              r = e.VAR_FG_SCALE;
            this.adapter_.updateCssVariable(n, this.initialSize_ + "px"),
              this.adapter_.updateCssVariable(r, this.fgScale_),
              this.adapter_.isUnbounded() &&
                ((this.unboundedCoords_ = {
                  left: Math.round(
                    this.frame_.width / 2 - this.initialSize_ / 2
                  ),
                  top: Math.round(
                    this.frame_.height / 2 - this.initialSize_ / 2
                  ),
                }),
                this.adapter_.updateCssVariable(
                  i,
                  this.unboundedCoords_.left + "px"
                ),
                this.adapter_.updateCssVariable(
                  o,
                  this.unboundedCoords_.top + "px"
                ));
          }),
          t
        );
      })(l);
    const g = n(15)
      .c`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;
    function _(e, t) {
      return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(
        e,
        t
      );
    }
    n.d(t, "a", function() {
      return C;
    });
    const y = (function(e, t) {
        void 0 === t && (t = !1);
        var n = e.CSS,
          i = a;
        if ("boolean" == typeof a && !t) return a;
        if (!n || "function" != typeof n.supports) return !1;
        var o = n.supports("--css-vars", "yes"),
          r =
            n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
        return (
          (i = !(
            (!o && !r) ||
            (function(e) {
              var t = e.document,
                n = t.createElement("div");
              (n.className = "mdc-ripple-surface--test-edge-var-bug"),
                t.body.appendChild(n);
              var i = e.getComputedStyle(n),
                o = null !== i && "solid" === i.borderTopStyle;
              return n.remove(), o;
            })(e)
          )),
          t || (a = i),
          i
        );
      })(window),
      v = navigator.userAgent.match(/Safari/);
    let w = !1;
    const x = (e) => {
        v &&
          !w &&
          (() => {
            w = !0;
            const e = new i.b({ templateFactory: i.l });
            e.appendInto(document.head), e.setValue(g), e.commit();
          })();
        const t = e.surfaceNode,
          n = e.interactionNode || t;
        n.getRootNode() !== t.getRootNode() &&
          "" === n.style.position &&
          (n.style.position = "relative");
        const o = new m({
          browserSupportsCssVars: () => y,
          isUnbounded: () => void 0 === e.unbounded || e.unbounded,
          isSurfaceActive: () => _(n, ":active"),
          isSurfaceDisabled: () => Boolean(e.disabled),
          addClass: (e) => t.classList.add(e),
          removeClass: (e) => t.classList.remove(e),
          containsEventTarget: (e) => n.contains(e),
          registerInteractionHandler: (e, t) => n.addEventListener(e, t, p()),
          deregisterInteractionHandler: (e, t) =>
            n.removeEventListener(e, t, p()),
          registerDocumentInteractionHandler: (e, t) =>
            document.documentElement.addEventListener(e, t, p()),
          deregisterDocumentInteractionHandler: (e, t) =>
            document.documentElement.removeEventListener(e, t, p()),
          registerResizeHandler: (e) => window.addEventListener("resize", e),
          deregisterResizeHandler: (e) =>
            window.removeEventListener("resize", e),
          updateCssVariable: (e, n) => t.style.setProperty(e, n),
          computeBoundingRect: () => t.getBoundingClientRect(),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
        });
        return o.init(), o;
      },
      k = new WeakMap(),
      C = Object(i.f)((e = {}) => (t) => {
        const n = t.committer.element,
          o = e.interactionNode || n;
        let r = t.value;
        const a = k.get(r);
        void 0 !== a && a !== o && (r.destroy(), (r = i.h)),
          r === i.h
            ? ((r = x(Object.assign({}, e, { surfaceNode: n }))),
              k.set(r, o),
              t.setValue(r))
            : (void 0 !== e.unbounded && r.setUnbounded(e.unbounded),
              void 0 !== e.disabled && r.setUnbounded(e.disabled)),
          !0 === e.active ? r.activate() : !1 === e.active && r.deactivate();
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(50);
    const o = (e = !0) => {
      "serviceWorker" in navigator &&
        ("https:" === location.protocol || "localhost" === location.hostname) &&
        (navigator.serviceWorker.register("/service_worker.js").then((t) => {
          t.addEventListener("updatefound", () => {
            const n = t.installing;
            n &&
              e &&
              n.addEventListener("statechange", () => {
                if (
                  "installed" === n.state &&
                  navigator.serviceWorker.controller
                ) {
                  const e = window.document.querySelector(
                    "home-assistant, ha-onboarding"
                  );
                  Object(i.a)(e, {
                    message: "A new version of the frontend is available.",
                    action: {
                      action: () => n.postMessage({ type: "skipWaiting" }),
                      text: "reload",
                    },
                    duration: 0,
                    dismissable: !1,
                  });
                }
              });
          });
        }),
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          location.reload();
        }));
    };
  },
  function(e) {
    e.exports = {
      fragments: [
        "config",
        "history",
        "logbook",
        "mailbox",
        "profile",
        "shopping-list",
        "page-authorize",
        "page-demo",
        "page-onboarding",
        "developer-tools",
      ],
      translations: {
        af: {
          nativeName: "Afrikaans",
          fingerprints: {
            af: "af-91108a7449f76a97a2565f10995dc162.json",
            "config/af": "config/af-e4b50392cb9af5c501a55e32b4962d65.json",
            "developer-tools/af":
              "developer-tools/af-9cb40600f90d672c80a0ff85bfeda089.json",
            "history/af": "history/af-24952254b8606ca48d3df36410430b20.json",
            "logbook/af": "logbook/af-3989c57a2689ec6517ba0733447294d9.json",
            "mailbox/af": "mailbox/af-d1f4b114665e2b06b246db7fabc8b8f5.json",
            "page-demo/af":
              "page-demo/af-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/af":
              "page-onboarding/af-9dd23e2b04c73f9f21d78925288232c2.json",
            "page-authorize/af":
              "page-authorize/af-759abf65ceac7ce9333a24b107179629.json",
            "profile/af": "profile/af-a1711cc81734a6422343e54ff7221f24.json",
            "shopping-list/af":
              "shopping-list/af-8a603244a3b2451b2915bf1f1c49371d.json",
          },
        },
        ar: {
          nativeName: "العربية",
          isRTL: !0,
          fingerprints: {
            ar: "ar-5f3b4aeacf1f0bd25cb027202b57022c.json",
            "config/ar": "config/ar-8cafa44b3992804e377ba516d9a46222.json",
            "developer-tools/ar":
              "developer-tools/ar-6fbf57f0bdef5c22b30ad6d997ef1ea4.json",
            "history/ar": "history/ar-c321d3dac3049b82ad4eede78ff91b9c.json",
            "logbook/ar": "logbook/ar-b50db777a7a02cf46c839403a1bf121e.json",
            "mailbox/ar": "mailbox/ar-2509d061cee5c986656fb3e07c99b36c.json",
            "page-demo/ar":
              "page-demo/ar-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/ar":
              "page-onboarding/ar-d520d96b0a55f1046f508ef54eeffe6a.json",
            "page-authorize/ar":
              "page-authorize/ar-183f48e4ee97d0f1ff2b0a02bcfa1b70.json",
            "profile/ar": "profile/ar-df2d0c5a45c25c459d3352360ab16662.json",
            "shopping-list/ar":
              "shopping-list/ar-99024fec625c3df4dfa08e57cc0ba426.json",
          },
        },
        bg: {
          nativeName: "Български",
          fingerprints: {
            bg: "bg-e34128d554811bf9c27b95e858465ea5.json",
            "config/bg": "config/bg-2936b4a573d699412307939ebe210254.json",
            "developer-tools/bg":
              "developer-tools/bg-02d5e226ce8fae4d10616c1514790d92.json",
            "history/bg": "history/bg-5284d1b81db0ce4d8fbdc9f38b9776e7.json",
            "logbook/bg": "logbook/bg-e5a1fefc58753b085d7207129e8fd8dd.json",
            "mailbox/bg": "mailbox/bg-6784c67b918f82efb683b3015a146393.json",
            "page-demo/bg":
              "page-demo/bg-f7c8148a0929d4f3a66874ed61bc96c8.json",
            "page-onboarding/bg":
              "page-onboarding/bg-80f1d434c263bc22a287296198a1f21d.json",
            "page-authorize/bg":
              "page-authorize/bg-a711810c3bf22f6b8a9eb6594579608d.json",
            "profile/bg": "profile/bg-9d72fd10cc918a637e5baa7875a63c12.json",
            "shopping-list/bg":
              "shopping-list/bg-b9d8774859dd369e8870a809c46d38bf.json",
          },
        },
        bs: {
          nativeName: "Bosanski",
          fingerprints: {
            bs: "bs-2470d8dec81b651bb55a26ce3a79a8a9.json",
            "config/bs": "config/bs-fb048e4e188bc85e23b1df221d7ba813.json",
            "developer-tools/bs":
              "developer-tools/bs-3878bbfaab635d6971df49f592867dde.json",
            "history/bs": "history/bs-ff19fc552bb533b540bbadf9f88e6b78.json",
            "logbook/bs": "logbook/bs-4b07c9bd5066c18c47b980b51da20dcc.json",
            "mailbox/bs": "mailbox/bs-b6910682902a5993edf247a428bd9ad3.json",
            "page-demo/bs":
              "page-demo/bs-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/bs":
              "page-onboarding/bs-59c5141390775ca17f1f8a34de8bc240.json",
            "page-authorize/bs":
              "page-authorize/bs-d4428548168f7438050691b1ad3d14fe.json",
            "profile/bs": "profile/bs-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/bs":
              "shopping-list/bs-4f2f7e9d9ee35e3c3bd7d8f30cef36a8.json",
          },
        },
        ca: {
          nativeName: "Català",
          fingerprints: {
            ca: "ca-34f9be92b317d6c57bcea157c58e9085.json",
            "config/ca": "config/ca-d92172b28860d7269ff79824e6a9c067.json",
            "developer-tools/ca":
              "developer-tools/ca-fb8ecdfcc4d8efac50f1e9c728d119a4.json",
            "history/ca": "history/ca-726032ecfcc6833b0add4babd6b02b1e.json",
            "logbook/ca": "logbook/ca-fca3a2001f167aa12e2405a0153fc66d.json",
            "mailbox/ca": "mailbox/ca-1265a6be3775573dcd808c56b3160c61.json",
            "page-demo/ca":
              "page-demo/ca-e37aebcbe9f4bf9b948d29ec6cf929ad.json",
            "page-onboarding/ca":
              "page-onboarding/ca-82932611ffef50e9ca19b777fc97af1a.json",
            "page-authorize/ca":
              "page-authorize/ca-5fb6daa0e5d534748b6102a5b1ac6d52.json",
            "profile/ca": "profile/ca-8c8a8fde8f6d188eb6c94b2ac17dcba0.json",
            "shopping-list/ca":
              "shopping-list/ca-7ec2d8a4e8c44bd1ccfac29531cb3f87.json",
          },
        },
        cs: {
          nativeName: "Čeština",
          fingerprints: {
            cs: "cs-c71e3de5a74f0294e4b62766518b8be1.json",
            "config/cs": "config/cs-cc976fe397ee61bff138ce0539e82075.json",
            "developer-tools/cs":
              "developer-tools/cs-fcb0bfcdefd278a5b4cfce3889de153c.json",
            "history/cs": "history/cs-0d545a3ecafd870b3098a3d8f76580f7.json",
            "logbook/cs": "logbook/cs-d01eec1fd0b14305f0c34019cc2d6cc6.json",
            "mailbox/cs": "mailbox/cs-670a0d6dd38d7b32159aa197feb766a5.json",
            "page-demo/cs":
              "page-demo/cs-fc78eb37009b0f6121f211e4240d8e2b.json",
            "page-onboarding/cs":
              "page-onboarding/cs-9e220d215e8f196e3bcd229a19a508e6.json",
            "page-authorize/cs":
              "page-authorize/cs-2aece99eab557755dfe851a44e497352.json",
            "profile/cs": "profile/cs-62f241a266710122de5462a35cf9d138.json",
            "shopping-list/cs":
              "shopping-list/cs-ce6e7e83b1df2ee1c3c769dd1f89f95d.json",
          },
        },
        cy: {
          nativeName: "Cymraeg",
          fingerprints: {
            cy: "cy-bbc196925ce71a990cca4b769a3fd2f4.json",
            "config/cy": "config/cy-d3d005e94aa96fb3ff025edb645ec9c1.json",
            "developer-tools/cy":
              "developer-tools/cy-8687d72b7c64e02bc04b7231ea0abcf0.json",
            "history/cy": "history/cy-b2ef9a050371463a2881c0f8d4dab5af.json",
            "logbook/cy": "logbook/cy-997b83ce87f8075cb41d6b629e9eafcd.json",
            "mailbox/cy": "mailbox/cy-170e5f1d136086aba8283acbdeef31ac.json",
            "page-demo/cy":
              "page-demo/cy-ae9412196cf431a465de351b419ad169.json",
            "page-onboarding/cy":
              "page-onboarding/cy-32fc807c548e0ff89dd804afa6002066.json",
            "page-authorize/cy":
              "page-authorize/cy-f5406af5db3707d008a939f51259dc18.json",
            "profile/cy": "profile/cy-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/cy":
              "shopping-list/cy-69532d7d5274bc12c0e56a993e8526d7.json",
          },
        },
        da: {
          nativeName: "Dansk",
          fingerprints: {
            da: "da-96134dc44e17783947a779740b5d5a60.json",
            "config/da": "config/da-0d0a47c7670cdcdfadf56e0c16d3d035.json",
            "developer-tools/da":
              "developer-tools/da-343c47f59d77a6f013af627cee4b5173.json",
            "history/da": "history/da-e9076a2d5e91c3778de3802b208e4205.json",
            "logbook/da": "logbook/da-3dd8c7c0805c203110ecbc6028cbd5ff.json",
            "mailbox/da": "mailbox/da-4d8b449fed095727b7cac57c8259b598.json",
            "page-demo/da":
              "page-demo/da-8911c7375053ffdccb3ae57fd063d95e.json",
            "page-onboarding/da":
              "page-onboarding/da-34e22b92d66fb54907d6305be6bdfb27.json",
            "page-authorize/da":
              "page-authorize/da-146c1459537594949bb9a52ad6fb9259.json",
            "profile/da": "profile/da-817105b99a1896ffa1e4e93d5bed68ab.json",
            "shopping-list/da":
              "shopping-list/da-702f5daf0b2e1464b0719fd252f32a56.json",
          },
        },
        de: {
          nativeName: "Deutsch",
          fingerprints: {
            de: "de-f44a90d35e3d3709e2ccf033de8bf2b6.json",
            "config/de": "config/de-ba60b85dc30629e589cd320708daecb7.json",
            "developer-tools/de":
              "developer-tools/de-0fd235630bf1b7d46aea94545f03fd90.json",
            "history/de": "history/de-4e70209d9cde408a3a51a351e24e04cb.json",
            "logbook/de": "logbook/de-48bf0e770258c71f34330f92a257e954.json",
            "mailbox/de": "mailbox/de-006c408a6647fcb43c8364ee1928c1fb.json",
            "page-demo/de":
              "page-demo/de-eb736c0d4d05c58acf436e10d31a9f56.json",
            "page-onboarding/de":
              "page-onboarding/de-35fc44c0a26b5c0c75e51a13439c7ac9.json",
            "page-authorize/de":
              "page-authorize/de-01abb7c79c8be5d3a62e8683879e0188.json",
            "profile/de": "profile/de-76f47d4bc5ace6b7a74c605d74c97d0f.json",
            "shopping-list/de":
              "shopping-list/de-66db7a1493ed065e6cddec43d7f275c7.json",
          },
        },
        el: {
          nativeName: "Ελληνικά",
          fingerprints: {
            el: "el-81272e2bf605f4d3f3ef7e2644708f8f.json",
            "config/el": "config/el-468ec22176efc3a4d1582aef022cb7b8.json",
            "developer-tools/el":
              "developer-tools/el-5e9d0e4bdde07abafb57c42ee43d288d.json",
            "history/el": "history/el-7691d87ff15b72aa6da9aa0d34447c9d.json",
            "logbook/el": "logbook/el-d67b0eab3d5de77458d27c4ac556da79.json",
            "mailbox/el": "mailbox/el-b3fc6cb665e41fceb2ec0c68aafd807a.json",
            "page-demo/el":
              "page-demo/el-58ea2477b5a92cde20cfcdaa0addf7d8.json",
            "page-onboarding/el":
              "page-onboarding/el-9e73578d8cbcf97c26c837df68b8f339.json",
            "page-authorize/el":
              "page-authorize/el-f8b6c32b1d30b2f959016e9f906c7c06.json",
            "profile/el": "profile/el-ba13442788cb5b28f962ed28cd68b9c5.json",
            "shopping-list/el":
              "shopping-list/el-14ec32607d284afb5d89dbab0febd38b.json",
          },
        },
        en: {
          nativeName: "English",
          fingerprints: {
            en: "en-95bc773adc1eff3d5b2da5374043daa6.json",
            "config/en": "config/en-c51c78225eab58465f5b4b54f42ff10b.json",
            "developer-tools/en":
              "developer-tools/en-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/en": "history/en-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/en": "logbook/en-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/en": "mailbox/en-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/en":
              "page-demo/en-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/en":
              "page-onboarding/en-59c5141390775ca17f1f8a34de8bc240.json",
            "page-authorize/en":
              "page-authorize/en-d4428548168f7438050691b1ad3d14fe.json",
            "profile/en": "profile/en-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/en":
              "shopping-list/en-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        es: {
          nativeName: "Español",
          fingerprints: {
            es: "es-41a81b552d63744d95bbcddaa832f46a.json",
            "config/es": "config/es-cb5df996dae3d465a8a97046f14254f4.json",
            "developer-tools/es":
              "developer-tools/es-3d8395fba2b7274db269e5c70f9ecf0f.json",
            "history/es": "history/es-226ee201175eecdbf6ea89087c23245f.json",
            "logbook/es": "logbook/es-d7925fde116e2c5e06363e9131166f4c.json",
            "mailbox/es": "mailbox/es-57ef0dbc5bb678c6aa53b461ae1c22b0.json",
            "page-demo/es":
              "page-demo/es-415ae14e07bf7cf394a72eb1b81f72a1.json",
            "page-onboarding/es":
              "page-onboarding/es-8d2dc459327cad0d2404a8026412fbd6.json",
            "page-authorize/es":
              "page-authorize/es-6b785471ec2548aadaca6f30a22cd09f.json",
            "profile/es": "profile/es-3a7d108f9e65262015a15bebacdd1c13.json",
            "shopping-list/es":
              "shopping-list/es-38253a1b9331762d8dab36692c56c356.json",
          },
        },
        "es-419": {
          nativeName: "Español (Latin America)",
          fingerprints: {
            "es-419": "es-419-5bb5e5f49ac3fd2c5d8f4d16f750c872.json",
            "config/es-419":
              "config/es-419-75b8787273a655e67173befc6229b339.json",
            "developer-tools/es-419":
              "developer-tools/es-419-3d8395fba2b7274db269e5c70f9ecf0f.json",
            "history/es-419":
              "history/es-419-0b9334fad5f7e132df381f65d368eba9.json",
            "logbook/es-419":
              "logbook/es-419-76178776224e4b80159668806fc22522.json",
            "mailbox/es-419":
              "mailbox/es-419-57ef0dbc5bb678c6aa53b461ae1c22b0.json",
            "page-demo/es-419":
              "page-demo/es-419-d42cd6a834d62aaafd098d894d4e83bc.json",
            "page-onboarding/es-419":
              "page-onboarding/es-419-7481f3bf01d225360f5eec283cf69df5.json",
            "page-authorize/es-419":
              "page-authorize/es-419-b34de8547ce902c659f0562238a516cb.json",
            "profile/es-419":
              "profile/es-419-f797aa0dec977e1154aa4b21baa24d8d.json",
            "shopping-list/es-419":
              "shopping-list/es-419-a04dc8ec5ae6217c186870e22188afda.json",
          },
        },
        et: {
          nativeName: "Eesti",
          fingerprints: {
            et: "et-1bc59a788b52fc24ad7323161a2c32af.json",
            "config/et": "config/et-028a49ddc56ac25fa81d94da7baa62ee.json",
            "developer-tools/et":
              "developer-tools/et-d47baa946a170d33d222d4e0501063cb.json",
            "history/et": "history/et-e0b32c59ee85d22af6ff83da8864b616.json",
            "logbook/et": "logbook/et-5f629c82035967ba862f69ea3d8a7201.json",
            "mailbox/et": "mailbox/et-63c257f3ad39805f75d945f45eeaae60.json",
            "page-demo/et":
              "page-demo/et-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/et":
              "page-onboarding/et-0c48d6dc6494bad002aaea537f298d32.json",
            "page-authorize/et":
              "page-authorize/et-4e7d8e71a2b9ce7def21a2fb599ad98d.json",
            "profile/et": "profile/et-39474e3f6736acdc5c99acd760e213c0.json",
            "shopping-list/et":
              "shopping-list/et-64a31b482eefdc4a8e9dd32ef2aae2cb.json",
          },
        },
        eu: {
          nativeName: "Euskara",
          fingerprints: {
            eu: "eu-6dea507b2f341fe4fd6aa56c8706c2fb.json",
            "config/eu": "config/eu-f279ad6de7c61776b9543e08571a0b98.json",
            "developer-tools/eu":
              "developer-tools/eu-b875339a94e43c4da8d23d06cfe4f9f3.json",
            "history/eu": "history/eu-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/eu": "logbook/eu-f86205a7e66d222b401ba3f826d40698.json",
            "mailbox/eu": "mailbox/eu-4ba6bc32187202ebf63054705d6929bc.json",
            "page-demo/eu":
              "page-demo/eu-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/eu":
              "page-onboarding/eu-c7f0418191dafc13bdfbfb512fe857ec.json",
            "page-authorize/eu":
              "page-authorize/eu-213d7bd6874f924776d0fe9fa65b5c46.json",
            "profile/eu": "profile/eu-60bc4b6b354383f677483c787457600e.json",
            "shopping-list/eu":
              "shopping-list/eu-037ed5d3ec406e0f8314b23430edf92a.json",
          },
        },
        fa: {
          nativeName: "فارسی",
          fingerprints: {
            fa: "fa-9b2002d24516bbf11ed6e26707224776.json",
            "config/fa": "config/fa-e7f64a6b92287f8b4afd7a3860721f9f.json",
            "developer-tools/fa":
              "developer-tools/fa-b1134eb76d0fdcbf0264a4e7085a7363.json",
            "history/fa": "history/fa-cfda44bb5315d5e07755cfe26c59bbac.json",
            "logbook/fa": "logbook/fa-27bf0ac1d1f1fb607e1ab50995fca9e6.json",
            "mailbox/fa": "mailbox/fa-5fef9fc78ed21fa63f9d29c03574286d.json",
            "page-demo/fa":
              "page-demo/fa-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/fa":
              "page-onboarding/fa-04e41e5b9451ae35cbe7d442f2da23de.json",
            "page-authorize/fa":
              "page-authorize/fa-8e3497ece80c0bb7a9b0648ee2b87672.json",
            "profile/fa": "profile/fa-a416b8ebf0e232dc9c24e78361c9e22e.json",
            "shopping-list/fa":
              "shopping-list/fa-7b6b9369d9fd79eb51f158c4a2285df8.json",
          },
        },
        fi: {
          nativeName: "Suomi",
          fingerprints: {
            fi: "fi-2f80e29131569beab36c077e3bc8a56c.json",
            "config/fi": "config/fi-e940cb42976ed3e9c6b67612ba3f5366.json",
            "developer-tools/fi":
              "developer-tools/fi-66f4f51d0abf71c724db800682498959.json",
            "history/fi": "history/fi-e7e4431a7db0bdd44f549bc29c0e6f24.json",
            "logbook/fi": "logbook/fi-27c06649908d711f700c1b8ed48df1ba.json",
            "mailbox/fi": "mailbox/fi-49f8386cb5b55ecb49fb76689a824d33.json",
            "page-demo/fi":
              "page-demo/fi-c37b9d8da54aae598ff57c3fa06e3ece.json",
            "page-onboarding/fi":
              "page-onboarding/fi-59c228ce5e15d671bb0f3e5ffc476fed.json",
            "page-authorize/fi":
              "page-authorize/fi-8f4a7f94679615d4e4fff33236369307.json",
            "profile/fi": "profile/fi-fdb36a8989e4b82dbfa0cf78794dac89.json",
            "shopping-list/fi":
              "shopping-list/fi-a36879e4a85dc2185f019f96da031dd3.json",
          },
        },
        fr: {
          nativeName: "Français",
          fingerprints: {
            fr: "fr-0a95ae13e238214a2604843e7e96be16.json",
            "config/fr": "config/fr-4444c645797bd684a9ee09e73a5b6787.json",
            "developer-tools/fr":
              "developer-tools/fr-821d369a39f6ff61807b6150d8c7ab5b.json",
            "history/fr": "history/fr-0b24b7c275f06453f29734162c368b43.json",
            "logbook/fr": "logbook/fr-350b2f9c75d09c00b7baa91ea343567e.json",
            "mailbox/fr": "mailbox/fr-9fafe1aada8f0c87a7697f5654791df0.json",
            "page-demo/fr":
              "page-demo/fr-4ce6e50ba7c622d5f574e0399c34bc04.json",
            "page-onboarding/fr":
              "page-onboarding/fr-fa378dea93f0784c7cd13102f0e6270d.json",
            "page-authorize/fr":
              "page-authorize/fr-4e5c55da6b72359d6c9a6d216f23756d.json",
            "profile/fr": "profile/fr-1a016ad426eb33ca69d445c4c1f77781.json",
            "shopping-list/fr":
              "shopping-list/fr-c68102bb021a2461f2daad53cf3e3857.json",
          },
        },
        gsw: {
          nativeName: "Schwiizerdütsch",
          fingerprints: {
            gsw: "gsw-ce95c84bf364535b2760dda73b97a1e7.json",
            "config/gsw": "config/gsw-e24e7b65408c8042d7340af8456aa7c1.json",
            "developer-tools/gsw":
              "developer-tools/gsw-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/gsw": "history/gsw-8b0c8ba7dc48ae286346c2eaa74b1d40.json",
            "logbook/gsw": "logbook/gsw-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/gsw": "mailbox/gsw-5ed68a37a357fb93b437016049448ca1.json",
            "page-demo/gsw":
              "page-demo/gsw-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/gsw":
              "page-onboarding/gsw-59c5141390775ca17f1f8a34de8bc240.json",
            "page-authorize/gsw":
              "page-authorize/gsw-d4428548168f7438050691b1ad3d14fe.json",
            "profile/gsw": "profile/gsw-cfa49398b9e4504429d5dfafcc30f4ad.json",
            "shopping-list/gsw":
              "shopping-list/gsw-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        he: {
          nativeName: "עברית",
          isRTL: !0,
          fingerprints: {
            he: "he-7f1014b9982d099ae4bc9496d48db458.json",
            "config/he": "config/he-2f93e4f95978bab1cd5bb67f15d6876c.json",
            "developer-tools/he":
              "developer-tools/he-66d35cfec06f03b7e826b351f8374468.json",
            "history/he": "history/he-49cd035460062b9e557610fae6f57c59.json",
            "logbook/he": "logbook/he-a36c34155130b25e998b41633fc3344c.json",
            "mailbox/he": "mailbox/he-cce3340751d5ef5a30f36ed4be404a9e.json",
            "page-demo/he":
              "page-demo/he-1064c8acbb7ad250d93a80a082eacd1b.json",
            "page-onboarding/he":
              "page-onboarding/he-ab9be38c5b86fb70fc256fb764882097.json",
            "page-authorize/he":
              "page-authorize/he-6dd4a49d5a0cbcb53487a9cb22b4e86b.json",
            "profile/he": "profile/he-32d814b9d1edf1d3c4831a314036a3fa.json",
            "shopping-list/he":
              "shopping-list/he-587c419016a4fdb1b51dcb80f7f47d7a.json",
          },
        },
        hi: {
          nativeName: "हिन्दी",
          fingerprints: {
            hi: "hi-7035d111768ec45ae2fa62bb23a9c776.json",
            "config/hi": "config/hi-17cff126b2f873217df1b8681685b5d3.json",
            "developer-tools/hi":
              "developer-tools/hi-57787bff5f97f0fb1417889d81c827bf.json",
            "history/hi": "history/hi-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/hi": "logbook/hi-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/hi": "mailbox/hi-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/hi":
              "page-demo/hi-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/hi":
              "page-onboarding/hi-51b48831b2eb8c940294c4e6681b1eb7.json",
            "page-authorize/hi":
              "page-authorize/hi-5dd3abf99543c4be0ce3b3a09495ab74.json",
            "profile/hi": "profile/hi-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/hi":
              "shopping-list/hi-4c32ab06d6ce6256151be30ecbf8c630.json",
          },
        },
        hr: {
          nativeName: "Hrvatski",
          fingerprints: {
            hr: "hr-36414e55f44a858ef8ad2dca2df4c304.json",
            "config/hr": "config/hr-73d62d9599c62b5e013149294239a12e.json",
            "developer-tools/hr":
              "developer-tools/hr-ba3b72d4cb16d6bd89e99b04918a1fcd.json",
            "history/hr": "history/hr-c182fbf1b355504eb0c84a2f5e77cb95.json",
            "logbook/hr": "logbook/hr-23bd11bde7060f78d79016ab89331b3d.json",
            "mailbox/hr": "mailbox/hr-1a9e32096cfb1e047e596bea7da02d70.json",
            "page-demo/hr":
              "page-demo/hr-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/hr":
              "page-onboarding/hr-f6eed137b840914cf5c9672449a065b2.json",
            "page-authorize/hr":
              "page-authorize/hr-6f19de7accd0573f2a0aae42680d4f37.json",
            "profile/hr": "profile/hr-b352aab63d6cfb34dd301323366104bb.json",
            "shopping-list/hr":
              "shopping-list/hr-4543c6cd4a2ca7ff4942cd421d950834.json",
          },
        },
        hu: {
          nativeName: "Magyar",
          fingerprints: {
            hu: "hu-645639a96d3816be73595f7540d80ffe.json",
            "config/hu": "config/hu-96c442b1999abf97588c91bc83e38f42.json",
            "developer-tools/hu":
              "developer-tools/hu-3622d0f9e5a222190829ccaf9b7d5d4b.json",
            "history/hu": "history/hu-06ef9d6733e357ad1da57341ebf26098.json",
            "logbook/hu": "logbook/hu-410f7649c1eff67a505fbe7a0cc52c70.json",
            "mailbox/hu": "mailbox/hu-e9d9f2449f6dfce9915bb7a6fe9b2ca1.json",
            "page-demo/hu":
              "page-demo/hu-06d85d6ce04536e4218fae26df57790b.json",
            "page-onboarding/hu":
              "page-onboarding/hu-59907a48dd35a115521e7ac17beb93c1.json",
            "page-authorize/hu":
              "page-authorize/hu-e82513a2fad3ab760b594431118e96fb.json",
            "profile/hu": "profile/hu-beadf89d3e0a22540d51d2df75f95476.json",
            "shopping-list/hu":
              "shopping-list/hu-196bd35532e272d5e0379f13dc31a1bc.json",
          },
        },
        id: {
          nativeName: "Indonesia",
          fingerprints: {
            id: "id-ffe87af6c7cf56fc6c50cc4c547ebc15.json",
            "config/id": "config/id-ff45a0efea7b7c2f38543f93af1445c4.json",
            "developer-tools/id":
              "developer-tools/id-334ef4efeab113712e8b80f54da49016.json",
            "history/id": "history/id-7b37f4ee3e9add21bb93adc63d195714.json",
            "logbook/id": "logbook/id-4bf354836352ff9b3dd31a7fed3d085b.json",
            "mailbox/id": "mailbox/id-cd7c3903174a68f27c9c8f88e3b1f257.json",
            "page-demo/id":
              "page-demo/id-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/id":
              "page-onboarding/id-ced0dc8799b76dfa22d9f64144b423fe.json",
            "page-authorize/id":
              "page-authorize/id-0f26e469474cfb74f677abfb498d6782.json",
            "profile/id": "profile/id-444dd2f2ad5acc5bba2feaaf593752bb.json",
            "shopping-list/id":
              "shopping-list/id-6f74f6f88ef230410479dcf498502f6a.json",
          },
        },
        it: {
          nativeName: "Italiano",
          fingerprints: {
            it: "it-23b874dc7d3a49f29b99ec0eb7ecc0f1.json",
            "config/it": "config/it-bb3395abd64314e1cb1bd41c626ad1fc.json",
            "developer-tools/it":
              "developer-tools/it-1584e94e2500945b9f83a6b94959f6c3.json",
            "history/it": "history/it-a57d42a25333e44fcdda0c67da6246ab.json",
            "logbook/it": "logbook/it-6afd70252b05cb98128de0d4a07e0971.json",
            "mailbox/it": "mailbox/it-c6d36cf8d8edba59cbba7360d385a9ff.json",
            "page-demo/it":
              "page-demo/it-34e23d014508486e1b8fb8929cce63e7.json",
            "page-onboarding/it":
              "page-onboarding/it-7b1f5b5000f1581b55332d94b721638b.json",
            "page-authorize/it":
              "page-authorize/it-e343f593d5be57e169c03f07f8f98a90.json",
            "profile/it": "profile/it-d89ffc84ff2f6307e0906a4f844d7ae5.json",
            "shopping-list/it":
              "shopping-list/it-f5bd42a49a13e20db7149a9652b9f826.json",
          },
        },
        is: {
          nativeName: "Íslenska",
          fingerprints: {
            is: "is-9b466690c7dbe68ccf3ee3db22a6c1b4.json",
            "config/is": "config/is-1320938987a6290a06d1f7ca7bf93f09.json",
            "developer-tools/is":
              "developer-tools/is-db1b9f1bd5c3ff46580fb3f5db8d9d03.json",
            "history/is": "history/is-420b2a6112df057a23d262e3cbbbc3c2.json",
            "logbook/is": "logbook/is-acbbbe28519ccdf300d36cab906d88c8.json",
            "mailbox/is": "mailbox/is-36d48df31d95299b37ee5e849157228a.json",
            "page-demo/is":
              "page-demo/is-8888f5a44c63a75e89a0c4ea27b9be69.json",
            "page-onboarding/is":
              "page-onboarding/is-61f8ce86c09e8a9958c80b7ee2a46aa9.json",
            "page-authorize/is":
              "page-authorize/is-f958954ce8fbee5253a33cced9fd7107.json",
            "profile/is": "profile/is-7b12a4878f7a5498e525f1fe5bfe2c32.json",
            "shopping-list/is":
              "shopping-list/is-e871d5daba0112bc87a9c3c235ab2381.json",
          },
        },
        ja: {
          nativeName: "日本語",
          fingerprints: {
            ja: "ja-52c00abc53ee51e6f583944d61f1915d.json",
            "config/ja": "config/ja-de5625035924108a5847bc5c7b18722f.json",
            "developer-tools/ja":
              "developer-tools/ja-fde2b31c238bfe7d09c594306a02b502.json",
            "history/ja": "history/ja-fadc13765031920127c8f7f89b36562b.json",
            "logbook/ja": "logbook/ja-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/ja": "mailbox/ja-a7e1c1873579d1b68106ccb7c5fb1eab.json",
            "page-demo/ja":
              "page-demo/ja-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/ja":
              "page-onboarding/ja-59c5141390775ca17f1f8a34de8bc240.json",
            "page-authorize/ja":
              "page-authorize/ja-d4428548168f7438050691b1ad3d14fe.json",
            "profile/ja": "profile/ja-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/ja":
              "shopping-list/ja-9987d984eca7128b156b9994208cb017.json",
          },
        },
        ko: {
          nativeName: "한국어",
          fingerprints: {
            ko: "ko-b07ea605a518e65f8171808ddce80b4d.json",
            "config/ko": "config/ko-2ee2aeefd75f7eb00a602de862f9e28f.json",
            "developer-tools/ko":
              "developer-tools/ko-9674d3834a0c5e39607f4b2d46661947.json",
            "history/ko": "history/ko-2466cf47aa80071419940ebbd584af66.json",
            "logbook/ko": "logbook/ko-e804594fd27790bcbe40bac954fca916.json",
            "mailbox/ko": "mailbox/ko-6243fbc81dd684d7aae64ee321b5c291.json",
            "page-demo/ko":
              "page-demo/ko-63a93b0e62b9f9fdccab2414e52e94f3.json",
            "page-onboarding/ko":
              "page-onboarding/ko-4f71ff3d6dc0102bc00caa1b9edaeee4.json",
            "page-authorize/ko":
              "page-authorize/ko-b66652014c0562435998c4b933b3eef1.json",
            "profile/ko": "profile/ko-a38406b1455a473421b241eda88c7547.json",
            "shopping-list/ko":
              "shopping-list/ko-0cb2778002db711a0336fc24489fb2ee.json",
          },
        },
        lb: {
          nativeName: "Lëtzebuergesch",
          fingerprints: {
            lb: "lb-bdf44e6b1b7ed8d0cf048e734afa95bf.json",
            "config/lb": "config/lb-fc844eb2d6122b2121620bca572c3fdf.json",
            "developer-tools/lb":
              "developer-tools/lb-d300273350cb2679fe6d2b7360605a8c.json",
            "history/lb": "history/lb-b8871044bfee9a774b4c95c9c658c850.json",
            "logbook/lb": "logbook/lb-2178ddf0c8fd50f32822c4e808110b16.json",
            "mailbox/lb": "mailbox/lb-801d3c9dae52237d2999d51a5fc3215a.json",
            "page-demo/lb":
              "page-demo/lb-24af1a8511528e674d169ad37ea04a3c.json",
            "page-onboarding/lb":
              "page-onboarding/lb-50666b8c58288b1f1c7e006943c1400f.json",
            "page-authorize/lb":
              "page-authorize/lb-d1bcf4eb897ae09bac2dd6360a81bea3.json",
            "profile/lb": "profile/lb-0b3185043249620ec8efebdeb36185ea.json",
            "shopping-list/lb":
              "shopping-list/lb-5b789da9cada841ec3f730afa9518b03.json",
          },
        },
        lt: {
          nativeName: "Lietuvių",
          fingerprints: {
            lt: "lt-791fec055e53931ff80e1fc301960a32.json",
            "config/lt": "config/lt-f8f4a0f992cc80d7e243a39f59eccdb6.json",
            "developer-tools/lt":
              "developer-tools/lt-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/lt": "history/lt-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/lt": "logbook/lt-b07d3ea420607085d7f060286aa1725d.json",
            "mailbox/lt": "mailbox/lt-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/lt":
              "page-demo/lt-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/lt":
              "page-onboarding/lt-823aee84a606d7b029ef2162806ff2a5.json",
            "page-authorize/lt":
              "page-authorize/lt-5936612fc3ff38c3aab1c5cd1b63b2ae.json",
            "profile/lt": "profile/lt-593e29b683a7e87402b41b93ec6e6c82.json",
            "shopping-list/lt":
              "shopping-list/lt-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        lv: {
          nativeName: "Latviešu",
          fingerprints: {
            lv: "lv-ea38c41a3c9e2b22180d36767c90e76a.json",
            "config/lv": "config/lv-80db98372ee08f09edb94940b0fe31c8.json",
            "developer-tools/lv":
              "developer-tools/lv-4e76fef31af4275b4c4a475bbd75854f.json",
            "history/lv": "history/lv-34028a79910f6759d7f1e62c2bd5b464.json",
            "logbook/lv": "logbook/lv-e966460a445099089b118d8a30f7e283.json",
            "mailbox/lv": "mailbox/lv-10cab8d4e971dcc1b8edf9195acd5cca.json",
            "page-demo/lv":
              "page-demo/lv-0c3d825332410ad94c6774b620b0d90a.json",
            "page-onboarding/lv":
              "page-onboarding/lv-824b7adaa81623a453cff97027fe133b.json",
            "page-authorize/lv":
              "page-authorize/lv-d319ffaaa05f49552dc23088c908189c.json",
            "profile/lv": "profile/lv-3b1e38b45227495b7a1c264b0e0f2277.json",
            "shopping-list/lv":
              "shopping-list/lv-211a209455331b12902eb24c2224a163.json",
          },
        },
        nl: {
          nativeName: "Nederlands",
          fingerprints: {
            nl: "nl-f9f11c1a4664ef91aa13ca498d80090e.json",
            "config/nl": "config/nl-c048fc154a86bdbd7ea4432c4036f928.json",
            "developer-tools/nl":
              "developer-tools/nl-424121c5bc4c1a9ccdae62589a0d38a3.json",
            "history/nl": "history/nl-2f0af34bf917f4dc9b3d7616e77ad55a.json",
            "logbook/nl": "logbook/nl-e091d7bd224b6f2ec5728b759a8206dd.json",
            "mailbox/nl": "mailbox/nl-210a1f8fbb03d58f2b613e9aa6680e1d.json",
            "page-demo/nl":
              "page-demo/nl-a4d6ddefc5c41bf4816dce5ef2ce1017.json",
            "page-onboarding/nl":
              "page-onboarding/nl-835e67ffe689346ee6027cda4b185c4c.json",
            "page-authorize/nl":
              "page-authorize/nl-0ffa5d0e1e4f7c59f9f49268eb945ac3.json",
            "profile/nl": "profile/nl-f1d487fe1b856cca9602b9cfd64b0e13.json",
            "shopping-list/nl":
              "shopping-list/nl-ca5bc361b3ac6fac0ca10b563deef4c3.json",
          },
        },
        nb: {
          nativeName: "Norsk Bokmål",
          fingerprints: {
            nb: "nb-958135b3de08ca10308a810eb3fa8981.json",
            "config/nb": "config/nb-3658a903ef178f39f91e6d9fcacfb1a8.json",
            "developer-tools/nb":
              "developer-tools/nb-4b122d4998662fb13766b02aeee477e4.json",
            "history/nb": "history/nb-2230534a5f094ddcd802defaa43e8c82.json",
            "logbook/nb": "logbook/nb-3bb256013718b124ee5fe62554617838.json",
            "mailbox/nb": "mailbox/nb-29e7765930ebdaec095388ecc12da788.json",
            "page-demo/nb":
              "page-demo/nb-e20bc17364c7c2f4d2596b5233eebd20.json",
            "page-onboarding/nb":
              "page-onboarding/nb-6704d9cb5877396f71711bcea5b9bfd7.json",
            "page-authorize/nb":
              "page-authorize/nb-62b0aba748171829ce010d123b5d6dad.json",
            "profile/nb": "profile/nb-1c08aa15234e3c1837f91d3a8c819d72.json",
            "shopping-list/nb":
              "shopping-list/nb-f35227e1381bb0cdbe61926591c7537c.json",
          },
        },
        nn: {
          nativeName: "Norsk Nynorsk",
          fingerprints: {
            nn: "nn-15482a1628fbaa7ff39a4903d6fa6b2d.json",
            "config/nn": "config/nn-0aa4dfc159c0eb7e58694cf30746aac5.json",
            "developer-tools/nn":
              "developer-tools/nn-44bb62eaf88df888eaf02002536ee0db.json",
            "history/nn": "history/nn-2230534a5f094ddcd802defaa43e8c82.json",
            "logbook/nn": "logbook/nn-fc5f3ae9c6cea1ba1d46b02e0b2251a3.json",
            "mailbox/nn": "mailbox/nn-2364a2d6904287efa0748d2c6010cd01.json",
            "page-demo/nn":
              "page-demo/nn-6f5e8c0aa6bd1e5344b8a0b013348547.json",
            "page-onboarding/nn":
              "page-onboarding/nn-a6adb7da03fc4b42d90387306af52247.json",
            "page-authorize/nn":
              "page-authorize/nn-798c061bbd56255cc352075f8cfe4cff.json",
            "profile/nn": "profile/nn-149abd3070ea0355cb94775bbfd8263d.json",
            "shopping-list/nn":
              "shopping-list/nn-005a84e9ee0a55bb7bab0034fa1393d8.json",
          },
        },
        pl: {
          nativeName: "Polski",
          fingerprints: {
            pl: "pl-b1cb94d9b0b874804f466bed53c00b90.json",
            "config/pl": "config/pl-6d808f0a5743a37c8682b2a5b44f8c55.json",
            "developer-tools/pl":
              "developer-tools/pl-eb463da6b68a20253b98740f2cd3dc55.json",
            "history/pl": "history/pl-72f2213cce350d37f290ebe304209d30.json",
            "logbook/pl": "logbook/pl-c9bd1856715db99fe8088e6a7fd9525a.json",
            "mailbox/pl": "mailbox/pl-0f0be50366398fee52145e41637ad796.json",
            "page-demo/pl":
              "page-demo/pl-2343ff7834316b44c8818f77252e5479.json",
            "page-onboarding/pl":
              "page-onboarding/pl-0e37bd35afae69e5abe1e8562d7f4340.json",
            "page-authorize/pl":
              "page-authorize/pl-623dbedc7e8a079b1618d1702200181e.json",
            "profile/pl": "profile/pl-fbb030d8af282e4d39e2be136febf7a0.json",
            "shopping-list/pl":
              "shopping-list/pl-3938b0e56c5b8a49233a6130217b29cc.json",
          },
        },
        pt: {
          nativeName: "Português",
          fingerprints: {
            pt: "pt-8a421fcaedddd9662f703c3507d2f678.json",
            "config/pt": "config/pt-80b880e7a485fb368d2e7fea0994a829.json",
            "developer-tools/pt":
              "developer-tools/pt-6620291b47a48759ca7ebc39a8f402c1.json",
            "history/pt": "history/pt-fb0badd7a412af3b7339100c68100277.json",
            "logbook/pt": "logbook/pt-f5e91913a489b7411d4d22174e737d2c.json",
            "mailbox/pt": "mailbox/pt-b14eadb11a749aa0ad2cf8ccce99bcb5.json",
            "page-demo/pt":
              "page-demo/pt-61ce9e2c3eaa46f9b66bdb547e71238b.json",
            "page-onboarding/pt":
              "page-onboarding/pt-828841d5650084a460d7d112b51ca2ad.json",
            "page-authorize/pt":
              "page-authorize/pt-25ca79831f36e97e128020bc5619518b.json",
            "profile/pt": "profile/pt-8b0ddb8d01a9a390255e3684a3622383.json",
            "shopping-list/pt":
              "shopping-list/pt-b21bc5c7812437480ff662e258c6f528.json",
          },
        },
        "pt-BR": {
          nativeName: "Português (BR)",
          fingerprints: {
            "pt-BR": "pt-BR-cf12c768a5e3f93205b669122d837860.json",
            "config/pt-BR":
              "config/pt-BR-1d52928bed79604d26d23780253d4b28.json",
            "developer-tools/pt-BR":
              "developer-tools/pt-BR-bfef7b2dd986be2779f9d679c9c7ee84.json",
            "history/pt-BR":
              "history/pt-BR-dcb3ed0df9f0274867b234a0fc321bdc.json",
            "logbook/pt-BR":
              "logbook/pt-BR-d5cc0e529def6e9d5545ff9b73f6cdf4.json",
            "mailbox/pt-BR":
              "mailbox/pt-BR-273bfb5134c8f7e2a46159545223f56d.json",
            "page-demo/pt-BR":
              "page-demo/pt-BR-21735697974e5cd24e5973b170c895c0.json",
            "page-onboarding/pt-BR":
              "page-onboarding/pt-BR-cba1204abd546833891fd305a7c4fa49.json",
            "page-authorize/pt-BR":
              "page-authorize/pt-BR-a7197f5fe5714ed56686195adf53cbee.json",
            "profile/pt-BR":
              "profile/pt-BR-5527c01b54a8f455c56382085a1eb208.json",
            "shopping-list/pt-BR":
              "shopping-list/pt-BR-0f097f6f81a88450a689ec18fd23675e.json",
          },
        },
        ro: {
          nativeName: "Română",
          fingerprints: {
            ro: "ro-964baf8976af02a27d03a4987ac15880.json",
            "config/ro": "config/ro-e65c6a9a0bfb921d3473f5cece70052d.json",
            "developer-tools/ro":
              "developer-tools/ro-4a3f0f9478b36bc52f3609bdec908e1f.json",
            "history/ro": "history/ro-c17411a8f8c277de93ad0b1d7c923f82.json",
            "logbook/ro": "logbook/ro-ed4f267fa16fcd00ecd171e1426ae518.json",
            "mailbox/ro": "mailbox/ro-caa8cd0ef2a22a5c6690140906b6a369.json",
            "page-demo/ro":
              "page-demo/ro-3dcdfcdb61cbbce4f66045799c6856f8.json",
            "page-onboarding/ro":
              "page-onboarding/ro-d9994c24e2bdf65000a2ad55ba016574.json",
            "page-authorize/ro":
              "page-authorize/ro-da6f48f03cb268b2fc8c55003c0c861a.json",
            "profile/ro": "profile/ro-56701e11206ee74f2a90fa37f8d12ae2.json",
            "shopping-list/ro":
              "shopping-list/ro-9c9fc52be99ef3d62e95dc5316bf0fb9.json",
          },
        },
        ru: {
          nativeName: "Русский",
          fingerprints: {
            ru: "ru-c674ee58b7f0aa68eabf068b429d99e0.json",
            "config/ru": "config/ru-5d9a708344a7b3802242411b38c86193.json",
            "developer-tools/ru":
              "developer-tools/ru-a23e9104c89f2c737e1a3d2785dfc9bf.json",
            "history/ru": "history/ru-906a6a5a183855d33a639cd2eebf466b.json",
            "logbook/ru": "logbook/ru-b581599a5d68821f7bfff7cadd8543a9.json",
            "mailbox/ru": "mailbox/ru-8fb6ee3e5ab59205aad1bf755635ad91.json",
            "page-demo/ru":
              "page-demo/ru-60283bfe03d1a40ee2a7ce0d1df54b6d.json",
            "page-onboarding/ru":
              "page-onboarding/ru-da3630fa4ffb07ee94c95816c2d49f6b.json",
            "page-authorize/ru":
              "page-authorize/ru-9580bae83fd3451d1290ca8ad46f0acf.json",
            "profile/ru": "profile/ru-9b3605dd860f693c455718c99d68ade7.json",
            "shopping-list/ru":
              "shopping-list/ru-7f81258e65befd495c2eb9b4b267549a.json",
          },
        },
        sk: {
          nativeName: "Slovenčina",
          fingerprints: {
            sk: "sk-5be3349a563be7d5e006821a03c5307c.json",
            "config/sk": "config/sk-fcbb70bb1756e90c59f13457543f6110.json",
            "developer-tools/sk":
              "developer-tools/sk-0a956cc20c7ea7cf72803f70285835b2.json",
            "history/sk": "history/sk-03c3f4f5bb212cc6edcc7c74b8099c2d.json",
            "logbook/sk": "logbook/sk-66b5bf542a1fc970a95b7693134a4b6d.json",
            "mailbox/sk": "mailbox/sk-03dd52673830e64d96ded1844f650f67.json",
            "page-demo/sk":
              "page-demo/sk-10091700442344bd74f6e33d2d5d2a1d.json",
            "page-onboarding/sk":
              "page-onboarding/sk-cee42dda5f2d40852c4e35ada7e26ef7.json",
            "page-authorize/sk":
              "page-authorize/sk-6725a772cf9a9991302f11d66899709a.json",
            "profile/sk": "profile/sk-995b7b8847efebc7d56d25312553598f.json",
            "shopping-list/sk":
              "shopping-list/sk-a7e9bcccd3f24423b7e07d38571283e4.json",
          },
        },
        sl: {
          nativeName: "Slovenščina",
          fingerprints: {
            sl: "sl-2d8fd9bcc75787ee9286fca352c1fa01.json",
            "config/sl": "config/sl-69a199ac37c100db8edbdacebaf00ebf.json",
            "developer-tools/sl":
              "developer-tools/sl-dd8f71ca35d6de69e36003ffeb50bfda.json",
            "history/sl": "history/sl-f4a805a9a1e80c3915ea6cc6cf069998.json",
            "logbook/sl": "logbook/sl-1d0ec01bd05f875cbf974cfd9cedff94.json",
            "mailbox/sl": "mailbox/sl-f631c03128838d256c86ecbde3d001fe.json",
            "page-demo/sl":
              "page-demo/sl-f3cfa847a5be9d8f3a5c875b44114c9c.json",
            "page-onboarding/sl":
              "page-onboarding/sl-5c7b7926b77fbb3df66e4999a4c10b1f.json",
            "page-authorize/sl":
              "page-authorize/sl-f4aaf3a15692ee28342a5e0dbc94359d.json",
            "profile/sl": "profile/sl-5b7233e54e28e07acfa25478ad508f7a.json",
            "shopping-list/sl":
              "shopping-list/sl-e87362effc0bcc1c7d8f10257e16a1ba.json",
          },
        },
        sr: {
          nativeName: "Српски",
          fingerprints: {
            sr: "sr-51b2865c015b02375dd895fedfaca93d.json",
            "config/sr": "config/sr-13f8023006e766014bb240f3b60bb3c3.json",
            "developer-tools/sr":
              "developer-tools/sr-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/sr": "history/sr-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/sr": "logbook/sr-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/sr": "mailbox/sr-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/sr":
              "page-demo/sr-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/sr":
              "page-onboarding/sr-b0e709282ec03f566ff095e66ffe72e0.json",
            "page-authorize/sr":
              "page-authorize/sr-d4428548168f7438050691b1ad3d14fe.json",
            "profile/sr": "profile/sr-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/sr":
              "shopping-list/sr-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        "sr-Latn": {
          nativeName: "Srpski",
          fingerprints: {
            "sr-Latn": "sr-Latn-7f9064c6c1ab8802dc6b4e31301040e4.json",
            "config/sr-Latn":
              "config/sr-Latn-4ee2dc9cb539c6b701146523371ac29e.json",
            "developer-tools/sr-Latn":
              "developer-tools/sr-Latn-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/sr-Latn":
              "history/sr-Latn-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/sr-Latn":
              "logbook/sr-Latn-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/sr-Latn":
              "mailbox/sr-Latn-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/sr-Latn":
              "page-demo/sr-Latn-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/sr-Latn":
              "page-onboarding/sr-Latn-b0e709282ec03f566ff095e66ffe72e0.json",
            "page-authorize/sr-Latn":
              "page-authorize/sr-Latn-d4428548168f7438050691b1ad3d14fe.json",
            "profile/sr-Latn":
              "profile/sr-Latn-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/sr-Latn":
              "shopping-list/sr-Latn-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        sv: {
          nativeName: "Svenska",
          fingerprints: {
            sv: "sv-405b1809851565be398f1267eea5d5f5.json",
            "config/sv": "config/sv-fc27137eb1382aa98a46f4c6eb4cf9d5.json",
            "developer-tools/sv":
              "developer-tools/sv-18130cf40faf7c50072f298f22d2e8cf.json",
            "history/sv": "history/sv-b96b275475b0a0c4dee3ff54df0067d1.json",
            "logbook/sv": "logbook/sv-de0ea0d08a9bf0da0f311163e1dbd488.json",
            "mailbox/sv": "mailbox/sv-78ed74aa52d4257d3955103040096b9c.json",
            "page-demo/sv":
              "page-demo/sv-99ab31c7a1fc94e7cc1a9ab45045463f.json",
            "page-onboarding/sv":
              "page-onboarding/sv-ec30a8be918c2d5d53e8822690239774.json",
            "page-authorize/sv":
              "page-authorize/sv-ddbf526e9fd56649af68c36b1586ffe2.json",
            "profile/sv": "profile/sv-d5bd3381fd975a1f1ab52f75991915ac.json",
            "shopping-list/sv":
              "shopping-list/sv-3ba4d04a913df757fd3351e3963ba53e.json",
          },
        },
        ta: {
          nativeName: "தமிழ்",
          fingerprints: {
            ta: "ta-6772df6a304d4d1e7f0d3b8461db7657.json",
            "config/ta": "config/ta-fb048e4e188bc85e23b1df221d7ba813.json",
            "developer-tools/ta":
              "developer-tools/ta-b56f7fa02d4eae8e3337c93180d761d7.json",
            "history/ta": "history/ta-c731b6ed1707695bcc1efb80a969111b.json",
            "logbook/ta": "logbook/ta-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/ta": "mailbox/ta-5aff2968280fc37d9ed1081f0aa735d1.json",
            "page-demo/ta":
              "page-demo/ta-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/ta":
              "page-onboarding/ta-59c5141390775ca17f1f8a34de8bc240.json",
            "page-authorize/ta":
              "page-authorize/ta-d4428548168f7438050691b1ad3d14fe.json",
            "profile/ta": "profile/ta-e090c535d6a8b99acbe3afe9568cf178.json",
            "shopping-list/ta":
              "shopping-list/ta-ca53a02b4a4afd05878689eb7c1b0296.json",
          },
        },
        te: {
          nativeName: "తెలుగు",
          fingerprints: {
            te: "te-83beeb29982ef9f462985a588920abad.json",
            "config/te": "config/te-895cdc0851c6c5e10a4ef931a77518dd.json",
            "developer-tools/te":
              "developer-tools/te-2cd12d1d8eddef40f6f0a477ae18bfaf.json",
            "history/te": "history/te-c0a1510e01a60f52b96cf0246cd34378.json",
            "logbook/te": "logbook/te-d1b490b66b980e7ce9d60194b71fcfae.json",
            "mailbox/te": "mailbox/te-f5310c3d729f2cbf7d3e933064c6cd5b.json",
            "page-demo/te":
              "page-demo/te-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/te":
              "page-onboarding/te-45f4cbba7020e189e037e55afad5d824.json",
            "page-authorize/te":
              "page-authorize/te-d39368168464076b5582d5af3393f562.json",
            "profile/te": "profile/te-046a72d0701acf2eb9888791205f26ac.json",
            "shopping-list/te":
              "shopping-list/te-1ca1011342a53a93721a688b1ed97f6a.json",
          },
        },
        th: {
          nativeName: "ภาษาไทย",
          fingerprints: {
            th: "th-1172679a8365544cbfc016339ff39875.json",
            "config/th": "config/th-787d4ae2fa5cba70074a7689b4572d88.json",
            "developer-tools/th":
              "developer-tools/th-d3030e35f7f6e495eeb18c7330cc7c64.json",
            "history/th": "history/th-cc5a685c0de438e3e71ac034a246adc8.json",
            "logbook/th": "logbook/th-a686e297193443571fbf27c874b099c2.json",
            "mailbox/th": "mailbox/th-869e0f55f3081bd9a2de44a2518cd650.json",
            "page-demo/th":
              "page-demo/th-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/th":
              "page-onboarding/th-26d7ae5b95b379a2648fd357420d722b.json",
            "page-authorize/th":
              "page-authorize/th-265d6e8e64c4ffeac7a49d37c6cc6bed.json",
            "profile/th": "profile/th-f4f1f1beabb5af28ab78af352e3cecaa.json",
            "shopping-list/th":
              "shopping-list/th-329f549cade11d8752f6fca7de3e4223.json",
          },
        },
        tr: {
          nativeName: "Türkçe",
          fingerprints: {
            tr: "tr-4d84d2b92e10e25fe1e888d668f60f58.json",
            "config/tr": "config/tr-45b4b8895d97721469e5d82df688447b.json",
            "developer-tools/tr":
              "developer-tools/tr-e1bad061f5f8fbb9a2c467e2cc68eafc.json",
            "history/tr": "history/tr-c8a856bfaa267fa040fe8547808d4d8e.json",
            "logbook/tr": "logbook/tr-7ee57d96fcb969d4c528a5cecf1ec727.json",
            "mailbox/tr": "mailbox/tr-3918cdf8be7e5fd02936f2099b71adfd.json",
            "page-demo/tr":
              "page-demo/tr-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/tr":
              "page-onboarding/tr-aeaa05c4dc6dbb2b2dd1bf46536b6e4b.json",
            "page-authorize/tr":
              "page-authorize/tr-f2ed01625895eef340d91e7412f76737.json",
            "profile/tr": "profile/tr-195dcbbd4b81fa965d7a1232c9c0553c.json",
            "shopping-list/tr":
              "shopping-list/tr-e92e36d196d384475b21f4d4a945b30c.json",
          },
        },
        uk: {
          nativeName: "Українська",
          fingerprints: {
            uk: "uk-69ac5c0bbeaf0f4d9bdb6d1b7aca0916.json",
            "config/uk": "config/uk-4d23460e3e5450170a9b2ac2c96a5f3d.json",
            "developer-tools/uk":
              "developer-tools/uk-96c46439168a48e97317e60b413a6deb.json",
            "history/uk": "history/uk-ae9c488d8d86b4a42d24a2cc3083ec63.json",
            "logbook/uk": "logbook/uk-09e7c40de61fd286b6069e364e7c62c0.json",
            "mailbox/uk": "mailbox/uk-159332b3084bdb5577c9d1601c32f0c8.json",
            "page-demo/uk":
              "page-demo/uk-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/uk":
              "page-onboarding/uk-50dc9bea3482c21cc13ddba58c87ee4f.json",
            "page-authorize/uk":
              "page-authorize/uk-d6ee7aabdb1326bdec04d89159041601.json",
            "profile/uk": "profile/uk-dc7ceeea8d9fa2f41eb613a2f472d6d5.json",
            "shopping-list/uk":
              "shopping-list/uk-df37c1591d78d56fa5a1dc87e7ed3f14.json",
          },
        },
        vi: {
          nativeName: "Tiếng Việt",
          fingerprints: {
            vi: "vi-a634a32fbd6bfe9c20ac2675813a62d8.json",
            "config/vi": "config/vi-8909c3e3a224fdbdfb6308c5dfd7f533.json",
            "developer-tools/vi":
              "developer-tools/vi-670bfed67ed885dfb1603d8e15a2c2b2.json",
            "history/vi": "history/vi-d4b4e0f5c070be096ff57fd986ca7f46.json",
            "logbook/vi": "logbook/vi-9a4063be2bf138ecec75bda0102bc745.json",
            "mailbox/vi": "mailbox/vi-72716b644c2b813127cfc012a070b634.json",
            "page-demo/vi":
              "page-demo/vi-4b9e48cc80973b9986bb76e340171578.json",
            "page-onboarding/vi":
              "page-onboarding/vi-d8e454135f1fa51fbc2952f01ab9673f.json",
            "page-authorize/vi":
              "page-authorize/vi-a6f7f815751c251074507da287828171.json",
            "profile/vi": "profile/vi-4961664585e25481e582820d5982cd33.json",
            "shopping-list/vi":
              "shopping-list/vi-53808ddc1e8af830db9095fa1440a3ac.json",
          },
        },
        "zh-Hans": {
          nativeName: "简体中文",
          fingerprints: {
            "zh-Hans": "zh-Hans-8f0efb303f6e2cba5d294c379615e429.json",
            "config/zh-Hans":
              "config/zh-Hans-9f145274772b751667a33683302cdad5.json",
            "developer-tools/zh-Hans":
              "developer-tools/zh-Hans-cac6e78fca3e695ecfb01aaafce4fc35.json",
            "history/zh-Hans":
              "history/zh-Hans-5227a7eba9c5e4fb74100a0a328ba6bb.json",
            "logbook/zh-Hans":
              "logbook/zh-Hans-1d2f9ce505657f855a7dd9f53056aa3f.json",
            "mailbox/zh-Hans":
              "mailbox/zh-Hans-c63f0f03c4095d7df8e82d649f2a9670.json",
            "page-demo/zh-Hans":
              "page-demo/zh-Hans-6268359ab2f724f88602252bc424d0af.json",
            "page-onboarding/zh-Hans":
              "page-onboarding/zh-Hans-50b5c9d76dcf6de144cdd037e78e909b.json",
            "page-authorize/zh-Hans":
              "page-authorize/zh-Hans-24406d0df830e013d92c62f71650fb25.json",
            "profile/zh-Hans":
              "profile/zh-Hans-d5cc65afba3e6f5192e9b477c6ccc804.json",
            "shopping-list/zh-Hans":
              "shopping-list/zh-Hans-78ae21891e187b85f1f73effc7ab8278.json",
          },
        },
        "zh-Hant": {
          nativeName: "繁體中文",
          fingerprints: {
            "zh-Hant": "zh-Hant-d7de28c03114df88a51ede3c3014d0d3.json",
            "config/zh-Hant":
              "config/zh-Hant-3adb420d91992a6e4f38c6fb8b8c5eda.json",
            "developer-tools/zh-Hant":
              "developer-tools/zh-Hant-942c8da549c08cb9e660bd1832fe7adf.json",
            "history/zh-Hant":
              "history/zh-Hant-18ee37b23fa0fe3191e440ddfcb00e89.json",
            "logbook/zh-Hant":
              "logbook/zh-Hant-18fb28eb3f903506a5cb6fbad7b8411a.json",
            "mailbox/zh-Hant":
              "mailbox/zh-Hant-ea296ec9aeefb095c6e6731f2c82c5bd.json",
            "page-demo/zh-Hant":
              "page-demo/zh-Hant-d7df95fce05bea6bfec45e7b44b3b0e3.json",
            "page-onboarding/zh-Hant":
              "page-onboarding/zh-Hant-f6d3342d60602fb6f796442b24a8835b.json",
            "page-authorize/zh-Hant":
              "page-authorize/zh-Hant-e9720def9ac9d6f5bb998f3c0cc3a32f.json",
            "profile/zh-Hant":
              "profile/zh-Hant-65ed6fb369416e76937f8b980fb2cb5f.json",
            "shopping-list/zh-Hant":
              "shopping-list/zh-Hant-915da1656c131861ea98ae71de3395a5.json",
          },
        },
      },
    };
  },
  function(e, t, n) {
    "use strict";
    (t = e.exports = n(103).default).default = t;
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    var i = n(33);
    const o = (e) => {
      return class extends e {
        constructor(...e) {
          super(...e),
            (this.resources = void 0),
            (this.language = void 0),
            (this.translationFragment = void 0);
        }
        _initializeLocalizeLite() {
          this.resources ||
            (this.translationFragment && this._downloadResources());
        }
        async _downloadResources() {
          const { language: e, data: t } = await Object(i.b)(
            this.translationFragment,
            this.language
          );
          this.resources = { [e]: t };
        }
      };
    };
    var r = n(57);
    n.d(t, "a", function() {
      return s;
    });
    const a = () => "",
      s = (e) => {
        return class extends o(e) {
          static get properties() {
            return {
              localize: {},
              language: {},
              resources: {},
              translationFragment: {},
            };
          }
          constructor() {
            super(),
              (this.localize = void 0),
              (this.localize = a),
              (this.language = Object(i.a)());
          }
          connectedCallback() {
            super.connectedCallback(),
              this._initializeLocalizeLite(),
              (this.localize = Object(r.a)(
                this.constructor.prototype,
                this.language,
                this.resources
              ));
          }
          updated(e) {
            super.updated(e),
              (e.has("language") || e.has("resources")) &&
                (this.localize = Object(r.a)(
                  this.constructor.prototype,
                  this.language,
                  this.resources
                ));
          }
        };
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    var i = n(15);
    const o = i.c`.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}:host([disabled]){pointer-events:none}.mdc-button{flex:1}`;
    var r = n(74),
      a = (n(55),
      function(e, t, n, i) {
        var o,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      });
    let s = class extends i.a {
      constructor() {
        super(...arguments),
          (this.raised = !1),
          (this.unelevated = !1),
          (this.outlined = !1),
          (this.dense = !1),
          (this.disabled = !1),
          (this.trailingIcon = !1),
          (this.icon = ""),
          (this.label = "");
      }
      createRenderRoot() {
        return this.attachShadow({ mode: "open", delegatesFocus: !0 });
      }
      render() {
        const e = {
            "mdc-button--raised": this.raised,
            "mdc-button--unelevated": this.unelevated,
            "mdc-button--outlined": this.outlined,
            "mdc-button--dense": this.dense,
          },
          t = i.e`<span class="material-icons mdc-button__icon">${
            this.icon
          }</span>`;
        return i.e`
      <button
          .ripple="${Object(r.a)({ unbounded: !1 })}"
          class="mdc-button ${Object(i.b)(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}">
        ${this.icon && !this.trailingIcon ? t : ""}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon && this.trailingIcon ? t : ""}
        <slot></slot>
      </button>`;
      }
    };
    (s.styles = o),
      a([Object(i.f)({ type: Boolean })], s.prototype, "raised", void 0),
      a([Object(i.f)({ type: Boolean })], s.prototype, "unelevated", void 0),
      a([Object(i.f)({ type: Boolean })], s.prototype, "outlined", void 0),
      a([Object(i.f)({ type: Boolean })], s.prototype, "dense", void 0),
      a(
        [Object(i.f)({ type: Boolean, reflect: !0 })],
        s.prototype,
        "disabled",
        void 0
      ),
      a([Object(i.f)({ type: Boolean })], s.prototype, "trailingIcon", void 0),
      a([Object(i.f)()], s.prototype, "icon", void 0),
      a([Object(i.f)()], s.prototype, "label", void 0),
      (s = a([Object(i.d)("mwc-button")], s));
  },
  function(e, t, n) {
    "use strict";
    n(4);
    const i = n(3).a`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;
    i.setAttribute("style", "display: none;"),
      document.head.appendChild(i.content);
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(1);
    const o = {
      properties: {
        sizingTarget: {
          type: Object,
          value: function() {
            return this;
          },
        },
        fitInto: { type: Object, value: window },
        noOverlap: { type: Boolean },
        positionTarget: { type: Element },
        horizontalAlign: { type: String },
        verticalAlign: { type: String },
        dynamicAlign: { type: Boolean },
        horizontalOffset: { type: Number, value: 0, notify: !0 },
        verticalOffset: { type: Number, value: 0, notify: !0 },
        autoFitOnAttach: { type: Boolean, value: !1 },
        _fitInfo: { type: Object },
      },
      get _fitWidth() {
        return this.fitInto === window
          ? this.fitInto.innerWidth
          : this.fitInto.getBoundingClientRect().width;
      },
      get _fitHeight() {
        return this.fitInto === window
          ? this.fitInto.innerHeight
          : this.fitInto.getBoundingClientRect().height;
      },
      get _fitLeft() {
        return this.fitInto === window
          ? 0
          : this.fitInto.getBoundingClientRect().left;
      },
      get _fitTop() {
        return this.fitInto === window
          ? 0
          : this.fitInto.getBoundingClientRect().top;
      },
      get _defaultPositionTarget() {
        var e = Object(i.a)(this).parentNode;
        return (
          e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (e = e.host), e
        );
      },
      get _localeHorizontalAlign() {
        if (this._isRTL) {
          if ("right" === this.horizontalAlign) return "left";
          if ("left" === this.horizontalAlign) return "right";
        }
        return this.horizontalAlign;
      },
      get __shouldPosition() {
        return (
          (this.horizontalAlign || this.verticalAlign) && this.positionTarget
        );
      },
      attached: function() {
        void 0 === this._isRTL &&
          (this._isRTL = "rtl" == window.getComputedStyle(this).direction),
          (this.positionTarget =
            this.positionTarget || this._defaultPositionTarget),
          this.autoFitOnAttach &&
            ("none" === window.getComputedStyle(this).display
              ? setTimeout(
                  function() {
                    this.fit();
                  }.bind(this)
                )
              : (window.ShadyDOM && ShadyDOM.flush(), this.fit()));
      },
      detached: function() {
        this.__deferredFit &&
          (clearTimeout(this.__deferredFit), (this.__deferredFit = null));
      },
      fit: function() {
        this.position(), this.constrain(), this.center();
      },
      _discoverInfo: function() {
        if (!this._fitInfo) {
          var e = window.getComputedStyle(this),
            t = window.getComputedStyle(this.sizingTarget);
          this._fitInfo = {
            inlineStyle: {
              top: this.style.top || "",
              left: this.style.left || "",
              position: this.style.position || "",
            },
            sizerInlineStyle: {
              maxWidth: this.sizingTarget.style.maxWidth || "",
              maxHeight: this.sizingTarget.style.maxHeight || "",
              boxSizing: this.sizingTarget.style.boxSizing || "",
            },
            positionedBy: {
              vertically:
                "auto" !== e.top
                  ? "top"
                  : "auto" !== e.bottom
                  ? "bottom"
                  : null,
              horizontally:
                "auto" !== e.left
                  ? "left"
                  : "auto" !== e.right
                  ? "right"
                  : null,
            },
            sizedBy: {
              height: "none" !== t.maxHeight,
              width: "none" !== t.maxWidth,
              minWidth: parseInt(t.minWidth, 10) || 0,
              minHeight: parseInt(t.minHeight, 10) || 0,
            },
            margin: {
              top: parseInt(e.marginTop, 10) || 0,
              right: parseInt(e.marginRight, 10) || 0,
              bottom: parseInt(e.marginBottom, 10) || 0,
              left: parseInt(e.marginLeft, 10) || 0,
            },
          };
        }
      },
      resetFit: function() {
        var e = this._fitInfo || {};
        for (var t in e.sizerInlineStyle)
          this.sizingTarget.style[t] = e.sizerInlineStyle[t];
        for (var t in e.inlineStyle) this.style[t] = e.inlineStyle[t];
        this._fitInfo = null;
      },
      refit: function() {
        var e = this.sizingTarget.scrollLeft,
          t = this.sizingTarget.scrollTop;
        this.resetFit(),
          this.fit(),
          (this.sizingTarget.scrollLeft = e),
          (this.sizingTarget.scrollTop = t);
      },
      position: function() {
        if (this.__shouldPosition) {
          this._discoverInfo(),
            (this.style.position = "fixed"),
            (this.sizingTarget.style.boxSizing = "border-box"),
            (this.style.left = "0px"),
            (this.style.top = "0px");
          var e = this.getBoundingClientRect(),
            t = this.__getNormalizedRect(this.positionTarget),
            n = this.__getNormalizedRect(this.fitInto),
            i = this._fitInfo.margin,
            o = {
              width: e.width + i.left + i.right,
              height: e.height + i.top + i.bottom,
            },
            r = this.__getPosition(
              this._localeHorizontalAlign,
              this.verticalAlign,
              o,
              e,
              t,
              n
            ),
            a = r.left + i.left,
            s = r.top + i.top,
            l = Math.min(n.right - i.right, a + e.width),
            c = Math.min(n.bottom - i.bottom, s + e.height);
          (a = Math.max(
            n.left + i.left,
            Math.min(a, l - this._fitInfo.sizedBy.minWidth)
          )),
            (s = Math.max(
              n.top + i.top,
              Math.min(s, c - this._fitInfo.sizedBy.minHeight)
            )),
            (this.sizingTarget.style.maxWidth =
              Math.max(l - a, this._fitInfo.sizedBy.minWidth) + "px"),
            (this.sizingTarget.style.maxHeight =
              Math.max(c - s, this._fitInfo.sizedBy.minHeight) + "px"),
            (this.style.left = a - e.left + "px"),
            (this.style.top = s - e.top + "px");
        }
      },
      constrain: function() {
        if (!this.__shouldPosition) {
          this._discoverInfo();
          var e = this._fitInfo;
          e.positionedBy.vertically ||
            ((this.style.position = "fixed"), (this.style.top = "0px")),
            e.positionedBy.horizontally ||
              ((this.style.position = "fixed"), (this.style.left = "0px")),
            (this.sizingTarget.style.boxSizing = "border-box");
          var t = this.getBoundingClientRect();
          e.sizedBy.height ||
            this.__sizeDimension(
              t,
              e.positionedBy.vertically,
              "top",
              "bottom",
              "Height"
            ),
            e.sizedBy.width ||
              this.__sizeDimension(
                t,
                e.positionedBy.horizontally,
                "left",
                "right",
                "Width"
              );
        }
      },
      _sizeDimension: function(e, t, n, i, o) {
        this.__sizeDimension(e, t, n, i, o);
      },
      __sizeDimension: function(e, t, n, i, o) {
        var r = this._fitInfo,
          a = this.__getNormalizedRect(this.fitInto),
          s = "Width" === o ? a.width : a.height,
          l = t === i,
          c = l ? s - e[i] : e[n],
          d = r.margin[l ? n : i],
          u = "offset" + o,
          p = this[u] - this.sizingTarget[u];
        this.sizingTarget.style["max" + o] = s - d - c - p + "px";
      },
      center: function() {
        if (!this.__shouldPosition) {
          this._discoverInfo();
          var e = this._fitInfo.positionedBy;
          if (!e.vertically || !e.horizontally) {
            (this.style.position = "fixed"),
              e.vertically || (this.style.top = "0px"),
              e.horizontally || (this.style.left = "0px");
            var t = this.getBoundingClientRect(),
              n = this.__getNormalizedRect(this.fitInto);
            if (!e.vertically) {
              var i = n.top - t.top + (n.height - t.height) / 2;
              this.style.top = i + "px";
            }
            if (!e.horizontally) {
              var o = n.left - t.left + (n.width - t.width) / 2;
              this.style.left = o + "px";
            }
          }
        }
      },
      __getNormalizedRect: function(e) {
        return e === document.documentElement || e === window
          ? {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
              right: window.innerWidth,
              bottom: window.innerHeight,
            }
          : e.getBoundingClientRect();
      },
      __getOffscreenArea: function(e, t, n) {
        var i = Math.min(0, e.top) + Math.min(0, n.bottom - (e.top + t.height)),
          o = Math.min(0, e.left) + Math.min(0, n.right - (e.left + t.width));
        return Math.abs(i) * t.width + Math.abs(o) * t.height;
      },
      __getPosition: function(e, t, n, i, o, r) {
        var a,
          s = [
            {
              verticalAlign: "top",
              horizontalAlign: "left",
              top: o.top + this.verticalOffset,
              left: o.left + this.horizontalOffset,
            },
            {
              verticalAlign: "top",
              horizontalAlign: "right",
              top: o.top + this.verticalOffset,
              left: o.right - n.width - this.horizontalOffset,
            },
            {
              verticalAlign: "bottom",
              horizontalAlign: "left",
              top: o.bottom - n.height - this.verticalOffset,
              left: o.left + this.horizontalOffset,
            },
            {
              verticalAlign: "bottom",
              horizontalAlign: "right",
              top: o.bottom - n.height - this.verticalOffset,
              left: o.right - n.width - this.horizontalOffset,
            },
          ];
        if (this.noOverlap) {
          for (var l = 0, c = s.length; l < c; l++) {
            var d = {};
            for (var u in s[l]) d[u] = s[l][u];
            s.push(d);
          }
          (s[0].top = s[1].top += o.height),
            (s[2].top = s[3].top -= o.height),
            (s[4].left = s[6].left += o.width),
            (s[5].left = s[7].left -= o.width);
        }
        (t = "auto" === t ? null : t),
          ((e = "auto" === e ? null : e) && "center" !== e) ||
            (s.push({
              verticalAlign: "top",
              horizontalAlign: "center",
              top:
                o.top + this.verticalOffset + (this.noOverlap ? o.height : 0),
              left: o.left - i.width / 2 + o.width / 2 + this.horizontalOffset,
            }),
            s.push({
              verticalAlign: "bottom",
              horizontalAlign: "center",
              top:
                o.bottom -
                n.height -
                this.verticalOffset -
                (this.noOverlap ? o.height : 0),
              left: o.left - i.width / 2 + o.width / 2 + this.horizontalOffset,
            })),
          (t && "middle" !== t) ||
            (s.push({
              verticalAlign: "middle",
              horizontalAlign: "left",
              top: o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
              left:
                o.left + this.horizontalOffset + (this.noOverlap ? o.width : 0),
            }),
            s.push({
              verticalAlign: "middle",
              horizontalAlign: "right",
              top: o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
              left:
                o.right -
                n.width -
                this.horizontalOffset -
                (this.noOverlap ? o.width : 0),
            })),
          "middle" === t &&
            "center" === e &&
            s.push({
              verticalAlign: "middle",
              horizontalAlign: "center",
              top: o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
              left: o.left - i.width / 2 + o.width / 2 + this.horizontalOffset,
            });
        for (l = 0; l < s.length; l++) {
          var p = s[l],
            h = p.verticalAlign === t,
            f = p.horizontalAlign === e;
          if (!this.dynamicAlign && !this.noOverlap && h && f) {
            a = p;
            break;
          }
          var b = (!t || h) && (!e || f);
          if (this.dynamicAlign || b) {
            if (
              ((p.offscreenArea = this.__getOffscreenArea(p, n, r)),
              0 === p.offscreenArea && b)
            ) {
              a = p;
              break;
            }
            a = a || p;
            var m = p.offscreenArea - a.offscreenArea;
            (m < 0 || (0 === m && (h || f))) && (a = p);
          }
        }
        return a;
      },
    };
    var r = n(95),
      a = n(9),
      s = n(123),
      l = n(5),
      c = n(3);
    Object(l.a)({
      _template: c.a`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,
      is: "iron-overlay-backdrop",
      properties: {
        opened: {
          reflectToAttribute: !0,
          type: Boolean,
          value: !1,
          observer: "_openedChanged",
        },
      },
      listeners: { transitionend: "_onTransitionend" },
      created: function() {
        this.__openedRaf = null;
      },
      attached: function() {
        this.opened && this._openedChanged(this.opened);
      },
      prepare: function() {
        this.opened &&
          !this.parentNode &&
          Object(i.a)(document.body).appendChild(this);
      },
      open: function() {
        this.opened = !0;
      },
      close: function() {
        this.opened = !1;
      },
      complete: function() {
        this.opened ||
          this.parentNode !== document.body ||
          Object(i.a)(this.parentNode).removeChild(this);
      },
      _onTransitionend: function(e) {
        e && e.target === this && this.complete();
      },
      _openedChanged: function(e) {
        if (e) this.prepare();
        else {
          var t = window.getComputedStyle(this);
          ("0s" !== t.transitionDuration && 0 != t.opacity) || this.complete();
        }
        this.isAttached &&
          (this.__openedRaf &&
            (window.cancelAnimationFrame(this.__openedRaf),
            (this.__openedRaf = null)),
          (this.scrollTop = this.scrollTop),
          (this.__openedRaf = window.requestAnimationFrame(
            function() {
              (this.__openedRaf = null),
                this.toggleClass("opened", this.opened);
            }.bind(this)
          )));
      },
    });
    var d = n(31),
      u = n(35);
    const p = function() {
      (this._overlays = []),
        (this._minimumZ = 101),
        (this._backdropElement = null),
        u.a(document.documentElement, "tap", function() {}),
        document.addEventListener("tap", this._onCaptureClick.bind(this), !0),
        document.addEventListener("focus", this._onCaptureFocus.bind(this), !0),
        document.addEventListener(
          "keydown",
          this._onCaptureKeyDown.bind(this),
          !0
        );
    };
    p.prototype = {
      constructor: p,
      get backdropElement() {
        return (
          this._backdropElement ||
            (this._backdropElement = document.createElement(
              "iron-overlay-backdrop"
            )),
          this._backdropElement
        );
      },
      get deepActiveElement() {
        var e = document.activeElement;
        for (
          (e && e instanceof Element != !1) || (e = document.body);
          e.root && Object(i.a)(e.root).activeElement;

        )
          e = Object(i.a)(e.root).activeElement;
        return e;
      },
      _bringOverlayAtIndexToFront: function(e) {
        var t = this._overlays[e];
        if (t) {
          var n = this._overlays.length - 1,
            i = this._overlays[n];
          if ((i && this._shouldBeBehindOverlay(t, i) && n--, !(e >= n))) {
            var o = Math.max(this.currentOverlayZ(), this._minimumZ);
            for (this._getZ(t) <= o && this._applyOverlayZ(t, o); e < n; )
              (this._overlays[e] = this._overlays[e + 1]), e++;
            this._overlays[n] = t;
          }
        }
      },
      addOrRemoveOverlay: function(e) {
        e.opened ? this.addOverlay(e) : this.removeOverlay(e);
      },
      addOverlay: function(e) {
        var t = this._overlays.indexOf(e);
        if (t >= 0)
          return this._bringOverlayAtIndexToFront(t), void this.trackBackdrop();
        var n = this._overlays.length,
          i = this._overlays[n - 1],
          o = Math.max(this._getZ(i), this._minimumZ),
          r = this._getZ(e);
        if (i && this._shouldBeBehindOverlay(e, i)) {
          this._applyOverlayZ(i, o), n--;
          var a = this._overlays[n - 1];
          o = Math.max(this._getZ(a), this._minimumZ);
        }
        r <= o && this._applyOverlayZ(e, o),
          this._overlays.splice(n, 0, e),
          this.trackBackdrop();
      },
      removeOverlay: function(e) {
        var t = this._overlays.indexOf(e);
        -1 !== t && (this._overlays.splice(t, 1), this.trackBackdrop());
      },
      currentOverlay: function() {
        var e = this._overlays.length - 1;
        return this._overlays[e];
      },
      currentOverlayZ: function() {
        return this._getZ(this.currentOverlay());
      },
      ensureMinimumZ: function(e) {
        this._minimumZ = Math.max(this._minimumZ, e);
      },
      focusOverlay: function() {
        var e = this.currentOverlay();
        e && e._applyFocus();
      },
      trackBackdrop: function() {
        var e = this._overlayWithBackdrop();
        (e || this._backdropElement) &&
          ((this.backdropElement.style.zIndex = this._getZ(e) - 1),
          (this.backdropElement.opened = !!e),
          this.backdropElement.prepare());
      },
      getBackdrops: function() {
        for (var e = [], t = 0; t < this._overlays.length; t++)
          this._overlays[t].withBackdrop && e.push(this._overlays[t]);
        return e;
      },
      backdropZ: function() {
        return this._getZ(this._overlayWithBackdrop()) - 1;
      },
      _overlayWithBackdrop: function() {
        for (var e = this._overlays.length - 1; e >= 0; e--)
          if (this._overlays[e].withBackdrop) return this._overlays[e];
      },
      _getZ: function(e) {
        var t = this._minimumZ;
        if (e) {
          var n = Number(e.style.zIndex || window.getComputedStyle(e).zIndex);
          n == n && (t = n);
        }
        return t;
      },
      _setZ: function(e, t) {
        e.style.zIndex = t;
      },
      _applyOverlayZ: function(e, t) {
        this._setZ(e, t + 2);
      },
      _overlayInPath: function(e) {
        e = e || [];
        for (var t = 0; t < e.length; t++)
          if (e[t]._manager === this) return e[t];
      },
      _onCaptureClick: function(e) {
        var t = this._overlays.length - 1;
        if (-1 !== t)
          for (
            var n, o = Object(i.a)(e).path;
            (n = this._overlays[t]) &&
            this._overlayInPath(o) !== n &&
            (n._onCaptureClick(e), n.allowClickThrough);

          )
            t--;
      },
      _onCaptureFocus: function(e) {
        var t = this.currentOverlay();
        t && t._onCaptureFocus(e);
      },
      _onCaptureKeyDown: function(e) {
        var t = this.currentOverlay();
        t &&
          (d.a.keyboardEventMatchesKeys(e, "esc")
            ? t._onCaptureEsc(e)
            : d.a.keyboardEventMatchesKeys(e, "tab") && t._onCaptureTab(e));
      },
      _shouldBeBehindOverlay: function(e, t) {
        return !e.alwaysOnTop && t.alwaysOnTop;
      },
    };
    const h = new p();
    var f,
      b,
      m = { pageX: 0, pageY: 0 },
      g = null,
      _ = [],
      y = ["wheel", "mousewheel", "DOMMouseScroll", "touchstart", "touchmove"];
    function v(e) {
      x.indexOf(e) >= 0 ||
        (0 === x.length &&
          (function() {
            f =
              f ||
              function(e) {
                e.cancelable &&
                  (function(e) {
                    var t = Object(i.a)(e).rootTarget;
                    "touchmove" !== e.type &&
                      g !== t &&
                      ((g = t),
                      (_ = (function(e) {
                        for (var t = [], n = e.indexOf(b), i = 0; i <= n; i++)
                          if (e[i].nodeType === Node.ELEMENT_NODE) {
                            var o = e[i],
                              r = o.style;
                            "scroll" !== r.overflow &&
                              "auto" !== r.overflow &&
                              (r = window.getComputedStyle(o)),
                              ("scroll" !== r.overflow &&
                                "auto" !== r.overflow) ||
                                t.push(o);
                          }
                        return t;
                      })(Object(i.a)(e).path)));
                    if (!_.length) return !0;
                    if ("touchstart" === e.type) return !1;
                    var n = (function(e) {
                      var t = { deltaX: e.deltaX, deltaY: e.deltaY };
                      if ("deltaX" in e);
                      else if ("wheelDeltaX" in e && "wheelDeltaY" in e)
                        (t.deltaX = -e.wheelDeltaX),
                          (t.deltaY = -e.wheelDeltaY);
                      else if ("wheelDelta" in e)
                        (t.deltaX = 0), (t.deltaY = -e.wheelDelta);
                      else if ("axis" in e)
                        (t.deltaX = 1 === e.axis ? e.detail : 0),
                          (t.deltaY = 2 === e.axis ? e.detail : 0);
                      else if (e.targetTouches) {
                        var n = e.targetTouches[0];
                        (t.deltaX = m.pageX - n.pageX),
                          (t.deltaY = m.pageY - n.pageY);
                      }
                      return t;
                    })(e);
                    return !(function(e, t, n) {
                      if (!t && !n) return;
                      for (
                        var i = Math.abs(n) >= Math.abs(t), o = 0;
                        o < e.length;
                        o++
                      ) {
                        var r = e[o];
                        if (
                          i
                            ? n < 0
                              ? r.scrollTop > 0
                              : r.scrollTop < r.scrollHeight - r.clientHeight
                            : t < 0
                            ? r.scrollLeft > 0
                            : r.scrollLeft < r.scrollWidth - r.clientWidth
                        )
                          return r;
                      }
                    })(_, n.deltaX, n.deltaY);
                  })(e) &&
                  e.preventDefault();
                if (e.targetTouches) {
                  var t = e.targetTouches[0];
                  (m.pageX = t.pageX), (m.pageY = t.pageY);
                }
              }.bind(void 0);
            for (var e = 0, t = y.length; e < t; e++)
              document.addEventListener(y[e], f, { capture: !0, passive: !1 });
          })(),
        x.push(e),
        (b = x[x.length - 1]),
        (k = []),
        (C = []));
    }
    function w(e) {
      var t = x.indexOf(e);
      -1 !== t &&
        (x.splice(t, 1),
        (b = x[x.length - 1]),
        (k = []),
        (C = []),
        0 === x.length &&
          (function() {
            for (var e = 0, t = y.length; e < t; e++)
              document.removeEventListener(y[e], f, {
                capture: !0,
                passive: !1,
              });
          })());
    }
    const x = [];
    let k = null,
      C = null;
    n.d(t, "b", function() {
      return S;
    }),
      n.d(t, "a", function() {
        return j;
      });
    const S = {
        properties: {
          opened: {
            observer: "_openedChanged",
            type: Boolean,
            value: !1,
            notify: !0,
          },
          canceled: {
            observer: "_canceledChanged",
            readOnly: !0,
            type: Boolean,
            value: !1,
          },
          withBackdrop: { observer: "_withBackdropChanged", type: Boolean },
          noAutoFocus: { type: Boolean, value: !1 },
          noCancelOnEscKey: { type: Boolean, value: !1 },
          noCancelOnOutsideClick: { type: Boolean, value: !1 },
          closingReason: { type: Object },
          restoreFocusOnClose: { type: Boolean, value: !1 },
          allowClickThrough: { type: Boolean },
          alwaysOnTop: { type: Boolean },
          scrollAction: { type: String },
          _manager: { type: Object, value: h },
          _focusedChild: { type: Object },
        },
        listeners: { "iron-resize": "_onIronResize" },
        observers: [
          "__updateScrollObservers(isAttached, opened, scrollAction)",
        ],
        get backdropElement() {
          return this._manager.backdropElement;
        },
        get _focusNode() {
          return (
            this._focusedChild ||
            Object(i.a)(this).querySelector("[autofocus]") ||
            this
          );
        },
        get _focusableNodes() {
          return s.a.getTabbableNodes(this);
        },
        ready: function() {
          (this.__isAnimating = !1),
            (this.__shouldRemoveTabIndex = !1),
            (this.__firstFocusableNode = this.__lastFocusableNode = null),
            (this.__rafs = {}),
            (this.__restoreFocusNode = null),
            (this.__scrollTop = this.__scrollLeft = null),
            (this.__onCaptureScroll = this.__onCaptureScroll.bind(this)),
            (this.__rootNodes = null),
            this._ensureSetup();
        },
        attached: function() {
          this.opened && this._openedChanged(this.opened),
            (this._observer = Object(i.a)(this).observeNodes(
              this._onNodesChange
            ));
        },
        detached: function() {
          for (var e in (Object(i.a)(this).unobserveNodes(this._observer),
          (this._observer = null),
          this.__rafs))
            null !== this.__rafs[e] && cancelAnimationFrame(this.__rafs[e]);
          (this.__rafs = {}),
            this._manager.removeOverlay(this),
            this.__isAnimating &&
              (this.opened
                ? this._finishRenderOpened()
                : (this._applyFocus(), this._finishRenderClosed()));
        },
        toggle: function() {
          this._setCanceled(!1), (this.opened = !this.opened);
        },
        open: function() {
          this._setCanceled(!1), (this.opened = !0);
        },
        close: function() {
          this._setCanceled(!1), (this.opened = !1);
        },
        cancel: function(e) {
          this.fire("iron-overlay-canceled", e, { cancelable: !0 })
            .defaultPrevented || (this._setCanceled(!0), (this.opened = !1));
        },
        invalidateTabbables: function() {
          this.__firstFocusableNode = this.__lastFocusableNode = null;
        },
        _ensureSetup: function() {
          this._overlaySetup ||
            ((this._overlaySetup = !0),
            (this.style.outline = "none"),
            (this.style.display = "none"));
        },
        _openedChanged: function(e) {
          e
            ? this.removeAttribute("aria-hidden")
            : this.setAttribute("aria-hidden", "true"),
            this.isAttached &&
              ((this.__isAnimating = !0),
              this.__deraf("__openedChanged", this.__openedChanged));
        },
        _canceledChanged: function() {
          (this.closingReason = this.closingReason || {}),
            (this.closingReason.canceled = this.canceled);
        },
        _withBackdropChanged: function() {
          this.withBackdrop && !this.hasAttribute("tabindex")
            ? (this.setAttribute("tabindex", "-1"),
              (this.__shouldRemoveTabIndex = !0))
            : this.__shouldRemoveTabIndex &&
              (this.removeAttribute("tabindex"),
              (this.__shouldRemoveTabIndex = !1)),
            this.opened && this.isAttached && this._manager.trackBackdrop();
        },
        _prepareRenderOpened: function() {
          (this.__restoreFocusNode = this._manager.deepActiveElement),
            this._preparePositioning(),
            this.refit(),
            this._finishPositioning(),
            this.noAutoFocus &&
              document.activeElement === this._focusNode &&
              (this._focusNode.blur(), this.__restoreFocusNode.focus());
        },
        _renderOpened: function() {
          this._finishRenderOpened();
        },
        _renderClosed: function() {
          this._finishRenderClosed();
        },
        _finishRenderOpened: function() {
          this.notifyResize(),
            (this.__isAnimating = !1),
            this.fire("iron-overlay-opened");
        },
        _finishRenderClosed: function() {
          (this.style.display = "none"),
            (this.style.zIndex = ""),
            this.notifyResize(),
            (this.__isAnimating = !1),
            this.fire("iron-overlay-closed", this.closingReason);
        },
        _preparePositioning: function() {
          (this.style.transition = this.style.webkitTransition = "none"),
            (this.style.transform = this.style.webkitTransform = "none"),
            (this.style.display = "");
        },
        _finishPositioning: function() {
          (this.style.display = "none"),
            (this.scrollTop = this.scrollTop),
            (this.style.transition = this.style.webkitTransition = ""),
            (this.style.transform = this.style.webkitTransform = ""),
            (this.style.display = ""),
            (this.scrollTop = this.scrollTop);
        },
        _applyFocus: function() {
          if (this.opened) this.noAutoFocus || this._focusNode.focus();
          else {
            if (this.restoreFocusOnClose && this.__restoreFocusNode) {
              var e = this._manager.deepActiveElement;
              (e === document.body || Object(i.a)(this).deepContains(e)) &&
                this.__restoreFocusNode.focus();
            }
            (this.__restoreFocusNode = null),
              this._focusNode.blur(),
              (this._focusedChild = null);
          }
        },
        _onCaptureClick: function(e) {
          this.noCancelOnOutsideClick || this.cancel(e);
        },
        _onCaptureFocus: function(e) {
          if (this.withBackdrop) {
            var t = Object(i.a)(e).path;
            -1 === t.indexOf(this)
              ? (e.stopPropagation(), this._applyFocus())
              : (this._focusedChild = t[0]);
          }
        },
        _onCaptureEsc: function(e) {
          this.noCancelOnEscKey || this.cancel(e);
        },
        _onCaptureTab: function(e) {
          if (this.withBackdrop) {
            this.__ensureFirstLastFocusables();
            var t = e.shiftKey,
              n = t ? this.__firstFocusableNode : this.__lastFocusableNode,
              i = t ? this.__lastFocusableNode : this.__firstFocusableNode,
              o = !1;
            if (n === i) o = !0;
            else {
              var r = this._manager.deepActiveElement;
              o = r === n || r === this;
            }
            o &&
              (e.preventDefault(),
              (this._focusedChild = i),
              this._applyFocus());
          }
        },
        _onIronResize: function() {
          this.opened &&
            !this.__isAnimating &&
            this.__deraf("refit", this.refit);
        },
        _onNodesChange: function() {
          this.opened &&
            !this.__isAnimating &&
            (this.invalidateTabbables(), this.notifyResize());
        },
        __ensureFirstLastFocusables: function() {
          var e = this._focusableNodes;
          (this.__firstFocusableNode = e[0]),
            (this.__lastFocusableNode = e[e.length - 1]);
        },
        __openedChanged: function() {
          this.opened
            ? (this._prepareRenderOpened(),
              this._manager.addOverlay(this),
              this._applyFocus(),
              this._renderOpened())
            : (this._manager.removeOverlay(this),
              this._applyFocus(),
              this._renderClosed());
        },
        __deraf: function(e, t) {
          var n = this.__rafs;
          null !== n[e] && cancelAnimationFrame(n[e]),
            (n[e] = requestAnimationFrame(
              function() {
                (n[e] = null), t.call(this);
              }.bind(this)
            ));
        },
        __updateScrollObservers: function(e, t, n) {
          e && t && this.__isValidScrollAction(n)
            ? ("lock" === n && (this.__saveScrollPosition(), v(this)),
              this.__addScrollListeners())
            : (w(this), this.__removeScrollListeners());
        },
        __addScrollListeners: function() {
          if (!this.__rootNodes) {
            if (((this.__rootNodes = []), a.g))
              for (var e = this; e; )
                e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                  e.host &&
                  this.__rootNodes.push(e),
                  (e = e.host || e.assignedSlot || e.parentNode);
            this.__rootNodes.push(document);
          }
          this.__rootNodes.forEach(function(e) {
            e.addEventListener("scroll", this.__onCaptureScroll, {
              capture: !0,
              passive: !0,
            });
          }, this);
        },
        __removeScrollListeners: function() {
          this.__rootNodes &&
            this.__rootNodes.forEach(function(e) {
              e.removeEventListener("scroll", this.__onCaptureScroll, {
                capture: !0,
                passive: !0,
              });
            }, this),
            this.isAttached || (this.__rootNodes = null);
        },
        __isValidScrollAction: function(e) {
          return "lock" === e || "refit" === e || "cancel" === e;
        },
        __onCaptureScroll: function(e) {
          if (!(this.__isAnimating || Object(i.a)(e).path.indexOf(this) >= 0))
            switch (this.scrollAction) {
              case "lock":
                this.__restoreScrollPosition();
                break;
              case "refit":
                this.__deraf("refit", this.refit);
                break;
              case "cancel":
                this.cancel(e);
            }
        },
        __saveScrollPosition: function() {
          document.scrollingElement
            ? ((this.__scrollTop = document.scrollingElement.scrollTop),
              (this.__scrollLeft = document.scrollingElement.scrollLeft))
            : ((this.__scrollTop = Math.max(
                document.documentElement.scrollTop,
                document.body.scrollTop
              )),
              (this.__scrollLeft = Math.max(
                document.documentElement.scrollLeft,
                document.body.scrollLeft
              )));
        },
        __restoreScrollPosition: function() {
          document.scrollingElement
            ? ((document.scrollingElement.scrollTop = this.__scrollTop),
              (document.scrollingElement.scrollLeft = this.__scrollLeft))
            : ((document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop),
              (document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft));
        },
      },
      j = [o, r.a, S];
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(46),
      o = n(5),
      r = n(1);
    Object(o.a)({
      is: "iron-iconset-svg",
      properties: {
        name: { type: String, observer: "_nameChanged" },
        size: { type: Number, value: 24 },
        rtlMirroring: { type: Boolean, value: !1 },
        useGlobalRtlAttribute: { type: Boolean, value: !1 },
      },
      created: function() {
        this._meta = new i.a({ type: "iconset", key: null, value: null });
      },
      attached: function() {
        this.style.display = "none";
      },
      getIconNames: function() {
        return (
          (this._icons = this._createIconMap()),
          Object.keys(this._icons).map(function(e) {
            return this.name + ":" + e;
          }, this)
        );
      },
      applyIcon: function(e, t) {
        this.removeIcon(e);
        var n = this._cloneIcon(t, this.rtlMirroring && this._targetIsRTL(e));
        if (n) {
          var i = Object(r.a)(e.root || e);
          return i.insertBefore(n, i.childNodes[0]), (e._svgIcon = n);
        }
        return null;
      },
      removeIcon: function(e) {
        e._svgIcon &&
          (Object(r.a)(e.root || e).removeChild(e._svgIcon),
          (e._svgIcon = null));
      },
      _targetIsRTL: function(e) {
        if (null == this.__targetIsRTL)
          if (this.useGlobalRtlAttribute) {
            var t =
              document.body && document.body.hasAttribute("dir")
                ? document.body
                : document.documentElement;
            this.__targetIsRTL = "rtl" === t.getAttribute("dir");
          } else
            e && e.nodeType !== Node.ELEMENT_NODE && (e = e.host),
              (this.__targetIsRTL =
                e && "rtl" === window.getComputedStyle(e).direction);
        return this.__targetIsRTL;
      },
      _nameChanged: function() {
        (this._meta.value = null),
          (this._meta.key = this.name),
          (this._meta.value = this),
          this.async(function() {
            this.fire("iron-iconset-added", this, { node: window });
          });
      },
      _createIconMap: function() {
        var e = Object.create(null);
        return (
          Object(r.a)(this)
            .querySelectorAll("[id]")
            .forEach(function(t) {
              e[t.id] = t;
            }),
          e
        );
      },
      _cloneIcon: function(e, t) {
        return (
          (this._icons = this._icons || this._createIconMap()),
          this._prepareSvgClone(this._icons[e], this.size, t)
        );
      },
      _prepareSvgClone: function(e, t, n) {
        if (e) {
          var i = e.cloneNode(!0),
            o = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            r = i.getAttribute("viewBox") || "0 0 " + t + " " + t,
            a =
              "pointer-events: none; display: block; width: 100%; height: 100%;";
          return (
            n &&
              i.hasAttribute("mirror-in-rtl") &&
              (a +=
                "-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),
            o.setAttribute("viewBox", r),
            o.setAttribute("preserveAspectRatio", "xMidYMid meet"),
            o.setAttribute("focusable", "false"),
            (o.style.cssText = a),
            o.appendChild(i).removeAttribute("id"),
            o
          );
        }
        return null;
      },
    });
  },
  function(e, t, n) {
    "use strict";
    var i = n(25),
      o = n(32),
      r = n(21),
      a = n(24),
      s = n(26),
      l = n(2),
      c = n(11);
    const d = Object(s.b)(i.a);
    class u extends d {
      static get is() {
        return "dom-repeat";
      }
      static get template() {
        return null;
      }
      static get properties() {
        return {
          items: { type: Array },
          as: { type: String, value: "item" },
          indexAs: { type: String, value: "index" },
          itemsIndexAs: { type: String, value: "itemsIndex" },
          sort: { type: Function, observer: "__sortChanged" },
          filter: { type: Function, observer: "__filterChanged" },
          observe: { type: String, observer: "__observeChanged" },
          delay: Number,
          renderedItemCount: { type: Number, notify: !0, readOnly: !0 },
          initialCount: { type: Number, observer: "__initializeChunking" },
          targetFramerate: { type: Number, value: 20 },
          _targetFrameTime: {
            type: Number,
            computed: "__computeFrameTime(targetFramerate)",
          },
        };
      }
      static get observers() {
        return ["__itemsChanged(items.*)"];
      }
      constructor() {
        super(),
          (this.__instances = []),
          (this.__limit = 1 / 0),
          (this.__pool = []),
          (this.__renderDebouncer = null),
          (this.__itemsIdxToInstIdx = {}),
          (this.__chunkCount = null),
          (this.__lastChunkTime = null),
          (this.__sortFn = null),
          (this.__filterFn = null),
          (this.__observePaths = null),
          (this.__ctor = null),
          (this.__isDetached = !0),
          (this.template = null);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), (this.__isDetached = !0);
        for (let e = 0; e < this.__instances.length; e++)
          this.__detachInstance(e);
      }
      connectedCallback() {
        if (
          (super.connectedCallback(),
          (this.style.display = "none"),
          this.__isDetached)
        ) {
          this.__isDetached = !1;
          let e = this.parentNode;
          for (let t = 0; t < this.__instances.length; t++)
            this.__attachInstance(t, e);
        }
      }
      __ensureTemplatized() {
        if (!this.__ctor) {
          let e = (this.template = this.querySelector("template"));
          if (!e) {
            let e = new MutationObserver(() => {
              if (!this.querySelector("template"))
                throw new Error("dom-repeat requires a <template> child");
              e.disconnect(), this.__render();
            });
            return e.observe(this, { childList: !0 }), !1;
          }
          let t = {};
          (t[this.as] = !0),
            (t[this.indexAs] = !0),
            (t[this.itemsIndexAs] = !0),
            (this.__ctor = Object(o.b)(e, this, {
              mutableData: this.mutableData,
              parentModel: !0,
              instanceProps: t,
              forwardHostProp: function(e, t) {
                let n = this.__instances;
                for (let i, o = 0; o < n.length && (i = n[o]); o++)
                  i.forwardHostProp(e, t);
              },
              notifyInstanceProp: function(e, t, n) {
                if (Object(l.e)(this.as, t)) {
                  let i = e[this.itemsIndexAs];
                  t == this.as && (this.items[i] = n);
                  let o = Object(l.i)(this.as, "items." + i, t);
                  this.notifyPath(o, n);
                }
              },
            }));
        }
        return !0;
      }
      __getMethodHost() {
        return this.__dataHost._methodHost || this.__dataHost;
      }
      __functionFromPropertyValue(e) {
        if ("string" == typeof e) {
          let t = e,
            n = this.__getMethodHost();
          return function() {
            return n[t].apply(n, arguments);
          };
        }
        return e;
      }
      __sortChanged(e) {
        (this.__sortFn = this.__functionFromPropertyValue(e)),
          this.items && this.__debounceRender(this.__render);
      }
      __filterChanged(e) {
        (this.__filterFn = this.__functionFromPropertyValue(e)),
          this.items && this.__debounceRender(this.__render);
      }
      __computeFrameTime(e) {
        return Math.ceil(1e3 / e);
      }
      __initializeChunking() {
        this.initialCount &&
          ((this.__limit = this.initialCount),
          (this.__chunkCount = this.initialCount),
          (this.__lastChunkTime = performance.now()));
      }
      __tryRenderChunk() {
        this.items &&
          this.__limit < this.items.length &&
          this.__debounceRender(this.__requestRenderChunk);
      }
      __requestRenderChunk() {
        requestAnimationFrame(() => this.__renderChunk());
      }
      __renderChunk() {
        let e = performance.now(),
          t = this._targetFrameTime / (e - this.__lastChunkTime);
        (this.__chunkCount = Math.round(this.__chunkCount * t) || 1),
          (this.__limit += this.__chunkCount),
          (this.__lastChunkTime = e),
          this.__debounceRender(this.__render);
      }
      __observeChanged() {
        this.__observePaths =
          this.observe && this.observe.replace(".*", ".").split(" ");
      }
      __itemsChanged(e) {
        this.items &&
          !Array.isArray(this.items) &&
          console.warn(
            "dom-repeat expected array for `items`, found",
            this.items
          ),
          this.__handleItemPath(e.path, e.value) ||
            (this.__initializeChunking(), this.__debounceRender(this.__render));
      }
      __handleObservedPaths(e) {
        if (this.__sortFn || this.__filterFn)
          if (e) {
            if (this.__observePaths) {
              let t = this.__observePaths;
              for (let n = 0; n < t.length; n++)
                0 === e.indexOf(t[n]) &&
                  this.__debounceRender(this.__render, this.delay);
            }
          } else this.__debounceRender(this.__render, this.delay);
      }
      __debounceRender(e, t = 0) {
        (this.__renderDebouncer = r.a.debounce(
          this.__renderDebouncer,
          t > 0 ? c.d.after(t) : c.c,
          e.bind(this)
        )),
          Object(a.a)(this.__renderDebouncer);
      }
      render() {
        this.__debounceRender(this.__render), Object(a.b)();
      }
      __render() {
        this.__ensureTemplatized() &&
          (this.__applyFullRefresh(),
          (this.__pool.length = 0),
          this._setRenderedItemCount(this.__instances.length),
          this.dispatchEvent(
            new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
          ),
          this.__tryRenderChunk());
      }
      __applyFullRefresh() {
        let e = this.items || [],
          t = new Array(e.length);
        for (let r = 0; r < e.length; r++) t[r] = r;
        this.__filterFn &&
          (t = t.filter((t, n, i) => this.__filterFn(e[t], n, i))),
          this.__sortFn && t.sort((t, n) => this.__sortFn(e[t], e[n]));
        const n = (this.__itemsIdxToInstIdx = {});
        let i = 0;
        const o = Math.min(t.length, this.__limit);
        for (; i < o; i++) {
          let o = this.__instances[i],
            r = t[i],
            a = e[r];
          (n[r] = i),
            o
              ? (o._setPendingProperty(this.as, a),
                o._setPendingProperty(this.indexAs, i),
                o._setPendingProperty(this.itemsIndexAs, r),
                o._flushProperties())
              : this.__insertInstance(a, i, r);
        }
        for (let r = this.__instances.length - 1; r >= i; r--)
          this.__detachAndRemoveInstance(r);
      }
      __detachInstance(e) {
        let t = this.__instances[e];
        for (let n = 0; n < t.children.length; n++) {
          let e = t.children[n];
          t.root.appendChild(e);
        }
        return t;
      }
      __attachInstance(e, t) {
        let n = this.__instances[e];
        t.insertBefore(n.root, this);
      }
      __detachAndRemoveInstance(e) {
        let t = this.__detachInstance(e);
        t && this.__pool.push(t), this.__instances.splice(e, 1);
      }
      __stampInstance(e, t, n) {
        let i = {};
        return (
          (i[this.as] = e),
          (i[this.indexAs] = t),
          (i[this.itemsIndexAs] = n),
          new this.__ctor(i)
        );
      }
      __insertInstance(e, t, n) {
        let i = this.__pool.pop();
        i
          ? (i._setPendingProperty(this.as, e),
            i._setPendingProperty(this.indexAs, t),
            i._setPendingProperty(this.itemsIndexAs, n),
            i._flushProperties())
          : (i = this.__stampInstance(e, t, n));
        let o = this.__instances[t + 1],
          r = o ? o.children[0] : this;
        return (
          this.parentNode.insertBefore(i.root, r), (this.__instances[t] = i), i
        );
      }
      _showHideChildren(e) {
        for (let t = 0; t < this.__instances.length; t++)
          this.__instances[t]._showHideChildren(e);
      }
      __handleItemPath(e, t) {
        let n = e.slice(6),
          i = n.indexOf("."),
          o = i < 0 ? n : n.substring(0, i);
        if (o == parseInt(o, 10)) {
          let e = i < 0 ? "" : n.substring(i + 1);
          this.__handleObservedPaths(e);
          let r = this.__itemsIdxToInstIdx[o],
            a = this.__instances[r];
          if (a) {
            let n = this.as + (e ? "." + e : "");
            a._setPendingPropertyOrPath(n, t, !1, !0), a._flushProperties();
          }
          return !0;
        }
      }
      itemForElement(e) {
        let t = this.modelForElement(e);
        return t && t[this.as];
      }
      indexForElement(e) {
        let t = this.modelForElement(e);
        return t && t[this.indexAs];
      }
      modelForElement(e) {
        return Object(o.a)(this.template, e);
      }
    }
    customElements.define(u.is, u);
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(1),
      o = n(22);
    class r {
      constructor(e) {
        (this.selection = []), (this.selectCallback = e);
      }
      get() {
        return this.multi ? this.selection.slice() : this.selection[0];
      }
      clear(e) {
        this.selection.slice().forEach(function(t) {
          (!e || e.indexOf(t) < 0) && this.setItemSelected(t, !1);
        }, this);
      }
      isSelected(e) {
        return this.selection.indexOf(e) >= 0;
      }
      setItemSelected(e, t) {
        if (null != e && t !== this.isSelected(e)) {
          if (t) this.selection.push(e);
          else {
            var n = this.selection.indexOf(e);
            n >= 0 && this.selection.splice(n, 1);
          }
          this.selectCallback && this.selectCallback(e, t);
        }
      }
      select(e) {
        this.multi
          ? this.toggle(e)
          : this.get() !== e &&
            (this.setItemSelected(this.get(), !1), this.setItemSelected(e, !0));
      }
      toggle(e) {
        this.setItemSelected(e, !this.isSelected(e));
      }
    }
    n.d(t, "a", function() {
      return a;
    });
    const a = {
      properties: {
        attrForSelected: { type: String, value: null },
        selected: { type: String, notify: !0 },
        selectedItem: { type: Object, readOnly: !0, notify: !0 },
        activateEvent: {
          type: String,
          value: "tap",
          observer: "_activateEventChanged",
        },
        selectable: String,
        selectedClass: { type: String, value: "iron-selected" },
        selectedAttribute: { type: String, value: null },
        fallbackSelection: { type: String, value: null },
        items: {
          type: Array,
          readOnly: !0,
          notify: !0,
          value: function() {
            return [];
          },
        },
        _excludedLocalNames: {
          type: Object,
          value: function() {
            return { template: 1, "dom-bind": 1, "dom-if": 1, "dom-repeat": 1 };
          },
        },
      },
      observers: [
        "_updateAttrForSelected(attrForSelected)",
        "_updateSelected(selected)",
        "_checkFallback(fallbackSelection)",
      ],
      created: function() {
        (this._bindFilterItem = this._filterItem.bind(this)),
          (this._selection = new r(this._applySelection.bind(this)));
      },
      attached: function() {
        (this._observer = this._observeItems(this)),
          this._addListener(this.activateEvent);
      },
      detached: function() {
        this._observer && Object(i.a)(this).unobserveNodes(this._observer),
          this._removeListener(this.activateEvent);
      },
      indexOf: function(e) {
        return this.items ? this.items.indexOf(e) : -1;
      },
      select: function(e) {
        this.selected = e;
      },
      selectPrevious: function() {
        var e = this.items.length,
          t = e - 1;
        void 0 !== this.selected &&
          (t = (Number(this._valueToIndex(this.selected)) - 1 + e) % e),
          (this.selected = this._indexToValue(t));
      },
      selectNext: function() {
        var e = 0;
        void 0 !== this.selected &&
          (e =
            (Number(this._valueToIndex(this.selected)) + 1) %
            this.items.length),
          (this.selected = this._indexToValue(e));
      },
      selectIndex: function(e) {
        this.select(this._indexToValue(e));
      },
      forceSynchronousItemUpdate: function() {
        this._observer && "function" == typeof this._observer.flush
          ? this._observer.flush()
          : this._updateItems();
      },
      get _shouldUpdateSelection() {
        return null != this.selected;
      },
      _checkFallback: function() {
        this._updateSelected();
      },
      _addListener: function(e) {
        this.listen(this, e, "_activateHandler");
      },
      _removeListener: function(e) {
        this.unlisten(this, e, "_activateHandler");
      },
      _activateEventChanged: function(e, t) {
        this._removeListener(t), this._addListener(e);
      },
      _updateItems: function() {
        var e = Object(i.a)(this).queryDistributedElements(
          this.selectable || "*"
        );
        (e = Array.prototype.filter.call(e, this._bindFilterItem)),
          this._setItems(e);
      },
      _updateAttrForSelected: function() {
        this.selectedItem &&
          (this.selected = this._valueForItem(this.selectedItem));
      },
      _updateSelected: function() {
        this._selectSelected(this.selected);
      },
      _selectSelected: function(e) {
        if (this.items) {
          var t = this._valueToItem(this.selected);
          t ? this._selection.select(t) : this._selection.clear(),
            this.fallbackSelection &&
              this.items.length &&
              void 0 === this._selection.get() &&
              (this.selected = this.fallbackSelection);
        }
      },
      _filterItem: function(e) {
        return !this._excludedLocalNames[e.localName];
      },
      _valueToItem: function(e) {
        return null == e ? null : this.items[this._valueToIndex(e)];
      },
      _valueToIndex: function(e) {
        if (!this.attrForSelected) return Number(e);
        for (var t, n = 0; (t = this.items[n]); n++)
          if (this._valueForItem(t) == e) return n;
      },
      _indexToValue: function(e) {
        if (!this.attrForSelected) return e;
        var t = this.items[e];
        return t ? this._valueForItem(t) : void 0;
      },
      _valueForItem: function(e) {
        if (!e) return null;
        if (!this.attrForSelected) {
          var t = this.indexOf(e);
          return -1 === t ? null : t;
        }
        var n = e[Object(o.b)(this.attrForSelected)];
        return null != n ? n : e.getAttribute(this.attrForSelected);
      },
      _applySelection: function(e, t) {
        this.selectedClass && this.toggleClass(this.selectedClass, t, e),
          this.selectedAttribute &&
            this.toggleAttribute(this.selectedAttribute, t, e),
          this._selectionChange(),
          this.fire("iron-" + (t ? "select" : "deselect"), { item: e });
      },
      _selectionChange: function() {
        this._setSelectedItem(this._selection.get());
      },
      _observeItems: function(e) {
        return Object(i.a)(e).observeNodes(function(e) {
          this._updateItems(),
            this._updateSelected(),
            this.fire("iron-items-changed", e, { bubbles: !1, cancelable: !1 });
        });
      },
      _activateHandler: function(e) {
        for (var t = e.target, n = this.items; t && t != this; ) {
          var i = n.indexOf(t);
          if (i >= 0) {
            var o = this._indexToValue(i);
            return void this._itemActivate(o, t);
          }
          t = t.parentNode;
        }
      },
      _itemActivate: function(e, t) {
        this.fire("iron-activate", { selected: e, item: t }, { cancelable: !0 })
          .defaultPrevented || this.select(e);
      },
    };
  },
  function(e, t, n) {
    "use strict";
    var i = n(25),
      o = n(32),
      r = n(21),
      a = n(24),
      s = n(11),
      l = n(2);
    class c extends i.a {
      static get is() {
        return "dom-if";
      }
      static get template() {
        return null;
      }
      static get properties() {
        return {
          if: { type: Boolean, observer: "__debounceRender" },
          restamp: { type: Boolean, observer: "__debounceRender" },
        };
      }
      constructor() {
        super(),
          (this.__renderDebouncer = null),
          (this.__invalidProps = null),
          (this.__instance = null),
          (this._lastIf = !1),
          (this.__ctor = null),
          (this.__hideTemplateChildren__ = !1);
      }
      __debounceRender() {
        (this.__renderDebouncer = r.a.debounce(
          this.__renderDebouncer,
          s.c,
          () => this.__render()
        )),
          Object(a.a)(this.__renderDebouncer);
      }
      disconnectedCallback() {
        super.disconnectedCallback(),
          (this.parentNode &&
            (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE ||
              this.parentNode.host)) ||
            this.__teardownInstance();
      }
      connectedCallback() {
        super.connectedCallback(),
          (this.style.display = "none"),
          this.if && this.__debounceRender();
      }
      render() {
        Object(a.b)();
      }
      __render() {
        if (this.if) {
          if (!this.__ensureInstance()) return;
          this._showHideChildren();
        } else this.restamp && this.__teardownInstance();
        !this.restamp && this.__instance && this._showHideChildren(),
          this.if != this._lastIf &&
            (this.dispatchEvent(
              new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
            ),
            (this._lastIf = this.if));
      }
      __ensureInstance() {
        let e = this.parentNode;
        if (e) {
          if (!this.__ctor) {
            let e = this.querySelector("template");
            if (!e) {
              let e = new MutationObserver(() => {
                if (!this.querySelector("template"))
                  throw new Error("dom-if requires a <template> child");
                e.disconnect(), this.__render();
              });
              return e.observe(this, { childList: !0 }), !1;
            }
            this.__ctor = Object(o.b)(e, this, {
              mutableData: !0,
              forwardHostProp: function(e, t) {
                this.__instance &&
                  (this.if
                    ? this.__instance.forwardHostProp(e, t)
                    : ((this.__invalidProps =
                        this.__invalidProps || Object.create(null)),
                      (this.__invalidProps[Object(l.g)(e)] = !0)));
              },
            });
          }
          if (this.__instance) {
            this.__syncHostProperties();
            let t = this.__instance.children;
            if (t && t.length) {
              if (this.previousSibling !== t[t.length - 1])
                for (let n, i = 0; i < t.length && (n = t[i]); i++)
                  e.insertBefore(n, this);
            }
          } else
            (this.__instance = new this.__ctor()),
              e.insertBefore(this.__instance.root, this);
        }
        return !0;
      }
      __syncHostProperties() {
        let e = this.__invalidProps;
        if (e) {
          for (let t in e)
            this.__instance._setPendingProperty(t, this.__dataHost[t]);
          (this.__invalidProps = null), this.__instance._flushProperties();
        }
      }
      __teardownInstance() {
        if (this.__instance) {
          let e = this.__instance.children;
          if (e && e.length) {
            let t = e[0].parentNode;
            if (t)
              for (let n, i = 0; i < e.length && (n = e[i]); i++)
                t.removeChild(n);
          }
          (this.__instance = null), (this.__invalidProps = null);
        }
      }
      _showHideChildren() {
        let e = this.__hideTemplateChildren__ || !this.if;
        this.__instance && this.__instance._showHideChildren(e);
      }
    }
    customElements.define(c.is, c);
  },
  ,
  function(e, t, n) {
    "use strict";
    n(4), n(111), n(112), n(113), n(114);
    var i = n(59),
      o = (n(40), n(5)),
      r = n(3),
      a = n(94);
    Object(o.a)({
      is: "paper-input",
      _template: r.a`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,
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
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4);
    var i = n(5),
      o = n(3);
    const r = Object(i.a)({
      _template: o.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,
      is: "iron-a11y-announcer",
      properties: {
        mode: { type: String, value: "polite" },
        _text: { type: String, value: "" },
      },
      created: function() {
        r.instance || (r.instance = this),
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
    (r.instance = null),
      (r.requestAvailability = function() {
        r.instance ||
          (r.instance = document.createElement("iron-a11y-announcer")),
          document.body.appendChild(r.instance);
      });
  },
  function(e, t, n) {
    "use strict";
    n(44), n(73), n(41), n(83), n(52), n(72);
    var i = n(54);
    const o = document.createElement("template");
    o.setAttribute("style", "display: none;"),
      (o.innerHTML = `<custom-style>\n  <style>\n    /*\n      JAVIS Home default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n      --state-icon-unavailable-color: var(--disabled-text-color);\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* sidebar menu */\n      --sidebar-text-color: var(--primary-text-color);\n      --sidebar-background-color: var(--paper-listbox-background-color); /* backward compatible with existing themes */\n      --sidebar-icon-color: rgba(0, 0, 0, 0.5);\n      --sidebar-selected-text-color: var(--primary-color);\n      --sidebar-selected-icon-color: var(--primary-color);\n\n      /* controls */\n      --toggle-button-color: var(--primary-color);\n      /* --toggle-button-unchecked-color: var(--accent-color); */\n      --slider-color: var(--primary-color);\n      --slider-secondary-color: var(--light-primary-color);\n      --slider-bar-color: var(--disabled-text-color);\n\n      /* for label-badge */\n      --label-badge-background-color: white;\n      --label-badge-text-color: rgb(76, 76, 76);\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n      --label-badge-grey: var(--paper-grey-500);\n\n      /*\n        Paper-styles color.html depency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --paper-toggle-button-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n      --paper-spinner-color: var(--primary-color);\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* derived colors, to keep existing themes mostly working */\n      --paper-card-background-color: var(--card-background-color);\n      --paper-listbox-background-color: var(--card-background-color);\n      --paper-item-icon-color: var(--state-icon-color);\n      --paper-item-icon-active-color: var(--state-icon-active-color);\n      --table-row-background-color: var(--primary-background-color);\n      --table-row-alternative-background-color: var(--secondary-background-color);\n\n      /* set our toggle style */\n      --paper-toggle-button-checked-ink-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-button-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-bar-color: var(--toggle-button-color);\n      --paper-toggle-button-unchecked-button-color: var(--toggle-button-unchecked-color, var(--paper-grey-50));\n      --paper-toggle-button-unchecked-bar-color: var(--toggle-button-unchecked-color, #000000);\n      /* set our slider style */\n      --paper-slider-knob-color: var(--slider-color);\n      --paper-slider-knob-start-color: var(--slider-color);\n      --paper-slider-pin-color: var(--slider-color);\n      --paper-slider-active-color: var(--slider-color);\n      --paper-slider-secondary-color: var(--slider-secondary-color);\n      --paper-slider-container-color: var(--slider-bar-color);\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* mwc */\n      --mdc-theme-primary: var(--primary-color);\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    ${
        i.a.cssText
      }\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      ${
        i.b.cssText
      }\n    </style>\n  </template>\n</dom-module>`),
      document.head.appendChild(o.content);
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    n(4);
    var i = n(31),
      o = n(34),
      r = n(1),
      a = n(25);
    const s = { NextLabelID: 1, NextAddonID: 1, NextInputID: 1 },
      l = {
        properties: {
          label: { type: String },
          value: { notify: !0, type: String },
          disabled: { type: Boolean, value: !1 },
          invalid: { type: Boolean, value: !1, notify: !0 },
          allowedPattern: { type: String },
          type: { type: String },
          list: { type: String },
          pattern: { type: String },
          required: { type: Boolean, value: !1 },
          errorMessage: { type: String },
          charCounter: { type: Boolean, value: !1 },
          noLabelFloat: { type: Boolean, value: !1 },
          alwaysFloatLabel: { type: Boolean, value: !1 },
          autoValidate: { type: Boolean, value: !1 },
          validator: { type: String },
          autocomplete: { type: String, value: "off" },
          autofocus: { type: Boolean, observer: "_autofocusChanged" },
          inputmode: { type: String },
          minlength: { type: Number },
          maxlength: { type: Number },
          min: { type: String },
          max: { type: String },
          step: { type: String },
          name: { type: String },
          placeholder: { type: String, value: "" },
          readonly: { type: Boolean, value: !1 },
          size: { type: Number },
          autocapitalize: { type: String, value: "none" },
          autocorrect: { type: String, value: "off" },
          autosave: { type: String },
          results: { type: Number },
          accept: { type: String },
          multiple: { type: Boolean },
          _ariaDescribedBy: { type: String, value: "" },
          _ariaLabelledBy: { type: String, value: "" },
          _inputId: { type: String, value: "" },
        },
        listeners: { "addon-attached": "_onAddonAttached" },
        keyBindings: { "shift+tab:keydown": "_onShiftTabDown" },
        hostAttributes: { tabindex: 0 },
        get inputElement() {
          return (
            this.$ || (this.$ = {}),
            this.$.input ||
              (this._generateInputId(),
              (this.$.input = this.$$("#" + this._inputId))),
            this.$.input
          );
        },
        get _focusableElement() {
          return this.inputElement;
        },
        created: function() {
          this._typesThatHaveText = [
            "date",
            "datetime",
            "datetime-local",
            "month",
            "time",
            "week",
            "file",
          ];
        },
        attached: function() {
          this._updateAriaLabelledBy(),
            !a.a &&
              this.inputElement &&
              -1 !== this._typesThatHaveText.indexOf(this.inputElement.type) &&
              (this.alwaysFloatLabel = !0);
        },
        _appendStringWithSpace: function(e, t) {
          return (e = e ? e + " " + t : t);
        },
        _onAddonAttached: function(e) {
          var t = Object(r.a)(e).rootTarget;
          if (t.id)
            this._ariaDescribedBy = this._appendStringWithSpace(
              this._ariaDescribedBy,
              t.id
            );
          else {
            var n = "paper-input-add-on-" + s.NextAddonID++;
            (t.id = n),
              (this._ariaDescribedBy = this._appendStringWithSpace(
                this._ariaDescribedBy,
                n
              ));
          }
        },
        validate: function() {
          return this.inputElement.validate();
        },
        _focusBlurHandler: function(e) {
          o.a._focusBlurHandler.call(this, e),
            this.focused &&
              !this._shiftTabPressed &&
              this._focusableElement &&
              this._focusableElement.focus();
        },
        _onShiftTabDown: function(e) {
          var t = this.getAttribute("tabindex");
          (this._shiftTabPressed = !0),
            this.setAttribute("tabindex", "-1"),
            this.async(function() {
              this.setAttribute("tabindex", t), (this._shiftTabPressed = !1);
            }, 1);
        },
        _handleAutoValidate: function() {
          this.autoValidate && this.validate();
        },
        updateValueAndPreserveCaret: function(e) {
          try {
            var t = this.inputElement.selectionStart;
            (this.value = e),
              (this.inputElement.selectionStart = t),
              (this.inputElement.selectionEnd = t);
          } catch (n) {
            this.value = e;
          }
        },
        _computeAlwaysFloatLabel: function(e, t) {
          return t || e;
        },
        _updateAriaLabelledBy: function() {
          var e,
            t = Object(r.a)(this.root).querySelector("label");
          t
            ? (t.id
                ? (e = t.id)
                : ((e = "paper-input-label-" + s.NextLabelID++), (t.id = e)),
              (this._ariaLabelledBy = e))
            : (this._ariaLabelledBy = "");
        },
        _generateInputId: function() {
          (this._inputId && "" !== this._inputId) ||
            (this._inputId = "input-" + s.NextInputID++);
        },
        _onChange: function(e) {
          this.shadowRoot &&
            this.fire(
              e.type,
              { sourceEvent: e },
              { node: this, bubbles: e.bubbles, cancelable: e.cancelable }
            );
        },
        _autofocusChanged: function() {
          if (this.autofocus && this._focusableElement) {
            var e = document.activeElement;
            (e instanceof HTMLElement &&
              e !== document.body &&
              e !== document.documentElement) ||
              this._focusableElement.focus();
          }
        },
      },
      c = [o.a, i.a, l];
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(4);
    var i = n(1),
      o = n(9),
      r = new Set();
    const a = {
      properties: {
        _parentResizable: { type: Object, observer: "_parentResizableChanged" },
        _notifyingDescendant: { type: Boolean, value: !1 },
      },
      listeners: {
        "iron-request-resize-notifications":
          "_onIronRequestResizeNotifications",
      },
      created: function() {
        (this._interestedResizables = []),
          (this._boundNotifyResize = this.notifyResize.bind(this)),
          (this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(
            this
          ));
      },
      attached: function() {
        this._requestResizeNotifications();
      },
      detached: function() {
        this._parentResizable
          ? this._parentResizable.stopResizeNotificationsFor(this)
          : (r.delete(this),
            window.removeEventListener("resize", this._boundNotifyResize)),
          (this._parentResizable = null);
      },
      notifyResize: function() {
        this.isAttached &&
          (this._interestedResizables.forEach(function(e) {
            this.resizerShouldNotify(e) && this._notifyDescendant(e);
          }, this),
          this._fireResize());
      },
      assignParentResizable: function(e) {
        this._parentResizable &&
          this._parentResizable.stopResizeNotificationsFor(this),
          (this._parentResizable = e),
          e &&
            -1 === e._interestedResizables.indexOf(this) &&
            (e._interestedResizables.push(this), e._subscribeIronResize(this));
      },
      stopResizeNotificationsFor: function(e) {
        var t = this._interestedResizables.indexOf(e);
        t > -1 &&
          (this._interestedResizables.splice(t, 1),
          this._unsubscribeIronResize(e));
      },
      _subscribeIronResize: function(e) {
        e.addEventListener("iron-resize", this._boundOnDescendantIronResize);
      },
      _unsubscribeIronResize: function(e) {
        e.removeEventListener("iron-resize", this._boundOnDescendantIronResize);
      },
      resizerShouldNotify: function(e) {
        return !0;
      },
      _onDescendantIronResize: function(e) {
        this._notifyingDescendant
          ? e.stopPropagation()
          : o.g || this._fireResize();
      },
      _fireResize: function() {
        this.fire("iron-resize", null, { node: this, bubbles: !1 });
      },
      _onIronRequestResizeNotifications: function(e) {
        var t = Object(i.a)(e).rootTarget;
        t !== this &&
          (t.assignParentResizable(this),
          this._notifyDescendant(t),
          e.stopPropagation());
      },
      _parentResizableChanged: function(e) {
        e && window.removeEventListener("resize", this._boundNotifyResize);
      },
      _notifyDescendant: function(e) {
        this.isAttached &&
          ((this._notifyingDescendant = !0),
          e.notifyResize(),
          (this._notifyingDescendant = !1));
      },
      _requestResizeNotifications: function() {
        if (this.isAttached)
          if ("loading" === document.readyState) {
            var e = this._requestResizeNotifications.bind(this);
            document.addEventListener("readystatechange", function t() {
              document.removeEventListener("readystatechange", t), e();
            });
          } else
            this._findParent(),
              this._parentResizable
                ? this._parentResizable._interestedResizables.forEach(function(
                    e
                  ) {
                    e !== this && e._findParent();
                  },
                  this)
                : (r.forEach(function(e) {
                    e !== this && e._findParent();
                  }, this),
                  window.addEventListener("resize", this._boundNotifyResize),
                  this.notifyResize());
      },
      _findParent: function() {
        this.assignParentResizable(null),
          this.fire("iron-request-resize-notifications", null, {
            node: this,
            bubbles: !0,
            cancelable: !0,
          }),
          this._parentResizable ? r.delete(this) : r.add(this);
      },
    };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var i = n(32);
    const o = {
      templatize(e, t) {
        (this._templatizerTemplate = e),
          (this.ctor = Object(i.b)(e, this, {
            mutableData: Boolean(t),
            parentModel: this._parentModel,
            instanceProps: this._instanceProps,
            forwardHostProp: this._forwardHostPropV2,
            notifyInstanceProp: this._notifyInstancePropV2,
          }));
      },
      stamp(e) {
        return new this.ctor(e);
      },
      modelForElement(e) {
        return Object(i.a)(this._templatizerTemplate, e);
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var i = n(26);
    let o;
    o = i.a._mutablePropertyChange;
    const r = {
      properties: { mutableData: Boolean },
      _shouldPropertyChange(e, t, n) {
        return o(this, e, t, n, this.mutableData);
      },
    };
  },
  ,
  ,
  function(e, t) {
    const n = document.createElement("template");
    n.setAttribute("style", "display: none;"),
      (n.innerHTML =
        '<style>\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin"),\n  local("Roboto-Thin"),\n  url(/static/fonts/roboto/Roboto-Thin.woff2) format("woff2");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin Italic"),\n  local("Roboto-ThinItalic"),\n  url(/static/fonts/roboto/Roboto-ThinItalic.woff2) format("woff2");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light"),\n  local("Roboto-Light"),\n  url(/static/fonts/roboto/Roboto-Light.woff2) format("woff2");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light Italic"),\n  local("Roboto-LightItalic"),\n  url(/static/fonts/roboto/Roboto-LightItalic.woff2) format("woff2");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Regular"),\n  local("Roboto-Regular"),\n  url(/static/fonts/roboto/Roboto-Regular.woff2) format("woff2");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Italic"),\n  local("Roboto-Italic"),\n  url(/static/fonts/roboto/Roboto-RegularItalic.woff2) format("woff2");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium"),\n  local("Roboto-Medium"),\n  url(/static/fonts/roboto/Roboto-Medium.woff2) format("woff2");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium Italic"),\n  local("Roboto-MediumItalic"),\n  url(/static/fonts/roboto/Roboto-MediumItalic.woff2) format("woff2");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold"),\n  local("Roboto-Bold"),\n  url(/static/fonts/roboto/Roboto-Bold.woff2) format("woff2");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold Italic"),\n  local("Roboto-BoldItalic"),\n  url(/static/fonts/roboto/Roboto-BoldItalic.woff2) format("woff2");\nfont-weight: 700;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black"),\n  local("Roboto-Black"),\n  url(/static/fonts/roboto/Roboto-Black.woff2) format("woff2");\nfont-weight: 900;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black Italic"),\n  local("Roboto-BlackItalic"),\n  url(/static/fonts/roboto/Roboto-BlackItalic.woff2) format("woff2");\nfont-weight: 900;\nfont-style: italic;\n}\n</style>'),
      document.head.appendChild(n.content);
  },
  function(e, t, n) {
    "use strict";
    n(85);
    const i = customElements.get("iron-iconset-svg");
    customElements.define(
      "ha-iconset-svg",
      class extends i {
        _fireIronIconsetAdded() {
          this.async(() =>
            this.fire("iron-iconset-added", this, { node: window })
          );
        }
        _nameChanged() {
          (this._meta.value = null),
            (this._meta.key = this.name),
            (this._meta.value = this),
            this.ownerDocument && "loading" === this.ownerDocument.readyState
              ? this.ownerDocument.addEventListener("DOMContentLoaded", () => {
                  this._fireIronIconsetAdded();
                })
              : this._fireIronIconsetAdded();
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    t.default = (function() {
      function e(t, n, i, o) {
        (this.message = t),
          (this.expected = n),
          (this.found = i),
          (this.location = o),
          (this.name = "SyntaxError"),
          "function" == typeof Error.captureStackTrace &&
            Error.captureStackTrace(this, e);
      }
      return (
        (function(e, t) {
          function n() {
            this.constructor = e;
          }
          (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
          SyntaxError: e,
          parse: function(t) {
            var n,
              i = arguments.length > 1 ? arguments[1] : {},
              o = {},
              r = { start: Pe },
              a = Pe,
              s = function(e) {
                return {
                  type: "messageFormatPattern",
                  elements: e,
                  location: Se(),
                };
              },
              l = function(e) {
                var t,
                  n,
                  i,
                  o,
                  r,
                  a = "";
                for (t = 0, i = e.length; t < i; t += 1)
                  for (n = 0, r = (o = e[t]).length; n < r; n += 1) a += o[n];
                return a;
              },
              c = function(e) {
                return { type: "messageTextElement", value: e, location: Se() };
              },
              d = /^[^ \t\n\r,.+={}#]/,
              u = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]",
              },
              p = "{",
              h = { type: "literal", value: "{", description: '"{"' },
              f = ",",
              b = { type: "literal", value: ",", description: '","' },
              m = "}",
              g = { type: "literal", value: "}", description: '"}"' },
              _ = function(e, t) {
                return {
                  type: "argumentElement",
                  id: e,
                  format: t && t[2],
                  location: Se(),
                };
              },
              y = "number",
              v = { type: "literal", value: "number", description: '"number"' },
              w = "date",
              x = { type: "literal", value: "date", description: '"date"' },
              k = "time",
              C = { type: "literal", value: "time", description: '"time"' },
              S = function(e, t) {
                return { type: e + "Format", style: t && t[2], location: Se() };
              },
              j = "plural",
              O = { type: "literal", value: "plural", description: '"plural"' },
              E = function(e) {
                return {
                  type: e.type,
                  ordinal: !1,
                  offset: e.offset || 0,
                  options: e.options,
                  location: Se(),
                };
              },
              A = "selectordinal",
              P = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"',
              },
              T = function(e) {
                return {
                  type: e.type,
                  ordinal: !0,
                  offset: e.offset || 0,
                  options: e.options,
                  location: Se(),
                };
              },
              I = "select",
              N = { type: "literal", value: "select", description: '"select"' },
              z = function(e) {
                return { type: "selectFormat", options: e, location: Se() };
              },
              R = "=",
              L = { type: "literal", value: "=", description: '"="' },
              M = function(e, t) {
                return {
                  type: "optionalFormatPattern",
                  selector: e,
                  value: t,
                  location: Se(),
                };
              },
              F = "offset:",
              D = {
                type: "literal",
                value: "offset:",
                description: '"offset:"',
              },
              B = function(e) {
                return e;
              },
              H = function(e, t) {
                return {
                  type: "pluralFormat",
                  offset: e,
                  options: t,
                  location: Se(),
                };
              },
              V = { type: "other", description: "whitespace" },
              $ = /^[ \t\n\r]/,
              U = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]",
              },
              q = { type: "other", description: "optionalWhitespace" },
              K = /^[0-9]/,
              X = { type: "class", value: "[0-9]", description: "[0-9]" },
              Y = /^[0-9a-f]/i,
              W = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i",
              },
              G = "0",
              J = { type: "literal", value: "0", description: '"0"' },
              Z = /^[1-9]/,
              Q = { type: "class", value: "[1-9]", description: "[1-9]" },
              ee = function(e) {
                return parseInt(e, 10);
              },
              te = /^[^{}\\\0-\x1F \t\n\r]/,
              ne = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
              },
              ie = "\\\\",
              oe = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"',
              },
              re = function() {
                return "\\";
              },
              ae = "\\#",
              se = { type: "literal", value: "\\#", description: '"\\\\#"' },
              le = function() {
                return "\\#";
              },
              ce = "\\{",
              de = { type: "literal", value: "\\{", description: '"\\\\{"' },
              ue = function() {
                return "{";
              },
              pe = "\\}",
              he = { type: "literal", value: "\\}", description: '"\\\\}"' },
              fe = function() {
                return "}";
              },
              be = "\\u",
              me = { type: "literal", value: "\\u", description: '"\\\\u"' },
              ge = function(e) {
                return String.fromCharCode(parseInt(e, 16));
              },
              _e = function(e) {
                return e.join("");
              },
              ye = 0,
              ve = 0,
              we = [{ line: 1, column: 1, seenCR: !1 }],
              xe = 0,
              ke = [],
              Ce = 0;
            if ("startRule" in i) {
              if (!(i.startRule in r))
                throw new Error(
                  "Can't start parsing from rule \"" + i.startRule + '".'
                );
              a = r[i.startRule];
            }
            function Se() {
              return Oe(ve, ye);
            }
            function je(e) {
              var n,
                i,
                o = we[e];
              if (o) return o;
              for (n = e - 1; !we[n]; ) n--;
              for (
                o = {
                  line: (o = we[n]).line,
                  column: o.column,
                  seenCR: o.seenCR,
                };
                n < e;

              )
                "\n" === (i = t.charAt(n))
                  ? (o.seenCR || o.line++, (o.column = 1), (o.seenCR = !1))
                  : "\r" === i || "\u2028" === i || "\u2029" === i
                  ? (o.line++, (o.column = 1), (o.seenCR = !0))
                  : (o.column++, (o.seenCR = !1)),
                  n++;
              return (we[e] = o), o;
            }
            function Oe(e, t) {
              var n = je(e),
                i = je(t);
              return {
                start: { offset: e, line: n.line, column: n.column },
                end: { offset: t, line: i.line, column: i.column },
              };
            }
            function Ee(e) {
              ye < xe || (ye > xe && ((xe = ye), (ke = [])), ke.push(e));
            }
            function Ae(t, n, i, o) {
              return (
                null !== n &&
                  (function(e) {
                    var t = 1;
                    for (
                      e.sort(function(e, t) {
                        return e.description < t.description
                          ? -1
                          : e.description > t.description
                          ? 1
                          : 0;
                      });
                      t < e.length;

                    )
                      e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                  })(n),
                new e(
                  null !== t
                    ? t
                    : (function(e, t) {
                        var n,
                          i = new Array(e.length);
                        for (n = 0; n < e.length; n++) i[n] = e[n].description;
                        return (
                          "Expected " +
                          (e.length > 1
                            ? i.slice(0, -1).join(", ") +
                              " or " +
                              i[e.length - 1]
                            : i[0]) +
                          " but " +
                          (t
                            ? '"' +
                              (function(e) {
                                function t(e) {
                                  return e
                                    .charCodeAt(0)
                                    .toString(16)
                                    .toUpperCase();
                                }
                                return e
                                  .replace(/\\/g, "\\\\")
                                  .replace(/"/g, '\\"')
                                  .replace(/\x08/g, "\\b")
                                  .replace(/\t/g, "\\t")
                                  .replace(/\n/g, "\\n")
                                  .replace(/\f/g, "\\f")
                                  .replace(/\r/g, "\\r")
                                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(
                                    e
                                  ) {
                                    return "\\x0" + t(e);
                                  })
                                  .replace(/[\x10-\x1F\x80-\xFF]/g, function(
                                    e
                                  ) {
                                    return "\\x" + t(e);
                                  })
                                  .replace(/[\u0100-\u0FFF]/g, function(e) {
                                    return "\\u0" + t(e);
                                  })
                                  .replace(/[\u1000-\uFFFF]/g, function(e) {
                                    return "\\u" + t(e);
                                  });
                              })(t) +
                              '"'
                            : "end of input") +
                          " found."
                        );
                      })(n, i),
                  n,
                  i,
                  o
                )
              );
            }
            function Pe() {
              return Te();
            }
            function Te() {
              var e, t, n;
              for (e = ye, t = [], n = Ie(); n !== o; ) t.push(n), (n = Ie());
              return t !== o && ((ve = e), (t = s(t))), (e = t);
            }
            function Ie() {
              var e;
              return (
                (e = (function() {
                  var e, n;
                  return (
                    (e = ye),
                    (n = (function() {
                      var e, n, i, r, a, s;
                      if (
                        ((e = ye),
                        (n = []),
                        (i = ye),
                        (r = Le()) !== o && (a = He()) !== o && (s = Le()) !== o
                          ? (i = r = [r, a, s])
                          : ((ye = i), (i = o)),
                        i !== o)
                      )
                        for (; i !== o; )
                          n.push(i),
                            (i = ye),
                            (r = Le()) !== o &&
                            (a = He()) !== o &&
                            (s = Le()) !== o
                              ? (i = r = [r, a, s])
                              : ((ye = i), (i = o));
                      else n = o;
                      return (
                        n !== o && ((ve = e), (n = l(n))),
                        (e = n) === o &&
                          ((e = ye),
                          (n = Re()),
                          (e = n !== o ? t.substring(e, ye) : n)),
                        e
                      );
                    })()) !== o && ((ve = e), (n = c(n))),
                    (e = n)
                  );
                })()) === o &&
                  (e = (function() {
                    var e, n, i, r, a, s, l;
                    return (
                      (e = ye),
                      123 === t.charCodeAt(ye)
                        ? ((n = p), ye++)
                        : ((n = o), 0 === Ce && Ee(h)),
                      n !== o &&
                      Le() !== o &&
                      (i = (function() {
                        var e, n, i;
                        if ((e = De()) === o) {
                          if (
                            ((e = ye),
                            (n = []),
                            d.test(t.charAt(ye))
                              ? ((i = t.charAt(ye)), ye++)
                              : ((i = o), 0 === Ce && Ee(u)),
                            i !== o)
                          )
                            for (; i !== o; )
                              n.push(i),
                                d.test(t.charAt(ye))
                                  ? ((i = t.charAt(ye)), ye++)
                                  : ((i = o), 0 === Ce && Ee(u));
                          else n = o;
                          e = n !== o ? t.substring(e, ye) : n;
                        }
                        return e;
                      })()) !== o &&
                      Le() !== o
                        ? ((r = ye),
                          44 === t.charCodeAt(ye)
                            ? ((a = f), ye++)
                            : ((a = o), 0 === Ce && Ee(b)),
                          a !== o &&
                          (s = Le()) !== o &&
                          (l = (function() {
                            var e;
                            return (
                              (e = (function() {
                                var e, n, i, r, a, s;
                                return (
                                  (e = ye),
                                  t.substr(ye, 6) === y
                                    ? ((n = y), (ye += 6))
                                    : ((n = o), 0 === Ce && Ee(v)),
                                  n === o &&
                                    (t.substr(ye, 4) === w
                                      ? ((n = w), (ye += 4))
                                      : ((n = o), 0 === Ce && Ee(x)),
                                    n === o &&
                                      (t.substr(ye, 4) === k
                                        ? ((n = k), (ye += 4))
                                        : ((n = o), 0 === Ce && Ee(C)))),
                                  n !== o && Le() !== o
                                    ? ((i = ye),
                                      44 === t.charCodeAt(ye)
                                        ? ((r = f), ye++)
                                        : ((r = o), 0 === Ce && Ee(b)),
                                      r !== o &&
                                      (a = Le()) !== o &&
                                      (s = He()) !== o
                                        ? (i = r = [r, a, s])
                                        : ((ye = i), (i = o)),
                                      i === o && (i = null),
                                      i !== o
                                        ? ((ve = e), (n = S(n, i)), (e = n))
                                        : ((ye = e), (e = o)))
                                    : ((ye = e), (e = o)),
                                  e
                                );
                              })()) === o &&
                                (e = (function() {
                                  var e, n, i, r;
                                  return (
                                    (e = ye),
                                    t.substr(ye, 6) === j
                                      ? ((n = j), (ye += 6))
                                      : ((n = o), 0 === Ce && Ee(O)),
                                    n !== o && Le() !== o
                                      ? (44 === t.charCodeAt(ye)
                                          ? ((i = f), ye++)
                                          : ((i = o), 0 === Ce && Ee(b)),
                                        i !== o &&
                                        Le() !== o &&
                                        (r = ze()) !== o
                                          ? ((ve = e), (n = E(r)), (e = n))
                                          : ((ye = e), (e = o)))
                                      : ((ye = e), (e = o)),
                                    e
                                  );
                                })()) === o &&
                                (e = (function() {
                                  var e, n, i, r;
                                  return (
                                    (e = ye),
                                    t.substr(ye, 13) === A
                                      ? ((n = A), (ye += 13))
                                      : ((n = o), 0 === Ce && Ee(P)),
                                    n !== o && Le() !== o
                                      ? (44 === t.charCodeAt(ye)
                                          ? ((i = f), ye++)
                                          : ((i = o), 0 === Ce && Ee(b)),
                                        i !== o &&
                                        Le() !== o &&
                                        (r = ze()) !== o
                                          ? ((ve = e), (n = T(r)), (e = n))
                                          : ((ye = e), (e = o)))
                                      : ((ye = e), (e = o)),
                                    e
                                  );
                                })()) === o &&
                                (e = (function() {
                                  var e, n, i, r, a;
                                  if (
                                    ((e = ye),
                                    t.substr(ye, 6) === I
                                      ? ((n = I), (ye += 6))
                                      : ((n = o), 0 === Ce && Ee(N)),
                                    n !== o)
                                  )
                                    if (Le() !== o)
                                      if (
                                        (44 === t.charCodeAt(ye)
                                          ? ((i = f), ye++)
                                          : ((i = o), 0 === Ce && Ee(b)),
                                        i !== o)
                                      )
                                        if (Le() !== o) {
                                          if (((r = []), (a = Ne()) !== o))
                                            for (; a !== o; )
                                              r.push(a), (a = Ne());
                                          else r = o;
                                          r !== o
                                            ? ((ve = e), (n = z(r)), (e = n))
                                            : ((ye = e), (e = o));
                                        } else (ye = e), (e = o);
                                      else (ye = e), (e = o);
                                    else (ye = e), (e = o);
                                  else (ye = e), (e = o);
                                  return e;
                                })()),
                              e
                            );
                          })()) !== o
                            ? (r = a = [a, s, l])
                            : ((ye = r), (r = o)),
                          r === o && (r = null),
                          r !== o && (a = Le()) !== o
                            ? (125 === t.charCodeAt(ye)
                                ? ((s = m), ye++)
                                : ((s = o), 0 === Ce && Ee(g)),
                              s !== o
                                ? ((ve = e), (n = _(i, r)), (e = n))
                                : ((ye = e), (e = o)))
                            : ((ye = e), (e = o)))
                        : ((ye = e), (e = o)),
                      e
                    );
                  })()),
                e
              );
            }
            function Ne() {
              var e, n, i, r, a;
              return (
                (e = ye),
                Le() !== o &&
                (n = (function() {
                  var e, n, i, r;
                  return (
                    (e = ye),
                    (n = ye),
                    61 === t.charCodeAt(ye)
                      ? ((i = R), ye++)
                      : ((i = o), 0 === Ce && Ee(L)),
                    i !== o && (r = De()) !== o
                      ? (n = i = [i, r])
                      : ((ye = n), (n = o)),
                    (e = n !== o ? t.substring(e, ye) : n) === o && (e = He()),
                    e
                  );
                })()) !== o &&
                Le() !== o
                  ? (123 === t.charCodeAt(ye)
                      ? ((i = p), ye++)
                      : ((i = o), 0 === Ce && Ee(h)),
                    i !== o && Le() !== o && (r = Te()) !== o && Le() !== o
                      ? (125 === t.charCodeAt(ye)
                          ? ((a = m), ye++)
                          : ((a = o), 0 === Ce && Ee(g)),
                        a !== o
                          ? ((ve = e), (e = M(n, r)))
                          : ((ye = e), (e = o)))
                      : ((ye = e), (e = o)))
                  : ((ye = e), (e = o)),
                e
              );
            }
            function ze() {
              var e, n, i, r;
              if (
                ((e = ye),
                (n = (function() {
                  var e, n, i;
                  return (
                    (e = ye),
                    t.substr(ye, 7) === F
                      ? ((n = F), (ye += 7))
                      : ((n = o), 0 === Ce && Ee(D)),
                    n !== o && Le() !== o && (i = De()) !== o
                      ? ((ve = e), (e = n = B(i)))
                      : ((ye = e), (e = o)),
                    e
                  );
                })()) === o && (n = null),
                n !== o)
              )
                if (Le() !== o) {
                  if (((i = []), (r = Ne()) !== o))
                    for (; r !== o; ) i.push(r), (r = Ne());
                  else i = o;
                  i !== o ? ((ve = e), (e = n = H(n, i))) : ((ye = e), (e = o));
                } else (ye = e), (e = o);
              else (ye = e), (e = o);
              return e;
            }
            function Re() {
              var e, n;
              if (
                (Ce++,
                (e = []),
                $.test(t.charAt(ye))
                  ? ((n = t.charAt(ye)), ye++)
                  : ((n = o), 0 === Ce && Ee(U)),
                n !== o)
              )
                for (; n !== o; )
                  e.push(n),
                    $.test(t.charAt(ye))
                      ? ((n = t.charAt(ye)), ye++)
                      : ((n = o), 0 === Ce && Ee(U));
              else e = o;
              return Ce--, e === o && ((n = o), 0 === Ce && Ee(V)), e;
            }
            function Le() {
              var e, n, i;
              for (Ce++, e = ye, n = [], i = Re(); i !== o; )
                n.push(i), (i = Re());
              return (
                (e = n !== o ? t.substring(e, ye) : n),
                Ce--,
                e === o && ((n = o), 0 === Ce && Ee(q)),
                e
              );
            }
            function Me() {
              var e;
              return (
                K.test(t.charAt(ye))
                  ? ((e = t.charAt(ye)), ye++)
                  : ((e = o), 0 === Ce && Ee(X)),
                e
              );
            }
            function Fe() {
              var e;
              return (
                Y.test(t.charAt(ye))
                  ? ((e = t.charAt(ye)), ye++)
                  : ((e = o), 0 === Ce && Ee(W)),
                e
              );
            }
            function De() {
              var e, n, i, r, a, s;
              if (
                ((e = ye),
                48 === t.charCodeAt(ye)
                  ? ((n = G), ye++)
                  : ((n = o), 0 === Ce && Ee(J)),
                n === o)
              ) {
                if (
                  ((n = ye),
                  (i = ye),
                  Z.test(t.charAt(ye))
                    ? ((r = t.charAt(ye)), ye++)
                    : ((r = o), 0 === Ce && Ee(Q)),
                  r !== o)
                ) {
                  for (a = [], s = Me(); s !== o; ) a.push(s), (s = Me());
                  a !== o ? (i = r = [r, a]) : ((ye = i), (i = o));
                } else (ye = i), (i = o);
                n = i !== o ? t.substring(n, ye) : i;
              }
              return n !== o && ((ve = e), (n = ee(n))), (e = n);
            }
            function Be() {
              var e, n, i, r, a, s, l, c;
              return (
                te.test(t.charAt(ye))
                  ? ((e = t.charAt(ye)), ye++)
                  : ((e = o), 0 === Ce && Ee(ne)),
                e === o &&
                  ((e = ye),
                  t.substr(ye, 2) === ie
                    ? ((n = ie), (ye += 2))
                    : ((n = o), 0 === Ce && Ee(oe)),
                  n !== o && ((ve = e), (n = re())),
                  (e = n) === o &&
                    ((e = ye),
                    t.substr(ye, 2) === ae
                      ? ((n = ae), (ye += 2))
                      : ((n = o), 0 === Ce && Ee(se)),
                    n !== o && ((ve = e), (n = le())),
                    (e = n) === o &&
                      ((e = ye),
                      t.substr(ye, 2) === ce
                        ? ((n = ce), (ye += 2))
                        : ((n = o), 0 === Ce && Ee(de)),
                      n !== o && ((ve = e), (n = ue())),
                      (e = n) === o &&
                        ((e = ye),
                        t.substr(ye, 2) === pe
                          ? ((n = pe), (ye += 2))
                          : ((n = o), 0 === Ce && Ee(he)),
                        n !== o && ((ve = e), (n = fe())),
                        (e = n) === o &&
                          ((e = ye),
                          t.substr(ye, 2) === be
                            ? ((n = be), (ye += 2))
                            : ((n = o), 0 === Ce && Ee(me)),
                          n !== o
                            ? ((i = ye),
                              (r = ye),
                              (a = Fe()) !== o &&
                              (s = Fe()) !== o &&
                              (l = Fe()) !== o &&
                              (c = Fe()) !== o
                                ? (r = a = [a, s, l, c])
                                : ((ye = r), (r = o)),
                              (i = r !== o ? t.substring(i, ye) : r) !== o
                                ? ((ve = e), (e = n = ge(i)))
                                : ((ye = e), (e = o)))
                            : ((ye = e), (e = o))))))),
                e
              );
            }
            function He() {
              var e, t, n;
              if (((e = ye), (t = []), (n = Be()) !== o))
                for (; n !== o; ) t.push(n), (n = Be());
              else t = o;
              return t !== o && ((ve = e), (t = _e(t))), (e = t);
            }
            if ((n = a()) !== o && ye === t.length) return n;
            throw (n !== o &&
              ye < t.length &&
              Ee({ type: "end", description: "end of input" }),
            Ae(
              null,
              ke,
              xe < t.length ? t.charAt(xe) : null,
              xe < t.length ? Oe(xe, xe + 1) : Oe(xe, xe)
            ));
          },
        }
      );
    })();
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var i = n(8),
      o = n(19);
    const r = Object(i.a)(
      (e) =>
        class extends e {
          fire(e, t, n) {
            return (n = n || {}), Object(o.a)(n.node || this, e, t, n);
          }
        }
    );
  },
  function(e, t, n) {
    "use strict";
    n(4), n(107), n(41);
    var i = n(56),
      o = n(5),
      r = n(3);
    Object(o.a)({
      is: "paper-icon-button",
      _template: r.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,
      hostAttributes: { role: "button", tabindex: "0" },
      behaviors: [i.a],
      registered: function() {
        this._template.setAttribute("strip-whitespace", "");
      },
      properties: {
        src: { type: String },
        icon: { type: String },
        alt: { type: String, observer: "_altChanged" },
      },
      _altChanged: function(e, t) {
        var n = this.getAttribute("aria-label");
        (n && t != n) || this.setAttribute("aria-label", e);
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n(44), n(46);
    var i = n(5),
      o = n(1),
      r = n(3),
      a = n(4);
    Object(i.a)({
      _template: r.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
      is: "iron-icon",
      properties: {
        icon: { type: String },
        theme: { type: String },
        src: { type: String },
        _meta: { value: a.a.create("iron-meta", { type: "iconset" }) },
      },
      observers: [
        "_updateIcon(_meta, isAttached)",
        "_updateIcon(theme, isAttached)",
        "_srcChanged(src, isAttached)",
        "_iconChanged(icon, isAttached)",
      ],
      _DEFAULT_ICONSET: "icons",
      _iconChanged: function(e) {
        var t = (e || "").split(":");
        (this._iconName = t.pop()),
          (this._iconsetName = t.pop() || this._DEFAULT_ICONSET),
          this._updateIcon();
      },
      _srcChanged: function(e) {
        this._updateIcon();
      },
      _usesIconset: function() {
        return this.icon || !this.src;
      },
      _updateIcon: function() {
        this._usesIconset()
          ? (this._img &&
              this._img.parentNode &&
              Object(o.a)(this.root).removeChild(this._img),
            "" === this._iconName
              ? this._iconset && this._iconset.removeIcon(this)
              : this._iconsetName &&
                this._meta &&
                ((this._iconset = this._meta.byKey(this._iconsetName)),
                this._iconset
                  ? (this._iconset.applyIcon(this, this._iconName, this.theme),
                    this.unlisten(window, "iron-iconset-added", "_updateIcon"))
                  : this.listen(window, "iron-iconset-added", "_updateIcon")))
          : (this._iconset && this._iconset.removeIcon(this),
            this._img ||
              ((this._img = document.createElement("img")),
              (this._img.style.width = "100%"),
              (this._img.style.height = "100%"),
              (this._img.draggable = !1)),
            (this._img.src = this.src),
            Object(o.a)(this.root).appendChild(this._img));
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(31),
      o = n(5),
      r = n(1),
      a = n(3),
      s = {
        distance: function(e, t, n, i) {
          var o = e - n,
            r = t - i;
          return Math.sqrt(o * o + r * r);
        },
        now:
          window.performance && window.performance.now
            ? window.performance.now.bind(window.performance)
            : Date.now,
      };
    function l(e) {
      (this.element = e),
        (this.width = this.boundingRect.width),
        (this.height = this.boundingRect.height),
        (this.size = Math.max(this.width, this.height));
    }
    function c(e) {
      (this.element = e),
        (this.color = window.getComputedStyle(e).color),
        (this.wave = document.createElement("div")),
        (this.waveContainer = document.createElement("div")),
        (this.wave.style.backgroundColor = this.color),
        this.wave.classList.add("wave"),
        this.waveContainer.classList.add("wave-container"),
        Object(r.a)(this.waveContainer).appendChild(this.wave),
        this.resetInteractionState();
    }
    (l.prototype = {
      get boundingRect() {
        return this.element.getBoundingClientRect();
      },
      furthestCornerDistanceFrom: function(e, t) {
        var n = s.distance(e, t, 0, 0),
          i = s.distance(e, t, this.width, 0),
          o = s.distance(e, t, 0, this.height),
          r = s.distance(e, t, this.width, this.height);
        return Math.max(n, i, o, r);
      },
    }),
      (c.MAX_RADIUS = 300),
      (c.prototype = {
        get recenters() {
          return this.element.recenters;
        },
        get center() {
          return this.element.center;
        },
        get mouseDownElapsed() {
          var e;
          return this.mouseDownStart
            ? ((e = s.now() - this.mouseDownStart),
              this.mouseUpStart && (e -= this.mouseUpElapsed),
              e)
            : 0;
        },
        get mouseUpElapsed() {
          return this.mouseUpStart ? s.now() - this.mouseUpStart : 0;
        },
        get mouseDownElapsedSeconds() {
          return this.mouseDownElapsed / 1e3;
        },
        get mouseUpElapsedSeconds() {
          return this.mouseUpElapsed / 1e3;
        },
        get mouseInteractionSeconds() {
          return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
        },
        get initialOpacity() {
          return this.element.initialOpacity;
        },
        get opacityDecayVelocity() {
          return this.element.opacityDecayVelocity;
        },
        get radius() {
          var e = this.containerMetrics.width * this.containerMetrics.width,
            t = this.containerMetrics.height * this.containerMetrics.height,
            n = 1.1 * Math.min(Math.sqrt(e + t), c.MAX_RADIUS) + 5,
            i = 1.1 - (n / c.MAX_RADIUS) * 0.2,
            o = this.mouseInteractionSeconds / i,
            r = n * (1 - Math.pow(80, -o));
          return Math.abs(r);
        },
        get opacity() {
          return this.mouseUpStart
            ? Math.max(
                0,
                this.initialOpacity -
                  this.mouseUpElapsedSeconds * this.opacityDecayVelocity
              )
            : this.initialOpacity;
        },
        get outerOpacity() {
          var e = 0.3 * this.mouseUpElapsedSeconds,
            t = this.opacity;
          return Math.max(0, Math.min(e, t));
        },
        get isOpacityFullyDecayed() {
          return (
            this.opacity < 0.01 &&
            this.radius >= Math.min(this.maxRadius, c.MAX_RADIUS)
          );
        },
        get isRestingAtMaxRadius() {
          return (
            this.opacity >= this.initialOpacity &&
            this.radius >= Math.min(this.maxRadius, c.MAX_RADIUS)
          );
        },
        get isAnimationComplete() {
          return this.mouseUpStart
            ? this.isOpacityFullyDecayed
            : this.isRestingAtMaxRadius;
        },
        get translationFraction() {
          return Math.min(
            1,
            ((this.radius / this.containerMetrics.size) * 2) / Math.sqrt(2)
          );
        },
        get xNow() {
          return this.xEnd
            ? this.xStart + this.translationFraction * (this.xEnd - this.xStart)
            : this.xStart;
        },
        get yNow() {
          return this.yEnd
            ? this.yStart + this.translationFraction * (this.yEnd - this.yStart)
            : this.yStart;
        },
        get isMouseDown() {
          return this.mouseDownStart && !this.mouseUpStart;
        },
        resetInteractionState: function() {
          (this.maxRadius = 0),
            (this.mouseDownStart = 0),
            (this.mouseUpStart = 0),
            (this.xStart = 0),
            (this.yStart = 0),
            (this.xEnd = 0),
            (this.yEnd = 0),
            (this.slideDistance = 0),
            (this.containerMetrics = new l(this.element));
        },
        draw: function() {
          var e, t, n;
          (this.wave.style.opacity = this.opacity),
            (e = this.radius / (this.containerMetrics.size / 2)),
            (t = this.xNow - this.containerMetrics.width / 2),
            (n = this.yNow - this.containerMetrics.height / 2),
            (this.waveContainer.style.webkitTransform =
              "translate(" + t + "px, " + n + "px)"),
            (this.waveContainer.style.transform =
              "translate3d(" + t + "px, " + n + "px, 0)"),
            (this.wave.style.webkitTransform = "scale(" + e + "," + e + ")"),
            (this.wave.style.transform = "scale3d(" + e + "," + e + ",1)");
        },
        downAction: function(e) {
          var t = this.containerMetrics.width / 2,
            n = this.containerMetrics.height / 2;
          this.resetInteractionState(),
            (this.mouseDownStart = s.now()),
            this.center
              ? ((this.xStart = t),
                (this.yStart = n),
                (this.slideDistance = s.distance(
                  this.xStart,
                  this.yStart,
                  this.xEnd,
                  this.yEnd
                )))
              : ((this.xStart = e
                  ? e.detail.x - this.containerMetrics.boundingRect.left
                  : this.containerMetrics.width / 2),
                (this.yStart = e
                  ? e.detail.y - this.containerMetrics.boundingRect.top
                  : this.containerMetrics.height / 2)),
            this.recenters &&
              ((this.xEnd = t),
              (this.yEnd = n),
              (this.slideDistance = s.distance(
                this.xStart,
                this.yStart,
                this.xEnd,
                this.yEnd
              ))),
            (this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(
              this.xStart,
              this.yStart
            )),
            (this.waveContainer.style.top =
              (this.containerMetrics.height - this.containerMetrics.size) / 2 +
              "px"),
            (this.waveContainer.style.left =
              (this.containerMetrics.width - this.containerMetrics.size) / 2 +
              "px"),
            (this.waveContainer.style.width =
              this.containerMetrics.size + "px"),
            (this.waveContainer.style.height =
              this.containerMetrics.size + "px");
        },
        upAction: function(e) {
          this.isMouseDown && (this.mouseUpStart = s.now());
        },
        remove: function() {
          Object(r.a)(this.waveContainer.parentNode).removeChild(
            this.waveContainer
          );
        },
      }),
      Object(o.a)({
        _template: a.a`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,
        is: "paper-ripple",
        behaviors: [i.a],
        properties: {
          initialOpacity: { type: Number, value: 0.25 },
          opacityDecayVelocity: { type: Number, value: 0.8 },
          recenters: { type: Boolean, value: !1 },
          center: { type: Boolean, value: !1 },
          ripples: {
            type: Array,
            value: function() {
              return [];
            },
          },
          animating: {
            type: Boolean,
            readOnly: !0,
            reflectToAttribute: !0,
            value: !1,
          },
          holdDown: { type: Boolean, value: !1, observer: "_holdDownChanged" },
          noink: { type: Boolean, value: !1 },
          _animating: { type: Boolean },
          _boundAnimate: {
            type: Function,
            value: function() {
              return this.animate.bind(this);
            },
          },
        },
        get target() {
          return this.keyEventTarget;
        },
        keyBindings: {
          "enter:keydown": "_onEnterKeydown",
          "space:keydown": "_onSpaceKeydown",
          "space:keyup": "_onSpaceKeyup",
        },
        attached: function() {
          11 == this.parentNode.nodeType
            ? (this.keyEventTarget = Object(r.a)(this).getOwnerRoot().host)
            : (this.keyEventTarget = this.parentNode);
          var e = this.keyEventTarget;
          this.listen(e, "up", "uiUpAction"),
            this.listen(e, "down", "uiDownAction");
        },
        detached: function() {
          this.unlisten(this.keyEventTarget, "up", "uiUpAction"),
            this.unlisten(this.keyEventTarget, "down", "uiDownAction"),
            (this.keyEventTarget = null);
        },
        get shouldKeepAnimating() {
          for (var e = 0; e < this.ripples.length; ++e)
            if (!this.ripples[e].isAnimationComplete) return !0;
          return !1;
        },
        simulatedRipple: function() {
          this.downAction(null),
            this.async(function() {
              this.upAction();
            }, 1);
        },
        uiDownAction: function(e) {
          this.noink || this.downAction(e);
        },
        downAction: function(e) {
          (this.holdDown && this.ripples.length > 0) ||
            (this.addRipple().downAction(e),
            this._animating || ((this._animating = !0), this.animate()));
        },
        uiUpAction: function(e) {
          this.noink || this.upAction(e);
        },
        upAction: function(e) {
          this.holdDown ||
            (this.ripples.forEach(function(t) {
              t.upAction(e);
            }),
            (this._animating = !0),
            this.animate());
        },
        onAnimationComplete: function() {
          (this._animating = !1),
            (this.$.background.style.backgroundColor = null),
            this.fire("transitionend");
        },
        addRipple: function() {
          var e = new c(this);
          return (
            Object(r.a)(this.$.waves).appendChild(e.waveContainer),
            (this.$.background.style.backgroundColor = e.color),
            this.ripples.push(e),
            this._setAnimating(!0),
            e
          );
        },
        removeRipple: function(e) {
          var t = this.ripples.indexOf(e);
          t < 0 ||
            (this.ripples.splice(t, 1),
            e.remove(),
            this.ripples.length || this._setAnimating(!1));
        },
        animate: function() {
          if (this._animating) {
            var e, t;
            for (e = 0; e < this.ripples.length; ++e)
              (t = this.ripples[e]).draw(),
                (this.$.background.style.opacity = t.outerOpacity),
                t.isOpacityFullyDecayed &&
                  !t.isRestingAtMaxRadius &&
                  this.removeRipple(t);
            this.shouldKeepAnimating || 0 !== this.ripples.length
              ? window.requestAnimationFrame(this._boundAnimate)
              : this.onAnimationComplete();
          }
        },
        animateRipple: function() {
          return this.animate();
        },
        _onEnterKeydown: function() {
          this.uiDownAction(), this.async(this.uiUpAction, 1);
        },
        _onSpaceKeydown: function() {
          this.uiDownAction();
        },
        _onSpaceKeyup: function() {
          this.uiUpAction();
        },
        _holdDownChanged: function(e, t) {
          void 0 !== t && (e ? this.downAction() : this.upAction());
        },
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(4);
    const i = {
      properties: {
        value: { type: Number, value: 0, notify: !0, reflectToAttribute: !0 },
        min: { type: Number, value: 0, notify: !0 },
        max: { type: Number, value: 100, notify: !0 },
        step: { type: Number, value: 1, notify: !0 },
        ratio: { type: Number, value: 0, readOnly: !0, notify: !0 },
      },
      observers: ["_update(value, min, max, step)"],
      _calcRatio: function(e) {
        return (this._clampValue(e) - this.min) / (this.max - this.min);
      },
      _clampValue: function(e) {
        return Math.min(this.max, Math.max(this.min, this._calcStep(e)));
      },
      _calcStep: function(e) {
        if (((e = parseFloat(e)), !this.step)) return e;
        var t = Math.round((e - this.min) / this.step);
        return this.step < 1
          ? t / (1 / this.step) + this.min
          : t * this.step + this.min;
      },
      _validateValue: function() {
        var e = this._clampValue(this.value);
        return (
          (this.value = this.oldValue = isNaN(e) ? this.oldValue : e),
          this.value !== e
        );
      },
      _update: function() {
        this._validateValue(),
          this._setRatio(100 * this._calcRatio(this.value));
      },
    };
  },
  ,
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(91),
      o = n(60),
      r = n(5),
      a = n(1),
      s = n(3);
    Object(r.a)({
      _template: s.a`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,
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
  function(e, t, n) {
    "use strict";
    n(4), n(52);
    var i = n(5),
      o = n(3),
      r = n(68);
    Object(i.a)({
      _template: o.a`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,
      is: "paper-input-char-counter",
      behaviors: [r.a],
      properties: { _charCounterStr: { type: String, value: "0" } },
      update: function(e) {
        if (e.inputElement) {
          e.value = e.value || "";
          var t = e.value.toString().length.toString();
          e.inputElement.hasAttribute("maxlength") &&
            (t += "/" + e.inputElement.getAttribute("maxlength")),
            (this._charCounterStr = t);
        }
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n(4), n(44), n(41), n(52);
    var i = n(5),
      o = n(1),
      r = n(22),
      a = n(3);
    const s = a.a`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;
    s.setAttribute("style", "display: none;"),
      document.head.appendChild(s.content),
      Object(i.a)({
        _template: a.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,
        is: "paper-input-container",
        properties: {
          noLabelFloat: { type: Boolean, value: !1 },
          alwaysFloatLabel: { type: Boolean, value: !1 },
          attrForValue: { type: String, value: "bind-value" },
          autoValidate: { type: Boolean, value: !1 },
          invalid: { observer: "_invalidChanged", type: Boolean, value: !1 },
          focused: { readOnly: !0, type: Boolean, value: !1, notify: !0 },
          _addons: { type: Array },
          _inputHasContent: { type: Boolean, value: !1 },
          _inputSelector: {
            type: String,
            value: "input,iron-input,textarea,.paper-input-input",
          },
          _boundOnFocus: {
            type: Function,
            value: function() {
              return this._onFocus.bind(this);
            },
          },
          _boundOnBlur: {
            type: Function,
            value: function() {
              return this._onBlur.bind(this);
            },
          },
          _boundOnInput: {
            type: Function,
            value: function() {
              return this._onInput.bind(this);
            },
          },
          _boundValueChanged: {
            type: Function,
            value: function() {
              return this._onValueChanged.bind(this);
            },
          },
        },
        listeners: {
          "addon-attached": "_onAddonAttached",
          "iron-input-validate": "_onIronInputValidate",
        },
        get _valueChangedEvent() {
          return this.attrForValue + "-changed";
        },
        get _propertyForValue() {
          return Object(r.b)(this.attrForValue);
        },
        get _inputElement() {
          return Object(o.a)(this).querySelector(this._inputSelector);
        },
        get _inputElementValue() {
          return (
            this._inputElement[this._propertyForValue] ||
            this._inputElement.value
          );
        },
        ready: function() {
          (this.__isFirstValueUpdate = !0),
            this._addons || (this._addons = []),
            this.addEventListener("focus", this._boundOnFocus, !0),
            this.addEventListener("blur", this._boundOnBlur, !0);
        },
        attached: function() {
          this.attrForValue
            ? this._inputElement.addEventListener(
                this._valueChangedEvent,
                this._boundValueChanged
              )
            : this.addEventListener("input", this._onInput),
            this._inputElementValue && "" != this._inputElementValue
              ? this._handleValueAndAutoValidate(this._inputElement)
              : this._handleValue(this._inputElement);
        },
        _onAddonAttached: function(e) {
          this._addons || (this._addons = []);
          var t = e.target;
          -1 === this._addons.indexOf(t) &&
            (this._addons.push(t),
            this.isAttached && this._handleValue(this._inputElement));
        },
        _onFocus: function() {
          this._setFocused(!0);
        },
        _onBlur: function() {
          this._setFocused(!1),
            this._handleValueAndAutoValidate(this._inputElement);
        },
        _onInput: function(e) {
          this._handleValueAndAutoValidate(e.target);
        },
        _onValueChanged: function(e) {
          var t = e.target;
          (this.__isFirstValueUpdate &&
            ((this.__isFirstValueUpdate = !1),
            void 0 === t.value || "" === t.value)) ||
            this._handleValueAndAutoValidate(e.target);
        },
        _handleValue: function(e) {
          var t = this._inputElementValue;
          t || 0 === t || ("number" === e.type && !e.checkValidity())
            ? (this._inputHasContent = !0)
            : (this._inputHasContent = !1),
            this.updateAddons({
              inputElement: e,
              value: t,
              invalid: this.invalid,
            });
        },
        _handleValueAndAutoValidate: function(e) {
          var t;
          this.autoValidate &&
            e &&
            ((t = e.validate
              ? e.validate(this._inputElementValue)
              : e.checkValidity()),
            (this.invalid = !t));
          this._handleValue(e);
        },
        _onIronInputValidate: function(e) {
          this.invalid = this._inputElement.invalid;
        },
        _invalidChanged: function() {
          this._addons && this.updateAddons({ invalid: this.invalid });
        },
        updateAddons: function(e) {
          for (var t, n = 0; (t = this._addons[n]); n++) t.update(e);
        },
        _computeInputContentClass: function(e, t, n, i, o) {
          var r = "input-content";
          if (e) o && (r += " label-is-hidden"), i && (r += " is-invalid");
          else {
            var a = this.querySelector("label");
            t || o
              ? ((r += " label-is-floating"),
                (this.$.labelAndInputContainer.style.position = "static"),
                i ? (r += " is-invalid") : n && (r += " label-is-highlighted"))
              : (a &&
                  (this.$.labelAndInputContainer.style.position = "relative"),
                i && (r += " is-invalid"));
          }
          return n && (r += " focused"), r;
        },
        _computeUnderlineClass: function(e, t) {
          var n = "underline";
          return t ? (n += " is-invalid") : e && (n += " is-highlighted"), n;
        },
        _computeAddOnContentClass: function(e, t) {
          var n = "add-on-content";
          return t ? (n += " is-invalid") : e && (n += " is-highlighted"), n;
        },
      });
  },
  function(e, t, n) {
    "use strict";
    n(4), n(41), n(52);
    var i = n(5),
      o = n(3),
      r = n(68);
    Object(i.a)({
      _template: o.a`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,
      is: "paper-input-error",
      behaviors: [r.a],
      properties: {
        invalid: { readOnly: !0, reflectToAttribute: !0, type: Boolean },
      },
      update: function(e) {
        this._setInvalid(e.invalid);
      },
    });
  },
  ,
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4);
    var i = n(53),
      o = n(34);
    const r = [i.a, o.a, { hostAttributes: { role: "option", tabindex: "0" } }];
  },
  ,
  function(e, t, n) {
    "use strict";
    n(4);
    const i = {
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
    const o = [
      i,
      {
        _configureAnimations: function(e) {
          var t = [],
            n = [];
          if (e.length > 0)
            for (let r, a = 0; (r = e[a]); a++) {
              let e = document.createElement(r.name);
              if (e.isNeonAnimation) {
                let t = null;
                e.configure ||
                  (e.configure = function(e) {
                    return null;
                  }),
                  (t = e.configure(r)),
                  n.push({ result: t, config: r, neonAnimation: e });
              } else console.warn(this.is + ":", r.name, "not found!");
            }
          for (var i = 0; i < n.length; i++) {
            let e = n[i].result,
              r = n[i].config,
              a = n[i].neonAnimation;
            try {
              "function" != typeof e.cancel && (e = document.timeline.play(e));
            } catch (o) {
              (e = null), console.warn("Couldnt play", "(", r.name, ").", o);
            }
            e && t.push({ neonAnimation: a, config: r, animation: e });
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
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(59),
      o = n(60);
    const r = {
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
          (void 0 !== this.value && null !== this.value) || (this.value = "on");
        },
      },
      a = [i.a, o.a, r];
    var s = n(56),
      l = n(67);
    n.d(t, "a", function() {
      return d;
    });
    const c = {
        _checkedChanged: function() {
          r._checkedChanged.call(this),
            this.hasRipple() &&
              (this.checked
                ? this._ripple.setAttribute("checked", "")
                : this._ripple.removeAttribute("checked"));
        },
        _buttonStateChanged: function() {
          l.a._buttonStateChanged.call(this),
            this.disabled || (this.isAttached && (this.checked = this.active));
        },
      },
      d = [s.a, a, c];
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(31),
      o = n(87);
    const r = {
        properties: {
          multi: { type: Boolean, value: !1, observer: "multiChanged" },
          selectedValues: {
            type: Array,
            notify: !0,
            value: function() {
              return [];
            },
          },
          selectedItems: {
            type: Array,
            readOnly: !0,
            notify: !0,
            value: function() {
              return [];
            },
          },
        },
        observers: ["_updateSelected(selectedValues.splices)"],
        select: function(e) {
          this.multi ? this._toggleSelected(e) : (this.selected = e);
        },
        multiChanged: function(e) {
          (this._selection.multi = e), this._updateSelected();
        },
        get _shouldUpdateSelection() {
          return (
            null != this.selected ||
            (null != this.selectedValues && this.selectedValues.length)
          );
        },
        _updateAttrForSelected: function() {
          this.multi
            ? this.selectedItems &&
              this.selectedItems.length > 0 &&
              (this.selectedValues = this.selectedItems
                .map(function(e) {
                  return this._indexToValue(this.indexOf(e));
                }, this)
                .filter(function(e) {
                  return null != e;
                }, this))
            : o.a._updateAttrForSelected.apply(this);
        },
        _updateSelected: function() {
          this.multi
            ? this._selectMulti(this.selectedValues)
            : this._selectSelected(this.selected);
        },
        _selectMulti: function(e) {
          e = e || [];
          var t = (this._valuesToItems(e) || []).filter(function(e) {
            return null != e;
          });
          this._selection.clear(t);
          for (var n = 0; n < t.length; n++)
            this._selection.setItemSelected(t[n], !0);
          this.fallbackSelection &&
            !this._selection.get().length &&
            (this._valueToItem(this.fallbackSelection) &&
              this.select(this.fallbackSelection));
        },
        _selectionChange: function() {
          var e = this._selection.get();
          this.multi
            ? (this._setSelectedItems(e),
              this._setSelectedItem(e.length ? e[0] : null))
            : null != e
            ? (this._setSelectedItems([e]), this._setSelectedItem(e))
            : (this._setSelectedItems([]), this._setSelectedItem(null));
        },
        _toggleSelected: function(e) {
          var t = this.selectedValues.indexOf(e);
          t < 0
            ? this.push("selectedValues", e)
            : this.splice("selectedValues", t, 1);
        },
        _valuesToItems: function(e) {
          return null == e
            ? null
            : e.map(function(e) {
                return this._valueToItem(e);
              }, this);
        },
      },
      a = [o.a, r];
    var s = n(1);
    n.d(t, "b", function() {
      return l;
    }),
      n.d(t, "a", function() {
        return c;
      });
    const l = {
        properties: {
          focusedItem: {
            observer: "_focusedItemChanged",
            readOnly: !0,
            type: Object,
          },
          attrForItemTitle: { type: String },
          disabled: { type: Boolean, value: !1, observer: "_disabledChanged" },
        },
        _MODIFIER_KEYS: [
          "Alt",
          "AltGraph",
          "CapsLock",
          "Control",
          "Fn",
          "FnLock",
          "Hyper",
          "Meta",
          "NumLock",
          "OS",
          "ScrollLock",
          "Shift",
          "Super",
          "Symbol",
          "SymbolLock",
        ],
        _SEARCH_RESET_TIMEOUT_MS: 1e3,
        _previousTabIndex: 0,
        hostAttributes: { role: "menu" },
        observers: ["_updateMultiselectable(multi)"],
        listeners: {
          focus: "_onFocus",
          keydown: "_onKeydown",
          "iron-items-changed": "_onIronItemsChanged",
        },
        keyBindings: {
          up: "_onUpKey",
          down: "_onDownKey",
          esc: "_onEscKey",
          "shift+tab:keydown": "_onShiftTabDown",
        },
        attached: function() {
          this._resetTabindices();
        },
        select: function(e) {
          this._defaultFocusAsync &&
            (this.cancelAsync(this._defaultFocusAsync),
            (this._defaultFocusAsync = null));
          var t = this._valueToItem(e);
          (t && t.hasAttribute("disabled")) ||
            (this._setFocusedItem(t), r.select.apply(this, arguments));
        },
        _resetTabindices: function() {
          var e = this.multi
            ? this.selectedItems && this.selectedItems[0]
            : this.selectedItem;
          this.items.forEach(function(t) {
            t.setAttribute("tabindex", t === e ? "0" : "-1"),
              t.setAttribute("aria-selected", this._selection.isSelected(t));
          }, this);
        },
        _updateMultiselectable: function(e) {
          e
            ? this.setAttribute("aria-multiselectable", "true")
            : this.removeAttribute("aria-multiselectable");
        },
        _focusWithKeyboardEvent: function(e) {
          if (-1 === this._MODIFIER_KEYS.indexOf(e.key)) {
            this.cancelDebouncer("_clearSearchText");
            for (
              var t,
                n = this._searchText || "",
                i = (n += (e.key && 1 == e.key.length
                  ? e.key
                  : String.fromCharCode(e.keyCode)
                ).toLocaleLowerCase()).length,
                o = 0;
              (t = this.items[o]);
              o++
            )
              if (!t.hasAttribute("disabled")) {
                var r = this.attrForItemTitle || "textContent",
                  a = (t[r] || t.getAttribute(r) || "").trim();
                if (!(a.length < i) && a.slice(0, i).toLocaleLowerCase() == n) {
                  this._setFocusedItem(t);
                  break;
                }
              }
            (this._searchText = n),
              this.debounce(
                "_clearSearchText",
                this._clearSearchText,
                this._SEARCH_RESET_TIMEOUT_MS
              );
          }
        },
        _clearSearchText: function() {
          this._searchText = "";
        },
        _focusPrevious: function() {
          for (
            var e = this.items.length,
              t = Number(this.indexOf(this.focusedItem)),
              n = 1;
            n < e + 1;
            n++
          ) {
            var i = this.items[(t - n + e) % e];
            if (!i.hasAttribute("disabled")) {
              var o = Object(s.a)(i).getOwnerRoot() || document;
              if ((this._setFocusedItem(i), Object(s.a)(o).activeElement == i))
                return;
            }
          }
        },
        _focusNext: function() {
          for (
            var e = this.items.length,
              t = Number(this.indexOf(this.focusedItem)),
              n = 1;
            n < e + 1;
            n++
          ) {
            var i = this.items[(t + n) % e];
            if (!i.hasAttribute("disabled")) {
              var o = Object(s.a)(i).getOwnerRoot() || document;
              if ((this._setFocusedItem(i), Object(s.a)(o).activeElement == i))
                return;
            }
          }
        },
        _applySelection: function(e, t) {
          t
            ? e.setAttribute("aria-selected", "true")
            : e.setAttribute("aria-selected", "false"),
            o.a._applySelection.apply(this, arguments);
        },
        _focusedItemChanged: function(e, t) {
          t && t.setAttribute("tabindex", "-1"),
            !e ||
              e.hasAttribute("disabled") ||
              this.disabled ||
              (e.setAttribute("tabindex", "0"), e.focus());
        },
        _onIronItemsChanged: function(e) {
          e.detail.addedNodes.length && this._resetTabindices();
        },
        _onShiftTabDown: function(e) {
          var t = this.getAttribute("tabindex");
          (l._shiftTabPressed = !0),
            this._setFocusedItem(null),
            this.setAttribute("tabindex", "-1"),
            this.async(function() {
              this.setAttribute("tabindex", t), (l._shiftTabPressed = !1);
            }, 1);
        },
        _onFocus: function(e) {
          if (!l._shiftTabPressed) {
            var t = Object(s.a)(e).rootTarget;
            (t === this ||
              void 0 === t.tabIndex ||
              this.isLightDescendant(t)) &&
              (this._defaultFocusAsync = this.async(function() {
                var e = this.multi
                  ? this.selectedItems && this.selectedItems[0]
                  : this.selectedItem;
                this._setFocusedItem(null),
                  e
                    ? this._setFocusedItem(e)
                    : this.items[0] && this._focusNext();
              }));
          }
        },
        _onUpKey: function(e) {
          this._focusPrevious(), e.detail.keyboardEvent.preventDefault();
        },
        _onDownKey: function(e) {
          this._focusNext(), e.detail.keyboardEvent.preventDefault();
        },
        _onEscKey: function(e) {
          var t = this.focusedItem;
          t && t.blur();
        },
        _onKeydown: function(e) {
          this.keyboardEventMatchesKeys(e, "up down esc") ||
            this._focusWithKeyboardEvent(e),
            e.stopPropagation();
        },
        _activateHandler: function(e) {
          o.a._activateHandler.call(this, e), e.stopPropagation();
        },
        _disabledChanged: function(e) {
          e
            ? ((this._previousTabIndex = this.hasAttribute("tabindex")
                ? this.tabIndex
                : 0),
              this.removeAttribute("tabindex"))
            : this.hasAttribute("tabindex") ||
              this.setAttribute("tabindex", this._previousTabIndex);
        },
        _shiftTabPressed: !1,
      },
      c = [a, i.a, l];
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(4);
    var i = n(1),
      o = Element.prototype,
      r =
        o.matches ||
        o.matchesSelector ||
        o.mozMatchesSelector ||
        o.msMatchesSelector ||
        o.oMatchesSelector ||
        o.webkitMatchesSelector;
    const a = {
      getTabbableNodes: function(e) {
        var t = [];
        return this._collectTabbableNodes(e, t) ? this._sortByTabIndex(t) : t;
      },
      isFocusable: function(e) {
        return r.call(e, "input, select, textarea, button, object")
          ? r.call(e, ":not([disabled])")
          : r.call(
              e,
              "a[href], area[href], iframe, [tabindex], [contentEditable]"
            );
      },
      isTabbable: function(e) {
        return (
          this.isFocusable(e) &&
          r.call(e, ':not([tabindex="-1"])') &&
          this._isVisible(e)
        );
      },
      _normalizedTabIndex: function(e) {
        if (this.isFocusable(e)) {
          var t = e.getAttribute("tabindex") || 0;
          return Number(t);
        }
        return -1;
      },
      _collectTabbableNodes: function(e, t) {
        if (e.nodeType !== Node.ELEMENT_NODE || !this._isVisible(e)) return !1;
        var n,
          o = e,
          r = this._normalizedTabIndex(o),
          a = r > 0;
        r >= 0 && t.push(o),
          (n =
            "content" === o.localName || "slot" === o.localName
              ? Object(i.a)(o).getDistributedNodes()
              : Object(i.a)(o.root || o).children);
        for (var s = 0; s < n.length; s++)
          a = this._collectTabbableNodes(n[s], t) || a;
        return a;
      },
      _isVisible: function(e) {
        var t = e.style;
        return (
          "hidden" !== t.visibility &&
          "none" !== t.display &&
          ("hidden" !== (t = window.getComputedStyle(e)).visibility &&
            "none" !== t.display)
        );
      },
      _sortByTabIndex: function(e) {
        var t = e.length;
        if (t < 2) return e;
        var n = Math.ceil(t / 2),
          i = this._sortByTabIndex(e.slice(0, n)),
          o = this._sortByTabIndex(e.slice(n));
        return this._mergeSortByTabIndex(i, o);
      },
      _mergeSortByTabIndex: function(e, t) {
        for (var n = []; e.length > 0 && t.length > 0; )
          this._hasLowerTabOrder(e[0], t[0])
            ? n.push(t.shift())
            : n.push(e.shift());
        return n.concat(e, t);
      },
      _hasLowerTabOrder: function(e, t) {
        var n = Math.max(e.tabIndex, 0),
          i = Math.max(t.tabIndex, 0);
        return 0 === n || 0 === i ? i > n : n > i;
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    n(4), n(44), n(139);
    var i = n(5),
      o = n(3),
      r = n(117);
    Object(i.a)({
      _template: o.a`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
      is: "paper-item",
      behaviors: [r.a],
    });
  },
  function(e, t, n) {
    "use strict";
    n(44), n(55), n(41), n(52);
    const i = document.createElement("template");
    i.setAttribute("style", "display: none;"),
      (i.innerHTML =
        "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
      document.head.appendChild(i.content);
  },
  function(e, t, n) {
    "use strict";
    n(4), n(41);
    var i = n(121),
      o = n(5),
      r = n(3);
    Object(o.a)({
      _template: r.a`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
      is: "paper-listbox",
      behaviors: [i.a],
      hostAttributes: { role: "listbox" },
    });
  },
  function(e, t, n) {
    "use strict";
    n(4), n(31), n(107), n(90), n(142), n(108), n(41), n(143), n(144);
    var i = n(53),
      o = n(34),
      r = n(59),
      a = n(60),
      s = n(5),
      l = n(1),
      c = n(35),
      d = n(3);
    Object(s.a)({
      _template: d.a`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,
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
  function(e, t, n) {
    "use strict";
    n(4);
    var i = n(31),
      o = n(34),
      r = n(84),
      a = n(119),
      s = n(5),
      l = n(1),
      c = n(3);
    Object(s.a)({
      _template: c.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,
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
          this.opened ? this._finishRenderOpened() : this._finishRenderClosed();
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
    const d = {
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
              transformOrigin: ["mozTransformOrigin", "webkitTransformOrigin"],
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
    var u = {
      ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
      MAX_ANIMATION_TIME_MS: 400,
    };
    const p = Object(s.a)({
      _template: c.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,
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
        verticalAlign: { type: String, value: "top", reflectToAttribute: !0 },
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
                  easing: u.ANIMATION_CUBIC_BEZIER,
                },
              },
              {
                name: "paper-menu-grow-height-animation",
                timing: {
                  delay: 100,
                  duration: 275,
                  easing: u.ANIMATION_CUBIC_BEZIER,
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
                  easing: u.ANIMATION_CUBIC_BEZIER,
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
    Object.keys(u).forEach(function(e) {
      p[e] = u[e];
    });
  },
  function(e, t, n) {
    "use strict";
    n(85);
    const i = document.createElement("template");
    i.setAttribute("style", "display: none;"),
      (i.innerHTML =
        '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'),
      document.head.appendChild(i.content);
  },
  function(e, t, n) {
    "use strict";
    n(41);
    const i = document.createElement("template");
    i.setAttribute("style", "display: none;"),
      (i.innerHTML =
        '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>'),
      document.head.appendChild(i.content);
  },
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    n(4), n(41);
    var i = n(120),
      o = n(56),
      r = n(5),
      a = n(3),
      s = n(61);
    const l = a.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;
    l.setAttribute("strip-whitespace", ""),
      Object(r.a)({
        _template: l,
        is: "paper-checkbox",
        behaviors: [i.a],
        hostAttributes: { role: "checkbox", "aria-checked": !1, tabindex: 0 },
        properties: {
          ariaActiveAttribute: { type: String, value: "aria-checked" },
        },
        attached: function() {
          Object(s.a)(this, function() {
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
  function(e, t, n) {
    "use strict";
    var i = n(25),
      o = n(105);
    let r = null;
    const a = ["svg", "path"];
    customElements.define(
      "ha-markdown",
      class extends Object(o.a)(i.a) {
        static get properties() {
          return {
            content: { type: String, observer: "_render" },
            allowSvg: { type: Boolean, value: !1 },
          };
        }
        connectedCallback() {
          super.connectedCallback(),
            (this._scriptLoaded = 0),
            (this._renderScheduled = !1),
            (this._resize = () => this.fire("iron-resize")),
            r || (r = Promise.all([n.e(126), n.e(68)]).then(n.bind(null, 167))),
            r
              .then(
                ({ marked: e, filterXSS: t }) => {
                  (this.marked = e),
                    (this.filterXSS = t),
                    (this._scriptLoaded = 1);
                },
                () => {
                  this._scriptLoaded = 2;
                }
              )
              .then(() => this._render());
        }
        _render() {
          0 === this._scriptLoaded ||
            this._renderScheduled ||
            ((this._renderScheduled = !0),
            Promise.resolve().then(() => {
              if (((this._renderScheduled = !1), 1 === this._scriptLoaded)) {
                (this.innerHTML = this.filterXSS(
                  this.marked(this.content, {
                    gfm: !0,
                    tables: !0,
                    breaks: !0,
                  }),
                  {
                    onIgnoreTag: this.allowSvg
                      ? (e, t) => (a.indexOf(e) >= 0 ? t : null)
                      : null,
                  }
                )),
                  this._resize();
                const e = document.createTreeWalker(this, 1, null, !1);
                for (; e.nextNode(); ) {
                  const t = e.currentNode;
                  "A" === t.tagName && t.host !== document.location.host
                    ? (t.target = "_blank")
                    : "IMG" === t.tagName &&
                      t.addEventListener("load", this._resize);
                }
              } else
                2 === this._scriptLoaded && (this.innerText = this.content);
            }));
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    n(4), n(44), n(55);
    var i = n(109),
      o = n(5),
      r = n(3);
    Object(o.a)({
      _template: r.a`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,
      is: "paper-progress",
      behaviors: [i.a],
      properties: {
        secondaryProgress: { type: Number, value: 0 },
        secondaryRatio: { type: Number, value: 0, readOnly: !0 },
        indeterminate: {
          type: Boolean,
          value: !1,
          observer: "_toggleIndeterminate",
        },
        disabled: {
          type: Boolean,
          value: !1,
          reflectToAttribute: !0,
          observer: "_disabledChanged",
        },
      },
      observers: [
        "_progressChanged(secondaryProgress, value, min, max, indeterminate)",
      ],
      hostAttributes: { role: "progressbar" },
      _toggleIndeterminate: function(e) {
        this.toggleClass("indeterminate", e, this.$.primaryProgress);
      },
      _transformProgress: function(e, t) {
        var n = "scaleX(" + t / 100 + ")";
        e.style.transform = e.style.webkitTransform = n;
      },
      _mainRatioChanged: function(e) {
        this._transformProgress(this.$.primaryProgress, e);
      },
      _progressChanged: function(e, t, n, i, o) {
        (e = this._clampValue(e)), (t = this._clampValue(t));
        var r = 100 * this._calcRatio(e),
          a = 100 * this._calcRatio(t);
        this._setSecondaryRatio(r),
          this._transformProgress(this.$.secondaryProgress, r),
          this._transformProgress(this.$.primaryProgress, a),
          (this.secondaryProgress = e),
          o
            ? this.removeAttribute("aria-valuenow")
            : this.setAttribute("aria-valuenow", t),
          this.setAttribute("aria-valuemin", n),
          this.setAttribute("aria-valuemax", i);
      },
      _disabledChanged: function(e) {
        this.setAttribute("aria-disabled", e ? "true" : "false");
      },
      _hideSecondaryProgress: function(e) {
        return 0 === e;
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n(44), n(90), n(150), n(55);
    var i = n(31),
      o = n(59),
      r = n(109),
      a = n(56),
      s = n(5),
      l = n(35);
    const c = n(4).c`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;
    c.setAttribute("strip-whitespace", ""),
      Object(s.a)({
        _template: c,
        is: "paper-slider",
        behaviors: [i.a, o.a, a.a, r.a],
        properties: {
          value: { type: Number, value: 0 },
          snaps: { type: Boolean, value: !1, notify: !0 },
          pin: { type: Boolean, value: !1, notify: !0 },
          secondaryProgress: {
            type: Number,
            value: 0,
            notify: !0,
            observer: "_secondaryProgressChanged",
          },
          editable: { type: Boolean, value: !1 },
          immediateValue: { type: Number, value: 0, readOnly: !0, notify: !0 },
          maxMarkers: { type: Number, value: 0, notify: !0 },
          expand: { type: Boolean, value: !1, readOnly: !0 },
          ignoreBarTouch: { type: Boolean, value: !1 },
          dragging: { type: Boolean, value: !1, readOnly: !0, notify: !0 },
          transiting: { type: Boolean, value: !1, readOnly: !0 },
          markers: {
            type: Array,
            readOnly: !0,
            value: function() {
              return [];
            },
          },
        },
        observers: [
          "_updateKnob(value, min, max, snaps, step)",
          "_valueChanged(value)",
          "_immediateValueChanged(immediateValue)",
          "_updateMarkers(maxMarkers, min, max, snaps)",
        ],
        hostAttributes: { role: "slider", tabindex: 0 },
        keyBindings: {
          left: "_leftKey",
          right: "_rightKey",
          "down pagedown home": "_decrementKey",
          "up pageup end": "_incrementKey",
        },
        ready: function() {
          this.ignoreBarTouch && Object(l.f)(this.$.sliderBar, "auto");
        },
        increment: function() {
          this.value = this._clampValue(this.value + this.step);
        },
        decrement: function() {
          this.value = this._clampValue(this.value - this.step);
        },
        _updateKnob: function(e, t, n, i, o) {
          this.setAttribute("aria-valuemin", t),
            this.setAttribute("aria-valuemax", n),
            this.setAttribute("aria-valuenow", e),
            this._positionKnob(100 * this._calcRatio(e));
        },
        _valueChanged: function() {
          this.fire("value-change", { composed: !0 });
        },
        _immediateValueChanged: function() {
          this.dragging
            ? this.fire("immediate-value-change", { composed: !0 })
            : (this.value = this.immediateValue);
        },
        _secondaryProgressChanged: function() {
          this.secondaryProgress = this._clampValue(this.secondaryProgress);
        },
        _expandKnob: function() {
          this._setExpand(!0);
        },
        _resetKnob: function() {
          this.cancelDebouncer("expandKnob"), this._setExpand(!1);
        },
        _positionKnob: function(e) {
          this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),
            this._setRatio(100 * this._calcRatio(this.immediateValue)),
            (this.$.sliderKnob.style.left = this.ratio + "%"),
            this.dragging &&
              ((this._knobstartx = (this.ratio * this._w) / 100),
              this.translate3d(0, 0, 0, this.$.sliderKnob));
        },
        _calcKnobPosition: function(e) {
          return ((this.max - this.min) * e) / 100 + this.min;
        },
        _onTrack: function(e) {
          switch ((e.stopPropagation(), e.detail.state)) {
            case "start":
              this._trackStart(e);
              break;
            case "track":
              this._trackX(e);
              break;
            case "end":
              this._trackEnd();
          }
        },
        _trackStart: function(e) {
          this._setTransiting(!1),
            (this._w = this.$.sliderBar.offsetWidth),
            (this._x = (this.ratio * this._w) / 100),
            (this._startx = this._x),
            (this._knobstartx = this._startx),
            (this._minx = -this._startx),
            (this._maxx = this._w - this._startx),
            this.$.sliderKnob.classList.add("dragging"),
            this._setDragging(!0);
        },
        _trackX: function(e) {
          this.dragging || this._trackStart(e);
          var t = this._isRTL ? -1 : 1,
            n = Math.min(this._maxx, Math.max(this._minx, e.detail.dx * t));
          this._x = this._startx + n;
          var i = this._calcStep(
            this._calcKnobPosition((this._x / this._w) * 100)
          );
          this._setImmediateValue(i);
          var o =
            this._calcRatio(this.immediateValue) * this._w - this._knobstartx;
          this.translate3d(o + "px", 0, 0, this.$.sliderKnob);
        },
        _trackEnd: function() {
          var e = this.$.sliderKnob.style;
          this.$.sliderKnob.classList.remove("dragging"),
            this._setDragging(!1),
            this._resetKnob(),
            (this.value = this.immediateValue),
            (e.transform = e.webkitTransform = ""),
            this.fire("change", { composed: !0 });
        },
        _knobdown: function(e) {
          this._expandKnob(), e.preventDefault(), this.focus();
        },
        _bartrack: function(e) {
          this._allowBarEvent(e) && this._onTrack(e);
        },
        _barclick: function(e) {
          this._w = this.$.sliderBar.offsetWidth;
          var t = this.$.sliderBar.getBoundingClientRect(),
            n = ((e.detail.x - t.left) / this._w) * 100;
          this._isRTL && (n = 100 - n);
          var i = this.ratio;
          this._setTransiting(!0),
            this._positionKnob(n),
            i === this.ratio && this._setTransiting(!1),
            this.async(function() {
              this.fire("change", { composed: !0 });
            }),
            e.preventDefault(),
            this.focus();
        },
        _bardown: function(e) {
          this._allowBarEvent(e) &&
            (this.debounce("expandKnob", this._expandKnob, 60),
            this._barclick(e));
        },
        _knobTransitionEnd: function(e) {
          e.target === this.$.sliderKnob && this._setTransiting(!1);
        },
        _updateMarkers: function(e, t, n, i) {
          i || this._setMarkers([]);
          var o = Math.round((n - t) / this.step);
          o > e && (o = e),
            (o < 0 || !isFinite(o)) && (o = 0),
            this._setMarkers(new Array(o));
        },
        _mergeClasses: function(e) {
          return Object.keys(e)
            .filter(function(t) {
              return e[t];
            })
            .join(" ");
        },
        _getClassNames: function() {
          return this._mergeClasses({
            disabled: this.disabled,
            pin: this.pin,
            snaps: this.snaps,
            ring: this.immediateValue <= this.min,
            expand: this.expand,
            dragging: this.dragging,
            transiting: this.transiting,
            editable: this.editable,
          });
        },
        _allowBarEvent: function(e) {
          return (
            !this.ignoreBarTouch || e.detail.sourceEvent instanceof MouseEvent
          );
        },
        get _isRTL() {
          return (
            void 0 === this.__isRTL &&
              (this.__isRTL =
                "rtl" === window.getComputedStyle(this).direction),
            this.__isRTL
          );
        },
        _leftKey: function(e) {
          this._isRTL ? this._incrementKey(e) : this._decrementKey(e);
        },
        _rightKey: function(e) {
          this._isRTL ? this._decrementKey(e) : this._incrementKey(e);
        },
        _incrementKey: function(e) {
          this.disabled ||
            ("end" === e.detail.key
              ? (this.value = this.max)
              : this.increment(),
            this.fire("change"),
            e.preventDefault());
        },
        _decrementKey: function(e) {
          this.disabled ||
            ("home" === e.detail.key
              ? (this.value = this.min)
              : this.decrement(),
            this.fire("change"),
            e.preventDefault());
        },
        _changeValue: function(e) {
          (this.value = e.target.value), this.fire("change", { composed: !0 });
        },
        _inputKeyDown: function(e) {
          e.stopPropagation();
        },
        _createRipple: function() {
          return (
            (this._rippleContainer = this.$.sliderKnob),
            a.b._createRipple.call(this)
          );
        },
        _focusedChanged: function(e) {
          e && this.ensureRipple(),
            this.hasRipple() &&
              ((this._ripple.style.display = e ? "" : "none"),
              (this._ripple.holdDown = e));
        },
      });
  },
  function(e, t, n) {
    "use strict";
    n(151);
    const i = customElements.get("paper-slider");
    customElements.define(
      "ha-paper-slider",
      class extends i {
        static get template() {
          const e = document.createElement("template");
          e.innerHTML = i.template.innerHTML;
          const t = document.createElement("style");
          return (
            (t.innerHTML =
              '\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    '),
            e.content.appendChild(t),
            e
          );
        }
      }
    );
  },
  ,
  function(e, t, n) {
    "use strict";
    n(148), n(141), n(106), n(90), n(138), n(140);
    var i = n(3),
      o = n(25),
      r = (n(152), n(105));
    customElements.define(
      "ha-form",
      class extends Object(r.a)(o.a) {
        static get template() {
          return i.a`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-label="[[computeLabel]]"
            compute-error="[[computeError]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          ></paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `;
        }
        static get properties() {
          return {
            data: { type: Object, notify: !0 },
            schema: Object,
            error: Object,
            computeLabel: { type: Function, value: () => (e) => e && e.name },
            computeError: { type: Function, value: () => (e, t) => e },
          };
        }
        focus() {
          const e = this.shadowRoot.querySelector(
            "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
          );
          e && e.focus();
        }
        _isArray(e) {
          return Array.isArray(e);
        }
        _isRange(e) {
          return "valueMin" in e && "valueMax" in e;
        }
        _equals(e, t) {
          return e === t;
        }
        _includes(e, t) {
          return e.indexOf(t) >= 0;
        }
        _getValue(e, t) {
          return e ? e[t.name] : null;
        }
        _valueChanged(e) {
          let t = e.detail.value;
          "integer" === e.model.item.type && (t = Number(e.detail.value)),
            this.set(["data", e.model.item.name], t);
        }
        _passwordFieldType(e) {
          return e ? "text" : "password";
        }
        _passwordFieldIcon(e) {
          return e ? "hass:eye-off" : "hass:eye";
        }
        _optionValue(e) {
          return Array.isArray(e) ? e[0] : e;
        }
        _optionLabel(e) {
          return Array.isArray(e) ? e[1] : e;
        }
      }
    );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    n.r(t);
    n(88), n(86), n(102), n(92), n(101);
    var i = n(80),
      o = n(0);
    n(82), n(154), n(149);
    function r(e) {
      var t,
        n = d(e.key);
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
      var n = e[t];
      if (void 0 !== n && "function" != typeof n)
        throw new TypeError("Expected '" + t + "' to be a function");
      return n;
    }
    function d(e) {
      var t = (function(e, t) {
        if ("object" != typeof e || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, t || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : String(t);
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
    let h = (function(e, t, n, i) {
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
                if (!s(e)) return n.push(e);
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
              var s = this.fromElementDescriptor(e),
                l = this.toElementFinisherExtras((0, o[r])(s) || s);
              (e = l.element),
                this.addElementPlacement(e, t),
                l.finisher && i.push(l.finisher);
              var c = l.extras;
              if (c) {
                for (var d = 0; d < c.length; d++)
                  this.addElementPlacement(c[d], t);
                n.push.apply(n, c);
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
                  this.disallowProperty(e, "finisher", "An element descriptor"),
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
            var n = d(e.key),
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
                ? this.disallowProperty(e, "initializer", "A method descriptor")
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
              n = c(e, "finisher"),
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
            var n = c(e, "finisher"),
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
      if (i) for (var u = 0; u < i.length; u++) o = i[u](o);
      var p = t(function(e) {
          o.initializeInstanceElements(e, h.elements);
        }, n),
        h = o.decorateClass(
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
                if (l(r.descriptor) || l(o.descriptor)) {
                  if (s(r) || s(o))
                    throw new ReferenceError(
                      "Duplicated methods (" + r.key + ") can't be decorated."
                    );
                  o.descriptor = r.descriptor;
                } else {
                  if (s(r)) {
                    if (s(o))
                      throw new ReferenceError(
                        "Decorators can't be placed on different accessors with for the same property (" +
                          r.key +
                          ")."
                      );
                    o.decorators = r.decorators;
                  }
                  a(r, o);
                }
              else t.push(r);
            }
            return t;
          })(p.d.map(r)),
          e
        );
      return (
        o.initializeClassElements(p.F, h.elements),
        o.runClassFinishers(p.F, h.finishers)
      );
    })(
      null,
      function(e, t) {
        class n extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        }
        return {
          F: n,
          d: [
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "authProvider",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "clientId",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "redirectUri",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "oauth2State",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "_state",
              value: () => "loading",
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "_stepData",
              value: () => ({}),
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "_step",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(o.g)()],
              key: "_errorMessage",
              value: void 0,
            },
            {
              kind: "method",
              key: "render",
              value: function() {
                return o.f`
      <form>
        ${this._renderForm()}
      </form>
    `;
              },
            },
            {
              kind: "method",
              key: "firstUpdated",
              value: function(e) {
                if (
                  (u(p(n.prototype), "firstUpdated", this).call(this, e),
                  null == this.clientId || null == this.redirectUri)
                )
                  return (
                    console.error(
                      "clientId and redirectUri must not be null",
                      this.clientId,
                      this.redirectUri
                    ),
                    (this._state = "error"),
                    void (this._errorMessage = this._unknownError())
                  );
                this.addEventListener("keypress", (e) => {
                  13 === e.keyCode && this._handleSubmit(e);
                });
              },
            },
            {
              kind: "method",
              key: "updated",
              value: function(e) {
                u(p(n.prototype), "updated", this).call(this, e),
                  e.has("authProvider") &&
                    this._providerChanged(this.authProvider);
              },
            },
            {
              kind: "method",
              key: "_renderForm",
              value: function() {
                switch (this._state) {
                  case "step":
                    return null == this._step
                      ? o.f``
                      : o.f`
          ${this._renderStep(this._step)}
          <div class="action">
            <mwc-button raised @click=${this._handleSubmit}
              >${"form" === this._step.type ? "Next" : "Start over"}</mwc-button
            >
          </div>
        `;
                  case "error":
                    return o.f`
          <div class="error">Error: ${this._errorMessage}</div>
        `;
                  case "loading":
                    return o.f`
          ${this.localize("ui.panel.page-authorize.form.working")}
        `;
                }
              },
            },
            {
              kind: "method",
              key: "_renderStep",
              value: function(e) {
                switch (e.type) {
                  case "abort":
                    return o.f`
          ${this.localize("ui.panel.page-authorize.abort_intro")}:
          <ha-markdown
            .content=${this.localize(
              `ui.panel.page-authorize.form.providers.${e.handler[0]}.abort.${
                e.reason
              }`
            )}
          ></ha-markdown>
        `;
                  case "form":
                    return o.f`
          ${
            this._computeStepDescription(e)
              ? o.f`
                <ha-markdown
                  .content=${this._computeStepDescription(e)}
                  allow-svg
                ></ha-markdown>
              `
              : o.f``
          }
          <ha-form
            .data=${this._stepData}
            .schema=${e.data_schema}
            .error=${e.errors}
            .computeLabel=${this._computeLabelCallback(e)}
            .computeError=${this._computeErrorCallback(e)}
          ></ha-form>
        `;
                  default:
                    return o.f``;
                }
              },
            },
            {
              kind: "method",
              key: "_providerChanged",
              value: async function(e) {
                if (
                  (this._step &&
                    "form" === this._step.type &&
                    fetch(`/auth/login_flow/${this._step.flow_id}`, {
                      method: "DELETE",
                      credentials: "same-origin",
                    }).catch((e) => {
                      console.error("Error delete obsoleted auth flow", e);
                    }),
                  null == e)
                )
                  return (
                    console.error("No auth provider"),
                    (this._state = "error"),
                    void (this._errorMessage = this._unknownError())
                  );
                try {
                  const n = await fetch("/auth/login_flow", {
                      method: "POST",
                      credentials: "same-origin",
                      body: JSON.stringify({
                        client_id: this.clientId,
                        handler: [e.type, e.id],
                        redirect_uri: this.redirectUri,
                      }),
                    }),
                    i = await n.json();
                  if (n.ok) {
                    if ("create_entry" === i.type)
                      return void this._redirect(i.result);
                    await this._updateStep(i);
                  } else
                    (this._state = "error"), (this._errorMessage = i.message);
                } catch (t) {
                  console.error("Error starting auth flow", t),
                    (this._state = "error"),
                    (this._errorMessage = this._unknownError());
                }
              },
            },
            {
              kind: "method",
              key: "_redirect",
              value: function(e) {
                let t = this.redirectUri;
                t.includes("?") ? t.endsWith("&") || (t += "&") : (t += "?"),
                  (t += `code=${encodeURIComponent(e)}`),
                  this.oauth2State &&
                    (t += `&state=${encodeURIComponent(this.oauth2State)}`),
                  document.location.assign(t);
              },
            },
            {
              kind: "method",
              key: "_updateStep",
              value: async function(e) {
                let t = null;
                this._step &&
                  (e.flow_id !== this._step.flow_id ||
                    ("form" === e.type &&
                      "form" === this._step.type &&
                      e.step_id !== this._step.step_id)) &&
                  (t = {}),
                  (this._step = e),
                  (this._state = "step"),
                  null != t && (this._stepData = t),
                  await this.updateComplete,
                  setTimeout(() => {
                    const e = this.shadowRoot.querySelector("ha-form");
                    e && e.focus();
                  }, 100);
              },
            },
            {
              kind: "method",
              key: "_computeStepDescription",
              value: function(e) {
                const t = `ui.panel.page-authorize.form.providers.${
                    e.handler[0]
                  }.step.${e.step_id}.description`,
                  n = [],
                  i = e.description_placeholders || {};
                return (
                  Object.keys(i).forEach((e) => {
                    n.push(e), n.push(i[e]);
                  }),
                  this.localize(t, ...n)
                );
              },
            },
            {
              kind: "method",
              key: "_computeLabelCallback",
              value: function(e) {
                return (t) =>
                  this.localize(
                    `ui.panel.page-authorize.form.providers.${
                      e.handler[0]
                    }.step.${e.step_id}.data.${t.name}`
                  );
              },
            },
            {
              kind: "method",
              key: "_computeErrorCallback",
              value: function(e) {
                return (t) =>
                  this.localize(
                    `ui.panel.page-authorize.form.providers.${
                      e.handler[0]
                    }.error.${t}`
                  );
              },
            },
            {
              kind: "method",
              key: "_unknownError",
              value: function() {
                return this.localize(
                  "ui.panel.page-authorize.form.unknown_error"
                );
              },
            },
            {
              kind: "method",
              key: "_handleSubmit",
              value: async function(e) {
                if ((e.preventDefault(), null == this._step)) return;
                if ("form" !== this._step.type)
                  return void this._providerChanged(this.authProvider);
                (this._state = "loading"),
                  this.style.setProperty(
                    "min-height",
                    `${this.offsetHeight}px`
                  );
                const t = Object.assign({}, this._stepData, {
                  client_id: this.clientId,
                });
                try {
                  const e = await fetch(
                      `/auth/login_flow/${this._step.flow_id}`,
                      {
                        method: "POST",
                        credentials: "same-origin",
                        body: JSON.stringify(t),
                      }
                    ),
                    i = await e.json();
                  if ("create_entry" === i.type)
                    return void this._redirect(i.result);
                  await this._updateStep(i);
                } catch (n) {
                  console.error("Error submitting step", n),
                    (this._state = "error"),
                    (this._errorMessage = this._unknownError());
                } finally {
                  this.style.setProperty("min-height", "");
                }
              },
            },
            {
              kind: "get",
              static: !0,
              key: "styles",
              value: function() {
                return o.c`
      :host {
        /* So we can set min-height to avoid jumping during loading */
        display: block;
      }
      .action {
        margin: 24px 0 8px;
        text-align: center;
      }
      .error {
        color: red;
      }
    `;
              },
            },
          ],
        };
      },
      Object(i.a)(o.a)
    );
    customElements.define("ha-auth-flow", h);
    var f = n(65),
      b = n(75);
    n.e(104).then(n.bind(null, 668));
    customElements.define(
      "ha-authorize",
      class extends Object(i.a)(o.a) {
        constructor() {
          super(),
            (this.clientId = void 0),
            (this.redirectUri = void 0),
            (this.oauth2State = void 0),
            (this._authProvider = void 0),
            (this._authProviders = void 0),
            (this.translationFragment = "page-authorize");
          const e = {},
            t = location.search.substr(1).split("&");
          for (const n of t) {
            const t = n.split("=");
            t.length > 1 &&
              (e[decodeURIComponent(t[0])] = decodeURIComponent(t[1]));
          }
          e.client_id && (this.clientId = e.client_id),
            e.redirect_uri && (this.redirectUri = e.redirect_uri),
            e.state && (this.oauth2State = e.state);
        }
        static get properties() {
          return {
            _authProvider: {},
            _authProviders: {},
            clientId: {},
            redirectUri: {},
            oauth2State: {},
          };
        }
        render() {
          if (!this._authProviders)
            return o.f`
        <p>${this.localize("ui.panel.page-authorize.initializing")}</p>
      `;
          const e = document.createElement("div");
          (e.innerText = this.localize(
            "ui.panel.page-authorize.logging_in_with",
            "authProviderName",
            "NAME"
          )),
            (e.innerHTML = e.innerHTML.replace(
              "**NAME**",
              `<b>${this._authProvider.name}</b>`
            ));
          const t = this._authProviders.filter((e) => e !== this._authProvider);
          return o.f`
      <p>
        ${this.localize(
          "ui.panel.page-authorize.authorizing_client",
          "clientId",
          this.clientId
        )}
      </p>
      ${e}

      <ha-auth-flow
        .resources="${this.resources}"
        .clientId="${this.clientId}"
        .redirectUri="${this.redirectUri}"
        .oauth2State="${this.oauth2State}"
        .authProvider="${this._authProvider}"
        .step="{{step}}"
      ></ha-auth-flow>

      ${
        t.length > 0
          ? o.f`
            <ha-pick-auth-provider
              .resources="${this.resources}"
              .clientId="${this.clientId}"
              .authProviders="${t}"
              @pick-auth-provider="${this._handleAuthProviderPick}"
            ></ha-pick-auth-provider>
          `
          : ""
      }
    `;
        }
        firstUpdated(e) {
          if (
            (super.firstUpdated(e),
            this._fetchAuthProviders(),
            !this.redirectUri)
          )
            return;
          const t = document.createElement("a");
          (t.href = this.redirectUri),
            t.host === location.host && Object(b.a)(!1);
        }
        async _fetchAuthProviders() {
          try {
            const t = await (window.providersPromise || Object(f.a)()),
              n = await t.json();
            if (400 === t.status && "onboarding_required" === n.code)
              return void (location.href = "/?");
            if (0 === n.length)
              return void alert(
                "No auth providers returned. Unable to finish login."
              );
            (this._authProviders = n), (this._authProvider = n[0]);
          } catch (e) {
            console.error("Error loading auth providers", e);
          }
        }
        async _handleAuthProviderPick(e) {
          this._authProvider = e.detail;
        }
        static get styles() {
          return o.c`
      ha-pick-auth-provider {
        display: block;
        margin-top: 48px;
      }
    `;
        }
      }
    ),
      setTimeout(() => n.e(131).then(n.t.bind(null, 659, 7)), 2e3);
  },
]);
//# sourceMappingURL=authorize.4dcce412.js.map
