/*! For license information please see authorize.6a793cc5.js.LICENSE */
!(function(e) {
  function t(t) {
    for (var n, i, o = t[0], a = t[1], s = 0, l = []; s < o.length; s++)
      (i = o[s]), r[i] && l.push(r[i][0]), (r[i] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (c && c(t); l.length; ) l.shift()();
  }
  var n = {},
    r = { 18: 0, 0: 0, 1: 0, 2: 0, 8: 0, 10: 0, 112: 0, 115: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function(e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function(t, i) {
          n = r[e] = [t, i];
        });
        t.push((n[2] = o));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          (s.src = (function(e) {
            return (
              i.p +
              "chunk." +
              {
                68: "696f770b9c41b9908b3e",
                70: "7c157d107c462d4ee99e",
                104: "828482d5abdd114458ec",
                114: "fa4b080d5da8058579c1",
                119: "b14d2811e3a0f3eec229",
              }[e] +
              ".js"
            );
          })(e)),
          (a = function(t) {
            (s.onerror = s.onload = null), clearTimeout(c);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  o = t && t.target && t.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"
                  );
                (a.type = i), (a.request = o), n[1](a);
              }
              r[e] = void 0;
            }
          });
        var c = setTimeout(function() {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/frontend_es5/"),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    a = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var s = 0; s < o.length; s++) t(o[s]);
  var c = a;
  i((i.s = 165));
})([
  function(e, t, n) {
    "use strict";
    var r = n(10),
      i = n(17),
      o = n(6),
      a = 133;
    function s(e, t) {
      for (
        var n = e.element.content,
          r = e.parts,
          i = document.createTreeWalker(n, a, null, !1),
          o = l(r),
          s = r[o],
          c = -1,
          u = 0,
          d = [],
          p = null;
        i.nextNode();

      ) {
        c++;
        var f = i.currentNode;
        for (
          f.previousSibling === p && (p = null),
            t.has(f) && (d.push(f), null === p && (p = f)),
            null !== p && u++;
          void 0 !== s && s.index === c;

        )
          (s.index = null !== p ? -1 : s.index - u), (s = r[(o = l(r, o))]);
      }
      d.forEach(function(e) {
        return e.parentNode.removeChild(e);
      });
    }
    var c = function(e) {
        for (
          var t = 11 === e.nodeType ? 0 : 1,
            n = document.createTreeWalker(e, a, null, !1);
          n.nextNode();

        )
          t++;
        return t;
      },
      l = function(e) {
        for (
          var t =
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : -1) + 1;
          t < e.length;
          t++
        ) {
          var n = e[t];
          if (Object(o.d)(n)) return t;
        }
        return -1;
      };
    var u = n(30),
      d = n(27),
      p = n(38),
      f = n(23),
      h = function(e, t) {
        return "".concat(e, "--").concat(t);
      },
      b = !0;
    void 0 === window.ShadyCSS
      ? (b = !1)
      : void 0 === window.ShadyCSS.prepareTemplateDom &&
        (console.warn(
          "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
        ),
        (b = !1));
    var m = function(e) {
        return function(t) {
          var n = h(t.type, e),
            r = d.a.get(n);
          void 0 === r &&
            ((r = { stringsArray: new WeakMap(), keyString: new Map() }),
            d.a.set(n, r));
          var i = r.stringsArray.get(t.strings);
          if (void 0 !== i) return i;
          var a = t.strings.join(o.f);
          if (void 0 === (i = r.keyString.get(a))) {
            var s = t.getTemplateElement();
            b && window.ShadyCSS.prepareTemplateDom(s, e),
              (i = new o.a(t, s)),
              r.keyString.set(a, i);
          }
          return r.stringsArray.set(t.strings, i), i;
        };
      },
      v = ["html", "svg"],
      y = new Set(),
      g = function(e, t, n) {
        y.add(n);
        var r = e.querySelectorAll("style"),
          i = r.length;
        if (0 !== i) {
          for (var o = document.createElement("style"), u = 0; u < i; u++) {
            var p = r[u];
            p.parentNode.removeChild(p), (o.textContent += p.textContent);
          }
          !(function(e) {
            v.forEach(function(t) {
              var n = d.a.get(h(t, e));
              void 0 !== n &&
                n.keyString.forEach(function(e) {
                  var t = e.element.content,
                    n = new Set();
                  Array.from(t.querySelectorAll("style")).forEach(function(e) {
                    n.add(e);
                  }),
                    s(e, n);
                });
            });
          })(n);
          var f = t.element.content;
          !(function(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              r = e.element.content,
              i = e.parts;
            if (null != n)
              for (
                var o = document.createTreeWalker(r, a, null, !1),
                  s = l(i),
                  u = 0,
                  d = -1;
                o.nextNode();

              )
                for (
                  d++,
                    o.currentNode === n &&
                      ((u = c(t)), n.parentNode.insertBefore(t, n));
                  -1 !== s && i[s].index === d;

                ) {
                  if (u > 0) {
                    for (; -1 !== s; ) (i[s].index += u), (s = l(i, s));
                    return;
                  }
                  s = l(i, s);
                }
            else r.appendChild(t);
          })(t, o, f.firstChild),
            window.ShadyCSS.prepareTemplateStyles(t.element, n);
          var b = f.querySelector("style");
          if (window.ShadyCSS.nativeShadow && null !== b)
            e.insertBefore(b.cloneNode(!0), e.firstChild);
          else {
            f.insertBefore(o, f.firstChild);
            var m = new Set();
            m.add(o), s(t, m);
          }
        } else window.ShadyCSS.prepareTemplateStyles(t.element, n);
      };
    function _(e) {
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
    function k(e) {
      return (k =
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
    function w(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function O(e, t) {
      return !t || ("object" !== k(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function j(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (j = function(e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return S(e, arguments, P(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          C(r, e)
        );
      })(e);
    }
    function S(e, t, n) {
      return (S = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && C(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function C(e, t) {
      return (C =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function P(e) {
      return (P = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    window.JSCompiler_renameProperty = function(e, t) {
      return e;
    };
    var E = {
        toAttribute: function(e, t) {
          switch (t) {
            case Boolean:
              return e ? "" : null;
            case Object:
            case Array:
              return null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute: function(e, t) {
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
      A = function(e, t) {
        return t !== e && (t == t || e == e);
      },
      T = {
        attribute: !0,
        type: String,
        converter: E,
        reflect: !1,
        hasChanged: A,
      },
      R = Promise.resolve(!0),
      z = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = O(this, P(t).call(this)))._updateState = 0),
            (e._instanceProperties = void 0),
            (e._updatePromise = R),
            (e._hasConnectedResolver = void 0),
            (e._changedProperties = new Map()),
            (e._reflectingProperties = void 0),
            e.initialize(),
            e
          );
        }
        var n, r, i;
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
          })(t, j(HTMLElement)),
          (n = t),
          (r = [
            {
              key: "initialize",
              value: function() {
                this._saveInstanceProperties(), this._requestUpdate();
              },
            },
            {
              key: "_saveInstanceProperties",
              value: function() {
                var e = this;
                this.constructor._classProperties.forEach(function(t, n) {
                  if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    delete e[n],
                      e._instanceProperties ||
                        (e._instanceProperties = new Map()),
                      e._instanceProperties.set(n, r);
                  }
                });
              },
            },
            {
              key: "_applyInstanceProperties",
              value: function() {
                var e = this;
                this._instanceProperties.forEach(function(t, n) {
                  return (e[n] = t);
                }),
                  (this._instanceProperties = void 0);
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                (this._updateState = 32 | this._updateState),
                  this._hasConnectedResolver &&
                    (this._hasConnectedResolver(),
                    (this._hasConnectedResolver = void 0));
              },
            },
            { key: "disconnectedCallback", value: function() {} },
            {
              key: "attributeChangedCallback",
              value: function(e, t, n) {
                t !== n && this._attributeToProperty(e, n);
              },
            },
            {
              key: "_propertyToAttribute",
              value: function(e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : T,
                  r = this.constructor,
                  i = r._attributeNameForProperty(e, n);
                if (void 0 !== i) {
                  var o = r._propertyValueToAttribute(t, n);
                  if (void 0 === o) return;
                  (this._updateState = 8 | this._updateState),
                    null == o
                      ? this.removeAttribute(i)
                      : this.setAttribute(i, o),
                    (this._updateState = -9 & this._updateState);
                }
              },
            },
            {
              key: "_attributeToProperty",
              value: function(e, t) {
                if (!(8 & this._updateState)) {
                  var n = this.constructor,
                    r = n._attributeToPropertyMap.get(e);
                  if (void 0 !== r) {
                    var i = n._classProperties.get(r) || T;
                    (this._updateState = 16 | this._updateState),
                      (this[r] = n._propertyValueFromAttribute(t, i)),
                      (this._updateState = -17 & this._updateState);
                  }
                }
              },
            },
            {
              key: "_requestUpdate",
              value: function(e, t) {
                var n = !0;
                if (void 0 !== e) {
                  var r = this.constructor,
                    i = r._classProperties.get(e) || T;
                  r._valueHasChanged(this[e], t, i.hasChanged)
                    ? (this._changedProperties.has(e) ||
                        this._changedProperties.set(e, t),
                      !0 !== i.reflect ||
                        16 & this._updateState ||
                        (void 0 === this._reflectingProperties &&
                          (this._reflectingProperties = new Map()),
                        this._reflectingProperties.set(e, i)))
                    : (n = !1);
                }
                !this._hasRequestedUpdate && n && this._enqueueUpdate();
              },
            },
            {
              key: "requestUpdate",
              value: function(e, t) {
                return this._requestUpdate(e, t), this.updateComplete;
              },
            },
            {
              key: "_enqueueUpdate",
              value: (function() {
                var e,
                  t = ((e = regeneratorRuntime.mark(function e() {
                    var t,
                      n,
                      r,
                      i,
                      o = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._updateState = 4 | this._updateState),
                                (r = this._updatePromise),
                                (this._updatePromise = new Promise(function(
                                  e,
                                  r
                                ) {
                                  (t = e), (n = r);
                                })),
                                (e.prev = 3),
                                (e.next = 6),
                                r
                              );
                            case 6:
                              e.next = 10;
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(3));
                            case 10:
                              if (this._hasConnected) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 13),
                                new Promise(function(e) {
                                  return (o._hasConnectedResolver = e);
                                })
                              );
                            case 13:
                              if (
                                ((e.prev = 13),
                                null == (i = this.performUpdate()))
                              ) {
                                e.next = 18;
                                break;
                              }
                              return (e.next = 18), i;
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              (e.prev = 20), (e.t1 = e.catch(13)), n(e.t1);
                            case 23:
                              t(!this._hasRequestedUpdate);
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 8], [13, 20]]
                    );
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, i) {
                      var o = e.apply(t, n);
                      function a(e) {
                        w(o, r, i, a, s, "next", e);
                      }
                      function s(e) {
                        w(o, r, i, a, s, "throw", e);
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
              key: "performUpdate",
              value: function() {
                this._instanceProperties && this._applyInstanceProperties();
                var e = !1,
                  t = this._changedProperties;
                try {
                  (e = this.shouldUpdate(t)) && this.update(t);
                } catch (n) {
                  throw ((e = !1), n);
                } finally {
                  this._markUpdated();
                }
                e &&
                  (1 & this._updateState ||
                    ((this._updateState = 1 | this._updateState),
                    this.firstUpdated(t)),
                  this.updated(t));
              },
            },
            {
              key: "_markUpdated",
              value: function() {
                (this._changedProperties = new Map()),
                  (this._updateState = -5 & this._updateState);
              },
            },
            {
              key: "shouldUpdate",
              value: function(e) {
                return !0;
              },
            },
            {
              key: "update",
              value: function(e) {
                var t = this;
                void 0 !== this._reflectingProperties &&
                  this._reflectingProperties.size > 0 &&
                  (this._reflectingProperties.forEach(function(e, n) {
                    return t._propertyToAttribute(n, t[n], e);
                  }),
                  (this._reflectingProperties = void 0));
              },
            },
            { key: "updated", value: function(e) {} },
            { key: "firstUpdated", value: function(e) {} },
            {
              key: "_hasConnected",
              get: function() {
                return 32 & this._updateState;
              },
            },
            {
              key: "_hasRequestedUpdate",
              get: function() {
                return 4 & this._updateState;
              },
            },
            {
              key: "hasUpdated",
              get: function() {
                return 1 & this._updateState;
              },
            },
            {
              key: "updateComplete",
              get: function() {
                return this._updatePromise;
              },
            },
          ]),
          (i = [
            {
              key: "_ensureClassProperties",
              value: function() {
                var e = this;
                if (
                  !this.hasOwnProperty(
                    JSCompiler_renameProperty("_classProperties", this)
                  )
                ) {
                  this._classProperties = new Map();
                  var t = Object.getPrototypeOf(this)._classProperties;
                  void 0 !== t &&
                    t.forEach(function(t, n) {
                      return e._classProperties.set(n, t);
                    });
                }
              },
            },
            {
              key: "createProperty",
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : T;
                if (
                  (this._ensureClassProperties(),
                  this._classProperties.set(e, t),
                  !t.noAccessor && !this.prototype.hasOwnProperty(e))
                ) {
                  var n = "symbol" === k(e) ? Symbol() : "__".concat(e);
                  Object.defineProperty(this.prototype, e, {
                    get: function() {
                      return this[n];
                    },
                    set: function(t) {
                      var r = this[e];
                      (this[n] = t), this._requestUpdate(e, r);
                    },
                    configurable: !0,
                    enumerable: !0,
                  });
                }
              },
            },
            {
              key: "finalize",
              value: function() {
                if (
                  !this.hasOwnProperty(
                    JSCompiler_renameProperty("finalized", this)
                  ) ||
                  !this.finalized
                ) {
                  var e = Object.getPrototypeOf(this);
                  if (
                    ("function" == typeof e.finalize && e.finalize(),
                    (this.finalized = !0),
                    this._ensureClassProperties(),
                    (this._attributeToPropertyMap = new Map()),
                    this.hasOwnProperty(
                      JSCompiler_renameProperty("properties", this)
                    ))
                  ) {
                    var t = this.properties,
                      n = [].concat(
                        _(Object.getOwnPropertyNames(t)),
                        _(
                          "function" == typeof Object.getOwnPropertySymbols
                            ? Object.getOwnPropertySymbols(t)
                            : []
                        )
                      ),
                      r = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = n[Symbol.iterator]();
                        !(r = (a = s.next()).done);
                        r = !0
                      ) {
                        var c = a.value;
                        this.createProperty(c, t[c]);
                      }
                    } catch (l) {
                      (i = !0), (o = l);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                  }
                }
              },
            },
            {
              key: "_attributeNameForProperty",
              value: function(e, t) {
                var n = t.attribute;
                return !1 === n
                  ? void 0
                  : "string" == typeof n
                  ? n
                  : "string" == typeof e
                  ? e.toLowerCase()
                  : void 0;
              },
            },
            {
              key: "_valueHasChanged",
              value: function(e, t) {
                return (arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A)(e, t);
              },
            },
            {
              key: "_propertyValueFromAttribute",
              value: function(e, t) {
                var n = t.type,
                  r = t.converter || E,
                  i = "function" == typeof r ? r : r.fromAttribute;
                return i ? i(e, n) : e;
              },
            },
            {
              key: "_propertyValueToAttribute",
              value: function(e, t) {
                if (void 0 !== t.reflect) {
                  var n = t.type,
                    r = t.converter;
                  return ((r && r.toAttribute) || E.toAttribute)(e, n);
                }
              },
            },
            {
              key: "observedAttributes",
              get: function() {
                var e = this;
                this.finalize();
                var t = [];
                return (
                  this._classProperties.forEach(function(n, r) {
                    var i = e._attributeNameForProperty(r, n);
                    void 0 !== i &&
                      (e._attributeToPropertyMap.set(i, r), t.push(i));
                  }),
                  t
                );
              },
            },
          ]),
          r && x(n.prototype, r),
          i && x(n, i),
          t
        );
      })();
    z.finalized = !0;
    var I = function(e) {
        return function(t) {
          return "function" == typeof t
            ? (function(e, t) {
                return window.customElements.define(e, t), t;
              })(e, t)
            : (function(e, t) {
                return {
                  kind: t.kind,
                  elements: t.elements,
                  finisher: function(t) {
                    window.customElements.define(e, t);
                  },
                };
              })(e, t);
        };
      },
      N = function(e, t) {
        return "method" !== t.kind || !t.descriptor || "value" in t.descriptor
          ? {
              kind: "field",
              key: Symbol(),
              placement: "own",
              descriptor: {},
              initializer: function() {
                "function" == typeof t.initializer &&
                  (this[t.key] = t.initializer.call(this));
              },
              finisher: function(n) {
                n.createProperty(t.key, e);
              },
            }
          : Object.assign({}, t, {
              finisher: function(n) {
                n.createProperty(t.key, e);
              },
            });
      },
      L = function(e, t, n) {
        t.constructor.createProperty(n, e);
      };
    function M(e) {
      return function(t, n) {
        return void 0 !== n ? L(e, t, n) : N(e, t);
      };
    }
    function F(e) {
      return function(t, n) {
        var r = {
          get: function() {
            return this.renderRoot.querySelector(e);
          },
          enumerable: !0,
          configurable: !0,
        };
        return void 0 !== n ? D(r, t, n) : B(r, t);
      };
    }
    var D = function(e, t, n) {
        Object.defineProperty(t, n, e);
      },
      B = function(e, t) {
        return {
          kind: "method",
          placement: "prototype",
          key: t.key,
          descriptor: e,
        };
      },
      H = function(e) {
        return function(t, n) {
          return void 0 !== n
            ? (function(e, t, n) {
                Object.assign(t[n], e);
              })(e, t, n)
            : (function(e, t) {
                return Object.assign({}, t, {
                  finisher: function(n) {
                    Object.assign(n.prototype[t.key], e);
                  },
                });
              })(e, t);
        };
      };
    function V(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var U =
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      q = Symbol(),
      K = (function() {
        function e(t, n) {
          if (
            ((function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            n !== q)
          )
            throw new Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          this.cssText = t;
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "toString",
              value: function() {
                return this.cssText;
              },
            },
            {
              key: "styleSheet",
              get: function() {
                return (
                  void 0 === this._styleSheet &&
                    (U
                      ? ((this._styleSheet = new CSSStyleSheet()),
                        this._styleSheet.replaceSync(this.cssText))
                      : (this._styleSheet = null)),
                  this._styleSheet
                );
              },
            },
          ]) && V(t.prototype, n),
          r && V(t, r),
          e
        );
      })(),
      X = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var i = n.reduce(function(t, n, r) {
          return (
            t +
            (function(e) {
              if (e instanceof K) return e.cssText;
              if ("number" == typeof e) return e;
              throw new Error(
                "Value passed to 'css' function must be a 'css' function result: ".concat(
                  e,
                  ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
                )
              );
            })(n) +
            e[r + 1]
          );
        }, e[0]);
        return new K(i, q);
      };
    function $(e) {
      return ($ =
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
    function W(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Y(e, t) {
      return !t || ("object" !== $(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function G(e, t, n) {
      return (G =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = J(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function J(e) {
      return (J = Object.setPrototypeOf
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
    n.d(t, "a", function() {
      return ee;
    }),
      n.d(t, "b", function() {
        return z;
      }),
      n.d(t, "d", function() {
        return I;
      }),
      n.d(t, "g", function() {
        return M;
      }),
      n.d(t, "h", function() {
        return F;
      }),
      n.d(t, "e", function() {
        return H;
      }),
      n.d(t, "f", function() {
        return r.g;
      }),
      n.d(t, "i", function() {
        return r.k;
      }),
      n.d(t, "c", function() {
        return X;
      }),
      (window.litElementVersions || (window.litElementVersions = [])).push(
        "2.2.0"
      );
    var Q = function(e) {
        return e.flat
          ? e.flat(1 / 0)
          : (function e(t) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  r = 0,
                  i = t.length;
                r < i;
                r++
              ) {
                var o = t[r];
                Array.isArray(o) ? e(o, n) : n.push(o);
              }
              return n;
            })(e);
      },
      ee = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Y(this, J(t).apply(this, arguments))
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
              t && Z(e, t);
          })(t, z),
          (n = t),
          (o = [
            {
              key: "finalize",
              value: function() {
                G(J(t), "finalize", this).call(this),
                  (this._styles = this.hasOwnProperty(
                    JSCompiler_renameProperty("styles", this)
                  )
                    ? this._getUniqueStyles()
                    : this._styles || []);
              },
            },
            {
              key: "_getUniqueStyles",
              value: function() {
                var e = this.styles,
                  t = [];
                Array.isArray(e)
                  ? Q(e)
                      .reduceRight(function(e, t) {
                        return e.add(t), e;
                      }, new Set())
                      .forEach(function(e) {
                        return t.unshift(e);
                      })
                  : e && t.push(e);
                return t;
              },
            },
          ]),
          (i = [
            {
              key: "initialize",
              value: function() {
                G(J(t.prototype), "initialize", this).call(this),
                  (this.renderRoot = this.createRenderRoot()),
                  window.ShadowRoot &&
                    this.renderRoot instanceof window.ShadowRoot &&
                    this.adoptStyles();
              },
            },
            {
              key: "createRenderRoot",
              value: function() {
                return this.attachShadow({ mode: "open" });
              },
            },
            {
              key: "adoptStyles",
              value: function() {
                var e = this.constructor._styles;
                0 !== e.length &&
                  (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
                    ? U
                      ? (this.renderRoot.adoptedStyleSheets = e.map(function(
                          e
                        ) {
                          return e.styleSheet;
                        }))
                      : (this._needsShimAdoptedStyleSheets = !0)
                    : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                        e.map(function(e) {
                          return e.cssText;
                        }),
                        this.localName
                      ));
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                G(J(t.prototype), "connectedCallback", this).call(this),
                  this.hasUpdated &&
                    void 0 !== window.ShadyCSS &&
                    window.ShadyCSS.styleElement(this);
              },
            },
            {
              key: "update",
              value: function(e) {
                var n = this;
                G(J(t.prototype), "update", this).call(this, e);
                var i = this.render();
                i instanceof r.d &&
                  this.constructor.render(i, this.renderRoot, {
                    scopeName: this.localName,
                    eventContext: this,
                  }),
                  this._needsShimAdoptedStyleSheets &&
                    ((this._needsShimAdoptedStyleSheets = !1),
                    this.constructor._styles.forEach(function(e) {
                      var t = document.createElement("style");
                      (t.textContent = e.cssText), n.renderRoot.appendChild(t);
                    }));
              },
            },
            { key: "render", value: function() {} },
          ]) && W(n.prototype, i),
          o && W(n, o),
          t
        );
      })();
    (ee.finalized = !0),
      (ee.render = function(e, t, n) {
        var r = n.scopeName,
          o = u.a.has(t),
          a = b && 11 === t.nodeType && !!t.host && e instanceof f.b,
          s = a && !y.has(r),
          c = s ? document.createDocumentFragment() : t;
        if (
          (Object(u.b)(e, c, Object.assign({ templateFactory: m(r) }, n)), s)
        ) {
          var l = u.a.get(c);
          u.a.delete(c),
            l.value instanceof p.a && g(c, l.value.template, r),
            Object(i.b)(t, t.firstChild),
            t.appendChild(c),
            u.a.set(t, l);
        }
        !o && a && window.ShadyCSS.styleElement(t.host);
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return l;
    }),
      n.d(t, "a", function() {
        return p;
      });
    n(7), n(9);
    var r = n(62);
    n(24), n(21);
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
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
    function a(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    var s = Element.prototype,
      c =
        s.matches ||
        s.matchesSelector ||
        s.mozMatchesSelector ||
        s.msMatchesSelector ||
        s.oMatchesSelector ||
        s.webkitMatchesSelector,
      l = function(e, t) {
        return c.call(e, t);
      },
      u = (function() {
        function e(t) {
          i(this, e), (this.node = t);
        }
        return (
          a(e, [
            {
              key: "observeNodes",
              value: function(e) {
                return new r.a(this.node, e);
              },
            },
            {
              key: "unobserveNodes",
              value: function(e) {
                e.disconnect();
              },
            },
            { key: "notifyObserver", value: function() {} },
            {
              key: "deepContains",
              value: function(e) {
                if (this.node.contains(e)) return !0;
                for (
                  var t = e, n = e.ownerDocument;
                  t && t !== n && t !== this.node;

                )
                  t = t.parentNode || t.host;
                return t === this.node;
              },
            },
            {
              key: "getOwnerRoot",
              value: function() {
                return this.node.getRootNode();
              },
            },
            {
              key: "getDistributedNodes",
              value: function() {
                return "slot" === this.node.localName
                  ? this.node.assignedNodes({ flatten: !0 })
                  : [];
              },
            },
            {
              key: "getDestinationInsertionPoints",
              value: function() {
                for (var e = [], t = this.node.assignedSlot; t; )
                  e.push(t), (t = t.assignedSlot);
                return e;
              },
            },
            {
              key: "importNode",
              value: function(e, t) {
                return (this.node instanceof Document
                  ? this.node
                  : this.node.ownerDocument
                ).importNode(e, t);
              },
            },
            {
              key: "getEffectiveChildNodes",
              value: function() {
                return r.a.getFlattenedNodes(this.node);
              },
            },
            {
              key: "queryDistributedElements",
              value: function(e) {
                for (
                  var t,
                    n = this.getEffectiveChildNodes(),
                    r = [],
                    i = 0,
                    o = n.length;
                  i < o && (t = n[i]);
                  i++
                )
                  t.nodeType === Node.ELEMENT_NODE && l(t, e) && r.push(t);
                return r;
              },
            },
            {
              key: "activeElement",
              get: function() {
                var e = this.node;
                return void 0 !== e._activeElement
                  ? e._activeElement
                  : e.activeElement;
              },
            },
          ]),
          e
        );
      })();
    var d = (function() {
      function e(t) {
        i(this, e), (this.event = t);
      }
      return (
        a(e, [
          {
            key: "rootTarget",
            get: function() {
              return this.event.composedPath()[0];
            },
          },
          {
            key: "localTarget",
            get: function() {
              return this.event.target;
            },
          },
          {
            key: "path",
            get: function() {
              return this.event.composedPath();
            },
          },
        ]),
        e
      );
    })();
    u.prototype.cloneNode,
      u.prototype.appendChild,
      u.prototype.insertBefore,
      u.prototype.removeChild,
      u.prototype.replaceChild,
      u.prototype.setAttribute,
      u.prototype.removeAttribute,
      u.prototype.querySelector,
      u.prototype.querySelectorAll,
      u.prototype.parentNode,
      u.prototype.firstChild,
      u.prototype.lastChild,
      u.prototype.nextSibling,
      u.prototype.previousSibling,
      u.prototype.firstElementChild,
      u.prototype.lastElementChild,
      u.prototype.nextElementSibling,
      u.prototype.previousElementSibling,
      u.prototype.childNodes,
      u.prototype.children,
      u.prototype.classList,
      u.prototype.textContent,
      u.prototype.innerHTML,
      (function(e, t) {
        for (
          var n = function(n) {
              var r = t[n];
              e[r] = function() {
                return this.node[r].apply(this.node, arguments);
              };
            },
            r = 0;
          r < t.length;
          r++
        )
          n(r);
      })(u.prototype, [
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
        for (
          var n = function(n) {
              var r = t[n];
              Object.defineProperty(e, r, {
                get: function() {
                  return this.node[r];
                },
                configurable: !0,
              });
            },
            r = 0;
          r < t.length;
          r++
        )
          n(r);
      })(u.prototype, [
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
        for (
          var n = function(n) {
              var r = t[n];
              Object.defineProperty(e, r, {
                get: function() {
                  return this.node[r];
                },
                set: function(e) {
                  this.node[r] = e;
                },
                configurable: !0,
              });
            },
            r = 0;
          r < t.length;
          r++
        )
          n(r);
      })(u.prototype, ["textContent", "innerHTML"]);
    var p = function(e) {
      var t;
      (e = e || document).__domApi ||
        ((t = e instanceof Event ? new d(e) : new u(e)), (e.__domApi = t));
      return e.__domApi;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "g", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "i", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return d;
      }),
      n.d(t, "h", function() {
        return p;
      });
    n(7);
    function r(e) {
      return e.indexOf(".") >= 0;
    }
    function i(e) {
      var t = e.indexOf(".");
      return -1 === t ? e : e.slice(0, t);
    }
    function o(e, t) {
      return 0 === e.indexOf(t + ".");
    }
    function a(e, t) {
      return 0 === t.indexOf(e + ".");
    }
    function s(e, t, n) {
      return t + n.slice(e.length);
    }
    function c(e, t) {
      return e === t || o(e, t) || a(e, t);
    }
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = [], n = 0; n < e.length; n++)
          for (var r = e[n].toString().split("."), i = 0; i < r.length; i++)
            t.push(r[i]);
        return t.join(".");
      }
      return e;
    }
    function u(e) {
      return Array.isArray(e) ? l(e).split(".") : e.toString().split(".");
    }
    function d(e, t, n) {
      for (var r = e, i = u(t), o = 0; o < i.length; o++) {
        if (!r) return;
        r = r[i[o]];
      }
      return n && (n.path = i.join(".")), r;
    }
    function p(e, t, n) {
      var r = e,
        i = u(t),
        o = i[i.length - 1];
      if (i.length > 1) {
        for (var a = 0; a < i.length - 1; a++) {
          if (!(r = r[i[a]])) return;
        }
        r[o] = n;
      } else r[t] = n;
      return i.join(".");
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(7);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var i = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.value = t.toString());
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "toString",
            value: function() {
              return this.value;
            },
          },
        ]) && r(t.prototype, n),
        i && r(t, i),
        e
      );
    })();
    function o(e) {
      if (e instanceof i) return e.value;
      throw new Error(
        "non-literal value passed to Polymer's htmlLiteral function: ".concat(e)
      );
    }
    var a = function(e) {
      for (
        var t = document.createElement("template"),
          n = arguments.length,
          r = new Array(n > 1 ? n - 1 : 0),
          a = 1;
        a < n;
        a++
      )
        r[a - 1] = arguments[a];
      return (
        (t.innerHTML = r.reduce(function(t, n, r) {
          return (
            t +
            (function(e) {
              if (e instanceof HTMLTemplateElement) return e.innerHTML;
              if (e instanceof i) return o(e);
              throw new Error(
                "non-template value passed to Polymer's html function: ".concat(
                  e
                )
              );
            })(n) +
            e[r + 1]
          );
        }, e[0])),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(43),
      i = n(5),
      o = (n(97), n(7), n(37)),
      a = n(26),
      s = n(45),
      c = n(9);
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
    function u(e, t) {
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
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
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
    function f(e, t, n) {
      return t && p(e.prototype, t), n && p(e, n), e;
    }
    function h(e, t) {
      return (h =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var b = Object(s.a)(Object(a.b)(Object(o.a)(HTMLElement))),
      m = (function(e) {
        function t() {
          var e;
          if (
            ((function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (e = u(this, d(t).call(this))),
            c.f)
          )
            throw new Error("strictTemplatePolicy: dom-bind not allowed");
          return (e.root = null), (e.$ = null), (e.__children = null), e;
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
              t && h(e, t);
          })(t, b),
          f(t, null, [
            {
              key: "observedAttributes",
              get: function() {
                return ["mutable-data"];
              },
            },
          ]),
          f(t, [
            {
              key: "attributeChangedCallback",
              value: function() {
                this.mutableData = !0;
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                (this.style.display = "none"), this.render();
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                this.__removeChildren();
              },
            },
            {
              key: "__insertChildren",
              value: function() {
                this.parentNode.insertBefore(this.root, this);
              },
            },
            {
              key: "__removeChildren",
              value: function() {
                if (this.__children)
                  for (var e = 0; e < this.__children.length; e++)
                    this.root.appendChild(this.__children[e]);
              },
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this;
                if (!this.__children) {
                  if (!(e = e || this.querySelector("template"))) {
                    var n = new MutationObserver(function() {
                      if (!(e = t.querySelector("template")))
                        throw new Error("dom-bind requires a <template> child");
                      n.disconnect(), t.render();
                    });
                    return void n.observe(this, { childList: !0 });
                  }
                  (this.root = this._stampTemplate(e)),
                    (this.$ = this.root.$),
                    (this.__children = []);
                  for (var r = this.root.firstChild; r; r = r.nextSibling)
                    this.__children[this.__children.length] = r;
                  this._enableProperties();
                }
                this.__insertChildren(),
                  this.dispatchEvent(
                    new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
                  );
              },
            },
          ]),
          t
        );
      })();
    customElements.define("dom-bind", m);
    n(86), n(88);
    var v = n(25),
      y = n(8),
      g = n(49),
      _ = n(36);
    function k(e) {
      return (k =
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
    function w(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function x(e, t) {
      return !t || ("object" !== k(t) && "function" != typeof t)
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
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function S(e, t, n) {
      return t && j(e.prototype, t), n && j(e, n), e;
    }
    function C(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && P(e, t);
    }
    function P(e, t) {
      return (P =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var E = Object(y.a)(function(e) {
        var t = Object(_.a)(e);
        return (function(e) {
          function n() {
            var e;
            return (
              w(this, n),
              ((e = x(this, O(n).call(this))).__lastItems = null),
              (e.__lastMulti = null),
              (e.__selectedMap = null),
              e
            );
          }
          return (
            C(n, t),
            S(n, null, [
              {
                key: "properties",
                get: function() {
                  return {
                    items: { type: Array },
                    multi: { type: Boolean, value: !1 },
                    selected: { type: Object, notify: !0 },
                    selectedItem: { type: Object, notify: !0 },
                    toggle: { type: Boolean, value: !1 },
                  };
                },
              },
              {
                key: "observers",
                get: function() {
                  return ["__updateSelection(multi, items.*)"];
                },
              },
            ]),
            S(n, [
              {
                key: "__updateSelection",
                value: function(e, t) {
                  var n = t.path;
                  if ("items" == n) {
                    var r = t.base || [],
                      i = this.__lastItems;
                    if ((e !== this.__lastMulti && this.clearSelection(), i)) {
                      var o = Object(g.a)(r, i);
                      this.__applySplices(o);
                    }
                    (this.__lastItems = r), (this.__lastMulti = e);
                  } else if ("items.splices" == t.path)
                    this.__applySplices(t.value.indexSplices);
                  else {
                    var a = n.slice("items.".length),
                      s = parseInt(a, 10);
                    a.indexOf(".") < 0 &&
                      a == s &&
                      this.__deselectChangedIdx(s);
                  }
                },
              },
              {
                key: "__applySplices",
                value: function(e) {
                  for (
                    var t = this,
                      n = this.__selectedMap,
                      r = function(r) {
                        var i = e[r];
                        n.forEach(function(e, t) {
                          e < i.index ||
                            (e >= i.index + i.removed.length
                              ? n.set(t, e + i.addedCount - i.removed.length)
                              : n.set(t, -1));
                        });
                        for (var o = 0; o < i.addedCount; o++) {
                          var a = i.index + o;
                          n.has(t.items[a]) && n.set(t.items[a], a);
                        }
                      },
                      i = 0;
                    i < e.length;
                    i++
                  )
                    r(i);
                  this.__updateLinks();
                  var o = 0;
                  n.forEach(function(e, r) {
                    e < 0
                      ? (t.multi
                          ? t.splice("selected", o, 1)
                          : (t.selected = t.selectedItem = null),
                        n.delete(r))
                      : o++;
                  });
                },
              },
              {
                key: "__updateLinks",
                value: function() {
                  var e = this;
                  if (((this.__dataLinkedPaths = {}), this.multi)) {
                    var t = 0;
                    this.__selectedMap.forEach(function(n) {
                      n >= 0 && e.linkPaths("items." + n, "selected." + t++);
                    });
                  } else
                    this.__selectedMap.forEach(function(t) {
                      e.linkPaths("selected", "items." + t),
                        e.linkPaths("selectedItem", "items." + t);
                    });
                },
              },
              {
                key: "clearSelection",
                value: function() {
                  (this.__dataLinkedPaths = {}),
                    (this.__selectedMap = new Map()),
                    (this.selected = this.multi ? [] : null),
                    (this.selectedItem = null);
                },
              },
              {
                key: "isSelected",
                value: function(e) {
                  return this.__selectedMap.has(e);
                },
              },
              {
                key: "isIndexSelected",
                value: function(e) {
                  return this.isSelected(this.items[e]);
                },
              },
              {
                key: "__deselectChangedIdx",
                value: function(e) {
                  var t = this,
                    n = this.__selectedIndexForItemIndex(e);
                  if (n >= 0) {
                    var r = 0;
                    this.__selectedMap.forEach(function(e, i) {
                      n == r++ && t.deselect(i);
                    });
                  }
                },
              },
              {
                key: "__selectedIndexForItemIndex",
                value: function(e) {
                  var t = this.__dataLinkedPaths["items." + e];
                  if (t) return parseInt(t.slice("selected.".length), 10);
                },
              },
              {
                key: "deselect",
                value: function(e) {
                  var t,
                    n = this.__selectedMap.get(e);
                  n >= 0 &&
                    (this.__selectedMap.delete(e),
                    this.multi && (t = this.__selectedIndexForItemIndex(n)),
                    this.__updateLinks(),
                    this.multi
                      ? this.splice("selected", t, 1)
                      : (this.selected = this.selectedItem = null));
                },
              },
              {
                key: "deselectIndex",
                value: function(e) {
                  this.deselect(this.items[e]);
                },
              },
              {
                key: "select",
                value: function(e) {
                  this.selectIndex(this.items.indexOf(e));
                },
              },
              {
                key: "selectIndex",
                value: function(e) {
                  var t = this.items[e];
                  this.isSelected(t)
                    ? this.toggle && this.deselectIndex(e)
                    : (this.multi || this.__selectedMap.clear(),
                      this.__selectedMap.set(t, e),
                      this.__updateLinks(),
                      this.multi
                        ? this.push("selected", t)
                        : (this.selected = this.selectedItem = t));
                },
              },
            ]),
            n
          );
        })();
      })(v.a),
      A = (function(e) {
        function t() {
          return w(this, t), x(this, O(t).apply(this, arguments));
        }
        return (
          C(t, E),
          S(t, null, [
            {
              key: "is",
              get: function() {
                return "array-selector";
              },
            },
          ]),
          t
        );
      })();
    customElements.define(A.is, A);
    n(72), n(98);
    var T = n(3);
    n.d(t, "a", function() {
      return R;
    }),
      n.d(t, "b", function() {
        return i.a;
      }),
      n.d(t, "c", function() {
        return T.a;
      });
    var R = Object(r.a)(HTMLElement).prototype;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(70),
      i = (n(7),
      function e(t) {
        var n;
        return (
          (n = "function" == typeof t ? t : e.Class(t)),
          customElements.define(n.is, n),
          n
        );
      });
    i.Class = r.a;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return r;
    }),
      n.d(t, "g", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return l;
      }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "e", function() {
        return d;
      });
    var r = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
      i = "\x3c!--".concat(r, "--\x3e"),
      o = new RegExp("".concat(r, "|").concat(i)),
      a = "$lit$",
      s = function e(t, n) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.parts = []),
          (this.element = n);
        for (
          var i = [],
            s = [],
            l = document.createTreeWalker(n.content, 133, null, !1),
            p = 0,
            f = -1,
            h = 0,
            b = t.strings,
            m = t.values.length;
          h < m;

        ) {
          var v = l.nextNode();
          if (null !== v) {
            if ((f++, 1 === v.nodeType)) {
              if (v.hasAttributes()) {
                for (
                  var y = v.attributes, g = y.length, _ = 0, k = 0;
                  k < g;
                  k++
                )
                  c(y[k].name, a) && _++;
                for (; _-- > 0; ) {
                  var w = b[h],
                    x = d.exec(w)[2],
                    O = x.toLowerCase() + a,
                    j = v.getAttribute(O);
                  v.removeAttribute(O);
                  var S = j.split(o);
                  this.parts.push({
                    type: "attribute",
                    index: f,
                    name: x,
                    strings: S,
                  }),
                    (h += S.length - 1);
                }
              }
              "TEMPLATE" === v.tagName &&
                (s.push(v), (l.currentNode = v.content));
            } else if (3 === v.nodeType) {
              var C = v.data;
              if (C.indexOf(r) >= 0) {
                for (
                  var P = v.parentNode, E = C.split(o), A = E.length - 1, T = 0;
                  T < A;
                  T++
                ) {
                  var R = void 0,
                    z = E[T];
                  if ("" === z) R = u();
                  else {
                    var I = d.exec(z);
                    null !== I &&
                      c(I[2], a) &&
                      (z =
                        z.slice(0, I.index) +
                        I[1] +
                        I[2].slice(0, -a.length) +
                        I[3]),
                      (R = document.createTextNode(z));
                  }
                  P.insertBefore(R, v),
                    this.parts.push({ type: "node", index: ++f });
                }
                "" === E[A]
                  ? (P.insertBefore(u(), v), i.push(v))
                  : (v.data = E[A]),
                  (h += A);
              }
            } else if (8 === v.nodeType)
              if (v.data === r) {
                var N = v.parentNode;
                (null !== v.previousSibling && f !== p) ||
                  (f++, N.insertBefore(u(), v)),
                  (p = f),
                  this.parts.push({ type: "node", index: f }),
                  null === v.nextSibling ? (v.data = "") : (i.push(v), f--),
                  h++;
              } else
                for (var L = -1; -1 !== (L = v.data.indexOf(r, L + 1)); )
                  this.parts.push({ type: "node", index: -1 }), h++;
          } else l.currentNode = s.pop();
        }
        for (var M = i, F = 0; F < M.length; F++) {
          var D = M[F];
          D.parentNode.removeChild(D);
        }
      },
      c = function(e, t) {
        var n = e.length - t.length;
        return n >= 0 && e.slice(n) === t;
      },
      l = function(e) {
        return -1 !== e.index;
      },
      u = function() {
        return document.createComment("");
      },
      d = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
      return o;
    });
    n(7);
    var r = 0;
    function i() {}
    i.prototype.__mixinApplications, i.prototype.__mixinSet;
    var o = function(e) {
      var t = e.__mixinApplications;
      t || ((t = new WeakMap()), (e.__mixinApplications = t));
      var n = r++;
      function i(r) {
        var i = r.__mixinSet;
        if (i && i[n]) return r;
        var o = t,
          a = o.get(r);
        a || ((a = e(r)), o.set(r, a));
        var s = Object.create(a.__mixinSet || i || null);
        return (s[n] = !0), (a.__mixinSet = s), a;
      }
      return i;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return i;
    }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "a", function() {
        return u;
      });
    n(7);
    var r = n(18),
      i = !window.ShadyDOM,
      o = (Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss),
      window.customElements.polyfillWrapFlushCallback,
      Object(r.a)(document.baseURI || window.location.href)),
      a = (window.Polymer && window.Polymer.sanitizeDOMValue) || void 0,
      s = !1,
      c = function(e) {
        s = e;
      },
      l = !1,
      u = !1;
  },
  function(e, t, n) {
    "use strict";
    var r = n(14);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = new ((function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "handleAttributeExpressions",
              value: function(e, t, n, i) {
                var o = t[0];
                return "." === o
                  ? new r.f(e, t.slice(1), n).parts
                  : "@" === o
                  ? [new r.d(e, t.slice(1), i.eventContext)]
                  : "?" === o
                  ? [new r.c(e, t.slice(1), n)]
                  : new r.a(e, t, n).parts;
              },
            },
            {
              key: "handleTextExpression",
              value: function(e) {
                return new r.e(e);
              },
            },
          ]) && i(t.prototype, n),
          o && i(t, o),
          e
        );
      })())(),
      a = n(23),
      s = n(29),
      c = n(17),
      l = n(16),
      u = (n(30), n(27)),
      d = (n(38), n(6));
    n.d(t, "g", function() {
      return p;
    }),
      n.d(t, "k", function() {
        return f;
      }),
      n.d(t, "f", function() {
        return s.a;
      }),
      n.d(t, "i", function() {
        return c.b;
      }),
      n.d(t, "j", function() {
        return c.c;
      }),
      n.d(t, "h", function() {
        return l.a;
      }),
      n.d(t, "a", function() {
        return r.b;
      }),
      n.d(t, "b", function() {
        return r.e;
      }),
      n.d(t, "c", function() {
        return r.g;
      }),
      n.d(t, "l", function() {
        return u.b;
      }),
      n.d(t, "d", function() {
        return a.b;
      }),
      n.d(t, "e", function() {
        return d.c;
      }),
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
    var p = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return new a.b(e, n, "html", o);
      },
      f = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return new a.a(e, n, "svg", o);
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return l;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return d;
      });
    n(7);
    var r = 0,
      i = 0,
      o = [],
      a = 0,
      s = document.createTextNode("");
    new window.MutationObserver(function() {
      for (var e = o.length, t = 0; t < e; t++) {
        var n = o[t];
        if (n)
          try {
            n();
          } catch (r) {
            setTimeout(function() {
              throw r;
            });
          }
      }
      o.splice(0, e), (i += e);
    }).observe(s, { characterData: !0 });
    var c = {
        after: function(e) {
          return {
            run: function(t) {
              return window.setTimeout(t, e);
            },
            cancel: function(e) {
              window.clearTimeout(e);
            },
          };
        },
        run: function(e, t) {
          return window.setTimeout(e, t);
        },
        cancel: function(e) {
          window.clearTimeout(e);
        },
      },
      l = {
        run: function(e) {
          return window.requestAnimationFrame(e);
        },
        cancel: function(e) {
          window.cancelAnimationFrame(e);
        },
      },
      u = {
        run: function(e) {
          return window.requestIdleCallback
            ? window.requestIdleCallback(e)
            : window.setTimeout(e, 16);
        },
        cancel: function(e) {
          window.cancelIdleCallback
            ? window.cancelIdleCallback(e)
            : window.clearTimeout(e);
        },
      },
      d = {
        run: function(e) {
          return (s.textContent = a++), o.push(e), r++;
        },
        cancel: function(e) {
          var t = e - i;
          if (t >= 0) {
            if (!o[t]) throw new Error("invalid async handle: " + e);
            o[t] = null;
          }
        },
      };
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
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
        return c;
      }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "h", function() {
        return b;
      }),
      n.d(t, "d", function() {
        return m;
      }),
      n.d(t, "j", function() {
        return w;
      }),
      n.d(t, "l", function() {
        return C;
      }),
      n.d(t, "k", function() {
        return A;
      }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "i", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return y;
      });
    var i = 2,
      o = 4;
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
        var r = this.commands;
        (this.commandId = 1),
          (this.commands = new Map()),
          r.forEach(function(e) {
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
          var r = n.indexOf(t);
          -1 !== r && n.splice(r, 1);
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
        return new Promise(function(n, r) {
          var i = t._genCmdId();
          t.commands.set(i, { resolve: n, reject: r }), t.sendMessage(e, i);
        });
      }),
      (s.prototype.subscribeMessage = function(e, t) {
        try {
          var n,
            r = this,
            i = r._genCmdId();
          return Promise.resolve(
            new Promise(function(o, s) {
              (n = {
                resolve: o,
                reject: s,
                callback: e,
                subscribe: function() {
                  return r.subscribeMessage(e, t);
                },
                unsubscribe: function() {
                  try {
                    return Promise.resolve(r.sendMessagePromise(a(i))).then(
                      function() {
                        r.commands.delete(i);
                      }
                    );
                  } catch (e) {
                    return Promise.reject(e);
                  }
                },
              }),
                r.commands.set(i, n);
              try {
                r.sendMessage(t, i);
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
          var n = Object.assign({}, this.options, { setupRetry: 0 });
          !(function e(i) {
            var o = t;
            setTimeout(function() {
              try {
                var t = r(
                  function() {
                    return Promise.resolve(n.createSocket(n)).then(function(e) {
                      o.setSocket(e);
                    });
                  },
                  function(t) {
                    2 === t ? o.fireEvent("reconnect-error", t) : e(i + 1);
                  }
                );
                return Promise.resolve(
                  t && t.then ? t.then(function() {}) : void 0
                );
              } catch (r) {
                return Promise.reject(r);
              }
            }, 1e3 * Math.min(i, 5));
          })(0);
        }
      }),
      (s.prototype._genCmdId = function() {
        return ++this.commandId;
      });
    var c = function(e) {
        void 0 === e && (e = {});
        try {
          var t,
            n = function() {
              function n() {
                function n() {
                  if (t) return new f(t, e.saveTokens);
                  if (void 0 === i) throw o;
                  return (
                    (function(e, t, n, r) {
                      (n += (n.includes("?") ? "&" : "?") + "auth_callback=1"),
                        (document.location.href = (function(e, t, n, r) {
                          var i =
                            e +
                            "/auth/authorize?response_type=code&client_id=" +
                            encodeURIComponent(t) +
                            "&redirect_uri=" +
                            encodeURIComponent(n);
                          return (
                            r && (i += "&state=" + encodeURIComponent(r)), i
                          );
                        })(e, t, n, r));
                    })(
                      i,
                      a,
                      e.redirectUrl ||
                        location.protocol +
                          "//" +
                          location.host +
                          location.pathname +
                          location.search,
                      btoa(JSON.stringify({ hassUrl: i, clientId: a }))
                    ),
                    new Promise(function() {})
                  );
                }
                var r = (function() {
                  if (!t && e.loadTokens)
                    return Promise.resolve(e.loadTokens()).then(function(e) {
                      t = e;
                    });
                })();
                return r && r.then ? r.then(n) : n();
              }
              var s = (function() {
                if (!t) {
                  var n = (function(e) {
                      for (
                        var t = {},
                          n = location.search.substr(1).split("&"),
                          r = 0;
                        r < n.length;
                        r++
                      ) {
                        var i = n[r].split("="),
                          o = decodeURIComponent(i[0]),
                          a = i.length > 1 ? decodeURIComponent(i[1]) : void 0;
                        t[o] = a;
                      }
                      return t;
                    })(),
                    i = (function() {
                      if ("auth_callback" in n) {
                        var i = JSON.parse(atob(n.state)),
                          o = r(
                            function() {
                              return Promise.resolve(
                                p(i.hassUrl, i.clientId, n.code)
                              ).then(function(n) {
                                (t = n), e.saveTokens && e.saveTokens(t);
                              });
                            },
                            function(e) {
                              console.log("Unable to fetch access token", e);
                            }
                          );
                        if (o && o.then) return o.then(function() {});
                      }
                    })();
                  if (i && i.then) return i.then(function() {});
                }
              })();
              return s && s.then ? s.then(n) : n();
            },
            i = e.hassUrl;
          i && "/" === i[i.length - 1] && (i = i.substr(0, i.length - 1));
          var a = e.clientId || u(),
            s = (function() {
              if (!t && e.authCode && i && a) {
                var n = r(
                  function() {
                    return Promise.resolve(p(i, a, e.authCode)).then(function(
                      n
                    ) {
                      (t = n), e.saveTokens && e.saveTokens(t);
                    });
                  },
                  function(e) {
                    console.log("Unable to fetch access token", e);
                  }
                );
                if (n && n.then) return n.then(function() {});
              }
            })();
          return Promise.resolve(s && s.then ? s.then(n) : n());
        } catch (r) {
          return Promise.reject(r);
        }
      },
      l = function(e, t, n) {
        try {
          var r = new FormData();
          return (
            r.append("client_id", t),
            Object.keys(n).forEach(function(e) {
              r.append(e, n[e]);
            }),
            Promise.resolve(
              fetch(e + "/auth/token", {
                method: "POST",
                credentials: "same-origin",
                body: r,
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
                  (n.expires = d(n.expires_in)),
                  n
                );
              });
            })
          );
        } catch (e) {
          return Promise.reject(e);
        }
      },
      u = function() {
        return location.protocol + "//" + location.host + "/";
      },
      d = function(e) {
        return 1e3 * e + Date.now();
      };
    function p(e, t, n) {
      return l(e, t, { code: n, grant_type: "authorization_code" });
    }
    var f = function(e, t) {
        (this.data = e), (this._saveTokens = t);
      },
      h = {
        wsUrl: { configurable: !0 },
        accessToken: { configurable: !0 },
        expired: { configurable: !0 },
      };
    (h.wsUrl.get = function() {
      return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
    }),
      (h.accessToken.get = function() {
        return this.data.access_token;
      }),
      (h.expired.get = function() {
        return Date.now() > this.data.expires;
      }),
      (f.prototype.refreshAccessToken = function() {
        try {
          var e = this;
          return Promise.resolve(
            l(e.data.hassUrl, e.data.clientId, {
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
      (f.prototype.revoke = function() {
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
      Object.defineProperties(f.prototype, h);
    var b = function(e, t, n, r) {
        if (e[t]) return e[t];
        var i,
          o = 0,
          a = (function(e) {
            var t = [];
            function n(n, r) {
              e = r ? n : Object.assign({}, e, n);
              for (var i = t, o = 0; o < i.length; o++) i[o](e);
            }
            return {
              get state() {
                return e;
              },
              action: function(t) {
                function r(e) {
                  n(e, !1);
                }
                return function() {
                  for (
                    var n = arguments, i = [e], o = 0;
                    o < arguments.length;
                    o++
                  )
                    i.push(n[o]);
                  var a = t.apply(this, i);
                  if (null != a) return a.then ? a.then(r) : r(a);
                };
              },
              setState: n,
              subscribe: function(e) {
                return (
                  t.push(e),
                  function() {
                    !(function(e) {
                      for (var n = [], r = 0; r < t.length; r++)
                        t[r] === e ? (e = null) : n.push(t[r]);
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
          c = function() {
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
              1 == ++o &&
                (r && (i = r(e, a)), e.addEventListener("ready", c), c());
              var n = a.subscribe(t);
              return (
                void 0 !== a.state &&
                  setTimeout(function() {
                    return t(a.state);
                  }, 0),
                function() {
                  n(),
                    --o ||
                      (i &&
                        i.then(function(e) {
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
      m = function(e, t, n, r, i) {
        return b(r, e, t, n).subscribe(i);
      },
      v = function(e) {
        return e.sendMessagePromise({ type: "auth/current_user" });
      },
      y = function(e, t, n, r) {
        return e.sendMessagePromise(
          (function(e, t, n) {
            var r = { type: "call_service", domain: e, service: t };
            return n && (r.service_data = n), r;
          })(t, n, r)
        );
      };
    function g(e, t) {
      return void 0 === e
        ? null
        : { components: e.components.concat(t.data.component) };
    }
    var _ = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_config" });
        })(e);
      },
      k = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(g), "component_loaded"),
          e.subscribeEvents(function() {
            return _(e).then(function(e) {
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
      w = function(e, t) {
        return (function(e) {
          return b(e, "_cnf", _, k);
        })(e).subscribe(t);
      };
    function x(e, t) {
      var n, r;
      if (void 0 === e) return null;
      var i = t.data,
        o = i.domain,
        a = Object.assign(
          {},
          e[o],
          (((n = {})[i.service] = { description: "", fields: {} }), n)
        );
      return ((r = {})[o] = a), r;
    }
    function O(e, t) {
      var n;
      if (void 0 === e) return null;
      var r = t.data,
        i = r.domain,
        o = r.service,
        a = e[i];
      if (!(a && o in a)) return null;
      var s = {};
      return (
        Object.keys(a).forEach(function(e) {
          e !== o && (s[e] = a[e]);
        }),
        ((n = {})[i] = s),
        n
      );
    }
    var j = function(e) {
        return (function(e) {
          return e.sendMessagePromise({ type: "get_services" });
        })(e);
      },
      S = function(e, t) {
        return Promise.all([
          e.subscribeEvents(t.action(x), "service_registered"),
          e.subscribeEvents(t.action(O), "service_removed"),
        ]).then(function(e) {
          return function() {
            return e.forEach(function(e) {
              return e();
            });
          };
        });
      },
      C = function(e, t) {
        return (function(e) {
          return b(e, "_srv", j, S);
        })(e).subscribe(t);
      },
      P = function(e) {
        try {
          return Promise.resolve(
            (function(e) {
              return e.sendMessagePromise({ type: "get_states" });
            })(e)
          ).then(function(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var r = e[n];
              t[r.entity_id] = r;
            }
            return t;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      E = function(e, t) {
        return e.subscribeEvents(function(e) {
          return (function(t, n) {
            var r,
              i = t.state;
            if (void 0 !== i) {
              var o = e.data,
                a = o.entity_id,
                s = o.new_state;
              if (s) t.setState((((r = {})[s.entity_id] = s), r));
              else {
                var c = Object.assign({}, i);
                delete c[a], t.setState(c, !0);
              }
            }
          })(t);
        }, "state_changed");
      },
      A = function(e, t) {
        return (function(e) {
          return b(e, "_ent", P, E);
        })(e).subscribe(t);
      },
      T = function(e) {
        try {
          var t = Object.assign({}, R, e);
          return Promise.resolve(t.createSocket(t)).then(function(e) {
            return new s(e, t);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      R = {
        setupRetry: 0,
        createSocket: function(e) {
          if (!e.auth) throw o;
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
            i = t.wsUrl;
          return new Promise(function(o, a) {
            return (function e(o, a, s) {
              var c = new WebSocket(i),
                l = !1,
                u = function t() {
                  if ((c.removeEventListener("close", t), l)) s(2);
                  else if (0 !== o) {
                    var n = -1 === o ? -1 : o - 1;
                    setTimeout(function() {
                      return e(n, a, s);
                    }, 1e3);
                  } else s(1);
                },
                d = function(e) {
                  try {
                    var i = r(
                      function() {
                        function e() {
                          c.send(
                            JSON.stringify({
                              type: "auth",
                              access_token: t.accessToken,
                            })
                          );
                        }
                        var r = (function() {
                          if (t.expired)
                            return Promise.resolve(
                              n || t.refreshAccessToken()
                            ).then(function() {});
                        })();
                        return r && r.then ? r.then(e) : e();
                      },
                      function(e) {
                        (l = 2 === e), c.close();
                      }
                    );
                    return Promise.resolve(
                      i && i.then ? i.then(function() {}) : void 0
                    );
                  } catch (r) {
                    return Promise.reject(r);
                  }
                };
              c.addEventListener("open", d),
                c.addEventListener("message", function e(t) {
                  try {
                    switch (JSON.parse(t.data).type) {
                      case "auth_invalid":
                        (l = !0), c.close();
                        break;
                      case "auth_ok":
                        c.removeEventListener("open", d),
                          c.removeEventListener("message", e),
                          c.removeEventListener("close", u),
                          c.removeEventListener("error", u),
                          a(c);
                    }
                    return;
                  } catch (t) {
                    return Promise.reject(t);
                  }
                }),
                c.addEventListener("close", u),
                c.addEventListener("error", u);
            })(e.setupRetry, o, a);
          });
        },
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return c;
      });
    var r,
      i,
      o = !(window.ShadyDOM && window.ShadyDOM.inUse);
    function a(e) {
      r =
        (!e || !e.shimcssproperties) &&
        (o ||
          Boolean(
            !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
              window.CSS &&
              CSS.supports &&
              CSS.supports("box-shadow", "0 0 0 var(--foo)")
          ));
    }
    window.ShadyCSS &&
      void 0 !== window.ShadyCSS.cssBuild &&
      (i = window.ShadyCSS.cssBuild);
    var s = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
      ? (r = window.ShadyCSS.nativeCss)
      : window.ShadyCSS
      ? (a(window.ShadyCSS), (window.ShadyCSS = void 0))
      : a(window.WebComponents && window.WebComponents.flags);
    var c = r;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "h", function() {
      return y;
    }),
      n.d(t, "a", function() {
        return _;
      }),
      n.d(t, "b", function() {
        return k;
      }),
      n.d(t, "e", function() {
        return w;
      }),
      n.d(t, "c", function() {
        return x;
      }),
      n.d(t, "f", function() {
        return O;
      }),
      n.d(t, "g", function() {
        return j;
      }),
      n.d(t, "d", function() {
        return P;
      });
    var r = n(29),
      i = n(17),
      o = n(16),
      a = n(38),
      s = n(23),
      c = n(6);
    function l(e, t) {
      return !t || ("object" !== v(t) && "function" != typeof t)
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
                  null !== (e = d(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function p(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && f(e, t);
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function m(e, t, n) {
      return t && b(e.prototype, t), n && b(e, n), e;
    }
    function v(e) {
      return (v =
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
    var y = function(e) {
        return null === e || !("object" === v(e) || "function" == typeof e);
      },
      g = function(e) {
        return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
      },
      _ = (function() {
        function e(t, n, r) {
          h(this, e),
            (this.dirty = !0),
            (this.element = t),
            (this.name = n),
            (this.strings = r),
            (this.parts = []);
          for (var i = 0; i < r.length - 1; i++)
            this.parts[i] = this._createPart();
        }
        return (
          m(e, [
            {
              key: "_createPart",
              value: function() {
                return new k(this);
              },
            },
            {
              key: "_getValue",
              value: function() {
                for (
                  var e = this.strings, t = e.length - 1, n = "", r = 0;
                  r < t;
                  r++
                ) {
                  n += e[r];
                  var i = this.parts[r];
                  if (void 0 !== i) {
                    var o = i.value;
                    if (y(o) || !g(o))
                      n += "string" == typeof o ? o : String(o);
                    else {
                      var a = !0,
                        s = !1,
                        c = void 0;
                      try {
                        for (
                          var l, u = o[Symbol.iterator]();
                          !(a = (l = u.next()).done);
                          a = !0
                        ) {
                          var d = l.value;
                          n += "string" == typeof d ? d : String(d);
                        }
                      } catch (p) {
                        (s = !0), (c = p);
                      } finally {
                        try {
                          a || null == u.return || u.return();
                        } finally {
                          if (s) throw c;
                        }
                      }
                    }
                  }
                }
                return (n += e[t]);
              },
            },
            {
              key: "commit",
              value: function() {
                this.dirty &&
                  ((this.dirty = !1),
                  this.element.setAttribute(this.name, this._getValue()));
              },
            },
          ]),
          e
        );
      })(),
      k = (function() {
        function e(t) {
          h(this, e), (this.value = void 0), (this.committer = t);
        }
        return (
          m(e, [
            {
              key: "setValue",
              value: function(e) {
                e === o.a ||
                  (y(e) && e === this.value) ||
                  ((this.value = e),
                  Object(r.b)(e) || (this.committer.dirty = !0));
              },
            },
            {
              key: "commit",
              value: function() {
                for (; Object(r.b)(this.value); ) {
                  var e = this.value;
                  (this.value = o.a), e(this);
                }
                this.value !== o.a && this.committer.commit();
              },
            },
          ]),
          e
        );
      })(),
      w = (function() {
        function e(t) {
          h(this, e),
            (this.value = void 0),
            (this.__pendingValue = void 0),
            (this.options = t);
        }
        return (
          m(e, [
            {
              key: "appendInto",
              value: function(e) {
                (this.startNode = e.appendChild(Object(c.c)())),
                  (this.endNode = e.appendChild(Object(c.c)()));
              },
            },
            {
              key: "insertAfterNode",
              value: function(e) {
                (this.startNode = e), (this.endNode = e.nextSibling);
              },
            },
            {
              key: "appendIntoPart",
              value: function(e) {
                e.__insert((this.startNode = Object(c.c)())),
                  e.__insert((this.endNode = Object(c.c)()));
              },
            },
            {
              key: "insertAfterPart",
              value: function(e) {
                e.__insert((this.startNode = Object(c.c)())),
                  (this.endNode = e.endNode),
                  (e.endNode = this.startNode);
              },
            },
            {
              key: "setValue",
              value: function(e) {
                this.__pendingValue = e;
              },
            },
            {
              key: "commit",
              value: function() {
                for (; Object(r.b)(this.__pendingValue); ) {
                  var e = this.__pendingValue;
                  (this.__pendingValue = o.a), e(this);
                }
                var t = this.__pendingValue;
                t !== o.a &&
                  (y(t)
                    ? t !== this.value && this.__commitText(t)
                    : t instanceof s.b
                    ? this.__commitTemplateResult(t)
                    : t instanceof Node
                    ? this.__commitNode(t)
                    : g(t)
                    ? this.__commitIterable(t)
                    : t === o.b
                    ? ((this.value = o.b), this.clear())
                    : this.__commitText(t));
              },
            },
            {
              key: "__insert",
              value: function(e) {
                this.endNode.parentNode.insertBefore(e, this.endNode);
              },
            },
            {
              key: "__commitNode",
              value: function(e) {
                this.value !== e &&
                  (this.clear(), this.__insert(e), (this.value = e));
              },
            },
            {
              key: "__commitText",
              value: function(e) {
                var t = this.startNode.nextSibling;
                (e = null == e ? "" : e),
                  t === this.endNode.previousSibling && 3 === t.nodeType
                    ? (t.data = e)
                    : this.__commitNode(
                        document.createTextNode(
                          "string" == typeof e ? e : String(e)
                        )
                      ),
                  (this.value = e);
              },
            },
            {
              key: "__commitTemplateResult",
              value: function(e) {
                var t = this.options.templateFactory(e);
                if (this.value instanceof a.a && this.value.template === t)
                  this.value.update(e.values);
                else {
                  var n = new a.a(t, e.processor, this.options),
                    r = n._clone();
                  n.update(e.values), this.__commitNode(r), (this.value = n);
                }
              },
            },
            {
              key: "__commitIterable",
              value: function(t) {
                Array.isArray(this.value) || ((this.value = []), this.clear());
                var n,
                  r = this.value,
                  i = 0,
                  o = !0,
                  a = !1,
                  s = void 0;
                try {
                  for (
                    var c, l = t[Symbol.iterator]();
                    !(o = (c = l.next()).done);
                    o = !0
                  ) {
                    var u = c.value;
                    void 0 === (n = r[i]) &&
                      ((n = new e(this.options)),
                      r.push(n),
                      0 === i
                        ? n.appendIntoPart(this)
                        : n.insertAfterPart(r[i - 1])),
                      n.setValue(u),
                      n.commit(),
                      i++;
                  }
                } catch (d) {
                  (a = !0), (s = d);
                } finally {
                  try {
                    o || null == l.return || l.return();
                  } finally {
                    if (a) throw s;
                  }
                }
                i < r.length && ((r.length = i), this.clear(n && n.endNode));
              },
            },
            {
              key: "clear",
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.startNode;
                Object(i.b)(
                  this.startNode.parentNode,
                  e.nextSibling,
                  this.endNode
                );
              },
            },
          ]),
          e
        );
      })(),
      x = (function() {
        function e(t, n, r) {
          if (
            (h(this, e),
            (this.value = void 0),
            (this.__pendingValue = void 0),
            2 !== r.length || "" !== r[0] || "" !== r[1])
          )
            throw new Error(
              "Boolean attributes can only contain a single expression"
            );
          (this.element = t), (this.name = n), (this.strings = r);
        }
        return (
          m(e, [
            {
              key: "setValue",
              value: function(e) {
                this.__pendingValue = e;
              },
            },
            {
              key: "commit",
              value: function() {
                for (; Object(r.b)(this.__pendingValue); ) {
                  var e = this.__pendingValue;
                  (this.__pendingValue = o.a), e(this);
                }
                if (this.__pendingValue !== o.a) {
                  var t = !!this.__pendingValue;
                  this.value !== t &&
                    (t
                      ? this.element.setAttribute(this.name, "")
                      : this.element.removeAttribute(this.name),
                    (this.value = t)),
                    (this.__pendingValue = o.a);
                }
              },
            },
          ]),
          e
        );
      })(),
      O = (function(e) {
        function t(e, n, r) {
          var i;
          return (
            h(this, t),
            ((i = l(this, d(t).call(this, e, n, r))).single =
              2 === r.length && "" === r[0] && "" === r[1]),
            i
          );
        }
        return (
          p(t, _),
          m(t, [
            {
              key: "_createPart",
              value: function() {
                return new j(this);
              },
            },
            {
              key: "_getValue",
              value: function() {
                return this.single
                  ? this.parts[0].value
                  : u(d(t.prototype), "_getValue", this).call(this);
              },
            },
            {
              key: "commit",
              value: function() {
                this.dirty &&
                  ((this.dirty = !1),
                  (this.element[this.name] = this._getValue()));
              },
            },
          ]),
          t
        );
      })(),
      j = (function(e) {
        function t() {
          return h(this, t), l(this, d(t).apply(this, arguments));
        }
        return p(t, k), t;
      })(),
      S = !1;
    try {
      var C = {
        get capture() {
          return (S = !0), !1;
        },
      };
      window.addEventListener("test", C, C),
        window.removeEventListener("test", C, C);
    } catch (A) {}
    var P = (function() {
        function e(t, n, r) {
          var i = this;
          h(this, e),
            (this.value = void 0),
            (this.__pendingValue = void 0),
            (this.element = t),
            (this.eventName = n),
            (this.eventContext = r),
            (this.__boundHandleEvent = function(e) {
              return i.handleEvent(e);
            });
        }
        return (
          m(e, [
            {
              key: "setValue",
              value: function(e) {
                this.__pendingValue = e;
              },
            },
            {
              key: "commit",
              value: function() {
                for (; Object(r.b)(this.__pendingValue); ) {
                  var e = this.__pendingValue;
                  (this.__pendingValue = o.a), e(this);
                }
                if (this.__pendingValue !== o.a) {
                  var t = this.__pendingValue,
                    n = this.value,
                    i =
                      null == t ||
                      (null != n &&
                        (t.capture !== n.capture ||
                          t.once !== n.once ||
                          t.passive !== n.passive)),
                    a = null != t && (null == n || i);
                  i &&
                    this.element.removeEventListener(
                      this.eventName,
                      this.__boundHandleEvent,
                      this.__options
                    ),
                    a &&
                      ((this.__options = E(t)),
                      this.element.addEventListener(
                        this.eventName,
                        this.__boundHandleEvent,
                        this.__options
                      )),
                    (this.value = t),
                    (this.__pendingValue = o.a);
                }
              },
            },
            {
              key: "handleEvent",
              value: function(e) {
                "function" == typeof this.value
                  ? this.value.call(this.eventContext || this.element, e)
                  : this.value.handleEvent(e);
              },
            },
          ]),
          e
        );
      })(),
      E = function(e) {
        return (
          e &&
          (S
            ? { capture: e.capture, passive: e.passive, once: e.once }
            : e.capture)
        );
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(71);
    n.d(t, "e", function() {
      return r.f;
    }),
      n.d(t, "a", function() {
        return r.a;
      }),
      n.d(t, "d", function() {
        return r.d;
      }),
      n.d(t, "f", function() {
        return r.g;
      }),
      n.d(t, "c", function() {
        return r.c;
      }),
      n.d(t, "b", function() {
        return i.a;
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      });
    var r = {},
      i = {};
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return o;
      });
    var r =
        void 0 !== window.customElements &&
        void 0 !== window.customElements.polyfillWrapFlushCallback,
      i = function(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          t !== n;

        ) {
          var i = t.nextSibling;
          e.insertBefore(t, r), (t = i);
        }
      },
      o = function(e, t) {
        for (
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          t !== n;

        ) {
          var r = t.nextSibling;
          e.removeChild(t), (t = r);
        }
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return s;
    }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return l;
      });
    n(7);
    var r,
      i,
      o = /(url\()([^)]*)(\))/g,
      a = /(^\/)|(^#)|(^[\w-\d]*:)/;
    function s(e, t) {
      if (e && a.test(e)) return e;
      if (void 0 === r) {
        r = !1;
        try {
          var n = new URL("b", "http://a");
          (n.pathname = "c%20d"), (r = "http://a/c%20d" === n.href);
        } catch (o) {}
      }
      return (
        t || (t = document.baseURI || window.location.href),
        r
          ? new URL(e, t).href
          : (i ||
              (((i = document.implementation.createHTMLDocument(
                "temp"
              )).base = i.createElement("base")),
              i.head.appendChild(i.base),
              (i.anchor = i.createElement("a")),
              i.body.appendChild(i.anchor)),
            (i.base.href = t),
            (i.anchor.href = e),
            i.anchor.href || e)
      );
    }
    function c(e, t) {
      return e.replace(o, function(e, n, r, i) {
        return n + "'" + s(r.replace(/["']/g, ""), t) + "'" + i;
      });
    }
    function l(e) {
      return e.substring(0, e.lastIndexOf("/") + 1);
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var r = function(e, t, n, r) {
      (r = r || {}), (n = null == n ? {} : n);
      var i = new Event(t, {
        bubbles: void 0 === r.bubbles || r.bubbles,
        cancelable: Boolean(r.cancelable),
        composed: void 0 === r.composed || r.composed,
      });
      return (i.detail = n), e.dispatchEvent(i), i;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return o;
      });
    var r = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      i = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      o = /@media\s(.*)/;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    n(7), n(8), n(11);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var i = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._asyncModule = null),
          (this._callback = null),
          (this._timer = null);
      }
      var t, n, i;
      return (
        (t = e),
        (i = [
          {
            key: "debounce",
            value: function(t, n, r) {
              return (
                t instanceof e ? t.cancel() : (t = new e()),
                t.setConfig(n, r),
                t
              );
            },
          },
        ]),
        (n = [
          {
            key: "setConfig",
            value: function(e, t) {
              var n = this;
              (this._asyncModule = e),
                (this._callback = t),
                (this._timer = this._asyncModule.run(function() {
                  (n._timer = null), n._callback();
                }));
            },
          },
          {
            key: "cancel",
            value: function() {
              this.isActive() &&
                (this._asyncModule.cancel(this._timer), (this._timer = null));
            },
          },
          {
            key: "flush",
            value: function() {
              this.isActive() && (this.cancel(), this._callback());
            },
          },
          {
            key: "isActive",
            value: function() {
              return null != this._timer;
            },
          },
        ]) && r(t.prototype, n),
        i && r(t, i),
        e
      );
    })();
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
    var r = {},
      i = /-[a-z]/g,
      o = /([A-Z])/g;
    function a(e) {
      return (
        r[e] ||
        (r[e] =
          e.indexOf("-") < 0
            ? e
            : e.replace(i, function(e) {
                return e[1].toUpperCase();
              }))
      );
    }
    function s(e) {
      return r[e] || (r[e] = e.replace(o, "-$1").toLowerCase());
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return f;
    }),
      n.d(t, "a", function() {
        return h;
      });
    var r = n(17),
      i = n(6);
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
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
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
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function p(e, t, n) {
      return t && d(e.prototype, t), n && d(e, n), e;
    }
    var f = (function() {
        function e(t, n, r, i) {
          u(this, e),
            (this.strings = t),
            (this.values = n),
            (this.type = r),
            (this.processor = i);
        }
        return (
          p(e, [
            {
              key: "getHTML",
              value: function() {
                for (
                  var e = this.strings.length - 1, t = "", n = !1, r = 0;
                  r < e;
                  r++
                ) {
                  var o = this.strings[r],
                    a = o.lastIndexOf("\x3c!--");
                  n = (a > -1 || n) && -1 === o.indexOf("--\x3e", a + 1);
                  var s = i.e.exec(o);
                  t +=
                    null === s
                      ? o + (n ? i.f : i.g)
                      : o.substr(0, s.index) + s[1] + s[2] + i.b + s[3] + i.f;
                }
                return (t += this.strings[e]);
              },
            },
            {
              key: "getTemplateElement",
              value: function() {
                var e = document.createElement("template");
                return (e.innerHTML = this.getHTML()), e;
              },
            },
          ]),
          e
        );
      })(),
      h = (function(e) {
        function t() {
          return u(this, t), a(this, c(t).apply(this, arguments));
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
              t && l(e, t);
          })(t, f),
          p(t, [
            {
              key: "getHTML",
              value: function() {
                return "<svg>".concat(
                  s(c(t.prototype), "getHTML", this).call(this),
                  "</svg>"
                );
              },
            },
            {
              key: "getTemplateElement",
              value: function() {
                var e = s(c(t.prototype), "getTemplateElement", this).call(
                    this
                  ),
                  n = e.content,
                  i = n.firstChild;
                return n.removeChild(i), Object(r.c)(n, i.firstChild), e;
              },
            },
          ]),
          t
        );
      })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return a;
      });
    n(7), n(21);
    var r = [],
      i = function(e) {
        r.push(e);
      };
    function o() {
      for (var e = Boolean(r.length); r.length; )
        try {
          r.shift().flush();
        } catch (t) {
          setTimeout(function() {
            throw t;
          });
        }
      return e;
    }
    var a = function() {
      var e, t;
      do {
        (e = window.ShadyDOM && ShadyDOM.flush()),
          window.ShadyCSS &&
            window.ShadyCSS.ScopingShim &&
            window.ShadyCSS.ScopingShim.flush(),
          (t = o());
      } while (e || t);
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(36),
      i = (n(3), Object(r.a)(HTMLElement));
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return f;
    }),
      n.d(t, "b", function() {
        return h;
      });
    var r = n(8);
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
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
    function a(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    function s(e, t) {
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
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && u(e, t);
    }
    function u(e, t) {
      return (u =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
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
    function p(e, t, n, r, i) {
      var o;
      i && (o = "object" === d(n) && null !== n) && (r = e.__dataTemp[t]);
      var a = r !== n && (r == r || n == n);
      return o && a && (e.__dataTemp[t] = n), a;
    }
    var f = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return i(this, n), s(this, c(n).apply(this, arguments));
          }
          return (
            l(n, e),
            a(n, [
              {
                key: "_shouldPropertyChange",
                value: function(e, t, n) {
                  return p(this, e, t, n, !0);
                },
              },
            ]),
            n
          );
        })();
      }),
      h = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return i(this, n), s(this, c(n).apply(this, arguments));
          }
          return (
            l(n, e),
            a(
              n,
              [
                {
                  key: "_shouldPropertyChange",
                  value: function(e, t, n) {
                    return p(this, e, t, n, this.mutableData);
                  },
                },
              ],
              [
                {
                  key: "properties",
                  get: function() {
                    return { mutableData: Boolean };
                  },
                },
              ]
            ),
            n
          );
        })();
      });
    f._mutablePropertyChange = p;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "a", function() {
        return o;
      });
    var r = n(6);
    function i(e) {
      var t = o.get(e.type);
      void 0 === t &&
        ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
        o.set(e.type, t));
      var n = t.stringsArray.get(e.strings);
      if (void 0 !== n) return n;
      var i = e.strings.join(r.f);
      return (
        void 0 === (n = t.keyString.get(i)) &&
          ((n = new r.a(e, e.getTemplateElement())), t.keyString.set(i, n)),
        t.stringsArray.set(e.strings, n),
        n
      );
    }
    var o = new Map();
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
        return a;
      });
    var r = n(20);
    function i(e, t) {
      for (var n in t)
        null === n ? e.style.removeProperty(n) : e.style.setProperty(n, t[n]);
    }
    function o(e, t) {
      var n = window.getComputedStyle(e).getPropertyValue(t);
      return n ? n.trim() : "";
    }
    function a(e) {
      var t = r.b.test(e) || r.c.test(e);
      return (r.b.lastIndex = 0), (r.c.lastIndex = 0), t;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return o;
      });
    var r = new WeakMap(),
      i = function(e) {
        return function() {
          var t = e.apply(void 0, arguments);
          return r.set(t, !0), t;
        };
      },
      o = function(e) {
        return "function" == typeof e && r.has(e);
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    }),
      n.d(t, "b", function() {
        return s;
      });
    var r = n(17),
      i = n(14),
      o = n(27),
      a = new WeakMap(),
      s = function(e, t, n) {
        var s = a.get(t);
        void 0 === s &&
          (Object(r.b)(t, t.firstChild),
          a.set(t, (s = new i.e(Object.assign({ templateFactory: o.b }, n)))),
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
    var r = {
        "U+0008": "backspace",
        "U+0009": "tab",
        "U+001B": "esc",
        "U+0020": "space",
        "U+007F": "del",
      },
      i = {
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
      o = {
        shift: "shiftKey",
        ctrl: "ctrlKey",
        alt: "altKey",
        meta: "metaKey",
      },
      a = /[a-z0-9*]/,
      s = /U\+/,
      c = /^arrow/,
      l = /^space(bar)?/,
      u = /^escape$/;
    function d(e, t) {
      var n = "";
      if (e) {
        var r = e.toLowerCase();
        " " === r || l.test(r)
          ? (n = "space")
          : u.test(r)
          ? (n = "esc")
          : 1 == r.length
          ? (t && !a.test(r)) || (n = r)
          : (n = c.test(r)
              ? r.replace("arrow", "")
              : "multiply" == r
              ? "*"
              : r);
      }
      return n;
    }
    function p(e, t) {
      return e.key
        ? d(e.key, t)
        : e.detail && e.detail.key
        ? d(e.detail.key, t)
        : ((n = e.keyIdentifier),
          (o = ""),
          n &&
            (n in r
              ? (o = r[n])
              : s.test(n)
              ? ((n = parseInt(n.replace("U+", "0x"), 16)),
                (o = String.fromCharCode(n).toLowerCase()))
              : (o = n.toLowerCase())),
          o ||
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
                      : i[e]),
                t
              );
            })(e.keyCode) ||
            "");
      var n, o;
    }
    function f(e, t) {
      return (
        p(t, e.hasModifiers) === e.key &&
        (!e.hasModifiers ||
          (!!t.shiftKey == !!e.shiftKey &&
            !!t.ctrlKey == !!e.ctrlKey &&
            !!t.altKey == !!e.altKey &&
            !!t.metaKey == !!e.metaKey))
      );
    }
    function h(e) {
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
                      r = n[0],
                      i = n[1];
                    return (
                      r in o
                        ? ((e[o[r]] = !0), (e.hasModifiers = !0))
                        : ((e.key = r), (e.event = i || "keydown")),
                      e
                    );
                  },
                  { combo: e.split(":").shift() }
                );
          })(e);
        });
    }
    var b = {
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
        for (var n = h(t), r = 0; r < n.length; ++r) if (f(n[r], e)) return !0;
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
        h(e).forEach(function(e) {
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
        for (var e, t, n, r; this._boundKeyHandlers.length; )
          (t = (e = this._boundKeyHandlers.pop())[0]),
            (n = e[1]),
            (r = e[2]),
            t.removeEventListener(n, r);
      },
      _onKeyBindingEvent: function(e, t) {
        if (
          (this.stopKeyboardEventPropagation && t.stopPropagation(),
          !t.defaultPrevented)
        )
          for (var n = 0; n < e.length; n++) {
            var r = e[n][0],
              i = e[n][1];
            if (
              f(r, t) &&
              (this._triggerKeyHandler(r, i, t), t.defaultPrevented)
            )
              return;
          }
      },
      _triggerKeyHandler: function(e, t, n) {
        var r = Object.create(e);
        r.keyboardEvent = n;
        var i = new CustomEvent(e.event, { detail: r, cancelable: !0 });
        this[t].call(this, i), i.defaultPrevented && n.preventDefault();
      },
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return C;
    }),
      n.d(t, "a", function() {
        return P;
      });
    n(7);
    var r = n(37),
      i = n(26),
      o = n(9);
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
      return !t || ("object" !== a(t) && "function" != typeof t) ? l(e) : t;
    }
    function l(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
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
                  null !== (e = d(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function p(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && f(e, t);
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var b = null;
    function m() {
      return b;
    }
    m.prototype = Object.create(HTMLTemplateElement.prototype, {
      constructor: { value: m, writable: !0 },
    });
    var v = Object(r.a)(m),
      y = Object(i.a)(v);
    var g = Object(r.a)(
        (function() {
          return function e() {
            h(this, e);
          };
        })()
      ),
      _ = (function(e) {
        function t(e) {
          var n;
          h(this, t),
            (n = c(this, d(t).call(this)))._configureProperties(e),
            (n.root = n._stampTemplate(n.__dataHost));
          for (
            var r = (n.children = []), i = n.root.firstChild;
            i;
            i = i.nextSibling
          )
            r.push(i), (i.__templatizeInstance = l(n));
          n.__templatizeOwner &&
            n.__templatizeOwner.__hideTemplateChildren__ &&
            n._showHideChildren(!0);
          var o = n.__templatizeOptions;
          return (
            ((e && o.instanceProps) || !o.instanceProps) &&
              n._enableProperties(),
            n
          );
        }
        var n, r, i;
        return (
          p(t, g),
          (n = t),
          (r = [
            {
              key: "_configureProperties",
              value: function(e) {
                if (this.__templatizeOptions.forwardHostProp)
                  for (var t in this.__hostProps)
                    this._setPendingProperty(t, this.__dataHost["_host_" + t]);
                for (var n in e) this._setPendingProperty(n, e[n]);
              },
            },
            {
              key: "forwardHostProp",
              value: function(e, t) {
                this._setPendingPropertyOrPath(e, t, !1, !0) &&
                  this.__dataHost._enqueueClient(this);
              },
            },
            {
              key: "_addEventListenerToNode",
              value: function(e, t, n) {
                var r = this;
                if (this._methodHost && this.__templatizeOptions.parentModel)
                  this._methodHost._addEventListenerToNode(e, t, function(e) {
                    (e.model = r), n(e);
                  });
                else {
                  var i = this.__dataHost.__dataHost;
                  i && i._addEventListenerToNode(e, t, n);
                }
              },
            },
            {
              key: "_showHideChildren",
              value: function(e) {
                for (var t = this.children, n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (Boolean(e) != Boolean(r.__hideTemplateChildren__))
                    if (r.nodeType === Node.TEXT_NODE)
                      e
                        ? ((r.__polymerTextContent__ = r.textContent),
                          (r.textContent = ""))
                        : (r.textContent = r.__polymerTextContent__);
                    else if ("slot" === r.localName)
                      if (e)
                        (r.__polymerReplaced__ = document.createComment(
                          "hidden-slot"
                        )),
                          r.parentNode.replaceChild(r.__polymerReplaced__, r);
                      else {
                        var i = r.__polymerReplaced__;
                        i && i.parentNode.replaceChild(r, i);
                      }
                    else
                      r.style &&
                        (e
                          ? ((r.__polymerDisplay__ = r.style.display),
                            (r.style.display = "none"))
                          : (r.style.display = r.__polymerDisplay__));
                  (r.__hideTemplateChildren__ = e),
                    r._showHideChildren && r._showHideChildren(e);
                }
              },
            },
            {
              key: "_setUnmanagedPropertyToNode",
              value: function(e, n, r) {
                e.__hideTemplateChildren__ &&
                e.nodeType == Node.TEXT_NODE &&
                "textContent" == n
                  ? (e.__polymerTextContent__ = r)
                  : u(d(t.prototype), "_setUnmanagedPropertyToNode", this).call(
                      this,
                      e,
                      n,
                      r
                    );
              },
            },
            {
              key: "dispatchEvent",
              value: function(e) {
                return !0;
              },
            },
            {
              key: "parentModel",
              get: function() {
                var e = this.__parentModel;
                if (!e) {
                  var t;
                  e = this;
                  do {
                    e = e.__dataHost.__dataHost;
                  } while ((t = e.__templatizeOptions) && !t.parentModel);
                  this.__parentModel = e;
                }
                return e;
              },
            },
          ]) && s(n.prototype, r),
          i && s(n, i),
          t
        );
      })();
    _.prototype.__dataHost,
      _.prototype.__templatizeOptions,
      _.prototype._methodHost,
      _.prototype.__templatizeOwner,
      _.prototype.__hostProps;
    var k = Object(i.a)(_);
    function w(e) {
      var t = e.__dataHost;
      return (t && t._methodHost) || t;
    }
    function x(e, t, n) {
      var r = n.mutableData ? k : _,
        i = (function(e) {
          function t() {
            return h(this, t), c(this, d(t).apply(this, arguments));
          }
          return p(t, r), t;
        })();
      return (
        (i.prototype.__templatizeOptions = n),
        i.prototype._bindTemplate(e),
        (function(e, t, n, r) {
          var i = n.hostProps || {};
          for (var o in r.instanceProps) {
            delete i[o];
            var a = r.notifyInstanceProp;
            a &&
              e.prototype._addPropertyEffect(
                o,
                e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                { fn: S(o, a) }
              );
          }
          if (r.forwardHostProp && t.__dataHost)
            for (var s in i)
              e.prototype._addPropertyEffect(
                s,
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
        })(i, e, t, n),
        i
      );
    }
    function O(e, t, n) {
      var r = n.forwardHostProp;
      if (r) {
        var i = t.templatizeTemplateClass;
        if (!i) {
          var o = n.mutableData ? y : v;
          i = t.templatizeTemplateClass = (function(e) {
            function t() {
              return h(this, t), c(this, d(t).apply(this, arguments));
            }
            return p(t, o), t;
          })();
          var a = t.hostProps;
          for (var s in a)
            i.prototype._addPropertyEffect(
              "_host_" + s,
              i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
              { fn: j(s, r) }
            ),
              i.prototype._createNotifyingProperty("_host_" + s);
        }
        !(function(e, t) {
          (b = e), Object.setPrototypeOf(e, t.prototype), new t(), (b = null);
        })(e, i),
          e.__dataProto && Object.assign(e.__data, e.__dataProto),
          (e.__dataTemp = {}),
          (e.__dataPending = null),
          (e.__dataOld = null),
          e._enableProperties();
      }
    }
    function j(e, t) {
      return function(e, n, r) {
        t.call(e.__templatizeOwner, n.substring("_host_".length), r[n]);
      };
    }
    function S(e, t) {
      return function(e, n, r) {
        t.call(e.__templatizeOwner, e, n, r[n]);
      };
    }
    function C(e, t, n) {
      if (o.f && !w(e))
        throw new Error("strictTemplatePolicy: template owner not trusted");
      if (((n = n || {}), e.__templatizeOwner))
        throw new Error("A <template> can only be templatized once");
      e.__templatizeOwner = t;
      var r = (t ? t.constructor : _)._parseTemplate(e),
        i = r.templatizeInstanceClass;
      i || ((i = x(e, r, n)), (r.templatizeInstanceClass = i)), O(e, r, n);
      var a = (function(e) {
        function t() {
          return h(this, t), c(this, d(t).apply(this, arguments));
        }
        return p(t, i), t;
      })();
      return (
        (a.prototype._methodHost = w(e)),
        (a.prototype.__dataHost = e),
        (a.prototype.__templatizeOwner = t),
        (a.prototype.__hostProps = r.hostProps),
        (a = a)
      );
    }
    function P(e, t) {
      for (var n; t; )
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
      return u;
    }),
      n.d(t, "a", function() {
        return p;
      }),
      n.d(t, "b", function() {
        return m;
      });
    var r = n(39),
      i = n(51);
    function o(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function a(e) {
      return function() {
        var t = this,
          n = arguments;
        return new Promise(function(r, i) {
          var a = e.apply(t, n);
          function s(e) {
            o(a, r, i, s, c, "next", e);
          }
          function c(e) {
            o(a, r, i, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    var s = window.localStorage || {},
      c = {
        "zh-cn": "zh-Hans",
        "zh-sg": "zh-Hans",
        "zh-my": "zh-Hans",
        "zh-tw": "zh-Hant",
        "zh-hk": "zh-Hant",
        "zh-mo": "zh-Hant",
        zh: "zh-Hant",
      };
    function l(e) {
      if (e in r.a.translations) return e;
      var t = e.toLowerCase();
      if (t in c) return c[t];
      for (var n in Object.keys(r.a.translations))
        if (n.toLowerCase() === t) return n;
    }
    function u(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (d = a(
        regeneratorRuntime.mark(function e(t) {
          var n, r, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(i.a)(t);
                case 2:
                  if (((n = e.sent), !(r = n ? n.language : null))) {
                    e.next = 8;
                    break;
                  }
                  if (!(o = l(r))) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return", o);
                case 8:
                  return e.abrupt("return", null);
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function p() {
      var e = null;
      if (s.selectedLanguage)
        try {
          var t = JSON.parse(s.selectedLanguage);
          if (t && (e = l(t))) return e;
        } catch (c) {}
      if (navigator.languages) {
        var n = !0,
          r = !1,
          i = void 0;
        try {
          for (
            var o, a = navigator.languages[Symbol.iterator]();
            !(n = (o = a.next()).done);
            n = !0
          ) {
            if ((e = l(o.value))) return e;
          }
        } catch (u) {
          (r = !0), (i = u);
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
      }
      return (
        (e = l(navigator.language)) ||
        (navigator.language &&
        navigator.language.includes("-") &&
        (e = l(navigator.language.split("-")[0]))
          ? e
          : "en")
      );
    }
    var f = {};
    function h(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (b = a(
        regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    fetch("/static/translations/".concat(t), {
                      credentials: "same-origin",
                    })
                  );
                case 2:
                  if ((n = e.sent).ok) {
                    e.next = 5;
                    break;
                  }
                  throw new Error(
                    "Fail to fetch translation "
                      .concat(t, ": HTTP response status is ")
                      .concat(n.status)
                  );
                case 5:
                  return e.abrupt("return", n.json());
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function m(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (v = a(
        regeneratorRuntime.mark(function e(t, n) {
          var i, o;
          return regeneratorRuntime.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((i = r.a.translations[n])) {
                    e.next = 5;
                    break;
                  }
                  if ("en" === n) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", m(t, "en"));
                case 4:
                  throw new Error("Language en is not found in metadata");
                case 5:
                  return (
                    (o = i.fingerprints[t ? "".concat(t, "/").concat(n) : n]),
                    f[o] ||
                      (f[o] = h(o)
                        .then(function(e) {
                          return { language: n, data: e };
                        })
                        .catch(function(e) {
                          return (
                            delete f[o],
                            "en" !== n ? m(t, "en") : Promise.reject(e)
                          );
                        })),
                    e.abrupt("return", f[o])
                  );
                case 8:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    m(null, p());
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4), n(1);
    var r = {
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
      return I;
    }),
      n.d(t, "e", function() {
        return N;
      }),
      n.d(t, "f", function() {
        return M;
      }),
      n.d(t, "d", function() {
        return D;
      }),
      n.d(t, "c", function() {
        return q;
      }),
      n.d(t, "a", function() {
        return K;
      });
    n(7);
    var r = n(11),
      i = n(21),
      o = n(9),
      a = "string" == typeof document.head.style.touchAction,
      s = "__polymerGestures",
      c = "__polymerGesturesHandled",
      l = "__polymerGesturesTouchAction",
      u = 25,
      d = 5,
      p = 2500,
      f = ["mousedown", "mousemove", "mouseup", "click"],
      h = [0, 1, 4, 2],
      b = (function() {
        try {
          return 1 === new MouseEvent("test", { buttons: 1 }).buttons;
        } catch (e) {
          return !1;
        }
      })();
    function m(e) {
      return f.indexOf(e) > -1;
    }
    var v = !1;
    function y(e) {
      if (!m(e) && "touchend" !== e)
        return a && v && o.b ? { passive: !0 } : void 0;
    }
    !(function() {
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            v = !0;
          },
        });
        window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e);
      } catch (t) {}
    })();
    var g = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),
      _ = [],
      k = {
        button: !0,
        input: !0,
        keygen: !0,
        meter: !0,
        output: !0,
        textarea: !0,
        progress: !0,
        select: !0,
      },
      w = {
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
    function x(e) {
      var t = Array.prototype.slice.call(e.labels || []);
      if (!t.length) {
        t = [];
        var n = e.getRootNode();
        if (e.id)
          for (
            var r = n.querySelectorAll("label[for = ".concat(e.id, "]")), i = 0;
            i < r.length;
            i++
          )
            t.push(r[i]);
      }
      return t;
    }
    var O = function(e) {
      var t,
        n = e.sourceCapabilities;
      if (
        (!n || n.firesTouchEvents) &&
        ((e[c] = { skip: !0 }), "click" === e.type)
      ) {
        var r = !1,
          i = e.composedPath && e.composedPath();
        if (i)
          for (var o = 0; o < i.length; o++) {
            if (i[o].nodeType === Node.ELEMENT_NODE)
              if ("label" === i[o].localName) _.push(i[o]);
              else if (((t = i[o]), k[t.localName]))
                for (var a = x(i[o]), s = 0; s < a.length; s++)
                  r = r || _.indexOf(a[s]) > -1;
            if (i[o] === C.mouse.target) return;
          }
        if (r) return;
        e.preventDefault(), e.stopPropagation();
      }
    };
    function j(e) {
      for (var t, n = g ? ["click"] : f, r = 0; r < n.length; r++)
        (t = n[r]),
          e
            ? ((_.length = 0), document.addEventListener(t, O, !0))
            : document.removeEventListener(t, O, !0);
    }
    function S(e) {
      var t = e.type;
      if (!m(t)) return !1;
      if ("mousemove" === t) {
        var n = void 0 === e.buttons ? 1 : e.buttons;
        return (
          e instanceof window.MouseEvent && !b && (n = h[e.which] || 0),
          Boolean(1 & n)
        );
      }
      return 0 === (void 0 === e.button ? 0 : e.button);
    }
    var C = {
      mouse: { target: null, mouseIgnoreJob: null },
      touch: { x: 0, y: 0, id: -1, scrollDecided: !1 },
    };
    function P(e, t, n) {
      (e.movefn = t),
        (e.upfn = n),
        document.addEventListener("mousemove", t),
        document.addEventListener("mouseup", n);
    }
    function E(e) {
      document.removeEventListener("mousemove", e.movefn),
        document.removeEventListener("mouseup", e.upfn),
        (e.movefn = null),
        (e.upfn = null);
    }
    document.addEventListener(
      "touchend",
      function(e) {
        C.mouse.mouseIgnoreJob || j(!0),
          (C.mouse.target = e.composedPath()[0]),
          (C.mouse.mouseIgnoreJob = i.a.debounce(
            C.mouse.mouseIgnoreJob,
            r.d.after(p),
            function() {
              j(), (C.mouse.target = null), (C.mouse.mouseIgnoreJob = null);
            }
          ));
      },
      !!v && { passive: !0 }
    );
    var A = {},
      T = [];
    function R(e) {
      if (e.composedPath) {
        var t = e.composedPath();
        return t.length > 0 ? t[0] : e.target;
      }
      return e.target;
    }
    function z(e) {
      var t,
        n = e.type,
        r = e.currentTarget[s];
      if (r) {
        var i = r[n];
        if (i) {
          if (!e[c] && ((e[c] = {}), "touch" === n.slice(0, 5))) {
            var o = (e = e).changedTouches[0];
            if (
              ("touchstart" === n &&
                1 === e.touches.length &&
                (C.touch.id = o.identifier),
              C.touch.id !== o.identifier)
            )
              return;
            a ||
              ("touchstart" !== n && "touchmove" !== n) ||
              (function(e) {
                var t = e.changedTouches[0],
                  n = e.type;
                if ("touchstart" === n)
                  (C.touch.x = t.clientX),
                    (C.touch.y = t.clientY),
                    (C.touch.scrollDecided = !1);
                else if ("touchmove" === n) {
                  if (C.touch.scrollDecided) return;
                  C.touch.scrollDecided = !0;
                  var r = (function(e) {
                      var t = "auto",
                        n = e.composedPath && e.composedPath();
                      if (n)
                        for (var r, i = 0; i < n.length; i++)
                          if ((r = n[i])[l]) {
                            t = r[l];
                            break;
                          }
                      return t;
                    })(e),
                    i = !1,
                    o = Math.abs(C.touch.x - t.clientX),
                    a = Math.abs(C.touch.y - t.clientY);
                  e.cancelable &&
                    ("none" === r
                      ? (i = !0)
                      : "pan-x" === r
                      ? (i = a > o)
                      : "pan-y" === r && (i = o > a)),
                    i ? e.preventDefault() : D("track");
                }
              })(e);
          }
          if (!(t = e[c]).skip) {
            for (var u, d = 0; d < T.length; d++)
              i[(u = T[d]).name] &&
                !t[u.name] &&
                u.flow &&
                u.flow.start.indexOf(e.type) > -1 &&
                u.reset &&
                u.reset();
            for (var p, f = 0; f < T.length; f++)
              i[(p = T[f]).name] && !t[p.name] && ((t[p.name] = !0), p[n](e));
          }
        }
      }
    }
    function I(e, t, n) {
      return (
        !!A[t] &&
        ((function(e, t, n) {
          var r = A[t],
            i = r.deps,
            o = r.name,
            a = e[s];
          a || (e[s] = a = {});
          for (var c, l, u = 0; u < i.length; u++)
            (c = i[u]),
              (g && m(c) && "click" !== c) ||
                ((l = a[c]) || (a[c] = l = { _count: 0 }),
                0 === l._count && e.addEventListener(c, z, y(c)),
                (l[o] = (l[o] || 0) + 1),
                (l._count = (l._count || 0) + 1));
          e.addEventListener(t, n), r.touchAction && M(e, r.touchAction);
        })(e, t, n),
        !0)
      );
    }
    function N(e, t, n) {
      return (
        !!A[t] &&
        ((function(e, t, n) {
          var r = A[t],
            i = r.deps,
            o = r.name,
            a = e[s];
          if (a)
            for (var c, l, u = 0; u < i.length; u++)
              (c = i[u]),
                (l = a[c]) &&
                  l[o] &&
                  ((l[o] = (l[o] || 1) - 1),
                  (l._count = (l._count || 1) - 1),
                  0 === l._count && e.removeEventListener(c, z, y(c)));
          e.removeEventListener(t, n);
        })(e, t, n),
        !0)
      );
    }
    function L(e) {
      T.push(e);
      for (var t = 0; t < e.emits.length; t++) A[e.emits[t]] = e;
    }
    function M(e, t) {
      a &&
        e instanceof HTMLElement &&
        r.c.run(function() {
          e.style.touchAction = t;
        }),
        (e[l] = t);
    }
    function F(e, t, n) {
      var r = new Event(t, { bubbles: !0, cancelable: !0, composed: !0 });
      if (((r.detail = n), e.dispatchEvent(r), r.defaultPrevented)) {
        var i = n.preventer || n.sourceEvent;
        i && i.preventDefault && i.preventDefault();
      }
    }
    function D(e) {
      var t = (function(e) {
        for (var t, n = 0; n < T.length; n++) {
          t = T[n];
          for (var r = 0; r < t.emits.length; r++)
            if (t.emits[r] === e) return t;
        }
        return null;
      })(e);
      t.info && (t.info.prevent = !0);
    }
    function B(e, t, n, r) {
      t &&
        F(t, e, {
          x: n.clientX,
          y: n.clientY,
          sourceEvent: n,
          preventer: r,
          prevent: function(e) {
            return D(e);
          },
        });
    }
    function H(e, t, n) {
      if (e.prevent) return !1;
      if (e.started) return !0;
      var r = Math.abs(e.x - t),
        i = Math.abs(e.y - n);
      return r >= d || i >= d;
    }
    function V(e, t, n) {
      if (t) {
        var r,
          i = e.moves[e.moves.length - 2],
          o = e.moves[e.moves.length - 1],
          a = o.x - e.x,
          s = o.y - e.y,
          c = 0;
        i && ((r = o.x - i.x), (c = o.y - i.y)),
          F(t, "track", {
            state: e.state,
            x: n.clientX,
            y: n.clientY,
            dx: a,
            dy: s,
            ddx: r,
            ddy: c,
            sourceEvent: n,
            hover: function() {
              return (function(e, t) {
                for (
                  var n = document.elementFromPoint(e, t), r = n;
                  r &&
                  r.shadowRoot &&
                  !window.ShadyDOM &&
                  r !== (r = r.shadowRoot.elementFromPoint(e, t));

                )
                  r && (n = r);
                return n;
              })(n.clientX, n.clientY);
            },
          });
      }
    }
    function U(e, t, n) {
      var r = Math.abs(t.clientX - e.x),
        i = Math.abs(t.clientY - e.y),
        o = R(n || t);
      !o ||
        (w[o.localName] && o.hasAttribute("disabled")) ||
        ((isNaN(r) ||
          isNaN(i) ||
          (r <= u && i <= u) ||
          (function(e) {
            if ("click" === e.type) {
              if (0 === e.detail) return !0;
              var t = R(e);
              if (!t.nodeType || t.nodeType !== Node.ELEMENT_NODE) return !0;
              var n = t.getBoundingClientRect(),
                r = e.pageX,
                i = e.pageY;
              return !(
                r >= n.left &&
                r <= n.right &&
                i >= n.top &&
                i <= n.bottom
              );
            }
            return !1;
          })(t)) &&
          (e.prevent ||
            F(o, "tap", {
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
        E(this.info);
      },
      mousedown: function(e) {
        if (S(e)) {
          var t = R(e),
            n = this;
          P(
            this.info,
            function(e) {
              S(e) || (B("up", t, e), E(n.info));
            },
            function(e) {
              S(e) && B("up", t, e), E(n.info);
            }
          ),
            B("down", t, e);
        }
      },
      touchstart: function(e) {
        B("down", R(e), e.changedTouches[0], e);
      },
      touchend: function(e) {
        B("up", R(e), e.changedTouches[0], e);
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
            E(this.info);
        },
        mousedown: function(e) {
          if (S(e)) {
            var t = R(e),
              n = this,
              r = function(e) {
                var r = e.clientX,
                  i = e.clientY;
                H(n.info, r, i) &&
                  ((n.info.state = n.info.started
                    ? "mouseup" === e.type
                      ? "end"
                      : "track"
                    : "start"),
                  "start" === n.info.state && D("tap"),
                  n.info.addMove({ x: r, y: i }),
                  S(e) || ((n.info.state = "end"), E(n.info)),
                  t && V(n.info, t, e),
                  (n.info.started = !0));
              };
            P(this.info, r, function(e) {
              n.info.started && r(e), E(n.info);
            }),
              (this.info.x = e.clientX),
              (this.info.y = e.clientY);
          }
        },
        touchstart: function(e) {
          var t = e.changedTouches[0];
          (this.info.x = t.clientX), (this.info.y = t.clientY);
        },
        touchmove: function(e) {
          var t = R(e),
            n = e.changedTouches[0],
            r = n.clientX,
            i = n.clientY;
          H(this.info, r, i) &&
            ("start" === this.info.state && D("tap"),
            this.info.addMove({ x: r, y: i }),
            V(this.info, t, n),
            (this.info.state = "track"),
            (this.info.started = !0));
        },
        touchend: function(e) {
          var t = R(e),
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
          S(e) && ((this.info.x = e.clientX), (this.info.y = e.clientY));
        },
        click: function(e) {
          S(e) && U(this.info, e);
        },
        touchstart: function(e) {
          var t = e.changedTouches[0];
          (this.info.x = t.clientX), (this.info.y = t.clientY);
        },
        touchend: function(e) {
          U(this.info, e.changedTouches[0], e);
        },
      });
    var q = R,
      K = I;
  },
  function(e, t, n) {
    "use strict";
    n(7);
    var r = n(9),
      i = n(8),
      o = n(42),
      a = n(18),
      s = n(40),
      c = n(37),
      l = n(48);
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
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function p(e, t) {
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
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var m = Object(i.a)(function(e) {
      var t = Object(l.a)(e);
      function n(e) {
        var t = Object.getPrototypeOf(e);
        return t.prototype instanceof i ? t : null;
      }
      function r(e) {
        if (
          !e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", e))
        ) {
          var t = null;
          if (e.hasOwnProperty(JSCompiler_renameProperty("properties", e))) {
            var n = e.properties;
            n &&
              (t = (function(e) {
                var t = {};
                for (var n in e) {
                  var r = e[n];
                  t[n] = "function" == typeof r ? { type: r } : r;
                }
                return t;
              })(n));
          }
          e.__ownProperties = t;
        }
        return e.__ownProperties;
      }
      var i = (function(e) {
        function i() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            p(this, h(i).apply(this, arguments))
          );
        }
        var o, a, s;
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
          })(i, t),
          (o = i),
          (s = [
            {
              key: "finalize",
              value: function() {
                if (
                  !this.hasOwnProperty(
                    JSCompiler_renameProperty("__finalized", this)
                  )
                ) {
                  var e = n(this);
                  e && e.finalize(),
                    (this.__finalized = !0),
                    this._finalizeClass();
                }
              },
            },
            {
              key: "_finalizeClass",
              value: function() {
                var e = r(this);
                e && this.createProperties(e);
              },
            },
            {
              key: "typeForProperty",
              value: function(e) {
                var t = this._properties[e];
                return t && t.type;
              },
            },
            {
              key: "observedAttributes",
              get: function() {
                var e = this,
                  t = this._properties;
                return t
                  ? Object.keys(t).map(function(t) {
                      return e.attributeNameForProperty(t);
                    })
                  : [];
              },
            },
            {
              key: "_properties",
              get: function() {
                if (
                  !this.hasOwnProperty(
                    JSCompiler_renameProperty("__properties", this)
                  )
                ) {
                  var e = n(this);
                  this.__properties = Object.assign(
                    {},
                    e && e._properties,
                    r(this)
                  );
                }
                return this.__properties;
              },
            },
          ]),
          (a = [
            {
              key: "_initializeProperties",
              value: function() {
                this.constructor.finalize(),
                  f(h(i.prototype), "_initializeProperties", this).call(this);
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                f(h(i.prototype), "connectedCallback", this) &&
                  f(h(i.prototype), "connectedCallback", this).call(this),
                  this._enableProperties();
              },
            },
            {
              key: "disconnectedCallback",
              value: function() {
                f(h(i.prototype), "disconnectedCallback", this) &&
                  f(h(i.prototype), "disconnectedCallback", this).call(this);
              },
            },
          ]) && d(o.prototype, a),
          s && d(o, s),
          i
        );
      })();
      return i;
    });
    function v(e) {
      return (v =
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
    function y(e, t) {
      return !t || ("object" !== v(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _(e, t, n) {
      return t && g(e.prototype, t), n && g(e, n), e;
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function w(e, t, n) {
      return (w =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = x(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function x(e) {
      return (x = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    n.d(t, "a", function() {
      return O;
    });
    var O = Object(i.a)(function(e) {
        var t = m(Object(c.a)(e));
        return (function(e) {
          function n() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (e = y(this, x(n).call(this)))._template,
              e._importPath,
              e.rootPath,
              e.importPath,
              e.root,
              e.$,
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
                t && k(e, t);
            })(n, t),
            _(n, null, [
              {
                key: "_finalizeClass",
                value: function() {
                  var e;
                  w(x(n), "_finalizeClass", this).call(this),
                    this.hasOwnProperty(
                      JSCompiler_renameProperty("is", this)
                    ) &&
                      this.is &&
                      ((e = this.prototype), j.push(e));
                  var t,
                    r = ((t = this).hasOwnProperty(
                      JSCompiler_renameProperty("__ownObservers", t)
                    ) ||
                      (t.__ownObservers = t.hasOwnProperty(
                        JSCompiler_renameProperty("observers", t)
                      )
                        ? t.observers
                        : null),
                    t.__ownObservers);
                  r && this.createObservers(r, this._properties);
                  var i = this.template;
                  i &&
                    ("string" == typeof i
                      ? (console.error(
                          "template getter must return HTMLTemplateElement"
                        ),
                        (i = null))
                      : (i = i.cloneNode(!0))),
                    (this.prototype._template = i);
                },
              },
              {
                key: "createProperties",
                value: function(e) {
                  for (var t in e)
                    (n = this.prototype),
                      (r = t),
                      (i = e[t]),
                      (o = e),
                      i.computed && (i.readOnly = !0),
                      i.computed &&
                        !n._hasReadOnlyEffect(r) &&
                        n._createComputedProperty(r, i.computed, o),
                      i.readOnly &&
                        !n._hasReadOnlyEffect(r) &&
                        n._createReadOnlyProperty(r, !i.computed),
                      i.reflectToAttribute &&
                        !n._hasReflectEffect(r) &&
                        n._createReflectedProperty(r),
                      i.notify &&
                        !n._hasNotifyEffect(r) &&
                        n._createNotifyingProperty(r),
                      i.observer &&
                        n._createPropertyObserver(r, i.observer, o[i.observer]),
                      n._addPropertyToAttributeMap(r);
                  var n, r, i, o;
                },
              },
              {
                key: "createObservers",
                value: function(e, t) {
                  for (var n = this.prototype, r = 0; r < e.length; r++)
                    n._createMethodObserver(e[r], t);
                },
              },
              {
                key: "polymerElementVersion",
                get: function() {
                  return "3.0.5";
                },
              },
              {
                key: "template",
                get: function() {
                  return (
                    this.hasOwnProperty(
                      JSCompiler_renameProperty("_template", this)
                    ) ||
                      (this._template = this.prototype.hasOwnProperty(
                        JSCompiler_renameProperty("_template", this.prototype)
                      )
                        ? this.prototype._template
                        : (function(e) {
                            var t = null;
                            if (
                              e &&
                              (!r.f || r.a) &&
                              ((t = s.a.import(e, "template")), r.f && !t)
                            )
                              throw new Error(
                                "strictTemplatePolicy: expecting dom-module or null template for ".concat(
                                  e
                                )
                              );
                            return t;
                          })(this.is) ||
                          Object.getPrototypeOf(this.prototype).constructor
                            .template),
                    this._template
                  );
                },
                set: function(e) {
                  this._template = e;
                },
              },
              {
                key: "importPath",
                get: function() {
                  if (
                    !this.hasOwnProperty(
                      JSCompiler_renameProperty("_importPath", this)
                    )
                  ) {
                    var e = this.importMeta;
                    if (e) this._importPath = Object(a.a)(e.url);
                    else {
                      var t = s.a.import(this.is);
                      this._importPath =
                        (t && t.assetpath) ||
                        Object.getPrototypeOf(this.prototype).constructor
                          .importPath;
                    }
                  }
                  return this._importPath;
                },
              },
            ]),
            _(
              n,
              [
                {
                  key: "_initializeProperties",
                  value: function() {
                    0,
                      this.constructor.finalize(),
                      this.constructor._finalizeTemplate(this.localName),
                      w(x(n.prototype), "_initializeProperties", this).call(
                        this
                      ),
                      (this.rootPath = r.c),
                      (this.importPath = this.constructor.importPath);
                    var e = (function(e) {
                      if (
                        !e.hasOwnProperty(
                          JSCompiler_renameProperty("__propertyDefaults", e)
                        )
                      ) {
                        e.__propertyDefaults = null;
                        var t = e._properties;
                        for (var n in t) {
                          var r = t[n];
                          "value" in r &&
                            ((e.__propertyDefaults =
                              e.__propertyDefaults || {}),
                            (e.__propertyDefaults[n] = r));
                        }
                      }
                      return e.__propertyDefaults;
                    })(this.constructor);
                    if (e)
                      for (var t in e) {
                        var i = e[t];
                        if (!this.hasOwnProperty(t)) {
                          var o =
                            "function" == typeof i.value
                              ? i.value.call(this)
                              : i.value;
                          this._hasAccessor(t)
                            ? this._setPendingProperty(t, o, !0)
                            : (this[t] = o);
                        }
                      }
                  },
                },
                {
                  key: "connectedCallback",
                  value: function() {
                    window.ShadyCSS &&
                      this._template &&
                      window.ShadyCSS.styleElement(this),
                      w(x(n.prototype), "connectedCallback", this).call(this);
                  },
                },
                {
                  key: "ready",
                  value: function() {
                    this._template &&
                      ((this.root = this._stampTemplate(this._template)),
                      (this.$ = this.root.$)),
                      w(x(n.prototype), "ready", this).call(this);
                  },
                },
                {
                  key: "_readyClients",
                  value: function() {
                    this._template && (this.root = this._attachDom(this.root)),
                      w(x(n.prototype), "_readyClients", this).call(this);
                  },
                },
                {
                  key: "_attachDom",
                  value: function(e) {
                    if (this.attachShadow)
                      return e
                        ? (this.shadowRoot ||
                            this.attachShadow({ mode: "open" }),
                          this.shadowRoot.appendChild(e),
                          this.shadowRoot)
                        : null;
                    throw new Error(
                      "ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`."
                    );
                  },
                },
                {
                  key: "updateStyles",
                  value: function(e) {
                    window.ShadyCSS && window.ShadyCSS.styleSubtree(this, e);
                  },
                },
                {
                  key: "resolveUrl",
                  value: function(e, t) {
                    return (
                      !t &&
                        this.importPath &&
                        (t = Object(a.c)(this.importPath)),
                      Object(a.c)(e, t)
                    );
                  },
                },
              ],
              [
                {
                  key: "_processStyleText",
                  value: function(e, t) {
                    return Object(a.b)(e, t);
                  },
                },
                {
                  key: "_finalizeTemplate",
                  value: function(e) {
                    var t = this.prototype._template;
                    if (t && !t.__polymerFinalized) {
                      t.__polymerFinalized = !0;
                      var n = this.importPath;
                      !(function(e, t, n, r) {
                        for (
                          var i = t.content.querySelectorAll("style"),
                            a = Object(o.c)(t),
                            s = Object(o.b)(n),
                            c = t.content.firstElementChild,
                            l = 0;
                          l < s.length;
                          l++
                        ) {
                          var u = s[l];
                          (u.textContent = e._processStyleText(
                            u.textContent,
                            r
                          )),
                            t.content.insertBefore(u, c);
                        }
                        for (var d = 0, p = 0; p < a.length; p++) {
                          var f = a[p],
                            h = i[d];
                          h !== f
                            ? ((f = f.cloneNode(!0)),
                              h.parentNode.insertBefore(f, h))
                            : d++,
                            (f.textContent = e._processStyleText(
                              f.textContent,
                              r
                            ));
                        }
                        window.ShadyCSS &&
                          window.ShadyCSS.prepareTemplate(t, n);
                      })(this, t, e, n ? Object(a.c)(n) : ""),
                        this.prototype._bindTemplate(t);
                    }
                  },
                },
                {
                  key: "_parseTemplateContent",
                  value: function(e, t, r) {
                    return (
                      (t.dynamicFns = t.dynamicFns || this._properties),
                      w(x(n), "_parseTemplateContent", this).call(this, e, t, r)
                    );
                  },
                },
              ]
            ),
            n
          );
        })();
      }),
      j = [];
  },
  function(e, t, n) {
    "use strict";
    n(7);
    var r = n(8),
      i = n(2),
      o = n(22),
      a = n(47);
    function s(e) {
      return (s =
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function l(e, t) {
      return !t || ("object" !== s(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function u(e) {
      return (u = Object.setPrototypeOf
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
    var p = { "dom-if": !0, "dom-repeat": !0 };
    function f(e) {
      var t = e.getAttribute("is");
      if (t && p[t]) {
        var n = e;
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
    function h(e, t) {
      var n = t.parentInfo && h(e, t.parentInfo);
      if (!n) return e;
      for (var r = n.firstChild, i = 0; r; r = r.nextSibling)
        if (t.parentIndex === i++) return r;
    }
    function b(e, t, n, r) {
      r.id && (t[r.id] = n);
    }
    function m(e, t, n) {
      if (n.events && n.events.length)
        for (var r, i = 0, o = n.events; i < o.length && (r = o[i]); i++)
          e._addMethodEventListenerToNode(t, r.name, r.value, e);
    }
    function v(e, t, n) {
      n.templateInfo && (t._templateInfo = n.templateInfo);
    }
    var y = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              l(this, u(n).apply(this, arguments))
            );
          }
          var r, i, o;
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
            })(n, e),
            (r = n),
            (o = [
              {
                key: "_parseTemplate",
                value: function(e, t) {
                  if (!e._templateInfo) {
                    var n = (e._templateInfo = {});
                    (n.nodeInfoList = []),
                      (n.stripWhiteSpace =
                        (t && t.stripWhiteSpace) ||
                        e.hasAttribute("strip-whitespace")),
                      this._parseTemplateContent(e, n, { parent: null });
                  }
                  return e._templateInfo;
                },
              },
              {
                key: "_parseTemplateContent",
                value: function(e, t, n) {
                  return this._parseTemplateNode(e.content, t, n);
                },
              },
              {
                key: "_parseTemplateNode",
                value: function(e, t, n) {
                  var r,
                    i = e;
                  return (
                    "template" != i.localName ||
                    i.hasAttribute("preserve-content")
                      ? "slot" === i.localName && (t.hasInsertionPoint = !0)
                      : (r = this._parseTemplateNestedTemplate(i, t, n) || r),
                    i.firstChild &&
                      (r = this._parseTemplateChildNodes(i, t, n) || r),
                    i.hasAttributes &&
                      i.hasAttributes() &&
                      (r = this._parseTemplateNodeAttributes(i, t, n) || r),
                    r
                  );
                },
              },
              {
                key: "_parseTemplateChildNodes",
                value: function(e, t, n) {
                  if ("script" !== e.localName && "style" !== e.localName)
                    for (var r, i = e.firstChild, o = 0; i; i = r) {
                      if (
                        ("template" == i.localName && (i = f(i)),
                        (r = i.nextSibling),
                        i.nodeType === Node.TEXT_NODE)
                      ) {
                        for (var a = r; a && a.nodeType === Node.TEXT_NODE; )
                          (i.textContent += a.textContent),
                            (r = a.nextSibling),
                            e.removeChild(a),
                            (a = r);
                        if (t.stripWhiteSpace && !i.textContent.trim()) {
                          e.removeChild(i);
                          continue;
                        }
                      }
                      var s = { parentIndex: o, parentInfo: n };
                      this._parseTemplateNode(i, t, s) &&
                        (s.infoIndex = t.nodeInfoList.push(s) - 1),
                        i.parentNode && o++;
                    }
                },
              },
              {
                key: "_parseTemplateNestedTemplate",
                value: function(e, t, n) {
                  var r = this._parseTemplate(e, t);
                  return (
                    (r.content = e.content.ownerDocument.createDocumentFragment()).appendChild(
                      e.content
                    ),
                    (n.templateInfo = r),
                    !0
                  );
                },
              },
              {
                key: "_parseTemplateNodeAttributes",
                value: function(e, t, n) {
                  for (
                    var r,
                      i = !1,
                      o = Array.from(e.attributes),
                      a = o.length - 1;
                    (r = o[a]);
                    a--
                  )
                    i =
                      this._parseTemplateNodeAttribute(
                        e,
                        t,
                        n,
                        r.name,
                        r.value
                      ) || i;
                  return i;
                },
              },
              {
                key: "_parseTemplateNodeAttribute",
                value: function(e, t, n, r, i) {
                  return "on-" === r.slice(0, 3)
                    ? (e.removeAttribute(r),
                      (n.events = n.events || []),
                      n.events.push({ name: r.slice(3), value: i }),
                      !0)
                    : "id" === r && ((n.id = i), !0);
                },
              },
              {
                key: "_contentForTemplate",
                value: function(e) {
                  var t = e._templateInfo;
                  return (t && t.content) || e.content;
                },
              },
            ]),
            (i = [
              {
                key: "_stampTemplate",
                value: function(e) {
                  e &&
                    !e.content &&
                    window.HTMLTemplateElement &&
                    HTMLTemplateElement.decorate &&
                    HTMLTemplateElement.decorate(e);
                  var t = this.constructor._parseTemplate(e),
                    n = t.nodeInfoList,
                    r = t.content || e.content,
                    i = document.importNode(r, !0);
                  i.__noInsertionPoint = !t.hasInsertionPoint;
                  var o = (i.nodeList = new Array(n.length));
                  i.$ = {};
                  for (var a, s = 0, c = n.length; s < c && (a = n[s]); s++) {
                    var l = (o[s] = h(i, a));
                    b(0, i.$, l, a), v(0, l, a), m(this, l, a);
                  }
                  return (i = i);
                },
              },
              {
                key: "_addMethodEventListenerToNode",
                value: function(e, t, n, r) {
                  var i = (function(e, t, n) {
                    return (
                      (e = e._methodHost || e),
                      function(t) {
                        e[n]
                          ? e[n](t, t.detail)
                          : console.warn(
                              "listener method `" + n + "` not defined"
                            );
                      }
                    );
                  })((r = r || e), 0, n);
                  return this._addEventListenerToNode(e, t, i), i;
                },
              },
              {
                key: "_addEventListenerToNode",
                value: function(e, t, n) {
                  e.addEventListener(t, n);
                },
              },
              {
                key: "_removeEventListenerFromNode",
                value: function(e, t, n) {
                  e.removeEventListener(t, n);
                },
              },
            ]) && c(r.prototype, i),
            o && c(r, o),
            n
          );
        })();
      }),
      g = n(9);
    function _(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function w(e, t, n) {
      return t && k(e.prototype, t), n && k(e, n), e;
    }
    function x(e, t) {
      return !t || ("object" !== C(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function O(e, t, n) {
      return (O =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = j(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function j(e) {
      return (j = Object.setPrototypeOf
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
    function C(e) {
      return (C =
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
    n.d(t, "a", function() {
      return te;
    });
    var P = 0,
      E = {
        COMPUTE: "__computeEffects",
        REFLECT: "__reflectEffects",
        NOTIFY: "__notifyEffects",
        PROPAGATE: "__propagateEffects",
        OBSERVE: "__observeEffects",
        READ_ONLY: "__readOnly",
      },
      A = /[A-Z]/;
    function T(e, t) {
      var n = e[t];
      if (n) {
        if (!e.hasOwnProperty(t))
          for (var r in (n = e[t] = Object.create(e[t])))
            for (
              var i = n[r], o = (n[r] = Array(i.length)), a = 0;
              a < i.length;
              a++
            )
              o[a] = i[a];
      } else n = e[t] = {};
      return n;
    }
    function R(e, t, n, r, i, o) {
      if (t) {
        var a = !1,
          s = P++;
        for (var c in n) z(e, t, s, c, n, r, i, o) && (a = !0);
        return a;
      }
      return !1;
    }
    function z(e, t, n, r, o, a, s, c) {
      var l = !1,
        u = t[s ? Object(i.g)(r) : r];
      if (u)
        for (var d, p = 0, f = u.length; p < f && (d = u[p]); p++)
          (d.info && d.info.lastRun === n) ||
            (s && !I(r, d.trigger)) ||
            (d.info && (d.info.lastRun = n),
            d.fn(e, r, o, a, d.info, s, c),
            (l = !0));
      return l;
    }
    function I(e, t) {
      if (t) {
        var n = t.name;
        return (
          n == e ||
          (t.structured && Object(i.b)(n, e)) ||
          (t.wildcard && Object(i.c)(n, e))
        );
      }
      return !0;
    }
    function N(e, t, n, r, i) {
      var o = "string" == typeof i.method ? e[i.method] : i.method,
        a = i.property;
      o
        ? o.call(e, e.__data[a], r[a])
        : i.dynamicFn ||
          console.warn("observer method `" + i.method + "` not defined");
    }
    function L(e, t, n) {
      var r = Object(i.g)(t);
      return r !== t && (M(e, Object(o.a)(r) + "-changed", n[t], t), !0);
    }
    function M(e, t, n, r) {
      var i = { value: n, queueProperty: !0 };
      r && (i.path = r), e.dispatchEvent(new CustomEvent(t, { detail: i }));
    }
    function F(e, t, n, r, o, a) {
      var s = (a ? Object(i.g)(t) : t) != t ? t : null,
        c = s ? Object(i.a)(e, s) : e.__data[t];
      s && void 0 === c && (c = n[t]), M(e, o.eventName, c, s);
    }
    function D(e, t, n, r, i) {
      var o = e.__data[t];
      g.d && (o = Object(g.d)(o, i.attrName, "attribute", e)),
        e._propertyToAttribute(t, i.attrName, o);
    }
    function B(e, t, n, r, i) {
      var o = $(e, t, n, r, i),
        a = i.methodInfo;
      e.__dataHasAccessor && e.__dataHasAccessor[a]
        ? e._setPendingProperty(a, o, !0)
        : (e[a] = o);
    }
    function H(e, t, n, r, i, a, s) {
      n.bindings = n.bindings || [];
      var c = {
        kind: r,
        target: i,
        parts: a,
        literal: s,
        isCompound: 1 !== a.length,
      };
      if (
        (n.bindings.push(c),
        (function(e) {
          return (
            Boolean(e.target) &&
            "attribute" != e.kind &&
            "text" != e.kind &&
            !e.isCompound &&
            "{" === e.parts[0].mode
          );
        })(c))
      ) {
        var l = c.parts[0],
          u = l.event,
          d = l.negate;
        (c.listenerEvent = u || Object(o.a)(i) + "-changed"),
          (c.listenerNegate = d);
      }
      for (var p = t.nodeInfoList.length, f = 0; f < c.parts.length; f++) {
        var h = c.parts[f];
        (h.compoundIndex = f), V(e, t, c, h, p);
      }
    }
    function V(e, t, n, r, i) {
      if (!r.literal)
        if ("attribute" === n.kind && "-" === n.target[0])
          console.warn(
            "Cannot set attribute " +
              n.target +
              ' because "-" is not a valid attribute starting character'
          );
        else
          for (
            var o = r.dependencies,
              a = { index: i, binding: n, part: r, evaluator: e },
              s = 0;
            s < o.length;
            s++
          ) {
            var c = o[s];
            "string" == typeof c && ((c = Z(c)).wildcard = !0),
              e._addTemplatePropertyEffect(t, c.rootProperty, {
                fn: U,
                info: a,
                trigger: c,
              });
          }
    }
    function U(e, t, n, r, o, a, s) {
      var c = s[o.index],
        l = o.binding,
        u = o.part;
      if (
        a &&
        u.source &&
        t.length > u.source.length &&
        "property" == l.kind &&
        !l.isCompound &&
        c.__isPropertyEffectsClient &&
        c.__dataHasAccessor &&
        c.__dataHasAccessor[l.target]
      ) {
        var d = n[t];
        (t = Object(i.i)(u.source, l.target, t)),
          c._setPendingPropertyOrPath(t, d, !1, !0) && e._enqueueClient(c);
      } else {
        !(function(e, t, n, r, i) {
          (i = (function(e, t, n, r) {
            if (n.isCompound) {
              var i = e.__dataCompoundStorage[n.target];
              (i[r.compoundIndex] = t), (t = i.join(""));
            }
            return (
              "attribute" !== n.kind &&
                (("textContent" !== n.target &&
                  ("value" !== n.target ||
                    ("input" !== e.localName && "textarea" !== e.localName))) ||
                  (t = null == t ? "" : t)),
              t
            );
          })(t, i, n, r)),
            g.d && (i = Object(g.d)(i, n.target, n.kind, t));
          if ("attribute" == n.kind) e._valueToNodeAttribute(t, i, n.target);
          else {
            var o = n.target;
            t.__isPropertyEffectsClient &&
            t.__dataHasAccessor &&
            t.__dataHasAccessor[o]
              ? (t[E.READ_ONLY] && t[E.READ_ONLY][o]) ||
                (t._setPendingProperty(o, i) && e._enqueueClient(t))
              : e._setUnmanagedPropertyToNode(t, o, i);
          }
        })(e, c, l, u, o.evaluator._evaluateBinding(e, u, t, n, r, a));
      }
    }
    function q(e, t) {
      if (t.isCompound) {
        for (
          var n = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}),
            r = t.parts,
            i = new Array(r.length),
            o = 0;
          o < r.length;
          o++
        )
          i[o] = r[o].literal;
        var a = t.target;
        (n[a] = i), t.literal && "property" == t.kind && (e[a] = t.literal);
      }
    }
    function K(e, t, n) {
      if (n.listenerEvent) {
        var r = n.parts[0];
        e.addEventListener(n.listenerEvent, function(e) {
          !(function(e, t, n, r, o) {
            var a,
              s = e.detail,
              c = s && s.path;
            c
              ? ((r = Object(i.i)(n, r, c)), (a = s && s.value))
              : (a = e.currentTarget[n]),
              (a = o ? !a : a),
              (t[E.READ_ONLY] && t[E.READ_ONLY][r]) ||
                !t._setPendingPropertyOrPath(r, a, !0, Boolean(c)) ||
                (s && s.queueProperty) ||
                t._invalidateProperties();
          })(e, t, n.target, r.source, r.negate);
        });
      }
    }
    function X(e, t, n, r, i, o) {
      o = t.static || (o && ("object" !== C(o) || o[t.methodName]));
      for (
        var a,
          s = {
            methodName: t.methodName,
            args: t.args,
            methodInfo: i,
            dynamicFn: o,
          },
          c = 0;
        c < t.args.length && (a = t.args[c]);
        c++
      )
        a.literal ||
          e._addPropertyEffect(a.rootProperty, n, {
            fn: r,
            info: s,
            trigger: a,
          });
      o && e._addPropertyEffect(t.methodName, n, { fn: r, info: s });
    }
    function $(e, t, n, r, i) {
      var o = e._methodHost || e,
        a = o[i.methodName];
      if (a) {
        var s = e._marshalArgs(i.args, t, n);
        return a.apply(o, s);
      }
      i.dynamicFn || console.warn("method `" + i.methodName + "` not defined");
    }
    var W = [],
      Y = new RegExp(
        "(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
        "g"
      );
    function G(e) {
      for (var t = "", n = 0; n < e.length; n++) {
        t += e[n].literal || "";
      }
      return t;
    }
    function J(e) {
      var t = e.match(/([^\s]+?)\(([\s\S]*)\)/);
      if (t) {
        var n = { methodName: t[1], static: !0, args: W };
        return t[2].trim()
          ? (function(e, t) {
              return (
                (t.args = e.map(function(e) {
                  var n = Z(e);
                  return n.literal || (t.static = !1), n;
                }, this)),
                t
              );
            })(t[2].replace(/\\,/g, "&comma;").split(","), n)
          : n;
      }
      return null;
    }
    function Z(e) {
      var t = e
          .trim()
          .replace(/&comma;/g, ",")
          .replace(/\\(.)/g, "$1"),
        n = { name: t, value: "", literal: !1 },
        r = t[0];
      switch (("-" === r && (r = t[1]), r >= "0" && r <= "9" && (r = "#"), r)) {
        case "'":
        case '"':
          (n.value = t.slice(1, -1)), (n.literal = !0);
          break;
        case "#":
          (n.value = Number(t)), (n.literal = !0);
      }
      return (
        n.literal ||
          ((n.rootProperty = Object(i.g)(t)),
          (n.structured = Object(i.d)(t)),
          n.structured &&
            ((n.wildcard = ".*" == t.slice(-2)),
            n.wildcard && (n.name = t.slice(0, -2)))),
        n
      );
    }
    function Q(e, t, n, r) {
      var i = n + ".splices";
      e.notifyPath(i, { indexSplices: r }),
        e.notifyPath(n + ".length", t.length),
        (e.__data[i] = { indexSplices: null });
    }
    function ee(e, t, n, r, i, o) {
      Q(e, t, n, [
        { index: r, addedCount: i, removed: o, object: t, type: "splice" },
      ]);
    }
    var te = Object(r.a)(function(e) {
        var t = y(Object(a.a)(e)),
          n = (function(e) {
            function n() {
              var e;
              return (
                _(this, n),
                ((e = x(this, j(n).call(this))).__isPropertyEffectsClient = !0),
                (e.__dataCounter = 0),
                e.__dataClientsReady,
                e.__dataPendingClients,
                e.__dataToNotify,
                e.__dataLinkedPaths,
                e.__dataHasPaths,
                e.__dataCompoundStorage,
                e.__dataHost,
                e.__dataTemp,
                e.__dataClientsInitialized,
                e.__data,
                e.__dataPending,
                e.__dataOld,
                e.__computeEffects,
                e.__reflectEffects,
                e.__notifyEffects,
                e.__propagateEffects,
                e.__observeEffects,
                e.__readOnly,
                e.__templateInfo,
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
                  t && S(e, t);
              })(n, t),
              w(
                n,
                [
                  {
                    key: "_initializeProperties",
                    value: function() {
                      O(j(n.prototype), "_initializeProperties", this).call(
                        this
                      ),
                        ne.registerHost(this),
                        (this.__dataClientsReady = !1),
                        (this.__dataPendingClients = null),
                        (this.__dataToNotify = null),
                        (this.__dataLinkedPaths = null),
                        (this.__dataHasPaths = !1),
                        (this.__dataCompoundStorage =
                          this.__dataCompoundStorage || null),
                        (this.__dataHost = this.__dataHost || null),
                        (this.__dataTemp = {}),
                        (this.__dataClientsInitialized = !1);
                    },
                  },
                  {
                    key: "_initializeProtoProperties",
                    value: function(e) {
                      (this.__data = Object.create(e)),
                        (this.__dataPending = Object.create(e)),
                        (this.__dataOld = {});
                    },
                  },
                  {
                    key: "_initializeInstanceProperties",
                    value: function(e) {
                      var t = this[E.READ_ONLY];
                      for (var n in e)
                        (t && t[n]) ||
                          ((this.__dataPending = this.__dataPending || {}),
                          (this.__dataOld = this.__dataOld || {}),
                          (this.__data[n] = this.__dataPending[n] = e[n]));
                    },
                  },
                  {
                    key: "_addPropertyEffect",
                    value: function(e, t, n) {
                      this._createPropertyAccessor(e, t == E.READ_ONLY);
                      var r = T(this, t)[e];
                      r || (r = this[t][e] = []), r.push(n);
                    },
                  },
                  {
                    key: "_removePropertyEffect",
                    value: function(e, t, n) {
                      var r = T(this, t)[e],
                        i = r.indexOf(n);
                      i >= 0 && r.splice(i, 1);
                    },
                  },
                  {
                    key: "_hasPropertyEffect",
                    value: function(e, t) {
                      var n = this[t];
                      return Boolean(n && n[e]);
                    },
                  },
                  {
                    key: "_hasReadOnlyEffect",
                    value: function(e) {
                      return this._hasPropertyEffect(e, E.READ_ONLY);
                    },
                  },
                  {
                    key: "_hasNotifyEffect",
                    value: function(e) {
                      return this._hasPropertyEffect(e, E.NOTIFY);
                    },
                  },
                  {
                    key: "_hasReflectEffect",
                    value: function(e) {
                      return this._hasPropertyEffect(e, E.REFLECT);
                    },
                  },
                  {
                    key: "_hasComputedEffect",
                    value: function(e) {
                      return this._hasPropertyEffect(e, E.COMPUTE);
                    },
                  },
                  {
                    key: "_setPendingPropertyOrPath",
                    value: function(e, t, r, o) {
                      if (o || Object(i.g)(Array.isArray(e) ? e[0] : e) !== e) {
                        if (!o) {
                          var a = Object(i.a)(this, e);
                          if (
                            !(e = Object(i.h)(this, e, t)) ||
                            !O(
                              j(n.prototype),
                              "_shouldPropertyChange",
                              this
                            ).call(this, e, t, a)
                          )
                            return !1;
                        }
                        if (
                          ((this.__dataHasPaths = !0),
                          this._setPendingProperty(e, t, r))
                        )
                          return (
                            (function(e, t, n) {
                              var r,
                                o = e.__dataLinkedPaths;
                              if (o)
                                for (var a in o) {
                                  var s = o[a];
                                  Object(i.c)(a, t)
                                    ? ((r = Object(i.i)(a, s, t)),
                                      e._setPendingPropertyOrPath(r, n, !0, !0))
                                    : Object(i.c)(s, t) &&
                                      ((r = Object(i.i)(s, a, t)),
                                      e._setPendingPropertyOrPath(
                                        r,
                                        n,
                                        !0,
                                        !0
                                      ));
                                }
                            })(this, e, t),
                            !0
                          );
                      } else {
                        if (this.__dataHasAccessor && this.__dataHasAccessor[e])
                          return this._setPendingProperty(e, t, r);
                        this[e] = t;
                      }
                      return !1;
                    },
                  },
                  {
                    key: "_setUnmanagedPropertyToNode",
                    value: function(e, t, n) {
                      (n === e[t] && "object" != C(n)) || (e[t] = n);
                    },
                  },
                  {
                    key: "_setPendingProperty",
                    value: function(e, t, n) {
                      var r = this.__dataHasPaths && Object(i.d)(e),
                        o = r ? this.__dataTemp : this.__data;
                      return (
                        !!this._shouldPropertyChange(e, t, o[e]) &&
                        (this.__dataPending ||
                          ((this.__dataPending = {}), (this.__dataOld = {})),
                        e in this.__dataOld ||
                          (this.__dataOld[e] = this.__data[e]),
                        r ? (this.__dataTemp[e] = t) : (this.__data[e] = t),
                        (this.__dataPending[e] = t),
                        (r || (this[E.NOTIFY] && this[E.NOTIFY][e])) &&
                          ((this.__dataToNotify = this.__dataToNotify || {}),
                          (this.__dataToNotify[e] = n)),
                        !0)
                      );
                    },
                  },
                  {
                    key: "_setProperty",
                    value: function(e, t) {
                      this._setPendingProperty(e, t, !0) &&
                        this._invalidateProperties();
                    },
                  },
                  {
                    key: "_invalidateProperties",
                    value: function() {
                      this.__dataReady && this._flushProperties();
                    },
                  },
                  {
                    key: "_enqueueClient",
                    value: function(e) {
                      (this.__dataPendingClients =
                        this.__dataPendingClients || []),
                        e !== this && this.__dataPendingClients.push(e);
                    },
                  },
                  {
                    key: "_flushProperties",
                    value: function() {
                      this.__dataCounter++,
                        O(j(n.prototype), "_flushProperties", this).call(this),
                        this.__dataCounter--;
                    },
                  },
                  {
                    key: "_flushClients",
                    value: function() {
                      this.__dataClientsReady
                        ? this.__enableOrFlushClients()
                        : ((this.__dataClientsReady = !0),
                          this._readyClients(),
                          (this.__dataReady = !0));
                    },
                  },
                  {
                    key: "__enableOrFlushClients",
                    value: function() {
                      var e = this.__dataPendingClients;
                      if (e) {
                        this.__dataPendingClients = null;
                        for (var t = 0; t < e.length; t++) {
                          var n = e[t];
                          n.__dataEnabled
                            ? n.__dataPending && n._flushProperties()
                            : n._enableProperties();
                        }
                      }
                    },
                  },
                  {
                    key: "_readyClients",
                    value: function() {
                      this.__enableOrFlushClients();
                    },
                  },
                  {
                    key: "setProperties",
                    value: function(e, t) {
                      for (var n in e)
                        (!t && this[E.READ_ONLY] && this[E.READ_ONLY][n]) ||
                          this._setPendingPropertyOrPath(n, e[n], !0);
                      this._invalidateProperties();
                    },
                  },
                  {
                    key: "ready",
                    value: function() {
                      this._flushProperties(),
                        this.__dataClientsReady || this._flushClients(),
                        this.__dataPending && this._flushProperties();
                    },
                  },
                  {
                    key: "_propertiesChanged",
                    value: function(e, t, n) {
                      var r = this.__dataHasPaths;
                      (this.__dataHasPaths = !1),
                        (function(e, t, n, r) {
                          var i = e[E.COMPUTE];
                          if (i)
                            for (var o = t; R(e, i, o, n, r); )
                              Object.assign(n, e.__dataOld),
                                Object.assign(t, e.__dataPending),
                                (o = e.__dataPending),
                                (e.__dataPending = null);
                        })(this, t, n, r);
                      var i = this.__dataToNotify;
                      (this.__dataToNotify = null),
                        this._propagatePropertyChanges(t, n, r),
                        this._flushClients(),
                        R(this, this[E.REFLECT], t, n, r),
                        R(this, this[E.OBSERVE], t, n, r),
                        i &&
                          (function(e, t, n, r, i) {
                            var o,
                              a,
                              s = e[E.NOTIFY],
                              c = P++;
                            for (var l in t)
                              t[l] &&
                                (s && z(e, s, c, l, n, r, i)
                                  ? (o = !0)
                                  : i && L(e, l, n) && (o = !0));
                            o &&
                              (a = e.__dataHost) &&
                              a._invalidateProperties &&
                              a._invalidateProperties();
                          })(this, i, t, n, r),
                        1 == this.__dataCounter && (this.__dataTemp = {});
                    },
                  },
                  {
                    key: "_propagatePropertyChanges",
                    value: function(e, t, n) {
                      this[E.PROPAGATE] && R(this, this[E.PROPAGATE], e, t, n);
                      for (var r = this.__templateInfo; r; )
                        R(this, r.propertyEffects, e, t, n, r.nodeList),
                          (r = r.nextTemplateInfo);
                    },
                  },
                  {
                    key: "linkPaths",
                    value: function(e, t) {
                      (e = Object(i.f)(e)),
                        (t = Object(i.f)(t)),
                        (this.__dataLinkedPaths = this.__dataLinkedPaths || {}),
                        (this.__dataLinkedPaths[e] = t);
                    },
                  },
                  {
                    key: "unlinkPaths",
                    value: function(e) {
                      (e = Object(i.f)(e)),
                        this.__dataLinkedPaths &&
                          delete this.__dataLinkedPaths[e];
                    },
                  },
                  {
                    key: "notifySplices",
                    value: function(e, t) {
                      var n = { path: "" };
                      Q(this, Object(i.a)(this, e, n), n.path, t);
                    },
                  },
                  {
                    key: "get",
                    value: function(e, t) {
                      return Object(i.a)(t || this, e);
                    },
                  },
                  {
                    key: "set",
                    value: function(e, t, n) {
                      n
                        ? Object(i.h)(n, e, t)
                        : (this[E.READ_ONLY] && this[E.READ_ONLY][e]) ||
                          (this._setPendingPropertyOrPath(e, t, !0) &&
                            this._invalidateProperties());
                    },
                  },
                  {
                    key: "push",
                    value: function(e) {
                      for (
                        var t = { path: "" },
                          n = Object(i.a)(this, e, t),
                          r = n.length,
                          o = arguments.length,
                          a = new Array(o > 1 ? o - 1 : 0),
                          s = 1;
                        s < o;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      var c = n.push.apply(n, a);
                      return (
                        a.length && ee(this, n, t.path, r, a.length, []), c
                      );
                    },
                  },
                  {
                    key: "pop",
                    value: function(e) {
                      var t = { path: "" },
                        n = Object(i.a)(this, e, t),
                        r = Boolean(n.length),
                        o = n.pop();
                      return r && ee(this, n, t.path, n.length, 0, [o]), o;
                    },
                  },
                  {
                    key: "splice",
                    value: function(e, t, n) {
                      for (
                        var r = arguments.length,
                          o = new Array(r > 3 ? r - 3 : 0),
                          a = 3;
                        a < r;
                        a++
                      )
                        o[a - 3] = arguments[a];
                      var s,
                        c = { path: "" },
                        l = Object(i.a)(this, e, c);
                      return (
                        t < 0
                          ? (t = l.length - Math.floor(-t))
                          : t && (t = Math.floor(t)),
                        (s =
                          2 === arguments.length
                            ? l.splice(t)
                            : l.splice.apply(l, [t, n].concat(o))),
                        (o.length || s.length) &&
                          ee(this, l, c.path, t, o.length, s),
                        s
                      );
                    },
                  },
                  {
                    key: "shift",
                    value: function(e) {
                      var t = { path: "" },
                        n = Object(i.a)(this, e, t),
                        r = Boolean(n.length),
                        o = n.shift();
                      return r && ee(this, n, t.path, 0, 0, [o]), o;
                    },
                  },
                  {
                    key: "unshift",
                    value: function(e) {
                      for (
                        var t = { path: "" },
                          n = Object(i.a)(this, e, t),
                          r = arguments.length,
                          o = new Array(r > 1 ? r - 1 : 0),
                          a = 1;
                        a < r;
                        a++
                      )
                        o[a - 1] = arguments[a];
                      var s = n.unshift.apply(n, o);
                      return (
                        o.length && ee(this, n, t.path, 0, o.length, []), s
                      );
                    },
                  },
                  {
                    key: "notifyPath",
                    value: function(e, t) {
                      var n;
                      if (1 == arguments.length) {
                        var r = { path: "" };
                        (t = Object(i.a)(this, e, r)), (n = r.path);
                      } else n = Array.isArray(e) ? Object(i.f)(e) : e;
                      this._setPendingPropertyOrPath(n, t, !0, !0) &&
                        this._invalidateProperties();
                    },
                  },
                  {
                    key: "_createReadOnlyProperty",
                    value: function(e, t) {
                      var n;
                      this._addPropertyEffect(e, E.READ_ONLY),
                        t &&
                          (this[
                            "_set" +
                              ((n = e), n[0].toUpperCase() + n.substring(1))
                          ] = function(t) {
                            this._setProperty(e, t);
                          });
                    },
                  },
                  {
                    key: "_createPropertyObserver",
                    value: function(e, t, n) {
                      var r = { property: e, method: t, dynamicFn: Boolean(n) };
                      this._addPropertyEffect(e, E.OBSERVE, {
                        fn: N,
                        info: r,
                        trigger: { name: e },
                      }),
                        n &&
                          this._addPropertyEffect(t, E.OBSERVE, {
                            fn: N,
                            info: r,
                            trigger: { name: t },
                          });
                    },
                  },
                  {
                    key: "_createMethodObserver",
                    value: function(e, t) {
                      var n = J(e);
                      if (!n)
                        throw new Error(
                          "Malformed observer expression '" + e + "'"
                        );
                      X(this, n, E.OBSERVE, $, null, t);
                    },
                  },
                  {
                    key: "_createNotifyingProperty",
                    value: function(e) {
                      this._addPropertyEffect(e, E.NOTIFY, {
                        fn: F,
                        info: {
                          eventName: Object(o.a)(e) + "-changed",
                          property: e,
                        },
                      });
                    },
                  },
                  {
                    key: "_createReflectedProperty",
                    value: function(e) {
                      var t = this.constructor.attributeNameForProperty(e);
                      "-" === t[0]
                        ? console.warn(
                            "Property " +
                              e +
                              " cannot be reflected to attribute " +
                              t +
                              ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'
                          )
                        : this._addPropertyEffect(e, E.REFLECT, {
                            fn: D,
                            info: { attrName: t },
                          });
                    },
                  },
                  {
                    key: "_createComputedProperty",
                    value: function(e, t, n) {
                      var r = J(t);
                      if (!r)
                        throw new Error(
                          "Malformed computed expression '" + t + "'"
                        );
                      X(this, r, E.COMPUTE, B, e, n);
                    },
                  },
                  {
                    key: "_marshalArgs",
                    value: function(e, t, n) {
                      for (
                        var r = this.__data, o = [], a = 0, s = e.length;
                        a < s;
                        a++
                      ) {
                        var c = e[a],
                          l = c.name,
                          u = void 0;
                        if (
                          (c.literal
                            ? (u = c.value)
                            : c.structured
                            ? void 0 === (u = Object(i.a)(r, l)) && (u = n[l])
                            : (u = r[l]),
                          c.wildcard)
                        ) {
                          var d = 0 === l.indexOf(t + "."),
                            p = 0 === t.indexOf(l) && !d;
                          o[a] = {
                            path: p ? t : l,
                            value: p ? n[t] : u,
                            base: u,
                          };
                        } else o[a] = u;
                      }
                      return o;
                    },
                  },
                  {
                    key: "_bindTemplate",
                    value: function(e, t) {
                      var n = this.constructor._parseTemplate(e),
                        r = this.__templateInfo == n;
                      if (!r)
                        for (var i in n.propertyEffects)
                          this._createPropertyAccessor(i);
                      if (
                        t &&
                        (((n = Object.create(n)).wasPreBound = r),
                        !r && this.__templateInfo)
                      ) {
                        var o = this.__templateInfoLast || this.__templateInfo;
                        return (
                          (this.__templateInfoLast = o.nextTemplateInfo = n),
                          (n.previousTemplateInfo = o),
                          n
                        );
                      }
                      return (this.__templateInfo = n);
                    },
                  },
                  {
                    key: "_stampTemplate",
                    value: function(e) {
                      ne.beginHosting(this);
                      var t = O(j(n.prototype), "_stampTemplate", this).call(
                        this,
                        e
                      );
                      ne.endHosting(this);
                      var r = this._bindTemplate(e, !0);
                      if (((r.nodeList = t.nodeList), !r.wasPreBound))
                        for (
                          var i = (r.childNodes = []), o = t.firstChild;
                          o;
                          o = o.nextSibling
                        )
                          i.push(o);
                      return (
                        (t.templateInfo = r),
                        (function(e, t) {
                          var n = t.nodeList,
                            r = t.nodeInfoList;
                          if (r.length)
                            for (var i = 0; i < r.length; i++) {
                              var o = r[i],
                                a = n[i],
                                s = o.bindings;
                              if (s)
                                for (var c = 0; c < s.length; c++) {
                                  var l = s[c];
                                  q(a, l), K(a, e, l);
                                }
                              a.__dataHost = e;
                            }
                        })(this, r),
                        this.__dataReady &&
                          R(
                            this,
                            r.propertyEffects,
                            this.__data,
                            null,
                            !1,
                            r.nodeList
                          ),
                        t
                      );
                    },
                  },
                  {
                    key: "_removeBoundDom",
                    value: function(e) {
                      var t = e.templateInfo;
                      t.previousTemplateInfo &&
                        (t.previousTemplateInfo.nextTemplateInfo =
                          t.nextTemplateInfo),
                        t.nextTemplateInfo &&
                          (t.nextTemplateInfo.previousTemplateInfo =
                            t.previousTemplateInfo),
                        this.__templateInfoLast == t &&
                          (this.__templateInfoLast = t.previousTemplateInfo),
                        (t.previousTemplateInfo = t.nextTemplateInfo = null);
                      for (var n = t.childNodes, r = 0; r < n.length; r++) {
                        var i = n[r];
                        i.parentNode.removeChild(i);
                      }
                    },
                  },
                  {
                    key: "PROPERTY_EFFECT_TYPES",
                    get: function() {
                      return E;
                    },
                  },
                ],
                [
                  {
                    key: "addPropertyEffect",
                    value: function(e, t, n) {
                      this.prototype._addPropertyEffect(e, t, n);
                    },
                  },
                  {
                    key: "createPropertyObserver",
                    value: function(e, t, n) {
                      this.prototype._createPropertyObserver(e, t, n);
                    },
                  },
                  {
                    key: "createMethodObserver",
                    value: function(e, t) {
                      this.prototype._createMethodObserver(e, t);
                    },
                  },
                  {
                    key: "createNotifyingProperty",
                    value: function(e) {
                      this.prototype._createNotifyingProperty(e);
                    },
                  },
                  {
                    key: "createReadOnlyProperty",
                    value: function(e, t) {
                      this.prototype._createReadOnlyProperty(e, t);
                    },
                  },
                  {
                    key: "createReflectedProperty",
                    value: function(e) {
                      this.prototype._createReflectedProperty(e);
                    },
                  },
                  {
                    key: "createComputedProperty",
                    value: function(e, t, n) {
                      this.prototype._createComputedProperty(e, t, n);
                    },
                  },
                  {
                    key: "bindTemplate",
                    value: function(e) {
                      return this.prototype._bindTemplate(e);
                    },
                  },
                  {
                    key: "_addTemplatePropertyEffect",
                    value: function(e, t, n) {
                      (e.hostProps = e.hostProps || {})[t] = !0;
                      var r = (e.propertyEffects = e.propertyEffects || {});
                      (r[t] = r[t] || []).push(n);
                    },
                  },
                  {
                    key: "_parseTemplateNode",
                    value: function(e, t, r) {
                      var i = O(j(n), "_parseTemplateNode", this).call(
                        this,
                        e,
                        t,
                        r
                      );
                      if (e.nodeType === Node.TEXT_NODE) {
                        var o = this._parseBindings(e.textContent, t);
                        o &&
                          ((e.textContent = G(o) || " "),
                          H(this, t, r, "text", "textContent", o),
                          (i = !0));
                      }
                      return i;
                    },
                  },
                  {
                    key: "_parseTemplateNodeAttribute",
                    value: function(e, t, r, i, a) {
                      var s = this._parseBindings(a, t);
                      if (s) {
                        var c = i,
                          l = "property";
                        A.test(i)
                          ? (l = "attribute")
                          : "$" == i[i.length - 1] &&
                            ((i = i.slice(0, -1)), (l = "attribute"));
                        var u = G(s);
                        return (
                          u && "attribute" == l && e.setAttribute(i, u),
                          "input" === e.localName &&
                            "value" === c &&
                            e.setAttribute(c, ""),
                          e.removeAttribute(c),
                          "property" === l && (i = Object(o.b)(i)),
                          H(this, t, r, l, i, s, u),
                          !0
                        );
                      }
                      return O(j(n), "_parseTemplateNodeAttribute", this).call(
                        this,
                        e,
                        t,
                        r,
                        i,
                        a
                      );
                    },
                  },
                  {
                    key: "_parseTemplateNestedTemplate",
                    value: function(e, t, r) {
                      var i = O(
                          j(n),
                          "_parseTemplateNestedTemplate",
                          this
                        ).call(this, e, t, r),
                        o = r.templateInfo.hostProps;
                      for (var a in o) {
                        H(this, t, r, "property", "_host_" + a, [
                          { mode: "{", source: a, dependencies: [a] },
                        ]);
                      }
                      return i;
                    },
                  },
                  {
                    key: "_parseBindings",
                    value: function(e, t) {
                      for (var n, r = [], i = 0; null !== (n = Y.exec(e)); ) {
                        n.index > i && r.push({ literal: e.slice(i, n.index) });
                        var o = n[1][0],
                          a = Boolean(n[2]),
                          s = n[3].trim(),
                          c = !1,
                          l = "",
                          u = -1;
                        "{" == o &&
                          (u = s.indexOf("::")) > 0 &&
                          ((l = s.substring(u + 2)),
                          (s = s.substring(0, u)),
                          (c = !0));
                        var d = J(s),
                          p = [];
                        if (d) {
                          for (
                            var f = d.args, h = d.methodName, b = 0;
                            b < f.length;
                            b++
                          ) {
                            var m = f[b];
                            m.literal || p.push(m);
                          }
                          var v = t.dynamicFns;
                          ((v && v[h]) || d.static) &&
                            (p.push(h), (d.dynamicFn = !0));
                        } else p.push(s);
                        r.push({
                          source: s,
                          mode: o,
                          negate: a,
                          customEvent: c,
                          signature: d,
                          dependencies: p,
                          event: l,
                        }),
                          (i = Y.lastIndex);
                      }
                      if (i && i < e.length) {
                        var y = e.substring(i);
                        y && r.push({ literal: y });
                      }
                      return r.length ? r : null;
                    },
                  },
                  {
                    key: "_evaluateBinding",
                    value: function(e, t, n, r, o, a) {
                      var s;
                      return (
                        (s = t.signature
                          ? $(e, n, r, 0, t.signature)
                          : n != t.source
                          ? Object(i.a)(e, t.source)
                          : a && Object(i.d)(n)
                          ? Object(i.a)(e, n)
                          : e.__data[n]),
                        t.negate && (s = !s),
                        s
                      );
                    },
                  },
                ]
              ),
              n
            );
          })();
        return n, n;
      }),
      ne = new ((function() {
        function e() {
          _(this, e), (this.stack = []);
        }
        return (
          w(e, [
            {
              key: "registerHost",
              value: function(e) {
                this.stack.length &&
                  this.stack[this.stack.length - 1]._enqueueClient(e);
              },
            },
            {
              key: "beginHosting",
              value: function(e) {
                this.stack.push(e);
              },
            },
            {
              key: "endHosting",
              value: function(e) {
                var t = this.stack.length;
                t && this.stack[t - 1] == e && this.stack.pop();
              },
            },
          ]),
          e
        );
      })())();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    });
    var r = n(17),
      i = n(6);
    function o(e) {
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
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var s = (function() {
      function e(t, n, r) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.__parts = []),
          (this.template = t),
          (this.processor = n),
          (this.options = r);
      }
      var t, n, s;
      return (
        (t = e),
        (n = [
          {
            key: "update",
            value: function(e) {
              var t = 0,
                n = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var o, a = this.__parts[Symbol.iterator]();
                  !(n = (o = a.next()).done);
                  n = !0
                ) {
                  var s = o.value;
                  void 0 !== s && s.setValue(e[t]), t++;
                }
              } catch (h) {
                (r = !0), (i = h);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (r) throw i;
                }
              }
              var c = !0,
                l = !1,
                u = void 0;
              try {
                for (
                  var d, p = this.__parts[Symbol.iterator]();
                  !(c = (d = p.next()).done);
                  c = !0
                ) {
                  var f = d.value;
                  void 0 !== f && f.commit();
                }
              } catch (h) {
                (l = !0), (u = h);
              } finally {
                try {
                  c || null == p.return || p.return();
                } finally {
                  if (l) throw u;
                }
              }
            },
          },
          {
            key: "_clone",
            value: function() {
              for (
                var e,
                  t = r.a
                    ? this.template.element.content.cloneNode(!0)
                    : document.importNode(this.template.element.content, !0),
                  n = [],
                  a = this.template.parts,
                  s = document.createTreeWalker(t, 133, null, !1),
                  c = 0,
                  l = 0,
                  u = s.nextNode();
                c < a.length;

              )
                if (((e = a[c]), Object(i.d)(e))) {
                  for (; l < e.index; )
                    l++,
                      "TEMPLATE" === u.nodeName &&
                        (n.push(u), (s.currentNode = u.content)),
                      null === (u = s.nextNode()) &&
                        ((s.currentNode = n.pop()), (u = s.nextNode()));
                  if ("node" === e.type) {
                    var d = this.processor.handleTextExpression(this.options);
                    d.insertAfterNode(u.previousSibling), this.__parts.push(d);
                  } else {
                    var p;
                    (p = this.__parts).push.apply(
                      p,
                      o(
                        this.processor.handleAttributeExpressions(
                          u,
                          e.name,
                          e.strings,
                          this.options
                        )
                      )
                    );
                  }
                  c++;
                } else this.__parts.push(void 0), c++;
              return (
                r.a && (document.adoptNode(t), customElements.upgrade(t)), t
              );
            },
          },
        ]) && a(t.prototype, n),
        s && a(t, s),
        e
      );
    })();
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(76),
      i = r;
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return m;
    });
    n(7);
    var r = n(18),
      i = n(9);
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
    function c(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (c = function(e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return l(e, arguments, d(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          u(r, e)
        );
      })(e);
    }
    function l(e, t, n) {
      return (l = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && u(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function u(e, t) {
      return (u =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var p = {},
      f = {};
    function h(e, t) {
      p[e] = f[e.toLowerCase()] = t;
    }
    function b(e) {
      return p[e] || f[e.toLowerCase()];
    }
    var m = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          s(this, d(t).apply(this, arguments))
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
            t && u(e, t);
        })(t, c(HTMLElement)),
        (n = t),
        (l = [
          {
            key: "import",
            value: function(e, t) {
              if (e) {
                var n = b(e);
                return n && t ? n.querySelector(t) : n;
              }
              return null;
            },
          },
          {
            key: "observedAttributes",
            get: function() {
              return ["id"];
            },
          },
        ]),
        (o = [
          {
            key: "attributeChangedCallback",
            value: function(e, t, n, r) {
              t !== n && this.register();
            },
          },
          {
            key: "register",
            value: function(e) {
              if ((e = e || this.id)) {
                if (i.f && void 0 !== b(e))
                  throw (h(e, null),
                  new Error(
                    "strictTemplatePolicy: dom-module ".concat(
                      e,
                      " re-registered"
                    )
                  ));
                (this.id = e),
                  h(e, this),
                  (t = this).querySelector("style") &&
                    console.warn(
                      "dom-module %s has style outside template",
                      t.id
                    );
              }
              var t;
            },
          },
          {
            key: "assetpath",
            get: function() {
              if (!this.__assetpath) {
                var e =
                    window.HTMLImports && HTMLImports.importForElement
                      ? HTMLImports.importForElement(this) || document
                      : this.ownerDocument,
                  t = Object(r.c)(
                    this.getAttribute("assetpath") || "",
                    e.baseURI
                  );
                this.__assetpath = Object(r.a)(t);
              }
              return this.__assetpath;
            },
          },
        ]) && a(n.prototype, o),
        l && a(n, l),
        t
      );
    })();
    (m.prototype.modules = p), customElements.define("dom-module", m);
  },
  function(e, t, n) {
    "use strict";
    n(4), n(73);
    var r = n(3);
    function i() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>',
        ],
        [
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>',
        ]
      );
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
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return f;
    }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "a", function() {
        return m;
      });
    var r = n(40),
      i = n(18);
    function o(e) {
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
    var a = "link[rel=import][type~=css]",
      s = "include",
      c = "shady-unscoped";
    function l(e) {
      return r.a.import(e);
    }
    function u(e) {
      var t = e.body ? e.body : e,
        n = Object(i.b)(t.textContent, e.baseURI),
        r = document.createElement("style");
      return (r.textContent = n), r;
    }
    function d(e) {
      for (var t = e.trim().split(/\s+/), n = [], r = 0; r < t.length; r++)
        n.push.apply(n, o(p(t[r])));
      return n;
    }
    function p(e) {
      var t = l(e);
      if (!t)
        return console.warn("Could not find style data in module named", e), [];
      if (void 0 === t._styles) {
        var n = [];
        n.push.apply(n, o(b(t)));
        var r = t.querySelector("template");
        r && n.push.apply(n, o(f(r, t.assetpath))), (t._styles = n);
      }
      return t._styles;
    }
    function f(e, t) {
      if (!e._styles) {
        for (
          var n = [], r = e.content.querySelectorAll("style"), a = 0;
          a < r.length;
          a++
        ) {
          var c = r[a],
            l = c.getAttribute(s);
          l &&
            n.push.apply(
              n,
              o(
                d(l).filter(function(e, t, n) {
                  return n.indexOf(e) === t;
                })
              )
            ),
            t && (c.textContent = Object(i.b)(c.textContent, t)),
            n.push(c);
        }
        e._styles = n;
      }
      return e._styles;
    }
    function h(e) {
      var t = l(e);
      return t ? b(t) : [];
    }
    function b(e) {
      for (var t = [], n = e.querySelectorAll(a), r = 0; r < n.length; r++) {
        var i = n[r];
        if (i.import) {
          var o = i.import,
            s = i.hasAttribute(c);
          if (s && !o._unscopedStyle) {
            var l = u(o);
            l.setAttribute(c, ""), (o._unscopedStyle = l);
          } else o._style || (o._style = u(o));
          t.push(s ? o._unscopedStyle : o._style);
        }
      }
      return t;
    }
    function m(e) {
      for (var t = e.trim().split(/\s+/), n = "", r = 0; r < t.length; r++)
        n += v(t[r]);
      return n;
    }
    function v(e) {
      var t = l(e);
      if (t && void 0 === t._cssText) {
        var n = y(t),
          r = t.querySelector("template");
        r &&
          (n += (function(e, t) {
            for (var n = "", r = f(e, t), i = 0; i < r.length; i++) {
              var o = r[i];
              o.parentNode && o.parentNode.removeChild(o), (n += o.textContent);
            }
            return n;
          })(r, t.assetpath)),
          (t._cssText = n || null);
      }
      return (
        t || console.warn("Could not find style data in module named", e),
        (t && t._cssText) || ""
      );
    }
    function y(e) {
      for (var t = "", n = b(e), r = 0; r < n.length; r++)
        t += n[r].textContent;
      return t;
    }
  },
  function(e, t, n) {
    "use strict";
    var r = n(13);
    var i = function e() {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
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
    };
    function o(e) {
      return (function e(t, n) {
        var r = n.substring(t.start, t.end - 1);
        t.parsedCssText = t.cssText = r.trim();
        if (t.parent) {
          var i = t.previous ? t.previous.end : t.parent.start;
          r = (r = (r = (function(e) {
            return e.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
              for (var e = arguments[1], t = 6 - e.length; t--; ) e = "0" + e;
              return "\\" + e;
            });
          })((r = n.substring(i, t.start - 1)))).replace(
            u.multipleSpaces,
            " "
          )).substring(r.lastIndexOf(";") + 1);
          var o = (t.parsedSelector = t.selector = r.trim());
          (t.atRule = 0 === o.indexOf(f)),
            t.atRule
              ? 0 === o.indexOf(p)
                ? (t.type = s.MEDIA_RULE)
                : o.match(u.keyframesRule) &&
                  ((t.type = s.KEYFRAMES_RULE),
                  (t.keyframesName = t.selector.split(u.multipleSpaces).pop()))
              : 0 === o.indexOf(d)
              ? (t.type = s.MIXIN_RULE)
              : (t.type = s.STYLE_RULE);
        }
        var a = t.rules;
        if (a)
          for (var c, l = 0, h = a.length; l < h && (c = a[l]); l++) e(c, n);
        return t;
      })(
        (function(e) {
          var t = new i();
          (t.start = 0), (t.end = e.length);
          for (var n = t, r = 0, o = e.length; r < o; r++)
            if (e[r] === c) {
              n.rules || (n.rules = []);
              var a = n,
                s = a.rules[a.rules.length - 1] || null;
              ((n = new i()).start = r + 1),
                (n.parent = a),
                (n.previous = s),
                a.rules.push(n);
            } else e[r] === l && ((n.end = r + 1), (n = n.parent || t));
          return t;
        })((e = e.replace(u.comments, "").replace(u.port, ""))),
        e
      );
    }
    function a(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = "";
      if (e.cssText || e.rules) {
        var i = e.rules;
        if (
          i &&
          !(function(e) {
            var t = e[0];
            return (
              Boolean(t) && Boolean(t.selector) && 0 === t.selector.indexOf(d)
            );
          })(i)
        )
          for (var o, s = 0, p = i.length; s < p && (o = i[s]); s++)
            r = a(o, t, r);
        else
          (r = (r = t
            ? e.cssText
            : (function(e) {
                return (function(e) {
                  return e.replace(u.mixinApply, "").replace(u.varApply, "");
                })(
                  (e = (function(e) {
                    return e.replace(u.customProp, "").replace(u.mixinProp, "");
                  })(e))
                );
              })(e.cssText)).trim()) && (r = "  " + r + "\n");
      }
      return (
        r &&
          (e.selector && (n += e.selector + " " + c + "\n"),
          (n += r),
          e.selector && (n += l + "\n\n")),
        n
      );
    }
    var s = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1e3,
      },
      c = "{",
      l = "}",
      u = {
        comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g,
      },
      d = "--",
      p = "@media",
      f = "@",
      h = n(20),
      b = new Set(),
      m = "shady-unscoped";
    function v(e) {
      var t = e.textContent;
      if (!b.has(t)) {
        b.add(t);
        var n = e.cloneNode(!0);
        document.head.appendChild(n);
      }
    }
    function y(e) {
      return e.hasAttribute(m);
    }
    function g(e, t) {
      return e
        ? ("string" == typeof e && (e = o(e)), t && k(e, t), a(e, r.c))
        : "";
    }
    function _(e) {
      return (
        !e.__cssRules && e.textContent && (e.__cssRules = o(e.textContent)),
        e.__cssRules || null
      );
    }
    function k(e, t, n, r) {
      if (e) {
        var i = !1,
          o = e.type;
        if (r && o === s.MEDIA_RULE) {
          var a = e.selector.match(h.a);
          a && (window.matchMedia(a[1]).matches || (i = !0));
        }
        o === s.STYLE_RULE
          ? t(e)
          : n && o === s.KEYFRAMES_RULE
          ? n(e)
          : o === s.MIXIN_RULE && (i = !0);
        var c = e.rules;
        if (c && !i)
          for (var l, u = 0, d = c.length; u < d && (l = c[u]); u++)
            k(l, t, n, r);
      }
    }
    function w(e, t) {
      for (var n = 0, r = t, i = e.length; r < i; r++)
        if ("(" === e[r]) n++;
        else if (")" === e[r] && 0 == --n) return r;
      return -1;
    }
    window.ShadyDOM && window.ShadyDOM.wrap;
    var x = "css-build";
    function O(e) {
      if (void 0 !== r.a) return r.a;
      if (void 0 === e.__cssBuild) {
        var t = e.getAttribute(x);
        if (t) e.__cssBuild = t;
        else {
          var n = (function(e) {
            var t =
              "template" === e.localName ? e.content.firstChild : e.firstChild;
            if (t instanceof Comment) {
              var n = t.textContent.trim().split(":");
              if (n[0] === x) return n[1];
            }
            return "";
          })(e);
          "" !== n &&
            (function(e) {
              var t =
                "template" === e.localName
                  ? e.content.firstChild
                  : e.firstChild;
              t.parentNode.removeChild(t);
            })(e),
            (e.__cssBuild = n);
        }
      }
      return e.__cssBuild || "";
    }
    function j(e) {
      return "" !== O(e);
    }
    var S = n(28);
    function C(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function E(e, t, n) {
      return t && P(e.prototype, t), n && P(e, n), e;
    }
    var A = /;\s*/m,
      T = /^\s*(initial)|(inherit)\s*$/,
      R = /\s*!important/,
      z = (function() {
        function e() {
          C(this, e), (this._map = {});
        }
        return (
          E(e, [
            {
              key: "set",
              value: function(e, t) {
                (e = e.trim()),
                  (this._map[e] = { properties: t, dependants: {} });
              },
            },
            {
              key: "get",
              value: function(e) {
                return (e = e.trim()), this._map[e] || null;
              },
            },
          ]),
          e
        );
      })(),
      I = null,
      N = (function() {
        function e() {
          C(this, e),
            (this._currentElement = null),
            (this._measureElement = null),
            (this._map = new z());
        }
        return (
          E(e, [
            {
              key: "detectMixin",
              value: function(e) {
                return Object(S.a)(e);
              },
            },
            {
              key: "gatherStyles",
              value: function(e) {
                var t = (function(e) {
                  for (
                    var t = [], n = e.querySelectorAll("style"), i = 0;
                    i < n.length;
                    i++
                  ) {
                    var o = n[i];
                    y(o)
                      ? r.d || (v(o), o.parentNode.removeChild(o))
                      : (t.push(o.textContent), o.parentNode.removeChild(o));
                  }
                  return t.join("").trim();
                })(e.content);
                if (t) {
                  var n = document.createElement("style");
                  return (
                    (n.textContent = t),
                    e.content.insertBefore(n, e.content.firstChild),
                    n
                  );
                }
                return null;
              },
            },
            {
              key: "transformTemplate",
              value: function(e, t) {
                void 0 === e._gatheredStyle &&
                  (e._gatheredStyle = this.gatherStyles(e));
                var n = e._gatheredStyle;
                return n ? this.transformStyle(n, t) : null;
              },
            },
            {
              key: "transformStyle",
              value: function(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  n = _(e);
                return this.transformRules(n, t), (e.textContent = g(n)), n;
              },
            },
            {
              key: "transformCustomStyle",
              value: function(e) {
                var t = this,
                  n = _(e);
                return (
                  k(n, function(e) {
                    ":root" === e.selector && (e.selector = "html"),
                      t.transformRule(e);
                  }),
                  (e.textContent = g(n)),
                  n
                );
              },
            },
            {
              key: "transformRules",
              value: function(e, t) {
                var n = this;
                (this._currentElement = t),
                  k(e, function(e) {
                    n.transformRule(e);
                  }),
                  (this._currentElement = null);
              },
            },
            {
              key: "transformRule",
              value: function(e) {
                (e.cssText = this.transformCssText(e.parsedCssText, e)),
                  ":root" === e.selector && (e.selector = ":host > *");
              },
            },
            {
              key: "transformCssText",
              value: function(e, t) {
                var n = this;
                return (
                  (e = e.replace(h.c, function(e, r, i, o) {
                    return n._produceCssProperties(e, r, i, o, t);
                  })),
                  this._consumeCssProperties(e, t)
                );
              },
            },
            {
              key: "_getInitialValueForProperty",
              value: function(e) {
                return (
                  this._measureElement ||
                    ((this._measureElement = document.createElement("meta")),
                    this._measureElement.setAttribute("apply-shim-measure", ""),
                    (this._measureElement.style.all = "initial"),
                    document.head.appendChild(this._measureElement)),
                  window
                    .getComputedStyle(this._measureElement)
                    .getPropertyValue(e)
                );
              },
            },
            {
              key: "_fallbacksFromPreviousRules",
              value: function(e) {
                for (var t = this, n = e; n.parent; ) n = n.parent;
                var r = {},
                  i = !1;
                return (
                  k(n, function(n) {
                    (i = i || n === e) ||
                      (n.selector === e.selector &&
                        Object.assign(r, t._cssTextToMap(n.parsedCssText)));
                  }),
                  r
                );
              },
            },
            {
              key: "_consumeCssProperties",
              value: function(e, t) {
                for (var n = null; (n = h.b.exec(e)); ) {
                  var r = n[0],
                    i = n[1],
                    o = n.index,
                    a = o + r.indexOf("@apply"),
                    s = o + r.length,
                    c = e.slice(0, a),
                    l = e.slice(s),
                    u = t ? this._fallbacksFromPreviousRules(t) : {};
                  Object.assign(u, this._cssTextToMap(c));
                  var d = this._atApplyToCssProperties(i, u);
                  (e = ""
                    .concat(c)
                    .concat(d)
                    .concat(l)),
                    (h.b.lastIndex = o + d.length);
                }
                return e;
              },
            },
            {
              key: "_atApplyToCssProperties",
              value: function(e, t) {
                e = e.replace(A, "");
                var n = [],
                  r = this._map.get(e);
                if ((r || (this._map.set(e, {}), (r = this._map.get(e))), r)) {
                  var i, o, a;
                  this._currentElement &&
                    (r.dependants[this._currentElement] = !0);
                  var s = r.properties;
                  for (i in s)
                    (o = [i, ": var(", e, "_-_", i]),
                      (a = t && t[i]) && o.push(",", a.replace(R, "")),
                      o.push(")"),
                      R.test(s[i]) && o.push(" !important"),
                      n.push(o.join(""));
                }
                return n.join("; ");
              },
            },
            {
              key: "_replaceInitialOrInherit",
              value: function(e, t) {
                var n = T.exec(t);
                return (
                  n &&
                    (t = n[1]
                      ? this._getInitialValueForProperty(e)
                      : "apply-shim-inherit"),
                  t
                );
              },
            },
            {
              key: "_cssTextToMap",
              value: function(e) {
                for (
                  var t,
                    n,
                    r,
                    i,
                    o =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    a = e.split(";"),
                    s = {},
                    c = 0;
                  c < a.length;
                  c++
                )
                  (r = a[c]) &&
                    (i = r.split(":")).length > 1 &&
                    ((t = i[0].trim()),
                    (n = i.slice(1).join(":")),
                    o && (n = this._replaceInitialOrInherit(t, n)),
                    (s[t] = n));
                return s;
              },
            },
            {
              key: "_invalidateMixinEntry",
              value: function(e) {
                if (I)
                  for (var t in e.dependants)
                    t !== this._currentElement && I(t);
              },
            },
            {
              key: "_produceCssProperties",
              value: function(e, t, n, r, i) {
                var o = this;
                if (
                  (n &&
                    (function e(t, n) {
                      var r = t.indexOf("var(");
                      if (-1 === r) return n(t, "", "", "");
                      var i = w(t, r + 3),
                        o = t.substring(r + 4, i),
                        a = t.substring(0, r),
                        s = e(t.substring(i + 1), n),
                        c = o.indexOf(",");
                      return -1 === c
                        ? n(a, o.trim(), "", s)
                        : n(
                            a,
                            o.substring(0, c).trim(),
                            o.substring(c + 1).trim(),
                            s
                          );
                    })(n, function(e, t) {
                      t && o._map.get(t) && (r = "@apply ".concat(t, ";"));
                    }),
                  !r)
                )
                  return e;
                var a = this._consumeCssProperties("" + r, i),
                  s = e.slice(0, e.indexOf("--")),
                  c = this._cssTextToMap(a, !0),
                  l = c,
                  u = this._map.get(t),
                  d = u && u.properties;
                d
                  ? (l = Object.assign(Object.create(d), c))
                  : this._map.set(t, l);
                var p,
                  f,
                  h = [],
                  b = !1;
                for (p in l)
                  void 0 === (f = c[p]) && (f = "initial"),
                    !d || p in d || (b = !0),
                    h.push(
                      ""
                        .concat(t)
                        .concat("_-_")
                        .concat(p, ": ")
                        .concat(f)
                    );
                return (
                  b && this._invalidateMixinEntry(u),
                  u && (u.properties = l),
                  n && (s = "".concat(e, ";").concat(s)),
                  "".concat(s).concat(h.join("; "), ";")
                );
              },
            },
          ]),
          e
        );
      })();
    (N.prototype.detectMixin = N.prototype.detectMixin),
      (N.prototype.transformStyle = N.prototype.transformStyle),
      (N.prototype.transformCustomStyle = N.prototype.transformCustomStyle),
      (N.prototype.transformRules = N.prototype.transformRules),
      (N.prototype.transformRule = N.prototype.transformRule),
      (N.prototype.transformTemplate = N.prototype.transformTemplate),
      (N.prototype._separator = "_-_"),
      Object.defineProperty(N.prototype, "invalidCallback", {
        get: function() {
          return I;
        },
        set: function(e) {
          I = e;
        },
      });
    var L = N,
      M = {},
      F = "_applyShimCurrentVersion",
      D = "_applyShimNextVersion",
      B = "_applyShimValidatingVersion",
      H = Promise.resolve();
    function V(e) {
      var t = M[e];
      t &&
        (function(e) {
          (e[F] = e[F] || 0), (e[B] = e[B] || 0), (e[D] = (e[D] || 0) + 1);
        })(t);
    }
    function U(e) {
      return e[F] === e[D];
    }
    function q(e) {
      return !U(e) && e[B] === e[D];
    }
    function K(e) {
      (e[B] = e[D]),
        e._validating ||
          ((e._validating = !0),
          H.then(function() {
            (e[F] = e[D]), (e._validating = !1);
          }));
    }
    n(63);
    function X(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var $ = new L(),
      W = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.customStyleInterface = null),
            ($.invalidCallback = V);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "ensure",
              value: function() {
                var e = this;
                this.customStyleInterface ||
                  (window.ShadyCSS.CustomStyleInterface &&
                    ((this.customStyleInterface =
                      window.ShadyCSS.CustomStyleInterface),
                    (this.customStyleInterface.transformCallback = function(e) {
                      $.transformCustomStyle(e);
                    }),
                    (this.customStyleInterface.validateCallback = function() {
                      requestAnimationFrame(function() {
                        e.customStyleInterface.enqueued &&
                          e.flushCustomStyles();
                      });
                    })));
              },
            },
            {
              key: "prepareTemplate",
              value: function(e, t) {
                if ((this.ensure(), !j(e))) {
                  M[t] = e;
                  var n = $.transformTemplate(e, t);
                  e._styleAst = n;
                }
              },
            },
            {
              key: "flushCustomStyles",
              value: function() {
                if ((this.ensure(), this.customStyleInterface)) {
                  var e = this.customStyleInterface.processStyles();
                  if (this.customStyleInterface.enqueued) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t],
                        r = this.customStyleInterface.getStyleForCustomStyle(n);
                      r && $.transformCustomStyle(r);
                    }
                    this.customStyleInterface.enqueued = !1;
                  }
                }
              },
            },
            {
              key: "styleSubtree",
              value: function(e, t) {
                if ((this.ensure(), t && Object(S.c)(e, t), e.shadowRoot)) {
                  this.styleElement(e);
                  for (
                    var n = e.shadowRoot.children || e.shadowRoot.childNodes,
                      r = 0;
                    r < n.length;
                    r++
                  )
                    this.styleSubtree(n[r]);
                } else
                  for (
                    var i = e.children || e.childNodes, o = 0;
                    o < i.length;
                    o++
                  )
                    this.styleSubtree(i[o]);
              },
            },
            {
              key: "styleElement",
              value: function(e) {
                this.ensure();
                var t = (function(e) {
                    var t = e.localName,
                      n = "",
                      r = "";
                    return (
                      t
                        ? t.indexOf("-") > -1
                          ? (n = t)
                          : ((r = t),
                            (n =
                              (e.getAttribute && e.getAttribute("is")) || ""))
                        : ((n = e.is), (r = e.extends)),
                      { is: n, typeExtension: r }
                    );
                  })(e).is,
                  n = M[t];
                if ((!n || !j(n)) && n && !U(n)) {
                  q(n) || (this.prepareTemplate(n, t), K(n));
                  var r = e.shadowRoot;
                  if (r) {
                    var i = r.querySelector("style");
                    i &&
                      ((i.__cssRules = n._styleAst),
                      (i.textContent = g(n._styleAst)));
                  }
                }
              },
            },
            {
              key: "styleDocument",
              value: function(e) {
                this.ensure(), this.styleSubtree(document.body, e);
              },
            },
          ]) && X(t.prototype, n),
          r && X(t, r),
          e
        );
      })();
    if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
      var Y = new W(),
        G = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
      (window.ShadyCSS = {
        prepareTemplate: function(e, t, n) {
          Y.flushCustomStyles(), Y.prepareTemplate(e, t);
        },
        prepareTemplateStyles: function(e, t, n) {
          window.ShadyCSS.prepareTemplate(e, t, n);
        },
        prepareTemplateDom: function(e, t) {},
        styleSubtree: function(e, t) {
          Y.flushCustomStyles(), Y.styleSubtree(e, t);
        },
        styleElement: function(e) {
          Y.flushCustomStyles(), Y.styleElement(e);
        },
        styleDocument: function(e) {
          Y.flushCustomStyles(), Y.styleDocument(e);
        },
        getComputedStyleValue: function(e, t) {
          return Object(S.b)(e, t);
        },
        flushCustomStyles: function() {
          Y.flushCustomStyles();
        },
        nativeCss: r.c,
        nativeShadow: r.d,
        cssBuild: r.a,
        disableRuntime: r.b,
      }),
        G && (window.ShadyCSS.CustomStyleInterface = G);
    }
    window.ShadyCSS.ApplyShim = $;
    var J = n(36),
      Z = n(45),
      Q = n(47),
      ee = n(8);
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
    function re(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ie(e, t, n) {
      return t && re(e.prototype, t), n && re(e, n), e;
    }
    function oe(e, t) {
      return (oe =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function ae(e, t, n) {
      return (ae =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = se(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function se(e) {
      return (se = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var ce = /:host\(:dir\((ltr|rtl)\)\)/g,
      le = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,
      ue = [],
      de = null,
      pe = "";
    function fe() {
      pe = document.documentElement.getAttribute("dir");
    }
    function he(e) {
      e.__autoDirOptOut || e.setAttribute("dir", pe);
    }
    function be() {
      fe(), (pe = document.documentElement.getAttribute("dir"));
      for (var e = 0; e < ue.length; e++) he(ue[e]);
    }
    var me = Object(ee.a)(function(e) {
      de ||
        (fe(),
        (de = new MutationObserver(be)).observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["dir"],
        }));
      var t = Object(Q.a)(e),
        n = (function(e) {
          function n() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((e = ne(this, se(n).call(this))).__autoDirOptOut = !1),
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
                t && oe(e, t);
            })(n, t),
            ie(n, null, [
              {
                key: "_processStyleText",
                value: function(e, t) {
                  return (
                    (e = ae(se(n), "_processStyleText", this).call(this, e, t)),
                    (e = this._replaceDirInCssText(e))
                  );
                },
              },
              {
                key: "_replaceDirInCssText",
                value: function(e) {
                  var t = e;
                  return (
                    e !==
                      (t = (t = t.replace(ce, ':host([dir="$1"])')).replace(
                        le,
                        ':host([dir="$2"]) $1'
                      )) && (this.__activateDir = !0),
                    t
                  );
                },
              },
            ]),
            ie(n, [
              {
                key: "ready",
                value: function() {
                  ae(se(n.prototype), "ready", this).call(this),
                    (this.__autoDirOptOut = this.hasAttribute("dir"));
                },
              },
              {
                key: "connectedCallback",
                value: function() {
                  t.prototype.connectedCallback &&
                    ae(se(n.prototype), "connectedCallback", this).call(this),
                    this.constructor.__activateDir &&
                      (de && de.takeRecords().length && be(),
                      ue.push(this),
                      he(this));
                },
              },
              {
                key: "disconnectedCallback",
                value: function() {
                  if (
                    (t.prototype.disconnectedCallback &&
                      ae(se(n.prototype), "disconnectedCallback", this).call(
                        this
                      ),
                    this.constructor.__activateDir)
                  ) {
                    var e = ue.indexOf(this);
                    e > -1 && ue.splice(e, 1);
                  }
                },
              },
            ]),
            n
          );
        })();
      return (n.__activateDir = !1), n;
    });
    n(61);
    function ve() {
      document.body.removeAttribute("unresolved");
    }
    "interactive" === document.readyState || "complete" === document.readyState
      ? ve()
      : window.addEventListener("DOMContentLoaded", ve);
    var ye = n(1),
      ge = n(35),
      _e = n(21),
      ke = n(11),
      we = n(2);
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
    function Oe(e) {
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
    function je(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Se(e, t) {
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
    function Ce(e, t, n) {
      return (Ce =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = Pe(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
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
    function Ee(e, t) {
      return (Ee =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return Te;
    });
    var Ae = window.ShadyCSS,
      Te = Object(ee.a)(function(e) {
        var t = me(Object(Z.a)(Object(J.a)(e))),
          n = { x: "pan-x", y: "pan-y", none: "none", all: "auto" },
          r = (function(e) {
            function r() {
              var e;
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r),
                (e = Se(this, Pe(r).call(this))).isAttached,
                e.__boundListeners,
                e._debouncers,
                e._applyListeners(),
                e
              );
            }
            var i, o, a;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Ee(e, t);
              })(r, t),
              (i = r),
              (a = [
                {
                  key: "importMeta",
                  get: function() {
                    return this.prototype.importMeta;
                  },
                },
              ]),
              (o = [
                { key: "created", value: function() {} },
                {
                  key: "connectedCallback",
                  value: function() {
                    Ce(Pe(r.prototype), "connectedCallback", this).call(this),
                      (this.isAttached = !0),
                      this.attached();
                  },
                },
                { key: "attached", value: function() {} },
                {
                  key: "disconnectedCallback",
                  value: function() {
                    Ce(Pe(r.prototype), "disconnectedCallback", this).call(
                      this
                    ),
                      (this.isAttached = !1),
                      this.detached();
                  },
                },
                { key: "detached", value: function() {} },
                {
                  key: "attributeChangedCallback",
                  value: function(e, t, n, i) {
                    t !== n &&
                      (Ce(
                        Pe(r.prototype),
                        "attributeChangedCallback",
                        this
                      ).call(this, e, t, n, i),
                      this.attributeChanged(e, t, n));
                  },
                },
                { key: "attributeChanged", value: function(e, t, n) {} },
                {
                  key: "_initializeProperties",
                  value: function() {
                    var e = Object.getPrototypeOf(this);
                    e.hasOwnProperty("__hasRegisterFinished") ||
                      ((e.__hasRegisterFinished = !0), this._registered()),
                      Ce(Pe(r.prototype), "_initializeProperties", this).call(
                        this
                      ),
                      (this.root = this),
                      this.created();
                  },
                },
                { key: "_registered", value: function() {} },
                {
                  key: "ready",
                  value: function() {
                    this._ensureAttributes(),
                      Ce(Pe(r.prototype), "ready", this).call(this);
                  },
                },
                { key: "_ensureAttributes", value: function() {} },
                { key: "_applyListeners", value: function() {} },
                {
                  key: "serialize",
                  value: function(e) {
                    return this._serializeValue(e);
                  },
                },
                {
                  key: "deserialize",
                  value: function(e, t) {
                    return this._deserializeValue(e, t);
                  },
                },
                {
                  key: "reflectPropertyToAttribute",
                  value: function(e, t, n) {
                    this._propertyToAttribute(e, t, n);
                  },
                },
                {
                  key: "serializeValueToAttribute",
                  value: function(e, t, n) {
                    this._valueToNodeAttribute(n || this, e, t);
                  },
                },
                {
                  key: "extend",
                  value: function(e, t) {
                    if (!e || !t) return e || t;
                    for (
                      var n, r = Object.getOwnPropertyNames(t), i = 0;
                      i < r.length && (n = r[i]);
                      i++
                    ) {
                      var o = Object.getOwnPropertyDescriptor(t, n);
                      o && Object.defineProperty(e, n, o);
                    }
                    return e;
                  },
                },
                {
                  key: "mixin",
                  value: function(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  },
                },
                {
                  key: "chainObject",
                  value: function(e, t) {
                    return e && t && e !== t && (e.__proto__ = t), e;
                  },
                },
                {
                  key: "instanceTemplate",
                  value: function(e) {
                    var t = this.constructor._contentForTemplate(e);
                    return document.importNode(t, !0);
                  },
                },
                {
                  key: "fire",
                  value: function(e, t, n) {
                    (n = n || {}), (t = null == t ? {} : t);
                    var r = new Event(e, {
                      bubbles: void 0 === n.bubbles || n.bubbles,
                      cancelable: Boolean(n.cancelable),
                      composed: void 0 === n.composed || n.composed,
                    });
                    return (r.detail = t), (n.node || this).dispatchEvent(r), r;
                  },
                },
                {
                  key: "listen",
                  value: function(e, t, n) {
                    e = e || this;
                    var r =
                        this.__boundListeners ||
                        (this.__boundListeners = new WeakMap()),
                      i = r.get(e);
                    i || ((i = {}), r.set(e, i));
                    var o = t + n;
                    i[o] ||
                      (i[o] = this._addMethodEventListenerToNode(
                        e,
                        t,
                        n,
                        this
                      ));
                  },
                },
                {
                  key: "unlisten",
                  value: function(e, t, n) {
                    e = e || this;
                    var r =
                        this.__boundListeners && this.__boundListeners.get(e),
                      i = t + n,
                      o = r && r[i];
                    o &&
                      (this._removeEventListenerFromNode(e, t, o),
                      (r[i] = null));
                  },
                },
                {
                  key: "setScrollDirection",
                  value: function(e, t) {
                    Object(ge.f)(t || this, n[e] || "auto");
                  },
                },
                {
                  key: "$$",
                  value: function(e) {
                    return this.root.querySelector(e);
                  },
                },
                {
                  key: "distributeContent",
                  value: function() {
                    window.ShadyDOM && this.shadowRoot && ShadyDOM.flush();
                  },
                },
                {
                  key: "getEffectiveChildNodes",
                  value: function() {
                    return Object(ye.a)(this).getEffectiveChildNodes();
                  },
                },
                {
                  key: "queryDistributedElements",
                  value: function(e) {
                    return Object(ye.a)(this).queryDistributedElements(e);
                  },
                },
                {
                  key: "getEffectiveChildren",
                  value: function() {
                    return this.getEffectiveChildNodes().filter(function(e) {
                      return e.nodeType === Node.ELEMENT_NODE;
                    });
                  },
                },
                {
                  key: "getEffectiveTextContent",
                  value: function() {
                    for (
                      var e, t = this.getEffectiveChildNodes(), n = [], r = 0;
                      (e = t[r]);
                      r++
                    )
                      e.nodeType !== Node.COMMENT_NODE && n.push(e.textContent);
                    return n.join("");
                  },
                },
                {
                  key: "queryEffectiveChildren",
                  value: function(e) {
                    var t = this.queryDistributedElements(e);
                    return t && t[0];
                  },
                },
                {
                  key: "queryAllEffectiveChildren",
                  value: function(e) {
                    return this.queryDistributedElements(e);
                  },
                },
                {
                  key: "getContentChildNodes",
                  value: function(e) {
                    var t = this.root.querySelector(e || "slot");
                    return t ? Object(ye.a)(t).getDistributedNodes() : [];
                  },
                },
                {
                  key: "getContentChildren",
                  value: function(e) {
                    return this.getContentChildNodes(e).filter(function(e) {
                      return e.nodeType === Node.ELEMENT_NODE;
                    });
                  },
                },
                {
                  key: "isLightDescendant",
                  value: function(e) {
                    return (
                      this !== e &&
                      this.contains(e) &&
                      this.getRootNode() === e.getRootNode()
                    );
                  },
                },
                {
                  key: "isLocalDescendant",
                  value: function(e) {
                    return this.root === e.getRootNode();
                  },
                },
                { key: "scopeSubtree", value: function(e, t) {} },
                {
                  key: "getComputedStyleValue",
                  value: function(e) {
                    return Ae.getComputedStyleValue(this, e);
                  },
                },
                {
                  key: "debounce",
                  value: function(e, t, n) {
                    return (
                      (this._debouncers = this._debouncers || {}),
                      (this._debouncers[e] = _e.a.debounce(
                        this._debouncers[e],
                        n > 0 ? ke.d.after(n) : ke.c,
                        t.bind(this)
                      ))
                    );
                  },
                },
                {
                  key: "isDebouncerActive",
                  value: function(e) {
                    this._debouncers = this._debouncers || {};
                    var t = this._debouncers[e];
                    return !(!t || !t.isActive());
                  },
                },
                {
                  key: "flushDebouncer",
                  value: function(e) {
                    this._debouncers = this._debouncers || {};
                    var t = this._debouncers[e];
                    t && t.flush();
                  },
                },
                {
                  key: "cancelDebouncer",
                  value: function(e) {
                    this._debouncers = this._debouncers || {};
                    var t = this._debouncers[e];
                    t && t.cancel();
                  },
                },
                {
                  key: "async",
                  value: function(e, t) {
                    return t > 0
                      ? ke.d.run(e.bind(this), t)
                      : ~ke.c.run(e.bind(this));
                  },
                },
                {
                  key: "cancelAsync",
                  value: function(e) {
                    e < 0 ? ke.c.cancel(~e) : ke.d.cancel(e);
                  },
                },
                {
                  key: "create",
                  value: function(e, t) {
                    var n = document.createElement(e);
                    if (t)
                      if (n.setProperties) n.setProperties(t);
                      else for (var r in t) n[r] = t[r];
                    return n;
                  },
                },
                {
                  key: "elementMatches",
                  value: function(e, t) {
                    return Object(ye.b)(t || this, e);
                  },
                },
                {
                  key: "toggleAttribute",
                  value: function(e, t) {
                    var n = this;
                    return (
                      3 === arguments.length && (n = arguments[2]),
                      1 == arguments.length && (t = !n.hasAttribute(e)),
                      t
                        ? (n.setAttribute(e, ""), !0)
                        : (n.removeAttribute(e), !1)
                    );
                  },
                },
                {
                  key: "toggleClass",
                  value: function(e, t, n) {
                    (n = n || this),
                      1 == arguments.length && (t = !n.classList.contains(e)),
                      t ? n.classList.add(e) : n.classList.remove(e);
                  },
                },
                {
                  key: "transform",
                  value: function(e, t) {
                    ((t = t || this).style.webkitTransform = e),
                      (t.style.transform = e);
                  },
                },
                {
                  key: "translate3d",
                  value: function(e, t, n, r) {
                    (r = r || this),
                      this.transform(
                        "translate3d(" + e + "," + t + "," + n + ")",
                        r
                      );
                  },
                },
                {
                  key: "arrayDelete",
                  value: function(e, t) {
                    var n;
                    if (Array.isArray(e)) {
                      if ((n = e.indexOf(t)) >= 0) return e.splice(n, 1);
                    } else if ((n = Object(we.a)(this, e).indexOf(t)) >= 0)
                      return this.splice(e, n, 1);
                    return null;
                  },
                },
                {
                  key: "_logger",
                  value: function(e, t) {
                    var n;
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
                        (n = console)[e].apply(n, Oe(t));
                    }
                  },
                },
                {
                  key: "_log",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._logger("log", t);
                  },
                },
                {
                  key: "_warn",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._logger("warn", t);
                  },
                },
                {
                  key: "_error",
                  value: function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    this._logger("error", t);
                  },
                },
                {
                  key: "_logf",
                  value: function(e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    return ["[%s::%s]", this.is, e].concat(n);
                  },
                },
                {
                  key: "domHost",
                  get: function() {
                    var e = this.getRootNode();
                    return e instanceof DocumentFragment ? e.host : e;
                  },
                },
              ]) && je(i.prototype, o),
              a && je(i, a),
              r
            );
          })();
        return (r.prototype.is = ""), r;
      });
  },
  function(e, t, n) {
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
        '\n<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>',
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
    var a = document.createElement("style");
    (a.textContent = "[hidden] { display: none !important; }"),
      document.head.appendChild(a);
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return d;
    });
    n(7);
    var r = n(8),
      i = n(35);
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
    function c(e, t, n) {
      return (c =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = l(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function l(e) {
      return (l = Object.setPrototypeOf
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
    var d = Object(r.a)(function(e) {
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
        var r, o, d;
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
          })(n, e),
          (r = n),
          (o = [
            {
              key: "_addEventListenerToNode",
              value: function(e, t, r) {
                Object(i.b)(e, t, r) ||
                  c(l(n.prototype), "_addEventListenerToNode", this).call(
                    this,
                    e,
                    t,
                    r
                  );
              },
            },
            {
              key: "_removeEventListenerFromNode",
              value: function(e, t, r) {
                Object(i.e)(e, t, r) ||
                  c(l(n.prototype), "_removeEventListenerFromNode", this).call(
                    this,
                    e,
                    t,
                    r
                  );
              },
            },
          ]) && a(r.prototype, o),
          d && a(r, d),
          n
        );
      })();
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    n(4);
    var r = n(5);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          e[" "](t),
          (this.type = (t && t.type) || "default"),
          (this.key = t && t.key),
          t && "value" in t && (this.value = t.value);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "byKey",
            value: function(e) {
              return (this.key = e), this.value;
            },
          },
          {
            key: "value",
            get: function() {
              var t = this.type,
                n = this.key;
              if (t && n) return e.types[t] && e.types[t][n];
            },
            set: function(t) {
              var n = this.type,
                r = this.key;
              n &&
                r &&
                ((n = e.types[n] = e.types[n] || {}),
                null == t ? delete n[r] : (n[r] = t));
            },
          },
          {
            key: "list",
            get: function() {
              if (this.type) {
                var t = e.types[this.type];
                return t
                  ? Object.keys(t).map(function(e) {
                      return a[this.type][e];
                    }, this)
                  : [];
              }
            },
          },
        ]) && i(t.prototype, n),
        r && i(t, r),
        e
      );
    })();
    (o[" "] = function() {}), (o.types = {});
    var a = o.types;
    Object(r.a)({
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
        var r = new o({ type: e, key: t });
        return (
          void 0 !== n && n !== r.value
            ? (r.value = n)
            : this.value !== r.value && (this.value = r.value),
          r
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
      return m;
    });
    n(7);
    var r = n(8),
      i = n(22),
      o = n(48);
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
    function l(e, t, n) {
      return (l =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = u(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function u(e) {
      return (u = Object.setPrototypeOf
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
    for (var p = {}, f = HTMLElement.prototype; f; ) {
      for (var h = Object.getOwnPropertyNames(f), b = 0; b < h.length; b++)
        p[h[b]] = !0;
      f = Object.getPrototypeOf(f);
    }
    var m = Object(r.a)(function(e) {
      var t = Object(o.a)(e);
      return (function(e) {
        function n() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            c(this, u(n).apply(this, arguments))
          );
        }
        var r, o, f;
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
          })(n, t),
          (r = n),
          (f = [
            {
              key: "createPropertiesForAttributes",
              value: function() {
                for (var e = this.observedAttributes, t = 0; t < e.length; t++)
                  this.prototype._createPropertyAccessor(Object(i.b)(e[t]));
              },
            },
            {
              key: "attributeNameForProperty",
              value: function(e) {
                return Object(i.a)(e);
              },
            },
          ]),
          (o = [
            {
              key: "_initializeProperties",
              value: function() {
                this.__dataProto &&
                  (this._initializeProtoProperties(this.__dataProto),
                  (this.__dataProto = null)),
                  l(u(n.prototype), "_initializeProperties", this).call(this);
              },
            },
            {
              key: "_initializeProtoProperties",
              value: function(e) {
                for (var t in e) this._setProperty(t, e[t]);
              },
            },
            {
              key: "_ensureAttribute",
              value: function(e, t) {
                this.hasAttribute(e) || this._valueToNodeAttribute(this, t, e);
              },
            },
            {
              key: "_serializeValue",
              value: function(e) {
                switch (a(e)) {
                  case "object":
                    if (e instanceof Date) return e.toString();
                    if (e)
                      try {
                        return JSON.stringify(e);
                      } catch (t) {
                        return "";
                      }
                  default:
                    return l(u(n.prototype), "_serializeValue", this).call(
                      this,
                      e
                    );
                }
              },
            },
            {
              key: "_deserializeValue",
              value: function(e, t) {
                var r;
                switch (t) {
                  case Object:
                    try {
                      r = JSON.parse(e);
                    } catch (i) {
                      r = e;
                    }
                    break;
                  case Array:
                    try {
                      r = JSON.parse(e);
                    } catch (i) {
                      (r = null),
                        console.warn(
                          "Polymer::Attributes: couldn't decode Array as JSON: ".concat(
                            e
                          )
                        );
                    }
                    break;
                  case Date:
                    (r = isNaN(e) ? String(e) : Number(e)), (r = new Date(r));
                    break;
                  default:
                    r = l(u(n.prototype), "_deserializeValue", this).call(
                      this,
                      e,
                      t
                    );
                }
                return r;
              },
            },
            {
              key: "_definePropertyAccessor",
              value: function(e, t) {
                !(function(e, t) {
                  if (!p[t]) {
                    var n = e[t];
                    void 0 !== n &&
                      (e.__data
                        ? e._setPendingProperty(t, n)
                        : (e.__dataProto
                            ? e.hasOwnProperty(
                                JSCompiler_renameProperty("__dataProto", e)
                              ) ||
                              (e.__dataProto = Object.create(e.__dataProto))
                            : (e.__dataProto = {}),
                          (e.__dataProto[t] = n)));
                  }
                })(this, e),
                  l(u(n.prototype), "_definePropertyAccessor", this).call(
                    this,
                    e,
                    t
                  );
              },
            },
            {
              key: "_hasAccessor",
              value: function(e) {
                return this.__dataHasAccessor && this.__dataHasAccessor[e];
              },
            },
            {
              key: "_isPropertyPending",
              value: function(e) {
                return Boolean(this.__dataPending && e in this.__dataPending);
              },
            },
          ]) && s(r.prototype, o),
          f && s(r, f),
          n
        );
      })();
    });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return p;
    });
    n(7);
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function l(e, t, n) {
      return t && c(e.prototype, t), n && c(e, n), e;
    }
    function u(e, t) {
      return (u =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var d = n(11).c,
      p = Object(r.a)(function(e) {
        return (function(t) {
          function n() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((e = o(this, s(n).call(this))).__dataEnabled = !1),
              (e.__dataReady = !1),
              (e.__dataInvalid = !1),
              (e.__data = {}),
              (e.__dataPending = null),
              (e.__dataOld = null),
              (e.__dataInstanceProps = null),
              (e.__serializing = !1),
              e._initializeProperties(),
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
                t && u(e, t);
            })(n, e),
            l(
              n,
              [
                {
                  key: "_createPropertyAccessor",
                  value: function(e, t) {
                    this._addPropertyToAttributeMap(e),
                      this.hasOwnProperty("__dataHasAccessor") ||
                        (this.__dataHasAccessor = Object.assign(
                          {},
                          this.__dataHasAccessor
                        )),
                      this.__dataHasAccessor[e] ||
                        ((this.__dataHasAccessor[e] = !0),
                        this._definePropertyAccessor(e, t));
                  },
                },
                {
                  key: "_addPropertyToAttributeMap",
                  value: function(e) {
                    if (
                      (this.hasOwnProperty("__dataAttributes") ||
                        (this.__dataAttributes = Object.assign(
                          {},
                          this.__dataAttributes
                        )),
                      !this.__dataAttributes[e])
                    ) {
                      var t = this.constructor.attributeNameForProperty(e);
                      this.__dataAttributes[t] = e;
                    }
                  },
                },
                {
                  key: "_definePropertyAccessor",
                  value: function(e, t) {
                    Object.defineProperty(this, e, {
                      get: function() {
                        return this._getProperty(e);
                      },
                      set: t
                        ? function() {}
                        : function(t) {
                            this._setProperty(e, t);
                          },
                    });
                  },
                },
              ],
              [
                {
                  key: "createProperties",
                  value: function(e) {
                    var t = this.prototype;
                    for (var n in e) n in t || t._createPropertyAccessor(n);
                  },
                },
                {
                  key: "attributeNameForProperty",
                  value: function(e) {
                    return e.toLowerCase();
                  },
                },
                { key: "typeForProperty", value: function(e) {} },
              ]
            ),
            l(n, [
              {
                key: "ready",
                value: function() {
                  (this.__dataReady = !0), this._flushProperties();
                },
              },
              {
                key: "_initializeProperties",
                value: function() {
                  for (var e in this.__dataHasAccessor)
                    this.hasOwnProperty(e) &&
                      ((this.__dataInstanceProps =
                        this.__dataInstanceProps || {}),
                      (this.__dataInstanceProps[e] = this[e]),
                      delete this[e]);
                },
              },
              {
                key: "_initializeInstanceProperties",
                value: function(e) {
                  Object.assign(this, e);
                },
              },
              {
                key: "_setProperty",
                value: function(e, t) {
                  this._setPendingProperty(e, t) &&
                    this._invalidateProperties();
                },
              },
              {
                key: "_getProperty",
                value: function(e) {
                  return this.__data[e];
                },
              },
              {
                key: "_setPendingProperty",
                value: function(e, t, n) {
                  var r = this.__data[e],
                    i = this._shouldPropertyChange(e, t, r);
                  return (
                    i &&
                      (this.__dataPending ||
                        ((this.__dataPending = {}), (this.__dataOld = {})),
                      !this.__dataOld ||
                        e in this.__dataOld ||
                        (this.__dataOld[e] = r),
                      (this.__data[e] = t),
                      (this.__dataPending[e] = t)),
                    i
                  );
                },
              },
              {
                key: "_invalidateProperties",
                value: function() {
                  var e = this;
                  !this.__dataInvalid &&
                    this.__dataReady &&
                    ((this.__dataInvalid = !0),
                    d.run(function() {
                      e.__dataInvalid &&
                        ((e.__dataInvalid = !1), e._flushProperties());
                    }));
                },
              },
              {
                key: "_enableProperties",
                value: function() {
                  this.__dataEnabled ||
                    ((this.__dataEnabled = !0),
                    this.__dataInstanceProps &&
                      (this._initializeInstanceProperties(
                        this.__dataInstanceProps
                      ),
                      (this.__dataInstanceProps = null)),
                    this.ready());
                },
              },
              {
                key: "_flushProperties",
                value: function() {
                  var e = this.__data,
                    t = this.__dataPending,
                    n = this.__dataOld;
                  this._shouldPropertiesChange(e, t, n) &&
                    ((this.__dataPending = null),
                    (this.__dataOld = null),
                    this._propertiesChanged(e, t, n));
                },
              },
              {
                key: "_shouldPropertiesChange",
                value: function(e, t, n) {
                  return Boolean(t);
                },
              },
              { key: "_propertiesChanged", value: function(e, t, n) {} },
              {
                key: "_shouldPropertyChange",
                value: function(e, t, n) {
                  return n !== t && (n == n || t == t);
                },
              },
              {
                key: "attributeChangedCallback",
                value: function(e, t, r, i) {
                  t !== r && this._attributeToProperty(e, r),
                    a(s(n.prototype), "attributeChangedCallback", this) &&
                      a(s(n.prototype), "attributeChangedCallback", this).call(
                        this,
                        e,
                        t,
                        r,
                        i
                      );
                },
              },
              {
                key: "_attributeToProperty",
                value: function(e, t, n) {
                  if (!this.__serializing) {
                    var r = this.__dataAttributes,
                      i = (r && r[e]) || e;
                    this[i] = this._deserializeValue(
                      t,
                      n || this.constructor.typeForProperty(i)
                    );
                  }
                },
              },
              {
                key: "_propertyToAttribute",
                value: function(e, t, n) {
                  (this.__serializing = !0),
                    (n = arguments.length < 3 ? this[e] : n),
                    this._valueToNodeAttribute(
                      this,
                      n,
                      t || this.constructor.attributeNameForProperty(e)
                    ),
                    (this.__serializing = !1);
                },
              },
              {
                key: "_valueToNodeAttribute",
                value: function(e, t, n) {
                  var r = this._serializeValue(t);
                  void 0 === r ? e.removeAttribute(n) : e.setAttribute(n, r);
                },
              },
              {
                key: "_serializeValue",
                value: function(e) {
                  switch (i(e)) {
                    case "boolean":
                      return e ? "" : void 0;
                    default:
                      return null != e ? e.toString() : void 0;
                  }
                },
              },
              {
                key: "_deserializeValue",
                value: function(e, t) {
                  switch (t) {
                    case Boolean:
                      return null !== e;
                    case Number:
                      return Number(e);
                    default:
                      return e;
                  }
                },
              },
            ]),
            n
          );
        })();
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return l;
    });
    n(7);
    function r(e, t, n) {
      return { index: e, removed: t, addedCount: n };
    }
    var i = 0,
      o = 1,
      a = 2,
      s = 3;
    function c(e, t, n, c, l, d) {
      var p,
        f = 0,
        h = 0,
        b = Math.min(n - t, d - l);
      if (
        (0 == t &&
          0 == l &&
          (f = (function(e, t, n) {
            for (var r = 0; r < n; r++) if (!u(e[r], t[r])) return r;
            return n;
          })(e, c, b)),
        n == e.length &&
          d == c.length &&
          (h = (function(e, t, n) {
            var r = e.length,
              i = t.length,
              o = 0;
            for (; o < n && u(e[--r], t[--i]); ) o++;
            return o;
          })(e, c, b - f)),
        (l += f),
        (d -= h),
        (n -= h) - (t += f) == 0 && d - l == 0)
      )
        return [];
      if (t == n) {
        for (p = r(t, [], 0); l < d; ) p.removed.push(c[l++]);
        return [p];
      }
      if (l == d) return [r(t, [], n - t)];
      var m = (function(e) {
        for (
          var t = e.length - 1, n = e[0].length - 1, r = e[t][n], c = [];
          t > 0 || n > 0;

        )
          if (0 != t)
            if (0 != n) {
              var l = e[t - 1][n - 1],
                u = e[t - 1][n],
                d = e[t][n - 1],
                p = void 0;
              (p = u < d ? (u < l ? u : l) : d < l ? d : l) == l
                ? (l == r ? c.push(i) : (c.push(o), (r = l)), t--, n--)
                : p == u
                ? (c.push(s), t--, (r = u))
                : (c.push(a), n--, (r = d));
            } else c.push(s), t--;
          else c.push(a), n--;
        return c.reverse(), c;
      })(
        (function(e, t, n, r, i, o) {
          for (
            var a = o - i + 1, s = n - t + 1, c = new Array(a), l = 0;
            l < a;
            l++
          )
            (c[l] = new Array(s)), (c[l][0] = l);
          for (var d = 0; d < s; d++) c[0][d] = d;
          for (var p = 1; p < a; p++)
            for (var f = 1; f < s; f++)
              if (u(e[t + f - 1], r[i + p - 1])) c[p][f] = c[p - 1][f - 1];
              else {
                var h = c[p - 1][f] + 1,
                  b = c[p][f - 1] + 1;
                c[p][f] = h < b ? h : b;
              }
          return c;
        })(e, t, n, c, l, d)
      );
      p = void 0;
      for (var v = [], y = t, g = l, _ = 0; _ < m.length; _++)
        switch (m[_]) {
          case i:
            p && (v.push(p), (p = void 0)), y++, g++;
            break;
          case o:
            p || (p = r(y, [], 0)),
              p.addedCount++,
              y++,
              p.removed.push(c[g]),
              g++;
            break;
          case a:
            p || (p = r(y, [], 0)), p.addedCount++, y++;
            break;
          case s:
            p || (p = r(y, [], 0)), p.removed.push(c[g]), g++;
        }
      return p && v.push(p), v;
    }
    function l(e, t) {
      return c(e, 0, e.length, t, 0, t.length);
    }
    function u(e, t) {
      return e === t;
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(19),
      i = function(e, t) {
        return Object(r.a)(e, "hass-notification", t);
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      });
    var r = n(64);
    function i(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    var o = function(e) {
        return Object(r.a)(e.connection, "language");
      },
      a = function(e, t) {
        return Object(r.c)(e.connection, "language", t);
      },
      s = (function() {
        var e,
          t = ((e = regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      t.callWS({
                        type: "frontend/get_translations",
                        language: n,
                      })
                    );
                  case 2:
                    return (r = e.sent), e.abrupt("return", r.resources);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })),
          function() {
            var t = this,
              n = arguments;
            return new Promise(function(r, o) {
              var a = e.apply(t, n);
              function s(e) {
                i(a, r, o, s, c, "next", e);
              }
              function c(e) {
                i(a, r, o, s, c, "throw", e);
              }
              s(void 0);
            });
          });
        return function(e, n) {
          return t.apply(this, arguments);
        };
      })();
  },
  function(e, t, n) {
    "use strict";
    n(4), n(55);
    var r = n(3);
    function i() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>",
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
  function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return a;
      });
    n(4), n(34);
    var r = n(31),
      i = n(1),
      o = {
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
            n = Object(i.a)(t).localTarget;
          this.isLightDescendant(n) ||
            (t.preventDefault(),
            t.stopImmediatePropagation(),
            this._setPressed(!0));
        },
        _spaceKeyUpHandler: function(e) {
          var t = e.detail.keyboardEvent,
            n = Object(i.a)(t).localTarget;
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
      a = [r.a, o];
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    }),
      n.d(t, "b", function() {
        return c;
      });
    var r = n(0);
    function i() {
      var e = a([
        "\n  /* prevent clipping of positioned elements */\n  paper-dialog-scrollable {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: auto;\n    }\n  }\n\n  /* force smooth scrolling for iOS 10 */\n  paper-dialog-scrollable.can-scroll {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  .paper-dialog-buttons {\n    align-items: flex-end;\n    padding: 8px;\n  }\n\n  .paper-dialog-buttons .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    paper-dialog,\n    ha-paper-dialog {\n      margin: 0;\n      width: 100% !important;\n      max-height: calc(100% - 64px);\n\n      position: fixed !important;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n      overflow: scroll;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n  }\n",
      ]);
      return (
        (i = function() {
          return e;
        }),
        e
      );
    }
    function o() {
      var e = a([
        "\n  :host {\n    @apply --paper-font-body1;\n  }\n\n  app-header-layout,\n  ha-app-layout {\n    background-color: var(--primary-background-color);\n  }\n\n  app-header,\n  app-toolbar {\n    background-color: var(--primary-color);\n    font-weight: 400;\n    color: var(--text-primary-color, white);\n  }\n\n  app-toolbar ha-menu-button + [main-title],\n  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],\n  app-toolbar paper-icon-button + [main-title] {\n    margin-left: 24px;\n  }\n\n  h1 {\n    @apply --paper-font-title;\n  }\n\n  button.link {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    text-align: left;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  .card-actions a {\n    text-decoration: none;\n  }\n\n  .card-actions .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n",
      ]);
      return (
        (o = function() {
          return e;
        }),
        e
      );
    }
    function a(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var s = Object(r.c)(o()),
      c = Object(r.c)(i());
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
    var r = n(53),
      i = n(34),
      o = n(67),
      a = {
        observers: ["_focusedChanged(receivedFocusFromKeyboard)"],
        _focusedChanged: function(e) {
          e && this.ensureRipple(),
            this.hasRipple() && (this._ripple.holdDown = e);
        },
        _createRipple: function() {
          var e = o.a._createRipple();
          return (
            (e.id = "ink"),
            e.setAttribute("center", ""),
            e.classList.add("circle"),
            e
          );
        },
      },
      s = [r.a, i.a, o.a, a];
  },
  function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function i(e) {
      var t,
        n,
        i,
        o,
        a = Array.prototype.slice.call(arguments, 1);
      for (t = 0, n = a.length; t < n; t += 1)
        if ((i = a[t])) for (o in i) r.call(i, o) && (e[o] = i[o]);
      return e;
    }
    var o = (function() {
        try {
          return !!Object.defineProperty({}, "a", {});
        } catch (e) {
          return !1;
        }
      })(),
      a = (!o && Object.prototype.__defineGetter__,
      o
        ? Object.defineProperty
        : function(e, t, n) {
            "get" in n && e.__defineGetter__
              ? e.__defineGetter__(t, n.get)
              : (!r.call(e, t) || "value" in n) && (e[t] = n.value);
          }),
      s =
        Object.create ||
        function(e, t) {
          var n, i;
          function o() {}
          for (i in ((o.prototype = e), (n = new o()), t))
            r.call(t, i) && a(n, i, t[i]);
          return n;
        },
      c = l;
    function l(e, t, n) {
      (this.locales = e), (this.formats = t), (this.pluralFn = n);
    }
    function u(e) {
      this.id = e;
    }
    function d(e, t, n, r, i) {
      (this.id = e),
        (this.useOrdinal = t),
        (this.offset = n),
        (this.options = r),
        (this.pluralFn = i);
    }
    function p(e, t, n, r) {
      (this.id = e),
        (this.offset = t),
        (this.numberFormat = n),
        (this.string = r);
    }
    function f(e, t) {
      (this.id = e), (this.options = t);
    }
    (l.prototype.compile = function(e) {
      return (
        (this.pluralStack = []),
        (this.currentPlural = null),
        (this.pluralNumberFormat = null),
        this.compileMessage(e)
      );
    }),
      (l.prototype.compileMessage = function(e) {
        if (!e || "messageFormatPattern" !== e.type)
          throw new Error('Message AST is not of type: "messageFormatPattern"');
        var t,
          n,
          r,
          i = e.elements,
          o = [];
        for (t = 0, n = i.length; t < n; t += 1)
          switch ((r = i[t]).type) {
            case "messageTextElement":
              o.push(this.compileMessageText(r));
              break;
            case "argumentElement":
              o.push(this.compileArgument(r));
              break;
            default:
              throw new Error("Message element does not have a valid type");
          }
        return o;
      }),
      (l.prototype.compileMessageText = function(e) {
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
      (l.prototype.compileArgument = function(e) {
        var t = e.format;
        if (!t) return new u(e.id);
        var n,
          r = this.formats,
          i = this.locales,
          o = this.pluralFn;
        switch (t.type) {
          case "numberFormat":
            return (
              (n = r.number[t.style]),
              { id: e.id, format: new Intl.NumberFormat(i, n).format }
            );
          case "dateFormat":
            return (
              (n = r.date[t.style]),
              { id: e.id, format: new Intl.DateTimeFormat(i, n).format }
            );
          case "timeFormat":
            return (
              (n = r.time[t.style]),
              { id: e.id, format: new Intl.DateTimeFormat(i, n).format }
            );
          case "pluralFormat":
            return (
              (n = this.compileOptions(e)),
              new d(e.id, t.ordinal, t.offset, n, o)
            );
          case "selectFormat":
            return (n = this.compileOptions(e)), new f(e.id, n);
          default:
            throw new Error(
              "Message element does not have a valid format type"
            );
        }
      }),
      (l.prototype.compileOptions = function(e) {
        var t,
          n,
          r,
          i = e.format,
          o = i.options,
          a = {};
        for (
          this.pluralStack.push(this.currentPlural),
            this.currentPlural = "pluralFormat" === i.type ? e : null,
            t = 0,
            n = o.length;
          t < n;
          t += 1
        )
          a[(r = o[t]).selector] = this.compileMessage(r.value);
        return (this.currentPlural = this.pluralStack.pop()), a;
      }),
      (u.prototype.format = function(e) {
        return e || "number" == typeof e
          ? "string" == typeof e
            ? e
            : String(e)
          : "";
      }),
      (d.prototype.getOption = function(e) {
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
      (f.prototype.getOption = function(e) {
        var t = this.options;
        return t[e] || t.other;
      });
    var h = n(77),
      b = n.n(h),
      m = v;
    function v(e, t, n) {
      var r = "string" == typeof e ? v.__parse(e) : e;
      if (!r || "messageFormatPattern" !== r.type)
        throw new TypeError("A message must be provided as a String or AST.");
      (n = this._mergeFormats(v.formats, n)),
        a(this, "_locale", { value: this._resolveLocale(t) });
      var i = this._findPluralRuleFunction(this._locale),
        o = this._compilePattern(r, t, n, i),
        s = this;
      this.format = function(t) {
        try {
          return s._format(o, t);
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
    a(v, "formats", {
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
      a(v, "__localeData__", { value: s(null) }),
      a(v, "__addLocaleData", {
        value: function(e) {
          if (!e || !e.locale)
            throw new Error(
              "Locale data provided to IntlMessageFormat is missing a `locale` property"
            );
          v.__localeData__[e.locale.toLowerCase()] = e;
        },
      }),
      a(v, "__parse", { value: b.a.parse }),
      a(v, "defaultLocale", { enumerable: !0, writable: !0, value: void 0 }),
      (v.prototype.resolvedOptions = function() {
        return { locale: this._locale };
      }),
      (v.prototype._compilePattern = function(e, t, n, r) {
        return new c(t, n, r).compile(e);
      }),
      (v.prototype._findPluralRuleFunction = function(e) {
        for (var t = v.__localeData__, n = t[e.toLowerCase()]; n; ) {
          if (n.pluralRuleFunction) return n.pluralRuleFunction;
          n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw new Error(
          "Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" +
            e
        );
      }),
      (v.prototype._format = function(e, t) {
        var n,
          i,
          o,
          a,
          s,
          c,
          l = "";
        for (n = 0, i = e.length; n < i; n += 1)
          if ("string" != typeof (o = e[n])) {
            if (((a = o.id), !t || !r.call(t, a)))
              throw (((c = new Error(
                "A value must be provided for: " + a
              )).variableId = a),
              c);
            (s = t[a]),
              o.options
                ? (l += this._format(o.getOption(s), t))
                : (l += o.format(s));
          } else l += o;
        return l;
      }),
      (v.prototype._mergeFormats = function(e, t) {
        var n,
          o,
          a = {};
        for (n in e)
          r.call(e, n) &&
            ((a[n] = o = s(e[n])), t && r.call(t, n) && i(o, t[n]));
        return a;
      }),
      (v.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [e]),
          (e = (e || []).concat(v.defaultLocale));
        var t,
          n,
          r,
          i,
          o = v.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1)
          for (r = e[t].toLowerCase().split("-"); r.length; ) {
            if ((i = o[r.join("-")])) return i.locale;
            r.pop();
          }
        var a = e.pop();
        throw new Error(
          "No locale data has been added to IntlMessageFormat for: " +
            e.join(", ") +
            ", or the default locale: " +
            a
        );
      });
    var y = {
      locale: "en",
      pluralRuleFunction: function(e, t) {
        var n = String(e).split("."),
          r = !n[1],
          i = Number(n[0]) == e,
          o = i && n[0].slice(-1),
          a = i && n[0].slice(-2);
        return t
          ? 1 == o && 11 != a
            ? "one"
            : 2 == o && 12 != a
            ? "two"
            : 3 == o && 13 != a
            ? "few"
            : "other"
          : 1 == e && r
          ? "one"
          : "other";
      },
    };
    m.__addLocaleData(y), (m.defaultLocale = "en");
    var g = m;
    n.d(t, "a", function() {
      return _;
    }),
      n.d(t, "b", function() {
        return k;
      });
    var _ = function(e, t, n, r) {
        return (
          (e._localizationCache = {}),
          function(i) {
            if (!(i && n && t && n[t])) return "";
            var o = n[t][i];
            if (!o) return "";
            var a = i + o,
              s = e._localizationCache[a];
            s || ((s = new g(o, t, r)), (e._localizationCache[a] = s));
            for (
              var c = {},
                l = arguments.length,
                u = new Array(l > 1 ? l - 1 : 0),
                d = 1;
              d < l;
              d++
            )
              u[d - 1] = arguments[d];
            for (var p = 0; p < u.length; p += 2) c[u[p]] = u[p + 1];
            try {
              return s.format(c);
            } catch (f) {
              return "Translation " + f;
            }
          }
        );
      },
      k = function(e, t, n) {
        var r = [t];
        return (
          n &&
            Object.keys(n).forEach(function(e) {
              r.push(e), r.push(n[e]);
            }),
          e.apply(void 0, r)
        );
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    n(4);
    var r = {
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
      return o;
    });
    n(4);
    var r = n(46),
      i = null,
      o = {
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
          i = new r.a({ type: "validator" });
        },
        _invalidChanged: function() {
          this.invalid
            ? this.setAttribute("aria-invalid", "true")
            : this.removeAttribute("aria-invalid");
        },
        get _validator() {
          return i && i.byKey(this.validator);
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
      return l;
    });
    n(7);
    var r = !1,
      i = [],
      o = [];
    function a() {
      (r = !0),
        requestAnimationFrame(function() {
          (r = !1),
            s(i),
            setTimeout(function() {
              !(function(e) {
                for (var t = 0, n = e.length; t < n; t++) c(e.shift());
              })(o);
            });
        });
    }
    function s(e) {
      for (; e.length; ) c(e.shift());
    }
    function c(e) {
      var t = e[0],
        n = e[1],
        r = e[2];
      try {
        n.apply(t, r);
      } catch (i) {
        setTimeout(function() {
          throw i;
        });
      }
    }
    function l(e, t, n) {
      r || a(), o.push([e, t, n]);
    }
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return c;
    });
    n(7);
    var r = n(49),
      i = n(11);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    function s(e) {
      return "slot" === e.localName;
    }
    var c = (function() {
      function e(t, n) {
        var r = this;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._shadyChildrenObserver = null),
          (this._nativeChildrenObserver = null),
          (this._connected = !1),
          (this._target = t),
          (this.callback = n),
          (this._effectiveNodes = []),
          (this._observer = null),
          (this._scheduled = !1),
          (this._boundSchedule = function() {
            r._schedule();
          }),
          this.connect(),
          this._schedule();
      }
      return (
        a(e, null, [
          {
            key: "getFlattenedNodes",
            value: function(e) {
              return s(e)
                ? (e = e).assignedNodes({ flatten: !0 })
                : Array.from(e.childNodes)
                    .map(function(e) {
                      return s(e)
                        ? (e = e).assignedNodes({ flatten: !0 })
                        : [e];
                    })
                    .reduce(function(e, t) {
                      return e.concat(t);
                    }, []);
            },
          },
        ]),
        a(e, [
          {
            key: "connect",
            value: function() {
              var e = this;
              s(this._target)
                ? this._listenSlots([this._target])
                : this._target.children &&
                  (this._listenSlots(this._target.children),
                  window.ShadyDOM
                    ? (this._shadyChildrenObserver = ShadyDOM.observeChildren(
                        this._target,
                        function(t) {
                          e._processMutations(t);
                        }
                      ))
                    : ((this._nativeChildrenObserver = new MutationObserver(
                        function(t) {
                          e._processMutations(t);
                        }
                      )),
                      this._nativeChildrenObserver.observe(this._target, {
                        childList: !0,
                      }))),
                (this._connected = !0);
            },
          },
          {
            key: "disconnect",
            value: function() {
              s(this._target)
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
            },
          },
          {
            key: "_schedule",
            value: function() {
              var e = this;
              this._scheduled ||
                ((this._scheduled = !0),
                i.c.run(function() {
                  return e.flush();
                }));
            },
          },
          {
            key: "_processMutations",
            value: function(e) {
              this._processSlotMutations(e), this.flush();
            },
          },
          {
            key: "_processSlotMutations",
            value: function(e) {
              if (e)
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.addedNodes && this._listenSlots(n.addedNodes),
                    n.removedNodes && this._unlistenSlots(n.removedNodes);
                }
            },
          },
          {
            key: "flush",
            value: function() {
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
              for (
                var e,
                  t = {
                    target: this._target,
                    addedNodes: [],
                    removedNodes: [],
                  },
                  n = this.constructor.getFlattenedNodes(this._target),
                  i = Object(r.a)(n, this._effectiveNodes),
                  o = 0;
                o < i.length && (e = i[o]);
                o++
              )
                for (
                  var a, s = 0;
                  s < e.removed.length && (a = e.removed[s]);
                  s++
                )
                  t.removedNodes.push(a);
              for (var c, l = 0; l < i.length && (c = i[l]); l++)
                for (var u = c.index; u < c.index + c.addedCount; u++)
                  t.addedNodes.push(n[u]);
              this._effectiveNodes = n;
              var d = !1;
              return (
                (t.addedNodes.length || t.removedNodes.length) &&
                  ((d = !0), this.callback.call(this._target, t)),
                d
              );
            },
          },
          {
            key: "_listenSlots",
            value: function(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                s(n) && n.addEventListener("slotchange", this._boundSchedule);
              }
            },
          },
          {
            key: "_unlistenSlots",
            value: function(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                s(n) &&
                  n.removeEventListener("slotchange", this._boundSchedule);
              }
            },
          },
        ]),
        e
      );
    })();
  },
  function(e, t, n) {
    "use strict";
    var r,
      i = null,
      o = (window.HTMLImports && window.HTMLImports.whenReady) || null;
    function a(e) {
      requestAnimationFrame(function() {
        o
          ? o(e)
          : (i ||
              ((i = new Promise(function(e) {
                r = e;
              })),
              "complete" === document.readyState
                ? r()
                : document.addEventListener("readystatechange", function() {
                    "complete" === document.readyState && r();
                  })),
            i.then(function() {
              e && e();
            }));
      });
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
    n.d(t, "a", function() {
      return d;
    });
    var c = "__shadyCSSCachedStyle",
      l = null,
      u = null,
      d = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.customStyles = []),
            (this.enqueued = !1),
            a(function() {
              window.ShadyCSS.flushCustomStyles &&
                window.ShadyCSS.flushCustomStyles();
            });
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "enqueueDocumentValidation",
              value: function() {
                !this.enqueued && u && ((this.enqueued = !0), a(u));
              },
            },
            {
              key: "addCustomStyle",
              value: function(e) {
                e.__seenByShadyCSS ||
                  ((e.__seenByShadyCSS = !0),
                  this.customStyles.push(e),
                  this.enqueueDocumentValidation());
              },
            },
            {
              key: "getStyleForCustomStyle",
              value: function(e) {
                return e[c] ? e[c] : e.getStyle ? e.getStyle() : e;
              },
            },
            {
              key: "processStyles",
              value: function() {
                for (var e = this.customStyles, t = 0; t < e.length; t++) {
                  var n = e[t];
                  if (!n[c]) {
                    var r = this.getStyleForCustomStyle(n);
                    if (r) {
                      var i = r.__appliedElement || r;
                      l && l(i), (n[c] = i);
                    }
                  }
                }
                return e;
              },
            },
          ]) && s(t.prototype, n),
          r && s(t, r),
          e
        );
      })();
    (d.prototype.addCustomStyle = d.prototype.addCustomStyle),
      (d.prototype.getStyleForCustomStyle = d.prototype.getStyleForCustomStyle),
      (d.prototype.processStyles = d.prototype.processStyles),
      Object.defineProperties(d.prototype, {
        transformCallback: {
          get: function() {
            return l;
          },
          set: function(e) {
            l = e;
          },
        },
        validateCallback: {
          get: function() {
            return u;
          },
          set: function(e) {
            var t = !1;
            u || (t = !0), (u = e), t && this.enqueueDocumentValidation();
          },
        },
      });
  },
  function(e, t, n) {
    "use strict";
    var r = n(12);
    function i(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function o(e) {
      return function() {
        var t = this,
          n = arguments;
        return new Promise(function(r, o) {
          var a = e.apply(t, n);
          function s(e) {
            i(a, r, o, s, c, "next", e);
          }
          function c(e) {
            i(a, r, o, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function a(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function s(e) {
      return function() {
        var t = this,
          n = arguments;
        return new Promise(function(r, i) {
          var o = e.apply(t, n);
          function s(e) {
            a(o, r, i, s, c, "next", e);
          }
          function c(e) {
            a(o, r, i, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    n.d(t, "a", function() {
      return c;
    }),
      n.d(t, "c", function() {
        return l;
      }),
      n.d(t, "b", function() {
        return u;
      });
    var c = (function() {
        var e = s(
          regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      t.sendMessagePromise({
                        type: "frontend/get_user_data",
                        key: n,
                      })
                    );
                  case 2:
                    return (r = e.sent), e.abrupt("return", r.value);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })(),
      l = (function() {
        var e = s(
          regeneratorRuntime.mark(function e(t, n, r) {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      t.sendMessagePromise({
                        type: "frontend/set_user_data",
                        key: n,
                        value: r,
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t, n, r) {
          return e.apply(this, arguments);
        };
      })(),
      u = function(e, t) {
        return (function(e, t, n, i, a) {
          var s = "".concat(n, "-optimistic"),
            c = Object(r.h)(
              t,
              n,
              i,
              ((l = o(
                regeneratorRuntime.mark(function e(n, r) {
                  var i;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = a ? a(t, r) : void 0),
                            (t[s] = r),
                            e.abrupt("return", function() {
                              i &&
                                i.then(function(e) {
                                  return e();
                                }),
                                (t[s] = void 0);
                            })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function(e, t) {
                return l.apply(this, arguments);
              })
            );
          var l;
          return Object.assign({}, c, {
            save: ((u = o(
              regeneratorRuntime.mark(function n(r) {
                var i, o;
                return regeneratorRuntime.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (i = t[s]) && ((o = i.state), i.setState(r, !0)),
                            (n.prev = 2),
                            (n.next = 5),
                            e(t, r)
                          );
                        case 5:
                          return n.abrupt("return", n.sent);
                        case 8:
                          throw ((n.prev = 8),
                          (n.t0 = n.catch(2)),
                          i && i.setState(o, !0),
                          n.t0);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 8]]
                );
              })
            )),
            function(e) {
              return u.apply(this, arguments);
            }),
          });
          var u;
        })(
          function(n, r) {
            return l(e, t, r);
          },
          e,
          "_frontendUserData-".concat(t),
          function() {
            return c(e, t);
          }
        );
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return o;
      });
    var r = "".concat(location.protocol, "//").concat(location.host),
      i = function(e, t) {
        return e.callWS({ type: "auth/sign_path", path: t });
      },
      o = function() {
        return fetch("/auth/providers", { credentials: "same-origin" });
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    n(4), n(108);
    var r = n(53),
      i = n(1),
      o = {
        properties: {
          noink: { type: Boolean, observer: "_noinkChanged" },
          _rippleContainer: { type: Object },
        },
        _buttonStateChanged: function() {
          this.focused && this.ensureRipple();
        },
        _downHandler: function(e) {
          r.b._downHandler.call(this, e), this.pressed && this.ensureRipple(e);
        },
        ensureRipple: function(e) {
          if (!this.hasRipple()) {
            (this._ripple = this._createRipple()),
              (this._ripple.noink = this.noink);
            var t = this._rippleContainer || this.root;
            if ((t && Object(i.a)(t).appendChild(this._ripple), e)) {
              var n = Object(i.a)(this._rippleContainer || this),
                r = Object(i.a)(e).rootTarget;
              n.deepContains(r) && this._ripple.uiDownAction(e);
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
      return r;
    });
    n(4);
    var r = {
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
      return d;
    }),
      n.d(t, "a", function() {
        return f;
      });
    var r = n(43);
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
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
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
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var u = {
      attached: !0,
      detached: !0,
      ready: !0,
      created: !0,
      beforeRegister: !0,
      registered: !0,
      attributeChanged: !0,
      behaviors: !0,
    };
    function d(e, t) {
      if (!e) return (t = t);
      (t = Object(r.a)(t)), Array.isArray(e) || (e = [e]);
      var n = t.prototype.behaviors;
      return (
        (t = (function e(t, n) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i && (n = Array.isArray(i) ? e(i, n) : p(i, n));
          }
          return n;
        })(
          (e = (function e(t, n, r) {
            n = n || [];
            for (var i = t.length - 1; i >= 0; i--) {
              var o = t[i];
              o
                ? Array.isArray(o)
                  ? e(o, n)
                  : n.indexOf(o) < 0 && (!r || r.indexOf(o) < 0) && n.unshift(o)
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
    function p(e, t) {
      var n = (function(n) {
        function r() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            a(this, c(r).apply(this, arguments))
          );
        }
        var i, u, d;
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
          })(r, t),
          (i = r),
          (d = [
            {
              key: "properties",
              get: function() {
                return e.properties;
              },
            },
            {
              key: "observers",
              get: function() {
                return e.observers;
              },
            },
          ]),
          (u = [
            {
              key: "created",
              value: function() {
                s(c(r.prototype), "created", this).call(this),
                  e.created && e.created.call(this);
              },
            },
            {
              key: "_registered",
              value: function() {
                s(c(r.prototype), "_registered", this).call(this),
                  e.beforeRegister &&
                    e.beforeRegister.call(Object.getPrototypeOf(this)),
                  e.registered &&
                    e.registered.call(Object.getPrototypeOf(this));
              },
            },
            {
              key: "_applyListeners",
              value: function() {
                if (
                  (s(c(r.prototype), "_applyListeners", this).call(this),
                  e.listeners)
                )
                  for (var t in e.listeners)
                    this._addMethodEventListenerToNode(this, t, e.listeners[t]);
              },
            },
            {
              key: "_ensureAttributes",
              value: function() {
                if (e.hostAttributes)
                  for (var t in e.hostAttributes)
                    this._ensureAttribute(t, e.hostAttributes[t]);
                s(c(r.prototype), "_ensureAttributes", this).call(this);
              },
            },
            {
              key: "ready",
              value: function() {
                s(c(r.prototype), "ready", this).call(this),
                  e.ready && e.ready.call(this);
              },
            },
            {
              key: "attached",
              value: function() {
                s(c(r.prototype), "attached", this).call(this),
                  e.attached && e.attached.call(this);
              },
            },
            {
              key: "detached",
              value: function() {
                s(c(r.prototype), "detached", this).call(this),
                  e.detached && e.detached.call(this);
              },
            },
            {
              key: "attributeChanged",
              value: function(t, n, i) {
                s(c(r.prototype), "attributeChanged", this).call(this, t, n, i),
                  e.attributeChanged && e.attributeChanged.call(this, t, n, i);
              },
            },
          ]) && o(i.prototype, u),
          d && o(i, d),
          r
        );
      })();
      for (var r in ((n.generatedFrom = e), e))
        if (!(r in u)) {
          var i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(n.prototype, r, i);
        }
      return n;
    }
    var f = function(e, t) {
      e || console.warn("Polymer's Class function requires `info` argument");
      var n = e.behaviors
          ? d(e.behaviors, HTMLElement)
          : Object(r.a)(HTMLElement),
        i = p(e, t ? t(n) : n);
      return (i.is = e.is), i;
    };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var r = n(10),
      i = new WeakMap(),
      o = Object(r.f)(function(e) {
        return function(t) {
          if (
            !(t instanceof r.a) ||
            t instanceof r.c ||
            "class" !== t.committer.name ||
            t.committer.parts.length > 1
          )
            throw new Error(
              "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
            );
          var n = t.committer,
            o = n.element;
          i.has(t) || (o.className = n.strings.join(" "));
          var a = o.classList,
            s = i.get(t);
          for (var c in s) c in e || a.remove(c);
          for (var l in e) {
            var u = e[l];
            if (!s || u !== s[l]) a[u ? "add" : "remove"](l);
          }
          i.set(t, e);
        };
      });
  },
  function(e, t, n) {
    "use strict";
    var r = n(63),
      i = n(28),
      o = n(13),
      a = new r.a();
    window.ShadyCSS ||
      (window.ShadyCSS = {
        prepareTemplate: function(e, t, n) {},
        prepareTemplateDom: function(e, t) {},
        prepareTemplateStyles: function(e, t, n) {},
        styleSubtree: function(e, t) {
          a.processStyles(), Object(i.c)(e, t);
        },
        styleElement: function(e) {
          a.processStyles();
        },
        styleDocument: function(e) {
          a.processStyles(), Object(i.c)(document.body, e);
        },
        getComputedStyleValue: function(e, t) {
          return Object(i.b)(e, t);
        },
        flushCustomStyles: function() {},
        nativeCss: o.c,
        nativeShadow: o.d,
        cssBuild: o.a,
        disableRuntime: o.b,
      }),
      (window.ShadyCSS.CustomStyleInterface = a);
    var s = n(42);
    function c(e) {
      return (c =
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
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function u(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function d(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (d = function(e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, r);
        }
        function r() {
          return p(e, arguments, h(this).constructor);
        }
        return (
          (r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          f(r, e)
        );
      })(e);
    }
    function p(e, t, n) {
      return (p = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && f(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function h(e) {
      return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var b = window.ShadyCSS.CustomStyleInterface,
      m = (function(e) {
        function t() {
          var e, n, r;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (n = this),
            ((e =
              !(r = h(t).call(this)) ||
              ("object" !== c(r) && "function" != typeof r)
                ? u(n)
                : r)._style = null),
            b.addCustomStyle(u(e)),
            e
          );
        }
        var n, r, i;
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
          })(t, d(HTMLElement)),
          (n = t),
          (r = [
            {
              key: "getStyle",
              value: function() {
                if (this._style) return this._style;
                var e = this.querySelector("style");
                if (!e) return null;
                this._style = e;
                var t = e.getAttribute("include");
                return (
                  t &&
                    (e.removeAttribute("include"),
                    (e.textContent = Object(s.a)(t) + e.textContent)),
                  this.ownerDocument !== window.document &&
                    window.document.head.appendChild(this),
                  this._style
                );
              },
            },
          ]) && l(n.prototype, r),
          i && l(n, i),
          t
        );
      })();
    window.customElements.define("custom-style", m);
  },
  function(e, t) {},
  function(e, t, n) {
    "use strict";
    var r = n(10);
    var i = function(e, t) {
      return (i =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    var o = function() {
      return (o =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    var a,
      s,
      c = (function() {
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
      l = {
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded",
      },
      u = {
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top",
      },
      d = {
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
        } catch (r) {}
        s = n;
      }
      return !!s && { passive: !0 };
    }
    var f = ["touchstart", "pointerdown", "mousedown", "keydown"],
      h = ["touchend", "pointerup", "mouseup", "contextmenu"],
      b = [],
      m = (function(e) {
        function t(n) {
          var r = e.call(this, o({}, t.defaultAdapter, n)) || this;
          return (
            (r.activationAnimationHasEnded_ = !1),
            (r.activationTimer_ = 0),
            (r.fgDeactivationRemovalTimer_ = 0),
            (r.fgScale_ = "0"),
            (r.frame_ = { width: 0, height: 0 }),
            (r.initialSize_ = 0),
            (r.layoutFrame_ = 0),
            (r.maxRadius_ = 0),
            (r.unboundedCoords_ = { left: 0, top: 0 }),
            (r.activationState_ = r.defaultActivationState_()),
            (r.activationTimerCallback_ = function() {
              (r.activationAnimationHasEnded_ = !0),
                r.runDeactivationUXLogicIfReady_();
            }),
            (r.activateHandler_ = function(e) {
              return r.activate_(e);
            }),
            (r.deactivateHandler_ = function() {
              return r.deactivate_();
            }),
            (r.focusHandler_ = function() {
              return r.handleFocus();
            }),
            (r.blurHandler_ = function() {
              return r.handleBlur();
            }),
            (r.resizeHandler_ = function() {
              return r.layout();
            }),
            r
          );
        }
        return (
          (function(e, t) {
            function n() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          })(t, e),
          Object.defineProperty(t, "cssClasses", {
            get: function() {
              return l;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t, "strings", {
            get: function() {
              return u;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t, "numbers", {
            get: function() {
              return d;
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
              var r = t.cssClasses,
                i = r.ROOT,
                o = r.UNBOUNDED;
              requestAnimationFrame(function() {
                e.adapter_.addClass(i),
                  e.adapter_.isUnbounded() &&
                    (e.adapter_.addClass(o), e.layoutInternal_());
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
                r = n.ROOT,
                i = n.UNBOUNDED;
              requestAnimationFrame(function() {
                e.adapter_.removeClass(r),
                  e.adapter_.removeClass(i),
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
              (f.forEach(function(e) {
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
              : h.forEach(function(e) {
                  t.adapter_.registerDocumentInteractionHandler(
                    e,
                    t.deactivateHandler_
                  );
                });
          }),
          (t.prototype.deregisterRootHandlers_ = function() {
            var e = this;
            f.forEach(function(t) {
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
              h.forEach(function(t) {
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
                var r = this.previousActivationEvent_;
                if (!(r && void 0 !== e && r.type !== e.type))
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
              r = n.VAR_FG_TRANSLATE_START,
              i = n.VAR_FG_TRANSLATE_END,
              o = t.cssClasses,
              a = o.FG_DEACTIVATION,
              s = o.FG_ACTIVATION,
              c = t.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal_();
            var l = "",
              u = "";
            if (!this.adapter_.isUnbounded()) {
              var d = this.getFgTranslationCoordinates_(),
                p = d.startPoint,
                f = d.endPoint;
              (l = p.x + "px, " + p.y + "px"), (u = f.x + "px, " + f.y + "px");
            }
            this.adapter_.updateCssVariable(r, l),
              this.adapter_.updateCssVariable(i, u),
              clearTimeout(this.activationTimer_),
              clearTimeout(this.fgDeactivationRemovalTimer_),
              this.rmBoundedActivationClasses_(),
              this.adapter_.removeClass(a),
              this.adapter_.computeBoundingRect(),
              this.adapter_.addClass(s),
              (this.activationTimer_ = setTimeout(function() {
                return e.activationTimerCallback_();
              }, c));
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
                        var r,
                          i,
                          o = t.x,
                          a = t.y,
                          s = o + n.left,
                          c = a + n.top;
                        if ("touchstart" === e.type) {
                          var l = e;
                          (r = l.changedTouches[0].pageX - s),
                            (i = l.changedTouches[0].pageY - c);
                        } else {
                          var u = e;
                          (r = u.pageX - s), (i = u.pageY - c);
                        }
                        return { x: r, y: i };
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
              r = this.activationState_,
              i = r.hasDeactivationUXRun,
              o = r.isActivated;
            (i || !o) &&
              this.activationAnimationHasEnded_ &&
              (this.rmBoundedActivationClasses_(),
              this.adapter_.addClass(n),
              (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                e.adapter_.removeClass(n);
              }, d.FG_DEACTIVATION_MS)));
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
              var n = o({}, t);
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
              r = e.VAR_LEFT,
              i = e.VAR_TOP,
              o = e.VAR_FG_SCALE;
            this.adapter_.updateCssVariable(n, this.initialSize_ + "px"),
              this.adapter_.updateCssVariable(o, this.fgScale_),
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
                  r,
                  this.unboundedCoords_.left + "px"
                ),
                this.adapter_.updateCssVariable(
                  i,
                  this.unboundedCoords_.top + "px"
                ));
          }),
          t
        );
      })(c),
      v = n(15);
    function y() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}",
      ]);
      return (
        (y = function() {
          return e;
        }),
        e
      );
    }
    var g = Object(v.c)(y());
    function _(e, t) {
      return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(
        e,
        t
      );
    }
    n.d(t, "a", function() {
      return S;
    });
    var k = (function(e, t) {
        void 0 === t && (t = !1);
        var n = e.CSS,
          r = a;
        if ("boolean" == typeof a && !t) return a;
        if (!n || "function" != typeof n.supports) return !1;
        var i = n.supports("--css-vars", "yes"),
          o =
            n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
        return (
          (r = !(
            (!i && !o) ||
            (function(e) {
              var t = e.document,
                n = t.createElement("div");
              (n.className = "mdc-ripple-surface--test-edge-var-bug"),
                t.body.appendChild(n);
              var r = e.getComputedStyle(n),
                i = null !== r && "solid" === r.borderTopStyle;
              return n.remove(), i;
            })(e)
          )),
          t || (a = r),
          r
        );
      })(window),
      w = navigator.userAgent.match(/Safari/),
      x = !1,
      O = function(e) {
        w &&
          !x &&
          (function() {
            x = !0;
            var e = new r.b({ templateFactory: r.l });
            e.appendInto(document.head), e.setValue(g), e.commit();
          })();
        var t = e.surfaceNode,
          n = e.interactionNode || t;
        n.getRootNode() !== t.getRootNode() &&
          "" === n.style.position &&
          (n.style.position = "relative");
        var i = new m({
          browserSupportsCssVars: function() {
            return k;
          },
          isUnbounded: function() {
            return void 0 === e.unbounded || e.unbounded;
          },
          isSurfaceActive: function() {
            return _(n, ":active");
          },
          isSurfaceDisabled: function() {
            return Boolean(e.disabled);
          },
          addClass: function(e) {
            return t.classList.add(e);
          },
          removeClass: function(e) {
            return t.classList.remove(e);
          },
          containsEventTarget: function(e) {
            return n.contains(e);
          },
          registerInteractionHandler: function(e, t) {
            return n.addEventListener(e, t, p());
          },
          deregisterInteractionHandler: function(e, t) {
            return n.removeEventListener(e, t, p());
          },
          registerDocumentInteractionHandler: function(e, t) {
            return document.documentElement.addEventListener(e, t, p());
          },
          deregisterDocumentInteractionHandler: function(e, t) {
            return document.documentElement.removeEventListener(e, t, p());
          },
          registerResizeHandler: function(e) {
            return window.addEventListener("resize", e);
          },
          deregisterResizeHandler: function(e) {
            return window.removeEventListener("resize", e);
          },
          updateCssVariable: function(e, n) {
            return t.style.setProperty(e, n);
          },
          computeBoundingRect: function() {
            return t.getBoundingClientRect();
          },
          getWindowPageOffset: function() {
            return { x: window.pageXOffset, y: window.pageYOffset };
          },
        });
        return i.init(), i;
      },
      j = new WeakMap(),
      S = Object(r.f)(function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return function(t) {
          var n = t.committer.element,
            i = e.interactionNode || n,
            o = t.value,
            a = j.get(o);
          void 0 !== a && a !== i && (o.destroy(), (o = r.h)),
            o === r.h
              ? ((o = O(Object.assign({}, e, { surfaceNode: n }))),
                j.set(o, i),
                t.setValue(o))
              : (void 0 !== e.unbounded && o.setUnbounded(e.unbounded),
                void 0 !== e.disabled && o.setUnbounded(e.disabled)),
            !0 === e.active ? o.activate() : !1 === e.active && o.deactivate();
        };
      });
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(50),
      i = function() {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        "serviceWorker" in navigator &&
          ("https:" === location.protocol ||
            "localhost" === location.hostname) &&
          (navigator.serviceWorker
            .register("/service_worker.js")
            .then(function(t) {
              t.addEventListener("updatefound", function() {
                var n = t.installing;
                n &&
                  e &&
                  n.addEventListener("statechange", function() {
                    if (
                      "installed" === n.state &&
                      navigator.serviceWorker.controller
                    ) {
                      var e = window.document.querySelector(
                        "home-assistant, ha-onboarding"
                      );
                      Object(r.a)(e, {
                        message: "A new version of the frontend is available.",
                        action: {
                          action: function() {
                            return n.postMessage({ type: "skipWaiting" });
                          },
                          text: "reload",
                        },
                        duration: 0,
                        dismissable: !1,
                      });
                    }
                  });
              });
            }),
          navigator.serviceWorker.addEventListener(
            "controllerchange",
            function() {
              location.reload();
            }
          ));
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
    var r = n(33);
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
    function o(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
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
    var u = function(e) {
        return (function(t) {
          function n() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              ((t = s(
                this,
                (e = c(n)).call.apply(e, [this].concat(i))
              )).resources = void 0),
              (t.language = void 0),
              (t.translationFragment = void 0),
              t
            );
          }
          var i, u, d;
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
            (u = [
              {
                key: "_initializeLocalizeLite",
                value: function() {
                  this.resources ||
                    (this.translationFragment && this._downloadResources());
                },
              },
              {
                key: "_downloadResources",
                value: (function() {
                  var e,
                    t = ((e = regeneratorRuntime.mark(function e() {
                      var t, n, i;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(r.b)(
                                    this.translationFragment,
                                    this.language
                                  )
                                );
                              case 2:
                                (t = e.sent),
                                  (n = t.language),
                                  (i = t.data),
                                  (this.resources = ((s = i),
                                  (a = n) in (o = {})
                                    ? Object.defineProperty(o, a, {
                                        value: s,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (o[a] = s),
                                  o));
                              case 6:
                              case "end":
                                return e.stop();
                            }
                          var o, a, s;
                        },
                        e,
                        this
                      );
                    })),
                    function() {
                      var t = this,
                        n = arguments;
                      return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function s(e) {
                          o(a, r, i, s, c, "next", e);
                        }
                        function c(e) {
                          o(a, r, i, s, c, "throw", e);
                        }
                        s(void 0);
                      });
                    });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]) && a(i.prototype, u),
            d && a(i, d),
            n
          );
        })();
      },
      d = n(57);
    function p(e) {
      return (p =
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
    function f(e, t) {
      return !t || ("object" !== p(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function h(e, t, n) {
      return (h =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = b(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function v(e, t, n) {
      return t && m(e.prototype, t), n && m(e, n), e;
    }
    function y(e, t) {
      return (y =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return _;
    });
    var g = function() {
        return "";
      },
      _ = function(e) {
        return (function(t) {
          function n() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((e = f(this, b(n).call(this))).localize = void 0),
              (e.localize = g),
              (e.language = Object(r.a)()),
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
                t && y(e, t);
            })(n, u(e)),
            v(n, null, [
              {
                key: "properties",
                get: function() {
                  return {
                    localize: {},
                    language: {},
                    resources: {},
                    translationFragment: {},
                  };
                },
              },
            ]),
            v(n, [
              {
                key: "connectedCallback",
                value: function() {
                  h(b(n.prototype), "connectedCallback", this).call(this),
                    this._initializeLocalizeLite(),
                    (this.localize = Object(d.a)(
                      this.constructor.prototype,
                      this.language,
                      this.resources
                    ));
                },
              },
              {
                key: "updated",
                value: function(e) {
                  h(b(n.prototype), "updated", this).call(this, e),
                    (e.has("language") || e.has("resources")) &&
                      (this.localize = Object(d.a)(
                        this.constructor.prototype,
                        this.language,
                        this.resources
                      ));
                },
              },
            ]),
            n
          );
        })();
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    var r = n(15);
    function i() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        '.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}:host([disabled]){pointer-events:none}.mdc-button{flex:1}',
      ]);
      return (
        (i = function() {
          return e;
        }),
        e
      );
    }
    var o = Object(r.c)(i()),
      a = n(74);
    n(55);
    function s() {
      var e = l([
        '\n      <button\n          .ripple="',
        '"\n          class="mdc-button ',
        '"\n          ?disabled="',
        '"\n          aria-label="',
        '">\n        ',
        '\n        <span class="mdc-button__label">',
        "</span>\n        ",
        "\n        <slot></slot>\n      </button>",
      ]);
      return (
        (s = function() {
          return e;
        }),
        e
      );
    }
    function c() {
      var e = l(['<span class="material-icons mdc-button__icon">', "</span>"]);
      return (
        (c = function() {
          return e;
        }),
        e
      );
    }
    function l(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function d(e, t) {
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
    function p(e) {
      return (p = Object.setPrototypeOf
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
    var b = function(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : h(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
      },
      m = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = d(this, p(t).apply(this, arguments))).raised = !1),
            (e.unelevated = !1),
            (e.outlined = !1),
            (e.dense = !1),
            (e.disabled = !1),
            (e.trailingIcon = !1),
            (e.icon = ""),
            (e.label = ""),
            e
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
              t && f(e, t);
          })(t, r["a"]),
          (n = t),
          (i = [
            {
              key: "createRenderRoot",
              value: function() {
                return this.attachShadow({ mode: "open", delegatesFocus: !0 });
              },
            },
            {
              key: "render",
              value: function() {
                var e = {
                    "mdc-button--raised": this.raised,
                    "mdc-button--unelevated": this.unelevated,
                    "mdc-button--outlined": this.outlined,
                    "mdc-button--dense": this.dense,
                  },
                  t = Object(r.e)(c(), this.icon);
                return Object(r.e)(
                  s(),
                  Object(a.a)({ unbounded: !1 }),
                  Object(r.b)(e),
                  this.disabled,
                  this.label || this.icon,
                  this.icon && !this.trailingIcon ? t : "",
                  this.label,
                  this.icon && this.trailingIcon ? t : ""
                );
              },
            },
          ]) && u(n.prototype, i),
          o && u(n, o),
          t
        );
      })();
    (m.styles = o),
      b([Object(r.f)({ type: Boolean })], m.prototype, "raised", void 0),
      b([Object(r.f)({ type: Boolean })], m.prototype, "unelevated", void 0),
      b([Object(r.f)({ type: Boolean })], m.prototype, "outlined", void 0),
      b([Object(r.f)({ type: Boolean })], m.prototype, "dense", void 0),
      b(
        [Object(r.f)({ type: Boolean, reflect: !0 })],
        m.prototype,
        "disabled",
        void 0
      ),
      b([Object(r.f)({ type: Boolean })], m.prototype, "trailingIcon", void 0),
      b([Object(r.f)()], m.prototype, "icon", void 0),
      b([Object(r.f)()], m.prototype, "label", void 0),
      (m = b([Object(r.d)("mwc-button")], m));
  },
  function(e, t, n) {
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
        '\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --shadow-transition: {\n        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      };\n\n      --shadow-none: {\n        box-shadow: none;\n      };\n\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n\n      --shadow-elevation-2dp: {\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      };\n\n      --shadow-elevation-3dp: {\n        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 8px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-4dp: {\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 10px 0 rgba(0, 0, 0, 0.12),\n                    0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-6dp: {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 18px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-8dp: {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n                    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-12dp: {\n        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n                    0 4px 22px 3px rgba(0, 0, 0, 0.12),\n                    0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-16dp: {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),\n                    0  6px 30px 5px rgba(0, 0, 0, 0.12),\n                    0  8px 10px -5px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-24dp: {\n        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0 9px 46px 8px rgba(0, 0, 0, 0.12),\n                    0 11px 15px -7px rgba(0, 0, 0, 0.4);\n      };\n    }\n  </style>\n</custom-style>',
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
  function(e, t, n) {
    "use strict";
    n(4);
    var r = n(1),
      i = {
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
          var e = Object(r.a)(this).parentNode;
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
              r = this._fitInfo.margin,
              i = {
                width: e.width + r.left + r.right,
                height: e.height + r.top + r.bottom,
              },
              o = this.__getPosition(
                this._localeHorizontalAlign,
                this.verticalAlign,
                i,
                e,
                t,
                n
              ),
              a = o.left + r.left,
              s = o.top + r.top,
              c = Math.min(n.right - r.right, a + e.width),
              l = Math.min(n.bottom - r.bottom, s + e.height);
            (a = Math.max(
              n.left + r.left,
              Math.min(a, c - this._fitInfo.sizedBy.minWidth)
            )),
              (s = Math.max(
                n.top + r.top,
                Math.min(s, l - this._fitInfo.sizedBy.minHeight)
              )),
              (this.sizingTarget.style.maxWidth =
                Math.max(c - a, this._fitInfo.sizedBy.minWidth) + "px"),
              (this.sizingTarget.style.maxHeight =
                Math.max(l - s, this._fitInfo.sizedBy.minHeight) + "px"),
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
        _sizeDimension: function(e, t, n, r, i) {
          this.__sizeDimension(e, t, n, r, i);
        },
        __sizeDimension: function(e, t, n, r, i) {
          var o = this._fitInfo,
            a = this.__getNormalizedRect(this.fitInto),
            s = "Width" === i ? a.width : a.height,
            c = t === r,
            l = c ? s - e[r] : e[n],
            u = o.margin[c ? n : r],
            d = "offset" + i,
            p = this[d] - this.sizingTarget[d];
          this.sizingTarget.style["max" + i] = s - u - l - p + "px";
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
                var r = n.top - t.top + (n.height - t.height) / 2;
                this.style.top = r + "px";
              }
              if (!e.horizontally) {
                var i = n.left - t.left + (n.width - t.width) / 2;
                this.style.left = i + "px";
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
          var r =
              Math.min(0, e.top) + Math.min(0, n.bottom - (e.top + t.height)),
            i = Math.min(0, e.left) + Math.min(0, n.right - (e.left + t.width));
          return Math.abs(r) * t.width + Math.abs(i) * t.height;
        },
        __getPosition: function(e, t, n, r, i, o) {
          var a,
            s = [
              {
                verticalAlign: "top",
                horizontalAlign: "left",
                top: i.top + this.verticalOffset,
                left: i.left + this.horizontalOffset,
              },
              {
                verticalAlign: "top",
                horizontalAlign: "right",
                top: i.top + this.verticalOffset,
                left: i.right - n.width - this.horizontalOffset,
              },
              {
                verticalAlign: "bottom",
                horizontalAlign: "left",
                top: i.bottom - n.height - this.verticalOffset,
                left: i.left + this.horizontalOffset,
              },
              {
                verticalAlign: "bottom",
                horizontalAlign: "right",
                top: i.bottom - n.height - this.verticalOffset,
                left: i.right - n.width - this.horizontalOffset,
              },
            ];
          if (this.noOverlap) {
            for (var c = 0, l = s.length; c < l; c++) {
              var u = {};
              for (var d in s[c]) u[d] = s[c][d];
              s.push(u);
            }
            (s[0].top = s[1].top += i.height),
              (s[2].top = s[3].top -= i.height),
              (s[4].left = s[6].left += i.width),
              (s[5].left = s[7].left -= i.width);
          }
          (t = "auto" === t ? null : t),
            ((e = "auto" === e ? null : e) && "center" !== e) ||
              (s.push({
                verticalAlign: "top",
                horizontalAlign: "center",
                top:
                  i.top + this.verticalOffset + (this.noOverlap ? i.height : 0),
                left:
                  i.left - r.width / 2 + i.width / 2 + this.horizontalOffset,
              }),
              s.push({
                verticalAlign: "bottom",
                horizontalAlign: "center",
                top:
                  i.bottom -
                  n.height -
                  this.verticalOffset -
                  (this.noOverlap ? i.height : 0),
                left:
                  i.left - r.width / 2 + i.width / 2 + this.horizontalOffset,
              })),
            (t && "middle" !== t) ||
              (s.push({
                verticalAlign: "middle",
                horizontalAlign: "left",
                top: i.top - r.height / 2 + i.height / 2 + this.verticalOffset,
                left:
                  i.left +
                  this.horizontalOffset +
                  (this.noOverlap ? i.width : 0),
              }),
              s.push({
                verticalAlign: "middle",
                horizontalAlign: "right",
                top: i.top - r.height / 2 + i.height / 2 + this.verticalOffset,
                left:
                  i.right -
                  n.width -
                  this.horizontalOffset -
                  (this.noOverlap ? i.width : 0),
              })),
            "middle" === t &&
              "center" === e &&
              s.push({
                verticalAlign: "middle",
                horizontalAlign: "center",
                top: i.top - r.height / 2 + i.height / 2 + this.verticalOffset,
                left:
                  i.left - r.width / 2 + i.width / 2 + this.horizontalOffset,
              });
          for (c = 0; c < s.length; c++) {
            var p = s[c],
              f = p.verticalAlign === t,
              h = p.horizontalAlign === e;
            if (!this.dynamicAlign && !this.noOverlap && f && h) {
              a = p;
              break;
            }
            var b = (!t || f) && (!e || h);
            if (this.dynamicAlign || b) {
              if (
                ((p.offscreenArea = this.__getOffscreenArea(p, n, o)),
                0 === p.offscreenArea && b)
              ) {
                a = p;
                break;
              }
              a = a || p;
              var m = p.offscreenArea - a.offscreenArea;
              (m < 0 || (0 === m && (f || h))) && (a = p);
            }
          }
          return a;
        },
      },
      o = n(95),
      a = n(9),
      s = n(123),
      c = n(5),
      l = n(3);
    function u() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n",
      ]);
      return (
        (u = function() {
          return e;
        }),
        e
      );
    }
    Object(c.a)({
      _template: Object(l.a)(u()),
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
          Object(r.a)(document.body).appendChild(this);
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
          Object(r.a)(this.parentNode).removeChild(this);
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
      p = n(35),
      f = function() {
        (this._overlays = []),
          (this._minimumZ = 101),
          (this._backdropElement = null),
          p.a(document.documentElement, "tap", function() {}),
          document.addEventListener("tap", this._onCaptureClick.bind(this), !0),
          document.addEventListener(
            "focus",
            this._onCaptureFocus.bind(this),
            !0
          ),
          document.addEventListener(
            "keydown",
            this._onCaptureKeyDown.bind(this),
            !0
          );
      };
    f.prototype = {
      constructor: f,
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
          e.root && Object(r.a)(e.root).activeElement;

        )
          e = Object(r.a)(e.root).activeElement;
        return e;
      },
      _bringOverlayAtIndexToFront: function(e) {
        var t = this._overlays[e];
        if (t) {
          var n = this._overlays.length - 1,
            r = this._overlays[n];
          if ((r && this._shouldBeBehindOverlay(t, r) && n--, !(e >= n))) {
            var i = Math.max(this.currentOverlayZ(), this._minimumZ);
            for (this._getZ(t) <= i && this._applyOverlayZ(t, i); e < n; )
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
          r = this._overlays[n - 1],
          i = Math.max(this._getZ(r), this._minimumZ),
          o = this._getZ(e);
        if (r && this._shouldBeBehindOverlay(e, r)) {
          this._applyOverlayZ(r, i), n--;
          var a = this._overlays[n - 1];
          i = Math.max(this._getZ(a), this._minimumZ);
        }
        o <= i && this._applyOverlayZ(e, i),
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
            var n, i = Object(r.a)(e).path;
            (n = this._overlays[t]) &&
            this._overlayInPath(i) !== n &&
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
    var h,
      b,
      m = new f(),
      v = { pageX: 0, pageY: 0 },
      y = null,
      g = [],
      _ = ["wheel", "mousewheel", "DOMMouseScroll", "touchstart", "touchmove"];
    function k(e) {
      x.indexOf(e) >= 0 ||
        (0 === x.length &&
          (function() {
            h =
              h ||
              function(e) {
                e.cancelable &&
                  (function(e) {
                    var t = Object(r.a)(e).rootTarget;
                    "touchmove" !== e.type &&
                      y !== t &&
                      ((y = t),
                      (g = (function(e) {
                        for (var t = [], n = e.indexOf(b), r = 0; r <= n; r++)
                          if (e[r].nodeType === Node.ELEMENT_NODE) {
                            var i = e[r],
                              o = i.style;
                            "scroll" !== o.overflow &&
                              "auto" !== o.overflow &&
                              (o = window.getComputedStyle(i)),
                              ("scroll" !== o.overflow &&
                                "auto" !== o.overflow) ||
                                t.push(i);
                          }
                        return t;
                      })(Object(r.a)(e).path)));
                    if (!g.length) return !0;
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
                        (t.deltaX = v.pageX - n.pageX),
                          (t.deltaY = v.pageY - n.pageY);
                      }
                      return t;
                    })(e);
                    return !(function(e, t, n) {
                      if (!t && !n) return;
                      for (
                        var r = Math.abs(n) >= Math.abs(t), i = 0;
                        i < e.length;
                        i++
                      ) {
                        var o = e[i];
                        if (
                          r
                            ? n < 0
                              ? o.scrollTop > 0
                              : o.scrollTop < o.scrollHeight - o.clientHeight
                            : t < 0
                            ? o.scrollLeft > 0
                            : o.scrollLeft < o.scrollWidth - o.clientWidth
                        )
                          return o;
                      }
                    })(g, n.deltaX, n.deltaY);
                  })(e) &&
                  e.preventDefault();
                if (e.targetTouches) {
                  var t = e.targetTouches[0];
                  (v.pageX = t.pageX), (v.pageY = t.pageY);
                }
              }.bind(void 0);
            for (var e = 0, t = _.length; e < t; e++)
              document.addEventListener(_[e], h, { capture: !0, passive: !1 });
          })(),
        x.push(e),
        (b = x[x.length - 1]),
        [],
        []);
    }
    function w(e) {
      var t = x.indexOf(e);
      -1 !== t &&
        (x.splice(t, 1),
        (b = x[x.length - 1]),
        [],
        [],
        0 === x.length &&
          (function() {
            for (var e = 0, t = _.length; e < t; e++)
              document.removeEventListener(_[e], h, {
                capture: !0,
                passive: !1,
              });
          })());
    }
    var x = [];
    n.d(t, "b", function() {
      return O;
    }),
      n.d(t, "a", function() {
        return j;
      });
    var O = {
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
          _manager: { type: Object, value: m },
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
            Object(r.a)(this).querySelector("[autofocus]") ||
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
            (this._observer = Object(r.a)(this).observeNodes(
              this._onNodesChange
            ));
        },
        detached: function() {
          for (var e in (Object(r.a)(this).unobserveNodes(this._observer),
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
              (e === document.body || Object(r.a)(this).deepContains(e)) &&
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
            var t = Object(r.a)(e).path;
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
              r = t ? this.__lastFocusableNode : this.__firstFocusableNode,
              i = !1;
            if (n === r) i = !0;
            else {
              var o = this._manager.deepActiveElement;
              i = o === n || o === this;
            }
            i &&
              (e.preventDefault(),
              (this._focusedChild = r),
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
            ? ("lock" === n && (this.__saveScrollPosition(), k(this)),
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
          if (!(this.__isAnimating || Object(r.a)(e).path.indexOf(this) >= 0))
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
      j = [i, o.a, O];
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var r = n(46),
      i = n(5),
      o = n(1);
    Object(i.a)({
      is: "iron-iconset-svg",
      properties: {
        name: { type: String, observer: "_nameChanged" },
        size: { type: Number, value: 24 },
        rtlMirroring: { type: Boolean, value: !1 },
        useGlobalRtlAttribute: { type: Boolean, value: !1 },
      },
      created: function() {
        this._meta = new r.a({ type: "iconset", key: null, value: null });
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
          var r = Object(o.a)(e.root || e);
          return r.insertBefore(n, r.childNodes[0]), (e._svgIcon = n);
        }
        return null;
      },
      removeIcon: function(e) {
        e._svgIcon &&
          (Object(o.a)(e.root || e).removeChild(e._svgIcon),
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
          Object(o.a)(this)
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
          var r = e.cloneNode(!0),
            i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            o = r.getAttribute("viewBox") || "0 0 " + t + " " + t,
            a =
              "pointer-events: none; display: block; width: 100%; height: 100%;";
          return (
            n &&
              r.hasAttribute("mirror-in-rtl") &&
              (a +=
                "-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),
            i.setAttribute("viewBox", o),
            i.setAttribute("preserveAspectRatio", "xMidYMid meet"),
            i.setAttribute("focusable", "false"),
            (i.style.cssText = a),
            i.appendChild(r).removeAttribute("id"),
            i
          );
        }
        return null;
      },
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(25),
      i = n(32),
      o = n(21),
      a = n(24),
      s = n(26),
      c = n(2),
      l = n(11);
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
    function d(e, t) {
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
    function p(e, t, n) {
      return (p =
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
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
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
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function b(e, t, n) {
      return t && h(e.prototype, t), n && h(e, n), e;
    }
    function m(e, t) {
      return (m =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var v = Object(s.b)(r.a),
      y = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = d(this, f(t).call(this))).__instances = []),
            (e.__limit = 1 / 0),
            (e.__pool = []),
            (e.__renderDebouncer = null),
            (e.__itemsIdxToInstIdx = {}),
            (e.__chunkCount = null),
            (e.__lastChunkTime = null),
            (e.__sortFn = null),
            (e.__filterFn = null),
            (e.__observePaths = null),
            (e.__ctor = null),
            (e.__isDetached = !0),
            (e.template = null),
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
              t && m(e, t);
          })(t, v),
          b(t, null, [
            {
              key: "is",
              get: function() {
                return "dom-repeat";
              },
            },
            {
              key: "template",
              get: function() {
                return null;
              },
            },
            {
              key: "properties",
              get: function() {
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
                  initialCount: {
                    type: Number,
                    observer: "__initializeChunking",
                  },
                  targetFramerate: { type: Number, value: 20 },
                  _targetFrameTime: {
                    type: Number,
                    computed: "__computeFrameTime(targetFramerate)",
                  },
                };
              },
            },
            {
              key: "observers",
              get: function() {
                return ["__itemsChanged(items.*)"];
              },
            },
          ]),
          b(t, [
            {
              key: "disconnectedCallback",
              value: function() {
                p(f(t.prototype), "disconnectedCallback", this).call(this),
                  (this.__isDetached = !0);
                for (var e = 0; e < this.__instances.length; e++)
                  this.__detachInstance(e);
              },
            },
            {
              key: "connectedCallback",
              value: function() {
                if (
                  (p(f(t.prototype), "connectedCallback", this).call(this),
                  (this.style.display = "none"),
                  this.__isDetached)
                ) {
                  this.__isDetached = !1;
                  for (
                    var e = this.parentNode, n = 0;
                    n < this.__instances.length;
                    n++
                  )
                    this.__attachInstance(n, e);
                }
              },
            },
            {
              key: "__ensureTemplatized",
              value: function() {
                var e = this;
                if (!this.__ctor) {
                  var t = (this.template = this.querySelector("template"));
                  if (!t) {
                    var n = new MutationObserver(function() {
                      if (!e.querySelector("template"))
                        throw new Error(
                          "dom-repeat requires a <template> child"
                        );
                      n.disconnect(), e.__render();
                    });
                    return n.observe(this, { childList: !0 }), !1;
                  }
                  var r = {};
                  (r[this.as] = !0),
                    (r[this.indexAs] = !0),
                    (r[this.itemsIndexAs] = !0),
                    (this.__ctor = Object(i.b)(t, this, {
                      mutableData: this.mutableData,
                      parentModel: !0,
                      instanceProps: r,
                      forwardHostProp: function(e, t) {
                        for (
                          var n, r = this.__instances, i = 0;
                          i < r.length && (n = r[i]);
                          i++
                        )
                          n.forwardHostProp(e, t);
                      },
                      notifyInstanceProp: function(e, t, n) {
                        if (Object(c.e)(this.as, t)) {
                          var r = e[this.itemsIndexAs];
                          t == this.as && (this.items[r] = n);
                          var i = Object(c.i)(this.as, "items." + r, t);
                          this.notifyPath(i, n);
                        }
                      },
                    }));
                }
                return !0;
              },
            },
            {
              key: "__getMethodHost",
              value: function() {
                return this.__dataHost._methodHost || this.__dataHost;
              },
            },
            {
              key: "__functionFromPropertyValue",
              value: function(e) {
                if ("string" == typeof e) {
                  var t = e,
                    n = this.__getMethodHost();
                  return function() {
                    return n[t].apply(n, arguments);
                  };
                }
                return e;
              },
            },
            {
              key: "__sortChanged",
              value: function(e) {
                (this.__sortFn = this.__functionFromPropertyValue(e)),
                  this.items && this.__debounceRender(this.__render);
              },
            },
            {
              key: "__filterChanged",
              value: function(e) {
                (this.__filterFn = this.__functionFromPropertyValue(e)),
                  this.items && this.__debounceRender(this.__render);
              },
            },
            {
              key: "__computeFrameTime",
              value: function(e) {
                return Math.ceil(1e3 / e);
              },
            },
            {
              key: "__initializeChunking",
              value: function() {
                this.initialCount &&
                  ((this.__limit = this.initialCount),
                  (this.__chunkCount = this.initialCount),
                  (this.__lastChunkTime = performance.now()));
              },
            },
            {
              key: "__tryRenderChunk",
              value: function() {
                this.items &&
                  this.__limit < this.items.length &&
                  this.__debounceRender(this.__requestRenderChunk);
              },
            },
            {
              key: "__requestRenderChunk",
              value: function() {
                var e = this;
                requestAnimationFrame(function() {
                  return e.__renderChunk();
                });
              },
            },
            {
              key: "__renderChunk",
              value: function() {
                var e = performance.now(),
                  t = this._targetFrameTime / (e - this.__lastChunkTime);
                (this.__chunkCount = Math.round(this.__chunkCount * t) || 1),
                  (this.__limit += this.__chunkCount),
                  (this.__lastChunkTime = e),
                  this.__debounceRender(this.__render);
              },
            },
            {
              key: "__observeChanged",
              value: function() {
                this.__observePaths =
                  this.observe && this.observe.replace(".*", ".").split(" ");
              },
            },
            {
              key: "__itemsChanged",
              value: function(e) {
                this.items &&
                  !Array.isArray(this.items) &&
                  console.warn(
                    "dom-repeat expected array for `items`, found",
                    this.items
                  ),
                  this.__handleItemPath(e.path, e.value) ||
                    (this.__initializeChunking(),
                    this.__debounceRender(this.__render));
              },
            },
            {
              key: "__handleObservedPaths",
              value: function(e) {
                if (this.__sortFn || this.__filterFn)
                  if (e) {
                    if (this.__observePaths)
                      for (
                        var t = this.__observePaths, n = 0;
                        n < t.length;
                        n++
                      )
                        0 === e.indexOf(t[n]) &&
                          this.__debounceRender(this.__render, this.delay);
                  } else this.__debounceRender(this.__render, this.delay);
              },
            },
            {
              key: "__debounceRender",
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                (this.__renderDebouncer = o.a.debounce(
                  this.__renderDebouncer,
                  t > 0 ? l.d.after(t) : l.c,
                  e.bind(this)
                )),
                  Object(a.a)(this.__renderDebouncer);
              },
            },
            {
              key: "render",
              value: function() {
                this.__debounceRender(this.__render), Object(a.b)();
              },
            },
            {
              key: "__render",
              value: function() {
                this.__ensureTemplatized() &&
                  (this.__applyFullRefresh(),
                  (this.__pool.length = 0),
                  this._setRenderedItemCount(this.__instances.length),
                  this.dispatchEvent(
                    new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
                  ),
                  this.__tryRenderChunk());
              },
            },
            {
              key: "__applyFullRefresh",
              value: function() {
                for (
                  var e = this,
                    t = this.items || [],
                    n = new Array(t.length),
                    r = 0;
                  r < t.length;
                  r++
                )
                  n[r] = r;
                this.__filterFn &&
                  (n = n.filter(function(n, r, i) {
                    return e.__filterFn(t[n], r, i);
                  })),
                  this.__sortFn &&
                    n.sort(function(n, r) {
                      return e.__sortFn(t[n], t[r]);
                    });
                for (
                  var i = (this.__itemsIdxToInstIdx = {}),
                    o = 0,
                    a = Math.min(n.length, this.__limit);
                  o < a;
                  o++
                ) {
                  var s = this.__instances[o],
                    c = n[o],
                    l = t[c];
                  (i[c] = o),
                    s
                      ? (s._setPendingProperty(this.as, l),
                        s._setPendingProperty(this.indexAs, o),
                        s._setPendingProperty(this.itemsIndexAs, c),
                        s._flushProperties())
                      : this.__insertInstance(l, o, c);
                }
                for (var u = this.__instances.length - 1; u >= o; u--)
                  this.__detachAndRemoveInstance(u);
              },
            },
            {
              key: "__detachInstance",
              value: function(e) {
                for (
                  var t = this.__instances[e], n = 0;
                  n < t.children.length;
                  n++
                ) {
                  var r = t.children[n];
                  t.root.appendChild(r);
                }
                return t;
              },
            },
            {
              key: "__attachInstance",
              value: function(e, t) {
                var n = this.__instances[e];
                t.insertBefore(n.root, this);
              },
            },
            {
              key: "__detachAndRemoveInstance",
              value: function(e) {
                var t = this.__detachInstance(e);
                t && this.__pool.push(t), this.__instances.splice(e, 1);
              },
            },
            {
              key: "__stampInstance",
              value: function(e, t, n) {
                var r = {};
                return (
                  (r[this.as] = e),
                  (r[this.indexAs] = t),
                  (r[this.itemsIndexAs] = n),
                  new this.__ctor(r)
                );
              },
            },
            {
              key: "__insertInstance",
              value: function(e, t, n) {
                var r = this.__pool.pop();
                r
                  ? (r._setPendingProperty(this.as, e),
                    r._setPendingProperty(this.indexAs, t),
                    r._setPendingProperty(this.itemsIndexAs, n),
                    r._flushProperties())
                  : (r = this.__stampInstance(e, t, n));
                var i = this.__instances[t + 1],
                  o = i ? i.children[0] : this;
                return (
                  this.parentNode.insertBefore(r.root, o),
                  (this.__instances[t] = r),
                  r
                );
              },
            },
            {
              key: "_showHideChildren",
              value: function(e) {
                for (var t = 0; t < this.__instances.length; t++)
                  this.__instances[t]._showHideChildren(e);
              },
            },
            {
              key: "__handleItemPath",
              value: function(e, t) {
                var n = e.slice(6),
                  r = n.indexOf("."),
                  i = r < 0 ? n : n.substring(0, r);
                if (i == parseInt(i, 10)) {
                  var o = r < 0 ? "" : n.substring(r + 1);
                  this.__handleObservedPaths(o);
                  var a = this.__itemsIdxToInstIdx[i],
                    s = this.__instances[a];
                  if (s) {
                    var c = this.as + (o ? "." + o : "");
                    s._setPendingPropertyOrPath(c, t, !1, !0),
                      s._flushProperties();
                  }
                  return !0;
                }
              },
            },
            {
              key: "itemForElement",
              value: function(e) {
                var t = this.modelForElement(e);
                return t && t[this.as];
              },
            },
            {
              key: "indexForElement",
              value: function(e) {
                var t = this.modelForElement(e);
                return t && t[this.indexAs];
              },
            },
            {
              key: "modelForElement",
              value: function(e) {
                return Object(i.a)(this.template, e);
              },
            },
          ]),
          t
        );
      })();
    customElements.define(y.is, y);
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var r = n(1),
      i = n(22);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = (function() {
      function e(t) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.selection = []),
          (this.selectCallback = t);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "get",
            value: function() {
              return this.multi ? this.selection.slice() : this.selection[0];
            },
          },
          {
            key: "clear",
            value: function(e) {
              this.selection.slice().forEach(function(t) {
                (!e || e.indexOf(t) < 0) && this.setItemSelected(t, !1);
              }, this);
            },
          },
          {
            key: "isSelected",
            value: function(e) {
              return this.selection.indexOf(e) >= 0;
            },
          },
          {
            key: "setItemSelected",
            value: function(e, t) {
              if (null != e && t !== this.isSelected(e)) {
                if (t) this.selection.push(e);
                else {
                  var n = this.selection.indexOf(e);
                  n >= 0 && this.selection.splice(n, 1);
                }
                this.selectCallback && this.selectCallback(e, t);
              }
            },
          },
          {
            key: "select",
            value: function(e) {
              this.multi
                ? this.toggle(e)
                : this.get() !== e &&
                  (this.setItemSelected(this.get(), !1),
                  this.setItemSelected(e, !0));
            },
          },
          {
            key: "toggle",
            value: function(e) {
              this.setItemSelected(e, !this.isSelected(e));
            },
          },
        ]) && o(t.prototype, n),
        r && o(t, r),
        e
      );
    })();
    n.d(t, "a", function() {
      return s;
    });
    var s = {
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
          (this._selection = new a(this._applySelection.bind(this)));
      },
      attached: function() {
        (this._observer = this._observeItems(this)),
          this._addListener(this.activateEvent);
      },
      detached: function() {
        this._observer && Object(r.a)(this).unobserveNodes(this._observer),
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
        var e = Object(r.a)(this).queryDistributedElements(
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
        var n = e[Object(i.b)(this.attrForSelected)];
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
        return Object(r.a)(e).observeNodes(function(e) {
          this._updateItems(),
            this._updateSelected(),
            this.fire("iron-items-changed", e, { bubbles: !1, cancelable: !1 });
        });
      },
      _activateHandler: function(e) {
        for (var t = e.target, n = this.items; t && t != this; ) {
          var r = n.indexOf(t);
          if (r >= 0) {
            var i = this._indexToValue(r);
            return void this._itemActivate(i, t);
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
    var r = n(25),
      i = n(32),
      o = n(21),
      a = n(24),
      s = n(11),
      c = n(2);
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
    function u(e, t) {
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
                  null !== (e = p(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
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
    function f(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function h(e, t, n) {
      return t && f(e.prototype, t), n && f(e, n), e;
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var m = (function(e) {
      function t() {
        var e;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((e = u(this, p(t).call(this))).__renderDebouncer = null),
          (e.__invalidProps = null),
          (e.__instance = null),
          (e._lastIf = !1),
          (e.__ctor = null),
          (e.__hideTemplateChildren__ = !1),
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
        })(t, r["a"]),
        h(t, null, [
          {
            key: "is",
            get: function() {
              return "dom-if";
            },
          },
          {
            key: "template",
            get: function() {
              return null;
            },
          },
          {
            key: "properties",
            get: function() {
              return {
                if: { type: Boolean, observer: "__debounceRender" },
                restamp: { type: Boolean, observer: "__debounceRender" },
              };
            },
          },
        ]),
        h(t, [
          {
            key: "__debounceRender",
            value: function() {
              var e = this;
              (this.__renderDebouncer = o.a.debounce(
                this.__renderDebouncer,
                s.c,
                function() {
                  return e.__render();
                }
              )),
                Object(a.a)(this.__renderDebouncer);
            },
          },
          {
            key: "disconnectedCallback",
            value: function() {
              d(p(t.prototype), "disconnectedCallback", this).call(this),
                (this.parentNode &&
                  (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE ||
                    this.parentNode.host)) ||
                  this.__teardownInstance();
            },
          },
          {
            key: "connectedCallback",
            value: function() {
              d(p(t.prototype), "connectedCallback", this).call(this),
                (this.style.display = "none"),
                this.if && this.__debounceRender();
            },
          },
          {
            key: "render",
            value: function() {
              Object(a.b)();
            },
          },
          {
            key: "__render",
            value: function() {
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
            },
          },
          {
            key: "__ensureInstance",
            value: function() {
              var e = this,
                t = this.parentNode;
              if (t) {
                if (!this.__ctor) {
                  var n = this.querySelector("template");
                  if (!n) {
                    var r = new MutationObserver(function() {
                      if (!e.querySelector("template"))
                        throw new Error("dom-if requires a <template> child");
                      r.disconnect(), e.__render();
                    });
                    return r.observe(this, { childList: !0 }), !1;
                  }
                  this.__ctor = Object(i.b)(n, this, {
                    mutableData: !0,
                    forwardHostProp: function(e, t) {
                      this.__instance &&
                        (this.if
                          ? this.__instance.forwardHostProp(e, t)
                          : ((this.__invalidProps =
                              this.__invalidProps || Object.create(null)),
                            (this.__invalidProps[Object(c.g)(e)] = !0)));
                    },
                  });
                }
                if (this.__instance) {
                  this.__syncHostProperties();
                  var o = this.__instance.children;
                  if (o && o.length)
                    if (this.previousSibling !== o[o.length - 1])
                      for (var a, s = 0; s < o.length && (a = o[s]); s++)
                        t.insertBefore(a, this);
                } else
                  (this.__instance = new this.__ctor()),
                    t.insertBefore(this.__instance.root, this);
              }
              return !0;
            },
          },
          {
            key: "__syncHostProperties",
            value: function() {
              var e = this.__invalidProps;
              if (e) {
                for (var t in e)
                  this.__instance._setPendingProperty(t, this.__dataHost[t]);
                (this.__invalidProps = null),
                  this.__instance._flushProperties();
              }
            },
          },
          {
            key: "__teardownInstance",
            value: function() {
              if (this.__instance) {
                var e = this.__instance.children;
                if (e && e.length) {
                  var t = e[0].parentNode;
                  if (t)
                    for (var n, r = 0; r < e.length && (n = e[r]); r++)
                      t.removeChild(n);
                }
                (this.__instance = null), (this.__invalidProps = null);
              }
            },
          },
          {
            key: "_showHideChildren",
            value: function() {
              var e = this.__hideTemplateChildren__ || !this.if;
              this.__instance && this.__instance._showHideChildren(e);
            },
          },
        ]),
        t
      );
    })();
    customElements.define(m.is, m);
  },
  ,
  function(e, t, n) {
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
  function(e, t, n) {
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
  function(e, t, n) {
    "use strict";
    n(44), n(73), n(41), n(83), n(52), n(72);
    var r = n(54),
      i = document.createElement("template");
    i.setAttribute("style", "display: none;"),
      (i.innerHTML = '<custom-style>\n  <style>\n    /*\n      JAVIS Home default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n      --state-icon-unavailable-color: var(--disabled-text-color);\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* sidebar menu */\n      --sidebar-text-color: var(--primary-text-color);\n      --sidebar-background-color: var(--paper-listbox-background-color); /* backward compatible with existing themes */\n      --sidebar-icon-color: rgba(0, 0, 0, 0.5);\n      --sidebar-selected-text-color: var(--primary-color);\n      --sidebar-selected-icon-color: var(--primary-color);\n\n      /* controls */\n      --toggle-button-color: var(--primary-color);\n      /* --toggle-button-unchecked-color: var(--accent-color); */\n      --slider-color: var(--primary-color);\n      --slider-secondary-color: var(--light-primary-color);\n      --slider-bar-color: var(--disabled-text-color);\n\n      /* for label-badge */\n      --label-badge-background-color: white;\n      --label-badge-text-color: rgb(76, 76, 76);\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n      --label-badge-grey: var(--paper-grey-500);\n\n      /*\n        Paper-styles color.html depency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --paper-toggle-button-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n      --paper-spinner-color: var(--primary-color);\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* derived colors, to keep existing themes mostly working */\n      --paper-card-background-color: var(--card-background-color);\n      --paper-listbox-background-color: var(--card-background-color);\n      --paper-item-icon-color: var(--state-icon-color);\n      --paper-item-icon-active-color: var(--state-icon-active-color);\n      --table-row-background-color: var(--primary-background-color);\n      --table-row-alternative-background-color: var(--secondary-background-color);\n\n      /* set our toggle style */\n      --paper-toggle-button-checked-ink-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-button-color: var(--toggle-button-color);\n      --paper-toggle-button-checked-bar-color: var(--toggle-button-color);\n      --paper-toggle-button-unchecked-button-color: var(--toggle-button-unchecked-color, var(--paper-grey-50));\n      --paper-toggle-button-unchecked-bar-color: var(--toggle-button-unchecked-color, #000000);\n      /* set our slider style */\n      --paper-slider-knob-color: var(--slider-color);\n      --paper-slider-knob-start-color: var(--slider-color);\n      --paper-slider-pin-color: var(--slider-color);\n      --paper-slider-active-color: var(--slider-color);\n      --paper-slider-secondary-color: var(--slider-secondary-color);\n      --paper-slider-container-color: var(--slider-bar-color);\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* mwc */\n      --mdc-theme-primary: var(--primary-color);\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    '
        .concat(
          r.a.cssText,
          '\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      '
        )
        .concat(r.b.cssText, "\n    </style>\n  </template>\n</dom-module>")),
      document.head.appendChild(i.content);
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return l;
    });
    n(4);
    var r = n(31),
      i = n(34),
      o = n(1),
      a = n(25),
      s = { NextLabelID: 1, NextAddonID: 1, NextInputID: 1 },
      c = {
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
          var t = Object(o.a)(e).rootTarget;
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
          i.a._focusBlurHandler.call(this, e),
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
            t = Object(o.a)(this.root).querySelector("label");
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
      l = [i.a, r.a, c];
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(4);
    var r = n(1),
      i = n(9),
      o = new Set(),
      a = {
        properties: {
          _parentResizable: {
            type: Object,
            observer: "_parentResizableChanged",
          },
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
            : (o.delete(this),
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
              (e._interestedResizables.push(this),
              e._subscribeIronResize(this));
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
          e.removeEventListener(
            "iron-resize",
            this._boundOnDescendantIronResize
          );
        },
        resizerShouldNotify: function(e) {
          return !0;
        },
        _onDescendantIronResize: function(e) {
          this._notifyingDescendant
            ? e.stopPropagation()
            : i.g || this._fireResize();
        },
        _fireResize: function() {
          this.fire("iron-resize", null, { node: this, bubbles: !1 });
        },
        _onIronRequestResizeNotifications: function(e) {
          var t = Object(r.a)(e).rootTarget;
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
                  ? this._parentResizable._interestedResizables.forEach(
                      function(e) {
                        e !== this && e._findParent();
                      },
                      this
                    )
                  : (o.forEach(function(e) {
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
            this._parentResizable ? o.delete(this) : o.add(this);
        },
      };
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n(32),
      i = {
        templatize: function(e, t) {
          (this._templatizerTemplate = e),
            (this.ctor = Object(r.b)(e, this, {
              mutableData: Boolean(t),
              parentModel: this._parentModel,
              instanceProps: this._instanceProps,
              forwardHostProp: this._forwardHostPropV2,
              notifyInstanceProp: this._notifyInstancePropV2,
            }));
        },
        stamp: function(e) {
          return new this.ctor(e);
        },
        modelForElement: function(e) {
          return Object(r.a)(this._templatizerTemplate, e);
        },
      };
  },
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    });
    var r,
      i = n(26);
    r = i.a._mutablePropertyChange;
    var o = {
      properties: { mutableData: Boolean },
      _shouldPropertyChange: function(e, t, n) {
        return r(this, e, t, n, this.mutableData);
      },
    };
  },
  ,
  ,
  function(e, t) {
    var n = document.createElement("template");
    n.setAttribute("style", "display: none;"),
      (n.innerHTML =
        '<style>\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin"),\n  local("Roboto-Thin"),\n  url(/static/fonts/roboto/Roboto-Thin.woff2) format("woff2");\nfont-weight: 100;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Thin Italic"),\n  local("Roboto-ThinItalic"),\n  url(/static/fonts/roboto/Roboto-ThinItalic.woff2) format("woff2");\nfont-weight: 100;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light"),\n  local("Roboto-Light"),\n  url(/static/fonts/roboto/Roboto-Light.woff2) format("woff2");\nfont-weight: 300;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Light Italic"),\n  local("Roboto-LightItalic"),\n  url(/static/fonts/roboto/Roboto-LightItalic.woff2) format("woff2");\nfont-weight: 300;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Regular"),\n  local("Roboto-Regular"),\n  url(/static/fonts/roboto/Roboto-Regular.woff2) format("woff2");\nfont-weight: 400;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Italic"),\n  local("Roboto-Italic"),\n  url(/static/fonts/roboto/Roboto-RegularItalic.woff2) format("woff2");\nfont-weight: 400;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium"),\n  local("Roboto-Medium"),\n  url(/static/fonts/roboto/Roboto-Medium.woff2) format("woff2");\nfont-weight: 500;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Medium Italic"),\n  local("Roboto-MediumItalic"),\n  url(/static/fonts/roboto/Roboto-MediumItalic.woff2) format("woff2");\nfont-weight: 500;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold"),\n  local("Roboto-Bold"),\n  url(/static/fonts/roboto/Roboto-Bold.woff2) format("woff2");\nfont-weight: 700;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Bold Italic"),\n  local("Roboto-BoldItalic"),\n  url(/static/fonts/roboto/Roboto-BoldItalic.woff2) format("woff2");\nfont-weight: 700;\nfont-style: italic;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black"),\n  local("Roboto-Black"),\n  url(/static/fonts/roboto/Roboto-Black.woff2) format("woff2");\nfont-weight: 900;\nfont-style: normal;\n}\n@font-face {\nfont-family: "Roboto";\nsrc:\n  local("Roboto Black Italic"),\n  local("Roboto-BlackItalic"),\n  url(/static/fonts/roboto/Roboto-BlackItalic.woff2) format("woff2");\nfont-weight: 900;\nfont-style: italic;\n}\n</style>'),
      document.head.appendChild(n.content);
  },
  function(e, t, n) {
    "use strict";
    n(85);
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
    function a(e) {
      return (a = Object.setPrototypeOf
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
    var c = customElements.get("iron-iconset-svg"),
      l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            o(this, a(t).apply(this, arguments))
          );
        }
        var n, r, l;
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
          })(t, c),
          (n = t),
          (r = [
            {
              key: "_fireIronIconsetAdded",
              value: function() {
                var e = this;
                this.async(function() {
                  return e.fire("iron-iconset-added", e, { node: window });
                });
              },
            },
            {
              key: "_nameChanged",
              value: function() {
                var e = this;
                (this._meta.value = null),
                  (this._meta.key = this.name),
                  (this._meta.value = this),
                  this.ownerDocument &&
                  "loading" === this.ownerDocument.readyState
                    ? this.ownerDocument.addEventListener(
                        "DOMContentLoaded",
                        function() {
                          e._fireIronIconsetAdded();
                        }
                      )
                    : this._fireIronIconsetAdded();
              },
            },
          ]) && i(n.prototype, r),
          l && i(n, l),
          t
        );
      })();
    customElements.define("ha-iconset-svg", l);
  },
  function(e, t, n) {
    "use strict";
    t.default = (function() {
      function e(t, n, r, i) {
        (this.message = t),
          (this.expected = n),
          (this.found = r),
          (this.location = i),
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
              r = arguments.length > 1 ? arguments[1] : {},
              i = {},
              o = { start: Ae },
              a = Ae,
              s = function(e) {
                return {
                  type: "messageFormatPattern",
                  elements: e,
                  location: je(),
                };
              },
              c = function(e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a = "";
                for (t = 0, r = e.length; t < r; t += 1)
                  for (n = 0, o = (i = e[t]).length; n < o; n += 1) a += i[n];
                return a;
              },
              l = function(e) {
                return { type: "messageTextElement", value: e, location: je() };
              },
              u = /^[^ \t\n\r,.+={}#]/,
              d = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]",
              },
              p = "{",
              f = { type: "literal", value: "{", description: '"{"' },
              h = ",",
              b = { type: "literal", value: ",", description: '","' },
              m = "}",
              v = { type: "literal", value: "}", description: '"}"' },
              y = function(e, t) {
                return {
                  type: "argumentElement",
                  id: e,
                  format: t && t[2],
                  location: je(),
                };
              },
              g = "number",
              _ = { type: "literal", value: "number", description: '"number"' },
              k = "date",
              w = { type: "literal", value: "date", description: '"date"' },
              x = "time",
              O = { type: "literal", value: "time", description: '"time"' },
              j = function(e, t) {
                return { type: e + "Format", style: t && t[2], location: je() };
              },
              S = "plural",
              C = { type: "literal", value: "plural", description: '"plural"' },
              P = function(e) {
                return {
                  type: e.type,
                  ordinal: !1,
                  offset: e.offset || 0,
                  options: e.options,
                  location: je(),
                };
              },
              E = "selectordinal",
              A = {
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
                  location: je(),
                };
              },
              R = "select",
              z = { type: "literal", value: "select", description: '"select"' },
              I = function(e) {
                return { type: "selectFormat", options: e, location: je() };
              },
              N = "=",
              L = { type: "literal", value: "=", description: '"="' },
              M = function(e, t) {
                return {
                  type: "optionalFormatPattern",
                  selector: e,
                  value: t,
                  location: je(),
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
                  location: je(),
                };
              },
              V = { type: "other", description: "whitespace" },
              U = /^[ \t\n\r]/,
              q = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]",
              },
              K = { type: "other", description: "optionalWhitespace" },
              X = /^[0-9]/,
              $ = { type: "class", value: "[0-9]", description: "[0-9]" },
              W = /^[0-9a-f]/i,
              Y = {
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
              re = "\\\\",
              ie = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"',
              },
              oe = function() {
                return "\\";
              },
              ae = "\\#",
              se = { type: "literal", value: "\\#", description: '"\\\\#"' },
              ce = function() {
                return "\\#";
              },
              le = "\\{",
              ue = { type: "literal", value: "\\{", description: '"\\\\{"' },
              de = function() {
                return "{";
              },
              pe = "\\}",
              fe = { type: "literal", value: "\\}", description: '"\\\\}"' },
              he = function() {
                return "}";
              },
              be = "\\u",
              me = { type: "literal", value: "\\u", description: '"\\\\u"' },
              ve = function(e) {
                return String.fromCharCode(parseInt(e, 16));
              },
              ye = function(e) {
                return e.join("");
              },
              ge = 0,
              _e = 0,
              ke = [{ line: 1, column: 1, seenCR: !1 }],
              we = 0,
              xe = [],
              Oe = 0;
            if ("startRule" in r) {
              if (!(r.startRule in o))
                throw new Error(
                  "Can't start parsing from rule \"" + r.startRule + '".'
                );
              a = o[r.startRule];
            }
            function je() {
              return Ce(_e, ge);
            }
            function Se(e) {
              var n,
                r,
                i = ke[e];
              if (i) return i;
              for (n = e - 1; !ke[n]; ) n--;
              for (
                i = {
                  line: (i = ke[n]).line,
                  column: i.column,
                  seenCR: i.seenCR,
                };
                n < e;

              )
                "\n" === (r = t.charAt(n))
                  ? (i.seenCR || i.line++, (i.column = 1), (i.seenCR = !1))
                  : "\r" === r || "\u2028" === r || "\u2029" === r
                  ? (i.line++, (i.column = 1), (i.seenCR = !0))
                  : (i.column++, (i.seenCR = !1)),
                  n++;
              return (ke[e] = i), i;
            }
            function Ce(e, t) {
              var n = Se(e),
                r = Se(t);
              return {
                start: { offset: e, line: n.line, column: n.column },
                end: { offset: t, line: r.line, column: r.column },
              };
            }
            function Pe(e) {
              ge < we || (ge > we && ((we = ge), (xe = [])), xe.push(e));
            }
            function Ee(t, n, r, i) {
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
                          r = new Array(e.length);
                        for (n = 0; n < e.length; n++) r[n] = e[n].description;
                        return (
                          "Expected " +
                          (e.length > 1
                            ? r.slice(0, -1).join(", ") +
                              " or " +
                              r[e.length - 1]
                            : r[0]) +
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
                      })(n, r),
                  n,
                  r,
                  i
                )
              );
            }
            function Ae() {
              return Te();
            }
            function Te() {
              var e, t, n;
              for (e = ge, t = [], n = Re(); n !== i; ) t.push(n), (n = Re());
              return t !== i && ((_e = e), (t = s(t))), (e = t);
            }
            function Re() {
              var e;
              return (
                (e = (function() {
                  var e, n;
                  return (
                    (e = ge),
                    (n = (function() {
                      var e, n, r, o, a, s;
                      if (
                        ((e = ge),
                        (n = []),
                        (r = ge),
                        (o = Le()) !== i && (a = He()) !== i && (s = Le()) !== i
                          ? (r = o = [o, a, s])
                          : ((ge = r), (r = i)),
                        r !== i)
                      )
                        for (; r !== i; )
                          n.push(r),
                            (r = ge),
                            (o = Le()) !== i &&
                            (a = He()) !== i &&
                            (s = Le()) !== i
                              ? (r = o = [o, a, s])
                              : ((ge = r), (r = i));
                      else n = i;
                      return (
                        n !== i && ((_e = e), (n = c(n))),
                        (e = n) === i &&
                          ((e = ge),
                          (n = Ne()),
                          (e = n !== i ? t.substring(e, ge) : n)),
                        e
                      );
                    })()) !== i && ((_e = e), (n = l(n))),
                    (e = n)
                  );
                })()) === i &&
                  (e = (function() {
                    var e, n, r, o, a, s, c;
                    return (
                      (e = ge),
                      123 === t.charCodeAt(ge)
                        ? ((n = p), ge++)
                        : ((n = i), 0 === Oe && Pe(f)),
                      n !== i &&
                      Le() !== i &&
                      (r = (function() {
                        var e, n, r;
                        if ((e = De()) === i) {
                          if (
                            ((e = ge),
                            (n = []),
                            u.test(t.charAt(ge))
                              ? ((r = t.charAt(ge)), ge++)
                              : ((r = i), 0 === Oe && Pe(d)),
                            r !== i)
                          )
                            for (; r !== i; )
                              n.push(r),
                                u.test(t.charAt(ge))
                                  ? ((r = t.charAt(ge)), ge++)
                                  : ((r = i), 0 === Oe && Pe(d));
                          else n = i;
                          e = n !== i ? t.substring(e, ge) : n;
                        }
                        return e;
                      })()) !== i &&
                      Le() !== i
                        ? ((o = ge),
                          44 === t.charCodeAt(ge)
                            ? ((a = h), ge++)
                            : ((a = i), 0 === Oe && Pe(b)),
                          a !== i &&
                          (s = Le()) !== i &&
                          (c = (function() {
                            var e;
                            return (
                              (e = (function() {
                                var e, n, r, o, a, s;
                                return (
                                  (e = ge),
                                  t.substr(ge, 6) === g
                                    ? ((n = g), (ge += 6))
                                    : ((n = i), 0 === Oe && Pe(_)),
                                  n === i &&
                                    (t.substr(ge, 4) === k
                                      ? ((n = k), (ge += 4))
                                      : ((n = i), 0 === Oe && Pe(w)),
                                    n === i &&
                                      (t.substr(ge, 4) === x
                                        ? ((n = x), (ge += 4))
                                        : ((n = i), 0 === Oe && Pe(O)))),
                                  n !== i && Le() !== i
                                    ? ((r = ge),
                                      44 === t.charCodeAt(ge)
                                        ? ((o = h), ge++)
                                        : ((o = i), 0 === Oe && Pe(b)),
                                      o !== i &&
                                      (a = Le()) !== i &&
                                      (s = He()) !== i
                                        ? (r = o = [o, a, s])
                                        : ((ge = r), (r = i)),
                                      r === i && (r = null),
                                      r !== i
                                        ? ((_e = e), (n = j(n, r)), (e = n))
                                        : ((ge = e), (e = i)))
                                    : ((ge = e), (e = i)),
                                  e
                                );
                              })()) === i &&
                                (e = (function() {
                                  var e, n, r, o;
                                  return (
                                    (e = ge),
                                    t.substr(ge, 6) === S
                                      ? ((n = S), (ge += 6))
                                      : ((n = i), 0 === Oe && Pe(C)),
                                    n !== i && Le() !== i
                                      ? (44 === t.charCodeAt(ge)
                                          ? ((r = h), ge++)
                                          : ((r = i), 0 === Oe && Pe(b)),
                                        r !== i &&
                                        Le() !== i &&
                                        (o = Ie()) !== i
                                          ? ((_e = e), (n = P(o)), (e = n))
                                          : ((ge = e), (e = i)))
                                      : ((ge = e), (e = i)),
                                    e
                                  );
                                })()) === i &&
                                (e = (function() {
                                  var e, n, r, o;
                                  return (
                                    (e = ge),
                                    t.substr(ge, 13) === E
                                      ? ((n = E), (ge += 13))
                                      : ((n = i), 0 === Oe && Pe(A)),
                                    n !== i && Le() !== i
                                      ? (44 === t.charCodeAt(ge)
                                          ? ((r = h), ge++)
                                          : ((r = i), 0 === Oe && Pe(b)),
                                        r !== i &&
                                        Le() !== i &&
                                        (o = Ie()) !== i
                                          ? ((_e = e), (n = T(o)), (e = n))
                                          : ((ge = e), (e = i)))
                                      : ((ge = e), (e = i)),
                                    e
                                  );
                                })()) === i &&
                                (e = (function() {
                                  var e, n, r, o, a;
                                  if (
                                    ((e = ge),
                                    t.substr(ge, 6) === R
                                      ? ((n = R), (ge += 6))
                                      : ((n = i), 0 === Oe && Pe(z)),
                                    n !== i)
                                  )
                                    if (Le() !== i)
                                      if (
                                        (44 === t.charCodeAt(ge)
                                          ? ((r = h), ge++)
                                          : ((r = i), 0 === Oe && Pe(b)),
                                        r !== i)
                                      )
                                        if (Le() !== i) {
                                          if (((o = []), (a = ze()) !== i))
                                            for (; a !== i; )
                                              o.push(a), (a = ze());
                                          else o = i;
                                          o !== i
                                            ? ((_e = e), (n = I(o)), (e = n))
                                            : ((ge = e), (e = i));
                                        } else (ge = e), (e = i);
                                      else (ge = e), (e = i);
                                    else (ge = e), (e = i);
                                  else (ge = e), (e = i);
                                  return e;
                                })()),
                              e
                            );
                          })()) !== i
                            ? (o = a = [a, s, c])
                            : ((ge = o), (o = i)),
                          o === i && (o = null),
                          o !== i && (a = Le()) !== i
                            ? (125 === t.charCodeAt(ge)
                                ? ((s = m), ge++)
                                : ((s = i), 0 === Oe && Pe(v)),
                              s !== i
                                ? ((_e = e), (n = y(r, o)), (e = n))
                                : ((ge = e), (e = i)))
                            : ((ge = e), (e = i)))
                        : ((ge = e), (e = i)),
                      e
                    );
                  })()),
                e
              );
            }
            function ze() {
              var e, n, r, o, a;
              return (
                (e = ge),
                Le() !== i &&
                (n = (function() {
                  var e, n, r, o;
                  return (
                    (e = ge),
                    (n = ge),
                    61 === t.charCodeAt(ge)
                      ? ((r = N), ge++)
                      : ((r = i), 0 === Oe && Pe(L)),
                    r !== i && (o = De()) !== i
                      ? (n = r = [r, o])
                      : ((ge = n), (n = i)),
                    (e = n !== i ? t.substring(e, ge) : n) === i && (e = He()),
                    e
                  );
                })()) !== i &&
                Le() !== i
                  ? (123 === t.charCodeAt(ge)
                      ? ((r = p), ge++)
                      : ((r = i), 0 === Oe && Pe(f)),
                    r !== i && Le() !== i && (o = Te()) !== i && Le() !== i
                      ? (125 === t.charCodeAt(ge)
                          ? ((a = m), ge++)
                          : ((a = i), 0 === Oe && Pe(v)),
                        a !== i
                          ? ((_e = e), (e = M(n, o)))
                          : ((ge = e), (e = i)))
                      : ((ge = e), (e = i)))
                  : ((ge = e), (e = i)),
                e
              );
            }
            function Ie() {
              var e, n, r, o;
              if (
                ((e = ge),
                (n = (function() {
                  var e, n, r;
                  return (
                    (e = ge),
                    t.substr(ge, 7) === F
                      ? ((n = F), (ge += 7))
                      : ((n = i), 0 === Oe && Pe(D)),
                    n !== i && Le() !== i && (r = De()) !== i
                      ? ((_e = e), (e = n = B(r)))
                      : ((ge = e), (e = i)),
                    e
                  );
                })()) === i && (n = null),
                n !== i)
              )
                if (Le() !== i) {
                  if (((r = []), (o = ze()) !== i))
                    for (; o !== i; ) r.push(o), (o = ze());
                  else r = i;
                  r !== i ? ((_e = e), (e = n = H(n, r))) : ((ge = e), (e = i));
                } else (ge = e), (e = i);
              else (ge = e), (e = i);
              return e;
            }
            function Ne() {
              var e, n;
              if (
                (Oe++,
                (e = []),
                U.test(t.charAt(ge))
                  ? ((n = t.charAt(ge)), ge++)
                  : ((n = i), 0 === Oe && Pe(q)),
                n !== i)
              )
                for (; n !== i; )
                  e.push(n),
                    U.test(t.charAt(ge))
                      ? ((n = t.charAt(ge)), ge++)
                      : ((n = i), 0 === Oe && Pe(q));
              else e = i;
              return Oe--, e === i && ((n = i), 0 === Oe && Pe(V)), e;
            }
            function Le() {
              var e, n, r;
              for (Oe++, e = ge, n = [], r = Ne(); r !== i; )
                n.push(r), (r = Ne());
              return (
                (e = n !== i ? t.substring(e, ge) : n),
                Oe--,
                e === i && ((n = i), 0 === Oe && Pe(K)),
                e
              );
            }
            function Me() {
              var e;
              return (
                X.test(t.charAt(ge))
                  ? ((e = t.charAt(ge)), ge++)
                  : ((e = i), 0 === Oe && Pe($)),
                e
              );
            }
            function Fe() {
              var e;
              return (
                W.test(t.charAt(ge))
                  ? ((e = t.charAt(ge)), ge++)
                  : ((e = i), 0 === Oe && Pe(Y)),
                e
              );
            }
            function De() {
              var e, n, r, o, a, s;
              if (
                ((e = ge),
                48 === t.charCodeAt(ge)
                  ? ((n = G), ge++)
                  : ((n = i), 0 === Oe && Pe(J)),
                n === i)
              ) {
                if (
                  ((n = ge),
                  (r = ge),
                  Z.test(t.charAt(ge))
                    ? ((o = t.charAt(ge)), ge++)
                    : ((o = i), 0 === Oe && Pe(Q)),
                  o !== i)
                ) {
                  for (a = [], s = Me(); s !== i; ) a.push(s), (s = Me());
                  a !== i ? (r = o = [o, a]) : ((ge = r), (r = i));
                } else (ge = r), (r = i);
                n = r !== i ? t.substring(n, ge) : r;
              }
              return n !== i && ((_e = e), (n = ee(n))), (e = n);
            }
            function Be() {
              var e, n, r, o, a, s, c, l;
              return (
                te.test(t.charAt(ge))
                  ? ((e = t.charAt(ge)), ge++)
                  : ((e = i), 0 === Oe && Pe(ne)),
                e === i &&
                  ((e = ge),
                  t.substr(ge, 2) === re
                    ? ((n = re), (ge += 2))
                    : ((n = i), 0 === Oe && Pe(ie)),
                  n !== i && ((_e = e), (n = oe())),
                  (e = n) === i &&
                    ((e = ge),
                    t.substr(ge, 2) === ae
                      ? ((n = ae), (ge += 2))
                      : ((n = i), 0 === Oe && Pe(se)),
                    n !== i && ((_e = e), (n = ce())),
                    (e = n) === i &&
                      ((e = ge),
                      t.substr(ge, 2) === le
                        ? ((n = le), (ge += 2))
                        : ((n = i), 0 === Oe && Pe(ue)),
                      n !== i && ((_e = e), (n = de())),
                      (e = n) === i &&
                        ((e = ge),
                        t.substr(ge, 2) === pe
                          ? ((n = pe), (ge += 2))
                          : ((n = i), 0 === Oe && Pe(fe)),
                        n !== i && ((_e = e), (n = he())),
                        (e = n) === i &&
                          ((e = ge),
                          t.substr(ge, 2) === be
                            ? ((n = be), (ge += 2))
                            : ((n = i), 0 === Oe && Pe(me)),
                          n !== i
                            ? ((r = ge),
                              (o = ge),
                              (a = Fe()) !== i &&
                              (s = Fe()) !== i &&
                              (c = Fe()) !== i &&
                              (l = Fe()) !== i
                                ? (o = a = [a, s, c, l])
                                : ((ge = o), (o = i)),
                              (r = o !== i ? t.substring(r, ge) : o) !== i
                                ? ((_e = e), (e = n = ve(r)))
                                : ((ge = e), (e = i)))
                            : ((ge = e), (e = i))))))),
                e
              );
            }
            function He() {
              var e, t, n;
              if (((e = ge), (t = []), (n = Be()) !== i))
                for (; n !== i; ) t.push(n), (n = Be());
              else t = i;
              return t !== i && ((_e = e), (t = ye(t))), (e = t);
            }
            if ((n = a()) !== i && ge === t.length) return n;
            throw (n !== i &&
              ge < t.length &&
              Pe({ type: "end", description: "end of input" }),
            Ee(
              null,
              xe,
              we < t.length ? t.charAt(we) : null,
              we < t.length ? Ce(we, we + 1) : Ce(we, we)
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
    var u = Object(r.a)(function(e) {
      return (function(t) {
        function n() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            s(this, c(n).apply(this, arguments))
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
              t && l(e, t);
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
  function(e, t, n) {
    "use strict";
    n(4), n(107), n(41);
    var r = n(56),
      i = n(5),
      o = n(3);
    function a() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be `transparent`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"\n               alt$="[[alt]]"></iron-icon>\n  ',
        ],
        [
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be \\`transparent\\`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"\n               alt$="[[alt]]"></iron-icon>\n  ',
        ]
      );
      return (
        (a = function() {
          return e;
        }),
        e
      );
    }
    Object(i.a)({
      is: "paper-icon-button",
      _template: Object(o.a)(a()),
      hostAttributes: { role: "button", tabindex: "0" },
      behaviors: [r.a],
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
    var r = n(5),
      i = n(1),
      o = n(3),
      a = n(4);
    function s() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n",
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
              Object(i.a)(this.root).removeChild(this._img),
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
            Object(i.a)(this.root).appendChild(this._img));
      },
    });
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var r = n(31),
      i = n(5),
      o = n(1),
      a = n(3);
    function s() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler "interrupts" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id="background"></div>\n    <div id="waves"></div>\n',
      ]);
      return (
        (s = function() {
          return e;
        }),
        e
      );
    }
    var c = {
      distance: function(e, t, n, r) {
        var i = e - n,
          o = t - r;
        return Math.sqrt(i * i + o * o);
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
    function u(e) {
      (this.element = e),
        (this.color = window.getComputedStyle(e).color),
        (this.wave = document.createElement("div")),
        (this.waveContainer = document.createElement("div")),
        (this.wave.style.backgroundColor = this.color),
        this.wave.classList.add("wave"),
        this.waveContainer.classList.add("wave-container"),
        Object(o.a)(this.waveContainer).appendChild(this.wave),
        this.resetInteractionState();
    }
    (l.prototype = {
      get boundingRect() {
        return this.element.getBoundingClientRect();
      },
      furthestCornerDistanceFrom: function(e, t) {
        var n = c.distance(e, t, 0, 0),
          r = c.distance(e, t, this.width, 0),
          i = c.distance(e, t, 0, this.height),
          o = c.distance(e, t, this.width, this.height);
        return Math.max(n, r, i, o);
      },
    }),
      (u.MAX_RADIUS = 300),
      (u.prototype = {
        get recenters() {
          return this.element.recenters;
        },
        get center() {
          return this.element.center;
        },
        get mouseDownElapsed() {
          var e;
          return this.mouseDownStart
            ? ((e = c.now() - this.mouseDownStart),
              this.mouseUpStart && (e -= this.mouseUpElapsed),
              e)
            : 0;
        },
        get mouseUpElapsed() {
          return this.mouseUpStart ? c.now() - this.mouseUpStart : 0;
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
            n = 1.1 * Math.min(Math.sqrt(e + t), u.MAX_RADIUS) + 5,
            r = 1.1 - (n / u.MAX_RADIUS) * 0.2,
            i = this.mouseInteractionSeconds / r,
            o = n * (1 - Math.pow(80, -i));
          return Math.abs(o);
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
            this.radius >= Math.min(this.maxRadius, u.MAX_RADIUS)
          );
        },
        get isRestingAtMaxRadius() {
          return (
            this.opacity >= this.initialOpacity &&
            this.radius >= Math.min(this.maxRadius, u.MAX_RADIUS)
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
            (this.mouseDownStart = c.now()),
            this.center
              ? ((this.xStart = t),
                (this.yStart = n),
                (this.slideDistance = c.distance(
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
              (this.slideDistance = c.distance(
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
          this.isMouseDown && (this.mouseUpStart = c.now());
        },
        remove: function() {
          Object(o.a)(this.waveContainer.parentNode).removeChild(
            this.waveContainer
          );
        },
      }),
      Object(i.a)({
        _template: Object(a.a)(s()),
        is: "paper-ripple",
        behaviors: [r.a],
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
            ? (this.keyEventTarget = Object(o.a)(this).getOwnerRoot().host)
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
          var e = new u(this);
          return (
            Object(o.a)(this.$.waves).appendChild(e.waveContainer),
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
      return r;
    });
    n(4);
    var r = {
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
    var r = n(91),
      i = n(60),
      o = n(5),
      a = n(1),
      s = n(3);
    function c() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n',
      ]);
      return (
        (c = function() {
          return e;
        }),
        e
      );
    }
    Object(o.a)({
      _template: Object(s.a)(c()),
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
  function(e, t, n) {
    "use strict";
    n(4), n(52);
    var r = n(5),
      i = n(3),
      o = n(68);
    function a() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        "\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n",
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
      is: "paper-input-char-counter",
      behaviors: [o.a],
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
    var r = n(5),
      i = n(1),
      o = n(22),
      a = n(3);
    function s() {
      var e = l([
        '\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn\'t apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>\n\n    <div class="input-wrapper">\n      <span class="prefix"><slot name="prefix"></slot></span>\n\n      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">\n        <slot name="label"></slot>\n        <slot name="input"></slot>\n      </div>\n\n      <span class="suffix"><slot name="suffix"></slot></span>\n    </div>\n\n    <div class$="[[_computeUnderlineClass(focused,invalid)]]">\n      <div class="unfocused-line"></div>\n      <div class="focused-line"></div>\n    </div>\n\n    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">\n      <slot name="add-on"></slot>\n    </div>\n',
      ]);
      return (
        (s = function() {
          return e;
        }),
        e
      );
    }
    function c() {
      var e = l([
        '\n<custom-style>\n  <style is="custom-style">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n',
      ]);
      return (
        (c = function() {
          return e;
        }),
        e
      );
    }
    function l(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var u = Object(a.a)(c());
    u.setAttribute("style", "display: none;"),
      document.head.appendChild(u.content),
      Object(r.a)({
        _template: Object(a.a)(s()),
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
          return Object(o.b)(this.attrForValue);
        },
        get _inputElement() {
          return Object(i.a)(this).querySelector(this._inputSelector);
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
        _computeInputContentClass: function(e, t, n, r, i) {
          var o = "input-content";
          if (e) i && (o += " label-is-hidden"), r && (o += " is-invalid");
          else {
            var a = this.querySelector("label");
            t || i
              ? ((o += " label-is-floating"),
                (this.$.labelAndInputContainer.style.position = "static"),
                r ? (o += " is-invalid") : n && (o += " label-is-highlighted"))
              : (a &&
                  (this.$.labelAndInputContainer.style.position = "relative"),
                r && (o += " is-invalid"));
          }
          return n && (o += " focused"), o;
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
    var r = n(5),
      i = n(3),
      o = n(68);
    function a() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n',
        ],
        [
          '\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n',
        ]
      );
      return (
        (a = function() {
          return e;
        }),
        e
      );
    }
    Object(r.a)({
      _template: Object(i.a)(a()),
      is: "paper-input-error",
      behaviors: [o.a],
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
      return o;
    });
    n(4);
    var r = n(53),
      i = n(34),
      o = [r.a, i.a, { hostAttributes: { role: "option", tabindex: "0" } }];
  },
  ,
  function(e, t, n) {
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
            var c = n[s].result,
              l = n[s].config,
              u = n[s].neonAnimation;
            try {
              "function" != typeof c.cancel && (c = document.timeline.play(c));
            } catch (d) {
              (c = null), console.warn("Couldnt play", "(", l.name, ").", d);
            }
            c && t.push({ neonAnimation: u, config: l, animation: c });
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
  function(e, t, n) {
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
          (void 0 !== this.value && null !== this.value) || (this.value = "on");
        },
      },
      a = [r.a, i.a, o],
      s = n(56),
      c = n(67);
    n.d(t, "a", function() {
      return u;
    });
    var l = {
        _checkedChanged: function() {
          o._checkedChanged.call(this),
            this.hasRipple() &&
              (this.checked
                ? this._ripple.setAttribute("checked", "")
                : this._ripple.removeAttribute("checked"));
        },
        _buttonStateChanged: function() {
          c.a._buttonStateChanged.call(this),
            this.disabled || (this.isAttached && (this.checked = this.active));
        },
      },
      u = [s.a, a, l];
  },
  function(e, t, n) {
    "use strict";
    n(4);
    var r = n(31),
      i = n(87),
      o = {
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
            : i.a._updateAttrForSelected.apply(this);
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
      a = [i.a, o],
      s = n(1);
    n.d(t, "b", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return l;
      });
    var c = {
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
            (this._setFocusedItem(t), o.select.apply(this, arguments));
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
                r = (n += (e.key && 1 == e.key.length
                  ? e.key
                  : String.fromCharCode(e.keyCode)
                ).toLocaleLowerCase()).length,
                i = 0;
              (t = this.items[i]);
              i++
            )
              if (!t.hasAttribute("disabled")) {
                var o = this.attrForItemTitle || "textContent",
                  a = (t[o] || t.getAttribute(o) || "").trim();
                if (!(a.length < r) && a.slice(0, r).toLocaleLowerCase() == n) {
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
            var r = this.items[(t - n + e) % e];
            if (!r.hasAttribute("disabled")) {
              var i = Object(s.a)(r).getOwnerRoot() || document;
              if ((this._setFocusedItem(r), Object(s.a)(i).activeElement == r))
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
            var r = this.items[(t + n) % e];
            if (!r.hasAttribute("disabled")) {
              var i = Object(s.a)(r).getOwnerRoot() || document;
              if ((this._setFocusedItem(r), Object(s.a)(i).activeElement == r))
                return;
            }
          }
        },
        _applySelection: function(e, t) {
          t
            ? e.setAttribute("aria-selected", "true")
            : e.setAttribute("aria-selected", "false"),
            i.a._applySelection.apply(this, arguments);
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
          (c._shiftTabPressed = !0),
            this._setFocusedItem(null),
            this.setAttribute("tabindex", "-1"),
            this.async(function() {
              this.setAttribute("tabindex", t), (c._shiftTabPressed = !1);
            }, 1);
        },
        _onFocus: function(e) {
          if (!c._shiftTabPressed) {
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
          i.a._activateHandler.call(this, e), e.stopPropagation();
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
      l = [a, r.a, c];
  },
  ,
  function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    n(4);
    var r = n(1),
      i = Element.prototype,
      o =
        i.matches ||
        i.matchesSelector ||
        i.mozMatchesSelector ||
        i.msMatchesSelector ||
        i.oMatchesSelector ||
        i.webkitMatchesSelector,
      a = {
        getTabbableNodes: function(e) {
          var t = [];
          return this._collectTabbableNodes(e, t) ? this._sortByTabIndex(t) : t;
        },
        isFocusable: function(e) {
          return o.call(e, "input, select, textarea, button, object")
            ? o.call(e, ":not([disabled])")
            : o.call(
                e,
                "a[href], area[href], iframe, [tabindex], [contentEditable]"
              );
        },
        isTabbable: function(e) {
          return (
            this.isFocusable(e) &&
            o.call(e, ':not([tabindex="-1"])') &&
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
          if (e.nodeType !== Node.ELEMENT_NODE || !this._isVisible(e))
            return !1;
          var n,
            i = e,
            o = this._normalizedTabIndex(i),
            a = o > 0;
          o >= 0 && t.push(i),
            (n =
              "content" === i.localName || "slot" === i.localName
                ? Object(r.a)(i).getDistributedNodes()
                : Object(r.a)(i.root || i).children);
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
            r = this._sortByTabIndex(e.slice(0, n)),
            i = this._sortByTabIndex(e.slice(n));
          return this._mergeSortByTabIndex(r, i);
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
            r = Math.max(t.tabIndex, 0);
          return 0 === n || 0 === r ? r > n : n > r;
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
  function(e, t, n) {
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
  function(e, t, n) {
    "use strict";
    n(44), n(55), n(41), n(52);
    var r = document.createElement("template");
    r.setAttribute("style", "display: none;"),
      (r.innerHTML =
        "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>"),
      document.head.appendChild(r.content);
  },
  function(e, t, n) {
    "use strict";
    n(4), n(31), n(107), n(90), n(142), n(108), n(41), n(143), n(144);
    var r = n(53),
      i = n(34),
      o = n(59),
      a = n(60),
      s = n(5),
      c = n(1),
      l = n(35),
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
        l.c(e) === this && this.open();
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
    var r = n(31),
      i = n(34),
      o = n(84),
      a = n(119),
      s = n(5),
      c = n(1),
      l = n(3);
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
      _template: Object(l.a)(u()),
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
          var e = Object(c.a)(this.$.content).getDistributedNodes(),
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
          var r,
            i = {
              transform: ["webkitTransform"],
              transformOrigin: ["mozTransformOrigin", "webkitTransformOrigin"],
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
    var f = {
        ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
        MAX_ANIMATION_TIME_MS: 400,
      },
      h = Object(s.a)({
        _template: Object(l.a)(p()),
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
            var e = Object(c.a)(this.$.content).getDistributedNodes(),
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
          Object(c.a)(t).path.indexOf(n) > -1 && e.preventDefault();
        },
      });
    Object.keys(f).forEach(function(e) {
      h[e] = f[e];
    });
  },
  function(e, t, n) {
    "use strict";
    n(85);
    var r = document.createElement("template");
    r.setAttribute("style", "display: none;"),
      (r.innerHTML =
        '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'),
      document.head.appendChild(r.content);
  },
  function(e, t, n) {
    "use strict";
    n(41);
    var r = document.createElement("template");
    r.setAttribute("style", "display: none;"),
      (r.innerHTML =
        '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>'),
      document.head.appendChild(r.content);
  },
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    n(4), n(41);
    var r = n(120),
      i = n(56),
      o = n(5),
      a = n(3),
      s = n(61);
    function c() {
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
        (c = function() {
          return e;
        }),
        e
      );
    }
    var l = Object(a.a)(c());
    l.setAttribute("strip-whitespace", ""),
      Object(o.a)({
        _template: l,
        is: "paper-checkbox",
        behaviors: [r.a],
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
              var r = parseFloat(e),
                i = (8 / 3) * r;
              "px" === t && (i = Math.floor(i)) % 2 != r % 2 && i++,
                this.updateStyles({ "--paper-checkbox-ink-size": i + t });
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
            i.b._createRipple.call(this)
          );
        },
      });
  },
  ,
  function(e, t, n) {
    "use strict";
    var r = n(25),
      i = n(105);
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
    function c(e, t, n) {
      return (c =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = l(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function l(e) {
      return (l = Object.setPrototypeOf
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
    var d = null,
      p = ["svg", "path"],
      f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            s(this, l(t).apply(this, arguments))
          );
        }
        var o, f, h;
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
          })(t, Object(i["a"])(r["a"])),
          (o = t),
          (h = [
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
          (f = [
            {
              key: "connectedCallback",
              value: function() {
                var e = this;
                c(l(t.prototype), "connectedCallback", this).call(this),
                  (this._scriptLoaded = 0),
                  (this._renderScheduled = !1),
                  (this._resize = function() {
                    return e.fire("iron-resize");
                  }),
                  d ||
                    (d = Promise.all([n.e(114), n.e(68)]).then(
                      n.bind(null, 168)
                    )),
                  d
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
                                return p.indexOf(e) >= 0 ? t : null;
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
          ]) && a(o.prototype, f),
          h && a(o, h),
          t
        );
      })();
    customElements.define("ha-markdown", f);
  },
  function(e, t, n) {
    "use strict";
    n(4), n(44), n(55);
    var r = n(109),
      i = n(5),
      o = n(3);
    function a() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: "";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id="progressContainer">\n      <div id="secondaryProgress" hidden$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>\n      <div id="primaryProgress"></div>\n    </div>\n',
        ],
        [
          '\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: "";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id="progressContainer">\n      <div id="secondaryProgress" hidden\\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>\n      <div id="primaryProgress"></div>\n    </div>\n',
        ]
      );
      return (
        (a = function() {
          return e;
        }),
        e
      );
    }
    Object(i.a)({
      _template: Object(o.a)(a()),
      is: "paper-progress",
      behaviors: [r.a],
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
      _progressChanged: function(e, t, n, r, i) {
        (e = this._clampValue(e)), (t = this._clampValue(t));
        var o = 100 * this._calcRatio(e),
          a = 100 * this._calcRatio(t);
        this._setSecondaryRatio(o),
          this._transformProgress(this.$.secondaryProgress, o),
          this._transformProgress(this.$.primaryProgress, a),
          (this.secondaryProgress = e),
          i
            ? this.removeAttribute("aria-valuenow")
            : this.setAttribute("aria-valuenow", t),
          this.setAttribute("aria-valuemin", n),
          this.setAttribute("aria-valuemax", r);
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
    n(44), n(90), n(151), n(55);
    var r = n(31),
      i = n(59),
      o = n(109),
      a = n(56),
      s = n(5),
      c = n(35),
      l = n(4);
    function u() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full\n      * compatibility, dir="rtl" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir="rtl"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir="ltr"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: "";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id="sliderContainer" class$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">\n    <div class="bar-container">\n      <paper-progress disabled$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">\n      </paper-progress>\n    </div>\n\n    <template is="dom-if" if="[[snaps]]">\n      <div class="slider-markers">\n        <template is="dom-repeat" items="[[markers]]">\n          <div class="slider-marker"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">\n        <div class="slider-knob-inner" value$="[[immediateValue]]"></div>\n    </div>\n  </div>\n\n  <template is="dom-if" if="[[editable]]">\n    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>\n    </paper-input>\n  </template>\n',
        ],
        [
          '\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full\n      * compatibility, dir="rtl" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir="rtl"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir="ltr"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: "";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id="sliderContainer" class\\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">\n    <div class="bar-container">\n      <paper-progress disabled\\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">\n      </paper-progress>\n    </div>\n\n    <template is="dom-if" if="[[snaps]]">\n      <div class="slider-markers">\n        <template is="dom-repeat" items="[[markers]]">\n          <div class="slider-marker"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">\n        <div class="slider-knob-inner" value\\$="[[immediateValue]]"></div>\n    </div>\n  </div>\n\n  <template is="dom-if" if="[[editable]]">\n    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>\n    </paper-input>\n  </template>\n',
        ]
      );
      return (
        (u = function() {
          return e;
        }),
        e
      );
    }
    var d = Object(l.c)(u());
    d.setAttribute("strip-whitespace", ""),
      Object(s.a)({
        _template: d,
        is: "paper-slider",
        behaviors: [r.a, i.a, a.a, o.a],
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
          this.ignoreBarTouch && Object(c.f)(this.$.sliderBar, "auto");
        },
        increment: function() {
          this.value = this._clampValue(this.value + this.step);
        },
        decrement: function() {
          this.value = this._clampValue(this.value - this.step);
        },
        _updateKnob: function(e, t, n, r, i) {
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
          var r = this._calcStep(
            this._calcKnobPosition((this._x / this._w) * 100)
          );
          this._setImmediateValue(r);
          var i =
            this._calcRatio(this.immediateValue) * this._w - this._knobstartx;
          this.translate3d(i + "px", 0, 0, this.$.sliderKnob);
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
          var r = this.ratio;
          this._setTransiting(!0),
            this._positionKnob(n),
            r === this.ratio && this._setTransiting(!1),
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
        _updateMarkers: function(e, t, n, r) {
          r || this._setMarkers([]);
          var i = Math.round((n - t) / this.step);
          i > e && (i = e),
            (i < 0 || !isFinite(i)) && (i = 0),
            this._setMarkers(new Array(i));
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
    function a(e) {
      return (a = Object.setPrototypeOf
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
    var c = customElements.get("paper-slider"),
      l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            o(this, a(t).apply(this, arguments))
          );
        }
        var n, r, l;
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
          })(t, c),
          (n = t),
          (l = [
            {
              key: "template",
              get: function() {
                var e = document.createElement("template");
                e.innerHTML = c.template.innerHTML;
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
          (r = null) && i(n.prototype, r),
          l && i(n, l),
          t
        );
      })();
    customElements.define("ha-paper-slider", l);
  },
  ,
  function(e, t, n) {
    "use strict";
    n(148), n(141), n(106), n(90), n(138), n(139);
    var r = n(3),
      i = n(25),
      o = (n(153), n(105));
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
    function s() {
      var e = (function(e, t) {
        t || (t = e.slice(0));
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })([
        '\n      <style>\n        .error {\n          color: red;\n        }\n        paper-checkbox {\n          display: inline-block;\n          padding: 22px 0;\n        }\n      </style>\n      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error.base]]">\n          <div class="error">[[computeError(error.base, schema)]]</div>\n        </template>\n\n        <template is="dom-repeat" items="[[schema]]">\n          <ha-form\n            data="[[_getValue(data, item)]]"\n            schema="[[item]]"\n            error="[[_getValue(error, item)]]"\n            on-data-changed="_valueChanged"\n            compute-label="[[computeLabel]]"\n            compute-error="[[computeError]]"\n          ></ha-form>\n        </template>\n      </template>\n      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">\n        <template is="dom-if" if="[[error]]">\n          <div class="error">[[computeError(error, schema)]]</div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "string")]]\'\n          restamp=""\n        >\n          <template\n            is="dom-if"\n            if=\'[[_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              type="[[_passwordFieldType(unmaskedPassword)]]"\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            >\n              <paper-icon-button\n                toggles\n                active="{{unmaskedPassword}}"\n                slot="suffix"\n                icon="[[_passwordFieldIcon(unmaskedPassword)]]"\n                id="iconButton"\n                title="Click to toggle between masked and clear password"\n              >\n              </paper-icon-button>\n            </paper-input>\n          </template>\n          <template\n            is="dom-if"\n            if=\'[[!_includes(schema.name, "password")]]\'\n            restamp=""\n          >\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "integer")]]\'\n          restamp=""\n        >\n          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">\n            <div>\n              [[computeLabel(schema)]]\n              <ha-paper-slider\n                pin=""\n                value="{{data}}"\n                min="[[schema.valueMin]]"\n                max="[[schema.valueMax]]"\n              ></ha-paper-slider>\n            </div>\n          </template>\n          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">\n            <paper-input\n              label="[[computeLabel(schema)]]"\n              value="{{data}}"\n              type="number"\n              required="[[schema.required]]"\n              auto-validate="[[schema.required]]"\n              error-message="Required"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template is="dom-if" if=\'[[_equals(schema.type, "float")]]\' restamp="">\n          \x3c!-- TODO --\x3e\n          <paper-input\n            label="[[computeLabel(schema)]]"\n            value="{{data}}"\n            required="[[schema.required]]"\n            auto-validate="[[schema.required]]"\n            error-message="Required"\n          ></paper-input>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "boolean")]]\'\n          restamp=""\n        >\n          <div>\n            <paper-checkbox checked="{{data}}"\n              >[[computeLabel(schema)]]</paper-checkbox\n            >\n          </div>\n        </template>\n\n        <template\n          is="dom-if"\n          if=\'[[_equals(schema.type, "select")]]\'\n          restamp=""\n        >\n          <paper-dropdown-menu label="[[computeLabel(schema)]]">\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="item-name"\n              selected="{{data}}"\n            >\n              <template is="dom-repeat" items="[[schema.options]]">\n                <paper-item item-name$="[[_optionValue(item)]]"\n                  >[[_optionLabel(item)]]</paper-item\n                >\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </template>\n      </template>\n    ',
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
    function u(e) {
      return (u = Object.setPrototypeOf
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
    var p = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          l(this, u(t).apply(this, arguments))
        );
      }
      var n, a, p;
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
        })(t, Object(o["a"])(i["a"])),
        (n = t),
        (p = [
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
        (a = [
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
        ]) && c(n.prototype, a),
        p && c(n, p),
        t
      );
    })();
    customElements.define("ha-form", p);
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
    var r = n(80),
      i = n(0);
    n(82), n(155), n(150);
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
    function a() {
      var e = g([
        "\n      :host {\n        /* So we can set min-height to avoid jumping during loading */\n        display: block;\n      }\n      .action {\n        margin: 24px 0 8px;\n        text-align: center;\n      }\n      .error {\n        color: red;\n      }\n    ",
      ]);
      return (
        (a = function() {
          return e;
        }),
        e
      );
    }
    function s(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function c(e) {
      return function() {
        var t = this,
          n = arguments;
        return new Promise(function(r, i) {
          var o = e.apply(t, n);
          function a(e) {
            s(o, r, i, a, c, "next", e);
          }
          function c(e) {
            s(o, r, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    function l() {
      var e = g([""]);
      return (
        (l = function() {
          return e;
        }),
        e
      );
    }
    function u() {
      var e = g([""]);
      return (
        (u = function() {
          return e;
        }),
        e
      );
    }
    function d() {
      var e = g([
        "\n                <ha-markdown\n                  .content=",
        "\n                  allow-svg\n                ></ha-markdown>\n              ",
      ]);
      return (
        (d = function() {
          return e;
        }),
        e
      );
    }
    function p() {
      var e = g([
        "\n          ",
        "\n          <ha-form\n            .data=",
        "\n            .schema=",
        "\n            .error=",
        "\n            .computeLabel=",
        "\n            .computeError=",
        "\n          ></ha-form>\n        ",
      ]);
      return (
        (p = function() {
          return e;
        }),
        e
      );
    }
    function f() {
      var e = g([
        "\n          ",
        ":\n          <ha-markdown\n            .content=",
        "\n          ></ha-markdown>\n        ",
      ]);
      return (
        (f = function() {
          return e;
        }),
        e
      );
    }
    function h() {
      var e = g(["\n          ", "\n        "]);
      return (
        (h = function() {
          return e;
        }),
        e
      );
    }
    function b() {
      var e = g(['\n          <div class="error">Error: ', "</div>\n        "]);
      return (
        (b = function() {
          return e;
        }),
        e
      );
    }
    function m() {
      var e = g([
        "\n          ",
        '\n          <div class="action">\n            <mwc-button raised @click=',
        "\n              >",
        "</mwc-button\n            >\n          </div>\n        ",
      ]);
      return (
        (m = function() {
          return e;
        }),
        e
      );
    }
    function v() {
      var e = g([""]);
      return (
        (v = function() {
          return e;
        }),
        e
      );
    }
    function y() {
      var e = g(["\n      <form>\n        ", "\n      </form>\n    "]);
      return (
        (y = function() {
          return e;
        }),
        e
      );
    }
    function g(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    function _(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function w(e) {
      var t,
        n = C(e.key);
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
    function x(e, t) {
      void 0 !== e.descriptor.get
        ? (t.descriptor.get = e.descriptor.get)
        : (t.descriptor.set = e.descriptor.set);
    }
    function O(e) {
      return e.decorators && e.decorators.length;
    }
    function j(e) {
      return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
    }
    function S(e, t) {
      var n = e[t];
      if (void 0 !== n && "function" != typeof n)
        throw new TypeError("Expected '" + t + "' to be a function");
      return n;
    }
    function C(e) {
      var t = (function(e, t) {
        if ("object" !== o(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === o(t) ? t : String(t);
    }
    function P(e, t, n) {
      return (P =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = E(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function E(e) {
      return (E = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var A = (function(e, t, n, r) {
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
                if (!O(e)) return n.push(e);
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
                c = this.toElementFinisherExtras((0, i[o])(s) || s);
              (e = c.element),
                this.addElementPlacement(e, t),
                c.finisher && r.push(c.finisher);
              var l = c.extras;
              if (l) {
                for (var u = 0; u < l.length; u++)
                  this.addElementPlacement(l[u], t);
                n.push.apply(n, l);
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
            var n = C(e.key),
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
                ? this.disallowProperty(e, "initializer", "A method descriptor")
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
              n = S(e, "finisher"),
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
            var n = S(e, "finisher"),
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
                if (j(o.descriptor) || j(i.descriptor)) {
                  if (O(o) || O(i))
                    throw new ReferenceError(
                      "Duplicated methods (" + o.key + ") can't be decorated."
                    );
                  i.descriptor = o.descriptor;
                } else {
                  if (O(o)) {
                    if (O(i))
                      throw new ReferenceError(
                        "Decorators can't be placed on different accessors with for the same property (" +
                          o.key +
                          ")."
                      );
                    i.decorators = o.decorators;
                  }
                  x(o, i);
                }
              else t.push(o);
            }
            return t;
          })(a.d.map(w)),
          e
        );
      return (
        i.initializeClassElements(a.F, s.elements),
        i.runClassFinishers(a.F, s.finishers)
      );
    })(
      null,
      function(e, t) {
        var n = (function(n) {
          function r() {
            var t, n, i, a;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
              c[l] = arguments[l];
            return (
              (i = this),
              (n =
                !(a = (t = E(r)).call.apply(t, [this].concat(c))) ||
                ("object" !== o(a) && "function" != typeof a)
                  ? _(i)
                  : a),
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
                t && k(e, t);
            })(r, t),
            r
          );
        })();
        return {
          F: n,
          d: [
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "authProvider",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "clientId",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "redirectUri",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "oauth2State",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "_state",
              value: function() {
                return "loading";
              },
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "_stepData",
              value: function() {
                return {};
              },
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "_step",
              value: void 0,
            },
            {
              kind: "field",
              decorators: [Object(i.g)()],
              key: "_errorMessage",
              value: void 0,
            },
            {
              kind: "method",
              key: "render",
              value: function() {
                return Object(i.f)(y(), this._renderForm());
              },
            },
            {
              kind: "method",
              key: "firstUpdated",
              value: function(e) {
                var t = this;
                if (
                  (P(E(n.prototype), "firstUpdated", this).call(this, e),
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
                this.addEventListener("keypress", function(e) {
                  13 === e.keyCode && t._handleSubmit(e);
                });
              },
            },
            {
              kind: "method",
              key: "updated",
              value: function(e) {
                P(E(n.prototype), "updated", this).call(this, e),
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
                      ? Object(i.f)(v())
                      : Object(i.f)(
                          m(),
                          this._renderStep(this._step),
                          this._handleSubmit,
                          "form" === this._step.type ? "Next" : "Start over"
                        );
                  case "error":
                    return Object(i.f)(b(), this._errorMessage);
                  case "loading":
                    return Object(i.f)(
                      h(),
                      this.localize("ui.panel.page-authorize.form.working")
                    );
                }
              },
            },
            {
              kind: "method",
              key: "_renderStep",
              value: function(e) {
                switch (e.type) {
                  case "abort":
                    return Object(i.f)(
                      f(),
                      this.localize("ui.panel.page-authorize.abort_intro"),
                      this.localize(
                        "ui.panel.page-authorize.form.providers."
                          .concat(e.handler[0], ".abort.")
                          .concat(e.reason)
                      )
                    );
                  case "form":
                    return Object(i.f)(
                      p(),
                      this._computeStepDescription(e)
                        ? Object(i.f)(d(), this._computeStepDescription(e))
                        : Object(i.f)(u()),
                      this._stepData,
                      e.data_schema,
                      e.errors,
                      this._computeLabelCallback(e),
                      this._computeErrorCallback(e)
                    );
                  default:
                    return Object(i.f)(l());
                }
              },
            },
            {
              kind: "method",
              key: "_providerChanged",
              value: (function() {
                var e = c(
                  regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (this._step &&
                                  "form" === this._step.type &&
                                  fetch(
                                    "/auth/login_flow/".concat(
                                      this._step.flow_id
                                    ),
                                    {
                                      method: "DELETE",
                                      credentials: "same-origin",
                                    }
                                  ).catch(function(e) {
                                    console.error(
                                      "Error delete obsoleted auth flow",
                                      e
                                    );
                                  }),
                                null != t)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                console.error("No auth provider"),
                                (this._state = "error"),
                                (this._errorMessage = this._unknownError()),
                                e.abrupt("return")
                              );
                            case 6:
                              return (
                                (e.prev = 6),
                                (e.next = 9),
                                fetch("/auth/login_flow", {
                                  method: "POST",
                                  credentials: "same-origin",
                                  body: JSON.stringify({
                                    client_id: this.clientId,
                                    handler: [t.type, t.id],
                                    redirect_uri: this.redirectUri,
                                  }),
                                })
                              );
                            case 9:
                              return (n = e.sent), (e.next = 12), n.json();
                            case 12:
                              if (((r = e.sent), !n.ok)) {
                                e.next = 21;
                                break;
                              }
                              if ("create_entry" !== r.type) {
                                e.next = 17;
                                break;
                              }
                              return (
                                this._redirect(r.result), e.abrupt("return")
                              );
                            case 17:
                              return (e.next = 19), this._updateStep(r);
                            case 19:
                              e.next = 23;
                              break;
                            case 21:
                              (this._state = "error"),
                                (this._errorMessage = r.message);
                            case 23:
                              e.next = 30;
                              break;
                            case 25:
                              (e.prev = 25),
                                (e.t0 = e.catch(6)),
                                console.error("Error starting auth flow", e.t0),
                                (this._state = "error"),
                                (this._errorMessage = this._unknownError());
                            case 30:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[6, 25]]
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
              key: "_redirect",
              value: function(e) {
                var t = this.redirectUri;
                t.includes("?") ? t.endsWith("&") || (t += "&") : (t += "?"),
                  (t += "code=".concat(encodeURIComponent(e))),
                  this.oauth2State &&
                    (t += "&state=".concat(
                      encodeURIComponent(this.oauth2State)
                    )),
                  document.location.assign(t);
              },
            },
            {
              kind: "method",
              key: "_updateStep",
              value: (function() {
                var e = c(
                  regeneratorRuntime.mark(function e(t) {
                    var n,
                      r = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = null),
                                this._step &&
                                  (t.flow_id !== this._step.flow_id ||
                                    ("form" === t.type &&
                                      "form" === this._step.type &&
                                      t.step_id !== this._step.step_id)) &&
                                  (n = {}),
                                (this._step = t),
                                (this._state = "step"),
                                null != n && (this._stepData = n),
                                (e.next = 7),
                                this.updateComplete
                              );
                            case 7:
                              setTimeout(function() {
                                var e = r.shadowRoot.querySelector("ha-form");
                                e && e.focus();
                              }, 100);
                            case 8:
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
              key: "_computeStepDescription",
              value: function(e) {
                var t = "ui.panel.page-authorize.form.providers."
                    .concat(e.handler[0], ".step.")
                    .concat(e.step_id, ".description"),
                  n = [],
                  r = e.description_placeholders || {};
                return (
                  Object.keys(r).forEach(function(e) {
                    n.push(e), n.push(r[e]);
                  }),
                  this.localize.apply(this, [t].concat(n))
                );
              },
            },
            {
              kind: "method",
              key: "_computeLabelCallback",
              value: function(e) {
                var t = this;
                return function(n) {
                  return t.localize(
                    "ui.panel.page-authorize.form.providers."
                      .concat(e.handler[0], ".step.")
                      .concat(e.step_id, ".data.")
                      .concat(n.name)
                  );
                };
              },
            },
            {
              kind: "method",
              key: "_computeErrorCallback",
              value: function(e) {
                var t = this;
                return function(n) {
                  return t.localize(
                    "ui.panel.page-authorize.form.providers."
                      .concat(e.handler[0], ".error.")
                      .concat(n)
                  );
                };
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
              value: (function() {
                var e = c(
                  regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((t.preventDefault(), null != this._step)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if ("form" === this._step.type) {
                                e.next = 6;
                                break;
                              }
                              return (
                                this._providerChanged(this.authProvider),
                                e.abrupt("return")
                              );
                            case 6:
                              return (
                                (this._state = "loading"),
                                this.style.setProperty(
                                  "min-height",
                                  "".concat(this.offsetHeight, "px")
                                ),
                                (n = Object.assign({}, this._stepData, {
                                  client_id: this.clientId,
                                })),
                                (e.prev = 9),
                                (e.next = 12),
                                fetch(
                                  "/auth/login_flow/".concat(
                                    this._step.flow_id
                                  ),
                                  {
                                    method: "POST",
                                    credentials: "same-origin",
                                    body: JSON.stringify(n),
                                  }
                                )
                              );
                            case 12:
                              return (r = e.sent), (e.next = 15), r.json();
                            case 15:
                              if ("create_entry" !== (i = e.sent).type) {
                                e.next = 19;
                                break;
                              }
                              return (
                                this._redirect(i.result), e.abrupt("return")
                              );
                            case 19:
                              return (e.next = 21), this._updateStep(i);
                            case 21:
                              e.next = 28;
                              break;
                            case 23:
                              (e.prev = 23),
                                (e.t0 = e.catch(9)),
                                console.error("Error submitting step", e.t0),
                                (this._state = "error"),
                                (this._errorMessage = this._unknownError());
                            case 28:
                              return (
                                (e.prev = 28),
                                this.style.setProperty("min-height", ""),
                                e.finish(28)
                              );
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[9, 23, 28, 31]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              kind: "get",
              static: !0,
              key: "styles",
              value: function() {
                return Object(i.c)(a());
              },
            },
          ],
        };
      },
      Object(r.a)(i.a)
    );
    customElements.define("ha-auth-flow", A);
    var T = n(65),
      R = n(75);
    function z(e) {
      return (z =
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
    function I() {
      var e = B([
        "\n      ha-pick-auth-provider {\n        display: block;\n        margin-top: 48px;\n      }\n    ",
      ]);
      return (
        (I = function() {
          return e;
        }),
        e
      );
    }
    function N(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value;
      } catch (l) {
        return void n(l);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    function L(e) {
      return function() {
        var t = this,
          n = arguments;
        return new Promise(function(r, i) {
          var o = e.apply(t, n);
          function a(e) {
            N(o, r, i, a, s, "next", e);
          }
          function s(e) {
            N(o, r, i, a, s, "throw", e);
          }
          a(void 0);
        });
      };
    }
    function M() {
      var e = B([
        '\n            <ha-pick-auth-provider\n              .resources="',
        '"\n              .clientId="',
        '"\n              .authProviders="',
        '"\n              @pick-auth-provider="',
        '"\n            ></ha-pick-auth-provider>\n          ',
      ]);
      return (
        (M = function() {
          return e;
        }),
        e
      );
    }
    function F() {
      var e = B([
        "\n      <p>\n        ",
        "\n      </p>\n      ",
        '\n\n      <ha-auth-flow\n        .resources="',
        '"\n        .clientId="',
        '"\n        .redirectUri="',
        '"\n        .oauth2State="',
        '"\n        .authProvider="',
        '"\n        .step="{{step}}"\n      ></ha-auth-flow>\n\n      ',
        "\n    ",
      ]);
      return (
        (F = function() {
          return e;
        }),
        e
      );
    }
    function D() {
      var e = B(["\n        <p>", "</p>\n      "]);
      return (
        (D = function() {
          return e;
        }),
        e
      );
    }
    function B(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    function H(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function V(e, t) {
      return !t || ("object" !== z(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function U(e, t, n) {
      return (U =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = q(e));

                );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function q(e) {
      return (q = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function K(e, t) {
      return (K =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.e(104).then(n.bind(null, 669));
    var X = (function(e) {
      function t() {
        var e;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          ((e = V(this, q(t).call(this))).clientId = void 0),
          (e.redirectUri = void 0),
          (e.oauth2State = void 0),
          (e._authProvider = void 0),
          (e._authProviders = void 0),
          (e.translationFragment = "page-authorize");
        var n = {},
          r = location.search.substr(1).split("&"),
          i = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var s, c = r[Symbol.iterator]();
            !(i = (s = c.next()).done);
            i = !0
          ) {
            var l = s.value.split("=");
            l.length > 1 &&
              (n[decodeURIComponent(l[0])] = decodeURIComponent(l[1]));
          }
        } catch (u) {
          (o = !0), (a = u);
        } finally {
          try {
            i || null == c.return || c.return();
          } finally {
            if (o) throw a;
          }
        }
        return (
          n.client_id && (e.clientId = n.client_id),
          n.redirect_uri && (e.redirectUri = n.redirect_uri),
          n.state && (e.oauth2State = n.state),
          e
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
            t && K(e, t);
        })(t, Object(r["a"])(i["a"])),
        (n = t),
        (o = [
          {
            key: "render",
            value: function() {
              var e = this;
              if (!this._authProviders)
                return Object(i.f)(
                  D(),
                  this.localize("ui.panel.page-authorize.initializing")
                );
              var t = document.createElement("div");
              (t.innerText = this.localize(
                "ui.panel.page-authorize.logging_in_with",
                "authProviderName",
                "NAME"
              )),
                (t.innerHTML = t.innerHTML.replace(
                  "**NAME**",
                  "<b>".concat(this._authProvider.name, "</b>")
                ));
              var n = this._authProviders.filter(function(t) {
                return t !== e._authProvider;
              });
              return Object(i.f)(
                F(),
                this.localize(
                  "ui.panel.page-authorize.authorizing_client",
                  "clientId",
                  this.clientId
                ),
                t,
                this.resources,
                this.clientId,
                this.redirectUri,
                this.oauth2State,
                this._authProvider,
                n.length > 0
                  ? Object(i.f)(
                      M(),
                      this.resources,
                      this.clientId,
                      n,
                      this._handleAuthProviderPick
                    )
                  : ""
              );
            },
          },
          {
            key: "firstUpdated",
            value: function(e) {
              if (
                (U(q(t.prototype), "firstUpdated", this).call(this, e),
                this._fetchAuthProviders(),
                this.redirectUri)
              ) {
                var n = document.createElement("a");
                (n.href = this.redirectUri),
                  n.host === location.host && Object(R.a)(!1);
              }
            },
          },
          {
            key: "_fetchAuthProviders",
            value: (function() {
              var e = L(
                regeneratorRuntime.mark(function e() {
                  var t, n;
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              window.providersPromise || Object(T.a)()
                            );
                          case 3:
                            return (t = e.sent), (e.next = 6), t.json();
                          case 6:
                            if (
                              ((n = e.sent),
                              400 !== t.status ||
                                "onboarding_required" !== n.code)
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (location.href = "/?"), e.abrupt("return");
                          case 10:
                            if (0 !== n.length) {
                              e.next = 13;
                              break;
                            }
                            return (
                              alert(
                                "No auth providers returned. Unable to finish login."
                              ),
                              e.abrupt("return")
                            );
                          case 13:
                            (this._authProviders = n),
                              (this._authProvider = n[0]),
                              (e.next = 20);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(0)),
                              console.error(
                                "Error loading auth providers",
                                e.t0
                              );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 17]]
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
          },
          {
            key: "_handleAuthProviderPick",
            value: (function() {
              var e = L(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this._authProvider = t.detail;
                          case 1:
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
        ]),
        (a = [
          {
            key: "properties",
            get: function() {
              return {
                _authProvider: {},
                _authProviders: {},
                clientId: {},
                redirectUri: {},
                oauth2State: {},
              };
            },
          },
          {
            key: "styles",
            get: function() {
              return Object(i.c)(I());
            },
          },
        ]),
        o && H(n.prototype, o),
        a && H(n, a),
        t
      );
    })();
    customElements.define("ha-authorize", X),
      setTimeout(function() {
        return n.e(119).then(n.t.bind(null, 660, 7));
      }, 2e3);
  },
]);
//# sourceMappingURL=authorize.6a793cc5.js.map
